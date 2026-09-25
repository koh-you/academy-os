---
name: mechanism-데이터-GN-ALG-17
description: 개념원리 대수 17 삼각함수의 그래프(1/1 · 160~169쪽 · 37문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정) · 전사본 latex-bank/gn-alg
  section: 17 삼각함수의 그래프
  unit_code: ALG-17
  part: "1/1"
  extract_range: "160~169쪽 · 160-380~169-407"
  total_problems: 37
  unit_total: 37
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·예제 태그·연습문제 STEP)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/ (이 범위 그림 문항 5문)
---

# 개념원리 대수 · 17 삼각함수의 그래프 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 대수 160~169쪽, 17단원 「삼각함수의 그래프」 37문항 전수를 다룬다. 구역은 개념원리 익히기 4문, 필수·발전 예제 구역 23문(필수 예제 `쪽-eN` 9문 + 확인체크 14문), 연습문제 STEP 1 5문, STEP 2 4문, 실력 UP 1문이다. 개념원리 고등의 난이도 신호는 구역과 태그에 들어 있어 개념원리 익히기 → ★1, 필수 예제·확인체크 → ★2, STEP 1 → ★2, STEP 2 → ★3, 실력 UP → ★4 를 출발점으로 삼고, M_total 과 통찰 수로 ±1 조정했다.

이 단원의 골조는 다섯 갈래로 깔끔하게 갈린다. (1) `y=a sin(bx+c)+d` 꼴에서 진폭·주기·평행이동을 읽어 최대·최소·주기·점근선을 쓰는 순방향, (2) 최대·최소·주기·통과점을 주고 미정계수 `a, b, c, d` 를 역산하는 역방향, (3) 그래프 그림에서 식을 복원하는 그림→식 전환, (4) 절댓값 `|sin bx|` 로 음 부분을 접어 주기가 반이 되는 갈래, (5) 삼각함수 그래프로 둘러싸인 도형의 넓이. 앞 네 갈래는 예제 하나에 확인체크가 짝을 이루고, 다섯째 갈래는 STEP 2 에만 나온다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다. 이 단원 변형에서 가장 자주 깨지는 제약은 (1) 주기는 `2π/|b|`(tan 은 `π/|b|`)라서 `b` 의 부호·절댓값을 반드시 거치는 것, (2) `x` 축 방향 평행이동은 `x` 대신 `x-m` 을 넣는 것이라 `bx+c` 꼴에서 `c` 가 `-bm` 만큼 움직인다는 것, (3) 절댓값이 붙으면 주기가 반이 되고 치역의 아래쪽이 `0` 으로 잘린다는 것, (4) 계수 `a` 의 부호가 음이면 최대·최소가 뒤집힌다는 것 네 가지다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-ALG-160-380
  page: 160
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    y=3 sin x 의 ⑴ 정의역 ⑵ 최댓값·최솟값 ⑶ 대칭 ⑷ 주기 ⑸ y=sin x 로부터의 확대 방향·배율을 채우는 빈칸 문제.
  category: '$y=a\sin x$ 의 기본 성질 → 정의역·치역·대칭·주기·$y$축 방향 확대'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "y=a sin x 의 정의역·치역·주기·대칭성과 y축 방향 확대"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a=3 은 y축 방향 3배 확대이므로 치역만 [-3,3] 으로 커지고 주기 2π·원점 대칭은 sin x 그대로다.
    빈칸이 확인할 성질을 하나씩 지정해 주어 학생이 판단할 분기가 없다. 개념원리 익히기 ★1 출발 · 통찰 0 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "a=3 → y축 3배 확대 → 치역 [-3,3] · 주기 2π · 원점 대칭"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\{x \mid x$는 실수$\}$ \quad ⑵ $3$, $-3$ \quad ⑶ 원점 \quad ⑷ $2\pi$ \quad ⑸ $y$, $3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/160-380.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '진폭 a(2·4·1/2·-2)를 바꿀 수 있다. 제약: a 가 음수가 되면 ⑸ 의 「y축 방향 a배」에 x축 대칭이 추가로 붙어 빈칸 개수가 달라지므로 빈칸 문구를 함께 고쳐야 한다. 주기는 a 와 무관하게 2π 로 고정된다.'
    creative: '(1) cos·tan 으로 바꿔 대칭축·점근선을 묻기(★1 유지 · 160-381·160-382 와 같은 골조) (2) 진폭 대신 주기를 바꾼 y=sin bx 로(★1) (3) 다섯 성질 중 하나만 틀린 보기를 주고 고르게 하면 판단이 생겨 ★2.'
```

```yaml
- id: GN-ALG-160-381
  page: 160
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    y=cos(x/2) 의 ⑴ 정의역 ⑵ 치역 ⑶ 대칭 ⑷ 주기 ⑸ y=cos x 로부터의 확대 방향·배율을 채우는 빈칸 문제.
  category: '$y=\cos bx$ 의 기본 성질 → 주기 $2\pi/|b|$ 와 $x$축 방향 $1/|b|$배 확대'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "y=cos bx 의 주기와 x축 방향 확대·축소"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    b=1/2 이므로 주기는 2π÷(1/2)=4π 이고 그래프는 x축 방향으로 2배 늘어난다. 치역은 b 와 무관하게 [-1,1], 대칭은 cos 의 y축 대칭 그대로.
    개념원리 익히기 ★1 출발 · 통찰 0 · M_total 4 → ★1 유지. 주기와 배율이 서로 역수라는 점만 확인하면 끝난다.
  tier: star_1
  mechanism_primary: "b=1/2 → 주기 2π/|b|=4π · x축 방향 2배 확대 → 치역 [-1,1] · y축 대칭"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\{x \mid x$는 실수$\}$ \quad ⑵ $\{y \mid -1\le y\le 1\}$ \quad ⑶ $y$축 \quad ⑷ $4\pi$ \quad ⑸ $x$, $2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/160-381.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'b(2·3·1/3·1/4)를 바꿀 수 있다. 제약: 주기 2π/|b| 와 확대 배율 1/|b| 가 서로 역수이므로 둘을 동시에 고쳐야 하고, b 를 음수로 두면 cos 의 우함수성 때문에 주기는 같지만 ⑸ 의 배율 표기에 절댓값이 필요해진다.'
    creative: '(1) sin 으로 바꿔 대칭이 원점이 되게(★1) (2) 주기를 먼저 주고 b 를 묻는 역방향(★2 · I-EQV) (3) y=cos(x/2) 와 y=cos 2x 의 주기를 비교시키면 배율의 역수 관계가 드러나 ★2.'
```

```yaml
- id: GN-ALG-160-382
  page: 160
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    y=tan 3x 의 ⑴ 정의역 ⑵ 대칭 ⑶ 주기 ⑷ 점근선의 방정식 ⑸ y=tan x 로부터의 축소 방향·배율을 채우는 빈칸 문제.
  category: '$y=\tan bx$ 의 주기 $\pi/|b|$ 와 점근선 $bx=n\pi+\pi/2$'
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "y=tan bx 의 주기·점근선·정의역"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    tan 의 주기는 2π 가 아니라 π 이므로 π/3, 점근선은 3x=nπ+π/2 를 x 에 대해 풀어 x=nπ/3+π/6.
    정의역이 점근선의 여집합이라 n 이 들어간 일반형을 써야 해 Mₐ=2. 개념원리 익히기 ★1 출발 · 통찰 0 → ★1 유지.
  tier: star_1
  mechanism_primary: "b=3 → 주기 π/3 → 점근선 3x=nπ+π/2 → x=nπ/3+π/6 · 원점 대칭"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{n}{3}\pi+\dfrac{\pi}{6}$ \quad ⑵ 원점 \quad ⑶ $\dfrac{\pi}{3}$ \quad ⑷ $x=\dfrac{n}{3}\pi+\dfrac{\pi}{6}$ \quad ⑸ $x$, $\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/160-382.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'b(2·4·1/2)를 바꿀 수 있다. 제약: 점근선이 nπ/b+π/(2b) 로 나오므로 b 를 정수로 두어야 계수가 간단한 분수로 떨어지고, tan 의 주기는 π/|b| 라서 sin·cos 식과 섞어 쓰면 안 된다.'
    creative: '(1) 점근선 하나를 주고 b 를 역산시키기(★2 · I-EQV) (2) 정의역에서 제외되는 가장 작은 양수를 묻기(★2) (3) y=tan(3x-π/2) 처럼 평행이동을 섞으면 점근선 이동이 추가돼 ★2~3.'
```

```yaml
- id: GN-ALG-160-383
  page: 160
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴ y=sin 2x ⑵ y=2cos x ⑶ y=3tan x 의 그래프를 그리고 각각의 최댓값·최솟값·주기를 구하는 문제.
  category: '진폭·주기 변형 세 갈래 → 그래프 작도 후 최대·최소·주기'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "y=a sin bx, y=a cos bx, y=a tan bx 의 그래프와 최대·최소·주기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 은 주기만 π 로 줄고 치역 불변, ⑵ 는 치역만 [-2,2] 로 늘고 주기 불변, ⑶ 은 tan 이라 최대·최소가 없고 주기 π.
    세 갈래를 한 문제에서 대비시키는 구성이지만 각각은 공식 한 번. 개념원리 익히기 ★1 출발 · 통찰 0 · M_total 5 → ★1 유지.
  tier: star_1
  mechanism_primary: "b 는 주기 2π/|b|(tan 은 π/|b|) · a 는 치역 [-|a|,|a|] → tan 은 최대·최소 없음"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '그래프는 풀이 참조 \quad ⑴ 최댓값: $1$, 최솟값: $-1$, 주기: $\pi$ \quad ⑵ 최댓값: $2$, 최솟값: $-2$, 주기: $2\pi$ \quad ⑶ 최댓값, 최솟값: 없다., 주기: $\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/160-383.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'a, b 를 각각 2~4 또는 1/2, 1/3 로 바꿀 수 있다. 제약: tan 항목은 a 를 아무리 바꿔도 최대·최소가 없다는 답이 유지돼야 하고, 작도를 요구하므로 주기가 π/2 보다 잘게 쪼개지지 않도록 |b| ≤ 3 으로 둔다.'
    creative: '(1) 세 함수를 한 좌표평면에 그려 교점 개수를 묻기(★2~3 · I-RT) (2) 주기가 가장 큰 것을 고르게 하면 168-398 골조(★2) (3) 최댓값과 최솟값의 차를 묻는 한 줄 답형으로(★1 유지).'
