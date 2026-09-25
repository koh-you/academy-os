---
name: mechanism-데이터-GN-CM2-10
description: 개념원리 공통수학2 10 두 원의 교점을 지나는 직선과 원의 방정식(1/1 · 93~95쪽 14문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: 10 두 원의 교점을 지나는 직선과 원의 방정식
  unit_code: GN-CM2-10
  part: "1/1"
  extract_range: "93~95쪽 · 93-e18~95-228"
  total_problems: 14
  unit_total: 14
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·level·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 10 두 원의 교점을 지나는 직선과 원의 방정식 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학2 93~95쪽, 단원 10 「두 원의 교점을 지나는 직선과 원의 방정식」 전 14문항을 다룬다. 구역은 `필수·발전 예제`(필수 예제 3 + 확인체크 5) · `연습문제 STEP 1`(3) · `연습문제 STEP 2`(2) · `연습문제 실력 UP`(1) 네 개이고, 이 단원에는 「개념원리 익히기」 구역이 없다.

개념원리 고등의 난이도 신호는 구역과 태그에 있다. 「필수」 예제는 ★2, 예제 뒤의 「확인체크」는 그 예제의 직접 적용(필수 뒤 ★1)이 출발점이고, 연습문제는 STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 에서 출발한다. 이 출발점에서 M_total 과 통찰 유무로 ±1 만 조정했고 벤더 라벨에 억지로 맞추지 않았다. 다만 이 단원에는 ★1 이 하나도 나오지 않았다 — 개념 확인 구역이 없고, 확인체크조차 최소 두 도구(공통현 직선 + 거리 공식 또는 원족)를 연결해야 하기 때문이다. 그 판단은 아래 「표본 판정 요약」에 적어 둔다.

이 단원의 도구는 세 개뿐이다 — (1) 두 원의 식을 빼면 공통현(교점을 지나는 직선)이 나온다, (2) 원족 $C_1+kC_2=0$ ($k \ne -1$) 은 두 원의 교점을 지나는 원을 전부 훑는다, (3) 현의 길이 $= 2\sqrt{r^2-d^2}$. 그래서 변별은 도구의 개수가 아니라 **주어진 조건을 이 세 도구가 먹을 수 있는 형태로 옮기는 단계**에서 생긴다(수직·평행을 계수비로 · 「넓이 최소」를 「지름이 공통현」으로 · 「중심이 $x$축 위」를 「원족 식의 $y$ 계수 0」으로 · 「접는다」를 「합동인 원의 선대칭 이동」으로). 그 지점만 `insights[]` 로 표시했고, 뺄셈·대입처럼 이 단원이 가르치는 절차 자체는 통찰로 세지 않았다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 변형)를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM2-93-e18
  page: 93
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    두 원 $x^2+y^2-ax+6y+9=0$, $x^2+y^2-2x+2ay+1=0$ 의 교점을 지나는 직선이 점 $(-1,\,2)$ 를 지날 때 상수 $a$.
  category: '두 식 빼기 → 공통현 직선 → 점 대입 → $a$'
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 원의 교점을 지나는 직선이 주어진 점을 지날 조건에서 상수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 원의 $x^2+y^2$ 계수가 같으므로 그대로 빼면 $(2-a)x+(6-2a)y+8=0$ 이 공통현이다. 상수 $a$ 가 두 원 모두에 들어가 있어 빼는 순간 $a$ 가 살아남는다는 것만 보면 나머지는 점 대입 한 줄이다.
    벤더 「필수」 예제(★2 출발) · 통찰 0 · M_total 4 로 −1 후보이지만, 매개변수가 두 식에 걸쳐 있어 단순 수치 대입보다 한 겹 위라 −1 을 적용하지 않고 ★2 로 둔다. 이 단원 첫 도구의 대표판이다.
  tier: star_2
  mechanism_primary: '두 식 빼기 → 공통현 $(2-a)x+(6-2a)y+8=0$ → $(-1,\,2)$ 대입 → $-3a+18=0$ → $a=6$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/93-e18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$a$ 가 붙는 항의 계수($-a$, $2a$)와 지나는 점을 바꿀 수 있다. 제약: 두 원의 $x^2+y^2$ 계수가 같아야 그냥 뺄 수 있고(다르면 먼저 나누는 단계가 추가되어 난이도가 올라간다), 뺀 뒤 $a$ 의 계수가 0 이 되지 않아야 답이 하나로 떨어진다. 지나는 점은 두 원의 교점이 아닌 점으로 고른다 — 교점을 주면 $a$ 가 소거되어 항등식이 된다.'
    creative: '(1) 점 대신 「직선 $y=3x+4$ 와 수직」 조건으로 바꾸기(같은 골조 ★2 · 93-218 형) (2) 공통현이 원점을 지나도록 하는 $a$(★2) (3) 두 원이 실제로 두 점에서 만날 $a$ 의 범위까지 묻기(중심거리와 반지름 비교가 추가 → ★3) (4) 공통현이 한 원의 넓이를 이등분하도록(중심을 지나도록) 하기(★3).'
