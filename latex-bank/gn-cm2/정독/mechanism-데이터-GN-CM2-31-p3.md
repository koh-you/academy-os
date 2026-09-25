---
name: mechanism-데이터-GN-CM2-31-p3
description: 개념원리 공통수학2 31 유리함수(3/3 · 270-e14~273-646) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: 31 유리함수
  unit_code: CM2-31
  part: "3/3"
  extract_range: "270~273쪽 · 270-e14~273-646"
  total_problems: 20
  unit_total: 47
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 31 유리함수 (3/3) 정독 데이터 (v1.0)

이 파일은 31단원(유리함수) 마지막 조각 20문(270~273쪽 · 270-e14~273-646)을 다룬다. 구역은 넷이다 — 「필수·발전 예제」 4문(필수 예제 1 + 그 아래 확인체크 3 · 모두 **역함수** 주제) · 「연습문제 STEP 1」 6문 · 「연습문제 STEP 2」 5문 · 「연습문제 실력 UP」 5문. 단원 앞 조각에서 다룬 점근선·평행이동·최대최소가 여기서는 **역함수·합성·그래프 판정**과 섞여 나오고, 실력 UP 에서 절댓값 대칭·산술기하평균·교점 개수 조건으로 올라간다. 그림 문항은 2문(272-639 그래프 개형 · 273-642 반비례 두 곡선), 선택지 문항은 4문(271-633 · 272-637 · 273-643 · 273-646)이다.

벤더 난이도 신호와 이 파일의 출발점 규약: 「필수」 예제 ★2 · tag 「확인체크」는 통번호 익히기의 ★1 과 구분해 바로 위 예제와 같은 출발점 ★2 로 두었다(예제의 유제 배치). 「연습문제 STEP 1」 ★2 · 「STEP 2」 ★3 · 「실력 UP」 ★4 를 출발점으로 삼고 M_total·통찰로 ±1 조정했다. 이 단원에서 반복되는 **표준형 변형**(c + k/(x-h) 로 고쳐 중심과 k 를 읽기)과 **역함수 계산**(y 에 대해 풀어 x·y 교환)은 단원의 표준 절차이므로 통찰로 세지 않고 Mₛ·Mₖ 에 반영했다. 대신 ⑴ 역함수 그래프 위의 점을 좌표 교환으로 옮기기(I-EQV) ⑵ y=x 대칭 ⟺ 서로 역함수(I-EQV) ⑶ 그래프 개형에서 계수 부호 역추적(I-RT) ⑷ 합성의 주기 발견(I-PD) ⑸ 절댓값 그래프의 y축 대칭을 원점 대칭으로 환원(I-SYM) ⑹ 산술·기하평균 결합(I-XU) ⑺ 교점 개수 분기와 치역 밖 값 기각(I-MI·I-VF)을 통찰로 셌다. 결과적으로 예제·STEP 1 은 대체로 ★2, STEP 2 는 ★3, 실력 UP 은 ★4 로 갈렸고 273-646 하나만 ★5 다.

이 파일의 주 용도는 숫자 변형·창의 변형의 **원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM2-270-e14
  page: 270
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    유리함수 f(x)=(ax+3)/(x-1) 의 역함수가 자기 자신(f=f^{-1})일 때 상수 a 의 값.
  category: '역함수 계산 → 원 함수와 계수 비교 → a'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '유리함수의 역함수 — f=f^{-1}(자기 역함수) 조건에서 상수 결정'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y 에 대해 풀어 f^{-1}(x)=(x+3)/(x-a) 를 얻고 f 와 계수를 비교하면 a=1. (ax+b)/(cx+d) 가 자기 역함수일 조건이 a+d=0 임을 알면 한 줄이지만, 역함수를 직접 구하는 표준 절차로도 같은 길이라 통찰로 세지 않았다. 필수 예제 출발점 ★2 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: 'y=(ax+3)/(x-1) 을 x 에 대해 풀어 f^{-1}=(x+3)/(x-a) → f 와 계수 비교 → a=1'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a=1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/270-e14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '분자 상수 3 과 분모 상수 -1 을 바꿀 수 있다. 자기 역함수 조건은 (x 계수)+(분모 상수)=0 만 좌우하므로 분모를 x-k 로 바꾸면 답이 a=k 로 따라간다. 제약: ad-bc≠0(상수함수 금지) · 분모 x 계수가 1 이 아니면 정규화 단계가 하나 늘어난다.'
    creative: '(1) f=f^{-1} 대신 (f∘f)(x)=x 로 조건을 주기(같은 골조 ★2) (2) 그래프가 직선 y=x 에 대하여 대칭이라는 기하 조건으로 주면 I-EQV 한 개 추가 ★2~3 (3) 자기 역함수가 되는 a 가 존재하지 않는 형태를 섞어 존재 판정까지 묻기 ★3.'
```

```yaml
- id: GN-CM2-270-628
  page: 270
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    유리함수 f(x)=(ax+b)/(2x+c) 의 역함수가 f^{-1}(x)=(-x+3)/(2x-1) 일 때 상수 a, b, c.
  category: '주어진 역함수를 다시 뒤집기 → 원 함수 → 계수 비교'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '역함수가 주어질 때 원래 유리함수의 계수 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    역함수의 역함수는 자기 자신이므로 주어진 f^{-1} 을 한 번 더 뒤집으면 f(x)=(x+3)/(2x+1) 이 나오고 계수 비교로 a=1, b=3, c=1. 분모 x 계수가 이미 2 로 맞아 정규화가 필요 없다. 확인체크지만 바로 위 예제와 같은 골조라 출발점 ★2 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: 'y=(-x+3)/(2x-1) 을 x 에 대해 풀어 f(x)=(x+3)/(2x+1) → 계수 비교 → a=1, b=3, c=1'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a=1$, $b=3$, $c=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/270-628.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '역함수 쪽 계수 (-1, 3, 2, -1) 을 바꿀 수 있다. 제약: 뒤집은 결과의 분모 x 계수가 문제에 적힌 2 와 맞아야 하고, 맞지 않으면 분자·분모에 같은 수를 곱하는 정규화가 필요하므로 계수가 정수로 떨어지는 조합만 쓴다.'
    creative: '(1) a, b, c 대신 f(2) 같은 함숫값 하나를 묻기 ★2 (2) 역함수를 식이 아니라 점근선 두 개로 주면 I-RT 한 개 추가 ★3 (3) f=f^{-1} 이 되도록 c 를 정하게 하면 270-e14 골조로 이동 ★2.'
