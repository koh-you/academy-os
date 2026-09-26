---
name: mechanism-데이터-RPM-GEO-07-p1
description: RPM 기하 07 도형의 방정식(1/4 · 교과서 07-1~07-6) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 기하 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-geo
  section: 07 도형의 방정식
  unit_code: GEO-07
  part: "1/4"
  extract_range: "103~105쪽 · 0675~0707"
  total_problems: 33
  unit_total: 132
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-geo/items/<id>.tex
  image_source: latex-bank/rpm-geo/figures/ (crops.json)
---

# RPM 기하 · 07 도형의 방정식 (1/4) 정독 데이터 (v1.0)

이 파일은 RPM 기하 07 도형의 방정식 단원의 첫 범위(103~105쪽 · 0675~0707 · 33문항)를 다룬다. 전부 「교과서」 구역이다 — 교과서 07-1 직선의 방정식(11문 · 한 점과 방향벡터/법선벡터 · 성분 0 이 있는 방향벡터 · 두 점을 지나는 직선) · 07-2 두 직선이 이루는 각(7문 · 방향벡터 내적으로 cosθ · 평행·수직 조건의 미지수) · 07-3 평면의 방정식(6문 · 한 점과 법선벡터 · 평행한 평면 · 좌표축·좌표평면 조건 · 세 점을 지나는 평면) · 07-4 두 평면이 이루는 각(5문 · 법선벡터 내적으로 θ · 평행·수직 조건의 미지수) · 07-5 점과 평면 사이의 거리(2문 · 공식 대입) · 07-6 벡터를 이용한 구의 방정식(2문 · |p-c|=r · (p-a)·(p-b)=0). RPM 의 벤더 난이도 신호는 구역이 곧 층이다 — 교과서(★1 출발) / 유형(대표문제 · 난이도 하~상) / 유형 UP / 시험에 꼭 나오는 문제 / 서술형 / 실력 Up. 이 범위는 level·tag 가 전혀 없는 교과서 구역이라 33문 모두 ★1 출발이고, 단계별 라벨링에서 통찰 라벨이 붙은 문항은 0707(벡터 방정식 → 지름 조건 해석 · I-RT d1) 하나뿐이며 depth 1 이라 ★ 조정은 0건이다(M_total 은 4 가 13문 · 5 가 10문 · 6 이 7문 · 7 이 3문). 그림 문항은 없다(figure 전부 none). 전사 답 33건은 모두 재계산과 일치했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 절차형 ★1 문항에도 `mechanism_primary`(풀이 골조 사슬) · `insights[]`(절차형은 빈 배열) · `variation_notes.numeric`(바꿔도 되는 수와 제약) · `variation_notes.creative`(골조를 유지한 변형과 ★ 가 변하는 지점)를 모두 채웠다. 이 구역의 숫자 변형 제약은 방향벡터·법선벡터 성분에 0 이 들어가는지 여부가 답의 형식(분수꼴 하나 / 등식 분리)을 바꾼다는 것, 각 문항은 cosθ 가 특수각 값이나 간단한 유리수가 되도록 크기의 곱을 맞출 것, 거리 문항은 √(a²+b²+c²) 가 정수가 되는 법선(1,2,2)·(2,3,6) 류를 쓸 것, 부호가 뒤집힌 항(4-y, 1-x)은 부호 정리 함정을 만드는 장치이므로 개수를 의식할 것이다. ★ 가 오르는 지점은 결과(각·거리·평행 조건)를 주고 미지수를 역으로 묻기(I-BW) · 벡터 방정식↔기하 도형 해석(I-RT) · 평행이면서 일치하지 않을 조건·두 평면의 교선처럼 조건을 결합하기(I-EQV·연립) · 두 직선의 수직과 교점 존재를 함께 묻기(I-VF) 로 표시했다.

## 문항 데이터

### 교과서 07-1 직선의 방정식

```yaml
- id: RPM-GEO-0675
  page: 103
  vendor_label: "교과서 07-1 직선의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    점 (7, -2) 를 지나고 방향벡터가 u=(2, 3) 인 직선의 방정식.
  category: "한 점·방향벡터 → (x-x1)/a = (y-y1)/b 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선의 방정식 — 한 점과 방향벡터"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 (x-x1)/a = (y-y1)/b 에 x1=7, y1=-2, (a,b)=(2,3) 을 넣으면 끝. 함정은 y-(-2) → y+2 의 부호 하나(T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "점 (7,-2)·방향벡터 (2,3) → (x-7)/2 = (y+2)/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{x-7}{2}=\dfrac{y+2}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0675.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점의 좌표와 방향벡터 성분(0 이 아닌 정수)을 바꿈. 제약: 두 성분이 모두 0 이 아니어야 분수꼴 하나로 떨어짐(성분 0 은 0676 골조) · 음수 좌표를 하나 넣어 x-(-2) → x+2 정리를 남겨 두는 편이 좋음."
    creative: "(1) 방향벡터 대신 '기울기 3/2' 나 '직선 y=(3/2)x+1 에 평행' 으로 주고 방향벡터를 읽게 하기(★1~2) (2) 방향벡터를 두 점의 차 PQ 로 주기(0682 골조 · ★1) (3) 매개변수 표현 x=7+2t, y=-2+3t 로 나타내고 t 를 소거해 대칭꼴로 옮기기(★2 · I-RT d1)."
```

```yaml
- id: RPM-GEO-0676
  page: 103
  vendor_label: "교과서 07-1 직선의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    점 (3, 5) 를 지나고 벡터 u=(0, -6) 에 평행한 직선의 방정식.
  category: "방향벡터 x성분 0 → 분수꼴 불가 → x=3 (y축에 평행)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선의 방정식 — 방향벡터에 0 성분이 있는 경우(좌표축에 평행)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    방향벡터의 x성분이 0 이므로 (x-3)/0 을 쓸 수 없고, y 는 임의이므로 직선은 x=3 한 식. 함정은 0 을 분모에 그대로 쓰거나 y=5 로 뒤집는 표기 하나(T-표기). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "u=(0,-6) → x성분 고정·y 임의 → x=3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$x=3$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0676.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점의 좌표와 0 이 아닌 성분의 값(-6 → 2, 5)을 바꾸거나 0 성분을 y 로 옮겨 y=5 꼴로 만듦. 제약: 성분 하나가 정확히 0 이어야 골조 유지 · 답은 항상 한 식이고 0 아닌 성분의 값은 답에 무관."
    creative: "(1) 'x축에 평행' 이라는 말로 방향벡터를 감추기(★1) (2) 공간에서 성분 두 개가 0 인 직선(0679 골조 · 답이 두 식) (3) 방향벡터 (0, k) 로 주고 k 의 값에 관계없이 같은 직선임을 묻기(★1~2 · 매개변수)."
```

