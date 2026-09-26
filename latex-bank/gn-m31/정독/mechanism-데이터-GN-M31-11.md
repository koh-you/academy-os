---
name: mechanism-데이터-GN-M31-11
description: 개념원리 중학 3-1 11 이차방정식과 그 해(1/1 · 111~114쪽) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-1 · 전사본 latex-bank/gn-m31
  section: 11 이차방정식과 그 해
  unit_code: GN-M31-11
  part: "1/1"
  extract_range: "111~114쪽 · 111-01~114-05"
  total_problems: 17
  unit_total: 17
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m31/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m31/items/<id>.tex
  image_source: latex-bank/gn-m31/figures/ (crops.json)
---

# 개념원리 중학 3-1 · 11 이차방정식과 그 해 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 중학 3-1 의 중단원 **11 이차방정식과 그 해**(111~114쪽 · 17문항 전수)를 다룬다. 구역은 「개념원리 확인하기」 4문 · 「핵심문제 익히기」 8문(핵심문제 h 4 + 짝 확인문제 c 4) · 「이런 문제가 시험에 나온다」 5문이다. 이 범위에는 「계산력 강화하기」 구역이 없고, 그림 문항도 하나도 없다.

개념원리 중학은 난이도 level 표기가 없고 **구역 자체가 난이도 층**이다. 「개념원리 확인하기」는 정의 확인 드릴(★1), 「핵심문제 익히기」는 대표 유형 + 짝 확인문제(★2 출발), 「이런 문제가 시험에 나온다」는 시험 대비(★2~3)로 읽었다. 이 범위에는 「꼭나와」·「UP」 태그가 하나도 붙어 있지 않아 구역 신호만으로 출발점을 잡았다.

단원 내용이 ① 이차방정식의 뜻(정리했을 때 이차항이 남는가) ② 해의 뜻(대입하면 0이 되는가) ③ 한 근이 주어졌을 때 미지수 구하기 ④ 한 근이 문자로 주어졌을 때 식의 값, 네 축으로 좁아 절차형 비중이 높다. 통찰이 붙는 자리는 두 곳뿐이다. 하나는 **근을 직접 구하지 않고 방정식을 관계식으로 옮겨 식을 덩어리로 묶는 자리**(113-h4 · 113-c4 · 114-05)이고, 다른 하나는 **「이차방정식이다」라는 서술을 이차항 계수 조건으로 옮기는 자리**(114-02)다. 둘 다 I-EQV 이며 이 범위에 다른 통찰 유형은 나오지 않는다.

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M31-111-01
  page: 111
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑹ 주어진 여섯 개의 식이 x 에 대한 이차방정식인지 ○·× 로 판정.
  category: "이항·정리 → 이차항 계수가 0이 아닌 등식인지 판정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식의 뜻(정리 후 이차항 계수 판정)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    여섯 식을 모두 한쪽으로 이항해 정리한 뒤 이차항이 남는지만 본다. ⑵는 등식이 아니고, ⑷는 삼차항이 남으며, ⑸는 양변의 x^2 이 소거돼 일차가 된다.
    판정 기준이 한 가지뿐이고 각 소문항이 한 줄로 끝난다. 확인하기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "우변을 이항해 정리 → (이차항 계수) ≠ 0 인 등식이면 ○"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\bigcirc$ ⑵ $\times$ ⑶ $\bigcirc$ ⑷ $\times$ ⑸ $\times$ ⑹ $\bigcirc$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/111-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 식의 계수와 상수항을 자유롭게 바꿀 수 있다. 제약: ⑸처럼 양변의 x^2 이 소거되는 사례, ⑷처럼 삼차항이 남는 사례, ⑵처럼 등식이 아닌 사례를 각각 하나씩 남겨야 판정 연습이 된다."
    creative: "(1) ○× 대신 이차방정식인 것의 개수를 묻기(★1 유지) (2) 보기 ㄱ~ㄹ 로 묶어 모두 고르게 하기(★2 · 112-c1 골조) (3) 이차항 계수에 문자를 넣어 이차방정식이 되는 a 의 조건을 묻기(★3 · I-EQV · 114-02 골조)."
