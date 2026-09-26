---
name: mechanism-데이터-GN-ALG-02-p3
description: 개념원리 대수 02 지수의 확장(3/3 · 연습문제 STEP 1·STEP 2·실력 UP) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정) · 전사본 latex-bank/gn-alg
  section: 02 지수의 확장
  unit_code: ALG-02
  part: "3/3"
  extract_range: "26~28쪽 · 26-27~28-45"
  total_problems: 19
  unit_total: 45
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 가 비면 절차형, 하나라도 있으면 통찰형. depth_score 는 insights 의 effective_depth 평균(통찰 없으면 0.00). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/ (crops.json)
---

# 개념원리 대수 · 02 지수의 확장 (3/3) 정독 데이터 (v1.0)

이 파일은 개념원리 대수 02단원 「지수의 확장」의 마지막 조각(26~28쪽 · 19문항)을 다룬다. 이 범위는 단원 본문이 끝난 뒤의 **연습문제 구역 전체**로, 「연습문제 STEP 1」 9문 · 「연습문제 STEP 2」 7문 · 「연습문제 실력 UP」 3문으로 구성된다. 개념원리 고등의 벤더 난이도 신호는 구역 이름과 `level` 필드로 드러나며, 이 조각에서는 STEP 1 → ★2 · STEP 2 → ★3 · 실력 UP → ★4 를 출발점으로 삼고 M_total·통찰로 ±1 조정했다. 태그는 27-37(평가원 기출) 한 문항에만 있다. 이 범위에는 그림 문항이 없다.

내용상으로는 (가) 거듭제곱근의 정의와 실수인 n제곱근의 개수, (나) 근호를 유리수 지수로 옮겨 정리하는 계산, (다) `a^x ± a^{-x}` 꼴 대칭식, (라) `a^x = b^y = c^z` 꼴 조건식의 네 덩어리가 반복된다. 실력 UP 3문은 각각 순환 대칭·소인수분해 유일성·지수로 정의된 함수라는 서로 다른 축을 쓴다.

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(유형 코드 + depth + 근거) · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 변형과 ★ 변동 지점)를 채웠다. 발문은 원문 전사가 아니라 무엇을 묻는지의 요약이며, 원문 LaTeX 은 `latex-bank/gn-alg/items/<id>.tex` 에 있다.

## 문항 데이터

### 연습문제 STEP 1

```yaml
- id: GN-ALG-26-27
  page: 26
  vendor_label: '연습문제 STEP 1'
  vendor_level: 'STEP 1'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    8의 세제곱근 중 실수인 것을 a, -64의 세제곱근 중 실수인 것을 b라 할 때,
    a+b가 실수 x의 세제곱근이 되는 x의 값.
  category: '실수인 세제곱근 구하기 → 합 → 세제곱근 정의의 역방향 적용'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '실수인 n제곱근 구하기와 정의의 역방향 적용'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세제곱근은 n이 홀수라 실수가 하나씩(2, -4). 합 -2를 얻은 뒤 마지막에
    「-2가 x의 세제곱근」을 x = (-2)^3 으로 뒤집어 읽는 한 단계가 있다.
    통찰 0·M_total 5로 -1 후보였으나 이 역방향 읽기가 STEP 1의 함정이라 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: 'a=2, b=-4 → a+b=-2 → (-2)가 x의 세제곱근 → x=(-2)^3'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-8$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/26-27.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 밑(8, -64)을 다른 완전세제곱수(27, -125, 1000)로. 제약: 두 수 모두 세제곱수여야 a, b가 정수로 떨어지고, a+b가 다시 세제곱되므로 답이 지저분해지지 않게 |a+b| 를 작게 유지.'
    creative: '(1) 마지막을 「a+b가 x의 네제곱근」으로 바꾸면 짝수 지수·부호 판정이 붙어 ★3 (2) a, b를 각각 네제곱근·세제곱근으로 섞으면 실수 개수 판정이 추가돼 ★3 (3) x를 주고 a+b를 되묻는 정방향으로 바꾸면 ★1로 내려감.'
```

```yaml
- id: GN-ALG-26-28
  page: 26
  vendor_label: '연습문제 STEP 1'
  vendor_level: 'STEP 1'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    보기 ㄱ~ㄹ의 참거짓 판정. 16의 제곱근의 네제곱근, 세제곱근 기호값,
    음수의 네제곱근 중 실수, 음수의 세제곱근 중 실수를 묻는다.
  category: 'n제곱근의 정의 → 밑의 부호·n의 홀짝으로 실수 개수 판정 → 보기별 참거짓'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: 'n제곱근의 정의와 실수인 n제곱근의 개수 참거짓 판정'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 보기 각각이 서로 다른 함정을 겨냥한다. 근호값과 제곱근의 구분(T-표기),
    음수의 짝수 제곱근이 실수에 없다는 것(T-부호)이 핵심.
    판정 네 번의 반복이지 통찰 분기는 아니므로 절차형, STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '각 보기에서 밑의 부호와 n의 홀짝 확인 → 실수인 n제곱근의 개수·값 판정'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: 'ㄴ, ㄹ'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/26-28.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각 보기의 밑(16, -125, -49, -11)과 n(4, 3, 4, 3)을 바꿀 수 있다. 제약: 참·거짓이 골고루 섞이도록 밑의 부호와 n의 홀짝 조합을 네 가지(양·홀 / 양·짝 / 음·홀 / 음·짝)로 유지.'
    creative: '(1) 보기를 「옳은 것의 개수」로 물으면 난이도 동일 ★2 (2) 각 보기에 문자 a와 「a<0일 때」 조건을 넣으면 매개변수 부호 분기가 생겨 ★3(I-MI) (3) 보기를 복소수 n제곱근의 개수까지 확장하면 ★3.'
```

