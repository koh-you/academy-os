---
name: mechanism-데이터-GN-GEO-06
description: 개념원리 기하 06 타원의 접선의 방정식(1/1 · 62~67쪽 25문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 기하 · 전사본 latex-bank/gn-geo
  section: 06 타원의 접선의 방정식
  unit_code: GEO-06
  part: "1/1"
  extract_range: "62~67쪽 · 62-114~67-135"
  total_problems: 25
  unit_total: 25
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·level·tag)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-geo/items/<id>.tex
  image_source: latex-bank/gn-geo/figures/ (crops.json)
---

# 개념원리 기하 · 06 타원의 접선의 방정식 (1/1) 정독 데이터 (v1.0)

62~67쪽 25문항 전수(62-114~67-135). 구역은 「개념원리 익히기」 3문, 「필수·발전 예제」 11문(필수 예제 3 + 각 예제의 확인체크 8), 「연습문제 STEP 1」 5문, 「연습문제 STEP 2」 4문, 「연습문제 실력 UP」 2문이다. 개념원리 고등의 난이도 신호는 구역 자체이며(익히기 ★1 · 필수 예제와 그 확인체크 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 출발), 여기에 tag 「평가원 기출」이 두 문항(66-130 · 67-135)에 붙어 있다. 출발점에서 M_total 과 통찰로 ±1 만 조정했고 라벨을 억지로 맞추지 않았다.

이 단원의 도구는 세 개뿐이다 — 기울기 접선 `y=mx±√(a²m²+b²)`, 접점 접선 `x₁x/a²+y₁y/b²=1`, 그리고 「접한다」를 이 두 식의 상수항 조건으로 옮기는 동치 변환. 그래서 절차형 10문은 도구 선택이 발문에 이미 드러나 있고, 통찰형 15문은 대부분 (a) 접점을 문자로 두고 근과 계수 관계로 대칭식을 처리하거나 (b) 길이·넓이·평행 조건을 접선의 절편·거리·기울기로 바꾸는 한 번의 전환에서 갈린다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-GEO-62-114
  page: 62
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "익히기"
  summary: |
    ⑴~⑵ 기울기가 주어졌을 때 타원에 접하는 직선. ⑴ x²/9+y²/5=1 에 접하고 기울기 1/3, ⑵ 4x²+3y²=12 에 접하고 기울기 -2.
  category: "기울기가 주어진 접선 공식 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 타원의 접선의 방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 소문항 모두 공식 한 줄이다. ⑵ 에서 4x²+3y²=12 를 x²/3+y²/4=1 로 고치는 단계가 하나 더 있을 뿐 도구 선택의 여지가 없다.
    통찰 없음·M_total 4·익히기 구역 → ★1.
  tier: star_1
  mechanism_primary: "표준형으로 정리 → y=mx±√(a²m²+b²) 에 m 대입 → 부호 ± 로 두 직선"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $y=\dfrac{1}{3}x\pm\sqrt{6}$ ⑵ $y=-2x\pm4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/62-114.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a², b², m 을 바꿀 수 있다. 제약: a²m²+b² 가 완전제곱이거나 √ 정리가 짧은 값이어야 한다(여기서는 9·(1/9)+5=6, 3·4+4=16). 표준형이 아닌 꼴로 줄 때는 우변이 계수의 공배수여야 정수 계수가 유지된다."
    creative: "(1) 접선이 지나는 점을 하나 더 줘서 ± 중 하나를 고르게 하기(★2) (2) 두 접선 사이 거리나 x절편 차를 묻기(63-119 골조 · ★2) (3) 기울기 대신 x축과 이루는 각 30°·45° 로 주면 tan 전환이 얹혀 ★2(66-125 골조)."
```

```yaml
- id: GN-GEO-62-115
  page: 62
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "익히기"
  summary: |
    ⑴~⑵ 타원 위의 점에서의 접선. ⑴ x²/8+y²/2=1 위의 (-2, 1), ⑵ 4x²+y²=20 위의 (1, 4).
  category: "타원 위의 점에서의 접선 공식 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원 위의 점에서의 접선의 방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    접점이 이미 주어져 x₁x/a²+y₁y/b²=1 한 줄이면 끝난다. ⑵ 는 4x²+y²=20 을 x²/5+y²/20=1 로 고치는 단계 하나가 추가될 뿐이다.
    통찰 없음·M_total 4·익히기 구역 → ★1.
  tier: star_1
  mechanism_primary: "표준형 확인 → x₁x/a²+y₁y/b²=1 에 접점 대입 → y=… 꼴로 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $y=\dfrac{1}{2}x+2$ ⑵ $y=-x+5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/62-115.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점과 a², b². 제약: 접점이 반드시 타원 위의 점이어야 하고(x₁²/a²+y₁²/b²=1 검산), x₁/a²·y₁/b² 가 유리수여야 접선이 깔끔한 일차식이 된다."
    creative: "(1) 접점의 x좌표만 주고 y좌표를 먼저 구하게 하기(부호 두 가지 → ★2) (2) 접선의 절편·넓이를 묻기(64-122 · ★2) (3) 접선이 지나는 다른 점을 주고 타원의 미정 상수를 묻기(64-e5 · ★2)."
