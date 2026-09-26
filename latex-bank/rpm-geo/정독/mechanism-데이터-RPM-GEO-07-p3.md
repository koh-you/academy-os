---
name: mechanism-데이터-RPM-GEO-07-p3
description: RPM 기하 07 도형의 방정식(3/4 · 유형 09~18) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 기하 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-geo
  section: 07 도형의 방정식
  unit_code: GEO-07
  part: "3/4"
  extract_range: "110~114쪽 · 0739~0770"
  total_problems: 32
  unit_total: 132
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-geo/items/<id>.tex
  image_source: latex-bank/rpm-geo/figures/ (crops.json)
---

# RPM 기하 · 07 도형의 방정식 (3/4) 정독 데이터 (v1.0)

이 파일은 RPM 기하 07 도형의 방정식 단원의 셋째 범위(110~114쪽 · 0739~0770 · 32문항)를 다룬다. 전부 「유형」 구역이며 유형 09 세 점을 지나는 평면(3문) · 10 교선의 방정식(3문) · 11 직선과 평면의 교점(3문) · 12 두 평면이 이루는 각(4문 · 정사영 넓이 포함) · 13 두 평면의 평행과 수직(3문) · 14 직선과 평면이 이루는 각(3문) · 15 직선과 평면의 평행·수직(3문) · 16 점과 평면 사이의 거리(4문) · 17 구와 평면의 위치 관계(4문) · 18 벡터를 이용한 구의 방정식(2문)으로, 공간에서 평면의 방정식이 쓰이는 표준 골조가 한 유형에 세 문항씩 놓여 있다. RPM 의 벤더 난이도 신호는 구역이 곧 층이다 — 교과서(★1 출발) / 유형(대표문제 · 난이도 하~상) / 유형 UP / 시험에 꼭 나오는 문제 / 서술형 / 실력 Up. 이 범위의 신호는 대표문제 10문(난이도 표시 없음 · ★2 출발) · 중하 3문 · 중 16문 · 상중 3문(0754·0760·0764 · ★3 출발) · 서술형 태그 3문(0747·0760·0770)이다. 통찰 0·M_total 4 인 한 공식 문항 8문은 출발점에서 −1 해 ★1 로, 나머지는 출발점을 유지했다(★2 21문 · ★3 3문). 단계별 라벨링에서 통찰이 잡힌 문항은 5문(0741 구 부피 이등분 ⇔ 중심 통과 · 0754 두 평면에 수직 ⇔ 법선이 두 법선에 수직 · 0760 직선 포함 ⇔ 점 통과 + 방향 ⊥ 법선 · 0769 내적 0 ⇔ 지름 구 · 0770 벡터식 완전제곱 → 구)이고 전부 depth 1 이라 insight_type 은 32문 모두 절차형이다. 그림 문항은 없다(figure 전부 none). 전사 답 32건은 모두 재계산과 일치했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 절차형 ★1 문항에도 `mechanism_primary`(조건 → 변환 → 답 화살표 사슬) · `insights[]` · `variation_notes.numeric`(바꿔도 되는 수와 제약 — 정수 법선·정수 교점·판별식·양수 조건) · `variation_notes.creative`(통찰 골조를 유지한 채 바꿀 수 있는 설정과 ★ 가 변하는 지점)를 빠짐없이 채웠다. M 채점은 4축 각 1~3(Mₜ 는 함정 0~1개 → 1)이며 M_total 최소 4 다.

## 문항 데이터

### 유형 09 세 점을 지나는 평면의 방정식

```yaml
- id: RPM-GEO-0739
  page: 110
  vendor_label: "유형 09 세 점을 지나는 평면의 방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    세 점 A(1,-2,1), B(-1,-3,2), C(2,0,1) 을 지나는 평면이 점 (3,k,3) 을 지날 때 k 의 값. 5지선다.
  category: "두 방향벡터 → 법선벡터 → 평면의 방정식 → 점 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 점을 지나는 평면의 방정식(법선벡터 결정 → 점 대입)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB=(-2,-1,1), AC=(1,2,0) 에 모두 수직인 법선을 연립(또는 외적)으로 n=(2,-1,3) 으로 잡고 A 를 지나는 평면 2x-y+3z-7=0 을 세운 뒤 (3,k,3) 대입 → 6-k+9-7=0, k=8. 법선 결정 연립과 평면식·대입이 네 단계·통찰 없음·M_total 6 → 유형 대표 출발점 ★2 유지. 함정은 법선 성분 부호 하나.
  tier: star_2
  mechanism_primary: "AB=(-2,-1,1) · AC=(1,2,0) → 법선 n=(2,-1,3) → 2x-y+3z-7=0 → (3,k,3) 대입 → k=8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0739.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점의 좌표와 네 번째 점의 두 고정 좌표를 바꿀 수 있음. 제약: 세 점이 한 직선 위에 있지 않아야 하고, 법선벡터가 작은 정수 성분으로 나오도록(두 방향벡터 성분이 0·±1·±2 위주) 고르며, k 가 정수·선택지 범위 안에 오도록 평면식에 대입해 역산."
    creative: "(1) 「네 점이 한 평면 위에 있을 조건」으로 발문만 바꾸기(같은 골조 ★2). (2) 평면의 x절편·y절편이나 원점과의 거리를 묻기(유형 16 연결 ★2). (3) 세 점 중 하나를 (a, 0, a) 처럼 매개변수로 주고 「평면이 z축에 평행」 조건을 추가하면 법선의 z성분 0 조건 번역(EQV d1)이 붙어 ★3."
```

```yaml
- id: RPM-GEO-0740
  page: 110
  vendor_label: "유형 09 세 점을 지나는 평면의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    세 점 A(1,3,1), B(0,5,2), C(-1,-2,-3) 을 지나는 평면에 수직이고 A 를 지나는 직선의 방정식. 주관식.
  category: "두 방향벡터 → 법선벡터 → 법선을 방향으로 하는 직선"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 점을 지나는 평면에 수직인 직선(법선벡터 = 방향벡터)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB=(-1,2,1), AC=(-2,-5,-4) 에 수직인 법선 n=(1,2,-3). 평면에 수직인 직선의 방향벡터가 곧 법선이므로 A(1,3,1) 을 지나고 방향 (1,2,-3) 인 직선 x-1=(y-3)/2=(z-1)/(-3), 답지 표기는 (1-z)/3. 평면의 방정식 자체는 필요 없고 법선만 쓰는 것이 0739 와의 차이. 연립 두 번·통찰 없음·M_total 6 → 중 출발점 ★2 유지. 함정은 z성분 부호를 분모에 둘지 분자로 옮길지 표기.
  tier: star_2
  mechanism_primary: "AB=(-1,2,1) · AC=(-2,-5,-4) → 법선 n=(1,2,-3) → A 통과 · 방향 n 직선 → x-1=(y-3)/2=(1-z)/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x-1=\dfrac{y-3}{2}=\dfrac{1-z}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0740.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점 좌표와 직선이 지나는 점(세 점 중 하나 또는 별개 점)을 바꿀 수 있음. 제약: 세 점 비공선, 법선이 정수 성분(공약수로 나눈 최간단형)이 되도록 방향벡터 성분을 작게, 답 표기에서 음수 성분은 (c-z) 꼴로 통일."
    creative: "(1) 직선이 지나는 점을 평면 밖의 점으로 바꾸고 「직선과 평면의 교점(수선의 발)」까지 묻기(유형 11 결합 ★2~3). (2) 「이 직선이 xy평면과 만나는 점」으로 마무리를 바꾸기(★2). (3) 세 점 대신 「평면 위 한 점과 평면에 평행한 두 직선의 방향벡터」로 조건을 흩어 주면 조건 통합(CON d1)이 붙어 ★3."
```

```yaml
- id: RPM-GEO-0741
  page: 110
  vendor_label: "유형 09 세 점을 지나는 평면의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    세 구 C1, C2, C3(하나는 일반형)의 부피를 모두 이등분하는 평면이 x축과 만나는 점의 x좌표. 5지선다.
  category: "부피 이등분 ⇔ 중심 통과 → 세 중심을 지나는 평면 → x절편"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「구의 부피를 이등분하는 평면」을 「구의 중심을 지나는 평면」으로 번역 — 세 구의 중심이 곧 세 점"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구의 부피를 이등분하는 평면(중심 통과 → 세 점 평면)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    부피를 이등분하는 평면은 중심을 지나므로 세 중심 (-1,3,0), (0,4,1), (2,0,1) 을 지나는 평면을 세우면 된다(C3 은 완전제곱으로 중심 (2,0,1)). 방향벡터 (1,1,1), (3,-3,1) 에 수직인 법선 (2,1,-3) → 2x+y-3z-1=0 → y=z=0 에서 x=1/2. 조건 번역 한 덩어리(EQV d1) 뒤는 0739 골조 그대로. M_total 6·통찰 1개 → 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "부피 이등분 ⇔ 평면이 각 구의 중심 통과 → 중심 (-1,3,0)·(0,4,1)·(2,0,1) → 법선 (2,1,-3) → 2x+y-3z-1=0 → y=z=0 → x=1/2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0741.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 구의 중심과 반지름(반지름은 답과 무관하니 자유)을 바꿀 수 있음. 제약: 세 중심 비공선, 일반형으로 주는 구는 완전제곱이 정수로 떨어지게, 법선이 작은 정수, 평면이 x축과 실제로 만나도록(법선 x성분 ≠ 0 · 절편이 선택지 유리수)."
    creative: "(1) 「x축과 만나는 점」 대신 「원점과의 거리」나 「xy평면과 이루는 각」으로 마무리 교체(유형 12·16 결합 ★2). (2) 구 두 개 + 「평면이 직선 l 에 평행」 조건으로 세 번째 점을 방향벡터 조건으로 바꾸면 EQV 가 두 종류 → ★3. (3) 「겉넓이를 이등분」(같은 뜻 · 중심 통과)로 문구만 바꾸면 ★ 불변, 「부피비 1:3 인 평면」으로 바꾸면 성립하지 않는 조건이 되니 금지."
```

