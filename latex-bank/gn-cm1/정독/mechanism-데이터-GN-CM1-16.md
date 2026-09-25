---
name: mechanism-데이터-GN-CM1-16
description: 개념원리 공통수학1 16 이차방정식과 이차함수의 관계(1/1 · 138~144쪽 32문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1 · 전사본 latex-bank/gn-cm1
  section: 16 이차방정식과 이차함수의 관계
  unit_code: GN-CM1-16
  part: "1/1"
  extract_range: "138~144쪽 · 138-278~144-303"
  total_problems: 32
  unit_total: 32
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그·level)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (이 범위 그림 4문 · crops.json)
---

# 개념원리 공통수학1 · 16 이차방정식과 이차함수의 관계 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학1 138~144쪽, 단원 16 「이차방정식과 이차함수의 관계」의 32문항 전수를 다룬다. 구역은 「개념원리 익히기」 4문(138-278~138-281), 「필수·발전 예제」 16문(필수 예제 6개 + 확인체크 10개), 「연습문제 STEP 1」 7문, 「연습문제 STEP 2」 4문, 「연습문제 실력 UP」 1문이다. 개념원리 고등의 난이도 신호는 구역과 예제 태그다 — 「개념원리 익히기」와 tag 「확인체크」는 개념 확인(★1 출발), tag 「필수」는 ★2, 연습문제는 STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 출발이며 「교육청 기출」 태그는 통찰 유무로 +0~1 이다.

