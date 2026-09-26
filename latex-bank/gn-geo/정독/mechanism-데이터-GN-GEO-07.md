---
name: mechanism-데이터-GN-GEO-07
description: 개념원리 기하 07 쌍곡선의 접선의 방정식(1/1 · 71~77쪽 · 26문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 기하 (22개정) · 전사본 latex-bank/gn-geo
  section: 07 쌍곡선의 접선의 방정식
  unit_code: GEO-07
  part: "1/1"
  extract_range: "71~77쪽 · 71-136~77-158"
  total_problems: 26
  unit_total: 26
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·예제 태그·연습문제 STEP)를 출발점으로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 이 파일의 ±1 규칙 — (a) 통찰 0 · M_total ≤ 5 면 −1 후보(단 필수 예제는 출발점 유지), (b) 통찰 2개 이상 또는 depth 3 이면 +1, (c) 출발점 ★2 이하에서 통찰 1개이면서 M_total ≥ 7 이거나 depth 2 통찰이 풀이의 진입 관문이면 +1. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-geo/items/<id>.tex
  image_source: latex-bank/gn-geo/figures/ (이 범위 그림 2문 · fig-77-157.png · fig-77-158.png)
---

# 개념원리 기하 · 07 쌍곡선의 접선의 방정식 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 기하 71~77쪽, 07단원 「쌍곡선의 접선의 방정식」 26문항 전수를 다룬다. 구역은 개념원리 익히기 3문, 필수·발전 예제 구역 11문(필수 예제 `쪽-eN` 3문 + 확인체크 8문), 특강(음함수의 미분법) 2문, 연습문제 STEP 1 5문, STEP 2 3문, 실력 UP 2문이다. 개념원리 고등의 난이도 신호는 구역과 태그에 들어 있어 개념원리 익히기 → ★1, 필수 예제·확인체크·특강 → ★2, STEP 1 → ★2, STEP 2 → ★3, 실력 UP → ★4 를 출발점으로 삼고 M_total 과 통찰로 ±1 조정했다.

단원의 도구는 사실상 세 개뿐이다 — (1) 기울기가 주어졌을 때의 접선 `y=mx±√(a²m²−b²)`(우변이 −1 인 쌍곡선은 `±√(b²−a²m²)`), (2) 곡선 위의 점에서의 접선(`x²→x₁x`, `y²→y₁y` 치환), (3) 곡선 밖의 점에서 그은 접선(기울기를 미지수로 두거나 접점을 미지수로 두고 통과 조건을 일차식으로 옮기기). 앞 14문은 이 세 도구의 반복 숙달이고, 연습문제 후반과 실력 UP 은 접선을 구한 뒤 절편·점근선·법선 방향·넓이비로 도형 조건을 얹는 결합형이다. 이 단원에서 반복해 등장하는 진짜 통찰은 「곡선 밖의 점을 지난다 → 접점 좌표의 일차식」(I-EQV)과 「접선을 좌표 대신 거리·대칭·넓이로 옮기기」(I-RT·I-SYM)다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다. 이 단원 변형에서 가장 자주 깨지는 제약은 (1) 우변이 1 인지 −1 인지에 따라 접선 조건식과 초점의 축이 통째로 바뀌는 것, (2) 접점으로 쓰는 좌표가 실제로 곡선 위의 점이어야 하는 것, (3) 기울기가 점근선 기울기 ±b/a 에 가까우면 근호 안이 음수가 되어 접선이 존재하지 않는 것 세 가지다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-GEO-71-136
  page: 71
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴⑵ 기울기가 주어진 쌍곡선의 접선 구하기. ⑴ x²/5−y²/4=1 에 접하고 기울기가 −1 인 직선, ⑵ x²/16−y²/9=−1 에 접하고 기울기가 1/4 인 직선.
  category: "우변 부호에 맞는 기울기 접선 공식에 a², b², m 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 쌍곡선의 접선의 방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 y=mx±√(a²m²−b²) 와, 우변이 −1 인 쌍곡선의 y=mx±√(b²−a²m²) 를 한 번씩 확인하는 문항. 두 식의 구별이 유일한 함정(T-표기)이고 계산은 한 줄. 통찰 없음·M_total 4 → 익히기 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: "기울기 m 확인 → 우변 부호에 맞는 접선 공식 선택 → a², b², m 대입 → y=mx±k"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $y=-x\pm1$ ⑵ $y=\dfrac{1}{4}x\pm2\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/71-136.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a², b², m 을 바꿀 수 있다. 제약: 우변 1 이면 a²m²−b²>0, 우변 −1 이면 b²−a²m²>0 이어야 접선이 존재하고(기울기가 점근선 기울기 ±b/a 이면 접선 없음), 근호가 정리되는 조합을 골라야 답이 간단한 무리수가 된다."
    creative: "(1) 접선이 존재하지 않는 기울기의 범위를 묻기(★2 · 점근선과의 관계 통찰) (2) 두 접선의 y절편의 곱·차나 두 접선 사이의 거리를 묻기(72-141 골조 ★2) (3) 기울기를 직접 주지 않고 다른 직선과 평행·수직, 또는 x축과 이루는 각으로 주기(72-e7·72-139 골조 ★2)."
```

```yaml
- id: GN-GEO-71-137
  page: 71
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 쌍곡선 위의 점에서의 접선 구하기. 표준형 ⑴ x²/8−y²/2=1 위의 (−4,−√2), ⑵ x²/2−y²/4=−1 위의 (0,2) 와 일반형 ⑶ x²−y²=3 위의 (2,1), ⑷ 2x²−9y²=−1 위의 (−2,1).
  category: "곡선식의 x²→x₁x, y²→y₁y 치환 → 접점 좌표 대입 → 직선 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선 위의 점에서의 접선의 방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표준형 두 개와 일반형 두 개로 치환 규칙이 우변 값·계수와 무관하게 같음을 확인하는 문항. ⑵ 는 꼭짓점이라 접선이 수평선 y=2 가 되는 것이 유일한 주의점. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x²→x₁x, y²→y₁y 치환 → 접점 (x₁,y₁) 대입 → y에 대해 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $y=\dfrac{\sqrt{2}}{2}x+\sqrt{2}$ ⑵ $y=2$ ⑶ $y=2x-3$ ⑷ $y=-\dfrac{4}{9}x+\dfrac{1}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/71-137.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선 계수와 접점을 함께 바꾼다. 제약: 접점은 반드시 곡선 위의 점이어야 하므로 x₁²/a²−y₁²/b²=±1 을 만족하는 정수·간단한 무리수 쌍을 먼저 고른다. 꼭짓점을 주면 접선이 수평·수직이 되고, y₁=0 인 접점은 기울기가 정의되지 않는 수직 접선이 된다."
    creative: "(1) 접선의 기울기나 y절편만 묻기(★1) (2) 접선의 두 절편으로 삼각형의 넓이를 묻기(73-144 골조 ★2) (3) 접점을 (a,b) 로 두고 접선이 특정 점을 지나게 하기(73-e8 골조 ★2) (4) 접선에 수직인 직선을 묻기(73-142 골조 ★2)."
