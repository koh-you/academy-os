---
name: mechanism-데이터-RPM-ALG-06-p1
description: RPM 대수 06 삼각함수의 그래프(1/4 · 교과서 06-1~06-4 + 유형 01~02) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-alg
  section: 06 삼각함수의 그래프
  unit_code: ALG-06
  part: "1/4"
  extract_range: "77~78쪽 · 0553~0587"
  total_problems: 35
  unit_total: 144
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-alg/items/<id>.tex
  image_source: latex-bank/rpm-alg/figures/ (crops.json)
---

# RPM 대수 · 06 삼각함수의 그래프 (1/4) 정독 데이터 (v1.0)

이 파일은 RPM 대수 06 삼각함수의 그래프 단원의 첫 범위(77~78쪽 · 0553~0587 · 35문)를 다룬다. 77쪽은 「교과서 06-1 삼각함수의 그래프와 성질」「교과서 06-2 삼각함수의 최대·최소와 주기」「교과서 06-3 일반각에 대한 삼각함수의 성질」「교과서 06-4 삼각함수가 포함된 방정식과 부등식」 구역의 교과서 기본 문제 28문(공통 발문 아래 식 하나가 문항인 드릴 형식)이고, 78쪽부터 「유형 01 주기함수」 4문·「유형 02 함수 y=a sin(bx+c)+d 의 그래프와 성질」 3문이 시작된다. RPM 의 벤더 난이도 신호는 구역(교과서/유형/유형 UP/시험에 꼭 나오는 문제/서술형/실력 Up)·난이도(하~상)·태그(대표문제·중요·기출·서술형)로 나타나며, 교과서 구역은 난이도·태그 없이 출발점 ★1, 유형 구역은 대표문제(★2)·중(★2)·상중(★3) 을 출발점으로 삼았다. 통찰이 있는 문항은 0584(함수방정식 → 주기 읽기 · EQV d1) 하나이고, 나머지는 M_total 4~6 의 절차형이라 ★ 조정이 일어나지 않았다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 공통 발문은 각 블록 `summary` 에 요약해 넣었고, 발문 그룹이 바뀌는 지점에 굵은 안내 줄을 두었다. 그림이 있는 문항은 이 범위에 없다. 교과서 06-1 구역은 전사본 group 이 둘(치역·주기 / 주기·점근선)이지만 section 명이 같아 한 절로 묶었다.

## 문항 데이터

### 교과서 06-1 삼각함수의 그래프와 성질

**공통 발문 (0553~0556)**: 다음 함수의 그래프를 그리고, 치역과 주기를 구하시오.

```yaml
- id: RPM-ALG-0553
  page: 77
  vendor_label: "교과서 06-1 삼각함수의 그래프와 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=-3 sin x 의 그래프를 그리고 치역과 주기 구하기(공통 발문).
  category: "y=a sin x 의 그래프 → 치역 [-|a|, |a|] · 주기 2π"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 y=a sin(bx+c)·y=a cos(bx+c) 의 그래프(치역·주기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    sin x 의 그래프를 x축 대칭·세로 3배 하면 끝. 치역 -3≤y≤3, b=1 이라 주기 2π 그대로. 그래프 그리기까지 포함해도 정의 적용 한 단계이고 계산은 없다. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y=-3 sin x → sin x 를 x축 대칭·세로 3배 → 치역 [-3, 3] · 주기 2π"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 (치역: $\{y\,|\,-3\le y\le 3\}$, 주기: $2\pi$)'
  answer_source: "답지(풀이 참조 · 해설 보충)"
  figure: none
  latex: latex-bank/rpm-alg/items/0553.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 -3 을 다른 정수·분수(2, -1/2, 4)로. 제약: 치역은 [-|a|, |a|], 주기 2π 고정. a<0 이면 x축 대칭까지 그려야 하므로 그래프 요구 시 부호를 명시."
    creative: "(1) y=a sin x 의 그래프를 주고 a 를 읽게 하는 역방향(★1) (2) y=a sin x+d 로 세로 이동을 붙여 치역 [d-|a|, d+|a|] 구하기(★1) (3) y=3 sin x 와 y=-3 sin x 그래프의 관계(x축 대칭)를 서술하게(★1~2)."
```

```yaml
- id: RPM-ALG-0554
  page: 77
  vendor_label: "교과서 06-1 삼각함수의 그래프와 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=2 sin(2x-π) 의 그래프를 그리고 치역과 주기 구하기(공통 발문).
  category: "y=a sin(bx+c) → b 로 묶어 평행이동량 확인 → 치역 |a| · 주기 2π/|b|"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 y=a sin(bx+c)·y=a cos(bx+c) 의 그래프(치역·주기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2x-π=2(x-π/2) 로 묶으면 y=2 sin 2x 를 x축 방향 π/2 만큼 평행이동한 그래프. 치역 -2≤y≤2, 주기 2π/2=π. 이동량을 π 로 읽는 표기 함정 하나(T-표기)가 있지만 치역·주기 자체는 이동과 무관. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "2x-π=2(x-π/2) → y=2 sin 2x 를 x축 방향 π/2 이동 → 치역 [-2, 2] · 주기 π"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 (치역: $\{y\,|\,-2\le y\le 2\}$, 주기: $\pi$)'
  answer_source: "답지(풀이 참조 · 해설 보충)"
  figure: none
  latex: latex-bank/rpm-alg/items/0554.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a(2 → 3, -1)·b(2 → 3, 1/2)·c(-π → π/2, -π/3). 제약: 주기 2π/|b| 가 π 의 유리수배로 깔끔해야 하고 평행이동량 -c/b 가 특수각이어야 그래프 시작점을 표시할 수 있음."
    creative: "(1) 2 sin(2x-π)=-2 sin 2x 임을 보이게 해 평행이동과 x축 대칭의 동치를 묻기(★2 · EQV 후보) (2) 그래프를 주고 a·b·c 를 결정(유형 02 역방향 ★2) (3) x축 방향 이동량을 묻는 5지선다에 π 오답을 배치(★1)."
```

```yaml
- id: RPM-ALG-0555
  page: 77
  vendor_label: "교과서 06-1 삼각함수의 그래프와 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=(1/2) cos x 의 그래프를 그리고 치역과 주기 구하기(공통 발문).
  category: "y=a cos x 의 그래프 → 치역 [-|a|, |a|] · 주기 2π"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 y=a sin(bx+c)·y=a cos(bx+c) 의 그래프(치역·주기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    cos x 의 그래프를 세로 1/2 배. 치역 -1/2≤y≤1/2, 주기 2π. 정의 적용 한 단계이고 함정도 없다. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y=(1/2) cos x → cos x 를 세로 1/2 배 → 치역 [-1/2, 1/2] · 주기 2π"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 (치역: $\left\{y\,\middle|\,-\dfrac{1}{2}\le y\le\dfrac{1}{2}\right\}$, 주기: $2\pi$)'
  answer_source: "답지(풀이 참조 · 해설 보충)"
  figure: none
  latex: latex-bank/rpm-alg/items/0555.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 1/2 를 다른 분수·정수(3/2, -2, 1/3)로. 제약: 치역 [-|a|, |a|], 주기 2π 고정. a<0 이면 x축 대칭 추가."
    creative: "(1) y=(1/2) cos x+1/2 로 치역이 [0, 1] 이 되게 해 y 이동 결합(★1) (2) y=(1/2) cos x 와 y=cos x 의 교점(★2 · 방정식 결합) (3) y=cos(x/2) 와 대조해 세로 배율·가로 배율 구분(★1~2)."
```

