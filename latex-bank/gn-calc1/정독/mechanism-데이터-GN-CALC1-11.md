---
name: mechanism-데이터-GN-CALC1-11
description: 개념원리 미적분Ⅰ 11 평균값 정리(1/1 · 98~102쪽 · 25문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅰ (학생용 PDF) · 전사본 latex-bank/gn-calc1
  section: 11 평균값 정리
  unit_code: "11"
  part: "1/1"
  extract_range: "98~102쪽 · 98-e8~102-200"
  total_problems: 25
  unit_total: 25
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc1/items/<id>.tex
  image_source: latex-bank/gn-calc1/figures/ (crops.json)
---

# 개념원리 미적분Ⅰ · 11 평균값 정리 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅰ 11단원 「평균값 정리」 98~102쪽 25문항 전수를 다룬다. 구역은 「필수·발전 예제」 7문(필수 예제 2 + 그 확인체크 5) · 「연습문제 STEP 1」 9문 · 「연습문제 STEP 2」 6문 · 「연습문제 실력 UP」 3문이다. 개념원리 고등의 난이도 신호는 구역(예제/확인체크/STEP 1/STEP 2/실력 UP)과 예제 태그(필수·발전·특강), 그리고 기출 태그(교육청·평가원·수능)로 읽는다. 이 범위에서는 필수 예제 2개가 각각 롤의 정리·평균값 정리를 직접 적용해 $c$ 를 구하는 계산 예제이고, 확인체크 5문이 그 변형이며, 연습문제 구역은 단원 제목과 달리 **직전 단원의 접선의 방정식과 섞여 있다**(STEP 1 9문 중 7문, STEP 2 6문 중 5문이 접선 문항). 이 구성 자체가 이 단원의 실제 성격이므로 그대로 기록했고, type_hint 도 접선 계열과 평균값 정리 계열을 나눠 달았다.

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(유형 코드 + depth + 근거) · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 창의 변형과 ★ 가 변하는 지점)를 채웠다. 미적분Ⅰ 은 유형 카탈로그가 아직 없으므로 `type_id` · `base_star` 는 null 이고 `effective_star` 는 잠정적으로 `star` 와 같다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC1-98-e8
  page: 98
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    ⑴~⑵ 주어진 닫힌구간에서 롤의 정리를 만족시키는 실수 $c$ 의 값 구하기.
    ⑴ 이차함수 $[1,3]$ ⑵ 삼차함수 $[-1,2]$.
  category: "롤의 정리 → f'(c)=0 의 근 중 열린구간 안의 것"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "롤의 정리를 만족시키는 c 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    양 끝 함숫값이 같음을 확인하고 f'(x)=0 을 풀어 열린구간 안의 근만 고르는 정의 적용 한 줄.
    ⑵ 에서 근 두 개 중 x=-1 은 구간의 끝이라 제외하는 T-범위 점검이 유일한 주의점.
    벤더 「필수」 예제라 ★2 출발이나 통찰 0 · M_total 5 → -1 로 ★1.
    [분류 이슈] 예제 위계(필수)와 실제 난이도가 어긋나 ★2 로도 읽힌다 — 라벨은 ★1 로 두고 기록만 한다.
  tier: star_1
  mechanism_primary: "f(a)=f(b) 확인 → f'(x)=0 풀기 → 열린구간 (a,b) 안의 근 = c"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $2$ ⑵ $1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/98-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차함수는 축이 구간의 중점이 되도록 계수를 잡고(f(x)=ax^2+bx+c 에서 -b/2a 가 중점), 삼차함수는 양 끝 함숫값이 같도록 근을 배치한다. 제약: f(a)=f(b) 가 반드시 성립해야 롤의 정리가 적용되고, f'(x)=0 의 근 중 하나는 열린구간 밖이 되게 두면 T-범위 점검이 살아난다."
    creative: "(1) 구간만 주고 f(a)=f(b) 가 되는 구간을 학생이 찾게 하기(★2 · I-EQV d1) (2) 롤의 정리를 쓸 수 없는 함수(절댓값·불연속)를 섞어 적용 가능 여부를 묻기(★2 · I-MI d1) (3) c 의 개수를 묻는 형태로 바꾸면 사차함수까지 확장 가능(★2)."
```

```yaml
- id: GN-CALC1-98-178
  page: 98
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 주어진 닫힌구간에서 롤의 정리를 만족시키는 실수 $c$ 의 값 구하기.
    이차함수 두 개와 삼차함수 하나.
  category: "롤의 정리 → f'(c)=0 의 근 중 열린구간 안의 것"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "롤의 정리를 만족시키는 c 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    98-e8 의 확인체크. 세 소문항 모두 f'(x)=0 을 풀어 구간 안의 근을 고르는 같은 절차.
    ⑶ 삼차함수에서 인수분해 (3x-5)(x+1)=0 의 두 근 중 구간의 끝인 x=-1 을 버리는 것이 유일한 함정.
    확인체크 구역 ★1 출발 · 통찰 0 → ★1 유지.
  tier: star_1
  mechanism_primary: "f(a)=f(b) 확인 → f'(x)=0 풀기 → 열린구간 안의 근 = c"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $3$ ⑵ $1$ ⑶ $\dfrac{5}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/98-178.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차함수는 구간 중점이 축이 되도록, 삼차함수는 f'(x)=0 이 유리수 근을 갖도록 계수를 고른다. 제약: 답이 분수(5/3 처럼)로 나오게 하려면 f'의 이차식이 3x^2 꼴 선행계수를 갖게 두는 것이 편하다."
    creative: "(1) 사차함수로 올려 f'(x)=0 의 근이 세 개 중 두 개만 구간 안에 들어오게 하고 c 의 개수를 묻기(★2 · I-MI d1) (2) f(a)=f(b) 가 성립하지 않는 함수를 끼워 넣어 롤의 정리 적용 가능 여부를 먼저 판정하게 하기(★2)."
```

```yaml
- id: GN-CALC1-98-179
  page: 98
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    삼차함수 $f(x)=\dfrac{1}{3}x^3+x^2-3x+2$ 가 닫힌구간 $[-a,\,a]$ 에서 롤의 정리를 만족시키는 $c$ 를 가질 때 $a+c$ ($a$ 는 자연수).
  category: "롤의 정리 성립 조건 f(-a)=f(a) → a 결정 → f'(c)=0 의 구간 내 근"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "롤의 정리를 만족시키는 c 가 존재한다는 조건을 다항함수의 연속·미분가능은 자동이므로 f(-a)=f(a) 하나로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "롤의 정리 성립 조건으로 미지의 구간 끝값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    구간 끝이 미지수라 c 를 구하기 전에 f(-a)=f(a) 로 a 를 먼저 정해야 한다. 홀수차 항만 남아 a^2=9 → a=3(자연수 조건).
    이어 f'(x)=x^2+2x-3=0 의 두 근 중 열린구간 (-3,3) 안의 것만 c 로 채택.
    확인체크 ★1 출발이나 매개변수(Mₐ=2)와 조건 동치 변환 통찰 1개 · M_total 8 → +1 로 ★2.
  tier: star_2
  mechanism_primary: "f(-a)=f(a) → a=3 → f'(x)=0 의 (-3,3) 내 근 c → a+c"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/98-179.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차항 계수와 일차항 계수의 비를 바꿔 a^2 이 완전제곱이 되게 한다(1/3 과 -3 → a^2=9). 제약: 구간이 원점 대칭이라 짝수차 항은 소거되므로 f(-a)=f(a) 는 홀수차 항만 남긴 식이어야 하고, 자연수 조건으로 a 가 하나로 정해져야 한다."
    creative: "(1) 구간을 [-a, 2a] 처럼 비대칭으로 바꾸면 소거가 사라져 Mₖ 상승(★3) (2) a 의 조건을 자연수에서 실수로 풀면 a 가 두 개 나오고 c 도 두 개 → I-VF 가 붙어 ★3 (3) 롤의 정리 대신 평균값 정리로 바꾸고 c 를 주는 역방향(★3 · I-BW d2)."
