---
name: mechanism-데이터-GN-M32-05-p1
description: 개념원리 중학 3-2 05 넓이 구하기(1/2 · 46~49쪽) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-2 · 전사본 latex-bank/gn-m32
  section: 05 넓이 구하기
  unit_code: "05"
  part: "1/2"
  extract_range: "46~49쪽 · 46-01~49-05"
  total_problems: 17
  unit_total: 49
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m32/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m32/items/<id>.tex
  image_source: latex-bank/gn-m32/figures/ (crops.json)
---

# 개념원리 중학 3-2 · 05 넓이 구하기 (1/2) 정독 데이터 (v1.0)

이 파일은 46~49쪽의 17문항(개념원리 확인하기 4 · 핵심문제 익히기 8 · 이런 문제가 시험에 나온다 5)을 다룬다. 개념원리 중학은 RPM 과 달리 문항별 난이도 표기(하~상)나 대표문제 태그가 없고, **구역(section) 자체가 난이도 층**이다. 그래서 ★ 출발점은 「개념원리 확인하기 ★1 · 핵심문제 익히기(핵심문제 h·확인문제 c) ★2 · 이런 문제가 시험에 나온다 ★2~3」으로 잡고, 거기서 M_total 과 통찰 라벨로 ±1 조정했다.

단원 내용은 「두 변과 그 끼인각으로 넓이 구하기」 한 도구가 삼각형 → 다각형(대각선 분할) → 평행사변형 → 사각형(두 대각선의 교각)으로 확장되는 구조다. 이 범위에서 반복되는 함정은 **낀각이 둔각일 때 $\sin(180^\circ-\theta)$ 로 바꾸는 처리**(46-01 ⑶⑷ · 46-04 ⑵ · 47-c1 · 47-h2 · 48-h3 · 48-c4 · 49-05) 하나이고, 변별은 「낀각이나 대각선 길이가 직접 주어지지 않아 먼저 만들어야 하는가」에서 생긴다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M32-46-01
  page: 46
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑷ 두 변의 길이와 그 끼인각(60°·45°·135°·150°)이 주어진 △ABC 의 넓이. ⑶⑷ 는 낀각이 둔각.
  category: '두 변과 낀각 → 삼각형의 넓이(둔각이면 $180^\circ-\theta$)'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 넓이 — 두 변과 낀각(예각·둔각)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 한 줄 대입 문항 4개. ⑶ 135°·⑷ 150° 에서만 180°−θ 로 바꾸는 한 단계가 붙는다.
    개념원리 확인하기 구역(★1 출발)·통찰 없음·M_total 4 → ★1 유지.
    이 단원의 기본 도구를 예각·둔각 양쪽으로 한 번에 보여 주는 자리라 변형 원본으로 가치가 높다.
  tier: star_1
  mechanism_primary: '두 변과 낀각 확인 → 둔각이면 $\sin(180^\circ-\theta)$ → $S=\frac{1}{2}ab\sin\theta$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $15\sqrt{3}$ ⑵ $6\sqrt{2}$ ⑶ $10\sqrt{2}$ ⑷ $30$'
  answer_source: "답지"
  figure: "crop:fig-46-01.png"
  latex: latex-bank/gn-m32/items/46-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 변의 길이(6·10 / 3·8 / 5·8 / 10·12)와 낀각(30°·45°·60°·120°·135°·150°)을 자유롭게 바꿀 수 있음. 제약: 중3 과정은 특수각의 삼각비만 쓰므로 낀각은 30·45·60·120·135·150 중에서만 고른다. 두 변의 곱이 짝수여야 $\frac{1}{2}ab$ 가 정수로 떨어져 답이 $k\sqrt{3}$·$k\sqrt{2}$ 꼴로 정리된다. 그림 라벨(변 이름·각 위치)은 고정.'
    creative: '(1) 낀각 대신 나머지 두 각을 주고 내각의 합으로 낀각을 만들게 하기(★2 · I-EQV d1) (2) 넓이를 주고 한 변이나 낀각을 역산시키기(★2 · 47-c1·49-01 골조) (3) 네 소문항의 넓이를 크기 순으로 비교하게 하면 계산량만 늘고 통찰은 그대로라 ★1 유지 (4) 한 변을 미지수 $x$ 로 두고 넓이를 $x$ 의 식으로 나타내면 Mₐ 상승 → ★2.'
```

```yaml
- id: GN-M32-46-02
  page: 46
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑶ □ABCD 에서 대각선 BD 로 나뉜 △ABD 의 넓이, △BCD 의 넓이, 그리고 둘을 더한 □ABCD 의 넓이.
  category: "대각선으로 분할 → 두 삼각형의 넓이 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다각형의 넓이 — 대각선으로 분할해 더하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    소문항이 ⑴△ABD → ⑵△BCD → ⑶합 으로 분할 절차를 그대로 안내해 주므로 학생이 분할선을 찾을 필요가 없다.
    개념원리 확인하기 구역·통찰 없음·M_total 4 → ★1. 47-h2 와 같은 골조인데 안내가 있느냐 없느냐로 층이 갈린다.
  tier: star_1
  mechanism_primary: '대각선 BD 로 분할 → 두 삼각형에 각각 $\frac{1}{2}ab\sin\theta$ → 합'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $8$ ⑵ $48$ ⑶ $56$'
  answer_source: "답지"
  figure: "crop:fig-46-02.png"
  latex: latex-bank/gn-m32/items/46-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 삼각형의 변 길이와 낀각을 각각 바꿀 수 있음. 제약: 두 삼각형이 대각선 BD 를 공유하므로 각 삼각형의 조건은 BD 를 포함하지 않는 두 변과 그 낀각으로 주어야 한다(BD 를 쓰면 길이가 서로 모순될 수 있음). 낀각은 특수각으로 제한하고, 두 넓이의 무리수 부분이 같아야 ⑶ 합이 한 항으로 정리된다.'
    creative: '(1) ⑴⑵ 소문항을 없애고 □ABCD 의 넓이만 묻기(분할선을 스스로 찾아야 함 → ★2) (2) □ABCD 의 넓이와 △ABD 의 넓이를 주고 △BCD 의 한 변을 역산(★2 · I-BW d1) (3) 대각선을 AC 로 그어도 풀리는지 비교하게 하면 전략 선택이 생겨 ★3(I-SC d1) (4) 오각형으로 늘려 대각선 두 개로 분할(계산량만 증가 · ★2).'
