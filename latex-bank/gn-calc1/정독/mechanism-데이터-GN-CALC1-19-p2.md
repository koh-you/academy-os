---
name: mechanism-데이터-GN-CALC1-19-p2
description: 개념원리 미적분Ⅰ 19 부정적분의 계산(2/3 · 163~169쪽 23문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅰ · 전사본 latex-bank/gn-calc1
  section: 19 부정적분의 계산
  unit_code: GN-CALC1-19
  part: "2/3"
  extract_range: "163~169쪽 · 163-e4~169-340"
  total_problems: 23
  unit_total: 46
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc1/items/<id>.tex
  image_source: latex-bank/gn-calc1/figures/ (이 범위 그림 0문)
---

# 개념원리 미적분Ⅰ · 19 부정적분의 계산 (2/3) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅰ 19단원 「부정적분의 계산」 163~169쪽 23문항 전수를 다룬다. 이 범위는 구역이 하나뿐이다 — 「필수·발전 예제」(163-e4~169-340). 그 안이 필수 예제 8문(163-e4 · 164-e5 · 165-e6 · 165-e7 · 166-e8 · 166-e9 · 167-e10 · 168-e11) · 발전 예제 1문(169-e12) · 확인체크 14문으로 갈린다. 그림은 한 장도 없다. 개념원리 고등의 벤더 난이도 신호는 구역과 태그로 나타난다 — tag 「확인체크」는 개념 확인이라 ★1, 「필수」 예제는 ★2, 「발전」 예제는 ★3 이 출발점이고 여기서 M_total·통찰로 ±1 조정했다.

다만 이 범위의 확인체크는 **모두 직전 필수·발전 예제의 쌍둥이**다(예제 하나 + 확인체크 1~2문이 한 묶음으로 배치돼 있다). 그래서 확인체크의 실질 난이도는 ★1 이 아니라 **직전 예제의 ★ 를 상속한 값 ± 추가 단계**다. 이 파일은 그 상속을 기준으로 라벨을 붙였고, 그 결과 raw 확인체크 출발점(★1)과 2단 어긋난 6문(164-329 · 166-333 · 166-334 · 168-338 · 169-339 · 169-340)은 rationale 에 `[분류 이슈]` 한 줄을 남기고 파일 끝 표에 모았다. 라벨을 ★1~2 로 억지로 낮추지 않았다.

이 범위의 골조는 여섯으로 갈린다. (가) **피적분함수를 약분·전개해 정리한 뒤 적분**(163-e4 · 163-327), (나) **두 부정적분을 하나로 묶어 정리한 뒤 초기조건으로 적분상수 결정**(164-e5 · 164-328 · 164-329), (다) **f' 또는 접선의 기울기가 주어질 때 f 복원**(165-e6 · 165-e7 · 165-330 · 165-331 · 165-332), (라) **관계식·구간별 정의에서 f 복원** — 관계식 양변 미분(166-e8 · 166-333)과 구간별 f' + 연속조건(166-e9 · 166-334), (마) **부정적분으로 정의된 함수의 극한식을 미분계수로 읽기**(167-e10 · 167-335 · 167-336), (바) **극값 조건으로 적분상수·계수 결정**(168-e11 · 168-337 · 168-338). 마지막에 함수방정식 f(x+y)=f(x)+f(y)+… 과 f'(0) 으로 f 를 복원하는 발전 묶음(169-e12 · 169-339 · 169-340)이 붙는다.

단원 전체를 관통하는 착안은 하나다 — **적분하기 전에 피적분함수·조건을 먼저 정리한다**(두 적분을 묶고, 관계식을 미분하고, 극한식을 미분계수로 읽고). 그래서 통찰 라벨이 I-EQV 로 크게 쏠린다. 그 쏠림 자체가 이 단원의 성격이라 억지로 다른 코드로 분산하지 않았다. 소문항(⑴~⑷)이 있는 문항의 Mₛ 는 소문항 수가 아니라 **서로 다른 골조 단계 수**로 셌다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC1-163-e4
  page: 163
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑷ 부정적분 구하기. 분수식 약분((x^3-1)/(x-1)), 문자 상수 t 가 든 다항식,
    두 적분의 합·차를 하나로 묶어야 정리되는 꼴((x+5)^2 와 (x-5)^2 · x^2/(x+3) 와 9/(x+3)).
  category: "피적분함수 약분·전개·묶기 → 다항식 적분 공식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑶⑷ 에서 같은 dx 를 가진 두 적분을 하나로 묶어 분자를 약분 가능한 꼴로 바꾼다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "피적분함수를 약분·전개해 정리한 뒤 적분하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    적분 공식 자체는 x^n 한 줄이고 난이도는 전부 「적분하기 전 정리」에 있다.
    ⑶⑷ 는 따로 적분하면 막히고 묶어야 풀린다는 점이 이 예제의 요지 — 묶기 착안 1개(EQV d1).
    ⑵ 는 적분변수가 x 라 t 가 상수라는 표기 함정(T-표기) 하나. 필수 ★2 출발점 유지.
  tier: star_2
  mechanism_primary: "두 적분 묶기·분자 인수분해 → 약분·전개 → 다항식 항별 적분 → +C"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\dfrac{1}{3}x^3+\dfrac{1}{2}x^2+x+C$ ⑵ $\dfrac{1}{3}x^3-\dfrac{t}{2}x^2+t^2x+C$ ⑶ $\dfrac{2}{3}x^3+50x+C$ ⑷ $\dfrac{1}{2}x^2-3x+C$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/163-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 세제곱 상수(1 → 8·27·64)와 ⑶ 의 ±5, ⑷ 의 +3·9 를 바꿀 수 있다. 제약: 묶은 뒤 분자가 분모로 반드시 나누어떨어져야 하므로 ⑷ 의 상수는 (분모 상수)^2 여야 한다. ⑵ 의 문자는 적분변수 x 와 겹치지 않는 문자만."
    creative: "(1) 분모를 x^2+x+1 같은 이차식으로 올리면 인수분해 착안이 한 단계 깊어짐(★2 유지~★3) (2) 묶으면 상쇄돼 상수만 남는 배치(합·차의 곱)로 바꾸면 계산이 사라지고 착안만 남음(★2) (3) 묶어도 나누어떨어지지 않게 해 몫·나머지로 쪼개게 하면 ★3."
```

```yaml
- id: GN-CALC1-163-327
  page: 163
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 부정적분 구하기. (x^4+x^2+1)/(x^2+x+1) 약분, 문자 y 가 든 (x-y)^2,
    두 적분의 차((x/2+2)^2 와 (x/2-2)^2), 두 분수식 적분의 합((x^3-3x)/(x+2) 와 (3x+8)/(x+2)).
  category: "두 적분 묶기·인수분해 약분 → 다항식 적분"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 적분을 묶은 뒤 x^4+x^2+1=(x^2+x+1)(x^2-x+1), x^3+8=(x+2)(x^2-2x+4) 로 약분한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "피적분함수를 약분·전개해 정리한 뒤 적분하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    163-e4 의 쌍둥이. 묶기 착안은 같고 약분에 쓰는 인수분해가 x^4+x^2+1 복이차식과 세제곱 합으로 한 급 위다.
    확인체크 출발점은 ★1 이지만 직전 예제(★2)를 상속하고 통찰 1개를 반영해 ★2.
  tier: star_2
  mechanism_primary: "두 적분 묶기 → 복이차식·세제곱 합 인수분해로 약분 → 항별 적분 → +C"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\dfrac{1}{3}x^3-\dfrac{1}{2}x^2+x+C$ ⑵ $\dfrac{1}{3}x^3-x^2y+xy^2+C$ ⑶ $2x^2+C$ ⑷ $\dfrac{1}{3}x^3-x^2+4x+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/163-327.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑶ 의 1/2·2 와 ⑷ 의 -3x·+8 을 바꿀 수 있다. 제약: ⑶ 은 제곱의 차라 교차항만 남으므로 상수를 바꿔도 형태가 유지되고, ⑷ 는 묶은 분자가 x^3+(분모 상수)^3 이 되도록 맞춰야 한다."
    creative: "(1) ⑵ 처럼 적분변수가 아닌 문자를 두 개 넣어 어느 것이 상수인지 고르게 하면 표기 함정 강화(★2) (2) 묶기 전후 결과를 비교시키는 참·거짓 보기형으로 바꾸면 I-MI 한 개 추가 ★3 (3) 분모를 x^2+x+1 로 두고 분자를 학생이 만들게 하면 역방향 ★3."
```

```yaml
- id: GN-CALC1-164-e5
  page: 164
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 두 부정적분의 합·차로 정의된 f(x) 에서 한 함숫값이 주어질 때 다른 함숫값 구하기.
    ⑴ (x-1)(x^2+x+1) 과 x(x-1)^2, f(0)=0 → f(-1). ⑵ 세제곱 차·합을 이차식으로 나눈 두 분수식, f(-1)=3 → f(2).
  category: "두 적분 묶어 정리 → 적분 → 초기조건으로 C 결정 → 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 적분을 하나로 묶어 피적분함수를 뺀(더한) 뒤 세제곱 차·합 인수분해로 약분한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 부정적분을 묶어 정리 → 초기조건으로 적분상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    163-e4 의 묶기 착안에 「적분상수 C 는 한 개」라는 처리가 붙은 형태.
    묶고 나면 ⑴ 은 이차식, ⑵ 는 2x 로 줄어 계산이 가볍다 — 난이도는 전부 묶기에 있다.
    통찰 1개(EQV d1) · M_total 6 → 필수 ★2 유지.
  tier: star_2
  mechanism_primary: "두 적분 묶기 → 약분해 저차 다항식 → 적분 → 주어진 함숫값으로 C → 목표 함숫값 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $-\dfrac{1}{6}$ ⑵ $6$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/164-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세제곱 상수(1·8), 초기조건 지점(0·-1)과 값, 목표 지점(-1·2)을 바꿀 수 있다. 제약: 초기조건 지점은 분모가 0 이 되는 값을 피하고, 답이 분수로 지저분해지지 않게 초기조건 지점을 0 이나 ±1 로 두는 편이 낫다."
    creative: "(1) 묶은 결과가 상수가 되게 만들어 f 가 일차함수임을 보게 하기(★2) (2) 초기조건 대신 f(1)-f(0) 형태의 차를 주면 C 가 소거돼 착안이 하나 더 붙음(★3) (3) 두 적분의 계수를 미지수로 두고 f(2) 값을 맞추게 하면 역방향 ★3."
```

```yaml
- id: GN-CALC1-164-328
  page: 164
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x) 가 10x^9+9x^8+8x^7+…+2x+1 의 부정적분이고 f(0)=1 일 때 f(1) 구하기.
  category: "계수·차수 패턴 파악 → 항별 적분 → C 결정 → f(1)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "계수 10,9,…,1 과 차수 9,8,…,0 의 대응을 읽어 적분 결과가 x^10+x^9+…+x 임을 일반항으로 본다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "계수·차수 패턴이 있는 다항식의 부정적분과 함숫값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    항을 10개 늘어놓고 하나씩 적분하면 시간이 갈리고, (k+1)x^k 의 적분이 x^(k+1) 이라는 패턴을 보면 한 줄이다.
    f(1) 에서 모든 항이 1 이 되는 배치라 계산 부담은 없다 — 패턴 착안 1개(PD d1).
    확인체크 ★1 출발 + 통찰 1개 → ★2.
  tier: star_2
  mechanism_primary: "(k+1)x^k → x^(k+1) 패턴으로 일괄 적분 → f(0)=1 로 C → x=1 에서 항 수 세기"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/164-328.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최고차(10)와 f(0) 값을 바꿀 수 있다. 제약: 계수와 차수의 대응((k+1)x^k)이 깨지면 패턴 착안이 사라지고 단순 계산이 된다. 묻는 지점은 x=1 이나 x=-1 로 두어야 답이 정수로 떨어진다."
    creative: "(1) f(-1) 을 묻게 바꾸면 부호 교대 합이라 T-부호 함정 추가(★2~3) (2) 계수를 1,2,…,10 처럼 역순으로 두면 패턴이 안 맞아 직접 적분 — 난이도는 내려가고 계산만 늘어 질 저하 (3) 최고차를 n 으로 일반화해 f(1) 을 n 식으로 답하게 하면 Mₐ 상승 ★3."