```

```yaml
- id: GN-GEO-71-138
  page: 71
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    점 (3,4) 에서 쌍곡선 x²/9−y²/4=1 에 그은 접선을 구하는 과정의 빈칸 채우기. 접점을 (x₁,y₁) 로 두고 접선식 → (3,4) 통과 조건 ㉠ → 접점이 곡선 위라는 조건 ㉡ → 두 접점 → 접선 두 개(하나는 수직접선 x=3).
  category: "접점 미지수 → 통과 조건과 곡선 위 조건 연립 → 접점 두 개 → 접선 두 개(수직접선 포함)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선 밖의 점에서 그은 접선의 방정식(접점 미지수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    골조 자체는 74-e9·76-153 과 같은 「밖의 점에서 그은 접선」이지만 빈칸이 경로 전체(접선식 → ㉠ → ㉡ → 접점 → 접선)를 안내하므로 각 칸은 한 단계 채우기다. M_total 7 로 익히기 구역치고 무겁지만 학생이 선택할 여지가 없어 통찰 라벨 0 · ★1 유지. [분류 이슈] 비계를 걷어내면 ★3 골조라 벤더 ★1 과 1단 어긋남.
  tier: star_1
  mechanism_primary: "접점 (x₁,y₁) → 접선 x₁x/9−y₁y/4=1 → (3,4) 대입 ㉠ → 곡선 위 조건 ㉡ 연립 → 접점 (−5,−8/3)·(3,0) → 접선 y=(5/6)x+3/2 와 x=3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$x_1x$, $y_1y$, $x_1$, $-5$, $-\dfrac{8}{3}$, $0$, $\dfrac{5}{6}x+\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/71-138.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "외부 점과 곡선 계수. 제약: 점이 두 접선을 갖는 영역(쌍곡선 바깥)에 있어야 하고, 외부 점의 x좌표가 꼭짓점의 x좌표와 같으면 지금처럼 수직접선이 한 개 섞인다. 연립이 유리수로 떨어지는 조합을 고르지 않으면 빈칸형으로 쓸 수 없다."
    creative: "(1) 빈칸을 없애고 접선을 모두 구하게 하면 ★3 (2) 두 접선의 기울기의 곱·합을 묻기(74-e9 ★2) (3) 두 접점을 잇는 선분의 길이나 삼각형의 넓이로 확장(74-146·76-153 ★2~3) (4) 수직접선이 생기지 않는 외부 점으로 바꿔 기울기 미지수 풀이와 비교하게 하기."
