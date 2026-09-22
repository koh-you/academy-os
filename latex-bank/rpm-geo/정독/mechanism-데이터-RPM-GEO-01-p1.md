---
name: mechanism-데이터-RPM-GEO-01-p1
description: RPM 기하 01 이차곡선(1/4 · 교과서 01-1~01-4) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 기하 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-geo
  section: 01 이차곡선
  unit_code: GEO-01
  part: "1/4"
  extract_range: "7~9쪽 · 0001~0036"
  total_problems: 36
  unit_total: 150
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-geo/items/<id>.tex
  image_source: latex-bank/rpm-geo/figures/ (crops.json)
---

# RPM 기하 · 01 이차곡선 (1/4) 정독 데이터 (v1.0)

이 파일은 RPM 기하 01 이차곡선의 첫 범위(7~9쪽 · 0001~0036 · 36문항)를 다룬다. 전부 「교과서」 구역(01-1 포물선 · 01-2 타원 · 01-3 쌍곡선 · 01-4 이차곡선)의 기본 문제로, 난이도 표시(level)·태그·그림이 하나도 없다. RPM 의 벤더 난이도 신호는 구역이 곧 층(교과서 / 유형 / 유형 UP / 시험에 꼭 나오는 문제 / 서술형 / 실력 Up · 난이도 하~상 · 대표문제·중요·기출 태그)이며, 이 범위는 모두 ★1 출발점이다. M_total(4~6)·통찰(전부 0)로 조정한 결과 36문 전부 ★1 절차형으로 판정했고, 벤더 신호와 어긋나는 문항은 없다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(절차형이면 빈 배열) · `variation_notes`(numeric: 바꿔도 되는 수와 제약 / creative: 골조를 유지한 설정 변경과 ★ 변동 지점)를 채웠다. 세 곡선(포물선·타원·쌍곡선)마다 「정의 → 방정식 / 표준형 → 요소 / 평행이동 / 평행이동된 곡선의 요소 / 일반형 → 표준형」 다섯 골조가 같은 순서로 반복되고, 끝에 이차곡선 판별 4문이 붙는다.

## 문항 데이터

### 교과서 01-1 포물선

```yaml
- id: RPM-GEO-0001
  page: 7
  vendor_label: "교과서 01-1 포물선"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    초점 F(5, 0), 준선 x=-5 인 포물선의 방정식.
  category: "초점·준선 → 표준형 y^2=4px 의 p 읽기 → 방정식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 방정식 — 초점과 준선이 주어질 때"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    초점 (5,0)·준선 x=-5 는 표준형 y^2=4px 의 p=5 에 그대로 대응한다. 정의 확인 한 단계, 계산 없음.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "초점 (p,0)·준선 x=-p 대응 → p=5 → y^2=20x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y^2=20x$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0001.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "p 값(±1·±2·±3·1/2 등)을 바꾸고 초점·준선 쌍을 그에 맞게 줌. 제약: 초점 (p,0) 과 준선 x=-p 가 원점 대칭이어야 표준형이 되고, p 의 부호가 열린 방향을 정하므로 부호 함정을 의도할 땐 음수 p."
    creative: "(1) 축을 y축으로 바꿔 x^2=4py 꼴(★1 유지) (2) 초점·준선 대신 꼭짓점과 초점, 또는 초점과 축 위 한 점을 주기(★1~2) (3) 초점·준선이 원점 대칭이 아닌 경우(초점 (3,0)·준선 x=1)로 꼭짓점 이동이 필요 → 평행이동 결합 ★2."
```

```yaml
- id: RPM-GEO-0002
  page: 7
  vendor_label: "교과서 01-1 포물선"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    초점 F(0, -3), 준선 y=3 인 포물선의 방정식.
  category: "초점·준선 → 표준형 x^2=4py 의 p 읽기 → 방정식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 방정식 — 초점과 준선이 주어질 때"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    초점이 y축 위(0,-3)·준선 y=3 → x^2=4py 에서 p=-3. 축 방향(x^2 꼴)과 p 의 부호(아래로 열림)만 정확히 읽으면 한 줄.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "초점 (0,p)·준선 y=-p 대응 → p=-3 → x^2=-12y"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$x^2=-12y$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0002.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "p 를 다른 음수·양수(±1, ±2, ±5/2)로. 제약: 초점 (0,p)·준선 y=-p 대응이 유지돼야 하고, 부호 함정을 유지하려면 p<0."
    creative: "(1) x축 대칭형(0001)과 짝으로 축 판별 훈련(★1) (2) 준선만 주고 꼭짓점이 원점이라는 조건으로 초점을 거꾸로 묻기(★1) (3) 준선이 y=k(k≠-p) 로 꼭짓점이 원점이 아닌 경우 → 평행이동 결합 ★2."
```

```yaml
- id: RPM-GEO-0003
  page: 7
  vendor_label: "교과서 01-1 포물선"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    포물선 y^2=-4x 의 초점의 좌표와 준선의 방정식.
  category: "표준형 y^2=4px 계수 비교 → p → 초점 (p,0)·준선 x=-p"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 초점과 준선 — 표준형 y^2=4px · x^2=4py"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    4p=-4 → p=-1. 초점 (-1,0)·준선 x=1. 계수 비교 한 단계, 부호만 주의.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "4p=-4 → p=-1 → 초점 (-1,0)·준선 x=1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '초점의 좌표: $(-1,\,0)$, 준선의 방정식: $x=1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0003.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4p 자리 계수를 다른 정수·분수(8, -12, 1/2, -2/3)로. 제약: p=계수/4 이 깔끔한 유리수가 되게 하고, 부호를 바꿔 열린 방향 함정 유지 가능."
    creative: "(1) y^2=4px 와 x^2=4py 를 섞은 4문 세트로 축 판별(★1) (2) 초점·준선 대신 초점에서 준선까지 거리(2|p|)나 포물선 위 한 점의 초점거리를 묻기(★1~2) (3) y^2=ax 의 초점이 (k,0) 이 되게 하는 a 를 묻는 역방향(★1)."
```

```yaml
- id: RPM-GEO-0004
  page: 7
  vendor_label: "교과서 01-1 포물선"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    포물선 y^2=(1/2)x 의 초점의 좌표와 준선의 방정식.
  category: "표준형 계수 비교 → p=1/8 → 초점·준선"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 초점과 준선 — 표준형 y^2=4px · x^2=4py"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    4p=1/2 → p=1/8. 초점 (1/8,0)·준선 x=-1/8. 분수 나눗셈 한 번이 전부.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "4p=1/2 → p=1/8 → 초점 (1/8,0)·준선 x=-1/8"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '초점의 좌표: $\left(\dfrac{1}{8},\,0\right)$, 준선의 방정식: $x=-\dfrac{1}{8}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0004.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수를 다른 분수(1/3, 3/4, -2/5)로. 제약: 4 로 나눈 p 가 학생이 다룰 수 있는 분수가 되게 하고, 분수 나눗셈(1/2 ÷ 4 = 1/8) 함정을 유지하려면 분자가 1 인 계수가 효과적."
    creative: "(1) 2y^2=x 처럼 계수를 y^2 쪽에 두어 먼저 정리하게(★1) (2) 초점이 (1/8,0) 인 포물선의 방정식을 묻는 역방향(★1) (3) 준선까지 거리가 1/4 인 포물선 위의 점의 x좌표 → 정의 활용 ★2."
```

