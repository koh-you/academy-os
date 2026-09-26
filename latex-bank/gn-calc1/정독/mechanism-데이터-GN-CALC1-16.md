---
name: mechanism-데이터-GN-CALC1-16
description: 개념원리 미적분Ⅰ 16 방정식과 부등식에의 활용(1/1 · 136~143쪽 · 30문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅰ · 전사본 latex-bank/gn-calc1
  section: 16 방정식과 부등식에의 활용
  unit_code: CALC1-16
  part: "1/1"
  extract_range: "136~143쪽 · 136-e26~143-291"
  total_problems: 30
  unit_total: 30
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그·STEP)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc1/items/<id>.tex
  image_source: latex-bank/gn-calc1/figures/ (crops.json)
---

# 개념원리 미적분Ⅰ · 16 방정식과 부등식에의 활용 (1/1) 정독 데이터 (v1.0)

이 파일은 136~143쪽 「16 방정식과 부등식에의 활용」 전 범위 30문항 전수다. 구역은 네 개 — 「필수·발전 예제」 19문(필수 예제 6 + 각 예제에 딸린 확인체크 13), 「연습문제 STEP 1」 6문, 「연습문제 STEP 2」 3문, 「연습문제 실력 UP」 2문. 이 단원에는 「개념원리 익히기」 통번호 구역이 없고, 확인체크는 모두 바로 앞 필수 예제와 같은 골조의 연습이므로 필수 예제와 **같은 층(★2 출발)**으로 본다. 연습문제 STEP 1 은 ★2, STEP 2 는 ★3, 실력 UP 은 ★4 출발이고 기출 태그(평가원·교육청)는 통찰 유무로 +0~1 만 본다. 단원 전체가 「미분 → 그래프 개형 → 교점·최솟값 판정」을 요구해 한 줄짜리 개념 확인 문항이 없으므로 이 범위에는 ★1 이 나오지 않는다.

★ 조정은 다음 한 규칙만 썼다. `insight_count = 0 이고 M_total ≤ 5` 면 −1, `insight_count ≥ 2` 이거나 `depth 3` 이거나 `insight_count = 1 이고 M_total ≥ 8` 이면 +1, 그 밖에는 0. ★5 는 통찰 3개 이상 + {SC, VF, SYM, XU} 중 하나가 있을 때만 주므로 이 범위의 라벨 상한은 ★4 다. `depth_score` 는 effective_depth 의 평균이다.

