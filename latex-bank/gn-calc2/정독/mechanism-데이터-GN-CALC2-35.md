---
name: mechanism-데이터-GN-CALC2-35
description: 개념원리 미적분Ⅱ 35 속도와 거리(1/1 · 279~282쪽 · 15문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: "개념원리 미적분Ⅱ · 전사본 latex-bank/gn-calc2"
  section: "35 속도와 거리"
  unit_code: "35"
  part: "1/1"
  extract_range: "279~282쪽 · 279-e12~282-582"
  total_problems: 15
  unit_total: 15
  judgment_protocol: "schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 「필수·발전 예제」 구역의 tag 확인체크 문항은 직전 필수 예제의 유제이므로 개념원리 익히기의 ★1 이 아니라 ★2 출발점으로 봄. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22)."
  variation_fields: "mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)"
  latex_source: "latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex"
  image_source: "latex-bank/gn-calc2/figures/ (이 범위에는 그림 문항 없음)"
---

# 개념원리 미적분Ⅱ · 35 속도와 거리 (1/1) 정독 데이터 (v1.0)

279~282쪽의 15문항 전수다. 구역은 「필수·발전 예제」 9문(필수 예제 3 + 확인체크 유제 6) · 「연습문제 STEP 1」 2문 · 「연습문제 STEP 2」 2문 · 「연습문제 실력 UP」 2문이다. 개념원리 고등의 벤더 난이도 신호는 구역과 예제 태그이며 이 범위에서는 필수(★2 출발) · STEP 1(★2) · STEP 2(★3) · 실력 UP(★4) · 수능 기출(+0~1)이 쓰였다. 「필수·발전 예제」 안의 확인체크는 통번호 개념 확인이 아니라 직전 필수 예제의 유제이므로 ★1 이 아니라 ★2 를 출발점으로 잡았다.

단원 자체가 `위치 = ∫v` · `움직인 거리 = ∫|v|` · `평면 거리 = ∫√(x′²+y′²)` · `곡선의 길이 = ∫√(1+y′²)` 네 공식의 적용이라 절차형 비중이 높고, 근호 안이 완전제곱으로 정리되도록 설계된 문항이 반복된다. 변별은 (가) 결과값을 주고 상한·시각을 역추적하는 문항, (나) 조건을 먼저 동치 변환해야 완전제곱이 드러나는 문항, (다) 다른 단원(근과 계수의 관계)과 결합한 문항에서 나온다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC2-279-e12
  page: 279
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    원점에서 출발해 수직선 위를 움직이는 점 P 의 속도가 $v(t)=\sin \pi t$ 일 때
    ⑴ $t=2$ 에서의 위치 ⑵ $t=1$ 에서 $t=3$ 까지 움직인 거리.
  category: "속도의 정적분 → 위치 · 속력의 정적분 → 움직인 거리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선 위의 점의 위치와 움직인 거리(∫v 와 ∫|v| 의 구별)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 $\int_0^2 v\,dt$, ⑵ 는 $\int_1^3 |v|\,dt$ 로 두 공식을 나란히 쓰게 하는 대표 예제.
    절댓값을 벗길 때 $\sin \pi t$ 가 $1<t<2$ 에서 음, $2<t<3$ 에서 양이라는 부호 구간 분할이 유일한 함정(T-부호).
    필수 예제 출발점 ★2 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "위치는 ∫₀²v dt → 거리는 |v| 의 부호 구간 분할 후 ∫₁³|v| dt"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $0$ ⑵ $\dfrac{4}{\pi}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/279-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주기 계수(sin πt → sin 2πt · sin(πt/2))와 구간 끝점을 바꿀 수 있다. 제약: 위치는 반주기 정수배에서 0 이 되도록, 거리는 구간이 반주기의 정수배여야 답이 유리수×(1/계수) 로 떨어진다. 구간 끝이 영점과 어긋나면 계산만 지저분해지고 골조는 그대로다."
    creative: "(1) 속도를 cos 로 바꾸면 출발 부호가 양이 되어 위치가 0 이 아닌 값(★2 유지) (2) 「가장 멀리 떨어진 순간의 위치」를 묻기 — v=0 의 시각 판정이 추가되어 ★3 (3) 같은 v 로 「원점을 다시 지나는 횟수」를 물으면 I-EQV 가 생겨 통찰형 ★2(572 와 같은 골조)."
```

```yaml
- id: GN-CALC2-279-571
  page: 279
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    원점에서 출발해 수직선 위를 움직이는 점 P 의 속도가 $v(t)=(1-t)e^t$ 일 때
    ⑴ $t=3$ 에서의 위치 ⑵ $t=2$ 에서 $t=5$ 까지 움직인 거리.
  category: "부분적분으로 속도 적분 → 위치 · 부호 판정 후 속력 적분 → 거리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선 위의 점의 위치와 움직인 거리(부분적분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\int (1-t)e^t dt=(2-t)e^t$ 를 부분적분으로 한 번 만들어 두면 ⑴ ⑵ 에 모두 재사용된다.
    ⑵ 는 $t>1$ 에서 $v<0$ 이므로 절댓값을 벗길 때 부호만 뒤집으면 되고 구간 분할은 없다(T-부호 1개).
    e12 와 같은 골조에 부분적분만 얹은 유제 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "부분적분으로 원시함수 (2−t)eᵗ → 위치는 0~3 대입 · 거리는 t>1 에서 v<0 이므로 부호 반전 후 2~5 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-e^3-2$ ⑵ $3e^5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/279-571.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(1−t) 의 영점 위치를 (a−t) 로 옮기고 거리 구간을 그 영점 한쪽에 두면 부호 분할 없이 같은 골조가 유지된다. 제약: 거리 구간이 영점을 가로지르면 두 조각 합이 되어 Mₛ 가 오르고 답이 지저분해진다."
    creative: "(1) $v=(t-1)e^{-t}$ 처럼 지수 부호를 바꿔도 부분적분 골조 동일(★2) (2) 거리 구간을 영점 t=1 을 가로지르게 잡으면 부호 구간 2개 → ★3 (3) 「위치의 최댓값」을 묻기 — v=0 판정이 더해져 ★3."
```

```yaml
- id: GN-CALC2-279-572
  page: 279
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    원점에서 출발해 수직선 위를 움직이는 점 P 의 속도가 $v(t)=\cos \pi t$ 일 때
    $0<t\le 3$ 에서 P 가 원점을 지나는 횟수.
  category: "속도 적분으로 위치함수 복원 → 위치함수의 영점 개수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「원점을 지나는 횟수」를 위치함수 x(t)=∫₀ᵗ v ds 의 영점 개수로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "속도로부터 위치함수 복원 → 원점 통과 횟수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    속도만 주어졌으므로 학생이 먼저 $x(t)=\dfrac{\sin \pi t}{\pi}$ 를 만들고, 「원점을 지난다」를 $x(t)=0$ 으로 옮겨야 한다(I-EQV d1).
    그 뒤는 $\sin \pi t=0$ 의 해 $t=1,2,3$ 을 세는 것뿐이고 $t=3$ 포함 여부가 T-경계.
    확인체크 유제 출발점 ★2 · 통찰 1(d1) · M_total 5 → ★2.
    [분류 이슈] 「원점 통과 → x(t)=0」 환원을 통찰로 볼지 표준 절차로 볼지 경계에 있다.
  tier: star_2
  mechanism_primary: "x(t)=∫₀ᵗcos πs ds = sin πt/π → x(t)=0 의 0<t≤3 해 개수"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/279-572.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주기 계수와 구간 상한을 바꿀 수 있다. 제약: 상한이 영점과 정확히 일치하면 경계 포함 여부가 답을 1 바꾸므로 의도한 경우에만 그렇게 두고, 아니면 영점 사이에 둔다."
    creative: "(1) $v=\\sin \\pi t$ 로 바꾸면 위치가 1−cos 꼴이라 영점이 겹쳐 개수가 달라짐(★2) (2) 「출발점으로 되돌아오는 마지막 시각」을 묻기(★2) (3) 「원점을 지나는 횟수가 5 가 되는 상한 a 의 범위」로 뒤집으면 I-BW 가 추가되어 ★3."
```

```yaml
- id: GN-CALC2-280-e13
  page: 280
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    좌표평면 위를 움직이는 점 P 의 위치가 ⑴ $x=\dfrac{5}{3}t^3-t+2,\ y=\sqrt{5}t^2+4$
    ⑵ $x=e^t\cos 2t,\ y=e^t\sin 2t$ 일 때 $t=0$ 에서 $t=2$ 까지 움직인 거리.
  category: "성분별 미분 → 속력 √(x′²+y′²) 완전제곱 정리 → 정적분"
  M: {s: 2, k: 3, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면 위의 점이 움직인 거리(속력의 정적분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 소문항 모두 근호 안이 완전제곱으로 떨어지게 설계됐다 — ⑴ 은 $(5t^2-1)^2+20t^2=(5t^2+1)^2$, ⑵ 는 지수미분 뒤 $\sin^2+\cos^2=1$ 로 $\sqrt5 e^t$.
    학생이 착안할 것은 없고 곱의 미분·제곱 전개 정리라는 대수 처리량만 크다(Mₖ 3).
    필수 예제 ★2 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "x′·y′ 계산 → x′²+y′² 를 완전제곱으로 정리 → √ 벗기고 0~2 적분"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{46}{3}$ ⑵ $\sqrt{5}(e^2-1)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/280-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 계수쌍은 (x′)²+(y′)² 가 완전제곱이 되도록 묶여 있다 — x′=at²−b, y′=2√(ab)t 꼴을 유지하면 어떤 양수 a,b 로도 바꿀 수 있다. ⑵ 는 $e^{kt}$ 의 k 와 각속도 m 을 바꿔도 속력이 $e^{kt}\\sqrt{k^2+m^2}$ 라 항상 깔끔하다."
    creative: "(1) ⑵ 의 나선을 $x=t\\cos t,\\ y=t\\sin t$ 로 바꾸면 속력 √(1+t²) 가 되어 적분 난도가 올라 ★3 (2) 구간 상한을 미지수로 두면 574 골조(★2) (3) 「t=0 과 t=2 의 두 점 사이 거리와 움직인 거리의 차」를 묻기 — 변위와 경로길이의 구별이 추가되어 ★3."
```

```yaml
- id: GN-CALC2-280-573
  page: 280
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    좌표평면 위를 움직이는 점 P 의 위치가 $x=\cos(t^2+4t),\ y=\sin(t^2+4t)$ 일 때
    $t=0$ 에서 $t=4$ 까지 움직인 거리.
  category: "합성함수 미분 → 속력 = |각속도| → 정적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면 위의 점이 움직인 거리(삼각함수 매개변수·단위원 운동)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\theta=t^2+4t$ 로 두면 $x'^2+y'^2=(\theta')^2(\sin^2+\cos^2)=(2t+4)^2$ 이므로 속력이 $|2t+4|$.
    $t\ge 0$ 에서 $2t+4>0$ 이라 절댓값을 그대로 벗기는 T-부호 확인 한 번뿐이고, 단위원 위 운동임을 알아채지 않고 직접 미분해도 같은 식이 나온다 → 통찰로 인정하지 않음.
    확인체크 유제 ★2 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "θ=t²+4t 합성미분 → 속력 |θ′|=2t+4 → ∫₀⁴(2t+4)dt"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$32$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/280-573.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 θ(t) 를 임의의 다항식으로 바꿔도 속력이 |θ′| 이라 골조가 유지된다. 제약: 주어진 구간에서 θ′ 의 부호가 일정해야 절댓값 분할이 생기지 않는다 — 예컨대 θ=t²−4t 로 바꾸면 t=2 에서 부호가 바뀌어 두 조각이 된다."
    creative: "(1) 반지름을 r 로 두면 속력 r|θ′| 로 계수만 붙음(★2) (2) θ′ 의 부호가 바뀌도록 설계해 구간 분할을 강제하면 ★3 (3) 「P 가 처음 위치로 돌아오는 시각까지의 거리」로 바꾸면 θ 의 2π 주기 판정이 더해져 ★3."
```

```yaml
- id: GN-CALC2-280-574
  page: 280
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    좌표평면 위를 움직이는 점 P 의 위치가 $x=2t^2+1,\ y=\dfrac{1}{3}t^3-4t$ 일 때
    $t=0$ 에서 $t=a$ 까지 움직인 거리가 $21$ 이 되게 하는 양수 $a$.
  category: "속력 완전제곱 정리 → a 의 식으로 적분 → 방정식 풀이"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "움직인 거리가 주어질 때 시각 a 구하기(역조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $16t^2+(t^2-4)^2=(t^2+4)^2$ 로 완전제곱이 되어 속력이 $t^2+4$, 적분하면 $\dfrac{a^3}{3}+4a=21$.
    결과값에서 $a$ 를 역추적하지만 적분값을 $a$ 의 식으로 두고 방정식을 푸는 표준 미정계수 절차라 I-BW 로 인정하지 않았다(양수 조건 T-범위 1개).
    확인체크 유제 ★2 출발 · M_total 7 은 계산 마찰 쪽이고 통찰 0 → v3.8 기준 ★ 상향 근거 없음 → ★2.
    [분류 이슈] 역조건 문항을 I-BW 로 볼지의 경계.
  tier: star_2
  mechanism_primary: "속력 √(16t²+(t²−4)²)=t²+4 → ∫₀ᵃ(t²+4)dt=a³/3+4a=21 → a=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/280-574.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x′=2ct, y′=t²−c² 꼴을 유지하면 속력이 t²+c² 로 항상 완전제곱이다. 거리값은 a³/3+c²a 에 정수 a 를 넣어 역산해 정하면 정수해가 보장된다. 제약: 거리값을 아무 수로 두면 삼차방정식의 해가 무리수가 되어 STEP 밖 난도가 된다."
    creative: "(1) 「거리가 21 이상이 되는 최소의 a」로 바꾸면 단조성 논증이 추가되어 ★3 (2) 거리 대신 「변위의 크기」를 주면 성분별 적분 후 피타고라스라 골조가 달라짐(★3) (3) 하한을 t=1 로 옮기면 계산만 늘고 ★ 변화 없음."
```

```yaml
- id: GN-CALC2-281-e14
  page: 281
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    다음 곡선의 길이. ⑴ $x=\cos t+t\sin t,\ y=\sin t-t\cos t\ (0\le t\le\pi)$
    ⑵ $y=\dfrac{1}{2}(e^x+e^{-x})\ (-1\le x\le 1)$.
  category: "매개변수 곡선의 길이 ∫√(x′²+y′²) · 양함수 곡선의 길이 ∫√(1+y′²)"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선의 길이(매개변수 표시 · y=f(x) 표시)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 곱의 미분에서 항이 상쇄돼 $x'=t\cos t,\ y'=t\sin t$ 가 되어 속력이 $t$, ⑵ 는 $1+y'^2=\left(\dfrac{e^x+e^{-x}}{2}\right)^2$ 로 완전제곱.
    두 공식 형태를 한 문항에서 나란히 보여 주는 대표 예제이고 착안점은 없다.
    통찰 0 · M_total 5 로 −1 후보지만 두 공식의 기준 예제라 필수 ★2 유지.
  tier: star_2
  mechanism_primary: "⑴ 곱의 미분 상쇄 → 속력 t → ∫₀^π t dt · ⑵ 1+y′² 완전제곱 → ∫₋₁¹ 대칭 적분"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{\pi^2}{2}$ ⑵ $e-\dfrac{1}{e}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/281-e14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 상한을 π 에서 임의의 c 로 바꾸면 답이 c²/2 로 그대로 따라온다. ⑵ 는 구간을 [−a,a] 로 두면 답이 $e^a-e^{-a}$. 제약: ⑵ 의 계수 1/2 와 지수 밑을 건드리면 완전제곱이 깨진다."
    creative: "(1) ⑴ 의 곡선(원의 신개선)에서 「t=π 일 때 점의 좌표와 곡선의 길이를 비교」하게 하면 ★3 (2) ⑵ 를 $y=\\dfrac{1}{2}(e^{2x}+e^{-2x})$ 로 바꾸면 완전제곱이 깨져 부적절 — 대신 $y=\\dfrac{a}{2}(e^{x/a}+e^{-x/a})$ 로 스케일링(★2) (3) 길이값을 주고 구간 상한을 묻는 역조건(576 골조 ★2)."
```

```yaml
- id: GN-CALC2-281-575
  page: 281
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    다음 곡선의 길이. ⑴ $x=e^t\cos t,\ y=e^t\sin t\ \left(0\le t\le\dfrac{\pi}{2}\right)$
    ⑵ $y=\dfrac{1}{3}x^3+\dfrac{1}{4x}\ (1\le x\le 3)$.
  category: "지수나선의 속력 √2eᵗ · 1+y′² 완전제곱 후 적분"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선의 길이(매개변수 · 완전제곱형 유리함수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 e13 ⑵ 와 같은 지수나선이라 속력이 $\sqrt2 e^t$.
    ⑵ 는 $y'=x^2-\dfrac{1}{4x^2}$ 이라 $1+y'^2=\left(x^2+\dfrac{1}{4x^2}\right)^2$ — 교차항이 $-\dfrac12$ 이 되도록 계수 1/4 이 맞춰진 전형적 설계.
    e14 의 유제이고 착안점 없음 · 통찰 0 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "⑴ x′²+y′²=2e^{2t} → √2eᵗ 적분 · ⑵ 1+y′²=(x²+1/(4x²))² → 항별 적분"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\sqrt{2}\left(e^{\frac{\pi}{2}}-1\right)$ ⑵ $\dfrac{53}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/281-575.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑵ 의 완전제곱 조건은 $y=\\dfrac{x^{n+1}}{n+1}+\\dfrac{1}{4(n-1)x^{n-1}}$ 계열에서 유지된다 — 두 항의 계수 곱이 1/4 이어야 교차항이 −1/2 이 되어 1 을 흡수한다. 구간 [1,3] 은 자유롭게 바꿔도 되고 답만 달라진다."
    creative: "(1) ⑴ 의 상한을 π 나 2π 로 늘려도 골조 동일(★2) (2) ⑵ 에서 계수 1/4 을 미지수 k 로 두고 「곡선의 길이가 다항식으로 표현되는 k」를 묻기 — 완전제곱 조건을 역으로 찾게 되어 I-BW 추가 ★4 (3) 두 소문항 중 하나를 길이 역조건으로 바꾸면 ★2 유지."
```

```yaml
- id: GN-CALC2-281-576
  page: 281
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $0\le x\le a$ 에서 곡선 $y=\dfrac{1}{3}(x^2+2)^{\frac{3}{2}}$ 의 길이가 $12$ 일 때 양수 $a$.
  category: "1+y′² 완전제곱 → a 의 식으로 적분 → 방정식 풀이"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선의 길이가 주어질 때 구간 상한 a 구하기(역조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $y'=x\sqrt{x^2+2}$ 이므로 $1+y'^2=x^4+2x^2+1=(x^2+1)^2$ — 밑의 상수 2 가 완전제곱을 만들려고 놓인 수다.
    적분하면 $\dfrac{a^3}{3}+a=12$ 이고 양수 조건으로 $a=3$ 만 남는다(T-범위).
    574 와 같은 역조건 골조 · 통찰 0 · 확인체크 유제 ★2 → ★2.
  tier: star_2
  mechanism_primary: "y′=x√(x²+2) → 1+y′²=(x²+1)² → ∫₀ᵃ(x²+1)dx=a³/3+a=12 → a=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/281-576.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$y=\\dfrac13(x^2+2)^{3/2}$ 의 상수 2 는 1+y′² 가 (x²+1)² 이 되게 하는 값이라 고정해야 한다. 바꿀 수 있는 것은 길이값으로, a³/3+a 에 정수 a 를 넣어 정한다(a=2 → 14/3 처럼 분수가 되면 피한다)."
    creative: "(1) 하한을 0 이 아닌 1 로 옮기면 상수항만 달라짐(★2) (2) 「길이가 12 이하가 되는 a 의 최댓값」으로 바꾸면 단조 증가 논증 추가 ★3 (3) 곡선을 매개변수로 다시 제시하면 575 ⑴ 과 같은 계열(★2)."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC2-282-577
  page: 282
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    수직선 위를 움직이는 점 P 의 속도가 $v(t)=\dfrac{2t}{1+t^2}$ 일 때
    $t=1$ 에서 $t=3$ 까지 움직인 거리.
  category: "속도 부호 판정 → 치환적분(f′/f 꼴) → 로그 정리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선 위 운동의 움직인 거리(유리함수 치환적분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $1\le t\le 3$ 에서 $v>0$ 이므로 절댓값이 벗겨지고, 분자가 분모의 도함수라 $\int \dfrac{2t}{1+t^2}dt=\ln(1+t^2)$ 한 줄.
    부호 확인(T-부호)과 치환적합 인지 두 단계뿐이다.
    M_total 5 로 −1 후보지만 두 단계가 모두 필요해 STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "구간에서 v>0 확인 → ∫₁³ 2t/(1+t²)dt = [ln(1+t²)]₁³ = ln5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\ln 5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/282-577.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모를 a+t² 로, 구간을 [p,q] 로 바꿀 수 있다. 제약: 답이 ln(정수) 로 떨어지게 하려면 (a+q²)/(a+p²) 가 정수여야 한다 — a=1, (p,q)=(1,3) 은 10/2=5."
    creative: "(1) $v=\\dfrac{2t}{1+t^2}-1$ 처럼 부호가 바뀌게 만들면 구간 분할이 생겨 ★3 (2) 구간 하한을 0 으로 내려도 골조 동일(★2) (3) 「거리가 ln 5 가 되는 상한」 역조건으로 바꾸면 ★2 유지."
```

```yaml
- id: GN-CALC2-282-578
  page: 282
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    좌표평면 위를 움직이는 점 P 의 위치가 $x=-3t+5,\ y=2t\sqrt{t}+3$ 일 때
    $t=3$ 에서 $t=8$ 까지 움직인 거리.
  category: "성분별 미분 → 속력 3√(1+t) → 무리함수 적분"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면 운동의 움직인 거리(무리함수 적분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $y=2t^{3/2}$ 의 미분이 $3\sqrt t$ 라서 $x'^2+y'^2=9+9t$, 속력이 $3\sqrt{1+t}$ 로 바로 정리된다.
    이후는 $(1+t)^{3/2}$ 원시함수 한 번뿐이고 부호 함정도 없다.
    STEP 1 ★2 · 통찰 0 · M_total 5 → ★2 유지(계산량이 가벼워 −1 후보지만 유리지수 미분이 걸림돌이 되는 층이 있어 유지).
  tier: star_2
  mechanism_primary: "x′=−3, y′=3√t → 속력 3√(1+t) → ∫₃⁸3√(1+t)dt = 2[(1+t)^{3/2}]₃⁸"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$38$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/282-578.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x′ 의 상수 −3 과 y 의 계수 2 는 9+9t 로 묶이도록 짝지어져 있다 — x=−ct+d, y=2√c·t^{3/2} 꼴을 유지하면 속력이 c√(1+t). 구간 끝은 1+t 가 완전제곱수(4, 9)가 되도록 3 과 8 로 잡혀 있다."
    creative: "(1) y 를 $t^{5/2}$ 로 올리면 근호 안이 완전제곱이 되지 않아 부적절 — 대신 x 를 이차식으로 올리면 574 계열(★2) (2) 상한을 미지수로 두는 역조건(★2) (3) 「t=3, t=8 두 점 사이의 직선거리와 움직인 거리의 차」를 물으면 변위·경로 구별이 더해져 ★3."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC2-282-579
  page: 282
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $0\le x\le\dfrac{\pi}{6}$ 에서 곡선 $y=\ln(\cos x)$ 의 길이.
  category: "1+tan²=sec² 로 근호 제거 → sec x 의 적분 → 로그값 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "∫sec x dx 를 그대로 두지 않고 1/cos x = cos x/(1−sin²x) 로 옮겨 sin x 치환·부분분수(또는 sec+tan 켤레곱)로 처리"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곡선의 길이(로그·삼각함수 · sec 의 적분)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $y'=-\tan x$ 이므로 $1+y'^2=\sec^2 x$ 까지는 공식이지만, 그 뒤 $\int \sec x\,dx$ 를 만들어 내는 데 표현 전환 한 번이 필요하다(I-RT d2).
    구간에서 $\cos x>0$ 이라 $\sqrt{\sec^2 x}=\sec x$ 로 벗기는 T-범위 판정이 하나 붙는다.
    STEP 2 출발 ★3 · 통찰 1(d2) · M_total 6 → ★3 유지.
    [분류 이슈] sec 적분을 표현 전환(I-RT)으로 볼지 암기 공식으로 볼지 갈린다.
  tier: star_3
  mechanism_primary: "y′=−tan x → √(1+tan²x)=sec x → ∫₀^{π/6}sec x dx = [ln|sec x+tan x|]"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{2}\ln 3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/282-579.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한을 π/4 로 바꾸면 답이 ln(1+√2), π/3 이면 ln(2+√3) 으로 여전히 깔끔하다. 제약: 상한이 π/2 에 닿으면 발산하므로 반드시 π/2 미만이어야 하고, 하한 0 을 옮기면 답이 두 로그의 차가 된다."
    creative: "(1) $y=\\ln(\\sin x)$ 로 바꾸면 cosec 적분이 되어 같은 ★3 (2) 구간을 미지수로 두고 길이를 주는 역조건으로 바꾸면 로그방정식이 추가되어 ★4 (3) $y=-\\ln(\\cos x)$ 처럼 부호만 바꾸면 길이는 불변 — 「부호를 바꿔도 길이가 같은 이유」를 묻는 서술형으로 바꾸면 I-SYM 이 생겨 ★4."
```

```yaml
- id: GN-CALC2-282-580
  page: 282
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    모든 실수 $x$ 에서 $f(x)\ge 1$ 이고 $\{2f(x)+f'(x)\}\{2f(x)-f'(x)\}=4f(x)$ 인 미분가능한 $f$ 에 대하여
    곡선 $y=f(x)\ (0\le x\le 5)$ 의 길이가 $10$ 일 때 $\displaystyle\int_0^5 f(x)\,dx$.
  category: "곱 조건 → f′²=4f²−4f → 1+f′² 완전제곱 → 길이 조건에서 정적분 역산"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "합·차의 곱을 f′²=4f²−4f 로 옮겨 1+f′²=(2f−1)² 이라는 완전제곱을 드러냄"
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구하는 것이 길이가 아니라 ∫f 이므로 길이식 ∫(2f−1)dx=2∫f−5=10 을 거꾸로 풀어 ∫f 를 얻음"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "도함수 조건 + 곡선의 길이로 정적분 값 구하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    곱 조건을 전개하면 $4f^2-f'^2=4f$, 즉 $1+f'^2=4f^2-4f+1=(2f-1)^2$ 이고 $f\ge 1$ 이라 $\sqrt{(2f-1)^2}=2f-1$ 로 절댓값이 벗겨진다(조건 $f\ge1$ 이 T-부호를 막는 장치).
    $f$ 가 구체적으로 정해지지 않은 채 길이 적분만으로 $\int f$ 를 얻는 역추적 구조라 Mₐ 3.
    STEP 2 ★3 출발 + 통찰 2개(EQV d2 · BW d2) → +1 → ★4. 저노출 유형 I-BW 포함으로 ★4 게이트 충족.
  tier: star_4
  mechanism_primary: "곱 전개 → 1+f′²=(2f−1)² → f≥1 로 √ 벗김 → ∫₀⁵(2f−1)dx=10 → ∫f=15/2"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{15}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/282-580.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 길이 5 와 곡선 길이 10 은 2∫f−5=10 이 유리수가 되게 맞춘 쌍이다. 곱 조건의 계수 2 를 k 로 올리면 1+f′²=(kf−1)² 이 되려면 우변 상수도 2kf 로 맞춰야 한다 — 계수를 임의로 바꾸면 완전제곱이 깨진다. f≥1 은 2f−1>0 을 보장하는 최소 조건이라 유지해야 한다."
    creative: "(1) f≥1 조건을 빼고 「f(x)>1/2」만 주면 같은 답이지만 경계 논의가 늘어 ★4 유지 (2) 조건을 f′²=4f²−4f 로 직접 주면 I-EQV 가 사라져 ★3 (3) 길이 대신 ∫f 를 주고 곡선의 길이를 묻는 정방향으로 뒤집으면 I-BW 가 빠져 ★3 (4) f≥1 을 f≤0 으로 바꾸면 절댓값이 반대로 벗겨져 부호 판정이 핵심이 되고 I-VF 성격이 생긴다(★4~5)."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC2-282-581
  page: 282
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["수능 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    곡선 $y=x^2$ 과 직선 $y=t^2x-\dfrac{\ln t}{8}$ 의 두 교점의 중점이 시각 $t\ (t>0)$ 에서의 점 P 의 위치일 때
    $t=1$ 에서 $t=e$ 까지 P 가 움직인 거리. 5지선다.
  category: "근과 계수의 관계로 중점 좌표 매개변수화 → 속력 완전제곱 → 정적분"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "교점을 직접 구하지 않고 이차방정식의 근과 계수의 관계로 중점의 x, y 를 t 의 식으로 옮김(대칭식 α²+β²=(α+β)²−2αβ 활용)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "근과 계수의 관계로 매개변수화한 점의 움직인 거리"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $x^2-t^2x+\dfrac{\ln t}{8}=0$ 의 두 근 $\alpha,\beta$ 에 대해 중점은 $\left(\dfrac{t^2}{2},\ \dfrac{\alpha^2+\beta^2}{2}\right)$ 이고, 대칭식으로 $y=\dfrac{t^4}{2}-\dfrac{\ln t}{8}$ 까지 옮겨야 비로소 미분이 가능하다(I-XU d2 — 이차방정식 도구 없이는 풀이가 끊김).
    그 뒤 $x'^2+y'^2=\left(2t^3+\dfrac{1}{8t}\right)^2$ 로 완전제곱이 되도록 계수 1/8 이 설계돼 있다.
    실력 UP ★4 출발 · 수능 기출 · 통찰 1(XU d2) · M_total 8 → ★4. 저노출 유형 I-XU 포함으로 ★4 게이트 충족.
  tier: star_4
  mechanism_primary: "교점 방정식 → 근과 계수로 중점 (t²/2, t⁴/2−ln t/8) → x′=t, y′=2t³−1/(8t) → 속력 2t³+1/(8t) → ∫₁^e"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/282-581.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 기울기 t² 와 y절편 −(ln t)/8 의 계수 1/8 은 x′²+y′² 가 완전제곱이 되도록 맞춰진 쌍이다 — 기울기를 t^m 으로 바꾸면 절편 계수도 다시 계산해야 하므로 임의 변경 불가. 적분 구간 [1,e] 는 ln 항이 1 과 0 으로 떨어지게 하는 선택이라 유지하는 편이 낫다."
    creative: "(1) 중점 대신 「두 교점 사이 거리의 중앙값」 같은 다른 대칭식을 쓰면 골조는 같고 계수만 재설계(★4) (2) 두 교점이 존재할 조건(판별식>0)을 함께 묻게 하면 I-VF 가 추가되어 ★5 후보 (3) 포물선을 $y=ax^2$ 으로 일반화하면 Mₐ 가 올라가지만 통찰은 그대로(★4) (4) 곡선의 길이만 묻고 중점 조건을 직접 좌표로 주면 I-XU 가 사라져 ★3."
```

```yaml
- id: GN-CALC2-282-582
  page: 282
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    $0<t\le 5$ 에서 점 P 의 위치가 $x=\dfrac{t^2}{2}-\ln 3t,\ y=2t$ 일 때
    속력이 최소일 때부터 $t=5$ 까지 P 가 움직인 거리.
  category: "속력 완전제곱 정리 → 최소가 되는 시각 판정 → 그 시각을 하한으로 적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「속력이 최소일 때」를 t+1/t 의 최솟값 시각 t=1 로 옮겨 적분 구간의 하한을 스스로 결정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "평면 운동에서 속력이 최소인 시각 이후 움직인 거리"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $x'=t-\dfrac1t,\ y'=2$ 이므로 속력이 $\sqrt{t^2+2+\dfrac{1}{t^2}}=t+\dfrac1t$ 로 완전제곱 정리된다($t>0$ 이라 절댓값이 그대로 벗겨짐).
    적분 구간이 문제에 주어지지 않고 학생이 산술·기하평균(또는 미분)으로 $t=1$ 을 찾아 하한으로 삼아야 하는 점이 유일한 착안(I-EQV d2).
    실력 UP ★4 출발이나 그 뒤가 $\int_1^5\left(t+\dfrac1t\right)dt$ 한 줄이고 저노출 통찰 유형(SC·VF·SYM·XU·RT·PD·BW)이 없어 −1 → ★3.
    [분류 이슈] 벤더 실력 UP 과 1단 차이 — 기록만 함.
  tier: star_3
  mechanism_primary: "속력 √((t−1/t)²+4)=t+1/t → AM-GM 으로 최소 시각 t=1 → ∫₁⁵(t+1/t)dt"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$12+\ln 5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/282-582.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 의 t²/2 와 −ln 3t, y 의 계수 2 는 (t−1/t)²+4=(t+1/t)² 가 되도록 짝지어진 값이다 — y 의 계수를 바꾸면 완전제곱이 깨지므로 반드시 2 로 둔다. ln 3t 의 3 은 답에 영향이 없는 장식이라 자유롭게 바꿀 수 있고, 상한 5 만 바꿔도 답이 (상한²−1)/2+ln(상한) 으로 따라온다."
    creative: "(1) 「속력이 최소일 때의 위치」를 함께 묻게 하면 ln 계산이 추가되지만 ★3 유지 (2) 구간을 0<t≤5 대신 1/2≤t≤5 로 제한해 최솟값이 경계에서 나게 만들면 경계 검증이 강제되어 I-VF 가 생기고 ★4 (3) y 의 계수를 미지수 k 로 두고 「속력의 최솟값이 4 가 되는 k」를 묻는 역조건이면 I-BW 추가 ★4."
```

## 표본 판정 요약 (15문)

- ★ 분포: ★1 0 · ★2 11 · ★3 2 · ★4 2 · ★5 0
- 통찰형 5 · 절차형 10 · premium 0
- 통찰 유형 분포: I-EQV 3(572 · 580 · 582) · I-BW 1(580) · I-RT 1(579) · I-XU 1(581) — 연 6건
- type_hint 상위 5: 「곡선의 길이(매개변수·y=f(x))」 3(e14 · 575 · 579) · 「평면 위의 점이 움직인 거리」 3(e13 · 573 · 578) · 「직선 위의 점의 위치와 움직인 거리」 3(e12 · 571 · 577) · 「결과값이 주어진 역조건(상한·시각 구하기)」 2(574 · 576) · 「다른 단원 결합·최솟값 시각 결정」 2(581 · 582)
- 그림: 0문(이 범위에 figure 필드 있는 문항 없음)
- 구역별 ★: 필수·발전 예제 9문 전원 ★2 · STEP 1 2문 ★2 · STEP 2 ★3/★4 · 실력 UP ★4/★3

★2 가 11문으로 몰린 것은 이 단원이 네 공식(∫v · ∫|v| · ∫√(x′²+y′²) · ∫√(1+y′²))의 직접 적용이고, 근호 안이 항상 완전제곱으로 떨어지도록 계수가 설계돼 있어 착안점이 생기지 않기 때문이다. 변별은 연습문제 STEP 2 이후에서만 나온다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC2-279-572 | 「원점을 지나는 횟수 → x(t)=0 의 해 개수」 환원을 I-EQV 통찰로 볼지 표준 절차로 볼지 경계. 통찰로 인정해 통찰형으로 기록 | ★1 / ★2 |
| GN-CALC2-280-574 | 결과값(거리 21)에서 상한 a 를 역추적하는 구조를 I-BW 로 볼지. 적분값을 a 의 식으로 두는 표준 미정계수 절차로 보아 절차형으로 기록 | ★2 / ★3 |
| GN-CALC2-281-576 | 574 와 같은 역조건 구조(길이 12 → 상한 a). 574 와 동일 판정으로 통일 | ★2 / ★3 |
| GN-CALC2-282-579 | ∫sec x dx 를 표현 전환(I-RT d2)으로 볼지 암기 적분 공식으로 볼지. 전환으로 인정해 통찰형 ★3 | ★2 / ★3 |
| GN-CALC2-282-582 | 벤더 「실력 UP」(★4 출발)이나 완전제곱 정리 + AM-GM 한 줄로 끝나고 저노출 통찰 유형이 없어 −1 판정. 1단 차이 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고)

- **따로 세워야 할 유형**: ① 「직선 위 운동 — 위치(∫v) vs 움직인 거리(∫|v|)」 ② 「평면 위 운동의 움직인 거리(속력의 정적분)」 ③ 「곡선의 길이 — 매개변수 표시」 ④ 「곡선의 길이 — y=f(x) 표시」. ③ 과 ④ 는 공식이 다르고 학생이 틀리는 지점(근호 안 구성)이 달라 통합하지 말 것.
- **통합해도 될 유형**: 574(움직인 거리 역조건)와 576(곡선의 길이 역조건)은 「적분값이 주어질 때 구간 상한 구하기」 하나로 묶어도 된다 — 앞단 공식만 다르고 뒷단 삼차방정식 풀이는 동일하다. e13 ⑵ 와 575 ⑴ 의 지수나선도 같은 계열이라 예시 2개로 충분하다.
- **base ★ 제안**: ①②③④ 모두 base ★2, 역조건 통합형 base ★2, 「도함수 조건 + 곡선의 길이로 정적분 역산」(580) base ★4, 「근과 계수의 관계로 매개변수화한 운동」(581) base ★4.
- **주의**: 이 단원의 문항은 거의 전부 「근호 안이 완전제곱이 되도록 계수를 설계」한 것이므로, 카탈로그에 유형을 세울 때 그 설계 조건(어떤 계수 쌍이 완전제곱을 만드는가)을 유형 메모에 함께 적어 두어야 숫자 변형이 가능하다. 각 블록의 `variation_notes.numeric` 에 그 조건을 문항별로 남겨 두었다.
