---
name: mechanism-데이터-RPM-CALC2-06-p3
description: RPM 미적분Ⅱ 06 도함수의 활용 (1)(3/4 · 유형 09~18) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅱ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc2
  section: 06 도함수의 활용 (1)
  unit_code: CALC2-06
  part: "3/4"
  extract_range: "94~98쪽 · 0659~0693"
  total_problems: 35
  unit_total: 137
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json)
---

# RPM 미적분Ⅱ · 06 도함수의 활용 (1) (3/4) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅱ 06 도함수의 활용 (1) 단원의 세 번째 범위(94~98쪽 · 0659~0693 · 35문항)를 다룬다. 구역은 「유형 09 곡선 f(x, y)=0 의 접선의 방정식」(4문) → 「유형 10 이계도함수」(4문) → 「유형 11 함수의 증가와 감소」(4문) → 「유형 12 실수 전체의 집합에서 증가(감소) 조건」(3문) → 「유형 13 주어진 구간에서 증가(감소) 조건」(3문) → 「유형 14 분수함수의 극대와 극소」(3문) → 「유형 15 무리함수의 극대와 극소」(3문) → 「유형 16 지수함수의 극대와 극소」(4문) → 「유형 17 로그함수의 극대와 극소」(3문) → 「유형 18 삼각함수의 극대와 극소」(4문) 순이며 전부 유형 구역이다. 각 유형의 첫 문항이 대표문제(10문 · 난이도 표시 없음)이고 나머지는 중하 1 · 중 20 · 상중 4, 서술형 태그 3(0665·0672·0675), 기출 태그·그림 없음. RPM 은 구역이 곧 난이도 층이므로 출발점을 대표문제·level 없음 ★2 · 중하 ★1~2 · 중 ★2 · 상중 ★3 으로 두고 M_total·통찰로 ±1 조정했다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

판정 메모: `depth_score` 는 effective_depth 의 합. `insight_type` 은 depth 합이 2 이상일 때만 통찰형이고 단일 d1 통찰은 절차형으로 둔다(견본 준거). −1 조정은 통찰 없이 M_total 4 이거나, M_total 5 에서 단계·함정이 모두 최소(s=1, t=1)일 때만 적용했다. 이 범위의 골조는 대부분 「미분 → f'=0 또는 부호 → 부호표 → 값」이라 절차형이 많고, 통찰은 극한식을 미분계수로 읽는 전환(0664·0666), 역함수 존재를 단조성으로 옮기는 동치 변환(0673), 구간 부등식을 이차함수 그래프로 옮기는 전환(0676), 중근 후보 기각(0684), 매개변수 부호표 전환(0693)에만 라벨링했다. 극값 조건에서 미정계수를 연립하는 문항(0662·0679·0686·0689·0692)은 스키마대로 표준 절차(I-BW 불인정)로 두었다.

## 문항 데이터

### 유형 09 곡선 $f(x,\,y)=0$의 접선의 방정식

```yaml
- id: RPM-CALC2-0659
  page: 94
  vendor_label: '유형 09 곡선 $f(x,\,y)=0$의 접선의 방정식'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    곡선 2√x+√y=7 위의 점 (4, 9) 에서의 접선이 x축과 만나는 점 (a, 0) 의 a. 5지선다.
  category: "음함수 미분 → 접선 기울기 → 접선의 x절편"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선 f(x,y)=0 의 접선의 방정식(음함수 미분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양변을 x 로 미분하면 1/√x + y'/(2√y) = 0 → y' = -2√y/√x → (4, 9) 에서 -3. 접선 y = -3x+21 의 x절편 7. 음함수 미분·기울기·접선·절편 네 단계의 기본 절차. 대표문제 ★2 · 통찰 없음 · M_total 5(s=2) → ★2 유지.
  tier: star_2
  mechanism_primary: "2√x+√y=7 양변 미분 → y'=-2√y/√x → (4,9) 에서 기울기 -3 → y=-3x+21 → x절편 7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0659.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 (4, 9) 를 곡선 위 다른 격자점((1, 25)·(9, 1))으로, 상수 7 과 계수 2 를 바꿀 수 있음. 제약: 점이 곡선 위(2√x₀+√y₀=상수)·x₀, y₀ 가 완전제곱수여야 기울기가 유리수이고 x절편이 선택지 정수."
    creative: "(1) y절편이나 접선과 두 축이 이루는 삼각형 넓이를 묻기(★2) (2) 곡선을 √x+√y=k 로 두고 접선의 x절편+y절편이 항상 k² 임을 보이는 일반화(★3 · I-PD) (3) 접선이 원점을 지나는 접점을 찾게 하면 역방향(I-BW) ★3."
```

```yaml
- id: RPM-CALC2-0660
  page: 94
  vendor_label: '유형 09 곡선 $f(x,\,y)=0$의 접선의 방정식'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 x²+3xy²-y²=-15 위의 점 (-1, 2) 에서의 접선 y=ax+b 의 b/a. 주관식.
  category: "음함수 미분(곱의 미분 포함) → 기울기 5/8 → 접선 y절편 → 비"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선 f(x,y)=0 의 접선의 방정식(음함수 미분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2x + 3y² + 6xy·y' - 2y·y' = 0 → y' = -(2x+3y²)/(6xy-2y) → (-1, 2) 에서 -10/(-16) = 5/8. 접선 y = (5/8)x + 21/8 → b/a = 21/5. 3xy² 의 곱의 미분과 분수 정리가 계산 부담(T-부호). 벤더 중 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "양변 미분 2x+3y²+(6xy-2y)y'=0 → (-1,2) 에서 y'=5/8 → y=(5/8)x+21/8 → b/a=21/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{21}{5}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0660.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 (-1, 2) 와 우변 상수(점을 대입해 맞춤)·3xy² 의 계수. 제약: 점이 곡선 위 · 6xy-2y≠0(y' 존재) · b/a 가 깔끔한 유리수."
    creative: "(1) 접선에 수직인 법선의 방정식을 묻기(★2) (2) 접선이 지나는 다른 점의 좌표 조건에서 계수를 역산(★3 · I-BW) (3) 같은 곡선에서 접선 기울기가 0 인 점을 찾게 하면 분자=0 과 곡선 방정식의 연립 ★3."
```

```yaml
- id: RPM-CALC2-0661
  page: 94
  vendor_label: '유형 09 곡선 $f(x,\,y)=0$의 접선의 방정식'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y²+y·ln x-4x=0 위의 점 (1, 2) 에서의 접선과 x축·y축으로 둘러싸인 삼각형의 넓이. 주관식.
  category: "음함수 미분(y·ln x 곱의 미분) → 기울기 1/2 → 접선 절편 → 삼각형 넓이"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선 f(x,y)=0 의 접선의 방정식(음함수 미분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2y·y' + y'·ln x + y/x - 4 = 0 → (1, 2) 에서 4y' + 2 - 4 = 0 → y' = 1/2. 접선 y = x/2 + 3/2 의 절편 (-3, 0), (0, 3/2) → 넓이 (1/2)·3·(3/2) = 9/4. 음함수 미분에 ln x 의 곱의 미분이 섞이고 절편 부호(T-부호)만 조심. 벤더 중 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "양변 미분 (2y+ln x)y'+y/x-4=0 → (1,2) 에서 y'=1/2 → y=x/2+3/2 → 절편 -3, 3/2 → 넓이 9/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{9}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0661.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점 x좌표 1 은 ln 1=0 으로 계산을 가볍게 하므로 고정 권장 — 상수 4 와 y₀ 를 y₀²-4=0 을 유지하며 바꿈(y₀=±2). 제약: 접점 x좌표가 1 이 아니면 ln 값이 남아 넓이가 무리수 · 기울기≠0 이어야 삼각형이 생김."
    creative: "(1) 넓이 대신 접선과 법선이 x축과 만나는 두 점 사이 거리(★2) (2) 접선 절편 조건으로 상수 4 를 역산(★3 · I-BW) (3) 접점을 (e, y₀) 로 옮겨 ln 값이 살아남게 하면 계산 부담만 상승(★2~3 · 질 저하 주의)."
```

```yaml
- id: RPM-CALC2-0662
  page: 94
  vendor_label: '유형 09 곡선 $f(x,\,y)=0$의 접선의 방정식'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 x²+aye^x+y³=b 위의 점 (0, 1) 에서의 접선이 y=-(2/5)x+1 일 때 상수 a, b 의 곱 ab. 주관식.
  category: "점 대입 b=a+1 · 음함수 미분 → 기울기 -a/(a+3)=-2/5 → a=2, b=3"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선 f(x,y)=0 의 접선의 방정식(음함수 미분) — 접선 조건에서 미정계수 역산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (0, 1) 대입으로 b = a+1. 양변 미분 2x + a(y'+y)e^x + 3y²y' = 0 → (0, 1) 에서 (a+3)y' = -a → -a/(a+3) = -2/5 → a = 2, b = 3, ab = 6. 접선이 주어진 역산이지만 미정계수 대입 두 개로 끝나는 표준 절차(I-BW 불인정). 벤더 중 ★2 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "(0,1) 대입 b=a+1 → 음함수 미분 → (0,1) 에서 y'=-a/(a+3) → =-2/5 → a=2 → b=3 → ab=6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$6$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0662.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접선 기울기(-a/(a+3) 이 유리수가 되게 a 정수) · 접점 (0, 1) 은 e⁰=1 로 계산을 가볍게 하므로 고정 권장 · y³ 의 계수. 제약: a+3≠0 · a, b 가 정수로 떨어지는 기울기 선택."
    creative: "(1) 접선 대신 「접선이 (5, -1) 을 지난다」로 기울기를 숨기면 한 단계 추가(★2) (2) a, b 를 접선 기울기·법선 기울기 두 미분 조건으로만 주면 연립(★3) (3) 접점의 x좌표를 0 이 아닌 값으로 두면 e^x 가 남아 지수 처리 ★3."
```

