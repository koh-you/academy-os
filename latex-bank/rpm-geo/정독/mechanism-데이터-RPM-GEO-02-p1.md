---
name: mechanism-데이터-RPM-GEO-02-p1
description: RPM 기하 02 이차곡선의 접선(1/3 · 교과서 02-1~02-3 + 유형 01·02) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 기하 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-geo
  section: 02 이차곡선의 접선
  unit_code: GEO-02
  part: "1/3"
  extract_range: "27~29쪽 · 0151~0181"
  total_problems: 31
  unit_total: 95
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-geo/items/<id>.tex
  image_source: latex-bank/rpm-geo/figures/ (crops.json)
---

# RPM 기하 · 02 이차곡선의 접선 (1/3) 정독 데이터 (v1.0)

이 파일은 RPM 기하 02 이차곡선의 접선 단원의 첫 범위(27~29쪽 · 0151~0181 · 31문항)를 다룬다. 교과서 02-1 포물선의 접선의 방정식(7문) · 02-2 타원의 접선의 방정식(5문) · 02-3 쌍곡선의 접선의 방정식(7문)의 교과서 구역 19문과, 유형 01 포물선의 접선 — 기울기가 주어진 경우(4문 · 대표문제·중하·중·상중) · 유형 02 포물선의 접선 — 접점의 좌표가 주어진 경우(8문 · 대표문제·중하·중 6 · 서술형 태그 1)의 12문이다. RPM 의 벤더 난이도 신호는 구역이 곧 층이다 — 교과서(★1 출발) / 유형(대표문제 · 난이도 하~상) / 유형 UP / 시험에 꼭 나오는 문제 / 서술형 / 실력 Up. 교과서 구역 19문은 모두 「기울기가 주어진 접선 공식」 또는 「접점이 주어진 접선 공식」 한 줄이라 ★1 이고, 유형 구역은 ★1 1문(중하) · ★2 10문 · ★3 1문(상중 0173)이다. 단계별 라벨링으로 통찰이 잡힌 문항은 0173(I-SYM d1 · 두 포물선의 y=x 대칭) 하나이며 나머지 30문은 절차형이다. 그림 문항은 0179 한 문항(`crop:fig-0179.png`)이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 절차형 ★1 문항에도 `mechanism_primary`(풀이 골조 사슬) · `insights[]`(절차형은 빈 배열) · `variation_notes.numeric`(바꿔도 되는 수와 제약) · `variation_notes.creative`(골조를 유지한 변형과 ★ 가 변하는 지점)를 모두 채웠다. 교과서 구역의 변형은 대부분 「같은 공식을 다른 곡선·기울기·접점으로」이고 제약은 접점이 곡선 위에 있을 것(y₁²=4px₁ 류 검산)과 근호 안이 양수일 것(쌍곡선 a²m²-b²>0)이다. ★ 가 오르는 지점은 접점 좌표를 매개변수로 감추기(Mₐ 2) · 초점·준선·절편 성질 결합 · 두 곡선의 공통접선 · 외부점에서 그은 접선(역방향)으로 표시했다.

## 문항 데이터

### 교과서 02-1 포물선의 접선의 방정식

```yaml
- id: RPM-GEO-0151
  page: 27
  vendor_label: "교과서 02-1 포물선의 접선의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    포물선 y²=3x 에 접하고 기울기가 -1 인 직선의 방정식.
  category: "기울기 주어진 포물선 접선 공식 y=mx+p/m → p·m 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 접선의 방정식 — 기울기가 주어진 경우"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    4p=3 에서 p=3/4 를 읽고 y=mx+p/m 에 m=-1 을 넣으면 y=-x-3/4 한 줄. 함정은 4p 를 p 로 읽는 표기 하나(T-표기). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y²=4px 꼴에서 p=3/4 → 접선 y=mx+p/m 에 m=-1 → y=-x-3/4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=-x-\dfrac{3}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0151.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p 의 값(3 → 4·8·-12·1/2)과 기울기 m(-1 → ±2·1/2·3)을 바꿈. 제약: m≠0, p/m 이 간단한 분수가 되도록 하고, 4p 가 4 의 배수가 아닌 값이면 p 읽기 함정이 유지됨."
    creative: "(1) 기울기 대신 '직선 x+y=1 과 평행'으로 주기(0153 골조 ★1) (2) 접선이 지나는 점을 주고 상수 k 구하기(0170 골조 ★2) (3) 공식 대신 판별식으로 풀게 하거나 접점 좌표 (p/m², 2p/m) 까지 묻기(★2)."
```

```yaml
- id: RPM-GEO-0152
  page: 27
  vendor_label: "교과서 02-1 포물선의 접선의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    포물선 y²=-16x 에 접하고 기울기가 3 인 직선의 방정식.
  category: "기울기 주어진 포물선 접선 공식 y=mx+p/m → p<0 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 접선의 방정식 — 기울기가 주어진 경우"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    4p=-16 에서 p=-4, y=3x+(-4)/3=3x-4/3 한 줄. 왼쪽으로 열린 포물선이라 p 의 부호를 놓치면 절편 부호가 뒤집힘(T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "4p=-16 → p=-4 → y=mx+p/m 에 m=3 → y=3x-4/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=3x-\dfrac{4}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0152.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p 를 다른 음수(-4·-8·-20)로, 기울기를 ±1·±2·1/2 로. 제약: 4p<0 을 유지해야 부호 함정이 남고, p/m 이 간단한 분수여야 함."
    creative: "(1) 기울기를 '직선 3x-y=0 과 평행'으로 감추기(★1) (2) 접선의 x절편·y절편이 이루는 삼각형 넓이(★2) (3) 접선과 준선의 교점·초점까지의 거리 결합(★2~3)."
```

```yaml
- id: RPM-GEO-0153
  page: 27
  vendor_label: "교과서 02-1 포물선의 접선의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    포물선 y²=4x 에 접하고 직선 y=5x-1 과 평행한 직선의 방정식.
  category: "평행 → 기울기 5 → 접선 공식 y=mx+p/m"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 접선의 방정식 — 기울기가 주어진 경우"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    평행 조건에서 기울기 5 만 가져오고(절편 -1 은 무관 · T-표기) p=1 이므로 y=5x+1/5. 두 단계지만 계산은 한 줄. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "평행 → m=5 → p=1 → y=5x+1/5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=5x+\dfrac{1}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0153.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(4 → 8·-4)와 평행 직선의 기울기(5 → 2·-3·1/2). 제약: p/m 이 간단한 분수, 주어진 직선의 절편은 답에 영향이 없어야 함."
    creative: "(1) '수직'으로 바꿔 기울기 -1/5 → y=-x/5-5 (★1) (2) 접선과 주어진 직선 사이의 거리 묻기(★2 · 평행선 거리 공식 결합) (3) 접선이 지나는 점을 주고 상수 구하기(0170 골조 ★2)."
```