```yaml
- id: RPM-GEO-0677
  page: 103
  vendor_label: "교과서 07-1 직선의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    점 (1, 2, -1) 을 지나고 방향벡터가 u=(3, 4, 5) 인 공간 직선의 방정식.
  category: "한 점·방향벡터 → (x-x1)/a = (y-y1)/b = (z-z1)/c 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선의 방정식 — 한 점과 방향벡터"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공간 직선 공식에 대입하면 (x-1)/3 = (y-2)/4 = (z+1)/5 한 줄. 함정은 z-(-1) → z+1 의 부호(T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "점 (1,2,-1)·방향벡터 (3,4,5) → (x-1)/3 = (y-2)/4 = (z+1)/5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{x-1}{3}=\dfrac{y-2}{4}=\dfrac{z+1}{5}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0677.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점·방향벡터 성분(0 아닌 정수)을 바꿈. 제약: 성분에 0 이 들어가면 0678·0679 골조 · 방향벡터를 (6,8,10) 처럼 배수로 주면 답 형식만 달라지므로 채점에서 동치 처리 필요."
    creative: "(1) 방향벡터를 '직선 (x-2)/3 = (y+1)/4 = z/5 에 평행' 으로 감추기(★1) (2) 두 점 (1,2,-1), (4,6,4) 로 주기(0684 골조) (3) 직선 위의 점 중 z=4 인 점의 좌표를 묻기(★1~2 · 매개변수 t 도입)."
```

```yaml
- id: RPM-GEO-0678
  page: 103
  vendor_label: "교과서 07-1 직선의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    점 (0, 3, 2) 를 지나고 벡터 u=(2, 0, 1) 에 평행한 공간 직선의 방정식.
  category: "y성분 0 → y=3 분리 → 나머지 두 성분으로 x/2 = z-2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선의 방정식 — 방향벡터에 0 성분이 있는 경우(좌표축에 평행)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y성분이 0 이라 y=3 은 따로 쓰고, 나머지 두 성분으로 x/2 = (z-2)/1. 함정은 0 을 분모에 두거나 분모 1 을 빠뜨리는 표기(T-표기). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "u=(2,0,1) → y=3 고정 → x/2 = z-2, y=3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{x}{2}=z-2$, $y=3$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0678.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "0 성분의 위치(y → x 또는 z)와 나머지 성분·점의 좌표를 바꿈. 제약: 정확히 한 성분이 0 이어야 '분수꼴 하나 + 등식 하나' 골조 · 두 성분이 0 이면 0679 골조."
    creative: "(1) 'xz평면에 평행하고 …' 처럼 0 성분을 말로 주기(★1~2) (2) 직선이 어느 좌표평면에 평행한지 묻기(★1) (3) 이 직선이 평면 y=3 위에 놓임을 확인하는 보기 문항(★2)."
```

```yaml
- id: RPM-GEO-0679
  page: 103
  vendor_label: "교과서 07-1 직선의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    점 (3, -2, 1) 을 지나고 벡터 u=(0, -1, 0) 에 평행한 공간 직선의 방정식.
  category: "성분 두 개가 0 → x, z 고정 → x=3, z=1 (y축에 평행)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선의 방정식 — 방향벡터에 0 성분이 있는 경우(좌표축에 평행)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x, z 성분이 0 이므로 x=3, z=1 두 식이 곧 직선이고 y 는 임의. 함정은 -1 성분을 y+2 에 얽어 y=-2 까지 쓰는 표기(T-표기). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "u=(0,-1,0) → x, z 고정 → x=3, z=1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$x=3$, $z=1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0679.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점의 좌표와 0 이 아닌 성분의 축(y → x 또는 z)을 바꿈. 제약: 성분 둘이 0 이어야 답이 두 등식 · 0 아닌 성분의 값(-1, 4 …)은 답에 영향 없음."
    creative: "(1) 'y축에 평행' 이라는 말로 방향벡터를 감추기(★1) (2) 직선 위의 점 (3, t, 1) 중 원점과의 거리가 √14 인 점(★2 · 매개변수 · ± 두 개) (3) 이 직선과 xz평면의 교점을 묻기(★1~2)."
```

```yaml
- id: RPM-GEO-0680
  page: 103
  vendor_label: "교과서 07-1 직선의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    점 (-2, 3) 을 지나고 법선벡터가 n=(1, -5) 인 직선의 방정식.
  category: "한 점·법선벡터 → a(x-x1)+b(y-y1)=0 → 전개"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선의 방정식 — 한 점과 법선벡터"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    1·(x+2) + (-5)(y-3) = 0 을 전개하면 x-5y+17=0. 함정은 x-(-2) 의 부호와 (-5)·(-3)=+15 (T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "점 (-2,3)·법선벡터 (1,-5) → (x+2) - 5(y-3) = 0 → x-5y+17=0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$x-5y+17=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0680.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점·법선벡터 성분(정수)을 바꿈. 제약: 상수항이 정수로 정리되게 함 · 법선벡터 성분에 0 이 있으면 x=k 꼴(0676 과 대응) · 상수항 0(원점 통과)은 골조가 단순해져 피함."
    creative: "(1) 법선벡터를 '직선 x-5y+1=0 에 평행' 또는 '직선 5x+y=0 에 수직' 으로 감추기(★1~2) (2) 두 점 A, B 의 수직이등분선(중점 + 법선 AB · ★2) (3) 방향벡터 (5,1) 로 바꿔 주고 같은 직선인지 대칭꼴↔일반형 변환을 묻기(★2 · I-RT d1)."
```

```yaml
- id: RPM-GEO-0681
  page: 103
  vendor_label: "교과서 07-1 직선의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    점 (4, 2) 를 지나고 벡터 n=(3, 4) 에 수직인 직선의 방정식.
  category: "수직인 벡터 = 법선벡터 → 3(x-4)+4(y-2)=0 → 전개"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선의 방정식 — 한 점과 법선벡터"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    '벡터에 수직' 을 법선벡터로 읽고 3(x-4)+4(y-2)=0 → 3x+4y-20=0. 함정은 '수직인 벡터' 를 방향벡터로 착각해 (x-4)/3=(y-2)/4 를 쓰는 것(T-표기). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "n=(3,4) 에 수직 → 법선벡터 → 3(x-4)+4(y-2)=0 → 3x+4y-20=0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3x+4y-20=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0681.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점·법선벡터 성분을 바꿈. 제약: 정수 계수 · 상수항이 0 이 되면(원점 통과) 골조가 단순해지므로 피함."
    creative: "(1) 0675 와 짝지어 '방향벡터 (3,4)' 와 '법선벡터 (3,4)' 두 직선을 동시에 구하게 해 둘의 구별을 묻기(★1~2) (2) 직선 3x+4y-20=0 과 원점 사이 거리 4 를 함께 묻기(★2 · 단원 내 결합) (3) 법선벡터를 두 점의 차 PQ 로 주기(★1~2)."
```

```yaml
- id: RPM-GEO-0682
  page: 103
  vendor_label: "교과서 07-1 직선의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 점 A(5, -1), B(6, 2) 를 지나는 직선의 방정식(벡터 이용).
  category: "AB 를 방향벡터로 → 점 A 대입 → 대칭꼴"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선의 방정식 — 두 점을 지나는 직선(방향벡터 AB)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    AB=(1,3) 을 방향벡터로, A 를 지나는 직선 (x-5)/1 = (y+1)/3. 분모 1 은 생략해 x-5 = (y+1)/3. 함정은 분모 1 표기(T-표기). 방향벡터 구하기·대입 두 단계라 M_total 5. 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "AB=(6-5, 2-(-1))=(1,3) → 점 A 대입 → x-5 = (y+1)/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$x-5=\dfrac{y+1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0682.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표를 바꿈. 제약: AB 의 두 성분이 0 이 아니어야 분수꼴 하나(성분 0 이면 0685 골조) · 성분에 ±1 이 들어가면 분모 생략 표기 연습이 됨 · B 를 지나는 식으로 써도 같은 직선임을 채점 규칙에 둠."
    creative: "(1) B 대신 '방향벡터 (1,3) 에 평행' 으로 바꾸면 0675 골조(★1) (2) 세 점 A, B, C 가 한 직선 위에 있을 조건으로 미지수(★2 · 평행 조건) (3) 선분 AB 의 중점을 지나고 AB 에 수직인 직선(수직이등분선 · ★2 · 법선벡터 결합)."
```