```

```yaml
- id: GN-CM2-270-629
  page: 270
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x)=(2x+1)/(x-2) 일 때 (f∘g)(x)=x 를 만족시키는 g 에 대하여 (g∘g)(3).
  category: '(f∘g)(x)=x → g=f^{-1} → 함숫값 두 번'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '(f∘g)(x)=x 에서 g=f^{-1} 임을 이용한 함숫값 계산'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (f∘g)(x)=x 에서 g=f^{-1} 이고, 이 f 는 뒤집어도 자기 자신이라 g=f 다. 그래서 g∘g 는 항등함수 — 알아채면 즉답이지만 g(3)=7, g(7)=3 을 직접 계산해도 두 줄이라 통찰로 세지 않았다. 확인체크 ★2 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: 'g=f^{-1}=(2x+1)/(x-2)=f → g(3)=7 → g(7)=3'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/270-629.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수 (2,1,1,-2) 와 대입값 3 을 바꿀 수 있다. 제약: 자기 역함수 구조를 유지하려면 (분자 x 계수)+(분모 상수)=0 이어야 하고, 이 구조를 깨면 g∘g 가 항등이 아니게 되어 답이 달라진다. 대입값은 정의역 제외값 2 를 피한다.'
    creative: '(1) (g∘g∘g)(3) 처럼 합성 횟수를 늘리면 주기 착안이 필요해 I-PD 추가 ★3 (271-634 골조) (2) f 를 자기 역함수가 아닌 함수로 바꾸면 g 를 실제로 구해 두 번 대입해야 해 계산량 상승 ★2~3 (3) g 의 점근선이나 정의역을 묻기 ★2.'
```

```yaml
- id: GN-CM2-270-630
  page: 270
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x)=(ax+b)/(-x+2) 의 그래프와 그 역함수의 그래프가 모두 점 (3, -9) 를 지날 때 상수 a, b.
  category: '역함수 그래프 통과 → 원 함수가 (-9, 3) 통과 → 일차 연립'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "역함수의 그래프가 (3,-9) 를 지난다는 조건을 원 함수가 (-9,3) 을 지난다로 좌표 교환해 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '원 함수와 역함수의 그래프가 같은 점을 지날 조건에서 계수 결정'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    역함수를 구하지 않고 「역함수 그래프 위의 점은 원 함수에서 좌표를 맞바꾼 점」이라는 동치 변환으로 f(3)=-9, f(-9)=3 두 식을 얻는 것이 핵심(I-EQV d1). 그 뒤는 3a+b=9, -9a+b=33 일차 연립 두 줄. 확인체크 출발점 ★2 · 통찰 1개(d1)라 +1 조건(2개 이상 또는 d3) 미달 → ★2 유지.
  tier: star_2
  mechanism_primary: 'f(3)=-9 와 f(-9)=3 → 3a+b=9, -9a+b=33 연립 → a=-2, b=15'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a=-2$, $b=15$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/270-630.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '통과점 (3,-9) 와 분모 -x+2 의 상수를 바꿀 수 있다. 제약: 두 조건이 a, b 에 대한 일차 연립이 되어야 하고, 통과점의 x 좌표가 분모를 0 으로 만들면 안 되며, 해가 정수로 떨어지도록 계수를 맞춘다.'
    creative: '(1) 통과점을 y=x 위의 점(예: (3,3))으로 주면 식이 하나로 줄어 조건이 부족해지므로 점근선 하나를 더 주는 형태로 ★2 (2) 통과점 하나 + 점근선 하나를 섞으면 I-RT 추가 ★3 (3) 두 그래프의 교점 개수를 묻는 형태로 확장하면 y=x 위·밖 교점 논의가 붙어 ★3~4.'
```

### 연습문제 STEP 1

```yaml
- id: GN-CM2-271-631
  page: 271
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    두 유리함수 y=(ax+3)/(2x+1), y=(x-2)/(3x+b) 의 그래프의 점근선이 일치할 때 ab.
  category: '각 함수의 점근선 두 개 → 일치 조건 → a, b'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '두 유리함수의 점근선 일치 조건'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    점근선 공식(x=-d/c, y=a/c)을 두 번 적용해 x=-1/2 와 x=-b/3, y=a/2 와 y=1/3 을 각각 맞추면 b=3/2, a=2/3 이고 곱이 1. 통찰 없음 · M_total 6 · STEP 1 출발 ★2 → ★2. 분수 계수 정리에서 표기 실수만 주의(T-표기).
  tier: star_2
  mechanism_primary: 'x=-1/2=-b/3 → b=3/2 · y=a/2=1/3 → a=2/3 → ab=1'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/271-631.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상수 3, -2 와 분모 계수 2, 3 을 바꿀 수 있다. 제약: 두 함수 모두 ad-bc≠0 이어야 하고(상수함수가 되면 점근선이 없다), ab 가 깔끔한 값으로 떨어지도록 수직·수평 점근선 두 등식을 동시에 만족하는 조합을 고른다.'
    creative: '(1) 점근선 일치 대신 「평행이동으로 겹쳐진다」로 주면 k 값 비교까지 붙어 ★3 (2) 점근선의 교점이 특정 직선 위에 있을 조건으로 바꾸면 I-RT 추가 ★3 (3) a 만 주고 b 를 구하게 하면 단계가 절반으로 줄어 ★1~2.'
