---
name: mechanism-데이터-GN-CM2-15
description: 개념원리 공통수학2 15 집합 사이의 포함 관계(1/1 · 130-308~136-335) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: 15 집합 사이의 포함 관계
  unit_code: CM2-15
  part: "1/1"
  extract_range: "130~136쪽 · 130-308~136-335"
  total_problems: 33
  unit_total: 33
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 15 집합 사이의 포함 관계 (1/1) 정독 데이터 (v1.0)

이 파일은 15단원 33문 전수(130~136쪽 · 통번호 130-308~136-335)를 다룬다. 구역은 「개념원리 익히기」 5문 · 「필수·발전 예제」 16문(필수 5 · 확인체크 11) · 「연습문제 STEP 1」 5문 · 「STEP 2」 5문 · 「실력 UP」 2문이다. 단원 전체가 **세 개의 축**으로 배열돼 있다. ⑴ 기호 축 — `∈`/`⊂`, `=`/`≠` 판정과 원소가 집합인 경우(`∅`, `{a,b}`)의 이중 지위. ⑵ 미지수 축 — `A⊂B`·`A=B` 를 원소 대응으로 옮겨 상수를 구하고 후보를 검증. ⑶ 개수 축 — `2^n`, `2^(n-k)`, 여사건, `A⊂X⊂B`. 그림은 131-313 한 문항(벤다이어그램)뿐이고 선택지 문항은 5문이다.

벤더 난이도 신호와 이 파일의 출발점 규약: 「개념원리 익히기」 통번호 ★1 · 「필수」 예제 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4. **tag 「확인체크」 문항은 구역 신호를 우선**해 「필수·발전 예제」 구역 안의 확인체크는 바로 위 예제와 같은 출발점(필수 아래 ★2)으로 두었다(예제의 유제 배치이므로 통번호 익히기의 ★1과 구분한다). 출발점에서 M_total·통찰로 ±1 조정했다. 이 단원에서 반복되는 두 규약을 33문 전체에 일관 적용했다. ⒜ **공식의 역산**(`2^(n-k)=16 → n`)은 표준 절차로 보아 I-BW 로 세지 않고 Mₐ(매개변수)에 반영한다. ⒝ **「적어도 하나」의 여사건 전환**은 갈래 선택이 뚜렷하므로 I-SC d1 로 세고, **후보 중 일부를 원 조건에 재대입해 버리는 단계**는 I-VF 로 센다(단순 부호·중복 제거는 Mₜ 로만 반영).

이 파일의 주 용도는 숫자 변형·창의 변형의 **원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM2-130-308
  page: 130
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴⑵ 주어진 집합의 부분집합을 모두 구하기(⑵는 9의 양의 약수로 조건제시).
  category: "원소 나열 → 크기 0~n 부분집합 전수 열거"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분집합 모두 구하기(공집합·자기 자신 포함)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    조건제시형을 원소나열로 바꾼 뒤 원소 개수별로 빠짐없이 적는 것이 전부다.
    함정은 공집합과 자기 자신을 빠뜨리는 것(T-범위) 하나뿐.
    익히기 구역·통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: '원소 나열 → 크기 $0,1,\cdots,n$ 부분집합 전수 열거(공집합·자기 자신 포함)'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\varnothing$, $\{2\}$, $\{4\}$, $\{2,\,4\}$ ⑵ $\varnothing$, $\{1\}$, $\{3\}$, $\{9\}$, $\{1,\,3\}$, $\{1,\,9\}$, $\{3,\,9\}$, $\{1,\,3,\,9\}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/130-308.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '원소 개수를 2~3개로 유지한 채 밑집합을 바꾼다(12의 양의 약수는 6개라 64개가 되어 열거형으로 부적합). 제약 — 전수 열거를 시키려면 $n\le 3$, 조건제시형은 원소가 확정적으로 결정돼야 한다.'
    creative: '(1) 진부분집합만 구하게(★1 유지 · 311과 동일 골조) (2) 원소 개수만 묻기(★1 · 312 골조) (3) 원소에 집합을 섞어 $\{1,\,\{2\}\}$ 의 부분집합을 구하게 하면 기호 축과 결합해 ★2.'
```

```yaml
- id: GN-CM2-130-309
  page: 130
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 두 집합 사이에 기호 ⊂, ⊄ 중 알맞은 것 넣기(⑶은 공집합).
  category: "조건제시 → 원소나열 → 원소 전부 포함 여부 확인"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "포함 관계 기호 ⊂, ⊄ 판정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    왼쪽 집합의 원소가 전부 오른쪽에 있는지만 본다. ⑵는 b 하나가 빠져 ⊄.
    ⑶은 공집합이 모든 집합의 부분집합이라는 약속을 아는지 묻는 자리(T-범위).
    익히기 구역·통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: '조건제시를 원소나열로 → 왼쪽 원소가 전부 오른쪽에 있는가 → $\subset$ 또는 $\not\subset$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\subset$ ⑵ $\not\subset$ ⑶ $\subset$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/130-309.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '조건제시의 범위(정수 $1\le x\le 3$)와 원소 문자를 바꾼다. 제약 — 세 문항 중 하나는 ⊄, 하나는 공집합이 들어가도록 배치해야 확인 기능이 유지된다.'
    creative: '(1) 방향을 뒤집어 오른쪽이 왼쪽에 포함되는지 묻기(★1) (2) $\in$ 과 $\subset$ 을 섞어 넣게 하면 기호 축 함정이 붙어 ★2(315 골조) (3) 빈칸 대신 옳은 것을 보기에서 고르게(★1~2 · 314 골조).'
```

```yaml
- id: GN-CM2-130-310
  page: 130
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 두 집합 사이에 기호 =, ≠ 중 알맞은 것 넣기(⑴은 이차방정식의 해집합, ⑶은 2의 거듭제곱).
  category: "양변을 원소나열로 → 원소가 완전히 같은가"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "서로 같은 집합 판정(원소나열 후 대조)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴은 중근이라 해집합이 {1} 하나뿐이고, ⑵는 3이 있어 공집합이 아니며, ⑶은 같다.
    각 변을 원소나열로 옮기는 한 단계가 전부이고 함정은 중근·공집합 오인(T-범위).
    익히기 구역·통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: '양변을 원소나열로 전개 → 원소 집합이 완전히 일치하는가 → $=$ 또는 $\ne$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\ne$ ⑵ $\ne$ ⑶ $=$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/130-310.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴의 이차방정식을 서로 다른 두 근짜리로 바꾸면 답이 =로 뒤집힌다. ⑶의 지수 범위 $n=1,2,3$ 을 바꾼다. 제약 — 중근·공집합 사례를 최소 하나는 남겨야 확인 기능이 산다.'
    creative: '(1) 세 집합을 주고 같은 것끼리 짝 짓게(★2) (2) 조건제시 쪽에 미지수를 넣어 같아지는 상수를 구하게 하면 미지수 축으로 넘어가 ★2(e9 골조) (3) 원소의 순서·중복 표기를 섞어 같은 집합인지 묻기(★1).'
```

```yaml
- id: GN-CM2-130-311
  page: 130
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    5 이하의 소수로 이루어진 집합의 진부분집합을 모두 구하기.
  category: "원소 나열 → 부분집합 전수 열거 → 자기 자신 제외"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "진부분집합 모두 구하기(자기 자신 제외)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    조건제시를 {2, 3, 5}로 옮긴 뒤 부분집합 8개에서 자기 자신만 뺀다.
    1을 소수로 넣는 실수와 자기 자신을 빼지 않는 실수(T-범위)가 전부.
    익히기 구역·통찰 0·M_total 4 → ★1 · 308과 같은 골조에 제외 조건 하나 추가.
  tier: star_1
  mechanism_primary: '5 이하의 소수 → $\{2,\,3,\,5\}$ → 부분집합 8개 열거 → 자기 자신 제외'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\varnothing$, $\{2\}$, $\{3\}$, $\{5\}$, $\{2,\,3\}$, $\{2,\,5\}$, $\{3,\,5\}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/130-311.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '조건을 10 이하의 소수(4개 → 진부분집합 15개)로 올리면 열거가 벅차진다. 제약 — 전수 열거형은 원소 3개가 상한이고, 소수·약수처럼 원소가 확정되는 조건만 쓴다.'
    creative: '(1) 개수만 묻기(★1) (2) 원소 2개짜리 진부분집합만 구하게(★1~2) (3) 진부분집합의 개수가 15가 되는 집합의 원소 개수를 묻는 역산으로 바꾸면 ★2(327 골조).'