```

### 필수·발전 예제

```yaml
- id: GN-ALG-161-e1
  page: 161
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ y=-sin 2x ⑵ y=sin(x-π/4) 의 최댓값·최솟값·주기를 구하고 그래프를 그리는 문제.
  category: 'x축 대칭·주기 축소(⑴)와 x축 방향 평행이동(⑵) → 최대·최소·주기'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사인함수의 그래프(진폭 부호·주기·평행이동)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 의 음부호는 x축 대칭이라 치역은 그대로 [-1,1] 이고 주기만 π 로 줄고, ⑵ 의 평행이동은 최대·최소·주기를 전혀 바꾸지 않는다.
    「a 의 부호와 c 는 최대·최소·주기에 영향이 없다」는 이 단원의 첫 관문을 두 갈래로 보여 주는 대표 예제. 필수 예제 ★2 출발 · 통찰 0 · M_total 5 로 -1 후보였으나 작도까지 요구하고 뒤 문항 전체의 기준이 되는 골조라 ★2 유지.
  tier: star_2
  mechanism_primary: "-sin 2x 는 x축 대칭+주기 π · sin(x-π/4) 는 오른쪽 π/4 이동 → 최대 1 · 최소 -1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 최댓값: $1$, 최솟값: $-1$, 주기: $\pi$ \quad ⑵ 최댓값: $1$, 최솟값: $-1$, 주기: $2\pi$ \quad 그래프는 풀이 참조'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/161-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 의 b(2·3·1/2)와 ⑵ 의 평행이동량(π/6·π/3·π/2)을 바꿀 수 있다. 제약: 최대·최소가 ±1 로 고정되어 있어야 「부호와 평행이동은 치역을 바꾸지 않는다」는 대비가 살고, 작도용이므로 이동량은 주기의 눈금(π/4 단위)에 맞춘다.'
    creative: '(1) 앞에 진폭을 붙여 y=-3sin 2x 로 하면 부호와 진폭이 한꺼번에 움직여 ★2 유지 (2) 두 그래프의 교점 개수를 한 주기에서 묻기(★3 · I-RT) (3) 평행이동을 y축 방향으로 바꿔 치역이 움직이게 하면 대비가 뒤집혀 ★2.'
```

```yaml
- id: GN-ALG-161-384
  page: 161
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ y=(1/2)sin x ⑵ y=sin(x/2)+1 ⑶ y=-sin(x+π/2) 의 최댓값·최솟값·주기를 구하고 그래프를 그리는 문제.
  category: '진폭(⑴)·주기와 y축 평행이동(⑵)·부호와 x축 평행이동(⑶) 세 갈래'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사인함수의 그래프(진폭·주기·평행이동)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 치역만 ±1/2, ⑵ 는 주기 4π 에 치역이 [0,2] 로 올라가고, ⑶ 은 부호와 평행이동 둘 다 치역·주기를 바꾸지 않는다.
    161-e1 의 확인체크로 세 요소를 하나씩 분리해 확인하는 구성. 확인체크 ★2 출발 · 통찰 0 → ★2 유지.
  tier: star_2
  mechanism_primary: "a 는 치역 · b 는 주기 2π/|b| · d 는 치역 평행이동 · c 와 부호는 최대·최소 불변"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 최댓값: $\dfrac{1}{2}$, 최솟값: $-\dfrac{1}{2}$, 주기: $2\pi$ \quad ⑵ 최댓값: $2$, 최솟값: $0$, 주기: $4\pi$ \quad ⑶ 최댓값: $1$, 최솟값: $-1$, 주기: $2\pi$ \quad 그래프는 풀이 참조'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-alg/items/161-384.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '진폭(1/3·2/3·3), 주기 계수(1/3·1/4·2), y축 이동량(-1·2)을 바꿀 수 있다. 제약: ⑵ 처럼 진폭과 y축 이동이 함께 있으면 최솟값이 0 이 되도록 맞춰 두어야 「d 만큼 통째로 올라간다」가 눈에 보인다.'
    creative: '(1) 세 식 중 주기가 같은 것끼리 묶게 하기(★2) (2) 그래프를 주고 식을 고르게 하는 역방향(★3 · I-RT) (3) ⑶ 을 -sin(x+π/2)=-cos x 로 정리시키면 삼각함수 사이 관계가 들어와 ★3.'
```

```yaml
- id: GN-ALG-161-385
  page: 161
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    y=sin(πx/3 - π)+3 의 주기 p, 최댓값 M, 최솟값 m 에 대하여 p+M+m 의 값.
  category: '주기 $2\pi/|b|$ · 최대 $1+d$ · 최소 $-1+d$ → 세 값의 합'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 주기·최댓값·최솟값의 합 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    b=π/3 이므로 p=2π÷(π/3)=6 이고 상수항 3 이 치역을 통째로 올려 M=4, m=2. 합 12.
    -π 는 x축 방향 평행이동이라 세 값 어디에도 관여하지 않는다는 점이 함정. 확인체크 ★2 출발 · 통찰 0 → ★2 유지.
  tier: star_2
  mechanism_primary: "b=π/3 → p=6 · d=3 → M=4, m=2 → p+M+m=12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/161-385.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'b(π/2·π/4·2π), 상수항 d(1·5·-2), 위상 -π 를 바꿀 수 있다. 제약: 주기가 유리수로 떨어지도록 b 를 π 의 유리수배로 두고, 합 p+M+m 이 정수가 되게 d 를 정수로 고정한다.'
    creative: '(1) p+M+m 대신 pMm 이나 M-m 을 묻기(★2 유지) (2) 진폭 a 를 붙여 M,m 이 d±|a| 가 되게(★2) (3) p, M, m 중 두 개를 주고 식의 계수를 역산시키면 165-e6 골조로 ★3.'
```

```yaml
- id: GN-ALG-162-e2
  page: 162
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ y=3cos 3x ⑵ y=-2cos(x-π/2) 의 최댓값·최솟값·주기를 구하고 그래프를 그리는 문제.
  category: '진폭·주기 동시 변형(⑴)과 부호·평행이동(⑵) → 코사인 그래프'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "코사인함수의 그래프(진폭 부호·주기·평행이동)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 치역 [-3,3]·주기 2π/3, ⑵ 는 음부호라도 치역이 [-2,2] 로 대칭이라 최대·최소가 바뀌지 않고 주기도 2π 그대로.
    161-e1 의 코사인 판. 필수 예제 ★2 출발 · 통찰 0 · M_total 5 이지만 작도를 포함한 대표 골조라 ★2 유지.
  tier: star_2
  mechanism_primary: "|a| 는 치역 · 주기 2π/|b| · 부호와 위상은 최대·최소 불변 → 그래프 작도"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 최댓값: $3$, 최솟값: $-3$, 주기: $\dfrac{2\pi}{3}$ \quad ⑵ 최댓값: $2$, 최솟값: $-2$, 주기: $2\pi$ \quad 그래프는 풀이 참조'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/162-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '진폭(2·4·1/2)과 주기 계수(2·4·1/3), 평행이동량(π/3·π/4)을 바꿀 수 있다. 제약: 작도를 요구하므로 주기가 2π/4 보다 잘아지지 않게 하고, ⑵ 의 음부호는 최대·최소가 그대로라는 대비를 위해 d 를 붙이지 않는다.'
    creative: '(1) ⑵ 를 -2cos(x-π/2)=-2sin x 로 정리시키면 삼각함수 사이 관계가 들어와 ★3 (2) 두 그래프의 주기 비를 묻기(★2) (3) 진폭을 미지수로 두고 최댓값을 주면 역방향 ★2~3.'
```

```yaml
- id: GN-ALG-162-386
  page: 162
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ y=cos 2x+1 ⑵ y=2cos(x-π) ⑶ y=-2cos(x/3)+1 의 최댓값·최솟값·주기.
  category: '주기·y축 이동(⑴), 진폭·x축 이동(⑵), 부호·주기·y축 이동(⑶)'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "코사인함수의 최댓값·최솟값·주기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑶ 이 핵심으로 치역 [-2,2] 가 +1 만큼 올라가 [-1,3] 이 되고 주기는 2π÷(1/3)=6π. 음부호는 치역을 뒤집지 않는다.
    162-e2 의 확인체크. 확인체크 ★2 출발 · 통찰 0 → ★2 유지.
  tier: star_2
  mechanism_primary: "치역 [d-|a|, d+|a|] · 주기 2π/|b| 를 세 식에 각각 적용"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 최댓값: $2$, 최솟값: $0$, 주기: $\pi$ \quad ⑵ 최댓값: $2$, 최솟값: $-2$, 주기: $2\pi$ \quad ⑶ 최댓값: $3$, 최솟값: $-1$, 주기: $6\pi$ \quad 그래프는 풀이 참조'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/162-386.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '진폭(3·1/2), 주기 계수(1/2·1/4·3), y축 이동(-2·2)을 바꿀 수 있다. 제약: 최댓값·최솟값이 정수가 되도록 |a| 와 d 를 정수로 맞추고, 주기가 6π 를 넘으면 작도·비교가 어려워지므로 |b| ≥ 1/3 로 둔다.'
    creative: '(1) 세 함수 중 치역이 같은 것을 고르게 하기(★2) (2) ⑶ 의 최댓값과 최솟값의 합을 묻는 한 줄 답형(★2) (3) 진폭·주기·이동 중 하나를 미지수로 두고 최댓값을 주면 미정계수 역산 ★3.'
```

```yaml
- id: GN-ALG-162-387
  page: 162
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    y=-3cos(-2πx)+6 의 주기 p, 최댓값 M, 최솟값 m 에 대하여 p+M+m 의 값.
  category: '주기 $2\pi/|b|$ 에서 $b$ 의 절댓값 · 치역 $[d-|a|,\,d+|a|]$'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "계수가 음수인 삼각함수의 주기·최댓값·최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    b=-2π 라도 주기는 2π/|b|=1, a=-3 이라도 치역은 [6-3, 6+3]=[3,9]. 부호 두 개가 모두 결과를 바꾸지 않는다는 것이 전부다.
    T-부호와 T-표기 두 함정이 겹쳐 Mₜ=2 지만 절차는 한 줄. 확인체크 ★2 출발 · 통찰 0 → ★2 유지.
  tier: star_2
  mechanism_primary: "p=2π/|-2π|=1 · M=6+3=9 · m=6-3=3 → 합 13"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$13$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/162-387.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '진폭(-2·-5), 주기 계수(-π·-4π·-1), 상수항(4·10)을 바꿀 수 있다. 제약: 음부호 두 개가 핵심 함정이므로 a<0, b<0 을 유지하고, 주기가 유리수로 떨어지도록 b 를 π 의 정수배로 둔다.'
    creative: '(1) sin 으로 바꾸면 sin(-θ)=-sin θ 라 부호가 진폭과 합쳐져 판단이 한 단계 늘고 ★2~3 (2) p, M, m 중 하나만 주고 나머지 계수를 역산(★3) (3) 주기가 1 인 점을 이용해 f(2026) 같은 함숫값을 묻기(★3 · I-PD).'