```

```yaml
- id: GN-CALC1-164-329
  page: 164
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x) 가 x^4/(x^2+2) 의 적분에서 4/(x^2+2) 의 적분을 뺀 함수이고 f(1)=2 일 때,
    f(k)=5 를 만족시키는 정수 k 구하기.
  category: "두 적분 묶어 약분 → C 결정 → 삼차방정식의 정수해"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 적분을 묶어 x^4-4=(x^2+2)(x^2-2) 로 약분해 이차식 적분으로 낮춘다"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(k)=5 가 삼차방정식이라 세 근 중 정수 조건을 통과하는 근만 남기고 나머지를 기각한다"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "두 적분을 묶어 정리 → 적분상수 결정 → 함숫값 방정식의 정수해"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞의 묶기 골조(164-e5)에 「함숫값 방정식을 풀어 미지수를 찾는」 단계가 하나 더 붙는다.
    삼차방정식이 되므로 인수정리로 근 하나를 찾고 남은 이차식의 근은 정수가 아니라 기각해야 한다(VF d1).
    [분류 이슈] 확인체크 출발점 ★1 과 2단 차 — 직전 예제(★2) 상속 + 방정식 단계 1개로 ★3.
  tier: star_3
  mechanism_primary: "두 적분 묶기 → 약분 후 적분 → f(1)=2 로 C → f(k)=5 삼차방정식 → 정수근만 채택"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/164-329.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 상수 2 와 뺄셈 항의 분자 4 는 (분모 상수)^2 로 묶여 있어 함께 움직여야 한다. f(1)·f(k) 의 값은 삼차방정식이 정수근을 정확히 하나 갖도록 골라야 한다(나머지 두 근은 무리수)."
    creative: "(1) 정수 조건을 빼고 모든 실근의 합을 묻게 하면 VF 가 사라지고 근과 계수의 관계로 ★2 (2) 정수근이 두 개 나오도록 상수를 조정하면 답이 집합이 되어 I-MI 추가 ★3 (3) k 를 자연수로 제한하면 기각 단계가 한 번 더 필요해 ★3 유지·검증 부담 상승."
