---
name: mechanism-데이터-GN-GEO-01
description: 개념원리 기하 01 포물선의 방정식(1/1 · 13~20쪽) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 기하 · 전사본 latex-bank/gn-geo
  section: 01 포물선의 방정식
  unit_code: GEO-01
  part: "1/1"
  extract_range: "13~20쪽 · 13-1~20-29"
  total_problems: 34
  unit_total: 34
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·level·tag)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-geo/items/<id>.tex
  image_source: latex-bank/gn-geo/figures/ (crops.json)
---

# 개념원리 기하 · 01 포물선의 방정식 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 기하 01단원 「포물선의 방정식」 13~20쪽 34문항 전수를 다룬다. 구역은 전사본 group 순서대로 「개념원리 익히기」 4문 · 「필수·발전 예제」 18문(필수 예제 `쪽-eN` 5문 + 그 유제인 tag 「확인체크」 13문) · 「연습문제 STEP 1」 4문 · 「연습문제 STEP 2」 6문 · 「연습문제 실력 UP」 2문이다.

벤더 난이도 신호는 구역·level·tag 세 가지다. ★ 출발점은 「개념원리 익히기」 ★1, 「필수·발전 예제」 구역(필수 예제와 그 확인체크 유제 모두 같은 유형의 쌍둥이 문제이므로 같은 층으로 본다) ★2, 「연습문제 STEP 1」 ★2, 「STEP 2」 ★3, 「실력 UP」 ★4로 잡았다. 여기서 **통찰 0이면서 M_total ≤ 5이고 도구가 한 갈래인 문항만** −1, **통찰 2개 이상이거나 depth 3이면** +1 후보로 조정했다. ★5는 통찰 3개 이상 + SC/VF/SYM/XU 중 하나가 필요한데 이 범위에는 해당 문항이 없다.

통찰 라벨링에서 이 단원의 경계 정책 하나를 고정했다. **포물선의 정의(PF = P에서 준선까지의 거리)를 길이의 합·최솟값·비 논증에 쓰면 I-EQV로 인정**하고, `PF = x + p` 공식으로 좌표만 구하는 표준 대입은 인정하지 않는다. 그래서 17-14 같은 한 줄 문제는 절차형, 18단원대 최솟값 문항은 통찰형으로 갈린다.

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 화살표 사슬) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-GEO-13-1
  page: 13
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "익히기"
  summary: |
    ⑴~⑷ 초점과 준선이 주어진 네 포물선의 방정식 구하기(축이 x축인 경우 둘 · y축인 경우 둘).
  category: "초점·준선 → 4p 결정 → 표준형"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "초점·준선으로 포물선의 방정식 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    초점이 축 위 (p,0) 또는 (0,p)이고 준선이 그 반대쪽이라 꼭짓점이 원점인 표준형. 초점의 좌표에서 p를 읽어 4p를 곱하는 한 단계. 익히기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "초점 좌표에서 p를 읽음 → 축 방향 판별 → y^2=4px 또는 x^2=4py"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $y^2=\dfrac{2}{3}x$ ⑵ $y^2=-16x$ ⑶ $x^2=8y$ ⑷ $x^2=-6y$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/13-1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "p 값(1/6, -4, 2, -3/2)을 자유롭게 바꿀 수 있음. 제약: 초점과 준선이 꼭짓점(원점)에 대하여 반드시 반대쪽 같은 거리여야 하고, 분수 p를 쓰면 4p가 보기 좋은 유리수가 되도록(p=1/6 → 2/3)."
    creative: "(1) 준선만 주고 꼭짓점이 원점이라는 조건을 붙이기(★1 유지) (2) 초점과 준선을 각각 (0,p), y=-p 가 아닌 평행이동 위치로 주면 꼭짓점 결정 단계가 붙어 ★2 (3) 네 개 중 방정식이 같은 것끼리 짝짓게 하면 축 방향 판별이 주 통찰이 되어 ★2."
```

```yaml
- id: GN-GEO-13-2
  page: 13
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "익히기"
  summary: |
    ⑴~⑷ 표준형 포물선 네 개의 초점의 좌표와 준선의 방정식을 구하고 그래프 그리기.
  category: "표준형 → 4p 비교 → 초점·준선·개형"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표준형 포물선의 초점·준선·그래프"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    13-1의 역방향. 계수를 4p와 비교해 p를 구하고 축 방향과 부호로 열리는 쪽을 정한다. 그래프는 꼭짓점·초점·준선 세 요소를 찍으면 끝. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "계수 = 4p 로 p 결정 → 초점 (p,0)·(0,p) · 준선 x=-p·y=-p → 개형"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 초점의 좌표: $\left(\dfrac{1}{4},\,0\right)$, 준선의 방정식: $x=-\dfrac{1}{4}$ ⑵ 초점의 좌표: $(-2,\,0)$, 준선의 방정식: $x=2$ ⑶ 초점의 좌표: $(0,\,1)$, 준선의 방정식: $y=-1$ ⑷ 초점의 좌표: $(0,\,-3)$, 준선의 방정식: $y=3$ (그래프는 답지 참조)'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-geo/items/13-2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(1, -8, 4, -12)를 바꿀 수 있음. 제약: 4로 나눈 p가 분수가 되어도 좋으나 4개 중 적어도 하나는 홀수 계수(p가 분수)를 남겨 4p 비교를 강제할 것."
    creative: "(1) 초점과 준선 사이의 거리만 묻기(★1) (2) 그래프에서 통경의 길이 |4p|를 함께 묻으면 ★2 (3) 방정식을 $2y^2=x$ 처럼 좌변 계수가 1이 아닌 꼴로 주면 표준형 정리 단계가 붙어 ★2."
```

```yaml
- id: GN-GEO-13-3
  page: 13
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "익히기"
  summary: |
    ⑴⑵ 평행이동된 표준형 포물선 두 개의 꼭짓점의 좌표, 초점의 좌표, 준선의 방정식 구하기.
  category: "평행이동 표준형 → 꼭짓점 평행이동량 → 초점·준선"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 포물선의 꼭짓점·초점·준선"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $(y-n)^2=4p(x-m)$ 꼴이 이미 정리되어 있어 꼭짓점 $(m,n)$을 읽고 원점 기준 초점·준선을 그만큼 평행이동하면 끝. 익히기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "표준형에서 꼭짓점 (m,n) 읽기 → 4p 로 p 결정 → 초점·준선을 (m,n) 만큼 평행이동"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 꼭짓점의 좌표: $(3,\,2)$, 초점의 좌표: $(2,\,2)$, 준선의 방정식: $x=4$ ⑵ 꼭짓점의 좌표: $(-1,\,4)$, 초점의 좌표: $\left(-1,\,\dfrac{9}{2}\right)$, 준선의 방정식: $y=\dfrac{7}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/13-3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평행이동량 (m,n)과 계수 4p를 함께 바꿀 수 있음. 제약: 계수의 부호가 열리는 방향을 결정하므로 ⑴⑵에서 부호를 서로 다르게 유지해야 함정(T-부호)이 살아 있음."
    creative: "(1) 꼭짓점과 초점만 주고 방정식을 되묻기(★1~2) (2) 준선과 꼭짓점을 주고 지나는 점을 묻기(★2) (3) 두 포물선의 준선이 같다는 조건을 붙여 미정계수를 구하게 하면 ★2~3."
```

```yaml
- id: GN-GEO-13-4
  page: 13
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "익히기"
  summary: |
    ⑴⑵ 일반형 $y^2-12x+4y+16=0$ 을 $(y-n)^2=k(x-m)$ 꼴로 고치고, 그 꼭짓점·초점·준선 구하기.
  category: "일반형 → y 완전제곱 → 표준형 → 요소"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반형 이차식을 포물선 표준형으로 변형"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y에 대해서만 완전제곱하고 남는 항을 x로 묶는 정형 절차. ⑴이 ⑵의 발판을 그대로 깔아 주므로 학생이 스스로 변형 방향을 정할 필요가 없다. 익히기 구역·통찰 없음 → M_total 6이어도 ★1 유지.
  tier: star_1
  mechanism_primary: "y항 완전제곱 → 나머지를 12(x-1) 로 묶기 → 꼭짓점·초점·준선"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $(y+2)^2=12(x-1)$ ⑵ 꼭짓점의 좌표: $(1,\,-2)$, 초점의 좌표: $(4,\,-2)$, 준선의 방정식: $x=-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/13-4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "y의 일차항 계수(4)와 x의 계수(-12), 상수항(16)을 바꿀 수 있음. 제약: y 일차항 계수는 짝수라야 완전제곱이 정수로 떨어지고, x 계수는 4의 배수라야 p가 정수."
    creative: "(1) ⑴의 발판을 없애고 바로 초점을 묻기(★2 — 변형 방향을 학생이 정해야 함) (2) $x$에 대해 완전제곱해야 하는 $x^2$ 꼴로 바꾸기(★1 유지) (3) 일반형에 미정계수를 넣고 준선이 주어진 직선이 되도록 하는 상수를 묻기(★2~3)."
