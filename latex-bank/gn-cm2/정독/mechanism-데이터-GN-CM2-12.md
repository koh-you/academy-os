---
name: mechanism-데이터-GN-CM2-12
description: 개념원리 공통수학2 12 대칭이동(1/1 · 107-253~111-268) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: 12 대칭이동
  unit_code: CM2-12
  part: "1/1"
  extract_range: "107~111쪽 · 107-253~111-268"
  total_problems: 20
  unit_total: 20
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 12 대칭이동 (1/1) 정독 데이터 (v1.0)

이 파일은 12단원 20문 전수(107~111쪽 · 통번호 107-253~111-268)를 다룬다. 구역은 「개념원리 익히기」 4문 · 「필수·발전 예제」 16문(필수 예제 4 · 확인체크 12)뿐이고 연습문제·특강 구역은 이 단원에 없다. 단원 전체가 **대칭이동 규칙 네 개**(x축 · y축 · 원점 · 직선 y=x)를 축으로 삼고 거기서 ⑴ 규칙 그대로 적용 ⑵ 다른 조건(직선 위의 점 · 거리 · 수직 · 넓이 이등분 · 접선)과 결합 ⑶ 평행이동과의 합성 ⑷ 대칭점을 이용한 선분 길이 합의 최솟값, 네 갈래로 뻗는 배열이다. 그림은 111-268 한 문항(두 축 위를 움직이는 두 점)뿐이고 선택지 문항·서술형 표시는 없다.

벤더 난이도 신호와 이 파일의 출발점 규약: 「개념원리 익히기」 통번호 ★1 · 「필수」 예제 ★2. **tag 「확인체크」 문항은 구역 신호를 우선**해 「필수·발전 예제」 구역 안의 확인체크는 바로 위 예제와 같은 출발점(필수 아래 ★2)으로 두었다(예제의 유제 배치이므로 통번호 익히기의 ★1과 구분한다). 출발점에서 M_total·통찰로 ±1 조정했고, 이 단원에서 반복되는 **표준 성질 적용**(두 원이 일치하려면 중심이 일치 · 원의 넓이를 이등분하는 직선은 중심을 지남 · 접하려면 중심과 직선 사이 거리가 반지름)은 교과서 공식 대입으로 보아 **통찰로 세지 않았고**, 「양수 k」처럼 한 근을 버리는 단계도 단순 필터로 보아 Mₜ(T-범위)에 반영했다. 대신 서로 다른 이동·도형 규칙이 **3겹 이상 합성되고 M_total ≥ 7** 인 절차형은 +1 후보로 보았다(109-e5 · 110-264 · 110-265).

이 파일의 주 용도는 숫자 변형·창의 변형의 **원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM2-107-253
  page: 107
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    점 (-2, 3)을 ⑴ x축 ⑵ y축 ⑶ 원점 ⑷ 직선 y=x 에 대하여 대칭이동한 점의 좌표.
  category: "점의 대칭이동 네 규칙 적용"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "점의 대칭이동(x축·y축·원점·직선 y=x)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    (x,y) → (x,-y) · (-x,y) · (-x,-y) · (y,x) 네 규칙을 한 점에 그대로 적용하는 정의 확인.
    익히기 구역 출발점 ★1 · 통찰 없음 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "점 (-2,3) → 네 대칭 규칙으로 부호 바꾸기·좌표 교환 → 네 점"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $(-2,\,-3)$ ⑵ $(2,\,3)$ ⑶ $(2,\,-3)$ ⑷ $(3,\,-2)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/107-253.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌표 (-2,3) 을 다른 정수쌍으로. 제약: x≠y · x≠0 · y≠0 · |x|≠|y| 라야 네 결과가 모두 달라 규칙 혼동을 잡아낼 수 있다."
    creative: "(1) 대칭이동한 결과 점을 주고 원래 점을 되묻기(역방향 · ★1 유지) (2) 직선 y=-x 대칭을 한 항목 추가(교과서 밖 규칙을 스스로 유도 → ★2) (3) x축 대칭 뒤 y축 대칭이 원점 대칭과 같음을 확인시키기(★2 · I-SYM d1)."
```

```yaml
- id: GN-CM2-107-254
  page: 107
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    직선 3x-2y+1=0 을 ⑴ x축 ⑵ y축 ⑶ 원점 ⑷ 직선 y=x 에 대하여 대칭이동한 도형의 방정식.
  category: "도형의 대칭이동 → 방정식에 치환"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선의 대칭이동(방정식에 x·y 치환)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    점의 규칙을 도형으로 옮기면 「y 에 -y 대입 · x 에 -x 대입 · 둘 다 · x 와 y 를 맞바꿈」이 된다.
    일차식이라 정리도 한 줄. 익히기 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "3x-2y+1=0 에 y→-y · x→-x · 둘 다 · x↔y 를 대입 → 네 직선"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $3x+2y+1=0$ ⑵ $3x+2y-1=0$ ⑶ $3x-2y-1=0$ ⑷ $2x-3y-1=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/107-254.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 (3,-2,1) 을 다른 정수 조합으로. 제약: 상수항 ≠ 0 이라야 원점 대칭과 y=x 대칭 결과가 구별되고, x·y 계수의 절댓값이 서로 달라야 x↔y 교환을 확인할 수 있다."
    creative: "(1) 대칭이동한 직선을 주고 원래 직선을 되묻기(★1 유지) (2) 네 결과 중 서로 평행한 짝을 고르게 하기(★2 · I-RT d1) (3) 대칭이동해도 자기 자신이 되는 직선의 조건을 묻기(★3 · I-SYM d2)."