```yaml
- id: RPM-GEO-0683
  page: 103
  vendor_label: "교과서 07-1 직선의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 점 A(-2, 4), B(3, 1) 을 지나는 직선의 방정식(벡터 이용).
  category: "AB=(5,-3) → 점 A 대입 → 음의 분모를 (4-y)/3 로 정리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선의 방정식 — 두 점을 지나는 직선(방향벡터 AB)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    AB=(5,-3) → (x+2)/5 = (y-4)/(-3) = (4-y)/3. 함정은 음의 분모를 (4-y)/3 로 옮기는 부호 정리(T-부호). M_total 5 · 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "AB=(5,-3) → (x+2)/5 = (y-4)/(-3) → (x+2)/5 = (4-y)/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{x+2}{5}=\dfrac{4-y}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0683.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표를 바꾸되 AB 의 한 성분이 음수가 되게 유지(부호 정리 골조). 제약: 성분 0 금지 · (y-4)/(-3) 과 (4-y)/3 둘 다 정답임을 채점 규칙에 둠."
    creative: "(1) BA 방향으로 잡아도 같은 직선임을 확인하게 하기(★1) (2) 직선이 x축·y축과 만나는 점을 묻기(★1~2 · 매개변수 t) (3) 0682 의 직선과 묶어 교점 또는 이루는 각(07-2 결합 · ★2)."
```

```yaml
- id: RPM-GEO-0684
  page: 103
  vendor_label: "교과서 07-1 직선의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 점 A(0, 1, 2), B(2, 3, 1) 을 지나는 공간 직선의 방정식(벡터 이용).
  category: "AB=(2,2,-1) → 점 A 대입 → 세 분수 대칭꼴 · 음의 분모 정리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선의 방정식 — 두 점을 지나는 직선(방향벡터 AB)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    AB=(2,2,-1) → x/2 = (y-1)/2 = (z-2)/(-1) = 2-z. 함정은 z 의 음의 분모 정리(T-부호). M_total 5 · 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "AB=(2,2,-1) → 점 A(0,1,2) 대입 → x/2 = (y-1)/2 = 2-z"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{x}{2}=\dfrac{y-1}{2}=2-z$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0684.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표를 바꿈. 제약: AB 세 성분 모두 0 이 아니어야 세 분수꼴(0 이 있으면 0685 골조) · 성분에 ±1 을 하나 넣어 분모 생략을 연습하게 함."
    creative: "(1) 직선이 xy평면과 만나는 점(z=0 → t 결정 · ★2) (2) 세 점이 한 직선 위에 있도록 하는 미지수(★2 · 평행 조건) (3) 직선 위의 점 P 중 |OP| 최소(★3 · I-RT d1 · 매개변수 이차식 또는 OP⊥AB 조건)."
```

```yaml
- id: RPM-GEO-0685
  page: 103
  vendor_label: "교과서 07-1 직선의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 점 A(2, 1, 0), B(2, 2, 3) 을 지나는 공간 직선의 방정식(벡터 이용).
  category: "AB=(0,1,3) → x성분 0 → x=2 분리 → y-1 = z/3"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선의 방정식 — 두 점을 지나는 직선(방향벡터 AB)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    AB=(0,1,3) 이라 x=2 는 따로 쓰고 (y-1)/1 = z/3. 함정은 0 성분을 분모에 두는 표기와 분모 1 생략(T-표기). M_total 5 · 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "AB=(0,1,3) → x=2 고정 → x=2, y-1 = z/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$x=2$, $y-1=\dfrac{z}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0685.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표를 바꾸되 한 좌표가 같게(성분 0 하나) 유지. 제약: 성분 0 의 위치를 바꿔도 되고, 두 좌표가 같으면 0679 골조(등식 두 개)."
    creative: "(1) 두 점의 x좌표가 같음을 보고 '직선이 놓인 평면 x=2' 를 묻기(★1) (2) 직선과 xy평면의 교점(z=0 → A 자체 · ★1) (3) 직선 위의 점 P 에 대해 |PA|=|PB| 인 점(중점 · ★1~2)."
```

### 교과서 07-2 두 직선이 이루는 각

```yaml
- id: RPM-GEO-0686
  page: 103
  vendor_label: "교과서 07-2 두 직선이 이루는 각"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 직선 (x+1)/3 = y/2, (x+3)/(-2) = (y-2)/3 이 이루는 각 θ 에 대해 cosθ 의 값.
  category: "방향벡터 읽기 → 내적 0 → cosθ=0"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선이 이루는 각 — 방향벡터의 내적으로 cosθ"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    u1=(3,2), u2=(-2,3) 의 내적 -6+6=0 이므로 cosθ=0(수직). 크기 계산까지 갈 필요가 없음. 함정은 분모의 부호 -2 를 방향벡터에 그대로 옮기는 것(T-부호). M_total 5 · 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "u1=(3,2), u2=(-2,3) → u1·u2 = 0 → cosθ = 0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0686.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 방향벡터를 (a,b), (-b,a) 꼴로 유지하면 내적 0 골조. 일반 값으로 바꾸면 |u1·u2|/(|u1||u2|) 계산 골조(0687)가 되며 답이 간단한 유리수·근호가 되도록 (1,2)·(3,1) 같은 쌍을 고름 · 지나는 점은 답에 무관."
    creative: "(1) 'θ 의 크기' 로 바꿔 90° 를 답하게 하기(★1) (2) 수직임을 이용해 두 직선의 교점을 구하고 축과 만드는 삼각형 넓이(★2 · 단원 내 결합) (3) 방향벡터 하나에 미지수를 넣어 수직 조건으로 값 구하기(0690 골조 · ★1~2)."
```

```yaml
- id: RPM-GEO-0687
  page: 103
  vendor_label: "교과서 07-2 두 직선이 이루는 각"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 직선 x-1 = (y-2)/2, (x-2)/2 = y 가 이루는 각 θ 에 대해 cosθ 의 값.
  category: "생략된 분모 1 복원 → 방향벡터 → |내적|/(크기 곱)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선이 이루는 각 — 방향벡터의 내적으로 cosθ"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    u1=(1,2), u2=(2,1) → 내적 4, 크기 √5·√5=5 → cosθ=4/5. 함정은 x-1, y 처럼 분모 1 이 생략된 성분을 1 로 읽는 것(T-표기). M_total 5 · 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "u1=(1,2), u2=(2,1) → |u1·u2|/(|u1||u2|) = 4/5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{4}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0687.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "방향벡터 쌍을 (1,2)·(2,1) → (1,3)·(3,1)(cos 3/5) · (2,1)·(1,-2)(cos 0) 처럼 바꿈. 제약: 두 크기의 곱이 정수 또는 같은 근호가 되게(같은 성분 뒤집기가 편함) · cosθ 는 0 이상이 되도록 절댓값 규칙을 답에 반영."
    creative: "(1) 두 직선이 이루는 예각 θ 에 대해 sinθ·tanθ 로 묻기(★1~2) (2) 두 직선의 교점과 이루는 각으로 삼각형 문제(★2) (3) 한 직선을 두 점으로 주어 방향벡터를 먼저 구하게 하기(★1~2)."
```