```yaml
- id: RPM-ALG-0556
  page: 77
  vendor_label: "교과서 06-1 삼각함수의 그래프와 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=3 cos(2x+π/2) 의 그래프를 그리고 치역과 주기 구하기(공통 발문).
  category: "y=a cos(bx+c) → b 로 묶어 평행이동량 확인 → 치역 |a| · 주기 2π/|b|"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 y=a sin(bx+c)·y=a cos(bx+c) 의 그래프(치역·주기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    2x+π/2=2(x+π/4) 로 묶어 y=3 cos 2x 를 x축 방향 -π/4 이동. 치역 -3≤y≤3, 주기 2π/2=π. 이동량을 -π/2 로 읽는 표기 함정 하나. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "2x+π/2=2(x+π/4) → y=3 cos 2x 를 x축 방향 -π/4 이동 → 치역 [-3, 3] · 주기 π"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 (치역: $\{y\,|\,-3\le y\le 3\}$, 주기: $\pi$)'
  answer_source: "답지(풀이 참조 · 해설 보충)"
  figure: none
  latex: latex-bank/rpm-alg/items/0556.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a(3 → -2, 1/2)·b(2 → 3, 1/2)·c(π/2 → π/3, -π). 제약: 이동량 -c/b 가 특수각, 주기 2π/|b| 가 π 의 유리수배."
    creative: "(1) 3 cos(2x+π/2)=-3 sin 2x 임을 확인시켜 cos → sin 표현 전환(★2 · RT 후보) (2) 그래프에서 a·b·c 읽기(★2) (3) 치역 대신 0≤x≤π/2 구간의 최댓값·최솟값 묻기(★2 · T-범위)."
```

**공통 발문 (0557~0558)**: 다음 함수의 그래프를 그리고, 주기와 점근선의 방정식을 구하시오.

```yaml
- id: RPM-ALG-0557
  page: 77
  vendor_label: "교과서 06-1 삼각함수의 그래프와 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=-tan(x/4) 의 그래프를 그리고 주기와 점근선의 방정식 구하기(공통 발문).
  category: "y=a tan bx → 주기 π/|b| · 점근선 bx=nπ+π/2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 y=a tan bx 의 그래프(주기·점근선)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    주기 π/(1/4)=4π. 점근선은 x/4=nπ+π/2 에서 x=4nπ+2π. 부호 -1 은 x축 대칭이라 주기·점근선에 영향 없음. 점근선을 x=nπ+π/2 로 두고 4배를 잊는 함정 하나. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "주기 π/(1/4)=4π → 점근선 x/4=nπ+π/2 → x=4nπ+2π"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 (주기: $4\pi$, 점근선의 방정식: $x=4n\pi+2\pi$ ($n$은 정수))'
  answer_source: "답지(풀이 참조 · 해설 보충)"
  figure: none
  latex: latex-bank/rpm-alg/items/0557.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "b(1/4 → 1/2, 2, 3)·a(-1 → 2, -3). 제약: 점근선 x=(nπ+π/2)/b 가 π 의 유리수배로 정리돼야 함. a 는 주기·점근선에 무관함을 유지."
    creative: "(1) 점근선 x=2π+4nπ 를 주고 b 를 역으로 결정(★2 · BW 후보) (2) y=tan(x/4)+1 로 y 이동을 붙여 x절편과 점근선을 구분(★1~2) (3) 이웃한 두 점근선 사이의 거리로 물어 주기 개념을 확인(★1)."
```

```yaml
- id: RPM-ALG-0558
  page: 77
  vendor_label: "교과서 06-1 삼각함수의 그래프와 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=(1/2) tan 4x 의 그래프를 그리고 주기와 점근선의 방정식 구하기(공통 발문).
  category: "y=a tan bx → 주기 π/|b| · 점근선 bx=nπ+π/2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 y=a tan bx 의 그래프(주기·점근선)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    주기 π/4. 점근선 4x=nπ+π/2 에서 x=nπ/4+π/8. 계수 1/2 는 세로 배율이라 주기·점근선 불변. 주기를 sin·cos 처럼 2π/4 로 쓰는 혼동 함정 하나. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "주기 π/4 → 점근선 4x=nπ+π/2 → x=nπ/4+π/8"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 (주기: $\dfrac{\pi}{4}$, 점근선의 방정식: $x=\dfrac{n}{4}\pi+\dfrac{\pi}{8}$ ($n$은 정수))'
  answer_source: "답지(풀이 참조 · 해설 보충)"
  figure: none
  latex: latex-bank/rpm-alg/items/0558.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "b(4 → 2, 3, π)·a(1/2 → -2). 제약: b 가 π 이면 주기·점근선이 유리수(0561 형)로 나오므로 답 표기를 미리 정함."
    creative: "(1) y=(1/2) tan 4x 와 y=tan 2x 의 점근선 개수를 0<x<π 에서 비교(★2) (2) 그래프를 주고 b 를 결정(★2 · BW 후보) (3) y=(1/2) tan(4x-π) 로 x 이동을 붙여 점근선 이동 확인(★2 · T-표기)."
```

### 교과서 06-2 삼각함수의 최대·최소와 주기

**공통 발문 (0559~0561)**: 다음 함수의 최댓값, 최솟값, 주기를 구하시오.

```yaml
- id: RPM-ALG-0559
  page: 77
  vendor_label: "교과서 06-2 삼각함수의 최대·최소와 주기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=-(1/3) sin(x/2-π/3) 의 최댓값·최솟값·주기 구하기(공통 발문).
  category: "y=a sin(bx+c)+d → 최대 |a|+d · 최소 -|a|+d · 주기 2π/|b|"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 최댓값·최솟값·주기(y=a sin(bx+c)+d · y=a tan bx)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    |a|=1/3 이라 최댓값 1/3·최솟값 -1/3, 주기 2π/(1/2)=4π. c=-π/3 은 셋 다에 무관. a<0 이어도 최댓값이 |a| 임을 아는지(T-부호)가 유일한 함정. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a=-1/3, b=1/2 → 최대 1/3 · 최소 -1/3 · 주기 2π/(1/2)=4π"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '최댓값: $\dfrac{1}{3}$, 최솟값: $-\dfrac{1}{3}$, 주기: $4\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0559.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a(-1/3 → 2, -3/2)·b(1/2 → 3, 1/4)·c(-π/3 → π/6)·d 추가(+1, -2). 제약: 주기 2π/|b| 가 π 의 유리수배, 최대·최소가 유리수."
    creative: "(1) 최댓값·최솟값·주기를 주고 a, b, d 를 역으로 결정(유형 02 ★2 · 0587 형) (2) 정의역을 0≤x≤π 로 제한해 최대·최소 위치가 달라지게(★3 · T-범위) (3) 주기·최댓값·최솟값의 곱 묻기(★2 · 0587 형)."
```

```yaml
- id: RPM-ALG-0560
  page: 77
  vendor_label: "교과서 06-2 삼각함수의 최대·최소와 주기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=2 cos(x+π/3)+1 의 최댓값·최솟값·주기 구하기(공통 발문).
  category: "y=a cos(bx+c)+d → 최대 |a|+d · 최소 -|a|+d · 주기 2π/|b|"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 최댓값·최솟값·주기(y=a sin(bx+c)+d · y=a tan bx)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    |a|=2, d=1 이라 최댓값 3·최솟값 -1, b=1 이라 주기 2π. c 는 무관. 정의 적용 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "a=2, d=1, b=1 → 최대 2+1=3 · 최소 -2+1=-1 · 주기 2π"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '최댓값: $3$, 최솟값: $-1$, 주기: $2\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0560.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a(2 → -3, 1/2)·d(1 → -2, 3)·b(1 → 2, 1/3)·c(π/3 → 무관). 제약: 최대·최소가 정수·간단한 분수, 주기 2π/|b| 가 π 의 유리수배."
    creative: "(1) 최댓값 3·최솟값 -1 을 주고 a, d 를 결정(★2 · 유형 02 역방향) (2) 최댓값을 갖는 x 의 값까지 묻기(cos(x+π/3)=1 방정식 결합 ★2) (3) 정의역 제한(0≤x≤π/2)으로 최소가 경계에서 나오게(★3 · T-범위)."
```

