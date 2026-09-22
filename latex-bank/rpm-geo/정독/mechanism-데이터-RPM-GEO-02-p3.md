---
name: mechanism-데이터-RPM-GEO-02-p3
description: RPM 기하 02 이차곡선의 접선(3/3 · 유형 09~유형 UP 11 · 시험에 꼭 나오는 문제 · 서술형 주관식 · 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 기하 (학생용 텍스트 PDF) · 전사본 latex-bank/rpm-geo
  section: 02 이차곡선의 접선
  unit_code: GEO-02
  part: "3/3"
  extract_range: "33~37쪽 · 0208~0245"
  total_problems: 38
  unit_total: 95
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-geo/items/<id>.tex
  image_source: latex-bank/rpm-geo/figures/ (crops.json)
---

# RPM 기하 · 02 이차곡선의 접선 (3/3) 정독 데이터 (v1.0)

이 파일은 RPM 기하 02 이차곡선의 접선 단원의 마지막 1/3 — 33~37쪽 · 0208~0245 · 38문항 — 을 다룬다. 구역은 「유형 09 쌍곡선의 접선의 방정식; 접점의 좌표가 주어진 경우」(8문) · 「유형 10 쌍곡선 밖의 점에서 그은 접선의 방정식」(3문) · 「유형 UP 11 이차곡선과 직선 사이의 거리의 최솟값」(4문) · 「시험에 꼭 나오는 문제」(16문) · 「서술형 주관식」(4문) · 「실력 Up」(3문)이다. RPM 은 구역이 곧 난이도 층이라 유형 구역은 난이도 표시(중하·중·상중)와 「대표문제」 태그를, 시험에 꼭 나오는 문제 구역은 「중요」·「수능 기출」·「평가원 기출」 태그를 ★ 출발점으로 읽었다(유형 ★1~3 · 유형 UP ★3 · 시험에 꼭 ★2~3 · 서술형 ★3 · 실력 Up ★4). 이 범위에는 교과서 구역과 「하」 난이도가 없어 ★1 이 드물다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]` · `variation_notes`(numeric: 바꿔도 되는 수와 제약 / creative: 골조를 유지한 설정 변경과 ★ 변동 지점)를 채웠다. 판정 규약: `insight_type` 은 depth 2 이상 통찰이 있거나 통찰이 2개 이상일 때 통찰형, 그 외(depth 1 통찰 하나까지)는 절차형으로 적었다. `depth_score` 는 effective_depth 의 합이며, 단원별 감쇠표가 없어 effective_depth = depth 로 두었다. 답은 전사본 answer 를 그대로 옮겼고 38문 전부 다시 풀어 일치를 확인했다.

## 문항 데이터

### 유형 09 쌍곡선의 접선의 방정식; 접점의 좌표가 주어진 경우

```yaml
- id: RPM-GEO-0208
  page: 33
  vendor_label: "유형 09 쌍곡선의 접선의 방정식; 접점의 좌표가 주어진 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    쌍곡선 4x²−y²=3 위의 점 (1,−1)에서의 접선에 수직이고 그 점을 지나는 직선(법선)이 점 (2,a)를 지날 때 a. 5지선다.
  category: "접점 공식 → 법선 기울기 → 점 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선 위의 점에서의 접선·법선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접점 공식으로 접선 4x+y=3(기울기 −4) → 수직 기울기 1/4 → y+1=(x−1)/4 에 x=2 → a=−3/4. 세 단계 모두 표준 공식·직선식이고 통찰 없음. 유형 대표(난이도 표시 없음) 출발 ★2 · M_total 4 이지만 접선→법선→대입 세 절차가 이어지는 유형 대표라 ★2 유지.
  tier: star_2
  mechanism_primary: "접점 공식 4x+y=3 → 수직 기울기 1/4 → (1,−1) 지나는 직선에 x=2 대입 → a=−3/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0208.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "쌍곡선 계수(4, 1, 3)와 접점을 곡선 위의 정수점(예: x²−y²=3 위 (2,1))으로 바꿀 수 있음. 제약: 접점이 곡선 위에 있어야 하고 접선 기울기가 0·무한대가 아니어야 법선 기울기가 정의됨 · 선택지 간격이 작은 분수로 유지."
    creative: "(1) 법선의 x절편·y절편을 묻기(★2 유지) (2) 법선이 초점을 지나는 접점을 역으로 결정(I-BW d1 · ★3) (3) 접선·법선·x축으로 둘러싸인 삼각형의 넓이(★3)."
```

```yaml
- id: RPM-GEO-0209
  page: 33
  vendor_label: "유형 09 쌍곡선의 접선의 방정식; 접점의 좌표가 주어진 경우"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    쌍곡선 x²/12−y²/3=−1 위의 점 (k,k) (k<0)에서의 접선의 방정식.
  category: "점 대입으로 k 결정 → 접점 공식"
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
    (k,k) 대입 → −k²/4=−1 → k=−2(k<0) → 접점 공식 −2x/12+2y/3=−1 → y=x/4−3/2. 두 단계·통찰 없음·M_total 4. 유형 안 「중하」 출발에서 절차형·저노동 → ★1.
  tier: star_1
  mechanism_primary: "(k,k) 대입 → k²=4, k<0 → k=−2 → 접점 (−2,−2) 공식 → y=x/4−3/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=\dfrac{1}{4}x-\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0209.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모(12, 3)와 우변 부호, 접점 조건 (k,k)→(k,2k)·(k,−k) 로 변경. 제약: 대입한 식이 k²=양수 가 되어야 하고 k<0 같은 부호 조건으로 점 하나가 정해져야 함 · 접선 계수가 단순 분수."
    creative: "(1) k>0 으로 바꾸고 접선의 x절편을 묻기(★1) (2) 접점을 「점근선 y=x/2 와 평행한 접선의 접점」으로 바꾸면 역추적(I-BW d1 · ★2~3) (3) 접선이 지나는 정점 하나를 주고 접점을 묻기(★2)."
```

```yaml
- id: RPM-GEO-0210
  page: 33
  vendor_label: "유형 09 쌍곡선의 접선의 방정식; 접점의 좌표가 주어진 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    쌍곡선 x²−2y²=−2 위의 점 (4,3)에서의 접선과 x축·y축으로 둘러싸인 삼각형의 넓이.
  category: "접점 공식 → 두 절편 → 넓이"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 접선과 좌표축이 만드는 삼각형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선 4x−6y=−2 → 2x−3y+1=0 → x절편 −1/2, y절편 1/3 → 넓이 (1/2)(1/2)(1/3)=1/12. 세 절차·통찰 없음. 절편 부호는 넓이에서 절댓값으로 처리. 「중」 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "접점 공식 2x−3y=−1 → 절편 (−1/2,0),(0,1/3) → 넓이 1/12"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{12}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0210.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점을 곡선 위 다른 정수점((−4,3) 등)으로, 곡선을 x²−2y²=−k 꼴로 바꿀 수 있음. 제약: 접선이 두 축 모두와 만나야 하므로 기울기가 0·무한대가 아니고 접점이 축 위가 아니어야 함 · 절편이 단순 분수."
    creative: "(1) 넓이가 주어졌을 때 접점을 역으로 결정(I-BW d1 · ★3) (2) 좌표축 대신 두 점근선으로 둘러싸인 삼각형으로 바꾸면 0214 형(★3) (3) 좌표축 대신 두 초점과 접선이 만드는 삼각형(★3)."
```

```yaml
- id: RPM-GEO-0211
  page: 33
  vendor_label: "유형 09 쌍곡선의 접선의 방정식; 접점의 좌표가 주어진 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    쌍곡선 ax²−by²=8 위의 점 (3,5)에서의 접선의 기울기가 3 일 때 상수 a, b 에 대하여 a−b.
  category: "점 대입 → 접선 기울기 식 → 연립"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선의 기울기 조건으로 쌍곡선의 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    9a−25b=8 과 접선 3ax−5by=8 의 기울기 3a/(5b)=3 → a=5b → b=2/5, a=2 → a−b=8/5. 미정계수 두 식 연립은 표준 절차·통찰 없음. 매개변수 두 개로 M_total 5. 「중」 ★2 유지.
  tier: star_2
  mechanism_primary: "(3,5) 대입 9a−25b=8 → 접선 기울기 3a/(5b)=3 → a=5b → (a,b)=(2,2/5) → a−b=8/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{8}{5}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0211.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점 좌표·기울기·우변 상수를 바꿀 수 있음. 제약: 두 식이 독립이어야 하고 해 (a,b) 가 같은 부호(쌍곡선이 되려면 ab>0)여야 함 · 기울기를 정수로 두어 답이 단순 분수."
    creative: "(1) 기울기 대신 「접선이 점 (p,q)를 지난다」로 바꾸면 같은 골조(★2) (2) 접선이 한 점근선과 수직이라는 조건으로 바꾸면 점근선 기울기 √(a/b) 개입(0213 형 · ★2~3) (3) a, b 가 자연수라는 조건에서 해의 존재를 묻는 역문제(I-VF d1 · ★3)."