### 유형 10 교선의 방정식

```yaml
- id: RPM-GEO-0742
  page: 110
  vendor_label: "유형 10 교선의 방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    두 평면 x-2y-4z+2=0, x-y+2=0 의 교선의 방정식. 주관식.
  category: "연립 소거 → 매개변수 표현 → 한 점 + 방향벡터 → 대칭형"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면의 교선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    둘째 식에서 x=y-2 를 첫째에 넣으면 y=-4z, 다시 x=-4z-2. z=t 로 두면 (x,y,z)=(-4t-2,-4t,t) 이므로 점 (-2,0,0)·방향 (4,4,-1) → (x+2)/4=y/4=-z. 두 법선에 수직인 방향을 먼저 구하고 한 점을 찾는 경로도 같은 길이. 소거 두 번·통찰 없음·M_total 6 → 유형 대표 출발점 ★2 유지. 함정은 z성분 -1 을 「-z」 로 쓰는 표기.
  tier: star_2
  mechanism_primary: "x=y-2 → 대입 y=-4z → z=t: (x,y,z)=(-4t-2,-4t,t) → 점 (-2,0,0) · 방향 (4,4,-1) → (x+2)/4=y/4=-z"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{x+2}{4}=\dfrac{y}{4}=-z$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0742.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 평면의 계수를 바꿀 수 있음. 제약: 두 법선이 평행하지 않을 것, 한 변수를 바로 소거할 수 있는 식(계수 1 인 변수)을 하나 두면 계산이 한 줄, 방향벡터가 정수·한 점의 좌표가 정수(절편 하나가 정수)가 되게 상수항 조정."
    creative: "(1) 「교선이 지나는 xy평면 위의 점」이나 「교선과 xy평면이 이루는 각」으로 마무리 교체(★2). (2) 교선을 포함하고 특정 점을 지나는 평면(유형 15 골조)까지 이어 붙이면 두 골조 사슬 ★3. (3) 두 평면 중 하나에 매개변수 k 를 넣고 「교선이 z축에 평행」 조건을 주면 방향벡터 성분 조건 번역(EQV d1) ★3."
```

```yaml
- id: RPM-GEO-0743
  page: 110
  vendor_label: "유형 10 교선의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 평면 x-y+z+2=0, 2x+y-2z+1=0 의 교선의 방향벡터를 (a,b,3) 이라 할 때 a+b 의 값. 5지선다.
  category: "연립 소거 → 매개변수 표현 → 방향벡터 → 성분 비 맞추기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면의 교선의 방향벡터"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 식을 더하면 3x-z+3=0, z=3x+3. 첫째 식에 넣어 y=x+z+2=4x+5. x=t 로 두면 방향 (1,4,3) 이고 z성분이 이미 3 이라 (a,b)=(1,4), 합 5. 두 법선에 수직인 벡터를 세워도 (1,4,3). 교선 전체가 아니라 방향만 물어 0742 보다 마무리가 짧지만 소거는 같다. 통찰 없음·M_total 6 → 중 출발점 ★2 유지. 함정은 z성분 3 에 맞춰 배율을 맞추는 것.
  tier: star_2
  mechanism_primary: "두 평면식 더해 z=3x+3 → y=x+z+2=4x+5 → 방향 (1,4,3) → z성분 3 에 맞춰 (a,b)=(1,4) → 5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0743.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 평면 계수와 고정하는 성분(세 번째 성분 값)을 바꿀 수 있음. 제약: 법선 비평행, 방향벡터의 최간단 정수형에서 고정 성분이 그 배수가 되게(예: 방향 (1,4,3) 에 z=6 을 주면 (2,8,6)), 합이 선택지 안에."
    creative: "(1) 「방향벡터가 (a,b,c) 이고 |u|=√26 인 것」처럼 크기 조건으로 배율을 정하면 부호 분기(±)가 생겨 MI d1 ★3. (2) 방향벡터 대신 「교선과 직선 l 이 이루는 각」(내적 공식) 으로 마무리 교체 ★2. (3) 세 평면의 교선 세 개가 평행할 조건(계수에 k) → 조건 통합 ★3~4."
```

```yaml
- id: RPM-GEO-0744
  page: 110
  vendor_label: "유형 10 교선의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 평면 x-2y+z=0, x+y-2z+3=0 의 교선에 수직이고 점 (3,2,1) 을 지나는 평면이 x+ay+bz+c=0 일 때 a+b-c 의 값. 5지선다.
  category: "교선의 방향벡터 → 그것을 법선으로 하는 평면 → 점 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "교선에 수직인 평면의 방정식(교선 방향 = 법선)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    교선의 방향은 두 법선 (1,-2,1), (1,1,-2) 에 모두 수직인 (1,1,1)(더해서 z=…, 소거해도 같음). 교선에 수직인 평면의 법선이 곧 이 방향이므로 (3,2,1) 을 지나는 평면 x+y+z-6=0, a=1, b=1, c=-6 → a+b-c=8. 「교선에 수직」 → 「법선 = 교선 방향」 번역은 이 유형의 표준 절차라 통찰로 세지 않았다. 소거·평면식·대입, M_total 6 → 중 출발점 ★2 유지. 함정은 c 의 부호(−6) 를 a+b-c 에 넣을 때.
  tier: star_2
  mechanism_primary: "교선 방향 = 두 법선에 수직 → (1,1,1) → 이것이 평면의 법선 → (3,2,1) 대입 x+y+z-6=0 → a+b-c=1+1+6=8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0744.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 평면 계수와 지나는 점을 바꿀 수 있음. 제약: 교선 방향이 정수이고 x성분이 1 이 되도록(문제가 x 계수를 1 로 고정) 배율 조정, c 가 음수가 되게 점을 고르면 부호 함정 유지, 합이 선택지 범위."
    creative: "(1) 「교선을 포함하고 점 P 를 지나는 평면」으로 바꾸면 유형 15 골조(점 통과 + 방향 ⊥ 법선)로 EQV d1 이 붙어 ★3. (2) 「교선과 점 P 사이의 거리」로 바꾸면 수선의 발(매개변수 t · 내적 0) 사슬 ★3. (3) 매개변수: 둘째 평면에 k 를 넣고 「교선이 평면 z=0 에 평행」 조건 → 방향 z성분 0 → k 결정 ★2~3."
```

### 유형 11 직선과 평면의 교점

```yaml
- id: RPM-GEO-0745
  page: 111
  vendor_label: "유형 11 직선과 평면의 교점"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    직선 (x-1)/2 = y-3 = (z+2)/5 와 평면 x+y-z=0 이 만나는 점 (a,b,c) 에 대하여 a+b+c 의 값. 5지선다.
  category: "직선 매개변수화 → 평면에 대입 → t → 교점"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 평면의 교점(매개변수 대입)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    직선을 t 로 놓아 (2t+1, t+3, 5t-2) 를 평면에 넣으면 2t+1+t+3-5t+2=0, t=3 → 교점 (7,6,13), 합 26. 매개변수화 한 번·일차방정식 한 줄이 전부. 통찰 없음·M_total 4 → 유형 대표 출발점 ★2 에서 −1, ★1.
  tier: star_1
  mechanism_primary: "직선 매개 t: (2t+1, t+3, 5t-2) → 평면 대입 -2t+6=0 → t=3 → (7,6,13) → 26"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0745.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 점·방향벡터와 평면 계수를 바꿀 수 있음. 제약: 방향벡터와 법선의 내적이 0 이 아닐 것(평행 금지), t 가 정수가 되도록 상수항을 역산, 교점 좌표 합이 선택지 범위."
    creative: "(1) 「교점과 원점 사이 거리」나 「교점을 지나고 평면에 수직인 직선」으로 마무리 교체(★1~2). (2) 방향벡터에 k 를 넣고 「교점의 x좌표가 5」 조건으로 k 를 역산하면 BW 성격의 미정계수 ★2. (3) 직선이 평면과 만나지 않을 조건(u·n=0 이고 점이 평면 밖)을 묻는 판별 문제로 바꾸면 MI d1(포함/평행 분기) ★2~3."
```