```yaml
- id: RPM-ALG-0561
  page: 77
  vendor_label: "교과서 06-2 삼각함수의 최대·최소와 주기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=2 tan(πx/2) 의 최댓값·최솟값·주기 구하기(공통 발문).
  category: "y=a tan bx → 최대·최소 없음 · 주기 π/|b|"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 최댓값·최솟값·주기(y=a sin(bx+c)+d · y=a tan bx)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    tan 은 최댓값·최솟값이 없고 주기는 π/(π/2)=2. b 자체가 π/2 라 주기가 π 의 배수가 아닌 정수 2 로 나오는 표기 함정 하나(sin·cos 처럼 2π/b 로 쓰면 4). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "tan → 최대·최소 없음 → 주기 π/(π/2)=2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '최댓값, 최솟값: 없다., 주기: $2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0561.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "b(π/2 → π/3, 2π, π/4)·a(2 → -1). 제약: 주기 π/|b| 가 유리수(b 가 π 의 유리수배)로 떨어지게. a 는 답에 영향 없음."
    creative: "(1) y=2 tan(πx/2)+1 로 y 이동을 붙여 「최댓값 없음」이 유지되는지 참·거짓(★1) (2) sin(πx/2) 와 tan(πx/2) 의 주기 비교(4 vs 2)(★2) (3) 점근선 x=2n+1 을 함께 묻기(★1~2)."
```

**공통 발문 (0562~0565)**: 다음 함수의 주기를 구하시오.

```yaml
- id: RPM-ALG-0562
  page: 77
  vendor_label: "교과서 06-2 삼각함수의 최대·최소와 주기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=|sin x| 의 주기 구하기(공통 발문).
  category: "절댓값 그래프 → x축 아래를 접어 올림 → 주기 반감"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값을 포함한 삼각함수의 주기(|sin x| · |cos x| · cos|x| · |tan x|)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    sin x 의 음수 부분을 x축 위로 접으면 반주기마다 같은 산이 반복돼 주기 π. 그래프 한 번 그리면 끝이고 절댓값이 주기를 반으로 줄인다는 사실을 아는지가 전부. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "|sin x| → x축 아래를 접어 올림 → 산이 π 마다 반복 → 주기 π"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0562.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "안쪽 계수(|sin 2x| → π/2 · |sin(x/2)| → 2π)·세로 배율(2|sin x|)·y 이동(|sin x|+1). 제약: 주기는 (2π/|b|)/2=π/|b|, 세로 배율·y 이동은 주기에 무관."
    creative: "(1) |sin x|+sin x 처럼 접힌 그래프와 원그래프를 더해 주기가 2π 로 되돌아가는 경우(★2 · EQV 후보) (2) 0≤x<2π 에서 |sin x|=1/2 의 해의 개수(★2 · RT 그래프 교점) (3) sin|x| 는 주기함수가 아님을 |sin x| 와 대조(★2 · 0564 계열)."
```

```yaml
- id: RPM-ALG-0563
  page: 77
  vendor_label: "교과서 06-2 삼각함수의 최대·최소와 주기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=|cos x| 의 주기 구하기(공통 발문).
  category: "절댓값 그래프 → x축 아래를 접어 올림 → 주기 반감"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값을 포함한 삼각함수의 주기(|sin x| · |cos x| · cos|x| · |tan x|)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    cos x 의 음수 부분을 접어 올리면 주기 π. 0562 와 같은 골조이고 모양만 x축 방향 π/2 만큼 어긋나 있다. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "|cos x| → x축 아래를 접어 올림 → 주기 π"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0563.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "안쪽 계수(|cos 3x| → π/3 · |cos(x/2)| → 2π)·세로 배율·y 이동. 제약: 주기 π/|b|, 세로 배율·y 이동은 주기에 무관."
    creative: "(1) |sin x| 와 |cos x| 그래프의 관계(x축 방향 π/2 이동)를 묻기(★1~2) (2) 0≤x<2π 에서 |cos x|=|sin x| 의 해(★2 · 방정식 결합) (3) cos|x| 와 짝지어 어느 쪽 주기가 바뀌는지 고르기(★1 · 0564 계열)."
```

```yaml
- id: RPM-ALG-0564
  page: 77
  vendor_label: "교과서 06-2 삼각함수의 최대·최소와 주기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=cos|x| 의 주기 구하기(공통 발문).
  category: "cos 의 우함수 성질 → cos|x|=cos x → 주기 2π"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값을 포함한 삼각함수의 주기(|sin x| · |cos x| · cos|x| · |tan x|)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    cos(-x)=cos x 이므로 cos|x|=cos x, 주기 2π 그대로. 0562·0563 과 달리 절댓값이 변수에 붙어 있어 주기가 줄지 않는다 — 절댓값 위치를 구분하지 못하면 π 로 답하는 함정 하나(T-표기). 우함수 성질은 교과서 표준 사실이라 SYM 으로 세지 않았다. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "cos 우함수 → cos|x|=cos x → 주기 2π"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0564.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "cos|2x|(→ π)·cos|x|+1·-cos|x|. 제약: 안쪽 절댓값은 항상 제거되므로 주기=2π/|b|. sin|x| 로 바꾸면 주기함수가 아니므로 「주기」 발문 불가."
    creative: "(1) sin|x| 가 주기함수가 아님을 그래프로 판단하게(★2 · SYM d1 후보 · 기함수 대비) (2) 네 함수(|sin x| · |cos x| · cos|x| · |tan x|) 중 주기가 다른 하나 고르기(★2 · 0562~0565 통합) (3) cos|x-π/2| 처럼 이동을 섞어 대칭축을 옮기기(★2~3 · 주기함수 여부까지)."
```

```yaml
- id: RPM-ALG-0565
  page: 77
  vendor_label: "교과서 06-2 삼각함수의 최대·최소와 주기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=|tan x| 의 주기 구하기(공통 발문).
  category: "절댓값 그래프 → 음수 부분 접기 → 한 주기 안 모양 불변 → 주기 유지"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값을 포함한 삼각함수의 주기(|sin x| · |cos x| · cos|x| · |tan x|)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    tan x 의 음수 부분을 접어도 각 주기 안의 모양이 그대로 반복되므로 주기 π 로 변화 없음. |sin x| 에서 반감된 것을 유추해 π/2 로 답하는 함정 하나. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "|tan x| → 음수 부분 접기 → 한 주기 안 모양은 같음 → 주기 π"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0565.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "|tan 2x|(→ π/2)·|tan(x/2)|(→ 2π)·2|tan x|. 제약: 주기 π/|b| 그대로, 절댓값은 주기에 영향 없음."
    creative: "(1) |tan x| 의 점근선과 주기를 함께 묻기(★1) (2) 0<x<π 에서 |tan x|=1 의 해의 개수(★2 · RT 그래프 교점) (3) |sin x| · |cos x| · |tan x| 의 주기를 비교해 왜 tan 만 반감되지 않는지 서술(★2)."
```

### 교과서 06-3 일반각에 대한 삼각함수의 성질

**공통 발문 (0566~0574)**: 다음 삼각함수의 값을 구하시오.

```yaml
- id: RPM-ALG-0566
  page: 77
  vendor_label: "교과서 06-3 일반각에 대한 삼각함수의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    sin 765° 의 값 구하기(공통 발문).
  category: "360°n+θ 환원 → 특수각 값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각의 삼각함수 값(2nπ+θ · -θ · π±θ 환원)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    765°=360°×2+45° 이므로 sin 45°=√2/2. 주기성으로 한 번 환원하면 특수각. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "765°=360°×2+45° → sin 45° → √2/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{\sqrt{2}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0566.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각(765° → 1110°, 1470°, 음의 각 -300°)과 함수(sin → cos·tan). 제약: 360° 로 나눈 나머지가 특수각(30°·45°·60° 계열)이어야 함."
    creative: "(1) 도 대신 라디안 사용(0567 형 ★1) (2) 여러 값의 합 sin 765°+cos 1110°(★1~2) (3) θ 를 문자로 두고 sin(720°+θ)=sin θ 성질을 확인시키기(★1)."
```

