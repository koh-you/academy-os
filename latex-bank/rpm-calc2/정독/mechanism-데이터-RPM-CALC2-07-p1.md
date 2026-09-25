---
name: mechanism-데이터-RPM-CALC2-07-p1
description: RPM 미적분Ⅱ 07 도함수의 활용 (2) (1/4 · 교과서 07-1~07-7) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅱ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc2
  section: 07 도함수의 활용 (2)
  unit_code: CALC2-07
  part: "1/4"
  extract_range: "105~107쪽 · 0730~0761"
  total_problems: 32
  unit_total: 129
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json)
---

# RPM 미적분Ⅱ · 07 도함수의 활용 (2) (1/4) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅱ 07 도함수의 활용 (2) 의 1/4 — 105~107쪽 · 0730~0761 · 32문항 — 을 다룬다. 이 범위는 전부 「교과서 07-1~07-7」 구역(곡선의 볼록 · 변곡점 · 함수의 그래프 · 함수의 최대와 최소 · 방정식에의 활용 · 부등식에의 활용 · 속도와 가속도)의 교과서 기본 문제라 벤더 난이도 표시(level)와 태그가 없고, ★ 출발점은 모두 ★1 이다. 한 passage(「다음 곡선이 아래로 볼록한지 …」「다음 함수의 그래프를 그리시오」 등) 아래 식만 다른 소문항이 이어지는 조판이라 답의 다수가 「풀이 참조」이고, 그림은 0742 의 증감·볼록 표 하나뿐이다. M_total 이 구역 평균을 넘는 문항(0738 · 0752)만 +1 로 ★2 를 주었고 통찰이 요구되는 문항은 없다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 교과서 구역이라 `insights` 는 전부 `[]` 이지만, `variation_notes.creative` 에 어떤 설정을 바꾸면 어떤 통찰(I-BW · I-RT · I-SC · I-SYM · I-MI)이 들어오고 ★ 가 움직이는지를 적어 두었다.

## 문항 데이터

### 교과서 07-1 곡선의 볼록

```yaml
- id: RPM-CALC2-0730
  page: 105
  vendor_label: "교과서 07-1 곡선의 볼록"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=x^4+4x^2 이 구간 (-∞, ∞) 에서 아래로 볼록함을 보이기. 증명형.
  category: "이계도함수 계산 → 부호 확인 → 볼록 결론"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이계도함수의 부호로 곡선의 볼록 증명"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f''(x)=12x^2+8>0 이 모든 실수에서 성립하므로 아래로 볼록. 두 번 미분과 부호 한 줄로 끝. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f'' 계산 → 12x^2+8>0 (모든 x) → 아래로 볼록"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "풀이 참조"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0730.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(x^4+ax^2, a>0)나 차수(x^6+2x^2)를 바꿀 수 있음. 제약: f'' 가 모든 실수에서 같은 부호여야 하므로 짝수 차수·양의 계수만 조합하고, 상수항·일차항은 f'' 에 영향이 없어 자유."
    creative: "(1) 위로 볼록 증명(-x^4-2x^2)으로 방향만 바꾸기(★1 유지) (2) 구간을 제한해 f'' 부호가 그 구간 안에서만 일정한 함수(x^3+3x, x>0)로(★1) (3) '모든 실수에서 아래로 볼록이 되게 하는 a 의 범위'로 역방향화하면 I-BW d1 → ★2."
```

```yaml
- id: RPM-CALC2-0731
  page: 105
  vendor_label: "교과서 07-1 곡선의 볼록"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=xe^{2x} 이 구간 (-∞, -1) 에서 위로 볼록함을 보이기. 증명형.
  category: "곱의 미분 두 번 → f'' 인수분해 → 구간 부호"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이계도함수의 부호로 곡선의 볼록 증명"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'=(2x+1)e^{2x}, f''=(4x+4)e^{2x}=4(x+1)e^{2x}. e^{2x}>0 이므로 x<-1 에서 f''<0 → 위로 볼록. 곱미분 두 번의 정리가 전부. 교과서·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f''=4(x+1)e^{2x} → x<-1 에서 f''<0 → 위로 볼록"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "풀이 참조"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0731.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 계수(xe^{ax})와 구간 경계(-2/a)가 연동됨. 제약: f''=a(ax+2)e^{ax} 의 영점 -2/a 가 구간 끝점이 되게 하고, a>0 이면 위로 볼록 구간은 x<-2/a."
    creative: "(1) 같은 함수로 아래로 볼록 구간 (-1, ∞) 증명(★1) (2) x^2e^x 처럼 f'' 영점이 둘인 함수로 '위로 볼록인 구간 조사'(★1) (3) 'xe^{ax} 가 x<-1 에서 위로 볼록이 되도록 하는 양수 a' 로 역방향화 → I-BW d1 ★2."
```

```yaml
- id: RPM-CALC2-0732
  page: 105
  vendor_label: "교과서 07-1 곡선의 볼록"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    다항함수 y=x^4-2x^3+4x-5 의 아래로 볼록·위로 볼록 구간 조사.
  category: "f''=0 → 부호표 → 볼록 구간"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선의 볼록·오목 구간 조사(f'' 부호표)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y''=12x^2-12x=12x(x-1). 0<x<1 에서 음(위로 볼록), 그 밖에서 양(아래로 볼록). 이차 인수분해와 부호표 한 번. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y''=12x(x-1) → 영점 0, 1 → 부호표 → (0,1) 위로 볼록·나머지 아래로 볼록"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 (구간 $(0,\,1)$에서 위로 볼록, 구간 $(-\infty,\,0)$, $(1,\,\infty)$에서 아래로 볼록)'
  answer_source: "답지(풀이 참조 · 해설 보충)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0732.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차항 계수(x^4-2ax^3)를 바꾸면 y'' 영점이 0, a 로 이동. 일차항·상수항은 y'' 에 영향 없어 자유. 제약: y'' 가 서로 다른 두 실근을 갖도록(사차 계수 양수·삼차 계수 0 아님) 두고 근을 정수로 유지."
    creative: "(1) y''=12(x+1)^2 이 되는 x^4+4x^3+6x^2 로 바꿔 'y''=0 이지만 부호가 안 바뀌는 점'을 넣으면 T-부호 함정 ★2 (2) 위로 볼록 구간의 길이를 묻기(★1) (3) '위로 볼록 구간이 (1, 3) 이 되도록 계수 결정'(I-BW d1 ★2)."
```