```

```yaml
- id: GN-CM2-271-632
  page: 271
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    -1≤x≤1 에서 y=(k-4x)/(x+2) 의 최댓값이 1 이고 최솟값이 m 일 때 k+m. (k 는 -8 보다 큰 상수)
  category: '표준형 변형 → k+8>0 으로 감소 판정 → 구간 양 끝값'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '제한된 구간에서 유리함수의 최대·최소(미정 상수 포함)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y=-4+(k+8)/(x+2) 로 고치면 조건 k>-8 이 분자 상수의 부호를 양으로 확정해 구간 전체에서 감소함수가 된다. 최댓값은 왼쪽 끝 x=-1 에서 k+4=1 → k=-3, 최솟값은 x=1 에서 m=-7/3. 단조성 판정은 이 유형의 표준 절차라 통찰로 세지 않고 T-부호(k+8 의 부호)·T-경계(닫힌 구간 끝값)로 Mₜ 에 반영해 M_total 8. STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: 'y=-4+(k+8)/(x+2) → k+8>0 이라 감소 → x=-1 에서 최대 k+4=1 → k=-3 → x=1 에서 m=-7/3'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{16}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/271-632.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '구간 [-1,1], 분모 x+2, 분자 x 계수 -4, 최댓값 1 을 바꿀 수 있다. 제약: 구간이 점근선 x=-2 를 포함하면 최대·최소가 없어지고, k 의 범위 조건이 분자 상수 부호를 한쪽으로 고정해야 증감이 확정된다.'
    creative: '(1) k 의 범위 조건을 빼면 k<-8 갈래까지 나눠야 해 I-MI 추가 ★3 (2) 최댓값과 최솟값의 합·곱을 주고 k 를 역으로 구하게 하면 I-BW ★3 (3) 구간이 점근선을 걸치게 두고 최대·최소의 존재 여부를 판정하게 하면 ★3~4.'
```

```yaml
- id: GN-CM2-271-633
  page: 271
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    y=(x+1)/(2x-4) 에 대한 다섯 설명(점근선 · 정의역과 치역 · 모든 사분면 통과 · 대칭인 두 직선 · 평행이동의 원형) 중 옳지 않은 것. 5지선다.
  category: '표준형 변형 → 중심과 k 확인 → 보기 다섯 개 각각 판정'
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '유리함수 그래프 성질 종합 판정(점근선·정의역·치역·대칭축·평행이동)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y=1/2+(3/2)/(x-2) 한 번으로 점근선·정의역·치역·평행이동 원형(①②⑤)이 동시에 결정되고, 사분면 통과(③)는 두 절편 부호로 확인된다. 대칭인 직선은 중심 (2,1/2) 을 지나는 기울기 ±1 직선이라 y=x-3/2, y=-x+5/2 이고 ④ 만 어긋난다. 보기 다섯을 모두 점검해 Mₛ 3 · M_total 8 이지만 각 판정이 표준이라 통찰 0 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: 'y=1/2+(3/2)/(x-2) → 중심 (2,1/2)·k=3/2 → 대칭축은 y=x-3/2, y=-x+5/2 이므로 ④ 가 틀림'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/271-633.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수 (1,1,2,-4) 를 바꿔 중심과 k 를 옮길 수 있다. 제약: 사분면 보기가 참이 되려면 k>0 이고 중심이 제1사분면에 있어야 하며, 대칭축 보기는 중심 좌표만으로 정해지므로 어느 보기를 오답으로 둘지 먼저 정하고 수를 맞춘다.'
    creative: '(1) 옳은 것만 고르는 ㄱㄴㄷ 보기형으로 바꾸기 ★2 (2) 대칭인 두 직선만 따로 묻기 ★2 (3) k<0 으로 바꿔 사분면 판정이 뒤집히게 하면 그래프 해석 비중이 커져 I-RT 추가 ★3.'
```

```yaml
- id: GN-CM2-271-634
  page: 271
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    f(x)=(3x-3)/(x-3) 에 대하여 f^{2024}(6). (f^1=f, f^{n+1}=f∘f^n)
  category: '두어 번 합성 → 주기 2 발견 → 지수 2024 의 짝홀'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(6)=5, f(5)=6 을 계산해 f∘f 가 항등이 되는 주기 2 를 스스로 찾고 지수 2024 의 짝홀로 일반화"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: 'f^n 합성의 주기성(함숫값의 순환)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    값을 두 번만 계산하면 6→5→6 이 되어 주기가 2 임이 드러나고, 2024 가 짝수이므로 처음 값으로 되돌아온다(I-PD d2). 계산 자체는 가볍고 관건은 주기 발견과 지수의 짝홀 대응. STEP 1 출발 ★2 · 통찰 1개(d2)는 +1 조건(2개 이상 또는 d3) 미달 → ★2 유지. [분류 이슈] 같은 주기 발견 골조는 보통 STEP 2 급으로 다뤄져 ★3 후보다.
  tier: star_2
  mechanism_primary: 'f(6)=5 → f(5)=6 → 주기 2 → 2024 는 짝수 → f^{2024}(6)=6'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/271-634.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '시작값 6 과 계수 (3,-3,1,-3) 을 바꿀 수 있다. 제약: 주기가 2 나 3 으로 닫히는 계수여야 하고(자기 역함수면 주기 2), 시작값은 정의역 제외값을 피해야 하며, 지수는 주기로 나눈 나머지만 답을 바꾼다.'
    creative: '(1) 지수를 2025 로 바꿔 홀수 쪽 값을 묻기(같은 골조 ★2) (2) 주기가 3 인 함수로 바꾸면 나머지 계산 단계가 늘어 ★3 (3) f^n(x)=x 가 성립하는 최소의 n 을 묻거나 주기를 미지수로 두면 ★3~4.'