```

```yaml
- id: RPM-GEO-0212
  page: 33
  vendor_label: "유형 09 쌍곡선의 접선의 방정식; 접점의 좌표가 주어진 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    쌍곡선 x²/3−y²/4=−1 위의 점 (3,4)에서의 접선 l 과 쌍곡선의 두 초점 사이의 거리의 곱.
  category: "접점 공식 → 초점 (0,±√7) → 두 거리의 곱"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 접선과 두 초점 사이의 거리의 곱"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선 x−y+1=0. 우변이 −1 이라 초점은 y축 위 (0,±√7). 거리 곱 |1−√7|·|1+√7|/2=3. 세 절차·통찰 없음, 초점 축을 잘못 잡는 표기 함정 하나. 「중」 ★2 유지. (초점에서 접선까지 거리의 곱은 접점과 무관하게 3 으로 일정 — 검산용.)
  tier: star_2
  mechanism_primary: "접점 공식 x−y+1=0 → 초점 (0,±√7) → 두 거리의 곱 |1−7|/2=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$3$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0212.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점을 곡선 위 다른 유리점으로, 분모 (3, 4) 를 바꿀 수 있음. 제약: 거리의 곱은 항상 3(=x² 항의 분모)과 같아 접점과 무관 — 분모만 바꾸면 답이 정해짐 · 접점이 곡선 위."
    creative: "(1) 「거리의 곱이 접점과 무관하게 일정함」을 보이는 서술형(I-PD d1 · ★3) (2) 두 초점에서 접선까지 거리의 합·차(★3) (3) 타원으로 바꾸면 곱이 b² 로 같은 골조(★2)."
