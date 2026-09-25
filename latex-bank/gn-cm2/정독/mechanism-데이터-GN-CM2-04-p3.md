---
name: mechanism-데이터-GN-CM2-04-p3
description: 개념원리 공통수학2 04 직선의 방정식(3/3 · 43~46쪽 · 필수·발전 예제 ~ 연습문제 실력 UP) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: 04 직선의 방정식
  unit_code: CM2-04
  part: "3/3"
  extract_range: "43~46쪽 · 43-e9~46-97"
  total_problems: 19
  unit_total: 46
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·level·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 가 비면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 04 직선의 방정식 (3/3) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학2 04단원 43~46쪽, 곧 단원 마지막 필수 예제(두 직선의 교점을 지나는 직선)와 그 확인체크, 그리고 단원 연습문제 전부(STEP 1 · STEP 2 · 실력 UP) 19문항을 다룬다. 앞 조각 2개(01~42쪽)가 직선의 방정식·평행과 수직·점과 직선 사이의 거리 본문을 담당하고, 이 조각은 그 도구들을 섞어 쓰는 복습·심화 구역이다.

벤더 난이도 신호는 구역과 level 로 읽었다. 「필수·발전 예제」는 tag 「필수」 ★2 출발, 그 아래 통번호 확인체크는 ★1 출발, 「연습문제 STEP 1」 ★2, 「STEP 2」 ★3, 「실력 UP」 ★4 출발이며 「교육청 기출」 태그는 통찰이 있을 때만 +1 한다. 출발점에서 M_total 과 통찰 수로 ±1 만 움직였고, 억지로 벤더 라벨에 맞추지 않았다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(단계별 통찰 라벨) · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 창의 변형)를 채웠다. 이 단원 변형에서 특히 주의할 점은 **그림 라벨과 좌표의 결합**(직사각형·정사각형 꼭짓점, 사분면 개형)이라 숫자를 바꿀 때 그림을 함께 갱신해야 하는 문항이 7개(crop 보유)라는 것이다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM2-43-e9
  page: 43
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "예제"
  summary: |
    두 직선 2x-y-1=0, x-y-3=0 의 교점과 점 (2, 2)를 지나는 직선의 방정식.
  category: "두 직선의 교점 → 두 점을 지나는 직선"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선의 교점을 지나는 직선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    연립으로 교점 (-2, -5)를 구하고 (2, 2)와의 기울기 7/4 로 직선을 쓰면 끝. 교점 대입 대신 (2x-y-1)+k(x-y-3)=0 묶음을 써도 같은 한 줄이라 전략 분기로 보지 않았다.
    통찰 0·M_total 5 라 -1 후보이지만 단원 대표 유형을 처음 도입하는 필수 예제라 벤더 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "두 직선 연립 → 교점 (-2,-5) → (2,2)와의 기울기 → 일반형 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7x-4y-6=0$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/43-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 직선의 계수와 지나는 점을 바꿀 수 있다. 제약: 두 직선이 평행하지 않아야 하고(계수비 다름), 교점이 정수좌표가 되도록 잡아야 기울기와 일반형이 작은 정수로 정리된다. 지나는 점이 교점과 같아지면 문제가 무너진다."
    creative: "(1) 지나는 점 대신 기울기·절편 조건을 주기(★2 유지) (2) 교점을 지나고 주어진 직선에 수직 조건으로 바꾸기(★2) (3) 교점 좌표를 묻지 않고 k 묶음 직선이 항상 지나는 점을 묻기(정점 유형 · I-EQV 추가 ★3)."
```

```yaml
- id: GN-CM2-43-80
  page: 43
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 직선 3x+2y=-1, 2x-y+10=0 의 교점과 원점을 지나는 직선의 방정식.
  category: "두 직선의 교점 → 원점을 지나는 직선"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선의 교점을 지나는 직선의 방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    연립 → 교점 (-3, 4) → 원점과 이으면 기울기 -4/3. 지나는 점이 원점이라 절편항이 사라져 e9 보다 한 단계 짧다.
    확인체크 구역 출발점 ★1 · 통찰 0 · M_total 5 → 추가 하향 여지가 없어 ★1.
  tier: star_1
  mechanism_primary: "두 직선 연립 → 교점 → 원점과의 기울기 → y=mx 를 일반형으로"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$4x+3y=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/43-80.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 직선의 계수를 바꾼다. 제약: 교점이 정수좌표이고 원점이 아니어야 하며, 교점 좌표의 최대공약수를 1 로 두면 답이 기약 일반형으로 떨어진다."
    creative: "(1) 원점 대신 x축·y축 위의 점을 지나게(★1 유지) (2) 교점을 지나며 넓이 조건(축과 이루는 삼각형)까지 요구(★2~3) (3) 교점을 지나는 직선 중 원점에서 가장 먼 것 묻기(수직 조건 · ★3)."
```

```yaml
- id: GN-CM2-43-81
  page: 43
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 직선 4x-3y+5=0, x+2y-7=0 의 교점을 지나고 기울기가 -6 인 직선의 방정식.
  category: "두 직선의 교점 → 기울기가 주어진 직선"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선의 교점을 지나고 기울기가 주어진 직선"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    연립 → 교점 (1, 3) → 점기울기형 y-3=-6(x-1) → 일반형. 기울기가 직접 주어져 e9 보다 오히려 짧다.
    확인체크 출발점 ★1 · 통찰 0 · M_total 5 → ★1. 같은 골조의 필수 예제(★2)와 1단 차이는 벤더 구역 신호를 그대로 둔 결과다.
  tier: star_1
  mechanism_primary: "두 직선 연립 → 교점 (1,3) → 기울기 -6 점기울기형 → 일반형"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$6x+y-9=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/43-81.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 직선의 계수와 주어진 기울기를 바꾼다. 제약: 교점이 정수좌표이고 기울기가 정수·간단한 분수여야 일반형 계수가 작게 유지된다."
    creative: "(1) 기울기 대신 어떤 직선에 평행·수직 조건으로 주기(★2) (2) 기울기를 미지수 m 으로 두고 원점과의 거리 조건 추가(★3) (3) 교점을 지나는 직선이 제3사분면을 지나지 않을 m 범위(I-RT 추가 ★3~4)."