```yaml
- id: RPM-ALG-0567
  page: 77
  vendor_label: "교과서 06-3 일반각에 대한 삼각함수의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    cos(25π/6) 의 값 구하기(공통 발문).
  category: "2nπ+θ 환원 → 특수각 값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각의 삼각함수 값(2nπ+θ · -θ · π±θ 환원)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    25π/6=4π+π/6 이므로 cos π/6=√3/2. 라디안으로 2π 의 배수를 떼는 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "25π/6=4π+π/6 → cos π/6 → √3/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{\sqrt{3}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0567.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각(25π/6 → 13π/6, 31π/4, -23π/3)·함수(cos → sin·tan). 제약: 2π 로 나눈 나머지가 특수각."
    creative: "(1) 2π 를 뗀 뒤 π-θ·π+θ 까지 한 번 더 환원해야 하는 각(예: 29π/6 → 5π/6)으로(★1~2) (2) cos(25π/6)·sin(17π/4) 곱(★1) (3) 분모가 큰 분수각을 도로 바꿔 계산하게 해 단위 환산 결합(★1 · T-단위)."
```

```yaml
- id: RPM-ALG-0568
  page: 77
  vendor_label: "교과서 06-3 일반각에 대한 삼각함수의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    tan(17π/4) 의 값 구하기(공통 발문).
  category: "2nπ+θ 환원 → 특수각 값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각의 삼각함수 값(2nπ+θ · -θ · π±θ 환원)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    17π/4=4π+π/4 이므로 tan π/4=1. tan 은 주기 π 라 π 의 배수만 떼도 되지만 여기선 4π 를 떼면 바로 특수각. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "17π/4=4π+π/4 → tan π/4 → 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0568.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각(17π/4 → 13π/4, 25π/3, -9π/4). 제약: π 로 나눈 나머지가 특수각이면 tan 은 부호 판단 없이 값이 나옴(주기 π 활용)."
    creative: "(1) tan(17π/4) 와 tan(13π/4) 가 같은 이유(주기 π)를 서술(★1~2) (2) tan(nπ+π/4) 의 값을 n 에 관계없이 묻는 일반화(★1) (3) sin·cos 로 바꿔 부호가 달라지는 각(13π/4)과 대조(★1)."
```

```yaml
- id: RPM-ALG-0569
  page: 77
  vendor_label: "교과서 06-3 일반각에 대한 삼각함수의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    sin(-π/3) 의 값 구하기(공통 발문).
  category: "-θ 성질 → sin(-θ)=-sin θ"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각의 삼각함수 값(2nπ+θ · -θ · π±θ 환원)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    sin 은 기함수라 sin(-π/3)=-sin π/3=-√3/2. 부호 하나(T-부호)만 조심. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "sin(-θ)=-sin θ → -sin π/3 → -√3/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\dfrac{\sqrt{3}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0569.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각(-π/3 → -π/4, -5π/6)·함수(cos(-θ)=cos θ 로 부호 유지 · tan(-θ)=-tan θ). 제약: 특수각."
    creative: "(1) sin(-θ)·cos(-θ)·tan(-θ) 의 부호를 표로 묶어 우함수·기함수 구분(★1) (2) sin(-π/3)+cos(-π/3) 합(★1) (3) 그래프 대칭성(원점 대칭·y축 대칭)으로 설명하게(★2 · SYM d1 후보)."
```

```yaml
- id: RPM-ALG-0570
  page: 77
  vendor_label: "교과서 06-3 일반각에 대한 삼각함수의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    cos 315° 의 값 구하기(공통 발문).
  category: "360°-θ 환원 → cos(-θ)=cos θ"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각의 삼각함수 값(2nπ+θ · -θ · π±θ 환원)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    315°=360°-45° 이므로 cos(-45°)=cos 45°=√2/2. 4사분면에서 cos 이 양수임을 확인하는 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "315°=360°-45° → cos(-45°)=cos 45° → √2/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{\sqrt{2}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0570.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각(315° → 300°, 330°, 675°)·함수(sin 315° 는 부호 반전). 제약: 360°-θ 꼴의 θ 가 특수각."
    creative: "(1) sin 315°·cos 315°·tan 315° 세 값을 한 번에 물어 4사분면 부호 세트 확인(★1) (2) 315° 를 라디안(7π/4)으로 바꿔 같은 문제(★1) (3) cos 315°=cos 45° 인 이유를 단위원 대칭으로 서술(★1~2)."
```

```yaml
- id: RPM-ALG-0571
  page: 77
  vendor_label: "교과서 06-3 일반각에 대한 삼각함수의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    tan(11π/6) 의 값 구하기(공통 발문).
  category: "2π-θ 환원 → tan(-θ)=-tan θ"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각의 삼각함수 값(2nπ+θ · -θ · π±θ 환원)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    11π/6=2π-π/6 이므로 tan(-π/6)=-tan π/6=-√3/3. 4사분면 tan 음수(T-부호)와 tan π/6 의 유리화 표기가 전부. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "11π/6=2π-π/6 → tan(-π/6)=-tan π/6 → -√3/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\dfrac{\sqrt{3}}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0571.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각(11π/6 → 5π/3, 7π/4, 23π/6)·함수(tan → sin·cos). 제약: 2π-θ 의 θ 가 특수각, tan 값은 유리화된 형태로 통일."
    creative: "(1) tan(11π/6) 을 π+θ 환원(tan(π+5π/6))으로도 구하게 해 두 경로 비교(★1~2) (2) tan(11π/6)·tan(π/6) 곱이 -1/3 임을 활용한 식의 값(★1) (3) 각을 문자 θ=π/6 으로 두고 tan(2π-θ)=-tan θ 일반화(★1)."
```

```yaml
- id: RPM-ALG-0572
  page: 77
  vendor_label: "교과서 06-3 일반각에 대한 삼각함수의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    sin(5π/6) 의 값 구하기(공통 발문).
  category: "π-θ 성질 → sin(π-θ)=sin θ"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각의 삼각함수 값(2nπ+θ · -θ · π±θ 환원)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    5π/6=π-π/6 이므로 sin(π-θ)=sin θ 로 1/2. 2사분면에서 sin 양수. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "5π/6=π-π/6 → sin(π-θ)=sin θ → sin π/6=1/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0572.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각(5π/6 → 3π/4, 2π/3, 150°)·함수(cos(5π/6) 는 부호 반전 · tan(5π/6) 도 반전). 제약: π-θ 의 θ 가 특수각."
    creative: "(1) sin(5π/6)·cos(5π/6)·tan(5π/6) 세 값으로 2사분면 부호 세트 확인(★1) (2) sin(π-θ)=sin θ 를 이용해 sin(5π/6)+sin(π/6) 류 합(★1) (3) sin 의 π-θ 대칭을 그래프의 직선 x=π/2 대칭으로 설명하게(★2 · SYM d1 후보)."
```

