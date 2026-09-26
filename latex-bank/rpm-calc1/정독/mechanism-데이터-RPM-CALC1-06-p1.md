---
name: mechanism-데이터-RPM-CALC1-06-p1
description: RPM 미적분Ⅰ 06 도함수의 활용 (3)(1/3 · 교과서 06-1 방정식에의 활용 ~ 유형 04 두 곡선의 교점의 개수) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅰ (22개정) · 전사본 latex-bank/rpm-calc1
  section: 06 도함수의 활용 (3)
  unit_code: CALC1-06
  part: "1/3"
  extract_range: "81~83쪽 · 0513~0541"
  total_problems: 29
  unit_total: 93
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc1/items/<id>.tex
  image_source: latex-bank/rpm-calc1/figures/ (crops.json)
---

# RPM 미적분Ⅰ · 06 도함수의 활용 (3) (1/3) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅰ 06 도함수의 활용 (3) 단원(93문) 가운데 81~83쪽의 29문항(0513~0541)을 다룬다. 구역은 교과서 06-1 방정식에의 활용(5문 · 실근 개수 드릴 4 + 근의 판별 3소문항 1) · 06-2 부등식에의 활용(3문 · 빈칸 증명·구간 증명·미정계수) · 06-3 속도와 가속도(5문 · 위치→속도·가속도 3 + 길이·구의 변화율 2) 뒤로 유형 01 방정식 f(x)=k 의 실근의 개수 · 유형 02 방정식 f(x)=k 의 실근의 부호 · 유형 03 극값을 이용한 삼차방정식의 근의 판별 · 유형 04 두 곡선의 교점의 개수 순이며 각 유형 4문씩이다. 교과서 구역은 ★1 출발, 각 유형의 첫 문항은 「대표문제」 태그(난이도 표시 없음 → ★2 출발), 나머지 12문은 모두 「중」(★2 출발)이고 0540 에 「서술형」 태그가 붙어 있다. 그림 문항은 0527(도함수 그래프) 1문이며 크롭 이미지로 확인했다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(유형 코드 · depth · effective_depth · 근거) · `variation_notes`(numeric/creative)를 채웠다. `depth_score` 는 insights 의 effective_depth 평균(없으면 0.00)이고, `insight_type` 은 통찰이 없거나 d1 한 개뿐이면 절차형, d2 이상 또는 2개 이상이면 통찰형으로 적었다. Mₜ 는 함정 0~1개면 1, 2~3개면 2 로 매겨 M_total 은 4 이상이다. 이 범위의 핵심 골조는 하나 — 「f'(x)=0 → 극값 → 그래프와 y=k(또는 극댓값·극솟값의 부호)」 — 이며 통찰은 그 골조 위에 얹히는 조건 해석(근의 부호 ↔ y축 기준 위치 · 사차 네 실근 ↔ 두 극소 중 큰 값 · 접한다 ↔ 중근)과 표현 전환(교점 ↔ 실근 · 도함수 그래프 → 원함수 극값)으로만 라벨링했다. 상수 분리 자체는 이 단원의 표준 절차라 통찰로 세지 않았다. ★ 조정은 −1 해당 문항이 없고(교과서는 이미 ★1 · 유형 구역은 모두 M_total ≥ 6), +1 후보(통찰 2개)는 0529(사차 세 실근 · 극값 통과 후보 중 하나 기각)와 0541(교점 → 실근 · 접한다 → 중근 두 번 전환)에 적용해 ★3 으로 두고 [분류 이슈] 표에도 남겼다. 전사 답은 29문 모두 다시 구해 일치했다(「전사 답 확인 필요」 0).

## 문항 데이터

### 교과서 06-1 방정식에의 활용

```yaml
- id: RPM-CALC1-0513
  page: 81
  vendor_label: "교과서 06-1 방정식에의 활용"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    삼차방정식 x³-6x²+2=0 의 서로 다른 실근의 개수.
  category: "f'(x)=0 → 극댓값·극솟값 부호 → 실근 개수"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "방정식의 서로 다른 실근의 개수(극값의 부호로 판정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(x)=x³-6x²+2, f'(x)=3x(x-4). 극댓값 f(0)=2>0, 극솟값 f(4)=-30<0 이므로 그래프가 x축과 세 번 만난다. 극값 두 개의 부호 대조 한 단계·통찰 없음·M_total 4 → 교과서 출발점 ★1.
  tier: star_1
  mechanism_primary: "f'(x)=3x(x-4)=0 → 극대 f(0)=2>0 · 극소 f(4)=-30<0 → 부호 반대 → 실근 3개"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0513.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항 계수와 상수항을 바꿔 극댓값·극솟값의 부호 조합(양·음 → 3개, 같은 부호 → 1개, 한쪽 0 → 2개)을 조절. 제약: f'(x) 가 정수근으로 인수분해되고 극값이 정수로 나오게 할 것."
    creative: "(1) 극댓값·극솟값 중 하나를 0 으로 맞춰 「서로 다른 실근 2개」(★1) (2) 상수항을 k 로 두고 실근 3개일 k 의 범위(★2 · 유형 01 골조) (3) 「양의 실근의 개수」로 바꾸면 f(0) 의 부호 대조가 추가돼 유형 02 골조(★2 · I-EQV d1)."
```

```yaml
- id: RPM-CALC1-0514
  page: 81
  vendor_label: "교과서 06-1 방정식에의 활용"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    삼차방정식 x³-3x²-4=0 의 서로 다른 실근의 개수.
  category: "f'(x)=0 → 극댓값·극솟값 부호 → 실근 개수"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "방정식의 서로 다른 실근의 개수(극값의 부호로 판정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(x)=x³-3x²-4, f'(x)=3x(x-2). 극댓값 f(0)=-4<0, 극솟값 f(2)=-8<0 으로 둘 다 음수 → 그래프는 x축을 한 번만 지난다. 0513 과 같은 골조에서 「같은 부호 → 1개」 쪽 사례. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f'(x)=3x(x-2)=0 → 극대 f(0)=-4 · 극소 f(2)=-8 둘 다 음수 → 실근 1개"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0514.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항을 올려 극댓값을 양수로 만들면 3개, 극댓값이 정확히 0 이면 2개. 제약: 극값이 정수이고 극댓값·극솟값이 같은 부호일 때 「1개」 답이 나오는지 부호를 명시적으로 검산."
    creative: "(1) 극댓값 0 인 사례로 바꿔 「중근을 갖는다」와 「실근 2개」의 동치 확인(★1) (2) 인수분해로도 풀리는 식(x³-3x²-4=(x-4)(x²+x+1))을 주고 「두 풀이 비교」를 발문하면 I-SC d1 ★2 (3) 실근의 개수가 1일 때 그 실근의 부호까지 묻기 → f(0) 대조 추가 ★2."
```

```yaml
- id: RPM-CALC1-0515
  page: 81
  vendor_label: "교과서 06-1 방정식에의 활용"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    사차방정식 -x⁴+2x²+2=0 의 서로 다른 실근의 개수.
  category: "f'(x)=0(근 3개) → 극값 3개 부호 → 위로 볼록한 W 뒤집힌 개형 → 실근 개수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "방정식의 서로 다른 실근의 개수(극값의 부호로 판정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(x)=-x⁴+2x²+2, f'(x)=-4x(x-1)(x+1). 극댓값 f(±1)=3, 극솟값 f(0)=2 가 모두 양수이고 최고차항이 음수라 양끝이 -∞ → x축과 두 번 만난다. 극값이 셋이라 Mₛ 2 이지만 부호 대조는 한 종류. 통찰 없음·M_total 5 → ★1. (x²=t 치환으로 t=1+√3 하나만 양수 → 2개, 로 검산 가능.)
  tier: star_1
  mechanism_primary: "f'(x)=-4x(x-1)(x+1)=0 → 극값 3, 2, 3 모두 양수 · 최고차 음수 → 양끝 -∞ → 실근 2개"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0515.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x² 계수와 상수항을 바꿔 극솟값의 부호(양 → 2개, 음 → 4개, 0 → 3개)를 조절. 제약: 우함수 꼴을 유지하면 극값이 x=0, ±a 에서 대칭으로 나오므로 극댓값 두 개가 같다는 점을 살릴 것 · 최고차항 부호를 바꾸면 개형이 뒤집혀 답이 달라짐."
    creative: "(1) 최고차항을 양수로 바꿔 W 개형에서 같은 질문(★1) (2) 우함수 대칭으로 「양의 실근의 개수」만 묻고 x>0 쪽 개형만 그리게 하기(★2 · I-SYM d1) (3) x²=t 치환 풀이와 극값 풀이를 나란히 요구하는 서술형(★2 · I-SC d1)."
```