```

```yaml
- id: GN-CM2-107-255
  page: 107
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    포물선 y=x^2-2x+3 을 ⑴ x축 ⑵ y축 ⑶ 원점 에 대하여 대칭이동한 도형의 방정식.
  category: "포물선의 대칭이동 → 치환 후 y 에 대해 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선(이차함수 그래프)의 대칭이동"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x축 대칭은 -y=x^2-2x+3 을 다시 y 에 대해 풀어 모든 항의 부호를 뒤집는 것이 핵심.
    직선 y=x 항목이 빠진 것은 결과가 함수가 아니기 때문. 익히기 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "y=x^2-2x+3 에 y→-y · x→-x · 둘 다 대입 → 양변을 y 에 대해 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $y=-x^2+2x-3$ ⑵ $y=x^2+2x+3$ ⑶ $y=-x^2-2x-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/107-255.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 (1,-2,3) 을 바꿀 수 있음. 제약: 일차항 계수 ≠ 0 이라야 y축 대칭이 원래 식과 달라지고, 상수항 ≠ 0 이라야 x축 대칭에서 부호 누락을 잡아낼 수 있다."
    creative: "(1) 표준형 y=(x-1)^2+2 로 주고 꼭짓점만 옮겨 답하기(★1~2 · 골조 단축) (2) 직선 y=x 대칭 항목을 넣어 x=y^2-2y+3 이 함수가 아님을 설명하게 하기(★2 · I-RT d2) (3) 대칭이동한 세 포물선의 꼭짓점이 이루는 삼각형 넓이로 확장(★3)."
```

```yaml
- id: GN-CM2-107-256
  page: 107
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    원 (x-3)^2+(y+2)^2=6 을 ⑴ x축 ⑵ y축 ⑶ 원점 ⑷ 직선 y=x 에 대하여 대칭이동한 도형의 방정식.
  category: "원의 대칭이동 → 중심만 이동 · 반지름 불변"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원의 대칭이동(중심의 이동 · 반지름 불변)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표준형이라 중심 (3,-2) 를 네 규칙으로 옮기고 반지름 제곱 6 은 그대로 두면 끝.
    식에 직접 치환해도 같은 결과. 익히기 구역 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "중심 (3,-2) 를 네 대칭 규칙으로 이동 → 반지름 제곱 6 유지 → 네 원"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $(x-3)^2+(y-2)^2=6$ ⑵ $(x+3)^2+(y+2)^2=6$ ⑶ $(x+3)^2+(y-2)^2=6$ ⑷ $(x+2)^2+(y-3)^2=6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/107-256.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심 (3,-2) 와 반지름 제곱 6 을 바꿀 수 있음. 제약: 중심의 두 좌표가 부호도 절댓값도 달라야 네 결과가 구별된다. 반지름 제곱은 완전제곱수가 아니어도 무방(반지름을 쓸 일이 없다)."
    creative: "(1) 일반형 x^2+y^2-6x+4y+7=0 으로 주어 표준형 변환을 앞에 붙이기(★2 · Mₖ +1) (2) 대칭이동한 네 원 중 원래 원과 만나는 것을 고르게 하기(★3 · I-RT d2) (3) 대칭이동해도 자기 자신이 되는 원의 중심 조건을 묻기(★3 · I-SYM d2)."
```

### 필수·발전 예제

```yaml
- id: GN-CM2-108-e4
  page: 108
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    점 (4,6)을 x축에 대하여 대칭이동한 점 P, y축에 대하여 대칭이동한 점 Q 를 지나는 직선의 방정식.
  category: "두 번의 대칭이동 → 두 점을 지나는 직선"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "대칭이동한 두 점을 지나는 직선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P(4,-6) · Q(-4,6) 은 원점 대칭인 두 점이므로 직선이 반드시 원점을 지난다.
    기울기만 구하면 y 절편을 따질 필요가 없다는 점이 이 예제의 요지.
    통찰 없음 · M_total 5 라 −1 후보이지만 이동과 직선 결정이 두 겹이고 필수 예제 출발점이라 ★2 유지.
  tier: star_2
  mechanism_primary: "(4,6) → x축 대칭 P(4,-6) · y축 대칭 Q(-4,6) → 두 점을 지나는 직선"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=-\dfrac{3}{2}x$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/108-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원래 점 (4,6) 을 다른 정수쌍으로. 제약: 두 좌표 모두 0 이 아니어야 직선이 정해지고, 기울기 -y/x 가 보기 좋은 유리수가 되도록 x 가 y 의 약수 관계면 좋다."
    creative: "(1) 두 대칭축을 x축·직선 y=x 로 바꾸면 원점 대칭이 깨져 y 절편까지 구해야 함(★2 · Mₛ +1) (2) 세 번째 대칭점 R(원점 대칭)을 추가해 삼각형 넓이를 묻기(★3) (3) 직선이 원점을 지나는 이유를 설명하게 하면 ★3 · I-SYM d2."