```yaml
- id: RPM-ALG-0573
  page: 77
  vendor_label: "교과서 06-3 일반각에 대한 삼각함수의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    cos(5π/4) 의 값 구하기(공통 발문).
  category: "π+θ 성질 → cos(π+θ)=-cos θ"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각의 삼각함수 값(2nπ+θ · -θ · π±θ 환원)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    5π/4=π+π/4 이므로 cos(π+θ)=-cos θ 로 -√2/2. 3사분면 cos 음수(T-부호)만 조심. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "5π/4=π+π/4 → cos(π+θ)=-cos θ → -√2/2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\dfrac{\sqrt{2}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0573.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각(5π/4 → 4π/3, 7π/6, 225°)·함수(sin(5π/4) 도 음수 · tan(5π/4) 는 양수). 제약: π+θ 의 θ 가 특수각."
    creative: "(1) cos(5π/4) 를 2π-θ(cos(2π-3π/4)) 로도 환원해 두 경로 비교(★1~2) (2) sin(5π/4)+cos(5π/4) 합이 -√2 임을 묻기(★1) (3) θ 를 문자로 두고 cos(π+θ)=-cos θ 를 단위원 점대칭으로 서술(★2 · SYM d1 후보)."
```

```yaml
- id: RPM-ALG-0574
  page: 77
  vendor_label: "교과서 06-3 일반각에 대한 삼각함수의 성질"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    tan 210° 의 값 구하기(공통 발문).
  category: "180°+θ 성질 → tan(π+θ)=tan θ"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반각의 삼각함수 값(2nπ+θ · -θ · π±θ 환원)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    210°=180°+30° 이므로 tan(π+θ)=tan θ 로 √3/3. 3사분면에서 tan 만 양수임을 확인. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "210°=180°+30° → tan(π+θ)=tan θ → tan 30°=√3/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{\sqrt{3}}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0574.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각(210° → 240°, 225°, 570°)·함수(sin 210°=-1/2 · cos 210°=-√3/2). 제약: 180°+θ 의 θ 가 특수각, tan 값은 유리화 표기."
    creative: "(1) sin 210°·cos 210°·tan 210° 세 값으로 3사분면 부호 세트(★1) (2) tan 210°=tan 30° 인 이유를 주기 π 로 서술(★1~2) (3) 0566~0574 아홉 값을 표로 묶어 사분면별 부호 규칙을 스스로 정리하게(★2 · PD 후보이나 교과서에 명시된 규칙)."
```

### 교과서 06-4 삼각함수가 포함된 방정식과 부등식

**공통 발문 (0575~0577)**: 다음 방정식을 푸시오. (0≤x<2π)

```yaml
- id: RPM-ALG-0575
  page: 77
  vendor_label: "교과서 06-4 삼각함수가 포함된 방정식과 부등식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    0≤x<2π 에서 방정식 sin x=-1/2 풀기(공통 발문).
  category: "sin x=k → 기준각 → 부호에 맞는 사분면 → 범위 안 해 모두"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각방정식 sin x=k · cos x=k · tan x=k 의 해(그래프 교점)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y=sin x 와 y=-1/2 의 교점을 0≤x<2π 에서 읽으면 x=7π/6, 11π/6. 기준각 π/6 을 3·4사분면으로 옮기는 한 단계. 해 하나만 쓰는 범위 함정(T-범위). 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "sin x=-1/2 → 기준각 π/6 · 3,4사분면 → x=7π/6, 11π/6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$x=\dfrac{7}{6}\pi$ 또는 $x=\dfrac{11}{6}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0575.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "k(-1/2 → √3/2, -√2/2, 1)·범위(0≤x<2π → -π≤x<π, 0≤x<4π). 제약: k 는 특수각 값이고 |k|≤1, 범위를 바꾸면 해의 개수도 바뀜(k=±1 이면 해 하나)."
    creative: "(1) sin(x-π/3)=-1/2 처럼 안쪽을 일차식으로 두어 치환 후 범위 재설정(★2 · T-범위) (2) 2sin²x-sin x-1=0 으로 인수분해를 앞에 붙이기(★2~3) (3) 해의 합만 묻기(★2 · SYM 후보 — 두 해가 x=3π/2 대칭이라 합 3π)."
```

```yaml
- id: RPM-ALG-0576
  page: 77
  vendor_label: "교과서 06-4 삼각함수가 포함된 방정식과 부등식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    0≤x<2π 에서 방정식 2cos x-√3=0 풀기(공통 발문).
  category: "일차식 정리 → cos x=k → 범위 안 해 모두"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각방정식 sin x=k · cos x=k · tan x=k 의 해(그래프 교점)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    cos x=√3/2 로 정리한 뒤 교점 x=π/6, 11π/6. cos 이 양수인 1·4사분면 두 해. 정리 한 줄 + 교점 읽기. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "2cos x-√3=0 → cos x=√3/2 → x=π/6, 11π/6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$x=\dfrac{\pi}{6}$ 또는 $x=\dfrac{11}{6}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0576.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수(√3 → 1, -√2)·계수(2 → 정리 후 특수각 값이 되게)·범위. 제약: 정리한 k 가 특수각 값, |k|≤1."
    creative: "(1) 2cos(x+π/6)-√3=0 치환 범위(★2) (2) 2cos²x-√3 cos x=0 인수분해 결합(★2~3 · cos x=0 근 포함) (3) 두 해의 차 묻기(★1~2)."
```

```yaml
- id: RPM-ALG-0577
  page: 77
  vendor_label: "교과서 06-4 삼각함수가 포함된 방정식과 부등식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    0≤x<2π 에서 방정식 tan x=-√3 풀기(공통 발문).
  category: "tan x=k → 기준각 → 주기 π 로 두 해"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각방정식 sin x=k · cos x=k · tan x=k 의 해(그래프 교점)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    tan x=-√3 의 기준각 π/3 을 tan 이 음수인 2·4사분면으로. 주기 π 라 두 해가 π 간격으로 x=2π/3, 5π/3. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "tan x=-√3 → 기준각 π/3 · 2,4사분면 → x=2π/3, 5π/3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$x=\dfrac{2}{3}\pi$ 또는 $x=\dfrac{5}{3}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0577.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "k(-√3 → 1, -√3/3, √3)·범위(0≤x<2π → 0<x<π 로 줄이면 해 하나). 제약: k 는 특수각의 tan 값. 범위 길이가 π 의 몇 배인지가 해의 개수를 정함."
    creative: "(1) tan 2x=-√3 로 안쪽 계수를 두어 범위 0≤2x<4π 에서 네 해(★2 · T-범위) (2) tan x=-√3 의 두 해의 차가 항상 π 임을 묻기(★1~2) (3) sin x=-√3 cos x 로 바꿔 tan 으로 변환하는 한 단계 추가(★2 · EQV 후보)."
```

**공통 발문 (0578~0580)**: 다음 부등식을 푸시오. (0≤x<2π)

```yaml
- id: RPM-ALG-0578
  page: 77
  vendor_label: "교과서 06-4 삼각함수가 포함된 방정식과 부등식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    0≤x<2π 에서 부등식 √2 sin x+1<0 풀기(공통 발문).
  category: "부등식 정리 → sin x<k → 그래프가 직선 아래인 구간"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각부등식 sin x<k · cos x≥k · tan x>k 의 해(그래프 위치)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    sin x<-1/√2=-√2/2 로 정리하고 y=sin x 가 y=-√2/2 아래인 구간을 읽으면 5π/4<x<7π/4. 경계 두 점이 열린 구간인지(T-경계)만 확인하면 한 조각. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "√2 sin x+1<0 → sin x<-√2/2 → 그래프가 아래인 5π/4<x<7π/4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{5}{4}\pi<x<\dfrac{7}{4}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0578.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "k(-√2/2 → 1/2, -√3/2)·부등호 방향(< → ≥)·범위(0≤x<2π → -π<x≤π). 제약: 경계가 특수각. 부등호 방향에 따라 구간이 하나(연결)인지 둘(범위 끝에서 잘림)인지 달라지므로 답 형태를 미리 확인."
    creative: "(1) 2sin x-1≥0 처럼 해가 범위 양 끝에서 잘리는 꼴(0579 형 ★1) (2) sin(x+π/6)<1/2 치환 범위(★2 · T-범위) (3) 해가 a<x<b 일 때 b-a 를 묻기(★1~2)."
```

