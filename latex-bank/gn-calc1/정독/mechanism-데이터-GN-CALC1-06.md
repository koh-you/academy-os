---
name: mechanism-데이터-GN-CALC1-06
description: 개념원리 미적분Ⅰ 06 연속함수의 성질(1/1 · 15문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅰ · 전사본 latex-bank/gn-calc1
  section: 06 연속함수의 성질
  unit_code: CALC1-06
  part: "1/1"
  extract_range: "53~56쪽 · 53-e6~56-95"
  total_problems: 15
  unit_total: 15
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc1/items/<id>.tex
  image_source: latex-bank/gn-calc1/figures/ (crops.json)
---

# 개념원리 미적분Ⅰ · 06 연속함수의 성질 (1/1) 정독 데이터 (v1.0)

이 파일은 53~56쪽 15문항 전수(`53-e6`~`56-95`)를 다룬다. 구역은 「필수·발전 예제」(필수 예제 5 + 딸린 확인체크 4) · 「연습문제 STEP 1」 3 · 「연습문제 STEP 2」 2 · 「연습문제 실력 UP」 1 이다. 개념원리 고등의 난이도 신호는 구역과 태그에 있다 — 확인체크(통번호 85~89)는 개념 확인이라 ★1 출발, 필수 예제는 ★2 출발, 연습문제는 STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 출발이며 여기서 M_total·통찰로 ±1 조정했다. 단원 내용은 ⑴ 연속함수의 성질(합·차·곱·몫) ⑵ 최대·최소 정리 ⑶ 사잇값 정리 세 덩어리이고, 사잇값 정리 쪽이 9문으로 절반이 넘는다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·깊이·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다. 발문은 원문 전사가 아니라 무엇을 묻는지 한두 줄로 요약했고, 답은 전사본 값을 그대로 옮겼다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC1-53-e6
  page: 53
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    두 다항함수 f(x)=x^2-3, g(x)=x^2-4x-5 에 대하여 ⑴~⑷ f-3g · fg · f/g · 1/(f-g) 가 각각 연속인 구간을 구하기.
  category: "다항함수의 연속 → 사칙연산 함수의 연속 구간 → 분모의 영점 제외"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "연속함수의 성질 — 합·차·곱·몫이 연속인 구간 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다항함수는 실수 전체에서 연속이므로 ⑴⑵는 전 구간, ⑶은 g 의 영점 x=-1, 5 를, ⑷는 f-g=4x+2 의 영점 x=-1/2 를 뺀 열린구간들로 답한다. 도구는 「연속함수의 성질」 한 줄이고 통찰 라벨은 없다.
    구간을 개수까지 정확히 나눠 쓰는 표기 부담(T-범위)이 있어 M_total 5. 필수 예제 ★2 출발을 유지했다.
    [분류 이슈] 통찰 0·M_total 5 라 -1 후보(★1)였으나 소문항 4개와 구간 분할 표기 때문에 ★2 로 둠.
  tier: star_2
  mechanism_primary: "다항함수는 전 구간 연속 → 합·차·곱도 전 구간 연속 → 몫은 분모의 영점을 경계로 구간을 쪼갠다"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $(-\infty,\,\infty)$ ⑵ $(-\infty,\,\infty)$ ⑶ $(-\infty,\,-1)$, $(-1,\,5)$, $(5,\,\infty)$ ⑷ $\left(-\infty,\,-\dfrac{1}{2}\right)$, $\left(-\dfrac{1}{2},\,\infty\right)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/53-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f·g 의 계수와 상수항을 바꿀 수 있다. 제약 — g 는 서로 다른 두 정수근을 갖는 이차식으로(판별식>0, 인수분해 가능), f-g 는 일차식이 되도록 x^2 계수를 같게 두어야 ⑷의 영점이 유리수 하나로 떨어진다. 영점이 무리수가 되면 답 표기가 무거워진다."
    creative: "(1) g 를 완전제곱식(중근)으로 바꾸면 제외점이 하나 → 구간 2개(★2 유지) (2) f-g 를 판별식<0 인 이차식으로 두어 ⑷가 전 구간 연속이 되게 하면 판별식 판단이 붙어 ★3 (3) 구간을 묻는 대신 「연속이 아닌 x 의 개수」를 묻기(★1~2) (4) f 또는 g 를 무리함수로 바꾸면 정의역 제약이 겹쳐 T-범위 2중 → ★3."
```

```yaml
- id: GN-CALC1-53-85
  page: 53
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x), g(x) 가 x=a 에서 연속일 때 x=a 에서 항상 연속인 것을 보기 ㄱ~ㄹ(2f+3g · f+g/f · {f}^2 · g(f(x)))에서 모두 고르기. f 의 치역은 g 의 정의역에 포함된다는 조건이 붙어 있다.
  category: "연속함수의 성질이 보장하는 범위 → 몫·합성의 반례 찾기"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "합성 g(f(x)) 의 연속에는 「g 가 f(a) 에서 연속」이라는, 주어진 조건(g 는 x=a 에서만 연속)에 없는 요구가 필요함을 식별"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "연속함수의 성질 — x=a 에서 항상 연속인 함수 고르기(몫·합성 반례)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ·ㄷ은 합·상수배·곱이라 성질로 바로 연속. ㄴ은 f(a)=0 이면 정의조차 안 되므로 반례(T-범위), ㄹ은 조건이 g 의 x=a 연속만 주므로 f(a) 에서의 연속은 보장되지 않아 반례.
    ㄹ의 반례 인식이 주 통찰(EQV d2) — 조건 문장을 「어디에서의 연속인가」로 다시 읽어야 한다. 일반 함수 f, g 로만 주어져 Mₐ 3.
    확인체크 ★1 출발 + 통찰 1(d2)·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "합·상수배·곱은 성질로 즉시 연속 → 몫은 f(a)=0 반례 → 합성은 g 가 f(a) 에서 연속이라는 보장이 없어 반례"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: 'ㄱ, ㄷ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/53-85.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ㄱ의 계수 2, 3 과 ㄷ의 거듭제곱 지수는 자유롭게 바꿔도 판정이 안 바뀐다. 제약 — 몫 보기는 분모가 f 나 g 자신이어야 「f(a)=0 반례」가 살아 있고, 분모를 f^2+1 처럼 영점이 없는 식으로 바꾸면 그 보기가 정답에 들어가 답이 달라진다."
    creative: "(1) 보기를 |f(x)| · f(x)g(x) · f(x)/(g(x)+1) 등으로 교체(★2 유지) (2) 「f(a)=0 이 아니다」 조건을 추가해 ㄴ을 정답에 넣으면 반례 통찰이 사라져 ★1 (3) f 는 연속·g 는 불연속으로 두고 fg 가 연속일 수 있는지 묻기 → 반례 구성이 필요해 ★3 (4) 합성 보기만 남겨 f(a) 에서의 연속 조건을 서술하게 하면 EQV d3 → ★3."