```

```yaml
- id: GN-M31-111-02
  page: 111
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑷ [ ] 안의 수가 주어진 이차방정식의 해인지 ○·× 로 판정.
  category: "주어진 수 대입 → 좌변이 0인지 확인"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식의 해(수를 대입해 확인)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    [ ] 안의 수를 대입해 좌변이 0인지만 확인하는 한 줄 판정 네 개다. 해를 직접 구하거나 인수분해할 필요가 없다.
    확인하기 구역·통찰 없음·M_total 4 → ★1. 「해」의 정의를 대입으로 확인시키는 것이 목적인 드릴.
  tier: star_1
  mechanism_primary: "[ ] 안의 수를 대입 → 좌변 값이 0이면 해"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\bigcirc$ ⑵ $\bigcirc$ ⑶ $\times$ ⑷ $\bigcirc$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/111-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "방정식의 계수와 [ ] 안의 수를 바꿀 수 있다. 제약: 대입값이 정수여야 암산 한 줄로 끝나고, 해인 것과 아닌 것이 섞여야 한다(현재 ○ 3 · × 1)."
    creative: "(1) 해인 것의 개수만 묻기(★1) (2) 5지선다로 바꿔 특정 수를 해로 갖는 것 하나를 고르게 하기(★2 · 112-h2 골조) (3) [ ] 안의 수를 해로 갖도록 하는 상수를 묻기(★2 · 113-h3 골조)."
```

```yaml
- id: GN-M31-111-03
  page: 111
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑵ x 의 값이 -1, 0, 1, 2 일 때 주어진 이차방정식 풀기(해가 여럿일 수 있음).
  category: "주어진 네 수를 차례로 대입 → 등식이 성립하는 값만 해"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "주어진 범위의 정수 중에서 이차방정식의 해 찾기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x 의 값이 네 개로 제한돼 있어 차례로 대입하면 끝난다. ⑴은 0 과 2 두 개가 모두 해이고, ⑵는 나머지 근 -3/2 가 주어진 값에 없어 x=1 하나만 남는다.
    「해가 하나라는 보장이 없다」는 점이 유일한 함정(T-범위)이다. 통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x = -1, 0, 1, 2 를 차례로 대입 → 등식이 성립하는 값을 모두 쓰기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=0$ 또는 $x=2$ ⑵ $x=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/111-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식의 계수와 주어진 정수 목록을 바꿀 수 있다. 제약: 목록 안에 해가 적어도 하나 있어야 하고, ⑵처럼 목록 밖 근이 하나 생기도록 두면 범위 제한의 의미가 살아난다. 해가 두 개인 소문항을 하나는 남긴다."
    creative: "(1) 목록 대신 부등식 범위로 주기(★2 · 114-03 골조) (2) 목록 안에 해가 없게 만들어 「해가 없다」를 답으로(★2) (3) 범위를 문자로 주고 해가 하나뿐일 조건을 묻기(★4 · I-BW)."
```

```yaml
- id: GN-M31-111-04
  page: 111
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    x^2+ax-15=0 의 한 근이 x=3 일 때 상수 a 를 구하는 과정의 빈칸 세 개 채우기.
  category: "한 근 대입 → a 에 대한 일차방정식 → a"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식의 한 근이 주어졌을 때 미지수의 값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x=3 을 대입해 9+3a-15=0 을 얻고 3a=6 으로 정리하는 과정이 이미 빈칸으로 안내돼 있어 학생이 판단할 자리가 없다.
    상수 a 가 들어가 M_a 는 2 지만 골조가 제시된 채움형이다. 확인하기 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "x=3 대입 → 9+3a-15=0 → 3a=6 → a=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$9$, $6$, $2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/111-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항과 주어진 근을 바꿀 수 있다. 제약: 대입하면 a 의 계수가 근 그대로이므로 (상수항 - 근^2)이 근의 배수여야 a 가 정수로 떨어진다."
    creative: "(1) 빈칸을 없애고 바로 a 를 묻기(★2 · 113-h3 골조) (2) a 를 x 계수와 상수항 두 자리에 넣어 동류항 정리를 추가(★2) (3) 두 방정식의 근을 각각 주고 a+b 를 묻기(★2 · 114-04 골조)."