```yaml
- id: RPM-GEO-0154
  page: 27
  vendor_label: "교과서 02-1 포물선의 접선의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    포물선 y²=12x 위의 점 (2, 2√6) 에서의 접선의 방정식.
  category: "접점 주어진 포물선 접선 공식 y₁y=2p(x+x₁) → 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 접선의 방정식 — 접점이 주어진 경우"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    4p=12 에서 2p=6, 2√6·y=6(x+2) 를 y 에 대해 정리하면 y=(√6/2)x+√6. 무리수 계수 정리가 한 줄이고 함정은 공식의 2p 를 4p 로 쓰는 표기(T-표기). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "4p=12 → 2√6·y=6(x+2) → y=(√6/2)x+√6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=\dfrac{\sqrt{6}}{2}x+\sqrt{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0154.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점을 포물선 위 다른 점((3,6)·(1/3,2))으로, 4p 를 바꿔도 접점이 곡선 위에 있도록 y₁²=4px₁ 검산. 제약: 계수 정리에서 근호가 남는 정도를 의도적으로 조절."
    creative: "(1) 접점을 (2,a)(a>0) 로 주고 a 부터 구하게(0174 골조 ★2) (2) 접선의 x절편·y절편 묻기 → 절편 성질(0179 골조 ★2) (3) 접선과 초점 사이의 거리 또는 초점에서 접선에 내린 수선(★2~3)."
```

```yaml
- id: RPM-GEO-0155
  page: 27
  vendor_label: "교과서 02-1 포물선의 접선의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    포물선 y²=-8x 위의 점 (-1/2, 2) 에서의 접선의 방정식.
  category: "접점 주어진 포물선 접선 공식 y₁y=2p(x+x₁) → p<0 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 접선의 방정식 — 접점이 주어진 경우"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    4p=-8 에서 2p=-4, 2y=-4(x-1/2) → y=-2x+1 한 줄. p 와 x₁ 이 모두 음수라 부호 정리가 함정(T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "4p=-8 → 2y=-4(x-1/2) → y=-2x+1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=-2x+1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0155.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p 를 다른 음수(-4·-12)로, 접점을 (-2,4)·(-1/2,-2) 등 곡선 위 점으로. 제약: y₁²=4px₁ 성립, 분수 접점을 쓰면 부호·분수 두 겹 함정."
    creative: "(1) 접점의 y좌표만 주고(x좌표는 곡선 위 조건으로) 구하게 하기(★1~2) (2) 접선의 y절편이 y₁/2 임을 확인하는 성질형(0179 ★2) (3) 접선과 x축이 이루는 각·초점을 꼭짓점으로 하는 삼각형 넓이(0178 골조 ★2)."
```

```yaml
- id: RPM-GEO-0156
  page: 27
  vendor_label: "교과서 02-1 포물선의 접선의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    포물선 x²=(3/2)y 위의 점 (3, 6) 에서의 접선의 방정식.
  category: "x²=4py 꼴 → 접점 공식 x₁x=2p(y+y₁) → 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 접선의 방정식 — 접점이 주어진 경우"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    4p=3/2 에서 2p=3/4, 3x=(3/4)(y+6) → 4x=y+6 → y=4x-6. 축이 y축인 포물선이라 공식의 x·y 역할이 바뀌는 표기 함정(T-표기)과 분수 p 정리 한 줄. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x²=4py 에서 2p=3/4 → 3x=(3/4)(y+6) → y=4x-6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=4x-6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0156.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(3/2 → 2·4·1/2)와 접점((3,6) → (2,8/3)·(-1,2/3))을 곡선 위에서. 제약: x₁²=4py₁ 성립, 분수 4p 를 쓰면 표기 함정이 유지됨."
    creative: "(1) y=(2/3)x² 이차함수 표기로 주어 x²=4py 로 고쳐 읽게 하기(★1) (2) 접선의 x절편·y절편으로 삼각형 넓이(★2) (3) 접점을 (a, ·) 문자로 두고 접선의 y절편이 -y₁ 임을 쓰는 매개변수형(★2 · Mₐ 2)."
```

```yaml
- id: RPM-GEO-0157
  page: 27
  vendor_label: "교과서 02-1 포물선의 접선의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    포물선 x²=-4y 위의 점 (-4, -4) 에서의 접선의 방정식.
  category: "x²=4py 꼴(p<0) → 접점 공식 x₁x=2p(y+y₁) → 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 접선의 방정식 — 접점이 주어진 경우"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    4p=-4 에서 2p=-2, -4x=-2(y-4) → 2x=y-4 → y=2x+4 한 줄. 아래로 열린 포물선(p<0)과 음수 접점의 부호 정리가 함정(T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "4p=-4 → -4x=-2(y-4) → y=2x+4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=2x+4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0157.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(-4 → -8·-2)와 접점((-4,-4) → (2,-1)·(4,-4)). 제약: x₁²=4py₁ 성립, p<0 유지로 부호 함정 보존."
    creative: "(1) 접점 대신 '기울기 2' 를 주는 기울기형(y=mx-pm² ★1) (2) 접선이 지나는 점 (a,0) 구하기(★1) (3) 접선과 준선 y=1, 초점 (0,-1) 을 결합해 거리 성질 확인(★2~3)."
```

### 교과서 02-2 타원의 접선의 방정식

```yaml
- id: RPM-GEO-0158
  page: 27
  vendor_label: "교과서 02-2 타원의 접선의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    타원 x²/4+y²=1 에 접하고 기울기가 -1 인 직선의 방정식.
  category: "기울기 주어진 타원 접선 공식 y=mx±√(a²m²+b²)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 접선의 방정식 — 기울기가 주어진 경우"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a²=4, b²=1, m=-1 → y=-x±√(4+1)=-x±√5 한 줄. 접선이 두 개(±)인 것을 하나만 적는 표기 함정(T-표기). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a²=4, b²=1 → y=mx±√(a²m²+b²) 에 m=-1 → y=-x±√5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=-x\pm\sqrt{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0158.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a²·b²·m 을 바꾸되 a²m²+b² 가 완전제곱이면 정수 절편(x²/9+y²/16=1, m=1 → ±5). 제약: ± 두 직선을 모두 답하게 유지."
    creative: "(1) 두 접선 사이의 거리 묻기(★2 · 평행선 거리) (2) '평행·수직 조건'으로 기울기 감추기(0160 골조 ★1) (3) 두 접선과 두 축이 이루는 마름모 넓이(★2~3)."
```

```yaml
- id: RPM-GEO-0159
  page: 27
  vendor_label: "교과서 02-2 타원의 접선의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    타원 3x²+2y²=6 에 접하고 기울기가 2 인 직선의 방정식.
  category: "표준형 x²/2+y²/3=1 변환 → 기울기 접선 공식 y=mx±√(a²m²+b²)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 접선의 방정식 — 기울기가 주어진 경우"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    양변을 6 으로 나눠 x²/2+y²/3=1 로 만든 뒤 y=2x±√(2·4+3)=2x±√11. 표준형으로 바꾸지 않고 a²=3, b²=2 로 읽으면 근호 안이 틀리는 표기 함정(T-표기). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "3x²+2y²=6 → x²/2+y²/3=1 → y=2x±√(8+3) → y=2x±√11"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=2x\pm\sqrt{11}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0159.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일반형 계수(3x²+2y²=6 → 4x²+y²=4·x²+4y²=8)와 기울기. 제약: 표준형 변환이 필요하도록 우변을 1 이 아닌 값으로, a²m²+b² 가 완전제곱이 아니어도 근호로 답하게."
    creative: "(1) 접선의 y절편 √11 을 '두 접선의 y절편의 곱' 으로 묻기(★1~2) (2) 접선이 지나는 점을 주고 타원의 장축 길이 결정(역방향 ★2~3 · I-BW d1) (3) 접점 좌표까지 묻기 → 중근 계산(★2)."
```