```

```yaml
- id: RPM-GEO-0213
  page: 33
  vendor_label: "유형 09 쌍곡선의 접선의 방정식; 접점의 좌표가 주어진 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    쌍곡선 2x²−y²=a 위의 점 (b,−1)에서의 접선이 한 점근선과 수직일 때 b/a (a 상수, b>0). 5지선다.
  category: "점 대입 → 접선 기울기 −2b → 점근선 ±√2 와 수직 → a 결정 → 비"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 접선과 점근선의 수직 조건(미정계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선 2bx+y=a 의 기울기 −2b. 점근선은 a 의 부호와 무관하게 y=±√2x 이고 b>0 이므로 y=√2x 와 수직 → b=√2/4 → a=2b²−1=−3/4 → b/a=−√2/3. 다섯 단계이나 각 단계는 공식·산술이고 통찰 없음. 함정은 점근선 선택(부호)과 a 가 음수(초점이 y축 위인 쌍곡선)로 나오는 것. 「중」 ★2 유지.
  tier: star_2
  mechanism_primary: "접선 2bx+y=a 기울기 −2b → 점근선 y=±√2x 와 수직(b>0) → b=√2/4 → 대입 a=−3/4 → b/a=−√2/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0213.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x² 계수(2)·접점 y좌표(−1)를 바꿀 수 있음. 제약: 점근선 기울기 ±√(계수) 라 근호가 답에 남음 · b>0 조건으로 점근선 하나가 정해져야 하고 a≠0."
    creative: "(1) 「수직」을 「평행」으로 바꾸면 접선은 점근선과 평행할 수 없음을 아는 것이 핵심인 함정형(I-EQV d1 · ★3) (2) 접선이 점근선과 45°를 이루는 조건(★3) (3) a 의 부호(초점 축)를 묻는 참·거짓(★2)."
```

```yaml
- id: RPM-GEO-0214
  page: 33
  vendor_label: "유형 09 쌍곡선의 접선의 방정식; 접점의 좌표가 주어진 경우"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    쌍곡선 x²−y²=8 위의 점 (3,1)에서의 접선과 두 점근선으로 둘러싸인 삼각형의 넓이(그림).
  category: "접점 공식 → 점근선 y=±x 와 교점 → 넓이"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 접선과 두 점근선으로 둘러싸인 삼각형의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접선 3x−y=8 이 y=x, y=−x 와 만나는 점 (4,4), (2,−2). 두 점근선이 서로 수직이라 넓이 = (1/2)·4√2·2√2 = 8(신발끈으로 해도 됨). 교점 둘·넓이 한 번의 다섯 단계·계산 중간, 통찰 없음. M_total 6 → 「상중」 출발 ★3 유지. 성질(넓이 = ab = 8 로 접점 무관)은 검산용. [분류 이슈] 통찰 없는 절차형인데 벤더 상중 — ★2 후보도 성립, 라벨은 ★3.
  tier: star_3
  mechanism_primary: "접점 공식 3x−y=8 → 점근선 y=±x 와 교점 (4,4),(2,−2) → 직교 점근선이라 넓이 (1/2)(4√2)(2√2)=8"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$8$"
  answer_source: "답지"
  figure: crop:fig-0214.png
  latex: latex-bank/rpm-geo/items/0214.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점을 x²−y²=8 위 다른 점으로 바꿔도 넓이는 8 로 불변 · 우변 상수 c 를 바꾸면 넓이 c. 제약: x²/a²−y²/b²=1 로 바꾸면 점근선이 직교하지 않아 신발끈이 필요(넓이 ab) · 그림은 접점 라벨만 바꿈."
    creative: "(1) 넓이가 접점에 무관함을 보이는 서술형(I-PD d1 · ★3) (2) 넓이가 주어졌을 때 쌍곡선 상수 결정(I-BW d1 · ★3) (3) 접점이 접선과 두 점근선의 교점의 중점임을 이용하는 문제(I-SYM d1 · ★3~4)."
```

```yaml
- id: RPM-GEO-0215
  page: 33
  vendor_label: "유형 09 쌍곡선의 접선의 방정식; 접점의 좌표가 주어진 경우"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    쌍곡선 x²−y²=4 위 제1사분면 점 P(a,b)에서 y축에 내린 수선의 발 A, P 에서의 접선이 y축과 만나는 점 B. AB/AP=5/4 일 때 a+b(그림).
  category: "접선 y절편 → 길이비 식 → 곡선 조건과 결합(동차화) → a:b → 연립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "AB/AP=5/4 → 4(b²+4)=5ab 의 상수 4 를 a²−b² 로 바꿔 4a²=5ab, a:b=5:4 로 두 조건을 통합(동차화)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "쌍곡선의 접선의 절편과 접점 좌표의 길이비"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접선 ax−by=4 의 y절편 −4/b 라 AB=b+4/b, AP=a. 비 조건 4(b²+4)=5ab 에서 4 를 a²−b² 로 바꾸면 4a²=5ab → a:b=5:4 → 곡선에 대입해 (10/3, 8/3) → a+b=6. 동차화가 핵심(CON d2)이고 없으면 a=√(b²+4) 대입 후 사차식. B 의 y좌표가 음수라 AB=b+4/b 로 잡는 부호 처리. M_total 7 → 「상중」 ★3 유지.
  tier: star_3
  mechanism_primary: "접선 y절편 −4/b → AB=b+4/b, AP=a → 4(b²+4)=5ab 에 4=a²−b² 대입(동차화) → 4a=5b → x²−y²=4 연립 → (10/3,8/3) → 6"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$6$"
  answer_source: "답지"
  figure: crop:fig-0215.png
  latex: latex-bank/rpm-geo/items/0215.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 상수 c 와 길이비 r 을 바꿀 수 있음. 일반식: x²−y²=c 에서 a:b=r:1, b²=c/(r²−1). 제약: c/(r²−1) 이 유리수의 제곱이 되게(r=5/4, c=4 → b²=64/9) · r>1 · P 는 제1사분면(a>b>0)."
    creative: "(1) x축으로 수선을 내리고 접선의 x절편으로 같은 골조(★3) (2) 길이비 대신 삼각형 ABP 의 넓이 조건(★3~4) (3) 타원으로 옮기면 접선 절편 부호가 바뀌어 절댓값 처리가 추가(T-부호 · ★3)."
```

### 유형 10 쌍곡선 밖의 점에서 그은 접선의 방정식

```yaml
- id: RPM-GEO-0216
  page: 34
  vendor_label: "유형 10 쌍곡선 밖의 점에서 그은 접선의 방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    점 (0,√3)에서 쌍곡선 4x²−y²=−4 에 그은 접선 y=mx+n 에 대하여 m²+n². 5지선다.
  category: "기울기 m 접선 공식(−1 꼴) → n=√3 → m²"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선 밖의 점에서 그은 접선의 방정식(기울기 접선 공식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y²/4−x²=1 의 기울기 m 접선 y=mx±√(4−m²) 이 (0,√3) 을 지나므로 n=√3, 4−m²=3 → m²=1 → m²+n²=4. 판별식으로 해도 세 줄. 통찰 없음·M_total 4 이나 −1 꼴 공식(n²=b²−a²m²) 구분이 필요한 유형 대표라 ★2 유지.
  tier: star_2
  mechanism_primary: "−1 꼴 접선 y=mx±√(4−m²) → n=√3 → m²=1 → m²+n²=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0216.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 (0,k) 와 쌍곡선 상수를 바꿀 수 있음. 제약: 점이 y축 위면 n=k 로 바로 정해지고 b²−a²m²=k²>0 이어야 접선 존재(|k|<b) · 점이 두 가지 사이(쌍곡선 외부)에 있어야 접선이 두 개."
    creative: "(1) 점을 y축 밖 (1,√3) 등으로 옮기면 m 의 이차식 → 두 접선(★2~3) (2) 두 접선의 기울기의 곱·이루는 각(근과 계수 · ★3) (3) 접선을 그을 수 없는 점의 범위(I-EQV d1 · ★3)."
```

```yaml
- id: RPM-GEO-0217
  page: 34
  vendor_label: "유형 10 쌍곡선 밖의 점에서 그은 접선의 방정식"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    점 (3,3)에서 쌍곡선 x²−y²=2 에 그은 접선의 접점 (a,b)에 대하여 a+b. 5지선다.
  category: "접점 미지수 → 접선이 (3,3) 통과 → 곡선 조건과 결합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선 밖의 점에서 그은 접선의 접점(접점 미지수 설정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접점 (a,b) 의 접선 ax−by=2 가 (3,3) 을 지나 a−b=2/3, 곡선 a²−b²=2 → (a−b)(a+b)=2 → a+b=3. 인수분해로 즉답이지만 대입해 풀어도 두 줄. (3,3) 이 점근선 y=x 위라 접선이 하나뿐이어서 「접점」이 단수. 통찰 없음·M_total 4, 「중하」이나 접점을 문자로 두는 설정이 있어 ★2.
  tier: star_2
  mechanism_primary: "접점 (a,b) 의 접선 ax−by=2 에 (3,3) 대입 → a−b=2/3 → a²−b²=(a−b)(a+b)=2 → a+b=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0217.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 (3,3) 을 점근선 위 다른 점 (k,k) 로 바꾸면 a−b=2/k, a+b=k 로 접점 하나가 유지됨. 제약: 점을 점근선 밖으로 옮기면 접점이 둘이 되어 「접점 (a,b)」 발문이 성립하지 않음 — 「두 접점의 x좌표의 합」 등으로 발문을 바꿔야 함."
    creative: "(1) 점을 점근선 밖으로 옮기고 두 접점 사이 거리를 묻기(0237 형 · ★3) (2) 「점근선 위의 점에서 그은 접선이 하나뿐인 이유」 서술(I-EQV d1 · ★3) (3) 접점 대신 기울기 m 으로 두는 풀이와 비교(I-SC d1 · ★3)."
```

```yaml
- id: RPM-GEO-0218
  page: 34
  vendor_label: "유형 10 쌍곡선 밖의 점에서 그은 접선의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    점 P(0,1)에서 쌍곡선 x²/3−y²=1 에 그은 두 접선의 접점 A, B 에 대하여 삼각형 PAB 의 넓이.
  category: "접점 미지수 → P 통과 조건 → y₁=−1 → x₁=±√6 → 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선 밖의 점에서 그은 두 접선의 접점과 삼각형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접점 (x₁,y₁) 의 접선 x₁x/3−y₁y=1 이 (0,1) 을 지나므로 y₁=−1 이 두 접점에 공통 → x₁=±√6. 밑변 AB=2√6 이 수평, 높이 2 → 2√6. P 가 y축 위라 접점이 대칭으로 나와 연립이 짧음. 통찰 없음·M_total 5 → 「중」 ★2 유지.
  tier: star_2
  mechanism_primary: "접점 조건 x₁x/3−y₁y=1 에 (0,1) → y₁=−1 → x₁=±√6 → 밑변 2√6·높이 2 → 2√6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\sqrt{6}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0218.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P(0,k) 의 k 와 쌍곡선 분모를 바꿀 수 있음(y₁=−1/k, x₁²=3(1+1/k²), 넓이 = x₁·(k+1/k)). 제약: k≠0 · 근호가 정리되는 k · 점이 두 가지 사이에 있어야 접선 둘."
    creative: "(1) P 를 y축 밖으로 옮기면 접점 둘을 연립으로 구하는 0234·0237 형(★3) (2) 넓이 대신 직선 AB(극선)의 방정식(★2) (3) 두 접선이 수직이 되는 P 의 위치(0238 형 · I-RT d2 · ★3)."
```

### 유형 UP 11 이차곡선과 직선 사이의 거리의 최솟값

```yaml
- id: RPM-GEO-0219
  page: 34
  vendor_label: "유형 UP 11 이차곡선과 직선 사이의 거리의 최솟값"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    포물선 y²=x 위의 점 P(a,b)와 직선 y=x+3 사이의 거리가 최소일 때 ab. 5지선다.
  category: "거리 최소 ↔ 기울기 1 인 접선 → 접점"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "곡선 위의 점과 직선 사이 거리의 최솟값 → 직선과 평행한 접선의 접점으로 전환(대수 최소화 → 기하 접선)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차곡선 위의 점과 직선 사이의 거리의 최솟값(평행한 접선)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    기울기 1 인 접선 y=x+1/4(p=1/4) 의 접점 (1/4,1/2) → ab=1/8. 「최소 거리 ↔ 평행한 접선」 전환(RT d1)이 유형의 골조이고 그 뒤는 공식 한 줄. 포물선은 (b²,b) 로 매개화해 |b²−b+3|/√2 의 최소로도 풀려 통찰이 강제되지는 않음. 유형 UP 대표 출발 ★3 유지. [분류 이슈] 매개화 대안이 있어 통찰 강제성이 약하고 M_total 4 — ★2 후보.
  tier: star_3
  mechanism_primary: "거리 최소 ↔ 기울기 1 접선 y=x+1/4 → 접점 (1/4,1/2) → ab=1/8"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0219.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선 y²=4px 의 p 와 직선 기울기 m·절편을 바꿀 수 있음(접점 (p/m², 2p/m)). 제약: 직선이 포물선과 만나지 않아야(판별식<0) 최소 거리가 접선에서 생김 · m 을 정수·단순 분수로 두어 접점이 유리점."
    creative: "(1) 「거리의 최솟값」 자체를 묻기(★3) (2) 직선이 포물선과 만나도록 바꾸면 최솟값 0 — 함정형(I-VF d1 · ★3) (3) 포물선 대신 타원·쌍곡선으로 바꾸면 매개화가 어려워 접선 전환이 강제됨(0220 형 · ★3)."
```

```yaml
- id: RPM-GEO-0220
  page: 34
  vendor_label: "유형 UP 11 이차곡선과 직선 사이의 거리의 최솟값"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    쌍곡선 x²/3−y²/2=1 위의 점 P 와 직선 y=√2x−1 사이의 거리의 최솟값.
  category: "거리 최소 ↔ 기울기 √2 인 접선 두 개 → 가까운 쪽 거리"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "거리의 최솟값 → 직선과 평행한 접선 두 개 중 직선에 가까운 쪽과의 평행선 거리로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차곡선 위의 점과 직선 사이의 거리의 최솟값(평행한 접선)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    기울기 √2 접선 y=√2x±2(√(3·2−2)=2) → 직선 y=√2x−1 과의 거리 3/√3, 1/√3 중 최소 √3/3. 직선이 쌍곡선과 만나지 않음(판별식<0)을 확인해야 최솟값이 0 이 아님. 평행 접선 전환(RT d1) 뒤 두 접선 중 선택(부호·경계 함정). 유형 UP 「중」 ★3.
  tier: star_3
  mechanism_primary: "기울기 √2 접선 y=√2x±2 → y=√2x−1 과 평행선 거리 |2+1|/√3, |−2+1|/√3 → 최소 √3/3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{\sqrt{3}}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0220.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "쌍곡선 분모와 직선 절편을 바꿀 수 있음. 제약: 접선 존재 조건 a²m²−b²>0(|m| 이 점근선 기울기보다 커야) · 직선 절편이 두 접선 절편 사이면 쌍곡선과 만나 최솟값 0 이 되므로 |절편|>√(a²m²−b²) · 근호 정리."
    creative: "(1) 절편을 두 접선 사이에 두어 최솟값이 0 이 되는 함정형(I-VF d1 · ★3) (2) 기울기를 점근선보다 완만하게 주어 접선이 없고 거리가 한없이 작아짐을 논하는 서술형(I-EQV d2 · ★4) (3) 최솟값일 때의 점 P 좌표(★3)."
```

```yaml
- id: RPM-GEO-0221
  page: 34
  vendor_label: "유형 UP 11 이차곡선과 직선 사이의 거리의 최솟값"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    포물선 x²=4y 위의 점 P 와 점 Q(8,2)에 대하여 선분 PQ 의 길이의 최솟값.
  category: "P 매개화 → PQ ⊥ 접선(법선 조건) → t³=64 → 거리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "정점과 곡선 사이 최단 거리 → 그 점에서의 접선에 수직인 직선(법선)이 Q 를 지난다는 조건으로 전환(평행 접선 골조의 변형)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이차곡선 위의 점과 정점 사이의 거리의 최솟값(법선 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    P(t,t²/4) 의 접선 기울기 t/2 와 PQ 기울기의 곱이 −1 → t³=64 → t=4 → P(4,4) → PQ=2√5. 직선이 아닌 「점」과의 거리라 평행 접선이 아니라 법선 조건으로 옮겨야 함(RT d2). 거리제곱 t⁴/16−16t+68 을 미분하는 길(수Ⅱ)도 있음. 유형 UP 「상중」 ★3.
  tier: star_3
  mechanism_primary: "P(t,t²/4) → 접선 기울기 t/2 → (t/2)·(PQ 기울기)=−1 → t³=64 → P(4,4) → PQ=2√5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2\sqrt{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0221.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "Q(p,q) 를 바꿀 때 법선 조건 t³+(8−4q)t−8p=0 이 정수근을 갖도록 설계(q=2 이면 t³=8p). 제약: 삼차식이 인수분해되어야 함 · Q 의 위치(포물선 안팎)에 따라 법선 개수가 달라짐 · 답의 근호 정리."
    creative: "(1) Q 를 초점 (0,1) 로 바꾸면 최솟값이 꼭짓점 거리 1 로 정의만으로 즉답(I-EQV d1 · ★2) (2) 「최솟값일 때 PQ 가 법선」임을 증명하는 서술형(★4) (3) 중심 Q 인 원이 포물선에 접할 때의 반지름으로 바꾸면 같은 골조의 다른 표현(I-RT d2 · ★4)."
```

```yaml
- id: RPM-GEO-0222
  page: 34
  vendor_label: "유형 UP 11 이차곡선과 직선 사이의 거리의 최솟값"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형 UP"
  summary: |
    타원 x²/4+y²=1 위의 점 P 와 두 꼭짓점 A(−2,0), B(0,−1)에 대하여 삼각형 PAB 의 넓이의 최댓값(서술형).
  category: "AB 직선·길이 → AB 와 평행한 접선(먼 쪽) → 높이 → 넓이"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "넓이 최대 → 밑변 AB 에서 가장 먼 점 → AB 와 평행한 접선의 접점(먼 쪽)으로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차곡선 위의 점과 직선 사이의 거리의 최솟값(평행한 접선)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    AB: x+2y+2=0, |AB|=√5. 기울기 −1/2 접선 x+2y=±2√2 중 먼 쪽과의 거리 (2+2√2)/√5 → 넓이 (1/2)·√5·그 값 = √2+1. 평행 접선 전환(RT d1)에 밑변·거리·넓이 절차가 붙어 M_total 6. 유형 UP 「상중」 ★3.
  tier: star_3
  mechanism_primary: "AB: x+2y+2=0, |AB|=√5 → 평행 접선 x+2y=±2√2 중 먼 쪽 거리 (2+2√2)/√5 → 넓이 √2+1"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\sqrt{2}+1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0222.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원 장·단축과 두 꼭짓점의 선택을 바꿀 수 있음. 일반식: A(−a,0), B(0,−b) 이면 최댓값 = ab(1+√2)/2. 제약: 먼 쪽 접선을 골라야 최댓값 · 꼭짓점이 아닌 두 점으로 바꾸면 절편이 √(a²m²+b²) 꼴로 남음."
    creative: "(1) 최솟값(가까운 쪽 접선)도 함께 묻기(★3) (2) 밑변을 두 초점 F, F' 로 바꾸면 높이 최대 = b 로 정의만으로 즉답(I-EQV d1 · ★2) (3) 제1사분면 P 에 대해 사각형 OAPB 넓이의 최댓값으로 바꾸면 매개화 (2cosθ, sinθ) 가 자연스러움(I-SC d1 · ★4)."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-GEO-0223
  page: 35
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭"
  summary: |
    포물선 y²=kx 에 접하고 기울기가 1 인 직선과 원점 사이의 거리가 2√2 일 때 양수 k.
  category: "기울기 1 접선 y=x+k/4 → 원점 거리 → k"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 포물선의 접선의 방정식(미정계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y²=4px 에서 p=k/4 → 접선 y=x+k/4 → 원점 거리 (k/4)/√2=2√2 → k=16. 두 단계·통찰 없음. 시험에 꼭 구역(난이도 표시 없음) 출발 ★2 · 매개변수 k 로 M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "y²=kx → p=k/4 → 접선 y=x+k/4 → 원점 거리 (k/4)/√2=2√2 → k=16"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$16$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0223.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기 m·거리 d 를 바꿀 수 있음(접선 y=mx+k/(4m), 거리 k/(4m√(1+m²))=d → k=4md√(1+m²)). 제약: √(1+m²) 가 답을 무리수로 만들지 않게 (m,d)=(1,2√2)·(2,√5) 처럼 맞춤 · k>0."
    creative: "(1) 거리 대신 접선이 지나는 점 (p,q) 로(★2) (2) 접선과 두 좌표축이 만드는 삼각형 넓이로 k 결정(★2~3) (3) 원점 거리가 최대가 되는 기울기를 묻는 역문제(I-BW d1 · ★3)."
```

```yaml
- id: RPM-GEO-0224
  page: 35
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭"
  summary: |
    포물선 y²=−4x 에 접하고 x축 양의 방향과 60° 를 이루는 직선이 점 (2,a)를 지날 때 a. 5지선다.
  category: "각 → 기울기 √3 → 접선 공식(p=−1) → 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 포물선의 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    기울기 tan60°=√3, y²=4px 에 p=−1 → y=√3x−1/√3 → x=2 에서 a=2√3−√3/3=5√3/3. 세 단계·통찰 없음·p<0 부호 함정 하나. 시험에 꼭 출발 ★2.
  tier: star_2
  mechanism_primary: "tan60°=√3 → 접선 y=mx+p/m=√3x−1/√3 → x=2 → a=5√3/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0224.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각(30°·45°·60°)과 p, 대입 x좌표를 바꿀 수 있음. 제약: p<0 이면 y절편 p/m 부호가 바뀜 · 답이 선택지와 같은 √3 배수 꼴로 정리되게."
    creative: "(1) 접선의 x절편·y절편 묻기(★2) (2) 「x축과 이루는 각」을 「준선과 이루는 각」으로 바꿔 각도를 거쳐 기울기를 얻기(I-RT d1 · ★3) (3) 접점과 초점 사이 거리 묻기(정의 활용 · ★3)."
```

```yaml
- id: RPM-GEO-0225
  page: 35
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭"
  summary: |
    포물선 y²=16x 에 접하고 직선 8x−2y+3=0 과 평행한 직선이 x축·y축과 만나는 점 P, Q 와 초점 F 에 대하여 삼각형 PQF 의 넓이.
  category: "평행 → 기울기 4 → 접선 y=4x+1 → P, Q, F → 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 포물선의 접선과 좌표축·초점이 만드는 삼각형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    p=4, 기울기 4 접선 y=4x+1 → P(−1/4,0), Q(0,1), F(4,0) → 밑변 PF=17/4, 높이 1 → 17/8. 다섯 단계이나 모두 공식·좌표 읽기, 통찰 없음. 시험에 꼭 출발 ★2.
  tier: star_2
  mechanism_primary: "기울기 4 → 접선 y=4x+p/m=4x+1 → P(−1/4,0), Q(0,1), F(4,0) → (1/2)(17/4)(1)=17/8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{17}{8}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0225.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "p 와 기울기 m 을 바꿀 수 있음(접선 y=mx+p/m → P(−p/m²,0), Q(0,p/m), F(p,0) → 넓이 (1/2)(p+p/m²)(p/m)). 제약: m≠0 · 답이 단순 분수가 되게 m 을 정수로."
    creative: "(1) 삼각형 PQF 가 직각이등변이 되는 m 을 묻기(I-BW d1 · ★3) (2) 접점 T 를 더해 사각형 넓이(★3) (3) 넓이가 주어졌을 때 p 를 결정(★3)."
```

```yaml
- id: RPM-GEO-0226
  page: 35
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭"
  summary: |
    포물선 x²=−2y 위의 점 (−4,−8)에서의 접선에 수직이고 초점을 지나는 직선 y=mx+n 에 대하여 mn. 5지선다.
  category: "접점 공식 → 기울기 4 → 수직 기울기 −1/4 → 초점 (0,−1/2) → mn"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선 위의 점에서의 접선에 수직인 직선(법선)과 초점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x²=4py(p=−1/2) 의 접선 −4x=−(y−8) → 기울기 4, 수직 기울기 −1/4, 초점 (0,−1/2) → y=−x/4−1/2 → mn=1/8. 세 단계·통찰 없음, 초점 부호 함정 하나. 「중요」 태그는 +0. 시험에 꼭 ★2.
  tier: star_2
  mechanism_primary: "x²=4py(p=−1/2) 접선 x₁x=2p(y+y₁) → 기울기 4 → 수직 −1/4 → 초점 (0,−1/2) 통과 → mn=1/8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0226.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x²=4py 의 p 와 접점을 바꿀 수 있음(접점 (x₁, x₁²/(4p)) 의 접선 기울기 x₁/(2p)). 제약: x₁≠0 이어야 수직 기울기가 정의됨 · mn 이 선택지와 맞는 단순 분수."
    creative: "(1) 초점 대신 준선 위의 점을 지나는 조건(★2) (2) 접선·법선·준선이 만드는 삼각형(I-RT d1 · ★3) (3) 법선이 축과 만나는 점 N 에 대해 FN=FP 임을 확인하는 서술형(I-PD d1 · ★3)."
```

```yaml
- id: RPM-GEO-0227
  page: 35
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭"
  summary: |
    포물선 y²=14x 위의 점 (a,b)에서의 접선이 타원 (x+1)²/2+y²/4=1 의 넓이를 이등분할 때 a²+b². 5지선다.
  category: "넓이 이등분 ↔ 타원 중심 통과 → 접선에 (−1,0) 대입 → a → b²"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "타원의 넓이를 이등분하는 직선 ↔ 타원의 대칭 중심 (−1,0) 을 지난다는 동치 조건으로 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차곡선의 접선이 타원의 넓이를 이등분할 조건(중심 통과)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접선 by=7(x+a) 가 중심 (−1,0) 을 지나 7(a−1)=0 → a=1, b²=14a=14 → a²+b²=15. 이등분 조건을 중심 통과로 옮기는 것(EQV d1)이 전부이고 나머지는 한 줄 — 이 해석을 모르면 진행 불가. 시험에 꼭 · 통찰 1개 → ★3.
  tier: star_3
  mechanism_primary: "이등분 ↔ 중심 (−1,0) 통과 → 접선 by=7(x+a) 에 대입 → a=1 → b²=14 → a²+b²=15"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0227.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원 중심 (h,k) 와 포물선 y²=4px 를 바꿀 수 있음(접선 y₁y=2p(x+x₁) 이 (h,k) 통과). 제약: 중심이 x축 위(k=0)면 a=−h 로 바로 결정, k≠0 이면 y₁ 이 이차식이라 접점이 둘 · 타원 크기는 답과 무관 · b² 가 자연수."
    creative: "(1) 타원 대신 원·마름모 등 점대칭 도형으로 바꿔도 같은 골조(★3) (2) 중심을 x축 밖으로 두어 접점이 둘일 때 두 접선의 교점(★3~4) (3) 「둘레를 이등분」으로 바꾸어도 중심 통과이나 근거가 다름(I-EQV d2 · ★4)."
```

```yaml
- id: RPM-GEO-0228
  page: 35
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭"
  summary: |
    점 (4,0)에서 포물선 y²=−x 에 그은 접선 중 기울기가 음수인 직선의 y절편.
  category: "기울기 m 접선 y=mx+p/m → (4,0) 대입 → m=±1/4 → 음수 선택"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선 밖의 점에서 그은 접선의 방정식(기울기 접선 공식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    p=−1/4, 접선 y=mx−1/(4m) 이 (4,0) 을 지나 16m²=1 → m=−1/4 → y절편 −1/(4m)=1. 세 단계·통찰 없음, p 부호와 m 선택 함정. 시험에 꼭 ★2.
  tier: star_2
  mechanism_primary: "y=mx+p/m (p=−1/4) 에 (4,0) → 16m²=1 → m=−1/4 → y절편 −1/(4m)=1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$1$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0228.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 (k,0) 과 p 를 바꿀 수 있음(m²=−p/k 라 kp<0 이어야 접선 존재). 제약: 점이 포물선 외부(축 위 열린 쪽 반대편) · −p/k 를 제곱수로 두어 답이 유리수."
    creative: "(1) 점을 준선 x=1/4 위로 옮기면 두 접선이 수직임을 보이기(I-EQV d1 · ★3) (2) 두 접점을 잇는 선분의 길이(★3) (3) 두 접선과 y축이 만드는 삼각형 넓이(★3)."
```

```yaml
- id: RPM-GEO-0229
  page: 35
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭"
  summary: |
    타원 x²/3+y²/6=1 에 접하고 직선 2x−y−1=0 에 수직인 직선이 x+ay+b=0 일 때 상수 a, b 에 대하여 a²+b².
  category: "수직 → 기울기 −1/2 → 타원 접선 공식 → 정리해 a, b"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 타원의 접선의 방정식(수직 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    기울기 −1/2 접선 y=−x/2±√(3/4+6) → x+2y∓3√3=0 → a=2, b=∓3√3 → a²+b²=4+27=31. 세 단계·통찰 없음, 두 접선 모두 같은 값. 시험에 꼭 ★2.
  tier: star_2
  mechanism_primary: "수직 기울기 −1/2 → y=mx±√(a²m²+b²)=−x/2±3√3/2 → x+2y∓3√3=0 → a²+b²=31"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$31$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0229.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원 분모와 주어진 직선의 기울기를 바꿀 수 있음. 제약: a²m²+b² 가 제곱수 또는 정리된 근호 · 발문 형식 x+ay+b=0 에 맞추려면 x 계수를 1 로 정규화(기울기 −1/a 가 정수 분수)."
    creative: "(1) 두 접선 사이의 거리(★2) (2) 접점의 좌표(★3) (3) 수직 조건을 「주어진 직선과 45°」로 바꾸면 기울기가 두 개(I-MI d1 · ★3)."
```

```yaml
- id: RPM-GEO-0230
  page: 35
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭"
  summary: |
    직선 y=−x+4 가 타원 x²/6+y²/k=1 에 접할 때 두 초점 사이의 거리(k 상수). 5지선다.
  category: "접선 조건 n²=a²m²+b² → k=10 → 초점이 y축 → 2c"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선 조건으로 타원의 미정계수 결정 후 초점 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    16=6·1+k → k=10 → 10>6 이라 장축이 y축, c²=10−6=4 → 초점 거리 4. 두 단계·통찰 없음, k>6 을 보고 초점을 y축 위에 두는 표기 함정. 시험에 꼭 ★2.
  tier: star_2
  mechanism_primary: "접선 조건 16=6·1+k → k=10 → 10>6 이라 c²=10−6=4 → 2c=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0230.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선 절편·기울기와 x² 분모를 바꿀 수 있음(k=n²−a²m²). 제약: k>0 · k 와 x² 분모의 대소로 초점 축이 정해지므로 의도한 함정 방향에 맞춤 · 2c 가 선택지 꼴."
    creative: "(1) 접점의 좌표(★2~3) (2) k 가 6 보다 작게 나오게 바꿔 초점이 x축 위(★2) (3) 접선 조건 대신 「직선과 타원이 만나지 않는 k 의 범위」(판별식 부등식 · I-RT d1 · ★3)."
```

```yaml
- id: RPM-GEO-0231
  page: 36
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭"
  summary: |
    포물선 y²=6x 와 타원 x²/9+y²/12=1 이 제1사분면에서 만나는 점 P 에서의 타원의 접선의 방정식.
  category: "연립(y² 소거) → 2x²+9x−18=0 → P(3/2,3) → 타원 접점 공식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 이차곡선의 교점에서의 접선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y²=6x 대입 → 2x²+9x−18=0 → (2x−3)(x+6)=0 → x=3/2(x>0), y=3 → 접선 x/6+y/4=1 → y=−2x/3+4. 연립 인수분해 + 공식, 통찰 없음, 제1사분면으로 근 선택. 시험에 꼭 ★2.
  tier: star_2
  mechanism_primary: "y²=6x 를 타원에 대입 → (2x−3)(x+6)=0 → P(3/2,3) → (3/2)x/9+3y/12=1 → y=−2x/3+4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=-\dfrac{2}{3}x+4$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0231.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선 y²=4px 와 타원 분모를 바꾸되 연립 이차식이 인수분해되고 교점이 유리점. 제약: 제1사분면 교점이 실제로 존재(두 곡선이 만남) · 음수 근을 버리는 근거(x>0)."
    creative: "(1) 교점에서 두 곡선의 접선이 이루는 각·수직 여부(0241 형 · ★3) (2) 포물선 위의 점 P 에서의 접선으로 바꾸기(★2) (3) 교점 P 와 두 곡선의 초점을 잇는 삼각형 넓이(★3)."
```

```yaml
- id: RPM-GEO-0232
  page: 36
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭"
  summary: |
    타원 x²/k+y²/4=1 (k<4) 의 한 초점을 지나는 직선 y=−2x+1 과 타원 위의 점 (a,b)에서의 접선이 평행할 때 ab.
  category: "k<4 → 초점 (0,±c) → 직선의 y절편 1 이 초점 → k=3 → 접선 기울기 −2 → 접점"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "k<4 라 초점이 y축 위 → 「초점을 지나는 직선」을 「직선의 y절편 (0,1) 이 초점」으로 해석해 c=1"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "타원의 접선이 주어진 직선과 평행할 조건(접점·미정계수 결정)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    k<4 이므로 초점 (0,±√(4−k)); 직선이 y축과 만나는 (0,1) 이 초점 → k=3. 접선 ax/3+by/4=1 의 기울기 −4a/(3b)=−2 → a=3b/2 → 타원 대입 b²=1 → ab=3/2(부호 같음). 초점 해석(EQV d1) 뒤 접점 연립·매개변수 셋. M_total 6 → 시험에 꼭 ★3.
  tier: star_3
  mechanism_primary: "k<4 → 초점 (0,±√(4−k)) → 직선 y절편 (0,1)=초점 → k=3 → 접선 기울기 −4a/(3b)=−2 → a=3b/2 → 타원 대입 b²=1 → ab=3/2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0232.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선 y=mx+c 의 c 를 초점 거리로(k=4−c²), 기울기 m 으로 접점이 정해짐. 제약: k=4−c²>0 · 기울기 조건 −4a/(kb)=m 과 타원식이 유리해를 갖게 m 을 맞춤 · 두 접점 (a,b),(−a,−b) 의 ab 는 같음."
    creative: "(1) k>4 로 바꾸면 초점이 x축 위라 직선의 x절편이 초점(★3) (2) 두 접점 사이 거리(★3) (3) 「초점을 지나는 직선」을 「초점에서 접선까지의 거리」 조건으로 바꾸기(★3~4)."
```

```yaml
- id: RPM-GEO-0233
  page: 36
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["수능 기출"]
  category_type: "시험에 꼭"
  summary: |
    자연수 n(n≥2)에 대하여 직선 x=1/n 이 두 타원 C₁: x²/2+y²=1, C₂: 2x²+y²/2=1 과 제1사분면에서 만나는 점 P, Q. C₁ 위 P 에서의 접선의 x절편 α, C₂ 위 Q 에서의 접선의 x절편 β 에 대하여 6≤α−β≤15 인 n 의 개수. 5지선다.
  category: "접선 x절편 = a²/x₁ (y 불필요) → α=2n, β=n/2 → 3n/2 부등식 → 정수 개수"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접점 (x₁,y₁) 의 접선 x₁x/a²+y₁y/b²=1 의 x절편은 a²/x₁ 로 y₁ 과 무관 → P, Q 의 y좌표를 구하지 않고 절편을 n 으로 표현"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "타원의 접선의 x절편(접점 x좌표만으로 결정)과 부등식의 정수해"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    α=2/(1/n)=2n, β=(1/2)/(1/n)=n/2 → α−β=3n/2 → 6≤3n/2≤15 → 4≤n≤10 → 7개. y좌표를 구하려 들면 근호가 생겨 막히고, 절편이 접점의 x좌표만으로 정해짐을 보면 두 줄(EQV d1). 경계 정수 개수 함정. 수능 기출(3점급)·M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "접점 공식에서 x절편 = a²/x₁ → α=2n, β=n/2 → 6≤3n/2≤15 → 4≤n≤10 → 7개"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0233.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 타원의 x² 분모(2 와 1/2)와 부등식 범위를 바꿀 수 있음(α−β=(a₁²−a₂²)n). 제약: 직선 x=1/n 이 두 타원과 실제로 만나려면 1/n 이 작은 쪽 반장축보다 작아야(n≥2) · 정수해 개수가 선택지 꼴."
    creative: "(1) y절편의 차로 바꾸면 y좌표(근호)가 필요해 M 이 커짐(★4) (2) 두 접선의 교점의 자취(★4) (3) 쌍곡선으로 바꿔도 x절편 a²/x₁ 로 같은 골조(★3)."
```

```yaml
- id: RPM-GEO-0234
  page: 36
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭"
  summary: |
    점 P(2,2)에서 타원 x²+2y²=4 에 그은 두 접선의 접점 A, B 에 대하여 삼각형 PAB 의 무게중심의 좌표. 5지선다.
  category: "접점 (x₁,y₁) 조건 x₁+2y₁=2 → 타원과 연립 → A(2,0), B(−2/3,4/3) → 무게중심"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원 밖의 점에서 그은 두 접선의 접점(극선)과 삼각형의 무게중심"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접선 x₁x+2y₁y=4 에 (2,2) → x₁+2y₁=2 → 타원에 대입 6y₁²−8y₁=0 → (2,0), (−2/3,4/3) → 무게중심 (10/9,10/9). 접점 조건(극선) 세우기·연립·인수분해·무게중심의 다섯 단계, 계산 중간, 통찰 없음. M_total 6 → 시험에 꼭 ★3. (근과 계수 x₁+x₂=y₁+y₂=4/3 으로 접점을 구하지 않아도 됨.)
  tier: star_3
  mechanism_primary: "접점 조건 x₁x+2y₁y=4 에 (2,2) → x₁+2y₁=2 → 타원 대입 6y₁²−8y₁=0 → A(2,0),B(−2/3,4/3) → 무게중심 (10/9,10/9)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0234.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P 와 타원 계수를 바꾸되 접점 연립의 이차식이 유리근(판별식 제곱수). 제약: P 가 타원 외부 · 무게중심이 선택지 꼴 분수 · 접점 하나가 꼭짓점이 되면 계산이 더 짧아짐."
    creative: "(1) 접점을 구하지 않고 근과 계수로 무게중심을 얻는 풀이를 요구(I-SC d1 · ★3) (2) 삼각형 PAB 의 넓이(★3) (3) P 가 직선 y=x 위를 움직일 때 무게중심의 자취(★4~5)."
```

```yaml
- id: RPM-GEO-0235
  page: 36
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭"
  summary: |
    점 (3,0)을 지나고 점근선이 y=±(2/3)x 인 쌍곡선에 접하는 직선 중 기울기가 −√2 인 직선의 방정식.
  category: "점근선·꼭짓점 → x²/9−y²/4=1 → 기울기 접선 공식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "점근선과 한 점으로 쌍곡선을 결정한 뒤 기울기가 주어진 접선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (3,0) 이 꼭짓점 → a=3, b/a=2/3 → b=2 → x²/9−y²/4=1 → y=−√2x±√(18−4)=−√2x±√14. 두 단계·통찰 없음, (3,0) 으로 =1 꼴임을 정하는 판단. 시험에 꼭 ★2.
  tier: star_2
  mechanism_primary: "점근선 기울기 2/3·꼭짓점 (3,0) → x²/9−y²/4=1 → y=mx±√(a²m²−b²) → y=−√2x±√14"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=-\sqrt{2}x\pm\sqrt{14}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0235.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점근선 기울기·꼭짓점·접선 기울기를 바꿀 수 있음. 제약: 접선 존재 조건 |m|>b/a(=2/3) · a²m²−b² 의 근호가 정리되게 · 지나는 점이 y축 위면 =−1 꼴."
    creative: "(1) 지나는 점을 (0,2) 로 바꿔 =−1 꼴 쌍곡선(★2) (2) 기울기를 점근선보다 완만하게 주어 「접선이 없음」을 답하게(I-VF d1 · ★3) (3) 두 접선 사이 거리(★3)."
```

```yaml
- id: RPM-GEO-0236
  page: 36
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "시험에 꼭"
  summary: |
    초점 F(0,c), F'(0,−c) 인 쌍곡선 x²/9−y²/16=−1 위 제2사분면 점 P 에 대하여 삼각형 PF'F 의 둘레가 30 일 때 P 에서의 접선의 기울기. 5지선다.
  category: "c=5 → 정의 |PF'−PF|=8 + 둘레 → PF=6, PF'=14 → 좌표 연립 → P(−3√3,8) → 접점 공식"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "둘레 30 을 PF+PF'=20 으로 옮기고 정의 PF'−PF=8(위쪽 가지) 과 연립해 두 초점 거리를 확정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "쌍곡선의 정의(초점 거리)로 접점을 결정한 뒤 접선의 기울기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    c²=16+9 → F(0,5). P 는 제2사분면(위쪽 가지)이라 PF'−PF=8, 둘레에서 PF+PF'=20 → PF=6, PF'=14 → 두 거리 식을 빼 y=8, x=−3√3 → 접선 2√3x+3y=6 → 기울기 −2√3/3. 정의와 둘레의 결합(EQV d1) 뒤 좌표 연립·접점 공식. 가지 선택(부호)·−1 꼴 표기 함정. M_total 7, 평가원 기출 → ★3.
  tier: star_3
  mechanism_primary: "c=5 → 위쪽 가지 PF'−PF=8, 둘레 → PF+PF'=20 → PF=6,PF'=14 → 거리 연립 y=8, x=−3√3 → 접점 공식 → 기울기 −2√3/3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0236.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모(9,16)·둘레를 바꾸되 PF, PF' 이 정수이고 y=(PF'²−PF²)/(4c) 가 정리되게. 제약: PF+PF'>2c(삼각형 성립) · P 가 제2사분면이려면 x<0 선택 · 접선 기울기가 선택지 꼴."
    creative: "(1) 둘레 대신 삼각형 PF'F 의 넓이 조건(★3~4) (2) 접선의 기울기 대신 접선의 x절편(★3) (3) 접선이 ∠F'PF 를 이등분함(반사 성질)을 이용해 기울기를 각으로 구하는 풀이 비교(I-SC d2 · ★4)."
```

```yaml
- id: RPM-GEO-0237
  page: 36
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭"
  summary: |
    점 (−2,1)에서 쌍곡선 x²/4−y²/2=1 에 그은 두 접선의 접점 P, Q 에 대하여 선분 PQ 의 길이.
  category: "접점 조건 x₁+y₁=−2 → 쌍곡선 연립 → P(−2,0), Q(−6,4) → 거리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선 밖의 점에서 그은 두 접선의 접점 사이의 거리(극선)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접선 x₁x/4−y₁y/2=1 에 (−2,1) → x₁+y₁=−2 → 대입 x₁²+8x₁+12=0 → (−2,0), (−6,4) → 4√2. 극선 세우기·연립·인수분해·거리의 다섯 단계, 통찰 없음, M_total 6 → ★3. (근과 계수로 |PQ|=√2·|x₁−x₂|=4√2 도 가능.)
  tier: star_3
  mechanism_primary: "접점 조건에 (−2,1) → x₁+y₁=−2 → 쌍곡선 대입 (x₁+2)(x₁+6)=0 → P(−2,0),Q(−6,4) → PQ=4√2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$4\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0237.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점과 쌍곡선 분모를 바꾸되 연립 이차식이 인수분해되게. 제약: 점이 쌍곡선 외부이고 점근선 위가 아니어야 접선 둘 · 두 접점이 같은 가지인지 확인(여기선 둘 다 왼쪽 가지)."
    creative: "(1) 극선 x+y=−2 와 쌍곡선의 교점 = 접점임을 이용해 근과 계수로 거리(I-SC d1 · ★3) (2) 삼각형 (−2,1)PQ 의 넓이(★3) (3) 점을 y축 위로 옮겨 접점이 대칭인 0218 형(★2)."
```

```yaml
- id: RPM-GEO-0238
  page: 36
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭"
  summary: |
    점 (a,1)에서 쌍곡선 3x²−y²=−3 에 그은 두 접선이 서로 수직일 때 양수 a.
  category: "접선 y=m(x−a)+1 → 접선 조건 (1−ma)²=3−m² → m 의 이차식 → 근의 곱 −1 → a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 접선의 수직 조건을 기울기 m 의 이차방정식의 두 근의 곱 = −1 로 전환(근과 계수) — 각 접선을 구하지 않음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이차곡선 밖의 점에서 그은 두 접선이 수직일 조건(기울기 이차식·근과 계수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    y²/3−x²=1 의 접선 조건 n²=b²−a²m² 로 (1−ma)²=3−m² → (a²+1)m²−2am−2=0 → 근의 곱 −2/(a²+1)=−1 → a=1. m 을 각각 구하지 않고 근과 계수로 넘기는 전환(RT d2)이 핵심이고 매개변수 a 가 식 전체에 붙음. (준원 x²+y²=3−1=2 위의 점이라는 해석과 일치.) 시험에 꼭 · M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "y=mx+(1−ma) 의 접선 조건 (1−ma)²=3−m² → (a²+1)m²−2am−2=0 → m₁m₂=−2/(a²+1)=−1 → a=1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0238.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "쌍곡선 상수와 점의 y좌표를 바꿀 수 있음(수직 접선의 점은 준원 x²+y²=b²−a² 위). 제약: b²>a²(여기선 3>1)이어야 준원이 존재 · 근의 곱 조건이 실근(판별식>0)을 주는지 확인 · a>0 으로 하나 선택."
    creative: "(1) 「두 접선이 수직인 점의 자취」(준원)를 묻기(I-PD d2 · ★4) (2) 타원 x²/a²+y²/b²=1 로 바꾸면 준원 x²+y²=a²+b²(★3) (3) 수직 대신 두 접선이 이루는 각 60° 로 바꾸면 탄젠트 공식이 개입(★4)."
```

### 서술형 주관식

```yaml
- id: RPM-GEO-0239
  page: 37
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    포물선 x²+8y=0 위의 점 (4,−2)에서의 접선과 평행하고 점 (−2,3)을 지나는 직선의 y절편.
  category: "접점 공식 → 기울기 −1 → 평행선 → y절편"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선 위의 점에서의 접선과 평행한 직선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x²=−8y(p=−2) 의 접선 4x=−4(y−2) → 기울기 −1 → (−2,3) 지나는 평행선 y=−x+1 → 절편 1. 세 단계·통찰 없음·M_total 4. 서술형 구역 출발 ★3 이나 절차형·저노동이라 −1 → ★2.
  tier: star_2
  mechanism_primary: "x²=4py(p=−2) 접선 x₁x=2p(y+y₁) → 기울기 −1 → (−2,3) 지나는 평행선 y=−x+1 → 절편 1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0239.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점과 지나는 점을 바꿀 수 있음(접선 기울기 x₁/(2p)). 제약: 접점이 포물선 위 · 절편이 정수가 되게 점 선택 · x²+8y=0 처럼 표준형이 아닌 표기를 유지하면 p 부호 판단이 남음."
    creative: "(1) 평행 대신 수직(법선)으로(★2) (2) 평행한 직선이 포물선과 만나는 두 점 사이 거리(★3) (3) 접선과의 거리가 주어진 평행선의 절편(★3)."
```

```yaml
- id: RPM-GEO-0240
  page: 37
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    점 (0,6)에서 타원 x²/k²+y²/16=1 (k²>16) 에 그은 두 접선의 기울기의 곱이 −1/2 일 때 타원의 장축의 길이.
  category: "접선 y=mx+6 조건 36=k²m²+16 → m²=20/k² → 곱 −20/k²=−1/2 → k²=40 → 장축 2k"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원 밖의 점에서 그은 두 접선의 기울기의 곱 조건으로 미정계수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접선 조건 36=k²m²+16 → m=±√20/k → 곱 −20/k²=−1/2 → k²=40 → 장축 2√40=4√10. 점이 y축 위라 두 기울기가 ± 로 대칭이라 곱이 −m². 절차형이나 매개변수·범위 판단(k²>16 → 장축이 x축, 길이 2k)이 있고 M_total 6 → 서술형 출발 ★3 유지. [분류 이슈] 통찰 없는 절차형 — ★2 후보, 라벨은 ★3.
  tier: star_3
  mechanism_primary: "y=mx+6 접선 조건 36=k²m²+16 → m²=20/k² → m₁m₂=−20/k²=−1/2 → k²=40 → 2k=4√10"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$4\sqrt{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0240.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 (0,h)·y² 분모 b²·기울기 곱을 바꿀 수 있음(m²=(h²−b²)/k²). 제약: h²>b² 이어야 접선 존재 · 답 k² 가 k²>b² 조건과 모순 없게 · 장축이 어느 축인지 조건과 일치."
    creative: "(1) 기울기 곱 −1(수직)로 바꾸면 준원 x²+y²=k²+16 위의 점 조건(I-EQV d1 · ★3) (2) 두 접점을 잇는 현의 길이(★3~4) (3) 점을 y축 밖으로 옮기면 곱이 근과 계수로만 나옴(0238 골조 · I-RT d2 · ★3)."
```

```yaml
- id: RPM-GEO-0241
  page: 37
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    타원 x²/a²+y²/b²=1 과 쌍곡선 x²/4−y²/2=1 이 점 P(2√2,−√2)에서 만나고, P 에서 두 곡선에 각각 그은 접선이 서로 수직일 때 a²−b² (a, b 상수).
  category: "쌍곡선 접선 기울기 −1 → 타원 접선 기울기 2b²/a² → 수직 → a²=2b² → P 대입 → b²=6"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 이차곡선의 교점에서의 접선이 수직일 조건(미정계수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    쌍곡선 접선 x+y=√2(기울기 −1), 타원 접선 기울기 2b²/a² → 곱 −1 → a²=2b² → P 대입 8/a²+2/b²=1 → b²=6, a²=12 → 6. 미정계수 두 조건 연립·분수 처리, 통찰 없음, M_total 7 → 서술형 ★3. (a²−b²=6=4+2: 두 곡선이 초점을 공유하면 항상 직교 — 검산용.)
  tier: star_3
  mechanism_primary: "쌍곡선 접점 공식 → 기울기 −1 → 타원 접선 기울기 2b²/a² → 수직 → a²=2b² → P 대입 8/a²+2/b²=1 → b²=6,a²=12 → 6"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$6$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0241.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "쌍곡선 분모와 P 를 바꾸되 P 가 쌍곡선 위·타원 연립이 유리해. 제약: 두 곡선이 만나려면 a²>4(타원이 쌍곡선 꼭짓점 밖) · 답은 항상 쌍곡선의 c²(=4+2) 이므로 분모만 바꾸면 답이 정해짐."
    creative: "(1) 「공초점 타원·쌍곡선은 직교한다」를 증명하는 서술형(I-SYM d2 · ★4) (2) 수직 대신 두 접선이 이루는 각 45°(★4) (3) 타원의 초점 좌표를 묻기(★3)."
```

```yaml
- id: RPM-GEO-0242
  page: 37
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "서술형"
  summary: |
    타원 x²/3+y²/4=1 위의 점 P 와 직선 y=2x+5 사이의 거리의 최댓값 M, 최솟값 m 에 대하여 M+m.
  category: "기울기 2 인 접선 두 개 y=2x±4 → 직선과의 거리 1/√5, 9/√5 → 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "곡선 위의 점과 직선 사이 거리의 최대·최소 → 직선과 평행한 두 접선까지의 거리로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차곡선 위의 점과 직선 사이의 거리의 최솟값(평행한 접선)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접선 y=2x±√(12+4)=2x±4 → 거리 (5−4)/√5, (5+4)/√5 → 합 10/√5=2√5. 평행 접선 전환(RT d1) 뒤 공식 두 줄. M+m 은 중심에서 직선까지 거리의 2배(두 접선이 중심 대칭)라는 지름길도 있음. 서술형 · 통찰 1개 → ★3.
  tier: star_3
  mechanism_primary: "기울기 2 접선 y=2x±√(12+4)=2x±4 → y=2x+5 와 거리 1/√5, 9/√5 → M+m=2√5"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$2\sqrt{5}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0242.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원 분모·직선 기울기와 절편을 바꿀 수 있음(M+m = 2·중심에서 직선까지 거리). 제약: 직선이 타원과 만나지 않게 |절편|>√(a²m²+b²) · 근호 정리."
    creative: "(1) M−m 을 묻기(두 접선 사이 거리 · ★3) (2) M+m 이 접선과 무관하게 2d(O,l) 임을 보이는 서술형(I-SYM d1 · ★3) (3) 직선이 타원과 만나도록 절편을 바꿔 m=0 인 함정형(I-VF d1 · ★3)."
```

### 실력 Up

```yaml
- id: RPM-GEO-0243
  page: 37
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    두 점 F(9/8,0), F'(−k,0) (k>0) 을 초점으로 하는 타원과 포물선 y²=(9/2)x 가 제1사분면에서 만나는 점 P. PF=25/8 이고 포물선 위의 P 에서의 접선이 F' 을 지날 때 타원의 단축의 길이(그림).
  category: "F = 포물선 초점 → 정의로 x_P=2, P(2,3) → 접선 x절편 → F'(−2,0) → 2a=PF+PF', 2c=FF' → 2b"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "F(9/8,0) 이 y²=(9/2)x 의 초점(4p=9/2)임을 알아채고 PF=25/8 을 준선까지 거리 x_P+9/8 로 바꿔 P 를 결정 — 문제에 명시되지 않은 일치를 발견해야 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "포물선의 정의·접선과 타원의 정의를 결합해 타원 요소 결정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    4p=9/2 → 초점 (9/8,0)=F 이므로 PF=x_P+9/8 → x_P=2, y_P=3. 접선 3y=(9/4)(x+2) 의 x절편 −2 → F'(−2,0), PF'=5 → 2a=25/8+5=65/8, 2c=25/8 → (2b)²=(2a)²−(2c)² → 2b=15/2. 초점 일치 발견(EQV d2)이 없으면 PF 를 좌표로 풀어야 하고, 타원 중심이 원점이 아니라 2a·2c 로 바로 2b 를 얻는 판단이 필요. 7단계 이상·분수 계산. 실력 Up ★4.
  tier: star_4
  mechanism_primary: "F=포물선 초점 → PF=x_P+9/8=25/8 → P(2,3) → 접선 3y=(9/4)(x+2) 의 x절편 −2=F' → 2a=25/8+5, 2c=25/8 → 2b=√((65/8)²−(25/8)²)=15/2"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{15}{2}$'
  answer_source: "답지"
  figure: crop:fig-0243.png
  latex: latex-bank/rpm-geo/items/0243.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선 y²=4px 의 p 와 PF 를 바꾸되 P 가 유리점(x_P=PF−p, y_P²=4p·x_P 가 제곱수)이 되게. 제약: 접선 x절편 −x_P 가 F' 이 되고 PF' 이 유리수(피타고라스 삼조)여야 2b 가 정리됨 · F' 은 x<0 · 그림의 P 위치는 제1사분면."
    creative: "(1) 단축 대신 타원의 이심률·중심 좌표(★4) (2) 「타원의 초점 F 가 포물선의 초점과 같다」를 명시하면 EQV 가 사라져 ★3 (3) 그림 없이 출제하면 P·F' 위치 판단이 추가되어 ★4 유지."
```

```yaml
- id: RPM-GEO-0244
  page: 37
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    타원 x²+4y²=8 의 네 꼭짓점을 이은 마름모에 내접하는 타원 x²/a²+y²/b²=1 의 초점이 (±b,0) 일 때 a²+b² (a, b 상수 · 그림).
  category: "꼭짓점 (±2√2,0),(0,±√2) → 변 x+2y=2√2 → 내접 ↔ 변에 접함 → 접선 조건 2=a²/4+b² → 초점 조건 a²=2b² → 연립"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「마름모에 내접」을 「한 변(직선)이 타원의 접선」이라는 접선 조건 n²=a²m²+b² 로 전환(대칭이라 한 변만 검토)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "마름모(사각형)에 내접하는 타원의 결정(변에 접할 조건 + 초점 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    변 y=−x/2+√2 의 접선 조건 2=a²/4+b², 초점 (±b,0) → c=b → a²−b²=b² → a²=2b² → b²=4/3, a²=8/3 → 4. 내접의 해석(RT d1) 뒤 두 식 연립 한 줄. 실력 Up 출발 ★4 이나 통찰 1개 d1·M_total 6 → ★3 으로 둠. [분류 이슈] 벤더 실력 Up(★4 출발) 대비 골조는 접선 조건 + 초점 조건 연립의 ★3 — ★3/★4 후보.
  tier: star_3
  mechanism_primary: "마름모 변 x+2y=2√2 가 접선 → 2=a²/4+b² → 초점 (±b,0) → a²=2b² → b²=4/3,a²=8/3 → a²+b²=4"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$4$"
  answer_source: "답지"
  figure: crop:fig-0244.png
  latex: latex-bank/rpm-geo/items/0244.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바깥 타원 계수(x²+4y²=8)와 초점 조건 (±b,0)·(±kb,0) 을 바꿀 수 있음. 제약: 내접 타원이 마름모 안에 있으려면 a²<8, b²<2 · 연립이 유리해 · 그림은 라벨만 바꿈."
    creative: "(1) 마름모 대신 정사각형·직사각형에 내접(★3) (2) 초점 조건을 「이심률 1/√2」로 바꿔도 같은 골조(★3) (3) 안쪽 타원의 꼭짓점 마름모에 다시 내접하는 타원으로 비율을 반복(I-PD d2 · ★4)."
```

```yaml
- id: RPM-GEO-0245
  page: 37
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    초점 F, F' 인 쌍곡선 x²/10−y²/a²=1 위 제2사분면 점 P 에 대하여 삼각형 PF'F 는 넓이 15, ∠F'PF=90° 인 직각삼각형. 직선 PF' 과 평행하고 쌍곡선에 접하는 두 직선이 x축과 만나는 점 Q₁, Q₂ 사이의 거리(a 상수 · 그림).
  category: "직각·넓이·정의 → PF·PF'=30, PF²+PF'²=4c², |PF−PF'|=2√10 → c=5, a²=15 → PF'=√10, PF=3√10 → 기울기 3 → 평행 접선 y=3x±5√3 → x절편 차"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "직각(PF²+PF'²=4c²)·넓이(PF·PF'=30)·정의(|PF−PF'|=2√10) 세 조건을 (PF−PF')²=4c²−2·30 한 식으로 통합해 c, a² 결정"
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "PF'=√10, PF=3√10 의 길이비 → tan∠PF'F=3 → 직선 PF' 의 기울기 3 (또는 P(−4,3) 좌표화)으로 전환"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "쌍곡선의 정의·직각삼각형 조건으로 초점·접점을 결정한 뒤 평행한 접선의 절편"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    (PF−PF')²=PF²+PF'²−2PF·PF' → 40=4c²−60 → c=5, a²=15. PF+PF'=4√10 → PF'=√10, PF=3√10(왼쪽 가지라 PF>PF') → 기울기 3(P(−4,3)). 기울기 3 접선 y=3x±√(90−15)=3x±5√3 → x절편 ∓5√3/3 → 10√3/3. 세 조건 통합(CON d2)과 길이→기울기 전환(RT d1) 두 통찰·7단계 이상·부호(가지·기울기)와 접선 존재 조건. 실력 Up ★4(★5 조건인 통찰 3개·SC/VF/SYM/XU 없음).
  tier: star_4
  mechanism_primary: "직각+넓이+정의 → (PF−PF')²=4c²−2·30 → c=5,a²=15 → PF'=√10,PF=3√10 → 기울기 3 → 접선 y=3x±5√3 → Q₁Q₂=10√3/3"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{10\sqrt{3}}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: crop:fig-0245.png
  latex: latex-bank/rpm-geo/items/0245.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x² 분모 A(=10)와 넓이 S(=15)를 바꿀 수 있음(c²=A+S, b²=S, PF·PF'=2S). 제약: 기울기 (k+1)/(k−1) 이 유리수가 되려면 S=A(k²−1)/2 (k 자연수, 여기선 k=2) · 직각 조건은 P 가 원 x²+y²=c² 위 · 접선 존재 |m|>b/a · 왼쪽 가지의 P 는 PF>PF'."
    creative: "(1) Q₁Q₂ 대신 두 접선 사이의 거리(★4) (2) 직각 대신 ∠F'PF=60° 로 바꾸면 코사인법칙이 개입(★4~5) (3) 직선 PF 와 평행한 접선으로 바꾸면 기울기 −1/3 이 접선 존재 조건 |m|>b/a=√(3/2) 에 걸려 접선이 없음 — 함정형(I-VF d2 · ★4)."
```

## 표본 판정 요약 (38문)

- ★ 분포: ★1 1 · ★2 18 · ★3 17 · ★4 2 · ★5 0
- 통찰형 5(insight_type 기준: depth 2 이상 또는 통찰 2개 — 0215·0221·0238·0243·0245) · 절차형 33 · premium 0. 통찰 라벨이 하나라도 있는 문항은 14(check 도구의 「통찰형」 수).
- 통찰 유형: I-RT 8(0219·0220·0221·0222·0238·0242·0244·0245) · I-EQV 5(0227·0232·0233·0236·0243) · I-CON 2(0215·0245). XU·BW·MI·PD·SYM·SC·VF 없음.
- type_hint 상위: 「이차곡선 위의 점과 직선 사이의 거리의 최솟값(평행한 접선)」 4(0219·0220·0222·0242, 법선 변형 0221 포함 5) · 「이차곡선 밖의 점에서 그은 접선·접점」 8(0216·0217·0218·0228·0234·0237·0238·0240) · 「쌍곡선 위의 점에서의 접선의 방정식·응용」 8(0208~0215) · 「기울기가 주어진 포물선·타원의 접선」 5(0223·0224·0225·0229·0235) · 「접선 조건으로 미정계수 결정」 5(0211·0230·0232·0240·0241)
- 구역별 ★: 유형 09 ★1 1·★2 5·★3 2 / 유형 10 ★2 3 / 유형 UP 11 ★3 4 / 시험에 꼭 ★2 9·★3 7 / 서술형 ★2 1·★3 3 / 실력 Up ★3 1·★4 2
- 그림: 5문(`crop:fig-0214.png` · `crop:fig-0215.png` · `crop:fig-0243.png` · `crop:fig-0244.png` · `crop:fig-0245.png`)
- 전사 답 확인 필요: 없음(38문 전부 다시 풀어 전사본 answer 와 일치).

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다(2단 이상 어긋난 문항은 없음).

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-GEO-0214 | 벤더 「상중」이나 통찰 없음·M_total 6 의 절차형(접선·점근선 교점·넓이). 라벨은 ★3 으로 두고 ★2 후보 기록 | ★2 / ★3 |
| RPM-GEO-0219 | 유형 UP 대표문제이나 M_total 4 이고, 포물선은 (b²,b) 매개화로 거리식 최소를 직접 구할 수 있어 평행 접선 통찰(RT d1)이 강제되지 않음. 라벨 ★3, ★2 후보 | ★2 / ★3 |
| RPM-GEO-0240 | 서술형 구역(★3 출발)이나 통찰 없는 절차형 M_total 6(접선 조건·근의 곱·매개변수). 라벨 ★3, ★2 후보 | ★2 / ★3 |
| RPM-GEO-0244 | 실력 Up 구역(★4 출발)이나 골조는 「변에 접함」 해석(RT d1) + 접선 조건·초점 조건 연립 M_total 6. 라벨 ★3 으로 내림, ★4 후보 병기 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 type_hint 는 (a) 「이차곡선 위의 점과 직선 사이 거리의 최솟값 = 평행한 접선」(0219·0220·0222·0242) — 포물선·타원·쌍곡선을 한 유형으로 묶고, 「정점과의 최단 거리 = 법선 조건」(0221)은 골조가 달라 별도 유형으로 세우는 편이 정확함. (b) 「곡선 밖의 점에서 그은 접선」은 세 갈래로 나뉨: 기울기 접선 공식으로 직선 자체를 구하는 것(0216·0228·0235), 접점을 미지수로 두고 극선으로 접점·도형을 구하는 것(0217·0218·0234·0237), 기울기 m 의 이차식과 근과 계수로 두 접선의 관계(수직·곱)를 다루는 것(0238·0240 — 준원 유형). 카탈로그에서는 세 갈래를 따로 세우고 base ★ 를 2·3·3 으로 두는 것을 제안.
- 「쌍곡선 위의 점에서의 접선」(유형 09) 8문은 접점 공식 자체는 같지만 뒤에 붙는 도형(좌표축 삼각형·초점 거리 곱·점근선 수직·점근선 삼각형·절편 길이비)이 다름 — 카탈로그는 「접점 공식 + 부속 도형」 하나로 통합하고 부속 도형은 변형 축으로 두면 충분(0215 의 길이비·동차화만 ★3 통찰형).
- 「기울기가 주어진 접선」(0223·0224·0225·0229·0235)과 「접선 조건으로 미정계수 결정」(0211·0230·0232·0240·0241)은 포물선·타원·쌍곡선 공식이 달라도 골조가 같으므로 곡선 종류를 변형 축으로 하는 통합 유형이 적절.
- 실력 Up 두 문항(0243·0245)은 「이차곡선의 정의(초점 거리) + 접선」 결합 유형 — 이 단원(02 접선)과 01 이차곡선의 정의를 함께 쓰지만 같은 대단원이라 I-XU 로 잡지 않았음. 카탈로그에서는 「정의·접선 결합」을 base ★4 유형으로 별도 등재 권장. 0236(평가원 기출)도 같은 골조의 ★3 판본.
- 단독 유형: 0227(넓이 이등분 ↔ 중심 통과) · 0233(접선 절편이 접점 x좌표만으로 결정) · 0244(내접 타원) — 각각 문항 수가 적어 카탈로그 신설보다 「접선 조건 응용」 아래 하위 항목으로 두는 편이 나음.