```

```yaml
- id: GN-CALC1-99-e9
  page: 99
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    ⑴~⑵ 주어진 닫힌구간에서 평균값 정리를 만족시키는 실수 $c$ 의 값 구하기.
    ⑴ 이차함수 $[-1,1]$ ⑵ 삼차함수 $[0,3]$.
  category: "평균변화율 계산 → f'(c)=평균변화율 → 구간 내 근"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평균값 정리를 만족시키는 c 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    {f(b)-f(a)}/(b-a) 를 먼저 계산하고 f'(x) 를 그 값과 같게 놓아 푸는 정의 적용.
    ⑵ 에서 x^2=3 의 두 근 중 음수는 구간 밖이라 버리는 T-범위 점검만 주의.
    벤더 「필수」 ★2 출발이나 통찰 0 · M_total 5 → -1 로 ★1.
    [분류 이슈] 예제 위계(필수)와 실제 난이도가 어긋나 ★2 로도 읽힌다 — 라벨은 ★1 로 두고 기록만 한다.
  tier: star_1
  mechanism_primary: "평균변화율 m 계산 → f'(x)=m 풀기 → 열린구간 안의 근 = c"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $0$ ⑵ $\sqrt{3}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/99-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차함수는 c 가 구간의 중점이 되므로 계수를 자유롭게 바꿔도 되고, 삼차함수는 f'(x)=m 이 x^2=(유리수) 꼴이 되도록 이차항을 0 으로 둔다. 제약: 삼차함수에서 두 근 중 하나만 구간 안에 들어와야 답이 하나로 정해진다."
    creative: "(1) c 가 구간의 중점이 되는 함수를 모두 고르게 하기(★2 · I-SYM d1) (2) 평균변화율과 접선의 기울기가 같아지는 점의 기하적 의미를 그림으로 묻기(★2 · I-RT d1) (3) 구간 끝 하나를 미지수로 두고 c 를 주면 역방향 ★2."
```

```yaml
- id: GN-CALC1-99-180
  page: 99
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑵ 주어진 닫힌구간에서 평균값 정리를 만족시키는 실수 $c$ 의 값 구하기.
    ⑴ 이차함수 $[2,4]$ ⑵ 삼차함수 $[0,2]$.
  category: "평균변화율 계산 → f'(c)=평균변화율 → 구간 내 근"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평균값 정리를 만족시키는 c 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    99-e9 의 확인체크. 평균변화율을 구해 f'(x) 와 같게 놓는 같은 절차.
    ⑵ 는 x^2=4/3 에서 양수 근만 구간 안이고 답이 분모 유리화가 필요한 꼴이라 계산 정리만 추가된다.
    확인체크 ★1 출발 · 통찰 0 → ★1 유지.
  tier: star_1
  mechanism_primary: "평균변화율 m 계산 → f'(x)=m 풀기 → 열린구간 안의 근 = c"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $3$ ⑵ $\dfrac{2\sqrt{3}}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/99-180.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 끝값과 계수를 바꾸되 삼차함수는 f'(x)=m 이 x^2=(양수) 로 떨어지게 이차항을 0 으로 둔다. 제약: 근이 무리수가 되면 유리화까지가 답이므로 선택지형으로 낼 때 표기를 통일해야 한다."
    creative: "(1) 두 소문항의 c 의 곱·합을 묻기(★2) (2) 구간을 [0,k] 로 두고 c 가 정수가 되는 k 를 찾게 하기(★3 · I-BW d2) (3) 평균값 정리를 만족시키는 c 가 두 개인 구간을 고르게 하기(★3 · I-MI d2)."
```

```yaml
- id: GN-CALC1-99-181
  page: 99
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    삼차함수 $f(x)=\dfrac{1}{3}x^3-x^2+1$ 에 대하여 닫힌구간 $[0,\,3]$ 에서 평균값 정리를 만족시키는 실수 $c$ 의 **개수**.
  category: "평균변화율 → f'(x)=평균변화율 의 열린구간 내 실근 개수"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평균값 정리를 만족시키는 c 의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    값이 아니라 개수를 묻는 변형. 양 끝 함숫값이 같아 평균변화율이 0 이 되고 f'(x)=x^2-2x=0 의 근은 0 과 2.
    이 중 x=0 은 닫힌구간의 끝이라 열린구간 조건에서 제외되므로 개수는 근의 개수가 아니라 구간 내부의 개수다(T-경계).
    확인체크 ★1 출발이나 경계 제외 판단과 함정 2종(T-범위·T-경계) · M_total 6 → +1 로 ★2.
  tier: star_2
  mechanism_primary: "평균변화율=0 → f'(x)=0 의 근 {0,2} → 열린구간 (0,3) 내부만 세기 → 1개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/99-181.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항과 구간 끝을 바꿔 f'(x)=m 의 근 하나가 구간의 끝에 오도록 맞추는 것이 이 문항의 핵심이므로, 계수 조정 시 근 하나가 경계에 걸리는지 반드시 확인한다. 제약: 구간 [0,3] 을 [0,4] 로 늘리면 평균변화율이 0 이 아니게 되어 개수가 바뀐다."
    creative: "(1) 사차함수로 올려 f'(x)=m 의 근 세 개 중 두 개만 내부에 오게 하기(★3 · I-MI d1) (2) 개수가 2 가 되는 구간의 범위를 묻기(★4 · I-BW d2) (3) 그래프를 주고 평균변화율 직선과 평행한 접선의 개수를 세게 하면 기하 전환(★3 · I-RT d1)."