```

### 필수·발전 예제

```yaml
- id: GN-GEO-14-e1
  page: 14
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 점 $(0,-4)$와 직선 $y=4$에 이르는 거리가 같은 점의 자취의 방정식. ⑵ 초점 $(1/2,0)$·준선 $x=-1/2$인 포물선이 점 $(a,2)$를 지날 때 $a$.
  category: "포물선의 정의 → 자취의 방정식 / 방정식 → 점 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 정의로 자취의 방정식 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정의를 두 방향으로 한 번씩 쓰는 대표 예제. ⑴은 거리 등식을 세워 제곱·정리(초점이 아래·준선이 위이므로 아래로 열림), ⑵는 초점·준선에서 $y^2=2x$를 세운 뒤 대입. 두 갈래 모두 표준 절차라 통찰 라벨 없음. 필수 예제 출발 ★2, M_total 6 → 유지.
  tier: star_2
  mechanism_primary: "정의(초점까지 거리 = 준선까지 거리) → 제곱·정리 → 표준형 / 표준형 → 점 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x^2=-16y$ ⑵ $2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/14-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 초점 y좌표와 준선 위치(±4)를 바꿀 수 있고, ⑵ p(1/2)와 지나는 점의 y좌표(2)를 바꿀 수 있음. 제약: ⑴은 초점·준선이 원점 대칭이라야 꼭짓점이 원점으로 남고, ⑵는 $y^2=4px$에 대입한 $a$가 정수로 떨어지도록 y좌표를 4p의 약수 관계로 고를 것."
    creative: "(1) ⑵에서 $a$ 대신 점이 두 개(위·아래) 나오게 x좌표를 미지수로 주면 I-MI가 붙어 ★3 (2) 초점·준선을 평행이동 위치로 주면 꼭짓점 결정 단계가 붙어 ★2~3 (3) 자취를 구한 뒤 그 포물선의 통경 길이까지 묻기(★2 유지)."
```

```yaml
- id: GN-GEO-14-5
  page: 14
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 $(5,0)$과 직선 $x=-5$에 이르는 거리가 같은 점의 자취의 방정식.
  category: "포물선의 정의 → 거리 등식 → 표준형"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 정의로 자취의 방정식 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    14-e1⑴의 축만 바꾼 유제. 초점 (5,0)·준선 x=-5가 원점 대칭이라 정의만으로 $y^2=20x$가 바로 나온다. 통찰 없음·M_total 5·도구 한 갈래 → 필수 예제 구역 출발 ★2에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "정의 거리 등식 → 양변 제곱 → y^2=20x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y^2=20x$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/14-5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "p(=5)를 바꿀 수 있음. 제약: 초점 (p,0)과 준선 x=-p 의 대칭을 유지해야 꼭짓점이 원점. 대칭을 깨면 13-4 계열(평행이동)로 유형이 바뀜."
    creative: "(1) 초점·준선을 x=k 형태로 어긋나게 주면 꼭짓점 결정이 들어가 ★2 (2) 자취 위의 점 중 초점거리가 주어진 값인 점을 묻기(★2) (3) 자취와 직선의 교점 개수를 묻기(★3 · 판별식)."
```

```yaml
- id: GN-GEO-14-6
  page: 14
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    원점이 꼭짓점이고 준선이 $y=-5/2$인 포물선이 점 $(5,k)$를 지날 때 $k$.
  category: "준선 → 4p 결정 → 점 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "준선 조건으로 포물선의 방정식 결정 후 점 대입"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    꼭짓점이 원점이고 준선이 $y=-p$이므로 $x^2=10y$가 즉시 결정되고 $x=5$를 대입하면 끝. 통찰 없음·M_total 4 → 필수 예제 구역 출발 ★2에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "준선 y=-5/2 → p=5/2 → x^2=10y → (5,k) 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{5}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/14-6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "준선의 위치(-5/2)와 대입하는 x좌표(5)를 바꿀 수 있음. 제약: $x^2=4py$에 대입한 k가 보기 좋은 값이 되려면 x좌표의 제곱이 4p의 배수일 것."
    creative: "(1) 준선 대신 초점을 주기(★1 유지) (2) 점 $(5,k)$ 대신 $(k,5)$로 바꾸면 k가 두 값(±)이 되어 I-MI가 붙어 ★2 (3) 꼭짓점을 원점이 아닌 점으로 옮기면 ★2."
```

```yaml
- id: GN-GEO-14-7
  page: 14
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 포물선 $y^2=-8x$, $x^2=12y$의 초점을 각각 A, B라 할 때 삼각형 OAB의 넓이(O는 원점).
  category: "두 포물선의 초점 → 직각삼각형 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 포물선의 초점과 도형의 넓이"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    축이 서로 다른 두 표준형에서 초점 $A(-2,0)$, $B(0,3)$을 각각 읽고, 두 점이 좌표축 위에 있으므로 직각을 낀 두 변의 길이 곱의 반으로 넓이를 낸다. 초점 읽기 두 번 + 넓이 한 번이라 통찰 라벨 없음. [분류 이슈] 두 포물선 결합이라 ★2 후보이나 계산이 각각 한 줄이라 ★1로 둠.
  tier: star_1
  mechanism_primary: "각 표준형 계수 = 4p → 초점 A(-2,0)·B(0,3) → OA·OB 직각 → 넓이 3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/14-7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 계수(-8, 12)를 바꿀 수 있음. 제약: 축이 서로 다른 조합(하나는 $y^2$, 하나는 $x^2$)을 유지해야 O가 직각꼭짓점으로 남아 넓이가 한 줄로 끝남. 같은 축으로 바꾸면 세 점이 일직선이 되어 문제가 성립하지 않음."
    creative: "(1) 두 준선과 좌표축이 만드는 사각형의 넓이로 바꾸기(★2) (2) 초점 대신 꼭짓점을 평행이동시켜 세 점이 직각이 아니게 하면 신발끈·외적이 필요해 ★2~3 (3) 넓이를 주고 계수를 되묻는 역방향(★2 · I-BW)."
```

```yaml
- id: GN-GEO-15-e2
  page: 15
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴⑵ 일반형으로 주어진 두 포물선의 꼭짓점의 좌표, 초점의 좌표, 준선의 방정식 구하기.
  category: "일반형 → 완전제곱 → 평행이동 표준형 → 요소"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반형에서 평행이동 표준형으로 고쳐 꼭짓점·초점·준선 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴은 $y$에 대해, ⑵는 $x$에 대해 완전제곱한다. 제곱항이 어느 문자에 붙어 있는지로 축 방향이 정해지고 나머지 문자를 계수로 묶으면 표준형이 된다. 13-4와 같은 도구지만 ⑴의 발판 없이 두 방향을 모두 다뤄야 해서 단계 수가 늘었다. 필수 예제 ★2 · 통찰 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "제곱항 문자로 축 결정 → 그 문자 완전제곱 → 나머지를 4p(·-m) 로 묶기 → 꼭짓점·초점·준선"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 꼭짓점의 좌표: $(2,\,1)$, 초점의 좌표: $(4,\,1)$, 준선의 방정식: $x=0$ ⑵ 꼭짓점의 좌표: $(5,\,-1)$, 초점의 좌표: $(5,\,0)$, 준선의 방정식: $y=-2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/15-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수와 상수항을 바꿀 수 있음. 제약: 제곱하는 문자의 일차항 계수는 짝수, 다른 문자의 계수는 4의 배수라야 꼭짓점·p가 모두 정수로 떨어짐."
    creative: "(1) 준선이 좌표축이 되도록 상수를 맞추면 답 확인이 쉬워져 ★2 유지 (2) 꼭짓점이 특정 직선 위에 있도록 미정계수를 넣으면 ★3 (3) 두 포물선의 꼭짓점 사이 거리를 묻기(★2)."
```

```yaml
- id: GN-GEO-15-8
  page: 15
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    포물선 $y^2+2x-6y+11=0$의 초점이 $(a,b)$, 준선이 $x=c$일 때 $abc$의 값.
  category: "일반형 → 표준형 → 초점·준선 → 곱"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "일반형에서 평행이동 표준형으로 고쳐 꼭짓점·초점·준선 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $y$를 완전제곱해 $(y-3)^2=-2(x+1)$을 얻고 $4p=-2$에서 왼쪽으로 열림을 읽는다. 꼭짓점 $(-1,3)$에서 초점·준선을 각각 $1/2$만큼 좌·우로 옮긴 뒤 세 값을 곱한다. 부호 함정(T-부호)이 살아 있으나 통찰 라벨 없음 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "y 완전제곱 → (y-3)^2=-2(x+1) → 꼭짓점 (-1,3) → 초점·준선 → abc"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{9}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/15-8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x의 계수(2)와 y 일차항 계수(-6), 상수항(11)을 바꿀 수 있음. 제약: x의 계수가 4의 배수가 아니면 p가 분수가 되어 곱 abc도 분수가 됨 — 그 자체는 문제없으나 선택지형으로 바꿀 때는 4의 배수 권장."
    creative: "(1) $a+b+c$ 로 묻기(★2 유지) (2) 초점이 특정 사분면에 있도록 상수를 미지수로 두면 부등식 조건이 붙어 ★3 (3) 준선이 y축이 되는 상수를 되묻는 역방향(★2~3 · I-BW)."