```yaml
- id: RPM-CALC1-0516
  page: 81
  vendor_label: "교과서 06-1 방정식에의 활용"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    사차방정식 3x⁴+6x²=8x³+1 의 서로 다른 실근의 개수.
  category: "이항 → f'(x)=12x(x-1)² → 극소 하나(x=1 은 극값 아님) → 개형 → 실근 개수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "방정식의 서로 다른 실근의 개수(극값의 부호로 판정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    이항해 f(x)=3x⁴-8x³+6x²-1, f'(x)=12x(x-1)². x=1 에서는 f' 의 부호가 바뀌지 않아 극값이 아니고 극소는 f(0)=-1 하나. x<0 에서 감소하며 한 번, x>0 에서 증가하며 한 번(f(1)=0) → 실근 2개. 함정은 「f'(x)=0 이지만 극값이 아닌 점」 하나. 교과서 출발 ★1 이고 통찰 없음·M_total 5 → ★1 유지. [분류 이슈] 중근 인수 (x-1)² 처리와 이항 단계가 있어 0513·0514 보다 무겁다 — 유형 구역이면 ★2 로 나올 골조.
  tier: star_1
  mechanism_primary: "이항 → f'(x)=12x(x-1)²=0 → 극소 f(0)=-1<0 만 극값 → 감소·증가 한 번씩 → 실근 2개"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0516.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f'(x)=12x(x-c)² 꼴을 유지하며 c 와 상수항을 바꾼다. 제약: 원식은 (x-c)³(3x+d) 처럼 삼중근을 갖게 설계하면 f(c)=0 이 되어 「f'(c)=0 인 점이 근」이라는 검산 지점이 생김 · 상수항을 낮춰 극소가 양수가 되면 실근 0개."
    creative: "(1) 「f'(x)=0 의 근의 개수와 극값의 개수가 다른 이유」를 함께 서술하게 하는 서술형(★2) (2) 상수항을 k 로 두고 실근 개수가 1·2·3 으로 갈리는 k 의 값·범위(★2 · 극값 하나뿐이라 변곡점 통과 케이스가 생김 · I-MI d1) (3) 최고차 3 을 a 로 두어 매개변수화하면 Mₐ 2 ★2."
```

```yaml
- id: RPM-CALC1-0517
  page: 81
  vendor_label: "교과서 06-1 방정식에의 활용"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    삼차방정식 x³-6x²-15x+k=0 의 근이 ⑴ 서로 다른 세 실근 ⑵ 중근과 다른 한 실근 ⑶ 한 실근과 두 허근이 되게 하는 실수 k 의 값 또는 범위.
  category: "f'(x)=0 → 극댓값·극솟값(k 포함) → 곱의 부호 <0 / =0 / >0 → k 의 범위"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극값을 이용한 삼차방정식의 근의 판별(세 경우 · 극댓값×극솟값 부호)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(x)=3(x-5)(x+1), 극댓값 f(-1)=8+k, 극솟값 f(5)=-100+k. 세 실근 ⇔ (k+8)(k-100)<0, 중근 ⇔ =0, 허근 ⇔ >0 으로 세 소문항이 같은 곱의 부호로 한 번에 정리된다. 상수 분리(x³-6x²-15x=-k)로 풀어도 같다. 매개변수 k 로 Mₐ 2 이지만 표준 판별 절차라 통찰 없음. 교과서 출발 ★1 유지. [분류 이슈] 유형 03(0534~0537)과 같은 골조라 유형 구역에선 ★2 — 교과서 라벨 ★1 이 1단 낮다.
  tier: star_1
  mechanism_primary: "f'(x)=3(x-5)(x+1)=0 → 극대 8+k · 극소 -100+k → (k+8)(k-100) 의 부호 <0 / =0 / >0 → -8<k<100 / k=-8, 100 / k<-8, k>100"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $-8<k<100$ \quad (2) $k=-8$ 또는 $k=100$ \quad (3) $k<-8$ 또는 $k>100$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc1/items/0517.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식의 x²·x 계수를 바꿔 극값의 x 좌표가 정수가 되게(f'(x) 판별식이 완전제곱). 제약: 극댓값·극솟값이 정수이고 서로 부호가 다를 수 있는 k 범위가 생기도록 · 세 소문항의 경계값이 같은 두 수로 닫히게 유지."
    creative: "(1) 소문항 없이 「중근을 갖는 모든 k 의 합」(★2 · 유형 03 골조) (2) 「서로 다른 세 실근 중 양의 실근이 두 개」로 바꾸면 f(0) 대조가 추가돼 유형 02 골조(★2 · I-EQV d1) (3) k 대신 x 의 계수를 매개변수로 두면 극값의 위치가 변수에 따라 움직여 Mₐ·Mₖ 상승 ★3."
```

### 교과서 06-2 부등식에의 활용

```yaml
- id: RPM-CALC1-0518
  page: 81
  vendor_label: "교과서 06-2 부등식에의 활용"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    모든 실수 x 에 대해 3x⁴-8x³+18>0 임을 증명하는 과정의 빈칸 ㈎(극소·최소인 x) ㈏(최솟값) ㈐(부등호) 채우기.
  category: "f'(x)=12x²(x-2) → 극소=최소 x=2 → 최솟값 2>0 → 빈칸"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부등식의 증명(최솟값 이용)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    증명 틀이 주어져 있고 f'(x)=12x²(x-2) 까지 적혀 있다. x=0 은 부호가 안 바뀌어 극값이 아니므로 ㈎=2, f(2)=48-64+18=2 가 ㈏, 「f(x) ≥ 2」의 부등호 ≥ 가 ㈐. 빈칸 채우기 한 단계·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f'(x)=12x²(x-2)=0 → 극소이자 최소 x=2 → f(2)=2 → f(x)≥2>0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '㈎ $2$ \quad ㈏ $2$ \quad ㈐ $\ge$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0518.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "사차식의 계수를 바꿔 극소가 하나뿐인 f'(x)=ax²(x-c) 꼴을 유지. 제약: 최솟값이 양의 정수 · x=0 이 극값이 아닌 점을 살려 「극소 후보 둘 중 하나 탈락」 구조 유지."
    creative: "(1) 빈칸을 없애고 같은 부등식을 직접 증명하게 하기(★1 · 0519 골조) (2) 상수항을 k 로 바꿔 「모든 실수에서 성립할 k 의 범위」(★1~2 · 0520 골조) (3) 극소가 둘인 사차식으로 바꿔 「두 극소 중 작은 값」 비교를 넣으면 ★2."
```

```yaml
- id: RPM-CALC1-0519
  page: 81
  vendor_label: "교과서 06-2 부등식에의 활용"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x>0 일 때 부등식 2x³-3x²+3>0 이 성립함을 증명.
  category: "f'(x)=6x(x-1) → x>0 에서 극소=최소 x=1 → 최솟값 2>0 → 증명"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부등식의 증명(최솟값 이용)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(x)=2x³-3x²+3, f'(x)=6x(x-1). 구간 x>0 에서는 x=1 의 극소가 곧 최소이고 f(1)=2>0. 삼차식이라 「모든 실수」로는 성립하지 않으므로 구간 제한이 T-범위 함정 하나. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f'(x)=6x(x-1)=0 → x>0 에서 최소 x=1 → f(1)=2>0 → f(x)≥2>0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 ($f(x)=2x^3-3x^2+3$이라 하면 $f''(x)=6x^2-6x=6x(x-1)$이고, $x>0$일 때 함수 $f(x)$는 $x=1$에서 최솟값 $2$를 가지므로 $f(x)\ge 2$. 따라서 $x>0$일 때 부등식 $f(x)>0$, 즉 $2x^3-3x^2+3>0$이 성립한다.)'
  answer_source: "답지(쪽 렌더 · 풀이 참조 · 해설 보충)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0519.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식 계수와 상수항, 구간(x>0 · x≥1 · x>-1)을 바꾼다. 제약: 구간 안에 극소가 하나 있고 그 값이 양의 정수 · 구간 밖으로 가면 부등식이 깨지는 삼차식이어야 「구간 제한」이 의미를 가짐."
    creative: "(1) 상수항을 k 로 두고 「x>0 에서 항상 성립할 k 의 범위」(★2 · 구간 최소 ≥ 0) (2) 구간 끝점이 극소보다 오른쪽(x≥2)이면 최소가 끝점값으로 바뀌는 T-경계 변형(★2) (3) 두 함수 f(x)>g(x) 꼴로 주고 차 h=f-g 를 세우게 하기(★2 · 유형 06 골조)."
```