```yaml
- id: RPM-ALG-0579
  page: 77
  vendor_label: "교과서 06-4 삼각함수가 포함된 방정식과 부등식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    0≤x<2π 에서 부등식 2cos x≥√3 풀기(공통 발문).
  category: "부등식 정리 → cos x≥k → 그래프가 직선 위인 구간 두 조각(범위 양 끝)"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각부등식 sin x<k · cos x≥k · tan x>k 의 해(그래프 위치)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    cos x≥√3/2 인 구간은 x=0 근방이라 0≤x<2π 안에서 둘로 갈라진다: 0≤x≤π/6, 11π/6≤x<2π. 오른쪽 끝 2π 는 범위에서 빠지므로 <. 범위 양 끝 처리(T-범위)와 등호(T-경계) 두 함정으로 Mₜ 2. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "2cos x≥√3 → cos x≥√3/2 → 그래프가 위인 구간 두 조각 → 0≤x≤π/6 · 11π/6≤x<2π"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0\le x\le\dfrac{\pi}{6}$ 또는 $\dfrac{11}{6}\pi\le x<2\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0579.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "k(√3/2 → 1/2, √2/2)·부등호(≥ → >). 제약: cos x≥k(k>0) 는 항상 범위 양 끝에서 잘려 두 조각. 범위를 -π≤x<π 로 바꾸면 한 조각 -π/6≤x≤π/6."
    creative: "(1) 범위를 -π≤x<π 로 바꿔 한 구간 답과 대조(★1~2 · 범위 함정) (2) 두 구간의 길이 합 묻기(★2) (3) 2cos x-√3<0 의 해와 여집합 관계임을 묻기(★2 · EQV 후보)."
```

```yaml
- id: RPM-ALG-0580
  page: 77
  vendor_label: "교과서 06-4 삼각함수가 포함된 방정식과 부등식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    0≤x<2π 에서 부등식 tan x>√3 풀기(공통 발문).
  category: "tan x>k → 각 주기에서 기준각부터 점근선 직전까지 → 주기 π 로 두 조각"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각부등식 sin x<k · cos x≥k · tan x>k 의 해(그래프 위치)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y=tan x 가 y=√3 위인 구간은 각 주기에서 π/3 부터 점근선 π/2 직전까지. 주기 π 라 0≤x<2π 안에 π/3<x<π/2, 4π/3<x<3π/2 두 조각. 점근선을 끝점으로 포함하지 않는 것(T-범위)과 두 번째 조각을 빠뜨리지 않는 것(T-경계)이 함정으로 Mₜ 2. 교과서 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "tan x>√3 → 각 주기에서 π/3<x<점근선 π/2 → 주기 π 로 두 조각 → π/3<x<π/2 · 4π/3<x<3π/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\pi}{3}<x<\dfrac{\pi}{2}$ 또는 $\dfrac{4}{3}\pi<x<\dfrac{3}{2}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0580.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "k(√3 → 1, -1, √3/3)·부등호(> → ≤). 제약: tan x≤k 는 점근선 오른쪽부터 시작하므로 구간 형태가 달라짐. 범위를 0≤x<π 로 줄이면 한 조각."
    creative: "(1) tan x≤√3 로 바꿔 점근선 쪽 열린 끝과 등호 끝을 함께 다루게(★2) (2) tan(x-π/4)>1 치환(★2 · T-범위) (3) 두 구간 길이의 합이 π/3 으로 주기와 무관함을 확인(★2)."
```

### 유형 01 주기함수

```yaml
- id: RPM-ALG-0581
  page: 78
  vendor_label: "유형 01 주기함수"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=sin 2x+cos 2x+tan²4x 의 주기를 p 라 할 때 f(p) 의 값.
  category: "항별 주기 → 최소공배수 p → f(p) 계산"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "여러 삼각함수의 합으로 된 함수의 주기(각 주기의 최소공배수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    sin 2x·cos 2x 의 주기 π, tan²4x 는 tan 4x 와 같은 π/4. 최소공배수 p=π. f(π)=0+1+0=1. 항별 주기 → 최소공배수 → 대입 → 계산 네 단계(Mₛ 2). tan² 의 주기를 π/8 로 줄이는 오류(T-단위)가 함정. 통찰 없음·M_total 5 → −1 후보이나 세 항 주기의 최소공배수 판정이 드릴 위의 유형 핵심 기술이라 대표문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "항별 주기 π·π·π/4 → 최소공배수 p=π → f(π)=0+1+0=1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0581.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "안쪽 계수(2·2·4 → 3·3·6 이나 2·4·8)와 tan 의 거듭제곱(² → 없음·|tan 4x|). 제약: 주기들의 최소공배수가 π 의 유리수배로 깔끔하고 f(p) 가 특수각 값의 합이어야 함."
    creative: "(1) 주기 p 대신 f(p)+f(2p)+…(0583 형 ★2) (2) sin x+sin 2x 처럼 최소공배수가 큰 쪽(2π)으로 결정되는 조합(★2) (3) |sin 2x|+cos 4x 처럼 절댓값 항을 섞어 반감 주기와 결합(★3 · 0562 계열)."
```

```yaml
- id: RPM-ALG-0582
  page: 78
  vendor_label: "유형 01 주기함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    모든 실수 x 에서 f(x+3)=f(x), 0≤x<3 에서 f(x)=cos πx 일 때 f(91/3) 의 값.
  category: "주기 3 으로 인수 환원 → 정의 구간의 식에 대입"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "주기함수 f(x+p)=f(x) 를 이용한 함숫값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    91/3=30+1/3 이므로 f(91/3)=f(1/3)=cos(π/3)=1/2. 주기 3 을 몇 번 빼는지(10번, 30)와 나머지 1/3 이 정의 구간 0≤x<3 안에 있는지만 확인하면 끝. 함수방정식 표기라 Mₐ 2. 통찰 없음·M_total 5 → −1 후보이나 분수 인수 환원과 구간 정의식 대입이 드릴 위라 벤더 「중」 대로 ★2.
    [분류 이슈] 절차만 보면 ★1 후보(교과서 0567 과 골조 동일 · 주기만 3). 라벨은 ★2 로 두고 기록.
  tier: star_2
  mechanism_primary: "91/3=3·10+1/3 → f(91/3)=f(1/3) → cos(π/3)=1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0582.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주기(3 → 2, 4)·구간 정의식(cos πx → sin(πx/2))·인수(91/3 → 100/3, 25/2). 제약: 인수를 주기로 나눈 나머지가 정의 구간 안의 특수각 인수(cos πx 에서 x=1/3, 1/2, 1/6 등)여야 값이 특수각으로 떨어짐."
    creative: "(1) 음의 인수 f(-92/3)(★2 · 나머지를 양으로 맞추는 T-부호) (2) f(1)+f(2)+…+f(30) 처럼 주기별 합(★2~3 · PD 후보) (3) 정의 구간을 두 조각(0≤x<1 은 cos πx, 1≤x<3 은 상수)으로 줘 어느 조각인지 판단(★3 · MI 후보)."
```