```

```yaml
- id: GN-CALC1-54-e7
  page: 54
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    주어진 닫힌구간에서 ⑴ f(x)=-x^2+2x+3 ([-2, 2]) ⑵ f(x)=2/(x-2) ([3, 5]) 의 최댓값과 최솟값 구하기.
  category: "닫힌구간에서의 연속 확인 → 최대·최소 정리 → 꼭짓점·끝점 비교"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최대·최소 정리 — 닫힌구간에서 최댓값·최솟값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴은 꼭짓점 x=1 이 구간 안이므로 f(1) 이 최대, 먼 끝점 x=-2 가 최소. ⑵는 분모의 영점 x=2 가 구간 밖이라 [3, 5] 에서 연속·감소이므로 양 끝점이 최대·최소.
    「꼭짓점이 구간 안인가」와 「분모의 영점이 구간 밖인가」를 확인하는 경계 점검(T-경계)이 있지만 도구는 표준 한 줄이라 통찰 라벨 없음.
    필수 예제 ★2 출발 유지.
  tier: star_2
  mechanism_primary: "닫힌구간에서 연속임을 확인 → 최대·최소 정리로 존재 보장 → 이차함수는 꼭짓점·끝점, 분수함수는 단조성으로 양 끝점 비교"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 최댓값: $4$, 최솟값: $-5$ ⑵ 최댓값: $2$, 최솟값: $\dfrac{2}{3}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/54-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴의 이차함수 계수·구간과 ⑵의 분자·평행이동량을 바꿀 수 있다. 제약 — ⑴은 꼭짓점의 x 좌표가 구간 안에 있어야 최댓값이 끝점이 아니고, ⑵는 분모의 영점이 반드시 구간 밖이어야 최대·최소 정리를 쓸 수 있다(영점이 구간 안이면 최댓값이 없어져 답 자체가 사라진다)."
    creative: "(1) 꼭짓점을 구간 밖으로 밀어 단조구간으로 만들면 끝점 두 개 비교만 남아 ★1 (2) 구간을 열린구간으로 바꿔 최댓값이 없는 경우를 묻기 → 정리의 가정 점검이 생겨 ★3 (3) 최댓값과 최솟값의 합·곱을 묻는 형태(56-91 꼴 · ★2) (4) 구간에 미지수를 넣어 최댓값이 k 가 되게 하는 구간을 역으로 찾기 → I-BW ★3."
```

```yaml
- id: GN-CALC1-54-86
  page: 54
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    주어진 닫힌구간에서 ⑴ f(x)=|x| ([-1, 3]) ⑵ f(x)=√(8-2x) ([-4, 2]) 의 최댓값과 최솟값 구하기.
  category: "절댓값·무리함수의 개형 → 닫힌구간 안의 증감 → 끝점·꼭짓점 비교"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최대·최소 정리 — 닫힌구간에서 최댓값·최솟값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴은 V 자 꼭짓점 x=0 이 구간 안이라 최솟값 0, 먼 끝점 x=3 에서 최댓값. ⑵는 감소하는 무리함수라 왼쪽 끝 x=-4 에서 최대, 오른쪽 끝 x=2 에서 최소.
    그래프 개형만 떠올리면 끝나는 개념 확인. 통찰 없음·M_total 5.
    확인체크 ★1 출발을 그대로 유지했다.
  tier: star_1
  mechanism_primary: "절댓값·무리함수의 그래프 개형으로 구간 안의 증감을 파악 → 꼭짓점과 양 끝점의 함숫값만 비교"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 최댓값: $3$, 최솟값: $0$ ⑵ 최댓값: $4$, 최솟값: $2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/54-86.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴의 구간 끝값과 ⑵의 근호 안 8-2x 의 상수·계수를 바꿀 수 있다. 제약 — ⑵는 구간 전체에서 8-2x ≥ 0 이어야 정의되고, 끝점의 근호 값이 정수가 되도록 8-2x 가 완전제곱수가 되는 x 를 끝점으로 잡아야 답이 깔끔하다. ⑴은 0 이 구간 안에 있어야 최솟값이 0 이다."
    creative: "(1) |x-2| 처럼 꼭짓점을 옮겨 구간 밖으로 빼면 단조구간 → ★1 유지 (2) |x^2-4| 로 바꾸면 꺾임점이 둘 → 비교 대상이 늘어 ★2 (3) 최댓값과 최솟값의 차를 묻기(★1) (4) 구간을 미지수로 두고 최솟값이 0 이 되도록 하는 조건을 묻기 → I-BW ★3."