```

```yaml
- id: GN-CALC1-165-e6
  page: 165
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    f'(x)=3x^2-4x 이고 f(1)=-1 일 때 f(3) 구하기.
  category: "도함수 적분 → 초기조건으로 C → 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "f'(x) 와 한 함숫값이 주어질 때 f(x) 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    이 단원 전체의 기본형. 적분 → C 결정 → 대입 세 단계가 전부이고 착안이 없다.
    필수 ★2 출발이지만 통찰 0 · M_total 4 이므로 산식의 -1 조건에 걸려 ★1.
    라벨을 억지로 ★2 로 올리지 않고 기록한다(1단 차라 이슈 표에는 올리지 않음).
  tier: star_1
  mechanism_primary: "f'(x) 적분 → f(1)=-1 로 C 결정 → f(3) 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$9$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/165-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f' 의 계수(3·-4)와 초기조건 지점·값, 묻는 지점을 자유롭게 바꿀 수 있다. 제약: f' 를 적분했을 때 분수 계수가 나오지 않도록 최고차 계수를 차수로 나누어떨어지게 두면 답이 정수."
    creative: "(1) f(3)-f(1) 을 묻게 하면 C 가 소거돼 착안 한 개 추가(★2) (2) f' 를 그래프로 주면 I-RT 추가 ★2 (3) 초기조건을 「f 의 최솟값이 k」처럼 간접 조건으로 바꾸면 165-332 형(★2~3)."
```

```yaml
- id: GN-CALC1-165-e7
  page: 165
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    점 (0, 2) 를 지나는 곡선 y=f(x) 위의 임의의 점에서의 접선의 기울기가 6x^2-10x 일 때 f(x) 구하기.
  category: "접선의 기울기 → f'(x) 로 번역 → 적분 → 지나는 점으로 C"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "기하 조건(임의의 점에서의 접선의 기울기)을 대수 조건 f'(x)=6x^2-10x 로 옮긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "접선의 기울기가 주어진 곡선의 방정식 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계산은 165-e6 과 같고 다른 점은 조건이 기하 언어로 포장돼 있다는 것뿐이다.
    「임의의 점에서의 접선의 기울기 = f'(x)」 번역이 이 유형의 전부라 RT d1 한 개.
    통찰이 있어 -1 조건에 걸리지 않고 필수 ★2 유지.
  tier: star_2
  mechanism_primary: "접선의 기울기를 f'(x) 로 읽기 → 적분 → 지나는 점 (0,2) 로 C 결정"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$f(x)=2x^3-5x^2+2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/165-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기 식의 계수(6·-10)와 지나는 점을 바꿀 수 있다. 제약: 적분 뒤 계수가 정수가 되도록 최고차 계수를 차수의 배수로 두고, 지나는 점의 x좌표는 0 이면 C 가 바로 나온다."
    creative: "(1) 지나는 점을 x=1 처럼 0 이 아닌 곳으로 옮기면 C 계산이 한 줄 늘 뿐 ★2 유지 (2) 접선의 기울기를 「점 (x, f(x)) 에서의 접선이 x축과 이루는 각」으로 주면 번역이 두 단계 ★3 (3) 지나는 점 대신 극값 조건을 주면 168-e11 형으로 이동(★2~3)."
```

```yaml
- id: GN-CALC1-165-330
  page: 165
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f'(x)=-6x^2+12x-1 이고 f(-1)=6 일 때, 방정식 f(x)=0 의 모든 근의 곱 구하기.
  category: "적분·C 결정 → 삼차방정식의 근과 계수의 관계"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "삼차방정식의 근을 직접 구하지 않고 근과 계수의 관계(방정식 단원)로 곱을 읽는다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "f' 와 함숫값으로 f 를 구한 뒤 방정식의 근과 계수의 관계"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞부분(적분 → C)은 165-e6 과 같고, 뒤에 「모든 근의 곱」이 붙어 방정식 단원 도구가 필요해진다.
    f(x)=0 은 인수분해되지 않으므로 근을 구하려 들면 막히고 근과 계수의 관계로 넘어가야 한다(XU d1).
    확인체크 ★1 출발 + 단원 결합 통찰 1개 → ★2.
  tier: star_2
  mechanism_primary: "f' 적분 → f(-1)=6 으로 C → f(x)=0 의 계수만 보고 근의 곱 = -(상수항)/(최고차항)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/165-330.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f' 의 계수와 f(-1) 값을 바꿀 수 있다. 제약: 최고차 계수가 음수라 근의 곱 부호가 뒤집히므로 부호를 확인해야 하고, 답이 유리수로 떨어지게 초기조건 값을 정수로 둔다."
    creative: "(1) 근의 합이나 두 근씩의 곱의 합을 묻게 바꾸면 같은 골조 ★2 (2) 「서로 다른 세 실근을 가질 조건」으로 바꾸면 극값 부호 판정이 붙어 ★4 (3) f(x)=0 이 인수분해되도록 상수를 맞추면 XU 가 사라져 ★1~2 로 내려감."