```

```yaml
- id: GN-CM2-93-e19
  page: 93
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    두 원 $x^2+y^2-4x=0$, $x^2+y^2-6x-2y+4=0$ 의 교점과 점 $(1,\,2)$ 를 지나는 원의 방정식.
  category: '원족 $C_1+kC_2=0$ → 점 대입으로 $k$ → 정리'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 원의 교점을 지나는 원의 방정식 — 원족에 지나는 점 대입"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    원족 $C_1+kC_2=0$ 을 세우고 $(1,\,2)$ 를 넣으면 $1+k(-1)=0$ 으로 $k=1$. 다시 대입해 2로 나누면 끝이다.
    함정은 $k \ne -1$($1+k=0$ 이면 원이 아니라 직선) 한 가지뿐이고 계산은 가볍다. 벤더 「필수」 예제 출발점 ★2 를 M_total 6 으로 그대로 유지한다. 이 단원 둘째 도구의 대표판이다.
  tier: star_2
  mechanism_primary: '$C_1+kC_2=0$ 에 $(1,\,2)$ 대입 → $1-k=0$ → $k=1$ → $2(x^2+y^2)-10x-2y+4=0$ → $x^2+y^2-5x-y+2=0$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x^2+y^2-5x-y+2=0$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/93-e19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 원의 계수와 지나는 점을 바꿀 수 있다. 제약: 두 원이 실제로 두 점에서 만나야 하고, 대입값 $C_1(P)$ 와 $C_2(P)$ 가 모두 0 이 아니어야 한다($P$ 가 교점이면 $k$ 가 정해지지 않는다). $k=-C_1(P)/C_2(P) \ne -1$ 이어야 하며, $k$ 를 정수나 간단한 분수로 만들려면 $C_2(P)$ 가 $C_1(P)$ 를 나누도록 점을 고른다.'
    creative: '(1) 지나는 점을 원점으로 두기(계산이 상수항만 남아 가벼워짐 · ★2 · 93-219 형) (2) 「중심이 $x$축 위」처럼 점 대신 위치 조건 주기(★3 · 95-227 형) (3) 「넓이가 최소인 원」으로 바꾸기(★4 · 95-226 형) (4) 구한 원의 반지름·넓이까지 묻기(완전제곱 한 단계 추가 ★2).'
```

```yaml
- id: GN-CM2-93-218
  page: 93
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 원 $x^2+y^2-2x+ky-4=0$, $x^2+y^2-4x-2y+4=0$ 의 교점을 지나는 직선이 직선 $y=3x+4$ 와 수직일 때 상수 $k$.
  category: '두 식 빼기 → 공통현 직선 → 수직 조건(기울기 곱 $-1$) → $k$'
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 원의 교점을 지나는 직선과 주어진 직선의 위치 관계(수직·평행)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    빼면 $2x+(k+2)y-8=0$. 기울기가 $-\dfrac{2}{k+2}$ 이고 이것이 $-\dfrac13$ 이어야 하므로 $k=4$.
    93-e18 의 「점을 지난다」를 「수직이다」로 바꾼 직접 적용판이다. 확인체크 출발점은 ★1 이지만 공통현에 수직 조건을 한 겹 얹었고 부호·분모 처리가 있어 ★2 로 둔다(1단 조정).
  tier: star_2
  mechanism_primary: '두 식 빼기 → $2x+(k+2)y-8=0$ → 기울기 $-\dfrac{2}{k+2}=-\dfrac13$ → $k=4$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/93-218.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '기준 직선의 기울기와 $k$ 가 붙는 항을 바꿀 수 있다. 제약: 뺀 뒤 $y$ 계수가 $k$ 의 일차식으로 살아 있어야 하고, 기울기 조건이 $k$ 에 대한 일차방정식이 되어 정수해가 나오도록 계수를 맞춘다. $k+2=0$ 이 되는 값은 직선이 $x=4$ 가 되어 기울기가 없으므로 답 후보에서 제외되는지 확인한다.'
    creative: '(1) 수직 대신 평행으로 바꾸고 두 직선 사이의 거리까지 묻기(★2 · 95-223 형) (2) 공통현이 $x$축·$y$축과 이루는 각이나 절편을 묻기(★2) (3) 공통현이 한 원의 중심을 지나도록(넓이 이등분) 바꾸기(★3) (4) 기울기가 없는 경우($k=-2$)를 답 후보에 섞어 경계 함정을 만들기(★3).'
```

```yaml
- id: GN-CM2-93-219
  page: 93
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 원 $x^2+y^2=5$, $x^2+y^2-3x-y-4=0$ 의 교점과 원점을 지나는 원의 방정식.
  category: '원족 $C_1+kC_2=0$ → 원점 대입(상수항만 남음) → 정리'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 원의 교점을 지나는 원의 방정식 — 원족에 지나는 점 대입"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    원점 대입이므로 상수항만 남아 $-5-4k=0$, $k=-\dfrac54$. 93-e19 의 직접 적용판이지만 $k$ 가 분수라 원족에 되돌린 뒤 양변에 $-4$ 를 곱해 정리하는 계산이 한 겹 더 있다.
    확인체크 출발점 ★1 에 분수 계수 정리를 더해 ★2 로 둔다. 통찰은 없고 $1+k \ne 0$ 확인만 형식적으로 필요하다.
  tier: star_2
  mechanism_primary: '$(x^2+y^2-5)+k(x^2+y^2-3x-y-4)=0$ 에 원점 대입 → $k=-\dfrac54$ → 양변 $\times(-4)$ → $x^2+y^2-15x-5y=0$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x^2+y^2-15x-5y=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/93-219.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 원의 상수항과 일차항을 바꿀 수 있다. 제약: 원점을 지나게 하려면 두 상수항의 비로 $k$ 가 정해지므로 $k \ne -1$, 즉 두 상수항이 서로 다른 값이어야 한다. 최종 식의 계수를 정수로 맞추려면 $1+k$ 의 분모가 일차항 계수를 나누어떨어지게 상수항을 고른다.'
    creative: '(1) 지나는 점을 $(1,\,2)$ 류의 일반 점으로 바꾸기(★2 · 93-e19 형) (2) 구한 원의 중심·반지름·넓이까지 묻기(★2) (3) 「교점과 원점을 지나는 원」이 아니라 「교점을 지나고 원점을 중심으로 하는 원」으로 바꾸면 조건이 계수 조건으로 옮겨져 ★3 (4) 원점 대신 두 점을 주면 미지수가 둘이 되어 ★3(93-220 형).'