```yaml
- id: RPM-GEO-0746
  page: 111
  vendor_label: "유형 11 직선과 평면의 교점"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    점 (-1,2,4) 를 지나고 방향벡터가 (2,2,-3) 인 직선과 평면 x+2y-z=8 의 교점의 좌표. 주관식.
  category: "점 + 방향벡터 → 매개변수 표현 → 평면에 대입 → 교점"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 평면의 교점(매개변수 대입)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    직선을 (-1+2t, 2+2t, 4-3t) 로 쓰고 평면에 넣으면 -1+2t+4+4t-4+3t=8, 9t=9, t=1 → (1,4,1). 0745 와 같은 골조인데 직선이 점·방향벡터로 주어져 매개변수 표현을 직접 쓴다. 통찰 없음·M_total 4 → 중 출발점 ★2 에서 −1, ★1.
  tier: star_1
  mechanism_primary: "점+방향 → (-1+2t, 2+2t, 4-3t) → 평면 대입 9t-1=8 → t=1 → (1,4,1)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(1,\,4,\,1)$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0746.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점·방향벡터·평면 계수를 바꿀 수 있음. 제약: u·n ≠ 0, t 가 정수(가능하면 ±1)가 되게 평면 상수항 역산, 교점이 정수 좌표."
    creative: "(1) 직선을 「두 점을 지나는 직선」으로 주어 방향벡터를 한 번 더 구하게 하기(★2). (2) 교점을 P 라 하고 「점 (-1,2,4) 에서 P 까지 거리」(= |t|·|u|) 를 묻기 ★2. (3) 「직선 위의 점 중 평면과의 거리가 3 인 점」으로 바꾸면 거리식 절댓값 분기(양쪽 두 점) MI d1 ★3."
```

```yaml
- id: RPM-GEO-0747
  page: 111
  vendor_label: "유형 11 직선과 평면의 교점"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    직선 (3-x)/3 = y = z-2 가 두 평면 x-y+3z-6=0, 2x+y+z-4=0 과 만나는 점을 각각 A, B 라 할 때 선분 AB 의 길이. 서술형 주관식.
  category: "직선 매개변수화 → 두 평면에 각각 대입 → 두 교점 → 거리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 두 평면의 교점 사이 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (3-x)/3=t 이므로 x=3-3t(방향 x성분 −3 이 함정). (3-3t, t, t+2) 를 첫째 평면에 넣으면 3-t=0, t=3 → A(-6,3,5); 둘째 평면에서 4-4t=0, t=1 → B(0,1,3). AB=√(36+4+4)=2√11. 같은 매개변수 위의 두 점이라 AB=|t1-t2|·|u|=2√11 로도 된다. 대입 두 번·거리 한 번, 통찰 없음·M_total 6 → 중·서술형 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "매개 t: (3-3t, t, t+2) → 평면1 대입 t=3 → A(-6,3,5) · 평면2 대입 t=1 → B(0,1,3) → AB=√44=2√11"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\sqrt{11}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0747.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 점·방향과 두 평면 계수를 바꿀 수 있음. 제약: 직선이 두 평면 모두와 한 점에서 만나야 하고(u·n ≠ 0 둘 다), 두 t 값이 정수, 거리가 √(정수) 로 정리되게 |t1-t2|²·|u|² 를 설계."
    creative: "(1) 「AB 의 중점」이나 「점 A 와 둘째 평면 사이 거리」로 마무리 교체(★2). (2) 「직선 위의 점 P 에 대해 두 평면까지 거리가 같은 P」 로 바꾸면 절댓값 방정식 두 갈래(MI d1) ★3. (3) 두 평면의 교선과 이 직선의 위치 관계(꼬인 위치 · 만남)를 판별하게 하면 EQV d1 ★3."
```

### 유형 12 두 평면이 이루는 각의 크기

```yaml
- id: RPM-GEO-0748
  page: 111
  vendor_label: "유형 12 두 평면이 이루는 각의 크기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    두 평면 3x-y-2z-4=0, 2x-3y+z+5=0 이 이루는 각 θ 에 대하여 tanθ 의 값. 주관식.
  category: "법선벡터 내적 → cosθ → θ → tanθ"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면이 이루는 각(법선벡터 사잇각)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    n1=(3,-1,-2), n2=(2,-3,1) 의 내적 7, 크기 각각 √14 → cosθ=7/14=1/2, θ=60° → tanθ=√3. 공식 한 번과 특수각 변환이 전부. 두 평면이 이루는 각은 0°~90° 라 내적에 절댓값을 씌우는 것이 유일한 함정. 통찰 없음·M_total 4 → 유형 대표 출발점 ★2 에서 −1, ★1.
  tier: star_1
  mechanism_primary: "n1·n2=7 · |n1|=|n2|=√14 → cosθ=1/2 → θ=60° → tanθ=√3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\sqrt{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0748.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 법선을 바꿀 수 있음. 제약: cosθ 가 특수각 값(1/2, √2/2, √3/2)이 되도록 내적과 크기의 곱을 맞춤(예: 크기 √14·√14 에 내적 7). tan 을 물으려면 θ ≠ 90°, 내적 부호가 음수인 쌍을 주면 절댓값 함정 유지."
    creative: "(1) 「이루는 각이 60° 가 되도록 하는 k」 로 뒤집으면 0750 골조(양변 제곱 이차방정식) ★2~3. (2) 「두 평면이 이루는 각의 이등분면」이나 「θ 가 예각일 때 sinθ」 로 마무리 교체 ★2. (3) 평면 하나를 세 점으로 주면 법선 결정(유형 09)이 앞에 붙어 ★2."
```

```yaml
- id: RPM-GEO-0749
  page: 111
  vendor_label: "유형 12 두 평면이 이루는 각의 크기"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    평면 x-y-2z+1=0 과 xy평면이 이루는 각 θ 에 대하여 cosθ 의 값. 5지선다.
  category: "좌표평면의 법선 (0,0,1) → 법선 내적 → cosθ"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면이 이루는 각(법선벡터 사잇각) — 좌표평면"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    xy평면의 법선이 (0,0,1) 임을 쓰면 cosθ=|(1,-1,-2)·(0,0,1)|/(√6·1)=2/√6=√6/3. 좌표평면을 법선으로 옮기는 것과 절댓값이 전부. 통찰 없음·M_total 4 → 중하 출발점에서 −1, ★1.
  tier: star_1
  mechanism_primary: "xy평면 법선 (0,0,1) → cosθ=|(1,-1,-2)·(0,0,1)|/√6 = 2/√6 = √6/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0749.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평면 계수와 좌표평면 종류(xy·yz·zx)를 바꿀 수 있음. 제약: 법선 크기 제곱이 작은 정수(√6·√14 등), 선택지의 분모 유리화 형태로 정리되게, 해당 좌표축 성분이 0 이면 각이 90° 가 되니 피함."
    creative: "(1) 「평면 위의 넓이 S 인 도형의 xy평면 위로의 정사영 넓이」 로 바꾸면 0751 골조(S cosθ) ★2. (2) 「x축과 이루는 각」 으로 바꾸면 직선-평면 각(sin) 공식으로 전환되어 T-표기 함정 ★2. (3) 「xy평면과 이루는 각이 45° 인 평면 x+y+kz=1 의 k」 로 뒤집기 ★2."
```

```yaml
- id: RPM-GEO-0750
  page: 111
  vendor_label: "유형 12 두 평면이 이루는 각의 크기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 평면 -x+(k+1)y+(k-2)z=5, x+4y+z=7 이 이루는 각이 60° 일 때 정수 k 의 값. 5지선다.
  category: "cos 공식에 k → 양변 제곱 → k 이차방정식 → 정수 근 선택"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면이 이루는 각이 주어질 때 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    n1=(-1,k+1,k-2), n2=(1,4,1): 내적 5k+1, |n1|²=2k²-2k+6, |n2|=3√2. cos60°=1/2 → 2|5k+1|=3√2·√(2k²-2k+6), 제곱하면 100k²+40k+4=36k²-36k+108 → 16k²+19k-26=0 → (k+2)(16k-13)=0, 정수 k=-2. 골조는 공식 한 번이지만 제곱 전개·인수분해가 무겁다(Mₖ 3). 통찰 없음이고 v3.8 은 계산 마찰을 ★ 상승 신호로 보지 않으므로 중 출발점 ★2 유지.
    [분류 이슈] M_total 8 인 절차형 — 학생 체감은 ★3 에 가깝지만 마찰만 무거워 ★2 로 둠(후보 ★2/★3).
  tier: star_2
  mechanism_primary: "cos60°=|n1·n2|/(|n1||n2|) → 2|5k+1| = 3√2·√(2k²-2k+6) → 제곱 → 16k²+19k-26=0 → (k+2)(16k-13)=0 → 정수 k=-2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0750.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "k 가 들어가는 성분 두 개와 둘째 법선·각도(30°·45°·60°)를 바꿀 수 있음. 제약: 제곱 뒤 이차방정식이 정수 근 하나 + 비정수 근 하나로 갈라지게 판별식이 완전제곱(여기선 45²)이 되도록 설계하고, 「정수 k」 조건이 실제로 하나를 골라내게 유지. 각도가 45° 면 √2 가 상쇄되어 더 가벼움."
    creative: "(1) 「양수 k」 나 「모든 실수 k 의 합」 으로 조건을 바꾸면 두 근 모두 살아 MI d1 ★3. (2) k 를 두 법선에 하나씩 넣고 「두 평면이 수직」 (내적 0) 으로 바꾸면 0752 골조로 ★2. (3) 「이루는 각이 최소가 되는 k」 로 바꾸면 cos 의 최대화(이차식/제곱근 비의 최대) → RT·BW 성격 ★4."
```