```

```yaml
- id: GN-M32-46-03
  page: 46
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴⑵ 이웃한 두 변의 길이와 그 끼인각이 주어진 평행사변형 ABCD 의 넓이.
  category: '평행사변형의 넓이 $S=ab\sin\theta$'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행사변형의 넓이 — 이웃한 두 변과 낀각"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    삼각형 넓이 공식의 두 배라는 사실만 확인하면 한 줄. 46-01 과 도구가 같고 계수만 $\frac{1}{2}$ 이 빠진다.
    개념원리 확인하기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: '이웃한 두 변과 낀각 → 둔각이면 $180^\circ-\theta$ → $S=ab\sin\theta$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $24$ ⑵ $21\sqrt{3}$'
  answer_source: "답지"
  figure: "crop:fig-46-03.png"
  latex: latex-bank/gn-m32/items/46-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 변과 낀각을 바꿀 수 있고 46-01 보다 제약이 느슨함($\frac{1}{2}$ 이 없어 두 변의 곱이 홀수여도 정수). 제약: 낀각은 특수각. 둔각을 주면 이웃각(보각)으로 바꾸는 단계가 하나 더 생긴다.'
    creative: '(1) 마름모로 바꿔 한 변만 주기(49-04 골조 · ★2) (2) 넓이와 한 변을 주고 다른 변이나 낀각을 역산(★2 · 48-c3 골조) (3) 평행사변형 안에 대각선을 긋고 한 조각의 넓이를 묻기(★2 · 48-h3 골조) (4) 둘레의 길이를 함께 주고 두 변을 연립으로 구하게 하면 Mₛ·Mₐ 상승 → ★3.'
```

```yaml
- id: GN-M32-46-04
  page: 46
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴⑵ 두 대각선의 길이와 두 대각선이 이루는 각(60°·135°)이 주어진 □ABCD 의 넓이.
  category: '두 대각선과 그 낀각 → $S=\frac{1}{2}pq\sin\theta$'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사각형의 넓이 — 두 대각선의 길이와 그 이루는 각"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    사각형의 모양(볼록·등변 여부)과 무관하게 두 대각선과 교각만으로 넓이가 정해진다는 공식의 직접 확인.
    ⑵ 는 135° 라 $\sin 45^\circ$ 로 바꾸는 단계가 붙는다. 개념원리 확인하기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: '두 대각선 $p$, $q$ 와 교각 $\theta$ → 둔각이면 $180^\circ-\theta$ → $S=\frac{1}{2}pq\sin\theta$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $18\sqrt{3}$ ⑵ $48\sqrt{2}$'
  answer_source: "답지"
  figure: "crop:fig-46-04.png"
  latex: latex-bank/gn-m32/items/46-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '대각선 길이(9·8 / 12·16)와 교각을 바꿀 수 있음. 제약: 두 대각선의 곱이 짝수여야 $\frac{1}{2}pq$ 가 정수. 교각은 특수각. 그림의 사각형 모양을 바꿔도 답은 같으므로 라벨만 맞으면 됨.'
    creative: '(1) 교각을 직접 주지 않고 대각선이 밑변과 이루는 두 각으로 주기(★2 · 48-h4 골조 · I-EQV d1) (2) 등변사다리꼴·마름모처럼 두 대각선의 관계를 도형 성질로 숨기기(★3 · 49-05 골조) (3) 넓이와 한 대각선을 주고 다른 대각선을 역산(★2 · 48-c4 골조) (4) 두 대각선이 수직인 경우(마름모·정사각형)와 비교해 공식이 $\frac{1}{2}pq$ 로 줄어드는 것을 설명하게 하면 ★2.'
```

### 핵심문제 익히기

```yaml
- id: GN-M32-47-h1
  page: 47
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    이등변삼각형 ABC 에서 $\overline{AB}=\overline{AC}=4\sqrt{3}$ cm, ∠B=75° 일 때 △ABC 의 넓이.
  category: "이등변삼각형의 밑각 → 꼭지각 유도 → 두 변과 낀각 넓이 공식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 넓이 — 이등변삼각형에서 밑각으로 꼭지각 만들기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    길이가 주어진 두 변 AB·AC 의 낀각은 ∠A 인데 문제는 밑각 ∠B 를 준다. 이등변삼각형이므로 ∠A=180°−2·75°=30° 를
    먼저 만들어야 공식에 들어간다. 75° 자체는 중3 과정에서 다룰 수 없는 각이라 「주어진 각을 그대로 쓰면 안 된다」가 핵심.
    핵심문제 구역 ★2 출발 · 통찰 없음(내각의 합은 표준 절차)이나 각 유도 한 단계가 있어 −1 하지 않고 ★2 유지.
  tier: star_2
  mechanism_primary: '밑각 $75^\circ$ → 꼭지각 $\angle A=30^\circ$ → $\frac{1}{2}\cdot(4\sqrt{3})^2\sin 30^\circ$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$12\,\mathrm{cm}^2$'
  answer_source: "본문 답"
  figure: "crop:fig-47-h1.png"
  latex: latex-bank/gn-m32/items/47-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '등변의 길이와 밑각을 바꿀 수 있음. 제약: 꼭지각 180°−2B 가 특수각이어야 하므로 밑각은 75°(→30°) · 67.5° 제외 · 60°(→60°) · 45°(→90°) · 30°(→120°) · 22.5° 제외 로 제한된다. 등변의 길이는 제곱이 들어가므로 $4\sqrt{3}$ 처럼 제곱이 정수가 되는 값이 깔끔하다.'
    creative: '(1) 꼭지각을 주고 밑각을 쓰게 하는 반대 방향(★2) (2) 넓이를 주고 등변의 길이를 역산(★2 · I-BW d1) (3) 이등변삼각형 대신 정삼각형·직각이등변삼각형으로 바꾸면 ★1로 내려감 (4) 밑변 BC 의 길이를 함께 묻거나 넓이를 두 가지 방법(밑변×높이 vs $\frac{1}{2}ab\sin C$)으로 구해 비교시키면 전략 분기가 생겨 ★3(I-SC d1).'
