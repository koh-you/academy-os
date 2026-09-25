---
name: mechanism-데이터-GN-CM2-33-p3
description: 개념원리 공통수학2 33 무리함수(3/3 · 288-e8~291-690) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: 33 무리함수
  unit_code: CM2-33
  part: "3/3"
  extract_range: "288~291쪽 · 288-e8~291-690"
  total_problems: 19
  unit_total: 45
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 33 무리함수 (3/3) 정독 데이터 (v1.0)

이 파일은 33단원 마지막 조각 19문(288~291쪽 · 288-e8~291-690)을 다룬다. 구역은 넷이다 — 「필수·발전 예제」 4문(필수 예제 1 + 확인체크 3 · 모두 **무리함수와 그 역함수 그래프의 교점**), 「연습문제 STEP 1」 6문, 「연습문제 STEP 2」 6문, 「연습문제 실력 UP」 3문. 단원 전체(45문) 중 앞 두 조각이 무리식의 계산·무리함수의 그래프·평행이동·정의역과 치역을 다뤘다면, 이 조각은 그 도구들이 **역함수·직선과의 교점·사분면 조건**과 맞물리는 마무리 구간이다.

벤더 난이도 신호와 이 파일의 출발점 규약: 「필수」 예제 ★2 · 그 아래 tag 「확인체크」도 예제의 유제 배치이므로 ★2 · 「연습문제 STEP 1」 ★2 · 「STEP 2」 ★3 · 「실력 UP」 ★4 를 출발점으로 두고, M_total·통찰로 ±1 조정했다. 이 단원에서 반복되는 **무리방정식의 제곱과 무연근 배제**(√(...)=(일차식) 꼴에서 우변 ≥ 0 검사)와 **√ 앞 부호·정의역 방향 판단**은 이 단원 전반부에서 배운 표준 절차이므로 통찰로 세지 않고 Mₜ(T-범위·T-부호·T-경계)에 반영했다. 대신 ⑴ 역함수 그래프와의 교점을 **y=x 위의 교점**으로 옮기는 동치 전환(I-EQV), ⑵ 직선·사분면·집합 조건을 **그래프의 위치 조건**으로 옮기는 표현 전환(I-RT), ⑶ 기울기 부호·절댓값·구간별 정의에서 생기는 **케이스 분기**(I-MI), ⑷ 두 그래프가 서로 역함수여서 y=x 대칭임을 활용하는 **대칭성**(I-SYM)은 통찰로 셌다. 결과적으로 STEP 1 은 절차형·★2 가, STEP 2 이상은 통찰형·★3~4 가 주류가 되었다.

이 파일의 주 용도는 숫자 변형·창의 변형의 **원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM2-288-e8
  page: 288
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    f(x)=√(x-2)+2 의 그래프와 역함수 y=f⁻¹(x) 의 그래프가 만나는 서로 다른 두 점 사이의 거리.
  category: '역함수 그래프와의 교점 → y=x 위 교점 → 무리방정식 → 두 점 거리'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f 가 증가함수이므로 y=f(x) 와 y=f⁻¹(x) 의 교점을 y=x 와의 교점으로 바꿔 f(x)=x 한 식으로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "무리함수의 그래프와 역함수의 그래프의 교점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이 단원에서 역함수 교점을 y=x 로 옮기는 전환을 처음 쓰는 대표 예제. 전환 뒤에는 √(x-2)=x-2 양변 제곱 → 두 근 → x≥2 와 우변 ≥ 0 무연근 검사 → 두 점이 모두 y=x 위이므로 거리 = √2·|근의 차| 로 끝난다. 전환 통찰 1개(EQV d2)·M_total 5·필수 예제 구역 → ★2.
  tier: star_2
  mechanism_primary: 'f=f⁻¹ 교점 → y=x 위 교점 → √(x-2)+2=x 제곱 → 두 근 → 거리 √2·|근의 차|'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sqrt{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/288-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '√(x-2) 의 평행이동량 쌍을 바꿀 수 있다(√(x-3)+3 · √(x+1)-1 …). 제약: 교점이 서로 다른 두 점이 되려면 f(x)=x 가 서로 다른 두 실근을 가져야 하고, 두 근이 모두 정의역(√ 안 ≥ 0)과 우변 ≥ 0 을 만족해야 한다. √ 앞 계수를 1 이 아닌 수로 바꾸면 근이 무리수가 되어 거리가 지저분해지므로 계수는 1 로 두는 편이 낫다.'
    creative: '(1) 거리 대신 두 교점을 지나는 직선의 방정식·중점을 묻기(★2 유지) (2) 교점의 개수가 두 개가 되도록 하는 상수 범위를 묻기(I-BW 추가 · ★3) (3) f 를 감소함수로 바꾸면 y=x 위가 아닌 교점이 생겨 전환이 무효가 되므로 ★4 로 뛴다(291-688 계열).'
```

```yaml
- id: GN-CM2-288-673
  page: 288
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x)=-√(2-x) 의 그래프와 역함수 y=f⁻¹(x) 의 그래프가 만나는 점 (a, b) 에 대하여 a+b.
  category: '역함수 그래프와의 교점 → y=x 위 교점 → 무리방정식 → 좌표 합'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "바로 위 예제에서 시연된 전환을 그대로 적용 — 교점을 f(x)=x 의 해로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "무리함수의 그래프와 역함수의 그래프의 교점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    288-e8 과 같은 골조의 유제. -√(2-x)=x 에서 좌변이 0 이하이므로 x≤0 을 미리 잡아 두고 제곱하면 이차방정식의 두 근 중 하나가 이 범위에서 기각된다. 교점이 y=x 위이므로 a=b 이고 a+b=2a. 전환이 이미 시연된 뒤라 통찰 depth 1·M_total 5 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '교점을 y=x 위로 → -√(2-x)=x (x≤0) 제곱 → 두 근 중 범위 밖 기각 → a=b 이므로 a+b=2a'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/288-673.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '√ 안의 상수 2 와 √ 앞 부호를 바꿀 수 있다(-√(6-x) · -√(3-x) …). 제약: 제곱해서 얻는 이차방정식의 근 중 x≤0 을 만족하는 것이 정확히 하나여야 발문의 「만나는 점」 단수와 맞는다. 상수를 완전제곱수 근처로 잡아야 근이 정수로 떨어진다.'
    creative: '(1) a+b 대신 ab 나 두 점의 거리를 묻기(★2 유지) (2) -√(k-x) 에서 교점의 좌표가 정수가 되도록 하는 k 를 묻는 역방향(I-BW 추가 · ★3) (3) 교점을 y=x 위로 옮기지 못하도록 f 와 다른 함수의 교점으로 바꾸면 직접 연립이 필요해 ★3.'