```

```yaml
- id: GN-CM2-108-257
  page: 108
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 (3,-5)를 원점에 대하여 대칭이동한 점이 직선 ax-2y+1=0 위에 있을 때 상수 a 의 값.
  category: "대칭이동한 점을 직선의 방정식에 대입 → 미정계수"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "대칭이동한 점이 직선 위에 있을 조건(미정계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    원점 대칭으로 (-3,5) 를 얻고 「직선 위에 있다 = 좌표를 대입하면 성립」을 쓰면 일차방정식 한 줄.
    통찰 없음 · M_total 5 로 −1 후보이지만 대칭이동과 미정계수 조건이 결합된 유제라 예제 출발점 ★2 를 유지했다. [분류 이슈] ★1/★2 경계.
  tier: star_2
  mechanism_primary: "(3,-5) → 원점 대칭 (-3,5) → ax-2y+1=0 에 대입 → a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/108-257.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 (3,-5) 와 직선 계수 (-2,1) 을 바꿀 수 있음. 제약: 대칭점의 x 좌표 ≠ 0 이라야 a 가 결정되고, a 가 정수로 떨어지려면 (2·y-1) 이 x 로 나누어떨어져야 한다."
    creative: "(1) 대칭축을 직선 y=x 로 바꾸기(★2 유지) (2) a 대신 직선의 상수항을 미지수로 두기(★2 유지) (3) 「대칭이동한 점이 직선 위에 있다」를 「원래 점이 대칭이동한 직선 위에 있다」로 바꿔 두 관점이 같음을 쓰게 하면 ★3 · I-EQV d2."
```

```yaml
- id: GN-CM2-108-258
  page: 108
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    P(2,4)를 직선 y=x 에 대하여 대칭이동한 점 Q, Q 를 x축에 대하여 대칭이동한 점 R 일 때 삼각형 PQR 의 넓이.
  category: "연속 대칭이동 → 세 점의 배치 → 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "대칭이동한 세 점이 이루는 삼각형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    Q(4,2) · R(4,-2) 라서 QR 가 직선 x=4 위의 수직 선분(길이 4)이 되고 P 에서의 높이는 2.
    좌표를 보고 밑변·높이를 잡는 것은 표준 절차라 통찰로 세지 않았다. 유제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "P(2,4) → y=x 대칭 Q(4,2) → x축 대칭 R(4,-2) → QR 를 밑변으로 넓이"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/108-258.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P 의 좌표를 바꿀 수 있음. 제약: 두 좌표가 달라야 Q≠P 이고, Q 의 y 좌표 ≠ 0 이라야 R≠Q 로 삼각형이 만들어진다. 밑변이 축에 평행하게 유지되므로 넓이는 항상 |x_P-y_P|·|y_P| 꼴."
    creative: "(1) 두 번째 대칭축을 y축으로 바꾸면 밑변이 수평 선분이 되어 골조 동일(★2) (2) 세 점이 이루는 삼각형이 직각·이등변인지 판정시키기(★3 · I-SYM d2) (3) P 를 (k,4) 로 두고 넓이가 주어진 값이 되는 k 를 역산(★3 · Mₐ +1)."
```

```yaml
- id: GN-CM2-108-259
  page: 108
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 (k,3)의 y축 대칭점 P, 직선 y=x 대칭점 Q 에 대하여 선분 PQ 의 길이가 2√5 일 때 양수 k.
  category: "두 대칭점 사이의 거리 조건 → 미지수 역산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "대칭이동한 두 점 사이의 거리 조건에서 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P(-k,3) · Q(3,k) 로 두고 PQ^2=20 을 전개하면 교차항이 상쇄돼 2k^2+18=20, 즉 k^2=1.
    양수 조건으로 k=-1 을 버리는 단계는 단순 필터라 통찰로 세지 않고 Mₜ(T-범위)에 반영했다.
    미지수 포함(Mₐ 2)·거리 제곱 전개(Mₖ 2)로 M_total 7 이지만 2겹이라 ★2 유지.
  tier: star_2
  mechanism_primary: "(k,3) → P(-k,3) · Q(3,k) → PQ^2=20 → k^2=1 → 양수 k=1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/108-259.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "고정 좌표 3 과 거리 2√5 를 바꿀 수 있음. 제약: 전개하면 2k^2+2c^2 꼴이 되므로 (거리)^2 - 2c^2 이 양의 완전제곱이어야 k 가 유리수로 떨어진다. 「양수」 단서는 두 근 중 하나를 버리기 위한 것이므로 유지한다."
    creative: "(1) 대칭축 짝을 (x축, 원점)처럼 바꾸기(★2 유지) (2) 「양수」 단서를 빼고 모든 k 의 합을 묻기(★2 · 근과 계수) (3) PQ 의 길이 대신 선분 PQ 의 중점이 특정 직선 위에 있을 조건으로 바꾸기(★3 · I-EQV d2)."