```

```yaml
- id: GN-ALG-163-e3
  page: 163
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ y=tan(x/2) ⑵ y=tan(x-π/4) 의 주기와 점근선의 방정식을 구하고 그래프를 그리는 문제.
  category: '$\tan$ 의 주기 $\pi/|b|$ · 점근선은 각이 $n\pi+\pi/2$ 가 되는 $x$'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "탄젠트함수의 그래프(주기·점근선)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 x/2=nπ+π/2 를 풀어 x=2nπ+π, 주기 2π. ⑵ 는 x-π/4=nπ+π/2 에서 x=nπ+3π/4, 주기 π.
    점근선을 「각이 직각의 홀수배」라는 조건에서 매번 다시 푸는 절차가 골조. 필수 예제 ★2 출발 · 통찰 0 → ★2 유지.
  tier: star_2
  mechanism_primary: "각 = nπ+π/2 로 놓고 x 에 대해 풀기 → 점근선 · 주기 π/|b|"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 주기: $2\pi$, 점근선의 방정식: $x=2n\pi+\pi$ ($n$은 정수) \quad ⑵ 주기: $\pi$, 점근선의 방정식: $x=n\pi+\dfrac{3}{4}\pi$ ($n$은 정수) \quad 그래프는 풀이 참조'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/163-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 의 b(1/3·2·3), ⑵ 의 평행이동량(π/3·π/6·-π/4)을 바꿀 수 있다. 제약: 점근선 식의 계수가 간단한 분수로 떨어지도록 b 를 정수나 단위분수로 두고, 평행이동량은 π/2 의 약분 가능한 분수로 둔다.'
    creative: '(1) 점근선 중 y축에 가장 가까운 것을 묻기(★2) (2) 두 점근선 사이 간격이 주기와 같음을 이용해 b 를 역산(★3 · I-EQV) (3) 주어진 구간에서 점근선의 개수를 세게 하면 T-범위가 붙어 ★3.'
```

```yaml
- id: GN-ALG-163-388
  page: 163
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ y=2tan x ⑵ y=-tan 3x ⑶ y=tan(x-π/2)+2 의 주기와 점근선의 방정식을 구하고 그래프를 그리는 문제.
  category: '진폭·부호는 점근선 불변 · 주기 $\pi/|b|$ · 평행이동은 점근선 이동'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "탄젠트함수의 주기와 점근선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 의 계수 2 와 ⑵ 의 음부호는 점근선을 전혀 옮기지 않고, ⑵ 는 b=3 이라 주기 π/3·점근선 x=nπ/3+π/6, ⑶ 은 x 가 π/2 만큼 오른쪽으로 밀려 점근선이 x=nπ 가 된다.
    163-e3 의 확인체크로 세 요소를 분리해 확인. 확인체크 ★2 출발 · 통찰 0 → ★2 유지.
  tier: star_2
  mechanism_primary: "a·부호는 점근선 불변 · b 는 주기 π/|b| · c 는 점근선 평행이동"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 주기: $\pi$, 점근선의 방정식: $x=n\pi+\dfrac{\pi}{2}$ ($n$은 정수) \quad ⑵ 주기: $\dfrac{\pi}{3}$, 점근선의 방정식: $x=\dfrac{n}{3}\pi+\dfrac{\pi}{6}$ ($n$은 정수) \quad ⑶ 주기: $\pi$, 점근선의 방정식: $x=n\pi$ ($n$은 정수) \quad 그래프는 풀이 참조'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-alg/items/163-388.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '진폭(3·1/2), 주기 계수(2·4·1/2), 평행이동량(π/4·π/3), y축 이동(1·-3)을 바꿀 수 있다. 제약: ⑶ 처럼 평행이동이 π/2 의 정수배면 점근선이 x=nπ 로 깔끔해지므로 그 대비를 남기려면 이동량을 π/2 단위로 둔다.'
    creative: '(1) 세 함수 중 점근선이 같은 것을 고르게 하기(★2) (2) 점근선 방정식만 주고 식을 복원시키기(★3 · I-RT) (3) 그래프가 지나는 점 하나를 추가로 주고 진폭을 역산(★3).'
```

```yaml
- id: GN-ALG-163-389
  page: 163
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    y=tan(2x-π/2)+1 의 주기가 aπ, 점근선이 x=bnπ 일 때 상수 a, b 에 대하여 a+b 의 값.
  category: '주기 $\pi/2$ → $a$ · 점근선 집합을 $x=bn\pi$ 꼴로 다시 표현 → $b$'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "점근선 x=(n+1)π/2 를 주어진 표기 x=bnπ 와 같은 집합이 되도록 다시 써서 b=1/2 를 읽는다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "탄젠트함수의 주기·점근선에서 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주기 π/2 이므로 a=1/2. 점근선은 2x-π/2=nπ+π/2 에서 x=(n+1)π/2 인데, 이는 n 이 정수 전체를 돌 때 x=nπ/2 와 같은 집합이므로 b=1/2.
    「집합이 같으면 계수가 같다」는 재표현이 한 단계 들어가 절차형이 아니라 통찰 1개(EQV d1). 확인체크 ★2 출발 · 통찰 1 · d1 → ★2 유지.
  tier: star_2
  mechanism_primary: "주기 π/2 → a=1/2 → 점근선 x=(n+1)π/2 = nπ/2 (집합 동일) → b=1/2 → a+b=1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/163-389.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주기 계수 b(3·4·1/2)와 위상 -π/2 를 바꿀 수 있다. 제약: 점근선이 x=bnπ 처럼 상수항 없는 꼴로 떨어지려면 위상이 각의 π/2 를 정확히 상쇄해야 하므로 위상을 임의로 바꾸면 발문의 답 형식 자체가 깨진다.'
    creative: '(1) 점근선을 x=bnπ+k 꼴로 두고 k 까지 묻기(★3) (2) 주기 대신 두 점근선 사이 간격을 주고 역산(★3 · I-EQV 강화) (3) ab 나 a/b 를 묻는 형태로 바꾸면 ★2 유지.'