```

```yaml
- id: GN-CM2-288-674
  page: 288
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 함수 y=√(2x+7)-2 와 x=√(2y+7)-2 의 그래프의 교점의 좌표.
  category: 'x↔y 교환식 = y=x 대칭(서로 역함수) → y=x 위 교점 → 무리방정식'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 식이 x 와 y 를 맞바꾼 꼴임을 보고 두 그래프가 y=x 에 대칭(서로 역함수)임을 읽어 교점을 y=x 위로 한정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "x↔y 교환식으로 주어진 두 그래프(서로 역함수)의 교점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「역함수」라는 말 없이 x 와 y 를 바꾼 식으로 제시해 대칭 관계를 학생이 스스로 읽게 한 변형. 대칭을 보면 √(2x+7)-2=x 한 식으로 끝나고, 못 보면 두 무리식을 직접 연립해야 한다. 대칭 착안 통찰 1개(SYM d2)·M_total 5 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: 'x↔y 교환 → 두 그래프가 y=x 대칭 → 교점은 y=x 위 → √(2x+7)-2=x 제곱 → 무연근 배제'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$(1,\,1)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/288-674.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '√ 안의 계수·상수 (2x+7) 과 밖의 상수 -2 를 바꿀 수 있다. 제약: √(ax+b)+c=x 를 제곱한 이차방정식이 유리근을 갖고, 그 중 x≥c 와 √ 안 ≥ 0 을 만족하는 근이 하나여야 교점 좌표가 깔끔한 정수쌍이 된다.'
    creative: '(1) 교점의 개수를 묻기(★2) (2) 한쪽 식을 y=√(2x+7)-2, 다른 쪽을 y=x 로 바꿔 대칭 단서를 지우면 평범한 ★1~2 계산 (3) 두 식의 상수를 어긋나게 해 서로 역함수가 아니게 만들면 대칭 전환이 무효가 되어 직접 연립 ★3 (4) 교점이 y=x 위에 없는 반례(감소함수 쌍)를 함께 묻기 → I-VF 추가 ★4.'
```

```yaml
- id: GN-CM2-288-675
  page: 288
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    y=2√(x-2) 를 x축 방향으로 a 만큼 평행이동한 그래프를 y=f(x) 라 할 때, y=f(x) 와 그 역함수의 그래프가 접하도록 하는 a.
  category: '평행이동 식 세우기 → 역함수와 접함 = y=x 와 접함 → 판별식 0'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "증가함수에서 f 와 f⁻¹ 이 접한다는 조건을 f 의 그래프가 직선 y=x 에 접한다는 조건으로 바꿔 판별식을 쓸 수 있는 형태로 만듦"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "무리함수의 그래프와 역함수의 그래프가 접할 조건(판별식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x축 방향 a 평행이동으로 f(x)=2√(x-2-a) 를 먼저 세우고, 「역함수와 접함」을 「y=x 와 접함」으로 옮긴 뒤 제곱해 얻은 이차방정식의 판별식을 0 으로 둔다. 교점 개수 문제(288-e8·673)보다 매개변수 a 가 추가되고 접함 조건까지 얹혀 M_total 7 → 확인체크 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: 'x축 방향 a 평행이동 → f(x)=2√(x-2-a) → f 와 f⁻¹ 접함 = y=x 와 접함 → 제곱 후 판별식 0 → a'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/288-675.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '√ 앞 계수 2 와 원래 식의 평행이동량 -2 를 바꿀 수 있다. 제약: 제곱해서 나온 이차방정식의 판별식을 0 으로 두었을 때 a 가 유리수로 떨어져야 하고, 중근이 정의역(√ 안 ≥ 0)과 x≥0(우변 ≥ 0) 안에 들어와야 실제로 접한다. √ 앞 계수를 1 로 두면 판별식이 항상 양수가 되어 접하는 a 가 없으므로 계수는 1 보다 커야 한다.'
    creative: '(1) 접함 대신 「서로 다른 두 점에서 만나도록」·「만나지 않도록」 하는 a 의 범위로 바꾸기(같은 골조 · 부등식 처리로 ★3~4) (2) y축 방향 평행이동으로 바꾸면 y=x 와의 관계가 달라져 계산이 한 겹 늘어난다(★3) (3) 접점의 좌표까지 묻기(중근 계산 추가 · ★3) (4) 평행이동을 대칭이동으로 바꾸면 감소함수가 되어 y=x 전환이 깨진다(★4).'
```

### 연습문제 STEP 1

```yaml
- id: GN-CM2-289-676
  page: 289
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    f(x)=√(2x+1)+√(2x-1) 일 때 1/f(1)+1/f(2)+…+1/f(24) 의 값.
  category: '분모의 유리화 → 일반항이 두 무리수의 차 → 망원 상쇄 → 양 끝만 남김'
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "유리화한 일반항 (√(2k+1)-√(2k-1))/2 가 이웃 항끼리 상쇄되는 망원 구조임을 발견해 24항을 양 끝 두 항으로 줄임"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "분모의 유리화를 이용한 망원합(이웃 항 상쇄)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    유리화 자체는 이 단원 전반부의 표준 절차지만, 24항을 일일이 더하지 않고 「유리화하면 상쇄된다」를 먼저 내다보는 것이 이 문제의 전부다. 상쇄 패턴을 못 보면 사실상 풀 수 없다. 패턴 발견 통찰 1개(PD d2)·일반항 k 로 다루는 추상(Mₐ2)·M_total 6 → STEP 1 출발점 ★2 에서 +1 하여 ★3. [분류 이슈] STEP 1 구역치고 요구 사고가 높다.
  tier: star_3
  mechanism_primary: '1/f(k) 유리화 → (√(2k+1)-√(2k-1))/2 → k=1~24 망원 상쇄 → (√49-√1)/2'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/289-676.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '항의 개수 24 와 √ 안의 꼴 (2x±1) 을 바꿀 수 있다. 제약: 유리화 뒤 분모가 상수가 되도록 두 √ 안의 차가 상수여야 하고(2x+1 과 2x-1 의 차 2), 마지막에 남는 √(2n+1) 이 완전제곱이 되게 n 을 잡아야 답이 유리수가 된다(n=24 → √49=7).'
    creative: '(1) 합이 주어진 값이 되도록 하는 항의 개수 n 을 묻는 역방향(I-BW 추가 · ★3~4) (2) f(x)=√(x+1)+√x 처럼 차가 1 인 꼴로 바꾸면 분모가 1 이 되어 더 쉬워진다(★2) (3) 두 √ 안의 차가 상수가 아닌 꼴(√(x²+1)+√x)로 바꾸면 망원이 깨져 유형 자체가 성립하지 않는다 — 변형 금지 지점 (4) 유리화 대신 f(x)·g(x)=상수 인 짝 함수를 주고 합을 묻기(I-SYM · ★4).'