```yaml
- id: GN-ALG-26-29
  page: 26
  vendor_label: '연습문제 STEP 1'
  vendor_level: 'STEP 1'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    중첩 근호로 주어진 세 수 A, B, C의 대소 비교.
  category: '근호를 유리수 지수로 → 지수 분모의 최소공배수만큼 거듭제곱 → 정수 비교'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '거듭제곱근의 대소 비교'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 수를 2와 3의 유리수 지수 곱으로 정리하면 지수 분모가 2, 3, 6이라 6제곱하면
    모두 정수가 된다. 양수라 6제곱이 대소를 보존한다는 점만 쓰면 끝.
    이 단원에서 반복 학습되는 표준 절차라 통찰로 세지 않고 STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: '세 수를 2^p·3^q 꼴로 → 지수 분모의 최소공배수 6만큼 거듭제곱 → 정수끼리 비교'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$C<B<A$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/26-29.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑 2, 3을 다른 두 소수(2와 5, 3과 5)로, 근호 차수를 2·3에서 2·4나 3·4로 바꿀 수 있다. 제약: 거듭제곱 후 값이 충분히 벌어져 대소가 확실해야 하고, 지수 분모의 최소공배수가 12를 넘지 않게 유지.'
    creative: '(1) 네 수로 늘리면 계산량만 늘고 ★ 변화 없음 (2) 「A, B, C 중 가장 큰 것」만 묻게 바꾸면 ★1~2 (3) 밑에 문자 a와 「0<a<1」 조건을 넣으면 대소가 뒤집히는 판정이 붙어 ★3(I-MI).'
```

```yaml
- id: GN-ALG-26-30
  page: 26
  vendor_label: '연습문제 STEP 1'
  vendor_level: 'STEP 1'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    a>0일 때 중첩 근호식을 여덟제곱근으로 나눈 값을 간단히 하기.
  category: '근호 → 유리수 지수 → 지수 뺄셈으로 약분'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '거듭제곱근의 계산(유리수 지수 변환)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    근호 안의 상수 81을 3^4로 보고 네제곱근을 씌우면 3이 그대로 빠진다.
    문자 부분은 지수를 계산하면 나누는 쪽과 같아 약분되어 사라진다.
    a>0 조건이 주어져 부호 분기도 없다. 통찰 없음·STEP 1 ★2.
  mechanism_primary: '81=3^4 분리 → 문자 부분을 유리수 지수로 정리 → 지수 뺄셈으로 소거'
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/26-30.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상수 81을 다른 완전 n제곱수(16, 64, 625)로, 바깥 근호 차수 4와 나누는 쪽 차수 8을 바꿀 수 있다. 제약: 상수의 지수가 바깥 근호 차수로 나누어떨어져야 정수 상수가 남고, 문자 지수가 정확히 약분되도록 안쪽·바깥 차수를 맞출 것.'
    creative: '(1) 나누기를 곱하기로 바꾸면 문자가 남아 답이 3a^k 꼴이 되고 ★ 유지 (2) a>0 조건을 빼고 절댓값 처리를 요구하면 ★3(T-부호) (3) 상수와 문자를 모두 문자로 바꾸면 Mₐ가 올라 ★3.'
```

```yaml
- id: GN-ALG-26-31
  page: 26
  vendor_label: '연습문제 STEP 1'
  vendor_level: 'STEP 1'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    네 거듭제곱근의 곱을 2의 거듭제곱과 3의 거듭제곱의 곱으로 나타낼 때
    두 유리수 지수의 합.
  category: '밑을 소인수분해해 2와 3으로 통일 → 유리수 지수 합산'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '거듭제곱근의 계산(밑 통일 후 지수 합)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    4=2^2, 6=2·3 으로 쪼개야 밑이 2와 3으로 통일된다. 그 뒤는 분수 지수를 항별로
    모아 더하는 계산뿐이고 분모가 2·3·6 이라 통분도 가볍다.
    소인수분해 착안은 이 단원의 표준 절차라 통찰로 세지 않음. STEP 1 ★2.
  tier: star_2
  mechanism_primary: '4와 6을 소인수분해 → 2의 지수끼리, 3의 지수끼리 합산 → a+b'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{5}{3}$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/26-31.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '네 인수의 밑(2, 3, 4, 6)과 근호 차수(2, 3, 4, 6)를 바꿀 수 있다. 제약: 모든 밑이 같은 두 소수의 곱으로 분해돼야 하고(2·3 계열 또는 2·5 계열), 지수 분모의 최소공배수가 12 이내여야 a+b가 간단한 분수로 떨어진다.'
    creative: '(1) 답을 a-b나 ab로 물으면 ★ 유지 (2) 인수에 12나 18처럼 소인수 지수가 2 이상인 수를 넣으면 Mₖ만 올라감(질 저하 · ★ 유지 권장) (3) 「2^a·3^b 이 자연수가 되는 최소 곱셈 인수」를 되묻는 역방향으로 바꾸면 ★3(I-BW).'
```

