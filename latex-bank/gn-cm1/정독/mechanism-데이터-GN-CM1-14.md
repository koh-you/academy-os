---
name: mechanism-데이터-GN-CM1-14
description: 개념원리 공통수학1 14 이차방정식의 판별식(1/1 · 114~118쪽 · 23문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1 (22개정 · 학생용) · 전사본 latex-bank/gn-cm1
  section: 14 이차방정식의 판별식
  unit_code: "14"
  part: "1/1"
  extract_range: "114~118쪽 · 114-220~118-239"
  total_problems: 23
  unit_total: 23
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (crops.json)
---

# 개념원리 공통수학1 · 14 이차방정식의 판별식 (1/1) 정독 데이터 (v1.0)

이 파일은 114~118쪽 23문항 전수를 다룬다. 구역은 「개념원리 익히기」 3문, 「필수·발전 예제」(필수 예제 2 · 발전 예제 1 + 그 아래 확인체크 5) 8문, 「연습문제 STEP 1」 6문, 「연습문제 STEP 2」 4문, 「연습문제 실력 UP」 2문이다. 개념원리 고등의 난이도 신호는 구역과 태그에 있다 — 익히기는 개념 확인(★1 출발), 필수 예제 ★2 · 발전 예제 ★3, STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 가 출발점이고 교육청 기출 태그는 통찰이 있을 때만 +1 로 썼다. **확인체크는 통번호를 달고 있지만 「개념원리 익히기」가 아니라 바로 위 예제의 유사문제이므로 대응 예제의 ★를 출발점으로 삼았다**(필수 아래 확인체크 → ★2, 발전 아래 확인체크 → ★3). 예제(id `쪽-eN`)는 상자 발문만 전사돼 있어 본문 풀이·KEY Point 없이 발문만으로 판정했다.

단원의 골조는 거의 전부 `조건 → 판별식 D 의 부호 → 미정계수`이고, 변별은 (가) 이차항 계수 ≠ 0 을 별도 조건으로 세우는지, (나) 「k 의 값에 관계없이」를 k 에 대한 항등식으로 옮기는지, (다) 판별식을 다시 한 번 판별하는 이중 판별식으로 가는지에서 갈린다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM1-114-220
  page: 114
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "익히기"
  summary: |
    ⑴~⑹ 이차방정식 여섯 개(무리수 계수 · 소수 계수 · 이항해서 정리해야 하는 꼴 포함)의 근을 각각 판별하기.
  category: '식 정리 → 판별식의 부호 → 두 실근·중근·두 허근 판정'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식의 근의 판별(판별식의 부호)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    여섯 식 모두 ax^2+bx+c=0 꼴로 정리한 뒤 D 의 부호만 보면 끝난다. ⑸는 양변 10배, ⑹은 전개·이항이 한 단계 더 붙지만 판정 도구는 같다.
    정의 확인 구역 · 통찰 0 · M_total 5 → 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: '식을 내림차순 정리 → D=b^2-4ac 계산 → 부호로 근 판별'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 서로 다른 두 실근 ⑵ 서로 다른 두 허근 ⑶ 중근 ⑷ 중근 ⑸ 서로 다른 두 실근 ⑹ 서로 다른 두 허근'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/114-220.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수는 자유롭게 바꾸되 여섯 문항이 D>0 · D=0 · D<0 을 고루 덮게 배치한다. 무리수 계수 문항은 D 가 정수로 떨어지도록(b=2√m, c=m 형태), 소수·분수 계수 문항은 정수배로 고칠 수 있도록 유지한다.'
    creative: '(1) 정리가 필요한 꼴(괄호 전개·이항)을 늘려 Mₛ만 올리기(★1 유지) (2) 「실근을 갖는다」로 물어 중근 포함 여부를 판단시키기(★1~2 · T-경계) (3) 계수에 문자를 넣어 범위를 묻는 222 꼴로 확장(★2).'
```

```yaml
- id: GN-CM1-114-221
  page: 114
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "익히기"
  summary: |
    보기 ㄱ~ㅂ 의 이차방정식 여섯 개 중 ⑴ 실근을 갖는 것, ⑵ 허근을 갖는 것을 있는 대로 고르기.
  category: '보기별 판별식 계산 → 실근(D≥0)·허근(D<0)으로 분류'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "판별식으로 실근·허근 판별하기(보기 고르기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    보기 여섯 개의 D 를 차례로 계산해 분류하는 반복 작업. 분수 계수(ㅁ·ㅂ)는 정수배로 고치면 계산이 가볍다.
    유일한 함정은 ⑴ 「실근」이 중근(D=0, ㄹ·ㅁ)을 포함한다는 점(T-경계)이지만 정의 확인 수준이라 통찰로 세지 않았다. 통찰 0 · M_total 5 → ★1.
  tier: star_1
  mechanism_primary: '보기마다 D 계산 → 실근은 D≥0(중근 포함) · 허근은 D<0 으로 묶기'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ ㄴ, ㄹ, ㅁ, ㅂ ⑵ ㄱ, ㄷ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/114-221.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '보기 계수는 바꿔도 되지만 D=0 인 보기를 최소 한 개는 남겨 「실근」에 중근이 포함되는지 묻는 구조를 유지한다. 분수 계수 보기는 분모를 곱해 정수 계수가 되게 둔다.'
    creative: '(1) ⑴을 「서로 다른 두 실근」으로 바꿔 중근 보기를 답에서 빼게 하기(★2 · 경계 변별) (2) 보기를 ㄱㄴㄷ 합답형(①ㄱ ②ㄱㄴ …)으로 바꾸기(★2) (3) 보기마다 미정계수를 넣어 「실근을 갖는 것」의 범위를 묻기(★3 · Mₐ 상승).'
```

```yaml
- id: GN-CM1-114-222
  page: 114
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "익히기"
  summary: |
    ⑴~⑶ 이차방정식 x²+4x+a-3=0 이 서로 다른 두 실근 · 중근 · 서로 다른 두 허근을 갖도록 하는 실수 a 의 값 또는 범위.
  category: '짝수 공식 D/4 의 부호 조건 → 미정계수 a 의 값·범위'
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근의 조건을 만족시키는 미정계수의 값·범위"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    D/4 = 4-(a-3) = 7-a 를 한 줄에 얻고 세 경우의 부호만 나눠 쓰면 된다. 미정계수가 들어가 Mₐ=2 지만 단계·계산은 최소.
    통찰 0 · M_total 5 이면 −1 후보이나 익히기 출발점이 ★1 이라 그대로 ★1.
  tier: star_1
  mechanism_primary: 'D/4=7-a 계산 → D>0·D=0·D<0 으로 a 의 범위·값 서술'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $a<7$ ⑵ $a=7$ ⑶ $a>7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/114-222.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'x 의 계수(짝수로 두면 D/4 사용)와 상수항의 미정계수 위치를 바꿀 수 있다. 제약: 경계값이 정수나 간단한 분수로 떨어지게 하고, 최고차항 계수는 1 로 두어 「이차방정식」 조건 검토가 끼어들지 않게 한다.'
    creative: '(1) 미정계수를 일차항으로 옮겨 x²+2ax+5=0 꼴로 만들면 경계가 ±√ 꼴이 되어 ★2 (2) 「실근을 갖는다」 한 문항으로 줄여 D≥0 경계를 묻기(★1~2) (3) 최고차항을 (a-1) 로 두면 이차방정식 조건 a≠1 이 붙어 225 꼴 ★2.'
```

### 필수·발전 예제

```yaml
- id: GN-CM1-115-e6
  page: 115
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    ⑴~⑶ 이차방정식 x²-2(m+3)x+m²=0 이 서로 다른 두 실근 · 중근 · 서로 다른 두 허근을 갖도록 하는 실수 m 의 값 또는 범위.
  category: 'D/4=(m+3)²-m² 전개 → 일차식 6m+9 의 부호 → m 의 범위'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근의 조건을 만족시키는 미정계수의 값·범위(판별식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    일차항 계수가 짝수라 D/4 로 가면 (m+3)²-m² = 6m+9 로 m² 가 소거되어 일차부등식 한 줄. 세 경우 모두 같은 식의 부호만 바꾼다.
    필수 예제 구역 ★2 출발 · 통찰 0 · M_total 6(−1 조건 불충족) → ★2 유지.
  tier: star_2
  mechanism_primary: 'D/4 계산 → m² 소거되어 6m+9 → 부호별로 m 의 값·범위'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $m>-\dfrac{3}{2}$ ⑵ $m=-\dfrac{3}{2}$ ⑶ $m<-\dfrac{3}{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/115-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'm+3 의 3, 상수항 m² 의 자리를 바꿀 수 있다. 제약: 제곱항이 소거되어 판별식이 m 에 대한 일차식이 되도록 (일차항 계수)²와 상수항의 m² 계수를 맞춘다. 소거되지 않게 두면 m 에 대한 이차부등식이 되어 단원 범위를 넘는다.'
    creative: '(1) 상수항을 m²+k 로 바꿔 경계가 k 에 따라 움직이게 하기(★2) (2) 판별식이 m 의 이차식이 되게 해 「모든 m 에 대하여 허근」을 묻기(★3 · I-EQV) (3) 최고차항을 (m-1) 로 두어 이차방정식 조건을 끼우기(★2~3).'
```

```yaml
- id: GN-CM1-115-223
  page: 115
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 이차방정식 x²+(2k-1)x+k²-3=0 이 서로 다른 두 실근 · 중근 · 서로 다른 두 허근을 갖도록 하는 실수 k 의 값 또는 범위.
  category: 'D=(2k-1)²-4(k²-3) 전개 → 일차식 -4k+13 의 부호 → k 의 범위'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근의 조건을 만족시키는 미정계수의 값·범위(판별식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e6 의 확인체크. 일차항이 홀수 꼴이라 D 를 그대로 쓰고 전개하면 k² 가 소거되어 -4k+13 한 줄.
    부호를 -4k 로 나눌 때 부등호 방향이 뒤집히는 자리(T-부호)만 주의. 필수 예제 대응 ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: 'D 전개 → k² 소거되어 -4k+13 → 부호별로 k 의 값·범위(부등호 방향 반전 주의)'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $k<\dfrac{13}{4}$ ⑵ $k=\dfrac{13}{4}$ ⑶ $k>\dfrac{13}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/115-223.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '2k-1 의 −1 과 k²-3 의 −3 을 바꿀 수 있다. 제약: k² 항이 소거되어 판별식이 일차식이 되어야 하고, 경계값이 간단한 분수(여기서는 13/4)로 떨어지게 상수를 고른다.'
    creative: '(1) k 의 계수를 음수로 두어 부등호 반전을 강제하기(★2) (2) 「실근을 갖는다」로 합쳐 D≥0 경계 포함을 묻기(★2) (3) 자연수 k 의 개수를 묻는 233 꼴로 바꾸기(★2 · 경계 제외 카운트).'
```

```yaml
- id: GN-CM1-115-224
  page: 115
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    이차방정식 x²-2(k-1)x+k²-5k+4=0 이 실근을 갖도록 하는 실수 k 의 값의 범위.
  category: '「실근을 갖는다」 → D/4≥0 → 일차부등식 3k-3≥0'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "실근을 가질 조건(D≥0 · 중근 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    D/4 = (k-1)²-(k²-5k+4) = 3k-3 이고 「실근」이므로 등호를 포함한 D/4≥0. 중근을 뺀 D>0 으로 쓰면 경계 k=1 을 잃는다(T-경계).
    공식 적용이 곧 해답이라 통찰로 세지 않았다. 필수 예제 대응 ★2 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '실근 ⇔ D/4≥0 → 3k-3≥0 → k≥1(경계 포함)'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$k\ge 1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/115-224.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'k-1 의 −1, 상수항 k²-5k+4 의 −5k·+4 를 바꿀 수 있다. 제약: k² 가 소거되어 일차부등식이 되어야 하고 경계가 정수로 떨어지게 둔다. 「실근」을 유지하려면 등호 포함 답이 나와야 한다.'
    creative: '(1) 「허근을 갖는다」로 바꿔 경계를 제외시키기(★2) (2) 「중근을 갖는다」로 바꿔 등식 한 개만 풀게 하기(★1~2) (3) 조건을 만족시키는 정수·자연수 k 의 개수를 묻기(★2~3 · 경계 포함 여부가 답을 1 바꾼다).'
```

```yaml
- id: GN-CM1-115-225
  page: 115
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    이차방정식 (k-1)x²+2kx+k-1=0 이 서로 다른 두 실근을 갖도록 하는 실수 k 의 값의 범위.
  category: '이차방정식 조건 k-1≠0 + D/4>0 → 두 조건의 교집합'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「이차방정식」이라는 서술을 최고차항 계수 k-1≠0 이라는 독립 조건으로 옮겨 D/4>0 과 함께 세움"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차방정식이 서로 다른 두 실근을 가질 조건(이차항 계수 ≠ 0 포함)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    D/4 = k²-(k-1)² = 2k-1 > 0 은 한 줄이지만, 최고차항이 문자여서 k≠1 을 따로 세우지 않으면 답이 k>1/2 로 뭉개진다.
    답의 꼴(1/2<k<1 또는 k>1)이 바로 그 조건의 흔적이다. 조건을 식으로 옮기는 EQV d1 한 단계 · 확인체크(필수 대응) ★2 출발 → ★2 유지(통찰 1개는 +1 조건 미달).
  tier: star_2
  mechanism_primary: 'k-1≠0 확보 → D/4=2k-1>0 → 두 조건 교집합으로 범위 서술'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{2}<k<1$ 또는 $k>1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/115-225.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '최고차항·상수항을 같은 (k-a) 로 두는 구조를 유지하면 D/4 가 일차식으로 떨어진다. 제약: 제외해야 하는 k 값이 D/4>0 의 범위 안에 들어가야 함정이 살아난다(여기서는 k=1 이 k>1/2 안에 있음).'
    creative: '(1) 제외값이 범위 밖에 오게 수를 바꾸면 함정이 죽어 ★1~2 로 내려간다 — ★ 변동 지점 (2) 「실근을 갖는다」로 바꾸면 k-1=0 인 일차방정식 경우까지 따져야 해 I-MI 가 붙고 ★3 (3) 「허근을 갖는다」로 바꾸면 이차방정식 조건이 자동 충족되어 ★2.'
```

```yaml
- id: GN-CM1-116-e7
  page: 116
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전예제"
  summary: |
    이차방정식 x²-2(k-a)x+k²+a²-b+1=0 이 실수 k 의 값에 관계없이 항상 중근을 가질 때 실수 a, b 의 값.
  category: '항상 중근 → D/4=0 이 k 에 대한 항등식 → 계수 비교'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「k 의 값에 관계없이 항상 중근」을 D/4=0 이 k 에 대한 항등식이라는 조건으로 옮겨 k 의 계수와 상수항을 각각 0 으로 둠"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "k 의 값에 관계없이 항상 중근을 가질 조건(판별식의 항등식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    D/4 = (k-a)²-(k²+a²-b+1) 을 정리하면 k² 가 소거되어 k 에 대한 일차식 -2ak+b-1 이 된다. 이것이 모든 k 에서 0 이어야 하므로 -2a=0, b-1=0.
    특정 k 를 두 번 대입해 연립하는 길도 있지만 필요조건일 뿐이어서 항등식으로 보는 한 단계가 핵심(EQV d2). 발전 예제 ★3 출발 유지.
  tier: star_3
  mechanism_primary: 'D/4 정리 → k² 소거 → k 항등식 -2ak+(b-1)=0 → 계수 비교로 a, b'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a=0$, $b=1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/116-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'k-a 의 부호, 상수항의 a²-b+1 조합을 바꿀 수 있다. 제약: k² 가 반드시 소거되어 판별식이 k 에 대한 일차식이 되어야 하고, 계수 비교로 a·b 가 유일하게 결정되어야 한다.'
    creative: '(1) 결론을 a+b 나 ab 로 묻기(226 꼴 · ★3 유지) (2) 판별식이 k 에 대한 이차식으로 남게 해 「항상 허근」을 묻기 — 이차식의 판별식을 다시 따져야 해 ★4(236·239 계열) (3) 「항상 중근」을 「항상 x=2 를 근으로」로 바꾸면 대입 후 항등식(234 꼴 · ★3).'
```

```yaml
- id: GN-CM1-116-e8
  page: 116
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    이차식 x²+(2k+1)x+k²-k+2 가 완전제곱식이 될 때 실수 k 의 값.
  category: '완전제곱식 ⇔ 대응 이차방정식이 중근 ⇔ D=0 → k'
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「이차식이 완전제곱식」이라는 식에 대한 조건을 「대응하는 이차방정식이 중근을 갖는다 ⇔ D=0」으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차식이 완전제곱식이 될 조건(D=0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    방정식이 아니라 식에 붙은 조건이라 판별식을 바로 꺼내기 어렵다는 점이 유일한 벽. D=(2k+1)²-4(k²-k+2)=8k-7=0 으로 옮기면 한 줄에 끝난다.
    최고차항이 1 이라 이차식 조건은 따질 필요가 없다(227 과의 차이). 필수 예제 ★2 · 통찰 1개(EQV d1) → ★2 유지.
  tier: star_2
  mechanism_primary: '완전제곱식 ⇔ D=0 → (2k+1)²-4(k²-k+2)=0 → k=7/8'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{7}{8}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/116-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '2k+1 과 k²-k+2 의 상수들을 바꿀 수 있다. 제약: k² 가 소거되어 일차방정식이 되면 해가 하나, 남기면 두 개가 되므로 의도한 해의 개수에 맞춰 계수를 고른다. 최고차항은 1 로 두어야 이차식 조건이 끼어들지 않는다.'
    creative: '(1) 최고차항을 (k-2) 로 바꾸면 이차식 조건 k≠2 로 후보 하나를 기각해야 해 ★3(227) (2) 「완전제곱식」을 「중근을 갖는다」로 바꾸면 통찰이 사라져 ★1~2 (3) 세 문자 a(1+x²)+2bx+c(1-x²) 처럼 정리부터 해야 하는 꼴로 만들면 ★3(237).'
```

```yaml
- id: GN-CM1-116-226
  page: 116
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    이차방정식 x²+2(k+a)x+k²+6k+b=0 이 실수 k 의 값에 관계없이 항상 중근을 가질 때 a+b 의 값.
  category: '항상 중근 → D/4=0 이 k 항등식 → 계수 비교 후 a+b'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「k 의 값에 관계없이 항상 중근」을 D/4=0 의 k 항등식으로 옮겨 k 의 계수와 상수항을 각각 0 으로 둠"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "k 의 값에 관계없이 항상 중근을 가질 조건(판별식의 항등식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    e7 의 확인체크. D/4=(k+a)²-(k²+6k+b) 에서 k² 가 소거되어 (2a-6)k+(a²-b) 가 되고, 항등식 조건으로 a·b 가 차례로 정해진다.
    묻는 값이 a+b 라 마지막 한 줄이 더 붙을 뿐 골조는 e7 과 같다. 발전 예제 대응 ★3 출발 유지.
  tier: star_3
  mechanism_primary: 'D/4 정리 → (2a-6)k+(a²-b)=0 항등식 → a=3, b=9 → a+b'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/116-226.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'k 의 일차항 계수(여기서는 6)를 바꾸면 a 가 그 절반으로 따라 움직이고 b=a² 로 결정된다. 제약: k² 소거 구조를 유지하고 a 가 정수로 떨어지게 짝수를 쓴다.'
    creative: '(1) 묻는 값을 ab 나 b-a 로 바꾸기(★3 유지) (2) 「항상 중근」을 「항상 실근」으로 바꾸면 항등식이 아니라 모든 k 에 대한 부등식이 되어 판별식을 다시 판별해야 하므로 ★4 (3) 조건을 「어떤 k 에 대해 중근」으로 약화하면 k 에 대한 방정식 한 개가 되어 ★2.'
```

```yaml
- id: GN-CM1-116-227
  page: 116
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    이차식 (k-2)x²+4(k-2)x+3k-2 가 완전제곱식이 될 때 실수 k 의 값.
  category: '이차식 조건 k≠2 + D/4=0 → 두 근 중 k=2 기각'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「완전제곱식」을 대응 이차방정식의 중근 조건 D/4=0 으로 옮김"
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "D/4=(k-2)(k-6)=0 의 두 후보 중 k=2 는 최고차항이 사라져 이차식이 아니므로 기각 — 검증 없이는 답이 두 개가 됨"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "이차식이 완전제곱식이 될 조건(이차항 계수 ≠ 0 으로 후보 기각)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    D/4 = 4(k-2)²-(k-2)(3k-2) 는 (k-2) 로 묶여 (k-2)(k-6) 이 되고, 여기서 곧바로 k=2, 6 이 나온다.
    그런데 k=2 는 주어진 식 자체를 상수 4 로 만들어 「이차식」 전제를 깨므로 기각해야 한다(VF d1). 이 기각이 답을 결정하므로 e8(★2)보다 한 단 위로 본다.
    [분류 이슈] 벤더는 필수 예제 아래 확인체크(★2 대응)이나 후보 기각 단계 때문에 ★3 으로 판정 — 1단 차이라 라벨은 ★3 으로 두고 기록만 함.
  tier: star_3
  mechanism_primary: 'D/4 를 (k-2) 로 묶어 (k-2)(k-6)=0 → k=2, 6 → 이차식 조건으로 k=2 기각'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/116-227.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '최고차항과 일차항이 같은 인수 (k-2) 를 공유하는 구조가 기각 함정의 핵심이다. 상수항 3k-2 의 계수를 바꿔 두 번째 근을 옮길 수 있다. 제약: 두 근이 서로 달라야 하고, 그중 하나가 정확히 배제값(k=2)과 겹쳐야 한다.'
    creative: '(1) 배제값과 겹치지 않게 상수를 바꾸면 기각 단계가 사라져 ★2 — ★ 변동 지점 (2) 「완전제곱식이 되도록 하는 k 의 개수」를 묻기(기각을 빠뜨리면 2 라고 답하게 됨 · ★3) (3) 「완전제곱식」을 「두 일차식의 곱으로 인수분해」로 바꾸면 239 계열 ★4.'
```

### 연습문제 STEP 1

```yaml
- id: GN-CM1-117-228
  page: 117
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    이차방정식 x²-ax+7=0 의 해가 x=(5±√b i)/2 일 때 유리수 a, b 에 대하여 a+b 의 값.
  category: '근의 공식의 허근 꼴 → 주어진 해와 계수 비교 → a, b'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "근의 공식의 √(a²-28) 을 D<0 인 경우의 √(28-a²) i 로 옮겨야 주어진 해의 꼴과 계수를 비교할 수 있음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "해의 꼴이 주어진 이차방정식의 미정계수(허근·켤레근)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    근의 공식으로 x=(a±√(a²-28))/2 를 얻은 뒤 주어진 해가 허근 꼴이므로 √ 안의 부호를 뒤집어 i 를 꺼내고 실수부·허수부를 비교한다.
    켤레근 성질로 두 근의 합·곱(근과 계수의 관계)을 쓰는 길도 같은 분량이라 전략 분기로는 세지 않았다. STEP 1 ★2 · 통찰 1개(EQV d1) → ★2 유지.
  tier: star_2
  mechanism_primary: '근의 공식 → D<0 이므로 √(28-a²) i 꼴로 변환 → 주어진 해와 계수 비교 → a+b'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/117-228.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상수항 7 과 주어진 해의 실수부 5/2 를 바꿀 수 있다. 제약: 판별식이 음수여야 하고(허근), b=4c-a² 가 유리수 · 가능하면 양의 정수로 떨어지게 상수항을 고른다.'
    creative: '(1) 해를 실근 꼴 (5±√b)/2 로 주면 부호 변환 단계가 사라져 ★1~2 — ★ 변동 지점 (2) 켤레근 한 개만 주고 나머지 근과 계수를 묻기(★2 · 실계수 켤레근 성질) (3) a, b 를 자연수로 제한하고 조건을 만족시키는 순서쌍의 개수를 묻기(★3 · 사후 검증).'
```

```yaml
- id: GN-CM1-117-229
  page: 117
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    이차방정식 2x²-2x+1=0 의 한 근을 α 라 할 때 α⁴-α²+α 의 값. 5지선다.
  category: '근 대입 관계식 → 차수 낮추기 → 고차식 값'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "α 가 허근이라 직접 대입할 수 없으므로 2α²=2α-1 즉 α²=α-1/2 라는 관계식으로 바꿔 고차식의 차수를 반복해서 낮춤"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "근을 대입한 관계식으로 고차식의 값 구하기(차수 낮추기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    판별식이 음수라 α 를 구해 대입하는 길은 막혀 있고, α²=α-1/2 를 α⁴=(α²)² 에 두 번 먹여 일차식까지 내려야 한다.
    내리는 동안 α 가 소거되어 유리수가 남는 것이 이 문제의 맛. 교육청 기출 + 통찰 d2 + M_total 7 → STEP 1 ★2 에서 +1.
    [분류 이슈] 골조가 판별식이 아니라 복소수·근의 성질이라 단원 배치와 어긋난다(기록만).
  tier: star_3
  mechanism_primary: 'α²=α-1/2 로 치환 → α⁴ 까지 차수 낮추기 → α 소거되어 유리수'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/117-229.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수 2, -2, 1 과 묻는 식의 항 조합을 바꿀 수 있다. 제약: 차수를 낮춘 끝에 α 항이 소거되어 답이 유리수(선택지에 넣을 수 있는 값)가 되도록 묻는 식의 계수를 맞춘다. 허근이 되게 D<0 을 유지한다.'
    creative: '(1) α³ 이나 α⁴+1/α⁴ 처럼 대칭식으로 바꾸면 I-SYM 이 붙어 ★3~4 (2) 묻는 식을 원 방정식으로 나눈 나머지로 처리하게 하면 골조는 같고 도구만 다름(★3) (3) 근을 실근으로 바꾸면 직접 대입 길이 열려 통찰이 죽고 ★2.'
```

```yaml
- id: GN-CM1-117-230
  page: 117
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    이차방정식 (a+1)x²+x+a²-2=0 의 한 근이 1 일 때 다른 한 근. 5지선다(a 는 상수).
  category: '근 대입 → a 의 후보 → 이차방정식 조건으로 기각 → 다른 근'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a²+a=0 의 두 후보 중 a=-1 은 최고차항 a+1 을 0 으로 만들어 이차방정식이 아니므로 기각 — 검증하지 않으면 답이 갈림"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "한 근이 주어진 이차방정식의 다른 근(이차항 계수 ≠ 0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=1 을 대입하면 a²+a=0 으로 a=0 또는 a=-1. a=-1 은 이차방정식 전제를 깨므로 기각하고 a=0 을 넣은 x²+x-2=0 에서 다른 근을 얻는다.
    대입·인수분해는 가벼워 변별은 기각 한 단계에 있다(VF d1). STEP 1 ★2 · 통찰 1개 → ★2 유지.
  tier: star_2
  mechanism_primary: 'x=1 대입 → a²+a=0 → a=-1 기각 → a=0 대입한 방정식의 다른 근'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/117-230.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주어진 근(1), 최고차항 a+1, 상수항 a²-2 를 바꿀 수 있다. 제약: 대입해서 얻는 a 방정식의 해 중 정확히 하나가 최고차항을 0 으로 만들어야 기각 단계가 살아난다. 남은 a 로 만든 방정식은 인수분해가 되게 둔다.'
    creative: '(1) 다른 근 대신 두 근의 합·곱을 묻기(근과 계수의 관계 · ★2) (2) 기각되는 후보가 없게 수를 바꾸면 ★1~2 로 내려간다 — ★ 변동 지점 (3) 「한 근이 1」을 「두 근의 차가 3」으로 바꾸면 판별식·근과 계수의 관계가 함께 필요해 ★3.'
```

```yaml
- id: GN-CM1-117-231
  page: 117
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    두 이차방정식 x²-|x-2|-4=0 과 x²+ax+b=0 의 근이 서로 같을 때 실수 a, b 에 대하여 a-b 의 값.
  category: '절댓값 구간 분할 → 범위 밖 해 기각 → 두 근으로 방정식 복원'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 구간에서 각각 두 근이 나오지만 구간 조건을 벗어나는 근을 기각해야 실제 해가 2, -3 으로 좁혀짐"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "절댓값 기호를 포함한 이차방정식의 해와 계수 복원"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x≥2 와 x<2 로 나눠 각각 이차방정식을 풀면 근이 두 개씩 나오는데 구간을 벗어나는 쪽을 버려야 한다(VF d1).
    남은 두 근을 근과 계수의 관계로 되돌려 a, b 를 얻는 마지막 단계는 표준. 절댓값 분할 자체는 표준 분기라 통찰로 세지 않았다(T-부호·T-범위 두 함정). STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: '구간별로 절댓값 제거 → 각 이차방정식 풀이 → 구간 밖 근 기각 → 두 근으로 x²+ax+b 복원'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/117-231.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '절댓값 안의 기준점(x-2 의 2)과 상수항 -4 를 바꿀 수 있다. 제약: 각 구간에서 나온 두 근 중 하나만 구간 안에 남아야 하고(기각 단계 유지), 최종 두 근이 정수라야 a, b 가 정수로 떨어진다.'
    creative: '(1) 두 구간 모두에서 근이 살아남게 수를 바꾸면 근이 3~4개가 되어 이차방정식으로 복원할 수 없다 — 출제 금지 지점 (2) 「근이 서로 같다」를 「한 근만 공통」으로 바꾸면 공통근 문제가 되어 ★3 (3) a-b 대신 a+b·ab 를 묻기(★2 유지).'
```

```yaml
- id: GN-CM1-117-232
  page: 117
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    새로 정의된 연산 a∗b=2ab-a-b+1 에 대하여 x∗x=|1∗x|+1 을 만족시키는 실수 x 의 값을 모두 구하기.
  category: '정의 대입으로 양변 정리 → 절댓값 분할 → 구간 밖 해 기각'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x≥0 · x<0 두 갈래에서 나온 근 중 구간 조건을 어기는 것을 기각해야 답이 0 과 3/2 로 확정됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "새로 정의된 연산과 절댓값을 포함한 방정식의 해"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정의에 그대로 대입하면 좌변은 2x²-2x+1, 우변의 1∗x 는 x 로 간단해져 2x²-2x=|x| 한 줄이 된다(T-표기 함정은 정의 대입에서 끝).
    이후 x 의 부호로 나눠 풀고 구간 밖 근을 버리는 것이 본체(VF d1). STEP 1 ★2 · 통찰 1개(depth 1) → +1 조건 미달로 ★2 유지.
  tier: star_2
  mechanism_primary: '정의 대입 → 2x²-2x=|x| → 부호로 분할 → 각 근을 구간 조건으로 검증'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$0$, $\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/117-232.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '연산 정의의 계수(2ab-a-b+1)와 좌·우변에 넣는 원소(x∗x, 1∗x)를 바꿀 수 있다. 제약: 대입 후 이차항이 살아 있어야 하고, 두 구간 중 한쪽 근이 기각되도록 상수를 고른다. 해는 유리수로 떨어지게 둔다.'
    creative: '(1) 우변의 절댓값을 없애면 단순 이차방정식이 되어 ★1~2 — ★ 변동 지점 (2) 연산을 a∗b=ab-2a+b 처럼 비대칭으로 두어 x∗1 과 1∗x 가 다르게 만들기(★3 · T-표기 강화) (3) 「해를 모두 구하라」를 「해의 합」으로 바꾸면 기각을 빠뜨린 학생도 걸러짐(★2).'
```

```yaml
- id: GN-CM1-117-233
  page: 117
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    이차방정식 x²-2(k+2)x+k²+24=0 이 서로 다른 두 허근을 가질 때 자연수 k 의 개수.
  category: 'D/4<0 → 일차부등식 k<5 → 자연수 개수 세기'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "허근을 가질 조건을 만족시키는 자연수의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    D/4=(k+2)²-(k²+24)=4k-20<0 에서 k<5 를 얻고 자연수를 세면 끝. k² 가 소거되는 구조는 e6·223 과 같다.
    마지막에 경계 k=5 를 포함하지 않는다는 점(T-경계)만 주의하면 되는 절차형. STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: 'D/4=4k-20<0 → k<5 → 자연수 1,2,3,4 의 개수'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/117-233.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'k+2 의 2 와 상수항 k²+24 의 24 를 바꿔 경계를 옮길 수 있다. 제약: k² 가 소거되어 일차부등식이 되어야 하고, 경계가 정수일 때와 분수일 때 세는 개수가 달라지므로 의도한 개수에 맞춰 고른다.'
    creative: '(1) 「실근」으로 바꿔 경계를 포함시키면 개수가 1 늘어난다 — 경계 변별 (2) 정수 k 의 개수로 바꾸면 하한이 필요해 판별식이 이차식이어야 하고 ★3 (3) 「모든 자연수 k 에 대하여 허근」처럼 전칭으로 바꾸면 항등·부등식 처리로 ★3~4.'
```

### 연습문제 STEP 2

```yaml
- id: GN-CM1-118-234
  page: 118
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    이차방정식 2x²+a(k+1)x+b(k-3)=0 이 실수 k 의 값에 관계없이 항상 x=2 를 근으로 가질 때 a+b 의 값.
  category: 'x=2 대입 → k 에 대한 항등식 → 계수 비교 연립'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「k 에 관계없이 항상 x=2 가 근」을 x=2 를 대입한 식이 k 에 대한 항등식이라는 조건으로 옮겨 k 의 계수와 상수항을 각각 0 으로 둠"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "k 의 값에 관계없이 항상 주어진 수를 근으로 가질 조건(항등식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x=2 를 넣어 8+2a(k+1)+b(k-3)=0 을 만든 뒤 k 에 대해 정리하면 (2a+b)k+(8+2a-3b)=0. 모든 k 에서 성립해야 하므로 두 계수를 각각 0 으로 두고 연립한다.
    판별식은 쓰지 않지만 e7·226 과 같은 「관계없이 → 항등식」 골조(EQV d2). STEP 2 ★3 출발 유지.
  tier: star_3
  mechanism_primary: 'x=2 대입 → k 로 정리 → (2a+b)k+(8+2a-3b)=0 항등식 → 연립 → a+b'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/118-234.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '고정근(2), 최고차항 계수(2), k+1·k-3 의 상수를 바꿀 수 있다. 제약: 계수 비교로 나온 연립이 유일해를 갖고 a, b 가 정수·간단한 분수로 떨어지게 둔다.'
    creative: '(1) 묻는 값을 ab 나 다른 한 근으로 바꾸기(다른 근은 근과 계수의 관계가 추가되어 ★3 유지~+1) (2) 「항상 x=2 를 근으로」를 「항상 중근」으로 바꾸면 판별식 항등식(e7 꼴 ★3) (3) 고정근을 문자 p 로 두고 p 까지 구하게 하면 미지수 3개 항등식이 되어 ★4.'
```

```yaml
- id: GN-CM1-118-235
  page: 118
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    x²+ax+b=0 이 서로 다른 두 실근을 가질 때 x²+(a-2c)x+b-ac=0 의 근을 판별하기(a, b, c 는 실수).
  category: '두 판별식의 차를 계산 → D₂=D₁+4c² 구조 발견 → 부호 결론'
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "둘째 판별식을 전개하면 -4ac 가 상쇄되어 D₂=(a²-4b)+4c² 즉 첫 조건 D₁ 에 제곱항을 더한 꼴임을 알아보고 부호를 결론"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "판별식 사이의 관계로 다른 이차방정식의 근 판별"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    수치가 하나도 없고 문자 세 개로만 돌아가는 문제(Mₐ=3). 둘째 판별식 (a-2c)²-4(b-ac) 를 전개하면 교차항이 상쇄되어 a²-4b+4c² 가 된다.
    주어진 조건이 a²-4b>0 이고 4c²≥0 이므로 합은 항상 양수 — 구조를 알아보는 한 단계가 전부(EQV d2). STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: 'D₂ 전개 → -4ac 상쇄 → D₂=D₁+4c²>0 → 서로 다른 두 실근'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "서로 다른 두 실근"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/118-235.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '둘째 방정식의 계수를 (a-2c), (b-ac) 대신 다른 조합으로 바꿀 수 있다. 제약: 전개했을 때 교차항이 상쇄되어 D₁ 에 완전제곱항만 더해진 꼴이 되어야 결론이 무조건 성립한다(c 의 계수 맞추기).'
    creative: '(1) 첫 조건을 「허근」으로 바꾸고 둘째에서 제곱항을 빼면 결론이 c 에 따라 갈려 I-MI 가 붙고 ★4 — ★ 변동 지점 (2) 세 방정식으로 늘려 연쇄 판별(★4) (3) c 를 특정 수로 고정하면 추상도가 낮아져 ★2.'
```

```yaml
- id: GN-CM1-118-236
  page: 118
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    x 에 대한 이차방정식 2x²-3y²-4x+ay-xy+1=0 이 중근을 갖도록 하는 실수 y 의 값의 개수가 1 일 때 양수 a 의 값.
  category: 'x 에 대해 내림차순 정리 → 중근 조건 D=0 을 y 의 이차방정식으로 → 다시 판별식 0'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 문자가 섞인 식을 「x 에 대한 이차방정식」으로 재배열해 y 를 계수 쪽으로 보내야 판별식을 쓸 수 있음"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「조건을 만족시키는 y 의 값의 개수가 1」을 D=0 이라는 y 의 이차방정식이 중근을 갖는다는 조건으로 옮겨 판별식을 한 번 더 사용"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "이중 판별식(중근 조건을 다시 판별하기)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    x 에 대해 정리하면 2x²-(y+4)x+(-3y²+ay+1)=0. 중근 조건 D=0 은 y 에 대한 이차방정식이 되고, 그 해가 하나라는 조건이 다시 판별식 0 을 부른다.
    판별식을 두 번 쓰는 구조(RT d1 + EQV d2)에 양수 조건으로 부호 하나를 고르는 마무리가 붙는다. STEP 2 ★3 에서 통찰 2개 → +1 로 ★4.
  tier: star_4
  mechanism_primary: 'x 에 대해 정리 → D=0 (y 의 이차식) → 그 판별식 0 → 양수 조건으로 a 선택'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{2+5\sqrt{2}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/118-236.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'xy·x·y 항의 계수를 바꿀 수 있다. 제약: x 에 대해 정리했을 때 이차항 계수가 상수여야 하고, 두 번째 판별식이 a 에 대한 이차방정식이 되어 두 근 중 하나만 양수가 되도록(또는 부호 조건으로 하나가 걸러지도록) 상수를 고른다. 답이 무리수여도 되지만 근호 안이 정리되게 둔다.'
    creative: '(1) 「y 의 값의 개수가 2」로 바꾸면 부등식(D>0)이 되어 a 의 범위 문제가 된다(★4 유지) (2) 양수 조건을 빼면 답이 두 개가 되어 기각 단계가 사라지고 ★3 — ★ 변동 지점 (3) 변수를 바꿔 y 에 대한 이차방정식으로 보게 하면 정리 방향 선택이 생겨 I-SC 가 붙고 ★4~5.'
```

```yaml
- id: GN-CM1-118-237
  page: 118
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    이차식 a(1+x²)+2bx+c(1-x²) 이 완전제곱식일 때 실수 a, b, c 를 세 변의 길이로 하는 삼각형의 모양.
  category: 'x 에 대해 정리 → 완전제곱식 ⇔ D/4=0 → a²=b²+c² 를 피타고라스 정리로 해석'
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「완전제곱식」을 정리한 이차식의 판별식 D/4=0 으로 옮김"
    - step: 3
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "얻어진 대수 관계식 a²=b²+c² 를 세 변 길이 사이의 관계로 옮겨 빗변이 a 인 직각삼각형이라는 기하 결론으로 번역"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "완전제곱식이 될 조건과 삼각형의 모양 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x 로 묶으면 (a-c)x²+2bx+(a+c) 이고 D/4=b²-(a-c)(a+c)=b²-a²+c²=0 에서 a²=b²+c² 한 줄.
    마지막에 대수식을 삼각형 조건으로 옮기는 번역이 다른 판별식 문항과 다른 점(RT d2)이지만 각 단계가 모두 한 줄이라 계산 부담은 낮다.
    [분류 이슈] 통찰 2개로 +1 후보(★4)이나 단계마다 표준 도구만 쓰고 분량이 짧아 STEP 2 출발점 ★3 을 유지했다(236·238 과의 균형).
  tier: star_3
  mechanism_primary: 'x 에 대해 정리 → D/4=0 → a²=b²+c² → 빗변 a 인 직각삼각형'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "빗변의 길이가 $a$인 직각삼각형"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/118-237.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '괄호 배치(1+x², 1-x²)와 일차항 2bx 의 계수를 바꿀 수 있다. 제약: 정리한 뒤 판별식이 a²-b²-c² 꼴의 대칭적 관계로 떨어져야 삼각형 결론이 나온다. 계수 2 를 빼면 D/4 를 못 써 계산만 지저분해진다.'
    creative: '(1) 결론을 「a=b 인 이등변삼각형」이 되도록 계수를 바꾸기(★3 유지 · 다른 관계식) (2) 삼각형 해석을 빼고 a, b, c 의 관계식만 묻기 — RT 통찰이 사라져 ★2 (3) 세 변 조건에 삼각부등식까지 확인시키면 I-VF 가 붙어 ★4.'
```

### 연습문제 실력 UP

```yaml
- id: GN-CM1-118-238
  page: 118
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    AB=2, BC=4 인 직사각형 ABCD 의 대각선 BD 위의 점 O 에서 네 변에 내린 수선의 발이 P, Q, R, S 일 때, 두 직사각형 APOS 와 OQCR 의 넓이의 합이 3 이고 AP<PB 이면 AP 의 길이. 5지선다.
  category: '한 변을 미지수로 → 두 넓이의 합을 이차방정식으로 → 대소 조건으로 근 하나 기각'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "점 O 가 대각선 위라는 기하 조건을 닮음(변의 비 2:4)으로 읽어 AP 를 미지수로 두면 두 직사각형의 가로·세로가 모두 그 문자로 표현되어 넓이 합이 이차방정식이 됨"
    - step: 3
      type: I-VF
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "넓이 방정식의 두 근 중 AP<PB 를 어기는 쪽을 기각해야 답이 하나로 정해짐 — 선택지에 두 근이 모두 들어 있어 검증이 필수"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "도형의 넓이 조건을 이차방정식으로 옮기기(기하 → 대수)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    O 가 대각선 BD 위에 있으므로 PB:AP 와 BQ:QC 가 직사각형의 변의 비에 묶인다. AP 를 미지수로 잡으면 두 직사각형의 넓이 합이 이차식이 되고 =3 에서 두 근이 나온다.
    AP<PB 가 두 근 중 하나를 기각하는 장치(VF d1)이고, 기각을 빠뜨리면 다른 선택지를 고르게 된다. 실력 UP ★4 출발 · 통찰 2개(RT·VF) → ★4 유지(★5 는 통찰 3개 이상 필요).
  tier: star_4
  mechanism_primary: 'AP 를 미지수로 → 대각선 닮음으로 네 변 표현 → 넓이 합 = 3 인 이차방정식 → AP<PB 로 근 기각'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "③"
  answer_source: "답지"
  figure: 'crop:fig-118-238.png'
  latex: latex-bank/gn-cm1/items/118-238.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '직사각형의 두 변(2, 4)과 넓이 합(3)을 바꿀 수 있다. 제약: 그림의 라벨 A·B·C·D·O·P·Q·R·S 배치와 「AB 가 짧은 변」이라는 관계는 고정한다. 넓이 방정식의 두 근이 모두 변의 길이 범위 안에 있어야 대소 조건 기각이 의미를 갖고, 근이 유리수로 떨어지게 넓이 합을 고른다.'
    creative: '(1) 대소 조건(AP<PB)을 빼면 답이 두 개가 되어 기각 단계가 죽고 ★3 — ★ 변동 지점 (2) 넓이의 합 대신 두 직사각형 넓이의 차·곱을 주기(★4 유지) (3) 넓이 합의 최솟값을 묻는 문제로 바꾸면 이차함수 최대·최소 단원과 결합해 I-XU 가 붙고 ★4~5 (4) 직사각형을 평행사변형으로 바꾸면 닮음 비 해석이 무거워져 ★5 후보.'
```

```yaml
- id: GN-CM1-118-239
  page: 118
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    이차식 2x²+xy-y²-x+2y+k 가 x, y 에 대한 두 일차식의 곱으로 인수분해될 때 실수 k 의 값.
  category: 'x 에 대해 정리 → 인수분해 가능 ⇔ 판별식이 y 의 완전제곱식 → 다시 판별식 0'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「두 일차식의 곱으로 인수분해된다」는 결과 조건에서 거꾸로, 근의 공식으로 얻는 x 가 y 의 일차식이어야 한다 → x 에 대한 판별식이 y 의 완전제곱식이어야 한다는 조건을 끌어냄"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「y 의 이차식이 완전제곱식」을 그 판별식이 0 이라는 조건으로 다시 옮겨 k 를 결정"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "이차식이 두 일차식의 곱으로 인수분해될 조건(판별식이 완전제곱식)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    x 에 대해 2x²+(y-1)x+(-y²+2y+k) 로 정리한 뒤, 인수분해되려면 근이 y 의 일차식이어야 한다는 역방향 조건을 세우는 것이 관문(BW d2).
    그러면 판별식 9y²-18y+1-8k 가 y 의 완전제곱식이어야 하고, 이것이 다시 판별식 0 으로 이어진다(EQV d2 · 236 과 같은 이중 판별식).
    실력 UP ★4 출발 · 통찰 2개(depth 2) → ★4 유지(★5 는 통찰 3개 이상 + SC/VF/SYM/XU 필요).
  tier: star_4
  mechanism_primary: 'x 에 대해 정리 → 인수분해 ⇔ 판별식이 y 의 완전제곱식 → 그 판별식 0 → k'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/118-239.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'x², xy, y², x, y 의 계수를 바꿀 수 있다. 제약: 이차항 부분 2x²+xy-y² 가 먼저 두 일차식으로 쪼개져야 하고(그래야 상수항만 조정하면 됨), 최종 k 가 정수로 떨어지게 일차항 계수를 고른다. 이중 판별식 구조를 유지하려면 x 에 대한 판별식이 y 의 이차식이어야 한다.'
    creative: '(1) k 를 xy 의 계수 자리에 두면 판별식 조건이 더 복잡해져 ★5 후보 (2) 「두 일차식의 곱」을 「완전제곱식」으로 바꾸면 조건이 강해져 계수 비교 한 번으로 끝나 ★3 — ★ 변동 지점 (3) 인수분해한 두 일차식까지 답하게 하면 검증 단계가 붙어 I-VF 추가 ★4~5.'
```

## 표본 판정 요약 (23문)

- ★ 분포: ★1 3 · ★2 10 · ★3 7 · ★4 3 · ★5 0
- 통찰형 16 · 절차형 7 · premium 0
- 통찰 유형 분포: I-EQV 12 · I-VF 5 · I-RT 3 · I-BW 1 (SC·SYM·XU·MI·PD·CON 0)
- 대상층: 하위권 3 · 중하위권 5 · 중위권 7 · 중상위권 6 · 상위권 2
- type_hint 상위: 「근의 조건을 만족시키는 미정계수의 값·범위」 4 · 「k 에 관계없이 항등식(중근·고정근)」 3 · 「완전제곱식이 될 조건」 3 · 「이중 판별식」 2 · 「이차항 계수 ≠ 0 으로 후보 기각」 2
- 그림: 1문(`crop:fig-118-238.png`) — 발문에 도형 구조가 모두 서술돼 있어 라벨 배치 확인용
- 구역별 출발점 대비: 익히기 3문 모두 ★1 유지 · 예제·확인체크 8문 중 227 만 +1 · STEP 1 6문 중 229 만 +1(기출·통찰 d2) · STEP 2 4문 중 236 만 +1 · 실력 UP 2문 모두 ★4 유지

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-116-227 | 필수 예제 아래 확인체크(★2 대응)이나 D/4 의 두 근 중 k=2 를 이차식 조건으로 기각하는 단계가 답을 결정 → ★3 으로 판정. 1단 차이 | ★2 / ★3 |
| GN-CM1-117-229 | 골조가 판별식이 아니라 복소수 근의 차수 낮추기 — 단원 배치와 어긋남. 교육청 기출 + 통찰 d2 로 STEP 1 에서 +1 | ★2 / ★3 |
| GN-CM1-118-237 | 통찰 2개(EQV+RT)로 +1 후보지만 각 단계가 한 줄이라 STEP 2 출발점 ★3 유지 | ★3 / ★4 |
| GN-CM1-118-239 | ★4 인데 통찰이 EQV 로만 보이면 §2.13 저노출 유형 부재(YELLOW). 첫 단계를 「인수분해 결과에서 역으로 판별식 조건을 끌어냄」으로 보아 I-BW 로 라벨링했으나 EQV 와의 경계가 얇다 | ★4 |
| 확인체크 전반(115-223·224·225·116-226·227) | 통번호를 달고 있어 「개념원리 익히기 ★1」로 오분류하기 쉬우나 실제로는 바로 위 예제의 유사문제 → 대응 예제(필수 ★2 · 발전 ★3)를 출발점으로 삼았다 | 해당 없음 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형** — ① 「k 의 값에 관계없이 항상 …」 항등식형(e7·226·234): 판별식을 쓰는 것(e7·226)과 근 대입(234)이 도구는 다르지만 「문자에 관계없이 → 항등식」이라는 통찰이 같아 한 유형으로 묶을 수 있다. ② 이중 판별식형(236·239): 판별식을 두 번 쓰는 구조로 이 단원의 최상단 유형. ③ 「이차항 계수 ≠ 0」 기각형(225·227·230): 판별식·근 대입 어디에 붙든 기각 단계가 변별 지점이라 독립 유형 가치가 있다.
- **통합해도 될 유형** — 「근의 조건 → 미정계수의 값·범위」(222·e6·223·224·233)는 실근/중근/허근·범위/개수 차이일 뿐 골조가 같아 한 유형 + 하위 변형으로 충분하다. 「완전제곱식 조건」(e8·227·237)도 상위 유형 하나에 최고차항 문자 여부·기하 해석 여부를 변형 축으로 두면 된다.
- **단원 밖 유형** — 229(차수 낮추기)와 231·232(절댓값 포함 방정식)는 판별식 유형이 아니라 복소수·절댓값 단원 카탈로그에 배치하는 편이 맞다.