```

```yaml
- id: GN-GEO-15-9
  page: 15
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    포물선 $x^2-4x-4py+4-4p=0$의 초점이 $(2,-1/2)$일 때 상수 $p$의 값.
  category: "매개변수 일반형 → 표준형 → 초점 조건 → p"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "초점 조건으로 평행이동 포물선의 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x$를 완전제곱하면 $(x-2)^2=4p(y+1)$이라 꼭짓점이 $p$와 무관하게 $(2,-1)$로 고정된다. 초점의 y좌표가 $-1+p$이므로 주어진 값과 비교하면 한 줄. 매개변수가 들어가 $M_a=2$지만 비교 자체는 표준 대입이라 I-BW 인정하지 않음 → ★2.
  tier: star_2
  mechanism_primary: "x 완전제곱 → (x-2)^2=4p(y+1) → 꼭짓점 (2,-1) 고정 → 초점 y좌표 -1+p 비교 → p"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/15-9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 일차항 계수(-4)와 초점의 y좌표(-1/2)를 바꿀 수 있음. 제약: 상수항이 $4-4p$처럼 $p$를 포함해야 꼭짓점이 $p$와 무관하게 고정된다 — 이 구조를 깨면 꼭짓점이 $p$에 의존해 연립이 되고 난도가 ★3으로 오름."
    creative: "(1) 초점 대신 준선을 주기(★2 유지) (2) 상수항에서 $p$를 빼 꼭짓점이 $p$에 의존하게 하면 두 조건 연립 → ★3 (3) 초점이 x축 위에 있도록 하는 $p$를 묻기(★2 · I-BW 경계)."
```

```yaml
- id: GN-GEO-15-10
  page: 15
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 포물선 $y^2-8x+8a=0$, $y^2+4x+4b=0$의 초점이 일치할 때 $a+b$의 값.
  category: "두 매개변수 포물선의 초점 → 일치 조건 → a+b"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 포물선의 초점 일치 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 식 모두 $y^2$항만 있어 완전제곱 없이 $y^2=8(x-a)$, $y^2=-4(x+b)$로 묶인다. 꼭짓점이 각각 $(a,0)$, $(-b,0)$이고 초점은 $x$축 위이므로 x좌표 비교 한 줄로 $a+b$가 바로 나온다. $a$, $b$를 따로 구하지 않아도 되지만 이는 식이 이미 그렇게 생긴 결과라 통찰 라벨은 붙이지 않음 → ★2.
  tier: star_2
  mechanism_primary: "각각 y^2=8(x-a)·y^2=-4(x+b) 로 묶기 → 초점 x좌표 a+2 와 -b-1 비교 → a+b=-3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/15-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 x 계수(-8, 4)를 바꿀 수 있음. 제약: 두 포물선이 서로 반대 방향으로 열려야 초점이 겹치는 위치가 자연스럽고, 계수가 4의 배수라야 p가 정수. 계수가 같으면 두 포물선이 일치해 버려 문제가 무의미해짐."
    creative: "(1) 초점이 아니라 준선이 일치하는 조건으로 바꾸기(★2 유지) (2) 두 포물선이 한 점에서 만나는 조건을 추가하면 연립이 붙어 ★3 (3) 축이 서로 다른 두 포물선($y^2$와 $x^2$)의 초점 일치로 바꾸면 두 좌표를 모두 맞춰야 해 ★3."
```

```yaml
- id: GN-GEO-16-e3
  page: 16
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 초점 $(3,4)$·준선 $x=-2$인 포물선, ⑵ 초점 $(1,-3)$·준선 $y=1$인 포물선의 방정식.
  category: "초점·준선 → 꼭짓점(중점)·4p(거리) → 평행이동 표준형"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "초점·준선에서 꼭짓점과 4p를 읽어 평행이동 포물선의 방정식 세우기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    초점이 축 위에 있지 않은 일반 위치. 꼭짓점은 초점에서 준선에 내린 수선의 중점이고 $|4p|$는 초점과 준선 사이 거리의 2배다. ⑵는 초점이 준선보다 아래라 아래로 열려 부호가 음이 된다(T-부호). 정의를 직접 쓰지 않고 중점·거리 규칙으로 처리하는 표준 절차라 통찰 라벨 없음 → 필수 예제 ★2.
  tier: star_2
  mechanism_primary: "꼭짓점 = 초점·준선의 중점 → 4p = 2×(초점과 준선 거리, 열림 방향 부호) → 평행이동 표준형"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $(y-4)^2=10\left(x-\dfrac{1}{2}\right)$ ⑵ $(x-1)^2=-8(y+1)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/16-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초점의 좌표와 준선의 위치를 바꿀 수 있음. 제약: 초점과 준선 사이 거리가 짝수라야 꼭짓점 좌표가 정수(⑴은 거리 5라 꼭짓점 x좌표가 1/2로 분수가 된 사례). 초점이 준선 위에 놓이면 포물선이 성립하지 않으므로 반드시 떨어뜨릴 것."
    creative: "(1) 준선을 $y$축·$x$축으로 두어 꼭짓점이 정수가 되게 하기(★2 유지) (2) 초점과 꼭짓점을 주고 준선을 되묻기(★2) (3) 준선이 기울어진 직선이면 교육과정 밖이므로 쓰지 말 것 — 대신 지나는 점을 하나 더 주면 16-13처럼 두 경우가 생겨 ★3."
```

```yaml
- id: GN-GEO-16-11
  page: 16
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    초점 $(4,-5)$·준선 $y=-2$인 포물선의 방정식이 $x^2+ax+by+c=0$일 때 $a+b+c$.
  category: "초점·준선 → 표준형 → 일반형 전개 → 계수 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "초점·준선에서 꼭짓점과 4p를 읽어 평행이동 포물선의 방정식 세우기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    16-e3⑵의 유제에 전개 한 단계가 붙었다. 꼭짓점은 $(4,-7/2)$, 초점이 준선보다 아래이므로 아래로 열려 $4p=-6$. 표준형을 전개해 $x^2+ax+by+c=0$ 꼴로 맞춘 뒤 계수를 더한다. 분수 꼭짓점 때문에 전개에서 부호·분수 실수가 나기 쉽지만 통찰 라벨은 없음 → ★2.
  tier: star_2
  mechanism_primary: "꼭짓점 (4,-7/2)·4p=-6 → 표준형 → 전개해 일반형 → a+b+c"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$35$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/16-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초점과 준선의 위치를 바꿀 수 있음. 제약: 초점과 준선 사이 거리가 홀수면 꼭짓점이 분수가 되지만 전개 후 계수는 정수로 떨어지므로 허용. 다만 $x^2$의 계수가 1인 일반형 꼴을 유지하려면 축이 $y$축에 평행한(=$x^2$항) 배치를 유지할 것."
    creative: "(1) 축이 $x$축에 평행하도록 바꿔 $y^2+ay+bx+c=0$ 꼴로 묻기(★2 유지) (2) $abc$나 $a-b+c$로 묻기(★2) (3) 일반형 계수를 주고 초점을 되묻는 역방향(★2 — 15-8과 같은 유형이 됨)."
```

```yaml
- id: GN-GEO-16-12
  page: 16
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    초점 $(3/2,2)$·준선 $x=1/2$인 포물선이 $x$축과 만나는 점의 좌표.
  category: "초점·준선 → 표준형 → y=0 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동 포물선의 방정식과 좌표축과의 교점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    꼭짓점은 $(1,2)$, 초점과 준선의 거리가 1이므로 $4p=2$가 되어 $(y-2)^2=2(x-1)$. 여기에 $y=0$을 대입하면 교점이 하나만 나온다(포물선이 오른쪽으로 열려 꼭짓점 y좌표가 2이므로 x축과 한 점에서만 만남). $4p$를 초점거리 $p=1/2$의 4배로 잡아야 하는 곳이 유일한 실수 지점 → ★2.
  tier: star_2
  mechanism_primary: "꼭짓점 (1,2)·4p=2 → (y-2)^2=2(x-1) → y=0 대입 → (3,0)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(3,\,0)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/16-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초점·준선의 x좌표와 초점의 y좌표(2)를 바꿀 수 있음. 제약: 대입 후 $x$가 유리수로 떨어지려면 꼭짓점 y좌표의 제곱이 4p의 배수일 것. 축이 $x$축에 평행한 포물선은 x축과 항상 한 점에서만 만나므로 답이 하나로 유지됨."
    creative: "(1) $y$축과의 교점으로 바꾸면 두 점(또는 없음)이 되어 I-MI가 붙어 ★3 (2) 축이 $y$축에 평행한 배치로 바꾸면 x축 교점이 두 개가 되어 ★3 (3) 교점과 초점 사이 거리를 묻기(★2~3 · 정의 활용)."
