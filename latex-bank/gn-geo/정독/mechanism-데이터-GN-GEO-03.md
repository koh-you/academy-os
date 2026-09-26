---
name: mechanism-데이터-GN-GEO-03
description: 개념원리 기하 03 쌍곡선의 방정식(1/1 · 37~42쪽 37-60~42-73 · 19문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 기하 (22개정 · 학생용) · 전사본 latex-bank/gn-geo
  section: 03 쌍곡선의 방정식
  unit_code: GEO-03
  part: "1/1"
  extract_range: "37~42쪽 · 37-60~42-73"
  total_problems: 19
  unit_total: 19
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-geo/items/<id>.tex
  image_source: latex-bank/gn-geo/figures/ (crops.json)
---

# 개념원리 기하 · 03 쌍곡선의 방정식 (1/1) 정독 데이터 (v1.0)

37~42쪽 19문항 전수. 구역은 두 개다. 「개념원리 익히기」(37-60~37-63, 4문)는 정의·표준형·평행이동을 차례로 확인하는 개념 점검 층이라 ★1 을 출발점으로 잡았고, 「필수·발전 예제」(38-e11~42-73, 15문)는 필수 예제 5문(38-e11 · 39-e12 · 40-e13 · 41-e14 · 42-e15)과 그 뒤에 붙은 확인체크 10문으로 이루어진다. 확인체크는 통번호지만 위치상 직전 필수 예제와 같은 골조를 연습시키는 문항이므로, 이 파일에서는 개념원리 익히기의 확인체크(★1)와 달리 **필수 예제와 같은 ★2 를 출발점**으로 잡고 M_total·통찰로 조정했다. 이 단원에는 발전·특강·기출 태그가 없고 STEP 구역도 없다.

이 범위의 골조는 크게 넷이다. ⑴ 초점·거리의 차·주축으로 표준형을 세우기, ⑵ 주어진 식에서 초점·꼭짓점·주축·점근선을 읽기, ⑶ 일반형을 완전제곱으로 정리해 평행이동된 쌍곡선을 다루기, ⑷ 쌍곡선의 정의(거리의 차가 일정)를 도형 문제에 활용하기. 통찰이 실제로 요구되는 곳은 ⑷ 와 점근선의 기하 조건을 대수 조건으로 옮기는 자리뿐이고, 나머지는 공식 적용 절차형이다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-GEO-37-60
  page: 37
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 두 초점의 좌표와 두 초점에서의 거리의 차가 주어질 때 쌍곡선의 방정식을 구하는 4문. ⑴⑵ 는 초점이 $x$축 위, ⑶⑷ 는 $y$축 위에 있다.
  category: "쌍곡선의 정의 → a, c → b^2=c^2-a^2 → 표준형"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 초점과 거리의 차로 쌍곡선의 방정식 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    거리의 차 2a 와 초점의 c 를 읽어 b^2=c^2-a^2 에 넣는 한 줄 골조를 축만 바꿔 네 번 반복한다. 초점이 y축이면 우변이 -1 이라는 표기 함정(T-표기) 하나뿐이고 통찰은 없다. 개념원리 익히기 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: "거리의 차 = 2a → a, 초점 좌표 → c → b^2=c^2-a^2 → 초점이 놓인 축에 맞춰 우변을 1 또는 -1 로"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{x^2}{9}-\dfrac{y^2}{7}=1$ ⑵ $\dfrac{x^2}{16}-\dfrac{y^2}{32}=1$ ⑶ $\dfrac{x^2}{3}-\dfrac{y^2}{4}=-1$ ⑷ $\dfrac{x^2}{39}-\dfrac{y^2}{25}=-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/37-60.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초점의 c 와 거리의 차 2a 는 자유롭게 바꿀 수 있다. 제약은 c > a > 0 이어야 쌍곡선이 되고, b^2=c^2-a^2 이 정수나 간단한 무리수가 되도록 c^2-a^2 을 고르는 것. c=a 나 c<a 는 도형이 성립하지 않는다."
    creative: "(1) 거리의 차 대신 꼭짓점의 좌표를 주기(★1 유지) (2) 초점 하나와 점근선의 기울기를 주기(★2) (3) 초점을 x축·y축이 아닌 평행이동된 위치로 주면 중심 판정이 더해져 ★2."
```

```yaml
- id: GN-GEO-37-61
  page: 37
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴⑵ 주어진 쌍곡선의 초점·꼭짓점의 좌표, 주축의 길이, 점근선의 방정식을 구하고 그래프를 그리는 2문. ⑵ 는 $x^2-2y^2=-12$ 처럼 표준형이 아니어서 먼저 우변을 $\pm1$ 로 정리해야 한다.
  category: "표준형 정리 → a^2, b^2 → 초점·꼭짓점·주축·점근선"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 방정식에서 초점·꼭짓점·주축·점근선 읽고 그래프 그리기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    양변을 상수로 나눠 우변을 ±1 로 맞춘 뒤 a^2, b^2 를 읽어 c^2=a^2+b^2 에 넣으면 네 항목이 한 번에 나온다. 우변이 -1 이면 주축이 y축이 되고 점근선 기울기의 분모·분자가 뒤바뀐다는 표기 함정 하나뿐. 통찰 없음·M_total 5 로 개념 확인 구역 ★1.
  tier: star_1
  mechanism_primary: "우변을 ±1 로 정리 → a^2, b^2 읽기 → c^2=a^2+b^2 → 초점·꼭짓점·주축 2a·점근선 y=±(b/a)x"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 초점의 좌표: $(\sqrt{5},\,0)$, $(-\sqrt{5},\,0)$, 꼭짓점의 좌표: $(2,\,0)$, $(-2,\,0)$, 주축의 길이: $4$, 점근선의 방정식: $y=\pm\dfrac{1}{2}x$ ⑵ 초점의 좌표: $(0,\,3\sqrt{2})$, $(0,\,-3\sqrt{2})$, 꼭짓점의 좌표: $(0,\,\sqrt{6})$, $(0,\,-\sqrt{6})$, 주축의 길이: $2\sqrt{6}$, 점근선의 방정식: $y=\pm\dfrac{\sqrt{2}}{2}x$ (그래프는 답지 참조)'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-geo/items/37-61.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a^2, b^2 의 값과 우변의 상수를 바꿀 수 있다. 제약은 a^2, b^2 가 양수여야 하고, 초점·점근선 기울기가 지저분한 무리수가 되지 않도록 a^2+b^2 를 제곱수나 간단한 무리수로 두는 것. ⑵ 처럼 정리 전 계수는 서로소로."
    creative: "(1) 네 항목 중 하나만 묻기(★1 유지) (2) 점근선과 초점만 주고 방정식을 거꾸로 세우게 하기(★2 · I-EQV) (3) 같은 점근선을 갖는 두 쌍곡선(우변 1 과 -1)을 비교시키면 축 판정이 핵심이 되어 ★2."
```

```yaml
- id: GN-GEO-37-62
  page: 37
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴⑵ 평행이동된 쌍곡선의 중심·초점·꼭짓점의 좌표와 점근선의 방정식을 구하는 2문. ⑵ 는 $-5(x+1)^2+4(y-1)^2=20$ 으로 주어져 우변을 $1$ 로 정리해야 한다.
  category: "우변 정리 → 중심 (m, n) → a^2, b^2, c → 각 요소에 평행이동 적용"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동된 쌍곡선의 중심·초점·꼭짓점·점근선"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    이미 (x-m)^2, (y-n)^2 꼴로 묶여 있어 상수로 나누면 중심이 바로 보이고, 원점 기준으로 구한 요소에 (m, n) 을 더하기만 하면 된다. 점근선도 y-n=±(b/a)(x-m) 대입. 새 착안 없이 평행이동 규칙 한 겹이라 개념 확인 구역 ★1 유지.
  tier: star_1
  mechanism_primary: "우변을 ±1 로 정리 → 중심 (m, n) 확인 → 원점 쌍곡선의 초점·꼭짓점·점근선을 구해 (m, n) 만큼 평행이동"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 중심의 좌표: $(0,\,3)$, 초점의 좌표: $(3\sqrt{5},\,3)$, $(-3\sqrt{5},\,3)$, 꼭짓점의 좌표: $(3,\,3)$, $(-3,\,3)$, 점근선의 방정식: $y=2x+3$, $y=-2x+3$ ⑵ 중심의 좌표: $(-1,\,1)$, 초점의 좌표: $(-1,\,4)$, $(-1,\,-2)$, 꼭짓점의 좌표: $(-1,\,\sqrt{5}+1)$, $(-1,\,-\sqrt{5}+1)$, 점근선의 방정식: $y=\dfrac{\sqrt{5}}{2}x+\dfrac{\sqrt{5}}{2}+1$, $y=-\dfrac{\sqrt{5}}{2}x-\dfrac{\sqrt{5}}{2}+1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-geo/items/37-62.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중심 (m, n) 과 a^2, b^2 를 바꿀 수 있다. ⑵ 처럼 계수를 앞에 둘 때는 우변으로 나눈 뒤 두 분모가 모두 양수가 되도록 부호를 맞춰야 하고, c^2=a^2+b^2 가 제곱수가 되게 두면 초점이 정수로 떨어진다."
    creative: "(1) 중심을 원점으로 되돌리면 ★1 하한 (2) 점근선 두 개와 한 꼭짓점을 주고 방정식을 세우게 하면 역방향이 되어 ★2 · I-BW (3) 평행이동 전후 두 쌍곡선의 초점 사이 거리를 묻기(★2)."
```

```yaml
- id: GN-GEO-37-63
  page: 37
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴⑵ 일반형 $x^2-2y^2+4x+12y-10=0$ 을 완전제곱으로 정리해 우변이 $-1$ 인 표준형으로 바꾸고, 그 중심·초점·꼭짓점의 좌표와 점근선의 방정식을 구하는 2문.
  category: "일반형 → 완전제곱 → 우변 -1 표준형 → 중심·초점·꼭짓점·점근선"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 일반형을 표준형으로 고쳐 요소 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x항과 y항을 각각 묶어 완전제곱하고 상수를 이항한 뒤 우변으로 나누는 처리가 앞 문항보다 한 겹 더 붙는다. 우변이 -4 로 나와 -1 이 되면서 주축이 y축으로 바뀌는 지점이 유일한 함정이고 통찰은 없다. M_total 7 로 개념원리 익히기 출발점 ★1 에서 +1.
  tier: star_2
  mechanism_primary: "x·y 각각 완전제곱 → 상수 이항 → 우변으로 나눠 -1 표준형 → 중심 (m, n) 기준으로 초점·꼭짓점·점근선"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{(x+2)^2}{4}-\dfrac{(y-3)^2}{2}=-1$ ⑵ 중심의 좌표: $(-2,\,3)$, 초점의 좌표: $(-2,\,\sqrt{6}+3)$, $(-2,\,-\sqrt{6}+3)$, 꼭짓점의 좌표: $(-2,\,\sqrt{2}+3)$, $(-2,\,-\sqrt{2}+3)$, 점근선의 방정식: $y=\dfrac{\sqrt{2}}{2}x+\sqrt{2}+3$, $y=-\dfrac{\sqrt{2}}{2}x-\sqrt{2}+3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/37-63.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x^2, y^2 의 계수와 일차항·상수항을 바꿀 수 있다. 제약은 두 제곱항의 계수가 서로 반대 부호여야 쌍곡선이고, 완전제곱 후 남는 상수가 0 이 아니어야 한다(0 이면 점근선 두 직선으로 퇴화). 상수를 계수의 배수로 두면 분모가 정수."
    creative: "(1) 우변이 +1 이 되도록 상수만 바꿔 주축 방향을 뒤집기(★2 유지) (2) 퇴화하는 상수를 주고 도형이 무엇인지 묻기(★3 · I-MI) (3) 정리한 표준형으로 원점과 초점 사이 거리나 넓이를 이어서 묻기(★2)."
```

### 필수·발전 예제

```yaml
- id: GN-GEO-38-e11
  page: 38
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 초점 $(0,\,\pm2\sqrt{5})$, 꼭짓점 $(0,\,\pm1)$ 인 쌍곡선의 방정식 ⑵ 초점 $(\pm3,\,0)$, 주축의 길이 $2\sqrt{2}$ 인 쌍곡선이 점 $(k,\,7)$ 을 지날 때 양수 $k$.
  category: "꼭짓점·주축 → a, 초점 → c → b^2=c^2-a^2 → 표준형 → 지나는 점 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 방정식 — 초점과 꼭짓점(주축)으로 결정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a 는 꼭짓점 좌표 또는 주축의 절반, c 는 초점 좌표에서 바로 읽고 b^2=c^2-a^2 로 식을 완성한 뒤 ⑵ 에서 점을 대입해 k 를 구한다. 초점이 y축이면 우변이 -1 이라는 판정과 양수 조건으로 k 의 부호를 거르는 것이 함정. 통찰 없는 표준 절차라 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "꼭짓점·주축 → a, 초점 → c → b^2=c^2-a^2 → 축에 맞는 표준형 → 점 (k, 7) 대입 후 양수 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{x^2}{19}-y^2=-1$ ⑵ $4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/38-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초점의 c, 꼭짓점의 a, 지나는 점의 한 좌표를 바꿀 수 있다. 제약은 c > a > 0, 그리고 ⑵ 에서 대입 후 k^2 이 양수 제곱수가 되도록 주어진 y 좌표를 고르는 것. 답을 양수 하나로 묶으려면 문두의 양수 조건을 유지한다."
    creative: "(1) k 대신 지나는 점의 y 좌표를 묻기(★2 유지) (2) 주축 대신 점근선의 기울기를 주기(★2) (3) 지나는 점을 두 개 주고 a^2, b^2 를 모두 미지수로 두면 연립이 되어 ★3."
```

```yaml
- id: GN-GEO-38-64
  page: 38
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    타원 $\dfrac{x^2}{12}+\dfrac{y^2}{5}=1$ 과 두 초점을 공유하고 주축의 길이가 $4$ 인 쌍곡선의 방정식.
  category: "타원의 c^2=a^2-b^2 → 공유 초점 → 쌍곡선의 c^2=a^2+b^2"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "타원과 초점을 공유하는 쌍곡선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    타원에서 c^2=12-5=7 을 구하고, 주축 4 에서 a=2 를 얻어 쌍곡선 쪽에서는 b^2=c^2-a^2 로 뒤집어 쓴다. 두 곡선의 c^2 공식 부호가 반대라는 것이 유일하면서 실제 오답이 몰리는 지점이라, M_total 5 지만 -1 을 적용하지 않고 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "타원 c^2=a^2-b^2 로 초점 확정 → 쌍곡선도 같은 c → 주축의 절반 a → b^2=c^2-a^2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{x^2}{4}-\dfrac{y^2}{3}=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/38-64.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원의 a^2, b^2 와 쌍곡선의 주축 길이를 바꿀 수 있다. 제약은 타원의 c^2=a^2-b^2 가 양수여야 하고, 쌍곡선 쪽에서 b^2=c^2-a^2 도 양수가 되도록 주축의 절반이 c 보다 작아야 하는 것."
    creative: "(1) 쌍곡선을 주고 초점을 공유하는 타원을 묻는 역방향(★2 유지) (2) 초점 공유에 더해 두 곡선의 교점을 묻기(★3) (3) 타원의 장축이 y축이 되게 바꿔 쌍곡선의 우변도 -1 이 되게 하기(★2 · 축 판정 강화)."
```

```yaml
- id: GN-GEO-38-65
  page: 38
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    초점이 $(0,\,\pm2)$ 이고 점 $(2,\,\sqrt{6})$ 을 지나는 쌍곡선의 방정식.
  category: "y축 초점 표준형 → c 관계로 미지수 하나 소거 → 점 대입 → 이차방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "초점과 지나는 점으로 쌍곡선의 방정식 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    우변 -1 표준형에 a^2+b^2=4 를 넣어 미지수를 하나로 줄인 뒤 지나는 점을 대입하면 분수식이 이차방정식으로 정리된다. 두 근 중 분모가 양수가 되는 쪽만 남기는 범위 함정이 있으나 미정계수 연립이라는 표준 절차 안이라 통찰로 세지 않았다. M_total 7 로 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "초점 → a^2+b^2=c^2 로 미지수 하나 소거 → 지나는 점 대입 → 이차방정식 → 양수 근 채택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{x^2}{2}-\dfrac{y^2}{2}=-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/38-65.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초점의 c 와 지나는 점의 좌표를 바꿀 수 있다. 제약은 대입 후 얻는 이차방정식이 유리근을 갖고 그 근이 0 과 c^2 사이여야 하는 것. 지나는 점은 쌍곡선 위에 실제로 있어야 하므로 먼저 답을 정하고 점을 역산하는 편이 안전하다."
    creative: "(1) 초점 대신 점근선을 주기(★2) (2) 지나는 점을 두 개 주고 초점을 묻는 역방향(★3 · I-BW) (3) 두 근이 모두 양수가 되도록 만들어 어느 쪽이 조건에 맞는지 검증시키면 ★3 · I-VF."
```

```yaml
- id: GN-GEO-39-e12
  page: 39
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 초점 $(0,\,\pm5)$ 이고 점근선이 $y=\pm\dfrac{1}{2}x$ 인 쌍곡선의 방정식 ⑵ $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$ 의 점근선이 $y=\pm\sqrt{3}x$ 이고 점 $(-2,\,\sqrt{6})$ 을 지날 때 $a^2+b^2$.
  category: "점근선의 기울기 → a와 b의 비 → 초점 또는 지나는 점으로 크기 확정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 점근선 — 기울기로 a와 b의 비를 정하고 나머지 조건으로 크기 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    점근선은 a 와 b 의 비만 주므로 비를 먼저 고정하고 ⑴ 은 c^2=a^2+b^2, ⑵ 는 지나는 점으로 크기를 확정하는 두 단계 골조다. 우변이 -1 일 때 기울기가 b/a 가 아니라 a/b 라는 뒤집힘이 유일한 함정. 표준 공식 적용이라 통찰 없음, 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "점근선 기울기 → a와 b의 비 고정 → 초점 c^2=a^2+b^2 또는 지나는 점 대입으로 크기 확정 → 값 계산"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{x^2}{20}-\dfrac{y^2}{5}=-1$ ⑵ $8$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/39-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점근선의 기울기와 초점의 c, 지나는 점을 바꿀 수 있다. 제약은 기울기의 제곱이 유리수여야 비가 깔끔하고, ⑴ 에서 비와 c^2 을 합칠 때 a^2, b^2 이 정수로 떨어지게 c^2 을 비의 합의 배수로 두는 것."
    creative: "(1) 점근선과 한 꼭짓점을 주기(★2 유지) (2) 점근선이 수직이 되는 조건으로 바꾸면 직각쌍곡선 판정이 붙어 ★2~3 · I-EQV (3) 점근선을 평행이동된 형태로 주면 중심 판정이 더해져 ★3."
```

```yaml
- id: GN-GEO-39-66
  page: 39
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=-1$ 의 주축의 길이가 $4$ 이고 한 점근선이 $y=2x$ 일 때 양수 $a$, $b$ 에 대한 $a+b$.
  category: "우변 -1 → 주축은 y축 2b → 점근선 기울기 b/a"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "우변이 -1 인 쌍곡선의 주축과 점근선에서 a, b 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    우변이 -1 이므로 주축이 y축이고 길이가 2b 라는 판정에서 b=2 가 나오고, 점근선 기울기 b/a=2 에서 a=1 이 나온다. 계산은 두 줄이지만 축과 기울기의 분모·분자를 뒤집는 표기 함정이 문제의 전부라 M_total 5 에도 -1 을 적용하지 않고 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "우변 -1 → 주축 2b=4 로 b → 점근선 기울기 b/a → a → a+b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/39-66.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주축의 길이와 점근선의 기울기를 바꿀 수 있다. 제약은 a, b 가 양수이고 기울기가 b/a 로 유리수가 되게 두는 것. 우변을 +1 로 바꾸면 주축이 2a 가 되므로 답이 달라진다는 점을 반드시 함께 조정한다."
    creative: "(1) a+b 대신 초점의 좌표나 초점 사이 거리를 묻기(★2 유지) (2) 주축 대신 두 초점 사이 거리를 주기(★2) (3) 점근선만 주고 지나는 점을 추가해 a, b 를 확정시키면 ★2~3."
```

```yaml
- id: GN-GEO-39-67
  page: 39
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    초점이 $(\pm4,\,0)$ 이고 두 점근선이 서로 수직인 쌍곡선이 점 $(8,\,k)$ 를 지날 때 양수 $k$.
  category: "점근선 수직 → 기울기 곱 -1 → a=b → 초점으로 크기 확정 → 점 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 점근선이 서로 수직이라는 기하 조건을 기울기의 곱이 -1, 즉 a=b(직각쌍곡선)라는 대수 조건으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "점근선이 수직인 쌍곡선(직각쌍곡선)의 방정식과 활용"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수직 조건을 기울기 곱 -1 로 옮기면 b/a 와 -b/a 의 곱이 -1 이 되어 a=b 가 나오고, c^2=2a^2=16 으로 크기가 정해진 뒤 점을 대입해 k 를 얻는다. 동치 변환 통찰 1개(EQV d1)·M_total 7 이지만 depth 1 이고 통찰이 하나뿐이라 +1 조건에 못 미쳐 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "점근선 수직 → 기울기 곱 -1 → a=b → c^2=2a^2 으로 a^2 확정 → 점 (8, k) 대입 → 양수 k"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2\sqrt{14}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/39-67.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초점의 c 와 지나는 점의 x 좌표를 바꿀 수 있다. 제약은 직각쌍곡선이면 a^2=b^2=c^2/2 이므로 c^2 을 짝수 제곱수로 두어야 a^2 이 정수가 되고, 대입하는 x 가 a 보다 커야 k^2 이 양수로 나온다."
    creative: "(1) 점근선이 이루는 각을 60도로 바꾸면 기울기 조건이 tan 으로 바뀌어 ★3 (2) k 대신 그 점과 초점 사이 거리를 묻기(★3 · 정의 활용) (3) 수직 조건만 주고 넓이가 최소인 쌍곡선을 찾게 하면 ★4 급."
```

```yaml
- id: GN-GEO-40-e13
  page: 40
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    쌍곡선 $9x^2-4y^2-18x+16y-43=0$ 의 중심·초점·꼭짓점의 좌표, 점근선의 방정식, 주축의 길이.
  category: "일반형 → 완전제곱 → 표준형 → 중심 기준 각 요소 평행이동"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 평행이동 — 일반형을 표준형으로 고쳐 요소 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x, y 항을 각각 계수로 묶어 완전제곱하고 우변 36 으로 나누면 중심 (1, 2) 의 표준형이 나온다. 이후 원점 쌍곡선의 요소를 구해 중심만큼 평행이동하면 끝. 점근선을 y-n=±(b/a)(x-m) 으로 쓰고 전개하는 단계가 계산의 전부이고 통찰은 없다. 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "계수로 묶어 완전제곱 → 우변으로 나눠 표준형 → 중심 (m, n) → 초점·꼭짓점·주축 2a·점근선 평행이동"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '중심의 좌표: $(1,\,2)$, 초점의 좌표: $(\sqrt{13}+1,\,2)$, $(-\sqrt{13}+1,\,2)$, 꼭짓점의 좌표: $(3,\,2)$, $(-1,\,2)$, 점근선의 방정식: $y=\dfrac{3}{2}x+\dfrac{1}{2}$, $y=-\dfrac{3}{2}x+\dfrac{7}{2}$, 주축의 길이: $4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/40-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "제곱항의 계수, 일차항, 상수항을 바꿀 수 있다. 제약은 두 제곱항의 계수가 반대 부호이고 완전제곱 후 남는 상수가 0 이 아니어야 하며, 그 상수를 두 계수의 공배수로 두면 a^2, b^2 이 정수로 떨어진다는 것."
    creative: "(1) 우변이 -1 이 되게 상수만 바꿔 주축을 y축으로 돌리기(★2 유지) (2) 구한 요소로 삼각형 넓이나 초점 사이 거리를 이어 묻기(★2~3 · I-RT) (3) 일반형의 계수 하나를 미지수로 두고 특정 점근선을 갖게 하는 값을 묻기(★3 · I-BW)."
```

```yaml
- id: GN-GEO-40-68
  page: 40
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    쌍곡선 $4x^2-5y^2+16x+10y+31=0$ 의 중심이 $(a,\,b)$, 초점이 $(a,\,c)$, $(a,\,d)$ 일 때 $a+b+c+d$.
  category: "일반형 → 표준형(우변 -1) → 중심·초점 좌표 → 합"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동된 쌍곡선의 중심·초점 좌표로 값 계산하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    완전제곱 정리 결과 우변이 -1 이 되어 초점이 세로로 놓인다는 것을 읽어야 한다. 초점의 x 좌표가 둘 다 중심과 같다는 발문 형태가 그 힌트다. 중심과 초점을 구해 네 수를 더하면 끝이라 통찰은 없고, 40-e13 과 같은 골조에 부호 처리만 더해진 확인체크라 ★2.
  tier: star_2
  mechanism_primary: "완전제곱 → 우변 -1 표준형 → 중심 (m, n) → c^2=a^2+b^2 로 세로 방향 초점 → 좌표 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/40-68.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "제곱항의 계수와 일차항·상수항을 바꿀 수 있다. 제약은 완전제곱 후 우변 부호가 초점의 방향(발문의 (a, c), (a, d) 표기)과 일치해야 하고, a^2+b^2 이 제곱수여야 초점이 정수로 떨어져 합이 깔끔해진다는 것."
    creative: "(1) 합 대신 초점 사이 거리나 주축의 길이를 묻기(★2 유지) (2) 초점을 (c, b), (d, b) 로 적어 가로 방향이 되게 바꾸면 우변 부호도 함께 바꿔야 함(★2) (3) 중심·초점에 더해 점근선이 지나는 정수점을 묻기(★3)."
```

```yaml
- id: GN-GEO-40-69
  page: 40
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    쌍곡선 $3x^2-y^2+18x+4y+26=0$ 의 두 초점을 $\pt{A}$, $\pt{B}$ 라 할 때 원점 $\pt{O}$ 와 이루는 삼각형 $\pt{OAB}$ 의 넓이.
  category: "일반형 → 표준형(우변 -1) → 두 초점 좌표 → 삼각형 넓이"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "대수적으로 구한 두 초점 좌표를 좌표평면의 선분(세로 밑변)과 원점까지의 거리(높이)로 옮겨 넓이로 환산"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "쌍곡선의 초점을 꼭짓점으로 하는 삼각형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    완전제곱으로 중심 (-3, 2) 의 우변 -1 표준형을 얻으면 두 초점이 x=-3 위에 세로로 놓인다. 밑변은 두 초점 사이 거리 2c, 높이는 원점에서 직선 x=-3 까지의 거리라는 그림 환산이 한 번 들어간다. 표현 전환 통찰 1개(RT d1)이지만 depth 1 이라 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "완전제곱 → 우변 -1 표준형 → 두 초점(세로 배치) → 밑변 2c, 높이는 중심의 x좌표의 절댓값 → 넓이"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/40-69.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "제곱항의 계수와 일차항·상수항을 바꿔 중심과 c 를 조절한다. 제약은 넓이가 밑변 2c 와 중심의 x좌표 절댓값의 곱의 절반이므로 둘 다 정수가 되도록 a^2+b^2 을 제곱수로, 중심의 좌표를 정수로 두는 것. 중심이 y축 위면 넓이가 0 이 되어 문제가 깨진다."
    creative: "(1) 넓이 대신 삼각형의 둘레나 외접원의 반지름을 묻기(★3) (2) 원점 대신 쌍곡선 위의 한 점을 꼭짓점으로 두면 쌍곡선의 정의가 들어와 ★3 (3) 넓이를 주고 상수항을 역으로 묻기(★3 · I-BW)."
```

```yaml
- id: GN-GEO-41-e14
  page: 41
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    두 초점 $\pt{F}(3,\,-1)$, $\pt{F}'(-1,\,-1)$ 에서의 거리의 차가 $2$ 인 쌍곡선의 방정식.
  category: "두 초점의 중점 = 중심 → a, c → b^2 → 평행이동한 표준형"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쌍곡선의 정의를 이용한 평행이동된 쌍곡선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 초점의 중점을 중심으로 잡아 원점 기준 쌍곡선을 세운 뒤 중심만큼 평행이동하는 것이 전부다. 거리의 차 2 에서 a=1, 초점 사이 거리 4 에서 c=2, b^2=3. 중심 이동 부호((x-1)^2, (y+1)^2)가 유일한 함정이고 통찰은 없다. M_total 5 이나 평행이동 한 겹이 있어 -1 을 적용하지 않고 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "두 초점의 중점 → 중심, 초점 사이 거리의 절반 → c, 거리의 차의 절반 → a → b^2=c^2-a^2 → 중심만큼 평행이동한 표준형"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(x-1)^2-\dfrac{(y+1)^2}{3}=1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/41-e14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 초점의 좌표와 거리의 차를 바꿀 수 있다. 제약은 두 초점이 가로 또는 세로로 나란해야 표준형으로 쓸 수 있고(기울어지면 교육과정 밖), 거리의 차가 초점 사이 거리보다 작아야 하며, c^2-a^2 이 정수가 되게 두는 것."
    creative: "(1) 중심과 한 초점, 거리의 차를 주기(★2 유지) (2) 두 초점을 세로로 배치해 우변이 -1 이 되게 하기(★2) (3) 거리의 차 대신 점근선 하나를 주면 비와 중심 조건을 결합해야 해서 ★3."
```

```yaml
- id: GN-GEO-41-70
  page: 41
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 점 $\pt{F}(4,\,2)$, $\pt{F}'(-6,\,2)$ 를 초점으로 하고 주축의 길이가 $8$ 인 쌍곡선의 방정식.
  category: "두 초점의 중점 = 중심 → c, a → b^2 → 평행이동한 표준형"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 초점과 주축의 길이로 평행이동된 쌍곡선의 방정식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    41-e14 와 같은 골조로, 거리의 차 대신 주축의 길이 8 에서 a=4 를 얻는다. 중심 (-1, 2), c=5, b^2=9. 초점이 가로로 나란하므로 우변은 1. 새 착안 없이 중심 이동 부호만 주의하면 되는 표준 절차라 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "두 초점의 중점 → 중심, 초점 사이 거리의 절반 → c, 주축의 절반 → a → b^2=c^2-a^2 → 평행이동한 표준형"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{(x+1)^2}{16}-\dfrac{(y-2)^2}{9}=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/41-70.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 초점의 좌표와 주축의 길이를 바꿀 수 있다. 제약은 주축의 절반이 초점 사이 거리의 절반보다 작아야 하고, c^2-a^2 이 제곱수가 되게 두면 b 가 정수로 떨어진다는 것. 중심의 좌표가 정수가 되도록 두 초점의 좌표 합을 짝수로."
    creative: "(1) 주축 대신 한 꼭짓점을 주기(★2 유지) (2) 초점을 세로로 배치하기(★2 · 우변 -1) (3) 구한 쌍곡선이 특정 직선과 만나는 점을 이어 묻기(★3)."
```

```yaml
- id: GN-GEO-41-71
  page: 41
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 초점 $\pt{F}(1,\,8)$, $\pt{F}'(1,\,0)$ 에서의 거리의 차가 $6$ 인 쌍곡선이 $x$축과 만나는 두 점 사이의 거리.
  category: "정의로 평행이동된 쌍곡선 세우기 → y=0 대입 → 두 근의 차"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정의로 세운 쌍곡선과 좌표축의 교점 사이 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 초점이 세로로 나란하므로 중심 (1, 4), c=4, a=3, b^2=7 의 우변 -1 표준형을 먼저 세운다. 그다음 y=0 을 넣어 (x-1)^2 을 구하고 두 근이 중심 대칭이므로 거리는 그 제곱근의 두 배. 식 세우기와 교점 구하기 두 단계지만 각각 표준 절차라 통찰로 세지 않고 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "중심·c·a → b^2 → 우변 -1 표준형 → y=0 대입 → (x-1)^2 → 두 교점 사이 거리 = 2배 제곱근"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{14}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/41-71.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 초점의 좌표와 거리의 차를 바꿀 수 있다. 제약은 c > a 이고, x축이 쌍곡선과 실제로 만나야 하므로 중심의 y좌표의 절댓값이 a 보다 커야 한다는 것. 답을 유리수로 만들려면 대입 후 (x-m)^2 이 완전제곱 분수가 되도록 b^2 을 고른다."
    creative: "(1) x축 대신 y축이나 임의의 수평선과의 교점을 묻기(★2 유지) (2) 교점과 초점을 잇는 삼각형의 넓이를 묻기(★3) (3) x축과 만나지 않게 하는 거리의 차의 범위를 묻기(★3 · I-BW)."
```

```yaml
- id: GN-GEO-42-e15
  page: 42
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    직선 $y=m(x-2)$ 가 쌍곡선 $3x^2-y^2=3$ 과 만나는 두 점을 $\pt{A}$, $\pt{B}$ 라 하고 $\pt{C}(-2,\,0)$ 을 꼭짓점으로 하는 삼각형 $\pt{ABC}$ 의 둘레가 $22$ 일 때 선분 $\pt{AB}$ 의 길이. 조건 $m>\sqrt{3}$.
  category: "직선이 지나는 점과 C 가 두 초점임을 인식 → 정의로 변을 치환 → 둘레를 AB 하나로 환원"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "표준형 정리로 초점이 (±2, 0) 임을 얻고, 직선이 지나는 (2, 0) 과 점 C(-2, 0) 이 바로 두 초점이라는 기하 배치로 옮겨 정의를 쓸 자리를 만듦"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "AC=AF+2a, BC=BF+2a 와 AF+BF=AB(A, B, F 가 한 직선 위)를 결합해 둘레 = 2AB + 4a 라는 한 식으로 통합"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "쌍곡선의 정의의 활용 — 초점을 지나는 현과 삼각형의 둘레"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    3x^2-y^2=3 을 표준형으로 고치면 c=2 라 직선이 지나는 (2, 0) 과 C(-2, 0) 이 두 초점이다. m>√3 은 기울기가 점근선보다 가팔라 A, B 가 같은 분지에 놓이게 하는 조건이고, 이때 AC-AF=BC-BF=2a 가 같은 부호로 쓰여 둘레가 2AB+4 로 정리된다. 표현 전환과 조건 통합 통찰 2개(RT d2, CON d2) → 필수 예제 출발점 ★2 에서 +1.
  tier: star_3
  mechanism_primary: "표준형 → 초점 (±2, 0) 확인 → C 가 다른 초점 → AC=AF+2a, BC=BF+2a → 둘레 = AB+(AF+BF)+4a = 2AB+4a → AB"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$9$'
  answer_source: "본문 풀이"
  figure: "crop:fig-42-e15.png"
  latex: latex-bank/gn-geo/items/42-e15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "쌍곡선의 a^2, b^2 과 둘레의 값을 바꿀 수 있다. 제약은 직선이 지나는 점과 C 가 반드시 두 초점 (±c, 0) 이어야 하고, 기울기 조건이 점근선 기울기 b/a 보다 가팔라야 A, B 가 한 분지에 놓인다는 것. 둘레는 4a 보다 커야 AB 가 양수."
    creative: "(1) 둘레 대신 AB 를 주고 둘레를 묻는 역방향(★3 유지) (2) 기울기 조건을 0<m<√3 으로 바꾸면 A, B 가 서로 다른 분지에 놓여 부호가 갈리고 경우를 따져야 해서 ★4 · I-MI (3) C 를 초점이 아닌 일반 점으로 두면 정의 골조가 깨지고 계산 문제가 되어 질이 떨어짐 — 피할 것."
```

```yaml
- id: GN-GEO-42-72
  page: 42
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    쌍곡선 $\dfrac{x^2}{16}-\dfrac{y^2}{9}=1$ 의 두 초점 $\pt{F}$, $\pt{F}'$ 과 쌍곡선 위의 점 $\pt{P}$ 가 $\seg{PF'}=2\seg{PF}$ 를 만족할 때 삼각형 $\pt{PFF}'$ 의 둘레.
  category: "정의의 거리 차 2a 와 비 조건을 결합 → 두 거리 확정 → 둘레"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "쌍곡선의 정의에서 나오는 차 조건 PF'-PF=2a 와 주어진 비 조건 PF'=2PF 를 하나로 결합해 두 거리를 한 번에 확정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "쌍곡선의 정의와 초점삼각형의 둘레"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a=4 이므로 두 거리의 차는 8 이고, 비 조건과 합치면 PF=8, PF'=16 이 바로 나온다. 나머지 한 변은 초점 사이 거리 2c=10 이라 둘레는 더하기 한 번. 조건 결합 통찰 1개(CON d1)이지만 M_total 4 로 노동량이 가볍고 depth 1 이라 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "정의로 PF'-PF=2a → 비 조건 PF'=2PF 와 연립 → PF, PF' 확정 → 둘레 = PF+PF'+2c"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$34$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/42-72.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a^2, b^2 과 비의 값을 바꿀 수 있다. 제약은 비 k 에 대해 PF=2a/(k-1) 이 되므로 k>1 이어야 하고, 얻은 PF 가 c-a 이상이어야 그런 점 P 가 실제로 존재한다는 것. c=√(a^2+b^2) 이 정수가 되게 두면 둘레가 정수."
    creative: "(1) 둘레 대신 삼각형의 넓이나 코사인법칙으로 각을 묻기(★3) (2) 비 대신 PF, PF' 의 합을 주면 정의의 차와 결합해 같은 골조(★2 유지) (3) 각 FPF' 가 직각이라는 조건으로 바꾸면 피타고라스와 결합해 ★3."