```

```yaml
- id: GN-ALG-164-e4
  page: 164
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ y=(1/4)sin(2x-π/3) ⑵ y=3cos(x/2 - π)+1 ⑶ y=(1/2)tan(3x-π/2) 의 그래프를 그리고 최댓값·최솟값·주기를 구하는 문제.
  category: '$a\,f(bx+c)+d$ 네 계수를 한꺼번에 읽어 치역·주기 결정'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 그래프(진폭·주기·평행이동 종합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 문항 모두 |a| 가 치역의 반지름, d 가 중심, 2π/|b|(tan 은 π/|b|)가 주기이고 c 는 어디에도 관여하지 않는다.
    앞의 e1~e3 를 한 식에 모은 종합 예제로, 작도에서만 c 가 쓰인다. 필수 예제 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "치역 [d-|a|, d+|a|] · 주기 2π/|b| (tan 은 π/|b|) · c 는 작도용 위상"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '그래프는 풀이 참조 \quad ⑴ 최댓값: $\dfrac{1}{4}$, 최솟값: $-\dfrac{1}{4}$, 주기: $\pi$ \quad ⑵ 최댓값: $4$, 최솟값: $-2$, 주기: $4\pi$ \quad ⑶ 최댓값, 최솟값: 없다., 주기: $\dfrac{\pi}{3}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/164-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '네 계수 a(1/2·2·-3), b(2·3·1/2), c(π/4·π/6), d(-1·2)를 독립적으로 바꿀 수 있다. 제약: 작도를 요구하므로 주기가 π/4 보다 잘아지지 않게 |b| ≤ 4 로 두고, ⑶ 은 tan 이라 최대·최소가 없다는 답이 유지돼야 한다.'
    creative: '(1) 세 함수의 주기를 크기순으로 나열시키기(★2) (2) 그래프 개형만 주고 어느 식인지 고르게 하는 역방향(★3 · I-RT) (3) 한 계수를 미지수로 두고 최댓값을 주면 165-e6 골조로 ★3.'
```

```yaml
- id: GN-ALG-164-390
  page: 164
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ y=-2sin(2x-π/2)+1 ⑵ y=-(1/4)cos(3x+π/2)-4 ⑶ y=-2tan(πx+π/3) 의 최댓값·최솟값·주기.
  category: '음의 진폭에서도 치역은 $[d-|a|,\,d+|a|]$ · 주기 $2\pi/|b|$'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 최댓값·최솟값·주기(계수가 음수인 경우)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 문항 모두 a 가 음수지만 치역은 |a| 로 결정되어 ⑴ 은 [-1,3], ⑵ 는 [-17/4, -15/4], ⑶ 은 tan 이라 없음.
    ⑶ 의 b=π 에서 주기가 π/π=1 로 떨어지는 것이 함정. 확인체크 ★2 출발 · 통찰 0 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "a<0 이어도 치역 [d-|a|, d+|a|] · 주기 2π/|b| · tan 은 π/|b| 이고 최대·최소 없음"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 최댓값: $3$, 최솟값: $-1$, 주기: $\pi$ \quad ⑵ 최댓값: $-\dfrac{15}{4}$, 최솟값: $-\dfrac{17}{4}$, 주기: $\dfrac{2}{3}\pi$ \quad ⑶ 최댓값, 최솟값: 없다., 주기: $1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/164-390.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'a(-3·-1/2), b(4·2π·1/2), d(-1·5)를 바꿀 수 있다. 제약: ⑵ 처럼 진폭이 분수면 최댓값·최솟값이 기약분수로 떨어지도록 d 의 분모를 맞추고, ⑶ 의 b 를 π 의 배수로 두어야 주기가 유리수가 된다.'
    creative: '(1) 세 함수 중 최댓값이 가장 큰 것을 고르게 하기(★2) (2) ⑶ 처럼 주기가 1 인 함수로 f(1)+f(2)+⋯ 를 묻기(★3 · I-PD) (3) a 의 부호를 묻는 참·거짓 보기로 만들면 168-400 골조 ★3.'
```

```yaml
- id: GN-ALG-165-e5
  page: 165
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    y=(1/2)sin(2x+1)-1 의 그래프를 x축 방향 2, y축 방향 2 만큼 평행이동하면 y=(1/2)sin(ax+b)+c 와 겹칠 때 a+b+c (단 -π<b<0).
  category: '평행이동은 $x \to x-2$, $y \to y-2$ 대입 → 계수 비교'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x축 방향 +2 평행이동을 x 자리에 x-2 를 넣는 것으로 옮겨 sin(2x+1) 의 위상이 1-4 로 바뀜을 본다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수의 그래프의 평행이동과 미정계수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x 대신 x-2 를 넣으면 2(x-2)+1=2x-3 이고 y 는 +2 만큼 올라가 상수항이 -1+2=1. 따라서 a=2, b=-3, c=1.
    「오른쪽으로 2 이동 = x-2 대입」이라는 부호 뒤집힘이 이 문항의 전부이고, -π<b<0 조건이 b=-3 을 확정한다(-3 이 -π 보다 크다는 확인). 필수 예제 ★2 출발 · 통찰 1 · M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "x→x-2, y→y-2 대입 → (1/2)sin(2x-3)+1 → a=2, b=-3, c=1 → 합 0"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$0$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/165-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '원래 식의 계수(1/2·2), 각의 계수(2·3), 위상(1·2), 이동량(1·3·-2)을 바꿀 수 있다. 제약: 이동 후 위상 b 가 반드시 -π<b<0 범위 안에 하나만 들어가야 하고(주기 2π 를 더하면 같은 그래프가 되므로), a+b+c 가 정수로 떨어지도록 상수항을 정수로 둔다.'
    creative: '(1) 평행이동 대신 x축·y축 대칭이동을 섞으면 165-391 골조(★2~3) (2) 이동량을 미지수로 두고 겹친다는 조건에서 역산(★4 · I-BW) (3) 두 그래프가 겹치는 최소 양의 이동량을 묻기(★4 · 주기의 배수 판단 추가).'
```

```yaml
- id: GN-ALG-165-e6
  page: 165
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    f(x)=a cos(π-px)+b 의 최솟값이 -1, 주기가 π, f(π/3)=2 일 때 a+b+p (단 a>0, p>0).
  category: '$\cos(\pi-px)=-\cos px$ 로 정리 → 주기·최솟값·함숫값 세 조건 연립'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "cos(π-px)=-cos px 로 각을 정리해야 f(π/3) 의 값을 계산할 수 있고 최솟값 식도 b-a 로 확정된다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수의 미정계수 구하기(주기·최대최소·함숫값 연립)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    주기 2π/p=π 에서 p=2 가 먼저 확정되고, cos(π-2x)=-cos 2x 로 정리하면 치역이 [b-a, b+a] 라서 b-a=-1.
    f(π/3)=-a cos(2π/3)+b=a/2+b=2 와 연립해 a=2, b=1. 각의 정리를 건너뛰면 f(π/3) 계산에서 막힌다. 필수 예제 ★2 출발 · 통찰 1 · M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "주기 π → p=2 → cos(π-2x)=-cos 2x → b-a=-1, a/2+b=2 → a=2, b=1 → 합 5"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$5$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/165-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주기(2π/3·π/2), 최솟값(-3·0), 함숫값을 주는 x(π/6·π/4)와 그 값을 바꿀 수 있다. 제약: 대입하는 x 에서 코사인 값이 특수각(±1/2, ±√2/2, ±√3/2)으로 떨어져야 연립이 정수해를 주고, a>0 을 유지해야 최솟값이 b-a 로 고정된다.'
    creative: '(1) 각을 π/2-px 로 바꾸면 sin 으로 바뀌어 같은 골조 ★3 (2) 최솟값 대신 최댓값과 최솟값의 합을 주면 b 가 즉시 나와 ★2~3 (3) a>0 조건을 빼면 부호 두 경우를 모두 따져야 해 I-MI 추가 ★4.'
```

```yaml
- id: GN-ALG-165-391
  page: 165
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    y=cos 2x+1 의 그래프를 x축 방향으로 -π/8 만큼 평행이동한 후 x축에 대하여 대칭이동한 그래프의 식.
  category: '평행이동($x \to x+\pi/8$) 후 $x$축 대칭($y \to -y$) 순서대로 대입'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 그래프의 평행이동과 대칭이동"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x 대신 x+π/8 을 넣어 cos(2x+π/4)+1 을 얻고, x축 대칭은 y 자리에 -y 를 넣는 것이므로 전체에 음부호.
    이동량이 음수라 대입 부호가 두 번 뒤집히는 것이 함정(Mₜ=2)이지만 정해진 순서대로 대입하면 끝난다. 확인체크 ★2 출발 · 통찰 0 → ★2 유지.
  tier: star_2
  mechanism_primary: "x→x+π/8 → cos(2x+π/4)+1 → y→-y → y=-cos(2x+π/4)-1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=-\cos\left(2x+\dfrac{\pi}{4}\right)-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/165-391.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주기 계수(3·1/2), 이동량(π/6·-π/4), 상수항(2·-1)을 바꿀 수 있다. 제약: 이동량에 각의 계수를 곱한 값이 특수각으로 떨어져야 답 식이 깔끔하고, 이동 방향의 부호를 유지해야 대입 부호 함정이 남는다.'
    creative: '(1) 대칭이동을 y축 또는 원점 기준으로 바꾸기(★2 유지) (2) 두 이동의 순서를 바꾸면 결과가 달라지는지 묻기(★3 · I-VF) (3) 이동 결과가 원래 그래프와 겹칠 조건을 묻기(★4 · I-BW).'
```

```yaml
- id: GN-ALG-165-392
  page: 165
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x)=a sin(x/b - π/3)-c 의 최댓값이 3, 주기가 4π, f(π)=2 일 때 f(x) 의 최솟값 (단 a>0, b>0).
  category: '주기 $2\pi b=4\pi$ → $b$ · 최댓값 $a-c$ · 함숫값 연립 → 최솟값 $-a-c$'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 미정계수와 최솟값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각의 계수가 1/b 이므로 주기는 2πb=4π 에서 b=2. 최댓값 a-c=3, f(π)=a sin(π/6)-c=a/2-c=2 를 연립해 a=2, c=-1, 최솟값 -a-c=-1.
    세 조건을 그대로 연립하는 표준 절차이고 판단 분기가 없어 통찰 0. 확인체크 ★2 출발 · M_total 8 이지만 통찰 0 → ★2 유지.
  tier: star_2
  mechanism_primary: "주기 2πb=4π → b=2 → a-c=3, a/2-c=2 → a=2, c=-1 → 최솟값 -a-c=-1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/165-392.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주기(2π·6π), 최댓값(5·1), 대입하는 x(2π·π/2)와 함숫값을 바꿀 수 있다. 제약: 각의 계수가 1/b 라 주기가 2πb 임을 유지해야 하고, 대입한 x 에서 사인 값이 특수각으로 떨어져야 연립이 간단해진다.'
    creative: '(1) 최솟값 대신 a+b+c 를 묻기(★2 유지) (2) a>0 조건을 빼 부호 두 경우를 나누게 하면 ★3 (3) 그래프 그림으로 최댓값·주기를 주면 166-394 골조 ★3.'
```

```yaml
- id: GN-ALG-165-393
  page: 165
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x)=a tan(bx+c)+d 의 주기가 π/2 이고 y=a tan bx 를 x축 방향 π/4, y축 방향 -1 만큼 평행이동한 것이며 f(π/3)=√3-1 일 때 abcd (단 b>0, -π<c<0).
  category: '주기 → $b$ · 평행이동을 $bx+c$ 꼴로 환원 → $c, d$ · 함숫값 → $a$'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x축 방향 π/4 평행이동을 a tan(b(x-π/4)) 로 쓴 뒤 bx+c 꼴과 계수 비교해 c=-bπ/4 임을 얻는다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "탄젠트함수의 평행이동과 미정계수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    tan 의 주기는 π/b 이므로 π/b=π/2 에서 b=2. 평행이동을 대입하면 a tan(2x-π/2)-1 이라 c=-π/2(조건 -π<c<0 을 만족), d=-1.
    f(π/3)=a tan(π/6)-1 에서 a=3. 이동량 π/4 가 c 에서는 -bπ/4=-π/2 로 b 배만큼 커지는 것이 핵심 함정. 확인체크 ★2 출발 · 통찰 1(d2) · M_total 9 → ★3.
  tier: star_3
  mechanism_primary: "π/b=π/2 → b=2 → a tan(2(x-π/4))-1 → c=-π/2, d=-1 → f(π/3)=a/√3-1=√3-1 → a=3 → abcd=3π"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/165-393.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주기(π/3·π/4), 평행이동량(π/6·π/8·-π/4), y축 이동(2·-3), 대입하는 x 를 바꿀 수 있다. 제약: 이동 후 c=-b·(이동량) 이 -π<c<0 안에 정확히 하나만 들어가야 하고, 대입한 각이 tan 의 특수각(π/6, π/4, π/3)이 되도록 x 를 맞춘다.'
    creative: '(1) sin·cos 로 바꾸면 주기가 2π/b 라 b 가 두 배로 나오는 대비(★3 유지) (2) 점근선 하나를 주고 c 를 역산(★3 · I-EQV 강화) (3) -π<c<0 조건을 빼면 c 후보가 무한히 많아져 「최댓값」을 묻는 I-VF 형으로 ★4.'
```

```yaml
- id: GN-ALG-166-e7
  page: 166
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    그림으로 주어진 y=a cos(bx-c)+d 의 그래프에서 상수 a, b, c, d 를 읽어 abcd 를 구하기. (a>0, b>0, 0<c<π)
  category: '최대·최소 → $a, d$ · 최대점 사이 간격 → 주기 → $b$ · 최대점 $x$좌표 대입 → $c$'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그림의 최댓값·최솟값·최대점 위치라는 기하 정보를 진폭·수직이동·주기·위상이라는 계수 식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프가 주어진 삼각함수의 미정계수 구하기(코사인)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    최댓값 1·최솟값 -3 에서 a=2, d=-1. 이웃한 두 최대점 π/3 과 4π/3 의 간격 π 가 주기이므로 2π/b=π 에서 b=2.
    최대점은 코사인의 각이 0 인 곳이므로 2·(π/3)-c=0 에서 c=2π/3 이고 조건 0<c<π 를 만족한다.
    그림 한 장에서 네 계수를 동시에 읽어 내는 표현 전환(RT d2)이 골조 전부다. 필수 예제 ★2 출발 · 통찰 1(d2) · M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "최대 1·최소 -3 → a=2, d=-1 → 최대점 간격 π=주기 → b=2 → 최대점 x=π/3 에서 2x-c=0 → c=2π/3 → abcd"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\dfrac{8}{3}\pi$'
  answer_source: "본문 풀이"
  figure: "crop:fig-166-e7.png"
  latex: latex-bank/gn-alg/items/166-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '최댓값·최솟값 쌍(2/-2, 5/1), 최대점의 x좌표, 주기를 바꿀 수 있다. 제약: a=(최대-최소)/2 와 d=(최대+최소)/2 가 모두 깔끔한 수가 되도록 최대·최소의 홀짝을 맞추고, c=b·(최대점 x좌표) 가 조건 0<c<π 안에 정확히 하나만 들어가야 한다. 그림의 라벨(최대점·최소점 좌표와 최대·최소값)은 식과 반드시 함께 움직인다.'
    creative: '(1) 최대점 대신 최소점이나 y절편을 라벨로 주면 기준각이 π 나 임의각이 되어 단계가 하나 늘고 ★3 유지 (2) sin 으로 바꾸면 기준각이 π/2 라 c 계산이 한 단계 늘어난다 (3) 조건 0<c<π 를 빼고 「c 의 최솟값」을 물으면 후보를 걸러야 해 I-VF 가 붙어 ★4 (4) 점근선이 보이는 tan 그래프로 바꾸면 주기가 π/b 이고 진폭을 못 읽어 통과점 하나가 더 필요하다.'