```

```yaml
- id: GN-GEO-16-13
  page: 16
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    초점 $(3,1)$이고 점 $(6,5)$를 지나며 준선이 $y$축에 평행한 포물선의 방정식을 모두 구하기.
  category: "정의로 준선까지 거리 확보 → 준선 위치 두 경우 → 각각의 표준형"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "지나는 점에서 초점까지의 거리 5가 곧 그 점에서 준선까지의 거리라는 정의를 거꾸로 써서 준선의 방정식을 역추적"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "준선은 점 (6,5)의 왼쪽 x=1 과 오른쪽 x=11 두 곳 모두 가능하므로 오른쪽으로 열린 포물선과 왼쪽으로 열린 포물선을 모두 따져야 함"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "정의로 준선의 위치를 역추적(두 경우)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    「모두 구하시오」가 두 경우를 예고하지만, 실제로 학생이 막히는 곳은 준선의 위치를 점에서 준선까지의 거리로 역추적하는 첫 수다. 거리 5를 얻은 뒤 준선이 $x=1$이면 꼭짓점 $(2,1)$·오른쪽 열림, $x=11$이면 꼭짓점 $(7,1)$·왼쪽 열림으로 갈린다. 역추적(BW d1)과 두 경우 분기(MI d2) 두 통찰 → 필수 예제 구역 출발 ★2에서 +1 → ★3. [분류 이슈] 벤더는 확인체크(유제)라 ★2 후보와 경합.
  tier: star_3
  mechanism_primary: "PF=5 = P에서 준선까지 거리 → 준선 x=1 또는 x=11 → 각각 꼭짓점·4p → 두 방정식"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$(y-1)^2=4(x-2)$, $(y-1)^2=-16(x-7)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/16-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초점과 지나는 점의 좌표를 바꿀 수 있음. 제약: 두 점 사이 거리가 정수(여기서는 3-4-5 직각삼각형)라야 준선 위치가 정수로 떨어짐. 또 지나는 점의 y좌표가 초점의 y좌표와 같으면 두 경우 중 하나가 소멸하므로 반드시 다르게 둘 것."
    creative: "(1) 「준선이 x축에 평행」으로 바꾸면 위·아래 두 경우가 되어 ★3 유지 (2) 「모두」를 빼고 준선이 y축이라는 조건을 추가하면 경우가 하나로 줄어 ★2 (3) 두 포물선의 교점이나 두 꼭짓점 사이 거리를 추가로 묻기(★3~4 · 계산 부담 증가)."
```

```yaml
- id: GN-GEO-17-e4
  page: 17
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    점 $A(8,4)$를 지나고 $x$축에 평행한 직선과 포물선 $y^2=8x$의 교점을 P, 초점을 F라 할 때 $\overline{AP}+\overline{PF}$.
  category: "정의로 PF를 준선까지 거리로 → 두 수평 거리의 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "PF 를 P에서 준선 x=-2 까지의 거리로 바꾸면 AP+PF 가 A의 x좌표와 준선 사이의 수평 거리로 합쳐져 P의 좌표에 무관해짐"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "포물선의 정의를 이용한 선분 길이의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AP 는 수평 거리 $8-x_P$, PF 는 정의에 의해 $x_P+2$라서 더하면 $x_P$가 사라지고 10이 된다. 교점 P를 직접 구해도 풀리지만 정의로 바꾸는 순간 계산이 사라지는 것이 이 예제의 요지(EQV d1). 필수 예제 ★2 · 통찰 1개 → ★2 유지.
  tier: star_2
  mechanism_primary: "AP = 8-x_P · PF = x_P+2 (정의) → 합이 x_P 무관한 10"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10$'
  answer_source: "본문 풀이"
  figure: "crop:fig-17-e4.png"
  latex: latex-bank/gn-geo/items/17-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선의 계수(8)와 점 A의 x좌표(8)를 바꿀 수 있음. 제약: A가 포물선의 바깥(오른쪽)에 있어야 교점 P가 A와 초점 사이에 놓여 합이 양수로 정리되고, A의 y좌표는 합에 영향을 주지 않으므로 교점이 실제로 존재하도록 부호만 맞추면 됨."
    creative: "(1) A를 포물선 안쪽에 두면 AP 의 부호 해석이 달라져 ★3 (2) $\\overline{AP}+\\overline{PF}$ 대신 $\\overline{AF}$와 비교하게 하면 삼각부등식이 붙어 ★3 (3) A를 움직이는 점으로 두고 합의 최솟값을 묻으면 18-e5 유형이 되어 ★3."
```

```yaml
- id: GN-GEO-17-14
  page: 17
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    포물선 $y^2=12x$의 초점 F와 포물선 위의 점 P에 대하여 $\overline{PF}=5$일 때 P의 $x$좌표.
  category: "초점거리 공식 PF = x + p → x좌표"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "초점거리 PF = x + p 로 좌표 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $4p=12$이므로 $p=3$, 초점거리는 $x_P+3$. 주어진 5와 놓고 한 줄에 끝난다. 정의를 쓰긴 하지만 이 단원의 표준 공식 대입이라 I-EQV 인정하지 않음(이 파일의 경계 정책). 통찰 없음·M_total 4·도구 한 갈래 → 필수 예제 구역 ★2에서 −1 → ★1.
  tier: star_1
  mechanism_primary: "4p=12 → p=3 → PF = x_P+3 = 5 → x_P=2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/17-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(12)와 초점거리(5)를 바꿀 수 있음. 제약: 초점거리는 반드시 $p$보다 커야 포물선 위의 점이 존재하고, $x_P$가 양수로 나와야 함. 초점거리를 $p$와 같게 두면 P가 꼭짓점이 되는 경계 문항으로 바뀜."
    creative: "(1) P의 y좌표까지 묻게 하면 ±두 값이 되어 I-MI가 붙어 ★2 (2) 초점거리 대신 준선까지 거리로 묻기(★1 유지) (3) $\\overline{PF}$가 최소가 되는 P를 묻기(★2 · 꼭짓점이 답)."
```

```yaml
- id: GN-GEO-17-15
  page: 17
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    포물선 $x^2=4y$의 초점을 지나는 직선이 포물선과 만나는 두 점 A, B에서 $x$축에 내린 수선의 발을 C, D라 할 때 $\overline{AB}=5$이면 $\overline{AC}+\overline{BD}$.
  category: "초점현 = 두 초점거리의 합 → 정의로 y좌표 합 환원"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "직선이 초점을 지나 A, F, B가 한 직선 위에 있으므로 AB = AF + BF 로 길이 조건을 두 초점거리의 합으로 통합"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "AF = (A에서 준선 y=-1 까지 거리) = AC + 1 로 바꾸면 구하는 AC+BD 가 AB-2 로 정리됨"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "초점을 지나는 현과 준선까지의 거리"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    AC, BD 는 A, B의 y좌표이고 준선이 $y=-1$이라 AF=AC+1, BF=BD+1. 초점을 지나므로 AB=AF+BF=AC+BD+2. 좌표를 하나도 구하지 않고 끝나지만, 공선(CON d1)과 정의 치환(EQV d1) 두 착안 중 하나라도 빠지면 연립으로 빠져 막힌다. 확인체크 유제이나 통찰 2개 → ★2에서 +1 → ★3. [분류 이슈] 대응 필수 예제(17-e4, ★2)보다 높게 판정됨.
  tier: star_3
  mechanism_primary: "AB = AF+BF (공선) → AF=AC+1·BF=BD+1 (정의) → AC+BD = AB-2 = 3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3$'
  answer_source: "답지"
  figure: "crop:fig-17-15.png"
  latex: latex-bank/gn-geo/items/17-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(4)와 초점현의 길이(5)를 바꿀 수 있음. 제약: 초점현의 길이는 통경 $|4p|$ 이상이어야 존재하므로 $x^2=4y$에서는 AB ≥ 4. 이 하한을 어기면 답이 나와도 도형이 존재하지 않음."
    creative: "(1) AC·BD 의 곱이나 AC:BD 를 묻기(★4 · 초점현 관계식 필요) (2) 축을 $x$축에 평행하게 바꿔 준선까지 거리를 x좌표로 재기(★3 유지) (3) AB 대신 AC+BD 를 주고 AB 를 되묻는 역방향(★3)."