```

### 핵심문제 익히기

```yaml
- id: GN-M31-112-h1
  page: 112
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    다섯 식 중 이차방정식이 아닌 것 두 개 고르기. 5지선다(정답 2개).
  category: "선지별 이항·정리 → 이차항이 남지 않는 것 고르기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식의 뜻(정리 후 이차항 계수 판정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ①은 등식이 아니고, ⑤는 우변을 전개하면 양변의 2x^2 이 소거돼 일차식이 된다. 나머지 셋은 정리하면 이차항이 남는다.
    선지 다섯 개를 모두 정리해야 해 M_s 가 올라가지만 판단 기준은 「정리 후 이차항 계수」 하나뿐이다. 핵심문제 구역 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "각 선지를 (좌변)=0 꼴로 정리 → 이차항 계수가 0이거나 등식이 아닌 것을 고름"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①, ⑤"
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/112-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "선지의 계수와 분수 계수를 바꿀 수 있다. 제약: 정답이 정확히 두 개여야 하고, 「등식이 아님」 1개와 「정리하면 이차항 소거」 1개를 각각 배치해야 문항의 두 축이 유지된다."
    creative: "(1) 이차방정식인 것을 고르게 뒤집기(★2) (2) 보기 ㄱ~ㄹ 형태로 바꾸기(★2 · 112-c1) (3) 선지에 문자 계수를 섞어 이차방정식이 되는 조건까지 묻기(★3 · 114-02 골조)."
```

```yaml
- id: GN-M31-112-c1
  page: 112
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    보기 ㄱ~ㄹ 중 이차방정식인 것 모두 고르기.
  category: "분모 정리·이항 → 이차항 계수가 0이 아닌 것만 고르기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식의 뜻(정리 후 이차항 계수 판정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄴ은 전개하면 양변의 x^2 이 소거돼 일차가 되고, ㄷ은 분모 3을 없애면 이차식이 남으며, ㄹ은 우변의 -x^2 을 이항하면 이차항 계수가 2가 된다.
    112-h1 과 같은 판정 골조의 짝 문항이고 분모 처리 한 단계가 더 있다. 핵심문제 구역 ★2.
  tier: star_2
  mechanism_primary: "분모를 없애고 이항해 정리 → 이차항 계수가 0이 아닌 보기만 고름"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄷ, ㄹ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/112-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 보기의 계수와 ㄷ의 분모를 바꿀 수 있다. 제약: 분모가 있는 보기 1개와 양변에서 x^2 이 소거되는 보기 1개는 남겨 둔다."
    creative: "(1) 이차방정식이 아닌 것을 고르게 뒤집기(★2) (2) 보기에 삼차식을 넣어 차수 판정을 추가(★2 · 114-01 골조) (3) 이차항 계수를 문자로 두고 조건까지 묻기(★3)."
```

```yaml
- id: GN-M31-112-h2
  page: 112
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    다섯 개의 이차방정식 중 x=-2 를 해로 갖는 것 고르기. 5지선다.
  category: "선지에 x=-2 대입 → 좌변이 0이 되는 것 고르기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식의 해(수를 대입해 확인)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    선지 다섯 개에 x=-2 를 차례로 대입해 좌변이 0인지만 본다. 각 선지를 인수분해해 해를 구할 수도 있지만 대입이 훨씬 빠르고, 답지도 대입을 표준으로 잡는다.
    판단 갈래가 아니라 도구 선택이 자명해 I-SC 는 붙이지 않았다. 핵심문제 구역·통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "각 선지에 x=-2 대입 → 좌변 값이 0인 것"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/112-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대입값과 각 선지의 계수를 바꿀 수 있다. 제약: 답이 하나여야 하므로 나머지 네 선지는 그 값을 해로 갖지 않는지 확인해 배치한다. 대입값이 음수면 부호 처리가 한 번 더 생긴다."
    creative: "(1) 정답 2개형으로 바꾸기(★2 · 112-c2) (2) 선지마다 다른 대입값을 붙이기(★2 · 112-c2 골조) (3) x=-2 를 해로 갖도록 하는 상수 a 를 묻기(★2 · 113-h3 골조)."
