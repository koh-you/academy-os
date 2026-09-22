---
name: mechanism-데이터-RPM-GEO-07-p4
description: RPM 기하 07 도형의 방정식(4/4 · 유형 UP 19~20 · 시험에 꼭 나오는 문제 · 서술형 주관식 · 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 기하 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-geo
  section: 07 도형의 방정식
  unit_code: GEO-07
  part: "4/4"
  extract_range: "115~119쪽 · 0771~0806"
  total_problems: 36
  unit_total: 132
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-geo/items/<id>.tex
  image_source: latex-bank/rpm-geo/figures/ (crops.json)
---

# RPM 기하 · 07 도형의 방정식 (4/4) 정독 데이터 (v1.0)

이 파일은 RPM 기하 07 도형의 방정식 단원의 마지막 범위(115~119쪽 · 0771~0806 · 36문항)를 다룬다. 구역은 다섯이다 — 유형 UP 19 꼬인 위치에 있는 두 직선 사이의 거리(3문 · 공통수선 조건으로 옮겨 매개변수 연립) · 유형 UP 20 평면에 대하여 대칭인 점(3문 · 수직이등분면 · 수선의 발 → 2H−A) · 시험에 꼭 나오는 문제(23문 · 116~118쪽 · 단원 전체 유형을 한 번씩 훑음: 수선의 발 · 좌표평면/좌표축과의 교점 · 구와 직선의 교점 · 두 직선의 교점·각·평행·수직 · 평면 결정 · 두 평면의 각·거리 · 정사영 · 직선-평면 위치 관계 · 구-평면 접함·교선 · 대칭) · 서술형 주관식(4문) · 실력 Up(3문). RPM 의 벤더 난이도 신호는 구역이 곧 층이다 — 유형 UP(★3 출발 · 대표문제/중/상중 · 서술형 태그) · 시험에 꼭 나오는 문제(level 없음 · 중요·교육청 기출 태그 · ★2~3) · 서술형(★3 출발) · 실력 Up(★4 출발). 판정 결과는 ★1 2 · ★2 20 · ★3 14 · ★4 0 이다. 유형 UP 19 는 ★3 그대로, 유형 UP 20 세 문항은 통찰 0·M_total 4~5 라 ★2 로 내려갔고, 시험에 꼭 나오는 문제는 공식 한 번짜리 둘(0789·0794)만 ★1, 통찰(EQV d1)이 붙은 셋(0785·0797·0798)과 계산형 하나(0782)만 ★3 이며 나머지는 ★2 다. 서술형 넷은 ★3 을 유지했고, 실력 Up 세 문항은 M_total 5~6·통찰 1개(SYM d2 둘 · VF d1 하나)라 ★3 으로 판정해 이 범위에는 ★4 가 없다(분류 이슈 표에 기록). 통찰이 잡힌 문항은 10(EQV d1 6 · VF d1 2 · SYM d2 2), 그중 depth 2 인 통찰형은 0804·0806 둘이다. 그림 문항은 없고(figure 전부 none) 전사 답 36건은 모두 재계산과 일치했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 절차형 ★1~2 문항에도 `mechanism_primary`(풀이 골조 사슬) · `insights[]`(절차형은 빈 배열) · `variation_notes.numeric`(바꿔도 되는 수와 제약) · `variation_notes.creative`(골조를 유지한 변형과 ★ 가 변하는 지점)를 모두 채웠다. 이 범위의 숫자 변형 공통 제약은 매개변수 연립의 해가 정수(또는 단답형이면 분수 허용)일 것, 법선·방향벡터가 약분된 작은 정수일 것, 거리·길이가 √(정수) 로 정리될 것, 절댓값 방정식은 부호·범위 조건으로 하나만 남을 것, 대칭형 직선의 부호 뒤집기(5−z 류)는 함정으로 유지 가능하다는 것이다. ★ 가 오르는 공통 지점은 (a) 거리·각·길이 값을 주고 미지수 성분을 역산(I-BW), (b) 평행·수직·접함·대칭 조건 둘을 결합(I-CON), (c) 정육면체·정사면체를 좌표로 옮겨 거리·각을 묻기(I-RT d2), (d) 절댓값·이차방정식 후보 중 조건 위배를 기각하게 하기(I-VF)로 표시했고, 계산량만 키우는 변형은 Mₖ 만 오르고 ★ 는 그대로임을 명시했다.

## 문항 데이터

### 유형 UP 19 꼬인 위치에 있는 두 직선 사이의 거리

```yaml
- id: RPM-GEO-0771
  page: 115
  vendor_label: "유형 UP 19 꼬인 위치에 있는 두 직선 사이의 거리"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    꼬인 위치의 두 직선 l1: (x−4)/2 = y/(−2) = z−3, l2: x−1 = (y−1)/2 = 5−z 사이의 거리. 5지선다.
  category: "두 직선 위 점 P(s), Q(t) → PQ ⊥ u, PQ ⊥ v (내적 0 두 식) → 연립 → |PQ|"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "꼬인 위치 두 직선 사이의 거리(교과서 공식 없음)를 「두 직선에 동시에 수직인 선분 PQ 의 길이」로 옮겨 내적 0 두 식으로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "꼬인 위치에 있는 두 직선 사이의 거리(공통수선 · 내적 0 연립)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    l1 위 P(2s+4, −2s, s+3), l2 위 Q(t+1, 2t+1, −t+5). PQ·(2,−2,1)=0, PQ·(1,2,−1)=0 이 t+3s+2=0, 2t+s−1=0 → s=−1, t=1 → P(2,2,2), Q(2,3,4), PQ=(0,1,2) → √5. 거리를 공통수선 조건으로 옮기는 동치 변환(EQV d1)이 유형의 핵심이고 뒤는 2원 연립. 5−z 의 방향 부호가 함정(T-부호 1). 유형 UP 출발점 ★3 · M_total 6 · 통찰 1 → ★3 유지.
  tier: star_3
  mechanism_primary: "P(s), Q(t) 매개화 → PQ·u = 0, PQ·v = 0 연립 → s=−1, t=1 → |PQ| = √5"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0771.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 직선의 지나는 점·방향벡터를 바꿈. 제약: u, v 가 평행하지 않고 두 직선이 만나지 않아야 함(꼬인 위치 · 연립 해가 유일하고 |PQ| ≠ 0), 연립 해 s, t 가 정수, |PQ| 가 선택지에 맞는 근호(√2·√3·√5·2)로 떨어지게 방향벡터 성분을 작게. 방향 부호 함정(5−z 류)은 유지·제거 가능."
    creative: "(1) 거리 대신 공통수선의 발 P, Q 좌표를 묻기(0772 골조 · ★3) (2) 두 방향벡터가 수직(u·v=0)이 되게 하면 연립이 분리돼 Mₖ 1 → ★2~3 (3) 두 직선에 모두 수직인 방향 n 을 먼저 구해 AB 를 n 에 정사영(|AB·n|/|n|)하는 갈래를 열어 I-SC d1 추가 → ★3~4 (4) 거리 값을 주고 방향벡터 성분 k 를 역으로 묻기(I-BW d1 · ★4)."
```

```yaml
- id: RPM-GEO-0772
  page: 115
  vendor_label: "유형 UP 19 꼬인 위치에 있는 두 직선 사이의 거리"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형 UP"
  summary: |
    직선 l1: (4−x)/2 = y+1 = (z+1)/2 위의 점 P 와 l2: (x−5)/2 = (y−3)/2 = z+2 위의 점 Q 에 대하여 PQ 의 길이가 최소일 때 두 점 P, Q 의 좌표. 서술형.
  category: "P(s), Q(t) 매개화 → PQ ⊥ u, PQ ⊥ v → (u ⊥ v 라 분리된) 두 일차식 → P, Q"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "PQ 의 길이 최소 ↔ PQ 가 두 직선에 동시에 수직(공통수선) — 최소 조건을 내적 0 두 식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "꼬인 위치에 있는 두 직선 사이의 거리 — 공통수선의 발 P, Q 좌표"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    l1: 점 (4,−1,−1)·u=(−2,1,2), l2: 점 (5,3,−2)·v=(2,2,1). P(4−2s, −1+s, −1+2s), Q(5+2t, 3+2t, −2+t). PQ·u=0 → −9s=0, PQ·v=0 → 9t+9=0 (u·v=0 이라 두 식이 분리) → s=0, t=−1 → P(4,−1,−1), Q(3,1,−3). 「길이 최소」를 공통수선 조건으로 옮기는 EQV d1 이 핵심. 4−x 의 부호가 함정(T-부호 1). 상중·유형 UP 출발 ★3 · M_total 6 → ★3 유지.
  tier: star_3
  mechanism_primary: "PQ 최소 ↔ PQ ⊥ u, PQ ⊥ v → 매개변수 s, t 연립(u·v=0 이라 분리) → s=0, t=−1 → P(4,−1,−1), Q(3,1,−3)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\pt{P}(4,\,-1,\,-1)$, $\pt{Q}(3,\,1,\,-3)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0772.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점·방향벡터를 바꿈. 제약: 꼬인 위치(비평행·비교차) 유지, 연립 해 s, t 정수(좌표가 정수). u·v=0 을 유지하면 두 식이 분리되어 서술형 채점이 쉬움 · u·v ≠ 0 으로 바꾸면 2원 연립(Mₖ 2). 답이 l1 의 지나는 점 자체(s=0)가 되는 우연은 피해도 됨."
    creative: "(1) P, Q 대신 |PQ| 의 최솟값만 묻기(0798 골조 · ★3) (2) 선분 PQ 의 중점이 놓이는 평면·직선을 묻기(★3) (3) P 는 l1 위·Q 는 구 위로 바꾸면 「중심에서 직선까지 거리 − r」 골조(I-EQV d1 · 0785 계열 · ★3) (4) 「PQ 가 두 직선에 모두 수직」일 때 PQ 가 최소임을 서술하게 하면 증명형 ★4."
```

```yaml
- id: RPM-GEO-0773
  page: 115
  vendor_label: "유형 UP 19 꼬인 위치에 있는 두 직선 사이의 거리"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    꼬인 위치의 두 직선 l1: x−2 = (y+1)/2 = 1−z, l2: (x−1)/2 = y−2 = z+1 사이의 거리. 단답.
  category: "P(s), Q(t) 매개화 → PQ ⊥ u, PQ ⊥ v → t=1, s=5/3 → |PQ| = 2√3/3"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "꼬인 위치 두 직선 사이의 거리를 공통수선 PQ 의 길이(내적 0 두 식)로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "꼬인 위치에 있는 두 직선 사이의 거리(공통수선 · 내적 0 연립)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    l1: 점 (2,−1,1)·u=(1,2,−1), l2: 점 (1,2,−1)·v=(2,1,1). P(2+s, −1+2s, 1−s), Q(1+2t, 2+t, −1+t). PQ·u=0 → 3t−6s+7=0, PQ·v=0 → 6t−3s−1=0 → t=1, s=5/3 → PQ=(−2/3, 2/3, 2/3) → |PQ| = 2√3/3. 분수 매개변수라 계산이 0771 보다 무겁고(Mₖ 2) 1−z 부호 함정. 두 직선에 모두 수직인 n=(1,−1,−1) 을 먼저 잡아 AB=(−1,3,−2) 를 정사영하면 |−2|/√3 로 한 줄 — 갈래는 있으나 교육과정 표준은 매개화. 공통수선 EQV d1 · 상중·유형 UP 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "P(s), Q(t) → PQ·u=0, PQ·v=0 → t=1, s=5/3 → |PQ| = 2√3/3 (또는 n ⊥ u, v 로 AB 정사영)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{2\sqrt{3}}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0773.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점·방향벡터를 바꿈. 제약: 꼬인 위치 유지, |PQ| 가 √3 계열 근호 분수로 정리되게(n=(1,−1,−1) 류 작은 법선), 매개변수가 분수여도 됨(단답형). 부호 함정(1−z)은 유지 가능."
    creative: "(1) 두 직선에 모두 수직인 벡터를 먼저 구하는 풀이를 요구해 정사영 골조로 바꾸기(I-RT d1 · ★3) (2) 거리를 주고 l2 의 방향 성분 하나를 역으로(I-BW d1 · ★4) (3) 정육면체의 꼬인 모서리·대각선을 좌표로 옮겨 거리 구하기(I-RT d2 · ★4) (4) 두 직선을 포함하는 평행한 두 평면 사이의 거리로 해석하게 하면 I-EQV d2 → ★4."
```

### 유형 UP 20 평면에 대하여 대칭인 점

```yaml
- id: RPM-GEO-0774
  page: 115
  vendor_label: "유형 UP 20 평면에 대하여 대칭인 점"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    두 점 A(2,−1,0), B(4,1,2) 가 평면 ax+by+cz−4=0 에 대하여 대칭일 때 a+b+c. 5지선다.
  category: "대칭 → 법선 ∥ AB=(2,2,2) · 중점 (3,0,1) 이 평면 위 → x+y+z−4=0"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면에 대하여 대칭인 두 점 → 평면의 방정식(수직이등분면)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    대칭이면 AB 가 평면에 수직이고 AB 의 중점이 평면 위. 법선 (1,1,1) 이므로 x+y+z+d=0, 중점 (3,0,1) 대입 d=−4 → 상수항 −4 와 그대로 맞아 a=b=c=1, 합 3. 두 조건을 순서대로 대입하는 두 단계·계산 한 줄. 유형 UP 출발 ★3 이나 통찰 0·M_total 4 → −1 → ★2. 상수항이 −4 로 고정돼 비례 상수 확인(T-단위)이 유일한 주의점.
  tier: star_2
  mechanism_primary: "대칭 ↔ AB ⊥ α ∧ 중점 ∈ α → 법선 (1,1,1) · 중점 (3,0,1) → x+y+z−4=0 → a+b+c=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0774.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 좌표를 바꿈. 제약: AB 성분이 법선으로 쓰기 좋게 작은 정수, 중점을 대입한 상수항이 주어진 −4 와 비례하도록 A, B 를 잡아야 함(비례 상수가 1 이 아니면 a, b, c 가 분수 → 정수 되게 스케일 선택)."
    creative: "(1) 평면을 주고 대칭점 B 를 묻기(0776 골조 · ★2) (2) 구의 대칭이동으로 바꾸면 중심 대칭 환원(0775 · ★2) (3) 대칭점이 좌표축 위에 있도록 하는 조건으로 뒤집으면 I-BW d1 → ★3 (4) 대칭 평면이 원점을 지나는 ax+by+cz=0 꼴로 두면 상수항 조건이 비례 확인으로 바뀜(★2)."
```

```yaml
- id: RPM-GEO-0775
  page: 115
  vendor_label: "유형 UP 20 평면에 대하여 대칭인 점"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    구 (x+5)^2+(y−4)^2+(z−3)^2=1 을 평면 α 에 대하여 대칭이동한 구가 (x−3)^2+y^2+(z−1)^2=1 일 때 α 의 방정식.
  category: "구의 대칭 → 중심 (−5,4,3)↔(3,0,1) 의 대칭 → 수직이등분면"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면에 대하여 대칭인 구 → 중심의 대칭 → 평면의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    반지름이 같으므로 두 구의 대칭 = 두 중심 C1(−5,4,3), C2(3,0,1) 의 대칭. 법선 ∥ C1C2=(8,−4,−2) → (4,−2,−1), 중점 (−1,2,2) 대입 → 4x−2y−z+10=0. 「도형의 대칭이동 = 중심의 대칭이동」은 정의 수준의 환원이라 통찰로 세지 않음. 중 · 유형 UP 이나 통찰 0·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "구 ↔ 중심 환원 → 법선 ∥ C1C2 = (4,−2,−1) · 중점 (−1,2,2) → 4x−2y−z+10=0"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4x-2y-z+10=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0775.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 중심을 바꿈(반지름은 같게). 제약: C1C2 를 약분한 법선이 작은 정수, 중점이 정수·반정수. 반지름을 다르게 주면 대칭이 성립하지 않으므로 「접한다」 등 다른 문제가 됨."
    creative: "(1) α 의 방정식 대신 α 가 좌표축과 만나는 점·절편을 묻기(★2) (2) 구 하나와 평면을 주고 대칭이동한 구의 방정식(★2 · 중심 대칭점 계산) (3) 대칭 평면이 점 (1,1,k) 를 지날 때 k 처럼 평면 위의 점 조건으로 미지수 하나(★2) (4) 두 구가 평면 α 에 대해 대칭이면서 동시에 외접하도록 하는 조건(I-CON d1 · ★3)."
```

```yaml
- id: RPM-GEO-0776
  page: 115
  vendor_label: "유형 UP 20 평면에 대하여 대칭인 점"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    점 A(1,1,0) 을 평면 x+y+z+1=0 에 대하여 대칭이동한 점 A'(a,b,c) 에 대하여 abc. 5지선다.
  category: "A 를 지나 법선 방향 직선 → 평면과의 교점 H → A' = 2H − A"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면에 대하여 대칭인 점의 좌표(수선의 발 → 2H−A)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A+t(1,1,1) 을 평면에 대입 3t+3=0 → t=−1 → H(0,0,−1). A'=2H−A=(−1,−1,−2) → abc=−2. 수선의 발 → 중점 공식의 표준 세 단계. 상중·유형 UP 출발 ★3 이나 통찰 0·M_total 5 → −1 → ★2. 부호(−1,−1,−2 의 곱)만 조심.
  tier: star_2
  mechanism_primary: "A + t·n 을 평면에 대입 → t=−1 → H(0,0,−1) → A' = 2H − A = (−1,−1,−2) → abc = −2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0776.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 와 평면을 바꿈. 제약: 수선의 발 매개변수 t 가 정수·반정수(A 의 평면값이 |n|^2 으로 나눠떨어지게), A' 좌표 정수."
    creative: "(1) A' 대신 선분 AA' 의 길이(= 2×점-평면 거리 · 0793 골조 · ★2) (2) 대칭점을 이용해 평면 위의 점 P 에 대한 AP+BP 최솟값(0806 골조 · I-SYM d2 · ★3~4) (3) 대칭이동한 직선의 방정식(두 점 대칭 · ★3) (4) 평면 계수에 미지수를 두고 대칭점 조건으로 역산(I-BW d1 · ★3)."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-GEO-0777
  page: 116
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    좌표평면의 점 A(2,6) 과 직선 l: (x−5)/2 = y−5 위의 점 P 에 대하여 AP 가 l 의 방향벡터와 수직일 때 |OP|. 5지선다.
  category: "P(5+2t, 5+t) → AP·(2,1)=0 → t=−1 → P(3,4) → |OP|=5"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "점에서 직선에 내린 수선의 발(평면 · 매개화 · 내적 0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P(5+2t, 5+t), AP=(3+2t, −1+t), AP·(2,1)=5t+5=0 → t=−1 → P(3,4), |OP|=5. 평면 직선에서 수선의 발을 매개화로 구하는 세 단계. 기출이지만 통찰 없음 → +0. 시험에 꼭 출발 ★2 유지(M_total 4).
  tier: star_2
  mechanism_primary: "P 매개화 → AP·d = 0 → t=−1 → P(3,4) → |OP| = 5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0777.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 와 직선(점·방향)을 바꿈. 제약: t 가 정수, P 가 |OP| 정수(피타고라스 쌍 (3,4)·(6,8)·(5,12))가 되게."
    creative: "(1) |OP| 대신 점 A 와 직선 사이의 거리 |AP| 를 묻기(★2) (2) 공간 직선으로 옮기면 0784 골조(★2) (3) 수선의 발 P 가 원점과 이루는 삼각형 OAP 의 넓이(★2) (4) A 의 좌표에 미지수를 두고 P 가 주어졌을 때 역산(I-BW d1 · ★3)."
```

```yaml
- id: RPM-GEO-0778
  page: 116
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    점 (1,4,0) 을 지나고 직선 (x+1)/3 = (y−2)/2 = 3−z 에 평행한 직선이 zx평면과 만나는 점 (a,b,c) 에 대하여 a+b+c.
  category: "방향 (3,2,−1) 공유 → (1+3t, 4+2t, −t) → zx평면 y=0 → t=−2 → (−5,0,2)"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 점과 방향벡터로 정해지는 직선과 좌표평면의 교점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평행이므로 방향벡터 (3,2,−1)(3−z → −1) 을 그대로 쓰고 (1+3t, 4+2t, −t). zx평면은 y=0 → t=−2 → (−5,0,2) → 합 −3. 두 단계·계산 한 줄이지만 함정 두 종류(3−z 의 부호 · zx평면 = y=0 을 z=0 으로 오독)라 Mₜ 2. 시험에 꼭 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "평행 → 방향 (3,2,−1) 공유 → 매개화 → y=0 → t=−2 → (−5,0,2) → a+b+c=−3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-3$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0778.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점·방향벡터·좌표평면(xy·yz·zx)을 바꿈. 제약: 해당 좌표가 0 이 되는 t 가 정수, 방향 부호 함정(3−z 류)은 유지 가능."
    creative: "(1) 좌표평면 대신 주어진 평면과의 교점(0788 골조 · ★2) (2) 세 좌표평면과의 교점이 이루는 삼각형 넓이(★3) (3) 평행 조건 대신 「두 직선과 모두 수직」으로 방향을 찾게 하면 연립 추가(★3) (4) 만나는 점이 원점이 되도록 지나는 점의 미지수 결정(I-BW d1 · ★3)."
```

```yaml
- id: RPM-GEO-0779
  page: 116
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    두 점 A(−4,4,−2), B(3,a,5) 를 지나는 직선이 z축과 만나도록 하는 a. 5지선다.
  category: "AB=(7,a−4,7) → (−4+7t, 4+(a−4)t, −2+7t) → x=y=0 → t=4/7 → a=−3"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점을 지나는 직선이 좌표축과 만날 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    z축 위의 점은 x=y=0. 직선 (−4+7t, 4+(a−4)t, −2+7t) 에서 x=0 → t=4/7, 그때 y=0 → 4+(a−4)·4/7=0 → a=−3 (z=2 는 자유). 「z축과 만난다 ↔ x=0, y=0 을 동시에 만족하는 t 존재」로 읽는 표기 함정 하나(T-표기). 미지수 a 는 마지막 한 식에서 결정(Mₐ 1). 시험에 꼭 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "z축 ↔ x=0 ∧ y=0 → x=0 에서 t=4/7 → y=0 에서 a=−3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0779.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 좌표와 축(x·y·z)을 바꿈. 제약: x=0 에서 t 가 유리수여도 되지만 a 가 정수가 되도록 (a−4)t 의 분모가 약분되게 성분을 맞춤."
    creative: "(1) 축 대신 「평면 x=y 위의 점을 지난다」 등 평면 조건(★2) (2) 직선이 z축과 만나는 점의 좌표까지 묻기(★2) (3) z축과 만나는 조건을 「두 직선(AB 와 z축)이 만난다」의 연립으로 풀게 하면 0781 골조(★2~3) (4) 직선이 z축과 만나지 않도록 하는 a 의 조건(여집합 · ★2)."
```

```yaml
- id: RPM-GEO-0780
  page: 116
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    구 (x−3)^2+(y+2)^2+(z−1)^2=14 와 직선 5−x = (y+1)/2 = (z−1)/2 의 두 교점 A, B 에 대하여 선분 AB 의 길이.
  category: "직선 매개화 → 구에 대입 → 9t^2=9 → t=±1 → A(4,1,3), B(6,−3,−1) → 6"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구와 직선의 두 교점 사이의 거리(현의 길이)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    직선 (5−t, −1+2t, 1+2t)(5−x → 방향 (−1,2,2)) 를 구에 대입하면 (2−t)^2+(1+2t)^2+(2t)^2=14 → 9t^2=9 → t=±1 → A(4,1,3), B(6,−3,−1), AB=(2,−4,−4) → 6. 이차항이 깔끔히 정리돼 계산은 한 줄(Mₖ 1). 중심에서 직선까지 거리 d 로 2√(r^2−d^2) 를 쓰는 갈래도 있으나 길이가 비슷. 통찰 0·M_total 5 → 시험에 꼭 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "직선 매개화 → 구 대입 → t=±1 → 두 교점 → |AB| = 6 (또는 2√(r^2−d^2))"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0780.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구의 중심·반지름과 직선을 바꿈. 제약: 대입 후 이차방정식의 두 근이 정수(또는 근의 차만 깔끔) · 지나는 점을 구의 중심과 같은 평면값으로 두면 일차항이 사라져 계산이 가벼움. 판별식 > 0(두 교점)."
    creative: "(1) AB 의 길이를 주고 반지름 r 를 역으로(I-BW d1 · ★3) (2) 직선이 구에 접하도록 하는 조건(판별식=0 또는 d=r · ★2~3) (3) 교점 대신 「선분 AB 의 중점 = 수선의 발」 관계를 묻기(I-EQV d1 · ★3) (4) 구 위의 점에서 직선까지 거리의 최대·최소(0785 골조 · ★3)."
```
```yaml
- id: RPM-GEO-0781
  page: 116
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    두 직선 (x−1)/2 = 2−y = (3−z)/4, 2−x = (a−y)/2 = (z−2)/3 이 만나도록 하는 상수 a. 5지선다.
  category: "두 직선 매개화 → a 가 없는 x, z 식 연립 → s=1, t=−1 → y 식에서 a=−1"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선이 만날 조건(매개변수 연립 → 나머지 식으로 미지수 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    l1: 점 (1,2,3)·u=(2,−1,−4), l2: 점 (2,a,2)·v=(−1,−2,3). (1+2s, 2−s, 3−4s) = (2−t, a−2t, 2+3t) 에서 a 가 없는 x, z 식 2s+t=1, 4s+3t=1 → s=1, t=−1. y 식 2−s = a−2t → 1 = a+2 → a=−1. 0779 와 같은 「미지수 없는 두 식으로 매개변수를 먼저 정한다」 절차. 부호 함정(2−y, 3−z, 2−x, a−y 네 군데 · T-부호 1). 통찰 0·M_total 5 → 시험에 꼭 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "매개화 → a 가 없는 x, z 식 연립 → s=1, t=−1 → y 식 → a=−1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0781.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 직선의 지나는 점·방향벡터와 미지수 위치(a 가 y 성분)를 바꿈. 제약: 미지수가 없는 두 좌표 식의 연립 해 s, t 가 정수(또는 간단한 분수), 두 방향벡터가 평행하지 않을 것, a 가 선택지 정수로 떨어질 것. 부호 뒤집기(2−y 류)는 유지 가능."
    creative: "(1) 만나는 점의 좌표까지 묻기(0800 골조 · ★2~3) (2) 미지수를 방향벡터 성분에 두면 연립이 비선형이 되어 Mₖ 상승(★3) (3) 「만나지 않도록 하는 a 의 조건」으로 뒤집으면 평행 여부까지 확인(I-MI d1 · ★3) (4) 세 직선이 한 점에서 만날 조건으로 확장(I-CON d1 · ★3)."
```

```yaml
- id: RPM-GEO-0782
  page: 116
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    좌표평면의 두 직선 l1: (x+3)/k = 2−y, l2: −x/3 = (y−3)/4 가 이루는 각의 크기가 45° 일 때 자연수 k. 5지선다.
  category: "방향벡터 (k,−1), (−3,4) → cos 45° = |u·v|/(|u||v|) → 양변 제곱 → 7k^2−48k−7=0 → 자연수 k=7"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선이 이루는 각 → 방향벡터의 미지수 성분(자연수 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    u=(k,−1), v=(−3,4)(2−y → y 성분 −1 · −x/3 → x 성분 −3). |−3k−4|/(5√(k^2+1)) = √2/2 → 2(3k+4)^2 = 25(k^2+1) → 7k^2−48k−7=0 → (7k+1)(k−7)=0 → 자연수 k=7. 각 공식 대입은 표준이나 절댓값 제곱·이차식 인수분해가 붙어 Mₖ 2, k 가 방향벡터 안에 있어 Mₐ 2. −1/7 은 자연수 조건으로 버리는 T-범위 한 종류. 통찰 0 이지만 M_total 7 → 시험에 꼭 범위 안 ★3. [분류 이슈] 통찰 없이 계산·매개변수로만 M_total 7 이라 ★2 후보(계산 마찰형).
  tier: star_3
  mechanism_primary: "u=(k,−1), v=(−3,4) → cos 45° 식 → 제곱 → 7k^2−48k−7=0 → 자연수 k=7"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0782.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각(30°·60°·45°)·l2 의 방향·k 의 위치를 바꿈. 제약: 제곱한 이차방정식이 정수 근 하나 + 기각되는 근 하나로 인수분해되게(45° 는 2(u·v)^2 = |u|^2|v|^2 꼴이라 정수 조정이 쉬움), 자연수(또는 양수) 조건으로 근 하나만 남을 것."
    creative: "(1) 공간 직선으로 옮겨 방향벡터 3성분(★3) (2) 각을 주는 대신 「두 직선이 이루는 예각의 cos 값」을 묻는 순방향(★2) (3) 두 근이 모두 조건을 만족하게 두고 「모든 k 의 합」을 묻기(I-MI d1 · ★3) (4) 직선과 평면이 이루는 각으로 바꾸면 sin 으로 바뀌는 표기 함정 추가(★3)."
```

```yaml
- id: RPM-GEO-0783
  page: 116
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    세 직선 l1: (x−3)/a = 1−y = (z+3)/b, l2: x=y=−z, l3: x+2 = y−1 = (z−1)/c 에 대하여 l1 ∥ l2, l1 ⊥ l3 일 때 abc.
  category: "l1 ∥ l2 → (a,−1,b) = λ(1,1,−1) → a=−1, b=1 · l1 ⊥ l3 → (a,−1,b)·(1,1,c)=0 → c=2"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선의 평행·수직 조건(방향벡터 비례 · 내적 0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    방향벡터 u1=(a,−1,b), u2=(1,1,−1), u3=(1,1,c). 평행: u1=λu2 의 y 성분에서 λ=−1 → a=−1, b=1. 수직: u1·u3 = a−1+bc = −2+c = 0 → c=2. abc=−2. 조건 둘을 각각 표준 공식에 대입하는 두 단계·계산 한 줄. 1−y, −z 의 부호 함정(T-부호 1). 미지수 셋이지만 각각 한 식에서 바로 정해져 Mₐ 2 에 그침. 통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "평행 → 방향벡터 비례 → a=−1, b=1 → 수직 → 내적 0 → c=2 → abc=−2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0783.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "l2, l3 의 방향벡터와 미지수 위치를 바꿈. 제약: 평행 조건에서 비례상수 λ 가 미지수 없는 성분에서 바로 정해질 것(정수), 수직 조건이 c 에 대한 일차식이 되도록 c 를 한 곳에만 둘 것."
    creative: "(1) 평행·수직 대신 「l1 과 l3 이 이루는 각이 60°」로 바꾸면 이차식(0782 골조 · ★3) (2) l1 이 l3 과 만난다는 조건을 추가해 지나는 점의 미지수까지(0781 골조 결합 · I-CON d1 · ★3) (3) 직선 대신 직선-평면의 평행·수직 조건으로 바꾸기(0791 골조 · ★2) (4) 조건 셋(평행·수직·한 점 통과)으로 미지수 셋을 연립하게 하면 Mₛ 3 (★3)."
```

```yaml
- id: RPM-GEO-0784
  page: 117
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    점 P(1,2,1) 에서 직선 (x−1)/2 = 3−y = z+1 에 내린 수선의 발 H 에 대하여 OP·OH 의 값. 5지선다.
  category: "H(1+2t, 3−t, −1+t) → PH·(2,−1,1)=0 → t=1/2 → H(2, 5/2, −1/2) → OP·OH = 13/2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "점에서 직선에 내린 수선의 발(공간 · 매개화 · 내적 0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    직선의 점 (1,3,−1)·d=(2,−1,1). H(1+2t, 3−t, −1+t), PH=(2t, 1−t, t−2), PH·d = 6t−3=0 → t=1/2 → H(2, 5/2, −1/2). OP·OH = 2+5−1/2 = 13/2. 0777 의 공간판에 마지막 내적 한 줄. 3−y 부호와 반정수 좌표가 주의점(T-부호 1). 통찰 0·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "H 매개화 → PH·d = 0 → t=1/2 → H(2, 5/2, −1/2) → OP·OH = 13/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0784.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P 와 직선(점·방향)을 바꿈. 제약: t 가 정수·반정수(PA·d 가 |d|^2 로 나눠떨어지게), 선택지가 분수 등차(7/2~15/2)라면 OP·OH 도 반정수로."
    creative: "(1) OP·OH 대신 점과 직선 사이의 거리 |PH| 를 묻기(★2) (2) H 를 이용해 P 의 직선에 대한 대칭점 P'=2H−P 를 묻기(★2~3) (3) 직선 위의 점 Q 에 대해 |PQ| 최솟값 → 같은 골조를 최소 조건(I-EQV d1)으로 읽게 하기(★3) (4) P 에 미지수를 두고 H 가 주어졌을 때 역산(I-BW d1 · ★3)."
```

```yaml
- id: RPM-GEO-0785
  page: 117
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    구 (x+1)^2+y^2+(z−1)^2=4 위의 점에서 직선 l: x/2 = (2−y)/2 = z−3 까지의 거리의 최댓값 M, 최솟값 m 에 대하여 Mm.
  category: "중심 C(−1,0,1) 에서 l 까지 거리 d=3 (> r=2) → M=d+r=5, m=d−r=1 → Mm=5"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구 위의 점에서 직선까지의 거리 최대·최소를 「중심에서 직선까지의 거리 d ± 반지름」으로 옮김(d > r 확인)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구 위의 점과 직선 사이 거리의 최대·최소(중심-직선 거리 ± r)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    l 의 점 A(0,2,3)·d=(2,−2,1), CA=(1,2,2). CA·d = 2−4+2 = 0 이라 A 가 곧 수선의 발이고 거리 = |CA| = 3. r=2 < 3 이므로 M=5, m=1, Mm=5. 「구 위의 점 → 중심 거리 ± r」 환원이 EQV d1 이고 뒤는 점-직선 거리 한 번. d ≤ r 이면 m=0 이 되는 범위 확인이 T-범위 1. 시험에 꼭 범위 안 통찰 1 → ★3.
  tier: star_3
  mechanism_primary: "구 위 점 → 중심 C 로 환원 → C 에서 l 까지 거리 d=3 → M=d+r, m=d−r → Mm=5"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0785.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구의 중심·반지름과 직선을 바꿈. 제약: d > r(직선이 구 밖) 유지, d 가 정수가 되게 CA 와 d 를 잡음(CA ⊥ d 로 두면 |CA| 가 곧 거리라 계산이 가장 가벼움 · 아니면 √(|CA|^2−(CA·d̂)^2)). Mm = d^2−r^2 이므로 곱이 정수."
    creative: "(1) 직선 대신 평면까지의 거리 최대·최소(★2~3 · 점-평면 거리 공식) (2) d < r 로 바꿔 직선이 구를 뚫게 하면 m=0 · 현의 길이(0780 골조)와 결합(I-MI d1 · ★3) (3) Mm 값을 주고 반지름 r 를 역산(I-BW d1 · ★3~4) (4) 구 위의 두 점 P, Q 와 직선 위의 점 R 로 |PR|+|QR| 최소(대칭 골조 · ★4)."
```

```yaml
- id: RPM-GEO-0786
  page: 117
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    점 A(1,2,−1) 에서 평면 α 에 내린 수선의 발이 H(2,1,1) 이고 점 (k,1,0) 이 α 위에 있을 때 k. 5지선다.
  category: "법선 = AH = (1,−1,2) · H 통과 → x−y+2z−3=0 → (k,1,0) 대입 → k=4"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수선의 발로 평면 결정(법선 = AH · 발 통과) → 평면 위의 점 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수선의 발이면 AH ⊥ α 이므로 법선 (1,−1,2), 평면은 H 를 지나 (x−2)−(y−1)+2(z−1)=0 → x−y+2z−3=0. (k,1,0): k−1−3=0 → k=4. 정의(수선의 발 → 법선·지나는 점)를 그대로 쓰는 두 단계·계산 한 줄. 지나는 점을 A 로 잘못 두는 것이 함정(T-표기 1). 통찰 0·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "수선의 발 → 법선 AH=(1,−1,2), H ∈ α → x−y+2z−3=0 → (k,1,0) 대입 → k=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0786.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, H 와 평면 위 점의 형태를 바꿈. 제약: AH 성분이 작은 정수, 대입 결과 k 가 선택지 정수."
    creative: "(1) k 대신 점 A 와 평면 사이의 거리 |AH| 나 A 의 대칭점(0776 골조 · ★2) (2) H 를 미지수로 두고 「H 가 평면 x+y+z=4 위」 같은 조건으로 역산(I-BW d1 · ★3) (3) 수선의 발 대신 「A 를 지나고 α 에 수직인 직선이 α 와 만나는 점」으로 표현을 바꿔 매개화 골조로(★2) (4) 평면 α 가 원점을 지날 조건으로 A 의 좌표 결정(★3)."
```

```yaml
- id: RPM-GEO-0787
  page: 117
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    네 점 A(1,2,1), B(2,3,2), C(−3,4,k), D(1,1,2) 가 한 평면 위에 있을 때 k. 5지선다.
  category: "A, B, D 로 평면 결정(n ⊥ AB, AD → n=(2,−1,−1)) → 2x−y−z+1=0 → C 대입 → k=−9"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "네 점이 한 평면 위에 있을 조건(세 점의 평면 → 네 번째 점 대입)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB=(1,1,1), AD=(0,−1,1). 법선 n=(p,q,r) 에 n·AB=0, n·AD=0 → p+q+r=0, q=r → n=(2,−1,−1). A 통과: 2x−y−z+1=0. C 대입 −6−4−k+1=0 → k=−9. 미지수 없는 세 점으로 평면을 먼저 만드는 선택이 유일한 판단이고(정의 수준), 3변수 2식에서 법선을 잡는 계산이 Mₖ 2. AC = sAB + tAD 로 놓는 갈래도 같은 길이. 통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "k 없는 세 점 A, B, D → 법선(내적 0 두 식) → 평면 2x−y−z+1=0 → C 대입 → k=−9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0787.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 점을 바꿈. 제약: 미지수 없는 세 점이 한 직선 위에 있지 않을 것, 법선이 작은 정수로 약분될 것, k 가 선택지 정수."
    creative: "(1) k 대신 네 점이 이루는 평면의 방정식이나 원점과의 거리(★2) (2) 미지수를 두 점에 나눠 두고 조건 하나를 더 주면 연립(I-CON d1 · ★3) (3) 「네 점이 한 평면 위」를 「AC 가 AB, AD 의 일차결합」으로 읽게 하면 벡터 표현 전환(I-RT d1 · ★3) (4) 네 점이 한 평면 위에 있지 않을 때 사면체 부피로 확장하면 교육과정 밖 — 피함."
```

```yaml
- id: RPM-GEO-0788
  page: 117
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    평면 3x−2y+z=6 과 직선 (x−3)/2 = (y−1)/3 = z+2 의 교점 P 에 대하여 선분 OP 의 길이. 5지선다.
  category: "직선 매개화 → 평면 대입 → t=1 → P(5,4,−1) → |OP| = √42"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 평면의 교점(매개화 대입)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (3+2t, 1+3t, −2+t) 를 평면에 넣으면 5+t=6 → t=1 → P(5,4,−1) → |OP| = √(25+16+1) = √42. 매개화·대입·거리 세 단계가 모두 표준이고 계산 한 줄. z+2 의 부호(T-부호 1)만 주의. 통찰 0·M_total 4 이지만 단계가 셋이라 0777 과 같이 ★2 유지(공식 한 번짜리 ★1 과 구분).
  tier: star_2
  mechanism_primary: "직선 매개화 → 평면 대입 → t=1 → P(5,4,−1) → |OP| = √42"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0788.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평면과 직선을 바꿈. 제약: 대입 후 t 가 정수, |OP|^2 이 선택지의 근호(38·40·42·44·46 처럼 등차) 안에 들도록 P 를 먼저 정하고 직선을 거꾸로 만들면 쉬움."
    creative: "(1) |OP| 대신 교점 P 와 직선 위 다른 점 사이 거리나 P 에서 좌표평면까지 거리(★2) (2) 평면에 미지수를 두고 교점이 특정 점이 되게 하는 역산(I-BW d1 · ★3) (3) 교점이 존재하지 않을 조건(0791 골조 · ★2) (4) 직선이 평면과 이루는 각까지 함께 묻기(0792 골조 결합 · ★3)."
```

```yaml
- id: RPM-GEO-0789
  page: 117
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    두 평면 4x−2y+4z−1=0, x+2y−2z+5=0 이 이루는 각 θ 에 대하여 cos θ.
  category: "법선 (4,−2,4), (1,2,−2) → cos θ = |n1·n2|/(|n1||n2|) = 8/18 = 4/9"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면이 이루는 각(법선벡터의 내적)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    n1·n2 = 4−4−8 = −8, |n1|=6, |n2|=3 → cos θ = 8/18 = 4/9. 공식 한 번 대입. 내적이 음수라 절댓값을 붙이는 것(예각 θ · T-부호 1)만 주의. 통찰 0·M_total 4·한 단계 → 시험에 꼭 범위 아래 ★1.
  tier: star_1
  mechanism_primary: "법선벡터 → cos θ = |n1·n2|/(|n1||n2|) = 4/9"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{4}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0789.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 법선을 바꿈. 제약: |n1|, |n2| 가 정수(피타고라스 삼중쌍 (1,2,2)·(2,3,6)·(1,4,8) 의 배수)이고 cos 이 기약분수로 정리될 것. 내적을 음수로 두면 절댓값 함정 유지."
    creative: "(1) cos θ 를 주고 평면 계수의 미지수를 역산(0782 골조 · ★2~3) (2) 두 평면이 수직이 되는 조건(★1~2) (3) 두 평면의 교선과 세 번째 평면이 이루는 각(교선 방향 필요 · ★3) (4) 평면-직선의 각으로 바꾸면 sin 으로 바뀌는 표기 함정(★2)."
```

```yaml
- id: RPM-GEO-0790
  page: 117
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    두 점 A(1,−2,3), B(3,−1,2) 에 대하여 선분 AB 의 평면 x+2y+z=1 위로의 정사영의 길이.
  category: "AB=(2,1,−1), n=(1,2,1) → cos(AB, n) = 1/2 → 직선-평면 각 30° → |AB| cos 30° = 3√2/2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "선분의 평면 위로의 정사영의 길이(|AB| cos θ · 법선과의 각으로 환산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB=(2,1,−1)(|AB|=√6), n=(1,2,1)(|n|=√6). |AB·n|/(|AB||n|) = 3/6 = 1/2 → AB 와 법선이 60°, AB 와 평면은 30°. 정사영 길이 = √6·cos 30° = 3√2/2. 각을 법선으로 재고 여각으로 돌리는 표기 전환이 유일한 주의점(T-표기 1) · 계산 한 줄. 정사영 길이 = √(|AB|^2 − (AB·n̂)^2) 갈래도 같은 길이. 통찰 0·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "AB 와 법선 n 의 각 → 평면과의 각 θ=30° → 정사영 길이 = |AB| cos θ = 3√2/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3\sqrt{2}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0790.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 와 평면을 바꿈. 제약: |AB·n|/(|AB||n|) 이 특수각의 sin(1/2·√2/2·√3/2)이 되게 AB, n 을 잡거나, 특수각을 포기하고 √(|AB|^2−(AB·n̂)^2) 로 정리되는 근호를 허용."
    creative: "(1) 삼각형의 정사영 넓이(S cos θ · ★2) (2) 정사영 길이를 주고 평면 법선의 미지수 성분을 역산(I-BW d1 · ★3) (3) 선분 AB 를 직선으로 두고 정사영 직선의 방정식을 묻기(수선의 발 두 개 · ★3) (4) 정사영 도형의 길이비로 평면이 이루는 각을 묻기(★3)."
```
```yaml
- id: RPM-GEO-0791
  page: 117
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    직선 x/2 = (y−1)/3 = (z+2)/(k−3) 과 평면 x+(k−2)y+2z+3=0 이 만나지 않을 때 상수 k. 5지선다.
  category: "만나지 않음 ↔ 평행(d·n=0)이고 포함 아님 → 5k−10=0 → k=2 · 직선 위 점 (0,1,−2) 가 평면 밖 확인"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 평면이 만나지 않을(평행) 조건 → 미지수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    d=(2,3,k−3), n=(1,k−2,2). d·n = 2+3(k−2)+2(k−3) = 5k−10 = 0 → k=2. 이때 직선 위 점 (0,1,−2) 는 0+0−4+3 ≠ 0 이라 평면에 포함되지 않아 「만나지 않음」이 성립. 조건을 「평행 + 미포함」으로 읽는 것은 교과서 정의 수준이라 통찰로 세지 않았고, 포함 여부 확인을 빠뜨리는 것이 T-범위 1. k 가 직선과 평면 양쪽에 있어 Mₐ 2. 통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "만나지 않음 → d ⊥ n → 5k−10=0 → k=2 → 직선 위 점이 평면 밖임을 확인"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0791.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "k 의 위치(방향 성분·법선 성분)와 상수항을 바꿈. 제약: d·n=0 이 k 의 일차식이 되도록 k 를 곱해지는 자리에 같이 두지 말 것, 그 k 에서 직선 위 점이 평면에 포함되지 않아야 함(포함되면 「만나지 않음」이 거짓), k−3 ≠ 0."
    creative: "(1) 「포함된다」 조건으로 바꾸면 d·n=0 과 점 대입 두 식의 연립(I-CON d1 · ★3) (2) 만나지 않는 k 와 수직인 k 를 함께 묻기(★2~3) (3) d·n=0 이 k 의 이차식이 되게 k 를 양쪽 곱 자리에 두고 두 해 중 포함되는 쪽을 기각(I-VF d1 · ★3) (4) 평행할 때 직선과 평면 사이의 거리까지 묻기(★3)."
```

```yaml
- id: RPM-GEO-0792
  page: 118
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    직선 l: (x−2)/3 = (y−3)/2 = z−1 과 평면 α: 2x−y−4z+3=0 의 위치 관계(포함·평행·수직·30°·60°) 중 옳은 것. 5지선다.
  category: "d·n = 6−2−4 = 0 → 평행 또는 포함 → 직선 위 점 (2,3,1) 대입 = 0 → 포함"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 평면의 위치 관계 판정(내적 0 → 포함·평행 구분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    d=(3,2,1), n=(2,−1,−4), d·n=0 이므로 수직·각 보기는 즉시 탈락. 직선의 점 (2,3,1) 을 대입하면 4−3−4+3=0 → 평면 위 → 포함(①). 「d·n=0 이면 평행」에서 멈추면 ② 를 고르게 되는 것이 함정(T-범위 1). 두 단계·계산 한 줄. 통찰 0·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "d·n=0 → 평행 or 포함 → 직선 위 점 대입 = 0 → 포함"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0792.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 점·방향과 평면을 바꾸되 정답 보기를 바꿀 수 있음. 제약: 포함이 답이면 점이 평면 위 + d·n=0, 평행이 답이면 d·n=0 + 점이 평면 밖, 30°/60° 가 답이면 |d·n|/(|d||n|) = 1/2 또는 √3/2."
    creative: "(1) 같은 보기 구조로 답을 「60°」로 바꿔 sin 계산을 요구(★2) (2) ㄱㄴㄷ 합답형으로 두 직선·평면 관계를 동시에 판정(I-MI d1 · ★3) (3) 평면 계수에 미지수를 두고 「포함되도록 하는 k」로 뒤집기(I-CON d1 · ★3) (4) 직선-직선 위치 관계로 바꾸면 0805 골조(★3)."
```

```yaml
- id: RPM-GEO-0793
  page: 118
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    점 A(2,−1,1) 과 평면 x−y+2z+1=0 에 대하여 대칭인 점 A' 에 대하여 선분 AA' 의 길이.
  category: "AA' = 2 × (A 와 평면 사이 거리) = 2·6/√6 = 2√6"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면에 대한 대칭점까지의 거리(= 2 × 점-평면 거리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A' 은 A 에서 평면에 내린 수선의 발 H 에 대해 2H−A 이므로 AA' = 2·AH. AH = |2+1+2+1|/√6 = √6 → AA' = 2√6. 수선의 발을 실제로 구해(t=−1 → H(1,0,−1), A'(0,1,−3)) 거리를 재도 같은 답. 「대칭 → 거리 2배」 환원은 정의 수준이라 통찰로 세지 않음. 통찰 0·M_total 4 이나 환원 한 걸음이 있어 공식 한 번짜리 ★1 보다 위 → ★2.
  tier: star_2
  mechanism_primary: "대칭점 A' = 2H − A → AA' = 2·d(A, α) = 2·√6 = 2√6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\sqrt{6}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0793.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 와 평면을 바꿈. 제약: |평면값|/|n| 이 √(정수) 로 정리되게(평면값이 |n|^2 의 약수 배), 수선의 발을 구하는 풀이도 정수로 떨어지게 하려면 평면값이 |n|^2 으로 나눠떨어질 것."
    creative: "(1) A' 의 좌표(0776 골조 · ★2) (2) AA' 의 중점이 놓이는 조건으로 평면의 미지수 결정(I-BW d1 · ★3) (3) A' 과 다른 점 B 사이 거리로 최단 경로(0806 골조 · I-SYM d2 · ★3~4) (4) 직선에 대한 대칭점으로 바꾸면 수선의 발 매개화(0784 골조 · ★3)."
```

```yaml
- id: RPM-GEO-0794
  page: 118
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    두 평면 3x+4y−5z−7=0, 3x+4y−5z+3=0 사이의 거리. 5지선다.
  category: "법선 동일(평행) → 상수항 차 / |n| = |−7−3|/√50 = √2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행한 두 평면 사이의 거리"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    법선이 같으므로 평행. 상수항 차 |−7−3| = 10 을 |n| = √50 = 5√2 로 나눠 √2(또는 한 평면 위의 점을 다른 평면의 거리 공식에 대입). 공식 한 번. 상수항 부호 차(−7 과 +3 · T-부호 1)가 유일한 주의점. 통찰 0·M_total 4·한 단계 → ★1.
  tier: star_1
  mechanism_primary: "평행 확인 → |d1−d2|/|n| = 10/(5√2) = √2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0794.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "법선과 두 상수항을 바꿈. 제약: 법선이 같거나 비례(비례면 먼저 맞춰야 하는 T-단위 함정 추가 가능), |d1−d2|/|n| 이 선택지 근호로 정리될 것."
    creative: "(1) 법선을 비례(6x+8y−10z+…)로 주어 정규화 함정 추가(★2) (2) 거리를 주고 상수항 미지수 두 값 중 조건(양수)으로 하나 고르기(0796 골조 · ★2) (3) 두 평면 사이에 끼인 구의 반지름·중심 궤적(★3) (4) 두 평면과 평행하고 거리가 같은 평면(중간 평면)의 방정식(★2)."
```

```yaml
- id: RPM-GEO-0795
  page: 118
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    직선 x−1 = (y−1)/2 = z−2 와 점 (2,1,−1) 을 모두 포함하는 평면과 점 (4,1,7) 사이의 거리. 5지선다.
  category: "법선 ⊥ d=(1,2,1), ⊥ PQ=(1,0,−3) → n=(3,−2,1) → 3x−2y+z−3=0 → 거리 14/√14 = √14"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 점을 포함하는 평면의 방정식 → 점과 평면 사이의 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    직선의 점 P(1,1,2)·d=(1,2,1), Q(2,1,−1), PQ=(1,0,−3). 법선 n 은 d, PQ 에 모두 수직 → a+2b+c=0, a−3c=0 → n=(3,−2,1) → 3x−2y+z−3=0. (4,1,7) 까지 거리 |12−2+7−3|/√14 = √14. 평면 결정(3변수 2식 법선)과 거리 공식 두 유형을 이어 붙인 절차라 단계는 다섯이지만 각 단계가 표준. 직선 위 점을 평면의 점으로 써야 하는 T-표기 1. 통찰 0·M_total 6 → ★2(단계 수로는 ★3 후보이나 이슈로 두지 않음).
  tier: star_2
  mechanism_primary: "직선의 점·방향 + 외부점 → 법선(내적 0 두 식) n=(3,−2,1) → 3x−2y+z−3=0 → 점-평면 거리 √14"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0795.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선·포함점·외부점을 바꿈. 제약: 포함점이 직선 위에 있지 않을 것, 법선이 작은 정수로 약분될 것, 거리가 선택지 근호(√10~4)로 떨어지게 외부점의 평면값이 |n| 의 배수·√ 꼴로 맞춰질 것."
    creative: "(1) 거리 대신 평면의 방정식이나 평면과 좌표축의 교점(★2) (2) 「평행한 두 직선을 포함하는 평면」으로 바꾸면 방향 하나 + 두 점(★2) (3) 외부점 대신 「직선과 평면 사이의 거리」(직선 ∥ 평면 조건 확인 추가 · ★3) (4) 거리를 주고 외부점의 미지수 좌표 두 값 중 조건으로 하나 고르기(I-VF d1 · ★3)."
```

```yaml
- id: RPM-GEO-0796
  page: 118
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    구 (x−1)^2+(y−1)^2+(z−1)^2=36 과 평면 x+2y−2z+d=0 이 접할 때 양수 d. 5지선다.
  category: "접함 ↔ 중심-평면 거리 = r → |1+d|/3 = 6 → d=17 또는 −19 → 양수 17"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구와 평면이 접할 조건(중심-평면 거리 = 반지름) → 미지수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중심 (1,1,1), r=6. |1+2−2+d|/√9 = 6 → |d+1| = 18 → d=17, −19 → 양수 d=17. 접함을 거리 = 반지름으로 옮기는 것은 교과서 정의 수준. 절댓값에서 두 값이 나와 양수 조건으로 하나를 고르는 T-범위 1. 통찰 0·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "접함 ↔ d(C, α) = r → |d+1|/3 = 6 → d=17, −19 → 양수 17"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0796.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심·반지름·법선·부호 조건을 바꿈. 제약: |n| 이 정수(법선 (1,2,2)·(2,3,6) 류), 중심의 평면값 + d 가 ±r|n| 이 되는 두 d 중 하나만 조건(양수/음수)을 만족할 것."
    creative: "(1) 두 d 모두 양수가 되게 두고 「모든 d 의 합」을 묻기(I-MI d1 · ★2~3) (2) 접점의 좌표까지(수선의 발 · 0797 골조 · ★3) (3) 「만나서 생기는 원의 반지름이 k」로 바꾸면 √(r^2−d^2) 관계(★3) (4) 두 구에 동시에 접하는 평면(0803 골조 · I-VF d1 · ★3)."
```

```yaml
- id: RPM-GEO-0797
  page: 118
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    점 A(1,1,−1) 의 위치벡터 a 에 대하여 |p−a|=4 를 만족시키는 점 P 의 도형(구)과 평면 2x−2y+z−8=0 이 만나서 생기는 원의 중심 H 의 좌표.
  category: "|p−a|=4 → 중심 A·r=4 인 구 → 교원의 중심 = A 에서 평면에 내린 수선의 발 → t=1 → H(3,−1,0)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구와 평면이 만나 생기는 원의 중심을 「구의 중심에서 평면에 내린 수선의 발」로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구와 평면의 교원의 중심(중심에서 평면에 내린 수선의 발)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    |p−a|=4 는 중심 A(1,1,−1)·반지름 4 인 구. 구와 평면이 만나 생기는 원의 중심은 구의 중심에서 평면에 내린 수선의 발이므로 A+t(2,−2,1) 을 대입 9t−9=0 → t=1 → H(3,−1,0). 벡터 조건을 구로 읽는 표기 전환(T-표기 1)은 정의 수준이고, 「교원의 중심 = 수선의 발」로 옮기는 EQV d1 이 유형의 핵심. 뒤는 수선의 발 한 번(거리 3 < 4 라 실제로 만남). 중요 태그·통찰 1 → 시험에 꼭 범위 안 ★3.
  tier: star_3
  mechanism_primary: "|p−a|=4 → 구(A, 4) → 교원의 중심 = 수선의 발 → A + t·n 대입 → t=1 → H(3,−1,0)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$(3,\,-1,\,0)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0797.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, r, 평면을 바꿈. 제약: 수선의 발 매개변수 t 가 정수(A 의 평면값이 |n|^2 으로 나눠떨어지게), 평면이 구와 실제로 만나도록 중심-평면 거리 < r(여기서는 3 < 4)."
    creative: "(1) 원의 반지름 √(r^2−d^2) 나 넓이까지 묻기(★3) (2) 원의 중심을 주고 평면의 상수항·반지름을 역산(I-BW d1 · ★3) (3) 원 위의 점에서 다른 평면까지 거리 최대·최소(0785 골조 결합 · ★4) (4) 벡터 조건을 |p−a|=|p−b| 로 바꿔 수직이등분면과 구의 교원(★3)."
```

```yaml
- id: RPM-GEO-0798
  page: 118
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    꼬인 위치의 두 직선 l1: x/2 = y = −z/2, l2: x+1 = 3−y = (z+1)/2 위의 점 P, Q 에 대하여 선분 PQ 의 길이의 최솟값. 5지선다.
  category: "P(s), Q(t) 매개화 → PQ ⊥ u, PQ ⊥ v → t+3s=1, 2t+s=2 → s=0, t=1 → |PQ| = √5"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "PQ 의 길이 최소 ↔ PQ 가 두 직선에 동시에 수직(공통수선) — 최소 조건을 내적 0 두 식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "꼬인 위치에 있는 두 직선 사이의 거리(공통수선 · 내적 0 연립)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    l1: 원점·u=(2,1,−2), l2: 점 (−1,3,−1)·v=(1,−1,2). P(2s, s, −2s), Q(−1+t, 3−t, −1+2t). PQ·u=0 → t+3s=1, PQ·v=0 → 2t+s=2 → s=0, t=1 → P=O, Q(0,2,1) → |PQ| = √5. 「최솟값 → 공통수선」 환원(EQV d1)이 핵심이고 뒤는 2원 연립. −z/2, 3−y 의 부호 함정(T-부호 1). 0771 과 같은 골조 · 통찰 1·M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "PQ 최소 ↔ PQ ⊥ u, PQ ⊥ v → 매개변수 연립 → s=0, t=1 → |PQ| = √5"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0798.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점·방향벡터를 바꿈. 제약: 꼬인 위치 유지(비평행·비교차), 연립 해 s, t 정수, |PQ| 가 선택지 근호(√3·2·√5·√6·2√2)로 떨어질 것. 한 직선을 원점 통과로 두면 계산이 가벼움."
    creative: "(1) 최솟값을 주는 P, Q 좌표까지(0772 골조 · ★3) (2) 두 직선에 수직인 방향으로 정사영해 한 줄 계산하는 갈래를 열기(I-SC d1 · ★3~4) (3) 최솟값을 주고 방향벡터 성분을 역산(I-BW d1 · ★4) (4) 정육면체 모서리·대각선의 꼬인 위치 거리로 좌표화(I-RT d2 · ★4)."
```

```yaml
- id: RPM-GEO-0799
  page: 118
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    두 구 x^2+y^2+z^2−10x−6y+2z+34=0, x^2+y^2+z^2−6x+2y−2z+7=0 의 중심이 평면 ax+by+cz=6 에 대하여 대칭일 때 a+b+c.
  category: "완전제곱 → 중심 (5,3,−1), (3,−1,1) → 법선 ∥ (1,2,−1) · 중점 (4,1,0) → x+2y−z=6 → a+b+c=2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면에 대하여 대칭인 두 점 → 평면의 방정식(수직이등분면)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    일반형을 완전제곱으로 정리하면 중심 C1(5,3,−1), C2(3,−1,1). 대칭이면 법선 ∥ C1C2 = (−2,−4,2) → (1,2,−1), 중점 (4,1,0) 을 지나 x+2y−z = 6 — 상수항이 주어진 6 과 그대로 맞아 a=1, b=2, c=−1 → 합 2. 0774 골조에 완전제곱 한 단계가 붙은 절차. 상수항 비례 확인이 T-단위 1. 통찰 0·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "완전제곱 → 두 중심 → 법선 ∥ C1C2, 중점 통과 → x+2y−z=6 → a+b+c=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0799.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 구의 중심(일반형 계수)을 바꿈. 제약: C1C2 를 약분한 법선이 작은 정수, 중점을 대입한 상수항이 주어진 6 과 비례하도록(비례상수 ≠ 1 이면 a, b, c 가 분수) 중심을 먼저 정하고 일반형을 거꾸로 만들 것. 반지름은 대칭과 무관(일반형 상수항 자유)."
    creative: "(1) 두 구 자체가 대칭(반지름 같음)이라는 조건으로 바꾸면 0775 골조(★2) (2) 대칭면이 원점을 지날 조건으로 구의 계수 미지수 결정(I-BW d1 · ★3) (3) 대칭면과 두 구의 위치 관계(접함·만남)까지 묻기(★3) (4) 대칭면 위의 점 P 에 대해 |PC1|+|PC2| 최소(0806 골조 · ★3)."
```

### 서술형 주관식

```yaml
- id: RPM-GEO-0800
  page: 119
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "서술형 주관식"
  summary: |
    두 점 A(1,2,3), B(3,1,−1) 을 지나는 직선과 두 점 C(2,−1,2), D(1,−3,5) 를 지나는 직선의 교점의 좌표. 서술형.
  category: "AB=(2,−1,−4), CD=(−1,−2,3) → 매개화 → x, y 식 연립 s=1, t=−1 → z 식 확인 → (3,1,−1)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선의 교점(매개변수 연립 · 나머지 식 확인)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    (1+2s, 2−s, 3−4s) = (2−t, −1−2t, 2+3t). x, y 식 2s+t=1, s−2t=3 → s=1, t=−1, z 식 3−4 = 2−3 = −1 로 성립 → 교점 (3,1,−1)(점 B 자체). 두 점으로 방향을 만들고 2원 연립 뒤 세 번째 식을 확인하는 서술 절차 · 확인을 빠뜨리면 감점(T-범위 1). 통찰 0·M_total 6 → 서술형 출발 ★3 유지(−1 조건인 M_total ≤ 5 아님).
  tier: star_3
  mechanism_primary: "두 점 → 방향벡터 → 매개화 → 두 식 연립 → 세 번째 식 확인 → 교점 (3,1,−1)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$(3,\,1,\,-1)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0800.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 점을 바꿈. 제약: 두 직선이 실제로 만나도록(세 번째 식 성립) 교점을 먼저 정하고 각 직선의 두 점을 그 위에서 고를 것, 연립 해 정수. 교점이 주어진 점(B)과 겹치는 우연은 피해도 됨."
    creative: "(1) 교점을 지나고 두 직선에 수직인 직선의 방정식(법선 연립 · ★3) (2) 두 직선을 포함하는 평면의 방정식(★3) (3) D 에 미지수를 두고 만날 조건(0781 골조 · ★3) (4) 만나지 않게 바꿔 위치 관계 판정(0805 골조 · I-VF d1 · ★3)."
```
```yaml
- id: RPM-GEO-0801
  page: 119
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    두 직선 x/p = (y+2)/3 = (z+1)/5, x+1 = (y−1)/q = (3−z)/2 가 서로 수직이 되도록 하는 자연수 p, q 의 순서쌍 (p,q) 의 개수. 서술형.
  category: "방향 (p,3,5), (1,q,−2) → 내적 0 → p+3q=10 → 자연수 해 (7,1), (4,2), (1,3) → 3"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선의 수직 조건(내적 0) → 미지수의 자연수 해 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    u=(p,3,5), v=(1,q,−2)(3−z → −2). u·v = p+3q−10 = 0 → p = 10−3q. 자연수 q=1,2,3 에서 p=7,4,1, q ≥ 4 면 p ≤ −2 로 탈락 → 3쌍. 수직 조건 한 식에 일차 부정방정식의 자연수 열거가 붙은 절차(열거·범위 절단은 공통수학 표준이라 통찰로 세지 않음). 3−z 부호(T-부호 1)를 놓치면 p+3q+10=0 이 되어 해가 없어지므로 답이 바뀜. 미지수 둘이 방향벡터 안에 있어 Mₐ 2. 통찰 0·M_total 6 → 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: "수직 → u·v=0 → p+3q=10 → 자연수 (p,q) 열거 → 3쌍"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0801.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "방향벡터의 고정 성분과 상수(10)를 바꿈. 제약: 일차 부정방정식 p + kq = N 의 자연수 해가 유한(계수 양수)하고 개수가 한 자리 수, 부호 함정(3−z 류)은 유지 가능."
    creative: "(1) 개수 대신 p+q 의 최댓값·최솟값(★3) (2) 수직 대신 「이루는 각이 60°」로 바꾸면 이차 부정방정식(★4) (3) 순서쌍 조건에 「두 직선이 만난다」를 추가해 교점 조건까지 결합(I-CON d1 · ★4) (4) 직선-평면 수직(방향 ∥ 법선 · 비례식)으로 바꾸기(★2~3)."
```

```yaml
- id: RPM-GEO-0802
  page: 119
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    두 평면 x+y−3z+5=0, x+2y+2z−10=0 의 교선이 xy평면과 만나는 점 A, zx평면과 만나는 점 B 에 대하여 선분 AB 의 길이. 서술형.
  category: "교선 ∩ xy평면 = 두 평면 ∧ z=0 → A(−20,15,0) · 교선 ∩ zx평면 = 두 평면 ∧ y=0 → B(4,0,3) → |AB| = 9√10"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 평면의 교선과 좌표평면의 교점(연립)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    교선의 방정식을 만들 필요 없이 xy평면(z=0)을 두 평면 식에 넣어 x+y=−5, x+2y=10 → A(−20,15,0), zx평면(y=0)에서 x−3z=−5, x+2z=10 → B(4,0,3). AB=(24,−15,3) → √810 = 9√10. 교선을 먼저 구해 매개화하는 갈래도 같은 답이지만 길다 — 「교선 위의 점 = 두 평면을 동시에 만족」으로 바로 연립하는 선택이 절차를 줄이나 표준 범위. 좌표평면 ↔ 좌표 0 대응이 T-표기 1, 큰 수 계산이 Mₖ 2. 통찰 0·M_total 6 → 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: "z=0 을 두 평면에 대입 → A · y=0 을 대입 → B → |AB| = √810 = 9√10"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$9\sqrt{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0802.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 평면과 좌표평면 쌍(xy·yz·zx)을 바꿈. 제약: 두 2×2 연립의 해가 정수, |AB|^2 이 (정수)^2 × (작은 무제곱수) 로 정리될 것, 두 평면이 평행하지 않고 교선이 좌표평면과 실제로 만날 것(교선 방향의 해당 성분 ≠ 0)."
    creative: "(1) 교선의 방정식 자체를 묻기(방향 = 두 법선에 수직 · ★3) (2) 교선과 세 좌표평면의 교점이 이루는 삼각형 넓이(★3~4) (3) 교선이 좌표축과 만나도록 하는 평면 계수 조건(I-BW d1 · ★3) (4) 교선과 원점 사이의 거리(수선의 발 · ★3~4)."
```

```yaml
- id: RPM-GEO-0803
  page: 119
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    두 구 (x−1)^2+y^2+(z+1)^2=4, (x+1)^2+(y−1)^2+(z−4)^2=16 에 동시에 접하고 벡터 a=(1,−2,2) 에 수직인 평면의 방정식. 서술형.
  category: "x−2y+2z+d=0 → 구1 접함 |d−1|=6 → d=7, −5 · 구2 접함 |d+5|=12 → d=7, −17 → 공통 d=7"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구1 접함에서 나온 두 후보 d=7, −5 를 구2 접함 조건으로 재검증해 −5 를 기각하고 공통 d=7 만 남김(검증 없이는 답이 둘)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 구에 동시에 접하는 평면(법선 주어짐 · 거리 = 반지름 두 조건의 공통해)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    법선이 a 이므로 x−2y+2z+d=0. 구1(중심 (1,0,−1), r=2): |1−2+d|/3 = 2 → d=7, −5. 구2(중심 (−1,1,4), r=4): |−1−2+8+d|/3 = 4 → d=7, −17. 두 후보 집합의 공통 d=7 → x−2y+2z+7=0. 접함 → 거리 = 반지름은 정의 수준이나, 한 조건의 두 후보를 다른 조건으로 걸러 하나만 남기는 사후 검증이 답의 본질(VF d1). 서술형 출발 ★3 · 통찰 1·M_total 5 → ★3 유지.
  tier: star_3
  mechanism_primary: "법선 고정 → 구1 접함 → d ∈ {7, −5} → 구2 접함 → d ∈ {7, −17} → 공통 d=7 → x−2y+2z+7=0"
  insight_type: 절차형
  target_cohort: 중상위권
  answer: '$x-2y+2z+7=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-geo/items/0803.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 구의 중심·반지름과 법선을 바꿈. 제약: |n| 정수, 각 구에서 중심의 평면값 ± r|n| 으로 나오는 두 d 중 정확히 하나가 공통(공통이 둘이면 평면이 두 개 · 없으면 불능), 중심을 먼저 잡고 d 를 정한 뒤 반지름을 역산하면 안전."
    creative: "(1) 공통 d 가 둘이 되게 배치해 「두 평면」을 모두 답하게 하기(I-MI d1 · ★3) (2) 법선 조건을 빼고 「두 구에 동시에 접하며 어떤 직선을 포함하는 평면」으로(★4) (3) 접하는 대신 「두 구를 자른 단면의 원 반지름이 같다」로 바꾸면 √(r^2−d^2) 등식(★4) (4) 두 구의 중심을 잇는 선분과 평면의 교점 위치(내분점 · 반지름 비)로 표현 전환(I-RT d1 · ★3~4)."
```

### 실력 Up

```yaml
- id: RPM-GEO-0804
  page: 119
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    세 점 A(4,2,0), B(1,2,3), C(3,−1,2) 에 대하여 ∠ACB 의 이등분선이 점 P(a,b,0) 을 지날 때 a+b. 5지선다.
  category: "CA=(1,3,−2), CB=(−2,3,1), |CA|=|CB|=√14 → 이등분선 방향 = CA+CB = (−1,6,−1) → C+t(−1,6,−1) 에서 z=0 → t=2 → P(1,11,0) → 12"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "|CA|=|CB| 인 이등변 배치를 발견해 이등분선 방향을 CA+CB(= AB 의 중점 방향)로 잡음 — 단위벡터 합 없이 단계 단축"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각형 내각의 이등분선(공간 · 이등변 → 밑변 중점 방향)과 좌표평면의 교점"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    CA=(1,3,−2), CB=(−2,3,1) 의 길이가 모두 √14 로 같으므로 ∠C 의 이등분선은 CA+CB = (−1,6,−1) 방향(= AB 의 중점 (5/2,2,3/2) 를 지남). C(3,−1,2)+t(−1,6,−1) 에서 z=0 → t=2 → P(1,11,0) → a+b=12. 이등변을 못 보면 단위벡터 합 CA/|CA| + CB/|CB| 로 가야 하는데 같은 결과라 벌칙은 없으나, 「길이가 같다 → 중점」의 대칭 발견이 풀이 골조를 정하는 SYM d2. 뒤는 직선 매개화 한 번(Mₖ 1). [분류 이슈] 실력 Up ★4 출발이지만 통찰 1개(d2)·M_total 5 라 ★3 — 라벨 ★3 · ★4 후보 기록.
  tier: star_3
  mechanism_primary: "|CA|=|CB| 발견 → 이등분선 방향 CA+CB=(−1,6,−1) → C+t·(−1,6,−1) → z=0 → P(1,11,0) → a+b=12"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0804.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B, C 를 바꿈. 제약: |CA|=|CB| 를 유지하려면 C 를 AB 의 수직이등분면 위에서 고를 것(아니면 단위벡터 합에 근호가 남아 계산 폭증), CA+CB 의 z 성분 ≠ 0 이고 t 가 정수, a+b 가 선택지 정수."
    creative: "(1) 이등분선이 AB 와 만나는 점(= 중점)이나 그 길이(★3) (2) |CA| ≠ |CB| 로 두되 길이가 정수(예: 3, 6)가 되게 하여 각의 이등분선 정리 AD:DB = CA:CB 로 내분점을 구하게(I-RT d1 · ★3~4) (3) 이등분선이 지나는 점 P 를 주고 C 의 미지수 좌표를 역산(I-BW d1 · ★4) (4) 외각의 이등분선(CA−CB 방향)으로 바꿔 부호 함정 추가(★3)."
```

```yaml
- id: RPM-GEO-0805
  page: 119
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    두 직선 l1: (x−1)/2 = 2−y = z−4, l2: x+2 = (y+1)/2 = (z+3)/3 의 위치 관계(평행·일치·만남·꼬인 위치) 판정. 단답.
  category: "u=(2,−1,1) ∦ v=(1,2,3) → 평행 아님 → 교점 연립 x, y 로 s=−3/5, t=9/5 → z 식 17/5 ≠ 12/5 → 만나지 않음 → 꼬인 위치"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "평행을 배제한 뒤 교점 후보 (s, t) 를 세 번째 식에 재대입해 기각해야 꼬인 위치가 확정 — 검증을 빼면 「만난다」는 오답"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 직선의 위치 관계 판정(평행 → 교점 존재 → 꼬인 위치)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    u=(2,−1,1), v=(1,2,3) 이 비례하지 않아 평행·일치 탈락. (1+2s, 2−s, 4+s) = (−2+t, −1+2t, −3+3t) 의 x, y 식에서 s=−3/5, t=9/5, z 식은 17/5 ≠ 12/5 로 모순 → 만나지 않음 → 꼬인 위치. 「평행 아님 + 만나지 않음 ⇒ 꼬인 위치」의 배제 논리에서 세 번째 식 검증이 결론을 가르는 VF d1(검증 없이는 「만난다」). 분수 연립이 Mₖ 2, 2−y 부호가 T-부호 1. [분류 이슈] 실력 Up ★4 출발이나 통찰 1(d1)·M_total 6·표준 판정 절차라 ★3 — ★4 후보 기록.
  tier: star_3
  mechanism_primary: "u ∦ v → 평행 배제 → 교점 연립(x, y) → s, t → z 식 위배 → 꼬인 위치"
  insight_type: 절차형
  target_cohort: 중상위권
  answer: "꼬인 위치에 있다."
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0805.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 직선의 점·방향을 바꿔 답을 꼬인 위치/만남/평행 중 하나로 설계. 제약: 꼬인 위치가 답이면 비평행 + 세 번째 식 모순, 만남이면 연립 해가 세 식 모두 성립(교점 정수 권장), 평행이면 방향 비례 + 한 점이 다른 직선 밖. 분수 매개변수는 허용."
    creative: "(1) 꼬인 위치일 때 두 직선 사이의 거리까지(0771 골조 결합 · I-EQV d1 · ★3~4) (2) 방향 성분에 미지수 k 를 두고 「만나도록 하는 k」와 「평행하도록 하는 k」를 함께 묻기(I-MI d1 · ★3) (3) 두 직선이 이루는 각까지(★3) (4) ㄱㄴㄷ 합답형으로 세 직선의 쌍별 위치 관계(★3~4)."
```

```yaml
- id: RPM-GEO-0806
  page: 119
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    두 점 A(5,1,1), B(4,−1,−1) 과 평면 α: 2x−2y+z=0 위의 점 P 에 대하여 AP+BP 의 최솟값(A, B 는 α 에 대하여 같은 쪽). 단답.
  category: "B 의 α 대칭점 B' = (0,3,−3) → AP+BP = AP+B'P ≥ AB' = √45 = 3√5"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "같은 쪽 두 점의 경로 최소를 한 점의 평면 대칭점으로 옮겨 직선 거리 AB' 로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "평면 위의 점에 대한 AP+BP 최솟값(대칭점 → 직선 거리)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    같은 쪽이므로 B 를 α 에 대칭이동한 B' 로 바꾸면 BP=B'P, AP+B'P ≥ AB' (등호는 P 가 AB' 과 α 의 교점). B+t(2,−2,1) 대입 9t+9=0 → t=−1 → H(2,1,−2) → B'=2H−B=(0,3,−3). AB' = √(25+4+16) = 3√5. 대칭점 환원(SYM d2)이 풀이 전부이고 뒤는 수선의 발·거리 한 번씩. 같은 쪽 확인(T-범위 1)은 조건에 주어짐. [분류 이슈] 실력 Up ★4 출발이나 통찰 1(d2)·M_total 5·널리 알려진 골조라 ★3 — ★4 후보 기록.
  tier: star_3
  mechanism_primary: "같은 쪽 → B 의 대칭점 B' (수선의 발 H → 2H−B) → AP+BP ≥ AB' = 3√5"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3\sqrt{5}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-geo/items/0806.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B, 평면을 바꿈. 제약: A, B 가 같은 쪽(평면값 부호 같음), B 의 수선의 발 매개변수 정수(B 의 평면값이 |n|^2 으로 나눠떨어지게), |AB'| 이 √(정수) 로 정리될 것. 다른 쪽에 두면 최솟값은 그냥 AB 가 되어 대칭이 필요 없음(함정 변형)."
    creative: "(1) 최솟값을 주는 P 의 좌표까지(AB' 과 α 의 교점 · ★3~4) (2) 두 점을 서로 다른 쪽에 두고 |AP−BP| 최댓값으로 바꾸기(대칭 방향 반대 · I-SYM d2 · ★4) (3) 평면 대신 직선에 대한 대칭(수선의 발 매개화 · ★4) (4) 최솟값을 주고 평면 상수항을 역산(I-BW d1 · ★4)."
```

## 표본 판정 요약 (36문)

- ★ 분포: ★1 2 · ★2 20 · ★3 14 · ★4 0 · ★5 0
- 통찰형(depth 2 이상) 2(0804 · 0806) · 절차형 34 · premium 0 · 통찰이 잡힌 블록 10(EQV d1 6 = 0771 0772 0773 0785 0797 0798 · VF d1 2 = 0803 0805 · SYM d2 2 = 0804 0806)
- 구역별: 유형 UP 19 ★3 3 · 유형 UP 20 ★2 3 · 시험에 꼭 나오는 문제(23문) ★1 2(0789 0794) / ★2 17 / ★3 4(0782 계산형 · 0785 0797 0798 EQV d1) · 서술형 주관식 ★3 4 · 실력 Up ★3 3
- type_hint 상위: 「두 직선의 만남·평행·수직·각·위치 관계(미지수)」 7(0779 0781 0782 0783 0800 0801 0805) · 「평면 대칭(수직이등분면·대칭점·최단 경로)」 6(0774 0775 0776 0793 0799 0806) · 「구와 직선·평면(교점·접함·거리 최대최소·교원·동시 접평면)」 5(0780 0785 0796 0797 0803) · 「꼬인 위치에 있는 두 직선 사이의 거리(공통수선)」 4(0771 0772 0773 0798) · 「직선과 평면의 교점·위치 관계」 4(0778 0788 0791 0792) · 「점에서 직선·평면에 내린 수선의 발」 3(0777 0784 0786)
- 그림: 0문(figure 전부 none) · 전사 답 36건 재계산 일치

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-GEO-0782 | 통찰 0 인데 Mₖ 2·Mₐ 2 로 M_total 7 → ★3 라벨. 계산 마찰만으로 오른 ★ 라 ★2 후보(질 저하 신호) | ★2 / ★3 |
| RPM-GEO-0804 | 실력 Up(★4 출발)이나 SYM d2 하나·M_total 5 → ★3 판정. 벤더와 1단 차이 | ★3 / ★4 |
| RPM-GEO-0805 | 실력 Up(★4 출발)이나 VF d1 하나·M_total 6·표준 위치 관계 판정 → ★3. 벤더와 1단 차이 | ★3 / ★4 |
| RPM-GEO-0806 | 실력 Up(★4 출발)이나 SYM d2 하나·M_total 5·널리 알려진 대칭 최단 경로 → ★3. 벤더와 1단 차이 | ★3 / ★4 |

유형 UP 20(0774~0776) 세 문항도 유형 UP ★3 출발에서 통찰 0·M_total 4~5 로 ★2 로 내렸으나 1단 차이·규칙(−1 후보) 안이라 표에는 올리지 않았다.

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 따로 세울 유형: 「꼬인 위치 두 직선 사이의 거리(공통수선)」(4문 · EQV d1 이 항상 붙어 ★3 고정) · 「구 위의 점과 직선/평면 사이 거리의 최대·최소(중심 거리 ± r)」(0785) · 「구와 평면의 교원의 중심·반지름(수선의 발)」(0797) · 「두 구에 동시에 접하는 평면(후보 교집합 · VF d1)」(0803) · 「평면 위의 점에 대한 AP+BP 최솟값(대칭점)」(0806 · SYM d2) · 「공간 삼각형 내각의 이등분선(이등변 · 단위벡터 합)」(0804 · SYM d2).
- 통합해도 될 유형: 「두 직선의 만남·평행·수직·이루는 각·위치 관계」(0779 0781 0782 0783 0800 0801 0805)는 모두 「방향벡터 비례·내적·매개변수 연립」 한 골조라 하나의 유형에 하위 항목(만남 조건/미지수/각/위치 판정)으로 두면 됨. 「직선과 평면의 교점·평행·포함·각」(0778 0788 0791 0792)도 「방향·법선 내적 + 점 대입」 한 골조. 「점-직선 수선의 발(평면·공간)」(0777 0784)과 「점-평면 수선의 발 → 평면 결정·대칭점」(0786 0776 0793)은 매개화 골조가 같아 「수선의 발」 하나로 묶고 대상(직선/평면)만 하위로. 「평면에 대한 대칭(점·구·수직이등분면)」(0774 0775 0776 0793 0799)은 「법선 ∥ 두 점 차 · 중점 통과」 한 유형. 「점-평면 거리·평행 평면 거리·대칭점 거리」(0789 0794 0793 0795)는 공식 대입 한 유형(★1~2).
- 별도 표기: 0782 처럼 각 조건에서 미지수를 역산하는 문항은 「두 직선이 이루는 각(순방향 · ★1~2)」과 「각 조건 → 미지수(역방향 · 이차식 · ★3)」로 base ★ 를 나눠 두는 편이 v3.8 산식(계산 마찰은 ★ 상승 신호 아님)과 맞음.