```

```yaml
- id: GN-CALC1-54-87
  page: 54
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    구간 (0, 6) 에서 정의된 함수 y=f(x) 의 그래프(x=1, 3 에서 불연속)가 주어졌을 때 보기 ㄱ~ㄷ([1, 2]·[2, 3] 의 최댓값 존재, [3, 5] 의 최솟값 존재) 중 옳은 것을 모두 고르기.
  category: "그래프의 개원·폐원 읽기 → 부분구간별 최댓값·최솟값의 존재 판정"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그래프의 빈 점·채운 점을 좌우 극한값과 함숫값으로 옮겨 읽어, 각 부분구간에서 함숫값이 이루는 집합을 확정"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "최대·최소 정리는 충분조건일 뿐임을 인식 — 불연속이어도 최댓값이 있을 수 있고(ㄱ) 끊긴 자리에서 상한에 도달하지 못할 수도 있음(ㄴ)을 구간마다 따로 판정"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "최대·최소 정리 — 그래프에서 최댓값·최솟값의 존재 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ은 x=1 에서 불연속이지만 그 점의 함숫값이 구간 안 다른 값보다 커서 최댓값이 존재. ㄴ은 x→3⁻ 에서 값이 3 에 다가가지만 f(3) 은 더 작아 상한에 도달하지 못하므로 최댓값이 없다. ㄷ은 [3, 5] 에서 연속이라 정리로 최솟값 보장.
    「정리의 가정이 깨졌다 = 최댓값이 없다」로 곧장 가면 ㄱ에서 틀리는 것이 이 문항의 함정(T-경계 · T-범위).
    확인체크 ★1 출발 + 통찰 2개(RT·EQV d2) → +1 하여 ★2.
  tier: star_2
  mechanism_primary: "그래프의 개원·폐원을 극한값과 함숫값으로 옮김 → 각 닫힌 부분구간의 함숫값 집합 → 상한·하한이 실제로 달성되는지 판정"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: 'ㄱ, ㄷ'
  answer_source: "답지"
  figure: "crop:fig-54-87.png"
  latex: latex-bank/gn-calc1/items/54-87.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기의 부분구간 [1, 2]·[2, 3]·[3, 5] 를 다른 구간으로 바꿀 수 있다. 제약 — 그림의 라벨(불연속점 x=1, 3 과 함숫값 0, 1, 2, 3)은 고정이므로 구간을 바꾸면 그림도 함께 바꿔야 하고, 불연속점을 구간의 내부에 둘지 끝점에 둘지가 답을 뒤집는다."
    creative: "(1) 최솟값 존재로 보기를 통일(★2 유지) (2) 같은 그래프로 f 가 연속인 구간의 개수를 묻기 → 절차형 ★1 (3) 그래프 대신 구간별 정의식(조각함수)으로 주면 표현 전환이 사라져 ★2 이나 계산이 늘어남 (4) 「최댓값은 있지만 최솟값은 없는 구간」을 찾게 하면 판정이 양방향 → ★3."
