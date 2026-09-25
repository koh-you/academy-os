---
name: mechanism-데이터-GN-CM1-13
description: 개념원리 공통수학1 13 이차방정식(1/1 · 106~111쪽 · 16문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1 (22개정) · 전사본 latex-bank/gn-cm1
  section: 13 이차방정식
  unit_code: CM1-13
  part: "1/1"
  extract_range: "106~111쪽 · 106-209~111-219"
  total_problems: 16
  unit_total: 16
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·예제 태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 가 비어 있으면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (crops.json)
---

# 개념원리 공통수학1 · 13 이차방정식 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학1 13단원 「이차방정식」 106~111쪽의 16문항 전수를 다룬다. 구역은 전사본 group 순서대로 「개념원리 익히기」(2문 · 인수분해와 근의 공식으로 푸는 기본 연습) · 「필수·발전 예제」(13문 · `쪽-eN` 필수 예제와 그 유제인 확인체크가 번갈아 배치) · 「특강」(1문 · 가우스 기호 방정식)이다.

벤더 난이도 신호는 구역과 예제 태그로 읽는다. 「개념원리 익히기」 통번호는 개념 확인이라 ★1 출발, 「필수」 태그 예제와 그 확인체크 유제는 ★2 출발, 「특강」의 확인체크는 교육과정 심화라 ★3 출발로 두고 M_total·통찰로 ±1 조정했다. 이 단원에는 level 필드와 기출 태그가 없어 vendor_level 은 모두 `-` 다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다. 답은 전사·검수 단계에서 답지와 이미 대조된 값을 그대로 옮겼고, 정독에서 재검산하지 않았다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM1-106-209
  page: 106
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑹ 인수분해를 이용해 이차방정식을 푸는 기본 연습. 공통인수·정수계수 인수분해·완전제곱(중근)·분수계수 정리까지 여섯 꼴.
  category: "이차방정식 → 인수분해 → AB=0 꼴로 해 구하기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "인수분해를 이용한 이차방정식의 풀이"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각 소문항이 인수분해 한 번 → AB=0 두 해로 끝난다. ⑸ 완전제곱의 중근 표기와 ⑹ 분모 정리가 유일한 주의점(T-표기).
    통찰 0 · M_total 4 · 개념원리 익히기 구역 → ★1.
  tier: star_1
  mechanism_primary: "이차방정식 → 인수분해 → AB=0 에서 두 근(중근이면 하나)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=0$ 또는 $x=3$ ⑵ $x=2$ 또는 $x=3$ ⑶ $x=-1$ 또는 $x=\dfrac{3}{2}$ ⑷ $x=-2$ 또는 $x=\dfrac{1}{3}$ ⑸ $x=\dfrac{1}{2}$ (중근) ⑹ $x=1$ 또는 $x=2$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-cm1/items/106-209.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수와 상수항을 자유롭게. 제약: 정수 범위에서 인수분해되도록 두 근을 먼저 잡고 전개해서 만든다(근의 곱·합이 정수). 중근 소문항은 판별식 0 을 유지해야 하고, 분수계수 소문항은 분모의 최소공배수를 곱했을 때 정수계수가 되게."
    creative: "(1) 근 두 개를 주고 방정식을 거꾸로 만들게 하면 I-BW 한 단계 추가 ★2 (2) 인수분해되지 않는 계수를 섞어 근의 공식 병행 판단을 요구하면 ★2 (3) 「중근을 갖는 것을 모두 고르시오」로 바꾸면 판별식 개념과 묶여 ★2."
```

```yaml
- id: GN-CM1-106-210
  page: 106
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑹ 근의 공식으로 이차방정식을 풀고 실근인지 허근인지 구분. 무리수 계수(⑹ $4x^2-2\sqrt{3}x-1=0$)까지 포함.
  category: "근의 공식 대입 → 근호 안 부호로 실근·허근 판정"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근의 공식을 이용한 이차방정식의 풀이와 실근·허근 구분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입 한 번이면 끝나지만 $b^2-4ac$ 계산이 여섯 번이고 ⑹ 은 짝수 공식·무리수 계수라 Mₖ=2.
    허근을 $i$ 로 쓰는 표기와 근호 정리가 유일한 함정. 통찰 0 · 개념원리 익히기 → ★1.
  tier: star_1
  mechanism_primary: "$a,b,c$ 확인 → 근의 공식 대입 → $b^2-4ac$ 의 부호로 실근·허근 판정"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=\dfrac{7\pm\sqrt{17}}{4}$, 실근 ⑵ $x=\dfrac{3\pm\sqrt{7}\,i}{2}$, 허근 ⑶ $x=\dfrac{-1\pm\sqrt{7}\,i}{4}$, 허근 ⑷ $x=\dfrac{-2\pm\sqrt{10}}{3}$, 실근 ⑸ $x=\dfrac{1\pm\sqrt{2}\,i}{3}$, 허근 ⑹ $x=\dfrac{\sqrt{3}\pm\sqrt{7}}{4}$, 실근'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/106-210.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$a,b,c$ 를 바꾸되 실근·허근이 섞이게 $b^2-4ac$ 의 부호를 미리 설계한다. 제약: 근호 안이 제곱수면 인수분해 문제가 되므로 무리수로 남게, 분모 약분이 지저분하지 않게 $2a$ 와 분자의 공약수를 확인."
    creative: "(1) 판별식만 묻고 근은 묻지 않으면 ★1 유지·계산 부담만 감소 (2) 계수에 문자 $k$ 를 넣어 「허근을 갖도록 하는 $k$ 의 값의 범위」로 바꾸면 I-BW 한 단계 ★2~3 (3) 무리수 계수 소문항만 모아 유리화까지 요구하면 ★2."
```

### 필수·발전 예제

```yaml
- id: GN-CM1-107-e1
  page: 107
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴⑵ 전개·통분으로 정리해야 이차방정식 꼴이 되는 방정식 풀기. ⑵ 는 정리 후 판별식이 음수라 허근.
  category: "전개·통분 → $ax^2+bx+c=0$ 정리 → 인수분해 또는 근의 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정리하여 푸는 이차방정식(전개·분모 정리 후 풀이)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양변을 전개하거나 분모의 최소공배수를 곱해 표준 꼴로 옮기는 단계가 추가될 뿐 도구는 인수분해·근의 공식 그대로다.
    이항 부호 실수(T-부호)가 주 함정. 통찰 0 이지만 M_total 6 이라 감점 없이 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "전개·통분으로 표준 이차방정식으로 정리 → 인수분해되면 인수분해, 안 되면 근의 공식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x=-1$ 또는 $x=10$ ⑵ $x=-2\pm\sqrt{5}\,i$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/107-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안 계수와 분모(2,3 → 3,4 등)를 바꿀 수 있다. 제약: 정리 뒤 이차항이 사라지지 않도록 양변의 $x^2$ 계수가 서로 달라야 하고, 한 소문항은 인수분해·다른 하나는 허근이 되게 판별식 부호를 설계."
    creative: "(1) 소수·분수 계수를 섞어 정리 단계만 늘리면 ★2 유지(질은 떨어짐) (2) 정리했을 때 $x^2$ 계수가 0 이 되어 일차방정식이 되는 함정을 넣으면 I-VF 한 단계 ★3 (3) 「실근을 가질 조건」을 덧붙이면 판별식 단원과 묶여 ★3."
```

```yaml
- id: GN-CM1-107-e2
  page: 107
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    이차항의 계수가 무리수인 이차방정식 $(\sqrt{2}-1)x^2-(\sqrt{2}+1)x+2=0$ 풀기.
  category: "켤레 곱 유리화 → 유리계수 이차방정식 → 인수분해"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "양변에 $\\sqrt{2}+1$ 을 곱해 이차항 계수를 1 로 만드는 동치 변환(근의 공식에 무리수를 그대로 넣지 않는다)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차항의 계수가 무리수인 이차방정식(켤레 곱 유리화)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    근의 공식을 바로 쓰면 무리수의 제곱과 이중근호로 막힌다. 켤레수를 곱해 $x^2-(3+2\sqrt{2})x+2\sqrt{2}+2=0$ 으로 옮기면 인수분해가 보인다.
    계수의 합이 0 이라 $x=1$ 이 근임을 알아채는 지름길도 있다. 통찰 1개(EQV d1) · M_total 6 → 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "양변 × 켤레수 → 유리계수 이차방정식 → 인수분해로 두 근"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$x=1$ 또는 $x=2\sqrt{2}+2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/107-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "무리수를 $\\sqrt{3},\\sqrt{5}$ 나 $2+\\sqrt{3}$ 꼴로 바꿀 수 있다. 제약: 켤레를 곱한 뒤 계수가 정리되도록 $(\\sqrt{a}-1)(\\sqrt{a}+1)=a-1$ 이 간단해야 하고, 유리화 후 인수분해되도록 두 근을 먼저 잡고 역으로 계수를 만든다."
    creative: "(1) 계수의 합이 0 이 되도록 유지해 $x=1$ 을 숨은 근으로 두면 지름길 발견형 ★2~3(I-SC 추가) (2) 상수항까지 무리수로 만들어 유리화 후에도 근의 공식을 쓰게 하면 ★3 (3) 두 근의 합·곱을 묻는 근과 계수의 관계 문제로 바꾸면 골조가 달라져 ★2."
```

```yaml
- id: GN-CM1-107-211
  page: 107
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴⑵ 전개·통분해 정리한 뒤 푸는 이차방정식. ⑴ 은 허근, ⑵ 는 정수근.
  category: "전개·통분 → 표준 꼴 정리 → 근의 공식 또는 인수분해"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정리하여 푸는 이차방정식(전개·분모 정리 후 풀이)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    107-e1 의 유제로 골조가 같다. ⑴ 은 $2x^2+4x+3=0$ 으로 정리돼 허근, ⑵ 는 분모 2·5 를 없애면 $x^2-5x+4=0$.
    통찰 0 · M_total 6 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "전개·통분으로 표준 이차방정식 정리 → 판별식 부호에 따라 인수분해 또는 근의 공식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x=\dfrac{-2\pm\sqrt{2}\,i}{2}$ ⑵ $x=1$ 또는 $x=4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/107-211.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 밖 계수(3)와 분모(5,2)를 바꿀 수 있다. 제약: 정리 후 이차항이 남아야 하고, 허근 소문항은 판별식이 음수·정수근 소문항은 완전제곱수가 되도록 미리 설계."
    creative: "(1) 분모에 문자를 넣어 「해가 존재하지 않을 조건」으로 바꾸면 I-BW ★3 (2) 정리 후 $x$ 계수가 0 이 되게 해 $x^2=k$ 꼴로 만들면 ★1~2 (3) 두 소문항의 해를 비교해 공통근을 묻는 문제로 묶으면 ★3."
```

```yaml
- id: GN-CM1-107-212
  page: 107
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    이차항의 계수가 무리수인 이차방정식 $(2+\sqrt{3})x^2-(3+\sqrt{3})x+1=0$ 풀기.
  category: "켤레 곱 유리화 → 유리·무리 계수 정리 → 인수분해"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "양변에 $2-\\sqrt{3}$ 을 곱해 이차항 계수를 1 로 만드는 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차항의 계수가 무리수인 이차방정식(켤레 곱 유리화)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    107-e2 의 유제. $(2+\sqrt{3})(2-\sqrt{3})=1$ 이라 켤레를 곱하면 계수가 깔끔해진다.
    여기서도 계수의 합이 0 이라 $x=1$ 이 근이고 나머지 근은 근과 계수의 관계로 바로 나온다. 통찰 1개(EQV d1) → ★2.
  tier: star_2
  mechanism_primary: "양변 × 켤레수 → $x^2-(3-\\sqrt{3})x+2-\\sqrt{3}=0$ → 인수분해로 두 근"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$x=1$ 또는 $x=2-\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/107-212.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$2\\pm\\sqrt{3}$ 을 $3\\pm\\sqrt{5}$ · $\\sqrt{5}\\pm 2$ 처럼 곱이 ±1 인 켤레쌍으로 바꾼다. 제약: 켤레의 곱이 간단해야 유리화 뒤 계수가 지저분해지지 않고, 인수분해되도록 두 근을 먼저 잡는다."
    creative: "(1) 유리화 대신 근의 공식을 강요하도록 계수의 합을 0 이 아니게 하면 이중근호 정리까지 ★3 (2) 두 근의 곱이 유리수임을 묻는 형태로 바꾸면 근과 계수의 관계와 묶여 ★2 (3) 계수를 $k+\\sqrt{3}$ 로 두고 한 근이 1 이 되게 하는 $k$ 를 묻는 역문제 ★3(I-BW)."
```

```yaml
- id: GN-CM1-108-e3
  page: 108
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $(a-1)x^2-(a^2-1)x+2(a-1)=0$ 의 한 근이 1 일 때 상수 $a$ 를 정하고, 그 값으로 만든 $x^2-2x+a^2=0$ 의 해 구하기.
  category: "한 근 대입 → $a$ 후보 → 이차방정식 조건으로 기각 → 새 방정식 풀이"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "대입에서 나온 $a=1$, $a=2$ 중 $a=1$ 은 이차항 계수 $a-1=0$ 이라 이차방정식이 아니므로 기각 — 이 검증을 빠뜨리면 틀린 해에 도달"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "한 근이 주어진 이차방정식에서 미정계수 구하기(이차항 계수 조건 확인)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x=1$ 대입하면 $(a-1)(2-a)=0$ 으로 인수분해돼 후보가 둘 나오고, 「$x$ 에 대한 이차방정식」이라는 전제가 $a=1$ 을 기각한다.
    남은 $a=2$ 로 $x^2-2x+4=0$ 을 풀면 허근. 통찰 1개(VF d2) · M_total 7 → 필수 예제 ★2 유지.
  tier: star_2
  mechanism_primary: "한 근 대입 → $a$ 후보 → 이차항 계수 ≠ 0 으로 기각 → 확정된 $a$ 로 두 번째 방정식 풀이"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$x=1\pm\sqrt{3}\,i$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/108-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 근(1 → -1, 2)과 두 번째 방정식의 계수를 바꾼다. 제약: 대입 결과가 $a$ 에 대한 이차식으로 인수분해되고 한 근이 이차항 계수를 0 으로 만들어야 기각 단계가 살아난다. 두 번째 방정식의 판별식 부호로 실근·허근을 설계."
    creative: "(1) 기각 조건을 없애 후보가 하나만 나오게 하면 절차형 ★2 (2) 두 후보가 모두 유효해 해를 모두 구하게 하면 I-MI ★3 (3) 「나머지 한 근」을 근과 계수의 관계로 묻는 형태를 덧붙이면 ★3."
```

```yaml
- id: GN-CM1-108-213
  page: 108
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $x^2-(a+2)x+2a=0$ 의 한 근이 3 일 때 상수 $a$ 를 구하고, 그 값으로 만든 $x^2+ax+a^2=0$ 의 해 구하기.
  category: "한 근 대입 → $a$ 결정 → 새 방정식을 근의 공식으로"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "한 근이 주어진 이차방정식에서 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    108-e3 의 유제지만 이차항 계수가 1 이라 기각 단계가 없다. $x=3$ 대입 → $a=3$ → $x^2+3x+9=0$ 을 근의 공식으로.
    통찰 0 이나 매개변수와 허근 처리로 M_total 7 이라 감점 없이 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "한 근 대입 → $a$ 결정 → 두 번째 방정식에 대입 → 근의 공식으로 허근"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x=\dfrac{-3\pm 3\sqrt{3}\,i}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/108-213.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 근(3)과 계수 꼴($a+2$, $2a$)을 바꾼다. 제약: 대입식이 $a$ 에 대한 일차식이어야 후보가 하나로 정해지고, 두 번째 방정식의 판별식 $a^2-4a^2=-3a^2<0$ 처럼 부호가 $a$ 와 무관하게 정해지면 안정적이다."
    creative: "(1) 이차항 계수에 $a$ 를 넣어 기각 단계를 만들면 I-VF ★2~3 (2) 두 방정식이 공통근을 가질 조건으로 바꾸면 ★3(I-CON) (3) 「다른 한 근」까지 묻고 근과 계수의 관계로 풀게 하면 ★2 유지."
```

```yaml
- id: GN-CM1-108-214
  page: 108
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $3ax^2+(a^2+3a)x+2a(a-1)=0$ 의 두 근이 $-1$, $b$ 일 때 상수 $a$ 와 $b$ 의 값 구하기.
  category: "한 근 대입 → $a$ 후보 → 이차방정식 조건으로 기각 → 나머지 근 $b$"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$x=-1$ 대입에서 나온 $a=0$, $a=2$ 중 $a=0$ 은 이차항 계수 $3a=0$ 이라 이차방정식이 아니므로 기각"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 근이 주어진 이차방정식에서 미정계수 구하기(이차항 계수 조건 확인)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x=-1$ 을 넣으면 $a^2-2a=0$ 이라 후보가 $0$ 과 $2$. $a=0$ 이면 모든 항이 사라져 방정식 자체가 성립하지 않으므로 기각한다.
    $a=2$ 로 정리한 $3x^2+5x+2=0$ 의 나머지 근이 $b$. 통찰 1개(VF d2) · M_total 7 → 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "한 근 $-1$ 대입 → $a$ 후보 → $3a \\ne 0$ 으로 기각 → 확정된 식의 나머지 근이 $b$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a=2$, $b=-\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/108-214.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 근($-1$)과 계수의 $a$ 다항식을 바꾼다. 제약: 대입 결과가 $a$ 에 대한 이차식으로 인수분해되고 그 한 근이 이차항 계수를 0 으로 만들어야 기각 단계가 살아난다. 남은 이차방정식이 유리근을 갖도록 판별식을 제곱수로."
    creative: "(1) 두 근을 모두 문자로 주고 근과 계수의 관계로 연립하면 골조가 바뀌어 ★3 (2) 기각 후보를 없애면 절차형 ★2 (3) 「$a$ 의 값의 합」처럼 후보를 모두 세는 형태로 바꾸면 기각 여부가 답을 가르는 I-VF d3 ★3."
```

```yaml
- id: GN-CM1-109-e4
  page: 109
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴⑵ 절댓값 기호를 포함한 방정식 풀기. ⑴ 은 $|x|$, ⑵ 는 $|x-1|$ 을 기준으로 구간을 나눠야 한다.
  category: "절댓값 기준점으로 구간 분할 → 구간별 이차방정식 → 구간 조건으로 근 검증"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구간별로 구한 근을 그 구간 조건에 다시 넣어 일부를 기각 — 검증을 빠뜨리면 구간 밖 근까지 답에 넣게 된다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "절댓값 기호를 포함한 방정식(구간 분할 후 해의 범위 검증)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    절댓값을 벗기는 구간 분할 자체는 표준 절차(T-부호)라 통찰로 세지 않고, 구간별 근을 그 구간에 재대입해 기각하는 마지막 단계만 I-VF 로 셌다.
    ⑵ 에서 $x<1$ 쪽 중근 $x=1$ 이 구간 밖이라 기각되는 것이 이 유형의 핵심. 필수 예제 ★2 · 통찰 1개 → ★2 유지.
  tier: star_2
  mechanism_primary: "절댓값 기준점으로 구간 분할 → 구간마다 절댓값 벗겨 이차방정식 풀이 → 각 근이 그 구간에 속하는지 검증"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $x=1-\sqrt{6}$ 또는 $x=-1+\sqrt{6}$ ⑵ $x=1$ 또는 $x=3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/109-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항($-5$, $-2$)과 절댓값 안의 기준점($x-1$)을 바꾼다. 제약: 구간마다 적어도 한 근은 살아남아 해가 존재해야 하고, 적어도 하나는 구간 밖으로 나가 기각 단계가 살아나게 판별식과 기준점을 함께 설계."
    creative: "(1) 절댓값을 두 개 넣어 구간을 셋으로 늘리면 ★3 (2) 「실근의 개수」를 묻는 형태로 바꾸면 그래프 해석이 붙어 I-RT ★3 (3) 해가 존재하지 않도록 상수를 조정해 기각만 남기면 학생 체감 난도가 크게 올라 ★3~4."
```

```yaml
- id: GN-CM1-109-215
  page: 109
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 절댓값 기호를 포함한 방정식 풀기. ⑴ 은 $|x|$ 만 있어 $|x|=t$ 치환이 가능하고 ⑵⑶ 은 기준점에서 구간을 나눈다.
  category: "절댓값 기준점으로 구간 분할(또는 $|x|$ 치환) → 구간별 이차방정식 → 구간 조건으로 검증"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구간별 근을 그 구간 조건에 재대입해 일부 기각(⑵ 에서 $-1-\\sqrt{5}$, ⑶ 에서 $3$ 과 $2-\\sqrt{3}$ 이 탈락)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "절댓값 기호를 포함한 방정식(구간 분할 후 해의 범위 검증)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    109-e4 의 유제. ⑴ 은 $x^2=|x|^2$ 를 이용해 $|x|$ 에 대한 이차방정식으로 보면 구간 분할 없이 끝나고, ⑵⑶ 은 기준점 $\frac12$ 와 $2$ 에서 나눈다.
    기각 검증 1개(VF d2) · M_total 7 → 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "$|x|$ 만 있으면 $|x|=t$ 치환, 아니면 기준점에서 구간 분할 → 구간별 풀이 → 범위 검증"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $x=-4$ 또는 $x=4$ ⑵ $x=1-\sqrt{3}$ 또는 $x=-1+\sqrt{5}$ ⑶ $x=-1$ 또는 $x=2+\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/109-215.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항($-8$, $3$, $-1$)과 절댓값 안의 식($2x-1$, $x-2$)을 바꾼다. 제약: ⑴ 형은 $|x|=t\\ge 0$ 의 근이 음수가 되면 해가 사라지므로 양근이 나오게, ⑵⑶ 형은 두 구간에 각각 해가 하나씩 남도록."
    creative: "(1) $|x|$ 치환형만 모으면 절차형 ★2 이하 (2) 절댓값 안 계수를 키워 기준점이 분수가 되게 하면 경계 처리 부담만 늘어 질이 떨어짐 (3) 「모든 실근의 합」을 묻게 하면 기각 실수가 곧바로 답 차이로 드러나 ★3."
```

```yaml
- id: GN-CM1-109-216
  page: 109
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    방정식 $|x-2|+1=x^2-\sqrt{x^2}$ 풀기. 근호가 절댓값으로 바뀌면서 기준점이 둘이 된다.
  category: "$\\sqrt{x^2}=|x|$ 변환 → 기준점 $0,2$ 로 세 구간 분할 → 구간별 풀이와 검증"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$\\sqrt{x^2}$ 를 $x$ 가 아니라 $|x|$ 로 옮기는 동치 변환 — 이 한 줄을 놓치면 음수 구간의 해를 통째로 잃는다"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 구간에서 나온 근을 각 구간에 재대입해 기각(경계 구간에서 나온 $x=1$ 은 탈락)"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "$\\sqrt{x^2}=|x|$ 를 포함한 절댓값 방정식(세 구간 분할)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    절댓값이 둘($|x-2|$ 와 $\sqrt{x^2}=|x|$)이라 기준점이 $0$, $2$ 두 개, 구간이 셋으로 늘어난다.
    근호를 절댓값으로 바꾸는 동치 변환과 구간 밖 근 기각으로 통찰 2개 · M_total 8 → 확인체크 출발점 ★2 에서 +1 하여 ★3.
    [분류 이슈] 벤더 라벨은 필수 예제 유제(★2 급)인데 판정은 ★3 — 1단 차이라 라벨은 그대로 두고 기록만 한다.
  tier: star_3
  mechanism_primary: "$\\sqrt{x^2}=|x|$ 로 바꾸기 → 기준점 $0,2$ 로 세 구간 분할 → 구간별 이차방정식 → 범위 검증"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$x=-3$ 또는 $x=\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/109-216.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$|x-2|$ 의 기준점과 좌변 상수(1)를 바꾼다. 제약: 세 구간 중 적어도 둘에서 해가 살아남아야 하고, 한 구간에서는 근이 구간 밖으로 나가 기각되도록 설계한다. $\\sqrt{x^2}$ 는 그대로 두어야 동치 변환 통찰이 유지된다."
    creative: "(1) $\\sqrt{x^2}$ 를 $|x|$ 로 바꿔 쓰면 통찰 1개 감소 ★2 (2) $\\sqrt{(x-1)^2}$ 처럼 기준점을 어긋나게 두면 구간이 넷으로 늘어 ★4 (3) 「실근의 개수」나 그래프 교점으로 물으면 I-RT 가 추가돼 ★3~4."
```

```yaml
- id: GN-CM1-110-e5
  page: 110
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    한 변이 $12\,\mathrm{m}$ 인 정사각형 꽃밭에 폭이 일정한 ⊢ 모양 길을 냈더니 남은 꽃밭의 넓이가 $100\,\mathrm{m}^2$ 일 때 길의 폭 구하기.
  category: "길을 가장자리로 평행이동 → 남은 꽃밭을 한 직사각형으로 → 넓이 이차방정식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "길을 평행이동해 붙이면 남은 꽃밭이 한 변 $12-x$ 인 정사각형 하나로 모인다는 기하 재배치 — 조각별 넓이를 일일이 빼는 계산을 통째로 없앤다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이차방정식의 활용(폭이 일정한 길과 남은 넓이)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    길의 폭을 $x$ 로 놓고 평행이동하면 $(12-x)^2=100$ 한 줄로 끝난다. 조각을 직접 빼도 같은 식이 되지만 계산이 길어진다.
    구한 근 중 $0<x<12$ 를 벗어나는 쪽을 버리는 범위 조건이 유일한 함정(T-범위). 필수 예제 ★2 · 통찰 1개 → ★2 유지.
  tier: star_2
  mechanism_primary: "폭을 $x$ 로 놓기 → 길 평행이동 → $(12-x)^2=100$ → $0<x<12$ 인 근"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2\,\mathrm{m}$'
  answer_source: "본문 풀이"
  figure: "crop:fig-110-e5.png"
  latex: latex-bank/gn-cm1/items/110-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "한 변의 길이(12)와 남은 넓이(100)를 바꾼다. 제약: 남은 넓이가 제곱수여야 $(12-x)^2=$ 제곱수로 폭이 정수로 떨어지고, $0<x<$ 한 변 을 만족하는 근이 정확히 하나여야 한다. 그림 라벨($12\\,\\mathrm{m}$)은 발문 수치와 같이 바꿔야 한다."
    creative: "(1) 길을 십자 모양으로 바꾸면 같은 평행이동 골조 유지 ★2 (2) 길의 폭 대신 꽃밭의 한 변을 미지수로 주면 I-BW 한 단계 ★3 (3) 길의 폭이 가로·세로로 다르게 하면 미지수가 둘이 되어 연립·범위 검증까지 ★4."
```

```yaml
- id: GN-CM1-110-217
  page: 110
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    가로 $20\,\mathrm{m}$, 세로 $10\,\mathrm{m}$ 인 직사각형 잔디밭에 폭이 일정한 십자 모양 길을 낼 때 길을 제외한 넓이가 $144\,\mathrm{m}^2$ 가 되는 길의 폭 구하기.
  category: "길을 가장자리로 평행이동 → 남은 잔디밭을 한 직사각형으로 → 넓이 이차방정식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "십자 길을 평행이동해 붙이면 남은 잔디밭이 가로 $20-x$, 세로 $10-x$ 인 직사각형 하나가 된다는 기하 재배치"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이차방정식의 활용(폭이 일정한 길과 남은 넓이)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    110-e5 의 유제로 직사각형·십자 버전. $(20-x)(10-x)=144$ 를 정리하면 $x^2-30x+56=0$ 이고 두 근 중 $0<x<10$ 을 만족하는 쪽만 답.
    평행이동 착안 1개(RT d2) · M_total 6 → 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "폭을 $x$ 로 놓기 → 길 평행이동 → $(20-x)(10-x)=144$ → $0<x<10$ 인 근"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2\,\mathrm{m}$'
  answer_source: "답지"
  figure: "crop:fig-110-217.png"
  latex: latex-bank/gn-cm1/items/110-217.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "가로·세로(20,10)와 남은 넓이(144)를 바꾼다. 제약: $(가로-x)(세로-x)=$ 넓이 가 정수근을 갖도록 넓이를 역산해 잡고, 큰 근이 세로보다 커서 자연스럽게 기각되게 한다. 그림의 치수 라벨도 함께 고쳐야 한다."
    creative: "(1) 길을 두 줄씩 내면 $(20-2x)(10-2x)$ 로 계수만 커져 ★2 유지 (2) 길의 넓이(잔디밭이 아닌 쪽)를 주면 식 세우기 방향이 뒤집혀 ★2~3 (3) 남은 넓이가 전체의 일정 비율이라는 조건으로 바꾸면 비례식이 추가돼 ★3."
```

```yaml
- id: GN-CM1-110-218
  page: 110
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    가로 $24$, 세로 $18$ 인 직사각형에서 가로는 매초 $1$ 씩 줄고 세로는 매초 $2$ 씩 늘 때, 넓이가 처음과 같아지는 것은 몇 초 후인지 구하기.
  category: "$t$ 초 후의 가로·세로 식 → 넓이가 같다는 이차방정식 → $t>0$ 검증"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정리하면 $t(30-2t)=0$ 이라 $t=0$ 도 근이지만 「몇 초 후」라는 조건으로 기각해야 한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차방정식의 활용(시간에 따라 변하는 도형의 넓이)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $t$ 초 후 가로 $24-t$, 세로 $18+2t$ 로 놓고 넓이를 처음 넓이 $432$ 와 같다고 두면 상수항이 상쇄돼 $t(30-2t)=0$.
    처음 상태인 $t=0$ 을 버리는 검증이 유일한 통찰(VF d1). M_total 6 → 확인체크 ★2 유지.
  tier: star_2
  mechanism_primary: "$t$ 초 후 가로·세로를 $t$ 식으로 → $(24-t)(18+2t)=24\\times 18$ → 상수 상쇄 후 $t>0$ 인 근"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$15$초'
  answer_source: "답지"
  figure: "crop:fig-110-218.png"
  latex: latex-bank/gn-cm1/items/110-218.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "처음 가로·세로(24,18)와 매초 변화량(1,2)을 바꾼다. 제약: 넓이가 같아지는 순간이 존재하려면 변화 방향이 서로 반대여야 하고, $t$ 가 가로가 0 이 되기 전(여기서는 $t<24$)에 나오도록 값을 잡는다."
    creative: "(1) 「넓이가 처음보다 $k$ 만큼 커지는 때」로 바꾸면 상수 상쇄가 사라져 일반 이차방정식 ★2~3 (2) 넓이가 최대가 되는 때를 묻으면 이차함수 단원으로 넘어가 ★3 (3) 두 변이 같은 속도로 변해 정사각형이 되는 시각을 묻는 조건을 겹치면 I-CON ★3."
```

### 특강

```yaml
- id: GN-CM1-111-219
  page: 111
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "특강 확인체크"
  summary: |
    ⑴⑵ 가우스 기호 $[x]$ 를 포함한 방정식 풀기. ⑴ 은 $[x]$ 에 대한 이차방정식, ⑵ 는 $1<x<3$ 에서 $x^2-[x]-3=0$.
  category: "$[x]=n \\iff n \\le x < n+1$ 로 변환 → 정수 후보별 풀이 → 구간 검증"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$[x]$ 를 정수 $n$ 으로 놓고 $n \\le x < n+1$ 이라는 부등식 조건으로 바꾸는 동치 변환 — 답이 값이 아니라 구간으로 나오는 이유"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑵ 에서 $[x]=1$, $[x]=2$ 로 나눠 구한 $x$ 가 각 구간 안에 있는지 재확인해 $[x]=1$ 쪽을 기각"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "가우스 기호 $[x]$ 를 포함한 방정식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 $[x]=t$ 치환으로 $t=4,8$ 을 얻은 뒤 각각을 $4 \le x<5$, $8 \le x<9$ 구간으로 되돌리는 것이 핵심이고, ⑵ 는 주어진 범위에서 $[x]$ 가 가질 정수 값을 나눠 풀고 구간 밖 후보를 기각한다.
    교육과정 심화(특강) 출발 ★3 · 통찰 2개(EQV·VF d2) · M_total 9 → ★3.
    [분류 이슈] 통찰 2개와 저노출 유형(I-VF)만 보면 ★4 후보이나 ⑴ 이 단순 치환이라 ★3 으로 둔다.
  tier: star_3
  mechanism_primary: "$[x]=n$ 으로 놓기 → $n \\le x < n+1$ 부등식 → 정수 후보별 이차방정식 → 구간 검증"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $4\le x<5$ 또는 $8\le x<9$ ⑵ $x=\sqrt{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/111-219.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 계수($-12$, $32$)는 $[x]$ 에 대한 정수근 두 개가 나오도록, ⑵ 의 범위($1<x<3$)와 상수($-3$)는 후보 중 하나만 살아남도록 잡는다. 제약: ⑵ 에서 나온 $x$ 가 무리수여도 구간 판정이 가능해야 하고(근삿값 비교), 경계값 $x=n$ 의 포함 여부를 답 표기와 일치시킨다."
    creative: "(1) ⑵ 의 범위를 넓혀 후보 정수를 셋 이상으로 늘리면 검증 부담이 커져 ★4 (2) $[x]$ 와 $x-[x]$(소수부)를 함께 쓰면 표현 전환이 추가돼 ★4 (3) 해의 개수만 묻거나 범위 없이 실수 전체에서 풀게 하면 일반항 탐색이 되어 ★4~5."
```

## 표본 판정 요약 (16문)

- ★ 분포: ★1 2 · ★2 12 · ★3 2 · ★4 0 · ★5 0
- 통찰형 11 · 절차형 5 · premium 0
- 통찰 유형 분포: I-VF 7 · I-EQV 3 · I-RT 2 (depth 는 모두 1~2 · depth 3 없음)
- type_hint 상위 5: 「미정계수(한 근·두 근이 주어진 이차방정식)」 3 · 「절댓값 기호를 포함한 방정식」 3 · 「이차방정식의 활용」 3 · 「정리하여 푸는 이차방정식」 2 · 「이차항의 계수가 무리수인 이차방정식」 2
- 그림: 3문(`crop:fig-110-e5.png` · `crop:fig-110-217.png` · `crop:fig-110-218.png`)
- 이 단원의 ★ 를 가르는 축은 계산량이 아니라 **기각 검증(I-VF)의 유무와 구간 수**다. 같은 대입·인수분해 골조라도 이차항 계수 조건이나 구간 조건으로 후보를 버려야 하면 통찰형이 된다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-109-216 | 벤더는 필수 예제의 확인체크 유제(★2 급)이나 $\sqrt{x^2}=\|x\|$ 동치 변환 + 세 구간 분할로 통찰 2개 → ★3 으로 라벨. 1단 차이 기록 | ★2 / ★3 |
| GN-CM1-111-219 | 특강 심화 + 통찰 2개 + 저노출 유형(I-VF) 이라 ★4 후보이나 소문항 ⑴ 이 단순 치환이라 ★3 으로 둠 | ★3 / ★4 |
| GN-CM1-107-e2 · GN-CM1-107-212 | 교재 본문 골조는 켤레 곱 유리화(I-EQV)지만 두 문항 모두 계수의 합이 0 이라 $x=1$ 을 바로 찾는 지름길이 있다. 지름길을 인정하면 I-SC 가 추가돼 ★3. 본문 풀이 기준으로 ★2 유지 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 **세 계열이 각각 3문씩 반복**됐다 — 「한 근·두 근이 주어진 이차방정식의 미정계수」(108-e3·213·214) · 「절댓값 방정식」(109-e4·215·216) · 「이차방정식의 활용」(110-e5·217·218). 카탈로그에서는 이 셋이 각각 독립 유형이 되어야 한다.
- **따로 세워야 할 유형**: ① 「이차항의 계수가 무리수인 이차방정식」은 켤레 곱 유리화라는 고유 골조라 기본 풀이 유형과 분리. ② 「가우스 기호 방정식」은 교육과정 심화이고 답이 구간으로 나와 base ★ 가 다르므로 분리. ③ 「절댓값 방정식」은 기준점 1개(2구간)와 2개(3구간·$\sqrt{x^2}$ 포함)를 하위 유형으로 나눠야 base ★ 가 ★2/★3 로 갈린다.
- **통합해도 될 유형**: ① 「인수분해로 풀기」·「근의 공식으로 풀기」·「전개·통분 후 정리해 풀기」는 base ★ 가 같아 한 유형의 난이도 변형으로 묶어도 된다. ② 「한 근이 주어진」과 「두 근이 주어진」은 대입 골조가 같으므로 한 유형으로 두고, 이차항 계수 조건에 따른 기각(I-VF) 유무를 depth 로 구분하는 편이 낫다. ③ 「길 문제」와 「변하는 도형 문제」는 모두 넓이 이차방정식 + 범위 기각이라 「이차방정식의 활용」 하나로 묶고 소재만 나눠도 된다.