```yaml
- id: RPM-CALC1-0520
  page: 81
  vendor_label: "교과서 06-2 부등식에의 활용"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    모든 실수 x 에 대해 (1/4)x⁴-x³+x²+k≥0 이 성립하도록 하는 실수 k 의 값의 범위.
  category: "f'(x)=x(x-1)(x-2) → 극소 두 개 값 비교 → 최솟값 ≥ 0 → k 의 범위"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부등식이 항상 성립할 조건(최솟값 ≥ 0 · 미정계수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(x)=x³-3x²+2x=x(x-1)(x-2). 극소 f(0)=k, f(2)=k 로 두 극솟값이 같고 극대 f(1)=k+1/4. 최솟값 k≥0. 극소가 둘이라 「둘 중 작은 값」 비교 단계가 있지만 값이 같아 갈림이 없다. 매개변수 k 로 Mₐ 2, 통찰 없음·M_total 6 → 교과서 출발 ★1 유지. [분류 이슈] 유형 구역(06-p2 부등식 유형)이면 ★2 로 나올 골조.
  tier: star_1
  mechanism_primary: "f'(x)=x(x-1)(x-2)=0 → 극소 f(0)=f(2)=k · 극대 f(1)=k+1/4 → 최솟값 k ≥ 0 → k≥0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$k\ge 0$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0520.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "사차식 계수를 바꿔 극소 두 값이 다르게 만들면 「작은 쪽 ≥ 0」 비교가 살아남. 제약: f'(x) 가 정수근 셋으로 인수분해 · 등호 포함(≥) 여부를 발문과 답에서 일치시킬 것."
    creative: "(1) 두 극솟값이 다른 사차식으로 바꿔 최솟값 선택 단계 추가(★2) (2) 구간 x≥0 으로 제한하면 극소 중 하나가 빠지는 T-범위 변형(★2) (3) 「x>0 인 모든 x 에서 f(x)>g(x)」 두 함수 꼴로 주고 차함수 세우기(★2~3 · Mₛ 상승)."
```

### 교과서 06-3 속도와 가속도

```yaml
- id: RPM-CALC1-0521
  page: 81
  vendor_label: "교과서 06-3 속도와 가속도"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    수직선 위 점 P 의 위치 x=t³-4t²+3 일 때 t=2 에서의 속도와 가속도.
  category: "x(t) → v=x'(t) → a=v'(t) → t=2 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수직선 위 점의 속도와 가속도(위치 함수 미분)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    v=3t²-8t → v(2)=-4, a=6t-8 → a(2)=4. 두 번 미분해 대입하는 정의 확인 드릴. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x=t³-4t²+3 → v=3t²-8t → v(2)=-4 · a=6t-8 → a(2)=4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "속도: $-4$, 가속도: $4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0521.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차 위치식의 계수와 시각을 바꾼다. 제약: 속도·가속도가 정수 · 속도가 음수인 사례를 하나 남겨 「속도의 부호 = 운동 방향」 해석이 이어질 수 있게."
    creative: "(1) 「운동 방향이 바뀌는 시각」(v=0 · 부호 변화)으로 바꾸기(★2) (2) 「속도가 0 일 때의 가속도」(★2 · 두 단계 결합) (3) 위치 그래프를 주고 속도·가속도의 부호를 읽는 그래프 해석형(★2 · I-RT d1)."
```

```yaml
- id: RPM-CALC1-0522
  page: 81
  vendor_label: "교과서 06-3 속도와 가속도"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    수직선 위 점 P 의 위치 x=-t³+3t²-2t 일 때 t=2 에서의 속도와 가속도.
  category: "x(t) → v=x'(t) → a=v'(t) → t=2 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수직선 위 점의 속도와 가속도(위치 함수 미분)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    v=-3t²+6t-2 → v(2)=-2, a=-6t+6 → a(2)=-6. 0521 과 같은 골조에서 최고차가 음수인 사례. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x=-t³+3t²-2t → v=-3t²+6t-2 → v(2)=-2 · a=-6t+6 → a(2)=-6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "속도: $-2$, 가속도: $-6$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0522.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수와 시각을 바꾼다. 제약: 부호 실수가 나기 쉬운 음수 최고차항을 유지하되 속도·가속도가 정수."
    creative: "(1) 「속도와 가속도의 부호가 같은/다른 시각의 범위」로 바꿔 속력 증가·감소 해석 넣기(★2 · I-EQV d1) (2) 원점을 다시 지나는 시각(x=0 의 양의 근)(★2) (3) 두 점 P·Q 의 위치식을 주고 「같은 속도가 되는 시각」(★2)."
```

```yaml
- id: RPM-CALC1-0523
  page: 81
  vendor_label: "교과서 06-3 속도와 가속도"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    수직선 위 점 P 의 위치 x=t⁴-4t+5 일 때 t=2 에서의 속도와 가속도.
  category: "x(t) → v=x'(t) → a=v'(t) → t=2 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수직선 위 점의 속도와 가속도(위치 함수 미분)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    v=4t³-4 → v(2)=28, a=12t² → a(2)=48. 사차 위치식이라 수가 커질 뿐 0521 골조. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x=t⁴-4t+5 → v=4t³-4 → v(2)=28 · a=12t² → a(2)=48"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "속도: $28$, 가속도: $48$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0523.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "차수(3·4)와 시각을 바꾼다. 제약: 시각이 2 이상이면 사차식의 값이 급히 커지므로 답이 세 자리를 넘지 않게 계수를 작게."
    creative: "(1) 「속도가 0 이 되는 시각의 위치」(v=4t³-4=0 → t=1)(★1~2) (2) 속도가 최소가 되는 시각(v 를 다시 미분 = 가속도 0)(★2 · 속도의 극소 해석) (3) 정지했다 되돌아오는 운동으로 「t=0 부터 t=2 까지 움직인 거리」를 물으면 방향 전환 시각 분할이 필요해 ★3(I-MI d1)."
```

```yaml
- id: RPM-CALC1-0524
  page: 81
  vendor_label: "교과서 06-3 속도와 가속도"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    시각 t 에서의 길이가 l=t²+4t+10 인 물체의 t=3 에서의 길이의 변화율.
  category: "l(t) → dl/dt → t=3 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "시각에 대한 길이의 변화율"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    dl/dt=2t+4 → t=3 에서 10. 「변화율 = 시각에 대한 미분계수」 정의 확인 한 단계. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "l=t²+4t+10 → dl/dt=2t+4 → t=3 → 10"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$10$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0524.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차 길이식 계수와 시각을 바꾼다. 제약: 변화율이 양의 정수 · 길이가 양수인 시각 범위 안에서 물을 것."
    creative: "(1) 길이 l 이 아니라 「한 변이 l 인 정사각형의 넓이의 변화율」로 바꾸면 l 을 대입해 넓이식을 세우는 단계가 추가 ★1~2(0525 골조) (2) 「변화율이 처음으로 k 가 되는 시각」 역방향(★2) (3) 그림자·사다리처럼 닮음으로 길이식을 먼저 세워야 하는 상황(★3 · Mₛ·Mₐ 상승 · I-RT d1)."
```

```yaml
- id: RPM-CALC1-0525
  page: 81
  vendor_label: "교과서 06-3 속도와 가속도"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    반지름의 길이가 0.2t 인 구에 대하여 ⑴ t=10 에서의 겉넓이의 변화율 ⑵ t=10 에서의 부피의 변화율.
  category: "r=0.2t 를 S=4πr² · V=(4/3)πr³ 에 대입 → t 의 식 → 미분 → t=10 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구의 겉넓이·부피의 변화율(반지름을 시각의 식으로 대입)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    S=4π(0.2t)²=0.16πt² → S'=0.32πt → 3.2π. V=(4/3)π(0.2t)³=(0.032/3)πt³ → V'=0.032πt² → 3.2π. 합성함수 미분 없이 r 을 t 로 바꿔 넣는 것이 미적분Ⅰ 방식이고 소수 계산이 부담(Mₖ 2). 두 답이 우연히 같다. 통찰 없음·M_total 6 → 교과서 ★1.
  tier: star_1
  mechanism_primary: "r=0.2t → S=0.16πt² · V=(0.032/3)πt³ → S'(10)=3.2π · V'(10)=3.2π"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $3.2\pi$ \quad (2) $3.2\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0525.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 비례상수(0.2 → 0.5, 1/3)와 시각을 바꾼다. 제약: 0.2³ 처럼 소수 세제곱이 나오므로 분수(1/5)로 주는 편이 오차가 적음 · 두 답이 같아지는 조건(r=2 즉 4πr²·r'=4πr²·r' 는 항상, 여기선 S'=8πr r' · V'=4πr² r' 이 r=2 에서 일치)은 우연이므로 변형 시 달라짐을 확인."
    creative: "(1) 원(넓이·둘레)이나 정육면체(겉넓이·부피)로 도형만 바꾸기(★1) (2) 「겉넓이의 변화율과 부피의 변화율이 같아지는 시각」을 물으면 두 식을 세워 방정식화 ★2(I-CON d1 후보) (3) 반지름이 r=t²-2t+2 처럼 이차식이면 대입 뒤 전개가 늘어 Mₖ 3 ★2."
```