```yaml
- id: RPM-CALC2-0733
  page: 105
  vendor_label: "교과서 07-1 곡선의 볼록"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=x^2+1/x (x≠0) 의 아래로 볼록·위로 볼록 구간 조사.
  category: "f'' 통분 → 분자·분모 부호 → 정의역 제외점 반영"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선의 볼록·오목 구간 조사(f'' 부호표)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y''=2+2/x^3=2(x^3+1)/x^3. 분자 영점 -1, 분모 영점 0 을 경계로 부호표를 그리면 -1<x<0 에서만 음. x=0 은 정의역 밖이라 아래로 볼록 구간을 (-∞,-1), (0,∞) 로 나눠 적어야 함(T-범위). 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y''=2(x^3+1)/x^3 → 경계 -1, 0 부호표 → (-1,0) 위로 볼록·(-∞,-1),(0,∞) 아래로 볼록"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 (구간 $(-1,\,0)$에서 위로 볼록, 구간 $(-\infty,\,-1)$, $(0,\,\infty)$에서 아래로 볼록)'
  answer_source: "답지(풀이 참조 · 해설 보충)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0733.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "y=x^2+a/x (a≠0) 로 두면 y''=2(x^3+a)/x^3, 경계 -∛a. 제약: 경계가 정수가 되도록 a 를 완전세제곱수(±1, ±8)로, a<0 이면 위로 볼록 구간이 (0, ∛|a|) 로 바뀜을 확인."
    creative: "(1) y=x+1/x^2 처럼 분모 차수를 바꿔 y'' 부호가 분모에서 갈리게(★1) (2) 정의역 끊김을 무시하면 틀리는 '아래로 볼록인 구간의 개수' 묻기(T-범위 강조 ★2) (3) 'y=x^2+a/x 가 (-2,0) 에서 위로 볼록이 되도록 하는 a' (I-BW d1 ★2)."
```

```yaml
- id: RPM-CALC2-0734
  page: 105
  vendor_label: "교과서 07-1 곡선의 볼록"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=(x^2-x)e^x 의 아래로 볼록·위로 볼록 구간 조사.
  category: "곱의 미분 두 번 → 인수분해 → 부호표"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선의 볼록·오목 구간 조사(f'' 부호표)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y'=(x^2+x-1)e^x, y''=(x^2+3x)e^x=x(x+3)e^x. e^x>0 이므로 부호는 x(x+3) 이 결정해 -3<x<0 에서 위로 볼록. 곱미분 두 번의 정리가 전부. 교과서·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "y''=x(x+3)e^x → e^x>0 → 부호는 x(x+3) → (-3,0) 위로 볼록"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 (구간 $(-3,\,0)$에서 위로 볼록, 구간 $(-\infty,\,-3)$, $(0,\,\infty)$에서 아래로 볼록)'
  answer_source: "답지(풀이 참조 · 해설 보충)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0734.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다항 인자 (x^2+bx+c) 를 바꾸면 y''=(x^2+(b+4)x+(2b+c+2))e^x. 제약: y'' 의 이차 인자가 정수 근 둘을 갖도록 b, c 를 고름(예: b=1, c=0 → (x+1)(x+4)). 지수를 e^{kx} 로 바꾸면 계수가 k 에 얽혀 정리가 늘어남."
    creative: "(1) (x^2-x)e^{-x} 로 바꾸면 y''=(x-1)(x-4)e^{-x} 로 부호 처리가 달라짐(★1) (2) 위로 볼록 구간의 길이가 3 임을 이용해 '길이가 5 가 되도록 b 결정'(I-BW d1 ★2) (3) 변곡점 두 개의 y좌표 합 묻기 → 계산 부담만 ↑(★2 · 질 저하 주의)."
```

```yaml
- id: RPM-CALC2-0735
  page: 105
  vendor_label: "교과서 07-1 곡선의 볼록"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=ln(x^2+1) 의 아래로 볼록·위로 볼록 구간 조사.
  category: "합성함수 미분 → 몫의 미분 → 분자 부호"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선의 볼록·오목 구간 조사(f'' 부호표)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y'=2x/(x^2+1), y''=(2-2x^2)/(x^2+1)^2. 분모는 항상 양이므로 분자 2(1-x^2) 가 부호를 결정해 -1<x<1 에서 아래로 볼록, 바깥에서 위로 볼록. 몫의 미분 한 번이 계산의 전부. 교과서·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "y''=2(1-x^2)/(x^2+1)^2 → 분모 양 → 분자 부호 → (-1,1) 아래로 볼록"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 (구간 $(-\infty,\,-1)$, $(1,\,\infty)$에서 위로 볼록, 구간 $(-1,\,1)$에서 아래로 볼록)'
  answer_source: "답지(풀이 참조 · 해설 보충)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0735.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ln(x^2+a) (a>0) 로 두면 y''=2(a-x^2)/(x^2+a)^2, 경계 ±√a. 제약: 경계를 정수로 두려면 a 를 완전제곱수(1, 4, 9)로. a≤0 은 정의역이 끊기므로 피함."
    creative: "(1) 위로 볼록 구간에서 접선이 곡선 위에 있음을 묻기 → 볼록성의 기하 의미 I-RT d1 ★2 (2) 우함수 대칭으로 x≥0 만 조사 후 대칭 복원(I-SYM d1 ★2) (3) y=ln(x^2+1) 과 직선 y=kx 의 교점 개수로 방정식 활용과 결합(★3)."
```

```yaml
- id: RPM-CALC2-0736
  page: 105
  vendor_label: "교과서 07-1 곡선의 볼록"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=x+2sin x (0<x<2π) 의 아래로 볼록·위로 볼록 구간 조사.
  category: "삼각함수 두 번 미분 → sin 부호 → 구간"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선의 볼록·오목 구간 조사(f'' 부호표)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y'=1+2cos x, y''=-2sin x. (0,π) 에서 sin x>0 이므로 y''<0 → 위로 볼록, (π,2π) 에서 아래로 볼록. 미분 두 번과 sin 부호. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y''=-2sin x → sin 부호 → (0,π) 위로 볼록·(π,2π) 아래로 볼록"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 (구간 $(0,\,\pi)$에서 위로 볼록, 구간 $(\pi,\,2\pi)$에서 아래로 볼록)'
  answer_source: "답지(풀이 참조 · 해설 보충)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0736.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(x+a sin x)는 y'' 부호에 영향 없음(a>0 그대로, a<0 반전). sin 을 cos 으로 바꾸면 경계가 π/2, 3π/2 로 이동. 제약: 구간 (0,2π) 안에서 y'' 영점이 π 하나가 되도록 주기를 유지(sin 2x 로 바꾸면 영점 셋)."
    creative: "(1) y=x+2sin x 의 극값도 함께 묻기(cos x=-1/2 → 2π/3, 4π/3 · ★2) (2) sin 2x 로 주기를 줄여 부호표 칸을 늘리기(★1~2) (3) 위로 볼록 구간에서 y=x 와의 위치 관계(x+2sin x>x) 로 부등식 활용 연결(I-RT d1 ★2)."
```

### 교과서 07-2 변곡점

