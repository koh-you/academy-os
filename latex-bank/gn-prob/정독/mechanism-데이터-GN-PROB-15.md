---
name: mechanism-데이터-GN-PROB-15
description: 개념원리 확률과 통계 15 연속확률변수의 확률분포(1/1 · 14문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 확률과 통계 (22개정) · 전사본 latex-bank/gn-prob
  section: 15 연속확률변수의 확률분포
  unit_code: PROB-15
  part: "1/1"
  extract_range: "145~148쪽 · 145-318~148-329"
  total_problems: 14
  unit_total: 14
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-prob/items/<id>.tex
  image_source: latex-bank/gn-prob/figures/ (crops.json)
---

# 개념원리 확률과 통계 · 15 연속확률변수의 확률분포 (1/1) 정독 데이터 (v1.0)

이 파일은 145~148쪽 네 쪽에 걸친 15단원 14문항(`145-318`~`148-329`) 전수를 다룬다. 벤더 난이도 신호는 구역과 태그로 나타난다. **개념원리 익히기**(통번호 · ★1 출발) 3문항, **필수·발전 예제** 구역의 상자 발문 **필수 예제** 2문항(★2 출발)과 그 아래 딸린 **확인체크** 4문항(개념 확인 · ★1 출발), **연습문제 STEP 1**(★2 출발) 2문항, **STEP 2**(★3 출발) 2문항 — 그중 하나는 「수능 기출」 태그 — 그리고 **실력 UP**(★4 출발) 1문항이다. 그림은 3문항(`146-321` · `148-327` · `148-328`)에 붙고, 모두 확률밀도함수의 그래프다.

이 범위는 14문항 전부가 **「확률밀도함수의 그래프와 x축 사이 넓이 = 확률, 전체 넓이 = 1」** 한 도구로 풀려 M_total 이 3~7 구간에 몰린다. 그래서 「통찰 0 · M_total ≤ 5 → −1」 규칙을 기계적으로 적용해 전부 ★1 로 무너뜨리지 않았다. 판정 기준을 이렇게 통일했다. ⑴ 한 번의 대입·한 개의 도형으로 끝나면 출발점에서 내리지 않고 그대로 둔다(익히기 ★1). ⑵ 조각함수 분해·그래프 해석·역산처럼 단계가 하나 더 붙으면 벤더 출발점을 유지한다(예제·확인체크·STEP 1 ★2). ⑶ 확인체크는 ★1 출발이지만 짝이 되는 필수 예제와 골조·난이도가 같으면 ★2 로 올리고 그 사실을 rationale 에 적는다. 골조가 같은 문항이 많아 `category` 와 `type_hint` 가 반복되는데, 이는 카탈로그를 만들 때 한 유형으로 묶어야 한다는 신호이므로 굳이 다르게 쓰지 않았다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 유형 카탈로그가 아직 없는 과목이라 `type_id` · `base_star` 는 null 이고 `type_hint` 로 유형명을 제안한다. `insight_type` 은 `insights` 가 비면 절차형, 하나라도 있으면 통찰형이다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-PROB-145-318
  page: 145
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "익히기"
  summary: |
    $-1\le X\le 1$ 에서 값을 갖는 확률변수 $X$ 의 확률밀도함수가 될 수 있는 것을 보기 ㄱ~ㄹ($\dfrac{1}{2}$ · $2x$ · $x+1$ · $|x|$)에서 모두 고르기.
  category: "확률밀도함수의 두 조건(음이 아닌 값 · 전체 넓이 1) → 보기 넷 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률밀도함수가 될 조건 판별(음이 아닌 값 · 전체 넓이 1)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    보기 넷을 각각 두 조건으로 점검한다. ㄴ은 구간의 음수 부분에서 값이 음수라 탈락, ㄷ은 넓이가 2 라 탈락, ㄱ·ㄹ만 두 조건을 모두 만족한다. 판정 횟수는 넷이지만 도구는 정의 하나뿐이고 통찰 0·M_total 5 → 익히기 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: "보기마다 구간에서 f(x)≥0 확인 → 그래프 아래 넓이 계산 → 넓이가 1 인 것만 채택"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "ㄱ, ㄹ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/145-318.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의 구간([-1,1] → [0,2] · [0,4] 등)과 보기의 상수·계수. 제약: 채택될 보기는 구간 전체에서 음이 아니고 넓이가 정확히 1 이어야 하므로 구간을 바꾸면 상수항·계수를 함께 조정한다(예: [0,2] 에서는 1/2 · x/2)."
    creative: "(1) 될 수 없는 보기의 이유(음수 / 넓이≠1)를 고르게 하기(★1 유지) (2) f(x)=ax+b 가 확률밀도함수가 되는 (a,b) 조건을 묻기(매개변수 → Mₐ 2 · ★2) (3) 조각함수 보기를 섞으면 구간 분해가 더해져 ★2."
```

```yaml
- id: GN-PROB-145-319
  page: 145
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "익히기"
  summary: |
    ⑴~⑵ 연속확률변수 $X$ 의 확률밀도함수가 ⑴ $f(x)=k\ (-2\le x\le 2)$ ⑵ $f(x)=\dfrac{1}{3}kx\ (0\le x\le 1)$ 일 때 상수 $k$ 구하기.
  category: "전체 넓이 1 → 직사각형·삼각형 넓이 식 → k"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률밀도함수의 성질 — 전체 넓이 1 로 상수 결정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 은 가로 4·세로 k 직사각형, ⑵ 는 밑변 1·높이 k/3 삼각형의 넓이를 1 로 놓으면 끝난다. 도형 하나·한 줄 계산·통찰 0 → 익히기 ★1.
  tier: star_1
  mechanism_primary: "구간 위 그래프 아래 넓이를 1 로 놓기 → ⑴ 4k=1 ⑵ (1/2)·1·(k/3)=1 → k"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{1}{4}$ ⑵ $6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/145-319.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간의 길이(-2~2 → 0~5 등)와 ⑵ 의 계수(1/3 → 1/2 · 2). 제약: k 는 양수여야 하고, 구간에서 f(x)≥0 이 유지되도록 기울기 부호를 지킨다. 답이 지저분해지지 않게 구간 길이는 계수의 약수 관계로 고른다."
    creative: "(1) 직사각형을 일차식 f(x)=ax+b 로 바꿔 미정상수 둘 중 하나를 더 주기(★2) (2) 구간 끝을 매개변수 a 로 두고 k 를 a 로 나타내기(Mₐ 2 · ★2) (3) 조각함수(상수+일차)로 만들면 구간 분해가 붙어 ★2."
```

```yaml
- id: GN-PROB-145-320
  page: 145
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "익히기"
  summary: |
    확률밀도함수가 $f(x)=\dfrac{1}{18}x\ (0\le x\le 6)$ 일 때 ⑴ $\mathrm{P}(2\le X\le 4)$ ⑵ $\mathrm{P}(X\ge 3)$ 구하기.
  category: "확률 = 그래프 아래 넓이 → 사다리꼴 / 여사건"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "연속확률변수의 확률 구하기 — 구간 넓이"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 은 두 끝값을 윗변·아랫변으로 하는 사다리꼴, ⑵ 는 1 에서 0~3 삼각형을 빼면 된다(직접 사다리꼴로 구해도 같다). 확률=넓이 정의를 그대로 쓰는 단계뿐이라 통찰 0 → 익히기 ★1.
  tier: star_1
  mechanism_primary: "P(a≤X≤b) = 그래프 아래 넓이 → ⑴ (1/2)(f(2)+f(4))·2 ⑵ 1 − (0~3 삼각형 넓이)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{1}{3}$ ⑵ $\dfrac{3}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/145-320.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기 1/18 과 구간 0~6(= 넓이 1 을 맞추는 한 쌍이므로 함께 바꾼다: 0~b 에서 f=2x/b²), 묻는 구간 [2,4]·[3,6]. 제약: 전체 넓이가 1 이 되도록 기울기와 구간 끝이 연동되고, 답이 유리수가 되게 구간 끝을 정수로."
    creative: "(1) P(X≥3) 대신 P(X≤a)=1/4 인 a 를 묻기(역산 → I-BW · ★2) (2) f 를 감소 일차식으로 바꿔 여사건이 자연스럽게 하기(★1 유지) (3) 두 확률의 비를 묻기(넓이비 → 닮음 착안 · ★2~3)."
```

### 필수·발전 예제

```yaml
- id: GN-PROB-146-e14
  page: 146
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    확률밀도함수가 $f(x)=k(3x+1)\ (0\le x\le 2)$ 일 때 상수 $k$ 구하기.
  category: "전체 넓이 1 → 사다리꼴(또는 정적분) → k"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률밀도함수의 성질 — 전체 넓이 1 로 상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(0)=k, f(2)=7k 인 사다리꼴 넓이 (1/2)(k+7k)·2=8k 를 1 로 놓으면 끝난다. M_total 3 이라 산식상 −1 후보지만, 이 단원 대표 골조를 세우는 필수 예제이고 상수·삼각형이 아닌 일반 일차식 넓이를 다루므로 벤더 ★2 출발점을 유지했다.
  tier: star_2
  mechanism_primary: "f(0)·f(2) 로 사다리꼴 넓이 8k 계산 → 8k=1 → k"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{8}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/146-e14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차식의 계수·상수항(3x+1 → 2x+3 · 4x−1)과 구간 끝(2 → 3 · 4). 제약: 구간 전체에서 f(x)≥0 이어야 하므로 계수를 음수로 바꾸면 구간 끝에서의 값이 0 이상인지 확인하고, k 가 단순한 분수가 되도록 넓이를 정수로 맞춘다."
    creative: "(1) k 를 주고 구간 끝 a 를 묻기(이차방정식 역산 · I-BW · ★2) (2) 조각함수(일차+상수)로 바꿔 구간 분해를 추가(★2) (3) k 를 구한 뒤 P(0≤X≤1) 까지 묻는 2단 문항(★2~3)."
```

```yaml
- id: GN-PROB-146-321
  page: 146
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $0\le x\le 5$ 에서 정의된 확률밀도함수 $y=f(x)$ 의 그래프가 $(0,k)$ 에서 $(2,0)$ 으로 내려갔다가 $(5,k)$ 로 올라가는 V 자일 때 상수 $k$ 구하기.
  category: "그래프를 두 삼각형으로 분해 → 넓이 합 1 → k"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프형 확률밀도함수 — 전체 넓이 1 로 상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그림에서 밑변 2·높이 k 삼각형과 밑변 3·높이 k 삼각형을 읽어 k + (3/2)k = (5/2)k = 1. 식을 주지 않고 그래프에서 두 조각을 읽어 분해하는 단계가 붙어, 확인체크 ★1 출발이지만 짝이 되는 필수 예제(146-e14)와 같은 층으로 보고 ★2 로 둔다. [분류 이슈] 확인체크 태그의 ★1 출발과 1단 차이 — 파일 끝 표에 기록.
  tier: star_2
  mechanism_primary: "그림에서 두 삼각형(밑변 2·3, 높이 k) 읽기 → 넓이 합 (5/2)k=1 → k"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2}{5}$'
  answer_source: "답지"
  figure: "crop:fig-146-321.png"
  latex: latex-bank/gn-prob/items/146-321.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꺾이는 점의 위치(x=2 → 1·3)와 오른쪽 끝(5 → 4·6), 양 끝 높이를 서로 다르게(왼쪽 k·오른쪽 2k). 제약: 그림 라벨(0·2·5·k)과 값이 반드시 일치해야 하고 넓이 합이 1 이 되는 k 가 단순 분수로 떨어지게 밑변 합을 정수로 둔다."
    creative: "(1) k 를 주고 꺾이는 점의 x좌표를 묻기(역산 · I-BW · ★2) (2) k 를 구한 뒤 P(0≤X≤2) 를 이어서 묻기(★2) (3) 한쪽 조각을 수평선으로 바꿔 삼각형+사다리꼴 분해로 만들면 ★3(148-327 골조)."