```

```yaml
- id: GN-CM2-109-e5
  page: 109
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    원 x^2+y^2+4x-2y+1=0 을 직선 y=x 에 대하여 대칭이동한 원과, 같은 원을 x축 방향 a · y축 방향 b 만큼 평행이동한 원이 일치할 때 a, b.
  category: "일반형 → 표준형 → 대칭이동·평행이동한 두 중심 비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원의 대칭이동과 평행이동이 일치할 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    완전제곱으로 중심 (-2,1) · 반지름 2 를 읽고, y=x 대칭 중심 (1,-2) 와 평행이동 중심 (-2+a, 1+b) 를 맞춘다.
    반지름은 두 이동 모두에서 불변이라 비교 대상이 아니라는 점이 함정 겸 요지.
    두 원이 일치 = 중심 일치는 표준 성질이라 통찰로 세지 않았고, 표준형 변환·대칭·평행이동 3겹 · M_total 7 → 필수 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "일반형 → 중심 (-2,1) → y=x 대칭 중심 (1,-2) = 평행이동 중심 (-2+a, 1+b) → a, b"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$a=3$, $b=-3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/109-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일반형 계수 (4,-2,1) 을 바꿀 수 있음. 제약: (D/2)^2+(E/2)^2-F > 0 이라야 원이 되고, 중심의 두 좌표가 서로 달라야 y=x 대칭이 실제로 중심을 옮긴다. a=y_0-x_0, b=x_0-y_0 이므로 항상 a+b=0 이 된다."
    creative: "(1) 대칭축을 x축·원점으로 바꾸기(★2~3 유지) (2) a+b 의 값만 묻기(항상 0 인 구조를 눈치채면 즉답 → ★3 · I-SYM d2) (3) 평행이동을 먼저 하고 대칭이동을 나중에 하는 순서로 바꿔 결과가 달라짐을 보이기(★3 · I-SC d2)."
```

```yaml
- id: GN-CM2-109-260
  page: 109
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    직선 y=-3x+6 을 y축에 대하여 대칭이동한 직선에 수직이고 점 (-3,4)를 지나는 직선의 방정식.
  category: "직선의 대칭이동 → 수직 조건 기울기 → 한 점을 지나는 직선"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "대칭이동한 직선에 수직인 직선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y축 대칭은 x 에 -x 를 대입하는 것이므로 기울기의 부호만 뒤집혀 y=3x+6.
    수직 조건 기울기 곱 -1 로 -1/3 을 얻고 점을 대입하면 끝. 통찰 없음이지만 대칭·수직·점 통과 3단계라 ★2 유지.
  tier: star_2
  mechanism_primary: "y=-3x+6 → y축 대칭 y=3x+6 → 수직 기울기 -1/3 → (-3,4) 를 지나는 직선"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=-\dfrac{1}{3}x+3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/109-260.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기 -3 과 통과점 (-3,4) 를 바꿀 수 있음. 제약: 기울기가 0 이 아니어야 수직 기울기가 정의되고, 통과점의 x 좌표가 기울기의 분모와 맞아떨어져야 y 절편이 정수가 된다."
    creative: "(1) 수직 대신 평행 조건으로 바꾸기(★2 유지 · y축 대칭의 부호 변화만 확인) (2) 대칭축을 직선 y=x 로 바꾸면 기울기가 역수가 되어 수직 조건과 겹쳐 생각하게 됨(★3 · I-EQV d2) (3) 두 직선의 교점을 추가로 묻기(★3 · Mₛ +1)."
```

```yaml
- id: GN-CM2-109-261
  page: 109
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    직선 2x-3y+1=0 을 x축에 대하여 대칭이동한 직선이 원 (x-4)^2+(y+k)^2=3 의 넓이를 이등분할 때 상수 k.
  category: "직선의 대칭이동 → 넓이 이등분은 중심 통과 → 미정계수"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "대칭이동한 직선이 원의 넓이를 이등분할 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x축 대칭으로 2x+3y+1=0 을 얻고, 넓이 이등분이므로 중심 (4,-k) 를 대입하면 일차식 한 줄.
    반지름 √3 은 쓰이지 않는 미끼이고, 중심의 y 좌표가 -k 라 부호를 한 번 더 뒤집어야 한다.
    넓이 이등분 = 중심 통과는 교과서 표준 성질이라 통찰로 세지 않음. 유제 출발점 ★2 유지. [분류 이슈] I-EQV 인정 여부.
  tier: star_2
  mechanism_primary: "2x-3y+1=0 → x축 대칭 2x+3y+1=0 → 중심 (4,-k) 대입 → k"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/109-261.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선 계수 (2,-3,1)·중심 x 좌표 4·반지름 제곱 3 을 바꿀 수 있음. 제약: 반지름은 답에 관여하지 않으므로 자유이고, k 가 정수로 떨어지려면 (2·4+1) 이 y 계수 3 으로 나누어떨어져야 한다."
    creative: "(1) 중심을 (k,-2) 로 옮겨 x 좌표를 미지수로 두기(★2 유지) (2) 반지름을 미지수로 두고 「접한다」로 바꾸면 거리 공식이 필요해 ★3 (3) 두 대칭이동(x축·y=x) 결과가 모두 넓이를 이등분할 조건으로 확장(★4 · I-CON d2)."