```

```yaml
- id: GN-CM2-130-312
  page: 130
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 16의 양의 약수의 집합 A에 대해 부분집합의 개수, 진부분집합의 개수, 1과 16을 반드시 갖는 부분집합의 개수, 16을 갖지 않는 부분집합의 개수.
  category: "원소 개수 확정 → 2^n · 2^n-1 · 2^(n-k) 네 공식 적용"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분집합·진부분집합의 개수와 특정 원소 조건 개수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    16의 양의 약수 5개를 확정한 뒤 이 단원 개수 공식 네 개를 한 번씩 적용한다.
    반드시 갖는 원소와 갖지 않는 원소가 모두 지수에서 빠진다는 점이 핵심(⑶⑷ 둘 다 2^(5-k)).
    익히기 구역·통찰 0·M_total 5 → −1 후보지만 ★1이 하한 → ★1.
  tier: star_1
  mechanism_primary: '$n(A)=5$ 확정 → $2^5$ / $2^5-1$ / $2^{5-2}$ / $2^{5-1}$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $32$ ⑵ $31$ ⑶ $8$ ⑷ $16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/130-312.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑집합을 24·36의 양의 약수(각 8개·9개)로 바꾸고 지정 원소 개수 k를 1~3으로 조절한다. 제약 — 약수 개수가 바뀌면 네 답이 모두 바뀌므로 지수 계산이 2의 거듭제곱 표로 감당되는 범위($n\le 6$)로 둔다.'
    creative: '(1) ⑶⑷를 합쳐 1은 갖고 16은 갖지 않는 개수로 묶기(★1~2 · 319 골조) (2) 개수를 주고 원소 개수 n을 역산(★2 · 327 골조) (3) 적어도 하나의 홀수를 갖는 개수를 추가하면 여사건 착안이 붙어 ★2(e10 골조).'
```

### 필수·발전 예제

```yaml
- id: GN-CM2-131-e7
  page: 131
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    원소로 공집합과 집합 {1, 2}를 갖는 집합 A에 대해 ∈, ⊂ 진술 다섯 중 옳지 않은 것 고르기. 5지선다.
  category: "원소 목록 확정 → 각 진술을 원소 자격(∈) 또는 부분집합 자격(⊂)으로 판정"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '기호 $\in$, $\subset$의 사용'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A의 원소는 공집합·1·2·{1, 2} 네 개. ∈는 원소 목록에 그대로 있는지, ⊂는 왼쪽 집합의 원소가 전부 A의 원소인지로 갈린다.
    ③ {1}은 A의 원소가 아니라 부분집합이므로 틀림. 정의 적용 한 단계지만 집합이 원소인 이중 지위가 Mₐ를 올린다(T-표기).
    필수 예제 ★2 출발 · 통찰 0 · M_total 5 → −1 후보이나 이 단원의 대표 함정이라 ★2 유지.
  tier: star_2
  mechanism_primary: 'A의 원소 목록 4개 확정 → $\in$ 은 목록에 있는가 · $\subset$ 은 원소가 전부 목록에 있는가로 각 진술 판정'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/131-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '원소를 $\{\varnothing,\,\{0\},\,1\}$ 처럼 바꾸거나 중첩을 한 겹 더(원소로 $\{\{1\}\}$) 넣는다. 제약 — 원소가 집합인 항목이 최소 둘은 있어야 ∈/⊂ 함정이 살고, 오답 선택지는 단 하나여야 한다.'
    creative: '(1) 옳은 것을 모두 고르는 보기형으로(★2 · 325 골조) (2) n(A)를 함께 묻기(★2) (3) A의 부분집합 중 공집합을 원소로 갖는 것의 개수를 묻게 하면 개수 축과 결합해 ★3.'
```

```yaml
- id: GN-CM2-131-313
  page: 131
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    벤다이어그램으로 주어진 두 집합 A, B에 대해 ∈, ∉, ⊂, ⊄ 진술 다섯 중 옳지 않은 것 고르기. 5지선다.
  category: "그림에서 원소 읽기 → 기호 판정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벤다이어그램에서 원소를 읽어 포함 관계 기호 판정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    그림에서 A는 안쪽 원의 1, 2, B는 바깥 원 전체 1~5로 읽힌다.
    ⑤는 {1, 3, 5}가 모두 B의 원소이므로 ⊄가 아니라 ⊂여서 틀림.
    확인체크지만 그림 읽기 한 단계 · 통찰 0 · M_total 4 → 예제 출발점 ★2에서 −1 → ★1.
  tier: star_1
  mechanism_primary: '벤다이어그램 안쪽·바깥쪽 원소 읽기 → $A=\{1,\,2\}$, $B=\{1,\,2,\,3,\,4,\,5\}$ → 각 진술 판정'
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지"
  figure: "crop:fig-131-313.png"
  latex: latex-bank/gn-cm2/items/131-313.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '그림의 원소 배치를 바꾼다. 제약 — **그림 라벨과 선택지의 수가 연동**되므로 숫자를 바꾸면 크롭 이미지도 함께 바꿔야 한다. 그림을 고정한 채 선택지만 바꾸는 변형이 안전하다.'
    creative: '(1) 두 원이 교차하는 벤다이어그램으로 바꿔 A에만·B에만 있는 원소를 만들면 ⊄ 판정이 진짜 함정이 되어 ★2 (2) 원소 자리에 집합을 넣기(★2) (3) 그림 없이 조건제시 두 집합으로 같은 진술을 묻기(★1 · 314 골조).'
```

```yaml
- id: GN-CM2-131-314
  page: 131
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A가 2n(n은 5 이하 자연수) 꼴 원소의 집합일 때 보기 ㄱ~ㄹ의 ∈, ∉, ⊂ 진술 중 옳은 것 모두 고르기.
  category: "조건제시 → 원소나열 → 보기 네 개 판정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조건제시 집합의 원소 확정 후 기호 판정(보기형)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    A를 {2, 4, 6, 8, 10}으로 펼치면 ㄱ(5는 원소 아님)·ㄴ(6은 원소)이 바로 탈락하고 ㄹ은 10이 빠져 성립하지 않는다.
    ㄷ만 남는다. 원소나열 한 단계 뒤 기호 판정이 전부.
    확인체크 · 통찰 0 · M_total 4 → 예제 출발점 ★2에서 −1 → ★1.
  tier: star_1
  mechanism_primary: '$x=2n$, $n\le 5$ → $A=\{2,\,4,\,6,\,8,\,10\}$ → 보기 ㄱ~ㄹ 각각 $\in$·$\subset$ 판정'
  insight_type: 절차형
  target_cohort: 하위권
  answer: "ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/131-314.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '생성식을 $x=3n$·$x=2n-1$ 로, n의 상한을 4~6으로 바꾼다. 제약 — 보기 네 개 중 참이 한둘이어야 하고, ⊂ 보기의 비교 집합은 A와 한 원소만 어긋나게 만들어야 판별이 선명하다.'
    creative: '(1) 보기에 $\varnothing$ 관련 진술을 넣기(★1~2) (2) A를 두 조건제시 집합의 포함 관계 비교로 확장(★2) (3) 생성식 집합끼리 포함 관계를 묻게 하면 원소 생성이 필요해져 ★2(324 골조).'
```

```yaml
- id: GN-CM2-131-315
  page: 131
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    원소로 공집합과 집합 {0}을 갖는 집합 S에 대해 ∈, ⊂ 진술 다섯 중 옳지 않은 것 고르기. 5지선다.
  category: "원소 목록 확정 → ∈ 는 목록 대조 · ⊂ 는 원소 전부 대조"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '원소가 집합인 경우의 $\in$, $\subset$ 판정'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    S의 원소는 공집합·{0}·1 세 개. ④의 {0}은 S의 원소이지 부분집합이 아니어서(0이 S의 원소가 아니므로) 틀림.
    공집합이 원소이면서 동시에 부분집합인 이중 지위(①②)가 같은 문항에 함께 놓여 있다(T-표기).
    e7과 같은 골조의 유제 · 필수 아래 확인체크 출발점 ★2 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: 'S의 원소 3개 확정 → $\{0\}$ 은 원소이지 부분집합이 아님을 구분 → 오답 지목'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/131-315.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '원소 $\{0\}$ 을 $\{1,\,2\}$·$\{\varnothing\}$ 으로 바꾼다. 제약 — 원소 3~4개를 넘기면 선택지 판정이 지루해지고, 오답 선택지는 하나만 두어야 한다.'
    creative: '(1) 옳은 것을 모두 고르는 보기형(★2 · 325 골조) (2) S의 부분집합의 개수를 함께 묻기(★2) (3) $\{\varnothing\}$ 과 $\varnothing$ 의 차이를 개수 문제로 묻게 하면 ★3.'