```

```yaml
- id: GN-CM2-93-220
  page: 93
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 원 $x^2+y^2+ax-2ay=0$, $x^2+y^2-10x-8y+16=0$ 의 교점과 두 점 $(0,\,2)$, $(3,\,1)$ 을 지나는 원의 넓이($a$ 는 상수).
  category: '원족 + 미지 상수 → 두 점 대입 연립 → 완전제곱 → 넓이'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "원족의 $k$ 와 첫 원의 미지 상수 $a$ 가 둘 다 모르는 값임을 받아들이고, 두 점 조건을 $(k,\\,a)$ 에 대한 연립일차방정식 하나로 묶는다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "원족의 계수와 미지 상수를 두 점 조건으로 동시에 결정하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    보통의 원족 문제는 미지수가 $k$ 하나인데 여기서는 첫 원 안에 상수 $a$ 가 남아 있어 미지수가 둘이다. 점을 하나씩 대입해 따로 처리하려 하면 막히고, 두 점 대입을 동시에 세워 $(k,\,a)$ 연립으로 봐야 $a=2$, $k=1$ 로 닫힌다.
    그다음은 두 식을 더해 2로 나누고 완전제곱해 $r^2=5$ 를 읽는 표준 절차다. [분류 이슈] 벤더 「확인체크」(★1 출발)이지만 미지수 2개·조건 2개 연립에 넓이 변환까지 있어 ★3 으로 두 단 올렸다 — 기록만 하고 라벨은 맞추지 않는다.
  tier: star_3
  mechanism_primary: '$C_1+kC_2=0$ 에 $(0,\,2)$, $(3,\,1)$ 대입 → $4-4a+4k=0$, $10+a-12k=0$ → $a=2$, $k=1$ → $x^2+y^2-4x-6y+8=0$ → $r^2=5$ → 넓이 $5\pi$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$5\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/93-220.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 점과 첫 원의 $a$ 배치를 바꿀 수 있다. 제약: 미지수가 $(k,\,a)$ 둘이므로 조건도 정확히 둘이어야 하고, 두 대입식이 일차독립이어야 한다(두 점이 원족의 같은 원 위에 있으면 부정). $a$ 가 곱해진 항이 두 점 대입에서 모두 사라지지 않도록 점을 고르고, 최종 $r^2$ 이 정수가 되도록 계수를 맞춘다.'
    creative: '(1) 넓이 대신 중심의 좌표나 $x$축과의 교점을 묻기(★3 유지) (2) 점 하나를 「중심이 직선 $y=x$ 위」 같은 위치 조건으로 바꾸기(같은 연립 골조 ★3) (3) 미지 상수 $a$ 를 없애고 점 하나만 주면 표준 원족 문제로 내려가 ★2 (4) 세 점을 주면 과잉조건이 되어 두 원이 만날 조건까지 따져야 하므로 ★4.'
```

```yaml
- id: GN-CM2-94-e20
  page: 94
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    두 원 $x^2+y^2=4$, $x^2+y^2-4x-4y=0$ 의 공통인 현의 길이.
  category: '두 식 빼기 → 공통현 직선 → 중심과의 거리 $d$ → $2\sqrt{r^2-d^2}$'
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 원의 공통인 현의 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    빼면 $x+y-1=0$, 원점에서의 거리 $d=\dfrac{1}{\sqrt2}$, 길이 $2\sqrt{4-\dfrac12}=\sqrt{14}$.
    교점을 직접 구하지 않고 거리로 처리하는 것이 이 예제가 가르치는 절차이므로 통찰로 세지 않는다. 다만 공통현 직선 + 현의 길이 공식 두 도구를 잇고 무리수 정리가 있어 M_total 5 에도 −1 을 적용하지 않고 「필수」 출발점 ★2 를 유지한다.
  tier: star_2
  mechanism_primary: '두 식 빼기 → $x+y-1=0$ → 원점에서 거리 $d=\dfrac{1}{\sqrt2}$ → $2\sqrt{4-\dfrac12}=\sqrt{14}$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{14}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/94-e20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 원의 계수를 바꿀 수 있다. 제약: $r^2-d^2>0$(두 원이 실제로 두 점에서 만남)이어야 하고, 중심이 원점인 원을 하나 두면 거리 계산이 상수항만으로 끝나 난이도가 내려간다. 답을 유리수로 떨어뜨리려면 $r^2-d^2$ 이 완전제곱이 되도록 상수항을 고른다.'
    creative: '(1) 현의 길이를 주고 상수를 역산하기(★2 · 94-222·95-224 형) (2) 두 교점과 원점이 이루는 삼각형의 넓이를 묻기(★2 · 95-225 형) (3) 두 원 각각에서 거리를 재어 같은 답이 나오는지 확인시키기(검증 강제 ★3) (4) 공통현의 길이가 최대가 되도록 매개변수를 정하기(★4).'