```yaml
- id: RPM-GEO-0688
  page: 103
  vendor_label: "교과서 07-2 두 직선이 이루는 각"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 공간 직선 (x-1)/3 = (y-2)/4 = (z-3)/5, (x+1)/4 = (y+2)/(-3) = (z-1)/5 가 이루는 각 θ 에 대해 cosθ 의 값.
  category: "방향벡터 (3,4,5)·(4,-3,5) → 내적 25 → 크기 √50·√50 → 1/2"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선이 이루는 각 — 방향벡터의 내적으로 cosθ"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    u1=(3,4,5), u2=(4,-3,5): 내적 12-12+25=25, 크기 각각 √50 → cosθ=25/50=1/2. 함정은 -3 의 부호 하나(T-부호). 세 성분 계산이라 Mₖ 2 · M_total 6. 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "u1=(3,4,5), u2=(4,-3,5) → 내적 25 → 크기 √50·√50 → cosθ = 1/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0688.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "방향벡터 쌍을 바꿈. 제약: 크기가 같거나 곱이 정리되는 쌍(예: (1,2,2)·(2,1,-2) → 크기 3·3, 내적 0)을 고르고 답이 1/2, √2/2, √3/2 같은 특수각 값 또는 간단한 유리수가 되게 · 지나는 점은 답에 무관."
    creative: "(1) 'θ 의 크기' 로 바꿔 60° 를 답하게(★1) (2) (a,b,c) 와 (b,-a,c) 처럼 xy 성분을 뒤집은 쌍의 cosθ = c²/(a²+b²+c²) 를 일반화해 묻기(★2 · I-PD d1) (3) 한 직선을 두 점으로 주기(★1~2)."
```

```yaml
- id: RPM-GEO-0689
  page: 103
  vendor_label: "교과서 07-2 두 직선이 이루는 각"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 공간 직선 1-x = (y+2)/2 = z-3, x+3 = y = (2-z)/2 가 이루는 각 θ 에 대해 cosθ 의 값.
  category: "1-x, 2-z 를 표준꼴로 부호 정리 → 방향벡터 → |내적|/(크기 곱)"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선이 이루는 각 — 방향벡터의 내적으로 cosθ"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    1-x = (x-1)/(-1), (2-z)/2 = (z-2)/(-2) 로 고쳐 u1=(-1,2,1), u2=(1,1,-2). 내적 -1, 크기 √6·√6=6 → cosθ=|-1|/6=1/6. 함정은 두 부호 정리(T-부호)와 분모 1 생략·절댓값(T-표기) 두 범주라 Mₜ 2 · M_total 7 로 이 범위에서 가장 무거움. 그래도 절차형이라 교과서 구역 ★1 유지.
  tier: star_1
  mechanism_primary: "1-x → (x-1)/(-1), (2-z)/2 → (z-2)/(-2) → u1=(-1,2,1), u2=(1,1,-2) → |u1·u2|/(|u1||u2|) = 1/6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0689.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "부호가 뒤집힌 항의 위치·개수(1-x, 2-z → 3-y 등)와 성분을 바꿈. 제약: 두 크기의 곱이 정수(같은 크기 √6·√6, √3·√3)가 되게 하고 내적이 음수여도 답은 절댓값을 취한 양수임을 해설에 명시."
    creative: "(1) 내적이 음수가 나오는 쌍으로 두고 '예각 θ' 임을 강조해 절댓값의 의미를 묻기(★1~2) (2) 방향벡터 하나를 (1,1,k) 로 두고 cosθ=1/6 이 되는 k(★2 · I-BW d1 · 이차방정식) (3) 두 직선이 수직이 되도록 하는 미지수(0692 골조 · ★1~2)."
```

```yaml
- id: RPM-GEO-0690
  page: 103
  vendor_label: "교과서 07-2 두 직선이 이루는 각"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 직선 l: (x-1)/a = (4-y)/2, m: (3-x)/5 = y 의 위치 관계가 ⑴ 평행 ⑵ 수직일 때 상수 a 의 값.
  category: "부호 정리 → 방향벡터 (a,-2), (-5,1) → 평행: 성분 비례 / 수직: 내적 0"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선의 평행·수직 조건 — 방향벡터 비례·내적 0 으로 미지수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (4-y)/2 = (y-4)/(-2), (3-x)/5 = (x-3)/(-5) 로 정리해 u_l=(a,-2), u_m=(-5,1). ⑴ 평행: a/(-5) = (-2)/1 → a=10 ⑵ 수직: -5a-2=0 → a=-2/5. 함정은 두 부호 정리(T-부호)와 y 의 분모 1(T-표기). 매개변수 a 로 Mₐ 2 · M_total 7. 절차형이라 교과서 구역 ★1 유지.
  tier: star_1
  mechanism_primary: "u_l=(a,-2), u_m=(-5,1) → ⑴ a:(-5) = (-2):1 → a=10 ⑵ -5a + (-2)·1 = 0 → a=-2/5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $10$ \quad (2) $-\dfrac{2}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0690.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "m 의 방향벡터와 l 의 고정 성분(-2)을 바꿈. 제약: 평행 답은 비례식으로 정수·간단한 분수 · 수직 답은 일차방정식 한 번 · 부호 뒤집힌 항(4-y, 3-x)을 하나 이상 남겨 정리 골조 유지."
    creative: "(1) 미지수를 두 직선에 하나씩 넣고 평행 조건에서 두 미지수(0691 골조 · ★1~2) (2) 평행할 때 두 직선 사이의 거리까지(★2~3 · 점과 직선 거리 결합) (3) 방향벡터에 미지수를 두 성분 (a, a-3) 으로 넣어 수직 조건이 이차방정식이 되게(★2 · 두 근 모두 유효)."
```

```yaml
- id: RPM-GEO-0691
  page: 103
  vendor_label: "교과서 07-2 두 직선이 이루는 각"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 공간 직선 (x+1)/2 = y-3 = (z+3)/(-3), x/m = (2-y)/2 = (z+1)/n 이 평행하도록 하는 상수 m, n 의 값.
  category: "부호 정리 → 방향벡터 (2,1,-3), (m,-2,n) → 성분 비례 → m, n"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선의 평행·수직 조건 — 방향벡터 비례·내적 0 으로 미지수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (2-y)/2 = (y-2)/(-2) 로 고쳐 u2=(m,-2,n), u1=(2,1,-3). 평행 → m/2 = (-2)/1 = n/(-3) → m=-4, n=6. 함정은 2-y 부호 정리(T-부호)와 y-3 의 분모 1(T-표기). 매개변수 둘 Mₐ 2 · M_total 7. 절차형 → 교과서 구역 ★1.
  tier: star_1
  mechanism_primary: "u1=(2,1,-3), u2=(m,-2,n) → m/2 = (-2)/1 = n/(-3) → m=-4, n=6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$m=-4$, $n=6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0691.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "u1 의 성분과 u2 의 고정 성분(-2)을 바꿈. 제약: 비례상수가 정수 또는 간단한 분수 · 고정 성분끼리 대응되는 축이 같도록(여기서는 y) · 부호 뒤집힌 항 하나 유지."
    creative: "(1) 평행 대신 수직 조건으로 바꾸면 m, n 관계식 하나만 나와 미지수 하나로 줄여야 함(★1~2) (2) 평행한 두 직선이 일치하는 조건까지 — 한 직선의 점을 다른 직선에 대입(★2 · I-EQV d1) (3) 평행한 두 직선을 포함하는 평면의 방정식(07-3 결합 · ★3)."
```

