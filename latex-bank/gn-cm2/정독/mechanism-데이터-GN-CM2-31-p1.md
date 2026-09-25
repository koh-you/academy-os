---
name: mechanism-데이터-GN-CM2-31-p1
description: 개념원리 공통수학2 31 유리함수(1/3 · 262-608~262-610) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: 31 유리함수
  unit_code: CM2-31
  part: "1/3"
  extract_range: "262~262쪽 · 262-608~262-610"
  total_problems: 3
  unit_total: 47
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 31 유리함수 (1/3) 정독 데이터 (v1.0)

이 파일은 31단원 47문 중 앞의 3문(262쪽 · 262-608~262-610)을 다룬다. 구역은 「개념원리 익히기」 통번호 하나뿐이고, 이 범위에는 필수·발전 예제, 연습문제 STEP, 특강 구역이 들어 있지 않다. 세 문항이 유리함수 단원의 **도입 3종 세트**를 그대로 이룬다 — ⑴ 정의역(분모 ≠ 0 · 262-608) ⑵ 기본형 y=k/x 와 평행이동 그래프·점근선(262-609) ⑶ 일차식 분수를 y=k/(x-p)+q 표준형으로 변형(262-610). 세 문항 모두 소문항 묶음(4·4·2개)이고 그림·선택지는 없으며, 262-609 만 작도를 요구해 전사본 answer 가 「풀이 참조(그래프)」 + 점근선 방정식 형태다.

벤더 난이도 신호와 출발점 규약: 「개념원리 익히기」 통번호는 개념 확인 구역이므로 ★1 에서 출발한다. 세 문항 모두 방금 배운 정의·공식을 그대로 한 번 적용하는 구조라 통찰 라벨이 붙지 않았고(모두 절차형), M_total 도 4~5 에 머물러 −1 조정 후보이지만 하한 ★1 에서 멈춘다. 결과적으로 이 범위는 ★1 세 문항으로 평평하다. 다만 262-610 의 **분자 분리 변형**(4x-15 = 4(x-3)-3)은 이후 이 단원의 모든 그래프·점근선·역함수 문제의 전제 도구여서 학생 체감은 ★2 에 가깝다 — 구역 신호를 따라 ★1 로 두고 분류 이슈로만 기록했다. 각 문항의 함정은 통찰이 아니라 Mₜ 로 처리했다(정의역 제외값 누락 T-범위 · k 부호에 따른 사분면 T-부호 · 분자 분리에서 부호 T-부호).

이 파일의 주 용도는 숫자 변형·창의 변형의 **원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM2-262-608
  page: 262
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 네 유리함수 $y=\dfrac{10}{x}$, $y=\dfrac{3-x}{x+3}$, $y=\dfrac{2x+3}{3x-5}$,
    $y=\dfrac{3x}{x^2-4}$ 의 정의역을 각각 구하기.
  category: "분모를 0으로 만드는 x 찾기 → 그 값만 제외 → 정의역 집합 표기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리함수의 정의역(분모가 0이 되는 값 제외)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 소문항 모두 분모 = 0 을 풀어 제외값을 얻는 한 단계다. ⑶ 은 3x-5=0 → x=5/3 로 분수 제외값,
    ⑷ 는 x^2-4=0 이라 제외값이 ±2 두 개라는 점만 다르다. 분자는 정의역에 관여하지 않으므로 ⑵ 의
    3-x 는 건드리지 않는다. 함정은 제외값 누락(T-범위) 하나뿐이라 Mₜ=1 로 처리하고 통찰은 없다.
    익히기 구역 출발 ★1 · 통찰 0 · M_total 4 → 하한 ★1 유지.
  tier: star_1
  mechanism_primary: "각 식의 분모를 0으로 만드는 x 를 구함 → 그 값을 뺀 실수 전체가 정의역 (⑷ 는 이차식이라 제외값 두 개)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\{x \mid x\ne 0$인 실수$\}$ ⑵ $\{x \mid x\ne -3$인 실수$\}$ ⑶ $\{x \mid x\ne \dfrac{5}{3}$인 실수$\}$ ⑷ $\{x \mid x\ne \pm 2$인 실수$\}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/262-608.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 계수·상수를 자유롭게 바꿀 수 있음(x+3 → x-7 · 3x-5 → 4x+9 · x^2-4 → x^2-9, x^2-x-6). 제약: ⑴~⑶ 은 제외값이 하나, ⑷ 는 인수분해되어 제외값이 둘인 구성을 유지해야 세트의 난이도 계단이 남는다. 분모를 x^2+1 처럼 실근이 없는 식으로 바꾸면 정의역이 실수 전체가 되어 문제 성격이 달라지므로 별도 문항으로 분리."
    creative: "(1) 정의역이 $\\{x \\mid x\\ne 2$인 실수$\\}$ 가 되도록 분모를 정하게 하는 역방향(I-BW d1 · ★2) (2) 분자·분모에 공통인수가 있어 약분되는 식을 섞어 「약분해도 제외값은 남는다」를 묻기(★2~3 · T-범위 강화) (3) 정의역과 치역을 함께 묻기(점근선 학습 뒤로 미루면 ★2)."