```

```yaml
- id: GN-M32-47-c1
  page: 47
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    $\overline{BC}=9$ cm, ∠C=120° 인 △ABC 의 넓이가 $18\sqrt{3}$ cm² 일 때 $\overline{AC}$ 의 길이.
  category: '넓이 공식의 역산 → 둔각을 $\sin 60^\circ$ 로 바꾼 뒤 한 변 구하기'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 넓이 역산 — 넓이가 주어졌을 때 한 변 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    낀각이 둔각이므로 $\sin(180^\circ-120^\circ)$ 로 바꾸고, 넓이 공식을 $\overline{AC}$ 에 대한 일차방정식으로 보고 푼다.
    무리수 계수 방정식이라 양변의 $\sqrt{3}$ 을 약분하는 처리가 붙는다.
    핵심문제 구역 ★2 출발 · 통찰 없음 · M_total 4 → 둔각 변환과 역산 두 단계를 인정해 −1 없이 ★2.
  tier: star_2
  mechanism_primary: '$\frac{1}{2}\cdot 9\cdot\overline{AC}\cdot\sin 60^\circ=18\sqrt{3}$ 을 $\overline{AC}$ 에 대해 풀기'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-47-c1.png"
  latex: latex-bank/gn-m32/items/47-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주어진 변(9)·낀각(120°)·넓이($18\sqrt{3}$)를 바꿀 수 있음. 제약: 세 값이 서로 묶여 있으므로 구하려는 변을 먼저 정수로 정한 뒤 넓이를 역으로 계산해 출제한다. 넓이의 무리수 부분은 낀각의 sin 값과 같은 꼴($120^\circ$→$\sqrt{3}$, $135^\circ$→$\sqrt{2}$)이어야 약분된다.'
    creative: '(1) 구하는 대상을 낀각으로 바꾸기(★2 · 49-01 골조 · T-범위 조건 필요) (2) 두 변의 비를 주고 각각을 구하게 하면 Mₐ 상승 → ★3 (3) 넓이를 주고 둘레를 묻는 이중 조건(★3 · I-CON d1) (4) 둔각을 예각으로 바꾸면 변환 단계가 빠져 ★1 로 내려감.'
```

```yaml
- id: GN-M32-47-h2
  page: 47
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    $\overline{AB}=\overline{AD}=2$ cm, ∠A=120°, $\overline{BC}=\overline{CD}=2\sqrt{3}$ cm, ∠C=60° 인 □ABCD 의 넓이.
  category: "대각선 BD 로 두 삼각형 분할 → 각각 두 변과 낀각으로 계산 후 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다각형의 넓이 — 대각선으로 분할해 두 삼각형의 합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    46-02 와 같은 골조지만 소문항 안내가 없어 「어느 대각선을 그어야 두 조각 모두 두 변과 낀각이 갖춰지는가」를 학생이 판단해야 한다.
    AB·AD 와 ∠A, CB·CD 와 ∠C 가 짝으로 주어졌으므로 BD 가 유일한 분할선이고, BD 의 길이는 끝까지 필요 없다.
    ∠A=120° 둔각 변환 한 단계 포함. 핵심문제 구역 ★2 · 통찰 없음(분할선이 조건 배치로 거의 지정됨) · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: '대각선 BD 로 분할 → $\triangle ABD=\frac{1}{2}\cdot2\cdot2\sin 60^\circ$, $\triangle BCD=\frac{1}{2}(2\sqrt{3})^2\sin 60^\circ$ → 합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4\sqrt{3}\,\mathrm{cm}^2$'
  answer_source: "본문 답"
  figure: "crop:fig-47-h2.png"
  latex: latex-bank/gn-m32/items/47-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '네 변의 길이와 두 각을 바꿀 수 있음. 제약: 분할선 BD 의 양쪽이 각각 두 변과 낀각을 갖도록 AB·AD·∠A 와 CB·CD·∠C 를 짝으로 준다. 두 조각의 무리수 부분이 같아야 답이 한 항으로 정리되므로 ∠A 와 ∠C 는 sin 값이 같은 짝(60°와 120°, 45°와 135°)으로 고른다. 그림의 사각형은 볼록해야 넓이가 단순 합.'
    creative: '(1) 오목사각형으로 만들어 두 넓이를 빼게 하면 T-부호 함정이 생겨 ★3 (2) 조건을 AB·BC·∠B 쪽으로 옮겨 다른 대각선 AC 로 분할하게 하기(같은 ★2) (3) 두 대각선 중 어느 쪽으로 잘라도 되게 조건을 과하게 주면 전략 선택 ★3(I-SC d1) (4) 한 조각의 넓이만 주고 나머지 조건을 역산시키기(★3 · I-BW d1).'