```

```yaml
- id: GN-ALG-166-394
  page: 166
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    그림으로 주어진 y=a sin(bx+c)+d 의 그래프에서 상수 a, b, c, d 를 읽어 abcd 를 구하기. (a>0, b>0, 0<c<π)
  category: '최대·최소 → $a, d$ · 최소점 사이 간격 → 주기 → $b$ · $x=0$ 이 최대점 → $c$'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그림의 최댓값·최솟값과 두 최소점 위치를 진폭·수직이동·주기·위상 계수로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프가 주어진 삼각함수의 미정계수 구하기(사인)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    최댓값 3·최솟값 -1 에서 a=2, d=1. 이웃한 두 최소점 -π/2 와 π/2 의 간격 π 가 주기이므로 b=2.
    그림에서 x=0 이 최대점(y절편이 최댓값 3)이므로 sin c=1 에서 c=π/2 이고 조건 0<c<π 를 만족한다.
    앞 필수 예제의 코사인판을 사인으로 옮긴 짝 문항. 확인체크 ★2 출발 · 통찰 1(RT d2) · M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "최대 3·최소 -1 → a=2, d=1 → 최소점 간격 π=주기 → b=2 → x=0 이 최대 → c=π/2 → abcd"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2\pi$'
  answer_source: "답지"
  figure: "crop:fig-166-394.png"
  latex: latex-bank/gn-alg/items/166-394.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '최댓값·최솟값 쌍과 최소점 두 개의 x좌표를 바꿀 수 있다. 제약: 두 최소점의 간격이 곧 주기이고, y절편이 최댓값이 되려면 c=π/2 처럼 기준각이 딱 떨어져야 한다. 라벨이 y축 대칭 위치(±π/2)가 아니면 c 가 0<c<π 를 벗어날 수 있다.'
    creative: '(1) 라벨을 최소점 대신 이웃한 두 x절편으로 주면 주기가 그 간격의 두 배임을 한 번 더 거쳐야 해 ★3 유지 (2) y절편을 최댓값이 아닌 중간값으로 두면 c 가 특수각이 아니게 되므로 대신 최대점 x좌표를 라벨로 준다 (3) a>0 조건을 빼면 위상이 π 만큼 다른 두 답이 생겨 I-MI 로 ★4.'
```

```yaml
- id: GN-ALG-167-e8
  page: 167
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    y=|2 sin x| 의 최댓값, 최솟값, 주기 구하기.
  category: '절댓값 → $x$축 아랫부분을 위로 접음 → 치역 $0 \le y \le 2$ · 주기 반감'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값 기호를 포함한 삼각함수의 최대·최소·주기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y=2 sin x 의 그래프에서 x축 아래를 접어 올리면 최댓값 2, 최솟값 0 이고 반주기마다 같은 모양이 반복되므로 주기는 2π 의 절반인 π.
    절댓값이 붙으면 주기가 반이 된다는 사실을 처음 쓰는 도입 예제라 규칙을 적용하는 한 단계로 끝난다.
    통찰 0·M_total 4 라 산식상 −1 후보지만 필수 예제라는 벤더 신호를 존중해 ★2 로 둔다.
  tier: star_2
  mechanism_primary: "|2 sin x| → x축 아래 접기 → 최대 2·최소 0 → 주기는 2π 의 절반 π"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '최댓값: $2$, 최솟값: $0$, 주기: $\pi$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/167-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '진폭(3, 1/2), 내부 계수 b, sin↔cos 를 바꿀 수 있다. 제약: |a sin bx| 의 주기는 π/|b| 로 원래의 절반이지만 |tan bx| 는 주기가 그대로 π/|b| 라서 tan 으로 바꾸면 규칙이 달라진다.'
    creative: '(1) y=|2 sin x|+1 처럼 상수를 더해 치역만 올리기(★2 유지) (2) y=2|sin x|+|cos x| 처럼 두 절댓값을 섞으면 구간을 나눠야 해 I-MI 로 ★4 (3) 계수를 음수로 두어 a<0 일 때 최대·최소가 뒤집히게 하면 T-부호 함정이 추가돼 ★3.'
```

```yaml
- id: GN-ALG-167-e9
  page: 167
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    f(x)=|sin ax|+b 의 최댓값이 5 이고 주기가 π/3 일 때 a+b. (a>0)
  category: '최댓값 $1+b=5$ → $b$ · 절댓값 주기 $\pi/a = \pi/3$ → $a$'
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「주기가 π/3」이라는 조건을 sin ax 의 주기 2π/a 가 아니라 절댓값이 붙은 π/a 와 같다고 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "절댓값 기호를 포함한 삼각함수의 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    |sin ax| 의 최댓값은 1 이므로 1+b=5 에서 b=4. 주기는 2π/a 의 절반인 π/a 이므로 π/a=π/3 에서 a=3.
    절반이 된 주기를 역방향으로 쓰는 것이 유일한 갈림길이고(EQV d1), 2π/a=π/3 으로 잘못 세우면 a 가 두 배가 된다.
    필수 예제 ★2 출발 · 통찰 1(d1) · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "최댓값 1+b=5 → b=4 → 절댓값 주기 π/a=π/3 → a=3 → a+b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$7$"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/167-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '최댓값(3, 7), 주기(π/2, π/5), 더하는 상수 b 를 바꿀 수 있다. 제약: a=π/(주기) 가 양의 정수(또는 깔끔한 유리수)가 되도록 주기를 π 의 약수 꼴로 두고, 최댓값에서 b 를 뺀 값이 |sin| 의 최댓값 1 과 맞아야 한다.'
    creative: '(1) 최댓값 대신 최솟값을 주면 |sin| 의 최솟값이 0 이라 b 가 바로 나와 ★2 유지 (2) cos 로 바꾸면 주기 규칙은 같지만 y절편이 최대가 되는 차이가 생긴다 (3) 계수 c 를 붙여 f(x)=c|sin ax|+b 로 만들고 함숫값 조건을 하나 더 주면 연립이 되어 ★3(이 단원 167-397 이 그 형태) (4) |tan ax| 로 바꾸면 주기가 반이 되지 않아 함정이 뒤집힌다.'
```

```yaml
- id: GN-ALG-167-395
  page: 167
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ y=|cos 2x| ⑵ y=2|sin x|-1 의 최댓값, 최솟값, 주기 구하기.
  category: '절댓값 → 접기 → 치역 하한 $0$ · 주기 반감 뒤 진폭·평행이동 반영'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값 기호를 포함한 삼각함수의 최대·최소·주기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ cos 2x 의 주기 π 가 절댓값으로 절반인 π/2 가 되고 치역은 0 이상 1 이하.
    ⑵ |sin x| 의 주기는 π, 치역 0 이상 1 이하에 2 배·(-1) 평행이동을 적용해 최대 1·최소 -1.
    앞 예제에서 익힌 규칙을 두 번 적용하는 순방향 계산이라 통찰 없음. 확인체크 ★2 출발 · M_total 4 → ★2.
  tier: star_2
  mechanism_primary: "절댓값 → 주기 반감(π/2, π) → |·| 치역 0~1 에 진폭·상수 적용 → 최대·최소"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 최댓값: $1$, 최솟값: $0$, 주기: $\dfrac{\pi}{2}$ \quad ⑵ 최댓값: $1$, 최솟값: $-1$, 주기: $\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/167-395.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '내부 계수(3x, x/2), 진폭, 더하는 상수를 바꿀 수 있다. 제약: 절댓값 안의 상수배는 밖으로 나오되 부호가 사라지므로 |−2 sin x|=2|sin x| 처럼 정리된 뒤의 최대·최소를 쓴다. 주기는 항상 π/|b|.'
    creative: '(1) 절댓값이 함수 전체가 아니라 안쪽 일부에만 붙은 y=|sin x|·cos x 꼴로 바꾸면 구간 분할이 필요해 ★4 (2) 최댓값·최솟값의 합이나 차를 묻는 한 줄 계산으로 묶기(★2 유지) (3) 그래프 개형을 그리고 x절편을 묻는 형태로 바꾸면 주기 반감이 눈에 보이게 된다.'
```

```yaml
- id: GN-ALG-167-396
  page: 167
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x)=7|cos πx|+3 의 주기 a, 최댓값 M, 최솟값 m 에 대하여 a+M+m.
  category: '절댓값 주기 $\pi/\pi = 1$ · 최대 $7+3$ · 최소 $0+3$ → 합'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값 삼각함수의 주기·최댓값·최솟값의 합 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    cos πx 의 주기 2 가 절댓값으로 1 이 되고, |cos πx| 의 치역 0 이상 1 이하에 7 배와 +3 을 적용해 최대 10·최소 3.
    셋을 각각 구해 더하는 한 줄 계산이라 통찰 없음. 확인체크 ★2 출발 · M_total 4 → ★2 유지(계수가 π 라 주기가 유리수로 떨어지는 점만 확인).
  tier: star_2
  mechanism_primary: "|cos πx| 주기 1 → 최대 7+3=10 · 최소 0+3=3 → a+M+m"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$14$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/167-396.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '진폭(5, 1/2), 상수항, 내부 계수(2πx, πx/3)를 바꿀 수 있다. 제약: 주기 π/|b| 가 깔끔한 수가 되도록 b 를 π 의 유리수배로 두고, 세 값의 합이 정수가 되도록 진폭·상수항을 정수로 둔다.'
    creative: '(1) a+M+m 대신 M-m(=진폭) 이나 aMm 을 묻기(★2 유지) (2) 절댓값을 빼고 최솟값이 음수가 되게 하면 부호 처리 한 단계가 늘어난다 (3) 진폭을 음수로 두면 최대·최소가 뒤집혀 T-부호 함정이 생겨 ★3(이 단원 169-407 이 그 형태).'