```

```yaml
- id: GN-CALC1-165-331
  page: 165
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x) 를 적분하라는 문제를 미분하는 것으로 잘못 보아 9x^2-2x+1 을 얻었고 f(0)=2 일 때,
    원래 구해야 했던 f(x) 의 부정적분 구하기.
  category: "잘못 본 조건 해석 → f'=9x^2-2x+1 로 f 복원 → 다시 적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「미분했더니 9x^2-2x+1」이라는 진술을 f'(x)=9x^2-2x+1 로 옮겨 적분 문제로 바꾼다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "미분과 적분을 뒤바꿔 본 조건 해석 후 두 번 적분하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조건 문장을 f'=… 로 옮기기만 하면 나머지는 적분 두 번이다(EQV d1).
    두 번째 적분에서 적분상수를 또 붙여야 하고 답이 +C 로 끝난다는 점이 유일한 표기 함정.
    확인체크 ★1 출발 + 통찰 1개 → ★2.
  tier: star_2
  mechanism_primary: "잘못 본 결과를 f' 로 읽기 → 적분·f(0)=2 로 f 확정 → f 를 다시 적분하고 +C"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3}{4}x^4-\dfrac{1}{3}x^3+\dfrac{1}{2}x^2+2x+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/165-331.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "잘못 본 결과의 계수(9·-2·1)와 f(0) 값을 바꿀 수 있다. 제약: 두 번 적분하므로 최고차 계수가 두 번의 차수 나눗셈을 견디도록 두지 않으면 답의 분수가 지저분해진다."
    creative: "(1) 반대로 「미분해야 하는데 적분했더니」로 뒤집으면 한 번 미분으로 끝나 ★1~2 (2) f(0) 대신 잘못 구한 함수의 값을 주면 조건 해석이 한 겹 더해져 ★3 (3) 최종 답을 정적분 값으로 묻게 하면 20단원 결합."
```

```yaml
- id: GN-CALC1-165-332
  page: 165
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x) 의 최솟값이 1 이고 곡선 y=f(x) 위의 임의의 점에서의 접선의 기울기가 6x-6 일 때 f(-1) 구하기.
  category: "기울기 → f' 번역 → 적분 → 최솟값 조건으로 C → 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접선의 기울기 조건을 f'(x)=6x-6 으로 옮긴다"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「최솟값이 1」을 f'=0 인 지점(x=1)에서의 함숫값이 1 이라는 등식으로 바꿔 C 를 정한다"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "접선의 기울기 + 최댓값·최솟값 조건으로 적분상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    165-e7 의 기울기 번역에 초기조건이 「지나는 점」이 아니라 「최솟값」으로 간접화된 형태.
    최솟값을 쓰려면 먼저 f'=0 인 지점을 찾아야 한다는 한 겹이 추가된다(EQV d1).
    적분 결과가 이차함수라 계산은 가볍다. 확인체크 ★1 출발 + 통찰 2개 → ★2.
  tier: star_2
  mechanism_primary: "기울기를 f' 로 읽기 → 적분 → f'=0 인 x=1 에서 f=1 로 C → f(-1) 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$13$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/165-332.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기 식 6x-6 의 계수와 최솟값 1, 묻는 지점 -1 을 바꿀 수 있다. 제약: 최고차 계수가 양수여야 최솟값이 존재하고, f'=0 의 근이 정수가 되도록 계수를 맞춘다."
    creative: "(1) 기울기를 삼차로 올려 극솟값·극댓값이 둘 다 생기면 어느 것이 최솟값인지 따져야 해 ★3(168-e11 형과 합류) (2) 최솟값 대신 「x축에 접한다」로 주면 판별식 결합 ★3 (3) 최고차 계수를 음수로 두고 최댓값을 주면 T-부호 함정 추가 ★2~3."
```

```yaml
- id: GN-CALC1-166-e8
  page: 166
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    다항함수 f(x) 의 한 부정적분 F(x) 가 F(x)=xf(x)-2x^3+x^2 을 만족시키고 f(0)=1 일 때 f(x) 구하기.
  category: "관계식 양변 미분 → F 소거 → f' 결정 → 적분·C"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "F'=f 임을 이용해 관계식 양변을 미분하면 f 가 소거되고 xf'(x) 만 남는 형태로 바뀐다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "F(x)=xf(x)+… 꼴 관계식에서 양변 미분으로 f(x) 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    F 와 f 가 한 식에 섞여 있어 그대로는 손을 댈 수 없고, 양변 미분으로 F 를 지우는 착안이 관문이다(EQV d2).
    미분 뒤 양변의 f(x) 가 상쇄돼 xf'(x)=… 만 남는다는 것을 보지 못하면 진행이 안 된다.
    f 가 일반 다항함수라 Mₐ=3, M_total 8 — 필수 ★2 출발에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "F'=f 로 양변 미분 → f 상쇄 → xf'(x) 정리해 f'(x) → 적분 → f(0)=1 로 C"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$f(x)=3x^2-2x+1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/166-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변의 -2x^3+x^2 계수와 f(0) 값을 바꿀 수 있다. 제약: 미분 뒤 xf'(x) 를 x 로 나눠야 하므로 우변을 미분한 식이 x 로 나누어떨어져야 한다(상수항이 남으면 안 됨)."
    creative: "(1) 좌변을 F(x)=(x+1)f(x)+… 로 두면 나눗셈 인수가 x+1 이 되어 x=-1 처리 논의가 붙음 ★3~4 (2) f(0) 대신 f 의 차수를 주면 최고차항 비교로 푸는 다른 갈래가 생겨 I-SC 추가 ★4 (3) 관계식을 적분 기호로 쓰면 166-333 형."
```

```yaml
- id: GN-CALC1-166-e9
  page: 166
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    모든 실수에서 연속인 f(x) 의 도함수가 x>1 에서 4x, x<1 에서 3x^2 로 구간별로 주어지고
    f(2)=5 일 때 f(-2) 구하기.
  category: "구간별 적분 → x=1 에서의 연속조건으로 두 적분상수 연결 → 대입"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「모든 실수에서 연속」을 x=1 에서의 좌우 극한이 같다는 등식으로 바꿔 두 구간의 적분상수를 연결한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "구간별로 주어진 f' 와 연속조건으로 f 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    구간마다 적분상수가 따로 생긴다는 것과, 그 둘을 이어 주는 유일한 조건이 x=1 에서의 연속이라는 것이 관문(EQV d2).
    주어진 함숫값 f(2) 는 x>1 쪽 상수만 정하므로 반대쪽으로 건너가려면 반드시 경계를 거쳐야 한다.
    경계 처리(T-경계)와 구간 구분(T-범위) 두 함정으로 Mₜ=2, M_total 8 → 필수 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "구간별로 f' 적분(상수 둘) → f(2)=5 로 한쪽 상수 → x=1 연속으로 다른 쪽 상수 → f(-2)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-10$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/166-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경계 x=1, 두 구간의 f' 식(4x·3x^2), 주어진 함숫값과 묻는 지점을 바꿀 수 있다. 제약: 주어진 함숫값과 묻는 지점이 경계의 서로 반대쪽에 있어야 연속조건이 살아 있고, 경계에서 두 적분 결과가 정수로 만나게 계수를 맞추면 답이 깔끔하다."
    creative: "(1) f 가 미분가능하다고 주면 경계에서 f' 의 좌우 값도 같아야 해 조건이 하나 늘고 계수를 역추적하게 됨 ★4 (2) 경계 두 개(구간 셋)로 늘리면 같은 착안 반복이라 ★ 는 그대로이고 계산만 늘어 질 저하 (3) 연속 조건을 빼고 f(-2) 를 물으면 답이 결정되지 않는 오답 함정 — 참·거짓 보기형으로 바꾸면 ★3."