```yaml
- id: RPM-GEO-0005
  page: 7
  vendor_label: "교과서 01-1 포물선"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    포물선 x^2=8y 의 초점의 좌표와 준선의 방정식.
  category: "표준형 x^2=4py 계수 비교 → p → 초점 (0,p)·준선 y=-p"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 초점과 준선 — 표준형 y^2=4px · x^2=4py"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    4p=8 → p=2. 초점 (0,2)·준선 y=-2. x^2 꼴이므로 초점이 y축 위에 있다는 것만 구별.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "4p=8 → p=2 → 초점 (0,2)·준선 y=-2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '초점의 좌표: $(0,\,2)$, 준선의 방정식: $y=-2$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0005.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 8 을 4 의 배수(4, 12, -16)나 분수로. 제약: p=계수/4. 축 혼동 함정을 노리면 x^2 꼴을 유지한 채 y^2 꼴 문항과 섞음."
    creative: "(1) y^2=8x 와 나란히 두어 축 구분(★1) (2) 초점을 지나는 x축 평행 현의 길이(4|p|)를 묻기 → 정의·대입 ★2 (3) 준선 y=-2 와 초점 (0,2)에서 같은 거리에 있는 점의 자취를 구하게 해 정의를 역으로 확인(★2)."
```

```yaml
- id: RPM-GEO-0006
  page: 7
  vendor_label: "교과서 01-1 포물선"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    포물선 x^2=-(2/3)y 의 초점의 좌표와 준선의 방정식.
  category: "표준형 계수 비교 → p=-1/6 → 초점·준선"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 초점과 준선 — 표준형 y^2=4px · x^2=4py"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    4p=-2/3 → p=-1/6. 초점 (0,-1/6)·준선 y=1/6. 분수 나눗셈과 부호 두 가지를 한 단계에서 처리.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "4p=-2/3 → p=-1/6 → 초점 (0,-1/6)·준선 y=1/6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '초점의 좌표: $\left(0,\,-\dfrac{1}{6}\right)$, 준선의 방정식: $y=\dfrac{1}{6}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0006.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수를 다른 음의 분수(-4/5, -1/3)로. 제약: 4 로 나눈 p 가 정리되는 분수. 부호·분수 두 함정을 유지하려면 음수 분수 계수."
    creative: "(1) 3x^2=-2y 꼴로 주어 표준형 정리를 추가(★1) (2) 0003~0006 을 하나의 표로 묶어 축·부호·분수 판별을 한 번에(★1) (3) 초점 (0,-1/6) 인 이 포물선 위에서 준선까지 거리가 1 인 점 찾기 → 정의 활용 ★2."
```

```yaml
- id: RPM-GEO-0007
  page: 7
  vendor_label: "교과서 01-1 포물선"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    포물선 y^2=2x 를 x축 방향으로 3, y축 방향으로 -2 만큼 평행이동한 포물선의 방정식.
  category: "평행이동 규칙 x→x-m, y→y-n 대입 → 방정식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 평행이동"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (x,y)→(x-3, y+2) 를 대입해 (y+2)^2=2(x-3). 이동량의 부호를 뒤집어 넣는 것 외에 계산이 없다.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x→x-3, y→y+2 치환 → (y+2)^2=2(x-3)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(y+2)^2=2(x-3)$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0007.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량 (m,n) 과 계수 2 를 자유롭게(0 이 아닌 이동량으로 부호 함정 유지). 제약: 답을 (y-n)^2=k(x-m) 꼴로 통일해 채점 기준 고정."
    creative: "(1) 이동 뒤 초점·준선까지 묻기(0008 골조 · ★1) (2) 평행이동한 포물선이 원점을 지나도록 하는 이동량 조건(★2) (3) 전개된 일반형을 주고 어떤 이동인지 역으로 묻기(0010 골조 · ★1~2)."
```

```yaml
- id: RPM-GEO-0008
  page: 7
  vendor_label: "교과서 01-1 포물선"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    포물선 (y-1)^2=4(x+1) 의 초점의 좌표와 준선의 방정식.
  category: "기본형 y^2=4x 의 초점·준선 → 평행이동 (-1,1) 적용"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 포물선의 초점과 준선"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    기본형 y^2=4x 는 p=1, 초점 (1,0)·준선 x=-1. 이를 x축 -1, y축 1 만큼 옮기면 초점 (0,1)·준선 x=-2.
    기본형 읽기 + 이동 적용 두 단계의 표준 절차. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "y^2=4x 의 초점 (1,0)·준선 x=-1 → (-1,1) 평행이동 → 초점 (0,1)·준선 x=-2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '초점의 좌표: $(0,\,1)$, 준선의 방정식: $x=-2$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0008.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량 (m,n) 과 4p 계수를 바꿈. 제약: 준선은 x=m-p 인 세로선, 초점은 (m+p, n). 부호 함정 유지하려면 m<0 또는 p<0."
    creative: "(1) (x-m)^2=4p(y-n) 꼴로 축을 바꿔 준선이 가로선(★1) (2) 초점과 준선을 주고 평행이동된 포물선의 방정식을 묻는 역방향(★2) (3) 꼭짓점과 초점만 주고 방정식·준선을 묻기 → 이동량 추론 ★2."
```

```yaml
- id: RPM-GEO-0009
  page: 7
  vendor_label: "교과서 01-1 포물선"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    포물선 (x-2)^2=-16(y-3) 의 초점의 좌표와 준선의 방정식.
  category: "기본형 x^2=-16y 의 초점·준선 → 평행이동 (2,3) 적용"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 포물선의 초점과 준선"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    기본형 x^2=-16y 는 p=-4, 초점 (0,-4)·준선 y=4. (2,3) 만큼 옮기면 초점 (2,-1)·준선 y=7.
    부호(p<0)와 축 방향을 함께 처리하는 두 단계. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "x^2=-16y 의 초점 (0,-4)·준선 y=4 → (2,3) 평행이동 → 초점 (2,-1)·준선 y=7"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '초점의 좌표: $(2,\,-1)$, 준선의 방정식: $y=7$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0009.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량과 4p 계수(음수 유지 시 부호 함정). 제약: 초점 (m, n+p), 준선 y=n-p 로 정리되는 정수 조합."
    creative: "(1) 초점 (2,-1)·준선 y=7 을 주고 방정식을 묻는 역방향(★2) (2) 이 포물선과 x축의 교점을 묻기 → 대입 계산 결합 ★2 (3) 준선과 초점 사이 거리(2|p|)만 묻고 방정식 형태를 추론하게(★1)."
```

