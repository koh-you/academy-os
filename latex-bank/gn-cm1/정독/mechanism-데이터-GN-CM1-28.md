---
name: mechanism-데이터-GN-CM1-28
description: 개념원리 공통수학1 28 이차방정식의 실근의 조건(1/1 · 226~229쪽 18문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1(22개정) · 전사본 latex-bank/gn-cm1
  section: 28 이차방정식의 실근의 조건
  unit_code: "28"
  part: "1/1"
  extract_range: "226~229쪽 · 226-e24~229-502"
  total_problems: 18
  unit_total: 18
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (crops.json)
---

# 개념원리 공통수학1 · 28 이차방정식의 실근의 조건 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학1 226~229쪽 28단원 「이차방정식의 실근의 조건」 전 18문항(필수 예제 3 · 확인체크 8 · 연습문제 STEP 1 3 · STEP 2 3 · 실력 UP 1)을 다룬다. 절은 전사본의 group section 순서대로 「필수·발전 예제」 → 「연습문제 STEP 1」 → 「연습문제 STEP 2」 → 「연습문제 실력 UP」 네 개다. 개념원리 고등의 난이도 신호는 구역과 예제 태그다 — 「필수」 예제와 그 뒤에 붙는 「확인체크」는 ★2 출발, STEP 1 은 ★2, STEP 2 는 ★3, 실력 UP 은 ★4 출발이며 여기서 M_total 과 통찰로 ±1 조정했다.

이 단원의 골조는 딱 두 벌이다. ⑴ **실근의 부호** — 판별식 · 두 근의 합의 부호 · 두 근의 곱의 부호 세 조건의 교집합(부호가 다를 때는 곱<0 하나로 끝나고 판별식은 자동). ⑵ **실근의 위치** — 이차함수 그래프로 옮겨 판별식 · 기준점에서의 함숫값 부호 · 축의 위치를 조합. 둘 다 교과서가 상자로 주는 정형 조건이라 그 자체를 통찰로 세지 않았고, 「절댓값이 같고 부호가 다르다」 · 「음수인 근의 절댓값이 더 크다」 · 「다른 방정식의 근보다 작다」 · 「적어도 한 근이 구간 안」처럼 **말로 준 조건을 학생이 직접 동치 조건으로 옮겨야 하는 문항에서만** I-EQV · I-RT · I-MI · I-VF 를 라벨했다. 함정은 거의 전부 T-경계(등호 포함 여부 · 중근 허용)와 T-부호(이차항 계수의 부호 · 부등식 양변을 음수로 나누기)에 몰려 있다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다. 그림 문항은 없다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM1-226-e24
  page: 226
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    이차방정식 $x^2-2(k+1)x+k+3=0$ 에 대해 ⑴ 두 근이 모두 양수 ⑵ 두 근이 모두 음수 ⑶ 두 근이 서로 다른 부호일 때의 실수 $k$ 의 값의 범위.
  category: "실근의 부호 → 판별식·두 근의 합·곱의 부호 세 조건의 교집합"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식의 실근의 부호(판별식·합·곱)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴⑵ 는 판별식 ≥0 · 합의 부호 · 곱의 부호 세 조건을 세워 교집합을 잡는 교과서 골조이고, ⑶ 은 곱<0 하나로 끝난다(이때 D>0 은 자동). 소문항이 셋이라 단계·계산량은 늘지만 도구는 단원 정의 그대로라 통찰 0. 필수 예제 ★2 출발 유지.
  tier: star_2
  mechanism_primary: "두 근의 부호 조건 → D·합·곱의 부호 세 조건 → 부등식 교집합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $k\ge 1$ ⑵ $-3<k\le -2$ ⑶ $k<-3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/226-e24.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '일차항의 $-2(k+1)$ 안의 1 과 상수항 $k+3$ 의 3 을 바꿀 수 있다. 제약: 판별식 $k^2+k-2$ 처럼 인수분해되는 꼴로 고르고, ⑴⑵ 의 교집합이 공집합이 되지 않도록 $D\ge 0$ 구간과 합·곱 부호 구간이 겹치게 한다.'
    creative: '(1) 세 소문항을 하나로 줄여 「두 근이 모두 양수가 되도록 하는 정수 $k$ 의 개수」로 묻기(★2 유지) (2) ⑶ 을 「부호가 다르고 절댓값이 같다」로 바꾸면 합=0 동치 변환이 붙어 ★3 (3) 이차항 계수를 $k$ 로 두면 $k\ne 0$ 과 계수 부호 경우 나누기가 생겨 ★3.'
```

```yaml
- id: GN-CM1-226-488
  page: 226
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    이차방정식 $(m^2+1)x^2-2(m-2)x+4=0$ 의 서로 다른 두 근이 모두 음수일 때 실수 $m$ 의 값의 범위.
  category: "서로 다른 두 음근 → D>0 · 합<0 · 곱>0"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "서로 다른 두 음근을 가질 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이차항 계수 $m^2+1$ 이 항상 양수라 경우 나누기가 없고 곱도 자동으로 양수다. 실질 조건은 $D/4>0$ 에서 나오는 $3m^2+4m<0$ 과 합<0 의 교집합. 「서로 다른」이라 판별식이 강부등호인 점이 유일한 함정이라 확인체크 ★2 출발 유지.
  tier: star_2
  mechanism_primary: "이차항 계수가 항상 양수임을 확인 → D>0 · 합<0 · 곱>0 → 교집합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{4}{3}<m<0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/226-488.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '일차항의 $m-2$ 와 상수항 4, 이차항 계수 $m^2+1$ 의 상수 1 을 바꿀 수 있다. 제약: 이차항 계수는 항상 양수인 꼴(완전제곱+양수)이어야 경우 나누기가 생기지 않고, $D>0$ 이 $m$ 의 이차부등식으로 인수분해되어야 경계가 유리수로 떨어진다.'
    creative: '(1) 「모두 양수」로 바꾸면 합>0 이 되어 해가 공집합인지까지 따지는 문항(★2~3) (2) 이차항 계수를 $m-1$ 처럼 부호가 바뀌는 식으로 두면 $m>1$ · $m<1$ · $m=1$(일차) 경우 나누기가 생겨 ★3~4 (3) 「서로 다른」을 빼면 중근 포함 경계 판정이 답을 바꾸는 ★2 변형.'
```

```yaml
- id: GN-CM1-226-489
  page: 226
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    이차방정식 $x^2-5x+a^2-4a+3=0$ 이 양수인 근과 음수인 근을 하나씩 가질 때 정수 $a$ 의 값.
  category: "두 근의 부호가 다를 조건 → 곱<0 → 이차부등식의 정수해"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 근의 부호가 다를 조건(두 근의 곱<0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    부호가 다르므로 곱 $a^2-4a+3<0$ 하나면 충분하고 판별식 조건은 자동으로 따라온다. $1<a<3$ 의 정수는 하나뿐. 단계·계산 모두 가벼워 M_total 6 이지만 −1 조건(통찰 0 · M_total ≤5)에는 못 미쳐 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "부호가 다름 → 두 근의 곱<0 → $1<a<3$ → 정수 $a$"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/226-489.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상수항의 이차식 $a^2-4a+3$ 의 두 근 사이 폭이 정수해 개수를 정한다. 제약: 폭이 2 를 넘으면 정수가 여러 개가 되어 「정수 $a$ 의 값」이 유일하지 않으므로 답 형식(값 vs 개수)을 함께 바꾼다. $x$ 의 계수 $-5$ 는 답에 영향이 없어 자유롭게 바꿀 수 있다.'
    creative: '(1) 「정수 $a$ 의 개수」로 물으며 폭을 넓히기(★2) (2) 「두 근이 모두 양수」로 바꾸면 D·합·곱 세 조건이 모두 필요해 ★2~3 (3) 상수항을 $|a-2|-1$ 처럼 절댓값 식으로 두면 부등식에 경우 나누기가 붙어 ★3.'
```

```yaml
- id: GN-CM1-226-490
  page: 226
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    이차방정식 $x^2+(a^2-a-12)x+a^2-6a+5=0$ 의 두 근의 부호가 서로 다르고 두 근의 절댓값이 같을 때 실수 $a$ 의 값.
  category: "절댓값이 같고 부호가 다른 두 근 → 두 근의 합=0 과 곱<0"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '두 근이 $\alpha$ 와 $-\alpha$ 라는 말뜻을 두 근의 합=0 이라는 식으로 옮김(표준 상자 조건에 없는 변환)'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 근의 절댓값이 같고 부호가 다를 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「절댓값이 같고 부호가 다르다」를 합=0 으로 옮기는 것이 전부이고(EQV d1), 거기서 나온 두 후보 중 곱<0 을 만족하는 것만 남긴다. 곱<0 조건이 처음부터 함께 주어진 조건이라 사후 검증(I-VF)으로는 세지 않았다. 통찰 1개·M_total 8 → 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "절댓값 같고 부호 다름 → 합=0 으로 $a$ 후보 두 개 → 곱<0 으로 걸러내기"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/226-490.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '일차항 계수 $a^2-a-12$ 와 상수항 $a^2-6a+5$ 를 바꿀 수 있다. 제약: 합=0 에서 나오는 두 후보 중 정확히 하나만 곱<0 구간에 들어가야 답이 유일하다. 두 이차식이 같은 근을 공유하면 답이 사라진다.'
    creative: '(1) 「두 근의 절댓값이 같다」만 주면 합=0 과 중근($D=0$) 두 갈래가 생겨 I-MI 가 붙고 ★3 (2) 「두 근의 합이 0」으로 직접 주면 동치 변환이 사라져 절차형 ★1~2 (3) 부호 조건을 곱>0 으로 바꿔 걸러내는 방향을 뒤집기(★2).'
```

```yaml
- id: GN-CM1-227-e25
  page: 227
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    이차방정식 $x^2-2ax+4a-3=0$ 의 두 근이 모두 $1$ 보다 클 때 실수 $a$ 의 값의 범위.
  category: "실근의 위치 → D≥0 · f(1)>0 · 축>1 세 조건의 교집합"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식의 실근의 위치 (1) — 두 근이 모두 k보다 클 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f(x)=x^2-2ax+4a-3$ 의 그래프로 옮겨 판별식 ≥0, $f(1)>0$, 축>1 세 조건을 세우고 교집합을 잡는다. 이 세 조건 묶음 자체가 단원이 상자로 주는 정형 골조라 표현 전환을 통찰로 세지 않았다. 필수 예제 ★2 출발 유지.
  tier: star_2
  mechanism_primary: "두 근>1 → D≥0 · f(1)>0 · 축>1 → 교집합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a\ge 3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/227-e25.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '기준점 1 과 일차항의 $-2a$, 상수항 $4a-3$ 을 바꿀 수 있다. 제약: 판별식이 $a$ 의 이차부등식으로 인수분해되어야 하고, 세 조건 중 하나가 나머지를 완전히 삼키면(축 조건이 무의미해지면) 체감 난이도가 내려간다.'
    creative: '(1) 기준점을 문자 $k$ 로 두면 추상도가 올라 ★3 (2) 「두 근이 모두 1보다 작다」로 뒤집어 축·$f(1)$ 부등호 방향을 함께 바꾸기(★2) (3) 「한 근은 1보다 크고 다른 근은 1보다 작다」로 바꾸면 $f(1)<0$ 한 줄로 끝나 ★1~2.'
```

```yaml
- id: GN-CM1-227-491
  page: 227
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    이차방정식 $x^2-kx+k+3=0$ 의 두 근이 모두 $-3$ 보다 클 때 실수 $k$ 의 값의 범위.
  category: "실근의 위치 → D≥0 · f(-3)>0 · 축>-3 교집합(답이 두 구간의 합집합)"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 근이 모두 k보다 클 조건(판별식이 두 구간으로 갈라지는 경우)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    판별식 조건이 $(k-6)(k+2)\ge 0$ 으로 갈라져 답이 두 구간의 합집합이 되는 것이 이 문항의 핵심 함정이다. $f(-3)>0$ 과 축 조건은 상대적으로 느슨해 판별식의 두 조각을 각각 자른다. 도구는 정형 세 조건 그대로라 통찰 0, 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "두 근>-3 → D≥0 · f(-3)>0 · 축>-3 → 교집합(두 구간)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-3<k\le -2$ 또는 $k\ge 6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/227-491.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상수항 $k+3$ 의 3 과 기준점 $-3$ 을 바꿀 수 있다. 제약: 판별식 $k^2-4k-12$ 가 인수분해되어야 하고, 답이 합집합으로 남으려면 $f(-3)>0$ 이 판별식의 두 조각을 모두 지워 버리지 않아야 한다.'
    creative: '(1) 기준점을 0 으로 바꾸면 실근의 부호 문제로 환원(★2) (2) 「모두 $-3$ 보다 크고 1보다 작다」로 구간을 닫으면 조건이 넷이 되어 ★3 (3) 정수 $k$ 의 개수를 물으면 합집합 처리 실수가 바로 드러난다(★3).'
```

```yaml
- id: GN-CM1-227-492
  page: 227
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    이차방정식 $2x^2+3mx+5m-2=0$ 의 두 근이 모두 $1$ 보다 작을 때 실수 $m$ 의 값의 범위.
  category: "실근의 위치 → D≥0 · f(1)>0 · 축<1 교집합(이차항 계수가 1이 아님)"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 근이 모두 k보다 작을 조건(이차항 계수가 1이 아닌 경우)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이차항 계수가 2 라 축이 분수로 나오고 판별식도 $(9m-4)(m-4)\ge 0$ 으로 갈라져 답이 합집합이 된다. 이 절에서 계산 부담이 가장 큰 문항이지만 골조는 491 과 동일하고 통찰은 없다. 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "두 근<1 → D≥0 · f(1)>0 · 축<1 → 교집합(두 구간)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0<m\le \dfrac{4}{9}$ 또는 $m\ge 4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/227-492.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이차항 계수 2, 일차항 $3m$, 상수항 $5m-2$ 를 바꿀 수 있다. 제약: 판별식이 $m$ 의 이차식으로 인수분해되어야 하고 $f(1)$ 이 $m$ 의 일차식으로 깔끔히 정리되어야 경계가 유리수로 남는다.'
    creative: '(1) 이차항 계수를 1 로 낮추면 계산만 가벼워지고 ★2 유지 (2) 이차항 계수를 $m$ 으로 두면 부호 경우 나누기가 생겨 ★3~4 (3) 「두 근이 모두 1보다 작은 자연수 $m$ 의 최솟값」처럼 정수 조건을 붙이면 합집합 처리가 강제된다(★3).'
```

```yaml
- id: GN-CM1-227-493
  page: 227
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    이차방정식 $x^2+2ax+3a=0$ 의 두 근이 모두 $-2$ 보다 작을 때 실수 $a$ 의 최솟값.
  category: "실근의 위치 → D≥0 · f(-2)>0 · 축<-2 → 교집합의 최솟값"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 근이 모두 k보다 작을 조건 + 계수의 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 조건의 교집합이 한쪽 끝만 닫힌 구간으로 나오고 묻는 것이 최솟값이라, 판별식 쪽 등호가 살아 있는지가 답을 그대로 정한다(T-경계). 조건을 세우는 절차는 e25 와 같고 통찰은 없다. 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "두 근<-2 → D≥0 · f(-2)>0 · 축<-2 → 교집합의 왼쪽 끝"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/227-493.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상수항 $3a$ 의 3 과 기준점 $-2$ 를 바꿀 수 있다. 제약: 최솟값이 존재하려면 교집합의 왼쪽 끝이 판별식 조건에서 와서 등호를 포함해야 한다. 기준점을 키우면 축 조건이 느슨해져 답이 열린 끝이 되어 최솟값이 사라진다.'
    creative: '(1) 최댓값을 묻도록 바꾸면 열린 끝이 걸려 「최댓값은 없다」가 답이 되는 함정 문항(★3) (2) 「정수 $a$ 의 개수」로 바꾸기(★2) (3) 기준점을 문자 $k$ 로 두고 $a$ 의 최솟값을 $k$ 로 표현하게 하면 ★3~4.'
```

```yaml
- id: GN-CM1-228-e26
  page: 228
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    이차방정식 $x^2-(m+2)x-(m-1)=0$ 에 대해 ⑴ 두 근 사이에 $-2$ 가 있을 때 ⑵ 두 근이 모두 $0$ 과 $2$ 사이에 있을 때의 실수 $m$ 의 값의 범위.
  category: "실근의 위치 — ⑴ f(-2)<0 한 조건 ⑵ D≥0·f(0)>0·f(2)>0·축이 구간 안 네 조건"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식의 실근의 위치 (2) — 두 근 사이에 k / 두 근이 구간 안"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 $f(-2)<0$ 한 줄이면 끝나고(그때 판별식은 자동), ⑵ 는 판별식·$f(0)>0$·$f(2)>0$·축의 위치 네 조건의 교집합이다. 「한 조건으로 충분한 배치」와 「네 조건이 모두 필요한 배치」를 한 문항에서 대비시키고 조건 수가 이 단원 최대라 필수 예제 ★2 출발에서 M_total 9 로 +1. 통찰은 정형 상자 조건 밖으로 나가지 않아 0.
  tier: star_3
  mechanism_primary: "⑴ f(-2)<0 / ⑵ D≥0·f(0)>0·f(2)>0·축이 구간 안 → 교집합"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '⑴ $m<-9$ ⑵ $0\le m<\dfrac{1}{3}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/228-e26.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상수항 $-(m-1)$ 의 1, 기준점 $-2$, 구간 $(0,2)$ 를 바꿀 수 있다. 제약: ⑵ 의 판별식이 $m^2+8m$ 처럼 인수분해되어야 하고, 구간 양 끝의 함숫값이 $m$ 의 일차식으로 정리되어야 교집합 경계가 유리수로 떨어진다.'
    creative: '(1) ⑴ 을 「두 근 사이에 $-2$ 와 0 이 모두 있다」로 바꾸면 $f(-2)<0$ 과 $f(0)<0$ 두 조건(★3) (2) ⑵ 의 구간을 한쪽만 닫으면 조건이 셋으로 줄어 ★2 (3) 두 소문항을 합쳐 「⑴ 과 ⑵ 를 동시에 만족하는 $m$」을 물으면 공집합 판정이 생겨 ★4.'
```

```yaml
- id: GN-CM1-228-494
  page: 228
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    이차방정식 $x^2-(m-4)^2x+2m=0$ 의 두 근 사이에 $2$ 가 있을 때 실수 $m$ 의 값의 범위.
  category: "두 근 사이에 주어진 수 → f(2)<0 → m에 대한 이차부등식"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 근 사이에 주어진 수가 있을 조건(f(k)<0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f(2)<0$ 한 조건이면 충분하고 판별식은 자동이다. 정리 과정에서 양변을 음수로 나누며 부등호가 한 번 뒤집히는 것이 유일한 함정(T-부호). 계수에 $(m-4)^2$ 이 있어 전개가 필요하지만 결과는 표준 이차부등식이라 통찰 0, 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "두 근 사이에 2 → f(2)<0 → 이차부등식 → 두 구간의 합집합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$m<2$ 또는 $m>7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/228-494.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '일차항 계수 $(m-4)^2$ 의 4, 상수항 $2m$ 의 2, 기준점 2 를 바꿀 수 있다. 제약: $f(k)$ 가 $m$ 의 이차식으로 인수분해되어야 답이 두 구간의 합집합으로 깔끔히 나온다.'
    creative: '(1) 「두 근이 모두 2보다 크다」로 바꾸면 조건이 셋으로 늘어 ★3 (2) 기준점을 둘(2 와 5)로 늘려 각 구간에 근이 하나씩 오게 하면 $f(2)<0$·$f(5)>0$ 조합(★3) (3) 이차항 계수를 음수로 두면 $af(k)<0$ 의 계수 부호 처리가 필요해 ★3.'
```

```yaml
- id: GN-CM1-228-495
  page: 228
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    이차방정식 $x^2-4x+k-1=0$ 의 두 근이 모두 $0$ 과 $3$ 사이에 있을 때 실수 $k$ 의 값의 범위.
  category: "두 근이 구간 안 → D≥0 · f(0)>0 · f(3)>0 · 축이 구간 안"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 근이 모두 주어진 구간 안에 있을 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    축이 상수 2 라 구간 안이 자동으로 성립하고, 남는 세 조건이 각각 $k$ 의 일차부등식이라 계산은 이 절에서 가장 가볍다. 네 조건을 빠짐없이 쓰는지와 판별식 쪽 등호만 살아남는 것이 관건. 통찰 0·확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "D≥0 · f(0)>0 · f(3)>0 · 축 2가 구간 안 → 교집합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4<k\le 5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/228-495.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '일차항 $-4x$ 의 4, 구간 $(0,3)$, 상수항 $k-1$ 의 1 을 바꿀 수 있다. 제약: 축이 구간 안에 들어와야 답이 공집합이 되지 않고, 반열린 구간으로 남으려면 판별식 쪽에만 등호가 오게 고른다.'
    creative: '(1) 축이 구간 밖이 되게 일차항을 바꿔 공집합임을 확인시키기(★3) (2) 일차항 계수를 문자로 두면 축 조건이 살아나 네 조건이 모두 필요해 ★3 (3) 「두 근 중 하나만 0 과 3 사이」로 바꾸면 $f(0)f(3)<0$ 으로 골조가 바뀐다(★2~3).'
```

### 연습문제 STEP 1

```yaml
- id: GN-CM1-229-496
  page: 229
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    이차방정식 $x^2-4(k-2)x+k^2+11=0$ 의 두 근이 모두 음수일 때 실수 $k$ 의 값의 범위.
  category: "두 근이 모두 음수 → D≥0 · 합<0 · 곱>0"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 근이 모두 음수일 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    상수항 $k^2+11$ 이 항상 양수라 곱 조건은 자동이고, 실질 조건은 $D/4\ge 0$ 의 $(3k-1)(k-5)\ge 0$ 과 합<0 의 교집합이다. 판별식이 내주는 오른쪽 조각이 합 조건에 완전히 잘려 나가는 것이 포인트. 통찰 0·STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "두 근 모두 음수 → D≥0 · 합<0 · 곱>0 → 교집합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$k\le \dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/229-496.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상수항 $k^2+11$ 의 11 과 일차항의 4, $-2$ 를 바꿀 수 있다. 제약: 곱이 항상 양수로 남으려면 상수항이 판별식 음인 이차식이어야 하고, $D\ge 0$ 이 인수분해되어야 경계가 유리수로 떨어진다.'
    creative: '(1) 상수항을 $k^2-11$ 로 바꾸면 곱>0 조건이 살아나 세 조건이 모두 필요해 ★3 (2) 「두 근이 모두 양수」로 뒤집기(★2) (3) 「음수인 근을 갖는다」처럼 한 근만 조건화하면 곱<0 인 경우와 곱>0·합<0 인 경우로 갈라져 ★3~4.'
```

```yaml
- id: GN-CM1-229-497
  page: 229
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    이차방정식 $x^2-2(a+1)x+3=0$ 의 두 근이 모두 $1$ 보다 클 때 실수 $a$ 의 값의 범위.
  category: "두 근이 모두 1보다 큼 → D≥0 · f(1)>0 · 축>1 (경계가 무리수)"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 근이 모두 k보다 클 조건(경계가 무리수인 경우)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    골조는 e25 와 같지만 판별식 $(a+1)^2-3\ge 0$ 의 경계가 무리수라 그 값을 축 조건·$f(1)$ 조건의 경계와 대소 비교해야 교집합이 나온다. 무리수 어림이 계산 부담을 올릴 뿐 도구는 정형 세 조건이라 통찰 0, STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "D≥0 · f(1)>0 · 축>1 → 무리수 경계와 0, 1 의 대소 비교 → 교집합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-1+\sqrt{3}\le a<1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/229-497.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상수항 3, 일차항의 $a+1$, 기준점 1 을 바꿀 수 있다. 제약: 상수항이 완전제곱이 아니어야 경계가 무리수로 남고, 완전제곱으로 바꾸면 난이도가 한 단 내려간다. 무리수 경계가 나머지 두 조건의 경계 사이에 들어와야 답이 한 구간으로 나온다.'
    creative: '(1) 상수항을 4 로 바꿔 경계를 정수로 만들면 ★1~2 (2) 「모두 1보다 크고 4보다 작다」로 구간을 닫으면 조건 넷 + 무리수 비교라 ★3 (3) 정수 $a$ 의 개수를 물으면 무리수 경계 어림이 강제된다(★3).'
```

```yaml
- id: GN-CM1-229-498
  page: 229
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    이차방정식 $x^2+2ax+a^2-9=0$ 의 두 근 사이에 $1$ 이 있을 때 정수 $a$ 의 개수.
  category: "두 근 사이에 1 → f(1)<0 → 이차부등식의 정수해 개수"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 근 사이에 주어진 수가 있을 조건 + 정수의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f(1)<0$ 한 줄에서 $a$ 의 이차부등식이 나오고 그 해 구간의 정수를 센다. 상수항이 $(a-3)(a+3)$ 이라 근을 먼저 구하고 싶어지지만 쓸 필요가 없다는 것이 작은 함정. 통찰 0·M_total 6 으로 −1 조건에는 못 미쳐 STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "두 근 사이에 1 → f(1)<0 → 해 구간의 정수 개수"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/229-498.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '기준점 1 과 상수항 $a^2-9$ 의 9, 일차항의 2 를 바꿀 수 있다. 제약: 해 구간의 폭이 정수 개수를 정하고, 경계가 정수가 되면 개수가 두 개 줄어든다(경계 포함 여부 함정).'
    creative: '(1) 「두 근 사이에 있거나 한 근이 1」로 바꾸면 $f(1)\le 0$ 이 되어 경계 포함 판정이 생겨 ★3 (2) 「두 근이 모두 1보다 크다」로 바꾸면 조건 셋(★2~3) (3) 기준점을 둘 주고 각각의 함숫값 부호로 근의 위치를 고르는 보기형(★3).'
```

### 연습문제 STEP 2

```yaml
- id: GN-CM1-229-499
  page: 229
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    이차방정식 $x^2+4kx+2k^2+k-1=0$ 의 두 근의 부호가 서로 다르고 음수인 근의 절댓값이 양수인 근의 절댓값보다 클 때 실수 $k$ 의 값의 범위.
  category: "부호가 다르고 음근의 절댓값이 더 큼 → 곱<0 과 합<0"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '「음수인 근의 절댓값이 더 크다」는 말을 두 근의 합<0 이라는 식으로 옮김(상자 조건에 없는 변환)'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 근의 부호가 다르고 절댓값의 대소가 주어진 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    핵심은 말로 준 절댓값 대소를 합의 부호로 옮기는 동치 변환(EQV d1)이고, 나머지는 곱<0 에서 나오는 구간과 합<0 의 교집합이다. 부호가 다르므로 판별식은 자동. 통찰 1개·M_total 8 로 STEP 2 ★3 출발 유지.
  tier: star_3
  mechanism_primary: "부호 다름 → 곱<0, 음근이 더 큼 → 합<0 → 교집합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$0<k<\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/229-499.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '일차항 계수 $4k$ 의 4 와 상수항 $2k^2+k-1$ 을 바꿀 수 있다. 제약: 상수항 이차식이 인수분해되어야 곱<0 의 경계가 유리수로 떨어지고, 그 구간과 합<0 의 해가 겹쳐야 답이 공집합이 되지 않는다.'
    creative: '(1) 「양수인 근의 절댓값이 더 크다」로 뒤집어 합>0 으로(★3) (2) 「두 근의 절댓값이 같다」로 바꾸면 합=0 등식이 되어 ★2~3 (3) 「음수인 근의 절댓값이 양수인 근의 2배」처럼 비를 주면 근과 계수의 관계로 연립해야 해 ★4.'
```

```yaml
- id: GN-CM1-229-500
  page: 229
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    이차방정식 $x^2-4kx+3k^2-k+2=0$ 의 두 근 $\alpha$, $\beta$ 와 일차방정식 $2(x-1)+3=7-x$ 의 근 $\gamma$ 가 $\alpha<\beta<\gamma$ 를 만족시킬 때 실수 $k$ 의 최댓값.
  category: "다른 방정식의 근과의 대소 → 두 근이 모두 그 값보다 작을 조건 → k의 최댓값"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '순서 조건 $\alpha<\beta<\gamma$ 를 「두 근이 모두 $\gamma$ 보다 작다」는 실근의 위치 조건으로 옮김'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "다른 방정식의 근보다 두 근이 작을 조건(실근의 위치 + 최댓값)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    먼저 일차방정식에서 $\gamma$ 를 구한 뒤 순서 조건을 「두 근이 모두 $\gamma$ 보다 작다」로 옮기는 것이 골조(EQV d1)이고, 이후는 판별식·$f(\gamma)>0$·축 조건의 교집합에서 오른쪽 끝을 읽는다. 다만 $\alpha<\beta$ 를 엄격히 보면 판별식이 강부등호라 구간이 열려 최댓값이 없고, 답지의 값은 중근을 허용한($D\ge 0$) 경계다 — 변형 때 등호 처리를 반드시 고정할 것. 전사 답 확인 필요.
  tier: star_3
  mechanism_primary: "일차방정식에서 γ 계산 → 두 근 모두 γ보다 작다 → D·f(γ)>0·축<γ → 교집합의 오른쪽 끝"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/229-500.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '일차방정식을 바꿔 $\gamma$ 를 옮기고 상수항 $3k^2-k+2$ 의 계수를 바꿀 수 있다. 제약: 판별식과 $f(\gamma)$ 가 모두 $k$ 의 이차식으로 인수분해되어야 하고, 최댓값이 존재하려면 교집합의 오른쪽 끝이 등호를 포함하는 조건에서 와야 한다.'
    creative: '(1) $\gamma$ 를 다른 이차방정식의 한 근으로 주면 단원 결합(I-XU)이 붙어 ★4 (2) $\alpha<\gamma<\beta$ 로 바꾸면 $f(\gamma)<0$ 한 줄로 끝나 ★2 (3) 최댓값 대신 「정수 $k$ 의 개수」를 물으면 경계 등호 함정이 그대로 드러난다(★3).'
```

```yaml
- id: GN-CM1-229-501
  page: 229
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    이차방정식 $2x^2-ax+2a-1=0$ 의 두 근 $\alpha$, $\beta$ 가 $-1<\alpha<0<\beta<1$ 을 만족시킬 때 실수 $a$ 의 값의 범위.
  category: "두 근이 세 점으로 갈린 두 구간에 하나씩 → f(-1)>0 · f(0)<0 · f(1)>0"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '부등식 사슬 $-1<\alpha<0<\beta<1$ 을 세 점 $-1$, $0$, $1$ 에서의 함숫값 부호로 옮김(상자 조건의 두 배치를 조합해야 함)'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 근이 각각 다른 구간에 있을 조건(세 점의 함숫값 부호)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    그래프가 세 점을 어떤 부호로 지나야 하는지로 옮기면 $f(-1)>0$·$f(0)<0$·$f(1)>0$ 세 줄이 전부다(RT d1). 가운데 값이 음수이므로 판별식과 축 조건은 자동으로 따라온다. 이차항 계수가 양수임을 먼저 확인해야 부등호 방향이 맞는다는 점이 T-부호 함정. STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "두 근이 세 점으로 갈린 구간에 하나씩 → f(-1)>0·f(0)<0·f(1)>0 → 교집합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{1}{3}<a<\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/229-501.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '구간 끝 $-1$, $0$, $1$ 과 계수 $-a$, $2a-1$ 을 바꿀 수 있다. 제약: 세 함숫값이 모두 $a$ 의 일차식이어야 답이 한 구간으로 떨어진다. 가운데 점을 0 이 아닌 값으로 옮기면 $f(0)<0$ 대신 그 점의 값으로 바꿔야 한다.'
    creative: '(1) 가운데 점을 옮겨 $-1<\alpha<1<\beta<3$ 처럼 비대칭 구간으로(★3) (2) 이차항 계수를 문자로 두면 부호 경우 나누기가 붙어 ★4 (3) 한쪽 부등호에 등호를 허용해 「한 근이 0」을 포함시키면 경계 판정이 답을 가르는 ★3.'
```

### 연습문제 실력 UP

```yaml
- id: GN-CM1-229-502
  page: 229
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    이차방정식 $x^2-2kx+k+2=0$ 의 근 중 적어도 한 개가 이차방정식 $x^2-4x+3=0$ 의 두 근 사이에 있을 때 실수 $k$ 의 값의 범위.
  category: "적어도 한 근이 구간 안 → 한 근만 안 / 두 근 모두 안 두 경우의 합집합 + 경계 검토"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '다른 이차방정식의 두 근 1, 3 을 먼저 구해 구간의 끝으로 바꾸고 원 방정식을 그래프 조건으로 옮김'
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「적어도 한 개」를 한 근만 구간 안인 경우(f(1)f(3)<0)와 두 근 모두 구간 안인 경우(D≥0·f(1)>0·f(3)>0·축) 두 시나리오로 나눠 각각 푼 뒤 합집합'
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '두 경우의 합집합에서 빠지는 경계값(구간 끝이 근이 되는 k)이 실제로는 조건을 만족하는지 되짚어 편입'
  insight_count: 3
  depth_score: 1.33
  type_id: null
  type_hint: "적어도 한 근이 주어진 구간에 있을 조건(경우 나누기 + 경계 검토)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    다른 이차방정식의 근 1, 3 을 구간으로 바꾸고(RT d1), 「적어도 한 개」를 한 근만 안쪽인 경우와 두 근 모두 안쪽인 경우로 갈라 푼 뒤 합친다(MI d2). 두 경우 사이에서 구간 끝이 근이 되는 $k$ 가 빠지는데, 그때 다른 근이 구간 안이라 편입해야 답이 끊기지 않는다(VF d1). 실력 UP ★4 출발 유지. [분류 이슈] 통찰 3개 + VF 포함으로 ★5 의 형식 조건은 채우지만 쓰는 도구가 모두 이 단원 표준이라 ★4 로 둠 — 카탈로그 작성 때 재검토.
  tier: star_4
  mechanism_primary: "다른 방정식의 두 근 1, 3 을 구간으로 → 한 근만 안(f(1)f(3)<0) 또는 두 근 모두 안(D≥0·f(1)>0·f(3)>0·축) → 합집합 + 경계 검토"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2\le k<3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/229-502.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '구간을 주는 이차방정식의 두 근(1, 3)과 상수항 $k+2$ 의 2 를 바꿀 수 있다. 제약: $f(1)$·$f(3)$ 이 $k$ 의 일차식으로 정리되어야 경우 나누기가 감당되고, 구간 폭이 너무 좁으면 「두 근 모두 안」 경우가 공집합이 되어 ★3 으로 내려간다.'
    creative: '(1) 「적어도 한 개」를 「정확히 한 개」로 바꾸면 $f(1)f(3)<0$ 한 줄이라 ★2~3 (2) 「두 근 사이」를 「두 근의 바깥」으로 바꾸면 부호 조건만 뒤집힌 같은 골조(★4) (3) 구간을 주는 방정식의 근을 문자로 두면 추상도가 올라 ★5 후보.'
```

## 표본 판정 요약 (18문)

- ★ 분포: ★1 0 · ★2 13 · ★3 4 · ★4 1 · ★5 0
- 통찰형 5(226-490 · 229-499 · 229-500 · 229-501 · 229-502) · 절차형 13 · premium 0
- 통찰 유형 분포: I-EQV 3 · I-RT 2 · I-MI 1 · I-VF 1 (depth 3 없음 · 감쇠 대상 없음)
- M_total 분포: 6 → 3문 · 7 → 1문 · 8 → 9문 · 9 → 4문 · 10 → 1문 (평균 8.1)
- type_hint 상위: 「두 근이 모두 k보다 클/작을 조건」 5 · 「실근의 부호(합·곱·판별식)」 4 · 「두 근 사이에 주어진 수」 3 · 「두 근이 구간 안」 2 · 「절댓값 조건이 붙은 부호 문제」 2
- 대상층: 중하위권 12 · 중위권 5 · 중상위권 1
- 그림: 0문(전 문항 `figure: none`) · 출처: 본문 풀이 3(필수 예제) · 답지 15

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-228-e26 | 필수 예제(★2 출발)이나 소문항 둘 · 조건 최대 4개 · M_total 9 로 +1 해 ★3 라벨. 통찰은 0 이라 절차형 ★3 이 됨 | ★2 / ★3 |
| GN-CM1-229-500 | 답지의 최댓값은 중근을 허용한($D\ge 0$) 경계값이고, $\alpha<\beta$ 를 엄격히 보면 구간이 열려 최댓값이 없음. 전사 답 자체는 그대로 두고 등호 해석만 기록 | ★3 |
| GN-CM1-229-502 | 통찰 3개 + I-VF 포함으로 ★5 형식 조건(§2.13)은 충족하나 도구가 모두 단원 표준이라 ★4 유지 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 단원은 **실근의 부호**(e24 · 488 · 489 · 490 · 496 · 499)와 **실근의 위치**(e25 · 491 · 492 · 493 · e26 · 494 · 495 · 497 · 498 · 500 · 501 · 502) 두 축으로 갈린다. 카탈로그에서도 이 둘은 반드시 별도 유형군으로 세워야 한다(조건 목록 자체가 다름).
- 위치 유형은 배치별로 base ★ 가 달라 **세 유형으로 분리**하는 것이 맞다: ⓐ 두 근이 모두 기준점의 한쪽(조건 셋 · ★2) ⓑ 두 근 사이에 기준점(조건 하나 · ★2) ⓒ 두 근이 구간 안 또는 각 구간에 하나씩(조건 넷 · ★3).
- 반대로 「두 근이 모두 k보다 크다」와 「모두 k보다 작다」는 부등호 방향만 뒤집힌 같은 골조라 **하나의 유형으로 통합**해도 된다(491 · 492 · 493 · 497 · e25 가 모두 여기에 들어간다).
- 「절댓값이 같다 / 절댓값의 대소」(490 · 499)는 말로 준 조건을 합의 부호·등식으로 옮기는 I-EQV 가 고정으로 붙으므로 부호 유형 안의 **별도 하위 유형**으로 두는 편이 변형에 유리하다.
- 502 의 「적어도 한 근이 구간 안」은 이 단원에서 유일하게 경우 나누기 + 경계 검토가 들어가는 ★4 슬롯 후보다. 카탈로그에서 단독 유형으로 세울 것.