```

```yaml
- id: GN-PROB-146-322
  page: 146
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    확률밀도함수가 $f(x)=kx\ (0\le x\le 2)$, $f(x)=2k\ (2\le x\le 3)$ 인 조각함수일 때 상수 $k$ 구하기.
  category: "조각함수 분해(삼각형+직사각형) → 넓이 합 1 → k"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률밀도함수의 성질 — 조각함수에서 상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    [0,2] 는 밑변 2·높이 2k 삼각형(넓이 2k), [2,3] 은 가로 1·세로 2k 직사각형(넓이 2k)이라 4k=1. 구간마다 도형을 갈라 보는 단계가 하나 더 붙어 확인체크 ★1 출발에서 ★2 로 둔다(x=2 에서 두 식의 값이 같아 연결된다는 점도 확인 대상).
  tier: star_2
  mechanism_primary: "구간별로 삼각형(2k)·직사각형(2k) 넓이 계산 → 합 4k=1 → k"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/146-322.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경계점(2)과 오른쪽 끝(3), 두 조각의 계수(kx·2k). 제약: 경계에서 두 식의 값이 같아야 연속이고(kx 의 x=2 값 2k 와 상수 조각 2k 가 일치), 넓이 합이 1 인 k 가 단순 분수가 되게 밑변을 정수로."
    creative: "(1) 두 번째 조각을 감소 일차식으로 바꿔 사다리꼴 분해(★2) (2) k 를 주고 오른쪽 끝을 묻기(역산 · ★2) (3) 경계에서 값이 어긋나는 조각함수를 주고 연속성까지 따지게 하면 T-경계 함정이 붙어 ★3."