```yaml
- id: RPM-GEO-0692
  page: 103
  vendor_label: "교과서 07-2 두 직선이 이루는 각"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 공간 직선 (x-1)/2 = y+1 = (z+2)/4, (x+2)/3 = (y+2)/(-2) = (z-1)/k 가 수직이 되도록 하는 상수 k 의 값.
  category: "방향벡터 (2,1,4)·(3,-2,k) → 내적 0 → k"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선의 평행·수직 조건 — 방향벡터 비례·내적 0 으로 미지수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    u1=(2,1,4), u2=(3,-2,k) → 6-2+4k=0 → k=-1. 함정은 y+1 의 분모 1(T-표기). Mₐ 2 · M_total 6. 절차형 → 교과서 구역 ★1.
  tier: star_1
  mechanism_primary: "u1=(2,1,4), u2=(3,-2,k) → u1·u2 = 6-2+4k = 0 → k=-1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0692.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분을 바꿈. 제약: k 의 계수가 0 이 아니고 답이 정수·간단한 분수 · 부호 뒤집힌 항을 넣으면 0689 골조의 부호 함정이 추가됨."
    creative: "(1) 수직인 두 직선이 실제로 만나는지(교점 존재) 확인 — 매개변수 연립(★2~3 · I-VF d1 · 꼬인 위치 가능) (2) k 를 두 성분에 넣어 (3,k,k) 로 두고 수직 조건 일차(★1~2) (3) 두 직선에 모두 수직인 방향벡터 (x,y,z) 찾기(★2 · 연립 · 07-3 법선벡터로 연결)."
```

### 교과서 07-3 평면의 방정식

```yaml
- id: RPM-GEO-0693
  page: 105
  vendor_label: "교과서 07-3 평면의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    점 (2, -1, 1) 을 지나고 법선벡터가 n=(1, -2, -1) 인 평면의 방정식.
  category: "한 점·법선벡터 → a(x-x1)+b(y-y1)+c(z-z1)=0 → 전개"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면의 방정식 — 한 점과 법선벡터"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (x-2) -2(y+1) -(z-1) = 0 → x-2y-z-3=0. 함정은 -2(y+1) 과 -(z-1) 의 부호 전개(T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "점 (2,-1,1)·n=(1,-2,-1) → (x-2)-2(y+1)-(z-1)=0 → x-2y-z-3=0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$x-2y-z-3=0$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0693.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점·법선벡터 성분(정수)을 바꿈. 제약: 상수항 정수 · 법선 성분에 0 이 들어가면 0694 골조(변수 하나 빠짐) · 상수항 0(원점 통과)은 피함."
    creative: "(1) 법선벡터를 '직선 (x-1)/1 = (y+3)/(-2) = z/(-1) 에 수직인 평면' 으로 감추기(★1~2) (2) 두 점 A, B 의 수직이등분면(중점 + 법선 AB · ★2) (3) 평면과 세 좌표축의 교점으로 사면체 부피(★2~3 · 계산 결합)."
```

```yaml
- id: RPM-GEO-0694
  page: 105
  vendor_label: "교과서 07-3 평면의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    점 (3, 1, -2) 를 지나고 벡터 n=(-1, 0, 1) 에 수직인 평면의 방정식.
  category: "수직인 벡터 = 법선벡터 → -(x-3)+(z+2)=0 → x-z-5=0"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면의 방정식 — 한 점과 법선벡터"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    -(x-3) + 0·(y-1) + (z+2) = 0 → -x+z+5=0 → x-z-5=0. 함정은 양변에 -1 을 곱해 정리하는 부호(T-부호)와 y 항이 사라지는 것. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "n=(-1,0,1) 에 수직 → 법선벡터 → -(x-3)+(z+2)=0 → x-z-5=0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$x-z-5=0$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0694.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점과 법선벡터 성분을 바꾸되 0 성분 하나를 유지(y 항 없는 평면 골조). 제약: 정수 계수 · 최고차 계수를 양수로 정리하는 답 형식 통일."
    creative: "(1) y 항이 없는 평면이 y축에 평행함을 묻기(★1) (2) 법선벡터를 두 점의 차로 주기(★1~2) (3) 이 평면과 xz평면이 이루는 각(45° · 07-4 결합 · ★2)."
```

```yaml
- id: RPM-GEO-0695
  page: 105
  vendor_label: "교과서 07-3 평면의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    점 (4, 2, -1) 을 지나고 평면 x+3y-5z+8=0 에 평행한 평면의 방정식.
  category: "평행 평면은 법선 공유 → x+3y-5z+d=0 → 점 대입으로 d"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면의 방정식 — 주어진 평면에 평행한 평면(법선벡터 공유)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    평행이면 법선벡터 (1,3,-5) 를 그대로 쓰고 상수만 바꾸면 되므로 x+3y-5z+d=0 에 (4,2,-1) 을 대입 → 4+6+5+d=0 → d=-15. 함정은 (-5)·(-1)=+5 부호(T-부호). 두 단계 M_total 5. 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "평행 → 같은 법선 (1,3,-5) → x+3y-5z+d=0 → (4,2,-1) 대입 → d=-15"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$x+3y-5z-15=0$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0695.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점의 좌표와 기준 평면의 계수를 바꿈. 제약: d 가 정수 · 점이 기준 평면 위에 있으면(d 가 같아짐) 문제가 무의미하므로 피함."
    creative: "(1) '평행한 두 평면 사이의 거리' 까지 묻기(07-5 결합 · ★2) (2) 평면 대신 '직선 (x-1)/1 = (y+1)/3 = z/(-5) 에 수직인 평면' 으로 법선을 주기(★1~2) (3) 기준 평면과 평행하고 원점에서 거리 √35 인 평면 두 개(★2 · I-MI d1 · ±)."
```

```yaml
- id: RPM-GEO-0696
  page: 105
  vendor_label: "교과서 07-3 평면의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    점 (3, -2, 6) 을 지나고 z축에 수직인 평면의 방정식.
  category: "z축에 수직 → 법선벡터 (0,0,1) → z=6"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면의 방정식 — 좌표축에 수직·좌표평면에 평행한 평면"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    z축에 수직인 평면의 법선벡터는 z축 방향 (0,0,1) 이므로 0·(x-3)+0·(y+2)+(z-6)=0 → z=6. 함정은 'z축에 수직' 을 'z축에 평행' 으로 읽거나 x=3 같은 다른 좌표를 답하는 것(T-표기). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "z축에 수직 → n=(0,0,1) → z-6=0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$z=6$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0696.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점의 좌표와 축(z → x, y)을 바꿈. 제약: 답은 항상 한 좌표 = 상수 · 점의 해당 좌표가 0 이면 좌표평면 자체(z=0)가 되므로 피함."
    creative: "(1) 'xy평면에 평행' 으로 바꿔 같은 답(0697 골조 · ★1) (2) 두 조건을 섞어 'z축에 평행하고 점 A, B 를 지나는 평면'(★2 · 법선벡터 (a,b,0) 미정계수) (3) z=6 과 점 P 사이의 거리(★1 · 07-5 결합)."
```