```

```yaml
- id: GN-CM2-94-221
  page: 94
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 원 $x^2+y^2-2x-4y+1=0$, $x^2+y^2-6x+5=0$ 의 공통인 현의 길이.
  category: '두 식 빼기 → 공통현 → 한 원의 중심·반지름(완전제곱) → $2\sqrt{r^2-d^2}$'
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 원의 공통인 현의 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    빼면 $x-y-1=0$. 둘째 원을 완전제곱해 중심 $(3,\,0)$, $r=2$ 를 얻고 $d=\sqrt2$ → 길이 $2\sqrt2$.
    94-e20 의 직접 적용판인데 두 원 모두 중심이 원점이 아니라 완전제곱 단계가 하나 더 붙는다. 확인체크 출발점 ★1 에 그 한 단계를 반영해 ★2 로 둔다(1단 조정). 어느 원을 쓰든 같은 답이 나오는 것은 자명한 절차라 통찰로 세지 않는다.
  tier: star_2
  mechanism_primary: '두 식 빼기 → $x-y-1=0$ → 둘째 원 중심 $(3,\,0)$, $r=2$, $d=\sqrt2$ → $2\sqrt{4-2}=2\sqrt2$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/94-221.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 원의 일차항·상수항을 바꿀 수 있다. 제약: 계산이 가벼운 쪽 원(완전제곱이 깔끔한 쪽)이 하나는 있어야 하고, $r^2-d^2>0$ 을 만족해야 한다. 공통현이 $x-y+c=0$ 처럼 $\sqrt2$ 분모를 만들면 답에 무리수가 남으므로 정수 답을 원하면 공통현을 축에 평행하게 만든다.'
    creative: '(1) 두 원 중 하나의 상수항을 미지수로 두고 현의 길이를 주기(★2) (2) 공통현이 두 원을 각각 자르는 길이를 비교시키기(★3) (3) 두 교점과 두 중심이 이루는 사각형의 넓이를 묻기(★3) (4) 현의 길이 대신 두 교점 사이 거리의 제곱만 묻기(★2 유지 · 무리수 정리 제거).'
```

```yaml
- id: GN-CM2-94-222
  page: 94
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 원 $x^2+y^2-5=0$, $x^2+y^2+4x-3y+a=0$ 의 공통인 현의 길이가 $2$ 일 때 양수 $a$.
  category: '현의 길이 → 중심거리 $d$ 역산 → 절댓값 방정식 → 양수 조건으로 선택'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구하는 값이 현의 길이에 직접 들어 있지 않으므로, $2\\sqrt{r^2-d^2}=2$ 를 $d$ 에 대해 되돌려 「중심에서 공통현까지의 거리 = 2」라는 조건으로 먼저 옮긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "공통인 현의 길이 조건에서 상수 역산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    공통현은 $4x-3y+5+a=0$, 첫 원은 중심 원점 $r=\sqrt5$. 길이 2 → 반현 1 → $d^2=4$ → $\dfrac{|5+a|}{5}=2$ 로 되돌리는 방향이 이 문제의 전부다.
    절댓값에서 후보가 둘 나오지만 「양수 $a$」가 발문에 명시돼 있어 기각이 아니라 선택이다(I-VF 아님 · T-부호 함정으로 처리). 확인체크 출발점 ★1 에 역산 한 겹을 더해 ★2 로 둔다.
  tier: star_2
  mechanism_primary: '공통현 $4x-3y+5+a=0$ → 길이 $2$ → $d=2$ → $\dfrac{|5+a|}{5}=2$ → $a=5$ 또는 $-15$ → 양수 $a=5$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/94-222.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫 원의 반지름과 주어진 현의 길이, 둘째 원의 일차항을 바꿀 수 있다. 제약: 반현 길이 $<r$ 이어야 하고 $d=\sqrt{r^2-(\ell/2)^2}$ 가 깔끔한 값이 되도록 고른다. 공통현 계수의 크기 $\sqrt{4^2+3^2}=5$ 처럼 피타고라스 수로 맞추면 분모가 정리된다. 절댓값 해 두 개 중 하나만 살아남게 하려면 부호 조건(양수 · 정수 등)을 함께 준다.'
    creative: '(1) 「모든 상수의 합」을 묻어 두 해를 모두 쓰게 하기(★2 · 95-224 형) (2) 「양수」 조건을 빼고 두 값을 모두 구하게 하기(★2) (3) 현의 길이가 최대가 되는 $a$ 를 묻기(공통현이 중심을 지날 때 → ★3) (4) 두 원이 만나지 않는 $a$ 의 범위를 함께 묻기(★3).'