### 유형 10 이계도함수

```yaml
- id: RPM-CALC2-0663
  page: 94
  vendor_label: "유형 10 이계도함수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=xe^{ax+b} 에서 f'(0)=7, f''(0)=14 일 때 상수 a, b 의 곱 ab. 5지선다.
  category: "곱의 미분 두 번 → f'(0)=e^b, f''(0)=2ae^b → b=ln 7, a=1"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이계도함수 — 계산과 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x) = (1+ax)e^{ax+b}, f''(x) = (2a+a²x)e^{ax+b}. f'(0) = e^b = 7 → b = ln 7 · f''(0) = 2a·7 = 14 → a = 1 → ab = ln 7. 곱의 미분 두 번과 대입뿐인 절차. 대표문제 ★2 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "f'=(1+ax)e^{ax+b} → f''=(2a+a²x)e^{ax+b} → e^b=7, 2ae^b=14 → a=1, b=ln 7 → ab=ln 7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0663.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f'(0), f''(0) 값(비 f''(0)/f'(0)=2a 가 정수가 되게) · e^b 의 값 7 을 다른 소수로. 제약: f'(0)=e^b>0 · 선택지 ln 꼴 유지."
    creative: "(1) f(1), f'(1) 을 주면 (1+a)e^{a+b} 꼴 연립으로 지수 처리 한 겹(★3) (2) f''(x)=k·f'(x) 항등식 조건으로 바꾸면 계수 비교(★2~3) (3) xe^{ax+b} 대신 (x+c)e^{ax} 로 미지수 위치를 옮기면 골조 동일(★2)."
```

```yaml
- id: RPM-CALC2-0664
  page: 94
  vendor_label: "유형 10 이계도함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=ln x, g(x)=x² 의 합성함수 h=g∘f 에 대해 lim_{x→1} h'(x)/(x-1) 의 값. 5지선다.
  category: "h=(ln x)² → h'=2ln x/x · h'(1)=0 → 극한 = h''(1) = 2"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "h'(1)=0 임을 확인하고 lim h'(x)/(x-1) 을 h' 의 x=1 에서의 미분계수 h''(1) 로 읽는 표현 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이계도함수 — 극한식을 미분계수로 읽기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    h(x) = (ln x)², h'(x) = 2ln x/x, h'(1) = 0 이므로 주어진 극한은 미분계수 정의로 h''(1). h''(x) = (2-2ln x)/x² → h''(1) = 2. 극한식을 이계도함수의 미분계수로 옮기는 표현 전환 1개(RT d1)와 몫의 미분 한 번. 벤더 중 ★2 · M_total 6 → ★2. 절차형(단일 d1).
  tier: star_2
  mechanism_primary: "h=(ln x)² → h'=2ln x/x → h'(1)=0 → lim h'(x)/(x-1)=h''(1) → (2-2ln x)/x² 에 x=1 → 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0664.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "g(x)=x³ 이나 f(x)=ln(kx) 등으로 바꿔도 h'(1)=0 이 유지되는 조합(ln 1=0)이면 골조 유지 · 극한점 1 고정 권장. 제약: 분모 x-1 과 h'(1)=0 이 맞아야 미분계수 꼴 · 답이 선택지 유리수."
    creative: "(1) lim h'(x)/(x²-1) 처럼 분모를 바꾸면 인수 정리 한 단계 추가(★2) (2) h=f∘g 로 순서를 바꾸면 h=ln(x²)=2ln x 로 단순해져 ★1~2 — 골조가 무너지는 지점 (3) h'(1)≠0 인 함수를 주면 극한이 발산해 「존재 여부」 판단 ★3."
```

```yaml
- id: RPM-CALC2-0665
  page: 94
  vendor_label: "유형 10 이계도함수"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    y=e^x·cos 2x 가 모든 실수 x 에서 y''+ay'+5y=0 을 만족시킬 때 상수 a. 주관식 서술형.
  category: "곱의 미분 두 번 → e^x[(2+a)cos 2x+(-4-2a)sin 2x]=0 항등식 → 계수 비교 a=-2"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이계도함수 — 계산과 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y' = e^x(cos 2x - 2sin 2x), y'' = e^x(-3cos 2x - 4sin 2x). 대입하면 e^x[(2+a)cos 2x + (-4-2a)sin 2x] = 0 이 항등식이므로 두 계수가 모두 0 → a = -2. 곱의 미분 두 번과 삼각함수 계수 정리가 계산 부담(Mₖ 3)이지만 통찰은 없음. 벤더 중·서술형 ★2 · M_total 8 → ★2.
  tier: star_2
  mechanism_primary: "y'=e^x(cos 2x-2sin 2x) → y''=e^x(-3cos 2x-4sin 2x) → 항등식 계수 (2+a)=0, (-4-2a)=0 → a=-2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-2$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0665.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos 2x 의 진동수 2(→ 상수항 5=1²+2²)와 e^x 의 지수 계수 1 을 바꾸면 5 도 함께 바뀜(e^{px}cos qx 는 y''-2py'+(p²+q²)y=0 을 만족). 제약: 두 계수 조건이 같은 a 를 주도록 상수항을 p²+q² 에 맞춰야 함."
    creative: "(1) 상수 5 도 미지수 b 로 두고 (a, b) 를 묻기(★2~3 · 연립) (2) 「y=e^{px}sin qx 가 만족시키는 2계 미분방정식」을 p, q 로 일반화(★3 · I-PD) (3) y 를 e^x cos 2x + e^x sin 2x 로 두어 두 항을 처리하게 하면 ★3."
```

```yaml
- id: RPM-CALC2-0666
  page: 94
  vendor_label: "유형 10 이계도함수"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    이계도함수를 갖는 f 가 f(3)=2, f'(3)=1 이고 lim_{x→3} (f'(f(x))-1)/(x-3)=3 일 때 f''(2). 주관식.
  category: "극한 존재 → f'(f(3))=f'(2)=1 → 극한 = (f'∘f)'(3) = f''(2)·f'(3) → f''(2)=3"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "g=f'∘f 로 놓고 극한 존재로 g(3)=1 을 확인한 뒤 극한식을 g'(3)=f''(f(3))·f'(3) 으로 읽는 전환 — 합성이 f'∘f 라 f'' 이 나오는 층이 하나 더 있음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이계도함수 — 극한식을 미분계수로 읽기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    g(x) = f'(f(x)) 로 두면 극한 존재로 g(3) = f'(2) = 1 이고, 주어진 극한은 g'(3) = f''(f(3))·f'(3) = f''(2)·1 = 3. 추상 함수(Mₐ 3)에서 합성 f'∘f 의 미분을 극한식에서 읽어내는 전환(RT d2). 벤더 상중 ★3 · 통찰 1(d2) · M_total 7 → ★3. 통찰형.
    [분류 이슈] 유형 10 「이계도함수」안에 있지만 골조는 「합성함수 극한 → 미분계수」라 카탈로그에서는 극한식형(0664 와 같은 계열)으로 분리하는 것이 맞음.
  tier: star_3
  mechanism_primary: "g=f'∘f → 극한 존재 g(3)=1 → 극한=g'(3)=f''(f(3))f'(3)=f''(2)·1 → f''(2)=3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$3$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0666.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(3), f'(3) 값과 극한값 3 을 바꿀 수 있음(답 = 극한값/f'(3)). 제약: 극한 존재 조건 f'(f(3))=1 의 상수 1 을 조건 ㈎ 와 맞춤 · f'(3)≠0."
    creative: "(1) 합성을 f∘f' 로 바꾸면 g'(3)=f'(f'(3))·f''(3) 이 되어 묻는 값이 f''(3) 으로 이동(★3) (2) 조건 ㈏ 를 lim (f(f(x))-2)/(x-3) 처럼 1층 합성으로 낮추면 RT d1 ★2 (3) 역함수 g=f⁻¹ 의 이계도함수 g''(2) 를 물으면 역함수 미분 공식 결합 ★4."
```

### 유형 11 함수의 증가와 감소

```yaml
- id: RPM-CALC2-0667
  page: 95
  vendor_label: "유형 11 함수의 증가와 감소"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=2x/(x²+1) 이 증가하는 구간 [α, β] 의 길이 β-α. 5지선다.
  category: "몫의 미분 → f'=2(1-x)(1+x)/(x²+1)² → 증가 구간 [-1, 1] → 2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 증가와 감소 — 증가·감소 구간"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x) = (2-2x²)/(x²+1)² 의 부호는 1-x² 의 부호 → [-1, 1] 에서 증가 → β-α = 2. 몫의 미분·인수분해·부호 판정의 기본 절차. 대표문제 ★2 · 통찰 없음 · M_total 5(s=2) → ★2 유지.
  tier: star_2
  mechanism_primary: "f'=(2-2x²)/(x²+1)² → 부호=1-x² → 증가 구간 [-1,1] → β-α=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0667.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 2x 의 계수(부호만 결정)·분모 x²+k(k>0 → 구간 [-√k, √k]). 제약: 분모가 0 이 되지 않도록 k>0 · β-α=2√k 가 선택지 정수가 되게 k 완전제곱."
    creative: "(1) 감소 구간을 묻거나 f'(x)≤0 인 정수 x 의 개수(★1~2) (2) 분자를 2x-a 로 두고 증가 구간 길이가 주어진 값이 되게 하는 a(★3 · I-BW) (3) 치역과 증가 구간을 함께 묻는 ㄱㄴㄷ(★2)."
```

