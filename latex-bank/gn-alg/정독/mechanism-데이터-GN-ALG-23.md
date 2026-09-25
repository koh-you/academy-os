---
name: mechanism-데이터-GN-ALG-23
description: 개념원리 대수 23 삼각형의 넓이(1/1 · 27문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정) · 전사본 latex-bank/gn-alg
  section: 23 삼각형의 넓이
  unit_code: GN-ALG-23
  part: "1/1"
  extract_range: "211~217쪽 · 211-488~217-510"
  total_problems: 27
  unit_total: 27
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(개념원리 익히기 ★1 · 필수 예제와 확인체크 유제 ★2 · 특강 ★2~3 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 insights 의 effective_depth 합. insight_type 은 insights 가 비면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/
---

# 개념원리 대수 · 23 삼각형의 넓이 (1/1) 정독 데이터 (v1.0)

211~217쪽 27문항 전수. 구역은 「개념원리 익히기」 4문 · 「필수·발전 예제」 12문(필수 예제 e11~e14 4문 + 확인체크 유제 8문) · 「특강」 1문(헤론의 공식) · 「연습문제 STEP 1」 4문 · 「연습문제 STEP 2」 4문 · 「연습문제 실력 UP」 2문이다. 개념원리 고등의 난이도 신호는 구역과 예제 태그이므로 익히기 ★1 · 필수 예제와 그 확인체크 ★2 · 특강 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 를 출발점으로 삼고, M_total 과 통찰 라벨로 ±1 만 조정했다. 기출 태그(수능·교육청)는 통찰이 있을 때만 +1 을 고려했다.

이 단원은 도구가 얇고 조합이 두껍다. (가) 두 변과 끼인각의 $S=\frac{1}{2}ab\sin C$, (나) 세 변에서 코사인법칙으로 $\cos$ → $\sin$ → 넓이(그리고 특강의 헤론 공식), (다) 평행사변형 $ab\sin\theta$ 와 사각형 $\frac{1}{2}d_1d_2\sin\theta$, (라) 넓이를 매개로 다른 값(높이·각의 이등분선·내분선·내접원 반지름·외접원 반지름)을 역산하는 층으로 쌓인다. 판정에서는 (라) 에서 **길이를 넓이 등식으로 옮기는 착안**만 I-RT 로, **숨은 기하 성질(등변사다리꼴의 대각선 상등·반원의 원주각·호의 비=중심각의 비)을 꺼내는 단계**만 I-EQV 로 셌다. 공식 대입·피타고라스 항등식으로 $\cos\to\sin$ 하기·사각형을 대각선으로 두 삼각형으로 나누기는 이 단원의 표준 절차라 통찰로 세지 않았다. 둔각에서 $\sin$ 이 양수인 것, $\sin$ 값 하나에 각이 둘 나오는 것, 코사인법칙 이차방정식의 음수 근 기각은 Mₜ(T-부호·T-범위) 로 흡수했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-ALG-211-488
  page: 211
  vendor_label: '개념원리 익히기'
  vendor_level: "-"
  vendor_tags: []
  category_type: '개념원리 익히기'
  summary: |
    ⑴~⑶ 두 변의 길이와 그 끼인각이 주어진 삼각형 ABC 의 넓이 $S$ 구하기. ⑶ 의 끼인각은 $150^\circ$ 둔각.
  category: '두 변과 끼인각 → 넓이 공식 대입'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '두 변과 끼인각이 주어진 삼각형의 넓이'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $S=\dfrac{1}{2}ab\sin C$ 에 대입하는 한 단계. ⑶ 의 $150^\circ$ 에서 $\sin$ 이 양수임을 아는 것만 T-부호.
    익히기 구역 출발 ★1 · 통찰 0 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: '두 변과 끼인각 → $S=\dfrac{1}{2}ab\sin C$ → 값'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $5\sqrt{3}$ ⑵ $\dfrac{9\sqrt{2}}{2}$ ⑶ $\dfrac{15}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/211-488.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 변의 길이와 끼인각을 바꿀 수 있다. 제약: 끼인각은 $\sin$ 이 특수각 값($30^\circ,45^\circ,60^\circ,120^\circ,135^\circ,150^\circ$)이어야 답이 근호 한 겹으로 정리되고, 세 소문항 중 하나는 둔각을 남겨 T-부호를 유지한다.'
    creative: '(1) 끼인각이 아닌 각을 주어 한 번 더 각을 옮기게 하기(★2) (2) 넓이를 주고 끼인각을 묻는 역방향(★2 · e11 골조) (3) 두 변 대신 한 변과 두 각을 주어 사인법칙을 먼저 쓰게 하기(★2 · I-RT d1).'
```

```yaml
- id: GN-ALG-211-489
  page: 211
  vendor_label: '개념원리 익히기'
  vendor_level: "-"
  vendor_tags: []
  category_type: '개념원리 익히기'
  summary: |
    세 변 $a=5$, $b=6$, $c=5$ 인 삼각형에서 ⑴ $\cos A$ ⑵ $\sin A$ ⑶ 넓이를 차례로 구하기.
  category: '코사인법칙 → 피타고라스 항등식 → 넓이 공식'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '세 변에서 코사인법칙으로 sin 을 만들어 삼각형의 넓이 구하기'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    세 변 → $\cos A$ → $\sin A$ → $S=\dfrac{1}{2}bc\sin A$ 의 세 단계가 소문항으로 이미 쪼개져 있어 학생이 골조를 설계할 필요가 없다.
    익히기 구역 출발 ★1 · 통찰 0 · M_total 5 → ★1 유지. 이 골조를 통째로 묻는 것이 213-e12 다.
  tier: star_1
  mechanism_primary: '세 변 → $\cos A$ → $\sin A=\sqrt{1-\cos^2 A}$ → $S=\dfrac{1}{2}bc\sin A$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{3}{5}$ ⑵ $\dfrac{4}{5}$ ⑶ $12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/211-489.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 변을 다른 삼각형으로 바꿀 수 있다. 제약: 삼각부등식을 만족하고 $\cos A$ 가 유리수, $\sin A$ 가 근호 한 겹 이내로 떨어지는 세 쌍(피타고라스 수 계열 5·6·5, 13·14·15, 5·7·8 등)을 고른다.'
    creative: '(1) $\cos A$ 를 음수로 만들어 둔각삼각형으로(★1 유지 · T-부호 추가) (2) 소문항 분해를 없애고 넓이만 묻기(★2 · 213-e12) (3) 넓이를 주고 한 변을 묻는 역방향(★2 · I-BW d1).'
```

```yaml
- id: GN-ALG-211-490
  page: 211
  vendor_label: '개념원리 익히기'
  vendor_level: "-"
  vendor_tags: []
  category_type: '개념원리 익히기'
  summary: |
    ⑴⑵ 이웃한 두 변의 길이와 한 내각이 주어진 평행사변형 ABCD 의 넓이 구하기. ⑵ 는 끼인각이 $C=120^\circ$.
  category: '평행사변형 → 두 변과 끼인각 → 넓이 공식'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '두 변과 끼인각이 주어진 평행사변형의 넓이'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $S=ab\sin\theta$ 한 줄. ⑵ 에서 주어진 각이 $A$ 가 아니라 $C$ 지만 평행사변형의 마주 보는 각이 같아 그대로 쓰면 된다.
    익히기 구역 출발 ★1 · 통찰 0 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: '이웃 두 변과 끼인각 → $S=ab\sin\theta$ → 값'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $2\sqrt{3}$ ⑵ $24\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/211-490.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 변과 각을 바꿀 수 있다. 제약: 각은 특수각으로 두고, 한 소문항은 이웃각($120^\circ,135^\circ$)으로 주어 보각 관계를 확인하게 한다.'
    creative: '(1) 마름모로 바꿔 두 변이 같게(★1) (2) 넓이를 주고 각을 묻기(★2 · 214-e13 골조) (3) 대각선 길이와 사잇각으로 바꾸기(★1 · 211-491 골조) (4) 평행사변형의 한 대각선 길이를 주고 넓이를 묻기(★3 · 217-508 골조 · I-EQV d2).'
```

```yaml
- id: GN-ALG-211-491
  page: 211
  vendor_label: '개념원리 익히기'
  vendor_level: "-"
  vendor_tags: []
  category_type: '개념원리 익히기'
  summary: |
    ⑴⑵ 두 대각선의 길이와 두 대각선이 이루는 각이 그림에 표시된 사각형 ABCD 의 넓이 $S$ 구하기(⑴ $4,6,60^\circ$ ⑵ $10,8,120^\circ$).
  category: '두 대각선과 사잇각 → 사각형 넓이 공식'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '두 대각선과 그 사잇각이 주어진 사각형의 넓이'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $S=\dfrac{1}{2}d_1d_2\sin\theta$ 대입 한 줄. 그림이 대각선과 각을 이미 지정해 주어 무엇을 대각선으로 볼지 고민할 여지가 없다.
    익히기 구역 출발 ★1 · 통찰 0 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: '두 대각선과 사잇각 → $S=\dfrac{1}{2}d_1d_2\sin\theta$ → 값'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $6\sqrt{3}$ ⑵ $20\sqrt{3}$'
  answer_source: "답지"
  figure: 'crop:fig-211-491.png'
  latex: latex-bank/gn-alg/items/211-491.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 대각선 길이와 사잇각을 바꿀 수 있다. 제약: 그림 라벨(대각선에 붙은 두 수와 각 표시 위치)이 고정이므로 수만 갈아 끼우고, 각은 특수각을 유지한다. 예각·둔각을 하나씩 남긴다.'
    creative: '(1) 넓이를 주고 사잇각이나 한 대각선을 묻기(★2 · 216-504 · 214-499 골조) (2) 등변사다리꼴로 두어 두 대각선이 같음을 쓰게 하기(★2 · 214-e14) (3) 대각선 대신 네 변과 한 대각선을 주어 두 삼각형으로 나누게 하기(★2 · 213-497).'
```

### 필수·발전 예제

```yaml
- id: GN-ALG-212-e11
  page: 212
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    ⑴ 두 변과 넓이가 주어졌을 때 예각인 끼인각 $C$ 구하기. ⑵ $b=4$, $A=135^\circ$, 넓이 $2$ 일 때 $a$ 의 값 구하기.
  category: '넓이 공식 역방향 → 각 또는 남은 변 → (⑵) 코사인법칙'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '삼각형의 넓이가 주어졌을 때 끼인각·변 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 $\dfrac{1}{2}ab\sin C=S$ 를 $\sin C$ 에 대해 풀고 예각 조건으로 각을 하나 고르는 것뿐이다.
    ⑵ 는 넓이로 $c$ 를 먼저 구한 뒤 코사인법칙으로 $a$ 를 구하는 두 도구 연결이라 단계가 하나 더 붙는다. 통찰 0 · M_total 6 → 필수 예제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: '$S=\dfrac{1}{2}ab\sin C$ 역방향 → $\sin C$ 또는 $c$ → (⑵) 코사인법칙으로 $a$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $60^\circ$ ⑵ $\sqrt{26}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/212-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 변과 넓이를 바꿀 수 있다. 제약: $\sin C=\dfrac{2S}{ab}$ 가 $1$ 이하이고 특수각 값이어야 하며, ⑵ 는 $a^2=b^2+c^2-2bc\cos A$ 가 근호 한 겹으로 떨어지도록 $b,c$ 를 고른다.'
    creative: '(1) 예각 조건을 빼서 두 각이 다 답이 되게 하기(★2 · 212-492) (2) 세 변 중 하나를 미지수로 두고 넓이를 최대로 만드는 각을 묻기(★3 · I-BW d2) (3) ⑵ 에서 $a$ 대신 외접원 반지름을 묻기(★3 · 사인법칙 연결).'
```

```yaml
- id: GN-ALG-212-492
  page: 212
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $b=4$, $c=7$ 이고 넓이가 $7$ 인 삼각형 ABC 에서 $A$ 의 크기 구하기.
  category: '넓이 공식 역방향 → $\sin A$ → 예각·둔각 두 해'
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '넓이가 주어진 삼각형에서 끼인각 구하기(예각·둔각 두 해)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $14\sin A=7$ → $\sin A=\dfrac{1}{2}$ 한 줄이지만, e11 과 달리 예각 제한이 없어 $0^\circ<A<180^\circ$ 에서 $30^\circ$ 와 $150^\circ$ 를 둘 다 써야 한다.
    T-범위 함정이 핵심이라 Mₜ=2. 통찰 0 · M_total 5 로 −1 후보이나, 해를 하나만 쓰면 바로 틀리는 문항이라 확인체크 출발 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: '$\dfrac{1}{2}bc\sin A=S$ → $\sin A=\dfrac{1}{2}$ → $A=30^\circ$ 또는 $150^\circ$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$30^\circ$ 또는 $150^\circ$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/212-492.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$b,c,S$ 를 바꿀 수 있다. 제약: $\sin A=\dfrac{2S}{bc}$ 가 $\dfrac{1}{2},\dfrac{\sqrt{2}}{2},\dfrac{\sqrt{3}}{2}$ 중 하나여야 두 해가 특수각으로 떨어진다. $\sin A=1$ 로 두면 해가 하나가 되어 함정이 사라진다.'
    creative: '(1) 예각·둔각 조건을 붙여 해를 하나로 좁히기(★2 · 214-e13·214-498) (2) 두 해 각각에 대해 남은 변 $a$ 까지 구하게 하기(★3 · I-MI d2) (3) 넓이의 최댓값을 묻기(★2 · $\sin A=1$).'
```

```yaml
- id: GN-ALG-212-493
  page: 212
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $a=8$, $b=6$, $\cos C=\dfrac{\sqrt{5}}{3}$ 일 때 삼각형 ABC 의 넓이 구하기.
  category: '피타고라스 항등식으로 $\cos\to\sin$ → 넓이 공식'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: 'cos 값이 주어진 삼각형의 넓이(sin 으로 변환)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\sin C=\sqrt{1-\cos^2 C}$ 로 옮긴 뒤 넓이 공식에 넣는 두 단계. 삼각형의 내각이라 $\sin C>0$ 으로 부호가 자동 결정된다.
    통찰 0 · M_total 5 로 −1 후보이나, 익히기 문항에는 없는 $\cos\to\sin$ 한 겹이 있어 확인체크 출발 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: '$\cos C$ → $\sin C=\sqrt{1-\cos^2C}$ → $S=\dfrac{1}{2}ab\sin C$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/212-493.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$a,b$ 와 $\cos C$ 를 바꿀 수 있다. 제약: $\cos C$ 는 $|\cos C|<1$ 이고 $1-\cos^2C$ 가 완전제곱이 되는 값($\dfrac{\sqrt5}{3},\dfrac{3}{5},\dfrac{1}{3}$ 계열)으로 두어야 넓이가 정리된다.'
    creative: '(1) $\cos C$ 를 음수로 주어 둔각삼각형으로(★2 · T-부호) (2) $\tan C$ 를 주어 $\sin$ 까지 두 단계로 늘리기(★3) (3) $\cos C$ 대신 $c$ 를 주어 코사인법칙을 먼저 쓰게 하기(★2 · 213-e12 골조).'
```

```yaml
- id: GN-ALG-212-494
  page: 212
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $\seg{AB}=3\sqrt{3}$, $\seg{AC}=2\sqrt{3}$, $A=60^\circ$ 인 삼각형에서 $\angle A$ 의 이등분선이 변 BC 와 만나는 점을 D 라 할 때 선분 AD 의 길이 구하기.
  category: '넓이 분할 등식 → AD 에 대한 일차방정식'
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구하려는 길이 AD 를 직접 재지 않고 삼각형 ABC = 삼각형 ABD + 삼각형 ACD 라는 넓이 등식으로 옮겨 미지수로 세우는 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '각의 이등분선의 길이(넓이 분할)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    이등분선이라 $\angle BAD=\angle CAD=30^\circ$ 이고, 세 넓이를 모두 $\dfrac{1}{2}\times$변$\times$변$\times\sin$ 으로 쓰면 $\seg{AD}$ 에 대한 일차방정식이 된다.
    길이를 넓이 등식으로 옮기는 착안이 없으면 진행이 막히므로 I-RT d2 로 셌다. 앞 필수 예제 e11(넓이 → 각·변)과 골조가 달라 확인체크 치고 한 겹 무겁다.
    통찰 1(d2) · M_total 7 → 확인체크 출발 ★2 에서 +1 → ★3. [분류 이슈] 벤더 확인체크 신호는 ★2 이며 ★2/★3 경계.
  tier: star_3
  mechanism_primary: '$\triangle ABC=\triangle ABD+\triangle ACD$ → $\seg{AD}$ 일차방정식 → $\dfrac{18}{5}$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{18}{5}$'
  answer_source: "답지"
  figure: 'crop:fig-212-494.png'
  latex: latex-bank/gn-alg/items/212-494.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 변의 길이와 꼭지각을 바꿀 수 있다. 제약: 꼭지각은 이등분했을 때도 특수각이어야 하므로 $60^\circ,90^\circ,120^\circ$ 계열로 두고, 두 변은 $\dfrac{2bc\cos(A/2)}{b+c}$ 가 유리수로 떨어지는 짝으로 고른다. 그림의 점 D 위치·라벨은 고정.'
    creative: '(1) AD 를 주고 한 변을 묻는 역방향(★3 · I-BW d2) (2) 이등분선 대신 BC 를 $m:n$ 으로 내분하는 점으로 바꾸기(★3 · 217-507 골조) (3) 이등분선의 길이 공식을 유도하게 하면 Mₐ 상승 ★4 (4) 삼각형을 넓이 비로 쪼개 BD:DC 를 묻기(★2).'
```

```yaml
- id: GN-ALG-213-e12
  page: 213
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    ⑴⑵ 세 변의 길이만 주어진 삼각형 ABC 의 넓이 구하기(⑴ $5,7,8$ ⑵ $10,12,8$).
  category: '코사인법칙 → $\sin$ → 넓이 공식'
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '세 변의 길이가 주어진 삼각형의 넓이(코사인법칙 → sin)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    한 각의 $\cos$ 을 코사인법칙으로 구하고 $\sin$ 으로 옮긴 뒤 그 각을 낀 두 변으로 넓이를 쓰는 세 단계. 211-489 를 소문항 분해 없이 묻는 형태다.
    어느 각을 고를지에 따라 계산량이 달라지지만 어느 쪽이든 풀리므로 전략 분기(I-SC)로 세지 않았다. 통찰 0 · M_total 7 → 필수 예제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: '세 변 → $\cos C$ → $\sin C$ → $S=\dfrac{1}{2}ab\sin C$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $10\sqrt{3}$ ⑵ $15\sqrt{7}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/213-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 변을 바꿀 수 있다. 제약: 삼각부등식을 만족하고 $\cos$ 이 유리수, $\sin$ 이 근호 한 겹이 되는 조합(5·7·8, 8·10·12, 4·5·7, 13·14·15)으로 고른다. 둔각이 나오는 조합을 하나 섞으면 T-부호가 살아난다.'
    creative: '(1) 헤론의 공식으로 풀게 유도하기(★2 · 215-500) (2) 세 변으로 외접원·내접원 반지름까지 묻기(★2~3 · 213-496) (3) 세 변의 비만 주고 넓이의 비를 묻기(★3 · Mₐ 상승) (4) 넓이를 주고 한 변을 묻는 역방향(★3 · I-BW d2).'
```

```yaml
- id: GN-ALG-213-495
  page: 213
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $a=13$, $b=14$, $c=15$ 인 삼각형 ABC 의 넓이 구하기.
  category: '코사인법칙 → $\sin$ → 넓이 공식'
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '세 변의 길이가 주어진 삼각형의 넓이(코사인법칙 → sin)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e12 와 같은 골조에 수만 큰 13·14·15 삼각형. 세 자리 제곱이 들어가 계산은 무겁지만 판단할 것은 없다.
    계산량만 늘리는 것은 변별 신호가 아니므로 Mₖ=2 로 두고 통찰 0 · M_total 7 → 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: '세 변 → $\cos$ → $\sin$ → $S=\dfrac{1}{2}ab\sin C$ → $84$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$84$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/213-495.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 변을 다른 헤론 삼각형(9·10·17, 11·13·20, 6·25·29)으로 바꿀 수 있다. 제약: 넓이가 정수로 떨어지는 조합이라야 이 문항의 성격이 유지된다.'
    creative: '(1) 헤론의 공식으로 풀기(★2) (2) 같은 삼각형에서 가장 긴 변에 내린 높이를 묻기(★3 · 216-501 골조) (3) 내접원 반지름을 묻기(★2 · 213-496) (4) 세 변이 등차수열을 이루는 일반 조건으로 바꾸기(★4 · Mₐ 3).'
```

```yaml
- id: GN-ALG-213-496
  page: 213
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $a=13$, $b=8$, $c=7$ 인 삼각형 ABC 의 외접원의 반지름 $R$ 와 내접원의 반지름 $r$ 구하기.
  category: '코사인법칙 → 넓이 → 사인법칙($R$) · $S=\dfrac{1}{2}r(a+b+c)$($r$)'
  M: {s: 3, k: 3, a: 1, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '삼각형의 넓이로 외접원·내접원의 반지름 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\cos A=-\dfrac{1}{2}$ 에서 $A=120^\circ$ 를 얻어 사인법칙으로 $R$ 을, 넓이를 구해 $S=\dfrac{1}{2}r(a+b+c)$ 로 $r$ 을 얻는 네 공식 연쇄다.
    공식이 모두 교과서에 제시돼 있어 고를 것이 없으므로 통찰 0. 대신 분모 유리화까지 포함해 Mₖ=3.
    통찰 0 · M_total 8 → 확인체크 출발 ★2 유지. [분류 이슈] 절차형이지만 M_total 8 로 이 구역에서 가장 무거워 ★2/★3 경계.
  tier: star_2
  mechanism_primary: '세 변 → $\cos A$ → $A=120^\circ$ → $R=\dfrac{a}{2\sin A}$ · $S=\dfrac{1}{2}bc\sin A=\dfrac{1}{2}r(a+b+c)$ → $r$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$R=\dfrac{13\sqrt{3}}{3}$, $r=\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/213-496.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 변을 바꿀 수 있다. 제약: $\cos$ 이 특수각 값이어야 $R$ 이 근호 한 겹으로 정리되고, 둘레가 넓이의 두 배를 나누어떨어지게 해야 $r$ 이 깔끔하다(13·8·7, 7·5·3, 13·14·15 계열).'
    creative: '(1) $R$ 과 $r$ 의 비를 묻기(★3) (2) 내접원의 넓이·외접원의 넓이를 묻기(★2) (3) $r$ 을 주고 세 번째 변을 묻는 역방향(★4 · I-BW d2) (4) $S=rs$ 공식을 세 삼각형 분할로 유도하게 하기(★3 · I-RT d2).'
```

```yaml
- id: GN-ALG-213-497
  page: 213
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $\seg{AB}=\sqrt{14}$, $\seg{BC}=8$, $\seg{CD}=4$, $\seg{BD}=4\sqrt{2}$, $\angle ABD=30^\circ$ 인 사각형 ABCD 의 넓이 구하기.
  category: '대각선 BD 로 분할 → 두 삼각형에 서로 다른 넓이 도구'
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '대각선으로 나눈 사각형의 넓이'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    삼각형 ABD 는 두 변과 끼인각 $30^\circ$ 로, 삼각형 BCD 는 세 변 $8,4,4\sqrt{2}$ 로 다뤄야 한다. 같은 사각형 안에서 두 도구를 나누어 쓰는 연습이다.
    사각형을 대각선으로 나누는 것은 이 단원의 표준 절차라 통찰로 세지 않았다. 통찰 0 · M_total 7 → 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: '$\square ABCD=\triangle ABD+\triangle BCD$ → 끼인각 공식 + 코사인법칙 → $6\sqrt{7}$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6\sqrt{7}$'
  answer_source: "답지"
  figure: 'crop:fig-213-497.png'
  latex: latex-bank/gn-alg/items/213-497.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '네 변과 대각선, 끼인각을 바꿀 수 있다. 제약: 삼각형 ABD 의 각은 특수각, 삼각형 BCD 의 세 변은 $\cos$ 이 유리수가 되는 조합이어야 하고, 두 넓이가 같은 근호를 공유해야 답이 한 항으로 합쳐진다. 그림의 꼭짓점 배치는 고정.'
    creative: '(1) 대각선 BD 를 빼고 네 변과 한 각만 주어 BD 를 먼저 구하게 하기(★3 · 단계 +1) (2) 두 삼각형의 넓이 비를 묻기(★3 · 216-505 골조) (3) 원에 내접하는 사각형으로 바꿔 마주 보는 각이 보각임을 쓰게 하기(★4 · I-EQV d2).'
```

```yaml
- id: GN-ALG-214-e13
  page: 214
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    $\seg{AB}=8$, $\seg{AD}=10$ 인 평행사변형 ABCD 의 넓이가 $40$ 일 때 $A$ 의 크기 구하기($0^\circ<A<90^\circ$).
  category: '평행사변형 넓이 공식 역방향 → $\sin A$ → 범위로 각 하나 선택'
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '평행사변형의 넓이가 주어졌을 때 끼인각 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $80\sin A=40$ → $\sin A=\dfrac{1}{2}$ → $A=30^\circ$ 또는 $150^\circ$ 이고 단서 $0^\circ<A<90^\circ$ 가 하나를 고른다.
    주어진 범위를 읽지 않으면 답이 둘이 되는 T-범위 함정이 본문이라 Mₜ=2. 통찰 0 · M_total 5 로 −1 후보이나 필수 예제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: '$ab\sin A=S$ → $\sin A=\dfrac{1}{2}$ → 범위로 $A=30^\circ$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$30^\circ$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/214-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 변과 넓이를 바꿀 수 있다. 제약: $\sin A=\dfrac{S}{ab}\le 1$ 이고 특수각 값이어야 하며, 각의 범위 단서는 예각·둔각 중 하나만 남기도록 붙인다.'
    creative: '(1) 범위를 둔각으로 바꾸기(★2 · 214-498) (2) 범위 단서를 빼서 두 답을 모두 쓰게 하기(★2 · 212-492) (3) 평행사변형 대신 마름모로 두고 대각선 길이를 묻기(★3) (4) 넓이의 최댓값과 그때의 각을 묻기(★2).'
```

```yaml
- id: GN-ALG-214-e14
  page: 214
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: '필수 예제'
  summary: |
    $\seg{AC}=6$ 이고 두 대각선 AC, BD 가 이루는 각이 $30^\circ$ 인 등변사다리꼴 ABCD 의 넓이 구하기.
  category: '등변사다리꼴 → 두 대각선 상등 → 사각형 넓이 공식'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "발문에 없는 성질 「등변사다리꼴의 두 대각선의 길이는 같다」를 꺼내 $\\seg{BD}=\\seg{AC}=6$ 으로 조건을 보충하는 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '두 대각선의 사잇각이 주어진 등변사다리꼴의 넓이'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    대각선이 하나만 주어져 있어 $S=\dfrac{1}{2}d_1d_2\sin\theta$ 를 바로 쓸 수 없다. 등변사다리꼴이면 두 대각선이 같다는 성질을 떠올려야 $d_2$ 가 채워진다.
    그 한 성질만 알면 나머지는 211-491 과 같은 한 줄이라 I-EQV d2 하나로 두고, 통찰 1(d2) · M_total 5 → 필수 예제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: '등변사다리꼴 → $\seg{BD}=\seg{AC}=6$ → $S=\dfrac{1}{2}\cdot 6\cdot 6\cdot\sin 30^\circ=9$'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$9$'
  answer_source: "본문 풀이"
  figure: 'crop:fig-214-e14.png'
  latex: latex-bank/gn-alg/items/214-e14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '대각선 길이와 사잇각을 바꿀 수 있다. 제약: 사잇각은 특수각, 대각선은 $\dfrac{1}{2}d^2\sin\theta$ 가 정수로 떨어지는 값으로 둔다. 그림의 대각선 교점과 각 표시 위치는 고정.'
    creative: '(1) 넓이를 주고 대각선을 묻는 역방향(★2 · 214-499) (2) 등변사다리꼴 대신 직사각형·정사각형으로 바꾸면 성질이 뻔해져 ★1 (3) 두 대각선 길이가 다른 일반 사다리꼴로 바꾸고 윗변·아랫변을 주면 단계가 늘어 ★3 (4) 두 대각선이 직교하는 조건을 추가해 넓이의 최대를 묻기(★3).'
```

```yaml
- id: GN-ALG-214-498
  page: 214
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    $\seg{AB}=6$, $\seg{BC}=7$ 인 평행사변형 ABCD 의 넓이가 $21\sqrt{3}$ 일 때 $A$ 의 크기 구하기($90^\circ<A<180^\circ$).
  category: '평행사변형 넓이 공식 역방향 → $\sin A$ → 범위로 둔각 선택'
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '평행사변형의 넓이가 주어졌을 때 끼인각 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $42\sin A=21\sqrt{3}$ → $\sin A=\dfrac{\sqrt{3}}{2}$ → 범위 $90^\circ<A<180^\circ$ 로 $120^\circ$ 를 고른다. e13 의 둔각 버전.
    통찰 0 · M_total 5 로 −1 후보이나 범위 단서를 놓치면 $60^\circ$ 로 틀리는 T-범위 함정이 있어 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: '$ab\sin A=S$ → $\sin A=\dfrac{\sqrt{3}}{2}$ → 범위로 $A=120^\circ$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$120^\circ$'
  answer_source: "답지"
  figure: 'crop:fig-214-498.png'
  latex: latex-bank/gn-alg/items/214-498.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 변과 넓이를 바꿀 수 있다. 제약: $\dfrac{S}{ab}$ 가 특수각의 $\sin$ 값이어야 하고, 둔각 답을 유지하려면 범위 단서를 둔각 쪽으로 고정한다. 그림 라벨은 고정.'
    creative: '(1) 범위 대신 「$\cos A<0$」 처럼 부호 조건으로 주기(★2 · I-EQV d1) (2) 각 대신 대각선 길이를 묻기(★3 · 코사인법칙 추가) (3) 평행사변형의 높이를 묻기(★2) (4) 한 변과 넓이·각을 주고 남은 변을 묻기(★2).'
```

```yaml
- id: GN-ALG-214-499
  page: 214
  vendor_label: '필수·발전 예제'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    두 대각선이 이루는 각이 $150^\circ$ 이고 넓이가 $8$ 인 등변사다리꼴에서 한 대각선의 길이 구하기(그림 없음).
  category: '등변사다리꼴 → 두 대각선 상등 → 넓이 공식 역방향(이차방정식)'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 대각선 길이를 모두 모르는 상태에서 등변사다리꼴의 대각선 상등을 꺼내 미지수를 하나로 줄이는 동치 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '등변사다리꼴의 넓이에서 대각선의 길이 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\dfrac{1}{2}d^2\sin 150^\circ=8$ → $\dfrac{1}{4}d^2=8$ → $d=4\sqrt{2}$. e14 의 역방향이고 그림이 없어 성질을 스스로 떠올려야 한다.
    통찰 1(d2) · M_total 5 → 확인체크 출발 ★2 유지. 길이는 양수만 취한다는 것만 T-범위로 흡수.
  tier: star_2
  mechanism_primary: '등변사다리꼴 → $d_1=d_2=d$ → $\dfrac{1}{2}d^2\sin 150^\circ=8$ → $d=4\sqrt{2}$'
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$4\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/214-499.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '사잇각과 넓이를 바꿀 수 있다. 제약: $d^2=\dfrac{2S}{\sin\theta}$ 가 완전제곱 또는 근호 한 겹으로 떨어지도록 $S$ 와 특수각을 짝지어 고른다.'
    creative: '(1) 대각선을 주고 사잇각을 묻기(★2 · 216-504 골조) (2) 마름모로 바꿔 두 대각선이 직교하게 하기(★1~2) (3) 등변사다리꼴의 윗변·아랫변을 추가로 묻기(★4 · 단계 +2) (4) 사잇각을 미지수로 두고 넓이의 최댓값을 묻기(★3).'
```

### 특강

```yaml
- id: GN-ALG-215-500
  page: 215
  vendor_label: '특강'
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: '확인체크'
  summary: |
    세 변의 길이가 $5$, $6$, $7$ 로 그림에 표시된 삼각형 ABC 의 넓이 구하기(특강 · 헤론의 공식).
  category: '세 변 → 헤론의 공식 대입'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '헤론의 공식으로 삼각형의 넓이 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $s=\dfrac{5+6+7}{2}=9$ 를 구해 $S=\sqrt{s(s-a)(s-b)(s-c)}$ 에 넣는 두 단계. 특강에서 방금 제시된 공식을 그대로 쓰는 확인체크다.
    코사인법칙 경로(213-e12)와 헤론 경로가 둘 다 되지만 특강 구역이 헤론을 지정하므로 전략 분기로 세지 않았다.
    특강 구역 출발 ★2 · 통찰 0 · M_total 6 → ★2 유지(교육과정 심화이지만 공식 대입 한 겹이라 ★3 으로 올리지 않음).
  tier: star_2
  mechanism_primary: '$s=9$ → $S=\sqrt{9\cdot4\cdot3\cdot2}=6\sqrt{6}$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6\sqrt{6}$'
  answer_source: "답지"
  figure: 'crop:fig-215-500.png'
  latex: latex-bank/gn-alg/items/215-500.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 변을 바꿀 수 있다. 제약: 둘레가 짝수라야 $s$ 가 정수로 떨어지고, $s(s-a)(s-b)(s-c)$ 가 근호 한 겹으로 정리되는 조합(5·6·7, 4·5·7, 13·14·15, 9·10·17)을 고른다. 그림의 변 라벨 위치는 고정.'
    creative: '(1) 넓이를 주고 한 변을 묻는 역방향(★4 · 사차식 · I-BW d2) (2) 세 변이 연속한 자연수라는 조건으로 바꾸기(★3 · Mₐ 2) (3) 헤론으로 구한 넓이로 내접원 반지름까지 잇기(★3 · 213-496 골조) (4) 코사인법칙 경로와 헤론 경로를 모두 요구해 값이 같음을 보이게 하기(★3 · I-SC d1).'
```

### 연습문제 STEP 1

```yaml
- id: GN-ALG-216-501
  page: 216
  vendor_label: '연습문제 STEP 1'
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    $\seg{AB}=8$, $\seg{AC}=6$, $A=60^\circ$ 인 삼각형에서 A 에서 변 BC 에 내린 수선의 발을 H 라 할 때 선분 AH 의 길이 구하기.
  category: '넓이 두 표현의 상등 → 높이 = $\dfrac{2S}{a}$'
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '수선의 길이 AH 를 직각삼각형에서 따로 구하지 않고 같은 넓이를 밑변 BC 와 높이 AH 로 다시 쓰는 등식으로 옮기는 전환'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '삼각형의 넓이를 이용한 수선의 길이(높이)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $S=\dfrac{1}{2}\cdot 8\cdot 6\sin 60^\circ$ 로 넓이를, 코사인법칙으로 $\seg{BC}$ 를 구한 뒤 $S=\dfrac{1}{2}\seg{BC}\cdot\seg{AH}$ 로 되돌리는 세 단계다.
    같은 넓이를 두 방식으로 쓰는 착안이 골조의 전부이므로 I-RT d2. 유리화까지 필요해 Mₖ=2.
    통찰 1(d2) · M_total 7 → STEP 1 출발 ★2 에서 +1 → ★3. [분류 이슈] 벤더 STEP 1 신호는 ★2 이며 ★2/★3 경계.
  tier: star_3
  mechanism_primary: '$S=\dfrac{1}{2}bc\sin A$ · 코사인법칙으로 $a$ → $\seg{AH}=\dfrac{2S}{a}$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{12\sqrt{39}}{13}$'
  answer_source: "답지"
  figure: 'crop:fig-216-501.png'
  latex: latex-bank/gn-alg/items/216-501.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 변과 끼인각을 바꿀 수 있다. 제약: 끼인각은 특수각, 두 변은 코사인법칙으로 얻는 $a^2$ 이 근호 한 겹이 되도록 고른다. 그림의 점 H 위치와 수선 표시는 고정.'
    creative: '(1) 수선의 발 H 가 변 BC 의 연장선 위에 오도록 둔각삼각형으로 바꾸기(★4 · T-범위) (2) AH 대신 BH:HC 를 묻기(★3) (3) 세 변을 주고 가장 긴 변에 내린 높이를 묻기(★3 · 213-495 연결) (4) 높이를 주고 끼인각을 묻는 역방향(★4 · I-BW d2).'
```

```yaml
- id: GN-ALG-216-502
  page: 216
  vendor_label: '연습문제 STEP 1'
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: '연습문제'
  summary: |
    $\seg{AB}=2$, $\seg{AC}=\sqrt{7}$ 인 예각삼각형의 넓이가 $\sqrt{6}$ 이고 $\angle A=\theta$ 일 때 $\sin\left(\dfrac{\pi}{2}+\theta\right)$ 의 값. 5지선다.
  category: '넓이 공식 역방향 → $\sin\theta$ → 각변환 → $\cos\theta$'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '삼각형의 넓이로 sin 을 구하고 각변환으로 cos 값 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    넓이에서 $\sin\theta=\dfrac{\sqrt{6}}{\sqrt{7}}$ 을 얻고, $\sin\left(\dfrac{\pi}{2}+\theta\right)=\cos\theta$ 로 바꾼 뒤 피타고라스 항등식으로 값을 낸다.
    각변환 공식은 앞 단원의 표준 공식이라 통찰로 세지 않았고, 예각삼각형 단서로 $\cos\theta>0$ 을 고르는 것이 T-부호·T-범위라 Mₜ=2.
    통찰 0 · M_total 6 → STEP 1 출발 ★2 유지. 교육청 기출 태그는 통찰이 없어 +0.
  tier: star_2
  mechanism_primary: '$\dfrac{1}{2}bc\sin\theta=S$ → $\sin\theta$ → $\sin\left(\dfrac{\pi}{2}+\theta\right)=\cos\theta$ → 예각이므로 양의 근'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/216-502.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 변과 넓이를 바꿀 수 있다. 제약: $\sin\theta=\dfrac{2S}{bc}\le 1$ 이고 $1-\sin^2\theta$ 가 근호 한 겹으로 떨어져야 선택지가 정리된다.'
    creative: '(1) 묻는 값을 $\cos(\pi-\theta)$ 나 $\tan\theta$ 로 바꾸기(★2) (2) 예각 조건을 빼서 두 값을 모두 쓰게 하기(★3 · I-MI d2) (3) 남은 변 $\seg{BC}$ 까지 묻기(★3 · 코사인법칙 추가) (4) 외접원의 반지름을 묻기(★3 · 사인법칙 연결).'
```

```yaml
- id: GN-ALG-216-503
  page: 216
  vendor_label: '연습문제 STEP 1'
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    $a=4$, $b=5$, $c=7$ 인 삼각형 ABC 의 넓이 구하기.
  category: '코사인법칙 → $\sin$ → 넓이 공식'
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '세 변의 길이가 주어진 삼각형의 넓이(코사인법칙 → sin)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    213-e12 와 같은 골조. 가장 긴 변 $c=7$ 의 대각에서 $\cos C$ 가 음수로 나오므로 둔각임을 알아도 $\sin C>0$ 으로 진행한다는 T-부호만 챙기면 된다.
    통찰 0 · M_total 7 → STEP 1 출발 ★2 유지. 특강 헤론 공식으로도 같은 답이 나오는 문항이다.
  tier: star_2
  mechanism_primary: '세 변 → $\cos C=-\dfrac{1}{5}$ → $\sin C$ → $S=\dfrac{1}{2}ab\sin C=4\sqrt{6}$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4\sqrt{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/216-503.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 변을 바꿀 수 있다. 제약: 삼각부등식을 만족하고 $\cos$ 이 유리수, $\sin$ 이 근호 한 겹이 되는 조합을 고른다. 둔각이 나오는 조합을 유지하면 T-부호가 남는다.'
    creative: '(1) 헤론의 공식으로 풀게 하기(★2 · 215-500) (2) 세 변의 비만 주고 넓이의 비를 묻기(★3) (3) 이 삼각형의 내접원 반지름을 묻기(★2 · 213-496) (4) 한 변을 미지수로 두고 넓이가 주어졌을 때 그 변을 묻기(★4 · I-BW d2).'
```

```yaml
- id: GN-ALG-216-504
  page: 216
  vendor_label: '연습문제 STEP 1'
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    두 대각선의 길이가 $3$, $2\sqrt{3}$ 이고 사잇각이 $\theta$ 인 사각형 ABCD 의 넓이가 $3$ 일 때 $\tan^2\theta$ 의 값 구하기.
  category: '사각형 넓이 공식 역방향 → $\sin\theta$ → $\tan^2\theta$ 로 변환'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '사각형의 넓이가 주어졌을 때 두 대각선의 사잇각 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\dfrac{1}{2}\cdot 3\cdot 2\sqrt{3}\sin\theta=3$ → $\sin^2\theta=\dfrac{1}{3}$ → $\tan^2\theta=\dfrac{\sin^2\theta}{1-\sin^2\theta}$ 로 옮기면 끝난다.
    묻는 값이 $\tan\theta$ 가 아니라 $\tan^2\theta$ 라 $\theta$ 가 예각인지 둔각인지 따질 필요가 없게 설계돼 있어 T-부호가 닫힌다.
    통찰 0 · M_total 5 로 −1 후보이나 제곱 형태로 옮기는 한 겹이 있어 STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: '$\dfrac{1}{2}d_1d_2\sin\theta=S$ → $\sin^2\theta=\dfrac{1}{3}$ → $\tan^2\theta=\dfrac{1}{2}$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: 'crop:fig-216-504.png'
  latex: latex-bank/gn-alg/items/216-504.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 대각선과 넓이를 바꿀 수 있다. 제약: $\sin\theta=\dfrac{2S}{d_1d_2}\le 1$ 이고 $\sin^2\theta$ 가 유리수라야 $\tan^2\theta$ 가 떨어진다. 그림의 대각선 라벨과 $\theta$ 표시 위치는 고정.'
    creative: '(1) $\tan^2\theta$ 대신 $\theta$ 를 물으면 예각·둔각 두 해가 살아나 ★2~3 · I-MI d1 (2) 사잇각을 주고 한 대각선을 묻기(★2 · 214-499) (3) 등변사다리꼴 조건을 붙여 두 대각선이 같게 하기(★2 · 214-e14) (4) $\cos 2\theta$ 를 묻기(★3 · 배각 공식 연결).'
```

### 연습문제 STEP 2

```yaml
- id: GN-ALG-216-505
  page: 216
  vendor_label: '연습문제 STEP 2'
  vendor_level: "STEP 2"
  vendor_tags: ["수능 기출"]
  category_type: '연습문제'
  summary: |
    $\seg{AB}=3$, $\seg{BC}=\sqrt{13}$, $\seg{AD}\times\seg{CD}=9$, $\angle BAC=\dfrac{\pi}{3}$ 인 사각형 ABCD 에서 두 삼각형의 넓이가 $S_2=\dfrac{5}{6}S_1$ 일 때 $\dfrac{R}{\sin(\angle ADC)}$ 의 값($R$ 은 삼각형 ACD 의 외접원의 반지름). 5지선다.
  category: '코사인법칙 이차방정식으로 $\seg{AC}$ → 넓이 비로 $\sin(\angle ADC)$ → 사인법칙'
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '코사인법칙을 $\seg{AC}$ 에 대한 이차방정식으로 읽어 미지의 변을 먼저 확정하고 음수 근을 버리는 동치 변환'
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$\seg{AD}$ 와 $\seg{CD}$ 를 각각 구할 수 없는데도 곱 $\seg{AD}\times\seg{CD}=9$ 를 넓이 공식에 통째로 넣어 넓이 비 조건과 하나의 식으로 결합'
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: '사각형에서 두 삼각형의 넓이 비와 외접원의 반지름'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $\seg{BC}^2=\seg{AB}^2+\seg{AC}^2-2\seg{AB}\cdot\seg{AC}\cos\dfrac{\pi}{3}$ 이 $\seg{AC}$ 의 이차방정식이 되고, 그 값으로 $S_1$ 을 구해 넓이 비에서 $\sin(\angle ADC)$ 를 얻은 뒤 사인법칙 $\dfrac{\seg{AC}}{\sin(\angle ADC)}=2R$ 로 마무리한다.
    두 변의 곱만 주어진 것을 그대로 쓰는 조건 통합이 이 문항의 핵심이다. 통찰 2 · M_total 10 → STEP 2 출발 ★3 에서 +1 → ★4.
    [분류 이슈] ★4 인데 저노출 통찰(SC/VF/SYM/XU/RT/PD/BW)이 없어 v3.8 §2.13 기준으로는 YELLOW. 라벨은 그대로 두고 기록만 한다.
  tier: star_4
  mechanism_primary: '코사인법칙 → $\seg{AC}=4$ → $S_1$ → $S_2=\dfrac{5}{6}S_1$ 로 $\sin(\angle ADC)$ → $\dfrac{R}{\sin(\angle ADC)}$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "①"
  answer_source: "답지"
  figure: 'crop:fig-216-505.png'
  latex: latex-bank/gn-alg/items/216-505.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$\seg{AB}$, $\seg{BC}$, 곱 $\seg{AD}\times\seg{CD}$, 넓이 비를 바꿀 수 있다. 제약: 코사인법칙 이차방정식이 정수 양근 하나를 갖도록 세 수를 맞추고, 넓이 비를 곱한 $\sin(\angle ADC)$ 가 $1$ 이하여야 한다. 그림의 꼭짓점 순서와 각 표시는 고정.'
    creative: '(1) 묻는 값을 $R$ 자체로 바꾸면 $\sin$ 이 한 번 더 남아 ★4 유지 (2) 넓이 비 대신 $S_2$ 의 값을 직접 주기(★3) (3) 사각형 ABCD 가 원에 내접한다는 조건으로 바꾸면 마주 보는 각의 보각 관계가 추가돼 ★5 후보 · I-EQV d3 (4) $\seg{AD}+\seg{CD}$ 를 함께 주어 두 변을 각각 구하게 하면 ★4 · I-XU d2(이차방정식 연결).'
```

```yaml
- id: GN-ALG-217-506
  page: 217
  vendor_label: '연습문제 STEP 2'
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    반지름이 $20$ 인 원 위의 세 점 A, B, C 에 대하여 세 호의 길이의 비가 $3:4:5$ 일 때 삼각형 ABC 의 넓이 구하기.
  category: '호의 비 → 중심각 → 중심에서 세 삼각형으로 분할해 넓이 합'
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '길이로 주어진 호의 비를 중심각의 비로 옮겨 $90^\circ$, $120^\circ$, $150^\circ$ 라는 각 정보로 바꾸는 표현 전환'
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '삼각형 ABC 를 세 변의 길이를 구하지 않고 중심 O 를 꼭짓점으로 하는 세 이등변삼각형의 넓이 합으로 다시 쓰는 동치 변환'
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: '원에 내접하는 삼각형에서 호의 비로 중심각을 정해 넓이 구하기'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    호의 비 $3:4:5$ → 중심각 $90^\circ$, $120^\circ$, $150^\circ$ 로 옮기고, $S=\dfrac{1}{2}R^2(\sin 90^\circ+\sin 120^\circ+\sin 150^\circ)$ 로 합한다.
    세 변을 먼저 구하는 경로도 되지만 중심 분할이 압도적으로 짧다. 두 착안이 모두 없으면 진입 자체가 막힌다.
    통찰 2(d2 두 개) · M_total 7 → STEP 2 출발 ★3 에서 +1 → ★4. 저노출 통찰 I-RT 포함이라 §2.13 경고 없음.
  tier: star_4
  mechanism_primary: '호의 비 → 중심각 $90^\circ,120^\circ,150^\circ$ → $S=\dfrac{1}{2}R^2\sum\sin$ → $100(3+\sqrt{3})$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$100(3+\sqrt{3})$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/217-506.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '반지름과 호의 비를 바꿀 수 있다. 제약: 비의 합이 $360^\circ$ 를 특수각으로 쪼개야 하므로 $3:4:5$(12등분), $1:1:1$, $1:2:3$(6등분), $2:3:4$(9등분은 불가) 처럼 합이 $12$ 나 $6$ 의 약수 구조인 비만 쓴다.'
    creative: '(1) 원주각으로 삼각형의 내각을 먼저 구하고 사인법칙으로 세 변을 낸 뒤 넓이를 구하게 하기(★4 · 경로 지정) (2) 비를 $1:1:1$ 로 두면 정삼각형이 되어 ★2 (3) 넓이를 주고 반지름을 묻는 역방향(★4 · I-BW d2) (4) 네 점으로 늘려 내접사각형의 넓이를 묻기(★5 후보 · I-EQV d3).'
```

```yaml
- id: GN-ALG-217-507
  page: 217
  vendor_label: '연습문제 STEP 2'
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    $\angle BAC=120^\circ$, $\seg{AB}=15$, $\seg{AC}=20$ 인 삼각형에서 변 BC 를 $3:4$ 로 내분하는 점 D 에 대하여 선분 AD 의 길이 구하기(도로·도서관 활용 문항).
  category: '넓이 분할 비 = 밑변의 비 → AD 에 대한 일차방정식'
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '구하려는 AD 를 직접 재지 않고 삼각형 ABC 를 AD 로 나눈 두 삼각형의 넓이 합·비 등식으로 옮겨 일차방정식으로 세우는 전환'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '내분점까지의 선분 길이(넓이 분할)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $\seg{BD}:\seg{DC}=3:4$ 이므로 두 삼각형의 넓이 비도 $3:4$ 이고, 여기서 $\seg{AB}:\seg{AC}=15:20=3:4$ 와 맞아 AD 가 $\angle A$ 의 이등분선이 되어 $\angle BAD=\angle CAD=60^\circ$ 로 쓸 수 있다.
    넓이 분할 등식 하나면 끝나고 내분비 관찰은 부수적이라 I-RT d2 한 개만 셌다. 212-494 를 활용 문맥으로 옮긴 형태다.
    통찰 1(d2) · M_total 7 → STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: '$\triangle ABD=\dfrac{3}{7}\triangle ABC$ → $\dfrac{1}{2}\seg{AB}\cdot\seg{AD}\sin 60^\circ$ 등식 → $\seg{AD}=\dfrac{60}{7}$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{60}{7}\,\mathrm{km}$'
  answer_source: "답지"
  figure: 'crop:fig-217-507.png'
  latex: latex-bank/gn-alg/items/217-507.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 변, 꼭지각, 내분비를 바꿀 수 있다. 제약: 내분비를 두 변의 비와 같게 두면 각이 이등분되어 특수각이 유지되고, 꼭지각은 반각도 특수각인 $60^\circ,90^\circ,120^\circ$ 로 둔다. 단위 km 와 그림의 도시 라벨은 고정.'
    creative: '(1) 내분비를 두 변의 비와 다르게 주면 각이 이등분되지 않아 코사인법칙으로 BC 를 먼저 구해야 하므로 ★4 (2) AD 를 주고 내분비를 묻는 역방향(★4 · I-BW d2) (3) D 를 중점으로 두고 중선 길이 공식을 유도하게 하기(★4) (4) 도서관을 BC 위 어디에 두면 AD 가 최소인지 묻기(★4 · 최솟값 · I-XU d2).'
```

```yaml
- id: GN-ALG-217-508
  page: 217
  vendor_label: '연습문제 STEP 2'
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    $\seg{BC}=\sqrt{3}$, $\seg{AC}=\sqrt{7}$, $B=30^\circ$ 인 평행사변형 ABCD 의 넓이 구하기(AC 는 대각선).
  category: '삼각형 ABC 에 코사인법칙 → $\seg{AB}$ 이차방정식 → 평행사변형 넓이 공식'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '주어진 것이 변이 아니라 대각선이므로 코사인법칙을 미지의 변 $\seg{AB}$ 에 대한 이차방정식으로 읽고 양수 근만 취하는 동치 변환'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '한 대각선의 길이가 주어진 평행사변형의 넓이'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $\seg{AC}^2=\seg{AB}^2+\seg{BC}^2-2\seg{AB}\cdot\seg{BC}\cos 30^\circ$ 가 $\seg{AB}$ 의 이차방정식이 되고, 음수 근을 버려 변의 길이를 확정한 뒤 $S=\seg{AB}\cdot\seg{BC}\sin 30^\circ$ 로 넘어간다.
    211-490 과 달리 두 변이 아니라 대각선이 주어진 것이 한 겹이고, 길이의 양수 조건이 T-범위라 Mₜ=2.
    통찰 1(d2) · M_total 7 → STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: '코사인법칙 → $\seg{AB}$ 이차방정식 → 양근 $4$ → $S=\seg{AB}\cdot\seg{BC}\sin 30^\circ=2\sqrt{3}$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2\sqrt{3}$'
  answer_source: "답지"
  figure: 'crop:fig-217-508.png'
  latex: latex-bank/gn-alg/items/217-508.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '한 변, 대각선, 끼인각을 바꿀 수 있다. 제약: 이차방정식 $x^2-2\cdot\seg{BC}\cos B\,x+(\seg{BC}^2-\seg{AC}^2)=0$ 이 양근 하나를 갖도록 상수항을 음수로 유지하고, 각은 특수각으로 둔다. 그림의 평행사변형 라벨은 고정.'
    creative: '(1) 두 근이 모두 양수가 되게 만들어 두 답을 따지게 하기(★4 · I-VF d2) (2) 다른 대각선 BD 의 길이를 묻기(★3) (3) 평행사변형 대신 마름모로 두고 대각선 두 개를 묻기(★3) (4) 넓이를 주고 대각선을 묻는 역방향(★4 · I-BW d2).'
```

### 연습문제 실력 UP

```yaml
- id: GN-ALG-217-509
  page: 217
  vendor_label: '연습문제 실력 UP'
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    $A=60^\circ$, $\seg{AB}=4$, $\seg{AC}=6$ 인 삼각형의 두 변 AB, AC 위에 삼각형 APQ 의 넓이가 삼각형 ABC 의 넓이의 $\dfrac{1}{2}$ 이 되도록 P, Q 를 잡을 때 선분 PQ 의 길이의 최솟값 구하기.
  category: '넓이 조건 → 곱 $xy$ 일정 → 코사인법칙 + 산술·기하평균'
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '넓이가 절반이라는 조건을 $\seg{AP}\cdot\seg{AQ}=\dfrac{1}{2}\seg{AB}\cdot\seg{AC}=12$ 라는 두 미지수의 곱 일정 조건으로 옮기는 동치 변환'
    - step: 3
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$\seg{PQ}^2=x^2+y^2-xy$ 를 $xy$ 가 일정할 때의 최솟값 문제로 보고 산술평균·기하평균 관계와 등호 성립 조건($x=y$)을 끌어오는 단원 결합'
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: '넓이 조건에서 선분 길이의 최솟값(코사인법칙 + 산술·기하평균)'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $\seg{AP}=x$, $\seg{AQ}=y$ 로 두면 넓이 조건이 $xy=12$ 로 고정되고, $\seg{PQ}^2=x^2+y^2-xy\ge 2xy-xy=xy$ 에서 $x=y$ 일 때 최소가 된다.
    두 미지수를 곱 일정으로 묶는 착안과 최솟값 도구를 밖에서 가져오는 두 단계가 모두 필요하다. $x,y$ 가 변에 놓일 범위 안인지 확인하는 것이 T-범위.
    통찰 2(d2 두 개) · M_total 10 → 실력 UP 출발 ★4 유지. ★5 는 §2.14 참신도 조건(novelty_score 0)을 못 채워 올리지 않았다.
  tier: star_4
  mechanism_primary: '넓이 절반 → $xy=12$ → $\seg{PQ}^2=x^2+y^2-xy\ge xy$ → 최솟값 $2\sqrt{3}$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$2\sqrt{3}$'
  answer_source: "답지"
  figure: 'crop:fig-217-509.png'
  latex: latex-bank/gn-alg/items/217-509.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 변의 길이, 꼭지각, 넓이 비를 바꿀 수 있다. 제약: 꼭지각이 $60^\circ$ 라서 $\seg{PQ}^2=x^2+y^2-xy$ 로 깔끔해지므로 각을 바꾸면 계수가 달라진다. $xy$ 값은 $\sqrt{xy}$ 가 근호 한 겹이 되도록 고르고, 최소가 되는 $x=y=\sqrt{xy}$ 가 두 변의 길이를 넘지 않아야 한다. 그림의 P, Q 위치 라벨은 고정.'
    creative: '(1) 꼭지각을 $120^\circ$ 로 바꾸면 $\seg{PQ}^2=x^2+y^2+xy$ 가 되어 최솟값 식이 달라짐(★4 유지) (2) 넓이 비를 $\dfrac{1}{3}$ 처럼 바꾸기(★4) (3) PQ 의 최솟값 대신 그때의 $\seg{AP}$ 를 묻기(★4) (4) 산술·기하평균 대신 이차함수 최소로 풀도록 $y$ 를 소거시키면 ★4 · I-XU 대신 I-RT (5) 삼각형 APQ 의 둘레의 최솟값으로 바꾸면 ★5 후보.'
```

```yaml
- id: GN-ALG-217-510
  page: 217
  vendor_label: '연습문제 실력 UP'
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    선분 AC 를 지름으로 하는 원에 내접하는 사각형 ABCD 에서 $\seg{AD}=8$, $\seg{CD}=4$, $\angle BAC=45^\circ$ 일 때 선분 BD 의 길이 구하기.
  category: '반원의 원주각 → 직각·원주각 이동 → 코사인법칙 이차방정식 → 근 선택'
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: 'AC 가 지름이라는 조건을 $\angle ADC=\angle ABC=90^\circ$ 라는 각 조건으로 바꿔 $\seg{AC}$ 와 $\seg{AB}$ 를 확정하는 동치 변환'
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '구할 수 없는 각 $\angle ADB$ 를 같은 호 AB 에 대한 원주각 $\angle ACB=45^\circ$ 로 옮겨 삼각형 ABD 에서 코사인법칙을 쓸 수 있게 만드는 전환'
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '코사인법칙에서 나온 $\seg{BD}$ 의 이차방정식이 두 양근을 주므로 그림의 점 B 위치(사각형이 되는 배치)로 한쪽을 기각해야 답이 하나로 정해짐'
  insight_count: 3
  depth_score: 6.00
  type_id: null
  type_hint: '원에 내접하는 사각형에서 원주각과 코사인법칙으로 대각선 구하기'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    지름 AC 에서 $\angle ADC=90^\circ$ 로 $\seg{AC}=4\sqrt{5}$ 를 얻고, $\angle ABC=90^\circ$ 와 $\angle BAC=45^\circ$ 로 삼각형 ABC 가 직각이등변임을 써서 $\seg{AB}$ 를 구한다. 그다음 $\angle ADB=\angle ACB=45^\circ$ 로 옮겨 삼각형 ABD 에 코사인법칙을 적용한다.
    원 성질 두 번과 이차방정식 두 근 중 하나 기각까지 세 겹이라 이 범위에서 가장 두껍다. 통찰 3(EQV·RT·VF) · M_total 10 → 실력 UP 출발 ★4 유지.
    ★5 는 §2.14 참신도(novelty_score 0)를 못 채워 올리지 않았다. [분류 이슈] 통찰 3 + I-VF 보유로 ★5 후보이나 참신도 게이트로 ★4 유지.
  tier: star_4
  mechanism_primary: '지름 → $\angle ADC=\angle ABC=90^\circ$ → $\seg{AC}$, $\seg{AB}$ → $\angle ADB=\angle ACB=45^\circ$ → 코사인법칙 → 두 근 중 $6\sqrt{2}$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$6\sqrt{2}$'
  answer_source: "답지"
  figure: 'crop:fig-217-510.png'
  latex: latex-bank/gn-alg/items/217-510.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$\seg{AD}$, $\seg{CD}$ 와 $\angle BAC$ 를 바꿀 수 있다. 제약: $\seg{AD}^2+\seg{CD}^2$ 가 근호 한 겹으로 떨어져야 $\seg{AC}$ 가 정리되고, $\angle BAC$ 는 특수각으로 두어야 코사인법칙 계수가 유리수로 남는다. AC 가 지름이라는 배치와 그림의 중심 O 표시는 고정.'
    creative: '(1) BD 대신 사각형 ABCD 의 넓이를 묻기(★4 · 213-497 골조 결합) (2) $\angle BAC$ 를 미지수로 두고 넓이의 최댓값을 묻기(★5 후보 · I-XU d2) (3) AC 를 지름이 아닌 일반 현으로 바꾸면 직각이 사라져 마주 보는 각의 보각 관계로 풀어야 하므로 ★5 후보 (4) 점 B 의 위치 조건을 빼면 두 근이 모두 답이 되어 I-VF 가 I-MI 로 바뀜(★4).'
```

## 표본 판정 요약 (27문)

- ★ 분포: ★1 4 · ★2 15 · ★3 4 · ★4 4 · ★5 0
- 통찰형 10 · 절차형 17 · premium 0
- 통찰 유형 분포: I-EQV 7 · I-RT 5 · I-CON 1 · I-XU 1 · I-VF 1 (총 15개 라벨 · depth 는 모두 2)
- type_hint 상위: 「넓이 공식 역방향으로 각·변 구하기」 5(212-e11 · 212-492 · 214-e13 · 214-498 · 216-504) · 「세 변의 길이가 주어진 삼각형의 넓이」 4(213-e12 · 213-495 · 216-503 · 215-500 헤론) · 「두 변과 끼인각의 넓이」 3(211-488 · 211-490 · 211-491) · 「넓이 분할로 길이 구하기」 3(212-494 · 216-501 · 217-507) · 「등변사다리꼴 대각선」 2(214-e14 · 214-499)
- 그림: 13문(211-491 · 212-494 · 213-497 · 214-e14 · 214-498 · 215-500 · 216-501 · 216-504 · 216-505 · 217-507 · 217-508 · 217-509 · 217-510). 이 중 크롭을 실제로 연 것은 4장(fig-211-491 · fig-215-500 · fig-216-504 · fig-217-509)이고, 나머지는 발문에 구조가 다 적혀 있어 열지 않았다.
- 구역별 ★ 중앙값: 익히기 ★1 · 필수·발전 예제 ★2 · 특강 ★2 · STEP 1 ★2 · STEP 2 ★3.5 · 실력 UP ★4

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-ALG-212-494 | 벤더는 확인체크(★2 층)이나 앞 필수 예제 e11 과 골조가 다르고 넓이 분할 착안(I-RT d2)·M_total 7 이라 +1 적용. 확인체크를 일괄 ★2 로 볼지 골조 기준으로 나눌지 카탈로그 설계 때 결정 | ★2 / ★3 |
| GN-ALG-213-496 | 절차형인데 공식 4개 연쇄로 M_total 8 — 이 구역에서 가장 무겁다. 통찰이 없어 +1 규칙이 걸리지 않아 ★2 유지 | ★2 / ★3 |
| GN-ALG-216-501 | 벤더 STEP 1(★2 층)이나 넓이 등식 전환(I-RT d2) + 코사인법칙 + 유리화로 M_total 7 → +1 적용. 212-494 와 같은 처리 | ★2 / ★3 |
| GN-ALG-216-505 | ★4 인데 저노출 통찰(SC/VF/SYM/XU/RT/PD/BW)이 없어 v3.8 §2.13 기준 YELLOW. 수능 기출·M_total 10 이라 ★ 는 낮추지 않고 기록만 함 | ★4 (YELLOW) |
| GN-ALG-217-510 | 통찰 3개 + I-VF 보유로 §2.13 ★5 자격은 충족하나 §2.14 참신도(novelty_score 0)를 못 채워 ★4 유지 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 「두 변과 끼인각의 넓이」(정방향)와 ② 「넓이가 주어졌을 때 각·변 역산」은 학생 행동이 달라 분리한다(②는 $\sin$ 값 하나에 각이 둘 나오는 T-범위가 본질이라 예각·둔각 단서 유무로 다시 갈라도 된다). ③ 「넓이 분할로 길이 구하기」(각의 이등분선·내분선·수선)는 이 단원에서 세 번 반복되는 독립 유형이다. ④ 「사각형의 넓이」는 대각선·사잇각형(211-491 · 214-e14 · 214-499 · 216-504)과 대각선 분할형(213-497 · 216-505)으로 나눠야 도구가 섞이지 않는다.
- **통합해도 될 유형**: 「세 변 → 코사인법칙 → 넓이」(213-e12 · 213-495 · 216-503)와 특강의 「헤론의 공식」(215-500)은 입력·출력이 같고 경로만 다르므로 한 유형 아래 두 해법으로 묶는다. 「평행사변형의 넓이」(211-490 · 214-e13 · 214-498)는 삼각형 넓이 유형의 계수 2배 변형이라 별도 유형 대신 하위 변형으로 충분하다.
- **base ★ 제안**: 정방향 넓이 공식 ★1 · 역산형 ★2 · 세 변 넓이 ★2 · 넓이 분할 길이 ★3 · 원과 결합(원주각·호의 비·외접원) ★4.