```

### 연습문제 STEP 1

```yaml
- id: GN-CM2-95-223
  page: 95
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    두 원 $x^2+y^2-6=0$, $x^2+y^2-4x+ky=0$ 의 교점을 지나는 직선이 직선 $x-y+3=0$ 과 평행할 때 두 직선 사이의 거리($k$ 는 상수).
  category: '두 식 빼기 → 공통현 → 평행 조건으로 $k$ → 평행선 사이의 거리'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 원의 교점을 지나는 직선과 주어진 직선의 위치 관계(수직·평행)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    빼면 $4x-ky-6=0$. 기울기 $\dfrac4k=1$ 에서 $k=4$ 이고 공통현은 $2x-2y-3=0$ 이 된다. 평행선 사이의 거리는 한 직선 위의 점을 잡아 점과 직선 사이의 거리로 넘긴다.
    도구는 셋(공통현 · 평행 조건 · 거리 공식)이지만 모두 이 단원과 앞 단원의 표준 절차를 순서대로 쓸 뿐 갈래가 없다. STEP 1 출발점 ★2 를 M_total 7 에도 유지한다.
  tier: star_2
  mechanism_primary: '두 식 빼기 → $4x-ky-6=0$ → 평행 $\dfrac4k=1$ → $k=4$ → $x-y-\dfrac32=0$ 과 $x-y+3=0$ 사이 거리 $\dfrac{9\sqrt2}{4}$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{9\sqrt{2}}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/95-223.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '기준 직선의 기울기·절편과 두 원의 계수를 바꿀 수 있다. 제약: 뺀 식이 $k$ 에 대한 일차 기울기 조건을 주어야 하고($y$ 항이 한쪽 원에만 있어야 편하다), 두 직선이 평행하되 일치하지는 않아야 한다. 거리의 분모에 $\sqrt2$ 가 남는 것이 싫으면 기준 직선을 축에 평행하게 둔다.'
    creative: '(1) 평행 대신 수직으로 바꾸기(★2 · 93-218 형) (2) 거리 대신 두 직선과 좌표축이 만드는 도형의 넓이를 묻기(★3) (3) 공통현이 원 $x^2+y^2=6$ 을 자르는 현의 길이까지 묻기(도구 하나 추가 ★3) (4) 「평행할 때」 대신 「거리가 $\dfrac{9\sqrt2}{4}$ 일 때 $k$」로 방향을 뒤집으면 역산 통찰이 생겨 ★3.'
```

```yaml
- id: GN-CM2-95-224
  page: 95
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    두 원 $x^2+y^2-4=0$, $x^2+y^2+3x-4y+k=0$ 의 공통인 현의 길이가 $2\sqrt3$ 이 되도록 하는 모든 상수 $k$ 의 값의 합.
  category: '현의 길이 → 중심거리 $d$ 역산 → 절댓값 방정식 → 두 해의 합'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$2\\sqrt{r^2-d^2}=2\\sqrt3$ 을 $d=1$ 로 되돌려, 구하는 $k$ 를 「중심에서 공통현까지의 거리」 조건으로 옮긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "공통인 현의 길이 조건에서 상수 역산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    공통현은 $3x-4y+4+k=0$, 첫 원은 중심 원점 $r=2$. 반현 $\sqrt3$ → $d=1$ → $\dfrac{|4+k|}{5}=1$ 로 되돌리면 후보는 둘이다.
    「모든 값의 합」이라 두 해를 모두 살려야 하지만, 절댓값 구간 분할은 스키마상 표준 분기(T-부호)라 I-MI 로 세지 않았다. 94-222 와 같은 골조이고 STEP 1 출발점 ★2 를 유지한다.
  tier: star_2
  mechanism_primary: '공통현 $3x-4y+4+k=0$ → $d=1$ → $\dfrac{|4+k|}{5}=1$ → $k=1$ 또는 $k=-9$ → 합 $-8$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/95-224.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫 원의 반지름과 주어진 현의 길이, 둘째 원의 일차항을 바꿀 수 있다. 제약: 반현 $<r$ 이어야 하고, 공통현 계수 $(3,\,-4)$ 처럼 크기가 정수인 조합을 쓰면 $\dfrac{|c|}{5}$ 가 정리된다. 두 해의 합만 묻는다면 절댓값 양쪽이 모두 유효해야 하므로 부호 조건을 걸지 않는다. 답을 근과 계수의 관계로도 낼 수 있게 하려면 $|4+k|=5$ 를 이차식 $(4+k)^2=25$ 로 보는 길을 열어 둔다.'
    creative: '(1) 「양수 $k$」 하나만 고르게 하기(★2 · 94-222 형) (2) 두 해의 곱이나 차를 묻기(★2) (3) 현의 길이가 아니라 두 원이 접할 조건으로 바꾸기(중심거리 = 반지름 합·차 → ★3) (4) $k$ 의 값에 따라 두 원의 위치 관계가 어떻게 변하는지 분류시키기(★4).'