```

```yaml
- id: GN-CALC1-166-333
  page: 166
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    다항함수 f(x) 가 ∫f(x)dx = f(x)+xf(x)-2x^4+4x^2 을 만족시키고 f(1)=-1/3 일 때 f(x) 구하기.
  category: "관계식 양변 미분 → 적분항 소거 → 인수분해·약분으로 f' → 적분·C"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "양변을 미분해 좌변의 적분 기호를 없애면 f(x) 가 상쇄되고 (1+x)f'(x) 만 남는다"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "우변 8x^3-8x 를 8x(x-1)(x+1) 로 인수분해해 (1+x) 로 약분하고 f'(x) 를 얻는다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "F(x)=xf(x)+… 꼴 관계식에서 양변 미분으로 f(x) 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    166-e8 의 쌍둥이인데 미분 뒤 f' 의 계수가 x 가 아니라 1+x 라 약분을 위해 우변 인수분해가 한 단계 더 붙는다.
    인수분해를 못 보면 f' 가 분수식으로 남아 다항함수라는 조건과 충돌한다.
    [분류 이슈] 확인체크 출발점 ★1 과 2단 차 — 직전 예제(★3) 상속으로 ★3.
  tier: star_3
  mechanism_primary: "양변 미분 → 적분항·f 상쇄 → (1+x)f'(x)=8x(x-1)(x+1) 약분 → f' 적분 → f(1) 로 C"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$f(x)=\dfrac{8}{3}x^3-4x^2+1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/166-333.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 -2x^4+4x^2 의 계수와 f(1) 값을 바꿀 수 있다. 제약: 미분한 우변이 (1+x) 로 나누어떨어져야 하므로 x=-1 을 대입해 0 이 되도록 계수를 묶어야 한다(짝수 차수 항만 쓰면 자동으로 맞음)."
    creative: "(1) 좌변 계수를 f(x)+2xf(x) 로 바꾸면 약분 인수가 1+2x 가 되어 인수분해 난도가 오름 ★3~4 (2) f(1) 대신 최고차항 계수를 주면 차수 비교 갈래가 생겨 I-SC 추가 ★4 (3) 우변을 (1+x) 로 나누어떨어지지 않게 두면 「다항함수」 조건으로 계수를 역추적하는 역방향 문제 ★4."
```

```yaml
- id: GN-CALC1-166-334
  page: 166
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    모든 실수에서 연속인 f(x) 의 도함수가 x>-1 에서 3x^2-1, x<-1 에서 2x+1 로 주어지고
    f(0)=2 일 때 f(-3)+f(1) 의 값 구하기.
  category: "구간별 적분 → x=-1 연속조건으로 상수 연결 → 양쪽 함숫값 합"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "연속 조건을 x=-1 에서의 좌우 함숫값이 같다는 등식으로 바꿔 두 구간의 적분상수를 연결한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "구간별로 주어진 f' 와 연속조건으로 f 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    166-e9 의 쌍둥이. 주어진 f(0) 은 경계 오른쪽 상수만 정하고, 묻는 두 값이 경계 양쪽에 하나씩 놓여 있어
    연속조건을 반드시 거쳐야 한다(EQV d2). 경계가 x=-1 이라 부호 처리 실수가 한 번 더 걸린다.
    [분류 이슈] 확인체크 출발점 ★1 과 2단 차 — 직전 예제(★3) 상속으로 ★3.
  tier: star_3
  mechanism_primary: "구간별 적분(상수 둘) → f(0)=2 로 오른쪽 상수 → x=-1 연속으로 왼쪽 상수 → f(-3)+f(1)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/166-334.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경계 -1, 두 구간의 f' 식, f(0) 값과 묻는 두 지점을 바꿀 수 있다. 제약: 묻는 두 지점이 경계 양쪽에 하나씩 있어야 연속조건이 필수가 되고, 경계에서 두 적분 결과가 정수로 만나도록 상수항을 맞춘다."
    creative: "(1) f(-3)-f(1) 처럼 차를 물으면 부호 함정이 강화되고 골조는 유지(★3) (2) 미분가능 조건을 추가하면 경계에서 f' 도 일치해야 해 계수 역추적이 붙음 ★4 (3) 연속인 f 의 식을 구간별로 직접 쓰게 하면 서술형 ★3."
```

```yaml
- id: GN-CALC1-167-e10
  page: 167
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    f(x) 가 (x-3)(x^2+3x+9) 의 부정적분일 때 극한 {f(2+h)-f(2-h)}/h (h→0) 의 값 구하기.
  category: "대칭 차분 극한 → 2f'(2) → f' 는 피적분함수"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분자에 f(2) 를 넣었다 빼 두 개의 미분계수 꼴로 쪼개면 극한이 2f'(2) 가 된다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "부정적분으로 정의된 함수의 미분계수(극한식) 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f 를 실제로 적분할 필요가 없고 f'(x) 가 피적분함수라는 점과 극한식의 변형만 있으면 끝난다.
    분모가 2h 가 아니라 h 이고 뒤쪽이 f(2-h) 라 계수 2 를 놓치기 쉽다(T-표기·T-부호로 Mₜ=2).
    통찰 1개(EQV d2) · M_total 6 → 필수 ★2 유지.
  tier: star_2
  mechanism_primary: "극한을 f(2)+끼워넣기로 2f'(2) 로 변형 → f'(x)=x^3-27 → x=2 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-38$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/167-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수의 세제곱 차 상수(27)와 극한 지점 2 를 바꿀 수 있다. 제약: 피적분함수를 전개했을 때 대입 값이 정수로 떨어지게 두고, 극한 지점은 피적분함수가 0 이 되는 값을 피해야 답이 0 이 되지 않는다."
    creative: "(1) 분모를 2h 로 바꾸면 계수 착안이 사라져 ★1~2 (2) {f(2+2h)-f(2-3h)}/h 처럼 계수를 다르게 하면 5f'(2) 로 일반화돼 ★3 (3) 극한값을 주고 피적분함수의 계수를 묻게 하면 역방향 ★3."