```yaml
- id: RPM-CALC2-0668
  page: 95
  vendor_label: "유형 11 함수의 증가와 감소"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    0≤x≤2π 에서 f(x)=e^{sin x}+sin x 가 증가하는 구간에 속하지 않는 x 를 고르기. 5지선다.
  category: "f'=cos x(e^{sin x}+1) → 부호=cos x → 증가 구간 [0, π/2]∪[3π/2, 2π] → π 만 제외"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 증가와 감소 — 증가·감소 구간"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(x) = cos x·e^{sin x} + cos x = cos x(e^{sin x}+1) 이고 괄호는 항상 양수이므로 부호는 cos x 가 결정. cos x≥0 인 구간에 π 는 없음. 공통인수 묶기 한 번으로 끝나는 절차. 벤더 중하 ★1~2 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f'=cos x·e^{sin x}+cos x=cos x(e^{sin x}+1) → 부호=cos x → cos x≥0 이 아닌 것 = π"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0668.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sin x 를 cos x 로(→ 부호가 -sin x) · 구간 길이·선택지 각. 제약: e^{sin x}+1>0 처럼 공통인수를 뺀 나머지가 항상 양수여야 부호 판정이 한 줄."
    creative: "(1) 증가 구간의 길이 합을 묻기(★1) (2) f(x)=e^{sin x}-sin x 처럼 공통인수 뒤 (e^{sin x}-1) 의 부호가 sin x 에 따라 바뀌게 하면 두 인수 부호표 ★2 (3) 「f(x)=e^{g(x)}+g(x) 는 g 와 증감이 같다」를 ㄱㄴㄷ 로 묻기 ★2."
```

```yaml
- id: RPM-CALC2-0669
  page: 95
  vendor_label: "유형 11 함수의 증가와 감소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=ln x-x² 이 구간 [α, ∞) 에서 감소할 때 실수 α 의 최솟값. 주관식.
  category: "f'=(1-2x²)/x ≤ 0 (x>0) → x ≥ √2/2 → α 의 최솟값 √2/2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 증가와 감소 — 증가·감소 구간"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'(x) = 1/x - 2x = (1-2x²)/x 이고 정의역 x>0 에서 분모가 양수이므로 1-2x²≤0 → x≥√2/2. 감소 구간의 왼쪽 끝이 α 의 최솟값. 미분·부등식 한 줄(T-범위 x>0). 벤더 중 ★2 출발이지만 통찰 없음·M_total 4 → -1 → ★1.
    [분류 이슈] 벤더 중이나 s=1·t=1·M_total 4 의 한 줄 절차 — 라벨 ★1 로 두고 1단 차이 기록.
  tier: star_1
  mechanism_primary: "f'=1/x-2x=(1-2x²)/x → x>0 에서 f'≤0 ⟺ x≥√2/2 → α 최솟값 √2/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{\sqrt{2}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0669.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x² 의 계수 k(→ α=1/√(2k))·ln x 의 계수. 제약: 정의역 x>0 유지 · 답을 유리화한 꼴로 요구."
    creative: "(1) 증가 구간 (0, β] 의 β 최댓값(같은 골조 ★1) (2) f(x)=ln x-ax² 이 [1, ∞) 에서 감소하도록 하는 a 의 범위(★2 · 구간 조건형으로 이동) (3) x·ln x-x² 로 곱의 미분을 넣으면 f'=ln x+1-2x 의 부호가 바로 안 풀려 그래프 비교 ★3."
```

```yaml
- id: RPM-CALC2-0670
  page: 95
  vendor_label: "유형 11 함수의 증가와 감소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    x>0 에서 f(x)=2x+√(15-x²) 이 증가하는 구간에 속하는 모든 정수 x 의 합. 주관식.
  category: "f'=2-x/√(15-x²) ≥ 0 → 2√(15-x²) ≥ x → 양변 제곱(x>0) → x² ≤ 12 → 정수 1, 2, 3 → 6"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 증가와 감소 — 증가·감소 구간"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x) = 2 - x/√(15-x²) ≥ 0 ⟺ 2√(15-x²) ≥ x ⟺ (x>0) 4(15-x²) ≥ x² ⟺ x² ≤ 12 → 0<x≤2√3. 정수 1, 2, 3 의 합 6. 정의역 15-x²≥0 과 제곱 조건(양변 양수)이 함정 둘(T-범위·T-경계). 벤더 중 ★2 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "f'=2-x/√(15-x²) → 2√(15-x²)≥x → 4(15-x²)≥x² → x²≤12 → 정수 1,2,3 → 합 6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$6$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0670.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 15 와 계수 2(→ 경계 x²=4·15/5=12). 제약: 경계 √(4c/5) 가 정수 사이에 떨어지고 정의역 √c 보다 작아야 · x>0 조건 유지."
    creative: "(1) 감소하는 구간의 정수 x 개수(경계와 정의역 사이 · ★2) (2) 조건 x>0 을 빼면 x<0 에서는 f'>0 이 자동 성립해 정수 -3, -2, -1 이 추가되는 T-범위 변형(★2) (3) f(x)=ax+√(15-x²) 로 두고 증가 구간 길이가 주어진 값이 되게 하는 a 역산(★3 · I-BW)."
```

### 유형 12 실수 전체의 집합에서 함수가 증가(또는 감소)하기 위한 조건

```yaml
- id: RPM-CALC2-0671
  page: 95
  vendor_label: "유형 12 실수 전체의 집합에서 함수가 증가(또는 감소)하기 위한 조건"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=2x+ln(3x²+a) 가 실수 전체에서 증가하도록 하는 실수 a 의 최솟값. 5지선다.
  category: "진수 조건 a>0 · f'=(6x²+6x+2a)/(3x²+a) ≥ 0 ∀x → 판별식 9-12a ≤ 0 → a ≥ 3/4"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "실수 전체에서 증가·감소하기 위한 조건(판별식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정의역이 실수 전체가 되려면 3x²+a>0 즉 a>0. f'(x) = 2 + 6x/(3x²+a) = (6x²+6x+2a)/(3x²+a) 에서 분모가 양수이므로 분자 이차식이 항상 ≥0 ⟺ D/4 = 9-12a ≤ 0 → a ≥ 3/4. 진수 조건과 등호 포함이 함정 둘(T-범위·T-경계)이지만 절차는 표준(판별식). 대표문제 ★2 · 통찰 없음 · M_total 8 → ★2.
  tier: star_2
  mechanism_primary: "a>0(진수) → f'=(6x²+6x+2a)/(3x²+a) → 분자≥0 ∀x → D/4=9-12a≤0 → a≥3/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0671.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2(일차항)·3(x²)·a 의 자리(→ D/4 = 9-12a 의 계수 변동). 제약: 진수 조건 a>0 이 판별식 조건보다 약해야 답이 판별식에서 나옴 · 답이 선택지 분수."
    creative: "(1) 「감소」로 바꾸면 f'≤0 이 불가능해 「존재하지 않음」 판단(★2~3 · I-VF 성격) (2) f(x)=kx+ln(3x²+1) 로 미지수를 x 계수로 옮기면 k 의 부호 케이스가 생겨 ★3(I-MI) (3) 진수 조건이 답을 결정하도록 계수를 조정하면 T-범위 중심 ★2."
```

```yaml
- id: RPM-CALC2-0672
  page: 95
  vendor_label: "유형 12 실수 전체의 집합에서 함수가 증가(또는 감소)하기 위한 조건"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    f(x)=(x²+kx+1)e^{-x} 이 실수 전체에서 감소하도록 하는 실수 k 의 값. 주관식 서술형.
  category: "f'=(-x²+(2-k)x+k-1)e^{-x} ≤ 0 ∀x → x²-(2-k)x-(k-1) ≥ 0 → D=k² ≤ 0 → k=0"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "실수 전체에서 증가·감소하기 위한 조건(판별식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x) = {(2x+k)-(x²+kx+1)}e^{-x} = (-x²+(2-k)x+k-1)e^{-x}. e^{-x}>0 이므로 -x²+(2-k)x+k-1 ≤ 0 ∀x ⟺ x²-(2-k)x-(k-1) ≥ 0 ∀x ⟺ D = (2-k)²+4(k-1) = k² ≤ 0 → k = 0. 판별식이 k² 으로 정리되어 등호만 남는 것이 포인트(T-경계·T-부호)지만 절차는 표준. 벤더 중·서술형 ★2 · M_total 8 → ★2.
  tier: star_2
  mechanism_primary: "f'=(-x²+(2-k)x+k-1)e^{-x} → 분자 이차식 ≤0 ∀x → D=k²≤0 → k=0"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$0$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0672.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항 1 을 c 로 바꾸면 D=(2-k)²+4(k-c) 가 되어 k 의 범위(구간)가 답이 됨 · e^{-x} 를 e^{-2x} 로. 제약: 감소 조건이 성립하는 k 가 존재하도록(D≤0 가능) 계수 선택."
    creative: "(1) 「증가」로 바꾸면 최고차 -x² 때문에 불가능 → 존재하지 않음 판단(★2~3) (2) (x²+kx+1)e^{x} 로 부호를 바꾸면 분자가 (x+1)(x+k+1) 로 인수분해되어 항상 부호 변화 → 「증가·감소 불가」 ★3 (3) 실수 전체 대신 구간 (0, ∞) 조건으로 바꾸면 이차식의 구간 부호 → ★3."
```