```

```yaml
- id: GN-M32-47-c2
  page: 47
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    $\overline{AB}=6$ cm, $\overline{BC}=12$ cm, ∠B=60°, ∠BAC=90°(직각 표시), $\overline{CD}=10$ cm, ∠ACD=30° 인 □ABCD 의 넓이.
  category: "△ABC 의 넓이 + 공유 대각선 AC 의 길이를 직각삼각형에서 확보 → △ACD 의 넓이"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다각형의 넓이 — 분할 후 공유 대각선의 길이를 먼저 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    47-h2 와 달리 두 번째 조각 △ACD 의 두 변 중 AC 가 주어지지 않는다. ∠BAC=90°·∠B=60° 인 직각삼각형에서
    $\overline{AC}=6\sqrt{3}$ 을 먼저 만들어야 넓이 공식에 들어갈 수 있다는 것이 이 문항의 추가 단계.
    피타고라스 정리·특수각 변의 비는 표준 절차라 통찰로 세지 않았다. 핵심문제 구역 ★2 · Mₛ 2 · M_total 5 → ★2.
    [분류 이슈] 분할 후 공유 변을 별도로 확보하는 하위 목표를 I-CON d1 으로 볼 수도 있어 ★3 후보.
  tier: star_2
  mechanism_primary: '$\triangle ABC=\frac{1}{2}\cdot6\cdot12\sin 60^\circ$ → 직각삼각형에서 $\overline{AC}=6\sqrt{3}$ → $\triangle ACD=\frac{1}{2}\cdot6\sqrt{3}\cdot10\sin 30^\circ$ → 합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$33\sqrt{3}\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: "crop:fig-47-c2.png"
  latex: latex-bank/gn-m32/items/47-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '△ABC 쪽은 6·12·60° 직각삼각형(30°-60°-90° 비 1:2:√3)이라 세 값이 묶여 있다. 바꾸려면 빗변 BC 를 2의 배수로 두고 AB=BC/2, AC=(√3/2)BC 로 다시 계산한다. △ACD 쪽은 CD 와 ∠ACD 를 자유롭게 바꿀 수 있고, ∠ACD 를 30°로 두면 $\sin$ 이 $\frac{1}{2}$ 이라 무리수 부분이 △ABC 와 같은 $\sqrt{3}$ 로 맞아 합이 한 항으로 정리된다.'
    creative: '(1) 직각 표시를 빼고 ∠BAC 를 각도로 주면 AC 를 삼각비로 구해야 해 ★3 (2) □ABCD 의 넓이를 주고 CD 를 역산(★3 · I-BW d1) (3) 두 대각선 중 BD 로 자르면 풀리지 않게 조건을 배치해 분할선 선택을 묻기(★3 · I-SC d1) (4) △ACD 를 사각형 바깥으로 빼 오목 도형으로 만들면 뺄셈 처리 ★3.'
```

```yaml
- id: GN-M32-48-h3
  page: 48
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    $\overline{BC}=18$ cm, $\overline{CD}=14$ cm, ∠BAD=135° 인 평행사변형 ABCD 에서 두 대각선의 교점 P 가 만든 네 삼각형 중 색칠한 두 개(마주 보는 △ABP·△PCD)의 넓이.
  category: '평행사변형의 넓이 $ab\sin\theta$ → 두 대각선이 넓이를 4등분 → 색칠한 부분은 전체의 $\frac{1}{2}$'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "색칠한 두 조각을 따로 구하지 않고 「두 대각선이 평행사변형의 넓이를 4등분한다」로 전체의 절반이라는 동치 조건으로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "평행사변형의 넓이 — 대각선이 나눈 부분의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∠BAD=135° 는 이웃각이므로 두 변 BC·CD 의 낀각 ∠BCD=45° 로 바꾸거나 $\sin 135^\circ=\sin 45^\circ$ 를 그대로 써서
    평행사변형 넓이 $18\cdot14\sin 45^\circ=126\sqrt{2}$ 를 얻는다. 색칠한 부분은 네 등분 중 마주 보는 두 개이므로 그 $\frac{1}{2}$.
    조각을 개별 계산하려 들면 대각선 길이가 필요해 중3 범위를 벗어나므로, 4등분 성질로 환원하는 것이 이 문항의 전부다.
    핵심문제 구역 ★2 · 통찰 1개(d1) → +1 조건(통찰 2개 이상 또는 depth 3)에 못 미쳐 ★2 유지.
    [분류 이슈] 4등분 성질은 중2 표준 성질이라 절차형 ★2 로 볼 수도 있음.
  tier: star_2
  mechanism_primary: '이웃각으로 낀각 $45^\circ$ 확보 → $S_{\square}=18\cdot14\sin 45^\circ$ → 대각선이 4등분 → 색칠 $=\frac{1}{2}S_{\square}$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$63\sqrt{2}\,\mathrm{cm}^2$'
  answer_source: "본문 답"
  figure: "crop:fig-48-h3.png"
  latex: latex-bank/gn-m32/items/48-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 변(18·14)과 ∠BAD 를 바꿀 수 있음. 제약: 두 변의 곱이 짝수여야 $\frac{1}{2}$ 로 나눈 답이 정수 계수로 떨어진다. 각은 특수각이며 둔각으로 주어야 이웃각 변환 단계가 살아 있다. 그림의 색칠 위치(마주 보는 두 조각)는 넓이가 전체의 $\frac{1}{2}$ 이라는 결론을 고정한다.'
    creative: '(1) 색칠을 네 조각 중 한 개로 바꾸면 $\frac{1}{4}$(★2 유지) (2) 한 대각선만 그어 삼각형 하나를 색칠하면 ★1 로 내려감 (3) 색칠한 부분의 넓이를 주고 한 변을 역산(★3 · I-BW d1) (4) 평행사변형 대신 일반 사각형으로 바꾸면 4등분 성질이 깨져 조각별 계산이 필요해지고 조건 설계가 달라짐(★4 후보) (5) 대각선의 중점을 이은 도형으로 확장하면 I-SYM 이 붙어 ★3~4.'