```yaml
- id: RPM-CALC2-0737
  page: 105
  vendor_label: "교과서 07-2 변곡점"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=x^4-6x^2+6 의 변곡점의 좌표.
  category: "f''=0 → 좌우 부호 변화 확인 → 좌표"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "변곡점의 좌표(f''=0 · 부호 변화)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y''=12x^2-12=12(x-1)(x+1). x=±1 좌우에서 부호가 바뀌므로 둘 다 변곡점, y(±1)=1-6+6=1. 우함수라 좌표가 대칭으로 나옴. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y''=12(x-1)(x+1) → 영점 ±1 부호 변화 → (±1, 1)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(-1,\,1)$, $(1,\,1)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0737.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "y=x^4-ax^2+b (a>0) 로 두면 y'' 영점 ±√(a/6). 제약: a 를 6 의 배수(6, 24)로 두어 영점을 정수로. a≤0 이면 변곡점이 없어짐."
    creative: "(1) y''=0 이지만 부호가 안 바뀌는 점(x^4 의 x=0)을 함께 넣어 '변곡점인지 판단'(T-부호 ★2) (2) 두 변곡점을 지나는 직선의 방정식 묻기(★2) (3) '변곡점이 (1, 1) 이 되도록 a, b 결정'(I-BW d1 ★2)."
```

```yaml
- id: RPM-CALC2-0738
  page: 105
  vendor_label: "교과서 07-2 변곡점"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=x/(x^2+1) 의 변곡점의 좌표(세 개).
  category: "몫의 미분 두 번 → 분자 인수분해 → 부호 변화 세 점"
  M: {s: 2, k: 3, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "변곡점의 좌표(f''=0 · 부호 변화)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y'=(1-x^2)/(x^2+1)^2, y''=2x(x^2-3)/(x^2+1)^3. 이계도함수 정리에서 공통인수 (x^2+1) 을 미리 약분하지 않으면 사차식 전개로 빠지기 쉬움. 영점 0, ±√3 모두 부호가 바뀌어 변곡점 셋. 통찰은 없음(기함수 대칭은 확인용). 교과서 출발 ★1 이나 Mₖ 3·M_total 7 로 계산 부담이 구역 평균을 넘어 +1 → ★2.
    [분류 이슈] 계산 부담만으로 올린 ★2 — 스키마상 계산만 무거운 문제는 변별력이 약하므로 ★1 로 되돌릴 여지 있음.
  tier: star_2
  mechanism_primary: "y''=2x(x^2-3)/(x^2+1)^3 → 영점 0, ±√3 부호 변화 → (0,0), (±√3, ±√3/4)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\left(-\sqrt{3},\,-\dfrac{\sqrt{3}}{4}\right)$, $(0,\,0)$, $\left(\sqrt{3},\,\dfrac{\sqrt{3}}{4}\right)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0738.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "y=x/(x^2+a) (a>0) 로 두면 y''=2x(x^2-3a)/(x^2+a)^3, 변곡점 0, ±√(3a). 제약: 3a 가 완전제곱수(a=3 → ±3)가 되게 하면 좌표가 유리수. a<0 이면 정의역이 끊겨 변곡점 개수가 달라짐."
    creative: "(1) 기함수 대칭을 이용해 x>0 만 계산 후 원점 대칭으로 복원(I-SYM d1 ★2 유지) (2) 세 변곡점이 한 직선 y=x/4 위에 있음을 보이기(★3) (3) 변곡점 개수만 묻기로 바꾸면 y'' 영점 개수 문제(★2)."
```

```yaml
- id: RPM-CALC2-0739
  page: 105
  vendor_label: "교과서 07-2 변곡점"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=e^x-e^{-x}+2 의 변곡점의 좌표.
  category: "지수함수 두 번 미분 → e^x=e^{-x} → x=0"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "변곡점의 좌표(f''=0 · 부호 변화)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y''=e^x-e^{-x}=0 → e^{2x}=1 → x=0. x<0 에서 음, x>0 에서 양으로 바뀌므로 변곡점 (0, 2). 지수방정식 한 번. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y''=e^x-e^{-x} → 영점 0 부호 변화 → (0, 2)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(0,\,2)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0739.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항(+2)은 y좌표만 옮김. y=e^x-ae^{-x} (a>0) 로 두면 y''=e^x-ae^{-x}, 영점 x=(ln a)/2. 제약: a 를 e^2, e^4 등으로 두어야 좌표가 깔끔."
    creative: "(1) y=e^x+e^{-x} 로 바꾸면 y''>0 이라 변곡점이 없음 — '변곡점이 존재하는지' 판정형(★1~2) (2) 변곡점에서의 접선 방정식(y'(0)=2 → y=2x+2)까지 묻기(★2) (3) 기함수 e^x-e^{-x} 의 원점 대칭으로 변곡점이 대칭 중심임을 짚기(I-SYM d1 ★2)."
```

```yaml
- id: RPM-CALC2-0740
  page: 105
  vendor_label: "교과서 07-2 변곡점"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=x^2-2x ln x (x>0) 의 변곡점의 좌표.
  category: "곱의 미분 → f''=2-2/x → 영점 1"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "변곡점의 좌표(f''=0 · 부호 변화)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y'=2x-2ln x-2, y''=2-2/x=2(x-1)/x. x=1 좌우에서 부호가 음→양으로 바뀌어 변곡점 (1, 1). 정의역 x>0 만 챙기면 끝. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y''=2(x-1)/x → 영점 1 부호 변화 → (1, 1)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(1,\,1)$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0740.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "y=x^2-ax ln x (a>0) 면 y''=2-a/x, 영점 a/2. 제약: a 짝수면 영점 정수, y좌표 (a/2)^2-(a^2/2)ln(a/2) 가 ln 을 포함하므로 a=2 (ln 1=0) 가 가장 깔끔."
    creative: "(1) y=x ln x 로 줄이면 y''=1/x>0 → 변곡점 없음을 판정(★1) (2) 변곡점에서의 접선이 y=1 임(y'(1)=0)을 이용해 '접선이 x축에 평행한 변곡점' 묻기(★2) (3) 'y=x^2-ax ln x 의 변곡점의 x좌표가 2 가 되도록 a' 역방향(I-BW d1 ★2)."
```

```yaml
- id: RPM-CALC2-0741
  page: 105
  vendor_label: "교과서 07-2 변곡점"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    y=x+cos x (0<x<π) 의 변곡점의 좌표.
  category: "삼각함수 두 번 미분 → cos x=0 → 구간 안 해"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "변곡점의 좌표(f''=0 · 부호 변화)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y'=1-sin x, y''=-cos x. 0<x<π 에서 cos x=0 은 x=π/2 뿐이고 좌우 부호가 음→양으로 바뀜 → (π/2, π/2). 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y''=-cos x → 구간 안 영점 π/2 부호 변화 → (π/2, π/2)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\left(\dfrac{\pi}{2},\,\dfrac{\pi}{2}\right)$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0741.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "y=x+a cos x 는 a 값과 무관하게 변곡점 x좌표 π/2, y좌표도 π/2 로 고정. cos 을 sin 으로 바꾸면 (0,2π) 안 영점 π. 제약: 구간을 (0,2π) 로 넓히면 3π/2 도 변곡점이 되어 답이 둘."
    creative: "(1) 구간을 (0,2π) 로 넓혀 변곡점 두 개 세기(T-범위 ★2) (2) y'=1-sin x≥0 을 함께 짚어 '증가하면서 볼록성만 바뀌는 그래프' 개형 묻기(★2) (3) 변곡점이 직선 y=x 위에 있음을 이용한 대칭 중심 문제(I-SYM d1 ★2)."
```

