---
name: mechanism-데이터-GN-CALC1-19-p1
description: 개념원리 미적분Ⅰ 19 부정적분의 계산(1/3 · 162쪽 4문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅰ · 전사본 latex-bank/gn-calc1
  section: 19 부정적분의 계산
  unit_code: GN-CALC1-19
  part: "1/3"
  extract_range: "162~162쪽 · 162-323~162-326"
  total_problems: 4
  unit_total: 46
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc1/items/<id>.tex
  image_source: latex-bank/gn-calc1/figures/ (이 범위 그림 없음)
---

# 개념원리 미적분Ⅰ · 19 부정적분의 계산 (1/3) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅰ 19단원 「부정적분의 계산」 162쪽 4문항(162-323~162-326)을 다룬다. 구역은 「개념원리 익히기」 하나뿐이고, 단원 전체 46문 중 도입부에 해당한다. 개념원리 고등의 벤더 난이도 신호는 구역과 태그로 나타나는데 — 「개념원리 익히기」(통번호 · tag 「확인체크」 포함)는 개념 확인이라 ★1 출발이고, 이 범위는 level·tag 가 붙어 있지 않아(`vendor_level: "-"` · `vendor_tags: []`) 구역 신호만으로 출발점을 잡은 뒤 M_total·통찰로 ±1 조정했다.

이 범위의 골조는 하나의 공식 $\int x^n\,dx=\dfrac{1}{n+1}x^{n+1}+C$ ($n$ 은 음이 아닌 정수)와 그 선형성(실수배·합·차)을 **어떤 형태의 피적분함수에 적용할 수 있게 다듬느냐**로만 갈린다. ① 거듭제곱 하나에 공식을 바로 쓰는 것(162-323), ② 이미 전개된 다항식을 항별로 쪼개는 것(162-324), ③ 곱·거듭제곱 꼴을 **먼저 전개해** 다항식으로 만드는 것(162-325), ④ 두 부정적분의 합·차를 **하나로 묶어** 피적분함수를 먼저 상쇄시키는 것(162-326)의 네 단계로, 교과서가 의도한 계단이 그대로 드러난다. 네 문항 모두 라벨이 붙는 통찰 단계가 없어 전 문항이 절차형이고, M_total 도 4~5 에 머문다. 라벨을 억지로 흩지 않고 기록을 우선했으며, 골조상 한 단 위로 볼 여지가 있는 162-326 만 파일 끝 「분류 이슈 목록」에 남겼다.

소문항(⑴~⑷)이 있는 문항의 Mₛ 는 소문항 수가 아니라 **서로 다른 골조 단계 수**로 셌다. 같은 공식의 반복 적용(거듭제곱 공식 네 번)은 1단계로 보고, 부호가 뒤집히거나 변수 기호가 바뀌는 소문항이 섞이면 Mₜ(T-부호 · T-표기)로 반영했다. 적분상수 $C$ 를 빠뜨리는 실수는 이 단원 내내 따라다니므로 전 문항에 T-표기 한 카테고리로 잡았다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CALC1-162-323
  page: 162
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑵ 부정적분 구하기 — \int x^5\,dx, \int x^{12}\,dx (단항 거듭제곱 두 개).
  category: "거듭제곱의 부정적분 공식에 지수 대입 → 적분상수 C"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x^n 의 부정적분(거듭제곱 공식 · n 은 음이 아닌 정수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 ∫x^n dx = x^{n+1}/(n+1)+C 에 n=5, 12 를 대입하는 한 단계뿐이다. 지수를 두 자리로 키운 ⑵ 도 계산이 아니라 "지수가 커져도 같은 공식"을 확인시키는 장치라 Mₖ 는 1. 함정은 적분상수 C 누락(T-표기) 하나. 개념원리 익히기 구역·통찰 0·M_total 4 → ★1(하한).
  tier: star_1
  mechanism_primary: "∫x^n dx = x^{n+1}/(n+1)+C → n=5, 12 대입 → 1/6 x^6+C, 1/13 x^13+C"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{1}{6}x^6+C$ ⑵ $\dfrac{1}{13}x^{13}+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/162-323.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 n 을 다른 음이 아닌 정수(3 · 8 · 20 · 0)로 자유롭게 바꿀 수 있다. 제약: 이 단원 범위에서는 n 이 음이 아닌 정수여야 하고(n=-1 은 교육과정 밖), 계수 1/(n+1) 이 기약분수로 그대로 남게 둔다. 소문항 둘을 한 자리 지수·두 자리 지수로 나눠 두는 배치는 유지하는 편이 좋다."
    creative: "(1) 지수를 문자 n 으로 두고 결과의 계수를 묻기 → Mₐ 2 로 올라 ★2 (2) 미분한 결과를 주고 원시함수를 찾게 하면 역방향 골조(I-BW d1)가 생겨 ★2 (3) 계수를 붙여 ∫3x^5 dx 로 만들면 실수배 성질이 추가돼 162-324 의 골조로 넘어감(★1 유지)."
```

```yaml
- id: GN-CALC1-162-324
  page: 162
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 부정적분 구하기 — \int(-x+4)\,dx, \int(3x^2+7)\,dx, \int(-x^3+x+2)\,dx, \int(x^7+4x^2-1)\,dx (이미 전개된 다항식 네 개).
  category: "부정적분의 선형성(실수배·합·차) → 항별 거듭제곱 공식 → 상수항은 ax"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항함수의 항별 부정적분(실수배·합·차의 성질)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    피적분함수가 이미 전개돼 있어 선형성으로 항을 쪼갠 뒤 각 항에 거듭제곱 공식을 쓰고 상수항은 ax 로 두면 끝이다. 소문항이 넷이지만 골조는 동일한 한 단계의 반복이라 Mₛ 1, 분수 계수 1/8·4/3 도 일반 학생이 무리 없이 처리하는 양이라 Mₖ 1. 함정은 적분상수 누락(T-표기) 하나. 개념원리 익히기 구역·통찰 0·M_total 4 → ★1(하한).
  tier: star_1
  mechanism_primary: "선형성으로 항별 분리 → 각 항에 x^{n+1}/(n+1) → 상수항은 ax → 적분상수 C 하나로 통합"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $-\dfrac{1}{2}x^2+4x+C$ ⑵ $x^3+7x+C$ ⑶ $-\dfrac{1}{4}x^4+\dfrac{1}{2}x^2+2x+C$ ⑷ $\dfrac{1}{8}x^8+\dfrac{4}{3}x^3-x+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/162-324.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 항의 계수·차수·상수항을 자유롭게 바꿀 수 있다. 제약: 모든 차수가 음이 아닌 정수여야 하고, 1/(n+1) 배 뒤 계수가 정수나 분모 작은 기약분수로 남게 맞춘다. 음수 계수 항을 최소 하나(그리고 상수항을 최소 하나) 남겨 두어야 부호·ax 확인 효과가 유지된다. 소문항 수는 2~4개."
    creative: "(1) 한 소문항의 변수 기호를 t·u 로 바꿔 dt 표기를 확인시키기(★1 유지) (2) f'(x) 를 주고 f(1)=k 를 덧붙여 C 를 결정하게 하면 골조가 「부정적분 + 초기조건」으로 넘어가 ★2 (3) 계수를 문자 a 로 두고 적분 결과의 특정 계수를 묻기 → Mₐ 2 로 ★2."
```

```yaml
- id: GN-CALC1-162-325
  page: 162
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 부정적분 구하기 — \int(x+2)(2-x)\,dx, \int(x+1)^2\,dx, \int(3t-1)(2t+3)\,dt (곱·거듭제곱 꼴, ⑶ 은 변수가 t).
  category: "피적분함수 전개 → 다항식으로 정리 → 항별 부정적분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곱·거듭제곱 꼴 피적분함수를 전개한 뒤 부정적분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    곱의 꼴 그대로는 공식을 쓸 수 없으므로 먼저 전개해 다항식으로 만드는 단계가 앞에 하나 붙는다. 다만 ⑴ 은 합·차 공식으로 4-x^2, ⑵ 는 완전제곱 전개라 공통수학1 수준의 표준 정리이고 ⑶ 도 이차식 전개라 Mₖ 는 1. 함정은 적분상수 누락과 ⑶ 의 적분변수가 t 라는 표기(둘 다 T-표기 한 카테고리). 개념원리 익히기 구역·통찰 0·M_total 4 → ★1(하한).
  tier: star_1
  mechanism_primary: "곱·거듭제곱 전개 → 다항식 → 항별 x^{n+1}/(n+1) → +C (변수가 t 면 t 로 적분)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $-\dfrac{1}{3}x^3+4x+C$ ⑵ $\dfrac{1}{3}x^3+x^2+x+C$ ⑶ $2t^3+\dfrac{7}{2}t^2-3t+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/162-325.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(x+2)(2-x) → (x+a)(a-x), (x+1)^2 → (x+c)^2, (3t-1)(2t+3) → (pt+q)(rt+s) 로 계수를 바꿀 수 있다. 제약: 전개 결과가 이차 이하 다항식으로 떨어지게 두고(그래야 이 단계의 의도가 유지), 적분 뒤 분수 계수가 한두 개만 남도록 계수를 고른다. ⑶ 의 변수 t 는 바꾸지 않는 편이 좋다 — 적분변수 확인이 이 소문항의 목적이다."
    creative: "(1) (x+1)^2 을 (x+1)^3 으로 올리면 전개 항이 넷이 되어 Mₖ 상승 ★2 (2) (x+2)(2-x)=4-x^2 처럼 합·차 공식이 바로 보이게 두면 전개를 건너뛰는 착안(I-EQV d1)이 생겨 ★2 (3) (x+1)^2 을 치환적분으로 유도하는 형태는 미적분Ⅰ 범위 밖이므로 피한다."
```

```yaml
- id: GN-CALC1-162-326
  page: 162
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑵ 부정적분 구하기 — \int(x^2-4x+1)\,dx+\int(x^2+4x-1)\,dx, \int(2x^3+3x^2-5x)\,dx-\int(2x^3-x^2+3x)\,dx (두 부정적분의 합·차).
  category: "두 적분을 하나로 묶어 피적분함수를 먼저 합·차 → 상쇄된 다항식 → 항별 적분"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 부정적분의 합·차를 하나로 묶어 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각각 적분한 뒤 더해도 되지만, 선형성을 역으로 써서 피적분함수를 먼저 더하거나 빼면 ⑴ 은 2x^2, ⑵ 는 4x^2-8x 만 남아 한 줄로 끝난다. 묶는 착안이 눈에 띄지만 적분의 실수배·합·차 성질은 이 구역이 방금 가르친 내용 자체라 통찰 단계로 세지 않았다. 함정은 뺄셈에서 두 번째 피적분함수의 부호를 모두 바꾸는 것(T-부호)과 적분상수 둘을 하나로 합치는 것(T-표기) 둘. 개념원리 익히기 구역·통찰 0·M_total 5 → ★1 유지.
    [분류 이슈] 묶어서 계산하는 착안을 I-EQV d1 로 인정하면 ★2 후보이나, 선형성이 이 구역의 학습 내용이므로 절차형 ★1 로 기록.
  tier: star_1
  mechanism_primary: "선형성을 역으로 적용해 두 적분을 하나로 묶기 → 피적분함수 합·차로 항 상쇄 → 남은 다항식을 항별 적분 → +C"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{2}{3}x^3+C$ ⑵ $\dfrac{4}{3}x^3-4x^2+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/162-326.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 피적분함수의 계수를 바꿀 수 있다. 제약: 합·차 뒤 남는 다항식이 짧아야(항 한두 개) 「묶어서 계산」이라는 이 문항의 의도가 살아 있고, 상쇄되는 항을 최소 한 쌍(±4x 나 ±2x^3 처럼) 반드시 넣는다. 남은 항의 계수는 1/(n+1) 배 뒤 분모가 작게 유지되도록 고른다."
    creative: "(1) 상쇄가 전혀 없게 만들면 묶는 이득이 사라져 162-324 와 같은 골조로 내려감(★1) (2) f-g 가 상수가 되게 하면 답이 ax+C 한 줄이라 착안 효과가 극대화됨(★1~2) (3) 세 개 이상의 적분을 합·차로 묶거나 한쪽 피적분함수의 계수를 문자로 두면 Mₐ 상승 ★2 (4) ∫f dx 와 ∫g dx 의 적분상수가 서로 다른 값임을 묻는 서술형으로 바꾸면 T-표기 함정이 본문제가 되어 ★2."
```

## 표본 판정 요약 (4문)

- ★ 분포: ★1 4 · ★2 0 · ★3 0 · ★4 0 · ★5 0
- 통찰형 0 · 절차형 4 · premium 0
- M_total 분포: 4 가 3문(162-323 · 162-324 · 162-325) · 5 가 1문(162-326). 통찰 0 · M_total ≤ 5 라 v3.8 의 −1 조정 대상이지만 ★1 이 하한이라 전 문항 ★1 유지.
- type_hint: 「x^n 의 부정적분(거듭제곱 공식)」 1 · 「다항함수의 항별 부정적분」 1 · 「곱·거듭제곱 전개 후 부정적분」 1 · 「두 부정적분의 합·차 묶기」 1 — 네 문항이 서로 다른 한 계단씩을 맡는다.
- 대상층: 하위권 3 · 중하위권 1(162-326 은 Mₜ 2 로 하위권 캡 초과).
- 그림: 0문(이 범위에 figure 없음).

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 이 범위는 구역이 하나(개념원리 익히기)뿐이라 벤더 신호와의 어긋남은 사실상 없고, 골조상 한 단 위로 볼 여지가 있는 한 문항만 걸렸다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC1-162-326 | 두 적분을 하나로 묶어 피적분함수를 먼저 상쇄시키는 착안을 I-EQV d1 로 인정하면 통찰형 ★2 후보. 선형성이 이 구역의 학습 내용 자체라 절차형 ★1 로 기록 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위의 네 type_hint 는 **한 공식의 적용 난도 계단**이다. 카탈로그에서는 「다항함수의 부정적분」이라는 한 유형(base ★1)으로 통합하고, ① 단항 거듭제곱 ② 전개된 다항식 ③ 전개가 필요한 곱·거듭제곱 ④ 두 적분의 합·차 를 그 아래 드릴 단계로 메모해 두는 편이 낫다. 넷을 각각 독립 유형으로 세우면 base ★ 가 전부 1 로 같아 변별에 쓸 수 없다.
- 다만 ④(162-326)만은 따로 떼어 둘 가치가 있다. 선형성을 **역방향으로** 쓰는 첫 지점이고, 19단원 뒤쪽의 「∫f dx 꼴이 섞인 등식에서 f 구하기」·정적분 단원의 「구간이 같은 두 적분 묶기」로 그대로 이어지므로, 카탈로그에서 「적분의 선형성 역이용」 유형으로 세우면 상위 단원과 연결된다.
- 이 범위에는 ★2 이상 슬롯이 없다. 변형으로 ★2 를 만들려면 variation_notes.creative 에 적어 둔 초기조건 결합(162-324) · 계수 문자화(162-323 · 162-326) · 전개 생략 착안(162-325)을 도입해야 하고, ★3 이상은 이 계단에서는 나오지 않는다 — 19단원 뒤쪽(2/3 · 3/3)의 「도함수 조건에서 f 복원」·「적분과 미분의 관계」 구역을 기다려야 한다.
- 적분상수 C 는 이 범위 전 문항에서 Mₜ 의 T-표기 한 카테고리로 고정해 잡았다. 카탈로그를 만들 때 이 관례를 19단원 전체(3파트)에 동일하게 적용해야 파트 간 M_total 이 비교 가능하다.