```

```yaml
- id: GN-CM2-132-e8
  page: 132
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    A = {1, a+2}, B = {3, a²+2, a+1}에 대해 A ⊂ B일 때 실수 a의 값.
  category: "A ⊂ B → A의 원소가 B의 어느 원소와 같은지 경우 나누기 → 대입 검증"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "집합 사이의 포함 관계를 이용하여 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    1 ∈ B에서 a²+2 = 1(실수 해 없음)과 a+1 = 1 두 갈래가 나오지만 앞쪽이 즉시 소거돼 a = 0 하나만 남는다.
    남은 원소 a+2 = 2가 B에 실제로 있는지 되짚는 확인 단계와 집합 원소가 서로 달라야 한다는 조건이 함정(T-범위).
    갈래 하나가 실근 없음으로 바로 지워져 전략 분기로 보지 않았다(절차형). 필수 ★2 · M_total 8 → ★2.
  tier: star_2
  mechanism_primary: '$1\in B$ → $a^2+2=1$(불가) 또는 $a+1=1$ → $a=0$ → $a+2=2\in B$ 확인'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a=0$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/132-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'A의 상수 원소와 B의 이차식·일차식 계수를 바꾼다. 제약 — 이차식 갈래가 **실근이 없거나 원소 중복을 일으켜 버려지도록** 설계해야 답이 하나로 떨어지고, 확정된 a에서 두 집합의 원소가 서로 달라야 한다.'
    creative: '(1) 이차 갈래에도 실근을 주어 후보 두 개를 검증으로 거르게 하면 I-VF가 붙어 ★3(316 골조) (2) $A=B$ 로 바꾸면 양방향 대응이 필요해 ★3(e9 골조) (3) a의 값 대신 a의 개수·합을 묻기(★2~3).'
```

```yaml
- id: GN-CM2-132-e9
  page: 132
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    A = {-2, a²+2a}, B = {3, a²-3a}에 대해 A = B일 때 상수 a의 값.
  category: "A = B → 양방향 원소 대응 두 식 → 공통해"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "서로 같은 집합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 집합이 같으니 -2는 B에, 3은 A에 있어야 한다. 이차방정식 두 개를 풀어 각 해집합을 구한 뒤 공통인 값을 고른다.
    -2와 3은 서로 다르므로 짝이 강제되어 경우를 나눌 필요가 없는 것이 이 문항의 설계.
    필수 ★2 · 통찰 0(후보 교집합은 표준 절차) · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '$-2\in B$ 와 $3\in A$ 두 이차방정식 → 각 해집합 → 공통해 $a=1$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a=1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/132-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 상수 원소(-2, 3)와 이차식 계수를 바꾼다. 제약 — 두 이차방정식의 해집합이 **정확히 한 값만 공유**해야 하고, 그 값에서 각 집합의 두 원소가 서로 달라야 한다(원소 중복 금지).'
    creative: '(1) 공통해가 둘 나오게 만들고 원소 중복으로 하나를 버리게 하면 I-VF가 붙어 ★3 (2) 원소를 세 개씩으로 늘려 대응을 경우 나누게(★3 · 318 골조) (3) a 대신 두 집합의 원소의 합을 묻기(★2).'
```

```yaml
- id: GN-CM2-132-316
  page: 132
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A = {-1, a²-1}, B = {2, a-2, 1-a}에 대해 A ⊂ B일 때 상수 a의 값.
  category: "원소 대응 경우 나누기 → 후보별 A ⊂ B 재확인 → 일부 기각"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "-1 ∈ B 에서 나온 두 후보를 각각 원래 조건 A ⊂ B 에 되돌려 넣어 남은 원소 a²-1 이 B 안에 있는지 확인하고 한쪽을 기각"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "포함 관계를 만족시키는 미지수 구하기(후보 검증형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    -1 ∈ B에서 a-2 = -1과 1-a = -1 두 후보가 모두 살아 나온다. 여기서 멈추면 틀리고,
    각 후보를 넣어 A의 나머지 원소 a²-1이 실제로 B에 있는지 확인해야 한 쪽이 떨어진다(I-VF d2).
    확인체크 출발점 ★2 · 통찰 1개 depth 2 → +1 미달로 ★2 유지. e8보다 검증 부담이 크다.
  tier: star_2
  mechanism_primary: '$-1\in B$ → $a=1$ 또는 $a=2$ → 각 후보에서 $a^2-1\in B$ 확인 → 위배 후보 기각'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/132-316.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'A의 상수 원소와 B의 두 일차식 계수를 바꾼다. 제약 — 두 후보가 **모두 실수로 나오되 한쪽만 살아남도록** 계수를 맞춰야 검증 단계가 의미를 가진다. 살아남는 a에서 각 집합의 원소가 서로 달라야 한다.'
    creative: '(1) 두 후보가 모두 살아남게 해 a의 합을 묻기(검증은 남고 기각이 없어져 ★2) (2) $A\subset B$ 를 $A=B$ 로(★3) (3) B의 원소를 하나 줄여 대응을 강제하면 ★2로 내려간다.'
```

```yaml
- id: GN-CM2-132-317
  page: 132
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A = {x | -5 ≤ x < -2}, B = {x | -3a-2 < x < -a+6}에 대해 A ⊂ B일 때 정수 a의 최댓값과 최솟값의 합.
  category: "구간을 수직선에 올리기 → 양 끝 부등식 두 개 → 정수 범위"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "부등식으로 준 두 집합을 수직선 위 구간 그림으로 옮겨 A가 B 안에 들어갈 끝점 조건 두 개를 읽어냄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "구간으로 주어진 두 집합의 포함 관계와 미지수 범위"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A의 왼쪽 끝 -5가 B 안에 들어가려면 -3a-2 < -5, 오른쪽 끝은 A가 -2를 포함하지 않으므로 -2 ≤ -a+6.
    a의 계수가 음수라 정리할 때 부등호가 뒤집히고(T-부호), 등호 포함 여부가 양 끝에서 다르다(T-경계) — 이 단원에서 함정이 가장 촘촘한 자리.
    확인체크 출발점 ★2 · 통찰 1(RT) · M_total 8 · 경계 함정 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: '수직선에 두 구간 배치 → $-3a-2<-5$ 이고 $-2\le -a+6$ → $1<a\le 8$ → 정수 최대 8 · 최소 2'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/132-317.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'A의 두 끝값과 B의 일차식 계수를 바꾼다. 제약 — **등호 위치(≤ 와 <)를 바꾸면 정수 범위의 끝이 하나 달라져 답이 통째로 바뀐다.** A의 폭이 B의 폭보다 좁아야 해가 존재하고, a의 계수 부호를 음수로 두어야 부등호 반전 함정이 유지된다.'
    creative: '(1) 정수 a의 개수를 묻기(★3 · 330 골조) (2) A ⊂ B 대신 B ⊂ A로 뒤집으면 조건이 반대로 조여 ★3 (3) 세 번째 구간 C를 붙여 A ⊂ B ⊂ C로 만들면 조건이 넷이 되어 ★3~4(330 골조).'