```

```yaml
- id: GN-M31-112-c2
  page: 112
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    다섯 선지에서 [ ] 안의 수가 그 이차방정식의 해인 것 두 개 고르기. 5지선다(정답 2개).
  category: "선지마다 딸린 수를 대입 → 좌변이 0인 것 고르기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식의 해(수를 대입해 확인)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    선지마다 대입값이 달라 다섯 번 대입해야 하지만 각 판정은 한 줄이다. 112-h2 의 짝 문항으로 대입 확인 골조가 같고, 정답 2개형이라 끝까지 다 확인해야 한다.
    통찰 없음·M_total 5 → 핵심문제 구역 ★2.
  tier: star_2
  mechanism_primary: "선지마다 [ ] 안의 수를 대입 → 좌변이 0인 두 개를 고름"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②, ④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/112-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "선지의 계수와 [ ] 안의 수를 바꿀 수 있다. 제약: 정답이 정확히 두 개가 되게 맞추고, 대입값은 정수나 분모가 작은 분수로 둔다."
    creative: "(1) 해가 아닌 것을 고르게 뒤집기(★2) (2) 대입값을 분수로 통일해 계산 부담만 올리기(★2 · M_k +1 · 질 저하 주의) (3) 각 선지의 한 근을 주고 미지수를 구하게 하기(★2 · 113-h3 골조)."
```

```yaml
- id: GN-M31-113-h3
  page: 113
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    2x^2+ax-(a+1)=0 의 한 근이 x=2 일 때 상수 a 의 값.
  category: "한 근 대입 → a 에 대한 일차방정식 정리 → a"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식의 한 근이 주어졌을 때 미지수의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=2 를 대입하면 8+2a-(a+1)=0 이고, a 가 x 계수와 상수항 두 자리에 들어 있어 동류항을 모아야 a+7=0 이 나온다.
    대입 한 번·정리 한 줄이라 통찰은 없지만 111-04 의 채움형보다 한 단계 위다. 핵심문제 구역 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "x=2 대입 → 8+2a-(a+1)=0 → a+7=0 → a=-7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-7$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/113-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항 계수·근·a 가 붙는 자리를 바꿀 수 있다. 제약: 대입 후 a 의 계수가 0이 되면 a 를 구할 수 없으므로 (근 - 1) 처럼 0 이 되는 조합을 피한다. 근이 정수면 한 줄로 끝난다."
    creative: "(1) a 를 상수항에만 두면 확인하기 수준으로 내려감(★1) (2) 두 방정식을 주고 a-b 를 묻기(★2 · 113-c3) (3) a 를 구한 뒤 나머지 한 근까지 묻게 하면 인수분해가 붙어 ★3."
```

```yaml
- id: GN-M31-113-c3
  page: 113
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    x^2-2x+a=0 의 한 근이 x=-1, 3x^2-bx-4=0 의 한 근이 x=4/3 일 때 a-b 의 값.
  category: "두 방정식에 각각 근 대입 → a, b → a-b"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 이차방정식의 한 근이 주어졌을 때 미지수의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 조건이 서로 독립이라 각각 대입해 a, b 를 따로 구한 뒤 빼면 된다. 조건을 묶을 자리가 없어 I-CON 은 붙지 않는다.
    두 번째 대입이 분수 근이라 계산이 한 단계 무겁지만 판단할 자리는 없다. 통찰 없음·M_total 7 → 핵심문제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "x=-1 대입 → a · x=4/3 대입 → b · 두 값을 빼기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/113-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 방정식의 계수와 근을 바꿀 수 있다. 제약: 분수 근을 쓰려면 이차항 계수가 그 분모의 제곱을 약분해야 a, b 가 정수로 떨어진다(여기서는 계수 3 과 근 4/3). 묻는 식은 a-b · a+b · ab 로 바꿔도 된다."
    creative: "(1) a+b 를 묻기(★2 · 114-04) (2) 두 방정식이 공통근을 갖도록 조건을 묶으면 I-CON 이 붙어 ★3 (3) a, b 를 각각 묻지 않고 관계식만 주면 M_a 가 올라 ★3."