```yaml
- id: GN-ALG-26-32
  page: 26
  vendor_label: '연습문제 STEP 1'
  vendor_level: 'STEP 1'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    a>0, a≠1일 때 네 겹으로 중첩된 거듭제곱근 식이 a의 k제곱과 같을 때
    유리수 k의 값.
  category: '가장 안쪽 근호부터 유리수 지수로 바꿔 바깥으로 차례로 정리'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '중첩 거듭제곱근의 간단히 하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    안쪽부터 「a를 곱하고 근호를 씌운다」를 네 번 반복하는 단일 절차로,
    분기도 착안도 없고 중간에 지수가 4/3 → 1/3 → 4/3 → 2/3 → 5/3 로 이어진다.
    [분류 이슈] 중첩 4겹으로 M_total 8이지만 v3.8에서 계산 마찰은 ★ 상승 신호가 아니므로 STEP 1 출발점 ★2 유지(후보 ★3).
  tier: star_2
  mechanism_primary: '안쪽 근호부터 a^p 꼴로 정리 → 바깥 근호마다 지수를 차수로 나눔 → k'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{5}{9}$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/26-32.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '네 근호의 차수(3, 2, 4, 3)를 바꿀 수 있다. 제약: 겹이 깊을수록 k의 분모가 차수의 곱으로 커지므로 차수를 2·3 중심으로 잡아 분모를 두 자리 이내로 유지. 겹 수를 3으로 줄이면 M_total 6~7.'
    creative: '(1) 안쪽 a 앞에 상수를 붙여 a^k 대신 c·a^k 꼴로 만들면 상수 처리 한 단계 추가(★ 유지) (2) 「k가 자연수가 되도록 하는 바깥 차수」를 묻는 역방향으로 바꾸면 ★3(I-BW) (3) a≠1 조건의 역할을 묻는 서술형으로 바꾸면 ★2 유지.'
```

```yaml
- id: GN-ALG-27-33
  page: 27
  vendor_label: '연습문제 STEP 1'
  vendor_level: 'STEP 1'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    a>0이고 a의 1/2제곱과 -1/2제곱의 차가 3일 때,
    3/2제곱의 차를 포함한 분수식의 값.
  category: '대칭식 치환 → 제곱·세제곱 전개로 분자·분모를 치환값으로 환원 → 대입'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '분자의 3/2제곱 차를 세제곱 차로 보고 (x-y)^3+3xy(x-y) 로 전개해 치환값만으로 나타냄'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: 'a^(1/2)±a^(-1/2) 꼴 식의 값(대칭식 환원)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    t로 치환하면 t의 제곱에서 분모의 a+a^(-1)이, t의 세제곱에서 분자가 바로 나온다.
    곱이 1이라는 점 덕분에 전개가 t만의 식으로 닫힌다.
    통찰 1개(RT d1)·M_total 7이며 STEP 1 출발점 ★2 유지(+1 조건인 통찰 2개·depth 3 미달).
  tier: star_2
  mechanism_primary: 't=a^(1/2)-a^(-1/2)=3 → t^2로 분모, t^3+3t로 분자 → 대입'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/27-33.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '조건값 3을 다른 자연수(2, 4, 5)로, 분자·분모의 상수항(9, 4)을 바꿀 수 있다. 제약: 분모가 0이 되지 않아야 하고, 상수항을 조건값과 연동해 두면(분자 상수=조건값의 세제곱-조건값 꼴) 답이 정수로 떨어진다.'
    creative: '(1) 차 대신 합을 조건으로 주면 부호만 바뀌고 ★ 유지 (2) 조건을 a+a^(-1)=k 로 주고 a^(1/2)-a^(-1/2)를 되묻게 하면 부호 기각이 생겨 ★3(I-VF) (3) 분자를 5/2제곱 차로 올리면 전개 단계가 늘어 ★3.'
```

```yaml
- id: GN-ALG-27-34
  page: 27
  vendor_label: '연습문제 STEP 1'
  vendor_level: 'STEP 1'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    x가 두 세제곱근의 차로 주어질 때 x에 대한 삼차식의 값.
  category: 'x를 직접 대입하지 않고 세제곱해 x가 만족하는 삼차 관계식을 얻은 뒤 치환'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '무리수 값 x를 그대로 대입하지 않고 양변을 세제곱해 x가 만족하는 삼차 관계식으로 조건을 동치 변환'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '무리수 값을 만족하는 다항식 관계로 바꾸어 식의 값 구하기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 세제곱근의 곱이 유리수라서 (u-v)^3 = u^3-v^3-3uv(u-v) 전개가 x에 대해 닫힌다.
    이 관계식을 구하는 순간 문제의 삼차식은 상수만 남는다.
    [분류 이슈] 통찰 d2 하나로 STEP 1 중 체감이 가장 무겁지만 +1 조건(통찰 2개·depth 3)에 미달해 출발점 ★2 유지(후보 ★3).
  tier: star_2
  mechanism_primary: 'x를 세제곱해 x^3 = 6-9x 관계식 확보 → 문제 식에 대입하면 x항 소거 → 상수'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$7$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/27-34.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 세제곱근의 밑(9와 3)을 곱이 완전세제곱수가 되는 다른 쌍(4와 2, 25와 5)으로, 문제 식의 계수(2, 18, -5)를 바꿀 수 있다. 제약: 두 밑의 곱이 완전세제곱이어야 uv가 유리수가 되고, 문제 식의 x 계수가 관계식의 x 계수와 상쇄되도록 비례해야 x가 사라진다.'
    creative: '(1) 두 세제곱근의 합으로 바꾸면 부호만 달라지고 ★ 유지 (2) x 계수를 상쇄되지 않게 두면 무리수 값을 다시 대입해야 해 계산만 늘어남(질 저하 · 권장 안 함) (3) x를 네제곱근의 차로 주면 전개가 사차로 늘어 ★3~4.'
```