```

```yaml
- id: GN-CALC1-99-182
  page: 99
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    이차함수 $f(x)=2x^2-4x+3$ 에 대하여 닫힌구간 $[-2,\,a]$ 에서 평균값 정리를 만족시키는 $c$ 가 $-\dfrac{1}{2}$ 일 때 $a$ 의 값 ($a>-\dfrac{1}{2}$).
  category: "평균값 정리 식에 c 를 대입 → 구간 끝값 a 역산"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평균값 정리에서 c 가 주어질 때 구간 끝값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(c) 와 {f(a)-f(-2)}/(a+2) 를 a 의 식으로 놓고 등식을 푸는 표준 대입. 이차함수라 c 가 구간의 중점으로 떨어지는 성질을 쓰면 한 줄로 끝난다.
    a>-1/2 단서는 c 가 열린구간 안에 있어야 한다는 T-범위 조건을 명시한 것이고, 이것이 없으면 답이 확정되지 않는다.
    확인체크 ★1 출발이나 미지수 구간 끝(Mₐ=2)·함정 2종 · M_total 8 → +1 로 ★2. 통찰은 표준 미정계수 대입이라 인정하지 않았다.
  tier: star_2
  mechanism_primary: "f'(c)={f(a)-f(-2)}/(a+2) 에 c=-1/2 대입 → a 에 대한 방정식 → a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/99-182.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항 계수와 좌측 끝값, 주어진 c 를 함께 바꾼다. 제약: 이차함수에서 c 는 항상 구간의 중점이므로 c 와 좌측 끝이 정해지면 a 는 자동으로 하나이고, a 가 c 보다 커야 한다는 조건을 발문에 남겨야 답이 확정된다."
    creative: "(1) 삼차함수로 바꾸면 중점 성질이 깨져 a 에 대한 이차·삼차 방정식이 되고 후보 기각이 생김(★3 · I-VF d1) (2) c 대신 평균변화율 값을 주고 a 를 묻기(★2) (3) 구간 양 끝을 모두 미지수로 두고 c 와 길이를 주면 연립(★3 · I-CON d2)."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC1-100-183
  page: 100
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 1"
  summary: |
    $f(x)=x^3-3x$ 에서 $x$ 가 $1$ 에서 $4$ 까지 변할 때의 평균변화율과 점 $(k,\,f(k))$ 에서의 접선의 기울기가 같을 때 양수 $k$. 5지선다.
  category: "평균변화율 계산 → f'(k)=평균변화율 → 양수 근"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평균변화율과 접선의 기울기가 같아지는 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평균값 정리를 말로 풀어 쓴 문항. {f(4)-f(1)}/3 을 구해 f'(k)=3k^2-3 과 같게 놓으면 k^2 이 정해진다.
    양수 조건으로 음수 근을 버리는 것(T-부호)만 점검하면 되고 별도 통찰은 없다.
    STEP 1 ★2 출발 · 교육청 기출 태그는 통찰이 없어 +0 · M_total 6 → ★2 유지.
  mechanism_primary: "평균변화율 m={f(4)-f(1)}/3 → f'(k)=m → k^2 결정 → 양수 근"
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/100-183.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [1,4] 와 삼차함수의 일차항 계수를 바꿔 k^2 이 정수가 되게 한다. 제약: 선택지에 무리수를 넣으려면 k^2 이 제곱수가 아닌 정수여야 하고, 구간이 원점 대칭이면 평균변화율이 단순해져 난이도가 떨어진다."
    creative: "(1) k 가 두 개 나오도록 구간을 음수까지 넓히고 두 k 의 곱을 묻기(★2 · I-SYM d1) (2) 평균변화율을 직접 주지 않고 두 점을 지나는 직선의 기울기로 제시(★2 · I-RT d1) (3) 삼차함수를 미지 계수로 두고 k=2 가 되게 하는 계수를 묻는 역방향(★3 · I-BW d2)."
```

```yaml
- id: GN-CALC1-100-184
  page: 100
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    곡선 $y=x^3+3x^2+ax-1$ 위의 점에서의 접선의 기울기의 최솟값이 $5$ 일 때 상수 $a$.
  category: "접선의 기울기 = y' → 이차식의 최솟값 → a 결정"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선의 기울기의 최대·최소"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선의 기울기를 y'=3x^2+6x+a 로 보고 완전제곱으로 정리하면 최솟값은 꼭짓점의 값 a-3.
    이를 5 와 같게 놓으면 끝나는 두 단계이고, 삼차함수의 도함수가 아래로 볼록한 이차함수라 최솟값이 존재한다는 점만 확인하면 된다.
    STEP 1 ★2 출발 · 통찰 0 이나 M_total 6 이라 -1 조건(M_total 5 이하)에 걸리지 않아 ★2 유지.
  tier: star_2
  mechanism_primary: "접선 기울기=y'=3x^2+6x+a → 꼭짓점 값 a-3 이 최솟값 → a-3=5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/100-184.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항 계수와 최솟값을 바꾼다. 제약: 삼차항 계수가 양수여야 도함수가 아래로 볼록해 최솟값이 존재하고, 음수로 바꾸면 최댓값 문제로 바뀐다."
    creative: "(1) 최솟값 대신 접선의 기울기가 될 수 있는 값의 범위를 묻기(★2) (2) 기울기의 최솟값이 0 이 되도록 해 곡선이 증가함수가 되는 조건과 연결(★3 · I-EQV d2) (3) 구간을 제한해 그 위에서의 최솟값을 묻게 하면 경계 비교가 생김(★3 · I-MI d2)."
```

```yaml
- id: GN-CALC1-100-185
  page: 100
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    곡선 $y=x^3+kx^2-(2k-1)x+k+3$ 이 $k$ 의 값에 관계없이 항상 지나는 점 $\pt{P}$ 에서의 접선의 방정식.
  category: "k 에 대한 항등식 → 고정점 P → P 에서의 접선"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "k 의 값에 관계없이 지난다는 조건을 k 에 대한 항등식으로 동치 변환해 k 의 계수와 나머지를 각각 0 으로 놓는 것"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "k 에 무관한 고정점에서의 접선의 방정식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    k 로 묶으면 k(x^2-2x+1)+(x^3+x+3-y) 꼴이 되고 항등식 조건에서 (x-1)^2=0 이 나와 고정점이 하나로 결정된다.
    이어 y'=3x^2+2kx-(2k-1) 에 x=1 을 넣으면 k 항이 소거되어 기울기가 k 와 무관하게 정해지는 것이 이 문항의 맛이다.
    STEP 1 ★2 출발이나 항등식 처리와 접선 두 단계가 이어지고 통찰 d2 · M_total 7 → +1 로 ★3.
  tier: star_3
  mechanism_primary: "k 로 묶어 항등식 → (x-1)^2=0 → P(1,5) → y'(1)=4 → 접선"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$y=4x+1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/100-185.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "k 가 곱해진 부분이 완전제곱 또는 일차식의 거듭제곱이 되도록 kx^2 과 -(2k-1)x 의 계수를 맞춘다. 제약: k 항이 (x-1)^2 처럼 중근을 주어야 고정점이 하나로 정해지고, 두 근이 나오면 고정점이 둘이 되어 발문을 바꿔야 한다."
    creative: "(1) 고정점이 두 개가 되게 해 두 접선의 교점을 묻기(★4 · I-MI d2 추가) (2) 고정점에서의 접선이 k 에 무관함을 보이라는 서술형(★3 유지) (3) k 대신 두 매개변수를 넣어 공통점 조건을 연립으로 만들면 Mₐ 상승(★4)."