```

```yaml
- id: GN-GEO-62-116
  page: 62
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "익히기"
  summary: |
    점 (2, 1) 에서 타원 x²/2+y²=1 에 그은 접선을 접점 (x₁, y₁) 로 두고 구하는 과정의 빈칸 채우기.
  category: "접점 미지수 → 외부점 통과 조건 + 접점 조건 연립"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원 밖의 점에서 그은 접선의 방정식(접점 방식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    65-e6 의 「밖의 점」 골조를 빈칸으로 미리 보여 주는 안내형이다. 세울 식(㉠ 외부점 통과 · ㉡ 접점 조건)과 순서가 발문에 모두 적혀 있어 학생이 결정할 것이 없다.
    통찰 없음·안내형·익히기 구역 → ★1. [분류 이슈] 골조 자체는 ★3 유형(접점 방식)의 예고편이라 M_total 6 이 구역 신호보다 높다.
  tier: star_1
  mechanism_primary: "접점 (x₁,y₁) 의 접선 x₁x/2+y₁y=1 → (2,1) 대입(㉠) → 접점 조건(㉡) → 연립 → 두 접선"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$x_1x$, $y_1y$, $x_1$, $1$, $\dfrac{4}{3}$, $-\dfrac{1}{3}$, $2x-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/62-116.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "외부점과 타원의 계수. 제약: ㉠·㉡ 연립이 유리수 접점 두 쌍을 주도록 잡아야 빈칸이 채워진다(여기서는 (0,1) 과 (4/3,-1/3)). 외부점이 타원 밖에 있어야 접선이 두 개다."
    creative: "(1) 빈칸을 지우고 그대로 서술형으로 내면 ★3(65-e6 유형) (2) 기울기 m 으로 두는 풀이와 접점으로 두는 풀이를 비교시키면 I-SC 가 생겨 ★3 (3) 두 접점을 잇는 직선(접점 현)을 묻게 바꾸면 65-124 골조 ★3."
```

### 필수·발전 예제

```yaml
- id: GN-GEO-63-e4
  page: 63
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    타원 4x²+y²=4 에 접하고 직선 2x-y-3=0 과 평행한 직선이 y=ax+b 일 때 a²+b².
  category: "평행 → 기울기 확정 → 접선 공식 → a²+b²"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 타원의 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평행 조건이 기울기를 그대로 주고 접선 공식을 한 번 쓰면 끝난다. b 가 ±2√2 로 둘이지만 묻는 값이 b² 라 답이 하나로 모이는 것이 이 예제의 장치다.
    통찰 없음이나 표준형 변환·무리수 정리·제곱합까지 M_total 6 → 필수 예제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "x²+y²/4=1 로 정리 → 평행에서 a=2 → b=±√(1·4+4) → a²+b² 은 부호와 무관"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$12$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/63-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원의 계수와 평행한 직선의 기울기. 제약: a²m²+b² 가 완전제곱이면 b 가 유리수라 난도가 내려가고, 무리수면 a²+b² 로 묻는 장치가 살아난다. 묻는 식을 ab 로 바꾸면 부호 때문에 답이 둘이 되므로 피한다."
    creative: "(1) 평행 대신 수직 조건(63-117 골조 · ★2) (2) 두 접선의 y절편 곱·차를 묻기(★2) (3) 「접하고 원점과의 거리가 d」 처럼 거리 조건으로 기울기를 역추적하게 하면 I-BW 가 생겨 ★3."
```

```yaml
- id: GN-GEO-63-117
  page: 63
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    타원 x²+2y²=6 에 접하고 직선 x-y+4=0 에 수직인 직선.
  category: "수직 → 기울기 -1 → 접선 공식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 타원의 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수직 조건에서 기울기를 -1 로 뒤집는 표준 절차 한 단계가 공식 앞에 붙은 형태다.
    통찰 없음·M_total 5 라 −1 후보지만, 표준형 변환과 수직 해석 두 단계가 있어 필수 예제 확인체크 수준인 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "x²/6+y²/3=1 정리 → 수직에서 m=-1 → y=-x±√(6+3)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=-x\pm3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/63-117.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원 계수와 기준 직선의 기울기. 제약: 수직 기울기 -1/m 이 유리수여야 하고 a²m²+b² 가 완전제곱(여기 9)이면 답이 정수로 떨어진다."
    creative: "(1) 두 접선과 좌표축이 만드는 도형의 넓이(★2) (2) 두 접선 사이 거리(63-119 · ★2) (3) 수직 조건 대신 「x축과 이루는 각」으로 주면 tan 전환 ★2."
```

```yaml
- id: GN-GEO-63-118
  page: 63
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 (2, 0) 을 지나는 타원 x²/a²+y²/b²=1 이 직선 y=-2x+5 에 접할 때 양수 a, b 의 합.
  category: "꼭짓점 조건 → a 확정 → 접선 조건(상수항 비교) → b"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「직선에 접한다」를 판별식이 아니라 접선 공식의 상수항 조건 5²=a²m²+b² 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "접선 조건으로 타원의 미정 상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조건 두 개가 각각 a 와 b 를 바로 준다. (2,0) 대입이 a=2 를, 접한다는 조건이 25=4a²+b² 를 준다.
    접선 조건을 상수항 비교로 옮기는 동치 변환 1개(EQV d1)·M_total 7·미정 상수 두 개(Mₐ 2) → 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "(2,0) 대입 → a=2 → 접한다 ⇔ 5=√(a²·4+b²) → b=3 → a+b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/63-118.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점(꼭짓점) 좌표, 접선의 기울기와 y절편. 제약: c²>a²m² 여야 b²>0 이고, c²-a²m² 가 완전제곱이면 b 가 정수로 떨어진다. 지나는 점을 (0,k) 로 바꾸면 b 가 먼저 정해진다."
    creative: "(1) 접선을 두 개 주고 a², b² 를 연립으로 구하게 하기(★3) (2) 「접한다」 대신 「만나지 않는다」로 바꿔 부등식으로(I-MI · ★3) (3) 초점 조건 a²-b²=c² 를 하나 섞으면 단원 내 결합 ★3."
```

```yaml
- id: GN-GEO-63-119
  page: 63
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    타원 x²/5+y²/4=1 에 접하고 기울기가 1 인 두 직선 사이의 거리.
  category: "기울기 접선 두 개 → 평행선 사이 거리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 접선이 평행임을 보고 대수 비교 대신 한 접선 위의 점에서 다른 접선까지의 거리 공식으로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "기울기가 주어진 두 접선과 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선 두 개는 공식 한 줄(y=x±3)이고 실제 관문은 ±√9 가 만드는 두 평행선 사이 거리로 옮기는 것이다.
    전환 통찰 1개(RT d1)·M_total 5 → 확인체크 ★2.
  tier: star_2
  mechanism_primary: "y=x±√(5+4) → 평행한 두 직선 사이 거리 = |차|/√(1+m²)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/63-119.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a², b², m. 제약: 거리 2√(a²m²+b²)/√(1+m²) 가 정리되도록 a²m²+b² 와 1+m² 를 함께 고른다(여기 9 와 2 → 3√2)."
    creative: "(1) 두 접점을 잇는 선분의 길이·중점을 묻기(★3) (2) 두 접선과 좌표축이 만드는 평행사변형 넓이(★3) (3) 거리를 주고 기울기를 역추적하게 하면 I-BW ★3."
```

```yaml
- id: GN-GEO-64-e5
  page: 64
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    타원 x²+ay²=9 위의 점 (-1, 2) 에서의 접선이 점 (b, 3) 을 지날 때 a+b (a 는 상수).
  category: "접점이 타원 위 → a 확정 → 접선 → 점 대입 → b"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원 위의 점에서의 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조건이 순서대로 a → 접선 → b 를 준다. 접점이 타원 위라는 사실이 a 를 먼저 확정해 주므로 분기가 없다.
    미정 상수 두 개(Mₐ 2)와 분모 정리가 있지만 모두 표준 절차다. 통찰 없음·M_total 7 → 필수 예제 ★2.
  tier: star_2
  mechanism_primary: "(-1,2) 를 타원에 대입 → a 확정 → 접점 접선식 → (b,3) 대입 → b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/64-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점 좌표, 우변 상수, 통과점의 한 좌표. 제약: 접점 대입으로 나오는 a 가 양수여야 타원이고(x²+ay²=9 에서 a>0), 접선식 분모가 정리돼 통과점 좌표가 정수로 떨어지게 잡는다."
    creative: "(1) a 를 주고 접점을 미지수로(★2) (2) 접선이 지나는 점을 두 개 줘서 과결정 조건 검증을 넣으면 I-VF ★3 (3) 접선이 x축·y축과 만드는 점을 묻게 바꾸면 64-122 골조 ★2."
```

```yaml
- id: GN-GEO-64-120
  page: 64
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    타원 3x²+4y²=48 위의 점 (2, 3) 에서의 접선과 수직이고 점 (3, 4) 를 지나는 직선.
  category: "접선 기울기 → 수직 기울기 → 점을 지나는 직선"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원 위의 점에서의 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표준형 변환 → 접점 접선 → 기울기 → 수직 기울기 → 점·기울기 직선까지 네 단계가 사슬로 이어지지만 모두 표준 절차다.
    통찰 없음·M_total 5 로 −1 후보지만 사슬 길이를 보아 확인체크 수준인 ★2 유지.
  tier: star_2
  mechanism_primary: "x²/16+y²/12=1 → 접선 x+2y=8(기울기 -1/2) → 수직 기울기 2 → 점 (3,4) 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=2x-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/64-120.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원 계수, 접점, 지나는 점. 제약: 접점이 타원 위여야 하고 접선의 기울기가 유리수여야 수직 기울기도 유리수다. 접점의 두 좌표가 모두 0 이 아니어야 기울기가 정의된다."
    creative: "(1) 수직 대신 평행(★2) (2) 두 직선의 교점을 묻기(★2) (3) 접선의 법선이 타원과 다시 만나는 점을 묻게 하면 연립이 붙어 ★3."
```

```yaml
- id: GN-GEO-64-121
  page: 64
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    타원 x²/a+y²/b=1 위의 점 (√2, 1) 에서의 접선의 y절편이 2일 때 상수 a, b 의 곱.
  category: "접선식의 y절편 = b → 접점 조건으로 a"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선 조건으로 타원의 미정 상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선 √2x/a+y/b=1 을 세우면 x=0 에서 y=b 라 조건이 곧바로 b=2 를 준다(분모가 a, b 그대로인 표기 덕분).
    남은 것은 접점이 타원 위라는 식 한 줄로 a 를 얻는 것. 통찰 없음·M_total 6·미정 상수 두 개 → 확인체크 ★2.
  tier: star_2
  mechanism_primary: "접선 √2x/a+y/b=1 → x=0 에서 y절편 = b → 접점 조건 2/a+1/b=1 → a → ab"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/64-121.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점 좌표와 절편 값. 제약: 접점이 타원 위라는 식이 유리수 해를 주도록 잡는다(x₁²/a+y₁²/b=1). y절편 값이 b 보다 작으면 접점이 타원 밖이 되어 모순이 난다."
    creative: "(1) y절편 대신 x절편을 주면 a 가 먼저 결정(★2) (2) 절편의 합·곱을 주면 연립이 붙어 ★3 (3) 절편으로 만든 삼각형 넓이를 주면 64-122·67-134 골조와 합류 ★3."
```

```yaml
- id: GN-GEO-64-122
  page: 64
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    타원 x²/12+y²/4=1 위의 점 (3, 1) 에서의 접선과 x축, y축으로 둘러싸인 삼각형의 넓이.
  category: "접선 → 절편형으로 읽기 → 직각삼각형 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선이 좌표축과 만드는 도형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접점 접선식을 절편형 x/p+y/q=1 로 두면 절편을 눈으로 읽는 것으로 끝난다(여기서는 p=q=4).
    통찰 없음·M_total 5 로 −1 후보지만 절편형 인식이 얹혀 ★2 유지. 67-134 는 같은 골조를 일반 접점 + 최솟값으로 확장한 ★4 다.
  tier: star_2
  mechanism_primary: "접점 접선 → x/4+y/4=1 절편형 → 넓이 = ½·|x절편|·|y절편|"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/64-122.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원 계수와 접점. 제약: 접점의 두 좌표가 모두 0 이 아니어야 두 절편이 존재하고, a²/x₁ 과 b²/y₁ 이 유리수여야 넓이가 깔끔하다. 접점이 꼭짓점이면 삼각형이 만들어지지 않는다."
    creative: "(1) 접점을 문자로 두고 넓이의 최솟값(67-134 · ★4) (2) 넓이를 주고 접점을 역추적(I-BW ★3) (3) 접선과 두 축·원점이 아닌 다른 직선으로 둘러싸인 도형으로 바꾸면 ★3."
```

```yaml
- id: GN-GEO-65-e6
  page: 65
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    점 (1, 6) 에서 타원 4x²+y²=8 에 그은 두 접선의 y절편의 합.
  category: "외부점 지나는 기울기 접선 → 접조건 이차방정식 → 근과 계수로 절편 합"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「접한다」를 접선 공식의 상수항 조건으로 옮겨 기울기 m 에 대한 이차방정식으로 바꿈"
    - step: 3
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "y절편의 합이 두 기울기의 대칭식임을 보고 근과 계수 관계로 한 번에 처리 — 개별 m 을 구하지 않는다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "타원 밖의 점에서 그은 접선의 방정식(기울기 방식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    「밖의 점」 유형의 표준 골조(외부점을 지나는 직선을 m 으로 두고 접조건)에 대칭식 처리가 얹힌다. 묻는 것이 절편의 합이므로 m 을 실제로 풀지 않아도 된다.
    통찰 2개(EQV d1 · SYM d2)·M_total 8 → 필수 예제 출발 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "y=m(x-1)+6 → 접조건으로 m 의 이차방정식 → 절편 합 = 12-(m₁+m₂) 을 근과 계수로"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$24$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/65-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "외부점과 타원 계수. 제약: 외부점이 타원 밖이어야 접선이 두 개이고, m 의 이차방정식이 실근 두 개(판별식>0)를 가져야 한다. m 의 이차항 계수가 0 이 되는 외부점(x좌표² = a²)은 접선 하나가 수직이 되므로 피한다."
    creative: "(1) 절편의 합 대신 곱·차를 묻기(같은 대칭식 골조 ★3) (2) 두 접선이 수직일 조건으로 외부점을 역추적(67-133 · ★3) (3) 접점 방식으로 풀게 유도하면 62-116 골조와 비교되어 I-SC ★4."
```

```yaml
- id: GN-GEO-65-123
  page: 65
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 (2, 1) 에서 타원 x²+6y²=6 에 그은 접선의 방정식을 모두 구하기.
  category: "외부점 지나는 접선 → 접조건 이차방정식 → 두 기울기 나열"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접한다 → 접선 공식의 상수항 조건 → m 의 이차방정식"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "타원 밖의 점에서 그은 접선의 방정식(기울기 방식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    65-e6 와 같은 골조지만 대칭식 단축이 없고 두 기울기를 실제로 풀어 나열한다. m=0 이 만드는 수평 접선을 빠뜨리지 않는 것이 유일한 함정(T-범위).
    통찰 1개(EQV d1)·M_total 6 → 확인체크 ★2.
  tier: star_2
  mechanism_primary: "y=m(x-2)+1 → 접조건으로 2m²+4m=0 → m 두 값 → 접선 두 개"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$y=-2x+5$, $y=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/65-123.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "외부점과 타원 계수. 제약: 외부점이 타원 밖. m 의 이차방정식이 인수분해되도록(여기서는 상수항이 0 이 되어 m=0 이 근) 잡으면 계산이 짧다. 외부점의 x좌표 제곱이 a² 와 같으면 접선 하나가 x=c 꼴이 되어 y=mx+n 표현에서 누락되므로 피한다."
    creative: "(1) 외부점을 (a, 0) 밖의 x축 위 점으로 옮기면 대칭 접선 두 개(★2) (2) 두 접점을 묻게 하면 접점 현 골조 ★3(65-124) (3) 접선과 타원이 둘러싸는 넓이로 확장하면 ★4."
```

```yaml
- id: GN-GEO-65-124
  page: 65
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 P(4, 1) 에서 타원 x²/16+y²/4=1 에 그은 두 접선의 접점을 A, B 라 할 때 삼각형 PAB 의 무게중심의 좌표.
  category: "접점 현(극선) → 타원과 연립 → 근과 계수로 좌표 합 → 무게중심"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「두 접점에서의 접선이 P 를 지난다」를 「두 접점이 직선 4x/16+y/4=1 위에 있다」로 뒤집음(접점 현)"
    - step: 3
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "무게중심에는 두 접점의 좌표 합만 필요하므로 접점을 각각 구하지 않고 연립 이차방정식의 근과 계수 관계로 처리"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "접점 현(극선)과 접점이 만드는 도형"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접점을 직접 구하려 하면 무리수 좌표가 나와 무게중심 계산이 커진다. 접점 현을 세우고 타원과 연립해 합만 읽으면 두 줄이다.
    통찰 2개(EQV d2 접점 현 · SYM d2 대칭식)·M_total 8 → 확인체크 출발 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "접점 현 x+y=4 → 타원과 연립한 이차방정식 → x 합·y 합 → 무게중심 = (P + 합)/3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\left(\dfrac{52}{15},\,\dfrac{13}{15}\right)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/65-124.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "외부점 P 와 타원 계수. 제약: P 가 타원 밖이어야 접점이 둘이고, 연립 이차방정식의 판별식이 양수여야 한다. 근과 계수만 쓰므로 접점이 무리수여도 답은 유리수로 떨어진다 — 오히려 무리수 접점이 되도록 잡는 편이 이 유형의 의도를 살린다."
    creative: "(1) 무게중심 대신 선분 AB 의 중점·길이를 묻기(중점은 합만, 길이는 곱까지 필요 → ★3~4) (2) 삼각형 PAB 의 넓이(점과 직선 거리 + 현의 길이 → ★4) (3) P 가 어떤 직선 위를 움직일 때 접점 현이 지나는 고정점(★5 급 · I-BW)."
```

### 연습문제 STEP 1

```yaml
- id: GN-GEO-66-125
  page: 66
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    타원 x²/3+y²=1 에 접하고 x축의 양의 방향과 이루는 각이 30°인 직선과 원점 사이의 거리.
  category: "각 → tan 기울기 → 접선 → 원점까지 거리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "각도 조건을 기울기 tan30° 로 옮겨야 접선 공식에 넣을 수 있다 — 기하 조건을 대수 계수로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "기울기가 주어진 타원의 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각→기울기 전환 한 번 뒤로는 접선 공식과 점과 직선 사이 거리 공식이 차례로 붙는다. 두 접선이 원점에 대칭이라 거리는 하나로 모인다.
    통찰 1개(RT d1)·M_total 6·무리수 정리 → STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "m=tan30° → y=mx±√(a²m²+b²) → |상수항|/√(1+m²)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{\sqrt{6}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/66-125.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각(30°·45°·60°)과 타원 계수. 제약: tan 값이 유리수이거나 √3 꼴이어야 하고 √(a²m²+b²)/√(1+m²) 가 정리돼야 한다(여기 √2 와 √(4/3))."
    creative: "(1) 원점 대신 초점에서의 거리(66-128 골조 · ★3) (2) 두 접선 사이 거리(63-119 · ★2) (3) 거리를 주고 각을 역추적하면 I-BW ★3."
```

```yaml
- id: GN-GEO-66-126
  page: 66
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    타원 3x²+4y²-12=0 위의 점 (2a, a) (a>0) 에서의 접선이 점 (0, b) 를 지날 때 ab 의 값.
  category: "접점이 한 문자 → 접선의 y절편이 b → ab 는 a 없이 결정"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "묻는 것이 곱 ab 라 접선의 y절편 식 b=3/a 하나로 끝난다 — 접점 조건으로 a 를 실제로 구하는 단계가 불필요"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "타원 위의 점에서의 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접점이 (2a, a) 로 한 문자라서 접선식을 세우면 y절편이 a 의 식으로 나오고, 묻는 값이 ab 라 a 가 약분된다.
    a=√3/2 를 실제로 구해도 답은 같지만 불필요하다. 통찰 1개(EQV d2)·M_total 6 → STEP 1 ★2.
  tier: star_2
  mechanism_primary: "접점 (2a,a) 의 접선식 → x=0 대입해 b 를 a 의 식으로 → ab 가 a 와 무관하게 상수"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/66-126.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원 계수와 접점의 비례 형태 (ka, a). 제약: 접점이 타원 위라는 식이 a>0 인 해를 가져야 한다. 묻는 값을 ab 가 아니라 a+b 로 바꾸면 a 를 실제로 구해야 하므로 무리수 계산이 늘어난다(난도 ↑, 통찰 ↓)."
    creative: "(1) x절편을 c 로 두고 ac 를 묻기(같은 골조 ★2) (2) 절편 두 개로 삼각형 넓이를 만들면 64-122·67-134 합류(★2~4) (3) 접점을 (2a, a) 대신 직선 y=x 위의 점으로 주면 조건 해석이 한 단계 늘어 ★3."
```

```yaml
- id: GN-GEO-66-127
  page: 66
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    타원 x²/2+y²=1 위의 점 (-1, √2/2) 에서의 접선과 타원 x²/4+y²/9=1 위의 점 (a, b) 에서의 접선이 평행할 때 a²+b².
  category: "두 접선의 기울기 일치 + 접점 조건 연립"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 접선이 평행할 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평행 → 기울기 일치는 표준 절차이고 남은 것은 기울기 식과 접점 조건 두 식을 연립하는 계산이다. 묻는 값이 a²+b² 라 부호 결정이 필요 없는 점만 편하다.
    분수 계수 때문에 계산량(M_total 8)은 이 구역에서 가장 크지만 v3.8 기준으로 계산 마찰은 ★ 상승 신호가 아니다. 통찰 없음 → STEP 1 출발 ★2 유지.
    [분류 이슈] M_total 8·절차형 ★2 조합은 §2.11 계산 마찰 경고(YELLOW) 대상이다.
  tier: star_2
  mechanism_primary: "첫 접선의 기울기 확정 → 둘째 접선 기울기 -b₂²a/(a₂²b) 를 같게 → 접점 조건에 대입 → b², a²"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{89}{11}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/66-127.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 타원의 계수와 첫 접점. 제약: 첫 접선의 기울기가 무리수라도 제곱으로만 쓰이면 a²+b² 는 유리수로 떨어진다. 두 타원이 닮은꼴(계수비가 같음)이면 접점이 자명해지므로 피한다."
    creative: "(1) 평행 대신 수직 조건(계산 구조는 같고 ★2) (2) 두 접선 사이 거리를 묻기(★3) (3) 한 타원을 원으로 바꾸면 기울기 관계가 단순해져 ★2, 쌍곡선으로 바꾸면 부호 분기가 생겨 I-MI ★3."
```

```yaml
- id: GN-GEO-66-128
  page: 66
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    타원 x²/4+y²=1 위의 점 (1, √3/2) 에서의 접선 l 에 두 초점 F, F' 에서 내린 수선의 발을 P, Q 라 할 때 선분 FP 와 F'Q 의 곱.
  category: "접선 → 두 초점에서의 거리 곱 → b²"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "수선의 발까지의 선분 길이를 P·Q 의 좌표 계산 대신 점과 직선 사이 거리로 전환"
    - step: 3
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 초점이 원점 대칭이라 두 거리의 곱이 합·차 꼴로 정리된다 — 각 거리를 따로 계산할 필요가 없다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "접선과 초점(수선의 발·거리)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    P, Q 의 좌표를 구하려 들면 수선의 방정식 두 개를 연립해야 하지만, 거리 공식으로 옮기면 두 줄이고 초점의 대칭 덕분에 곱이 (상수²-c²) 꼴로 모인다. 결과가 b² 인 타원의 일반 성질이다.
    통찰 2개(RT d2 · SYM d1)·M_total 6 → STEP 1 출발 ★2 에서 +1 하여 ★3.
    [분류 이슈] 초점–접선 거리 곱 = b² 를 이미 아는 학생에게는 한 줄(★2), 모르면 거리 계산 두 번(★3)이라 체감이 갈린다.
  tier: star_3
  mechanism_primary: "접점 접선 → 초점 좌표(c²=a²-b²) → 두 점과 직선 사이 거리의 곱 → b²"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/66-128.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원 계수와 접점. 제약: 답이 언제나 b² 이므로 수를 바꿔도 구조는 유지된다. 접점 좌표는 타원 위 점이면 되고, 분모의 √(1+m²) 가 정리되도록 잡으면 중간 계산이 짧다."
    creative: "(1) 거리의 곱 대신 합을 묻기(대칭이 깨져 실제 계산 필요 · ★4) (2) 수선의 발 P, Q 와 초점이 만드는 사각형의 넓이(★4) (3) 접점을 문자로 두고 곱이 일정함을 증명하게 하면 서술형 ★4."
```

```yaml
- id: GN-GEO-66-129
  page: 66
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    점 A(a, 0) 에서 타원 2x²+3y²=4 에 그은 접선의 접점을 P 라 할 때 AP=OP 가 성립하는 양수 a (O 는 원점).
  category: "접점 미지수 → 접선이 A 를 지남 + 길이 조건을 수직이등분선으로"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "AP=OP 를 거리 공식 두 번 대신 「P 가 선분 OA 의 수직이등분선 위」 즉 접점의 x좌표 = a/2 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "타원 밖의 점에서 그은 접선의 방정식(접점 방식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접점을 문자로 두고 접선이 A 를 지난다는 조건을 쓰면 접점의 x좌표가 a 의 식으로 나온다(y 항이 0 이 되어 y₁ 이 사라지는 것이 이 배치의 이점).
    관문은 길이 조건을 좌표 조건으로 바꾸는 것 하나. 통찰 1개(EQV d2)·M_total 7 → STEP 1 ★2(이 구역에서 가장 무겁다).
  tier: star_2
  mechanism_primary: "접점 (x₁,y₁) 의 접선이 (a,0) 을 지남 → x₁ 을 a 로 표현 → AP=OP ⇔ x₁=a/2 → a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/66-129.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원 계수와 외부점의 위치. 제약: 외부점을 x축 위에 두어야 접선 조건에서 y₁ 이 사라진다. 나온 접점의 x좌표가 -a<x₁<a 안에 들어가야 실제 접점이 존재한다(양수 조건 검증)."
    creative: "(1) AP=OP 대신 AP:OP=2:1 로 바꾸면 아폴로니우스 원이 되어 ★4 (2) 외부점을 y축 위로 옮기면 대칭 구조가 바뀌어 x₁ 대신 y₁ 이 남는다(★2) (3) 삼각형 OAP 가 정삼각형이 될 조건으로 바꾸면 조건 통합 ★3."
```

### 연습문제 STEP 2

```yaml
- id: GN-GEO-66-130
  page: 66
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제"
  summary: |
    타원 x²/3+y²=1 과 직선 y=x-1 의 두 교점 A, C 를 대각선으로 하는 사각형 ABCD(B, D 는 타원 위)의 넓이의 최댓값. 5지선다.
  category: "대각선 분할 → 거리 최대는 AC 에 평행한 접선의 접점"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "넓이가 최대가 되는 B, D 의 위치를 「AC 에 평행한 접선의 접점」으로 역추적 — 최적화를 접선 문제로 되돌린다"
    - step: 3
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "사각형을 대각선으로 갈라 넓이를 AC 와 두 점까지의 거리 합으로 바꾸고, 그 거리를 평행선 사이 거리로 계산"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "접선을 이용한 넓이의 최댓값"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    교점 계산은 짧고(연립 이차방정식이 인수분해된다) 핵심은 최댓값을 주는 B, D 를 접선으로 바꾸는 착안이다. 기울기 1 인 접선 두 개까지의 거리를 각각 더하면 끝난다.
    통찰 2개(BW d2 · RT d2)·평가원 기출 → STEP 2 출발 ★3 에서 +1 하여 ★4. ★5 게이트(통찰 3개 + SC/VF/SYM/XU)는 넘지 않는다.
    [분류 이슈] 골조가 「평행한 접선」 하나로 전형적이라 ★3 도 가능하다(라벨은 ★4 로 두고 기록만).
  tier: star_4
  mechanism_primary: "AC 길이 확정 → 넓이 = ½·AC·(B·D 까지 거리의 합) → 거리 최대는 AC 에 평행한 두 접선 → 평행선 사이 거리"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "⑤"
  answer_source: "답지"
  figure: "crop:fig-66-130.png"
  latex: latex-bank/gn-geo/items/66-130.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원 계수와 직선. 제약: 직선이 타원과 두 점에서 만나야 하고(판별식>0), 연립 이차방정식이 인수분해되면 AC 길이가 깔끔하다. 접선 y=x±k 의 k 가 직선의 상수항과 달라야 두 거리가 서로 다른 값이 된다."
    creative: "(1) 사각형 대신 삼각형 ABC 의 넓이 최댓값(거리 하나만 · ★3) (2) 넓이를 주고 직선의 기울기를 역추적(I-BW 강화 · ★4) (3) B, D 를 매개변수 (a cosθ, b sinθ) 로 두고 삼각함수 합성으로 풀게 하면 단원 밖 도구가 들어와 I-XU ★5 후보."
```

```yaml
- id: GN-GEO-67-131
  page: 67
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    쌍곡선 (x-8)²/16-y²=1 의 두 점근선이 타원 x²/k+y²=1 에 접할 때 상수 k.
  category: "평행이동된 쌍곡선의 점근선 → 타원의 접선 조건"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "점근선을 y=mx+n 꼴로 옮겨야 접선 조건 n²=a²m²+b² 에 넣을 수 있다 — 쌍곡선 표현을 직선 표현으로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "다른 이차곡선과 타원의 접선 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 곡선이 섞여 보이지만 실제로는 점근선을 구해 접선 조건에 넣는 두 단계다. 쌍곡선이 x축 방향으로 평행이동돼 있어 점근선에 상수항이 생기는 것이 유일한 주의점이고, 두 점근선이 대칭이라 조건은 하나로 모인다.
    통찰 1개(RT d1)·미정 상수 k(Mₐ 2)·M_total 7 → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "평행이동 쌍곡선의 점근선 → 기울기·상수항 → 접선 조건 n²=km²+1 → k"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$48$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/67-131.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "쌍곡선의 평행이동량과 계수, 타원의 b². 제약: n²>b² 여야 k>0 이다. 평행이동량이 0 이면 점근선이 원점을 지나 접선 조건이 성립하지 않으므로 반드시 0 이 아니어야 한다."
    creative: "(1) 타원 대신 원에 접하게 하면 거리 공식으로 바뀌어 ★2 (2) 점근선이 접하는 대신 만나지 않을 조건(부등식 · ★3) (3) 포물선의 준선·초점 조건을 섞으면 이차곡선 종합 ★4."
```

```yaml
- id: GN-GEO-67-132
  page: 67
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    포물선 y²=2x 와 타원 x²/16+y²/k²=1 의 한 교점 P 에서 두 곡선에 그은 접선이 수직일 때 양수 k.
  category: "두 곡선의 접선 기울기 곱 = -1 + 교점 조건 → 교점 좌표 소거"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "수직 조건과 교점이 포물선 위라는 조건을 묶어 P 의 좌표를 소거 — 교점을 실제로 구하지 않고 k 만 남긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 곡선의 교점에서의 접선이 수직일 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    교점을 먼저 구하려 하면 k 가 들어간 연립이 되어 막힌다. 두 접선의 기울기를 P 의 좌표로 써 놓고 수직 조건과 포물선 조건을 결합하면 좌표가 약분되고 k 만 남는다.
    통찰 1개(CON d2)·일반 점 (x₀,y₀) 로 인한 Mₐ 3·M_total 9 → STEP 2 ★3.
  tier: star_3
  mechanism_primary: "P(x₀,y₀) → 포물선 접선 기울기와 타원 접선 기울기 → 곱=-1 과 y₀²=2x₀ 결합 → x₀ 약분 → k"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/67-132.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선의 4p, 타원의 a². 제약: 소거 후 k² 가 양수로 떨어져야 하고, 교점이 실제로 존재하도록 타원이 포물선과 만나는 범위여야 한다. 접선 기울기 식에 y₀ 가 분모로 들어가므로 교점이 꼭짓점(y₀=0)이 아니어야 한다."
    creative: "(1) 수직 대신 두 접선이 일치(공통 접선) 조건으로 바꾸면 연립 구조가 달라져 ★4 (2) 포물선을 쌍곡선으로 바꾸기(부호 분기 → I-MI ★4) (3) 교점의 좌표까지 묻게 하면 계산이 늘고 검증이 붙어 I-VF ★4."
```

```yaml
- id: GN-GEO-67-133
  page: 67
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    점 (k, 3) 에서 타원 2x²+y²=6 에 그은 두 접선이 수직일 때 k (k²≠3).
  category: "외부점 접선의 기울기 이차방정식 → 두 근의 곱 = -1"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접한다 → 접선 공식의 상수항 조건 → 기울기 m 에 대한 이차방정식"
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 1
      signal_ref: []
      description: "수직 조건을 두 근의 곱 m₁m₂=-1 로 바꿔 근과 계수 관계로 처리(§2.9 감쇠 — 같은 단원 65-e6 에 이미 나온 처리라 effective_depth 1)"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "타원 밖의 점에서 그은 두 접선이 수직일 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    골조는 65-e6 와 같고 대칭식이 합에서 곱으로 바뀌었을 뿐이다. 조건 k²≠3 은 m 의 방정식이 이차가 되도록 보장하는 장치이자 T-범위 함정 표시다.
    통찰은 2개지만 같은 단원에서 반복된 처리라 감쇠해 depth_score 1.00 → STEP 2 출발 ★3 유지(+1 하지 않음).
    [분류 이슈] 수직인 두 접선의 교점이 준원 x²+y²=a²+b² 위에 있음을 알면 한 줄(★2), 근과 계수로 풀면 ★3 이라 체감이 갈린다.
  tier: star_3
  mechanism_primary: "y=m(x-k)+3 → 접조건으로 m 의 이차방정식 → m₁m₂ = -1 → k"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/67-133.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "외부점의 y좌표와 타원 계수. 제약: 외부점이 준원 위에 있어야 답이 존재하므로 y좌표²가 a²+b² 이하여야 하고, x좌표²=a² 인 경우(이차항 계수 0)는 제외해야 한다 — 발문의 k²≠3 이 그 장치다."
    creative: "(1) 두 접선이 이루는 각을 45°로 바꾸면 tan 덧셈정리가 들어와 ★4 (2) 수직인 두 접선의 교점 자취(준원)를 구하게 하면 ★4 (3) 외부점을 주고 두 접선의 기울기 합을 묻기(65-e6 대칭식 · ★3)."
```

### 연습문제 실력 UP

```yaml
- id: GN-GEO-67-134
  page: 67
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    타원 x²/16+y²/4=1 위의 점 P(꼭짓점 아님)에서의 접선이 x축, y축과 만나는 점을 A, B 라 할 때 삼각형 OAB 의 넓이의 최솟값.
  category: "접선의 절편 → 넓이를 접점 좌표의 곱으로 환원 → 산술·기하 평균"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "넓이 ½·(a²/x₁)·(b²/y₁) 를 접점 좌표의 곱 x₁y₁ 하나에 대한 식으로 환원 — 최적화 대상이 한 덩어리로 줄어든다"
    - step: 3
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "접점 조건 x₁²/16+y₁²/4=1 에 산술·기하 평균 부등식을 적용해 x₁y₁ 의 최댓값과 등호 조건까지 — 이차곡선 단원 밖의 도구"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "접선이 좌표축과 만드는 도형의 넓이의 최솟값"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    64-122 의 절편 넓이 골조를 일반 접점으로 올리고 최솟값을 붙인 문항이다. 넓이가 x₁y₁ 의 역수 꼴이므로 분모를 최대로 만드는 문제로 바뀐다.
    매개변수 (4cosθ, 2sinθ) 대입 + 배각 공식으로도 되지만 부등식이 가장 짧다(전략 갈래 존재). 통찰 2개·Mₐ 3·M_total 9·실력 UP → ★4. 통찰이 3개가 아니라 ★5 게이트는 넘지 않는다.
  tier: star_4
  mechanism_primary: "접점 (x₁,y₁) 의 접선 → 두 절편 → 넓이 = 상수/(x₁y₁) → 접점 조건에 산술·기하 평균 → 최솟값"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/67-134.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a², b². 제약: 최솟값이 ab 로 떨어지므로(여기 4·2=8) a², b² 를 완전제곱수로 잡으면 답이 정수다. 접점이 제1사분면에 있다고 두어야 절댓값 처리가 생략된다."
    creative: "(1) 넓이 대신 빗변 AB 의 길이 최솟값(부등식 구조가 달라져 ★4~5) (2) 접선과 두 축이 만드는 삼각형의 둘레(★5 후보) (3) 넓이가 최소일 때의 접점을 묻게 하면 등호 조건 검증이 본문이 되어 I-VF ★4."
```

```yaml
- id: GN-GEO-67-135
  page: 67
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제"
  summary: |
    타원 x²/16+y²/12=1 위의 점 P(2, 3) 에서의 접선 l, 초점 F 를 지나고 l 에 평행한 직선이 타원과 만나는 제2사분면 위의 점 Q, 직선 F'Q 와 l 의 교점 R, l 과 x축의 교점 S 에 대하여 삼각형 SRF' 의 둘레. 5지선다.
  category: "접선의 x절편 → 평행에서 닮음 → 초점거리 합으로 둘레 환원"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "FQ 와 l 이 평행하고 F, S 가 모두 x축 위에 있음을 보고 둘레를 직접 재는 대신 삼각형 F'QF 와 F'RS 의 닮음으로 옮김"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "닮은 삼각형의 둘레를 QF+QF'=2a 와 FF'=2c 로 바꿔 Q 의 좌표 없이 확정"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "접선과 초점(평행·닮음)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    Q 의 좌표를 실제로 구하면 무리수 연립이 되어 길어진다. 접선의 x절편 S 와 초점 F 가 같은 x축 위에 있다는 점이 닮음비를 주고, 나머지는 타원의 초점거리 합이다.
    통찰 2개(RT d2 · EQV d2)·평가원 기출·실력 UP → ★4. SC/VF/SYM/XU 가 없어 ★5 게이트는 넘지 않는다.
  tier: star_4
  mechanism_primary: "접점 접선 → S(x절편)·초점 F, F' → FQ∥l 로 △F'QF ∽ △F'RS(닮음비 F'F:F'S) → 둘레 = 비 × (2a+2c)"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "①"
  answer_source: "답지"
  figure: "crop:fig-67-135.png"
  latex: latex-bank/gn-geo/items/67-135.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원 계수와 접점 P. 제약: 접점이 제1사분면이어야 그림의 배치(S 가 F 보다 바깥)가 유지되고, 닮음비 F'F:F'S = 2c:(c+x절편) 가 정리되는 값이어야 한다. 접점이 꼭짓점이면 접선이 축과 평행해져 S 가 사라진다."
    creative: "(1) 둘레 대신 삼각형 SRF' 의 넓이(닮음비의 제곱 · ★4) (2) F 를 지나는 평행선 대신 F' 를 지나는 평행선으로 바꿔 배치를 뒤집기(★4) (3) 접선의 반사 성질(초점에서 나간 빛이 접선에 반사)을 쓰게 유도하면 I-SYM 이 붙어 ★5 후보."
```

## 표본 판정 요약 (25문)

- ★ 분포: ★1 3 · ★2 13 · ★3 6 · ★4 3 · ★5 0
- 통찰형 15 · 절차형 10 · premium 0
- 통찰 유형 분포: I-EQV 8 · I-SYM 3 · I-RT 5 · I-CON 1 · I-BW 1 · I-XU 1 (총 19 라벨 · SC/VF/PD/MI 없음)
- 구역별 출발점 대비: 익히기 3문 모두 ★1 유지, 필수·발전 예제 11문 중 9문 ★2 유지·2문(65-e6·65-124) +1, STEP 1 5문 중 4문 ★2 유지·1문(66-128) +1, STEP 2 4문 중 1문(66-130) +1·3문 유지, 실력 UP 2문 모두 ★4 유지. −1 은 적용하지 않았다(★2 구역의 M_total 5 문항 4개는 단계 사슬을 보아 유지).
- type_hint 상위 5: 「기울기가 주어진 타원의 접선의 방정식」 4(62-114·63-e4·63-117·66-125) · 「타원 위의 점에서의 접선의 방정식」 4(62-115·64-e5·64-120·66-126) · 「타원 밖의 점에서 그은 접선의 방정식」 4(62-116·65-e6·65-123·66-129) · 「접선 조건으로 타원의 미정 상수 결정」 2(63-118·64-121) · 「접선이 좌표축과 만드는 도형의 넓이」 2(64-122·67-134)
- 그림: 2문(`crop:fig-66-130.png` · `crop:fig-67-135.png`) — 두 문항 모두 배치가 발문에 서술돼 있어 골조 판정에 크롭이 필요하지 않았다.
- 대상층: 하위권 3 · 중하위권 7 · 중위권 6 · 중상위권 6 · 상위권 3

## 분류 이슈 목록

판정이 애매하거나 벤더 신호와 M·I 판정이 엇갈려 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-GEO-62-116 | 익히기 구역의 빈칸 안내형이라 ★1 이지만 골조는 ★3 유형(밖의 점·접점 방식)의 예고편 — M_total 6 이 구역 신호보다 높다 | ★1 / ★2 |
| GN-GEO-66-127 | M_total 8(이 범위 최대급)인데 통찰 0 인 계산 마찰형 — §2.11 YELLOW(통찰 없이 계산만 무거움) 대상 | ★2 / ★3 |
| GN-GEO-66-128 | 초점–접선 거리의 곱 = b² 를 아는 학생에겐 한 줄, 모르면 거리 계산 두 번 — 벤더 STEP 1 과 1단 차 | ★2 / ★3 |
| GN-GEO-66-130 | 통찰 2개로 +1 해 ★4 로 뒀으나 「AC 에 평행한 접선」 골조가 전형적이라 ★3 도 가능 | ★3 / ★4 |
| GN-GEO-67-133 | 준원(수직인 두 접선의 교점의 자취)을 알면 한 줄, 근과 계수로 풀면 세 단계 — 통찰 2개지만 65-e6 반복이라 감쇠해 +1 하지 않음 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 기울기가 주어진 접선(공식형) ② 타원 위의 점에서의 접선(공식형) ③ 타원 밖의 점에서 그은 접선 — 이때 **기울기 방식(65-e6·65-123·67-133)과 접점 방식(62-116·66-129)은 base ★ 가 다르므로 하위 유형으로 분리**하는 것이 좋다. ④ 접점 현(극선) 유형(65-124)은 위 셋과 도구가 달라 독립 유형. ⑤ 접선과 초점이 얽힌 유형(66-128·67-135)은 「타원의 정의(2a)·초점 성질」 단원과 공유되는 결합 유형.
- **통합해도 될 유형**: 「접선 조건으로 미정 상수 결정」(63-118·64-121)은 ①·②의 역방향일 뿐이라 별도 base ★ 없이 각 유형의 변형으로 둬도 된다. 「두 접선이 평행/수직할 조건」(66-127·64-120)도 ②의 변형.
- **★4 이상을 지탱하는 축**: 이 단원에서 ★4 는 모두 「접선 + 최적화(66-130·67-134)」 또는 「접선 + 초점 성질/닮음(67-135)」에서 나온다. 카탈로그를 만들 때 이 둘을 ★4 슬롯 유형으로 명시하면 ★ 인플레를 막을 수 있다. ★5 를 만들려면 SC/VF/SYM/XU 통찰이 필요한데 이 범위에는 I-XU 가 67-134 하나뿐이라 ★5 표본이 없다.
