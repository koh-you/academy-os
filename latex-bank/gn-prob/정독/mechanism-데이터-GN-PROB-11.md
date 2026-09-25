---
name: mechanism-데이터-GN-PROB-11
description: 개념원리 확률과 통계 11 독립시행의 확률(1/1 · 107~111쪽 18문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 확률과 통계 (22개정) · 전사본 latex-bank/gn-prob
  section: 11 독립시행의 확률
  unit_code: PROB-11
  part: "1/1"
  extract_range: "107~111쪽 · 107-e9~111-250"
  total_problems: 18
  unit_total: 18
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-prob/items/<id>.tex
  image_source: latex-bank/gn-prob/figures/ (crops.json)
---

# 개념원리 확률과 통계 · 11 독립시행의 확률 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 확률과 통계 11단원 「독립시행의 확률」 107~111쪽 18문항 전수를 다룬다. 구역은 「필수·발전 예제」(필수 예제 2 · 발전 예제 1 · 각 예제의 유제인 확인체크 6) 9문, 「연습문제 STEP 1」 3문, 「연습문제 STEP 2」 4문, 「연습문제 실력 UP」 2문이다. 벤더 난이도 신호는 구역·예제 태그(필수/발전/확인체크)와 연습문제 level(STEP 1 / STEP 2 / 실력 UP)이며, 111-249 에만 「평가원 기출」 태그가 붙어 있다.

★ 출발점은 필수 예제 ★2 · 발전 예제 ★3 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 로 두었고, **확인체크는 직전 예제의 유제이므로 그 예제와 같은 출발점**을 썼다. 여기서 「통찰 0 이고 M_total ≤ 5」 면 −1, 「통찰 2개 이상 또는 depth 3」 이면 +1(단 M_total ≤ 6 이면 보류)을 적용했다. ★5 는 통찰 3개 이상 + SC/VF/SYM/XU 조건을 만족하는 문항이 없어 0문이다.

이 단원의 실질 변별 지렛대는 독립시행 공식 자체가 아니라 **주어진 조건(점수 합·수직선 위 위치·도형 위 복귀·앞뒤 횟수 차·선승제 종료)을 「성공 횟수 r」 에 대한 방정식·합동식으로 옮기는 동치 변환**이다. 그래서 통찰형 12문 중 8문의 주 통찰이 I-EQV 다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-PROB-107-e9
  page: 107
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    주사위 한 개를 6번 던질 때 ⑴ 짝수의 눈이 4번 나올 확률 ⑵ 짝수의 눈이 2번 이상 나올 확률.
  category: "독립시행 공식 대입 → ⑵ 여사건(0번·1번) 제외"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립시행의 확률 (1) — 기본 공식과 「몇 번 이상」 여사건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    한 번의 시행에서 짝수가 나올 확률 1/2 을 확인하고 공식에 r=4 를 넣는 것이 ⑴, 「2번 이상」 을 전체에서 0번·1번을 뺀 것으로 보는 것이 ⑵ 다. 둘 다 이 단원의 정의 확인 수준이고 변환 착안이 없어 통찰 0. 필수 예제 출발점 ★2 · M_total 6 이라 −1 조건(M_total ≤ 5)에 걸리지 않아 ★2 유지.
  tier: star_2
  mechanism_primary: "각 시행 성공확률 1/2 → C(6,r)(1/2)^6 대입 → ⑵ 는 1 − P(0) − P(1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{15}{64}$ ⑵ $\dfrac{57}{64}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/107-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "시행 횟수 6(→5·7·8), 성공 횟수 4, 기준 사건(짝수 → 3의 배수 p=1/3, 소수 p=1/2, 6의 약수 p=2/3)을 바꿀 수 있음. 제약: ⑵ 의 하한을 바꿀 때 여사건 항 수가 하한과 같아지므로 하한은 2 이하로 두어야 계산량이 유지되고, p 를 1/2 밖으로 옮기면 ⑵ 의 분수가 크게 지저분해짐."
    creative: "(1) ⑵ 를 「짝수가 홀수보다 많이 나올 확률」 로 바꾸면 대칭성 활용이 생겨 ★3(I-SYM) (2) 「짝수가 4번 이하」 로 뒤집으면 여사건 방향만 반대인 같은 ★2 (3) 주사위를 두 개로 늘려 한 번의 시행 성공확률을 먼저 구하게 하면 ★3."
```

```yaml
- id: GN-PROB-107-236
  page: 107
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    승률 3/4 인 바둑 기사가 5번 둘 때 ⑴ 3번 이길 확률 ⑵ 적어도 한 번 이길 확률.
  category: "독립시행 공식 대입 → ⑵ 여사건(전패) 제외"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립시행의 확률 (1) — 기본 공식과 「적어도 한 번」 여사건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    107-e9 의 유제로 p 가 1/2 이 아닌 3/4 이라는 점만 다르다. ⑴ 은 C(5,3)(3/4)^3(1/4)^2 한 줄, ⑵ 는 전패의 여사건 한 줄이다. 변환 착안이 없어 통찰 0. 예제 출발점 ★2 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "p=3/4 확인 → C(5,3)p^3(1−p)^2 → ⑵ 는 1 − (1/4)^5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{135}{512}$ ⑵ $\dfrac{1023}{1024}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/107-236.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "승률(3/4 → 2/3·4/5·1/3), 경기 수 5(→4·6), 승수 3 을 바꿀 수 있음. 제약: 분모가 4^5 처럼 거듭제곱 한 덩어리로 정리되는 p 를 고르면 ⑵ 의 답이 깔끔하고, p 의 분모가 소수(3·5)면 ⑴ 의 약분을 한 번 더 시켜야 함."
    creative: "(1) ⑵ 를 「적어도 두 번 이길 확률」 로 올리면 여사건 항이 둘이 되어 ★2 상단 (2) 「3번 이상 이겨야 대회 통과」 로 바꾸면 세 항 합 ★2~3 (3) 5번 중 3번을 먼저 이기면 끝나는 선승제로 바꾸면 마지막 판 고정 통찰이 붙어 ★3(I-EQV)."
```

```yaml
- id: GN-PROB-107-237
  page: 107
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    매 경기 A 팀이 이길 확률이 2/3 인 배구에서 두 경기를 먼저 이기는 팀이 우승할 때, A 팀이 우승할 확률(비기는 경우 없음).
  category: "2선승제 → 2:0 과 2:1 로 분할 → 마지막 경기 고정"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「먼저 2승」 을 「마지막 경기를 A 가 이기고 그 앞 경기에서 1승 1패」 로 동치 변환 — 이 고정을 놓치면 3경기에서 2승을 C(3,2) 로 세어 이미 끝난 경기까지 포함하게 됨"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "선승제 승부의 확률 — 마지막 판 고정 후 앞 판 분배"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    2:0 은 (2/3)^2, 2:1 은 앞 두 경기에서 1승 1패한 뒤 세 번째를 이기는 것으로 마지막 경기를 반드시 고정해야 한다. 이 고정(I-EQV d2)이 이 문항의 유일한 변별점이고 T-경계(우승 확정 시 경기 종료)·T-범위 함정이 겹쳐 Mₜ=2. 확인체크 출발점 ★2 지만 M_total 7 + depth 2 통찰 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: "2:0 과 2:1 로 분할 → 2:1 은 마지막 승 고정 후 앞 2경기 1승1패 → (2/3)^2 + C(2,1)(2/3)(1/3)(2/3)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{20}{27}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/107-237.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "승률(2/3 → 3/5·1/2·3/4)과 선승 수 2(→3, 즉 3선승제 최대 5경기)를 바꿀 수 있음. 제약: 선승 수를 3 으로 올리면 분할이 3:0·3:1·3:2 세 갈래로 늘어 계산량이 두 배가 되고, 승률 1/2 로 두면 대칭성 때문에 답이 곧바로 나와 통찰이 사라짐."
    creative: "(1) 「B 팀이 우승할 확률」 로 뒤집으면 여사건으로 풀 수 있어 전략 선택이 생김 → ★3(I-SC) (2) 「정확히 3경기 만에 우승이 결정될 확률」 로 바꾸면 양 팀 모두를 따져야 해 ★3 (3) 홈·원정에서 승률이 다르게(2/3, 1/2) 주어지면 경기 순서별 곱이 달라져 ★4."
```

```yaml
- id: GN-PROB-108-e10
  page: 108
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    주사위를 던져 3의 배수면 동전을 3번, 4의 배수면 동전을 4번 던질 때(둘 다 아니면 던지지 않음) 앞면이 2번 나올 확률.
  category: "배반 경우 분할 → 각 경우에 독립시행 → 곱셈정리·덧셈정리"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립시행의 확률 (2) — 앞선 시행 결과에 따라 반복 횟수가 달라지는 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    경우 분할을 문제가 직접 지시하므로 학생이 발견할 것은 없고, 각 갈래의 확률(1/3, 1/6)과 그 안의 독립시행 확률을 곱해 더하면 된다. 다만 주사위 눈에서 3의 배수와 4의 배수가 겹치지 않는다는 점, 둘 다 아닌 경우(1·2·5)가 0 으로 빠진다는 점이 T-범위 함정이라 Mₜ=2. 필수 예제 출발점 ★2 유지.
  mechanism_primary: "P(3의 배수)=1/3 · P(4의 배수)=1/6 → 각각 C(3,2)(1/2)^3 · C(4,2)(1/2)^4 → 곱해서 합"
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{16}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/108-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분기 기준(3의 배수·4의 배수 → 소수·제곱수), 동전 횟수(3·4 → 4·5), 요구 앞면 수 2 를 바꿀 수 있음. 제약: 두 기준이 주사위 눈에서 겹치면 배반이 깨져 덧셈정리를 그대로 쓸 수 없으므로 겹치지 않게 고르거나 겹침 처리를 명시해야 함."
    creative: "(1) 「둘 다 아니면 동전을 1번 던진다」 로 바꿔 세 갈래로 만들면 ★3 (2) 동전 대신 주사위를 던지게 하면 p=1/2 가 깨져 계산 부담만 커지므로 질 저하(YELLOW) (3) 앞면이 나온 횟수를 준 뒤 「동전을 3번 던졌을 확률」 을 물으면 조건부확률이 붙어 ★4(111-250 골조)."
```

```yaml
- id: GN-PROB-108-238
  page: 108
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    흰 공 2개·검은 공 3개에서 1개를 꺼내 흰 공이면 동전을 5번, 검은 공이면 3번 던질 때 앞면이 3번 나올 확률.
  category: "배반 경우 분할 → 각 경우에 독립시행 → 곱셈정리·덧셈정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립시행의 확률 (2) — 앞선 시행 결과에 따라 반복 횟수가 달라지는 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    108-e10 의 유제. 두 갈래가 흰 2/5·검은 3/5 로 완전히 나뉘고 빠지는 경우가 없어 e10 보다 오히려 단순하다(Mₜ=1). 통찰 0 이지만 M_total 6 이라 −1 조건(≤5)에 걸리지 않아 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "P(흰)=2/5 · P(검)=3/5 → 각각 C(5,3)(1/2)^5 · C(3,3)(1/2)^3 → 곱해서 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/108-238.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공의 개수(2·3 → 3·2·1 등), 동전 횟수(5·3), 요구 앞면 수 3 을 바꿀 수 있음. 제약: 요구 앞면 수가 짧은 쪽 시행 횟수보다 크면 그 갈래가 0 이 되어 한 항짜리 문제로 내려앉으므로, 두 갈래 모두 살아 있게 (앞면 수 ≤ 작은 횟수) 로 잡아야 함."
    creative: "(1) 공을 2개 동시에 꺼내 색 일치 여부로 분기하면 조합 계산이 앞에 붙어 ★2 상단(110-244 골조) (2) 공을 꺼내고 넣지 않은 채 두 번 꺼내면 종속이 생겨 ★3 (3) 앞면 3번이라는 결과를 주고 흰 공이었을 확률을 물으면 ★4."
```

```yaml
- id: GN-PROB-108-239
  page: 108
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    1~10 이 적힌 공에서 1개를 꺼내 짝수면 주사위를 4번, 9의 약수면 3번 던질 때(둘 다 아니면 던지지 않음) 3의 배수의 눈이 1번 나올 확률.
  category: "배반 경우 분할 → 각 경우에 독립시행 → 곱셈정리·덧셈정리"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립시행의 확률 (2) — 앞선 시행 결과에 따라 반복 횟수가 달라지는 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    108-e10 과 같은 골조이나 두 기준(짝수 5개 · 9의 약수 1·3·9)이 배반인지 확인하고 5·7 이 빠지는 것을 처리해야 해 T-범위 함정이 둘이다. 골조 발견은 없어 통찰 0. 다만 분모가 405 까지 커져 통분 부담이 이 구역에서 가장 크다 — 학생 체감은 ★3 쪽이라 [분류 이슈] 로 기록하고 라벨은 확인체크 출발점 ★2 유지.
    [분류 이슈] 계산 부담(Mₖ 경계)만으로 ★3 을 줄지 보류 — 카탈로그 설계 때 결정.
  tier: star_2
  mechanism_primary: "P(짝수)=1/2 · P(9의 약수)=3/10 → 각각 C(4,1)(1/3)(2/3)^3 · C(3,1)(1/3)(2/3)^2 → 곱해서 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{134}{405}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/108-239.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공의 범위(1~10 → 1~12), 두 분기 기준(짝수·9의 약수 → 3의 배수·소수), 주사위 횟수(4·3), 기준 사건(3의 배수 p=1/3 → 짝수 p=1/2)을 바꿀 수 있음. 제약: 두 기준이 겹치면 배반이 깨지므로 겹치지 않게 고를 것. p=1/3 을 유지하면 분모가 3의 거듭제곱으로 커지니 통분 부담을 줄이려면 p=1/2 로."
    creative: "(1) 두 기준이 겹치는 수(예: 6 은 짝수이자 3의 배수)를 일부러 넣고 「겹치면 주사위를 5번 던진다」 로 세 갈래를 만들면 ★3 (2) 「주사위를 3번 던졌을 확률」 로 역질문하면 ★4 (3) 「3의 배수의 눈이 적어도 1번」 으로 바꾸면 각 갈래에서 여사건을 써야 해 ★3."
```

```yaml
- id: GN-PROB-109-e11
  page: 109
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    동전을 던져 앞면이면 20점, 뒷면이면 10점을 얻을 때 8번 던져 얻은 점수의 합이 100점일 확률.
  category: "점수 합 조건 → 앞면 횟수 방정식 → 독립시행 공식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「점수의 합이 100」 을 「앞면 x 번, 뒷면 (8−x) 번에 대해 20x+10(8−x)=100」 으로 바꿔 x=2 를 확정 — 점수라는 표현을 횟수 방정식으로 옮기는 것이 풀이의 전부"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "독립시행의 확률 (3) — 점수·위치 조건을 성공 횟수 방정식으로 바꾸기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    변환만 하면 C(8,2)(1/2)^8 한 줄이라 계산은 가볍다(Mₖ=1). 이 단원에서 「조건 → 횟수 방정식」 골조가 처음 나오는 자리이고 벤더도 발전 예제로 올려두었다. 통찰 1(EQV d1) 이라 −1 조건(통찰 0)에 걸리지 않으므로 발전 예제 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "20x+10(8−x)=100 → x=2 → C(8,2)(1/2)^8"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{7}{64}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/109-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "배점(20·10), 던진 횟수 8, 목표 점수 100 을 바꿀 수 있음. 제약: 목표 점수는 방정식의 해 x 가 0 이상 n 이하의 정수가 되도록 잡아야 하고(정수해 조건), 두 배점의 차가 목표 점수와 서로소면 해가 없어 확률 0 이 되므로 피할 것. 뒷면 점수를 음수(감점)로 두면 x 의 범위 검토가 한 단계 늘어남."
    creative: "(1) 「점수의 합이 100점 이상」 으로 바꾸면 부등식 → 여러 x 값 → ★3~4(I-MI) (2) 뒷면을 −10점 감점으로 두면 수직선 문항(109-240)과 같은 골조 ★3 (3) 주사위로 바꿔 눈에 따라 배점이 셋 이상이면 독립시행 틀을 벗어나 ★4."
```

```yaml
- id: GN-PROB-109-240
  page: 109
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    원점의 점 P 가 주사위의 6의 약수의 눈이면 +1, 그 외면 −1 만큼 움직일 때, 4번 던져 P 가 좌표 2 에 있을 확률.
  category: "위치 조건 → 양·음 이동 횟수 방정식 → 독립시행 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「P 가 2 에 있다」 를 「+1 이 a 번, −1 이 (4−a) 번이고 a−(4−a)=2」 로 바꿔 a=3 을 확정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "독립시행의 확률 (3) — 수직선 위 점의 위치를 성공 횟수 방정식으로 바꾸기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    109-e11 의 유제로 점수 대신 좌표가 조건이다. 6의 약수(1·2·3·6)가 4개라 p=2/3 을 먼저 세는 단계가 하나 더 붙는다. 변환 통찰 1(EQV d1) 이라 −1 에 걸리지 않고 예제 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "P(6의 약수)=2/3 → a−(4−a)=2 에서 a=3 → C(4,3)(2/3)^3(1/3)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{32}{81}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/109-240.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 사건(6의 약수 p=2/3 → 소수 p=1/2, 3의 배수 p=1/3), 이동 폭(+1·−1 → +2·−1), 던진 횟수 4, 목표 좌표 2 를 바꿀 수 있음. 제약: 목표 좌표와 횟수의 홀짝이 맞아야 정수해가 생긴다(+1·−1 이면 좌표와 횟수가 같은 홀짝). 이동 폭을 비대칭으로 두면 방정식 계수가 달라지므로 해의 정수성 재확인 필요."
    creative: "(1) 「P 가 원점으로 돌아올 확률」 로 바꾸면 홀짝 판정이 먼저 필요해 ★3 (2) 「P 가 한 번이라도 좌표 3 을 지날 확률」 로 바꾸면 경로 조건이 되어 독립시행 틀을 벗어남 ★4~5 (3) 직선 대신 정사각형 둘레로 옮기면 합동식 조건이 붙어 ★3(109-241 골조)."
```

```yaml
- id: GN-PROB-109-241
  page: 109
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    한 변의 길이가 1인 정사각형 ABCD 의 꼭짓점 A 에서 시계 방향으로 도는 점 P 가 동전 앞면이면 1, 뒷면이면 2 만큼 움직일 때, 3번 던져 P 가 A 로 돌아올 확률.
  category: "복귀 조건 → 이동 거리 합이 둘레 4의 배수 → 앞면 횟수 확정"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「A 로 돌아온다」 를 「이동 거리의 합이 둘레 4의 배수」 로 바꾸고, 앞면 a 번일 때 합이 a+2(3−a)=6−a 이며 3 ≤ 6−a ≤ 6 이므로 4 만 가능하다는 범위 제약까지 함께 처리"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "도형 둘레를 도는 점의 복귀 확률 — 이동 거리 합의 배수 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    109-e11 계열의 변환이지만 등식이 아니라 「둘레의 배수」 라는 합동식이고, 가능한 합의 범위를 좁혀 4 하나만 남기는 단계가 더 붙는다(T-범위·T-경계 → Mₜ=2). 그림은 정사각형 배치 확인용이고 골조에는 영향이 없다. 통찰 1(EQV d2)로 예제 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "앞면 a 번이면 이동 합 6−a → 둘레 4의 배수여야 하므로 6−a=4, a=2 → C(3,2)(1/2)^3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3}{8}$'
  answer_source: "답지"
  figure: "crop:fig-109-241.png"
  latex: latex-bank/gn-prob/items/109-241.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "도형(정사각형 둘레 4 → 정오각형 5·정육각형 6), 이동 폭(1·2), 던진 횟수 3 을 바꿀 수 있음. 제약: 그림의 꼭짓점 이름과 회전 방향은 고정하고, 가능한 합의 범위 안에 둘레의 배수가 몇 개 들어오는지 먼저 확인해야 한다 — 배수가 둘 이상 들어오면 경우가 늘어 ★4 가 됨."
    creative: "(1) 던진 횟수를 늘려 배수 후보가 둘 이상 되게 하면 I-MI 가 추가되어 ★4(111-248 골조) (2) 「P 가 B 에 있을 확률」 로 도착점을 바꾸면 합동식이 4k+1 형태가 되어 ★3 유지 (3) 앞면·뒷면 확률이 다른 찌그러진 동전으로 바꾸면 계산만 무거워져 질 저하."
```

### 연습문제 STEP 1

```yaml
- id: GN-PROB-110-242
  page: 110
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    동전을 5번 던질 때 앞면이 나오는 횟수와 뒷면이 나오는 횟수의 차가 1일 확률.
  category: "횟수의 차 조건 → 앞면 횟수 방정식 → 두 경우 합"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「횟수의 차가 1」 을 앞면 a 번에 대한 |2a−5|=1 로 바꾸고 a=2, a=3 두 값을 모두 얻음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "앞면·뒷면 횟수의 관계식을 만족시킬 확률"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    109-e11 의 「조건 → 횟수 방정식」 골조를 차 조건으로 옮긴 것이다. 홀수 번 던지므로 차가 1 인 경우가 반드시 둘이라는 점(한쪽만 세면 절반이 날아감)이 T-부호·T-경계 함정이라 Mₜ=2. 계산은 C(5,2)+C(5,3) 한 줄이라 가볍고 STEP 1 출발점 ★2 유지.
    [분류 이슈] 절댓값 분기를 I-EQV 로 셀지 T-부호 함정으로만 볼지 경계 — 이 파일에서는 변환 골조가 단원의 주 지렛대라 통찰로 셈.
  tier: star_2
  mechanism_primary: "|a−(5−a)|=1 → a=2 또는 3 → {C(5,2)+C(5,3)}(1/2)^5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{5}{8}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/110-242.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "던진 횟수 5(→7·9 는 같은 골조, →6·8 은 차가 짝수라야 해가 생김), 차의 값 1(→3)을 바꿀 수 있음. 제약: 횟수 n 과 차 d 의 홀짝이 같아야 정수해가 있고, d 를 키우면 두 경우가 양 끝으로 밀려 확률이 급히 작아짐. 동전(p=1/2)을 유지해야 두 항을 합쳐 C(n,a) 합으로 정리됨."
    creative: "(1) p 를 1/2 이 아닌 값으로 바꾸면 두 경우의 확률이 달라져 합치기 전에 각각 계산해야 하므로 ★3 (2) 「앞면이 뒷면보다 많을 확률」 로 바꾸면 대칭성으로 즉답 ★3(I-SYM) (3) 「차가 1 이하」 로 바꾸면 짝수 횟수에서 차 0 까지 포함되어 ★3(I-MI)."
```

```yaml
- id: GN-PROB-110-243
  page: 110
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    도로망의 O 에서 출발해 주사위가 1 또는 6이면 오른쪽, 그 외면 위쪽으로 한 칸씩 움직일 때, 4번 던져 그림의 점 P 에 도착할 확률.
  category: "그림에서 도착점 좌표 읽기 → 방향별 횟수 확정 → 독립시행 공식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "도로망 그림(기하 표현)을 「오른쪽 3번·위쪽 1번」 이라는 횟수 표현으로 옮김 — P 의 좌표를 잘못 읽으면 오른쪽 1·위 3 으로 뒤집혀 32/81 이 됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "도로망 위 이동과 독립시행 — 그림의 도착점을 방향별 횟수로 옮기기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그림을 열어 확인한 결과 P 는 O 에서 오른쪽 3칸·위 1칸 지점이다. p(오른쪽)=2/6=1/3 을 세고 C(4,3)(1/3)^3(2/3) 을 계산하면 끝이라 단계·계산 모두 가볍다(M_total 5). 통찰 1(RT d1) 이라 −1 조건(통찰 0)에 걸리지 않아 STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "그림에서 P=(오른쪽 3, 위 1) → p(오른쪽)=1/3 → C(4,3)(1/3)^3(2/3)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{8}{81}$'
  answer_source: "답지"
  figure: "crop:fig-110-243.png"
  latex: latex-bank/gn-prob/items/110-243.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "오른쪽 이동 조건(1 또는 6 → p=1/3; 짝수 → p=1/2; 6의 약수 → p=2/3), 던진 횟수 4 를 바꿀 수 있음. 제약: **그림의 P 좌표는 고정**이므로 던진 횟수를 바꾸면 (오른쪽 칸수 + 위 칸수) = 횟수가 깨진다 — 횟수를 바꾸려면 그림도 함께 바꾸거나 「P 를 지나 Q 까지」 처럼 도착점을 다시 지정해야 함."
    creative: "(1) 도착점을 격자 대각선 위(오른쪽 2·위 2)로 옮기면 C(4,2) 로 항이 커지고 ★2 유지 (2) 「4번 던져 P 에 도착하지 못할 확률」 로 뒤집으면 여사건 판단이 붙어 ★3 (3) 중간에 지나갈 수 없는 막힌 도로를 그리면 경로 조건이 생겨 독립시행 틀을 벗어남 ★4."
```

```yaml
- id: GN-PROB-110-244
  page: 110
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    흰 공 4개·검은 공 3개에서 2개를 동시에 꺼내 색이 다르면 동전을 3번, 같으면 2번 던질 때 앞면이 2번 나올 확률.
  category: "조합으로 분기 확률 계산 → 각 경우에 독립시행 → 곱셈정리·덧셈정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "독립시행의 확률 (2) — 앞선 시행 결과에 따라 반복 횟수가 달라지는 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    108-e10·238 과 같은 분할 골조이고, 앞단의 분기 확률만 조합으로 구한다(색이 다름 4·3/C(7,2), 같음 {C(4,2)+C(3,2)}/C(7,2)). 두 갈래가 여사건 관계라 한쪽만 구하면 되는 점이 유일한 절약 포인트지만 발견이랄 것은 없어 통찰 0. STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "P(색 다름)=4/7 · P(색 같음)=3/7 → 각각 C(3,2)(1/2)^3 · C(2,2)(1/2)^2 → 곱해서 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{9}{28}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/110-244.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공의 개수(4·3 → 5·3·2 색), 꺼내는 개수 2, 동전 횟수(3·2), 요구 앞면 수 2 를 바꿀 수 있음. 제약: 요구 앞면 수가 짧은 쪽 횟수보다 크면 한 갈래가 0 이 되므로 (앞면 수 ≤ 작은 횟수). 꺼내는 개수를 3 으로 늘리면 색 조합이 셋(3:0·2:1·1:2·0:3)으로 늘어 분기 설계를 다시 해야 함."
    creative: "(1) 색이 세 가지인 주머니로 바꾸면 분기가 셋이 되어 ★3 (2) 공을 하나씩 두 번 꺼내되 넣지 않으면 종속이 생겨 ★3 (3) 앞면이 2번 나왔다는 결과를 주고 색이 달랐을 확률을 물으면 조건부확률 ★4(111-250 골조)."
```

### 연습문제 STEP 2

```yaml
- id: GN-PROB-110-245
  page: 110
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    1차·2차 예선 통과가 서로 독립이고 각각의 통과 확률이 2/3, 1/2 일 때, 참가자 5명 중 2명만 본선에 진출할 확률.
  category: "두 관문 통과를 한 번의 시행 성공확률로 압축 → 5명에 독립시행 공식"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「1차와 2차를 모두 통과」 를 독립의 곱 2/3 × 1/2 = 1/3 로 묶어 한 참가자의 성공확률로 압축 — 여기서 비로소 5명을 5회 독립시행으로 볼 수 있음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "독립인 두 관문 통과를 한 번의 시행으로 압축한 독립시행"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 단계 독립 사건을 먼저 하나로 묶는 압축(EQV d1)이 관문이고, 묶고 나면 C(5,2)(1/3)^2(2/3)^3 한 줄이다. 「2명만」 이 정확히 2명(이상이 아님)이라는 T-경계와, 참가자 5명이 서로 독립이라는 암묵 전제가 함정이라 Mₜ=2. STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "한 참가자의 본선 진출 확률 = (2/3)(1/2) = 1/3 → C(5,2)(1/3)^2(2/3)^3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{80}{243}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/110-245.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 통과 확률(2/3·1/2 → 3/4·2/3), 참가자 수 5, 진출 인원 2 를 바꿀 수 있음. 제약: 두 확률의 곱이 1/2·1/3·1/4 처럼 간단한 분수가 되도록 짝을 맞춰야 뒤의 거듭제곱이 정리된다. 관문을 3개로 늘려도 곱 하나만 커질 뿐 골조는 그대로."
    creative: "(1) 「적어도 2명」 으로 바꾸면 여사건 두 항이 붙어 ★3 상단 (2) 1차 통과자만 2차를 본다는 조건부 서술로 바꿔 독립이 깨지면 ★4 (3) 2차 통과 확률을 1차 결과에 따라 다르게 주면 조건부확률 결합 ★4."
```

```yaml
- id: GN-PROB-110-246
  page: 110
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    각 게임에서 다은이가 이길 확률이 2/3 인 3선승제(최대 5번)에서, 다섯 번째 게임에서 다은이가 우승할 확률(비기는 경우 없음).
  category: "마지막 판 고정 → 앞 4판 2승 2패 → 독립시행 공식과 곱"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「다섯 번째 게임에서 우승」 을 「앞 4게임이 2승 2패이고 다섯 번째를 이김」 으로 동치 변환 — 5게임 중 3승을 C(5,3) 으로 세면 4게임 만에 끝난 경우까지 세게 됨"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "선승제 승부의 확률 — 마지막 판 고정 후 앞 판 분배"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    107-237 과 같은 선승제 골조를 3선승·5경기로 키우고 「몇 번째 게임에서 끝나는가」 까지 지정했다. 마지막 판 고정이 핵심이고(EQV d2), 앞 4판이 정확히 2승 2패여야 승부가 아직 안 끝난다는 점이 T-경계라 Mₜ=2. 계산은 C(4,2)(2/3)^2(1/3)^2 × (2/3) 한 줄. STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "앞 4게임 2승 2패 C(4,2)(2/3)^2(1/3)^2 → 다섯 번째 승 (2/3) 을 곱함"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{16}{81}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/110-246.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "승률(2/3 → 3/5·1/2), 선승 수 3, 끝나는 게임 번호 5(→4번째면 앞 3판 2승 1패)를 바꿀 수 있음. 제약: 「k번째에서 우승」 이려면 앞 (k−1) 판에 정확히 (선승 수 −1) 승이 들어가야 하므로 k−1 ≥ 선승 수 −1 을 만족해야 하고, k 가 최대 경기 수를 넘으면 안 됨."
    creative: "(1) 「다섯 번째 게임에서 승부가 날 확률」 로 두 사람 모두를 따지게 하면 ★3 상단(I-MI) (2) 「다은이가 우승할 확률」 전체를 물으면 3:0·3:1·3:2 세 갈래 ★4 (3) 게임마다 승률이 바뀌면(직전 패자가 유리) 독립이 깨져 ★4~5."
```

```yaml
- id: GN-PROB-111-247
  page: 111
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    동전 6개와 주사위 1개를 동시에 던질 때 앞면이 나온 동전의 개수가 주사위 눈의 수보다 클 확률.
  category: "두 독립 시행의 대소 비교 → 한쪽 값으로 경우를 나눠 합산"
  M: {s: 3, k: 3, a: 1, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "주사위 눈 k 로 나눠 P(X>k) 를 여섯 번 누적하는 갈래와, 앞면 개수 j 로 나눠 P(눈<j)=(j−1)/6 을 곱해 합하는 갈래 중 뒤쪽이 항 수가 훨씬 적다 — 집계 축 선택이 계산량을 좌우"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「크다」 는 한 조건이 여섯(또는 일곱) 가지 값 경우를 모두 포함하므로 어느 축으로 나누든 모든 경우를 빠짐없이 더해야 함"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "두 독립 시행 결과의 대소 비교 확률 — 한쪽 값으로 나눈 합산"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    공식 한 번으로 끝나지 않고 두 독립 시행의 결과를 비교해야 해 이 단원에서 단계·계산 부담이 가장 크다(M_total 8). 집계 축을 고르는 전략 분기(SC d1)와 전 경우 합산(MI d2)으로 통찰 2개라 STEP 2 출발점 ★3 에서 +1 하여 ★4. ★4 저노출 게이트는 I-SC 로 충족.
    [분류 이슈] 두 집계 축의 계산량 차이를 I-SC 로 인정할지, 단순 계산 편의로 볼지 경계 — 인정하지 않으면 통찰 1개가 되어 ★3.
  tier: star_4
  mechanism_primary: "앞면 개수 j 로 분할 → P(눈 < j) = (j−1)/6 → sum over j of C(6,j)(1/2)^6 × (j−1)/6"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{43}{128}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/111-247.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "동전 개수 6(→4·5 로 줄이면 항이 줄어 부담이 크게 감소), 주사위 면 수 6, 부등호 방향을 바꿀 수 있음. 제약: 동전 개수와 주사위 면 수가 같아야 두 축 어느 쪽으로도 깔끔히 분할되고, 개수를 8 이상으로 올리면 계산 마찰만 커져 질이 떨어짐(YELLOW)."
    creative: "(1) 「크거나 같을 확률」 로 경계를 옮기면 항이 하나씩 밀려 ★4 유지, 「같을 확률」 로 바꾸면 항이 줄어 ★3 (2) 주사위 2개의 눈의 합과 비교하면 앞단 분포를 한 번 더 구해야 해 ★5 후보 (3) 동전을 찌그러진 동전으로 바꾸면 계산만 무거워져 질 저하."
```

```yaml
- id: GN-PROB-111-248
  page: 111
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    한 변의 길이가 1인 정팔각형을 시계 반대 방향으로 도는 점 P 가 주사위 홀수 눈이면 3, 짝수 눈이면 1 만큼 움직일 때, 6번 던져 P 가 처음 위치로 돌아올 확률.
  category: "복귀 조건 → 이동 거리 합이 둘레 8의 배수 → 가능한 횟수 두 개"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「처음 위치로 돌아온다」 를 「이동 거리 합 3a+(6−a)=2a+6 이 둘레 8의 배수」 라는 합동식으로 바꿈"
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "합의 범위 6 이상 18 이하 안에 8의 배수가 8 과 16 둘이므로 a=1 과 a=5 를 모두 세야 함 — 한 바퀴만 생각하면 a=1 만 남아 절반이 날아감"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "도형 둘레를 도는 점의 복귀 확률 — 이동 거리 합의 배수 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    109-241 의 정사각형 골조를 정팔각형·6회로 키워, 배수 후보가 둘 생기게 만든 문항이다. 합동식 변환(EQV d2)과 두 바퀴 경우 누락(MI d1)이 변별점이고 T-범위·T-경계가 겹쳐 Mₜ=2. 통찰 2개라 +1 후보지만 변환 뒤 계산이 {C(6,1)+C(6,5)}(1/2)^6 한 줄로 M_total 6 에 그쳐 +1 을 보류하고 STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "홀수 눈 a 번이면 이동 합 2a+6 → 8의 배수는 8·16 → a=1 또는 5 → {C(6,1)+C(6,5)}(1/2)^6"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{3}{16}$'
  answer_source: "답지"
  figure: "crop:fig-111-248.png"
  latex: latex-bank/gn-prob/items/111-248.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정다각형 변 수 8(→6·10·12), 이동 폭(3·1 → 2·1·5·2), 던진 횟수 6 을 바꿀 수 있음. 제약: 그림의 정다각형과 회전 방향은 고정하고, 합 2a+6 의 범위 안에 둘레의 배수가 정확히 몇 개 들어오는지 먼저 확인해야 한다 — 하나면 ★3 아래(109-241), 셋 이상이면 ★4. 홀수 눈 확률 1/2 을 유지해야 두 항을 합칠 수 있음."
    creative: "(1) 「P 가 출발점의 맞은편 꼭짓점에 있을 확률」 로 바꾸면 합동식이 8k+4 가 되어 ★3 유지 (2) 시계·반시계를 주사위 눈으로 함께 정하면 부호가 붙어 ★4 (3) 이동 폭을 3·1 이 아닌 서로소가 아닌 값(2·4)으로 두면 도달 가능한 꼭짓점이 제한돼 범위 논증이 먼저 필요 ★4."
```

### 연습문제 실력 UP

```yaml
- id: GN-PROB-111-249
  page: 111
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제"
  summary: |
    한 면에 A, 다른 면에 B 가 적힌 카드에 대해 「동전을 두 번 던져 앞면이 2번이면 카드를 한 번 뒤집고, 0번 또는 1번이면 그대로 둔다」 를 5번 반복할 때 처음 A 에서 B 가 보일 확률을 p 라 하면 128p 의 값.
  category: "1회 시행의 뒤집기 확률 압축 → B 가 보임 = 뒤집은 횟수 홀수 → 홀수 항 합"
  M: {s: 3, k: 3, a: 1, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "복잡해 보이는 1회 시행을 「확률 1/4 로 뒤집고 3/4 로 그대로」 라는 한 번의 베르누이 시행으로 압축"
    - step: 2
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "카드 면이 2주기로 바뀐다는 규칙을 찾아 「B 가 보인다」 를 「5번 중 뒤집은 횟수가 홀수」 로 환원 — 마지막 상태만 보는 대신 횟수의 홀짝으로 옮기는 것이 핵심"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "상태가 2주기로 바뀌는 반복 시행 — 성공 횟수의 홀짝으로 환원"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    시행 안에 시행이 중첩돼 있어 먼저 1회 뒤집기 확률 1/4 로 압축해야 하고(EQV d1), 그다음 상태 추적 대신 홀짝 주기로 옮겨야 한다(PD d2). 남은 계산은 k=1,3,5 세 항 합이라 분모 4^5 통분 부담이 크다. 실력 UP + 평가원 기출 출발점 ★4 이고 통찰 2개라 +1 후보지만, SC/VF/SYM/XU 가 없고 novelty_score 0 이라 ★5 게이트를 못 넘어 ★4 확정. ★4 저노출 게이트는 I-PD 로 충족.
  tier: star_4
  mechanism_primary: "1회 뒤집기 확률 1/4 → B 가 보임 = 뒤집은 횟수 홀수 → sum over odd k of C(5,k)(1/4)^k(3/4)^(5−k) → 128 배"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$62$'
  answer_source: "답지"
  figure: "crop:fig-111-249.png"
  latex: latex-bank/gn-prob/items/111-249.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "1회 시행 안의 동전 횟수 2(→3, 뒤집기 확률이 1/8 로 바뀜), 뒤집기 조건(앞면 2번 → 앞면 1번 이하), 반복 횟수 5(→4·6), 마지막 배수 128 을 바꿀 수 있음. 제약: 마지막에 곱하는 수는 답이 정수가 되도록 분모(2의 거듭제곱)의 배수로 잡아야 하고, 뒤집기 확률이 1/2 이 되면 홀수 항 합이 곧바로 1/2 이라 문제가 무너짐."
    creative: "(1) 카드를 3면 회전(A→B→C)으로 바꾸면 주기 3 이라 나머지 분류가 필요해 ★5 후보(I-PD 심화) (2) 「처음과 같은 A 가 보일 확률」 로 뒤집으면 짝수 항 합이라 ★4 유지 (3) 홀수 항 합을 {1−(3/4−1/4)^5}/2 대칭 항등식으로 유도하게 유도문을 붙이면 I-SYM 이 추가되어 ★5."
```

```yaml
- id: GN-PROB-111-250
  page: 111
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    주사위 2개의 눈이 같으면 동전을 2번, 다르면 4번 던진다. 앞면이 나온 횟수와 뒷면이 나온 횟수가 같을 때 동전을 2번 던졌을 확률.
  category: "결과 사건이 주어짐 → 조건부확률로 원인 시행 역추적"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「앞면 횟수 = 뒷면 횟수」 를 각 갈래에서 「2번이면 1앞 1뒤, 4번이면 2앞 2뒤」 라는 구체 횟수로 바꿈"
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "결과(앞뒤 횟수가 같음)가 주어진 뒤 원인(2번 던졌음)을 되짚는 조건부확률 단원 도구를 독립시행과 결합 — 두 갈래의 결합확률을 각각 구해 분모로 더하는 구조를 스스로 세워야 함"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "독립시행 결과가 주어졌을 때의 조건부확률 — 원인 시행 역추적"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    이 범위에서 유일하게 조건부확률과 독립시행이 겹치는 문항이다. 두 갈래의 결합확률 (1/6)C(2,1)(1/2)^2 와 (5/6)C(4,2)(1/2)^4 를 각각 구해 분모로 합치고 앞쪽을 나누는 구조를 스스로 세워야 한다(XU d2). 앞면=뒷면 조건을 갈래별 횟수로 바꾸는 단계(EQV d1)가 먼저 온다. 실력 UP 출발점 ★4 이고 통찰 2개라 +1 후보지만 통찰 3개 조건을 못 채워 ★5 게이트 미충족 → ★4.
    [분류 이슈] 조건부확률을 별개 단원으로 보아 I-XU 로 셀지, 같은 과목 내 결합이라 I-BW 로 셀지 경계 — 어느 쪽이든 통찰 수와 ★ 는 같음.
  tier: star_4
  mechanism_primary: "P(눈 같음)=1/6 → 1앞1뒤, P(눈 다름)=5/6 → 2앞2뒤 → 두 결합확률의 합을 분모로 앞쪽을 나눔"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{4}{19}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/111-250.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "동전 횟수(2·4 → 2·6, 4·6), 분기 기준(눈이 같음 p=1/6 → 눈의 합이 짝수 p=1/2)을 바꿀 수 있음. 제약: 양쪽 동전 횟수가 모두 짝수여야 「앞면 수 = 뒷면 수」 가 두 갈래에서 다 가능하고, 홀수를 섞으면 그 갈래가 0 이 되어 조건부확률이 1 로 무너진다. 분기 확률을 1/2 로 두면 분모가 단순해져 ★3 쪽으로 내려감."
    creative: "(1) 「동전을 4번 던졌을 확률」 로 물으면 여사건 한 줄이라 ★4 유지 (2) 결과 조건을 「앞면이 2번」 으로 바꾸면 두 갈래 모두 살아 있으면서 대칭이 깨져 ★4 (3) 주사위 3개로 늘려 분기를 셋으로 만들면 분모 항이 셋이 되어 ★5 후보."
```

## 표본 판정 요약 (18문)

- ★ 분포: ★1 0 · ★2 8 · ★3 7 · ★4 3 · ★5 0
- 통찰형 12 · 절차형 6 · premium 0
- 통찰 유형 분포(총 15개): I-EQV 8 · I-MI 2 · I-RT 1 · I-SC 1 · I-PD 1 · I-XU 1 (depth 1 이 9개 · depth 2 가 6개)
- type_hint 상위: 「독립시행의 확률 (2) — 반복 횟수가 달라지는 경우」 4 · 「도형 둘레를 도는 점의 복귀 확률」 2 · 「선승제 승부의 확률 — 마지막 판 고정」 2 · 「점수·위치 조건을 성공 횟수 방정식으로」 2 · 「기본 공식과 여사건」 2
- 그림: 4문(`crop:fig-109-241.png` · `crop:fig-110-243.png` · `crop:fig-111-248.png` · `crop:fig-111-249.png`) — 이 중 110-243 만 그림을 읽어야 도착점의 방향별 횟수가 정해지고, 나머지 셋은 발문에 도형 구조가 모두 서술되어 있어 그림은 배치 확인용이다.
- 대상층: 중하위권 6 · 중위권 7 · 중상위권 3 · 상위권 2

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-PROB-108-239 | 확인체크인데 통분 분모가 405 까지 커져 이 구역에서 계산 부담이 가장 큼. 통찰 0 이라 산식상 ★2 지만 학생 체감은 ★3 쪽. Mₖ 를 2 로 볼지 3 으로 볼지 경계 | ★2 / ★3 |
| GN-PROB-110-242 | 「횟수의 차가 1」 의 절댓값 분기를 I-EQV 통찰로 셀지 T-부호 함정으로만 볼지 경계. 이 파일에서는 단원의 주 지렛대(조건 → 횟수 방정식)와 같은 골조라 통찰로 셈 | ★2 |
| GN-PROB-111-247 | 두 집계 축(주사위 눈 기준 / 앞면 개수 기준)의 계산량 차이를 I-SC 로 인정해 +1 했음. 인정하지 않으면 통찰 1개가 되어 STEP 2 출발점 ★3 | ★3 / ★4 |
| GN-PROB-111-250 | 조건부확률과 독립시행의 결합을 I-XU(단원 경계)로 볼지 I-BW(역방향 추적)로 볼지 경계. 어느 쪽이든 통찰 수와 ★ 는 동일 | ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 「반복 횟수가 앞선 시행 결과에 따라 달라지는 독립시행」(108-e10·238·239·110-244 — 이 범위 최다 4문, 배반 분할 + 곱셈·덧셈정리가 고정 골조) ② 「조건을 성공 횟수 방정식으로 바꾸는 독립시행」(109-e11·240·110-242 — 점수·좌표·횟수 차가 모두 같은 일차방정식 골조) ③ 「도형 둘레 복귀 — 합동식 조건」(109-241·111-248 — ②와 달리 등식이 아니라 배수 조건이고 해가 여럿일 수 있어 별도 유형이 맞다) ④ 「선승제 승부 — 마지막 판 고정」(107-237·110-246) ⑤ 「독립시행 + 조건부확률」(111-250).
- **통합해도 될 유형**: 개념원리의 예제 제목 「독립시행의 확률 (1)/(2)/(3)」 은 번호일 뿐 골조를 구분하지 못하므로 카탈로그에서는 쓰지 말 것. 107-e9 와 107-236 의 「기본 공식 + 여사건」 은 ①·②의 하위 난이도 입구로 흡수해도 되고, 110-243(도로망)은 그림 표현 전환만 다를 뿐 ②와 같은 골조라 ②의 변형으로 묶을 수 있다.
- **base ★ 제안**: ① ★2 · ② ★2~3 · ③ ★3 · ④ ★3 · ⑤ ★4. 111-247(대소 비교)은 이 단원보다 「확률의 덧셈정리·여사건」 카탈로그 쪽에 두는 편이 자연스럽다.