### 유형 01 방정식 $f(x)=k$의 실근의 개수

```yaml
- id: RPM-CALC1-0526
  page: 82
  vendor_label: "유형 01 방정식 $f(x)=k$의 실근의 개수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    방정식 x³-3x²+2-k=0 이 서로 다른 세 실근을 갖도록 하는 정수 k 의 개수.
  category: "상수 분리 g(x)=k → g'(x)=0 → 극댓값·극솟값 사이 → 정수 세기"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "방정식 f(x)=k의 실근의 개수(삼차 · 세 실근 · 정수 k 개수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x³-3x²+2=k 로 분리, g'(x)=3x(x-2), 극댓값 g(0)=2·극솟값 g(2)=-2. 세 실근 ⇔ -2<k<2 → 정수 -1, 0, 1 의 3개. 열린 구간이라 경계 ±2 를 빼는 T-경계 하나. 유형 표준 절차이며 통찰 없음·M_total 6 → 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "x³-3x²+2=k → g'(x)=3x(x-2)=0 → 극대 2 · 극소 -2 → -2<k<2 → 정수 3개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0526.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식 계수를 바꿔 극값의 x 좌표가 정수, 극댓값·극솟값이 정수가 되게. 제약: 정수 k 의 개수를 물으므로 두 극값 사이에 정수가 여럿 들어가되 경계값이 정수여서 「열린 구간」 처리가 드러나게."
    creative: "(1) 「서로 다른 두 실근」으로 바꿔 k=극값 두 값의 합(★2 · 0536 골조) (2) 정수 k 의 개수 대신 「모든 정수 k 의 합」(★2) (3) k 를 x 의 일차식 mx 로 바꿔 「직선 y=mx 와 세 점에서 만남」으로 옮기면 접선 기울기 조건이 돼 ★3(I-RT d2)."
```

```yaml
- id: RPM-CALC1-0527
  page: 82
  vendor_label: "유형 01 방정식 $f(x)=k$의 실근의 개수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    삼차함수 f 의 도함수 y=f'(x) 의 그래프(x축과 -2, 1 에서 만나는 위로 볼록한 포물선)가 그림으로 주어지고 f(-2)=-1, f(1)=2 일 때, f(x)-k=0 이 서로 다른 세 실근을 갖도록 하는 실수 k 의 범위.
  category: "f' 그래프 부호 → f 의 증감 → 극소 f(-2)=-1 · 극대 f(1)=2 → 극솟값<k<극댓값"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "도함수 그래프(부호)를 원함수의 증감·극값으로 읽어 x=-2 극소·x=1 극대를 결정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "방정식 f(x)=k의 실근의 개수(도함수 그래프에서 극값 읽기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그림에서 f'(x)>0 인 구간은 -2<x<1 이므로 f 는 x=-2 에서 극소(-1), x=1 에서 극대(2). 계산은 없고 극솟값<k<극댓값 → -1<k<2. 식 없이 추상 함수 f 로 주어져 Mₐ 3 이지만 노동은 가볍다. 통찰은 도함수 그래프 → 원함수 극값의 표현 전환 하나(RT d1) → 「중」 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "f' 그래프: -2<x<1 에서 양 → f 는 x=-2 극소 -1 · x=1 극대 2 → 세 실근 ⇔ -1<k<2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$-1<k<2$"
  answer_source: "답지"
  figure: "crop:fig-0527.png"
  latex: latex-bank/rpm-calc1/items/0527.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f' 의 영점 두 개와 f 의 극값 두 개를 바꾼다. 제약: 그림 라벨(-2, 1, O)은 그림과 함께 바꿔야 하며 포물선이 위로 볼록(최고차 음수)이면 왼쪽 영점이 극소·오른쪽이 극대라는 대응을 유지 · 극솟값<극댓값."
    creative: "(1) 포물선을 아래로 볼록으로 뒤집으면 극대·극소 위치가 바뀜(★2) (2) f' 가 세 영점을 갖는 삼차 그래프(f 는 사차)로 바꿔 극값 셋 중 어느 둘 사이인지 고르게 하기(★3 · I-RT d1 + I-EQV d1) (3) f(-2)·f(1) 대신 「f(x)=k 가 세 실근을 갖는 정수 k 가 3개」를 주고 극값의 차의 범위를 역으로 묻기(★3 · I-BW d1)."
```

```yaml
- id: RPM-CALC1-0528
  page: 82
  vendor_label: "유형 01 방정식 $f(x)=k$의 실근의 개수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    방정식 (3/4)x⁴-x³-3x²+k=0 이 서로 다른 네 실근을 갖도록 하는 k 의 범위가 α<k<β 일 때 β-α 의 값.
  category: "상수 분리 → 사차 g'(x)=0 근 3개 → 극소 두 값 비교 → 큰 극소 < -k < 극대 → 범위 폭"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「서로 다른 네 실근」을 W 개형에서 「두 극소 중 큰 값 < 상수 < 극대」로 옮김 — 작은 극소(-8)는 조건에 안 쓰임"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "방정식 f(x)=k의 실근의 개수(사차 · 네 실근 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    g(x)=(3/4)x⁴-x³-3x² 로 분리, g'(x)=3x(x-2)(x+1), 극소 g(-1)=-5/4·g(2)=-8, 극대 g(0)=0. y=-k 가 네 번 만나려면 -5/4<-k<0 ⇔ 0<k<5/4 → β-α=5/4. 분수 계산과 -k 부호 뒤집기(T-부호)·열린 구간(T-경계)이 있어 M_total 8. 통찰은 네 실근 조건을 「큰 극소와 극대 사이」로 옮기는 EQV d1 하나 → 「중」 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "(3/4)x⁴-x³-3x²=-k → g'(x)=3x(x-2)(x+1)=0 → 극소 -5/4, -8 · 극대 0 → -5/4<-k<0 → 0<k<5/4 → 5/4"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{5}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0528.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "사차식 계수를 바꿔 g'(x) 가 정수근 셋으로 인수분해되게. 제약: 두 극솟값이 달라야 「큰 쪽」 선택이 의미 있음 · 극대가 두 극소보다 커야 네 실근 구간이 존재 · 분수 계수를 두면 답이 분수(β-α)."
    creative: "(1) 「서로 다른 두 실근」으로 바꾸면 「작은 극소 아래는 0개·작은 극소 통과 1개·두 극소 사이 2개」 계단 해석 ★2 (2) 「서로 다른 세 실근」으로 바꾸면 극대 통과·큰 극소 통과 두 케이스에 작은 극소 기각이 붙어 ★3(0529 골조 · I-EQV d1 + I-VF d1) (3) 최고차를 음수로 뒤집어 M 개형에서 같은 질문 ★2."
```

```yaml
- id: RPM-CALC1-0529
  page: 82
  vendor_label: "유형 01 방정식 $f(x)=k$의 실근의 개수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    방정식 x⁴+4x³+28=8x²+k 가 서로 다른 세 실근을 갖도록 하는 모든 실수 k 의 값의 합.
  category: "이항·상수 분리 → g'(x)=0 근 3개 → 극값 셋 → 세 실근 = 직선이 극값점 통과 → 후보 3개 중 실근 수 3인 것만 → 합"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 4
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「서로 다른 세 실근」을 「y=k 가 극댓값 또는 극솟값 하나를 정확히 지나는 경우」로 옮겨 후보 k 를 극값 집합 {-100, 28, 25} 로 좁힘"
    - step: 5
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "후보마다 교점을 세어 k=28(극대 통과)·k=25(큰 극소 통과)는 3개, k=-100(작은 극소 통과)은 1개라 기각"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "방정식 f(x)=k의 실근의 개수(사차 · 세 실근 = 극값 통과)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    g(x)=x⁴+4x³-8x²+28, g'(x)=4x(x+4)(x-1), 극소 g(-4)=-100·g(1)=25, 극대 g(0)=28. W 개형에서 서로 다른 세 실근은 직선이 극값점을 지나 접하는 경우뿐이고 그중 작은 극소(-100)는 교점 1개라 탈락 → k=28, 25 → 합 53. 극대만 떠올리면 28 하나로 틀리는 문항. 조건 해석(EQV d1)과 후보 기각(VF d1) 두 통찰 → 「중」 출발 ★2 에 +1 → ★3. [분류 이슈] 벤더 「중」이나 사차 세 실근 골조는 이 범위 유일이라 ★3 으로 둠.
  tier: star_3
  mechanism_primary: "x⁴+4x³-8x²+28=k → g'(x)=4x(x+4)(x-1)=0 → 극값 -100, 28, 25 → 세 실근 ⇔ k=28 또는 k=25(k=-100 은 1개 기각) → 53"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$53$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0529.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "사차식 계수를 바꿔 g'(x) 가 정수근 셋 · 극값 셋이 서로 다른 정수가 되게. 제약: 두 극솟값이 달라야 「작은 극소 기각」이 유지됨(같으면 k=극소 에서 실근 2개가 되어 답 구조가 바뀜) · 극대가 큰 극소보다 커야 함."
    creative: "(1) 두 극솟값을 같게 만들면 세 실근인 k 는 극대 하나뿐 → 기각 통찰이 사라져 ★2 (2) 「서로 다른 두 실근」으로 바꾸면 「작은 극소 통과 → 1개」가 아니라 「두 극소 사이 구간」이 답이 돼 구간형 ★2 (3) 「세 실근 중 정수 근의 개수」처럼 근 자체를 묻게 하면 접점 x 좌표까지 구해야 해 ★3~4 (4) 삼차로 낮추면 세 실근이 열린 구간이 되어 0526 골조 ★2."
```