```

```yaml
- id: GN-GEO-18-e5
  page: 18
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    포물선 $y^2=10x$의 초점 F와 포물선 위의 임의의 점 P, 점 $A(6,3)$에 대하여 $\overline{AP}+\overline{PF}$의 최솟값.
  category: "정의로 PF를 준선 거리로 → 최솟값은 A에서 준선까지의 수평 거리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "PF 를 P에서 준선까지의 거리로 바꿔 최솟값 문제를 초점이 사라진 형태로 다시 씀"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "AP + (P에서 준선까지 거리) 는 A에서 준선에 내린 수선 위에 P가 놓일 때 최소라는 기하 배치 문제로 옮김"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "포물선 위의 점에서 선분 길이의 합의 최솟값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    초점거리를 준선거리로 바꾸는 순간 "한 점에서 한 직선까지" 문제가 되고, 최소는 A에서 준선에 내린 수선의 길이(수평 거리)다. A가 포물선 내부에 있어야 그 수선이 포물선과 만나므로 배치 확인이 숨은 조건. 정의 치환(EQV d2)과 기하 환원(RT d2) → 필수 예제 ★2에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "PF = P에서 준선 x=-5/2 까지 거리 → AP+PF 최소 = A에서 준선까지 수평 거리 = 6+5/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{17}{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/18-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(10)와 A의 좌표(6,3)를 바꿀 수 있음. 제약: A가 포물선 내부여야 함($y_A^2 < 4p\\,x_A$) — 외부로 두면 최소가 AF 가 되어 답과 골조가 모두 바뀜. A의 y좌표는 답에 들어가지 않으므로 내부 조건만 지키면 자유."
    creative: "(1) A를 포물선 외부에 두어 최소가 AF 가 되게 하면 I-VF 성격이 붙어 ★4 (2) $\\overline{AP}+\\overline{PF}$ 대신 $\\overline{AP}-\\overline{PF}$의 최댓값으로 바꾸면 ★4 (3) 최솟값을 주고 A의 x좌표를 되묻는 역방향(★3 · I-BW)."
```

```yaml
- id: GN-GEO-18-16
  page: 18
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    포물선 $y^2=-12x$와 두 점 $A(-3,0)$, $B(-5,5)$에 대하여 포물선 위의 점 P의 $\overline{AP}+\overline{BP}$의 최솟값.
  category: "주어진 점이 초점임을 알아채기 → 준선 거리로 환원 → 수평 거리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A(-3,0) 이 이 포물선의 초점임을 알아채고 AP 를 P에서 준선 x=3 까지의 거리로 바꿈"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "합의 최솟값을 B에서 준선에 내린 수선의 길이(수평 거리)로 옮김"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "초점이 주어진 점일 때 선분 길이의 합의 최솟값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A가 그냥 한 점처럼 제시돼 있어 초점임을 먼저 확인해야 정의를 쓸 수 있다($4p=-12$ → 초점 $(-3,0)$). 그 뒤는 18-e5와 같은 골조로 B에서 준선까지의 수평 거리 $3-(-5)$가 답. B가 포물선 내부인지 확인하는 단계가 숨어 있다. 통찰 2개 → 확인체크 유제 ★2에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "A = 초점 확인 → AP = P에서 준선 x=3 까지 거리 → 최소 = B에서 준선까지 수평 거리 8"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: "crop:fig-18-16.png"
  latex: latex-bank/gn-geo/items/18-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(-12)와 B의 좌표를 바꿀 수 있음. 제약: A는 반드시 계수에서 나오는 초점 좌표와 일치시켜야 골조가 성립하고, B는 포물선 내부여야 함. 계수를 바꾸면 A의 좌표도 함께 바꿔야 하는 연동 제약이 있으므로 숫자 변형에서 가장 실수가 나기 쉬운 지점."
    creative: "(1) A를 초점이 아닌 점으로 두면 정의를 못 써서 골조가 무너짐 — 대신 A를 준선 위의 점으로 두면 다른 유형이 됨(★3) (2) 삼각형 ABP 의 둘레 최솟값으로 확장하면 20-29 유형이 되어 ★4 (3) 최솟값이 되는 P의 좌표까지 묻기(★3~4)."
```

```yaml
- id: GN-GEO-18-17
  page: 18
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    포물선 $x^2=6y$ 위의 점 P에서 준선 $l$에 내린 수선의 발을 H라 할 때, 점 $A(2,0)$에 대하여 $\overline{AP}+\overline{PH}$의 최솟값.
  category: "PH를 PF로 바꾸기 → 삼각부등식으로 AF"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "PH(준선까지 거리)를 PF(초점까지 거리)로 바꿔 두 점 A, F 사이의 경로 문제로 다시 씀 — 18-e5 와 반대 방향의 치환"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "AP+PF 는 A, P, F 가 한 직선 위일 때 최소라는 삼각부등식 배치로 옮김"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "준선까지의 거리를 포함한 길이의 합의 최솟값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    18-e5·18-16이 PF를 준선거리로 바꾼 것과 달리 여기서는 준선거리를 PF로 되돌려야 한다. 그러면 AP+PF ≥ AF 이고 초점 $(0,3/2)$까지의 거리 $\sqrt{4+9/4}$가 답. 치환 방향을 스스로 정해야 하는 것이 이 유제의 핵심(EQV d2). 통찰 2개 → ★2에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "PH = PF (정의) → AP+PF ≥ AF → A(2,0)와 초점 (0,3/2) 사이 거리 5/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{5}{2}$'
  answer_source: "답지"
  figure: "crop:fig-18-17.png"
  latex: latex-bank/gn-geo/items/18-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(6)와 A의 좌표(2,0)를 바꿀 수 있음. 제약: AF 가 3-4-5 같은 정수비로 떨어지도록 초점 좌표와 A를 맞추면 답이 깔끔함(여기서는 2와 3/2로 5/2). A가 포물선 위나 내부여도 골조는 유지되지만, 선분 AF 가 포물선과 만나야 최소가 실제로 달성됨."
    creative: "(1) A를 포물선의 반대쪽(준선 아래)에 두면 선분 AF 가 포물선과 만나지 않아 최소가 달라짐 — 함정형 ★4 (2) $\\overline{AP}+\\overline{PH}$ 대신 삼각형 둘레로 확장(★4) (3) 최솟값을 주고 A의 위치를 되묻기(★3 · I-BW)."