```

```yaml
- id: GN-CM2-132-318
  page: 132
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A = {4, a+1, a-2}, B = {2, 5, a²-3a}에 대해 A ⊂ B이고 B ⊂ A일 때 상수 a의 값.
  category: "양쪽 포함 → A = B → 원소 대응 후보 → 재대입으로 기각"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "4 ∈ B 에서 나온 두 후보를 각각 A와 B에 되돌려 넣어 세 원소가 그대로 맞물리는지 확인하고 한쪽을 기각"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "서로 같은 집합(양쪽 포함)에서 미지수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 포함을 합치면 A = B이고, 4 ∈ B이므로 a²-3a = 4에서 두 후보가 나온다.
    각 후보를 넣어 세 원소가 실제로 같은 집합이 되는지 확인해야 한쪽이 떨어진다(I-VF d2).
    확인체크 출발점 ★2 · 통찰 1개 depth 2 → ★2 유지. 316과 같은 검증 골조의 3원소판.
  tier: star_2
  mechanism_primary: '$A\subset B$ 와 $B\subset A$ → $A=B$ → $a^2-3a=4$ 후보 → 각 후보에서 세 원소 대조 → 기각'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/132-318.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'A의 상수 원소와 B의 두 상수, 이차식을 바꾼다. 제약 — 이차식 후보 **두 개 중 하나만 세 원소를 맞추도록** 설계하고, 살아남는 a에서 세 원소가 서로 달라야 한다(중복이면 n(A) = 3이 깨진다).'
    creative: '(1) $A\subset B$ 만 주면 원소 개수 차이 때문에 해가 넓어져 ★3 (2) a의 값 대신 집합 A를 구하게(★2) (3) 원소를 문자식으로 바꿔 대응을 두 갈래로 만들면 ★3(326 골조).'
```

```yaml
- id: GN-CM2-133-e10
  page: 133
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    A = {3, 4, 5, 6, 7}에 대해 ⑴ 5는 반드시 갖고 3, 6은 갖지 않는 부분집합의 개수 ⑵ 적어도 한 개의 홀수를 갖는 부분집합의 개수.
  category: "지정 원소를 지수에서 빼기 → 2^(n-k) · 적어도 하나는 전체에서 여사건 빼기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "적어도 한 개의 홀수를 직접 세는 갈래 대신 전체에서 홀수를 하나도 갖지 않는 경우를 빼는 여사건 갈래를 선택"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "특정한 원소를 갖거나 갖지 않는 부분집합의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴은 반드시 갖는 원소와 갖지 않는 원소가 모두 지수에서 빠진다는 규칙 한 번(2^(5-3)).
    ⑵는 홀수를 포함하는 경우를 직접 세면 갈래가 폭발하므로 전체 2^5에서 짝수만으로 이루어진 2^2를 빼는 여사건이 사실상 유일한 길(I-SC d1).
    필수 ★2 · 통찰 1 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: '⑴ $2^{5-3}$ → ⑵ 전체 $2^5$ 에서 홀수 없는 $2^2$ 를 뺀다'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $4$ ⑵ $28$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/133-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑집합의 크기 n과 지정 원소 개수 k, 그리고 여사건에서 빼는 부분집합의 크기를 바꾼다. 제약 — 여사건 쪽 원소 개수(짝수의 개수)가 1 이상이어야 하고, 두 소문항의 지수가 서로 달라야 공식 구분이 드러난다.'
    creative: '(1) 적어도 한 개의 소수로 바꾸기(★2 · 320 골조) (2) 개수를 주고 n을 역산(★2 · 327 골조) (3) 홀수 또는 짝수 조건을 두 원소 지정으로 바꿔 두 여사건을 겹치게 하면 ★3(332 골조).'
```

```yaml
- id: GN-CM2-133-319
  page: 133
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A = {1, 3, 5, 7, 9, 11}에 대해 3과 5는 갖고 9는 갖지 않는 부분집합 X의 개수.
  category: "지정된 세 원소를 지수에서 빼기 → 2^(n-3)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "특정 원소를 갖거나 갖지 않는 부분집합의 개수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    반드시 갖는 두 원소와 갖지 않는 한 원소가 모두 자유도에서 빠져 2^(6-3) 한 줄.
    갖지 않는 원소도 똑같이 지수에서 뺀다는 점만 확인하면 끝난다.
    확인체크 출발점 ★2 · 통찰 0 · M_total 4 → −1 하여 ★1(공식 1회 적용).
  tier: star_1
  mechanism_primary: '$3,5$ 고정 · $9$ 제외 → 나머지 3개만 자유 → $2^{6-3}$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/133-319.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑집합 크기와 지정 원소 수를 바꾼다. 제약 — 지정 원소는 모두 A의 원소여야 하고(A에 없는 원소를 제외 조건으로 넣으면 지수가 달라진다), 2의 거듭제곱 표로 감당되는 $n\le 8$ 이 적당하다.'
    creative: '(1) 개수를 주고 n을 역산(★2 · 327 골조) (2) 적어도 하나 조건을 섞기(★2 · 320 골조) (3) 조건을 $\{3,5\}\subset X\subset A-\{9\}$ 로 다시 써서 묻기(★2 · e11 골조).'