```yaml
- id: GN-ALG-27-35
  page: 27
  vendor_label: '연습문제 STEP 1'
  vendor_level: 'STEP 1'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    a≠0일 때 짝수 지수 다섯 항의 합을 홀수 음의 지수 다섯 항의 합으로 나눈 식을
    간단히 하기.
  category: '분모를 공통 거듭제곱으로 묶어 분자와 같은 꼴로 만든 뒤 약분'
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '분모의 다섯 항을 a^(-11) 로 묶으면 남는 괄호가 분자와 똑같아진다는 동치 변환'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '지수식 분수의 약분(공통 거듭제곱으로 묶기)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    항을 하나씩 계산하면 길지만, 분모 각 항에 a^11 을 곱하면 분자의 항이 된다는
    대응을 보는 순간 한 줄로 끝난다. 등비수열 합으로 가도 같은 답이지만 느리다.
    통찰 1개(EQV d1)·M_total 5이며 통찰이 있어 -1 하지 않고 STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: '분모를 a^(-11)(분자) 꼴로 묶기 → 약분 → a^11'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a^{11}$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/27-35.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '항의 개수(5)와 지수의 간격(2), 시작 지수(2와 -1)를 바꿀 수 있다. 제약: 분자의 최소 지수와 분모의 최대 지수의 차가 일정해야 공통 인수로 묶이고, 그 차가 곧 답의 지수가 된다.'
    creative: '(1) 분모를 양의 지수로 두고 분자를 음의 지수로 뒤집으면 답이 a^(-11)로 ★ 유지 (2) 항의 간격을 불규칙하게 하면 묶기가 깨져 문제가 성립하지 않음 (3) 「값이 a^11 이 되도록 하는 항의 개수」를 되묻는 역방향으로 바꾸면 ★3(I-BW).'
```

### 연습문제 STEP 2

```yaml
- id: GN-ALG-27-36
  page: 27
  vendor_label: '연습문제 STEP 2'
  vendor_level: 'STEP 2'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    실수 a의 n제곱근 중 실수의 개수를 f_n(a)로 정의할 때
    f_3(-2)-f_4(8)+f_5(4) 의 값.
  category: 'n의 홀짝과 밑의 부호로 실수인 n제곱근의 개수 판정 → 세 값 계산'
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '실수인 n제곱근의 개수 f_n(a)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    함수 표기를 썼을 뿐 각 값은 정의를 한 번씩 확인하면 끝이다(홀수 → 1개,
    양수의 짝수 → 2개). 분기가 독립 시나리오를 만들지 않아 통찰로 세지 않았다.
    [분류 이슈] 벤더 STEP 2(★3 출발)이지만 통찰 0·M_total 5로 -1 하여 ★2(후보 ★3).
  tier: star_2
  mechanism_primary: 'n 홀짝·밑의 부호로 f 값 판정(1, 2, 1) → 1-2+1'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/27-36.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 항의 (n, a) 쌍과 부호를 바꿀 수 있다. 제약: 음수·짝수 조합(f=0)을 한 번은 넣어야 개수 0의 경우가 검사되고, 밑이 0인 경우를 넣으면 f=1의 경계 판정이 추가된다.'
    creative: '(1) 항 수를 늘리고 밑 0을 섞으면 ★3(T-경계) (2) 「f_n(a)=2 가 되도록 하는 (n, a)」 역방향이면 ★3(I-BW) (3) n에 범위를 주고 f의 합을 묻게 하면 전수 점검이 생겨 ★4(27-37과 같은 골조).'
```

```yaml
- id: GN-ALG-27-37
  page: 27
  vendor_label: '연습문제 STEP 2'
  vendor_level: 'STEP 2'
  vendor_tags: ['평가원 기출']
  category_type: '연습문제'
  summary: |
    2 이상 11 이하의 자연수 n에 대하여 이차식 -n^2+9n-18 의 n제곱근 중에
    음의 실수가 존재하도록 하는 모든 n의 값의 합. 5지선다.
  category: '음의 실수 n제곱근 존재 조건을 n의 홀짝·밑의 부호로 동치 변환 → n=2~11 전수 점검 → 합'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「음의 실수 n제곱근이 존재한다」를 (n 홀수이면 밑이 음수) 또는 (n 짝수이면 밑이 양수)라는 판정 가능한 조건으로 동치 변환'
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '후보 n=2~11 을 전수 점검하면서 밑이 0이 되는 n과 부호가 어긋나는 n을 조건 위배로 기각'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: '음의 실수 n제곱근이 존재할 조건(n의 홀짝과 밑의 부호)'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    밑을 인수분해하면 부호가 n의 구간에 따라 바뀌고, 존재 조건은 n의 홀짝과 맞물린다.
    두 조건이 같은 방향일 때만 살아남으므로 열 개 후보를 하나씩 검증해야 하고
    밑이 0인 n은 0만 나와 기각된다는 경계 함정이 있다.
    통찰 2개(EQV d2 + VF d2)·M_total 9·평가원 기출 → STEP 2 출발점 ★3에서 +1 하여 ★4.
  tier: star_4
  mechanism_primary: '밑을 -(n-3)(n-6) 으로 인수분해해 부호 구간 확정 → n 홀짝별 존재 조건과 대조 → 살아남은 n의 합'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '①'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/27-37.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이차식의 두 근(3, 6)과 n의 범위(2~11)를 바꿀 수 있다. 제약: 두 근이 범위 안의 자연수라야 밑이 0인 경계 케이스가 생기고, 양수 구간에 짝수 n과 홀수 n이 모두 들어가야 두 조건이 갈라진다. 선택지는 후보 합 근처로 촘촘히 둘 것.'
    creative: '(1) 「양의 실수 n제곱근이 존재」로 바꾸면 조건이 뒤집히며 ★ 유지 (2) 「실수인 n제곱근이 2개」로 바꾸면 짝수·양수만 남아 ★3으로 내려감 (3) 이차식을 삼차식으로 바꾸면 부호 구간이 셋이 되어 ★5 후보(단 계산 마찰만 늘면 질 저하) (4) n의 개수가 아니라 최댓값을 묻게 하면 ★3.'
```

