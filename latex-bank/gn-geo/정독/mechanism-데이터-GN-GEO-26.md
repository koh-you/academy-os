---
name: mechanism-데이터-GN-GEO-26
description: 개념원리 기하 26 직선의 방정식(1/1 · 216~220쪽 · 15문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 기하 (22개정 · 학생용 PDF) · 전사본 latex-bank/gn-geo
  section: 26 직선의 방정식
  unit_code: GEO-26
  part: "1/1"
  extract_range: "216~220쪽 · 216-451~220-461"
  total_problems: 15
  unit_total: 15
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-geo/items/<id>.tex
  image_source: latex-bank/gn-geo/figures/ (crops.json)
---

# 개념원리 기하 · 26 직선의 방정식 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 기하 26단원 「직선의 방정식」 216~220쪽 전 15문항을 다룬다. 구역은 셋이다. 「특강」 1문(216-451 · 법선벡터로 나타낸 직선), 「개념원리 익히기」 4문(217-452~217-455 · 평면과 공간에서 방향벡터·두 점으로 직선 세우기), 「필수·발전 예제」 10문(필수 예제 218-e1 · 219-e2 · 220-e3 · 220-e4 와 그 뒤에 붙는 확인체크 6문)이다. 개념원리 고등의 난이도 신호는 구역과 태그이므로 익히기는 ★1, 필수 예제와 그 확인체크는 ★2, 특강 확인체크는 ★2 를 출발점으로 잡았고, 여기서 M_total·통찰로 ±1 조정했다. 그림이 딸린 문항은 한 문항도 없다(전부 식과 좌표로만 주어진다).

단원 골조는 사실상 하나다 — **점 하나 + 방향벡터(또는 법선벡터) 하나를 확정하고 대칭식·매개변수 표현으로 옮긴다.** 변별은 방향벡터를 어떻게 얻느냐(직접 주어짐 / 두 점의 차 / 평행한 직선에서 읽기 / 계수가 곱해진 대칭식을 정규화해서 읽기)와, 얻은 직선에 무엇을 추가로 요구하느냐(좌표평면과의 교점 · 지나는 점의 미지 좌표 · 다른 직선과의 교점)에서 나온다. 그래서 이 범위의 진짜 통찰은 두 가지뿐이다. ⑴ $3(x-2)=-6(y+2)=2(z+1)$ 처럼 **계수가 곱해진 대칭식을 표준형으로 정규화해야 방향벡터를 읽을 수 있다**는 것(459·461), ⑵ **두 직선의 교점은 서로 다른 매개변수 두 개로 두고 성분별로 연립한 뒤 남은 한 식으로 일치를 확인해야 한다**는 것(e4·461)이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다. 이 단원의 숫자 변형에서 특히 조심할 것은 **방향벡터 성분에 0 이 섞이면 대칭식 표기 자체가 달라진다**(예: $x=5$ · $z=2$)는 점과, 좌표평면과의 교점을 묻는 문항은 **그 좌표가 0 이 되는 매개변수 값이 존재해야** 한다는 점이다.

## 문항 데이터

### 특강

```yaml
- id: GN-GEO-216-451
  page: 216
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "특강 확인체크"
  summary: |
    ⑴~⑶ 법선벡터가 주어진(또는 수직 조건으로 정해지는) 직선의 방정식 구하기.
    ⑴ 점 $(-1,3)$·법선벡터 $(2,1)$ ⑵ 점 $(-2,1)$·벡터 $(-3,2)$ 에 수직
    ⑶ 점 $(-2,-4)$·직선 $\dfrac{x+4}{5}=-y-1$ 에 수직.
  category: "법선벡터 확정 → a(x-x₁)+b(y-y₁)=0 → 일반형 정리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "법선벡터가 주어진 직선의 방정식(좌표평면 · 수직 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    법선벡터 $\vec n=(a,b)$ 이면 직선은 $a(x-x_1)+b(y-y_1)=0$ 이라는 특강 공식을 그대로 쓴다.
    ⑶ 만 한 단계가 더 있다 — 주어진 대칭식에서 방향벡터 $(5,-1)$ 을 읽고 그것을 새 직선의 법선벡터로 삼는다.
    다만 이 전환이 바로 특강이 가르치는 내용이라 통찰로는 세지 않았다(절차형).
    특강 확인체크 ★2 출발 · 통찰 0 · M_total 5 로 -1 후보지만, 법선벡터 표현 자체가 교육과정 심화라 ★2 유지.
    [분류 이슈] 골조 길이만 보면 익히기(★1)와 같다.
  tier: star_2
  mechanism_primary: "법선벡터 n=(a,b) 확정(⑶ 은 주어진 직선의 방향벡터를 읽어 n 으로) → a(x-x₁)+b(y-y₁)=0 → 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $2x+y-1=0$ ⑵ $3x-2y+8=0$ ⑶ $5x-y+6=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/216-451.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점과 법선벡터 성분을 자유롭게 바꿀 수 있음. 제약: 법선벡터는 영벡터가 아니어야 하고, ⑶ 처럼 대칭식으로 주는 직선은 분모가 0 이 되지 않아야 한다. 계수를 정수로 남기려면 성분끼리 서로소인 쌍을 쓰는 편이 답이 깔끔하다."
    creative: "(1) 법선벡터 대신 기울기를 주고 법선벡터를 되묻기(역방향 · ★2 유지) (2) 두 직선이 수직일 조건을 법선벡터 내적 0 으로 쓰게 하면 내적 단원과 결합 → ★3 (3) 점을 미지수 $(a,b)$ 로 두고 직선 위에 있을 조건까지 요구하면 Mₐ 상승 → ★3."
```

### 개념원리 익히기

```yaml
- id: GN-GEO-217-452
  page: 217
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 좌표평면에서 한 점과 방향벡터가 주어진 직선의 방정식 구하기.
    ⑶ $\vec u=(0,-2)$ · ⑷ $\vec u=(3,0)$ 처럼 성분에 0 이 있는 경우 포함.
  category: "점 + 방향벡터 → 대칭식 (성분 0 이면 x=상수 · y=상수)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "방향벡터가 주어진 직선의 방정식(좌표평면 · 성분 0 포함)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $(x-x_1)/a=(y-y_1)/b$ 공식을 네 번 쓰는 개념 확인.
    유일한 함정은 ⑶⑷ 처럼 성분에 0 이 있으면 대칭식으로 쓸 수 없고 $x=5$ · $y=-3$ 이 된다는 것(T-표기).
    익히기 ★1 출발 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "점 (x₁,y₁)·방향벡터 (a,b) → (x-x₁)/a=(y-y₁)/b → 성분이 0 이면 x=x₁ 또는 y=y₁"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{x-2}{4}=\dfrac{3-y}{5}$ ⑵ $\dfrac{x}{3}=\dfrac{y}{2}$ ⑶ $x=5$ ⑷ $y=-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/217-452.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 좌표와 방향벡터 성분 전부 교체 가능. 제약: 방향벡터는 영벡터 금지, 소문항 중 최소 하나는 성분 0 을 남겨야 표기 함정이 유지된다. 답을 $\\dfrac{x-2}{4}=\\dfrac{3-y}{5}$ 꼴로 받으려면 음수 성분을 하나 두는 편이 좋다."
    creative: "(1) 대칭식을 주고 방향벡터·지나는 점을 되묻기(역방향 · ★1) (2) 방향벡터를 「$x$축의 양의 방향과 이루는 각이 60°」로 바꾸면 삼각비와 결합 → ★2 (3) 같은 직선을 매개변수 표현으로도 쓰게 하면 표현 전환(I-RT d1) → ★2."
```

```yaml
- id: GN-GEO-217-453
  page: 217
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴⑵ 좌표평면의 두 점 A, B 를 지나는 직선의 방정식을 벡터를 이용해 구하기.
    ⑴ $\pt{A}(2,1)$, $\pt{B}(-4,3)$ ⑵ $\pt{A}(-2,4)$, $\pt{B}(5,-1)$.
  category: "방향벡터 = B-A → 한 점 통과 대칭식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점을 지나는 직선의 방정식(좌표평면 · 방향벡터 AB)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $\vec{AB}$ 를 방향벡터로 삼아 A 를 지나는 대칭식을 쓰는 두 단계.
    성분을 뺄 때의 부호(⑴ 은 $(-6,2)$ 이므로 $(-3,1)$ 로 줄일 수 있다)가 유일한 실수 지점(T-부호).
    익히기 ★1 출발 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "AB = B-A 를 방향벡터로 → A 를 지나는 대칭식 → 성분 약분·부호 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{x-2}{3}=1-y$ ⑵ $\dfrac{x+2}{7}=\dfrac{4-y}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/217-453.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표를 자유롭게 교체. 제약: 두 점이 같으면 안 되고, $x$ 좌표나 $y$ 좌표가 같으면 답이 $x=$상수·$y=$상수 꼴로 바뀌므로 그 경우를 의도하지 않는다면 피한다. 성분 차가 서로소면 약분 없이 답이 나온다."
    creative: "(1) 세 점을 주고 한 직선 위에 있는지 판정하게 하기(방향벡터 평행 조건 → ★2) (2) 선분 AB 의 중점을 지나고 AB 에 수직인 직선(수직이등분선 → 법선벡터 결합 ★2) (3) 두 점 중 하나를 $(a,\\,3)$ 처럼 미지수로 두고 직선이 원점을 지날 조건을 묻기 → Mₐ 상승 ★2."
```

```yaml
- id: GN-GEO-217-454
  page: 217
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 좌표공간에서 한 점과 방향벡터가 주어진 직선의 방정식 구하기.
    ⑶ $\vec u=(2,1,0)$ · ⑷ $\vec u=(0,-2,0)$ 처럼 성분에 0 이 섞인 경우 포함.
  category: "점 + 방향벡터 → 공간 대칭식 (0 성분은 좌표 고정식으로)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "방향벡터가 주어진 직선의 방정식(좌표공간 · 성분 0 포함)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    452 의 공간판. 성분이 셋이라 표기가 길어질 뿐 골조는 같다.
    핵심은 ⑶ 처럼 한 성분이 0 이면 그 좌표는 고정되어 $z=2$ 를 따로 붙이고,
    ⑷ 처럼 두 성분이 0 이면 $x=2$, $z=-1$ 두 식이 된다는 표기 규칙(T-표기).
    익히기 ★1 출발 · 통찰 0 · M_total 5 로 -1 후보 → ★1 유지(하한).
  tier: star_1
  mechanism_primary: "점 (x₁,y₁,z₁)·방향벡터 (a,b,c) → 세 성분 대칭식 → 0 인 성분은 좌표 고정식으로 분리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{x-3}{2}=y=4-z$ ⑵ $\dfrac{2-x}{3}=y-5=\dfrac{z-3}{2}$ ⑶ $\dfrac{x-3}{2}=y+1$, $z=2$ ⑷ $x=2$, $z=-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/217-454.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 좌표·방향벡터 성분 전부 교체 가능. 제약: 0 성분의 개수(0개·1개·2개)가 답의 표기 형태를 결정하므로 소문항 구성을 바꿀 때 이 세 형태가 고르게 남도록 한다. 성분이 1 이면 분모 없이 쓰는 표기도 함께 연습된다."
    creative: "(1) 공간 대칭식을 주고 좌표축에 평행한지 판정(★2) (2) 방향벡터를 두 점의 차로 바꾸면 455 골조와 합쳐짐(★1~2) (3) 「$x$축에 수직인 직선」처럼 방향벡터 성분 조건을 말로 주면 동치 변환(I-EQV d1) → ★2."
```

```yaml
- id: GN-GEO-217-455
  page: 217
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴⑵ 좌표공간의 두 점 A, B 를 지나는 직선의 방정식 구하기.
    ⑴ $\pt{A}(1,2,-2)$, $\pt{B}(2,-1,3)$ ⑵ $\pt{A}(0,-3,1)$, $\pt{B}(1,2,4)$.
  category: "방향벡터 = B-A → 공간 대칭식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점을 지나는 직선의 방정식(좌표공간 · 방향벡터 AB)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    453 의 공간판. $\vec{AB}$ 성분을 빼고 A 를 지나는 세 성분 대칭식으로 옮기는 두 단계.
    성분 차가 음수일 때 $\dfrac{2-y}{3}$ 처럼 분자를 뒤집어 쓰는 표기가 유일한 함정(T-부호).
    익히기 ★1 출발 · 통찰 0 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "AB = B-A 성분 계산 → A 를 지나는 공간 대칭식 → 음수 성분은 분자를 뒤집어 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x-1=\dfrac{2-y}{3}=\dfrac{z+2}{5}$ ⑵ $x=\dfrac{y+3}{5}=\dfrac{z-1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/217-455.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 좌표 전부 교체 가능. 제약: 두 점이 같으면 안 되고, 어떤 좌표가 같으면 그 성분이 0 이 되어 454⑶⑷ 형태로 바뀐다. 성분 차가 서로소면 약분이 필요 없다."
    creative: "(1) 세 점의 공선 여부 판정(★2) (2) 두 점을 지나는 직선이 좌표평면과 만나는 점을 추가로 묻기(e3 골조 · ★2) (3) 두 점 중 하나를 미지수로 두고 직선이 원점을 지날 조건을 묻기(★3)."
```

### 필수·발전 예제

```yaml
- id: GN-GEO-218-e1
  page: 218
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 직선 $\dfrac{x-2}{4}=\dfrac{1-y}{3}$ 에 평행하고 점 $(2,-3)$ 을 지나는 직선.
    ⑵ 두 점 $\pt{A}(-2,5)$, $\pt{B}(1,4)$ 를 지나는 직선에 평행하고 점 $(2,0)$ 을 지나는 직선.
  category: "평행 ⇔ 방향벡터 공유 → 새 점으로 대칭식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "좌표평면에서 방향벡터가 주어진 직선의 방정식(평행 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평행하다는 조건을 「방향벡터를 그대로 쓴다」로 바꾸는 것이 전부인 대표 유형.
    ⑴ 은 $\dfrac{1-y}{3}$ 의 분자가 뒤집혀 있어 방향벡터가 $(4,-3)$ 이라는 점(T-부호)이 유일한 함정이고,
    ⑵ 는 방향벡터를 두 점의 차 $(3,-1)$ 로 먼저 만든다는 단계가 하나 더 붙는다.
    필수 예제 ★2 출발 · 통찰 0 · M_total 5 이지만 방향벡터 조달 경로가 두 갈래라 -1 하지 않고 ★2 유지.
  tier: star_2
  mechanism_primary: "평행 ⇔ 방향벡터 공유 → 주어진 직선(또는 AB)에서 방향벡터 읽기 → 새 점을 지나는 대칭식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{x-2}{4}=-\dfrac{y+3}{3}$ ⑵ $\dfrac{x-2}{3}=-y$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/218-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 직선의 분모·분자, 두 점 좌표, 지나는 점을 모두 교체 가능. 제약: 분자를 뒤집은 표기($\\dfrac{1-y}{3}$)를 최소 한 곳에 남겨야 부호 함정이 유지되고, 방향벡터 성분에 0 을 넣으면 답이 $x=$상수 꼴로 바뀐다."
    creative: "(1) 평행 대신 수직으로 바꾸면 법선벡터(451 골조)와 결합 → ★2~3 (2) 지나는 점을 「선분 AB 를 2:1 로 내분하는 점」으로 주면 내분점과 결합 → ★3 (3) 평행한 두 직선 사이의 거리까지 묻기 → 점과 직선 사이의 거리와 결합 ★3."
```

```yaml
- id: GN-GEO-218-456
  page: 218
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 점 $\pt{A}(2,3)$, $\pt{B}(4,2)$ 를 지나는 직선에 평행하고 점 $(3,1)$ 을 지나는 직선의 방정식.
  category: "AB 방향벡터 → 평행 조건 → 새 점 대칭식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점을 지나는 직선에 평행한 직선의 방정식(좌표평면)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e1⑵ 와 같은 골조의 확인 문항. $\vec{AB}=(2,-1)$ 을 구해 점 $(3,1)$ 을 지나는 대칭식으로 옮긴다.
    답 $\dfrac{x-3}{2}=1-y$ 처럼 $-1$ 성분을 분자 뒤집기로 쓰는 표기가 함정(T-부호).
    구역 기준(익히기 ★1)이 아니라 바로 앞 필수 예제와 같은 ★2 출발을 적용했고, 통찰 0·M_total 5 지만 두 단계라 ★2 유지.
  tier: star_2
  mechanism_primary: "AB = (2,-1) → 평행 직선의 방향벡터로 채택 → 점 (3,1) 대칭식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{x-3}{2}=1-y$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/218-456.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 와 지나는 점의 좌표 교체 가능. 제약: AB 성분이 서로소여야 답이 약분 없이 나오고, 성분 하나가 0 이면 답 표기가 $x=$상수로 바뀐다. 지나는 점이 직선 AB 위에 있으면 문제가 무의미해지므로 피한다."
    creative: "(1) 지나는 점을 AB 의 중점으로 주면 직선 AB 자신이 답이 되는 함정 문항(★2) (2) 평행 대신 수직으로 바꾸기(★2) (3) 구한 직선이 $x$축과 만나는 점까지 묻기(★2, 한 단계 추가)."
```

```yaml
- id: GN-GEO-218-457
  page: 218
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 $(1,-4)$ 를 지나고 직선 $x-3=\dfrac{1-y}{2}$ 에 평행한 직선이 점 $(k,4)$ 를 지날 때 $k$ 의 값.
  category: "평행 직선 세우기 → 지나는 점 대입 → 미지 좌표"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행한 직선 위 점의 미지 좌표 구하기(좌표평면)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    방향벡터 $(1,-2)$ 를 읽고 점 $(1,-4)$ 를 지나는 대칭식을 세운 뒤 $y=4$ 를 넣어 $k$ 를 얻는 세 단계.
    미지수 $k$ 가 발문에 있어 Mₐ 2. 대입 자체는 표준 절차라 역방향 통찰로 세지 않았다(스키마 I-BW 판별 제외 규정).
    확인체크지만 필수 예제 뒤라 ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "$x-3=\\dfrac{1-y}{2}$ 에서 방향벡터 (1,-2) → 점 (1,-4) 대칭식 → y=4 대입 → k"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/218-457.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 직선의 방향벡터, 지나는 점, 대입할 $y$ 값을 교체 가능. 제약: 방향벡터의 $y$ 성분이 0 이 아니어야 $y=4$ 대입이 가능하고, $k$ 가 정수로 떨어지려면 $(4-(-4))$ 가 $y$ 성분의 배수여야 한다."
    creative: "(1) 묻는 미지수를 점 $(k,\\,m)$ 의 두 좌표로 늘리고 $k+m$ 을 묻기(★2) (2) 평행 조건을 「기울기가 같다」로 바꾸면 벡터를 안 써도 되어 ★1 로 내려감 (3) 미지수를 방향벡터 쪽에 두고 「점 $(k,4)$ 를 지나도록 하는 방향벡터」를 묻기 → 역방향 I-BW d1 · ★3."
```

```yaml
- id: GN-GEO-219-e2
  page: 219
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 점 $(1,-2,3)$ 을 지나고 직선 $\dfrac{x-1}{3}=y+1=\dfrac{z-1}{2}$ 에 평행한 직선의 방정식.
    ⑵ 점 $(4,-1,2)$ 를 지나고 직선 $x-2=\dfrac{2-y}{3}=\dfrac{z}{2}$ 에 평행한 직선과 $xy$평면의 교점.
  category: "평행 ⇔ 방향벡터 공유 → 공간 대칭식 → 매개변수로 z=0 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "좌표공간에서 방향벡터가 주어진 직선의 방정식(평행 · 좌표평면과의 교점)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 e1 의 공간판으로 방향벡터 $(3,1,2)$ 를 그대로 옮기면 끝난다.
    ⑵ 는 방향벡터 $(1,-3,2)$ 로 직선을 세운 뒤 매개변수 $t$ 로 두고 $xy$평면 ⇔ $z=0$ 을 대입하는 단계가 붙는다.
    「좌표평면과의 교점 ⇔ 그 좌표 성분이 0」은 교과서가 그대로 가르치는 절차라 통찰로 세지 않았다.
    필수 예제 ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "평행 ⇔ 방향벡터 공유 → 점+방향벡터로 공간 대칭식 → 매개변수 t 로 두고 z=0(xy평면) → 교점 좌표"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{x-1}{3}=y+2=\dfrac{z-3}{2}$ ⑵ $(3,\,2,\,0)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/219-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주어진 직선의 방향벡터·점, 지나는 점을 교체 가능. 제약: ⑵ 에서 $xy$평면과 만나려면 방향벡터의 $z$ 성분이 0 이 아니어야 하고, 교점이 정수로 떨어지려면 지나는 점의 $z$ 좌표가 $z$ 성분의 배수여야 한다. $\dfrac{2-y}{3}$ 처럼 분자를 뒤집은 표기를 남기면 부호 함정이 유지된다.'
    creative: "(1) 교점을 묻는 평면을 $yz$·$zx$ 로 바꾸기(★2 유지 · 458 골조) (2) 「$xy$평면과 만나지 않을 조건」을 묻기 → 방향벡터 성분 0 판정 · I-EQV d1 ★3 (3) 구한 교점과 원점 사이의 거리까지 묻기(★2~3)."
```

```yaml
- id: GN-GEO-219-458
  page: 219
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 $(4,5,-1)$ 을 지나고 직선 $\dfrac{x-2}{2}=\dfrac{y-1}{3}=-z$ 에 평행한 직선이 $yz$평면과 만나는 점의 좌표.
  category: "방향벡터 읽기 → 매개변수 표현 → x=0 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행한 직선과 좌표평면의 교점(좌표공간)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e2⑵ 와 같은 골조. $-z$ 를 $\dfrac{z-0}{-1}$ 로 읽어 방향벡터 $(2,3,-1)$ 을 얻는 것이 첫 함정(T-표기).
    점 $(4,5,-1)$ 을 지나는 매개변수 표현에서 $yz$평면 ⇔ $x=0$ 으로 $t=-2$ 를 얻고 나머지 좌표를 계산한다.
    확인체크지만 필수 예제 뒤라 ★2 출발 · 통찰 0 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "방향벡터 (2,3,-1) → 점 (4,5,-1) 매개변수 표현 → x=0 → 나머지 좌표"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(0,\,-1,\,1)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/219-458.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '방향벡터·지나는 점·교점을 묻는 좌표평면을 교체 가능. 제약: 지정한 좌표평면에 대응하는 방향벡터 성분이 0 이 아니어야 하고, 매개변수 값이 정수가 되도록 지나는 점의 해당 좌표를 그 성분의 배수로 잡는다. $-z$ 같은 분모 $\pm1$ 표기를 남기면 방향벡터 읽기 함정이 유지된다.'
    creative: "(1) 교점 대신 「$yz$평면까지 가는 동안 지나온 선분의 길이」를 묻기 → 거리 계산 결합 ★3 (2) 세 좌표평면과의 교점을 모두 구해 삼각형 넓이를 묻기(★4 · 단계 급증) (3) 평행 조건을 두 점 A, B 로 주면 e3 골조와 합쳐짐(★2)."
```

```yaml
- id: GN-GEO-219-459
  page: 219
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 $(1,3,5)$ 를 지나고 직선 $3(x-2)=-6(y+2)=2(z+1)$ 에 평행한 직선이 점 $(a,6,b)$ 를 지날 때 $a+b$ 의 값.
  category: "계수 곱 대칭식 정규화 → 방향벡터 → 평행 직선 → 미지 좌표"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$3(x-2)=-6(y+2)=2(z+1)$ 을 각 변으로 나눠 $\\dfrac{x-2}{2}=\\dfrac{y+2}{-1}=\\dfrac{z+1}{3}$ 로 정규화해야 방향벡터가 $(3,-6,2)$ 가 아니라 $(2,-1,3)$ 임이 보인다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "계수가 곱해진 대칭식에서 방향벡터 읽기 → 평행한 직선 위 점의 미지 좌표"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    이 범위에서 처음으로 「보이는 계수 = 방향벡터」가 아닌 문항이다. 곱해진 계수를 나눠 표준 대칭식으로 되돌리면
    방향벡터는 계수의 역수에 비례한 $(2,-1,3)$ 이고, 이 동치 변환을 놓치면 답이 통째로 틀린다(I-EQV d2).
    그 뒤는 점 $(1,3,5)$ 를 지나는 직선에 $y=6$ 을 넣어 $a,b$ 를 얻는 표준 대입.
    확인체크 ★2 출발 + 통찰 depth 2 · M_total 7 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: '3(x-2)=-6(y+2)=2(z+1) 정규화 → 방향벡터 (2,-1,3) → 점 (1,3,5) 직선에 y=6 대입 → a+b'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/219-459.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '곱해진 계수 $3,-6,2$ 와 점 좌표, 대입하는 $y$ 값을 교체 가능. 제약: 계수 중 0 은 불가(정규화가 깨진다). 방향벡터가 계수의 역수 비례라 정수로 남기려면 계수들의 최소공배수를 생각해 잡는다 — 여기서는 lcm(3,6,2)=6 이라 $(2,-1,3)$ 이 나온다. 음수 계수를 최소 하나 남겨야 부호 함정이 유지된다.'
    creative: "(1) 계수를 분수로 주면($\\dfrac{x-2}{1/2}$ 꼴) 같은 통찰이 더 노골적이 되어 ★2~3 (2) 정규화한 방향벡터로 다른 직선과의 평행·수직을 판정하게 하면 내적 결합 ★3 (3) 계수 하나를 미지수로 두고 「특정 점을 지나도록 하는 계수」를 묻기 → I-BW 추가 ★4."
```

```yaml
- id: GN-GEO-220-e3
  page: 220
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    두 점 $\pt{A}(2,3,-7)$, $\pt{B}(4,-3,3)$ 을 지나는 직선이 $zx$평면과 만나는 점의 좌표.
  category: "AB 방향벡터 → 매개변수 표현 → y=0 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점을 지나는 직선과 좌표평면의 교점(좌표공간)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\vec{AB}=(2,-6,10)$ 을 $(1,-3,5)$ 로 약분해 A 를 지나는 매개변수 표현을 만들고,
    $zx$평면 ⇔ $y=0$ 을 대입해 $x,z$ 를 읽는 세 단계.
    함정은 $zx$평면에서 0 이 되는 좌표가 $y$ 라는 것뿐(T-표기).
    필수 예제 ★2 출발 · 통찰 0 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "AB=(2,-6,10)∝(1,-3,5) → A 를 지나는 매개변수 표현 → y=0(zx평면) → 교점"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(3,\,0,\,-2)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/220-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 좌표와 교점을 묻는 좌표평면을 교체 가능. 제약: 두 점의 해당 좌표 부호가 서로 달라야 선분 안쪽에서 만나고(문제가 자연스럽다), 교점이 정수가 되려면 해당 좌표 차가 방향벡터 성분의 배수여야 한다. AB 성분을 공약수로 약분해 두면 계산이 가볍다."
    creative: "(1) 교점의 좌표를 $(p,\\,0,\\,q)$ 로 두고 $p+q$ 를 묻는 형태(460 골조 · ★2) (2) 직선 AB 가 세 좌표평면과 만나는 세 점의 무게중심을 묻기(★3~4) (3) 두 점 중 하나에 미지수를 넣고 「$zx$평면과 만나는 점의 $x$ 좌표가 3 이 되도록」 요구 → 역방향 I-BW ★3."
```

```yaml
- id: GN-GEO-220-e4
  page: 220
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    두 직선 $\dfrac{x+2}{3}=\dfrac{3-y}{2}=z-1$, $x-5=\dfrac{y-2}{3}=\dfrac{z+1}{-4}$ 의 교점의 좌표.
  category: "두 직선을 서로 다른 매개변수로 → 성분별 연립 → 남은 식으로 확인"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 직선을 각각 다른 매개변수 s, u 로 옮겨 「교점 = 세 성분이 동시에 같아지는 (s,u)」로 바꾼다 — 같은 문자를 쓰면 교점을 놓친다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 직선의 교점(매개변수 연립)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 대칭식을 각각 매개변수로 풀어 점을 $(-2+3s,\,3-2s,\,1+s)$ 와 $(5+u,\,2+3u,\,-1-4u)$ 로 놓고
    $x,y$ 두 식을 연립해 $s,u$ 를 정한 뒤 남은 $z$ 식이 맞는지 확인하는 구조다.
    두 직선에 같은 매개변수를 쓰는 것이 이 유형의 대표 오답이라 매개변수 분리를 통찰로 카운트했다(I-EQV d1).
    필수 예제 ★2 출발이지만 연립 3식 · M_total 7 로 이 범위에서 가장 무거워 +1 하여 ★3.
    [분류 이슈] 통찰 1개·depth 1 이라 +1 조건을 통찰만으로는 못 채우고 단계 수로 올린 판정.
  tier: star_3
  mechanism_primary: "두 직선을 서로 다른 매개변수 s, u 로 표현 → x·y 성분 연립 → s=2, u=-1 → 남은 z 식으로 일치 확인 → 교점"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(4,\,-1,\,3)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/220-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 직선의 점·방향벡터를 교체 가능. 제약: 교점이 실제로 존재해야 하므로 먼저 교점을 정하고 그 점에서 두 방향벡터를 뻗는 방식으로 역설계한다. 두 방향벡터가 평행하면 안 되고, $\dfrac{3-y}{2}$ 처럼 분자를 뒤집은 표기를 남기면 부호 함정이 유지된다.'
    creative: "(1) 교점이 없는(꼬인 위치) 두 직선을 주고 「교점이 존재하지 않음을 보여라」로 바꾸면 남은 한 식의 모순 확인이 본질이 되어 I-VF 추가 ★4 (2) 한 직선에 미지수를 넣고 「두 직선이 만나도록 하는 값」을 묻기 → I-BW 추가 ★4 (3) 교점에서 두 직선이 이루는 각을 묻기 → 내적 결합 ★3~4."
```

```yaml
- id: GN-GEO-220-460
  page: 220
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 점 $\pt{A}(-2,3,5)$, $\pt{B}(-3,6,1)$ 을 지나는 직선이 점 $(0,a,b)$ 를 지날 때 $ab$ 의 값.
  category: "AB 방향벡터 → 매개변수 표현 → x=0 → a, b"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점을 지나는 직선 위 점의 미지 좌표(좌표공간)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\vec{AB}=(-1,3,-4)$ 로 A 를 지나는 매개변수 표현을 만들고 $x=0$ 에서 매개변수를 정한 뒤 $a,b$ 를 읽는다.
    사실상 e3 와 같은 골조이고($x=0$ 은 $yz$평면과의 교점), 미지수 두 개의 곱을 묻는 포장만 다르다.
    방향벡터 성분이 모두 음수·양수 섞여 있어 부호 실수가 유일한 함정(T-부호). Mₐ 는 미지수 $a,b$ 때문에 2.
    확인체크지만 필수 예제 뒤라 ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "AB=(-1,3,-4) → A 를 지나는 매개변수 표현 → x=0 으로 매개변수 확정 → a, b → ab"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-39$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/220-460.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 좌표와 고정된 좌표값(여기서는 $x=0$)을 교체 가능. 제약: AB 의 $x$ 성분이 0 이 아니어야 하고, $a,b$ 가 정수로 떨어지려면 $x$ 좌표 차가 그 성분의 배수여야 한다. 답을 $ab$ 로 받으면 부호 실수가 한 번에 드러나므로 음수 성분을 남기는 편이 좋다."
    creative: "(1) 묻는 값을 $a+b$ 나 $a-b$ 로 바꾸기(★2 유지) (2) 고정 좌표를 $z=0$ 으로 바꿔 $xy$평면 교점으로 포장(★2) (3) 점 $(0,a,b)$ 가 선분 AB 의 연장선 위인지 내부인지까지 판정하게 하면 매개변수 범위 조건이 붙어 ★3."
```

```yaml
- id: GN-GEO-220-461
  page: 220
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 직선 $x-3=2y-4=\dfrac{2z-10}{3}$, $x+1=3y-3=\dfrac{z+4}{2}$ 의 교점의 좌표.
  category: "계수 곱 대칭식 두 개 정규화 → 매개변수 연립 → 교점"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$2y-4=2(y-2)$, $\\dfrac{2z-10}{3}=\\dfrac{z-5}{3/2}$ 처럼 묶어 정규화해야 방향벡터가 $(2,1,3)$·$(3,1,6)$ 임이 보인다 — 보이는 계수를 그대로 읽으면 전부 틀린다"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정규화한 두 직선을 서로 다른 매개변수로 옮겨 성분별로 연립하고, 남은 한 식으로 교점이 실제로 존재함을 확인"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "계수가 곱해진 대칭식 두 직선의 교점(정규화 후 매개변수 연립)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    459 의 정규화 통찰과 e4 의 매개변수 연립 골조가 겹친 이 범위의 종착 문항이다.
    $x-3=2(y-2)=\dfrac{2(z-5)}{3}$ 로 묶어야 첫 직선의 점 $(3,2,5)$ 와 방향벡터 $(2,1,3)$ 이 나오고,
    둘째 직선도 같은 방식으로 점 $(-1,1,-4)$ 와 방향벡터 $(3,1,6)$ 이 된다. 그 뒤 두 매개변수를 연립한다.
    확인체크 ★2 출발 + 통찰 2개(EQV d2·d1) · M_total 8 → +1 하여 ★3. ★4 는 저노출 유형(SC·VF·SYM·XU·RT) 부재라 두지 않았다.
  tier: star_3
  mechanism_primary: "두 대칭식을 각각 정규화해 점·방향벡터 (3,2,5)·(2,1,3) 와 (-1,1,-4)·(3,1,6) → 서로 다른 매개변수로 성분 연립 → 남은 식 확인 → 교점"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(5,\,3,\,8)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/220-461.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각 변에 곱해진 계수와 두 직선의 점·방향벡터를 교체 가능. 제약: 교점을 먼저 정하고 두 방향벡터를 뻗어 역설계하는 편이 안전하다. 계수는 0 이 될 수 없고, 정규화한 방향벡터를 정수로 남기려면 계수들의 최소공배수를 곱해 잡는다($x-3=2y-4=\dfrac{2z-10}{3}$ 은 lcm 처리로 $(2,1,3)$). 두 방향벡터가 평행하면 교점이 사라진다.'
    creative: "(1) 계수를 한쪽 직선에만 붙이면 정규화 통찰이 한 번만 필요해 ★2~3 (2) 두 직선이 꼬인 위치가 되도록 만들어 「만나지 않음을 보여라」로 바꾸면 남은 식의 모순 확인이 본질 → I-VF 추가 ★4 (3) 교점을 지나고 두 직선에 모두 수직인 직선을 묻기 → 외적·내적 결합 ★4."
```

## 표본 판정 요약 (15문)

- ★ 분포: ★1 4 · ★2 8 · ★3 3 · ★4 0 · ★5 0
- 통찰형 3(219-459 I-EQV d2 · 220-e4 I-EQV d1 · 220-461 I-EQV d2+d1) · 절차형 12 · premium 0
- 대상층: 하위권 4 · 중하위권 8 · 중위권 3
- type_hint 상위: 「평행 조건 → 방향벡터 공유로 직선 세우기」 4(218-e1 · 218-456 · 219-e2 · 219-458) · 「직선과 좌표평면의 교점」 3(219-e2 · 219-458 · 220-e3, 중복 집계) · 「직선 위 점의 미지 좌표 구하기」 3(218-457 · 219-459 · 220-460) · 「점+방향벡터 → 대칭식(성분 0 포함)」 2(217-452 · 217-454) · 「두 점 → 방향벡터 → 대칭식」 2(217-453 · 217-455) · 「두 직선의 교점(매개변수 연립)」 2(220-e4 · 220-461) · 「법선벡터가 주어진 직선」 1(216-451)
- 그림: 0문(이 범위는 전부 식·좌표로만 주어진다)
- M_total 분포: 4 2문 · 5 7문 · 6 3문 · 7 2문 · 8 1문 (최대 8 · 평균 5.5)

## 분류 이슈 목록

판정이 애매하거나 벤더 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 이 범위에 2단 이상 어긋난 문항은 없다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-GEO-216-451 | 「특강」 구역이라 벤더 신호는 ★2~3 이지만 골조 길이는 익히기(★1)와 같은 한 단계다. 법선벡터 표현이 교육과정 심화라는 이유로만 ★2 를 유지했다 | ★1 / ★2 |
| GN-GEO-217-454 | 익히기 ★1 출발이지만 소문항 4개 중 두 개가 성분 0 케이스라 같은 구역의 평면 문항(452)보다 표기 함정이 확실히 무겁다. 라벨은 ★1 로 두고 기록 | ★1 / ★2 |
| GN-GEO-218-456·457·219-458·459·220-460·461 | tag 「확인체크」는 벤더 신호표에서 ★1 출발이지만, 이 여섯 문항은 익히기 구역이 아니라 필수 예제 뒤에 붙는 확인 문항이라 예제와 같은 ★2 출발로 잡았다(구역 기준과 태그 기준이 갈리는 지점) | ★2 |
| GN-GEO-220-e4 | 통찰 1개·depth 1 이라 통찰만으로는 +1 조건에 못 미치고, 매개변수 연립 3식(M_total 7)이라는 단계 수로 ★3 을 준 판정 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위 15문 중 12문이 **「점 하나 + 방향벡터 하나를 확정해 대칭식·매개변수 표현으로 옮긴다」**는 한 골조의 변주다. 카탈로그에서는 이것을 하나의 base 유형으로 세우고, **방향벡터 조달 경로**(직접 주어짐 / 두 점의 차 / 평행한 직선에서 읽기 / 계수 곱 대칭식 정규화)를 하위 갈래로 두는 편이 낫다. 평면(452·453·e1·456·457)과 공간(454·455·e2·458·459·e3·460)은 ★ 차이가 거의 없으므로 따로 세울 필요가 없다.
- **따로 세울 가치가 있는 유형은 셋**이다. ⑴ 「계수가 곱해진 대칭식 정규화」(459·461) — 이 통찰 하나가 정답률을 크게 가르므로 독립 유형으로 두고 ★3 변별 슬롯으로 쓸 수 있다. ⑵ 「두 직선의 교점(매개변수 분리 연립)」(e4·461) — 꼬인 위치 판정으로 확장하면 I-VF 가 붙어 ★4 슬롯이 된다. ⑶ 「법선벡터로 나타낸 직선」(451) — 특강 전용이라 다른 문항과 섞이지 않는다.
- 「직선과 좌표평면의 교점」(e2·458·e3)과 「직선 위 점의 미지 좌표」(457·459·460)는 **같은 골조의 포장 차이**다(어떤 좌표를 0 으로 고정하느냐 vs 미지수로 두느냐). 카탈로그에서는 한 유형으로 통합하고 출제 시 포장만 바꾸는 편이 슬롯 관리가 쉽다.
- 이 단원 단독으로는 ★4~5 슬롯이 나오지 않는다. ★4 이상을 만들려면 교점에서의 각(내적), 점과 직선 사이의 거리, 꼬인 위치 판정처럼 **다음 단원 도구와 결합**해야 하므로, 27단원 이후와 묶어 설계할 것을 권한다.