### 교과서 07-3 함수의 그래프

```yaml
- id: RPM-CALC2-0742
  page: 105
  vendor_label: "교과서 07-3 함수의 그래프"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=e^{-x^2} 에 대하여 ⑴ 정의역 ⑵ y축 대칭 증명 ⑶ 증감·볼록 표 완성(그림) ⑷ 점근선 ⑸ 그래프 그리기. 단계 안내형.
  category: "정의역·대칭 → f'·f'' 표 → 점근선 → 개형"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 그래프 개형 그리기(정의역·대칭·증감·볼록·점근선)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'=-2xe^{-x^2}, f''=(4x^2-2)e^{-x^2}. 표는 x=±1/√2 (f''=0)·0 (f'=0) 을 경계로 채우면 되고, 점근선은 lim e^{-x^2}=0 으로 x축. 종 모양 개형. 다섯 소문항이 순서를 다 알려 주는 안내형이라 통찰 없음. 교과서·M_total 6 → ★1.
    [분류 이슈] 소문항 다섯의 노동량을 합치면 ★2 후보 — 안내형이라 ★1 로 둠.
  tier: star_1
  mechanism_primary: "f(-x)=f(x) 대칭 → f'=-2xe^{-x^2}, f''=2(2x^2-1)e^{-x^2} → 표(0 극대·±1/√2 변곡) → 점근선 y=0 → 종 모양"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "풀이 참조 ((1) 실수 전체의 집합 (4) $x$축)"
  answer_source: "답지(쪽 렌더 · 풀이 참조 · 해설 보충)"
  figure: "crop:fig-0742.png"
  latex: latex-bank/rpm-calc2/items/0742.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(x)=e^{-ax^2} (a>0) 면 변곡점 ±1/√(2a), 최댓값 1 로 고정. 표의 칸 수(변곡 2·극대 1)는 유지. 제약: 그림(표)의 빈칸 위치가 고정이므로 경계점 개수가 같은 함수만."
    creative: "(1) 안내 소문항을 없애고 '그래프를 그리시오' 한 줄로 만들면 순서를 스스로 세워야 함(★2) (2) e^{-x^2} 대신 xe^{-x^2}(기함수·극값 둘·변곡 셋)으로 바꾸면 표가 커짐(★2) (3) 그래프를 이용해 방정식 e^{-x^2}=k 의 실근 개수(0<k<1 → 2개)로 확장(I-RT d1 ★2)."
```

```yaml
- id: RPM-CALC2-0743
  page: 105
  vendor_label: "교과서 07-3 함수의 그래프"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=x^4-4x^3 의 그래프 그리기(증감·볼록·극값·변곡점).
  category: "f'·f'' 인수분해 → 표 → 개형"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 그래프 개형 그리기(증감·볼록표)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'=4x^2(x-3), f''=12x(x-2). x=0 은 f'=0 이지만 부호가 안 바뀌어 극값이 아니고 f'' 부호는 바뀌어 변곡점(T-부호). 극소 (3,-27), 변곡점 (0,0), (2,-16). 다항함수라 점근선 없음. 교과서·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f'=4x^2(x-3), f''=12x(x-2) → 표(0 변곡·2 변곡·3 극소) → 개형"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "풀이 참조"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0743.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f=x^4-ax^3 (a>0) 면 극소 x=3a/4, 변곡 0·a/2. 제약: a 를 4 의 배수로 두어 극소 x좌표를 정수로. x^4+ax^3 은 좌우 반전."
    creative: "(1) f'=0 이지만 극값이 아닌 점을 고르는 ㄱㄴㄷ 보기(T-부호 ★2) (2) 그래프로 방정식 x^4-4x^3=k 의 실근 개수(k=-27 경계·k=0 은 두 근)(I-RT d1 ★2) (3) 변곡점 두 개를 지나는 직선과 곡선의 교점 묻기(★3)."
```

```yaml
- id: RPM-CALC2-0744
  page: 105
  vendor_label: "교과서 07-3 함수의 그래프"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=1/(x^2+3) 의 그래프 그리기.
  category: "우함수 → f'·f'' → 점근선 y=0 → 개형"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 그래프 개형 그리기(증감·볼록표)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'=-2x/(x^2+3)^2, f''=6(x^2-1)/(x^2+3)^3. 극대 (0,1/3), 변곡점 (±1,1/4), 점근선 y=0. f'' 정리에서 (x^2+3) 공통인수 약분이 계산의 핵심. 교과서·통찰 없음·M_total 6 → ★1.
  tier: star_1
  mechanism_primary: "f'=-2x/(x^2+3)^2, f''=6(x^2-1)/(x^2+3)^3 → 극대 0·변곡 ±1 → 점근선 y=0 → 종 모양"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "풀이 참조"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0744.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f=1/(x^2+a) (a>0) 면 변곡점 ±√(a/3), 극대 1/a. 제약: a 를 3 의 배수(3, 12)로 두어 변곡 x좌표를 정수로. a<0 이면 수직 점근선이 생겨 다른 유형."
    creative: "(1) 우함수 대칭으로 x≥0 만 조사 후 복원(I-SYM d1 ★2) (2) 그래프를 이용해 1/(x^2+3)=k 의 실근 개수(0<k<1/3 → 2)(I-RT d1 ★2) (3) 분자를 x 로 바꾸면 0738 의 기함수 골조로 넘어감(★2)."
```

```yaml
- id: RPM-CALC2-0745
  page: 105
  vendor_label: "교과서 07-3 함수의 그래프"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=x-√x (x≥0) 의 그래프 그리기.
  category: "정의역 x≥0 → f' 영점 1/4 → f''>0 → 개형"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 그래프 개형 그리기(증감·볼록표)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'=1-1/(2√x)=0 → x=1/4, f''=1/(4x√x)>0 이라 전 구간 아래로 볼록, 극소 (1/4,-1/4). x=0 에서 f=0 이고 f' 가 -∞ 로 발산해 y축에 접하듯 출발(T-범위). x절편 0, 1. 교과서·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "정의역 x≥0 → f'=1-1/(2√x) → 극소 (1/4,-1/4) → f''>0 → 개형"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "풀이 참조"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0745.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f=x-a√x (a>0) 면 극소 x=a^2/4, 극솟값 -a^2/4, x절편 0·a^2. 제약: a 짝수면 좌표 정수. f=√x-x 는 상하 반전(위로 볼록)."
    creative: "(1) √x=t 치환으로 포물선 t^2-at 에서 극소를 읽는 갈래와 미분 갈래 비교(I-SC d1 ★2) (2) 그래프로 x-√x=k 의 실근 개수(k=-1/4 경계·-1/4<k<0 두 근)(I-RT d1 ★2) (3) x=0 에서의 접선 존재 여부(수직 접선) 판정(★2)."
```