```yaml
- id: RPM-GEO-0751
  page: 111
  vendor_label: "유형 12 두 평면이 이루는 각의 크기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    평면 x+2y-2z=1 위의 한 변 길이 3 인 정삼각형 ABC 의, 평면 2x+2y+z=3 위로의 정사영의 넓이. 주관식.
  category: "정삼각형 넓이 → 두 평면이 이루는 각의 cos → 정사영 넓이 S cosθ"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정사영의 넓이(두 평면이 이루는 각)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    S=(√3/4)·9=9√3/4. 두 법선 (1,2,-2), (2,2,1) 의 내적 4, 크기 3·3 → cosθ=4/9. 정사영 넓이 S cosθ=√3. 삼각형의 위치는 필요 없고 두 평면의 각만 쓴다는 것을 알면 공식 두 개 사슬. 통찰 없음·M_total 5 → 중 출발점 ★2 유지. 함정은 정사영 공식에 sin 이 아니라 cos 을 쓰는 것.
  tier: star_2
  mechanism_primary: "S=(√3/4)·9=9√3/4 → cosθ=|n1·n2|/(|n1||n2|)=4/9 → S'=S cosθ=√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0751.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 평면 계수, 도형 종류(정삼각형·정사각형·원)와 크기를 바꿀 수 있음. 제약: 두 법선 크기가 정수(성분 (1,2,2)·(2,3,6) 꼴)이고 내적/크기곱이 S 의 무리수 인수와 상쇄되게(여기선 9 와 9√3/4) 설계, 답이 √(정수) 로 정리."
    creative: "(1) 「정사영의 넓이가 √3 일 때 정삼각형의 한 변」 으로 뒤집기(BW 성격 ★2). (2) 정사영 넓이를 주고 「두 평면이 이루는 각」 을 되묻기(★2). (3) 평면 위 원의 정사영이 타원이 됨을 쓰고 「장축·단축 길이」 를 묻게 하면 01 이차곡선과의 결합(XU d1) ★3~4."
```

### 유형 13 두 평면의 평행과 수직

```yaml
- id: RPM-GEO-0752
  page: 112
  vendor_label: "유형 13 두 평면의 평행과 수직"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    두 평면 3x+y+(k-3)z=1, 5x-7y-(k-1)z=7 이 서로 수직이 되도록 하는 양수 k 의 값. 주관식.
  category: "수직 ⇔ 법선 내적 0 → k 이차방정식 → 양수 근"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면의 수직 조건(법선 내적 0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    법선 (3,1,k-3), (5,-7,-(k-1)) 의 내적 15-7-(k-3)(k-1)=0 → k²-4k-5=0 → (k-5)(k+1)=0, 양수 k=5. 조건 한 줄이지만 k 가 두 성분에 들어가 이차식이 되고 부호 −(k-1) 을 놓치기 쉽다. 통찰 없음·M_total 5 → 유형 대표 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "수직 ⇔ n1·n2=0 → 15-7-(k-3)(k-1)=0 → k²-4k-5=0 → k=5 (양수)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$5$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0752.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "법선 성분과 k 가 들어가는 위치를 바꿀 수 있음. 제약: 내적이 k 의 이차식이 되어 인수분해되고 근이 양수 하나·음수 하나가 되도록(양수 조건이 실제로 고르게), 상수항(우변)은 답과 무관하니 자유."
    creative: "(1) 「모든 실수 k 의 합」 으로 바꾸면 두 근 모두 살아 근과 계수 관계 ★2. (2) 수직 대신 「이루는 각이 45°」 로 바꾸면 0750 골조(제곱) ★3. (3) 세 평면이 서로 수직일 조건(k, m 두 미지수·연립) 으로 확장하면 CON d1 ★3."
```

```yaml
- id: RPM-GEO-0753
  page: 112
  vendor_label: "유형 13 두 평면의 평행과 수직"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 평면 (a+2)x+12y+(2-a)z=0, 5x+(a-2)y-3z-2=0 이 서로 평행하도록 하는 실수 a 의 값. 5지선다.
  category: "평행 ⇔ 법선 성분비 일치 → 비례식 두 개 연립 → a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면의 평행 조건(법선 성분비)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (a+2)/5=12/(a-2)=(2-a)/(-3). 첫째·셋째에서 -3(a+2)=5(2-a), a=8; 첫째·둘째로 시작하면 a²=64 라 ±8 이 나오고 셋째 비율로 −8 이 걸러진다(어느 쌍을 먼저 잡느냐에 따라 기각 단계가 생기거나 없어져 VF 로 세지 않음). 상수항 0 ≠ -2 라 일치 평면이 아님도 확인. 비례식 연립·통찰 없음·M_total 7 → 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "평행 ⇔ 법선 평행 → (a+2)/5 = 12/(a-2) = (2-a)/(-3) → 첫·셋째 비율에서 a=8 (첫·둘째의 a²=64 중 −8 은 셋째 위배) → 8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0753.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a 가 들어가는 성분 세 개와 상수 성분을 바꿀 수 있음. 제약: 세 비례식이 한 값 a 에서 동시에 성립하도록 역설계(a 를 먼저 정하고 성분을 배율로 만든 뒤 a 식으로 되돌림), 한 쌍의 비례식은 이차가 되게 두어 기각 후보(−8 류)를 남김, 상수항은 일치 평면이 안 되게."
    creative: "(1) 「평행하지만 일치하지 않을 조건」 을 명시적으로 물어 상수항 검증을 답의 일부로 만들면 VF d1 ★3. (2) 평행 조건에 「두 평면 사이 거리」 를 이어 붙이면 0763 골조 ★3. (3) a, b 두 미지수로 「평행」 을 주고 a+b 를 묻는 연립형 ★2."
```

```yaml
- id: RPM-GEO-0754
  page: 112
  vendor_label: "유형 13 두 평면의 평행과 수직"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    점 (1,-1,4) 를 지나고 두 평면 x+y+z=1, x-4y+3z=5 에 모두 수직인 평면이 점 (3,6,p) 를 지날 때 p 의 값. 5지선다.
  category: "두 평면에 수직 ⇔ 법선이 두 법선에 수직 → 법선 결정 → 평면 → 점 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「두 평면에 모두 수직인 평면」을 「구하는 평면의 법선이 두 법선 (1,1,1), (1,-4,3) 에 모두 수직」(= 두 평면의 교선 방향) 으로 번역"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 평면에 수직인 평면의 방정식(법선 ⊥ 두 법선)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    평면이 두 평면에 수직이면 그 법선은 두 법선과 각각 수직이므로 (1,1,1), (1,-4,3) 에 수직인 n=(7,-2,-5). (1,-1,4) 를 지나는 평면 7x-2y-5z+11=0 에 (3,6,p) 대입 → 21-12-5p+11=0, p=4. 「평면에 수직인 평면」 이라는 말을 법선끼리의 수직으로 옮기는 것이 관문(EQV d1)이고 뒤는 0739 골조. M_total 6·통찰 1개 → 상중 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "두 평면에 수직 ⇔ 법선 n ⊥ n1, n ⊥ n2 → n=(7,-2,-5) → 7x-2y-5z+11=0 → (3,6,p) 대입 → p=4"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0754.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 평면 법선·지나는 점·판정 점의 고정 좌표를 바꿀 수 있음. 제약: 두 법선 비평행, 두 법선에 수직인 벡터가 정수 성분(작은 성분으로 외적 결과 설계), p 가 정수·선택지 범위가 되게 평면식에 대입해 역산."
    creative: "(1) 「두 평면의 교선에 평행하고 점 P 를 지나는 평면」 으로 문구를 바꾸면 같은 골조(교선 방향 ⊥ 법선)지만 조건이 하나 부족해 「평면 하나를 더 지나는 점」 이 필요 — 두 조건 결합 CON d1 ★3~4. (2) 「두 평면에 수직이고 원점에서 거리 √78 인 평면」 으로 바꾸면 상수항 ± 두 개 MI d1 ★3. (3) 수직 대신 「한 평면에 수직·다른 평면에 평행」 은 모순이 될 수 있으니 법선 조건이 양립하는지 먼저 검산."
```

### 유형 14 직선과 평면이 이루는 각의 크기