```

```yaml
- id: GN-CALC1-100-186
  page: 100
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    곡선 $y=x^3+ax^2-a-1$ 위의 점 $(1,\,0)$ 에서의 접선이 이 곡선과 점 $(2,\,k)$ 에서 다시 만날 때 $k$ 의 값.
  category: "접선의 방정식(미지 계수 a) → 다시 만나는 점 조건 → a 와 k"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "점 (2,k) 가 곡선 위이면서 동시에 접선 위에 있다는 것을 a 에 대한 방정식 하나로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "접선이 곡선과 다시 만나는 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (1,0) 은 a 에 관계없이 곡선 위의 점이므로 접선은 기울기 3+2a 를 갖는 직선으로 바로 쓸 수 있다.
    핵심은 (2,k) 가 곡선과 접선 양쪽에 있다는 조건을 겹쳐 a 를 정하는 것이며, 그 뒤 k 는 대입 한 번.
    STEP 1 ★2 출발 · 통찰 1개(d1) 로 보너스 없음 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "(1,0) 에서 접선 y=(3+2a)(x-1) → x=2 에서 곡선값=접선값 → a → k"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/100-186.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항을 -a-1 처럼 두어 접점이 a 에 무관하게 곡선 위에 오도록 맞추는 것이 설계의 핵심이다. 제약: 다시 만나는 점의 x 좌표를 바꾸면 a 가 정수로 떨어지지 않을 수 있으니 (x-접점)^2(x-r) 인수분해 형태로 역설계하는 편이 안전하다."
    creative: "(1) 다시 만나는 점을 묻지 않고 접점과 교점 사이 거리를 묻기(★3 · I-RT d1) (2) 삼차곡선과 접선의 교점 관계를 인수분해 (x-1)^2(x-r) 로 일반화해 r 을 묻기(★3 · I-PD d2) (3) 접선이 곡선과 다시 만나지 않을 조건을 묻는 역방향(★4 · I-BW d2)."
```

```yaml
- id: GN-CALC1-100-187
  page: 100
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    곡선 $y=2x^3-ax+b$ 위의 점 $(1,\,6)$ 에서의 접선과 수직인 직선의 기울기가 $-\dfrac{1}{3}$ 일 때 $ab$.
  category: "수직 조건 → 접선의 기울기 → f'(1) 로 a, 점이 곡선 위로 b"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "접선에 수직인 직선의 기울기 조건으로 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수직인 두 직선의 기울기 곱이 -1 이므로 접선의 기울기는 3. f'(1)=6-a=3 에서 a 가, 점이 곡선 위라는 조건에서 b 가 각각 한 줄로 나온다.
    함정은 수직 조건에서 부호와 역수를 뒤집는 것(T-부호) 하나뿐이고 나머지는 표준 대입.
    STEP 1 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "수직 기울기 -1/3 → 접선 기울기 3 → f'(1)=3 으로 a → (1,6) 대입으로 b → ab"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$21$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/100-187.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수직 직선의 기울기와 접점 좌표를 바꾸면 a, b 가 함께 움직인다. 제약: 접선의 기울기가 0 이 되면 수직 직선의 기울기가 정의되지 않으므로 f'(1) 이 0 이 아니어야 한다."
    creative: "(1) 수직 대신 주어진 직선과 평행 조건으로 바꾸기(★2) (2) 법선이 원점을 지나는 조건을 추가해 연립으로 만들기(★3 · I-CON d2) (3) a, b 를 각각 묻지 않고 접선이 x 축과 이루는 각을 묻는 기하 전환(★3 · I-RT d2)."
```

```yaml
- id: GN-CALC1-100-188
  page: 100
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    곡선 $y=-x^2+1$ 에 접하고 직선 $2x-y+3=0$ 에 평행한 직선의 방정식.
  category: "평행 조건으로 기울기 확정 → y'=기울기 로 접점 → 접선"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "기울기가 주어진 접선의 방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    평행이므로 기울기는 2. y'=-2x=2 에서 접점의 x 좌표가 바로 나오고 함숫값을 넣어 접선을 쓴다.
    이차함수라 접점이 하나뿐이고 분기가 없다.
    STEP 1 ★2 출발이나 통찰 0 · M_total 4 → -1 로 ★1.
    [분류 이슈] 벤더 구역은 STEP 1 이지만 이 구역에서 가장 가벼운 문항이라 ★2 로도 읽힌다 — 기록만 한다.
  tier: star_1
  mechanism_primary: "평행 → 기울기 2 → y'=2 로 접점 (-1,0) → 접선 y=2x+2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=2x+2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/100-188.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선의 계수와 평행 직선의 기울기를 바꾼다. 제약: 접점 좌표가 정수로 떨어지게 하려면 기울기가 이차항 계수의 배수여야 한다."
    creative: "(1) 삼차곡선으로 올리면 기울기가 같은 접선이 두 개 생김(★3 · 101-194 유형) (2) 수직 조건으로 바꾸기(★2) (3) 접선과 두 좌표축이 만드는 삼각형의 넓이를 묻는 한 단계 추가(★2)."
```

```yaml
- id: GN-CALC1-100-189
  page: 100
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $f(x)=x^3+ax$ 에 대하여 점 $(0,\,2)$ 에서 곡선 $y=f(x)$ 에 그은 접선의 기울기가 $5$ 일 때 $f(a)$.
  category: "곡선 밖의 점에서 그은 접선 → 접점 매개화 → 두 조건으로 a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선 밖의 점에서 그은 접선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접점을 (t, f(t)) 로 놓고 접선이 (0,2) 를 지난다는 식과 기울기가 5 라는 식을 세우는 표준 골조.
    첫 식에서 a 가 소거되어 t^3=-1 만 남는 것이 계산상의 요령이고, t 가 정해지면 a, 그다음 f(a) 는 대입.
    접점 매개화는 이 유형의 정의 절차라 통찰로 세지 않았다. STEP 1 ★2 출발 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "접점 (t,f(t)) → 접선이 (0,2) 통과 식에서 t^3=-1 → t=-1 → 기울기 5 로 a=2 → f(2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/100-189.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "외부 점의 y 좌표와 주어진 기울기를 바꾼다. 제약: 접선 통과 조건에서 a 가 소거되려면 곡선이 x^3+ax 처럼 상수항 없는 홀함수여야 하고, 그렇지 않으면 t 와 a 의 연립이 무거워진다."
    creative: "(1) 기울기를 주지 않고 접선의 개수를 묻기(★3 · I-MI d2) (2) 외부 점을 (0,k) 로 두고 접선이 세 개가 되는 k 의 범위를 묻기(★4 · I-BW d2) (3) 두 접점 사이 거리를 묻는 기하 확장(★3 · I-RT d1)."
```

```yaml
- id: GN-CALC1-101-190
  page: 101
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    두 곡선 $y=x^3+ax^2$, $y=-x^2+4$ 가 점 $(t,\,-t^2+4)$ 에서 접할 때 $a+t$.
  category: "두 곡선이 접할 조건(함숫값·미분계수 일치) → 연립 → a, t"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 곡선이 접한다는 조건을 같은 점에서 함숫값이 같고 미분계수도 같다는 두 식으로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 곡선이 접할 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접한다는 말을 f(t)=g(t) 와 f'(t)=g'(t) 두 식으로 옮기는 것이 전부이고, 미분계수 식을 먼저 써서 a 를 t 로 표현한 뒤 함숫값 식에 넣으면 t^3 만 남는다.
    t=0 이 나오는 갈래는 두 곡선의 함숫값이 다르므로 자동으로 배제된다.
    STEP 1 ★2 출발 · 통찰 1개(d1) 로 보너스 없음 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "f(t)=g(t) 와 f'(t)=g'(t) 연립 → a 를 t 로 소거 → t=-2 → a=2 → a+t"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/101-190.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "포물선의 상수항과 삼차곡선의 이차항 계수를 바꾼다. 제약: 소거 후 t 에 대한 방정식이 완전세제곱 또는 유리근을 갖도록 상수항을 고른다(여기서는 4 → t^3=-8)."
    creative: "(1) 접점을 주지 않고 두 곡선이 접하도록 하는 a 를 모두 구하게 하면 후보 기각이 생김(★3 · I-VF d1) (2) 접점에서의 공통접선의 방정식을 묻기(★3) (3) 두 곡선이 접하지 않고 서로 다른 두 점에서 만날 조건으로 바꾸기(★4 · I-MI d2)."