```

```yaml
- id: GN-CALC1-55-e8
  page: 55
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    방정식 x^3-2x^2-1=0 이 열린구간 (2, 3) 에서 적어도 하나의 실근을 가짐을 보이기(서술형).
  category: "함수로 옮기기 → 닫힌구간 연속 확인 → 양 끝 함숫값의 부호 → 사잇값 정리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사잇값 정리 — 주어진 구간에 실근이 존재함을 보이기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌변을 f(x) 로 두고 다항함수라 [2, 3] 에서 연속임을 밝힌 뒤 f(2)<0, f(3)>0 을 보이면 사잇값 정리로 끝난다. 골조가 세 줄로 고정된 표준 서술이라 통찰 라벨 없음.
    서술에서 「닫힌구간에서 연속」과 「열린구간에서 실근」을 구분해 쓰는 것이 감점 포인트(T-범위).
    필수 예제 ★2 출발 유지.
  tier: star_2
  mechanism_primary: "f(x)=x³-2x²-1 로 두기 → [2, 3] 에서 연속 → f(2)<0, f(3)>0 → 사잇값 정리로 (2, 3) 에 실근"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '풀이 참조 ($f(x)=x^3-2x^2-1$이라 하면 함수 $f(x)$는 닫힌구간 $[2,\,3]$에서 연속이고 $f(2)=-1<0$, $f(3)=8>0$이므로 사잇값 정리에 의하여 방정식 $f(x)=0$은 열린구간 $(2,\,3)$에서 적어도 하나의 실근을 갖는다.)'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/55-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식의 계수·상수항과 구간을 바꿀 수 있다. 제약 — 양 끝 함숫값의 부호가 반드시 반대여야 하고, 두 값 모두 손으로 한 줄에 계산되는 크기여야 한다. 구간 안에서 근이 하나만 있도록 하려면 계수를 증가함수가 되게 잡는다."
    creative: "(1) 구간을 주지 않고 「실근이 존재하는 정수 구간을 찾아라」로 바꾸면 탐색이 붙어 ★3(56-92 꼴) (2) 사차식으로 바꿔 부호 변화 구간이 둘이 되게 하면 개수 세기로 확장 ★3 (3) 계수에 미지수를 넣어 (2, 3) 에 근이 있도록 하는 범위를 묻기 → I-BW ★3~4 (4) 다항함수가 아닌 조각함수로 주고 연속성부터 확인하게 하면 ★3."
```

```yaml
- id: GN-CALC1-55-e9
  page: 55
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    모든 실수에서 연속인 f 에 대하여 f(-1)=2, f(0)=-5, f(1)=1, f(2)=-3 일 때 방정식 f(x)=0 이 (-1, 2) 에서 적어도 몇 개의 실근을 갖는지 구하기.
  category: "이웃한 함숫값의 부호 비교 → 부호가 바뀌는 구간 수 세기"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사잇값 정리 — 함숫값의 부호 변화로 실근의 최소 개수 세기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이웃한 두 값의 부호가 반대인 소구간마다 사잇값 정리로 근이 하나씩 보장된다. (-1, 0)·(0, 1)·(1, 2) 세 곳 모두 부호가 바뀌어 적어도 3개.
    「적어도」이므로 부호가 안 바뀌는 구간에도 근이 있을 수 있다는 점을 답에 반영하지 않는 것이 요점(T-부호).
    함숫값 표만 주어진 추상 함수라 Mₐ 2, 통찰 라벨은 없음. 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "이웃한 함숫값의 부호를 차례로 비교 → 부호가 바뀌는 소구간마다 근 1개 → 그 개수가 최소 개수"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$개'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/55-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 함숫값의 크기는 자유롭게 바꿀 수 있고 부호 배열만 답을 정한다. 제약 — 0 인 함숫값은 넣지 않는다(끝점에서 근이 나오면 「열린구간에서 적어도 몇 개」의 셈이 달라진다). 표본점을 늘리면 최소 개수도 그만큼 늘릴 수 있다."
    creative: "(1) 표본점을 6개로 늘리고 부호를 섞어 답을 2개로 만들기(55-89 꼴 · ★1~2) (2) f(x)=0 대신 f(x)=k 나 f(x)=x 로 바꾸면 새 함수 정의가 필요해 ★3(56-94 꼴) (3) 함숫값 하나를 미지수로 두고 실근이 3개 이상이 되도록 하는 범위를 묻기 → I-BW ★3 (4) 그래프로 주고 같은 것을 묻기 → I-RT ★2."
```

```yaml
- id: GN-CALC1-55-88
  page: 55
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ 3x^3-2x^2+1=0 ((-3, 3)) ⑵ x^4+x^3-9x+1=0 ((1, 3)) 이 주어진 구간에서 적어도 하나의 실근을 가짐을 각각 보이기(서술형).
  category: "함수로 옮기기 → 닫힌구간 연속 → 양 끝 함숫값의 부호 → 사잇값 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사잇값 정리 — 주어진 구간에 실근이 존재함을 보이기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 소문항 모두 좌변을 f(x) 로 두고 닫힌구간에서 연속임을 말한 뒤 양 끝 함숫값의 부호가 반대임을 보이면 끝난다. 55-e8 과 골조가 같고 계수만 무거워 Mₖ 2.
    통찰 없음·M_total 6 이라 확인체크 ★1 출발을 유지했다.
    [분류 이슈] 같은 골조의 필수 예제 55-e8 은 ★2 인데 이 문항은 확인체크 신호를 따라 ★1 — 계산량은 오히려 이쪽이 크므로 ★1/★2 경계로 기록.
  tier: star_1
  mechanism_primary: "좌변을 f(x) 로 두기 → 닫힌구간에서 연속 → 양 끝 함숫값의 부호가 반대 → 사잇값 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 (⑴ $f(x)=3x^3-2x^2+1$이라 하면 $f(x)$는 닫힌구간 $[-3,\,3]$에서 연속이고 $f(-3)=-98<0$, $f(3)=64>0$ ⑵ $f(x)=x^4+x^3-9x+1$이라 하면 $f(x)$는 닫힌구간 $[1,\,3]$에서 연속이고 $f(1)=-6<0$, $f(3)=82>0$이므로 각각 사잇값 정리에 의하여 주어진 열린구간에서 적어도 하나의 실근을 갖는다.)'
  answer_source: "답지(풀이 27쪽 · 계산 보충)"
  figure: none
  latex: latex-bank/gn-calc1/items/55-88.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 다항식의 계수와 구간 끝값을 바꿀 수 있다. 제약 — 끝점 함숫값의 부호가 반대여야 하고, 차수가 높을수록 끝값이 커지므로 구간을 좁게(|x| ≤ 3 정도) 잡아야 손계산이 유지된다. 짝수 차수 식은 양 끝에서 같은 부호가 되기 쉬우니 구간을 한쪽으로 치우쳐 잡는다."
    creative: "(1) 구간을 여러 개 주고 실근이 보장되는 구간을 고르게 하면 객관식 ★2 (2) 「적어도 두 개의 실근」으로 올리면 표본점을 스스로 추가해야 해서 ★3 (3) 상수항을 미지수로 두고 (1, 3) 에 근이 있도록 하는 범위를 묻기 → I-BW ★3 (4) 삼각·지수 없이 유리함수로 바꾸면 불연속점 확인이 추가되어 ★2~3."