```yaml
- id: RPM-GEO-0755
  page: 112
  vendor_label: "유형 14 직선과 평면이 이루는 각의 크기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    직선 x+1 = 2-y = z/√2 와 평면 x+√2 z=3 이 이루는 각의 크기. 주관식.
  category: "방향벡터·법선벡터 → sinθ = |u·n|/(|u||n|) → 특수각"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 평면이 이루는 각(sinθ = |u·n|/|u||n|)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    u=(1,-1,√2), n=(1,0,√2): u·n=3, |u|=2, |n|=√3 → sinθ=3/(2√3)=√3/2, θ=60°. 방향벡터와 법선의 사잇각 30° 의 여각이 직선-평면 각이라는 것(sin 공식)과 2-y 의 부호가 함정 둘(Mₜ 2). 통찰 없음·M_total 5 → 유형 대표 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "u=(1,-1,√2) · n=(1,0,√2) → sinθ=|u·n|/(|u||n|)=3/(2√3)=√3/2 → θ=60°"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$60^\circ$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0755.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "방향벡터·법선 성분(무리수 성분 포함)을 바꿀 수 있음. 제약: |u·n|/(|u||n|) 이 특수각 sin 값(1/2, √2/2, √3/2)이 되게 크기 제곱을 정수로 설계, 직선 표기에 (c-y) 꼴 하나를 남겨 부호 함정 유지."
    creative: "(1) 「이루는 각이 30° 가 되도록 하는 a」 로 뒤집으면 0756 골조 ★2. (2) 직선을 두 평면의 교선으로 주면 유형 10 이 앞에 붙어 ★3. (3) 「직선의 평면 위로의 정사영 직선의 방정식」 을 묻게 하면 수선의 발·두 점 결정 사슬 ★3~4."
```

```yaml
- id: RPM-GEO-0756
  page: 112
  vendor_label: "유형 14 직선과 평면이 이루는 각의 크기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    직선 x+3 = 2-y = (z-1)/2 와 평면 ax+y+z-3=0 이 이루는 각이 30° 일 때 상수 a 의 값. 5지선다.
  category: "sin 공식에 a → 양변 제곱 → a 이차방정식(중근)"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 평면이 이루는 각이 주어질 때 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    u=(1,-1,2), n=(a,1,1): sin30°=1/2=|a-1+2|/(√6·√(a²+2)) → 2|a+1|=√6·√(a²+2), 제곱하면 4a²+8a+4=6a²+12 → a²-4a+4=0, a=2(중근). 0750 과 같은 골조지만 중근이라 기각 단계가 없다. 부호(2-y)·sin/cos 선택 함정 둘, 제곱 전개, 통찰 없음·M_total 8 → 중 출발점 ★2 유지(계산 마찰은 ★ 상승 신호 아님).
  tier: star_2
  mechanism_primary: "u=(1,-1,2) · n=(a,1,1) → sin30°=|a+1|/(√6·√(a²+2)) → 제곱 → (a-2)²=0 → a=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0756.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "방향벡터·법선의 고정 성분·각도를 바꿀 수 있음. 제약: 제곱 뒤 이차방정식이 중근 또는 정수 근 두 개가 되게 판별식을 설계(중근이면 답 하나 · 두 근이면 「양수 a」 같은 선택 조건 추가), 각도 45° 면 √2 상쇄로 가벼워짐."
    creative: "(1) 두 근이 생기도록 설계하고 「모든 a 의 합」 을 물으면 근과 계수 관계 ★2, 「양수 a」 면 기각 단계(VF d1) ★3. (2) 「이루는 각이 최대가 되는 a」 로 바꾸면 sin 의 최대화 ★4. (3) a 를 방향벡터 쪽에 넣으면 |u| 가 a 의 식이 되어 같은 골조 ★2."
```

```yaml
- id: RPM-GEO-0757
  page: 112
  vendor_label: "유형 14 직선과 평면이 이루는 각의 크기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 점 (-1,-2,0), (2,0,1) 을 지나는 직선과 평면 3x+2y-z=3 이 이루는 각 θ 에 대하여 sinθ 의 값. 5지선다.
  category: "두 점 → 방향벡터 → sinθ = |u·n|/(|u||n|)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 평면이 이루는 각(sinθ = |u·n|/|u||n|)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    u=(3,2,1), n=(3,2,-1): u·n=12, |u|=|n|=√14 → sinθ=12/14=6/7. 방향벡터를 두 점의 차로 구하는 것과 sin 공식이 전부. 통찰 없음·M_total 4 → 중 출발점에서 −1, ★1. 함정은 sin 인지 cos 인지 하나.
  tier: star_1
  mechanism_primary: "u=B-A=(3,2,1) · n=(3,2,-1) → sinθ=|u·n|/(|u||n|)=12/14=6/7"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0757.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점과 평면 계수를 바꿀 수 있음. 제약: |u|·|n| 이 정수(같은 크기 제곱 14 처럼)가 되게 성분을 고르고 내적이 그 약수가 되게, 답이 선택지 분수 꼴."
    creative: "(1) 「cosθ」 를 물어 여각 변환을 추가(★1~2). (2) 직선을 「두 평면의 교선」 으로 주면 유형 10 결합 ★2~3. (3) 「직선 위의 점에서 평면까지의 거리가 직선을 따라 단위길이당 얼마씩 변하는가」 같은 정사영 길이(|u|sinθ) 발문으로 바꾸면 RT d1 ★3."
```

### 유형 15 직선과 평면의 평행·수직

```yaml
- id: RPM-GEO-0758
  page: 113
  vendor_label: "유형 15 직선과 평면의 평행·수직"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    평면 4x+ay+2z+5=0 과 직선 (x-1)/2 = 2-y = (z+3)/b 가 서로 수직일 때 상수 a, b 에 대하여 a-b 의 값. 5지선다.
  category: "직선 ⊥ 평면 ⇔ 방향벡터 ∥ 법선벡터 → 성분비 → a, b"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 평면의 수직 조건(방향벡터 ∥ 법선벡터)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수직이면 u=(2,-1,b) 와 n=(4,a,2) 가 평행: 4/2=a/(-1)=2/b → a=-2, b=1, a-b=-3. 비례식 한 줄이지만 미지수 둘과 2-y 의 부호가 있어 M_total 5. 통찰 없음 → 유형 대표 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "직선 ⊥ 평면 ⇔ u ∥ n → 4/2 = a/(-1) = 2/b → a=-2, b=1 → a-b=-3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0758.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "법선·방향벡터의 고정 성분과 미지수 위치를 바꿀 수 있음. 제약: 비례 상수가 정수(또는 간단한 분수)가 되게 한 쌍의 성분비를 먼저 정하고, (c-y) 꼴을 하나 남겨 부호 함정 유지, 답이 선택지 안."
    creative: "(1) 「수직」 을 「평행」 으로 바꾸면 조건이 u·n=0 하나뿐이라 a, b 를 다 정할 수 없음 — 조건을 하나 더(직선이 특정 점 통과 등) 주어야 하고 이 조건 결합이 CON d1 ★3. (2) 수직 조건에 「직선과 평면의 교점(수선의 발)」 을 이어 붙이면 유형 11 결합 ★2~3. (3) b 대신 방향벡터 크기 조건(|u|=3)을 주면 ± 분기 MI d1 ★3."
```

```yaml
- id: RPM-GEO-0759
  page: 113
  vendor_label: "유형 15 직선과 평면의 평행·수직"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 점 A(-2,1,-1), B(5,-1,4) 를 지나는 직선과 평행한 평면을 보기 다섯 개(평면의 방정식) 중에서 고르기. 5지선다.
  category: "방향벡터 → 평행 ⇔ 방향벡터 ⊥ 법선 → 보기 법선과 내적 0 → 포함 여부 확인"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 평면의 평행 조건(방향벡터 ⊥ 법선벡터)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    u=AB=(7,-2,5). 평행이면 u·n=0 이어야 하는데 보기 법선 중 (1,1,-1) 만 7-2-5=0. A 를 x+y-z=1 에 넣으면 0 ≠ 1 이라 직선이 평면에 포함되지 않으므로 진짜 평행. 내적 다섯 번은 가볍지만 「평행 ⇔ 수직인 법선」 과 「포함되는 경우 배제」 두 함정(Mₜ 2)이 있어 M_total 5. 통찰 없음 → 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "u=AB=(7,-2,5) → 평행 ⇔ u·n=0 → 보기 법선 중 (1,1,-1) 만 0 → A 가 평면 위에 없음 확인 → ③"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0759.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점과 보기 다섯 평면을 바꿀 수 있음. 제약: 방향벡터와 내적이 0 인 법선이 보기에 정확히 하나, 그 평면이 직선을 포함하지 않도록 상수항 조정(포함되는 보기를 오답으로 하나 넣으면 함정 강화), 나머지 보기는 내적 ≠ 0."
    creative: "(1) 「평행한 평면」 을 두 개 두고 하나는 직선을 포함하게 하면 포함/평행 판별이 답의 핵심(EQV d1) ★3. (2) 「직선과 평행하고 점 P 를 지나며 z축에 평행한 평면」 처럼 조건 둘로 법선을 결정하게 하면 CON d1 ★3. (3) 보기를 「법선벡터」 로 바꾸면 내적 0 만 남아 ★1."
```