```yaml
- id: RPM-GEO-0697
  page: 105
  vendor_label: "교과서 07-3 평면의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    점 (1, 5, -1) 을 지나고 yz평면에 평행한 평면의 방정식.
  category: "yz평면에 평행 → 법선벡터 (1,0,0) → x=1"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면의 방정식 — 좌표축에 수직·좌표평면에 평행한 평면"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    yz평면(x=0)에 평행하면 법선벡터가 x축 방향 (1,0,0) → x=1. 함정은 'yz평면에 평행' 을 y=5 또는 z=-1 로 잘못 읽는 것(T-표기). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "yz평면에 평행 → n=(1,0,0) → x-1=0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$x=1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0697.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점의 좌표와 좌표평면(yz → xy, zx)을 바꿈. 제약: 답은 한 좌표 = 상수 · 0696 과 짝으로 '축에 수직 = 나머지 두 축이 만드는 평면에 평행' 을 대응시킴."
    creative: "(1) 0696 과 함께 'x축에 수직' 과 'yz평면에 평행' 이 같은 평면임을 확인하는 보기(★1) (2) 'yz평면과 평행하고 원점에서 거리 2' 인 평면 두 개(★1~2 · ±) (3) x=1 위의 점 P 와 두 점 A, B 로 삼각형 넓이 최소(★3 · 매개변수)."
```

```yaml
- id: RPM-GEO-0698
  page: 105
  vendor_label: "교과서 07-3 평면의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    세 점 (1, -1, 0), (-1, 0, 1), (1, 0, 0) 을 지나는 평면의 방정식.
  category: "ax+by+cz+d=0 에 세 점 대입 → 연립 → 계수비 → 방정식 (또는 두 벡터에 수직인 법선벡터 결정)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면의 방정식 — 세 점을 지나는 평면(미정계수 또는 법선벡터 결정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ax+by+cz+d=0 에 세 점을 넣으면 a-b+d=0, -a+c+d=0, a+d=0 → d=-a, b=0, c=2a → x+2z-1=0. 또는 법선벡터 (a,b,c) 가 두 벡터 (-2,1,1), (0,1,0) 에 수직(내적 0)이라는 연립으로 (1,0,2) 를 잡아도 됨. 함정은 미지수 넷을 비로 정리하는 단계와 세 점 중 하나를 빠뜨리는 실수(T-표기). 연립이 있어 Mₖ 2 · M_total 6. 표준 절차라 통찰 없음 → 교과서 구역 ★1.
  tier: star_1
  mechanism_primary: "세 점 대입 → a-b+d=0, -a+c+d=0, a+d=0 → b=0, c=2a, d=-a → x+2z-1=0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$x+2z-1=0$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0698.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점의 좌표를 바꿈. 제약: 세 점이 한 직선 위에 있지 않아야 하고(두 벡터가 평행이면 평면 불능) 계수비가 정수로 떨어지도록 점을 고름 · 0 좌표를 두 개 이상 두면 연립이 짧아짐."
    creative: "(1) 세 점 중 하나를 (1, k, 0) 으로 두고 '네 점이 한 평면 위에' 조건으로 k(★2 · I-BW d1) (2) 세 점이 만드는 삼각형과 원점에서 평면까지 거리로 사면체 부피(★3 · 07-5 결합) (3) 세 점을 좌표축 절편 (p,0,0), (0,q,0), (0,0,r) 로 주고 절편형 x/p+y/q+z/r=1 발견(★2 · I-PD d1)."
```

### 교과서 07-4 두 평면이 이루는 각

```yaml
- id: RPM-GEO-0699
  page: 105
  vendor_label: "교과서 07-4 두 평면이 이루는 각"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 평면 α: 3x-√6y-z+1=0, β: 2x-2z-3=0 이 이루는 각 θ 의 크기.
  category: "법선벡터 (3,-√6,-1)·(2,0,-2) → 내적 8 → 크기 4·2√2 → cosθ=√2/2 → 45°"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면이 이루는 각 — 법선벡터의 내적으로 θ"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    n1=(3,-√6,-1), n2=(2,0,-2): 내적 6+0+2=8, |n1|=√(9+6+1)=4, |n2|=2√2 → cosθ=8/(8√2)=√2/2 → θ=45°. 함정은 β 의 y 계수 0 과 (-1)(-2)=+2 부호(T-부호). 근호 크기 계산으로 Mₖ 2 · M_total 6. 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "n1=(3,-√6,-1), n2=(2,0,-2) → |n1·n2|/(|n1||n2|) = 8/(4·2√2) = √2/2 → 45°"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$45^\circ$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0699.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "법선벡터 쌍을 바꿈. 제약: cosθ 가 1/2, √2/2, √3/2, 0 중 하나가 되도록 크기·내적을 맞춤(√6 같은 무리 성분은 크기를 정수로 만들기 위한 장치 · 예: (1,1,√2) 크기 2) · 상수항은 답에 무관."
    creative: "(1) 한 계수를 미지수 k 로 두고 θ=45° 가 되는 k(★2 · I-BW d1 · 이차방정식 ±) (2) 두 평면과 xy평면이 이루는 각 비교(★1~2) (3) 두 평면의 교선의 방향벡터까지 묻기(★3 · 두 법선에 동시 수직 · 연립)."
```

```yaml
- id: RPM-GEO-0700
  page: 105
  vendor_label: "교과서 07-4 두 평면이 이루는 각"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 평면 α: x+2y-z+5=0, β: 2x+y+z-3=0 이 이루는 각 θ 의 크기.
  category: "법선벡터 (1,2,-1)·(2,1,1) → 내적 3 → 크기 √6·√6 → cosθ=1/2 → 60°"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면이 이루는 각 — 법선벡터의 내적으로 θ"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    n1=(1,2,-1), n2=(2,1,1): 내적 2+2-1=3, 크기 각각 √6 → cosθ=3/6=1/2 → 60°. 함정은 -z 계수의 부호(T-부호). M_total 5 · 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "n1=(1,2,-1), n2=(2,1,1) → 3/(√6·√6) = 1/2 → 60°"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$60^\circ$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0700.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "법선벡터 쌍을 (1,2,-1)·(2,1,1) → (1,1,0)·(1,0,1)(60°) · (1,2,2)·(2,1,-2)(90°) 처럼 바꿈. 제약: cosθ 가 특수각 값 · 내적이 음수면 절댓값을 취해 예각으로 답하는 규칙 명시."
    creative: "(1) 한 평면의 z 계수를 k 로 두고 60° 조건에서 k(★2 · I-BW d1) (2) 두 평면이 이루는 각의 이등분면(★3 · 점과 평면 거리 결합) (3) 두 평면의 교선 위의 점 하나와 방향벡터(★3)."
```

```yaml
- id: RPM-GEO-0701
  page: 105
  vendor_label: "교과서 07-4 두 평면이 이루는 각"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 평면 α: 3x-y-2z+4=0, β: x+9y-3z+8=0 이 이루는 각 θ 의 크기.
  category: "법선벡터 (3,-1,-2)·(1,9,-3) → 내적 0 → 90°"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면이 이루는 각 — 법선벡터의 내적으로 θ"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    n1=(3,-1,-2), n2=(1,9,-3) 의 내적 3-9+6=0 → 두 평면 수직 → 90°. 크기 계산 불필요. 함정은 (-2)(-3)=+6 부호(T-부호). M_total 5 · 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "n1=(3,-1,-2), n2=(1,9,-3) → n1·n2 = 0 → θ = 90°"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$90^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0701.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "내적 0 을 유지하며 성분을 바꿈(한 성분을 나머지 둘로 맞춤). 제약: 상수항 자유 · 내적이 0 이 아니게 바꾸면 0699 골조."
    creative: "(1) 한 계수를 k 로 두고 수직 조건으로 k(0703 골조 · ★1~2) (2) 수직인 두 평면과 모두 수직이고 원점을 지나는 세 번째 평면(★2~3 · 연립) (3) 법선벡터가 둔각을 이룰 때 평면이 이루는 각은 예각으로 답함을 확인하는 보기(★2)."
```