### 유형 02 방정식 $f(x)=k$의 실근의 부호

```yaml
- id: RPM-CALC1-0530
  page: 82
  vendor_label: "유형 02 방정식 $f(x)=k$의 실근의 부호"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    방정식 x³-(3/2)x²-a=0 이 한 개의 음의 실근과 서로 다른 두 개의 양의 실근을 갖도록 하는 실수 a 의 범위.
  category: "상수 분리 g(x)=a → g'(x)=0 → 극대 g(0)=0 · 극소 g(1)=-1/2 → y축 기준 교점 배치 → a 의 범위"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "근의 부호 조건을 「y=a 가 x<0 에서 1번·x>0 에서 2번 만남」으로 옮겨 g(0) 과 극솟값 사이로 좁힘"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "방정식 f(x)=k의 실근의 부호(그래프와 y축 기준 위치)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    g(x)=x³-(3/2)x², g'(x)=3x(x-1). 극대 g(0)=0(y축 위)·극소 g(1)=-1/2. x<0 에서 g 는 -∞→0 증가, x>0 에서 0→-1/2→∞ 이므로 음근 1·양근 2 ⇔ -1/2<a<0. 극대가 y축 위에 있어 g(0) 값이 곧 경계가 된다. 근의 부호 → y축 기준 교점 배치 해석(EQV d1) 하나·M_total 7 → 대표문제 ★2.
  tier: star_2
  mechanism_primary: "x³-(3/2)x²=a → g'(x)=3x(x-1)=0 → 극대 g(0)=0 · 극소 g(1)=-1/2 → 음근 1·양근 2 ⇔ -1/2<a<0"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-\dfrac{1}{2}<a<0$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0530.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항 계수(3/2 → 3, 6)를 바꿔 극소 위치·값을 조절. 제약: 극대가 x=0 에 놓이면 g(0)=극댓값이 경계가 되는 구조 유지 · 극솟값이 음수여야 양근 두 개 구간이 존재."
    creative: "(1) 극대를 x=0 에서 떼어 g(0) 과 극댓값이 다른 삼차식으로 바꾸면 경계가 g(0) 이 되어 0531 골조(★2) (2) 「두 개의 음의 실근과 한 개의 양의 실근」으로 뒤집기(★2) (3) 「양의 실근이 오직 하나」로 바꾸면 케이스가 둘(a≥0 또는 a=극솟값)로 갈려 ★3(I-MI d1 추가)."
```

```yaml
- id: RPM-CALC1-0531
  page: 82
  vendor_label: "유형 02 방정식 $f(x)=k$의 실근의 부호"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    방정식 2x³-3x²-12x+1-k=0 이 한 개의 양의 실근과 서로 다른 두 개의 음의 실근을 갖도록 하는 정수 k 의 최댓값과 최솟값의 합.
  category: "상수 분리 → 극대 g(-1)=8 · 극소 g(2)=-19 · g(0)=1 → 음근 2 ⇔ g(0)<k<극대 → 정수 최대·최소 합"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "음근 2·양근 1 을 「x<0 에서 두 번 만남 ⇔ g(0)<k<극댓값」으로 옮김 — 극솟값(-19)은 조건에 안 쓰임"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "방정식 f(x)=k의 실근의 부호(그래프와 y축 기준 위치)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    g(x)=2x³-3x²-12x+1, g'(x)=6(x-2)(x+1), 극대 g(-1)=8·극소 g(2)=-19·g(0)=1. x<0 에서 두 번 만나려면 y=k 가 g(0)=1 과 극대 8 사이, 그때 x>0 에서는 자동으로 한 번 → 1<k<8, 정수 2~7 → 2+7=9. 경계 1·8 제외(T-경계)와 극솟값을 쓰지 않는 판단이 포인트. EQV d1 하나·M_total 7 → 「중」 ★2.
  tier: star_2
  mechanism_primary: "2x³-3x²-12x+1=k → g'(x)=6(x-2)(x+1)=0 → 극대 8 · g(0)=1 → 1<k<8 → 정수 최대 7 + 최소 2 = 9"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$9$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0531.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식 계수와 상수항을 바꿔 극대 x<0·극소 x>0·g(0) 이 극댓값보다 작은 배치를 유지. 제약: g(0) 과 극댓값 사이에 정수가 여럿 · 경계가 정수여서 열린 구간 처리가 드러나게."
    creative: "(1) 「양근 2·음근 1」로 뒤집으면 경계가 극솟값과 g(0) 사이로 바뀜(★2) (2) 정수 k 의 「개수」나 「합」으로 발문만 바꾸기(★2) (3) 「음의 실근을 두 개 이상」처럼 등호·중근 허용을 넣으면 경계 포함 여부 케이스가 갈려 ★3(I-MI d1)."
```

```yaml
- id: RPM-CALC1-0532
  page: 82
  vendor_label: "유형 02 방정식 $f(x)=k$의 실근의 부호"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    방정식 x³-5x²+7x=x²-2x+a 가 서로 다른 세 개의 양의 실근을 갖도록 하는 모든 정수 a 의 값의 합. 5지선다.
  category: "이항·상수 분리 → g(x)=x(x-3)² → 극대 g(1)=4 · 극소 g(3)=0=g(0) → 양근 3 ⇔ 0<a<4 → 정수 합"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세 양근을 「x>0 에서 세 번 만남 ⇔ g(0)(=극솟값 0) < a < 극댓값」으로 옮기고 a=0 은 근 x=0 이 양수가 아니라 제외"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "방정식 f(x)=k의 실근의 부호(그래프와 y축 기준 위치)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이항해 x³-6x²+9x=a, g(x)=x(x-3)², g'(x)=3(x-1)(x-3), 극대 g(1)=4·극소 g(3)=0, g(0)=0. x>0 에서 세 번 만나려면 0<a<4 → 정수 1, 2, 3 의 합 6 → ⑤. g(0) 과 극솟값이 모두 0 이라 a=0 에서 근이 0, 3(중근)이 되어 제외되는 경계가 함정. EQV d1 하나·M_total 7 → 「중」 ★2.
  tier: star_2
  mechanism_primary: "x³-6x²+9x=a → g'(x)=3(x-1)(x-3)=0 → 극대 4 · 극소 0 · g(0)=0 → 0<a<4 → 1+2+3=6 → ⑤"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0532.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양변의 이차식을 바꿔 정리한 g(x) 가 x(x-c)² 꼴이 되게 하면 극소=g(0)=0 구조가 유지됨. 제약: 극댓값이 정수이고 그 아래 양의 정수가 여럿 · 선택지에 「a=0 포함」 오답(합 6 vs 6 — 여기선 0 을 더해도 같으므로 변형 시 경계 오답이 다른 값이 되게 설계)."
    creative: "(1) g(0)≠극솟값이 되도록 상수항을 옮기면 경계 둘을 따로 비교 ★2 (2) 「양의 실근 두 개와 음의 실근 한 개」로 바꿔 g(0) 을 경계로 쓰게 하기(★2 · 0531 골조) (3) 「세 양근의 합이 6 이 되게 하는 a」처럼 근과 계수의 관계를 얹으면 ★3(I-XU d1 · 방정식 단원)."
```