```yaml
- id: GN-ALG-27-38
  page: 27
  vendor_label: '연습문제 STEP 2'
  vendor_level: 'STEP 2'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    3의 거듭제곱에 세제곱근을 두 번 씌운 수가 어떤 자연수의 n제곱근이 되도록 하는
    두 자리 자연수 n의 개수.
  category: '주어진 수를 3의 유리수 지수로 정리 → n제곱이 자연수가 될 조건을 지수의 정수 조건으로 변환 → 두 자리 배수 세기'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「어떤 자연수의 n제곱근이다」를 「그 수를 n제곱한 값이 자연수다」로 뒤집어, 3의 지수가 정수가 될 조건으로 동치 변환'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '거듭제곱근이 자연수의 n제곱근이 될 조건'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    주어진 수는 3의 4/9제곱으로 정리된다. n제곱근이라는 조건을 n제곱해 자연수라는
    조건으로 뒤집는 것이 전부이고, 그 뒤 4n/9 가 정수가 되려면 n이 9의 배수여야 한다.
    통찰 1개(EQV d2)·M_total 6 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: '3^(4/9) 로 정리 → n제곱이 자연수 ⟺ 4n/9 가 정수 ⟺ n이 9의 배수 → 두 자리 배수 개수'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/27-38.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑 3과 지수 4, 두 겹의 근호 차수(3, 3), n의 자릿수 범위를 바꿀 수 있다. 제약: 최종 지수의 분자와 분모가 서로소라야 「n이 분모의 배수」라는 깔끔한 조건이 나오고, 서로소가 아니면 조건이 약해져 개수가 달라진다.'
    creative: '(1) 「세 자리 n의 개수」로 바꾸면 ★ 유지 (2) 밑을 12처럼 두 소인수를 가진 수로 바꾸면 두 지수가 동시에 정수여야 해 최소공배수 조건이 붙고 ★4(28-44 골조) (3) n의 최솟값만 묻게 하면 ★2~3.'
```

```yaml
- id: GN-ALG-27-39
  page: 27
  vendor_label: '연습문제 STEP 2'
  vendor_level: 'STEP 2'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    이차방정식의 두 근이 2의 a제곱과 2의 b제곱일 때 8의 a제곱과 8의 b제곱의 합.
  category: '근과 계수의 관계로 두 근의 합·곱 확보 → 세제곱 합 공식으로 환원 → 대입'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '이차방정식 단원의 근과 계수의 관계를 끌어와 2^a+2^b 와 2^a·2^b 를 계수에서 바로 읽음'
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '8^a+8^b 를 2^a, 2^b 의 세제곱 합으로 다시 보고 합·곱만으로 표현'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: '근과 계수의 관계와 지수식(두 근이 2의 거듭제곱)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 근을 실제로 구하면 무리수라 쓸 수 없고, 합과 곱만으로 처리해야 한다는 것이
    출발점이다. 8을 2의 세제곱으로 보는 순간 세제곱 합 공식이 그대로 들어맞는다.
    통찰 2개로 +1 후보였으나 근과 계수·세제곱 합 모두 완전한 학습 자산이라
    STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: '근과 계수로 2^a+2^b=6, 2^a·2^b=2 → 8^a+8^b=(2^a+2^b)^3-3·2^a·2^b·(2^a+2^b)'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$180$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/27-39.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이차방정식의 계수(-6, 2)와 묻는 거듭제곱의 밑(8=2^3)을 바꿀 수 있다. 제약: 두 근이 모두 양수여야 2^a 꼴로 둘 수 있으므로 합과 곱이 모두 양수·판별식 양수여야 하고, 묻는 밑은 2의 거듭제곱으로 유지해야 합·곱만으로 닫힌다.'
    creative: '(1) 4^a+4^b 로 낮추면 제곱 합이라 ★2~3 (2) a+b나 2^(a+b) 를 묻게 하면 ★2 (3) 두 근을 2^a, 3^b 처럼 서로 다른 밑으로 주면 합·곱만으로 닫히지 않아 ★4 (4) 16^a+16^b 로 올리면 네제곱 합 전개가 필요해 ★4.'
```

```yaml
- id: GN-ALG-28-40
  page: 28
  vendor_label: '연습문제 STEP 2'
  vendor_level: 'STEP 2'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    이차방정식의 한 근 α가 2보다 클 때 α의 제곱과 α의 -2제곱의 차.
  category: '근을 구하지 않고 방정식에서 α+α^(-1) 확보 → 제곱 관계로 α-α^(-1) → 조건으로 부호 확정 → 곱'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '근의 공식으로 α를 구하는 대신 방정식을 α로 나누어 α+α^(-1)=4 라는 대칭식 조건으로 변환'
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: 'α-α^(-1) 이 제곱에서 두 부호로 나오는데 α>2 조건으로 음의 값을 기각'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: '이차방정식의 근에 대한 α±α^(-1) 꼴 대칭식의 값'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    α가 0이 아니므로 방정식을 α로 나누면 대칭식이 바로 나온다. 구하는 값은
    합과 차의 곱으로 분해되고, 차는 제곱에서만 나오므로 부호를 조건으로 확정해야 한다.
    검증을 빠뜨리면 부호가 반대인 답에 도달한다.
    통찰 2개지만 둘 다 이 단원의 표준 절차라 +1 하지 않고 STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: '방정식을 α로 나눠 α+α^(-1)=4 → (α-α^(-1))^2=12, α>2로 양의 값 채택 → 두 값의 곱'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$8\sqrt{3}$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/28-40.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이차방정식의 계수(-4, 1)를 바꿀 수 있다. 제약: 상수항이 1이라야 두 근의 곱이 1이 되어 α^(-1) 이 다른 근과 같아지고 대칭식이 닫힌다. 일차항 계수는 판별식이 양수가 되도록 절댓값 2 초과로 두고, 조건(α>2)은 두 근의 경계인 합의 절반과 맞출 것.'
    creative: '(1) 조건을 0<α<2 로 바꾸면 부호가 뒤집혀 기각 방향이 반대(★ 유지) (2) 묻는 값을 α^3-α^(-3) 으로 올리면 세제곱 전개가 추가돼 ★4 (3) 조건 α>2 를 빼고 「모든 값」을 묻게 하면 두 답을 모두 써야 해 ★3 유지(I-MI로 성격 변화) (4) 상수항을 1이 아닌 값으로 두면 대칭식이 닫히지 않아 골조가 깨짐.'
```

