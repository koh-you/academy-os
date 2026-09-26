---
name: mechanism-데이터-GN-CM1-17
description: 개념원리 공통수학1 17 이차함수의 최대 · 최소(1/1 · 147~153쪽 29문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1 · 전사본 latex-bank/gn-cm1
  section: 17 이차함수의 최대 · 최소
  unit_code: GN-CM1-17
  part: "1/1"
  extract_range: "147~153쪽 · 147-304~153-328"
  total_problems: 29
  unit_total: 29
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (이 범위 그림 문항 4문)
---

# 개념원리 공통수학1 · 17 이차함수의 최대 · 최소 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학1 147~153쪽, 단원 17 「이차함수의 최대 · 최소」의 29문항 전수를 다룬다. 구역은 「개념원리 익히기」 4문(147-304~147-307), 「필수·발전 예제」 10문(필수 예제 148-e7 · 148-e8 · 149-e9 · 150-e10 + 확인체크 6문), 「특강」 2문(151-314 · 151-315), 「연습문제 STEP 1」 4문, 「연습문제 STEP 2」 7문, 「연습문제 실력 UP」 2문이다. 개념원리 고등의 난이도 신호는 구역과 예제 태그다 — 「개념원리 익히기」와 tag 「확인체크」는 개념 확인(★1 출발), tag 「필수」는 ★2, 「특강」은 ★2~3, 연습문제는 STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 출발이며, tag 「교육청 기출」은 통찰 유무로 +0~1 한다.

단원의 변별 지점은 세 군데로 갈린다. ① **꼭짓점의 $x$좌표가 주어진 범위 안에 있는가** — 안에 있으면 꼭짓점 값이, 밖에 있으면 축에서 먼 끝점이 답을 만든다. 이 판정이 답을 바꾸는 문항이 이 범위의 절반이다. ② **공통부분 치환에서 치환변수 $t$ 의 범위** — $t=x^2+bx+c$ 는 실수 전체를 훑지 못하므로 $t$ 의 최솟값을 먼저 구해야 하고, $t$ 에 대한 꼭짓점이 그 범위 밖에 놓이면 끝점이 답이 된다(149-310 이 대표). ③ **활용 문항의 기하 → 대수 전환** — 그림의 길이를 변수 하나로 매개화하는 단계(I-RT)가 실제 저항이다. 그래서 29문 중 21문이 통찰형이고 라벨 27개 중 14개가 I-EQV(범위 전이·조건 동치 변환)에 몰려 있다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(유형 코드·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다. 특히 이 단원의 숫자 변형은 **꼭짓점이 범위 안인지 밖인지가 바뀌면 문항의 성격이 통째로 달라지므로**, `variation_notes.numeric` 에 그 제약을 명시했다. 공통수학1은 유형 카탈로그가 없으므로 `type_id`·`base_star` 는 null 이고 `type_hint` 에 유형명을 제안했으며 `effective_star` 는 잠정적으로 `star` 와 같다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM1-147-304
  page: 147
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    이차함수 $y=3x^2-6x+2$ 에 대해 ⑴ $y=a(x-p)^2+q$ 꼴로 변형 ⑵ 최댓값과 최솟값 구하기.
  category: '완전제곱 변형 → 꼭짓점 읽기 → 이차항 계수의 부호로 최대·최소 판정'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수의 표준형 변형과 최대·최소(범위 제한 없음)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴에서 얻은 $3(x-1)^2-1$ 을 그대로 읽으면 ⑵가 끝난다. $a=3>0$ 이므로 꼭짓점에서 최솟값,
    최댓값은 없다는 결론까지 한 단계다. 「최댓값은 없다」를 빠뜨리는 T-범위 함정 하나뿐이고
    통찰 없음·M_total 5 → −1 후보이나 개념원리 익히기 출발점 ★1 이 이미 하한이라 ★1 유지.
  tier: star_1
  mechanism_primary: '$y=3x^2-6x+2$ 완전제곱 → $3(x-1)^2-1$ → $a>0$ 이므로 꼭짓점에서 최솟값 $-1$, 최댓값 없음'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $y=3(x-1)^2-1$ ⑵ 최솟값: $-1$, 최댓값: 없다.'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/147-304.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이차항 계수 3 과 일차항·상수항을 바꿀 수 있음. 제약: 꼭짓점 좌표가 정수 또는 간단한 분수가 되도록 일차항 계수를 이차항 계수의 짝수배로 잡는다. 이차항 계수의 부호를 음수로 바꾸면 최댓값·최솟값의 역할이 뒤바뀌므로 ⑵의 정답 문장도 함께 뒤집어야 한다.'
    creative: '(1) $a$ 의 부호만 음수로 바꿔 최댓값 쪽을 묻기(★1 유지) (2) ⑵를 「최솟값이 $-1$ 이 되도록 하는 상수항」 역문제로 뒤집으면 I-BW d1 · ★2 (3) 정의역을 $0\le x\le 3$ 으로 제한하면 꼭짓점 포함 판정이 붙어 ★2.'
```

```yaml
- id: GN-CM1-147-305
  page: 147
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 네 이차함수의 최댓값과 최솟값 구하기 — 이차항 계수가 양수 2개(2, 3)와
    음수 2개($-3$, $-\dfrac{1}{2}$), 정수 계수와 분수 계수가 섞여 있다.
  category: '각 식을 완전제곱 → 꼭짓점의 $y$좌표 → 계수 부호로 최댓값·최솟값 중 하나만 존재함을 판정'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수의 최대·최소(범위 제한 없음)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    147-304 와 같은 골조를 네 번 반복하는 반복 숙달 문항이다. ⑷의 $-\dfrac{1}{2}$ 처럼 분수 계수를
    묶어내는 계산 부담이 있어 Mk 2 이지만 판단 단계는 늘지 않는다. 통찰 없음·개념원리 익히기 ★1 유지.
  tier: star_1
  mechanism_primary: '각 식 완전제곱 → 꼭짓점의 $y$좌표가 최댓값 또는 최솟값 → 계수 부호로 어느 쪽인지 결정하고 반대쪽은 없다고 답'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 최솟값: $-\dfrac{3}{2}$, 최댓값: 없다. ⑵ 최댓값: $-3$, 최솟값: 없다. ⑶ 최솟값: $-2$, 최댓값: 없다. ⑷ 최댓값: $7$, 최솟값: 없다.'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/147-305.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '네 소문항의 계수 전부. 제약: 양수 계수 2개·음수 계수 2개의 균형과 분수 계수 1개를 유지해야 훈련 의도가 남는다. 꼭짓점의 $y$좌표가 정수나 분모 2 이하의 분수가 되도록 일차항 계수를 잡는다.'
    creative: '(1) 소문항 하나를 $y=ax^2+bx+c$ 일반형으로 주고 꼭짓점 공식 $-\dfrac{b^2-4ac}{4a}$ 를 유도시키면 Ma 2 · ★2 (2) 네 함수 중 최댓값을 갖는 것만 고르게 하는 ㄱㄴㄷ 보기로 바꾸면 판정만 남아 ★1 유지 (3) 각 함수의 최댓값·최솟값의 합을 묻게 하면 계산 한 단계 추가 · ★1~2.'
```

```yaml
- id: GN-CM1-147-306
  page: 147
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    $1\le x\le 4$ 에서 $y=2x^2-8x+5$ 의 최댓값·최솟값을 구하는 과정의 빈칸 8개 채우기 —
    표준형 변형, 꼭짓점의 $x$좌표가 범위에 포함됨을 확인, 세 지점의 함숫값 비교.
  category: '제한된 범위에서의 최대·최소 표준 절차를 빈칸으로 따라가기(표준형 → 꼭짓점 포함 확인 → 끝점·꼭짓점 비교)'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제한된 범위에서의 이차함수의 최대·최소(풀이 과정 채우기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    절차가 통째로 주어지고 학생은 빈칸만 메운다. 「꼭짓점의 $x$좌표가 범위에 포함된다」는 판정도
    문장으로 제시돼 있어 스스로 분기할 필요가 없다. 통찰 없음·M_total 5·익히기 ★1 유지.
    이 문항이 이 단원의 절차 원형이며 뒤의 147-307·148-e7 이 같은 절차를 스스로 하게 만든다.
  tier: star_1
  mechanism_primary: '$2(x-2)^2-3$ 변형 → 꼭짓점 $x=2$ 가 $1\le x\le 4$ 에 포함 → $x=1,2,4$ 의 함숫값 $-1,-3,5$ 비교 → 최대 5 · 최소 $-3$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2$, $3$, $2$, $2$, $-3$, $5$, $5$, $-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/147-306.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이차항 계수 2, 꼭짓점 $x$좌표 2, 구간 $[1,4]$. 제약: **꼭짓점이 구간 안에 있어야** 빈칸 배치(세 지점 비교)가 그대로 성립한다. 구간을 옮겨 꼭짓점이 밖으로 나가면 빈칸 수와 문장 자체를 다시 써야 한다.'
    creative: '(1) 구간을 $3\le x\le 5$ 로 옮겨 꼭짓점이 밖에 놓이는 과정 채우기로 바꾸면 「포함되지 않는다」 판정이 핵심이 되어 ★2 (2) 빈칸 대신 「이 풀이에서 틀린 곳을 찾으시오」 오답 교정형으로 뒤집으면 I-VF d2 · ★3 (3) 마지막 두 빈칸만 남기고 앞을 지우면 ★1 유지.'
```

```yaml
- id: GN-CM1-147-307
  page: 147
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 주어진 범위에서 네 이차함수의 최댓값과 최솟값 구하기 — 꼭짓점이 범위 밖인 경우
    2개(⑴⑵)와 범위 안인 경우 2개(⑶⑷)가 섞여 있다.
  category: '표준형 변형 → 꼭짓점의 $x$좌표가 범위 안인지 판정 → 안이면 꼭짓점과 먼 끝점, 밖이면 두 끝점 비교'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제한된 범위에서의 이차함수의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    147-306 에서 문장으로 주던 「꼭짓점이 범위에 포함되는가」를 학생이 스스로 판정해야 하고,
    네 소문항이 포함·불포함 두 경우를 모두 훑는다. T-범위(꼭짓점 포함 여부)와 T-경계(끝점 비교)
    두 함정·M_total 7 로 익히기 ★1 출발에서 +1 → ★2. 분기 자체는 본문이 방금 가르친 표준 절차라
    통찰로는 세지 않았다. [분류 이슈] 벤더 구역 신호는 ★1 인데 판정은 ★2.
  tier: star_2
  mechanism_primary: '각 식 표준형 → 꼭짓점 $x$좌표와 구간 비교 → 포함이면 꼭짓점 값 + 축에서 먼 끝점, 불포함이면 양 끝점 두 값만 비교'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 최댓값: $7$, 최솟값: $4$ ⑵ 최댓값: $-4$, 최솟값: $-10$ ⑶ 최댓값: $15$, 최솟값: $3$ ⑷ 최댓값: $4$, 최솟값: $-21$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/147-307.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '네 소문항의 계수와 구간 전부. 제약: **포함 2문 · 불포함 2문의 균형**과 이차항 계수 양수·음수의 균형을 유지한다. 구간을 바꿀 때 꼭짓점 포함 여부가 의도대로인지 반드시 다시 확인해야 하며, ⑷처럼 축이 구간의 중앙에서 벗어나 먼 끝점이 최솟값이 되는 배치를 한 문항은 남겨 둔다.'
    creative: '(1) 한 소문항의 구간 끝을 문자 $k$ 로 두고 「최솟값이 $3$ 이 되도록 하는 $k$」를 묻게 하면 I-BW d2 · ★3 (2) 네 소문항을 그래프 개형 4개와 짝짓는 객관식으로 바꾸면 I-RT d1 · ★2 (3) 구간을 $|x-1|\le 2$ 처럼 절댓값으로 주면 구간 해석 한 단계 추가 · ★2~3.'
```

### 필수·발전 예제

```yaml
- id: GN-CM1-148-e7
  page: 148
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $y=x^2-4x+6$ 의 최댓값·최솟값을 ⑴ $0\le x\le 5$ ⑵ $-1\le x\le 1$ 에서 각각 구하기.
    같은 함수에 범위만 바꿔 꼭짓점 포함·불포함 두 경우를 대비시킨다.
  category: '표준형 $(x-2)^2+2$ → 꼭짓점 $x=2$ 의 구간 포함 여부 판정 → 포함이면 꼭짓점이 최소, 불포함이면 축에서 가까운 끝점이 최소'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제한된 범위에서의 이차함수의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이 단원의 절차를 정의하는 필수 예제다. 함수를 고정하고 구간만 바꿔 ⑴ 포함 ⑵ 불포함을
    나란히 보여 주는 구성이라 학생이 스스로 발견할 것이 없고, 두 경우의 처리법이 본문에 이어 제시된다.
    T-범위·T-경계 두 함정·M_total 6 으로 필수 예제 ★2 출발 유지.
  tier: star_2
  mechanism_primary: '$(x-2)^2+2$ → ⑴ $x=2$ 포함이므로 최소 2 · 먼 끝 $x=5$ 에서 최대 11 ⑵ $x=2$ 불포함이므로 축에 가까운 $x=1$ 에서 최소 3 · 먼 $x=-1$ 에서 최대 11'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 최댓값: $11$, 최솟값: $2$ ⑵ 최댓값: $11$, 최솟값: $3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/148-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '함수의 계수와 두 구간. 제약: **⑴은 꼭짓점 포함 · ⑵는 불포함**이라는 대비가 예제의 전부이므로 이 성질을 깨면 안 된다. 두 구간의 최댓값이 우연히 같게($11$) 설계돼 있는데, 이것을 유지하면 「구간이 달라도 최댓값이 같을 수 있다」는 관찰이 남는다.'
    creative: '(1) ⑶으로 $2\le x\le 2$ 같은 한 점 구간이나 $x\ge 2$ 같은 반직선을 추가하면 최댓값이 없는 경우가 생겨 ★3 (2) 구간을 $a\le x\le a+2$ 로 두고 $a$ 에 따른 최솟값을 묻게 하면 I-MI d2 · ★4 (3) 최댓값과 최솟값의 차만 묻게 하면 계산 한 단계 추가 · ★2 유지.'
```

```yaml
- id: GN-CM1-148-e8
  page: 148
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $1\le x\le 3$ 에서 $y=-2x^2+4x+k$ 의 최댓값이 $4$ 일 때 이 함수의 최솟값 구하기($k$ 는 상수).
  category: '표준형 → 꼭짓점의 구간 포함 확인 → 최댓값 조건을 꼭짓점의 $y$좌표 식으로 옮겨 $k$ 결정 → 먼 끝점에서 최솟값'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「최댓값이 4」를 곧바로 대입할 식이 없으므로, 먼저 꼭짓점 $x=1$ 이 구간 안이고 $a<0$ 임을 확인해 조건을 $k+2=4$ 라는 등식으로 옮긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "제한된 범위에서 최댓값 또는 최솟값이 주어질 때 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    미정계수 문항이지만 단순 대입이 아니다. 최댓값이 어디서 나는지(꼭짓점인지 끝점인지)를 먼저
    확정해야 $k$ 에 대한 식이 생기므로 조건의 동치 변환 한 단계를 인정했다(EQV d1). 다만 꼭짓점
    $x=1$ 이 구간의 왼쪽 끝과 겹쳐 판정이 쉬운 편이다. 필수 예제 ★2 출발 유지.
  tier: star_2
  mechanism_primary: '$-2(x-1)^2+k+2$ → 꼭짓점 $x=1$ 이 구간 안·$a<0$ → 최댓값 $k+2=4$ 로 $k=2$ → 축에서 먼 $x=3$ 에서 최솟값'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/148-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이차항 계수 $-2$, 구간 $[1,3]$, 최댓값 4. 제약: 꼭짓점이 구간 안에 있어야 「최댓값 = 꼭짓점 값」 경로가 유지된다. 꼭짓점을 구간 밖으로 내보내면 최댓값이 끝점에서 나므로 $k$ 를 구하는 식 자체가 바뀌고 난이도가 한 단계 오른다.'
    creative: '(1) 최댓값 대신 최솟값을 주고 최댓값을 묻기(같은 골조 ★2) (2) 꼭짓점이 구간 밖이 되도록 구간을 옮기면 「어느 끝점이 최대인가」 판정이 추가돼 ★3 (3) 이차항 계수를 $a$ 로 두고 최댓값·최솟값을 모두 주면 연립이 생겨 152-316 과 같은 골조 · ★3.'
```

```yaml
- id: GN-CM1-148-308
  page: 148
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $0\le x\le 1$ 에서 $y=-3x^2+2x+1$ 의 최댓값 $M$, 최솟값 $m$ 일 때 $M+m$ 의 값.
  category: '표준형 → 꼭짓점 $x=\dfrac{1}{3}$ 이 구간 안 → 꼭짓점에서 최대, 축에서 먼 끝 $x=1$ 에서 최소 → 두 값의 합'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제한된 범위에서의 이차함수의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    148-e7 의 쌍둥이 확인 문항으로 절차가 같다. 꼭짓점 $x=\dfrac{1}{3}$ 이 정수가 아니라 분수
    계산이 붙고(Mk 2), 두 끝점 $0$ 과 $1$ 중 축에서 먼 쪽을 골라야 하는 T-경계가 있다.
    통찰 없음이지만 M_total 7 이라 −1 을 적용하지 않고 확인체크 ★2 출발 유지.
  tier: star_2
  mechanism_primary: '$-3\left(x-\dfrac{1}{3}\right)^2+\dfrac{4}{3}$ → 꼭짓점 구간 안이므로 $M=\dfrac{4}{3}$ · 먼 끝 $x=1$ 에서 $m=0$ → $M+m$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{4}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/148-308.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수 $-3,2,1$ 과 구간 $[0,1]$. 제약: 꼭짓점 $x=-\dfrac{b}{2a}$ 가 구간 안에 남아야 하고, $M$ 이 분수가 되면 $m$ 은 정수가 되도록 끝점을 잡아야 답이 지저분해지지 않는다.'
    creative: '(1) $M+m$ 대신 $Mm$ 이나 $M-m$ 을 묻기(★2 유지) (2) 구간을 $0\le x\le a$ 로 두고 $M+m=\dfrac{4}{3}$ 이 되는 $a$ 를 묻게 하면 I-BW+I-MI · ★4 (3) 이차항 계수를 양수로 바꾸면 최대·최소의 자리가 맞바뀌어 같은 ★2 의 쌍둥이 문항이 하나 더 나온다.'
```

```yaml
- id: GN-CM1-148-309
  page: 148
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $-3\le x\le 4$ 에서 $y=\dfrac{1}{3}x^2-2x+k$ 의 최솟값이 $-1$ 일 때 이 함수의 최댓값($k$ 는 상수).
  category: '표준형 → 꼭짓점 $x=3$ 이 구간 안 → 최솟값 조건으로 $k$ 결정 → 두 끝점 중 축에서 먼 $x=-3$ 에서 최댓값'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "최솟값이 어디서 나는지를 먼저 확정(꼭짓점 $x=3$ 이 구간 안·$a>0$)해야 조건이 $k-3=-1$ 이라는 등식이 된다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "제한된 범위에서 최댓값 또는 최솟값이 주어질 때 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    148-e8 의 쌍둥이지만 두 지점이 더 까다롭다. 꼭짓점 $x=3$ 이 구간의 오른쪽 끝 $4$ 에 치우쳐 있어
    최댓값은 가까운 $x=4$ 가 아니라 **먼 끝 $x=-3$** 에서 나고, 계수가 $\dfrac{1}{3}$ 이라 분수 처리가 붙는다.
    통찰 1개(EQV d1)·M_total 8 로 확인체크 ★2 출발 유지.
  tier: star_2
  mechanism_primary: '$\dfrac{1}{3}(x-3)^2+k-3$ → 꼭짓점 $x=3$ 구간 안 → 최솟값 $k-3=-1$ 로 $k=2$ → 축에서 먼 $x=-3$ 에서 최댓값'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/148-309.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$\dfrac{1}{3}$ 과 $-2$, 구간 $[-3,4]$, 최솟값 $-1$. 제약: 이차항 계수를 $\dfrac{1}{n}$ 꼴로 두고 일차항 계수를 그에 맞춰야 꼭짓점 $x$좌표가 정수가 된다. **축이 구간의 중앙에서 벗어나 먼 끝이 반대쪽이 되는 배치**가 이 문항의 핵심이므로 구간을 대칭으로 만들면 안 된다.'
    creative: '(1) 두 끝점 중 어느 쪽이 최댓값인지 이유를 서술하게 하면 같은 ★2 의 서술형 (2) 구간의 한쪽 끝을 $a$ 로 두고 최댓값이 $11$ 이 되는 $a$ 의 범위를 묻게 하면 I-MI d2 · ★4 (3) $k$ 대신 일차항 계수를 미지수로 두면 꼭짓점 위치 자체가 움직여 ★3.'
```

```yaml
- id: GN-CM1-149-e9
  page: 149
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ $y=(x^2-2x)^2-2(x^2-2x)-5$ 의 최솟값 ⑵ $0\le x\le 3$ 에서
    $y=(x^2-2x+3)^2-4(x^2-2x+3)+4$ 의 최댓값과 최솟값.
  category: '공통부분을 $t$ 로 치환 → **$t$ 가 움직일 수 있는 범위**를 먼저 구하기 → 그 범위에서 $t$ 의 이차함수로 최대·최소'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$t=x^2-2x$ 는 실수 전체를 훑지 못하고 $t\\ge -1$ 로 제한된다는 것, ⑵에서는 $x$ 의 구간 $[0,3]$ 이 $t$ 의 구간 $[2,6]$ 으로 옮겨진다는 것을 학생이 스스로 유도해야 한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "공통부분이 있는 함수의 최대·최소"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    치환 자체는 표준 절차이지만 이 유형의 실제 관문은 **$t$ 의 범위 전이**다. $t$ 를 실수 전체로 착각하면
    ⑴은 맞을 수도 있지만 ⑵는 반드시 틀린다. ⑵는 $x$ 구간 → $t$ 구간 → $t$ 의 이차함수로 두 번 옮겨야 해
    단계가 길다(Ms 3). 통찰 1개 d2·M_total 9 로 필수 예제 ★2 출발에서 +1 → ★3.
  mechanism_primary: '공통부분 $t$ 치환 → $t$ 의 범위($t\ge -1$ 또는 $2\le t\le 6$) 도출 → $t$ 의 이차함수를 표준형으로 → 그 범위에서 최대·최소'
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $-6$ ⑵ 최댓값: $16$, 최솟값: $0$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/149-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '공통부분의 계수와 바깥 이차식의 계수. 제약: ⑴은 **$t$ 의 이차함수의 꼭짓점이 $t$ 의 허용 범위 안**($t\ge -1$ 에서 $t=1$)에 들어 있어야 「범위를 신경 쓰지 않아도 맞는」 도입 문항으로 남고, ⑵는 $x$ 의 구간이 $t$ 의 닫힌 구간으로 옮겨져야 한다. 바깥 이차식은 완전제곱이 되도록 잡으면 답이 깔끔하다.'
    creative: '(1) ⑴의 바깥 꼭짓점을 $t=-2$ 로 옮기면 범위 밖이 되어 149-310 과 같은 함정 문항 · ★3 (2) 공통부분을 $|x|$ 나 $x+\dfrac{1}{x}$ 로 바꾸면 범위 도출 방법이 달라져 ★3~4 (3) 최댓값·최솟값을 주고 바깥 이차식의 계수를 역추적시키면 I-BW 추가 · ★4.'
```

```yaml
- id: GN-CM1-149-310
  page: 149
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $y=-(x^2+4x)^2-10(x^2+4x)+15$ 의 최댓값 구하기.
  category: '공통부분 $t=x^2+4x$ 치환 → $t\ge -4$ 도출 → $t$ 의 이차함수의 꼭짓점 $t=-5$ 가 범위 **밖**이므로 끝점 $t=-4$ 에서 최댓값'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$t=(x+2)^2-4\\ge -4$ 를 구한 뒤, $t$ 의 이차함수의 꼭짓점 $t=-5$ 가 이 범위 밖임을 확인해 최댓값을 끝점 $t=-4$ 로 옮긴다 — 이 확인이 없으면 꼭짓점 값 40 이라는 틀린 답에 도달한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "공통부분이 있는 함수의 최대·최소(치환변수의 범위 밖 꼭짓점)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    이 범위에서 **범위 확인을 건너뛰면 반드시 틀리는** 유일한 문항이다. 149-e9 는 꼭짓점이 $t$ 범위 안이라
    범위를 무시해도 답이 맞지만, 여기서는 $t\ge -4$ 와 꼭짓점 $t=-5$ 가 어긋나 답이 40 과 39 로 갈린다.
    통찰은 1개(EQV d2)뿐이지만 그 한 단계가 정답을 결정하므로 확인체크 ★2 출발에서 +1 → ★3.
    [분류 이슈] 통찰 수 기준으로만 보면 ★2 유지도 가능.
  tier: star_3
  mechanism_primary: '$t=x^2+4x=(x+2)^2-4\ge -4$ → $y=-(t+5)^2+40$ 의 꼭짓점 $t=-5$ 는 범위 밖 → $t\ge -4$ 에서 감소하므로 $t=-4$ 에서 최댓값'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$39$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/149-310.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$x^2+4x$ 의 계수와 바깥 이차식의 계수 $-1,-10,15$. 제약: **$t$ 의 이차함수의 꼭짓점이 $t$ 의 허용 범위 밖에 있어야** 이 문항의 의도가 살아 있다. 즉 바깥 꼭짓점의 $t$좌표 $<$ 공통부분의 최솟값. 이 부등식을 깨는 순간 149-e9 와 똑같은 평범한 문항이 된다.'
    creative: '(1) 최댓값 대신 최솟값을 묻게 하면 $t\ge -4$ 에서 무한히 감소해 「최솟값 없음」이 되어 판정형 ★3 (2) 바깥 꼭짓점을 범위 안으로 옮긴 쌍둥이와 함께 묶어 「두 함수 중 최댓값이 큰 것」을 묻게 하면 I-SC d2 · ★4 (3) 공통부분을 $x^2-6x$ 로 바꿔 최솟값 $-9$ 로 낮추면 함정이 사라지므로 권장하지 않는다.'
```

```yaml
- id: GN-CM1-149-311
  page: 149
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $-3\le x\le 0$ 일 때 $y=(x^2+2x+2)^2-4(x^2+2x+2)-1$ 의 최댓값과 최솟값의 합.
  category: '공통부분 $t=x^2+2x+2$ 치환 → 주어진 $x$ 구간을 $t$ 구간 $[1,5]$ 로 옮기기 → $t$ 의 이차함수로 최대·최소'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$t=(x+1)^2+1$ 에서 $-3\\le x\\le 0$ 을 $1\\le t\\le 5$ 로 옮긴다 — 구간의 양 끝을 대입하는 것이 아니라 $t$ 자체를 $x$ 의 이차함수로 보고 그 치역을 구해야 한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "공통부분이 있는 함수의 최대·최소"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    149-e9⑵ 의 쌍둥이다. 함정은 $t$ 의 범위를 $x=-3$ 과 $x=0$ 을 대입한 $[2,5]$ 로 잘못 잡는 것 —
    구간 안에 $t$ 의 꼭짓점 $x=-1$ 이 있어 최솟값은 $1$ 이다. 여기서 한 번, $t$ 의 이차함수에서
    또 한 번, 같은 「꼭짓점이 구간 안인가」 판정을 겹쳐서 해야 한다. 확인체크 ★2 출발 +1 → ★3.
  tier: star_3
  mechanism_primary: '$t=(x+1)^2+1$ 로 $x\in[-3,0]$ → $t\in[1,5]$ → $y=(t-2)^2-5$ 의 $[1,5]$ 에서 최소 $-5$(꼭짓점)·최대 $4$(먼 끝 $t=5$) → 합'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/149-311.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$x$ 구간 $[-3,0]$ 과 두 이차식의 계수. 제약: **$x$ 구간 안에 $t$ 의 꼭짓점이 들어 있어야** 「끝점 대입만으로는 $t$ 범위를 얻지 못한다」는 함정이 유지된다. 구간을 $t$ 의 축 한쪽으로 몰면 이 문항의 의도가 사라진다.'
    creative: '(1) $t$ 의 이차함수의 꼭짓점도 $t$ 범위 밖으로 내보내면 함정이 이중이 되어 ★4 (2) 최댓값과 최솟값의 합 대신 「최댓값을 주는 $x$ 의 값」을 묻게 하면 $t\to x$ 역추적 한 단계 추가 · I-BW d2 · ★4 (3) 공통부분을 $x^2+2x$ 로 바꾸면 상수 2 의 이동이 사라져 계산만 가벼워지고 ★3 유지.'
```

```yaml
- id: GN-CM1-150-e10
  page: 150
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    직사각형 ABCD 에서 B, C 는 $x$축 위에, A, D 는 $y=-x^2+10x$ 의 그래프 위에 있을 때
    (A 는 제1사분면) 직사각형의 둘레의 길이의 최댓값.
  category: '그림의 배치를 포물선 위 한 점의 $x$좌표 하나로 매개화 → 포물선의 축 대칭으로 가로 길이를 표현 → 둘레를 이차함수로 보고 최댓값'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그림의 직사각형(기하)을 포물선 위 점 A 의 $x$좌표 $a$ 하나로 매개화해 세로 $-a^2+10a$ · 가로 $10-2a$ 라는 대수식으로 옮긴다"
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "A 와 D 가 포물선의 축 $x=5$ 에 대해 대칭임을 이용해 가로 길이를 $10-2a$ 로 한 번에 읽는다(두 교점을 따로 구하지 않음)"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "이차함수의 최대·최소의 활용 — 도형(포물선에 내접하는 직사각형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    계산은 가볍지만 진입 저항이 있다. 「무엇을 $x$ 로 놓을 것인가」를 학생이 정해야 하고, 축 대칭을
    쓰지 않으면 A·D 의 $x$좌표를 연립으로 구하려다 막힌다. 둘레 $=-2(a-4)^2+52$ 로 정리된 뒤는
    표준 절차다. 통찰 2개(RT d2 · SYM d1)로 필수 예제 ★2 출발에서 +1 → ★3.
  tier: star_3
  mechanism_primary: 'A$(a,\,-a^2+10a)$ 로 놓기 → 축 $x=5$ 대칭으로 가로 $10-2a$ → 둘레 $=-2(a-4)^2+52$ → $0<a<5$ 안의 $a=4$ 에서 최댓값'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$52$'
  answer_source: "본문 풀이"
  figure: crop:fig-150-e10.png
  latex: latex-bank/gn-cm1/items/150-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '포물선 $y=-x^2+10x$ 의 계수. 제약: $x$절편이 $0$ 과 짝수가 되도록 일차항 계수를 짝수로 잡아야 축과 대칭 표현이 깔끔하고, **둘레를 최대로 하는 $a$ 가 개구간 $0<a<5$ 안에 들어와야** 한다(끝으로 밀리면 최댓값이 없어진다). 그림의 라벨 A·B·C·D 배치는 고정.'
    creative: '(1) 둘레 대신 넓이의 최댓값을 묻게 하면 삼차함수가 되어 공통수학1 범위를 벗어나므로 쓰지 않는다 (2) 포물선을 $y=-x^2+10x$ 에서 $y=x^2-10x$ 로 뒤집고 직사각형을 $x$축 아래에 두면 부호 처리가 추가돼 ★3 유지 (3) A, D 가 포물선 위, B, C 가 직선 $y=k$ 위로 바꾸면 매개화 단계가 하나 늘어 ★4.'
```

```yaml
- id: GN-CM1-150-312
  page: 150
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    지면에서 초속 $30\,\mathrm{m}$ 로 던진 물체의 $t$초 후 높이가 $y=-5t^2+30t\ (0\le t\le 6)$ 일 때
    가장 높이 올라갔을 때의 높이.
  category: '주어진 이차식을 완전제곱 → 꼭짓점의 $t$좌표가 구간 안임을 확인 → 꼭짓점의 $y$좌표가 최고 높이'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수의 최대·최소의 활용 — 물체의 높이"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    식이 이미 주어져 있어 모델링 단계가 없고, 완전제곱 한 번으로 $-5(t-3)^2+45$ 가 나온다.
    꼭짓점 $t=3$ 도 구간 $[0,6]$ 의 정중앙이라 포함 판정이 사실상 필요 없다. 통찰 없음·M_total 4
    → −1 을 적용해 확인체크 ★2 출발에서 ★1.
  tier: star_1
  mechanism_primary: '$-5t^2+30t=-5(t-3)^2+45$ → 꼭짓점 $t=3$ 이 구간 안 → 최고 높이 45'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$45\,\mathrm{m}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/150-312.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '초속 30 과 계수 $-5$, 구간 $[0,6]$. 제약: 구간의 오른쪽 끝은 물체가 지면에 닿는 시각이어야 하므로 $y=0$ 의 두 근과 일치해야 한다(초속을 바꾸면 구간도 함께 바뀐다). 꼭짓점 $t$좌표는 두 근의 중점이므로 자동으로 구간 안이다.'
    creative: '(1) 「높이가 $40\,\mathrm{m}$ 이상인 시간의 길이」를 묻게 하면 이차부등식으로 넘어가 ★3 (2) 초기 높이를 더해 $y=-5t^2+30t+h$ 로 두고 최고 높이를 주면 I-BW d1 · ★2 (3) 구간을 $0\le t\le 2$ 로 잘라 꼭짓점을 밖으로 내보내면 끝점 판정이 생겨 ★2.'
```

```yaml
- id: GN-CM1-150-313
  page: 150
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    밑변 $40\,\mathrm{m}$, 높이 $20\,\mathrm{m}$ 인 직각삼각형 모양의 땅에 직사각형 모양의 바닥면을
    갖는 건물을 지을 때 바닥면의 넓이의 최댓값.
  category: '가로를 $x$ 로 놓기 → 닮음비로 세로를 $x$ 의 일차식으로 표현 → 넓이를 이차함수로 보고 최댓값'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "빗변 위의 꼭짓점 때문에 세로가 가로에 종속된다는 것을 닮은 두 삼각형의 비로 옮겨 세로 $=20-\\dfrac{x}{2}$ 라는 일차식을 얻는다(기하 → 대수)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이차함수의 최대·최소의 활용 — 도형(직각삼각형에 내접하는 직사각형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    150-312 와 달리 식이 주어지지 않아 모델링이 필요하다. 실제 관문은 닮음비 한 줄이고, 넓이
    $=-\dfrac{1}{2}(x-20)^2+200$ 이 나온 뒤는 표준이다. 최댓값을 주는 $x=20$ 이 $0<x<40$ 안에 있어
    범위 함정도 비껴간다. 통찰 1개(RT d2)로 확인체크 ★2 출발 유지.
  tier: star_2
  mechanism_primary: '가로 $x$ → 닮음으로 세로 $20-\dfrac{x}{2}$ → 넓이 $=-\dfrac{1}{2}(x-20)^2+200$ → $x=20$ 에서 최댓값'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$200\,\mathrm{m}^2$'
  answer_source: "답지"
  figure: crop:fig-150-313.png
  latex: latex-bank/gn-cm1/items/150-313.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑변 40 과 높이 20. 제약: 두 값의 곱의 $\dfrac{1}{4}$ 이 답이 되므로 둘 다 짝수로 잡아야 답이 정수이고, 닮음비가 간단해지도록 밑변을 높이의 정수배로 두는 편이 좋다. 그림의 직각 위치와 직사각형이 두 변에 붙어 있다는 배치는 고정.'
    creative: '(1) 넓이 대신 직사각형의 둘레의 최댓값을 묻게 하면 일차함수가 되어 끝점에서 최대 — 「이차함수가 아닐 수도 있다」는 판정형 ★3 (2) 직각삼각형을 이등변삼각형으로 바꾸면 대칭 매개화가 필요해 I-SYM 추가 · ★3 (3) 넓이를 $150\,\mathrm{m}^2$ 이상으로 하는 가로의 범위를 묻게 하면 이차부등식 · ★3.'
```

### 특강

```yaml
- id: GN-CM1-151-314
  page: 151
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "특강 확인체크"
  summary: |
    실수 $x$, $y$ 에 대하여 $4x^2+y^2-16x+2y+1$ 의 최솟값.
  category: '두 문자에 대해 각각 완전제곱 → 제곱의 합 + 상수 꼴 → 두 제곱항이 동시에 0 일 때 최솟값'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '두 문자가 섞인 식을 $4(x-2)^2+(y+1)^2-16$ 이라는 「제곱의 합 + 상수」 동치 꼴로 옮겨, 최솟값 문제를 「두 제곱항을 동시에 0 으로 만들 수 있는가」로 바꾼다'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차식의 최대·최소 — 두 문자에 대한 완전제곱(제곱의 합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x$ 항과 $y$ 항이 서로 얽히지 않아(교차항 $xy$ 없음) 각각 독립으로 완전제곱하면 끝난다.
    특강 주제라 개념은 새롭지만 절차는 한 갈래뿐이고, $x=2$, $y=-1$ 을 동시에 택할 수 있으므로
    추가 판정도 없다. 특강 ★2~3 출발 중 하한 ★2.
  tier: star_2
  mechanism_primary: '$4(x-2)^2+(y+1)^2-16$ 으로 변형 → 두 제곱항 $\ge 0$ · 동시에 0 가능 → 최솟값 $-16$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/151-314.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$x^2$·$y^2$ 의 계수와 일차항·상수항. 제약: **교차항 $xy$ 가 없어야** 독립 완전제곱이 성립하고, 두 제곱항의 계수가 모두 양수여야 최솟값이 존재한다. 한쪽 계수를 음수로 두면 최솟값이 사라지므로 문제 자체가 성립하지 않는다.'
    creative: '(1) 계수를 모두 음수로 뒤집어 최댓값을 묻기(★2 유지) (2) $x$, $y$ 가 정수라는 조건을 붙이고 꼭짓점이 정수가 아니게 만들면 후보 점검이 생겨 I-VF d2 · ★4 (3) 교차항 $2xy$ 를 넣으면 $(x+y)$ 를 덩어리로 묶는 재구성이 필요해 I-EQV d3 · ★4.'
```

```yaml
- id: GN-CM1-151-315
  page: 151
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "특강 확인체크"
  summary: |
    $y=2x-1$ 을 만족시키는 실수 $x$, $y$ 에 대하여 $2x^2-y^2$ 의 최댓값.
  category: '조건식으로 한 문자를 소거 → 한 문자의 이차식으로 정리 → 완전제곱으로 최댓값'
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '두 문자 식의 최대·최소를 그대로 다룰 수 없으므로 조건식 $y=2x-1$ 을 대입해 한 문자만 남은 이차식으로 옮긴다'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "조건식이 있는 이차식의 최대·최소 — 한 문자 소거"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    소거 뒤 $2x^2-(2x-1)^2=-2(x-1)^2+1$ 로 이차항 계수가 음수가 되어 최댓값이 생긴다.
    $x$ 에 범위 제한이 없어 꼭짓점 포함 판정도 없다. 소거라는 착안 한 단계뿐이라 특강 ★2~3
    출발 중 하한 ★2. 이차항 계수의 부호가 소거 뒤에야 정해진다는 점이 이 문항의 유일한 관찰이다.
  tier: star_2
  mechanism_primary: '$y=2x-1$ 대입 → $2x^2-(2x-1)^2=-2(x-1)^2+1$ → $x=1$ 에서 최댓값 1'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/151-315.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '조건식의 기울기 2 와 절편 $-1$, 목표식의 계수 2 와 $-1$. 제약: **대입 후 이차항 계수가 음수**여야 최댓값이 존재한다(양수면 최솟값 문제로 바꿔야 한다). 기울기와 목표식 계수를 함께 바꿀 때 이차항 계수의 부호를 매번 확인한다.'
    creative: '(1) 대입 후 이차항 계수가 양수가 되게 잡고 최솟값을 묻기(★2 유지) (2) $x$ 에 범위를 붙이면 꼭짓점 포함 판정이 추가돼 153-326 과 같은 골조 · ★3 (3) 조건식을 $x^2+y^2=1$ 같은 이차식으로 바꾸면 소거 후 범위 전이가 필요해 ★4.'
```

### 연습문제 STEP 1

```yaml
- id: GN-CM1-152-316
  page: 152
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $1\le x\le 3$ 에서 $y=-ax^2+8ax-14a-b$ 의 최댓값이 $-2$, 최솟값이 $-10$ 일 때
    양수 $a$, $b$ 에 대한 $a+b$ 의 값.
  category: '문자 계수인 채로 완전제곱 → 꼭짓점 $x=4$ 가 구간 밖임을 확인 → $a>0$ 으로 증가·감소 방향 결정 → 두 끝점 값으로 연립'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '꼭짓점 $x=4$ 가 구간 $[1,3]$ 의 오른쪽 밖이고 $-a<0$ 이므로 구간에서 증가함수임을 읽어, 최댓값·최솟값 조건을 $x=3$·$x=1$ 두 끝점의 값이라는 연립방정식으로 옮긴다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "제한된 범위에서 최댓값·최솟값이 모두 주어질 때 미정계수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    미지수 두 개를 문자 계수로 끌고 가며 완전제곱해야 하고, 꼭짓점 $x=4$ 가 구간 밖이라
    「최댓값 = 꼭짓점 값」이라는 습관적 경로가 막힌다. 그 뒤 두 끝점 값으로 연립까지 가야 해
    단계가 길다(Ms 3·M_total 9). STEP 1 ★2 출발에서 +1 → ★3. [분류 이슈] 벤더 STEP 1 신호와 1단 차이.
  tier: star_3
  mechanism_primary: '$-a(x-4)^2+2a-b$ → 꼭짓점 $x=4$ 구간 밖·증가 → $x=3$ 에서 $a-b=-2$, $x=1$ 에서 $-7a-b=-10$ → 연립으로 $a=1$, $b=3$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/152-316.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '일차항 계수 $8a$(꼭짓점 위치를 결정), 상수항 $-14a$, 구간 $[1,3]$, 두 목푯값 $-2$·$-10$. 제약: **꼭짓점이 구간 밖에 있어야** 이 문항의 관문이 유지되고, 연립의 해 $a$, $b$ 가 모두 양수가 되도록 두 목푯값을 잡아야 한다(문제의 「양수 $a$, $b$」 조건과 모순되면 안 된다).'
    creative: '(1) 꼭짓점을 구간 안으로 옮기면 최댓값이 꼭짓점 값이 되어 식이 하나 단순해지고 ★2 (2) 「양수」 조건을 빼고 $a$ 의 부호를 학생이 따지게 하면 I-MI d2 · ★4 (3) 최댓값·최솟값 대신 「최댓값과 최솟값의 차가 8」이라는 한 조건만 주면 미지수가 남아 조건 부족 판정형 · ★4.'
```

```yaml
- id: GN-CM1-152-317
  page: 152
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=x^2+ax+b$ 가 $f(-5)=f(3)$ 이고 $f(x)$ 의 최솟값이 $1$ 일 때,
    $-2\le x\le 2$ 에서 $f(x)$ 의 최댓값($a$, $b$ 는 상수).
  category: '같은 함숫값을 갖는 두 점의 중점이 축임을 이용해 $a$ 결정 → 최솟값 조건으로 $b$ 결정 → 제한 범위에서 축에서 먼 끝점의 값'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$f(-5)=f(3)$ 을 두 값을 대입해 연립하는 대신, 포물선이 축에 대해 대칭이므로 축이 두 $x$ 값의 중점 $x=-1$ 이라는 것으로 한 줄에 $a=2$ 를 얻는다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "대칭 조건으로 축을 정한 뒤 제한된 범위에서 최댓값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f(-5)=f(3)$ 을 그대로 전개해도 풀리지만 중점 $=$ 축이라는 대칭 관찰을 쓰면 즉답이 되고,
    이것이 이 문항의 유일한 변별 지점이다(SYM d2). 최솟값 $1$ 로 $b$ 를 얻는 단계와 $-2\le x\le 2$
    에서 축 $x=-1$ 로부터 먼 끝 $x=2$ 를 고르는 단계는 표준 절차다. STEP 1 ★2 출발 유지.
  tier: star_2
  mechanism_primary: '$f(-5)=f(3)$ → 축 $x=-1$ → $f(x)=(x+1)^2+b-1$, 최솟값 $b-1=1$ → 축에서 먼 $x=2$ 에서 최댓값'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/152-317.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '대칭인 두 값 $-5$·$3$, 최솟값 1, 구간 $[-2,2]$. 제약: 두 값의 합이 짝수여야 축의 $x$좌표가 정수가 되고, **축이 구간의 중앙에서 벗어나 있어야** 먼 끝점을 고르는 단계가 살아 있다. 축이 구간 밖으로 나가면 최댓값 위치가 바뀌므로 구간과 함께 확인한다.'
    creative: '(1) $f(-5)=f(3)$ 을 $f(1-x)=f(1+x)$ 같은 항등식으로 주면 대칭 해석이 한 단계 깊어져 ★3 (2) 최솟값 대신 $f(0)$ 의 값을 주면 대칭만 남아 ★2 유지 (3) 구간을 $t\le x\le t+4$ 로 두고 최댓값을 $t$ 의 함수로 묻게 하면 152-321 과 같은 이중 구조 · ★4.'
```

```yaml
- id: GN-CM1-152-318
  page: 152
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $-1\le x\le 2$ 에서 $y=(x^2-2x-1)^2-2(x^2-2x)+1$ 의 최댓값 $M$, 최솟값 $m$ 일 때
    $M+m$ 의 값. 5지선다.
  category: '꼴이 다른 두 덩어리를 같은 공통부분 $t=x^2-2x$ 로 통일 → $x$ 구간을 $t$ 구간으로 옮기기 → $t$ 의 이차함수로 최대·최소'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '앞 덩어리는 $x^2-2x-1$, 뒤 덩어리는 $x^2-2x$ 로 서로 달라 곧바로 치환되지 않는다. $t=x^2-2x$ 로 잡고 앞을 $(t-1)^2$ 로 다시 써야 한 문자 이차식이 된다'
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$t=(x-1)^2-1$ 에서 $-1\le x\le 2$ 를 $-1\le t\le 3$ 으로 옮긴다 — 끝점 대입만으로는 얻을 수 없고 $t$ 의 꼭짓점 $x=1$ 이 구간 안임을 써야 한다'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "공통부분이 있는 함수의 최대·최소(덩어리 통일 + 범위 전이)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    149 쪽 유형에 「덩어리가 한 눈에 같아 보이지 않는다」는 층이 하나 더 얹혔다. 통일해 정리하면
    $y=(t-2)^2-2$, $t\in[-1,3]$ 이 되고 최솟값은 꼭짓점 $t=2$, 최댓값은 먼 끝 $t=-1$ 에서 난다.
    통찰 2개(EQV d2 둘)·M_total 9 로 STEP 1 ★2 출발에서 +1 → ★3.
  tier: star_3
  mechanism_primary: '$t=x^2-2x$ 로 통일 → $y=(t-1)^2-2t+1=(t-2)^2-2$ → $x\in[-1,2]$ 를 $t\in[-1,3]$ 으로 → 꼭짓점 $t=2$ 최소·먼 끝 $t=-1$ 최대'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/152-318.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 덩어리의 상수 차이($-1$), 바깥 계수, 구간 $[-1,2]$. 제약: **두 덩어리의 이차·일차 부분이 같아야** 통일이 가능하고(상수만 달라야 한다), $x$ 구간 안에 $t$ 의 꼭짓점이 있어야 범위 전이 함정이 유지된다. 선택지가 정수로 떨어지도록 바깥 계수를 잡는다.'
    creative: '(1) 두 덩어리의 상수 차이를 키우면 통일 단계의 계산만 늘고 통찰은 그대로라 ★3 유지(질 저하 방향) (2) $t$ 의 이차함수 꼭짓점을 $t$ 범위 밖으로 내보내면 함정이 겹쳐 ★4 (3) $M+m$ 대신 $M$ 을 주는 $x$ 의 값을 묻게 하면 $t\to x$ 역추적이 붙어 ★4.'
```

```yaml
- id: GN-CM1-152-319
  page: 152
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    수익 $y$ 만 원이 입장권 가격 $x$ 만 원에 대해 $y=-200x^2+1600x-1700$ 일 때
    수익이 최대가 되는 가격과 그때의 수익.
  category: '주어진 이차식을 완전제곱 → 꼭짓점의 $x$좌표가 가격, $y$좌표가 최대 수익'
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수의 최대·최소의 활용 — 가격과 수익"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    식이 완성된 채로 주어져 모델링이 없고, 범위 제한도 없어 꼭짓점이 곧 답이다. 200 을 묶어내는
    계산 부담(Mk 2) 외에 판단할 것이 없다. 통찰 없음·M_total 5 → −1 을 적용해 STEP 1 ★2
    출발에서 ★1. [분류 이슈] 벤더 연습문제 구역 신호와 1단 차이.
  tier: star_1
  mechanism_primary: '$-200(x-4)^2+1500$ → 가격 $x=4$ 만 원, 최대 수익 1500 만 원'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '가격: $4$만 원, 수익: $1500$만 원'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/152-319.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수 $-200$, $1600$, $-1700$. 제약: 꼭짓점의 $x$좌표가 실제 가격으로 자연스러운 정수(한 자리~두 자리)가 되도록 일차항 계수를 이차항 계수의 짝수배로 잡고, 최대 수익이 양수가 되도록 상수항을 조정한다.'
    creative: '(1) 식을 주지 않고 「가격을 1만 원 올릴 때마다 관객이 몇 명 줄어든다」는 서술로 바꾸면 모델링이 필요해 I-RT d2 · ★3 (2) 가격에 $2\le x\le 3$ 같은 현실 제약을 붙이면 꼭짓점이 범위 밖이 되어 끝점 판정 · ★2 (3) 「수익이 1000만 원 이상이 되는 가격의 범위」를 묻게 하면 이차부등식 · ★3.'
```

### 연습문제 STEP 2

```yaml
- id: GN-CM1-152-320
  page: 152
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $-3\le x\le 3$ 에서 $y=x^2-4|x|+5$ 의 최댓값과 최솟값의 차.
  category: '$|x|=t$ 로 보고 우함수 대칭을 이용해 $0\le t\le 3$ 으로 환원 → $t$ 의 이차함수로 최대·최소'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$x^2$ 과 $|x|$ 만 있어 $y$ 가 $x=0$ 에 대해 대칭임을 보고 $t=|x|$, $0\le t\le 3$ 한쪽만 조사한다 — 절댓값 구간을 둘로 나눠 각각 푸는 표준 분기를 절반으로 줄이는 착안'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "절댓값을 포함한 함수의 최대·최소"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    대칭을 쓰지 않으면 $x\ge 0$·$x<0$ 두 구간을 따로 처리해야 하고, 최솟값이 $x=\pm 2$ 두 곳에서
    난다는 점 때문에 한쪽만 보고 답을 놓치기 쉽다. $t$ 의 꼭짓점 $t=2$ 가 $[0,3]$ 안이고 최댓값은
    $t=0$(먼 끝이 아니라 가까운 끝)에서 나 경계 판단도 한 번 더 필요하다. STEP 2 ★3 출발 유지.
  tier: star_3
  mechanism_primary: '$t=|x|\in[0,3]$ → $y=t^2-4t+5=(t-2)^2+1$ → $t=2$ 에서 최소 1 · $t=0$ 에서 최대 5 → 차 4'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/152-320.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$|x|$ 의 계수 $-4$, 상수 5, 구간 $[-3,3]$. 제약: **구간이 원점에 대해 대칭이어야** 우함수 환원이 성립한다. $t$ 의 꼭짓점 $t=2$ 가 $[0,3]$ 안에 남도록 계수를 잡고, 꼭짓점이 밖으로 나가면 최솟값이 끝점으로 옮겨 가 성격이 달라진다.'
    creative: '(1) 구간을 $-1\le x\le 3$ 처럼 비대칭으로 바꾸면 대칭 환원이 막혀 두 구간을 따로 봐야 하고 ★4 (2) $y=|x^2-4x+5|$ 처럼 절댓값을 바깥에 씌우면 그래프 접기 해석이 필요해 I-RT d2 · ★4 (3) 최댓값과 최솟값의 차 대신 「최솟값을 주는 $x$ 의 개수」를 묻게 하면 대칭 관찰이 곧 답 · ★3 유지.'
```

```yaml
- id: GN-CM1-152-321
  page: 152
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $y=-x^2-2ax+4a-1$ 의 최댓값을 $f(a)$ 라 할 때, $-5\le a\le 0$ 에서
    $f(a)$ 의 최댓값과 최솟값의 합. 5지선다($a$ 는 실수).
  category: '$a$ 를 상수로 보고 $x$ 에 대해 완전제곱 → 최댓값을 $a$ 의 이차식 $f(a)$ 로 표현 → 이번에는 $a$ 를 변수로 보고 제한 범위에서 다시 최대·최소'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$a$ 의 역할이 두 번 바뀐다 — 먼저 $a$ 를 고정한 채 $x$ 에 대해 최댓값 $a^2+4a-1$ 을 구하고, 그 결과를 다시 $a$ 의 이차함수로 읽어야 한다. 이 역할 교체를 인식하지 못하면 출발하지 못한다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "계수에 문자가 있는 이차함수의 최댓값을 다시 최대·최소하기(이중 최대·최소)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    개별 단계는 모두 표준(완전제곱 두 번)이지만 「최댓값이 다시 함수가 된다」는 구조 인식이 관문이다.
    $f(a)=(a+2)^2-5$ 에서 꼭짓점 $a=-2$ 가 $[-5,0]$ 안이라 최솟값은 꼭짓점, 최댓값은 축에서 먼
    끝 $a=-5$ 에서 난다. 통찰 1개 d2·M_total 8 로 STEP 2 ★3 출발 유지.
    [분류 이슈] 역할 교체와 재최적화를 통찰 2개로 세면 ★4 후보.
  tier: star_3
  mechanism_primary: '$-(x+a)^2+a^2+4a-1$ → $f(a)=a^2+4a-1=(a+2)^2-5$ → $[-5,0]$ 에서 최소 $-5$(꼭짓점)·최대 4(먼 끝 $a=-5$) → 합'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/152-321.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '일차항 계수 $-2a$, 상수항 $4a-1$, $a$ 의 범위 $[-5,0]$. 제약: $x$ 에 대한 이차항 계수가 음수여야 최댓값 $f(a)$ 가 존재하고, **$f(a)$ 의 꼭짓점이 $a$ 의 구간 안**에 있어야 두 번째 단계에서도 꼭짓점 판정이 살아 있다. 구간을 축 한쪽으로 몰면 끝점 두 개 비교로 단순해진다.'
    creative: '(1) $f(a)$ 를 최솟값으로 바꾸려면 $x^2$ 의 계수를 양수로 두어야 하며 골조는 동일 · ★3 (2) $x$ 에 범위를 붙이면 $f(a)$ 가 구간별로 다른 식이 되는 구간 나눔이 생겨 I-MI d3 · ★5 후보 (3) $f(a)$ 의 최댓값만 묻고 범위를 없애면 한 단계가 사라져 ★2.'
```

```yaml
- id: GN-CM1-152-322
  page: 152
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $a\le x\le 0$ 에서 $y=-x^2-2x+1$ 의 함숫값의 범위가 $-2\le y\le b$ 일 때
    실수 $a$, $b$ 에 대한 $a+b$ 의 값($a<0$).
  category: '치역이 주어지고 정의역의 왼쪽 끝을 역추적 → 꼭짓점 $x=-1$ 이 정의역 안인지에 따라 갈리는 두 경우를 따져 하나를 기각'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '정의역에서 치역을 구하는 평소 방향과 반대로, 치역의 최솟값 $-2$ 가 어느 지점에서 나야 하는지를 먼저 분석해 정의역의 끝 $a$ 를 역추적한다'
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$a$ 의 위치에 따라 꼭짓점 $x=-1$ 이 정의역에 포함되는 경우와 아닌 경우로 갈리고, 포함되지 않는 경우($-1<a<0$)는 최솟값이 $x=0$ 의 값 1 이 되어 $-2$ 와 모순되므로 기각된다'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "치역이 주어질 때 정의역 구하기(역방향 · 꼭짓점 포함 경우 나눔)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    이 범위에서 방향이 뒤집힌 유일한 문항이다. 최댓값 $b$ 가 꼭짓점 값 2 인지 끝점 값인지가
    $a$ 에 달려 있고, $a$ 는 다시 최솟값 조건으로 정해지는 순환을 경우 나눔으로 끊어야 한다.
    $-a^2-2a+1=-2$ 의 두 근 $-3$, $1$ 중 $a<0$ 으로 $1$ 도 걸러진다. 통찰 2개(BW·MI)로
    STEP 2 ★3 출발에서 +1 → ★4. ★4 저노출 유형 요건(I-BW) 충족.
  tier: star_4
  mechanism_primary: '$-(x+1)^2+2$ → 꼭짓점 포함 경우만 살아남음 → 최솟값은 먼 끝 $x=a$ 에서 $-a^2-2a+1=-2$ → $a=-3$, $b=2$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/152-322.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '함수의 계수와 치역의 두 끝 $-2$·$b$, 정의역의 오른쪽 끝 0. 제약: 치역의 최솟값을 주는 방정식의 두 근 중 **하나만 $a<0$ 조건을 만족**해야 기각 단계가 살아 있고, 최댓값이 꼭짓점 값이 되도록 꼭짓점이 정의역 안에 들어와야 한다. 근이 모두 조건을 만족하면 답이 둘이 된다.'
    creative: '(1) 정의역을 $a\le x\le c$ 로 양쪽 다 미지수로 두면 경우가 늘어 ★5 후보 (2) $a<0$ 조건을 빼면 두 답을 모두 찾아야 해 I-VF d2 추가 · ★4 유지 (3) 치역의 최댓값만 주고 최솟값을 묻게 하면 역추적 방향이 한 번 더 꺾여 ★4.'
```

```yaml
- id: GN-CM1-153-323
  page: 153
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    두 양수 $p$, $q$ 에 대하여 $f(x)=-x^2+px-q$ 가 ㈎ 그래프가 $x$축에 접한다
    ㈏ $-p\le x\le p$ 에서 최솟값이 $-54$ 를 만족시킬 때 $p^2+q^2$ 의 값.
  category: '접함 조건을 꼭짓점이 $x$축 위에 있다는 것으로 옮겨 $f(x)=-\left(x-\dfrac{p}{2}\right)^2$ 확정 → 구간의 두 끝 중 축에서 먼 쪽에서 최솟값 → $p$, $q$ 결정'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「$x$축에 접한다」를 판별식 $=0$ 을 거쳐 $q=\dfrac{p^2}{4}$ 로 옮기고, 결국 $f(x)=-\left(x-\dfrac{p}{2}\right)^2$ 라는 꼭짓점이 $x$축 위인 꼴로 확정한다 — 미지수 두 개가 하나로 줄어든다'
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '축 $x=\dfrac{p}{2}$ 는 구간 $[-p,\,p]$ 의 중앙이 아니라 오른쪽에 치우쳐 있으므로, 축에서 먼 끝은 $x=-p$(거리 $\dfrac{3p}{2}$)임을 대칭 거리 비교로 읽어야 한다'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "두 조건(접함 · 제한 범위 최솟값)으로 이차함수의 미정계수 구하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    구간의 끝이 계수 $p$ 와 같은 문자라 축과 구간이 함께 움직이는 것이 이 문항의 특징이다.
    $x=p$ 쪽을 먼 끝으로 잘못 잡으면 $p^2$ 이 9 배 어긋난다. 접함 → 꼭짓점 확정(EQV d2)과
    먼 끝 판정(SYM d2) 두 통찰로 STEP 2 ★3 출발에서 +1 → ★4. 기출 태그는 통찰이 이미 반영돼 +0.
    ★4 저노출 유형 요건(I-SYM) 충족.
  tier: star_4
  mechanism_primary: '접함 → $f(x)=-\left(x-\dfrac{p}{2}\right)^2$, $q=\dfrac{p^2}{4}$ → 먼 끝 $x=-p$ 에서 최솟값 $-\dfrac{9p^2}{4}=-54$ → $p^2=24$, $q=6$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$60$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/153-323.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '최솟값 $-54$ 와 구간의 배율(여기서는 $[-p,p]$). 제약: **구간의 끝이 계수와 같은 문자여야** 축이 구간의 중앙에서 벗어난다는 이 문항의 핵심이 유지된다. 최솟값은 $-\dfrac{9p^2}{4}$ 꼴이므로 $p^2$ 이 정수가 되도록 4 의 배수에 9 를 곱한 수로 잡는다. $p$, $q$ 가 양수라는 조건이 부호 분기를 막아 준다.'
    creative: '(1) 구간을 $[-2p,\,p]$ 처럼 비대칭으로 더 벌리면 먼 끝 판정이 더 강해지고 ★4 유지 (2) 접한다 대신 「$x$축과 두 점에서 만나고 두 근의 차가 4」로 바꾸면 판별식·근과 계수로 옮겨 I-XU · ★4 (3) 최솟값 대신 최댓값을 주면 꼭짓점 값 0 이 되어 조건이 무의미해지므로 쓸 수 없다.'
```

```yaml
- id: GN-CM1-153-324
  page: 153
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $y=-2(x^2+2x-1)^2+12(x^2+2x-1)-k$ 의 최댓값이 $15$ 일 때 실수 $k$ 의 값.
  category: '공통부분 $t=x^2+2x-1$ 치환 → $t\ge -2$ 도출 → $t$ 의 이차함수의 꼭짓점 $t=3$ 이 범위 안임을 확인 → 최댓값 식으로 $k$ 결정'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$t=(x+1)^2-2\ge -2$ 라는 범위를 구한 뒤 $t$ 의 이차함수의 꼭짓점 $t=3$ 이 그 범위 안임을 확인해야 최댓값을 꼭짓점 값 $18-k$ 로 쓸 수 있다 — 확인을 건너뛰면 149-310 형 함정에 걸린다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "공통부분이 있는 함수의 최대·최소 — 미정계수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    149 쪽 치환 유형에 미정계수 $k$ 가 얹힌 결합 문항이다. $t$ 의 범위 확인이 필요하지만 이번에는
    꼭짓점이 범위 안이라 함정이 비껴가고, 그 뒤 $18-k=15$ 한 줄이면 끝난다. 통찰 1개 d2·
    M_total 8 로 STEP 2 ★3 출발 유지.
  tier: star_3
  mechanism_primary: '$t=x^2+2x-1\ge -2$ → $y=-2(t-3)^2+18-k$, 꼭짓점 $t=3$ 범위 안 → 최댓값 $18-k=15$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/153-324.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '공통부분의 상수 $-1$, 바깥 계수 $-2$·12, 목표 최댓값 15. 제약: **바깥 꼭짓점의 $t$좌표가 공통부분의 최솟값 이상**이어야 이 문항이 표준형으로 남는다(미만이면 149-310 형 함정 문항이 되고 난이도가 오른다). $k$ 가 정수가 되도록 목표 최댓값을 잡는다.'
    creative: '(1) 바깥 꼭짓점을 $t$ 범위 밖으로 내보내면 최댓값이 끝점 값이 되어 $k$ 를 구하는 식이 바뀌고 ★4 (2) 최댓값 대신 최솟값을 주면 $t\ge -2$ 에서 아래로 무한히 내려가 존재하지 않으므로 판정형 문항으로 쓸 수 있다 · ★3 (3) $k$ 를 $x$ 의 계수 쪽으로 옮기면 공통부분 자체가 움직여 ★4.'
```

```yaml
- id: GN-CM1-153-325
  page: 153
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $y=(x+1)^2$ 위의 점 P 에서 $x$축에 평행한 직선을 그어 직선 $y=x-3$ 과 만나는 점을 Q 라 할 때
    선분 PQ 의 길이의 최솟값.
  category: 'P 의 $x$좌표를 변수로 두고 같은 $y$값에서 직선 위 점의 $x$좌표를 구하기 → PQ 를 두 $x$좌표의 차로 표현 → 이차함수의 최솟값'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「$x$축에 평행한 선분의 길이」라는 기하 조건을 두 점의 $y$좌표가 같다는 것으로 읽고, 길이를 두 $x$좌표의 차라는 대수식으로 옮긴다 — 포물선 쪽 점을 기준 변수로 삼아야 식이 이차식이 된다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이차함수의 최대·최소의 활용 — 포물선과 직선 사이 수평 선분의 길이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    직선 위 점의 $x$좌표를 $y+3$ 으로 되읽는 한 단계가 관문이고, 그 뒤 PQ $=p^2+p+4$ 는 판별식이
    음수라 절댓값을 벗길 수 있어 표준 이차함수 최솟값으로 끝난다. 세로가 아니라 가로 길이라는
    점을 놓치면 시작이 막힌다. 통찰 1개(RT d2)로 STEP 2 ★3 출발 유지.
  tier: star_3
  mechanism_primary: 'P$(p,\,(p+1)^2)$ → Q 의 $x$좌표 $=(p+1)^2+3$ → PQ $=p^2+p+4=\left(p+\dfrac{1}{2}\right)^2+\dfrac{15}{4}$ → 최솟값'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{15}{4}$'
  answer_source: "답지"
  figure: crop:fig-153-325.png
  latex: latex-bank/gn-cm1/items/153-325.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '포물선 $y=(x+1)^2$ 의 꼭짓점과 직선 $y=x-3$ 의 절편. 제약: **PQ 를 나타내는 이차식의 판별식이 음수**여야 절댓값을 그대로 벗길 수 있고(포물선과 직선이 만나지 않아야 한다), 최솟값이 간단한 분수가 되도록 직선의 절편을 잡는다. 그림의 P·Q 라벨 위치는 고정.'
    creative: '(1) 직선을 $x$축에 수직인 방향으로 바꿔 세로 길이를 묻게 하면 「두 함수의 차」 골조가 되어 ★3 유지 (2) 포물선과 직선이 만나도록 절편을 올리면 PQ 의 최솟값이 0 이 되어 문제가 무너지므로 금지 (3) P 를 포물선 위, Q 를 다른 포물선 위로 두면 차가 이차식으로 남아 ★4.'
```

```yaml
- id: GN-CM1-153-326
  page: 153
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    실수 $x$, $y$ 에 대하여 $-1\le y\le 3$ 이고 $y=x+1$ 일 때 $x^2+y^2+2$ 의
    최댓값 $M$, 최솟값 $m$ 에 대한 $M-4m$ 의 값.
  category: '조건식으로 한 문자 소거 → $y$ 의 범위를 $x$ 의 범위로 옮기기 → 제한된 범위에서 이차함수의 최대·최소'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$y$ 를 소거해 $x$ 의 이차식으로 만드는 것과 동시에 **조건 $-1\le y\le 3$ 도 $-2\le x\le 2$ 로 함께 옮겨야** 한다 — 범위를 옮기지 않으면 꼭짓점 값만 답하고 최댓값을 놓친다'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "조건식과 범위가 있는 이차식의 최대·최소"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    151-315 의 소거 골조에 범위 전이가 얹힌 문항이다. $2x^2+2x+3$ 의 꼭짓점 $x=-\dfrac{1}{2}$ 은
    범위 안이라 최솟값은 꼭짓점, 최댓값은 축에서 먼 끝 $x=2$ 에서 난다. 범위를 옮기는 한 단계가
    통찰이고 나머지는 표준. 통찰 1개 d2·M_total 8 로 STEP 2 ★3 출발 유지.
  tier: star_3
  mechanism_primary: '$y=x+1$ 대입 → $2x^2+2x+3$, $-1\le y\le 3$ → $-2\le x\le 2$ → 꼭짓점 $x=-\dfrac{1}{2}$ 에서 $m$ · 먼 끝 $x=2$ 에서 $M$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/153-326.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '조건식 $y=x+1$ 의 기울기·절편, $y$ 의 범위 $[-1,3]$, 목표식의 상수 2. 제약: **소거 후 꼭짓점이 옮겨진 $x$ 범위 안**에 있어야 최솟값이 꼭짓점 값이 되고, 축이 범위의 중앙에서 벗어나야 먼 끝 판정이 살아 있다. 범위를 $x$ 로 바로 주면 이 문항의 통찰이 사라진다.'
    creative: '(1) 범위를 $x$ 에 대해 직접 주면 범위 전이가 빠져 ★2 (2) 조건식을 $2x+y=3$ 처럼 대칭적이지 않게 두면 소거 방향 선택이 생겨 I-SC d1 · ★3 유지 (3) 목표식을 $x^2+y^2$ 로 두고 조건을 $x+y=k$ 로 일반화하면 매개변수가 붙어 ★4.'
```

### 연습문제 실력 UP

```yaml
- id: GN-CM1-153-327
  page: 153
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $x\ge 3$ 에서 $y=2x^2-8kx$ 의 최솟값이 $16$ 일 때 실수 $k$ 의 값.
  category: '꼭짓점 $x=2k$ 가 반직선 $x\ge 3$ 안인지로 경우 나눔 → 각 경우의 최솟값 식을 16 과 비교 → 모순인 경우를 기각하고 남은 해가 경우의 조건을 만족하는지 재확인'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '꼭짓점의 위치 $x=2k$ 가 미지수에 달려 있어 $2k\ge 3$(꼭짓점에서 최소)과 $2k<3$(끝점 $x=3$ 에서 최소) 두 시나리오를 모두 세워야 한다 — 구간이 한쪽으로 열려 있어 끝점이 하나뿐인 것도 함께 읽어야 한다'
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$2k\ge 3$ 경우는 최솟값이 $-8k^2=16$ 이 되어 실수해가 없으므로 기각되고, $2k<3$ 경우에서 얻은 $k=\dfrac{1}{12}$ 가 실제로 $2k<3$ 을 만족하는지 되돌려 확인해야 답이 확정된다'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "한쪽으로 열린 범위에서 최솟값이 주어질 때 미정계수 구하기(경우 나눔 · 기각)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    이 단원에서 꼭짓점 위치가 미지수에 달린 첫 문항이라, 지금까지처럼 위치를 눈으로 확인할 수 없고
    경우를 세워야 한다. 두 경우 중 하나가 「제곱이 음수」라는 모순으로 기각되는 구조가 핵심이고
    검증 없이 꼭짓점 경우만 잡으면 답이 없다고 결론짓게 된다. 통찰 2개(MI·VF)로 실력 UP ★4 유지.
    ★4 저노출 유형 요건(I-VF) 충족.
  tier: star_4
  mechanism_primary: '$2(x-2k)^2-8k^2$ → $2k\ge 3$ 이면 $-8k^2=16$ 모순으로 기각 → $2k<3$ 이면 $x=3$ 에서 $18-24k=16$ → $k=\dfrac{1}{12}$ 가 $2k<3$ 을 만족'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{1}{12}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/153-327.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이차항 계수 2, 일차항 계수 $-8k$, 경계 3, 목표 최솟값 16. 제약: **꼭짓점 경우의 최솟값이 음수 꼴($-8k^2$)이고 목푯값이 양수**여야 한 갈래가 깔끔하게 기각된다. 목푯값을 음수로 바꾸면 두 갈래가 모두 살아나 답이 둘이 될 수 있으니 그때는 발문을 「모든 $k$ 의 합」으로 바꾼다.'
    creative: '(1) 목푯값을 음수로 바꿔 두 경우가 모두 살아나게 하면 답이 두 개가 되어 I-VF 가 더 강해지고 ★5 후보 (2) 범위를 $x\le 3$ 으로 뒤집으면 부호 처리가 반대가 되는 쌍둥이 · ★4 유지 (3) 범위를 닫힌 구간 $3\le x\le 5$ 로 바꾸면 경우가 셋으로 늘어 ★5 후보.'
```

```yaml
- id: GN-CM1-153-328
  page: 153
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    한 변의 길이가 2 인 정삼각형 ABC 에서 변 BC 의 중점을 P, 선분 AP 위의 점을 Q 라 하고
    PQ $=x$ 라 할 때 $\seg{AQ}^2+\seg{BQ}^2+\seg{CQ}^2$ 이 $x=a$ 에서 최솟값 $m$ 을 가진다.
    $\dfrac{m}{a}$ 의 값. 5지선다($0<x<\sqrt{3}$).
  category: '정삼각형의 중선이 수직이등분선임을 써서 세 선분의 제곱을 $x$ 의 식으로 옮기기 → 대칭으로 BQ 와 CQ 를 한 번에 처리 → $x$ 의 이차함수 최솟값'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '세 선분의 길이의 제곱이라는 기하량을 AP $=\sqrt{3}$ 과 AP $\perp$ BC 를 써서 AQ $=\sqrt{3}-x$, BQ$^2=$ CQ$^2=1+x^2$ 이라는 $x$ 의 식으로 옮긴다 — 피타고라스를 쓸 직각을 어디서 찾을지가 관문'
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: 'P 가 BC 의 중점이고 Q 가 중선 위에 있으므로 BQ $=$ CQ 임을 읽어 두 항을 한 번에 $2(1+x^2)$ 으로 처리한다'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "이차함수의 최대·최소의 활용 — 도형(선분 길이의 제곱의 합)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    식을 세우기 전까지가 전부인 문항이다. 세우고 나면 $3x^2-2\sqrt{3}x+5=3\left(x-\dfrac{\sqrt{3}}{3}\right)^2+4$
    로 표준 절차이고, 최솟값을 주는 $x$ 가 개구간 $0<x<\sqrt{3}$ 안이라 범위 판정도 비껴간다.
    무리수 계수를 끌고 완전제곱하는 계산 부담이 있고 마지막에 $\dfrac{m}{a}$ 로 되읽는 단계가 하나 더 있다.
    통찰 2개(RT d2·SYM d1)로 실력 UP ★4 유지. 기출 태그는 통찰에 이미 반영돼 +0.
    ★4 저노출 유형 요건(I-RT·I-SYM) 충족.
  tier: star_4
  mechanism_primary: 'AP $=\sqrt{3}$·AP $\perp$ BC → AQ$^2=(\sqrt{3}-x)^2$, BQ$^2=$CQ$^2=1+x^2$ → 합 $=3\left(x-\dfrac{\sqrt{3}}{3}\right)^2+4$ → $a$, $m$ 을 읽어 $\dfrac{m}{a}$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '③'
  answer_source: "답지"
  figure: crop:fig-153-328.png
  latex: latex-bank/gn-cm1/items/153-328.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '정삼각형의 한 변의 길이 2. 제약: 변의 길이를 $s$ 로 두면 높이가 $\dfrac{\sqrt{3}}{2}s$ 가 되어 무리수가 따라 들어오므로, 선택지가 $k\sqrt{3}$ 꼴로 정리되도록 변의 길이를 짝수로 잡는다. **최솟값을 주는 $x$ 가 개구간 안**에 남아야 하며(높이의 $\dfrac{1}{3}$ 지점 = 무게중심), 그림의 A·B·C·P·Q 배치는 고정.'
    creative: '(1) Q 를 중선 위가 아니라 삼각형 내부 임의의 점으로 두면 두 변수 문제가 되어 공통수학1 범위를 벗어난다 (2) 정삼각형을 이등변삼각형으로 바꾸면 BQ $=$ CQ 대칭은 남고 수치만 일반화돼 ★4 유지 (3) 제곱의 합 대신 AQ $+$ BQ $+$ CQ 를 묻게 하면 이차함수로 정리되지 않으므로 쓸 수 없다 (4) 최솟값이 무게중심에서 난다는 사실을 묻는 서술형으로 바꾸면 I-SYM d2 · ★5 후보.'
```

## 표본 판정 요약 (29문)

- ★ 분포: ★1 5 · ★2 9 · ★3 11 · ★4 4 · ★5 0
- 통찰형 21 · 절차형 8 · premium 0
- 통찰 유형 분포: I-EQV 14 · I-SYM 5 · I-RT 4 · I-MI 2 · I-BW 1 · I-VF 1 (총 라벨 27개 · depth 1 은 6개, depth 2 는 21개, depth 3 은 0개)
- 구역별: 개념원리 익히기 4문(★1·★1·★1·★2 · 전부 절차형) · 필수·발전 예제 10문(필수 예제 ★2·★2·★3·★3 / 확인체크 ★2·★2·★3·★3·★1·★2) · 특강 2문(★2·★2) · 연습문제 STEP 1 4문(★3·★2·★3·★1) · STEP 2 7문(★3·★3·★4·★4·★3·★3·★3) · 실력 UP 2문(★4·★4)
- type_hint 상위: 「이차함수의 최대·최소의 활용」 6(150-e10 · 150-312 · 150-313 · 152-319 · 153-325 · 153-328) · 「공통부분이 있는 함수의 최대·최소」 5(149-e9 · 149-310 · 149-311 · 152-318 · 153-324) · 「최댓값·최솟값이 주어질 때 미정계수 구하기」 5(148-e8 · 148-309 · 152-316 · 153-323 · 153-327) · 「제한된 범위에서의 이차함수의 최대·최소」 4(147-306 · 147-307 · 148-e7 · 148-308) · 「범위 제한 없는 이차함수의 최대·최소 · 이차식의 최대·최소(특강)」 5(147-304 · 147-305 · 151-314 · 151-315 · 153-326)
- 대상층: 하위권 5 · 중하위권 3 · 중위권 14 · 중상위권 4 · 상위권 3
- 그림: 4문(`crop:fig-150-e10.png` · `crop:fig-150-313.png` · `crop:fig-153-325.png` · `crop:fig-153-328.png`) · 소문항 묶음 6문(최대 4개)
- 전사 답과 골조가 어긋난 문항: 0

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

공통 전제 하나: 이 단원의 확인체크 6문(148-308 · 148-309 · 149-310 · 149-311 · 150-312 · 150-313)과 특강 확인체크 2문(151-314 · 151-315)은 「개념원리 익히기」가 아니라 각각 「필수·발전 예제」·「특강」 구역 안에서 직전 예제의 쌍둥이 문제로 배치돼 있다. 그래서 벤더 신호 표의 「확인체크 → ★1 출발」이 아니라 **직전 예제와 같은 ★2 출발**을 적용했다(03 단원과 같은 관례). 카탈로그를 만들 때 이 구역 관례를 명시해야 한다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-147-307 | 구역 신호는 개념원리 익히기 ★1 이나 꼭짓점 포함·불포함 두 경우를 모두 훑고 M_total 7 이라 ★2 로 올림. 「꼭짓점이 범위 안인가」 분기를 통찰로 세면 통찰형 ★2, 표준 절차로 보면 절차형 ★1 | ★1 / ★2 |
| GN-CM1-149-310 | 통찰 수 기준으로는 1개(EQV d2)라 확인체크 ★2 유지가 맞지만, $t$ 범위 밖 꼭짓점 확인이 정답 39 와 오답 40 을 가르는 유일한 단계라 ★3 으로 올림 | ★2 / ★3 |
| GN-CM1-152-316 | 벤더 STEP 1(★2 출발)인데 문자 계수 완전제곱 · 구간 밖 꼭짓점 · 연립까지 M_total 9 라 ★3. STEP 1 안에서는 최상단 | ★2 / ★3 |
| GN-CM1-152-319 | 벤더 STEP 1(★2 출발)이나 식이 완성된 채로 주어지고 통찰 0 · M_total 5 → −1 규칙대로 ★1 로 내림. 활용 문항이라는 이유로 ★2 를 주지 않았다 | ★1 / ★2 |
| GN-CM1-152-321 | 「$a$ 의 역할 교체」와 「$f(a)$ 재최적화」를 한 단계(EQV d2 1개)로 볼지 두 단계로 볼지에 따라 ★3/★4 가 갈림. 개별 계산은 모두 표준이라 1개로 셈 | ★3 / ★4 |
| GN-CM1-153-323 | step 2 의 「축에서 먼 끝점 고르기」를 I-SYM 으로 잡았으나 이 단원에서 반복된 표준 절차로 보면 통찰 1개가 되어 ★3. 구간의 끝이 계수 $p$ 와 같은 문자라 실제 오답률이 높을 것으로 보고 ★4 유지 | ★3 / ★4 |
| GN-CM1-153-328 | 기출·실력 UP 이고 통찰 2개(RT d2 + SYM d1)이나, 식을 세운 뒤는 전형적이라 ★5 로 올리지 않았다. 무리수 계수 계산 부담은 §2.11 에 따라 ★ 상승 신호로 쓰지 않음 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 「공통부분이 있는 함수의 최대·최소」(5문)는 반드시 **(a) 치환변수의 꼭짓점이 범위 안**(149-e9 · 149-311 · 152-318 · 153-324)과 **(b) 범위 밖**(149-310) 둘로 나눠야 한다. (b) 는 범위 확인을 건너뛰면 확정적으로 틀리므로 base ★ 가 한 단계 높다. ② 「최댓값·최솟값이 주어질 때 미정계수」(5문)도 **꼭짓점 위치가 수치로 고정**(148-e8 · 148-309)인 것과 **미지수에 달려 경우를 나눠야 하는 것**(153-327 · 153-323)을 분리해야 한다. 후자는 I-MI·I-VF 가 붙어 base ★ 4 급이다.
- **통합해도 될 유형**: 147-304 · 147-305(범위 제한 없는 최대·최소)와 147-306 · 147-307 · 148-e7 · 148-308(제한 범위 기본형)은 같은 「꼭짓점 → 부호 판정 → (필요하면) 끝점 비교」 골조이므로 하나의 유형으로 묶고 **범위 제한 유무**와 **꼭짓점 포함 여부**를 하위 태그로 두는 편이 단순하다. 150-312 · 152-319 처럼 식이 완성된 채 주어지는 활용 문항도 이 기본형에 흡수해도 된다(모델링이 없어 활용이라 부르기 어렵다).
- **decayed_types 후보**: 이 단원에서 I-EQV 는 27개 라벨 중 14개로 사실상 학습 자산이다. 특히 「치환변수의 범위 전이」와 「최댓값 조건 → 꼭짓점 식」 두 패턴이 반복되므로, 카탈로그 작성 시 17 단원의 감쇠 대상 상위 유형으로 I-EQV 를 올려 depth 3 자동 강등 대상으로 검토한다. 반대로 I-BW·I-VF·I-MI 는 각각 1~2회뿐이라 이 단원의 저노출 통찰이며 ★4~5 슬롯 설계에 우선 배치할 후보다.