```yaml
- id: RPM-ALG-0583
  page: 78
  vendor_label: "유형 01 주기함수"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    f(x)=(sin 4x+cos 2x+1)/(3 sin x+4) 의 주기를 p 라 할 때 f(2p)+f(4p)+…+f(20p) 의 값.
  category: "분자·분모 항별 주기의 최소공배수 → 주기의 배수에서 f(0) → 항 개수 곱"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "여러 삼각함수의 합으로 된 함수의 주기(각 주기의 최소공배수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    sin 4x(π/2)·cos 2x(π)·sin x(2π) 의 최소공배수 p=2π. 2p, 4p, …, 20p 는 모두 주기의 배수라 각 값은 f(0)=(0+1+1)/(0+4)=1/2. 항이 10개이므로 5. 항 개수를 세는 경계 함정 하나. 통찰 없음·M_total 5 지만 분수식 세 항의 주기 통합과 「주기의 배수에서 값이 같다」는 해석이 더해져 벤더 「중」 대로 ★2.
  tier: star_2
  mechanism_primary: "주기 π/2·π·2π 의 최소공배수 p=2π → f(2kp)=f(0)=1/2 → 10 항 × 1/2 = 5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0583.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "안쪽 계수(4·2·1 → 6·3·1)·상수(1·4 → 2·5)·항 목록(2p~20p → p~15p). 제약: 분모가 0 이 되지 않게(|계수|<상수), f(0) 이 유리수, 항의 개수가 명확한 등차 목록."
    creative: "(1) f(p/2)+f(p) 처럼 주기의 배수가 아닌 점을 섞어 실제 값 계산이 필요하게(★3) (2) 최소공배수를 결정하는 가장 긴 주기를 분모가 아니라 분자 쪽에 두기(★2) (3) 구한 p 가 f(x)=f(x+p) 를 만족하는 최소 양수임을 서술(★3)."
```

```yaml
- id: RPM-ALG-0584
  page: 78
  vendor_label: "유형 01 주기함수"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    모든 실수 x 에서 f(x-2)=f(x+1), f(-1)=2, f(0)=-1, f(1)=1 일 때 f(2021)+f(2023)+f(2025) 의 값.
  category: "함수방정식 → 주기 3 도출 → 큰 인수를 -1·0·1 로 환원 → 합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(x-2)=f(x+1) 에 x 대신 x+2 를 넣어 f(x)=f(x+3), 즉 주기 3 임을 스스로 읽어야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "주기함수 f(x+p)=f(x) 를 이용한 함숫값 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f(x-2)=f(x+1) 는 x→x+2 로 f(x)=f(x+3), 주기 3. 2021=3·673+2 → f(2)=f(-1)=2, 2023=3·674+1 → f(1)=1, 2025=3·675 → f(0)=-1, 합 2. 조건식을 주기로 옮겨 읽는 동치 변환(EQV d1) 하나와, f(2) 가 주어진 값이 아니라 f(-1) 로 한 번 더 환원하는 단계가 골조. 통찰 1·M_total 6 → 유형 「상중」 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "f(x-2)=f(x+1) → x→x+2 → 주기 3 → 2021≡2, 2023≡1, 2025≡0 (mod 3) → f(-1)+f(1)+f(0)=2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0584.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량(-2·+1 → -3·+2 로 주기 5)·주어진 값 세 개·큰 인수(2021·2023·2025 → 2024·2026·2028). 제약: 주어진 값의 인수들이 한 주기의 완전한 대표계(mod p)를 이루어야 하고 큰 인수의 나머지가 그 안에 들어가야 함."
    creative: "(1) f(x+2)=-f(x) 처럼 부호가 붙어 주기 4 를 두 번 적용해 찾게(★3~4 · EQV d2) (2) 주기 3 을 찾은 뒤 f(1)+f(2)+…+f(2025) 합(★3 · PD 후보) (3) 조건을 그래프 대칭(f(1-x)=f(1+x))과 주기(f(x+3)=f(x))로 나눠 주어 대칭+주기 결합(★4 · SYM)."
```

### 유형 02 함수 $y=a\sin(bx+c)+d$의 그래프와 성질

```yaml
- id: RPM-ALG-0585
  page: 78
  vendor_label: '유형 02 함수 $y=a\sin(bx+c)+d$의 그래프와 성질'
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    f(x)=2 sin(2x+π/6)-1 에 대한 다섯 진술(최댓값·최솟값·주기·f(5π/12)·평행이동) 중 옳지 않은 것. 5지선다.
  category: "a·b·c·d 에서 최대·최소·주기·함숫값·평행이동 다섯 진술 검증"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수 y=a sin(bx+c)+d 의 그래프와 성질(최대·최소·주기·평행이동 진술 판별)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ① 2-1=1 ② -2-1=-3 ③ 2π/2=π ④ f(5π/12)=2 sin π-1=-1 모두 참. ⑤ 2x+π/6=2(x+π/12) 이므로 x축 방향 이동은 -π/12, -π/6 이 아니라 거짓. 다섯 항목을 차례로 확인하는 절차(Mₛ 2)이며 ⑤ 의 표기 함정(T-표기)이 핵심. 통찰 없음·M_total 5 → −1 후보이나 다섯 성질을 한 번에 검증하는 대표문제 구조라 유형 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "a=2, b=2, c=π/6, d=-1 → 최대 1·최소 -3·주기 π·f(5π/12)=-1 → 이동량 -c/b=-π/12 ≠ -π/6 → ⑤"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0585.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a(2 → 3)·b(2 → 3)·c(π/6 → π/3)·d(-1 → 2)·확인점(5π/12 → 다른 특수각 대입점). 제약: 평행이동량 -c/b 와 c 가 서로 달라야 ⑤ 류 함정이 성립하고, 대입점이 특수각으로 떨어져야 함."
    creative: "(1) 옳은 것의 개수 세기(ㄱㄴㄷ)로 바꿔 모든 항목을 판정하게(★2) (2) 진술에 「그래프가 직선 x=π/6 에 대칭」 같은 대칭축 항목 추가(★3 · SYM d1) (3) 그래프를 주고 a·b·c·d 를 결정한 뒤 진술 판별(★3 · 0586 계열과 결합)."
```

```yaml
- id: RPM-ALG-0586
  page: 78
  vendor_label: '유형 02 함수 $y=a\sin(bx+c)+d$의 그래프와 성질'
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    y=sin 3x+1 의 그래프를 x축 대칭이동한 뒤 y축 방향 -3/2 평행이동한 그래프의 식이 y=a sin 3x+b 일 때 ab 의 값. 서술형.
  category: "x축 대칭(전체 부호 반전) → y 평행이동 → 계수 읽기 → 곱"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수 그래프의 대칭이동·평행이동 후 식 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x축 대칭은 y→-y 라 y=-sin 3x-1, 이어서 y축 방향 -3/2 이동하면 y=-sin 3x-5/2. a=-1, b=-5/2, ab=5/2. 대칭이동 때 상수항 부호까지 바꾸는 것(T-부호)과 순서(대칭 뒤 이동)가 함정. 통찰 없음·M_total 5 → −1 후보이나 두 변환의 순서 의존성과 부호 함정으로 벤더 「중」 대로 ★2.
    [분류 이슈] 변환 두 번·계수 곱뿐이라 절차만 보면 ★1 후보. 라벨은 ★2 로 두고 기록.
  tier: star_2
  mechanism_primary: "y=sin 3x+1 → x축 대칭 y=-(sin 3x+1) → y축 방향 -3/2 이동 y=-sin 3x-5/2 → ab=(-1)(-5/2)=5/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{5}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0586.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원래 식(sin 3x+1 → 2cos 2x-1)·이동량(-3/2 → 2)·변환 종류(x축 대칭 → y축 대칭·원점 대칭). 제약: 결과가 y=a sin 3x+b 꼴을 유지하도록, y축 대칭은 sin 에선 부호만 바꾸고 cos 에선 불변임을 고려."
    creative: "(1) 이동 뒤 대칭으로 순서를 바꿔 결과가 달라짐을 대조(★2~3 · 순서 의존) (2) x축 방향 이동을 섞어 sin 3(x-π/6) 꼴로 c 까지 결정(★3) (3) 결과 그래프가 y=cos 3x 의 그래프와 겹치는 이동량 묻기(★3 · RT sin↔cos)."
```