```yaml
- id: GN-ALG-28-41
  page: 28
  vendor_label: '연습문제 STEP 2'
  vendor_level: 'STEP 2'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    2의 x제곱, 5의 y제곱, 10의 z제곱이 모두 같고 xyz가 0이 아닐 때
    xy-yz-zx 의 값.
  category: '공통값 k로 놓고 밑을 k의 유리수 지수로 뒤집기 → 10=2·5 관계로 세 식 결합 → 분모 정리'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '세 식을 공통값 k로 놓고 각 밑을 k^(1/x) 꼴로 뒤집어 지수를 밑 쪽으로 옮김'
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '10=2·5 라는 밑 사이의 관계로 세 개의 독립 식을 1/z=1/x+1/y 라는 하나의 식으로 결합'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: 'a^x=b^y=c^z 꼴 조건식(밑을 공통값의 유리수 지수로)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    지수에 미지수가 있어 그대로는 손댈 수 없고, 공통값을 도입해 밑을 지수의 역수
    거듭제곱으로 뒤집는 것이 열쇠다. 세 밑이 곱셈으로 묶이므로 지수 역수의
    덧셈 관계가 나오고, 양변에 xyz를 곱하면 구하는 식이 그대로 나온다.
    xyz≠0 은 역수를 쓰기 위한 조건. 통찰 2개지만 이 단원 대표 유형이라 ★3 유지.
  tier: star_3
  mechanism_primary: '공통값 k 도입 → 2=k^(1/x), 5=k^(1/y), 10=k^(1/z) → 10=2·5 로 1/z=1/x+1/y → xyz 곱해 정리'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$0$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/28-41.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 밑(2, 5, 10)을 곱셈 관계가 성립하는 다른 조합(3, 4, 12 / 2, 3, 6)으로 바꿀 수 있다. 제약: 세 번째 밑이 앞 두 밑의 곱이어야 지수 역수의 덧셈 관계가 나온다. 나눗셈 관계(10/2=5)로 두면 뺄셈 관계가 된다.'
    creative: '(1) 묻는 식을 1/x+1/y-1/z 로 바꾸면 ★2~3으로 내려감 (2) 밑을 네 개로 늘려 두 관계식을 결합하게 하면 ★4 (3) 공통값을 구체적인 수로 지정하면 로그 없이도 각 미지수가 결정되지 않아 골조가 유지됨(★ 유지) (4) 밑의 곱 관계를 숨기고 학생이 찾게 하면 ★4.'
```

```yaml
- id: GN-ALG-28-42
  page: 28
  vendor_label: '연습문제 STEP 2'
  vendor_level: 'STEP 2'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    5의 x제곱, 80의 y제곱, a의 z제곱이 모두 10이고 1/x+1/y-1/z=2 일 때 양수 a의 값.
  category: '각 밑을 10의 유리수 지수로 뒤집기 → 지수 조건을 밑의 곱셈·나눗셈으로 옮김 → a 결정'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '세 식을 뒤집어 밑을 각각 10^(1/x), 10^(1/y), 10^(1/z) 로 표현'
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '지수 역수의 합·차 조건을 10의 거듭제곱 한 개의 등식으로 결합해 세 조건을 통합'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: 'a^x=b^y=c^z=k 와 지수 역수의 합·차 조건'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    28-41과 같은 뒤집기지만 공통값이 10으로 지정돼 있어 지수 역수의 덧셈·뺄셈이
    곧 밑의 곱셈·나눗셈이 된다. 조건식을 10의 거듭제곱으로 올리면
    좌변은 세 밑의 곱·몫, 우변은 100이 되어 a가 한 번에 나온다.
    통찰 2개지만 앞 문항과 같은 골조라 STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: '5=10^(1/x), 80=10^(1/y), a=10^(1/z) → 조건을 10의 지수로 올려 5·80/a=100 → a'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/28-42.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 밑(5, 80)과 조건식의 우변(2), 부호 조합을 바꿀 수 있다. 제약: 두 밑의 곱(또는 몫)을 10의 우변 거듭제곱으로 나눈 값이 양수로 깔끔히 떨어져야 하고, 공통값 10은 유지해야 지수 역수 계산이 단순하다.'
    creative: '(1) 조건식을 1/x-1/y+1/z 처럼 부호를 섞으면 곱·몫 위치만 바뀌고 ★ 유지 (2) 구하는 대상을 a가 아니라 z로 바꾸면 로그가 필요해져 다음 단원용 (3) 밑을 네 개로 늘리면 ★4 (4) 공통값을 10이 아닌 문자로 두면 Mₐ가 올라 ★4.'
```

### 연습문제 실력 UP

