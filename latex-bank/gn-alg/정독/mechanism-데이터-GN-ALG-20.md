---
name: mechanism-데이터-GN-ALG-20
description: 개념원리 대수 20 삼각함수가 포함된 방정식과 부등식(1/1 · 34문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정) · 전사본 latex-bank/gn-alg
  section: 20 삼각함수가 포함된 방정식과 부등식
  unit_code: GN-ALG-20
  part: "1/1"
  extract_range: "186~194쪽 · 186-431~194-459"
  total_problems: 34
  unit_total: 34
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(개념원리 익히기 ★1 · 필수 예제와 확인체크 유제 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 insights 의 effective_depth 합. insight_type 은 insights 가 비면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/
---

# 개념원리 대수 · 20 삼각함수가 포함된 방정식과 부등식 (1/1) 정독 데이터 (v1.0)

186~194쪽 34문항 전수. 구역은 「개념원리 익히기」 4문 · 「필수·발전 예제」 13문(필수 예제 e15~e19 5문 + 확인체크 유제 8문) · 「연습문제 STEP 1」 7문 · 「연습문제 STEP 2」 6문 · 「연습문제 실력 UP」 4문이다. 개념원리 고등의 난이도 신호는 구역과 예제 태그이므로 익히기 ★1 · 필수 예제와 그 확인체크 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 를 출발점으로 삼고, M_total 과 통찰 라벨로 ±1 만 조정했다. 기출 태그(수능·교육청)는 통찰이 있을 때만 +1 을 고려했다.

이 단원은 (가) 단위 방정식·부등식을 그래프 교점으로 옮기는 층, (나) 각을 치환해 범위를 다시 잡는 층, (다) 피타고라스 항등식으로 한 문자 이차식으로 만드는 층, (라) 판별식·근과 계수의 관계·제한 범위 이차함수 최대최소로 넘어가는 활용 층의 네 겹으로 쌓인다. 판정에서는 (라) 의 단원 경계 결합만 I-XU 로 세고, 치환 자체·피타고라스 항등식 대입 같은 표준 절차는 통찰로 세지 않았다. tan 의 정의역 제외와 경계 등호는 Mₜ(T-범위·T-경계) 로 흡수했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-ALG-186-431
  page: 186
  vendor_label: '개념원리 익히기'
  vendor_level: "-"
  vendor_tags: []
  category_type: '개념원리 익히기'
  summary: |
    $0\le x<2\pi$ 에서 $\cos x=\dfrac{1}{2}$ 의 해를 그래프 교점으로 구하는 과정의 빈칸 채우기.
  category: '단위 삼각방정식 → 그래프와 직선의 교점 → 해'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '삼각함수 방정식의 그래프 해법(sin·cos·tan = k 의 기본해)'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    그래프와 직선의 교점이라는 해석이 발문에 이미 주어진 빈칸 채우기. 단위원·그래프에서 두 해를 읽는 한 단계뿐이다.
    익히기 구역 출발 ★1 · 통찰 0 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: '$y=\cos x$ 와 $y=\dfrac{1}{2}$ 의 교점 → $x=\dfrac{\pi}{3},\ \dfrac{5}{3}\pi$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{\pi}{3}$, $\dfrac{5}{3}\pi$, $\dfrac{\pi}{3}$, $\dfrac{5}{3}\pi$'
  answer_source: "답지"
  figure: crop:fig-186-431.png
  latex: latex-bank/gn-alg/items/186-431.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변을 특수각 값($\dfrac{\sqrt{2}}{2}$, $-\dfrac{1}{2}$)으로, 구간을 $-\pi\le x<\pi$ 로 바꿀 수 있다. 제약: 그림이 $y=\cos x$ 와 수평선이므로 우변이 $[-1,1]$ 밖이면 그림·빈칸 구조가 깨진다.'
    creative: '(1) 같은 그림에서 부등식 $\cos x\ge\dfrac{1}{2}$ 의 해를 채우게 하면 ★1 유지 (2) 함수를 $\sin$ 으로 바꾸고 해의 합을 묻기(★2) (3) 그림 없이 구간만 주면 그래프를 스스로 떠올려야 해 I-RT d1 이 생기고 ★2.'
```

```yaml
- id: GN-ALG-186-432
  page: 186
  vendor_label: '개념원리 익히기'
  vendor_level: "-"
  vendor_tags: []
  category_type: '개념원리 익히기'
  summary: |
    ⑴~⑶ $0\le x\le 2\pi$ 에서 $\sin x=\dfrac{1}{2}$, $\cos x=-\dfrac{1}{2}$, $\tan x=\sqrt{3}$ 를 각각 푸는 문제.
  category: '특수각 값 → 해당 구간의 모든 해 나열'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '삼각함수 방정식의 그래프 해법(sin·cos·tan = k 의 기본해)'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    세 소문항 모두 특수각 값에서 해를 읽는 같은 골조. $\tan$ 은 주기가 $\pi$ 라 해가 $\dfrac{\pi}{3}$, $\dfrac{4}{3}\pi$ 로 $\pi$ 간격인 점만 다르다.
    익히기 구역 · 통찰 0 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: '특수각 표 → 주어진 구간에서 $\sin$·$\cos$ 는 두 해, $\tan$ 은 $\pi$ 주기 두 해'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=\dfrac{\pi}{6}$ 또는 $x=\dfrac{5}{6}\pi$ ⑵ $x=\dfrac{2}{3}\pi$ 또는 $x=\dfrac{4}{3}\pi$ ⑶ $x=\dfrac{\pi}{3}$ 또는 $x=\dfrac{4}{3}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/186-432.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변을 $\pm\dfrac{\sqrt{2}}{2}$, $\pm\dfrac{\sqrt{3}}{2}$, $\pm 1$, $\tan x=\pm\dfrac{\sqrt{3}}{3}$ 로 교체. 제약: 특수각이어야 하고 $\sin$·$\cos$ 는 $|k|\le 1$, $k=\pm 1$ 이면 해가 하나로 줄어 소문항 균형이 깨진다.'
    creative: '(1) 구간을 $0\le x<4\pi$ 로 늘려 해의 개수를 묻기(★2) (2) 세 방정식의 해의 합을 비교하게 하기(★2) (3) $\sin x=k$ 의 해가 2개가 되도록 하는 $k$ 의 범위를 묻는 역방향(★3 · I-BW d1).'
```

```yaml
- id: GN-ALG-186-433
  page: 186
  vendor_label: '개념원리 익히기'
  vendor_level: "-"
  vendor_tags: []
  category_type: '개념원리 익히기'
  summary: |
    $0\le x<2\pi$ 에서 $\tan x\ge 1$ 의 해를 $y=\tan x$ 의 그래프와 직선 $y=1$ 로 구하는 과정의 빈칸 채우기.
  category: '$\tan$ 그래프 → 교점 $x$ 좌표 → 점근선 앞까지의 두 구간'
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '삼각함수 부등식의 그래프 해법(tan 의 점근선과 구간 분리)'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    그래프가 주어져 교점 $\dfrac{\pi}{4}$, $\dfrac{5}{4}\pi$ 를 읽고 각 가지에서 점근선 직전까지를 답하면 된다.
    함정은 정의역 제외($x\ne\dfrac{\pi}{2},\dfrac{3}{2}\pi$)와 등호 포함 두 가지라 Mₜ=2. 익히기·통찰 0 → ★1.
  tier: star_1
  mechanism_primary: '$\tan x=1$ 의 교점 → 각 가지에서 교점부터 점근선 직전까지 → 두 구간'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{\pi}{4}$, $\dfrac{5}{4}\pi$, $\dfrac{\pi}{4}$, $\dfrac{5}{4}\pi$, $\dfrac{\pi}{4}\le x<\dfrac{\pi}{2}$, $\dfrac{5}{4}\pi\le x<\dfrac{3}{2}\pi$'
  answer_source: "답지"
  figure: crop:fig-186-433.png
  latex: latex-bank/gn-alg/items/186-433.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '직선을 $y=\sqrt{3}$, $y=-1$, $y=\dfrac{\sqrt{3}}{3}$ 로 바꾼다. 제약: 그림의 점근선 위치가 고정이므로 구간은 $0\le x<2\pi$ 를 유지하고, 부등호를 $\le$ 로 뒤집으면 답이 점근선 바로 뒤부터 시작하는 개구간이 된다.'
    creative: '(1) $\tan x<1$ 로 뒤집어 세 구간이 나오게 하기(★2) (2) 그림 없이 풀게 하면 I-RT d1 발생 ★2 (3) $|\tan x|\ge 1$ 로 바꾸면 분기가 늘어 ★3.'
```

```yaml
- id: GN-ALG-186-434
  page: 186
  vendor_label: '개념원리 익히기'
  vendor_level: "-"
  vendor_tags: []
  category_type: '개념원리 익히기'
  summary: |
    ⑴~⑶ $0\le x<2\pi$ 에서 $\sin x>\dfrac{\sqrt{2}}{2}$, $2\cos x>-\sqrt{3}$, $\sqrt{3}\tan x+1\le 0$ 을 각각 푸는 문제.
  category: '계수 정리 → 단위 부등식 → 그래프 위·아래 구간'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '삼각함수 부등식의 그래프 해법(sin·cos·tan 의 기본 부등식)'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴⑵ 는 수평선 위쪽 구간, ⑶ 은 $\tan x\le-\dfrac{\sqrt{3}}{3}$ 로 정리한 뒤 두 가지에서 점근선 직후부터 교점까지를 잡는다.
    ⑵ 는 구간 양 끝이 살아 남아 $0\le x<\dfrac{5}{6}\pi$ 와 $\dfrac{7}{6}\pi<x<2\pi$ 로 갈린다. 통찰 없이 경계·정의역 처리만 있어 익히기 ★1 유지.
  tier: star_1
  mechanism_primary: '양변 정리 → 단위 부등식 → 수평선 기준 위·아래 구간(tan 은 점근선으로 분리)'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{\pi}{4}<x<\dfrac{3}{4}\pi$ ⑵ $0\le x<\dfrac{5}{6}\pi$ 또는 $\dfrac{7}{6}\pi<x<2\pi$ ⑶ $\dfrac{\pi}{2}<x\le\dfrac{5}{6}\pi$ 또는 $\dfrac{3}{2}\pi<x\le\dfrac{11}{6}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/186-434.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수와 우변을 $2\sin x\ge\sqrt{3}$, $\sqrt{2}\cos x<-1$, $\tan x+\sqrt{3}>0$ 처럼 바꾼다. 제약: 정리 후 우변이 특수각 값이어야 하고 $\sin$·$\cos$ 는 $|k|\le 1$, 음수 계수로 나누면 부등호가 뒤집히는 점을 문제 의도에 맞게 관리한다.'
    creative: '(1) 세 부등식의 공통 해를 묻는 연립으로 묶기(★3) (2) 해집합이 주어진 구간 전체가 되도록 하는 $k$ 를 묻는 역방향(★3 · I-BW d1) (3) 정수해 개수를 묻는 꼴로 바꾸면 ★2.'
```

### 필수·발전 예제

```yaml
- id: GN-ALG-187-e15
  page: 187
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    ⑴ $0\le x<2\pi$ 에서 $2\sin x=-\sqrt{3}$ ⑵ $0\le x<\pi$ 에서 $2\cos\left(2x+\dfrac{\pi}{3}\right)=\sqrt{3}$ 의 해.
  category: '각 치환 → 치환된 각의 범위 재설정 → 기본해 → 역치환'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '삼각함수가 포함된 방정식 · 일차식의 꼴(각의 치환과 범위 변환)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑵ 가 이 유형의 표준 골조다. $2x+\dfrac{\pi}{3}=t$ 로 두고 $t$ 의 범위를 $\dfrac{\pi}{3}\le t<2\pi+\dfrac{\pi}{3}$ 로 다시 잡은 뒤 $\cos t=\dfrac{\sqrt{3}}{2}$ 의 해를 모두 찾고 역치환한다.
    범위를 옮기지 않으면 해를 빠뜨리는 T-범위 함정과 끝점 포함 여부의 T-경계가 겹쳐 Mₜ=2. 치환·범위 변환은 교과서 표준 절차라 통찰로 세지 않아 필수 예제 출발 ★2 유지.
  mechanism_primary: '$ax+b=t$ 치환 → $t$ 의 범위 재설정 → 기본해 전부 → 역치환'
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x=\dfrac{4}{3}\pi$ 또는 $x=\dfrac{5}{3}\pi$ ⑵ $x=\dfrac{3}{4}\pi$ 또는 $x=\dfrac{11}{12}\pi$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/187-e15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '내부 각의 계수와 평행이동을 $3x-\dfrac{\pi}{4}$, $2x-\dfrac{\pi}{6}$ 으로, 우변을 특수각 값으로 바꾼다. 제약: 치환 범위의 길이가 계수 배로 늘어나므로 해의 개수가 문제 의도(2개)와 맞는지 확인하고, 역치환 결과가 주어진 구간 안에 있어야 한다.'
    creative: '(1) 해의 개수를 묻기(★2) (2) 두 해의 합·차를 묻기(★2) (3) 해가 꼭 3개가 되도록 하는 구간의 상한을 묻는 역방향(★3 · I-BW d1) (4) $\sin$ 과 $\cos$ 를 섞어 같은 각으로 통일해야 하게 만들면 ★3.'
```

```yaml
- id: GN-ALG-187-435
  page: 187
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    ⑴~⑶ $\cos 2x=\dfrac{\sqrt{2}}{2}\ (0\le x<\pi)$, $\tan\left(x+\dfrac{\pi}{4}\right)=\sqrt{3}\ (-\pi\le x<\pi)$, $2\sin\left(x-\dfrac{\pi}{3}\right)=\sqrt{3}\ (0\le x<2\pi)$ 의 해.
  category: '각 치환 → 범위 재설정 → 기본해 → 역치환 (세 꼴 반복)'
  M: {s: 3, k: 1, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '삼각함수가 포함된 방정식 · 일차식의 꼴(각의 치환과 범위 변환)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e15 와 같은 골조를 계수 배($2x$) · 평행이동($x\pm$ 상수) · 음수 시작 구간($-\pi\le x<\pi$)의 세 변형으로 반복한다.
    ⑵ 는 치환 범위가 $-\dfrac{3}{4}\pi\le t<\dfrac{5}{4}\pi$ 라 $\tan t=\sqrt{3}$ 의 해가 두 개 나오는 것이 핵심. 소문항 3개라 Mₛ=3 이지만 통찰은 없어 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: '내부 각을 $t$ 로 치환 → $t$ 범위 재설정 → 기본해 전부 → 역치환'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x=\dfrac{\pi}{8}$ 또는 $x=\dfrac{7}{8}\pi$ ⑵ $x=-\dfrac{11}{12}\pi$ 또는 $x=\dfrac{\pi}{12}$ ⑶ $x=\dfrac{2}{3}\pi$ 또는 $x=\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/187-435.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수($2x\to 3x$) · 평행이동($\dfrac{\pi}{4}\to\dfrac{\pi}{6}$) · 구간 시작점을 바꾼다. 제약: 우변은 특수각 값, $\tan$ 은 치환 범위 안의 점근선을 피해야 하며, 역치환한 해가 원래 구간에 모두 들어오는지 확인한다.'
    creative: '(1) 세 해집합의 교집합·합집합을 묻기(★3) (2) 같은 식을 부등식으로 바꾸기(★2) (3) $\tan$ 소문항을 정의역 제외까지 묻는 꼴로 확장(★3).'
```

```yaml
- id: GN-ALG-187-436
  page: 187
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $0\le x<2\pi$ 에서 $\sin\left(\dfrac{\pi}{2}+x\right)-\cos(\pi-x)=-\sqrt{2}$ 의 두 실근의 차.
  category: '각변환 공식으로 한 함수로 통일 → 기본 방정식 → 두 근의 차'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '각변환 공식을 이용한 삼각방정식(한 함수로 통일)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\sin\left(\dfrac{\pi}{2}+x\right)=\cos x$, $\cos(\pi-x)=-\cos x$ 로 바꾸면 좌변이 $2\cos x$ 로 합쳐져 $\cos x=-\dfrac{\sqrt{2}}{2}$ 한 줄이 된다.
    부호 실수(T-부호)와 두 근을 모두 찾아야 하는 T-범위가 함정. 각변환은 표준 공식 대입이라 통찰로 세지 않고 확인체크 ★2.
  tier: star_2
  mechanism_primary: '각변환으로 $2\cos x=-\sqrt{2}$ → 두 근 $\dfrac{3}{4}\pi,\ \dfrac{5}{4}\pi$ → 차'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{\pi}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/187-436.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각변환 대상을 $\cos\left(\dfrac{\pi}{2}-x\right)$, $\sin(\pi+x)$, $\tan\left(\dfrac{\pi}{2}+x\right)$ 로 교체하고 우변을 $\pm\sqrt{3}$, $\pm 1$ 로 바꾼다. 제약: 두 항이 같은 함수로 합쳐져야 하고 합친 계수로 나눈 값이 $[-1,1]$ 안의 특수각 값이어야 한다.'
    creative: '(1) 두 근의 합·곱을 묻기(★2) (2) 세 항을 주고 하나는 상쇄되게 만들기(★3) (3) 부등식으로 바꿔 해집합의 길이를 묻기(★3) (4) 각변환 결과가 $\sin$ 과 $\cos$ 로 갈려 인수분해가 필요하게 만들면 ★3.'
```

```yaml
- id: GN-ALG-188-e16
  page: 188
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    $0\le x\le 2\pi$ 에서 방정식 $2\cos^2 x+\sin x=1$ 의 해.
  category: '피타고라스 항등식으로 한 문자 통일 → 이차식 인수분해 → 기본해'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '삼각함수가 포함된 방정식 · 이차식의 꼴(항등식으로 한 문자 통일)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\cos^2 x=1-\sin^2 x$ 로 바꾸면 $2\sin^2 x-\sin x-1=0$, 즉 $(2\sin x+1)(\sin x-1)=0$ 이다.
    $\sin x=1$ 은 해가 하나, $\sin x=-\dfrac{1}{2}$ 는 둘이라 개수가 비대칭인 점이 T-범위 함정. 항등식 대입은 이 유형의 표준 첫 단계라 통찰 없음 → 필수 예제 ★2.
  tier: star_2
  mechanism_primary: '$\cos^2=1-\sin^2$ → $2\sin^2 x-\sin x-1=0$ → $\sin x=1$ 또는 $-\dfrac{1}{2}$ → 해'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x=\dfrac{\pi}{2}$ 또는 $x=\dfrac{7}{6}\pi$ 또는 $x=\dfrac{11}{6}\pi$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/188-e16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수를 $2\sin^2 x+3\cos x-3=0$ 처럼 바꾼다. 제약: 치환 후 이차식이 유리수 범위에서 인수분해되고 두 근 중 $[-1,1]$ 밖의 것이 있으면 기각 단계가 하나 더 생긴다(★ +0~1).'
    creative: '(1) 해의 개수나 해의 합을 묻기(★2) (2) 한 근이 범위 밖이라 기각되게 만들기(★3 · I-VF d1) (3) 상수를 미지수로 두고 해가 3개가 되게 하는 값을 묻는 역방향(★4 · I-BW d2).'
```

```yaml
- id: GN-ALG-188-437
  page: 188
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    ⑴~⑶ $\cos^2 x-\cos x-2=0$, $2\sin^2 x-\cos x-1=0$, $\tan x+\dfrac{3}{\tan x}=2\sqrt{3}$ 를 각각 주어진 구간에서 푸는 문제.
  category: '한 문자 통일 → 이차식 정리 → 범위 밖 근 기각 → 기본해'
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '삼각함수가 포함된 방정식 · 이차식의 꼴(항등식으로 한 문자 통일)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 $(\cos x-2)(\cos x+1)=0$ 에서 $\cos x=2$ 를 기각, ⑵ 는 항등식으로 $\cos$ 통일 후 $(2\cos x-1)(\cos x+1)=0$, ⑶ 은 양변에 $\tan x$ 를 곱해 $(\tan x-\sqrt{3})^2=0$ 중근.
    소문항 3개 누적으로 M_total 8 이지만 각 단계가 모두 표준 절차라 통찰 0 → 확인체크 ★2 유지(절차형 상한 안).
  tier: star_2
  mechanism_primary: '한 문자로 통일 → 이차식 인수분해 → $|{\sin}|,|{\cos}|\le 1$ 위반 근 기각 → 기본해'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x=\pi$ ⑵ $x=\dfrac{\pi}{3}$ 또는 $x=\pi$ 또는 $x=\dfrac{5}{3}\pi$ ⑶ $x=\dfrac{\pi}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/188-437.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이차식의 계수를 바꾸되 두 근 중 하나가 $[-1,1]$ 밖이 되도록 설계한다. ⑶ 의 상수 3 은 $\tan^2 x-2\sqrt{3}\tan x+3$ 이 완전제곱이 되게 하는 값이므로 중근을 유지하려면 상수와 우변을 같이 조정해야 한다.'
    creative: '(1) 중근 소문항을 근이 둘인 꼴로 바꿔 정의역 $0<x<\dfrac{\pi}{2}$ 에서 하나만 살아남게 하기(★3 · I-VF d1) (2) 세 소문항의 해의 총합을 묻기(★3) (3) $\tan x+\dfrac{k}{\tan x}$ 가 해를 가질 $k$ 의 범위를 묻는 역방향(★4).'
```

```yaml
- id: GN-ALG-188-438
  page: 188
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $0<x<2\pi$ 에서 $2\cos^2 x+\sin(\pi+x)-2=0$ 의 해 중 최댓값 $M$ 과 최솟값 $m$ 의 합 $M+m$.
  category: '각변환 → 항등식 통일 → 인수분해 → 개구간에서 해 선별 → 최대·최소'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '삼각함수가 포함된 방정식 · 이차식의 꼴(각변환 결합)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\sin(\pi+x)=-\sin x$ 로 바꾸고 항등식을 쓰면 $\sin x(2\sin x+1)=0$ 으로 인수분해된다.
    $\sin x=0$ 에서 개구간이라 $x=0,\ 2\pi$ 가 빠지고 $x=\pi$ 만 남는 T-범위·T-경계가 이 문항의 실제 함정. 각변환·항등식은 표준이라 통찰 0 → ★2.
  tier: star_2
  mechanism_primary: '각변환 → $\sin x(2\sin x+1)=0$ → 개구간 해 $\pi,\dfrac{7}{6}\pi,\dfrac{11}{6}\pi$ → 최대+최소'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{17}{6}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/188-438.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각변환 항을 $\cos\left(\dfrac{\pi}{2}+x\right)$ 등으로, 상수항을 바꿔 인수분해 형태를 유지한다. 제약: 개구간 끝점이 실제로 후보에서 빠지도록 $\sin x=0$ 또는 $\cos x=1$ 류의 근이 하나는 남아 있어야 함정이 살아난다.'
    creative: '(1) 해의 개수를 묻기(★2) (2) 구간을 폐구간으로 바꿔 답이 달라지는 것을 비교하게 하기(★3 · I-VF d1) (3) 해의 합을 묻고 구간을 $0\le x<4\pi$ 로 늘리기(★3).'
```

```yaml
- id: GN-ALG-189-e17
  page: 189
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    ⑴⑵ $0\le x<\pi$ 에서 $\sin\left(x-\dfrac{\pi}{3}\right)\ge\dfrac{\sqrt{3}}{2}$ 와 $\tan\left(x+\dfrac{\pi}{3}\right)<1$ 의 해.
  category: '각 치환 → 범위 재설정 → 그래프 위·아래 구간 → 역치환'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '삼각함수가 포함된 부등식 · 일차식의 꼴(각의 치환과 범위 변환)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    치환한 각의 범위를 먼저 잡고 그 안에서만 해를 읽는 것이 골조. ⑵ 는 $t\in\left[\dfrac{\pi}{3},\dfrac{4}{3}\pi\right)$ 에서 $\tan t<1$ 이 점근선 $\dfrac{\pi}{2}$ 를 건너 $\left(\dfrac{\pi}{2},\dfrac{5}{4}\pi\right)$ 하나로 모인다.
    점근선 제외(T-범위)와 등호(T-경계)가 함정. 표준 절차라 통찰 0 → 필수 예제 ★2.
  tier: star_2
  mechanism_primary: '$x\pm b=t$ 치환 → $t$ 범위 재설정 → 수평선 기준 구간 → 역치환'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{2}{3}\pi\le x<\pi$ ⑵ $\dfrac{\pi}{6}<x<\dfrac{11}{12}\pi$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/189-e17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '평행이동 값과 우변 특수각을 바꾼다. 제약: 치환 범위의 길이가 원래 구간과 같으므로($x$ 의 계수 1) 해가 한 구간으로 모이는지 두 구간으로 갈리는지가 평행이동 크기에 따라 달라진다 — 답 형태를 먼저 정하고 값을 고른다.'
    creative: '(1) 내부 각의 계수를 2 로 올려 치환 범위를 두 배로(★3) (2) 해집합의 길이를 묻기(★3) (3) 해집합에 속하는 정수 각의 개수를 묻기(★3) (4) 두 부등식을 연립으로 묶기(★3).'
```

```yaml
- id: GN-ALG-189-439
  page: 189
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    ⑴⑵ $0\le x<2\pi$ 에서 $\sin x<\cos x$ 와 $\cos\left(x-\dfrac{\pi}{6}\right)\le-\dfrac{1}{2}$ 의 해.
  category: '두 곡선의 상하 비교(또는 치환) → 교점 기준 구간 분할'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$\sin x<\cos x$ 를 한 좌표평면 위 두 곡선의 상하 관계로 옮겨 교점 $\dfrac{\pi}{4},\dfrac{5}{4}\pi$ 를 경계로 구간을 나눔'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '두 삼각함수의 대소를 비교하는 부등식(그래프 상하 비교)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 우변이 상수가 아니라 다른 삼각함수라 수평선 해법이 통하지 않는다. 두 그래프를 겹쳐 그려 교점 밖·안을 읽는 표현 전환이 필요하다.
    ⑵ 는 e17 과 같은 치환형. 통찰 1(RT d1) + M_total 7 → 확인체크 출발 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: '$y=\sin x$ 와 $y=\cos x$ 의 교점 → 상하 구간 분할 / ⑵ 는 치환 후 수평선 비교'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $0\le x<\dfrac{\pi}{4}$ 또는 $\dfrac{5}{4}\pi<x<2\pi$ ⑵ $\dfrac{5}{6}\pi\le x\le\dfrac{3}{2}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/189-439.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 의 부등호 방향과 구간 시작점, ⑵ 의 평행이동·우변 값을 바꾼다. 제약: ⑴ 은 교점이 특수각이어야 하므로 $\sin x$ 와 $\cos x$ 의 계수를 바꾸면($\sqrt{3}\sin x<\cos x$ 등) 교점 각이 바뀌는 것을 먼저 확인한다.'
    creative: '(1) $\sin x<\cos x$ 를 $\tan x<1$ 로 옮기게 하되 $\cos x$ 의 부호 분기를 강제(★4 · I-EQV d2) (2) 해집합의 길이를 묻기(★3) (3) $|\sin x|<\cos x$ 로 절댓값을 씌우면 193-453 과 같은 골조(★3).'
```

```yaml
- id: GN-ALG-190-e18
  page: 190
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    ⑴ $0\le x<2\pi$ 에서 $2\cos^2 x-3\sin x<0$ ⑵ $0\le x\le\pi$ 에서 $2\cos^2\left(x-\dfrac{\pi}{2}\right)+\cos x-2>0$ 의 해.
  category: '각변환·항등식으로 한 문자 통일 → 이차부등식 인수분해 → 삼각 부등식'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '삼각함수가 포함된 부등식 · 이차식의 꼴(항등식으로 한 문자 통일)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 $(2\sin x-1)(\sin x+2)>0$ 에서 $\sin x+2>0$ 이 항상 참이므로 $\sin x>\dfrac{1}{2}$ 한 줄로 줄고, ⑵ 는 $\cos\left(x-\dfrac{\pi}{2}\right)=\sin x$ 를 거쳐 $\cos x(2\cos x-1)<0$ 이 된다.
    부호가 고정된 인수를 지우는 판단(T-부호)과 정의역(T-범위)이 함정이지만 모두 이차부등식의 표준 처리라 통찰 0 → 필수 예제 ★2.
  tier: star_2
  mechanism_primary: '각변환·항등식으로 한 문자 → 이차부등식 인수분해 → 항상 양인 인수 제거 → 기본 부등식'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{\pi}{6}<x<\dfrac{5}{6}\pi$ ⑵ $\dfrac{\pi}{3}<x<\dfrac{\pi}{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/190-e18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이차부등식의 계수를 바꾸되 한 인수가 $[-1,1]$ 에서 부호가 고정되도록 설계한다(예: $\sin x+2$, $\cos x+3$). 제약: 두 인수가 모두 부호를 바꾸면 경우 분기가 생겨 난도가 한 단 올라간다.'
    creative: '(1) 두 인수 모두 부호가 바뀌게 만들어 공통부분을 구하게 하기(★3 · I-MI d1) (2) 해집합이 주어지고 계수를 역산하게 하기(★4 · I-BW d2) (3) 부등식이 모든 $x$ 에서 성립할 조건으로 바꾸기(★3).'
```

```yaml
- id: GN-ALG-190-440
  page: 190
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    ⑴~⑶ $2\sin^2\left(x+\dfrac{3}{2}\pi\right)+3\sin x-3\ge 0$, $2\cos x>3\tan x$, $\tan^2 x+(\sqrt{3}+1)\tan x>-\sqrt{3}$ 를 각각 주어진 구간에서 푸는 문제.
  category: '각변환·분모 정리 → 한 문자 이차부등식 → 정의역 제외 구간 분할'
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '⑵ 에서 $-\dfrac{\pi}{2}<x<\dfrac{\pi}{2}$ 이면 $\cos x>0$ 임을 확인하고 양변에 $\cos x$ 를 곱해 부등호를 유지한 채 $2\cos^2 x>3\sin x$ 로 동치 변환'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '삼각함수가 포함된 부등식 · 이차식의 꼴(분모·정의역 처리 포함)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 $\sin\left(x+\dfrac{3}{2}\pi\right)=-\cos x$ 각변환 뒤 $(2\sin x-1)(\sin x-1)\le 0$, ⑶ 은 $(\tan x+1)(\tan x+\sqrt{3})>0$ 에서 두 갈래를 $[0,\pi)$ 의 점근선 기준으로 세 구간으로 펼쳐야 한다.
    ⑵ 의 분모 부호 확인이 진짜 판단 지점(EQV d1). 통찰 1 + M_total 8 → 확인체크 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: '각변환·분모 곱하기(부호 확인) → 한 문자 이차부등식 → $\tan$ 은 점근선 기준 구간 분할'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\dfrac{\pi}{6}\le x\le\dfrac{5}{6}\pi$ ⑵ $-\dfrac{\pi}{2}<x<\dfrac{\pi}{6}$ ⑶ $0\le x<\dfrac{\pi}{2}$ 또는 $\dfrac{\pi}{2}<x<\dfrac{2}{3}\pi$ 또는 $\dfrac{3}{4}\pi<x<\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/190-440.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑶ 의 두 근 $-1,-\sqrt{3}$ 을 다른 특수각 탄젠트값 쌍($-\dfrac{\sqrt{3}}{3}$ 등)으로 바꾼다. 제약: 근이 모두 음수라야 답이 세 구간으로 갈리고, 양수 근이 섞이면 구간 개수가 달라진다. ⑵ 의 구간을 $\cos x<0$ 쪽으로 옮기면 부등호가 뒤집힌다.'
    creative: '(1) ⑵ 의 구간을 $0<x<\pi$ 로 넓혀 $\cos x$ 의 부호 분기를 강제(★4 · I-MI d2) (2) 해집합에 속하는 특정 각이 무엇인지 고르게 하는 선택형(193-449 골조 ★3) (3) 세 부등식의 공통해를 묻기(★4).'
```

```yaml
- id: GN-ALG-191-e19
  page: 191
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    ⑴ $x^2+2x+2\cos\theta=0$ 이 허근을 가질 $\theta$ 의 범위 ⑵ 모든 실수 $x$ 에 대하여 $\sqrt{2}x^2+4x\sin\theta-3\sqrt{2}\cos\theta>0$ 이 성립할 $\theta$ 의 범위.
  category: '판별식 조건 → 삼각 이차부등식 → $\theta$ 의 범위'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '허근·항상 성립 조건을 이차방정식·이차부등식 단원의 판별식 조건($D<0$)으로 옮긴 뒤 계수 안의 삼각함수를 미지수로 다시 보는 결합'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '삼각함수가 포함된 부등식의 활용 · 판별식 조건'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 $\dfrac{D}{4}=1-2\cos\theta<0$ 에서 $\cos\theta>\dfrac{1}{2}$, ⑵ 는 $\dfrac{D}{4}=4\sin^2\theta+6\cos\theta<0$ 을 항등식으로 $\cos$ 통일해 $(2\cos\theta+1)(\cos\theta-2)>0$ → $\cos\theta<-\dfrac{1}{2}$ 로 간다.
    판별식(다른 단원 도구) 없이는 첫 줄이 나오지 않고 삼각 부등식 없이는 마무리가 안 돼 I-XU d2. 통찰 1·M_total 7 → 필수 예제 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: '근의 조건 → 판별식 부등식 → 항등식으로 $\cos\theta$ 통일 → 삼각 부등식 해'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $0\le\theta<\dfrac{\pi}{3}$ ⑵ $\dfrac{2}{3}\pi<\theta<\dfrac{4}{3}\pi$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/191-e19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이차식의 계수를 바꾸되 판별식 정리 후 $\cos\theta$(또는 $\sin\theta$) 이차부등식이 유리수 인수분해되고 한 인수가 $[-1,1]$ 밖이라 항상 부호가 고정되도록 맞춘다. $\theta$ 의 구간($[0,\pi]$ vs $[0,2\pi]$)에 따라 답 구간 개수가 달라진다.'
    creative: '(1) 허근 → 중근·서로 다른 두 실근으로 바꾸기(★3) (2) 이차부등식이 항상 성립 → 해가 존재로 뒤집기(★4 · I-BW d2) (3) 두 근이 모두 양수 같은 근과 계수 조건으로 바꾸기(194-454 골조 ★3) (4) 최고차항 계수에도 삼각함수를 넣어 $a\ne 0$ 분기를 만들면 ★4 · I-MI d2.'
```

```yaml
- id: GN-ALG-191-441
  page: 191
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $0\le\theta<2\pi$ 에서 이차함수 $y=x^2+2(2\sin\theta+1)x+4$ 의 그래프가 $x$ 축과 서로 다른 두 점에서 만나도록 하는 $\theta$ 의 범위.
  category: '$x$ 축과 두 점에서 만남 → $D>0$ → 삼각 부등식'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '그래프와 $x$ 축의 교점 개수를 이차방정식 판별식 $D>0$ 으로 옮기는 단원 결합'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '삼각함수가 포함된 부등식의 활용 · 판별식 조건'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $\dfrac{D}{4}=(2\sin\theta+1)^2-4>0$ → $|2\sin\theta+1|>2$ 에서 $\sin\theta>\dfrac{1}{2}$ 와 $\sin\theta<-\dfrac{3}{2}$ 두 갈래가 나오고 뒤쪽은 $|\sin\theta|\le 1$ 로 기각된다.
    기각은 T-범위로 흡수하고 판별식 결합만 I-XU d1. 통찰 1·M_total 7 → 확인체크 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: '$D>0$ → $|2\sin\theta+1|>2$ → 범위 밖 갈래 기각 → $\sin\theta>\dfrac{1}{2}$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{\pi}{6}<\theta<\dfrac{5}{6}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/191-441.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '일차항의 $2\sin\theta+1$ 과 상수항 4 를 바꾼다. 제약: 판별식이 완전제곱과 상수의 차가 되어 절댓값 부등식으로 깔끔히 갈라져야 하고, 한 갈래가 $[-1,1]$ 밖이라 기각되어야 답이 한 구간으로 모인다.'
    creative: '(1) 만나지 않을 조건($D<0$)으로 뒤집으면 두 구간이 나와 ★3 (2) $x$ 축과 접할 조건($D=0$)으로 바꾸면 해가 특정 각으로 떨어져 ★2 (3) 두 근이 모두 양수 조건을 추가하면 판별식+근과 계수의 관계로 ★4 · I-CON d2.'
```

```yaml
- id: GN-ALG-191-442
  page: 191
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    모든 실수 $x$ 에 대하여 $x^2-2x\cos\theta+\dfrac{1}{2}\cos\theta\ge 0$ 이 성립하도록 하는 $0\le\theta\le 2\pi$ 의 범위.
  category: '항상 성립 조건 → $D\le 0$ → $\cos\theta$ 의 범위 → 두 구간'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '모든 실수에서 성립하는 이차부등식 조건을 판별식 $D\le 0$ 으로 옮기는 단원 결합'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '삼각함수가 포함된 부등식의 활용 · 판별식 조건'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $\dfrac{D}{4}=\cos^2\theta-\dfrac{1}{2}\cos\theta\le 0$ → $\cos\theta\left(\cos\theta-\dfrac{1}{2}\right)\le 0$ → $0\le\cos\theta\le\dfrac{1}{2}$.
    $\cos\theta$ 의 범위가 양끝 등호를 포함한 띠라서 $[0,2\pi]$ 에서 답이 두 구간으로 갈리는 것이 T-범위·T-경계 함정. 통찰 1·M_total 8 → ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: '$D\le 0$ → $0\le\cos\theta\le\dfrac{1}{2}$ → $\theta$ 두 구간'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{\pi}{3}\le\theta\le\dfrac{\pi}{2}$ 또는 $\dfrac{3}{2}\pi\le\theta\le\dfrac{5}{3}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/191-442.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상수항 계수 $\dfrac{1}{2}$ 를 $\dfrac{\sqrt{3}}{2}$, $\dfrac{\sqrt{2}}{2}$ 로 바꾸면 경계 각만 바뀌고 골조는 그대로다. 제약: 판별식이 $\cos\theta$ 에 대한 인수분해형이 되도록 일차항과 상수항의 짝을 유지하고, 결과 범위가 $[-1,1]$ 안에 들어와야 한다.'
    creative: '(1) 부등호를 $>$ 로 바꿔 등호 없는 개구간이 되게 하기(★3) (2) 최솟값이 특정 값 이상일 조건으로 바꾸기(★4) (3) $\theta$ 의 범위를 $[0,\pi]$ 로 좁혀 답이 한 구간이 되게 하기(★3) (4) 해가 존재할 조건으로 뒤집으면 여집합 사고가 필요해 ★4 · I-BW d2.'
```

### 연습문제 STEP 1

```yaml
- id: GN-ALG-192-443
  page: 192
  vendor_label: '연습문제 STEP 1'
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    $y=\sin^2 x+\cos x+a-2$ 의 최솟값이 $-\dfrac{1}{4}$ 일 때 상수 $a$ 의 값.
  category: '피타고라스 항등식으로 $\cos x$ 통일 → $t$ 치환 → 제한 구간 끝점 최솟값'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '삼각함수가 포함된 이차식의 최대·최소(항등식으로 한 문자 통일)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\sin^2 x=1-\cos^2 x$ 로 바꾸고 $t=\cos x\ (-1\le t\le 1)$ 로 치환하면 위로 볼록한 $-t^2+t+a-1$ 이다.
    꼭짓점 $t=\dfrac{1}{2}$ 는 최댓값 자리이고 최솟값은 구간 왼쪽 끝 $t=-1$ 에서 난다는 것이 T-범위·T-경계 함정이다.
    항등식 대입과 치환은 이 단원의 표준 절차라 통찰로 세지 않았다. STEP 1 출발 ★2 · 통찰 0 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: '$\sin^2 x=1-\cos^2 x$ → $t=\cos x\in[-1,1]$ 치환 → 끝점 $t=-1$ 의 값이 최솟값 → $a$ 결정'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{11}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/192-443.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주어진 최솟값 $-\dfrac{1}{4}$ 과 상수항 $-2$ 를 바꾼다. 제약: 최솟값 자리가 끝점 $t=-1$ 로 유지되려면 $\cos x$ 의 일차항 계수가 양수여야 하고, $a$ 가 유리수로 떨어지도록 최솟값을 고른다.'
    creative: '(1) 최댓값을 묻게 바꾸면 답 자리가 꼭짓점 $t=\dfrac{1}{2}$ 로 옮겨 간다(★2 유지) (2) $\cos x$ 의 계수를 문자로 두면 최솟값 자리가 끝점인지 꼭짓점인지 경우를 나눠야 해 ★4 · I-MI d2 (3) $x$ 의 범위를 $0\le x\le\dfrac{\pi}{2}$ 로 좁혀 $t$ 의 범위를 다시 잡게 하면 ★3.'
```

```yaml
- id: GN-ALG-192-444
  page: 192
  vendor_label: '연습문제 STEP 1'
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    $-\dfrac{\pi}{4}\le x\le\dfrac{\pi}{4}$ 에서 $y=\dfrac{\sin^2 x+\sin x\cos x-4\cos^2 x}{\cos^2 x}$ 의 최댓값 $M$ 과 최솟값 $m$ 의 합.
  category: '분모 $\cos^2 x$ 로 나눠 $\tan x$ 이차식 → $t$ 치환 → 꼭짓점 최소·끝점 최대'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '삼각함수가 포함된 이차식의 최대·최소($\tan x$ 로 통일)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자·분모를 $\cos^2 x$ 로 나누면 $t^2+t-4\ (t=\tan x)$ 한 줄이 되고 $-\dfrac{\pi}{4}\le x\le\dfrac{\pi}{4}$ 가 $-1\le t\le 1$ 로 옮겨진다.
    꼭짓점 $t=-\dfrac{1}{2}$ 가 구간 안이라 최솟값은 꼭짓점, 최댓값은 오른쪽 끝 $t=1$ 로 자리가 갈리는 것이 T-범위 함정이다.
    [분류 이슈] $\cos^2 x$ 로 나눠 $\tan$ 한 문자 식으로 옮기는 것을 I-RT(표현 전환)로 볼지 이 단원의 표준 절차로 볼지 갈린다. 여기서는 표준 절차로 보아 절차형 ★2 로 두었고 통찰형 ★3 이 후보다.
  tier: star_2
  mechanism_primary: '분자·분모를 $\cos^2 x$ 로 나눔 → $t=\tan x\in[-1,1]$ 이차식 → 꼭짓점 최소·끝점 최대 → $M+m$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{25}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/192-444.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '분자의 계수 $(1,1,-4)$ 와 $x$ 의 범위를 바꾼다. 제약: 나눈 뒤 이차식의 꼭짓점 $t=-\dfrac{b}{2a}$ 가 치환 구간 안에 들어와야 최대·최소 자리가 갈리는 이 문항의 골조가 유지되고, 범위 끝이 $\tan$ 의 특수각이어야 $t$ 구간이 깔끔하다.'
    creative: '(1) 꼭짓점이 구간 밖이 되게 계수를 잡으면 양 끝점 비교만 남아 ★2 로 내려간다 (2) $M$ 과 $m$ 을 따로 묻지 말고 $M-m$ 또는 $Mm$ 으로 바꾸면 계산만 늘고 ★ 는 그대로 (3) 범위를 $-\dfrac{\pi}{3}\le x\le\dfrac{\pi}{3}$ 로 넓히면 $t$ 구간이 무리수 끝이라 Mₖ 가 오르고 ★3.'
```

```yaml
- id: GN-ALG-192-445
  page: 192
  vendor_label: '연습문제 STEP 1'
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    $f(x)=\cos x$, $g(x)=\sin x$ 일 때 $-\dfrac{\pi}{2}<x<\dfrac{\pi}{2}$ 에서 방정식 $g^{-1}(f(x))=\dfrac{\pi}{6}$ 의 근.
  category: '역함수 조건 → $f(x)=g\left(\dfrac{\pi}{6}\right)$ → $\cos x=\dfrac{1}{2}$ → 범위 안의 두 근'
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$g^{-1}(A)=B$ 를 $A=g(B)$ 로 옮겨 역함수 표기를 풀 수 있는 삼각방정식으로 동치 변환'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '역함수 조건을 원함수 등식으로 바꾼 삼각방정식'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    역함수 표기가 진입 장벽이고, $g^{-1}(f(x))=\dfrac{\pi}{6}$ 을 $f(x)=\sin\dfrac{\pi}{6}=\dfrac{1}{2}$ 로 옮기면 그 뒤는 기본 방정식 한 줄이다.
    $\cos x=\dfrac{1}{2}$ 의 해가 주어진 대칭 구간 안에서 두 개라는 것만 확인하면 끝난다.
    동치 변환 통찰 1개(EQV d1) · M_total 5 로 노동량은 가벼워 STEP 1 출발 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: '$g^{-1}(f(x))=\dfrac{\pi}{6}$ → $\cos x=\sin\dfrac{\pi}{6}=\dfrac{1}{2}$ → $x=\pm\dfrac{\pi}{3}$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$x=-\dfrac{\pi}{3}$ 또는 $x=\dfrac{\pi}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/192-445.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변의 각 $\dfrac{\pi}{6}$ 을 다른 특수각으로 바꾼다. 제약: $g(B)=\sin B$ 가 $[-1,1]$ 안의 특수값이어야 하고, 그 값이 주어진 $x$ 범위에서 $\cos x$ 의 치역 안에 들어와야 근이 존재한다.'
    creative: '(1) $f$ 와 $g$ 를 맞바꿔 $f^{-1}(g(x))$ 로 두면 $\cos^{-1}$ 의 주치 범위를 따져야 해 ★3 (2) 우변을 문자 $k$ 로 두고 근이 존재할 $k$ 의 범위를 묻기(★3 · I-BW d2) (3) 근의 개수를 묻게 바꾸면 범위 경계 판정이 핵심이 되어 ★3.'
```

```yaml
- id: GN-ALG-192-446
  page: 192
  vendor_label: '연습문제 STEP 1'
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    $0\le x<4\pi$ 에서 방정식 $2|\sin x|=\sqrt{2}$ 의 실근의 개수.
  category: '절댓값 벗기기 → $\sin x=\pm\dfrac{\sqrt{2}}{2}$ → 한 주기 4개 × 두 주기'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '절댓값이 포함된 삼각방정식의 실근 개수(여러 주기 구간)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $|\sin x|=\dfrac{\sqrt{2}}{2}$ 에서 $\sin x=\pm\dfrac{\sqrt{2}}{2}$ 두 갈래가 나오고, 한 주기 $2\pi$ 마다 각 갈래가 2개씩 모두 4개다.
    구간이 $4\pi$ 로 두 주기이고 오른쪽 끝이 열린 구간이라는 점이 T-범위·T-부호 함정이다.
    절댓값 분할은 스키마상 표준 분기(T-부호)라 통찰로 세지 않았다. STEP 1 ★2 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: '$|\sin x|=\dfrac{\sqrt{2}}{2}$ → $\sin x=\pm\dfrac{\sqrt{2}}{2}$ → 주기 $2\pi$ 당 4개 → $4\pi$ 에서 8개'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/192-446.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변 $\sqrt{2}$ 와 구간 폭 $4\pi$ 를 바꾼다. 제약: $\dfrac{\text{우변}}{2}$ 이 $0$ 과 $1$ 사이의 특수값이어야 주기당 개수가 4로 고정되고, 구간 폭이 주기의 정수배가 아니면 끝자락을 따로 세야 한다.'
    creative: '(1) 우변을 $2$ 로 바꿔 $|\sin x|=1$ 로 만들면 주기당 2개로 줄고 ★2 유지 (2) $|\sin x|$ 를 $|\tan x|$ 로 바꾸면 점근선 처리가 붙어 ★3 (3) 구간 폭을 $\dfrac{9}{2}\pi$ 처럼 주기의 정수배가 아니게 두면 끝자락 개수 확인이 강제되어 ★3 · I-VF d1.'
```

```yaml
- id: GN-ALG-192-447
  page: 192
  vendor_label: '연습문제 STEP 1'
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    $\dfrac{\pi}{2}<x<\dfrac{3}{2}\pi$ 일 때 방정식 $2\cos x+3\tan x=0$ 의 해.
  category: '$\tan x=\dfrac{\sin x}{\cos x}$ 대입 → 양변에 $\cos x$ → $\sin x$ 이차식 → 범위 안 해'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '삼각함수가 포함된 방정식 · 이차식의 꼴(항등식으로 한 문자 통일)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\tan$ 을 $\dfrac{\sin}{\cos}$ 으로 바꾸고 $\cos x$ 를 곱하면 $2\cos^2 x+3\sin x=0$, 항등식으로 $\sin x$ 만 남겨 인수분해하면 $\sin x=-\dfrac{1}{2}$ 가 남는다.
    $|\sin x|\le 1$ 로 다른 근을 버리는 것은 자명한 기각이라 I-VF 로 세지 않았고, 주어진 구간에서 해가 하나만 살아남는 것이 T-범위 함정이다.
    통일 절차는 이 단원 표준이므로 절차형. STEP 1 ★2 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: '$\tan x\to\dfrac{\sin x}{\cos x}$ → $2\cos^2 x+3\sin x=0$ → $\sin x$ 이차식 인수분해 → 범위 안 해 하나'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x=\dfrac{7}{6}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/192-447.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수 $2$ 와 $3$ 을 바꾼다. 제약: $\cos x$ 를 곱해 얻은 $\sin x$ 이차식이 유리수 범위에서 인수분해되어야 하고, 두 근 중 하나가 $[-1,1]$ 밖으로 밀려나야 답이 특수각 하나로 떨어진다.'
    creative: '(1) $\cos$ 과 $\tan$ 대신 $\sin$ 과 $\cot$ 꼴로 바꾸면 같은 골조로 ★2 (2) 구간을 $0\le x<2\pi$ 로 넓히면 해가 두 개가 되고 $\cos x\ne 0$ 확인이 강제되어 ★3 (3) 상수항을 문자로 두고 해가 존재할 조건을 묻기(★4 · I-BW d2).'
```

```yaml
- id: GN-ALG-192-448
  page: 192
  vendor_label: '연습문제 STEP 1'
  vendor_level: "STEP 1"
  vendor_tags: ["수능 기출"]
  category_type: '연습문제'
  summary: |
    $0<x<2\pi$ 에서 방정식 $4\cos^2 x-1=0$ 과 부등식 $\sin x\cos x<0$ 을 동시에 만족시키는 모든 $x$ 의 합. 5지선다.
  category: '방정식으로 후보 4개 → 사분면 부호로 2개 기각 → 남은 해의 합'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$\cos x=\pm\dfrac{1}{2}$ 로 얻은 네 후보를 $\sin x\cos x<0$ 에 되대입해 1·3사분면 해 둘을 기각'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '삼각방정식의 해 중 부등식 조건을 만족하는 것 고르기(사분면 부호 검증)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $\cos x=\pm\dfrac{1}{2}$ 에서 후보 네 개가 나오고, $\sin x\cos x<0$ 은 2·4사분면이라는 뜻이므로 1사분면과 3사분면 해가 기각된다.
    후보를 모두 구한 뒤 일부를 조건 위배로 버리는 구조라 I-VF d2 로 라벨링했다. 검증을 건너뛰면 네 해의 합을 그대로 답하는 오답에 도달한다.
    STEP 1 출발 ★2 에 수능 기출 태그와 검증 통찰 1개로 +1 → ★3.
  tier: star_3
  mechanism_primary: '$\cos x=\pm\dfrac{1}{2}$ 로 후보 4개 → $\sin x\cos x<0$(2·4사분면)으로 기각 → 남은 두 해의 합'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/192-448.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '방정식의 상수 $1$ 을 바꿔 $4\cos^2 x-3=0$ 처럼 다른 특수각이 나오게 한다. 제약: $\cos x$ 의 값이 특수각이어야 후보가 네 개로 고르게 나오고, 부등식 조건이 그중 정확히 둘만 남겨야 선택지가 깔끔하다.'
    creative: '(1) 부등식을 $\sin x\cos x>0$ 으로 뒤집으면 1·3사분면이 남아 답만 바뀌고 ★3 유지 (2) 부등식을 $\tan x<0$ 으로 바꾸면 같은 사분면 판정이라 ★3 (3) 방정식을 $\sin$ 에 대한 것으로, 부등식을 $\cos x>0$ 으로 섞으면 기각 개수가 달라져 ★3 (4) 해의 합 대신 해의 개수를 묻고 구간을 $0<x<4\pi$ 로 넓히면 주기 처리가 붙어 ★4.'
```

```yaml
- id: GN-ALG-193-449
  page: 193
  vendor_label: '연습문제 STEP 1'
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    $0\le x<\pi$ 에서 부등식 $\tan^2 x-(\sqrt{3}-1)\tan x<\sqrt{3}$ 의 해집합 $A$ 의 원소가 아닌 것. 5지선다.
  category: '$t=\tan x$ 이차부등식 인수분해 → $-1<\tan x<\sqrt{3}$ → 점근선으로 갈라지는 두 구간'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$-1<\tan x<\sqrt{3}$ 을 $x$ 로 되돌릴 때 $x=\dfrac{\pi}{2}$ 의 점근선 때문에 해가 한 구간이 아니라 두 구간으로 갈라짐을 모두 따져야 함'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '삼각함수가 포함된 부등식 · 이차식의 꼴($\tan$ 치환과 점근선 구간 분리)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $t=\tan x$ 로 두면 $(t-\sqrt{3})(t+1)<0$ 이라 $-1<t<\sqrt{3}$ 한 줄로 끝나지만, 여기서 멈추면 답을 고를 수 없다.
    $[0,\pi)$ 에서 $\tan$ 이 $\dfrac{\pi}{2}$ 를 사이에 두고 두 갈래이므로 해가 $x$ 축 위에서 두 구간으로 나뉘고, 뒤쪽 갈래는 $\tan x<0$ 쪽 조건만 남는다.
    구간 분리를 모두 따져야 하는 다중 해석 1개(MI d2) · M_total 7 → STEP 1 출발 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: '$(\tan x-\sqrt{3})(\tan x+1)<0$ → $-1<\tan x<\sqrt{3}$ → 점근선 기준 두 구간 → 보기 대조'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/193-449.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$\tan$ 의 두 경계값 $-1$ 과 $\sqrt{3}$ 을 다른 특수각 탄젠트값 짝으로 바꾼다. 제약: 이차부등식이 유리수·무리수 계수로 인수분해되어야 하고, 두 경계가 부호가 다른 값이어야 해가 점근선을 넘어 두 구간으로 갈라진다.'
    creative: '(1) 부등호를 $>$ 로 뒤집으면 여집합이 되어 구간이 세 조각이 되고 ★4 (2) 보기 대신 해집합을 직접 쓰게 하면 경계 표기 부담이 늘어 ★3 유지 (3) 구간을 $0\le x<2\pi$ 로 넓히면 점근선이 둘이라 구간이 네 조각, ★4 (4) 두 경계를 같은 부호로 잡으면 해가 한 구간뿐이라 ★2 로 내려간다.'
```

### 연습문제 STEP 2

```yaml
- id: GN-ALG-193-450
  page: 193
  vendor_label: '연습문제 STEP 2'
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    $0\le x\le\dfrac{\pi}{4}$ 에서 $y=\dfrac{2\tan x+1}{\tan x+2}$ 의 최댓값 $M$ 과 최솟값 $m$ 의 차.
  category: '$t=\tan x$ 치환 → 유리식을 $2-\dfrac{3}{t+2}$ 로 분리 → 단조증가 → 양 끝점'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$\dfrac{2t+1}{t+2}$ 를 $2-\dfrac{3}{t+2}$ 로 분리해 최대·최소를 계산 대신 단조성으로 읽는 동치 변환'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '삼각함수가 포함된 유리식의 최대·최소($\tan$ 치환 · 분리형 변형)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $t=\tan x$ 로 두면 범위가 $0\le t\le 1$ 로 옮겨지고, 분수식을 $2-\dfrac{3}{t+2}$ 로 분리하면 $t$ 가 커질수록 값이 커지는 단조증가임이 한눈에 보인다.
    그러면 최대·최소가 양 끝점에서 나오고 대입 두 번으로 끝난다. 분리 없이 값을 찍어 보면 단조성을 확신하지 못해 헤맨다.
    분리 변형 통찰 1개(EQV d1) · M_total 7 → STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: '$t=\tan x\in[0,1]$ → $y=2-\dfrac{3}{t+2}$ 단조증가 → 끝점 $t=0,1$ 대입 → $M-m$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/193-450.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '분자·분모의 계수 $(2,1)$ 과 $(1,2)$ 를 바꾼다. 제약: 분모의 영점 $t=-2$ 가 치환 구간 $[0,1]$ 밖이어야 단조성이 구간 전체에서 유지되고, $ad-bc\ne 0$ 이어야 상수함수가 되지 않는다.'
    creative: '(1) 분모의 영점이 구간 안에 오게 계수를 잡으면 유계가 아니게 되어 최대·최소가 없어지는 반례 문항이 된다(★4 · I-VF d2) (2) $\tan$ 을 $\sin$ 으로 바꾸면 치환 구간이 $[0,\dfrac{\sqrt{2}}{2}]$ 라 계산만 무거워지고 ★ 는 그대로 (3) $M$ 과 $m$ 을 주고 계수를 역으로 구하게 하면 ★4 · I-BW d2.'
```

```yaml
- id: GN-ALG-193-451
  page: 193
  vendor_label: '연습문제 STEP 2'
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: '연습문제'
  summary: |
    $0\le x\le 5$ 에서 곡선 $y=\sin\dfrac{\pi}{2}x$ 와 직선 $y=k\ (0<k<1)$ 의 세 교점 $\mathrm{A}$, $\mathrm{B}$, $\mathrm{C}$ 의 $x$ 좌표의 합이 $\dfrac{25}{4}$ 일 때 선분 $\mathrm{AB}$ 의 길이. 5지선다.
  category: '주기 4 · 축 대칭 → 세 교점의 $x$ 좌표를 한 문자로 → 합 조건 → 두 점의 거리'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '첫 두 교점이 곡선의 극대축 $x=1$ 에 대해 대칭이라 $x_{\mathrm{A}}+x_{\mathrm{B}}=2$ 임을 계산 없이 확보'
    - step: 2
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '주기가 $4$ 이므로 세 번째 교점이 $x_{\mathrm{C}}=x_{\mathrm{A}}+4$ 임을 읽어 합 조건을 한 문자 방정식으로 환원'
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: '삼각함수 그래프와 직선의 교점(대칭·주기로 좌표 조건 풀기)'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    교점의 좌표를 직접 구하려 하면 $\arcsin$ 이 필요해 막힌다. 대칭으로 $x_{\mathrm{A}}+x_{\mathrm{B}}=2$, 주기로 $x_{\mathrm{C}}=x_{\mathrm{A}}+4$ 를 잡으면 합 조건이 $6+x_{\mathrm{A}}=\dfrac{25}{4}$ 한 줄로 줄어든다.
    선분 $\mathrm{AB}$ 는 두 점의 $y$ 좌표가 같으므로 길이가 $x_{\mathrm{B}}-x_{\mathrm{A}}$ 라는 점도 대칭에서 바로 나온다.
    대칭·주기 통찰 2개(SYM d2 · PD d1) · M_total 8 → STEP 2 출발 ★3 에서 +1 → ★4. 저노출 유형(SYM·PD) 조건 충족.
  tier: star_4
  mechanism_primary: '대칭 $x_{\mathrm{A}}+x_{\mathrm{B}}=2$ · 주기 $x_{\mathrm{C}}=x_{\mathrm{A}}+4$ → 합 $\dfrac{25}{4}$ 로 $x_{\mathrm{A}}$ 결정 → $\overline{\mathrm{AB}}=x_{\mathrm{B}}-x_{\mathrm{A}}$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "③"
  answer_source: "답지"
  figure: crop:fig-193-451.png
  latex: latex-bank/gn-alg/items/193-451.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '좌표 합 $\dfrac{25}{4}$ 를 바꾼다. 제약: 곡선의 주기와 $x$ 의 정의구간을 고정한 채 합을 바꿔야 하고, 얻어지는 $x_{\mathrm{A}}$ 가 첫 교점이 놓일 구간 $(0,1)$ 안에 들어와야 그림의 세 교점 배치가 유지된다. 그림 라벨 $\mathrm{A}$, $\mathrm{B}$, $\mathrm{C}$ 의 순서는 고정이다.'
    creative: '(1) $\overline{\mathrm{BC}}$ 나 $\overline{\mathrm{AC}}$ 를 묻게 바꾸면 주기 활용 쪽으로 무게가 옮겨가고 ★4 유지 (2) 정의구간을 $0\le x\le 9$ 로 넓혀 교점을 다섯 개로 만들면 대칭 쌍이 둘이라 ★4~5 (3) 직선을 $y=-k$ 로 내리면 대칭축이 극소축으로 바뀌어 같은 골조 ★4 (4) 합 조건 대신 삼각형 $\mathrm{ABC}$ 의 넓이를 주면 $k$ 까지 역추적해야 해 ★5 후보 · I-BW d2 추가.'
```

```yaml
- id: GN-ALG-193-452
  page: 193
  vendor_label: '연습문제 STEP 2'
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    $0\le x<2\pi$ 에서 연립부등식 $2\cos x<1$, $2\sin x>1$ 의 해가 $\alpha<x<\beta$ 일 때 $\sin(\alpha+\beta)$ 의 값.
  category: '두 기본 부등식의 해를 각각 구해 교집합 → 양 끝 각의 합 → 삼각함수 값'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '삼각부등식 연립의 해 구간과 양 끝 각의 삼각함수 값'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $\cos x<\dfrac{1}{2}$ 와 $\sin x>\dfrac{1}{2}$ 를 각각 구간으로 풀고 겹치는 부분만 남기면 $\alpha$, $\beta$ 가 서로 다른 부등식에서 하나씩 온다.
    그 뒤 $\alpha+\beta$ 가 특수각이 되어 $\sin$ 값이 바로 나온다. 교집합은 스키마상 표준 절차라 I-CON 으로 세지 않았다.
    [분류 이슈] 구역 신호(STEP 2)는 ★3 인데 통찰 0 · M_total 6 이라 체감은 ★2 다. 라벨은 억지로 내리지 않고 구역대로 ★3 을 두었다.
  tier: star_3
  mechanism_primary: '$\cos x<\dfrac{1}{2}$ 와 $\sin x>\dfrac{1}{2}$ 의 구간 교집합 → $\alpha$, $\beta$ → $\sin(\alpha+\beta)$'
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/193-452.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 부등식의 우변 상수를 다른 특수값 짝으로 바꾼다. 제약: 두 해 구간이 실제로 겹쳐 하나의 열린 구간이 되어야 하고, $\alpha+\beta$ 가 특수각으로 떨어져야 마지막 삼각함수 값이 유리수가 된다.'
    creative: '(1) 부등호를 하나만 등호 포함으로 바꾸면 경계 처리 판정이 추가되어 ★3 유지 (2) 두 부등식의 방향을 같게 잡아 해가 두 구간으로 갈라지게 하면 ★4 · I-MI d2 (3) $\sin(\alpha+\beta)$ 대신 $\tan\dfrac{\alpha+\beta}{2}$ 를 묻기(★3) (4) $2\cos x<1$ 을 $2\cos 2x<1$ 로 바꾸면 각 치환과 범위 변환이 붙어 ★4.'
```

```yaml
- id: GN-ALG-193-453
  page: 193
  vendor_label: '연습문제 STEP 2'
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    $-\dfrac{\pi}{2}\le x\le\dfrac{\pi}{2}$ 에서 부등식 $|\sin x|<\cos x$ 를 만족시키는 $x$ 의 값의 범위.
  category: '양변이 음이 아님을 확인 → 제곱해 $\cos^2 x>\dfrac{1}{2}$ → 대칭 구간'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '주어진 구간에서 $\cos x\ge 0$ 임을 먼저 확인한 뒤에야 양변 제곱이 동치가 됨을 판단해 $\sin^2 x<\cos^2 x$ 로 옮김'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '절댓값이 포함된 삼각부등식(양변 제곱 동치 변환)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    절댓값을 구간별로 벗기면 두 갈래를 따로 풀어야 하지만, 주어진 구간에서 $\cos x\ge 0$ 이므로 양변을 제곱해도 동치라는 점을 잡으면 한 줄로 줄어든다.
    제곱 뒤 항등식으로 $\cos^2 x>\dfrac{1}{2}$ 가 되고 구간 대칭성 덕분에 답이 원점 대칭 구간 하나로 나온다.
    부호 확인이 전제된 동치 변환 1개(EQV d2) · M_total 7 → STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: '구간에서 $\cos x\ge 0$ 확인 → 양변 제곱 → $\cos^2 x>\dfrac{1}{2}$ → $-\dfrac{\pi}{4}<x<\dfrac{\pi}{4}$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\dfrac{\pi}{4}<x<\dfrac{\pi}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/193-453.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '한쪽에 계수를 붙여 $|\sin x|<\sqrt{3}\cos x$ 처럼 바꾼다. 제약: 제곱 뒤 $\cos^2 x$ 에 대한 부등식의 경계가 특수각이어야 답이 깔끔하고, 주어진 구간에서 우변이 음이 아니어야 제곱이 동치로 유지된다.'
    creative: '(1) 구간을 $0\le x<2\pi$ 로 넓히면 $\cos x<0$ 구간에서 해가 없음을 따로 확인해야 해 ★4 · I-VF d2 (2) $|\sin x|>\cos x$ 로 뒤집으면 여집합 구간 둘이 되어 ★3 (3) $|\sin x|<|\cos x|$ 로 바꾸면 네 구간 대칭이라 ★4 · I-SYM d2 (4) 부등호를 등호 포함으로 바꾸면 경계 표기만 달라진다(★3 유지).'
```

```yaml
- id: GN-ALG-194-454
  page: 194
  vendor_label: '연습문제 STEP 2'
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    $\dfrac{\pi}{2}\le\theta\le\pi$ 에서 이차방정식 $x^2-3x+1-2\sin^2\theta=0$ 이 부호가 서로 다른 두 실근을 가질 $\theta$ 의 범위가 $\alpha\le\theta<\beta$ 일 때 $\sin\alpha-\tan\beta$ 의 값.
  category: '부호가 다른 두 실근 ⟺ 두 근의 곱 < 0 → $\sin\theta$ 의 범위 → 구간 양 끝 각 → 삼각함수 값'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '부호가 다른 두 실근이라는 조건을 판별식이 아니라 두 근의 곱 $1-2\sin^2\theta<0$ 하나로 옮기고, 이때 판별식 조건이 자동으로 따라옴을 판단'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '삼각함수가 포함된 방정식·부등식의 활용 · 근의 부호 조건'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    판별식과 근과 계수의 관계를 모두 세우면 불필요한 계산이 길어진다. 부호가 다른 두 실근은 상수항 $1-2\sin^2\theta$ 가 음수라는 한 조건과 동치다.
    그러면 $\sin^2\theta>\dfrac{1}{2}$ 이고 주어진 구간에서 $\sin\theta\ge 0$ 이므로 $\theta$ 의 범위가 한쪽 끝만 닫힌 구간으로 결정된다.
    [분류 이슈] 이 착안을 I-EQV 로 볼지 이차방정식 단원과의 결합 I-XU 로 볼지 갈린다. 여기서는 동치 변환이 본질이라 보고 EQV d2 로 두었다. 통찰 1 · M_total 8 → STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: '두 근의 곱 $1-2\sin^2\theta<0$ → $\sin\theta>\dfrac{\sqrt{2}}{2}$ → $\alpha$, $\beta$ 결정 → $\sin\alpha-\tan\beta$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/194-454.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상수항의 $1$ 과 $2$, 일차항 계수 $-3$ 을 바꾼다. 제약: 일차항 계수는 답에 영향을 주지 않으므로 자유롭고, 상수항이 $\sin^2\theta$ 에 대해 풀렸을 때 경계가 특수각이어야 하며 그 경계가 주어진 $\theta$ 구간 안에 들어와야 한다.'
    creative: '(1) 조건을 두 근이 모두 양수로 바꾸면 판별식·합·곱 세 조건이 필요해 ★4 · I-CON d2 (2) $\sin^2\theta$ 를 $\cos\theta$ 로 바꾸면 치환 범위 판정이 달라져 ★3 (3) 구간 양 끝의 등호 포함 여부를 묻게 하면 T-경계가 주제가 되어 ★3 (4) 두 근의 차를 주고 $\theta$ 를 역추적하면 ★4 · I-BW d2.'
```

```yaml
- id: GN-ALG-194-455
  page: 194
  vendor_label: '연습문제 STEP 2'
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    모든 $\theta$ 에 대하여 부등식 $\cos^2\theta-3\cos\theta-a+9\ge 0$ 이 성립하도록 하는 실수 $a$ 의 값의 범위.
  category: '$t=\cos\theta$ 치환 → 구간 $[-1,1]$ 에서의 최솟값 $\ge 0$ → $a$ 의 범위'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '모든 $\theta$ 에 대해 성립한다는 조건을 치환 구간 $-1\le t\le 1$ 에서의 최솟값이 $0$ 이상이라는 조건으로 옮김'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '모든 각에 대해 성립할 조건 → 치환 구간의 최솟값(삼각함수가 포함된 부등식의 활용)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    판별식으로 처리하면 틀린다. $t=\cos\theta$ 의 범위가 $[-1,1]$ 로 제한되므로 조건은 그 구간에서의 최솟값 문제다.
    꼭짓점 $t=\dfrac{3}{2}$ 가 구간 밖이라 $[-1,1]$ 에서는 감소, 최솟값이 오른쪽 끝 $t=1$ 에서 나는 것이 T-범위 함정이다.
    조건 동치 변환 1개(EQV d1) · M_total 7 → STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: '$t=\cos\theta\in[-1,1]$ 치환 → 꼭짓점 구간 밖 → 최솟값은 $t=1$ 의 값 $7-a\ge 0$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$a\le 7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/194-455.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$\cos\theta$ 의 계수 $-3$ 과 상수 $9$ 를 바꾼다. 제약: 꼭짓점 $t=-\dfrac{b}{2}$ 가 $[-1,1]$ 밖에 있어야 끝점 최솟값이라는 이 문항의 골조가 유지되고, 안으로 들어오면 최솟값 자리가 꼭짓점으로 바뀐다.'
    creative: '(1) 일차항 계수를 작게 잡아 꼭짓점을 구간 안으로 넣으면 판별식 조건으로 풀 수 있게 되어 ★3 유지이되 골조가 달라진다 (2) 부등호를 $>$ 로 바꾸면 경계 등호만 빠진다(★3) (3) $\theta$ 의 범위를 $0\le\theta\le\dfrac{\pi}{2}$ 로 제한하면 $t$ 구간이 $[0,1]$ 로 줄어 ★3 (4) 어떤 $\theta$ 에 대해 성립할 조건으로 뒤집으면 최댓값 쪽이 되어 ★4 · I-BW d2.'
```

### 연습문제 실력 UP

```yaml
- id: GN-ALG-194-456
  page: 194
  vendor_label: '연습문제 실력 UP'
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    $0\le x\le\dfrac{3}{2}\pi$ 에서 방정식 $\cos(\pi\cos x)=0$ 의 모든 실근의 합.
  category: '겉 $\cos$ 의 일반해 → $\cos x$ 의 후보 → $[-1,1]$ 밖 기각 → 구간 안 해의 합'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$\pi\cos x$ 를 통째로 하나의 각으로 보고 $\cos(\square)=0$ 의 일반해 $\square=\dfrac{\pi}{2}+n\pi$ 를 세워 $\cos x$ 에 대한 방정식으로 내려옴'
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$\cos x=\dfrac{1}{2}+n$ 의 정수 $n$ 후보 중 $|\cos x|\le 1$ 을 벗어나는 것을 기각해 두 값만 남김'
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: '합성 삼각방정식 — 안쪽 값의 범위로 후보 거르기'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    이중 구조라 $\cos x$ 를 미지수로 보는 시선 전환이 먼저 필요하고, 일반해에서 나오는 무한히 많은 후보 중 $|\cos x|\le 1$ 을 통과하는 둘만 살아남는다.
    남은 두 값을 $0\le x\le\dfrac{3}{2}\pi$ 에서 풀면 해가 세 개이고, 구간이 한 주기가 아니라 $\dfrac{3}{4}$ 주기라 하나가 잘려 나가는 것이 T-범위·T-경계 함정이다.
    통찰 2개(EQV d2 · VF d2) · M_total 7 → 실력 UP 출발 ★4 유지. 저노출 유형(VF) 조건 충족.
  tier: star_4
  mechanism_primary: '$\pi\cos x=\dfrac{\pi}{2}+n\pi$ → $\cos x=\dfrac{1}{2}+n$ → $|\cos x|\le 1$ 로 $\pm\dfrac{1}{2}$ 만 남김 → 구간 안 세 해의 합'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{7}{3}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/194-456.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '겉 함수의 계수 $\pi$ 와 $x$ 의 정의구간을 바꾼다. 제약: 안쪽 값 $\dfrac{1}{2}+n$ 이 $[-1,1]$ 안에 들어오는 $n$ 이 두 개 정도로 유지되어야 하고, 살아남는 값이 특수각 코사인이어야 해의 합이 $\pi$ 의 유리수배로 떨어진다.'
    creative: '(1) 겉을 $\sin(\pi\cos x)=0$ 으로 바꾸면 안쪽 후보가 $n$ 이라 $0,\pm 1$ 세 개가 살아 ★4 유지이되 경계 해가 추가된다 (2) 안쪽을 $\pi\sin x$ 로 바꾸면 구간 대칭이 달라져 ★4 (3) 해의 합 대신 해의 개수를 묻고 구간을 문자로 두면 ★5 후보 (4) 겉 계수를 $2\pi$ 로 키우면 살아남는 후보가 늘어 기각 판정이 무거워지고 ★4~5.'
```

```yaml
- id: GN-ALG-194-457
  page: 194
  vendor_label: '연습문제 실력 UP'
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    $0<x<2\pi$ 에서 두 함수 $y=\cos x$ 와 $y=\cos(\pi+x)+k$ 의 그래프가 한 점에서 만나도록 하는 상수 $k$ 의 값.
  category: '각변환 $\cos(\pi+x)=-\cos x$ → $\cos x=\dfrac{k}{2}$ → 개구간에서 해가 하나일 경계 판정'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$\cos(\pi+x)=-\cos x$ 로 옮겨 두 그래프의 교점 조건을 $\cos x=\dfrac{k}{2}$ 한 식으로 환원'
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$\dfrac{k}{2}=\pm 1$ 두 후보 중 $\dfrac{k}{2}=1$ 은 $x=0$, $2\pi$ 가 개구간에서 빠져 교점이 $0$ 개가 되므로 기각'
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: '삼각함수 그래프의 교점 개수 조건(개구간 경계 기각)'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    각변환으로 $\cos x=\dfrac{k}{2}$ 까지는 쉽게 내려오지만, 핵심은 $0<x<2\pi$ 라는 열린 구간에서 $\cos x=c$ 의 해 개수가 $c$ 에 따라 $0$·$1$·$2$ 로 갈린다는 것이다.
    $|c|<1$ 이면 두 개, $c=-1$ 이면 $x=\pi$ 하나, $c=1$ 이면 양 끝이 빠져 아예 없다. 닫힌 구간으로 착각하면 $k=2$ 를 함께 답하게 된다.
    환원 1개(EQV d1)와 경계 기각 1개(VF d2) · M_total 7 → 실력 UP 출발 ★4 유지. 저노출 유형(VF) 조건 충족.
  tier: star_4
  mechanism_primary: '$\cos(\pi+x)=-\cos x$ → $\cos x=\dfrac{k}{2}$ → 개구간 해 개수 $0$·$1$·$2$ 판정 → $\dfrac{k}{2}=-1$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/194-457.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 번째 함수의 각변환 대상 $\pi+x$ 를 $\pi-x$, $\dfrac{\pi}{2}+x$ 등으로 바꾼다. 제약: 각변환 뒤 두 그래프의 차가 $\cos x$ 또는 $\sin x$ 한 항으로 정리되어야 하고, 교점 개수가 경계에서 갈리도록 구간은 개구간으로 유지한다.'
    creative: '(1) 구간을 닫힌 $0\le x\le 2\pi$ 로 바꾸면 $k=2$ 쪽이 교점 두 개가 되어 답이 바뀐다(★4 유지 · 경계 함정의 방향만 반전) (2) 한 점이 아니라 세 점에서 만날 조건으로 바꾸면 해가 없음을 보이는 문항이 되어 ★5 후보 (3) $\cos$ 을 $\tan$ 으로 바꾸면 점근선 때문에 개수 판정이 달라져 ★4 (4) $k$ 의 값 대신 교점 개수를 $k$ 의 함수로 정리하게 하면 ★5 · I-MI d3 추가.'
```

```yaml
- id: GN-ALG-194-458
  page: 194
  vendor_label: '연습문제 실력 UP'
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    $0\le\theta<2\pi$ 에서 방정식 $\sin^2\theta-\cos\theta-a+1=0$ 을 만족시키는 $\theta$ 가 존재하기 위한 실수 $a$ 의 값의 범위.
  category: '항등식으로 $\cos\theta$ 통일 → $a$ 를 분리 → 치환 구간 $[-1,1]$ 에서의 치역'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '해의 존재 조건을 $a$ 를 분리한 뒤 곡선 $a=-t^2-t+2$ 와 수평선 $a$ 의 교점 존재, 즉 치환 구간에서의 치역 문제로 옮김'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '해의 존재 조건 → 매개변수 분리와 치환 구간의 치역'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $\sin^2\theta=1-\cos^2\theta$ 로 통일하고 $a$ 만 왼쪽으로 몰면 $a=-t^2-t+2\ (t=\cos\theta\in[-1,1])$ 가 되어, 문제가 이 이차함수의 치역을 묻는 것으로 바뀐다.
    꼭짓점 $t=-\dfrac{1}{2}$ 가 구간 안이라 최댓값은 꼭짓점, 최솟값은 두 끝점 중 먼 쪽 $t=1$ 에서 나는 비대칭 배치가 T-범위 함정이다.
    존재 조건을 치역으로 옮기는 표현 전환 1개(RT d2) · M_total 8 → 실력 UP 출발 ★4 유지. 저노출 유형(RT) 조건 충족.
  tier: star_4
  mechanism_primary: '$\sin^2\theta\to 1-\cos^2\theta$ → $a=-t^2-t+2$, $t\in[-1,1]$ → 꼭짓점 최대·끝점 최소 → 치역'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$0\le a\le\dfrac{9}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/194-458.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$\cos\theta$ 의 계수 $-1$ 과 상수 $1$ 을 바꾼다. 제약: 꼭짓점 $t=-\dfrac{b}{2a}$ 가 $[-1,1]$ 안에 있어야 치역의 양 끝이 꼭짓점과 한쪽 끝점으로 갈리고, 계수가 커져 꼭짓점이 구간 밖으로 나가면 두 끝점 비교만 남아 쉬워진다.'
    creative: '(1) 해가 두 개 이상 존재할 조건으로 바꾸면 $t$ 한 값이 $\theta$ 두 개를 주는지까지 따져야 해 ★5 후보 · I-VF d2 추가 (2) $\theta$ 의 범위를 $0\le\theta<\pi$ 로 줄이면 $t$ 와 $\theta$ 가 일대일이라 ★4 유지 (3) $a$ 를 주고 해의 개수를 묻게 뒤집으면 ★4 (4) $\sin^2$ 을 $\tan^2$ 으로 바꾸면 치환 구간이 무한대라 치역 논의가 달라져 ★4~5.'
```

```yaml
- id: GN-ALG-194-459
  page: 194
  vendor_label: '연습문제 실력 UP'
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    $\pi\le\theta<2\pi$ 에서 이차함수 $y=x^2-2x\sin\theta+\cos^2\theta$ 의 그래프의 꼭짓점이 직선 $y=\sqrt{3}x+1$ 의 아래쪽에 있을 때 $\theta$ 의 값의 범위.
  category: '완전제곱으로 꼭짓점 → 아래쪽 조건을 부등식으로 → 항등식으로 $\sin\theta$ 통일 → 범위 기각'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '이차함수 꼭짓점의 좌표와 직선에 대한 위쪽·아래쪽 판정(이차함수 단원)을 삼각함수 부등식으로 결합'
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$\sin\theta(2\sin\theta+\sqrt{3})>0$ 의 두 갈래 중 $\sin\theta>0$ 쪽이 주어진 $\theta$ 구간과 양립하지 않아 기각됨을 확인'
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: '삼각함수가 포함된 부등식의 활용 · 이차함수 꼭짓점의 위치 조건'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    완전제곱으로 꼭짓점 $(\sin\theta,\ \cos^2\theta-\sin^2\theta)$ 를 얻고, 아래쪽이라는 조건을 꼭짓점의 $y$ 좌표가 직선의 값보다 작다는 부등식으로 옮긴다.
    항등식으로 $\sin\theta$ 만 남기면 $\sin\theta(2\sin\theta+\sqrt{3})>0$ 이고, 두 갈래 중 $\sin\theta>0$ 은 $\pi\le\theta<2\pi$ 에서 불가능해 기각된다.
    단원 결합 1개(XU d2)와 갈래 기각 1개(VF d2) · M_total 8 → 실력 UP 출발 ★4 유지. 저노출 유형(XU·VF) 조건 충족.
  tier: star_4
  mechanism_primary: '꼭짓점 $(\sin\theta,\ \cos^2\theta-\sin^2\theta)$ → 직선 아래 조건 → $\sin\theta(2\sin\theta+\sqrt{3})>0$ → $\sin\theta<-\dfrac{\sqrt{3}}{2}$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{4}{3}\pi<\theta<\dfrac{5}{3}\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/194-459.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '직선의 기울기 $\sqrt{3}$ 과 $y$ 절편 $1$ 을 바꾼다. 제약: 절편은 꼭짓점의 상수항과 상쇄되어 $\sin\theta$ 에 대한 인수분해형이 되도록 맞춰야 하고, 기울기는 $2\sin\theta+m$ 의 경계 $-\dfrac{m}{2}$ 가 $[-1,1]$ 안의 특수값이어야 답이 특수각 구간으로 떨어진다.'
    creative: '(1) 위쪽 조건으로 뒤집으면 살아남는 갈래가 바뀌어 답이 여집합 구간이 된다(★4 유지) (2) $\theta$ 의 범위를 $0\le\theta<2\pi$ 로 넓히면 두 갈래가 모두 살아 구간이 세 조각, ★5 후보 · I-MI d3 추가 (3) 꼭짓점이 직선 위에 있을 조건($=$)으로 바꾸면 방정식이 되어 ★3 (4) 직선을 $x$ 축으로 두면 꼭짓점의 $y$ 좌표 부호만 보면 되어 ★3.'
```

## 표본 판정 요약 (34문)

- ★ 분포: ★1 4 · ★2 13 · ★3 12 · ★4 5 · ★5 0
- 통찰형 17 · 절차형 17 · premium 0 · novelty_score 는 전부 0(참신도 평가는 출제 단계 몫)
- 구역별: 개념원리 익히기 4문(★1 4) · 필수·발전 예제 13문(★2 8 · ★3 5) · 연습문제 STEP 1 7문(★2 5 · ★3 2) · 연습문제 STEP 2 6문(★3 5 · ★4 1) · 연습문제 실력 UP 4문(★4 4)
- 통찰 유형 분포: I-EQV 8 · I-VF 4 · I-XU 3 · I-MI 2 · I-RT 2 · I-SYM 1 · I-PD 1 (I-SC·I-BW·I-CON·I-PD 계열은 이 단원에 거의 없음)
- type_hint 상위: 「삼각함수가 포함된 방정식 · 이차식의 꼴(항등식으로 한 문자 통일)」 3 · 「삼각함수가 포함된 부등식의 활용 · 판별식 조건」 3 · 「삼각함수 방정식의 그래프 해법(sin·cos·tan = k 의 기본해)」 2 · 「삼각함수가 포함된 방정식 · 일차식의 꼴(각의 치환과 범위 변환)」 2 · 「삼각함수 부등식의 그래프 해법」 계열 2
- 그림: 3문(`crop:fig-186-431.png` · `crop:fig-186-433.png` · `crop:fig-193-451.png`)
- 대상층: 하위권·중하위권 13 · 중위권 5 · 중상위권 11 · 상위권 5

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-ALG-192-444 | 분모 $\cos^2 x$ 로 나눠 $\tan$ 한 문자 식으로 옮기는 것을 I-RT(표현 전환)로 볼지 이 단원 표준 절차로 볼지 갈림. 절차형 ★2 로 두었음 | ★2 / ★3 |
| GN-ALG-193-452 | 구역 신호(STEP 2)는 ★3 인데 통찰 0 · M_total 6 이라 체감은 ★2. 라벨은 구역대로 ★3 유지 | ★2 / ★3 |
| GN-ALG-194-454 | 「부호가 다른 두 실근 ⟺ 두 근의 곱 < 0」 착안을 I-EQV 로 볼지 이차방정식 단원과의 결합 I-XU 로 볼지 갈림. EQV d2 로 두었음 | ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 단원에서 반복된 축은 셋이다. (가) **그래프 해법**(기본 방정식·부등식을 $y=k$ 와의 교점·상하로 읽기) (나) **한 문자 통일**(피타고라스 항등식·각변환·$\tan$ 나누기로 하나의 삼각함수 이차식 만들기) (다) **활용**(판별식 · 근의 부호 · 꼭짓점 위치 · 제한 구간 최대최소).
- 카탈로그를 만들 때 따로 세워야 할 유형: 「각의 치환과 범위 변환」(치환 뒤 범위를 다시 잡는 것이 별도 오답원), 「$\tan$ 의 점근선으로 갈라지는 해 구간」(sin·cos 유형과 오답 패턴이 다름), 「합성 삼각방정식(안쪽 값의 범위로 후보 거르기)」, 「그래프 교점 개수 조건(개·폐구간 경계)」.
- 통합해도 될 유형: 「방정식 · 이차식의 꼴」과 「부등식 · 이차식의 꼴」은 한 문자 통일이라는 같은 골조라 하위 갈래(등호/부등호)로 묶어도 된다. 「판별식 조건」과 「모든 각에 대해 성립할 조건」도 제한 범위 이차식의 최대최소라는 한 축으로 합칠 수 있다.
- ★4 이상을 만드는 신호는 거의 전부 **기각 단계(I-VF)** 와 **대칭·주기(I-SYM·I-PD)** 였다. 카탈로그의 base ★ 를 정할 때 이 두 신호의 유무를 1차 기준으로 쓰는 것이 이 단원에서는 잘 맞는다.
