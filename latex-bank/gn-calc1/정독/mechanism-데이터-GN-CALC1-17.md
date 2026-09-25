---
name: mechanism-데이터-GN-CALC1-17
description: 개념원리 미적분Ⅰ 17 속도와 가속도(1/1 · 146~152쪽 26문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅰ · 전사본 latex-bank/gn-calc1
  section: 17 속도와 가속도
  unit_code: "17"
  part: "1/1"
  extract_range: "146~152쪽 · 146-e32~152-311"
  total_problems: 26
  unit_total: 26
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 유무로만 갈림(비면 절차형). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc1/items/<id>.tex
  image_source: latex-bank/gn-calc1/figures/ (crops.json)
---

# 개념원리 미적분Ⅰ · 17 속도와 가속도 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅰ 17단원 「속도와 가속도」 146~152쪽 26문항 전수를 다룬다. 구역은 「필수·발전 예제」 16문(필수 예제 6 + 각 예제에 붙은 확인체크 10), 「연습문제 STEP 1」 4문, 「연습문제 STEP 2」 4문, 「연습문제 실력 UP」 2문이다. 개념원리 고등의 난이도 신호는 구역과 예제 태그다 — 확인체크는 개념 확인(★1 출발), 필수 예제는 ★2, STEP 1 은 ★2, STEP 2 는 ★3, 실력 UP 은 ★4 를 출발점으로 삼고 여기에 M_total·통찰로 ±1 을 조정했다. 교육청·수능 기출 태그는 통찰이 있을 때만 +1 로 썼다.

단원 내용은 크게 세 갈래다. ⑴ 수직선 위 점의 위치 함수를 미분해 속도·가속도를 읽고 「운동 방향 전환 ⟺ 속도의 부호 변화」를 쓰는 문제, ⑵ 위치·속도 그래프를 읽어 보기 ㄱㄴㄷ 의 참거짓을 가리는 문제, ⑶ 길이·넓이·부피의 시각에 대한 변화율(닮음·피타고라스로 변수를 시각의 함수로 옮긴 뒤 미분) 문제다. ⑵·⑶ 에서 통찰이 집중되고, 그 통찰은 거의 모두 I-RT(그래프·기하 → 대수 표현 전환)와 I-EQV(조건의 동치 변환)다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변경과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC1-146-e32
  page: 146
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 수직선 위를 움직이는 점 P 의 위치가 $x=t^3-3t^2$ 일 때 ⑴ $t=3$ 에서의 속도와 가속도 ⑵ 점 P 가 운동 방향을 바꿀 때의 위치.
  category: "위치 함수 두 번 미분 → 속도·가속도 → v=0 의 부호 변화 시각 → 위치"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수직선 위를 움직이는 점의 속도와 가속도"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 $x$ 를 두 번 미분해 $v,a$ 를 얻고 $t=3$ 을 대입하는 정의 확인, ⑵ 는 $v=0$ 의 양의 해 $t=2$ 를 찾아 다시 $x$ 로 돌아가는 왕복 한 번.
    운동 방향 전환을 속도의 부호 변화로 보는 것은 이 쪽에서 막 정의한 규약이라 통찰로 세지 않았다.
    통찰 0·M_total 5 로 ★1 후보이지만 단원 도입 대표 예제이고 소문항이 둘이라 필수 예제 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "x 미분 → v=3t^2-6t, a=6t-6 → ⑴ t=3 대입 ⑵ v=0 의 양의 해 t=2 → x(2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 속도: $9$, 가속도: $12$ ⑵ $-4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/146-e32.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$x=t^3-at^2$ 의 $a$ 와 평가 시각 $t=3$ 을 바꿀 수 있음. 제약: 방향 전환 시각이 $t=2a/3$ 이므로 $a$ 는 3 의 배수여야 정수 시각이 되고, $t=0$ 은 출발 시각이라 전환으로 세지 않는다는 점이 유지돼야 함."
    creative: "(1) 가속도가 $0$ 이 되는 시각의 속도를 묻기(골조 동일 ★2) (2) 사차 위치식으로 바꿔 방향 전환이 두 번 생기게 하고 『두 번째』를 지정(★2) (3) $v$ 가 중근을 갖도록 계수를 잡아 $v=0$ 이지만 방향이 바뀌지 않는 시각을 섞으면 후보 기각(I-VF)이 필요해 ★3."
```

```yaml
- id: GN-CALC1-146-292
  page: 146
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "개념원리 익히기(확인체크)"
  summary: |
    위치가 $x=2t^3-9t^2+12t$ 인 점 P 의 속도가 $72$ 일 때의 가속도.
  category: "v=x' 를 주어진 속도와 같게 놓아 시각 결정 → a=v' 에 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "속도 값이 주어진 시각에서의 가속도"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $v=6t^2-18t+12=72$ 를 풀어 양의 해 하나를 얻고 $a=12t-18$ 에 넣는 두 단계짜리 확인 문항이다.
    조건이 속도 값으로 주어져 시각을 거꾸로 구하지만 이차방정식 한 번이라 표준 절차이고 통찰로 세지 않는다.
    확인체크 출발점 ★1 · 통찰 0 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "v=6t^2-18t+12=72 → t 결정 → a=12t-18 에 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$42$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/146-292.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "위치식 계수와 주어진 속도 값을 바꿀 수 있음. 제약: $v(t)=$ 주어진 값이 정수 양의 해를 갖도록(판별식이 완전제곱) 잡아야 하고, 음의 해가 나오면 $t>0$ 으로 걸러진다는 점을 유지."
    creative: "(1) 가속도 값을 주고 속도를 묻기(골조 대칭 ★1) (2) 『속도가 처음으로 $72$ 가 되는 시각』으로 바꿔 두 해 중 선택을 강제(★2) (3) 속도의 최솟값을 묻게 하면 이차함수 꼭짓점이 붙어 ★2."
```

```yaml
- id: GN-CALC1-146-293
  page: 146
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "개념원리 익히기(확인체크)"
  summary: |
    위치가 $x=\dfrac{1}{3}t^3-\dfrac{7}{2}t^2+6t$ 인 점 P 가 운동 방향을 두 번째로 바꿀 때의 위치와 가속도.
  category: "v=x' 인수분해 → 부호가 바뀌는 두 시각 중 두 번째 → x 와 a 에 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "운동 방향이 바뀌는 시각에서의 위치·가속도"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $v=t^2-7t+6=(t-1)(t-6)$ 에서 부호가 바뀌는 시각이 둘 나오고 『두 번째』인 $t=6$ 을 골라 $x$ 와 $a$ 두 곳에 대입한다.
    두 근이 모두 실제 전환이라 기각 판단이 없고 골조는 앞 예제와 같지만, 분수 계수 위치식에 $t=6$ 을 넣는 계산 부담이 한 단 더 있다(Mₖ 2).
    확인체크 ★1 출발이나 M_total 6 으로 +1 하여 ★2.
  tier: star_2
  mechanism_primary: "v=(t-1)(t-6) → 두 번째 부호 변화 t=6 → x(6) 과 a(6)=2t-7 에 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '위치: $-18$, 가속도: $5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/146-293.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$v$ 의 두 근이 서로 다른 양의 정수가 되도록 위치식의 $\\dfrac{1}{3},\\dfrac{7}{2},6$ 을 조정할 수 있음. 제약: 세제곱 계수를 $\\dfrac{1}{3}$ 로 두어 $v$ 의 최고차항이 $t^2$ 이 되게 하면 인수분해가 유지되고, $x$ 대입값이 유리수로 정리돼야 함."
    creative: "(1) 『첫 번째로 바꿀 때』로 바꾸기(★1~2) (2) 두 전환 시각 사이의 위치 변화량을 묻기(★2) (3) $v$ 가 중근을 갖도록 만들어 『방향을 바꾸지 않음』을 판정하게 하면 I-EQV 가 붙어 ★3."
```

```yaml
- id: GN-CALC1-147-e33
  page: 147
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑷ 지상 $25\,\mathrm{m}$ 에서 위로 던진 돌의 높이가 $x=25+20t-5t^2$ 일 때 ⑴ $3$ 초 후의 속도와 가속도 ⑵ 최고 높이 도달 시간 ⑶ 최고 높이 ⑷ 지면에 떨어지는 순간의 속도.
  category: "높이 함수 미분 → 속도·가속도 → 최고 높이는 v=0 · 착지는 x=0"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "위로 던진 물체의 높이와 속도(최고 높이·착지)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    한 위치식에서 『최고 높이 ⟺ $v=0$』과 『착지 ⟺ $x=0$』 두 관문을 차례로 통과시키는 표준 연쇄이고, 소문항이 앞 소문항의 답을 재료로 쓴다.
    두 동치는 이 단원의 본문 규약이라 통찰로 세지 않았고, 대신 단위($\mathrm{m/s},\mathrm{m/s^2}$)와 $t>0$ 인 근만 취하는 함정이 둘이라 Mₜ 2.
    필수 예제 출발점 ★2 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "v=20-10t, a=-10 → ⑴ t=3 대입 ⑵ v=0 → t=2 ⑶ x(2) ⑷ x=0 의 양의 해 t=5 → v(5)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 속도: $-10\,\mathrm{m/s}$, 가속도: $-10\,\mathrm{m/s}^2$ ⑵ $2$초 ⑶ $45\,\mathrm{m}$ ⑷ $-30\,\mathrm{m/s}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/147-e33.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초기 높이 $25$, 초속 $20$, 중력항 계수 $5$ 를 바꿀 수 있음. 제약: 최고 높이 시각 $t=v_0/10$ 과 착지 시각이 유리수가 되도록 잡고, 착지 방정식의 두 근 중 양수만 쓴다는 조건을 유지."
    creative: "(1) 『던진 지점과 같은 높이로 돌아오는 시각』을 묻기(대칭 이용 ★2) (2) 초기 높이를 문자로 두고 착지 속도를 주어 역산시키면 I-BW 가 붙어 ★3 (3) 두 물체를 동시에 던져 높이가 같아지는 시각을 묻기(★3)."
```

```yaml
- id: GN-CALC1-147-294
  page: 147
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "개념원리 익히기(확인체크)"
  summary: |
    지면에서 쏘아 올린 물로켓의 높이가 $x=20t-5t^2$ 일 때 지면에 떨어지는 순간의 속도.
  category: "x=0 의 양의 해 → v=x' 에 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "쏘아 올린 물체의 착지 속도"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $x=5t(4-t)=0$ 에서 $t=4$ 를 얻고 $v=20-10t$ 에 넣으면 끝나는 두 단계다.
    출발점 $t=0$ 을 착지로 잘못 잡지 않는 것만이 함정이고 통찰은 없다.
    확인체크 ★1 출발 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x=0 → t=4 → v=20-10t 에 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-20\,\mathrm{m/s}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/147-294.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초속 $20$ 과 중력항 계수 $5$ 를 바꿀 수 있음. 제약: 지면 출발($x$ 의 상수항 0)을 유지하면 착지 시각이 $t=v_0/5$ 로 깔끔하고, 상수항을 넣으면 근이 무리수가 되기 쉬움."
    creative: "(1) 최고 높이를 묻기(★1) (2) 착지 속도를 주고 초속을 역산시키면 I-BW ★2 (3) 지상 $h$ 에서 던지도록 바꿔 착지 시각을 이차방정식으로 만들면 ★2."
```

```yaml
- id: GN-CALC1-147-295
  page: 147
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "개념원리 익히기(확인체크)"
  summary: |
    지상 $40\,\mathrm{m}$ 에서 위로 던진 공의 높이가 $x=40+50t-at^2$ 이고 최고 높이 도달 시간이 $5$ 초일 때의 최고 높이($a$ 는 상수).
  category: "최고 높이 ⟺ v=0 → v(5)=0 으로 상수 a 결정 → x(5)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미정 계수가 있는 위로 던진 물체의 최고 높이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $v=50-2at$ 에 $v(5)=0$ 을 넣어 $a$ 를 먼저 확정한 뒤 다시 $x(5)$ 를 계산하는 두 겹 구조다.
    조건이 상수를 정하는 데 쓰이므로 Mₐ 2 지만, 미정계수 한 개를 대입으로 정하는 것은 표준 절차라 I-BW 로 인정하지 않았다.
    확인체크 ★1 출발이나 M_total 7 로 +1 하여 ★2.
  tier: star_2
  mechanism_primary: "v=50-2at, v(5)=0 → a 결정 → x(5) 계산"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$165\,\mathrm{m}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/147-295.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초기 높이 $40$, 초속 $50$, 도달 시간 $5$ 초를 바꿀 수 있음. 제약: $a=v_0/(2T)$ 가 유리수여야 하고 최고 높이 $x(T)$ 가 정수로 떨어지게 조합해야 함."
    creative: "(1) 최고 높이를 주고 도달 시간을 묻기(역방향 ★2) (2) 착지 시각까지 물으면 이차방정식이 하나 더 붙어 ★2~3 (3) 『최고 높이가 $h$ 이상이 되도록 하는 $a$ 의 범위』로 바꾸면 부등식 역산 I-BW 가 붙어 ★3."
```

```yaml
- id: GN-CALC1-148-e34
  page: 148
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    원점을 출발한 점 P 의 속도 $v(t)$ 의 그래프가 주어졌을 때 보기 ㄱ($t=3$ 에서 방향 전환) · ㄴ($t=2$ 에서 양의 방향) · ㄷ($t=5$ 에서 가속도 $0$) 중 옳은 것 고르기.
  category: "v 그래프의 부호 → 운동 방향 · v 그래프의 접선 기울기 → 가속도"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 3
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ㄷ 에서 가속도를 계산이 아니라 v 그래프의 접선 기울기로 읽어야 함 — t=5 는 v 가 0 인 점이지 기울기가 0 인 점이 아니라는 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "속도 그래프의 해석(방향 전환·부호·가속도)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ·ㄴ 은 $v$ 의 부호만 읽으면 되지만 ㄷ 은 $a=v'$ 를 그래프의 접선 기울기로 옮겨 읽어야 해서 표현 전환이 한 번 필요하다(I-RT d2).
    $t=5$ 에서 $v=0$ 인 것과 $a=0$ 인 것을 혼동하게 만든 것이 이 문항의 함정이고, 식이 전혀 주어지지 않아 Mₐ 3.
    통찰 1개·depth 2 는 +1 조건(통찰 2 이상 또는 depth 3)에 못 미쳐 필수 예제 출발점 ★2 를 유지했다(M_total 8 로 ★2 상단).
  tier: star_2
  mechanism_primary: "v 그래프에서 부호 변화 시각 → 방향 전환 · 부호 → 진행 방향 · 접선 기울기 → 가속도"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: 'ㄱ, ㄴ'
  answer_source: "본문 풀이"
  figure: crop:fig-148-e34.png
  latex: latex-bank/gn-calc1/items/148-e34.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기에서 묻는 시각($3,2,5$)만 바꿀 수 있음. 제약: 그림의 $x$ 절편 $0,3,5$ 는 라벨이 고정이므로 부호 구간과 어긋나지 않게 고르고, 『가속도 $0$』 은 그래프의 극점(극대·극소)에서만 참이 되도록 시각을 잡아야 함."
    creative: "(1) ㄷ 를 『가속도가 $0$ 인 시각이 존재한다』로 바꾸면 참이 되어 답 구성이 뒤집힘(★2) (2) 같은 그래프로 『$0<t<5$ 에서 가장 빠른 순간』을 묻기(★3) (3) $v$ 가 축에 접하는 시각을 그림에 넣으면 v=0 후보 기각이 필요해 I-VF 가 붙고 ★3."
```

```yaml
- id: GN-CALC1-148-296
  page: 148
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "개념원리 익히기(확인체크)"
  summary: |
    $0\le t\le 10$ 에서 점 P 의 속도 $v(t)$ 의 그래프가 주어졌을 때 운동 방향이 몇 번 바뀌는지.
  category: "v=0 인 시각 나열 → 부호가 실제로 바뀌는 것만 세기"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "『방향 전환』을 『v=0』 이 아니라 『v 의 부호 변화』로 바꿔 읽어 축에 접하기만 하는 0 점을 세지 않음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "속도 그래프에서 운동 방향이 바뀌는 횟수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그래프에는 $v=0$ 인 시각이 방향 전환 횟수보다 많고, 그중 축에 닿기만 하고 넘지 않는 점을 빼야 답이 맞는다(I-EQV d2).
    계산은 전혀 없고 전적으로 부호 변화를 세는 문제라 Mₖ 1 · Mₐ 3.
    확인체크 ★1 출발이나 통찰 1개가 붙어 ★2.
  tier: star_2
  mechanism_primary: "v 그래프의 t 축 교차 중 부호가 바뀌는 곳만 카운트 → 방향 전환 횟수"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$번'
  answer_source: "답지"
  figure: crop:fig-148-296.png
  latex: latex-bank/gn-calc1/items/148-296.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 끝 $10$ 만 조정 가능. 제약: 그림의 교차·접점 배치가 답을 결정하므로 구간을 줄이면 세는 범위가 함께 바뀌고, 그림 라벨은 고정이다."
    creative: "(1) 『$v=0$ 이 되는 횟수』와 『방향이 바뀌는 횟수』를 함께 물어 둘의 차이를 드러내기(★2) (2) 『가장 멀리 간 시각』을 묻기(★3) (3) 같은 그래프에 위치 그래프를 겹쳐 대응을 묻기(I-RT 추가 ★3)."
```

```yaml
- id: GN-CALC1-148-297
  page: 148
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "개념원리 익히기(확인체크)"
  summary: |
    점 P 의 위치 $x(t)$ 의 그래프가 주어졌을 때 보기 ㄱ($t=3$ 에서 방향 전환) · ㄴ($t=5$ 에서 속도 $0$) · ㄷ($0<t<5$ 에서 세 번 멈춤) 중 옳은 것 고르기.
  category: "위치 그래프의 접선 기울기 → 속도 · 극값 → 정지·방향 전환"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "주어진 것이 속도가 아니라 위치 그래프임을 알아채고 속도를 접선 기울기로, 정지·방향 전환을 극값으로 옮겨 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "위치 그래프의 해석(정지·방향 전환)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    같은 그림을 속도 그래프로 착각하면 세 보기가 모두 뒤집히는 구조다 — $t=3$ 은 그래프가 $t$ 축을 지나는 곳이지 극값이 아니고, $t=5$ 도 $x=0$ 일 뿐 기울기는 0 이 아니다(I-RT d2).
    옳은 것은 극값의 개수를 세는 ㄷ 하나뿐이라 함정 카테고리는 표기·경계 둘.
    확인체크 ★1 출발이나 통찰 1개·M_total 8 로 ★2.
  tier: star_2
  mechanism_primary: "x 그래프의 극값 → 정지·방향 전환 시각 · 접선 기울기 → 속도 · t 축 교점은 원점 통과일 뿐"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: 'ㄷ'
  answer_source: "답지"
  figure: crop:fig-148-297.png
  latex: latex-bank/gn-calc1/items/148-297.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기의 시각($3,5$)과 구간($0<t<5$)만 바꿀 수 있음. 제약: 그림의 극값 위치와 $t$ 축 교점 라벨 $1,3,5$ 가 고정이므로 참거짓이 뒤집히지 않게 골라야 함."
    creative: "(1) 같은 보기를 속도 그래프로 제시해 답을 뒤집기(쌍둥이 ★2) (2) 『원점을 지나는 횟수』를 추가(★2) (3) 위치 그래프에서 평균속도와 순간속도가 같아지는 시각을 묻기(I-RT d3 ★4)."
```

```yaml
- id: GN-CALC1-149-e35
  page: 149
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 키 $1.5\,\mathrm{m}$ 인 사람이 $3\,\mathrm{m}$ 가로등 밑에서 매초 $2\,\mathrm{m}$ 로 걸어갈 때 ⑴ 그림자의 머리끝이 움직이는 속도 ⑵ 그림자의 길이의 변화율.
  category: "닮음으로 그림자 길이를 사람 위치로 표현 → 시각의 함수로 두고 미분"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "가로등·사람·그림자의 닮음비라는 기하 조건을 그림자 길이와 사람 위치 사이의 대수 관계식으로 옮겨야 미분이 가능해짐"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "시각에 대한 길이의 변화율(가로등 그림자)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    먼저 닮음에서 그림자 길이 $l$ 과 걸은 거리 $x$ 의 비례 관계를 세우고, $x=2t$ 를 넣어 두 양을 시각의 일차식으로 만든 뒤 미분한다(I-RT d2).
    ⑴ 의 『머리끝』은 $x+l$, ⑵ 는 $l$ 이라 무엇을 미분할지 구분하는 것이 두 번째 관문이다.
    통찰 1개·depth 2 는 +1 조건에 못 미쳐 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "닮음 3:1.5=(x+l):l → l 을 x 로 → x=2t 대입 → ⑴ (x+l)' ⑵ l'"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $4\,\mathrm{m/s}$ ⑵ $2\,\mathrm{m/s}$'
  answer_source: "본문 풀이"
  figure: crop:fig-149-e35.png
  latex: latex-bank/gn-calc1/items/149-e35.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "가로등 높이 $3$, 키 $1.5$, 걷는 속도 $2$ 를 바꿀 수 있음. 제약: 가로등 높이 > 키 여야 하고 닮음비 $($키$)/($높이$-$키$)$ 가 유리수여야 답이 정리됨. 그림의 라벨(높이·키 표시)은 고정."
    creative: "(1) 그림자의 머리끝 속도만 주고 걷는 속도를 역산시키기(I-BW ★3) (2) 가로등에서 멀어지는 대신 다가오게 해 부호를 바꾸기(★2) (3) 가로등을 두 개 세워 두 그림자 길이의 합의 변화율을 묻기(★4)."
```

```yaml
- id: GN-CALC1-149-298
  page: 149
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "개념원리 익히기(확인체크)"
  summary: |
    한 변이 $10\,\mathrm{cm}$ 인 정삼각형의 각 변이 매초 $6\,\mathrm{cm}$ 씩 길어질 때 높이의 변화율.
  category: "정삼각형 높이 공식 → 변을 시각의 일차식으로 → 미분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "시각에 대한 길이의 변화율(도형의 높이)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    높이 $h=\dfrac{\sqrt{3}}{2}a$ 에 $a=10+6t$ 를 넣으면 $h$ 가 $t$ 의 일차식이 되어 변화율이 상수로 나온다.
    공식 하나를 그대로 쓰는 한 단계 문항이고 초기 변 $10$ 은 답에 영향을 주지 않는 장식이다.
    확인체크 ★1 출발 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "h=(√3/2)a, a=10+6t → dh/dt=(√3/2)·6"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3\sqrt{3}\,\mathrm{cm/s}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/149-298.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초기 변 $10$ 과 증가율 $6$ 을 바꿀 수 있음. 제약: 높이의 변화율이 증가율의 $\\dfrac{\\sqrt3}{2}$ 배라 증가율을 짝수로 두어야 무리수 계수가 정리됨. 초기 변은 답에 영향 없음."
    creative: "(1) 넓이의 변화율로 바꾸면 $a^2$ 이 들어가 시각 지정이 필요해져 ★2 (2) 둘레의 변화율(★1) (3) 『넓이의 변화율이 처음으로 $k$ 를 넘는 시각』으로 바꾸면 부등식 역산이 붙어 ★3."
```

```yaml
- id: GN-CALC1-149-299
  page: 149
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "개념원리 익히기(확인체크)"
  summary: |
    ⑴~⑵ 키 $1.6\,\mathrm{m}$ 인 사람이 $4\,\mathrm{m}$ 가로등 밑에서 매초 $1.8\,\mathrm{m}$ 로 걸을 때 ⑴ 그림자의 머리끝이 움직이는 속도 ⑵ 그림자의 길이의 변화율.
  category: "닮음으로 그림자 길이를 사람 위치로 표현 → 시각의 함수로 두고 미분"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "가로등·사람·그림자의 닮음비를 그림자 길이와 걸은 거리 사이의 대수 관계식으로 전환해야 미분 대상이 생김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "시각에 대한 길이의 변화율(가로등 그림자)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 필수 예제의 쌍둥이로 골조가 같고 수치만 소수로 바뀌었다 — 닮음 $4:1.6=(x+l):l$ 에서 $l$ 을 $x$ 로 옮기고 $x=1.8t$ 를 대입해 미분한다(I-RT d2).
    ⑴ 은 $x+l$, ⑵ 는 $l$ 이라는 구분이 그대로 유지되고 소수 계산이 한 겹 더 붙는다.
    확인체크 ★1 출발이나 통찰 1개·M_total 7 로 ★2.
  tier: star_2
  mechanism_primary: "닮음 4:1.6=(x+l):l → l=(2/3)x → x=1.8t 대입 → ⑴ (x+l)' ⑵ l'"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $3\,\mathrm{m/s}$ ⑵ $1.2\,\mathrm{m/s}$'
  answer_source: "답지"
  figure: crop:fig-149-299.png
  latex: latex-bank/gn-calc1/items/149-299.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "가로등 높이 $4$, 키 $1.6$, 속도 $1.8$ 을 바꿀 수 있음. 제약: 닮음비 $($키$)/($높이$-$키$)$ 가 유리수여야 하고 두 답이 모두 유한소수가 되게 속도를 고른다. 그림 라벨은 고정."
    creative: "(1) 그림자 길이의 변화율만 주고 키를 역산시키기(I-BW ★3) (2) 『머리끝 속도가 걷는 속도의 몇 배인가』를 문자로 일반화(Mₐ 상승 ★3) (3) 가로등을 향해 걸어오는 설정으로 부호 해석을 추가(★2)."
```

```yaml
- id: GN-CALC1-150-e36
  page: 150
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    반지름이 매초 $20\,\mathrm{cm}$ 씩 늘어나는 원에서 $3$ 초 후의 넓이의 변화율.
  category: "반지름을 시각의 일차식으로 → 넓이식에 대입 → 미분 후 시각 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "시각에 대한 넓이의 변화율(원)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $r=20t$ 를 $S=\pi r^2$ 에 넣어 $S=400\pi t^2$ 으로 만든 뒤 미분해 $t=3$ 을 대입하는 한 줄짜리 골조다.
    넓이의 변화율은 상수가 아니라 시각에 따라 달라진다는 점만 확인시키는 개념 도입 문항이다.
    통찰 0·M_total 4 로 ★1 후보이나 이 갈래(변화율)의 대표 도입 예제라 필수 예제 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "r=20t → S=π(20t)^2 → dS/dt=800πt → t=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2400\pi\,\mathrm{cm}^2/\mathrm{s}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/150-e36.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 증가율 $20$ 과 시각 $3$ 을 바꿀 수 있음. 제약: 초기 반지름이 $0$ 이라 $r=($증가율$)t$ 가 유지되고, 초기 반지름을 넣으면 $S$ 가 이차식이 되어 전개가 한 단 늘어남."
    creative: "(1) 둘레의 변화율로 바꾸면 상수가 되어 ★1 (2) 초기 반지름을 넣고 『넓이의 변화율이 $k\\pi$ 가 되는 시각』을 묻기(I-BW ★3) (3) 동심원 두 개 사이 띠의 넓이의 변화율로 확장(★3)."
```

```yaml
- id: GN-CALC1-150-e37
  page: 150
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    반지름 $2\,\mathrm{cm}$ 인 구 모양 풍선의 반지름이 매초 $1\,\mathrm{cm}$ 씩 늘어날 때 반지름이 $6\,\mathrm{cm}$ 가 되는 순간의 부피의 변화율.
  category: "반지름을 시각의 일차식으로 → 부피식 대입 → 조건이 된 시각 확정 → 미분값"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "시각에 대한 부피의 변화율(구)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $r=2+t$ 를 $V=\dfrac{4}{3}\pi r^3$ 에 넣고 미분한 뒤, 『반지름이 $6$』 이라는 조건을 시각 $t=4$ 로 번역해 대입한다.
    앞 문항과 달리 조건이 시각이 아니라 반지름으로 주어져 한 단계를 더 거치지만 번역 자체는 일차식 대입이라 통찰로 세지 않았다.
    필수 예제 출발점 ★2 · 통찰 0 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "r=2+t → V=(4/3)π(2+t)^3 → dV/dt=4π(2+t)^2 → r=6 즉 t=4 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$144\pi\,\mathrm{cm}^3/\mathrm{s}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/150-e37.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초기 반지름 $2$, 증가율 $1$, 목표 반지름 $6$ 을 바꿀 수 있음. 제약: 목표 반지름 > 초기 반지름이어야 시각이 양수이고, $dV/dt=4\\pi r^2 \\cdot r'$ 이므로 답이 정수 $\\pi$ 배가 되게 고른다."
    creative: "(1) 겉넓이의 변화율로 바꾸기(★2) (2) 부피의 변화율을 주고 그때의 반지름을 역산시키기(I-BW ★3) (3) 반지름 대신 겉넓이가 일정하게 늘어난다고 바꾸면 합성 관계가 한 겹 늘어 ★4."
```

```yaml
- id: GN-CALC1-150-300
  page: 150
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "개념원리 익히기(확인체크)"
  summary: |
    가로 $9\,\mathrm{cm}$·세로 $4\,\mathrm{cm}$ 인 직사각형의 가로가 매초 $0.2$, 세로가 매초 $0.3$ 씩 늘어날 때 정사각형이 되는 순간의 넓이의 변화율.
  category: "두 변을 시각의 일차식으로 → 정사각형 조건으로 시각 결정 → 넓이 미분값"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "시각에 대한 넓이의 변화율(두 변이 함께 변하는 직사각형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    가로 $9+0.2t$, 세로 $4+0.3t$ 를 같게 놓아 $t=50$ 을 먼저 얻고, 넓이 $S$ 를 전개해 미분한 값에 그 시각을 넣는다.
    두 변이 동시에 변한다는 점과 조건이 시각이 아니라 도형의 모양으로 주어진 점이 앞 예제보다 한 단계 더 붙는 부분이다.
    확인체크 ★1 출발이나 M_total 6 으로 +1 하여 ★2.
  tier: star_2
  mechanism_primary: "9+0.2t=4+0.3t → t=50 → S=(9+0.2t)(4+0.3t) 미분 → t=50 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$9.5\,\mathrm{cm}^2/\mathrm{s}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/150-300.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초기 두 변 $9,4$ 와 증가율 $0.2,0.3$ 을 바꿀 수 있음. 제약: 세로 증가율 > 가로 증가율이어야 정사각형이 되는 양의 시각이 존재하고, 그 시각이 유리수가 되게 조합해야 함."
    creative: "(1) 둘레의 변화율로 바꾸면 상수가 되어 ★1 (2) 『넓이의 변화율이 최소가 되는 시각』을 묻기(★3) (3) 세로가 줄어들게 해 넓이의 변화율이 $0$ 이 되는 시각을 묻기(부호 함정 추가 ★3)."
```

```yaml
- id: GN-CALC1-150-301
  page: 150
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "개념원리 익히기(확인체크)"
  summary: |
    밑면 반지름 $20\,\mathrm{cm}$·높이 $5\,\mathrm{cm}$ 인 원기둥에서 반지름이 매초 $0.2$ 씩 줄고 높이가 매초 $0.5$ 씩 늘 때 $10$ 초 후의 부피의 변화율.
  category: "반지름·높이를 시각의 일차식으로 → 부피식에 대입 → 미분 후 시각 대입"
  M: {s: 2, k: 3, a: 1, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "시각에 대한 부피의 변화율(두 변수가 함께 변하는 원기둥)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $r=20-0.2t$, $h=5+0.5t$ 를 $V=\pi r^2 h$ 에 넣으면 $t$ 의 삼차식이 되고, 이를 미분해 $t=10$ 을 대입한다.
    반지름이 『줄어든다』는 부호와 소수 계수 삼차식 전개가 이 문항의 실제 부담이라 Mₖ 3·Mₜ 2 이고 통찰은 없다.
    확인체크 ★1 출발이나 M_total 8 로 +1 하여 ★2(계산 마찰이 주된 부담이라 그 이상은 올리지 않음).
  tier: star_2
  mechanism_primary: "r=20-0.2t, h=5+0.5t → V=πr^2h → dV/dt 계산 → t=10 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$90\pi\,\mathrm{cm}^3/\mathrm{s}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/150-301.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초기 $r=20,h=5$ 와 변화율 $-0.2,+0.5$, 평가 시각 $10$ 을 바꿀 수 있음. 제약: 평가 시각까지 $r>0$ 이어야 하고, 대입 시각에서 $r,h$ 가 정수가 되게 잡아야 답이 정수 $\\pi$ 배로 떨어짐."
    creative: "(1) 겉넓이의 변화율로 바꾸기(★2) (2) 『부피의 변화율이 $0$ 이 되는 시각』을 묻기(이차방정식 + 범위 확인 I-VF ★3) (3) 부피가 최대가 되는 시각을 묻기(★4)."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC1-151-302
  page: 151
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    원점을 출발한 점 P 의 위치가 $x=t^3-7t^2+12t$ 일 때 마지막으로 원점을 지날 때의 속도.
  category: "x=0 의 근 → 가장 큰 시각 선택 → v=x' 에 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원점을 지나는 시각에서의 속도"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x=t(t-3)(t-4)$ 로 묶으면 원점 통과 시각이 $0,3,4$ 로 다 보이고 『마지막』인 $t=4$ 를 골라 $v$ 에 넣으면 끝난다.
    인수분해가 바로 되고 근 중 최대를 고르는 것뿐이라 통찰로 세지 않았다.
    통찰 0·M_total 5 로 ★1 후보이나 세 근 가운데 하나를 지정해 고르는 단계가 있어 STEP 1 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "x=t(t-3)(t-4)=0 → 통과 시각 0,3,4 → 최대 t=4 → v=3t^2-14t+12 에 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/151-302.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$x=t(t-p)(t-q)$ 의 $p,q$ 를 바꿀 수 있음. 제약: 세 근이 서로 다른 음이 아닌 정수여야 『마지막』이 하나로 정해지고, 상수항이 0 이어야 원점 출발이 유지됨."
    creative: "(1) 『처음으로 원점을 지날 때』로 바꾸기(★2) (2) 원점을 지나는 횟수를 묻기(★2) (3) 중근이 생기게 만들어 원점에서 멈추는 경우를 섞으면 후보 기각 I-VF 가 붙어 ★3."
```

```yaml
- id: GN-CALC1-151-303
  page: 151
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 1"
  summary: |
    $t>0$ 에서 위치가 $x(t)=\dfrac{3}{2}t^4-8t^3+15t^2-12t$ 인 점 P 의 운동 방향이 바뀌는 순간의 가속도.
  category: "v=x' 인수분해 → 부호가 실제로 바뀌는 시각만 채택 → a=v' 에 대입"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "v=0 의 해 t=1(중근), t=2 중 t=1 은 부호가 바뀌지 않아 기각해야 하며, 기각하지 않으면 틀린 가속도에 도달함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "운동 방향이 바뀌는 시각에서의 가속도"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $v=6t^3-24t^2+30t-12=6(t-1)^2(t-2)$ 로 삼차식을 인수분해하는 것이 첫 관문이고, 그다음이 진짜 관문이다 — $t=1$ 은 $v=0$ 이지만 중근이라 부호가 바뀌지 않아 방향 전환이 아니다(I-VF d2).
    후보 두 개 중 하나를 조건 위배로 기각해야 답이 정해지므로 검증이 풀이의 본질이고, 기각을 빠뜨리면 $a(1)$ 을 답으로 내게 된다.
    STEP 1 출발점 ★2 에 교육청 기출 태그 + 통찰 1개로 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "v=6(t-1)^2(t-2) → 부호가 바뀌는 t=2 만 채택 → a=18t^2-48t+30 에 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/151-303.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$v=c(t-p)^2(t-q)$ 가 되도록 사차 위치식의 계수를 잡는다. 제약: 중근 $p$ 와 단근 $q$ 가 모두 양의 정수여야 기각 구조가 살고, $x$ 의 최고차 계수는 $v$ 의 계수가 정수가 되게 분수로 둔다."
    creative: "(1) 중근을 없애 두 시각 모두 전환이 되게 하면 『두 번째』 지정이 필요해져 ★2 (2) 방향 전환 시각의 위치를 묻기(★3) (3) 중근을 문자로 두고 『방향이 한 번만 바뀌도록 하는 계수』를 묻기(I-BW 추가 ★4)."
```

```yaml
- id: GN-CALC1-151-304
  page: 151
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    옥상에서 쏘아 올린 로켓의 높이가 $x=20+10t-5t^2$ 일 때 최고 높이 도달 시간을 $\alpha$, 그때의 높이를 $\beta$ 라 하고 $\alpha+\beta$ 의 값.
  category: "최고 높이 ⟺ v=0 → 시각 α → 높이 β=x(α) → 합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "위로 쏘아 올린 물체의 최고 높이와 도달 시간"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $v=10-10t=0$ 에서 $\alpha=1$, $\beta=x(1)=25$ 를 얻어 더하면 끝나는 표준 연쇄다.
    답을 두 문자에 나눠 담아 단위가 다른 두 값을 더하게 한 것이 유일한 장치이고(Mₐ 2) 통찰은 없다.
    STEP 1 출발점 ★2 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "v=10-10t=0 → α=1 → β=x(1)=25 → α+β"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$26$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/151-304.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "옥상 높이 $20$, 초속 $10$, 중력항 계수 $5$ 를 바꿀 수 있음. 제약: $\\alpha=v_0/10$ 이 유리수이고 $\\beta$ 가 정수가 되게 조합해야 하며, 옥상 높이는 $\\beta$ 에만 더해짐."
    creative: "(1) 착지 시각을 $\\gamma$ 로 추가해 $\\alpha+\\beta+\\gamma$ 를 묻기(★2~3) (2) $\\beta$ 를 주고 초속을 역산시키기(I-BW ★3) (3) 지면 도달 속도까지 묶어 물으면 관문이 셋이 되어 ★3."
```

```yaml
- id: GN-CALC1-151-305
  page: 151
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    원점을 출발한 점 P 의 속도 $v(t)$ 의 그래프가 주어졌을 때 보기 ㄱ($2<t<3$ 에서 양의 방향) · ㄴ($t=1$ 과 $t=3$ 의 운동 방향이 반대) · ㄷ($t=4$ 에서 가속도 $0$) 중 옳은 것 고르기.
  category: "v 그래프의 부호 → 진행 방향 · 그래프가 수평인 구간 → 가속도 0"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ㄷ 에서 t=4 는 v 가 0 인 곳이 아니라 그래프가 수평인 곳이므로 가속도를 접선 기울기로 읽어야 판정됨"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "속도 그래프의 해석(방향·가속도)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ·ㄴ 은 $t=2$ 를 경계로 한 $v$ 의 부호만 보면 되고, ㄷ 은 $t\ge 3$ 에서 그래프가 수평선이라는 사실을 $a=v'=0$ 으로 옮겨야 한다(I-RT d2).
    세 보기가 모두 참이라 부분 판정으로는 답이 갈리지 않고 세 번 다 읽어야 한다.
    통찰 1개·depth 2 는 +1 조건에 못 미쳐 STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "v 그래프 부호(0<t<2 음·t>2 양) → ㄱㄴ · t≥3 수평 → a=0 → ㄷ"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: 'ㄱ, ㄴ, ㄷ'
  answer_source: "답지"
  figure: crop:fig-151-305.png
  latex: latex-bank/gn-calc1/items/151-305.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기에서 묻는 시각·구간($2<t<3$, $t=1,3,4$)만 바꿀 수 있음. 제약: 그림의 라벨 $2,3$ 과 수평 구간이 고정이므로 부호가 바뀌는 $t=2$ 를 구간 안에 끼워 넣지 않아야 판정이 유지됨."
    creative: "(1) ㄷ 를 『$t=2$ 에서 가속도가 $0$ 이다』로 바꿔 거짓 보기를 만들기(★2) (2) 『원점에서 가장 멀어지는 시각』을 묻기(★3) (3) 같은 그래프로 위치의 대소를 비교하게 하면 넓이 해석이 필요해 교육과정 밖으로 나가므로 피한다."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC1-151-306
  page: 151
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    위치가 $x=\dfrac{1}{3}t^3-4t^2+10t$ 인 점 P 의 $0\le t\le 5$ 에서의 속력의 최댓값.
  category: "속력 = |속도| → 구간 안 v 의 최대·최소 → 절댓값 비교"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "『속력의 최댓값』을 『v 의 최댓값』이 아니라 『|v| 의 최댓값』으로 바꿔 읽어, 꼭짓점의 음수 최솟값과 구간 끝값을 함께 비교해야 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "주어진 구간에서 속력의 최댓값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $v=t^2-8t+10$ 은 구간 안에서 부호가 바뀌므로 속력의 최댓값은 $v$ 의 최댓값이 아니라 $v$ 의 최댓값과 최솟값의 절댓값 중 큰 쪽이다(I-EQV d2).
    꼭짓점 $t=4$ 의 음수값과 두 끝점 $t=0,5$ 를 모두 확인해야 하고, 부호를 무시하면 꼭짓점 값을 답으로 내게 된다.
    STEP 2 출발점 ★3 · 통찰 1개 → ★3 유지.
  tier: star_3
  mechanism_primary: "v=t^2-8t+10 → 0≤t≤5 의 꼭짓점·양 끝값 → |v| 비교 → 최댓값"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/151-306.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "위치식 계수와 구간 $[0,5]$ 를 바꿀 수 있음. 제약: 구간 안에서 $v$ 가 부호를 바꾸어야 절댓값 비교가 살아 있고, 꼭짓점이 구간 안에 들어오되 끝값이 더 크도록 잡아야 함정이 유지됨."
    creative: "(1) 『속력의 최솟값』으로 바꾸면 $v=0$ 인 시각이 있어 답이 0 이 되는 함정(★3) (2) 구간을 꼭짓점 오른쪽으로 옮겨 단조 구간으로 만들면 ★2 (3) 『가장 빠르게 음의 방향으로 움직이는 시각』을 묻기(★3)."
```

```yaml
- id: GN-CALC1-152-307
  page: 152
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["수능 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    두 점 P, Q 의 위치가 $x_1=t^3-2t^2+3t$, $x_2=t^2+12t$ 일 때 두 점의 속도가 같아지는 순간의 두 점 사이의 거리.
  category: "두 속도를 같게 놓아 시각 결정 → 두 위치의 차의 절댓값"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점의 속도가 같아지는 순간의 거리"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $v_1=v_2$ 에서 $3t^2-6t-9=0$ → $t=3$ (음의 근은 $t\ge 0$ 으로 버려짐), 그 시각의 두 위치를 각각 계산해 차의 절댓값을 취한다.
    두 점을 다루지만 조건이 곧바로 방정식 하나로 떨어져 판단 갈림이 없고 통찰은 세지 않았다.
    [분류 이슈] STEP 2·수능 기출 신호로 ★3 을 유지했으나 절차형·M_total 6 이라 판정만 보면 ★2 로, 이 구역에서 가장 가벼운 문항이다.
  tier: star_3
  mechanism_primary: "v1=3t^2-4t+3, v2=2t+12 → v1=v2 → t=3 → |x1(3)-x2(3)|"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$27$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/152-307.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 위치식의 계수를 바꿀 수 있음. 제약: $v_1-v_2=0$ 이 인수분해되는 이차식이어야 하고 양의 근이 하나만 남아야 하며, 두 위치의 차가 정수로 떨어지게 잡는다."
    creative: "(1) 『위치가 같아지는 순간』으로 바꾸면 삼차방정식이 되어 ★3~4 (2) 『두 점이 서로 반대 방향으로 움직이는 시각의 범위』를 묻기(부등식 연립 I-CON ★4) (3) 두 점 사이 거리의 최솟값을 묻기(★4)."
```

```yaml
- id: GN-CALC1-152-308
  page: 152
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    브레이크를 밟은 후 $t$ 초 동안 달린 거리가 $x=36t-at^2$ 일 때 $90\,\mathrm{m}$ 앞 정지선을 넘지 않고 멈추기 위한 양수 $a$ 의 최솟값.
  category: "정지 ⟺ v=0 → 정지까지의 거리 → 거리 ≤ 90 부등식 → a 의 최솟값"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "『정지선을 넘지 않는다』를 『속도가 0 이 되는 순간까지 달린 거리가 90 이하』라는 부등식으로 옮겨야 식이 생김"
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "a 를 미지로 둔 채 정지 거리 324/a 를 구하고 조건을 만족하는 a 의 경계를 역으로 찾아 최솟값을 결정"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "제동 거리 조건에서 계수의 최솟값"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    멈추는 시각을 $v=36-2at=0$ 에서 $t=\dfrac{18}{a}$ 로 문자인 채 구하고, 그때의 거리 $\dfrac{324}{a}$ 가 $90$ 이하라는 부등식을 세워 $a$ 를 역산한다.
    조건이 거리 부등식으로 번역되는 단계(I-EQV d2)와 미지 계수의 경계를 거꾸로 찾는 단계(I-BW d2)가 분리돼 있고, $a$ 가 커질수록 제동 거리가 줄어 부등호 방향이 뒤집히는 점이 실수 지점이다.
    STEP 2 출발점 ★3 에 통찰 2개로 +1 하여 ★4(★4 에 요구되는 저노출 유형 I-BW 포함).
  tier: star_4
  mechanism_primary: "v=36-2at=0 → 정지 시각 t=18/a → 정지 거리 324/a ≤ 90 → a 의 최솟값"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{18}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/152-308.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초속 $36$ 과 정지선까지 거리 $90$ 을 바꿀 수 있음. 제약: 정지 거리가 $v_0^2/(4a)$ 라 답이 $v_0^2/(4\\cdot$거리$)$ 로 결정되므로 유리수로 떨어지게 조합하고, $a>0$ 을 유지해야 감속 상황이 성립."
    creative: "(1) $a$ 를 주고 안전한 최대 초속을 묻기(대칭 역산 ★4) (2) 『정지선 앞 $10\\,\\mathrm{m}$ 이내에서 멈추도록』처럼 구간 조건으로 바꾸면 부등식이 둘이 되어 ★4~5 (3) 반응 시간 동안의 등속 구간을 추가하면 단원 결합 I-XU 가 붙어 ★5 후보."
```

```yaml
- id: GN-CALC1-152-309
  page: 152
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $t\ge 0$ 에서 위치가 $x=t^3-8t^2+at-1$ 인 점 P 의 운동 방향이 한 번도 바뀌지 않도록 하는 자연수 $a$ 의 최솟값.
  category: "방향 불변 ⟺ v 의 부호 일정 ⟺ 판별식 ≤ 0 → 자연수 최솟값"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "『운동 방향이 바뀌지 않는다』를 『v=3t^2-16t+a 가 부호를 바꾸지 않는다』, 다시 『판별식 ≤ 0』 으로 두 번 옮겨야 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "운동 방향이 바뀌지 않을 조건(판별식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    방향 전환이 없다는 진술을 $v$ 의 부호가 일정하다는 조건으로, 다시 이차식의 판별식 조건 $256-12a\le 0$ 으로 두 번 옮기는 것이 전부의 골조다(I-EQV d2).
    $v$ 의 축이 $t=\dfrac{8}{3}>0$ 이라 $t\ge 0$ 제한이 조건을 느슨하게 만들지 않는다는 점과, 경계 $a\ge\dfrac{64}{3}$ 에서 자연수 최소를 고르는 처리가 함정이다.
    STEP 2 출발점 ★3 · 통찰 1개·M_total 8 → ★3 유지.
  tier: star_3
  mechanism_primary: "v=3t^2-16t+a 가 부호 불변 → 판별식 256-12a ≤ 0 → a ≥ 64/3 → 자연수 최솟값"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$22$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/152-309.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$x=t^3-bt^2+at+c$ 의 $b$ 를 바꿀 수 있음. 제약: $v$ 의 축 $b/3$ 이 양수여야 $t\\ge 0$ 제한이 무의미해지고, $a\\ge b^2/3$ 의 경계가 정수가 아닐 때 자연수 최소를 고르는 맛이 살아남. 상수항 $-1$ 은 답에 영향 없음."
    creative: "(1) 『방향이 두 번 바뀌도록 하는 $a$ 의 범위』로 뒤집기(★3) (2) 축이 음수가 되게 $b$ 의 부호를 바꿔 $t\\ge 0$ 제한이 실제로 작동하게 하면 경계 검토가 늘어 ★4 (3) $a$ 의 최솟값일 때 방향이 바뀌지 않음을 확인시키는 검증 소문항을 붙이면 I-VF 추가 ★4."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC1-152-310
  page: 152
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    반지름 $5$ 인 반구 모양 물탱크에 물을 넣어 수면의 높이가 매분 $1$ 씩 올라갈 때 $2$ 분 후의 수면의 넓이의 변화율.
  category: "구의 단면 → 수면 반지름을 높이로(피타고라스) → 넓이를 시각의 함수로 → 미분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "입체 상황을 중심을 지나는 단면으로 옮겨 수면 반지름 r 과 높이 h 사이의 관계 r^2=5^2-(5-h)^2 를 세워야 미분할 식이 생김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "시각에 대한 넓이의 변화율(반구 물탱크의 수면)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    수면의 반지름이 주어지지 않아 학생이 직접 단면을 그려 피타고라스로 $r^2=10h-h^2$ 를 만들어야 하고, 여기서부터는 $h=t$ 를 넣어 미분하는 표준 절차다(I-RT d2).
    수면 넓이가 $\pi r^2$ 이므로 $r$ 을 따로 구할 필요 없이 $r^2$ 만 있으면 된다는 점이 계산을 줄이는 지점이다.
    [분류 이슈] 실력 UP 출발점 ★4 를 유지했으나 M_total 6·통찰 1개라 판정만 보면 ★3 이다.
  tier: star_4
  mechanism_primary: "h=t → r^2=5^2-(5-h)^2=10t-t^2 → S=π(10t-t^2) → dS/dt 에 t=2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6\pi$'
  answer_source: "답지"
  figure: crop:fig-152-310.png
  latex: latex-bank/gn-calc1/items/152-310.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반구의 반지름 $5$, 수면 상승 속도 $1$, 시각 $2$ 를 바꿀 수 있음. 제약: 평가 시각의 수면 높이가 반지름을 넘지 않아야 하고($h\\le R$), $dS/dt=\\pi(2R-2h)h'$ 가 정수 $\\pi$ 배로 떨어지게 조합. 그림의 반지름 라벨은 고정."
    creative: "(1) 수면 넓이의 변화율이 $0$ 이 되는 시각을 묻기(물이 가득 찬 순간 ★4) (2) 물의 부피의 변화율로 바꾸면 구의 부분 부피가 필요해 교육과정을 벗어나므로 피한다 (3) 반구를 뒤집은 그릇으로 바꾸면 관계식이 달라져 같은 골조로 새 문항이 됨(★4)."
```

```yaml
- id: GN-CALC1-152-311
  page: 152
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    밑면 반지름 $6\,\mathrm{cm}$·높이 $24\,\mathrm{cm}$ 인 원뿔 그릇에 수면이 매초 $2\,\mathrm{cm}$ 씩 올라가도록 물을 넣을 때 수면 높이가 $8\,\mathrm{cm}$ 인 순간의 부피의 변화율이 $k\pi$ 일 때의 $k$.
  category: "닮음으로 수면 반지름을 높이로 → 물의 부피를 높이의 식으로 → 미분 후 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "원뿔 단면의 닮음에서 수면 반지름과 높이의 비 r:h=6:24 를 읽어 r 을 h 로 소거해야 부피가 한 변수의 함수가 됨"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "시각에 대한 부피의 변화율(원뿔 그릇의 수면)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    물이 이루는 입체가 원래 그릇과 닮은 원뿔이라는 것을 보고 $r=\dfrac{h}{4}$ 로 변수를 하나로 줄이는 것이 이 문항의 전부다(I-RT d2).
    그 뒤 $V=\dfrac{\pi h^3}{48}$ 을 미분해 $h=8$, $h'=2$ 를 넣으면 되고, 높이를 시각으로 바꾸지 않고 $h$ 로 미분한 뒤 $h'$ 를 곱하는 처리가 실수 지점이다.
    실력 UP 출발점 ★4 유지 · 통찰 1개·M_total 6 → ★4.
  tier: star_4
  mechanism_primary: "닮음 r:h=6:24 → r=h/4 → V=πh^3/48 → dV/dt=(πh^2/16)h' → h=8, h'=2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$8$'
  answer_source: "답지"
  figure: crop:fig-152-311.png
  latex: latex-bank/gn-calc1/items/152-311.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그릇의 반지름 $6$·높이 $24$·수면 상승 속도 $2$·평가 높이 $8$ 을 바꿀 수 있음. 제약: 닮음비 $R/H$ 가 유리수이고 평가 높이 $\\le H$ 여야 하며, $dV/dt=\\pi (R/H)^2h^2h'$ 가 정수 $\\pi$ 배가 되게 조합."
    creative: "(1) 수면 높이 대신 부피가 일정한 속도로 늘어난다고 바꾸면 수면 상승 속도를 묻는 역문제가 되어 I-BW 추가 ★5 후보 (2) 수면의 넓이의 변화율로 바꾸기(★3) (3) 그릇을 뒤집어 꼭짓점이 위로 오게 하면 물의 입체가 원뿔대가 되어 ★5."
```

## 표본 판정 요약 (26문)

- ★ 분포: ★1 3 · ★2 16 · ★3 4 · ★4 3 · ★5 0
- 통찰형 12 · 절차형 14 · premium 0
- 통찰 라벨 13개(문항 12): I-RT 7 · I-EQV 4 · I-BW 1 · I-VF 1. depth 는 모두 2, depth 3 없음 → ★5 없음(§2.13 저노출 유형 요건도 미충족).
- 구역별: 필수·발전 예제 16문(★1 3 · ★2 13) · STEP 1 4문(★2 3 · ★3 1) · STEP 2 4문(★3 3 · ★4 1) · 실력 UP 2문(★4 2).
- type_hint 상위 5(묶음): 「시각에 대한 길이·넓이·부피의 변화율」 9 · 「위치식 미분 → 속도·가속도·방향 전환」 5 · 「속도·위치 그래프 해석」 4 · 「위로 던진 물체의 높이와 속도」 4 · 「속도 조건이 붙은 응용(속력 최댓값·두 점 비교·제동 거리·방향 불변)」 4
- 그림: 8문(`crop:fig-148-e34.png` · `crop:fig-148-296.png` · `crop:fig-148-297.png` · `crop:fig-149-e35.png` · `crop:fig-149-299.png` · `crop:fig-151-305.png` · `crop:fig-152-310.png` · `crop:fig-152-311.png`)
- 대상층: 하위권 3 · 중하위권 11 · 중위권 9 · 중상위권 3

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC1-148-297 | 확인체크(★1 출발)이지만 위치 그래프를 속도로 옮겨 읽는 I-RT d2 + M_total 8 → 판정은 ★3 에 가깝다. 구역 신호를 존중해 ★2 로 둠 | ★2 / ★3 |
| GN-CALC1-150-301 | M_total 8 로 이 구역 최고이나 부담이 전적으로 소수 계수 삼차식 전개(계산 마찰)라 질적 난이도는 ★2. §2.11 기준으로 ★ 상향 근거로 쓰지 않음 | ★2 |
| GN-CALC1-152-307 | STEP 2·수능 기출 신호로 ★3 을 유지했으나 절차형·M_total 6 으로 판정만 보면 ★2. 구역 안에서 가장 가벼움 | ★2 / ★3 |
| GN-CALC1-152-308 | STEP 2(★3 출발)에서 통찰 2개(I-EQV+I-BW)로 +1 해 ★4 로 올림. 이 범위에서 유일하게 벤더 신호보다 위로 올린 문항 | ★3 / ★4 |
| GN-CALC1-152-310 | 실력 UP(★4 출발) 유지했으나 M_total 6·통찰 1개라 판정만 보면 ★3. 단면 관계식을 스스로 세워야 하는 진입 저항을 반영해 ★4 유지 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **반복된 type_hint** — 「시각에 대한 변화율」이 9문으로 이 단원의 실질적 주축이다. 대상이 길이(그림자·높이) 3 · 넓이(원·직사각형·수면) 4 · 부피(구·원기둥·원뿔) 4 로 갈리지만 골조는 모두 「기하 관계로 변수 하나 줄이기 → 시각의 함수 → 미분 → 대입」으로 같다.
- **따로 세워야 할 유형** — ⑴ 「변수를 처음부터 시각의 일차식으로 줄 수 있는 것」(149-298, 150-e36, 150-e37, 150-300, 150-301)과 ⑵ 「닮음·피타고라스로 관계식을 먼저 세워야 하는 것」(149-e35, 149-299, 152-310, 152-311)은 학생 체감이 ★2 와 ★4 로 갈리므로 카탈로그에서 다른 유형으로 세워야 한다. ⑵ 만이 I-RT 통찰을 요구한다.
- **따로 세워야 할 유형 2** — 그래프 해석은 「속도 그래프」(148-e34, 148-296, 151-305)와 「위치 그래프」(148-297)를 나눠야 한다. 같은 그림으로 답이 뒤집히는 쌍둥이 관계라 한 유형으로 묶으면 변형 생성에서 참거짓이 섞인다.
- **통합해도 될 유형** — 146-e32·146-292·146-293·151-302·151-303 은 모두 「위치식 미분 → v=0 의 부호 변화 시각 선택 → 위치·가속도 대입」 하나로 묶인다. 차이는 선택 규칙(첫 번째/두 번째/마지막/중근 기각)뿐이므로 단일 유형 + 선택 규칙 파라미터로 두는 편이 변형에 유리하다.
- **통합해도 될 유형 2** — 147-e33·147-294·147-295·151-304 의 「위로 던진 물체」는 배경만 다르고 골조가 같다. 최고 높이(v=0)·착지(x=0)·미정 계수 역산의 세 파라미터로 한 유형에서 생성 가능하다.
- **base ★ 후보** — 위 통합 유형은 base ★2, 「닮음·피타고라스가 필요한 변화율」은 base ★3~4, 「방향 불변 조건·제동 거리 같은 역산 조건」은 base ★3 이 출발점으로 보인다.