```

```yaml
- id: GN-M31-113-h4
  page: 113
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    x^2-5x+1=0 의 한 근을 α 라 할 때 ⑴ α^2-5α+5 ⑵ 5α-α^2-3 ⑶ 3α^2-15α ⑷ α+1/α 의 값.
  category: "근을 대입한 관계식 α^2-5α=-1 로 묶어 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "근 α 를 직접 구하지 않고 α^2-5α=-1 이라는 관계식으로 옮겨 ⑴~⑶ 의 식을 그 덩어리로 묶어 대입"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑷ 는 덩어리가 보이지 않아 α^2+1=5α 의 양변을 α(≠0)로 나눠 α+1/α 꼴을 직접 만들어야 함"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "이차방정식의 한 근이 문자로 주어졌을 때 식의 값 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    근을 실제로 구하면 무리수라 계산이 막히고, α^2-5α=-1 로 묶어야 ⑴~⑶ 이 한 줄로 끝난다. ⑵는 부호를 뒤집고 ⑶은 3배를 맞추는 정도의 응용이다.
    ⑷ 는 같은 덩어리가 보이지 않아 양변을 α 로 나누는 별도의 착안이 필요하다. 묶어 대입(I-EQV d1) + α 로 나누기(I-EQV d2) 통찰 2개 → 핵심문제 출발점 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "α^2-5α=-1 로 묶어 대입 → ⑷ 는 α^2+1=5α 를 α 로 나눠 α+1/α"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $4$ ⑵ $-2$ ⑶ $-3$ ⑷ $5$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/113-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 계수·상수항과 각 소문항의 덧붙인 수·배수를 바꿀 수 있다. 제약: ⑷ 가 성립하려면 상수항이 0이 아니어야 하고(α≠0), α+1/α 의 값은 (x 계수)/(상수항) 이므로 상수항이 1이면 x 계수와 같아진다. ⑴~⑶ 의 이차·일차 계수비는 원 방정식과 같게 유지해야 덩어리가 보인다."
    creative: "(1) ⑷ 를 α-1/α 로 바꾸기(★3 · 113-c4) (2) α^3 까지 올려 관계식을 두 번 쓰게 하기(★4) (3) 두 방정식의 근 m, n 을 함께 주기(★3 · 114-05) (4) ⑴~⑶ 만 남기면 통찰 1개로 ★2 로 내려간다."