```yaml
- id: RPM-GEO-0760
  page: 113
  vendor_label: "유형 15 직선과 평면의 평행·수직"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    직선 (x-3)/2 = y-2 = (1-z)/3 을 포함하고 점 (-2,4,1) 을 지나는 평면의 방정식. 서술형 주관식.
  category: "직선 포함 ⇔ 직선 위 점 통과 + 방향벡터 ⊥ 법선 → 두 벡터에 수직인 법선 → 평면"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「직선을 포함한다」를 「직선 위 한 점 Q(3,2,1) 을 지난다 + 법선 ⊥ 방향벡터 (2,1,-3)」 두 조건으로 번역 — 그러면 PQ 와 방향벡터에 수직인 법선을 찾는 세 점 평면 골조가 됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "직선을 포함하는 평면의 방정식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    직선 위 점 Q(3,2,1)·방향 u=(2,1,-3), 주어진 점 P(-2,4,1) 에서 PQ=(5,-2,0). 법선은 u 와 PQ 에 모두 수직인 (2,5,3) → Q 를 지나는 평면 2x+5y+3z-19=0(P 대입 -4+20+3-19=0 검산). 「포함」 을 점·방향 두 조건으로 푸는 번역(EQV d1) 뒤는 법선 결정 연립. (1-z)/3 의 부호가 함정. M_total 6·통찰 1개 → 상중·서술형 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "직선 포함 ⇔ Q(3,2,1) 통과 · n ⊥ u=(2,1,-3) → n ⊥ PQ=(5,-2,0) → n=(2,5,3) → 2x+5y+3z-19=0"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$2x+5y+3z-19=0$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0760.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 점·방향벡터와 지나는 점을 바꿀 수 있음. 제약: 점이 직선 위에 있으면 안 됨(PQ ∥ u 금지), u 와 PQ 에 수직인 벡터가 작은 정수 성분이 되게 설계(PQ 의 한 성분을 0 으로 두면 계산이 짧음), 답은 정수 계수 최간단형."
    creative: "(1) 「두 직선(만나는 두 직선 또는 평행한 두 직선)을 포함하는 평면」 으로 바꾸면 먼저 위치 관계 판별이 필요해 MI d1 이 추가 ★3~4. (2) 「직선을 포함하고 평면 α 에 수직인 평면」 으로 조건을 바꾸면 법선 ⊥ u, 법선 ⊥ n_α 의 조건 통합 CON d1 ★3. (3) 「직선을 포함하는 평면 중 원점과의 거리가 최대인 것」 은 원점에서 직선에 내린 수선이 법선이 됨을 봐야 하는 SC 갈래 ★4."
```

### 유형 16 점과 평면 사이의 거리

```yaml
- id: RPM-GEO-0761
  page: 113
  vendor_label: "유형 16 점과 평면 사이의 거리"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    점 (4,1,1) 을 지나고 법선벡터가 (1,2,2) 인 평면 α 와 점 (0,1,1) 사이의 거리. 5지선다.
  category: "점·법선 → 평면의 방정식 → 점과 평면 사이 거리 공식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "점과 평면 사이의 거리"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    평면 x+2y+2z-8=0, 거리 |0+2+2-8|/√9=4/3. 평면식 한 줄과 공식 한 번. 통찰 없음·M_total 4 → 유형 대표 출발점 ★2 에서 −1, ★1.
  tier: star_1
  mechanism_primary: "평면 x+2y+2z-8=0 → d=|0+2+2-8|/√9=4/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "①"
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/rpm-geo/items/0761.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점·법선·거리를 재는 점을 바꿀 수 있음. 제약: 법선 크기가 정수((1,2,2)·(2,3,6)·(1,4,8) 꼴)여야 분모가 깔끔, 분자가 0 이 되지 않게(점이 평면 위면 거리 0), 답이 선택지 분수 꼴."
    creative: "(1) 「거리가 4/3 이 되는 평면 위 점이 아닌 점 중 x축 위의 점」 처럼 미지 좌표를 두고 절댓값 분기(두 점) MI d1 ★2~3. (2) 평면을 세 점으로 주면 법선 결정(유형 09)이 앞에 붙어 ★2. (3) 「점에서 평면에 내린 수선의 발」 을 묻게 하면 매개변수 t 대입(유형 11) 사슬 ★2."
```

```yaml
- id: RPM-GEO-0762
  page: 113
  vendor_label: "유형 16 점과 평면 사이의 거리"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    평면 x+y+2z+k=0 과 원점 사이의 거리가 √2 일 때 양수 k 의 값. 주관식.
  category: "거리 공식에 k → |k| = … → 양수 선택"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "점과 평면 사이의 거리가 주어질 때 미정계수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    원점이므로 분자가 |k|: |k|/√6=√2 → |k|=√12=2√3, 양수 k=2√3. 공식 한 줄에 절댓값·양수 선택 하나. 통찰 없음·M_total 4 → 중하 출발점에서 −1, ★1.
  tier: star_1
  mechanism_primary: "원점 거리 |k|/√6 = √2 → |k| = 2√3 → 양수 k = 2√3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2\sqrt{3}$'
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/rpm-geo/items/0762.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "법선 성분·거리·기준점을 바꿀 수 있음. 제약: |k| 가 √(정수) 로 정리되게 거리²·|n|² 를 곱해 설계, 기준점을 원점 밖으로 옮기면 분자가 |상수+k| 가 되어 두 근이 부호가 다르지 않을 수 있으니 「양수 k」 조건이 하나만 남기는지 확인."
    creative: "(1) 기준점을 원점이 아닌 점으로 두고 「모든 k 의 합」 을 물으면 절댓값 두 갈래 모두 사용 MI d1 ★2. (2) 「원점과의 거리가 √2 이고 점 (1,1,1) 을 지나는 평면 x+y+2z+k=0」 은 조건 충돌 검산이 필요하니 피함. (3) 「평면 위의 점 중 원점에 가장 가까운 점의 좌표」 로 바꾸면 수선의 발(법선 방향 매개변수) RT d1 ★2~3."
```

```yaml
- id: RPM-GEO-0763
  page: 113
  vendor_label: "유형 16 점과 평면 사이의 거리"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    평행한 두 평면 2x+y-2z-5=0, ax+2y+bz+c=0 사이의 거리가 3 일 때 상수 a, b, c(c>0) 에 대하여 a-b+c 의 값. 주관식.
  category: "평행 ⇔ 법선 성분비 → a, b → 한 평면 위 점과 다른 평면의 거리 → |c+…| → c>0 선택"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행한 두 평면 사이의 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (a,2,b) ∥ (2,1,-2) 에서 a=4, b=-4. 첫 평면 위 점 (0,5,0) 과 4x+2y-4z+c=0 의 거리 |10+c|/6=3 → c=8 또는 -28, c>0 이므로 8 → a-b+c=16. 계수 배율을 맞추지 않고 상수항 차만 쓰면 틀리는 것(T-단위)·b 부호·c 선택이 함정 셋(Mₜ 2). 통찰 없음·M_total 8 → 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "평행 ⇔ (a,2,b) ∥ (2,1,-2) → a=4, b=-4 → 평면1 위 점 (0,5,0) 과 4x+2y-4z+c=0 거리 |10+c|/6=3 → c=8 (c>0) → 16"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$16$"
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/rpm-geo/items/0763.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫 평면 계수·거리·둘째 평면의 고정 성분(여기선 y 계수 2)을 바꿀 수 있음. 제약: 배율이 정수가 되게 고정 성분을 첫 평면 성분의 배수로, 거리·|n| 곱이 정수가 되게, c 의 두 후보가 부호가 달라 「c>0」 이 하나를 고르게 설계."
    creative: "(1) 「c>0」 을 빼고 「두 평면의 방정식을 모두」 로 바꾸면 양쪽 두 평면 MI d1 ★2~3. (2) 「두 평면 사이에서 거리가 같은 평면(중간 평면)」 을 묻게 하면 상수항 평균 → EQV d1 ★3. (3) 둘째 평면을 「점 P 를 지나고 첫 평면에 평행」 으로 주고 거리를 묻는 방향으로 뒤집으면 ★2."
```

```yaml
- id: RPM-GEO-0764
  page: 113
  vendor_label: "유형 16 점과 평면 사이의 거리"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 직선 x-2 = y/2 = (z+4)/3, (x+1)/2 = (y+6)/4 = 1-z 의 교점 P 와 평면 x+y-z=0 사이의 거리. 5지선다.
  category: "두 직선 매개변수(s, t) 연립 → 교점 → 점과 평면 사이 거리"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선의 교점과 평면 사이의 거리"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    L1=(s+2, 2s, 3s-4), L2=(2t-1, 4t-6, 1-t). x, y 식이 둘 다 s=2t-3 을 주고 z 식 3(2t-3)-4=1-t 에서 t=2, s=1 → P(3,2,-1). 거리 |3+2+1|/√3=2√3. 두 직선의 매개변수를 다른 문자로 두는 것과 1-z 부호가 함정(Mₜ 2). 교점(유형 08 골조)·거리 두 표준 절차의 사슬이고 통찰 없음, M_total 7 → 상중 출발점 ★3 유지.
    [분류 이슈] 벤더 「상중」이나 통찰 없음 · 표준 절차 두 개의 사슬 → M·I 만 보면 절차형 ★2. 라벨은 ★3 으로 두고 이슈 기록.
  tier: star_3
  mechanism_primary: "L1=(s+2,2s,3s-4) · L2=(2t-1,4t-6,1-t) → 연립 s=2t-3 · 7t=14 → P(3,2,-1) → d=|3+2+1|/√3=2√3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0764.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 직선과 평면을 바꿀 수 있음. 제약: 두 직선이 실제로 만나야 함(교점 P 를 먼저 정하고 두 방향벡터로 직선을 만들어 되돌림 · 방향 비평행), 매개변수 값이 정수, 거리 분자가 |n| 의 정수배 또는 √3 꼴로 정리."
    creative: "(1) 두 직선을 꼬인 위치로 만들고 「교점이 존재하도록 하는 상수 k」 를 먼저 묻게 하면 세 식 정합 조건(VF d1) ★3~4. (2) 「교점 P 와 두 직선을 포함하는 평면 사이 관계」 로 바꿔 두 직선을 포함하는 평면과 주어진 평면이 이루는 각을 묻기(유형 12 결합) ★3. (3) 거리 대신 「P 에서 평면에 내린 수선의 발」 ★3."
```