```yaml
- id: RPM-GEO-0160
  page: 27
  vendor_label: "교과서 02-2 타원의 접선의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    타원 x²/8+y²/3=1 에 접하고 직선 y=-(1/3)x-2 에 수직인 직선의 방정식.
  category: "수직 → 기울기 3 → 타원 접선 공식 → 근호 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 접선의 방정식 — 기울기가 주어진 경우"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    수직 조건에서 기울기 3(음의 역수 · T-부호), y=3x±√(8·9+3)=3x±√75=3x±5√3. 세 단계지만 계산은 근호 정리 한 줄. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "수직 → m=3 → y=3x±√(72+3) → y=3x±5√3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=3x\pm 5\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0160.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원 계수(8·3 → 6·2·9·4)와 수직 대상 직선의 기울기(-1/3 → -1/2·2). 제약: a²m²+b² 가 (정수)²·(소수) 꼴이면 근호 정리 함정 유지, 주어진 직선의 절편은 무관."
    creative: "(1) '수직인 직선이 점 (0,k) 를 지날 때 k' 로 바꿔 두 값 요구(★2 · ± 처리) (2) 두 접선 사이 거리(★2) (3) 수직 대신 '접선이 원점과 거리 d' 조건으로 기울기 결정(역방향 ★3)."
```

```yaml
- id: RPM-GEO-0161
  page: 27
  vendor_label: "교과서 02-2 타원의 접선의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    타원 x²/10+y²/15=1 위의 점 (2, -3) 에서의 접선의 방정식.
  category: "접점 주어진 타원 접선 공식 x₁x/a²+y₁y/b²=1 → 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 접선의 방정식 — 접점이 주어진 경우"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2x/10+(-3)y/15=1 → x/5-y/5=1 → y=x-5 한 줄. y₁=-3 의 부호(T-부호)만 조심. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x₁x/a²+y₁y/b²=1 에 (2,-3) → x/5-y/5=1 → y=x-5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=x-5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0161.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점을 타원 위 다른 점((-2,3)·(√5, √15/√2 류는 피함)으로, a²·b² 를 바꿔도 x₁²/a²+y₁²/b²=1 검산. 제약: 접선 계수가 정수·간단한 분수로 떨어지는 접점 선택."
    creative: "(1) 접점의 x좌표만 주고 y좌표(부호 둘)를 구하게 해 접선 두 개(★2 · T-부호) (2) 접선의 x절편·y절편으로 삼각형 넓이(★2) (3) 접선이 원 x²+y²=r² 에 접하도록 r 결정(★2~3 · 원과의 결합)."
```

```yaml
- id: RPM-GEO-0162
  page: 27
  vendor_label: "교과서 02-2 타원의 접선의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    타원 x²+3y²=12 위의 점 (3, 1) 에서의 접선의 방정식.
  category: "일반형 접점 공식 x₁x+3y₁y=12 (또는 표준형 변환) → 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 접선의 방정식 — 접점이 주어진 경우"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x²→x₁x, y²→y₁y 치환으로 3x+3y=12 → y=-x+4 한 줄(표준형 x²/12+y²/4=1 로 바꿔도 같음). 일반형에서 치환 규칙을 적용하는 표기(T-표기)가 유일한 함정. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x²+3y²=12 에 x²→3x, y²→1·y 치환 → 3x+3y=12 → y=-x+4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=-x+4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0162.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일반형 계수(x²+3y²=12 → 2x²+y²=6·x²+4y²=8)와 접점((3,1) → (-3,1)·(0,2)). 제약: 접점이 타원 위, 우변이 1 이 아니어야 일반형 치환 함정 유지."
    creative: "(1) 접점 (3,a) 로 주고 a 부터(★1~2) (2) 접선과 타원의 초점 사이 거리의 곱이 b² 임을 확인(성질형 ★3) (3) 접선에 평행하고 타원에 접하는 다른 접선(대칭점 접선 · I-SYM d1 ★2)."
```

### 교과서 02-3 쌍곡선의 접선의 방정식

```yaml
- id: RPM-GEO-0163
  page: 27
  vendor_label: "교과서 02-3 쌍곡선의 접선의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    쌍곡선 x²/4-y²/3=1 에 접하고 기울기가 √3 인 직선의 방정식.
  category: "기울기 주어진 쌍곡선 접선 공식 y=mx±√(a²m²-b²)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 접선의 방정식 — 기울기가 주어진 경우"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a²=4, b²=3, m²=3 → y=√3x±√(12-3)=√3x±3 한 줄. 근호 안 a²m²-b²>0 이어야 접선이 존재하는 범위 조건(T-범위)이 함정 후보이나 여기서는 9>0. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a²=4, b²=3 → y=mx±√(a²m²-b²) 에 m=√3 → y=√3x±3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=\sqrt{3}x\pm 3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0163.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a²·b²·m 을 바꾸되 a²m²-b²>0 유지(m² > b²/a² · 점근선보다 가파른 기울기). 제약: 근호 안이 완전제곱이면 정수 절편."
    creative: "(1) 기울기를 점근선 기울기(√3/2)로 주어 접선이 없음을 판단하게(★2 · T-범위 강조) (2) '접선이 존재하는 m 의 범위' 로 역방향(★2~3 · I-BW d1) (3) 두 접선과 점근선이 이루는 도형(★3)."
```

```yaml
- id: RPM-GEO-0164
  page: 27
  vendor_label: "교과서 02-3 쌍곡선의 접선의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    쌍곡선 5x²-y²=-15 에 접하고 기울기가 -2 인 직선의 방정식.
  category: "표준형 x²/3-y²/15=-1 변환 → 우변 -1 꼴 공식 y=mx±√(b²-a²m²)"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 접선의 방정식 — 기울기가 주어진 경우"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    양변을 -15 로 나눠 x²/3-y²/15=-1. 우변이 -1 인 쌍곡선은 근호 안이 b²-a²m² 로 뒤집히므로 y=-2x±√(15-12)=-2x±√3. 표준형 변환(T-표기)과 -1 꼴 공식의 부호(T-부호) 두 겹이지만 계산은 한 줄. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "5x²-y²=-15 → x²/3-y²/15=-1 → y=mx±√(b²-a²m²) 에 m=-2 → y=-2x±√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=-2x\pm\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0164.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일반형 계수(5x²-y²=-15 → 3x²-y²=-12·x²-2y²=-8)와 기울기. 제약: 우변 음수 유지(-1 꼴 함정), b²-a²m²>0 (|m| 가 점근선 기울기 √(b²/a²) 보다 작아야 함)."
    creative: "(1) 우변 +1 꼴과 -1 꼴을 한 문제에 나란히 주어 공식 선택을 비교하게(★2) (2) 접선이 존재하지 않는 m 의 범위(★2~3 · 점근선과 결합) (3) 접선과 점근선의 교점이 이루는 삼각형 넓이가 일정함(★4 · I-PD/SYM)."
```