```

```yaml
- id: GN-CM2-271-635
  page: 271
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    f(x)=2x/(x+1), g(x)=(3x-1)/x 의 역함수에 대하여 (g^{-1}∘f)^{-1}(2).
  category: '역함수 합성 순서 뒤집기 → f^{-1}∘g → 값 대입'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "(g^{-1}∘f)^{-1}=f^{-1}∘g 로 순서를 뒤집어 합성함수를 실제로 만들지 않고 g(2) 를 f^{-1} 에 넣는 경로로 정리"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '역함수와 합성 — (g^{-1}∘f)^{-1}=f^{-1}∘g 의 활용'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    합성함수를 먼저 만들고 그 역함수를 구하면 분수식이 겹쳐 복잡해진다. (a∘b)^{-1}=b^{-1}∘a^{-1} 로 뒤집는 동치 변환(I-EQV d1)을 쓰면 g(2)=5/2 를 f^{-1}(x)=x/(2-x) 에 한 번 대입해 끝난다. STEP 1 ★2 · 통찰 1개 → ★2.
  tier: star_2
  mechanism_primary: '(g^{-1}∘f)^{-1}=f^{-1}∘g → g(2)=5/2 → f^{-1}(x)=x/(2-x) 에 대입 → -5'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/271-635.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'f, g 의 계수와 대입값 2 를 바꿀 수 있다. 제약: g(2) 가 f^{-1} 의 정의역(f 의 치역에서 제외되는 값 2)을 피해야 하고, 답이 정수로 떨어지도록 f 의 계수를 맞춘다.'
    creative: '(1) (f^{-1}∘g)^{-1}(2) 로 순서를 바꾸기(같은 골조 ★2) (2) 합성 결과의 점근선이나 정의역을 묻기 ★3 (3) 합성이 항등함수가 되도록 g 의 계수를 정하게 하면 역방향 사고가 붙어 I-BW ★3.'
```

```yaml
- id: GN-CM2-271-636
  page: 271
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    두 함수 y=(ax-3)/(2x+b), y=-(2x+3)/(2x+5) 의 그래프가 직선 y=x 에 대하여 대칭일 때 b-a.
  category: 'y=x 대칭 ⟺ 서로 역함수 → 한쪽의 역함수 계산 → 계수 비교'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 그래프가 직선 y=x 에 대하여 대칭이라는 기하 조건을 서로 역함수 관계라는 대수 조건으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: 'y=x 에 대한 대칭 ⟺ 서로 역함수 — 계수 결정'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y=x 대칭을 역함수 관계로 읽는 동치 변환(I-EQV d1)이 출발점이고, 나머지는 y=-(2x+3)/(2x+5) 를 x 에 대해 풀어 (-5x-3)/(2x+2) 를 얻은 뒤 계수 비교뿐이다. 분자 상수가 -3, 분모 x 계수가 2 로 이미 맞아떨어져 정규화가 없다. STEP 1 ★2 · 통찰 1개 → ★2 유지.
  tier: star_2
  mechanism_primary: 'y=-(2x+3)/(2x+5) 의 역함수 (-5x-3)/(2x+2) → (ax-3)/(2x+b) 와 계수 비교 → a=-5, b=2 → b-a=7'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/271-636.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '둘째 함수의 계수 (-2,-3,2,5) 를 바꿀 수 있다. 제약: 역함수의 분자 상수와 분모 x 계수가 문제에 고정된 -3, 2 와 맞아야 하고, 맞지 않으면 분자·분모에 같은 수를 곱하는 정규화 단계가 하나 늘어난다.'
    creative: '(1) 대칭 조건 대신 「f 의 역함수가 g」라고 직접 주면 통찰이 사라져 ★2 (2) 원점 대칭·x축 대칭으로 바꾸면 변환 규칙이 달라져 ★2~3 (3) 두 그래프의 교점을 묻는 형태로 확장하면 y=x 위 교점과 그 밖 교점 논의가 붙어 ★3~4.'
```

### 연습문제 STEP 2

```yaml
- id: GN-CM2-272-637
  page: 272
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    곡선 y=k/(x-2)+1 (k<0) 이 x축, y축과 만나는 점을 A, B, 두 점근선의 교점을 C 라 할 때 세 점이 한 직선 위에 있도록 하는 k. 5지선다.
  category: '두 절편과 점근선 교점 → 세 점 공선(기울기 일치) → k'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세 점이 한 직선 위에 있다는 기하 조건을 두 기울기가 같다는 대수식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '유리함수의 절편과 점근선 교점이 한 직선 위에 있을 조건'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    절편 두 개 A(2-k, 0), B(0, 1-k/2) 와 점근선 교점 C(2,1) 을 k 로 좌표화하면 공선 조건이 1/k=k/4 한 줄로 줄어든다(I-RT d1). 마지막에 k^2=4 의 두 근 중 k<0 을 고르는 부호 점검(T-부호)이 붙는다. STEP 2 출발 ★3 · 통찰 1개 → ★3 유지.
  tier: star_3
  mechanism_primary: 'A(2-k,0), B(0,1-k/2), C(2,1) → 기울기 AC=1/k, BC=k/4 → k^2=4, k<0 → k=-2'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/272-637.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '점근선 중심 (2,1) 과 k 의 부호 조건을 바꿀 수 있다. 제약: 곡선이 두 축과 실제로 만나야 A, B 가 존재하고, 공선 조건에서 나오는 k^2 이 완전제곱이어야 선택지가 정수로 떨어진다.'
    creative: '(1) 세 점이 직각삼각형을 이룰 조건으로 바꾸면 좌표화는 그대로이고 조건만 교체 ★3 (2) 삼각형 ABC 의 넓이를 주면 넓이식 계산이 더해져 ★3~4 (3) k 의 부호 제한을 없애면 두 갈래를 모두 살려야 해 I-MI 추가 ★4.'