```yaml
- id: RPM-CALC2-0673
  page: 95
  vendor_label: "유형 12 실수 전체의 집합에서 함수가 증가(또는 감소)하기 위한 조건"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=kx+ln(x²+4) 의 역함수가 존재하도록 하는 실수 k 의 값의 범위. 주관식.
  category: "역함수 존재 ⟺ 단조 ⟺ f'=(kx²+2x+4k)/(x²+4) 부호 고정 → k>0, D≤0 또는 k<0, D≤0 → |k|≥1/2"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "역함수 존재를 일대일 → 연속함수의 단조성 → f' 의 부호가 실수 전체에서 한쪽으로 고정(≥0 또는 ≤0)으로 옮기는 동치 변환 — 증가·감소 두 방향을 모두 허용해야 하므로 두 층"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "역함수가 존재하기 위한 조건 — 단조성"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    역함수 존재 ⟺ 일대일 ⟺ (연속) 증가 또는 감소 ⟺ f'(x) = k + 2x/(x²+4) = (kx²+2x+4k)/(x²+4) 의 분자가 항상 ≥0(k>0, D/4=1-4k²≤0 → k≥1/2) 또는 항상 ≤0(k<0, 같은 판별식 → k≤-1/2). k=0 은 부호가 바뀌어 제외. 역함수 조건을 단조성으로 옮기는 동치 변환(EQV d2 · 두 방향 케이스 포함)이 핵심이고 판별식은 표준. 벤더 상중 ★3 · M_total 8 → ★3. 통찰형.
    [분류 이슈] 증가·감소 두 케이스를 별도 I-MI 로 세면 통찰 2개 → ★4 후보. 케이스가 대칭(같은 판별식)이라 EQV 한 단계에 흡수하고 ★3 유지.
  tier: star_3
  mechanism_primary: "역함수 존재 → f 단조 → 분자 kx²+2x+4k 부호 고정 → k>0,D≤0 또는 k<0,D≤0 → k≤-1/2 또는 k≥1/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$k\le-\dfrac{1}{2}$ 또는 $k\ge\dfrac{1}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0673.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 4 를 c 로 두면 D/4=1-k²c → 경계 |k|≥1/√c · 2x 의 계수. 제약: 진수 x²+c 가 항상 양수(c>0) · 경계값이 유리수가 되게 c 완전제곱."
    creative: "(1) 「증가하도록 하는 k」만 물으면 케이스 한쪽·EQV 가 사라져 ★2 — 골조가 무너지는 지점 (2) 2x/(x²+4) 의 치역 [-1/2, 1/2] 로 k 의 범위를 읽는 다른 풀이를 대비시키면 전략 선택(I-SC) ★3~4 (3) 역함수 g 에 대해 g'(f(1)) 을 묻는 후속 결합 ★3."
```

### 유형 13 주어진 구간에서 함수가 증가(또는 감소)하기 위한 조건

```yaml
- id: RPM-CALC2-0674
  page: 96
  vendor_label: "유형 13 주어진 구간에서 함수가 증가(또는 감소)하기 위한 조건"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=4x-a·ln x 가 구간 (3, ∞) 에서 증가하도록 하는 실수 a 의 최댓값. 5지선다.
  category: "f'=4-a/x ≥ 0 on (3, ∞) → a ≤ 4x 의 하한 → a ≤ 12"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "주어진 구간에서 증가·감소하기 위한 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x) = 4 - a/x ≥ 0 ⟺ a ≤ 4x (x>0). x>3 에서 4x>12 이므로 a ≤ 12 이면 충분하고 a=12 도 f'>0 이 되어 성립 → 최댓값 12. 열린 구간 끝값 포함 여부(T-경계)와 a 의 부호 무관성(T-범위)이 함정. 매개변수 분리 뒤 하한을 읽는 표준 절차. 대표문제 ★2 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "f'=4-a/x≥0 (x>3) → a≤4x ∀x>3 → a≤inf 4x=12 → 최댓값 12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0674.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 4 와 구간 끝 3(→ 답 4·3=12) · 구간을 (c, ∞) 로. 제약: a 의 부호 조건 불필요 · 열린 구간이라도 경계값이 포함되는 이유(f'>0 이 성립)를 유지."
    creative: "(1) 감소 조건으로 바꾸면 a≥4x 가 무한대라 불가능 → 「없음」 판단, 또는 구간을 (0, 3) 으로 두면 a≥12 (★2) (2) (3, ∞) 에서 증가하고 (0, 1) 에서 감소하도록 하는 a 의 범위(★3 · I-CON) (3) 「증가하는 구간이 정확히 [3, ∞) 가 되도록」으로 바꾸면 a=12 한 값(★2)."
```

```yaml
- id: RPM-CALC2-0675
  page: 96
  vendor_label: "유형 13 주어진 구간에서 함수가 증가(또는 감소)하기 위한 조건"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    f(x)=ax-sin x 가 구간 (0, π/4) 에서 증가하도록 하는 실수 a 의 값의 범위. 주관식 서술형.
  category: "f'=a-cos x ≥ 0 on (0, π/4) → a ≥ cos x 의 상한 → a ≥ 1"
  M: {s: 1, k: 1, a: 2, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "주어진 구간에서 증가·감소하기 위한 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x) = a - cos x ≥ 0 ⟺ a ≥ cos x. (0, π/4) 에서 cos x 는 (√2/2, 1) 의 값을 가지며 1 에 한없이 가까워지므로 a ≥ 1. 열린 구간이라 상한 1 이 달성되지 않지만 a=1 도 포함(T-경계·T-범위). 매개변수 분리 한 줄. 벤더 중·서술형 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'=a-cos x≥0 (0<x<π/4) → a≥sup cos x=1 → a≥1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a\ge 1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0675.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 (0, π/4) 를 (π/6, π/3) 처럼 옮기면 상한이 cos(왼쪽 끝) 으로 바뀜 · sin x 를 cos x 로 바꾸면 f'=a+sin x. 제약: 구간 안에서 cos x 가 단조여야 상한이 끝점에서 나옴 · 열린 구간 끝값 포함 논리 유지."
    creative: "(1) 「감소하도록」으로 바꾸면 a ≤ inf cos x = √2/2 (★2) (2) 실수 전체에서 증가하는 a 의 범위(a≥1)와 구간 조건을 비교하는 ㄱㄴㄷ(★2) (3) f(x)=ax-sin 2x 처럼 진동수를 바꿔 구간 안에서 cos 2x 가 단조가 아니게 하면 최댓값 위치 판단 ★3."
```

```yaml
- id: RPM-CALC2-0676
  page: 96
  vendor_label: "유형 13 주어진 구간에서 함수가 증가(또는 감소)하기 위한 조건"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=(x²+ax)e^x 이 구간 (1, 2) 에서 감소하도록 하는 정수 a 의 최댓값. 5지선다.
  category: "f'=(x²+(a+2)x+a)e^x → 이차식 g ≤ 0 on (1, 2) ⟺ g(1)≤0, g(2)≤0 → a ≤ -8/3 → 정수 최댓값 -3"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "아래로 볼록한 이차식이 열린 구간 (1, 2) 에서 ≤0 인 조건을 그래프로 옮겨 양 끝점 g(1)≤0, g(2)≤0 두 부등식으로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "주어진 구간에서 증가·감소하기 위한 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'(x) = (x²+(a+2)x+a)e^x 이고 e^x>0 이므로 g(x) = x²+(a+2)x+a ≤ 0 이 (1, 2) 에서 성립해야 함. 아래로 볼록이므로 g(1) = 2a+3 ≤ 0, g(2) = 3a+8 ≤ 0 → a ≤ -8/3 → 정수 최댓값 -3. 구간 부등식을 이차함수 그래프의 끝점 조건으로 옮기는 전환 1개(RT d1) · 열린 구간에서 연속성으로 등호 포함(T-경계). 벤더 상중 ★3 · M_total 8 → ★3. 절차형(단일 d1).
  tier: star_3
  mechanism_primary: "f'=(x²+(a+2)x+a)e^x → g(x)=x²+(a+2)x+a≤0 on (1,2) → g(1)≤0, g(2)≤0 → a≤-8/3 → 정수 최댓값 -3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0676.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 (1, 2) 의 양 끝(→ g 의 끝점값 조건)·x² 의 계수. 제약: 두 끝점 조건 중 더 강한 쪽이 답을 결정하므로 경계 -8/3 이 정수가 아니어야 「정수 최댓값」이 의미 있음 · 선택지 정수."
    creative: "(1) 「증가하도록」으로 바꾸면 g≥0 on (1, 2) → 축 위치에 따라 케이스가 생겨 ★3~4(I-MI) (2) 매개변수 분리 a ≤ -(x²+2x)/(x+1) 의 최솟값으로 푸는 다른 풀이를 대비시키면 전략 선택 ★3(I-SC) (3) 구간을 (-2, -1) 처럼 축이 구간 안에 들어오도록 옮기면 꼭짓점 조건이 추가돼 ★3~4."
```

### 유형 14 분수함수의 극대와 극소