```yaml
- id: RPM-GEO-0165
  page: 27
  vendor_label: "교과서 02-3 쌍곡선의 접선의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    쌍곡선 x²/5-y²/9=1 에 접하고 직선 3x+y-1=0 과 평행한 직선의 방정식.
  category: "일반형 직선의 기울기 -3 읽기 → 쌍곡선 접선 공식 y=mx±√(a²m²-b²)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 접선의 방정식 — 기울기가 주어진 경우"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    3x+y-1=0 의 기울기 -3(부호 · T-부호), y=-3x±√(45-9)=-3x±6 한 줄. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "평행 → m=-3 → y=-3x±√(5·9-9) → y=-3x±6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=-3x\pm 6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0165.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "쌍곡선 계수(5·9 → 4·5·9·16)와 평행 직선(3x+y-1=0 → 2x-y+3=0). 제약: a²m²-b² 가 양의 완전제곱이면 정수 절편, 직선의 상수항은 무관."
    creative: "(1) '수직'으로 바꿔 기울기 1/3 → a²m²-b²<0 이라 접선 없음을 판단(★2 · T-범위) (2) 두 접선 사이 거리(★2) (3) 평행 직선을 점근선으로 바꿔 접선이 없음을 설명(★2)."
```

```yaml
- id: RPM-GEO-0166
  page: 27
  vendor_label: "교과서 02-3 쌍곡선의 접선의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    쌍곡선 x²/3-y²/3=1 위의 점 (-2, 1) 에서의 접선의 방정식.
  category: "접점 주어진 쌍곡선 접선 공식 x₁x/a²-y₁y/b²=1 → 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 접선의 방정식 — 접점이 주어진 경우"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    -2x/3-y/3=1 → -2x-y=3 → y=-2x-3 한 줄. x₁<0 과 공식의 마이너스가 겹치는 부호 정리(T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x₁x/a²-y₁y/b²=1 에 (-2,1) → -2x/3-y/3=1 → y=-2x-3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=-2x-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0166.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점((-2,1) → (2,-1)·(-√7,2))과 a²=b²=3 → (4·4)·(2·6). 제약: x₁²/a²-y₁²/b²=1 검산, 접선 계수가 정수로 떨어지는 접점."
    creative: "(1) a²=b² 인 직각쌍곡선임을 이용해 점근선 y=±x 와 접선의 교점 사이 거리(★3) (2) 접선이 지나는 점 (k,0) 구하기(★1) (3) 접점을 (a,1) 로 감춰 a 부터(★2 · T-부호 둘)."
```

```yaml
- id: RPM-GEO-0167
  page: 27
  vendor_label: "교과서 02-3 쌍곡선의 접선의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    쌍곡선 x²/12-y²/4=-1 위의 점 (6, 4) 에서의 접선의 방정식.
  category: "우변 -1 꼴 접점 공식 x₁x/a²-y₁y/b²=-1 → 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 접선의 방정식 — 접점이 주어진 경우"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    6x/12-4y/4=-1 → x/2-y=-1 → y=x/2+1 한 줄. 우변 -1 을 그대로 두는 표기(T-표기)가 유일한 함정. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x₁x/a²-y₁y/b²=-1 에 (6,4) → x/2-y=-1 → y=x/2+1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=\dfrac{1}{2}x+1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0167.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점((6,4) → (-6,-4)·(0,2)·(6,-4))과 계수(12·4 → 3·1·8·2). 제약: 우변 -1 유지, 접점이 곡선 위(x₁²/a²-y₁²/b²=-1)."
    creative: "(1) 우변 -1 을 y²/4-x²/12=1 로 써서 주축이 y축임을 읽게 하기(★1) (2) 접선의 y절편이 초점 사이에 있는지 판단(★2 · 초점 (0,±4) 결합) (3) 접선과 점근선 y=±x/√3 의 교점(★3)."
```

```yaml
- id: RPM-GEO-0168
  page: 27
  vendor_label: "교과서 02-3 쌍곡선의 접선의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    쌍곡선 3x²-4y²=12 위의 점 (4, -3) 에서의 접선의 방정식.
  category: "일반형 접점 공식 3x₁x-4y₁y=12 (또는 표준형 변환) → 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 접선의 방정식 — 접점이 주어진 경우"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    3·4x-4·(-3)y=12 → 12x+12y=12 → y=-x+1 한 줄. y₁=-3 과 공식의 마이너스가 겹쳐 +12y 가 되는 부호(T-부호)가 함정. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "3x²-4y²=12 에 x²→4x, y²→-3y 치환 → 12x+12y=12 → y=-x+1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=-x+1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0168.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일반형 계수(3x²-4y²=12 → x²-y²=8·4x²-y²=12)와 접점((4,-3) → (-4,3)·(4,3)). 제약: 3x₁²-4y₁²=12 검산, 우변 1 이 아닌 일반형 유지."
    creative: "(1) 접점의 y좌표를 -3 대신 절댓값만 주어 접선 두 개(★2) (2) 접선과 x축·y축이 이루는 삼각형 넓이(★2) (3) 접선이 초점 (±√7,0) 에서 같은 거리에 있는지 확인(★2~3)."
```

```yaml
- id: RPM-GEO-0169
  page: 27
  vendor_label: "교과서 02-3 쌍곡선의 접선의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    쌍곡선 x²-3y²=-3 위의 점 (-3, 2) 에서의 접선의 방정식.
  category: "우변 음수 일반형 접점 공식 x₁x-3y₁y=-3 → 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 접선의 방정식 — 접점이 주어진 경우"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    -3x-3·2y=-3 → x+2y=1 → y=-x/2+1/2 한 줄. 우변 -3 을 유지하며 부호를 정리하는 것(T-부호)이 함정. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x²-3y²=-3 에 x²→-3x, y²→2y 치환 → -3x-6y=-3 → y=-x/2+1/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=-\dfrac{1}{2}x+\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0169.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(x²-3y²=-3 → 2x²-y²=-2·x²-2y²=-8)와 접점((-3,2) → (3,-2)·(0,1)). 제약: x₁²-3y₁²=-3 검산, 우변 음수 유지."
    creative: "(1) 접점을 (a,2) 로 감춰 a=±3 두 경우(★2 · T-부호) (2) 접선의 x절편·y절편 곱(★1~2) (3) 두 접점 (±3,2) 의 접선 교점이 y축 위임을 대칭으로 보이기(★2 · I-SYM d1)."
```

### 유형 01 포물선의 접선의 방정식; 기울기가 주어진 경우

```yaml
- id: RPM-GEO-0170
  page: 28
  vendor_label: "유형 01 포물선의 접선의 방정식; 기울기가 주어진 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    포물선 y²=-8x 에 접하고 직선 2x-y+1=0 과 평행한 직선이 점 (-2, k) 를 지날 때 k 의 값. 5지선다.
  category: "평행 → 기울기 2 → 접선 공식 y=mx+p/m (p<0) → 점 대입 → k"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 접선의 방정식 — 기울기가 주어진 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2x-y+1=0 의 기울기 2, 4p=-8 에서 p=-2 → 접선 y=2x-1, x=-2 대입 → k=-5. 변환이 셋(기울기 읽기·p 부호·점 대입)이지만 계산은 한 줄(T-부호 1). 통찰 없음·M_total 5 → −1 후보이나 교과서 0153 골조에 점 대입이 얹힌 유형 대표문제라 ★2 유지(★1/★2 경계).
  tier: star_2
  mechanism_primary: "평행 → m=2 → p=-2 → y=2x-1 → (-2,k) 대입 → k=-5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0170.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(-8 → 4·-12), 평행 직선의 기울기(2 → 1/2·-3), 지나는 점의 x좌표(-2 → 1·3). 제약: p/m 이 정수 또는 간단한 분수, 선택지 다섯 개를 등차(-5·-2·1·4·7)로 재배치."
    creative: "(1) '평행' 을 '수직' 으로 바꿔 기울기 부호·역수 함정 추가(0171 골조 ★2) (2) 점 (-2,k) 를 준선 x=2 위의 점으로 옮겨 준선·초점 성질과 결합(★2~3) (3) 접선과 x축·y축이 이루는 삼각형 넓이(★2)."
```