```yaml
- id: RPM-CALC1-0533
  page: 82
  vendor_label: "유형 02 방정식 $f(x)=k$의 실근의 부호"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    방정식 x⁴-4x³-2x²+12x-k=0 이 서로 다른 두 개의 양의 실근과 서로 다른 두 개의 음의 실근을 갖도록 하는 정수 k 의 개수.
  category: "상수 분리 → 사차 g'(x)=0 근 3개 → 극소 -9, -9 · 극대 7 · g(0)=0 → 양근 2·음근 2 ⇔ 극소<k<g(0) → 정수 세기"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "양근 2·음근 2 를 「y=k 가 y축 양쪽에서 두 번씩 만남 ⇔ 극솟값 < k < g(0)」로 옮김 — 극댓값 7 은 조건에 안 쓰임"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "방정식 f(x)=k의 실근의 부호(그래프와 y축 기준 위치)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    g(x)=x⁴-4x³-2x²+12x, g'(x)=4(x-3)(x-1)(x+1), 극소 g(-1)=g(3)=-9·극대 g(1)=7·g(0)=0. x<0 에서 두 번(극소 -9 와 g(0)=0 사이)·x>0 에서 두 번(같은 구간이면 자동) → -9<k<0, 정수 -8~-1 의 8개. 사차 인수분해(조립제법 없이 묶기)와 극값 셋 계산으로 Mₖ 2, 열린 구간·부호 함정 둘. EQV d1 하나 → 「중」 ★2 유지. [분류 이슈] 사차·M_total 8 로 유형 02 안에서 가장 무거워 ★3 후보이나 통찰 한 개라 라벨 ★2. (g 는 x=1 대칭 — g(1+u)=u⁴-8u²+7 — 이라 두 극솟값이 같다.)
  tier: star_2
  mechanism_primary: "x⁴-4x³-2x²+12x=k → g'(x)=4(x-3)(x-1)(x+1)=0 → 극소 -9(둘) · 극대 7 · g(0)=0 → -9<k<0 → 정수 8개"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$8$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0533.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x=1 대칭 꼴 g(x)=(x-1)⁴-8(x-1)²+7 의 8, 7 을 바꿔 극솟값·극댓값·g(0) 을 조절. 제약: g(0) 이 두 극소보다 크고 극대보다 작아야 「양근 2·음근 2」 구간이 존재 · 정수 k 개수를 물으므로 극솟값과 g(0) 이 정수."
    creative: "(1) 대칭을 깨서 두 극솟값이 다르게 만들면 「큰 극소 < k < g(0)」 비교가 추가 ★3 (2) 「양근 3·음근 1」로 바꾸면 g(0) 과 극댓값 사이로 경계가 옮겨감 ★2 (3) 대칭축 x=1 을 알려주고 「x=1 에 대한 대칭성으로 극값 계산을 줄이라」는 서술형(★3 · I-SYM d1)."
```

### 유형 03 극값을 이용한 삼차방정식의 근의 판별

```yaml
- id: RPM-CALC1-0534
  page: 83
  vendor_label: "유형 03 극값을 이용한 삼차방정식의 근의 판별"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    방정식 x³-3x²+1-k=0 이 서로 다른 세 실근을 갖도록 하는 정수 k 의 개수.
  category: "f'(x)=0 → 극댓값·극솟값(k 포함) → 곱 <0 → k 의 범위 → 정수 세기"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극값을 이용한 삼차방정식의 근의 판별(극댓값×극솟값 부호)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=3x(x-2), 극댓값 f(0)=1-k·극솟값 f(2)=-3-k. (1-k)(-3-k)<0 ⇔ (k-1)(k+3)<0 ⇔ -3<k<1 → 정수 -2, -1, 0 의 3개. 0526 과 같은 답 구조를 상수 분리 대신 극값의 곱으로 푸는 대표문제. 통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'(x)=3x(x-2)=0 → 극대 1-k · 극소 -3-k → (k-1)(k+3)<0 → -3<k<1 → 정수 3개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0534.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식 계수를 바꿔 극값 x 좌표가 정수·극값이 k 의 일차식으로 정리되게. 제약: 부등식 (k-p)(k-q)<0 의 p, q 가 정수여서 열린 구간 정수 세기가 드러나게."
    creative: "(1) 「한 실근」·「중근」으로 조건만 바꾸기(★2 · 0535·0536 골조) (2) 극댓값·극솟값의 곱을 k 의 이차부등식으로 풀게 하는 서술형(★2) (3) 「세 실근이 모두 정수」처럼 근의 성질을 얹으면 인수분해와 결합돼 ★3(I-XU d1 · 방정식 단원)."
```

```yaml
- id: RPM-CALC1-0535
  page: 83
  vendor_label: "유형 03 극값을 이용한 삼차방정식의 근의 판별"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    방정식 (1/3)x³-x²+a=0 이 한 실근과 두 허근을 갖도록 하는 실수 a 의 범위.
  category: "f'(x)=0 → 극댓값·극솟값(a 포함) → 곱 >0 → a 의 범위"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극값을 이용한 삼차방정식의 근의 판별(극댓값×극솟값 부호)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=x(x-2), 극댓값 f(0)=a·극솟값 f(2)=a-4/3. 한 실근·두 허근 ⇔ 극값 곱 >0 ⇔ a(a-4/3)>0 ⇔ a<0 또는 a>4/3. 「허근 두 개」를 「그래프가 x축과 한 번 만남」으로 읽는 것은 유형 정의 수준. 분수 계수 하나뿐. 통찰 없음·M_total 6 → 「중」 ★2.
  tier: star_2
  mechanism_primary: "f'(x)=x(x-2)=0 → 극대 a · 극소 a-4/3 → a(a-4/3)>0 → a<0 또는 a>4/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a<0$ 또는 $a>\dfrac{4}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0535.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최고차 1/3 과 이차항 계수를 바꿔 극솟값이 a-(분수) 가 되게. 제약: 극댓값이 a 그대로가 되도록 상수항 외 항이 x=0 에서 0 · 답의 분수가 간단할 것."
    creative: "(1) 「서로 다른 세 실근」으로 뒤집으면 열린 구간 ★2 (2) a 의 범위 대신 「한 실근을 갖는 정수 a 중 절댓값 최소」처럼 정수 필터를 얹기(★2) (3) 「두 허근의 실수부 합」처럼 허근을 실제로 다루게 하면 근과 계수의 관계 결합 ★3(I-XU d1)."
```

```yaml
- id: RPM-CALC1-0536
  page: 83
  vendor_label: "유형 03 극값을 이용한 삼차방정식의 근의 판별"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    방정식 2x³-6x²-18x+k=0 이 서로 다른 두 실근을 갖도록 하는 모든 실수 k 의 값의 합.
  category: "f'(x)=0 → 극댓값·극솟값(k 포함) → 곱 =0 → k 두 값 → 합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극값을 이용한 삼차방정식의 근의 판별(극댓값×극솟값 부호)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=6(x-3)(x+1), 극댓값 f(-1)=10+k·극솟값 f(3)=k-54. 서로 다른 두 실근(중근 하나) ⇔ 극값 중 하나가 0 ⇔ k=-10 또는 54 → 합 44. 곱 =0 케이스라 답이 두 값의 합으로 닫힘. 통찰 없음·M_total 6 → 「중」 ★2.
  tier: star_2
  mechanism_primary: "f'(x)=6(x-3)(x+1)=0 → 극대 10+k · 극소 k-54 → (k+10)(k-54)=0 → -10+54=44"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$44$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0536.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식 계수를 바꿔 극값 x 좌표가 정수이고 극값이 k±정수 로 정리되게. 제약: 두 k 값이 정수여서 합이 정수 · 「모든 k 의 합」이므로 두 값이 서로 달라야 함(극댓값=극솟값 인 경우는 삼차에서 불가)."
    creative: "(1) 「중근이 양수가 되도록」 같은 부호 조건을 얹으면 두 k 중 하나만 남아 ★3(I-VF d1) (2) k 의 합 대신 「그때의 중근의 합」(극값 x 좌표 -1+3=2)을 물어 답 위치를 옮기기(★2) (3) 계수를 두 개(k, m) 로 두고 「중근 x=3」 조건에서 k 결정 → 미정계수 역방향 ★3(I-BW d1)."
```

```yaml
- id: RPM-CALC1-0537
  page: 83
  vendor_label: "유형 03 극값을 이용한 삼차방정식의 근의 판별"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    방정식 x³-2=12x+k 가 한 개의 실근을 갖도록 하는 실수 k 의 범위가 k<α 또는 k>β 일 때 β-α 의 값. 5지선다.
  category: "이항 → f'(x)=0 → 극댓값·극솟값(k 포함) → 곱 >0 → 경계 α, β → 차"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극값을 이용한 삼차방정식의 근의 판별(극댓값×극솟값 부호)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(x)=x³-12x-2-k, f'(x)=3(x-2)(x+2), 극댓값 f(-2)=14-k·극솟값 f(2)=-18-k. 한 실근 ⇔ (14-k)(-18-k)>0 ⇔ (k-14)(k+18)>0 ⇔ k<-18 또는 k>14 → β-α=14-(-18)=32 → ⑤. 부호를 뒤집어 정리하는 T-부호 하나. 통찰 없음·M_total 6 → 「중」 ★2. (상수 분리 x³-12x=k+2 로 풀면 극값 ±16 에서 k+2 의 범위로 같은 답.)
  tier: star_2
  mechanism_primary: "x³-12x-2-k=0 → f'(x)=3(x-2)(x+2)=0 → 극대 14-k · 극소 -18-k → (k-14)(k+18)>0 → α=-18, β=14 → 32"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0537.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 의 계수(12 → 3, 27)와 상수항을 바꿔 극값 x 좌표 ±c 가 정수 · 극값이 ±2c³ 꼴로 대칭이 되게. 제약: β-α 가 선택지와 맞게 정수 · 부호 뒤집기 단계를 남기려면 k 를 우변에 둘 것."
    creative: "(1) 좌우변을 「곡선 y=x³-2 와 직선 y=12x+k 가 한 점에서 만남」으로 바꾸면 유형 04 골조 ★2(I-RT d1) (2) 「실근이 한 개이고 그 근이 양수」로 부호 조건을 얹으면 f(0) 대조 추가 ★3(I-EQV d1) (3) 홀함수 x³-12x 의 대칭으로 극값이 ±16 임을 이용하는 풀이를 요구하면 I-SYM d1 ★2."
```