```yaml
- id: RPM-GEO-0010
  page: 7
  vendor_label: "교과서 01-1 포물선"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    포물선 y^2-8x-4y+28=0 에 대하여 ⑴ (y-n)^2=k(x-m) 꼴로 변형 ⑵ 초점의 좌표와 준선의 방정식.
  category: "완전제곱 → 표준형 (y-2)^2=8(x-3) → 평행이동된 초점·준선"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 일반형 → 표준형 변형과 초점·준선"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y 에 대해 완전제곱: (y-2)^2=8x-24=8(x-3). 4p=8 → p=2, 꼭짓점 (3,2) 기준으로 초점 (5,2)·준선 x=1.
    완전제곱 → 계수 묶기 → 이동 적용 세 단계의 표준 절차. 소문항 ⑴ 이 변형을 안내하므로 부담이 더 줄어든다.
    교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "y^2-4y 완전제곱 → (y-2)^2=8(x-3) → p=2 · 꼭짓점 (3,2) → 초점 (5,2)·준선 x=1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $(y-2)^2=8(x-3)$ \quad (2) 초점의 좌표: $(5,\,2)$, 준선의 방정식: $x=1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0010.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일반형 계수(x 계수·y 계수·상수)를 바꾸되 완전제곱 뒤 x 항 계수로 묶었을 때 꼭짓점이 정수가 되도록. 제약: y^2 계수 1, x 항 계수는 4p 로 p 가 정리되게(±4, ±8, ±2)."
    creative: "(1) x^2 형(x^2+ax+by+c=0)으로 바꿔 축 판별 추가(★1) (2) 변형 소문항 ⑴ 없이 바로 초점·준선을 묻기(★2) (3) 초점과 준선을 주고 일반형을 전개해 쓰게 하는 역방향(★2)."
```

### 교과서 01-2 타원

```yaml
- id: RPM-GEO-0011
  page: 7
  vendor_label: "교과서 01-2 타원"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 초점 F(2, 0), F'(-2, 0) 에서의 거리의 합이 8 인 타원의 방정식.
  category: "정의(거리의 합 2a) → a, c → b^2=a^2-c^2 → 표준형"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 방정식 — 두 초점과 거리의 합"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2a=8 → a=4, c=2, b^2=16-4=12 → x^2/16+y^2/12=1. 정의와 a·b·c 관계 한 줄.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "2a=8, c=2 → b^2=a^2-c^2=12 → x^2/16+y^2/12=1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{x^2}{16}+\dfrac{y^2}{12}=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0011.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "c 와 2a 를 바꿈(2a>2c 필수). 제약: b^2=a^2-c^2>0 이고 분모가 정수가 되게 a·c 를 정수로(피타고라스 삼조면 b 도 정수)."
    creative: "(1) 초점을 y축 위로(0012 골조 · ★1) (2) 거리의 합 대신 타원 위 한 점을 주기 → 두 초점까지 거리로 2a 계산 ★2 (3) 장축 길이와 한 초점만 주기(★1) (4) 초점이 원점 대칭이 아닌 (1,0),(5,0) 로 → 중심 이동 결합 ★2."
```

```yaml
- id: RPM-GEO-0012
  page: 7
  vendor_label: "교과서 01-2 타원"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 초점 F(0, 3), F'(0, -3) 에서의 거리의 합이 10 인 타원의 방정식.
  category: "정의 → 초점이 y축 위 → b=5, c=3 → a^2=b^2-c^2 → 표준형"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 방정식 — 두 초점과 거리의 합"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    초점이 y축 위이므로 장축은 y축: 2b=10 → b=5, c=3, a^2=25-9=16 → x^2/16+y^2/25=1.
    큰 분모를 y^2 아래 두는 것만 주의. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "초점 y축 → 2b=10, c=3 → a^2=b^2-c^2=16 → x^2/16+y^2/25=1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{x^2}{16}+\dfrac{y^2}{25}=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0012.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "c 와 2b(2b>2c). 제약: a^2=b^2-c^2>0 이고, 축 판별 함정을 유지하려면 초점을 y축 위에."
    creative: "(1) 0011 과 짝으로 축 판별 세트(★1) (2) 거리의 합 대신 단축 길이나 타원이 지나는 점 주기(★2) (3) 초점 (0,±3) 과 장축 10 을 만족하며 중심이 (0,1) 로 옮겨진 경우(★2)."
```

```yaml
- id: RPM-GEO-0013
  page: 7
  vendor_label: "교과서 01-2 타원"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    타원 x^2/24+y^2/49=1 의 초점의 좌표, 장축과 단축의 길이.
  category: "표준형에서 큰 분모 판별 → c^2=49-24 → 초점·축 길이"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 초점·장축·단축 — 표준형에서 읽기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    49>24 → 장축이 y축, c^2=49-24=25 → 초점 (0,±5). 장축 2·7=14, 단축 2√24=4√6.
    큰 분모 판별과 c 계산·근호 정리. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "49>24 → 장축 y축 · c=√(49-24)=5 → 초점 (0,±5) · 장축 14 · 단축 4√6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '초점의 좌표: $(0,\,5)$, $(0,\,-5)$, 장축의 길이: $14$, 단축의 길이: $4\sqrt{6}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0013.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 분모를 바꿈. 제약: 차가 완전제곱수면 초점 좌표 정수(★1 유지), 단축 길이에 근호가 남는 조합(24 처럼)으로 근호 정리 부담 유지 가능."
    creative: "(1) 분모 순서를 바꿔 장축이 x축(★1) (2) 초점과 장축 길이를 주고 분모를 묻는 역방향(★1) (3) 장축·단축 길이의 비와 초점 거리로 방정식 결정(★2)."
```

```yaml
- id: RPM-GEO-0014
  page: 7
  vendor_label: "교과서 01-2 타원"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    타원 x^2+9y^2=9 의 초점의 좌표, 장축과 단축의 길이.
  category: "양변 9 로 나눠 표준형 → c^2=9-1 → 초점·축 길이"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 초점·장축·단축 — 표준형에서 읽기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x^2/9+y^2/1=1 → 9>1 → 장축 x축, c^2=8 → 초점 (±2√2,0). 장축 6, 단축 2.
    표준형 정리 한 단계가 추가될 뿐. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "9 로 나눠 x^2/9+y^2=1 → c=√8=2√2 → 초점 (±2√2,0) · 장축 6 · 단축 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '초점의 좌표: $(2\sqrt{2},\,0)$, $(-2\sqrt{2},\,0)$, 장축의 길이: $6$, 단축의 길이: $2$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0014.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 (1, 9, 9) 를 (4, 25, 100) 처럼 바꿔 나눗셈 뒤 분모가 정수가 되게. 제약: 우변으로 나눈 분모 차가 양수·근호 정리 가능."
    creative: "(1) 우변이 1 이 아닌 상수(4x^2+y^2=16)로 정리 부담 유지(★1) (2) 계수만 주고 초점 거리 2c 를 묻기(★1) (3) 축 길이 비 3:1 인 타원의 초점을 매개변수 k 로 일반화 → Mₐ 상승 ★2."
```