```

```yaml
- id: GN-ALG-167-397
  page: 167
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x)=a|sin bx|+c 의 최댓값이 5, 주기가 π/3, f(π/18)=7/2 일 때 abc. (a>0, b>0)
  category: '절댓값 주기 $\pi/b=\pi/3$ → $b$ · 최댓값 $a+c=5$ 와 함숫값 연립 → $a, c$'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "주기 조건을 sin bx 의 2π/b 가 아니라 절댓값이 붙어 반이 된 π/b 와 같다고 옮겨 b 를 결정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "절댓값 기호를 포함한 삼각함수의 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    π/b=π/3 에서 b=3. f(π/18)=a|sin(π/6)|+c=a/2+c=7/2 이고 최댓값은 a+c=5 이므로 두 식을 빼면 a=3, c=2.
    절댓값 주기 반감을 역방향으로 쓰는 것이 갈림길(EQV d1)이고 나머지는 두 식 연립.
    같은 구조의 165-392 를 ★2 로 둔 것과 맞춰 확인체크 ★2 출발 · 통찰 1(d1) · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "π/b=π/3 → b=3 → a/2+c=7/2 와 a+c=5 연립 → a=3, c=2 → abc"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$18$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/167-397.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '최댓값, 주기, 대입하는 x 와 함숫값을 바꿀 수 있다. 제약: b=π/(주기) 가 정수여야 하고, 대입하는 x 가 |sin bx| 를 특수각(1/2, √2/2, √3/2, 1)으로 만들어야 연립이 유리수로 떨어진다. a>0 이므로 최댓값=a+c, 최솟값=c 가 고정된다.'
    creative: '(1) 최댓값 대신 최솟값(=c)을 주면 c 가 바로 나와 한 단계 줄어 ★2 (2) 함숫값을 주는 대신 그래프를 주면 166-394 형의 그림 읽기가 되어 ★3 (3) a<0 을 허용하면 최대·최소가 뒤집혀 경우가 갈리고 ★3~4 (4) |sin| 을 |cos| 로 바꾸면 대입각의 특수각 조건만 달라진다.'
```

### 연습문제 STEP 1

```yaml
- id: GN-ALG-168-398
  page: 168
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    다섯 개의 삼각함수 중 주기가 가장 큰 것 고르기. 5지선다.
  category: '보기마다 주기 공식($2\pi/|b|$, tan 은 $\pi/|b|$) 적용 → 크기 비교'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "여러 삼각함수의 주기 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다섯 보기의 주기는 각각 π, 6π, 2π, 8π, π/2 이고 평행이동·상하이동은 주기에 영향이 없다.
    sin·cos 은 2π/|b|, tan 은 π/|b| 라는 표기 함정 하나만 구별하면 된다(T-표기).
    통찰 0·M_total 5 라 −1 후보지만 다섯 식을 각각 계산하고 tan 만 규칙이 다른 점을 걸러야 해 STEP 1 출발점 ★2 를 유지.
  tier: star_2
  mechanism_primary: "각 보기의 |b| 추출 → sin·cos 은 2π/|b|, tan 은 π/|b| → 최대 비교"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/168-398.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각 보기의 내부 계수를 바꿀 수 있다. 제약: 정답 보기의 주기가 나머지보다 확실히 크도록 |b| 를 가장 작게 두고, 같은 주기를 가진 보기가 둘 이상이면 「가장 큰 것」이 유일하지 않게 되므로 피한다. 평행이동·상하이동 항은 주기를 바꾸지 않으므로 교란용으로 자유롭게 넣는다.'
    creative: '(1) 「주기가 가장 작은 것」이나 「주기가 같은 것끼리 짝지은 것」으로 바꾸기(★2 유지) (2) 절댓값이 붙은 보기를 섞어 주기 반감을 함께 묻기(★3) (3) 최댓값·최솟값·주기를 동시에 비교하는 ㄱㄴㄷ 합답형으로 만들면 검증 단계가 늘어 ★3.'
```

```yaml
- id: GN-ALG-168-399
  page: 168
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    y=3 sin(πx/4) 의 그래프를 x축으로 1/4, y축으로 1/2 만큼 평행이동한 그래프가 점 (11/12, a) 를 지날 때 a.
  category: '평행이동식 $y=3\sin\frac{\pi}{4}(x-\frac14)+\frac12$ 세우기 → 대입 → 특수각'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 그래프의 평행이동과 통과점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x 대신 x-1/4 를 넣고 1/2 을 더한 뒤 x=11/12 을 대입하면 각이 (π/4)(2/3)=π/6 이라 sin 값이 1/2.
    x축 방향 이동이 괄호 안 뺄셈으로 들어가는 표기 함정(T-표기) 하나가 전부이고 나머지는 분수 계산.
    STEP 1 ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x→x-1/4, +1/2 → x=11/12 대입 → 각 π/6 → 3·(1/2)+1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/168-399.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '진폭, 내부 계수 π/4, 두 이동량, 대입하는 x 를 바꿀 수 있다. 제약: 이동 뒤 대입한 각이 특수각(π/6, π/4, π/3, π/2)이 되도록 x 를 역으로 맞춰야 하고, 진폭·상하이동을 더한 결과가 깔끔한 수가 되어야 한다.'
    creative: '(1) 점의 y좌표를 주고 x 를 묻는 역방향으로 바꾸면 해가 여러 개라 범위 조건이 필요해 ★3(I-MI) (2) 대칭이동을 한 단계 더 얹기(★3 · 이 단원 165-391 형) (3) 이동 후 식을 y=3 sin(bx+c)+d 꼴로 정리해 c 를 묻게 하면 c=-b·m 관계가 드러나 ★3.'
```

```yaml
- id: GN-ALG-168-400
  page: 168
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    y=2 tan(3x-π/2)+1 에 대한 보기 ㄱ~ㄹ(주기·통과점·직선 x=-π 와의 교점·평행이동) 중 옳은 것 모두 고르기.
  category: '보기마다 주기 · 대입 · 점근선 여부 · 평행이동량 환원을 따로 판정'
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「그래프가 직선 x=-π 와 만나지 않는다」를 「x=-π 가 정의역 밖, 즉 점근선이다」로 옮겨 3x-π/2 가 π/2 의 홀수배인지만 확인"
    - step: 4
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "3x-π/2 를 3(x-π/6) 으로 묶어 실제 x축 방향 이동량이 π/2 가 아니라 π/6 임을 확인"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "탄젠트함수의 주기·점근선·평행이동 종합 판정(합답형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㄱ 은 tan 의 주기가 π/|b| 라 π/3 이므로 거짓. ㄴ 은 대입하면 각이 π/4 라 2·1+1=3 으로 참.
    ㄷ 은 x=-π 에서 각이 -7π/2 로 π/2 의 홀수배라 점근선이므로 참, ㄹ 은 3x-π/2=3(x-π/6) 이라 참.
    네 보기를 독립으로 검증해야 하고 주기 표기(T-표기)와 점근선 정의역(T-범위) 함정이 함께 걸린다. STEP 1 ★2 출발 · 통찰 2(d1) · M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "ㄱ 주기 π/3 → 거짓 · ㄴ 대입각 π/4 → 참 · ㄷ 각 -7π/2 는 점근선 → 참 · ㄹ 3(x-π/6) → 참"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "ㄴ, ㄷ, ㄹ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/168-400.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '진폭 2, 내부 계수 3, 위상 -π/2, 상하이동 1 과 각 보기의 수치를 바꿀 수 있다. 제약: ㄴ 의 통과점은 대입각이 특수각이 되도록, ㄷ 의 직선은 각이 π/2 의 홀수배가 되도록(또는 일부러 아니게) 잡아야 하고, ㄹ 의 이동량은 반드시 위상/내부계수 로 계산한다.'
    creative: '(1) 보기 중 하나를 치역·점근선 개수로 바꿔 정오 조합을 흔들기(★3 유지) (2) sin·cos 으로 바꾸면 ㄷ 의 점근선 판정이 사라져 ★2 로 내려간다 (3) 옳은 것의 개수를 묻는 형태로 바꾸면 부분 정답이 사라져 검증 부담이 커진다 (4) 절댓값을 씌운 보기를 추가하면 주기 규칙이 둘로 갈려 ★4.'
```

```yaml
- id: GN-ALG-168-401
  page: 168
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 1"
  summary: |
    f(x)=a cos bx+3 의 주기가 4π 이고 최솟값이 -1 일 때 a+b. (a, b 는 양수) 5지선다.
  category: '최솟값 $-a+3=-1$ → $a$ · 주기 $2\pi/b=4\pi$ → $b$'
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 주기·최솟값으로 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a>0 이므로 최솟값은 -a+3 이고 -a+3=-1 에서 a=4. 주기 2π/b=4π 에서 b=1/2 이므로 a+b=9/2.
    두 조건이 각각 다른 미지수 하나씩만 건드려 연립이 필요 없다.
    교육청 기출 태그이나 통찰이 없어 +0. 통찰 0·M_total 5 로 −1 후보지만 STEP 1 신호를 존중해 ★2.
  tier: star_2
  mechanism_primary: "최솟값 -a+3=-1 → a=4 → 2π/b=4π → b=1/2 → a+b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/168-401.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주기(2π, π/2), 최솟값 또는 최댓값, 상수항을 바꿀 수 있다. 제약: a>0 이어야 최솟값이 -a+상수 로 고정되고, b=2π/(주기) 가 선택지에서 깔끔한 분수로 떨어져야 한다. 선택지는 a+b 가 서로 다른 다섯 값이 되도록 만든다.'
    creative: '(1) a>0 조건을 빼면 최댓값·최솟값이 뒤집히는 경우를 따져야 해 ★3(I-MI) (2) 주기 대신 f(x+p)=f(x) 형태로 조건을 주면 p 가 주기의 정수배인 경우를 걸러야 해 ★3(이 단원 169-406 형) (3) sin 으로 바꾸고 통과점 조건을 하나 더 주면 연립이 되어 ★3.'