```

```yaml
- id: GN-CALC1-167-335
  page: 167
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x) 가 5x^2+2x-1 의 부정적분일 때 극한 {f(x)-f(1)}/(x^2-1) (x→1) 의 값 구하기.
  category: "분모 인수분해 → 미분계수 꼴 분리 → f'(1) 의 1/2"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분모 x^2-1 을 (x-1)(x+1) 로 쪼개 {f(x)-f(1)}/(x-1) 과 1/(x+1) 의 곱으로 만든다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "부정적분으로 정의된 함수의 미분계수(극한식) 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    167-e10 의 쌍둥이로, 변형 지점이 분자가 아니라 분모다.
    분모를 인수분해해 미분계수 꼴을 만들고 남은 1/(x+1) 에 x=1 을 넣는 두 조각 처리가 전부(EQV d2).
    적분은 할 필요가 없다. 확인체크 ★1 출발 + 통찰 1개 d2 → ★2.
  tier: star_2
  mechanism_primary: "분모 (x-1)(x+1) 로 분리 → f'(1)·1/2 → f'(x) 는 피적분함수이므로 x=1 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/167-335.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수의 계수와 극한 지점(1)을 바꿀 수 있다. 제약: 분모는 극한 지점을 근으로 가져야 하고(x^2-1 → x^2-a^2), 남는 인수의 값이 0 이 되지 않아야 한다."
    creative: "(1) 분모를 x^3-1 로 올리면 나머지 인수가 이차식이라 계산 한 줄 추가(★2) (2) 분자를 f(x^2)-f(1) 로 바꾸면 합성 처리가 붙어 ★3 (3) 극한값을 주고 피적분함수의 미지 계수를 묻게 하면 167-336 형."
```

```yaml
- id: GN-CALC1-167-336
  page: 167
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x) 가 6x^2-4x+k 의 부정적분이고 f(0)=1, 극한 {f(1+h)-f(1)}/h (h→0) 가 4 일 때 f(1) 구하기. (k 는 상수)
  category: "극한 = f'(1) 로 읽어 k 결정 → f(0)=1 로 C → f(1)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "주어진 극한을 미분계수의 정의로 읽어 f'(1)=4, 즉 피적분함수의 x=1 값이 4 라는 식으로 바꾼다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "부정적분으로 정의된 함수의 미분계수(극한식) 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    극한식이 미분계수 정의 그대로라 변형이 없고, 그 대신 미지 상수 k 와 적분상수 C 두 개를 순서대로 정한다.
    k 는 극한 조건에서, C 는 f(0) 에서 나온다는 분담을 보면 한 줄씩 끝난다(EQV d1).
    확인체크 ★1 출발 + 통찰 1개 → ★2.
  tier: star_2
  mechanism_primary: "극한을 f'(1) 로 읽어 k 결정 → 적분 → f(0)=1 로 C → f(1) 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/167-336.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수의 계수(6·-4), f(0) 값, 극한값 4 와 지점 1 을 바꿀 수 있다. 제약: 극한 조건에서 k 가 정수로 나오게 하고, 적분 뒤 계수가 정수가 되도록 최고차 계수를 차수의 배수로 둔다."
    creative: "(1) 극한을 대칭 차분(167-e10 꼴)으로 바꾸면 계수 착안이 붙어 ★3 (2) k 대신 f' 의 최고차 계수를 미지수로 두면 차수 판단이 추가 ★3 (3) f(1) 대신 f 의 극값을 묻게 하면 168 묶음과 합류 ★3."
```

```yaml
- id: GN-CALC1-168-e11
  page: 168
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    f'(x)=x^2+2x-3 이고 f(x) 의 극댓값이 9 일 때 극솟값 구하기.
  category: "f' 부호로 극대·극소 위치 판정 → 극댓값 조건으로 C → 극솟값"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "극댓값이라는 결과 조건에서 C 를 역추적한다 — 먼저 f' 의 부호로 극대 지점을 찾아야 대입이 가능하다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "f' 가 주어질 때 극값 조건으로 적분상수·계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    적분은 한 줄이고 관문은 「극댓값 9 는 어느 x 에서의 값인가」다 — f'=(x+3)(x-1) 의 부호에서 왼쪽 근이 극대.
    극대·극소를 뒤집으면 답의 부호가 통째로 어긋난다(T-부호·T-범위로 Mₜ=2).
    통찰 1개(BW d1) · M_total 7 → 필수 ★2 유지.
  tier: star_2
  mechanism_primary: "f' 인수분해·부호표로 극대 x=-3·극소 x=1 → f(-3)=9 로 C → f(1) 계산"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{5}{3}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/168-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f' 의 두 근(-3·1)과 극댓값 9 를 바꿀 수 있다. 제약: f' 의 최고차 계수가 양수면 왼쪽 근이 극대라는 배치가 고정되고, 근을 정수로 두어야 극값이 유리수로 떨어진다."
    creative: "(1) f' 의 최고차 계수를 음수로 바꾸면 극대·극소가 뒤바뀌어 같은 골조로 함정 강화(★3) (2) 극댓값과 극솟값의 차를 물으면 C 가 소거돼 조건 하나가 덜 필요해짐(★2) (3) 극댓값을 주고 f' 의 계수를 묻게 하면 168-337·338 형 역방향 ★3."
```

```yaml
- id: GN-CALC1-168-337
  page: 168
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x) 가 3x^2+ax-24 의 부정적분이고 x=4 에서 극솟값 -72 를 가질 때 f(x) 의 극댓값 구하기. (a 는 상수)
  category: "극점 조건 f'(4)=0 으로 a → 극솟값으로 C → 다른 근에서 극댓값"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「x=4 에서 극솟값 -72」를 f'(4)=0 과 f(4)=-72 두 개의 식으로 쪼개 a 와 C 를 차례로 정한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "f' 가 주어질 때 극값 조건으로 적분상수·계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    168-e11 과 같은 골조인데 미지수가 a·C 두 개라 조건도 두 개로 쪼개 쓴다는 점만 다르다.
    a 를 정하고 나면 f'=3(x-4)(x+2) 로 인수분해돼 극대 지점이 바로 나온다.
    확인체크 ★1 출발 + 직전 예제(★2) 상속 · 통찰 1개 → ★2.
  tier: star_2
  mechanism_primary: "f'(4)=0 으로 a → 적분 → f(4)=-72 로 C → f' 의 다른 근 x=-2 에서 극댓값"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$36$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/168-337.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극점 x=4, 극솟값 -72, 상수항 -24 를 바꿀 수 있다. 제약: f'(4)=0 이 성립하도록 상수항과 극점을 함께 움직여야 하고, 나머지 근이 정수가 되도록 두면 극댓값이 정수로 떨어진다."
    creative: "(1) 극솟값 대신 극댓값을 주고 극솟값을 묻는 대칭 변형(★2) (2) 상수항도 미지수로 두고 극값 두 개를 주면 연립이 되어 ★3 (3) 「x=4 에서 극값」만 주고 극대·극소 어느 쪽인지 따지게 하면 I-MI 추가 ★3."
