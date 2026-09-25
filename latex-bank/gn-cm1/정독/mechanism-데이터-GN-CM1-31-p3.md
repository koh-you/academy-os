---
name: mechanism-데이터-GN-CM1-31-p3
description: 개념원리 공통수학1 31 조합(3/3 · 268~271쪽 19문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1(22개정) · 전사본 latex-bank/gn-cm1
  section: 31 조합
  unit_code: "31"
  part: "3/3"
  extract_range: "268~271쪽 · 268-e1~271-608"
  total_problems: 19
  unit_total: 45
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (crops.json)
---

# 개념원리 공통수학1 · 31 조합 (3/3) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학1 268~271쪽에 걸친 31단원 조합의 마지막 조각 19문항을 다룬다. 구역은 네 개다 — 「특강」(분할과 분배 예제 1 · 확인체크 3) · 「연습문제 STEP 1」 5 · 「연습문제 STEP 2」 7 · 「연습문제 실력 UP」 3. 개념원리 고등의 난이도 신호는 구역과 태그다. 「특강」은 교육과정 심화 코너라 ★2~3 출발, STEP 1 은 ★2, STEP 2 는 ★3, 실력 UP 은 ★4 출발이고, 여기서 M_total 과 통찰로 ±1 조정했다. 이 조각에서 반복되는 골조는 네 갈래다 — ① 같은 크기 묶음으로 나누기(분할)와 사람·장소에 주기(분배)의 구분 ② 「적어도」 조건의 여사건 ③ 도형 위 점·직선에서 직선·삼각형 개수 세기(공선 묶음 중복 제거) ④ 조합 기호를 포함한 방정식 풀이. 함정은 T-표기(묶음이 구별되는가)와 T-범위(공선 점·정의역 조건 누락)에 몰려 있다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다. 그림 문항은 7문이며, 도형 문항은 그림의 배치(공선 점 묶음·평행선 개수)가 곧 골조라 변형 시 라벨·배치를 고정해야 한다.

## 문항 데이터

### 특강

```yaml
- id: GN-CM1-268-e1
  page: 268
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["특강"]
  category_type: "특강 예제"
  summary: |
    ⑴~⑵ 서로 다른 꽃 9송이에 대해 — ⑴ 2송이·2송이·5송이 세 묶음으로 나누는 방법의 수, ⑵ 3송이씩 세 묶음으로 나누어 3명에게 나누어 주는 방법의 수.
  category: "분할과 분배 → 같은 개수 묶음은 묶음 수의 계승으로 나누고, 사람에게 줄 때는 다시 계승을 곱하기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "서로 다른 n개를 몇 묶음으로 분할하기·분할 후 분배하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴은 9C2·7C2·5C5 를 구한 뒤 개수가 같은 두 묶음이 있으므로 2! 로 나눈다. ⑵는 9C3·6C3·3C3 을 3! 로 나눠 분할한 뒤 사람이 구별되므로 다시 3! 을 곱해 결국 나눗셈이 상쇄된다. 공식 두 개를 그대로 쓰는 절차형이지만 「나누고 다시 곱한다」는 두 단계라 M_total 6. 특강 예제 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "조합의 곱으로 묶음 만들기 → 같은 개수 묶음 수의 계승으로 나누기 → (분배면) 받는 사람 수의 계승 곱하기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $378$ ⑵ $1680$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/268-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 개수와 묶음 크기 조합(8 → 2·3·3, 10 → 2·4·4, 12 → 4·4·4)을 바꿀 수 있음. 제약: 묶음 크기의 합이 전체와 같아야 하고, 같은 크기 묶음이 몇 개인지가 나눗셈 계승을 결정하므로 ⑴은 같은 크기 2개, ⑵는 3개를 유지해야 골조가 보존된다."
    creative: "(1) ⑴을 '세 사람에게 2·2·5송이씩 주기'로 바꾸면 3! 을 곱하는 분배형(★3 유지) (2) 묶음 크기를 모두 다르게(2·3·4) 하면 나눗셈 보정이 사라져 ★2 (3) '특정 두 송이가 같은 묶음'처럼 조건을 얹으면 분할 안에서 다시 경우를 나눠야 해 ★4."
```

```yaml
- id: GN-CM1-268-591
  page: 268
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    서로 다른 소설책 7권과 수필집 3권을 5권씩 두 묶음으로 나눌 때, 각 묶음에 수필집이 적어도 한 권씩 들어가도록 나누는 방법의 수.
  category: "두 묶음 분할의 총수 → 수필집 3권이 한 묶음에 몰린 경우를 빼기(여사건)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'각 묶음에 적어도 한 권' 을 '수필집 3권이 한 묶음에 몰리지 않음' 으로 옮기고, 몰린 경우는 그 묶음의 나머지 2권을 소설책에서 고르는 7C2 로 이미 두 묶음이 구별되게 결정되므로 2! 로 다시 나누지 않는다는 점까지 확인"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "조건이 붙은 같은 크기 두 묶음 분할(적어도 한 개씩 포함)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    전체 분할은 10C5·5C5/2!=126. 여사건은 수필집 3권이 한 묶음에 몰린 경우로, 그 묶음이 수필집을 갖는 쪽으로 이미 구별되므로 7C2=21 을 그대로 뺀다. 여사건 자체는 표준이지만 전체에는 2! 보정을 쓰고 여사건에는 쓰지 않는 비대칭이 이 문항의 변별 지점이라 통찰 1개(EQV d1). 특강 확인체크 출발 ★2 에서 +1.
  tier: star_3
  mechanism_primary: "두 묶음 분할 총수(2! 보정) → 수필집이 한 묶음에 몰린 경우 빼기(보정 없이) → 차"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$105$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/268-591.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "소설책·수필집 권수(6+4 를 5·5 로, 8+2 를 5·5 로)와 묶음 크기를 바꿀 수 있음. 제약: 두 묶음 크기가 같아야 2! 보정 골조가 유지되고, 적은 쪽(수필집) 권수가 3 이하여야 여사건이 한 덩어리로 끝난다. 수필집이 4권이면 2·2 분포도 생겨 여사건이 두 갈래가 된다."
    creative: "(1) 묶음 크기를 4·6 으로 비대칭화하면 2! 보정이 사라져 ★2 (2) '수필집이 모두 같은 묶음' 자체를 묻게 뒤집으면 ★2 (3) 세 묶음(4·3·3)으로 늘리고 '각 묶음에 수필집 한 권씩' 으로 바꾸면 분배·분할이 겹쳐 ★4."
```

```yaml
- id: GN-CM1-268-592
  page: 268
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    6명의 학생이 2명씩 짝을 이루어 서로 다른 세 곳으로 봉사 활동을 가는 방법의 수.
  category: "분배 → 가는 곳이 구별되므로 6C2·4C2·2C2 를 3! 로 나누지 않음"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "같은 개수 묶음을 서로 다른 대상에 분배하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    6C2·4C2·2C2=90 한 줄. 세 곳이 서로 다르므로 분할이 아니라 분배이고 3! 나눗셈이 없다 — 학생이 가장 자주 틀리는 지점이지만 특강 예제에서 바로 앞에 나온 공식의 직접 적용이라 통찰로 세지 않았다. 통찰 0·M_total 4 이나 분할·분배 구분 자체가 심화 내용이라 특강 확인체크 출발 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "조합의 곱으로 2명씩 세 묶음 → 장소가 구별되므로 계승 나눗셈 없이 그대로"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$90$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/268-592.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "인원과 묶음 크기(8명 2·2·2·2 네 곳, 9명 3·3·3 세 곳)를 바꿀 수 있음. 제약: 인원이 묶음 크기의 배수여야 하고, 묶음 크기가 모두 같아야 '나누지 않는다' 는 판단이 변별 지점으로 남는다."
    creative: "(1) '세 곳' 을 '세 묶음' 으로만 바꾸면 3! 나눗셈이 살아나 같은 수치로 답이 15 가 되는 대조 문항(★2) (2) 장소 중 두 곳만 구별되는 설정이면 부분 보정이 필요해 ★3 (3) 묶음 크기를 1·2·3 으로 다르게 하면 보정이 사라져 ★1."
```

```yaml
- id: GN-CM1-268-593
  page: 268
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    8개 학급이 참가한 축구 대회의 (그림의) 대진표를 작성하는 방법의 수.
  category: "토너먼트 대진표 → 8팀을 2팀씩 네 묶음으로 나눈 뒤 네 묶음을 다시 두 묶음으로 나누기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "대진표라는 그림 구조를 '같은 크기 묶음으로 두 번 연속 분할' 이라는 개수 문제로 옮겨야 함 — 1회전 짝짓기(8을 2씩 네 묶음)와 2회전 대진(네 묶음을 2씩 두 묶음)이 각각 독립된 분할이라는 것을 읽어내는 단계"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "토너먼트 대진표 작성의 수(반복 분할)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    1회전은 8C2·6C2·4C2·2C2/4!=105, 2회전은 네 묶음을 두 묶음으로 4C2·2C2/2!=3, 곱해서 315. 그림을 분할 두 단계로 번역하는 것이 통찰(RT d2)이고, 두 단계 모두 같은 크기 묶음이라 계승 나눗셈을 두 번 쓴다. 특강 확인체크 출발 ★2 에서 +1.
  tier: star_3
  mechanism_primary: "8팀을 2팀씩 네 묶음으로 분할 → 네 묶음을 두 묶음으로 다시 분할 → 두 수의 곱"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$315$'
  answer_source: "답지"
  figure: crop:fig-268-593.png
  latex: latex-bank/gn-cm1/items/268-593.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "참가 팀 수를 4(→3) 또는 16(→2027025·638512875 급으로 커짐)으로 바꿀 수 있음. 제약: 그림이 균형 대진표(2의 거듭제곱 팀·부전승 없음)여야 하고, 팀 수를 바꾸면 그림 크롭도 같이 바꿔야 한다 — 크롭 라벨과 발문의 팀 수를 반드시 일치시킬 것."
    creative: "(1) '특정 두 팀이 결승에서만 만나도록' 조건을 얹으면 묶음 배치 제한이 생겨 ★4 (2) 6팀 대진표(부전승 2팀)처럼 비균형 그림이면 분할 크기가 달라져 ★4 (3) 대진표 그림 없이 '결승까지 경기 수' 만 물으면 분할이 필요 없어 ★1."
```

### 연습문제 STEP 1

```yaml
- id: GN-CM1-269-594
  page: 269
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    등식 nC3 + nP2 = 5·(n-1)C2 를 만족시키는 모든 자연수 n 의 값의 합.
  category: "조합·순열 기호를 n 에 대한 다항식으로 전개 → 이차방정식 → 정의역 조건 확인"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "nCr·nPr 를 포함한 등식을 만족시키는 자연수 n 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 기호를 모두 계승 정의로 펴면 공통인수 (n-1) 이 나오고, n≥3 이므로 나눌 수 있어 n^2-11n+30=0 즉 n=5, 6. 기호를 다항식으로 옮기는 것은 이 단원의 표준 절차라 통찰로 세지 않았다. 다만 nC3 이 정의되려면 n≥3 이라는 범위 확인(T-범위)이 답을 가르는 지점이다. STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "nC3·nP2·(n-1)C2 를 계승으로 전개 → 공통인수 (n-1) 약분 → 이차방정식 → n≥3 확인 후 근의 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/269-594.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변의 계수 5 와 각 기호의 아래 첨자(3, 2, 2)를 바꿀 수 있음. 제약: 전개 후 n 에 대한 이차식이 되어야 하고 두 근이 모두 정의역(가장 큰 아래 첨자 이상)을 만족하는지 미리 확인해야 한다 — 한 근이 범위 밖으로 떨어지면 '합' 이 달라진다."
    creative: "(1) 두 근 중 하나를 일부러 정의역 밖(n=2)으로 떨어뜨려 기각을 강제하면 I-VF 가 붙어 ★3 (2) 'n 의 최댓값' 으로 바꾸면 ★2 유지 (3) nCr = nC(n-r) 성질을 써야 풀리는 형태로 바꾸면 동치 변환 통찰이 생겨 ★3."
```

```yaml
- id: GN-CM1-269-595
  page: 269
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    1부터 15까지의 자연수 중 서로 다른 세 수를 택할 때 세 수의 합이 홀수가 되는 경우의 수.
  category: "합의 홀짝 → 택한 홀수의 개수가 홀수인 경우로 옮겨 (홀3) + (홀1·짝2) 로 분기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'세 수의 합이 홀수' 를 '택한 수 중 홀수의 개수가 홀수(3개 또는 1개)' 라는 셀 수 있는 조건으로 옮기는 단계 — 이 변환 없이는 15C3 안에서 직접 셀 수 없다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "택한 수의 합의 홀짝 조건으로 개수 세기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    1~15 에 홀수 8개·짝수 7개. 합이 홀수이려면 홀수를 3개(8C3) 또는 1개(8C1·7C2) 택해야 한다. 동치 변환 통찰 1개(EQV d1)이고 그 뒤는 조합 두 번. M_total 5 로 가벼워 STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "합의 홀짝 → 홀수를 홀수 개 택하기 → (홀3) + (홀1·짝2) 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$224$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/269-595.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한(15 → 12, 20)과 택하는 개수(3 → 4)를 바꿀 수 있음. 제약: 상한이 바뀌면 홀수·짝수 개수가 달라지고, 택하는 개수가 짝수면 분기 개수와 홀짝 규칙이 통째로 바뀐다. 짝수 개 택하기로 바꾸면 '합이 짝수' 쪽이 자연스럽다."
    creative: "(1) '합이 짝수' 로 뒤집으면 여사건으로도 풀려 ★2 유지 (2) '합이 3의 배수' 로 바꾸면 나머지 3분류가 필요해 ★4 (3) '곱이 짝수' 로 바꾸면 여사건 한 줄이라 ★1~2."
```

```yaml
- id: GN-CM1-269-596
  page: 269
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    남자 6명과 여자 4명 중에서 4명의 대표를 뽑을 때 남녀를 적어도 한 명씩 뽑는 방법의 수.
  category: "전체 10C4 에서 남자만·여자만 뽑는 경우를 빼는 여사건"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "'적어도 한 명씩' 조건의 대표 뽑기(여사건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    10C4=210 에서 남자만 6C4=15, 여자만 4C4=1 을 빼 194. '적어도' 를 보고 여사건으로 가는 것은 이 단원의 표준 절차라 통찰로 세지 않았다. 여사건이 두 덩어리(남자만·여자만)라는 점만 빠뜨리지 않으면 된다. 통찰 0·M_total 5 로 −1 후보이지만 여사건이 두 갈래라 STEP 1 출발 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "전체 10C4 → 남자만 6C4 와 여자만 4C4 를 빼기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$194$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/269-596.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "남녀 인원(6·4 → 7·5, 5·3)과 뽑는 수(4 → 3, 5)를 바꿀 수 있음. 제약: 뽑는 수가 적은 쪽 인원보다 크면 그쪽 여사건이 0 이 되어 여사건이 한 덩어리로 줄고 난도가 내려간다 — 두 덩어리를 유지하려면 뽑는 수 ≤ min(남,여) 이어야 한다."
    creative: "(1) '여자를 적어도 2명' 으로 바꾸면 여사건이 두 경우(여0·여1)라 ★2 유지 (2) '남자가 여자보다 많도록' 으로 바꾸면 분기 나열이라 ★3 (3) 특정 두 사람이 동시에 뽑히지 않도록 조건을 더하면 여사건이 겹쳐 포함배제가 필요해 ★4."
```

```yaml
- id: GN-CM1-269-597
  page: 269
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    1부터 8까지의 자연수 중 서로 다른 3개를 택해 만든 세 자리 자연수 중 5를 포함하는 것의 개수.
  category: "5를 고정하고 나머지 2개 택하기(7C2) → 세 자리 배열 3!"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "특정 숫자를 포함하는 자연수의 개수(조합 후 배열)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    5 를 이미 뽑았다고 보고 남은 7개에서 2개를 택하는 7C2=21, 세 숫자를 자리에 배열하는 3!=6 을 곱해 126. 0 이 없으므로 맨 앞자리 제약이 없다는 점이 이 문항을 절차형으로 묶어 두는 이유다. 통찰 0·M_total 5 로 −1 후보이지만 '뽑고 나서 배열' 두 단계라 STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "5 고정 → 나머지 2개 조합 7C2 → 세 자리 배열 3! 곱"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$126$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/269-597.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자 범위(1~8 → 1~9)와 자릿수(3 → 4)를 바꿀 수 있음. 제약: 범위에 0 을 넣으면 맨 앞자리 제약이 생겨 골조가 달라지므로, 절차형으로 두려면 0 을 포함하지 않아야 한다."
    creative: "(1) 범위를 0~8 로 넓히면 선두 0 제외가 필요해 ★3 (2) '5 를 포함하지 않는' 으로 뒤집으면 7C3·3! 한 줄이라 ★1~2 (3) '5 가 십의 자리' 처럼 위치까지 지정하면 배열이 2! 로 줄어 ★2."
```

```yaml
- id: GN-CM1-269-598
  page: 269
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    원 위에 같은 간격으로 놓인 6개의 점 중 3개를 이어 만드는 직각삼각형의 개수 a, 정삼각형의 개수 b 에 대하여 a-b 의 값.
  category: "직각삼각형 ⟺ 빗변이 지름 → 지름 3개 × 나머지 점 4개 / 정삼각형은 배치 대칭으로 2개"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'직각삼각형' 이라는 도형 조건을 '빗변이 원의 지름인 세 점 고르기' 라는 선택 문제로 옮기는 단계 — 원주각 성질을 개수 세기로 번역해야 3C1·4C1 이라는 식이 나온다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "원 위의 등간격 점으로 만드는 특정 삼각형의 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    정육각형 꼭짓점이므로 지름은 3개, 각 지름마다 남은 4개 점이 직각의 꼭짓점이 되어 a=12. 정삼각형은 한 칸 걸러 잡는 두 가지뿐이라 b=2. 원주각 조건을 선택 문제로 옮기는 통찰 1개(RT d2)가 있고 나머지는 셈이 가볍다. STEP 1 출발 ★2 에서 +1.
  tier: star_3
  mechanism_primary: "지름 3개 선택 → 나머지 4점 중 1개로 직각 꼭짓점 → a=12, 대칭 배치로 b=2 → a-b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10$'
  answer_source: "답지"
  figure: crop:fig-269-598.png
  latex: latex-bank/gn-cm1/items/269-598.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점의 개수를 8, 10, 12 로 바꿀 수 있음(짝수여야 지름이 생김). 제약: 정삼각형 개수는 점 수가 3의 배수일 때만 0 이 아니고, 점 수를 바꾸면 그림 크롭의 점 개수·간격도 같이 바꿔야 한다. 홀수 개(7점)로 바꾸면 직각삼각형이 0 이 되어 문항이 무너진다."
    creative: "(1) '이등변삼각형의 개수' 로 바꾸면 정삼각형 중복 보정이 필요해 ★4 (2) '둔각삼각형의 개수' 로 바꾸면 전체 − 직각 − 예각 분류가 생겨 ★4 (3) 점을 8개로 늘리고 직각삼각형만 물으면 같은 골조로 ★3 유지."
```

### 연습문제 STEP 2

```yaml
- id: GN-CM1-270-599
  page: 270
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    이차방정식 5x^2 - nPr·x - 9·nC(n-r) = 0 의 두 근이 -3, 9 일 때 자연수 n, r 에 대하여 n+r 의 값.
  category: "근과 계수의 관계로 nPr·nCr 의 값 확정 → nPr = nCr·r! 로 r, n 역추적"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "이차방정식 단원의 근과 계수의 관계를 써야 조합 단원의 기호 값이 나온다 — 두 근의 합·곱에서 nPr=30, nC(n-r)=15 를 뽑는 단원 경계 결합"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "nC(n-r)=nCr 로 바꾼 뒤 nPr = nCr·r! 라는 관계로 두 값을 하나의 식으로 묶어 r!=2 즉 r=2 를 먼저 확정하는 변환 — 두 미지수를 따로 두고는 풀리지 않는다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "근과 계수의 관계와 nPr·nCr 관계식을 결합한 n, r 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 근의 합 6 에서 nPr=30, 곱 -27 에서 nC(n-r)=nCr=15. nPr=nCr·r! 이므로 r!=2, r=2 이고 nC2=15 에서 n=6. 통찰 2개지만 각각 표준 도구를 한 번씩 꺼내는 수준(XU d1 · EQV d2)이고 계산도 짧아 STEP 2 출발 ★3 을 유지했다.
  tier: star_3
  mechanism_primary: "근과 계수의 관계 → nPr=30, nCr=15 → nPr=nCr·r! 로 r=2 → nC2=15 로 n=6 → n+r"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/270-599.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 근과 계수(5, -9)를 바꿀 수 있음. 제약: 합에서 나오는 값이 어떤 nPr 과, 곱에서 나오는 값이 같은 (n,r) 의 nCr 과 동시에 맞아야 하므로 (n,r) 을 먼저 정하고 nPr·nCr 을 계산해 역으로 근을 설계해야 한다. 예: (n,r)=(5,2) 면 nPr=20, nCr=10."
    creative: "(1) nC(n-r) 대신 nCr 을 그대로 써서 동치 변환 단계를 없애면 ★2 (2) 근 대신 '한 근이 다른 근의 3배' 같은 간접 조건을 주면 역추적이 한 겹 늘어 ★4 (3) r 의 값을 주고 n 만 묻게 하면 ★2."
```

```yaml
- id: GN-CM1-270-600
  page: 270
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    파티에 참석한 13쌍의 부부 중 남편들은 자신의 부인을 제외한 모든 사람과 한 번씩 악수하고 부인들끼리는 악수하지 않았을 때, 악수의 총횟수.
  category: "악수를 두 종류(남편끼리 · 남편과 부인)로 갈라 세고 부부인 13쌍을 빼기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'자신의 부인만 제외' 와 '부인들끼리는 안 함' 이라는 두 서술을 '남편끼리 13C2 + 남편·부인 쌍 13×13 중 부부 13 제외' 라는 셀 수 있는 두 덩어리로 옮기는 단계 — 26C2 에서 빼는 갈래로도 같은 식이 나온다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "조건이 붙은 악수 횟수(무순 쌍 세기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    남편끼리 13C2=78, 남편과 부인 사이 13×13-13=156, 부인끼리 0 이라 합 234. 전체 26C2=325 에서 부인끼리 78 과 부부 13 을 빼도 같다. 제외가 두 겹(부부 · 부인끼리)이라 어느 갈래로 가든 한 겹을 빠뜨리기 쉬운 것이 변별 지점이고, 계산 자체는 가볍다. STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "남편끼리 13C2 + (남편×부인 13·13 − 부부 13) → 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$234$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/270-600.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "부부 쌍 수(13 → 10, 15)를 바꿀 수 있음. 제약: 남편끼리 C(k,2) 와 남편·부인 k^2−k 의 합 꼴이 유지되도록 '부인끼리는 하지 않는다' 는 비대칭 조건을 그대로 둬야 한다."
    creative: "(1) '부인들끼리도 악수했다' 로 바꾸면 26C2−13 한 줄이라 ★2 (2) 악수 총횟수를 주고 부부 쌍 수를 묻게 뒤집으면 이차방정식 역추적이 붙어 ★4 (3) '남편 중 3명은 아예 악수하지 않았다' 를 더하면 제외가 세 겹이 되어 ★4."
```

```yaml
- id: GN-CM1-270-601
  page: 270
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    서로 다른 네 종류의 인형이 각각 2개씩 있는 8개 중에서 5개를 선택하는 경우의 수(같은 종류끼리는 구별하지 않음).
  category: "각 종류에서 택하는 개수(0·1·2)의 조합으로 분류 → (2,2,1,0) 과 (2,1,1,1) 두 유형"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "같은 종류를 구별하지 않으므로 답이 '어느 인형' 이 아니라 '종류별 개수의 배열' 이고, 합이 5 이면서 각 항이 2 이하인 분할 유형 (2,2,1,0) 과 (2,1,1,1) 두 갈래를 모두 따져야 함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "같은 것이 있는 물건에서 몇 개 선택하기(개수 분할로 분류)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    (2,2,1,0) 은 2개를 택할 종류 4C2=6, 1개를 택할 종류 2C1=2 로 12 가지, (2,1,1,1) 은 0개인 종류를 고르는 4C1=4 가지라 합 16. 8개에서 5개를 고르는 대신 '3개를 남긴다' 로 바꿔도 같은 분류가 나온다. 구별 여부를 개수 분할 문제로 바꾸는 통찰 1개(MI d2). STEP 2 출발 ★3 유지(교육청 기출 가산은 통찰이 한 개라 적용하지 않음).
  tier: star_3
  mechanism_primary: "종류별 선택 개수의 조합으로 분류 → (2,2,1,0) 12 + (2,1,1,1) 4 → 16"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$16$'
  answer_source: "답지"
  figure: crop:fig-270-601.png
  latex: latex-bank/gn-cm1/items/270-601.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "종류 수(4)·종류당 개수(2)·선택 개수(5)를 바꿀 수 있음. 제약: 선택 개수가 전체의 절반 근처일 때 분할 유형이 2~3개로 유지되고, 종류당 개수를 3 이상으로 올리면 분류 가짓수가 급증해 손으로 세기 어려워진다. 그림 크롭의 인형 종류·개수와 발문 수치를 반드시 일치시킬 것."
    creative: "(1) '3개 선택' 으로 바꾸면 유형이 (2,1,0,0)·(1,1,1,0) 두 갈래로 같은 골조 ★3 (2) 종류마다 개수가 다르면(1·2·2·3) 분류가 비대칭이라 ★4 (3) '적어도 세 종류를 포함' 조건을 얹으면 유형 필터가 추가되어 ★4."
```

```yaml
- id: GN-CM1-270-602
  page: 270
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    남녀 15명 중 3명의 대표를 뽑을 때 여학생이 적어도 한 명 포함되는 방법의 수가 445 일 때의 남학생 수.
  category: "여사건으로 (전체 15C3) − (남학생만 mC3) = 445 를 세우고 m 을 역추적"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "결과(445)가 먼저 주어지고 남학생 수를 거꾸로 찾는 구조 — '적어도 한 명' 을 여사건으로 바꿔 mC3 = 455 − 445 = 10 이라는 방정식을 만든 뒤 m 을 역추적해야 하고, 조합값에서 m 을 되읽는 단계가 핵심"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "경우의 수가 주어진 대표 뽑기에서 인원 역추적"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    15C3=455 이므로 남학생만 뽑는 경우가 10 이어야 하고, mC3=10 에서 m=5. 여사건 방향을 잡는 것보다 결과에서 인원을 거꾸로 찾는 구조(BW d2)가 이 문항의 성격이다. 조합값 10 을 m(m-1)(m-2)=60 으로 되읽는 부분이 계산의 전부라 M_total 6. STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "전체 15C3 − 남학생만 mC3 = 445 → mC3 = 10 → m = 5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/270-602.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체 인원(15)·뽑는 수(3)·주어진 경우의 수(445)를 바꿀 수 있음. 제약: 남학생 수 m 을 먼저 정하고 전체 − mC3 을 계산해 발문의 수를 만들어야 하며, m 이 뽑는 수보다 작으면 여사건이 0 이 되어 역추적이 사라진다."
    creative: "(1) '여학생이 적어도 두 명' 으로 바꾸면 여사건이 두 덩어리라 미지수 이차·삼차식이 되어 ★4 (2) 남학생 수 대신 전체 인원을 묻게 하면 미지수가 양쪽에 걸려 ★4 (3) 여학생 수를 주고 경우의 수를 묻는 정방향으로 뒤집으면 ★2."
```

```yaml
- id: GN-CM1-270-603
  page: 270
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    1부터 9까지가 적힌 3×3 정사각형 칸에서 서로 다른 가로줄·서로 다른 세로줄에 있는 2개의 숫자를 선택하는 경우의 수. 5지선다.
  category: "가로줄 2개 선택 × 세로줄 2개 선택 × 두 대각 방향 2 (또는 첫 칸 9 × 남은 칸 4 ÷ 2)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'서로 다른 행·서로 다른 열' 이라는 배치 조건을 '행 2개와 열 2개를 고른 뒤 그 2×2 안에서 대각으로 두 칸' 이라는 선택 문제로 옮기는 단계"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "격자에서 같은 행·열을 피해 칸 고르기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    3C2·3C2·2 = 18. 한 칸을 먼저 고르고(9) 같은 줄을 뺀 나머지 4칸 중 하나를 고른 뒤 순서를 없애 9·4/2=18 로 세도 같다. 어느 갈래든 마지막에 2로 나누거나 대각 2가지를 곱하는 지점에서 중복이 갈리는 것이 변별 지점이다. 통찰 1개(RT d1)이고 셈이 가벼워 STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "가로줄 3C2 × 세로줄 3C2 × 대각 2가지 → 18"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: crop:fig-270-603.png
  latex: latex-bank/gn-cm1/items/270-603.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "격자 크기(3×3 → 4×4, 3×4)와 고르는 칸 수(2)를 바꿀 수 있음. 제약: 격자 크기를 바꾸면 그림 크롭의 칸 수와 적힌 수 1~n 을 함께 바꿔야 하고, 고르는 칸을 3개로 늘리면 행·열 선택 뒤 배열 3! 이 붙어 골조가 한 겹 늘어난다."
    creative: "(1) 4×4 에서 3칸 고르기로 바꾸면 4C3·4C3·3!=384 로 배열이 붙어 ★4 (2) '두 수의 합이 짝수' 조건을 더하면 홀짝 분류가 겹쳐 ★4 (3) '같은 줄에 있어도 된다' 로 풀면 9C2 한 줄이라 ★1."
```

```yaml
- id: GN-CM1-271-604
  page: 271
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    5개의 선분으로 만든 별 모양 도형 위의 10개 점을 이어 만드는 서로 다른 직선의 개수 m, 삼각형의 개수 n 에 대하여 m+n 의 값.
  category: "한 선분 위 4점이 만드는 중복을 제거해 직선 세기 → 전체 10C3 에서 공선 3점을 빼 삼각형 세기"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "별 그림을 '10개 점 중 4점씩 한 줄에 놓인 묶음이 5개' 라는 공선 구조로 읽어내는 단계 — 이 구조를 못 잡으면 중복 제거의 대상 자체가 보이지 않는다"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'서로 다른 직선' 을 '점 두 개의 모든 쌍에서 같은 선분 위 쌍 5·4C2 를 빼고 그 선분 5개를 다시 더하기' 로, '삼각형' 을 '세 점 조합에서 공선 3점 5·4C3 을 빼기' 로 각각 셀 수 있는 형태로 옮김"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "도형 위 점으로 만드는 직선·삼각형의 개수(공선 점 중복 제거)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    한 선분 위에 4점씩 놓인 묶음이 5개다. 직선은 10C2=45 에서 5·4C2=30 을 빼고 선분 5를 더해 m=20, 삼각형은 10C3=120 에서 5·4C3=20 을 빼 n=100, 합 120. 공선 구조를 읽는 단계와 중복 보정을 세우는 단계가 각각 통찰(RT d2 · EQV d2)이고 보정을 빼기만 하고 더하지 않으면 바로 틀린다. STEP 2 출발 ★3 에서 +1.
  tier: star_4
  mechanism_primary: "선분마다 공선 4점 확인 → 직선 10C2 − 5·4C2 + 5 = 20 → 삼각형 10C3 − 5·4C3 = 100 → m+n"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$120$'
  answer_source: "답지"
  figure: crop:fig-271-604.png
  latex: latex-bank/gn-cm1/items/271-604.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "선분 수와 선분당 점 수(별 5선분·4점 → 육각별 6선분·4점)를 바꿀 수 있음. 제약: 그림에서 한 선분 위에 몇 점이 놓이는지가 보정식을 통째로 결정하므로 크롭과 발문의 점 개수(10)를 반드시 함께 바꿔야 하고, 세 선분이 한 점에서 만나는 배치가 생기면 보정이 더 복잡해진다."
    creative: "(1) m 만 묻거나 n 만 묻게 나누면 각각 ★3 (2) '사각형의 개수' 로 바꾸면 공선 4점 처리가 한 겹 더 필요해 ★5 근처 (3) 점을 교점까지 포함해 15개로 늘리면 공선 묶음이 여러 크기로 섞여 ★5."
```

```yaml
- id: GN-CM1-271-605
  page: 271
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    삼각형 ABC 에서 꼭짓점 A 와 변 BC 위 네 점을 잇는 4개의 선분, 변 AB 위 세 점과 변 AC 위 세 점을 잇는 3개의 선분을 그린 도형의 선들로 만들 수 있는 삼각형의 개수. 5지선다.
  category: "직선을 'A 를 지나는 것 6개' 와 'A 를 지나지 않는 것 4개' 로 나눠 6C2 × 4C1"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "도형을 '직선 10개' 로 바꾼 뒤, 모든 삼각형이 A 를 지나는 두 직선과 지나지 않는 한 직선으로 정해진다는 구조를 읽어내는 단계 — 삼각형을 하나씩 세는 대신 직선 조합을 고르는 문제로 옮겨진다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "도형의 선들로 만드는 삼각형의 개수(직선 묶음 선택)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A 를 지나는 직선은 AB, AC 와 네 개의 선분을 합쳐 6개, A 를 지나지 않는 직선은 BC 와 가로지르는 세 선분을 합쳐 4개다. 삼각형 하나는 앞에서 2개·뒤에서 1개로 정해지므로 6C2·4=60. 구조를 읽으면 한 줄이고 못 읽으면 손으로 세다 끝나지 않는 유형이라 통찰 1개(RT d2). STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "A 를 지나는 직선 6개 중 2개 × A 를 지나지 않는 직선 4개 중 1개 → 60"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: crop:fig-271-605.png
  latex: latex-bank/gn-cm1/items/271-605.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "A 에서 그은 선분 수(4)와 가로지르는 선분 수(3)를 바꿀 수 있음. 제약: A 를 지나는 직선 수 = (그은 선분 수 + 2), 지나지 않는 직선 수 = (가로선 수 + 1) 이라는 대응을 유지해야 하고, 세 직선이 한 점에서 만나는 배치가 생기면 그 조합을 빼야 하므로 그림에서 동점 교차가 없도록 고정해야 한다."
    creative: "(1) 가로선 중 두 개를 평행하게 그려도 삼각형 수는 그대로라 ★3 유지(대신 사다리꼴을 묻는 문항으로 확장 가능) (2) '꼭짓점이 A 가 아닌 삼각형' 을 묻게 하면 여사건과 동점 교차 점검이 필요해 ★4 (3) A 에서 그은 선분 중 하나를 BC 밖으로 빼면 분류가 깨져 ★4."
```

### 연습문제 실력 UP

```yaml
- id: GN-CM1-271-606
  page: 271
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    가로·세로 같은 간격으로 놓인 12개의 점(3행 4열)을 이어 만들 수 있는 서로 다른 직선의 개수.
  category: "12C2 에서 공선 3점 이상 묶음(가로 3줄·세로 4줄·대각 4줄)의 쌍을 빼고 직선 수를 다시 더하기"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "공선 묶음이 가로·세로만이 아니라 기울기 ±1 인 대각 3점 묶음 4개까지 있다는 것을 방향별로 모두 찾아내야 함 — 대각 묶음을 빠뜨리면 답이 4 커진다"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'서로 다른 직선의 개수' 를 '점 쌍의 수에서 공선 묶음이 만드는 쌍을 빼고 그 묶음이 만드는 직선 하나씩을 다시 더한 값' 으로 옮기는 보정 — 빼기만 하면 해당 직선이 통째로 사라진다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "격자점으로 만드는 서로 다른 직선의 개수"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    12C2=66. 가로 3줄(각 4점)은 3·4C2=18 쌍에 직선 3개, 세로 4줄(각 3점)은 4·3C2=12 쌍에 직선 4개, 기울기 ±1 인 3점 대각은 각 방향 2개씩 4줄로 4·3C2=12 쌍에 직선 4개. 66−18−12−12+3+4+4=35. 방향을 모두 훑는 전수 탐색(MI d2)과 빼고 더하는 보정(EQV d2) 두 통찰. 실력 UP 출발 ★4 유지.
  tier: star_4
  mechanism_primary: "12C2 → 가로·세로·대각 공선 묶음의 쌍을 빼고 묶음 수만큼 직선을 더하기 → 35"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$35$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/271-606.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "격자 크기(3×4 → 3×3, 4×4, 2×5)를 바꿀 수 있음. 제약: 격자가 커질수록 대각 공선 묶음의 크기가 3·4 로 섞이고 기울기 ±1 이외(±2, ±1/2)의 공선은 3×4 까지는 생기지 않지만 4×4 이상에서는 검토가 필요하다. 발문 안의 점 배열(bullet 배열)도 함께 고쳐야 한다."
    creative: "(1) '삼각형의 개수' 로 바꾸면 12C3 − 공선 3점 묶음 합으로 골조가 비슷해 ★4 유지 (2) '평행사변형의 개수' 로 바꾸면 가로 2줄·세로 2줄 선택이라 오히려 ★3 (3) 3×3 격자로 줄이면 대각이 2줄뿐이라 ★3."
```

```yaml
- id: GN-CM1-271-607
  page: 271
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    4개, 3개, 2개의 평행한 직선들이 서로 만나고 있을 때 이 직선들로 만들 수 있는 평행사변형이 아닌 사다리꼴의 개수.
  category: "평행한 두 변을 한 묶음에서 2개 고르고 나머지 두 변은 서로 다른 두 묶음에서 1개씩 고르기"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'평행사변형이 아닌 사다리꼴' 을 '평행한 변이 정확히 한 쌍' 즉 '한 묶음에서 2개 + 나머지 두 묶음에서 각각 1개씩' 이라는 선택 조건으로 옮김 — 나머지 두 변을 같은 묶음에서 고르면 평행사변형이 되어 기각된다"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "평행한 변을 어느 묶음이 제공하는지에 따라 세 경우(4개 묶음·3개 묶음·2개 묶음)가 각각 독립된 개수를 만들어 모두 더해야 함"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "세 묶음의 평행선으로 만드는 사다리꼴·평행사변형의 개수"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    평행변을 4개 묶음이 주면 4C2·3·2=36, 3개 묶음이 주면 3C2·4·2=24, 2개 묶음이 주면 2C2·4·3=12 로 합 72. '평행사변형이 아닌' 을 '나머지 두 변은 서로 다른 묶음에서' 로 바꾸는 동치 변환(EQV d2)과 어느 묶음이 평행변을 주는지의 3분기(MI d2)가 함께 필요하다. 실력 UP 출발 ★4 유지.
  tier: star_4
  mechanism_primary: "평행변을 주는 묶음 선택 → 그 묶음에서 2개 · 나머지 두 묶음에서 1개씩 → 세 경우의 합 72"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$72$'
  answer_source: "답지"
  figure: crop:fig-271-607.png
  latex: latex-bank/gn-cm1/items/271-607.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 묶음의 직선 수(4·3·2 → 5·3·2, 4·4·3)를 바꿀 수 있음. 제약: 묶음이 세 개여야 3분기 골조가 유지되고 각 묶음이 2개 이상이어야 평행변을 만들 수 있다. 그림 크롭의 직선 개수를 발문과 반드시 일치시킬 것."
    creative: "(1) '평행사변형의 개수' 만 물으면 두 묶음에서 2개씩 고르는 3가지 조합의 합이라 ★3 (2) '사다리꼴(평행사변형 포함)' 로 바꾸면 중복 계산 보정이 필요해 ★5 근처 (3) 묶음을 네 개로 늘리면 분기가 4개로 늘어 ★4 유지이지만 계산 부담만 커진다(질 저하 주의)."
```

```yaml
- id: GN-CM1-271-608
  page: 271
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    1층에서 6명이 함께 탄 엘리베이터가 올라가는 동안 2·3·4·5층의 네 층 중 두 층에서 각각 3명씩 내리는 방법의 수(새로 타는 사람은 없다).
  category: "내리는 두 층 선택 4C2 → 6명을 구별되는 두 층에 3명씩 배정 6C3"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분할·분배가 섞인 배정(대상 선택 후 인원 분배)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    내리는 두 층을 고르는 4C2=6, 6명을 그 두 층에 3명씩 나누는 6C3·3C3=20 을 곱해 120. 층이 구별되므로 같은 인원 3·3 이지만 2! 로 나누지 않는다 — 이 조각의 특강에서 다룬 분배 공식의 직접 적용이라 통찰로 세지 않았다. 실력 UP 출발 ★4 이지만 통찰 0·M_total 5 로 −1 해 ★3.
  tier: star_3
  mechanism_primary: "내릴 두 층 4C2 → 6명을 구별되는 두 층에 3명씩 6C3 → 곱"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$120$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/271-608.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "탄 인원(6)·층 수(4)·내리는 층 수(2)와 층별 인원(3·3)을 바꿀 수 있음. 제약: 층별 인원의 합이 탄 인원과 같아야 하고, 층별 인원이 모두 같아야 '층이 구별되므로 나누지 않는다' 는 변별 지점이 남는다. 인원을 2·4 로 비대칭화하면 그 판단이 사라진다."
    creative: "(1) 층별 인원을 2·2·2 세 층으로 늘리면 4C3·(6C2·4C2·2C2) 로 같은 골조 ★3 (2) '각 층에 적어도 한 명씩 내린다' 로 바꾸면 인원 분할 유형 분기가 생겨 ★4 (3) 내리는 인원을 지정하지 않고 '모두 내린다' 로 하면 각자 4가지라 4^6 이지만 '아무도 안 내리는 층 없음' 조건을 붙이면 포함배제가 필요해 ★5."
```

## 표본 판정 요약 (19문)

- ★ 분포: ★1 0 · ★2 5 · ★3 11 · ★4 3 · ★5 0
- 통찰형 13 · 절차형 6(268-e1 · 268-592 · 269-594 · 269-596 · 269-597 · 271-608) · premium 0
- 통찰 유형 분포: I-EQV 7 · I-RT 5 · I-MI 3 · I-BW 1 · I-XU 1 (depth 3 없음 — 모두 d1~d2)
- M_total: 5 가 10문 · 7 이 4문 · 6 이 3문 · 4 와 8 이 각 1문. Mₖ 는 19문 중 12문이 1 로, 이 단원의 변별은 계산량이 아니라 「무엇을 구별하고 무엇을 중복으로 볼 것인가」에서 갈린다.
- 함정: 전 문항이 T-표기(묶음·대상이 구별되는가) 또는 T-범위(공선 점·정의역 누락) 중 하나 이상. 도형 3문(271-604 · 271-606 · 271-607)은 두 카테고리가 겹쳐 Mₜ=2.
- type_hint 상위: 「분할·분배(구별 여부로 계승 나눗셈 결정)」 4(268-e1 · 268-591 · 268-592 · 271-608) · 「도형 위 점·직선으로 세기(공선 중복 제거)」 4(268-593 · 271-604 · 271-605 · 271-606) · 「'적어도' 조건의 여사건」 3(268-591 · 269-596 · 270-602) · 「특정 조건의 삼각형·도형 개수」 3(269-598 · 271-605 · 271-607) · 「조합 기호를 포함한 등식·방정식」 2(269-594 · 270-599)
- 대상층: 중하위권 6 · 중위권 8 · 중상위권 5
- 그림: 7문(`crop:fig-268-593.png` · `crop:fig-269-598.png` · `crop:fig-270-601.png` · `crop:fig-270-603.png` · `crop:fig-271-604.png` · `crop:fig-271-605.png` · `crop:fig-271-607.png`). 271-606 은 점 배열이 발문 안에 표로 들어 있어 `figure: none`.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| (없음) | 이 범위에서 벤더 신호와 2단 이상 어긋난 문항은 없다 | — |

참고(이슈까지는 아닌 1단 차이):

- GN-CM1-268-591 · GN-CM1-268-593 은 특강 확인체크(★2 출발)에서 +1 했다(여사건 비대칭 보정 · 대진표 2단 분할).
- GN-CM1-269-598 은 STEP 1(★2 출발)에서 +1 했다(원주각 조건을 선택 문제로 번역).
- GN-CM1-271-604 은 STEP 2(★3 출발)에서 +1 했다(공선 구조 파악 + 빼고 더하는 보정).
- GN-CM1-271-608 은 실력 UP(★4 출발)에서 −1 했다(통찰 0 · M_total 5 · 특강 분배 공식의 직접 적용).
- GN-CM1-269-596 · GN-CM1-269-597 은 통찰 0 · M_total 5 로 v3.8 산식상 −1 후보였으나, 여사건이 두 덩어리이고 「뽑고 나서 배열」 두 단계라 STEP 1 출발 ★2 를 유지했다.

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 조각의 중심축은 **분할 vs 분배**다(268-e1 · 268-591 · 268-592 · 271-608). 골조가 「조합의 곱 → 같은 크기 묶음 수의 계승으로 나눌 것인가」 하나로 같으므로 카탈로그에서는 **한 유형으로 통합**하고, 「묶음만 만들기(분할)」와 「사람·장소에 주기(분배)」는 base ★ 가 아니라 문항 조건 차이로 두는 편이 낫다. 다만 268-591 처럼 **조건(적어도 한 개씩)이 붙어 여사건에서 보정을 쓰지 않는** 변형은 학생 오답이 몰리는 지점이라 base ★3 자리의 별도 유형 후보다.
- **도형 위 점·직선 세기**(268-593 · 271-604 · 271-605 · 271-606 · 271-607)는 표면 소재가 제각각이지만 실제로는 두 갈래뿐이다 — ① 「공선 묶음을 찾아 쌍을 빼고 직선을 다시 더한다」(271-604 · 271-606) ② 「직선을 두 묶음으로 나눠 조합의 곱으로 도형을 센다」(271-605 · 271-607, 268-593 의 반복 분할도 같은 계열). ①과 ②는 사고 방향이 반대(중복 제거 vs 구조 분해)라 **따로 세워야** 한다. ①이 base ★4, ②가 base ★3~4 자리다.
- **「적어도」 여사건**(269-596 · 270-602 · 268-591)은 그 자체로는 base ★2 이지만, 결과가 먼저 주어져 인원을 역추적하는 270-602 형태(I-BW)는 base ★3 으로 한 칸 올려 별도 슬롯으로 두는 것이 학생 체감과 맞는다.
- **조합 기호 등식**(269-594 · 270-599)은 같은 유형으로 묶되, 다른 단원(이차방정식 근과 계수)과 결합하는 270-599 는 I-XU 태그로 구분해 두면 변형 단계에서 난도 조절이 쉽다.
- 이 범위에서 Mₖ 가 1 인 문항이 12문이므로, 카탈로그의 base ★ 는 계산량이 아니라 「구별·중복 판단이 몇 번 필요한가」로 잡는 것이 v3.8 의 질 저하 방지 게이트와도 맞는다.