```yaml
- id: RPM-CALC2-0677
  page: 96
  vendor_label: "유형 14 분수함수의 극대와 극소"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=x+1/(x+3) 이 x=α 에서 극대, x=β 에서 극소일 때 α-β. 주관식.
  category: "f'=1-1/(x+3)²=(x+2)(x+4)/(x+3)² → 극대 x=-4, 극소 x=-2 → α-β=-2"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분수함수의 극대와 극소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x) = 1 - 1/(x+3)² = (x+4)(x+2)/(x+3)² 에서 f'=0 은 x=-4, -2. 부호는 (x+4)(x+2) 가 결정하므로 x=-4 에서 극대, x=-2 에서 극소 → α-β = -2. 점근선 x=-3 을 부호표에서 빼먹지 않는 것(T-범위)과 극대·극소 순서(T-부호)가 함정. 대표문제 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'=1-1/(x+3)²=(x+2)(x+4)/(x+3)² → 부호표(x=-3 제외) → 극대 -4, 극소 -2 → α-β=-2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-2$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0677.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "1/(x+3) 의 3 과 분자 계수 k(→ 극점 -3±√k). 제약: k>0 이어야 극값 존재 · k 완전제곱이면 정수 극점."
    creative: "(1) 극댓값과 극솟값의 차를 묻기(α, β 대입 · ★2) (2) f(x)=x+k/(x+3) 이 극값을 갖도록 하는 k 의 조건(★2) (3) 극댓값<극솟값인 이유를 ㄱㄴㄷ 로 묻거나 점근선과 극점을 함께 그래프 개형으로 묻기(★2~3)."
```

```yaml
- id: RPM-CALC2-0678
  page: 96
  vendor_label: "유형 14 분수함수의 극대와 극소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=4x/(x²+1) 에 대해 ㄱ f(0)+f'(0)=4, ㄴ (-1, 1) 에서 증가, ㄷ 극댓값·극솟값의 곱 -4 의 참·거짓. 5지선다.
  category: "몫의 미분 f'=4(1-x²)/(x²+1)² → f'(0)=4 · (-1, 1) 증가 · 극값 f(±1)=±2 → 곱 -4 → 모두 참"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분수함수의 극대와 극소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x) = (4-4x²)/(x²+1)². ㄱ f(0)=0, f'(0)=4 → 참. ㄴ -1<x<1 에서 f'>0 → 증가 → 참(부등식 표현을 증가의 정의로 읽기). ㄷ 극대 f(1)=2, 극소 f(-1)=-2 → 곱 -4 → 참. 보기 셋을 같은 도함수로 차례로 확인하는 절차. 벤더 중 ★2 · 통찰 없음 · M_total 5(s=2) → ★2.
  tier: star_2
  mechanism_primary: "f'=4(1-x²)/(x²+1)² → ㄱ f'(0)=4 · ㄴ (-1,1) 에서 f'>0 · ㄷ f(1)f(-1)=2·(-2)=-4 → ⑤"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0678.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 계수 4(→ 극값 ±2, 곱 -4)·분모 상수. 제약: 홀함수 구조를 유지하면 극값이 ±로 대칭이라 곱이 -(극댓값)² · ㄴ 의 구간은 극점 사이."
    creative: "(1) ㄴ 을 「x₁<x₂<-1 이면 f(x₁)>f(x₂)」로 바꿔 감소 구간 판단(★2) (2) ㄷ 를 「모든 실수 x 에 대해 |f(x)|≤2」로 바꾸면 극값→최댓값 전환(★2~3) (3) 홀함수 대칭(I-SYM)으로 극솟값을 즉시 얻는 보기를 추가하면 ★3."
```

```yaml
- id: RPM-CALC2-0679
  page: 96
  vendor_label: "유형 14 분수함수의 극대와 극소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=(ax-b)/(x²+1) 가 x=-2 에서 극솟값 -1 을 가질 때 상수 a, b 에 대한 a-b. 주관식.
  category: "f(-2)=-1 → 2a+b=5 · f'(-2)=0 → 3a+4b=0 → a=4, b=-3 → a-b=7"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분수함수의 극대와 극소 — 극값 조건에서 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(-2) = (-2a-b)/5 = -1 → 2a+b = 5. f'(x) = (-ax²+2bx+a)/(x²+1)² 에서 f'(-2)=0 → -3a-4b = 0. 연립하면 a=4, b=-3, a-b=7. 이때 f' 분자 -2(2x-1)(x+2) 가 x=-2 에서 -→+ 이므로 극소 확인. 극값 조건 두 개를 미정계수 연립으로 푸는 표준 절차(I-BW 불인정). 벤더 중 ★2 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "f(-2)=-1 → 2a+b=5 · f'(-2)=0 → 3a+4b=0 → a=4, b=-3 → a-b=7 (극소 확인)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$7$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0679.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극점 -2 와 극솟값 -1(→ 연립 계수). 제약: 연립해가 정수 · 구한 a, b 로 실제 극소(부호 -→+)가 되는지 검산 필수(극대가 되면 문제 불성립)."
    creative: "(1) 「극댓값 1 을 가질 때」로 바꾸면 같은 연립 · 부호 확인 방향만 반대(★2) (2) 극값 조건 하나만 주고 「극댓값과 극솟값의 합」을 물으면 나머지 극점 계산 추가(★3) (3) a, b 중 하나만 미지수로 두고 극값을 갖는 x 의 개수를 물으면 판별식 ★2."
```

### 유형 15 무리함수의 극대와 극소

```yaml
- id: RPM-CALC2-0680
  page: 97
  vendor_label: "유형 15 무리함수의 극대와 극소"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=(x+3)/√(x+1) 의 극솟값. 5지선다.
  category: "몫의 미분 → f'=(x-1)/(2(x+1)^{3/2}) → x=1 에서 극소 → f(1)=4/√2=2√2"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무리함수의 극대와 극소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x) = {√(x+1) - (x+3)/(2√(x+1))}/(x+1) = (x-1)/(2(x+1)√(x+1)). x>-1 에서 분모가 양수이므로 x=1 에서 -→+ 극소, f(1) = 4/√2 = 2√2. 무리식 몫의 미분과 통분 정리가 계산 부담 · 정의역 x>-1(T-범위). 대표문제 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'=(2(x+1)-(x+3))/(2(x+1)^{3/2})=(x-1)/(2(x+1)^{3/2}) → x=1 극소 → f(1)=2√2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0680.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 x+3 의 상수 c(→ 극점 x=c-2 · 극솟값 (2c-2)/√(c-1))·분모 √(x+1) 의 상수. 제약: 극점이 정의역 x>-1 안에 있어야(c>1) · 극솟값이 선택지 무리수 꼴."
    creative: "(1) (x+3)/√(x+1) 을 √(x+1)+2/√(x+1) 로 바꿔 산술·기하평균으로 최솟값을 구하는 다른 풀이를 대비(I-SC ★3) (2) 극솟값 대신 「극값을 갖는 x」와 정의역을 함께 묻는 ㄱㄴㄷ(★2) (3) 분자를 x²+3 으로 올리면 f' 분자가 이차 → 부호표 두 구간 ★3."
```

```yaml
- id: RPM-CALC2-0681
  page: 97
  vendor_label: "유형 15 무리함수의 극대와 극소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=√(x+1)+√(7-x) 가 x=a 에서 극댓값 b 를 가질 때 ab. 주관식.
  category: "f'=1/(2√(x+1))-1/(2√(7-x))=0 → x=3 · 부호 +→- → 극댓값 f(3)=4 → ab=12"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무리함수의 극대와 극소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x) = 1/(2√(x+1)) - 1/(2√(7-x)) = 0 ⟺ √(x+1) = √(7-x) ⟺ x = 3. x<3 이면 √(x+1)<√(7-x) 라 f'>0, x>3 이면 f'<0 → 극댓값 f(3) = 2+2 = 4 → ab = 12. 정의역 [-1, 7](T-범위)과 무리식 크기 비교로 부호를 읽는 것이 요점. 벤더 중 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'=1/(2√(x+1))-1/(2√(7-x)) → √(x+1)=√(7-x) → x=3 → 부호 +→- → f(3)=4 → ab=12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$12$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0681.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 근호 안 상수를 √(x+p)+√(q-x) 로 두면 극점 x=(q-p)/2, 극댓값 2√((p+q)/2). 제약: 극댓값이 정수가 되게 (p+q)/2 완전제곱 · 정의역 [-p, q] 안에 극점."
    creative: "(1) 대칭축 x=3 에 대한 대칭(I-SYM)으로 극점을 바로 읽는 풀이를 ㄱㄴㄷ 로 묻기(★2~3) (2) 계수를 √(x+1)+2√(7-x) 로 비대칭으로 두면 f'=0 이 7-x=4(x+1) 로 풀려 대칭이 깨짐(★2) (3) 극댓값=최댓값임을 이용해 「최댓값과 최솟값의 합」으로 확장하면 끝점 비교 추가 ★3."
```

```yaml
- id: RPM-CALC2-0682
  page: 97
  vendor_label: "유형 15 무리함수의 극대와 극소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    -2√2<x<2√2 에서 f(x)=x√(8-x²) 의 극댓값 α, 극솟값 β 의 차 α-β. 5지선다.
  category: "곱의 미분 → f'=(8-2x²)/√(8-x²) → x=±2 · 극대 f(2)=4, 극소 f(-2)=-4 → α-β=8"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무리함수의 극대와 극소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x) = √(8-x²) - x²/√(8-x²) = (8-2x²)/√(8-x²) 에서 분모가 양수이므로 부호는 8-2x² = 2(2-x)(2+x). x=-2 에서 -→+ 극소 -4, x=2 에서 +→- 극대 4 → α-β = 8. 곱의 미분 뒤 통분이 계산 부담이고 정의역이 열린 구간(T-범위). 벤더 중 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'=√(8-x²)-x²/√(8-x²)=(8-2x²)/√(8-x²) → x=±2 → f(2)=4, f(-2)=-4 → α-β=8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0682.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 상수 8 을 c 로(→ 극점 ±√(c/2), 극값 ±c/2). 제약: c/2 완전제곱이면 극점 정수 · 정의역 (-√c, √c) 안에 극점 존재는 자동."
    creative: "(1) 홀함수라 극댓값=-극솟값(I-SYM)인 사실로 α+β=0 을 묻거나 곱을 묻기(★2) (2) x=2√2·sin θ 치환으로 f=4sin 2θ 가 되는 삼각 치환 풀이를 대비(I-SC ★3) (3) f(x)=x√(8-x²)+k 로 평행이동 후 극댓값과 극솟값의 곱 조건으로 k 를 역산(★3 · I-BW)."
```