```yaml
- id: GN-ALG-28-43
  page: 28
  vendor_label: '연습문제 실력 UP'
  vendor_level: '실력 UP'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    분모가 a-b, b-c, c-a 인 분수 지수가 순환하며 맞물린 세 거듭제곱의 곱을 간단히 하기.
  category: '지수법칙으로 세 지수를 더하기 → 순환 대칭 구조로 통분 분자가 0 → x^0'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '세 지수를 통분하면 분자가 (c-a)+(a-b)+(b-c) 라는 순환합이 되어 0임을 활용해 계산 없이 끝냄'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '순환 구조 분수 지수의 곱(지수의 합이 0)'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    세 인수의 지수는 각각 두 차의 곱의 역수이고, 세 분모의 곱을 공통분모로 잡으면
    분자가 세 차의 합이 되어 0이 된다. 문자를 실제로 대입해 전개하려 들면
    끝나지 않고, 순환 대칭을 보아야 세 줄에 끝난다.
    [분류 이슈] 통찰 1개·핵심 아이디어 하나로 분량이 짧아 후보 ★3이지만, 실력 UP 출발점과 저노출 유형(SYM) 보유로 ★4 유지.
  tier: star_4
  mechanism_primary: '지수 세 개를 더하기 → 공통분모 (a-b)(b-c)(c-a) 위에서 분자 순환합 0 → x^0=1'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$1$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/28-43.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '문자 수를 셋으로 유지한 채 분모의 조합만 바꿀 수 있다. 제약: 세 인수의 지수가 순환하도록 (a-b, b-c), (b-c, c-a), (c-a, a-b) 짝을 유지해야 분자가 0이 된다. 짝을 하나라도 깨면 답이 1이 아니게 되고 문제가 지저분해진다.'
    creative: '(1) 곱이 아니라 지수의 합만 묻게 하면 같은 골조로 ★3 (2) 세 지수 중 하나의 부호를 바꾸면 분자가 0이 아니게 되어 일반식 정리가 필요해 ★4~5 (3) 문자를 넷으로 늘려 네 항 순환합으로 확장하면 ★5 후보(SYM 유지) (4) x>0 조건을 빼면 x=1 등 예외 처리로 ★4 유지.'
```

```yaml
- id: GN-ALG-28-44
  page: 28
  vendor_label: '연습문제 실력 UP'
  vendor_level: '실력 UP'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    세 양수 a, b, c가 각각 6제곱은 5, 5제곱은 7, 제곱은 11일 때
    세 수의 곱의 n제곱이 자연수가 되는 자연수 n의 최솟값.
  category: '세 수를 소수의 유리수 지수로 → 곱의 n제곱을 소인수 거듭제곱으로 → 각 지수의 정수 조건 → 최소공배수'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '조건을 뒤집어 a, b, c 를 각각 5, 7, 11 의 유리수 지수로 쓰고 곱의 n제곱을 세 소수의 거듭제곱 곱으로 정리'
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '소인수분해의 유일성을 끌어와 서로 다른 세 소수의 지수가 각각 정수여야 한다는 조건으로 분리'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: '세 수의 곱의 n제곱이 자연수가 되는 최소 n'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    밑이 5, 7, 11로 서로 다른 소수라 지수끼리 상쇄될 수 없고, 따라서 각 지수가
    따로따로 정수여야 한다는 분리가 핵심이다. 이 분리를 못 보면 세 조건을
    한꺼번에 다룰 방법이 없다. 그 뒤는 6, 5, 2의 최소공배수.
    통찰 2개(EQV d2 + XU d2)·실력 UP 출발점 → ★4.
  tier: star_4
  mechanism_primary: 'a=5^(1/6), b=7^(1/5), c=11^(1/2) → (abc)^n 의 세 지수 n/6, n/5, n/2 가 모두 정수 → n=lcm(6,5,2)'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$30$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/28-44.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 지수(6, 5, 2)와 세 값(5, 7, 11)을 바꿀 수 있다. 제약: 세 값이 서로 다른 소수라야 지수 분리가 성립하고, 세 지수의 최소공배수가 너무 크지 않도록 두 자리 이내로 잡을 것. 값 중 하나라도 합성수이면 소인수별로 조건이 갈라져 난이도가 달라진다.'
    creative: '(1) 값 하나를 합성수(예: 12)로 바꾸면 소인수 두 개의 조건이 동시에 걸려 ★5 후보 (2) 「자연수」 대신 「유리수」로 바꾸면 조건이 약해져 ★3 (3) n의 최솟값이 아니라 두 자리 n의 개수를 묻게 하면 27-38 골조와 합류(★3~4) (4) 세 수 중 하나만 미지로 두고 n을 주면 역방향 ★4(I-BW).'
```