```yaml
- id: RPM-CALC2-0746
  page: 105
  vendor_label: "교과서 07-3 함수의 그래프"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=x ln x (x>0) 의 그래프 그리기.
  category: "정의역 x>0 → f'=ln x+1 → 극소 1/e → f''>0 → x→0+ 극한"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 그래프 개형 그리기(증감·볼록표)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'=ln x+1=0 → x=1/e, 극소 -1/e. f''=1/x>0 이라 아래로 볼록, x절편 1. x→0+ 에서 x ln x→0 (교과서 제시 극한)이라 원점을 향해 출발. 교과서·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f'=ln x+1 → 극소 (1/e,-1/e) → f''=1/x>0 → lim x→0+ x ln x=0 → 개형"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "풀이 참조"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0746.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f=x ln x-ax 면 극소 x=e^{a-1}, f=x^2 ln x 면 극소 x=1/√e 에 변곡점 x=e^{-3/2} 가 생김. 제약: 극값 좌표가 e 의 거듭제곱으로 정리되게 계수를 고름."
    creative: "(1) 그래프로 x ln x=k 의 실근 개수(-1/e<k<0 → 2)(I-RT d1 ★2) (2) x^2 ln x 로 바꿔 변곡점까지 있는 개형(★2) (3) ln x/x 와 비교해 두 그래프의 대응(역수 관계)을 묻기(★3)."
```

```yaml
- id: RPM-CALC2-0747
  page: 105
  vendor_label: "교과서 07-3 함수의 그래프"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=x-sin x (-π≤x≤π) 의 그래프 그리기.
  category: "f'=1-cos x≥0 증가 → f''=sin x 변곡 0 → 기함수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수의 그래프 개형 그리기(증감·볼록표)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'=1-cos x≥0 이라 극값 없이 증가, f''=sin x 는 x=0 에서 부호가 바뀌어 변곡점 (0,0). (-π,0) 위로 볼록·(0,π) 아래로 볼록, 끝점 (±π,±π). 기함수라 원점 대칭. f'=0 인 x=0 을 극값으로 착각하지 않아야 함(T-부호). 교과서·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f'=1-cos x≥0 → 단조증가 → f''=sin x 변곡 (0,0) → 원점 대칭 개형"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "풀이 참조"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0747.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f=x-a sin x 는 |a|≤1 이면 단조증가(같은 골조), |a|>1 이면 극값이 생겨 표가 커짐. 구간을 [-2π,2π] 로 넓히면 변곡점 ±π 추가. 제약: 끝점 값 ±π 가 깔끔하도록 구간을 π 의 정수배로."
    creative: "(1) a=2 로 바꿔 극값 있는 개형(0736 골조와 합류 ★2) (2) 그래프로 x-sin x=k 의 실근 개수(단조 → 항상 1)(I-RT d1 ★2) (3) f'=0 이지만 극값이 아닌 점을 묻는 판정형(T-부호 ★2)."
```

### 교과서 07-4 함수의 최대와 최소

```yaml
- id: RPM-CALC2-0748
  page: 107
  vendor_label: "교과서 07-4 함수의 최대와 최소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=(x^2+3x+7)/(x-3) 의 구간 [4, 9] 에서의 최댓값·최솟값.
  category: "몫의 미분 → 구간 안 임계점 8 → 끝점·임계점 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "닫힌 구간에서 함수의 최대·최소"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'=(x-8)(x+2)/(x-3)^2, 구간 안 임계점은 8 뿐. f(4)=35, f(8)=19, f(9)=115/6 를 비교해 최대 35·최소 19. f(9)=19.1… 이 f(8) 과 가까워 끝점 비교를 생략하면 안 됨(T-경계). 교과서·통찰 없음·M_total 6 → ★1.
  tier: star_1
  mechanism_primary: "f'=(x-8)(x+2)/(x-3)^2 → 임계점 8 → f(4), f(8), f(9) 비교 → 최대 35·최소 19"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '최댓값: $35$, 최솟값: $19$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0748.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 상수항을 바꾸면 f' 분자만 바뀜: (x^2+3x+c)/(x-3) → f' 분자 x^2-6x-(9+c), c=7 → (x-8)(x+2). 제약: 분자가 정수근으로 인수분해되게 c 를 고르고(c=-2 → (x-7)(x+1)), 임계점이 구간 안에 하나만 들어오게 구간을 두며, x=3 이 구간 밖이어야 함."
    creative: "(1) 구간을 [4, ∞) 로 열어 최솟값만 존재함을 판정(★2) (2) f=x+6+25/(x-3) 으로 분해해 산술·기하평균 갈래와 미분 갈래 비교(I-SC d1 ★2~3) (3) 최댓값과 최솟값의 차를 묻기(★1 유지)."
```

```yaml
- id: RPM-CALC2-0749
  page: 107
  vendor_label: "교과서 07-4 함수의 최대와 최소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=x√(4-x^2) 의 구간 [-2, 2] 에서의 최댓값·최솟값.
  category: "곱·합성 미분 → 통분 → 임계점 ±√2 → 끝점 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "닫힌 구간에서 함수의 최대·최소"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'=(4-2x^2)/√(4-x^2)=0 → x=±√2. f(√2)=2, f(-√2)=-2, f(±2)=0 → 최대 2·최소 -2. 기함수라 최대·최소가 부호만 다르게 나오지만 대칭을 몰라도 네 값 비교로 끝남. 통분 한 번이 계산의 전부. 교과서·통찰 없음·M_total 6 → ★1.
  tier: star_1
  mechanism_primary: "f'=(4-2x^2)/√(4-x^2) → 임계점 ±√2 → f(±√2)=±2, f(±2)=0 → 최대 2·최소 -2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '최댓값: $2$, 최솟값: $-2$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0749.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f=x√(a^2-x^2) 면 임계점 ±a/√2, 최대 a^2/2. 제약: 구간은 정의역 [-a, a] 와 맞추고 a^2 이 짝수(a=2, 4, √2)가 되게 하면 최댓값이 정수."
    creative: "(1) 기함수 대칭으로 x≥0 만 계산 후 최소는 -최대(I-SYM d1 ★2) (2) x=2cos θ 치환으로 2sin 2θ 의 최대로 옮기는 갈래와 비교(I-SC d1 ★2~3) (3) 구간을 [0, 2] 로 줄여 최솟값이 끝점에서 나오게(T-경계 ★1~2)."
```

```yaml
- id: RPM-CALC2-0750
  page: 107
  vendor_label: "교과서 07-4 함수의 최대와 최소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=xe^{-x} 의 구간 [-1, 3] 에서의 최댓값·최솟값.
  category: "곱의 미분 → 임계점 1 → 끝점 값 비교(e 의 크기)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "닫힌 구간에서 함수의 최대·최소"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'=(1-x)e^{-x}=0 → x=1, f(1)=1/e. f(-1)=-e, f(3)=3/e^3. 3/e^3<1/e 는 e^2>3 으로 확인해 최대 1/e·최소 -e. 지수 값 크기 비교가 유일한 마찰(T-경계). 교과서·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f'=(1-x)e^{-x} → 임계점 1 → f(-1)=-e, f(1)=1/e, f(3)=3e^{-3} 비교 → 최대 1/e·최소 -e"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '최댓값: $\dfrac{1}{e}$, 최솟값: $-e$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0750.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f=xe^{-ax} 면 임계점 1/a·최대 1/(ae). 구간 왼쪽 끝을 0 으로 옮기면 최소가 끝점 0. 제약: 오른쪽 끝점 값 be^{-ab} 가 1/(ae) 보다 작음을 e 의 크기(e^2>3 등)로 보일 수 있는 수만."
    creative: "(1) 구간을 [0, ∞) 로 열어 최댓값만 존재(★2) (2) x^2e^{-x} 로 바꿔 임계점 0·2 둘(★2) (3) 그래프를 이용한 xe^{-x}=k 의 실근 개수(0<k<1/e → 2)(I-RT d1 ★2)."
```