```yaml
- id: RPM-GEO-0015
  page: 7
  vendor_label: "교과서 01-2 타원"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    타원 x^2/10+y^2/3=1 을 x축 방향으로 -1, y축 방향으로 5 만큼 평행이동한 타원의 방정식.
  category: "평행이동 x→x+1, y→y-5 대입 → 방정식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 평행이동"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (x+1)^2/10+(y-5)^2/3=1. 이동량 부호를 뒤집어 대입하는 한 단계.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x→x+1, y→y-5 치환 → (x+1)^2/10+(y-5)^2/3=1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{(x+1)^2}{10}+\dfrac{(y-5)^2}{3}=1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0015.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량과 두 분모를 자유롭게. 제약: 이동량 0 이 아니게 하고 부호 함정(x축 음수 이동)을 유지."
    creative: "(1) 이동 뒤 초점·축까지 묻기(0016 골조 · ★1) (2) 전개된 일반형으로 답하게 해 0018 과 연결(★1) (3) 평행이동한 타원의 중심이 주어진 직선 위에 오도록 하는 이동량 조건(★2)."
```

```yaml
- id: RPM-GEO-0016
  page: 7
  vendor_label: "교과서 01-2 타원"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    타원 x^2/8+(y-1)^2/2=1 의 초점의 좌표, 장축과 단축의 길이.
  category: "기본형 x^2/8+y^2/2=1 의 초점 → (0,1) 평행이동 · 축 길이는 불변"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 타원의 초점·장축·단축"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    기본형에서 c^2=8-2=6 → 초점 (±√6,0), (0,1) 이동 → (±√6,1). 장축 2√8=4√2, 단축 2√2 는 이동과 무관.
    기본형 요소 + 이동 두 단계. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "c=√(8-2)=√6 → 초점 (±√6,0) → (0,1) 이동 → (±√6,1) · 장축 4√2 · 단축 2√2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '초점의 좌표: $(\sqrt{6},\,1)$, $(-\sqrt{6},\,1)$, 장축의 길이: $4\sqrt{2}$, 단축의 길이: $2\sqrt{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0016.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 쌍과 이동량. 제약: 큰 분모 판별로 장축 방향이 정해지고, 초점은 중심 기준 ±c 만큼 장축 방향으로만 이동."
    creative: "(1) 이동을 x 방향에도 주어 중심 (m,n) 일반화(★1) (2) 두 초점과 장축 길이를 주고 이동된 타원의 방정식 묻기(★2) (3) 장축·단축 길이를 매개변수로 두고 초점 거리를 식으로(★2)."
```

```yaml
- id: RPM-GEO-0017
  page: 7
  vendor_label: "교과서 01-2 타원"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    타원 (x-3)^2/9+(y+1)^2/25=1 의 초점의 좌표, 장축과 단축의 길이.
  category: "기본형 x^2/9+y^2/25=1 (장축 y축) → c=4 → (3,-1) 평행이동"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 타원의 초점·장축·단축"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    25>9 → 장축이 y축, c^2=16 → 기본 초점 (0,±4). 중심 (3,-1) 기준으로 (3,3),(3,-5). 장축 10, 단축 6.
    축 판별 + 이동 두 단계. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "25>9 → 장축 y축 · c=4 → 초점 (0,±4) → (3,-1) 이동 → (3,3),(3,-5) · 장축 10 · 단축 6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '초점의 좌표: $(3,\,3)$, $(3,\,-5)$, 장축의 길이: $10$, 단축의 길이: $6$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0017.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 쌍(9·25, 16·25, 36·100 처럼 차가 완전제곱수면 초점 정수)과 중심 (m,n). 제약: 큰 분모가 y^2 아래 있으면 초점은 세로로 이동."
    creative: "(1) 중심과 두 초점, 장축 길이를 주고 방정식 역산(★2) (2) 초점 (3,3),(3,-5) 를 지름의 양 끝으로 하는 원과 타원의 교점 개수 같은 결합(★2~3) (3) 초점 사이 거리와 단축 길이만 주기(★1)."
```

```yaml
- id: RPM-GEO-0018
  page: 7
  vendor_label: "교과서 01-2 타원"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    타원 x^2+4y^2-2x-16y+13=0 에 대하여 ⑴ (x-m)^2/a+(y-n)^2/b=1 꼴로 변형 ⑵ 초점의 좌표, 장축과 단축의 길이.
  category: "x·y 각각 완전제곱 → 우변 정리 → 표준형 → 이동된 초점·축"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원의 일반형 → 표준형 변형과 초점·축"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (x-1)^2+4(y-2)^2=4 → (x-1)^2/4+(y-2)^2=1. c^2=4-1=3 → 초점 (1±√3, 2). 장축 4, 단축 2.
    완전제곱 두 번과 4 로 나누는 정리에서 상수 처리를 틀리기 쉽지만 절차는 표준이고 ⑴ 이 변형을 안내한다.
    교과서 구역·통찰 없음·M_total 6 → ★1.
  tier: star_1
  mechanism_primary: "x·y 완전제곱 → (x-1)^2+4(y-2)^2=4 → 4 로 나눔 → c=√3 → 초점 (1±√3,2) · 장축 4 · 단축 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $\dfrac{(x-1)^2}{4}+(y-2)^2=1$ \quad (2) 초점의 좌표: $(\sqrt{3}+1,\,2)$, $(-\sqrt{3}+1,\,2)$, 장축의 길이: $4$, 단축의 길이: $2$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0018.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x^2·y^2 계수와 1차항·상수를 바꾸되 완전제곱 뒤 우변이 양수이고 계수로 나눈 분모가 정수가 되게. 제약: 우변이 0 이나 음수면 타원이 아니므로 상수항 검산 필수."
    creative: "(1) ⑴ 없이 바로 초점을 묻기(★2) (2) y^2 계수가 큰 형태(4x^2+y^2+…)로 장축 방향 바꾸기(★1) (3) 일반형에서 중심만 묻거나, 중심과 초점의 거리를 묻기(★1~2)."
```

### 교과서 01-3 쌍곡선

```yaml
- id: RPM-GEO-0019
  page: 9
  vendor_label: "교과서 01-3 쌍곡선"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 초점 F(5, 0), F'(-5, 0) 에서의 거리의 차가 8 인 쌍곡선의 방정식.
  category: "정의(거리의 차 2a) → a, c → b^2=c^2-a^2 → 표준형"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 방정식 — 두 초점과 거리의 차"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2a=8 → a=4, c=5, b^2=25-16=9 → x^2/16-y^2/9=1. 타원과 달리 b^2=c^2-a^2 인 것만 구별.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "2a=8, c=5 → b^2=c^2-a^2=9 → x^2/16-y^2/9=1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{x^2}{16}-\dfrac{y^2}{9}=1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0019.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "c 와 2a(2a<2c 필수). 제약: b^2=c^2-a^2>0. 피타고라스 삼조(3·4·5, 5·12·13)로 정수 분모."
    creative: "(1) 초점을 y축 위로(0020 골조 · ★1) (2) 거리의 차 대신 쌍곡선 위 한 점 주기 → 2a 계산 ★2 (3) 타원(0011)과 같은 초점·같은 수치로 나란히 두어 b^2 공식 대비(★1) (4) 초점이 원점 대칭이 아니면 중심 이동 결합 ★2."
```