```

### 연습문제 STEP 1

```yaml
- id: GN-CM2-44-82
  page: 44
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    x축의 양의 방향과 30도를 이루고 점 (3, -루트3)을 지나는 직선이 x축·y축과 이루는 삼각형의 넓이.
  category: "각 → 기울기 → 두 절편 → 삼각형 넓이"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x축과 이루는 각이 주어진 직선과 좌표축이 이루는 삼각형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    기울기 = tan30 = 1/루트3 은 이 단원에서 바로 주어지는 사전 도구라 표현 전환으로 세지 않았다. 점기울기형 → x절편 6 · y절편 -2루트3 → 넓이는 절댓값 곱의 반.
    무리수 계산이 한 겹 있어 Mk=2, 절편이 음수라 넓이에서 절댓값을 놓치는 T-부호 함정이 하나. 통찰 0 이지만 M_total 6 이라 하향 조건에 못 미쳐 STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "각 30도 → 기울기 1/루트3 → 점기울기형 → x·y절편 → 넓이 = 절편 절댓값 곱의 반"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/44-82.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각을 30·45·60도 중에서, 지나는 점을 그 기울기에서 절편이 정리되는 좌표로 바꾼다. 제약: 30·60도는 루트3 이 남으므로 점의 좌표에도 루트3 배수를 넣어야 절편이 깔끔하다. 45도로 바꾸면 무리수가 사라져 Mk 가 1 로 내려가 ★1 이 된다."
    creative: "(1) 넓이 대신 두 절편의 합·원점에서 직선까지의 거리 묻기(★2) (2) 넓이를 주고 지나는 점을 역으로 묻기(I-BW ★3) (3) 각을 미지수로 두고 넓이가 최소가 되는 각(범위 밖)."
```

```yaml
- id: GN-CM2-44-83
  page: 44
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    점 (a-1, a+5)가 두 점 (-1, 2), (1, 8)을 지나는 직선 위에 있을 때 상수 a 의 값.
  category: "두 점을 지나는 직선 → 점 대입 → 일차방정식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선 위의 점 조건으로 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 점으로 y=3x+5 를 만들고 (a-1, a+5)를 대입하면 a 에 대한 일차방정식 한 줄. 기울기 비교로 풀어도 같은 식이라 분기가 없다.
    좌표가 매개변수라 Ma=2, 그 외에는 전형 절차. 통찰 0 · M_total 6 → STEP 1 출발점 ★2 유지.
  mechanism_primary: "두 점 → 직선 y=3x+5 → 점 (a-1, a+5) 대입 → a 에 대한 일차방정식"
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/44-83.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 정점과 매개점의 좌표식을 바꾼다. 제약: 매개점의 x·y 성분이 같은 기울기 계수를 갖지 않아야(즉 매개점이 직선과 평행하게 움직이지 않아야) a 가 유일하게 결정된다."
    creative: "(1) 답을 정수로 떨어뜨려 ★1 로 낮추기 (2) 매개점을 (a, a^2) 같은 이차식으로 두어 a 두 값·범위 조건 추가(I-VF ★3) (3) 세 점이 한 직선 위라는 형태로 바꿔 44-85 골조와 합치기(★2)."
```

```yaml
- id: GN-CM2-44-84
  page: 44
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    x절편과 y절편의 절댓값이 같고 부호가 반대인 직선(원점은 지나지 않음)이 점 (2, -1)을 지날 때 y절편.
  category: "절편 조건의 동치 변환 → 절편형 직선 → 점 대입"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "절댓값이 같고 부호가 반대라는 말을 절편형 x/a + y/(-a) = 1, 곧 기울기 1 인 직선 x-y=a 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "절편 사이의 관계가 주어진 직선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조건을 절편형으로 옮기면 기울기가 1 로 고정되어 미지수가 하나만 남는다. 여기를 못 넘기면 미지수 두 개로 헤매므로 I-EQV 한 단계로 라벨했다.
    원점을 지나지 않는다는 단서가 a≠0 을 보장하는 T-범위, 부호 반대에서 -a 를 놓치는 T-부호로 Mt=2. 통찰 1개 d1 은 +1 조건(2개 이상 또는 d3)에 못 미쳐 ★2.
  tier: star_2
  mechanism_primary: "절편 조건 → x/a + y/(-a) = 1 → x-y=a → (2,-1) 대입 → a=3 → y절편 -a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/44-84.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지나는 점의 좌표를 바꾼다. 제약: 두 성분의 차가 0 이 아니어야(원점을 지나지 않아야) 하고, 차가 정수면 절편도 정수로 떨어진다."
    creative: "(1) 절댓값이 같고 부호가 같은 경우(기울기 -1)로 바꾸기(★2 유지) (2) x절편이 y절편의 k배 조건으로 일반화(Ma 상승 ★3) (3) 절편의 합·곱을 주고 절편을 역으로 묻기(이차방정식·I-VF ★3)."