```yaml
- id: RPM-GEO-0171
  page: 28
  vendor_label: "유형 01 포물선의 접선의 방정식; 기울기가 주어진 경우"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    포물선 y²+x=0 에 접하고 직선 y=-x+3 에 수직인 직선이 ax+by+1=0 일 때 상수 a, b 에 대한 a-b 의 값. 5지선다.
  category: "y²=-x 표준형(p=-1/4) → 수직 기울기 1 → 접선 y=x-1/4 → 상수항 1 로 정규화 → a, b"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 접선의 방정식 — 기울기가 주어진 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y²=-x 에서 p=-1/4, 수직 조건으로 m=1 → y=x-1/4. 이를 ax+by+1=0 에 맞추려면 4 배 하고 전체 부호를 뒤집어 -4x+4y+1=0 → a=-4, b=4, a-b=-8. 함정은 p 읽기(T-표기)와 상수항을 +1 로 맞추는 부호 반전(T-부호). 통찰 없음·M_total 6 → 「중하」 출발 ★1~2 에서 ★2.
  tier: star_2
  mechanism_primary: "y²=-x → p=-1/4 → 수직 → m=1 → y=x-1/4 → -4x+4y+1=0 → a-b=-8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0171.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선(y²+x=0 → y²+2x=0·y²=-4x), 수직 대상 직선의 기울기(-1 → -2·1/2), 정규화 상수항(1 → 2·-1). 제약: a, b 가 정수가 되도록 p/m 의 분모와 상수항이 맞아야 하고 선택지 다섯 개가 서로 다른 정수."
    creative: "(1) '수직' → '평행' (★2 유지) (2) ax+by+1=0 대신 접선의 x절편·y절편의 곱을 묻기(★2) (3) 접선이 원 x²+y²=r² 에도 접하도록 r 을 정하기(★3 · 원의 접선 결합 I-XU d1)."
```

```yaml
- id: RPM-GEO-0172
  page: 28
  vendor_label: "유형 01 포물선의 접선의 방정식; 기울기가 주어진 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    포물선 y²=6x 와 직선 y=mx+2 가 접하도록 하는 상수 m 의 값.
  category: "접선 공식의 y절편 p/m=2 → m (또는 판별식 D=0)"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선과 직선이 접할 조건 — 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    p=3/2 이므로 기울기 m 인 접선 y=mx+p/m 의 y절편은 p/m; 이것이 2 → m=3/4 한 줄. 판별식 경로(m²x²+(4m-6)x+4=0, D=0)도 한 단계 더 들 뿐 표준. m=0 이면 y=2 가 포물선과 한 점에서 만나지만 접선이 아니므로 제외하는 경계(T-경계). 통찰 없음·M_total 5 → −1 후보이나 「중」 라벨·매개변수 m 결정형이라 ★2 유지(★1/★2 경계).
  tier: star_2
  mechanism_primary: "p=3/2 → 접선 y=mx+p/m 의 y절편 p/m=2 → m=3/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{4}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0172.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(6 → 4·8·-12)와 y절편(2 → -1·3). 제약: m=p/(y절편) 이 간단한 분수, y절편 ≠ 0 (0 이면 y=mx 는 꼭짓점을 지나 접선이 될 수 없음)."
    creative: "(1) 직선을 y=mx+n 으로 두고 '접점의 x좌표가 2' 조건을 추가해 m, n 연립(★2) (2) 직선을 y=m(x-1)+2 로 바꿔 점 (1,2) 에서 그은 접선 두 개의 기울기 곱을 묻기(외부점 접선 ★3 · I-BW d1 후보) (3) 포물선을 x²=4py 꼴로 바꿔 y=mx-pm² 공식 선택을 시험(★2)."
```

```yaml
- id: RPM-GEO-0173
  page: 28
  vendor_label: "유형 01 포물선의 접선의 방정식; 기울기가 주어진 경우"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    기울기 -1 인 직선이 두 포물선 y²=2x, x²=2y 에 동시에 접할 때 두 접점 A, B 사이의 거리.
  category: "두 포물선 각각의 기울기 -1 접선(둘 다 y=-x-1/2) → 접점 A(1/2,-1)·B(-1,1/2) → AB"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 포물선이 y=x 대칭이고 기울기 -1 직선은 y=x 에 수직 → B 는 A 의 좌표 교환 → 접점 하나만 구해도 AB=√2·|x_A-y_A|"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 포물선의 공통접선과 접점 사이의 거리"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    y²=2x(p=1/2)의 기울기 -1 접선은 y=-x-1/2 이고, x²=2y 의 기울기 -1 접선(y=mx-pm²)도 y=-x-1/2 로 같은 직선. 접점은 각각 중근에서 A(1/2,-1), B(-1,1/2), AB=3√2/2. 직접 계산이 가능하지만 두 곡선이 y=x 대칭이고 직선이 그 축에 수직이라 B 가 A 의 좌표 교환임을 쓰면 계산이 절반(SYM d1). x²=2y 쪽 공식의 축 바뀜(T-표기) 하나. 「상중」 출발 ★3 · 통찰 1·M_total 6 → ★3 유지.
  tier: star_3
  mechanism_primary: "y²=2x 기울기 -1 접선 y=-x-1/2 (x²=2y 도 동일) → 중근으로 접점 A(1/2,-1) → y=x 대칭으로 B(-1,1/2) → AB=3√2/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{3\sqrt{2}}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0173.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 포물선의 계수(y²=2x·x²=2y → y²=4x·x²=4y)는 같은 값 a 로 묶어야 하고 기울기 -1 은 대칭 골조에 필수(기울기를 바꾸면 두 접선이 달라져 공통접선이 아님). 제약: y²=ax, x²=ay 이면 접점은 (a/4, -a/2)·(-a/2, a/4), AB=3a√2/4."
    creative: "(1) 계수를 y²=4ax, x²=4by 로 다르게 두고 공통접선의 기울기 m³=-a/b 를 구하게(대칭이 깨져 두 접선식 연립 ★3~4 · I-CON d1 · a/b 가 세제곱수일 때 정수 m) (2) 접점 대신 공통접선과 두 축이 이루는 삼각형 넓이(★3) (3) 포물선 하나를 원 x²+y²=r² 로 바꿔 공통접선(★4 · 접선 공식 두 종류 결합 I-XU d1)."
```

### 유형 02 포물선의 접선의 방정식; 접점의 좌표가 주어진 경우