```yaml
- id: RPM-GEO-0020
  page: 9
  vendor_label: "교과서 01-3 쌍곡선"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    두 초점 F(0, 4), F'(0, -4) 에서의 거리의 차가 4√2 인 쌍곡선의 방정식.
  category: "정의 → 초점이 y축 위 → 2b=4√2 → a^2=c^2-b^2 → x^2/a^2-y^2/b^2=-1"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 방정식 — 두 초점과 거리의 차"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    초점이 y축 위이므로 =-1 꼴: 2b=4√2 → b^2=8, c=4, a^2=16-8=8 → x^2/8-y^2/8=-1.
    근호 제곱과 -1 꼴 판별이 전부. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "초점 y축 → 2b=4√2, b^2=8, c=4 → a^2=c^2-b^2=8 → x^2/8-y^2/8=-1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{x^2}{8}-\dfrac{y^2}{8}=-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0020.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "c 와 2b(근호 포함 가능·2b<2c). 제약: a^2=c^2-b^2>0. a^2=b^2 가 되는 조합은 직각쌍곡선(점근선 y=±x)이라 후속 문항에 쓰기 좋음."
    creative: "(1) 0019 와 짝으로 =1 / =-1 판별 세트(★1) (2) 점근선이 y=±x 가 되는 이유를 묻기 → 0025 유형과 결합 ★2 (3) 거리의 차 대신 꼭짓점 (0,±2√2) 주기(★1)."
```

```yaml
- id: RPM-GEO-0021
  page: 9
  vendor_label: "교과서 01-3 쌍곡선"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    쌍곡선 x^2/12-y^2/4=1 의 초점의 좌표, 꼭짓점의 좌표, 주축의 길이.
  category: "표준형 → c^2=a^2+b^2 → 초점 (±c,0)·꼭짓점 (±a,0)·주축 2a"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 초점·꼭짓점·주축 — 표준형에서 읽기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    c^2=12+4=16 → 초점 (±4,0). 꼭짓점 (±√12,0)=(±2√3,0), 주축 4√3. c^2 이 합이라는 점과 근호 정리만.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "c=√(12+4)=4 → 초점 (±4,0) · 꼭짓점 (±2√3,0) · 주축 4√3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '초점의 좌표: $(4,\,0)$, $(-4,\,0)$, 꼭짓점의 좌표: $(2\sqrt{3},\,0)$, $(-2\sqrt{3},\,0)$, 주축의 길이: $4\sqrt{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0021.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a^2·b^2 를 바꿈. 제약: 합이 완전제곱수면 초점 정수(12+4, 9+16, 20+5). 꼭짓점에 근호를 남기려면 a^2 을 비제곱수로."
    creative: "(1) 점근선까지 함께 묻기(0025 결합 · ★1) (2) 초점과 꼭짓점을 주고 방정식 역산(★1) (3) 주축 길이와 초점 거리의 비를 매개변수로 두기(★2)."
```

```yaml
- id: RPM-GEO-0022
  page: 9
  vendor_label: "교과서 01-3 쌍곡선"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    쌍곡선 x^2/10-y^2/16=-1 의 초점의 좌표, 꼭짓점의 좌표, 주축의 길이.
  category: "=-1 꼴 → 주축 y축 → c^2=10+16 → 초점 (0,±c)·꼭짓점 (0,±b)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 초점·꼭짓점·주축 — 표준형에서 읽기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    -1 꼴이므로 주축이 y축. c^2=26 → 초점 (0,±√26), 꼭짓점 (0,±4), 주축 8. 꼴 판별 한 단계 + 근호.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "=-1 → 주축 y축 · c=√26 → 초점 (0,±√26) · 꼭짓점 (0,±4) · 주축 8"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '초점의 좌표: $(0,\,\sqrt{26})$, $(0,\,-\sqrt{26})$, 꼭짓점의 좌표: $(0,\,4)$, $(0,\,-4)$, 주축의 길이: $8$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0022.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 분모를 바꿈(합이 비제곱수면 초점에 근호 유지). 제약: =-1 꼴에서 꼭짓점은 y^2 분모의 제곱근."
    creative: "(1) 우변 부호만 다른 0021 쌍과 함께 주축 판별(★1) (2) 초점 (0,±√26)·꼭짓점 (0,±4) 주고 방정식(★1) (3) x^2/a-y^2/b=1 과 =-1 두 쌍곡선의 초점이 원점에서 같은 거리에 있음을 확인하는 ㄱㄴㄷ(★2)."
```

```yaml
- id: RPM-GEO-0023
  page: 9
  vendor_label: "교과서 01-3 쌍곡선"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    쌍곡선 4x^2-y^2=4 의 초점의 좌표, 꼭짓점의 좌표, 주축의 길이.
  category: "4 로 나눠 표준형 x^2-y^2/4=1 → c^2=5 → 요소"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 초점·꼭짓점·주축 — 표준형에서 읽기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x^2/1-y^2/4=1 → c^2=1+4=5 → 초점 (±√5,0). 꼭짓점 (±1,0), 주축 2. 표준형 정리 한 단계가 추가될 뿐.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "4 로 나눔 → x^2-y^2/4=1 → c=√5 → 초점 (±√5,0) · 꼭짓점 (±1,0) · 주축 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '초점의 좌표: $(\sqrt{5},\,0)$, $(-\sqrt{5},\,0)$, 꼭짓점의 좌표: $(1,\,0)$, $(-1,\,0)$, 주축의 길이: $2$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0023.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수와 우변 상수를 바꿈(9x^2-4y^2=36 등). 제약: 우변으로 나눈 뒤 분모 양수, 분모가 1 이 되는 항이 있으면 a=1 판별 함정."
    creative: "(1) 우변 상수를 음수로 바꿔 =-1 꼴 판별 추가(0024 골조 · ★1) (2) 계수만 바꾼 여러 쌍곡선의 초점 위치 비교(★1) (3) 4x^2-y^2=k 에서 k 의 부호에 따른 도형 변화 → 판별 유형 결합 ★2."
```

```yaml
- id: RPM-GEO-0024
  page: 9
  vendor_label: "교과서 01-3 쌍곡선"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    쌍곡선 4x^2-9y^2=-36 의 초점의 좌표, 꼭짓점의 좌표, 주축의 길이.
  category: "-36 으로 나눠 x^2/9-y^2/4=-1 → 주축 y축 → c^2=13 → 요소"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 초점·꼭짓점·주축 — 표준형에서 읽기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x^2/9-y^2/4=-1 → 주축 y축, c^2=13 → 초점 (0,±√13). 꼭짓점 (0,±2), 주축 4. 음수 우변 나눗셈과 꼴 판별.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "-36 으로 나눔 → x^2/9-y^2/4=-1 → 주축 y축 · c=√13 → 초점 (0,±√13) · 꼭짓점 (0,±2) · 주축 4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '초점의 좌표: $(0,\,\sqrt{13})$, $(0,\,-\sqrt{13})$, 꼭짓점의 좌표: $(0,\,2)$, $(0,\,-2)$, 주축의 길이: $4$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0024.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수와 음수 우변. 제약: 나눈 뒤 x^2·y^2 분모 모두 양수인 -1 꼴이 유지되도록 우변 음수·계수 부호 배치."
    creative: "(1) 우변 부호만 바꾼 0023 계열과 비교 세트(★1) (2) 꼭짓점과 초점 주고 일반형(4x^2-9y^2=-36)으로 답하게(★1) (3) 4x^2-9y^2=k 로 k 를 매개변수 → Mₐ 상승 ★2."
```

