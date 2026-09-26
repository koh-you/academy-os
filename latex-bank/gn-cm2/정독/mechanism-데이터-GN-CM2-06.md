---
name: mechanism-데이터-GN-CM2-06
description: 개념원리 공통수학2 06 점과 직선 사이의 거리(1/1 · 57-122~64-148) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: 06 점과 직선 사이의 거리
  unit_code: CM2-06
  part: "1/1"
  extract_range: "57~64쪽 · 57-122~64-148"
  total_problems: 31
  unit_total: 31
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 06 점과 직선 사이의 거리 (1/1) 정독 데이터 (v1.0)

이 파일은 06단원 31문 전수(57~64쪽 · 통번호 57-122~64-148)를 다룬다. 구역은 「개념원리 익히기」 3문 · 「필수·발전 예제」 14문(필수 3 · 발전 1 · 확인체크 10) · 「특강」 1문 · 「연습문제 STEP 1」 5문 · 「STEP 2」 5문 · 「실력 UP」 3문이다. 단원 전체가 **거리 공식 하나**(점과 직선 · 평행한 두 직선)를 축으로 삼고, 거기서 ⑴ 미지수 역산 ⑵ 삼각형 넓이 ⑶ 각의 이등분선(등거리 자취) ⑷ 최대·최소 네 갈래로 뻗는 배열이다. 그림은 64-143 한 문항(마름모 좌표)뿐이고 선택지는 64-146 한 문항뿐이다.