### 유형 16 지수함수의 극대와 극소

```yaml
- id: RPM-CALC2-0683
  page: 97
  vendor_label: "유형 16 지수함수의 극대와 극소"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=(x²-2x)e^x 의 극댓값과 극솟값의 곱. 5지선다.
  category: "곱의 미분 → f'=(x²-2)e^x → x=±√2 → 극값 (2±2√2)e^{∓√2} → 곱 (4-8)·e⁰=-4"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 극대와 극소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x) = (2x-2)e^x + (x²-2x)e^x = (x²-2)e^x → x=-√2 에서 극대 (2+2√2)e^{-√2}, x=√2 에서 극소 (2-2√2)e^{√2}. 곱은 (2+2√2)(2-2√2)·e^{-√2+√2} = 4-8 = -4. 지수가 상쇄되고 합·차 곱셈 공식으로 정리되는 계산이 요점. 대표문제 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'=(x²-2)e^x → x=±√2 → f(-√2)=(2+2√2)e^{-√2}, f(√2)=(2-2√2)e^{√2} → 곱=(4-8)·1=-4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0683.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식 x²-2x 의 계수(→ f' 분자 x²-2 · 극점 ±√2)·e^x 를 e^{-x} 로. 제약: 극점이 ±c 로 대칭이어야 지수가 상쇄돼 곱이 유리수 · 선택지 정수."
    creative: "(1) 극댓값과 극솟값의 합을 물으면 지수가 상쇄되지 않아 e^{±√2} 가 남음 — 골조가 무너지는 지점(답이 무리수 · ★2) (2) f(x)=(x²+ax)e^x 의 극댓값·극솟값 곱이 -4 가 되게 하는 a 역산(★3 · I-BW) (3) x²-2 를 x²-a 로 두고 극값 존재 조건 a>0 을 함께 묻기(★2)."
```

```yaml
- id: RPM-CALC2-0684
  page: 97
  vendor_label: "유형 16 지수함수의 극대와 극소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=(2x³+1)/e^{2x} 이 극값을 갖는 x 의 값의 개수. 주관식.
  category: "f'=-2(2x³-3x²+1)e^{-2x}=-2(x-1)²(2x+1)e^{-2x} → 중근 x=1 은 부호 불변 → 극값은 x=-1/2 한 개"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f'=0 의 후보 x=1, -1/2 중 x=1 이 중근이라 부호가 바뀌지 않음을 확인해 기각 — 검증 없이 후보 수 2 를 답하면 틀림"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수함수의 극대와 극소 — 극값의 개수(중근 판정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(x) = (2x³+1)e^{-2x} → f'(x) = (6x²-4x³-2)e^{-2x} = -2(2x³-3x²+1)e^{-2x} = -2(x-1)²(2x+1)e^{-2x}. f'=0 의 근은 x=1(중근), x=-1/2 인데 중근에서는 부호가 바뀌지 않아 극값은 x=-1/2 한 개. 삼차식 인수분해(x=1 대입)와 중근 기각(VF d1 · T-경계)이 요점. 벤더 중 ★2 · M_total 7 → ★2. 절차형(단일 d1).
    [분류 이슈] 유형 16 「지수함수의 극대와 극소」안에 있지만 골조는 「극값의 개수 — 중근 판정」이라 카탈로그에서 별도 세부 유형으로 둘 만함.
  tier: star_2
  mechanism_primary: "f'=(6x²-4x³-2)e^{-2x} → -2(x-1)²(2x+1)e^{-2x} → 후보 1(중근·기각), -1/2 → 극값 1개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$1$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0684.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식 2x³+1 을 바꾸면 f' 분자 (삼차식)'-2(삼차식) 의 인수 구조가 바뀜 — 중근이 생기도록 계수를 맞추는 것이 핵심. 제약: e^{-2x} 의 지수 계수 2 가 -2f 항을 만들므로 분자 f'-2f 가 중근을 갖게 설계 · 답은 개수(정수)."
    creative: "(1) 극댓값을 갖는 x 를 물으면 부호 +→- 판정만 추가(★2) (2) 중근 없이 삼차식이 서로 다른 세 근을 갖게 바꾸면 VF 가 사라져 답 3 · ★2 (3) f(x)=(ax³+1)e^{-2x} 이 극값을 하나만 갖도록 하는 a 의 조건을 물으면 중근·판별식 조건 → ★3~4(I-BW)."
```

```yaml
- id: RPM-CALC2-0685
  page: 97
  vendor_label: "유형 16 지수함수의 극대와 극소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=e^x+4e^{-x} 이 x=a 에서 극솟값 b 를 가질 때 e^{ab}. 주관식.
  category: "f'=e^x-4e^{-x}=0 → e^{2x}=4 → x=ln 2 · 극솟값 4 → e^{ab}=e^{4ln 2}=16"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 극대와 극소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x) = e^x - 4e^{-x} = 0 ⟺ e^{2x} = 4 ⟺ x = ln 2. 부호 -→+ 이므로 극솟값 f(ln 2) = 2+2 = 4. e^{ab} = e^{4ln 2} = 2⁴ = 16. 지수방정식 풀이와 로그 지수 정리가 요점인 짧은 절차. 벤더 중 ★2 · 통찰 없음 · M_total 5(s=2) → ★2.
  tier: star_2
  mechanism_primary: "f'=e^x-4e^{-x}=0 → e^{2x}=4 → a=ln 2 → b=f(ln 2)=4 → e^{ab}=2⁴=16"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$16$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0685.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 4 를 k(→ a=(1/2)ln k, b=2√k, e^{ab}=k^{√k}). 제약: k 완전제곱이면 a=ln√k 가 단순 로그 · e^{ab} 가 정수가 되려면 √k 정수."
    creative: "(1) 산술·기하평균으로 최솟값 4 를 바로 얻는 풀이와 대비해 「극솟값=최솟값」인 이유를 묻기(I-SC ★2~3) (2) f(x)=e^x+ke^{-x} 의 극솟값이 6 이 되게 하는 k 역산(★2) (3) f(x)=e^{2x}+4e^{-x} 로 지수 비율을 깨면 e^{3x}=2 처럼 세제곱근 등장 ★2~3."
```

```yaml
- id: RPM-CALC2-0686
  page: 97
  vendor_label: "유형 16 지수함수의 극대와 극소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    a>0 에서 f(x)=e^{2x}-ae^x 의 극솟값이 -1 일 때 상수 a. 주관식.
  category: "f'=e^x(2e^x-a)=0 → e^x=a/2 → 극솟값 -a²/4=-1 → a=2 (a>0)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수의 극대와 극소 — 극값 조건에서 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x) = 2e^{2x} - ae^x = e^x(2e^x-a) 는 e^x = a/2 에서 -→+ 이므로 극솟값 f = (a/2)² - a·(a/2) = -a²/4. -a²/4 = -1 → a² = 4 → a = 2 (a>0). 극점을 e^x 값으로 다뤄 로그를 거치지 않고 극솟값을 a 로 표현하는 것이 요점(T-부호: a>0 선택). 벤더 중 ★2 · 통찰 없음 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "f'=e^x(2e^x-a) → e^x=a/2 → 극솟값 (a/2)²-a(a/2)=-a²/4=-1 → a²=4 → a=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$2$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0686.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극솟값 -1 을 -c 로(→ a=2√c) · e^{2x} 의 계수. 제약: a>0 조건 유지 · 극솟값이 음수여야(항상 -a²/4<0) 성립 · a 가 정수가 되게 c 완전제곱."
    creative: "(1) 극솟값 대신 「극소가 되는 x 가 ln 3 일 때 a」로 바꾸면 e^x=a/2 만 쓰는 ★1~2 (2) t=e^x 치환으로 t²-at 의 최솟값으로 푸는 풀이를 대비(I-RT ★2) (3) f(x)=e^{2x}-ae^x+bx 로 일차항을 넣으면 f'=0 이 지수·일차 혼합이라 그래프 논증 ★4."
```

### 유형 17 로그함수의 극대와 극소