```

```yaml
- id: GN-CALC1-101-191
  page: 101
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $f(x)=-x^2+kx$ 에 대하여 $[1,\,3]$ 에서 롤의 정리를 만족시키는 실수를 $c_1$, $[1,\,5]$ 에서 평균값 정리를 만족시키는 실수를 $c_2$ 라 할 때 $c_1c_2$.
  category: "롤의 정리 성립 조건으로 k 결정 → 두 정리를 차례로 적용"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "k 가 상수로만 주어져 있으나 롤의 정리가 성립한다는 전제 자체가 f(1)=f(3) 이라는 숨은 조건이어서 k 를 먼저 확정해야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "한 함수에 롤의 정리와 평균값 정리를 함께 적용"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    k 가 미지인 채로 두 정리를 적용하려다 막히는 문항이다. 롤의 정리가 성립한다는 전제에서 f(1)=f(3) 으로 k 가 먼저 정해진다는 점이 관문.
    k 가 정해지면 c_1 은 f'(x)=0 의 근, c_2 는 f'(x)=평균변화율 의 근으로 각각 한 줄이다.
    STEP 1 ★2 출발이나 숨은 조건 추출 통찰과 두 정리 연속 적용 · M_total 7 → +1 로 ★3. 벤더 신호와 1단 차이라 분류 이슈로 올리지는 않았다.
  tier: star_3
  mechanism_primary: "롤 성립 → f(1)=f(3) → k=4 → f'(c_1)=0 으로 c_1 → f'(c_2)=평균변화율 로 c_2 → 곱"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/101-191.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "롤의 구간 [1,3] 과 평균값의 구간 [1,5] 를 바꾸면 k 와 두 c 가 함께 움직인다. 제약: 이차함수에서 c 는 항상 구간의 중점이므로 c_1 은 롤 구간의 중점, c_2 는 평균값 구간의 중점으로 자동 결정된다 — 이 성질을 쓰면 계산 없이 답이 나온다."
    creative: "(1) 이차함수를 삼차함수로 올리면 중점 성질이 깨져 두 c 를 각각 풀어야 함(★4) (2) c_1=c_2 가 되도록 하는 구간을 묻는 역방향(★4 · I-BW d2) (3) k 를 그대로 두고 c_1c_2 를 k 의 식으로 나타내게 하면 Mₐ 상승(★3 유지 · I-SYM d1)."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC1-101-192
  page: 101
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    곡선 $y=x^4$ 위의 점 $(a,\,a^4)$ 에서의 접선과 $y$ 축의 교점을 $(0,\,h(a))$ 라 할 때 $\displaystyle\lim_{a\to\infty}\dfrac{h(\sqrt{a^2+a})-h(a)}{a^3}$.
  category: "접선의 y 절편을 매개변수의 함수로 표현 → 무한대 극한"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "기하적 대상인 접선의 y 절편을 매개변수 a 의 함수 h(a)=-3a^4 로 옮겨 극한 계산 대상으로 바꾸는 표현 전환"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "h 가 사차식이라 h(루트(a^2+a))-h(a) 에서 a^4 항이 상쇄되고 a^3 항만 남는다는 것을 보고 분모 a^3 과 맞추는 것(평균값 정리로 h'(c)(루트(a^2+a)-a) 로 환원해도 같은 결론)"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "접선의 절편을 매개변수의 함수로 보고 극한 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    먼저 접선 y=4a^3(x-a)+a^4 에서 y 절편 h(a)=-3a^4 를 얻는 것이 1단계이고, 나머지는 사차식 차의 극한이다.
    루트(a^2+a) 를 그대로 제곱해 넣으면 a^4 이 상쇄되고 최고차가 a^3 으로 떨어지는 구조를 봐야 분모와 차수가 맞는다.
    STEP 2 ★3 출발 · 통찰 2개지만 둘 다 표준 도구 조합이라 +1 을 주지 않고 ★3 유지.
  tier: star_3
  mechanism_primary: "접선 → h(a)=-3a^4 → h(루트(a^2+a))-h(a) 전개 시 a^4 상쇄 → a^3 계수 비교 → -6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/101-192.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선의 차수(x^3, x^5)와 안쪽 식 루트(a^2+a) 의 일차항 계수, 분모의 차수를 함께 바꾼다. 제약: 최고차 상쇄 뒤 남는 차수와 분모의 차수가 일치해야 0 도 무한대도 아닌 값이 나온다 — 곡선 차수 n 이면 분모는 a^(n-1) 이 맞다."
    creative: "(1) y 절편 대신 x 절편으로 바꾸면 h(a)=3a/4 가 되어 극한이 단순해짐(★2) (2) 평균값 정리로 풀도록 유도 문구를 넣으면 단원 정합이 살아남(★3 · I-RT d2) (3) 극한을 a 에서 0 으로 보내면 미분계수 정의 문제로 성격이 바뀜(★3)."
```

```yaml
- id: GN-CALC1-101-193
  page: 101
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    다항함수 $f(x)$ 가 $\displaystyle\lim_{x\to 2}\dfrac{f(x^3)}{x-2}=24$ 를 만족시킬 때 곡선 $y=f(x)$ 위의 점 $(8,\,f(8))$ 에서의 접선의 방정식.
  category: "극한 존재 조건 → f(8)=0 → 미분계수 정의 꼴 분해 → f'(8)"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분모가 0 으로 가는데 극한값이 유한하므로 분자도 0 이어야 한다는 조건에서 f(8)=0 을 끌어내는 동치 변환"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(x^3)/(x-2) 를 {f(x^3)-f(8)}/(x^3-8) 와 (x^3-8)/(x-2) 의 곱으로 갈라 각각 미분계수와 인수분해 극한으로 읽는 표현 전환"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "극한 조건에서 미분계수를 찾아 접선의 방정식 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f 가 구체적으로 주어지지 않아 Mₐ=3 이고, 주어진 극한 하나에서 f(8) 과 f'(8) 두 정보를 모두 꺼내야 접선을 쓸 수 있다.
    분해 후 뒤쪽 인수는 12 로 수렴하므로 앞쪽이 f'(8)=2 로 정해진다.
    [분류 이슈] 통찰 2개(d1+d2)·M_total 8 로 ★4 후보이나 수능·모평에서 반복 노출된 표준 골조라 ★3 라벨로 두고 기록만 한다.
    STEP 2 ★3 출발 유지.
  tier: star_3
  mechanism_primary: "분모→0 이므로 f(8)=0 → {f(x^3)-f(8)}/(x^3-8) 곱하기 (x^3-8)/(x-2) → f'(8)x12=24 → f'(8)=2 → 접선"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$y=2x-16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/101-193.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "안쪽 합성 x^3 의 지수와 접근값 2, 극한값 24 를 바꾼다. 제약: (x^n - a^n)/(x-a) 의 극한이 n·a^(n-1) 이므로 극한값이 이 값의 배수여야 f'가 정수로 떨어진다."
    creative: "(1) f(8)=0 을 발문에 명시해 주면 통찰 하나가 줄어 ★2 (2) 합성을 x^3 대신 다른 다항식으로 바꿔 내부 도함수까지 곱해지게 하기(★4 · I-XU 없이도 단계 증가) (3) 접선 대신 f(x)/(x-8) 의 극한을 묻기(★3 유지)."