```

```yaml
- id: GN-CM2-109-262
  page: 109
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    포물선 y=x^2-2mx+m^2-5 를 원점에 대하여 대칭이동한 포물선의 꼭짓점이 (-2,k)일 때 m+k (m 은 상수).
  category: "표준형 → 꼭짓점 → 원점 대칭 → 좌표 비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포물선의 대칭이동과 꼭짓점의 좌표"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    식을 통째로 대칭이동하지 않고 y=(x-m)^2-5 로 고쳐 꼭짓점 (m,-5) 만 옮기는 것이 빠른 길.
    원점 대칭 꼭짓점 (-m,5) 를 (-2,k) 와 비교하면 m 과 k 가 한 번에 나온다.
    꼭짓점만 옮기는 선택은 표준 요령이라 통찰(I-SC)로는 세지 않았다. 2겹이라 M_total 7 이어도 ★2 유지. [분류 이슈] ★2/★3 경계.
  tier: star_2
  mechanism_primary: "y=(x-m)^2-5 꼭짓점 (m,-5) → 원점 대칭 (-m,5) = (-2,k) → m+k"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/109-262.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항 -5 와 목표 x 좌표 -2 를 바꿀 수 있음. 제약: 원래 식이 완전제곱 + 상수 꼴을 유지해야 하므로 상수항은 (m^2 + 임의 상수) 형태로 적어야 하고, 대칭이동 뒤 k 는 원래 꼭짓점 y 좌표의 부호 반대가 된다."
    creative: "(1) 대칭축을 직선 y=x 로 바꾸면 꼭짓점 좌표가 교환됨(★2 유지) (2) 식 전체를 대칭이동해 계수를 비교하게 강제하면 Mₖ 상승 ★3 (3) 꼭짓점이 특정 직선 위에 있을 m 의 값으로 바꾸기(★3 · I-BW d2)."
```

```yaml
- id: GN-CM2-110-e6
  page: 110
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    직선 y=3x+2 를 x축 방향으로 a 만큼 평행이동한 후 원점에 대하여 대칭이동한 직선이 점 (2,1)을 지날 때 a.
  category: "평행이동 → 원점 대칭 → 점 통과 조건"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동과 대칭이동을 연속으로 한 직선이 지나는 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평행이동은 x 에 x-a 를, 원점 대칭은 x 에 -x · y 에 -y 를 대입하는 것이라 이동량의 부호를 두 번 뒤집게 된다.
    결과 y=3x+3a-2 에 (2,1) 을 넣으면 일차방정식 한 줄. 이 예제의 요지는 이동 순서를 식에 그대로 반영하는 절차.
    통찰 없음 · M_total 6 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "y=3x+2 에서 x→x-a → 원점 대칭(x→-x, y→-y) → (2,1) 대입 → a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/110-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기 3 · 절편 2 · 통과점 (2,1) 을 바꿀 수 있음. 제약: 기울기는 원점 대칭으로 보존되므로 통과점이 원래 기울기의 직선 위에 오지 않게 잡아야 a 가 0 이 아닌 값으로 나온다."
    creative: "(1) y축 방향 평행이동으로 바꾸기(★2 유지) (2) 대칭이동을 먼저 하고 평행이동을 나중에 해 두 순서의 결과를 비교시키기(★3 · I-SC d2) (3) 이동 결과가 원래 직선과 일치할 a 를 묻기(★3 · I-EQV d2)."
```

```yaml
- id: GN-CM2-110-263
  page: 110
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    직선 4x-2y+3=0 을 직선 y=x 에 대하여 대칭이동한 후 x축 방향 -1 · y축 방향 2 만큼 평행이동한 직선의 방정식.
  category: "y=x 대칭(x↔y) → 평행이동 치환 → 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "대칭이동 후 평행이동한 직선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x 와 y 를 맞바꾼 -2x+4y+3=0 에 다시 x→x+1 · y→y-2 를 대입한다.
    평행이동량이 -1, 2 인데 대입하는 부호는 반대(+1, -2)라는 점이 유일한 함정(T-부호).
    통찰 없음 · M_total 6 · 2겹 → 유제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "4x-2y+3=0 → x↔y 교환 → x→x+1, y→y-2 대입 → 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2x-4y+7=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/110-263.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 (4,-2,3) 과 이동량 (-1,2) 를 바꿀 수 있음. 제약: 최종 계수의 부호 규약(최고차항 양수)을 맞추려면 전체에 -1 을 곱하는 단계가 남도록 x 계수 부호를 잡아 둔다."
    creative: "(1) 이동 순서를 평행이동 먼저로 바꿔 결과가 달라지는지 확인시키기(★3 · I-SC d2) (2) 원래 직선과 최종 직선의 교점을 묻기(★3) (3) 최종 직선이 원래 직선과 평행·수직인지 판정시키기(★2~3 · I-RT d1)."