```

```yaml
- id: GN-CM2-95-225
  page: 95
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    두 원 $x^2+y^2=9$, $x^2+y^2-8x-6y+1=0$ 의 교점을 A, B 라 할 때 삼각형 OAB 의 넓이(O 는 원점).
  category: '공통현 → 원점에서의 거리 $d$(높이) → 현의 길이 $\seg{AB}$(밑변) → 넓이'
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "교점 A, B 를 직접 구하지 않고, 원점에서 공통현에 내린 거리 하나를 삼각형의 높이와 현의 길이 계산에 동시에 쓰는 기하 표현으로 옮긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "공통현과 원점이 이루는 삼각형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    빼면 $4x+3y-5=0$, 원점에서의 거리 $d=1$. 이 $d$ 가 곧 삼각형 OAB 의 높이이고, 같은 $d$ 로 $\seg{AB}=2\sqrt{9-1}=4\sqrt2$ 를 얻는다.
    교점 좌표를 연립으로 구하려 들면 계산이 크게 불어나므로 「거리 하나로 높이와 밑변을 동시에」가 이 문제의 핵심 한 수다(I-RT d1). 통찰 1개·M_total 5 라 +1 조건(통찰 2개 이상 또는 depth 3)에 못 미쳐 STEP 1 출발점 ★2 를 유지한다.
  tier: star_2
  mechanism_primary: '공통현 $4x+3y-5=0$ → 원점에서 거리 $d=1$(= 높이) → $\seg{AB}=2\sqrt{9-1}=4\sqrt2$ → 넓이 $\dfrac12 \times 4\sqrt2 \times 1=2\sqrt2$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/95-225.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫 원의 반지름과 둘째 원의 계수를 바꿀 수 있다. 제약: 원점 중심 원을 하나 두어야 「거리 = 높이」가 성립한다. 공통현 계수를 $(4,\,3)$ 처럼 피타고라스 수로 맞추면 $d$ 가 정수로 떨어지고, $r^2-d^2$ 을 완전제곱수로 두면 밑변도 정리된다.'
    creative: '(1) 원점 대신 둘째 원의 중심을 꼭짓점으로 삼기(높이가 다른 거리로 바뀌지만 골조 유지 ★2) (2) 삼각형 OAB 가 정삼각형·직각삼각형이 되도록 상수를 정하기(역산 추가 ★3) (3) 두 교점과 두 중심이 이루는 사각형(연 모양)의 넓이를 묻기(★3) (4) 넓이가 최대가 되도록 매개변수를 정하기(★4).'
```

### 연습문제 STEP 2

```yaml
- id: GN-CM2-95-226
  page: 95
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    두 원 $x^2+y^2+6x+2y+1=0$, $x^2+y^2-2x-3=0$ 의 교점을 지나는 원 중 넓이가 최소인 원의 중심을 $(a,\,b)$ 라 할 때 $\dfrac{b}{a}$.
  category: '넓이 최소 ⇔ 공통현이 지름 → 중심 = 공통현의 중점 = 한 원의 중심에서 내린 수선의 발'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「교점을 지나는 원 중 넓이가 최소」를 「두 교점을 지름의 양 끝으로 하는 원」으로 옮긴다 — 원족의 반지름을 $k$ 의 함수로 세워 최소화하지 않고 조건 자체를 바꾼다"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그 원의 중심은 공통현의 중점이고, 이는 한 원의 중심에서 공통현에 내린 수선의 발이라는 기하 표현으로 옮겨 교점 좌표 없이 계산한다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "교점을 지나는 원 중 넓이가 최소인 원(공통현이 지름)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    공통현은 $4x+y+2=0$. 원족 $C_1+kC_2=0$ 의 반지름을 $k$ 의 식으로 만들어 최소화하는 길도 있지만 계산이 무겁고, 「넓이 최소 = 공통현이 지름」으로 옮기면 중심은 공통현의 중점 하나로 정해진다.
    그 중점을 둘째 원의 중심 $(1,\,0)$ 에서 공통현에 내린 수선의 발로 구하면 $\left(-\dfrac{7}{17},\,-\dfrac{6}{17}\right)$ 이고 비만 물으므로 분모 17 은 약분된다. 통찰 2개(EQV d2 + RT d1)라 STEP 2 출발점 ★3 에 +1 하여 ★4. 통찰 3개·SC/VF/SYM/XU 요건을 채우지 못해 ★5 는 아니다.
  tier: star_4
  mechanism_primary: '공통현 $4x+y+2=0$ → 넓이 최소 = 공통현이 지름 → 중심은 $(1,\,0)$ 에서 내린 수선의 발 $\left(-\dfrac{7}{17},\,-\dfrac{6}{17}\right)$ → $\dfrac{b}{a}=\dfrac67$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{6}{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/95-226.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 원의 계수를 바꿀 수 있다. 제약: 두 원이 두 점에서 만나야 하고(중심거리 < 반지름 합 · > 차), 수선의 발 좌표의 분모는 공통현 계수 제곱합이라 $(4,\,1) \to 17$ 처럼 커지기 쉽다. 좌표 자체를 물으려면 계수를 $(3,\,4)$ 류로 두어 분모 25 를 약분되게 하거나 공통현을 축에 평행하게 만든다. 비 $\dfrac{b}{a}$ 를 물으면 분모가 약분되므로 계수 선택이 자유롭다.'
    creative: '(1) 최소 원의 반지름이나 넓이를 묻기(같은 골조 · 제곱근 정리 추가 ★4) (2) 「중심이 $x$축 위」 같은 위치 조건으로 바꾸면 계수 조건 한 줄로 내려가 ★3(95-227 형) (3) 두 교점을 지나는 원 중 반지름이 특정 값인 원을 묻기(원족 반지름 식 + 이차방정식 → ★4) (4) 「넓이 최소」를 유지한 채 두 원 중 하나를 직선으로 바꾸면 원과 직선의 교점 문제로 이동(★3).'