```yaml
- id: RPM-GEO-0174
  page: 28
  vendor_label: "유형 02 포물선의 접선의 방정식; 접점의 좌표가 주어진 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    포물선 y²=6x 위의 점 (2, a)(a>0) 에서의 접선의 기울기를 b, y절편을 c 라 할 때 abc 의 값. 5지선다.
  category: "곡선 위의 점 → a=2√3 → 접점 공식 y₁y=2p(x+x₁) → 기울기·절편 읽기 → 곱"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 접선의 방정식 — 접점이 주어진 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a²=12, a>0 에서 a=2√3. 접선 2√3·y=3(x+2) → y=(√3/2)x+√3 이므로 b=√3/2, c=√3, abc=3√3. 접점을 먼저 확정하는 한 단계가 교과서 0154 골조 위에 얹힌 형태이고 무리수 정리는 한 줄(T-부호: a>0 선택). 통찰 없음·M_total 5 → −1 후보이나 유형 대표문제·두 변환이라 ★2 유지(★1/★2 경계).
  tier: star_2
  mechanism_primary: "a²=12, a>0 → a=2√3 → 2√3·y=3(x+2) → b=√3/2, c=√3 → abc=3√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0174.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(6 → 8·12)와 접점의 x좌표(2 → 3·1/2). 제약: a=√(4p·x₁) 이 √k 꼴로 정리되고 abc 가 선택지처럼 √3 의 배수로 떨어지도록 4p·x₁ 을 3·(완전제곱) 으로."
    creative: "(1) a<0 으로 바꿔 부호 함정 이동(★2) (2) 접선의 x절편까지 물어 0179 절편 성질(x절편 -x₁ · y절편 y₁/2)과 연결(★2) (3) 접선과 초점 F 사이의 거리 또는 F 에서 접선에 내린 수선의 발이 y축 위임을 확인(★3 · 성질형)."
```

```yaml
- id: RPM-GEO-0175
  page: 28
  vendor_label: "유형 02 포물선의 접선의 방정식; 접점의 좌표가 주어진 경우"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    포물선 x²=3y 위의 점 (-√3, 1) 에서의 접선이 점 (a, 3) 을 지날 때 a 의 값.
  category: "x²=4py 접점 공식 x₁x=2p(y+y₁) → 접선 → 점 대입 → a"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 접선의 방정식 — 접점이 주어진 경우"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    4p=3 에서 -√3x=(3/2)(y+1) → y=-(2√3/3)x-1. (a,3) 대입: 4=-(2√3/3)a → a=-2√3. 공식 한 줄에 대입 한 줄. x²=4py 꼴의 공식 축 바뀜(T-표기) 하나. 통찰 없음·M_total 4 → 「중하」 출발 ★1~2 에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "4p=3 → -√3x=(3/2)(y+1) → y=-(2√3/3)x-1 → (a,3) 대입 → a=-2√3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-2\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0175.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점((-√3,1) → (√3,1)·(3,3)·(-2,4/3)), 지나는 점의 y좌표(3 → 5·-1), 4p(3 → 4·1/2). 제약: 접점이 x²=4py 위에 있고 a 가 √3 의 유리수 배로 떨어지도록 접점 x좌표를 √3 배수로."
    creative: "(1) 지나는 점을 (3, a) 로 바꿔 y좌표 구하기(★1) (2) 접선의 x절편·y절편으로 삼각형 넓이(★2) (3) 역방향: '점 (a,3) 에서 포물선에 그은 접선의 접점' 으로 바꾸면 외부점 접선 → 이차방정식 두 근(★3 · I-BW d1)."
```

```yaml
- id: RPM-GEO-0176
  page: 28
  vendor_label: "유형 02 포물선의 접선의 방정식; 접점의 좌표가 주어진 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    포물선 x²=2y 와 직선 y=-x+4 의 두 교점 A, B 에서의 접선의 기울기의 곱.
  category: "연립 → x²+2x-8=0 → 교점 x=2, -4 → 각 접점의 접선 기울기 x₁/(2p) → 곱"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선과 직선의 교점에서의 접선 — 기울기의 곱"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x²=2(-x+4) → x²+2x-8=0, x=2 또는 -4. x²=4py(p=1/2) 위의 점 (x₁,y₁) 의 접선 x₁x=2p(y+y₁) 의 기울기는 x₁/(2p)=x₁ 이므로 기울기는 2, -4, 곱 -8. 두 근이 정수라 직접 구해도 되고, 기울기 곱 = 근의 곱 = -8 로 근과 계수 관계를 쓰면 교점 없이 끝난다(선택적 단축이라 통찰로 세지 않음). 함정은 기울기를 x₁/(2p) 가 아닌 x₁ 로 외우는 표기(T-표기 · 여기서는 2p=1 이라 우연히 같음). 통찰 없음·M_total 5 → 「중」 ★2 유지(★1/★2 경계).
  tier: star_2
  mechanism_primary: "x²=2(-x+4) → x²+2x-8=0 → x=2, -4 → 접선 기울기 x₁/(2p)=x₁ → 곱 2·(-4)=-8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-8$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0176.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선(y=-x+4 → y=x+3·y=2x+5)과 4p(2 → 4). 제약: 교점 x 의 이차방정식이 정수근이면 ★2, 무리근이면 근과 계수 관계가 필수가 되어 ★3 으로 오름."
    creative: "(1) 두 근을 무리수로 만들어 기울기의 곱을 근과 계수 관계로만 구하게(★3 · I-RT d1: 접선 기울기 곱 → 근의 곱) (2) 두 접선의 교점을 묻기 → 교점의 y좌표가 -(직선 y절편) 인 극선 성질(★3~4) (3) 기울기의 곱이 -1 이 되는 직선의 y절편을 구하게 하면 초점을 지나는 현(0180 골조 ★3 · I-EQV d1)."
```

```yaml
- id: RPM-GEO-0177
  page: 28
  vendor_label: "유형 02 포물선의 접선의 방정식; 접점의 좌표가 주어진 경우"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    포물선 y²=-18x 위의 점 (k, -3k)(k≠0) 에서의 접선과 평행하고 점 (3, 1) 을 지나는 직선 y=mx+n 에 대한 m+n 의 값.
  category: "곡선 위의 점 → k=-2 → 접점 (-2,6) 의 접선 → 기울기 -3/2 → 평행 직선 → n → m+n"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수 접점의 포물선 접선과 평행한 직선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    9k²=-18k, k≠0 에서 k=-2, 접점 (-2,6). 4p=-18 이므로 6y=-9(x-2) → 기울기 -3/2. 이 기울기로 (3,1) 을 지나면 n=11/2, m+n=4. 접점을 매개변수로 확정하는 단계(k=0 기각 · T-범위)와 p<0 부호(T-부호)가 함정이고 계산은 분수 정리 수준. 통찰 없음·M_total 7 → 「중」 출발 ★2 유지(서술형 태그 +0).
  tier: star_2
  mechanism_primary: "9k²=-18k, k≠0 → k=-2 → 접점 (-2,6) → 접선 6y=-9(x-2) → 기울기 -3/2 → (3,1) 지나는 평행선 y=-3x/2+11/2 → m+n=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0177.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(-18 → -8·12), 접점 매개변수화((k,-3k) → (k,2k)·(k,-k)), 지나는 점 (3,1). 제약: 9k²=-18k 처럼 k 가 정수로 떨어지고 m+n 이 정수가 되도록 지나는 점을 조절."
    creative: "(1) '평행' → '수직' 으로(★2) (2) 접점을 (k,-3k) 대신 '초점에서 거리가 9/2 인 점' 으로 감춰 포물선 정의와 결합(★3 · 01 단원 정의 I-XU d1) (3) 서술형답게 접선이 준선 x=9/2 와 만나는 점까지 물어 두 단계(★3)."
```