```

```yaml
- id: GN-CALC1-101-194
  page: 101
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    곡선 $y=-x^3+3x^2-x+1$ 에 접하고 기울기가 $-1$ 인 두 직선 사이의 거리.
  category: "기울기 조건으로 두 접점 → 두 평행 접선 → 평행선 사이 거리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구한 두 접선을 대수식이 아니라 평행한 두 직선으로 보고 점과 직선 사이의 거리 공식으로 옮기는 기하 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "기울기가 같은 두 접선 사이의 거리"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    y'=-1 을 풀면 접점의 x 좌표가 두 개 나오고, 삼차곡선이라 기울기가 같은 접선이 둘이라는 점이 출발이다.
    두 접선을 모두 구한 뒤 한 직선 위의 점을 다른 직선에 대한 거리 공식에 넣으면 끝난다.
    STEP 2 ★3 출발 · 통찰 1개(d1) 로 보너스 없음 · M_total 6 → ★3 유지.
  tier: star_3
  mechanism_primary: "y'=-1 로 접점 두 개 → 접선 두 개 → 평행선 사이 거리 공식"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/101-194.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "주어진 기울기와 삼차식의 계수를 바꾼다. 제약: y'=m 이 서로 다른 두 실근을 가져야 접선이 둘이고(판별식 양수), 접점 좌표가 정수가 되면 거리 계산이 깔끔하다."
    creative: "(1) 두 접선 사이 거리가 최대가 되는 기울기를 묻기(★4 · I-BW d2) (2) 두 접점을 잇는 선분의 중점이 변곡점임을 이용하게 하기(★4 · I-SYM d2) (3) 거리 대신 두 접선과 y 축이 이루는 삼각형의 넓이를 묻기(★3 유지)."
```

```yaml
- id: GN-CALC1-101-195
  page: 101
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    원점 $\pt{O}$ 에서 곡선 $y=x^4-2x^2+8$ 에 그은 두 접선의 접점을 $\pt{P}$, $\pt{P'}$ 이라 할 때 삼각형 $\pt{OPP'}$ 의 넓이. 그림 제시.
  category: "곡선 밖의 점에서 그은 접선 → 접점 두 개 → 대칭 이용한 삼각형 넓이"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "원점에서 그은 접선이라는 조건을 접점 (t, f(t)) 에서 기울기 f'(t) 와 f(t)/t 가 같다는 한 식으로 동치 변환"
    - step: 3
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "곡선이 짝함수라 두 접점이 y 축에 대칭임을 이용해 밑변 PP-prime 과 원점까지의 높이를 좌표 계산 없이 읽는 것"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "곡선 밖의 점에서 그은 두 접선과 삼각형의 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접점을 t 로 놓고 f'(t)=f(t)/t 를 정리하면 t 에 대한 사차식이 복이차식으로 떨어져 t^2 이 하나로 정해진다.
    곡선이 짝함수라 두 접점의 y 좌표가 같고 x 좌표는 부호만 다르므로 밑변은 두 접점의 x 좌표 차, 높이는 공통 y 좌표가 된다.
    STEP 2 ★3 출발 · 통찰 2개지만 둘 다 d1 이라 +1 없이 ★3 유지. 그림은 접선이 두 개라는 상황 제시용이고 골조에 영향이 없다.
  tier: star_3
  mechanism_primary: "f'(t)=f(t)/t → 복이차식 → t^2=2 → 짝함수 대칭으로 밑변 2루트2 · 높이 8 → 넓이"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$8\sqrt{2}$'
  answer_source: "답지"
  figure: "crop:fig-101-195.png"
  latex: latex-bank/gn-calc1/items/101-195.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "사차식의 이차항 계수와 상수항을 바꾼다. 제약: 곡선은 짝함수를 유지해야 대칭 골조가 살고, 정리한 복이차식이 t^2 에 대해 양의 실근을 하나만 가져야 접점이 정확히 둘이 된다."
    creative: "(1) 외부 점을 y 축 위의 다른 점 (0,k) 로 옮기면 대칭은 유지되고 k 에 따른 접선 개수 분기가 생김(★4 · I-MI d2) (2) 외부 점을 y 축 밖으로 옮기면 대칭이 깨져 계산량이 급증(★4) (3) 삼각형 넓이 대신 두 접선이 이루는 각을 묻기(★4 · I-RT d2)."