```

```yaml
- id: GN-CM2-95-227
  page: 95
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    두 원 $x^2+y^2+4x+4y=0$, $x^2+y^2+x-2y-6=0$ 의 교점을 지나고 중심이 $x$축 위에 있는 원의 반지름의 길이.
  category: '원족 정리 → 「중심이 $x$축 위」를 $y$ 계수 $=0$ 으로 → $k$ → 완전제곱'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「중심이 $x$축 위에 있다」를 중심 좌표를 구하지 않고 원족 식의 $y$ 의 계수 $4-2k=0$ 이라는 계수 조건으로 옮긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "교점을 지나는 원 중 중심 위치 조건을 만족하는 원"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    원족을 정리하면 $(1+k)(x^2+y^2)+(4+k)x+(4-2k)y-6k=0$. 중심의 $y$ 좌표는 $-\dfrac{4-2k}{2(1+k)}$ 이므로 「$x$축 위」는 결국 $y$ 계수가 0, 즉 $k=2$ 다.
    중심 좌표를 $k$ 의 분수식으로 끌고 가지 않고 계수 하나만 보는 착안이 계산량을 크게 줄인다(EQV d1). 이후 $x^2+y^2+2x-4=0$ 을 완전제곱해 $r=\sqrt5$. $k \ne -1$ 확인이 형식적으로 필요하다. STEP 2 출발점 ★3 을 유지한다.
  tier: star_3
  mechanism_primary: '원족 $(1+k)(x^2+y^2)+(4+k)x+(4-2k)y-6k=0$ → $y$ 계수 $4-2k=0$ → $k=2$ → $x^2+y^2+2x-4=0$ → $(x+1)^2+y^2=5$ → $r=\sqrt5$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sqrt{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/95-227.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 원의 일차항·상수항을 바꿀 수 있다. 제약: $y$ 계수 조건이 $k$ 에 대한 일차식이어야 하고 그 해가 $-1$ 이 아니어야 한다($k=-1$ 이면 원이 아니라 공통현). $1+k$ 로 나눈 뒤 완전제곱이 깔끔하려면 $(4+k)$, $-6k$ 가 $1+k$ 의 배수에 가깝도록 계수를 고른다. $r^2$ 이 음수가 되면 그런 원이 없으므로 부호를 확인한다.'
    creative: '(1) 「중심이 $y$축 위」·「중심이 직선 $y=x$ 위」로 바꾸기(계수 조건만 달라짐 ★3) (2) 「$x$축에 접한다」로 바꾸면 중심의 $y$ 좌표와 반지름을 비교해야 하므로 ★4 (3) 반지름 대신 중심의 좌표나 넓이를 묻기(★3 유지) (4) 「넓이가 최소인 원」으로 바꾸기(★4 · 95-226 형).'
```

### 연습문제 실력 UP

```yaml
- id: GN-CM2-95-228
  page: 95
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    원 $x^2+y^2=4$ 를 점 $(-1,\,0)$ 에서 $x$축에 접하도록 선분 PQ 를 접는 선으로 하여 접었을 때, 두 점 P, Q 를 지나는 직선의 방정식.
  category: '접기 = 선대칭 → 접힌 호는 합동인 원의 일부 → 그 원은 $(-1,\,0)$ 에서 $x$축에 접함 → 두 원의 공통현'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "「접는다」를 선분 PQ 에 대한 선대칭으로 읽고, 접힌 호가 원래 원과 합동(반지름 2)인 또 하나의 원의 일부임을 본다 — 그 원은 $x$축에 $(-1,\\,0)$ 에서 접하므로 중심이 $(-1,\\,2)$ 로 결정된다"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "P, Q 는 접어도 움직이지 않는 점이므로 두 원 위에 모두 있다 → 직선 PQ 는 두 원의 공통현이라는 이 단원의 도구로 옮긴다"
  insight_count: 2
  depth_score: 2.50
  type_id: null
  type_hint: "접기(선대칭)로 생긴 두 원의 공통현 — 접는 선의 방정식"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    접는 선 위의 점은 움직이지 않고, 접힌 조각은 합동이다. 이 두 사실을 쓰면 접힌 호는 반지름 2 이면서 $x$축에 $(-1,\,0)$ 에서 접하는 원 $(x+1)^2+(y-2)^2=4$ 의 일부이고, P, Q 는 두 원의 교점이 된다.
    거기까지 가면 남는 일은 두 식을 빼는 이 단원의 기본 절차뿐이다. 접힌 원의 중심이 $(-1,\,2)$ 인지 $(-1,\,-2)$ 인지는 그림의 접는 방향이 고정한다(T-부호 함정).
    실력 UP 출발점 ★4 에 통찰 2개(SYM d3 + RT d2)가 붙지만, ★5 요건인 통찰 3개 이상을 채우지 못해 ★4 로 둔다. 계산량은 오히려 이 단원에서 가장 가볍다.
  tier: star_4
  mechanism_primary: '접힌 호 = 반지름 2 이고 $(-1,\,0)$ 에서 $x$축에 접하는 원 $(x+1)^2+(y-2)^2=4$ → P, Q 는 두 원의 교점 → 두 식 빼기 → $2x-4y+5=0$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$2x-4y+5=0$'
  answer_source: "답지"
  figure: crop:fig-95-228.png
  latex: latex-bank/gn-cm2/items/95-228.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '원의 반지름과 접점의 위치를 바꿀 수 있다. 제약: 접점은 원래 원의 내부 쪽에 있어야(접점의 $x$좌표 절댓값 $<r$) 접힌 원과 원래 원이 두 점에서 만난다. 접힌 원의 중심은 (접점의 $x$좌표, $\pm r$) 로 자동 결정되며 부호는 그림이 고정한다. 공통현 계수를 정수로 두려면 반지름을 정수, 접점을 격자점으로 고른다.'
    creative: '(1) 접는 선 대신 접힌 호가 지나는 다른 점을 묻기(★4 유지) (2) $x$축이 아니라 주어진 직선에 접하도록 접기(접힌 원의 중심 결정에 거리 조건이 추가되어 ★5 후보) (3) 접는 선 PQ 의 길이(공통현의 길이)를 묻기(도구 하나 추가 ★4) (4) 접힌 부분의 넓이를 묻기(활꼴 계산 → 교육과정 밖) (5) 접점을 미지수로 두고 PQ 가 특정 직선과 평행할 조건을 묻기(역산 추가 ★5 후보).'