```

```yaml
- id: GN-CM2-262-609
  page: 262
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 네 유리함수 $y=\dfrac{2}{x}$, $y=-\dfrac{3}{x}$, $y=\dfrac{1}{x-1}$,
    $y=-\dfrac{1}{x}+2$ 의 그래프를 그리고 점근선의 방정식을 구하기.
  category: "k 의 부호로 기본형 개형 결정 → 평행이동 → 점근선 x=p, y=q"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "y=k/x 와 평행이동한 유리함수의 그래프·점근선"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴⑵ 는 기본형 y=k/x 에서 k 의 부호만 보고 1·3사분면 / 2·4사분면 개형을 고르면 점근선은 축 그대로다.
    ⑶ 은 x 축 방향 +1, ⑷ 는 y 축 방향 +2 평행이동이라 점근선이 x=1 · y=2 로 한 쪽만 옮겨간다.
    방금 배운 정의를 그대로 한 번 적용하는 절차이고, 그래프와 식의 대응도 교과서 표준 도구라 I-RT 로 세지 않았다.
    함정은 k<0 일 때 사분면을 뒤집는 부호(T-부호) 하나 → Mₜ=1. 익히기 출발 ★1 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "k 의 부호로 y=k/x 기본 개형 결정 → x-p · +q 만큼 평행이동해 작도 → 점근선은 x=p, y=q"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 풀이 참조(그래프), 점근선의 방정식: $x=0$, $y=0$ ⑵ 풀이 참조(그래프), 점근선의 방정식: $x=0$, $y=0$ ⑶ 풀이 참조(그래프), 점근선의 방정식: $x=1$, $y=0$ ⑷ 풀이 참조(그래프), 점근선의 방정식: $x=0$, $y=2$'
  answer_source: "답지(그래프)"
  figure: none
  latex: latex-bank/gn-cm2/items/262-609.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "k 값(2 → 4, -3 → -6)과 평행이동량(x-1 → x+2 · +2 → -3)을 바꿀 수 있음. 제약: k≠0 이어야 하고, 부호가 서로 다른 두 문항(양·음)과 x 방향·y 방향 이동이 한 번씩 들어가는 4문 세트 구성을 유지해야 학습 계단이 남는다. |k| 를 키우면 개형은 그대로라 난이도는 변하지 않는다."
    creative: "(1) x·y 양쪽으로 동시에 이동한 y=k/(x-p)+q 를 넣어 점근선 두 개가 모두 옮겨가게 하기(★2) (2) 그래프를 주고 식을 찾게 하는 역방향(I-BW d1 · I-RT d1 · ★2~3) (3) 점근선과 지나는 점 한 개를 주고 k, p, q 를 결정하게 하기(Mₐ 상승 · ★3) (4) 평행이동 대신 원점·y축 대칭이동을 섞으면 I-SYM 이 붙어 ★3."