```

```yaml
- id: GN-M32-48-c3
  page: 48
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    $\overline{AB}=2$ cm, $\overline{AD}=4$ cm 인 평행사변형 ABCD 의 넓이가 $4\sqrt{3}$ cm² 일 때 ∠B 의 크기(0°<∠B<90°).
  category: '평행사변형 넓이의 역산 → $\sin B$ 의 값 → 범위 조건으로 각 결정'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행사변형의 넓이 역산 — 낀각의 크기 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $2\cdot4\cdot\sin B=4\sqrt{3}$ 에서 $\sin B=\frac{\sqrt{3}}{2}$ 까지는 한 줄. 여기서 B 는 60°와 120° 두 개가 가능하므로
    단서 0°<∠B<90° 로 하나를 고르는 T-범위 처리가 핵심이고, 단서를 놓치면 답이 둘이 된다.
    핵심문제 구역 ★2 · 통찰 없음(범위 단서가 명시돼 있어 학생이 분기를 따질 필요는 없음) · M_total 4 → ★2.
  tier: star_2
  mechanism_primary: '$2\cdot4\sin B=4\sqrt{3}$ → $\sin B=\frac{\sqrt{3}}{2}$ → 범위 $0^\circ<B<90^\circ$ 로 $60^\circ$ 확정'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$60^\circ$'
  answer_source: "답지"
  figure: "crop:fig-48-c3.png"
  latex: latex-bank/gn-m32/items/48-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 변과 넓이를 바꿀 수 있음. 제약: $\sin B=S/(ab)$ 가 특수각의 sin 값($\frac{1}{2}$·$\frac{\sqrt{2}}{2}$·$\frac{\sqrt{3}}{2}$)이어야 하고 1 이하여야 한다. 범위 단서를 90°<B<180° 로 바꾸면 답은 둔각 쪽(120°)이 된다.'
    creative: '(1) 범위 단서를 빼고 「가능한 ∠B 를 모두 구하시오」로 바꾸면 다중 해석이 생겨 ★3(I-MI d1) (2) 삼각형으로 바꾸면 49-01 골조(★2) (3) 넓이의 최댓값을 묻고 각이 90°일 때임을 설명하게 하면 ★3~4 (4) 두 변 대신 둘레와 넓이를 주면 연립이 붙어 ★3.'
```

```yaml
- id: GN-M32-48-h4
  page: 48
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    두 대각선의 길이가 8 cm·7 cm 이고 두 대각선이 밑변 BC 와 이루는 각이 각각 48°·72° 인 □ABCD 의 넓이. 5지선다.
  category: "삼각형의 내각의 합으로 두 대각선의 교각을 유도 → 두 대각선 넓이 공식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "밑변에 대한 두 각 48°·72° 를 교점 P 의 삼각형에서 내각의 합으로 처리해 쓸 수 있는 조건인 교각 60° 로 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "사각형의 넓이 — 두 대각선의 교각을 각 추적으로 만들기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    공식 $\frac{1}{2}pq\sin\theta$ 자체는 46-04 와 같은데 θ 가 직접 주어지지 않는다. 대각선의 교점 P 와 B·C 로 만들어지는
    삼각형에서 $180^\circ-48^\circ-72^\circ=60^\circ$ 를 끌어내는 한 단계가 변별점이고, 48°·72° 를 삼각비로 쓰려고 하면 막힌다.
    핵심문제 구역 ★2 · 통찰 1개(EQV d1) → +1 조건 미달로 ★2 유지.
  tier: star_2
  mechanism_primary: '교점 P 의 삼각형에서 $180^\circ-48^\circ-72^\circ=60^\circ$ → $\frac{1}{2}\cdot8\cdot7\sin 60^\circ$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "본문 답"
  figure: "crop:fig-48-h4.png"
  latex: latex-bank/gn-m32/items/48-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 대각선(8·7)과 두 각(48°·72°)을 바꿀 수 있음. 제약: 두 각의 합의 보각 180°−(α+β) 가 특수각이어야 하므로 α+β 는 120°·135°·150° 중 하나로 맞춘다(48+72=120). 두 각 자체는 특수각이 아닌 편이 「그대로 쓰면 안 된다」는 신호가 되어 좋다. 두 대각선의 곱이 짝수여야 답이 깔끔하다. 선택지는 $14$·$14\sqrt{3}$·$28$ 처럼 $\sin$ 값을 잘못 고른 결과를 오답으로 배치.'
    creative: '(1) 교각을 직접 주고 대각선 하나를 역산시키기(★2 · 48-c4 골조) (2) 세 각을 주고 그중 두 개만 쓰이게 해 불필요 조건을 섞으면 ★3 (3) 두 대각선이 수직임을 각 추적으로 밝히게 하면 $\frac{1}{2}pq$ 로 단순화(★2) (4) 대각선의 일부 길이만 주고 나머지를 도형 성질로 채우게 하면 조건 통합이 붙어 ★3(I-CON d1).'
```

```yaml
- id: GN-M32-48-c4
  page: 48
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    $\overline{AC}=12$ cm 이고 두 대각선이 이루는 각이 150° 인 □ABCD 의 넓이가 27 cm² 일 때 $\overline{BD}$ 의 길이.
  category: '사각형 넓이의 역산 → 둔각을 $\sin 30^\circ$ 로 바꾼 뒤 나머지 대각선 구하기'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사각형의 넓이 역산 — 나머지 대각선의 길이 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    46-04 의 역방향. 150° 를 $\sin 30^\circ$ 로 바꾸면 $\frac{1}{2}\cdot12\cdot\overline{BD}\cdot\frac{1}{2}=27$ 인 일차방정식 한 줄이다.
    둔각 변환을 빠뜨리면 $\sin 150^\circ$ 를 $\frac{\sqrt{3}}{2}$ 로 잘못 쓰기 쉬운 자리.
    핵심문제 구역 ★2 · 통찰 없음 · M_total 4 → 둔각 변환과 역산 두 단계를 인정해 ★2 유지.
  tier: star_2
  mechanism_primary: '$\frac{1}{2}\cdot12\cdot\overline{BD}\cdot\sin 30^\circ=27$ 을 $\overline{BD}$ 에 대해 풀기'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$9\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-48-c4.png"
  latex: latex-bank/gn-m32/items/48-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '대각선 AC·교각·넓이를 바꿀 수 있음. 제약: 구하려는 BD 를 먼저 정한 뒤 넓이를 역산해 출제한다. 교각이 150°(또는 30°)면 $\sin$ 이 $\frac{1}{2}$ 이라 넓이가 정수로 떨어지고, 120°·135° 로 바꾸면 넓이에 무리수가 들어간다.'
    creative: '(1) 구하는 대상을 교각으로 바꾸고 범위 단서를 붙이기(★2 · 48-c3 골조) (2) 두 대각선의 길이의 비만 주고 각각을 구하게 하면 Mₐ 상승 ★3 (3) 마름모·등변사다리꼴로 바꿔 대각선 관계를 성질로 숨기기(★3 · 49-05 골조) (4) 두 대각선의 합을 함께 주면 연립이 붙어 ★3(I-CON d1).'
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M32-49-01
  page: 49
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    $\overline{AC}=7$ cm, $\overline{BC}=12$ cm 인 △ABC 의 넓이가 21 cm² 일 때 ∠C 의 크기(0°<∠C<90°).
  category: '삼각형 넓이의 역산 → $\sin C$ 의 값 → 범위 조건으로 각 결정'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각형의 넓이 역산 — 낀각의 크기 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\frac{1}{2}\cdot7\cdot12\sin C=21$ 에서 $\sin C=\frac{1}{2}$, 범위 단서로 30° 확정. 48-c3 의 삼각형 판이다.
    단서가 없으면 150° 도 답이 되는 자리라 T-범위가 유일한 함정.
    이런 문제가 시험에 나온다 구역(★2~3 출발) · 통찰 없음 · M_total 4 → 하한인 ★2.
  tier: star_2
  mechanism_primary: '$\frac{1}{2}\cdot7\cdot12\sin C=21$ → $\sin C=\frac{1}{2}$ → 범위 $0^\circ<C<90^\circ$ 로 $30^\circ$ 확정'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$30^\circ$'
  answer_source: "답지"
  figure: "crop:fig-49-01.png"
  latex: latex-bank/gn-m32/items/49-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 변(7·12)과 넓이(21)를 바꿀 수 있음. 제약: $\sin C=2S/(ab)$ 가 특수각의 sin 값이어야 하고 1 이하. 두 변의 곱이 짝수여야 $\frac{1}{2}ab$ 가 정수. 범위 단서를 90°<C<180° 로 바꾸면 답은 150°.'
    creative: '(1) 범위 단서를 빼고 가능한 각을 모두 구하게 하면 ★3(I-MI d1) (2) 각 대신 한 변을 역산시키면 47-c1 골조(★2) (3) 넓이가 최대가 되는 ∠C 를 묻기(★3) (4) 같은 두 변으로 만든 두 삼각형의 넓이 비를 sin 의 비로 설명하게 하면 ★3.'