```

```yaml
- id: GN-CM2-44-85
  page: 44
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    세 점 A(1, 1), B(-1, -a), C(a, 5)가 한 직선 l 위에 있을 때(a>0) 직선 l 의 방정식.
  category: "세 점 공선 → 기울기 일치 → 이차방정식 → 직선"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 점이 한 직선 위에 있을 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (기울기 AB) = (기울기 AC)를 세우면 (1+a)(a-1)=8, 곧 a^2=9. a>0 이 주어져 a=3 만 남고 A, B 로 y=2x-1.
    공선 조건을 기울기 일치로 옮기는 것은 이 단원의 표준 절차라 통찰로 세지 않았다. a=-3 기각은 문제에 명시된 범위 조건이라 T-범위 함정 한 개로만 처리했다. M_total 7 이지만 통찰 0 이라 STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "AB·AC 기울기 일치 → a^2=9 → a>0 로 a=3 → 두 점으로 y=2x-1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=2x-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/44-85.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 좌표와 B, C 에 들어가는 a 의 위치를 바꾼다. 제약: 기울기 일치식이 이차가 되도록 a 가 서로 다른 두 좌표에 들어가야 하고, 판별식이 완전제곱이라야 a 가 유리수로 떨어진다. a>0 같은 범위 조건은 두 근 중 하나만 남기도록 부호를 맞춰야 한다."
    creative: "(1) 범위 조건을 빼고 가능한 직선 두 개를 모두 묻기(I-MI ★3) (2) 세 점이 삼각형을 이루지 않을 조건으로 뒤집기(45-91 골조 ★3) (3) 직선 대신 삼각형 넓이가 0 임을 이용한 풀이를 비교하게 하기(I-SC ★3)."
```

```yaml
- id: GN-CM2-44-86
  page: 44
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    직선 5x+6y=1 이 x축·y축과 이루는 부분의 넓이를 직선 y=mx 가 이등분할 때 상수 m.
  category: "원점을 지나는 이등분선 → 빗변의 중점 통과"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "원점(꼭짓점)을 지나는 직선이 삼각형 넓이를 이등분한다는 조건을 대변의 중점을 지난다는 조건으로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각형의 넓이를 이등분하는 직선(중선 성질)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 절편 (1/5, 0), (0, 1/6)을 구한 뒤 넓이 이등분을 중선으로 바꾸면 중점 (1/10, 1/12) 대입 한 줄로 끝난다. 넓이를 직접 적분·분할로 비교하면 훨씬 길어지므로 동치 변환 한 단계를 통찰로 라벨했다.
    분수 절편 때문에 Mk=2. 통찰 1개 d1 이라 +1 조건에 못 미쳐 STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "두 절편 → 빗변의 중점 (1/10, 1/12) → y=mx 에 대입 → m"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{5}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/44-86.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 계수 (5, 6, 1)을 바꾼다. 제약: 절편이 모두 같은 부호여야 축과 삼각형을 이루고, 답 m 은 두 절편의 비로 정해지므로 계수비가 그대로 답이 된다(ax+by=c 이면 m=a/b). 이 구조를 알면 숫자 변형이 사실상 자유롭다."
    creative: "(1) 이등분선을 원점이 아닌 다른 꼭짓점에서 긋기(★2) (2) 넓이를 1:2 로 나누게 바꾸기(내분점 · ★3) (3) 46-96 처럼 두 직선으로 삼등분하기(★3~4)."
```

```yaml
- id: GN-CM2-44-87
  page: 44
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    직선 ax+by+c=0 의 개형이 그림과 같을 때(기울기 음수·y절편 양수), 직선 bx+cy+a=0 이 지나지 않는 사분면.
  category: "그래프 개형 → 계수 부호 → 다른 직선의 개형"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그림의 기울기·절편 부호를 -a/b<0, -c/b>0 이라는 계수 부등식으로 옮김(기하 → 대수)"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "얻은 부호 관계를 새 직선 bx+cy+a=0 의 기울기·절편 부호로 되돌려 개형을 그림(대수 → 기하)"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "계수의 부호와 직선의 개형(사분면 판정)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    b>0 으로 잡으면 a>0, c<0 이 나오고, 새 직선은 기울기 -b/c>0 · y절편 -a/c>0 이라 제4사분면만 비켜 간다. 기하 → 대수 → 기하로 두 번 건너가는 구조라 단계마다 주 통찰 하나씩 라벨했다.
    계수가 전부 문자라 Ma=3, b 의 부호를 임의로 잡아도 되는지(T-부호)와 축 위 점 처리(T-경계)로 Mt=2. 통찰 2개 → +1 하여 STEP 1 출발점 ★2 에서 ★3. 같은 구역 다른 문항보다 확실히 무겁다.
  tier: star_3
  mechanism_primary: "그림 → -a/b<0, -c/b>0 → (b>0 기준) a>0, c<0 → bx+cy+a=0 의 기울기·절편 부호 → 제4사분면 제외"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '제$4$사분면'
  answer_source: "답지"
  figure: crop:fig-44-87.png
  latex: latex-bank/gn-cm2/items/44-87.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림의 개형(기울기·절편 부호 조합 4가지)과 묻는 직선의 계수 배열(cx+ay+b=0 등 순환 치환)을 바꾼다. 제약: 숫자가 아니라 부호만 쓰는 문항이라 수치 변형이 아니라 부호 조합 변형이고, 그림 크롭을 반드시 함께 교체해야 한다."
    creative: "(1) 지나는 사분면을 모두 고르는 형태로(★3 유지) (2) 새 직선이 제2사분면을 지나지 않을 부호 조건을 역으로 묻기(I-BW ★4) (3) 세 계수의 대소까지 그림에서 읽게 해 절편 크기 비교를 추가(★4)."