```

```yaml
- id: GN-GEO-42-73
  page: 42
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 초점 $\pt{F}$, $\pt{F}'$ 을 공유하는 타원 $\dfrac{x^2}{16}+\dfrac{y^2}{7}=1$ 과 쌍곡선 $\dfrac{x^2}{2}-\dfrac{y^2}{7}=1$ 이 제$1$사분면 위의 점 $\pt{P}$ 에서 만날 때 $\seg{PF'}^2-\seg{PF}^2$.
  category: "타원의 합 조건 + 쌍곡선의 차 조건 → 묻는 식을 합과 차의 곱으로 변형"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "묻는 PF'^2-PF^2 을 (PF'+PF)(PF'-PF) 로 동치 변환해 두 정의 조건이 그대로 들어갈 자리를 만듦 — 각 거리를 따로 구하지 않아도 되게 함"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "타원의 합 PF+PF'=2·4 와 쌍곡선의 차 PF'-PF=2·√2 라는 서로 다른 두 곡선의 정의를 한 점 P 에 대해 동시에 적용해 결합"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "초점을 공유하는 타원과 쌍곡선의 교점 — 합과 차의 결합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 곡선 모두 c^2=9 라 초점이 같다는 것이 전제이고, PF'^2-PF^2 을 곱으로 쪼개면 타원의 합 8 과 쌍곡선의 차 2√2 를 곱하기만 하면 된다. P 가 제1사분면이라 PF'>PF 로 부호가 고정된다. 각 거리를 따로 구하려 들면 훨씬 무거워지는 전형이라 동치 변환과 조건 결합 통찰 2개(EQV d2, CON d2) → 확인체크 출발점 ★2 에서 +1.
  tier: star_3
  mechanism_primary: "PF'^2-PF^2 = (PF'+PF)(PF'-PF) → 타원의 합 2a1, 쌍곡선의 차 2a2 대입 → 곱"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$16\sqrt{2}$'
  answer_source: "답지"
  figure: "crop:fig-42-73.png"
  latex: latex-bank/gn-geo/items/42-73.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "타원의 장축 2a1 과 쌍곡선의 주축 2a2 를 바꿀 수 있다. 제약은 두 곡선이 초점을 공유해야 하므로 타원의 a1^2-b^2 과 쌍곡선의 a2^2+b^2 이 같아야 하고, 그러려면 b^2 을 공유값으로 두고 a1^2, a2^2 을 그 관계에 맞춰 잡아야 한다. 답을 간단히 하려면 2a2 를 유리수나 단순 무리수로."
    creative: "(1) PF·PF' 나 PF^2+PF'^2 을 묻기(★3 유지 · 곱셈 공식만 바뀜) (2) 각 FPF' 의 코사인값을 묻기(★3~4 · 코사인법칙 결합) (3) 삼각형 PFF' 의 넓이를 묻기(★4 급 · 합·차에 더해 직각 여부 판정 필요) (4) P 를 제3사분면으로 옮기면 차의 부호가 뒤집혀 ★3 · T-부호 강화."
