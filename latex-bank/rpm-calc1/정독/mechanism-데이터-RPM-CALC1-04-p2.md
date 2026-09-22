---
name: mechanism-데이터-RPM-CALC1-04-p2
description: RPM 미적분Ⅰ 04 도함수의 활용 (1)(2/2 · 유형 07 곡선 밖의 점에서 그은 접선 ~ 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅰ (22개정) · 전사본 latex-bank/rpm-calc1
  section: 04 도함수의 활용 (1)
  unit_code: CALC1-04
  part: "2/2"
  extract_range: "59~63쪽 · 0367~0404"
  total_problems: 38
  unit_total: 75
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc1/items/<id>.tex
  image_source: latex-bank/rpm-calc1/figures/ (crops.json)
---

# RPM 미적분Ⅰ · 04 도함수의 활용 (1) (2/2) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅰ 04 도함수의 활용 (1) 단원(75문) 가운데 59~63쪽의 38문항(0367~0404)을 다룬다. 구역은 유형 07 곡선 밖의 점에서 그은 접선의 방정식(4문) · 유형 08 두 곡선에 동시에 접하는 직선(4문) · 유형 09 접선과 좌표축으로 둘러싸인 도형의 넓이(4문) · 유형 10 롤의 정리(3문) · 유형 11 평균값 정리(4문) · 유형 UP 12 곡선 밖의 점에서 그은 접선의 방정식의 활용(3문) · 시험에 꼭 나오는 문제(12문) · 서술형 주관식(2문) · 실력 Up(2문) 순이다. 각 유형의 첫 문항은 「대표문제」 태그(난이도 표시 없음 → ★2 출발), 나머지는 중·상중 난이도 표시(★2 · ★3 출발)와 「서술형」 태그를 가진다. 유형 UP 은 ★3, 시험에 꼭 나오는 문제는 난이도 표시가 없어 ★2 출발(d2 통찰 · 기출과 매개변수 결합 · M_total 8 이상이면 ★3), 서술형 주관식은 ★3, 실력 Up 은 ★4 출발로 두었다. 그림 문항은 0388 · 0391 · 0393 세 문이며 모두 크롭 이미지로 확인했다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(유형 코드 · depth · effective_depth · 근거) · `variation_notes`(numeric/creative)를 채웠다. `depth_score` 는 insights 의 effective_depth 평균(없으면 0.00)이고, `insight_type` 은 통찰이 없거나 d1 한 개뿐이면 절차형, d2 이상 또는 2개 이상이면 통찰형으로 적었다. Mₜ 는 함정 0~1개면 1, 2~3개면 2 로 매겨 M_total 은 4 이상이다. 출발점 조정은 「통찰 0 · M_total 4」인 대표문제만 −1(★1) 하고, M_total 5 는 유형 기본 절차(조건 연립)가 남아 있으면 출발점을 유지했다. 이 구역의 「곡선 밖의 점」 문항은 모두 접점 t 를 잡아 접선식에 외부점을 대입하는 한 골조를 공유하므로, 통찰은 그 뒤에 무엇을 하느냐(근과 계수 · 개수 조건 · 도형)로만 매겼다.

## 문항 데이터

### 유형 07 곡선 밖의 점에서 그은 접선의 방정식

```yaml
- id: RPM-CALC1-0367
  page: 59
  vendor_label: "유형 07 곡선 밖의 점에서 그은 접선의 방정식"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    점 $(0,\,1)$ 에서 곡선 $y=x^3-x+3$ 에 그은 접선의 $x$절편.
  category: "접점 t 설정 → 접선식에 외부점 대입 → t 결정 → x절편"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선 밖의 점에서 그은 접선의 방정식(접점 설정·외부점 대입)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접점 $(t,\,t^3-t+3)$ 에서의 접선 $y=(3t^2-1)(x-t)+t^3-t+3$ 에 $(0,\,1)$ 을 넣으면 일차항이 소거되어 $2t^3=2$, $t=1$ 하나로 떨어진다. 접선 $y=2x+1$ 의 $x$절편 $-\dfrac12$.
    외부점이 $y$축 위라 접선이 하나뿐인 가장 기본형. 유형 대표문제·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "접점 t 설정 → 접선식에 (0,1) 대입 → 2t³=2 → t=1 → 접선 y=2x+1 → x절편 −1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0367.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선 y=x³+px+q 와 y축 위의 외부점 (0,c) 조합은 대입식이 c=q−2t³ 로 정리되어 t³=(q−c)/2 한 줄. 제약: (q−c)/2 가 정수의 세제곱(±1, ±8)이어야 t 가 정수로 떨어지고, x절편이 유리수가 되도록 기울기 3t²+p ≠ 0."
    creative: "(1) x절편 대신 y절편·접점 좌표·접선과 곡선의 다른 교점 묻기(★2 유지) (2) 외부점을 y축 밖 (p,c) 로 옮기면 t 방정식이 일반 삼차가 되어 접선 개수 조건 문제로 확장(유형 UP 12 골조 ★3) (3) 접선이 또 다른 점을 지나는 조건으로 좌표 미지수 묻기(0397 골조 ★2)."
```

```yaml
- id: RPM-CALC1-0368
  page: 59
  vendor_label: "유형 07 곡선 밖의 점에서 그은 접선의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    점 $(-1,\,-1)$ 에서 곡선 $y=x^2+x$ 에 그은 두 접선의 기울기의 곱.
  category: "접점 t 설정 → 외부점 대입 → 이차방정식 두 근 → 기울기 곱"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선 밖의 점에서 그은 두 접선의 기울기·접점(근과 계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접점 $(t,\,t^2+t)$ 의 접선에 $(-1,\,-1)$ 을 대입하면 $t^2+2t=0$, $t=0,\,-2$. 기울기 $2t+1$ 은 $1,\,-3$ 이므로 곱 $-3$.
    두 근이 바로 구해져 근과 계수의 관계까지 갈 필요가 없다. 유형 중·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "접점 t 설정 → (−1,−1) 대입 → t²+2t=0 → t=0,−2 → 기울기 1·(−3) → 곱 −3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0368.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선 y=x²+x 와 외부점 (p,q) 의 접점 방정식은 t²−2pt+(q−p)=0 이고 기울기의 곱은 4q+1 로 p 와 무관. 제약: 외부점이 포물선 아래(q<p²+p, 판별식 양수)여야 접선이 둘이고, 접점을 직접 구하게 하려면 p²+p−q 가 완전제곱수."
    creative: "(1) 기울기의 합(=4p+2)·접점의 x좌표 곱을 묻고 근과 계수의 관계로 풀게 하면 I-RT d1 추가(★2 유지) (2) 기울기의 곱이 −1(수직) 이 되는 외부점 조건 → q=−1/2(준선) 결정(0370 골조 ★3) (3) 곡선을 삼차로 바꾸면 접점 방정식이 삼차 → 접선 개수 논의가 붙어 ★3."
```

```yaml
- id: RPM-CALC1-0369
  page: 59
  vendor_label: "유형 07 곡선 밖의 점에서 그은 접선의 방정식"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    점 $(3,\,0)$ 에서 곡선 $y=-x^3+3x^2-4$ 에 그은 세 접선의 접점 $x$좌표 $x_1,x_2,x_3$ 의 곱.
  category: "접점 t 설정 → 외부점 대입 → 삼차방정식 → 근과 계수의 관계로 곱"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접점 삼차방정식 t³−6t²+9t−2=0 의 세 근을 구하지 않고 근과 계수의 관계로 곱 2 를 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곡선 밖의 점에서 그은 두 접선의 기울기·접점(근과 계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선 $y=(-3t^2+6t)(x-t)-t^3+3t^2-4$ 에 $(3,\,0)$ 을 대입해 정리하면 $t^3-6t^2+9t-2=0$. 세 접점이 이 삼차방정식의 세 실근이므로 곱은 상수항에서 $2$.
    삼차의 근이 유리수가 아니라 근과 계수의 관계가 사실상 유일한 길(RT d1). 유형 중·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "접점 t 설정 → (3,0) 대입 → t³−6t²+9t−2=0 → 세 근의 곱 = 2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0369.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "외부점 (p,q) 로 바꾸면 접점 방정식이 2t³−3(p+1)t²+6pt−(q+4)=0 이고 곱은 (q+4)/2. 제약: 이 삼차가 서로 다른 세 실근을 가져야(접선 3개) 발문이 성립하므로 p,q 를 바꾼 뒤 극값 부호를 확인."
    creative: "(1) 합 x₁+x₂+x₃(=3(p+1)/2) 이나 제곱합을 묻기(근과 계수 두 번 ★3) (2) 접선이 3개 존재하는 (p,q) 조건 자체를 묻기 → 삼차 실근 개수 → 유형 UP 12·도함수의 활용 (2) 결합 ★4 (3) 세 접점 중 x좌표가 가장 큰 접점에서의 접선의 방정식(근을 직접 구해야 해 삼차 인수분해가 되는 수로 재설계 ★2)."
```

```yaml
- id: RPM-CALC1-0370
  page: 59
  vendor_label: "유형 07 곡선 밖의 점에서 그은 접선의 방정식"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    점 $(0,\,a)$ 에서 곡선 $y=\dfrac14x^2+1$ 에 그은 두 접선이 서로 수직일 때 $a$ 의 값.
  category: "접점 t 설정 → 외부점 대입 → t² 관계 → 기울기 곱 −1 → a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 접선이 수직 ⇔ 기울기 곱 (t₁/2)(t₂/2)=−1 ⇔ 접점 방정식의 두 근의 곱 t₁t₂=−4 로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곡선 밖의 점에서 그은 두 접선의 기울기·접점(근과 계수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접점 $\left(t,\,\dfrac{t^2}4+1\right)$ 의 접선에 $(0,\,a)$ 를 대입하면 $t^2=4(1-a)$ 이고 두 접점은 $t=\pm2\sqrt{1-a}$. 기울기 $\dfrac t2$ 의 곱 $-\,(1-a)=-1$ 에서 $a=0$.
    수직 조건을 근의 곱으로 옮기는 착안 한 번(EQV d1) 뒤는 한 줄. 매개변수 $a$ 로 Mₐ 2. 유형 상중 출발 ★3, 조정 근거 없음 → ★3 유지.
  tier: star_3
  mechanism_primary: "접점 t 설정 → (0,a) 대입 → t²=4(1−a) → 기울기 곱 t₁t₂/4=−(1−a)=−1 → a=0"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0370.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선 y=kx²+m (k>0) 에서 y축 위의 점 (0,a) 의 두 접선이 수직일 조건은 a=m−1/(4k) (포물선의 준선). 제약: a<m 이 자동으로 성립하므로 k,m 만 바꾸면 되고, 답이 정수가 되게 1/(4k) 를 정수로."
    creative: "(1) 외부점을 (p,a) 로 일반화해도 t₁t₂ 가 p 와 무관해 답이 같음을 보이게 하면 준선 발견형(I-PD d2 ★4) (2) 수직 대신 기울기 곱이 주어진 값 k 일 때 a(★3 유지) (3) 두 접점을 잇는 직선의 방정식을 묻기(극선 · 근과 계수 두 번 ★3~4)."
```

### 유형 08 두 곡선에 동시에 접하는 직선

```yaml
- id: RPM-CALC1-0371
  page: 59
  vendor_label: "유형 08 두 곡선에 동시에 접하는 직선"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    두 곡선 $y=x^3+2x^2$, $y=-x^2+4$ 가 한 점에서 공통인 접선을 가질 때 그 접선의 방정식.
  category: "공통 접점 t → 함숫값 일치·기울기 일치 연립 → t → 접선"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 곡선의 공통접선(접점에서 함숫값·기울기 일치)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접점 $x=t$ 에서 $t^3+2t^2=-t^2+4$ 즉 $(t-1)(t+2)^2=0$ 과 $3t^2+4t=-2t$ 즉 $t=0,\,-2$ 를 동시에 만족하는 $t=-2$. 접점 $(-2,\,0)$, 기울기 $4$ → $y=4x+8$.
    두 조건을 세우는 유형 표준 골조. 대표문제·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "공통 접점 t → f(t)=g(t)·f'(t)=g'(t) 연립 → t=−2 → 기울기 4 → y=4x+8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=4x+8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0371.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점 t 를 먼저 정하고 두 곡선의 상수항을 역산하면 안전(예: t=−2 고정 후 y=−x²+r 의 r). 제약: 두 조건의 공통근이 하나뿐이어야 하고, 기울기 일치식 f'(t)=g'(t) 의 다른 근이 함숫값 일치식을 만족하지 않도록 확인."
    creative: "(1) 접선 대신 접점의 좌표·접선의 y절편 묻기(★2) (2) 한 곡선에 미정계수를 두고 공통접선 존재 조건으로 계수 결정(0374 골조 ★2~3) (3) 「한 점에서」를 빼고 서로 다른 두 점에서 각각 접하는 공통접선 → 미지수 둘·연립 4식 ★4."
```

```yaml
- id: RPM-CALC1-0372
  page: 59
  vendor_label: "유형 08 두 곡선에 동시에 접하는 직선"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 곡선 $y=x^2+ax+b$, $y=-x^2+c$ 가 점 $(1,\,3)$ 에서 접할 때 $a-b-c$ 의 값. 5지선다.
  category: "접점 대입 두 식 → 미분계수 일치 → 연립 → a, b, c"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 곡선이 주어진 점에서 접할 조건(미정계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $(1,\,3)$ 을 두 식에 대입해 $a+b=2$, $c=4$; 미분계수 일치 $2+a=-2$ 에서 $a=-4$, $b=6$. $a-b-c=-14$ → ①.
    조건 세 개가 각각 한 줄이라 M_total 5. 유형 중 출발 ★2, 연립 골조가 남아 −1 후보를 적용하지 않고 ★2 유지.
  tier: star_2
  mechanism_primary: "(1,3) 두 식 대입 → c=4·a+b=2 → f'(1)=g'(1) → a=−4 → b=6 → a−b−c=−14"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0372.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점 (p,q) 와 이차 계수 부호를 바꿔도 세 식이 모두 일차. 제약: 미분계수 일치식 2p+a=−2p 에서 a 가 정수, 선택지 간격이 유지되도록 a−b−c 재계산."
    creative: "(1) 접점의 y좌표를 숨기고 「x=1 에서 접한다」로 주면 미지수 4개·식 3개 → 묻는 식이 결정되는지 확인 필요(★2) (2) 두 곡선의 차 (2x²+(a)x+b−c) 가 중근을 갖는다는 판별식 풀이와 미분 풀이를 비교하게 하면 I-SC d1 추가 ★3 (3) 접하고 그 접선이 원점을 지나는 조건까지 → ★3."
```

```yaml
- id: RPM-CALC1-0373
  page: 59
  vendor_label: "유형 08 두 곡선에 동시에 접하는 직선"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 곡선 $y=x^3-ax$, $y=x^2+bx+c$ 가 점 $(1,\,-1)$ 에서 만나고 그 점에서의 접선이 서로 수직일 때 $abc$ 의 값.
  category: "점 대입 두 식 → 미분계수 곱 −1 → 연립 → abc"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 곡선이 주어진 점에서 접할 조건(미정계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $(1,\,-1)$ 대입으로 $a=2$, $b+c=-2$; $f'(1)=3-a=1$ 과 $g'(1)=2+b$ 의 곱이 $-1$ 이므로 $b=-3$, $c=1$. $abc=-6$.
    0372 와 같은 골조에서 접함 대신 수직 조건. 유형 중·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "(1,−1) 대입 → a=2·b+c=−2 → f'(1)·g'(1)=−1 → b=−3 → c=1 → abc=−6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0373.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "교점 (p,q) 와 계수 자리를 바꿀 수 있음. 제약: 수직 조건에서 g'(p)=−1/f'(p) 로 나누므로 f'(p) ≠ 0 이고 b 가 정수가 되게 f'(p)=±1 로 설계."
    creative: "(1) 수직 대신 평행(f'(1)=g'(1)) → 0372 골조(★2) (2) 두 접선의 기울기 곱을 상수 k 로 주기(★2) (3) 교점을 x=p 로 매개변수화해 abc 를 p 의 식으로 → Mₐ 상승 ★3."
```

```yaml
- id: RPM-CALC1-0374
  page: 59
  vendor_label: "유형 08 두 곡선에 동시에 접하는 직선"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    두 곡선 $y=x^3+ax+1$, $y=x^2$ 이 한 점에서 접할 때 상수 $a$ 의 값. 서술형.
  category: "접점 t → 기울기 일치로 a=2t−3t² → 함숫값 일치에 대입 → t → a"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 곡선의 공통접선(접점에서 함숫값·기울기 일치)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접점 $t$ 에서 $3t^2+a=2t$ 로 $a=2t-3t^2$ 을 만들어 $t^3+at+1=t^2$ 에 넣으면 $2t^3-t^2-1=0$, $(t-1)(2t^2+t+1)=0$ 에서 $t=1$, $a=-1$.
    미지수 $a$ 를 기울기 조건으로 먼저 소거하는 순서가 핵심이지만 유형 표준. 유형 중·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "접점 t → f'(t)=g'(t) 로 a=2t−3t² → f(t)=g(t) 에 대입 → 2t³−t²−1=0 → t=1 → a=−1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0374.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차의 상수항·이차 곡선의 계수를 바꿀 수 있음. 제약: a 소거 후 t 삼차방정식의 실근이 하나(나머지 이차 인수의 판별식 음수)여야 a 가 유일하고, 그 실근이 정수여야 서술형 답안이 깔끔함."
    creative: "(1) 접점의 좌표·공통접선의 방정식 묻기(★2) (2) a 의 값의 개수를 묻게 하면 t 삼차의 실근 개수 논의 → ★3 (3) 두 곡선 모두에 미정계수를 두고 접점이 주어진 경우로 바꾸면 0372 골조로 하강 ★2."
```

### 유형 09 접선과 좌표축으로 둘러싸인 도형의 넓이

```yaml
- id: RPM-CALC1-0375
  page: 60
  vendor_label: "유형 09 접선과 좌표축으로 둘러싸인 도형의 넓이"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    곡선 $y=-\dfrac12x^2$ 위의 점 $(2,\,-2)$ 에서의 접선과 $x$축·$y$축으로 둘러싸인 도형의 넓이. 5지선다.
  category: "접선의 방정식 → 두 절편 → 직각삼각형 넓이"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선과 좌표축으로 둘러싸인 도형의 넓이"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    기울기 $-2$, 접선 $y=-2x+2$, 절편 $1$ 과 $2$ → 넓이 $1$ → ①.
    접선식·절편·넓이 세 단계뿐이고 M_total 4. 대표문제 출발 ★2 에서 통찰 0·M_total 4 로 −1 → ★1.
  tier: star_1
  mechanism_primary: "y'=−x → 기울기 −2 → 접선 y=−2x+2 → 절편 1, 2 → 넓이 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0375.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선 y=kx² 위의 점 (p,kp²) 에서의 접선은 절편이 p/2, −kp² 라 넓이가 |k|p³/4. 제약: 넓이가 선택지의 정수가 되게 |k|p³ 을 4 의 배수로, 접점은 축 위가 아니어야(p ≠ 0)."
    creative: "(1) 넓이가 주어진 값일 때 접점의 x좌표 역산(I-BW d1 ★2) (2) 접선·법선·x축 삼각형으로 바꾸면 0399 골조(★2) (3) 접점을 매개변수로 두고 넓이 S(p) 의 최솟값 → 도함수의 활용 (2) 결합 ★3."
```

```yaml
- id: RPM-CALC1-0376
  page: 60
  vendor_label: "유형 09 접선과 좌표축으로 둘러싸인 도형의 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    점 $\mathrm A(2,\,3)$ 에서 곡선 $y=-x^2+4x-2$ 에 그은 두 접선의 $x$절편을 $\mathrm B,\,\mathrm C$ 라 할 때 삼각형 $\mathrm{ABC}$ 의 넓이.
  category: "접점 t 설정 → 외부점 대입 → 두 접선 → x절편 두 개 → 삼각형 넓이"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선 밖의 점에서 그은 두 접선이 만드는 도형"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접점 $(t,\,-t^2+4t-2)$ 의 접선에 $(2,\,3)$ 을 대입하면 $t^2-4t+3=0$, $t=1,\,3$. 접선 $y=2x-1$, $y=-2x+7$ 의 $x$절편 $\dfrac12,\,\dfrac72$ 이므로 밑변 $3$·높이 $3$ → 넓이 $\dfrac92$.
    A 가 대칭축 $x=2$ 위라 두 접선이 대칭이지만 그대로 계산해도 짧다. 유형 중·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "접점 t 설정 → (2,3) 대입 → t=1,3 → 접선 y=2x−1·y=−2x+7 → x절편 1/2·7/2 → 넓이 9/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{9}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0376.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "외부점을 대칭축 위 (2,q) 로 두면 접점이 2±√(q−2) 로 대칭이고 q−2 가 완전제곱수면 정수. 제약: 위로 볼록이므로 외부점은 곡선 위쪽(q>f(2)=2)이어야 접선이 둘."
    creative: "(1) 외부점이 대칭축 위임을 이용해 x절편 하나만 구하고 대칭으로 마무리(I-SYM d1 ★2) (2) 삼각형 ABC 대신 A 와 두 접점이 만드는 삼각형(0388 골조 ★3) (3) A 를 (p,q) 로 일반화해 넓이의 최솟값 → ★4."
```

```yaml
- id: RPM-CALC1-0377
  page: 60
  vendor_label: "유형 09 접선과 좌표축으로 둘러싸인 도형의 넓이"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    $y=(x+a)(x-a)$ 의 그래프와 $x$축의 두 교점 $\mathrm A,\,\mathrm B$ 에서의 접선과 $x$축으로 둘러싸인 넓이가 $16$ 일 때 양수 $a$. 서술형.
  category: "교점 ±a → 두 접선 → 교점 (0, −2a²) → 넓이 2a³=16 → a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선과 좌표축으로 둘러싸인 도형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $y'=2x$ 이므로 $\mathrm A(-a,\,0)$, $\mathrm B(a,\,0)$ 의 접선은 $y=-2a(x+a)$, $y=2a(x-a)$ 이고 교점은 $(0,\,-2a^2)$. 밑변 $2a$·높이 $2a^2$ 로 넓이 $2a^3=16$, $a=2$.
    매개변수 $a$ 를 끝까지 끌고 가는 서술형이나 대칭 덕에 교점이 $y$축 위로 바로 떨어진다. 유형 중·통찰 없음·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "x절편 ±a → 접선 y=∓2a(x±a) → 교점 (0,−2a²) → 넓이 2a³=16 → a=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0377.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "넓이 상수를 2a³ 꼴의 값(2, 16, 54)으로 바꾸면 a 가 정수. 제약: 함수를 k(x+a)(x−a) 로 바꾸면 넓이가 2|k|a³ 이므로 k 도 함께 조정, a>0 조건 유지."
    creative: "(1) 함수를 (x+a)(x−b) 로 비대칭화하면 교점이 y축을 벗어나 좌표 계산이 늘어남(★2~3) (2) 두 접선의 교점 좌표만 묻기(★1~2) (3) 두 접선과 y축으로 둘러싸인 넓이 두 조각의 합으로 바꾸기(★2)."
```

```yaml
- id: RPM-CALC1-0378
  page: 60
  vendor_label: "유형 09 접선과 좌표축으로 둘러싸인 도형의 넓이"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $a>0$, 곡선 $y=a(x-1)^2-2$ 위의 점 $\mathrm A(0,\,a-2)$ 에서의 접선의 $x$절편을 $\mathrm P$ 라 할 때 삼각형 $\mathrm{OPA}$ 의 넓이 $S$ 에 대해 $\lim_{a\to0+}aS$.
  category: "접선 → x절편 (a−2)/(2a) → 넓이 S(a)=(2−a)²/(4a) → aS 극한"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선과 좌표축으로 둘러싸인 도형의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $y'(0)=-2a$ 로 접선 $y=-2ax+a-2$, $x$절편 $\dfrac{a-2}{2a}$. $a\to0+$ 근방에서 $a<2$ 이므로 $\overline{\mathrm{OP}}=\dfrac{2-a}{2a}$, $\overline{\mathrm{OA}}=2-a$ 로 $S=\dfrac{(2-a)^2}{4a}$, $aS=\dfrac{(2-a)^2}4\to1$.
    넓이를 $a$ 의 식으로 세우는 표준 절차에 부호 처리(T-부호·T-범위)가 얹혀 M_total 8. 통찰 없음이지만 상중 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "접선 y=−2ax+a−2 → P((a−2)/(2a),0) → S=(2−a)²/(4a) → aS=(2−a)²/4 → 극한 1"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0378.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꼭짓점을 (1,−m) 으로 두면 A(0,a−m), S=(m−a)²/(4a), aS→m²/4. 제약: a→0+ 에서 a<m 이 되게 m>0 이어야 절댓값 방향이 일정하고, 극한값이 유리수가 되게 m 은 정수."
    creative: "(1) 극한 없이 S 를 a 의 식으로만 묻기(★2) (2) a→∞ 로 바꾸면 S/a 의 극한 등 차수 비교가 붙어 ★3 유지 (3) 삼각형 대신 접선과 두 좌표축이 만드는 삼각형으로 바꾸면 절편 두 개를 a 로 표현 → ★3."
```

### 유형 10 롤의 정리

```yaml
- id: RPM-CALC1-0379
  page: 60
  vendor_label: "유형 10 롤의 정리"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    $f(x)=(x+2)(x-3)^2$ 에 대하여 닫힌구간 $[-2,\,3]$ 에서 롤의 정리를 만족시키는 $c$. 5지선다.
  category: "f(−2)=f(3)=0 확인 → f'(x) 인수분해 → 열린구간 안의 근"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "롤의 정리(c 구하기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f'(x)=(x-3)^2+2(x+2)(x-3)=(x-3)(3x+1)$ 이고 $x=3$ 은 구간의 끝점이라 제외, $c=-\dfrac13$ → ①.
    곱의 미분 뒤 공통인수로 묶는 계산(Mₖ 2)과 끝점 제외(T-경계)가 전부. 대표문제·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "f(−2)=f(3)=0 → f'(x)=(x−3)(3x+1) → 끝점 3 제외 → c=−1/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0379.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(x)=(x+p)(x−q)² 와 구간 [−p,q] 에서 c=(q−2p)/3. 제약: c 가 열린구간 (−p,q) 안에 있는 것은 자동이지만 선택지 간격에 맞게 q−2p 를 3 의 배수가 아니게 두면 분수 답."
    creative: "(1) f' 의 다른 근이 끝점과 겹치지 않게 (x+p)(x−q)(x−r) 로 바꾸면 c 두 개 → 「c 의 합」(★2) (2) c 값이 주어지고 p 를 역산(I-BW d1 ★2) (3) f(a)=f(b) 인 구간 [a,b] 를 학생이 찾게 하기(★2~3)."
```

```yaml
- id: RPM-CALC1-0380
  page: 60
  vendor_label: "유형 10 롤의 정리"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $f(x)=-2x^2+kx$ 에 대하여 $[-1,\,3]$ 에서 롤의 정리를 만족시키는 $c$ 의 값($k$ 상수). 5지선다.
  category: "f(−1)=f(3) 로 k 결정 → f'(c)=0 → c"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "롤의 정리(c 구하기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    롤의 정리가 성립하려면 $f(-1)=f(3)$ 이므로 $-2-k=-18+3k$, $k=4$. $f'(x)=-4x+4=0$ 에서 $c=1$ → ④.
    상수 $k$ 를 먼저 정하는 한 단계가 추가된 기본형. 이차함수라 $c$ 는 구간의 중점이기도 하다. 유형 중·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "f(−1)=f(3) → k=4 → f'(x)=−4x+4=0 → c=1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0380.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [p,q] 와 이차 계수를 바꿔도 f(p)=f(q) 가 k 의 일차식이라 항상 결정됨. 제약: 이차함수면 c=(p+q)/2 로 k 와 무관하므로 선택지에 (p+q)/2 를 포함하되 정답이 그것임을 숨기려면 삼차로 바꿔야 함."
    creative: "(1) k 를 구하지 않고 대칭축=구간 중점으로 답하는 지름길을 묻는 형태(I-SYM d1 ★2) (2) 삼차함수 −2x³+kx 로 바꾸면 중점 지름길이 사라지고 f' 이차 근 → ★2~3 (3) c 가 주어지고 구간 끝점 하나를 역산(0383 골조)."
```

```yaml
- id: RPM-CALC1-0381
  page: 60
  vendor_label: "유형 10 롤의 정리"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $f(x)=-2x^3-4x^2+8x+3$ 에 대하여 $[-a,\,a]$ 에서 롤의 정리를 만족시키는 $c$ 가 존재할 때 $\dfrac ac$ 의 값($a$ 자연수).
  category: "f(−a)=f(a) → 홀수차 항 → a=2 → f'(c)=0 의 근 중 열린구간 내부 → a/c"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "롤의 정리(구간 결정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f(-a)=f(a)$ 에서 짝수차 항이 소거되어 $4a^3-16a=0$, 자연수 $a=2$. $f'(x)=-2(3x-2)(x+2)$ 의 근 $\dfrac23,\,-2$ 중 $-2$ 는 끝점이라 제외, $c=\dfrac23$, $\dfrac ac=3$.
    자연수 조건(T-범위)과 끝점 제외(T-경계) 두 함정이 있어 Mₜ 2. 유형 중·M_total 7·통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "f(−a)=f(a) → 4a³−16a=0 → a=2 → f'(x)=−2(3x−2)(x+2) → c=2/3 (−2 는 끝점) → a/c=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0381.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "홀수차 계수 (−2, 8) 를 바꾸면 a²=(일차계수)/(삼차계수의 −1배) 로 결정되므로 그 비가 완전제곱수여야 함. 제약: f' 의 한 근이 −a 와 정확히 겹치게 설계해야 끝점 제외 함정이 유지되고, 다른 근이 (−a,a) 안에 있어야 c 가 존재."
    creative: "(1) 함정을 빼고 f' 의 두 근이 모두 내부 → 「c 의 값의 합」(★2) (2) 구간을 [a,b] 로 두면 미지수 둘 → 추가 조건 필요 ★3 (3) 「f(−a)=f(a) ⇔ 홀함수 부분 소거」를 서술하게 하면 I-SYM d1 이 드러나는 서술형 ★2~3."
```

### 유형 11 평균값 정리

```yaml
- id: RPM-CALC1-0382
  page: 61
  vendor_label: "유형 11 평균값 정리"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    $f(x)=2x^2-4x+1$ 에 대하여 $[1,\,3]$ 에서 평균값 정리를 만족시키는 $c$.
  category: "평균변화율 → f'(c) 와 등치 → c"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평균값 정리(c 구하기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $\dfrac{f(3)-f(1)}{3-1}=\dfrac{7-(-1)}2=4$, $f'(c)=4c-4=4$ 에서 $c=2$.
    정의 그대로 두 단계. 대표문제 출발 ★2 에서 통찰 0·M_total 4 로 −1 → ★1.
  tier: star_1
  mechanism_primary: "평균변화율 (f(3)−f(1))/2=4 → f'(c)=4c−4=4 → c=2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0382.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차함수면 어떤 구간 [p,q] 에서도 c=(p+q)/2. 제약: 계수를 바꿔도 답은 중점이므로 계산 과정을 보게 하려면 f(q)−f(p) 가 깔끔한 정수가 되게."
    creative: "(1) 삼차함수로 바꾸면 f'(c)=평균변화율 이 이차 → c 두 개 중 구간 안 선택(T-경계 ★2) (2) c 가 주어지고 구간 끝점을 역산(0383 골조 ★2) (3) θ 표현 f(x+h)−f(x)=hf'(x+θh) 로 바꾸기(0384 골조 ★2)."
```

```yaml
- id: RPM-CALC1-0383
  page: 61
  vendor_label: "유형 11 평균값 정리"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $f(x)=-x^2+5x$ 에 대하여 $[a,\,1]$ 에서 평균값 정리를 만족시키는 $c$ 가 $0$ 일 때 $a$ 의 값($a<0$). 5지선다.
  category: "f'(0)=5 → 평균변화율을 a 의 식으로 → 인수분해·약분 → a"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평균값 정리(구간 역산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f'(0)=5$ 이고 $\dfrac{f(1)-f(a)}{1-a}=\dfrac{(a-1)(a-4)}{1-a}=4-a$ 이므로 $4-a=5$, $a=-1$ → ⑤.
    평균변화율을 $a$ 로 두고 약분하는 계산이 핵심. 이차함수라 $c$ 가 중점이므로 $\dfrac{a+1}2=0$ 으로도 즉시 나온다. 유형 중·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'(0)=5 → (f(1)−f(a))/(1−a)=4−a → 4−a=5 → a=−1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0383.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "c 와 고정 끝점 1 을 바꾸면 a=2c−(끝점) 으로 결정. 제약: a<0 같은 부호 조건은 c 와 끝점의 위치에 맞게 다시 두고, 분자 인수분해가 (a−끝점) 을 포함하는 것은 이차함수에서 자동."
    creative: "(1) 중점 지름길(I-SYM d1)을 서술하게 하기(★2) (2) 삼차함수로 바꾸면 a 에 대한 이차방정식 → 조건 a<0 으로 선택(T-범위 ★3) (3) c 를 매개변수 t 로 두고 a 를 t 의 식으로(★2~3)."
```

```yaml
- id: RPM-CALC1-0384
  page: 61
  vendor_label: "유형 11 평균값 정리"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    $f(x)=2x^2$ 에 대하여 $f(x+h)-f(x)=hf'(x+\theta h)$ $(0<\theta<1,\ h\ne0)$ 를 만족시키는 $\theta$ 의 값.
  category: "양변 전개 → h² 항 비교 → θ"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "θ 형태의 평균값 정리를 구간 [x, x+h] 에서 c=x+θh 로 읽고, x·h 에 대한 항등식으로 세워 계수 비교"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "평균값 정리(θ 표현)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌변 $4xh+2h^2$, 우변 $h\cdot4(x+\theta h)=4xh+4\theta h^2$ 이므로 $2h^2=4\theta h^2$, $\theta=\dfrac12$.
    식의 정체($c=x+\theta h$)를 읽는 착안(EQV d1) 뒤는 전개 한 줄. $x,h$ 가 남는 표현이라 Mₐ 2. 유형 중·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "f(x+h)−f(x)=4xh+2h² → hf'(x+θh)=4xh+4θh² → h² 계수 비교 → θ=1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0384.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 를 임의의 이차함수 kx²+mx+n 으로 바꿔도 θ=1/2 로 상수. 제약: 삼차 이상이면 θ 가 x,h 에 의존해 「값을 구하시오」가 성립하지 않으므로 특정 x,h 를 함께 주어야 함."
    creative: "(1) f=x³ 에서 x=1, h=1 로 θ 를 묻기 → 이차방정식·0<θ<1 선택(T-범위 ★3) (2) f=x³ 에서 lim_{h→0} θ 를 묻기 → 극한 결합 ★4 (3) 「이차함수이면 θ=1/2 임을 보여라」 서술형 ★2~3."
```

```yaml
- id: RPM-CALC1-0385
  page: 61
  vendor_label: "유형 11 평균값 정리"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    미분가능한 $f$ 가 $\lim_{x\to\infty}f'(x)=-2$ 일 때 평균값 정리를 이용하여 $\lim_{x\to\infty}\{f(x+1)-f(x-5)\}$ 의 값.
  category: "구간 [x−5, x+1] 평균값 정리 → 6f'(c) → c→∞ → 극한"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "함숫값의 차 f(x+1)−f(x−5) 를 평균값 정리로 구간 길이 6 × f'(c) 로 옮기고, x→∞ 이면 c→∞ 임을 연결"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "평균값 정리와 극한(함숫값 차 → 도함수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $[x-5,\,x+1]$ 에서 $f(x+1)-f(x-5)=6f'(c)$ 인 $c$ 가 $x-5<c<x+1$ 에 있고 $x\to\infty$ 일 때 $c\to\infty$ 이므로 극한은 $6\cdot(-2)=-12$.
    구체 함수 없이 일반 $f$ 로 논증(Mₐ 3)하고 차 → 도함수 전환이 풀이의 전부(RT d2). 유형 상중 → ★3, 통찰형.
  tier: star_3
  mechanism_primary: "f(x+1)−f(x−5)=6f'(c), x−5<c<x+1 → x→∞ 이면 c→∞ → 6·(−2)=−12"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0385.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 (x+p)−(x−q) 의 길이 p+q 와 극한값 L 을 바꾸면 답은 L(p+q). 제약: 두 끝점이 모두 x→∞ 로 가야 c→∞ 가 보장되고, f 는 실수 전체에서 미분가능."
    creative: "(1) 길이 1 로 줄여 lim{f(x+1)−f(x)}=L 기본형(★3) (2) lim f'(x)=∞ 인 경우 발산 논증(★4) (3) lim_{x→∞}(f(2x)−f(x))/x 처럼 구간 길이가 x 인 꼴 → 비 x/x 정리가 추가돼 ★4."
```

### 유형 UP 12 곡선 밖의 점에서 그은 접선의 방정식의 활용

```yaml
- id: RPM-CALC1-0386
  page: 61
  vendor_label: "유형 UP 12 곡선 밖의 점에서 그은 접선의 방정식의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    점 $(a,\,1)$ 에서 곡선 $y=x^3-4x^2+1$ 에 그은 접선이 오직 한 개 존재할 때 실수 $a$ 의 값의 범위. 5지선다.
  category: "접점 t 설정 → 외부점 대입 → t(2t²−(4+3a)t+8a)=0 → 접선 1개 ⇔ 이차 인수 실근 없음 → 판별식 → a 범위"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "접선의 개수 ⇔ 접점 방정식의 서로 다른 실근 개수. t=0 이 항상 근이므로 「오직 한 개」⇔ 남은 이차 2t²−(4+3a)t+8a=0 이 실근을 갖지 않음(D<0)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곡선 밖의 점에서 그은 접선의 개수 조건(접점 방정식 실근 개수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접선에 $(a,\,1)$ 을 대입하면 $2t^3-(4+3a)t^2+8at=0$, 즉 $t\{2t^2-(4+3a)t+8a\}=0$. $t=0$(접선 $y=1$)은 항상 되므로 접선이 하나뿐이려면 이차 인수가 실근이 없어야 하고 $(4+3a)^2-64a<0$, $(9a-4)(a-4)<0$ → $\dfrac49<a<4$ → ①.
    개수 조건을 실근 개수로 옮기는 전환(EQV d2)과 이차 인수의 근이 $0$ 과 겹치는지·$D=0$ 경계를 따지는 함정(Mₜ 2). 유형 UP 출발 ★3, 통찰형.
  tier: star_3
  mechanism_primary: "접점 t 설정 → (a,1) 대입 → t(2t²−(4+3a)t+8a)=0 → t=0 고정 → 이차 D<0 → (9a−4)(a−4)<0 → 4/9<a<4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0386.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "외부점의 y좌표를 곡선의 상수항과 같게 두어야(1=1) t 인수가 분리되어 삼차가 「t × 이차」로 떨어짐. 제약: 이차 계수 (−4) 를 바꾸면 판별식 이차부등식 계수가 바뀌므로 근이 유리수가 되게 확인, 선택지 ② 는 여집합으로 유지."
    creative: "(1) 「접선이 3개」 조건 → D>0 에 이차 근 ≠ 0 (a≠0) 확인 추가(I-VF d1 ★3) (2) 외부점 (a,k) 로 y좌표를 일반화하면 t 인수 분리가 안 되어 삼차 실근 개수 → 극값 부호(도함수의 활용 (2) 결합 ★4) (3) 「접선이 2개」 조건 → D=0 또는 이차 근이 0 인 경우의 합집합(I-MI d2 ★4)."
```

```yaml
- id: RPM-CALC1-0387
  page: 61
  vendor_label: "유형 UP 12 곡선 밖의 점에서 그은 접선의 방정식의 활용"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형 UP"
  summary: |
    점 $\mathrm A(a,\,-2)$ 에서 곡선 $y=x^2-3x-1$ 에 그은 두 접선의 접점 $\mathrm B,\,\mathrm C$ 에 대해 삼각형 $\mathrm{ABC}$ 의 무게중심이 $\left(3,\,-\dfrac23\right)$ 일 때 $a$. 서술형.
  category: "접점 t 설정 → 외부점 대입 → t²−2at+3a−1=0 → 근과 계수 t₁+t₂=2a → 무게중심 x좌표 = a → a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "무게중심(기하)을 접점 방정식의 근의 합(대수)으로 옮김: x좌표 (a+t₁+t₂)/3 에 t₁+t₂=2a 를 넣으면 곧바로 a"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곡선 밖의 점에서 그은 두 접선의 기울기·접점(근과 계수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접선에 $(a,\,-2)$ 를 대입하면 $t^2-2at+3a-1=0$ 이고 두 접점의 $x$좌표 합은 $2a$. 무게중심의 $x$좌표 $\dfrac{a+2a}3=a=3$ 이 곧 답이며, $y$좌표 $-\dfrac23$ 은 $t=2,\,4$ 로 검산된다.
    접점을 구하지 않고 근과 계수로 무게중심을 쓰는 전환(RT d2)이 서술형의 핵심. 유형 UP 상중 → ★3, 통찰형.
  tier: star_3
  mechanism_primary: "접점 t 설정 → (a,−2) 대입 → t²−2at+3a−1=0 → t₁+t₂=2a → 무게중심 x=(a+2a)/3=a=3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0387.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "무게중심 x좌표 = a 는 포물선의 대칭 성질이라 곡선 계수를 바꿔도 유지되고, y좌표는 (4a²−12a−2)/3 처럼 a 의 이차식. 제약: 외부점이 포물선 아래(a²−3a+1>0)여야 접선이 둘이고, y좌표를 조건으로 쓰려면 그 이차식이 정수해를 갖게."
    creative: "(1) 무게중심 y좌표만 주고 a 를 구하게 하면 이차방정식·두 해 검증(I-VF d1 ★3~4) (2) 무게중심 대신 선분 BC 의 중점(0402 골조 · x좌표가 a 와 같음, I-SYM d1 ★3) (3) a 가 움직일 때 무게중심의 자취 방정식 → I-PD d2 ★4."
```

```yaml
- id: RPM-CALC1-0388
  page: 61
  vendor_label: "유형 UP 12 곡선 밖의 점에서 그은 접선의 방정식의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    그림과 같이 점 $\mathrm P(1,\,6)$ 에서 곡선 $y=-x^2+3$ 에 그은 두 접선의 접점 $\mathrm Q,\,\mathrm R$ 에 대해 삼각형 $\mathrm{PQR}$ 의 넓이.
  category: "접점 t 설정 → 외부점 대입 → t=−1, 3 → 접점 좌표 → 세 점 넓이"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선 밖의 점에서 그은 두 접선이 만드는 도형"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접선에 $(1,\,6)$ 을 대입하면 $t^2-2t-3=0$, $t=-1,\,3$ 이고 접점은 $\mathrm Q(-1,\,2)$, $\mathrm R(3,\,-6)$. 세 점의 넓이 공식으로 $\dfrac12\left|(-2)(-12)-(-4)(2)\right|=16$.
    접점 두 개를 구한 뒤 좌표평면 넓이 공식만 쓰면 되어 통찰 없음·M_total 6. 상중 출발 ★3 을 유지하되 절차형 ★2 후보로 기록. [분류 이슈] 상중이나 접점 구하기 + 좌표 넓이 공식뿐 → ★2 후보.
  tier: star_3
  mechanism_primary: "접점 t 설정 → (1,6) 대입 → t²−2t−3=0 → Q(−1,2)·R(3,−6) → 세 점 넓이 공식 → 16"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$16$'
  answer_source: "답지"
  figure: "crop:fig-0388.png"
  latex: latex-bank/rpm-calc1/items/0388.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선 y=−x²+3 과 외부점 (p,q) 에서 접점 방정식 t²−2pt+3−q=0, (t₁−t₂)²=4(p²+q−3) 이고 넓이는 |t₁−t₂|³/4. 제약: p²+q−3 이 완전제곱수여야 접점이 정수·넓이가 정수, 외부점은 곡선 위쪽(q>3−p²). 그림 라벨 P·Q·R 과 곡선 식은 고정."
    creative: "(1) 넓이 대신 선분 QR 의 길이나 직선 QR 의 방정식(극선) 묻기(★2~3) (2) P 의 x좌표가 두 접점 x좌표의 중점임을 이용해 넓이를 단축(I-SYM d1 ★3) (3) P 가 직선 y=6 위를 움직일 때 넓이의 최솟값 → 이차 최소 결합 ★4."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-CALC1-0389
  page: 62
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    곡선 $y=x^3+ax^2+bx+c$ 위의 두 점 $(-1,\,-4)$, $(3,\,16)$ 에서의 접선이 서로 평행할 때 $abc$ 의 값.
  category: "f'(−1)=f'(3) → a → 두 점 대입 연립 → b, c → abc"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선 조건으로 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f'(x)=3x^2+2ax+b$ 에서 $f'(-1)=f'(3)$ 이면 $3-2a=27+6a$, $a=-3$. 두 점 대입 $-1+a-b+c=-4$, $27+9a+3b+c=16$ 에서 $b=c=4$. $abc=-48$.
    평행 → 미분계수 일치 한 식과 점 대입 두 식의 연립. 시험 구역·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'(−1)=f'(3) → a=−3 → f(−1)=−4·f(3)=16 연립 → b=c=4 → abc=−48"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-48$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0389.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 점의 x좌표 p,q 를 바꾸면 a=−3(p+q)/2 로 결정되므로 p+q 가 짝수여야 정수. 제약: 두 점의 y좌표는 a,b,c 를 정한 뒤 역산해 정수 연립이 되게."
    creative: "(1) 평행 대신 수직(f'(−1)f'(3)=−1)로 바꾸면 b 에 대한 이차 → ★3 (2) 두 접선이 일치하는 조건(평행 + 같은 절편)으로 식 하나 추가 ★3 (3) 평행한 두 접선 사이의 거리를 묻기(0395 골조 ★2~3)."
```

```yaml
- id: RPM-CALC1-0390
  page: 62
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    곡선 $y=x^3+6x^2+10x-4$ 의 접선 중 기울기가 최소인 직선 $y=ax+b$ 에 대하여 $ab$ 의 값.
  category: "f'(x) 완전제곱 → 최소 기울기와 접점 → 접선 → ab"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「접선의 기울기가 최소」를 도함수 f'(x)=3(x+2)²−2 의 최솟값 문제로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "접선 기울기의 최대·최소(도함수의 치역)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f'(x)=3x^2+12x+10=3(x+2)^2-2$ 의 최솟값 $-2$ 는 $x=-2$ 에서. $f(-2)=-8$ 이므로 접선 $y=-2x-12$, $ab=24$.
    기울기의 최소 → 이차함수 $f'$ 의 최솟값 착안(EQV d1) 한 번. 시험 구역·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "f'(x)=3(x+2)²−2 → 최소 기울기 −2 (x=−2) → f(−2)=−8 → y=−2x−12 → ab=24"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$24$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0390.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차 계수를 바꿀 때 f' 의 꼭짓점 x=−(이차계수)/3 이 정수가 되게 이차계수를 3 의 배수로. 제약: 최고차 계수가 음수면 「최대」로 발문을 바꿔야 함."
    creative: "(1) 최소 기울기 접선의 x절편이나 곡선과의 다른 교점 묻기(★2) (2) 「기울기가 k 이상인 접선이 존재하지 않을 조건」으로 뒤집으면 0403 골조(I-EQV d2 ★3) (3) 최소 기울기 접점이 곡선의 대칭 중심임을 확인하는 서술형(I-SYM d1 ★3)."
```

```yaml
- id: RPM-CALC1-0391
  page: 62
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    그림과 같이 중심이 $y$축 위에 있는 원이 점 $(1,\,1)$ 에서 곡선 $y=x^4$ 과 접할 때 원의 넓이.
  category: "접점의 접선 기울기 4 → 법선 → 중심 (0, 5/4) → 반지름² → 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "원과 곡선이 한 점에서 접함 ⇔ 접점에서 공통 접선 ⇔ 원의 중심이 접점에서의 법선 위 — 접함 조건을 법선(기하)으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "원과 곡선이 접할 조건(법선 위의 중심)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $y'=4x^3$ 이므로 접선 기울기 $4$, 법선 $y-1=-\dfrac14(x-1)$ 이 $y$축과 만나는 $\left(0,\,\dfrac54\right)$ 가 중심. $r^2=1+\dfrac1{16}=\dfrac{17}{16}$ → 넓이 $\dfrac{17}{16}\pi$.
    계산은 가볍지만(M_total 5) 「접함 → 법선 위의 중심」 전환이 없으면 시작이 안 되는 통찰형(RT d2). 시험 구역 출발 ★2 에 d2 통찰로 ★3. [분류 이슈] 시험 구역 난이도 표시 없음 · M 5 → ★2 와 ★3 사이 애매, d2 통찰로 ★3 선택.
  tier: star_3
  mechanism_primary: "y'(1)=4 → 법선 y−1=−(x−1)/4 → y축 교점 (0,5/4)=중심 → r²=17/16 → 넓이 17π/16"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{17}{16}\pi$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0391.png"
  latex: latex-bank/rpm-calc1/items/0391.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선 y=xⁿ 과 접점 (1,1) 이면 중심 (0, 1+1/n), r²=1+1/n². 제약: 중심이 y축 위라는 조건을 유지하고, 접점을 (p,pⁿ) 으로 바꾸면 법선 y절편 계산이 늘어남. 그림의 원·접점 라벨 1 은 고정."
    creative: "(1) 중심이 x축 위에 있는 원(법선의 x절편)으로 바꾸기(★3) (2) 원의 중심을 주고 접점을 미지로 하면 법선이 중심을 지나는 조건 → 삼차·사차 방정식 ★4 (3) 원 대신 두 곡선 y=x⁴ 과 y=−(x−a)²+b 가 접하는 문제로 바꾸면 유형 08 골조 ★3."
```

```yaml
- id: RPM-CALC1-0392
  page: 62
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    곡선 $y=x^2-3x+1$ 위의 점 $(t,\,t^2-3t+1)$ 에서의 접선의 $y$절편 $g(t)$ 에 대하여 $\lim_{t\to\infty}\dfrac{g(t+2)-g(t)}t$ 의 값. 5지선다.
  category: "접선의 y절편을 t 의 식으로 → g(t)=−t²+1 → 차 → 극한"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선의 절편 함수와 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선 $y=(2t-3)(x-t)+t^2-3t+1$ 의 $y$절편은 $g(t)=-t^2+1$. $g(t+2)-g(t)=-4t-4$ 이므로 극한은 $-4$ → ②.
    매개변수 $t$ 로 절편 함수를 만들고(Mₐ 2) 극한은 최고차 비교 한 줄. 시험 구역·통찰 없음·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "접선 y=(2t−3)(x−t)+t²−3t+1 → y절편 g(t)=1−t² → g(t+2)−g(t)=−4t−4 → /t 극한 −4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0392.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "y=x²+px+q 이면 g(t)=−t²+q 로 p 와 무관하고, 이동량 h 로 바꾸면 극한이 −2h. 제약: 선택지에 −2h·−h·−4h 등 오답이 배치되게 h 는 정수."
    creative: "(1) y절편 대신 x절편 함수(분수식)로 바꾸면 극한이 유리식 정리 → ★3 (2) 삼차 곡선이면 g(t) 가 삼차 → 분모를 t² 로 맞추는 차수 판단 ★3 (3) g(t) 의 최댓값이나 g(t)=0 인 t 를 묻는 정적 문제로 하강 ★1~2."
```

```yaml
- id: RPM-CALC1-0393
  page: 62
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    $f(x)=x^3-\dfrac52x^2+ax+2$ 의 그래프 위의 두 점 $\mathrm A(0,\,2)$, $\mathrm B(2,\,f(2))$ 에서의 접선 $l$, $m$ 의 교점이 $x$축 위에 있을 때 $60\times|f(2)|$ 의 값. 교육청 기출.
  category: "두 접선을 a 로 표현 → 교점 x=3 → y=3a+2=0 → a → f(2)=2a → 60|f(2)|"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「교점이 x축 위」를 두 접선의 x절편이 같다(또는 교점의 y좌표 0)는 식으로 옮겨 a 의 방정식으로"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "접선 조건으로 미정계수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $l:\ y=ax+2$, $f(2)=2a$, $f'(2)=a+2$ 로 $m:\ y=(a+2)x-4$. 두 직선의 교점은 $x=3$ 으로 $a$ 와 무관하고 $y=3a+2=0$ 에서 $a=-\dfrac23$. $f(2)=-\dfrac43$ → $60\times\dfrac43=80$.
    매개변수 $a$ 를 실은 접선 두 개를 세우고 교점 조건을 식으로 옮기는 착안(EQV d1). 기출·매개변수 결합으로 시험 구역 출발 ★2 에서 ★3.
  tier: star_3
  mechanism_primary: "l: y=ax+2, m: y=(a+2)x−4 → 교점 x=3 → 3a+2=0 → a=−2/3 → f(2)=−4/3 → 80"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$80$'
  answer_source: "답지"
  figure: "crop:fig-0393.png"
  latex: latex-bank/rpm-calc1/items/0393.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차 계수 −5/2 와 B 의 x좌표 2 는 교점 x좌표가 a 와 무관하게 떨어지도록 짝지어진 값이므로 함께 바꿔야 함. 제약: |f(2)| 배수 60 은 답이 정수가 되게 분모에 맞춰 조정, 그림의 A·B·l·m 라벨은 고정."
    creative: "(1) 「교점이 y축 위」로 바꾸면 두 접선의 y절편 일치 → a 일차(★2) (2) 두 접선이 수직일 조건 a(a+2)=−1 로 바꾸면 이차·판별식 확인 ★3 (3) B 의 x좌표를 p 로 두고 교점의 자취 → I-PD d2 ★4."
```

```yaml
- id: RPM-CALC1-0394
  page: 62
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    곡선 $y=ax^3-2x^2+1$ 위의 점 $(1,\,1)$ 을 지나고 그 점에서의 접선과 수직인 직선(법선)의 방정식($a$ 상수).
  category: "점 대입으로 a → 미분계수 → 법선 기울기 −1/f'(1) → 직선"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "법선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $(1,\,1)$ 대입으로 $a=2$, $y'=6x^2-4x$ 에서 $f'(1)=2$. 법선 $y-1=-\dfrac12(x-1)$ → $y=-\dfrac12x+\dfrac32$.
    미정계수 결정 한 단계가 붙은 법선 기본형. 시험 구역·통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "(1,1) 대입 → a=2 → f'(1)=2 → 법선 기울기 −1/2 → y=−x/2+3/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=-\dfrac{1}{2}x+\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0394.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 (p,q) 와 계수를 바꿀 때 f'(p) ≠ 0 이어야 법선 기울기가 정의되고, f'(p)=±1·±2 로 두면 법선 계수가 간단. 제약: 점이 곡선 위라는 조건으로 a 가 유일하게 결정되도록 a 의 계수 p³ ≠ 0."
    creative: "(1) 법선의 x절편·y절편 묻기(★2) (2) 법선이 특정 점을 지나는 조건으로 a 결정(I-BW d1 ★2~3) (3) 법선과 곡선의 다른 교점 → 삼차 인수분해 ★3."
```

```yaml
- id: RPM-CALC1-0395
  page: 62
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    곡선 $y=x^3-3x^2+2$ 에 접하고 기울기가 $9$ 인 두 직선 사이의 거리.
  category: "f'(x)=9 → 접점 두 개 → 두 접선 → 평행선 거리 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 접선(평행한 두 접선의 거리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $3x^2-6x=9$ 에서 $x=3,\,-1$, 접점 $(3,\,2)$, $(-1,\,-2)$ 로 접선 $y=9x-25$, $y=9x+7$. 평행선 사이의 거리 $\dfrac{32}{\sqrt{82}}=\dfrac{16\sqrt{82}}{41}$.
    기울기가 주어진 접선 두 개와 거리 공식(공통수학2 차용) 결합. 시험 구역·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'(x)=9 → x=3,−1 → 접선 y=9x−25·y=9x+7 → 거리 |−25−7|/√82 → 16√82/41"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{16\sqrt{82}}{41}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0395.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기 k 를 바꿀 때 3x²−6x=k 의 두 근이 정수가 되게 k=3p²−6p 꼴(p 정수)로. 제약: 두 접선이 서로 달라야(두 접점의 y절편이 다름) 거리가 0 이 아니고, 답의 근호 정리는 √(1+k²) 로 결정."
    creative: "(1) 두 접점 사이의 거리로 바꾸기(★2) (2) 두 평행 접선 사이의 거리가 주어졌을 때 기울기 역산 → I-BW d1 ★3~4 (3) 두 접선의 한가운데 평행선이 곡선과 만나는 점(대칭 중심) → I-SYM d1 ★3."
```

```yaml
- id: RPM-CALC1-0396
  page: 62
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    곡선 $y=x^3-4x+a$ 와 직선 $y=-x+b$ 가 제1사분면에서 접할 때 $a-b$ 의 값($a>3$).
  category: "f'(x)=−1 → x=±1 → 제1사분면 x=1 → 접점 (1, a−3) 을 직선에 대입 → b=a−2 → a−b"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선과 곡선이 접할 조건(기울기 → 접점 → 미정계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    기울기 $-1$ 에서 $3x^2-4=-1$, $x=\pm1$ 이고 제1사분면·$a>3$ 으로 $x=1$, 접점 $(1,\,a-3)$. 직선에 넣어 $b=a-2$, $a-b=2$.
    $a$ 가 남은 채로 답이 상수로 떨어지는 구조. 사분면 조건으로 근 하나를 고르는 함정(T-범위) 정도. 시험 구역·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f'(x)=−1 → x=±1 → 제1사분면·a>3 → x=1 → (1,a−3) ∈ y=−x+b → b=a−2 → a−b=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0396.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선 기울기 m 을 바꾸면 3x²−4=m 의 근이 정수가 되게 m=3p²−4. 제약: 「제1사분면」이 성립하려면 접점 y좌표 p³−4p+a>0 이 되게 a 의 하한 조건을 함께 고쳐야 함."
    creative: "(1) 제3사분면으로 바꾸어 x=−1 선택(★2) (2) a 를 구체값으로 주고 b 를 묻기(★1~2) (3) a,b 조건 없이 「접점이 어느 사분면인지」를 a 의 범위로 나누게 하면 I-MI d1 ★3."
```

```yaml
- id: RPM-CALC1-0397
  page: 63
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    점 $(1,\,-1)$ 에서 곡선 $y=x^2-x$ 에 그은 접선 중 기울기가 음수인 것이 점 $(a,\,-5)$ 를 지날 때 $a$. 5지선다.
  category: "접점 t 설정 → 외부점 대입 → t=0, 2 → 기울기 음수인 접선 y=−x → (a,−5) 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선 밖의 점에서 그은 접선의 방정식(접점 설정·외부점 대입)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선에 $(1,\,-1)$ 을 대입하면 $t^2-2t=0$, $t=0,\,2$ 이고 기울기 $2t-1$ 은 $-1,\,3$. 음수 쪽 접선 $y=-x$ 가 $(a,\,-5)$ 를 지나므로 $a=5$ → ④.
    유형 07 기본 골조에 접선 선택 조건 하나. 시험 구역·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "접점 t 설정 → (1,−1) 대입 → t²−2t=0 → t=0 (기울기 −1) → y=−x → −5=−a → a=5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0397.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "외부점 (p,q) 로 접점 방정식 t²−2pt+(p+q)=0 이 정수근을 갖게 p²−p−q 를 완전제곱수로. 제약: 두 접선의 기울기 부호가 달라야 「기울기가 음수인 것」이 하나로 정해짐."
    creative: "(1) 두 접선의 교각·두 접선과 x축이 만드는 삼각형(0376 골조 ★2) (2) 점 (a,−5) 를 접선 위의 점으로 두고 다시 그 점에서 접선을 그어 접점 묻기 → 골조 두 번 ★3 (3) 「기울기가 양수인 접선의 y절편」으로 바꾸기(★2)."
```

```yaml
- id: RPM-CALC1-0398
  page: 63
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    두 곡선 $y=x^3-x+3$, $y=x^2+a$ 가 제1사분면 위의 한 점에서 공통인 접선을 가질 때 상수 $a$.
  category: "기울기 일치 3t²−1=2t → t=1 (제1사분면) → 함숫값 일치 → a"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 곡선의 공통접선(접점에서 함숫값·기울기 일치)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $a$ 가 미지수라 기울기 일치 $3t^2-1=2t$ 부터 풀면 $t=1,\,-\dfrac13$ 이고 제1사분면 조건으로 $t=1$. 함숫값 일치 $3=1+a$ 에서 $a=2$.
    조건 순서(기울기 먼저)와 근 선택(T-범위)이 전부. 시험 구역·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "f'(t)=g'(t) → 3t²−2t−1=0 → t=1 (t=−1/3 은 제1사분면 아님) → f(1)=g(1) → 3=1+a → a=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0398.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차의 일차 계수와 이차 곡선 계수를 바꿀 때 기울기 일치 이차방정식 3t²−2kt+p=0 의 근이 유리수가 되게. 제약: 선택되는 접점의 y좌표가 양수여야 제1사분면 조건이 참, 버려지는 근은 음수 쪽으로."
    creative: "(1) 제2사분면으로 바꾸면 t=−1/3 선택 → 분수 계산 ★2 (2) a 대신 이차 곡선의 일차 계수를 미지로 두면 함숫값·기울기 두 식 모두에 미지수 → 0374 골조 ★2~3 (3) 공통접선의 방정식·두 곡선의 다른 교점까지 묻기 ★3."
```

```yaml
- id: RPM-CALC1-0399
  page: 63
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    곡선 $y=x^3+x^2-3$ 위의 $x=-1$ 인 점 $\mathrm P$ 에서의 접선 $l$ 과 $\mathrm P$ 를 지나며 $l$ 에 수직인 직선 $m$, $x$축으로 둘러싸인 도형의 넓이.
  category: "P(−1,−3)·f'(−1)=1 → l, m 의 x절편 2, −4 → 밑변 6·높이 3 → 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선과 좌표축으로 둘러싸인 도형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\mathrm P(-1,\,-3)$, $f'(-1)=1$ 이므로 $l:\ y=x-2$, $m:\ y=-x-4$ 이고 $x$절편은 $2,\,-4$. 밑변 $6$·높이 $3$ 로 넓이 $9$.
    접선·법선·절편·넓이의 직렬 절차. 시험 구역·통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "P(−1,−3), f'(−1)=1 → l: y=x−2 (x절편 2), m: y=−x−4 (x절편 −4) → 넓이 (1/2)·6·3=9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0399.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P 의 x좌표를 바꿀 때 f'(p)=±1 이면 절편이 정수로 떨어지고, f'(p) 가 다른 값이면 법선 기울기 −1/f'(p) 로 절편이 분수. 제약: f'(p) ≠ 0, P 가 x축 위가 아니어야 삼각형이 생김."
    creative: "(1) l, m, y축으로 바꾸기(★2) (2) 직각삼각형의 외접원 넓이(빗변이 지름 · I-RT d1 ★3) (3) P 를 매개변수로 두고 넓이의 최솟값 → 도함수의 활용 (2) 결합 ★4."
```

```yaml
- id: RPM-CALC1-0400
  page: 63
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    $f(x)=x^2-(a+b)x+ab$ 에 대하여 $[a,\,b]$ 에서 롤의 정리를 만족시키는 $c$ 를 $a,\,b$ 로 나타내기. 5지선다.
  category: "f(a)=f(b)=0 확인 → f'(c)=2c−(a+b)=0 → c"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "롤의 정리(c 구하기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f(x)=(x-a)(x-b)$ 이므로 $f(a)=f(b)=0$, $f'(c)=2c-(a+b)=0$ 에서 $c=\dfrac{a+b}2$ → ⑤.
    한 단계지만 문자 $a,b$ 로 표현하는 추상도(Mₐ 2)가 있어 M_total 5. 시험 구역 ★2 유지. [분류 이슈] 미분 한 번으로 끝나 ★1 후보이나 매개변수 표현으로 ★2 유지.
  tier: star_2
  mechanism_primary: "f=(x−a)(x−b) → f(a)=f(b)=0 → f'(c)=2c−(a+b)=0 → c=(a+b)/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0400.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차 계수 k 를 붙여 k(x−a)(x−b) 로 해도 c 는 중점으로 같음. 제약: 선택지에 (a+3b)/4 같은 오답이 있으므로 정답이 항상 ⑤ 로 고정되지 않게 삼차로 바꾸면 c 가 달라짐."
    creative: "(1) f=(x−a)(x−b)(x−c) 와 구간 [a,b] 로 바꾸면 f' 이차 근 중 구간 안 선택 → ★2~3 (2) 구간 [a,c] 에서 f(a)=f(c) 가 되는 c 를 먼저 찾게 하기(I-BW d1 ★3) (3) 같은 f 에 평균값 정리 [a,b] 로 바꾸어도 답이 같음을 확인하는 서술형 ★2."
```

### 서술형 주관식

```yaml
- id: RPM-CALC1-0401
  page: 63
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    직선 $y=ax-4$ 가 곡선 $y=x^3-4x+a$ 에 접하도록 하는 모든 상수 $a$ 의 값의 곱.
  category: "접점 t → 기울기 일치 a=3t²−4 → 함숫값 일치에 대입 → t²(3−2t)=0 → a 두 값 → 곱"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a 가 직선과 곡선 양쪽에 들어 있으므로 기울기 조건 a=3t²−4 로 a 를 먼저 소거해 t 만의 방정식으로 만드는 순서 선택"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "직선과 곡선이 접할 조건(미정계수 소거)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접점 $t$ 에서 $a=3t^2-4$ 를 $t^3-4t+a=at-4$ 에 넣으면 $-2t^3+3t^2=0$, $t^2(3-2t)=0$ 으로 $t=0,\,\dfrac32$. $a=-4,\,\dfrac{11}4$ 의 곱 $-11$.
    미정계수가 양쪽에 걸린 접함 조건을 소거 순서로 정리하는 착안(EQV d1)과 두 값을 모두 챙기는 서술. 서술형 구역 → ★3.
  tier: star_3
  mechanism_primary: "접점 t → a=3t²−4 → t³−4t+a=at−4 에 대입 → t²(3−2t)=0 → a=−4, 11/4 → 곱 −11"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0401.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 상수항 −4 와 곡선의 일차 계수 −4 가 같아야 대입식에서 t 항이 소거되어 t² 인수가 생김. 제약: 이 짝을 유지한 채 값을 바꾸고(예: −k 와 −kx), 남는 일차 인수의 근이 유리수가 되게."
    creative: "(1) 「모든 a 의 값의 합」·「접점의 x좌표의 곱」으로 바꾸기(★3) (2) 직선이 곡선에 접하고 원점을 지나는 조건으로 a 를 하나로 좁히기(I-VF d1 ★3) (3) 접선이 되는 a 의 개수를 묻고 t 방정식의 중근(t=0)을 접선 하나로 세는지 따지게 하면 I-MI d1 ★3~4."
```

```yaml
- id: RPM-CALC1-0402
  page: 63
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "서술형 주관식"
  summary: |
    점 $(-1,\,-5)$ 에서 곡선 $y=2x^2+3x+4$ 에 그은 두 접선의 접점 $\mathrm P,\,\mathrm Q$ 에 대하여 선분 $\mathrm{PQ}$ 의 길이.
  category: "접점 t 설정 → 외부점 대입 → t²+2t−3=0 → P(1,9)·Q(−3,13) → 거리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선 밖의 점에서 그은 두 접선이 만드는 도형"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접선에 $(-1,\,-5)$ 를 대입하면 $2t^2+4t-6=0$, $t=1,\,-3$ 으로 접점 $\mathrm P(1,\,9)$, $\mathrm Q(-3,\,13)$. $\overline{\mathrm{PQ}}=\sqrt{16+16}=4\sqrt2$.
    유형 07 골조 + 두 점 사이의 거리. 서술형 구역 출발 ★3 유지하되 통찰 없음·M_total 6 이라 ★2 후보. [분류 이슈] 서술형 ★3 이나 절차형·M 6 → ★2 후보.
  tier: star_3
  mechanism_primary: "접점 t 설정 → (−1,−5) 대입 → t²+2t−3=0 → t=1,−3 → P(1,9)·Q(−3,13) → PQ=4√2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$4\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0402.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선 y=2x²+3x+4 와 외부점 (p,q) 의 접점 방정식은 2t²−4pt+(q−3p−4)=0 이므로 p,q 를 바꿀 때 판별식 4p²−2(q−3p−4) 가 완전제곱수가 되게. 제약: 외부점이 포물선 아래(q<2p²+3p+4)여야 접선 둘, 길이는 근호 정리가 되는 값으로."
    creative: "(1) 선분 PQ 의 중점(x좌표가 외부점 x좌표와 같음 · I-SYM d1 ★3) (2) 삼각형 (외부점)PQ 의 넓이(0388 골조 ★3) (3) 직선 PQ 의 방정식을 근과 계수로 구하게 하면 I-RT d2 ★3~4."
```

### 실력 Up

```yaml
- id: RPM-CALC1-0403
  page: 63
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    곡선 $y=x^3+(a+3)x^2-ax+7$ 의 접선 중 직선 $3x-y+1=0$ 과 수직인 것이 존재하지 않도록 하는 정수 $a$ 의 개수.
  category: "수직 접선 존재 안 함 ⇔ f'(x)=−1/3 실근 없음 ⇔ 판별식<0 → (a+1)(a+8)<0 → 정수 개수"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「기울기 −1/3 인 접선이 존재하지 않음」을 도함수 방정식 3x²+2(a+3)x−a=−1/3 이 실근을 갖지 않음(도함수의 치역이 −1/3 을 포함하지 않음)으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "접선 기울기의 최대·최소(도함수의 치역)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    수직인 직선의 기울기 $-\dfrac13$ 이 접선 기울기로 나오지 않으려면 $3x^2+2(a+3)x-a+\dfrac13=0$ 이 실근을 갖지 않아야 하고, $\dfrac D4=a^2+9a+8<0$ 에서 $-8<a<-1$, 정수 $6$ 개.
    존재 조건을 도함수 치역으로 뒤집는 전환(EQV d2) 뒤 판별식·정수 세기(T-경계 포함). 실력 Up 출발 ★4 를 유지하나 통찰 1개·M_total 8 이라 ★3 후보. [분류 이슈] 실력 Up ★4 이나 통찰 1개(EQV d2)·M 8 → ★3 후보.
  tier: star_4
  mechanism_primary: "수직 기울기 −1/3 → f'(x)=−1/3 실근 없음 → D/4=(a+3)²−3(1/3−a)=a²+9a+8<0 → −8<a<−1 → 정수 6개"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0403.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 기울기 3 (→ 목표 기울기 −1/3) 과 계수 (a+3), −a 는 판별식 a²+9a+8 이 정수근으로 인수분해되게 맞춘 값. 제약: 판별식 이차부등식의 두 근이 정수여야 개수가 깔끔하고, 경계값이 정수일 때 부등호 방향(존재하지 않음 → 열린구간)을 유지."
    creative: "(1) 「존재하도록」으로 뒤집으면 여집합·무한개 → 범위 묻기로 바꿔야 함(★3) (2) 「기울기 −1/3 인 접선이 정확히 하나」→ D=0 → a 두 값(★3) (3) 접선 기울기의 최솟값이 주어진 값이 되도록 하는 a → f' 의 최솟값 식 → 0390 골조 ★3."
```

```yaml
- id: RPM-CALC1-0404
  page: 63
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    다항함수 $f,\,g$ 가 ㈎ $g(x)=(x^2+2x)f(x)-6$, ㈏ $\lim_{x\to1}\dfrac{f(x)-g(x)}{x-1}=-2$ 를 만족시킬 때 곡선 $y=g(x)$ 위의 점 $(1,\,g(1))$ 에서의 접선 $y=ax+b$ 에 대하여 $b-a$.
  category: "극한 존재 → f(1)=g(1)·f'(1)−g'(1)=−2 → ㈎ 로 g(1)=3 → ㈎ 미분 g'(1)=4f(1)+3f'(1) → 연립 g'(1)=−3 → 접선"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "극한 ㈏ 가 존재하므로 분자 → 0 즉 f(1)=g(1), 극한값은 미분계수 정의로 f'(1)−g'(1)=−2 — 극한 조건을 함숫값·미분계수 조건으로 읽음"
    - step: 3
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "㈎ 를 x=1 대입과 미분 후 대입 두 가지로 써서 f(1), f'(1), g(1), g'(1) 의 연립으로 통합"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "극한 조건(미분계수 정의)으로 f(1)·f'(1) 결정 → 접선"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    ㈏ 에서 $f(1)=g(1)$, $f'(1)-g'(1)=-2$. ㈎ 에 $x=1$ 을 넣어 $g(1)=3f(1)-6$ 이므로 $g(1)=f(1)=3$; ㈎ 를 미분해 $g'(1)=4f(1)+3f'(1)=12+3f'(1)$ 에 $f'(1)=g'(1)-2$ 를 넣으면 $g'(1)=-3$. 접선 $y=-3x+6$ → $b-a=9$.
    일반 함수 $f,g$(Mₐ 3)에서 극한 → 미분계수 전환(EQV d2)과 조건 통합(CON d1) 두 통찰. 실력 Up ★4, 통찰형(★5 조건인 3개·SC/VF/SYM/XU 는 없음).
  tier: star_4
  mechanism_primary: "㈏ → f(1)=g(1), f'(1)−g'(1)=−2 → ㈎(x=1) → g(1)=3 → ㈎ 미분 → g'(1)=12+3f'(1) → g'(1)=−3 → y=−3x+6 → b−a=9"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$9$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc1/items/0404.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "㈎ 의 곱 인수 x²+2x (x=1 에서 값 3, 미분값 4) 와 상수 −6, 극한값 −2 를 바꿀 때 g(1)=k·f(1)−m 과 f(1)=g(1) 에서 f(1)=m/(k−1) 이 정수가 되게(k ≠ 1). 제약: g'(1) 연립의 계수 (1−3k') 가 0 이 아니어야 하고 답 b−a 가 정수."
    creative: "(1) 접선 대신 g'(1) 만 묻기(★3) (2) 극한 대신 f(1)=3, f'(1)=−5 를 직접 주면 곱의 미분만 남아 ★2 (3) ㈏ 를 lim (g(x)−f(x))/(x²−1) 로 바꾸어 분모 인수분해·1/2 배가 붙으면 ★4 유지, 조건 ㈎ 를 g=(x²+2x)f(x)−6x 처럼 x 를 실으면 f'(1) 연립이 하나 더 꼬여 ★4~5."
```

## 표본 판정 요약 (38문)

- ★ 분포: ★1 2 · ★2 24 · ★3 10 · ★4 2 · ★5 0
- 통찰형 6(0385 · 0386 · 0387 · 0391 · 0403 · 0404) · 절차형 32 · premium 0 · insights 가 비어 있지 않은 블록 12(d1 한 개인 절차형 6 포함)
- type_hint 상위: 「곡선 밖의 점에서 그은 접선」 계열 10(기본 2 · 근과 계수 4 · 도형 3 · 개수 조건 1) · 「두 곡선의 공통접선·주어진 점에서 접할 조건」 5 · 「접선과 좌표축으로 둘러싸인 도형의 넓이」 4 · 「롤의 정리」 4 · 「평균값 정리」 4(c 구하기 · 구간 역산 · θ 표현 · 극한 결합 각 1)
- 그림: 3문(`crop:fig-0388.png` · `crop:fig-0391.png` · `crop:fig-0393.png`)
- 구역별 ★: 유형 07 ★2·2·2·3 / 유형 08 ★2×4 / 유형 09 ★1·2·2·3 / 유형 10 ★2×3 / 유형 11 ★1·2·2·3 / 유형 UP 12 ★3×3 / 시험에 꼭 나오는 문제 ★2×9·★3×3 / 서술형 ★3×2 / 실력 Up ★4×2
- 전사 답 확인 필요: 없음(38문 모두 풀이 결과가 전사본 answer 와 일치)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC1-0388 | 상중(★3)이나 접점 두 개 구하기 + 좌표 넓이 공식뿐이라 통찰 없음·M_total 6 → 절차형 ★2 후보. 라벨은 ★3 유지 | ★2 / ★3 |
| RPM-CALC1-0391 | 시험 구역·난이도 없음·M_total 5 로 ★2 후보이나 「원이 곡선에 접함 → 법선 위의 중심」 d2 통찰이 풀이의 전부라 ★3 선택 | ★3 / ★2 |
| RPM-CALC1-0400 | 시험 구역 ★2 이나 f'(c)=0 한 단계뿐(M_total 5) → ★1 후보. 문자 a,b 표현(Mₐ 2)으로 ★2 유지 | ★2 / ★1 |
| RPM-CALC1-0402 | 서술형 주관식(★3 출발)이나 유형 07 골조 + 두 점 거리로 통찰 없음·M_total 6 → ★2 후보. 라벨은 ★3 유지 | ★2 / ★3 |
| RPM-CALC1-0403 | 실력 Up(★4 출발)이나 통찰 1개(EQV d2)·M_total 8 → ★3 후보. ★4 슬롯 권장 저노출 유형(SC/VF/SYM/XU/RT/PD/BW) 없음 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 「곡선 밖의 점에서 그은 접선」은 접점 $t$ 설정 → 외부점 대입 한 골조를 10문이 공유하고, 후속 처리로만 갈린다. 카탈로그에서는 (a) 기본형·접선 하나 선택(0367 · 0397, ★2) (b) 근과 계수 활용(0368~0370 · 0387, ★2~3) (c) 두 접점이 만드는 도형(0376 · 0388 · 0402, ★2~3) (d) 접선 개수 조건(0386, ★3) 네 유형으로 세우고, RPM 「유형 07」과 「유형 UP 12」의 경계는 (a)(b) 대 (c)(d) 로 두는 편이 실제 골조와 맞는다.
- 「두 곡선의 공통접선」(0371 · 0374 · 0398)과 「두 곡선이 주어진 점에서 접할 조건」(0372 · 0373), 「직선과 곡선이 접할 조건」(0396 · 0401)은 모두 접점에서 함숫값·기울기 일치 연립이라 한 유형(★2)으로 통합 가능하다. 미정계수가 양쪽에 걸린 소거 순서 문제(0374 · 0401)만 하위 변형으로 표시하면 된다.
- 「롤의 정리」(0379 · 0380 · 0381 · 0400)와 「평균값 정리 c 구하기」(0382 · 0383)는 각각 ★1~2 한 유형이면 충분하고, 이차함수에서 c 가 구간 중점이라는 지름길(I-SYM d1)을 유형 메모로 남길 것. 평균값 정리의 θ 표현(0384, ★2)과 극한 결합(0385, ★3)은 골조가 달라 별도 유형으로 세운다.
- 「접선 기울기의 최대·최소」(0390)와 「특정 기울기의 접선 존재 조건」(0403)은 모두 도함수(이차함수)의 치역 문제라 「도함수의 치역」 유형 하나(★2~3)로 통합하고 판별식 형태를 상위 변형으로 둔다.
- 법선 계열은 「법선의 방정식」(0394, ★2)과 「원과 곡선의 접함 → 법선 위의 중심」(0391, ★3)을 분리. 「접선과 좌표축 넓이」(0375 · 0377 · 0378 · 0399)는 한 유형(★1~2)에 매개변수·극한 결합(0378)을 ★3 변형으로.
- 0404(극한 조건으로 f(1)·f'(1) 결정)는 03 미분계수 단원의 「극한 조건과 미분계수」 유형과 겹치므로 그 카탈로그에서 접선 결합형으로 세우고 04 에서는 참조만 한다. 0392(접선 절편 함수와 극한)·0389·0393(접선 조건으로 미정계수 결정)은 단독 유형보다 「접선의 방정식 기본」의 변형으로 두어도 된다.