```

```yaml
- id: GN-M31-113-c4
  page: 113
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    x^2+3x-1=0 의 한 근을 α 라 할 때 ⑴ α^2+3α-5 ⑵ -α^2-3α+8 ⑶ 2α^2+6α ⑷ α-1/α 의 값.
  category: "근을 대입한 관계식 α^2+3α=1 로 묶어 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "근을 구하지 않고 α^2+3α=1 로 옮겨 ⑴~⑶ 을 덩어리 대입으로 처리(⑵는 부호 반전·⑶은 2배 맞추기)"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑷ 는 α^2-1=-3α 의 양변을 α(≠0)로 나눠 α-1/α 꼴을 만들어야 값이 나옴"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "이차방정식의 한 근이 문자로 주어졌을 때 식의 값 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    113-h4 의 짝 문항. α^2+3α=1 로 묶으면 ⑴~⑶ 이 한 줄이고, ⑵의 부호 뒤집기와 ⑶의 2배 맞추기가 덩어리를 바로 보이지 않게 만든다.
    상수항이 -1 이라 ⑷ 는 α^2-1=-3α 를 α 로 나눠 α-1/α 꼴이 된다(h4 의 + 꼴과 부호가 다른 자리). 통찰 2개 → ★3.
  tier: star_3
  mechanism_primary: "α^2+3α=1 로 묶어 대입 → ⑷ 는 α^2-1=-3α 를 α 로 나눠 α-1/α"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $-4$ ⑵ $7$ ⑶ $2$ ⑷ $-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/113-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 계수·상수항과 ⑶ 의 배수를 바꿀 수 있다. 제약: 상수항 부호가 -1 이라 ⑷ 가 α-1/α 꼴이 된다. 상수항을 +1 로 바꾸면 ⑷ 는 α+1/α 꼴로 바뀌므로 소문항 표현도 함께 고쳐야 한다."
    creative: "(1) ⑶ 의 배수를 3·4 로 올려 계수 맞추기 부담을 키우기(★3) (2) ⑵ 처럼 부호를 뒤집은 식을 하나 더 넣기(★3) (3) α^2+1/α^2 을 추가하면 (α-1/α)^2 을 거쳐야 해 ★4."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M31-114-01
  page: 114
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    다섯 식 중 이차방정식이 아닌 것 고르기. 5지선다.
  category: "이항·정리 → 남는 최고차항이 이차인지 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식의 뜻(정리 후 이차항 계수 판정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑤ 는 우변을 전개하면 양변의 x^2 이 소거돼 일차가 되고, ④ 는 삼차처럼 보이지만 양변의 x^3 이 소거돼 이차가 남는다.
    「차수가 높아 보이는 것이 오히려 이차방정식」이라는 자리가 이 문항의 초점이다. 통찰 없음·M_total 5 → 시험 구역 출발점(★2~3)의 하한 ★2.
  tier: star_2
  mechanism_primary: "각 선지를 이항·정리 → 남는 최고차항이 이차가 아닌 것을 고름"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/114-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "선지의 차수와 계수를 바꿀 수 있다. 제약: ④ 처럼 삼차항이 소거되는 함정과 ⑤ 처럼 이차항이 소거되는 함정을 각각 하나씩 유지해야 한다."
    creative: "(1) 이차방정식인 것을 고르게 뒤집기(★2) (2) 정답 2개형(★2 · 112-h1) (3) 선지 하나에 문자 계수를 넣어 조건까지 묻기(★3 · 114-02)."
```

```yaml
- id: GN-M31-114-02
  page: 114
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    ax^2-x+3=3x^2-8x+4 가 x 에 대한 이차방정식일 때 상수 a 의 값이 될 수 없는 것 고르기. 5지선다.
  category: "한쪽으로 정리 → 이차항 계수 (a-3) ≠ 0 → 제외되는 a"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「이차방정식이다」라는 서술을 「정리했을 때 이차항 계수가 0이 아니다」로 옮겨 a-3 ≠ 0 을 세움 — a ≠ 0 이 아니라는 자리"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차방정식이 되기 위한 계수 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    우변을 이항하면 (a-3)x^2+7x-1=0 이므로 조건은 a ≠ 0 이 아니라 a ≠ 3 이다. 선지 ③ 의 0 이 바로 그 오답을 받으려고 놓인 자리다.
    서술을 계수 조건으로 옮기는 동치 변환(I-EQV d1)이 문항의 전부이고, 옮기고 나면 계산은 없다. 시험 구역 출발점 ★2~3 에서 통찰이 붙어 ★3.
  tier: star_3
  mechanism_primary: "양변 정리 → (a-3)x^2+7x-1=0 → a-3 ≠ 0 → a=3 제외"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/114-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양변의 이차항 계수와 나머지 항을 바꿀 수 있다. 제약: 제외되는 값(여기서는 우변 이차항 계수 3)이 선지에 반드시 있어야 하고, 학생이 착각하는 0 도 선지에 남겨야 함정이 작동한다."
    creative: "(1) 「될 수 있는 것」으로 뒤집기(★3) (2) 일차방정식이 되도록 하는 a 를 묻기(★3 · 같은 골조) (3) a 를 양변 모두에 넣어 조건이 둘 생기게 하기(★4) (4) 조건을 없애고 단순 판별로 바꾸면 통찰이 사라져 ★2(114-01)."
