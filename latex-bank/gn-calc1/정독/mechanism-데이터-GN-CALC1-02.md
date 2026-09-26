---
name: mechanism-데이터-GN-CALC1-02
description: 개념원리 미적분Ⅰ 02 우극한과 좌극한(1/1 · 18~19쪽 5문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅰ · 전사본 latex-bank/gn-calc1
  section: 02 우극한과 좌극한
  unit_code: CALC1-02
  part: "1/1"
  extract_range: "18~19쪽 · 18-e5~19-10"
  total_problems: 5
  unit_total: 5
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc1/items/<id>.tex
  image_source: latex-bank/gn-calc1/figures/ (crops.json)
---

# 개념원리 미적분Ⅰ · 02 우극한과 좌극한 (1/1) 정독 데이터 (v1.0)

이 파일은 18~19쪽 「필수·발전 예제」 구역의 5문항(필수 예제 2 · 확인체크 3) 전수를 다룬다. 단원의 도구는 하나뿐이다 — 접근 방향을 한쪽으로 고정하고 그 방향에서만 식(또는 그래프)을 읽은 뒤, 좌·우 값이 같을 때만 극한이 있다고 판정하는 절차. 앞 두 문항은 그래프에서 읽고, 뒤 세 문항은 절댓값·가우스 기호·조각함수에서 방향별로 식을 벗겨 읽는다.

벤더 난이도 신호: 개념원리 고등은 구역과 태그가 난이도 층이다. 이 범위의 tag 「필수」는 상자 발문만 전사된 필수 예제(★2 출발)이고, tag 「확인체크」는 「개념원리 익히기」 통번호가 아니라 **필수 예제 바로 아래 붙은 확인 문항**이라 예제와 같은 골조·같은 층으로 보고 ★2 를 출발점으로 잡았다(통번호 확인체크의 ★1 출발과 구분). 여기서 M_total·통찰로 ±1 조정했다. level 필드는 전 문항 없음(`-`).

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 그래프 문항은 수치가 크롭 그림에 묶여 있어 `variation_notes.numeric` 에 그림 재작도 제약을 같이 적었다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC1-18-e5
  page: 18
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    y=f(x) 의 그래프(x=0 에서 함숫값만 0 으로 떨어지고, x=2 에서 왼쪽은 0 · 오른쪽은 3 으로 어긋남)를 보고
    ⑴~⑹ x→2+, x→2-, x→2, x→0+, x→0-, x→0 의 극한을 각각 조사.
  category: "그래프에서 한쪽 극한 읽기 → 좌우 일치 여부로 극한 존재 판정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프에서 우극한과 좌극한"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각 점에서 그래프가 왼쪽·오른쪽으로 어떤 값에 다가가는지 읽고, 두 값이 같을 때만 극한이 있다고 답하는 한 단계짜리 절차.
    x=2 는 좌 0 · 우 3 으로 어긋나 존재하지 않고, x=0 은 좌우 모두 3 이라 f(0)=0 과 달라도 극한은 3 — 속빈 점·채운 점 구분이 유일한 함정(T-경계).
    통찰 0 · M_total 4 → 필수 예제 출발점 ★2 에서 −1 하여 ★1.
    [분류 이슈] 벤더 「필수」(★2 출발)와 1단 차이. 라벨은 산식대로 ★1 로 두고 기록만 한다.
  tier: star_1
  mechanism_primary: "점마다 좌·우 접근값을 그래프에서 읽기 → 두 값 비교 → 같으면 그 값, 다르면 존재하지 않음"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $3$ ⑵ $0$ ⑶ 존재하지 않는다. ⑷ $3$ ⑸ $3$ ⑹ $3$'
  answer_source: "본문 풀이"
  figure: 'crop:fig-18-e5.png'
  latex: latex-bank/gn-calc1/items/18-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림의 눈금값(3 → 다른 정수)과 불연속점의 x 좌표(0, 2 → 1, 3)를 바꿀 수 있다. 제약: 답을 결정하는 것은 식이 아니라 속빈 점·채운 점의 위치이므로 수치를 바꾸면 크롭 그림을 같이 다시 그려야 하고, 소문항 순서(우극한 → 좌극한 → 극한)는 유지해야 ⑶ 의 존재 판정이 앞 둘의 결론으로 이어진다."
    creative: "(1) 같은 그래프에서 f(0), f(2) 의 함숫값을 함께 묻어 극한과 함숫값의 차이를 드러내기(★1 유지) (2) 좌우가 어긋나는 점을 하나 더 넣고 극한이 존재하지 않는 x 의 개수를 묻기(★2) (3) 그래프 대신 조각별 식을 주고 같은 여섯 극한을 묻기(식→그래프 전환이 필요해 I-RT 추가 · ★2)."
```

```yaml
- id: GN-CALC1-18-8
  page: 18
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    y=f(x) 의 그래프(x=-1 에서 좌우가 어긋나고, x=1 · x=2 는 속빈 점, x=4 는 왼쪽 끝점)를 보고
    ⑴~⑸ x→3+, x→4-, x→1, x→2, x→-1 의 극한을 각각 조사.
  category: "그래프에서 한쪽 극한 읽기 → 함숫값과 구분 → 극한 존재 판정"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프에서 우극한과 좌극한"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    18-e5 와 같은 읽기 절차인데 확인해야 할 점의 종류가 넓다. x=1, x=2 는 속빈 점이라 채운 점(함숫값)과 극한을 구분해야 하고(T-경계), x=4 는 오른쪽에 그래프가 없어 좌극한만 의미가 있다(T-범위) — 함정 2종이라 Mₜ=2.
    x=-1 은 좌 2 · 우 -1 로 어긋나 존재하지 않는다.
    통찰 0 · M_total 5 → 확인체크(예제 확인) 출발점 ★2 에서 −1 하여 ★1.
  tier: star_1
  mechanism_primary: "점마다 좌·우 접근값을 그래프에서 읽기 → 채운 점(함숫값)은 무시 → 두 값이 같을 때만 극한 존재"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $0$ ⑵ $3$ ⑶ $1$ ⑷ $2$ ⑸ 존재하지 않는다.'
  answer_source: "답지"
  figure: 'crop:fig-18-8.png'
  latex: latex-bank/gn-calc1/items/18-8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "속빈 점의 y 값(1, 2, 3)과 불연속점 x 좌표(-1, 1, 2, 4)를 정수 범위에서 옮길 수 있다. 제약: 채운 점은 반드시 속빈 점과 다른 높이에 두어야 함숫값≠극한 함정이 살아 있고, 끝점(x=4)에서는 한쪽 극한만 묻도록 소문항을 고정한다. 그림을 같이 다시 그려야 한다."
    creative: "(1) 묻는 점을 그대로 두고 f(1), f(2), f(-1) 의 함숫값도 함께 묻기(★1 유지) (2) 극한이 존재하는 x 를 모두 고르게 하는 보기형(★2) (3) 같은 그래프에 g(x)=f(x)+|x| 같은 합성을 얹어 좌우극한을 다시 묻기(I-RT + 부호 분리 → ★3)."
```

```yaml
- id: GN-CALC1-19-e6
  page: 19
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑷ 네 극한을 조사: 1/(x-2) 의 x→2, (x^2-1)/|x-1| 의 x→1+, (x^2-2x)/|x-2| 의 x→2-,
    [x+1] 의 x→0. 단 [x] 는 x 보다 크지 않은 최대의 정수(가우스 기호).
  category: "접근 방향 고정 → 절댓값·가우스 기호 벗기기 → 좌우 비교로 존재 판정"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 4
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "[x+1] 을 방향별 정수 구간 값으로 옮겨 읽음 — x→0- 에서는 x+1 이 1 미만이라 0, x→0+ 에서는 1 이 되어 좌우가 갈림"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "절댓값·가우스 기호가 있는 함수의 우극한과 좌극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑵⑶ 은 방향이 정해져 있으므로 그 방향에서 절댓값 부호를 먼저 결정해 벗기면 약분 한 줄로 끝난다(T-부호). ⑴ 은 분모만 0 이라 좌우가 -∞ · +∞ 로 갈려 존재하지 않는다.
    ⑷ 만 기호의 정의를 방향별 정수 구간으로 옮기는 별도 단계가 필요해 통찰 1개(EQV d1)로 잡았다(T-경계).
    소문항 4개의 단계 합이 4~6 이라 Mₛ=2 · M_total 6 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "접근 방향 고정 → 그 방향에서 절댓값 부호·가우스 정수 구간 확정 → 기호 벗기고 약분 → 좌우 값 비교로 존재 판정"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '⑴ 존재하지 않는다. ⑵ $2$ ⑶ $-2$ ⑷ 존재하지 않는다.'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/19-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 영점(x=2 → 다른 정수 a)과 분자의 인수분해 꼴(x^2-1 → x^2-a^2, x^2-2x → x^2-ax)을 함께 옮긴다. 제약: 분자가 절댓값 안의 일차식을 인수로 가져야 약분이 되고, 가우스 소문항은 접근점이 정수(또는 정수와의 차가 상수)여야 좌우가 갈린다. 방향 표기(+ 와 -)를 바꾸면 답의 부호가 통째로 뒤집히므로 답을 다시 정한다."
    creative: "(1) ⑵⑶ 의 방향을 떼고 x→1, x→2 로만 물어 존재하지 않음까지 판정시키기(★2 유지) (2) 절댓값 분모를 |x-1| 대신 |x^2-1| 로 바꿔 부호 구간을 한 번 더 따지게 하기(★3) (3) [x] 를 [2x] 나 [x]^2 로 바꾸면 경계가 반정수로 옮겨져 EQV depth 2 · ★3 (4) 좌우극한이 같아지도록 계수를 정하는 역방향 물음으로 뒤집으면 I-BW 추가 ★3."
```

```yaml
- id: GN-CALC1-19-9
  page: 19
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 세 극한을 조사: (x-2)/(x+2) 의 x→-2, (x^2+x)/|x+1| 의 x→-1,
    [x+1]/(x+1) 의 x→-1+. 단 [x] 는 가우스 기호.
  category: "접근 방향 고정 → 절댓값·가우스 기호 벗기기 → 좌우 비교로 존재 판정"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x→-1+ 에서 x+1 이 0 과 1 사이임을 보고 [x+1]=0 으로 옮겨 읽음 — 분모도 0 으로 가지만 분자가 상수 0 이라 몫이 0"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "절댓값·가우스 기호가 있는 함수의 우극한과 좌극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    19-e6 와 같은 골조의 확인 문항. ⑴ 은 분모만 0 이라 좌우가 갈리고, ⑵ 는 방향이 주어지지 않아 x→-1+ · x→-1- 를 각각 부호 분리해 -1 과 1 을 얻어야 존재하지 않음이 나온다(T-부호).
    ⑶ 은 0/0 꼴처럼 보이지만 분자가 구간 안에서 상수 0 이라는 점을 읽어야 해서 통찰 1개(EQV d1)로 잡았다(T-경계).
    통찰 1 · M_total 6 → 확인체크(예제 확인) 출발점 ★2 유지(−1 조건인 통찰 0 에 해당하지 않음).
  tier: star_2
  mechanism_primary: "접근 방향별로 절댓값 부호·가우스 정수 구간 확정 → 기호 벗기고 약분 → 좌우 값이 같을 때만 극한 존재"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '⑴ 존재하지 않는다. ⑵ 존재하지 않는다. ⑶ $0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/19-9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접근점 -2, -1 을 다른 정수로, 분자 x-2 를 분모의 영점에서 0 이 되지 않는 다른 일차식으로 바꾼다. 제약: ⑴ 은 분자가 접근점에서 0 이 아니어야 발산하고, ⑵ 는 분자가 절댓값 안 일차식을 인수로 가져야 약분되며, ⑶ 은 우극한 방향이어야 [x+1]=0 이 된다(좌극한으로 바꾸면 [x+1]=-1 이라 답이 발산으로 바뀐다)."
    creative: "(1) ⑶ 을 x→-1- 로 바꿔 발산까지 판정시키기(★2~3) (2) ⑵ 를 좌·우극한 값을 각각 쓰게 하는 서술형으로(★2 유지) (3) 세 식을 한 조각함수로 묶어 극한이 존재하는 점을 모두 찾게 하면 조건 통합이 생겨 ★3."
```

```yaml
- id: GN-CALC1-19-10
  page: 19
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    조각함수 f(x) = x-1 (x≥1), -x+k (x<1) 에 대하여 x→1 의 극한이 존재하도록 하는
    상수 k 의 값을 구하는 문제.
  category: "극한 존재 조건 → 좌극한 = 우극한 등식 → 미정상수 결정"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "극한이 존재한다는 조건을 그대로 쓸 수 없으므로 좌극한과 우극한이 같다는 등식으로 옮김 — 이 변환이 있어야 k 에 대한 식이 나온다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "극한이 존재할 조건으로 미정상수 정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조각의 경계 x=1 에서 오른쪽은 x-1, 왼쪽은 -x+k 로 각각 극한을 계산한 뒤 두 값을 같게 놓으면 k 가 한 줄에 나온다.
    핵심은 계산이 아니라 「극한 존재」를 「좌극한 = 우극한」으로 바꿔 쓰는 동치 변환 한 단계(EQV d1)이고, 등호가 붙은 쪽의 함숫값은 극한과 무관하다는 점이 함정(T-경계).
    미정상수가 있어 Mₐ=2 · M_total 5 · 통찰 1 → 확인체크(예제 확인) 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "극한 존재 → 좌극한 = 우극한 → 경계 x=1 에서 두 조각의 값을 같게 놓기 → k 결정"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/19-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경계 x=1 을 다른 정수 a 로, 두 조각의 일차식 계수·상수(x-1, -x+k)를 자유롭게 바꿀 수 있다. 제약: 경계에서의 두 극한이 k 에 대한 일차식이 되도록 k 를 한쪽 조각에만 두고, 답이 정수로 떨어지게 상수를 고른다. 등호(x≥1 / x<1)의 위치는 답에 영향이 없으므로 그대로 두어도 된다."
    creative: "(1) 한 조각을 이차식으로 바꿔 좌극한 계산을 한 단계 늘리기(★2 유지) (2) k 를 두 조각에 모두 넣어 이차방정식이 되게 하면 근이 둘이라 검증이 필요해 I-VF 추가 ★3 (3) 극한 존재 대신 f(1)=lim f(x)(연속)까지 요구하면 조건 통합으로 I-CON 추가 ★3 (4) 경계가 두 곳인 조각함수로 확장해 두 상수를 동시에 정하게 하면 ★3."
```

## 표본 판정 요약 (5문)

- ★ 분포: ★1 2 · ★2 3 · ★3 0 · ★4 0 · ★5 0
- 통찰형 3 · 절차형 2 · premium 0
- 통찰 유형 분포: I-EQV 3(모두 depth 1 · 감쇠 없음) · 그 밖의 유형 0. 통찰 2개 이상이거나 depth 3 인 문항은 없어 +1 조정 대상이 없었다.
- M_total 분포: 4 → 1문 · 5 → 2문 · 6 → 2문. Mₖ 는 전 문항 1(계산 부담이 아니라 방향·기호 처리로 변별되는 단원).
- type_hint 상위: 「그래프에서 우극한과 좌극한」 2 · 「절댓값·가우스 기호가 있는 함수의 우극한과 좌극한」 2 · 「극한이 존재할 조건으로 미정상수 정하기」 1
- 대상층: 하위권 2 · 중하위권 3
- 그림: 2문(`crop:fig-18-e5.png` · `crop:fig-18-8.png`) · 나머지 3문은 none
- answer_source: 본문 풀이 2 · 답지 3. 전사 답과 골조가 어긋난 문항은 없었다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC1-18-e5 | 벤더 「필수」 예제(★2 출발)이나 통찰 0 · M_total 4 → 산식 −1 로 ★1. 그래프 읽기 절차만 있어 예제라는 지위 외에 ★2 근거가 없음 | ★1 / ★2 |
| GN-CALC1-18-8 | tag 「확인체크」를 통번호 익히기(★1 출발)가 아니라 필수 예제의 확인 문항(★2 출발)으로 해석한 뒤 −1 하여 ★1. 확인체크의 출발점 해석이 은행 전체에서 통일돼야 함 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 type_hint 는 두 갈래뿐이다 — 「그래프에서 우극한과 좌극한」(18-e5 · 18-8)과 「절댓값·가우스 기호가 있는 함수의 우극한과 좌극한」(19-e6 · 19-9). 각각 예제 1 + 확인체크 1 쌍이라 카탈로그에서는 **한 유형으로 묶고 난이도는 M_total 로 가르는 것**이 맞다.
- 따로 세워야 할 유형: 「극한이 존재할 조건으로 미정상수 정하기」(19-10). 앞 네 문항이 주어진 식·그래프를 읽는 정방향인 데 비해 이 문항만 조건에서 상수를 거꾸로 정하는 역방향이고, 뒤 단원(함수의 연속)에서 같은 골조가 반복되므로 독립 유형이 필요하다.
- 통합해도 될 유형: 절댓값 분리와 가우스 기호 읽기는 별개 유형으로 보이지만 골조가 「방향 고정 → 그 방향의 기호 벗기기 → 좌우 비교」로 같다. 카탈로그에서는 한 유형 아래 기호 종류(절댓값 · 가우스 · 분모 0 발산)를 변형 축으로 두는 편이 슬롯 관리에 유리하다.
- ★ 3 이상이 없는 범위다. 이 단원에서 ★3 을 만들려면 기호를 이중으로 겹치거나([2x], |x^2-1|) 미정상수를 역방향으로 얹어야 하며, 그 변형 지점은 각 블록 `variation_notes.creative` 에 적어 두었다.