```

```yaml
- id: GN-M32-49-02
  page: 49
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    ∠A=90° 인 직각삼각형 ABC 와 $\overline{BC}$ 를 한 변으로 하는 정사각형 BDEC 가 붙어 있고 $\overline{DE}=16$ cm, ∠ABC=45° 일 때 △ABD 의 넓이. 5지선다.
  category: "정사각형·직각이등변 성질로 두 변 확보 → 두 각을 더해 낀각 135° → 넓이 공식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구하려는 △ABD 의 낀각이 직접 주어지지 않으므로 ∠ABD=∠ABC+∠CBD=45°+90°=135° 로 두 도형의 각을 이어 붙여 쓸 수 있는 조건으로 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각형의 넓이 — 정사각형이 붙은 결합 도형에서 낀각 만들기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    정사각형이므로 $\overline{BC}=\overline{BD}=\overline{DE}=16$, ∠A=90°·∠ABC=45° 인 직각이등변삼각형이므로 $\overline{AB}=8\sqrt{2}$ 까지가 준비 단계.
    핵심은 △ABD 의 두 변 AB·BD 의 낀각이 그림에 표시돼 있지 않고 45°+90°=135° 로 이어 붙여야 나온다는 점이고, 그 뒤 둔각 변환까지 붙는다.
    도형 두 개가 결합돼 조건을 옮겨 오는 단계가 여럿이라 이 범위에서 가장 단계가 긴 축. 구역 ★2~3 출발 · 통찰 1개 · M_total 5 → ★3.
  tier: star_3
  mechanism_primary: '정사각형에서 $\overline{BD}=16$ → 직각이등변에서 $\overline{AB}=8\sqrt{2}$ → $\angle ABD=45^\circ+90^\circ=135^\circ$ → $\frac{1}{2}\cdot8\sqrt{2}\cdot16\sin 45^\circ$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-49-02.png"
  latex: latex-bank/gn-m32/items/49-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '정사각형의 한 변(16)만 실질 자유 변수이고 AB 는 거기에 묶인다($\overline{AB}=\overline{BC}/\sqrt{2}$). 제약: 답이 정수가 되려면 한 변을 $8$의 배수처럼 $\sqrt{2}$ 가 두 번 나타나 약분되는 값으로 둔다. ∠ABC 를 45° 에서 30°·60° 로 바꾸면 AB 계산이 특수각 변의 비로 바뀌고 낀각도 120°·150° 가 되어 답의 무리수 부분이 달라진다.'
    creative: '(1) 묻는 대상을 △ACE 나 △ADE 로 옮기면 같은 골조에서 낀각만 달라짐(★3) (2) 정사각형을 정삼각형으로 바꾸면 낀각이 45°+60°=105° 가 되어 중3 범위를 벗어나므로 각 선택에 주의 (3) 색칠한 부분을 전체에서 빼게 만들면 단계가 늘어 ★4 (4) 정사각형의 넓이를 주고 △ABD 의 넓이를 묻는 순서로 바꾸면 준비 단계가 하나 줄어 ★2 (5) ∠ABC 를 미지수로 두고 △ABD 의 넓이를 그 식으로 나타내면 Mₐ 상승 ★4.'