```

## 표본 판정 요약 (19문)

- ★ 분포: ★1 3 · ★2 14 · ★3 2 · ★4 0 · ★5 0
- 통찰형 5(39-67 · 40-69 · 42-e15 · 42-72 · 42-73) · 절차형 14 · premium 0
- 통찰 유형 분포: I-EQV 2 · I-CON 3 · I-RT 2 (총 7단계 · depth 3 없음 · SC/VF/SYM/XU 0 → ★5 자격 문항 없음)
- M_total 분포: 4 가 2문 · 5 가 5문 · 6 이 2문 · 7 이 10문 (평균 6.1)
- type_hint 상위: 「초점·꼭짓점·주축으로 쌍곡선의 방정식 결정」 4(37-60 · 38-e11 · 41-e14 · 41-70) · 「일반형을 표준형으로 고쳐 요소 구하기(평행이동)」 4(37-62 · 37-63 · 40-e13 · 40-68) · 「점근선으로 a와 b의 비 정하기」 3(39-e12 · 39-66 · 39-67) · 「쌍곡선의 정의의 활용(초점삼각형·현)」 3(42-e15 · 42-72 · 42-73) · 「방정식에서 초점·꼭짓점·주축·점근선 읽기」 1(37-61)
- 그림: 2문(`crop:fig-42-e15.png` · `crop:fig-42-73.png`) — 둘 다 발문에 배치가 모두 서술돼 있어 골조·답에 그림이 추가 정보를 주지 않는다
- 벤더 층: 개념원리 익히기 4 · 필수 예제 5 · 확인체크 10. 발전·특강·STEP·기출 태그는 이 범위에 없다
- 대상층: 하위권 3 · 중하위권 11 · 중위권 2 · 중상위권 3
- 단원 성격상 ★2 에 몰려 있다. 개념 도입 단원이라 골조가 네 가지로 반복되고, 통찰이 필요한 자리는 정의를 도형에 옮기는 42쪽 세 문항과 점근선의 기하 조건을 대수로 옮기는 39-67 에 한정된다

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| (없음) | 이 범위에서 벤더 신호와 2단 이상 어긋난 문항은 없다 | - |

다만 ★ 출발점에 대한 **범위 전체의 판단**을 하나 남긴다. 「필수·발전 예제」 구역의 확인체크 10문(38-64 · 38-65 · 39-66 · 39-67 · 40-68 · 40-69 · 41-70 · 41-71 · 42-72 · 42-73)은 통번호 문항이지만 개념원리 익히기의 확인체크와 달리 직전 필수 예제와 같은 골조를 연습시키는 자리라, 이 파일에서는 ★1 이 아니라 **★2 를 출발점**으로 잡았다. 이 규칙을 ★1 출발로 되돌리면 38-64 · 39-66 · 41-70 (M_total 5 이하 · 통찰 0)은 ★1 로 내려간다. 같은 은행의 다른 job 과 기준을 맞출 때 재검토 대상.

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형** ⑴ 「쌍곡선의 방정식 결정 — 초점·꼭짓점·주축」 ⑵ 「쌍곡선의 방정식 결정 — 점근선 조건」 ⑶ 「일반형 → 표준형 정리(평행이동)」 ⑷ 「쌍곡선의 정의의 활용 — 초점삼각형·초점현」. 이 넷이 19문 중 18문을 덮는다.
- **통합해도 될 유형** 37-60 과 41-e14/41-70 은 「거리의 차 → a, 초점 → c」로 골조가 같고 중심이 원점이냐 아니냐만 다르다. ⑴ 안의 하위 변형(원점/평행이동)으로 두면 충분하다. 37-61 과 37-62 도 「식에서 요소 읽기」의 원점/평행이동 변형이라 ⑶ 에 흡수 가능하다.
- **경계 유형** 38-64(타원과 초점 공유)와 42-73(타원·쌍곡선 교점)은 타원 단원과 걸친다. 카탈로그를 세울 때 쌍곡선 쪽에 둘지 「이차곡선의 결합」이라는 별도 유형으로 뺄지 결정이 필요하다. 42-73 은 I-CON+I-EQV 로 이 범위에서 통찰 밀도가 가장 높아 ★3~4 변별 슬롯의 원본으로 쓸 만하다.
- **base ★ 제안** ⑴ ★2 · ⑵ ★2 · ⑶ ★2 · ⑷ ★3. 개념원리 익히기의 같은 골조는 ⑴⑶ 의 ★1 하위 변형으로 둔다.
