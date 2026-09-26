---
name: mechanism-데이터-GN-CM1-27
description: 개념원리 공통수학1 27 연립이차부등식(1/1 · 220~223쪽 16문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1 (22개정) · 전사본 latex-bank/gn-cm1
  section: 27 연립이차부등식
  unit_code: GN-CM1-27
  part: "1/1"
  extract_range: "220~223쪽 · 220-e20~223-487"
  total_problems: 16
  unit_total: 16
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (이 범위는 그림 문항 0)
---

# 개념원리 공통수학1 · 27 연립이차부등식 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학1 27단원 「연립이차부등식」 220~223쪽 16문항 전수를 다룬다. 구역은 「필수·발전 예제」 10문(필수 예제 4 + 확인체크 6), 「연습문제 STEP 1」 3문, 「연습문제 STEP 2」 2문, 「연습문제 실력 UP」 1문이다. 이 범위에 그림 문항은 없다.

개념원리 고등의 난이도 신호는 구역과 태그다. 「필수 예제」(★2 출발)와 그 뒤에 붙는 「확인체크」 유제는 같은 층으로 보았고, 연습문제는 STEP 1 → ★2 · STEP 2 → ★3 · 실력 UP → ★4 를 출발점으로 삼은 뒤 M_total 과 통찰 수로 ±1 조정했다. 단원 자체가 「두 이차부등식의 교집합」이라는 한 골조 위에서 ⒜ 해가 주어진 역문제 ⒝ 정수해 개수 조건 ⒞ 판별식 연립 ⒟ 도형 활용의 네 갈래로 뻗는 구조라, 매개변수가 들어간 인수 $(x-a)$ 의 근 위치 분기(I-MI)와 해 조건에서 매개변수를 역추적하는 사고(I-BW)가 ★3 이상 문항의 공통 축이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM1-220-e20
  page: 220
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    ⑴~⑷ 연립이차부등식 풀기. ⑴⑵ 이차부등식 두 개의 연립, ⑶ $2x+5<x^2<7x+8$ 꼴,
    ⑷ 절댓값 부등식 $|x-1|<3$ 과 이차부등식의 연립.
  category: '각 부등식을 인수분해로 풀어 해 구간 → 수직선에서 교집합'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '연립이차부등식의 풀이(교집합 · A<B<C 꼴 · 절댓값 포함)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 문항 모두 「각각 풀고 교집합」 한 골조. ⑶ 은 $A<B<C$ 를 두 부등식으로 쪼개는 표준 처리,
    ⑷ 는 절댓값을 범위로 푸는 표준 처리라 통찰로 세지 않았다. 함정은 등호 포함 경계(T-경계)와
    교집합 범위 누락(T-범위) 둘. 필수 예제 출발 ★2, 통찰 0 이지만 M_total 7 이라 하향 없이 ★2.
  tier: star_2
  mechanism_primary: '각 부등식 인수분해 → 해 구간 → 수직선 교집합 → 경계 등호 확인'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x<-7$ 또는 $x>5$ ⑵ $-\dfrac{3}{4}\le x<-\dfrac{1}{3}$ ⑶ $1+\sqrt{6}<x<8$ ⑷ $-2<x\le -1$ 또는 $\dfrac{3}{2}\le x<4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/220-e20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각 이차식의 계수를 인수분해 가능한 값으로 자유롭게 교체. 제약: ⑴⑵ 는 두 해 구간이 실제로 겹치거나(교집합 존재) 어긋나는지가 답의 형태를 바꾸므로 의도한 쪽으로 근을 배치해야 하고, ⑶ 처럼 무리수 근을 쓰면 $1+\sqrt{6}$ 과 $8$ 의 대소를 학생이 따로 판정해야 하므로 근사 비교가 가능한 수로 둔다. 등호(≤/<)는 답 구간의 열림·닫힘을 직접 바꾸므로 임의로 뒤집지 않는다.'
    creative: '(1) ⑷ 의 절댓값을 $|2x-1|\ge 5$ 처럼 바깥 부등호로 바꾸면 해가 두 조각이 되어 교집합이 두 구간 → ★2 유지·Mₜ 상승 (2) ⑶ 을 $x^2-1<f(x)<x^2+3$ 처럼 이차항이 상쇄되는 꼴로 주면 일차부등식 연립으로 내려가 ★1 (3) 「해가 존재하지 않도록」 또는 「정수해의 개수」를 묻는 역문제로 바꾸면 I-BW 가 붙어 ★3.'
```

```yaml
- id: GN-CM1-220-476
  page: 220
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 연립이차부등식 풀기(e20 유제). ⑴ 이차 둘, ⑵ 절댓값+이차, ⑶ $-2x-7<x^2-15\le -2x$ 꼴,
    ⑷ $|x^2-4x-6|\le 6$ 한 개짜리 절댓값 부등식.
  category: '각 부등식을 인수분해로 풀어 해 구간 → 수직선에서 교집합'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '연립이차부등식의 풀이(교집합 · A<B<C 꼴 · 절댓값 포함)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e20 과 같은 골조의 유제. ⑷ 는 $|f(x)|\le 6 \iff -6\le f(x)\le 6$ 으로 풀어 다시 연립이차부등식이 되는
    형태라 이 단원의 대표 변형이지만 변환 자체는 교과서 표준 절차라 통찰로 세지 않았다.
    확인체크지만 필수 예제 바로 뒤의 유제이므로 ★1 이 아닌 ★2 출발. 통찰 0·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '절댓값은 범위로·A<B<C 는 두 부등식으로 분해 → 각각 인수분해 → 교집합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-1\le x\le \dfrac{1}{2}$ 또는 $2\le x\le \dfrac{5}{2}$ ⑵ $4<x<6$ ⑶ $-5\le x<-4$ 또는 $2<x\le 3$ ⑷ $-2\le x\le 0$ 또는 $4\le x\le 6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/220-476.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑷ 의 $|x^2-4x-6|\le 6$ 에서 상수 6 을 바꾸면 $x^2-4x\ge 0$ 쪽이 인수분해되는지가 달라진다. 제약: 안쪽 이차식의 꼭짓점 $y$ 값과 바깥 상수의 대소가 「답이 두 구간이냐 한 구간이냐」를 결정하므로 의도한 형태를 먼저 정하고 계수를 잡는다. ⑴ 의 두 해 구간은 한쪽이 다른 쪽을 포함하지 않도록 둬야 답이 두 조각으로 갈린다.'
    creative: '(1) ⑷ 를 $|x^2-4x-6|\ge 6$ 으로 뒤집으면 합집합 처리 + 경계 판정 → ★3 (2) ⑵ 의 절댓값을 $|x-2|<k$ 매개변수로 주고 「해가 존재하도록 하는 $k$」를 물으면 Mₐ 상승·I-BW → ★3 (3) 네 소문항 대신 한 문항으로 줄이고 정수해 개수를 묻는 형태로 바꾸면 ★3.'
```

```yaml
- id: GN-CM1-221-e21
  page: 221
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    연립부등식 $x^2-2x-3<0$, $x^2-(a+2)x+2a\le 0$ 의 해가 $-1<x\le 2$ 가 되도록 하는 실수 $a$ 의 값의 범위.
  category: '해가 주어진 연립이차부등식 → 매개변수 인수의 근 위치 역추적'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '교집합이 $-1<x\le 2$ 로 정해져 있다는 결과 조건에서 $(x-2)(x-a)\le 0$ 의 다른 근 $a$ 가 놓여야 할 위치를 역추적'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '해가 주어진 연립이차부등식에서 미정계수의 범위'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    첫 부등식 해 $-1<x<3$ 은 고정. 둘째는 $(x-2)(x-a)\le 0$ 이므로 근 $2$ 와 $a$ 의 대소로 해가 갈린다.
    교집합의 오른쪽 끝이 $2$ 로 닫혀야 하므로 $a\le 2$ 갈래, 왼쪽 끝은 첫 부등식의 열린 $-1$ 이 그대로
    남아야 하므로 $a\le -1$. $a=-1$ 에서 왼쪽 경계가 여전히 열린 채 일치한다는 점이 핵심 함정(T-경계).
    역추적 통찰 1개(BW d2)·필수 예제 출발 ★2 → ★2 유지.
  tier: star_2
  mechanism_primary: '첫 해 $-1<x<3$ 고정 → $(x-2)(x-a)\le 0$ 의 근 대소 분기 → 교집합이 $-1<x\le 2$ 가 되는 $a$ 위치 → $a\le -1$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a\le -1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/221-e21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫 부등식의 두 근 $(-1, 3)$ 과 둘째 부등식의 고정 근 $2$ 를 바꿀 수 있다. 제약: 고정 근이 첫 부등식의 해 구간 안에 있어야 교집합의 오른쪽 끝을 만들고, 목표 해의 왼쪽 끝이 첫 부등식의 열린 끝과 일치해야 답이 부등호 하나(닫힌 $a\le$)로 떨어진다. 목표 해의 등호 방향을 바꾸면 답의 등호도 함께 바뀐다.'
    creative: '(1) 목표 해를 $-1<x\le 2$ 대신 $1\le x\le 2$ 처럼 양쪽 다 둘째 부등식이 결정하게 하면 $a$ 가 한 값으로 확정 → ★2 (2) 목표를 「해가 없도록」으로 바꾸면 공집합 조건 분기 → ★3 (3) 둘째 인수를 $(x-a)(x-2a)$ 로 두어 근 둘 다 움직이면 분기가 늘어 I-MI 추가 → ★3~4.'
```

```yaml
- id: GN-CM1-221-477
  page: 221
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    연립부등식 $x^2-6x+8>0$, $x^2-(6-a)x-6a\le 0$ 의 해가 $4<x\le 6$ 이 되도록 하는 실수 $a$ 의 값의 범위.
  category: '해가 주어진 연립이차부등식 → 매개변수 인수의 근을 양쪽에서 가두기'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '해가 $4<x\le 6$ 한 조각뿐이라는 결과에서 $(x-6)(x+a)\le 0$ 의 왼쪽 근 $-a$ 가 들어가야 할 구간을 양쪽 부등호로 역추적'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '해가 주어진 연립이차부등식에서 미정계수의 범위'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    첫 부등식 해 $x<2$ 또는 $x>4$ 가 두 조각이라, 둘째 해 구간 $[-a, 6]$ 이 오른쪽 조각만 덮고
    왼쪽 조각 $x<2$ 와는 겹치지 않아야 한다. 즉 $-a\le 4$ 와 $-a\ge 2$ 를 동시에 요구하는 양쪽 차단이
    e21 보다 한 겹 두껍다. 통찰 1개(BW d2)·확인체크 유제 출발 ★2 → ★2 유지.
  tier: star_2
  mechanism_primary: '첫 해 두 조각 확인 → $(x-6)(x+a)\le 0$ 의 해 $[-a,6]$ → 왼쪽 조각과 안 겹치고 오른쪽 조각을 $4$ 초과부터 덮도록 $2\le -a\le 4$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-4\le a\le -2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/221-477.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫 부등식의 두 근 $(2, 4)$ 와 둘째의 고정 근 $6$ 을 바꿀 수 있다. 제약: 첫 부등식이 바깥 부등호($>$)여서 해가 두 조각이어야 「왼쪽 조각과 겹치지 않기」 조건이 살아나고, 고정 근이 오른쪽 조각 안에 있어야 오른쪽 끝이 닫힌다. 답이 폐구간으로 떨어지려면 두 경계 모두 등호가 허용되는 배치여야 한다.'
    creative: '(1) 목표 해를 $4<x\le 6$ 대신 두 조각($x<2$ 쪽도 포함)으로 주면 $-a$ 위치가 반대편으로 옮겨 가 분기 발생 → ★3 (2) 「해가 오직 정수 $5, 6$ 뿐」으로 바꾸면 정수해 골조(478 유형)로 이동 → ★3 (3) 둘째 부등식을 $\ge$ 로 뒤집어 해가 바깥 두 조각이 되게 하면 교집합 계산이 합집합 판정으로 바뀌어 ★3.'
```

```yaml
- id: GN-CM1-221-478
  page: 221
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    연립부등식 $x^2-x-6>0$, $2x^2-(2a+3)x+3a<0$ 을 만족시키는 정수 $x$ 가 $4$ 뿐일 때 실수 $a$ 의 값의 범위.
  category: '정수해가 지정된 연립이차부등식 → 매개변수 근의 위치를 정수 사이로 가두기'
  M: {s: 2, k: 1, a: 2, t: 3}
  M_total: 8
  insights:
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$(2x-3)(x-a)<0$ 의 해가 근 $\dfrac{3}{2}$ 와 $a$ 의 대소로 갈려 두 갈래를 모두 따진 뒤 정수 $4$ 를 담을 수 있는 갈래만 남김'
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「정수해가 4 뿐」이라는 결과에서 교집합 $3<x<a$ 의 오른쪽 끝이 $4$ 와 $5$ 사이(5 는 제외)에 놓이도록 $a$ 를 역추적'
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: '연립이차부등식의 정수해 조건과 미정계수의 범위'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    첫 해 $x<-2$ 또는 $x>3$. 둘째는 $(2x-3)(x-a)<0$ 이므로 $a>\dfrac{3}{2}$ 갈래에서만 교집합이
    $3<x<a$ 로 오른쪽에 생긴다(반대 갈래는 정수 4 를 담을 수 없어 탈락). 정수 4 만 들어가려면
    $4<a$ 이고 $5$ 는 제외라 $a\le 5$ — 부등호가 열려 있어 $a=5$ 가 허용된다는 경계 판정이 핵심.
    통찰 2개·확인체크 출발 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: '첫 해 두 조각 → $(2x-3)(x-a)<0$ 의 근 대소 분기 → 교집합 $3<x<a$ → 정수 $4$ 만 포함되도록 $4<a\le 5$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4<a\le 5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/221-478.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '지정 정수(여기서는 4)와 첫 부등식의 근 $(-2, 3)$, 둘째의 고정 근 $\dfrac{3}{2}$ 를 바꿀 수 있다. 제약: 고정 근이 첫 해의 두 조각 사이(빈 구간)에 있어야 교집합이 한쪽에만 생기고, 지정 정수는 교집합의 왼쪽 끝 바로 다음 정수여야 답이 「정수 하나 구간」으로 깔끔하게 떨어진다. 둘째 부등식의 부등호가 열림/닫힘이면 답의 등호 방향이 통째로 뒤집힌다.'
    creative: '(1) 「정수 $x$ 가 2개」로 바꾸면 같은 골조에서 구간만 한 칸 길어짐(★3 유지) (2) 지정 정수를 왼쪽 조각 쪽(예: $-3$)에 두면 $a<\dfrac{3}{2}$ 갈래가 살아나 분기가 뒤집힘 → ★3 (3) 「정수해가 존재하지 않도록」으로 바꾸면 485 처럼 양쪽 갈래를 모두 처리해야 해 ★4.'
```

```yaml
- id: GN-CM1-221-479
  page: 221
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    연립부등식 $x^2+2x-3>0$, $x^2+(a-1)x-a<0$ 이 해를 갖도록 하는 실수 $a$ 의 값의 범위.
  category: '연립이차부등식이 해를 가질 조건 → 매개변수 근의 두 갈래를 모두 검사'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$(x+a)(x-1)<0$ 의 해가 $-a$ 와 $1$ 의 대소로 갈리고, 두 갈래가 각각 첫 해의 왼쪽 조각·오른쪽 조각과 만나 답의 두 구간을 따로 만든다'
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「해가 존재」라는 결과 조건을 각 갈래에서 「두 구간이 겹칠 조건」(공집합이 아닐 조건)으로 역추적'
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: '연립이차부등식이 해를 가질 조건'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    첫 해 $x<-3$ 또는 $x>1$. 둘째 $(x+a)(x-1)<0$ 은 $-a<1$ 이면 $-a<x<1$, $-a>1$ 이면 $1<x<-a$,
    $-a=1$ 이면 공집합. 앞 갈래는 왼쪽 조각과 겹치려면 $-a<-3$, 뒤 갈래는 오른쪽 조각과 항상 겹친다.
    두 갈래가 각각 답의 한 구간을 만들어 결과가 합집합 꼴이 되는 점이 이 문항의 골조.
    통찰 2개·확인체크 출발 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: '첫 해 두 조각 → $(x+a)(x-1)<0$ 의 근 대소 세 갈래 → 각 갈래에서 교집합이 공집합이 아닐 조건 → $a<-1$ 또는 $a>3$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$a<-1$ 또는 $a>3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/221-479.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫 부등식의 근 $(-3, 1)$ 과 둘째의 고정 근 $1$ 을 바꿀 수 있다. 제약: 둘째의 고정 근이 첫 해의 경계와 일치해야 「한 갈래는 항상 해를 가진다」는 비대칭이 생겨 답이 두 구간으로 갈린다. 고정 근을 첫 해의 빈 구간 안쪽으로 옮기면 두 갈래 모두 조건식이 생겨 답 모양이 달라진다.'
    creative: '(1) 「해를 갖지 않도록」으로 뒤집으면 여집합 처리 + 경계 등호 재검토 → ★3~4 (2) 「해가 한 구간뿐이도록」으로 바꾸면 갈래 하나를 기각해야 해서 I-VF 추가 → ★4 (3) 둘째를 $x^2+(a-1)x-a\le 0$ 으로 닫으면 $-a=1$ 일 때 해가 한 점이 되어 경계 판정이 답에 반영됨 → ★3.'
```

```yaml
- id: GN-CM1-222-e22
  page: 222
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    $3x^2+4kx+3=0$ 은 허근을 갖고 $x^2-kx+k=0$ 은 실근을 갖도록 하는 실수 $k$ 의 값의 범위.
  category: '두 이차방정식의 판별식 조건을 각각 부등식으로 → 교집합'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '판별식 조건 두 개의 연립(근의 판별과 이차부등식)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    허근 → $D<0$, 실근 → $D\ge 0$ 으로 옮기고 각각을 $k$ 에 대한 이차부등식으로 푼 뒤 교집합.
    판별식 사용은 표준 공식 적용이라 통찰로 세지 않았다. 함정은 「실근」에 중근이 포함되어
    등호가 살아 있는 것(T-경계)과 $D/4$ 를 쓸 때의 계수 처리(T-부호). 필수 예제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: '허근 $\Rightarrow D_1<0$ · 실근 $\Rightarrow D_2\ge 0$ → 각각 $k$ 의 이차부등식 → 교집합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{3}{2}<k\le 0$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/222-e22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 방정식의 계수를 바꿔 판별식이 $k$ 의 인수분해 가능한 이차식이 되게 한다. 제약: 한쪽 판별식은 완전제곱수 판별이 필요 없는 형태여야 하고, 두 해 구간이 실제로 겹쳐 답이 공집합이 아니어야 한다. 「실근/허근」과 등호 유무가 답 구간의 열림·닫힘을 그대로 결정한다.'
    creative: '(1) 한쪽을 「중근」으로 바꾸면 등식 하나로 $k$ 가 확정되고 다른 조건은 검증용이 되어 I-VF 발생 → ★3 (2) 「서로 다른 두 실근」 vs 「실근」의 차이를 답이 가르도록 설계하면 T-경계 강화(★2 유지) (3) 486 처럼 「적어도 하나가 실근」으로 바꾸면 여사건 전략 선택이 생겨 ★3.'
```

```yaml
- id: GN-CM1-222-e23
  page: 222
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    세 수 $x-1$, $x$, $x+1$ 이 둔각삼각형의 세 변의 길이가 되도록 하는 실수 $x$ 의 값의 범위.
  category: '도형 조건(변의 양수·삼각형 성립·둔각)을 부등식 세 개로 옮겨 교집합'
  M: {s: 2, k: 1, a: 2, t: 3}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '발문에 없는 숨은 조건(가장 짧은 변 $x-1>0$, 삼각형 성립 조건 $(x-1)+x>x+1$)을 스스로 세워야 함'
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「둔각」이라는 기하 조건을 최대변 $x+1$ 의 대각 기준 $(x+1)^2>(x-1)^2+x^2$ 라는 대수 부등식으로 전환'
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: '연립이차부등식의 활용 — 삼각형의 성립 조건과 둔각 조건'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 변이 연속한 수라 최대변이 $x+1$ 로 고정되는 것을 먼저 읽어야 둔각 조건을 세울 수 있다.
    숨은 조건 두 개(양수·삼각형 성립)를 빠뜨리면 $x^2-4x<0$ 의 왼쪽 끝 $0$ 이 그대로 답에 섞여 틀린다.
    기하 → 대수 전환과 숨은 조건 발굴로 통찰 2개, 필수 예제 출발 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: '최대변 $x+1$ 특정 → 양수·삼각형 성립 조건으로 $x>2$ → 둔각 조건 $(x+1)^2>(x-1)^2+x^2$ 로 $0<x<4$ → 교집합'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2<x<4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/222-e23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 변을 $x-2, x, x+2$ 나 $x, x+1, x+3$ 처럼 간격을 바꿔 줄 수 있다. 제약: 세 변의 대소 순서가 $x$ 의 값과 무관하게 고정되어야 최대변을 특정할 수 있고, 삼각형 성립 조건에서 나오는 하한이 둔각 조건의 상한보다 작아야 답이 비지 않는다. 변 길이 양수 조건을 삼각형 성립 조건이 흡수하는지 매번 확인한다.'
    creative: '(1) 「둔각」을 「예각삼각형」으로 바꾸면 최대변 조건이 $(x+1)^2<(x-1)^2+x^2$ 로 뒤집혀 답 구간이 이동(★3 유지) (2) 「직각삼각형」이면 등식 하나로 $x$ 가 확정되고 삼각형 성립은 검증용이 되어 ★2 (3) 최대변이 어느 것인지 $x$ 에 따라 바뀌는 세 변(예: $x, 3-x, 4$)을 주면 케이스 분기가 붙어 I-MI 추가 → ★4.'
```

```yaml
- id: GN-CM1-222-480
  page: 222
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $x^2+ax+a^2-3=0$ 은 서로 다른 두 실근을 갖고 $x^2+ax+a=0$ 은 허근을 갖도록 하는 실수 $a$ 의 값의 범위.
  category: '두 이차방정식의 판별식 조건을 각각 부등식으로 → 교집합'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '판별식 조건 두 개의 연립(근의 판별과 이차부등식)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e22 와 같은 골조의 유제. 「서로 다른 두 실근」 → $D_1>0$ 은 등호가 없고 「허근」 → $D_2<0$ 이라
    답이 양 끝 모두 열린 구간으로 떨어진다. 판별식이 둘 다 $a$ 의 이차식이 되는 것만 다르다.
    통찰 0·M_total 7 → 확인체크 유제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: '서로 다른 두 실근 $\Rightarrow D_1>0$ · 허근 $\Rightarrow D_2<0$ → 각각 $a$ 의 이차부등식 → 교집합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0<a<2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/222-480.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$a^2-3$ 의 상수 3 과 둘째 방정식의 상수항을 바꿀 수 있다. 제약: 첫 판별식이 $a$ 에 대해 음의 계수 이차식($-3a^2+12$ 꼴)이 되면 부등호 방향이 한 번 뒤집히므로 그 함정을 유지할지 결정하고 계수를 잡는다. 두 구간이 겹쳐 답이 존재해야 한다.'
    creative: '(1) 한쪽을 「중근」으로 바꿔 $a$ 를 확정한 뒤 나머지 조건으로 걸러내면 I-VF → ★3 (2) 두 방정식이 공통근을 갖도록 하는 조건으로 바꾸면 단원이 이동(I-XU) → ★4 (3) 세 방정식으로 늘리면 Mₛ 만 오르고 통찰은 그대로라 ★2 유지(질 저하 주의).'
```

```yaml
- id: GN-CM1-222-481
  page: 222
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    둘레 $30\,\mathrm{m}$, 세로가 가로보다 긴 직사각형 꽃밭의 넓이가 $36\,\mathrm{m}^2$ 이상 $50\,\mathrm{m}^2$ 이하가 되도록 할 때 가로의 길이의 범위.
  category: '둘레로 세로를 가로로 표현 → 넓이 범위를 연립이차부등식으로'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '연립이차부등식의 활용 — 넓이·둘레 조건'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    가로를 $x$ 로 두면 둘레에서 세로 $15-x$ 가 바로 나오고, 넓이 $x(15-x)$ 에 두 부등호를 걸면
    이차부등식 두 개의 연립. 「세로 > 가로」와 변의 양수 조건은 숨은 제약이지만 이 수치에서는
    답 구간을 좁히지 않아 통찰로 세지 않았다(그래도 Mₜ 에 T-범위로 반영). 확인체크 활용 ★2 유지.
  tier: star_2
  mechanism_primary: '가로 $x$ · 세로 $15-x$ → $36\le x(15-x)\le 50$ 을 두 이차부등식으로 → 교집합 → $0<x<\dfrac{15}{2}$ 로 거르기'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3\,\mathrm{m}$ 이상 $5\,\mathrm{m}$ 이하'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/222-481.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '둘레 30 과 넓이 하한·상한 36, 50 을 바꿀 수 있다. 제약: 넓이 상·하한이 모두 $x(15-x)$ 의 최댓값 $\dfrac{225}{4}$ 이하여야 하고, 두 부등식의 근이 유리수가 되도록 판별식이 완전제곱이 되게 잡는다. 상한 쪽 부등식은 해가 두 조각(바깥)으로 나오므로 「세로>가로」 제약이 어느 조각을 지우는지 확인한다.'
    creative: '(1) 넓이 상한을 키워 「세로>가로」 제약이 실제로 한 조각을 잘라내게 하면 I-VF 발생 → ★3 (2) 둘레 대신 「대각선 길이」를 주면 피타고라스가 끼어 Mₛ 상승 → ★3 (3) 「가로가 될 수 있는 정수의 개수」로 물으면 484 처럼 정수 세기가 붙어 ★3.'
```

### 연습문제 STEP 1

```yaml
- id: GN-CM1-223-482
  page: 223
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    연립부등식 $x^2\le x+6$, $x^2+4x\ge 5$ 의 해가 이차부등식 $ax^2+bx-1\ge 0$ 의 해와 같을 때 $a+b$ 의 값.
  category: '연립부등식의 해 구간 → 그 구간을 해로 갖는 이차부등식의 계수 역산'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '해가 닫힌 구간 하나라는 결과에서 $ax^2+bx-1\ge 0$ 의 최고차항 부호가 $a<0$ 이어야 함을 먼저 잡고 $a(x-1)(x-3)$ 꼴로 계수를 역추적'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '해가 주어진 이차부등식에서 계수 구하기(연립부등식의 해 이용)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞부분은 표준 연립(해 $1\le x\le 3$). 핵심은 뒷부분으로, 해가 유계 폐구간이려면 $\ge$ 부등식의
    $a$ 가 음수여야 한다는 부호 판정(T-부호)이다. $ax^2+bx-1=a(x-1)(x-3)$ 에서 상수항 $3a=-1$ 로
    $a$ 가 확정되는 경로를 보면 계수 비교가 한 줄. 통찰 1개(BW d2)·STEP 1 출발 ★2 → ★2 유지.
  tier: star_2
  mechanism_primary: '두 이차부등식 교집합으로 해 $1\le x\le 3$ → $ax^2+bx-1=a(x-1)(x-3)$, $a<0$ → 상수항 비교로 $a$, $b$ → $a+b$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/223-482.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 이차부등식의 근을 바꿔 교집합이 다른 폐구간이 되게 한다. 제약: 뒤 이차부등식의 상수항이 $-1$ 로 고정돼 있으므로 두 근의 곱이 $a$ 를 유리수로 만들어야 하고, 교집합이 반드시 유계 폐구간이어야 $a<0$ 골조가 유지된다. 부등호를 $>$ 로 바꾸면 해가 열린 구간이 되어 원래 연립의 등호와 어긋난다.'
    creative: '(1) 해가 두 조각(바깥)인 연립을 주면 $a>0$ 갈래로 뒤집혀 같은 골조·부호만 반대(★2) (2) 상수항을 $-1$ 대신 미정 $c$ 로 두고 $a+b+c$ 를 물으면 정보 부족 → 조건 하나를 더 줘야 해 Mₐ 상승 ★3 (3) 「해가 존재하지 않을 조건」으로 바꾸면 판별식이 끼어 ★3.'
```

```yaml
- id: GN-CM1-223-483
  page: 223
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    연립부등식 $x^2-3x-10\le 0$, $(x-2)(x-a)>0$ 의 해가 $2<x\le 5$ 일 때 실수 $a$ 의 최댓값.
  category: '해가 주어진 연립이차부등식 → 매개변수 근의 범위 역추적 후 경계값 검증'
  M: {s: 2, k: 1, a: 2, t: 3}
  M_total: 8
  insights:
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '해가 $2<x\le 5$ 한 조각뿐이라는 결과에서 $(x-2)(x-a)>0$ 의 왼쪽 조각이 $[-2, 5]$ 와 만나지 않아야 함을 역추적'
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「최댓값」이 $a=-2$ 인지 그 미만인지가 경계 재대입으로 갈림 — $a=-2$ 일 때 해 $x<-2$ 가 $-2$ 를 포함하지 않아 조건을 만족함을 확인해야 함'
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: '해가 주어진 연립이차부등식에서 미정계수의 최댓값'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    첫 해 $-2\le x\le 5$ 는 고정. $(x-2)(x-a)>0$ 은 바깥 부등호라 해가 두 조각이고, 오른쪽 조각이
    $2<x\le 5$ 를 만들려면 $a<2$ 갈래여야 하며 왼쪽 조각 $x<a$ 가 $[-2,5]$ 와 겹치지 않아야 한다.
    $a=-2$ 경계가 부등호 열림 덕에 살아남는다는 검증이 「최댓값」 물음의 핵심.
    통찰 2개·STEP 1 출발 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: '첫 해 $-2\le x\le 5$ → $(x-2)(x-a)>0$ 의 두 조각 중 왼쪽 조각이 겹치지 않도록 $a\le -2$ → 경계 $a=-2$ 검증 → 최댓값 $-2$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/223-483.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫 부등식의 두 근 $(-2, 5)$ 와 둘째의 고정 근 $2$ 를 바꿀 수 있다. 제약: 고정 근이 첫 해의 내부에 있어야 오른쪽 조각이 목표 구간을 만들고, 최댓값이 깔끔한 경계로 떨어지려면 목표 구간의 왼쪽 끝이 첫 해의 왼쪽 끝과 부등호 방향이 맞물려야 한다. 둘째 부등식을 $\ge$ 로 닫으면 경계 $a=-2$ 가 탈락해 최댓값이 사라진다.'
    creative: '(1) 「최솟값」을 묻는 배치로 뒤집어 오른쪽 조각을 제약하면 같은 골조 반대 방향(★3) (2) 「$a$ 의 값의 범위」로 바꾸면 경계 검증 비중이 줄어 ★2 (3) 목표 해를 두 조각으로 주면 $a>2$ 갈래도 살아나 I-MI 추가 → ★4.'
```

```yaml
- id: GN-CM1-223-484
  page: 223
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    빗변이 아닌 두 변의 길이가 $x-4$, $x-10$ 인 직각삼각형의 넓이가 $36$ 이하이고 빗변의 길이가 $2\sqrt{17}$ 이상일 때 정수 $x$ 의 개수.
  category: '도형 조건(넓이·빗변·변의 양수)을 연립이차부등식으로 → 정수해 세기'
  M: {s: 3, k: 2, a: 1, t: 3}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '넓이 $\dfrac{1}{2}(x-4)(x-10)\le 36$ 과 피타고라스 $(x-4)^2+(x-10)^2\ge 68$ 로 기하 조건을 이차부등식으로 전환'
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '빗변 조건에서 나온 두 갈래 중 $x\le 2$ 갈래가 변의 길이 양수 조건 $x>10$ 에 걸려 기각되어야 정수 개수가 맞음'
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: '연립이차부등식의 활용 — 직각삼각형 넓이·빗변 조건과 정수해의 개수'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    변의 길이가 양수라는 숨은 조건 $x>10$ 을 세우지 않으면 빗변 부등식이 주는 왼쪽 갈래가 그대로
    남아 정수 개수가 크게 틀어진다. 넓이 쪽은 위쪽 경계, 빗변 쪽은 아래쪽 경계를 주어 답이
    닫힌 정수 구간으로 떨어지는 구조. 통찰 2개(RT d1 · VF d2)·STEP 1 출발 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: '변 양수로 $x>10$ → 넓이 조건 $\Rightarrow$ 위 경계 · 빗변 조건 $\Rightarrow$ 두 갈래 → 양수 조건으로 한 갈래 기각 → 남은 폐구간의 정수 개수'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/223-484.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 변 $x-4$, $x-10$ 의 상수와 넓이 상한 36, 빗변 하한 $2\sqrt{17}$ 을 바꿀 수 있다. 제약: 빗변 하한은 제곱했을 때 두 제곱합과 정수 계수로 맞아떨어지는 값이어야 하고(여기선 $68$), 넓이 부등식과 빗변 부등식의 근이 정수여야 개수 세기가 깔끔하다. 양수 조건 $x>10$ 이 실제로 한 갈래를 잘라내는 배치를 유지해야 이 문항의 함정이 살아난다.'
    creative: '(1) 「예각/둔각삼각형」으로 바꾸면 빗변 조건이 부등호 하나로 바뀌고 삼각형 성립 조건이 추가돼 ★3 유지 (2) 「정수 $x$ 의 개수」 대신 「$x$ 의 최댓값」이면 경계 검증만 남아 ★2 (3) 두 변을 $x$, $k-x$ 처럼 합이 고정된 꼴로 주면 넓이가 위로 볼록해져 판별식 사고가 붙고 ★4.'
```

### 연습문제 STEP 2

```yaml
- id: GN-CM1-223-485
  page: 223
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    $a>2$ 일 때 연립부등식 $x^2-(a^2-3)x-3a^2<0$, $x^2+(a-9)x-9a>0$ 을 만족시키는 정수 $x$ 가 존재하지 않기 위한 실수 $a$ 의 최댓값 $M$ 에 대하여 $M^2$ 의 값.
  category: '정수해 부존재 조건 → 매개변수 크기에 따른 교집합 조각 분기와 경계 검증'
  M: {s: 3, k: 2, a: 3, t: 3}
  M_total: 11
  insights:
    - step: 2
      type: I-MI
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: '$(x-a^2)(x+3)<0$ 과 $(x+a)(x-9)>0$ 의 교집합이 $a$ 와 $3$ 의 대소에 따라 왼쪽 조각 $(-3,-a)$ 와 오른쪽 조각 $(9, a^2)$ 으로 갈려 두 갈래를 모두 따져야 함'
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「정수 $x$ 가 존재하지 않는다」는 결과에서 각 조각이 정수를 하나도 품지 않을 폭 조건을 $a$ 에 대해 역추적'
    - step: 4
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$2<a\le 3$ 갈래는 조건을 항상 만족해 최댓값을 주지 못하고, $a>3$ 갈래에서 $a^2\le 10$ 경계가 등호까지 유효한지 재대입 검증해야 $M^2$ 이 확정'
  insight_count: 3
  depth_score: 7.00
  type_id: null
  type_hint: '정수해가 존재하지 않을 조건과 미정계수의 최댓값(기출형)'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 부등식 모두 인수분해되지만 근 $-3$, $a^2$, $-a$, $9$ 의 대소가 $a$ 크기에 따라 재배열되어
    교집합이 좌우 두 조각 중 어느 쪽으로 생기는지가 갈린다. 작은 $a$ 갈래는 폭이 $1$ 미만이라
    조건을 자동 충족하므로 최댓값은 오른쪽 조각 $(9, a^2)$ 이 정수 $10$ 을 품지 않는 경계에서 나온다.
    분기 깊이 3 + 부존재 역추적 + 경계 검증으로 통찰 3개, STEP 2 출발 ★3 에서 +1 → ★4.
  tier: star_4
  mechanism_primary: '$(x-a^2)(x+3)<0$ · $(x+a)(x-9)>0$ → $a$ 와 $3$ 의 대소로 교집합 조각 분기 → 각 조각이 정수를 안 품을 조건 → $a^2\le 10$ 에서 $M^2=10$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/223-485.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '고정 근 $-3$ 과 $9$, 그리고 매개변수 근 $a^2$, $-a$ 의 조합을 바꿀 수 있다. 제약: $a>2$ 라는 전제 때문에 $-a<-2$ 가 보장되어 왼쪽 조각의 폭이 $1$ 미만으로 묶이는 것이 이 설계의 핵심이므로, 전제 범위를 바꾸면 그 갈래가 살아나 답이 완전히 달라진다. 최댓값이 무리수($\sqrt{10}$)로 나오게 하려면 묻는 값을 $M^2$ 으로 둬야 한다.'
    creative: '(1) 「정수 $x$ 가 오직 하나 존재」로 바꾸면 조각 폭 조건이 양쪽 부등식으로 늘어 ★4 유지 (2) 매개변수를 $a^2$ 대신 $a$ 로 낮추면 분기가 단순해져 ★3 (3) 전제 $a>2$ 를 없애고 「모든 실수 $a$」로 열면 왼쪽 조각 갈래까지 살아나 케이스가 배가되어 ★5 후보(단, 통찰 조합의 참신도 확보 필요).'
```

```yaml
- id: GN-CM1-223-486
  page: 223
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    두 이차방정식 $x^2+2ax+a+2=0$, $x^2+(a-1)x+a^2=0$ 중 적어도 하나가 실근을 가질 때 실수 $a$ 의 값의 범위.
  category: '「적어도 하나」 조건 → 여사건(둘 다 허근)의 여집합으로 판별식 연립'
  M: {s: 2, k: 2, a: 2, t: 3}
  M_total: 9
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '두 판별식 조건을 직접 합집합으로 처리할지, 여사건 「둘 다 허근」의 교집합을 구해 여집합을 취할지 전략을 고르는 갈래 — 여사건 쪽이 계산이 짧고 경계 실수가 적음'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '「적어도 하나가 실근」 조건과 판별식(여사건 활용)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 판별식이 각각 $a$ 의 이차부등식이고, 「적어도 하나」는 합집합이라 여사건(둘 다 $D<0$)의
    교집합을 구한 뒤 뒤집는 쪽이 짧다. 여집합을 취할 때 부등호의 열림·닫힘이 그대로 뒤집히는
    경계 처리(T-경계)가 최대 함정이며, 둘째 판별식은 인수분해 시 $-$ 부호가 한 번 끼어 방향이 뒤집힌다.
    전략 선택 통찰 1개(SC d2)·STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: '여사건 「둘 다 허근」 $\Rightarrow D_1<0$ 이고 $D_2<0$ → 교집합 $\dfrac{1}{3}<a<2$ → 여집합으로 뒤집기'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$a\le \dfrac{1}{3}$ 또는 $a\ge 2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/223-486.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 방정식의 계수를 바꾸되 판별식이 $a$ 의 인수분해 가능한 이차식이 되게 한다. 제약: 여사건의 교집합이 유계 구간 하나로 나와야 여집합이 두 조각으로 깔끔하게 떨어지고, 두 판별식의 근이 유리수여야 한다. 「적어도 하나」를 유지하려면 두 조건이 서로 포함관계가 아니어야 한다.'
    creative: '(1) 「둘 다 실근」으로 바꾸면 여사건 전략이 필요 없어져 절차형 ★2 (2) 「오직 하나만 실근」으로 바꾸면 대칭차집합이라 갈래를 둘 다 따지고 일부를 기각해야 해 I-VF 추가 → ★4 (3) 세 방정식으로 늘리고 「적어도 하나」를 유지하면 여사건의 위력이 커져 I-SC 가 강해짐 → ★4.'
```

### 연습문제 실력 UP

```yaml
- id: GN-CM1-223-487
  page: 223
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    연립부등식 $x^2-5x-6\ge 0$, $x^2-(1-a)x-a<0$ 을 만족시키는 정수 $x$ 의 개수가 $3$ 이 되도록 하는 실수 $a$ 의 값의 범위.
  category: '정수해 개수 조건 → 매개변수 근이 고정 근의 좌·우 어느 쪽인가로 두 갈래 답'
  M: {s: 3, k: 1, a: 3, t: 3}
  M_total: 10
  insights:
    - step: 2
      type: I-MI
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: '$(x+a)(x-1)<0$ 의 근 $-a$ 가 $1$ 의 오른쪽이냐 왼쪽이냐에 따라 교집합이 $[6, -a)$ 와 $(-a, -1]$ 로 완전히 다른 조각이 되고 두 갈래가 각각 답의 한 구간을 만든다'
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「정수 $x$ 의 개수가 3」이라는 결과에서 각 조각이 정확히 정수 3개를 품도록 끝점 $-a$ 가 놓일 인접 정수 사이 구간을 역추적'
  insight_count: 2
  depth_score: 5.00
  type_id: null
  type_hint: '정수해의 개수 조건과 미정계수의 범위(두 갈래 답)'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    첫 해 $x\le -1$ 또는 $x\ge 6$ 이 두 조각이라, 둘째의 움직이는 근 $-a$ 가 어느 쪽에 걸리느냐로
    교집합이 오른쪽($6,7,8$)이 되기도 하고 왼쪽($-1,-2,-3$)이 되기도 한다. 두 갈래에서 끝점의
    열림·닫힘이 서로 반대라 등호 방향이 구간마다 뒤집히는 것이 최대 함정(T-경계).
    두 갈래 모두 답에 기여하므로 I-MI d3, 개수 역추적으로 I-BW d2. 실력 UP 출발 ★4 유지.
  tier: star_4
  mechanism_primary: '첫 해 두 조각 → $(x+a)(x-1)<0$ 의 근 $-a$ 와 $1$ 의 대소로 두 갈래 → 각 갈래에서 정수 3개를 품을 끝점 위치 → 답 두 구간'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$-9\le a<-8$ 또는 $3<a\le 4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/223-487.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫 부등식의 근 $(-1, 6)$, 둘째의 고정 근 $1$, 그리고 정수 개수 3 을 바꿀 수 있다. 제약: 고정 근이 첫 해의 빈 구간 $(-1, 6)$ 안에 있어야 두 갈래가 모두 살아나 답이 두 구간으로 나오고, 개수를 바꾸면 양쪽 답 구간이 정수 한 칸씩 평행이동한다. 첫 부등식의 등호(닫힘)와 둘째의 열림이 맞물려 한쪽은 $-9\le a<-8$, 다른 쪽은 $3<a\le 4$ 처럼 등호가 반대로 붙는 구조를 깨뜨리지 않는다.'
    creative: '(1) 「정수 $x$ 의 개수가 3 이하」로 바꾸면 각 갈래가 부등식 하나로 느슨해져 ★3 (2) 고정 근을 첫 해 구간 안쪽으로 옮기면 한 갈래가 죽어 답이 한 구간 → ★3 (3) 정수 개수 대신 「정수해의 합이 15」로 바꾸면 개수 세기 위에 합 조건이 얹혀 I-VF 추가 → ★5 후보(참신도 확보 시).'
```

## 표본 판정 요약 (16문)

- ★ 분포: ★1 0 · ★2 8 · ★3 6 · ★4 2 · ★5 0
- 통찰형 11 · 절차형 5 · premium 0
- 통찰 유형 분포: I-BW 8 · I-MI 4 · I-VF 3 · I-EQV 1 · I-RT 2 · I-SC 1 (총 19 라벨 / 11문)
- type_hint 상위 5: 「해가 주어진 연립이차부등식에서 미정계수의 범위」 3 · 「연립이차부등식의 풀이(교집합 · A<B<C 꼴 · 절댓값 포함)」 2 · 「판별식 조건 두 개의 연립」 2 · 「정수해 조건과 미정계수의 범위」 2 · 「연립이차부등식의 활용」 2
- M_total 분포: 7 이 7문 · 8 이 5문 · 9 가 2문 · 10~11 이 2문(485·487)
- 그림: 0문 (이 범위에 figure 문항 없음)
- 대상층: 중하위권 5 · 중위권 3 · 중상위권 6 · 상위권 2

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| (없음) | 이 범위에서 벤더 신호와 2단 이상 어긋난 문항은 없었다 | - |

판정 메모 두 가지를 남긴다.

1. 이 단원의 「확인체크」는 「개념원리 익히기」 구역이 아니라 「필수·발전 예제」 구역 안에서 필수 예제 뒤에 붙는 유제라, 지시서의 「확인체크 → ★1 출발」을 그대로 쓰지 않고 짝이 되는 필수 예제와 같은 ★2 를 출발점으로 삼았다. 478·479 는 정수해·해 존재 조건이 얹혀 +1 한 ★3 이다.
2. 485 는 통찰 3개에 I-VF 를 포함해 ★5 의 저노출 유형 요건은 만족하지만, 통찰 조합(분기 + 정수 부존재 + 경계 검증)이 기출에 흔해 `novelty_score` 를 0 으로 두었고 따라서 ★4 에 머문다.

## 카탈로그 차원 메모

나중에 공통수학1 유형 카탈로그를 만들 때 참고할 이 범위의 관찰이다.

- **따로 세워야 할 유형**: ⑴ 「연립이차부등식의 기본 풀이」(e20·476) — 절댓값과 $A<B<C$ 꼴을 하위 변형으로 묶으면 충분. ⑵ 「해가 주어진 연립이차부등식의 미정계수」(e21·477·483) — 고정 근 하나 + 움직이는 근 하나가 공통 골조이고, 목표 해가 한 조각이냐 두 조각이냐로 난이도가 갈린다. ⑶ 「정수해 개수·부존재 조건」(478·485·487) — 이 단원 ★3~4 의 주축이며 「끝점을 인접 정수 사이에 가두기」가 단일 메커니즘이다. ⑷ 「판별식 조건의 연립」(e22·480·486) — 근의 판별 단원과 경계가 겹치므로 카탈로그에서 어느 쪽에 둘지 결정 필요. ⑸ 「도형 활용」(e23·481·484).
- **통합해도 될 유형**: 「해를 가질 조건」(479)과 「정수해 부존재 조건」(485)은 겉보기 물음이 달라도 「교집합이 비었는가 / 정수를 품었는가」라는 같은 판정이라 한 유형의 두 난이도 슬롯으로 묶을 수 있다. 「연립이차부등식의 활용」 안에서 삼각형(e23·484)과 넓이·둘레(481)는 세우는 부등식의 개수만 다르므로 하위 태그로 충분하다.
- **base ★ 제안**: 기본 풀이 ★2 · 해가 주어진 미정계수 ★2(두 조각 목표면 ★3) · 정수해 조건 ★3(부존재·개수 지정이면 ★4) · 판별식 연립 ★2(「적어도 하나」면 ★3) · 도형 활용 ★3.
- **감쇠 후보**: 이 단원에서 I-BW(해 조건 → 매개변수 역추적)는 8문에 등장해 사실상 단원의 학습 자산이다. 카탈로그 작성 시 `decayed_types[CM1-IQ]` 상위 3유형에 I-BW·I-MI 를 넣고 depth 3 자동 강등을 적용할지 검토한다.