```

### 연습문제 STEP 2

```yaml
- id: GN-CM2-45-88
  page: 45
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    A(2, 6), B(8, 0)에 대하여 직선 y=x/2+1/2 가 x축과 만나는 점 C, 선분 AB 와 만나는 점 D 일 때 삼각형 CBD 의 넓이. 5지선다.
  category: "교점 구하기 → x축을 밑변으로 한 삼각형 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선의 교점을 이용한 삼각형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    C(-1, 0), 직선 AB 는 y=-x+8, 연립하면 D(5, 3). 밑변 CB=9 · 높이 3 으로 넓이 27/2. 그림이 배치를 그대로 보여 줘 좌표를 읽는 부담이 없다.
    교육청 기출 태그는 통찰이 없어 +0. 통찰 0 · M_total 5 → -1 적용하여 STEP 2 출발점 ★3 에서 ★2. 벤더와 1단 차이라 분류 이슈로 올리지는 않았다.
  tier: star_2
  mechanism_primary: "x절편 C → AB 직선 → 연립으로 D → 밑변 CB·높이 (D의 y좌표) → 넓이"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑤'
  answer_source: "답지"
  figure: crop:fig-45-88.png
  latex: latex-bank/gn-cm2/items/45-88.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 좌표와 주어진 직선의 기울기·절편을 바꾼다. 제약: D 가 선분 AB 안쪽에 있어야 하고(두 직선이 선분 범위에서 만나야 함), C 는 B 와 달라야 한다. D 의 좌표가 정수면 넓이가 깔끔한 분수로 떨어진다. 그림 크롭도 함께 교체해야 한다."
    creative: "(1) 삼각형 ACD 나 사각형 넓이로 바꾸기(★2) (2) 넓이를 주고 직선의 기울기를 역으로 묻기(I-BW ★3) (3) 직선을 y=m(x+1) 처럼 정점 회전으로 두고 넓이가 최대가 되는 경우 묻기(★4)."
```

```yaml
- id: GN-CM2-45-89
  page: 45
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    그림의 직사각형 ABCD 에서 A(-8, 3)이고 둘레가 32, 가로가 세로의 3배일 때 두 점 B, D 를 지나는 직선의 y절편.
  category: "둘레·변의 비 → 꼭짓점 좌표 → 대각선의 y절편"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "둘레 32·가로=세로x3 에서 얻은 가로 12·세로 4 를 그림의 배치(변이 축에 평행, A 가 좌상단)와 합쳐 B, D 의 좌표로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "좌표평면 위 직사각형의 꼭짓점 좌표와 대각선의 직선"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    2(3h+h)=32 에서 세로 4·가로 12. A(-8, 3)이 좌상단이므로 B(-8, -1), D(4, 3)이고 기울기 1/3, y절편 5/3.
    치수 계산 자체는 일차식 한 줄이고 진짜 관문은 치수를 그림 배치에 얹어 좌표로 바꾸는 단계라 I-RT 한 개만 라벨했다. 통찰 1개 d1 이라 +1 조건에 못 미쳐 STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "둘레·비 → 세로 4·가로 12 → A 기준 B(-8,-1)·D(4,3) → 기울기 1/3 → y절편"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{5}{3}$'
  answer_source: "답지"
  figure: crop:fig-45-89.png
  latex: latex-bank/gn-cm2/items/45-89.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "둘레·가로세로 비·A 의 좌표를 바꾼다. 제약: 둘레가 (1+비)x2 의 배수여야 변의 길이가 정수로 떨어지고, 직사각형이 x축을 가로지르도록 A 의 y좌표를 세로보다 작게 잡아야 그림이 유지된다. 그림 크롭의 -8, 3 라벨도 함께 갱신해야 한다."
    creative: "(1) 대각선 AC 의 방정식이나 두 대각선의 교점을 묻기(★3 유지) (2) 둘레 대신 넓이를 주기(이차방정식 · ★3) (3) 직사각형을 이등분하는 직선이 원점을 지날 조건으로 바꾸기(45-92 골조 결합 ★3~4)."
```

```yaml
- id: GN-CM2-45-90
  page: 45
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 점 A(0, 1), B(2, 0)을 꼭짓점으로 하는 정사각형 ABCD (C, D 는 제1사분면)에서 직선 BD 의 방정식.
  category: "정사각형 조건 → 나머지 꼭짓점 좌표 → 대각선의 직선"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "정사각형이라는 도형 조건을 AB 방향 (2, -1)에 수직이고 길이가 같은 이동 (1, 2)로 바꿔 C, D 의 좌표를 직접 만들어 냄"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "좌표평면 위 정사각형의 꼭짓점 좌표와 대각선의 직선"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A 에서 B 로 가는 이동이 (2, -1)이므로 수직이고 길이가 같은 이동은 (1, 2) 또는 (-1, -2)이고, C, D 가 제1사분면이라는 단서가 (1, 2) 쪽을 고른다. C(3, 2), D(1, 3)을 얻으면 B, D 로 기울기 -3.
    수직 조건을 기울기 곱 -1 과 거리 공식으로 푸는 정공법도 가능하지만 결국 같은 두 후보가 나오고 사분면 조건으로 하나를 버린다(T-부호·T-범위로 Mt=2). 통찰 1개라 +1 조건에 못 미쳐 ★3.
  tier: star_3
  mechanism_primary: "AB 이동 (2,-1) → 수직·등길이 이동 (1,2) → C(3,2)·D(1,3) → B·D 로 y=-3x+6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$y=-3x+6$'
  answer_source: "답지"
  figure: crop:fig-45-90.png
  latex: latex-bank/gn-cm2/items/45-90.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A, B 의 좌표를 바꾼다. 제약: AB 방향 성분이 정수면 C, D 도 정수 좌표가 되고, 사분면 조건이 두 후보 중 하나만 남기도록 방향을 맞춰야 한다. 그림 크롭의 꼭짓점 위치도 함께 바꿔야 한다."
    creative: "(1) 대각선 AC 나 정사각형의 넓이를 묻기(★3 유지) (2) 사분면 조건을 빼고 가능한 직선 BD 를 모두 구하게(I-MI ★4) (3) 정사각형 대신 정삼각형·마름모로 바꾸기(무리수 등장 ★4)."
