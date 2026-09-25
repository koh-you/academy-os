---
name: mechanism-데이터-GN-GEO-31
description: 개념원리 기하 31 벡터를 이용한 구의 방정식(1/1 · 247~248쪽 · 8문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 기하 (22개정 · 학생용 PDF) · 전사본 latex-bank/gn-geo
  section: 31 벡터를 이용한 구의 방정식
  unit_code: GEO-31
  part: "1/1"
  extract_range: "247~248쪽 · 247-e18~248-527"
  total_problems: 8
  unit_total: 8
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그·level)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-geo/items/<id>.tex
  image_source: latex-bank/gn-geo/figures/ (crops.json)
---

# 개념원리 기하 · 31 벡터를 이용한 구의 방정식 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 기하 31단원 「벡터를 이용한 구의 방정식」 247~248쪽 전 8문항을 다룬다. 구역은 넷이다. 「필수·발전 예제」 3문(필수 예제 247-e18 과 그 뒤에 붙는 확인체크 2문), 「연습문제 STEP 1」 2문, 「연습문제 STEP 2」 2문, 「연습문제 실력 UP」 1문이다. 개념원리 고등의 난이도 신호는 구역과 태그·level 이므로 필수 예제와 그 확인체크는 ★2, STEP 1 은 ★2, STEP 2 는 ★3, 실력 UP 은 ★4 를 출발점으로 잡고 M_total·통찰로 ±1 조정했다. 이 범위에는 그림이 딸린 문항이 한 문항도 없다(전부 좌표와 벡터식으로만 주어진다).

단원 골조는 하나다 — **벡터로 주어진 조건식을 「중심 · 반지름」 두 값으로 환원하고, 그 구에 한 가지 도형 요구를 얹는다.** 조건식은 네 가지 포장으로만 나온다. ⑴ 지름의 양 끝 점, ⑵ |AP|=r, ⑶ AP·BP=0(내적 0 ⟺ AB 가 지름), ⑷ |p|² 를 포함한 전개식을 완전제곱해 |p-c|=r 로 되묶기. 얹히는 요구도 넷이다 — 좌표축·직선과의 두 교점 거리(현), 평면 사이 거리의 최대·최소, 구 위의 점에서의 접평면, 구와 평면의 교선인 원의 둘레. 그래서 이 범위의 진짜 통찰은 둘로 압축된다. ⑴ **내적 전개식을 완전제곱해 중심과 반지름을 읽어내는 것**(526 · 527), ⑵ **구에 얹힌 요구를 「중심에서의 거리 d」 하나로 옮기는 단면·현 기하**(523 · 525 · 527)다. 나머지는 예제가 가르친 공식의 직접 적용이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다. 이 단원의 숫자 변형에서 특히 조심할 것은 **r² - d² > 0 이 유지돼야 교점·단면원이 존재한다**는 점(523 은 반대로 d > r 이어야 최솟값이 0 이 아니다)과, **반지름·현·둘레가 근호 안 정수로 떨어지도록 좌표를 고르는 것**이다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-GEO-247-e18
  page: 247
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    두 점 $\pt{A}(-4,3,-5)$, $\pt{B}(2,3,-1)$ 을 지름의 양 끝 점으로 하는 구의 방정식을
    벡터를 이용해 구하기.
  category: "지름 양 끝 점 → (p-a)·(p-b)=0 → 중심은 중점, 반지름은 |AB|/2 → 표준형"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지름의 양 끝 점이 주어진 구의 방정식(벡터 표현)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이 단원의 대표 예제다. 지름의 양 끝 점 조건을 벡터로 옮기면 $(\vec p-\vec a)\cdot(\vec p-\vec b)=0$,
    이것을 $|\vec p-\dfrac{\vec a+\vec b}{2}|=\dfrac{|\vec b-\vec a|}{2}$ 로 정리하면 중심은 중점, 반지름은 $|AB|/2$ 라는 공식이 바로 나온다.
    학생이 할 일은 중점과 거리 한 번씩 계산하는 것뿐이라 통찰 0 · M_total 5 로 -1 후보지만,
    벡터식을 좌표 표준형으로 옮기는 전개 단계가 있고 필수 예제 신호가 ★2 라 유지했다.
    [분류 이슈] 노동량만 보면 익히기(★1)와 같다.
  tier: star_2
  mechanism_primary: "지름 양 끝 A·B → (p-a)·(p-b)=0 → 중심 = AB 중점, 반지름 = |AB|/2 → (x-x₀)²+(y-y₀)²+(z-z₀)²=r²"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(x+1)^2+(y-3)^2+(z+3)^2=13$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/247-e18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B 의 6개 좌표 전부. 제약: 중점이 정수 좌표가 되도록 대응 성분의 합을 짝수로 두고, |AB|² 가 4의 배수(또는 r² 가 정수)가 되게 해야 답이 깔끔하다. 한 성분을 공유시키면(여기서는 y=3) 계산이 2차원으로 줄어드니, 난도를 올리려면 세 성분을 모두 다르게 준다."
    creative: "(1) 중심과 한 끝 점을 주고 다른 끝 점을 묻기(역방향 · ★2) (2) 구의 방정식을 주고 지름의 양 끝 점 중 하나를 묻기(I-BW · ★3) (3) 지름 양 끝 점 대신 세 점을 주고 그 중 두 점이 지름임을 내적으로 판별하게 하면 ★3."