```

```yaml
- id: GN-CM2-133-320
  page: 133
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A = {2, 3, 4, 5}의 부분집합 중 적어도 한 개의 소수를 원소로 갖는 것의 개수.
  category: "소수 식별 → 전체에서 소수를 하나도 갖지 않는 경우 빼기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "적어도 한 개를 직접 세는 갈래를 버리고 전체에서 소수를 하나도 갖지 않는 부분집합을 빼는 여사건 갈래를 선택"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "적어도 하나를 원소로 갖는 부분집합의 개수(여사건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A의 소수는 2, 3, 5 세 개이고 소수가 아닌 원소는 4 하나. 전체 2^4에서 4만으로 만들 수 있는 2^1을 뺀다.
    소수 식별에서 2를 빠뜨리는 실수와 여사건 착안(I-SC d1)이 변별점.
    확인체크 출발점 ★2 · 통찰 1 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: '소수 $2,3,5$ 확인 → 전체 $2^4$ 에서 소수 없는 $2^1$ 을 뺀다'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$14$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/133-320.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑집합을 {2, 3, ..., 8}처럼 넓혀 소수·비소수 개수를 바꾼다. 제약 — 비소수가 최소 하나는 있어야 여사건이 0이 되지 않고, 소수 판정에서 1과 2의 처리가 갈리지 않도록 1은 넣지 않는 편이 안전하다.'
    creative: '(1) 적어도 두 개의 소수로 바꾸면 여사건이 두 덩어리가 되어 ★3 (2) 짝수 또는 배수 조건으로 바꾸기(★2) (3) b 또는 f 꼴의 두 원소 조건으로 바꾸면 여사건 지수가 달라져 ★2~3(332 골조).'
```

```yaml
- id: GN-CM2-134-e11
  page: 134
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    A = {2, 4}, B는 12의 양의 약수의 집합일 때 A ⊂ X ⊂ B를 만족시키는 집합 X의 개수.
  category: "A의 원소는 고정 · B-A의 원소만 자유 → 2^(n(B)-n(A))"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: 'A ⊂ X ⊂ B 를 만족시키는 집합 $X$의 개수'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    B를 {1, 2, 3, 4, 6, 12}로 펼치고 A의 두 원소를 고정하면 나머지 네 원소만 넣고 빼는 선택이 남아 2^(6-2).
    A가 B의 부분집합인지 먼저 확인하는 단계와 12의 약수를 빠뜨리지 않는 것(T-범위)이 실수 지점.
    필수 ★2 · 통찰 0(공식 직접 적용) · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: '$B$ 를 약수로 전개 → $A$ 의 원소 고정 · 나머지 $n(B)-n(A)$ 개만 자유 → $2^{6-2}$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$16$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/134-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'B를 18·24·36의 양의 약수로, A를 B의 원소 1~3개로 바꾼다. 제약 — **A가 반드시 B의 부분집합이어야** 하고(아니면 X가 없다), 지수 n(B)-n(A)가 2의 거듭제곱 표 범위에 있어야 한다.'
    creative: '(1) 개수를 주고 B의 크기 n을 역산(★2 · 322 골조) (2) $X\ne A$·$X\ne B$ 제외 조건을 붙이기(★2 · 328 골조) (3) $n(X)\ge 3$ 같은 크기 조건을 걸면 사후 필터가 생겨 ★3(333 골조).'
```

```yaml
- id: GN-CM2-134-321
  page: 134
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A = {0, 1}, B = {0, 1, 2, 3}에 대해 A ⊂ X ⊂ B를 만족시키는 X가 될 수 없는 것 고르기. 5지선다.
  category: "선택지마다 A의 원소를 모두 갖는지 · B 안에 있는지 확인"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "A ⊂ X ⊂ B 를 만족시키는 집합 X 판정(선택지형)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    개수를 셀 필요 없이 선택지를 하나씩 대조한다. ④는 0이 빠져 A를 포함하지 못해 답.
    A의 원소를 모두 갖는지만 보면 되는 한 단계.
    확인체크 출발점 ★2 · 통찰 0 · M_total 4 → −1 하여 ★1.
  tier: star_1
  mechanism_primary: '각 선택지에 대해 $A\subset X$ 인가 · $X\subset B$ 인가 확인 → $0$ 이 빠진 것을 지목'
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/134-321.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'A와 B의 원소를 바꾼다. 제약 — 오답 선택지는 하나여야 하고, A의 원소가 빠진 유형과 B 밖 원소가 들어간 유형 중 **어느 쪽으로 틀리게 할지** 정해 나머지 넷은 모두 참이 되게 맞춘다.'
    creative: '(1) X가 될 수 있는 것을 모두 고르는 보기형(★2) (2) 개수를 묻기(★2 · e11 골조) (3) B 밖 원소를 넣은 오답을 섞으면 두 방향 판정이 필요해져 ★2.'
```

```yaml
- id: GN-CM2-134-322
  page: 134
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A = {1, 2}, B = {1, 2, ..., n}에 대해 A ⊂ X ⊂ B인 X의 개수가 128일 때 자연수 n의 값.
  category: "개수 공식 2^(n-2) 세우기 → 지수 비교로 n 역산"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "A ⊂ X ⊂ B 의 개수 조건에서 원소 개수 역산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e11의 공식을 그대로 세운 뒤 2^(n-2) = 128 = 2^7로 지수를 비교하면 끝난다.
    128을 2의 거듭제곱으로 알아보는 것과 A의 원소 2개를 지수에서 빼는 것이 전부.
    공식의 역산은 표준 절차로 보아 통찰로 세지 않았다. 확인체크 출발점 ★2 · 매개변수 n(Mₐ 2) → ★2 유지.
  tier: star_2
  mechanism_primary: '$2^{n-2}=128=2^7$ → $n-2=7$ → $n=9$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/134-322.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주어진 개수를 32·64·256으로, A의 원소 개수를 1~3으로 바꾼다. 제약 — 주어진 개수가 **반드시 2의 거듭제곱**이어야 하고, 그 지수에 A의 원소 개수를 더한 값이 자연수 n이 되어야 한다.'
    creative: '(1) 개수 조건을 부등식(X가 100개 이하)으로 주면 범위 처리가 붙어 ★3 (2) $X\ne B$ 를 추가해 개수를 $2^{n-2}-1$ 로 만들면 ★3 (3) A를 B의 부분집합 형태로 조건제시해 원소 개수부터 구하게(★2).'
```

```yaml
- id: GN-CM2-134-323
  page: 134
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    A = {a, b, c, d, e}, B = {a, b, c}에 대해 B ⊂ X ⊂ A이고 X ≠ A인 집합 X의 개수.
  category: "2^(n(A)-n(B)) → X = A인 한 가지 제외"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "A ⊂ X ⊂ B 에 제외 조건이 붙은 집합 X의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    B의 세 원소는 고정이고 d, e만 자유라 2^2 = 4, 여기서 둘 다 넣은 X = A 한 가지를 뺀다.
    M_total 4로 −1 후보지만, 제외 조건을 빠뜨려 4라고 답하는 것이 이 유형의 실전 실수 지점이라 ★2를 유지했다.
    확인체크 출발점 ★2 · 통찰 0 → ★2.
  tier: star_2
  mechanism_primary: '$d,e$ 만 자유 → $2^{5-3}$ → $X=A$ 인 1가지 제외'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/134-323.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'A와 B의 원소 개수 차를 2~4로 조절한다. 제약 — B ⊂ A가 유지돼야 하고, 제외 조건 개수(X ≠ A, X ≠ B)만큼만 빼야 한다(둘 다 빼면 2^k - 2).'
    creative: '(1) $X\ne B$ 도 함께 제외(★2 · 328 골조) (2) $n(X)=4$ 처럼 크기를 지정하면 조합 세기로 바뀌어 ★3 (3) 제외 조건을 그대로 두고 A의 크기 n을 역산하게 하면 ★3.'
```

### 연습문제 STEP 1

```yaml
- id: GN-CM2-135-324
  page: 135
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    A = {-1, 0, 1}, B = {2x+y | x, y ∈ A}, C = {xy | x, y ∈ A} 사이의 포함 관계를 바르게 나타낸 것 고르기. 5지선다.
  category: "생성식 집합의 원소를 전부 만들기 → 중복 제거 → 세 집합 비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "원소 생성식으로 정의된 집합의 원소 구하기와 포함 관계"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x, y를 각각 세 값으로 움직이며 2x+y는 아홉 개를 만들어 -3부터 3까지 일곱 원소, xy는 -1, 0, 1 세 원소가 된다.
    중복을 지우는 것(T-표기)과 C가 A와 같아진다는 점을 놓치지 않는 것이 관건.
    STEP 1 ★2 · 통찰 0(원소 생성은 정의 그대로) · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '$x,y$ 를 각각 세 값으로 움직여 $B$·$C$ 의 원소 생성 → 중복 제거 → $A=C\subset B$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/135-324.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'A의 원소와 생성식 계수($2x+y$ → $x+2y$·$x-y$)를 바꾼다. 제약 — A의 원소 수를 3개로 유지해야 9개 조합이 손으로 감당되고, 두 생성 집합 중 **하나는 A와 같아지도록** 설계해야 선택지에 =가 살아난다.'
    creative: '(1) $x^2+y$ 처럼 제곱을 넣어 중복을 늘리기(★2~3) (2) 세 집합의 원소 개수를 묻기(★2) (3) 생성식에 미지수를 넣고 $A=C$ 가 되는 상수를 구하게 하면 미지수 축과 결합해 ★3.'
```

```yaml
- id: GN-CM2-135-325
  page: 135
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    원소로 공집합과 집합 {a, b}를 갖는 집합 A에 대해 보기 ㄱ~ㅂ의 n(A), ∈, ⊂ 진술 여섯 중 옳은 것 모두 고르기.
  category: "원소 목록 확정 → 보기 여섯 개를 ∈ · ⊂ · 원소 개수로 판정"
  M: {s: 1, k: 1, a: 2, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '원소가 집합인 경우의 $\in$, $\subset$, $n(A)$ 종합 판정'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A의 원소는 공집합·a·b·{a, b} 네 개이므로 ㄱ(n(A)=5)은 거짓, ㄴ·ㅁ은 부분집합이 맞아 ⊄ 진술이 거짓, ㄷ은 {b}가 원소가 아니어서 거짓.
    공집합이 원소이자 부분집합인 이중 지위와 {a, b}가 원소라는 점이 여섯 보기에 교차 배치돼 있다(T-표기·T-범위).
    STEP 1 ★2 · 통찰 0 · M_total 6 → ★2. 판정 수가 많을 뿐 도구는 e7·315와 같다.
  tier: star_2
  mechanism_primary: 'A의 원소 4개 확정 → 보기마다 $\in$ 은 목록 대조 · $\subset$ 은 원소 전부 대조 → 참인 것만 남김'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄹ, ㅂ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/135-325.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '원소 $\{a,\,b\}$ 를 $\{a\}$·$\{a,\,b,\,c\}$ 로 바꾸거나 원소 수를 3~5개로 조절한다. 제약 — 참인 보기가 두셋은 남아야 하고, ㄱ의 $n(A)$ 값은 중첩 집합을 한 개로 세는지 확인하도록 일부러 어긋나게 둔다.'
    creative: '(1) 옳지 않은 것 하나를 고르는 5지선다로(★2 · e7 골조) (2) A의 부분집합의 개수를 묻기(★2) (3) $\{\varnothing\}\subset A$ 와 $\varnothing\in A$ 의 진위를 근거와 함께 서술하게 하면 ★3.'
```

```yaml
- id: GN-CM2-135-326
  page: 135
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    A는 15의 양의 약수의 집합, B = {1, a-2, b-2, 15}에 대해 A ⊂ B이고 B ⊂ A일 때 ab의 값(a, b는 상수).
  category: "양쪽 포함 → A = B → 남은 두 원소끼리 대응 → 곱"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "서로 같은 집합에서 미지수의 곱·합 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A = {1, 3, 5, 15}이고 B와 같으므로 1과 15가 짝지어지고 남은 a-2, b-2가 3과 5에 대응한다.
    대응이 두 갈래지만 묻는 것이 곱이라 어느 쪽이든 ab가 같다 — 경우를 나눌 필요가 없는 설계.
    STEP 1 ★2 · 통찰 0(대칭은 문제 설계 덕이지 학생이 활용해 단축하는 단계가 아님) · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '$A=\{1,\,3,\,5,\,15\}$ → $\{a-2,\,b-2\}=\{3,\,5\}$ → $\{a,\,b\}=\{5,\,7\}$ → $ab$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$35$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/135-326.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑수를 21·35의 양의 약수로 바꾸고 평행이동 상수(-2)를 조절한다. 제약 — **묻는 값이 a+b·ab처럼 대칭식이어야** 대응 갈래를 나누지 않아도 되고, 비대칭 값을 물으려면 $a<b$ 같은 순서 조건을 추가해야 한다.'
    creative: '(1) $a-b$ 를 묻고 $a>b$ 조건을 주면 갈래 선택이 필요해 ★3 (2) B의 원소 하나를 이차식으로 바꿔 후보 기각을 넣으면 ★3(318 골조) (3) $A\subset B$ 만 주고 가능한 ab를 모두 구하게 하면 ★3.'
```

```yaml
- id: GN-CM2-135-327
  page: 135
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    A = {1, 2, ..., n}의 부분집합 중 1, 2는 갖고 3, 4는 갖지 않는 것의 개수가 16일 때 자연수 n의 값.
  category: "지정 원소 네 개를 지수에서 빼기 → 2^(n-4) = 16 역산"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "특정 원소 조건 부분집합의 개수에서 원소 개수 역산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    반드시 갖는 둘과 갖지 않는 둘이 모두 지수에서 빠져 2^(n-4) = 16 = 2^4, 지수 비교로 끝난다.
    네 원소가 모두 A 안에 있어야 이 식이 성립한다는 전제(n ≥ 4) 확인이 숨은 단계(T-범위).
    STEP 1 ★2 · 통찰 0(공식 역산은 표준) · 매개변수 n → ★2 유지.
  tier: star_2
  mechanism_primary: '$2^{n-4}=16=2^4$ → $n-4=4$ → $n=8$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/135-327.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주어진 개수를 8·32·64로, 지정 원소 개수를 2~5로 바꾼다. 제약 — 개수는 **2의 거듭제곱**이어야 하고 지정 원소가 모두 $\{1,\cdots,n\}$ 안에 들어가도록 $n$ 이 지정 원소 개수 이상이어야 한다.'
    creative: '(1) 적어도 하나 조건을 섞어 $2^n-2^k=$ 값 꼴로 만들면 여사건 역산이 되어 ★3 (2) $A\subset X\subset B$ 개수 역산으로 바꾸기(★2 · 322 골조) (3) 개수를 부등식으로 주고 n의 최솟값을 묻기(★3).'
```

```yaml
- id: GN-CM2-135-328
  page: 135
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    A는 -4 < x < 4인 정수의 집합, B = {x | |x| = 2}에 대해 B ⊂ X ⊂ A, X ≠ A, X ≠ B인 집합 X의 개수.
  category: "두 집합 원소 확정 → 2^(n(A)-n(B)) → 양 끝 두 가지 제외"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "A ⊂ X ⊂ B 에 두 제외 조건이 붙은 집합 X의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    A는 -3부터 3까지 일곱 개, B는 절댓값이 2인 -2와 2 두 개. 나머지 다섯 원소가 자유라 2^5.
    여기서 X = A와 X = B 두 가지를 뺀다 — 제외를 하나만 빼거나 아예 빠뜨리는 것이 실수 지점(T-경계).
    STEP 1 ★2 · 통찰 0 · M_total 6 → ★2. 323에 제외 조건 하나가 더 붙은 형태.
  tier: star_2
  mechanism_primary: '$A$ 7개 · $B$ 2개 → $2^{7-2}$ → $X=A$, $X=B$ 두 가지 제외'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$30$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/135-328.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'A의 정수 범위와 B의 절댓값 조건($|x|=1$·$|x|=3$)을 바꾼다. 제약 — B의 두 원소가 **A 안에 있어야** 하고, 부등호가 $<$ 인지 $\le$ 인지에 따라 A의 원소 수가 달라져 답이 통째로 바뀐다.'
    creative: '(1) $|x|\le 2$ 로 바꿔 B를 세 원소로(★2) (2) $n(X)$ 조건을 걸면 사후 필터가 되어 ★3(333 골조) (3) 개수를 주고 A의 정수 범위를 역산하게 하면 ★3.'
```

### 연습문제 STEP 2

```yaml
- id: GN-CM2-135-329
  page: 135
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    자연수 n에 대해 Aₙ을 √n 이하의 홀수의 집합이라 할 때 Aₙ ⊂ A₂₅를 만족시키는 n의 최댓값.
  category: "기준 집합 원소 확정 → 포함 조건을 다음 홀수 배제 조건으로 → 경계에서 최댓값"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "Aₙ ⊂ A₂₅ 를 원소 대조가 아니라 다음 홀수 7이 Aₙ 에 들어가지 않을 조건 √n < 7 로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "매개변수로 정의된 집합족의 포함 관계와 경계값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A₂₅ = {1, 3, 5}이고 Aₙ은 n이 커질수록 홀수를 하나씩 더 담는 증가하는 집합족이다.
    그래서 포함 조건은 7이 들어가지 않을 조건 하나로 압축되고(I-EQV d2), 남는 것은 √n < 7의 경계 처리 — 49는 7을 담아 안 되고 48이 최대(T-경계).
    STEP 2 ★3 출발 · 기출 태그 · 통찰 1 depth 2 → ★3 유지.
  tier: star_3
  mechanism_primary: '$A_{25}=\{1,\,3,\,5\}$ → 조건은 $7\notin A_n$ 즉 $\sqrt{n}<7$ → $n<49$ → 최댓값 48'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$48$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/135-329.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '기준 첨자 25를 9·49·81로 바꾸면 배제해야 할 다음 홀수가 5·9·11로 바뀐다. 제약 — 기준 첨자는 **제곱수로 두어야 경계가 깔끔**하고, 다음 홀수의 제곱에서 1을 뺀 값이 답이 되는 구조가 유지돼야 한다.'
    creative: '(1) 홀수를 소수·배수로 바꾸면 다음 원소 간격이 불규칙해져 ★4 (2) $A_{25}\subset A_n$ 으로 뒤집어 최솟값을 묻기(★3) (3) $n(A_n)=4$ 인 n의 개수를 묻게 하면 구간 세기가 되어 ★3~4.'
```

```yaml
- id: GN-CM2-136-330
  page: 136
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    A = {x-2 | 1 < x ≤ 3}, B = {x+a | -1 ≤ x < 7}, C = {x | x > 2a}에 대해 A ⊂ B ⊂ C를 만족시키는 정수 a의 개수.
  category: "생성식 구간을 평행이동해 정리 → 수직선 배치 → 끝점 부등식 세 개 → 정수 세기"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "생성식으로 준 세 집합을 평행이동한 구간으로 바꿔 수직선에 올리고, 포함 관계를 끝점 부등식과 등호 포함 여부로 읽어냄"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "세 구간의 연쇄 포함 관계와 정수 미지수의 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    먼저 A는 -1 < x ≤ 1, B는 a-1 ≤ x < a+7로 정리된다(생성식 → 구간, I-RT d2).
    A ⊂ B에서 왼쪽·오른쪽 끝 두 조건, B ⊂ C에서 B의 왼쪽 끝이 C의 경계보다 커야 한다는 조건이 나오고, B의 왼쪽 끝은 닫혀 있고 C는 열려 있어 등호가 허용되지 않는다(T-경계).
    연립한 범위 안의 정수를 세면 된다. STEP 2 ★3 · 통찰 1 depth 2 → ★3 유지.
  tier: star_3
  mechanism_primary: '$A=(-1,\,1]$, $B=[a-1,\,a+7)$ 로 정리 → $A\subset B$ 두 부등식과 $2a<a-1$ → 정수 a 세기'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/136-330.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'A의 원래 범위, B의 폭(8), C의 경계 계수(2a)를 바꾼다. 제약 — **B의 폭이 A보다 넓어야** 해가 존재하고, 각 구간의 열림·닫힘을 바꾸면 등호 조건이 바뀌어 정수 개수가 달라진다. C의 경계를 2a로 두어야 B ⊂ C가 a에 대한 진짜 제약이 된다.'
    creative: '(1) C를 위로 막힌 구간으로 바꾸면 양쪽 조건이 생겨 ★4 (2) a의 최댓값·최솟값의 합을 묻기(★3 · 317 골조) (3) A ⊂ B만 남기고 구간 하나를 빼면 ★3 아래로 내려간다.'
```

```yaml
- id: GN-CM2-136-331
  page: 136
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    A = {a, b, c}, B = {ab, bc, ca}에 대해 A = B이고 a+b+c = -3일 때 a³+b³+c³의 값(abc ≠ 0).
  category: "집합이 같으면 원소의 합·곱이 같다 → 대칭식 세 개 확정 → 세제곱 합 공식"
  M: {s: 2, k: 2, a: 3, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "원소끼리 짝짓는 경우를 나누는 대신 두 집합이 같으면 원소의 총합과 총곱이 같다는 대칭성으로 ab+bc+ca 와 abc 를 한 번에 확정"
    - step: 3
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "집합 단원의 조건을 세 문자 대칭식(곱셈 공식·세제곱 합 항등식)으로 넘겨 값을 계산"
  insight_count: 2
  depth_score: 2.50
  type_id: null
  type_hint: "서로 같은 집합과 대칭식(세제곱 합) 결합"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    A = B를 원소 대응으로 풀면 경우가 여섯 갈래로 터지지만, 총합과 총곱이 보존된다고 보면 ab+bc+ca = a+b+c = -3, (abc)² = abc에서 abc = 1(abc ≠ 0)이 바로 나온다(I-SYM d3).
    나머지는 세 문자 세제곱 합 항등식에 세 대칭식을 넣는 계산이며, 이 도구는 다항식 단원 것이다(I-XU d2).
    STEP 2 ★3 출발 · 통찰 2개 · depth 3 → +1 하여 ★4. 통찰이 3개에 못 미쳐 ★5는 아님.
  tier: star_4
  mechanism_primary: '$A=B$ → 합·곱 보존으로 $ab+bc+ca=-3$, $abc=1$ → 세제곱 합 항등식에 대입'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$-51$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/136-331.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'a+b+c의 값을 다른 정수로 바꾼다. 제약 — $(abc)^2=abc$ 와 $abc\ne 0$ 에서 **곱은 항상 1로 고정**되므로 자유로운 수는 합 하나뿐이고, 묻는 대칭식(세제곱 합·제곱 합·역수 합)을 바꿔 난이도를 조절한다.'
    creative: '(1) $a^2+b^2+c^2$ 를 묻기(같은 골조 ★3~4) (2) 원소를 네 개로 늘리면 대칭식 구조가 무너져 설계가 어려워진다 (3) $B=\{a^2,\,b^2,\,c^2\}$ 로 바꾸면 합·곱 보존 관계가 달라져 새 골조가 되고 ★4 유지.'
```

```yaml
- id: GN-CM2-136-332
  page: 136
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    원소가 일곱 개인 집합 A의 부분집합 중 b 또는 f를 원소로 갖는 것의 개수.
  category: "또는 조건 → 전체에서 둘 다 갖지 않는 경우 빼기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "b 포함·f 포함을 직접 더하고 겹침을 빼는 갈래 대신 전체에서 b도 f도 갖지 않는 경우를 빼는 여사건 갈래를 선택"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "또는 조건 부분집합의 개수(여사건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    직접 세면 겹치는 경우를 다시 빼야 하므로, 전체 2^7에서 b와 f를 모두 제외한 2^5를 빼는 쪽이 한 줄이다(I-SC d1).
    [분류 이슈] STEP 2 구역(★3 출발)이지만 통찰 1개 depth 1 · M_total 4 로 노동량이 가볍고 320과 같은 여사건 골조여서 ★2로 내렸다.
    같은 STEP 2 구역의 329~331·333과 비교하면 한 단 아래가 학생 체감에 맞는다.
  tier: star_2
  mechanism_primary: '전체 $2^7$ 에서 $b$ 도 $f$ 도 갖지 않는 $2^5$ 를 뺀다'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$96$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/136-332.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑집합의 크기 n과 지정 원소 수 k를 바꾼다($2^n-2^{n-k}$). 제약 — 지정 원소가 모두 A 안에 있어야 하고, 지정 원소를 셋 이상으로 늘려도 여사건 식은 그대로라 난이도가 오르지 않는다.'
    creative: '(1) b와 f를 **둘 다** 갖는 개수로 바꾸면 여사건이 필요 없어져 ★1~2 (2) b는 갖고 f는 갖지 않는 개수를 함께 묻기(★2) (3) 적어도 두 개의 지정 원소를 갖는 개수로 바꾸면 여사건이 두 덩어리가 되어 ★3.'
```

```yaml
- id: GN-CM2-136-333
  page: 136
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    A는 x²-4x+3 = 0의 해집합, B는 x²-6x+5 ≤ 0을 만족시키는 정수의 집합일 때 A ⊂ X ⊂ B이고 n(X) ≥ 3인 집합 X의 개수.
  category: "이차방정식·이차부등식으로 두 집합 확정 → 2^(n(B)-n(A)) → 크기 조건으로 걸러내기"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "A ⊂ X ⊂ B 로 얻은 여덟 개의 X 를 n(X) ≥ 3 조건에 되돌려 넣어 원소가 둘뿐인 X = A 를 기각"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "A ⊂ X ⊂ B 에 원소 개수 조건이 붙은 집합 X의 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A = {1, 3}, B는 1 이상 5 이하의 정수 다섯 개. A의 두 원소는 고정이고 2, 4, 5가 자유라 2^3 = 8.
    여기서 크기 조건을 걸면 원소가 두 개뿐인 X = A 하나만 떨어진다(I-VF d1) — 이 필터를 놓치면 8이라 답하게 된다.
    이차부등식 해를 정수로 제한하는 단계(T-범위)도 실수 지점. STEP 2 ★3 · 통찰 1 · M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: '$A=\{1,\,3\}$, $B=\{1,\,2,\,3,\,4,\,5\}$ → $2^{5-2}=8$ → $n(X)\ge 3$ 로 $X=A$ 만 기각'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/136-333.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 이차식의 근을 바꿔 A와 B의 크기를 조절하고 크기 조건을 $n(X)\ge 4$ 등으로 올린다. 제약 — **A가 B의 부분집합이 되도록** 근을 잡아야 하고, 크기 조건을 올리면 기각되는 경우가 조합으로 늘어나 단순 −1이 아니게 된다(그때는 크기별로 세야 한다).'
    creative: '(1) $n(X)\ge 4$ 로 올려 크기별 조합 세기를 강제하면 ★4 (2) $n(X)$ 가 짝수인 X의 개수로 바꾸기(★4) (3) 부등식을 정수 제한 없이 주면 B가 무한집합이 되어 문제가 성립하지 않으므로 정수 조건은 고정한다.'
```

### 연습문제 실력 UP

```yaml
- id: GN-CM2-136-334
  page: 136
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    원소가 모두 자연수이고 a ∈ A이면 81/a ∈ A인, 공집합이 아닌 집합 A의 개수.
  category: "닫힘 조건 → 후보 원소를 짝으로 묶기 → 덩어리 단위 부분집합 세기"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: "81/a 도 자연수여야 한다는 조건을 a 가 81의 약수라는 조건으로 옮겨 후보를 다섯 개로 한정"
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "a 와 81/a 가 서로를 부르는 대칭 짝임을 보고 원소를 세 덩어리로 묶어 개별 원소가 아니라 덩어리를 고르는 문제로 환원"
  insight_count: 2
  depth_score: 2.50
  type_id: null
  type_hint: "조건을 만족시키는 집합의 개수(닫힘 조건·원소 짝짓기)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    조건 ㈎㈏를 합치면 원소는 81의 약수 1, 3, 9, 27, 81 중에서만 나올 수 있다(I-EQV d3).
    그리고 원소를 하나 넣으면 짝도 따라 들어오므로 {1, 81}, {3, 27}, {9} 세 덩어리 단위로만 선택할 수 있다(I-SYM d2 — 9는 자기 자신이 짝).
    덩어리를 고르는 2³ 가지에서 공집합 하나를 뺀다. 실력 UP ★4 출발 · 통찰 2개 depth 3 → ★4(통찰 3개 미만이라 ★5 아님).
  tier: star_4
  mechanism_primary: '$81/a$ 가 자연수 → 후보는 81의 약수 5개 → $\{1,\,81\}$·$\{3,\,27\}$·$\{9\}$ 세 덩어리 → $2^3-1$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/136-334.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '81을 다른 수로 바꾸면 덩어리 수가 바뀐다 — 64(약수 7개 · 짝 3 + 자기짝 1 = 4덩어리 → 15), 36(약수 9개 · 5덩어리 → 31). 제약 — **제곱수면 가운데 약수가 자기 자신과 짝**이 되어 덩어리 수가 (약수 개수+1)/2, 제곱수가 아니면 정확히 절반이다. 공집합 제외를 잊지 않도록 답이 홀수·2의 거듭제곱−1 꼴인지 확인한다.'
    creative: '(1) 조건을 $a\in A$ 이면 $a+3\in A$ 처럼 바꾸면 덩어리가 사슬이 되어 ★4~5 (2) 원소 개수가 최대인 A를 구하게 하면 ★3으로 내려간다 (3) 자연수 대신 정수로 열면 $-a$ 짝이 생겨 덩어리가 배로 늘고 ★5 후보.'
```

```yaml
- id: GN-CM2-136-335
  page: 136
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    A = {2, 3, 4, 5}의 공집합이 아닌 부분집합 15개에 대해 각 부분집합의 가장 작은 원소를 a₁, ..., a₁₅라 할 때 그 합.
  category: "최소 원소별로 부분집합 분류 → 각 값의 등장 횟수 세기 → 값×횟수 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "15개를 일일이 나열해 더하는 대신 최소 원소가 k인 부분집합의 개수를 세는 개수 문제로 바꿔 값×개수의 합으로 계산"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "부분집합의 최소 원소 합(분류 카운트)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    최소 원소가 2인 부분집합은 2를 갖는 것 전부이므로 2³ = 8개, 최소 원소가 3이면 3은 갖고 2는 갖지 않으므로 2² = 4개, 같은 식으로 2개·1개.
    나열 대신 이 분류로 옮기는 것이 전부이고(I-RT d2), 그 뒤는 값과 개수를 곱해 더하는 계산이다.
    각 부분집합이 최소 원소를 정확히 하나만 갖는다는 점(중복·누락 없음)이 분류의 근거. 실력 UP ★4 출발 · 통찰 1 depth 2 → ★4 유지.
  tier: star_4
  mechanism_primary: '최소 원소가 $k$ 인 부분집합 수 $=2^{(k \text{ 뒤 원소 수})}$ → $2\cdot 8+3\cdot 4+4\cdot 2+5\cdot 1$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$41$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/136-335.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'A의 원소를 {1, 2, 3, 4, 5}처럼 늘리거나 값을 바꾼다. 제약 — **원소를 크기 순으로 정렬한 뒤 k번째 원소가 최소가 되는 경우가 $2^{n-k}$** 라는 구조가 유지돼야 하므로 원소는 서로 달라야 하고, 개수가 늘면 항이 늘 뿐 골조는 같다.'
    creative: '(1) 가장 큰 원소의 합으로 바꾸면 대칭적으로 같은 골조(★4) (2) 최소 원소와 최대 원소의 차의 합을 묻기(★5 후보 — 두 분류를 결합) (3) 원소 두 개 이상인 부분집합으로 제한하면 사후 필터가 붙어 ★4 유지.'
```

## 표본 판정 요약 (33문)

- ★ 분포: ★1 9 · ★2 17 · ★3 4 · ★4 3 · ★5 0
- 통찰형 12 · 절차형 21 · premium 0
- 통찰 유형 분포: I-VF 3 · I-SC 3 · I-RT 3 · I-EQV 2 · I-SYM 2 · I-XU 1 (총 14개 라벨 · 문항 기준 12문)
- type_hint 상위: 「특정 원소 조건 부분집합의 개수」 4 · 「A ⊂ X ⊂ B 를 만족시키는 X의 개수(제외·크기 조건 포함)」 4 · 「원소가 집합인 경우의 ∈, ⊂ 판정」 4 · 「포함 관계·서로 같은 집합에서 미지수 구하기」 5 · 「부분집합·진부분집합 모두 구하기·개수」 3
- 구역별 평균 ★: 익히기 1.0 · 필수 예제 2.0 · 확인체크 1.6 · STEP 1 2.0 · STEP 2 3.0 · 실력 UP 4.0
- 그림: 1문(`crop:fig-131-313.png` · 벤다이어그램) · 선택지 문항 5문(e7 · 313 · 315 · 321 · 324)
- 소문항(⑴~⑷) 묶음: 5문(308 · 309 · 310 · 312 · e10)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-136-332 | 벤더 STEP 2(★3 출발)이나 여사건 한 줄 · 통찰 depth 1 · M_total 4 로 320(확인체크 ★2)과 같은 골조여서 ★2로 내림 | ★2 / ★3 |
| GN-CM2-132-317 | 확인체크(예제 유제 ★2 출발)이나 구간 포함 + 부등호 반전 + 등호 경계로 노동·함정이 예제급 → ★3. 확인체크를 통번호 ★1로 보면 2단 차이 | ★3 / ★2 |
| GN-CM2-134-323 | 통찰 0 · M_total 4 로 규칙상 −1(★1) 후보지만 X ≠ A 제외를 빠뜨리는 실수 지점이라 ★2 유지 | ★2 / ★1 |
| GN-CM2-133-320 · GN-CM2-133-e10 | 「적어도 하나」의 여사건을 I-SC(전략 분기)로 셀지 교과 표준 절차로 볼지 경계. 이 파일은 세는 쪽으로 통일 | ★2 |
| GN-CM2-135-326 | 대응 갈래가 둘이지만 묻는 값이 대칭식이라 갈래를 나눌 필요가 없음 — I-SYM을 셀지 애매해 절차형으로 둠 | ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고).

- **따로 세워야 할 유형**: ⑴ 「원소가 집합인 경우의 ∈·⊂ 판정」(e7 · 315 · 325 — 개수 축과 도구가 완전히 다르다) ⑵ 「A ⊂ X ⊂ B 의 개수」(e11 · 321 · 322 · 323 · 328 · 333 — 제외 조건·크기 조건·역산 세 갈래로 확장되므로 하위 유형까지) ⑶ 「구간 집합의 포함 관계와 미지수 범위」(317 · 330 — 등호 경계와 부등호 반전이 변별 지점이라 유한집합 미지수 유형과 별개) ⑷ 「닫힘 조건을 만족시키는 집합의 개수」(334 — 이 단원에서 유일하나 변형 여지가 크다).
- **통합해도 될 유형**: 「부분집합·진부분집합 모두 구하기」와 「그 개수」(308 · 311 · 312)는 한 유형의 두 물음으로 묶어도 된다. 「특정 원소를 반드시 갖는/갖지 않는 개수」(312⑶⑷ · e10⑴ · 319 · 327)와 「적어도 하나의 여사건」(e10⑵ · 320 · 332)은 지수를 세는 같은 도구이므로 한 유형 아래 두 하위 유형으로 두는 편이 낫다. 「포함 관계로 미지수 구하기」(e8 · 316)와 「서로 같은 집합으로 미지수 구하기」(e9 · 318 · 326)도 후보 검증 유무로만 갈리므로 한 유형 + 검증 플래그가 적절하다.
- **★4 이상 슬롯 후보**: 331(대칭식 결합) · 334(닫힘 조건 짝짓기) · 335(분류 카운트) 셋뿐이고, 셋 다 집합 단원 고유 도구가 아니라 **다른 단원 도구를 집합 언어로 불러오는** 구조다. 이 단원에서 ★5를 만들려면 334·335의 creative 변형처럼 통찰을 하나 더 얹어야 한다.