```

```yaml
- id: GN-CALC1-55-89
  page: 55
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    모든 실수에서 연속인 f 에 대하여 f(-2)=-2, f(-1)=2, f(0)=4, f(1)=-1, f(2)=-3, f(3)=-1 일 때 f(x)=0 이 (-2, 3) 에서 적어도 몇 개의 실근을 갖는지 구하기.
  category: "이웃한 함숫값의 부호 비교 → 부호가 바뀌는 구간 수 세기"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사잇값 정리 — 함숫값의 부호 변화로 실근의 최소 개수 세기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    다섯 소구간의 부호를 차례로 훑으면 (-2, -1) 과 (0, 1) 두 곳에서만 부호가 바뀌어 적어도 2개. 55-e9 와 같은 골조이고 표본점만 늘었다.
    음수끼리 크기만 달라지는 (1, 2)·(2, 3) 을 부호 변화로 잘못 세는 것이 유일한 함정(T-부호).
    통찰 없음·M_total 6 → 확인체크 ★1 출발 유지.
  tier: star_1
  mechanism_primary: "이웃한 함숫값의 부호를 차례로 비교 → 부호가 바뀌는 소구간을 세기 → 두 곳이므로 적어도 2개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$개'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/55-89.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "여섯 함숫값의 크기는 자유이고 부호 배열만 답을 결정한다. 제약 — 함숫값에 0 을 넣지 않는다. 부호 변화 횟수를 바꾸면 답이 그대로 따라 바뀌므로 난이도는 같게 유지된다."
    creative: "(1) 표를 그래프로 바꿔 같은 것을 묻기 → I-RT ★2 (2) f(x)=0 을 f(x)+1=0 이나 f(x)=x 로 바꾸면 새 함수의 함숫값을 먼저 만들어야 해 ★3 (3) 「실근이 정확히 2개인가」를 묻는 참·거짓으로 바꾸면 「적어도」의 의미를 따져야 해 ★3 (4) 함숫값 하나를 미지수로 두고 최소 개수가 3이 되게 하는 조건 → I-BW ★3."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC1-56-90
  page: 56
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    f(x)=x^2, g(x)=2x+3 일 때 h(x)=f(x)/(f(x)-g(x)) 가 연속인 구간 구하기.
  category: "분모를 정리 → 인수분해로 영점 → 영점을 뺀 구간으로 분할"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "연속함수의 성질 — 몫함수가 연속인 구간 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모 f-g=x²-2x-3=(x+1)(x-3) 의 영점 -1, 3 을 빼면 연속인 구간이 셋으로 갈린다. 53-e6⑷ 와 같은 골조에 인수분해가 한 번 더 붙은 정도.
    분자의 영점(x=0)은 연속성과 무관하다는 점이 유일한 혼동 지점.
    STEP 1 ★2 출발을 M_total 5·통찰 0 에서도 유지했다(구간 표기 부담 때문).
  tier: star_2
  mechanism_primary: "분모 f-g 를 정리·인수분해 → 영점 x=-1, 3 → 두 점을 제외한 열린구간 세 개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(-\infty,\,-1)$, $(-1,\,3)$, $(3,\,\infty)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/56-90.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "g 의 계수와 상수항을 바꿀 수 있다. 제약 — f-g=x²-2x-3 이 서로 다른 두 정수근을 갖도록 판별식이 양의 완전제곱수여야 답이 깔끔하다. 중근이면 구간이 둘, 판별식이 음수면 전 구간 연속이 되어 답의 모양 자체가 바뀐다."
    creative: "(1) 분모를 중근·허근이 되게 바꿔 구간 개수를 2 또는 1 로(★2 유지) (2) h(x) 대신 f(x)/(g(x)f(x)) 처럼 분모를 곱으로 주어 영점이 셋이 되게(★2) (3) g 의 계수를 미지수로 두고 전 구간 연속이 되는 범위를 묻기 → 56-93 꼴 ★3 (4) 「불연속점에서의 극한 존재 여부」를 함께 묻기 → ★3."