```yaml
- id: RPM-GEO-0702
  page: 105
  vendor_label: "교과서 07-4 두 평면이 이루는 각"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 평면 α: ax+2y+bz+5=0, β: 2x+3y-4z+1=0 이 평행할 때 상수 a, b 의 값.
  category: "법선벡터 (a,2,b) ∥ (2,3,-4) → 성분 비례 → a, b"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면의 평행·수직 조건 — 법선벡터 비례·내적 0 으로 미지수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    평행 → a/2 = 2/3 = b/(-4) → a=4/3, b=-8/3. 함정은 b 의 부호(T-부호) · 상수항 5, 1 이 비례하지 않으므로 일치가 아닌 평행임을 확인. 매개변수 둘 Mₐ 2 · M_total 6. 절차형 → 교과서 구역 ★1.
  tier: star_1
  mechanism_primary: "(a,2,b) ∥ (2,3,-4) → a/2 = 2/3 = b/(-4) → a=4/3, b=-8/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$a=\dfrac{4}{3}$, $b=-\dfrac{8}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0702.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "β 의 계수와 α 의 고정 계수(2)를 바꿈. 제약: 비례상수가 간단한 분수 · 상수항은 서로 비례하지 않게 두어 '일치' 가 아닌 '평행' 유지(일치 조건을 묻는 변형은 상수항까지 비례)."
    creative: "(1) '평행하지만 일치하지 않을 조건' 으로 상수항 조건 추가(★2 · I-EQV d1) (2) 평행한 두 평면 사이의 거리(★2 · 07-5 결합) (3) a, b 가 정해진 뒤 α 와 xy평면이 이루는 각(★2)."
```

```yaml
- id: RPM-GEO-0703
  page: 105
  vendor_label: "교과서 07-4 두 평면이 이루는 각"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 평면 α: x+3y+(1-k)z+1=0, β: x+(k-3)y-2z+5=0 이 수직일 때 상수 k 의 값.
  category: "법선벡터 (1,3,1-k)·(1,k-3,-2) → 내적 0 → 일차방정식 → k"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면의 평행·수직 조건 — 법선벡터 비례·내적 0 으로 미지수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    1 + 3(k-3) - 2(1-k) = 0 → 5k-10=0 → k=2. 함정은 -2(1-k) 의 부호 전개(T-부호). k 가 두 평면에 흩어져 있어도 내적은 일차식. Mₐ 2 · M_total 6. 절차형 → 교과서 구역 ★1.
  tier: star_1
  mechanism_primary: "n1=(1,3,1-k), n2=(1,k-3,-2) → 1+3(k-3)-2(1-k)=0 → k=2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0703.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "k 가 든 성분의 위치·계수를 바꿈. 제약: 내적이 일차식이 되도록 k 를 서로 곱해지는 성분 쌍에 동시에 두지 않음(둘 다 k 면 이차 → 근 두 개) · 답 정수."
    creative: "(1) k 를 곱해지는 쌍 (1-k)·(k-2) 에 두어 이차방정식 → 두 근(★2 · I-MI d1) (2) 수직 조건과 '점 (1,1,1) 을 지남' 을 함께 주어 k 와 상수항 두 미지수(★2) (3) 수직인 두 평면의 교선에 수직인 평면(★3)."
```

### 교과서 07-5 점과 평면 사이의 거리

```yaml
- id: RPM-GEO-0704
  page: 105
  vendor_label: "교과서 07-5 점과 평면 사이의 거리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    점 A(1, -2, 1) 과 평면 α: 2x+2y+z-2=0 사이의 거리.
  category: "거리 공식 |ax1+by1+cz1+d|/√(a²+b²+c²) 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "점과 평면 사이의 거리 — 공식 대입"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    |2·1+2·(-2)+1-2|/√(4+4+1) = |-3|/3 = 1. 함정은 분자의 절댓값·부호(T-부호). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "|2-4+1-2|/√(4+4+1) = 3/3 → 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0704.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점·평면 계수를 바꿈. 제약: √(a²+b²+c²) 가 정수(1,2,2 · 2,3,6 · 1,4,8 류)가 되게 하고 분자가 그 배수면 정수 답 · 점이 평면 위(분자 0)면 거리 0 이라 피함."
    creative: "(1) 거리가 1 이 되는 평면 2x+2y+z+d=0 의 d 두 값(★2 · I-MI d1 · ±) (2) 점의 한 좌표를 k 로 두고 거리 조건으로 k(★2 · I-BW d1) (3) 평면과 평행하고 A 를 지나는 평면 사이의 거리로 바꿔 말하기(★1~2 · 0695 결합)."
```

```yaml
- id: RPM-GEO-0705
  page: 105
  vendor_label: "교과서 07-5 점과 평면 사이의 거리"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    점 A(0, 3, -4) 와 평면 α: x+y+z+4=0 사이의 거리.
  category: "거리 공식 대입 → 3/√3 → 분모 유리화 → √3"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "점과 평면 사이의 거리 — 공식 대입"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    |0+3-4+4|/√(1+1+1) = 3/√3 = √3. 함정은 분모 유리화(T-표기). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "|0+3-4+4|/√(1+1+1) = 3/√3 → √3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0705.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점·상수항을 바꿈. 제약: 분자가 3 의 배수면 답이 k√3 으로 깔끔 · 법선 (1,1,1) 을 유지하면 유리화 골조, (1,2,2) 로 바꾸면 정수 답(0704 골조)."
    creative: "(1) 원점과 평면 사이의 거리 4√3/3 을 함께 묻기(★1) (2) 중심 A 인 구가 평면 α 에 접할 때 반지름(★2 · 07-6 결합 · I-RT d1) (3) 점 A 에서 평면에 내린 수선의 발 좌표(★2~3 · 직선과 평면의 교점)."
```

### 교과서 07-6 벡터를 이용한 구의 방정식

```yaml
- id: RPM-GEO-0706
  page: 105
  vendor_label: "교과서 07-6 벡터를 이용한 구의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    A(2, 3, 1), P(x, y, z) 의 위치벡터 a, p 에 대해 ⑴ |p|=1 ⑵ |p-a|=3 을 만족시키는 점 P 가 나타내는 도형의 방정식.
  category: "|p-c|=r → 중심 c·반지름 r 인 구 → 성분으로 전개"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터를 이용한 구의 방정식 — |p-c|=r 을 성분으로"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ |p|=1 은 원점 중심 반지름 1 → x²+y²+z²=1 ⑵ |p-a|=3 은 |AP|=3 이므로 A 중심 반지름 3 → (x-2)²+(y-3)²+(z-1)²=9. 함정은 반지름을 제곱하지 않고 =3 으로 쓰는 것(T-표기). 소문항 둘 M_total 5. 교과서 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "|p-a|=r → |AP|=r → (x-2)²+(y-3)²+(z-1)²=3²"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $x^2+y^2+z^2=1$ \enspace (2) $(x-2)^2+(y-3)^2+(z-1)^2=9$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0706.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심 A 의 좌표와 반지름(정수)을 바꿈. 제약: 반지름은 양수 · ⑵ 를 |p-a|²=9 로 주면 제곱 표기 함정이 사라짐 · ⑴ 을 |p|=r 로 두면 원점 중심 골조 유지."
    creative: "(1) |2p-a|=4 처럼 계수를 넣어 |p-a/2|=2 로 정리하게(★2 · I-EQV d1) (2) |p-a|=|p-b| 로 바꾸면 구가 아니라 선분 AB 의 수직이등분면(★2 · I-RT d1) (3) (p-a)·(p-b)=0 은 0707 골조 · |p-a|=2|p-b| 는 아폴로니오스 구(★3 · I-RT d2)."
```