```

```yaml
- id: GN-CM2-45-91
  page: 45
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    세 점 A(2, -5), B(a, -2), C(6, 2a+1)이 삼각형을 이루지 않을 때(a>0) 선분 BC 의 길이.
  category: "삼각형 아님 → 세 점 공선 → 이차방정식 → 두 점 사이의 거리"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "삼각형을 이루지 않는다는 진술을 세 점이 한 직선 위에 있다(기울기 일치)는 계산 가능한 조건으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각형을 이루지 않을 조건(세 점 공선)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    공선 조건에서 a^2+a-12=0, a>0 이므로 a=3. B(3, -2), C(6, 7)로 거리 3루트10.
    부정형 진술을 공선으로 뒤집는 첫 단계가 관문이라 I-EQV d2 로 라벨했다. 두 점이 겹치는 퇴화 경우는 좌표상 불가능해 분기가 생기지 않는다. a>0 로 한 근을 버리는 것(T-범위)과 부호 정리(T-부호)로 Mt=2. 통찰 1개라 STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "삼각형 아님 → 공선 → 기울기 일치식 → a^2+a-12=0 → a>0 로 a=3 → BC 거리"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3\sqrt{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/45-91.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 의 좌표와 B, C 에 들어가는 a 의 자리·계수를 바꾼다. 제약: 공선식이 이차가 되도록 a 가 두 좌표에 들어가야 하고, 판별식이 완전제곱이라야 a 가 유리수. 범위 조건으로 근 하나만 남기고, 남은 두 점의 거리가 정수배 루트로 떨어지게 좌표차를 조정한다."
    creative: "(1) BC 길이 대신 삼각형이 될 a 의 범위를 묻기(여집합 · I-BW ★3) (2) 범위 조건을 빼고 두 값 모두 구해 길이의 합을 묻기(I-MI ★4) (3) 공선 대신 두 직선이 평행할 조건으로 바꾸기(★3)."
```

```yaml
- id: GN-CM2-45-92
  page: 45
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    그림처럼 좌표평면 위에 놓인 두 직사각형(x가 -3~-1, y가 2~6 / x가 3~7, y가 -4~-2)의 넓이를 동시에 이등분하는 직선의 방정식.
  category: "직사각형 이등분 → 중심 통과 → 두 중심을 지나는 직선"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "직사각형의 넓이를 이등분하는 직선은 두 대각선의 교점(중심)을 지난다는 동치로 바꿔, 넓이 조건 두 개를 점 두 개 통과 조건으로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 도형의 넓이를 동시에 이등분하는 직선"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    중심 (-2, 4)와 (5, -3)을 지나는 직선이므로 기울기 -1, y=-x+2. 중심 통과라는 동치를 모르면 넓이를 직접 나눠 비교해야 해서 풀이가 크게 길어진다.
    동치 하나를 알면 계산은 두 점 직선 한 줄이라 M_total 5 로 가볍다. 통찰 0 이 아니라 -1 조건에 해당하지 않아 STEP 2 출발점 ★3 유지. 좌표를 그림에서 읽어야 한다.
  tier: star_3
  mechanism_primary: "각 직사각형의 중심 (-2,4)·(5,-3) → 두 점을 지나는 직선 → y=-x+2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$y=-x+2$'
  answer_source: "답지"
  figure: crop:fig-45-92.png
  latex: latex-bank/gn-cm2/items/45-92.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 직사각형의 x·y 범위를 바꾼다. 제약: 두 중심의 좌표차가 정수비여야 기울기가 간단하고, 중심이 같아지면 직선이 무수히 많아져 문제가 무너진다. 그림 크롭의 눈금 라벨(-3, -1, 3, 7, 6, 2, -2, -4)을 함께 갱신해야 한다."
    creative: "(1) 직선이 지나야 할 점 하나를 더 주고 가능 여부를 판정하게(모순 판정 ★3) (2) 한 도형을 삼각형으로 바꾸기(중선 성질 결합 ★4) (3) 이등분선이 원점을 지나도록 한 직사각형의 위치를 역으로 묻기(I-BW ★4)."
```

```yaml
- id: GN-CM2-46-93
  page: 46
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    직선 2x-y=3 위의 점 (a, b)에 대하여 직선 ax+by+6=0 이 항상 지나는 점의 좌표.
  category: "매개변수 소거 → a 에 대한 항등식 → 정점"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "b=2a-3 을 대입한 식을 a 에 대한 항등식으로 보고 a 의 계수와 상수항을 각각 0 으로 놓는 조건으로 바꿈"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "매개변수를 포함한 직선이 항상 지나는 점"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    b=2a-3 을 넣으면 a(x+2y)+(-3y+6)=0. 여기서 a 가 무엇이든 성립해야 하므로 x+2y=0 이고 y=2, 곧 (-4, 2).
    관문은 「점 (a, b)가 움직인다」를 「a 에 대한 항등식」으로 뒤집는 한 단계다. 계산은 연립 두 줄로 가볍고 문자가 둘이라 Ma=2. 통찰 1개라 +1 조건에 못 미쳐 ★3.
  tier: star_3
  mechanism_primary: "b=2a-3 대입 → a(x+2y)+(-3y+6)=0 항등식 → x+2y=0, y=2 → (-4, 2)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(-4,\,2)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/46-93.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건 직선 2x-y=3 의 계수와 ax+by+6=0 의 상수항을 바꾼다. 제약: 대입 후 a 의 계수식과 상수식이 서로 독립이어야 정점이 하나로 결정되고, 상수항이 조건 직선의 계수로 나누어떨어지면 정점이 정수 좌표가 된다."
    creative: "(1) 정점을 주고 조건 직선을 역으로 묻기(I-BW ★4) (2) (a, b)가 원 위를 움직이게 해 직선족의 포락을 관찰(범위 밖) (3) ax+by+6=0 이 항상 지나는 점을 이용해 그 직선이 지날 수 없는 사분면을 묻기(44-87 결합 ★4)."
```

```yaml
- id: GN-CM2-46-94
  page: 46
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    직선 y=mx+2m-1 이 그림의 직사각형(x가 1~3, y가 1~2)과 만나도록 하는 실수 m 의 범위가 알파 이상 베타 이하일 때 5알파베타의 값.
  category: "정점 통과 직선의 회전 → 꼭짓점 기울기의 최소·최대"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "y=m(x+2)-1 로 묶어 m 과 무관한 정점 (-2, -1)을 지나는 직선족임을 드러냄"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "직사각형과 만날 조건을 정점에서 네 꼭짓점으로 가는 기울기의 최소·최대 사이라는 범위 조건으로 옮김"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "정점을 지나는 직선이 도형과 만날 조건(기울기 범위)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    정점 (-2, -1)에서 네 꼭짓점으로 가는 기울기는 2/5, 3/5, 2/3, 1 이고 직선을 회전시키면 최소 2/5 에서 최대 1 까지가 만나는 구간. 5알파베타 = 2.
    정점이 도형의 왼쪽 아래 바깥이라 기울기 구간이 끊기지 않는 점, 경계에서 등호가 살아 있는 점(T-경계)이 함정이다.
    [분류 이슈] 통찰 2개라 +1 후보지만 「정점 + 기울기 범위」는 이 단원에서 반복 훈련되는 표준 골조이고 같은 골조를 여집합까지 끌고 가는 46-97 을 ★4 로 두었으므로 여기서는 +1 을 쓰지 않고 STEP 2 출발점 ★3 을 유지했다.
  tier: star_3
  mechanism_primary: "y=m(x+2)-1 → 정점 (-2,-1) → 네 꼭짓점 기울기 최소 2/5·최대 1 → 5알파베타"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: crop:fig-46-94.png
  latex: latex-bank/gn-cm2/items/46-94.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정점(즉 직선식의 2m, -1)과 직사각형의 x·y 범위를 바꾼다. 제약: 정점이 직사각형의 x범위 바깥(왼쪽 또는 오른쪽)에 있어야 기울기 구간이 하나로 이어지고 알파 이하 베타 이상 두 조각으로 갈라지지 않는다. 정점이 x범위 안에 들어가면 수직 방향을 지나 범위가 여집합 꼴이 되어 난이도가 한 단계 오른다. 그림 크롭의 1, 2, 3 라벨도 갱신해야 한다."
    creative: "(1) 정점을 직사각형의 x범위 안으로 옮겨 범위가 두 조각이 되게(★4) (2) 직사각형을 선분이나 삼각형으로 바꾸기(46-97 골조 ★4) (3) 만나는 점이 두 개일 m 범위처럼 교점 개수로 묻기(★4)."
```

### 연습문제 실력 UP

```yaml
- id: GN-CM2-46-95
  page: 46
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    O(0, 0), A(4, 0), B(4, 6), C(0, 6)에서 선분 BA 위의 두 점 D, E 와 직선 OD·CE 의 교점 F 에 대하여 사각형 OAEF 의 넓이가 사각형 BCFD 보다 4 만큼 크고 두 직선의 기울기의 곱이 -15/16 일 때, 직선 CE 의 방정식.
  category: "넓이 차 조건 → 공통 삼각형 소거 → 기울기 조건과 연립"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 사각형에 공통으로 빠져 있는 삼각형 FDE 를 양쪽에 더해 넓이 차를 삼각형 OAD 와 CBE 의 넓이 차로 바꿔 F 를 안 구하고 d+e=8 을 얻음"
    - step: 4
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "연립에서 나온 두 근 중 선분 BA 바깥(0과 6 사이를 벗어남)인 값을 기각해야 답이 하나로 정해짐"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "넓이 조건과 기울기 조건을 연립하여 직선을 결정하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    D(4, d), E(4, e)로 두면 OAEF = (삼각형 OAD) - (삼각형 FDE), BCFD = (삼각형 CBE) - (삼각형 FDE) 이므로 차이에서 FDE 가 사라져 2d+2e-12=4, 곧 d+e=8. 기울기 곱에서 d(e-6)=-15 를 얻어 연립하면 e=3, d=5 이고 CE 의 기울기는 -3/4.
    교점 F 를 실제로 구하려 들면 계산이 폭발하므로 공통 부분을 소거하는 착안이 이 문항의 전부다. 단계 수가 많아 Ms=3, 선분 범위와 부호로 Mt=2. 통찰 2개(하나는 I-VF)로 실력 UP 출발점 ★4 유지. 통찰 3개 이상이 아니라 ★5 게이트에는 못 미친다.
  tier: star_4
  mechanism_primary: "D(4,d)·E(4,e) → 공통 삼각형 FDE 소거로 d+e=8 → 기울기 곱 d(e-6)=-15 → e=3 → CE: y=-3x/4+6"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$y=-\dfrac{3}{4}x+6$'
  answer_source: "답지"
  figure: crop:fig-46-95.png
  latex: latex-bank/gn-cm2/items/46-95.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직사각형의 가로 4·세로 6, 넓이 차 4, 기울기 곱 -15/16 을 바꾼다. 제약: 넓이 차는 세로의 2배로 나눈 값이 d+e 를 정하므로 d+e 가 0과 12 사이여야 하고, 기울기 곱 조건에서 나오는 이차방정식의 두 근 중 정확히 하나만 0과 6 사이에 들어가도록 계수를 맞춰야 한다(기각 단계가 살아 있어야 I-VF 가 유지된다)."
    creative: "(1) 직선 CE 대신 점 F 의 좌표나 사각형 OAEF 의 넓이를 묻기(★4 유지) (2) 기울기 곱 대신 기울기 합·두 직선이 수직 조건으로 바꾸기(★4) (3) 넓이 차 조건을 넓이 비로 바꾸면 공통 삼각형이 소거되지 않아 F 를 직접 구해야 하고 ★5 급으로 올라간다."
```

```yaml
- id: GN-CM2-46-96
  page: 46
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    원점을 지나는 두 직선 m, n 이 직선 x+3y-3=0 과 두 좌표축으로 둘러싸인 삼각형의 넓이를 삼등분할 때 두 직선의 기울기의 합.
  category: "꼭짓점을 지나는 직선의 넓이비 = 밑변비 → 빗변의 삼등분점"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "원점(꼭짓점)을 지나는 직선들이 넓이를 삼등분한다는 조건을 마주보는 변 위의 삼등분점을 지난다는 조건으로 바꿈(높이가 같아 넓이비 = 밑변비)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각형의 넓이를 삼등분하는 두 직선"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    절편은 (3, 0), (0, 1). 빗변의 삼등분점 (2, 1/3), (1, 2/3)을 내분점으로 구하면 기울기 1/6, 2/3 이고 합은 5/6.
    골조가 44-86(★2, 이등분 → 중점)과 같고 중점이 삼등분점으로 바뀐 것뿐이며 계산도 내분점 두 번이라 가볍다.
    [분류 이슈] 벤더는 실력 UP(★4 출발)이지만 통찰 1개·M_total 6 으로 44-86 의 확장에 그쳐 ★3 으로 한 단 낮춰 기록했다.
  tier: star_3
  mechanism_primary: "두 절편 (3,0)·(0,1) → 빗변의 삼등분점 (2,1/3)·(1,2/3) → 기울기 1/6·2/3 → 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{5}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/46-96.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선 x+3y-3=0 의 계수를 바꾼다. 제약: 두 절편이 같은 부호라야 축과 삼각형을 이루고, 절편이 3의 배수이면 삼등분점이 정수·간단한 분수로 떨어진다. 등분 수를 4 등분으로 올리면 직선이 세 개가 되어 계산량만 늘고 골조는 그대로다."
    creative: "(1) 기울기의 합 대신 곱이나 두 직선이 이루는 각을 묻기(★3) (2) 삼등분이 아니라 1:2:3 으로 나누게 하기(내분점 일반화 ★3~4) (3) 원점이 아니라 빗변 위의 한 점에서 삼등분하게 하면 중선 성질이 깨져 ★4 로 오른다."
```

```yaml
- id: GN-CM2-46-97
  page: 46
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    세 점 A(1, 2), B(-1, 1), C(3, -1)을 꼭짓점으로 하는 삼각형 ABC 가 직선 y=kx-2k+2 와 만나지 않도록 하는 실수 k 의 값의 범위.
  category: "정점 통과 직선의 회전 → 만날 범위의 여집합"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "y=k(x-2)+2 로 묶어 k 와 무관한 정점 (2, 2)를 지나는 직선족임을 드러내고, 그 점이 삼각형 바깥임을 확인"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "정점에서 각 꼭짓점으로 가는 기울기 0(A), 1/3(B), -3(C)을 비교해 삼각형이 정점에서 보이는 회전 구간을 기울기 조건으로 옮김"
    - step: 3
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "만날 조건(k>=0 또는 k<=-3)을 먼저 구한 뒤 여집합을 취해 만나지 않을 범위를 확정"
  insight_count: 3
  depth_score: 1.33
  type_id: null
  type_hint: "정점을 지나는 직선이 삼각형과 만나지 않을 조건"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    정점 (2, 2)는 직선 AC 를 기준으로 B 의 반대쪽이라 삼각형 바깥이다. 정점에서 볼 때 삼각형을 덮는 회전 구간의 경계는 A 로 가는 기울기 0 과 C 로 가는 기울기 -3 이고, 이 구간이 수직 방향을 지나므로 만나는 k 는 0 이상이거나 -3 이하로 끊긴다. 여집합이 -3<k<0.
    경계 세 개 중 어느 둘이 극단인지 고르고(B 는 내부), 구간이 무한대를 지나 뒤집히는 것을 알아채는 것이 난점이다. 통찰 3개지만 SC·VF·SYM·XU 가 없고 novelty_score 0 이라 ★5 게이트에 걸려 실력 UP 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: "y=k(x-2)+2 → 정점 (2,2) (삼각형 밖) → 꼭짓점 기울기 0·-3 이 경계 → 만나는 k 는 0 이상 또는 -3 이하 → 여집합 -3<k<0"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-3<k<0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/46-97.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 꼭짓점의 좌표와 정점(직선식의 -2k+2)을 바꾼다. 제약: 정점이 삼각형 바깥이어야 하고, 정점에서 각 꼭짓점으로 가는 기울기가 정수·간단한 분수로 떨어지게 좌표차를 맞춘다. 정점의 x좌표가 세 꼭짓점의 x좌표 범위 안이면 지금처럼 구간이 무한대를 지나 여집합이 열린 구간 하나가 되고, 바깥이면 구간이 이어져 닫힌 구간의 여집합이 두 조각이 된다 — 답 모양이 통째로 바뀌므로 반드시 확인."
    creative: "(1) 만나도록 하는 범위로 뒤집기(I-BW 제거 ★3~4) (2) 삼각형 대신 선분 BC 하나와 만날 조건(★3) (3) 직선이 삼각형의 넓이를 이등분할 k 를 묻기(44-86 결합 ★5 급) (4) 정점을 삼각형 내부에 두면 항상 만나므로 성립하는 k 가 없음을 보이게 하는 판정형(★4)."
```

## 표본 판정 요약 (19문)

- ★ 분포: ★1 2 · ★2 7 · ★3 8 · ★4 2 · ★5 0
- 통찰형 12 · 절차형 7 · premium 0
- 통찰 유형 분포: I-EQV 8 · I-RT 5 · I-BW 1 · I-VF 1 (총 15개 라벨 · depth 3 없음)
- type_hint 상위: 「두 직선의 교점을 지나는 직선」 3(43-e9·43-80·43-81) · 「도형의 넓이를 등분하는 직선」 3(44-86·45-92·46-96) · 「정점(고정점)을 지나는 직선족」 3(46-93·46-94·46-97) · 「세 점이 한 직선 위에 있을 조건」 2(44-85·45-91) · 「그림 속 사각형의 꼭짓점 좌표화 → 대각선」 2(45-89·45-90)
- 그림: 7문(`crop:fig-44-87.png` · `crop:fig-45-88.png` · `crop:fig-45-89.png` · `crop:fig-45-90.png` · `crop:fig-45-92.png` · `crop:fig-46-94.png` · `crop:fig-46-95.png`)
- ★ 조정 관례(이 조각에서 통일한 기준): 벤더 구역·level 출발점에서 통찰 0·M_total 5 이하이면 -1(45-88), 통찰 2개 이상이라도 그 골조가 해당 구역에서 반복 훈련되는 표준이면 +1 을 쓰지 않았다(46-94). 반대로 구역 평균보다 확실히 무거우면 +1 했다(44-87). ★5 는 통찰 3개 + SC/VF/SYM/XU + novelty 조건을 모두 요구하므로 이 조각에는 없다(46-97 이 통찰 3개지만 유형 조건 미충족).
- 확인체크(43-80·43-81)는 직전 필수 예제(43-e9 ★2)와 골조가 같지만 벤더 구역 신호를 그대로 살려 ★1 로 뒀다.

## 분류 이슈 목록

판정이 애매하거나 벤더 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-43-80 · GN-CM2-43-81 | 직전 필수 예제(★2)와 골조·계산량이 사실상 같은데 확인체크 구역 신호로 ★1. 카탈로그가 생기면 세 문항을 같은 유형·같은 base ★ 로 묶어야 한다 | ★1 / ★2 |
| GN-CM2-45-88 | 벤더 STEP 2(★3 출발)이나 통찰 0·M_total 5 로 -1 적용해 ★2. 교육청 기출 태그는 통찰이 없어 +0 | ★2 / ★3 |
| GN-CM2-46-94 | 통찰 2개(EQV+RT)라 +1 후보지만 「정점 + 기울기 범위」 표준 골조이고 같은 골조의 46-97 을 ★4 로 둬 ★3 유지 | ★3 / ★4 |
| GN-CM2-46-96 | 벤더 실력 UP(★4 출발)이나 44-86(★2)의 중점 → 삼등분점 확장에 그쳐 ★3 으로 한 단 낮춤 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: 「정점을 지나는 직선족」은 세 갈래가 난도가 확연히 다르다 — 정점 자체를 구하는 유형(46-93), 정점 + 도형과 만날 기울기 범위(46-94), 정점 + 여집합·무한대를 지나는 범위(46-97). 한 유형으로 묶으면 base ★ 가 2단 벌어진다.
- **통합해도 될 유형**: 「두 직선의 교점을 지나는 직선」(43-e9·43-80·43-81)은 지나는 두 번째 조건(점·원점·기울기)만 다를 뿐 골조가 같아 한 유형 + 조건 변형으로 충분하다. 「세 점 공선」(44-83·44-85·45-91)도 미지수가 들어가는 자리만 다르므로 한 유형으로 묶고 부수 조건(범위·거리·부정형 진술)을 하위 변형으로 둔다.
- **넓이 등분 계열**(44-86·45-92·46-96)은 「꼭짓점에서 긋는 등분선 → 대변의 내분점」과 「중심 대칭 도형의 이등분선 → 중심 통과」 두 원리로 갈리므로 유형을 둘로 세우는 편이 정확하다.
- 이 단원은 I-EQV(조건의 동치 변환)와 I-RT(그림 ↔ 좌표·기울기)가 통찰의 대부분이다. 카탈로그를 만들 때 이 두 유형은 학습 자산화 상위로 보고 §2.9 감쇠 대상에 넣을지 검토해야 한다.