```yaml
- id: RPM-CALC2-0687
  page: 98
  vendor_label: "유형 17 로그함수의 극대와 극소"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=x·ln x-4x 의 극솟값. 5지선다.
  category: "f'=ln x+1-4=ln x-3=0 → x=e³ · 부호 -→+ → f(e³)=3e³-4e³=-e³"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 극대와 극소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x) = ln x + 1 - 4 = ln x - 3 → x = e³ 에서 -→+ 이므로 극솟값 f(e³) = e³·3 - 4e³ = -e³. 곱의 미분 한 번과 로그방정식이 전부인 기본 절차(정의역 x>0). 대표문제 ★2 · 통찰 없음 · M_total 5(s=2) → ★2 유지.
  tier: star_2
  mechanism_primary: "f'=ln x+1-4 → ln x=3 → x=e³ → f(e³)=3e³-4e³=-e³"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0687.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 4 를 k(→ x=e^{k-1}, 극솟값 -e^{k-1}) · x·ln x 의 계수. 제약: 정의역 x>0 · 극솟값 -e^{k-1} 이 선택지 꼴."
    creative: "(1) 극솟값이 -e² 가 되게 하는 k 역산(★2) (2) f(x)=x·ln x-kx 의 극솟값은 항상 -e^{k-1} 임을 ㄱㄴㄷ 로 묻기(★2 · I-PD 가벼움) (3) f(x)=x²·ln x-4x² 처럼 차수를 올리면 f'=x(2ln x-7) 의 인수 x 처리 ★2."
```

```yaml
- id: RPM-CALC2-0688
  page: 98
  vendor_label: "유형 17 로그함수의 극대와 극소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x/ln x 에 대해 ㄱ 정의역 {x|x>0}, ㄴ (0, 1) 에서 감소, ㄷ 극솟값 e·극댓값 없음의 참·거짓. 5지선다.
  category: "정의역 x>0, x≠1 (ㄱ 거짓) · f'=(ln x-1)/(ln x)² → (0, 1) 감소(ㄴ 참) · x=e 극소 e, 극대 없음(ㄷ 참)"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 극대와 극소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ 분모 ln x≠0 이므로 정의역은 x>0, x≠1 → 거짓(T-범위). f'(x) = (ln x-1)/(ln x)² 은 (0, 1) 에서 ln x<0 이라 음수 → ㄴ 참. x=e 에서 -→+ 극솟값 e 이고 x=1 은 정의역 밖이라 극대 없음 → ㄷ 참. 정의역 함정과 점근선 x=1 을 부호표에서 제외하는 것이 요점(T-경계). 벤더 중 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "정의역 x>0, x≠1 → f'=(ln x-1)/(ln x)² → (0,1) 음수 · (1,e) 음수 · (e,∞) 양수 → 극소 f(e)=e, 극대 없음 → ⑤"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0688.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(x)=x/ln x 는 계수를 바꿀 여지가 적음 — kx/ln x(극솟값 ke) 또는 x/ln(ax) 로. 제약: ㄱ 의 정의역 함정(ln x=0 인 x=1 제외)이 골조이므로 로그 분모 유지."
    creative: "(1) ㄷ 를 「x>1 에서 최솟값 e」로 바꾸면 극솟값→최솟값(★2) (2) f(x)=ln x/x 로 뒤집으면 극댓값 1/e · 정의역 함정 사라짐(★2) (3) 「방정식 x/ln x=k 의 실근 개수」로 확장하면 그래프 개형·점근선 활용 ★3(I-RT)."
```

```yaml
- id: RPM-CALC2-0689
  page: 98
  vendor_label: "유형 17 로그함수의 극대와 극소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x+ln(x²+ax+b) 가 x=-1 에서 극솟값 -1 을 가질 때 f(x)의 극댓값(a, b는 상수). 단답.
  category: "f'(-1)=0 → b=1 · f(-1)=-1 → 1-a+b=1 → a=b=1 · f'=(x+1)(x+2)/(x²+x+1) → x=-2 극대 → -2+ln 3"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그함수의 극대와 극소 — 극값 조건에서 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x) = 1 + (2x+a)/(x²+ax+b) 이고 f'(-1)=0 에서 (1-a+b)+(a-2)=0 → b=1, f(-1)=-1 에서 ln(1-a+b)=0 → 1-a+b=1 → a=b=1. 따라서 f(x)=x+ln(x²+x+1), f'(x)=(x²+3x+2)/(x²+x+1)=(x+1)(x+2)/(x²+x+1) 이므로 x=-2 극대 · x=-1 극소(주어진 조건과 일치). 극댓값 f(-2)=-2+ln 3. 진수 x²+x+1>0 이 실수 전체에서 성립하는지(T-범위)만 확인하면 나머지는 두 조건을 나눠 대입하는 표준 미정계수 절차라 I-BW 는 인정하지 않음. 벤더 중 ★2 · 통찰 없음 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "f'(-1)=0 → b=1 · f(-1)=-1 → a=b=1 → f'=(x+1)(x+2)/(x²+x+1) → x=-2 극대 → -2+ln 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2+\ln 3$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0689.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극점 x=-1 과 극솟값 -1, 진수 이차식의 계수. 제약: 진수가 실수 전체에서 양수여야 하므로 판별식<0(a²<4b) · f' 의 분자 x²+(a+2)x+(a+b) 가 서로 다른 두 실근을 가져야 극대·극소가 모두 생김 · 극댓값이 ln(정수) 꼴로 떨어지게 상수를 고름."
    creative: "(1) 극댓값을 주고 극솟값을 묻기 — 골조 동일 ★2 (2) 진수를 x²+ax+b 대신 e^x+ax 로 바꾸면 f'=0 이 초월방정식이 되어 ★3 (3) 「극값을 갖지 않도록 하는 a 의 범위」로 바꾸면 f' 분자의 판별식 조건과 진수 양수 조건이 겹쳐 ★3(I-EQV)."
```

### 유형 18 삼각함수의 극대와 극소

```yaml
- id: RPM-CALC2-0690
  page: 98
  vendor_label: "유형 18 삼각함수의 극대와 극소"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=2+4sin x-4sin²x (0<x<π) 가 x=a 에서 극솟값 b 를 가질 때 ab. 단답.
  category: "f'=4cos x(1-2sin x) → 임계점 π/6, π/2, 5π/6 → 부호 +−+− → 극소는 x=π/2 하나 → b=2, ab=π"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 극대와 극소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=4cos x-8sin x cos x=4cos x(1-2sin x). (0, π) 안의 임계점은 π/6, π/2, 5π/6 이고 두 인수의 부호가 서로 다른 점에서 바뀌므로 증감이 +−+− 로 네 구간으로 갈린다. 극대가 π/6, 5π/6 두 곳이고 극소는 가운데 x=π/2 하나 → a=π/2, b=f(π/2)=2+4-4=2, ab=π. sin x=t 치환은 (0, π) 에서 일대일이 아니라 t 의 이차식 꼭짓점(t=1/2)만 보면 x=π/2 의 극소를 놓치는 것이 함정(T-부호·T-범위). 대표문제 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'=4cos x(1-2sin x) → 임계점 π/6·π/2·5π/6 → 부호 +−+− → 극소 x=π/2, b=2 → ab=π"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\pi$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0690.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항 2 와 계수 4 — f=c+k sin x-k sin²x 꼴을 유지하면 극소는 늘 x=π/2, b=c 이므로 ab=cπ/2 로 조절 가능. 제약: 1-2sin x=0 의 두 해가 구간 (0, π) 안에 들어오도록 sin 항과 sin² 항의 계수비를 유지 · 극점이 특수각이 되게 할 것."
    creative: "(1) f=2+4cos x-4cos²x (0<x<2π) 로 바꾸면 임계점 배치가 달라져 ★2~3 (2) 「극댓값과 극솟값의 합」을 물으면 두 극대가 같은 값임을 쓰게 되어 계산이 줄고 ★2 (3) 구간을 (0, 2π) 로 넓히면 임계점이 늘어 부호표가 여섯 구간이 되고 극점 개수 세기가 요점이 되어 ★3."
```

```yaml
- id: RPM-CALC2-0691
  page: 98
  vendor_label: "유형 18 삼각함수의 극대와 극소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=x-2sin x (0<x<2π) 의 극댓값 M, 극솟값 m 에 대하여 M+m. 단답.
  category: "f'=1-2cos x=0 → cos x=1/2 → x=π/3 극소 · x=5π/3 극대 → (π/3-√3)+(5π/3+√3)=2π"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 극대와 극소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=1-2cos x 이므로 cos x=1/2 인 x=π/3, 5π/3 이 임계점. x<π/3 에서 cos x>1/2 라 f'<0, 가운데 구간은 cos x<1/2 라 f'>0, 끝 구간은 다시 f'<0 → 부호가 −+− 여서 π/3 이 극소, 5π/3 이 극대(극소가 먼저 오는 배치가 요점). m=π/3-√3, M=5π/3+√3 이고 sin(2π-α)=-sin α 로 두 임계점이 대칭이라 √3 이 상쇄되어 M+m=2π. 통찰 없음 · M_total 5 이지만 s=2 라 −1 조건(s=1·t=1)에 걸리지 않음 → 벤더 중 ★2 유지.
  tier: star_2
  mechanism_primary: "f'=1-2cos x → cos x=1/2 → x=π/3 극소·5π/3 극대 → (π/3-√3)+(5π/3+√3)=2π"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\pi$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0691.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sin 의 계수 k(f=x-k sin x). 제약: 극값이 생기려면 k>1 이어야 하고 cos x=1/k 가 특수각이 되게 k=2·√2·2/√3 정도만 쓸 수 있음 · 두 임계점이 α, 2π-α 로 대칭이라 √3 이 상쇄되어 M+m 이 2π 로 떨어지므로 구간 (0, 2π) 대칭을 유지할 것."
    creative: "(1) k=1 이면 f'=1-cos x≥0 이라 극값이 없음 — 「극값을 갖도록 하는 k 의 범위」로 바꾸면 ★3(I-EQV) (2) 「M-m」을 물으면 √3 이 남아 계산이 늘고 ★2 (3) 그래프 개형으로 방정식 x-2sin x=k 의 실근 개수를 묻는 확장은 ★3(I-RT)."
```