```yaml
- id: RPM-CALC2-0751
  page: 107
  vendor_label: "교과서 07-4 함수의 최대와 최소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=ln x/x 의 구간 [1, 3e] 에서의 최댓값·최솟값.
  category: "몫의 미분 → 임계점 e → 끝점 값 비교"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "닫힌 구간에서 함수의 최대·최소"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f'=(1-ln x)/x^2=0 → x=e, f(e)=1/e. f(1)=0, f(3e)=(1+ln 3)/(3e)>0 이므로 최대 1/e·최소 0. f(3e) 가 최댓값보다 작은 것은 e 가 유일한 극대라 자동. 교과서·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f'=(1-ln x)/x^2 → 임계점 e → f(1)=0, f(e)=1/e, f(3e)>0 → 최대 1/e·최소 0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '최댓값: $\dfrac{1}{e}$, 최솟값: $0$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0751.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 왼쪽 끝을 1/e 로 옮기면 f(1/e)=-e 가 최소. 오른쪽 끝은 e 보다 크기만 하면 최댓값 유지. 제약: 끝점 값 비교가 필요하면 ln 값이 정리되는 e 의 거듭제곱(e^2, e^3)으로."
    creative: "(1) 구간 [1/e, e^2] 로 바꿔 최소를 끝점 -e 에서 읽게(T-경계 ★2) (2) ln x/x 의 그래프로 방정식 ln x=kx 의 실근 개수(k=1/e 경계)(I-RT d1 ★2~3) (3) e^π 과 π^e 의 대소 비교로 연결(I-RT d2 ★3)."
```

```yaml
- id: RPM-CALC2-0752
  page: 107
  vendor_label: "교과서 07-4 함수의 최대와 최소"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    f(x)=x+2cos x 의 구간 [0, π] 에서의 최댓값·최솟값.
  category: "f'=1-2sin x → 임계점 π/6, 5π/6 → 네 값 비교"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "닫힌 구간에서 함수의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=1-2sin x=0 → 구간 안에서 π/6 과 5π/6 두 개. f(0)=2, f(π/6)=π/6+√3, f(5π/6)=5π/6-√3, f(π)=π-2 를 π≈3.14·√3≈1.73 으로 비교해야 최대 π/6+√3·최소 5π/6-√3 이 확정됨. sin x=1/2 의 둘째 해 누락(T-범위)과 끝점 비교 생략(T-경계) 두 함정. 교과서 출발 ★1 이나 Mₜ 2·M_total 7 → +1 ★2.
    [분류 이슈] 함정 두 개와 근삿값 비교로 올린 ★2 — 통찰은 없으므로 ★1 로 볼 여지 있음.
  tier: star_2
  mechanism_primary: "f'=1-2sin x → π/6(극대)·5π/6(극소) → f(0), f(π/6), f(5π/6), f(π) 근삿값 비교 → 최대 π/6+√3·최소 5π/6-√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '최댓값: $\dfrac{\pi}{6}+\sqrt{3}$, 최솟값: $\dfrac{5}{6}\pi-\sqrt{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0752.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f=x+a cos x (a>1) 면 임계점은 sin x=1/a. 제약: 특수각이 나오도록 a=2 (π/6), a=√2 (π/4), a=2/√3 (π/3) 만. a≤1 이면 f'≥0 단조가 되어 끝점만 비교(다른 골조)."
    creative: "(1) 구간을 [0, π/2] 로 줄여 임계점 하나(★1) (2) 최댓값과 최솟값의 합을 물어 √3 이 소거되는 설계(답 π · ★2) (3) f=x+2cos x 가 x축과 만나는 횟수(방정식 활용과 결합 ★2~3)."
```

### 교과서 07-5 방정식에의 활용

```yaml
- id: RPM-CALC2-0753
  page: 107
  vendor_label: "교과서 07-5 방정식에의 활용"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    방정식 x^2-1/(x^2+1)=0 의 서로 다른 실근의 개수.
  category: "f(x) 설정 → f' 부호 → 극소 f(0)<0 → x축과 교점 수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "방정식의 실근의 개수(함수의 그래프와 x축)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(x)=x^2-1/(x^2+1) 로 두면 f'=2x{1+1/(x^2+1)^2} 의 부호는 x 와 같아 x=0 에서 극소 f(0)=-1<0, 양끝에서 +∞ → x축과 두 점에서 만나 실근 2개. 우함수라 대칭이지만 부호 분석만으로 충분. x^2(x^2+1)=1 의 치환 풀이도 있으나 구역이 방법을 정함. 교과서·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f=x^2-1/(x^2+1) → f' 부호 = x 부호 → 극소 f(0)=-1<0, 양끝 +∞ → 실근 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0753.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x^2-a/(x^2+1)=0 (a>0) 이면 f(0)=-a<0 으로 항상 2개. a<0 이면 f(0)=-a>0 이라 0개, a=0 이면 1개(x=0). 제약: 개수가 바뀌는 a 의 부호를 답과 맞춰 확인."
    creative: "(1) a 를 매개변수로 두고 '실근의 개수가 2 가 되도록 하는 a 의 범위'(I-BW d1 ★2) (2) 두 그래프 y=x^2 과 y=1/(x^2+1) 의 교점으로 보는 갈래와 비교(I-SC d1 ★2) (3) 치환 x^2=t 로 t^2+t-a=0 의 양근 개수 세기로 옮기면 I-RT d1 ★2."
```

```yaml
- id: RPM-CALC2-0754
  page: 107
  vendor_label: "교과서 07-5 방정식에의 활용"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    방정식 2x-√x-1=0 의 서로 다른 실근의 개수.
  category: "정의역 x≥0 → f' 영점 1/16 → 극소<0·f(0)<0 → 교점 1"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "방정식의 실근의 개수(함수의 그래프와 x축)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(x)=2x-√x-1 (x≥0) 은 f'=2-1/(2√x)=0 → x=1/16 에서 극소 -9/8<0, f(0)=-1<0, x→∞ 에서 +∞ → x축과 한 번만 만나 실근 1개. 정의역 왼쪽 끝 f(0)<0 확인(T-범위)이 핵심. √x=t 치환으로 (2t+1)(t-1)=0 도 되지만 구역 방법을 따름. 교과서·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "정의역 x≥0 → f'=2-1/(2√x) → 극소 f(1/16)=-9/8<0, f(0)=-1<0, 우측 +∞ → 실근 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0754.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "2x-√x-c 에서 c 를 바꾸면 f(0)=-c, 극솟값 -1/8-c. 제약: c>0 이면 1개, -1/8<c<0 이면 2개, c=-1/8 이면 1개(접함), c<-1/8 이면 0개 — 답이 바뀌는 경계 -1/8 을 확인."
    creative: "(1) c 를 매개변수로 '실근이 2개가 되도록 하는 c 의 범위'(I-BW d1 ★2) (2) √x=t 치환 이차방정식의 음이 아닌 근 개수로 옮기는 갈래 비교(I-SC d1 ★2) (3) c=-1/16 처럼 f(0)>0 인데 실근이 둘인 설정(T-범위 ★2)."
```