```yaml
- id: RPM-ALG-0587
  page: 78
  vendor_label: '유형 02 함수 $y=a\sin(bx+c)+d$의 그래프와 성질'
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    y=-(1/2) sin(4x-π/6)+1 의 주기를 aπ, 최댓값을 b, 최솟값을 c 라 할 때 abc 의 값.
  category: "진폭·b·d 에서 주기·최대·최소 읽기 → 곱"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수 y=a sin(bx+c)+d 의 그래프와 성질(최대·최소·주기·평행이동 진술 판별)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주기 2π/4=π/2 이므로 a=1/2, 최댓값 1/2+1=3/2=b, 최솟값 -1/2+1=1/2=c, abc=(1/2)(3/2)(1/2)=3/8. 계수 -1/2 의 부호가 최대·최소를 바꾸지 않는 것(T-부호)과 주기를 aπ 로 쓸 때 a=1/2 로 읽는 것(T-표기) 두 함정으로 Mₜ 2. 세 값을 각각 구해 곱하는 네 단계. 통찰 없음·M_total 6 → 벤더 「중」 대로 ★2.
  tier: star_2
  mechanism_primary: "b=4 → 주기 π/2 → a=1/2 · 진폭 1/2, d=1 → 최대 3/2 · 최소 1/2 → abc=3/8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{8}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0587.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진폭(-1/2 → -3, 2/3)·b(4 → 3, 1/2)·d(1 → -2)·c(-π/6 → 무관). 제약: 주기 2π/|b| 를 aπ 로 쓸 때 a 가 유리수, abc 가 유리수. c 는 답에 영향 없음을 유지."
    creative: "(1) 최댓값·최솟값·주기를 주고 식을 역으로 결정(★2 · 유형 02 역방향) (2) 정의역 0≤x≤π/4 로 제한해 최대·최소가 경계에서 나오게(★3 · T-범위) (3) cos 으로 바꾸고 x축 방향 이동량까지 묻기(★2)."
```

## 표본 판정 요약 (35문)

- ★ 분포: ★1 28 · ★2 6 · ★3 1 · ★4 0 · ★5 0
- 통찰형 1(0584 · EQV d1) · 절차형 34 · premium 0
- type_hint 상위: 「일반각의 삼각함수 값(2nπ+θ · -θ · π±θ 환원)」 9 · 「삼각함수 y=a sin(bx+c)·y=a cos(bx+c) 의 그래프(치역·주기)」 4 · 「절댓값을 포함한 삼각함수의 주기」 4 · 「삼각함수의 최댓값·최솟값·주기(y=a sin(bx+c)+d · y=a tan bx)」 3 · 「삼각방정식 sin x=k · cos x=k · tan x=k 의 해」 3 · (이하 「삼각부등식 … 의 해」 3 · 「삼각함수 y=a tan bx 의 그래프(주기·점근선)」 2 · 「여러 삼각함수의 합으로 된 함수의 주기(최소공배수)」 2 · 「주기함수 f(x+p)=f(x) 를 이용한 함숫값」 2 · 「함수 y=a sin(bx+c)+d 의 그래프와 성질」 2 · 「삼각함수 그래프의 대칭이동·평행이동 후 식 결정」 1)
- M_total: 4 ×26(0553~0578) · 5 ×7(0579·0580 Mₜ 2 · 0581·0583·0585·0586 Mₛ 2 · 0582 Mₐ 2) · 6 ×2(0584 Mₛ 2·Mₐ 2 · 0587 Mₛ 2·Mₜ 2)
- target_cohort: 하위권 26 · 중하위권 8(0579~0583 · 0585~0587) · 중위권 1(0584)
- 벤더 신호: 교과서 구역 28문(난이도·태그 없음 → ★1) · 유형 01 4문(대표문제 1 · 중 2 · 상중 1) · 유형 02 3문(대표문제 1 · 중 2 · 서술형 태그 1)
- 그림: 0문
- 답 대조: 35문 모두 재계산 결과가 전사 answer 와 일치. 「전사 답 확인 필요」 0건.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 2단 이상 어긋난 문항은 없고, 아래는 「통찰 0·M_total 5 → −1 후보」 규칙을 적용하면 ★1 이 되는 1단 경계 문항이다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-ALG-0582 | 벤더 「중」이나 골조는 교과서 0567(2π 배수 떼기)과 같은 인수 환원 + 대입 · 통찰 0 · M_total 5. 함수방정식 표기(Mₐ 2)만 드릴 위. 라벨 ★2 유지 | ★1 / ★2 |
| RPM-ALG-0586 | 벤더 「중」·서술형 태그이나 변환 두 번 + 계수 곱 · 통찰 0 · M_total 5. 부호 함정(T-부호) 하나가 전부. 라벨 ★2 유지 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint 11종 — 일반각 값 9 · sin/cos 그래프(치역·주기) 4 · 절댓값 주기 4 · 최대·최소·주기 3 · 삼각방정식 3 · 삼각부등식 3 · tan 그래프(주기·점근선) 2 · 합성 주기(최소공배수) 2 · 주기함수 함숫값 2 · y=a sin(bx+c)+d 성질 판별 2 · 대칭·평행이동 후 식 결정 1.
- 따로 세워야 할 유형: 「여러 삼각함수의 합으로 된 함수의 주기(최소공배수)」(0581·0583) — tan²·절댓값 항의 주기 판정과 최소공배수가 골조이며 뒤 범위에서 f(p)·합 계산과 결합해 ★2~3 으로 자람. 「주기함수 f(x+p)=f(x) 를 이용한 함숫값」(0582·0584) — 함수방정식을 주기로 읽는 EQV 가 유일하게 통찰이 붙는 유형이고 f(x+a)=-f(x)·대칭 조건 결합으로 ★3~4 까지 확장되는 독립 유형. 「절댓값을 포함한 삼각함수의 주기」(0562~0565) — |sin x|(반감)·cos|x|(불변)·|tan x|(불변)·sin|x|(비주기)의 네 갈래 판정이 뒤 범위 「유형 UP」의 절댓값 그래프·교점 개수 문항의 기초이므로 별도 유형으로 두는 편이 낫다.
- 통합해도 될 유형: 「sin/cos 그래프(치역·주기)」(0553~0556)와 「최대·최소·주기」(0559·0560)와 「y=a sin(bx+c)+d 성질 판별」(0585·0587)은 카탈로그에서 RPM 유형 02 제목 「함수 y=a sin(bx+c)+d 의 그래프와 성질」 하나로 통합 가능(교과서 드릴은 base ★1, 유형 구역은 base ★2). 「tan 그래프(주기·점근선)」(0557·0558)와 0561 은 「y=a tan(bx+c)+d 의 그래프와 성질」 하나로. 「일반각의 삼각함수 값」 9문은 2nπ+θ · -θ · π±θ 세 성질을 한 유형(base ★1)으로 묶되 뒤 범위의 「삼각함수 성질을 이용한 식 간단히 하기(π/2±θ 포함)」와는 분리. 「삼각방정식」·「삼각부등식」 드릴 6문은 각각 base ★1 기본 유형으로 두고 뒤 범위의 치환·이차식 결합 유형과 구분.
- 이 범위 35문 중 34문이 절차형이라 변형 자산으로는 숫자 변형(계수 a·b·c·d · 특수각 · 범위)이 주 용도이고, 창의 변형에서 ★ 가 오르는 지점은 (a) 안쪽 인수를 일차식으로 두어 치환 뒤 범위를 재설정할 때(0575~0580 계열 ★2 · T-범위), (b) cos|x| vs sin|x| 처럼 우함수·기함수 대칭으로 주기 여부를 판단할 때(0564·0569 계열 ★2 · SYM d1 후보), (c) 함수방정식에 부호·대칭 조건을 섞어 주기를 두 번 유도할 때(0584 계열 ★3~4 · EQV d2), (d) 변환 순서를 바꿔 결과 차이를 묻거나 sin↔cos 전환 이동량을 물을 때(0554·0556·0586 계열 ★2~3 · RT 후보)이다.