```

```yaml
- id: GN-CALC1-168-338
  page: 168
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f'(x)=k(x^2-4) 이고 f(x) 의 극댓값이 20, 극솟값이 -12 일 때 상수 k 의 값 구하기. (k<0)
  category: "k<0 로 극대·극소 위치 판정 → 두 극값 식을 빼서 C 소거 → k"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "k<0 이므로 f'=k(x-2)(x+2) 의 부호가 뒤집혀 극대가 x=2, 극소가 x=-2 임을 먼저 정한다"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "극댓값·극솟값 두 식을 빼면 적분상수 C 가 소거되고 k 만 남는 하나의 식이 된다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "f' 가 주어질 때 극값 조건으로 적분상수·계수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    미지수가 k·C 두 개인데 조건도 두 개라 연립이 되지만, 빼기로 C 를 먼저 지우는 편이 한 줄로 끝난다(CON d2).
    앞단에서 k<0 때문에 극대·극소가 통상과 반대라는 판정을 놓치면 부호가 통째로 어긋난다(T-부호).
    [분류 이슈] 확인체크 출발점 ★1 과 2단 차 — 통찰 2개·M_total 8 로 ★3.
  tier: star_3
  mechanism_primary: "k<0 로 극대 x=2·극소 x=-2 판정 → f(2)-f(-2)=32 로 C 소거 → k 결정"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/168-338.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f' 의 근(±2)과 두 극값(20·-12)을 바꿀 수 있다. 제약: 극댓값이 극솟값보다 커야 하고, 두 값의 차가 k 배 되는 상수로 나누어떨어져야 k 가 정수로 나온다. k<0 조건을 빼면 답이 두 개가 된다."
    creative: "(1) k>0 으로 바꾸면 극대·극소 위치만 맞바뀌고 골조 동일(★3) (2) 부호 조건을 빼고 가능한 k 를 모두 구하게 하면 I-MI 추가 ★4 (3) 두 극값의 차 대신 합을 주면 C 가 남아 연립을 그대로 풀어야 해 CON 이 사라짐 ★2~3."
```

```yaml
- id: GN-CALC1-169-e12
  page: 169
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    다항함수 f(x) 가 모든 실수 x, y 에 대하여 f(x+y)=f(x)+f(y)+xy-2 를 만족시키고
    f'(0)=1 일 때 f(2) 의 값 구하기.
  category: "x=y=0 대입 → 도함수 정의에 관계식 대입 → f' 결정 → 적분·C"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x=y=0 을 대입해 f(0) 을 먼저 확정한다(뒤의 극한에서 f(0) 이 필요)"
    - step: 2
      type: I-RT
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "함수방정식을 도함수의 정의에 넣어 f(x+h)-f(x) 를 f(h)-f(0) 꼴로 바꾸면 f'(x)=f'(0)+x 가 된다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "함수방정식 f(x+y)=f(x)+f(y)+… 와 f'(0) 으로 f 구하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    관계식만으로는 f 의 값을 하나도 모르는 상태에서 시작한다 — 대입으로 f(0) 을 얻고,
    도함수의 정의라는 다른 표현으로 옮겨야 비로소 f'(x) 가 나온다(RT d3). 이 전환이 이 유형의 전부다.
    f 가 일반 다항함수라 Mₐ=3. 발전 ★3 출발 + 통찰 2개·depth 3 → ★4(저노출 유형 RT 포함).
  tier: star_4
  mechanism_primary: "x=y=0 으로 f(0) → 도함수 정의에 관계식 대입해 f'(x)=f'(0)+x → 적분 → f(0) 으로 C → f(2)"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$6$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/169-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "관계식의 잔여항(xy)의 계수, 상수항(-2), f'(0) 값, 묻는 지점을 바꿀 수 있다. 제약: x=y=0 대입으로 f(0) 이 결정되어야 하므로 상수항이 있어야 하고, 잔여항은 x=0 또는 y=0 에서 0 이 되는 꼴이어야 한다."
    creative: "(1) 잔여항을 xy(x+y) 로 올리면 f' 가 이차식이 되어 169-339 형(★3~4) (2) f'(0) 대신 f'(1) 을 주면 역산 한 줄 추가(169-340 형) (3) f 의 차수를 미지로 두고 계수비교로 푸는 갈래를 열면 I-SC 추가 ★5 후보."
```

```yaml
- id: GN-CALC1-169-339
  page: 169
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    미분가능한 f(x) 가 모든 실수 x, y 에 대하여 f(x+y)=f(x)+f(y)+xy(x+y) 를 만족시키고
    f'(0)=6 일 때 f(x) 구하기.
  category: "x=y=0 대입 → 도함수 정의 전환 → f'(x)=f'(0)+x^2 → 적분"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x=y=0 대입으로 f(0)=0 을 확정한다"
    - step: 2
      type: I-RT
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "도함수의 정의에 관계식을 넣어 잔여항 xh(x+h) 를 h 로 나눈 뒤 h→0 을 보내 f'(x)=f'(0)+x^2 을 얻는다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "함수방정식 f(x+y)=f(x)+f(y)+… 와 f'(0) 으로 f 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    169-e12 의 쌍둥이로 잔여항이 xy 대신 xy(x+y) 라 f' 가 이차식이 된다.
    극한을 보낼 때 잔여항 xh(x+h)/h = x(x+h) 에서 h→0 처리 한 줄이 추가될 뿐 골조는 같고,
    묻는 것이 f(x) 자체라 마지막 대입이 없어 검증 부담은 e12 보다 낮다.
    [분류 이슈] 확인체크 출발점 ★1 과 2단 차 — 직전 발전 예제(★4) 상속에서 -1 하여 ★3.
  tier: star_3
  mechanism_primary: "x=y=0 으로 f(0)=0 → 도함수 정의로 f'(x)=f'(0)+x^2 → 적분 → f(0)=0 으로 C"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$f(x)=\dfrac{1}{3}x^3+6x$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/169-339.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "잔여항의 계수와 f'(0) 값을 바꿀 수 있다. 제약: 잔여항은 x 또는 y 가 0 일 때 0 이 되어야 관계식이 모순되지 않고, f'(0) 을 차수로 나누어떨어지는 값으로 두면 계수가 정수."
    creative: "(1) f(2) 같은 한 값을 묻게 하면 e12 와 같은 ★4 (2) 잔여항을 x^2y+xy^2+xy 처럼 섞으면 f' 가 이차+일차라 항 정리 한 줄 추가 ★4 (3) 미분가능 조건을 빼고 연속만 주면 풀 수 없는 오답 함정 — 참·거짓 보기형 ★4."
