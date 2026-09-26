---
name: mechanism-데이터-GN-GEO-27
description: 개념원리 기하 27 두 직선이 이루는 각(1/1 · 222~227쪽 · 23문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 기하 (22개정 · 학생용 PDF) · 전사본 latex-bank/gn-geo
  section: 27 두 직선이 이루는 각
  unit_code: GEO-27
  part: "1/1"
  extract_range: "222~227쪽 · 222-462~227-481"
  total_problems: 23
  unit_total: 23
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-geo/items/<id>.tex
  image_source: latex-bank/gn-geo/figures/ (crops.json)
---

# 개념원리 기하 · 27 두 직선이 이루는 각 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 기하 27단원 「두 직선이 이루는 각」 222~227쪽 전 23문항을 다룬다. 구역은 다섯 개다 — 「개념원리 익히기」 4문(222-462~222-465) · 「필수·발전 예제」 8문(필수 예제 223-e5·224-e6, 발전 예제 225-e7 과 각 예제 뒤의 확인체크 5문) · 「연습문제 STEP 1」 5문 · 「연습문제 STEP 2」 4문 · 「연습문제 실력 UP」 2문. 개념원리 고등의 난이도 신호는 구역·태그·연습문제 level 이므로 익히기 ★1, 필수 예제와 STEP 1 ★2, 발전 예제와 STEP 2 ★3, 실력 UP ★4 를 출발점으로 잡고 M_total·통찰로 ±1 조정했다. 예제 바로 뒤의 확인체크는 익히기(★1)가 아니라 해당 예제를 출발점으로 삼았다(18단원 파일과 같은 관례).

단원 전체가 **방향벡터 하나로 환원되는 단원**이다. 23문항 중 18문항이 「직선의 방정식 표준형에서 방향벡터를 읽는다 → 내적으로 각·평행·수직을 판정한다」는 한 골조의 변주이고, 나머지는 여기에 수선의 발(매개변수 + 내적 0)·구와의 교점·공통수선을 얹은 것이다. 그래서 이 범위의 진짜 함정은 계산이 아니라 **표준형으로 고쳐 쓰기**다: `1-x`·`(3-x)/2`·`2-y`·`(4-z)/3` 처럼 분자가 뒤집힌 꼴에서 방향벡터 성분의 부호를 놓치는 것(T-부호), `2(x+1)` 처럼 계수가 앞에 붙은 꼴을 분모 1/2 로 옮기는 것, 방향벡터에 0 성분이 있어 표준형으로 못 쓰고 `y=1` 을 따로 적어야 하는 것(T-표기), 두 직선의 교점은 매개변수를 각각 다른 문자로 두어야 한다는 것이다. 변형을 만들 때도 이 네 가지가 ★ 를 좌우한다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다. 이 범위에는 그림이 있는 문항이 없다(전 문항 `figure: none`).

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-GEO-222-462
  page: 222
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    두 공간직선 $1-x=\dfrac{y-2}{10}=\dfrac{z}{7}$, $\dfrac{x+1}{3}=\dfrac{y}{5}=\dfrac{z-2}{4}$ 가 이루는 각의 크기를 구하는 과정의 빈칸(방향벡터 두 개 · $\cos\theta$ · $\theta$) 채우기.
  category: "표준형 정리 → 방향벡터 → 내적으로 cos θ → θ"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선이 이루는 각의 크기(방향벡터 내적)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    단원의 정의를 그대로 따라가는 빈칸 채우기. 유일한 마찰은 1-x 를 (x-1)/(-1) 로 고쳐 x 성분을 -1 로 읽는 부호 처리뿐이고, 나머지는 내적·크기 대입 한 줄씩이다. 익히기 구역 출발점 ★1 · 통찰 없음 · M_total 6 → ★1 유지.
  tier: star_1
  mechanism_primary: "1-x 를 (x-1)/(-1) 로 정리 → u=(-1,10,7), v=(3,5,4) → cos θ = |u·v|/(|u||v|) = 75/(√150·√50) → θ=30°"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(-1,\,10,\,7)$, $(3,\,5,\,4)$, $\dfrac{\sqrt{3}}{2}$, $30^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/222-462.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 방향벡터 성분을 바꿀 수 있다. 제약: |u·v|/(|u||v|) 가 0, 1/2, √2/2, √3/2 중 하나가 되도록 성분을 고른다(그래야 θ 가 30°·45°·60°·90° 로 떨어진다). 분자를 뒤집은 꼴(1-x 류)은 최소 하나 남겨 부호 함정을 유지한다."
    creative: "(1) 빈칸을 없애고 θ 만 묻기(★1 유지) (2) 한 직선을 두 점을 지나는 직선으로 주기 → 방향벡터를 스스로 만들어야 함(★2) (3) θ 를 주고 한 성분을 미지수로 두면 이차방정식이 생겨 ★2~3(223-e5 골조)."
```

```yaml
- id: GN-GEO-222-463
  page: 222
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑵ 두 직선 $l$, $m$ 이 이루는 각의 크기 구하기. ⑴ 은 평면의 두 직선, ⑵ 는 공간의 두 직선이며 둘 다 분자가 뒤집힌 항($2-y$, $1-z$)을 포함한다.
  category: "방향벡터 읽기 → 내적 → cos θ → θ (평면·공간 각 1문)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선이 이루는 각의 크기(방향벡터 내적)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    462 의 빈칸을 뗀 형태로, 평면(2차원)과 공간(3차원)에서 같은 식을 한 번씩 쓰게 한다. ⑴ 은 (3,-1) 과 (2,1) 의 내적으로 45°, ⑵ 는 (1,2,-1) 과 (2,1,1) 의 내적으로 60°. 통찰 없음 · M_total 6 · 익히기 → ★1.
  tier: star_1
  mechanism_primary: "각 직선을 표준형으로 정리해 방향벡터 → cos θ = |u·v|/(|u||v|) → ⑴ 1/√2 → 45°, ⑵ 1/2 → 60°"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $45^\circ$ ⑵ $60^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/222-463.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 성분(분모·분자의 상수)을 바꿀 수 있다. 제약: 평면 문항은 |u||v| 가 유리화되도록, 공간 문항은 |u|=|v| 가 되게 잡으면 cos 이 깔끔하다. 소문항 두 개의 답이 서로 다른 특수각이 되게 유지한다."
    creative: "(1) 한 소문항을 「수직임을 보이시오」로 바꾸기(★1) (2) θ 대신 tan θ 를 묻기(223-466 골조 · ★2) (3) 세 직선을 주고 이루는 각이 가장 작은 쌍을 고르게 하면 비교 단계가 붙어 ★2."
```

```yaml
- id: GN-GEO-222-464
  page: 222
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    평면의 두 직선 $l\colon \dfrac{3-x}{2}=\dfrac{y-1}{a}$, $m\colon \dfrac{x+1}{6}=\dfrac{y-2}{3}$ 에 대하여 ⑴ $l\parallel m$ ⑵ $l\perp m$ 일 때의 실수 $a$.
  category: "방향벡터 → 평행이면 성분비 일치, 수직이면 내적 0 → a"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선의 평행·수직 조건으로 미지수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (3-x)/2 를 (x-3)/(-2) 로 고쳐 u=(-2,a) 를 얻는 것이 전부이고, 이후는 평행이면 -2:6=a:3, 수직이면 -12+3a=0 한 줄. 미지수가 하나 들어가 M_a=2 지만 통찰은 없고 M_total 6 → 익히기 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: "u=(-2,a), v=(6,3) → ⑴ 성분비 -2/6=a/3 → a=-1 ⑵ 내적 -12+3a=0 → a=4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $-1$ ⑵ $4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/222-464.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "m 의 방향벡터 (6,3) 과 l 의 분모 2 를 바꿀 수 있다. 제약: 평행 답과 수직 답이 모두 정수(또는 간단한 분수)가 되려면 m 의 두 성분이 서로 배수 관계가 좋고, 부호 뒤집힌 분자(3-x)는 유지해야 함정이 남는다."
    creative: "(1) 두 조건을 한 문항에서 a, b 두 미지수로 나눠 주기(224-e6 골조 · ★2) (2) 공간으로 올려 성분 세 개의 비를 맞추게 하기(222-465 · ★1~2) (3) 「평행도 수직도 아니도록 하는 a 의 범위」로 바꾸면 여집합 사고가 들어가 ★2~3."
```

```yaml
- id: GN-GEO-222-465
  page: 222
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    공간의 두 직선 $l\colon \dfrac{x-2}{a}=\dfrac{y+1}{-4}=\dfrac{z-3}{2}$, $m\colon \dfrac{x+2}{3}=\dfrac{y-1}{-a+4}=z-2$ 에 대하여 ⑴ $l\parallel m$ ⑵ $l\perp m$ 일 때의 실수 $a$.
  category: "공간 방향벡터 → 평행은 세 성분비 동시 일치, 수직은 내적 0 → a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공간에서 두 직선의 평행·수직 조건으로 미지수 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    464 의 공간판이며 미지수 a 가 두 직선 양쪽에 들어간다. 평행은 a:3=(-4):(4-a)=2:1 세 비가 동시에 맞아야 하므로 z 성분비 2 를 먼저 쓰는 것이 빠르고, 수직은 3a-4(4-a)+2=0 한 줄. 통찰 없음 · M_total 7 이지만 +1 신호(통찰 2개·depth 3)는 없어 익히기 ★1 유지.
  tier: star_1
  mechanism_primary: "u=(a,-4,2), v=(3,4-a,1) → ⑴ 비 2:1 을 기준으로 a=6 ⑵ 3a-4(4-a)+2=0 → a=2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $6$ ⑵ $2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/222-465.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a 가 들어가는 위치와 나머지 성분(-4, 2, 3, 1)을 바꿀 수 있다. 제약: 평행 조건이 세 비 모두에서 같은 a 를 주어야 하므로(모순이면 답 없음) 성분을 정한 뒤 반드시 세 비를 모두 확인해야 하고, 수직 조건도 정수해가 되게 상수를 고른다."
    creative: "(1) 평행 조건을 만족시키는 a 가 존재하지 않음을 보이게 하기(★2 · 모순 확인) (2) a 를 두 직선에 각각 p, q 로 분리해 p+q 를 묻기(224-469 골조 · ★2) (3) 평행·수직 어느 쪽도 아닌 경우 이루는 각을 구하게 하면 각 계산이 붙어 ★2."
```

### 필수·발전 예제

```yaml
- id: GN-GEO-223-e5
  page: 223
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 두 직선 $l$, $m$ 이 이루는 각의 크기가 $45^\circ$ 일 때 실수 $a$ 의 값. ⑴ 은 평면, ⑵ 는 공간이고 $a$ 는 한쪽 직선의 한 성분에만 들어간다.
  category: "cos 45° = |u·v|/(|u||v|) → 양변 제곱 → a 에 대한 이차방정식"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이루는 각이 주어질 때 미지수 구하기(내적 → 이차방정식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    방향으로만 보면 462 의 역방향이지만, 절댓값이 있는 채로 제곱해 이차방정식을 푸는 표준 절차라 진짜 착안은 없다. ⑴ 은 3a²-8a-3=0 으로 두 근, ⑵ 는 a²+8a+16=0 으로 중근이 나와 답의 개수가 달라지는 것이 이 문항의 포인트다. 필수 예제 출발점 ★2 · 통찰 없음 · M_total 8(계산 마찰) → ★2 유지.
  tier: star_2
  mechanism_primary: "u·v 를 a 로 표현 → |u·v|/(|u||v|)=1/√2 양변 제곱 → a 이차방정식 → ⑴ 두 근 ⑵ 중근"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $a=-\dfrac{1}{3}$ 또는 $a=3$ ⑵ $a=-4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/223-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 각(45°·60°·30°)과 a 가 없는 쪽 방향벡터 성분을 바꿀 수 있다. 제약: 제곱 후 판별식이 완전제곱수여야 유리근이 되고, cos 60°=1/2 로 바꾸면 계수가 4배로 달라진다. 중근 사례(⑵)는 판별식 0 을 맞춰야 재현된다."
    creative: "(1) 「a 의 값의 합」으로 바꿔 근과 계수의 관계를 유도하기(223-467 골조 · ★2) (2) a 를 두 직선 양쪽에 넣어 사차·이차 혼합식 만들기(★3) (3) 각의 크기 대신 tan θ 나 sin θ 를 주면 표현 전환이 한 단계 붙어 ★3."
```

```yaml
- id: GN-GEO-223-466
  page: 223
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 공간직선 $-x=\dfrac{y-1}{2}=\dfrac{z}{3}$, $\dfrac{x-1}{3}=y-1=\dfrac{1-z}{2}$ 가 이루는 각을 $\theta$ 라 할 때 $\tan\theta$ 의 값.
  category: "방향벡터 → cos θ → 특수각 확인 → tan θ"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선이 이루는 각의 삼각비(cos 에서 tan 으로)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    내적으로 cos θ=7/14=1/2 를 얻은 뒤 θ=60° 이므로 tan θ=√3 한 단계가 더 붙는다. 두 직선이 이루는 각은 예각으로 잡는다는 약속(절댓값) 덕에 부호 고민이 없고, -x 와 (1-z)/2 의 부호 처리만 주의하면 된다. 필수 예제의 확인체크 → ★2 출발 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "u=(-1,2,3), v=(3,1,-2) → cos θ=|−7|/(√14·√14)=1/2 → θ=60° → tan θ=√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/223-466.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분을 바꾸되 cos θ 가 1/2·√2/2·√3/2 중 하나가 되게 한다. 제약: tan 을 묻는 이상 θ=90° 가 되는 성분 조합(내적 0)은 피해야 하고, |u|=|v| 로 맞추면 cos 이 정수비로 떨어져 난이도가 안정된다."
    creative: "(1) sin θ 를 묻기(★2 유지) (2) cos θ 값만 주고 특수각이 아닌 채로 tan 을 구하게 하면 삼각함수 항등식이 필요해 ★3 (3) 이루는 각이 60° 임을 이용해 두 직선 위의 두 점 사이 거리를 묻는 문제로 확장(★3~4)."
```

```yaml
- id: GN-GEO-223-467
  page: 223
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    평면의 두 직선 $\dfrac{x+2}{\sqrt{3}}=\dfrac{y-4}{5}$, $\dfrac{x-5}{2}=\dfrac{y+1}{a}$ 이 이루는 각이 $30^\circ$ 가 되도록 하는 모든 실수 $a$ 의 값의 합.
  category: "cos 30° 식을 제곱 → a 이차방정식 → 근과 계수의 관계로 합"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 3
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "근을 따로 구하지 않고 a²+5√3a-18=0 의 두 근의 합을 근과 계수의 관계로 바로 읽음(기하 조건 → 이차방정식 이론 결합)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이루는 각 조건에서 미지수의 값의 합(근과 계수의 관계)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e5 와 같은 골조지만 발문이 「모든 a 의 합」이라 근을 구하지 않고 합만 읽으면 끝난다. 무리수 계수(√3) 때문에 근을 직접 구하는 길도 열려 있어 통찰 깊이는 1 로 낮게 잡았다. 확인체크 ★2 출발 · 통찰 1개(depth 1) 로 +1 신호(2개 이상 또는 depth 3) 미달 → ★2.
  tier: star_2
  mechanism_primary: "u=(√3,5), v=(2,a) → |u·v|/(|u||v|)=√3/2 제곱 → a²+5√3a-18=0 → 두 근의 합 -5√3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-5\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/223-467.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "√3, 5, 2 와 각 30° 를 바꿀 수 있다. 제약: 제곱 후 a² 계수가 0 이 되면 근이 하나뿐이라 「합」 발문이 무너지므로 판별식 > 0 을 유지하고, 답이 깔끔하려면 일차항 계수를 이차항 계수로 나눈 값이 정리되는 성분을 고른다."
    creative: "(1) 「모든 a 의 곱」으로 바꾸기(★2 유지 · 상수항/이차항) (2) 각을 45° 로 바꿔 유리계수 이차방정식으로 만들면 근과 계수 유인이 약해져 ★2 하단 (3) a 의 값이 존재하도록 하는 각의 범위를 묻는 문제로 바꾸면 판별식 조건이 들어가 ★3~4."
```

```yaml
- id: GN-GEO-224-e6
  page: 224
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    평면의 세 직선 $l\colon x+4=\dfrac{6-y}{2}$, $m\colon \dfrac{3-x}{2}=\dfrac{y-1}{a}$, $n\colon 5-x=\dfrac{y+2}{b}$ 에서 $l\parallel m$, $l\perp n$ 일 때 $a+b$.
  category: "l 의 방향벡터 고정 → 평행은 성분비, 수직은 내적 0 → a, b"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선의 평행과 수직(세 직선에서 두 미지수 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 직선이 나오지만 기준은 l 의 방향벡터 (1,-2) 하나이고, 평행 조건에서 a, 수직 조건에서 b 가 독립적으로 결정된다. 분자가 뒤집힌 꼴이 세 직선 모두에 들어 있어(6-y, 3-x, 5-x) 부호 실수만 걸러 내는 구조다. 필수 예제 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "l 의 방향 (1,-2) → m 과 평행: 1/(-2)=(-2)/a → a=4 · n 과 수직: -1-2b=0 → b=-1/2 → a+b=7/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{7}{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/224-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "l 의 방향벡터와 m, n 의 분모를 바꿀 수 있다. 제약: a 는 정수로, b 는 l 의 두 성분 비의 음의 역수로 나오므로 두 성분이 서로소이면 b 가 분수가 된다(답을 정수로 만들려면 성분을 맞바꿔 고른다)."
    creative: "(1) a+b 대신 ab 나 a-b 를 묻기(★2 유지) (2) 세 직선이 한 점에서 만나는 조건을 추가하면 교점 계산이 붙어 ★3 (3) 공간으로 올려 성분 세 개로 만들면 224-469(★2), 거기에 꼬인 위치 판정을 더하면 ★3~4."
```

```yaml
- id: GN-GEO-224-468
  page: 224
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 점 $\pt{A}(a,\,3)$, $\pt{B}(-1,\,a)$ 를 지나는 직선이 직선 $\dfrac{x+1}{3}=y-2$ 와 수직일 때, 벡터를 이용하여 $a$ 의 값 구하기.
  category: "두 점 → 방향벡터 AB → 주어진 직선의 방향벡터와 내적 0 → a"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점을 지나는 직선의 수직 조건(방향벡터 AB 의 내적)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 점을 지나는 직선의 방향벡터가 AB=(-1-a, a-3) 이라는 정의 한 줄과 내적 0 한 줄이 전부이고, 일차방정식 -2a-6=0 로 끝난다. 확인체크라 ★2 에서 출발하지만 통찰 없음 · M_total 4(≤5) 로 -1 조건에 정확히 걸려 ★1.
  tier: star_1
  mechanism_primary: "AB=(-1-a, a-3) · 직선의 방향 (3,1) → 3(-1-a)+(a-3)=0 → a=-3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/224-468.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표와 직선의 방향벡터 (3,1) 을 바꿀 수 있다. 제약: a 가 두 점에 각각 하나씩 들어가야 일차식이 유지되고(같은 점에 둘 다 넣으면 이차식), 내적 식의 a 계수가 0 이 되지 않게 방향벡터를 고른다."
    creative: "(1) 수직 대신 평행으로 바꾸기(성분비 → ★1 유지) (2) 점을 공간의 세 좌표로 올리고 미지수를 두 개로(★2) (3) AB 가 주어진 직선과 이루는 각이 45° 가 되도록 하면 이차방정식이 생겨 ★2~3."
```

```yaml
- id: GN-GEO-224-469
  page: 224
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    공간의 세 직선 $l\colon \dfrac{x+2}{3}=\dfrac{y-1}{2}=z+3$, $m\colon \dfrac{x-2}{p}=\dfrac{y-4}{6}=\dfrac{2-z}{q}$, $n\colon x-3=\dfrac{y}{r}=\dfrac{z+1}{3}$ 에서 $l\parallel m$, $l\perp n$ 일 때 $p+q+r$.
  category: "l 의 방향벡터 기준 → 평행 성분비로 p, q · 수직 내적으로 r"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공간 세 직선의 평행·수직 조건으로 미지수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e6 의 공간판이다. m 의 z 성분이 (2-z)/q 로 뒤집혀 방향벡터 성분이 -q 라는 점이 유일한 함정이고, 평행에서 비율 3(=6/2)을 읽으면 p=9, q=-3 이 바로 나온다. 수직은 3+2r+3=0 한 줄. 확인체크 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "u=(3,2,1) → m 평행: (p,6,-q)=3u → p=9, q=-3 · n 수직: 3+2r+3=0 → r=-3 → 합 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/224-469.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "l 의 방향벡터와 m 의 y 성분 6(=비율을 정하는 수)을 바꿀 수 있다. 제약: 비율이 정수가 되도록 m 의 알려진 성분을 l 의 대응 성분의 배수로 두고, 수직 조건은 r 의 계수(l 의 y 성분)가 0 이 아니어야 한다."
    creative: "(1) p+q+r 대신 pqr 를 묻기(★2 유지) (2) l∥m 대신 l 과 m 이 이루는 각을 60° 로 주면 이차식이 생겨 ★3 (3) 미지수 위치를 분자 상수 쪽으로 옮기면 평행이 아니라 일치 조건(한 점 공유)이 되어 ★3."
```

```yaml
- id: GN-GEO-225-e7
  page: 225
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    ⑴~⑶ 점 $\pt{A}(-1,\,1,\,5)$ 와 직선 $l\colon \dfrac{x-1}{3}=y-2=1-z$ 에 대하여 수선의 발 $\pt{H}$ 의 좌표, 직선 $\pt{AH}$ 의 방정식, 점 $\pt{A}$ 와 $l$ 사이의 거리를 차례로 구하기.
  category: "l 위의 점을 매개변수로 → AH·u=0 으로 H → AH 방정식 → |AH|"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「수선의 발」이라는 기하 조건을 l 위의 매개변수 점 H 에 대한 AH·u=0 이라는 대수 조건으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "점과 직선 사이의 거리·수선의 발(매개변수 + 내적 0)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    이 단원에서 방향벡터 비교를 벗어나는 첫 골조다. H=(1+3t, 2+t, 1-t) 로 놓고 AH·u=0 에서 11t+11=0 → t=-1 을 얻으면 세 소문항이 연쇄로 풀린다. ⑵ 는 AH 의 방향벡터에 y 성분 0 이 들어가 표준형으로 못 쓰고 y=1 을 따로 적어야 하는 표기 함정(T-표기)이 핵심. 발전 예제 ★3 출발 · 통찰 1개(depth 1) → ★3 유지.
  tier: star_3
  mechanism_primary: "H=(1+3t,2+t,1-t) → AH·(3,1,-1)=0 → t=-1 → H(-2,1,2) → 방향 (1,0,3) 으로 AH 방정식(y=1 별도) → |AH|=√10"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $(-2,\,1,\,2)$ ⑵ $x+2=\dfrac{z-2}{3}$, $y=1$ ⑶ $\sqrt{10}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/225-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 좌표와 l 의 통과점·방향벡터를 바꿀 수 있다. 제약: t 가 정수로 떨어지도록 AP0·u 가 |u|² 의 배수가 되게 A 를 잡고, ⑵ 의 표기 함정을 유지하려면 AH 의 한 성분이 0 이 되도록(즉 A 와 H 의 한 좌표가 같도록) 설계해야 한다."
    creative: "(1) ⑶ 만 단독으로 묻기(225-470 · ★2) (2) H 대신 A 의 대칭점을 묻기(227-480 골조 · ★3) (3) l 위의 점 P 에 대해 |AP| 의 최솟값으로 바꾸면 이차함수 최소로 환원되어 ★3 (4) 직선을 하나 더 주고 두 직선에 동시에 수직인 직선을 요구하면 ★3~4(227-478)."
```

```yaml
- id: GN-GEO-225-470
  page: 225
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 $\pt{A}(1,\,-2,\,-1)$ 과 직선 $l\colon \dfrac{x+1}{2}=y-3=\dfrac{4-z}{3}$ 사이의 거리.
  category: "l 위의 점을 매개변수로 → AP·u=0 으로 수선의 발 → |AP|"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "점과 직선 사이의 거리(수선의 발 후 길이)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e7 에서 세운 골조를 그대로 한 번 적용하는 확인 문항이다. P=(-1+2t, 3+t, 4-3t) 로 놓고 AP·u=0 에서 14t-14=0 → t=1, AP=(0,6,2) 로 2√10. (4-z)/3 의 z 성분이 -3 이라는 부호 처리만 주의하면 되고 새 착안은 없어 절차형으로 두었다. 발전 예제의 확인체크라 벤더 신호는 ★3 쪽이지만 단일 계산이라 -1 하여 ★2.
  tier: star_2
  mechanism_primary: "P=(-1+2t,3+t,4-3t) → AP·(2,1,-3)=0 → t=1 → AP=(0,6,2) → 거리 2√10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\sqrt{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/225-470.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 좌표와 l 의 방향벡터·통과점을 바꿀 수 있다. 제약: t 가 정수가 되려면 (AP0·u) 가 |u|² 의 배수여야 하고, 거리가 무리수 한 개로 정리되도록 |u|² 를 작은 수(14, 9, 6 등)로 잡는다."
    creative: "(1) 거리 대신 수선의 발의 좌표를 묻기(★2 유지) (2) 거리를 주고 A 의 한 좌표를 미지수로 두면 역방향이 되어 ★3 (3) 점 대신 다른 직선을 주고 평행한 두 직선 사이의 거리로 바꾸면 ★3 (4) 꼬인 위치 두 직선 사이 최단거리로 확장하면 ★4(227-481)."
```

### 연습문제 STEP 1

```yaml
- id: GN-GEO-226-471
  page: 226
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    점 $(3,\,2)$ 를 지나고 직선 $2(x+1)=\dfrac{1-y}{2}$ 에 평행한 직선 위의 점이 아닌 것 고르기(5지선다).
  category: "계수 붙은 꼴을 표준형으로 → 방향벡터 → 평행한 직선의 식 → 보기 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "주어진 직선에 평행한 직선 위의 점 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이 문항의 관문은 하나다 — 2(x+1) 을 (x+1)/(1/2) 로 보아 방향벡터 (1/2,-2) 즉 (1,-4) 를 얻는 것. 그 뒤 y-2=-4(x-3), 즉 y=-4x+14 에 다섯 보기를 대입하면 ④ 만 어긋난다. 통찰 없음 · M_total 6 · STEP 1 → ★2.
  tier: star_2
  mechanism_primary: "2(x+1)=(1-y)/2 → 방향 (1,-4) → (3,2) 지나는 y=-4x+14 → 보기 대입 → ④"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/226-471.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점과 계수 2, 분모 2 를 바꿀 수 있다. 제약: 기울기가 정수가 되도록 계수를 고르고, 오답 보기는 정답 직선 위의 점에서 한 좌표만 어긋나게 만들어야 찍기로 걸러지지 않는다."
    creative: "(1) 평행 대신 수직인 직선 위의 점을 묻기(★2 유지) (2) 보기를 좌표가 아니라 직선의 방정식으로 주면 표준형 변환을 다섯 번 해야 해 ★3 (3) 공간으로 올려 직선 위의 점 판정으로 바꾸면 성분 세 개의 매개변수 일치 확인이 필요해 ★2~3(226-472 ④⑤ 골조)."
```

```yaml
- id: GN-GEO-226-472
  page: 226
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    공간직선 $\dfrac{x-1}{2}=2-y=\dfrac{z+4}{2}$ 에 대한 다섯 설명(지나는 점 · 주어진 벡터와 수직 · 평행 · $x$축과 만남 · $z$축과 만남) 중 옳지 않은 것 고르기.
  category: "방향벡터·통과점 확정 → 다섯 명제를 각각 내적·성분비·매개변수 일치로 판정"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선의 방정식에 대한 참·거짓 종합 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    통과점 (1,2,-4) 와 방향벡터 (2,-1,2) 를 읽으면 ①②③ 은 대입·내적·성분비로 각각 한 줄이고, ④⑤ 는 매개변수 (1+2t, 2-t, -4+2t) 에서 두 좌표가 동시에 0 이 되는 t 가 있는지로 갈린다(x축은 t=2 로 가능, z축은 t 가 어긋나 불가). 판정이 다섯 번 반복돼 M_total 8 이지만 이는 계산 누적이지 통찰이 아니므로 v3.8 기준 ★ 상승 신호가 아니다. STEP 1 → ★2.
  tier: star_2
  mechanism_primary: "통과점 (1,2,-4)·방향 (2,-1,2) → ①대입 ②내적 0 ③성분비 ④⑤ 매개변수로 두 좌표 동시 0 판정 → ⑤ 불가"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/226-472.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 통과점과 방향벡터를 바꿀 수 있다. 제약: 축과 만나는지가 갈리려면 방향벡터 성분 사이의 비와 통과점 좌표의 비가 한쪽만 맞아야 하고, 수직 보기(②)는 내적이 정확히 0 인 벡터를, 평행 보기(③)는 방향벡터의 음의 배수를 써야 한다."
    creative: "(1) 옳은 것을 모두 고르는 ㄱㄴㄷ 형으로 바꾸기(★2~3) (2) 「xy평면과 만나는 점」을 넣으면 한 좌표만 0 으로 두는 판정이 추가돼 ★3 (3) 두 직선을 주고 꼬인 위치인지 판정하게 하면 평행·교점 두 가지를 모두 부정해야 해 ★3."
```

```yaml
- id: GN-GEO-226-473
  page: 226
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    직선 $\dfrac{1-x}{2}=y=\dfrac{z-1}{2}$ 과 구 $x^2+y^2+z^2=38$ 의 두 교점을 $\pt{A}$, $\pt{B}$ 라 할 때 선분 $\pt{AB}$ 의 길이.
  category: "직선을 매개변수로 → 구의 식에 대입 → t 의 이차방정식 → |AB|=|t₁-t₂||u|"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "직선의 매개변수 표현(이 단원)과 구의 방정식을 결합해 교점 문제를 t 의 이차방정식으로 옮김(중심-직선 거리 + 현의 길이 2√(r²-d²) 로 가는 기하적 길도 동치)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "직선과 구의 교점이 만드는 현의 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    대입하면 9t²+2=38 → t=±2 가 되어 |AB|=|t₁-t₂||u|=4·3=12. 매개변수 차이에 방향벡터의 크기를 곱해야 길이가 된다는 점을 모르면 좌표를 두 개 구해 거리 공식으로 돌아가야 한다. 중심에서 직선까지의 거리를 구해 2√(r²-d²) 로 가는 길도 같은 분량이다. STEP 1 ★2 출발 · 통찰 1개(depth 1) → ★2. [분류 이슈] 구 단원과의 결합이라 골조를 모르면 막히는 문항 — ★3 후보.
  tier: star_2
  mechanism_primary: "직선 위 점 (1-2t, t, 1+2t) 를 구에 대입 → 9t²+2=38 → t=±2 → |AB|=|Δt||u|=4·3=12"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/226-473.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구의 반지름 제곱 38 과 직선의 통과점·방향벡터를 바꿀 수 있다. 제약: 이차방정식이 t 의 일차항 없이 정리되면(통과점에서 중심까지의 벡터가 방향벡터와 수직일 때) 계산이 깔끔하고, t² 값이 완전제곱이어야 답이 정수로 떨어진다. 판별식 > 0(두 교점 존재)은 반드시 확인."
    creative: "(1) 현의 길이 대신 중심에서 직선까지의 거리를 묻기(★2) (2) 구의 반지름을 미지수로 두고 |AB|=12 를 주면 역방향이 되어 ★3 (3) 직선이 구에 접하도록 하는 조건으로 바꾸면 판별식 0 이 들어가 ★3 (4) 교점 두 개와 중심이 이루는 각을 묻기(★3)."
```

```yaml
- id: GN-GEO-226-474
  page: 226
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    두 점 $(-1,\,-1)$, $(3,\,2)$ 를 지나는 직선과 두 점 $(-2,\,1)$, $(5,\,0)$ 을 지나는 직선이 이루는 각의 크기.
  category: "두 점 → 방향벡터 두 개 → 내적으로 cos θ → θ"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선이 이루는 각의 크기(방향벡터 내적)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    방향벡터를 (4,3), (7,-1) 로 만드는 것 외에 462·463 과 완전히 같은 계산이고 부호 함정도 없다(분자가 뒤집힌 꼴이 없다). 통찰 없음 · M_total 5(≤5) 로 -1 조건에 걸려 STEP 1 ★2 에서 ★1 로 내렸다.
  tier: star_1
  mechanism_primary: "방향 (4,3), (7,-1) → cos θ=|28-3|/(5·5√2)=1/√2 → 45°"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$45^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/226-474.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 점의 좌표를 바꿀 수 있다. 제약: 두 방향벡터의 크기가 각각 정수(피타고라스 수 3-4-5 등)가 되게 점을 고르면 cos 이 특수각으로 떨어지고, 내적이 0 이 되는 조합은 45°·60° 문항으로 쓰려면 피한다."
    creative: "(1) 한 직선을 방정식으로 주기(★1 유지) (2) 네 점 중 하나를 미지수로 두고 각이 45° 가 되게 하면 이차방정식이 생겨 ★2(223-e5) (3) 세 점으로 삼각형을 만들어 한 내각의 크기를 묻기(★2 · 방향벡터를 꼭짓점 기준으로 잡아야 하는 함정)."
```

```yaml
- id: GN-GEO-226-475
  page: 226
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    공간의 세 직선 $l\colon 1-x=\dfrac{y}{p}=\dfrac{z+2}{q}$, $m\colon x+5=y-1=-z+3$, $n\colon x-2=y+4=\dfrac{z}{r}$ 에서 $l\parallel m$, $l\perp n$ 일 때 $p^2+q^2+r^2$.
  category: "부호 뒤집힌 항 정리 → 평행 성분비로 p, q · 수직 내적으로 r"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공간 세 직선의 평행·수직 조건으로 미지수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    469 와 같은 골조인데 부호 뒤집힌 항이 1-x 와 -z+3 두 군데라 방향벡터를 l=(-1,p,q), m=(1,1,-1) 로 정확히 읽는 것이 전부다. 평행에서 p=-1, q=1, 수직 -1+p+qr=0 에서 r=2. 제곱합을 묻는 것은 부호 실수를 답에서 가려 주는 장치. STEP 1 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "l 방향 (-1,p,q) ∥ m 방향 (1,1,-1) → p=-1, q=1 → n 방향 (1,1,r) 과 수직: -1-1+r=0 → r=2 → 1+1+4=6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/226-475.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "m 의 방향벡터와 부호 뒤집힌 항의 위치를 바꿀 수 있다. 제약: 평행 비가 -1 배(또는 정수배)로 떨어지게 두 직선의 대응 성분을 맞추고, 수직식에서 r 의 계수(=q)가 0 이 되지 않아야 r 가 유일하게 정해진다."
    creative: "(1) p+q+r 를 묻기(부호 실수가 답에 드러나 난이도 체감 ★2 상승) (2) l∥m 을 「l 과 m 이 일치」로 바꾸면 통과점 조건이 추가돼 ★3 (3) n 을 없애고 l 과 n 이 이루는 각을 60° 로 주면 이차방정식이 생겨 ★3."
```

### 연습문제 STEP 2

```yaml
- id: GN-GEO-227-476
  page: 227
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    두 직선 $l\colon \dfrac{x+4}{2}=y=\dfrac{5-z}{5}$, $m\colon x+3=\dfrac{y+4}{2}=\dfrac{z+14}{3}$ 의 교점과 점 $(1,\,3,\,-1)$ 을 지나는 직선이 점 $(a,\,b,\,3)$ 을 지날 때 $ab$.
  category: "서로 다른 매개변수로 두 직선 연립 → 교점 → 두 점을 지나는 직선 → z=3 대입"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 공간직선의 교점을 지나는 직선"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    단계는 세 덩어리(교점 → 직선 → 대입)로 길지만 각 덩어리는 표준 절차다. 진짜 함정은 두 직선의 점을 같은 문자로 놓으면 안 된다는 것(s, t 로 분리)과 (5-z)/5 의 부호이며, 연립 두 식으로 s, t 를 정한 뒤 남은 한 식이 맞는지 확인해 교점임을 확정한다. STEP 2 ★3 출발 · 통찰 없음이지만 M_total 10 으로 하향 신호도 없어 ★3 유지.
  tier: star_3
  mechanism_primary: "l 위 점(s)·m 위 점(t) 을 좌표별로 연립 → 교점 (0,2,-5) → (1,3,-1) 과의 방향 (1,1,4) → z=3 에서 (2,4,3) → ab=8"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/227-476.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 직선의 통과점·방향벡터와 마지막 점의 z 좌표를 바꿀 수 있다. 제약: 두 직선이 실제로 만나야 하므로(꼬인 위치가 되면 답 없음) 교점을 먼저 정하고 거기서 두 직선을 역설계하는 것이 안전하고, 마지막 대입에서 매개변수가 정수로 떨어지게 z 좌표를 고른다."
    creative: "(1) 교점의 좌표 자체를 묻기(★2~3) (2) 두 직선이 꼬인 위치임을 보이게 하면 연립 불능 확인이 핵심이 되어 ★3 (3) 교점과 원점을 지나는 직선이 구와 만나는 점을 묻는 결합 문제로 키우면 ★4 (4) 세 직선이 한 점에서 만나도록 하는 미지수를 구하게 하면 ★3~4."
```

```yaml
- id: GN-GEO-227-477
  page: 227
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    두 점 $\pt{A}(1,\,1,\,0)$, $\pt{B}(0,\,0,\,1)$ 과 직선 $x=y-1=\dfrac{z-2}{2}$ 위를 움직이는 점 $\pt{P}$ 에 대하여 $\overrightarrow{\pt{AP}}\cdot\overrightarrow{\pt{BP}}$ 가 최소가 되게 하는 $\pt{P}(a,\,b,\,c)$ 의 $a+b+c$.
  category: "P 를 매개변수로 → 내적을 t 의 이차식으로 → 꼭짓점에서 최소 → 좌표"
  M: {s: 2, k: 3, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "움직이는 점의 내적 최솟값이라는 기하 조건을 매개변수 t 의 이차함수 최솟값으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "직선 위를 움직이는 점의 내적 최솟값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    P=(t, 1+t, 2+2t) 로 놓고 내적을 전개하면 6t²+6t+2 라는 t 의 이차식이 되고, 꼭짓점 t=-1/2 에서 최소. 최솟값 자체가 아니라 그때의 좌표의 합을 묻기 때문에 t 를 구한 뒤 대입까지 가야 한다. 통찰 1개(표현 전환 depth 1) · M_total 7 · STEP 2 → ★3.
  tier: star_3
  mechanism_primary: "P=(t,1+t,2+2t) → AP·BP=6t²+6t+2 → t=-1/2 → P(-1/2,1/2,1) → 합 1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/227-477.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 의 좌표와 직선의 통과점·방향벡터를 바꿀 수 있다. 제약: 이차항 계수 |u|² 가 양수라 항상 최소가 존재하지만, 꼭짓점 t 가 간단한 분수가 되도록 일차항 계수를 |u|² 의 배수 근처로 맞춘다. 최댓값을 묻는 변형은 불가(위로 볼록이 아님)."
    creative: "(1) 내적의 최솟값 자체를 묻기(★3 유지) (2) |AP|+|BP| 의 최솟값으로 바꾸면 대칭점·평면 전개가 필요해 ★4 (3) AP·BP=0 이 되는 P 를 묻기(구와의 교점 · ★3) (4) P 를 두 직선 위로 각각 움직이게 하면 이변수 최소가 되어 ★4(227-481 골조)."
```

```yaml
- id: GN-GEO-227-478
  page: 227
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    두 직선 $l\colon \dfrac{x-1}{3}=y+1=\dfrac{3-z}{2}$, $m\colon {-x}-2=\dfrac{y-1}{2}=z$ 에 각각 수직이고 점 $(-2,\,-2,\,1)$ 을 지나는 직선의 방정식.
  category: "구하는 방향벡터 (a,b,c) → 두 내적 0 을 연립 → 비 결정 → 표준형"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 직선에 각각 수직이라는 독립 조건 두 개를 방향벡터 성분의 연립으로 통합해 비 (5,-1,7) 하나로 결정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 직선에 동시에 수직인 직선의 방정식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    방향벡터를 (a,b,c) 로 두고 3a+b-2c=0, -a+2b+c=0 을 연립하면 미지수 3개·식 2개라 값이 아니라 비만 정해진다는 것을 받아들여야 한다. 답을 쓸 때 y 성분이 -1 이라 분모를 1 로 두면 -y-2 꼴이 되는 표기도 주의점. STEP 2 ★3 · 통찰 1개 → ★3.
  tier: star_3
  mechanism_primary: "방향 (a,b,c) 에 3a+b-2c=0, -a+2b+c=0 → (a,b,c)=(5,-1,7) 비 → 점 (-2,-2,1) 지나는 표준형"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{x+2}{5}=-y-2=\dfrac{z-1}{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/227-478.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 직선의 방향벡터와 지나는 점을 바꿀 수 있다. 제약: 두 방향벡터가 평행이면 해가 무수히 많아지므로 서로 평행하지 않게 잡고, 연립 결과의 성분비가 서로소 정수가 되도록(공통인수를 약분한 꼴) 고른다."
    creative: "(1) 방향벡터만 구하게 하기(★2~3) (2) 두 직선과 각각 45° 를 이루는 직선으로 바꾸면 이차 조건 두 개가 되어 ★4 (3) 두 직선 모두와 만나면서 수직인 직선(공통수선)으로 바꾸면 위치까지 정해야 해 ★4(227-481) (4) 구하는 직선이 특정 평면 위에 있게 조건을 더하면 ★4."
```

```yaml
- id: GN-GEO-227-479
  page: 227
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    점 $\pt{A}(1,\,6,\,-3)$ 과 직선 $l\colon \dfrac{x-2}{3}=3-y=\dfrac{z-1}{2}$ 위의 두 점 $\pt{B}$, $\pt{C}$ 에 대하여 삼각형 $\pt{ABC}$ 가 정삼각형일 때 그 넓이.
  category: "B, C 가 l 위 → A 에서 l 까지의 거리가 정삼각형의 높이 → 한 변 → 넓이"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "B, C 가 같은 직선 위에 있으므로 A 에서 l 에 내린 거리가 곧 정삼각형의 높이라는 동치 관계를 세움(B, C 를 각각 구하려 들면 미지수 두 개로 늘어남)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "점과 직선 사이의 거리를 높이로 쓰는 정삼각형 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    B, C 의 좌표를 구하려 들면 매개변수 두 개로 늘어나 막히고, 「밑변이 l 위에 있으니 높이는 A 와 l 사이의 거리」를 보면 한 번에 끝난다. 거리 2√3 = (√3/2)·한 변 → 한 변 4 → 넓이 4√3. 동치 전환 통찰 1개(depth 2) · M_total 8 · STEP 2 → ★3(통찰 2개나 depth 3 이 아니라 +1 은 하지 않음).
  tier: star_3
  mechanism_primary: "A 와 l 사이 거리 = 높이 2√3 → (√3/2)a=2√3 → a=4 → 넓이 (√3/4)·16=4√3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/227-479.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 좌표와 l 의 통과점·방향벡터를 바꿀 수 있다. 제약: 수선의 발 매개변수가 정수로 떨어지고 거리²가 3 의 배수여야 한 변이 유리수로 나온다(높이 h 에 대해 한 변 = 2h/√3). 정삼각형을 유지하려면 A 가 l 위에 있으면 안 된다."
    creative: "(1) 둘레나 한 변의 길이를 묻기(★3 유지) (2) 정삼각형 대신 직각이등변삼각형으로 바꾸면 높이-밑변 관계가 달라져 ★3 (3) B, C 의 좌표까지 요구하면 매개변수 계산이 추가돼 ★4 (4) 넓이를 주고 A 의 한 좌표를 미지수로 두면 역방향이 되어 ★4."
```

### 연습문제 실력 UP

```yaml
- id: GN-GEO-227-480
  page: 227
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    직선 $l\colon \dfrac{x+1}{2}=\dfrac{1-y}{2}=\dfrac{z+2}{-3}$ 에 대하여 점 $\pt{P}(4,\,-1,\,-3)$ 과 대칭인 점의 좌표.
  category: "수선의 발 H 를 매개변수 + 내적 0 으로 → H 가 PP' 의 중점 → P'=2H-P"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「직선에 대하여 대칭인 점」을 「수선의 발이 두 점의 중점」이라는 좌표 조건으로 옮겨 P'=2H-P 로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "직선에 대한 점의 대칭점(수선의 발 + 중점)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    골조는 225-e7(수선의 발)에 중점 공식 한 줄을 얹은 것이다. Q=(-1+2t, 1-2t, -2-3t) 로 놓고 PQ·u=0 에서 17t-17=0 → t=1, H(1,-1,-5), P'=2H-P=(-2,-1,-7). 실력 UP 구역이라 ★4 에서 출발하지만 새 도구 없이 기존 두 골조의 합성이고 미지수도 하나라 -1 하여 ★3 으로 기록한다(벤더 신호와 1단 차이). [분류 이슈] 벤더 실력 UP ↔ 판정 ★3.
  tier: star_3
  mechanism_primary: "H=(-1+2t,1-2t,-2-3t) → PH·(2,-2,-3)=0 → t=1 → H(1,-1,-5) → P'=2H-P=(-2,-1,-7)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(-2,\,-1,\,-7)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/227-480.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P 의 좌표와 l 의 통과점·방향벡터를 바꿀 수 있다. 제약: t 가 정수가 되도록 (P0P·u) 를 |u|² 의 배수로 맞추면 대칭점 좌표가 모두 정수로 떨어진다(|u|²=17 처럼 큰 값이어도 배수만 맞으면 된다)."
    creative: "(1) 대칭점 대신 수선의 발이나 거리를 묻기(★2~3 · 225-e7 골조) (2) 평면에 대한 대칭점으로 바꾸면 법선벡터가 필요해 ★3~4 (3) 대칭점이 특정 좌표를 갖도록 P 의 한 성분을 미지수로 두면 역방향이 되어 ★4 (4) 대칭인 두 점을 지나는 직선이 다른 직선과 만나는지 묻는 결합 문제로 키우면 ★4."
```

```yaml
- id: GN-GEO-227-481
  page: 227
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    꼬인 위치에 있는 두 직선 $l\colon \dfrac{x-5}{2}=\dfrac{y-3}{2}=z+2$, $m\colon \dfrac{4-x}{2}=y+1=\dfrac{z+1}{2}$ 위의 점을 각각 $\pt{P}$, $\pt{Q}$ 라 할 때 선분 $\pt{PQ}$ 의 길이의 최솟값.
  category: "P, Q 를 서로 다른 매개변수로 → PQ 가 두 방향벡터에 모두 수직(공통수선) → |PQ|"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「PQ 의 길이가 최소」라는 최적화 조건을 「PQ 가 두 직선 모두에 수직」이라는 공통수선 조건으로 동치 변환(|PQ|² 를 두 변수 이차식으로 보고 최소를 찾는 길도 같은 결론)"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "PQ·u=0 과 PQ·v=0 두 조건을 s, t 에 대한 연립으로 통합해 두 매개변수를 동시에 결정"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "꼬인 위치 두 직선 사이의 최단거리(공통수선)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    이 범위에서 유일하게 매개변수 두 개를 동시에 다루는 문항이다. 최솟값을 「수직 조건 두 개」로 바꾸는 착안(EQV depth 2)과 그 두 조건을 연립으로 묶는 단계(CON)가 겹쳐 통찰 2개. 두 방향벡터에 동시에 수직인 방향 (1,-2,2) 를 먼저 구해 두 직선 위의 한 점을 잇는 벡터를 그 방향으로 정사영하는 길이 더 빠르다. 실력 UP ★4 출발 · 통찰 2개 → ★4 유지(★5 는 통찰 3개 이상 + SC/VF/SYM/XU 요구라 미달).
  tier: star_4
  mechanism_primary: "공통수선 방향 (1,-2,2) → 두 직선 위 한 점을 잇는 벡터 (-1,-4,1) 를 그 방향으로 정사영 → |9|/3=3"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/227-481.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 직선의 통과점과 방향벡터를 바꿀 수 있다. 제약: 두 방향벡터가 평행이면 꼬인 위치가 아니고, 통과점을 잇는 벡터가 공통수선 방향과 수직이면 두 직선이 만나 최솟값이 0 이 된다. 공통수선 방향의 크기가 정수(3, 7 등)가 되게 성분을 고르면 답이 유리수로 떨어진다."
    creative: "(1) 최솟값을 주는 P, Q 의 좌표를 묻기(★4 유지 · 연립 필수) (2) 두 직선이 만나도록 하는 미지수를 묻는 문제로 바꾸면 ★3 (3) 한 직선과 한 평면 사이의 거리로 옮기면 ★4 (4) 최솟값이 주어진 값이 되도록 한 직선의 통과점을 미지수로 두면 역방향이 되어 ★5 후보(전략 분기 발생)."
```

## 표본 판정 요약 (23문)

- ★ 분포: ★1 6 · ★2 10 · ★3 6 · ★4 1 · ★5 0
- 통찰형 8 · 절차형 15 · premium 0
- 통찰 유형 분포: I-EQV 4(225-e7 · 227-479 · 227-480 · 227-481) · I-XU 2(223-467 · 226-473) · I-CON 2(227-478 · 227-481) · I-RT 1(227-477) — depth 3 은 없음
- type_hint 상위: 「공간·평면 두 직선의 평행·수직 조건으로 미지수 결정」 5(222-464 · 222-465 · 224-e6 · 224-469 · 226-475) · 「두 직선이 이루는 각의 크기(방향벡터 내적)」 3(222-462 · 222-463 · 226-474) · 「점과 직선 사이의 거리·수선의 발」 3(225-e7 · 225-470 · 227-480) · 「이루는 각이 주어질 때 미지수 구하기」 2(223-e5 · 223-467) · 나머지는 1문씩(tan θ · 두 점의 수직 · 평행한 직선 위의 점 · 참거짓 종합 · 구와의 현 · 교점을 지나는 직선 · 내적 최솟값 · 두 직선에 수직인 직선 · 정삼각형 넓이 · 공통수선)
- 대상층: 하위권 6 · 중하위권 7 · 중위권 7 · 중상위권 2 · 상위권 1
- 그림: 0문(이 범위에는 그림이 딸린 문항이 없다 — 전 블록 `figure: none`)

## 분류 이슈 목록

판정이 애매하거나 벤더 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-GEO-225-470 | 발전 예제(★3)의 확인체크지만 e7 골조를 한 번 적용하는 단일 계산이라 ★2 로 기록(벤더 1단 차이) | ★2 / ★3 |
| GN-GEO-226-473 | STEP 1(★2)이지만 구 단원과의 결합이라 골조를 모르면 막힘 — 통찰 1개로는 +1 신호 미달이라 ★2 유지 | ★2 / ★3 |
| GN-GEO-227-480 | 실력 UP(★4) 구역이지만 새 도구 없이 수선의 발 + 중점의 합성이고 미지수 하나라 ★3 으로 기록 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 단원의 뼈대는 **「방향벡터 읽기 → 내적」** 하나다. 카탈로그를 만든다면 계산 방향이 아니라 **묻는 방향**으로 나누는 것이 실제 난이도와 맞는다: ⑴ 각 구하기(정방향) ⑵ 평행·수직으로 미지수 구하기(정방향) ⑶ 각이 주어질 때 미지수 구하기(역방향 · 이차방정식) — ⑶ 만 ★ 가 한 단 높다.
- **따로 세워야 할 유형**: 「점과 직선 사이의 거리·수선의 발」(225-e7 · 225-470 · 227-480 · 227-479 가 모두 여기서 파생 — 이 단원 ★3 이상의 공급원), 「꼬인 위치 두 직선의 최단거리」(227-481 · 매개변수 2개로 유일), 「직선과 구·좌표축의 교점 판정」(226-472 ④⑤ · 226-473).
- **통합해도 될 유형**: 평면과 공간의 평행·수직 문항(222-464 ↔ 222-465, 224-e6 ↔ 224-469 ↔ 226-475)은 차원만 다른 같은 골조라 한 유형의 난이도 변주로 묶는 편이 낫다. 「각 구하기」도 평면·공간을 나눌 필요가 없다(222-463 이 한 문항 안에서 둘 다 낸다).
- **표기 함정을 유형 속성으로**: `1-x`·`(3-x)/2`·`2-y`·`(4-z)/3` 부호 뒤집기(T-부호)와 방향벡터 0 성분 표기(T-표기 · 225-e7⑵ · 227-478)는 특정 유형의 속성이 아니라 이 단원 전체에 얹히는 **함정 태그**로 관리하는 것이 변형 설계에 유용하다.