```

```yaml
- id: GN-CM2-110-264
  page: 110
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    포물선 y=x^2-2x+a 를 x축 방향 3 · y축 방향 1 만큼 평행이동한 후 x축에 대하여 대칭이동했더니 y=-x^2+8x-10 이 되었을 때 상수 a.
  category: "평행이동·대칭이동 합성 후 계수 비교 → 미정계수 역산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동·대칭이동의 합성 결과에서 미정계수 역산"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 이동을 순서대로 식에 먹여 y=-(x-3)^2+2(x-3)-a-1 을 얻고 주어진 포물선과 계수를 맞춘다.
    이차항·일차항은 a 와 무관하게 자동으로 일치하므로 사실상 상수항 비교 한 줄이며, 그 일치가 검산 역할을 한다.
    역추적이지만 미정계수 비교라 통찰로 세지 않았고, 평행이동·대칭이동·전개 3겹 · M_total 7 → 유제 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "y=x^2-2x+a → x→x-3, y→y-1 → x축 대칭(y→-y) → y=-x^2+8x-10 과 계수 비교 → a"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/110-264.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량 (3,1) 과 최종 포물선의 상수항을 바꿀 수 있음. 제약: 최종 포물선의 이차·일차 계수는 이동량으로 이미 결정되므로 임의로 정할 수 없다(먼저 a 를 정하고 역으로 최종식을 만들어야 모순이 없다)."
    creative: "(1) 미지수를 이동량 쪽(x축 방향 p)으로 옮기기(★3 유지 · I-BW d2) (2) 꼭짓점끼리 비교하는 풀이를 유도해 전개를 없애기(★2 · Mₖ −1) (3) 이동 순서를 대칭 먼저로 바꾸고 같은 결과가 되는 이동량을 묻기(★4 · I-SC d2)."
```

```yaml
- id: GN-CM2-110-265
  page: 110
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    원 x^2+y^2-4x=0 을 y축에 대하여 대칭이동한 후 y축 방향으로 1 만큼 평행이동한 원이 직선 y=mx-2 에 접할 때 상수 m.
  category: "원의 중심 이동 → 중심과 직선 사이 거리 = 반지름"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "대칭·평행이동한 원과 직선이 접할 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    표준형 (x-2)^2+y^2=4 에서 중심 (2,0) · 반지름 2 를 읽고 y축 대칭 (-2,0) → 평행이동 (-2,1).
    접선 조건을 중심과 직선 mx-y-2=0 사이 거리 = 2 로 바꿔 양변을 제곱하면 m^2 항이 상쇄돼 일차식 12m=-5.
    거리 = 반지름은 표준 성질이라 통찰로 세지 않았고, 표준형·대칭·평행이동·거리 공식 3겹 이상 · M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "중심 (2,0) r=2 → y축 대칭 (-2,0) → y 방향 +1 → (-2,1) 과 mx-y-2=0 의 거리 = 2 → m"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-\dfrac{5}{12}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/110-265.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원의 일반형 계수·평행이동량·직선의 y 절편 -2 를 바꿀 수 있음. 제약: 제곱한 뒤 m^2 항이 상쇄되려면 (중심과 직선의 세로 거리)가 반지름과 같아야 하는 특수 배치가 필요하다. 그 조건이 깨지면 m 에 대한 이차방정식이 되어 두 접선이 나온다(★4)."
    creative: "(1) 직선의 기울기를 고정하고 y 절편을 미지수로 두기(★3 유지) (2) 접점의 좌표까지 묻기(★4 · Mₛ +1) (3) 상수항을 조정해 m 이 두 개 나오게 하고 두 값의 곱을 묻기(★4 · I-MI d2)."