```

```yaml
- id: GN-M32-49-03
  page: 49
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    반지름의 길이가 8 cm 인 원 O 에 내접하는 정팔각형의 넓이.
  category: "중심과 각 꼭짓점을 이어 합동인 이등변삼각형 8개로 분할 → 중심각 45° → 8배"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정팔각형의 회전대칭을 이용해 중심에서 합동인 이등변삼각형 8개로 쪼개고 한 개만 계산한 뒤 8배 — 변의 길이를 구하지 않고 반지름만으로 끝냄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정다각형의 넓이 — 외접원의 반지름과 중심각으로 분할"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    정팔각형의 한 변의 길이를 구하려 들면 중3 범위에서 막힌다. 중심 O 에서 반지름 8개를 그어 두 변이 모두 반지름인
    합동 이등변삼각형 8개로 보는 것이 전부이고, 중심각은 360°÷8=45° 라 특수각으로 떨어진다.
    분할을 떠올리지 못하면 진입 자체가 안 되는 자리라 통찰 1개(SYM d1)로 잡았다. 구역 ★2~3 출발 · 통찰 1개 → ★3.
    [분류 이슈] 정다각형의 중심각 분할을 교과 표준 절차로 보면 절차형 ★2 로도 판정 가능.
  tier: star_3
  mechanism_primary: '중심에서 반지름으로 8등분 → 중심각 $360^\circ\div8=45^\circ$ → $8\times\frac{1}{2}\cdot8\cdot8\sin 45^\circ$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$128\sqrt{2}\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: "crop:fig-49-03.png"
  latex: latex-bank/gn-m32/items/49-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '반지름(8)과 변의 개수(8)를 바꿀 수 있음. 제약: 중심각 360°/n 이 특수각이어야 하므로 n 은 3·4·6·8·12 만 쓸 수 있다(n=8 → 45°, n=12 → 30°, n=6 → 60°). 반지름은 제곱으로 들어가므로 정수로 두면 답이 $r^2$ 의 배수로 깔끔하다.'
    creative: '(1) 정십이각형으로 바꾸면 중심각 30°·답이 정수(★3 유지) (2) 넓이를 주고 반지름을 역산(★3 · I-BW d1) (3) 내접 정팔각형과 원의 넓이를 비교하게 하면 단원 밖 개념이 섞여 ★4(I-XU d1) (4) 정팔각형 안에 다시 정사각형을 넣어 차를 구하게 하면 ★4 (5) 반지름 대신 한 변의 길이를 주면 중3 범위로는 풀 수 없으므로 금지.'
```

```yaml
- id: GN-M32-49-04
  page: 49
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    ∠B=60° 인 마름모 ABCD 의 넓이가 $8\sqrt{3}$ cm² 일 때 마름모의 한 변의 길이.
  category: '마름모의 넓이 $a^2\sin 60^\circ$ 역산 → $a^2$ → 양수 조건으로 한 변 결정'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "마름모의 넓이 역산 — 한 변의 길이 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    마름모는 네 변이 같은 평행사변형이므로 두 변이 모두 $a$ 가 되어 $a^2\sin 60^\circ=8\sqrt{3}$ 한 줄, $a^2=16$ 에서 길이이므로 양수만 택한다.
    46-03 의 역방향에 「마름모 = 두 변이 같은 평행사변형」이라는 치환만 얹은 형태.
    구역 ★2~3 출발 · 통찰 없음(마름모의 정의를 그대로 쓰는 표준 절차) · M_total 4 → 하한인 ★2.
  tier: star_2
  mechanism_primary: '마름모 → 두 변이 모두 $a$ → $a^2\sin 60^\circ=8\sqrt{3}$ → $a^2=16$ → $a=4$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-49-04.png"
  latex: latex-bank/gn-m32/items/49-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '넓이와 ∠B 를 바꿀 수 있음. 제약: $a^2=S/\sin B$ 가 완전제곱수여야 한 변이 무리수가 되지 않는다(60°면 $S$ 의 $\sqrt{3}$ 계수가 짝수, 45°면 $\sqrt{2}$ 계수가 짝수여야 함). ∠B 를 둔각으로 주면 보각 변환 단계가 하나 붙는다.'
    creative: '(1) 한 변과 넓이를 주고 ∠B 를 역산(★2 · 48-c3 골조) (2) 마름모의 두 대각선 길이를 묻게 하면 대각선 공식과 연결돼 ★3 (3) 둘레를 주고 넓이를 구하게 하면 ★2 (4) 마름모를 정사각형·연꼴로 바꾸면 성질 치환 단계가 달라짐 (5) 넓이가 같은 마름모 중 둘레가 최소인 경우를 묻기(★4).'
```

```yaml
- id: GN-M32-49-05
  page: 49
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    $\overline{AD}\parallel\overline{BC}$ 인 등변사다리꼴 ABCD 에서 한 대각선의 길이가 10 cm 이고 두 대각선이 이루는 각이 120° 일 때 사다리꼴의 넓이.
  category: "등변사다리꼴의 두 대각선 길이가 같음 → 나머지 대각선 확보 → 두 대각선 넓이 공식"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "조건 「등변사다리꼴」을 「두 대각선의 길이가 같다」로 바꿔 주어지지 않은 나머지 대각선을 10 cm 로 확보"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "사각형의 넓이 — 도형의 성질로 나머지 대각선 길이를 확보하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 대각선 공식은 46-04 와 같지만 대각선이 하나만 주어진다. 등변사다리꼴의 두 대각선이 같다는 성질을 떠올리지 못하면
    조건이 하나 모자라 보여 진입이 막히고, 그 뒤 120° 둔각 변환이 붙는다. 성질을 쓰는 순간 $\frac{1}{2}\cdot10\cdot10\sin 60^\circ$ 한 줄.
    구역 ★2~3 출발 · 통찰 1개(EQV d1) · 진입 저항이 실질적 → 상한인 ★3.
    [분류 이슈] 계산은 한 줄이고 성질 환기 하나뿐이라 ★2 로 볼 여지도 있음.
  tier: star_3
  mechanism_primary: '등변사다리꼴 → $\overline{AC}=\overline{BD}=10$ → 교각 $180^\circ-120^\circ=60^\circ$ → $\frac{1}{2}\cdot10\cdot10\sin 60^\circ$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$25\sqrt{3}\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: "crop:fig-49-05.png"
  latex: latex-bank/gn-m32/items/49-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '대각선 길이(10)와 교각(120°)을 바꿀 수 있음. 제약: 대각선이 제곱으로 들어가므로 짝수로 두면 $\frac{1}{2}p^2$ 가 정수. 교각은 특수각이며 둔각으로 주어야 보각 변환 단계가 살아 있다. 그림의 평행 표시(AD∥BC)와 등변 표시는 성질을 쓰기 위한 근거라 고정.'
    creative: '(1) 등변사다리꼴 대신 마름모·정사각형으로 바꿔 「두 대각선이 수직」 성질을 쓰게 하기(★2~3) (2) 넓이를 주고 대각선 길이를 역산(★3 · I-BW d1) (3) 윗변·아랫변의 길이를 주고 대각선을 구하게 하면 중3 범위를 넘으므로 금지 (4) 두 대각선이 이루는 각을 직접 주지 않고 밑변과 이루는 각으로 주면 각 추적이 더해져 ★4(48-h4 골조 결합) (5) 사다리꼴을 대각선으로 나눈 네 조각 중 하나의 넓이를 묻기(★4).'
