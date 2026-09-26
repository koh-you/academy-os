---
name: mechanism-데이터-GN-CM1-15-p1
description: 개념원리 공통수학1 15 이차방정식의 근과 계수의 관계(1/3 · 121쪽 4문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1 · 전사본 latex-bank/gn-cm1
  section: 15 이차방정식의 근과 계수의 관계
  unit_code: GN-CM1-15
  part: "1/3"
  extract_range: "121쪽 · 121-240~121-243"
  total_problems: 4
  unit_total: 48
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (이 범위에는 그림 문항 없음)
---

# 개념원리 공통수학1 · 15 이차방정식의 근과 계수의 관계 (1/3) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학1 121쪽, 단원 15 「이차방정식의 근과 계수의 관계」의 앞 4문항(121-240~121-243) 전수를 다룬다. 구역은 전부 「개념원리 익히기」 통번호 문항이고, 개념원리 고등의 익히기 구역은 바로 앞 개념 설명을 그대로 확인하는 층이라 ★1 을 출발점으로 잡은 뒤 M_total·통찰로 ±1 조정했다. level·tag 신호는 전사본에 없어 vendor_level 은 "-", vendor_tags 는 [] 로 둔다. 네 문항 모두 소문항 묶음(⑴~⑷ 또는 ⑴⑵)이며 그림은 없다.

이 범위의 골조는 두 갈래다. 앞의 두 문항은 「근과 계수의 관계 → 대칭식을 기본대칭식(합·곱)으로 변형 → 대입」이고, 뒤의 두 문항은 그 역방향인 「두 근(또는 근의 공식으로 구한 복소수 근) → x²-(합)x+(곱)=0 · a(x-α)(x-β)」다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM1-121-240
  page: 121
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    x^2+3x-2=0 의 두 근 α, β 에 대해 ⑴ α+β ⑵ αβ ⑶ 1/α+1/β ⑷ α²+β² 의 값 구하기.
  category: "근과 계수의 관계 → 대칭식을 기본대칭식으로 변형 → 대입"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 근의 합·곱으로 대칭식의 값 구하기(근과 계수의 관계)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴⑵ 는 근과 계수의 관계를 그대로 읽는 단계이고, ⑶⑷ 는 1/α+1/β=(α+β)/αβ · α²+β²=(α+β)²-2αβ 로 고쳐 쓰는 한 단계씩이다.
    변형이 교재 바로 앞에서 제시된 표준 항등식이라 통찰로 세지 않는다(표준 공식 대입).
    익히기 구역 출발 ★1 · 통찰 0 · M_total 4 → ★1 유지(바닥이라 −1 적용 불가).
  tier: star_1
  mechanism_primary: "근과 계수의 관계로 α+β=-3, αβ=-2 → 1/α+1/β=(α+β)/αβ · α²+β²=(α+β)²-2αβ 로 변형 → 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $-3$ \quad ⑵ $-2$ \quad ⑶ $\dfrac{3}{2}$ \quad ⑷ $13$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/121-240.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항·상수항(3, -2)을 자유롭게 바꿀 수 있고 α+β=-b · αβ=c 가 그대로 따라온다. 제약: ⑶ 이 성립하려면 상수항≠0(αβ≠0), ⑷ 의 b²-2c 가 정수로 떨어지게 잡는다. 판별식 부호는 제약이 아니다(허근이어도 대칭식 값은 그대로 나온다)."
    creative: "(1) α³+β³ 또는 (α-β)² 를 소문항으로 추가하면 변형 단계가 한 겹 늘어 ★2 (2) 합·곱을 주고 원래 방정식을 되묻는 역방향으로 바꾸면 I-BW 후보 ★2 (3) α+1, β+1 처럼 파생된 두 수를 근으로 하는 방정식을 묻게 하면 이 단원 뒤쪽 골조와 결합해 ★2~3."
```

```yaml
- id: GN-CM1-121-241
  page: 121
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    3x^2-6x+2=0 의 두 근 α, β 에 대해 ⑴ α+β ⑵ αβ ⑶ α²-αβ+β² ⑷ β/α+α/β 의 값 구하기.
  category: "근과 계수의 관계(이차항 계수 1 아님) → 대칭식 변형 → 대입"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 근의 합·곱으로 대칭식의 값 구하기(이차항 계수가 1이 아닌 경우)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    앞 문항과 같은 골조이고 이차항 계수 3 때문에 α+β=-b/a · αβ=c/a 로 나누는 처리와 분수 계산이 붙는다.
    ⑶ 은 (α+β)²-3αβ, ⑷ 는 (α²+β²)/αβ 로 한 번씩 고쳐 쓰는 표준 변형이라 통찰 0.
    익히기 출발 ★1 · 통찰 0 · M_total 5 → 계산량만 늘어난 쌍둥이 문항이므로 ★1 유지.
  tier: star_1
  mechanism_primary: "α+β=2, αβ=2/3 → α²-αβ+β²=(α+β)²-3αβ · β/α+α/β=(α²+β²)/αβ 로 변형 → 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $2$ \quad ⑵ $\dfrac{2}{3}$ \quad ⑶ $2$ \quad ⑷ $4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/121-241.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 계수(3, -6, 2)를 바꿀 수 있다. 제약: 이 문항의 의도(계수 a 로 나누기)가 살려면 a 가 c 를 나누지 않아 αβ 가 분수여야 하고, ⑷ 때문에 상수항≠0 이어야 한다. (α+β)²-3αβ 와 (α²+β²)/αβ 가 정수로 떨어지게 잡으면 답이 깔끔하다."
    creative: "(1) α²+αβ+β² · α³+β³ 처럼 같은 골조의 다른 대칭식으로 교체(★1 유지) (2) α/β 와 β/α 를 각각 물으면 대칭식 골조가 깨져 두 근을 직접 구해야 하므로 ★3 (3) 계수 하나를 미정 k 로 두고 α²-αβ+β² 의 값이 주어진 수가 되게 하는 k 를 묻는 역방향은 I-BW 가 붙어 ★3."
```

```yaml
- id: GN-CM1-121-242
  page: 121
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    주어진 두 수를 근으로 하고 x^2 의 계수가 1 인 이차방정식 구하기. ⑴ 4, 6 ⑵ 5, -2 ⑶ 1±√5 ⑷ 3±i.
  category: "두 근 → 합·곱 계산(켤레쌍은 곱셈 공식) → x²-(합)x+(곱)=0"
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
    골조는 앞 두 문항의 역방향으로, 합과 곱을 구해 x²-(합)x+(곱)=0 에 넣는 한 줄 공식이다.
    ⑶⑷ 에서 켤레무리수·켤레복소수의 곱을 (a+b)(a-b) 로 처리해야 하고 i²=-1 부호(T-부호)가 걸린다.
    공식 자체는 교재가 바로 앞에서 준 것이라 통찰 0이지만, 소문항 범위가 정수→무리수→허수로 넓어 M_total 6.
    익히기 출발 ★1 에서 계산·표현 폭 확대로 +1 하여 ★2.
  tier: star_2
  mechanism_primary: "두 수의 합과 곱을 계산(켤레쌍은 곱셈 공식) → x²-(합)x+(곱)=0 에 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x^2-10x+24=0$ \quad ⑵ $x^2-3x-10=0$ \quad ⑶ $x^2-2x-4=0$ \quad ⑷ $x^2-6x+10=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/121-242.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 쌍의 수를 자유롭게 바꿀 수 있다. 제약: ⑶⑷ 는 켤레쌍(p±√q · p±qi)이어야 합·곱이 유리수가 되어 정수 계수 방정식이 나온다. 켤레가 아닌 무리수·허수를 섞으면 계수가 무리수·허수가 되어 문항 의도가 깨진다."
    creative: "(1) x² 의 계수를 1 이 아닌 a 로 지정하면 a{x²-(합)x+곱}=0 한 단계가 늘어 ★2 유지~★3 (2) 한 근과 계수 조건(유리수 계수·실수 계수)만 주고 켤레근 정리로 나머지 근을 찾게 하면 I-EQV 가 붙어 ★3 (3) 어떤 방정식의 두 근 α, β 에서 α+1, β+1 처럼 파생된 두 수를 근으로 하는 방정식을 만들게 하면 ★3."
```

```yaml
- id: GN-CM1-121-243
  page: 121
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    다음 이차식을 복소수의 범위에서 인수분해하기. ⑴ x^2-x-3 ⑵ x^2+9.
  category: "근의 공식으로 복소수 근 → a(x-α)(x-β) 로 인수분해"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "복소수 범위에서의 이차식 인수분해"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이차식=0 의 두 근을 근의 공식으로 구한 뒤 a(x-α)(x-β) 로 되돌리는 표준 절차다.
    ⑴ 은 판별식 13 이 완전제곱이 아니어서 근이 무리수, ⑵ 는 허근 ±3i 라 「실수 범위에서는 인수분해되지 않는다」는 범위 제약(T-범위)이 판단 지점이다.
    실수→복소수 범위 전환을 표현 전환(I-RT)으로 볼 여지가 있으나 교재가 직전에 제시한 공식의 직접 대입이라 절차형으로 둔다.
    익히기 출발 ★1 · M_total 6 · 허근 처리 → +1 하여 ★2.
    [분류 이슈] 복소수 범위 전환을 I-RT d1 로 인정하면 통찰형 ★2~3 후보가 된다.
  tier: star_2
  mechanism_primary: "이차식=0 의 두 근을 근의 공식으로 구함 → a(x-α)(x-β) 로 인수분해"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\left(x-\dfrac{1+\sqrt{13}}{2}\right)\left(x-\dfrac{1-\sqrt{13}}{2}\right)$ \quad ⑵ $(x+3i)(x-3i)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/121-243.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 은 판별식이 음이 아닌 비완전제곱수(여기 13)이면 근의 공식 꼴이 그대로 유지되고, ⑵ 는 x²+k(k>0) 꼴이면 ±√k i 로 같은 골조다. 제약: 판별식을 완전제곱수로 바꾸면 유리수 범위에서 인수분해되어 문항 의도가 사라지고, ⑵ 에서 k 가 완전제곱수면 ±(√k)i 가 정수 계수로 떨어져 더 쉬워진다."
    creative: "(1) x²+9 를 x²+2x+5 처럼 일차항이 있는 허근 이차식으로 바꾸면 근의 공식 한 단계가 더 붙어 ★2 유지 (2) 인수분해된 결과를 주고 원래 이차식·계수를 되묻는 역방향(★2) (3) x⁴+4 같은 복이차식으로 올리면 실수 범위 인수분해와의 비교(I-RT·I-SC)가 생겨 ★4."
```

## 표본 판정 요약 (4문)

- ★ 분포: ★1 2 · ★2 2 · ★3 0 · ★4 0 · ★5 0
- 통찰형 0 · 절차형 4 · premium 0
- type_hint 상위: 「두 근의 합·곱으로 대칭식의 값」 2 · 「두 수를 근으로 하는 이차방정식 만들기」 1 · 「복소수 범위에서의 이차식 인수분해」 1
- 구역: 「개념원리 익히기」 4문(121-240~121-243) · 그림 없음 · vendor level/tag 신호 없음
- M_total 분포: 4 / 5 / 6 / 6 (평균 5.25) — 전부 개념 확인 층이라 통찰 라벨이 붙은 단계가 없다

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-121-243 | 실수→복소수 범위 전환을 I-RT d1 로 인정할지 경계. 교재 직전 공식의 직접 대입으로 보아 절차형 ★2 로 두었으나, 통찰 인정 시 통찰형 ★2~3 | ★2 / ★3 |
| GN-CM1-121-242 | 익히기(★1 출발)인데 소문항 범위가 정수→무리수→허수로 넓어 M_total 6. 통찰은 0 이라 규칙상 +1 근거가 M 뿐 — 카탈로그 확정 전까지 ★2 로 기록 | ★1 / ★2 |

카탈로그 차원 메모: 이 범위에서 반복된 type_hint 는 「두 근의 합·곱으로 대칭식의 값 구하기」(121-240 · 121-241)뿐이고, 이차항 계수가 1 인지 아닌지는 계산 부담(Mₖ)만 다르므로 **한 유형으로 통합**해도 된다(카탈로그에서는 난이도 변주로 처리). 반면 「두 수를 근으로 하는 이차방정식 만들기」(121-242)와 「복소수 범위 인수분해」(121-243)는 방향이 역방향이고 요구 도구(켤레근·근의 공식)가 달라 **따로 세운다**. 세 유형 모두 base ★ 후보는 1~2 이며, 이 단원의 ★3 이상은 2/3·3/3 파트(두 근의 조건·켤레근 정리·근의 부호)를 본 뒤 결정하는 것이 맞다.