벤더 난이도 신호와 이 파일의 출발점 규약: 「개념원리 익히기」 통번호 ★1 · 「필수」 예제 ★2 · 「발전」 예제 ★3 · 「특강」 ★2~3 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4. **tag 「확인체크」 문항은 구역 신호를 우선**해 「필수·발전 예제」 구역 안의 확인체크는 바로 위 예제와 같은 출발점(필수 아래 ★2 · 발전 아래 ★3)으로 두었다(예제의 유제 배치이므로 통번호 익히기의 ★1과 구분한다). 출발점에서 M_total·통찰로 ±1 조정했고, 등거리 조건의 절댓값 ±두 갈래와 「양수·사분면·부호」로 한 근을 버리는 단계는 **단순 분기·단순 필터로 보아 통찰로 세지 않고** Mₜ(T-부호·T-범위)에 반영하는 규약을 31문 전체에 일관 적용했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 **원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM2-57-122
  page: 57
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 주어진 점과 직선 사이의 거리를 구하기. ⑷는 직선이 $y=3x-2$ 꼴로 주어짐.
  category: '점과 직선 사이의 거리 공식 직접 적용'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "점과 직선 사이의 거리 공식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    직선을 $ax+by+c=0$ 으로 정리한 뒤 공식에 한 번 대입하면 끝난다. ⑷만 기울기꼴을 일반형으로 옮기는 한 단계가 더 붙는다.
    익히기 구역·통찰 0·M_total 4 → ★1(절차형 감점은 하한 clamp).
  tier: star_1
  mechanism_primary: '직선을 $ax+by+c=0$ 으로 정리 → $d=|ax_1+by_1+c|/\sqrt{a^2+b^2}$ 대입'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\sqrt{5}$ ⑵ $\dfrac{1}{5}$ ⑶ $5$ ⑷ $\sqrt{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/57-122.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '점의 좌표와 직선의 계수를 자유롭게. 제약: $\sqrt{a^2+b^2}$ 가 $\sqrt{5},\sqrt{10},5$ 처럼 정리되는 계수(3·4·5, 1·2, 1·3)를 쓰고, 답이 무리수면 분모 유리화한 꼴로 맞춘다. 소문항 하나는 기울기꼴($y=mx+n$)로 둬 일반형 변환 단계를 남긴다.'
    creative: '(1) 점을 원점으로 고정하면 57-123(★1 유지) (2) 거리를 주고 점의 좌표 하나를 미지수로 두면 ★2(58-125 골조) (3) 한 점에서 여러 직선까지의 거리 중 최소인 것 고르기로 바꾸면 비교 단계가 붙어 ★2.'
```

```yaml
- id: GN-CM2-57-123
  page: 57
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 원점과 주어진 직선 사이의 거리를 구하기. ⑷는 직선이 $y=2x-4$ 꼴로 주어짐.
  category: '원점과 직선 사이의 거리'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원점과 직선 사이의 거리"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $(x_1,y_1)=(0,0)$ 이므로 공식이 $|c|/\sqrt{a^2+b^2}$ 한 줄로 줄어든다. 분모 유리화만 주의하면 된다.
    익히기 구역·통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: '원점 대입 → $d=|c|/\sqrt{a^2+b^2}$ → 유리화'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\sqrt{13}$ ⑵ $\sqrt{10}$ ⑶ $\dfrac{\sqrt{5}}{2}$ ⑷ $\dfrac{4\sqrt{5}}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/57-123.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상수항과 계수만 바꾸면 된다. 제약: $|c|/\sqrt{a^2+b^2}$ 가 정리되도록 $a^2+b^2$ 를 제곱수나 간단한 무리수로. ⑶처럼 계수에 공약수가 있는 꼴($2x-4y-5=0$)을 하나 섞으면 약분 함정이 생긴다.'
    creative: '(1) 원점 대신 한 점을 고정하면 57-122 (2) 원점에서의 거리를 주고 상수항을 미지수로 두면 ★2(58-127 골조) (3) 여러 직선 중 원점에 가장 가까운 것 고르기 → 비교 단계 추가 ★2.'
```

```yaml
- id: GN-CM2-57-124
  page: 57
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 평행한 두 직선 사이의 거리를 구하기. ⑷는 두 식의 계수가 배수 관계($x-2y+1=0$, $2x-4y-3=0$)로 주어짐.
  category: '평행한 두 직선 사이의 거리 — 한 직선 위의 점 잡기'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행한 두 직선 사이의 거리"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    한 직선 위의 점 하나를 잡아 다른 직선까지의 거리를 재는 표준 2단계. ⑷는 계수를 먼저 통일해야 하는 T-표기 함정이 있지만
    골조는 같다. 익히기 구역·통찰 0·M_total 5 → ★1 유지.
  tier: star_1
  mechanism_primary: '(필요하면 계수 통일) → 한 직선 위의 점 하나 선택 → 다른 직선까지 거리 공식'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\sqrt{5}$ ⑵ $\dfrac{\sqrt{10}}{2}$ ⑶ $1$ ⑷ $\dfrac{\sqrt{5}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/57-124.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 상수항의 차와 계수만 바꾼다. 제약: 두 식의 $x,y$ 계수가 반드시 비례해야 하고(평행), 점을 잡을 직선의 절편이 정수가 되게 상수항을 계수의 배수로. 계수 배수형 소문항은 하나만 남긴다.'
    creative: '(1) 거리를 주고 상수항을 미지수로 두면 59-e15(★2) (2) 두 직선이 평행할 조건까지 물으면 59-129(★2) (3) 세 평행선의 간격 비를 묻는 꼴로 확장하면 단계가 늘어 ★3.'
```

### 필수·발전 예제

```yaml
- id: GN-CM2-58-e14
  page: 58
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    점 $(2,3)$ 과 직선 $y=\dfrac{3}{4}x+\dfrac{k}{2}$ 사이의 거리가 $2$ 일 때 모든 상수 $k$ 의 값의 합.
  category: '거리 조건으로 직선의 상수 역산 — 절댓값 방정식'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "점과 직선 사이의 거리로 미지수 정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분수 계수를 없애 $3x-4y+2k=0$ 으로 고친 뒤 거리 공식 → $|2k-6|=10$ 의 절댓값 방정식. 두 근을 모두 살려 합을 구하는
    설계라 근 하나를 버리는 판단이 없다. 필수 예제 출발 ★2 · 통찰 0 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: '분수 계수 제거 → 일반형 → 거리 공식 → 절댓값 방정식 두 근 → 합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/58-e14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '점의 좌표·기울기·거리 값을 바꾼다. 제약: 계수가 3·4(분모 5)나 1·2 여야 $|\cdot|=$ 유리수가 되고, 절댓값 방정식의 두 근이 모두 유리수로 떨어지게 거리 값을 고른다. 두 근의 합만 물으면 사실상 $k$ 항 계수만으로 결정된다.'
    creative: '(1) 합 대신 「곱」이나 「양수인 $k$」를 물으면 근을 개별로 구해야 해 계산이 늘고 T-범위 필터가 생긴다(★2 유지) (2) 직선을 고정하고 점의 $y$ 좌표를 미지수로 두면 58-125 (3) 거리 조건을 「거리가 $2$ 이하」 부등식으로 바꾸면 범위 답 → ★3.'
```

```yaml
- id: GN-CM2-58-125
  page: 58
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    제1사분면 위의 점 $(1,a)$ 와 직선 $3x+y-5=0$ 사이의 거리가 $\sqrt{10}$ 일 때 $a$ 의 값.
  category: '거리 조건으로 점의 좌표 역산 — 사분면 조건으로 한 근 버리기'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "점과 직선 사이의 거리로 점의 좌표 정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    거리 공식 → $|a-2|=10$ → 두 근 중 제1사분면 조건($a>0$)으로 하나를 버린다. 근을 버리는 단계는 조건 한 줄 확인이라
    통찰로 세지 않고 Mₜ(T-범위)로 처리했다. 필수 예제 유제 출발 ★2 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '거리 공식 → 절댓값 방정식 두 근 → 제1사분면 조건으로 한 근 기각'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/58-125.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '직선의 계수와 거리 값, 점의 $x$ 좌표를 바꾼다. 제약: 버려지는 근이 실제로 조건을 위배해야 하므로 두 근의 부호가 갈리도록 거리 값을 충분히 크게 잡는다($|a-2|>2$).'
    creative: '(1) 사분면 조건을 빼고 「모든 $a$ 의 합」으로 바꾸면 58-e14 골조(★2) (2) 점을 $x$ 축·$y$ 축 위로 제한하면 63-136 (3) 점을 직선 위의 점 $(t,\,mt+n)$ 으로 두면 매개변수 두 겹 → ★3.'
```

```yaml
- id: GN-CM2-58-126
  page: 58
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 $(-2,3)$ 에서 두 직선 $x+2y-1=0$, $2x+y+k=0$ 까지의 거리가 같도록 하는 모든 상수 $k$ 의 값의 곱.
  category: '두 직선까지의 거리가 같을 조건 — 한쪽 값을 계산한 뒤 절댓값 방정식'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선까지의 거리가 같은 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 직선의 $\sqrt{a^2+b^2}$ 가 모두 $\sqrt{5}$ 로 같아 분모가 약분되고 $3=|k-1|$ 한 줄로 끝난다. 두 근을 모두 살려 곱을 묻는 설계.
    필수 예제 유제 출발 ★2 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '두 거리를 각각 $k$ 의 식으로 → 같다고 놓기 → 절댓값 방정식 두 근 → 곱'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/58-126.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '점의 좌표와 두 직선의 계수를 바꾼다. 제약: 두 직선의 $\sqrt{a^2+b^2}$ 를 같게($1{,}2$ 와 $2{,}1$ 처럼) 두면 분모가 약분돼 계산이 가볍고, 다르게 두면 무리수 계수 방정식이 돼 난도가 한 단 오른다.'
    creative: '(1) 곱 대신 「$k>0$ 인 값」을 물으면 T-범위 필터 추가(★2) (2) 점을 미지수로, 두 직선을 고정하면 각의 이등분선(61-133 · ★3) (3) 「거리의 비가 $1:2$」로 바꾸면 절댓값 방정식이 두 겹 → ★3.'
```

```yaml
- id: GN-CM2-58-127
  page: 58
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    직선 $3x+4y+1=0$ 에 수직이고 원점으로부터의 거리가 $1$ 인 직선의 방정식을 모두 구하기.
  category: '수직 조건으로 계수 결정 → 원점까지의 거리로 상수항 결정'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수직 조건과 원점까지의 거리로 직선 정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수직인 직선을 $4x-3y+c=0$ 으로 잡는 계수 교환이 1단계, $|c|/5=1$ 이 2단계. 답이 두 개(부호 두 갈래)라는 점만 놓치지 않으면 된다.
    필수 예제 유제 출발 ★2 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '수직 → 계수 $(a,b)\to(b,-a)$ 로 교환 → 원점까지 거리 $|c|/\sqrt{a^2+b^2}=1$ → $c=\pm5$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4x-3y-5=0$, $4x-3y+5=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/58-127.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '기준 직선의 계수(3·4 → 5·12, 1·1)와 거리 값을 바꾼다. 제약: $\sqrt{a^2+b^2}$ 가 정수인 피타고라스 쌍이면 $c$ 가 정수로 떨어진다. 거리 값을 바꾸면 $c=\pm(\text{거리}\times\sqrt{a^2+b^2})$ 로 두 답이 대칭.'
    creative: '(1) 수직을 평행으로 바꾸면 63-137 골조(★2) (2) 원점 대신 한 점으로부터의 거리로 바꾸면 계산만 늘고 ★2 유지 (3) 「두 직선의 $y$ 절편의 곱」을 묻는 꼴로 바꾸면 두 답을 모두 구해야 해 누락 함정이 강해진다(★2~3).'
```

```yaml
- id: GN-CM2-59-e15
  page: 59
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    평행한 두 직선 $2x-y+5=0$, $2x-y+k=0$ 사이의 거리가 $2\sqrt{5}$ 일 때 상수 $k$ 를 모두 구하기.
  category: '평행선 사이의 거리 조건으로 상수항 역산'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행한 두 직선 사이의 거리로 미지수 정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    한 직선 위의 점을 잡아 다른 직선까지 거리 → $|k-5|/\sqrt5=2\sqrt5$ → $|k-5|=10$. 기준 직선의 양쪽에 답이 하나씩 생기므로
    두 값을 모두 쓰는 것이 핵심. 필수 예제 출발 ★2 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '한 직선 위의 점 선택 → 거리 공식 → $|k-c|=d\sqrt{a^2+b^2}$ → 두 값'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$k=-5$ 또는 $k=15$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/59-e15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수·기준 상수항·거리 값을 바꾼다. 제약: 거리 $\times\sqrt{a^2+b^2}$ 가 정수여야 두 답이 정수. 거리 값을 무리수로 주고 계수를 그에 맞추는 것이 이 유형의 관례($2\sqrt5$ 와 $\sqrt5$).'
    creative: '(1) 「양수인 $k$」만 물으면 59-128 (2) 평행 조건까지 미지수로 주면 59-129·59-130(★2) (3) 두 평행선 사이에 놓인 제3의 평행선을 묻는 꼴로 확장하면 등분 조건이 추가돼 ★3.'
```

```yaml
- id: GN-CM2-59-128
  page: 59
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    평행한 두 직선 $x+y-3=0$, $x+y+m=0$ 사이의 거리가 $4\sqrt{2}$ 일 때 양수 $m$ 의 값.
  category: '평행선 거리 조건 → 절댓값 방정식 → 양수 조건으로 한 근 기각'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행한 두 직선 사이의 거리로 미지수 정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    59-e15 와 같은 골조에 「양수 $m$」 필터만 붙었다. 필터는 조건 한 줄 확인이라 통찰로 세지 않고 Mₜ(T-범위)에 반영했다.
    필수 예제 유제 출발 ★2 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '한 직선 위의 점 선택 → 거리 공식 → $|m+3|=8$ → 양수 조건으로 한 근 기각'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/59-128.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수와 거리 값을 바꾼다. 제약: 거리 $\times\sqrt{a^2+b^2}$ 가 기준 상수항보다 커야 두 근의 부호가 갈리고 「양수」 필터가 실제로 작동한다.'
    creative: '(1) 필터를 빼고 두 값을 모두 묻기(★2) (2) 「두 직선 사이의 거리가 최소가 되는」 꼴은 성립하지 않으므로 대신 제3의 직선까지 포함한 간격 문제로 확장 → ★3 (3) 거리를 미지수로 두고 $m$ 의 범위를 묻는 부등식형 → ★3.'
```

```yaml
- id: GN-CM2-59-129
  page: 59
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 직선 $3x-y+12=0$, $ax+2y-4=0$ 이 평행할 때 상수 $a$ 의 값과 두 직선 사이의 거리.
  category: '평행 조건(계수비)으로 미지수 결정 → 계수 통일 → 평행선 거리'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행 조건으로 미지수 정한 뒤 두 직선 사이의 거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계수비 $a:2=3:(-1)$ 로 $a$ 를 먼저 정하고, 얻은 식을 약분해 계수를 맞춘 뒤 거리를 잰다. 약분을 빠뜨리면 거리가 틀리는
    T-표기 함정이 핵심. 필수 예제 유제 출발 ★2 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '평행 → 계수비 등식으로 $a$ 결정 → 두 식의 계수를 같게 정리 → $|c_1-c_2|/\sqrt{a^2+b^2}$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a=-6$, 거리: $\sqrt{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/59-129.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '기준 직선의 계수와 두 상수항, 둘째 식의 $y$ 계수를 바꾼다. 제약: 둘째 식의 $y$ 계수를 기준의 배수로 둬야 $a$ 가 정수로 떨어지고, 두 식을 통일한 뒤 상수항 차가 $\sqrt{a^2+b^2}$ 의 배수면 답이 깔끔하다. 「일치(같은 직선)」가 되지 않도록 상수항을 비례에서 벗어나게 둔다.'
    creative: '(1) 평행 대신 수직 조건으로 바꾸면 거리 대신 교점 문제가 된다(★2) (2) 「평행할 조건과 일치할 조건을 구분」하게 물으면 T-경계 함정이 추가돼 ★3 (3) $a$ 와 상수항을 동시에 미지수로 두면 59-130.'
```

```yaml
- id: GN-CM2-59-130
  page: 59
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    평행한 두 직선 $3x+4y-5=0$, $3x+ay+b=0$ 사이의 거리가 $3$ 일 때 상수 $a$, $b$ 의 값($b<0$).
  category: '평행 조건으로 계수 결정 → 거리 조건으로 상수항 결정 → 부등식 조건으로 한 근 기각'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행한 두 직선 사이의 거리로 두 미지수 정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x$ 계수가 이미 같으므로 평행에서 $a=4$ 가 즉시 나오고, $|b+5|/5=3$ 의 두 근 중 $b<0$ 으로 하나를 버린다.
    미지수가 둘이지만 순차 결정이라 단계는 늘지 않는다. 필수 예제 유제 출발 ★2 · 통찰 0 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '계수 비교로 $a$ 결정 → 평행선 거리 공식 → $|b+5|=15$ → $b<0$ 으로 한 근 기각'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a=4$, $b=-20$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/59-130.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '기준 계수(3·4)와 상수항, 거리 값을 바꾼다. 제약: 거리 $\times\sqrt{a^2+b^2}$ 가 기준 상수항보다 커야 두 근의 부호가 갈려 $b<0$ 필터가 작동한다. $x$ 계수를 다르게 주면 $a$ 결정에 계수비 한 단계가 더 붙는다.'
    creative: '(1) $b<0$ 대신 「$b$ 의 값의 합」을 물으면 필터가 사라진다(★2) (2) 두 직선이 일치할 조건을 함께 묻게 하면 ★3 (3) 거리 조건을 「원점에서 두 직선까지 거리의 비」로 바꾸면 식이 두 겹 → ★3.'
```

```yaml
- id: GN-CM2-60-e16
  page: 60
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    세 점 $\mathrm{A}(2,5)$, $\mathrm{B}(-3,2)$, $\mathrm{C}(1,-4)$ 를 꼭짓점으로 하는 삼각형 ABC 의 넓이.
  category: '한 변을 밑변으로 → 직선의 방정식 → 남은 꼭짓점까지의 거리 = 높이'
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "꼭짓점의 좌표가 주어진 삼각형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이 단원이 거리 공식을 쓰는 대표 용도. 밑변 AB 의 길이(두 점 사이 거리)와 직선 AB 의 방정식을 만들고 C 까지의 거리를 높이로 쓴다.
    단계는 세 개지만 전부 표준 절차라 통찰 0. 필수 예제 출발 ★2 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '직선 AB 의 방정식 → $\overline{\mathrm{AB}}$ 와 C 까지의 거리 $h$ → $S=\frac12\overline{\mathrm{AB}}\cdot h$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$21$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/60-e16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 꼭짓점의 좌표를 바꾼다. 제약: 밑변으로 삼을 변의 방향벡터가 정수이고 $\sqrt{a^2+b^2}$ 가 높이의 분모와 약분되게 잡으면 넓이가 정수로 떨어진다. 세 점이 한 직선 위에 있지 않은지 먼저 확인.'
    creative: '(1) 한 꼭짓점을 원점으로 고정하면 60-131(★2) (2) 한 좌표를 미지수로 두고 넓이를 주면 60-132(★2) (3) 사각형(평행사변형)으로 확장하면 63-139 (4) 세 직선으로 둘러싸인 삼각형으로 바꾸면 교점 구하기가 앞에 붙어 ★3(64-145).'
```

```yaml
- id: GN-CM2-60-131
  page: 60
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    원점 O 와 두 점 $\mathrm{A}(2,2)$, $\mathrm{B}(-3,6)$ 에 대하여 삼각형 OAB 의 넓이.
  category: '원점을 지나는 변을 밑변으로 → 높이는 원점 직선까지의 거리'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원점을 꼭짓점으로 하는 삼각형의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    밑변을 OA 로 잡으면 직선 OA 가 상수항 없는 $y=x$ 라 방정식 세우기가 한 줄로 줄어든다. 나머지는 60-e16 과 같은 골조.
    필수 예제 유제 출발 ★2 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '직선 OA(상수항 0) → B 까지의 거리 $h$ → $S=\frac12\overline{\mathrm{OA}}\cdot h$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/60-131.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 점의 좌표를 바꾼다. 제약: 원점을 지나는 변의 기울기를 간단히($\pm1$, $\pm2$) 두면 분모 $\sqrt{a^2+b^2}$ 가 밑변 길이와 약분돼 넓이가 정수. 두 점이 원점과 일직선이 되지 않게 한다.'
    creative: '(1) 특강의 $S=\frac12|x_1y_2-x_2y_1|$ 공식으로 풀게 하면 62-135(★2, 한 줄) (2) 한 점을 직선 위의 임의의 점으로 바꾸면 63-138(평행 착안) (3) 넓이를 주고 좌표 하나를 미지수로 두면 60-132 골조.'
```

```yaml
- id: GN-CM2-60-132
  page: 60
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    세 점 $\mathrm{A}(1,2)$, $\mathrm{B}(3,-1)$, $\mathrm{C}(a,4)$ 를 꼭짓점으로 하는 삼각형 ABC 의 넓이가 $8$ 이 되도록 하는 $a$ 의 값을 모두 구하기.
  category: '넓이를 미지수의 식으로 세우고 역산 — 절댓값 방정식'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 넓이가 주어질 때 꼭짓점의 좌표 정하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    밑변 AB 를 고정하면 $\overline{\mathrm{AB}}=\sqrt{13}$ 과 높이의 분모가 약분돼 넓이가 $|3a+1|/2$ 로 정리된다. 거기서 절댓값 방정식을 풀 뿐이라
    역산이지만 미정계수 표준 절차에 가깝다(통찰 0). 필수 예제 유제 출발 ★2 · M_total 8 → ★2 유지.
  tier: star_2
  mechanism_primary: '직선 AB 고정 → 넓이를 $a$ 의 절댓값 식으로 → 방정식 두 근'
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$5$, $-\dfrac{17}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/60-132.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '고정된 두 점과 넓이 값, 움직이는 점의 고정 좌표($y=4$)를 바꾼다. 제약: 두 답이 모두 유리수로 떨어지려면 $\overline{\mathrm{AB}}$ 와 거리 분모가 약분돼야 하므로 A·B 의 좌표차를 정수로. 넓이를 밑변의 배수로 잡으면 정수 답.'
    creative: '(1) 「$a>0$ 인 값」으로 좁히면 T-범위 필터 추가(★2) (2) 점 C 를 직선 위의 점으로 두면 자취·최솟값 문제로 확장(★3) (3) 넓이를 이등분하는 직선을 묻는 꼴로 바꾸면 64-148 계열(★4).'
```

```yaml
- id: GN-CM2-61-e17
  page: 61
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전예제"
  summary: |
    두 직선 $2x-y-1=0$, $x+2y-1=0$ 이 이루는 각의 이등분선의 방정식.
  category: '각의 이등분선 = 두 직선에서 같은 거리에 있는 점의 자취'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「각의 이등분선」이라는 기하 조건을 「두 직선까지의 거리가 같은 점 $(x,y)$ 의 자취」라는 대수 조건으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "각의 이등분선의 방정식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    조건을 등거리 자취로 옮기는 것이 전부이고, 그 뒤 $|2x-y-1|=|x+2y-1|$ 의 ±두 갈래는 표준 분기라 통찰로 세지 않았다
    (두 이등분선이 서로 수직이라는 점검이 검산 역할). 발전 예제 출발 ★3 · 통찰 1개 d2 → ★3 유지.
  tier: star_3
  mechanism_primary: '이등분선 위의 점 $(x,y)$ → 두 직선까지 거리 같음 → 절댓값 방정식 ± 두 갈래 → 직선 두 개'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$x-3y=0$ 또는 $3x+y-2=0$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/61-e17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 직선의 계수를 바꾼다. 제약: 두 직선의 $\sqrt{a^2+b^2}$ 를 같게 두면 분모가 약분돼 이등분선의 계수가 정수로 떨어진다($1{,}2$ 와 $2{,}1$ / $1{,}3$ 과 $3{,}1$). 다르면 무리수 계수가 남아 난도가 오른다.'
    creative: '(1) 「점의 자취」 표현으로 바꾸면 61-133 (2) 「기울기가 음수인 쪽」·「예각을 이등분하는 쪽」을 고르게 하면 사후 판별이 붙어 ★3(61-134 · 63-140) (3) 두 직선 대신 한 직선과 한 점(포물선 정의)으로 바꾸면 단원을 넘는 확장 ★4.'
```

```yaml
- id: GN-CM2-61-133
  page: 61
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 직선 $y=-\dfrac{1}{2}x-\dfrac{3}{2}$, $y=2x-5$ 로부터 같은 거리에 있는 점 P 가 나타내는 도형의 방정식.
  category: '등거리 자취 → 각의 이등분선 두 개'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「같은 거리에 있는 점이 나타내는 도형」을 점 $(x,y)$ 에 대한 절댓값 등식으로 옮김(발문이 등거리를 직접 말해 변환 부담은 낮음)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 직선에서 같은 거리에 있는 점의 자취"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    61-e17 과 같은 골조인데 기울기꼴을 일반형으로 고치는 단계가 앞에 붙는다(두 직선이 수직이라 이등분선도 서로 수직).
    발전 예제 유제 출발 ★3 · 통찰 1개 d1 → ★3 유지.
  tier: star_3
  mechanism_primary: '두 직선을 일반형으로 → 점 $(x,y)$ 의 등거리 조건 → ± 두 갈래 → 직선 두 개'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$x-3y-8=0$ 또는 $3x+y-2=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/61-133.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 직선의 기울기와 절편을 바꾼다. 제약: 분수 계수를 정수 일반형으로 고쳤을 때 두 직선의 $\sqrt{a^2+b^2}$ 가 같아야 답이 정수 계수로 정리된다. 두 직선이 평행하면 자취가 한 직선뿐이 되므로 기울기를 다르게.'
    creative: '(1) 두 직선을 평행하게 주면 자취가 가운데 평행선 하나(★2) (2) 「$x$ 축 위의 점」으로 제한하면 63-136(★2) (3) 자취 중 하나를 고르는 조건(기울기 부호·예각)을 붙이면 61-134·63-140.'
```

```yaml
- id: GN-CM2-61-134
  page: 61
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 직선 $x-3y+4=0$, $3x-y-2=0$ 이 이루는 각을 이등분하는 직선 중에서 기울기가 음수인 직선의 방정식.
  category: '각의 이등분선 두 개를 구한 뒤 기울기 조건으로 하나 선택'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「각을 이등분하는 직선」을 두 직선까지의 거리가 같은 점의 자취로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "각의 이등분선의 방정식 — 조건에 맞는 쪽 고르기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ± 두 갈래에서 나온 두 직선의 기울기를 비교해 음수 쪽을 고른다. 고르는 단계는 계산 없이 기울기만 보면 되므로
    통찰이 아니라 T-부호 함정으로 처리했다. 발전 예제 유제 출발 ★3 · 통찰 1개 d2 → ★3 유지.
  tier: star_3
  mechanism_primary: '등거리 조건 → ± 두 갈래로 이등분선 두 개 → 기울기 부호로 하나 선택'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$x+y-3=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/61-134.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 직선의 계수를 대칭 쌍($1{,}-3$ 과 $3{,}-1$)으로 유지하면 이등분선이 기울기 $\pm1$ 로 깔끔하게 갈린다. 제약: 두 갈래의 기울기 부호가 실제로 갈려야 선택 조건이 작동한다.'
    creative: '(1) 조건을 「예각을 이등분하는 쪽」으로 바꾸면 기하 판별이 필요해 통찰 하나가 더 붙는다(63-140 · ★3) (2) 「원점을 지나는 쪽」 같은 다른 필터로 교체(★3 유지) (3) 이등분선 위의 점으로 삼각형 넓이를 묻는 복합형 → ★4.'
```

### 특강

```yaml
- id: GN-CM2-62-135
  page: 62
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "특강"
  summary: |
    원점 O 와 두 점 $\mathrm{A}(-3,5)$, $\mathrm{B}(1,-3)$ 에 대하여 삼각형 OAB 의 넓이.
  category: '원점을 꼭짓점으로 하는 삼각형의 넓이 공식 직접 적용'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원점을 꼭짓점으로 하는 삼각형의 넓이 — 좌표 공식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    특강에서 유도한 $S=\frac12|x_1y_2-x_2y_1|$ 에 좌표를 한 번 대입하면 끝난다(음수 좌표의 부호 처리만 주의).
    [분류 이슈] 특강 구역 신호는 ★2~3 인데 실제 노동량은 공식 한 줄(통찰 0 · M_total 4)이라 절차형 감점을 적용하면 ★1 이다.
    공식을 따로 외워야 접근 가능하다는 점을 살려 라벨은 벤더 신호대로 ★2 로 두고 이슈만 기록한다.
  tier: star_2
  mechanism_primary: '$S=\frac12|x_1y_2-x_2y_1|$ 에 두 점의 좌표 대입'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/62-135.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 점의 좌표만 바꾼다. 제약: $x_1y_2-x_2y_1$ 이 짝수면 넓이가 정수. 값이 0 이 되면 세 점이 일직선이라 삼각형이 되지 않으므로 피한다. 좌표에 음수를 섞어 부호 함정을 남긴다.'
    creative: '(1) 공식 없이 60-131 처럼 밑변·높이로 풀게 하면 단계가 늘어 ★2(같은 답) (2) 꼭짓점 하나를 원점에서 떼면 공식이 평행이동 보정을 요구해 ★3 (3) 넓이를 주고 좌표 하나를 미지수로 두면 역산형 ★2.'
```

### 연습문제 STEP 1

```yaml
- id: GN-CM2-63-136
  page: 63
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $x$ 축 위의 점 P 에서 두 직선 $x+3y-2=0$, $3x-y+3=0$ 까지의 거리가 같을 때 점 P 의 좌표를 모두 구하기.
  category: '축 위의 점을 매개화 → 등거리 조건 → 절댓값 방정식'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 직선에서 같은 거리에 있는 축 위의 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「$x$ 축 위의 점」을 $(a,0)$ 으로 두는 것이 유일한 착안이고, 두 직선의 분모가 모두 $\sqrt{10}$ 이라 약분된다.
    발문이 등거리를 직접 주므로 동치 변환 부담이 없어 통찰 0. STEP 1 출발 ★2 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '$\mathrm{P}(a,0)$ 로 두기 → 두 거리 같음 → $|a-2|=|3a+3|$ 의 ± 두 갈래 → 좌표 두 개'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\left(-\dfrac{5}{2},\,0\right)$, $\left(-\dfrac{1}{4},\,0\right)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/63-136.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 직선의 계수와 상수항을 바꾼다. 제약: 두 직선의 $\sqrt{a^2+b^2}$ 를 같게 두면 분모가 약분돼 일차방정식 두 개로 끝난다. 다르게 두면 계수에 무리수가 남아 STEP 1 수준을 넘는다. 답이 분수여도 되지만 두 갈래 모두 존재하도록 직선이 축과 평행하지 않게.'
    creative: '(1) $x$ 축을 $y$ 축이나 직선 $y=x$ 로 바꾸면 매개화만 달라지고 ★2 유지 (2) 제한을 없애면 61-133(자취 · ★3) (3) 「거리의 비가 $1:2$」로 바꾸면 절댓값 방정식이 무거워져 ★3.'
```

```yaml
- id: GN-CM2-63-137
  page: 63
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    직선 $y=3x+2$ 에 평행하고 이 직선과의 거리가 $\sqrt{10}$ 인 두 직선의 $y$ 절편의 합.
  category: '평행선 거리 조건으로 절편 두 개 결정 → 합'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행하고 거리가 주어진 직선 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평행선을 $3x-y+c=0$ 으로 두고 $|c-2|/\sqrt{10}=\sqrt{10}$ → $c=12,\,-8$. $y$ 절편이 곧 $c$ 이므로 합은 $4$.
    두 직선이 기준 직선에 대해 대칭이라 「합 = 기준 절편의 2배」로 한 줄에 끝낼 수도 있다(지름길). STEP 1 출발 ★2 · 통찰 0 → ★2.
  tier: star_2
  mechanism_primary: '평행 → $3x-y+c=0$ → 거리 조건 $|c-2|=10$ → 두 절편의 합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/63-137.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '기준 직선의 기울기·절편과 거리 값을 바꾼다. 제약: 거리 $\times\sqrt{m^2+1}$ 이 정수여야 절편이 정수로 떨어진다($m=3$ 이면 거리를 $\sqrt{10}$ 의 배수로). 「합」을 묻는 한 답은 기준 절편의 2배로 고정된다.'
    creative: '(1) 「곱」이나 「양수인 절편」을 물으면 두 값을 각각 구해야 해 대칭 지름길이 막힌다(★2) (2) 평행 대신 수직으로 바꾸면 58-127 (3) 두 직선 사이에 원을 끼우는 설정으로 확장하면 단원을 넘어 ★4.'
```

```yaml
- id: GN-CM2-63-138
  page: 63
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    두 점 $\mathrm{O}(0,0)$, $\mathrm{A}(-1,3)$ 과 직선 $3x+y-6=0$ 위의 점 P 에 대하여 삼각형 AOP 의 넓이.
  category: '밑변 OA 와 주어진 직선이 평행 → 높이 일정 → 넓이 불변'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "P 가 정해지지 않았는데 넓이가 하나로 정해진다는 데서 직선 OA($3x+y=0$)와 주어진 직선이 평행함을 알아채고, 높이를 두 평행선 사이의 거리로 바꿔 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "밑변과 평행한 직선 위의 점 — 넓이 일정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평행을 못 보면 P 를 매개변수로 두고 헤매게 되고, 보면 $\overline{\mathrm{OA}}=\sqrt{10}$ 과 평행선 사이의 거리 $6/\sqrt{10}$ 으로 두 줄에 끝난다.
    [분류 이슈] 착안 여부로 체감이 갈려 ★3 후보이지만 통찰 1개(d2)로는 +1 조건(2개 이상 또는 d3)에 못 미쳐 STEP 1 신호대로 ★2 유지.
  tier: star_2
  mechanism_primary: '직선 OA 가 주어진 직선과 평행 → 높이 = 두 평행선 사이의 거리 → $S=\frac12\overline{\mathrm{OA}}\cdot h$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/63-138.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'A 의 좌표와 직선의 상수항을 바꾼다. 제약: 직선의 $x,y$ 계수가 반드시 OA 의 방향과 비례해야(평행) 넓이가 상수로 정해진다 — 이 비례가 깨지면 문제 자체가 성립하지 않으므로 숫자 변형에서 가장 먼저 고정할 조건. 상수항만 바꾸면 넓이가 비례해 바뀐다.'
    creative: '(1) 평행을 깨고 「넓이의 최솟값」을 물으면 P 를 매개화해야 해 ★4 (2) 밑변을 원점 아닌 두 점으로 옮기면 직선 방정식 단계가 하나 늘어 ★3 (3) P 를 선분 위로 제한하고 넓이의 범위를 물으면 T-범위 함정 추가 ★3.'
```

```yaml
- id: GN-CM2-63-139
  page: 63
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    네 점 $\mathrm{O}(0,0)$, $\mathrm{A}(2,1)$, $\mathrm{B}(3,3)$, $\mathrm{C}(1,2)$ 를 꼭짓점으로 하는 평행사변형 OABC 의 넓이.
  category: '평행사변형 = 밑변 × 높이(한 변까지의 거리) 또는 삼각형의 2배'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행사변형의 넓이 — 좌표"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    한 변 OA 를 밑변으로 잡아 직선 OA($x-2y=0$)를 세우고 C 까지의 거리를 높이로 쓰면 바로 끝난다(대각선 OB 로 나눠 삼각형 2배로
    봐도 같다). 도형만 사각형일 뿐 골조는 60-e16 과 동일해 통찰 0. STEP 1 출발 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '직선 OA → C 까지의 거리 $h$ → $S=\overline{\mathrm{OA}}\cdot h$ (= 삼각형 OAB 의 2배)'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/63-139.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 점의 좌표를 바꾼다. 제약: 평행사변형이 되려면 $\mathrm{B}=\mathrm{A}+\mathrm{C}$ 가 반드시 성립해야 하므로 A·C 를 먼저 정하고 B 를 계산해 둔다. 밑변 방향을 정수 기울기로 두면 넓이가 정수.'
    creative: '(1) B 를 주지 않고 「평행사변형이 되도록 하는 B」를 함께 묻게 하면 단계 추가 ★3 (2) 마름모·사다리꼴로 바꾸면 조건 확인이 붙어 ★3 (3) 넓이를 주고 한 좌표를 미지수로 두면 역산형 ★3.'
```

```yaml
- id: GN-CM2-63-140
  page: 63
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    두 직선 $3x+y=0$, $x+3y+4=0$ 이 이루는 각 중에서 예각을 이등분하는 직선의 방정식.
  category: '등거리 자취로 이등분선 두 개 → 예각 쪽 판별'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「각의 이등분선」을 두 직선까지 거리가 같은 점의 자취로 옮김"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 이등분선 후보 중 어느 쪽이 예각을 이등분하는지 교점 근처의 점이나 기울기 관계로 판별해 한 쪽을 기각"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "각의 이등분선의 방정식 — 예각 쪽 고르기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    61-134 의 「기울기 음수」 필터와 달리 예각·둔각 판별은 식만 보고는 정해지지 않아 도형을 따로 확인해야 한다.
    통찰 2개(EQV d2 + VF d1) → STEP 1 출발 ★2 에서 +1 하여 ★3. 벤더 신호와 1단 차이라 드리프트 기록 대상은 아니다.
  tier: star_3
  mechanism_primary: '등거리 조건 → ± 두 갈래 이등분선 → 예각 쪽 판별로 하나 기각'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$x+y+1=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/63-140.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 직선의 계수를 대칭 쌍($3{,}1$ 과 $1{,}3$)으로 유지하면 분모가 약분돼 이등분선이 기울기 $\pm1$ 로 갈린다. 제약: 두 직선이 이루는 예각·둔각이 실제로 구분되게(수직이 아니게) 계수를 잡는다.'
    creative: '(1) 「둔각을 이등분하는 쪽」으로 뒤집기(★3 유지) (2) 판별 기준을 「원점을 지나는 쪽」으로 바꾸면 계산만으로 끝나 ★2 (3) 이등분선과 두 직선으로 둘러싸인 삼각형의 넓이까지 물으면 64-145 를 얹어 ★4.'
```

### 연습문제 STEP 2

```yaml
- id: GN-CM2-63-141
  page: 63
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    직선 $(a+1)x-(a-3)y+a-15=0$ 이 실수 $a$ 에 관계없이 지나는 점 A 를 구한 뒤, A 와 직선 $2x-y+p=0$ 사이의 거리가 $\sqrt{5}$ 가 되는 모든 상수 $p$ 의 합.
  category: '정점 통과 조건(항등식) → 정점 좌표 → 거리 조건으로 상수 역산'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「$a$ 의 값에 관계없이 지난다」를 $a$ 에 대한 항등식으로 옮겨 $a(x-y+1)+(x+3y-15)=0$ 의 두 괄호를 동시에 0 으로 놓음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정점을 지나는 직선 + 점과 직선 사이의 거리"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞 단원(직선의 방정식)의 정점 통과 골조를 이 단원의 거리 역산에 이어 붙인 결합형. 정점 $\mathrm{A}(3,4)$ 를 얻고 나면
    $|p+2|=5$ 한 줄이다. 통찰 1개 d2 → STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: '$a$ 에 대한 항등식으로 정리 → 두 직선의 교점이 정점 A → 거리 조건 $|p+2|=5$ → 두 근의 합'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/63-141.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$a$ 로 묶이는 부분과 상수 부분의 계수를 바꾼다. 제약: 두 괄호가 나타내는 직선이 평행하지 않아야 정점이 존재하고, 교점이 정수 좌표가 되게 계수를 고른다. 뒤쪽 거리 값은 $\times\sqrt{5}$ 가 정수가 되도록.'
    creative: '(1) 정점을 직접 주면 58-e14 수준으로 내려간다(★2) (2) 「$p$ 의 값의 곱」이나 「양수인 $p$」로 바꾸면 필터 추가(★3 유지) (3) 정점과 원점을 잇는 선분을 지름으로 하는 원 등으로 확장하면 단원을 넘어 ★4.'
```

```yaml
- id: GN-CM2-63-142
  page: 63
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    실수 $k$ 에 대하여 점 $(1,-2)$ 와 직선 $x-2y-4+k(2x+y)=0$ 사이의 거리를 $f(k)$ 라 할 때 $f(k)$ 의 최댓값.
  category: '직선 다발의 정점 → 정점까지의 거리가 최댓값(수직일 때)'
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$k$ 가 붙은 식을 다발로 보고 $x-2y-4=0$ 과 $2x+y=0$ 의 교점(정점)을 항상 지난다는 조건으로 변환"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "거리 식을 $k$ 의 함수로 미분·정리하는 대신, 「정점을 지나는 직선까지의 거리는 정점까지의 선분 길이를 넘을 수 없다」는 기하 표현으로 옮겨 최댓값을 즉시 읽음"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "직선 다발의 정점 — 거리의 최댓값"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $f(k)$ 를 대수적으로 다루면 무리식 최대 문제라 공통수학2 범위를 벗어난다. 정점 A 를 찾고 「직선이 PA 에 수직일 때 거리 = $\overline{\mathrm{PA}}$」로
    보는 기하 전환이 핵심. 통찰 2개(EQV d2 + RT d2) → STEP 2 출발 ★3 에서 +1 하여 ★4.
  tier: star_4
  mechanism_primary: '다발의 정점 A 찾기 → 거리의 최댓값 = $\overline{\mathrm{PA}}$ (직선이 PA 에 수직일 때)'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{\sqrt{5}}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/63-142.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '다발을 이루는 두 직선의 계수와 점의 좌표를 바꾼다. 제약: 두 직선의 교점이 유리수 좌표여야 하고, 점 P 와 정점 A 의 거리가 정리되는 값이어야 한다. 점이 정점과 일치하면 최댓값이 0 이 되므로 피한다.'
    creative: '(1) 「최솟값」을 물으면 0(정점을 지나는 직선이 P 를 지날 수 있는지)으로 판정 문제가 바뀐다(★4) (2) 점 대신 원을 두고 직선이 원과 만날 $k$ 의 범위를 물으면 단원을 넘어 ★5 후보 (3) 다발 표현을 「두 직선의 교점을 지나는 직선」 말로 풀어 주면 정점 찾기 통찰이 사라져 ★3.'
```

```yaml
- id: GN-CM2-64-143
  page: 64
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    그림의 마름모 ABCD(꼭짓점이 두 축 위에 있음)에 대하여 점 $\mathrm{P}(-3,3)$ 과 마름모 위의 점 Q 사이의 거리의 최솟값 $m$, 최댓값 $M$ 일 때 $M^2-m^2$.
  category: '둘레 위의 점까지 거리 — 최솟값은 변까지의 수선, 최댓값은 가장 먼 꼭짓점'
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「마름모 위의 점까지 거리의 최소·최대」를 최소는 점과 변(직선) 사이의 거리, 최대는 네 꼭짓점 중 가장 먼 점까지의 거리라는 두 개의 계산 가능한 표현으로 옮김"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "수선의 발이 실제로 그 변(선분) 위에 있는지, 최대 후보가 꼭짓점 네 개 중 어느 것인지 각각 확인해 나머지 후보를 기각"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "도형 위의 점까지 거리의 최대·최소"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    그림에서 네 꼭짓점 좌표를 읽고 P 에 가장 가까운 변의 직선을 세워 거리를 재는 것이 $m$, 가장 먼 꼭짓점까지가 $M$.
    최솟값을 꼭짓점에서 찾거나 수선의 발이 변 밖으로 나가는 경우를 안 따지면 틀린다(T-범위·T-경계).
    통찰 2개(RT d2 + VF d1) → STEP 2 출발 ★3 에서 +1 하여 ★4.
  tier: star_4
  mechanism_primary: '그림에서 꼭짓점 좌표 읽기 → 가장 가까운 변의 직선까지 거리 $=m$ · 가장 먼 꼭짓점까지 거리 $=M$ → $M^2-m^2$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{121}{5}$'
  answer_source: "답지"
  figure: 'crop:fig-64-143.png'
  latex: latex-bank/gn-cm2/items/64-143.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'P 의 좌표와 마름모의 두 대각선 길이를 바꾼다. 제약: 그림 라벨($\pm1$, $\pm2$ 눈금과 A·B·C·D 위치)은 도형과 함께 고쳐야 하므로 좌표를 바꾸면 크롭도 새로 만들어야 한다. P 를 옮길 때 수선의 발이 변 안에 남는지 반드시 확인하고, $M^2-m^2$ 가 유리수로 떨어지게 변의 $\sqrt{a^2+b^2}$ 를 간단히.'
    creative: '(1) $M+m$ 이나 $M\cdot m$ 을 물으면 무리수가 남아 계산 부담만 늘어난다(★4 유지) (2) 마름모를 정사각형·직사각형으로 바꾸면 변 판별이 쉬워져 ★3 (3) Q 를 둘레가 아니라 마름모 내부(경계 포함)로 바꾸면 최솟값이 0 이 되는지부터 판정해야 해 ★4~5 (4) P 를 직선 위의 점으로 두고 최솟값의 최솟값을 물으면 ★5 후보.'
```

```yaml
- id: GN-CM2-64-144
  page: 64
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    두 직선 $x-y+1=0$, $x-2y+3=0$ 의 교점을 지나고 원점으로부터의 거리가 $1$ 인 직선의 방정식을 모두 구하기.
  category: '교점을 지나는 직선 → 거리 조건 → 기울기 없는 경우 별도 처리'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「교점을 지나는 직선」이 기울기가 있는 경우와 $y$ 축에 평행해 기울기가 없는 경우 두 갈래를 모두 포함함을 알아채고 둘 다 따짐(한 갈래만 보면 답 하나를 잃는다)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "교점을 지나고 원점까지 거리가 주어진 직선"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    교점 $(1,2)$ 를 구한 뒤 $y-2=m(x-1)$ 로 두고 거리 조건을 풀면 $m=\frac34$ 하나만 나온다. 답이 두 개인 이유는 기울기가 없는 $x=1$ 이
    따로 조건을 만족하기 때문이고, 이 누락이 이 문항의 전부. 통찰 1개 d2 → STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: '교점 구하기 → $y-2=m(x-1)$ 의 거리 조건으로 $m$ → 기울기 없는 직선 $x=1$ 을 따로 점검'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$3x-4y+5=0$, $x=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/64-144.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 직선의 계수와 거리 값을 바꾼다. 제약: 교점의 $x$ 좌표의 절댓값이 거리 값과 같아야 「기울기 없는 직선」이 답에 포함된다 — 이 일치를 깨면 답이 하나뿐인 평범한 문제가 되므로 숫자 변형에서 가장 먼저 지킬 조건. 교점은 정수 좌표로.'
    creative: '(1) 거리 값을 교점의 $x$ 좌표와 어긋나게 주면 답 하나(★2) (2) 직선 다발 $f+kg=0$ 표현으로 풀게 하면 $k$ 로 표현되지 않는 직선이 생기는 같은 함정이 다른 옷을 입는다(★3~4) (3) 원점 대신 다른 점까지의 거리로 바꾸면 계산만 늘고 ★3 유지.'
```

```yaml
- id: GN-CM2-64-145
  page: 64
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    세 직선 $2x-y-1=0$, $x-2y+1=0$, $x+y-5=0$ 으로 둘러싸인 삼각형의 넓이.
  category: '세 교점 구하기 → 한 변을 밑변으로 → 넓이'
  M: {s: 3, k: 3, a: 1, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "세 직선으로 둘러싸인 삼각형의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    연립 세 번으로 꼭짓점 $(1,1)$, $(2,3)$, $(3,2)$ 를 얻고 나면 60-e16 과 같은 골조다. 단계가 길고 연립·거리 계산이 겹쳐
    Mₖ 가 3 이지만 판단 분기는 없어 통찰 0. STEP 2 출발 ★3 · M_total 8 → ★3 유지.
  tier: star_3
  mechanism_primary: '세 쌍을 연립해 꼭짓점 3개 → 한 변의 직선과 길이 → 남은 꼭짓점까지의 거리 → $S=\frac12bh$'
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-cm2/items/64-145.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 직선의 계수를 바꾼다. 제약: 어느 두 직선도 평행하지 않고 세 직선이 한 점에서 만나지 않아야 삼각형이 생긴다(이 확인을 먼저). 교점이 정수 좌표가 되게 계수를 고르면 넓이가 유리수로 떨어진다.'
    creative: '(1) 한 직선에 미지수를 넣고 넓이를 주어 역산하게 하면 ★4 (2) 세 직선이 삼각형을 이루지 않을 조건을 묻는 꼴로 뒤집으면 평행·공점 분기가 생겨 ★4 (3) 네 직선으로 둘러싸인 사각형으로 늘리면 계산만 무거워져 질 저하(★3 유지 권장).'
```

### 연습문제 실력 UP

```yaml
- id: GN-CM2-64-146
  page: 64
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    세 점 $\mathrm{A}(6,0)$, $\mathrm{B}(0,-3)$, $\mathrm{C}(10,-8)$ 로 이루어진 삼각형에 내접하는 원의 중심 P 에 대하여 선분 OP 의 길이. 5지선다.
  category: '내심 = 세 변에서 같은 거리 → 등거리 연립 → 내부 조건으로 후보 기각'
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「내접원의 중심」을 「세 변까지의 거리가 모두 같은 점」으로 옮겨, 세 변의 직선의 방정식을 세운 뒤 등거리 연립으로 환원"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "절댓값을 푸는 부호 조합마다 방점(내심·방심) 후보가 나오므로, 삼각형 내부에 있는 조합만 남기고 나머지를 기각"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "삼각형의 내심 — 세 변에서 같은 거리"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    세 변의 직선을 모두 세우는 것부터 계산량이 크고, 등거리 식의 부호 조합을 잘못 고르면 방심 좌표가 나와 선택지에 없는 값이 된다.
    통찰 2개(EQV d2 + VF d2) → 실력 UP 출발 ★4 유지(★5 는 통찰 3개 이상 조건에 미달). 교육청 기출 태그는 +0 으로 두었다.
  tier: star_4
  mechanism_primary: '세 변의 직선의 방정식 → 내심의 등거리 조건 두 개 연립 → 내부 조건으로 부호 조합 확정 → $\overline{\mathrm{OP}}$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/64-146.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 꼭짓점의 좌표를 바꾼다. 제약: 세 변의 $\sqrt{a^2+b^2}$ 가 모두 정리되는 피타고라스 쌍(3·4·5, 5·12·13)이어야 등거리 식이 유리수 연립이 되고 내심 좌표가 유리수로 떨어진다. 세 변의 길이가 정수인 삼각형을 먼저 고른 뒤 좌표를 배치하는 편이 안전하다.'
    creative: '(1) 내접원의 반지름을 묻게 하면 넓이 공식 $S=rs$ 와 비교하는 다른 갈래가 생겨 I-SC 가 붙고 ★5 후보 (2) 외심으로 바꾸면 수직이등분선 연립이라 이 단원을 벗어난다 (3) 내심 대신 「한 변에서만 거리가 같은 방심」을 물으면 부호 판별이 주인공이 되어 ★5 후보 (4) 좌표를 주지 않고 변의 길이만 주면 순수 기하로 바뀐다.'
```

```yaml
- id: GN-CM2-64-147
  page: 64
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    이차함수 $y=x^2+3$ 의 그래프 위의 점과 직선 $y=-2x+k$ 사이의 거리의 최솟값이 $\sqrt{5}$ 일 때 상수 $k$ 의 값.
  category: '곡선 위의 점을 매개화 → 거리 식의 분자를 완전제곱으로 → 최솟값 조건'
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "이차함수 그래프(함수 단원)와 점과 직선 사이의 거리(이 단원)를 결합 — 곡선 위의 점을 $(t,\\,t^2+3)$ 으로 잡아야 거리 공식이 쓰인다"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "거리의 최솟값 조건을 「분자 이차식의 최솟값」(완전제곱 꼴의 꼭짓점) 조건으로 옮김 — 또는 직선에 평행한 접선의 접점을 찾는 갈래"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "곡선 위의 점과 직선 사이의 거리의 최솟값"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $d(t)=|t^2+2t+3-k|/\sqrt5$ 에서 분자를 $(t+1)^2+2-k$ 로 정리하면 최솟값이 $|2-k|/\sqrt5$ 가 된다. 포물선이 직선과 만나면
    최솟값이 0 이 되므로 $k$ 의 범위를 함께 따져야 하는 것이 T-범위 함정. 통찰 2개(XU d2 + EQV d2) → 실력 UP ★4 유지.
  tier: star_4
  mechanism_primary: '곡선 위의 점 $(t,\,t^2+3)$ → 거리 식 → 분자 완전제곱 → 최솟값 $=\sqrt5$ → $k$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/64-147.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '포물선의 상수항·직선의 기울기·최솟값을 바꾼다. 제약: 직선의 기울기를 바꾸면 완전제곱의 꼭짓점 위치가 함께 바뀌므로 최솟값 $\times\sqrt{m^2+1}$ 이 정수가 되게 고른다. 최솟값이 0 보다 커야(직선이 포물선과 만나지 않아야) 문제가 성립한다.'
    creative: '(1) 최솟값이 0 이 되는 $k$(접할 조건)를 묻게 하면 판별식 문제로 바뀐다(★3) (2) 「거리가 최소인 점의 좌표」를 함께 물으면 단계가 하나 늘고 ★4 유지 (3) 포물선을 원으로 바꾸면 중심까지의 거리에서 반지름을 빼는 골조가 되어 ★3 (4) $k$ 의 범위를 묻는 부등식형으로 뒤집으면 ★5 후보.'
```

```yaml
- id: GN-CM2-64-148
  page: 64
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    세 점 $\mathrm{A}(1,4)$, $\mathrm{B}(0,-1)$, $\mathrm{C}(2,0)$ 으로 이루어진 삼각형 ABC 의 넓이를 직선 $y=a$ 가 이등분할 때 상수 $a$ 의 값.
  category: '가로선이 잘라낸 위쪽 삼각형의 넓이를 $a$ 의 이차식으로 → 절반 조건 역산'
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「넓이를 이등분하도록 하는 $a$」를 역추적하기 위해, 먼저 잘린 도형이 어떤 모양인지(꼭짓점 A 쪽 삼각형) 정하고 넓이를 $a$ 의 식으로 세워야 함을 판단"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "가로선과 두 변의 교점을 내분 비로 읽어 밑변 길이와 높이를 모두 $(4-a)$ 의 일차식으로 표현 — 넓이가 $(4-a)^2$ 에 비례함을 끌어냄"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "삼각형의 넓이를 이등분하는 직선"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 변 AB·AC 의 $y$ 범위가 서로 달라 원래 삼각형과 닮음이 아니다(비례상수가 $\frac9{20}$ 로 섞인다) — 닮음비 $1:\sqrt2$ 로 단정하면
    틀린다. $y=a$ 가 두 변을 모두 자르는 구간에 답이 있는지(즉 $0<a<4$) 확인하는 T-범위 점검도 필요하다.
    통찰 2개(BW d2 + RT d2) → 실력 UP ★4 유지.
  tier: star_4
  mechanism_primary: '$y=a$ 와 두 변의 교점 → 위쪽 삼각형의 밑변·높이를 $(4-a)$ 로 표현 → 넓이 $=\frac12S$ → $a$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$4-\sqrt{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/64-148.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 꼭짓점의 좌표를 바꾼다. 제약: 자르는 선 $y=a$ 가 꼭짓점 A 쪽 두 변만 지나도록 A 의 $y$ 좌표를 나머지 둘보다 충분히 크게 두고, 답 $a$ 가 아래 두 꼭짓점의 $y$ 좌표보다 커야 한다(이 확인을 빼면 잘린 도형이 사다리꼴로 바뀌어 식이 달라진다). 답에 무리수가 남는 것이 이 유형의 기본형.'
    creative: '(1) 자르는 직선을 $x=a$ 나 원점을 지나는 직선으로 바꾸면 잘린 도형 판정이 달라져 ★4~5 (2) 「이등분」을 「$1:2$ 로 나눔」으로 바꾸면 계산만 늘고 ★4 유지 (3) A 를 지나는 중선이 넓이를 이등분함을 쓰게 하면 ★2 로 내려간다 (4) 사각형의 넓이를 이등분하는 가로선으로 확장하면 구간 분기가 생겨 ★5 후보.'
```

## 표본 판정 요약 (31문)

- ★ 분포: ★1 3 · ★2 16 · ★3 7 · ★4 5 · ★5 0
- 통찰형 12 · 절차형 19 · premium 0
- 통찰 유형 분포(라벨 수 기준): I-EQV 8 · I-RT 3 · I-VF 3 · I-MI 1 · I-BW 1 · I-XU 1 (SC·SYM·PD·CON 0)
- type_hint 계열 상위 5: 「거리 조건으로 미지수 역산(점·직선·평행선)」 9 · 「좌표로 삼각형·사각형 넓이」 8 · 「각의 이등분선·등거리 자취」 6 · 「정점·직선 다발·거리의 최대최소」 5 · 「거리 공식 직접 적용」 3
- 대상층: 하위권 3 · 중하위권 14 · 중위권 3 · 중상위권 6 · 상위권 5
- 그림 1문(`crop:fig-64-143.png`) · 선택지 1문(64-146) · 기출 태그 1문(64-146 교육청)
- 답 원천: 답지 26 · 본문 풀이 4(58-e14 · 59-e15 · 60-e16 · 61-e17) · 답지(쪽 렌더) 1(64-145). 답은 전사본 값을 그대로 옮겼고 골조를 잡는 과정에서 답과 어긋나는 문항은 없었다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 2단 이상 드리프트는 없다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-62-135 | 특강 구역 신호는 ★2~3 이나 실제는 좌표 공식 한 줄(통찰 0 · M_total 4)이라 절차형 감점을 적용하면 ★1. 공식을 따로 익혀야 접근된다는 점을 살려 라벨은 ★2 유지 | ★1 / ★2 |
| GN-CM2-63-138 | 밑변 OA 와 주어진 직선이 평행하다는 착안 여부로 체감이 크게 갈려 ★3 후보. 통찰 1개(d2)로는 +1 조건(2개 이상 또는 d3)에 미달해 STEP 1 신호대로 ★2 유지 | ★2 / ★3 |
| GN-CM2-63-140 | STEP 1 구역인데 통찰 2개(EQV d2 + 예각 판별 VF d1)로 +1 하여 ★3. 벤더와 1단 차이(YELLOW 수준) | ★2 / ★3 |
| GN-CM2-63-142 | STEP 2 구역인데 직선 다발의 정점 + 거리 최댓값의 기하 전환으로 +1 하여 ★4. 대수로만 풀면 공통수학2 범위를 벗어나는 무리식 최대 문제가 된다 | ★3 / ★4 |

`vendor_tags: ["확인체크"]` 10문의 출발점 해석도 은행 차원의 미결 사항이다. 이 파일은 「필수·발전 예제」 구역 안의 확인체크를 **바로 위 예제와 같은 출발점**(필수 아래 ★2 · 발전 아래 ★3)으로 두었다. 통번호 「개념원리 익히기」의 확인체크(★1 출발)와 구분하는 규약이며, 카탈로그 작성 시 한 번 확정해 두면 이 단원의 ★2 대량 구간(16문)이 재배치될 수 있다.

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ⑴ 「각의 이등분선·등거리 자취」(61-e17 · 61-133 · 61-134 · 63-136 · 63-140 · 64-146) — ±두 갈래 뒤 **어느 쪽을 고르는가**(기울기 부호 / 예각 / 삼각형 내부)로 base ★ 가 2→4 까지 벌어지므로 「이등분선 구하기」와 「조건에 맞는 쪽 고르기」를 별개 유형으로 두는 편이 낫다. ⑵ 「정점을 지나는 직선(다발) + 거리」(63-141 · 63-142 · 64-144) — 앞 단원(직선의 방정식)의 정점 골조를 전제로 하는 결합 유형이라 이 단원 안에 별도 슬롯이 필요하다. ⑶ 「거리의 최대·최소」(63-142 · 64-143 · 64-147) — 기하 전환이 본체라 계산형 유형과 성격이 다르다.
- **통합해도 될 유형**: 「점과 직선 사이의 거리로 미지수 정하기」(58-e14 · 58-125 · 58-126 · 58-127)와 「평행한 두 직선 사이의 거리로 미지수 정하기」(59-e15 · 59-128 · 59-129 · 59-130 · 63-137)는 골조가 「거리 공식 → 절댓값 방정식 → (필터)」로 동일해 한 유형의 변형군으로 묶고, 미지수가 계수인지 상수항인지 점의 좌표인지는 variation 차원으로 두면 된다. 「좌표로 삼각형·사각형 넓이」(60-e16 · 60-131 · 60-132 · 62-135 · 63-139 · 64-145)도 밑변 선택만 다른 한 유형이며, 특강의 $\frac12|x_1y_2-x_2y_1|$ 공식은 별도 유형이 아니라 이 유형의 지름길 도구로 기록하는 편이 낫다.
- **이 범위에 없는 통찰 유형**: I-SC · I-SYM · I-PD · I-CON 라벨이 0 이다. 카탈로그에서 이 단원의 ★5 슬롯을 만들려면 63-142·64-146·64-148 의 creative 변형(방심 판별 · 내접원 반지름의 두 갈래 · 사각형 넓이 이등분)처럼 전략 분기나 대칭을 새로 얹어야 한다.
