---
name: mechanism-데이터-GN-CALC1-08
description: 개념원리 미적분Ⅰ 08 미분가능성과 연속성(1/1 · 67~71쪽 20문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅰ · 전사본 latex-bank/gn-calc1
  section: 08 미분가능성과 연속성
  unit_code: GN-CALC1-08
  part: "1/1"
  extract_range: "67~71쪽 · 67-e6~71-122"
  total_problems: 20
  unit_total: 20
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc1/items/<id>.tex
  image_source: latex-bank/gn-calc1/figures/ (이 범위 그림 4문 · crop)
---

# 개념원리 미적분Ⅰ · 08 미분가능성과 연속성 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅰ 08단원 「미분가능성과 연속성」 67~71쪽 20문항 전수를 다룬다. 구역은 「필수·발전 예제」(67-e6~68-106 · 필수 예제 2문 + 확인체크 2문), 「연습문제 STEP 1」(69-107~70-113 · 7문), 「연습문제 STEP 2」(70-114~71-121 · 8문), 「연습문제 실력 UP」(71-122 · 1문)의 넷이다. 개념원리 고등의 벤더 난이도 신호는 구역·태그·level 로 나타난다 — tag 「확인체크」는 개념 확인이라 ★1, tag 「필수」는 ★2, level 「STEP 1」은 ★2, 「STEP 2」는 ★3, 「실력 UP」은 ★4 가 출발점이고 여기서 M_total·통찰로 ±1 조정했다.

이 단원은 골조가 크게 세 갈래다. ⑴ **정의 그대로의 연속·미분가능 판정**(좌우극한·함숫값 일치 → 좌우 미분계수 비교 · 67-e6, 67-105, 69-112, 71-121), ⑵ **그래프 읽기**(끊긴 점 → 불연속, 꺾인 점·불연속점 → 미분불가 · 68-e7, 68-106, 70-113, 71-120), ⑶ **미분계수 정의 꼴로의 변형**(분자에 f(a) 를 넣고 빼거나 분모를 인수분해해 극한을 f'(a) 로 환원 · 69-107~69-111, 70-114~71-119, 71-122). 통찰 라벨은 대부분 ⑶ 갈래의 I-EQV(조건의 동치 변환)와 ⑵ 갈래의 I-RT(그래프↔해석 전환)에 붙었고, 이 범위에는 I-SC·I-VF·I-SYM·I-XU 가 한 건도 없어 ★5 는 없다.

Mₐ 기준은 이 범위에서 다음과 같이 고정했다 — 구체 수치로 정의된 함수는 1, 일반 다항함수·미분가능 함수에 f(1)=1 같은 구체 조건이 붙은 경우는 2, 함수방정식이나 두 미지 함수·미지 상수가 함께 나오는 경우는 3. Mₜ 는 해당하는 함정 **카테고리 수**로 셌다(경계의 열린 점·닫힌 점 = T-경계, 절댓값·(1-x) 부호 = T-부호, 조건 범위 누락 = T-범위).

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC1-67-e6
  page: 67
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 주어진 함수의 $x=1$ 에서의 연속성과 미분가능성 조사.
    ⑴ 절댓값 함수 $|x-1|$ ⑵ x가 1 이상이면 $x^2+x$, 1 미만이면 $3x-1$ 인 구간별 정의 함수.
  category: "경계 좌우 분리 → 연속(값 일치) → 미분가능(기울기 일치) 판정"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 점에서의 연속성·미분가능성 조사(절댓값·구간별 정의 함수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    연속은 좌극한=우극한=함숫값, 미분가능은 좌미분계수=우미분계수라는 정의를 그대로 두 번 적용하는 절차다.
    ⑴은 경계에서 기울기가 -1과 1로 갈려 연속이지만 미분불가, ⑵는 값 2와 기울기 3이 모두 맞아 미분가능.
    통찰 라벨이 붙는 단계는 없고, 필수 예제 출발점 ★2를 M_total 6(절댓값 부호·경계 두 함정)으로 유지했다.
  tier: star_2
  mechanism_primary: "경계 $x=1$ 좌우 분리 → 좌우극한·함숫값 일치 확인 → 좌우 미분계수 비교 → 연속·미분가능 판정"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑴ 연속이지만 미분가능하지 않다. ⑵ 연속이고 미분가능하다."
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/67-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경계 x값(1 → -2, 3)과 ⑵의 두 식 계수를 바꿀 수 있음. 제약: 연속이 되려면 경계에서 두 식의 값이 같아야 하고, 미분가능/불가 어느 쪽을 답으로 삼을지에 따라 기울기 일치 여부를 의도적으로 맞추거나 어긋나게 해야 함(값은 맞고 기울기만 다른 배치가 이 유형의 핵심 오답 유발)."
    creative: "(1) ⑵를 값은 같고 기울기만 다르게 바꿔 두 소문항의 답을 뒤집기(★2 유지) (2) 구간별 식에 미정계수 a, b를 넣고 미분가능하도록 a, b를 구하게 하면 역방향 사고가 생겨 ★3 (3) $|x-1|$ 을 $(x-1)|x-1|$ 로 바꾸면 절댓값이 있어도 미분가능해져 판정이 반전(★2~3)."
```

```yaml
- id: GN-CALC1-67-105
  page: 67
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 주어진 함수의 $x=-1$ 에서의 연속성과 미분가능성 조사.
    ⑴ $(x+1)|x+1|$ ⑵ $|x^2-1|$ ⑶ x가 -1 이상이면 $x^2$, -1 미만이면 $-x$ 인 구간별 정의 함수.
  category: "경계 좌우 분리 → 연속(값 일치) → 미분가능(기울기 일치) 판정 · 소문항 3"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 점에서의 연속성·미분가능성 조사(절댓값·구간별 정의 함수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e6과 같은 2단 절차를 세 함수에 반복한다. 다만 ⑴은 절댓값이 들어 있는데도 좌우 미분계수가 모두 0이라 미분가능하고,
    ⑵는 인수분해하면 경계에서 기울기가 -2와 2로 갈려 미분불가라 "절댓값=미분불가"라는 착각을 깨는 배치다.
    판정 자체는 정의 대입 절차라 통찰 라벨은 없다. 확인체크 출발점 ★1이지만 소문항 3개·절댓값 곱 판정으로 ★2.
  tier: star_2
  mechanism_primary: "경계 $x=-1$ 좌우로 절댓값을 벗겨 식 분리 → 좌우극한·함숫값 일치 확인 → 좌우 미분계수 비교"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑴ 연속이고 미분가능하다. ⑵ 연속이지만 미분가능하지 않다. ⑶ 연속이지만 미분가능하지 않다."
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/67-105.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경계 x값과 ⑵의 이차식($x^2-1$ → $x^2-4$, $x^2-x-2$), ⑶의 두 식 계수를 바꿀 수 있음. 제약: ⑴꼴은 지수가 홀수여야 미분가능(제곱 인수가 남아야 좌우 미분계수 0), ⑵는 경계가 이차식의 단순근일 때만 꺾임이 생김(중근이면 미분가능해져 답이 바뀜)."
    creative: "(1) ⑵의 경계를 중근 쪽($|x^2-2x+1|$ 의 x=1)으로 옮겨 미분가능으로 뒤집기(★2) (2) 세 함수 중 미분가능한 것을 고르는 5지선다로 바꾸기(★2) (3) ⑶의 아래 식에 미정계수를 넣어 미분가능 조건을 역으로 구하게 하면 ★3."
```

```yaml
- id: GN-CALC1-68-e7
  page: 68
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 그래프가 주어진 함수에 대해 구간 $(0,\,4)$ 에서
    ⑴ 불연속인 x의 값 ⑵ 미분가능하지 않은 x의 값을 모두 구하기.
  category: "그래프의 끊김 → 불연속 · 끊김+꺾임 → 미분불가"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프의 시각적 특징(열린 점·닫힌 점의 어긋남, 뾰족한 꺾임)을 극한·함숫값 일치와 좌우 미분계수 일치라는 해석적 조건으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프에서 불연속점·미분가능하지 않은 점 찾기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=1은 극한값과 함숫값이 어긋난 제거가능 불연속, x=3은 왼쪽 극한과 함숫값이 어긋난 불연속, x=2는 연속이지만 뾰족한 꺾임이다.
    "불연속이면 미분불가"라는 포함관계를 쓰면 ⑵는 ⑴의 답에 꺾인 점 x=2를 더하는 것으로 끝난다.
    그래프→해석 조건 전환 1단계(RT d1)만 인정했고, 필수 예제 출발점 ★2를 유지했다.
  tier: star_2
  mechanism_primary: "그래프에서 열린 점·닫힌 점 어긋남 찾기 → 불연속점 확정 → 불연속점에 꺾인 점 추가 → 미분불가능점"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $x=1$, $x=3$ ⑵ $x=1$, $x=2$, $x=3$'
  answer_source: "본문 풀이"
  figure: "crop:fig-68-e7.png"
  latex: latex-bank/gn-calc1/items/68-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 끝값(0, 4)과 특이점의 x좌표만 바꿀 수 있음. 제약: 그림의 열린 점·닫힌 점 배치와 꺾임 위치가 답을 전적으로 결정하므로 그림을 다시 그리지 않는 한 수치 변형은 라벨(축 눈금) 수준에 그친다. 구간 끝점은 한쪽 극한만 존재하므로 답에서 제외되도록 개구간을 유지해야 함."
    creative: "(1) ⑵만 묻고 개수를 답하게 하기(★2) (2) 같은 그래프로 $\\lim$ 존재 여부·좌우극한 값을 함께 묻기(★2) (3) 그래프 대신 구간별 식을 주고 같은 것을 묻기(그림 제거 · RT 소멸 → 절차형 ★2) (4) 도함수 그래프를 주고 원함수의 미분불가점을 역추적하면 I-BW 추가로 ★3."
```

```yaml
- id: GN-CALC1-68-106
  page: 68
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $0<x<6$ 에서 정의된 함수의 그래프가 주어졌을 때, 도함수의 부호·극한 존재·$f'(x)=0$ 인 x의 개수·불연속점 개수·미분불가능점 개수에 대한 다섯 설명 중 옳지 않은 것 고르기. 5지선다.
  category: "그래프 판정 5항목 전수 확인 → 거짓 하나 찾기"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프의 접선 기울기·열린 점·꺾임을 $f'$ 의 부호, 극한 존재, 불연속·미분불가 판정으로 각각 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프에서 불연속점·미분가능하지 않은 점 찾기(보기 진위 판정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    불연속은 값이 어긋난 x=4, x=5의 2개, 미분불가는 그 둘에 꺾인 점 x=2를 더한 3개다.
    ⑤가 4개라고 하므로 거짓. x=4는 좌우 극한이 같고 함숫값만 다른 제거가능 불연속이라 ②(극한 존재)는 참이고, 이 구분이 이 문항의 함정이다.
    개구간이라 끝점은 세지 않는다는 T-범위와 열린·닫힌 점 T-경계 두 함정으로 Mₜ 2. 확인체크 출발점 ★1이나 보기 5개 전수 판정으로 ★2.
  tier: star_2
  mechanism_primary: "그래프에서 열린·닫힌 점과 꺾임 위치 수집 → 보기별로 부호·극한·불연속·미분불가 판정 → 개수가 어긋난 보기 적발"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: "crop:fig-68-106.png"
  latex: latex-bank/gn-calc1/items/68-106.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기의 개수(불연속 2개·미분불가 4개)와 ①에서 묻는 x좌표만 바꿀 수 있음. 제약: 그림이 답을 결정하므로 개수를 바꾸려면 그림을 다시 그려야 하고, 제거가능 불연속점을 최소 1개 남겨야 ②(극한 존재)의 함정이 유지됨."
    creative: "(1) '옳은 것'을 고르게 뒤집기(★2) (2) 보기를 ㄱㄴㄷ 형태로 바꿔 있는 대로 고르게 하기(★2~3) (3) 불연속점 개수와 미분불가점 개수의 합을 묻는 단답으로 바꾸기(★2) (4) 그래프를 $f'$ 의 그래프로 바꾸면 원함수 성질 역추적으로 I-BW 추가 ★3."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC1-69-107
  page: 69
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=x^3-2x+5$ 에서 x가 1에서 a까지 변할 때의 평균변화율이 19일 때 상수 a의 값 구하기($a>1$).
  category: "평균변화율 정의 대입 → 인수 $(a-1)$ 약분 → 이차방정식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평균변화율이 주어질 때 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평균변화율 정의에 그대로 넣으면 분자가 $a^3-2a+1$ 이고 $a=1$ 이 근이므로 $(a-1)$ 로 약분되어 이차방정식이 남는다.
    $a>1$ 조건으로 음의 근을 버리는 마지막 확인이 T-범위 함정 하나.
    삼차식 인수분해는 일반 학생이 무리 없이 하는 양이라 Mₖ 2에 그치고 통찰 단계는 없다. STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "평균변화율 $=\\dfrac{f(a)-f(1)}{a-1}$ 대입 → 분자에서 $(a-1)$ 인수 빼내 약분 → 이차방정식 풀고 $a>1$ 로 근 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/69-107.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식의 계수, 시작점 1, 평균변화율 값 19를 바꿀 수 있음. 제약: 분자가 $(a-\\text{시작점})$ 으로 나누어떨어지는 것은 항상 성립하지만, 남는 이차방정식이 정수근을 갖고 그중 조건($a>1$)을 만족하는 근이 정확히 하나가 되도록 값을 골라야 함."
    creative: "(1) a를 주고 평균변화율을 구하게 하는 역방향(난도 하락 ★1~2) (2) 평균변화율이 $x=c$ 에서의 순간변화율과 같게 하는 c를 묻기(70-114 골조 ★3) (3) 조건을 $a<1$ 로 바꿔 버리는 근을 반대로 만들기(★2 유지, 부호 함정 강화)."
```

```yaml
- id: GN-CALC1-69-108
  page: 69
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    미분가능한 함수 $f(x)$ 에 대하여 $h\to 0$ 일 때 $\dfrac{f(h)-f(-2h)}{2h}$ 의 극한이 3일 때 $f'(0)$ 의 값 구하기.
  category: "$f(0)$ 을 넣고 빼 미분계수 정의 꼴 두 개로 분해 → 배율 정리"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분자에 $-f(0)+f(0)$ 을 끼워 넣어 $f(h)-f(0)$ 과 $f(-2h)-f(0)$ 두 미분계수 정의 꼴로 나누고 각 분모를 h, -2h 에 맞춤"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "미분계수 정의를 이용한 극한값 계산(f(0) 삽입·배율 조정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 식 그대로는 정의 꼴이 아니고, $f(0)$ 을 넣고 빼야 두 개의 $f'(0)$ 으로 갈라진다.
    분모를 h와 -2h로 맞추면서 생기는 계수(1/2과 +1)를 놓치는 것이 이 유형의 표준 실수라 Mₜ 1.
    조건의 동치 변환 1단계(EQV d1). STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "분자에 $f(0)$ 삽입 → $\\dfrac{f(h)-f(0)}{h}$ 와 $\\dfrac{f(-2h)-f(0)}{-2h}$ 로 분해 → 계수 합 $\\tfrac{3}{2}f'(0)=3$ → $f'(0)$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/69-108.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$f(h)$ 와 $f(-2h)$ 의 배율(-2 → 3, -1/2), 분모의 2h, 극한값 3을 바꿀 수 있음. 제약: 두 배율의 합이 0이 아니어야 $f'(0)$ 이 결정되고, 배율 합이 0이면 극한이 0으로 강제돼 문제가 성립하지 않음. 답이 정수가 되도록 (배율 합)/(분모 계수)로 극한값을 맞출 것."
    creative: "(1) 기준점을 0이 아닌 $x=a$ 로 옮겨 $f(a+h)-f(a-2h)$ 꼴로(★2) (2) $f'(0)$ 을 주고 극한값을 묻는 역방향(★2) (3) 분자를 $f(h^2)-f(0)$ 처럼 비선형으로 바꾸면 분모 맞추기가 한 겹 늘어 ★3 (4) 미분가능 조건을 빼면 반례가 생겨 출제 불가 — 조건은 고정."
```

```yaml
- id: GN-CALC1-69-109
  page: 69
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    $x\to 2$ 일 때 $\dfrac{f(x)-f(2)}{x-2}$ 의 극한이 3일 때, $h\to 0$ 일 때 $\dfrac{f(2+h)-f(2-h)}{h}$ 의 값. 5지선다.
  category: "$f(2)$ 삽입 → 대칭차분을 두 미분계수로 분해"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "대칭차분 분자에 $f(2)$ 를 넣고 빼 $f(2+h)-f(2)$ 와 $f(2-h)-f(2)$ 로 나누고 뒤쪽 분모를 $-h$ 로 맞춰 $f'(2)+f'(2)$ 로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "미분계수 정의를 이용한 극한값 계산(대칭차분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    첫 조건은 $f'(2)=3$ 을 정의 그대로 읽는 것이고, 목표식은 $f(2)$ 삽입으로 두 개의 $f'(2)$ 가 되어 2배가 된다.
    뒤 항의 분모 부호를 맞추지 않으면 0이 나오는 것이 이 유형의 전형적 오답이라 T-부호 함정 1개.
    108과 같은 EQV d1 한 단계. 교육청 기출 태그는 +0~1 중 통찰이 단순해 +0, STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "조건을 $f'(2)=3$ 으로 읽기 → 목표 분자에 $f(2)$ 삽입 → $f'(2)+f'(2)=2f'(2)$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/69-109.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준점 2, 극한값 3, 대칭차분의 두 증분 계수($+h$, $-h$ → $+2h$, $-3h$)를 바꿀 수 있음. 제약: 분모의 h 계수와 두 증분의 배율에 따라 답이 (배율 차)/(분모 계수)배가 되므로 선택지가 정수로 떨어지게 맞출 것."
    creative: "(1) 목표를 $\\dfrac{f(2+2h)-f(2-3h)}{h}$ 로 비대칭화(★2) (2) 분모를 $h^2$ 로 두고 극한이 존재할 조건을 묻기(발산 판정 추가 ★3) (3) 조건과 목표를 바꿔 $f'(2)$ 를 역으로 묻기(★2)."
```

```yaml
- id: GN-CALC1-69-110
  page: 69
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    다항함수 $f(x)$ 가 $f(1)=1$, $f'(1)=2$ 일 때 $x\to 1$ 에서 $\dfrac{\{f(x)\}^2-1}{x^2-1}$ 의 값 구하기.
  category: "분자·분모 각각 인수분해 → 미분계수 정의 꼴 분리"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$f(1)=1$ 을 이용해 분자를 $(f(x)-f(1))(f(x)+1)$, 분모를 $(x-1)(x+1)$ 로 갈라 $\\dfrac{f(x)-f(1)}{x-1}$ 를 떼어냄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "미분계수 정의 꼴로의 변형(분자·분모 인수분해)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자의 1이 $f(1)$ 과 같다는 것을 보아야 제곱차 인수분해가 미분계수 정의 꼴로 이어진다.
    남는 부분 $\dfrac{f(x)+1}{x+1}$ 은 연속성으로 대입만 하면 되고 다항함수 조건이 그 근거다.
    EQV d1 한 단계, 인수분해 두 번으로 Mₖ 2. STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "$1=f(1)$ 로 보기 → 분자·분모를 제곱차 인수분해 → $\\dfrac{f(x)-f(1)}{x-1}\\cdot\\dfrac{f(x)+1}{x+1}$ → $f'(1)\\cdot 1$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/69-110.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$f(1)$, $f'(1)$ 값과 기준점 1을 바꿀 수 있음. 제약: 분자 상수항이 반드시 $\\{f(1)\\}^2$ 과 같아야 0/0 꼴이 되고, 분모의 $x^2-1$ 도 기준점을 근으로 가져야 함. 두 조건이 깨지면 극한이 발산하거나 0이 되어 유형이 무너짐."
    creative: "(1) 분자를 $\\{f(x)\\}^3-1$ 로 올려 세제곱차 인수분해로(★2~3) (2) 분모를 $x^3-1$ 로 바꾸기(★2) (3) $f(1)$ 을 미지수로 두고 극한값을 준 뒤 $f(1)$ 을 역으로 구하게 하면 I-BW 추가 ★3."
```

```yaml
- id: GN-CALC1-69-111
  page: 69
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    다항함수 $f(x)$ 가 $f(2)=0$, $f'(2)=12$ 일 때 $x\to 2$ 에서 $\dfrac{f(x)}{x^2+2x-8}$ 의 값 구하기.
  category: "$f(x)=f(x)-f(2)$ 로 보기 → 분모 인수분해 → 미분계수 정의 꼴"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$f(2)=0$ 이므로 분자를 $f(x)-f(2)$ 로 바꿔 읽고 분모를 $(x-2)(x+4)$ 로 인수분해해 $\\dfrac{f(x)-f(2)}{x-2}$ 를 떼어냄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "미분계수 정의 꼴로의 변형(분모 인수분해)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f(2)=0$ 조건의 쓸모는 분자를 차 꼴로 바꿔 읽게 해 주는 것이며, 이를 못 보면 0/0 꼴에서 멈춘다.
    분모를 $(x-2)(x+4)$ 로 쪼개 $x-2$ 만 정의 꼴에 쓰고 나머지 $\dfrac{1}{x+4}$ 는 대입.
    110과 같은 EQV d1 한 단계. STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "$f(x)=f(x)-f(2)$ 로 보기 → 분모 $(x-2)(x+4)$ 인수분해 → $f'(2)\\cdot\\dfrac{1}{2+4}$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/69-111.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준점 2, $f'(2)$ 값 12, 분모 이차식의 다른 인수(+4)를 바꿀 수 있음. 제약: 분모 이차식이 기준점을 근으로 가져야 하고(그래야 0/0), 다른 근이 기준점과 달라야 하며, $f'$ 값이 남는 인수 값의 배수여야 답이 정수."
    creative: "(1) 분모를 삼차식으로 올려 인수 두 개가 남게(★2~3) (2) 극한값을 주고 $f'(2)$ 를 역으로 묻기(★2) (3) $f(2)=0$ 을 빼고 '극한이 존재한다'만 주어 $f(2)=0$ 을 학생이 유도하게 하면 I-BW 추가 ★3(70-118 골조)."
```

```yaml
- id: GN-CALC1-69-112
  page: 69
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    다섯 개의 함수 중 $x=0$ 에서 연속이지만 미분가능하지 않은 것 고르기. 보기는 상수함수, $|x|^2$, $x^2-1$, $|x|-x$, $\dfrac{|x|}{x}$. 5지선다.
  category: "보기별 x=0 연속·미분가능 전수 판정 → 연속이면서 꺾인 것 선택"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "연속이지만 미분가능하지 않은 함수 판별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ①②③은 다항함수(특히 $|x|^2=x^2$)라 미분가능, ⑤는 x=0에서 정의되지 않아 연속부터 깨지고, ④만 좌우 기울기가 -2와 0으로 갈린다.
    절댓값 표기를 그대로 믿어 $|x|^2$ 을 미분불가로 보는 T-표기 함정과 경계 판정 T-경계 두 개.
    보기마다 표준 판정을 반복하는 절차라 통찰 라벨은 없다. STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "보기별로 x=0에서 정의·연속 확인 → 통과한 것만 좌우 미분계수 비교 → 연속이면서 기울기가 갈리는 것 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/69-112.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기의 계수($|x|-x$ → $|x|-3x$, $2|x|+x$)와 기준점 0을 바꿀 수 있음. 제약: 정답 보기는 좌우 미분계수가 서로 달라야 하고, 오답 보기에는 '절댓값이 있지만 미분가능'($|x|^2$)과 '아예 불연속'($|x|/x$) 두 종류를 반드시 남겨야 변별이 유지됨."
    creative: "(1) '미분가능한 것'을 고르게 뒤집기(★2) (2) ㄱㄴㄷ 보기로 바꿔 있는 대로 고르기(71-121 골조 ★3) (3) 기준점을 0이 아닌 값으로 옮기고 절댓값 안을 이차식으로(★2~3) (4) 각 보기의 미분불가점 개수의 합을 묻기(★3)."
```

```yaml
- id: GN-CALC1-70-113
  page: 70
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $-1<x<6$ 에서 정의된 함수의 그래프가 주어졌을 때 도함수의 부호, 극한 존재, 불연속점 개수, 미분불가능점 개수에 대한 보기 ㄱ~ㄹ 중 옳은 것 모두 고르기.
  category: "그래프 판정 4항목 전수 확인 → 참인 보기 수집"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프의 상승·꺾임·열린 점 배치를 $f'$ 의 부호, 극한 존재, 불연속·미분불가 조건으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프에서 불연속점·미분가능하지 않은 점 찾기(보기 진위 판정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=3, x=5 모두 좌우 극한은 같고 함숫값만 어긋난 제거가능 불연속이라 ㄴ은 거짓, ㄷ도 개수가 2개이므로 거짓이다.
    ㄱ은 꺾인 점 x=1 이후 그래프가 오르므로 참, ㄹ은 불연속 2개에 꺾인 점 1개를 더해 3개로 참.
    "극한은 있는데 불연속"이라는 구분이 ㄴ·ㄷ을 동시에 가르는 함정이고, 68-106과 같은 RT d1 한 단계. STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "그래프에서 꺾임·열린 점 위치 수집 → 보기별 부호·극한·개수 판정 → 참인 보기만 수집"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "ㄱ, ㄹ"
  answer_source: "답지"
  figure: "crop:fig-70-113.png"
  latex: latex-bank/gn-calc1/items/70-113.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기의 구간($1<x<2$)과 개수(1개·3개)만 바꿀 수 있음. 제약: 그림이 답을 결정하므로 개수 변경은 그림 재작도가 전제. 제거가능 불연속을 최소 1개 남겨야 ㄴ의 함정이 유지됨."
    creative: "(1) 보기를 5지선다 조합(ㄱ, ㄱㄴ, ㄱㄹ …)으로 바꾸기(★2) (2) '불연속점 개수+미분불가점 개수'를 단답으로(★2) (3) 같은 그래프에 연속이지만 미분불가인 점을 묻는 보기를 추가(★3) (4) 구간 끝 $x=-1$ 을 닫힌 구간으로 바꿔 끝점 미분가능성을 논점화(★3)."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC1-70-114
  page: 70
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=x^2-x+1$ 에서 x가 a에서 b까지 변할 때의 평균변화율과 $x=3$ 에서의 순간변화율이 같을 때 $a+b$ 의 값 구하기.
  category: "평균변화율 정리 → 순간변화율과 등치 → a+b"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평균변화율과 순간변화율이 같을 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    이차함수의 평균변화율은 $(b-a)$ 로 약분되어 $a+b-1$ 로 정리되고, $f'(3)=5$ 와 놓으면 $a+b$ 가 바로 나온다.
    a, b 각각은 정해지지 않고 합만 정해진다는 점이 이 문항의 성격이지만 변형·약분 자체는 표준이라 통찰 라벨은 붙이지 않았다.
    [분류 이슈] STEP 2 출발점 ★3이나 통찰 0·M_total 6이라 ★2 후보. 라벨은 ★3으로 두고 기록만 한다.
  tier: star_3
  mechanism_primary: "평균변화율 $\\dfrac{f(b)-f(a)}{b-a}$ 를 $a+b-1$ 로 약분 → $f'(3)=5$ 와 등치 → $a+b=6$"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/70-114.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식 계수와 순간변화율을 재는 점(3)을 바꿀 수 있음. 제약: 최고차항 계수가 1이 아니면 평균변화율이 $p(a+b)+q$ 꼴이 되어 $a+b$ 가 분수로 떨어질 수 있으니 계수를 맞출 것. 삼차 이상으로 올리면 $a+b$ 만으로 정리되지 않아 유형이 무너짐."
    creative: "(1) a를 고정하고 b를 묻기(★2) (2) 순간변화율을 재는 점을 미지수 c로 두고 $c=\\dfrac{a+b}{2}$ 임을 보이게 하면 일반화로 ★4 (3) 삼차함수로 올려 평균변화율=순간변화율인 점의 개수를 묻기(★4) (4) 조건을 $a<b$ 로 제한하고 $b-a$ 를 함께 묻기(★3)."
```

```yaml
- id: GN-CALC1-70-115
  page: 70
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    다항함수 $f(x)$ 가 모든 실수 x에 대하여 $f(x-2)-f(-2)=x^3+15x^2+7x$ 를 만족시킬 때 $f'(-2)$ 의 값 구하기.
  category: "항등식 좌변을 미분계수 정의 꼴로 읽기 → 일차항 계수"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$x-2=-2+x$ 로 보아 항등식 좌변이 증분 x에 대한 $f(-2+x)-f(-2)$ 임을 알아채고, 양변을 x로 나눠 $x\\to 0$ 극한을 취하면 $f'(-2)$ 가 됨"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "항등식으로 주어진 함수의 미분계수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f를 실제로 구하려 들면 삼차항까지 계수 비교를 해야 하지만, 좌변을 미분계수 정의의 분자로 읽으면 우변을 x로 나눠 x→0 을 보내는 한 줄로 끝난다.
    즉 답은 우변의 일차항 계수이며, 이 "정의 꼴로 읽기"가 이 문항의 유일한 관문이라 EQV d2 한 단계.
    STEP 2 출발점 ★3 유지. 계수 비교로 우회해도 풀리므로 Mₖ 는 낮게 두었다.
  tier: star_3
  mechanism_primary: "$f(x-2)-f(-2)$ 를 증분 x의 $f(-2+x)-f(-2)$ 로 읽기 → 양변 x로 나누기 → $x\\to 0$ → 우변 일차항 계수"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/70-115.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평행이동량(-2)과 우변 다항식의 계수를 바꿀 수 있음. 제약: 우변에 상수항이 있으면 x=0 대입에서 $0=$ 상수 가 되어 항등식이 깨지므로 상수항은 반드시 0이어야 하고, 답은 언제나 우변의 일차항 계수다."
    creative: "(1) $f'(-2)$ 대신 $f(0)-f(-2)$ 처럼 값을 묻기(우변에 x=2 대입 ★2) (2) 우변을 $x^3+ax^2+bx$ 로 두고 $f'(-2)=3$ 이 되는 b를 역으로 묻기(★3) (3) 좌변을 $f(2x-2)-f(-2)$ 로 바꿔 증분 배율을 넣으면 계수 조정이 한 겹 늘어 ★3~4 (4) f의 차수를 함께 묻기(★3)."
```

```yaml
- id: GN-CALC1-70-116
  page: 70
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    다항함수 $f(x)$ 가 $f(1)=1$, $f'(1)=3$ 일 때 $x\to 1$ 에서 $\dfrac{x^3f(1)-f(x^2)}{x-1}$ 의 값 구하기.
  category: "분자에 $f(1)$ 삽입해 두 조각으로 분해 → 합성 꼴은 $x^2-1$ 기준으로 환산"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분자를 $(x^3-1)-(f(x^2)-f(1))$ 로 갈라 다항식 극한과 미분계수 정의 꼴 두 조각으로 분리"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$f(x^2)-f(1)$ 은 분모를 $x^2-1$ 로 맞춰야 $f'(1)$ 이 되므로 $\\dfrac{x^2-1}{x-1}=x+1$ 을 곱해 보정"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "미분계수 정의 꼴로의 변형(합성 꼴 $f(x^2)$ 의 분모 보정)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $f(1)=1$ 이라 분자의 $x^3f(1)$ 은 $x^3$ 이고, 여기에 $\pm 1$ 을 넣어 $(x^3-1)$ 과 $(f(x^2)-f(1))$ 로 쪼갠다.
    앞 조각은 $3$, 뒤 조각은 분모를 $x^2-1$ 로 맞춘 뒤 $x+1$ 을 곱해 $f'(1)\times 2=6$ 이 되고 부호가 붙어 차가 된다.
    같은 EQV 유형이지만 분해 단계와 분모 보정 단계가 따로 요구돼 통찰 2개. +1(★4) 후보지만 두 단계 모두 표준 분해라 STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "$f(1)=1$ 대입 → 분자를 $(x^3-1)-(f(x^2)-f(1))$ 로 분해 → 뒤 항에 $\\dfrac{x^2-1}{x-1}=x+1$ 보정 → $3-2f'(1)$"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/70-116.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$f(1)$, $f'(1)$ 값과 $x^3$ 의 차수, 안쪽 합성 $x^2$ 의 차수를 바꿀 수 있음. 제약: $x^n f(1)$ 의 상수항이 $f(1)\\cdot 1=f(1)$ 과 같아야 0/0 이 유지되고, 합성 차수 m이면 보정 계수가 m이 되어 답이 $n-m\\,f'(1)$ 꼴이 되므로 정수로 떨어지게 고를 것."
    creative: "(1) 안쪽을 $f(x^3)$ 으로 올려 보정 계수를 3으로(★3) (2) 분자를 $f(x^2)-x^2f(1)$ 로 바꿔 부호를 뒤집기(★3) (3) $f(1)$ 을 미지수로 두고 극한값을 준 뒤 $f(1)$ 을 역추적(I-BW 추가 ★4) (4) 분모를 $x^2-1$ 로 바꿔 보정을 없애면 ★2."
```

```yaml
- id: GN-CALC1-70-117
  page: 70
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    미분가능한 함수 $f(x)$ 가 $f(1)=0$ 이고 $x\to 1$ 에서 $\dfrac{\{f(x)\}^2-2f(x)}{1-x}$ 의 극한이 10일 때 $f'(1)$ 의 값 구하기.
  category: "분자 인수분해 → $f(1)=0$ 으로 정의 꼴 확보 → 분모 부호 반전"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분자를 $f(x)\\{f(x)-2\\}$ 로 묶고 $f(1)=0$ 이므로 $f(x)=f(x)-f(1)$ 로 읽어 $\\dfrac{f(x)-f(1)}{x-1}$ 를 떼어내며, 분모 $1-x$ 의 부호를 뒤집어 보정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "미분계수 정의 꼴로의 변형(분자 인수분해·분모 부호)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분자를 인수분해하지 않고 제곱을 전개하면 길이 막힌다. 묶은 뒤 $f(1)=0$ 을 넣어야 정의 꼴이 생기고,
    남는 $f(x)-2$ 는 연속성으로 $-2$ 에 수렴하므로 전체가 $-f'(1)\times(-2)=2f'(1)$ 이 된다.
    분모가 $x-1$ 이 아니라 $1-x$ 인 것이 유일한 부호 함정이고, 이를 놓치면 부호가 뒤집힌 답이 나온다. STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "분자 $f(x)\\{f(x)-2\\}$ 로 인수분해 → $f(1)=0$ 으로 정의 꼴 확보 → $1-x=-(x-1)$ 부호 보정 → $2f'(1)=10$"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/70-117.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 상수 2와 극한값 10, 기준점 1을 바꿀 수 있음. 제약: $f(1)=0$ 이어야 분자가 0이 되어 0/0 꼴이 유지되고, 답은 (극한값)/(상수)의 부호를 분모 방향에 맞춘 값이므로 정수로 떨어지게 상수를 고를 것."
    creative: "(1) 분모를 $x-1$ 로 바꿔 부호 함정을 제거(★2~3) (2) 분자를 $\\{f(x)\\}^3-4f(x)$ 로 올려 인수 두 개가 남게(★3) (3) $f(1)=0$ 을 빼고 '극한이 존재한다'만 주어 $f(1)$ 의 후보 0과 2를 모두 따지게 하면 I-MI·I-VF 가 생겨 ★4 (4) $f'(1)$ 을 주고 극한값을 묻는 역방향(★2)."
```

```yaml
- id: GN-CALC1-70-118
  page: 70
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    다항함수 $f(x)$ 에 대하여 $x\to 2$ 에서 $\dfrac{f(x-1)-8}{x^2-4}$ 의 극한이 3일 때 $f(1)+f'(1)$ 의 값 구하기.
  category: "극한 존재 → 분자도 0 → $f(1)$ 확정 → 분모 인수분해로 $f'(1)$"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "분모가 0으로 가는데 극한이 유한하므로 분자도 0이어야 한다는 역방향 추론으로 $f(1)=8$ 을 먼저 확정"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분자를 $f(x-1)-f(1)$ 로 바꿔 읽고 분모를 $(x-2)(x+2)$ 로 갈라 증분 $x-2$ 기준의 $f'(1)$ 을 떼어냄"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "극한값이 존재할 조건에서 $f(a)$·$f'(a)$ 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 미지수 $f(1)$, $f'(1)$ 을 하나의 극한 조건에서 순서대로 뽑아내는 문항이다. 먼저 분자가 0이어야 한다는 조건이 $f(1)=8$ 을 주고,
    그 다음 $f(x-1)-f(1)$ 을 증분 $x-2$ 로 나눈 꼴이 $f'(1)$ 이며 남은 $\dfrac{1}{x+2}$ 가 1/4 배를 만든다.
    평행이동된 $f(x-1)$ 의 기준점이 1이라는 점(T-단위)과 극한 존재 조건(T-범위)이 함정 둘. STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "분모→0·극한 유한 → 분자→0 → $f(1)=8$ → 분모 $(x-2)(x+2)$ 인수분해 → $\\dfrac{f'(1)}{4}=3$ → $f(1)+f'(1)$"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$20$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/70-118.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 상수 8, 극한값 3, 분모 이차식과 평행이동량(-1)을 바꿀 수 있음. 제약: 기준점은 분모 이차식의 근이어야 하고, 분자 상수가 곧 $f(\\text{기준점}-1)$ 값이 되며, $f'$ 은 (극한값)×(남는 인수 값)이므로 정수로 떨어지게 맞출 것."
    creative: "(1) $f(1)$ 만 또는 $f'(1)$ 만 묻기(★2~3) (2) 분모를 $(x-2)^2$ 로 바꾸면 분자의 일차항까지 0이어야 해 조건이 하나 더 생김(★4) (3) $f(x-1)$ 을 $f(x^2-3)$ 으로 바꿔 증분 보정을 넣기(★4) (4) 극한값을 주지 않고 '존재한다'만 주면 관계식만 남아 ★3."
```

```yaml
- id: GN-CALC1-71-119
  page: 71
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    미분가능한 함수 $f(x)$ 가 모든 실수 x, y에 대하여 $f(x+y)=2f(x)f(y)$ 를 만족시키고 $f'(0)=4$ 일 때 $\dfrac{f'(100)}{f(100)}$ 의 값 구하기($f(x)$ 는 0이 아님).
  category: "함수방정식에 0 대입 → $f(0)$ 확정 → 정의식에서 $f(100)$ 을 밖으로"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$x=y=0$ 을 대입해 $f(0)=2\\{f(0)\\}^2$ 을 얻고 $f(x)\\ne 0$ 조건으로 $f(0)=\\tfrac12$ 을 확정"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "미분계수 정의의 $f(100+h)$ 를 $2f(100)f(h)$ 로 바꿔 $f(100)$ 을 공통인수로 빼내고 남는 극한을 $f(0)=\\tfrac12$ 기준의 $f'(0)$ 으로 환원"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "함수방정식과 미분계수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f의 구체적 식을 찾지 않고도, 정의식에 함수방정식을 넣으면 $f(100)$ 이 통째로 빠져나가 구하는 비가 상수가 된다.
    관문은 둘 — 대입으로 $f(0)$ 을 먼저 정하는 것, 그리고 남은 극한을 $f(0)$ 을 기준으로 한 $f'(0)$ 으로 읽는 것이다.
    $f(x)\ne 0$ 조건은 $f(0)=0$ 갈래를 버리는 데만 쓰인다.
    [분류 이슈] 통찰 2개로 +1(★4) 후보지만 두 라벨이 모두 EQV 이고 저노출 유형(SC·VF·SYM·XU)이 없어 STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "$x=y=0$ 대입 → $f(0)=\\tfrac12$ → $f'(100)=\\lim\\dfrac{2f(100)f(h)-f(100)}{h}=f(100)\\cdot 2f'(0)$ → 비는 $2f'(0)$"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/71-119.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "함수방정식의 계수 2, $f'(0)$ 값 4, 구하는 점 100을 바꿀 수 있음. 제약: $f(x+y)=kf(x)f(y)$ 이면 $f(0)=1/k$ 이고 답은 $kf'(0)$ 이 되므로 k와 $f'(0)$ 을 정수 답이 나오게 고를 것. 구하는 점 100은 답에 전혀 영향을 주지 않으므로 아무 값이나 가능(이 무관함이 문항의 핵심)."
    creative: "(1) $f(x+y)=f(x)f(y)$ 로 바꿔 $f(0)=1$ 인 표준형으로(★3) (2) $f(x+y)=f(x)+f(y)+axy$ 꼴(덧셈형)로 바꾸면 $f'(x)$ 를 x의 식으로 구하게 되어 ★4 (3) $f(2)$ 값을 추가로 주고 $f'(2)$ 를 묻기(★3) (4) $f(x)\\ne 0$ 조건을 빼면 $f\\equiv 0$ 갈래를 기각해야 해 I-VF 가 생기며 ★4."
```

```yaml
- id: GN-CALC1-71-120
  page: 71
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    곡선 $y=f(x)$ 와 직선 $y=g(x)$ 가 $x=a$ 인 점에서 접할 때 $x\to a$ 에서 $\dfrac{f(x)-g(x)}{x-a}$ 의 값 구하기(그림 제시).
  category: "접함 → 함숫값·미분계수 동시 일치 → 차함수의 미분계수"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그림의 기하적 조건 '$x=a$ 에서 접한다'를 $f(a)=g(a)$ 와 $f'(a)=g'(a)$ 라는 해석적 두 등식으로 옮기고, 주어진 극한을 차함수 $f-g$ 의 미분계수로 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "접선 조건의 미분계수 해석(차함수의 미분계수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접한다는 말에서 값 일치만 꺼내면 0/0 꼴에서 멈추고, 기울기 일치까지 꺼내야 답이 정해진다.
    $h=f-g$ 로 두면 $h(a)=0$ 이므로 주어진 극한이 곧 $h'(a)=f'(a)-g'(a)=0$ 이다. 곡선·직선의 구체적 식이 전혀 필요 없다는 것이 요점.
    기하 조건을 해석 조건으로 옮기는 RT d2 한 단계. 두 함수 모두 미지라 Mₐ 3. STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "접함 → $f(a)=g(a)$, $f'(a)=g'(a)$ → $h=f-g$ 로 두면 $h(a)=0$ → 극한은 $h'(a)=f'(a)-g'(a)=0$"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$0$'
  answer_source: "답지"
  figure: "crop:fig-71-120.png"
  latex: latex-bank/gn-calc1/items/71-120.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점의 x좌표 a는 문자로 남으므로 수치 변형 여지가 거의 없고, 그림의 라벨(a, 곡선·직선 이름)만 바뀐다. 제약: 답 0은 접한다는 조건 자체에서 나오므로 구체적 수치를 넣어도 답은 변하지 않는다."
    creative: "(1) 분모를 $(x-a)^2$ 로 올리면 값이 $\\tfrac12 f''(a)$ 꼴이 되어 정의 범위를 벗어남 — 교과 범위 안에서는 $f(x)-g(x)=k(x-a)^2$ 로 두게 하면 ★4 (2) 두 곡선이 만나기만 할 때(접하지 않을 때)의 값을 함께 묻기(★3) (3) $f$, $g$ 에 구체적 식을 주고 접할 조건을 역으로 구하게 하면 I-BW 추가 ★3 (4) 극한값이 0임을 이용해 '접한다'를 판정하는 역방향 참거짓(★4)."
```

```yaml
- id: GN-CALC1-71-121
  page: 71
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    보기 ㄱ~ㄷ의 구간별 정의 함수 중 $x=0$ 에서 미분가능한 것을 모두 고르기.
    ㄱ은 $2x$ 와 $-2x$, ㄴ은 $(x+1)^2$ 과 $2x+1$, ㄷ은 $x^2+x+1$ 과 $-x^2+x-1$ 의 이어 붙임.
  category: "보기별 경계 연속 확인 → 통과한 것만 좌우 미분계수 비교"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 점에서의 미분가능성 판별(구간별 정의 함수 보기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㄷ은 좌우 함숫값이 1과 -1로 갈려 연속부터 깨지므로 미분계수를 볼 필요가 없고, ㄱ은 연속이지만 기울기가 2와 -2로 갈린다.
    ㄴ만 값 1과 기울기 2가 모두 맞는다. 연속을 먼저 보는 순서를 건너뛰고 도함수만 비교하면 ㄷ을 미분가능으로 오판하는 것이 함정이다.
    판정 자체는 67-e6과 같은 정의 대입 절차라 통찰 라벨은 없다.
    [분류 이슈] 67-e6·67-105와 사실상 같은 골조인데 구역(STEP 2) 차이로 ★이 1단 높다. 라벨은 구역 신호대로 ★3 유지.
  tier: star_3
  mechanism_primary: "보기별 경계 좌우 함숫값 비교(연속) → 연속인 것만 좌우 미분계수 비교 → 둘 다 일치하는 보기 선택"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "ㄴ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/71-121.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 보기의 계수와 경계점 0을 바꿀 수 있음. 제약: 세 보기가 '연속·미분가능' '연속·미분불가' '불연속' 세 갈래를 하나씩 담아야 변별이 유지되고, ㄴ 꼴은 경계에서 값과 기울기가 동시에 맞도록 상수항·일차항 계수를 맞출 것."
    creative: "(1) '연속인 것'을 고르게 바꾸면 답이 ㄱ, ㄴ으로 늘어남(★2) (2) 보기 하나에 미정계수를 넣고 미분가능하도록 값을 정하게 하면 I-BW 추가 ★4 (3) 경계를 0이 아닌 값으로 옮기기(★3) (4) 보기를 5지선다 조합으로 바꾸기(★3)."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC1-71-122
  page: 71
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    두 다항함수 $f$, $g$ 가 ㈎ $x\to 1$ 에서 $\dfrac{f(x)-g(x)}{x-1}$ 의 극한이 5, ㈏ $x\to 1$ 에서 $\dfrac{f(x)+g(x)-2f(1)}{x-1}$ 의 극한이 7을 만족시킨다.
    두 실수 a, b에 대하여 $x\to 1$ 에서 $\dfrac{f(x)-a}{x-1}$ 의 극한이 $b\times g(1)$ 일 때 $ab$ 의 값. 5지선다.
  category: "극한 존재 → 분자 0 조건으로 $g(1)=f(1)$ → 두 미분계수 연립 → $ab=f'(1)$"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "㈎에서 분모가 0으로 가는데 극한이 유한하므로 분자도 0이어야 한다는 역추론으로 $g(1)=f(1)$ 을 먼저 확정"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "㈏의 $-2f(1)$ 을 $-f(1)-g(1)$ 로 바꿔 읽어 좌변을 $f'(1)+g'(1)$ 로 분해하고, ㈎의 $f'(1)-g'(1)$ 과 연립"
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "목표 극한이 유한하려면 $a=f(1)$ 이어야 하고 그때 값이 $f'(1)$ 이므로 $b=f'(1)/g(1)$, 따라서 $ab$ 에서 미지의 $f(1)$ 이 소거되어 $f'(1)$ 만 남음"
  insight_count: 3
  depth_score: 2.00
  type_id: null
  type_hint: "극한 조건 여러 개에서 두 함수의 미분계수 연립"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    세 번 모두 "분모가 0이면 분자도 0" 과 "정의 꼴로 읽기" 라는 같은 도구를 쓰지만, 쓰는 대상이 조건 ㈎·㈏·목표식으로 각각 달라 단계가 셋이다.
    ㈏의 $-2f(1)$ 을 $-f(1)-g(1)$ 로 바꿔야 두 미분계수의 합이 나온다는 것이 최대 관문이다.
    $f(1)$, $g(1)$ 의 값 자체는 끝까지 모르지만 $ab$ 에서 소거되므로 답이 결정된다는 구조가 이 문항의 성격이다.
    실력 UP 출발점 ★4 · 통찰 3개로 +1 후보지만 저노출 유형(SC·VF·SYM·XU)이 없어 ★5 게이트에 걸리므로 ★4 유지.
  tier: star_4
  mechanism_primary: "㈎ 분자→0 → $g(1)=f(1)$ → ㈏를 $f'(1)+g'(1)=7$ 로 분해 → ㈎의 $f'(1)-g'(1)=5$ 와 연립 → $a=f(1)$, $b=f'(1)/g(1)$ → $ab=f'(1)$"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/71-122.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "㈎·㈏의 극한값 5와 7, 기준점 1을 바꿀 수 있음. 제약: $ab=f'(1)=\\dfrac{(㈎)+(㈏)}{2}$ 이므로 두 값의 합이 짝수여야 선택지가 정수로 떨어진다. $g'(1)$ 도 함께 정해지므로 음수가 되어도 무방하지만 ㈎·㈏를 바꿔도 $f(1)$ 은 끝까지 미정인 구조를 유지해야 함."
    creative: "(1) $ab$ 대신 $g'(1)$ 이나 $f'(1)+2g'(1)$ 을 묻기(★3~4) (2) 목표식을 $\\dfrac{g(x)-a}{x-1}=b\\times f(1)$ 로 바꿔 대칭 위치로(★4) (3) 조건을 세 개로 늘려 $f'(1)$, $g'(1)$, $h'(1)$ 연립으로(★4) (4) $f(1)$ 의 구체적 값을 함께 주면 소거 구조가 사라져 단순 연립이 되어 ★3 (5) ㈎의 극한이 존재하지 않는 경우를 함께 따지게 하면 I-VF 가 생겨 ★5 후보."
```

## 표본 판정 요약 (20문)

- ★ 분포: ★1 0 · ★2 11 · ★3 8 · ★4 1 · ★5 0
- 통찰형 14 · 절차형 6 · premium 0
- 통찰 라벨 19개의 유형 분포: I-EQV 12 · I-RT 4 · I-BW 3 (I-SC·I-VF·I-SYM·I-XU 0 → 이 범위에 ★5 없음)
- depth 분포: d1 9 · d2 10 · d3 0
- type_hint 상위: 「미분계수 정의 꼴로의 환원」 6(69-108·69-109·69-110·69-111·70-116·70-117) · 「그래프에서 불연속점·미분불가능점 찾기」 3(68-e7·68-106·70-113) · 「한 점에서의 연속성·미분가능성 조사」 3(67-e6·67-105·71-121) · 「평균변화율 조건」 2(69-107·70-114) · 나머지 6은 단발(연속이지만 미분불가인 함수 판별 · 항등식 · 극한 존재 조건 · 함수방정식 · 접선 조건 · 두 함수 미분계수 연립)
- 그림: 4문(`crop:fig-68-e7.png` · `crop:fig-68-106.png` · `crop:fig-70-113.png` · `crop:fig-71-120.png`)
- 대상층: 중하위권 4 · 중위권 8 · 중상위권 6 · 상위권 1 · 하위권 0(전 문항이 ★2 이상이고 절댓값·구간별 판정이 기본이라 하위권 적합 문항 없음)

## 분류 이슈 목록

판정이 애매하거나 벤더 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않고 벤더 구역 신호를 우선했다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC1-70-114 | STEP 2 출발점 ★3이나 통찰 0 · M_total 6 으로 절차형 ★2 후보. 라벨은 ★3 유지 | ★2 / ★3 |
| GN-CALC1-71-119 | 통찰 2개(EQV d2)로 +1(★4) 후보지만 저노출 유형(SC·VF·SYM·XU) 부재. 라벨은 ★3 유지 | ★3 / ★4 |
| GN-CALC1-71-121 | 67-e6·67-105와 사실상 같은 골조인데 구역 차이로 ★이 1단 높음. 카탈로그 설계 때 같은 유형으로 묶일 가능성 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **「미분계수 정의 꼴로의 환원」 6문**이 이 범위의 최대 군집이다. 세부 갈래가 셋으로 갈린다 — ⑴ 분자에 $f(a)$ 를 넣고 빼는 삽입형(69-108·69-109), ⑵ 분자·분모를 인수분해해 $x-a$ 를 만드는 인수분해형(69-110·69-111·70-117), ⑶ 합성 꼴 $f(x^2)$·$f(x-1)$ 의 분모를 보정하는 증분 환산형(70-116·70-118). 학생 체감이 ⑴<⑵<⑶ 순으로 올라가므로 **base ★를 각각 2·2·3 으로 두고 세 유형으로 분리**하는 편이 낫다. 한 유형으로 묶으면 ★ 폭이 2~4로 벌어진다.
- **「그래프에서 불연속점·미분불가능점 찾기」 3문**은 묻는 형식만 다르고(값 나열 · 5지선다 · ㄱㄴㄷ 보기) 골조가 동일하므로 **한 유형으로 통합**해도 된다. base ★2.
- **「한 점에서의 연속성·미분가능성 조사」 3문**(67-e6·67-105·71-121)도 통합 대상이다. 다만 71-121처럼 보기 중 하나가 아예 불연속인 배치는 난도가 반 단 높으므로 카탈로그에 "불연속 보기 포함" 변형 표시를 두면 좋다. base ★2.
- **「평균변화율 조건」 2문**(69-107·70-114)은 07단원(평균변화율과 미분계수)과 겹치므로 단원 경계를 정해 한쪽에만 등재해야 중복이 생기지 않는다.
- **따로 세워야 할 유형**: 항등식으로 주어진 함수의 미분계수(70-115) · 함수방정식과 미분계수(71-119) · 접선 조건의 미분계수 해석(71-120) · 극한 조건 여러 개에서 두 함수의 미분계수 연립(71-122). 넷 모두 이 범위에 1문씩만 있지만 골조가 서로 완전히 달라 통합 불가이며, 71-119·71-122 는 base ★3~4 변별 슬롯 후보다.
- 이 범위에는 I-SC·I-VF·I-SYM·I-XU 통찰이 하나도 없다. ★5 슬롯을 만들려면 `variation_notes.creative` 에 적어 둔 확장(70-117의 $f(1)$ 후보 기각, 71-119의 $f\equiv 0$ 갈래 기각, 71-122의 극한 비존재 갈래)처럼 **사후 검증(I-VF)을 새로 심어야** 한다.