```

```yaml
- id: GN-CALC1-56-91
  page: 56
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    구간 [1, 3] 에서 f(x)=4x/(x+1) 의 최댓값 M, 최솟값 m 에 대하여 M+m 의 값 구하기.
  category: "분수함수 표준형 변형 → 구간에서의 단조성 → 양 끝점의 값 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최대·최소 정리 — 닫힌구간에서 분수함수의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    4x/(x+1)=4-4/(x+1) 로 고치면 [1, 3] 에서 증가이므로 최댓값은 f(3), 최솟값은 f(1). 분모의 영점 x=-1 이 구간 밖이라 최대·최소 정리가 그대로 적용된다.
    표준형 변형은 분수함수의 정해진 절차라 통찰로 세지 않았다.
    STEP 1 ★2 출발 유지, M_total 6.
  tier: star_2
  mechanism_primary: "4x/(x+1)=4-4/(x+1) 로 변형 → [1, 3] 에서 연속·증가 → 최댓값 f(3), 최솟값 f(1) → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/56-91.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 계수와 분모의 평행이동량, 구간 끝값을 바꿀 수 있다. 제약 — 분모의 영점이 구간 밖이어야 하고, 양 끝점의 함숫값이 유리수로 떨어지도록 구간 끝을 잡아야 M+m 이 정수가 된다."
    creative: "(1) M-m 이나 Mm 을 묻기(★2 유지) (2) 분모의 영점을 구간 안에 넣어 최댓값이 없음을 답하게 하면 정리의 가정 점검 → ★3 (3) 분자를 이차식으로 올려 단조성이 깨지게 하면 꼭짓점 비교가 추가되어 ★3 (4) M+m=k 가 되게 하는 구간의 오른쪽 끝을 묻기 → I-BW ★3."
```

```yaml
- id: GN-CALC1-56-92
  page: 56
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    오직 하나의 실근 α 를 갖는 방정식 x^3+x-9=0 에서 α 가 존재하는 구간을 다섯 선택지 중 고르기.
  category: "함수로 옮기기 → 선택지 구간 끝점의 부호 확인 → 부호가 바뀌는 구간"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사잇값 정리 — 실근이 존재하는 구간 찾기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(x)=x³+x-9 의 정수 함숫값을 0 부터 차례로 계산해 부호가 처음 바뀌는 곳을 찾으면 된다. f(1)<0, f(2)>0 이므로 (1, 2).
    선택지 끝점을 차례로 대입하는 반복 계산이라 Mₖ 2, 도구는 사잇값 정리 하나뿐이라 통찰 없음.
    STEP 1 ★2 출발 유지.
  tier: star_2
  mechanism_primary: "f(x)=x³+x-9 로 두기 → 선택지 구간 끝점의 함숫값 부호를 차례로 확인 → 부호가 바뀌는 (1, 2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/56-92.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식의 계수와 상수항을 바꿔 근의 위치를 옮길 수 있다. 제약 — f 가 증가함수여야 「오직 하나의 실근」이라는 전제가 유지되고, 근이 두 정수 사이에 들어가되 어느 끝점에서도 f 가 0 이 되지 않아야 한다."
    creative: "(1) 답 구간을 (3, 4) 처럼 뒤로 옮겨 계산량만 늘리기(★2 유지) (2) 「오직 하나」 전제를 빼고 실근의 개수를 묻게 하면 증가·감소 판단이 필요해 ★3 (3) 구간을 반으로 좁혀 가는 이분법 서술을 요구하면 ★3 (4) 상수항을 미지수로 두고 근이 (1, 2) 에 있도록 하는 범위를 묻기 → I-BW ★3."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC1-56-93
  page: 56
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    f(x)=x^2-2x+4, g(x)=2x^2+ax+3 에 대하여 f(x)/g(x) 가 모든 실수 x 에서 연속이 되도록 하는 정수 a 의 개수 구하기.
  category: "몫함수의 연속 조건 → 분모가 실근을 갖지 않음 → 판별식 → 정수 개수"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「모든 실수에서 연속」이라는 조건을 「분모 g(x) 가 실근을 갖지 않는다」는 판별식 조건으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "몫함수가 모든 실수에서 연속일 조건 — 분모의 판별식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분자 f 는 판별식이 음수라 어디서도 0 이 아니므로 약분으로 불연속이 사라지는 경우가 없다. 따라서 조건은 g 의 판별식 a²-24<0, 즉 -2√6<a<2√6 이고 √6≈2.45 이므로 정수 a 는 -4 부터 4 까지.
    「연속」을 판별식 부등식으로 옮기는 동치 변환이 주 통찰(EQV d2)이고, 등호를 포함하면 중근에서 불연속이 생기는 경계 처리가 함정(T-경계).
    STEP 2 ★3 출발을 통찰 1·M_total 7 에서 유지.
  tier: star_3
  mechanism_primary: "몫이 전 구간 연속 ⟺ 분모가 실근 없음 → 판별식 a²-24<0 → -2√6<a<2√6 → 범위 안 정수 세기"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/56-93.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 x² 계수와 상수항(여기서는 2 와 3)을 바꾸면 판별식 한계가 달라진다. 제약 — 분자는 판별식이 음수인 이차식으로 유지해야 약분 예외를 따지지 않아도 되고, 4·(x² 계수)·(상수항) 이 완전제곱수가 아니어야 경계가 무리수라 정수 개수 세기가 의미를 갖는다."
    creative: "(1) 정수 a 의 최댓값·최솟값의 합을 묻기(★3 유지) (2) 분자를 x²-4 처럼 실근이 있는 식으로 바꾸면 약분되는 경우를 따로 따져야 해서 I-MI 추가 → ★4 (3) 「연속이 아닌 x 가 정확히 하나」가 되게 하는 a 를 묻기 → 중근 조건 ★3~4 (4) 분모를 삼차식으로 올리면 실근이 항상 존재해 조건이 성립하지 않는 이유를 묻는 서술형 → ★4."