```yaml
- id: RPM-CALC2-0755
  page: 107
  vendor_label: "교과서 07-5 방정식에의 활용"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    방정식 e^x-x=0 의 서로 다른 실근의 개수.
  category: "f=e^x-x → 극소 f(0)=1>0 → 교점 없음"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "방정식의 실근의 개수(함수의 그래프와 x축)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(x)=e^x-x 는 f'=e^x-1=0 → x=0 에서 극소이자 최소 f(0)=1>0 이므로 x축과 만나지 않아 실근 0개. 미분 한 번과 부호. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f=e^x-x → f'=e^x-1 → 최소 f(0)=1>0 → 실근 0"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0755.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "e^x-ax (a>0) 면 최소 f(ln a)=a(1-ln a). 제약: 0<a<e 면 0개, a=e 면 1개, a>e 면 2개 — 답 0 을 유지하려면 0<a<e. a<0 이면 단조증가로 1개."
    creative: "(1) 'e^x=ax 의 실근이 2개가 되도록 하는 a 의 범위'(I-BW d1 ★2) (2) y=e^x 와 직선 y=x 의 위치 관계로 보는 갈래(I-RT d1 ★2) (3) e^x≥x+1 부등식 증명(0758 골조)으로 연결(★1~2)."
```

```yaml
- id: RPM-CALC2-0756
  page: 107
  vendor_label: "교과서 07-5 방정식에의 활용"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    방정식 x-2=ln x 의 서로 다른 실근의 개수.
  category: "f=x-2-ln x → 극소 f(1)=-1<0 → 양끝 +∞ → 교점 2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "방정식의 실근의 개수(함수의 그래프와 x축)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(x)=x-2-ln x (x>0) 는 f'=1-1/x=0 → x=1 에서 극소 f(1)=-1<0, x→0+ 와 x→∞ 에서 모두 +∞ → x축과 두 번 만나 실근 2개. 좌우 극한 확인이 개수를 결정. 교과서·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f=x-2-ln x → f'=1-1/x → 극소 f(1)=-1<0, 양끝 +∞ → 실근 2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0756.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x-c=ln x 에서 극솟값 1-c. 제약: c>1 이면 2개, c=1 이면 1개, c<1 이면 0개 — 답 2 를 유지하려면 c>1."
    creative: "(1) 'x-c=ln x 의 실근이 2개가 되도록 하는 c 의 범위'(I-BW d1 ★2) (2) y=ln x 와 y=x-2 의 그래프 교점으로 보는 갈래(I-RT d1 ★2) (3) 두 실근 사이에 1 이 있음을 보이기(★2)."
```

```yaml
- id: RPM-CALC2-0757
  page: 107
  vendor_label: "교과서 07-5 방정식에의 활용"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    방정식 x+sin x=1/2 의 서로 다른 실근의 개수.
  category: "f=x+sin x-1/2 → f'=1+cos x≥0 단조증가 → 교점 1"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "방정식의 실근의 개수(함수의 그래프와 x축)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(x)=x+sin x-1/2 는 f'=1+cos x≥0 (등호는 고립점)이라 증가함수이고 양끝 극한이 ∓∞ 이므로 x축과 정확히 한 번 만남 → 실근 1개. f'=0 인 점이 있어도 단조라는 판단(T-경계)이 유일한 마찰. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f=x+sin x-1/2 → f'=1+cos x≥0 → 단조증가·양끝 ∓∞ → 실근 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/0757.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 상수(1/2)는 답에 영향 없음(항상 1개). x+a sin x 로 바꾸면 |a|≤1 일 때만 단조. 제약: |a|>1 이면 극값이 생겨 개수가 우변 값에 따라 달라짐."
    creative: "(1) x+2sin x=k 로 바꿔 극값 있는 경우의 실근 개수(k 에 따라 1~3)(I-MI d1 ★2~3) (2) 'x+a sin x=k 가 k 와 무관하게 실근이 하나가 되는 a 의 범위'(I-BW d1 ★2) (3) 실근이 (0, π/2) 에 있음을 보이는 사잇값 정리 결합(★2)."
```

### 교과서 07-6 부등식에의 활용

```yaml
- id: RPM-CALC2-0758
  page: 107
  vendor_label: "교과서 07-6 부등식에의 활용"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    모든 실수 x 에 대하여 e^x≥2x-1 이 성립함을 보이기.
  category: "f=e^x-2x+1 → 최소 f(ln 2)=3-2ln 2>0"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부등식의 증명(최솟값≥0)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(x)=e^x-2x+1 은 f'=e^x-2=0 → x=ln 2 에서 최소 f(ln 2)=3-2ln 2. ln 2<1 로 최솟값이 양수임을 보이면 끝. 최솟값에 ln 이 남아 부호 판단 한 줄이 추가됨(T-경계). 교과서·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "f=e^x-2x+1 → f'=e^x-2 → 최소 f(ln 2)=3-2ln 2>0 → 부등식 성립"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "풀이 참조"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0758.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "e^x≥ax+b 꼴에서 최소 f(ln a)=a-a ln a-b. 제약: a>0 이고 a(1-ln a)≥b 여야 성립. 등호가 성립하는 설계는 b=a-a ln a (예: a=1, b=1 → e^x≥x+1)."
    creative: "(1) e^x≥x+1 처럼 등호 성립점이 있는 형태(★1) (2) 'e^x≥2x+k 가 모든 실수에서 성립하는 k 의 최댓값'(I-BW d1 ★2) (3) 두 그래프 y=e^x, y=2x-1 의 위치 관계 그림으로 옮기기(I-RT d1 ★2)."
```