### 유형 04 두 곡선의 교점의 개수

```yaml
- id: RPM-CALC1-0538
  page: 83
  vendor_label: "유형 04 두 곡선의 교점의 개수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    곡선 y=x³-11x 와 직선 y=x+k 가 서로 다른 세 점에서 만나도록 하는 실수 k 의 범위.
  category: "교점 ⇔ 방정식 → 상수 분리 x³-12x=k → 극값 ±16 → 범위"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 그래프의 교점 개수를 방정식 x³-11x=x+k 의 서로 다른 실근 개수로 전환(기하 → 대수)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 곡선의 교점의 개수(차의 방정식 → 극값)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x³-11x=x+k ⇔ x³-12x=k. g(x)=x³-12x, g'(x)=3(x-2)(x+2), 극댓값 g(-2)=16·극솟값 g(2)=-16 → -16<k<16. 교점 → 실근 전환(RT d1) 뒤는 0526 골조 그대로. M_total 6 → 대표문제 ★2.
  tier: star_2
  mechanism_primary: "x³-11x=x+k → x³-12x=k → g'(x)=3(x-2)(x+2)=0 → 극값 ±16 → -16<k<16"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$-16<k<16$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0538.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선의 x 계수와 직선의 기울기를 바꿔 차 g(x)=x³-cx 의 c 가 3·(정수)² 이 되게. 제약: 극값이 ±정수 로 대칭이면 답이 -m<k<m 꼴 · 직선 기울기를 곡선 x 계수와 헷갈리지 않게 부호를 다르게."
    creative: "(1) 직선의 기울기를 미지수 m 으로 두고 k=0 인 채 「세 점에서 만나는 m 의 범위」(★2 · 극값이 m 의 식) (2) 「한 점에서만 만난다」로 바꿔 여집합 범위 ★2 (3) 직선 대신 포물선 y=-x²+ax 를 놓으면 차가 일반 삼차가 되어 0539 골조 ★2 (4) 「세 교점의 x 좌표의 합」을 물으면 근과 계수의 관계 결합 ★3(I-XU d1)."
```

```yaml
- id: RPM-CALC1-0539
  page: 83
  vendor_label: "유형 04 두 곡선의 교점의 개수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 곡선 y=x³-5x²+3x+k, y=-2x²+3x 가 서로 다른 두 점에서 만나도록 하는 양수 k 의 값.
  category: "교점 ⇔ 방정식 → 차 x³-3x²+k=0 → 극댓값·극솟값 곱 =0 → k 두 값 → 양수 선택"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 곡선의 교점 개수를 차의 방정식 x³-3x²+k=0 의 서로 다른 실근 개수로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 곡선의 교점의 개수(차의 방정식 → 극값)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    차 f(x)=x³-3x²+k, f'(x)=3x(x-2), 극댓값 f(0)=k·극솟값 f(2)=k-4. 서로 다른 두 교점 ⇔ 극값 중 하나가 0 ⇔ k=0 또는 4, 양수 조건으로 k=4. 교점 → 실근 전환(RT d1) 뒤는 0536 골조. 「양수」 필터(T-범위) 하나. M_total 6 → 「중」 ★2.
  tier: star_2
  mechanism_primary: "x³-5x²+3x+k=-2x²+3x → x³-3x²+k=0 → f'(x)=3x(x-2)=0 → k(k-4)=0 → 양수 k=4"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0539.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 곡선의 이차·일차항이 서로 상쇄되도록 계수를 맞춰 차가 x³-ax²+k 꼴이 되게. 제약: 극값 x 좌표가 정수 · 두 k 값 중 하나만 양수가 되도록 극댓값이 k 자체(x=0 극대)인 구조를 유지."
    creative: "(1) 「양수 k」 조건을 빼고 「모든 k 의 합」(★2 · 0536 골조) (2) 「두 점에서 만날 때 두 교점의 x 좌표의 합」(중근 x=2 와 다른 근 -1 → 근과 계수)로 확장 ★3(I-XU d1) (3) 두 곡선이 「접한다」는 표현으로 바꾸면 접점 조건 해석이 추가돼 0541 골조 ★3(I-EQV d1)."
```

```yaml
- id: RPM-CALC1-0540
  page: 83
  vendor_label: "유형 04 두 곡선의 교점의 개수"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    두 곡선 y=x³+2x²-5x+k, y=-x²+4x+2 가 한 점에서 만나도록 하는 자연수 k 의 최솟값. 서술형.
  category: "교점 ⇔ 방정식 → 차 x³+3x²-9x+k-2=0 → 극댓값·극솟값 곱 >0 → k 의 범위 → 자연수 최솟값"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "한 점에서 만남을 차의 방정식이 한 실근만 갖는 조건으로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 곡선의 교점의 개수(차의 방정식 → 극값)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    차 f(x)=x³+3x²-9x+k-2, f'(x)=3(x+3)(x-1), 극댓값 f(-3)=k+25·극솟값 f(1)=k-7. 한 교점 ⇔ (k+25)(k-7)>0 ⇔ k<-25 또는 k>7 → 자연수 최솟값 8. k=7 은 두 점(접점 포함)이라 제외되는 T-경계 하나. 교점 → 실근 전환(RT d1) 뒤는 0537 골조. 서술형 태그는 풀이 서술 요구일 뿐 골조 변화 없음. M_total 6 → 「중」 ★2.
  tier: star_2
  mechanism_primary: "x³+2x²-5x+k=-x²+4x+2 → x³+3x²-9x+k-2=0 → f'(x)=3(x+3)(x-1)=0 → (k+25)(k-7)>0 → k>7 → 자연수 최솟값 8"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0540.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 곡선 계수를 바꿔 차의 도함수가 정수근 둘로 인수분해되게. 제약: 극솟값 경계(k-7=0)가 정수여서 「자연수 최솟값 = 경계+1」 함정이 남게 · 다른 경계(k<-25)는 자연수 범위 밖."
    creative: "(1) 「자연수 최솟값」 대신 「정수 k 중 한 점에서 만나지 않는 것의 개수」(여집합 · 열린 구간 정수 세기)(★2) (2) 「한 점에서 만나고 그 점의 x 좌표가 양수」로 부호 조건을 얹기 ★3(I-EQV d1) (3) 두 곡선을 y=f(x), y=f(x)+ax 처럼 기울기 매개변수로 두면 극값이 a 의 식이 돼 Mₐ 상승 ★3."
```