```

### 연습문제 STEP 1

```yaml
- id: GN-GEO-19-18
  page: 19
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    초점 $(-3/2,0)$·준선 $x=3/2$인 포물선의 꼭짓점을 A, 초점을 지나고 $y$축에 평행한 직선이 포물선과 만나는 두 점을 B, C라 할 때 삼각형 ABC의 넓이.
  category: "초점·준선 → 표준형 → 통경 → 삼각형 넓이"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "초점·준선으로 포물선 결정 후 통경과 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    초점·준선이 원점 대칭이라 $y^2=-6x$, 꼭짓점 A는 원점. 초점을 지나는 세로 직선이 자르는 현은 통경이고 그 길이는 $|4p|=6$. 밑변 6, 높이는 원점에서 초점까지 거리 $3/2$. 통경 길이가 $|4p|$라는 것을 몰라도 $x=-3/2$를 대입하면 나오므로 통찰 라벨 없음. STEP 1 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "y^2=-6x → 꼭짓점 원점 · x=-3/2 대입해 BC=6 → 넓이 = (1/2)(6)(3/2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{9}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/19-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "p(3/2)를 바꿀 수 있음. 제약: 초점과 준선이 원점 대칭이어야 꼭짓점이 원점으로 남고 넓이가 $2p^2$로 깔끔하게 정리됨. 대칭을 깨면 꼭짓점 계산이 먼저 붙어 ★3."
    creative: "(1) 초점을 지나되 y축에 평행하지 않은 직선으로 바꾸면 초점현 길이 계산이 필요해 ★4 (2) 삼각형 대신 사각형(준선과의 교점 포함) 넓이로 바꾸기(★3) (3) 넓이를 주고 p를 되묻는 역방향(★2 · I-BW)."
```

```yaml
- id: GN-GEO-19-19
  page: 19
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    포물선 $(y-3k)^2=8k(x-k+1)$의 초점이 $y$축 위에 있을 때 준선의 방정식($k$는 상수).
  category: "매개변수 표준형 → 초점 좌표를 k로 → y축 조건 → 준선"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수 포물선의 초점 위치 조건과 준선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표준형이 이미 정리돼 있어 꼭짓점 $(k-1,3k)$와 $4p=8k$를 그대로 읽고 초점의 x좌표를 $k$의 식으로 쓴 뒤 0으로 놓으면 된다. 초점이 y축 위 = x좌표가 0 이라는 번역은 표준 해석이라 통찰 라벨 없음. 매개변수 때문에 $M_a=2$이나 절차는 일직선 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "꼭짓점 (k-1,3k)·p=2k → 초점 x좌표 3k-1=0 → k=1/3 → 준선 x=-k-1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x=-\dfrac{4}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/19-19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꼭짓점의 두 좌표식($3k$, $k-1$)과 $8k$ 계수를 바꿀 수 있음. 제약: $k$가 유일하게 결정되도록 초점의 x좌표가 $k$의 일차식이어야 하고, $k>0$ 이라야 $8k$의 부호가 유지돼 포물선이 성립함(k=0이면 포물선이 아님 — 이 경계를 빠뜨리지 말 것)."
    creative: "(1) 초점이 $x$축 위라는 조건으로 바꾸면 $3k=0$ 에서 $k=0$ 이 되어 포물선이 소멸 — 경계 함정 문항(★3 · I-VF) (2) 준선이 y축이 되는 k를 묻기(★2) (3) 꼭짓점이 특정 직선 위에 오도록 조건을 걸면 ★3."
```

```yaml
- id: GN-GEO-19-20
  page: 19
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    두 포물선 $y^2-4x+2ay+9=0$, $x^2-2x-8y+b=0$의 꼭짓점이 직선 $y=x$에 대하여 대칭일 때 $b-a$의 값.
  category: "두 일반형 → 꼭짓점 → y=x 대칭을 좌표 교환으로 → 연립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'직선 y=x 에 대하여 대칭' 조건을 '두 꼭짓점의 x좌표와 y좌표를 맞바꾼 것이 같다'는 두 등식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 포물선 꼭짓점의 직선 y=x 대칭 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 식을 각각 완전제곱해 꼭짓점 $((9-a^2)/4,\,-a)$와 $(1,\,(b-1)/8)$을 얻는다. 대칭 조건을 좌표 교환으로 번역하면 $-a=1$이 먼저 결정되고 그 값을 다른 등식에 넣어 $b$가 나오는 순차 구조. 완전제곱 두 번이 주된 노동이고 번역은 한 줄(EQV d1) → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "각 식 완전제곱 → 두 꼭짓점 → y=x 대칭 = 좌표 맞바꿈 → a=-1, b=17 → b-a=18"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$18$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/19-20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 식의 일차항·상수항을 바꿀 수 있음. 제약: 첫 식의 꼭짓점 x좌표에 $a^2$이 들어가 있어 $a$가 두 값이 될 위험이 있는데, 여기서는 다른 등식이 $-a=1$로 $a$를 먼저 확정해 주므로 경우 분기가 생기지 않음. 이 순서를 깨면 I-MI가 붙어 난도가 오름."
    creative: "(1) 대칭축을 $x$축·$y$축·원점으로 바꾸기(★2 유지) (2) $a$가 먼저 확정되지 않도록 식을 고치면 두 경우 분기가 생겨 ★3 (3) 두 꼭짓점 사이 거리나 중점이 특정 점이 되는 조건으로 바꾸기(★3)."
```

```yaml
- id: GN-GEO-19-21
  page: 19
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    축이 $x$축에 평행하고 세 점 $(0,0)$, $(0,2)$, $(-1,1)$을 지나는 포물선의 초점의 좌표.
  category: "대칭으로 축 확정 → 꼭짓점 → 4p → 초점"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x좌표가 같은 두 점 (0,0), (0,2) 는 축에 대하여 대칭이므로 축이 y=1 임을 즉시 확정 — 미정계수 연립을 한 개 줄임"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "세 점을 지나고 축이 좌표축에 평행한 포물선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $(y-n)^2=4p(x-m)$에 세 점을 넣어 연립해도 풀리지만, 두 점의 x좌표가 같다는 데서 축이 $y=1$임을 읽으면 남은 점 $(-1,1)$이 곧 꼭짓점이라 계산이 거의 사라진다(SYM d2). 두 갈래 중 대칭 갈래가 현저히 빠른 구조. 통찰 1개 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "두 점의 x좌표 일치 → 축 y=1 → 꼭짓점 (-1,1) → (0,0) 대입해 4p=1 → 초점 (-3/4,1)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\left(-\dfrac{3}{4},\,1\right)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/19-21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 점의 좌표를 바꿀 수 있음. 제약: 두 점의 x좌표를 같게 유지해야 대칭 갈래가 살아 있고, 세 번째 점이 그 두 점의 중점 높이에 있으면 꼭짓점이 되어 계산이 한 줄로 끝남. 세 점을 모두 비대칭으로 두면 3원 연립이 강제되어 ★3."
    creative: "(1) 대칭을 깨서 3원 연립을 강제하기(★3) (2) 축이 $y$축에 평행한 경우로 바꾸기(★2 유지) (3) 세 점을 지나는 포물선이 두 개 존재하도록 축 방향 조건을 빼면 I-MI가 붙어 ★3~4."
```

### 연습문제 STEP 2

```yaml
- id: GN-GEO-19-22
  page: 19
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    포물선 $y^2=kx$ 위의 점 P에서 $x$축에 내린 수선의 발을 H라 할 때, $\overline{PF}=4$이고 $\overline{PF}$가 $x$축의 양의 방향과 이루는 각이 $60^\circ$일 때 양수 $k$.
  category: "정의로 PF를 준선 거리로 → 삼각비로 수평 성분 → k 방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "PF = 4 를 'P의 x좌표 + k/4 = 4' 로 바꿔 미지수를 x좌표와 k 두 개로 줄임"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "60도 조건을 초점에서 P까지의 수평 성분 $4\\cos 60^\\circ$ 로 옮겨 x좌표를 k로 표현"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "초점거리와 각이 주어진 포물선의 미정계수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    초점은 $(k/4,0)$, 준선은 $x=-k/4$. 정의로 $x_P+k/4=4$, 삼각비로 $x_P-k/4=4\cos 60^\circ=2$. 두 식을 빼면 $k$가 바로 나온다. 정의 치환과 각의 수평 성분 분해 두 착안이 필요하나 골조 자체는 초점현 문제의 표준형이라 +1 후보였지만 STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "x_P + k/4 = 4 (정의) · x_P - k/4 = 4cos60 = 2 (삼각비) → 두 식 빼기 → k=4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: "crop:fig-19-22.png"
  latex: latex-bank/gn-geo/items/19-22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "PF 의 길이(4)와 각(60도)을 바꿀 수 있음. 제약: 각은 코사인 값이 유리수·간단한 무리수가 되는 30·45·60·120도 중에서 고르고, PF 는 $k/2$보다 커야 P가 실제로 존재함(PF 가 통경의 절반보다 작으면 배치가 불가능)."
    creative: "(1) 각을 둔각으로 바꾸면 수평 성분의 부호가 뒤집혀 T-부호 함정이 살아나 ★4 (2) k 대신 P의 좌표나 삼각형 PFH 의 넓이를 묻기(★3 유지) (3) 각 대신 $\\overline{PH}$ 의 길이를 주면 정의만으로 풀려 ★2."
```

```yaml
- id: GN-GEO-19-23
  page: 19
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    초점이 F인 포물선 $x^2=12y$ 위의 세 점 A, B, C로 만든 삼각형의 무게중심의 $y$좌표가 4일 때 $\overline{AF}+\overline{BF}+\overline{CF}$.
  category: "세 초점거리를 준선까지 거리의 합으로 → 무게중심 조건으로 y좌표 합 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 초점거리를 각각 준선 y=-3 까지의 거리 y+3 으로 바꿔 합을 (y좌표의 합)+9 로 환원"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "무게중심의 y좌표 4 라는 조건을 세 y좌표의 합 12 라는 단일 값으로 통합 — 세 점의 좌표를 따로 구할 필요가 없음"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "무게중심 조건과 초점거리의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 점의 좌표가 전혀 정해지지 않았는데 답이 결정된다는 점이 이 문항의 요지다. 정의로 초점거리를 y좌표+3 으로 바꾸고, 무게중심 조건이 세 y좌표의 합만 고정하므로 합이 $12+9$로 확정된다. 개별 좌표를 구하려 들면 막힌다. 통찰 2개 · 추상도 높음 → STEP 2 ★3.
  tier: star_3
  mechanism_primary: "AF+BF+CF = (y_A+y_B+y_C)+9 (정의) → 무게중심 조건으로 y좌표 합 = 12 → 21"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$21$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/19-23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(12)와 무게중심의 y좌표(4)를 바꿀 수 있음. 제약: 준선이 $y=-p$이므로 답은 (무게중심 y좌표)×3 + 3p 로 결정된다 — 두 수를 독립적으로 바꿔도 되지만 세 점이 실제로 존재하려면 무게중심의 y좌표가 0보다 커야 함."
    creative: "(1) 점의 개수를 넷으로 늘려 사각형의 무게중심으로 바꾸기(★3 유지) (2) 축이 $x$축에 평행한 포물선으로 바꿔 x좌표의 합을 쓰게 하기(★3) (3) 초점거리의 합을 주고 무게중심을 되묻는 역방향(★3 · I-BW)."
```

```yaml
- id: GN-GEO-20-24
  page: 20
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    초점이 F인 포물선 $y^2=16x$ 위의 점 P에 대하여 선분 FP를 지름으로 하는 원의 넓이가 $25\pi$일 때, 그 원의 중심에서 준선까지의 거리(5지선다).
  category: "원의 넓이 → 지름 FP → 중점에서 준선까지 = 두 끝점 거리의 평균"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "P에서 준선까지의 거리를 PF(=10) 로 바꿔 P의 좌표를 구하지 않고 값을 확보"
    - step: 3
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "FP 의 중점에서 준선까지의 거리를 사다리꼴 중선처럼 두 끝점의 준선까지 거리의 평균으로 옮김"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "초점을 지름의 끝점으로 하는 원과 준선까지의 거리"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    넓이 $25\pi$에서 반지름 5, 지름 $\overline{FP}=10$. 초점 $(4,0)$과 준선 $x=-4$ 사이 거리는 8, P에서 준선까지는 정의로 PF=10. 중심은 FP 의 중점이므로 준선까지 거리는 $(8+10)/2=9$. 좌표를 전혀 쓰지 않는 평균 논증이 요지. [분류 이슈] 기출 태그(+0~1)와 통찰 2개(+1 후보)가 겹쳐 ★4 후보였으나 각 단계가 한 줄이라 ★3 유지.
  tier: star_3
  mechanism_primary: "넓이 25π → 지름 FP=10 → P의 준선거리 10 · F의 준선거리 8 → 중점의 준선거리 = 평균 9"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '①'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/20-24.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(16)와 원의 넓이($25\\pi$)를 바꿀 수 있음. 제약: 지름 FP 는 통경의 절반(=$2p$)보다 커야 P가 존재하고, 넓이는 완전제곱꼴이라야 반지름이 정수로 떨어짐. 선택지는 답 9 주변으로 등차 배치."
    creative: "(1) 원이 준선에 접할 조건으로 바꾸면 방정식이 필요해 ★4 (2) 중심이 아니라 원 위의 점에서 준선까지의 최소 거리를 묻기(★4) (3) 원의 넓이 대신 둘레를 주기(★3 유지)."
```

```yaml
- id: GN-GEO-20-25
  page: 20
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    포물선 $x^2=4y$ 위의 제1사분면 위의 점 P에서 준선에 내린 수선의 발을 H라 할 때 $\angle FPH=60^\circ$이면 P의 좌표.
  category: "정의로 이등변 → 꼭지각 60도 → 정삼각형 → 좌표 연립"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "PF = PH (정의)이므로 삼각형 FPH 가 이등변이고 꼭지각이 60도이면 정삼각형이라는 형태 정보로 조건을 바꿈"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정삼각형 조건 FH = PH 를 좌표 거리식으로 옮겨 포물선의 식과 연립"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "정의로 만들어지는 정삼각형과 점의 좌표"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    PH 는 준선에 수직이므로 연직 방향이고 PF=PH 라서 삼각형 FPH 는 항상 이등변이다. 여기에 꼭지각 60도가 붙으면 정삼각형이 되어 FH 까지 같아진다. 이 형태 파악 없이 각의 코사인을 좌표로 직접 쓰려 하면 식이 무거워진다. 제1사분면 조건이 부호 함정을 막아 준다. STEP 2 ★3.
  tier: star_3
  mechanism_primary: "PF=PH (정의) + 꼭지각 60도 → 정삼각형 → FH=PH → 좌표식과 x^2=4y 연립 → (2√3,3)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$(2\sqrt{3},\,3)$'
  answer_source: "답지"
  figure: "crop:fig-20-25.png"
  latex: latex-bank/gn-geo/items/20-25.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(4)와 각(60도)을 바꿀 수 있음. 제약: 60도일 때만 정삼각형이라는 지름길이 생긴다 — 다른 각으로 바꾸면 이등변삼각형의 밑각 관계나 코사인법칙이 필요해 계산이 크게 무거워짐. 제1사분면 조건은 유지해야 답이 하나."
    creative: "(1) 제1사분면 조건을 빼면 좌우 대칭인 두 점이 답이 되어 I-MI 가 붙고 ★4 (2) 각을 90도로 바꾸면 삼각형이 직각이등변이 되어 계산이 쉬워져 ★2~3 (3) P의 좌표 대신 삼각형 FPH 의 넓이나 둘레를 묻기(★3 유지)."
```

```yaml
- id: GN-GEO-20-26
  page: 20
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    포물선 $y^2=4x$의 초점 F를 지나는 직선 $l$이 포물선과 두 점 A, B에서 만나고 $\overline{AF}:\overline{BF}=3:1$일 때 직선 $l$의 기울기(A는 제1사분면).
  category: "초점현을 준선까지 거리로 → 직각삼각형 구성 → 각으로 기울기"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "AF, BF 를 A, B에서 준선까지의 수평 거리로 바꿔 길이의 비를 준선 쪽 사다리꼴의 두 변의 비로 옮김"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "B에서 A의 수선에 내린 수선으로 직각삼각형을 만들어 밑변:빗변 = 2t:4t 에서 직선이 x축과 이루는 각을 60도로 읽고 기울기로 환산"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "초점을 지나는 현의 길이의 비와 직선의 기울기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $\overline{BF}=t$로 두면 $\overline{AF}=3t$, $\overline{AB}=4t$. 두 점에서 준선에 내린 수선의 길이가 각각 $3t$, $t$이므로 그 차 $2t$를 직각을 낀 변으로 하는 직각삼각형이 만들어지고 $\cos\theta=2t/4t=1/2$에서 $\theta=60^\circ$가 나와 기울기 $\tan 60^\circ$가 답. $t$를 구하지 않고 비만으로 각이 결정된다는 것이 핵심. 통찰 2개·M_total 8 → STEP 2 ★3에서 +1 → ★4.
  tier: star_4
  mechanism_primary: "BF=t·AF=3t → 준선까지 수평거리 차 2t · AB=4t → cosθ=1/2 → θ=60도 → 기울기 √3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\sqrt{3}$'
  answer_source: "답지"
  figure: "crop:fig-20-26.png"
  latex: latex-bank/gn-geo/items/20-26.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(4)와 비(3:1)를 바꿀 수 있음. 제약: 답의 각은 비에만 의존하므로 계수는 답을 바꾸지 않는다(변형 시 착각하기 쉬운 지점). 비를 $m:n$으로 두면 $\\cos\\theta=(m-n)/(m+n)$ 이라 특수각이 나오는 비는 3:1(60도)·2+√3 계열뿐이니 무리수 답을 피하려면 3:1을 유지할 것."
    creative: "(1) 기울기 대신 초점현의 길이 AB 를 묻기(★3 · 통경과 비 관계) (2) A가 제1사분면이라는 조건을 빼면 기울기가 ±두 값이 되어 ★4 유지·I-MI 추가 (3) 비를 주고 삼각형 OAB 의 넓이를 묻기(★4~5 · 좌표를 모두 구해야 함)."
```

```yaml
- id: GN-GEO-20-27
  page: 20
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    포물선 $x^2-8y+16=0$ 위를 움직이는 점 P와 원점 O에 대하여 선분 OP의 중점 Q가 나타내는 도형의 방정식.
  category: "중점 조건 역대입 → 매개 소거 → 자취"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구하는 점 Q를 (x,y)로 두고 중점 조건을 거꾸로 써서 P를 (2x,2y)로 표현한 뒤 원래 식에 대입 — 자취 문제의 방향 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "포물선 위의 점과 원점을 잇는 선분의 중점의 자취"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    P의 좌표를 문자로 두고 Q를 그 절반으로 쓰는 순방향보다, Q를 $(x,y)$로 두고 $P(2x,2y)$를 원식에 넣는 역방향이 짧다. $x^2=8(y-2)$에 대입하면 $4x^2=8(2y-2)$가 되고 정리해 $x^2=4(y-1)$. 자취의 방향 전환이 유일한 착안이고 나머지는 대입 정리라 STEP 2 ★3 유지. [분류 이슈] 골조가 한 갈래라 ★2 후보와 경합.
  tier: star_3
  mechanism_primary: "Q=(x,y) → P=(2x,2y) → 원식 대입 → 정리해 x^2=4(y-1)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$x^2=4(y-1)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/20-27.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원래 포물선의 계수(8)와 상수항(16), 중점 대신 내분비(1:1)를 바꿀 수 있음. 제약: 내분비를 $m:n$으로 바꾸면 P의 좌표가 $((m+n)/m)(x,y)$ 꼴이 되어 계수가 유리수로 떨어지도록 비를 고를 것. 기준점을 원점이 아닌 점으로 옮기면 평행이동 항이 추가로 붙음."
    creative: "(1) 중점을 내분점 2:1 로 바꾸기(★3 유지) (2) 기준점 O를 초점으로 바꾸면 자취가 다시 포물선이 되는 성질을 확인시킬 수 있어 ★3~4 (3) 자취의 초점·준선까지 묻기(★3 · 계산 한 단계 추가)."
```

### 연습문제 실력 UP

```yaml
- id: GN-GEO-20-28
  page: 20
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["수능 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    포물선 $y^2=8x$ 위의 점 A에서 준선에 내린 수선의 발을 B, 직선 BF가 포물선과 만나는 두 점을 C, D라 할 때 $\overline{BC}=\overline{CD}$이면 삼각형 ABD의 넓이(5지선다, $\overline{CF}<\overline{DF}$).
  category: "준선 거리 평균으로 CF:DF → 초점현 관계로 길이 확정 → 좌표화 후 넓이"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "C, D의 초점거리를 준선까지의 거리로 바꾸고 B가 준선 위(거리 0)라는 점을 이용"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "BC = CD 를 'C가 BD의 중점' 으로 통합해 C의 준선거리가 D의 준선거리의 절반, 즉 DF = 2CF 라는 단일 관계로 축약"
    - step: 3
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "초점현 관계에서 CF, DF 를 확정한 뒤 BF 의 길이와 수평 성분으로 A의 좌표를 복원해 넓이를 밑변×높이로 환산"
  insight_count: 3
  depth_score: 2.00
  type_id: null
  type_hint: "초점현의 비와 준선을 이용한 넓이"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    B가 준선 위에 있다는 점과 C가 BD의 중점이라는 점을 결합하면 준선까지의 거리가 절반 관계가 되어 DF=2CF 가 나오고, 초점현 관계로 CF·DF 가 확정된다. 그 뒤 BF 의 수평 성분이 4로 고정돼 있으므로 B의 y좌표, 따라서 A의 좌표와 $\overline{AB}$ 가 복원된다. 단계가 길고 함정도 둘(순서 CF<DF·A가 원점 아님)이라 M_total 10. 통찰 3개지만 SC/VF/SYM/XU 가 없어 ★5 불가 → 실력 UP ★4.
  tier: star_4
  mechanism_primary: "C는 BD의 중점 → 준선거리 평균 → DF=2CF → 초점현 관계로 CF·DF 확정 → BF 수평성분 4 로 A 복원 → 넓이"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/20-28.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수(8)와 비 조건(BC=CD)을 바꿀 수 있음. 제약: 계수를 바꾸면 초점과 준선 사이 거리가 함께 바뀌어 CF·DF·A의 좌표가 모두 연동되므로 선택지를 다시 계산해야 함. BC:CD 를 1:1 이 아닌 값으로 바꾸면 준선거리 평균 논증이 가중평균으로 바뀌어 난도가 더 오름."
    creative: "(1) 넓이 대신 $\\overline{AB}$ 나 직선 BF 의 기울기를 묻기(★4 유지) (2) CF<DF 조건을 빼면 두 배치를 모두 검증해야 해 I-VF 가 붙고 ★5 후보 (3) 삼각형 ABD 대신 사각형 ABDC 의 넓이로 바꾸기(★4 · 계산 부담만 증가하므로 권장하지 않음)."
```

```yaml
- id: GN-GEO-20-29
  page: 20
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    두 점 $A(0,-1)$, $B(3,-5)$와 포물선 $x^2+4y=0$ 위의 점 P에 대하여 삼각형 ABP의 둘레의 길이의 최솟값.
  category: "A가 초점임을 알아채기 → AP를 준선 거리로 → B에서 준선까지 수직 거리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A(0,-1) 이 포물선 $x^2=-4y$ 의 초점임을 알아채고 AP 를 P에서 준선 y=1 까지의 거리로 바꿈"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "AB 는 고정이므로 AP+BP 만 최소화하면 되고, 그 최소는 B에서 준선에 내린 수선의 길이라는 기하 배치로 옮김"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "초점이 꼭짓점인 삼각형 둘레의 최솟값"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    삼각형의 둘레라는 표현에 가려 있지만 $\overline{AB}=5$ 는 상수이고 남는 것은 18-16과 같은 골조다. A가 초점임을 먼저 확인해야 정의를 쓸 수 있고, B가 포물선 내부여야 수선이 포물선과 만난다. 둘레 = 5 + (B에서 준선까지 수직 거리 6). 통찰 2개지만 SC/VF/SYM/XU 가 없어 ★5 불가 → 실력 UP ★4.
  tier: star_4
  mechanism_primary: "A = 초점 확인 → AP = P에서 준선 y=1 까지 거리 → 둘레 = AB + (AP+BP) 최소 = 5 + 6"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/20-29.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선의 계수(4)와 B의 좌표를 바꿀 수 있음. 제약: A는 계수에서 나오는 초점 좌표와 반드시 일치해야 하고(연동 제약), B는 포물선 내부여야 하며, AB 가 정수로 떨어지도록 3-4-5 같은 직각삼각형 배치를 유지하면 답이 깔끔함."
    creative: "(1) B를 포물선 외부에 두면 최소 배치가 달라져 검증 단계가 생기고 ★5 후보 (2) 둘레 대신 넓이의 최솟값으로 바꾸면 완전히 다른 골조(점과 직선 거리)가 되어 ★4 (3) 최솟값을 주고 B의 좌표를 되묻는 역방향(★4 · I-BW)."
```

## 표본 판정 요약 (34문)

- ★ 분포: ★1 8 · ★2 13 · ★3 10 · ★4 3 · ★5 0
- 통찰형 16 · 절차형 18 · premium 0
- 구역별: 개념원리 익히기 4(모두 ★1) · 필수·발전 예제 18(★1 4 · ★2 9 · ★3 5) · STEP 1 4(모두 ★2) · STEP 2 6(★3 5 · ★4 1) · 실력 UP 2(모두 ★4)
- 통찰 유형 빈도: I-EQV 14 · I-RT 9 · I-CON 3 · I-MI 1 · I-BW 1 · I-SYM 1 (I-XU · I-PD · I-SC · I-VF 0 — 그래서 이 범위에 ★5 가 없다)
- type_hint 상위: 「정의를 이용한 선분 길이의 합·최솟값」 계열 5 · 「초점·준선에서 평행이동 표준형 세우기」 3 · 「일반형 → 표준형 변형」 3 · 「초점·준선으로 표준형 세우기」 2 · 「포물선의 정의로 자취」 2
- 그림: 7문(`crop:fig-17-e4.png` · `crop:fig-17-15.png` · `crop:fig-18-16.png` · `crop:fig-18-17.png` · `crop:fig-19-22.png` · `crop:fig-20-25.png` · `crop:fig-20-26.png`)
- 전사 답과 골조가 어긋난 문항: 없음

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-GEO-14-7 | 두 포물선의 초점을 결합하지만 각 계산이 한 줄씩이라 ★1/★2 경계. 확인체크 유제 출발점에서 −1 을 적용해 ★1 로 둠 | ★1 / ★2 |
| GN-GEO-16-13 | 벤더는 확인체크(유제)인데 역추적(BW)+두 경우(MI) 두 통찰이 필요해 ★3 으로 판정. 같은 구역의 다른 확인체크보다 1~2단 높음 | ★2 / ★3 |
| GN-GEO-17-15 | 유제(★3)가 대응 필수 예제 17-e4(★2)보다 높게 판정됨. 초점현을 별도 유형으로 세울지 카탈로그 설계 때 결정 | ★2 / ★3 |
| GN-GEO-20-24 | 교육청 기출 태그(+0~1)와 통찰 2개(+1 후보)가 겹쳐 ★4 후보였으나 각 단계가 한 줄이라 ★3 유지 | ★3 / ★4 |
| GN-GEO-20-27 | STEP 2 구역이나 골조가 중점 역대입 한 갈래뿐이라 ★2 후보와 경합. 구역 출발점을 존중해 ★3 유지 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **반복된 type_hint** — ① 「포물선의 정의로 자취의 방정식」(14-e1·14-5) ② 「일반형 → 평행이동 표준형 → 꼭짓점·초점·준선」(13-4·15-e2·15-8) ③ 「초점·준선에서 꼭짓점과 4p 를 읽어 표준형 세우기」(16-e3·16-11·16-12) ④ 「정의를 이용한 선분 길이의 합·최솟값」(17-e4·18-e5·18-16·18-17·20-29).
- **따로 세워야 할 유형** — 「초점을 지나는 현(초점현)」은 17-15·19-22·20-24·20-26·20-28 다섯 문항이 공유하는 독립 골조이고 ★3~4 대를 담당하므로 정의 활용과 분리해 별도 유형으로 세울 것. 「자취(중점·내분점)」도 20-27 하나뿐이지만 도구가 달라 별도 유형이 맞다.
- **통합해도 될 유형** — 「초점·준선으로 표준형 세우기」(13-1)와 「초점·준선에서 꼭짓점과 4p 읽기」(16-e3 계열)는 꼭짓점이 원점이냐 아니냐의 차이뿐이므로 base ★ 를 1과 2로 나눈 한 유형의 두 난이도로 묶는 편이 낫다. 「최솟값」 계열(18-e5·18-16·18-17·20-29)도 치환 방향만 다를 뿐 골조가 같아 한 유형 + 변형 축(치환 방향·기준점이 초점인지)으로 정리할 수 있다.
- **base ★ 제안** — 정의·표준형 계열 1~2, 일반형 변형 2, 초점·준선 평행이동 2, 정의 활용 최솟값 3, 초점현 3~4, 자취 3.