```

```yaml
- id: GN-GEO-247-521
  page: 247
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수 예제 확인체크"
  summary: |
    점 $\pt{A}(-1,3,1)$ 에 대하여 $|\overrightarrow{AP}|=10$ 인 점 $\pt{P}$ 가 나타내는 도형과
    $x$ 축의 두 교점 사이의 거리.
  category: "|AP|=10 → 중심 A·반지름 10 인 구 → y=z=0 대입 → 두 근의 차"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구와 좌표축의 두 교점 사이의 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $|\overrightarrow{AP}|=r$ 를 중심 A 반지름 r 인 구로 읽는 것은 이 단원의 정의 그대로다.
    $x$ 축과의 교점은 $y=z=0$ 을 대입해 $x$ 에 대한 이차식을 풀면 되고, 두 근이 중심의 $x$ 좌표에 대해 대칭이라 차가 바로 나온다.
    표준 절차 두 단계라 통찰로 셀 것이 없다. 확인체크지만 필수 예제 뒤에 붙는 확인 문항이라 ★2 출발을 유지했다.
    [분류 이슈] 태그 기준(확인체크 ★1)과 구역 기준(필수 예제 ★2)이 갈리는 지점.
  tier: star_2
  mechanism_primary: "|AP|=10 → 중심 A(-1,3,1)·r=10 구 → y=z=0 대입 → (x+1)²=90 → 두 근의 차"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6\sqrt{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/247-521.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 세 좌표와 반지름. 제약: 100 - (y₀²+z₀²) > 0 이어야 교점이 두 개 존재하고, 그 값이 제곱수·간단한 근호가 되도록 (y₀, z₀) 를 고른다. 반지름을 줄여 교점이 없게 만들면 문제가 성립하지 않으니 반드시 확인."
    creative: "(1) x 축 대신 y 축·z 축 또는 xy 평면과의 교선(원)의 넓이로 바꾸기(★2) (2) 교점이 존재할 반지름의 범위를 묻기(I-BW · ★3) (3) 두 교점과 중심이 이루는 삼각형의 넓이를 묻기(한 단계 추가 · ★3)."
```

```yaml
- id: GN-GEO-247-522
  page: 247
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "필수 예제 확인체크"
  summary: |
    두 점 $\pt{A}(1,2,-3)$, $\pt{B}(-3,2,5)$ 에 대하여 $\overrightarrow{AP}\cdot\overrightarrow{BP}=0$ 인 점 $\pt{P}$ 가
    나타내는 입체도형의 겉넓이.
  category: "AP·BP=0 → AB 를 지름으로 하는 구 → 반지름 |AB|/2 → 4πr²"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "AP·BP=0 을 만족시키는 점의 자취(지름이 AB 인 구)와 겉넓이·부피"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    내적이 0 이라는 조건을 「AB 를 지름으로 하는 구」로 읽는 것이 핵심이지만, 바로 앞 필수 예제 e18 이 이 동치를 그대로 가르친 직후라 통찰로는 세지 않았다(절차형).
    반지름은 $|AB|/2=2\sqrt5$, 겉넓이는 $4\pi r^2$ 대입 한 줄이다.
    골조·노동량은 e18 과 같고 마지막에 겉넓이 공식 한 단계만 더 붙는다. ★2 유지.
  tier: star_2
  mechanism_primary: "AP·BP=0 → AB 지름인 구 → r=|AB|/2 → 겉넓이 4πr²"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$80\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/247-522.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B 의 여섯 좌표. 제약: |AB|² 가 4의 배수여야 r² 가 정수가 되고 겉넓이·부피가 근호 없이 떨어진다(여기서는 |AB|²=80 → r²=20). 부피를 묻는 변형이라면 r 자체가 유리수여야 한다."
    creative: "(1) 겉넓이 대신 부피·구에 내접하는 정육면체의 한 변으로 바꾸기(★2~3) (2) AP·BP=k(양수)로 바꾸면 중심은 그대로고 반지름만 커지는 구가 되어 완전제곱 단계가 생김 → ★3 (3) AP·BP≤0 인 영역의 부피(부등식 해석)로 바꾸면 I-EQV 가 붙어 ★3."
```

### 연습문제 STEP 1

```yaml
- id: GN-GEO-248-523
  page: 248
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    점 $\pt{A}(0,-1,3)$ 에 대하여 $|\overrightarrow{AP}|=2$ 인 점 $\pt{P}$ 와 평면 $x+y+z=8$ 사이 거리의
    최댓값 $M$, 최솟값 $m$ 일 때 $Mm$ 의 값.
  category: "구(중심 A·r=2) → 중심-평면 거리 d → M=d+r, m=d-r → Mm=d²-r²"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구 위의 점과 평면 사이 거리의 최대·최소를 「중심-평면 거리 d 에 대한 d+r 와 d-r」로 동치 변환(중심을 지나 평면에 수직인 직선 위에서 극값)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구 위의 점과 평면 사이 거리의 최댓값·최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    점 P 를 매개변수로 두고 거리를 최적화하려 들면 막히고, 중심에서 평면에 내린 수선 위에서 극값이 난다는 기하로 옮겨야 한 줄이 된다(I-EQV d1).
    그러면 $Mm=(d+r)(d-r)=d^2-r^2$ 로 d 를 유리화할 필요조차 없어진다 — $d^2=12$, $r^2=4$.
    함정은 $d>r$ (구가 평면과 만나지 않음) 확인이다. 만나면 $m=0$ 이 되어 답이 0 이다.
    STEP 1 출발 ★2 · 통찰 1개 depth 1 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "|AP|=2 → 중심 A·r=2 구 → 중심-평면 거리 d → M=d+r, m=d-r → Mm=d²-r²"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/248-523.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 좌표·반지름·평면의 상수항. 제약: d² 가 정수로 떨어지게 평면 계수를 (1,1,1)·(1,2,2)·(2,-1,2) 처럼 |n|² 가 제곱수인 것으로 고르고, 반드시 d > r 을 확인한다(d ≤ r 이면 m=0 으로 문제가 무너진다). Mm=d²-r² 이라 곱을 물으면 근호가 사라지고, M+m 을 물으면 2d 로 근호가 남는다."
    creative: "(1) 평면 대신 직선·다른 구와의 거리 최대·최소(같은 골조 ★2~3) (2) d < r 이 되게 두고 최솟값이 0 임을 알아채게 하면 I-VF 가 붙어 ★3 (3) 구 위 점과 평면 위 점을 모두 움직여 두 도형 사이 거리로 확장(★3) (4) M, m 을 주고 반지름·평면을 역으로 묻기(I-BW · ★3)."
```

```yaml
- id: GN-GEO-248-524
  page: 248
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 점 $\pt{A}(3,0,3)$, $\pt{B}(1,2,5)$ 에 대하여 $\overrightarrow{AP}\cdot\overrightarrow{BP}=0$ 인 점 $\pt{P}$ 의 도형 위
    점 $\pt{Q}(1,2,3)$ 에서 이 도형에 접하는 평면의 방정식.
  category: "AB 지름 구 → 중심 C → 법선벡터 = CQ → 접평면의 방정식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구의 접평면을 「중심에서 접점으로 가는 벡터가 법선벡터」라는 기하 성질로 옮겨 평면의 방정식으로 세움(대수적으로 연립해 중근 조건을 따지지 않는다)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구 위의 점에서의 접평면의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞의 522 와 같은 방법으로 중심 $(2,1,4)$·반지름 $\sqrt3$ 을 얻은 뒤, 접평면은 법선벡터 $\overrightarrow{CQ}=(-1,1,-1)$ 하나로 끝난다(I-RT d1).
    도구 두 개(내적 0 → 구, 접점 → 법선)를 순서대로 써야 하지만 각 단계는 공식 한 줄이다.
    Q 가 실제로 구 위의 점인지는 문제가 보장하므로 검증 부담이 없다. STEP 1 출발 ★2 유지.
    [분류 이슈] 도구가 하나 더 얹힌다는 점에서 ★3 후보이기도 하다.
  tier: star_2
  mechanism_primary: "AP·BP=0 → 중심 C=AB 중점·r=|AB|/2 구 → 법선 n=CQ → n·(x-Q)=0"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$x-y+z-2=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/248-524.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B·Q 의 좌표. 제약: Q 가 반드시 구 위에 있어야 하므로 먼저 중심 C 와 r 을 정하고 |CQ|=r 인 정수 좌표 Q 를 역으로 고른다(예: C=(2,1,4), CQ=(-1,1,-1) → r²=3). 법선 성분이 작은 정수여야 평면식이 깔끔하다."
    creative: "(1) 접평면 대신 접점에서의 접선·구 밖 한 점에서 그은 접선의 길이(√(|CP|²-r²) · ★3) (2) 주어진 평면에 평행한 접평면 두 개를 묻기(I-MI 분기 · ★3) (3) Q 를 주지 않고 특정 평면과 접할 조건으로 반지름을 역으로 묻기(I-BW · ★3)."
```

### 연습문제 STEP 2

```yaml
- id: GN-GEO-248-525
  page: 248
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    점 $\pt{A}(4,8,1)$ 과 점 $\pt{P}$ 의 위치벡터를 $\vec a$, $\vec p$ 라 할 때 $|\vec p-\vec a|=|\vec a|$ 인 $\pt{P}$ 의 도형과
    직선 $\dfrac{x-1}{2}=y+1=\dfrac{z-1}{2}$ 의 두 교점 사이의 거리.
  category: "|p-a|=|a| → 중심 A·반지름 |OA| 인 구 → 중심-직선 거리 d → 현의 길이 2√(r²-d²)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "위치벡터식 |p-a|=|a| 를 「중심 A, 반지름 |OA| 인 구」(원점을 지나는 구)로 해석"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 교점 사이 거리를 직선의 매개변수 대입 후 두 근의 차로 밀지 않고, 중심-직선 거리 d 와 현의 길이 2√(r²-d²) 라는 기하로 환원"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "구와 직선의 두 교점 사이의 거리(현의 길이)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    우변이 상수가 아니라 $|\vec a|$ 라 반지름이 $|OA|=9$ 로 계산된다는 것을 먼저 읽어야 한다(I-EQV d1).
    두 교점 거리는 직선 위 점을 매개변수로 두고 이차방정식 두 근의 차로도 되지만, 중심에서 직선에 내린 수선의 길이 d 를 구해 $2\sqrt{r^2-d^2}$ 로 가면 훨씬 짧다(I-RT d1).
    벡터 표기(Mₐ=2)와 사영 계산(Mₖ=2)이 더해져 M_total 7.
    STEP 2 출발 ★3 · 통찰 2개지만 둘 다 depth 1 이라 +1 조건에는 못 미쳐 ★3 유지.
  tier: star_3
  mechanism_primary: "|p-a|=|a| → 중심 A·r=|OA| 구 → 중심-직선 거리 d(사영) → 현 = 2√(r²-d²)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/248-525.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 좌표(|OA| 가 정수가 되도록 (4,8,1)·(2,3,6)·(1,4,8) 같은 세 제곱수 합 조합)와 직선의 지나는 점·방향벡터(성분 제곱합이 제곱수인 (2,1,2)·(1,2,2)·(2,-3,6)). 제약: r²-d² > 0 이어야 교점이 두 개이고, 그 값이 제곱수여야 현이 정수로 떨어진다."
    creative: "(1) 두 교점 사이 거리 대신 교점의 좌표·중점을 묻기(매개변수 갈래가 강제되어 ★3) (2) 직선 대신 평면과의 교선인 원의 넓이(★3) (3) 현의 길이를 주고 반지름·직선의 미지 성분을 역으로 묻기(I-BW 추가 · ★4) (4) 직선이 구에 접할 조건으로 바꾸면 r=d 판정이 되어 ★3."
```

```yaml
- id: GN-GEO-248-526
  page: 248
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\pt{A}(3,1,2)$, $\pt{B}(4,2,-4)$, $\pt{P}$ 의 위치벡터를 $\vec a$, $\vec b$, $\vec p$ 라 할 때
    $|\vec p|^2-6\vec a\cdot\vec p+9|\vec a|^2=|\vec b|^2$ 인 $\pt{P}$ 의 도형이 중심 $(l,m,n)$·반지름 $r$ 인 구일 때 $l+m+n+r$.
  category: "좌변을 |p-3a|² 로 완전제곱 → 중심 3a·반지름 |b| → 성분 합 + r"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "내적 전개식 |p|²-6a·p+9|a|² 을 |p-3a|² 으로 되묶는 완전제곱 동치 변환(계수 6 과 9 가 3a 의 이중곱·제곱임을 읽어야 함)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "벡터 내적 전개식을 완전제곱해 구의 중심·반지름 찾기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    성분을 대입해 $x,y,z$ 에 대한 이차식으로 펼친 뒤 다시 완전제곱하는 길도 있지만, 벡터 상태에서 $|\vec p-3\vec a|^2$ 으로 한 번에 묶는 것이 이 문항이 요구하는 착안이다(I-EQV d2).
    묶고 나면 중심은 $3\vec a=(9,3,6)$, 반지름은 $|\vec b|=6$ 으로 계산이 두 줄이다.
    함정은 중심이 $\vec a$ 가 아니라 $3\vec a$ 라는 것과 우변이 상수가 아닌 $|\vec b|^2$ 라는 것이다.
    STEP 2 출발 ★3 · 통찰 1개 depth 2 · M_total 6 → ★3 유지.
  tier: star_3
  mechanism_primary: "|p|²-6a·p+9|a|² = |p-3a|² → |p-3a|=|b| → 중심 3a·r=|b| → l+m+n+r"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$24$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/248-526.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 쌍 (6, 9) → (2k, k²) 꼴이면 무엇이든 가능(k=2 → 4·4, k=4 → 8·16). A 의 좌표는 ka 가 정수 좌표가 되게, B 는 |b| 가 정수가 되게(제곱수 합) 고른다. 제약: 계수가 (2k, k²) 짝을 이루지 않으면 완전제곱이 안 되므로 반드시 짝을 맞춘다."
    creative: "(1) 우변을 상수로 두고 반지름을 직접 주기(★2 로 하락) (2) 좌변에 b 를 섞어 |p-3a+b|² 꼴로 만들면 중심이 세 벡터 조합이 되어 ★3~4 (3) 구가 되기 위한 우변의 조건(양수)을 묻기(I-BW · ★4) (4) 중심·반지름 대신 원점에서 구까지의 최단거리를 묻기(한 단계 추가 · ★3)."
```

### 연습문제 실력 UP

```yaml
- id: GN-GEO-248-527
  page: 248
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    직선 $-x=\dfrac{y}{2}=\dfrac{z}{3}$ 와 평면 $2x+y-z=6$ 의 교점을 $\pt{A}$ 라 할 때
    $\overrightarrow{OP}\cdot\overrightarrow{OA}=|\overrightarrow{OP}|^2$ 인 점 $\pt{P}$ 의 도형과
    평면 $x+2y-2z=0$ 이 만나서 생기는 도형의 둘레의 길이($\pt{O}$ 는 원점).
  category: "직선·평면 교점 A → OP·OA=|OP|² 를 완전제곱해 OA 지름 구 → 중심-평면 거리 d → 단면원 반지름 √(r²-d²) → 둘레"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "OP·OA=|OP|² 를 |p-½a|=½|a| 로 완전제곱 변환해 「OA 를 지름으로 하는 구」임을 읽음(이항해 |p|²-p·a=0 으로 만드는 방향 전환이 관건)"
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구와 평면이 만나서 생기는 도형이 원이고 그 반지름이 √(r²-d²) 라는 단면 기하로 옮겨 둘레를 계산"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "구와 평면이 만나서 생기는 원의 반지름·둘레"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    세 도구가 사슬로 이어진다 — 직선을 매개변수로 두고 평면에 대입해 A 를 얻고, 벡터 조건을 완전제곱해 OA 를 지름으로 하는 구를 얻고(I-EQV d2), 그 구를 평면으로 자른 원의 반지름을 √(r²-d²) 로 얻는다(I-RT d1).
    어느 한 고리가 끊기면 진행이 안 되고, 단계 수가 7 을 넘어 Mₛ=3 이다.
    「도형과 평면이 만나서 생기는 도형」이 원이라는 것을 스스로 규정해야 하는 것도 부담이다.
    실력 UP 출발 ★4 · 통찰 2개(d2+d1) · M_total 8 → ★4 유지. ★5 는 SC/VF/SYM/XU 가 없어 해당 없음.
  tier: star_4
  mechanism_primary: "직선 매개변수 → 평면 대입 → A → OP·OA=|OP|² ⟺ |p-½a|=½|a| (OA 지름 구) → 중심-평면 거리 d → 단면원 r'=√(r²-d²) → 둘레 2πr'"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2\sqrt{13}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/248-527.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 방향벡터·평면 두 개의 계수. 제약: (1) 교점 A 의 좌표가 정수여야 하고 성분이 짝수여야 중심 ½a 가 정수 좌표가 된다 (2) 자르는 평면의 법선은 |n| 이 정수인 (1,2,-2)·(2,-1,2) 류로 (3) r²-d² > 0 이어야 교선이 존재하고, 그 값이 간단해야 둘레가 깔끔하다. 자르는 평면이 원점을 지나면 d 계산이 한 단계 줄어든다."
    creative: "(1) 둘레 대신 단면원의 넓이·중심 좌표를 묻기(★4 유지) (2) 자르는 평면을 움직여 단면원 넓이의 최댓값을 묻기(최적화 한 겹 추가 · ★5 후보, I-SC) (3) 평면 대신 다른 구와의 교선(두 구의 교선인 원 · ★4~5) (4) OP·OA=k|OP|² 처럼 매개변수를 넣어 k 에 따른 도형 분기를 묻기(I-MI/I-VF · ★5) (5) A 를 좌표로 직접 주면 첫 고리가 사라져 ★3."
```

## 표본 판정 요약 (8문)

- ★ 분포: ★1 0 · ★2 5 · ★3 2 · ★4 1 · ★5 0
- 통찰형 5 · 절차형 3 · premium 0
- 통찰 라벨 7개: I-EQV 4(523 · 525 · 526 · 527) · I-RT 3(524 · 525 · 527). depth 2 는 2개(526 · 527), 나머지는 depth 1. I-SC · I-VF · I-SYM · I-XU 는 이 범위에 없다(그래서 ★5 슬롯도 없다).
- 대상층: 중하위권 3 · 중위권 4 · 중상위권 1
- type_hint 상위 5: 「구와 직선·좌표축의 두 교점 사이의 거리(현의 길이)」 2(247-521 · 248-525) · 「AP·BP=0 을 만족시키는 점의 자취(지름이 AB 인 구)」 2(247-522 · 248-524, 524 는 접평면과 결합) · 「벡터식(전개식·완전제곱)에서 구의 중심·반지름 찾기」 2(248-526 · 248-527, 527 은 단면원과 결합) · 「구와 평면 사이 거리·단면의 기하」 2(248-523 · 248-527) · 「지름의 양 끝 점이 주어진 구의 방정식」 1(247-e18)
- 그림: 0문(이 범위는 전부 좌표·벡터식으로만 주어진다)
- M_total 분포: 5 5문 · 6 1문 · 7 1문 · 8 1문 (최대 8 · 평균 5.75)

## 분류 이슈 목록

판정이 애매하거나 벤더 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 이 범위에 2단 이상 어긋난 문항은 없다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-GEO-247-e18 | 단원 대표 필수 예제라 벤더 신호는 ★2 지만 통찰 0 · M_total 5 로 v3.8 의 -1 후보다. 벡터식 → 좌표 표준형 전개가 한 단계 있다는 이유로만 ★2 를 유지했다 | ★1 / ★2 |
| GN-GEO-247-521 · 247-522 | tag 「확인체크」는 벤더 신호표에서 ★1 출발이지만, 이 두 문항은 익히기 구역이 아니라 필수 예제 뒤에 붙는 확인 문항이라 예제와 같은 ★2 출발로 잡았다(구역 기준과 태그 기준이 갈리는 지점 · 26단원과 같은 처리) | ★2 |
| GN-GEO-248-524 | 통찰 1개 depth 1 · M_total 5 로 수치는 같은 구역의 523 과 동일하지만, 「내적 0 → 구」와 「접점 → 법선」 도구 두 개가 사슬로 얹힌다. STEP 1 신호를 존중해 ★2 로 두고 기록 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위 8문 전부가 **「벡터 조건식 → 구의 중심·반지름 → 얹힌 도형 요구」**라는 한 골조의 변주다. 카탈로그에서는 이것을 하나의 base 유형으로 세우고 **조건식 포장**(지름 양 끝 점 / |AP|=r / AP·BP=0 / 완전제곱해야 하는 전개식)과 **얹힌 요구**(축·직선과의 현 / 평면 사이 거리 최대·최소 / 접평면 / 단면원)를 두 축의 하위 갈래로 두는 편이 낫다. 이 2×4 격자가 이 단원 출제의 전부다.
- **따로 세울 가치가 있는 유형은 둘**이다. ⑴ 「내적 전개식 완전제곱 → 중심·반지름」(526 · 527) — 계수 (2k, k²) 짝을 읽는 통찰 하나가 정답률을 가르므로 독립 유형으로 두고 ★3~4 변별 슬롯으로 쓸 수 있다. ⑵ 「구의 단면·현 기하(d 로 환원)」(523 · 525 · 527) — 구와 직선·평면·좌표축을 한 유형으로 묶고 대상(축/직선/평면)만 갈래로 두면 된다. 학생이 배우는 것은 전부 √(r²-d²) 하나다.
- 「지름 양 끝 점 → 구」(e18)와 「AP·BP=0 → 구」(522 · 524)는 **같은 정리의 정방향·역방향 포장**이므로 카탈로그에서 한 유형으로 통합하고 출제 시 포장만 바꾸는 편이 슬롯 관리가 쉽다. 524 처럼 접평면이 얹히면 별도 슬롯이 된다.
- 이 단원 단독으로는 ★5 슬롯이 나오지 않는다(SC · VF · SYM · XU 통찰이 한 번도 등장하지 않는다). ★5 를 만들려면 527 의 자르는 평면을 움직여 단면원 넓이를 최적화하거나, 조건식에 매개변수를 넣어 도형이 구/점/공집합으로 갈리는 분기를 검증하게 하는(I-VF) 식으로 **한 겹을 더 얹어야** 한다. 30단원(평면의 방정식)·직선의 방정식 단원과 묶어 설계할 것을 권한다.