```yaml
- id: RPM-GEO-0178
  page: 29
  vendor_label: "유형 02 포물선의 접선의 방정식; 접점의 좌표가 주어진 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    포물선 y²=-12x 의 초점 F 와 점 P(-3, 6) 에서의 접선이 x축과 만나는 점 Q 에 대해 삼각형 PFQ 의 넓이. 5지선다.
  category: "초점 F(-3,0) → 접점 공식 → 접선 y=-x+3 → Q(3,0) → 밑변 FQ·높이 6 → 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선 접선·초점·절편이 이루는 삼각형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    4p=-12 에서 F(-3,0). 6y=-6(x-3) → y=-x+3, Q(3,0). F, Q 가 x축 위이므로 밑변 FQ=6, 높이는 P 의 y좌표 6 → 넓이 18. P 가 초점 바로 위(통경의 끝점)라 PF 가 x축에 수직인 것을 보면 더 빠르지만 필수는 아님. 함정은 p<0 부호(T-부호). 통찰 없음·M_total 5 → 「중」 ★2 유지(★1/★2 경계).
  tier: star_2
  mechanism_primary: "F(-3,0) → 접선 6y=2(-3)(x-3) → y=-x+3 → Q(3,0) → 넓이 (1/2)·6·6=18"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0178.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(-12 → -8·16)와 접점(통경의 끝점 (p, ±2p) 로 두면 PF ⊥ x축 유지). 제약: 접점을 통경 밖으로 옮기면 높이는 여전히 P 의 y좌표지만 Q=(-x₁,0) 이라 FQ=|x₁-p| 로 바뀜, 선택지 다섯 개 정수."
    creative: "(1) 접점을 (-12,12) 처럼 통경 밖으로 옮기고 FP=FQ(초점과 접점·x절편의 등거리 성질)를 이용해 이등변삼각형으로 풀게(★3 · I-EQV d1) (2) 넓이 대신 각 PQF 의 크기(45°)를 묻기(★2) (3) 접선과 준선의 교점 R 을 추가해 사각형 PFRQ 류의 넓이(★3)."
```

```yaml
- id: RPM-GEO-0179
  page: 29
  vendor_label: "유형 02 포물선의 접선의 방정식; 접점의 좌표가 주어진 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    포물선 y²=4px(p>0) 위의 점 P(p, 2p) 에서의 접선이 x축, y축과 만나는 점 A, B 에 대해 PB/AB 의 값. 그림(오른쪽으로 열린 포물선 · A 음의 x축 · B 양의 y축).
  category: "접점 공식 → y=x+p → A(-p,0)·B(0,p) → PB=AB=p√2 → 1"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선 접선의 절편 성질(x절편 -x₁ · y절편 y₁/2)과 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2p·y=2p(x+p) → y=x+p. A(-p,0), B(0,p), PB=√(p²+p²)=p√2, AB 도 p√2 → 비 1. 접선의 y절편이 접점 y좌표의 절반(B 가 AP 의 중점)이라는 일반 성질의 구체 사례. 문자 p 가 그대로 남는 매개변수 계산(Mₐ 2)이고 계산은 한 줄, 그림 라벨 읽기(T-표기). 통찰 없음·M_total 5 → 「중」 ★2 유지.
  tier: star_2
  mechanism_primary: "접선 2p·y=2p(x+p) → y=x+p → A(-p,0), B(0,p) → PB=AB=p√2 → 비 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0179.png"
  latex: latex-bank/rpm-geo/items/0179.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점을 (p,2p) → (4p,4p)·(p/4,p) 로 바꿔도 B 가 AP 의 중점이므로 비는 항상 1(답이 변하지 않는 성질형). 제약: 그림 라벨(A 음의 x축·B 양의 y축·P 제1사분면) 고정, p>0 유지."
    creative: "(1) 비 대신 '삼각형 OAB 의 넓이가 8 일 때 p' 로 역방향(★2 · I-BW d1 후보) (2) 접점을 일반 (x₁,y₁) 로 두고 PB/AB=1 임을 보이는 증명형(★3 · 일반화 Mₐ 3) (3) 초점 F(p,0) 를 추가해 사각형 AFPB 가 마름모임을 보이거나 각 AFP 를 묻기(★3 · I-SYM d1)."
```

```yaml
- id: RPM-GEO-0180
  page: 29
  vendor_label: "유형 02 포물선의 접선의 방정식; 접점의 좌표가 주어진 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    포물선 y²=16x 위의 두 점 P(a, b), Q(1/4, -2) 에서의 접선이 서로 수직일 때 a+b 의 값.
  category: "접점 공식 → 기울기 2p/y₁ → Q 기울기 -4 · P 기울기 8/b → 곱 -1 → b=32 → a=b²/16 → 합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선 위 두 점에서의 접선이 수직일 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    4p=16, 접점 (x₁,y₁) 의 접선 y₁y=8(x+x₁) 의 기울기는 8/y₁. Q 에서 -4, P 에서 8/b, 수직이면 (8/b)(-4)=-1 → b=32, a=32²/16=64 → 96. 기울기를 y₁ 로 표현해 두는 매개변수 처리(Mₐ 2)와 4p 읽기(T-표기)뿐. 통찰 없음·M_total 6 → 「중」 ★2 유지.
  tier: star_2
  mechanism_primary: "접선 기울기 2p/y₁=8/y₁ → Q: -4, P: 8/b → 수직 (8/b)(-4)=-1 → b=32 → a=64 → a+b=96"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$96$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0180.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(16 → 4·8)와 Q 의 y좌표(-2 → -1·-4). 제약: Q 가 곡선 위(x_Q=y_Q²/(4p)), b=-4p²/y_Q 가 정수, a=b²/(4p) 정수."
    creative: "(1) '수직' 을 '두 접선의 교점이 준선 위에 있다' 로 바꾸면 같은 사실(y₁y₂=-4p²)의 다른 표현 → I-EQV d1 ★3 (2) 두 접선의 교점 좌표까지 묻기(★3) (3) '두 접선이 수직이면 현 PQ 가 초점을 지남' 을 일반 접점으로 보이기(★4 · Mₐ 3 · I-EQV d2)."
```