단원 자체가 한 가지 사전(辭典)으로 수렴한다 — 「교점의 x좌표 = 연립해서 얻은 이차방정식의 근」, 「위치 관계 = 판별식의 부호」, 「두 교점 사이의 거리 = 두 근의 차」. 그래서 32문항 중 10문항은 이 사전을 그대로 한 번 적용하는 절차형이고, 나머지 22문항의 통찰은 대부분 I-EQV(조건을 판별식·근과 계수 관계로 옮기기)와 I-RT(그림·기하량을 대수량으로 옮기기)에 몰린다. 실제 변별 지점은 셋이다 — ⑴ 유리수 계수에서 무리수 교점의 켤레근(I-SYM · 141-e5 · 141-288 · 143-296) ⑵ 후보를 만든 뒤 둘째 조건으로 기각하는 구조(I-VF · 143-294 · 144-298) ⑶ 그림에서 이차식을 복원하거나(144-299 · 139-e1) 매개변수 항등식으로 옮기는 것(144-301). ★2 가 20문으로 두터운 것은 단원의 절차가 균질하기 때문이며 억지로 분산시키지 않았다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(유형 코드·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다. 공통수학1은 유형 카탈로그가 없으므로 `type_id`·`base_star` 는 null 이고 `type_hint` 에 유형명을 제안했으며 `effective_star` 는 잠정적으로 `star` 와 같다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM1-138-278
  page: 138
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 이차함수의 그래프와 $x$축의 교점의 $x$좌표 — 공통인수형, 인수분해형,
    완전제곱형(중근) 한 개씩.
  category: 'y=0 대입 → 이차방정식의 해 → 교점의 $x$좌표'
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수의 그래프와 x축의 교점의 x좌표"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $y=0$ 을 넣고 인수분해하면 한 줄에 끝난다. ⑶ 만 중근이라 교점이 한 개인 것을 확인하는
    한 단계가 더 있지만 본문이 바로 앞에서 다룬 표준 절차다.
    통찰 없음·M_total 4 → 개념원리 익히기 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: 'y=0 대입 → 이차방정식 인수분해 → 두 근이 그래프와 $x$축의 교점의 $x$좌표'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $-2$, $0$ \quad ⑵ $-4$, $2$ \quad ⑶ $4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/138-278.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 소문항의 계수를 바꿀 수 있음. 제약: 근이 유리수가 되도록 판별식이 완전제곱수여야 하고, 소문항 하나는 중근(D=0)을 유지해야 「교점이 한 개」를 확인하는 의도가 남는다. 최고차항 부호는 +와 − 를 섞어 둔다."
    creative: "(1) 교점의 좌표를 순서쌍으로 묻기(★1 유지) (2) 교점의 x좌표의 합·곱을 묻어 근과 계수 관계로 연결(★2) (3) 그래프 개형과 식을 짝짓는 객관식으로 바꾸면 I-RT 가 들어가 ★2."
```

```yaml
- id: GN-CM1-138-279
  page: 138
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 이차함수의 그래프와 $x$축의 교점의 개수 — 판별식이 양수·음수·0 인 경우와
    최고차항이 음수인 경우가 섞여 있다.
  category: "판별식의 부호 판정 → 교점의 개수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수의 그래프와 x축의 교점의 개수(판별식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $D=b^2-4ac$ 를 계산해 부호만 보면 된다. ⑶ 은 최고차항이 음수라 부호 실수가 나기 쉬운
    자리(T-부호)이지만 개수 자체는 볼록 방향과 무관하다.
    통찰 없음·M_total 5 → −1 후보이나 개념원리 익히기 출발점 ★1 이 하한이라 ★1 유지.
  tier: star_1
  mechanism_primary: '각 식의 $D=b^2-4ac$ 계산 → 부호에 따라 교점 2개·1개·0개'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $2$ \quad ⑵ $0$ \quad ⑶ $1$ \quad ⑷ $2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/138-279.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 소문항의 계수를 자유롭게. 제약: 네 소문항이 D>0, D<0, D=0 을 모두 포함하고 최고차항이 음수인 것을 하나는 남길 것. D 가 0 에 가까운 값(±1, ±2)이면 계산 실수가 답을 가른다."
    creative: "(1) 교점의 개수가 2개인 것을 모두 고르는 객관식(★1 유지) (2) 상수항을 k 로 두고 교점 개수별 k 범위를 묻기(140-e3 골조 · ★2) (3) 두 식의 교점 개수를 비교하게 하면 조건 결합으로 ★2~3."
```

```yaml
- id: GN-CM1-138-280
  page: 138
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 이차함수의 그래프와 직선의 교점의 $x$좌표 — 유리수 근, 무리수 근, 중근이
    한 개씩 나온다.
  category: '두 식을 연립 → 이차방정식 정리 → 근이 교점의 $x$좌표'
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수의 그래프와 직선의 교점의 x좌표"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 식을 연립해 한 변으로 모으면 이차방정식이 되고 그 근이 교점의 $x$좌표라는 사전을
    그대로 쓴다. ⑵ 는 근의 공식까지 가야 해 계산 부담만 한 단 높다(Mₖ 2).
    통찰 없음·M_total 5 → 개념원리 익히기 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: '포물선 식 = 직선 식 → 이차방정식으로 정리 → 인수분해 또는 근의 공식'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{1}{2}$, $4$ \quad ⑵ $2\pm\sqrt{11}$ \quad ⑶ $3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/138-280.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선과 직선의 계수를 바꿀 수 있음. 제약: 세 소문항이 서로 다른 근의 꼴(유리수 두 개·무리수 켤레쌍·중근)을 유지해야 하고, 무리수 소문항은 판별식이 완전제곱수가 아니어야 한다."
    creative: "(1) 교점의 좌표까지 묻기(y 값 계산 한 단계 추가 · ★1 유지) (2) 중근 소문항을 「접한다」로 표현해 위치 관계와 잇기(★2) (3) 직선을 y=mx+k 로 두고 교점의 x좌표가 주어진 값이 되도록 m 을 찾게 하면 역방향이 되어 ★2~3."
```

```yaml
- id: GN-CM1-138-281
  page: 138
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 이차함수의 그래프와 직선의 위치 관계를 말하기 — 만나지 않는다·접한다·서로 다른
    두 점에서 만난다 중 하나로 답한다.
  category: "연립한 이차방정식의 판별식 부호 → 위치 관계 서술"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수의 그래프와 직선의 위치 관계(판별식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    연립 → 이차방정식 → 판별식 부호까지 앞 문항과 같은 사슬이고, 마지막에 부호를 말로
    옮기는 것만 다르다. 네 소문항이라 계산량은 있지만(Mₖ 2) 단계는 반복이다.
    통찰 없음·M_total 6 → 개념원리 익히기 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: '포물선 식 − 직선 식 = 0 정리 → $D$ 의 부호 → 두 점·접함·만나지 않음'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 만나지 않는다. \quad ⑵ 한 점에서 만난다.(접한다.) \quad ⑶ 만나지 않는다. \quad ⑷ 서로 다른 두 점에서 만난다.'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/138-281.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 쌍의 계수를 바꿀 수 있음. 제약: 네 소문항에 D>0·D=0·D<0 이 모두 들어가고 접하는 소문항은 판별식이 정확히 0 이 되도록 상수항을 맞출 것. 최고차항 부호가 음수인 쌍을 하나 남기면 부호 함정이 유지된다."
    creative: "(1) 위치 관계를 고르는 객관식·짝짓기(★1 유지) (2) 직선의 상수항을 k 로 두고 각 위치 관계가 되는 k 범위를 묻기(142-e6 골조 · ★2) (3) 「적어도 한 점에서 만난다」로 바꾸면 등호 포함 경계 판단이 들어가 ★2."
```

### 필수·발전 예제

```yaml
- id: GN-CM1-139-e1
  page: 139
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    그래프가 그림과 같은 $y=2x^2+ax+b$ 에서 상수 $a$, $b$ 구하기. 그림은 $x$절편
    $-2$, $4$ 를 표시한 아래로 볼록한 포물선.
  category: '그림의 $x$절편 읽기 → 두 근을 가진 인수분해 꼴로 복원 → 계수 비교'
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프에서 읽은 두 x절편을 이차방정식의 두 근으로 옮겨 식 자체를 복원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프에서 x절편을 읽어 이차함수의 계수 정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그림에서 $-2$, $4$ 를 읽어 $y=2(x+2)(x-4)$ 로 복원하고 전개하면 끝이다(근과 계수
    관계로 합 $-a/2=2$, 곱 $b/2=-8$ 로 가도 같다). 그림 → 식 전환 통찰 1개(RT d1)이고
    계수가 문자라 Mₐ 2 · M_total 5 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '그림의 $x$절편 $-2$, $4$ → $y=2(x+2)(x-4)$ → 전개해 $a$, $b$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a=-4$, $b=-16$'
  answer_source: "본문 풀이"
  figure: crop:fig-139-e1.png
  latex: latex-bank/gn-cm1/items/139-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최고차항 계수와 두 x절편을 바꿀 수 있음(그림 라벨도 같이 바꿔야 함). 제약: 두 절편의 부호 배치가 그림의 볼록 방향·y절편 부호와 어긋나면 안 되고, 최고차항이 정수면 a, b 도 정수로 떨어진다."
    creative: "(1) 꼭짓점 좌표를 표시한 그림으로 바꿔 표준형에서 복원(★2) (2) 그림에 절편 하나와 y절편을 주면 미정계수 연립이 되어 ★2 (3) 최고차항 계수까지 미지수로 두고 절편 두 개 + 한 점을 주면 Mₐ 상승 ★3."
```

```yaml
- id: GN-CM1-139-e2
  page: 139
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $y=x^2-6x+k-3$ 의 그래프가 $x$축과 만나는 두 점 A, B 에 대하여 선분 AB 의 길이가
    $2\sqrt{2}$ 일 때 상수 $k$.
  category: "두 교점 사이의 거리 = 두 근의 차 → 근과 계수 관계"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "선분 AB 의 길이를 두 근의 차 |α−β| 로 옮기고 (α−β)² = (α+β)² − 4αβ 로 계수와 연결"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "x축과의 두 교점 사이의 거리(두 근의 차)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 점이 모두 $x$축 위에 있으므로 거리는 $x$좌표의 차이고, 이를 두 근의 차로 읽는 것이
    이 문항의 전부다. 거리를 제곱해 대칭식으로 옮기면 $k$ 가 한 줄에 나온다.
    조건에 「두 점」이 있어 $D>0$ 확인이 숨은 함정(T-범위). 통찰 1개(EQV d2)·M_total 7 →
    필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '$\seg{AB}=|α−β|$ → $(α−β)^2=(α+β)^2−4αβ$ 에 근과 계수 관계 대입 → $k$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/139-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수와 거리 값을 바꿀 수 있음. 제약: 거리의 제곱이 (α+β)²−4αβ 와 맞아떨어져 k 가 정수로 떨어지게 하고, 얻은 k 에서 D>0 이 유지되어야 두 점 조건이 성립한다."
    creative: "(1) 거리 대신 두 교점의 중점(축)을 주기(★2 이하) (2) 최고차항을 1 이 아닌 값으로 두면 |α−β|=√D/|a| 가 필요해 ★3 (3) 두 교점과 꼭짓점이 만드는 삼각형의 넓이로 확장하면 144-300 골조 ★3."
```

```yaml
- id: GN-CM1-139-282
  page: 139
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $y=x^2+ax-4$ 의 그래프가 $x$축과 두 점 $(-1,0)$, $(b,0)$ 에서 만날 때 $ab$
    (상수 $a$).
  category: "한 교점 대입 → 나머지 근 → 두 상수의 곱"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x축과의 교점의 좌표로 계수 정하기(근과 계수 관계)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $x=-1$ 을 대입해 $a$ 를 얻고 인수분해하면 나머지 근 $b$ 가 바로 나온다(두 근의 곱이
    $-4$ 라는 관계로 가도 한 줄). 대입 한 번·인수분해 한 번의 표준 절차다.
    통찰 없음·M_total 5 → 확인체크 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: '$x=-1$ 대입 → $a$ → 두 근의 곱 $=-4$ 로 $b$ → $ab$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/139-282.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항과 주어진 교점을 바꿀 수 있음. 제약: 상수항이 두 근의 곱이므로 주어진 근으로 나누어떨어져 나머지 근이 정수가 되어야 하고, 두 근이 서로 달라야 「두 점」 조건이 성립한다."
    creative: "(1) 주어진 교점을 (b,0) 쪽으로 옮겨 묻는 값을 a+b 로 바꾸기(★1 유지) (2) 상수항도 미지수로 두고 두 교점을 모두 주면 근과 계수 관계 두 개 연립 ★2 (3) 교점 하나와 y절편을 주면 미정계수 연립 ★2."
```

```yaml
- id: GN-CM1-139-283
  page: 139
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $y=x^2+2x+k$ 의 그래프가 $x$축과 만나는 두 점 사이의 거리가 $4$ 일 때 상수 $k$.
  category: "두 교점 사이의 거리 = 두 근의 차 → 근과 계수 관계"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 점 사이의 거리를 두 근의 차 |α−β| 로 옮기고 (α−β)² = (α+β)² − 4αβ 로 k 와 연결"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "x축과의 두 교점 사이의 거리(두 근의 차)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    139-e2 와 같은 골조로 수만 다르다. 거리를 제곱해 대칭식으로 옮기는 한 단계가 핵심이고
    나머지는 대입이다. 「두 점」 조건이 있어 $D>0$ 이 숨은 제약(T-범위).
    통찰 1개(EQV d2)·M_total 7 → 확인체크 출발점 ★1 에서 대응 필수 예제와 같은 층인 ★2 로.
  tier: star_2
  mechanism_primary: '거리 $=|α−β|$ → $(α−β)^2=(α+β)^2−4αβ=4-4k$ → $k$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/139-283.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수와 거리 값을 바꿀 수 있음. 제약: 거리의 제곱이 (α+β)²−4k 와 맞아 k 가 정수로 떨어지고, D>0 이 유지될 것. 거리를 무리수(2√3 등)로 두면 계산 부담만 커지고 골조는 같다."
    creative: "(1) 거리 대신 두 근의 제곱의 합을 주기(★2 유지) (2) 거리가 최대·최소가 되는 k 를 묻기(범위 사고 추가 ★3) (3) x축이 아니라 직선 y=1 과의 두 교점 거리로 바꾸면 평행이동 해석이 들어가 ★3."
```

```yaml
- id: GN-CM1-140-e3
  page: 140
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ $y=x^2-2x+k$ 의 그래프와 $x$축이 서로 다른 두 점에서 만날 때·한 점에서 만날 때·
    만나지 않을 때의 실수 $k$ 의 값 또는 범위.
  category: "판별식의 부호를 위치 관계별로 나누어 k 의 범위"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수의 그래프와 x축의 위치 관계(판별식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $D/4=1-k$ 를 구해 부호별로 나누면 세 답이 한꺼번에 나온다. 세 경우가 서로 다른 풀이가
    아니라 한 식의 부호 구간이라 통찰로 세지 않는다(I-MI 아님).
    접함의 등호 처리(T-경계)만 주의점. 통찰 없음·M_total 6 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '$D/4=1-k$ 계산 → $D>0, D=0, D<0$ 각각을 $k$ 의 범위로'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $k<1$ \quad ⑵ $k=1$ \quad ⑶ $k>1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/140-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수를 바꾸면 경계값이 그에 맞춰 이동한다. 제약: 경계값이 정수로 떨어지도록 일차항 계수를 짝수로 두는 것이 읽기 좋고, 최고차항을 음수로 두어도 판별식 조건은 그대로다."
    creative: "(1) 상수항 자리에 k 의 일차식을 넣기(140-284 골조 · ★2) (2) 「x축과 만난다」 한 경우만 묻고 k 의 최댓값을 요구(★2) (3) 두 함수에 각각 다른 위치 관계를 요구해 공통 k 를 찾게 하면 143-294 골조 ★2~3."
```

```yaml
- id: GN-CM1-140-284
  page: 140
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ $y=x^2-2kx+k^2+k+3$ 의 그래프와 $x$축이 서로 다른 두 점에서 만날 때·접할 때·
    만나지 않을 때의 실수 $k$ 의 값 또는 범위.
  category: "계수가 매개변수인 식의 판별식 정리 → 부호별 k 범위"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수의 그래프와 x축의 위치 관계(판별식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    140-e3 와 같은 골조지만 계수가 $k$ 의 식이라 $D/4=k^2-(k^2+k+3)$ 에서 $k^2$ 이
    지워지고 일차식 $-(k+3)$ 만 남는 정리 한 단계가 더 있다.
    통찰 없음이나 매개변수 처리로 M_total 7 → 확인체크 출발점 ★1 에서 ★2 로.
  tier: star_2
  mechanism_primary: '$D/4=k^2-(k^2+k+3)=-(k+3)$ → 부호별로 $k$ 의 값·범위'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $k<-3$ \quad ⑵ $k=-3$ \quad ⑶ $k>-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/140-284.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항의 k 일차식(여기서는 k+3)을 바꿀 수 있음. 제약: 판별식에서 k² 이 상쇄되어 일차식만 남아야 답이 단순한 범위로 떨어진다. k² 이 남게 두면 이차부등식이 되어 난도가 한 단 오른다."
    creative: "(1) 상수항을 k²+k+3 대신 k²−k−3 처럼 바꿔 부등호 방향을 뒤집기(★2 유지) (2) k² 이 남도록 설계해 이차부등식으로 풀게 하면 ★3 (3) 「모든 실수 k 에 대하여 만나지 않는다」로 바꾸면 항등식·범위 결합으로 ★3~4."
```

```yaml
- id: GN-CM1-140-285
  page: 140
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $y=ax^2-8x+a+6$ 의 그래프가 $x$축에 접하도록 하는 실수 $a$ 의 두 값을 $α$, $β$ 라
    할 때 $α^2+β^2$.
  category: "접할 조건 D=0 을 계수 a 의 이차방정식으로 보고 대칭식 계산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "접한다 → D/4=0 이 a 에 대한 이차방정식이 되고, α·β 를 그 방정식의 두 근으로 읽어 대칭식으로 처리"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "x축에 접할 조건이 계수에 대한 이차방정식이 되는 문항"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계수였던 $a$ 가 접할 조건에서 스스로 이차방정식의 근이 되는 자리 바꿈이 핵심이다.
    두 값을 직접 구해 제곱해도 되지만 $α^2+β^2=(α+β)^2-2αβ$ 로 가면 한 줄이다.
    이차함수이므로 $a\ne0$(T-범위). 통찰 1개(EQV d2)·M_total 7 → 확인체크에서 ★2.
  tier: star_2
  mechanism_primary: '$D/4=16-a(a+6)=0$ → $a$ 의 이차방정식 → 근과 계수 관계로 $α^2+β^2=(α+β)^2-2αβ$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$68$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/140-285.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수와 상수항의 a 일차식을 바꿀 수 있음. 제약: a 에 대한 이차방정식이 서로 다른 두 실근을 가져야 α, β 가 존재하고, a=0 이 근이 되면 이차함수 조건과 충돌하므로 상수항 구성을 조정할 것."
    creative: "(1) α+β 나 αβ 만 묻기(★2 이하) (2) α³+β³ 처럼 차수를 올리면 계산만 늘고 골조는 같음(★2) (3) 「접한다」를 「만나지 않는다」로 바꿔 a 의 범위를 묻고 a≠0 을 반영하게 하면 ★3."
```

```yaml
- id: GN-CM1-141-e4
  page: 141
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $y=x^2+2x+3$ 의 그래프와 직선 $y=x+k$ 가 만나는 두 점 A, B 에서 A 의 $x$좌표가
    $-2$ 일 때 점 B 의 좌표 (상수 $k$).
  category: "한 교점의 x좌표로 k 결정 → 근의 합으로 나머지 교점"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "교점의 x좌표를 연립 이차방정식의 근으로 옮겨, 한 근을 대입해 k 를 정하고 근의 합으로 나머지 근을 얻음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프와 직선의 한 교점을 알 때 나머지 교점(근과 계수 관계)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    연립해 얻은 $x^2+x+3-k=0$ 의 한 근이 $-2$ 라는 점에서 $k$ 가 나오고, 두 근의 합이
    $-1$ 이므로 나머지 근은 바로 읽힌다. B 의 $y$좌표는 직선에 넣는 것이 빠르다.
    통찰 1개(EQV d1)·M_total 6 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '연립 → $x^2+x+3-k=0$ 에 $x=-2$ 대입해 $k$ → 근의 합으로 B 의 $x$ → 직선에 대입해 $y$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(1,\,6)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/141-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선·직선의 계수와 주어진 교점의 x좌표를 바꿀 수 있음. 제약: 주어진 x좌표에서 k 가 정수로 나오고 나머지 근도 정수가 되도록 일차항 계수 차를 맞출 것(두 근의 합이 정수)."
    creative: "(1) B 의 x좌표만 묻기(★2 이하) (2) 선분 AB 의 길이를 묻으면 두 근의 차가 들어가 ★3 (3) A 를 무리수 좌표로 주면 켤레근 골조(141-e5)로 옮겨가며 ★2~3."
```

```yaml
- id: GN-CM1-141-e5
  page: 141
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $y=x^2+ax+b$ 의 그래프와 직선 $y=3x-1$ 의 두 교점 중 하나의 $x$좌표가 $1-\sqrt{2}$
    일 때 유리수 $a$, $b$.
  category: "유리수 계수 → 무리수 근의 켤레쌍 → 근과 계수 관계"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "계수가 유리수인 이차방정식의 무리수 근은 켤레쌍이라는 대칭성으로 나머지 근 1+√2 를 얻음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "유리수 계수와 무리수 교점 — 켤레근"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    무리수 근 하나를 그대로 대입해 유리수·무리수 부분을 나눠도 되지만, 켤레근을 떠올리면
    두 근의 합·곱으로 $a$, $b$ 가 한 줄에 나온다. 「유리수」라는 단서가 켤레근의 전제라
    이를 놓치면 풀이가 막힌다(T-표기·전제 누락).
    통찰 1개(SYM d2)·M_total 7 → 필수 예제 출발점 ★2 유지.
    [분류 이슈] 켤레근 착안의 진입 저항은 ★3 급이나 +1 조건(통찰 2개 이상·depth 3) 미충족.
  tier: star_2
  mechanism_primary: '연립 → 유리수 계수 이차방정식 → 켤레근 $1+\sqrt{2}$ → 근의 합·곱으로 $a$, $b$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$a=1$, $b=-2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/141-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 기울기·절편과 무리수 근의 꼴(p±√q)을 바꿀 수 있음. 제약: 계수가 유리수라는 조건이 유지되어야 켤레근이 성립하고, √q 는 유리수가 아니어야 한다(q 가 완전제곱수면 골조가 무너진다)."
    creative: "(1) 교점이 아니라 x절편으로 주기(★2 유지) (2) 한 근을 복소수로 주면 켤레복소수 골조로 확장(★3) (3) 그림에 무리수 좌표를 표시해 그림 읽기를 더하면 143-296 이 되어 통찰 2개 ★3."
```

```yaml
- id: GN-CM1-141-286
  page: 141
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $y=2x^2-3x+1$ 의 그래프와 직선 $y=ax+b$ 의 두 교점의 $x$좌표가 $-2$, $5$ 일 때
    상수 $a$, $b$ 에 대하여 $a+b$.
  category: "두 교점의 x좌표 = 연립 이차방정식의 두 근 → 근과 계수 관계"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 교점의 x좌표를 연립 이차방정식의 두 근으로 옮겨 합·곱을 계수와 대응"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프와 직선의 두 교점의 x좌표로 직선 정하기(근과 계수 관계)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    연립해 $2x^2-(3+a)x+(1-b)=0$ 으로 정리한 뒤 두 근 $-2$, $5$ 의 합과 곱을 계수와
    맞추면 $a$, $b$ 가 나온다. 최고차항이 $2$ 라 합·곱에 나누기가 붙는 것만 주의.
    두 근을 직접 대입해 연립해도 같다(갈래는 있으나 비용 차가 작아 I-SC 로는 세지 않음).
    통찰 1개(EQV d1)·M_total 6 → 확인체크에서 ★2.
  tier: star_2
  mechanism_primary: '연립 → $2x^2-(3+a)x+(1-b)=0$ → 근의 합 $3=(3+a)/2$·곱 $-10=(1-b)/2$ → $a+b$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$24$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/141-286.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선의 계수와 두 교점의 x좌표를 바꿀 수 있음. 제약: 최고차항으로 나눈 합·곱이 유리수로 떨어져야 a, b 가 깔끔하고, 두 교점이 서로 달라야 한다."
    creative: "(1) a, b 대신 직선의 방정식을 묻기(★2 유지) (2) 두 교점 중 하나만 주고 직선의 기울기를 주면 141-e4 골조(★2) (3) 두 교점의 y좌표 합을 묻으면 143-295 의 갈래 선택이 들어가 ★2~3."
```

```yaml
- id: GN-CM1-141-287
  page: 141
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $y=2x^2+5x-3$ 의 그래프와 직선 $y=-x+k$ 가 만나는 두 점 A, B 에서 A 의 $x$좌표가
    $-3$ 일 때 점 B 의 좌표 (상수 $k$).
  category: "한 교점의 x좌표로 k 결정 → 근의 합으로 나머지 교점"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "교점의 x좌표를 연립 이차방정식의 근으로 옮겨, 한 근으로 k 를 정하고 근의 합으로 나머지 근을 얻음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프와 직선의 한 교점을 알 때 나머지 교점(근과 계수 관계)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    141-e4 와 같은 골조에 최고차항이 $2$ 인 경우다. 연립식 $2x^2+6x-3-k=0$ 에 $x=-3$ 을
    넣어 $k$ 를 얻고, 두 근의 합 $-3$ 에서 나머지 근이 나온다.
    통찰 1개(EQV d1)·M_total 6 → 확인체크에서 ★2.
  tier: star_2
  mechanism_primary: '연립 → $2x^2+6x-3-k=0$ 에 $x=-3$ 대입해 $k$ → 근의 합 $-3$ 으로 B 의 $x$ → $y$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(0,\,-3)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/141-287.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선·직선의 계수와 주어진 x좌표를 바꿀 수 있음. 제약: 최고차항이 1 이 아니므로 두 근의 합이 분수가 되지 않도록 일차항 계수를 조정하고, 주어진 근에서 k 가 정수로 나올 것."
    creative: "(1) B 의 y좌표만 묻기(★2 이하) (2) 두 교점이 y축에 대칭이 되도록 k 를 정하게 하면 조건 해석이 추가되어 ★3 (3) A 가 원점인 경우로 만들어 k 를 바로 읽게 하면 ★1~2."
```

```yaml
- id: GN-CM1-141-288
  page: 141
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $y=x^2-ax+b$ 의 그래프와 직선 $y=2x-1$ 의 두 교점 중 하나의 $x$좌표가 $2-\sqrt{3}$
    일 때 유리수 $a$, $b$ 에 대하여 $a+b$.
  category: "유리수 계수 → 무리수 근의 켤레쌍 → 근과 계수 관계"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "유리수 계수 이차방정식의 무리수 근은 켤레쌍이라는 대칭성으로 나머지 근 2+√3 을 얻음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "유리수 계수와 무리수 교점 — 켤레근"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    141-e5 와 같은 골조다. 연립식 $x^2-(a+2)x+b+1=0$ 의 계수가 유리수이므로 나머지 근은
    켤레 $2+\sqrt{3}$ 이고, 합 $4$·곱 $1$ 로 $a$, $b$ 가 결정된다.
    통찰 1개(SYM d2)·M_total 7 → 확인체크에서 ★2.
    [분류 이슈] 141-e5 와 같이 켤레근 착안만으로 ★3 을 줄지 애매(규칙상 ★2 유지).
  tier: star_2
  mechanism_primary: '연립 → 유리수 계수 이차방정식 → 켤레근 $2+\sqrt{3}$ → 합·곱으로 $a$, $b$ → $a+b$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/141-288.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 계수와 무리수 근 p±√q 를 바꿀 수 있음. 제약: q 가 완전제곱수가 아니어야 하고, 합·곱이 유리수로 떨어져 a, b 가 유리수가 되어야 한다."
    creative: "(1) ab 나 a−b 를 묻기(★2 유지) (2) 교점 대신 x절편으로 바꾸면 141-e5 와 겹치므로 둘 중 하나만 은행에 남길 것 (3) 무리수 근 하나를 직접 대입해 유리수·무리수 부분을 비교하게 요구하면 서술형으로 ★3."
```

```yaml
- id: GN-CM1-142-e6
  page: 142
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ $y=2x^2-3x+1$ 의 그래프와 직선 $y=x+k$ 가 서로 다른 두 점에서 만날 때·한 점에서
    만날 때·만나지 않을 때의 실수 $k$ 의 값 또는 범위.
  category: "연립한 이차방정식의 판별식 부호 → k 의 값·범위"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수의 그래프와 직선의 위치 관계(판별식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    연립해 $2x^2-4x+1-k=0$ 으로 모으고 $D/4=4-2(1-k)$ 의 부호를 나누면 세 답이 한꺼번에
    나온다. 부등호 방향이 $k$ 로 옮겨질 때 뒤집히지 않는지만 확인하면 된다(T-경계).
    통찰 없음·M_total 7 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '포물선 $-$ 직선 $=0$ → $D/4$ 를 $k$ 의 식으로 → 부호별 $k$ 의 값·범위'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $k>-1$ \quad ⑵ $k=-1$ \quad ⑶ $k<-1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/142-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선과 직선의 계수를 바꿀 수 있음. 제약: 경계값이 정수로 떨어지도록 상수항을 맞추고, 최고차항이 음수인 경우를 쓰면 D 의 부호와 부등호 방향을 다시 확인해야 한다."
    creative: "(1) 접할 때의 접점 좌표까지 묻기(★2~3) (2) 직선을 기울기가 미지수인 y=mx+1 로 바꾸면 m 의 범위가 되어 ★3 (3) 「만난다」로 묶어 등호 포함 범위를 묻기(142-290 골조 · ★2)."
```

```yaml
- id: GN-CM1-142-289
  page: 142
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ $y=x^2-5x-3$ 의 그래프와 직선 $y=-x+k$ 가 서로 다른 두 점에서 만날 때·접할 때·
    만나지 않을 때의 실수 $k$ 의 값 또는 범위.
  category: "연립한 이차방정식의 판별식 부호 → k 의 값·범위"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수의 그래프와 직선의 위치 관계(판별식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    142-e6 와 같은 골조다. $x^2-4x-3-k=0$ 에서 $D/4=4+3+k$ 의 부호를 나누면 끝이다.
    상수항에 음수가 섞여 부호 정리에서 실수가 나기 쉬운 자리(T-부호).
    통찰 없음이나 계수 정리 부담으로 M_total 7 → 확인체크에서 ★2.
  tier: star_2
  mechanism_primary: '연립 → $x^2-4x-3-k=0$ → $D/4=7+k$ 의 부호별로 $k$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $k>-7$ \quad ⑵ $k=-7$ \quad ⑶ $k<-7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/142-289.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선의 상수항과 직선의 기울기를 바꿀 수 있음. 제약: 경계값 −7 이 정수로 유지되도록 상수항을 조정하고, 세 소문항의 답이 같은 경계값을 공유해야 구조가 보인다."
    creative: "(1) 접할 때의 접점을 묻기(★3) (2) k 대신 직선의 기울기를 미지수로 두면 판별식이 이차부등식이 되어 ★3 (3) 두 교점의 x좌표 곱의 부호를 함께 묻으면 조건이 겹쳐 ★3."
```

```yaml
- id: GN-CM1-142-290
  page: 142
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $y=x^2-2mx+1+m^2$ 의 그래프와 직선 $y=2x-1$ 이 만나도록 하는 실수 $m$ 의 값의 범위.
  category: "만난다 → D ≥ 0 (접하는 경우 포함) → m 의 범위"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「만난다」를 접하는 경우까지 포함하는 D ≥ 0 으로 옮김(등호 포함이 핵심)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프와 직선이 만날 조건(D ≥ 0 · 등호 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「만난다」에 접하는 경우가 포함된다는 해석이 등호를 살리는 분기점이고(T-경계), 그 뒤는
    $D/4=(m+1)^2-(m^2+2)=2m-1$ 로 $m^2$ 이 지워지는 정리뿐이다.
    통찰 1개(EQV d1)·M_total 7 → 확인체크에서 ★2.
  tier: star_2
  mechanism_primary: '연립 → $D/4=(m+1)^2-(m^2+2)=2m-1\ge0$ → $m$ 의 범위'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$m\ge\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/142-290.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선의 m 항과 직선의 계수를 바꿀 수 있음. 제약: 판별식에서 m² 이 상쇄되어 일차부등식이 남아야 답이 단순하고, 경계값이 유리수로 떨어질 것."
    creative: "(1) 「만나지 않는다」로 바꿔 등호를 빼기(★2 유지 · 경계 함정은 그대로) (2) m² 이 남게 설계해 이차부등식으로 만들면 ★3 (3) 「모든 실수 m 에 대하여 만난다」로 바꾸면 항등식 사고가 들어가 ★4."
```

```yaml
- id: GN-CM1-142-291
  page: 142
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $y=x^2+x+4$ 의 그래프에 접하고 직선 $y=-2x+3$ 과 평행한 직선 $y=ax+b$ 에서 실수
    $a$, $b$.
  category: "평행 → 기울기 일치, 접함 → 판별식 0"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「평행」을 기울기 일치로, 「접한다」를 연립 이차방정식의 D=0 으로 옮겨 두 조건을 한 식으로 묶음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "접하고 주어진 직선과 평행한 직선 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평행에서 $a=-2$ 를 먼저 확정하면 남은 미지수가 하나뿐이라 $D=0$ 한 줄로 $b$ 가 나온다.
    두 조건을 동시에 다루려 하면 식이 커지므로 순서가 곧 효율이다.
    통찰 1개(EQV d2)·M_total 7 → 확인체크에서 ★2.
  tier: star_2
  mechanism_primary: '평행 → $a=-2$ → $x^2+3x+4-b=0$ 의 $D=0$ → $b$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a=-2$, $b=\dfrac{7}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/142-291.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선의 계수와 평행한 직선의 기울기를 바꿀 수 있음. 제약: b 가 분수로 나오는 것은 자연스럽지만 D=0 이 유리수 해를 주도록 계수를 맞출 것. 기울기를 포물선의 대칭축과 연동시키면 접점이 정수가 된다."
    creative: "(1) 접점의 좌표까지 묻기(한 단계 추가 ★2~3) (2) 평행 대신 「원점을 지나고 접하는 직선」으로 바꾸면 기울기가 미지수가 되어 두 해가 나오고 ★3 (3) 143-297 처럼 포물선의 계수도 미지수로 두면 ★3."
```

### 연습문제 STEP 1

```yaml
- id: GN-CM1-143-292
  page: 143
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $y=x^2-(a+2)x+b^2-b$ 의 그래프와 $x$축의 두 교점의 $x$좌표가 $1$, $6$ 일 때
    상수 $a$, $b$ 에 대하여 $a+b$ ($b>0$).
  category: "두 교점의 x좌표 = 두 근 → 근과 계수 관계 → 부호 조건으로 b 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x축과의 두 교점의 x좌표로 계수 정하기(근과 계수 관계)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 근의 합 $7=a+2$ 에서 $a$, 곱 $6=b^2-b$ 에서 $b$ 의 이차방정식이 나오고 $b>0$ 으로
    음의 해를 버린다. 근과 계수 관계를 두 번 쓰는 표준 절차이고, 부호 조건은 발문에 명시돼
    있어 자동 필터라 통찰(I-VF)로 세지 않고 함정(T-부호)으로 처리했다.
    통찰 없음·M_total 7 → STEP 1 출발점 ★2 유지.
    [분류 이슈] b>0 필터를 I-VF d1 로 볼 여지가 있으나 이 파일은 명시 조건은 Mₜ 로 통일.
  tier: star_2
  mechanism_primary: '두 근의 합 $=a+2$·곱 $=b^2-b$ → $a=5$, $b^2-b-6=0$ → $b>0$ 으로 $b=3$ → $a+b$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/143-292.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 교점의 x좌표와 상수항의 b 이차식을 바꿀 수 있음. 제약: 두 근의 곱이 b 의 이차방정식으로 인수분해되어 정수 해를 주어야 하고, 두 해의 부호가 서로 달라야 b>0 조건이 실제로 하나를 걸러낸다."
    creative: "(1) 조건을 b<0 으로 뒤집어 다른 해를 고르게 하기(★2 유지) (2) 상수항을 b 의 이차식이 아닌 ab 꼴로 두면 연립이 되어 ★3 (3) 두 교점 사이의 거리만 주고 x좌표를 직접 주지 않으면 139-283 골조와 결합해 ★3."
```

```yaml
- id: GN-CM1-143-293
  page: 143
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $y=x^2+ax+b$ 의 그래프가 점 $(-1,4)$ 를 지나고 $x$축에 접할 때 실수 $a$, $b$ 에
    대하여 $ab$ ($a>0$).
  category: "접함(D=0)과 통과 조건을 결합해 a 의 이차방정식으로"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "접한다 → D=0 에서 b=a²/4 로 미지수를 하나로 줄이고, 통과 조건과 결합해 a 의 이차방정식으로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "한 점을 지나고 x축에 접하는 이차함수의 계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 조건이 각각 $b=a^2/4$ 와 $b=a+3$ 을 주고, 둘을 맞붙이면 $a$ 의 이차방정식이 된다.
    $a>0$ 으로 음의 해를 버리는 것은 명시 조건이라 함정(T-부호)으로 처리.
    통찰 1개(EQV d2)·M_total 8 → STEP 1 출발점 ★2 유지(두 조건 결합이 표준 절차 범위).
  tier: star_2
  mechanism_primary: '$D=a^2-4b=0$ → $b=a^2/4$ · 점 대입 $b=a+3$ → $a^2-4a-12=0$ → $a>0$ 으로 $a=6$ → $ab$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$54$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/143-293.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점의 좌표를 바꿀 수 있음. 제약: 두 조건을 합쳤을 때 a 의 이차방정식이 정수 해를 갖도록 점의 y좌표를 맞추고, 두 해의 부호가 달라야 a>0 이 실제로 작동한다."
    creative: "(1) 접점의 x좌표를 묻기(a/−2 한 단계 추가 ★2) (2) 「x축에 접한다」를 「직선 y=x 에 접한다」로 바꾸면 연립이 한 단계 늘어 ★3 (3) 지나는 점을 두 개 주고 접함을 빼면 단순 미정계수 ★1~2."
```

```yaml
- id: GN-CM1-143-294
  page: 143
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $y=x^2+2kx+k$ 의 그래프는 $x$축과 한 점에서 만나고 $y=2x^2-x+k$ 의 그래프는 $x$축과
    만나지 않을 때 실수 $k$.
  category: "두 위치 관계 조건을 각각 판별식으로 → 후보 생성 후 기각"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "첫 조건 D=0 에서 얻은 후보 k=0, 1 을 둘째 조건 D<0 에 재대입해 하나를 기각(검증이 없으면 틀린 답)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 이차함수의 x축 위치 관계 조건을 동시에 만족하는 상수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    첫 식은 접하므로 $k^2-k=0$ 에서 후보가 둘 생기고, 둘째 식의 $1-8k<0$ 이 그중 하나만
    남긴다. 후보 생성 → 사후 기각 구조라 검증 단계가 풀이의 본질이다(I-VF).
    통찰 1개(VF d2)·M_total 8 → STEP 1 출발점 ★2 유지.
    [분류 이슈] 저노출 유형 I-VF 가 들어가 ★3 후보이나 +1 조건(통찰 2개·depth 3) 미충족.
  tier: star_2
  mechanism_primary: '$D_1/4=k^2-k=0$ → $k=0$ 또는 $1$ → $D_2=1-8k<0$ 으로 걸러 $k=1$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/143-294.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 식의 계수를 바꿀 수 있음. 제약: 첫 조건이 k 의 이차방정식으로 서로 다른 두 후보를 주고, 둘째 부등식이 그중 정확히 하나만 남겨야 기각 구조가 유지된다(둘 다 남으면 답이 두 개, 둘 다 빠지면 해 없음)."
    creative: "(1) 두 조건을 모두 부등식으로 두어 범위의 교집합을 묻기(★2) (2) 조건을 「적어도 하나는 x축과 만난다」로 바꾸면 여사건 갈래가 생겨 I-SC ★3 (3) 셋째 조건을 더해 후보를 더 걸러내면 ★3."
```

```yaml
- id: GN-CM1-143-295
  page: 143
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $y=x^2-x+3$ 의 그래프와 직선 $y=ax+2$ 의 두 교점 $(x_1,y_1)$, $(x_2,y_2)$ 에서
    $x_1+x_2=4$ 일 때 $y_1+y_2$ (상수 $a$).
  category: "근의 합으로 a 결정 → 교점의 y좌표 합을 직선 식으로 계산"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 2
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "y1+y2 를 포물선에 대입해 x1²+x2² 를 만드는 갈래 대신 직선 y=ax+2 에 대입해 a(x1+x2)+4 로 한 줄에 끝내는 갈래 선택"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 교점의 x좌표 합이 주어질 때 y좌표의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    연립식 $x^2-(a+1)x+1=0$ 의 근의 합이 $4$ 라는 데서 $a$ 가 나오고, 두 점은 직선 위에도
    있으므로 $y_1+y_2=a(x_1+x_2)+4$ 가 즉시 계산된다.
    포물선에 대입하는 갈래는 제곱합 대칭식을 거쳐야 해 비용 차가 뚜렷하다(I-SC).
    통찰 1개(SC d1)·M_total 6 → STEP 1 출발점 ★2 유지.
    [분류 이슈] 직선 대입을 「표준 절차」로 보면 절차형 ★2, 갈래 선택으로 보면 I-SC.
  tier: star_2
  mechanism_primary: '연립 → 근의 합 $a+1=4$ → $a=3$ → 두 점이 직선 위 → $y_1+y_2=a(x_1+x_2)+4$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/143-295.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선·직선의 계수와 주어진 x1+x2 를 바꿀 수 있음. 제약: 근의 합에서 a 가 정수로 나오고 D>0 이 유지되어야 두 교점이 실재한다. 직선의 절편을 바꾸면 y 합의 상수항이 그 두 배로 따라 움직인다."
    creative: "(1) y1y2 를 묻으면 곱셈 전개가 필요해 ★3 (2) 두 교점의 중점 좌표를 묻기(★2 유지) (3) x1x2 조건까지 함께 주어 a 를 과잉결정하고 모순 여부를 판정하게 하면 I-VF ★3."
```

```yaml
- id: GN-CM1-143-296
  page: 143
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $y=-x^2+4x-1$ 의 그래프와 직선 $y=ax+b$ 가 그림과 같고 한 교점의 $x$좌표가
    $1+\sqrt{5}$ 일 때 유리수 $a$, $b$ 에 대하여 $ab$. 그림은 두 교점 중 오른쪽 것에
    $1+\sqrt{5}$ 를 표시.
  category: "그림에서 읽은 무리수 교점 → 켤레근 → 근과 계수 관계"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그림에 표시된 교점의 x좌표를 연립 이차방정식의 한 근으로 옮김"
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "a, b 가 유리수이므로 나머지 근은 켤레 1−√5 라는 대칭성으로 합·곱을 계수와 대응"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "그림에서 읽은 무리수 교점과 켤레근으로 직선 정하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    그림은 교점이 두 개이고 그중 하나가 무리수임을 알려 주는 역할이고, 유리수 계수라는
    단서에서 켤레근을 떠올려야 $x^2+(a-4)x+(b+1)=0$ 의 합 $2$·곱 $-4$ 로 넘어간다.
    그림 읽기(RT d1)와 켤레근(SYM d2) 두 통찰·M_total 7 → STEP 1 출발점 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: '연립 → $x^2+(a-4)x+(b+1)=0$ · 켤레근 $1\pm\sqrt{5}$ → 합 $2$·곱 $-4$ → $a$, $b$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-10$'
  answer_source: "답지"
  figure: crop:fig-143-296.png
  latex: latex-bank/gn-cm1/items/143-296.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선의 계수와 표시된 무리수 교점 p±√q 를 바꿀 수 있음(그림 라벨도 함께 수정). 제약: q 가 완전제곱수가 아니어야 켤레근 골조가 살고, 표시된 근이 그림상 오른쪽 교점과 부합해야 한다."
    creative: "(1) 그림 없이 「한 교점의 x좌표」만 주면 141-288 과 겹치므로 그림은 남길 것 (2) a+b 대신 직선의 방정식을 묻기(★3 유지) (3) 두 교점 사이의 거리를 추가로 묻으면 두 근의 차가 들어가 ★4."
```

```yaml
- id: GN-CM1-143-297
  page: 143
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $y=ax^2+1$ 의 그래프에 접하고 직선 $y=4x-5$ 와 평행한 직선이 $y=mx+3$ 일 때
    실수 $a$, $m$ 에 대하여 $a^2+m^2$. 5지선다.
  category: "평행 → 기울기 일치, 접함 → 판별식 0 으로 a 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「평행」을 m=4 로, 「접한다」를 연립 이차방정식의 D=0 으로 옮겨 미지수 a 를 결정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "접하고 주어진 직선과 평행한 직선 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    142-291 의 거울 문항으로, 이번에는 미지수가 직선이 아니라 포물선 쪽 계수 $a$ 다.
    평행에서 $m=4$ 를 확정한 뒤 $ax^2-4x-2=0$ 의 $D=0$ 으로 $a$ 가 나온다.
    이차함수이므로 $a\ne0$ 확인이 숨은 제약(T-범위). 통찰 1개(EQV d1)·M_total 7 →
    STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '평행 → $m=4$ → $ax^2-4x-2=0$ 의 $D/4=4+2a=0$ → $a=-2$ → $a^2+m^2$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/143-297.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선의 상수항, 평행한 직선의 기울기, 접선의 절편을 바꿀 수 있음. 제약: D=0 에서 a 가 유리수로 떨어지고 a≠0 이어야 하며, 선택지가 서로 구분되는 값이 되도록 a²+m² 를 확인할 것."
    creative: "(1) 접점의 좌표를 묻기(★3) (2) 평행 조건을 빼고 「원점을 지나며 접한다」로 바꾸면 미지수 두 개가 얽혀 ★3 (3) 두 직선 모두에 접하게 하면 144-298 골조 ★3."
```

```yaml
- id: GN-CM1-144-298
  page: 144
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $y=x^2+ax+3a-1$ 의 그래프가 두 직선 $y=-x+4$, $y=5x+7$ 에 동시에 접할 때 실수 $a$.
  category: "두 접함 조건을 각각 a 의 이차방정식으로 → 공통 해"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "각 직선과의 접함을 연립 이차방정식의 D=0 으로 옮기면 두 식 모두 a 에 대한 이차방정식이 됨"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 조건이 각각 주는 후보 집합의 공통값만 남기고 나머지를 기각(한쪽만 만족하는 값은 답이 아님)"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "두 직선에 동시에 접할 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    「동시에 접한다」를 두 개의 독립된 $D=0$ 으로 쪼개면 각각 $a$ 의 이차방정식이 되고,
    두 해집합의 공통 원소만 답이 된다. 한쪽만 풀고 멈추면 후보가 둘 남는 구조라 교집합
    확인이 풀이의 마지막 필수 단계다(I-VF). 판별식 두 번으로 계산 부담도 크다(Mₖ 3).
    통찰 2개·M_total 9 → STEP 1 출발점 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: '각 직선과 연립해 $D=0$ 두 개 → $a$ 의 두 이차방정식 → 두 해집합의 공통값'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/144-298.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 직선의 기울기·절편과 상수항의 a 일차식을 바꿀 수 있음. 제약: 두 이차방정식이 정확히 하나의 공통 해를 갖도록 설계해야 하고(공통 해가 둘이면 답이 두 개), 각 판별식이 정수 계수로 정리될 것."
    creative: "(1) 접점의 좌표까지 묻기(★4) (2) 「두 직선 중 적어도 하나에 접한다」로 바꾸면 합집합이 되어 답이 여럿 ★3 (3) 직선 하나를 미지의 기울기로 두면 미지수가 둘이 되어 ★4."
```

### 연습문제 STEP 2

```yaml
- id: GN-CM1-144-299
  page: 144
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    최고차항 계수의 절댓값이 같은 세 이차함수 $y=f(x)$, $y=g(x)$, $y=h(x)$ 의 그래프가
    그림과 같을 때 방정식 $f(x)+g(x)+h(x)=0$ 의 모든 근의 합. 5지선다. 그림에서 세
    그래프의 $x$절편과 볼록 방향을 읽는다.
  category: "그림에서 세 이차식 복원 → 합을 정리 → 근과 계수 관계"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그림의 x절편과 볼록 방향을 읽어 세 이차식을 공통 문자 a 로 인수분해 꼴로 복원"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「최고차항 계수의 절댓값이 같다」를 부호만 다른 ±a 로 옮기면 합에서 a 가 공통인수로 빠져 근의 합이 a 에 무관해짐"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "그림에서 복원한 세 이차함수의 합의 근의 합"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    절댓값만 같다는 조건이라 볼록 방향에서 부호를 정하는 것이 관문이고, 세 식을 더하면
    $a$ 가 공통인수로 묶여 근의 합이 최고차항 값과 무관해진다는 것이 결정적이다.
    그림에서 읽을 정보(절편·볼록 방향)가 많고 세 함수가 문자로 주어져 Mₐ 3.
    통찰 2개(RT d2 · EQV d2)·M_total 9 → STEP 2 출발점 ★3 에서 +1 → ★4(저노출 RT 포함).
  tier: star_4
  mechanism_primary: '그림에서 $f$, $g$, $h$ 를 $\pm a(x-p)(x-q)$ 꼴로 복원 → 합을 정리해 $a$ 를 약분 → 근과 계수 관계로 근의 합'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "④"
  answer_source: "답지"
  figure: crop:fig-144-299.png
  latex: latex-bank/gn-cm1/items/144-299.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 그래프의 x절편 배치와 볼록 방향 조합을 바꿀 수 있음(그림을 함께 다시 그려야 함). 제약: 세 최고차항의 부호 합이 0 이 되면 합이 일차식이 되어 근이 하나뿐이므로, 부호는 2 대 1 로 두어 합이 이차식으로 남게 할 것. 절편은 정수로."
    creative: "(1) 근의 합 대신 근의 곱이나 두 근의 차를 묻기(★4 유지) (2) 세 함수 중 하나를 식으로 주고 둘만 그림으로 주면 난도 하락 ★3 (3) f+g+h 가 x축에 접하도록 배치를 잡고 그 사실을 묻게 하면 판별식이 더해져 ★5 후보(단 통찰 3개·저노출 유형 필요)."
```

```yaml
- id: GN-CM1-144-300
  page: 144
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $y=3x^2+kx-1$ 의 그래프가 $x$축과 만나는 두 점을 P, Q, 꼭짓점을 R 라 할 때
    $\seg{PQ}=\dfrac{4}{3}$ 이면 삼각형 PQR 의 넓이 (상수 $k$).
  category: "밑변 = 두 근의 차, 높이 = 꼭짓점의 y좌표 → 넓이"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "삼각형의 밑변과 높이를 두 근의 차 |α−β|=√D/|a| 와 꼭짓점의 y좌표 −D/(4a) 라는 대수량으로 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "x축과의 두 교점·꼭짓점으로 만든 삼각형의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    기하 대상(삼각형)을 판별식 하나로 환원하는 것이 핵심이다. 밑변 $\seg{PQ}$ 에서 $D$ 가
    정해지고, 그 $D$ 가 곧 꼭짓점의 $y$좌표(높이)를 주므로 $k$ 를 따로 구할 필요도 없다.
    높이는 절댓값으로 잡아야 하고(T-부호) 최고차항이 $1$ 이 아니라 나눗셈이 붙는다.
    통찰 1개(RT d2)·M_total 8 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: '$\seg{PQ}=\sqrt{D}/3=4/3$ → $D=16$ → 높이 $=|-D/12|=4/3$ → 넓이 $=\dfrac{1}{2}\cdot\dfrac{4}{3}\cdot\dfrac{4}{3}$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{8}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/144-300.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최고차항 계수와 PQ 의 길이를 바꿀 수 있음. 제약: D=(a·PQ)² 이 양수여야 두 교점이 존재하고, 넓이가 깔끔하려면 a 와 PQ 를 서로 약분되는 값으로 잡을 것. 상수항 −1 은 D>0 을 보장하는 안전장치다."
    creative: "(1) 넓이를 주고 k 를 묻는 역방향(I-BW · ★3~4) (2) 삼각형이 직각이 되는 조건을 묻기(★4) (3) 꼭짓점 대신 y절편을 세 번째 점으로 삼으면 밑변·높이 해석이 달라져 ★3."
```

```yaml
- id: GN-CM1-144-301
  page: 144
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $y=x^2-2(a+k)x+k^2-2k+b$ 의 그래프가 실수 $k$ 의 값에 관계없이 항상 $x$축에 접할 때
    실수 $a$, $b$ 에 대하여 $ab$.
  category: "항상 접한다 → 판별식이 k 에 대한 항등식 → 계수 비교"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「k 에 관계없이 접한다」를 D/4=0 이 k 에 대한 항등식이라는 조건으로 옮겨 k 의 계수와 상수항을 각각 0 으로"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "매개변수에 관계없이 항상 접할 조건(항등식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $D/4$ 를 계산하면 $k^2$ 이 지워지고 $(2a+2)k+(a^2-b)$ 라는 $k$ 의 일차식이 남는다.
    이것이 모든 $k$ 에서 $0$ 이라는 해석(항등식)이 이 문항의 전부이고, 특정 $k$ 두 개를
    대입해 연립해도 같다. 문자가 셋이라 Mₐ 3.
    통찰 1개(EQV d2)·M_total 9 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: '$D/4=(a+k)^2-(k^2-2k+b)=(2a+2)k+(a^2-b)$ → 항등식이므로 $2a+2=0$, $a^2-b=0$ → $ab$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/144-301.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항의 (a+k) 와 상수항의 k 이차식을 바꿀 수 있음. 제약: 판별식에서 k² 이 반드시 상쇄되어 일차식만 남아야 항등식 조건이 두 개의 연립으로 떨어진다. k² 이 남으면 해가 없거나 조건이 무너진다."
    creative: "(1) 「항상 x축과 만나지 않는다」로 바꾸면 부등식의 항등 조건이 되어 ★4 (2) a, b 대신 a+b 를 묻기(★3 유지) (3) 접점의 x좌표를 k 의 식으로 표현하게 하면 표현 전환이 더해져 ★4."
```

```yaml
- id: GN-CM1-144-302
  page: 144
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $y=\dfrac{1}{4}x^2+kx+14$ 의 그래프가 직선 $y=-2x-k^2-6$ 보다 항상 위쪽에 있도록
    하는 자연수 $k$ 의 개수.
  category: "항상 위쪽 → 차 함수가 모든 x 에서 양수 → D < 0"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「그래프가 직선보다 항상 위쪽」이라는 위치 조건을 차 함수가 모든 x 에서 양수라는 대수 조건, 곧 D<0 으로 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이차함수의 그래프가 직선보다 항상 위쪽에 있을 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 그래프의 상하 관계를 차 함수의 부호로 바꾸는 것이 관문이고, 그 뒤는 $D<0$ 에서
    $k^2$ 이 상쇄되어 $4k-16<0$ 이 남는다. 접하는 경우를 포함하지 않으므로 등호가 없고
    (T-경계), 마지막에 자연수 조건으로 개수를 세야 한다(T-범위).
    통찰 1개(RT d2)·M_total 9 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: '(포물선) $-$ (직선) $>0$ 이 항상 성립 → $D<0$ → $4k-16<0$ → 자연수 $k$ 의 개수'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/144-302.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최고차항 계수, 상수항, 직선의 k² 항을 바꿀 수 있음. 제약: 차 함수의 최고차항이 양수여야 「항상 위쪽」이 D<0 과 동치이고, 판별식에서 k² 이 상쇄되어 일차부등식이 남아야 개수 세기가 단순하다."
    creative: "(1) 자연수 대신 정수 k 의 개수로 바꾸면 하한 처리까지 필요해 ★3~4 (2) 「만나는 점이 존재한다」로 뒤집어 여집합을 묻기(★3) (3) 차 함수의 최고차항을 음수로 둘 수 있게 계수도 미지수로 만들면 경우가 갈려 I-MI ★4."
```

### 연습문제 실력 UP

```yaml
- id: GN-CM1-144-303
  page: 144
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    $y=f(x)$ 의 그래프가 $x$축과 두 점 $(α,0)$, $(β,0)$ 에서 만나고 $α+β=6$, $αβ=4$ 일 때
    $y=f(2x-1)$ 의 그래프와 $x$축의 두 교점 사이의 거리. 그림은 두 교점을 표시한 포물선.
  category: "f(2x-1)=0 의 근을 원래 근으로 되돌리기 → 두 근의 차"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(2x−1)=0 을 2x−1=α 또는 β 로 되돌려, 새 근이 원래 근의 평행이동 뒤 1/2 축소임을 읽음"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 교점 사이의 거리 |α−β|/2 를 (α+β)²−4αβ 대칭식으로 옮겨 주어진 두 값만으로 계산"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "f(2x-1) 의 그래프와 x축의 두 교점 사이의 거리"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $f$ 의 식을 모르는 채로 답이 나온다는 점이 이 문항의 핵심이다. 합성된 입력을 원래
    근으로 되돌리면 두 근이 $(α+1)/2$, $(β+1)/2$ 가 되어 거리는 원래 거리의 절반이고,
    그 거리는 대칭식으로 계산된다. 일반 함수 $f$ 가 대상이라 Mₐ 3.
    통찰 2개(RT d2 · EQV d2)·M_total 9 → 실력 UP 출발점 ★4 유지(저노출 RT 포함).
  tier: star_4
  mechanism_primary: '$f(2x-1)=0 \iff 2x-1=α$ 또는 $β$ → 두 근 $(α+1)/2$, $(β+1)/2$ → 거리 $=|α-β|/2=\sqrt{(α+β)^2-4αβ}/2$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\sqrt{5}$'
  answer_source: "답지"
  figure: crop:fig-144-303.png
  latex: latex-bank/gn-cm1/items/144-303.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "α+β 와 αβ 의 값, 그리고 f(px+q) 의 p, q 를 바꿀 수 있음. 제약: (α+β)²−4αβ>0 이어야 두 교점이 존재하고, 거리는 |p| 로 나뉘므로 p 를 2 가 아닌 값으로 바꾸면 답의 꼴이 달라진다. q 는 거리에 영향을 주지 않는다."
    creative: "(1) q 를 바꿔도 답이 같다는 것을 묻게 하면 평행이동 불변성 통찰이 부각(★4 유지) (2) y=f(2x−1) 의 두 교점과 꼭짓점의 넓이로 확장하면 144-300 과 결합해 ★5 후보 (3) f 의 최고차항 계수를 주고 f(x)를 직접 복원하게 하면 오히려 난도 하락 ★3."
```

## 표본 판정 요약 (32문)

- ★ 분포: ★1 5 · ★2 20 · ★3 5 · ★4 2 · ★5 0
- 통찰형 22 · 절차형 10 · premium 0
- 통찰 유형 분포: I-EQV 14 · I-RT 6 · I-SYM 3 · I-VF 2 · I-SC 1 (총 26 라벨 · 통찰 2개 문항은 143-296 · 144-298 · 144-299 · 144-303 네 문항)
- 구역별: 개념원리 익히기 4(모두 ★1) · 필수 예제 6(모두 ★2) · 확인체크 10(★1 1 · ★2 9) · STEP 1 7(★2 5 · ★3 2) · STEP 2 4(★3 3 · ★4 1) · 실력 UP 1(★4)
- type_hint 상위: 「그래프와 직선의 위치 관계(판별식)」 4 · 「그래프와 x축의 위치 관계(판별식)」 2 + 접할 조건 계열 2 · 「근과 계수 관계로 교점·계수 정하기」 5 · 「두 교점 사이의 거리(두 근의 차)」 3 · 「유리수 계수와 켤레근」 3 · 「접하고 평행한 직선」 2
- 그림: 4문(`crop:fig-139-e1.png` · `crop:fig-143-296.png` · `crop:fig-144-299.png` · `crop:fig-144-303.png`)
- ★2 가 20문으로 두터운 것은 단원의 절차(연립 → 판별식 → 근과 계수 관계)가 균질하기 때문이며, 라벨을 인위적으로 분산시키지 않았다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-141-e5 | 켤레근(I-SYM d2) 착안의 실제 진입 저항은 ★3 급이나 +1 조건(통찰 2개 이상·depth 3) 미충족으로 ★2 유지 | ★2 / ★3 |
| GN-CM1-141-288 | e5 와 같은 골조. 확인체크 출발점 ★1 과 켤레근 통찰 사이에서 ★2 로 두었으나 ★3 여지 | ★2 / ★3 |
| GN-CM1-143-292 | 명시된 `b>0` 로 근 하나를 버리는 것을 I-VF 로 볼지 T-부호 함정으로 볼지. 이 파일은 「발문에 명시된 부호·범위 조건은 Mₜ 로 처리」로 통일 | ★2 |
| GN-CM1-143-294 | 저노출 유형 I-VF(후보 생성 → 사후 기각)가 들어가 ★3 후보이나 규칙상 +1 조건 미충족으로 ★2 유지 | ★2 / ★3 |
| GN-CM1-143-295 | y 합을 직선에 대입하는 것을 전략 분기(I-SC d1)로 볼지 표준 절차로 볼지 애매. 통찰형으로 기록했으나 절차형 ★2 로도 읽힘 | ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 type_hint 는 네 덩어리다 — ⑴ 위치 관계·판별식(138-279 · 138-281 · 140-e3 · 140-284 · 142-e6 · 142-289 · 142-290) ⑵ 근과 계수 관계로 교점·계수 정하기(139-282 · 141-e4 · 141-286 · 141-287 · 143-292 · 143-295) ⑶ 두 교점 사이의 거리·도형(139-e2 · 139-283 · 144-300 · 144-303) ⑷ 접선 조건(140-285 · 142-291 · 143-297 · 144-298).
- 따로 세워야 할 유형: 「유리수 계수와 켤레근」(141-e5 · 141-288 · 143-296)은 판별식 계열과 사고 경로가 완전히 다르므로 독립 유형으로 둘 것. 「매개변수에 관계없이 항상 성립(항등식)」(144-301)과 「그림에서 이차식 복원」(139-e1 · 144-299)도 독립 유형이 맞다.
- 통합해도 될 유형: x축과의 위치 관계(140-e3 계열)와 직선과의 위치 관계(142-e6 계열)는 「직선이 x축인 특수 경우」로 한 유형에 묶고 base ★ 만 달리해도 된다. 「접하고 평행한 직선」(142-291 · 143-297)은 미지수가 직선 쪽인지 포물선 쪽인지만 다르므로 한 유형으로 충분하다.