```

```yaml
- id: GN-CM2-272-638
  page: 272
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    두 유리함수 y=(2x-3)/(x-a), y=(-ax+2)/(x-2) 의 그래프의 점근선으로 둘러싸인 부분의 넓이가 3 일 때 모든 양수 a 의 값의 곱.
  category: '네 점근선 → 직사각형 두 변 → |a^2-4|=3 → 양수 해의 곱'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "네 점근선 x=a, y=2, x=2, y=-a 를 직사각형의 가로·세로 길이로 옮겨 넓이식 |a-2||a+2| 를 세움"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '두 유리함수의 점근선으로 둘러싸인 도형의 넓이'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 함수의 점근선이 각각 (x=a, y=2), (x=2, y=-a) 라 네 직선이 직사각형을 만든다는 기하 전환이 출발점(I-RT d1). 넓이가 |a^2-4|=3 이 되어 a^2=7 과 a^2=1 두 갈래를 모두 살려야 「모든 양수 a」의 곱 √7 이 나온다. 절댓값 분기는 표준이라 통찰로 세지 않고 T-부호·T-범위(a>0, a≠2)로 Mₜ 에 반영. STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: '점근선 (x=a, y=2)·(x=2, y=-a) → 넓이 |a-2||a+2|=|a^2-4|=3 → a^2=7 또는 1 → 양수해 √7, 1 → 곱 √7'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sqrt{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/272-638.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '넓이 3 과 점근선 위치를 정하는 상수 2, -3, 2 를 바꿀 수 있다. 제약: 두 함수 모두 ad-bc≠0 이어야 하고 a≠2(넓이 0 방지), |a^2-4|=S 가 양수 해 두 개를 주는 S 범위여야 답이 「곱」으로 의미가 있다.'
    creative: '(1) 넓이 대신 둘레를 주면 절댓값 일차식 분기로 바뀌어 ★3 (2) 「모든 실수 a 의 합」으로 바꾸면 음수 해까지 따져야 해 I-MI 추가 ★3~4 (3) 점근선 직사각형에 내접하는 원·정사각형 조건으로 확장하면 ★4.'
```

```yaml
- id: GN-CM2-272-639
  page: 272
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    y=(bx+c)/(ax-1) 의 그래프가 주어진 그림과 같을 때 보기 ㄱ. a>0, ㄴ. b<0, ㄷ. c<0 중 옳은 것만 모두 고르기.
  category: '그림의 점근선 위치·y절편 부호 → 계수 부호 역추적'
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그림의 수직·수평 점근선 위치와 y절편 부호를 x=1/a, y=b/a, -c 의 부호 조건으로 번역"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '그래프 개형에서 유리함수 계수의 부호 판정'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    보기 셋이 점근선 둘과 y절편에 각각 대응한다. 그림에서 수직 점근선이 y축 오른쪽이므로 1/a>0 → a>0(ㄱ 참), 수평 점근선이 x축 위이므로 b/a>0 → b>0(ㄴ 거짓), x=0 에서 곡선이 x축 위이므로 y절편 -c>0 → c<0(ㄷ 참). 계수 문자가 셋 다 미지라 Mₐ 3 이고 b/a·-c 부호 추론이 T-부호·T-표기에 걸려 M_total 8. STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: '수직 점근선 1/a>0 → a>0 → 수평 점근선 b/a>0 → b>0 → y절편 -c>0 → c<0 → ㄱ, ㄷ'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: 'ㄱ, ㄷ'
  answer_source: "답지"
  figure: 'crop:fig-272-639.png'
  latex: latex-bank/gn-cm2/items/272-639.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '분모 상수 -1 과 계수 자리의 부호 조합을 바꿀 수 있다. 제약: 그림의 점근선 위치와 절편 부호가 라벨로 고정돼 있으므로 그림을 함께 바꾸지 않으면 수를 바꿀 수 없다.'
    creative: '(1) 보기를 ab>0, bc<0 같은 곱 조건으로 바꾸면 조합 판정이 늘어 ★3~4 (2) 그래프에서 계수의 대소까지 비교하게 하면 I-MI 추가 ★4 (3) 반대로 계수 부호를 주고 개형을 고르게 하면 난도가 내려가 ★2.'
```

```yaml
- id: GN-CM2-272-640
  page: 272
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    두 집합 A={(x,y) | y=(2x-4)/(x-1)}, B={(x,y) | y=kx+1} 에 대하여 A∩B 가 공집합일 때 실수 k 의 값의 범위.
  category: '교집합 공집합 ⟺ 교점 없음 → 정리한 방정식의 실근 없을 조건'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "집합 표현의 A∩B=∅ 를 두 그래프가 만나지 않는다로 읽고, 대입·정리한 kx^2-(k+1)x+3=0 이 실근을 갖지 않을 조건으로 옮김(k=0 인 일차 갈래도 함께 점검)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '유리함수와 직선이 만나지 않을 조건(판별식)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    집합 기호를 그래프 교점 문제로 읽는 동치 변환이 출발점(I-EQV d2). 정리하면 kx^2-(k+1)x+3=0 이고 x=1 은 대입값이 2 라 근이 될 수 없어 제외 조건이 따로 필요 없다. k=0 이면 일차방정식이 되어 교점이 생기므로 기각하고, 나머지는 D<0 → k^2-10k+1<0. 무리수 경계가 나와 계산 부담과 경계 처리(T-경계)가 있다. STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: 'y 소거 → kx^2-(k+1)x+3=0 → k=0 갈래 기각 → D=(k+1)^2-12k<0 → 5-2√6<k<5+2√6'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5-2\sqrt{6}<k<5+2\sqrt{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/272-640.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '유리함수의 계수와 직선의 y절편 1 을 바꿀 수 있다. 제약: 대입 후 이차항 계수가 k 라 k=0 갈래 점검이 항상 필요하고, 정의역 제외값 x=1 이 근이 되지 않는지 확인해야 하며, 판별식이 무리수 경계인지 정수 경계인지에 따라 답 모양이 달라진다.'
    creative: '(1) 교점이 한 개일 조건(D=0)으로 바꾸면 같은 골조 ★3 (2) 직선을 정점을 지나는 형태 y=k(x-1)+1 로 주면 점근선 관통 여부까지 따져 I-MI 추가 ★4 (3) 만나지 않게 하는 정수 k 의 개수를 묻기 ★3~4.'
```

```yaml
- id: GN-CM2-272-641
  page: 272
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    f(x)=(4x+1)/(x-1) 의 역함수 g 의 그래프를 x축 방향 m, y축 방향 n 만큼 평행이동하면 y=f(x) 의 그래프와 겹쳐질 때 n-m.
  category: '표준형 중심 → 역함수의 중심은 좌표 교환 → 평행이동 벡터'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "역함수 그래프는 y=x 대칭이라 중심 (1,4) 가 (4,1) 로 뒤집힐 뿐 k 는 보존됨을 이용해 역함수를 구하지 않고 중심만 비교"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '역함수 그래프의 평행이동 — 점근선 중심의 대응'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f=4+5/(x-1) 이라 중심 (1,4)·k=5 이고, 역함수는 y=x 대칭이므로 중심이 (4,1) 로 뒤집히고 k 는 그대로다(I-SYM d1). 두 그래프는 k 가 같아 평행이동만으로 겹치고, 중심을 맞추면 m=-3, n=3. 역함수를 실제로 계산하지 않아도 되는 것이 이 골조의 이득. STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: 'f 의 중심 (1,4) → g 의 중심 (4,1) → (4+m, 1+n)=(1,4) → m=-3, n=3 → n-m=6'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/272-641.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'f 의 계수 (4,1,1,-1) 을 바꿔 중심을 옮길 수 있다. 제약: 역함수의 k 는 원 함수의 k 와 항상 같아 「평행이동으로 겹친다」는 조건은 언제나 성립하므로, 답은 중심 좌표의 차이만으로 정해진다. 중심의 두 좌표가 같으면 m=n=0 이 되어 문제가 성립하지 않는다.'
    creative: '(1) m, n 대신 평행이동 거리(선분 길이)를 묻기 ★3 (2) 평행이동한 그래프가 다시 y=x 에 대칭이 되도록 조건을 걸면 I-SYM 심화 ★4 (3) f 와 g 의 교점 개수로 바꾸면 y=x 위·밖 교점 논의가 붙어 ★4.'
```

### 연습문제 실력 UP

```yaml
- id: GN-CM2-273-642
  page: 273
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    y=1/x (x>0) 위의 점 A 에서 두 축에 평행한 직선을 그어 y=k/x (k>1) 와 만나는 점을 B, C 라 할 때 삼각형 ABC 의 넓이가 50 이면 상수 k.
  category: 'A 를 (a, 1/a) 로 두기 → 직각을 낀 두 변의 곱에서 a 소거 → (k-1)^2/2=50'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "A 를 매개변수 (a, 1/a) 로 두면 두 변이 a(k-1) 과 (k-1)/a 라 넓이에서 a 가 약분되어 A 의 위치와 무관함을 확인"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '반비례 두 곡선 사이에 만들어진 도형의 넓이'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    A(a, 1/a) 로 두면 B(ka, 1/a), C(a, k/a) 이고 A 에서 직각이므로 넓이가 (1/2)·a(k-1)·(k-1)/a=(k-1)^2/2 로 a 가 사라진다. 넓이가 A 의 위치와 무관함을 확인하는 이 한 단계가 문항의 전부(I-EQV d2)이고 뒤는 (k-1)^2=100 과 k>1 선택뿐. 실력 UP 출발 ★4 유지. [분류 이슈] a 소거 뒤 계산이 두 줄(M_total 7)이라 체감은 ★3 쪽이다.
  tier: star_4
  mechanism_primary: 'A(a,1/a) → B(ka,1/a), C(a,k/a) → 넓이 (k-1)^2/2=50 → k>1 이므로 k=11'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$11$'
  answer_source: "답지"
  figure: 'crop:fig-273-642.png'
  latex: latex-bank/gn-cm2/items/273-642.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '넓이 50 과 두 곡선의 비례상수(1 과 k)를 바꿀 수 있다. 제약: k>1 이어야 그림 배치(B, C 가 바깥쪽)가 유지되고, 넓이가 (k-1)^2/2 꼴이라 k 가 정수이려면 2×넓이가 완전제곱수여야 한다. 그림의 A, B, C 라벨 위치는 고정.'
    creative: '(1) k 를 주고 넓이를 구하게 하는 역방향 ★3 (2) 두 곡선을 y=m/x, y=k/x 로 일반화하면 넓이가 (k-m)^2/(2m) 이 되어 Mₐ 상승 ★4 (3) 삼각형 대신 두 곡선과 두 직선이 만드는 직사각형 넓이로 바꾸면 같은 소거 구조 ★3~4.'
```

```yaml
- id: GN-CM2-273-643
  page: 273
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    f(x)=a/(x-6)+b 에 대하여 y=|f(x+a)+a/2| 의 그래프가 y축에 대하여 대칭일 때 f(b). 5지선다. (a≠0)
  category: '평행이동 후 절댓값 → 원점 대칭(기함수) 환원 → a, b → f(b)'
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "|g(x)| 가 y축 대칭이려면 g 가 우함수이거나 기함수여야 하는데 유리함수에서는 기함수(중심이 원점)만 가능함을 간파"
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "우함수 갈래는 a=0 이 되어 단서 a≠0 에 걸려 기각됨을 확인"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: '|f(x)| 그래프의 y축 대칭 조건(원점 대칭으로 환원)'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    g(x)=f(x+a)+a/2 는 중심이 (6-a, b+a/2) 인 유리함수이고, |g| 가 y축 대칭이 되려면 g 가 원점 대칭(기함수)이어야 한다(I-SYM d3). 두 좌표를 모두 0 으로 놓아 a=6, b=-3 이 한 번에 나오고 f(-3)=-11/3. a 가 평행이동량과 더해지는 상수 양쪽에 동시에 들어가 중심이 얽히는 점이 난도의 핵심(Mₐ 3 · M_total 10). 실력 UP·교육청 기출 ★4 출발 · 통찰 2개(d3 포함)지만 ★5 의 통찰 3개 요건 미달 → ★4.
  tier: star_4
  mechanism_primary: 'g=f(x+a)+a/2 의 중심 (6-a, b+a/2) 가 원점 → a=6, b=-3 → f(x)=6/(x-6)-3 → f(-3)=-11/3'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/273-643.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '중심 상수 6 과 더해지는 a/2 의 계수를 바꿀 수 있다. 제약: 중심의 두 좌표가 동시에 0 이 되는 (a, b) 가 유일하게 정해져야 하고, a≠0 단서가 우함수 갈래를 막는 장치이므로 유지해야 하며, f(b) 가 선택지로 쓸 유리수가 되도록 맞춘다.'
    creative: '(1) y축 대칭 대신 원점 대칭을 직접 조건으로 주면 환원 통찰이 사라져 ★3 (2) |f(x)| 가 직선 x=k 에 대하여 대칭으로 바꾸면 중심의 한 좌표만 조건이 되어 ★3~4 (3) 대칭이 되게 하는 a 의 개수를 묻거나 b 를 미지로 하나 더 두면 ★4~5.'
```

```yaml
- id: GN-CM2-273-644
  page: 273
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    f(x)=(2x-3)/(x-2) (x>2) 위의 점 P 에서 x축, y축에 내린 수선의 발을 A, B 라 할 때 PA+PB 의 최솟값 m 과 그때 P 의 x좌표 p 에 대하여 m+p.
  category: '수선의 발 길이 = 두 좌표 → 표준형 → 산술·기하평균'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "PA, PB 를 각각 점 P 의 y좌표·x좌표로 번역해 기하 조건을 대수식 합으로 바꿈"
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x+2+1/(x-2) 를 (x-2)+1/(x-2)+4 로 묶어 공통수학1 의 산술·기하평균으로 최솟값을 확보(등호 성립 x=3)"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: '유리함수 위의 점에서 두 축까지 거리의 합의 최솟값(산술·기하평균)'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    수선의 발 길이를 좌표로 바꾸는 번역(I-RT d1) 뒤, 합을 그대로 두면 최소를 잡을 수 없고 (x-2)+1/(x-2) 꼴로 묶어야 산술·기하평균이 적용된다(I-XU d2 — 부등식 단원 도구 결합). 정의역 x>2 가 두 항을 양수로 만들어 등호 성립을 보장하는 범위 조건이다(T-범위·T-경계). 실력 UP ★4 · 통찰 2개 → ★5 의 통찰 3개 요건 미달이라 ★4.
  tier: star_4
  mechanism_primary: 'PA+PB=y+x=(x-2)+1/(x-2)+4 ≥ 6 (등호 x=3) → m=6, p=3 → m+p=9'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/273-644.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수 (2,-3,1,-2) 와 정의역 x>2 를 바꿀 수 있다. 제약: 표준형이 c+k/(x-h) 로 정리될 때 (x-h) 와 k/(x-h) 의 곱이 상수여야 산술·기하평균이 먹히고, 등호 성립점이 정의역 안에 있어야 한다. k 가 완전제곱이면 m, p 가 정수로 떨어진다.'
    creative: '(1) PA+2PB 처럼 계수를 붙이면 등호 성립점이 옮겨가 같은 골조로 ★4 (2) 삼각형 OAP 의 넓이 최솟값으로 바꾸면 이차식 최소 문제가 되어 ★4 (3) 정의역을 x<2 쪽으로 옮기면 부호가 뒤집혀 최댓값 문제가 되고 T-부호가 추가돼 ★4.'
```

```yaml
- id: GN-CM2-273-645
  page: 273
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    1≤x≤3 인 모든 실수 x 에 대하여 ax ≤ 2x/(x+1) ≤ bx 가 항상 성립할 때 b-a 의 최솟값.
  category: 'x(>0) 로 나누기 → a ≤ 2/(x+1) ≤ b → 구간의 최소·최대'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 식이 모두 x 를 인수로 가짐을 보고 구간에서 양수인 x 로 나눠 상수 a, b 와 2/(x+1) 의 최대·최소 비교 문제로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '구간에서 항상 성립하는 부등식과 유리함수의 최대·최소'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    양변을 그대로 두면 이차부등식 두 개를 구간에서 따져야 하지만, 구간에서 x>0 이므로 나누면 a ≤ 2/(x+1) ≤ b 로 상수만 남는다(I-EQV d2). 2/(x+1) 은 감소함수라 양 끝값이 최대 1·최소 1/2 이고, 「모든 x 에 대하여」를 a ≤ (최솟값), b ≥ (최댓값) 으로 읽어야 한다(T-범위·T-경계). 실력 UP ★4 유지. [분류 이슈] 나누는 착안 하나가 전부이고 계산은 가벼워 체감은 ★3 쪽이다.
  tier: star_4
  mechanism_primary: 'x>0 으로 나눠 a ≤ 2/(x+1) ≤ b → 구간 최소 1/2·최대 1 → a≤1/2, b≥1 → b-a 의 최솟값 1/2'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/273-645.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '구간 [1,3] 과 2x/(x+1) 의 계수를 바꿀 수 있다. 제약: 나누는 인수 x 가 구간 전체에서 부호가 일정해야 하고(0 포함 금지), 구간이 점근선 x=-1 을 포함하지 않아야 2/(x+1) 이 단조라 양 끝값이 최대·최소가 된다.'
    creative: '(1) 구간을 -3≤x≤-2 로 옮기면 나눌 때 부등호가 뒤집혀 T-부호가 추가돼 ★4 (2) a, b 를 정수로 제한하면 사후 필터가 붙어 I-VF 추가 ★4~5 (3) 오른쪽 부등식만 주고 b 의 최솟값을 묻기 ★3.'
```

```yaml
- id: GN-CM2-273-646
  page: 273
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    f(x)=a/x+b (a≠0) 가 ㈎ 곡선 y=|f(x)| 가 직선 y=2 와 한 점에서만 만나고 ㈏ f^{-1}(2)=f(2)-1 을 만족시킬 때 f(8). 5지선다.
  category: '|f|=2 를 두 방정식으로 분해 → b=±2 → 조건 ㈏ 로 한 갈래 기각 → a'
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "|f(x)|=2 를 f(x)=2 와 f(x)=-2 로 나눠 각각의 해의 개수를 세고, 합쳐 한 점이 되려면 수평 점근선 값 b 가 2 또는 -2 여야 함을 확보"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "b=2 갈래는 2 가 f 의 치역 밖(점근선 값)이라 f^{-1}(2) 가 존재하지 않아 조건 ㈏ 에서 기각"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f^{-1}(2)=a/(2-b) 로 바꿔 조건 ㈏ 를 a 에 대한 일차식으로 정리"
  insight_count: 3
  depth_score: 1.67
  type_id: null
  type_hint: '|f(x)|=k 의 교점 개수 조건과 역함수 조건의 결합'
  base_star: null
  effective_star: 5
  star: 5
  premium: false
  rationale: |
    ㈎ 는 |f|=2 를 f=2 와 f=-2 두 방정식으로 나눠 해의 개수를 합산하는 분기(I-MI d2)이고, 각각은 b≠2, b≠-2 일 때만 해가 하나이므로 한 점이 되려면 b=±2. ㈏ 가 두 갈래 중 b=2 를 치역 밖 값으로 기각하고(I-VF d2), 남은 b=-2 에서 a/4=a/2-3 → a=12, f(8)=-1/2. 실력 UP·교육청 기출 ★4 출발 + 통찰 3개(I-MI·I-VF 포함)로 ★5 요건 충족 → ★5. [분류 이슈] novelty_score 0 이라 v3.8 §2.14 게이트로는 경고 대상이지만 그 게이트는 신규 출제 슬롯용이라 라벨은 ★5 로 둔다.
  tier: star_5
  mechanism_primary: '|f|=2 ⟺ f=2 또는 f=-2 → 한 점 조건으로 b=±2 → ㈏ 에서 b=2 기각 → b=-2, a=12 → f(8)=-1/2'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '①'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/273-646.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '직선의 높이 2 와 조건 ㈏ 의 상수 -1, 그리고 묻는 값 f(8) 의 8 을 바꿀 수 있다. 제약: ㈎ 가 b=±(직선 높이) 를 주므로 높이는 0 이 아니어야 하고, 살아남는 갈래에서 a 가 유일하게 정해지도록 ㈏ 의 상수를 맞추며, f(8) 이 선택지로 쓸 유리수가 되어야 한다.'
    creative: '(1) ㈎ 를 「두 점에서 만난다」로 바꾸면 b≠±2 갈래가 살아나 부등식 조건이 되어 ★4 (2) f 를 a/(x-c)+b 로 일반화하면 미지수가 셋이라 조건이 하나 더 필요해 ★5 (3) ㈏ 를 f^{-1}(2)=f(2) 로 바꾸면 y=x 대칭 논의가 붙어 ★4~5.'
```

## 표본 판정 요약 (20문)

- ★ 분포: ★1 0 · ★2 10 · ★3 5 · ★4 4 · ★5 1
- 통찰형 14 · 절차형 6 · premium 0
- 통찰 유형 분포: I-EQV 6 · I-RT 3 · I-SYM 2 · I-VF 2 · I-PD 1 · I-XU 1 · I-MI 1 (라벨 수 16 · 문항 14)
- 구역별: 필수·발전 예제 4문(★2 4) · STEP 1 6문(★2 6) · STEP 2 5문(★3 5) · 실력 UP 5문(★4 4 · ★5 1) — 벤더 구역 신호와 판정이 대체로 일치했고 ±1 조정은 하지 않았다
- type_hint 상위: 「역함수 계산·비교」 4(270-e14 · 270-628 · 270-630 · 271-636) · 「점근선 읽기·비교」 3(271-631 · 272-638 · 272-639) · 「역함수와 합성」 2(270-629 · 271-635) · 「구간에서의 최대·최소」 2(271-632 · 273-645) · 「그래프와 직선·도형의 교점·넓이」 3(272-637 · 272-640 · 273-642)
- 대상층: 하위권 0 · 중하위권 6 · 중위권 5 · 중상위권 5 · 상위권 3
- 그림: 2문(`crop:fig-272-639.png` · `crop:fig-273-642.png`) · 선택지 문항 4문(271-633 · 272-637 · 273-643 · 273-646)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-271-634 | 주기 발견(I-PD d2)이 골조의 전부인데 벤더 구역이 STEP 1 이라 ★2 로 두었다. 같은 골조가 보통 STEP 2 급으로 출제된다 | ★2 / ★3 |
| GN-CM2-273-642 | 실력 UP 출발점 ★4 를 유지했으나 a 소거 뒤 (k-1)^2=100 두 줄로 끝나 M_total 7 · 체감은 ★3 | ★3 / ★4 |
| GN-CM2-273-645 | 같은 이유로 ★4 유지. x 로 나누는 착안 하나가 전부이고 계산이 가볍다 | ★3 / ★4 |
| GN-CM2-273-646 | 통찰 3개(I-MI·I-VF 포함)로 ★5 요건을 충족해 ★5 로 라벨. 다만 novelty_score 0 이라 v3.8 §2.14 게이트로는 경고(그 게이트는 신규 출제 슬롯용으로 해석) | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 가장 많이 반복된 축은 **역함수**다. 다만 실제 골조가 셋으로 갈리므로 카탈로그에서도 따로 세우는 편이 낫다 — ⑴ 역함수를 구해 계수 비교(270-e14 · 270-628 · 271-636) ⑵ 역함수 그래프 위의 점·평행이동을 좌표 교환으로 처리(270-630 · 272-641) ⑶ 역함수와 합성의 순서 뒤집기(270-629 · 271-635). ⑴ 과 ⑶ 은 계산 경로가 완전히 달라 통합하면 base ★ 가 흐려진다.
- 반대로 **점근선 읽기**(271-631 · 272-638 · 272-639)는 「점근선 두 개를 쓰고 조건을 건다」는 한 유형으로 묶어도 무방하고, 조건이 일치/넓이/부호 중 무엇인지는 변형 축으로 두면 된다.
- 「유리함수와 직선의 교점 조건(판별식)」(272-640)과 「절편·점근선 교점의 공선 조건」(272-637)은 둘 다 좌표화 후 대수 조건으로 옮기는 I-RT 계열이지만, 전자는 판별식·경계, 후자는 기울기·부호라 별도 유형이 맞다.
- 실력 UP 3문(273-643 · 273-644 · 273-646)은 유리함수 자체보다 **절댓값 대칭 · 산술기하평균 · 교점 개수 분기**라는 바깥 도구가 난도를 만든다. 카탈로그에서는 유리함수 유형이 아니라 「유리함수를 소재로 한 대칭/최소/조건 결합」 상위 유형으로 두고 단원 태그만 붙이는 편이 base ★ 산정에 유리하다.