### 유형 17 구와 평면의 위치 관계

```yaml
- id: RPM-GEO-0765
  page: 114
  vendor_label: "유형 17 구와 평면의 위치 관계"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    구 (x+1)²+(y+2)²+(z-1)²=16 이 평면 2x+y+2z-7=0 과 만나서 생기는 원의 넓이. 5지선다.
  category: "중심-평면 거리 d → 단면 원 반지름² = r² − d² → 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구와 평면의 교선인 원의 넓이(d² + r'² = r²)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중심 (-1,-2,1), r=4. 평면까지 거리 d=|-2-2+2-7|/3=3. 단면 원의 반지름² = 16-9 = 7 → 넓이 7π. 거리 공식과 피타고라스, 넓이의 세 공식 사슬. 통찰 없음·M_total 5 → 유형 대표 출발점 ★2 유지. 함정은 반지름을 구하지 않고 r'² 로 바로 넓이를 내는 것(√7 을 거치면 낭비)."
  tier: star_2
  mechanism_primary: "중심 (-1,-2,1)·r=4 → 평면까지 거리 d=|-9|/3=3 → 단면 원 반지름² = 16-9 = 7 → 7π"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0765.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구의 중심·반지름과 평면 계수를 바꿀 수 있음. 제약: d < r(만나야 함), 법선 크기 정수((2,1,2)·(1,2,2) 꼴), r²−d² 가 양의 정수, 구를 일반형으로 주면 완전제곱 단계 추가."
    creative: "(1) 「원의 넓이가 7π 가 되도록 하는 평면 2x+y+2z+k=0 의 k」 로 뒤집으면 |·|=3 의 두 값 MI d1 ★2~3. (2) 「단면 원의 중심 좌표」 를 묻게 하면 중심에서 평면에 내린 수선의 발(매개변수) ★3. (3) 「구 위의 점 중 평면과의 거리가 최대인 점까지의 거리」 로 바꾸면 d + r 의 최대·최소 골조(0767) ★2."
```

```yaml
- id: RPM-GEO-0766
  page: 114
  vendor_label: "유형 17 구와 평면의 위치 관계"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    평면 x+2y+2z+k=0 이 구 x²+y²+z²-4x+2y+2z-3=0 에 접할 때 양수 k 의 값. 5지선다.
  category: "일반형 완전제곱 → 중심·반지름 → 접함 ⇔ 중심-평면 거리 = r → |k+…| → 양수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구와 평면이 접할 조건(중심 거리 = 반지름)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    완전제곱하면 (x-2)²+(y+1)²+(z+1)²=9, 중심 (2,-1,-1), r=3. 접하면 |2-2-2+k|/3=3 → |k-2|=9 → k=11 또는 -7, 양수 k=11. 완전제곱·거리=반지름·절댓값 분기에서 양수 선택. 통찰 없음·M_total 5 → 중하 출발점 ★2 유지(한 줄이 아니라 완전제곱이 앞에 붙음).
  tier: star_2
  mechanism_primary: "완전제곱 → 중심 (2,-1,-1)·r=3 → 접함 ⇔ |k-2|/3 = 3 → k=11 (양수)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0766.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구의 일반형 계수(중심·반지름)와 평면 법선을 바꿀 수 있음. 제약: 완전제곱이 정수로 떨어지게, 법선 크기 정수, |k−상수|=r|n| 의 두 근이 부호가 달라 「양수 k」 가 하나를 고르게(상수가 r|n| 보다 작게)."
    creative: "(1) 「접점의 좌표」 까지 묻게 하면 중심에서 평면에 내린 수선의 발 ★3. (2) 「구와 평면이 만나지 않을 k 의 범위」 로 바꾸면 부등식 |k-2|>9 두 구간 MI d1 ★2~3. (3) 「접하는 두 평면 사이의 거리」(=2r=지름) 를 물으면 계산 없이 그림으로 답하는 EQV d1 ★2."
```

```yaml
- id: RPM-GEO-0767
  page: 114
  vendor_label: "유형 17 구와 평면의 위치 관계"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    구 (x-1)²+(y-2)²+(z+1)²=3 위의 점과 평면 x+y+z=11 사이의 거리의 최솟값. 주관식.
  category: "중심-평면 거리 d > r 확인 → 최솟값 = d − r"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구 위의 점과 평면 사이 거리의 최솟값(d − r)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    중심 (1,2,-1), r=√3. 중심과 평면 사이 거리 |1+2-1-11|/√3=9/√3=3√3 > r 이므로 구와 평면이 만나지 않고 최솟값은 3√3−√3=2√3. 「최소 = 중심 거리 − 반지름」 은 이 유형의 표준 그림이라 통찰로 세지 않음. 거리 공식 한 번·M_total 4 → 중 출발점에서 −1, ★1. 함정은 d > r 확인(만나면 최솟값 0).
  tier: star_1
  mechanism_primary: "중심 (1,2,-1)·r=√3 → 중심-평면 거리 9/√3=3√3 > r → 최솟값 = 3√3 − √3 = 2√3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0767.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구의 중심·반지름·평면 상수항을 바꿀 수 있음. 제약: d > r 유지(만나면 최솟값 0 이 되어 문제가 바뀜), d 와 r 이 같은 무리수 인수(√3 등)로 정리되게 |n| 과 r 을 맞춤, 최댓값을 물으면 d + r."
    creative: "(1) 「최댓값과 최솟값의 합」(= 2d, r 무관) 을 물으면 소거 착안 EQV d1 ★2. (2) 「거리가 최소인 구 위의 점의 좌표」 로 바꾸면 중심에서 법선 방향으로 r 만큼 이동 → 단위벡터 사용 RT d1 ★3. (3) 평면 대신 직선과의 거리 최솟값으로 바꾸면 점-직선 거리(수선의 발) 사슬 ★3."
```

```yaml
- id: RPM-GEO-0768
  page: 114
  vendor_label: "유형 17 구와 평면의 위치 관계"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    구 x²+(y+1)²+(z-3)²=6 에 접하고 직선 (x-3)/2 = y-1 = 1-z 에 수직인 평면의 방정식을 모두 구하기. 주관식.
  category: "직선에 수직 ⇔ 법선 = 방향벡터 → 2x+y-z+d=0 → 접함 ⇔ 중심 거리 = r → d 두 값"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구에 접하고 직선에 수직인 평면(법선 = 방향벡터 · 접함 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    직선에 수직인 평면의 법선은 방향벡터 (2,1,-1) 이므로 2x+y-z+d=0. 중심 (0,-1,3) 과의 거리 |0-1-3+d|/√6=√6 → |d-4|=6 → d=10, -2. 두 평면 2x+y-z+10=0, 2x+y-z-2=0 이 모두 답(구 양쪽). 1-z 의 부호와 「모두」(두 답) 가 함정 둘(Mₜ 2). 절댓값 방정식의 두 해는 표준 분기라 통찰로 세지 않음. M_total 6 → 중 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "법선 = 직선 방향 (2,1,-1) → 2x+y-z+d=0 → 접함 ⇔ |d-4|/√6=√6 → d=10, -2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$2x+y-z+10=0$, $2x+y-z-2=0$"
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/rpm-geo/items/0768.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구의 중심·반지름과 직선의 방향벡터를 바꿀 수 있음. 제약: r·|n| 이 정수가 되게(r=√6 과 |n|=√6 처럼 같은 무리수) 설계하면 d 가 정수, 직선의 점은 답과 무관(방향만 씀), (c-z) 꼴 하나로 부호 함정 유지."
    creative: "(1) 「두 접평면 사이의 거리」 (= 2r) 나 「두 접점 사이의 거리」 를 물으면 지름 인식 EQV d1 ★2. (2) 「접하고 직선을 포함하는 평면」 으로 바꾸면 법선 ⊥ u 와 접함 조건의 결합(미지수 둘·CON d1) ★4. (3) 「직선에 평행한 접평면 중 점 P 를 지나는 것」 은 조건 셋의 정합이 필요 — 설계 시 해가 존재하는지 검산."
```

### 유형 18 벡터를 이용한 구의 방정식