```yaml
- id: RPM-CALC1-0541
  page: 83
  vendor_label: "유형 04 두 곡선의 교점의 개수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 곡선 y=-2x³-x²+6x+3, y=2x²-6x+k 가 한 점에서 만나고 다른 한 점에서는 접하도록 하는 모든 실수 k 의 값의 합.
  category: "교점·접점 ⇔ 방정식의 단근·중근 → 차 -2x³-3x²+12x+3-k=0 → 극댓값·극솟값 곱 =0 → k 두 값 → 합"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 곡선의 만남·접함을 차의 방정식 h(x)=0 의 실근으로 전환"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「한 점에서 만나고 다른 한 점에서 접한다」를 「h(x)=0 이 중근 하나와 다른 한 실근 ⇔ 극댓값 또는 극솟값이 0」으로 옮김"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "두 곡선의 교점의 개수(차의 방정식 → 극값 · 접한다 ↔ 중근)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    차 h(x)=-2x³-3x²+12x+3-k, h'(x)=-6(x+2)(x-1), 극솟값 h(-2)=-17-k·극댓값 h(1)=10-k. 접점은 중근·다른 교점은 단근이므로 서로 다른 실근 2개 ⇔ 극값 중 하나가 0 ⇔ k=-17 또는 10 → 합 -7. 최고차 음수라 극대·극소 위치가 뒤집히고 부호 계산이 많아(Mₖ 2 · T-부호) M_total 8. 교점 → 실근(RT d1)과 접한다 → 중근 → 극값 0(EQV d1) 두 전환 → 「중」 출발 ★2 에 +1 → ★3. [분류 이슈] 벤더 「중」이며 EQV 는 접선 단원에서 익힌 표준 동치라 ★2 로 볼 수도 있음 — +1 적용해 ★3 기록.
  tier: star_3
  mechanism_primary: "-2x³-x²+6x+3=2x²-6x+k → h(x)=-2x³-3x²+12x+3-k → h'(x)=-6(x+2)(x-1)=0 → 극소 -17-k · 극대 10-k → 접함 ⇔ 극값 하나 0 → k=-17, 10 → -7"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$-7$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0541.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 곡선 계수를 바꿔 차의 도함수가 정수근 둘 · 극값이 k±정수 로 정리되게. 제약: 최고차 부호를 음수로 두면 극대·극소 위치 반전 함정 유지 · 「모든 k 의 합」이므로 두 극값 x 좌표에서의 값이 서로 다른 k 를 주게."
    creative: "(1) 「접하기만 한다(교점이 접점 하나뿐)」로 바꾸면 삼차에서 불가능해 「그런 k 가 없음」을 논증하는 서술형 ★3 (2) 「접점의 x 좌표가 양수」 조건을 얹어 k 하나만 남기기 ★3(I-VF d1) (3) 접점에서 두 곡선의 공통접선의 방정식까지 묻기 → 접선 단원 결합 ★3~4(I-XU d1) (4) 최고차를 양수로 바꾸면 부호 함정이 줄어 ★2~3."
```

## 표본 판정 요약 (29문)

- ★ 분포: ★1 13 · ★2 14 · ★3 2 · ★4 0 · ★5 0
- 통찰형 2(0529 · 0541) · 절차형 27 · premium 0 — 통찰 라벨이 붙은 블록은 11(0527 RT · 0528 EQV · 0529 EQV+VF · 0530~0533 EQV · 0538~0540 RT · 0541 RT+EQV)이지만 d1 한 개뿐인 9문은 절차형으로 분류
- ★1 13문은 모두 교과서 구역(0513~0525) · ★2 14문은 대표문제 4 + 「중」 10 · ★3 은 「중」 출발에 통찰 2개로 +1 한 0529(사차 세 실근 = 극값 통과 후보 중 작은 극소 기각)와 0541(교점 → 실근 · 접한다 → 중근 → 극값 0)
- type_hint 상위: 「극값을 이용한 삼차방정식의 근의 판별」 5(0517 · 0534~0537) · 「방정식의 서로 다른 실근의 개수(극값의 부호로 판정)」 4(0513~0516) · 「방정식 f(x)=k의 실근의 개수」 4(0526~0529 · 삼차 정수 세기 / 도함수 그래프 / 사차 네 실근 / 사차 세 실근) · 「방정식 f(x)=k의 실근의 부호」 4(0530~0533) · 「두 곡선의 교점의 개수」 4(0538~0541) · 그 밖에 「수직선 위 점의 속도와 가속도」 3 · 「부등식의 증명(최솟값 이용)」 2 · 「부등식이 항상 성립할 조건」 1 · 「시각에 대한 길이의 변화율」 1 · 「구의 겉넓이·부피의 변화율」 1
- 그림: 1문(0527 `crop:fig-0527.png` · 도함수 그래프) · 소문항 문항 2문(0517 ⑴~⑶ · 0525 ⑴⑵) · 5지선다 2문(0532 · 0537)
- 전사 답 확인 필요: 없음(29문 모두 재계산 일치)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC1-0516 | 교과서 드릴이지만 이항 + f'(x)=12x(x-1)² 의 「극값 아닌 임계점」 처리로 0513·0514 보다 무겁다 → ★1 유지, 유형 구역이면 ★2 | ★1 / ★2 |
| RPM-CALC1-0517 | 매개변수 k 의 세 경우 판별(Mₐ 2 · M_total 6)이 유형 03(0534~0537 · ★2)과 같은 골조 — 교과서 라벨 ★1 유지 | ★1 / ★2 |
| RPM-CALC1-0520 | 매개변수 k · 극소 두 개 비교(M_total 6) — 부등식 유형 구역(06-p2)의 같은 골조는 ★2 로 나올 것 · 교과서 라벨 ★1 유지 | ★1 / ★2 |
| RPM-CALC1-0529 | 벤더 「중」(★2) 이나 사차 세 실근 = 극값 통과 후보 3개 중 작은 극소 기각(EQV d1 + VF d1) 으로 +1 적용 → ★3. 유형 01 안 유일한 골조 | ★3 / ★2 |
| RPM-CALC1-0533 | 사차 · 근의 부호 · M_total 8 로 유형 02 안 최중량이나 통찰은 EQV d1 하나 → ★2 유지. 대칭축 x=1 을 쓰면 계산이 줄어 체감은 ★2 | ★2 / ★3 |
| RPM-CALC1-0541 | 벤더 「중」(★2) 이나 교점 → 실근(RT d1) + 접한다 → 중근 → 극값 0(EQV d1) 두 전환·M_total 8 로 +1 적용 → ★3. 접한다 ↔ 중근을 표준 동치로 보면 ★2 | ★3 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 방정식 실근 판별 계열이 21문(교과서 실근 개수 4 · 근의 판별 소문항 1 · 유형 01 4 · 유형 02 4 · 유형 03 4 · 유형 04 4)으로 범위의 3/4 이며 모두 「f'(x)=0 → 극값 → 그래프 또는 극댓값×극솟값 부호」 한 골조 위에 있다. 나머지는 부등식 3(증명 2 · 미정계수 1) · 변화율 5(속도·가속도 3 · 길이 1 · 구 1).
- 따로 세워야 할 유형: 「사차방정식 f(x)=k 의 실근의 개수」(0515 · 0516 · 0528 · 0529 · 0533) — 극값 3개 비교(두 극소 중 큰 값) · 세 실근 = 극값 통과 + 작은 극소 기각 · 극값 아닌 임계점 처리가 삼차와 골조가 달라 base ★ 를 삼차보다 한 단계 높게(★2~3) 두고 「세 실근(접촉) 조건 · 근의 부호 결합」을 +1 조건으로 기술 · 「도함수 그래프 해석 → 원함수 극값 → 실근 개수」(0527) — 식 없이 f' 그래프와 f 의 두 값만 주는 추상 골조(Mₐ 3)로 06-p2·p3 의 그래프 문항과 묶어 별도 유형 · 「방정식 f(x)=k 의 실근의 부호」(유형 02) — g(0) 대조·y축 기준 교점 배치(EQV d1)가 항상 붙으므로 삼차 실근 개수 아래 +1 하위 골조가 아니라 별도 유형으로 두는 편이 base ★2 를 정당화하기 쉬움.
- 통합해도 될 유형: 「방정식의 서로 다른 실근의 개수(교과서 0513~0516 · 삼차 부분)」와 「극값을 이용한 삼차방정식의 근의 판별」(0517 · 0534~0537) 과 「방정식 f(x)=k 의 실근의 개수(삼차 · 0526)」 → 「삼차방정식의 근의 판별(극댓값×극솟값 부호 / 상수 분리)」 하나 — 상수 분리와 극값 곱 판별은 같은 조건의 두 표기라 풀이 갈래로만 적음 · 「두 곡선의 교점의 개수」(유형 04)는 차의 방정식을 세운 뒤 위 유형과 동일하므로 「교점 ↔ 실근 전환(RT d1)」을 +0 전제 단계로 붙여 통합 가능하되 「접한다 ↔ 중근」(0541)은 +1 조건으로 기술 · 「수직선 위 점의 속도와 가속도」와 「길이·겉넓이·부피의 변화율」 → 「시각에 대한 변화율(위치·길이·넓이·부피)」 하나에 「도형 공식에 r(t) 대입」을 +0 하위 골조로.
- ★ 갈림 메모: 같은 골조에서 교과서 ★1 / 유형 ★2 갈림(0513 vs 0526 · 0517 vs 0534~0537 · 0520 vs 06-p2 부등식 유형) — 카탈로그 base ★ 는 유형 구역 기준 ★2 로 두고 교과서 드릴은 「M_total ≤ 5 또는 소문항 없는 단일 계산」을 −1 조건으로 적는 편이 맞다. +1 은 이 범위에서 「사차 세 실근(극값 통과 + 기각)」(0529)과 「접한다 ↔ 중근」(0541) 두 조건뿐이며 둘 다 통찰 2개(d1+d1)로 얻은 ★3 이라 카탈로그에서 base ★3 유형으로 세울지, base ★2 + 조건 +1 로 둘지는 06-p2·p3(유형 05 이후 · 시험에 꼭 나오는 문제 · 서술형 · 실력 Up)의 같은 골조 표본을 본 뒤 결정.