```yaml
- id: RPM-GEO-0707
  page: 105
  vendor_label: "교과서 07-6 벡터를 이용한 구의 방정식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    세 점 A, B, P 의 위치벡터 a, b, p 에 대해 (p-a)·(p-b)=0 을 만족시키는 점 P 가 나타내는 도형.
  category: "(p-a)·(p-b)=0 → AP·BP=0 → AP⊥BP → ∠APB=90° → AB 를 지름으로 하는 구"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "벡터 방정식 (p-a)·(p-b)=0 을 AP⊥BP 라는 기하 조건으로 옮겨 지름 조건(반원의 원주각 · 공간에서는 구)을 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "벡터를 이용한 구의 방정식 — (p-a)·(p-b)=0 지름 조건"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    p-a=AP, p-b=BP 이므로 내적 0 은 AP⊥BP, 즉 ∠APB=90°. 공간에서 이 조건을 만족하는 점 P 는 AB 를 지름으로 하는 구 위에 있다(P=A, B 일 때는 영벡터라 포함). 벡터 식을 기하 조건으로 옮기는 단계가 통찰(RT d1)이지만 교과서 정리 그대로라 depth 1 · ★ 조정 없음 · insight_type 은 절차형으로 둠. 일반 위치벡터 a, b 로 Mₐ 2 · M_total 6. 교과서 구역 → ★1.
  tier: star_1
  mechanism_primary: "(p-a)·(p-b)=0 → AP·BP=0 → ∠APB=90° → AB 를 지름으로 하는 구"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\seg{AB}$를 지름으로 하는 구'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0707.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 문항. A, B 에 구체 좌표(예: A(1,2,3), B(3,0,-1))를 주고 구의 방정식(중심 (2,1,1) = 중점 · 반지름 √6 = |AB|/2)을 쓰게 하는 것이 숫자 변형. 제약: 중심 = 중점, 반지름 = |AB|/2 가 간단한 근호가 되게 좌표를 고름."
    creative: "(1) (p-a)·(p-b)=0 을 성분으로 전개해 중심 (a+b)/2 · 반지름 |a-b|/2 를 유도하게(★2 · I-RT d1 유지 · 계산 증가) (2) (p-a)·(p-b)=k (k>0) 로 일반화해 반지름 √(|a-b|²/4+k)(★3 · I-EQV d1 추가) (3) 평면 위 같은 식은 AB 를 지름으로 하는 원 — 차원만 바꾼 쌍 문항(★1) (4) 구와 평면 z=0 의 교선(원)의 반지름까지(★3 · 07-5 결합)."
```

## 표본 판정 요약 (33문)

- ★ 분포: ★1 33 · ★2 0 · ★3 0 · ★4 0 · ★5 0
- 통찰형 0 · 절차형 33 · premium 0 (통찰 라벨이 붙은 문항 1 — 0707 I-RT d1 · 교과서 정리 수준이라 insight_type 은 절차형으로 둠)
- M_total: 4 → 13문 · 5 → 10문 · 6 → 7문 · 7 → 3문(0689 · 0690 · 0691 — 부호 뒤집힌 항과 분모 1 생략이 겹친 문항)
- type_hint 상위: 「직선의 방정식 — 두 점을 지나는 직선(방향벡터 AB)」 4 · 「두 직선이 이루는 각 — 방향벡터의 내적으로 cosθ」 4 · 「직선의 방정식 — 방향벡터에 0 성분이 있는 경우」 3 · 「두 직선의 평행·수직 조건」 3 · 「두 평면이 이루는 각 — 법선벡터의 내적으로 θ」 3 · 그 외 2문 이하(한 점과 방향벡터 2 · 한 점과 법선벡터(직선) 2 · 한 점과 법선벡터(평면) 2 · 좌표축·좌표평면 조건 평면 2 · 두 평면의 평행·수직 조건 2 · 점과 평면 사이의 거리 2 · 평행한 평면 1 · 세 점을 지나는 평면 1 · |p-c|=r 구 1 · (p-a)·(p-b)=0 구 1)
- 그림: 0문(figure 전부 none)
- 전사 답 확인: 33건 모두 재계산과 일치

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| (없음) | 이 범위는 전부 교과서 구역이고 33문 모두 M·I 판정이 ★1 로 벤더 신호와 일치. 0689·0690·0691 은 M_total 7 이지만 통찰 없음이라 +1 조건에 해당하지 않아 이슈로 올리지 않음 | - |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 「두 점을 지나는 직선」 4 · 「두 직선이 이루는 각」 4 · 「0 성분이 있는 방향벡터」 3 · 「두 직선의 평행·수직 조건」 3 · 「두 평면이 이루는 각」 3.
- 따로 세울 유형: (1) 「직선의 방정식 — 한 점과 방향벡터」와 「두 점을 지나는 직선」은 골조가 같지만(AB 를 방향벡터로 환원) 카탈로그에서는 RPM 유형 구분(교과서 07-1 의 두 묶음)에 맞춰 분리해 두는 편이 변형 생성에 편함. (2) 「두 직선의 평행·수직 조건」(0690~0692)과 「두 평면의 평행·수직 조건」(0702~0703)은 방향벡터/법선벡터만 다르고 산식(비례·내적 0)이 같음 — 카탈로그에서는 직선/평면으로 나누되 base ★ 는 같게. (3) 「(p-a)·(p-b)=0 지름 조건」(0707)은 「|p-c|=r 구」(0706)와 달리 벡터↔기하 해석(I-RT)이 들어가므로 별도 유형으로 세우고, 유형 구역에서 아폴로니오스 구·계수 붙은 |2p-a| 류가 나오면 그 상위 유형으로 묶을 것.
- 통합해도 될 유형: (1) 「방향벡터에 0 성분이 있는 경우」(0676·0678·0679)는 「한 점과 방향벡터」의 하위 변형이라 카탈로그에서는 한 유형 안의 답 형식 분기(분수꼴 하나 / 등식 분리)로 두어도 됨. (2) 「좌표축에 수직·좌표평면에 평행한 평면」(0696·0697)은 「한 점과 법선벡터」에서 법선이 좌표축 방향인 특수 사례라 통합 가능. (3) 「주어진 평면에 평행한 평면」(0695)도 법선 공유 한 줄이라 「한 점과 법선벡터」에 흡수 가능.
- 이 범위에서 ★2 이상이 없으므로 카탈로그의 base ★ 는 07-p2 이후 유형 구역(유형 NN · 유형 UP)의 판정과 함께 정해야 한다.