통찰 라벨은 **단원 KEY 로 제시된 표준 절차에는 붙이지 않는다**. 즉 「방정식의 실근 개수 = y=f(x) 그래프와 x축의 교점 개수」와 「모든 실수에서 부등식 ⇔ (좌변−우변)의 최솟값 ≥ 0」은 이 단원이 직접 가르치는 도구라 절차로 본다. 라벨은 학생이 실제로 결정해야 하는 단계 — 상수를 분리해 y=k 수평선으로 옮길지 고르는 전략 분기(I-SC), 근의 개수·중근·허근 조건을 극값의 부호·곱으로 옮기는 동치 변환(I-EQV), 근의 부호 배치를 f(0)과 극값의 대소로 묶는 조건 통합(I-CON), 열린구간·경계에서 후보를 다시 따지는 검증(I-VF) — 에만 붙였다.

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC1-136-e26
  page: 136
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    방정식 $x^3+3x^2-3=0$ 의 서로 다른 실근의 개수.
  category: "미분 → 극댓값·극솟값의 부호 → x축 교점 개수"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼차·사차방정식의 실근의 개수(그래프 개형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(x)=x^3+3x^2-3 을 미분해 극점 x=-2, 0 을 잡고 극댓값 f(-2)=1>0, 극솟값 f(0)=-3<0 을 확인하면 x축과 세 번 만난다.
    실근 개수를 그래프 교점으로 읽는 것은 이 단원이 직접 가르치는 KEY 절차라 통찰 라벨을 붙이지 않았다.
    함정은 극값이 0 이 되면 중근이 되어 개수가 줄어든다는 경계와 부호 비교 두 가지(T-경계·T-부호)다.
    필수 예제 출발 ★2 · 통찰 0 · M_total 6 → 조정 없이 ★2.
  tier: star_2
  mechanism_primary: "f(x)=x^3+3x^2-3 → f'=3x(x+2) → 극댓값 f(-2)>0 · 극솟값 f(0)<0 → 교점 3개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/136-e26.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항·상수항을 바꿀 수 있음(x^3+3x^2+k 꼴). 제약: 극점이 정수로 떨어지게 f'=3x(x+2) 류의 인수분해 가능 형태를 유지하고, 상수항은 극댓값과 극솟값의 부호가 서로 달라야 답이 3 이 된다. 상수항을 극값이 0 이 되는 값(-4 또는 0)으로 두면 답이 2 로 바뀌므로 의도한 개수에 맞춰 고른다."
    creative: "(1) 같은 식에서 실근의 부호(양·음)까지 묻기(★2~3 · I-CON 추가) (2) 사차식으로 올려 극소 두 개의 높이를 다르게 두면 경우가 비대칭이 되어 ★3 (3) 상수항을 k 로 두고 실근이 3개가 되도록 하는 k 의 범위를 물으면 I-SC(상수 분리)가 들어가 ★2~3."
```

```yaml
- id: GN-CALC1-136-268
  page: 136
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 네 개의 삼·사차방정식(⑶⑷ 는 양변에 항이 흩어져 있음)의 서로 다른 실근의 개수 구하기.
  category: "한 변으로 이항 → 미분 → 극값의 부호 → 교점 개수"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼차·사차방정식의 실근의 개수(그래프 개형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴⑵ 는 바로, ⑶⑷ 는 한 변으로 몰아 정리한 뒤 같은 절차를 반복한다. 사차인 ⑵⑷ 는 극소가 둘이라 두 극솟값의 부호를 모두 봐야 한다.
    네 번 반복하는 계산량 때문에 Mₖ=2 로 두었을 뿐 도구는 예제와 동일하고 통찰 라벨은 없다.
    확인체크 출발 ★2 · 통찰 0 · M_total 7 → 조정 없이 ★2.
  tier: star_2
  mechanism_primary: "이항해 f(x)=0 꼴 → f' 의 부호로 극값 → 극댓값·극솟값의 부호 조합 → 교점 개수"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $1$ ⑵ $4$ ⑶ $3$ ⑷ $2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/136-268.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 식의 상수항이 답(개수)을 정하므로 상수항만 바꿔 1·2·3·4 개를 골고루 만들 수 있음. 제약: f' 이 유리수 근을 갖도록 계수를 잡고, 사차는 두 극솟값이 같은 값이 되지 않게(대칭형 x^4+ax^2+b 는 두 극솟값이 같아 개수가 0·2·4 만 나옴) 홀수차항을 남긴다."
    creative: "(1) 네 소문항을 「실근이 2개인 것을 모두 고르시오」 보기형으로 묶으면 비교 판단이 생겨 ★3 (2) ⑶⑷ 처럼 양변 정리 단계를 늘려 두 함수 y=f(x), y=g(x) 의 교점으로 묻기(★2) (3) 상수항을 문자로 바꿔 개수 조건에서 상수를 역산하게 하면 I-SC 추가 ★3."
```

```yaml
- id: GN-CALC1-137-e27
  page: 137
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 방정식 $2x^3-3x^2-12x-k=0$ 이 서로 다른 세 실근 / 두 실근 / 한 실근을 갖도록 하는 실수 $k$ 의 값 또는 범위.
  category: "상수 k 분리 → y=f(x) 와 수평선 y=k 의 교점 개수 → 극값과의 대소"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "k 를 우변으로 분리해 고정된 곡선 y=2x^3-3x^2-12x 와 움직이는 수평선 y=k 의 교점으로 바꿔 보는 전략 선택(극값에 k 가 섞인 채 부호를 따지는 갈래보다 현저히 빠름)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "방정식의 근의 개수 조건에서 상수 구하기(상수 분리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    k 를 분리하면 곡선은 고정되고 수평선만 오르내리므로 극댓값 7·극솟값 -20 과의 대소만으로 세 경우가 한 번에 갈린다.
    분리하지 않고 g(x)=2x^3-3x^2-12x-k 의 극값 곱 부호를 쓰는 갈래도 가능하지만 k 가 극값에 섞여 느리다 — 갈래 선택이 실제 의사결정이라 I-SC d1 하나.
    함정은 세 실근·두 실근의 경계에서 등호를 어디에 붙이는가(T-경계)와 범위를 두 구간으로 나눠 써야 하는 ⑶(T-범위)이다.
    필수 예제 출발 ★2 · 통찰 1 · M_total 7(<8) → 조정 없이 ★2.
  tier: star_2
  mechanism_primary: "k 분리 → y=2x^3-3x^2-12x 의 극댓값 7 · 극솟값 -20 → y=k 의 높이로 교점 3·2·1 개 구분"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $-20<k<7$ ⑵ $k=-20$ 또는 $k=7$ ⑶ $k<-20$ 또는 $k>7$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/137-e27.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식의 계수를 바꿔 극값 두 개를 다른 정수로 만들 수 있음. 제약: f'=0 이 유리수 근을 가져야 하고(6x^2-6x-12 처럼 인수분해), 극댓값 ≠ 극솟값 이어야 세 경우가 분리된다. 최고차 계수를 음수로 두면 극대·극소의 상하가 뒤집혀 부등호 방향이 모두 바뀐다."
    creative: "(1) k 를 상수항이 아니라 일차항 계수에 넣으면 분리가 불가능해져 극값 곱 판정만 남고 ★3 (2) 「서로 다른 두 실근」만 따로 물어 중근 조건으로 좁히면 ★2 (3) 정수 k 의 개수를 묻게 바꾸면 경계 제외 판단이 더해져 ★3."
```

```yaml
- id: GN-CALC1-137-269
  page: 137
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 방정식 $x^3-3x=k$ 가 서로 다른 세 실근 / 두 실근 / 한 실근을 갖도록 하는 실수 $k$ 의 값 또는 범위.
  category: "이미 분리된 꼴 → y=x^3-3x 의 극값 ±2 와 y=k 의 대소"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "방정식의 근의 개수 조건에서 상수 구하기(상수 분리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    발문이 이미 f(x)=k 꼴로 주어져 앞 예제의 I-SC(분리 전략 선택) 단계가 사라졌다. 남는 것은 극댓값 2·극솟값 -2 를 구해 대소를 쓰는 절차뿐이라 통찰 라벨 없음.
    확인체크 출발 ★2 · 통찰 0 · M_total 7 → 조정 없이 ★2.
  tier: star_2
  mechanism_primary: "y=x^3-3x 의 극댓값 2 · 극솟값 -2 → y=k 의 높이로 교점 3·2·1 개 구분"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-2<k<2$ ⑵ $k=-2$ 또는 $k=2$ ⑶ $k<-2$ 또는 $k>2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/137-269.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x^3-ax 꼴의 a(양수)를 바꾸면 극값이 ±2(a/3)√(a/3) 로 움직임. 제약: 극값이 유리수로 떨어지려면 a 를 3 의 배수이면서 a/3 이 제곱수인 값(3, 12, 27)으로 고른다. a≤0 이면 극값이 없어 항상 한 실근이라 문제가 성립하지 않는다."
    creative: "(1) 우변을 y=k 대신 y=kx 로 바꾸면 원점을 지나는 직선과의 교점이라 분리가 막히고 ★3~4 (2) 「실근이 모두 양수」 조건을 얹으면 I-CON 이 들어가 ★3 (3) k 의 정수 개수를 묻기(★2~3)."
```

```yaml
- id: GN-CALC1-137-270
  page: 137
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 사차방정식 $3x^4-4x^3-12x^2+15-k=0$ 이 서로 다른 네 / 세 / 두 실근, 한 실근을 갖도록 하는 실수 $k$ 의 값 또는 범위.
  category: "k 분리 → 사차함수의 극소 2 · 극대 1 높이와 y=k 의 대소 → 네 경우 분기"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "k 를 분리해 고정된 사차곡선과 수평선 y=k 의 교점 문제로 바꿈"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "극소 두 개(-17, 10)의 높이가 달라 「두 실근」이 -17<k<10 과 k>15 두 구간으로 갈라짐 — 두 구간을 모두 찾아야 답이 완성됨"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "사차방정식의 근의 개수 조건에서 상수 범위(상수 분리)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f(x)=3x^4-4x^3-12x^2+15 의 극점은 x=-1, 0, 2 이고 극솟값 10·극댓값 15·극솟값 -17 로 **세 높이가 모두 다르다**. 그래서 수평선을 내릴 때 교점 수가 1 → 2 → 3 → 4 → 3 → 2 로 대칭 없이 변한다.
    특히 「두 실근」이 서로 떨어진 두 구간으로 나오는 것이 이 문항의 핵심이며, 한쪽만 쓰면 틀린다(I-MI d2).
    확인체크 출발 ★2 · 통찰 2 → +1 → ★3.
  tier: star_3
  mechanism_primary: "k=3x^4-4x^3-12x^2+15 분리 → 극값 -17 · 15 · 10 → y=k 높이별 교점 수 4·3·2·1 로 k 범위 결정"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $10<k<15$ ⑵ $k=10$ 또는 $k=15$ ⑶ $-17<k<10$ 또는 $k>15$ ⑷ $k=-17$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/137-270.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항 15 만 바꾸면 세 극값이 같은 폭으로 평행이동하므로 답의 숫자만 바뀌고 골조는 유지됨. 제약: f'=12x(x-2)(x+1) 같은 유리수 인수분해를 유지해야 하고, 두 극솟값이 서로 달라야(홀수차항 -4x^3 이 그 역할) 「두 실근」이 두 구간으로 갈라지는 이 문항의 핵심이 살아난다."
    creative: "(1) 두 극솟값이 같아지도록 대칭형 사차(x^4+ax^2+b)로 바꾸면 경우가 0·2·4 로 줄어 ★2 (2) 「실근이 3개」인 k 를 모두 더하라고 물으면 값이 두 개라 합산 단계가 붙어 ★3 (3) 사차를 |f(x)|=k 로 바꾸면 절댓값 대칭 분기가 더해져 ★4."
```

```yaml
- id: GN-CALC1-137-271
  page: 137
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴⑵ 곡선 $y=x^3-10x-4$ 와 직선 $y=2x+a$ 가 서로 다른 세 점에서 만날 때의 $a$ 의 범위, 접할 때의 $a$ 의 값.
  category: "교점 조건 → 방정식 → a 분리 → 극값과의 대소·접함(중근)"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「곡선과 직선이 세 점에서 만난다 · 접한다」는 기하 조건을 방정식 x^3-12x-4=a 의 실근 개수·중근 조건으로 옮겨 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곡선과 직선의 교점의 개수 조건에서 상수 범위"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 식을 같게 놓고 정리하면 x^3-12x-4=a 가 되어 앞 예제와 같은 수평선 문제로 환원된다. 극댓값 12·극솟값 -20 과의 대소로 ⑴, 경계값으로 ⑵.
    「접한다 ⇔ 중근 ⇔ y=a 가 극값 높이와 일치」라는 경계 처리가 함정(T-경계)이고, 기하 조건을 방정식으로 옮기는 첫 단계만 통찰로 카운트했다.
    확인체크 출발 ★2 · 통찰 1 · M_total 7(<8) → 조정 없이 ★2.
  tier: star_2
  mechanism_primary: "x^3-10x-4=2x+a → a=x^3-12x-4 → 극댓값 12 · 극솟값 -20 → 세 점이면 -20<a<12 · 접하면 경계값"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $-20<a<12$ ⑵ $a=-20$ 또는 $a=12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/137-271.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 기울기 2 와 곡선의 일차항 -10 을 바꿀 수 있음. 제약: 이항한 뒤의 일차항 계수가 음수여야 극값이 생기고, f'=3x^2-(기울기 차) 가 유리수 근을 갖도록 그 차를 3의 배수인 제곱수 관련 값(12, 27, 48)으로 고른다. 상수항은 답의 크기만 바꾼다."
    creative: "(1) 직선을 점 (0, a) 대신 정점을 지나는 기울기 m 직선으로 바꾸면 분리가 안 되어 접선 조건을 직접 써야 하므로 ★4 (2) 「한 점에서만 만난다」로 물으면 여집합 판단이 들어가 ★3 (3) 교점의 x좌표가 모두 정수가 되는 a 를 묻기(★3 · I-VF 추가)."
```

```yaml
- id: GN-CALC1-138-e28
  page: 138
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴⑵ 방정식 $x^3+3x^2-9x+k=0$ 이 서로 다른 세 실근 / 한 실근과 두 허근을 갖도록 하는 실수 $k$ 의 범위.
  category: "극값을 k 의 식으로 → 극댓값×극솟값의 부호 조건 → k 부등식"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「서로 다른 세 실근」·「한 실근과 두 허근」을 각각 (극댓값)×(극솟값)<0, >0 이라는 계산 가능한 동치 조건으로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼차방정식의 근의 판별(극댓값·극솟값의 곱)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 예제와 달리 극값 f(-3)=27+k, f(1)=k-5 에 k 가 그대로 남으므로 곱의 부호 조건을 k 에 대한 부등식으로 푸는 갈래를 쓴다.
    허근 조건을 「극값의 곱>0」으로 옮기는 동치 변환이 이 유형의 학습 목표라 I-EQV d1 하나.
    곱이 0 이 되는 경계(중근)를 어느 쪽에도 넣지 않는 처리(T-경계)와 부등식 방향(T-부호)이 함정이다.
    필수 예제 출발 ★2 · 통찰 1 · M_total 7(<8) → 조정 없이 ★2.
  tier: star_2
  mechanism_primary: "f'=3(x+3)(x-1) → 극댓값 27+k · 극솟값 k-5 → 곱<0 이면 세 실근 · 곱>0 이면 한 실근과 두 허근"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $-27<k<5$ ⑵ $k<-27$ 또는 $k>5$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/138-e28.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차·일차항 계수를 바꿔 극점을 옮길 수 있음. 제약: f'=0 이 서로 다른 두 유리수 근을 가져야 극값이 두 개 생기고, 두 극값이 모두 k 의 일차식이라 곱이 k 에 대한 이차부등식이 된다 — 그 이차부등식이 유리수 해를 갖도록 계수를 고른다."
    creative: "(1) k 를 상수항이 아니라 이차항 계수에 넣으면 극점 자체가 k 에 의존해 ★4 (2) 「중근을 갖는다」로 바꾸면 곱=0 한 줄이라 ★2 (3) 세 실근이 모두 양수라는 조건을 더하면 f(0) 부호가 붙어 I-CON 추가 ★3."
```

```yaml
- id: GN-CALC1-138-272
  page: 138
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴⑵ 방정식 $2x^3-3x^2+a=0$ 이 서로 다른 세 실근 / 한 실근과 두 허근을 갖도록 하는 실수 $a$ 의 범위.
  category: "극댓값 a · 극솟값 a-1 → 곱의 부호 → a 범위"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "근의 개수·허근 조건을 극댓값과 극솟값의 곱의 부호로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼차방정식의 근의 판별(극댓값·극솟값의 곱)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=6x(x-1) 에서 극댓값 f(0)=a, 극솟값 f(1)=a-1 이므로 a(a-1)<0 과 a(a-1)>0 두 줄로 끝난다.
    예제와 같은 골조의 연습이고 계산이 가벼워 통찰은 동치 변환 하나만 카운트했다.
    확인체크 출발 ★2 · 통찰 1 · M_total 7(<8) → 조정 없이 ★2.
  tier: star_2
  mechanism_primary: "극댓값 a · 극솟값 a-1 → a(a-1)<0 이면 세 실근 · a(a-1)>0 이면 한 실근과 두 허근"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $0<a<1$ ⑵ $a<0$ 또는 $a>1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/138-272.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최고차·이차항 계수를 바꾸면 두 극값의 차가 달라져 답의 구간 폭이 바뀜. 제약: 두 극값이 a 의 일차식이어야 곱이 이차부등식이 되고, 극값의 차(여기서는 1)가 유리수로 떨어지도록 계수를 잡는다."
    creative: "(1) 답을 「정수 a 의 개수」로 바꾸면 구간 폭을 넓혀야 의미가 생겨 ★3 (2) 두 허근의 곱·합을 추가로 묻기(근과 계수 관계 결합 · I-XU ★4) (3) a 의 부호에 따라 그래프 개형이 어떻게 변하는지 서술하게 하면 ★3."
```

```yaml
- id: GN-CALC1-138-273
  page: 138
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    방정식 $16x^3-12x^2-24x-k=0$ 이 중근과 다른 한 실근을 갖도록 하는 모든 실수 $k$ 의 값의 합.
  category: "k 분리 → 중근 ⇔ y=k 가 극값 높이 → 두 값을 모두 찾아 합"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「중근과 다른 한 실근」을 「수평선 y=k 가 극댓값 또는 극솟값의 높이와 일치」라는 경계 조건으로 옮김"
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "조건을 만족시키는 k 가 극댓값·극솟값 두 개 모두이므로 한쪽만 쓰면 안 되고 둘을 모두 구해 더해야 함"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "중근 조건(극값이 0)에서 상수의 값·합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    k 를 분리해 f(x)=16x^3-12x^2-24x 로 두면 f'=24(2x+1)(x-1) 에서 극댓값 7, 극솟값 -20 이 나오고, 중근 조건은 y=k 가 이 두 높이 중 하나에 놓일 때다.
    「모든 k 의 값의 합」이라는 발문이 두 경우를 모두 요구하는 장치이며 한 값만 답하면 틀린다.
    확인체크 출발 ★2 · 통찰 2 → +1 → ★3.
  tier: star_3
  mechanism_primary: "k=16x^3-12x^2-24x 분리 → 극댓값 7 · 극솟값 -20 → 중근 조건 k=7 또는 k=-20 → 합 -13"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-13$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/138-273.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 16, -12, -24 는 극점이 x=-1/2, 1 로 떨어지게 맞춘 값이다. 제약: f'=0 이 유리수 근을 갖도록 계수를 고르고, 두 극값이 서로 달라야 k 가 두 개 나와 「합」 발문이 성립한다. 극값의 합이 정수가 되게 상수항을 조절하면 답이 깔끔해진다."
    creative: "(1) 「모든 k 의 곱」으로 바꾸면 부호 판단이 하나 더 붙어 ★3 유지 (2) 「중근이 양수」 조건을 더하면 두 후보 중 하나가 기각되어 I-VF 추가 ★4 (3) 사차로 올리면 중근 조건이 극소 두 개·극대 하나로 세 값이 되어 ★4."
```

```yaml
- id: GN-CALC1-139-e29
  page: 139
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴⑵ 방정식 $x^3-\dfrac{3}{2}x^2-6x-k=0$ 이 서로 다른 두 양의 실근과 한 음의 실근 / 한 양의 실근과 두 허근을 갖도록 하는 실수 $k$ 의 범위.
  category: "k 분리 → 극값과 f(0) 의 높이 비교 → 근의 부호 배치를 k 범위로"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "k 를 분리해 고정 곡선과 수평선 y=k 의 교점 문제로 바꿔 근의 위치를 그림에서 읽는 갈래를 선택"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「두 양의 실근과 한 음의 실근」을 「y=k 가 극솟값 -10 과 f(0)=0 사이」라는 높이 조건으로 변환 — 근의 부호가 y축 좌우 어디서 만나느냐로 결정됨"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "삼차방정식의 근의 분리(근의 부호 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f(x)=x^3-(3/2)x^2-6x 의 극댓값 7/2(x=-1), 극솟값 -10(x=2), 그리고 f(0)=0 이 판단의 세 기준선이다.
    근의 개수만이 아니라 **부호**까지 묻기 때문에 f(0) 의 높이가 새 기준으로 추가되는 것이 이 유형의 핵심이고, 여기서 학생 판단이 갈린다.
    ⑵ 는 수평선이 극댓값보다 위에 있어야 하므로 k>7/2 이다.
    필수 예제 출발 ★2 · 통찰 2 → +1 → ★3.
  tier: star_3
  mechanism_primary: "k=x^3-(3/2)x^2-6x 분리 → 극댓값 7/2 · 극솟값 -10 · f(0)=0 → y=k 위치로 근의 개수와 부호 동시 결정"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $-10<k<0$ ⑵ $k>\dfrac{7}{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/139-e29.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차·일차항 계수(-3/2, -6)를 바꿔 극점과 극값을 옮길 수 있음. 제약: 상수항이 0 이라 f(0)=0 이 기준선이 되는 구조를 유지해야 하고, f'=0 이 유리수 근을 가져야 한다. 상수항을 0 이 아닌 값으로 두면 기준선이 f(0)≠0 으로 옮겨가 답의 형태가 달라진다."
    creative: "(1) 부호 조건을 「모두 1보다 큰 실근」으로 바꾸면 기준선이 f(1) 로 옮겨가 같은 ★3 (2) 「두 근의 곱이 양수」처럼 근과 계수 관계를 섞으면 I-XU ★4 (3) 조건을 만족시키는 정수 k 의 개수로 바꾸면 경계 제외 판단이 붙어 ★3."
```

```yaml
- id: GN-CALC1-139-274
  page: 139
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 방정식 $x^3-3x^2-9x+k=0$ 이 중근과 다른 한 음의 실근 / 두 양과 한 음의 실근 / 두 음과 한 양의 실근 / 한 양의 실근과 두 허근을 갖도록 하는 $k$ 의 값 또는 범위.
  category: "극댓값 5+k · 극솟값 k-27 · f(0)=k 의 부호 조합 → 네 경우 분기"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "근의 개수 조건(극값의 부호)과 근의 부호 조건(f(0) 의 부호)을 k 에 대한 하나의 부등식 묶음으로 결합"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑴ 의 「중근과 다른 한 음의 실근」을 「극솟값=0 이면서 그 중근이 양수」라는 경계 조건으로 변환"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "삼차방정식의 근의 분리(근의 부호 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f(x)=x^3-3x^2-9x+k 는 극댓값 f(-1)=5+k, 극솟값 f(3)=k-27, 그리고 f(0)=k 세 값이 모두 k 의 일차식이라 네 경우가 k 의 부등식 조합으로 한 번에 정리된다.
    ⑵⑶ 의 차이는 오직 f(0) 의 부호이고, ⑷ 는 극댓값이 음수여야 한다 — 어느 기준선을 쓰는지 고르는 것이 판단의 전부다.
    네 소문항을 도는 단계 수가 많아 Mₛ=3.
    확인체크 출발 ★2 · 통찰 2 → +1 → ★3.
  tier: star_3
  mechanism_primary: "극댓값 5+k · 극솟값 k-27 · f(0)=k → 세 값의 부호 조합으로 근의 개수와 부호 배치를 동시에 결정"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $k=27$ ⑵ $0<k<27$ ⑶ $-5<k<0$ ⑷ $k<-5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/139-274.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차·일차항 계수(-3, -9)를 바꿔 극점 -1, 3 을 옮길 수 있음. 제약: k 가 상수항으로만 들어가야 극값과 f(0) 이 모두 k 의 일차식이 되어 네 경우가 부등식으로 깔끔히 갈린다. f'=0 의 두 근은 부호가 서로 달라야(하나는 음, 하나는 양) ⑵⑶ 이 모두 존재한다."
    creative: "(1) 기준선을 f(0) 대신 f(1) 로 바꿔 「1보다 큰 근의 개수」를 묻기(같은 골조 ★3) (2) 네 경우를 보기 ㄱㄴㄷ 참·거짓으로 묶으면 비교 판단이 더해져 ★4 (3) 사차로 올려 근의 부호 배치를 물으면 극소 두 개로 경우가 늘어 ★4."
```

```yaml
- id: GN-CALC1-139-275
  page: 139
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=2x^3-5x^2-3x$, $g(x)=x^3-3x^2+x-a$ 에 대하여 $f(x)=g(x)$ 가 두 양의 실근과 한 음의 실근을 갖도록 하는 정수 $a$ 의 개수.
  category: "이항 정리 → 극값과 h(0) 의 부호 조건 → a 범위 → 정수 개수"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "근의 개수(극댓값>0, 극솟값<0)와 근의 부호(h(0)>0) 조건을 a 에 대한 하나의 연립 부등식으로 묶음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "근의 부호 조건을 만족시키는 정수 상수의 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 함수를 이항하면 h(x)=x^3-2x^2-4x+a 로 정리되고, h'=(3x+2)(x-2) 에서 극댓값과 극솟값, 그리고 h(0)=a 가 판단 기준이 된다.
    세 부등식을 모두 만족시키는 a 의 구간을 잡은 뒤 **경계를 제외하고** 정수를 세는 것이 마지막 함정(T-경계)이다.
    확인체크 출발 ★2 · 통찰 1 · M_total 9(≥8) → +1 → ★3.
  tier: star_3
  mechanism_primary: "f-g 이항 → h(x)=x^3-2x^2-4x+a → 극댓값>0 · 극솟값<0 · h(0)>0 연립 → a 구간 → 정수 개수"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/139-275.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 함수의 계수를 바꿔 차 h 의 일차·이차항을 조절할 수 있음. 제약: a 는 상수항에만 남아야 h(0)=a 기준선이 생기고, 정수 개수가 답이므로 a 의 구간 폭이 정수 몇 개를 포함할 만큼(여기서는 0<a<8) 확보돼야 한다. f'=0 의 두 근은 부호가 달라야 한다."
    creative: "(1) 「정수 a 의 최댓값」으로 바꾸면 경계 판단만 남아 ★2~3 (2) 근의 부호 조건을 「모든 근이 -1 보다 크다」로 바꾸면 기준선이 h(-1) 로 옮겨 ★3 (3) 두 함수의 교점의 x좌표가 모두 정수가 되게 하는 a 를 물으면 I-VF 가 붙어 ★4."
```

```yaml
- id: GN-CALC1-140-e30
  page: 140
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 모든 실수 $x$ 에서 $x^4-32x+a\ge 0$ 이 성립하는 $a$ 의 범위 ⑵ $f(x)=3x^4-6x^3+5x^2+a$, $g(x)=2x^3-x^2+10$ 에 대하여 $f(x)\ge g(x)$ 가 항상 성립하는 $a$ 의 범위.
  category: "(좌변−우변)의 최솟값 ≥ 0 → 미분 → 최소점 대입 → a 부등식"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모든 실수에서 성립하는 부등식과 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ h'=4(x^3-8) 에서 최소점 x=2, ⑵ 는 이항해 3x^4-8x^3+6x^2+a-10 을 만들고 h'=12x(x-1)^2 에서 최소점 x=0.
    「모든 실수에서 부등식 ⇔ 최솟값≥0」은 이 단원이 직접 제시하는 KEY 절차라 통찰 라벨을 붙이지 않았다.
    ⑵ 의 h'=12x(x-1)^2 은 x=1 에서 부호가 바뀌지 않아 극값이 아니라는 점이 함정(T-부호)이고, 등호 포함 여부가 또 하나(T-경계)다.
    필수 예제 출발 ★2 · 통찰 0 · M_total 8 → 조정 없이 ★2.
  tier: star_2
  mechanism_primary: "h=(좌변)-(우변) → h'=0 의 근 중 증감이 바뀌는 점에서 최솟값 → 최솟값 ≥ 0 을 a 부등식으로"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $a\ge 48$ ⑵ $a\ge 10$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/140-e30.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 은 -32x 의 계수를 4k^3 꼴로 두면 최소점이 x=k 로 정수가 됨(-4, -32, -108). ⑵ 는 차 h' 이 x(x-1)^2 처럼 중근을 갖도록 계수를 맞춘 것이라 그 구조를 유지해야 함정이 살아난다. 제약: 최고차 계수가 양수여야 최솟값이 존재한다."
    creative: "(1) 부등식 방향을 뒤집고 최고차 계수를 음수로 두면 최댓값 조건이 되어 ★2 유지 (2) 「모든 실수」 대신 「x≥0」 으로 제한하면 끝점 비교가 붙어 ★3 (3) a 를 양변에 모두 넣어 a 에 대한 이차부등식이 되게 하면 ★3~4."
```

```yaml
- id: GN-CALC1-140-276
  page: 140
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    모든 실수 $x$ 에 대하여 $x^4-2x^2+a\ge 0$ 이 성립하도록 하는 실수 $a$ 의 범위.
  category: "사차함수의 최솟값 → 최솟값 ≥ 0"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모든 실수에서 성립하는 부등식과 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    h'=4x(x-1)(x+1) 에서 극소가 x=±1 두 곳이고 값이 같으므로 최솟값은 a-1, 조건은 a≥1.
    짝수차항만 있는 대칭형이라 두 극솟값이 같아 비교할 필요조차 없는 가장 가벼운 연습이다. 통찰 라벨 없음.
    확인체크 출발 ★2 · 통찰 0 · M_total 6(>5) → 조정 없이 ★2.
  tier: star_2
  mechanism_primary: "h'=4x(x^2-1) → 최솟값 h(±1)=a-1 → a-1≥0"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a\ge 1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/140-276.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x^4-2bx^2+a 꼴에서 b 를 바꾸면 최솟값이 a-b^2 이 되어 답이 a≥b^2. 제약: b>0 이어야 극소가 두 개 생기고, b≤0 이면 x=0 이 최소점이라 답이 a≥0 으로 바뀐다."
    creative: "(1) 홀수차항을 넣어 두 극솟값을 다르게 만들면 어느 쪽이 더 낮은지 비교가 생겨 ★2~3 (2) 「부등식이 성립하지 않는 x 가 존재한다」로 뒤집으면 여집합 판단 ★3 (3) 등호가 성립하는 x 의 개수까지 물으면 경계 분석이 붙어 ★3."
```

```yaml
- id: GN-CALC1-140-277
  page: 140
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=x^4-\dfrac{1}{3}x^3+k$ 의 그래프가 $g(x)=5x^3-6x^2$ 의 그래프보다 항상 위쪽에 있도록 하는 실수 $k$ 의 범위.
  category: "「항상 위쪽」 → f-g>0 → 두 극솟값 중 작은 쪽 > 0"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 그래프의 상하 관계와 부등식(항상 위쪽)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    h=f-g=x^4-(16/3)x^3+6x^2+k 이고 h'=4x(x-1)(x-3) 에서 극소가 x=0, 3 두 곳(x=1 은 극대)이다. 두 극솟값 k 와 k-9 중 **작은 쪽**이 양수여야 하므로 k>9.
    「위쪽에 있다」가 등호 없는 부등식이라는 점(T-경계)과 극소가 둘이라 낮은 쪽을 골라야 한다는 점(T-범위)이 함정이지만 도구는 앞 예제와 같아 통찰 라벨은 없다.
    확인체크 출발 ★2 · 통찰 0 · M_total 8 → 조정 없이 ★2.
  tier: star_2
  mechanism_primary: "h=f-g → h'=4x(x-1)(x-3) → 극솟값 k 와 k-9 중 작은 k-9 > 0"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$k>9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/140-277.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 함수의 삼차·이차항 계수를 바꿔 h' 의 세 근을 옮길 수 있음. 제약: h' 이 서로 다른 세 유리수 근을 가져야 극소가 두 개 생기고, 두 극솟값이 서로 달라야 「작은 쪽 고르기」 함정이 유지된다. h 의 최고차 계수는 양수여야 한다."
    creative: "(1) 두 극솟값이 같아지게 계수를 맞추면 비교 단계가 사라져 ★2 이하 (2) 「두 그래프가 만나지 않는다」로 바꾸면 같은 조건이지만 기하 언어 전환이 생겨 I-RT ★3 (3) 「항상 위쪽」을 구간 [0, 3] 으로 제한하면 끝점 비교가 붙어 ★3."
```

```yaml
- id: GN-CALC1-141-e31
  page: 141
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ $x\ge 0$ 에서 $x^3-3x^2+a\ge 0$ 이 성립하는 $a$ 의 범위 ⑵ $f(x)=x^3-x^2-x+1$, $g(x)=-x^2+2x+a$ 에 대하여 구간 $[0,\,2]$ 에서 $f(x)\ge g(x)$ 가 성립하는 $a$ 의 범위.
  category: "구간 제한 → 그 구간에서의 최솟값(극점·끝점 후보) ≥ 0 → a 부등식"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구간이 제한된 부등식을 「그 구간에서의 최솟값 ≥ 0」으로 바꾸되, 최소 후보를 구간 안의 극점과 양 끝점 중에서 골라야 한다는 조건으로 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "주어진 구간에서 성립하는 부등식과 최솟값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ h'=3x(x-2) 에서 x≥0 인 범위의 최소점은 x=2 이고 h(2)=a-4, ⑵ 는 이항해 x^3-3x+1-a 를 만들고 [0, 2] 안의 극소 x=1 에서 -1-a.
    앞 예제(모든 실수)와 달리 **구간 밖 극점은 버리고 끝점도 후보에 넣어야** 하므로 최솟값을 고르는 판단이 하나 추가된다 — 여기가 이 유형의 학습 목표라 I-EQV d1.
    구간 경계 포함 여부(T-경계)와 극점이 구간 밖일 때 단조성으로 최소를 잡는 처리(T-범위)가 함정이다.
    필수 예제 출발 ★2 · 통찰 1 · M_total 8(≥8) → +1 → ★3.
  tier: star_3
  mechanism_primary: "h=(좌변)-(우변) → 구간 안 극점과 끝점을 최소 후보로 비교 → 최솟값 ≥ 0 을 a 부등식으로"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $a\ge 4$ ⑵ $a\le -1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/141-e31.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간의 끝(0, 2)과 삼차식의 일차·이차항 계수를 바꿀 수 있음. 제약: 극점이 구간 안에 있는지 밖에 있는지가 답의 형태를 바꾸므로 의도한 쪽으로 계수를 맞춘다. 극점을 구간 밖으로 밀면 답이 끝점 값으로 결정돼 완전히 다른 문항이 된다."
    creative: "(1) 극점을 일부러 구간 밖에 두어 끝점이 최소가 되게 하면 같은 ★3 이지만 오답률이 오름 (2) 구간을 열린구간으로 바꾸면 등호 처리 검증이 붙어 I-VF 추가 ★3~4 (3) 「구간에서 부등식을 만족시키는 정수 a 의 개수」로 바꾸면 ★3."
```

```yaml
- id: GN-CALC1-141-278
  page: 141
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $x>1$ 일 때 부등식 $x^3+9x+a>6x^2+6$ 이 성립하도록 하는 실수 $a$ 의 범위.
  category: "이항 → x>1 에서의 최솟값(극소 x=3) > 0 → a 범위"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구간 x>1 에서의 부등식을 그 구간 안 극솟값(x=3)에 대한 조건으로 변환 — 구간 밖 극점 x=1 은 후보에서 제외"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "주어진 구간에서 성립하는 부등식과 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    h=x^3-6x^2+9x-6+a 이고 h'=3(x-1)(x-3) 이므로 x>1 에서 최소점은 x=3, h(3)=a-6>0 → a>6.
    극점이 둘인데 하나(x=1)가 구간의 경계에 놓여 후보에서 빠지는 것이 함정(T-범위)이고, 부등호가 등호 없는 꼴이라 경계 처리도 함께 본다(T-경계).
    예제와 같은 골조의 연습이고 계산이 가벼워 M_total 7 → 확인체크 출발 ★2 · 통찰 1 · M_total<8 → 조정 없이 ★2.
  tier: star_2
  mechanism_primary: "h=x^3-6x^2+9x-6+a → h'=3(x-1)(x-3) → x>1 의 최솟값 h(3)=a-6 > 0"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a>6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/141-278.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간의 기준점 1 과 삼차식 계수를 바꿀 수 있음. 제약: h'=0 의 두 근 중 하나가 구간의 경계와 일치하도록 맞춘 것이 이 문항의 설계이므로, 계수를 바꿀 때도 h' 이 유리수 근을 갖고 극소가 구간 안에 남아야 한다."
    creative: "(1) 기준점을 극소 오른쪽(x>4)으로 옮기면 최소가 끝점 극한이 되어 등호 판단이 생기고 ★3 (2) 부등호를 ≥ 로 바꿔 등호 성립 여부를 묻기(★2) (3) a 의 최솟값을 묻되 구간을 열린구간으로 주면 I-VF 추가 ★3."
```

```yaml
- id: GN-CALC1-141-279
  page: 141
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=5x^3-10x^2+k$, $g(x)=5x^2+2$ 에 대하여 $0<x<3$ 에서 $f(x)\ge g(x)$ 가 성립하도록 하는 $k$ 의 최솟값.
  category: "이항 → 구간 안 극소(x=2) → 최솟값 ≥ 0 → k 최솟값"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "열린구간 (0, 3) 의 부등식을 구간 안 극솟값 조건으로 변환 — 최소점 x=2 가 구간 내부라 끝점은 볼 필요가 없음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "주어진 구간에서 성립하는 부등식과 상수의 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    h=5x^3-15x^2+k-2 이고 h'=15x(x-2) 이므로 (0, 3) 안의 최소점은 x=2, h(2)=k-22≥0 → k 의 최솟값 22.
    구간이 열려 있어도 최소점이 내부에 있으면 등호를 그대로 쓸 수 있다는 점이 다음 문항(280)과의 대비다.
    확인체크 출발 ★2 · 통찰 1 · M_total 7(<8) → 조정 없이 ★2.
  tier: star_2
  mechanism_primary: "h=f-g=5x^3-15x^2+k-2 → h'=15x(x-2) → 구간 내부 최솟값 h(2)=k-22 ≥ 0 → k 최솟값 22"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$22$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/141-279.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 함수의 계수와 구간 (0, 3) 을 바꿀 수 있음. 제약: h'=0 의 양수 근이 구간 안에 있어야 이 골조가 유지되고, 그 근에서의 값이 정수로 떨어져야 k 의 최솟값이 깔끔하다. 구간을 (0, 1) 처럼 좁히면 최소가 끝점 극한이 되어 답의 성격이 바뀐다."
    creative: "(1) 구간을 좁혀 최소점을 밖으로 밀면 끝점 극한 판단이 필요해져 ★3 (2) 「k 의 최솟값」 대신 「부등식이 성립하지 않는 k 의 최댓값」으로 뒤집으면 경계 검증이 붙어 ★3 (3) g 를 직선으로 바꿔 접하는 k 를 묻기(★3)."
```

```yaml
- id: GN-CALC1-141-280
  page: 141
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $-2<x<2$ 일 때 부등식 $x^3-12x+a>0$ 이 성립하도록 하는 실수 $a$ 의 최솟값.
  category: "구간 안에 극점 없음 → 단조감소 → 끝점 극한값으로 경계 판단"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "h'=3(x-2)(x+2) 가 구간 전체에서 음수라 h 가 감소함을 보고, 부등식 조건을 「x=2 에서의 값 ≥ 0」이라는 끝점 극한 조건으로 변환"
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구간이 열려 있어 x=2 가 실제 값으로 잡히지 않으므로, 등호를 허용해도 되는지(a>16 이 아니라 a≥16 인지)를 마지막에 다시 따져야 함"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "열린구간에서 성립하는 부등식(경계 극한값)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    극점 x=±2 가 하필 구간의 양 끝과 일치해 (-2, 2) 안에는 극값이 없고 h 는 계속 감소한다. 그래서 최솟값이 존재하지 않고 x→2⁻ 의 극한 a-16 이 하한이 된다.
    열린구간이라 a-16=0 일 때도 구간 안에서는 h>0 이 유지되므로 등호가 허용되어 최솟값이 16 이다 — 이 마지막 재검증을 빠뜨리면 답이 달라진다(I-VF).
    확인체크 출발 ★2 · 통찰 2 → +1 → ★3.
  tier: star_3
  mechanism_primary: "h'=3(x^2-4)<0 on (-2,2) → h 감소 → 하한은 x→2 의 값 a-16 → 열린구간이라 a-16≥0 → a 최솟값 16"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/141-280.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 -12 와 구간 (-2, 2) 는 극점이 구간 끝과 정확히 일치하도록 맞춘 값이다(x^3-3b^2x 와 구간 (-b, b)). 제약: 이 일치를 깨면 구간 안에 극소가 생겨 평범한 문항이 되므로, 계수를 바꿀 때 -3b^2 와 구간 ±b 를 함께 바꾼다."
    creative: "(1) 구간을 닫힌구간 [-2, 2] 로 바꾸면 최솟값이 실제로 잡혀 등호 판단이 사라지고 ★2 (2) 구간을 (-2, 3) 으로 넓히면 극소가 들어와 최소 후보가 바뀌어 ★3 (3) 부등호를 ≥ 로 바꾸면 등호 성립 지점이 구간 밖이라는 논의가 더 정교해져 ★4."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC1-142-281
  page: 142
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=x^4+4x^3-4x^2+3$, $g(x)=-x^4+4x^2-2$ 에 대하여 방정식 $f(x)=2g(x)$ 의 서로 다른 실근의 개수.
  category: "한 변으로 정리 → 사차함수 극값 → x축 교점 개수"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 함수로 만든 방정식의 실근의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2g 를 좌변으로 옮기면 3x^4+4x^3-12x^2+7=0 이 되고 p'=12x(x+2)(x-1) 에서 극소 -25 · 극대 7 · 극소 2 가 나온다. 음수인 극소가 하나뿐이라 교점은 2개.
    이항 정리에서 계수를 놓치는 계산 부담(Mₖ=2)만 있을 뿐 도구는 단원 KEY 절차 그대로라 통찰 라벨 없음.
    STEP 1 출발 ★2 · 통찰 0 · M_total 6 → 조정 없이 ★2.
  tier: star_2
  mechanism_primary: "f-2g 정리 → 3x^4+4x^3-12x^2+7 → 극값 -25 · 7 · 2 → 음의 극값이 하나뿐 → 교점 2개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/142-281.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 함수의 상수항과 2g 의 계수 2 를 바꿔 극값의 높이를 조절할 수 있음. 제약: 정리한 사차의 도함수가 유리수 근 셋을 가져야 하고, 두 극솟값의 부호 조합이 답(0·2·3·4)을 정하므로 원하는 개수에 맞춰 상수항을 고른다."
    creative: "(1) 상수항을 k 로 두고 실근이 4개가 되는 k 범위를 묻기(I-SC 추가 ★3) (2) 「두 그래프 y=f(x), y=2g(x) 의 교점 개수」로 바꾸면 기하 언어 전환 ★2 (3) f(x)=2g(x) 의 실근 중 양수인 것의 개수로 좁히면 I-CON 추가 ★3."
```

```yaml
- id: GN-CALC1-142-282
  page: 142
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 곡선 $y=x^3-2x^2-6x+2$, $y=x^2+3x+a$ 가 서로 다른 세 점에서 만나도록 하는 정수 $a$ 의 최댓값.
  category: "교점 조건 → a 분리 → 극값 사이 범위 → 정수 최댓값"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 곡선의 교점 조건을 a 를 분리한 a=x^3-3x^2-9x+2 로 바꿔 고정 곡선과 수평선의 문제로 처리하는 갈래 선택"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 곡선의 교점의 개수 조건에서 정수 상수의 최댓값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 식을 같게 놓고 정리하면 a=x^3-3x^2-9x+2 이고 극댓값 7(x=-1), 극솟값 -25(x=3) 사이가 세 점 조건이다.
    a<7 이므로 정수 최댓값은 경계 7 을 제외한 6 — 마지막 경계 제외가 유일한 함정(T-경계)이다.
    STEP 1 출발 ★2 · 통찰 1 · M_total 7(<8) → 조정 없이 ★2.
  tier: star_2
  mechanism_primary: "두 식 이항 → a=x^3-3x^2-9x+2 → 극댓값 7 · 극솟값 -25 → -25<a<7 → 정수 최댓값 6"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/142-282.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 곡선의 일차·이차항 계수를 바꿔 극값 위치를 옮길 수 있음. 제약: 이항한 삼차의 도함수가 유리수 근 둘을 가져야 하고, 극댓값이 정수면 「경계 제외」 함정이 살아난다(극댓값이 정수가 아니면 최댓값 계산이 평범해짐)."
    creative: "(1) 「정수 a 의 개수」로 바꾸면 양쪽 경계를 모두 다뤄야 해 ★3 (2) 두 번째 곡선을 직선으로 바꾸면 접선 조건과 연결되어 ★3 (3) 교점의 x좌표가 모두 양수라는 조건을 더하면 f(0) 기준선이 붙어 I-CON ★3."
```

```yaml
- id: GN-CALC1-142-283
  page: 142
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    방정식 $x^3-27x-a=0$ 이 한 개의 음의 실근과 서로 다른 두 개의 양의 실근을 갖도록 하는 정수 $a$ 의 개수.
  category: "a 분리 → 극값과 f(0)=0 사이 → a 범위 → 정수 개수"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a 를 분리해 y=x^3-27x 와 수평선 y=a 의 교점 문제로 바꿈"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "근의 개수 조건(극솟값 -54 아래로 내려가지 않음)과 부호 조건(f(0)=0 보다 아래)을 -54<a<0 하나의 범위로 결합"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "근의 부호 조건을 만족시키는 정수 상수의 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f(x)=x^3-27x 는 극댓값 54(x=-3), 극솟값 -54(x=3), f(0)=0 이다. 음근 하나·양근 둘이려면 수평선이 원점 높이 아래이면서 극솟값보다는 위여야 한다.
    -54<a<0 의 정수는 -53 부터 -1 까지 53개이고, 양 끝 경계를 모두 제외하는 처리가 마지막 함정이다.
    STEP 1 출발 ★2 · 통찰 2 → +1 → ★3.
  tier: star_3
  mechanism_primary: "a=x^3-27x 분리 → 극솟값 -54 · f(0)=0 → -54<a<0 → 정수 53개"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$53$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/142-283.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x^3-3b^2x 꼴에서 b 를 바꾸면 극값이 ∓2b^3 이 되어 정수 개수가 2b^3-1 로 바뀜(b=3 → 53). 제약: 상수항이 0 이라 f(0)=0 이 기준선이 되는 구조를 유지해야 하고, b 는 극값이 정수로 떨어지는 값으로 고른다."
    creative: "(1) 부호 배치를 뒤집어 「두 음근과 한 양근」으로 물으면 0<a<54 가 되어 같은 ★3 (2) 상수항을 0 이 아닌 값으로 옮기면 기준선이 f(0)≠0 이 되어 계산이 한 단계 늘어 ★3 (3) 세 근의 곱·합 조건을 덧붙이면 근과 계수 관계가 섞여 I-XU ★4."
```

```yaml
- id: GN-CALC1-142-284
  page: 142
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    모든 실수 $x$ 에 대하여 $x^4+3x^3+k\ge -x^3+16x$ 가 성립하도록 하는 실수 $k$ 의 최솟값.
  category: "이항 → 사차함수 최솟값 → 최솟값 ≥ 0 → k 최솟값"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모든 실수에서 성립하는 부등식과 상수의 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    h=x^4+4x^3-16x+k 이고 h'=4(x-1)(x+2)^2 이다. x=-2 는 (x+2)^2 때문에 부호가 바뀌지 않아 극값이 아니고, 최소점은 x=1 뿐이라 h(1)=k-11≥0.
    x=-2 를 최소 후보로 착각하면 틀리는 것이 이 문항의 유일한 장치이며(T-부호·T-경계), 도구 자체는 단원 KEY 절차라 통찰 라벨은 붙이지 않았다.
    STEP 1 출발 ★2 · 통찰 0 · M_total 8 → 조정 없이 ★2.
  tier: star_2
  mechanism_primary: "h=x^4+4x^3-16x+k → h'=4(x-1)(x+2)^2 → 증감이 바뀌는 x=1 에서 최솟값 k-11 ≥ 0"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/142-284.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "h' 이 (x-p)(x-q)^2 꼴 중근을 갖도록 삼차·일차항 계수를 맞추는 것이 설계의 핵심이다. 제약: 그 구조를 유지하지 않으면 함정이 사라진다. p 를 바꾸면 최솟값과 k 가 함께 바뀌므로 h(p) 가 정수가 되게 계수를 고른다."
    creative: "(1) h' 의 중근을 없애 극소를 둘로 만들면 「작은 쪽 고르기」 비교가 생겨 ★2~3 (2) 「등호가 성립하는 x 의 값」을 함께 물으면 검증 단계가 붙어 ★3 (3) 구간을 x≥0 으로 제한하면 후보가 바뀌어 ★3."
```

```yaml
- id: GN-CALC1-142-285
  page: 142
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제"
  summary: |
    $f(x)=x^3-x+6$, $g(x)=x^2+a$ 에 대하여 $x\ge 0$ 인 모든 $x$ 에서 $f(x)\ge g(x)$ 가 성립할 때 실수 $a$ 의 최댓값. 5지선다.
  category: "이항 → x≥0 에서의 최솟값(극소 x=1) → a 최댓값"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x≥0 제한 부등식을 「그 구간에서의 최솟값 ≥ 0」으로 바꾸고, 끝점 x=0 과 구간 안 극소 x=1 을 비교해 최소를 확정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "주어진 구간에서 성립하는 부등식과 상수의 최댓값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    h=x^3-x^2-x+6-a 이고 h'=(3x+1)(x-1) 이므로 x≥0 에서 최소점은 x=1, h(1)=5-a≥0 → a≤5 → 최댓값 5(⑤).
    h'=0 의 다른 근 x=-1/3 이 구간 밖이라 버려지는 것과 끝점 h(0)=6-a 가 최소가 아니라는 확인이 함정이다.
    평가원 기출이지만 통찰 1개·M_total 7 로 구간 제한 부등식의 표준형이라 태그 보정은 +0.
    STEP 1 출발 ★2 · 통찰 1 · M_total 7(<8) → 조정 없이 ★2.
  tier: star_2
  mechanism_primary: "h=f-g=x^3-x^2-x+6-a → h'=(3x+1)(x-1) → x≥0 최솟값 h(1)=5-a ≥ 0 → a 최댓값 5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/142-285.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 상수항 6 이 답을 직접 정한다(최댓값 = 상수항 -1). 제약: h'=0 의 양수 근이 구간 안에 있어야 하고, 음수 근은 구간 밖이어야 이 설계가 유지된다. 선택지는 정수로 떨어지게 상수항을 고른다."
    creative: "(1) 구간을 x≥2 로 옮기면 극소가 밖이라 끝점이 최소가 되어 ★3 (2) g 를 g(x)=x^2+ax 로 바꾸면 a 가 최솟값 위치까지 바꿔 ★4 (3) 「부등식이 성립하지 않는 최소의 a」로 뒤집으면 경계 검증이 붙어 ★3."
```

```yaml
- id: GN-CALC1-142-286
  page: 142
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $0<x<1$ 일 때 부등식 $4x^3-2x^2-4x+3>x^2+2x+a$ 가 성립하도록 하는 실수 $a$ 의 범위.
  category: "이항 → 구간에서 단조감소 → 끝점 극한값 → 열린구간 등호 판단"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "부등식을 h(x)=4x^3-3x^2-6x+3-a>0 으로 정리하고 구간 (0, 1) 에서 h'<0 임을 확인해 하한을 x→1 의 값으로 변환"
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구간이 열려 있어 x=1 이 값으로 잡히지 않으므로 a<-2 가 아니라 a≤-2 까지 허용되는지 마지막에 다시 확인"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "열린구간에서 성립하는 부등식(경계 극한값)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    h'=6(2x+1)(x-1) 이 (0, 1) 에서 음수라 h 는 감소하고 최솟값이 없다. 하한은 x→1⁻ 에서의 -2-a 이고, 열린구간이므로 -2-a≥0 즉 a≤-2 까지 성립한다.
    141-280 과 같은 「열린구간이라 등호가 살아나는」 골조이며, 등호를 빼면 답이 a<-2 로 어긋난다.
    STEP 1 출발 ★2 · 통찰 2 → +1 → ★3.
  tier: star_3
  mechanism_primary: "h=4x^3-3x^2-6x+3-a → h'=6(2x+1)(x-1)<0 on (0,1) → 하한은 h(1)=-2-a → 열린구간이라 -2-a≥0 → a≤-2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$a\le -2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/142-286.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정리한 h' 의 두 근이 구간 (0, 1) 의 밖·경계에 놓이도록 계수를 맞춘 것이 설계의 핵심이다. 제약: 구간 안에 극점이 들어오면 평범한 극솟값 문제가 되어 등호 논점이 사라진다. 상수항은 답의 값만 바꾼다."
    creative: "(1) 구간을 닫힌구간으로 바꾸면 등호 논점이 사라져 ★2 (2) 구간을 0<x<2 로 넓히면 x=1 극소가 들어와 최소 후보가 바뀌고 ★3 (3) 「a 의 최댓값」으로 물으면 열린구간에서 최댓값이 존재하는지까지 따져야 해 ★4."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC1-143-287
  page: 143
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    도함수 $y=f'(x)$ 의 그래프(그림)가 $x=a,\,b,\,c$ 에서 $x$축과 만나고 $f(a)=-2$, $f(b)=2$, $f(c)=1$ 일 때, 방정식 $2f(x)-3=0$ 의 서로 다른 실근의 개수.
  category: "도함수 그래프 → 증감표·극값 배치 → 수평선 y=3/2 와의 교점 개수"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "y=f'(x) 의 그래프에서 부호가 바뀌는 지점을 읽어 f 의 증감과 극솟값·극댓값·극솟값 배치(내림-오름-내림-오름)를 원함수 개형으로 옮김"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "주어진 세 극값 -2, 2, 1 과 수평선 높이 3/2 의 대소를 개형에 결합해 네 구간에서 교점 수를 합산"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "도함수 그래프에서 원함수의 방정식의 실근 개수"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    그림에서 f' 은 a 이전 음수, (a, b) 양수, (b, c) 음수, c 이후 양수라 f 는 x=a 극소(-2), x=b 극대(2), x=c 극소(1) 다.
    2f(x)-3=0 은 f(x)=3/2 이고 3/2 이 -2 와 2 사이, 그리고 1 과 2 사이에도 들어가므로 네 구간에서 각각 한 번씩 만나 4개다.
    f 의 식이 전혀 주어지지 않아 추상도가 높고(Mₐ=3) 극값의 대소 비교가 전부인 문항이다.
    STEP 2 출발 ★3 · 통찰 2 → +1 → ★4.
  tier: star_4
  mechanism_primary: "f' 의 부호 → f 의 극소 -2 · 극대 2 · 극소 1 배치 → y=3/2 가 세 극값 사이를 지나며 교점 4개"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$4$'
  answer_source: "답지"
  figure: crop:fig-143-287.png
  latex: latex-bank/gn-calc1/items/143-287.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 극값 -2, 2, 1 과 방정식의 상수 3 만 바꾸면 답이 1·2·3·4 로 움직인다. 제약: 그림은 f' 의 부호 배치만 정하므로 **그림 라벨 a, b, c 와 부호 패턴은 고정**하고 숫자만 바꾼다. 수평선 높이가 극값과 같아지면 중근이 생겨 개수가 줄어드는 경계를 피한다."
    creative: "(1) 상수를 문자로 두고 실근이 3개가 되는 값을 물으면 경계(중근) 판단이 들어가 ★4 (2) |f(x)|=k 로 바꾸면 절댓값 분기가 더해져 ★4~5 (3) f' 그래프를 사차로 바꿔 극값을 네 개로 만들면 배치 경우가 늘어 ★4."
```

```yaml
- id: GN-CALC1-143-288
  page: 143
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=3x^3-x^2-3x$, $g(x)=x^3-4x^2+9x+a$ 에 대하여 $f(x)=g(x)$ 의 서로 다른 **양의** 실근의 개수를 $N(a)$ 라 할 때 $N(a)=2$ 를 만족시키는 정수 $a$ 의 개수.
  category: "이항·상수 분리 → x>0 부분만의 그래프 → y=a 높이별 교점 수 → 정수 개수"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a 를 분리해 a=2x^3+3x^2-12x 로 두고 고정 곡선과 수평선 y=a 의 교점 개수 함수로 바꾸는 갈래 선택"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「양의 실근만」이라는 제한을 곡선의 x>0 부분(h(0)=0 에서 내려가 극솟값 -7 을 지나 다시 오름)으로 좁혀 교점 수를 a 의 함수로 정리"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a=0 과 a=-7 두 경계에서는 양근이 하나뿐이라 후보에서 기각해야 N(a)=2 의 범위가 확정됨"
  insight_count: 3
  depth_score: 1.33
  type_id: null
  type_hint: "근의 개수 함수 N(a) 조건을 만족시키는 정수 a 의 개수"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    이항하면 2x^3+3x^2-12x=a 이고 h'=6(x+2)(x-1) 에서 x>0 부분은 h(0)=0 에서 감소해 극솟값 h(1)=-7 을 찍고 다시 증가한다.
    그래서 양근은 -7<a<0 일 때만 두 개이고, a=-7(중근 하나)과 a=0(양근 하나)은 기각된다. 정수는 -6 부터 -1 까지 6개.
    「양의 실근」 제한 때문에 곡선의 일부만 보는 것과 경계 두 개를 모두 기각하는 것이 판단의 핵심이다.
    STEP 2 출발 ★3 · 통찰 3 → +1 → ★4.
  tier: star_4
  mechanism_primary: "f-g 이항 → a=2x^3+3x^2-12x → x>0 부분의 극솟값 -7 과 h(0)=0 → -7<a<0 → 정수 6개"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/143-288.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 함수의 계수를 바꿔 차 h 의 극솟값 깊이를 조절하면 정수 개수가 바뀐다. 제약: 차의 상수항이 0 이어야 h(0)=0 이 경계가 되는 구조가 유지되고, h' 의 양수 근 하나가 x>0 안에 있어야 한다. 극솟값이 정수로 떨어지게 계수를 고른다."
    creative: "(1) N(a)=1 또는 3 으로 바꾸면 기각해야 할 경계가 달라져 ★4 (2) 「음의 실근」으로 바꾸면 곡선의 왼쪽 가지를 보게 되어 극댓값이 기준이 되고 ★4 (3) N(a) 의 그래프를 그리게 하면 구간별 정의가 필요해 ★5 후보."
```

```yaml
- id: GN-CALC1-143-289
  page: 143
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    자연수 $a$ 와 $f(x)=-x^4-2x^3-x^2$, $g(x)=3x^2+a$ 에 대하여 「모든 실수 $x$ 에서 $f(x)\le 12x+k\le g(x)$ 를 만족시키는 자연수 $k$ 의 개수가 $3$」이 되도록 하는 $a$ 의 값.
  category: "이중 부등식 분리 → 왼쪽은 사차 최댓값 · 오른쪽은 판별식 → k 구간 → 개수 3 에서 a 역산"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "이중 부등식을 f(x)≤12x+k 와 12x+k≤g(x) 두 개의 독립 조건으로 분리하고, 각각을 k 에 대한 하한·상한으로 변환"
    - step: 2
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "왼쪽은 사차식이라 미분해 최댓값을 잡고, 오른쪽은 이차부등식이라 판별식으로 처리 — 두 조건에 서로 다른 도구를 골라 쓰는 갈래 선택"
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「자연수 k 의 개수가 3」이라는 결과 조건에서 k 구간의 오른쪽 끝을 역추적해 a 를 결정"
  insight_count: 3
  depth_score: 2.00
  type_id: null
  type_hint: "이중 부등식을 만족시키는 자연수 k 의 개수 조건"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    왼쪽 조건은 k ≥ (-x^4-2x^3-x^2-12x) 의 최댓값이고 도함수가 -2(x+2)(2x^2-x+3) 이라 최대점은 x=-2 하나로 k≥20.
    오른쪽 조건은 3x^2-12x+(a-k)≥0 이 항상 성립해야 하므로 판별식 조건에서 k ≤ a-12.
    두 도구가 다르다는 점과, 자연수 k 가 20·21·22 세 개가 되려면 a-12=22 여야 한다는 역추적이 이 문항의 난도를 만든다.
    STEP 2 출발 ★3 · 통찰 3 → +1 → ★4(교육청 기출 태그 보정 +0).
  tier: star_4
  mechanism_primary: "이중 부등식 분리 → 왼쪽: 사차 최댓값 20 ≤ k · 오른쪽: 판별식 ≤ 0 에서 k ≤ a-12 → 자연수 k 3개 ⇒ a-12=22"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$34$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/143-289.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "가운데 직선의 기울기 12 와 개수 조건 3 을 바꿀 수 있음. 제약: 왼쪽 사차의 도함수가 하나의 유리수 근과 실근 없는 이차 인수로 쪼개져야 최대점이 하나로 확정되고, 오른쪽 이차의 판별식이 정수로 떨어져야 한다. 개수를 n 으로 바꾸면 a=12+19+n 꼴로 움직인다."
    creative: "(1) 가운데를 직선 대신 이차식으로 바꾸면 양쪽 모두 미분이 필요해 ★5 후보 (2) 「자연수 k 가 존재하지 않는 a」로 뒤집으면 공집합 조건 검증이 붙어 ★4 (3) g 를 사차로 올리면 판별식 갈래가 막혀 두 번 미분해야 하므로 ★5 후보."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC1-143-290
  page: 143
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    최고차항의 계수가 $3$ 인 삼차함수 $f$ 가 ㈎ 모든 $x$ 에서 $f(-x)=-f(x)$ ㈏ $|f(x)|=6$ 의 서로 다른 실근이 $4$ 개를 만족시킬 때 $f(-3)$ 의 값.
  category: "기함수 ⇒ 짝수차항 소거 → |f|=6 의 근을 대칭으로 반씩 분배 → 극댓값=6 역산"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "f(-x)=-f(x) 에서 f(x)=3x^3+px 로 좁히고, 원점 대칭이므로 f(x)=6 과 f(x)=-6 의 실근 개수가 같다는 것을 이용해 4개를 2+2 로 즉시 분배"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「f(x)=6 의 실근이 2개」라는 결과에서 6 이 극댓값과 같아야(중근+단근) 함을 역추적해 p 를 결정"
    - step: 3
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "|f(x)|=6 을 f(x)=6 과 f(x)=-6 두 방정식의 근을 합친 것으로 해석해 두 경우를 모두 세어야 함"
  insight_count: 3
  depth_score: 2.00
  type_id: null
  type_hint: "기함수 조건과 |f(x)|=k 의 실근 개수로 삼차함수 결정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    ㈎ 로 f(x)=3x^3+px 가 되고, p≥0 이면 증가함수라 근이 2개뿐이므로 극값이 있어야 한다. 원점 대칭이라 f=6 과 f=-6 의 근 수가 같아 각각 2개, 즉 극댓값=6 이다.
    f'=9x^2+p 의 근에서 극댓값을 세우면 p=-9 로 결정되고 f(x)=3x^3-9x 에서 f(-3) 을 얻는다.
    [분류 이슈] 통찰 3개에 I-SYM depth 3 이 포함되어 v3.8 상 ★5 후보이나, 정독 자산은 novelty_score 를 0 으로 고정해 §2.14 ★5 게이트를 통과시킬 수 없어 라벨은 실력 UP 출발 ★4 로 두고 기록만 한다.
    실력 UP 출발 ★4 · 통찰 3(SYM 포함) → ★5 후보 · 라벨 ★4.
  tier: star_4
  mechanism_primary: "f(-x)=-f(x) ⇒ f=3x^3+px → 대칭으로 |f|=6 의 4개 근을 2+2 로 분배 → 극댓값=6 에서 p=-9 → f(-3)"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$-54$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/143-290.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최고차 계수 3 과 절댓값 우변 6, 묻는 점 -3 을 바꿀 수 있음. 제약: 기함수 조건이 짝수차항을 지우는 구조이므로 상수항·이차항은 넣을 수 없고, 극댓값이 우변과 같아지는 지점에서 p 가 유리수로 떨어지도록 (최고차 계수, 우변) 짝을 고른다. 실근 개수를 4 가 아닌 2·6 으로 바꾸면 극값과 우변의 대소 관계 자체가 달라진다."
    creative: "(1) 조건 ㈎ 를 f(2-x)=-f(x) 같은 점대칭으로 바꾸면 대칭 중심을 먼저 찾아야 해 ★5 (2) 실근 개수를 2 로 바꾸면 극값이 없거나 우변이 극댓값 밖이라 경우가 갈려 I-MI 강화 ★4~5 (3) |f(x)|=k 의 근의 개수를 k 의 함수로 표현하게 하면 구간별 정의가 필요해 ★5."
```

```yaml
- id: GN-CALC1-143-291
  page: 143
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=2x^3-6ax-3a$ 가 극값을 갖고 방정식 $f(x)=0$ 이 오직 한 개의 실근을 갖도록 하는 실수 $a$ 의 범위.
  category: "극값 존재 조건(a>0) + 극댓값×극솟값>0 → 무리식 부등식 정리 → a 범위"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「극값을 갖는다(a>0)」와 「오직 한 실근(극값의 곱>0)」 두 독립 조건을 a 하나에 대한 연립 부등식으로 결합해야 답이 구간으로 나옴"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「오직 한 개의 실근」을 극댓값과 극솟값의 곱이 양수라는 조건으로 변환"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "삼차방정식이 오직 한 실근을 가질 조건(극값의 곱)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    f'=6(x^2-a) 이므로 극값이 있으려면 a>0 이고, 극점은 x=±√a 라 극값이 무리식으로 나온다. 곱>0 을 정리하면 (4a√a)^2 < (3a)^2 꼴이 되어 √a<3/4 즉 a<9/16.
    두 조건 중 하나(a>0)를 빼먹으면 구간의 왼쪽 끝이 사라지고, 무리식을 다룰 때 a>0 을 이용해 부등식을 나누는 처리가 계산 함정이다.
    [분류 이슈] 실력 UP 출발 ★4 에 통찰 2개라 +1 후보지만 {SC, VF, SYM, XU} 가 없어 ★5 게이트를 통과하지 못해 ★4 로 둔다.
    실력 UP 출발 ★4 · 통찰 2 · ★5 게이트 미충족 → ★4.
  tier: star_4
  mechanism_primary: "f'=6(x^2-a) → 극값 존재 a>0 · 극점 ±√a → 극값의 곱>0 정리 → 4√a<3 → 0<a<9/16"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$0<a<\dfrac{9}{16}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/143-291.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최고차 계수 2 와 상수항의 계수 -3a 를 바꿀 수 있음. 제약: 일차항과 상수항이 같은 문자 a 를 공유해야 극값의 곱이 a 의 무리식으로 깔끔히 정리되고, 최종 부등식이 √a 에 대한 일차꼴이 되어야 유리수 경계(9/16)가 나온다."
    creative: "(1) 「서로 다른 세 실근」으로 바꾸면 곱<0 이 되어 부등호만 뒤집힌 ★4 (2) 「극값을 갖는다」 조건을 빼면 a≤0 인 경우를 학생이 스스로 기각해야 해 I-VF 가 붙고 ★4~5 (3) 상수항을 -3a 대신 독립 문자 b 로 두면 a, b 평면의 영역 문제가 되어 ★5."
```

## 표본 판정 요약 (30문)

- ★ 분포: ★1 0 · ★2 16 · ★3 9 · ★4 5 · ★5 0
- 통찰형 22 · 절차형 8 · premium 0
- 절차형 8문: 136-e26 · 136-268 · 137-269 · 140-e30 · 140-276 · 140-277 · 142-281 · 142-284
- 통찰 유형 분포(라벨 37개): I-EQV 13 · I-SC 7 · I-CON 6 · I-MI 3 · I-VF 3 · I-RT 2 · I-BW 2 · I-SYM 1 (I-XU · I-PD 0)
- type_hint 상위 5: 「주어진 구간에서 성립하는 부등식과 최솟값·최댓값」 4(141-e31 · 278 · 279 · 285) · 「근의 분리·근의 부호 조건」 4(139-e29 · 274 + 정수 개수형 275 · 283) · 「근의 개수 조건에서 상수 구하기(상수 분리)」 3(137-e27 · 269 · 270) · 「모든 실수에서 성립하는 부등식」 3(140-e30 · 276 · 284) · 「극값의 곱 판정」 3(138-e28 · 272 · 143-291). 그 밖에 「실근의 개수(그래프 개형)」 2 · 「열린구간에서 성립하는 부등식」 2
- 구역별: 필수·발전 예제 19(★2 12 · ★3 7) · STEP 1 6(★2 4 · ★3 2) · STEP 2 3(★4 3) · 실력 UP 2(★4 2)
- 그림: 1문(`crop:fig-143-287.png`)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC1-143-290 | 통찰 3개 + I-SYM depth 3 으로 v3.8 상 ★5 후보이나, 정독 자산은 `novelty_score` 를 0 으로 고정해 §2.14 ★5 게이트를 통과시킬 수 없음. 라벨은 실력 UP 출발점인 ★4 로 유지 | ★4 / ★5 |
| GN-CALC1-143-291 | 실력 UP 출발 ★4 에 통찰 2개라 +1 후보지만 {SC, VF, SYM, XU} 부재로 ★5 게이트 미충족 → ★4. §2.13 의 「★4 슬롯 저노출 유형 부재」 YELLOW 에도 해당 | ★4 |
| GN-CALC1-141-280 | 열린구간이라 최솟값이 존재하지 않고 끝점 극한에서 등호가 살아나는 경계 판단이 핵심인데 벤더 구역은 확인체크(★2 출발)다. 통찰 2개로 ★3 을 주었으나 체감은 STEP 2 급 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ⑴ 「상수 분리형 근의 개수」(137-e27 · 269 · 270 · 271 · 282 · 283 · 288)와 ⑵ 「극값의 곱 판정형」(138-e28 · 272 · 291)은 도구가 달라 통합하면 안 된다. k 가 상수항으로만 들어가면 ⑴, 극값에 섞이면 ⑵ 로 갈린다.
- **따로 세워야 할 유형**: 「근의 분리(부호 조건)」(139-e29 · 274 · 275 · 283)은 f(0) 이라는 추가 기준선이 들어가 단순 개수형과 별개 유형이다. 정수 개수를 묻는 변형(275 · 283 · 288)은 경계 제외 판단만 더해진 것이므로 같은 유형의 하위 변형으로 묶어도 된다.
- **따로 세워야 할 유형**: 「열린구간에서 성립하는 부등식」(141-280 · 142-286)은 최솟값이 존재하지 않아 끝점 극한과 등호 판단이 필요해 일반 구간 부등식형과 체감이 다르다.
- **통합해도 될 유형**: 「모든 실수에서 성립하는 부등식」(140-e30 · 276 · 277 · 284)과 「주어진 구간에서 성립하는 부등식」(141-e31 · 278 · 279 · 285)은 최소 후보를 어디서 고르느냐만 다르므로 한 유형의 두 갈래로 두고 base ★ 만 달리 주는 편이 낫다.
- **단독 유형**: 143-287(도함수 그래프 → 원함수 실근 개수) · 143-289(이중 부등식과 자연수 개수) · 143-290(기함수 + 절댓값 방정식)은 이 범위에서 각각 1문뿐이며 다른 유형으로 환원되지 않는다.
