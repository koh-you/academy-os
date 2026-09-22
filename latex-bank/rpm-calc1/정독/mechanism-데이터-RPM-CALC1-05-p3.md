---
name: mechanism-데이터-RPM-CALC1-05-p3
description: RPM 미적분Ⅰ 05 도함수의 활용 (2)(3/3 · 유형 14 함수의 최대·최소의 활용 ~ 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅰ (22개정) · 전사본 latex-bank/rpm-calc1
  section: 05 도함수의 활용 (2)
  unit_code: CALC1-05
  part: "3/3"
  extract_range: "73~78쪽 · 0474~0512"
  total_problems: 39
  unit_total: 108
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc1/items/<id>.tex
  image_source: latex-bank/rpm-calc1/figures/ (crops.json)
---

# RPM 미적분Ⅰ · 05 도함수의 활용 (2) (3/3) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅰ 05 도함수의 활용 (2) 단원(108문) 가운데 73~78쪽의 39문항(0474~0512)을 다룬다. 구역은 유형 14 함수의 최대·최소의 활용(7문) · 유형 UP 15 극값을 이용한 삼차함수의 계수의 부호의 결정(2문) · 유형 UP 16 y=f'(x) 의 그래프를 이용하여 f(x) 의 그래프 그리기(2문) · 시험에 꼭 나오는 문제(21문) · 서술형 주관식(4문) · 실력 Up(3문) 순이다. 유형 14 의 첫 문항은 「대표문제」 태그(난이도 표시 없음 → ★2 출발), 나머지는 중·상중 난이도 표시(★2 · ★3 출발)와 「서술형」 태그를 가진다. 유형 UP 은 ★3, 시험에 꼭 나오는 문제는 난이도 표시가 없어 ★2 출발(d2 통찰 · 통찰 2개 이상 · M_total 8 이상이면 ★3, 통찰 0·M_total 4 면 ★1), 서술형 주관식은 ★3, 실력 Up 은 ★4 출발로 두었다. 태그는 「중요」 5문(+0) · 「교육청 기출」 1문 · 「평가원 기출」 1문(통찰 유무로 판단). 그림 문항은 0474 · 0476 · 0478 · 0479 · 0480 · 0481 · 0482 · 0483 · 0484 · 0495 · 0496 · 0503 · 0504 · 0505 · 0511 · 0512 의 16문이며 모두 크롭 이미지(0483 · 0484 는 선택지 그림 5장까지)로 확인했다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(유형 코드 · depth · effective_depth · 근거) · `variation_notes`(numeric/creative)를 채웠다. `depth_score` 는 insights 의 effective_depth 평균(없으면 0.00)이고, `insight_type` 은 통찰이 없거나 d1 한 개뿐이면 절차형, d2 이상 또는 2개 이상이면 통찰형으로 적었다. Mₜ 는 함정 0~1개면 1, 2~3개면 2 로 매겨 M_total 은 4 이상이다. 이 구역의 「최대·최소의 활용」 문항은 모두 「변수 하나 잡기 → 다항식 세우기 → 미분 → 범위 안 극점」 한 골조를 공유하므로, 통찰은 변수를 잡기 전의 기하 관계(닮음·피타고라스·귀퉁이 직각삼각형)와 변수 선택(근호를 피하는 쪽)에만 매겼다. 「도함수 그래프 → 원함수」 문항은 f' 부호표 읽기를 RT d1 로 두고, x 로 나누어야 하는 0511 만 d2 로 올렸다.

## 문항 데이터

### 유형 14 함수의 최대·최소의 활용

```yaml
- id: RPM-CALC1-0474
  page: 73
  vendor_label: "유형 14 함수의 최대·최소의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    곡선 y=x^2-4 와 x축으로 둘러싸인 도형에 내접하고 한 변이 x축 위에 있는 직사각형 ABCD 의 넓이의 최댓값. 그림 제시.
  category: "내접 직사각형 → 넓이를 한 변수 삼차식으로 → 미분 최대"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축 사이 내접 직사각형의 넓이 최댓값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    D(t,0)(0<t<2) 로 잡으면 가로 2t·세로 4-t^2 이라 S=8t-2t^3, S'=8-6t^2=0 에서 t=2/√3, S=32√3/9. 대칭으로 반너비 t 하나만 잡는 것은 유형 14 의 기본 절차라 통찰로 세지 않았다. 대표문제·난이도 없음 → ★2 출발, 통찰 0·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "D(t,0) 설정 → S(t)=2t(4-t^2) → S'=8-6t^2=0 → t=2/√3 → S=32√3/9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{32\sqrt{3}}{9}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0474.png"
  latex: latex-bank/rpm-calc1/items/0474.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선 y=x^2-k (k=1, 9, 12) 또는 y=-x^2+k 로 바꿀 수 있음. 제약: S'=0 의 근 t=√(k/3) 이 0<t<√k 안에 있어야 하고 답의 근호 정리(k=3n^2 꼴이면 유리수)가 답 형식과 맞아야 함. 그림 라벨 A·B·C·D 의 위치(A·D 가 x축 위)는 고정."
    creative: "(1) 직사각형 둘레의 최댓값으로 바꾸면 이차식이 되어 미분 없이 풀림(★1) (2) 아래변을 x축이 아닌 직선 y=-1 로 옮기면 높이 식만 바뀜(★2 유지) (3) 넓이 최대일 때의 대각선 길이·둘레를 묻거나 사다리꼴(0478)로 바꾸면 S(t) 인수분해 관찰이 추가(★2~3)."
```

```yaml
- id: RPM-CALC1-0475
  page: 73
  vendor_label: "유형 14 함수의 최대·최소의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    하루 x개 생산 비용 f(x)=x^3-180x^2+1000x+4000(원), 개당 1000원에 전량 판매. 이익이 최대가 되는 하루 생산 개수.
  category: "이익 = 매출 − 비용 함수 세우기 → 미분 → 최대점"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "비용·이익 함수의 최대(실생활 활용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이익 P(x)=1000x-f(x)=-x^3+180x^2-4000, P'=-3x(x-120)=0 → x=120 에서 최대. 모델링 한 줄 뒤는 표준 절차. 난이도 중 → ★2 출발, 통찰 0·M_total 5 로 −1 후보이나 이익 함수를 스스로 세우는 단계가 남아 ★2 유지.
  tier: star_2
  mechanism_primary: "P(x)=1000x-f(x) → P'=-3x(x-120)=0 → x=120"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$120$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0475.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비용식 계수(180 · 1000 · 4000)와 단가 변경. 제약: 단가와 비용의 1차항 계수가 같으면 P'=-3x^2+2·(2차 계수)x 라 근 = 2·(2차 계수)/3 → 2차 계수를 3 의 배수로 두면 정수해. 그 근에서 P'' 부호(최대) 확인."
    creative: "(1) 단가를 생산량에 따라 p=1200-x 로 바꾸면 매출이 이차식 → 같은 골조 ★2 (2) 최대 이익 금액을 묻기(계산만 증가 ★2) (3) 「한계비용 f'(x) 가 단가와 같을 때 이익 최대」라는 경제 해석을 묻는 서술형(EQV d1 ★2~3)."
```

```yaml
- id: RPM-CALC1-0476
  page: 73
  vendor_label: "유형 14 함수의 최대·최소의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    한 변 12 인 정사각형 종이의 네 귀퉁이에서 합동인 정사각형을 잘라 만든 뚜껑 없는 상자의 부피 최댓값. 5지선다. 그림 제시.
  category: "귀퉁이 x → V=(12-2x)^2 x → 미분 → 범위 안 극대"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "종이를 접어 만든 상자의 부피 최댓값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    V=x(12-2x)^2 (0<x<6), V'=(12-2x)(12-6x)=0 → x=2, V=8^2·2=128 → ③. 곱의 미분에서 공통인수 (12-2x) 로 묶으면 계산이 짧다. 난이도 중 → ★2, 통찰 0·M_total 6 → 유지.
  tier: star_2
  mechanism_primary: "V(x)=x(12-2x)^2 → V'=(12-2x)(12-6x)=0 → x=2 → V=128"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0476.png"
  latex: latex-bank/rpm-calc1/items/0476.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "한 변 길이 a(6 · 18 · 24)로 변경. 제약: 최대는 x=a/6 이므로 a 가 6 의 배수면 정수해, V=2a^3/27. 직사각형 종이(a×b)로 바꾸면 V'=0 이 이차방정식이라 근이 유리수가 되는 (a,b) 를 골라야 함."
    creative: "(1) 직사각형 종이 8×5 로 바꾸면 V'=12x^2-52x+40 인수분해가 추가(★2~3) (2) 상자의 겉넓이 최대는 이차식(★1) (3) 부피가 최대일 때 밑면 넓이 또는 높이와 밑변의 비를 묻기(★2)."
```

```yaml
- id: RPM-CALC1-0477
  page: 73
  vendor_label: "유형 14 함수의 최대·최소의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=-x^2+3 위를 움직이는 점 P 와 점 A(5,4) 에 대해 선분 AP 의 길이의 최솟값.
  category: "거리의 제곱을 t 의 사차식으로 → 미분 → 최소"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "AP 대신 AP^2 을 최소화 — 근호 함수의 미분이 범위 밖이라 동치 변환이 필수"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곡선 위의 점과 정점 사이 거리의 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P(t,-t^2+3) 에서 AP^2=(t-5)^2+(t^2+1)^2=t^4+3t^2-10t+26. 도함수 4t^3+6t-10=2(t-1)(2t^2+2t+5) → t=1 에서 최소, AP^2=20, AP=2√5. 근호를 피해 제곱을 최소화하는 동치 변환(EQV d1)이 관문이고 뒤는 삼차식의 인수정리. 난이도 중 → ★2 출발, 통찰 1·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "P(t,-t^2+3) → AP^2=t^4+3t^2-10t+26 → (AP^2)'=2(t-1)(2t^2+2t+5)=0 → t=1 → 2√5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\sqrt{5}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0477.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정점 A 의 좌표와 포물선 계수 변경. 제약: (AP^2)' 이 삼차식이라 정수 근 하나와 판별식이 음수인 이차인수로 갈라져야 함(A 를 곡선의 법선 위에 두면 자동). 최솟값이 √(정수) 로 정리되게."
    creative: "(1) 최소일 때 P 의 좌표를 묻고 AP 가 곡선의 법선임을 확인시키기(RT d1 ★2) (2) 곡선을 삼차로 바꾸면 거리 제곱이 6차라 부담이 커지므로 대신 점과 직선 사이 거리의 최소(접선 평행 조건 ★2) (3) A 를 (0,k) 로 두고 최소 거리가 특정값이 되는 k 를 역으로 묻기(BW d1 ★3)."
```

```yaml
- id: RPM-CALC1-0478
  page: 73
  vendor_label: "유형 14 함수의 최대·최소의 활용"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    곡선 y=-2x^2+8 과 x축의 교점 A, B. x축과 곡선으로 둘러싸인 도형에 내접하는 사다리꼴 ABCD 의 넓이의 최댓값이 q/p 일 때 서로소 p, q 의 합. 그림 제시.
  category: "내접 사다리꼴 → 넓이 삼차식 → 미분 → 기약분수"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축 사이 내접 사다리꼴의 넓이 최댓값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    C(t,-2t^2+8)(0<t<2) 로 두면 S=(1/2)(4+2t)(8-2t^2)=2(t+2)^2(2-t), S'=-2(3t-2)(t+2)=0 → t=2/3, S=512/27 → p+q=539. 0474 와 같은 골조에 사다리꼴 넓이 공식만 얹힘. 난이도 중·서술형 태그 → ★2 출발, 통찰 0·M_total 6 → 유지.
  tier: star_2
  mechanism_primary: "C(t,-2t^2+8) → S(t)=(t+2)(8-2t^2) → S'=-2(3t-2)(t+2)=0 → t=2/3 → S=512/27 → 539"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$539$"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0478.png"
  latex: latex-bank/rpm-calc1/items/0478.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선 y=-ax^2+b (교점 ±√(b/a)) 변경. 제약: 교점이 정수(b/a 완전제곱), S 를 (t+r)^2(r-t) 꼴로 두면 S'=0 의 근이 t=r/3 으로 자동 유리수. 답을 p+q 로 묻는다면 512/27 처럼 약분되지 않는 분수여야 함."
    creative: "(1) 사다리꼴 대신 윗변이 한 점인 삼각형 ABC 로 바꾸면 이차식(★1) (2) 넓이 최대일 때 사다리꼴의 높이와 윗변의 비(★2) (3) 옆변 길이가 최대인 사다리꼴로 바꾸면 거리 제곱 함수(0477 결합 ★3)."
```

```yaml
- id: RPM-CALC1-0479
  page: 73
  vendor_label: "유형 14 함수의 최대·최소의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    밑면 반지름 3, 높이 15 인 원뿔에 내접하는 원기둥의 부피의 최댓값. 5지선다. 그림 제시.
  category: "축 단면 닮음으로 높이를 반지름으로 → V=πx^2 h 삼차식 → 미분"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "입체를 축 단면의 닮은 삼각형으로 옮겨 반지름 x 와 높이 y 의 관계 y=15-5x 를 얻음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "원뿔에 내접하는 원기둥의 부피 최댓값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    축을 지나는 단면에서 (3-x):3=y:15 → y=15-5x. V=πx^2(15-5x)=5π(3x^2-x^3), V'=15πx(2-x)=0 → x=2, y=5, V=20π → ⑤. 단면 닮음으로 두 변수를 하나로 묶는 표현 전환(RT d1)이 이 문항의 전부이고 계산은 가볍다. 난이도 상중 → ★3 출발, 통찰 1·M_total 5 → ★3 유지. [분류 이슈] M_total 5·d1 하나뿐이라 ★2 후보이나 벤더 상중을 따라 ★3.
  tier: star_3
  mechanism_primary: "단면 닮음 (3-x)/3=y/15 → y=15-5x → V=πx^2(15-5x) → V'=15πx(2-x)=0 → x=2 → 20π"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0479.png"
  latex: latex-bank/rpm-calc1/items/0479.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원뿔 반지름 R·높이 H 변경. 제약: 최대는 항상 x=2R/3, y=H/3 이라 V_max=4πR^2H/27 — 선택지가 정수×π 가 되도록 R^2H 를 27 의 배수로(R=3 계열이 편함)."
    creative: "(1) 원기둥 옆넓이 최대(2πxy 는 이차식 ★1~2) (2) 반구·구에 내접하는 원기둥(0512 골조: 피타고라스 RT d1 + 변수 선택 SC d1 ★3~4) (3) 원기둥 부피가 최대일 때 원뿔 부피에 대한 비를 묻기(항상 4/9 인 상수 발견 ★3)."
```

```yaml
- id: RPM-CALC1-0480
  page: 73
  vendor_label: "유형 14 함수의 최대·최소의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    밑면이 정사각형이고 옆면 ABFE 의 대각선 AF=12 인 사각기둥의 부피가 최대일 때의 밑넓이. 그림 제시.
  category: "a^2+h^2=144 → 높이 h 를 변수로 → V=(144-h^2)h 미분"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "밑변 a 를 남기면 V=a^2√(144-a^2) 로 근호가 생겨 미적분Ⅰ 범위 밖 → 높이 h 를 변수로 잡아 다항식으로 만드는 갈래 선택"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "대각선 길이가 고정된 사각기둥의 부피 최댓값(변수 선택)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    밑변 a·높이 h 에서 a^2+h^2=144. V=a^2h=(144-h^2)h=144h-h^3, V'=144-3h^2=0 → h=4√3, 밑넓이 a^2=144-48=96. 어느 변수를 남기느냐로 갈리며 a 쪽은 근호 함수라 막힌다(SC d1). 난이도 상중 → ★3, 통찰 1·M_total 5 → 유지.
  tier: star_3
  mechanism_primary: "a^2+h^2=144 → V=(144-h^2)h → V'=144-3h^2=0 → h=4√3 → a^2=96"
  insight_type: 절차형
  target_cohort: 중상위권
  answer: "$96$"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0480.png"
  latex: latex-bank/rpm-calc1/items/0480.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대각선 길이 d(6 · 9 · 12 · 15) 변경. 제약: h=d/√3, 밑넓이 2d^2/3 → d 가 3 의 배수면 정수 밑넓이. 묻는 값을 밑넓이(정수)로 두는 이유는 h 가 무리수이기 때문 — 높이를 물으면 근호 답."
    creative: "(1) 대각선 대신 옆면 둘레 2a+2h=k 고정으로 바꾸면 V=a^2(k/2-a) 삼차식이라 변수 선택 갈래가 사라짐(★2) (2) 정사각기둥 대신 원기둥(옆면 대각선 고정 → 4r^2+h^2=d^2)으로 바꾸면 같은 골조 ★3 (3) 부피 최대일 때 밑면 대각선과 높이의 비, 또는 최대 부피를 근호 포함 형태로 묻기(★3)."
```

### 유형 UP 15 극값을 이용한 삼차함수의 계수의 부호의 결정

```yaml
- id: RPM-CALC1-0481
  page: 74
  vendor_label: "유형 UP 15 극값을 이용한 삼차함수의 계수의 부호의 결정"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    삼차함수 f(x)=ax^3+bx^2+cx+d 의 그래프(극대 α<0<극소 β, |α|<|β|, 우상향, y절편 양수)가 주어질 때 ab·cd 의 부호 조합 중 옳은 것. 5지선다. 그림 제시.
  category: "그래프 → a 부호 · f' 의 근과 계수 → b, c 부호 → d=f(0)"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "극점 α, β 를 f'(x)=3ax^2+2bx+c 의 근으로 보고 |α|<|β| 를 α+β>0 로 읽어 b 의 부호, αβ<0 로 c 의 부호를 결정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼차함수 그래프에서 계수의 부호 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    오른쪽 위로 뻗으므로 a>0. f' 의 두 근이 α<0<β, |α|<|β| 이므로 α+β=-2b/(3a)>0 → b<0, αβ=c/(3a)<0 → c<0, f(0)=d>0. 따라서 ab<0, cd<0 → ④. 그래프 정보를 f' 의 근과 계수 관계로 옮기고 절댓값 비교를 합의 부호로 읽는 단계(RT d2)가 핵심. 유형 UP 대표 → ★3, 통찰 1(d2)·M_total 7 → 유지.
  tier: star_3
  mechanism_primary: "a>0 (우상향) → α+β>0, αβ<0 (f' 근과 계수) → b<0, c<0 → d=f(0)>0 → ab<0, cd<0"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-0481.png"
  latex: latex-bank/rpm-calc1/items/0481.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림의 극점 배치(|α|<|β| ↔ |α|>|β|), y절편 부호, 개형 뒤집기(a 의 부호)를 바꾸면 선택지의 부호 조합이 바뀜. 제약: 부호표(a,b,c,d)를 먼저 확정하고 선택지 다섯 개 중 하나만 참이 되도록 배치."
    creative: "(1) 부호가 정해진 뒤 |c-b|-|b|+|c| 같은 절댓값 식 정리(0505 골조 ★3) (2) 그래프 대신 「x=α, β 에서 극값, f(0)<0」 문장으로 주면 RT 가 EQV 로 바뀌며 ★3 유지 (3) 사차함수로 확장하면 f' 이 삼차라 세 근의 관계가 필요 → ★4."
```

```yaml
- id: RPM-CALC1-0482
  page: 74
  vendor_label: "유형 UP 15 극값을 이용한 삼차함수의 계수의 부호의 결정"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    삼차함수 f(x)=ax^3+bx^2+cx+d 의 그래프(극소 α<극대 β<0, 우하향, y절편 양수)가 주어질 때 a, ad, b+c, bc+d, c-ab 중 값이 양수인 것. 5지선다. 그림 제시.
  category: "그래프 → a 부호 · f' 의 두 음근 → b, c 부호 → d → 선택지 부호 판정"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "극점 두 개가 모두 음수 → f' 의 근의 합·곱 부호 → a 의 부호와 맞춰 b, c 의 부호"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼차함수 그래프에서 계수의 부호 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    우하향이므로 a<0. f' 의 두 근 α, β 가 모두 음수 → α+β=-2b/(3a)<0, αβ=c/(3a)>0 → a 와 부호를 맞추면 b<0, c<0. y절편 d>0. 선택지: a<0, ad<0, b+c<0, bc+d>0, c-ab<0 → ④. 0481 과 같은 골조에서 절댓값 비교가 빠져 통찰은 d1. [분류 이슈] 유형 UP 구역(★3 출발)과 난이도 중(★2)이 어긋남 — 통찰 1·M_total 7 로 ★3 을 두되 1단 차이.
  tier: star_3
  mechanism_primary: "a<0 (우하향) → α+β<0, αβ>0 (f' 근과 계수) → b<0, c<0 → d>0 → bc+d>0"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-0482.png"
  latex: latex-bank/rpm-calc1/items/0482.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극점 위치(둘 다 양수·둘 다 음수), 개형 뒤집기, y절편 부호 변경. 제약: 선택지 다섯 식 중 하나만 양수가 되도록 부호표로 검증(bc 처럼 곱 항은 음수×음수임에 유의)."
    creative: "(1) 「양수인 것의 개수」로 바꿔 선택지 전부를 판정하게(★3 유지) (2) f' 의 그래프를 주고 f 의 계수 부호를 묻기(RT 한 단계 감소 ★2) (3) 극값의 부호 f(α)<0<f(β) 까지 결합해 f(1) 의 부호나 d 의 범위를 묻기(CON d1 추가 ★3~4)."
```

### 유형 UP 16 $y=f'(x)$의 그래프를 이용하여 $f(x)$의 그래프 그리기

```yaml
- id: RPM-CALC1-0483
  page: 74
  vendor_label: "유형 UP 16 $y=f'(x)$의 그래프를 이용하여 $f(x)$의 그래프 그리기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    다항함수 f 의 도함수 y=f'(x) 의 그래프(x=-1 에서 x축에 접하고 x=2 에서 부호가 음→양)가 주어질 때 y=f(x) 의 개형이 될 수 있는 것. 그림 선택지 5지선다. 그림 제시.
  category: "f' 부호표 → 증감·극값 → 접하는 근은 극값 아님 → 개형 대조"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f' 그래프의 부호를 f 의 증감표·극값 위치로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "도함수 그래프로 원함수의 개형 고르기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'≤0 (x<2, x=-1 에서 0), f'>0 (x>2) 이므로 f 는 x=2 까지 감소하다가 x=2 에서 극소. x=-1 은 접점(부호 변화 없음)이라 극값이 아니고 잠시 수평인 감소점. 두 조건을 모두 만족하는 것은 ①. 표현 전환 RT d1 에 중근 함정(T-경계)·f' 를 f 로 착각(T-표기). 유형 UP 대표 → ★3, 통찰 1·M_total 8 → 유지.
  tier: star_3
  mechanism_primary: "f' 부호표(x<2: ≤0, x>2: >0) → x=2 극소 · x=-1 은 정지점(극값 아님) → 개형 ①"
  insight_type: 절차형
  target_cohort: 중상위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0483.png"
  latex: latex-bank/rpm-calc1/items/0483.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점(-1)과 교점(2)의 위치, 부호 배치(위아래 뒤집기)를 바꾸면 정답 개형이 바뀜. 제약: 선택지 다섯 개형이 극점 개수·위치·정지점 표기로 서로 구별되고 정답이 하나뿐이어야 함."
    creative: "(1) f' 대신 xf'(x) 의 그래프(0511 골조)로 주면 x 의 부호로 나누는 단계 추가 → ★4 (2) 「f 의 극값의 개수」·「f 가 감소하는 구간」을 수치로 묻기(★2) (3) f' 그래프에 f(0)=0 을 붙여 f 의 부호까지 묻는 ㄱㄴㄷ(★3)."
```

```yaml
- id: RPM-CALC1-0484
  page: 74
  vendor_label: "유형 UP 16 $y=f'(x)$의 그래프를 이용하여 $f(x)$의 그래프 그리기"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    다항함수 f 의 도함수 y=f'(x) 의 그래프(x=a 에서 양→음, x=b 에서 x축에 접함, x=c 에서 음→양)가 주어질 때 y=f(x) 의 개형이 될 수 있는 것. 그림 선택지 5지선다. 그림 제시.
  category: "f' 부호표 (+,−,−,+) → a 극대 · b 정지점 · c 극소 → 개형 대조"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f' 그래프의 부호를 f 의 증감표로 옮기고 접점 b 는 극값이 아님을 판별"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "도함수 그래프로 원함수의 개형 고르기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'>0 (x<a), f'≤0 (a<x<c, x=b 에서 0), f'>0 (x>c) → x=a 극대, x=c 극소, x=b 는 접점이라 극값 없이 감소 중 정지. 이에 맞는 것은 ③. 0483 과 같은 골조에 극점이 하나 더. 난이도 상중 → ★3, 통찰 1·M_total 8 → 유지.
  tier: star_3
  mechanism_primary: "f' 부호표 (+,−,−,+) → a 극대 · b 정지점 · c 극소 → 개형 ③"
  insight_type: 절차형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0484.png"
  latex: latex-bank/rpm-calc1/items/0484.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점 b 의 위치(a 와 c 사이 어디든), 교점 개수(2→3), 부호 뒤집기. 제약: f' 이 사차 이상 다항함수의 개형으로 그려질 수 있어야 하고 선택지 개형의 극점 개수가 서로 다르게 설계."
    creative: "(1) 「f 가 극댓값을 갖는 x 의 개수」처럼 값 하나로 축소(★2) (2) f' 을 식 f'(x)=(x-a)(x-b)^2(x-c) 로 주고 개형을 그리게(★2~3) (3) f(a)=0 을 결합해 방정식 f(x)=0 의 실근 개수를 묻기(06 단원 결합 XU d1 → ★4)."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-CALC1-0485
  page: 75
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    f(x)=x^3+ax^2+9x-1 이 감소하는 x 의 범위가 1≤x≤b 일 때 a+b. 5지선다.
  category: "감소 구간의 양 끝 = f' 의 두 근 → 근과 계수 → a, b"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "감소하는 구간이 주어진 삼차함수의 계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=3x^2+2ax+9 의 두 근이 1, b 이므로 3(x-1)(x-b) 와 비교: 곱 b=3, 합 -2a/3=4 → a=-6. a+b=-3 → ②. 「감소 구간 = f'≤0 인 구간」은 유형의 정의 그대로라 통찰로 세지 않음. 시험 구역·난이도 없음 → ★2, 통찰 0·M_total 6 → 유지.
  tier: star_2
  mechanism_primary: "f'=3(x-1)(x-b) → 1·b=3, 1+b=-2a/3 → b=3, a=-6 → a+b=-3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0485.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "1차항 계수 9(=3·1·b) 와 구간 왼쪽 끝 1 을 바꾸면 b 가 따라 결정. 제약: 1차항 계수가 3·(두 근의 곱) 이므로 3 의 배수여야 b 정수. 선택지에 a+b 의 부호 착각값(3 등)을 배치."
    creative: "(1) 「증가하는 구간이 x≤1 또는 x≥b」로 문구만 바꾸기(★2) (2) 감소 구간의 길이가 2 라는 조건으로 바꾸면 근의 차 공식 필요(EQV d1 ★2~3) (3) f'(x)≤0 의 해가 정확히 [1,b] 임을 이차부등식으로 서술하게(★2)."
```

```yaml
- id: RPM-CALC1-0486
  page: 75
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    f(x)=-x^3-ax^2+2ax+15 가 실수 전체에서 감소하도록 하는 정수 a 의 개수. 5지선다.
  category: "실수 전체 감소 ⟺ f'≤0 ⟺ 판별식 ≤0 → 정수 개수"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼차함수가 실수 전체에서 감소(증가)할 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=-3x^2-2ax+2a≤0 (모든 x) ⟺ 3x^2+2ax-2a≥0 ⟺ D/4=a^2+6a≤0 ⟺ -6≤a≤0 → 정수 7개 → ③. 최고차항이 음수라 부호를 뒤집는 것과 등호 포함(D=0 허용)이 함정이지만 절차는 표준. 시험 구역 → ★2, 통찰 0·M_total 7 → 유지.
  tier: star_2
  mechanism_primary: "f'≤0 ∀x → 3x^2+2ax-2a≥0 → D/4=a^2+6a≤0 → -6≤a≤0 → 7개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0486.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 (-a, 2a) 를 (pa, qa) 로 바꾸면 D/4=p^2a^2+3qa → a(p^2a+3q)≤0 → 정수 개수 = 3q/p^2+1 (q>0). 제약: 3q/p^2 이 정수가 되게."
    creative: "(1) 「증가하도록」으로 바꾸고 최고차항을 양수로(★2) (2) 「구간 [0,2] 에서 감소」로 국소화하면 끝점 조건(0488 골조 EQV d1 ★2~3) (3) 「역함수가 존재」·「일대일대응」 문구로 바꾸면 조건 해석 EQV d1 추가(0487 · 0506)."
```

```yaml
- id: RPM-CALC1-0487
  page: 75
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    f(x)=x^3+2kx^2+4x 가 임의의 두 실수 x1≠x2 에 대해 f(x1)≠f(x2) 를 만족시킬 때 실수 k 의 범위.
  category: "일대일 조건 → 삼차함수는 증가함수 → f'≥0 → 판별식"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x1≠x2 → f(x1)≠f(x2) 를 일대일로 읽고, 최고차항 양수인 삼차함수의 일대일은 증가함수 ⟺ f'≥0 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼차함수가 일대일(역함수 존재)일 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조건은 f 가 일대일이라는 뜻이고 최고차항 양수인 삼차함수가 일대일이려면 증가함수 → f'=3x^2+4kx+4≥0 (모든 x) → D/4=4k^2-12≤0 → -√3≤k≤√3. 조건 문장을 단조성으로 옮기는 동치 변환(EQV d1) 뒤는 0486 과 같은 절차. 시험 구역 → ★2, 통찰 1(d1)·M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "x1≠x2 → f(x1)≠f(x2) ⟺ 일대일 ⟺ f'≥0 ∀x → D/4=4k^2-12≤0 → -√3≤k≤√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\sqrt{3}\le k\le \sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0487.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2k·4 를 바꾸면 D/4=(계수)^2 k^2-3·(상수) 로 범위 끝이 √ 값. 제약: 답이 「-p≤k≤p」 꼴이 되도록 k 의 1차항 없이 대칭 유지, p 를 유리수로 하려면 3·상수가 완전제곱."
    creative: "(1) 「역함수가 존재」로 바꾸기(0506 동일 ★2~3) (2) 「x1<x2 이면 f(x1)<f(x2)」 증가 정의 문장(★2) (3) f(x1)=f(x2) 인 서로 다른 x1, x2 가 존재하는 정수 k 의 최솟값(부정 → 극값 존재 D>0, BW d1 ★3)."
```

```yaml
- id: RPM-CALC1-0488
  page: 75
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험"
  summary: |
    f(x)=2x^3+ax^2 이 구간 [2,3] 에서 감소하도록 하는 실수 a 의 최댓값. 5지선다.
  category: "구간에서 f'≤0 → 인수 2x(3x+a) 의 부호 → a≤-3x 의 최솟값"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구간 [2,3] 에서 f'≤0 는 판별식이 아니라 구간 조건 — f'=2x(3x+a) 에서 x>0 이므로 a≤-3x 가 구간 전체에서 성립(또는 위로 열린 f' 의 양 끝 f'(2)≤0, f'(3)≤0)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "주어진 구간에서 감소(증가)하도록 하는 계수의 범위"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=6x^2+2ax=2x(3x+a). [2,3] 에서 x>0 이므로 3x+a≤0 ⟺ a≤-3x 가 구간 전체에서 성립 → a≤-9 → 최댓값 -9 → ②. 판별식으로 풀면 오답이 되는 점을 읽는 EQV d1 이 핵심. 시험 구역·중요 → ★2, 통찰 1(d1)·M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "f'=2x(3x+a)≤0 on [2,3] → a≤-3x (x∈[2,3]) → a≤-9 → 최댓값 -9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0488.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [p,q](양수)와 최고차항 계수 변경. 제약: 감소 조건은 a≤-3q(오른쪽 끝)이므로 답은 -3q. 상수항·1차항이 없어 f' 이 x 로 묶이는 구조 유지 — 구간에 0 이 들어가면 인수 x 의 부호가 바뀌어 조건이 깨짐."
    creative: "(1) f=x^3+ax^2+bx 처럼 f' 이 인수분해되지 않게 하면 f'(2)≤0, f'(3)≤0 두 부등식(EQV d1 ★3) (2) 「감소 구간이 [2,3] 을 포함」과 「감소 구간이 정확히 [2,3]」의 차이를 묻기(MI d1 ★3) (3) a 의 값에 따른 감소 구간의 길이 함수(★3)."
```

```yaml
- id: RPM-CALC1-0489
  page: 75
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    f(x)=2x^3-9x^2+12x+2 의 극댓값 M 과 극솟값 m 의 곱 Mm.
  category: "f'=0 → 두 극값 계산 → 곱"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼차함수의 극댓값·극솟값 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'=6(x-1)(x-2) → f(1)=7 (극대), f(2)=6 (극소), Mm=42. 계산 한 줄. 시험 구역 ★2 출발이나 통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f'=6(x-1)(x-2)=0 → f(1)=7, f(2)=6 → Mm=42"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$42$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0489.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f'=6(x-p)(x-q) 가 되도록 역설계(f=2x^3-3(p+q)x^2+6pqx+c). 제약: p, q 정수·극값이 정수가 되게 상수항 조정."
    creative: "(1) M-m 이나 극점 사이 거리로 바꾸기(★1) (2) 극값의 합이 0 이 되도록 상수항을 정하기(0507 골조 ★2~3) (3) 두 극점을 잇는 직선의 방정식(★2)."
```

```yaml
- id: RPM-CALC1-0490
  page: 75
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "시험"
  summary: |
    다항함수 f 에 대해 g(x)=(x^2-2x)f(x). f 가 x=3 에서 극솟값 2 를 가질 때 g'(3).
  category: "극값 조건 → f(3)=2, f'(3)=0 → 곱의 미분에 대입"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극값 조건(f(a), f'(a))을 곱의 미분에 대입"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    극솟값 2 at x=3 → f(3)=2, f'(3)=0. g'=(2x-2)f+(x^2-2x)f' → g'(3)=4·2+3·0=8. 극값 조건을 두 등식으로 옮기는 것은 표준 절차. 시험 구역·기출(+0) → ★2, 통찰 0·M_total 6 → 유지.
  tier: star_2
  mechanism_primary: "극솟값 2 at 3 → f(3)=2, f'(3)=0 → g'(3)=(2·3-2)·2+(9-6)·0=8"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0490.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곱해지는 다항식(x^2-2x)과 극점 위치·극값 변경. 제약: 극점 x=a 에서 앞 다항식의 도함수 값과 f(a) 의 곱이 답 — 정수로 설계. f'(a)=0 이라 두 번째 항은 항상 소멸."
    creative: "(1) g 가 x=3 에서 극값을 갖는지 판정하게(g'(3)=8≠0 → 아님, EQV d1 ★2~3) (2) g(x)=(x-3)^2 f(x) 처럼 앞 인수가 x=3 에서 0 이면 g'(3)=0 이 되어 극값 여부를 더 따져야 함(★3) (3) f(3)=2, f'(3)=0 만으로 g 의 증감을 묻는 ㄱㄴㄷ(★3)."
```

```yaml
- id: RPM-CALC1-0491
  page: 75
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    f(x)=x^4-4x^3+4x^2+2 의 극대·극소가 되는 세 점을 꼭짓점으로 하는 삼각형의 넓이. 5지선다.
  category: "f'=4x(x-1)(x-2) → 세 극점 좌표 → 삼각형 넓이"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사차함수의 극점 세 개가 이루는 도형"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=4x(x-1)(x-2) → (0,2) 극소 · (1,3) 극대 · (2,2) 극소. 밑변 2, 높이 1 → 넓이 1 → ②. f=(x^2-2x)^2+2 의 x=1 대칭을 보면 두 극솟값이 같음을 바로 알지만 필수는 아님. 시험 구역 → ★2, 통찰 0·M_total 6 → 유지.
  tier: star_2
  mechanism_primary: "f'=4x(x-1)(x-2)=0 → (0,2),(1,3),(2,2) → 넓이 (1/2)·2·1=1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0491.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f=(x^2-2px)^2+c 꼴로 두면 극점 (0,c),(p,p^4+c),(2p,c) → 넓이 p^5. 제약: 선택지가 유리수가 되도록 p 정수(p=1 이 자연스러움)."
    creative: "(1) 세 극점이 이루는 삼각형의 둘레·외접원 반지름(★2~3) (2) f=x^4-4x^3+4x^2+k 로 두고 삼각형이 x축과 만나지 않을 k 의 범위(EQV d1 ★3) (3) 대칭축 x=1 을 이용해 두 극솟값이 같음을 보이는 서술형(SYM d1 ★2)."
```

```yaml
- id: RPM-CALC1-0492
  page: 76
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    f(x)=-x^3-x^2+x+1/3 에 대해 g(x)=|f(x)| 의 모든 극댓값의 합.
  category: "f 의 극값 → 그래프를 x축 기준으로 접기 → |f| 의 극댓값 두 개의 합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f 의 그래프를 x축 기준으로 접어 |f| 를 읽음 — 음의 극솟값이 극댓값으로 바뀌고 f=0 인 점은 극솟값이 되어 세지 않음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "절댓값을 씌운 함수 |f(x)| 의 극값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'=-(3x-1)(x+1) → f(-1)=-2/3 (극소), f(1/3)=14/27 (극대). |f| 의 그래프는 음수 부분을 접어 올린 것이라 극댓값은 |-2/3|=2/3 와 14/27, 합 32/27. f 의 영점 세 곳은 |f| 의 극솟값이라 세지 않음. 접기 표현 전환(RT d2)이 없으면 극댓값 하나만 답하기 쉬움. 시험 구역 → ★2 출발, 통찰 d2·M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "f 극값 (-1, -2/3)·(1/3, 14/27) → |f| 로 접기 → 극댓값 2/3, 14/27 → 합 32/27"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{32}{27}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0492.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 계수 변경 시 극솟값이 음수·극댓값이 양수(부호가 갈려야 접기 효과가 생김)이고 극값이 유리수여야 함. 제약: 상수항으로 극값의 부호를 조절, f(-1)<0<f(1/3) 유지."
    creative: "(1) |f| 의 극솟값의 개수(영점 3개, MI d1 ★3) (2) g=f(|x|) 로 바꾸면 y축 대칭 처리(SYM d1 ★3) (3) |f(x)|=k 의 서로 다른 실근 개수(06 단원 결합 ★4)."
```

```yaml
- id: RPM-CALC1-0493
  page: 76
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    최고차항 계수 1 인 삼차함수 f 가 ㈎ (x-2)^2 으로 나누어떨어지고 ㈏ lim_{x→1} {f(x)-3x^2 f(1)+2f(1)}/(x^2-1) = -15/2 를 만족시킬 때 f 의 극댓값.
  category: "인수 조건 → f=(x-2)^2(x-k) · 극한식 → 미분계수 → k 결정 → 극댓값"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "(x-2)^2 으로 나누어떨어짐 → f(x)=(x-2)^2(x-k) 한 문자로 압축"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "극한식의 분자를 {f(x)-f(1)}-3f(1)(x^2-1) 로 분해해 f'(1)/2-3f(1) 의 미분계수 표현으로 전환"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "극한 조건과 인수 조건으로 삼차함수 결정 후 극값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㈎ 에서 f=(x-2)^2(x-k). ㈏ 의 분자는 {f(x)-f(1)}-3f(1)(x^2-1) 이므로 극한은 f'(1)/2-3f(1)=-15/2 → f'(1)-6f(1)=-15. f(1)=1-k, f'(1)=2k-1 대입 → 8k=-8, k=-1. f=(x-2)^2(x+1), f'=3x(x-2) → 극댓값 f(0)=4. 03 단원의 극한→미분계수 전환(RT d2)과 인수 조건(EQV d1)이 결합된 종합 문항. 시험 구역 ★2 출발, 통찰 2·M_total 9 → ★3. [분류 이슈] 통찰 2개로 +1 후보(★4)이나 두 전환 모두 시판 표준이라 ★3 으로 둠.
  tier: star_3
  mechanism_primary: "(x-2)^2(x-k) → 극한식 분해 → f'(1)-6f(1)=-15 → k=-1 → f'=3x(x-2) → f(0)=4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$4$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0493.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중근 위치 2, 극한점 1, 극한값 -15/2 변경. 제약: 분자가 x→1 에서 0 이 되도록 f(1) 의 계수 합이 0 (1-3+2=0 구조 유지), k 가 정수로 떨어지게 극한값을 역산, 극댓값이 정수."
    creative: "(1) ㈏ 를 lim (f(x)-f(1))/(x-1)=p 로 단순화하면 RT d1 → ★2~3 (2) ㈎ 를 「f(x)=0 이 중근 2 를 가짐」 문장으로 바꿔 EQV 강화(★3) (3) 극댓값 대신 「f(x)=극댓값 의 서로 다른 실근 개수」로 확장(06 단원 결합 ★4)."
```

```yaml
- id: RPM-CALC1-0494
  page: 76
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험"
  summary: |
    f(x)=x^3-3kx^2-9k^2x+1 의 극댓값과 극솟값의 차가 32 일 때 양수 k.
  category: "f'=3(x-3k)(x+k) → 두 극값 (k 의 식) → 차 = 32k^3 → k"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극댓값과 극솟값의 차로 계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=3(x-3k)(x+k) → x=-k 극대 5k^3+1, x=3k 극소 -27k^3+1, 차 32k^3=32 → k=1. k 가 계수 전체에 스며 있어 계산이 조금 무겁지만 절차는 표준. 시험 구역·중요 → ★2, 통찰 0·M_total 7 → 유지.
  tier: star_2
  mechanism_primary: "f'=3(x-3k)(x+k) → f(-k)-f(3k)=32k^3 → 32k^3=32 → k=1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$1$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0494.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f' 의 근을 -pk, qk 로 두면 차는 (1/2)|α-β|^3=(p+q)^3 k^3/2 → 주어진 차를 그에 맞게. 제약: k>0 이 극대·극소의 순서를 정함(k<0 이면 뒤바뀜) — 차의 절댓값을 쓰면 k 의 부호 무관."
    creative: "(1) 극댓값과 극솟값의 합이 주어지면 상수항이 살아남아 다른 골조(★2) (2) 극점 사이의 거리·두 극점을 잇는 선분의 기울기로 바꾸기(★2~3) (3) 삼차함수 극값 차 공식 (a/2)|α-β|^3 을 유도하는 서술형(SC d1 ★3)."
```

```yaml
- id: RPM-CALC1-0495
  page: 76
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    삼차함수 f 의 도함수 y=f'(x) 의 그래프(x축과 -3, 1 에서 만나고 y절편이 3 인 위로 볼록 포물선)가 주어질 때 f 의 극댓값과 극솟값의 차. 그림 제시.
  category: "그래프 → f'=-(x+3)(x-1) → f 의 계수 → 극값의 차(상수항 소거)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프의 교점·y절편으로 f'(x)=-(x+3)(x-1) 을 세우고 f 의 계수를 역산, 상수항은 차에서 소거됨을 인식"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "도함수 그래프로 극값의 차 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=a(x+3)(x-1), f'(0)=-3a=3 → a=-1 → f'=-x^2-2x+3 → f=-x^3/3-x^2+3x+C. x=-3 극소, x=1 극대, 차 f(1)-f(-3)=5/3+9=32/3 (C 소거). 그래프를 식으로 옮기는 RT d1 뒤는 계산. 시험 구역 → ★2, 통찰 1(d1)·M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "f'=-(x+3)(x-1) (교점·y절편) → f 계수 -1/3, -1, 3 → f(1)-f(-3)=32/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{32}{3}$'
  answer_source: "답지"
  figure: "crop:fig-0495.png"
  latex: latex-bank/rpm-calc1/items/0495.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "교점 p, q 와 y절편 변경. 제약: 극값의 차 = (|a|/6)(q-p)^3 (f' 의 최고차항 a) 이므로 (q-p)^3 이 분모 처리 가능하게, y절편 = -a·p·q 로 정수."
    creative: "(1) f(0)=1 을 추가해 극댓값 자체를 묻기(★2) (2) 그래프 대신 「f'(x) 는 (x+3)(x-1) 의 상수배」 문장만 주기(★2) (3) 극값 차 공식을 f' 의 계수로 표현하는 서술형(★3)."
```

```yaml
- id: RPM-CALC1-0496
  page: 76
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험"
  summary: |
    f 의 도함수 y=f'(x) 의 그래프(-1, 1 에서 x축과 만나는 아래로 볼록 포물선)가 주어질 때 보기 ㄱ~ㄷ(x=0 극소 · (0,1) 에서 증가 · x=-1 극대이고 x=1 극소) 중 옳은 것. 그림 제시.
  category: "f' 부호표 (+,−,+) → 극대·극소·증감 판정 → 보기 대조"
  M: {s: 1, k: 1, a: 3, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f' 의 부호를 f 의 증감·극값으로 옮김 (f'(0)≠0 이므로 x=0 은 극점 아님)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "도함수 그래프로 원함수의 증감·극값 판정(ㄱㄴㄷ)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'>0 (x<-1), f'<0 (-1<x<1), f'>0 (x>1) → x=-1 극대, x=1 극소, (0,1) 에서 감소, f'(0)≠0 이라 x=0 은 극점 아님 → ㄷ 만 옳음. 표현 전환 한 단계(RT d1). 시험 구역·중요 → ★2, 통찰 1(d1)·M_total 6 → 유지.
  tier: star_2
  mechanism_primary: "f' 부호표 (+,−,+) → -1 극대 · 1 극소 · (0,1) 감소 → ㄷ"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "ㄷ"
  answer_source: "답지"
  figure: "crop:fig-0496.png"
  latex: latex-bank/rpm-calc1/items/0496.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "교점 위치·포물선 방향(뒤집으면 극대·극소 교환)·보기 문장 변경. 제약: 세 보기 중 참인 것의 조합이 유일하게 정해지도록 설계."
    creative: "(1) f' 그래프에 접점(중근)을 넣어 극값 아님을 판정하게(0483 골조 ★3) (2) xf'(x) 의 그래프로 주기(0511 골조 ★4) (3) f(-1)=0 을 추가해 f 의 부호·f(x)=0 의 실근 개수 보기(06 결합 ★3~4)."
```

```yaml
- id: RPM-CALC1-0497
  page: 76
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    f(x)=x^3-ax^2+(a+6)x+1 이 극값을 갖지 않도록 하는 정수 a 의 개수. 5지선다.
  category: "극값 없음 ⟺ f' 의 판별식 ≤0 → a 의 이차부등식 → 정수 개수"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼차함수가 극값을 갖지 않을(가질) 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=3x^2-2ax+a+6 이 부호를 바꾸지 않으면 됨 → D/4=a^2-3a-18≤0 → (a-6)(a+3)≤0 → -3≤a≤6 → 10개 → ④. D=0 (중근)도 극값 없음에 포함되는 등호 처리가 함정. 시험 구역 → ★2, 통찰 0·M_total 7 → 유지.
  tier: star_2
  mechanism_primary: "극값 없음 ⟺ f' 의 D≤0 → a^2-3a-18≤0 → -3≤a≤6 → 10개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0497.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 -a, a+6 을 (pa, qa+r) 로. 제약: D/4 를 정리한 a 의 이차부등식이 정수 근으로 인수분해되게 설계(a^2-3a-18=(a-6)(a+3))."
    creative: "(1) 「극값을 가지도록」으로 뒤집고 정수 a 의 최솟값(★2) (2) 「x>0 에서만 극값」(0508 골조 근의 분리 ★3) (3) 극값을 갖지 않는 a 의 범위와 f 가 일대일인 a 의 범위가 같음을 설명하는 서술형(EQV d1 ★2~3)."
```

```yaml
- id: RPM-CALC1-0498
  page: 76
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    f(x)=x^3-(a+2)x^2+ax 가 -1<x<0 에서 극댓값, x>0 에서 극솟값을 갖도록 하는 모든 정수 a 의 곱.
  category: "극점 위치 조건 → f' 의 근의 분리 → 경계값 부호 f'(-1)>0, f'(0)<0 → 정수 a"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "극점 위치를 f'=3x^2-2(a+2)x+a 의 근의 분리로 옮기고, 위로 열린 포물선이므로 f'(-1)>0, f'(0)<0 두 부등식으로 압축 — f'(0)<0 하나가 두 근이 0 을 사이에 둠을 보장"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "극점의 위치 조건(근의 분리)으로 계수 범위"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    최고차항 양수이므로 f' 의 작은 근이 극대, 큰 근이 극소. 작은 근이 (-1,0), 큰 근이 (0,∞) 에 있으려면 f'(-1)=3a+7>0, f'(0)=a<0 → -7/3<a<0 → a=-2, -1, 곱 2. 근의 분리를 경계값 부호 두 개로 옮기는 RT d2 가 핵심(판별식·축 조건은 f'(0)<0 에 흡수). 시험 구역 ★2 출발, 통찰 d2·M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "극대 ∈(-1,0), 극소 >0 → f'(-1)>0, f'(0)<0 → -7/3<a<0 → a=-2,-1 → 곱 2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0498.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 (-1,0) 을 (p,q) 로, 계수 (a+2), a 변경. 제약: 두 경계 부등식이 a 의 일차부등식이 되게(f' 이 a 에 대해 일차), 정수해가 2~3개."
    creative: "(1) 두 극점이 모두 양수(0508 ★3) (2) 극댓값이 양수·극솟값이 음수라는 값 조건(06 결합 ★4) (3) f'(0)<0 만으로 왜 충분한지 설명하는 서술형(EQV d2 ★3)."
```

```yaml
- id: RPM-CALC1-0499
  page: 77
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    f(x)=x^4-4x^3+2ax^2+1 이 극댓값을 갖도록 하는 정수 a 의 최댓값. 5지선다.
  category: "사차함수 극댓값 존재 ⟺ f'=0 이 서로 다른 세 실근 → 이차인수 판별식·0 이 아닌 근"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "최고차항 양수 사차함수가 극댓값을 가짐 ⟺ f'=4x(x^2-3x+a)=0 이 서로 다른 세 실근 ⟺ x^2-3x+a 가 0 이 아닌 서로 다른 두 실근"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "사차함수가 극댓값을 가질 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    최고차항 양수인 사차함수는 f'=0 이 서로 다른 세 실근일 때만 극댓값을 가짐. f'=4x(x^2-3x+a) → 9-4a>0 이고 x=0 이 중근이 되지 않게 a≠0 → a<9/4, a≠0 → 정수 최댓값 2 → ③. 「극댓값 존재 ⟺ f' 부호가 +→− 로 바뀌는 곳 존재 ⟺ 세 실근」 동치 변환(EQV d2)이 핵심. 시험 구역 ★2 출발, 통찰 d2·M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "극댓값 존재 ⟺ f'=4x(x^2-3x+a) 서로 다른 세 실근 → D=9-4a>0, a≠0 → a<9/4 → 최대 정수 2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0499.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 -4x^3 을 -2px^3 로 두면 이차인수 x^2-(3p/2)x+a. 제약: 판별식 경계(9/4)가 정수가 아니어야 「최댓값」이 깔끔하고, a=0 배제가 답에 영향을 주는지 검토(개수를 물으면 영향)."
    creative: "(1) 「극값을 하나만 갖도록」(D≤0 또는 a=0, MI d1 ★3) (2) 정수 a 의 「개수」로 바꾸면 a≠0 이 답에 반영(VF d1 ★3~4) (3) a 의 값에 따른 그래프 개형 분류(★4)."
```

```yaml
- id: RPM-CALC1-0500
  page: 77
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    구간 [-2,3] 에서 f(x)=2x^3-3x^2-12x+4 의 최댓값 M 과 최솟값 m 의 합.
  category: "f'=0 의 근과 양 끝점 네 값 비교 → M, m"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "닫힌 구간에서 삼차함수의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=6(x-2)(x+1) → 후보 f(-2)=0, f(-1)=11, f(2)=-16, f(3)=-5 → M=11, m=-16, M+m=-5. 끝점 포함 네 값 비교. 시험 구역 → ★2, 통찰 0·M_total 6 → 유지.
  tier: star_2
  mechanism_primary: "f'=6(x-2)(x+1) → f(-2), f(-1), f(2), f(3) 비교 → M=11, m=-16 → -5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-5$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0500.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간과 계수 변경. 제약: 극점이 구간 안에 있어야 비교가 의미 있고, 끝점 값이 극값을 넘는 경우(0502 처럼)로 설계하면 함정 강화."
    creative: "(1) 구간을 [k, k+2] 로 움직이며 최댓값이 최대가 되는 k(MI d1 ★3) (2) M-m 을 묻기(★2) (3) 구간 끝점이 최대가 되도록 계수 조정(T-경계 강화 ★2)."
```

```yaml
- id: RPM-CALC1-0501
  page: 77
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    f(x)=-x^4+4a^3x-20 의 최댓값이 a^4+12 일 때 양수 a. 5지선다.
  category: "f'=-4(x^3-a^3) → 실근 x=a 하나 → f(a) 를 조건과 등치 → a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수가 있는 사차함수의 최댓값 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=-4(x^3-a^3)=-4(x-a)(x^2+ax+a^2) → 실근 x=a 하나, 여기서 최대 f(a)=3a^4-20. 3a^4-20=a^4+12 → a^4=16 → a=2 → ②. x^3=a^3 의 실근이 하나뿐임을 보는 것이 작은 관문이지만 표준. 시험 구역 → ★2, 통찰 0·M_total 7 → 유지.
  tier: star_2
  mechanism_primary: "f'=-4(x^3-a^3)=0 → x=a → f(a)=3a^4-20=a^4+12 → a^4=16 → a=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0501.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "4a^3x 의 계수와 상수항 변경. 제약: f(a)=3a^4-20 이므로 조건 「최댓값 = pa^4+q」 를 (3-p)a^4=q+20 꼴로 두어 a 가 정수."
    creative: "(1) 최댓값이 0 이 되는 a(★2) (2) 최고차항 양수 사차(최솟값)로 대칭 변형(★2) (3) f(x)≤0 이 모든 x 에서 성립할 a 의 범위(부등식 활용 → 06 결합 ★3)."
```

```yaml
- id: RPM-CALC1-0502
  page: 77
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험"
  summary: |
    구간 [0,5] 에서 f(x)=ax(x-3)^2+b (a>0) 의 최댓값이 15, 최솟값이 -5 일 때 a^2+b^2.
  category: "f'=3a(x-1)(x-3) → 후보 네 값(a>0 으로 대소 확정) → 끝점 최대·b 최소 → a, b"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "최대·최소 조건으로 미정계수 결정(닫힌 구간)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'=3a(x-1)(x-3) → 후보 f(0)=b, f(1)=4a+b, f(3)=b, f(5)=20a+b. a>0 이므로 최대는 끝점 f(5)=20a+b=15, 최소는 b=-5 → a=1 → a^2+b^2=26. 극댓값 f(1) 이 아니라 끝점이 최대라는 비교가 함정(T-경계·T-부호). 시험 구역·중요 → ★2 출발, 통찰 0 이지만 M_total 8(끝점 비교·매개변수 두 개) → ★3.
  tier: star_3
  mechanism_primary: "f'=3a(x-1)(x-3) → 후보 b, 4a+b, b, 20a+b → 20a+b=15, b=-5 → a=1 → 26"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$26$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0502.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 오른쪽 끝 5 와 최대·최소 값 변경. 제약: 끝점 값 f(e)=e(e-3)^2 a+b 가 극댓값 4a+b 보다 크도록 e(e-3)^2>4, a·b 정수."
    creative: "(1) a<0 으로 바꾸면 최대·최소 후보가 뒤바뀜(MI d1 ★3) (2) 구간을 [0,k] 로 두고 최댓값이 극댓값과 같아지는 k 의 범위(EQV d1 ★3~4) (3) 최댓값과 최솟값의 차만 주어 a 를 결정(★2)."
```

```yaml
- id: RPM-CALC1-0503
  page: 77
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    곡선 y=x^2-4x+4 위의 점 (a,b)(0<a<2) 에서의 접선과 x축·y축으로 둘러싸인 삼각형의 넓이가 최대일 때 b-a. 5지선다. 그림 제시.
  category: "접선의 절편 → 넓이 S(a) 삼차식 → 미분 → a → b-a"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선과 좌표축이 이루는 삼각형 넓이의 최댓값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접선 y=(2a-4)(x-a)+(a-2)^2 의 x절편 (a+2)/2, y절편 (2-a)(2+a) → S=(1/4)(a+2)^2(2-a). S'=-(1/4)(3a-2)(a+2)=0 → a=2/3, b=16/9, b-a=10/9 → ③. 04 단원의 접선 절편 계산 위에 최대 절차가 얹힌 긴 계산. 시험 구역 → ★2 출발, 통찰 0 이나 M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "접선 절편 (a+2)/2, (2-a)(2+a) → S(a)=(1/4)(a+2)^2(2-a) → S'=0 → a=2/3 → b-a=10/9"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0503.png"
  latex: latex-bank/rpm-calc1/items/0503.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선 (x-p)^2 과 범위 0<a<p 변경. 제약: S=(a+p)^2(p-a)/4 꼴이라 최대는 a=p/3 — p 를 3 의 배수로 두면 a 정수, b=(2p/3)^2."
    creative: "(1) 넓이 최대일 때 접선의 기울기·방정식을 묻기(★3) (2) 삼각형 대신 접선과 곡선·y축 사이 넓이(적분 → 07 단원 ★4) (3) 곡선을 y=x^3 등으로 바꿔 절편 식이 달라지는 골조(★3)."
```

```yaml
- id: RPM-CALC1-0504
  page: 77
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    한 변 10 인 정삼각형 종이의 세 귀퉁이에서 합동인 사각형을 잘라 만든 뚜껑 없는 삼각기둥 상자의 부피가 최대가 되는 x(귀퉁이 꼭짓점에서 접는 선까지의 변 위 길이). 그림 제시.
  category: "귀퉁이 직각삼각형 → 높이 h=x/√3 · 밑변 10-2x → V=x(5-x)^2 → 미분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "귀퉁이의 30°-60°-90° 삼각형에서 상자 높이 h=x/√3, 밑면 정삼각형 한 변 10-2x 로 옮겨 V=x(5-x)^2 을 세움 — 그림의 x 가 높이가 아님"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정삼각형 종이로 만든 삼각기둥 상자의 부피 최댓값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    밑면 한 변 10-2x, 높이 h=x·tan30°=x/√3 → V=(√3/4)(10-2x)^2·x/√3=x(5-x)^2. V'=(5-x)(5-3x)=0 → x=5/3 (0<x<5). 귀퉁이 직각 표시에서 h 와 x 의 관계를 읽는 표현 전환(RT d2)이 없으면 식을 세울 수 없고, 세우면 0476 과 같은 절차. 시험 구역 ★2 출발, 통찰 d2 → ★3.
  tier: star_3
  mechanism_primary: "귀퉁이 30° 삼각형 → h=x/√3, 밑변 10-2x → V=x(5-x)^2 → V'=(5-x)(5-3x)=0 → x=5/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{5}{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0504.png"
  latex: latex-bank/rpm-calc1/items/0504.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "한 변 길이 L(6 · 9 · 10 · 12). 제약: 최대는 x=L/6 이므로 L 이 6 의 배수면 정수 답. √3 은 넓이·높이에서 소거되어 V 가 유리식. 그림 라벨 x 의 위치(변 위 길이)는 고정."
    creative: "(1) x 를 상자 높이로 정의해 주면 밑변 10-2√3x 로 근호가 남아 계산 증가(★3) (2) 정사각형 종이(0476 ★2)·정육각형 종이(★3~4)로 변형 (3) 부피 최댓값 자체를 묻기(500/27 ★3)."
```

```yaml
- id: RPM-CALC1-0505
  page: 77
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    삼차함수 f(x)=ax^3+bx^2+cx+d 의 그래프(극대 α<0<극소 β, |α|>|β|, 우상향, f(0)<0)가 주어질 때 |c-b|-|b|+|c| 를 간단히 한 것. 5지선다. 그림 제시.
  category: "그래프 → a 부호 · f' 근의 합·곱 부호 → b>0, c<0 → 절댓값 정리"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "극점 위치와 |α|>|β| 를 f' 의 근의 합 음수·곱 음수로 읽어 b>0, c<0 을 결정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼차함수 그래프에서 계수의 부호 결정(절댓값 식 정리)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a>0. α+β=-2b/(3a)<0 (|α|>|β|, α<0) → b>0, αβ=c/(3a)<0 → c<0. 그러면 c-b<0 이므로 |c-b|-|b|+|c|=(b-c)-b-c=-2c → ②. 0481 골조에 절댓값 정리가 붙음. 시험 구역 ★2 출발, 통찰 d2·M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "a>0 → α+β<0, αβ<0 → b>0, c<0 → |c-b|-|b|+|c|=-2c"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: "crop:fig-0505.png"
  latex: latex-bank/rpm-calc1/items/0505.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "|α| 와 |β| 의 대소, 개형 방향, 절댓값 식의 조합(|a+b|, |b-c|-|c| 등). 제약: 부호표를 먼저 만들고 절댓값이 모두 확정되게 식을 짜야 함. 선택지에 -2b, 0, -b-c 처럼 부호 착각값 배치."
    creative: "(1) 절댓값 대신 √(b^2)+√(c^2) 같은 근호 표기(T-표기 강화 ★3) (2) d 의 부호까지 쓰는 |d|-|c| 등으로 확장(★3) (3) 극댓값의 부호와 결합해 f(x)=0 의 실근 개수(06 결합 ★4)."
```

### 서술형 주관식

```yaml
- id: RPM-CALC1-0506
  page: 78
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    실수 전체에서 정의된 f(x)=x^3-2ax^2+ax 의 역함수가 존재하기 위한 실수 a 의 범위.
  category: "역함수 존재 ⟺ 일대일 ⟺ 증가함수 ⟺ f'≥0 → 판별식"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "역함수 존재 → 일대일 → 최고차항 양수인 삼차함수는 증가함수 → f'≥0 (모든 x) 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼차함수의 역함수가 존재할 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    역함수 존재 → 일대일 → 증가함수 → f'=3x^2-4ax+a≥0 (모든 x) → D/4=4a^2-3a≤0 → a(4a-3)≤0 → 0≤a≤3/4. 0487 과 같은 동치 변환(EQV d1) 뒤 판별식. 서술형 구역 → ★3 출발, 통찰 1·M_total 7 → 유지.
  tier: star_3
  mechanism_primary: "역함수 존재 ⟺ f'≥0 ∀x → D/4=4a^2-3a≤0 → 0≤a≤3/4"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$0\le a\le \dfrac{3}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0506.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 -2a, a 를 (pa, qa) 로 → D/4=p^2a^2-3qa → a(p^2a-3q)≤0 → 0≤a≤3q/p^2. 제약: 3q/p^2 의 분수 형태가 답 표현. 상수항이 있어도 D 에 무관."
    creative: "(1) 「임의의 실수 k 에 대해 f(x)=k 의 실근이 하나」 문장으로 바꾸기(EQV d1 ★3) (2) 역함수가 존재하지 않는 정수 a 의 개수(부정 ★3) (3) f 와 역함수 그래프의 교점 개수(y=x 와의 교점 → 06 결합 ★4)."
```

```yaml
- id: RPM-CALC1-0507
  page: 78
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    f(x)=x^3-6x^2+k 의 극댓값과 극솟값의 절댓값이 같고 부호가 서로 다를 때 상수 k.
  category: "f'=3x(x-4) → 극댓값 k · 극솟값 k-32 → 합 0 → k"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극댓값과 극솟값의 관계로 상수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'=3x(x-4) → 극댓값 f(0)=k, 극솟값 f(4)=k-32. 조건은 k+(k-32)=0 → k=16 (극댓값 16·극솟값 -16 확인). 조건을 「합이 0」으로 읽는 것은 즉시 가능해 통찰로 세지 않음. 서술형 구역 → ★3 출발, 통찰 0·M_total 6 → 유지. [분류 이슈] 골조가 0489 수준이라 ★2 후보, 라벨은 구역을 따라 ★3.
  tier: star_3
  mechanism_primary: "f'=3x(x-4) → f(0)=k, f(4)=k-32 → k+(k-32)=0 → k=16"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$16$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0507.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "-6x^2 을 -3px^2 로 두면 극점 0, 2p 와 극솟값 k-4p^3 → k=2p^3. 제약: 극댓값이 양수·극솟값이 음수가 되는지 확인(k=2p^3>0 이면 자동)."
    creative: "(1) 「극댓값이 극솟값의 -3배」처럼 비로 주기(★3) (2) 「절댓값이 같다」만 주고 부호가 같은 경우는 극값 차가 0 이라 불가함을 기각하게(VF d1 ★3) (3) k 의 값과 두 극점의 좌표를 모두 쓰게 하는 서술형(★3)."
```

```yaml
- id: RPM-CALC1-0508
  page: 78
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "서술형"
  summary: |
    f(x)=x^3-3kx^2+kx 가 x>0 에서 극댓값과 극솟값을 모두 갖도록 하는 실수 k 의 범위.
  category: "x>0 에서 극값 둘 ⟺ f'=0 이 서로 다른 두 양근 → D>0 · 합>0 · 곱>0"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "극점 위치 조건을 이차방정식 f'=3x^2-6kx+k=0 의 두 양근 조건(D>0, 합>0, 곱>0)으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "극점이 특정 범위에 있도록 하는 계수(두 양근 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'=3x^2-6kx+k 의 두 근이 서로 다른 양수 → D/4=9k^2-3k>0 (k<0 또는 k>1/3), 합 2k>0, 곱 k/3>0 → k>1/3. 근의 분리 표준형(RT d1). 서술형 구역·중요 → ★3 출발, 통찰 1·M_total 7 → 유지.
  tier: star_3
  mechanism_primary: "x>0 에서 극값 2개 ⟺ f' 두 양근 → D>0 & 합>0 & 곱>0 → k>1/3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$k>\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0508.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 -3k, k 를 (pk, qk) 로 변경. 제약: 세 조건의 교집합이 한 부등식으로 정리되게(D 의 경계 1/3 이 합·곱 조건보다 강함)."
    creative: "(1) 「x<0 에서 극댓값, x>0 에서 극솟값」(0498 골조 f'(0)<0 ★3) (2) 「두 극점이 모두 구간 (0,2) 안」처럼 양쪽 경계(경계값·축·판별식 세 조건 ★3~4) (3) 조건을 만족하는 정수 k 의 최솟값(★3)."
```

```yaml
- id: RPM-CALC1-0509
  page: 78
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    f(x)=-x^3+3x, g(x)=x^2+2x 에 대해 합성함수 (f∘g)(x) 의 최댓값.
  category: "t=g(x)≥-1 치환 → f(t) 를 t≥-1 에서 최대 → t=1"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "합성식을 전개해 6차식을 미분하는 대신 t=g(x) 로 두고 t 의 범위(t≥-1) 안에서 f(t) 의 최대를 구하는 갈래 선택"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "합성함수의 최댓값(치환과 범위 제한)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    t=g(x)=(x+1)^2-1≥-1. f(t)=-t^3+3t, f'=-3(t-1)(t+1) → t≥-1 에서 t=1 일 때 최대 f(1)=2 (t=-1 에서 -2, t→∞ 에서 -∞). t=1 은 x^2+2x=1 의 실근으로 실제 도달 가능. 치환 전략(SC d1)과 t 의 하한 확인이 핵심. 서술형 구역 → ★3 출발, 통찰 1·M_total 6 → 유지.
  tier: star_3
  mechanism_primary: "t=g(x)≥-1 → f(t)=-t^3+3t 를 t≥-1 에서 최대 → t=1 → 2"
  insight_type: 절차형
  target_cohort: 중상위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0509.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "g 의 꼭짓점 값(하한)과 f 의 극점 변경. 제약: 최대가 f 의 극대점에서 나오려면 하한 < 극대점. 하한 ≥ 극대점이면 최대가 하한에서 나오므로 변형 포인트."
    creative: "(1) g 의 치역 하한을 극대점 오른쪽으로 옮겨 최댓값이 경계에서 나오게(T-경계 강화 ★3) (2) (g∘f)(x) 로 바꾸면 f 의 치역이 실수 전체라 g 의 최솟값(★2) (3) 구간 [-2,1] 에서의 (f∘g) 의 최댓값·최솟값(★3~4)."
```

### 실력 Up

```yaml
- id: RPM-CALC1-0510
  page: 78
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "실력 Up"
  summary: |
    구간별로 정의된 함수 f(x)(x<0: -x^3/3-ax^2-bx, x≥0: x^3/3+ax^2-bx)가 (-∞,-1] 에서 감소하고 [-1,∞) 에서 증가할 때 a+b 의 최댓값 M 과 최솟값 m 의 차. 5지선다.
  category: "f'(-1)=0 → b=2a-1 → f' 인수분해와 근 위치 → x≥0 조건 경우 나누기 → a 의 범위 → 3a-1"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x<0 구간의 단조 조건을 f'(-1)=0 → b=2a-1 로 옮기고 f'=-(x+1)(x+b) 의 근 위치로 b≤0 을 얻음"
    - step: 3
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x≥0 에서 f'=x^2+2ax-b≥0 을 축 x=-a 의 위치로 a≥0 / a<0 두 경우로 나눠 분석, 두 경우 모두 답의 범위에 기여"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "구간별 정의 함수의 증감 조건으로 계수의 범위(기출 종합)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    x<0 에서 f'=-(x^2+2ax+b) 가 x=-1 에서 부호를 바꾸므로 f'(-1)=0 → b=2a-1, 그러면 x^2+2ax+b=(x+1)(x+b) 이고 (-1,0) 에서 ≤0 이려면 -b≥0 → b≤0. x≥0 에서 f'=x^2+2ax-b≥0: a≥0 이면 자명, a<0 이면 최솟값 -a^2-b≥0 → a^2+2a-1≤0. 종합 -1-√2≤a≤1/2, a+b=3a-1 → M=1/2, m=-4-3√2 → M-m=9/2+3√2 → ③. 실력 Up·기출 → ★4 출발, 통찰 2(EQV d2·MI d2)·M_total 9 → ★4.
  tier: star_4
  mechanism_primary: "f'(-1)=0 → b=2a-1 → (x+1)(x+b) 근 위치 → b≤0 → x≥0 조건 a≥0/a<0 분기 → -1-√2≤a≤1/2 → 3a-1 의 범위 → 9/2+3√2"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0510.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이음점 0 과 극소점 -1 의 위치, 계수 부호 배치 변경. 제약: 두 조각의 도함수가 x=0 에서 같은 값(-b)이어야 이음이 유지되고, a<0 경우의 이차부등식 a^2+2a-1≤0 근이 무리수라 답에 √ 가 남음 — 선택지 형태 「유리수+3√2」 유지."
    creative: "(1) 조각 함수를 한 삼차식으로 바꾸면 MI 분기가 사라져 ★3 (2) 증가·감소 구간을 세 토막으로 주면 조건이 셋 → CON d2 추가 ★4~5 (3) a+b 대신 a^2+b^2 의 최솟값(기하적 최소 ★4)."
```

```yaml
- id: RPM-CALC1-0511
  page: 78
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    다항함수 f 에 대해 y=xf'(x) 의 그래프(x=-1 에서 음→양, 원점에서 x축에 접함)가 주어질 때 보기 ㄱ~ㄷ(f 가 (-1,0) 에서 감소 · x=-1 극소 · x=0 극대) 중 옳은 것. 그림 제시.
  category: "xf'(x) 부호 ÷ x 부호 → f' 부호표 → 극대·극소·증감 판정"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "xf'(x) 의 부호를 x 의 부호로 나누어 f' 의 부호표를 복원 — x<0 에서 부호가 뒤집힘, 원점 접점은 f'(0)=0 이면서 f' 이 −→+ 로 바뀜을 뜻함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "y=xf'(x) 의 그래프로 원함수의 증감·극값 판정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    xf'<0 (x<-1) 에서 x<0 이므로 f'>0; xf'>0 (-1<x<0) 에서 f'<0; xf'>0 (x>0) 에서 f'>0. 따라서 x=-1 극대, (-1,0) 감소, x=0 은 f' 이 −→+ 라 극소. ㄱ 만 참. x 로 나눌 때의 부호 반전을 놓치면 ㄴ·ㄷ 을 고르게 되는 함정이 통찰(RT d2)의 본체. 실력 Up → ★4 출발, 통찰 1(d2)·M_total 8 → ★4. [분류 이슈] 통찰 하나뿐이라 ★3 후보이나 ★4 슬롯 권장 저노출 유형(RT) 포함이라 ★4 유지.
  tier: star_4
  mechanism_primary: "xf'(x) 부호 ÷ x 부호 → f' 부호표 (+,−,+) → -1 극대 · 0 극소 · (-1,0) 감소 → ㄱ"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "ㄱ"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0511.png"
  latex: latex-bank/rpm-calc1/items/0511.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "교점·접점 위치(-1, 0)와 부호 배치 변경. 제약: 원점 접점은 인수 x 때문에 항상 생기므로 그래프의 원점 통과 유지. f' 의 부호가 바뀌는 곳이 f 의 극점이 되도록 접점의 차수(x^2 대 x^3 인수)를 그림에서 명확히."
    creative: "(1) y=(x-1)f'(x) 로 바꿔 부호 반전 지점을 옮기기(★4) (2) y=f'(x)/x 의 그래프 제공(같은 골조 ★4) (3) y=x^2 f'(x) 로 바꾸면 부호 반전이 없어 극점 판정만 남음(★3)."
```

```yaml
- id: RPM-CALC1-0512
  page: 78
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    크기가 고정된 반구에 내접하는 밑면 반지름 r·높이 h 인 원기둥의 부피가 최대일 때 h/r 의 값. 그림 제시.
  category: "반구 반지름 R 도입 → 단면 피타고라스 r^2+h^2=R^2 → h 변수 → V=π(R^2-h^2)h 미분 → 비"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "축 단면에서 반구 반지름 R 을 스스로 두고 피타고라스 r^2+h^2=R^2 로 두 변수를 묶음"
    - step: 2
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "r 을 남기면 V=πr^2√(R^2-r^2) 로 근호 → h 를 변수로 잡아 다항식 V=π(R^2-h^2)h 로 만드는 갈래 선택"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "반구(구)에 내접하는 원기둥의 부피 최댓값(비율)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    반구 반지름을 R 로 두면 r^2+h^2=R^2. V=πr^2h=π(R^2h-h^3), V'=π(R^2-3h^2)=0 → h=R/√3, r^2=2R^2/3 → h/r=1/√2=√2/2. 단면 피타고라스(RT d1)와 변수 선택(SC d1)에 R 을 스스로 도입하는 추상화가 더해진 0480 의 확장. 실력 Up → ★4 출발, 통찰 2·M_total 7 → ★4 (★5 조건 미달).
  tier: star_4
  mechanism_primary: "r^2+h^2=R^2 → V=π(R^2-h^2)h → V'=π(R^2-3h^2)=0 → h=R/√3 → h/r=√2/2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{\sqrt{2}}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0512.png"
  latex: latex-bank/rpm-calc1/items/0512.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반구 대신 구(r^2+(h/2)^2=R^2 → h/r=√2), 반지름 수치 제시(R=3 이면 최대 부피 4√3π). 제약: 비율 답은 R 과 무관한 상수 — 수치를 주면 부피 값에 √3 이 남음."
    creative: "(1) 원기둥 옆넓이 최대(2πrh, r^2+h^2=R^2 → h=r 대칭 SYM d1 ★3) (2) 구에 내접하는 원뿔의 부피 최대(★4) (3) 최대 부피와 반구 부피의 비(√3/3 상수 ★4)."
```

## 표본 판정 요약 (39문)

- ★ 분포: ★1 1 · ★2 17 · ★3 18 · ★4 3 · ★5 0
- insight_type 통찰형 10(d2 이상 또는 통찰 2개: 0481 · 0492 · 0493 · 0498 · 0499 · 0504 · 0505 · 0510 · 0511 · 0512) · 절차형 29 · premium 0 · insights 가 비어 있지 않은 블록 23(d1 한 개인 절차형 13 포함)
- 통찰 유형 빈도(26개 라벨): I-RT 15 · I-EQV 7 · I-SC 3 · I-MI 1 (I-XU · BW · PD · SYM · CON · VF 없음)
- type_hint 상위: 「함수의 최대·최소의 활용(도형·입체·실생활)」 계열 10(내접 직사각형·사다리꼴 2 · 상자 2 · 입체 내접 3 · 접선 삼각형 1 · 거리 1 · 이익 1) · 「도함수 그래프 → 원함수 판정」 5(0483 · 0484 · 0495 · 0496 · 0511) · 「단조성 조건(감소·증가·일대일·역함수)」 5(0485 · 0486 · 0487 · 0488 · 0506) · 「극값 계산·극값 사이 관계」 5(0489 · 0490 · 0491 · 0494 · 0507) · 「극값 존재·위치 조건」 4(0497 · 0498 · 0499 · 0508) · 「닫힌 구간·매개변수 최대·최소」 4(0500 · 0501 · 0502 · 0509) · 「그래프에서 계수 부호」 3(0481 · 0482 · 0505) · 단독 3(0492 |f| 극값 · 0493 극한 결합 · 0510 조각 함수 단조)
- 그림: 16문(`crop:fig-0474.png` · `crop:fig-0476.png` · `crop:fig-0478.png` · `crop:fig-0479.png` · `crop:fig-0480.png` · `crop:fig-0481.png` · `crop:fig-0482.png` · `crop:fig-0483.png` · `crop:fig-0484.png` · `crop:fig-0495.png` · `crop:fig-0496.png` · `crop:fig-0503.png` · `crop:fig-0504.png` · `crop:fig-0505.png` · `crop:fig-0511.png` · `crop:fig-0512.png`)
- 구역별 ★: 유형 14 ★2·2·2·2·2·3·3 / 유형 UP 15 ★3×2 / 유형 UP 16 ★3×2 / 시험에 꼭 나오는 문제 ★1×1·★2×12·★3×8 / 서술형 ★3×4 / 실력 Up ★4×3
- 전사 답 확인 필요: 없음(39문 모두 풀이 결과가 전사본 answer 와 일치)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC1-0479 | 상중(★3)이나 단면 닮음 RT d1 하나에 M_total 5 → 절차형 ★2 후보. 라벨은 벤더를 따라 ★3 | ★2 / ★3 |
| RPM-CALC1-0482 | 구역 유형 UP(★3 출발)과 난이도 표시 중(★2)이 어긋남. 0481 과 같은 골조(절댓값 비교만 빠짐)라 ★3 선택 | ★3 / ★2 |
| RPM-CALC1-0493 | 시험 구역 ★2 출발에 통찰 2(EQV d1 + RT d2)·M_total 9 → +1 후보(★4)이나 두 전환 모두 시판 표준이라 ★3 | ★3 / ★4 |
| RPM-CALC1-0507 | 서술형 주관식(★3 출발)이나 극값 두 개 계산 + 합 0 뿐(통찰 0·M_total 6) → ★2 후보. 라벨은 ★3 유지 | ★2 / ★3 |
| RPM-CALC1-0511 | 실력 Up(★4 출발)이나 통찰 1개(RT d2)·M_total 8 → ★3 후보. ★4 슬롯 권장 저노출 유형(RT) 포함이라 ★4 유지 | ★4 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 「함수의 최대·최소의 활용」은 「변수 하나 잡기 → 다항식 → 미분 → 범위 안 극점」 한 골조를 10문이 공유하고, 변수를 잡기 전의 기하 관계로만 갈린다. 카탈로그에서는 (a) 평면 내접 도형(0474 · 0478, ★2) (b) 종이 상자(0476 · 0504, ★2~3 — 정삼각형은 귀퉁이 직각삼각형 RT d2) (c) 입체 내접(0479 닮음 · 0480 · 0512 피타고라스+변수 선택, ★3~4) (d) 거리·접선 절편(0477 · 0503, ★2~3) (e) 실생활 이익(0475, ★2) 다섯 하위 유형으로 세우고, 「근호를 피하는 변수 선택(SC d1)」을 (c) 의 공통 메모로 남길 것.
- 「도함수 그래프 → 원함수」(0483 · 0484 · 0495 · 0496 · 0511)는 f' 부호표 읽기 한 유형(★2~3)으로 통합하되, 접점(중근)이 극값이 아님(0483 · 0484)과 xf'(x) 처럼 x 로 나누는 부호 반전(0511, ★4)을 상위 변형으로 표시한다. 0495 는 그래프에서 f' 의 식을 세우는 쪽이라 「도함수 그래프에서 극값의 차」로 이름을 달리해도 된다.
- 「단조성 조건」은 실수 전체(0486 · 0487 · 0506 — 일대일·역함수 문장은 같은 판별식 골조의 EQV 변형)와 주어진 구간(0485 · 0488 — 판별식이 아니라 구간 끝점 조건)으로 갈라 두 유형(★2)으로 세운다. 두 유형을 섞으면 0488 을 판별식으로 푸는 오류가 잦다.
- 「극값 존재·위치 조건」은 판별식형(0497, ★2)과 근의 분리형(0498 · 0508, ★3)으로 나누고, 사차함수의 극댓값 존재(0499, f'=0 세 실근 EQV d2)는 별도 유형으로 세운다.
- 「그래프에서 계수 부호」(0481 · 0482 · 0505)는 유형 UP 15 와 시험 구역에 걸쳐 한 골조(f' 근과 계수)이므로 한 유형(★3)이면 충분하고, |α| 대 |β| 비교(합의 부호)와 절댓값 식 정리(0505)를 변형 메모로 둔다.
- 0492(|f| 의 극값)·0509(합성함수 최대의 치환과 치역)·0510(조각 함수의 단조 조건 — 기출)은 이 범위에서 단독이며 각각 별도 유형 후보. 0493 은 03 단원 「극한 조건과 미분계수」 유형과 겹치므로 그 카탈로그의 극값 결합형으로 두고 05 에서는 참조만 한다.