```yaml
- id: RPM-GEO-0181
  page: 29
  vendor_label: "유형 02 포물선의 접선의 방정식; 접점의 좌표가 주어진 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    포물선 y²=8x 위의 점 P(a, b) 에서의 접선이 x축과 만나는 점 Q 에 대해 PQ=2√3 일 때 a²+b² 의 값. 5지선다.
  category: "접점 공식 → Q(-a,0) → PQ²=4a²+b²=12 → b²=8a 대입 → a=1 (a=-3 기각) → a²+b²"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선 접선의 절편 성질(x절편 -x₁ · y절편 y₁/2)과 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    by=4(x+a) 에서 x절편은 -a → Q(-a,0). PQ²=(2a)²+b²=12 에 b²=8a 를 넣으면 a²+2a-3=0, a=1 (a=-3 은 b²=8a<0 이라 기각). b²=8 → a²+b²=9. 미지 접점 (a,b) 를 그대로 끌고 가는 매개변수 처리(Mₐ 2)와 x절편 부호(T-표기)·a≥0 기각(T-범위)이 함정. 기각은 표준 범위 검사라 VF 로 세지 않음. 통찰 없음·M_total 7 → 「중」 ★2 유지.
  tier: star_2
  mechanism_primary: "접선 by=4(x+a) → Q(-a,0) → PQ²=4a²+b²=12, b²=8a → a²+2a-3=0 → a=1 → a²+b²=9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0181.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p(8 → 4·12)와 PQ 길이(2√3 → √5·2√5). 제약: 4a²+4pa-PQ²=0 이 양의 유리근 하나와 기각되는 음근 하나를 갖도록, 선택지 다섯 개 연속 정수."
    creative: "(1) PQ 대신 삼각형 OPQ 의 넓이 조건으로 바꾸기(★2) (2) 초점 F 를 넣어 FP=FQ 성질로 PQ 를 다시 표현하게(★3 · I-EQV d1) (3) 'PQ 의 최솟값' 처럼 조건을 최적화로 바꾸면 a 에 대한 함수 최소(★3~4 · 미분 결합 I-XU d1)."
```

## 표본 판정 요약 (31문)

- ★ 분포: ★1 20 · ★2 10 · ★3 1 · ★4 0 · ★5 0
- 통찰형 1(0173 · I-SYM d1) · 절차형 30 · premium 0
- type_hint 상위: 「포물선의 접선의 방정식 — 접점이 주어진 경우」 6 · 「포물선의 접선의 방정식 — 기울기가 주어진 경우」 5 · 「쌍곡선의 접선의 방정식 — 접점이 주어진 경우」 4 · 「타원의 접선의 방정식 — 기울기가 주어진 경우」 3 · 「쌍곡선의 접선의 방정식 — 기울기가 주어진 경우」 3 · 「타원의 접선의 방정식 — 접점이 주어진 경우」 2 · 「포물선 접선의 절편 성질(x절편 -x₁ · y절편 y₁/2)과 길이」 2 · 나머지 6 유형은 1 문씩(접할 조건 미정계수 0172 · 두 포물선 공통접선 0173 · 교점에서의 접선 기울기 곱 0176 · 매개변수 접점+평행선 0177 · 접선·초점·절편 삼각형 넓이 0178 · 두 접선의 수직 조건 0180)
- 구역별: 교과서 02-1 7문(★1 7) · 02-2 5문(★1 5) · 02-3 7문(★1 7) · 유형 01 4문(★2 3 · ★3 1) · 유형 02 8문(★1 1 · ★2 7)
- target_cohort: 하위권 19 · 중하위권 11 · 중상위권 1
- M_total 분포: 4 → 19문 · 5 → 7문 · 6 → 3문 · 7 → 2문
- 그림: 1문(`crop:fig-0179.png`)
- 전사 답 확인 필요: 없음(31문 모두 재계산 결과가 전사 answer 와 일치)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 이 범위에 2단 이상 어긋난 문항은 없고, 아래는 「통찰 0·M_total ≤ 5 → −1 후보」 규칙과 벤더 라벨(대표문제·중)이 갈린 ★1/★2 경계의 기록이다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-GEO-0170 | 유형 01 대표문제이나 교과서 0153 골조 + 점 대입 한 단계(M_total 5·통찰 0). −1 후보였으나 대표문제라 ★2 유지 | ★2 / ★1 |
| RPM-GEO-0172 | 「중」 라벨이나 p/m=2 → m 한 줄(M_total 5·Mₐ 2 가 전부). 매개변수 결정형이라 ★2 유지 | ★2 / ★1 |
| RPM-GEO-0174 | 유형 02 대표문제이나 접점 확정 + 공식(M_total 5·통찰 0). 대표문제라 ★2 유지 | ★2 / ★1 |
| RPM-GEO-0176 | 「중」 라벨이나 정수근이라 직접 계산으로 끝남(M_total 5). 무리근 변형이면 근과 계수 관계가 필수가 되어 ★3 — 원본은 ★2 유지 | ★2 / ★1 |
| RPM-GEO-0178 | 「중」 라벨이나 접선·x절편·밑변×높이 세 단계(M_total 5). ★2 유지 | ★2 / ★1 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 세 곡선 × (기울기가 주어진 경우 / 접점이 주어진 경우) 여섯 기본 유형이 교과서 19문 전부와 유형 01·02 의 5문을 덮는다 — 「포물선 — 기울기」(0151~0153·0170·0171) · 「포물선 — 접점」(0154~0157·0174·0175) · 「타원 — 기울기」(0158~0160) · 「타원 — 접점」(0161·0162) · 「쌍곡선 — 기울기」(0163~0165) · 「쌍곡선 — 접점」(0166~0169).
- 따로 세울 유형: (a) 여섯 기본 유형은 RPM 유형 01·02(포물선)와 다음 파트의 유형 03~06(타원·쌍곡선)에 그대로 대응하므로 카탈로그에서도 곡선별·조건별 6개로 두고 base ★ 는 「교과서 소문항(공식 한 줄) ★1 / 유형 응용(평행·수직 변환 + 점 대입·정규화) ★2」 두 층으로 나눌 것. (b) 「포물선 접선의 절편·초점 성질」(0178·0179·0181 — x절편 -x₁ · y절편 y₁/2 · FP=FQ · B 가 AP 의 중점) — 포물선 특유의 성질을 쓰는 유형으로 base ★2, 성질을 일반 접점으로 증명하게 하면 ★3. (c) 「두 접선의 수직·교점 조건」(0180 — y₁y₂=-4p² · 교점이 준선 위 · 현이 초점 통과) — base ★2~3, 다음 파트의 「두 접선의 교점」 유형과 합쳐 세울 것. (d) 「공통접선」(0173) — base ★3, 대칭 골조(같은 계수)면 ★3·계수가 다르면 ★3~4.
- 통합해도 될 유형: 0172 「접할 조건 미정계수」 는 기울기형 접선 공식의 역방향 발문이라 (a) 「포물선 — 기울기」 유형의 ★2 층으로 흡수 가능. 0176(교점에서의 접선 기울기 곱)·0177(매개변수 접점 + 평행선)은 「포물선 — 접점」 유형에 「접점을 먼저 확정하는 단계」가 얹힌 형태라 별도 유형보다 같은 유형의 ★2 층 서브 골조(접점 확정: 곡선 위 조건 / 직선과의 교점 / 매개변수)로 두면 된다. 교과서의 평행·수직 조건 문항(0153·0160·0165)은 기울기 유형의 소문항 형태이지 별도 유형이 아니다.
- 같은 골조·다른 ★: 0154(교과서 ★1)와 0174(유형 대표 ★2)는 「접점 공식 → 기울기·절편 읽기」 골조가 같고, 차이는 접점의 y좌표를 곡선 위 조건으로 먼저 구하는 한 단계(a>0 부호 선택)뿐이다. 0153(교과서 ★1)과 0170(유형 대표 ★2)도 「평행 → 기울기 → 공식」 골조가 같고 점 대입 한 단계만 다르다. 카탈로그에서 base ★ 를 정할 때 이 쌍들을 같은 유형의 ★1·★2 층으로 두면 된다.