```yaml
- id: RPM-GEO-0025
  page: 9
  vendor_label: "교과서 01-3 쌍곡선"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    쌍곡선 x^2/25-y^2/49=1 의 점근선의 방정식.
  category: "표준형 → 점근선 y=±(b/a)x"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 점근선 — 표준형에서 읽기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a=5, b=7 → y=±(7/5)x. 공식 대입 한 줄.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a=5, b=7 → y=±(b/a)x=±(7/5)x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=\pm\dfrac{7}{5}x$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0025.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a^2·b^2 를 완전제곱수로 바꿈(기울기 유리수) 또는 비제곱수로 근호 기울기. 제약: 우변 -1 꼴이어도 점근선 공식은 같다는 점을 후속 문항에서 활용."
    creative: "(1) =-1 꼴로 바꿔 공식이 그대로임을 확인(0026 골조 · ★1) (2) 점근선과 한 초점을 주고 방정식 역산(★2) (3) 점근선이 서로 수직(직각쌍곡선)이 되는 조건(★2)."
```

```yaml
- id: RPM-GEO-0026
  page: 9
  vendor_label: "교과서 01-3 쌍곡선"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    쌍곡선 x^2/36-y^2/4=-1 의 점근선의 방정식.
  category: "=-1 꼴이어도 점근선은 y=±(b/a)x → ±(2/6)x 약분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 점근선 — 표준형에서 읽기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    a=6, b=2 → y=±(2/6)x=±(1/3)x. -1 꼴에서도 점근선 공식은 같고, 약분만 남는다.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a=6, b=2 → y=±(b/a)x → 약분 → y=±(1/3)x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=\pm\dfrac{1}{3}x$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0026.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 쌍(약분되는 조합 36·4, 16·4, 25·100). 제약: -1 꼴 유지 시 학생이 a·b 를 뒤집는 오답이 나오도록 a≠b."
    creative: "(1) =1 꼴과 =-1 꼴을 같은 분모로 나란히 놓고 점근선이 같음을 확인(★1) (2) 점근선 y=±(1/3)x 와 꼭짓점 (0,±2) 를 주고 방정식(★1~2) (3) 점근선과 초점을 주는 역방향(★2)."
```

```yaml
- id: RPM-GEO-0027
  page: 9
  vendor_label: "교과서 01-3 쌍곡선"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    쌍곡선 9x^2-4y^2=36 의 점근선의 방정식.
  category: "36 으로 나눠 x^2/4-y^2/9=1 → y=±(3/2)x"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 점근선 — 표준형에서 읽기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x^2/4-y^2/9=1 → a=2, b=3 → y=±(3/2)x. 표준형 정리 후 공식.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "36 으로 나눔 → x^2/4-y^2/9=1 → y=±(3/2)x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=\pm\dfrac{3}{2}x$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0027.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수와 우변(9x^2-4y^2=k, k≠0). 제약: 점근선은 k 에 무관(9x^2-4y^2=0 인수분해로도 얻음)이라 k 를 바꿔도 답 불변 — 이 사실 자체를 문항화하면 ★2."
    creative: "(1) 9x^2-4y^2=0 을 인수분해해 점근선을 얻는 다른 풀이 소개(★1~2) (2) 우변 음수로 -1 꼴(★1) (3) 점근선이 3x±2y=0 인 쌍곡선 중 초점 거리 조건으로 방정식 결정(★2)."
```

```yaml
- id: RPM-GEO-0028
  page: 9
  vendor_label: "교과서 01-3 쌍곡선"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    쌍곡선 x^2-2y^2=-2 의 점근선의 방정식.
  category: "-2 로 나눠 x^2/2-y^2=-1 → y=±(1/√2)x → 유리화"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 점근선 — 표준형에서 읽기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x^2/2-y^2/1=-1 → a=√2, b=1 → y=±(1/√2)x=±(√2/2)x. 정리·공식·유리화 세 단계.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "-2 로 나눔 → x^2/2-y^2=-1 → y=±(1/√2)x → 유리화 → y=±(√2/2)x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=\pm\dfrac{\sqrt{2}}{2}x$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0028.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(x^2-3y^2=-3 → y=±(√3/3)x 등). 제약: 유리화가 필요한 근호 기울기가 되게 a^2 을 비제곱수로."
    creative: "(1) 우변 양수로 바꿔 =1 꼴 비교(★1) (2) 점근선 기울기가 ±√2/2 인 쌍곡선 중 (2,0) 을 지나는 것(★2) (3) 점근선과 직선 y=x 가 이루는 각 같은 결합(★2~3)."
```

```yaml
- id: RPM-GEO-0029
  page: 9
  vendor_label: "교과서 01-3 쌍곡선"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    쌍곡선 x^2/7-y^2/4=1 을 x축 방향으로 4, y축 방향으로 2 만큼 평행이동한 쌍곡선의 방정식.
  category: "평행이동 x→x-4, y→y-2 대입 → 방정식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 평행이동"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (x-4)^2/7-(y-2)^2/4=1. 이동량 부호 뒤집기 한 단계.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x→x-4, y→y-2 치환 → (x-4)^2/7-(y-2)^2/4=1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{(x-4)^2}{7}-\dfrac{(y-2)^2}{4}=1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0029.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량과 두 분모. 제약: 이동량 0 아님, 음수 이동으로 부호 함정 유지 가능."
    creative: "(1) 이동 뒤 초점·꼭짓점·점근선까지(0030 골조 · ★1) (2) 전개된 일반형으로 답하게(0032 연결 · ★1) (3) 이동 뒤 점근선이 원점을 지나도록 하는 이동량 조건 → 점근선 식 결합 ★2."
```

```yaml
- id: RPM-GEO-0030
  page: 9
  vendor_label: "교과서 01-3 쌍곡선"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    쌍곡선 (x+2)^2/3-y^2/6=1 의 초점의 좌표, 꼭짓점의 좌표, 점근선의 방정식.
  category: "기본형 x^2/3-y^2/6=1 의 초점·꼭짓점·점근선 → (-2,0) 평행이동"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 쌍곡선의 초점·꼭짓점·점근선"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    기본형 c^2=3+6=9 → 초점 (±3,0), 꼭짓점 (±√3,0), 점근선 y=±√2x. 중심 (-2,0) 으로 옮기면 초점 (1,0),(-5,0),
    꼭짓점 (-2±√3,0), 점근선 y=±√2(x+2). 세 요소 모두에 이동을 적용하는 표준 절차라 단계는 많아도 통찰은 없다.
    교과서 구역·통찰 없음·M_total 6 → ★1.
  tier: star_1
  mechanism_primary: "c=√(3+6)=3 → 초점 (±3,0)·꼭짓점 (±√3,0)·점근선 y=±√2x → 중심 (-2,0) 이동 → (1,0),(-5,0) · (-2±√3,0) · y=±√2(x+2)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '초점의 좌표: $(1,\,0)$, $(-5,\,0)$, 꼭짓점의 좌표: $(\sqrt{3}-2,\,0)$, $(-\sqrt{3}-2,\,0)$, 점근선의 방정식: $y=\sqrt{2}x+2\sqrt{2}$, $y=-\sqrt{2}x-2\sqrt{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0030.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 쌍(합이 완전제곱수면 초점 정수)과 중심 (m,n). 제약: 점근선은 y-n=±(b/a)(x-m) 을 y=…꼴로 전개해 통일, 기울기 근호 유지 가능."
    creative: "(1) =-1 꼴로 바꿔 주축이 세로(0031 골조 · ★1) (2) 두 점근선의 교점(중심)과 한 초점을 주고 방정식 역산(★2) (3) 점근선 중 하나가 특정 점을 지나도록 하는 이동량(★2)."
```