```

```yaml
- id: GN-CALC1-56-94
  page: 56
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    모든 실수에서 연속인 f 에 대하여 f(-2)=-1, f(-1)=-2, f(0)=1, f(1)=-2, f(2)=-1/2 일 때 방정식 f(x)=x 가 (-2, 2) 에서 적어도 몇 개의 실근을 갖는지 구하기.
  category: "f(x)=x 를 g(x)=f(x)-x=0 으로 이항 → g 의 함숫값 표 작성 → 부호 변화 세기"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(x)=x 를 새 연속함수 g(x)=f(x)-x 의 방정식 g(x)=0 으로 옮겨야 사잇값 정리를 쓸 수 있음을 인식"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "사잇값 정리 — f(x)=g(x) 꼴 방정식의 실근 최소 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    g(x)=f(x)-x 로 두면 g 도 연속이고 표의 다섯 점에서 값의 부호가 +, -, +, -, - 로 바뀐다. 부호가 바뀌는 소구간이 세 곳이므로 적어도 3개.
    주어진 표는 f 의 값이라 그대로 부호를 세면 틀린다 — 이항해서 새 표를 만드는 것이 주 통찰(EQV d2)이자 이 문항의 전부.
    STEP 2 ★3 출발 유지, M_total 7.
  tier: star_3
  mechanism_primary: "g(x)=f(x)-x 로 새 연속함수 정의 → 다섯 점에서 g 의 값을 계산 → 부호가 바뀌는 소구간 세 곳 → 적어도 3개"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$개'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/56-94.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다섯 함숫값을 바꿀 수 있다. 제약 — 어느 점에서도 f(x)-x 가 0 이 되면 안 되고(끝점 근), 원래 f 의 부호 배열과 f(x)-x 의 부호 배열이 서로 다르게 잡아야 이항을 건너뛴 학생이 걸린다."
    creative: "(1) f(x)=2x 나 f(x)=x² 로 우변을 바꾸기(★3 유지) (2) f(x)=-x 로 두면 부호 배열이 뒤집혀 답만 바뀜(★3) (3) 표 대신 그래프와 직선 y=x 의 교점으로 묻기 → I-RT 추가 ★3~4 (4) 함숫값 하나를 미지수로 두고 최소 개수가 4가 되게 하는 범위를 묻기 → I-BW ★4."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC1-56-95
  page: 56
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    x→1 과 x→2 에서 f(x)/(x-1), f(x)/(x-2) 의 극한이 모두 1/2 인 다항함수 f 에 대하여 [1, 2] 에서 f(x)=0 이 적어도 3개의 실근을 가짐을 보이기(서술형).
  category: "극한 조건 → 함숫값 확정 → 극한의 부호로 국소 부호 → 사잇값 정리"
  M: {s: 3, k: 1, a: 3, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분모가 0 으로 가는데 극한값이 존재하므로 분자도 0 으로 가야 한다는 동치 변환으로 f(1)=0, f(2)=0 을 얻음"
    - step: 2
      type: I-BW
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "「근이 3개」라는 목표에서 필요한 부호 조건을 역추적 — 극한값이 양수라는 사실에서 1 의 오른쪽 근방에서 f>0, 2 의 왼쪽 근방에서 f<0 을 끌어내 사잇값 정리를 적용할 두 점을 스스로 만듦"
  insight_count: 2
  depth_score: 2.50
  type_id: null
  type_hint: "사잇값 정리 — 극한 조건에서 함숫값·부호를 끌어내 실근 개수 보이기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 극한 조건에서 먼저 f(1)=f(2)=0 이 나와 근 두 개가 확보되고, 극한값이 양수라는 점에서 x=1 바로 오른쪽은 f>0, x=2 바로 왼쪽은 f<0 이므로 그 사이에서 사잇값 정리로 세 번째 근이 나온다.
    함숫값만 보는 학생은 f(1)=f(2)=0 에서 멈춰 2개로 답하게 되고, 극한의 부호를 국소 부호로 바꾸는 둘째 단계가 이 문항의 변별점(I-BW d3).
    열린구간과 닫힌구간, 근방을 나타내는 a, b 의 위치를 구분해 서술해야 하는 부담도 크다(T-범위·T-경계).
    실력 UP ★4 출발에 통찰 2개(d3 포함)라 +1 후보였으나 ★5 요건(통찰 3개 + SC/VF/SYM/XU)을 못 채워 ★4 유지.
  tier: star_4
  mechanism_primary: "극한 존재 + 분모→0 이면 f(1)=f(2)=0 → 극한값이 양수라 1 오른쪽에서 f>0, 2 왼쪽에서 f<0 → 사잇값 정리로 (1, 2) 안에 근 하나 더 → 합쳐 적어도 3개"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '풀이 참조 (다항함수 $f(x)$는 모든 실수에서 연속이고, 두 극한값이 존재하며 분모가 $0$으로 가므로 $f(1)=0$, $f(2)=0$이다. 또 $\displaystyle\lim_{x\to 1}\dfrac{f(x)}{x-1}=\dfrac{1}{2}>0$에서 $1$에 충분히 가까운 $a>1$에 대하여 $f(a)>0$, $\displaystyle\lim_{x\to 2}\dfrac{f(x)}{x-2}=\dfrac{1}{2}>0$에서 $2$에 충분히 가까운 $b<2$에 대하여 $f(b)<0$이므로 사잇값 정리에 의하여 열린구간 $(a,\,b)$, 즉 $(1,\,2)$에서 $f(x)=0$은 적어도 하나의 실근을 갖는다. 따라서 닫힌구간 $[1,\,2]$에서 방정식 $f(x)=0$은 적어도 $3$개의 실근을 갖는다.)'
  answer_source: "답지(풀이 29쪽 · 계산 보충)"
  figure: none
  latex: latex-bank/gn-calc1/items/56-95.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 극한값 1/2 과 기준점 1, 2 를 바꿀 수 있다. 제약 — 두 극한값의 부호가 같아야 사이 구간에서 f 의 부호가 뒤집혀 세 번째 근이 나온다(부호가 다르면 이 논증이 무너진다). 극한값은 0 이 아니어야 하고, 기준점 두 개는 서로 달라야 한다."
    creative: "(1) 두 극한값의 부호를 반대로 주고 보장되는 최소 근 개수를 다시 묻기 → 답이 2개로 바뀌며 ★4 유지 (2) 기준점을 셋으로 늘려 근 5개를 보이게 하면 같은 골조 반복 ★4 (3) f 를 삼차함수로 특정하고 f 를 직접 구하게 하면 통찰이 계산으로 바뀌어 ★3 (4) 「적어도 3개」가 아니라 「정확히 3개」를 묻고 차수 조건을 붙이면 사후 기각이 필요해 I-VF 추가 → ★5 후보."
```

## 표본 판정 요약 (15문)

- ★ 분포: ★1 3 · ★2 9 · ★3 2 · ★4 1 · ★5 0
- 통찰형 5(53-85 · 54-87 · 56-93 · 56-94 · 56-95) · 절차형 10 · premium 0
- 통찰 유형 분포: I-EQV 5 · I-RT 1 · I-BW 1 (합 7 라벨 · depth 3 은 56-95 한 곳)
- type_hint 상위: 「사잇값 정리 — 실근 존재 보이기」 2 · 「사잇값 정리 — 부호 변화로 최소 개수 세기」 2 · 「최대·최소 정리 — 닫힌구간 최대·최소」 2 · 「연속함수의 성질 — 연속인 구간(몫 포함)」 2 · 나머지 7 은 각 1
- 내용 분포: 연속함수의 성질 4 · 최대·최소 정리 4 · 사잇값 정리 7
- 대상층: 하위권 2 · 중하위권 8 · 중위권 3 · 중상위권 1 · 상위권 1
- 그림: 1문(`crop:fig-54-87.png`)
- 서술형(풀이 참조) 3문: 55-e8 · 55-88 · 56-95

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC1-53-e6 | 필수 예제 ★2 출발이지만 통찰 0·M_total 5 로 −1 후보. 소문항 4개와 구간 분할 표기를 이유로 ★2 유지 | ★1 / ★2 |
| GN-CALC1-55-88 | 55-e8 과 골조가 같고 계산량은 더 큰데, 확인체크 신호를 따라 ★1 로 두어 필수 예제(★2)와 1단 차이가 남 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 type_hint 는 네 묶음뿐이다 — ⑴ 사칙연산 함수가 연속인 구간(53-e6 · 56-90) ⑵ 닫힌구간에서의 최대·최소(54-e7 · 54-86 · 56-91) ⑶ 사잇값 정리로 실근 존재 보이기(55-e8 · 55-88 · 56-92) ⑷ 부호 변화로 실근의 최소 개수 세기(55-e9 · 55-89 · 56-94).
- 따로 세워야 할 유형: 「몫함수가 모든 실수에서 연속일 조건(분모의 판별식)」(56-93)은 ⑴과 도구가 달라 별도 유형이 맞다. 「그래프에서 최대·최소의 존재 판정」(54-87)도 ⑵와 달리 정리의 가정을 따지는 쪽이라 분리한다. 「극한 조건에서 함숫값·부호를 끌어내기」(56-95)는 사잇값 정리 계열 중 유일한 ★4 라 독립 유형으로 둔다.
- 통합해도 될 유형: ⑶과 ⑷는 「사잇값 정리 적용」 하나로 묶고 소분류(존재 보이기 / 개수 세기)로 나누는 편이 낫다. 56-94 는 ⑷에 「이항해서 새 함수 만들기」 한 단계가 붙은 상위 슬롯으로 잡으면 된다.
- base ★ 후보: ⑴ ★2 · ⑵ ★1~2 · ⑶ ★2 · ⑷ ★2 · 판별식 조건 ★3 · 그래프 존재 판정 ★2 · 극한 조건 ★4.