```

```yaml
- id: GN-ALG-168-402
  page: 168
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    그림으로 주어진 y=a sin(π/6)(2x-1)+b 의 그래프에서 a, b 와 그림에 표시된 x절편 c 를 읽어 abc. (a>0)
  category: '최대·최소 → $a, b$ · 주기 $6$ 계산 → 표시된 $x$절편에서 한 주기 뒤 → $c$'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그림의 최댓값 1·최솟값 -3 이라는 기하 정보를 진폭 a 와 수직이동 b 로 옮김"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "라벨 c 를 「표시된 x절편 3 과 같은 위상의 다음 x절편」, 즉 3 에 주기 6 을 더한 값으로 옮김"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "그래프가 주어진 삼각함수의 미정계수와 x절편 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    최댓값 1·최솟값 -3 에서 a=2, b=-1. 내부 각은 (π/6)(2x-1)=(π/3)x-π/6 이라 주기가 2π÷(π/3)=6.
    그림에 표시된 x절편 3 과 같은 모양(내려가며 자르는 절편)이 한 주기 뒤인 c=9 에서 다시 나타난다.
    [분류 이슈] 발문의 상수 c 가 함수식에는 없고 그림 라벨로만 정의돼 있어 그림 없이는 문제가 성립하지 않는다.
    STEP 1 ★2 출발 · 통찰 2 · M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "최대 1·최소 -3 → a=2, b=-1 → 주기 6 → 표시된 x절편 3 에서 한 주기 뒤 c=9 → abc"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$-18$"
  answer_source: "답지"
  figure: "crop:fig-168-402.png"
  latex: latex-bank/gn-alg/items/168-402.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '최댓값·최솟값, 내부 계수(π/6 과 2x-1 의 조합), 그림에 라벨한 x절편을 바꿀 수 있다. 제약: 내부를 (π/6)(2x-1) 처럼 이중으로 쓰면 실제 각속도가 π/3 임을 놓치기 쉬우므로 주기가 정수로 떨어지게 두고, 라벨한 절편과 c 가 정확히 한 주기 차이가 나도록 그림을 맞춘다.'
    creative: '(1) c 를 다음 x절편이 아니라 다음 최대점으로 바꾸면 위상 계산이 한 단계 더 붙어 ★3 유지 (2) 그림 대신 「f(3)=0, 3 다음 x절편이 c」처럼 글로 주면 그림 읽기 통찰이 사라져 ★2 (3) a>0 조건을 빼면 그래프 개형이 두 가지가 되어 ★4 (4) 절댓값을 씌우면 x절편 간격이 반으로 줄어 c 가 달라진다.'
```

### 연습문제 STEP 2

```yaml
- id: GN-ALG-169-403
  page: 169
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    y=cos(πx/4) 의 그래프와 x축으로 둘러싸인 부분에 내접하는 사각형 ABCD 에서 CD 가 x축에 평행하고 CD=2 일 때 사각형의 넓이.
  category: '$x$절편 $\pm 2$ → 아랫변 $4$ · $y$축 대칭으로 $\pt{C}(1, \cos\frac{\pi}{4})$ → 높이 → 사다리꼴 넓이'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프가 y축 대칭이고 CD 가 x축에 평행하므로 CD=2 에서 C, D 의 x좌표가 곧 ±1 로 결정됨"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "도형의 높이를 길이가 아니라 함숫값 cos(π/4) 로 읽어 넓이 공식에 넣는 기하↔대수 전환"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "삼각함수의 그래프에 내접하는 도형의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    cos(πx/4)=0 에서 x=±2 이므로 A(-2,0), B(2,0) 이고 아랫변은 4. CD 가 x축에 평행하고 길이가 2 이므로 대칭성에서 C(1, cos(π/4)), D(-1, cos(π/4)).
    높이는 cos(π/4)=√2/2 이고 사다리꼴 넓이 공식으로 끝난다.
    좌표를 삼각함수 값으로 읽는 전환(RT d2)과 대칭 활용(SYM d1)이 골조. STEP 2 ★3 출발 · 통찰 2 · M_total 6 → ★3 유지.
  tier: star_3
  mechanism_primary: "x절편 ±2 → AB=4 → CD=2 이므로 C(1, cos(π/4)) → 높이 √2/2 → 사다리꼴 넓이"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{3\sqrt{2}}{2}$'
  answer_source: "답지"
  figure: "crop:fig-169-403.png"
  latex: latex-bank/gn-alg/items/169-403.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '내부 계수(π/4 → π/2, π/6), CD 의 길이를 바꿀 수 있다. 제약: 높이로 쓰이는 cos 값이 특수각이 되도록 CD 의 절반이 x절편의 절반·1/3 처럼 딱 떨어지는 위치여야 하고, CD 는 두 x절편 사이 폭보다 짧아야 사각형이 도형 안에 들어간다.'
    creative: '(1) CD 대신 사각형이 정사각형이라는 조건을 주면 cos 방정식을 풀어야 해 ★4 (2) sin 그래프의 한 봉우리로 바꾸면 대칭축이 x=π/(2b) 로 옮겨 대칭 찾기가 한 단계 늘어난다 (3) 넓이를 주고 CD 를 묻는 역방향은 ★4(I-BW) (4) 사각형 대신 내접하는 삼각형의 최대 넓이를 물으면 범위를 넘는다.'
```

```yaml
- id: GN-ALG-169-404
  page: 169
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    두 함수 y=tan x, y=tan x+1 의 그래프와 y축 및 직선 x=π/4 로 둘러싸인 부분의 넓이.
  category: '두 곡선이 $y$축 방향 $1$ 평행이동 관계 → 곡선 부분 상쇄 → 가로 $\pi/4$ · 세로 $1$ 직사각형'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "위아래 경계가 y축 방향 1 만큼 평행이동한 합동 곡선임을 보고 곡선 부분을 밀어 없애 직사각형으로 환원(고1 과정에 적분이 없으므로 이 환원이 유일한 풀이)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "평행이동한 두 삼각함수 그래프 사이의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 곡선은 모양이 같고 y축 방향으로 1 만큼 떨어져 있으므로 아래 곡선 위쪽 영역과 위 곡선 위쪽 영역이 합동이다.
    따라서 둘러싸인 부분은 가로가 0 에서 π/4 까지, 세로가 1 인 직사각형과 넓이가 같아 π/4.
    계산량은 0 에 가깝고 난도가 통찰 하나에 몰려 있다. STEP 2 ★3 출발 · 통찰 1(SYM d2) · M_total 4 → ★3 유지.
  tier: star_3
  mechanism_primary: "두 곡선은 y축 방향 1 평행이동 합동 → 곡선 부분 상쇄 → 가로 π/4 · 세로 1 직사각형 넓이"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{\pi}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/169-404.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 곡선의 세로 간격(1 → 2, 1/2), 오른쪽 경계 직선(π/4 → π/3, π/6)을 바꿀 수 있다. 제약: 두 곡선은 반드시 같은 함수의 y축 평행이동이어야 상쇄가 일어나고, 오른쪽 경계는 점근선 x=π/2 앞이어야 영역이 유한하다. 넓이는 (간격)×(가로)로 항상 떨어진다.'
    creative: '(1) tan 을 sin·cos 으로 바꿔도 골조가 그대로라 ★3 유지 (2) 위 곡선을 y축이 아니라 x축 방향으로 민 y=tan(x-π/6) 으로 바꾸면 상쇄가 깨져 고1 범위에서 풀 수 없다 — 변형 금지 지점 (3) 두 직선 사이로 구간을 좁히거나 왼쪽 경계를 y축이 아닌 직선으로 바꾸기(★3 유지) (4) 넓이를 주고 세로 간격을 묻는 역방향은 ★3.'
```

```yaml
- id: GN-ALG-169-405
  page: 169
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    곡선 y=a sin(bπx) (0 ≤ x ≤ 3/b) 가 직선 y=a 와 만나는 두 점을 A, B 라 할 때, 삼각형 OAB 의 넓이가 5 이고 직선 OA, OB 의 기울기의 곱이 5/4 이면 a+b. (a, b 는 양수) 5지선다.
  category: '$y=a$ 는 최댓값선 → 두 교점의 $x$좌표 → 넓이식 $a/b$ · 기울기 곱 식 $ab$ → 연립'
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「y=a 와 만난다」를 「최댓값을 갖는다」로 옮겨 교점의 x좌표를 방정식 없이 1/(2b), 5/(2b) 로 확정(정의역 0 ≤ x ≤ 3/b 안에 정확히 둘)"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "삼각형 넓이와 두 기울기의 곱이라는 기하 조건을 a/b=5, 4a²b²/5=5/4 라는 a, b 에 대한 두 식으로 전환"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "삼각함수 그래프의 최댓값 점과 좌표평면 도형 조건의 연립"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    y=a 는 곡선의 최댓값선이므로 교점은 bπx=π/2, 5π/2 인 x=1/(2b), 5/(2b) 두 개뿐이고 AB=2/b, 높이 a 로 넓이는 a/b=5.
    두 기울기는 2ab 와 2ab/5 이므로 곱이 4a²b²/5=5/4 에서 ab=5/4. a/b=5 와 연립하면 b=1/2, a=5/2.
    교점을 방정식이 아니라 최댓값 위치로 읽는 동치 변환(EQV d2)과 도형 조건의 대수화(RT d2)가 둘 다 필요하다.
    STEP 2 ★3 출발 · 통찰 2(d2) · M_total 9 · 평가원 기출 → ★4.
  tier: star_4
  mechanism_primary: "y=a 는 최댓값선 → A(1/(2b), a), B(5/(2b), a) → 넓이 a/b=5 · 기울기 곱 4a²b²/5=5/4 → ab=5/4 → a, b"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-169-405.png"
  latex: latex-bank/gn-alg/items/169-405.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '넓이(5 → 4, 9)와 기울기 곱(5/4)을 바꿀 수 있다. 제약: 정의역 0 ≤ x ≤ 3/b 는 최댓값 점이 정확히 두 개 들어가도록 계산된 값이라 함께 손대야 하고, 두 조건이 a/b 와 ab 를 각각 결정하므로 (넓이)×(기울기 곱 계수)가 a², b² 를 유리수 제곱으로 만들어야 답이 깔끔하다.'
    creative: '(1) y=a 대신 y=a/2 와 만나는 점으로 바꾸면 교점이 네 개가 되어 경우를 따져야 하고 I-MI 가 붙어 ★5 후보 (2) 삼각형 OAB 대신 사각형이나 최댓값·최솟값 점 네 개로 만든 도형의 넓이로 확장(★4 유지) (3) 기울기 곱 대신 기울기 합을 주면 식이 대칭식이 되어 계산이 쉬워져 ★3 (4) 정의역 상한을 빼면 교점이 무한히 많아 문제가 성립하지 않는다 — 변형 금지 지점.'