```yaml
- id: RPM-GEO-0031
  page: 9
  vendor_label: "교과서 01-3 쌍곡선"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    쌍곡선 (x-3)^2/4-(y+7)^2/16=-1 의 초점의 좌표, 꼭짓점의 좌표, 점근선의 방정식.
  category: "기본형 x^2/4-y^2/16=-1 (주축 y축) → c=2√5 → (3,-7) 평행이동"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 쌍곡선의 초점·꼭짓점·점근선"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    -1 꼴이므로 주축 세로. c^2=4+16=20 → 초점 (0,±2√5), 꼭짓점 (0,±4), 점근선 y=±2x. 중심 (3,-7) 로 옮겨
    초점 (3,-7±2√5), 꼭짓점 (3,-3),(3,-11), 점근선 y+7=±2(x-3) → y=2x-13, y=-2x-1.
    꼴 판별 + 세 요소 이동 + 점근선 전개. 교과서 구역·통찰 없음·M_total 6 → ★1.
  tier: star_1
  mechanism_primary: "=-1 → 주축 y축 · c=2√5 → 초점 (0,±2√5)·꼭짓점 (0,±4)·점근선 y=±2x → 중심 (3,-7) 이동 → (3,-7±2√5) · (3,-3),(3,-11) · y=2x-13, y=-2x-1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '초점의 좌표: $(3,\,2\sqrt{5}-7)$, $(3,\,-2\sqrt{5}-7)$, 꼭짓점의 좌표: $(3,\,-3)$, $(3,\,-11)$, 점근선의 방정식: $y=2x-13$, $y=-2x-1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0031.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 쌍과 중심. 제약: -1 꼴에서 꼭짓점·초점은 세로 이동, 점근선 기울기 ±(b/a) 는 꼴에 무관. 중심 좌표를 크게 두면 점근선 절편 계산만 무거워져 Mₖ 만 오름(질 저하 주의)."
    creative: "(1) 두 점근선과 한 꼭짓점을 주고 방정식 역산(★2) (2) 이 쌍곡선과 초점을 공유하는 타원 만들기 → 개념 결합 ★2~3 (3) 중심이 원점이 되도록 평행이동한 뒤 원래 쌍곡선의 초점을 되돌려 묻기(★1)."
```

```yaml
- id: RPM-GEO-0032
  page: 9
  vendor_label: "교과서 01-3 쌍곡선"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    쌍곡선 7x^2-9y^2-18y-72=0 에 대하여 ⑴ (x-m)^2/a-(y-n)^2/b=1 꼴로 변형 ⑵ 초점의 좌표, 꼭짓점의 좌표, 점근선의 방정식.
  category: "y 완전제곱 → 7x^2-9(y+1)^2=63 → 표준형 → 이동된 요소"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 일반형 → 표준형 변형과 초점·꼭짓점·점근선"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    -9(y^2+2y) 를 -9(y+1)^2+9 로 묶고 63 으로 나누면 x^2/9-(y+1)^2/7=1. c^2=9+7=16 → 초점 (±4,-1), 꼭짓점 (±3,-1),
    점근선 y+1=±(√7/3)x. 완전제곱 때 -9 배 상수 처리가 실수 지점이나 절차는 표준이고 ⑴ 이 변형을 안내한다.
    교과서 구역·통찰 없음·M_total 6 → ★1.
  tier: star_1
  mechanism_primary: "-9(y^2+2y) 완전제곱 → 7x^2-9(y+1)^2=63 → x^2/9-(y+1)^2/7=1 → c=4 → 초점 (±4,-1) · 꼭짓점 (±3,-1) · 점근선 y=±(√7/3)x-1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '(1) $\dfrac{x^2}{9}-\dfrac{(y+1)^2}{7}=1$ \quad (2) 초점의 좌표: $(4,\,-1)$, $(-4,\,-1)$, 꼭짓점의 좌표: $(3,\,-1)$, $(-3,\,-1)$, 점근선의 방정식: $y=\pm\dfrac{\sqrt{7}}{3}x-1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0032.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수·1차항·상수를 바꾸되 완전제곱 뒤 우변이 0 이 아니고 나눈 분모가 정리되게. 제약: a^2+b^2 이 완전제곱수면 초점 정수(9+7, 9+16, 16+9)."
    creative: "(1) x 항도 포함해 x·y 모두 완전제곱(★1) (2) 우변이 음수가 되는 계수로 -1 꼴 판별 추가(★1) (3) 일반형에서 점근선을 7x^2-9(y+1)^2=0 인수분해로 바로 얻는 다른 풀이(★2)."
```

### 교과서 01-4 이차곡선

```yaml
- id: RPM-GEO-0033
  page: 9
  vendor_label: "교과서 01-4 이차곡선"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    방정식 x^2-4x-4y+16=0 이 나타내는 도형.
  category: "이차항 구성 확인(x^2 만) → 완전제곱 → (x-2)^2=4(y-3) 포물선"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차곡선의 판별 — 일반형이 나타내는 도형"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y^2 항이 없고 x^2 항만 → 완전제곱하면 (x-2)^2=4(y-3), 포물선. 이차항 구성만 보아도 판별되며 완전제곱은 확인용.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "이차항 x^2 만 있음 → 완전제곱 (x-2)^2=4(y-3) → 포물선"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "포물선"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0033.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "1차항·상수를 바꿔도 판별은 불변. 제약: 포물선이려면 x^2·y^2 중 하나만 있고 다른 변수의 1차항이 남아야 함(y 항 계수 0 이면 직선 두 개나 도형 없음)."
    creative: "(1) 네 도형이 섞인 세트로 판별 근거(이차항 부호·유무)를 표로 정리하게(★1) (2) 꼭짓점·초점까지 묻기 → 0010 골조 ★1 (3) x^2-4x-ky+16=0 이 포물선이 되기 위한 k 의 조건(k≠0)을 묻기 → 경계 조건 ★2."
```