```

```yaml
- id: GN-PROB-147-e15
  page: 147
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    확률밀도함수가 $f(x)=kx\ (0\le x\le 1)$, $f(x)=k(2-x)\ (1\le x\le 2)$ 인 이등변 삼각형 꼴일 때 $\mathrm{P}\left(0\le X\le\dfrac{1}{2}\right)$ 구하기.
  category: "전체 넓이 1 로 k 결정 → 부분 구간의 작은 삼각형 넓이"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "연속확률변수의 확률 구하기 — 상수 결정 후 부분 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전체가 밑변 2·높이 k 삼각형이라 넓이 k=1 에서 k=1, 이어서 [0,1/2] 은 밑변 1/2·높이 f(1/2) 인 작은 삼각형. 「상수 먼저, 확률 나중」 2단 골조를 세우는 필수 예제라 벤더 ★2 출발 유지.
  tier: star_2
  mechanism_primary: "전체 삼각형 넓이 k=1 → k=1 → [0,1/2] 작은 삼각형 (1/2)·(1/2)·f(1/2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{8}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/147-e15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꼭짓점 위치(x=1 → 2/3 · 3/2 로 옮겨 비대칭 삼각형)와 묻는 구간(1/2 → 1/3 · 3/2). 제약: 전체 넓이 1 을 유지하려면 밑변×높이=2 이고, 묻는 구간 끝이 꼭짓점을 넘으면 사다리꼴/여사건 분해가 필요하니 의도한 난이도에 맞춰 고른다."
    creative: "(1) 꼭짓점을 넘는 구간(P(0≤X≤3/2))을 묻어 두 조각 합·여사건으로 만들기(★2~3) (2) 확률값을 주고 구간 끝을 역산(I-BW · ★2) (3) 대칭을 이용해 P(|X−1|≤1/2) 꼴로 바꾸면 I-SYM 이 붙어 ★3."