```

## 표본 판정 요약 (17문)

- ★ 분포: ★1 4 · ★2 10 · ★3 3 · ★4 0 · ★5 0
- 통찰형 5(48-h3 · 48-h4 · 49-02 · 49-03 · 49-05) · 절차형 12 · premium 0
- 통찰 유형 분포: I-EQV 4(모두 depth 1) · I-SYM 1(depth 1) · 그 밖 0. depth 2 이상 없음 → ★4·★5 없음이 자연스럽다.
- type_hint 상위: 「넓이 역산 — 한 변·낀각·대각선 구하기」 5(47-c1 · 48-c3 · 48-c4 · 49-01 · 49-04) · 「두 변과 낀각 → 넓이(삼각형·평행사변형)」 3(46-01 · 46-03 · 47-h1) · 「다각형의 넓이 — 대각선 분할」 3(46-02 · 47-h2 · 47-c2) · 「사각형의 넓이 — 두 대각선과 교각」 3(46-04 · 48-h4 · 49-05) · 「대각선이 나눈 부분의 넓이」 1(48-h3) · 「정다각형의 넓이」 1(49-03) · 「결합 도형에서 낀각 만들기」 1(49-02)
- 구역별 ★: 개념원리 확인하기 4문 전부 ★1 · 핵심문제 익히기 8문 전부 ★2 · 이런 문제가 시험에 나온다 5문은 ★2 2 · ★3 3
- M_total 분포: 4 가 14문 · 5 가 3문(47-h2 · 47-c2 · 49-02). 이 단원은 공식 하나를 쓰는 구조라 노동량 차이가 거의 없고, 변별은 전적으로 「낀각·대각선을 직접 주느냐, 만들게 하느냐」에서 생긴다.
- 함정: 낀각이 둔각이라 $\sin(180^\circ-\theta)$ 로 바꿔야 하는 문항 7(46-01 ⑶⑷ · 46-04 ⑵ · 47-c1 · 47-h2 · 48-h3 · 48-c4 · 49-05) · 범위 단서로 각을 하나만 고르는 T-범위 2(48-c3 · 49-01)
- 그림: 17문 전부(`crop:fig-46-01.png` ~ `crop:fig-49-05.png`). 변형 시 그림의 변 이름·각 위치 라벨은 고정하고 수치만 교체해야 한다.
- 답 출처: 답지 13 · 본문 답 4(47-h1 · 47-h2 · 48-h3 · 48-h4 — 핵심문제 4개는 본문에 답이 실려 있음)

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M32-47-c2 | 분할 후 공유 대각선 AC 를 직각삼각형에서 먼저 확보하는 하위 목표를 통찰(I-CON d1)로 볼지, 피타고라스·특수각 비의 표준 절차로 볼지. 절차형 ★2 로 두고 기록 | ★2 / ★3 |
| GN-M32-48-h3 | 「두 대각선이 평행사변형의 넓이를 4등분한다」는 중2 표준 성질이라 I-EQV 인정이 후한 편. 통찰형 ★2 로 두고 기록 | ★2(통찰형) / ★2(절차형) |
| GN-M32-49-03 | 정다각형을 중심각으로 분할하는 것을 I-SYM 통찰로 볼지 교과 표준 절차로 볼지. 통찰형 ★3 으로 두고 기록 | ★3 / ★2 |
| GN-M32-49-05 | 등변사다리꼴의 대각선 성질 환기 하나로 끝나고 계산은 한 줄. 진입 저항을 인정해 ★3 으로 두었으나 ★2 여지 있음 | ★3 / ★2 |

벤더 구역 신호와 2단 이상 어긋난 문항은 없다(모두 ±1 이내).

## 카탈로그 차원 메모

나중에 중3-2 유형 카탈로그를 만들 때 참고.

- **따로 세워야 할 유형**: ① 「두 변과 낀각 → 넓이」(도형만 다르고 골조가 같은 삼각형·평행사변형·마름모를 한 유형으로 묶되 도형별 계수 $\frac{1}{2}$·$1$·$1$ 을 소분류로) ② 「넓이 역산」(구하는 대상이 변이냐 각이냐로 두 소유형 — 각 역산은 T-범위 단서가 필수라 성격이 다르다) ③ 「다각형의 대각선 분할」(공유 변이 주어지는 경우 47-h2 와 스스로 구해야 하는 경우 47-c2 는 변별력이 달라 분리 권장) ④ 「두 대각선과 교각」(교각을 직접 주는 46-04, 각 추적으로 만드는 48-h4, 도형 성질로 나머지 대각선을 얻는 49-05 의 3단 계단이 그대로 ★1→★2→★3 이라 카탈로그의 난이도 척도로 쓰기 좋다) ⑤ 「정다각형의 넓이」(외접원 반지름 + 중심각 — 쓰이는 도구가 위 넷과 다르므로 독립 유형)
- **통합해도 될 유형**: 46-01(삼각형)·46-03(평행사변형)·49-04(마름모)는 공식의 계수만 다른 같은 유형. 47-c1·48-c3·48-c4·49-01·49-04 의 역산 5문도 「무엇을 미지수로 놓는가」만 다르므로 한 유형의 변형으로 묶을 수 있다.
- **★ 상한 메모**: 이 범위는 도구가 하나뿐이라 depth 2 이상의 통찰이 구조적으로 나오지 않는다. ★4 이상을 만들려면 49-02 처럼 **도형을 결합**하거나 49-03 처럼 **단원 밖 개념(원의 넓이·최댓값)**을 끌어와야 한다. 2/2 파트(중단원 마무리·서술형)에서 ★4 후보가 나올 자리다.