```yaml
- id: RPM-GEO-0034
  page: 9
  vendor_label: "교과서 01-4 이차곡선"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    방정식 x^2+y^2-4x-5=0 이 나타내는 도형.
  category: "x^2·y^2 계수 같고 양수 → 완전제곱 → (x-2)^2+y^2=9 원"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차곡선의 판별 — 일반형이 나타내는 도형"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x^2·y^2 계수가 같은 양수 → 원 후보. (x-2)^2+y^2=9 로 반지름 3 인 원임을 확인.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x^2·y^2 계수 동일 → 완전제곱 (x-2)^2+y^2=9 → 원"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "원"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0034.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "1차항·상수를 바꾸되 완전제곱 뒤 우변이 양수여야 원(0 이면 점·음수면 도형 없음). 제약: 우변 부호 검산 필수."
    creative: "(1) 우변이 0 이나 음수가 되는 상수로 바꿔 「도형이 없다」 보기 추가(★2) (2) x^2·y^2 계수를 2 로 같게 두어 정리 추가(★1) (3) 원과 타원(0035)을 반지름·축 길이로 비교(★1)."
```

```yaml
- id: RPM-GEO-0035
  page: 9
  vendor_label: "교과서 01-4 이차곡선"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    방정식 9x^2+16y^2-144=0 이 나타내는 도형.
  category: "x^2·y^2 계수 다른 양수 → 144 로 나눠 x^2/16+y^2/9=1 타원"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차곡선의 판별 — 일반형이 나타내는 도형"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 이차항 계수가 서로 다른 양수 → 타원. 144 로 나누면 x^2/16+y^2/9=1.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "이차항 계수 9, 16 모두 양수·서로 다름 → x^2/16+y^2/9=1 → 타원"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "타원"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0035.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수와 상수(우변 양수 유지). 제약: 계수가 같아지면 원, 우변 0 이면 점, 음수면 도형 없음."
    creative: "(1) 초점·장축까지 묻기(0014 골조 · ★1) (2) 1차항을 추가해 중심 이동된 타원 판별(★1) (3) 9x^2+ky^2-144=0 이 타원·원·쌍곡선이 되는 k 의 범위 → 조건 분류 ★2."
```

```yaml
- id: RPM-GEO-0036
  page: 9
  vendor_label: "교과서 01-4 이차곡선"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    방정식 5x^2-4y^2+24y-16=0 이 나타내는 도형.
  category: "x^2·y^2 계수 부호 반대 → 완전제곱 → x^2/4-(y-3)^2/5=-1 쌍곡선"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차곡선의 판별 — 일반형이 나타내는 도형"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    이차항 계수 부호가 반대(5, -4) → 쌍곡선. 확인: 5x^2-4(y-3)^2=-20 → x^2/4-(y-3)^2/5=-1.
    교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "이차항 계수 부호 반대 → 완전제곱 5x^2-4(y-3)^2=-20 → x^2/4-(y-3)^2/5=-1 → 쌍곡선"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "쌍곡선"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0036.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수·1차항·상수. 제약: 부호 반대인 이차항 두 개가 있으면 우변이 0 이 아닌 한 쌍곡선(우변 0 이면 두 직선) — 상수 검산 필요."
    creative: "(1) 우변이 0 이 되는 상수로 두 직선 사례 추가(★2) (2) 초점·점근선까지 묻기(0032 골조 · ★1) (3) 0033~0036 을 보기로 「이차곡선이 아닌 것」 고르기(★1)."
```

## 표본 판정 요약 (36문)

- ★ 분포: ★1 36 · ★2 0 · ★3 0 · ★4 0 · ★5 0
- 통찰형 0 · 절차형 36 · premium 0
- M_total 분포: 4 → 27문 · 5 → 5문(0008·0009·0010·0016·0017) · 6 → 4문(0018·0030·0031·0032). Mₐ 는 전부 1(구체 수치), Mₜ 는 전부 1(부호·축 방향 함정 0~1개).
- type_hint 상위: 「포물선의 초점과 준선 — 표준형」 4 · 「쌍곡선의 초점·꼭짓점·주축 — 표준형에서 읽기」 4 · 「쌍곡선의 점근선 — 표준형에서 읽기」 4 · 「이차곡선의 판별 — 일반형이 나타내는 도형」 4 · 2건씩: 「포물선의 방정식 — 초점과 준선」 「평행이동한 포물선의 초점과 준선」 「타원의 방정식 — 두 초점과 거리의 합」 「타원의 초점·장축·단축 — 표준형」 「평행이동한 타원의 초점·장축·단축」 「쌍곡선의 방정식 — 두 초점과 거리의 차」 「평행이동한 쌍곡선의 초점·꼭짓점·점근선」 · 1건씩: 포물선/타원/쌍곡선의 평행이동 각 1 · 포물선/타원/쌍곡선의 일반형 → 표준형 변형 각 1
- 벤더 신호 대비: 전부 「교과서」 구역(level·tag 없음) → ★1 출발, ★ 조정 0건. 전사 답은 36문 모두 재계산과 일치.
- 그림: 0문(figure 전부 none)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| (없음) | 이 범위는 교과서 기본 문제만 있어 벤더 신호(★1)와 M·I 판정이 전부 일치. 분류 이슈 0건. | - |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서는 세 곡선(포물선·타원·쌍곡선)마다 같은 다섯 골조가 같은 순서로 반복된다: ① 정의 조건(초점·준선 / 두 초점과 거리의 합 / 두 초점과 거리의 차) → 방정식, ② 표준형 → 요소 읽기(초점·준선 / 초점·장축·단축 / 초점·꼭짓점·주축·점근선), ③ 평행이동한 방정식 쓰기, ④ 평행이동된 곡선의 요소, ⑤ 일반형 → 표준형 변형 + 요소. 끝에 ⑥ 이차곡선 판별.
- 따로 세울 유형: 곡선별 「정의 → 방정식」(★1 · 후속 유형 구역에서 한 점 통과·중심 이동과 결합되면 ★2), 「일반형 → 표준형」(★1~2 · 완전제곱 상수 처리가 오답의 주원인이라 numeric 변형 가치가 큼), 「쌍곡선의 점근선」(=-1 꼴에서도 같다는 인식 · 인수분해 풀이 9x^2-4y^2=0 과 연결), 「이차곡선의 판별」(우변 0·음수인 퇴화 사례로 ★2 확장 가능).
- 통합해도 될 유형: ②(중심 원점)와 ④(중심 (m,n))는 하나의 유형 안에 「중심 원점 / 중심 이동」 하위 변형으로 두면 된다. ③ 평행이동한 방정식 쓰기는 독립 유형으로는 너무 얇아 ④ 또는 ⑤ 의 소문항으로 흡수 가능. 포물선·타원·쌍곡선을 가로지르는 「표준형 요소 읽기」를 하나로 묶을지, 곡선별로 둘지는 유형 구역(01-p2 이후 「유형 NN」)의 분포를 보고 결정.
- 이 범위(교과서 구역)에는 ★2 이상·통찰형이 없으므로 카탈로그의 base ★ 은 후속 유형 구역에서 정해야 한다. 이 파일의 ★1 판정은 교과서 기본 문제라는 벤더 신호와 M_total 4~6·통찰 0 이 일치한 결과다.