```yaml
- id: RPM-CALC2-0759
  page: 107
  vendor_label: "교과서 07-6 부등식에의 활용"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    x>1 일 때 부등식 x-ln(x-1)>0 이 성립함을 보이기.
  category: "f=x-ln(x-1) → 최소 f(2)=2>0"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부등식의 증명(최솟값≥0)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(x)=x-ln(x-1) (x>1) 은 f'=1-1/(x-1)=(x-2)/(x-1)=0 → x=2 에서 최소 f(2)=2>0 → 성립. 정의역 x>1 과 x→1+ 극한(+∞)만 챙기면 됨. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f=x-ln(x-1) → f'=(x-2)/(x-1) → 최소 f(2)=2>0 → 부등식 성립"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "풀이 참조"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0759.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x-ln(x-a) (x>a) 면 최소 f(a+1)=a+1. 제약: 최솟값이 양수이려면 a>-1. ln(x-1) 의 계수를 k 로 두면 최소 x=k+1, 값 k+1-k ln k 의 부호를 확인해야 함(k 가 커지면 음수)."
    creative: "(1) 'x-k ln(x-1)>0 이 x>1 에서 항상 성립하는 자연수 k 의 최댓값'(I-BW d1 ★2~3) (2) 등호 포함·미포함을 바꾸고 최솟값과 비교(T-경계 ★1) (3) ln(x-1)<x 를 y=ln(x-1) 과 y=x 의 그래프 관계로(I-RT d1 ★2)."
```

### 교과서 07-7 속도와 가속도

```yaml
- id: RPM-CALC2-0760
  page: 107
  vendor_label: "교과서 07-7 속도와 가속도"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    위치 x=e^t-2t 인 점 P 의 t=3 에서의 속도와 가속도.
  category: "x'=속도 → x''=가속도 → 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수직선 위 점의 속도와 가속도"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    v=f'(t)=e^t-2, a=f''(t)=e^t 에 t=3 대입 → 속도 e^3-2, 가속도 e^3. 미분 두 번과 대입. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "v=e^t-2, a=e^t → t=3 → (e^3-2, e^3)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '속도: $e^3-2$, 가속도: $e^3$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0760.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(e^t-kt)·시각 t 를 자유롭게. 제약: 답이 e 의 거듭제곱으로 정리되게 t 를 정수로, e^{at} 로 바꾸면 연쇄법칙 계수 a 가 붙음."
    creative: "(1) '속도가 0 이 되는 시각'(ln 2)이나 '가속도가 속도의 2배가 되는 시각' 묻기(★2) (2) 운동 방향이 바뀌는 시각(v 부호 변화)으로 확장(★2) (3) x=te^{-t} 처럼 곱 형태로 바꿔 v=0 시각·최대 위치까지(★2)."
```

```yaml
- id: RPM-CALC2-0761
  page: 107
  vendor_label: "교과서 07-7 속도와 가속도"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    위치 x=3t-sin 2t 인 점 P 의 t=π/6 에서의 속도와 가속도.
  category: "합성함수 미분 두 번 → 특수각 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수직선 위 점의 속도와 가속도"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    v=3-2cos 2t, a=4sin 2t 에 t=π/6 (2t=π/3) 대입 → 속도 3-1=2, 가속도 2√3. 연쇄법칙 계수 2 를 두 번 붙이는 것이 유일한 주의점. 교과서·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "v=3-2cos 2t, a=4sin 2t → 2t=π/3 → (2, 2√3)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '속도: $2$, 가속도: $2\sqrt{3}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc2/items/0761.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sin kt 의 k 와 시각을 바꾸면 kt 가 특수각이 되도록(π/6·π/4·π/3). 제약: 답이 √ 하나로 정리되게 특수각 유지. 3t 의 계수를 바꾸면 속도가 0 이 되는 시각 유무가 달라짐(계수≤2 이면 존재)."
    creative: "(1) '속도가 최소가 되는 시각'(cos 2t=1)(★2) (2) 3t 의 계수를 1 로 바꿔 v=1-2cos 2t=0 인 시각(운동 방향 전환)(★2) (3) 가속도가 0 인 순간의 속도 묻기(★1~2)."
```

## 표본 판정 요약 (32문)

- ★ 분포: ★1 30 · ★2 2 · ★3 0 · ★4 0 · ★5 0
- 통찰형 0 · 절차형 32 · premium 0
- type_hint 상위: 「함수의 그래프 개형 그리기」 6 · 「곡선의 볼록·오목 구간 조사」 5 · 「변곡점의 좌표」 5 · 「닫힌 구간에서 함수의 최대·최소」 5 · 「방정식의 실근의 개수」 5 · 「부등식의 증명」 2 · 「이계도함수의 부호로 볼록 증명」 2 · 「수직선 위 점의 속도와 가속도」 2
- 그림: 1문(`crop:fig-0742.png` · 증감·볼록 표 완성)
- M_total 분포: 4 → 13문 · 5 → 13문 · 6 → 4문 · 7 → 2문. 매개변수(Mₐ≥2)가 있는 문항은 없음.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 이 범위는 벤더 신호가 「교과서」 하나뿐이라 2단 드리프트는 없고, ±1 경계 문항만 적는다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC2-0738 | 이계도함수(몫의 미분 두 번) 계산 부담만으로 Mₖ 3·M_total 7 → ★2 로 올림. 스키마상 계산만 무거운 문제는 변별력 약함 — ★1 로 되돌릴 여지 | ★2 / ★1 |
| RPM-CALC2-0742 | 안내형 소문항 다섯(정의역·대칭·표·점근선·개형)을 합친 노동량은 ★2 후보. 순서를 다 알려 주는 안내형이라 ★1 로 둠 | ★1 / ★2 |
| RPM-CALC2-0752 | sin x=1/2 두 해(T-범위)·끝점 근삿값 비교(T-경계) 두 함정으로 Mₜ 2·M_total 7 → ★2. 통찰은 없어 ★1 로 볼 여지 | ★2 / ★1 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 「곡선의 볼록·오목 구간 조사(f'' 부호표)」(0732~0736) · 「변곡점의 좌표(f''=0·부호 변화)」(0737~0741) · 「함수의 그래프 개형 그리기」(0742~0747) · 「닫힌 구간에서 함수의 최대·최소」(0748~0752) · 「방정식의 실근의 개수(함수의 그래프와 x축)」(0753~0757) 가 각 5~6문씩 한 묶음.
- 통합해도 될 유형: 「이계도함수의 부호로 볼록 증명」(0730·0731)은 「볼록·오목 구간 조사」의 증명형 변종이라 같은 유형의 하위 항목으로 두면 됨. 「함수의 그래프 개형 그리기」의 안내형(0742)과 한 줄형(0743~0747)도 base ★ 만 다르게(안내형 ★1 · 한 줄형 ★1~2) 한 유형으로.
- 따로 세워야 할 유형: 「방정식의 실근의 개수」는 이 범위처럼 상수 방정식(base ★1)과 유형 구역에서 나올 매개변수 k 의 범위(I-BW·I-MI 가 들어와 base ★2~3)를 별개 유형으로 두어야 v3.8 산식이 맞음. 「부등식의 증명」도 상수형(★1)과 「성립하는 k 의 범위」(★2~3)를 분리. 「닫힌 구간 최대·최소」는 지수·로그·삼각의 함수족보다 「끝점 값 비교에 근삿값이 필요한가」(0752) 로 base ★ 를 가르는 편이 학생 체감과 맞음.
- 「속도와 가속도」(0760·0761)는 대입만 하는 ★1 유형이고, 유형 구역의 「운동 방향 전환·최대 속도」와는 골조가 달라 별도 유형.