```yaml
- id: RPM-CALC2-0692
  page: 98
  vendor_label: "유형 18 삼각함수의 극대와 극소"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=a sin 2x+b cos x 가 x=7π/6 에서 극댓값 3√3/2 를 가질 때 상수 a, b 에 대하여 ab. 단답.
  category: "f'(7π/6)=a+b/2=0 → b=-2a · f(7π/6)=(√3/2)(a-b)=3√3/2 → a-b=3 → a=1, b=-2 → ab=-2"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 극대와 극소 — 극값 조건에서 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=2a cos 2x-b sin x 이고 x=7π/6 에서 cos(7π/3)=1/2, sin(7π/6)=-1/2 이므로 f'=a+b/2=0 → b=-2a. 또 sin(7π/3)=√3/2, cos(7π/6)=-√3/2 이라 f(7π/6)=(√3/2)(a-b)=3√3/2 → a-b=3. 두 식에서 a=1, b=-2, ab=-2. 2x 의 각 7π/3 이 한 바퀴를 넘으므로 동경을 줄여 삼각비의 값과 부호를 읽는 것이 계산의 전부(T-부호). 극값 조건 대입은 스키마 기준 표준 미정계수라 I-BW 불인정 · 벤더 중 ★2 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "f'(7π/6)=0 → b=-2a · f(7π/6)=3√3/2 → a-b=3 → a=1, b=-2 → ab=-2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-2$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0692.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극점 7π/6 과 극댓값 3√3/2. 제약: 2x 와 x 의 삼각비가 모두 특수각이 되도록 극점을 π/6 의 배수로 둘 것 · 연립 2a cos 2x₀=b sin x₀ 와 a sin 2x₀+b cos x₀=k 가 정수해를 갖게 k 를 고를 것 · 그 점이 실제로 극대(부호 +→−)인지 확인 가능해야 함."
    creative: "(1) 「극값을 갖는 x 가 7π/6 하나뿐」 같은 조건으로 바꾸면 f'=0 의 근 개수를 따져야 해서 ★4(I-MI) (2) f=cos x(2a sin x+b) 로 묶어 f(x)=0 의 해나 f 의 부호를 묻는 방향은 미분 없이 풀려 ★2 (3) b 를 주고 a 만 역산하면 ★1~2."
```

```yaml
- id: RPM-CALC2-0693
  page: 98
  vendor_label: "유형 18 삼각함수의 극대와 극소"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    매개변수 θ 로 나타낸 함수 x=θ-sin θ, y=cos θ (0<θ<2π) 의 극솟값. 5지선다.
  category: "dy/dx=(-sin θ)/(1-cos θ) · (0, 2π) 에서 분모>0 → 부호는 -sin θ 뿐 → θ=π 에서 −→+ → y=cos π=-1"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "dx/dθ=1-cos θ 가 (0, 2π) 에서 항상 양수임을 보고 θ 에 대한 증감표를 그대로 x 에 대한 증감표로 읽는 전환 — dy/dx 의 부호를 분자 -sin θ 만으로 판정하고 극값 판정을 θ 축에서 끝냄"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "매개변수로 나타낸 함수의 극대와 극소"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    dx/dθ=1-cos θ, dy/dθ=-sin θ 이므로 dy/dx=(-sin θ)/(1-cos θ). (0, 2π) 에서 1-cos θ>0 이 항상 성립하므로 부호는 분자 -sin θ 로만 갈리고, θ=π 를 지나며 −→+ 로 바뀐다. 동시에 x 가 θ 에 대해 증가하므로 θ 증감표를 그대로 x 증감표로 읽어도 되며 극솟값은 y=cos π=-1 → ①. 분모가 0 이 되는 θ=0, 2π 가 구간 밖이라는 점(T-범위)과 분자 부호(T-부호)가 함정. 벤더 상중 ★3 · 통찰 1개(depth 2)로 +1 조건(통찰 2개 이상 또는 depth 3) 미충족 → ★3 유지.
    [분류 이슈] 유형 18 「삼각함수의 극대와 극소」 안에 있지만 골조는 매개변수로 나타낸 함수의 미분이라 카탈로그에서는 별도 유형으로 세우는 것이 맞음.
  tier: star_3
  mechanism_primary: "dy/dx=(-sin θ)/(1-cos θ) → 분모>0 → 부호=-sin θ → θ=π 에서 −→+ → 극솟값 cos π=-1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0693.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x=θ-k sin θ 의 계수 k 와 y 의 진폭·구간. 제약: |k|<1 이면 dx/dθ=1-k cos θ 가 구간 안에서 늘 양수라 골조가 그대로 유지되고 k=1 은 경계(θ=0, 2π 에서만 0) · y 의 극점 값이 선택지 꼴로 떨어지게 할 것."
    creative: "(1) y=sin θ 로 바꾸면 극점이 θ=π/2 하나로 옮겨가 부호 판정이 쉬워져 ★2 (2) x=θ-2sin θ 처럼 계수를 키우면 dx/dθ 가 구간 안에서 부호를 바꿔 θ 의 증감과 x 의 증감이 어긋나므로 전환 통찰이 한 층 더 필요 → ★4 (3) 「이 곡선 위에서 접선의 기울기가 1 인 점」으로 바꾸면 dy/dx 를 식으로 다루게 되어 ★3~4."
```

## 표본 판정 요약 (35문)

- ★ 분포: ★1 2 · ★2 29 · ★3 4 · ★4 0 · ★5 0
- 통찰 라벨이 붙은 문항 6(0664 · 0666 · 0673 · 0676 · 0684 · 0693) · 그중 depth 합 2 이상이라 `insight_type: 통찰형` 인 문항 3(0666 · 0673 · 0693) · 절차형 32 · premium 0
- M_total 분포: 4 → 2 · 5 → 6 · 6 → 12 · 7 → 10 · 8 → 5 (평균 약 6.3)
- 대상층: 중위권 4 · 중하위권 29 · 하위권 2
- type_hint 상위: 「함수의 증가와 감소 — 증가·감소 구간」 4 · 「주어진 구간에서 증가·감소하기 위한 조건」 3 · 「무리함수의 극대와 극소」 3 · 「곡선 f(x,y)=0 의 접선의 방정식(음함수 미분)」 3 · 「삼각함수의 극대와 극소」 2 (그 밖에 지수·로그·분수함수의 극대와 극소, 이계도함수 2계열, 실수 전체에서 증가·감소 조건이 각 2)
- 그림: 없음(이 범위 35문 전부 `figure: none`)
- 벤더 신호: 전부 유형 구역 · 대표문제 10 · level 중하 1 · 중 20 · 상중 4 · 서술형 태그 3(0665 · 0672 · 0675) · 기출 태그 0

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC2-0666 | 유형 10 「이계도함수」 구역이지만 골조는 「합성함수 극한 → 미분계수」 — 카탈로그에서는 극한식형(0664 계열)으로 분리하는 것이 맞음 | ★3 |
| RPM-CALC2-0669 | 벤더 「중」이나 s=1·t=1·M_total 4 의 한 줄 절차 — 라벨 ★1 로 두고 1단 차이만 기록 | ★1 / ★2 |
| RPM-CALC2-0673 | 증가·감소 두 케이스를 I-MI 로 따로 세면 통찰 2개 → ★4 후보. 케이스가 대칭(같은 판별식)이라 I-EQV 한 단계로 흡수하고 ★3 유지 | ★3 / ★4 |
| RPM-CALC2-0684 | 유형 16 「지수함수의 극대와 극소」 구역이지만 골조는 「극값의 개수 — 중근 판정」이라 별도 세부 유형 후보 | ★2 |
| RPM-CALC2-0693 | 유형 18 「삼각함수의 극대와 극소」 구역이지만 골조는 매개변수로 나타낸 함수의 미분 — 카탈로그에서 별도 유형으로 세워야 함 | ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위의 type_hint 는 크게 ① 음함수·매개변수 미분으로 접선·증감을 구하는 계열, ② 이계도함수(계산형 / 극한식을 미분계수로 읽는 형), ③ 증가·감소(구간 판정 / 실수 전체 조건 / 주어진 구간 조건), ④ 「…함수의 극대와 극소」(분수·무리·지수·로그·삼각) 네 묶음으로 갈린다.
- **따로 세워야 할 유형**: 「이계도함수 — 극한식을 미분계수로 읽기」(0664·0666 · 골조가 계산형과 완전히 다름), 「실수 전체에서 증가·감소하기 위한 조건(판별식)」과 「주어진 구간에서 증가·감소하기 위한 조건」(전자는 판별식 한 줄, 후자는 구간 끝점 부등식으로 옮기는 I-RT 가 들어감), 「극값의 개수 — 중근 판정」(0684), 「매개변수로 나타낸 함수의 극대와 극소」(0693).
- **통합해도 될 유형**: 분수·무리·지수·로그·삼각의 「…의 극대와 극소」 기본 문항들은 미분 공식만 바뀌고 골조가 모두 「미분 → f'=0 → 부호표 → 값」으로 같으므로 하나의 상위 유형 + 함수족 태그로 묶고, 각 함수족의 「극값 조건에서 미정계수」(0679·0686·0689·0692)를 공통 하위 유형 하나로 두는 편이 낫다.
- `base_star` 를 채울 때 이 범위의 기준선: 기본 극값 문항 ★2 · 정의역/부호 함정이 겹치면 ★2 유지 · 표현 전환(I-RT)이나 동치 변환(I-EQV)이 필요하면 ★3.