```

```yaml
- id: GN-M31-114-03
  page: 114
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    x 가 -1 ≤ x ≤ 1 인 정수일 때 2x^2+5x-7=0 의 해 구하기.
  category: "범위 안 정수 -1, 0, 1 대입 → 등식이 성립하는 값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "주어진 범위의 정수 중에서 이차방정식의 해 찾기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    범위 안 정수가 -1, 0, 1 셋뿐이라 차례로 대입하면 x=1 하나가 남는다. 인수분해하면 다른 근이 나오지만 정수도 아니고 범위 밖이라 애초에 따질 일이 없다.
    범위를 정수 목록으로 바꾸는 한 단계가 있을 뿐 판단할 자리는 없다(T-범위 1). [분류 이슈] 구역 신호는 ★2~3 이나 골조·M_total 4 는 111-03(확인하기 ★1)과 같아 구역 하한 ★2 로만 둔다.
  tier: star_2
  mechanism_primary: "범위 안 정수 x=-1, 0, 1 대입 → 등식이 성립하는 x=1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/114-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식의 계수와 범위를 바꿀 수 있다. 제약: 범위 안 정수 중 정확히 하나가 근이 되도록 계수 합을 맞춰야 하고(여기서는 2+5-7=0), 다른 근은 범위 밖 비정수로 두는 편이 함정이 산다."
    creative: "(1) 범위를 넓혀 해가 둘이 되게 하기(★2) (2) 범위 안에 해가 없게 만들어 「해가 없다」를 답으로(★2) (3) 범위를 문자로 주고 해가 하나뿐일 조건을 묻기(★4 · I-BW) (4) 정수 조건을 빼면 인수분해 단원 문항이 된다."
```

```yaml
- id: GN-M31-114-04
  page: 114
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    6x^2-13x+a=0 의 한 근이 x=3/2, 4x^2+bx-3=0 의 한 근이 x=-1/2 일 때 a+b 의 값.
  category: "두 방정식에 각각 분수 근 대입 → a, b → a+b"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 이차방정식의 한 근이 주어졌을 때 미지수의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 조건이 독립이라 각각 대입해 a, b 를 따로 구한 뒤 더한다. 113-c3 과 같은 골조이고 분수 근을 두 번 대입하는 만큼 계산만 무겁다.
    계산 부담은 변별 신호로 쓰지 않는다(§Mₖ 가이드). 통찰 없음 → 시험 구역 하한 ★2.
  tier: star_2
  mechanism_primary: "x=3/2 대입 → a · x=-1/2 대입 → b · 두 값을 더하기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/114-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 방정식의 계수와 분수 근을 바꿀 수 있다. 제약: 이차항 계수가 근의 분모 제곱을 약분해야 a, b 가 정수로 떨어진다(6 과 3/2 · 4 와 -1/2). 묻는 식은 a+b · a-b · ab 중 어느 것이어도 된다."
    creative: "(1) a-b 를 묻기(★2 · 113-c3) (2) 두 방정식이 공통근을 갖게 묶으면 ★3 (3) a, b 를 구한 뒤 나머지 근까지 묻게 하면 인수분해가 붙어 ★3 (4) 한 방정식만 남기면 ★2 하한(113-h3)."
```

```yaml
- id: GN-M31-114-05
  page: 114
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    3x^2-7x+3=0 의 한 근이 x=m, x^2-2x-4=0 의 한 근이 x=n 일 때 3m^2-7m+2n^2-4n 의 값.
  category: "두 관계식 3m^2-7m=-3, n^2-2n=4 로 묶어 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "m, n 을 직접 구하지 않고 각 방정식을 3m^2-7m=-3, n^2-2n=4 로 옮겨 묻는 식을 덩어리 둘로 봄"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "2n^2-4n 은 그대로는 덩어리가 아니고 2(n^2-2n) 으로 계수를 맞춰 묶어야 값이 나옴"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "한 근이 문자로 주어진 두 이차방정식의 식의 값 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 근 모두 직접 구하기 어려워 각 방정식을 관계식으로 옮겨 묶는 것이 유일한 길이다. 앞의 3m^2-7m 은 좌변과 계수가 같아 바로 보이지만, 뒤의 2n^2-4n 은 2(n^2-2n) 으로 계수를 맞춰야 보인다.
    113-h4·113-c4 의 묶어 대입 골조를 두 방정식으로 겹친 형태다. 통찰 2개(I-EQV d1 + d2) → 시험 구역 출발점에서 ★3.
  tier: star_3
  mechanism_primary: "3m^2-7m=-3 · 2n^2-4n=2(n^2-2n) → 두 값을 더하기"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/114-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 방정식의 계수와 묶는 배수를 바꿀 수 있다. 제약: 묻는 식의 앞부분은 첫 방정식 좌변과 이차·일차 계수비가 같아야 하고, 뒷부분은 둘째 방정식 좌변의 정수배여야 한다. 답은 두 상수항으로 조절한다."
    creative: "(1) 배수를 3배·-1배로 바꾸기(★3 유지) (2) 한쪽 계수를 일부러 어긋나게 해 남는 항이 생기면 근을 따로 다뤄야 해 ★4 (3) m+1/m 항을 섞으면 113-h4 ⑷ 골조가 겹쳐 ★4 (4) 방정식을 하나만 쓰면 통찰 1개로 ★2."