```

```yaml
- id: GN-CM2-262-610
  page: 262
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴ $y=\dfrac{4x-15}{x-3}$, ⑵ $y=\dfrac{-5x-7}{x+2}$ 를
    각각 $y=\dfrac{k}{x-p}+q$ ($k$, $p$, $q$ 는 상수) 꼴로 변형하기.
  category: "분자를 분모의 배수 + 나머지로 분리 → 약분 → 표준형 k/(x-p)+q"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리함수를 y=k/(x-p)+q 표준형으로 변형(분자 분리)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분자를 분모의 배수와 나머지로 쪼개는 한 수가 전부다. ⑴ 은 4x-15 = 4(x-3)-3 으로 보아 4 - 3/(x-3),
    ⑵ 는 -5x-7 = -5(x+2)+3 으로 보아 -5 + 3/(x+2) 가 된다. 다항식 나눗셈으로도 같은 결과다.
    ⑵ 는 분자·몫이 모두 음수라 부호를 한 번 더 뒤집어야 해 T-부호 함정이 있다(Mₜ=1).
    방금 배운 표준 변형의 첫 적용이라 통찰로는 세지 않았다. 익히기 출발 ★1 · 통찰 0 · M_total 5 → ★1.
    [분류 이슈] 이 분리 변형은 이후 단원 전체(그래프·점근선·역함수·최대최소)의 전제 도구여서 학생 체감은 ★2 에 가깝다.
  tier: star_1
  mechanism_primary: "분자를 (분모)×(몫) + 나머지 로 분리 → 항별로 나눠 약분 → y = 나머지/(x-p) + 몫 = k/(x-p)+q"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $y=-\dfrac{3}{x-3}+4$ ⑵ $y=\dfrac{3}{x+2}-5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/262-610.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자·분모의 계수를 바꿀 수 있음((ax+b)/(x+c) 꼴에서 a=4 → 2, c=-3 → 5 등). 제약: 분자가 분모의 상수배가 되면(예: (2x-6)/(x-3)) k=0 이 되어 유리함수가 아니게 되므로 ad-bc≠0 을 유지한다. 분모의 x 계수를 1 이 아닌 값으로 두면(3x-5) 먼저 분모에서 계수를 묶어내는 단계가 늘어 Mₛ·Mₖ 가 올라간다."
    creative: "(1) 변형 결과로 점근선·정의역·치역을 바로 묻기(같은 골조 ★2) (2) k, p, q 중 일부만 주고 나머지 계수를 역으로 결정하게 하기(I-BW d1 · ★2~3) (3) 분모를 이차식으로 두어 부분분수 분해로 확장(I-EQV d2 · ★3) (4) 표준형 변형 후 그래프 평행이동까지 연결하면 I-RT 가 붙어 ★3."
```

## 표본 판정 요약 (3문)

- ★ 분포: ★1 3 · ★2 0 · ★3 0 · ★4 0 · ★5 0
- 통찰형 0 · 절차형 3 · premium 0
- M_total 분포: 4 (2문) · 5 (1문) · 평균 4.3
- type_hint: 「유리함수의 정의역(분모가 0이 되는 값 제외)」 1 · 「y=k/x 와 평행이동한 유리함수의 그래프·점근선」 1 · 「유리함수를 y=k/(x-p)+q 표준형으로 변형(분자 분리)」 1 (중복 없음)
- 구역: 개념원리 익히기 3문(전부) · 그림 0문 · 선택지 0문 · 소문항 묶음 3문(4·4·2개)
- 대상층: 하위권 3문

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-262-610 | 익히기 구역 신호는 ★1 이고 M_total 5 · 통찰 0 이라 ★1 로 두었으나, 분자 분리 변형은 이후 유리함수 단원 전체의 전제 도구라 실제 학생 체감·오답률은 같은 구역의 다른 두 문항보다 뚜렷이 높다 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위의 type_hint 세 개는 서로 겹치지 않는다. 유리함수 단원 카탈로그의 **입구 3유형**(정의역 · 기본형/평행이동 그래프와 점근선 · 표준형 변형)으로 그대로 세울 수 있다. base ★ 는 셋 다 1 이 출발점이고, 표준형 변형만 1~2 사이에서 결정이 필요하다.
- 「정의역」과 「점근선·치역」은 분모 ≠ 0 이라는 같은 뿌리를 쓰지만 묻는 대상과 오답 유형이 달라 **통합하지 말고 따로** 세우는 편이 낫다(정의역은 T-범위, 점근선은 T-부호·평행이동 방향 혼동).
- 「기본형 그래프」와 「평행이동 그래프」는 이 문항처럼 한 세트로 출제되므로 **하나의 유형으로 묶고** 평행이동 유무를 난이도 파라미터(★1 ↔ ★2)로 두는 안을 권한다.
- 「표준형 변형」은 뒤 범위(2/3 · 3/3)의 그래프·역함수·최대최소 유형이 모두 전제로 삼는 선행 도구다. 카탈로그에서 선행 관계(prerequisite)를 표시할 자리가 필요하다.
- 이 범위에는 통찰 라벨이 하나도 붙지 않았다. 31단원의 통찰형은 뒤 범위(필수·발전 예제, 연습문제 STEP 2 이상)에 몰려 있을 것이므로, 단원 전체 ★ 분포는 3개 part 를 합쳐서 판단해야 한다.