```

```yaml
- id: GN-PROB-147-323
  page: 147
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    확률밀도함수가 $f(x)=|x-1|\ (0\le x\le 2)$ 일 때 $\mathrm{P}\left(\dfrac{1}{2}\le X\le\dfrac{3}{2}\right)$ 구하기.
  category: "절댓값 그래프를 V 자로 보고 x=1 대칭 활용 → 한쪽 넓이의 두 배"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프가 x=1 에 대칭임을 보고 [1/2,1] 조각만 구해 두 배 하거나, 여사건 두 조각을 한 번만 계산"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "절댓값 확률밀도함수의 구간 확률(대칭 활용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    |x−1| 은 (1,0) 을 꼭짓점으로 하는 V 자이고 구간 [0,2] 에서 넓이가 이미 1 이라 상수를 구할 필요가 없다. 묻는 구간은 꼭짓점 좌우 두 삼각형이라 한쪽만 계산해 두 배 하면 끝난다. 대칭 착안 1개(SYM d1)로 확인체크 ★1 출발에서 ★2.
  tier: star_2
  mechanism_primary: "|x−1| 을 V 자 그래프로 보기 → x=1 대칭 → [1/2,1] 삼각형 넓이 ×2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/147-323.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꼭짓점(x=1)과 묻는 구간의 반지름(1/2 → 1/3 · 3/4). 제약: f=|x−c| 가 그대로 확률밀도함수이려면 구간이 [c−1,c+1] 이어야 넓이가 1 이 된다. 구간을 넓히면 계수를 붙여 넓이를 다시 1 로 맞춘다."
    creative: "(1) 비대칭 꼭짓점 f=k|x−c| 로 바꿔 대칭 단축을 막기(★2, 계산만 늘어 질은 떨어짐) (2) P(|X−1|≤a)=1/4 인 a 를 역산(I-SYM+I-BW · ★3) (3) 구간을 [0,3] 으로 넓히고 k 를 붙이면 상수 결정 단계가 더해져 ★2~3."
```

```yaml
- id: GN-PROB-147-324
  page: 147
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    확률밀도함수가 $f(x)=1-\dfrac{1}{2}x\ (0\le x\le 2)$ 일 때 $\mathrm{P}(0\le X\le a)=\dfrac{3}{4}$ 를 만족시키는 상수 $a$ 구하기.
  category: "확률 조건 → 여사건 삼각형 넓이 1/4 → 구간 끝 a 역산"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "확률값이 먼저 주어지고 구간 끝 a 를 역추적 — 남은 부분의 넓이를 1/4 로 놓는 쪽이 식이 단순하다는 판단 포함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "확률 조건에서 구간 끝값 역산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    [0,a] 사다리꼴을 직접 세워도 되지만, 남는 [a,2] 가 (2−a) 를 밑변으로 하는 닮은 삼각형이라 넓이 1/4 로 놓으면 (2−a)²/4=1/4 한 줄로 끝난다. 0≤a≤2 범위 확인이 붙고 역방향 사고 1개(BW d1) → 확인체크 ★1 출발에서 ★2.
  tier: star_2
  mechanism_primary: "P(0≤X≤a)=3/4 ⇔ P(a≤X≤2)=1/4 → 남은 삼각형 (1/2)(2−a)(1−a/2)=1/4 → a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/147-324.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 확률값(3/4 → 1/2 · 8/9)과 일차식의 기울기·구간(0~2). 제약: 여사건 삼각형의 넓이비가 닮음비의 제곱이므로 1−(확률) 이 완전제곱수 분수일 때 a 가 유리수로 떨어진다. a 는 0≤a≤2 안에 있어야 한다."
    creative: "(1) 감소 일차식을 증가식으로 바꿔 여사건 방향을 뒤집기(★2 유지) (2) P(a≤X≤2a) 꼴로 두 끝을 동시에 움직이기(★3) (3) 조각함수로 바꿔 a 가 어느 조각에 있는지 먼저 판정하게 하면 케이스 분기가 붙어 ★3(I-MI)."
```

### 연습문제 STEP 1

```yaml
- id: GN-PROB-148-325
  page: 148
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    확률밀도함수가 $f(x)=\dfrac{x}{12}+k\ (0\le x\le 4)$ 일 때 상수 $k$ 구하기.
  category: "전체 넓이 1 → 사다리꼴(윗변 f(0)·아랫변 f(4)) → k"
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률밀도함수의 성질 — 전체 넓이 1 로 상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(0)=k, f(4)=1/3+k 인 사다리꼴 넓이 (1/2)(k+1/3+k)·4=4k+2/3 을 1 로 놓으면 k 가 나온다. 146-e14 와 같은 골조이고 분수 계수가 붙어 계산만 조금 무겁다(Mₖ 2). 통찰 0 이지만 STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "사다리꼴 넓이 (1/2)(f(0)+f(4))·4 = 1 → 4k+2/3=1 → k"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{12}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/148-325.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기(1/12)와 구간 끝(4). 제약: k 가 양수로 나와야 하고(구간 전체에서 f≥0), 사다리꼴 넓이가 1 이 되는 k 가 단순 분수가 되게 기울기의 분모를 구간 끝의 배수로 둔다."
    creative: "(1) 기울기를 음수로 바꿔 f(4)≥0 조건을 따지게 하기(T-부호 추가 · ★2~3) (2) k 를 구한 뒤 P(1≤X≤3) 을 이어 묻기(★2) (3) 구간 끝을 매개변수로 두면 148-326 골조(★2~3)."
```

```yaml
- id: GN-PROB-148-326
  page: 148
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    확률밀도함수가 $f(x)=3k-x\ (0\le x\le 2k)$ 일 때 $\mathrm{P}(0\le X\le k)$ 구하기($k$ 는 상수).
  category: "구간 끝도 k 인 사다리꼴 → 넓이 1 로 k 결정 → 부분 사다리꼴 확률"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "매개변수 구간의 확률밀도함수 — 상수 결정 후 구간 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    식뿐 아니라 구간 끝 2k 까지 미지수라 전체 넓이가 (1/2)(3k+k)·2k=4k² 인 k 의 이차식이 된다. 4k²=1 에서 k>0 을 써 k=1/2 를 고른 뒤, [0,k] 사다리꼴 (1/2)(3k+2k)·k=(5/2)k² 로 확률을 구한다. 매개변수 구간(Mₐ 2)·양수 조건(T-부호)으로 M_total 7 이라 STEP 1 중에서는 무거운 편이지만 통찰 없이 절차로 끝나 ★2 유지. [분류 이슈] STEP 2 급이라는 판단도 가능 — 파일 끝 표에 기록.
  tier: star_2
  mechanism_primary: "구간 끝이 2k 임을 반영해 전체 사다리꼴 넓이 4k²=1 → k>0 로 k=1/2 → P(0≤X≤k)=(5/2)k²"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{5}{8}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/148-326.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항 배수(3k → 4k)와 구간 끝 배수(2k → 3k), 묻는 구간(0~k). 제약: 구간 전체에서 f≥0 이려면 상수항 배수 > 구간 끝 배수여야 하고, 넓이=1 이 k² 의 식이 되므로 k 가 유리수로 떨어지게 계수를 고른다. k>0 를 반드시 명시한다."
    creative: "(1) 답을 k 로 나타내게 해 수치 대입을 없애기(Mₐ 3 · ★3) (2) P(0≤X≤k)=5/8 을 주고 거꾸로 k 를 묻기(I-BW · ★3) (3) f 를 조각함수로 만들어 매개변수 경계까지 다루면 ★3~4."
```

### 연습문제 STEP 2

```yaml
- id: GN-PROB-148-327
  page: 148
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $0\le x\le 4$ 에서 정의된 확률밀도함수 $y=f(x)$ 의 그래프가 $(0,0)\to(1,k)\to(2,k)\to(4,0)$ 을 잇는 사다리꼴일 때 $\mathrm{P}(1\le X\le 3)$ 구하기.
  category: "사다리꼴 전체 넓이 1 로 k 결정 → 구간 [1,3] 을 직사각형+사다리꼴로 분해"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프형 확률밀도함수 — 상수 결정 후 구간 확률"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    전체는 아랫변 4·윗변 1·높이 k 사다리꼴이라 (5/2)k=1 에서 k=2/5. 묻는 구간은 [1,2] 직사각형과 [2,3] 사다리꼴로 갈리고, [2,3] 은 오른쪽 사선 위의 f(3)=k/2 를 읽어야 한다(양 끝 삼각형을 빼는 여사건 길도 같은 값). 구간을 세 번 나눠 읽는 그래프 해석이라 STEP 2 출발점 ★3 유지, 통찰은 표준 분해라 0.
  tier: star_3
  mechanism_primary: "사다리꼴 넓이 (5/2)k=1 → k=2/5 → P(1≤X≤3) = [1,2] 직사각형 k + [2,3] 사다리꼴 (3/4)k"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{7}{10}$'
  answer_source: "답지"
  figure: "crop:fig-148-327.png"
  latex: latex-bank/gn-prob/items/148-327.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꺾이는 점(1·2)과 오른쪽 끝(4), 묻는 구간([1,3] → [1/2,3] 처럼 꺾인 점을 비껴가게). 제약: 그림 라벨과 좌표가 일치해야 하고, 사선 위의 값 f(3) 이 단순 분수가 되도록 오른쪽 사선의 밑변을 2 의 배수로 둔다. 윗변<아랫변 사다리꼴 형태를 유지한다."
    creative: "(1) 여사건(양 끝 두 삼각형)으로만 풀리게 구간을 [1,3] 대신 대칭 구간으로 잡기(★3 유지) (2) k 대신 P(1≤X≤3)=7/10 을 주고 꺾인 점을 역산(I-BW · ★4) (3) 사다리꼴을 좌우 비대칭 삼각형으로 바꾸면 148-328 골조(★4)."
```

```yaml
- id: GN-PROB-148-328
  page: 148
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["수능 기출"]
  category_type: "연습문제"
  summary: |
    $0\le X\le a$ 에서 값을 갖는 $X$ 의 확률밀도함수 그래프가 $(0,0)\to(b,c)\to(a,0)$ 인 삼각형이고 $\mathrm{P}(X\le b)-\mathrm{P}(X\ge b)=\dfrac{1}{4}$, $\mathrm{P}(X\le\sqrt{5})=\dfrac{1}{2}$ 일 때 $a+b+c$ 의 값. 5지선다.
  category: "두 확률 조건을 넓이 식으로 옮겨 세 미지수 a·b·c 역산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "P(X≤b)−P(X≥b)=1/4 를 합이 1 이라는 관계와 묶어 P(X≤b)=5/8 이라는 쓸 수 있는 조건으로 옮김"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "P(X≤√5)=1/2 < 5/8 에서 √5 가 꼭짓점 b 의 왼쪽임을 먼저 판정하고, 왼쪽 삼각형의 넓이비가 닮음비의 제곱임을 써서 b 를 역산"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "그래프형 확률밀도함수 — 확률 조건으로 미지수 역산"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    전체 삼각형 넓이 (1/2)ac=1 이 뼈대이고, 첫 조건은 여사건 관계와 묶어야 P(X≤b)=5/8 이 되며, 둘째 조건은 √5 의 위치를 먼저 판정해야 어느 조각의 넓이인지 정해진다. 위치 판정을 건너뛰면 다른 식을 세워 답이 어긋난다. 통찰 2개(EQV d1·BW d2)에 수능 기출 태그 → STEP 2 출발 ★3 에서 +1 하여 ★4. 저노출 유형 조건은 I-BW 로 충족.
  tier: star_4
  mechanism_primary: "P(X≤b)+P(X≥b)=1 과 차 1/4 → P(X≤b)=5/8 → √5<b 판정 후 왼쪽 삼각형 넓이비로 b, c → 전체 넓이 1 로 a → a+b+c"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-148-328.png"
  latex: latex-bank/gn-prob/items/148-328.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 확률의 차(1/4)와 주어진 지점(√5) 및 그 확률(1/2). 제약: P(X≤b) 가 1/2 보다 큰지 작은지가 지점의 좌우 위치를 정하므로 두 값을 함께 바꿔야 한다. 왼쪽 조각의 넓이비가 닮음비의 제곱이라 지점이 무리수 √n 일 때 b 가 유리수로 떨어진다. 그림 라벨 a·b·c 는 고정."
    creative: "(1) 주어진 지점을 꼭짓점 오른쪽으로 옮겨 여사건 조각을 쓰게 하기(★4 유지, 위치 판정이 핵심) (2) 좌우 어느 쪽인지 정해지지 않게 조건을 약화해 두 경우를 모두 따지고 하나를 기각시키기(I-MI+I-VF · ★5 후보) (3) a+b+c 대신 최댓값 c 를 묻기(★3 로 하락)."
```

### 연습문제 실력 UP

```yaml
- id: GN-PROB-148-329
  page: 148
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $-2\le x\le 2$ 에서 정의된 확률밀도함수 $f(x)$ 가 ㈎ $f(x)=f(-x)$ ㈏ $\mathrm{P}\left(\dfrac{3}{2}\le X\le 2\right)=5\mathrm{P}\left(0\le X\le\dfrac{3}{2}\right)$ 를 만족시킬 때 $\mathrm{P}\left(|X|\le\dfrac{3}{2}\right)$ 구하기.
  category: "우함수 대칭 → 오른쪽 절반의 확률이 1/2 → 두 조건 결합으로 부분 확률 결정"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f 의 식이 없는데도 f(x)=f(−x) 에서 P(0≤X≤2)=1/2 과 P(|X|≤3/2)=2P(0≤X≤3/2) 를 끌어내 문제를 오른쪽 절반으로 축소"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "조건 ㈏ 의 두 확률을 p 와 5p 로 놓아 절반 확률 1/2 과 하나의 식 6p=1/2 로 결합"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "대칭(우함수) 확률밀도함수의 구간 확률"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    확률밀도함수의 식이 주어지지 않아 넓이를 직접 계산할 수 없고(Mₐ 3), 대칭과 비례 조건만으로 값을 정해야 한다. 오른쪽 절반의 확률이 1/2 임을 먼저 얻고 ㈏ 를 p·5p 로 놓으면 6p=1/2, 구하는 값은 대칭으로 2p. 통찰 2개(SYM d2·CON d1)로 실력 UP 출발점 ★4 유지. 대칭을 못 보면 손댈 곳이 없고 보면 세 줄로 끝나 체감 편차가 크다. [분류 이슈] 계산량 기준으로는 ★3 후보 — 파일 끝 표에 기록.
  tier: star_4
  mechanism_primary: "f 가 우함수 → P(0≤X≤2)=1/2 → ㈏ 로 p+5p=1/2 → P(|X|≤3/2)=2p"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{1}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/148-329.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "비례 상수(5 배)와 분할점(3/2), 정의 구간(-2~2). 제약: 분할점은 0 과 구간 끝 사이여야 하고, 절반 확률 1/2 을 (1+배수) 로 나눈 값이 단순 분수가 되게 배수를 고른다(5 → 3·9). 대칭을 유지하려면 구간이 원점 대칭이어야 한다."
    creative: "(1) 조건을 f(x)=−f(−x) 류의 다른 대칭이나 f(x)=f(2−x) 축 대칭으로 바꾸기(★4 유지) (2) 구하는 값을 P(X≤−3/2) 처럼 한쪽 꼬리로 바꾸면 대칭 단계가 한 번 더 필요(★4) (3) 대칭 조건을 빼고 f 의 식을 주면 단순 넓이 계산으로 떨어져 ★2."
```

## 표본 판정 요약 (14문)

- ★ 분포: ★1 3 · ★2 8 · ★3 1 · ★4 2 · ★5 0
- 통찰형 4(`147-323` · `147-324` · `148-328` · `148-329`) · 절차형 10 · premium 0
- 통찰 유형 분포: I-SYM 2 · I-BW 2 · I-EQV 1 · I-CON 1 (총 6 라벨 / 4문항)
- M_total 분포: 3 이 3문 · 4 가 4문 · 5 가 2문 · 6 이 2문 · 7 이 3문 (전 문항이 「넓이=확률」 한 도구라 낮은 쪽에 몰림)
- type_hint 묶음: 「넓이 1 로 상수 결정」 5(`145-319` · `146-e14` · `146-321` · `146-322` · `148-325`) · 「상수 결정 후 구간 확률」 3(`147-e15` · `148-326` · `148-327`) · 「구간 넓이로 확률」 2(`145-320` · `147-323`) · 「확률 조건 역산」 2(`147-324` · `148-328`) · 「확률밀도함수 판별」 1(`145-318`) · 「대칭 구간 확률」 1(`148-329`)
- 그림: 3문(`crop:fig-146-321.png` · `crop:fig-148-327.png` · `crop:fig-148-328.png`) — 모두 확률밀도함수 그래프이고, 도형 분해가 풀이의 첫 단계라 그림 없이는 풀 수 없다
- 대상층: 하위권 3 · 중하위권 6 · 중위권 2 · 중상위권 2 · 상위권 1

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-PROB-146-321 | 태그 「확인체크」는 ★1 출발이지만 짝이 되는 필수 예제(146-e14)와 골조·난이도가 같아 ★2 로 둠. `146-322` · `147-323` · `147-324` 도 같은 구조이므로 확인체크 출발점을 ★1 로 고정할지 「직전 예제와 동급」으로 볼지 카탈로그 설계 때 정할 것 | ★1 / ★2 |
| GN-PROB-148-326 | 벤더 STEP 1(★2 출발)이나 구간 끝까지 매개변수라 Mₐ 2·M_total 7 로 이 범위에서 가장 무거운 절차형. STEP 2 급으로 볼 여지 | ★2 / ★3 |
| GN-PROB-148-329 | 실력 UP(★4 출발) 유지했으나 대칭을 보면 세 줄로 끝나고 계산량은 ★2 수준. 통찰 의존도가 높아 체감 편차가 큼 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 단원의 14문항은 사실상 **두 뿌리**다. ⑴ 전체 넓이 1 로 미지 상수를 정하는 유형(5문), ⑵ 정해진 밀도함수에서 구간 넓이로 확률을 구하는 유형(2문). 나머지는 이 둘의 결합(상수 결정 후 확률 3문)이거나 역방향(확률을 주고 미지수 역산 2문)이다.
- 따로 세워야 할 유형: **「확률밀도함수가 될 조건 판별」**(`145-318`) — 유일하게 f(x)≥0 조건이 판정의 주역이라 넓이 계산 유형과 섞으면 안 된다. **「대칭 확률밀도함수」**(`148-329`) — 식 없이 조건만으로 푸는 유일한 문항이고, 이후 정규분포 단원의 대칭 활용으로 직접 이어진다.
- 통합해도 될 유형: 「식으로 주어진 넓이 1 → 상수 결정」과 「그래프로 주어진 넓이 1 → 상수 결정」(`146-e14` ↔ `146-321` · `146-322` ↔ `148-325`)은 제시 방식만 다르고 골조가 같다. 카탈로그에서는 한 유형으로 묶고 제시 형태를 변형 축(식/그래프/조각함수)으로 두는 편이 낫다.
- ★4 이상 슬롯 후보는 `148-328`(확률 조건 역산 + 위치 판정)과 `148-329`(대칭) 둘뿐이다. 이 단원 단독으로는 ★5 슬롯을 만들기 어렵고, 평균·표준편차나 정규분포와 결합해야 I-XU 가 생긴다.