```

```yaml
- id: GN-CM2-111-e7
  page: 111
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    두 점 A(0,2), B(6,3)과 x축 위를 움직이는 점 P 에 대하여 AP+BP 의 최솟값.
  category: "한 점을 축에 대칭 → 꺾인 경로를 직선으로 → 두 점 사이 거리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A 를 x축에 대해 반사한 A'(0,-2) 로 바꾸면 AP+BP = A'P+BP 가 되어 삼각부등식으로 최솟값이 선분 A'B 임을 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "축 위의 점에 대한 선분 길이의 합의 최솟값(대칭점 이용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 점이 x축 기준 같은 쪽에 있으므로 한 점을 반사해야 경로가 펴진다는 착안이 전부(I-SYM d2).
    반사 뒤에는 두 점 사이 거리 한 줄이라 계산 부담이 없고, P 의 좌표는 묻지 않는다.
    필수 예제 출발점 ★2 · 통찰 1개(depth 2) → ★2 유지.
  tier: star_2
  mechanism_primary: "A(0,2) → x축 대칭 A'(0,-2) → AP+BP = A'P+BP ≥ A'B → √61"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\sqrt{61}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/111-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B 의 좌표를 바꿀 수 있음. 제약: 두 점의 y 좌표가 같은 부호라야 반사 골조가 성립하고(다르면 선분 AB 가 그대로 최소), A'B 가 근호로 떨어지도록 좌표차를 잡는다."
    creative: "(1) 대칭축을 y축으로 바꾸기(★2 유지 · 111-266 과 동형) (2) 최솟값과 함께 그때의 P 좌표를 묻기(★3 · 교점 계산 추가) (3) AP+BP 대신 |AP-BP| 의 최댓값으로 바꾸면 반사 방향이 반대가 됨(★4 · I-SYM d3)."
```

```yaml
- id: GN-CM2-111-266
  page: 111
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 점 A(2,4), B(3,-5)와 y축 위를 움직이는 점 P 에 대하여 AP+BP 의 최솟값.
  category: "한 점을 y축에 대칭 → 경로 펴기 → 두 점 사이 거리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A 를 y축에 대해 반사한 A'(-2,4) 로 바꿔 AP+BP 를 직선 A'B 로 펴고 최솟값을 두 점 사이 거리로 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "축 위의 점에 대한 선분 길이의 합의 최솟값(대칭점 이용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 점의 y 좌표 부호가 달라 헷갈리기 쉽지만 기준은 y축이므로 x 좌표(2 와 3)가 같은 쪽인지가 중요하다.
    A 를 y축에 반사하면 A'B = √(25+81). 반사 착안 1개(I-SYM d2) 외에는 계산 한 줄.
    e7 의 동형 유제이므로 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "A(2,4) → y축 대칭 A'(-2,4) → AP+BP ≥ A'B → √106"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\sqrt{106}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/111-266.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B 의 좌표를 바꿀 수 있음. 제약: 두 점의 x 좌표가 같은 부호라야 반사가 필요하다. y 좌표 부호가 다른 배치(지금처럼)는 학생이 기준축을 혼동하게 만드는 좋은 함정이라 유지할 만하다."
    creative: "(1) 두 점의 x 좌표를 반대 부호로 바꿔 반사 없이 선분 AB 가 답이 되는 경우를 섞기(★3 · I-MI d2) (2) 그때의 P 의 y 좌표까지 묻기(★3) (3) 움직이는 점을 직선 x=1 위로 옮기기(★3 · I-SYM d2)."
```

```yaml
- id: GN-CM2-111-267
  page: 111
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 점 A(1,2), B(3,4)와 직선 y=x 위를 움직이는 점 P 에 대하여 AP+BP 의 최솟값과 그때의 P 의 좌표.
  category: "직선 y=x 대칭점 → 경로 펴기 → 직선과의 교점"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A 를 직선 y=x 에 대해 반사한 A'(2,1) 로 바꿔 AP+BP 를 직선 A'B 로 펴고 최솟값을 A'B 로 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "직선 y=x 위의 점에 대한 선분 합의 최솟값과 그때의 점"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    반사 대상이 좌표축이 아니라 직선 y=x 라 대칭점이 좌표 교환으로 나오고, 최솟값 A'B=√10 까지는 앞 두 문항과 같다.
    다만 P 의 좌표를 요구하므로 직선 A'B (y=3x-5) 와 y=x 의 교점까지 구하는 겹이 하나 더 붙는다.
    통찰 1개(I-SYM d2) + 교점 계산 추가 → 유제 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "A(1,2) → y=x 대칭 A'(2,1) → 최솟값 A'B=√10 → 직선 A'B 와 y=x 의 교점이 P"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '최솟값: $\sqrt{10}$, $\pt{P}\left(\dfrac{5}{2},\,\dfrac{5}{2}\right)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/111-267.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B 의 좌표를 바꿀 수 있음. 제약: 두 점이 직선 y=x 의 같은 쪽(둘 다 y>x 또는 둘 다 y<x)이라야 반사 골조가 성립하고, 교점이 유리수로 떨어지도록 A'B 의 기울기가 1 이 아니어야 한다."
    creative: "(1) 반사 대상을 B 로 바꿔도 답이 같음을 확인시키기(★3 · I-SYM d2 강화) (2) 대칭축을 직선 y=-x 나 y=x+1 로 바꾸기(대칭점 공식 유도 필요 → ★4) (3) 최솟값 대신 삼각형 ABP 의 둘레 최솟값으로 포장하기(★3 유지)."
```

```yaml
- id: GN-CM2-111-268
  page: 111
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 점 A(2,3), B(6,1)과 y축 위를 움직이는 점 P, x축 위를 움직이는 점 Q 에 대하여 AP+PQ+QB 의 최솟값(그림 제시).
  category: "두 축에 각각 반사 → 세 토막 경로를 직선으로 → 두 점 사이 거리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "A 는 y축에, B 는 x축에 반사해야(짝을 맞춰야) AP+PQ+QB = A'P+PQ+QB' 가 한 직선으로 펴진다는 것을 스스로 정해야 함"
  insight_count: 1
  depth_score: 3.00
  type_id: null
  type_hint: "두 축 위의 두 점을 거치는 경로의 최솟값(두 번 반사)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    한 번만 반사하는 앞 세 문항과 달리 P·Q 가 서로 다른 축 위에 있어 A 는 P 가 놓인 y축에, B 는 Q 가 놓인 x축에 반사해야 한다.
    반사 축의 짝을 맞추는 것이 유일한 고비이고(I-SYM d3), 짝을 어긋나게 잡으면 경로가 펴지지 않는다.
    반사 뒤 A'(-2,3)·B'(6,-1) 사이 거리는 한 줄. 확인체크 출발점 ★2 · depth 3 → +1 하여 ★3. [분류 이슈] ★3/★4 경계.
  tier: star_3
  mechanism_primary: "A → y축 대칭 A'(-2,3) · B → x축 대칭 B'(6,-1) → AP+PQ+QB ≥ A'B' → 4√5"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4\sqrt{5}$'
  answer_source: "답지"
  figure: 'crop:fig-111-268.png'
  latex: latex-bank/gn-cm2/items/111-268.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A·B 의 좌표를 바꿀 수 있음. 제약: 두 점 모두 제1사분면에 있어야 P·Q 가 실제로 각 축 위의 선분 안에 놓이고, A'B' 가 근호로 정리되도록 좌표차를 잡는다. 그림의 축·점 라벨(A, B, P, Q)은 고정한다."
    creative: "(1) 두 점 P·Q 의 좌표까지 묻기(★4 · 교점 두 번) (2) 축 대신 두 직선 y=x 와 x축 위를 움직이게 하기(★4 · I-SYM d3) (3) 최솟값이 되도록 B 의 x 좌표를 정하는 역방향으로 바꾸기(★4 · I-BW d2)."
```

## 표본 판정 요약 (20문)

- ★ 분포: ★1 4 · ★2 11 · ★3 5 · ★4 0 · ★5 0
- 통찰형 4 · 절차형 16 · premium 0 (통찰은 전부 I-SYM — 111-e7 d2 · 111-266 d2 · 111-267 d2 · 111-268 d3)
- M_total 분포: 4 → 4문 · 5 → 6문 · 6 → 4문 · 7 → 5문 · 8 → 1문
- 구역별: 「개념원리 익히기」 4문(전부 ★1) · 「필수 예제」 4문(★2 3 · ★3 1) · 「확인체크」 12문(★2 8 · ★3 4)
- type_hint 상위: 「대칭이동 규칙 그대로 적용(점·직선·포물선·원)」 4 · 「대칭이동 + 다른 조건 결합(직선 위·거리·수직·넓이 이등분)」 6 · 「평행이동과 대칭이동의 합성」 4 · 「대칭점을 이용한 선분 길이 합의 최솟값」 4 · 「도형의 대칭이동 일치 조건」 1 · 「꼭짓점의 대칭이동」 1
- 그림: 1문(`crop:fig-111-268.png`) · 선택지 문항 0 · 소문항(⑴~⑷) 4문(107-253~107-256)
- 대상층: 하위권 4 · 중하위권 9 · 중위권 3 · 중상위권 4

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-108-257 | 통찰 0 · M_total 5 라 v3.8 −1 규칙대로면 ★1. 다만 필수 예제 바로 아래 유제라 구역 출발점 ★2 를 유지함 | ★1 / ★2 |
| GN-CM2-109-261 | 「원의 넓이를 이등분하는 직선은 중심을 지난다」를 표준 성질로 보아 절차형으로 두었으나 I-EQV d1 로 셀 여지가 있음(그러면 통찰형 ★2) | ★2 (절차형/통찰형 경계) |
| GN-CM2-109-262 | 식 전체 대칭이동 대신 꼭짓점만 옮기는 갈래 선택을 I-SC 로 셀지 여부. 통찰로 세면 M_total 7 과 합해 ★3 | ★2 / ★3 |
| GN-CM2-111-268 | 두 축에 각각 반사하는 짝 맞추기(I-SYM d3)는 확인체크 태그(★2 출발)보다 확실히 무거움. ★4 후보이나 개념원리에서 e7 의 표준 유제 배치라 ★3 으로 둠 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ⑴ 「대칭점을 이용한 선분 길이 합의 최솟값」 — 이 단원에서 유일하게 통찰형(I-SYM)이 모이는 갈래이고 4문(e7·266·267·268)이나 된다. 대칭축이 좌표축인 경우 / 직선 y=x 인 경우 / 두 번 반사하는 경우로 base ★ 가 2·3·3~4 로 갈리므로 **세 개의 하위 유형**으로 두는 편이 낫다. ⑵ 「평행이동과 대칭이동의 합성」(e6·263·264·265) — 순서에 따라 결과가 달라지고 미정계수 역산이 붙으면 base ★ 3 으로 올라간다. 합성 순서를 파라미터로 갖는 한 유형으로 묶을 수 있다.
- **통합해도 될 유형**: 107-253~107-256 의 「점·직선·포물선·원의 대칭이동」 네 개는 도형 종류만 다르고 골조(규칙 치환)가 같으므로 **base ★1 단일 유형 + 도형 종류 파라미터**로 통합한다. 마찬가지로 108-257·109-260·109-261 의 「대칭이동 + 다른 조건 결합」도 결합되는 조건(직선 위 · 수직 · 넓이 이등분)만 다른 한 유형으로 볼 수 있으나, 결합 조건이 다른 단원(직선의 방정식 · 원의 방정식)에서 오므로 카탈로그에서는 **그 단원 유형의 대칭이동 변형**으로 교차 참조해 두는 편이 재사용에 유리하다.
- **이 단원의 base ★ 상한**: 20문 전수에서 ★4 이상이 없다. 개념원리 12단원은 연습문제 구역 자체가 없어 변별 문항이 빠져 있으므로, ★4~5 슬롯은 이 단원 유형만으로 채울 수 없고 111-268 계열(두 번 반사)이나 110-265 계열(접선 조건 결합)을 창의 변형해 만들어야 한다.