```

### 필수·발전 예제

```yaml
- id: GN-GEO-72-e7
  page: 72
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    쌍곡선 x²−2y²=2 에 접하고 직선 x+2y−1=0 에 수직인 직선의 방정식.
  category: "수직 조건으로 기울기 결정 → 표준형 변환 → 기울기 접선 공식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 쌍곡선의 접선의 방정식(수직·평행 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    기울기를 직접 주지 않고 수직 조건으로 한 겹 감싼 필수 예제. 주어진 식을 x²/2−y²=1 로 정리하는 단계가 하나 더 붙지만 나머지는 공식 대입. 통찰 없음·M_total 5 로 −1 후보지만 유형 도입 예제라 필수 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "x+2y−1=0 의 기울기 −1/2 → 수직 기울기 2 → x²/2−y²=1 로 정리 → y=2x±√(2·4−1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=2x\pm\sqrt{7}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/72-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선 계수와 기준 직선의 기울기. 제약: 표준형으로 고칠 때 우변을 1 로 맞추면 a², b² 이 정수·간단한 분수가 되어야 하고, 수직 기울기 m 에 대해 a²m²−b²>0 이어야 한다."
    creative: "(1) 수직 대신 평행·x축과 이루는 각(72-139)·다른 곡선의 접선과 같은 기울기로 조건을 바꾸기(★2) (2) 두 접선 중 특정 점을 지나는 쪽을 고르게 해 사후 기각을 넣기(76-150 골조 ★2) (3) 접선이 만드는 두 평행선 사이의 거리를 묻기(72-141 ★2)."
```

```yaml
- id: GN-GEO-72-139
  page: 72
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    쌍곡선 2x²−y²−4=0 에 접하고 x축의 양의 방향과 이루는 각의 크기가 60° 인 직선의 방정식.
  category: "각 → 기울기 tan 60°=√3 → 표준형 변환 → 접선 공식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 쌍곡선의 접선의 방정식(각으로 준 기울기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    72-e7 과 같은 골조이고 기울기를 각으로 준 것만 다르다. 2x²−y²=4 를 x²/2−y²/4=1 로 고치는 단계가 유일한 추가 부담. 통찰 없음·M_total 5 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "tan 60°=√3 → x²/2−y²/4=1 → y=√3x±√(2·3−4)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=\sqrt{3}x\pm\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/72-139.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각은 30°·45°·60°·120°·135° 중에서, 곡선 계수는 표준형으로 고쳤을 때 a²m²−b²>0 이 되도록. 제약: 90° 는 기울기가 정의되지 않아 공식을 못 쓰고(수직 접선은 꼭짓점에서만) 점근선 기울기와 같은 각도 접선이 없다."
    creative: "(1) 접선이 존재하도록 하는 각의 범위를 묻기(★3 · 점근선 기울기와의 비교 I-EQV) (2) 두 접선과 x축이 이루는 삼각형의 넓이(★3) (3) 각을 주고 접선이 지나는 정점을 역으로 찾게 하기(★3)."
```

```yaml
- id: GN-GEO-72-140
  page: 72
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    직선 y=x+1 이 쌍곡선 x²/a−y²/5=−1 에 접할 때, 이 쌍곡선의 두 초점 사이의 거리(a 는 상수).
  category: "접선 조건으로 미정 상수 결정 → 세로 쌍곡선의 c²=a²+b² → 2c"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선 조건으로 쌍곡선의 미정 상수를 정한 뒤 초점 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선 조건 n²=b²−a²m² 을 역으로 써서 상수를 정하는 표준 미정계수 절차(통찰 인정 안 함). 우변이 −1 이라 초점이 y축 위에 있다는 것이 유일한 함정(T-표기). M_total 6 → 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "y=x+1 을 접선 조건에 넣어 1=5−a → a=4 → y²/5−x²/4=1 → c=3 → 두 초점 사이의 거리 6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/72-140.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 기울기·y절편과 분모 5 를 바꿀 수 있다. 제약: 접선 조건에서 나오는 a 가 양수여야 쌍곡선이 되고(음수면 타원·허곡선), c²=a²+b² 이 완전제곱이면 답이 정수가 된다."
    creative: "(1) 초점 대신 점근선의 방정식·주축의 길이·이심률을 묻기(★2) (2) 접한다는 조건을 판별식으로 직접 풀게 하기(★2 · 계산만 늘어남) (3) 우변을 1 로 바꿔 초점의 축이 달라지는 것을 비교하게 하기(★2) (4) 접점의 좌표까지 묻기(★3)."
```

```yaml
- id: GN-GEO-72-141
  page: 72
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    쌍곡선 x²/9−y²/16=1 에 접하고 기울기가 3 인 두 직선 사이의 거리.
  category: "기울기 접선 두 개 → 평행한 두 직선 사이의 거리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 같은 두 접선 사이의 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선 y=3x±√65 를 구한 뒤 평행선 거리 공식 |n₁−n₂|/√(m²+1) 을 쓰는 두 단계. 두 도구 모두 표준이라 통찰 라벨 없음. 근호 정리(2√65/√10=√26)가 유일한 계산 부담 → ★2.
  tier: star_2
  mechanism_primary: "y=3x±√(9·9−16)=3x±√65 → 두 평행선 사이의 거리 2√65/√10 → √26"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{26}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/72-141.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a², b², m. 제약: a²m²−b²>0 이어야 하고, 2√(a²m²−b²)/√(m²+1) 이 정리되는 조합이라야 답이 깔끔하다. 지금은 65/10 이 약분되어 √26 이 된다."
    creative: "(1) 두 접선과 두 점근선이 이루는 도형의 넓이를 묻기(★3) (2) 두 접점 사이의 거리·두 접점을 잇는 선분의 중점이 원점임을 묻기(★3 · I-SYM) (3) 거리를 주고 기울기를 역으로 찾게 하기(★3 · I-BW)."
```

```yaml
- id: GN-GEO-73-e8
  page: 73
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    쌍곡선 x²/4−y²=1 위의 점 (a,b) 에서의 접선이 점 (4,2) 를 지날 때 a+b 의 값.
  category: "접점 대입 접선 → 통과 조건과 곡선 위 조건 연립"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선 위의 점에서의 접선이 주어진 점을 지날 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선 ax/4−by=1 에 (4,2) 를 대입한 a−2b=1 과 곡선 위 조건 a²/4−b²=1 의 연립. 대입하면 b² 이 저절로 소거되어 일차식이 되는 것이 이 유형의 구조다(문제에서 접점이 곡선 위에 있다고 이미 알려 줌). 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "접선 ax/4−by=1 → (4,2) 대입 a−2b=1 → 곡선 위 조건에 대입해 b² 소거 → b=3/4, a=5/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{13}{4}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/73-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선 계수와 통과점. 제약: 통과점이 곡선 위나 점근선 위에 있으면 접점이 하나로 정해지거나 없어진다. 연립 결과가 유리수가 되려면 통과점 좌표를 접선식의 계수와 맞춰 골라야 한다."
    creative: "(1) 통과점이 곡선 바깥이라 접점이 둘 나오게 하고 a+b 대신 두 접점의 좌표·거리를 묻기(74-146 ★2) (2) 접선이 다른 곡선의 중심을 지나게 해 동치 변환을 얹기(76-152 ★3) (3) 접선의 기울기를 주고 미정 계수를 찾게 하기(76-151 ★2)."
```

```yaml
- id: GN-GEO-73-142
  page: 73
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    쌍곡선 2x²−y²=−18 위의 점 (3,−6) 에서의 접선과 수직이고 점 (2,5) 를 지나는 직선의 방정식.
  category: "접점 대입 접선 → 기울기 → 수직 기울기 → 점을 지나는 직선"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선 위의 점에서의 접선에 수직인 직선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    치환 공식으로 접선 x+y=−3 을 얻고 기울기 −1 의 수직인 1 로 점 (2,5) 를 지나는 직선을 쓰는 3단계. 우변 −18 을 그대로 두고 치환해도 되는 것(일반형 치환)이 확인 포인트. 통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "2·3x−(−6)y=−18 → x+y=−3, 기울기 −1 → 수직 기울기 1 → y−5=1·(x−2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=x+3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/73-142.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선 계수·접점·통과점. 제약: 접점은 곡선 위의 점이어야 하고, 접선의 기울기가 0 이면 수직인 직선이 x=상수 가 되어 답의 꼴이 달라진다. 수직 기울기가 정수가 되도록 접점을 고르면 계산이 깔끔하다."
    creative: "(1) 수직인 직선 대신 접선과 평행하고 원점을 지나는 직선(점근선과의 비교 ★2) (2) 접선의 법선이 다시 쌍곡선과 만나는 점을 묻기(77-157 골조 ★4) (3) 접선과 법선, 두 좌표축으로 둘러싸인 도형의 넓이(★3)."
```

```yaml
- id: GN-GEO-73-143
  page: 73
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    쌍곡선 −x²+2y²=10 위의 점 (2,a) 에서의 접선이 점 (b,0) 을 지날 때 a²+b² 의 값.
  category: "곡선 위 조건으로 a² → 접점 대입 접선 → x절편으로 b"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선 위의 점에서의 접선의 절편"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (2,a) 를 곡선에 대입해 a²=7 을 얻고, 접선 −2x+2ay=10 에 y=0 을 넣어 b=−5 를 얻는다. a 의 부호가 정해지지 않으므로 a² 만 쓰도록 물음이 설계된 것이 함정 포인트(T-부호). M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "곡선 위 조건 −4+2a²=10 → a²=7 → 접선 −2x+2ay=10 에 y=0 → b=−5 → a²+b²=32"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$32$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/73-143.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선 계수와 접점의 x좌표. 제약: 접점의 x좌표를 정하면 a² 이 자동으로 정해지므로 양수가 되는 값만 쓸 수 있고, a 의 부호가 미정이라 답은 a² 이나 |a| 로 물어야 모순이 없다. x절편은 a 와 무관하게 정해지는 구조."
    creative: "(1) a>0 조건을 붙이고 접선의 방정식을 그대로 묻기(★2) (2) x절편·y절편으로 삼각형의 넓이를 묻기(73-144 ★2) (3) 접선이 x축과 만나는 점이 초점이 되도록 계수를 역으로 찾게 하기(★3 · I-BW)."
```

```yaml
- id: GN-GEO-73-144
  page: 73
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    쌍곡선 x²−4y²=12 위의 점 (4,1) 에서의 접선과 x축, y축으로 둘러싸인 삼각형의 넓이.
  category: "접점 대입 접선 → 두 절편 → 직각삼각형의 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 접선과 좌표축이 이루는 삼각형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선 x−y=3 의 절편 (3,0), (0,−3) 으로 넓이 9/2. 절편이 음수여도 길이는 절댓값으로 잡는 것이 유일한 주의점(T-부호). 통찰 없음·M_total 5 → 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "접선 4x−4y=12 → x−y=3 → 절편 3, −3 → 넓이 (1/2)·3·3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{9}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/73-144.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선 계수와 접점. 제약: 접점은 곡선 위의 점이어야 하고, 접점이 꼭짓점이면 접선이 y축과 만나지 않아 삼각형이 생기지 않는다. 두 절편이 정수가 되도록 고르면 넓이가 유리수."
    creative: "(1) 좌표축 대신 두 점근선으로 바꾸면 넓이가 곡선의 ab 로 항상 일정(76-154 ★3 · I-RT) (2) 넓이를 주고 접점을 역으로 찾게 하기(★3 · I-BW) (3) 접선·법선·x축이 이루는 삼각형(★3)."
```

```yaml
- id: GN-GEO-74-e9
  page: 74
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    점 (−1,0) 에서 쌍곡선 x²/2−y²/4=1 에 그은 두 접선의 기울기의 곱.
  category: "기울기 미지수 접선 → 접선 조건식 → m 의 이차식 → 두 근의 곱"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선 밖의 점에서 그은 두 접선의 기울기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    밖의 점 유형의 표준 경로(기울기 미지수)를 그대로 보여 주는 필수 예제. y=m(x+1) 이므로 n=m 을 접선 조건 n²=a²m²−b² 에 넣으면 m²=2m²−4 로 바로 정리되어 근과 계수의 관계도 필요 없다. M_total 7 이지만 학생이 고를 여지가 없어 통찰 라벨 0 → 필수 ★2 유지. [분류 이슈] 판정으로는 ★3 후보.
  tier: star_2
  mechanism_primary: "y=m(x+1) → n=m 을 m²=2m²−4 에 대입 → m=±2 → 기울기의 곱 −4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/74-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "외부 점의 좌표와 a², b². 제약: 점이 쌍곡선 바깥이면서 두 접선이 모두 기울기를 갖는 위치여야 한다(꼭짓점의 x좌표와 같으면 수직접선이 섞임). m 의 이차식이 실근 두 개를 갖도록 판별식을 확인한다."
    creative: "(1) 기울기의 합·차, 두 접선이 이루는 각을 묻기(★3) (2) 기울기의 곱이 −1 이 되도록(두 접선이 직교) 하는 점의 자취를 묻기(★4 · I-BW) (3) 접점을 미지수로 두는 다른 풀이와 비교하게 하면 전략 분기 I-SC 가 생겨 ★3."
```

```yaml
- id: GN-GEO-74-145
  page: 74
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 (0,√3) 에서 쌍곡선 3x²−y²=−9 에 그은 접선의 방정식을 모두 구하기.
  category: "기울기 미지수 접선 → 우변 −1 형 접선 조건 → m"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선 밖의 점에서 그은 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    통과점이 y축 위라 접선을 y=mx+√3 으로 두면 n 이 이미 정해져 접선 조건 n²=b²−a²m² 한 번으로 m²=2 가 나온다. 우변이 −1 인 형의 조건식을 쓰는 것이 함정(T-표기). M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "y=mx+√3 → x²/3−y²/9=−1 의 접선 조건 3=9−3m² → m=±√2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=\pm\sqrt{2}x+\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/74-145.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "통과점의 y좌표와 곡선 계수. 제약: 통과점이 두 꼭짓점 사이(−3<y<3)에 있어야 두 접선이 생기고, 꼭짓점이면 접선이 하나(수평선)뿐이다. n²<b² 이어야 m² 이 양수."
    creative: "(1) 통과점을 y축 밖으로 옮기면 n=m·x₀+k 가 되어 계산이 한 겹 늘어남(★3) (2) 두 접선이 이루는 각·접점 사이의 거리를 묻기(74-146 ★2) (3) 접선이 점근선과 이루는 삼각형의 넓이(★3)."
```

```yaml
- id: GN-GEO-74-146
  page: 74
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 (1,0) 에서 쌍곡선 x²−4y²=4 에 그은 두 접선의 접점을 각각 P, Q 라 할 때 선분 PQ 의 길이.
  category: "접점 미지수 → 통과 조건이 접점 좌표의 일차식 → 두 접점 → 길이"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 접선을 각각 구하지 않고 접점 (x₁,y₁) 의 접선이 (1,0) 을 지난다는 조건을 x₁/4=1 이라는 일차식으로 옮기면 두 접점이 x=4 위에 있다는 사실이 바로 나온다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "쌍곡선 밖의 점에서 그은 두 접선의 접점(현)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    기울기 미지수로 두 접선을 구한 뒤 접점을 찾는 긴 경로 대신, 접점을 미지수로 두면 통과 조건이 x₁=4 하나로 끝난다(동치 변환 d1). 이후는 곡선 위 조건으로 y₁=±√3 을 얻고 대칭인 두 점의 거리. 통찰 1개 d1·M_total 6 → 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "접점 (x₁,y₁) 의 접선 x₁x/4−y₁y=1 에 (1,0) 대입 → x₁=4 → 곡선 위 조건에서 y₁=±√3 → PQ=2√3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/74-146.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "외부 점의 x좌표와 곡선 계수. 제약: 외부 점이 x축 위에 있어야 접점의 x좌표가 한 값으로 고정되고 두 접점이 x축 대칭이 된다(일반 위치면 두 접점이 한 직선 위에만 있고 대칭이 아님). x₁ 이 곡선 위 조건을 만족해 y₁² 이 양수가 되어야 한다."
    creative: "(1) 외부 점을 y축 위로 옮기면 y₁ 이 고정되어 같은 골조로 y축 대칭 두 접점(76-153 ★3) (2) PQ 대신 삼각형의 넓이·PQ 를 지나는 직선의 방정식(현의 방정식)을 묻기(★3) (3) 외부 점을 일반 위치로 두고 두 접점을 지나는 직선을 구하게 하면 ★4."
```

### 특강

```yaml
- id: GN-GEO-75-147
  page: 75
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "특강 확인체크"
  summary: |
    음함수의 미분법을 이용하여 쌍곡선 x²/20−y²/16=1 위의 점 (5,−2) 에서의 접선의 방정식 구하기.
  category: "양변 미분 → y' 를 x, y 로 표현 → 접점 대입해 기울기 → 점·기울기 직선"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "음함수의 미분법으로 구하는 이차곡선 위의 점에서의 접선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    도구(음함수의 미분법)가 발문에 지정되어 있어 전략 선택의 여지가 없고, 71-137 의 치환 공식과 결과가 같음을 확인하는 특강 문항이다. y' 식에 y 가 남아 접점의 y좌표가 음수인 것을 그대로 대입해야 하는 것이 주의점(T-부호). 특강 출발점 ★2~3 중 계산이 가벼워 ★2.
  tier: star_2
  mechanism_primary: "x/10−yy'/8=0 → y'=4x/(5y) → (5,−2) 에서 −2 → y+2=−2(x−5)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=-2x+8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/75-147.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선 계수와 접점. 제약: 접점은 곡선 위의 점이어야 하고 y좌표가 0 이면(꼭짓점) y' 가 정의되지 않아 수직접선으로 따로 처리해야 한다. 기울기가 정수가 되도록 접점을 고르면 답이 깔끔하다."
    creative: "(1) 같은 문항을 치환 공식과 미분법 두 가지로 풀게 하고 일치를 확인시키기(★2) (2) 타원·포물선으로 곡선을 바꿔 같은 절차를 반복(75-148 ★2) (3) 접선이 아니라 법선의 방정식을 묻기(★2) (4) 접점을 매개변수로 두고 기울기의 범위를 묻기(★3)."
```

```yaml
- id: GN-GEO-75-148
  page: 75
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "특강 확인체크"
  summary: |
    음함수의 미분법을 이용하여 타원 x²+2y²=12 에 접하고 기울기가 1/2 인 직선의 방정식 구하기.
  category: "양변 미분 → y'=기울기 조건과 곡선 위 조건 연립 → 접점 두 개 → 접선 두 개"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "음함수의 미분법으로 구하는 기울기가 주어진 이차곡선의 접선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y'=−x/(2y)=1/2 에서 x=−y 를 얻어 곡선식에 대입하는 연립이 한 겹 더 있지만, 도구가 지정되어 있어 통찰 라벨은 없다. 접점이 두 개 나오므로 접선도 두 개(±3)라는 것을 빠뜨리지 않는 것이 주의점. M_total 6 → ★2. [분류 이슈] 곡선이 타원이라 「쌍곡선의 접선」 단원 유형 귀속이 애매하다.
  tier: star_2
  mechanism_primary: "2x+4yy'=0 → y'=−x/(2y)=1/2 → x=−y → 곡선에 대입해 접점 (2,−2)·(−2,2) → y=x/2∓3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=\dfrac{1}{2}x\pm3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/75-148.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선 계수와 기울기. 제약: 타원은 모든 기울기에 접선이 두 개 있지만 쌍곡선으로 바꾸면 |m|>b/a 조건이 붙는다. 접점 좌표가 정수가 되도록 계수와 기울기를 맞추면 답이 정수."
    creative: "(1) 곡선을 쌍곡선으로 바꿔 접선이 존재하지 않는 기울기가 생기게 하기(★3 · 점근선 통찰) (2) 공식 풀이와 미분 풀이의 결과를 비교시켜 전략 분기 I-SC 를 넣기(★3) (3) 두 접선 사이의 거리나 두 접점을 잇는 선분이 원점을 지남을 묻기(★3 · I-SYM)."
```

### 연습문제 STEP 1

```yaml
- id: GN-GEO-76-149
  page: 76
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    점 (−6,0) 을 지나고 점근선의 방정식이 y=±(2/3)x 인 쌍곡선에 접하고 기울기가 3/4 인 직선의 방정식.
  category: "점근선 기울기와 꼭짓점으로 쌍곡선 결정 → 기울기 접선 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "쌍곡선의 방정식이 주어지지 않아, (−6,0) 이 x축 위의 점이므로 꼭짓점이고 a=6, 점근선의 기울기 b/a=2/3 에서 b=4 라는 두 조건으로 곡선을 먼저 확정해야 한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "점근선·지나는 점으로 쌍곡선을 정한 뒤 기울기 접선 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    곡선을 먼저 복원하는 앞 단계(d1 동치 변환)가 붙은 72-136 골조. x축 위의 점을 지나는 가로 쌍곡선이라 그 점이 꼭짓점이라는 판단이 관문이고, 이후는 y=(3/4)x±√(36·9/16−16) 한 줄이다. 통찰 1개 d1·M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "a=6, b/a=2/3 → b=4 → x²/36−y²/16=1 → y=(3/4)x±√(81/4−16)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$y=\dfrac{3}{4}x\pm\dfrac{\sqrt{17}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/76-149.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점의 x좌표(=a), 점근선의 기울기(=b/a), 접선의 기울기 m. 제약: 지나는 점이 x축 위면 가로 쌍곡선, y축 위면 세로 쌍곡선이 되어 조건식이 바뀐다. |m|>b/a 여야 접선이 존재하고, a²m²−b² 이 정리되는 값을 고른다."
    creative: "(1) 지나는 점을 x축 밖의 일반 점으로 주면 a², b² 연립이 되어 ★3 (2) 점근선 대신 초점·이심률로 곡선을 주기(★2) (3) 접선이 점근선과 만나는 점까지 묻기(76-154 ★3) (4) 기울기 대신 접선이 지나는 점을 주기(★3)."
```

```yaml
- id: GN-GEO-76-150
  page: 76
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    쌍곡선 3x²−4y²=12 에 접하고 기울기가 1 인 직선이 포물선 y²=ax 의 초점을 지날 때 양수 a 의 값.
  category: "기울기 접선 두 개 → 포물선의 초점 (a/4,0) 통과 → 양수 조건으로 한 쪽 기각"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접선이 y=x+1, y=x−1 두 개라 초점 조건에서 a=−4 와 a=4 가 모두 나오고, 양수라는 단서로 한 쪽을 기각해야 답이 하나로 정해진다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "쌍곡선의 접선과 포물선의 초점 결합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x²/4−y²/3=1 의 기울기 1 접선 y=x±1 을 구하고 포물선 y²=ax 의 초점 (a/4,0) 을 대입하는 두 단계. 접선이 ±두 개인데 답이 하나라 사후 기각(I-VF d1)이 필수다. M_total 5·통찰 1개 d1 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "x²/4−y²/3=1 → y=x±1 → 초점 (a/4,0) 대입 → a=±4 → 양수 조건으로 a=4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/76-150.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "쌍곡선 계수·접선의 기울기·포물선의 꼴. 제약: 접선의 x절편이 두 개(부호 반대)로 나오므로 포물선 조건(a>0)이 반드시 한 쪽만 남겨야 한다. 초점 좌표가 a/4 라서 a 가 4의 배수면 접선의 절편이 정수가 된다."
    creative: "(1) 포물선의 초점 대신 타원·쌍곡선의 초점을 지나게 하기(★2~3) (2) 양수 조건을 빼고 가능한 a 를 모두 구하게 하면 검증 부담이 사라져 ★2 이하 (3) 접선이 포물선에도 접하도록 하면 두 접선 조건이 결합되어 ★4 (4) 초점 대신 준선을 지나게 하기(★3)."
```

```yaml
- id: GN-GEO-76-151
  page: 76
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    쌍곡선 x²/a−y²/b=1 위의 점 (2,1) 에서의 접선의 기울기가 4 일 때 상수 a, b 에 대하여 a+b 의 값.
  category: "접점 대입 접선의 기울기 조건과 곡선 위 조건 연립"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선 위의 점에서의 접선의 기울기로 미정 상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선 2x/a−y/b=1 을 y 에 대해 풀어 기울기 2b/a=4 를 얻고, 접점이 곡선 위라는 4/a−1/b=1 과 연립하는 표준 미정계수 절차. 미지수가 둘이라 Mₐ=2 지만 대입 한 번으로 끝나 통찰 라벨 없음 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "접선 2x/a−y/b=1 → 기울기 2b/a=4 → b=2a → 4/a−1/b=1 에 대입 → a=7/2, b=7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{21}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/76-151.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점 좌표와 기울기. 제약: 연립 결과 a>0, b>0 이어야 쌍곡선이 되고, 접점의 좌표와 기울기를 아무렇게나 주면 a 가 음수가 되어 곡선이 성립하지 않는다. 기울기 m 과 접점 (x₁,y₁) 사이에는 m=x₁b/(y₁a) 관계가 있다."
    creative: "(1) a+b 대신 초점 사이의 거리·점근선의 방정식을 묻기(★2) (2) 기울기 대신 접선이 지나는 다른 점을 주기(73-e8 ★2) (3) 접선이 좌표축과 이루는 삼각형의 넓이를 조건으로 주면 이차식이 되어 ★3 (4) 접점을 매개변수로 두고 기울기의 최솟값을 묻기(★4)."
```

```yaml
- id: GN-GEO-76-152
  page: 76
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    쌍곡선 x²/12−y²/8=1 위의 점 (a,b) (b<0) 에서의 접선이 타원 (x−2)²+y²/4=1 의 넓이를 이등분할 때 a−b 의 값.
  category: "넓이 이등분 ⇔ 타원의 중심 통과 → 접선에 중심 대입 → 곡선 위 조건"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "타원의 넓이를 이등분하는 직선은 타원이 점대칭이므로 반드시 중심 (2,0) 을 지난다는 동치 조건으로 옮겨야 접선 조건이 일차식 하나가 된다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "쌍곡선의 접선이 다른 이차곡선의 넓이를 이등분할 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    「넓이를 이등분한다」를 「중심을 지난다」로 바꾸지 못하면 손을 댈 수 없고, 바꾸는 순간 ax/12−by/8=1 에 (2,0) 을 대입해 a=6, 이어서 곡선 위 조건에서 b=−4(b<0)로 두 줄에 끝난다. d2 통찰 하나가 풀이의 진입 관문이라 STEP 1 출발점 ★2 에서 +1. [분류 이슈] 계산량만 보면 ★2.
  tier: star_3
  mechanism_primary: "접선 ax/12−by/8=1 이 타원의 중심 (2,0) 통과 → a=6 → 곡선 위 조건 36/12−b²/8=1 → b=−4 → a−b=10"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/76-152.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원의 중심 좌표와 쌍곡선 계수. 제약: 중심의 x좌표로 a 가 바로 정해지므로 a²/12>1 즉 중심이 꼭짓점 바깥쪽이어야 접점이 존재하고, b² 이 완전제곱이면 답이 정수. b<0 단서를 빼면 답이 두 개가 된다."
    creative: "(1) 타원 대신 원·평행사변형처럼 점대칭 도형으로 바꾸기(★3 유지) (2) 중심이 y축 위에 있으면 b 가 먼저 정해져 대칭 구조가 바뀜(★3) (3) b<0 단서를 빼고 가능한 a−b 를 모두 구하게 하면 사후 검증이 붙어 ★3~4 (4) 이등분 조건을 넓이비 1:3 으로 바꾸면 중심 통과 동치가 깨져 ★5 급으로 난도가 급등한다."
```

```yaml
- id: GN-GEO-76-153
  page: 76
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    점 P(0,2) 에서 쌍곡선 x²−3y²=6 에 그은 두 접선의 접점을 각각 A, B 라 할 때 삼각형 PAB 의 넓이.
  category: "접점 미지수 → 통과 조건으로 접점의 y좌표 고정 → 대칭인 두 접점 → 밑변·높이"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 접선을 따로 구하지 않고 접점 (x₁,y₁) 의 접선이 P 를 지난다는 조건을 −y₁=1 로 옮기면 두 접점이 직선 y=−1 위의 y축 대칭인 두 점으로 확정된다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "쌍곡선 밖의 점에서 그은 두 접선의 접점과 삼각형의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    74-146 의 y축 버전에 넓이가 얹힌 결합형. 접점을 미지수로 두는 선택(d1)을 해야 y₁=−1 이 즉시 나오고, 이후 x₁=±3 으로 AB=6, P 에서 y=−1 까지의 높이 3 으로 넓이 9. 기울기 미지수로 풀면 훨씬 길어진다. 통찰 1개·M_total 7 → STEP 1 출발점 ★2 에서 +1.
  tier: star_3
  mechanism_primary: "접점 (x₁,y₁): x₁x/6−y₁y/2=1 에 (0,2) 대입 → y₁=−1 → 곡선 위 조건에서 x₁=±3 → 밑변 6·높이 3 → 9"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/76-153.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P 의 y좌표와 곡선 계수. 제약: P 가 y축 위여야 두 접점이 y축 대칭이 되어 밑변·높이가 바로 읽힌다. y₁ 을 곡선 위 조건에 넣었을 때 x₁² 이 양수여야 접점이 존재하고(P 가 쌍곡선 바깥), x₁ 이 정수면 넓이가 정수."
    creative: "(1) P 를 x축 위로 옮기면 74-146 의 길이 문제가 됨(★2) (2) 삼각형 대신 두 접선과 점근선이 이루는 도형의 넓이(★4) (3) 넓이를 주고 P 의 좌표를 역으로 찾게 하기(★4 · I-BW) (4) P 를 일반 위치로 두면 두 접점을 지나는 현의 방정식을 세워야 해서 ★4."
```

### 연습문제 STEP 2

```yaml
- id: GN-GEO-76-154
  page: 76
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    쌍곡선 x²−y²=−3 위의 점 (1,2) 에서의 접선과 두 점근선으로 둘러싸인 삼각형의 넓이.
  category: "접점 대입 접선 → 두 점근선과의 교점 → 원점을 낀 삼각형의 넓이"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접선을 구한 뒤 점근선 y=x, y=−x 와 연립해 두 교점을 좌표로 옮기고, 원점을 꼭짓점으로 하는 삼각형의 넓이로 바꾼다(이 넓이는 곡선의 ab 로 접점과 무관하게 일정하다)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "쌍곡선의 접선과 두 점근선이 이루는 삼각형의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접선 x−2y=−3 을 점근선 두 개와 연립해 (3,3), (−1,1) 을 얻고 원점을 낀 삼각형의 넓이를 계산한다. 접선 구하기는 ★1 수준이지만 「점근선과의 교점 → 도형」으로 표현을 옮기는 단계(d1)와 교점 계산이 붙어 STEP 2 출발점 ★3 유지. 넓이가 접점과 무관하게 ab=3 으로 일정하다는 성질을 알면 즉답.
  tier: star_3
  mechanism_primary: "접선 x·1−y·2=−3 → 점근선 y=±x 와 연립해 (3,3)·(−1,1) → 원점을 낀 삼각형의 넓이 3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/76-154.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선 계수와 접점. 제약: 접점은 곡선 위의 점, 점근선의 기울기는 ±b/a 이고 넓이는 항상 ab 라 접점을 바꿔도 답이 변하지 않는다(수치 변형을 하려면 a, b 를 바꿔야 한다). a=b 인 직각쌍곡선이면 점근선이 y=±x 로 간단해진다."
    creative: "(1) 넓이가 접점과 무관하게 일정함을 증명하게 하면 매개변수 접점이 들어가 ★4 (2) 삼각형의 무게중심·외심이 접점과 어떤 관계인지 묻기(★4) (3) 점근선 대신 좌표축으로 바꾸면 ★2(73-144) (4) 넓이를 주고 곡선의 계수를 역으로 찾게 하기(★3 · I-BW)."
```

```yaml
- id: GN-GEO-77-155
  page: 77
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    타원 x²/4+y²/2=1 과 쌍곡선 x²/a²−y²/b²=1 이 점 P(√2,1) 에서 만나고 P 에서의 두 접선이 서로 수직일 때, 쌍곡선의 두 초점 사이의 거리(a, b 는 상수).
  category: "두 곡선의 P 에서의 접선 기울기 → 수직 조건과 곡선 위 조건 연립 → a², b² → 2c"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "P 를 공유한다는 조건과 두 접선이 직교한다는 조건을 각각 곡선 위 식과 기울기 곱 식으로 바꿔 a², b² 에 대한 연립으로 통합해야 미지수 두 개가 한 번에 정해진다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 이차곡선의 교점에서 접선이 수직일 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    타원의 접선 기울기 −√2/2 를 먼저 구하고, 직교에서 쌍곡선의 접선 기울기 √2 를 얻은 뒤 √2b²/a²=√2 로 a²=b², 여기에 P 가 쌍곡선 위라는 2/a²−1/b²=1 을 합쳐 a²=b²=1 을 얻는다. 조건 통합(d2) 하나에 단계가 길어 STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "타원 접선 기울기 −√2/2 → 직교로 쌍곡선 접선 기울기 √2=√2b²/a² → a²=b² → 2/a²−1/b²=1 → a²=b²=1 → c=√2 → 2√2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/77-155.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원의 계수와 교점 P. 제약: P 는 타원 위의 점이어야 하고, 연립 결과 a²>0, b²>0 이어야 쌍곡선이 된다. 공초점 타원·쌍곡선은 교점에서 접선이 항상 직교하므로 계수를 아무렇게나 주면 조건이 자동으로 만족되거나(무의미) 모순이 된다."
    creative: "(1) 초점을 공유하는 타원과 쌍곡선의 교점에서 접선이 항상 직교함을 증명하게 하기(★5 후보 · I-SYM+I-XU) (2) 직교 대신 두 접선이 이루는 각을 주기(★4) (3) 초점 사이의 거리 대신 점근선·이심률을 묻기(★3 유지) (4) 쌍곡선을 포물선으로 바꾸기(★3)."
```

```yaml
- id: GN-GEO-77-156
  page: 77
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    한 점근선이 y=x/2 인 쌍곡선 x²/a²−y²/b²=1 이 직선 y=1 과 만나는 두 점을 P, Q 라 할 때, P 와 Q 에서의 접선이 서로 수직이면 a²+b² 의 값(5지선다 · a, b 는 양수).
  category: "y=1 위의 두 교점의 y축 대칭 → 두 접선의 기울기가 ±m → 수직 조건 + 점근선 조건 통합"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "P, Q 가 y축에 대칭이라 두 접선의 기울기가 부호만 다른 ±m 이고, 수직 조건이 m²=1 이라는 한 식으로 줄어든다(두 접선을 따로 쓸 필요가 없다)"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "점근선 b/a=1/2, 교점의 x좌표, 기울기 조건 세 개를 b² 만의 방정식 b²+1=4 로 통합한다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "대칭인 두 점에서의 접선이 수직일 조건(점근선 결합)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    a=2b 로 미지수를 하나로 줄이고, y=1 위의 두 교점 x=±a√(b²+1)/b 에서의 접선 기울기 x₀b²/a² 이 서로 반대 부호임을 써서 수직 조건을 x₀=a²/b² 하나로 만든다. 대칭 통찰(d2)과 조건 통합(d1) 두 개 + M_total 8 → STEP 2 출발점 ★3 에 기출 신호까지 더해 +1. ★4 저노출 통찰 요건은 I-SYM 으로 충족.
  tier: star_4
  mechanism_primary: "b/a=1/2 → a=2b → 교점 x₀=±a√(b²+1)/b → 접선 기울기 ±x₀b²/a², 수직에서 x₀=a²/b² → b²=3, a²=12 → 15"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '①'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/77-156.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점근선의 기울기와 자르는 직선 y=k. 제약: y=k 는 x축과 평행해야 두 교점이 y축 대칭이 되고(대칭 통찰이 성립), 연립 결과 b²>0 이어야 한다. 점근선 기울기를 바꾸면 a=kb 관계만 달라지고 골조는 그대로다."
    creative: "(1) 자르는 직선을 x=k 로 바꾸면 두 접선이 x축 대칭이 되어 같은 골조(★4) (2) 수직 대신 두 접선의 교점의 자취를 묻기(★5 후보) (3) 두 접선과 y=1 이 이루는 삼각형의 넓이(★4) (4) 직선을 기울어지게 하면 대칭이 깨져 두 접선을 각각 구해야 하므로 ★5."
```

### 연습문제 실력 UP

```yaml
- id: GN-GEO-77-157
  page: 77
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    쌍곡선 x²−y²=15 위의 점 (4,1) 에서의 접선을 l 이라 하고, 원점 O 에서 l 에 내린 수선의 발을 H, 직선 OH 가 쌍곡선과 제2사분면에서 만나는 점을 Q 라 할 때 OH×OQ 의 값(그림 제시).
  category: "OH 는 원점과 접선 사이의 거리 → Q 는 접선의 법선 방향 위의 점 → 두 길이의 곱"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "수선의 발 H 의 좌표를 연립으로 구하지 않고 OH 를 원점과 직선 4x−y=15 사이의 거리 15/√17 로 옮긴다"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "직선 OH 의 방향이 접선의 법선 방향 (4,−1) 이라는 것에서 Q 를 (−4t, t) 로 두고 쌍곡선에 대입하면 t=1 로 바로 정해진다(제2사분면 조건이 부호를 고른다)"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "접선과 원점 사이의 거리·법선 방향 교점의 곱"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    좌표를 직접 구하려 들면 수선의 발 연립과 무리수 계산이 길어지지만, OH 를 점과 직선 사이의 거리로, OQ 를 법선 방향 매개점으로 바꾸면 √17 이 서로 약분되어 곱이 15(곡선의 상수)로 떨어진다. 통찰 2개(RT·BW 각 d2)·M_total 7 → 실력 UP 출발점 ★4 유지. ★5 는 통찰 3개 요건 미달.
  tier: star_4
  mechanism_primary: "접선 4x−y=15 → OH=15/√17 → OQ 방향 (−4,1) → Q(−4,1), OQ=√17 → 곱 15"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$15$'
  answer_source: "답지"
  figure: "crop:fig-77-157.png"
  latex: latex-bank/gn-geo/items/77-157.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직각쌍곡선의 상수(15)와 접점. 제약: 접점은 곡선 위의 점이어야 하고, 법선 방향으로 그은 직선이 쌍곡선과 실제로 만나야 Q 가 존재한다(직각쌍곡선 x²−y²=k 에서는 법선 방향 점이 항상 켤레쌍곡선이 아닌 같은 곡선 위에 오도록 부호를 확인). 곱은 항상 k 로 일정하다."
    creative: "(1) OH×OQ 가 접점과 무관하게 일정함을 증명하게 하면 매개변수 접점이 들어가 ★5 후보 (2) 일반 쌍곡선 x²/a²−y²/b²=1 로 바꾸면 곱이 일정하지 않아 계산형이 됨(★4) (3) Q 대신 법선이 점근선과 만나는 점으로 바꾸기(★4) (4) OH 와 두 초점에서 l 에 내린 수선의 길이의 곱(초점 성질)로 확장(★5)."
```

```yaml
- id: GN-GEO-77-158
  page: 77
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    쌍곡선 x²/a²−y²/b²=1 위의 점 P(4,k) (k>0) 에서의 접선이 x축과 만나는 점을 Q, y축과 만나는 점을 R 라 하고 S(4,0) 일 때, 삼각형 QOR 의 넓이 A₁ 과 삼각형 PRS 의 넓이 A₂ 가 A₁:A₂=9:4 이면 주축의 길이(5지선다 · 그림 제시).
  category: "접선의 두 절편으로 넓이 → 넓이비와 곡선 위 조건 결합 → a² 만의 방정식 → 주축"
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 삼각형을 그림에서 읽는 대신 절편 Q(a²/4,0), R(0,−b²/k) 와 밑변 PS=k·높이 4 로 옮겨 A₁, A₂ 를 a², b², k 의 식으로 쓴다"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "넓이비 식과 P 가 곡선 위에 있다는 식을 결합해 b² 과 k 를 소거하고 a² 만의 방정식 a⁴+36a²−576=0 으로 통합한다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "접선의 절편이 만드는 두 삼각형의 넓이비"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    미지수가 a², b², k 세 개인데 조건은 넓이비와 곡선 위 조건 둘뿐이라, 두 넓이를 절편으로 표현한 뒤 b², k 가 함께 소거되는 형태로 결합해야 a² 하나가 남는다. 표현 전환(d2)과 조건 통합(d2) 두 통찰 + M_total 9(사차식 정리) → 실력 UP ★4 유지. 통찰 3개 요건 미달로 ★5 는 아님.
  tier: star_4
  mechanism_primary: "접선 4x/a²−ky/b²=1 → Q(a²/4,0)·R(0,−b²/k) → A₁=a²b²/(8k), A₂=2k → 9:4 에서 a²b²=36k² → 곡선 위 조건 대입 → a²=12 → 주축 2a=4√3"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '③'
  answer_source: "답지"
  figure: "crop:fig-77-158.png"
  latex: latex-bank/gn-geo/items/77-158.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P 의 x좌표(4)와 넓이비(9:4). 제약: P 의 x좌표는 a 보다 커야 곡선 위의 점이 되고(16>a²), 넓이비를 바꾸면 a² 에 대한 사차식의 해가 양수·유리수로 떨어지는지 확인해야 한다. 지금은 a⁴+36a²−576=0 이 a²=12 로 깔끔하게 인수분해된다."
    creative: "(1) 주축 대신 초점 사이의 거리·이심률·점근선을 묻기(★4 유지) (2) 두 삼각형이 닮음임을 이용하는 풀이를 유도하면 전략 분기 I-SC 가 생겨 ★5 후보 (3) 넓이비 대신 두 삼각형의 넓이의 합·차를 주기(★4) (4) 접선이 점근선과 만나는 점까지 넣어 세 삼각형의 비로 확장(★5)."
```

## 표본 판정 요약 (26문)

- ★ 분포: ★1 3 · ★2 16 · ★3 4 · ★4 3 · ★5 0
- 통찰형 10 · 절차형 16 · premium 0
- 통찰 유형(라벨 13개): I-EQV 4 · I-RT 3 · I-CON 3 · I-SYM 1 · I-BW 1 · I-VF 1 (depth 3 없음 · 통찰 2개 라벨 문항 3 — 77-156·77-157·77-158)
- 대상층: 하위권 3 · 중하위권 13 · 중위권 5 · 중상위권 3 · 상위권 2
- type_hint 묶음: 「쌍곡선 위의 점에서의 접선(치환 공식)과 그 절편·기울기·넓이」 9(71-137·73-e8·73-142·73-143·73-144·75-147·76-151·76-152·76-154) · 「기울기가 주어진 접선 공식」 8(71-136·72-e7·72-139·72-140·72-141·75-148·76-149·76-150) · 「밖의 점에서 그은 접선(기울기 미지수·접점 미지수)」 5(71-138·74-e9·74-145·74-146·76-153) · 「교점에서 두 접선이 수직일 조건」 2(77-155·77-156) · 「접선과 거리·넓이비 결합」 2(77-157·77-158)
- 그림: 2문(`crop:fig-77-157.png` 접선·수선의 발·제2사분면 교점 · `crop:fig-77-158.png` 접선의 두 절편과 두 삼각형)
- 구역 출발점과 최종 라벨이 어긋난 문항은 76-152(★2→★3)와 76-153(★2→★3), 77-156(★3→★4) 셋뿐이고 모두 +1 방향이다. 단원 전체가 세 공식의 반복이라 ★2 가 16문으로 절반을 넘고, ★4 는 대칭·거리·넓이비로 도형 조건을 얹은 연습문제 후반 세 문항뿐이다. ★5 는 없다(통찰 3개 이상 + 저노출 유형 요건 미충족).

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-GEO-71-138 | 빈칸이 경로 전체를 안내해 익히기 ★1 로 뒀지만, 비계를 걷어내면 74-e9·76-153 과 같은 밖의 점 골조(M_total 7)라 판정은 ★3 | ★1 / ★3 |
| GN-GEO-74-e9 | 밖의 점에서 그은 접선 골조로 M_total 7 이나 유형 도입 예제라 경로가 그대로 제시됨 · 필수 ★2 유지, 판정은 ★3 후보 | ★2 / ★3 |
| GN-GEO-75-148 | 곡선이 타원이라 「쌍곡선의 접선」 단원 유형에 귀속시키기 애매(특강의 주제는 음함수의 미분법) — 카탈로그 설계 때 결정 | ★2 |
| GN-GEO-76-152 | 계산량만 보면 ★2 지만 「넓이 이등분 ⇔ 중심 통과」 d2 동치 변환이 진입 관문이라 STEP 1 출발점에서 +1 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: (1) 「기울기가 주어진 접선」(공식 y=mx±√(a²m²−b²))과 (2) 「곡선 위의 점에서의 접선」(치환)과 (3) 「곡선 밖의 점에서 그은 접선」은 도구와 미지수 설정이 달라 반드시 분리한다. 특히 (3)은 *기울기를 미지수로* 두는 갈래(74-e9·74-145)와 *접점을 미지수로* 두는 갈래(71-138·74-146·76-153)가 풀이 길이를 크게 가르므로 한 유형 안의 두 하위 유형으로 두고, 나중에 전략 분기(I-SC) 슬롯의 재료로 쓸 수 있다.
- **통합해도 될 유형**: 72-e7·72-139·72-140·76-149 는 「기울기를 한 겹 감싸 주는 방식(수직·각·미정 상수·점근선)」만 다른 같은 골조라 한 유형의 ★2 변형으로 묶는다. 73-142·73-143·73-144·76-151 도 「곡선 위의 점에서의 접선 + 한 가지 부가 요구(수직·절편·넓이·미정 상수)」로 한 유형에 묶을 수 있다.
- **다른 단원과 공유할 유형**: 75-147·75-148(음함수의 미분법)은 곡선 종류와 무관한 도구라 포물선·타원 단원과 공유하는 별도 유형으로 두는 편이 낫다. 76-150(포물선의 초점)·77-155(타원과의 교점)는 「이차곡선 결합」 유형으로 묶어 타원·포물선 단원에서도 참조한다.
- **★4 이상 슬롯 후보**: 이 단원에서 저노출 통찰을 쓰는 골조는 대칭 축약(77-156 · I-SYM), 거리·법선 전환(77-157 · I-RT+I-BW), 넓이비 통합(77-158 · I-RT+I-CON) 셋뿐이다. ★5 를 만들려면 이 셋에 (a) 접점을 매개변수로 두고 값이 일정함을 증명하게 하거나(76-154·77-157 의 일정성), (b) 공초점 타원·쌍곡선의 직교 성질(77-155 확장), (c) 두 접선의 교점의 자취(77-156 확장)처럼 역방향·일반화 조건을 한 겹 더 얹어야 한다.