```

```yaml
- id: GN-ALG-169-406
  page: 169
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    모든 실수 x 에 대하여 f(x+π/2)=f(x) 를 만족시키는 f(x)=a cos bx+c 의 최댓값과 최솟값의 합이 6 이고 그래프가 (π/12, 4) 를 지날 때 a+b+c. (a>0, 0<b<5)
  category: '$f(x+\pi/2)=f(x)$ → $\pi/2$ 가 주기의 자연수 배 → $b=4k$ · 범위로 $b$ 확정 · 최대최소 합 $2c$ · 함숫값 → $a$'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(x+π/2)=f(x) 를 「주기가 π/2」가 아니라 「π/2 가 주기의 자연수 배」로 옮김 — 주기라고 단정하면 b 가 하나로 잘못 고정됨"
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "2π/b 가 π/2 의 약수라는 조건에서 b=4, 8, 12, … 여러 경우가 나오고 0<b<5 로 b=4 만 남김"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "f(x+p)=f(x) 형 주기 조건으로 미정계수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f(x+π/2)=f(x) 는 π/2 가 주기의 자연수 배라는 뜻이므로 2π/b=(π/2)/k 에서 b=4k 이고 0<b<5 에서 b=4.
    최댓값 a+c 와 최솟값 -a+c 의 합이 2c=6 이라 c=3, f(π/12)=a cos(π/3)+3=4 에서 a=2.
    조건 문장을 주기의 정수배로 옮기는 동치 변환이 유일한 함정이고 나머지는 표준 연립이라 통찰 2 개여도 +1 을 주지 않고 STEP 2 출발점 ★3 을 유지한다.
  tier: star_3
  mechanism_primary: "π/2 가 주기의 자연수 배 → b=4k → 0<b<5 → b=4 → 최대최소 합 2c=6 → c=3 → f(π/12)=4 → a=2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$9$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/169-406.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주기 조건의 p(π/2 → π/3), b 의 범위, 최대최소 합, 통과점을 바꿀 수 있다. 제약: b 의 범위는 b=2π k/p 후보 중 정확히 하나만 남기도록 잡아야 하고, 통과점의 각 b·x 가 특수각이 되도록 x 를 역으로 맞춘다. a>0 이라야 최댓값이 a+c 로 고정된다.'
    creative: '(1) b 의 범위를 넓혀 후보가 둘 남게 하고 「모든 a+b+c 의 합」을 물으면 기각 검증이 들어가 ★4(I-VF) (2) 최대최소 합 대신 최댓값만 주면 a 와 c 가 한 식에 묶여 연립이 필요해진다 (3) cos 을 |sin| 으로 바꾸면 주기 규칙이 π/b 로 바뀌어 b 후보가 달라진다 (4) 조건을 f(x+p)=f(x) 가 아니라 그래프의 대칭축으로 주면 ★4.'
```

### 연습문제 실력 UP

```yaml
- id: GN-ALG-169-407
  page: 169
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    f(x)=a|sin bx|+c 가 ㈎ 최댓값과 최솟값의 차가 3 ㈏ 주기가 y=cos 4x 의 주기와 같음 ㈐ y절편이 5 를 만족시킬 때 a+b+c. (a<0, b>0)
  category: '$a<0$ → 최대 $c$ · 최소 $a+c$ → 차 $-a=3$ · $\cos 4x$ 주기 $\pi/2 = \pi/b$ → $b$ · $y$절편 $=c$'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "a<0 이므로 |sin bx|=0 일 때가 최대, =1 일 때가 최소로 뒤집힘을 보고 「최대와 최소의 차」를 -a 로 옮김"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「주기가 y=cos 4x 의 주기와 같다」를 두 번 옮김 — cos 4x 의 주기 π/2 를 구하고, 절댓값이 붙은 |sin bx| 의 주기는 2π/b 가 아니라 π/b 임을 적용"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "절댓값 삼각함수의 부호 조건·주기 조건 종합(미정계수)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    a<0 이라 최댓값은 |sin bx|=0 일 때의 c, 최솟값은 |sin bx|=1 일 때의 a+c 이고 차가 -a=3 에서 a=-3.
    cos 4x 의 주기 π/2 와 |sin bx| 의 주기 π/b 가 같아 b=2, y절편 f(0)=c=5.
    세 조건이 각각 다른 미지수 하나를 결정하지만 두 번의 뒤집기(부호·절댓값 주기)를 모두 통과해야 한다.
    [분류 이슈] ★4 인데 저노출 통찰(SC/VF/SYM/XU/RT/PD/BW)이 없고 EQV 2 개뿐이라 §2.13 기준으로 YELLOW. 실력 UP 벤더 신호를 존중해 ★4 로 두되 실제 체감은 ★3 후보.
  tier: star_4
  mechanism_primary: "a<0 → 최대 c · 최소 a+c → -a=3 → a=-3 → cos4x 주기 π/2 = |sin bx| 주기 π/b → b=2 → y절편 c=5 → a+b+c"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "$4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/169-407.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '최대최소 차(3 → 4, 7), 기준 함수의 주기(cos 4x → cos 6x, tan 2x), y절편을 바꿀 수 있다. 제약: a<0 이 유지되어야 최대·최소 뒤집기 함정이 살아 있고, b=π/(기준 주기) 가 양수로 떨어져야 한다. 기준 함수를 tan 으로 바꾸면 그 주기가 π/|b| 라 계산 단계가 하나 줄어든다.'
    creative: '(1) ㈐ 를 y절편 대신 특정 함숫값 f(π/12) 로 바꾸면 c 가 바로 나오지 않아 연립이 되어 ★4 유지 (2) a<0 조건을 빼고 「가능한 a+b+c 의 합」을 물으면 두 경우를 모두 따진 뒤 조건 위배를 기각해야 해 I-VF 가 붙어 ★5 후보 (3) |sin bx| 를 |sin bx + 1/2| 처럼 안쪽을 바꾸면 치역 하한이 0 이 아니게 되어 골조가 깨진다 — 변형 금지 지점 (4) ㈏ 의 기준 함수를 절댓값 함수로 주면 반감이 두 번 겹쳐 ★4.'
```

## 표본 판정 요약 (37문)

- ★ 분포: ★1 4 · ★2 21 · ★3 10 · ★4 2 · ★5 0
- 통찰형 15 · 절차형 22 · premium 0
- 구역별: 개념원리 익히기 4문(모두 ★1) · 필수·발전 예제 23문(★2 18 · ★3 5) · STEP 1 5문(★2 3 · ★3 2) · STEP 2 4문(★3 3 · ★4 1) · 실력 UP 1문(★4 1)
- type_hint 상위: 「삼각함수의 그래프(진폭·주기·평행이동)와 최대·최소·주기」 12 · 「주기·최대최소·함숫값으로 미정계수 구하기」 8 · 「절댓값 기호를 포함한 삼각함수」 6 · 「그래프가 주어진 삼각함수의 미정계수 구하기」 3 · 「그래프의 평행이동·대칭이동」 3 · (나머지 5: 주기 비교 1 · 합답형 1 · 넓이 3)
- 통찰 유형 분포(라벨 21 개): I-EQV 13 · I-RT 5 · I-SYM 2 · I-MI 1 (SC·VF·XU·PD·BW·CON 0). 이 단원은 「조건을 다른 표현으로 옮기기」에 통찰이 집중돼 있고 전략 분기·사후 검증형은 한 문항도 없다.
- 그림: 5문(`crop:fig-166-e7.png` · `crop:fig-166-394.png` · `crop:fig-168-402.png` · `crop:fig-169-403.png` · `crop:fig-169-405.png`)
- 반복되는 함정 네 가지: 주기 공식이 sin·cos 은 2π/|b| 이고 tan 은 π/|b| 인 것(T-표기), x축 평행이동이 bx+c 꼴에서 c=-bm 으로 b 배 커지는 것(T-표기), 절댓값이 붙으면 주기가 반이 되고 치역 하한이 0 이 되는 것(T-범위), 진폭 계수가 음수면 최대·최소가 뒤집히는 것(T-부호).

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-ALG-168-402 | 발문이 「상수 a, b, c」를 묻는데 함수식 y=a sin(π/6)(2x-1)+b 에는 c 가 없고 그림의 x절편 라벨로만 정의된다. 그림 없이는 문제가 성립하지 않아 변형 시 그림과 식을 반드시 함께 바꿔야 함 | ★3 |
| GN-ALG-169-407 | ★4 인데 저노출 통찰(SC/VF/SYM/XU/RT/PD/BW)이 없고 I-EQV 2 개뿐이라 §2.13 기준 YELLOW. 실력 UP 벤더 신호로 ★4 유지, 실제 체감은 부호 함정 하나라 ★3 후보 | ★3 / ★4 |
| GN-ALG-167-e8 · 167-395 · 167-396 · 168-398 · 168-401 | 통찰 0 이고 M_total 이 4~5 라 v3.8 산식으로는 −1(★1) 후보지만, 필수 예제·확인체크·STEP 1 이라는 벤더 구역 신호를 존중해 ★2 로 둠(1 단 차이 YELLOW) | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ⑴ 「그래프가 주어진 삼각함수의 미정계수」(166-e7 · 166-394 · 168-402) — 조건이 글이 아니라 그림이라 진입 방식이 다르고 그림 라벨이 변형 제약이 된다. ⑵ 「절댓값 기호를 포함한 삼각함수」(167 쪽 5 문 + 169-407) — 주기 반감·치역 하한 0 이라는 별도 규칙 두 개를 쓰므로 일반 삼각함수 그래프 유형과 섞으면 안 된다. ⑶ 「삼각함수 그래프로 둘러싸인 도형의 넓이」(169-403 · 169-404 · 169-405) — 도형·좌표 도구가 함께 들어와 ★3~4 변별 슬롯 자격이 있는 유일한 갈래다.
- **통합해도 될 유형**: 「사인함수의 그래프」·「코사인함수의 그래프」·「탄젠트함수의 그래프」(161-e1 · 162-e2 · 163-e3 계열 12 문)는 주기 공식만 2π/|b| ↔ π/|b| 로 갈릴 뿐 골조가 같아 하나의 base 유형 아래 sin·cos·tan 변종으로 두면 충분하다. 「주기·최대최소·함숫값으로 미정계수 구하기」(8 문)도 조건이 몇 개냐(2 개 → ★2 · 3 개 연립 → ★3)로 난도만 갈리므로 단일 유형에 조건 수 파라미터를 두는 편이 낫다.
- **base ★ 제안**: 순방향 그래프 성질 ★1~2 · 미정계수 역산 ★2~3 · 그림 읽기 ★3 · 절댓값 ★2(미정계수 결합 시 ★3~4) · 넓이 ★3~4.