```

## 표본 판정 요약 (17문)

- ★ 분포: ★1 4 · ★2 9 · ★3 4 · ★4 0 · ★5 0
- 통찰형 4 · 절차형 13 · premium 0
- 구역별: 「개념원리 확인하기」 4(★1 4) · 「핵심문제 익히기」 8(★2 6 · ★3 2) · 「이런 문제가 시험에 나온다」 5(★2 3 · ★3 2)
- 통찰 유형: **I-EQV 7개뿐**(113-h4 2 · 113-c4 2 · 114-02 1 · 114-05 2). I-XU·I-SC·I-VF·I-SYM 은 이 범위에 하나도 없어 ★4·★5 자격 문항이 없다.
- type_hint 상위: 「이차방정식의 뜻(정리 후 이차항 계수 판정)」 4 · 「이차방정식의 해(수를 대입해 확인)」 3 · 「두 이차방정식의 한 근 → 미지수」 2 · 「한 근이 문자로 주어졌을 때 식의 값」 2 · 「주어진 범위의 정수 중 해 찾기」 2
- 그림: 없음(17문 전부 `figure: none`)
- 대상층: 하위권 3 · 중하위권 10 · 중위권 4

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M31-114-03 | 「이런 문제가 시험에 나온다」(★2~3) 구역이나 골조·M_total 4·통찰 0 이 확인하기 구역의 111-03(★1)과 같다. 구역 하한 ★2 로 두고 기록 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 type_hint 는 네 갈래다. ① 이차방정식의 뜻(정리 후 이차항 계수 판정) 4문 ② 수를 대입해 해인지 확인 3문 ③ 한 근이 주어졌을 때 미지수 구하기 4문(한 방정식 2 · 두 방정식 2) ④ 한 근이 문자로 주어졌을 때 식의 값 3문.
- **따로 세워야 할 유형 — 「이차방정식이 되기 위한 계수 조건」(114-02)**: ①과 도구는 같지만 묻는 방향이 역(조건 → 계수)이고 이 범위에서 유일하게 단독 통찰이 붙는다. ①에 흡수하면 ★3 변별 슬롯이 사라진다.
- **따로 세워야 할 유형 — α+1/α · α-1/α 소문항(113-h4 ⑷ · 113-c4 ⑷)**: 앞의 ⑴~⑶(덩어리 묶어 대입)과 착안이 달라(양변을 α 로 나누기) base ★ 를 나눠 잡는 편이 낫다. 114-05 의 「계수 맞춰 묶기」도 같은 층으로 묶을 수 있다.
- **통합해도 될 유형 — ③의 한 방정식(113-h3)과 두 방정식(113-c3 · 114-04)**: 대입 횟수와 분수 근 여부만 다르므로 한 유형 + 계산 부담 변형으로 둬도 된다.
- **통합해도 될 유형 — 「주어진 범위의 정수 중 해 찾기」(111-03 · 114-03)**: 범위가 값 목록이냐 부등식이냐만 다르다.
- **h/c 짝 구조**: 개념원리 중학은 핵심문제(h)와 짝 확인문제(c)가 같은 유형의 쌍이라 type_hint 가 항상 둘씩 나온다. 카탈로그에서는 한 유형에 대표문항 2개(h·c)를 묶는 편이 자연스럽다.