```

```yaml
- id: GN-CALC1-169-340
  page: 169
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    미분가능한 f(x) 가 모든 실수 x, y 에 대하여 f(x+y)=f(x)+f(y)+2xy 를 만족시키고
    f'(1)=3 일 때 f(-2) 의 값 구하기.
  category: "x=y=0 대입 → 도함수 정의 전환 → f'(1) 에서 f'(0) 역산 → 적분·대입"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x=y=0 대입으로 f(0)=0 을 확정한다"
    - step: 2
      type: I-RT
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "도함수의 정의에 관계식을 넣어 f'(x)=f'(0)+2x 를 얻고, 주어진 값이 f'(0) 이 아니라 f'(1) 이므로 여기서 f'(0) 을 역산한다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "함수방정식 f(x+y)=f(x)+f(y)+… 와 f'(0) 으로 f 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    169-e12·339 와 같은 골조에 「주어진 것이 f'(0) 이 아니다」는 한 겹이 얹혔다.
    f'(x)=f'(0)+2x 를 먼저 세워 두면 f'(1)=3 에서 f'(0) 이 한 줄로 나오고, 나머지는 적분·대입이다.
    잔여항이 2xy 로 가장 단순해 세 문항 중 계산이 가장 가볍다.
    [분류 이슈] 확인체크 출발점 ★1 과 2단 차 — 직전 발전 예제(★4) 상속에서 -1 하여 ★3.
  tier: star_3
  mechanism_primary: "x=y=0 으로 f(0)=0 → f'(x)=f'(0)+2x → f'(1)=3 으로 f'(0) 역산 → 적분 → f(-2)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/169-340.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "잔여항 계수 2, f'(1) 값 3, 묻는 지점 -2 를 바꿀 수 있다. 제약: 주어지는 미분계수의 지점을 0 이 아닌 곳으로 두어야 역산 단계가 살아 있고, f'(0) 이 정수가 되도록 값을 맞춘다."
    creative: "(1) f'(-1) 을 주면 부호 역산이라 T-부호 함정 추가(★3) (2) f(-2) 대신 f 의 극솟값을 묻게 하면 168 묶음과 결합 ★4 (3) 잔여항을 axy 로 두고 f(1) 조건을 함께 주면 a 까지 역추적 ★4."
```

## 표본 판정 요약 (23문)

- ★ 분포: ★1 1 · ★2 13 · ★3 8 · ★4 1 · ★5 0
- 통찰형 22 · 절차형 1(165-e6) · premium 0
- 통찰 유형 분포(단계 수 합 30): I-EQV 20 · I-RT 5 · I-PD 1 · I-XU 1 · I-VF 1 · I-BW 1 · I-CON 1 — SC/SYM 없음, ★5 없음
- type_hint 상위: 「f' 가 주어질 때 극값 조건으로 적분상수·계수 결정」 3 · 「부정적분으로 정의된 함수의 미분계수(극한식) 구하기」 3 · 「함수방정식 f(x+y)=f(x)+f(y)+… 와 f'(0) 으로 f 구하기」 3 · 「피적분함수를 약분·전개해 정리한 뒤 적분하기」 2 · 「F(x)=xf(x)+… 꼴 관계식에서 양변 미분으로 f(x) 구하기」 2 (이하 「구간별 f' 와 연속조건」 2)
- 대상층: 중하위권 1 · 중위권 13 · 중상위권 8 · 상위권 1
- 그림: 0문(이 범위에는 그림이 없다)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.
여섯 건 모두 원인이 같다 — 확인체크의 raw 출발점은 ★1 이지만 이 범위의 확인체크는 직전 예제의 쌍둥이라 실질 난이도가 예제를 따라간다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC1-164-329 | 확인체크(★1 출발)이나 164-e5(★2) 골조에 삼차방정식 정수해 기각(VF)이 더해져 ★3. 2단 차라 기록 | ★2 / ★3 |
| GN-CALC1-166-333 | 확인체크(★1 출발)이나 166-e8(★3)의 쌍둥이에 (1+x) 약분용 인수분해가 더해져 ★3 | ★2 / ★3 |
| GN-CALC1-166-334 | 확인체크(★1 출발)이나 166-e9(★3)와 골조·조건 개수가 같아 ★3 | ★2 / ★3 |
| GN-CALC1-168-338 | 확인체크(★1 출발)이나 k<0 부호 판정 + 두 극값 식의 C 소거(CON d2)로 ★3 | ★2 / ★3 |
| GN-CALC1-169-339 | 확인체크(★1 출발)이나 169-e12(★4) 함수방정식 골조를 그대로 써서 ★3 | ★3 / ★4 |
| GN-CALC1-169-340 | 확인체크(★1 출발)이나 같은 함수방정식 골조 + f'(1)→f'(0) 역산이 있어 ★3 | ★3 / ★4 |

참고로 165-e6 은 반대 방향이다 — 필수 예제(★2 출발)이지만 통찰 0 · M_total 4 라 산식의 -1 조건에 걸려 ★1 로 내렸다. 1단 차라 표에는 올리지 않았다.

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위의 통찰은 I-EQV 한 코드에 20/30 이 몰린다. 그러나 그 안이 **적분 전 정리**(두 적분 묶기·약분), **관계식 미분으로 F·∫ 소거**, **연속조건으로 적분상수 연결**, **극한식을 미분계수로 읽기**, **극값 조건을 f'=0 과 함숫값으로 쪼개기** 다섯 갈래로 갈린다. 카탈로그에서는 하나의 EQV 유형으로 묶지 말고 **다섯 갈래를 각각 유형으로 세워야** 변형 생성이 가능하다.
- 「두 부정적분을 묶어 정리」(163-e4·163-327·164-e5·164-329)와 「피적분함수 약분」은 같은 착안의 강약 차이라 **하나의 유형으로 통합하고 소문항 난도로 구분**하는 편이 낫다.
- 「관계식 양변 미분」(166-e8·166-333)은 F(x)= 꼴과 ∫f(x)dx= 꼴 두 포장이 있지만 골조가 동일하다. **포장 변형**으로 붙이면 충분하다. 다만 미분 뒤 나누는 인수가 x 인지 1+x 인지에 따라 인수분해 단계가 생기므로 그 지점을 난도 파라미터로 기록해 둘 것.
- 「구간별 f' + 연속」(166-e9·166-334)은 이 단원에서 유일하게 **경계 처리(T-경계)** 가 본질인 유형이다. 미분가능 조건을 추가한 상위 변형이 자연스럽게 ★4 가 되므로 카탈로그에서 ★3·★4 두 층으로 세워 두면 좋다.
- 「함수방정식 + f'(0)」(169-e12·169-339·169-340)은 이 범위에서 유일한 ★4급 저노출 유형(I-RT d3)이다. 잔여항(xy · xy(x+y) · 2xy)만 바꾸면 난도가 이어지므로 **하나의 유형 + 잔여항 파라미터**로 세우는 편이 변형에 유리하다.
- 확인체크는 이 단원에서도 독립 신호가 아니다. 카탈로그를 만들 때는 **직전 예제의 유형·★ 를 상속**시키고, 추가된 단계 수만큼 ±1 하는 규칙으로 두는 편이 실제 난이도와 맞는다(이 범위 14문 중 6문이 raw 규칙과 2단 어긋났다).