```yaml
- id: RPM-GEO-0769
  page: 114
  vendor_label: "유형 18 벡터를 이용한 구의 방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    두 점 A(2,4,-1), B(-2,2,5) 에 대하여 AP·BP=0 을 만족시키는 점 P 가 나타내는 도형의 겉넓이. 5지선다.
  category: "AP·BP=0 ⇔ ∠APB=90° ⇔ AB 를 지름으로 하는 구 → 중점·반지름 → 겉넓이 4πr²"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "벡터 조건 AP·BP=0 을 「AB 가 지름인 구」라는 도형으로 옮김(또는 성분 전개로 |p|²−(a+b)·p+a·b=0 → 구) — 대수(내적)↔기하(구) 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "AP·BP = 0 → 지름이 AB 인 구"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AP·BP=0 이면 P 는 AB 를 지름으로 하는 구 위(P=A, B 포함). 중심은 중점 (0,3,2), 반지름은 AB/2=√56/2=√14 → 겉넓이 4π·14=56π. 성분으로 전개해 (x-2)(x+2)+(y-4)(y-2)+(z+1)(z-5)=0 을 완전제곱해도 같은 구. 내적 조건을 구로 읽는 것이 관문(RT d1)이고 뒤는 중점·거리·겉넓이 공식. M_total 5·통찰 1개 → 유형 대표 출발점 ★2 유지. 함정은 r² 을 바로 쓰지 않고 √14 를 다시 제곱하는 낭비, 부피(4/3 πr³)와 겉넓이 혼동.
  tier: star_2
  mechanism_primary: "AP·BP=0 ⇔ ∠APB=90° ⇔ AB 지름 구 → 중심 (0,3,2) · r²=AB²/4=14 → 4πr²=56π"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/rpm-geo/items/0769.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점 A, B 를 바꿀 수 있음. 제약: AB² 이 4 의 배수(중점이 정수·r² 정수)가 되게 두 점의 좌표 차를 모두 짝수로, 겉넓이 4πr² 이 선택지 정수배 π."
    creative: "(1) 「부피」 로 바꾸면 r³ 에 무리수가 남지 않게 r² 이 완전제곱이어야 함(★2). (2) 「AP·BP=k(k≠0)」 로 바꾸면 완전제곱 뒤 r²=AB²/4+k — 지름 그림이 깨지고 성분 전개가 필수라 SC d1(도형 vs 대수 갈래) ★3. (3) 「P 가 나타내는 구와 평면 z=0 이 만나서 생기는 원의 넓이」 로 이어 붙이면 0765 골조 결합 ★3."
```

```yaml
- id: RPM-GEO-0770
  page: 114
  vendor_label: "유형 18 벡터를 이용한 구의 방정식"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    두 점 A(2,-1,1), B(3,4,-2) 와 임의의 점 P 의 위치벡터 a, b, p 에 대하여 |p|²−2b·p+|b|²=9|a|² 을 만족시키는 P 가 나타내는 구의 중심 (x,y,z) 와 반지름 r 에 대하여 x+y+z+r² 의 값. 서술형 주관식.
  category: "|p|²−2b·p+|b|² = |p−b|² 로 완전제곱 → |p−b|² = 9|a|² → 중심 B · r² = 9|a|²"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "벡터식 |p|²−2b·p+|b|² 를 |p−b|² 로 묶어 「중심 B, 반지름 3|a| 인 구」로 읽음 — 내적 대수식 → 구의 벡터방정식 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "벡터 방정식 → 구(|p − b|² = k²)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌변이 |p−b|² 이므로 |p−b|²=9|a|²=9·6=54: 중심 B(3,4,-2), r²=54. x+y+z+r²=3+4-2+54=59. 완전제곱 인식(RT d1) 뒤는 |a|² 계산과 더하기뿐. a 는 반지름에만 쓰이고 중심은 B 라는 점이 함정(A 를 중심으로 착각). M_total 5·통찰 1개 → 중·서술형 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "|p|²-2b·p+|b|² = |p-b|² → |p-b|² = 9|a|² = 54 → 중심 B(3,4,-2) · r²=54 → 59"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$59$"
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/rpm-geo/items/0770.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 좌표와 우변 배수(9)를 바꿀 수 있음. 제약: 우변이 양수(반지름 실수), r² 을 묻게 하면 |a|² 이 완전제곱일 필요가 없음(r 을 물으면 9|a|² 이 완전제곱이 되게), 답은 정수."
    creative: "(1) 좌변을 |p|²−2a·p 처럼 중심이 A 인 꼴로 바꾸고 우변에 |b|² 을 섞으면 완전제곱 뒤 상수 정리가 붙어 ★2~3. (2) 「(p−a)·(p−b)=0」 으로 바꾸면 0769 골조(지름 구) ★2. (3) 「|p−a|=2|p−b|」(아폴로니우스 구) 로 바꾸면 성분 전개·완전제곱이 필수이고 중심이 A, B 의 외분점이 되는 RT d2 ★3~4."
```

## 표본 판정 요약 (32문)

- ★ 분포: ★1 8 · ★2 21 · ★3 3 · ★4 0 · ★5 0
- 통찰 1개 이상 5문(0741 EQV · 0754 EQV · 0760 EQV · 0769 RT · 0770 RT · 전부 depth 1) · insight_type 통찰형 0 · 절차형 32 · premium 0
- type_hint 상위: 「점과 평면 사이의 거리」 계열 4(0761~0764) · 「구와 평면의 위치 관계(중심-평면 거리 d 와 r 비교)」 계열 4(0765~0768) · 「두 평면이 이루는 각(법선 사잇각 · 정사영)」 계열 4(0748~0751) · 「법선 결정형 평면(세 점·교선 수직·두 평면 수직·직선 포함)」 6(0739·0740·0741·0744·0754·0760) · 「직선과 평면의 교점(매개변수 대입)」 3(0745~0747) · 「직선과 평면이 이루는 각(sin 공식)」 3(0755~0757)
- 벤더 신호 대비 조정: −1 이 8문(통찰 0·M_total 4 인 한 공식 문항: 0745·0746·0748·0749·0757·0761·0762·0767) · +1 0문 · 유지 24문
- 그림: 0문(figure 전부 none) · 전사 답 32건 재계산 일치

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-GEO-0750 | 벤더 「중」·통찰 없음이나 양변 제곱 이차방정식(16k²+19k−26=0)으로 M_total 8 — 학생 체감은 ★3 에 가깝지만 계산 마찰만 무거워(v3.8: friction 은 ★ 상승 신호 아님) ★2 로 둠 | ★2 / ★3 |
| RPM-GEO-0764 | 벤더 「상중」이나 통찰 없음 · 두 직선 교점 + 점-평면 거리의 표준 절차 사슬(M_total 7) → M·I 만 보면 절차형 ★2. 라벨은 ★3 으로 두고 이슈 기록 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복 골조 「두 벡터에 수직인 법선 결정 → 평면식 → 점 대입」이 0739(세 점)·0740(세 점 평면에 수직인 직선)·0741(구 중심 셋)·0744(교선에 수직)·0754(두 평면에 수직)·0760(직선 포함) 6문 — RPM 은 유형 09·10·13·15 네 곳에 흩어 놓았지만 계산은 동일하고 다른 것은 조건 번역뿐. 카탈로그에서는 「법선 결정형 평면」 한 유형(base ★2)으로 통합하고, 조건 번역이 붙는 0741(부피 이등분 ⇔ 중심)·0754(두 평면에 수직 ⇔ 법선 ⊥ 두 법선)·0760(직선 포함 ⇔ 점 통과 + 방향 ⊥ 법선)은 EQV d1 하위 변형(base ★2~3)으로 한 층 위에 둔다.
- 「각 공식」 세 가지 — 두 평면 cosθ(0748·0749) · 직선-평면 sinθ(0755·0757) · 정사영 S cosθ(0751) — 는 base ★1~2 의 별개 유형 셋으로 두되 골조는 같으니 한 묶음으로 배치. 「각이 주어질 때 미정계수」(0750·0756)는 양변 제곱 이차방정식이 붙는 마찰형 base ★2 — 카탈로그에서 ★3 으로 올리지 않는다(v3.8 질 저하 원칙).
- 「평행·수직 조건」(0752 법선 내적 0 · 0753 법선 성분비 · 0758 방향 ∥ 법선 · 0759 방향 ⊥ 법선)은 한 줄 조건 유형 base ★1~2 로 통합 가능. 0759 의 「포함 여부 확인」 은 함정 항목으로만 기록.
- 「거리」 계열: 점-평면(0761·0762 base ★1) · 평행 평면 사이(0763 base ★2 · 계수 배율 함정) · 교점 뒤 거리(0747·0764 base ★2) — 세 층으로 나누면 충분.
- 「구와 평면」(0765 단면 원 · 0766·0768 접함 · 0767 최소 거리)은 모두 「중심-평면 거리 d 와 r 의 비교」 한 골조 → 한 유형(base ★2)에 발문 변형(원 넓이·접평면·최솟값)을 하위 항목으로.
- 따로 세울 유형: 「벡터 조건 → 구」(0769 AP·BP=0 지름 구 · 0770 완전제곱, RT d1, base ★2) — 06 벡터 내적과 이어지는 이 범위 유일의 통찰 골조. 아폴로니우스 구(|p−a|=k|p−b|) 변형은 base ★3 로 따로.
- 이 범위에는 ★4 이상 후보가 없고 SC/VF/SYM/XU 통찰이 전무하다. 창의 변형으로 ★3~4 를 만들려면 variation_notes.creative 의 I-MI(± 분기: 0750·0756·0763·0765·0768 변형)·I-VF(후보 기각: 0753·0756·0764 변형)·I-CON(조건 결합: 0740·0758·0760·0768 변형)·I-XU(정사영 타원: 0751 변형)·I-SC(도형 vs 대수 갈래: 0769 변형) 지점을 쓴다.