```

```yaml
- id: GN-CALC1-102-196
  page: 102
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["수능 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    삼차함수 $f(x)$ 에 대하여 곡선 $y=f(x)$ 위의 점 $(0,\,0)$ 에서의 접선과 곡선 $y=xf(x)$ 위의 점 $(1,\,2)$ 에서의 접선이 일치할 때 $f'(2)$. 5지선다.
  category: "두 접선이 일치할 조건 → f 의 네 조건 → 미정계수 결정 → f'(2)"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 접선이 일치한다는 한 문장을 기울기가 같다와 원점을 지난다는 두 식으로 분해·통합해 f-prime(1)=0 과 f-prime(0)=2 를 동시에 끌어내는 것"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "곱함수 y=xf(x) 의 점 (1,2) 에서의 기울기를 곱의 미분법으로 f(1)+f-prime(1) 로 바꿔 쓰는 것"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "두 곡선의 접선이 일치할 조건"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    f 가 구체식 없이 삼차함수로만 주어져 Mₐ=3 이고, 일치 조건에서 f(0)=0 · f(1)=2 · f-prime(1)=0 · f-prime(0)=2 네 정보를 모두 뽑아야 계수 세 개가 정해진다.
    한 접선이 원점을 지난다는 사실을 다른 접선 쪽에 옮겨 쓰는 것이 관문이고, 이후는 연립과 대입.
    STEP 2 ★3 출발 · 수능 기출 태그 + 조건 통합 통찰(d2) 포함 2개 · M_total 9 → +1 로 ★4. 저노출 유형 요건은 I-CON 으로 충족.
  tier: star_4
  mechanism_primary: "접선 일치 → 원점 통과와 기울기 일치로 f-prime(1)=0 · f-prime(0)=2 → f(x)=-2x^3+2x^2+2x → f-prime(2)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/102-196.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점 (1,2) 의 좌표와 묻는 지점 f-prime(2) 를 바꾼다. 제약: f(0)=0 이어야 곱함수 쪽 접선이 원점을 지나 조건이 닫히고, 삼차함수 계수 세 개를 정하려면 독립 조건이 정확히 세 개 나와야 한다."
    creative: "(1) y=xf(x) 대신 y=f(x)^2 이나 y=f(2x) 로 바꾸면 합성·곱 미분이 달라져 단계 증가(★4 유지) (2) 두 접선이 일치가 아니라 수직일 조건으로 바꾸기(★4 · I-EQV d2) (3) f 를 사차함수로 올리면 조건이 하나 모자라 범위를 묻는 문제로 성격 전환(★5 후보)."
```

```yaml
- id: GN-CALC1-102-197
  page: 102
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    두 곡선 $y=x^3-3x^2-8x-4$, $y=3x^2+7x+4$ 가 점 $\pt{P}$ 에서 접할 때 $\pt{P}$ 를 지나고 그 접선에 수직인 직선의 방정식.
  category: "두 곡선이 접할 조건 → 후보 검증으로 접점 확정 → 법선"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접한다는 조건을 같은 x 에서 함숫값이 같고 미분계수도 같다는 두 식으로 동치 변환"
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "미분계수 일치 식에서 나온 두 후보 x=5 와 x=-1 중 함숫값 일치 식을 만족하지 않는 x=5 를 기각해야 접점이 확정됨"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "두 곡선이 접할 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    미분계수 일치 쪽이 이차방정식이라 후보가 둘 나오고, 함숫값 일치 식에 넣어 한쪽을 버리는 사후 검증이 필수인 구조다.
    접점이 정해지면 접선의 기울기에서 법선의 기울기를 뒤집어 직선을 쓰는 마무리는 짧다.
    [분류 이슈] I-VF 를 포함한 통찰 2개로 v3.8 §2.13 의 ★4 권장 요건을 채우지만 기각이 대입 한 번에 보여 체감은 ★3 이라 ★3 라벨로 두고 기록만 한다.
  tier: star_3
  mechanism_primary: "f(x)=g(x) 와 f-prime(x)=g-prime(x) 연립 → 후보 x=5, -1 중 x=5 기각 → P(-1,0) → 법선 기울기 -1"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$y=-x-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/102-197.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 곡선의 계수를 바꾸되 도함수 일치 이차방정식이 서로 다른 두 유리근을 갖게 한다. 제약: 두 근 중 하나만 함숫값 일치 식을 만족해야 I-VF 골조가 살아 있고, 둘 다 만족하면 접점이 두 개인 다른 문제가 된다."
    creative: "(1) 두 근 모두 접점이 되게 설계해 두 접점 사이 거리를 묻기(★4 · I-MI d2) (2) 삼차곡선을 y=x^3+ax 꼴로 두고 접할 조건의 a 를 묻는 역방향(★4 · I-BW d2) (3) 법선 대신 두 곡선이 이루는 넓이로 확장(단원 밖)."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC1-102-198
  page: 102
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    곡선 $y=\dfrac{1}{3}x^3-6x$ $(x>0)$ 위의 점 $\pt{P}$ 와 직선 $3x-y-20=0$ 사이의 거리가 최소일 때, $\pt{P}$ 에서의 접선과 $x$ 축 · $y$ 축으로 둘러싸인 도형의 넓이. 그림 제시.
  category: "거리 최소 → 접선이 직선과 평행 → 접선의 절편 → 삼각형 넓이"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "점과 직선 사이 거리가 최소라는 기하 조건을 그 점에서의 접선이 주어진 직선과 평행하다는 미분 조건으로 옮기는 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "점과 직선 사이의 거리가 최소인 접점"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    거리 함수를 직접 미분하지 않고 접선이 직선과 평행해지는 점이 최근접점이라는 기하 사실로 갈아타는 것이 이 문항의 유일한 관문이다.
    y-prime=3 에서 x>0 조건으로 접점이 하나로 정해지고, 접선의 두 절편으로 직각삼각형 넓이를 계산하면 끝난다.
    [분류 이슈] 실력 UP 구역 ★4 출발을 유지했으나 관문이 표준 한 수이고 이후가 계산이라 ★3 후보로도 읽힌다 — 기록만 한다.
  tier: star_4
  mechanism_primary: "거리 최소 → 접선 기울기 3 → y-prime=3 과 x>0 으로 접점 (3,-9) → 접선 y=3x-18 → 절편 6, -18 → 넓이"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$54$'
  answer_source: "답지"
  figure: "crop:fig-102-198.png"
  latex: latex-bank/gn-calc1/items/102-198.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 기울기와 삼차함수의 일차항 계수를 바꾼다. 제약: y-prime=m 의 근 중 정확히 하나만 x>0 에 있어야 접점이 유일하고, 직선이 곡선과 만나지 않아야 최소 거리가 0 이 되지 않는다."
    creative: "(1) 넓이 대신 최소 거리 자체를 묻기(★3 · 계산만 추가) (2) x>0 제한을 없애면 접점이 둘이 되어 최소·최대 비교가 생김(★4 · I-MI d2) (3) 직선을 매개변수로 두고 최소 거리가 주어진 값이 되게 하는 절편을 묻는 역방향(★5 후보 · I-BW d3)."
```

```yaml
- id: GN-CALC1-102-199
  page: 102
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    곡선 $y=x^3-3x^2+2x$ 를 $x$ 축 방향으로 $a$, $y$ 축 방향으로 $b$ 만큼 평행이동한 곡선이 직선 $y=-x+2$ 에 접할 때 $a+b$.
  category: "평행이동한 곡선의 접할 조건 → 접점의 상대좌표 고정 → a+b 한 식"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "평행이동한 곡선의 도함수는 u=x-a 로 보면 원곡선의 도함수와 같으므로 기울기 조건이 u 에 대한 방정식 3u^2-6u+3=0 으로 a 와 무관하게 정해진다는 것"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "a 와 b 가 개별로는 결정되지 않고 접점이 직선 위에 있다는 조건이 a+b 하나만 묶어 준다는 구조를 받아들이는 것"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "평행이동한 곡선이 직선에 접할 조건"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    평행이동을 u=x-a 치환으로 흡수하면 기울기 -1 조건이 (u-1)^2=0 이라는 중근이 되어 접점의 상대 위치가 유일하게 u=1 로 고정된다.
    그 접점의 좌표가 (a+1, b) 이고 이것이 직선 위에 있다는 한 식이 b=1-a 를 주므로 a+b 만 확정된다 — 미지수 두 개에 식 하나인데 묻는 것이 합이라 답이 나오는 구조가 관문이다.
    실력 UP ★4 출발 · 통찰 2개(모두 d2) · M_total 8 → ★4 유지.
  tier: star_4
  mechanism_primary: "u=x-a 치환 → 3u^2-6u+3=0 중근 u=1 → 접점 (a+1, b) → 직선 위 조건 b=1-a → a+b=1"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/102-199.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선의 기울기와 삼차식의 계수를 바꾼다. 제약: 도함수 방정식이 중근을 가져야 접점이 유일해 a+b 가 하나로 정해지고, 서로 다른 두 근이면 접점이 둘이라 a+b 가 두 값이 된다."
    creative: "(1) 도함수 방정식이 서로 다른 두 근을 갖게 해 a+b 의 최댓값을 묻기(★5 후보 · I-MI d2 추가) (2) 평행이동 대신 원점 대칭이동·확대로 바꾸기(★4 유지 · I-SYM d2) (3) a, b 를 각각 구할 수 있도록 조건을 하나 더 주면 난이도 하락(★3)."
```

```yaml
- id: GN-CALC1-102-200
  page: 102
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    실수 전체에서 미분가능한 $f(x)$ 가 $\displaystyle\lim_{x\to\infty}f'(x)=2$ 일 때 $\displaystyle\lim_{x\to\infty}\{f(x+3)-f(x-1)\}$ 의 값을 평균값 정리를 이용하여 구하기.
  category: "평균값 정리로 함숫값 차를 도함수 값으로 전환 → 무한대 극한"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구체식이 없는 f 의 함숫값 차 f(x+3)-f(x-1) 을 평균값 정리로 4f-prime(c) 라는 도함수 표현으로 바꾸는 전환"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "c 가 x-1 과 x+3 사이에 끼여 있으므로 x 를 무한대로 보내면 c 도 무한대로 간다는 조임 논증으로 f-prime(c) 의 극한을 2 로 확정하는 것"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "평균값 정리를 이용한 함숫값 차의 극한"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    이 범위에서 평균값 정리를 도구로 쓰는 유일한 문항이다. f 의 식이 전혀 없어 Mₐ=3 이고, 함숫값 차를 다룰 수단이 평균값 정리뿐이다.
    구간 길이가 4 로 고정되므로 차는 4f-prime(c) 이고, c 가 구간에 갇혀 있다는 점에서 x 를 무한대로 보내면 c 도 무한대가 되어 극한이 4x2 로 닫힌다.
    실력 UP ★4 출발 · 통찰 2개(모두 d2) · M_total 7 → ★4 유지. 저노출 유형 요건은 I-RT 로 충족.
  tier: star_4
  mechanism_primary: "평균값 정리로 f(x+3)-f(x-1)=4f-prime(c), x-1<c<x+3 → x→무한대일 때 c→무한대 → 4x2=8"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/102-200.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간의 두 끝 x+3, x-1 의 간격과 도함수의 극한값 2 를 바꾸면 답은 간격 곱하기 극한값이다. 제약: 간격은 상수여야 하고, 간격이 x 에 따라 변하면 극한이 달라져 골조가 무너진다."
    creative: "(1) 간격을 1/x 처럼 0 으로 보내 도함수 정의와 연결하기(★5 후보 · I-EQV d3) (2) 도함수 극한 대신 f(x)/x 의 극한을 주고 같은 결론을 유도하게 하기(★4 유지) (3) 평균값 정리를 쓰지 말고 반례로 다른 접근이 실패함을 설명하게 하는 서술형(★4 · I-SC d2)."
```

## 표본 판정 요약 (25문)

- ★ 분포: ★1 5 · ★2 9 · ★3 7 · ★4 4 · ★5 0
- 통찰형 14 · 절차형 11 · premium 0
- 통찰 유형 분포(연 21회): I-EQV 12 · I-RT 5 · I-CON 2 · I-SYM 1 · I-VF 1 (depth 1 이 12 · depth 2 가 9 · depth 3 없음)
- type_hint 상위: 「롤의 정리를 만족시키는 c 구하기」 2 · 「평균값 정리를 만족시키는 c 구하기」 2 · 「두 곡선이 접할 조건」 2 · 「곡선 밖의 점에서 그은 접선」 계열 2 · 나머지 19종은 각 1
- 대상층: 하위권 5 · 중하위권 6 · 중위권 7 · 중상위권 7 · 상위권 0
- 그림: 2문(`crop:fig-101-195.png` · `crop:fig-102-198.png`) — 둘 다 상황 제시용이라 골조·답에 영향 없음
- 구역별 ★ 평균: 필수·발전 예제 1.43 · STEP 1 2.11 · STEP 2 3.17 · 실력 UP 4.00 (벤더 위계와 단조 일치)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC1-98-e8 | 벤더 「필수」 예제(★2 출발)이나 통찰 0 · M_total 5 → ★1 로 내림. 예제 위계와 실제 난이도가 어긋나는 사례 | ★1 / ★2 |
| GN-CALC1-99-e9 | 위와 같음. 평균값 정리 정의 적용 한 줄이라 ★1 | ★1 / ★2 |
| GN-CALC1-100-188 | STEP 1(★2 출발)이나 M_total 4 · 분기 없음 → ★1 로 내림. 이 구역에서 가장 쉬운 문항 | ★1 / ★2 |
| GN-CALC1-101-193 | 통찰 2개(d1+d2) · M_total 8 로 ★4 요건에 근접하나 수능·모평 반복 노출 표준 골조라 ★3 라벨 | ★3 / ★4 |
| GN-CALC1-102-197 | I-VF 포함 통찰 2개로 v3.8 §2.13 ★4 권장 요건 충족이나 후보 기각이 대입 한 번에 보여 ★3 라벨 | ★3 / ★4 |
| GN-CALC1-102-198 | 실력 UP(★4 출발) 유지했으나 관문이 「평행 접선」 표준 한 수이고 이후는 계산이라 ★3 로도 읽힘 | ★3 / ★4 |

## 카탈로그 차원 메모

나중에 미적분Ⅰ 유형 카탈로그를 만들 때 참고할 사항.

1. **단원 경계 문제가 가장 크다.** 이 단원의 제목은 「평균값 정리」지만 연습문제 18문 중 접선의 방정식 계열이 13문(STEP 1 9문 중 7문, STEP 2 6문 중 5문, 실력 UP 3문 중 1문)이고 평균값 정리·롤의 정리 계열은 예제·확인체크 7문과 연습문제 5문(100-183 · 101-191 · 99-181 계열 · 102-200)뿐이다. 카탈로그는 「평균값 정리」와 「접선의 방정식」을 별개 단원 축으로 세우고, 개념원리 11단원 연습문제는 두 축에 나눠 배정해야 한다.
2. **따로 세워야 할 유형**: ⑴ 「롤·평균값 정리에서 c 구하기」(98-e8 · 98-178 · 99-e9 · 99-180 — 이차/삼차를 한 유형으로 묶어도 무방) ⑵ 「정리 성립 조건으로 미지의 구간 끝·계수 구하기」(98-179 · 99-182 · 101-191 — 역방향 골조가 공통) ⑶ 「곡선 밖의 점에서 그은 접선」(100-189 · 101-195 — 접점 매개화가 공통 골조이고 대칭 활용 여부로 ★ 가 갈림) ⑷ 「두 곡선이 접할 조건」(101-190 · 102-197 · 102-199 — 함숫값·미분계수 동시 일치가 공통이며 후보 기각 유무로 ★3↔★4) ⑸ 「평균값 정리를 도구로 쓰는 극한」(102-200 · 101-192 의 다른 풀이 — 미적분Ⅰ 상위 변별 슬롯 후보).
3. **통합해도 될 유형**: 「기울기가 주어진 접선」(100-188)과 「접선에 수직·평행한 직선 조건」(100-187 · 101-194)은 기울기를 먼저 확정한 뒤 y-prime=m 을 푸는 동일 골조라 한 유형의 난이도 단계로 두면 된다. 「평균변화율과 접선의 기울기가 같아지는 점」(100-183)도 실질은 평균값 정리 c 구하기와 같은 유형이므로 발문 표현만 다른 변형으로 묶는다.
4. **★ 5 부재**: 이 범위에는 ★5 가 없다. v3.8 §2.13 기준(통찰 3개 이상 + SC/VF/SYM/XU 중 하나)을 만족하는 문항이 없고, 가장 높은 102-196·102-199 도 통찰 2개에 머문다. ★5 슬롯은 이 단원 원본을 변형할 때 `variation_notes.creative` 의 ★5 후보 항목(102-198 ⑶ · 102-199 ⑴ · 102-200 ⑴)에서 만들어야 한다.
5. **effective_star 재산정 대상**: 카탈로그가 생기면 25문 전부 `base_star` 를 채우고 v3.8 산식으로 `effective_star` 를 다시 계산해야 한다. 현재 값은 모두 `star` 와 같게 둔 잠정값이다.