```yaml
- id: GN-ALG-28-45
  page: 28
  vendor_label: '연습문제 실력 UP'
  vendor_level: '실력 UP'
  vendor_tags: []
  category_type: '연습문제'
  summary: |
    양수 a에 대해 f(x)가 a의 x제곱과 -x제곱의 차를 합으로 나눈 함수일 때,
    f(p)=1/2, f(q)=1/3 이면 f(p+q) 의 값.
  category: 'f(x)를 a^(2x) 한 문자의 분수식으로 환원 → 함숫값에서 a^(2p), a^(2q) 역산 → 곱해서 a^(2(p+q)) → 다시 f에 대입'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '분자·분모에 a^x 를 곱해 f(x) 를 t=a^(2x) 에 대한 (t-1)/(t+1) 로 동치 변환'
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '함숫값 1/2, 1/3 에서 거꾸로 a^(2p)=3, a^(2q)=2 를 역산해 지수부만 남김'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: '지수로 정의된 함수 f(x)=(a^x-a^(-x))/(a^x+a^(-x)) 의 값'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    a와 p, q를 각각 구하려 들면 로그 없이는 막히고, a^(2x) 를 하나의 덩어리로
    보는 순간 세 단계가 모두 유리식 계산으로 바뀐다. 두 함숫값에서 덩어리를
    역산해 곱하면 a^(2(p+q)) 가 바로 나오고, 같은 분수식에 다시 넣으면 끝.
    통찰 2개(EQV d2 + BW d2)·M_total 8·실력 UP 출발점 → ★4.
  tier: star_4
  mechanism_primary: 'f(x)=(t-1)/(t+1), t=a^(2x) → f(p)=1/2에서 t_p=3, f(q)=1/3에서 t_q=2 → t_(p+q)=6 → (6-1)/(6+1)'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{5}{7}$'
  answer_source: '답지'
  figure: none
  latex: latex-bank/gn-alg/items/28-45.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 함숫값(1/2, 1/3)을 -1과 1 사이의 다른 유리수로 바꿀 수 있다. 제약: 역산한 t 값이 양수라야 하므로 함숫값의 절댓값이 1보다 작아야 하고, t_p·t_q 가 간단한 수가 되도록 두 값을 고르면 답이 깔끔해진다.'
    creative: '(1) f(p-q) 를 묻게 하면 t를 나누게 되어 같은 골조 ★4 (2) f(p)와 f(p+q) 를 주고 f(q) 를 되묻게 하면 역방향이 한 겹 더 붙어 ★4~5 (3) 분자·분모를 바꿔 (a^x+a^(-x))/(a^x-a^(-x)) 로 두면 역수 관계라 ★3~4 (4) f(2p) 를 묻게 하면 t의 제곱만 쓰므로 ★3.'
```

## 표본 판정 요약 (19문)

- ★ 분포: ★1 0 · ★2 10 · ★3 5 · ★4 4 · ★5 0
- 통찰형 12 · 절차형 7 · premium 0
- 통찰 유형 빈도: I-EQV 9 · I-CON 2 · I-VF 2 · I-RT 2 · I-XU 2 · I-SYM 1 · I-BW 1 (합 19 · 통찰 보유 문항 12)
- 구역별: 연습문제 STEP 1 9문(전부 ★2) · STEP 2 7문(★2 1 · ★3 5 · ★4 1) · 실력 UP 3문(전부 ★4)
- type_hint 상위 5: 「거듭제곱근의 계산(유리수 지수 변환·밑 통일·중첩)」 3 · 「실수인 n제곱근의 정의·개수」 3 · 「a^x=b^y=c^z 꼴 조건식」 2 · 「a^x±a^(-x) 꼴 대칭식의 값」 2 · 「n제곱근·자연수 조건의 역방향 판정」 2
- 그림: 0문(이 범위에는 그림 문항이 없음)
- 벤더 태그: 평가원 기출 1문(27-37)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-ALG-26-32 | STEP 1인데 중첩 4겹으로 M_total 8. v3.8에서 계산 마찰은 ★ 상승 신호가 아니라 YELLOW 신호이므로 ★2 유지 | ★2 / ★3 |
| GN-ALG-27-34 | 통찰 d2 하나로 STEP 1 중 체감이 가장 무겁지만 +1 조건(통찰 2개·depth 3) 미달로 ★2 유지 | ★2 / ★3 |
| GN-ALG-27-36 | 벤더 STEP 2(★3 출발)이나 정의 확인 수준(통찰 0·M_total 5)이라 -1 하여 ★2 | ★2 / ★3 |
| GN-ALG-28-43 | 실력 UP(★4 출발)이나 핵심 아이디어 하나로 세 줄에 끝남. 저노출 유형(SYM) 보유로 ★4 유지 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고)

- **따로 세워야 할 유형**: (가) 「실수인 n제곱근의 개수」와 (나) 「음의 실수 n제곱근이 존재할 조건」은 겉보기에 같은 정의를 쓰지만 전자는 정의 확인(★2), 후자는 매개변수 전수 점검(★4)이라 base ★ 가 두 단 차이다. 반드시 분리할 것.
- **따로 세워야 할 유형**: 「a^x=b^y=c^z 꼴 조건식」(28-41·28-42)은 공통값을 도입해 밑을 뒤집는 고정 골조라 독립 유형 자격이 충분하다. 03단원 로그와 이어지므로 로그 버전과 짝을 이루게 설계할 것.
- **통합해도 될 유형**: 26-29·26-30·26-31·26-32 는 모두 「근호를 유리수 지수로 옮겨 정리」 한 골조이며 대소 비교·약분·밑 통일·중첩이 표면만 다르다. 하나의 base ★2 유형 아래 변형 파라미터(비교/간단히/지수 합/중첩 겹 수)로 묶는 편이 낫다.
- **통합해도 될 유형**: 27-33(a^(1/2)±a^(-1/2))과 28-40(α±α^(-1))은 「곱이 1인 두 수의 대칭식」이라는 같은 골조다. 진입 경로(지수 조건 / 이차방정식의 근)만 다르므로 하나의 유형에 진입 변형 두 개로 두면 된다.
- **base ★ 배치 제안**: 이 범위 기준으로 「거듭제곱근 정의·계산」 계열 ★2, 「대칭식 환원」·「근과 계수 결합」·「조건식 뒤집기」 계열 ★3, 「매개변수 전수 점검」·「소인수 지수 분리」·「지수 정의 함수」 계열 ★4. ★5 자격 문항은 이 범위에 없다(통찰 3개 이상 조건 미충족).
- 27-38과 28-44는 「지수가 정수가 될 조건」이라는 같은 뿌리에서 갈라진다(단일 소수 vs 서로 다른 세 소수). 카탈로그에서는 한 유형의 난이도 두 단계로 두는 것이 자연스럽다.