```

```yaml
- id: GN-CM2-289-677
  page: 289
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    y=-√(6-3x)+4 의 그래프에 대한 보기 ㄱ(평행이동하면 y=-√(-3x) 와 일치) ㄴ(정의역·치역) ㄷ(제2사분면을 지나지 않는다) 중 옳은 것.
  category: '표준형 y=-√(-3(x-2))+4 로 정리 → 평행이동·정의역·치역·사분면 각각 판정'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무리함수의 평행이동·정의역과 치역·지나는 사분면 판정(보기 고르기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    √ 안을 -3(x-2) 로 묶어 표준형을 만들면 ㄱ(평행이동 일치)과 ㄴ(정의역 x≤2 · 치역 y≤4)은 바로 읽힌다. ㄷ 은 x=0 일 때의 y 값 부호만 보면 제2사분면 통과 여부가 갈린다. 세 보기 모두 이 단원에서 배운 규칙의 직접 적용이라 통찰 0. 함정은 √ 안의 음수 계수 묶기(T-부호)와 사분면 경계(T-경계) 둘. M_total 6 으로 −1 조건(M_total ≤ 5)에 걸리지 않아 STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '√ 안을 -3(x-2) 로 묶어 표준형 → ㄱ 평행이동 · ㄴ 정의역 x≤2·치역 y≤4 · ㄷ x=0 에서의 y 부호로 제2사분면 판정'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄴ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/289-677.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '√ 안의 계수 -3 과 상수 6, 밖의 상수 4 를 바꿀 수 있다. 제약: ㄷ 의 사분면 판정이 갈리려면 x=0 에서의 y 값 부호가 명확해야 하므로 (밖의 상수)² 와 (√ 안 상수)의 대소를 의도적으로 정해야 한다. √ 앞 부호를 +로 바꾸면 ㄱ·ㄴ·ㄷ 이 모두 뒤집히므로 보기 문구도 함께 고쳐야 한다.'
    creative: '(1) 보기를 「제3사분면을 지난다」·「y축과 만나는 점」으로 바꾸기(★2 유지) (2) 상수 하나를 미지수로 두고 「제2사분면을 지나지 않도록 하는 범위」로 바꾸면 I-EQV·I-CON 이 붙어 ★3(290-682 계열) (3) 네 가지 부호 조합(√ 안 계수·앞 부호)의 개형을 모두 분류하게 하면 I-MI 추가 ★3.'
```

```yaml
- id: GN-CM2-289-678
  page: 289
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 1"
  summary: |
    y=-√(x-a)+a+2 의 그래프가 점 (a, -a) 를 지날 때 이 함수의 치역. 5지선다.
  category: '점의 좌표 대입 → a 결정 → 표준형에서 치역 읽기'
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무리함수의 그래프가 지나는 점으로 상수 구하고 치역 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=a 를 대입하면 √ 안이 0 이 되어 식이 한 줄로 정리되고 a 가 바로 나온다(대입할 점이 하필 시작점이라는 것이 이 문제의 유일한 설계). 그 뒤 -√ 꼴이므로 치역은 y ≤ (시작점의 y). 표준 미정계수 대입이라 통찰 0. M_total 5 로 −1 후보이지만, 연습문제 구역 신호와 「대입 → 치역」 두 단계 구조를 보아 ★1 로 내리지 않고 ★2 유지.
  tier: star_2
  mechanism_primary: '점 (a, -a) 대입 → √ 안이 0 → -a=a+2 → a → y=-√(x+1)+1 의 치역'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/289-678.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '지나는 점의 좌표와 밖의 상수 a+2 의 꼴을 바꿀 수 있다. 제약: 대입한 점의 x좌표가 시작점(√ 안 = 0)이라야 √ 가 사라져 일차식 한 줄로 a 가 나온다. 시작점이 아닌 점을 주면 제곱 과정이 생겨 유형이 바뀐다(그때는 무연근 검사 필요).'
    creative: '(1) 치역 대신 정의역·그래프가 지나지 않는 사분면을 묻기(★2 유지) (2) 지나는 점을 시작점이 아닌 점으로 바꾸면 제곱·무연근 검사가 붙어 ★3 (3) 「모든 실수 a 에 대하여 지나는 고정점」을 묻는 항등식형으로 바꾸면 I-EQV 추가 ★3 (4) 치역이 주어진 집합이 되도록 하는 a 를 묻는 역방향(I-BW · ★3).'
```

```yaml
- id: GN-CM2-289-679
  page: 289
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    정의역 -6≤x≤0 인 y=√(ax+b)+1 (a<0) 의 치역이 3≤y≤5 일 때 상수 a, b 에 대하여 ab.
  category: 'a<0 → 감소함수 → 정의역 양 끝과 치역 양 끝의 대응 뒤집기 → 두 식 연립'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정의역이 제한된 무리함수의 치역으로 상수 정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a<0 이 주어져 있으므로 함수는 감소 — x 가 작은 끝(-6)에서 y 가 최대(5), x 가 큰 끝(0)에서 y 가 최소(3)로 대응이 뒤집힌다. 이 대응만 정하면 두 식을 각각 제곱해 a, b 가 나오는 연립 계산이다. 단조성 판단은 이 단원의 표준 규칙이므로 통찰로 세지 않고 Mₜ(T-부호)에 반영했다. 통찰 0 이지만 M_total 7 이라 −1 조건에 걸리지 않아 STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: 'a<0 → 감소 → x=0 에서 최소 3 · x=-6 에서 최대 5 → √b+1=3 과 √(-6a+b)+1=5 연립 → ab'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/289-679.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '정의역 [-6, 0] 과 치역 [3, 5], 밖의 상수 1 을 바꿀 수 있다. 제약: 두 끝점에서 √ 안이 완전제곱수가 되어야 a, b 가 정수로 떨어진다. a<0 조건을 빼면 증가·감소 두 경우로 갈려 답이 둘이 되므로(I-MI 발생) 조건을 유지하거나 의도적으로 제거해야 한다.'
    creative: '(1) a<0 조건을 지우고 「모든 순서쌍 (a, b)」를 묻기 → 케이스 분기 I-MI 추가 ★3 (2) 치역을 주고 정의역을 묻는 방향으로 뒤집기(★2 유지) (3) 밖의 상수도 미지수 c 로 두고 세 미지수 중 두 관계만 결정되게 하면 Mₐ 상승 ★3 (4) 정의역 한쪽 끝을 열린 구간으로 바꿔 최댓값 존재 여부를 따지게 하면 T-경계 강화 ★3.'
```

```yaml
- id: GN-CM2-289-680
  page: 289
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 1"
  summary: |
    y=5-2√(1-x) 의 그래프와 직선 y=-x+k 가 제1사분면에서 만나도록 하는 모든 정수 k 의 값의 합. 5지선다.
  category: '제1사분면으로 정의역 제한 → 기울기 -1 직선을 움직여 k 의 경계 두 점 → 정수 k 합'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「제1사분면에서 만난다」를 곡선 위에서 x>0 이고 y>0 인 부분(끝점 (1,5) 과 y축 쪽 (0,3) 사이의 호)으로 한정하는 조건으로 바꿈"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "교점 존재 조건을 직선 y=-x+k 를 평행이동시킬 때 k 가 그 호의 양 끝에서 갖는 값의 범위로 옮겨 읽음(대수 연립 대신 기하적 이동)"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "무리함수 그래프와 직선이 제한된 영역에서 만날 조건(정수 k 의 합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    곡선은 (1,5) 에서 시작해 왼쪽으로 내려가고, 제1사분면 부분은 y축 쪽 (0,3) 과 끝점 (1,5) 사이의 호로 한정된다. 기울기 -1 직선을 그 호 위로 지나가게 하면 k = x+y 가 호의 양 끝에서 갖는 값이 경계가 되고, 한쪽 끝은 포함·다른 쪽은 제외라 경계 판정이 실점 지점이다. 전환 통찰 2개(EQV d2 + RT d2)·M_total 8 → STEP 1 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: '제1사분면 → 곡선의 호 0<x≤1 로 한정 → 직선 위의 점에서 k=x+y → 호의 양 끝에서의 k 값이 경계 → 정수 k 합'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/289-680.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '√ 앞 계수 -2, 밖의 상수 5, √ 안의 (1-x) 를 바꿀 수 있다. 제약: 호의 양 끝에서의 k 값이 모두 정수 근처여야 「정수 k 의 합」이 깔끔하고, 한쪽 경계는 포함·다른 쪽은 제외가 되도록 시작점이 제1사분면 안(또는 축 위)에 오게 설계해야 한다. 직선의 기울기를 -1 이 아닌 값으로 바꾸면 접하는 경우가 생겨 판별식이 추가로 필요하다.'
    creative: '(1) 「제1사분면에서 서로 다른 두 점에서 만나도록」으로 바꾸면 접선 조건(판별식)이 붙어 ★4 (2) 사분면을 제4사분면으로 바꾸기(같은 골조 ★3) (3) 직선 대신 원과의 교점으로 바꾸면 단원 경계를 넘어 I-XU 추가 ★4 (4) 정수 k 의 개수가 주어진 값이 되도록 하는 상수를 묻는 역방향(I-BW · ★4).'
```

```yaml
- id: GN-CM2-290-681
  page: 290
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    A={x | x>1} 에서 A 로의 두 함수 f(x)=(x+2)/(x-1), g(x)=√(2x-1) 에 대하여 (f∘(g∘f)⁻¹∘f)(4) 의 값.
  category: '(g∘f)⁻¹=f⁻¹∘g⁻¹ 로 분해 → f∘f⁻¹ 소거 → g⁻¹(f(4))'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "합성함수의 역함수 성질로 (g∘f)⁻¹ 을 f⁻¹∘g⁻¹ 로 풀어 f∘f⁻¹ 이 항등함수로 지워지는 것을 보고 식 전체를 g⁻¹∘f 로 줄임"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "합성함수의 역함수 성질 (g∘f)⁻¹=f⁻¹∘g⁻¹ 을 이용한 함숫값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    겉보기에는 네 겹 합성이지만 (g∘f)⁻¹ 을 분해하면 f∘f⁻¹ 이 지워져 g⁻¹(f(4)) 한 줄이 된다. 분해를 못 하면 (g∘f)⁻¹ 을 직접 구해야 해 계산이 크게 늘어난다. 유리함수 f 와 무리함수 g 가 섞여 있지만 실제 계산은 f(4) 한 번과 g(x)=(그 값) 을 푸는 한 번뿐이다. 소거 착안 통찰 1개(EQV d2)·M_total 6 → STEP 1 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: '(g∘f)⁻¹=f⁻¹∘g⁻¹ → f∘f⁻¹ 소거 → g⁻¹(f(4)) → √(2x-1)=f(4) 를 풀어 x'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{5}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/290-681.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'f 의 계수와 g 의 √ 안 (2x-1), 대입값 4 를 바꿀 수 있다. 제약: 두 함수가 모두 A={x|x>1} 에서 A 로의 함수여야 하므로 치역이 집합 A 를 벗어나지 않게 상수를 잡아야 하고, f(4) 가 g 의 치역 안에 있어야 g⁻¹ 값이 존재한다.'
    creative: '(1) 합성 순서를 (g∘(f∘g)⁻¹∘g)(k) 로 바꾸면 남는 것이 f⁻¹∘g 가 되어 같은 골조(★3) (2) 소거가 일어나지 않는 배치로 바꾸면 (g∘f)⁻¹ 을 실제로 구해야 해 ★4 (3) 답이 주어지고 대입값을 묻는 역방향(I-BW · ★4) (4) f 를 일반 함수로 두고 성질만 주면 Mₐ 3 으로 올라 ★4.'
```

### 연습문제 STEP 2

```yaml
- id: GN-CM2-290-682
  page: 290
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    y=√(-x+2)+a 의 그래프가 제4사분면은 지나고 제3사분면은 지나지 않도록 하는 실수 a 의 값의 범위.
  category: '두 사분면 조건을 구간별 y 부호 조건으로 → 시작점과 y절편 두 지점의 부등식 결합'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「제4사분면을 지난다」를 0<x≤2 구간의 최솟값(시작점의 y)이 음수라는 조건으로, 「제3사분면을 지나지 않는다」를 x<0 구간의 y 하한(y절편)이 0 이상이라는 조건으로 바꿈"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "지나는 조건과 지나지 않는 조건 두 부등식을 하나의 구간으로 결합하고 각 끝의 포함·제외를 따로 판정"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "무리함수 그래프가 특정 사분면을 지날(지나지 않을) 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    그래프는 시작점 (2, a) 에서 왼쪽으로 올라간다. 제4사분면은 시작점 쪽(x가 2 근처)에서, 제3사분면은 y축 왼쪽에서 판정되므로 두 조건이 서로 다른 지점을 가리킨다는 것을 알아야 한다. 한쪽은 등호 포함, 다른 쪽은 제외라 경계 판정이 실점 지점(T-경계)이다. 전환+결합 통찰 2개(EQV d2 + CON d2)·M_total 7 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: '시작점 (2, a) 와 y절편 (0, √2+a) → 제4사분면: a<0 · 제3사분면 배제: √2+a≥0 → 두 부등식 결합'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\sqrt{2}\le a<0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/290-682.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '√ 안의 상수 2(= 시작점의 x좌표)를 바꿀 수 있다. 제약: 답의 한쪽 끝이 -√(그 상수) 이므로 상수를 완전제곱수로 잡으면 답이 정수 구간이 되어 쉬워지고, 무리수로 두면 경계 표기가 이 문제처럼 √ 꼴로 남는다. √ 앞 부호를 바꾸면 그래프 방향이 뒤집혀 두 사분면 조건 자체를 다시 써야 한다.'
    creative: '(1) 사분면 쌍을 (제1은 지나고 제2는 지나지 않도록)으로 바꾸기(같은 골조 ★3) (2) 「제1·제2사분면을 모두 지나도록」처럼 두 조건이 같은 지점을 가리키게 하면 결합이 사라져 ★2 (3) 평행이동량을 x·y 둘 다 미지수로 두면 Mₐ 상승·영역이 이차원이 되어 ★4 (4) 사분면 대신 주어진 원·삼각형 영역과 만날 조건으로 바꾸면 I-XU 추가 ★4.'
```

```yaml
- id: GN-CM2-290-683
  page: 290
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    유리함수 y=b/(x+a)+c 의 그래프가 그림과 같을 때, 무리함수 y=√(ax+b)+c 의 그래프의 개형으로 알맞은 것. 5지선다(그림 선택지).
  category: '유리함수 그래프 → 점근선·분지 위치로 a, b, c 의 부호 → 무리함수의 시작점과 방향 → 개형 선택'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "완성된 그래프(점근선 x=-a 가 y축 오른쪽, y=c 가 x축 위쪽, 왼쪽 분지가 위로 발산)에서 거꾸로 a<0, b<0, c>0 을 읽어냄"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "읽어낸 부호를 √(a(x+b/a))+c 의 시작점 (-b/a, c) 과 a<0 에 따른 왼쪽 방향으로 옮겨 다섯 개형 중 하나를 고름"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "유리함수 그래프에서 읽은 계수의 부호로 무리함수의 개형 고르기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    그래프 → 계수 부호 → 다른 함수의 개형으로 두 번 표현을 옮기는 것이 전부이고 계산은 거의 없다. 유리함수의 점근선 두 개와 분지가 놓인 쪽에서 세 상수의 부호가 모두 결정된다는 점, 그리고 무리함수에서 시작점의 x좌표가 -b/a(부호가 두 번 뒤집힘)라는 점이 함정이다. 전환 통찰 2개(BW d2 + RT d2)·M_total 7 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: '그림의 점근선 x=-a·y=c 와 분지 방향 → a<0, b<0, c>0 → √(ax+b)+c 의 시작점 (-b/a, c) 과 왼쪽 방향 → 개형'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: 'crop:fig-290-683.png'
  latex: latex-bank/gn-cm2/items/290-683.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '숫자가 아니라 부호 조합이 변수다. (a, b, c) 부호 8가지 중 어느 조합을 그림으로 줄지 바꿀 수 있다. 제약: 다섯 선택지가 서로 구별되려면 시작점의 사분면 위치와 그래프가 뻗는 방향(a 의 부호)·위아래(√ 앞 부호)가 모두 달라야 하고, 제시하는 유리함수 그래프에서 세 부호가 유일하게 읽혀야 한다(점근선 두 개 + 분지 위치).'
    creative: '(1) 방향을 뒤집어 무리함수 그래프를 주고 유리함수 개형을 고르게 하기(같은 골조 ★3) (2) 이차함수 y=ax²+bx+c 개형으로 바꾸면 판별식·축 위치가 추가돼 ★3~4 (3) 개형 대신 「지나지 않는 사분면」을 묻기(★3) (4) 그림 없이 「a<0, ab>0, c>0」처럼 부등식으로 주면 그래프 읽기 통찰이 사라져 ★2.'
```

```yaml
- id: GN-CM2-290-684
  page: 290
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    A={(x, y) | y=√(x-2)+3}, B={(x, y) | y=ax-3a+1} 일 때 A∩B≠∅ 이 되도록 하는 실수 a 의 값의 범위.
  category: '집합의 교집합 조건 → 두 그래프의 교점 존재 → 직선의 정점 (3, 1) 중심 회전 → 기울기 부호별 분기'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A∩B≠∅ 라는 집합 조건을 무리함수 곡선과 직선이 적어도 한 점에서 만난다는 그래프 조건으로 옮김"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "y=ax-3a+1 을 y=a(x-3)+1 로 정리해 a 에 관계없이 정점 (3, 1) 을 지나는 직선 다발임을 뽑아냄"
    - step: 3
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "a>0 · a=0 · a<0 세 경우로 갈라, 증가 직선은 항상 만나고 수평선은 만나지 않으며 감소 직선은 곡선의 시작점 (2, 3) 위를 지날 때만 만난다는 것을 각각 판정"
  insight_count: 3
  depth_score: 2.00
  type_id: null
  type_hint: "정점을 지나는 직선과 무리함수 그래프가 만날 조건(기울기 범위)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    집합 표현을 걷어내면 「정점 (3, 1) 을 지나는 직선이 시작점 (2, 3) 에서 출발하는 반쪽 곡선과 만날 조건」이다. 정점을 뽑아내지 못하면 제곱해서 판별식으로 가는 길이 남는데, 그 길은 무연근 검사 때문에 훨씬 길다. 기울기 부호별 세 갈래 판정과 a=-2 경계(직선이 곡선의 시작점을 지나는 순간)의 등호 포함 여부가 실점 지점이다. 전환·분기 통찰 3개(RT d2 + EQV d2 + MI d2)·M_total 7 → STEP 2 출발점 ★3 에서 +1 하여 ★4.
  tier: star_4
  mechanism_primary: '직선을 y=a(x-3)+1 로 → 정점 (3, 1) → 기울기 부호별 분기 → a<0 은 시작점 (2, 3) 통과 기준으로 경계 → a≤-2 또는 a>0'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$a\le -2$ 또는 $a>0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/290-684.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '곡선의 시작점 (2, 3) 과 직선의 정점 (3, 1) 을 바꿀 수 있다. 제약: 정점이 곡선의 오른쪽 아래에 있어야 「a>0 은 항상 만남 · a<0 은 경계 있음」이라는 이 구조가 유지된다. 정점을 곡선 위쪽에 두면 분기가 뒤집히고, 곡선 위에 두면 모든 a 에서 만나 문제가 성립하지 않는다. 경계 기울기는 (시작점과 정점을 잇는 기울기)이므로 두 점을 정수 좌표로 잡으면 경계가 정수가 된다.'
    creative: '(1) A∩B 의 원소가 정확히 두 개가 되도록 하는 a(판별식 + 무연근 검사 → I-VF 추가 ★5 후보) (2) 직선을 고정하고 곡선의 평행이동량을 미지수로 두기(같은 골조 ★4) (3) 곡선을 y=√(x-2)+3 대신 절댓값이 붙은 꼴로 바꾸면 가지가 둘로 늘어 ★5(291-688 계열) (4) 집합 표현을 없애고 그냥 「만나도록」으로 쓰면 RT 통찰이 사라져 ★3.'
```

```yaml
- id: GN-CM2-290-685
  page: 290
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    f(x)=√(3x-12) 에 대하여 2 이상의 모든 실수 x 에서 f⁻¹(g(x))=2x 를 만족시키는 g 에 대한 g(3) 의 값. 5지선다.
  category: '역함수의 정의 f⁻¹(A)=B ⟺ A=f(B) → g(x)=f(2x) → 대입'
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f⁻¹(g(x))=2x 를 역함수의 정의로 뒤집어 g(x)=f(2x) 라는 g 의 명시식으로 바꿈"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "역함수의 정의를 이용해 미지 함수 g 결정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    역함수를 실제로 구할 필요 없이 f⁻¹(□)=△ 를 □=f(△) 로 한 번 뒤집으면 g(x)=f(2x) 가 나오고, x=3 을 대입하면 끝난다. 뒤집기만 하면 한 줄이라 노동량이 거의 없다(M_total 5). 전환 통찰 1개(EQV d2)가 있어 −1 조건(통찰 0 · M_total ≤ 5)에 형식상 걸리지는 않지만, 실제 풀이 길이가 STEP 2 의 다른 문항들과 크게 차이 나서 출발점 ★3 에서 −1 하여 ★2 로 두었다.
  tier: star_2
  mechanism_primary: 'f⁻¹(g(x))=2x → g(x)=f(2x)=√(6x-12) → x=3 대입'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/290-685.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'f 의 √ 안 (3x-12), 우변의 2x, 대입값 3 을 바꿀 수 있다. 제약: 정의역 조건(x≥2 에서 2x 가 f 의 정의역 안)이 유지되어야 하고, 대입 결과 √ 안이 완전제곱수면 답이 정수·아니면 이 문제처럼 √ 꼴로 남는다.'
    creative: '(1) 반대로 g(f⁻¹(x))=2x 로 놓으면 g(x)=2f(x) 가 되어 같은 골조(★2) (2) 조건을 (f∘g)(x)=2x 로 바꾸면 g=f⁻¹∘(2x) 가 되어 역함수를 실제로 구해야 해 ★3 (3) g 의 정의역·치역까지 묻기(T-범위 강화 ★3) (4) f 를 구간별 정의 함수로 바꾸면 조각 판별이 붙어 ★3~4(291-686 계열).'
```

```yaml
- id: GN-CM2-291-686
  page: 291
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    x≥3 에서 √(2x-6)+1, x<3 에서 -√(-x+3)+1 로 정의된 f 에 대하여 f⁻¹(3)+f⁻¹(-2) 의 값.
  category: 'f⁻¹(k) → f(x)=k 로 되돌리기 → 두 조각의 치역으로 어느 조각인지 판별 → 각각 풀기'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f⁻¹(k) 의 값을 f(x)=k 를 만족시키는 x 로 되돌려 역함수 식을 구하지 않고 푸는 표준 전환"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 조각의 치역이 y≥1 과 y<1 로 갈리는 것을 보고 3 은 위쪽 조각, -2 는 아래쪽 조각에서만 나온다는 것을 판별(반대 조각을 대입하면 해가 없음)"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "구간별로 정의된 무리함수의 역함숫값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    역함수 식을 구간별로 다 구하는 대신 f(x)=3, f(x)=-2 로 되돌리고, 어느 조각을 쓸지는 조각별 치역(위쪽 조각 y≥1 · 아래쪽 조각 y<1)으로 가른다. 조각을 잘못 고르면 무연근이 나오거나 해가 없어지고, 아래쪽 조각은 √ 앞 부호까지 음수라 이중 함정이다. 전환+분기 통찰 2개(EQV d1 + MI d2)·M_total 7 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: 'f⁻¹(3)·f⁻¹(-2) → f(x)=3, f(x)=-2 → 조각별 치역(y≥1 / y<1)으로 조각 선택 → 각각 제곱해 풀고 정의역 확인 → 합'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/291-686.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 조각의 √ 안 계수·평행이동량과 묻는 두 값 (3, -2) 를 바꿀 수 있다. 제약: 경계 x=3 에서 두 조각의 값이 같아야(둘 다 1) f 가 하나의 함수로 이어지고 역함수가 존재한다. 묻는 두 값은 각각 한 조각의 치역에만 들어가야 하며, 대입 후 √ 안이 완전제곱수가 되게 잡아야 답이 정수가 된다.'
    creative: '(1) f⁻¹(k) 대신 f⁻¹ 의 식을 구간별로 모두 구하게 하기(같은 도구·Mₛ 상승 ★3) (2) 경계에서 값이 어긋나게 만들고 「역함수가 존재하도록 하는 상수」를 묻기(I-CON 추가 ★4) (3) 한 조각을 증가·다른 조각도 증가로 바꿔 일대일이 깨지지 않게 하면서 f⁻¹(k) 의 해가 둘이 되는 경우를 만들면 I-VF 추가 ★4 (4) f⁻¹(3)·f⁻¹(-2) 의 곱·차로 바꾸기(★3 유지).'
```

```yaml
- id: GN-CM2-291-687
  page: 291
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    정의역이 {x | x≥2} 이고 꼭짓점이 (2, 3) 인 이차함수 y=f(x) 의 그래프(그림)에 대하여 6≤x≤12 에서 y=f⁻¹(x) 의 최댓값.
  category: '그림의 꼭짓점·통과점으로 f 복원 → f 증가 ⟹ f⁻¹ 증가 → x=12 에서 최대 → f(t)=12'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그림에서 꼭짓점 (2, 3) 과 통과점 (3, 4) 를 읽어 f(x)=a(x-2)²+3 의 a 를 결정하는 그래프→식 전환"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f 가 정의역에서 증가하므로 f⁻¹ 도 증가 — 최댓값을 구간의 오른쪽 끝 f⁻¹(12) 로 옮기고 이를 f(t)=12 로 되돌림"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "정의역이 제한된 이차함수의 역함수(무리함수)의 최대·최소"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    무리함수 단원의 문항이지만 f⁻¹ 이 무리함수라는 점이 숨어 있는 형태다 — f⁻¹ 의 식을 실제로 구해도 되고, 단조성만 써서 f(t)=12 한 번으로 끝내도 된다. 그림에서 a 를 결정하는 단계(통과점 (3, 4))를 놓치면 진행이 막힌다. 그래프→식 전환과 단조성 전환 통찰 2개(RT d2 + EQV d1)·M_total 6 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: '그림의 (2, 3)·(3, 4) → f(x)=(x-2)²+3 (x≥2) → f⁻¹ 증가 → 최댓값 f⁻¹(12) → (t-2)²+3=12 의 t≥2 인 해'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지"
  figure: 'crop:fig-291-687.png'
  latex: latex-bank/gn-cm2/items/291-687.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '꼭짓점 (2, 3)·통과점 (3, 4)·구간 [6, 12] 를 바꿀 수 있다. 제약: 구간 [6, 12] 가 f 의 치역 [3, ∞) 안에 들어가야 f⁻¹ 이 정의되고, 구간의 끝값에서 (x-꼭짓점 y)/a 가 완전제곱수여야 답이 정수가 된다. 그림의 통과점은 a 를 유일하게 정하는 정보이므로 반드시 격자점으로 둔다.'
    creative: '(1) 최댓값 대신 최솟값·최댓값과 최솟값의 합을 묻기(★3 유지) (2) 정의역을 x≤2 쪽으로 바꾸면 f 가 감소하여 f⁻¹ 도 감소 — 최대·최소 대응이 뒤집히는 함정(★3) (3) f⁻¹ 의 식을 직접 구해 무리함수의 그래프를 그리게 하면 Mₛ 상승 ★3 (4) 꼭짓점 좌표를 미지수로 두고 최댓값이 주어진 값이 되도록 하는 조건을 묻는 역방향(I-BW · ★4).'
```

### 연습문제 실력 UP

```yaml
- id: GN-CM2-291-688
  page: 291
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    y=√|x-1| 의 그래프와 직선 y=x+k 가 서로 다른 세 점에서 만나도록 하는 실수 k 의 값의 범위.
  category: '절댓값으로 두 가지 분해 → 가지별 교점 개수 배분(2+1) → 판별식과 경계 조건 결합'
  M: {s: 3, k: 2, a: 2, t: 3}
  M_total: 10
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "√|x-1| 를 x≥1 쪽 증가 가지와 x<1 쪽 감소 가지로 갈라 x=1 에서 이어붙은 좌우 대칭 그래프로 보기"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「서로 다른 세 점」을 기울기 1 직선이 감소 가지와 1개 · 증가 가지와 2개로 만나야 한다는 개수 배분으로 옮겨 각 가지에 다른 조건(감소 가지는 시작점 위치, 증가 가지는 판별식)을 적용"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "제곱해서 얻은 근이 각 가지의 정의역과 우변 ≥ 0 을 만족하는지 되돌려 검사해 조건을 만족하지 않는 k 구간을 기각"
  insight_count: 3
  depth_score: 2.00
  type_id: null
  type_hint: "절댓값이 있는 무리함수 그래프와 직선의 교점 개수 조건"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    그래프가 x=1 을 기준으로 두 가지로 갈리고 직선의 기울기가 1 이어서, 감소 가지와는 많아야 한 점·증가 가지와는 최대 두 점에서 만난다. 세 점 = 1 + 2 라는 배분을 먼저 정하지 않으면 조건을 쓸 수 없다. 감소 가지 쪽은 직선이 x=1 에서 곡선 위에 있어야 한다는 부등식, 증가 가지 쪽은 판별식 > 0 과 근의 유효성 검사가 각각 붙고 두 조건의 교집합이 답이다. 통찰 3개(MI d2 + RT d2 + VF d2)·M_total 10 → 실력 UP 출발점 ★4 유지. ★5 는 novelty_score 0 인 정독 자산 관례상 부여하지 않았다.
  tier: star_4
  mechanism_primary: '√|x-1| 좌우 두 가지 분해 → 세 점 = 감소 가지 1개 + 증가 가지 2개 → 각각 시작점 부등식·판별식 > 0 → 무연근 기각 후 교집합'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$-1<k<-\dfrac{3}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/291-688.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '절댓값 안의 평행이동량 1 과 직선의 기울기 1 을 바꿀 수 있다. 제약: 기울기가 1 이라야 증가 가지에서 두 점 교차가 가능한 좁은 k 구간이 생긴다(기울기가 너무 크면 항상 한 점, 너무 작으면 접점이 생기지 않는다). 판별식 경계 k=-3/4 는 기울기와 평행이동량으로 결정되므로 바꾸면 답의 분수가 함께 바뀐다. 교점 개수를 3 으로 유지하려면 x=1 에서의 직선 값 부호가 경계를 만든다.'
    creative: '(1) 교점 개수를 1개·2개·4개로 바꿔 각각의 k 범위를 묻기(같은 골조 ★4) (2) √|x-1| 대신 |√(x-1)-1| 처럼 절댓값을 바깥에 두면 가지 모양이 달라져 재분석 필요(★4~5) (3) 직선을 정점을 지나는 직선 다발로 바꾸면 290-684 의 정점 통찰과 결합돼 ★5 후보 (4) 「세 교점이 삼각형을 이룰 조건」으로 바꾸면 I-XU 추가 ★5.'
```

```yaml
- id: GN-CM2-291-689
  page: 291
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    f(x)=√(2x-a)+2 의 그래프와 역함수 y=f⁻¹(x) 의 그래프의 두 교점 사이의 거리가 2√2 일 때 상수 a.
  category: '역함수 교점 → y=x 위 → 이차방정식의 두 근 → 두 점 거리 = √2·|근의 차| → 근과 계수의 관계'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f 가 증가함수이므로 f 와 f⁻¹ 의 교점을 y=x 위의 점으로 한정해 f(x)=x 한 식으로 환원"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 교점이 모두 y=x 위이므로 기하적 거리 2√2 를 대수적 조건 |근의 차|=2 로 옮기고, 근을 구하지 않은 채 근과 계수의 관계로 (합)²-4(곱) 을 써서 a 를 결정"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "역함수 그래프와의 두 교점 사이의 거리로 상수 정하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    288-e8 의 골조(교점 → y=x → 제곱)에 「두 근을 직접 구하지 않고 거리 조건을 근과 계수의 관계로 처리」가 얹힌 역방향 문항이다. 거리가 √2·|근의 차| 라는 대응을 세우지 못하면 a 를 문자로 둔 채 근을 구해야 해 계산이 크게 늘어난다. 전환 통찰 2개(EQV d2 + RT d2)·매개변수 a·M_total 7 → 실력 UP 출발점 ★4 유지(★3 후보였으나 근과 계수 결합과 역방향 설정을 보아 구역 신호를 유지).
  tier: star_4
  mechanism_primary: '교점을 y=x 위로 → √(2x-a)+2=x 제곱 → 이차방정식의 두 근 → 거리 √2·|근의 차|=2√2 → (합)²-4(곱)=4 → a'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/291-689.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '√ 안의 계수 2, 밖의 상수 2, 주어진 거리 2√2 를 바꿀 수 있다. 제약: 제곱해 얻은 이차방정식이 서로 다른 두 실근을 갖고 두 근이 모두 정의역(√ 안 ≥ 0)과 우변 ≥ 0 안에 있어야 실제 교점이 둘이다. 거리는 반드시 √2 의 배수여야 두 점이 y=x 위라는 구조와 맞고, (합)²-4(곱) 이 완전제곱이 되게 잡아야 a 가 정수로 떨어진다.'
    creative: '(1) 거리 대신 두 교점의 중점·두 교점과 원점이 이루는 삼각형의 넓이를 조건으로 주기(★4 유지) (2) 두 교점이 존재하도록 하는 a 의 범위를 묻기(판별식 + 무연근 → I-VF 추가 ★4~5) (3) √ 안의 계수를 미지수로 하나 더 두면 미지수 2개·조건 2개로 Mₐ 상승 ★5 후보 (4) 교점이 한 점(접함)이 되도록 바꾸면 288-675 와 같은 ★3 으로 내려간다.'
```

```yaml
- id: GN-CM2-291-690
  page: 291
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    f(x)=√(4x+5) 와 g(x)=(1/4)(x²-5) (x≥0) 의 그래프의 교점을 A, f 의 그래프 위의 점 B(1, 3) 을 지나고 기울기가 -1 인 직선이 g 의 그래프와 만나는 점을 C 라 할 때 삼각형 ABC 의 넓이(그림).
  category: 'f 와 g 가 서로 역함수(y=x 대칭) → A 는 y=x 위 · C 는 B 의 대칭점 → 세 꼭짓점 좌표로 넓이'
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "g 가 f 의 역함수(y=√(4x+5) 를 x 에 대해 푼 식)임을 알아채고, 기울기 -1 직선이 y=x 에 수직이므로 C 가 B(1, 3) 의 y=x 대칭점 (3, 1) 임을 바로 얻음"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "교점 A 를 두 무리·이차식의 연립 대신 y=x 위의 점으로 한정해 f(x)=x 한 식으로 구함"
  insight_count: 2
  depth_score: 2.50
  type_id: null
  type_hint: "서로 역함수인 두 그래프의 y=x 대칭을 이용한 도형의 넓이"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 그래프가 서로 역함수라는 것과 기울기 -1 직선이 y=x 에 수직이라는 두 사실을 겹쳐 보면, A 는 f(x)=x 의 해에서, C 는 B 의 대칭점에서 즉시 나오고 넓이는 세 점 좌표 계산으로 끝난다. 대칭을 못 보면 무리식과 이차식을 직접 연립해야 해 A 를 구하는 데서 막힌다. 대칭 통찰 depth 3 + 교점 전환 통찰 1개 → 실력 UP 출발점 ★4 유지. [분류 이슈] C 는 직선과 g 를 직접 연립해도 쉽게 나와 대칭 통찰 없이도 부분 진행이 되므로 ★5 로 올리지 않았다.
  tier: star_4
  mechanism_primary: 'g=f⁻¹ 확인 → A 는 y=x 위(f(x)=x) → 기울기 -1 직선 ⟂ y=x 이므로 C 는 B 의 대칭점 → 세 꼭짓점으로 삼각형 넓이'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$6$'
  answer_source: "답지"
  figure: 'crop:fig-291-690.png'
  latex: latex-bank/gn-cm2/items/291-690.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '√ 안의 (4x+5) 와 점 B 의 좌표를 바꿀 수 있다. 제약: g 는 반드시 f 를 x 에 대해 푼 식이어야 대칭 구조가 성립하고(계수가 어긋나면 유형이 무너진다), B 는 f 의 그래프 위의 격자점이어야 대칭점 C 도 격자점이 된다. f(x)=x 가 정수해를 갖도록 √ 안의 상수를 잡아야 A 의 좌표가 정수다.'
    creative: '(1) 넓이 대신 선분 BC 의 길이·삼각형 ABC 의 둘레를 묻기(★4 유지) (2) B 를 f 위가 아닌 임의의 점으로 두면 대칭 논증이 한 겹만 남아 ★3 (3) 직선의 기울기를 -1 이 아닌 값으로 바꾸면 대칭 통찰이 무효가 되어 직접 연립 ★4(계산형) (4) 점 A, B, C 에 원점을 더한 사각형의 넓이·B 를 움직일 때 넓이의 최댓값으로 확장하면 ★5 후보.'
```

## 표본 판정 요약 (19문)

- ★ 분포: ★1 0 · ★2 7 · ★3 8 · ★4 4 · ★5 0
- 통찰형 16 · 절차형 3(289-677 · 289-678 · 289-679 — 모두 STEP 1 의 그래프 성질·미정계수 문항) · premium 0
- M_total 분포: 5 → 5문 · 6 → 4문 · 7 → 8문 · 8 → 1문 · 10 → 1문
- 통찰 유형 빈도: I-EQV 10 · I-RT 5 · I-MI 3 · I-SYM 2 · I-CON 1 · I-PD 1 · I-BW 1 · I-VF 1 (SC·XU 없음)
- 구역별: 필수·발전 예제 4문(★2 3 · ★3 1) · STEP 1 6문(★2 3 · ★3 3) · STEP 2 6문(★2 1 · ★3 4 · ★4 1) · 실력 UP 3문(★4 3)
- type_hint 상위 5: 「무리함수의 그래프와 역함수의 그래프의 교점」 2 · 「역함수 관계인 두 그래프(x↔y 교환·y=x 대칭)」 2 · 「무리함수 그래프와 직선이 만날 조건」 3(289-680 · 290-684 · 291-688) · 「정의역·치역·사분면 판정」 3(289-677 · 289-678 · 289-679) · 「역함수의 정의로 미지 함수·역함숫값 구하기」 3(290-681 · 290-685 · 291-686)
- 그림 3문(`crop:fig-290-683.png` · `crop:fig-291-687.png` · `crop:fig-291-690.png`) · 선택지 문항 4문(289-678 · 289-680 · 290-683 · 290-685) · 보기 고르기 1문(289-677)
- 대상층: 중하위권 3 · 중위권 8 · 중상위권 6 · 상위권 2
- 이 조각의 축: **「y=x 로 옮기기」** 가 19문 중 6문(288-e8 · 288-673 · 288-674 · 288-675 · 291-689 · 291-690)의 공통 골조이고, 나머지 축은 **「직선·영역과 만날 조건」**(289-680 · 290-682 · 290-684 · 291-688)과 **「역함수의 정의로 되돌리기」**(290-681 · 290-685 · 291-686)다. ★4 4문은 모두 뒤 두 축에서 나왔다.
- 벤더 신호 대비 조정: +1 한 문항 5(288-675 · 289-676 · 289-680 · 290-681 · 290-684) · −1 한 문항 1(290-685) · 2단 이상 어긋난 문항 0

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-289-676 | STEP 1 구역인데 유리화 후 망원 상쇄를 내다보는 발견이 풀이의 전부다. 구역 신호(★2)보다 요구 사고가 높아 ★3 으로 올렸으나, 개념원리가 이 문항을 STEP 1 에 둔 것은 「유리화」가 단원 전반부의 표준 도구이기 때문일 수 있다 | ★2 / ★3 |
| GN-CM2-290-685 | STEP 2·교육청 기출인데 역함수 정의 한 번 뒤집으면 한 줄로 끝난다(M_total 5). 구역 신호와 1단 어긋나게 ★2 로 내렸다 | ★2 / ★3 |
| GN-CM2-291-689 | 골조가 288-e8(★2)과 같고 근과 계수의 관계만 얹혔다. M_total 7·통찰 2 로는 ★3 이 자연스러우나 실력 UP 구역 신호를 존중해 ★4 로 두었다 | ★3 / ★4 |
| GN-CM2-291-690 | 통찰 2개 중 I-SYM 이 depth 3 이라 v3.8 ★5 자격 조건(통찰 3개 이상 + SC/VF/SYM/XU)에 근접한다. 다만 C 는 직선과 g 를 직접 연립해도 쉽게 나와 대칭 없이 부분 진행이 가능하고, 정독 자산은 `novelty_score` 를 0 으로 고정하므로 §2.14 게이트와 충돌한다 → ★4 로 둠 | ★4 / ★5 |
| GN-CM2-288-674 | x↔y 교환식을 대칭으로 읽는 것을 I-SYM 으로 셌으나, 「x 와 y 를 바꾼 식 = 역함수」는 앞 단원의 표준 정의이므로 I-EQV d1(또는 통찰 없음)로 볼 여지가 있다. 이 단원 전체에서 한 방향으로 정해 두어야 함 | ★2 (통찰형/절차형 경계) |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ⑴ 「무리함수 ↔ 역함수 그래프의 교점」(base ★2) — 교점을 y=x 로 옮기는 단일 전환이 전부. ⑵ 「그 교점이 접할 조건·두 교점 사이의 거리」(base ★3~4) — ⑴ 위에 판별식 또는 근과 계수의 관계가 얹혀 실점 지점이 달라지므로 하위 유형이 아니라 별개 유형으로 세우는 편이 낫다(288-675 · 291-689). ⑶ 「무리함수 그래프와 직선이 (제한 영역에서) 만날 조건」(base ★3~4) — 정점 다발·사분면 제한·절댓값 가지 분해라는 서로 다른 변주가 있어 ★3(289-680 · 290-682)과 ★4(290-684 · 291-688)를 가르는 기준을 *제한 조건의 개수*로 두면 일관된다. ⑷ 「역함수의 정의로 되돌리기」(base ★2~3) — 290-685(미지 함수 결정) · 291-686(구간별 조각 판별) · 290-681(합성의 역함수 분해)은 도구가 같고 얹히는 것만 다르므로 한 유형 + 파라미터로 묶을 수 있다.
- **통합해도 될 유형**: 288-e8 · 288-673 · 288-674 는 √ 앞 부호와 제시 형식(역함수 / x↔y 교환식)만 다르고 골조가 같으므로 **base ★2 단일 유형 + 제시 형식 파라미터**로 통합한다. 289-677 · 289-678 · 289-679 도 「표준형으로 정리 → 정의역·치역·사분면·미정계수」 한 유형으로 묶고, 무엇을 묻는지만 파라미터로 둔다.
- **교차 참조**: 이 조각은 앞 단원 「역함수」(교점의 y=x 성질 · 합성의 역함수 · 구간별 함수의 역함수)와 공통수학1 「이차방정식」(판별식 · 근과 계수의 관계)에 강하게 의존한다. 290-683 은 같은 단원 계열의 「유리함수의 그래프」에서 오고, 291-687 은 「이차함수의 최대·최소」에서 온다. 카탈로그에서는 이 유형들을 그 단원 유형의 **무리함수 결합 변형**으로 걸어 두면 재사용이 쉽다.
- **이 단원의 base ★ 상한**: 19문 전수에서 ★5 가 없다. ★5 슬롯은 이 조각의 유형만으로는 만들 수 없고, 291-688(가지 분해 + 개수 배분 + 무연근 기각)에 정점 다발이나 삼각형 조건을 더하거나, 291-690(y=x 대칭 + 도형)을 움직이는 점의 최댓값으로 확장해 I-SC·I-VF 를 실제로 요구하게 만들어야 한다.