```

## 표본 판정 요약 (14문)

- ★ 분포: ★1 0 · ★2 10 · ★3 2 · ★4 2 · ★5 0
- 통찰형 7 · 절차형 7 · premium 0
- 통찰 유형 분포: I-BW 2 · I-EQV 2 · I-RT 2 · I-CON 1 · I-SYM 1 (총 8개 라벨 · 문항 7)
- type_hint 상위: 「공통인 현의 길이」 2 · 「교점을 지나는 직선과 주어진 직선의 위치 관계」 2 · 「원족에 점 대입」 2 · 「현의 길이 조건에서 상수 역산」 2 · 나머지 5종 각 1
- 대상층: 중하위권 6 · 중위권 4 · 중상위권 2 · 상위권 1 · 하위권 0(★1 이 없어 하위권 fit 문항이 없다)
- 그림: 1문(`crop:fig-95-228.png` · 접는 방향을 고정하는 역할)
- **★1 이 없는 이유**: 이 단원에는 「개념원리 익히기」 구역이 없고, 확인체크조차 공통현 직선을 만든 뒤 거리 공식이나 원족을 한 번 더 써야 한다. 벤더 출발점(확인체크 ★1)보다 1단 올린 문항이 4개(93-218 · 93-219 · 94-221 · 94-222)인데, 이는 모두 「도구 두 개 연결」이라는 같은 이유이므로 분류 이슈로는 올리지 않고 여기에 한 번만 적는다.
- 단원 전체의 계산량은 가볍다(M_total 4~7). 변별은 계산이 아니라 조건을 세 도구(공통현 · 원족 · 현의 길이)가 먹을 형태로 옮기는 한 수에서 나온다 — ★3 이상 4문(93-220 · 95-226 · 95-227 · 95-228)이 모두 그 지점에서 갈린다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-93-220 | 벤더 「확인체크」(필수 예제 뒤 → ★1 출발)이나 미지수가 $k$·$a$ 둘이고 두 점 조건을 연립으로 묶어야 하며 넓이 변환까지 있어 ★3 으로 두 단 올림. 확인체크 중 유일하게 원족의 표준 절차 밖으로 나감 | ★2 / ★3 |
| GN-CM2-95-224 | 현의 길이 → 중심거리 역산을 통찰(I-BW d1)로 인정할지 경계. 인정하면 통찰형, 불인정하면 절차형이며 ★2 는 어느 쪽이든 변하지 않음. 94-222 도 같은 판정을 공유하므로 카탈로그를 만들 때 한 번에 정해야 함 | ★2 (통찰형/절차형만 갈림) |

### 카탈로그 차원 메모

나중에 공통수학2 유형 카탈로그를 만들 때 참고할 이 범위의 관찰:

- **따로 세워야 할 유형 4종**: (1) 「두 원의 교점을 지나는 직선」 계열 — 점 통과·평행·수직이 한 유형의 조건 변주(93-e18 · 93-218 · 95-223). (2) 「원족 $C_1+kC_2=0$ 으로 교점을 지나는 원 구하기」(93-e19 · 93-219 · 93-220 · 95-226 · 95-227). (3) 「공통인 현의 길이」(94-e20 · 94-221). (4) 「현의 길이 조건에서 상수 역산」(94-222 · 95-224) — 방향이 반대라 (3)과 나누는 편이 변형 설계에 유리하다.
- **통합해도 될 유형**: 「원족 + 점 대입」(93-e19 · 93-219)은 지나는 점이 원점인지 아닌지만 다르므로 한 유형의 난이도 변주로 둔다. 「공통현과 주어진 직선의 평행」(95-223)과 「수직」(93-218)도 한 유형으로 묶고 조건만 파라미터화한다.
- **base ★ 제안**: 위 (1)(2)(3) 은 base ★2, (4) 는 base ★2(조건 변주로 ★3 까지), 「원족 + 위치 조건(중심이 축 위 · 넓이 최소)」은 별도 상위 유형으로 base ★3~4 가 맞다.
- **이 단원 고유의 상위 유형**: 95-228 의 「접기(선대칭)로 만든 합동인 원 → 공통현」은 이 단원 안에서 유일하고, 도형의 대칭 이동 단원과 걸친다. 카탈로그에서는 「원의 대칭 이동과 공통현」으로 따로 세우고 I-SYM 을 기본 통찰로 등록하는 편이 좋다.
- **★5 슬롯 부재**: 이 범위에는 ★5 가 없다. 통찰 3개 이상 + SC/VF/SYM/XU 요건을 채우려면 접기·역산·위치 조건 중 둘 이상을 겹쳐야 하는데, 이 단원의 시판 문항은 그 조합을 쓰지 않는다(변형 단계에서 95-228 의 창의 변형 (2)·(5)가 ★5 후보다).
