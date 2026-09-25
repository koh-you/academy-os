---
name: mechanism-데이터-GN-PROB-22
description: 개념원리 확률과 통계 22 모비율의 추정(1/1 · 186~189쪽 15문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 확률과 통계 (22개정) · 전사본 latex-bank/gn-prob
  section: 22 모비율의 추정
  unit_code: GN-PROB-22
  part: "1/1"
  extract_range: "186~189쪽 · 186-e10~189-412"
  total_problems: 15
  unit_total: 15
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·level·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 라벨링된 통찰의 effective_depth 평균이고 통찰이 없으면 0.00. insight_type 은 insights 가 비어 있으면 절차형, 하나라도 있으면 통찰형. anchor_status 는 null. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-prob/items/<id>.tex
  image_source: latex-bank/gn-prob/figures/ (crops.json)
---

# 개념원리 확률과 통계 · 22 모비율의 추정 (1/1) 정독 데이터 (v1.0)

186~189쪽 15문항 전수다. 구역은 「필수·발전 예제」 6문(필수 예제 2 + 딸린 확인체크 유제 4) · 「연습문제 STEP 1」 4문 · 「연습문제 STEP 2」 3문 · 「연습문제 실력 UP」 2문이고, 그림 문항은 없다. 단원 이름은 모비율의 추정이지만 연습문제 절반은 20·21단원에서 이어진 모평균의 신뢰구간이고, 두 계열이 같은 공식 골조(중심 ± z·표준오차)를 공유한다는 점이 이 범위의 뼈대다.

벤더 신호 읽기: 필수 예제(tag 「필수」)는 ★2 출발, STEP 1 은 ★2, STEP 2 는 ★3, 실력 UP 은 ★4 출발로 두었다. **확인체크(400~403)는 「개념원리 익히기」 통번호가 아니라 바로 앞 필수 예제에 딸린 유제**여서 개념 확인용 ★1 이 아니라 해당 예제와 같은 출발점(★2)으로 보고, 계산·단계가 눈에 띄게 가벼운 문항만 −1 했다. 같은 이유로 「통찰 0 · M_total ≤ 5 → −1 후보」는 실제 풀이가 두세 줄로 끝나는 M_total 4 문항(186-401 · 188-407)에만 적용했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변형)를 채웠다. 이 단원의 숫자 변형에서 가장 자주 깨지는 제약은 **근호 안이 완전제곱 소수로 떨어지는지**와 **최솟값 문항의 경계(등호 성립 지점)가 정수인지** 둘이다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-PROB-186-e10
  page: 186
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    고등학생 300명 중 225명이 급식에 만족한다고 응답. 모비율 p 에 대한 신뢰도 95 % 의 신뢰구간(P(|Z|≤1.96)=0.95).
  category: "표본비율 계산 → 모비율 신뢰구간 공식 대입"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모비율에 대한 신뢰구간 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표본비율 0.75 를 먼저 구하고 공식 p̂ ± 1.96·√(p̂(1−p̂)/n) 에 그대로 넣는 이 단원의 기본 골조.
    근호 안이 0.000625 로 떨어져 0.025 → 반폭 0.049 까지 네 단계 산술이 필요하다.
    필수 예제 출발 ★2. 통찰 0·M_total 5 로 −1 후보이나 계산이 두세 줄로 끝나지 않아 유지.
  tier: star_2
  mechanism_primary: "p̂=225/300=0.75 → 반폭 1.96·√(p̂(1−p̂)/300)=0.049 → 0.701≤p≤0.799"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0.701\le p\le 0.799$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/186-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표본 크기 n 과 만족 인원을 바꿀 수 있음. 제약: p̂(1−p̂)/n 이 완전제곱 소수로 떨어져야 답이 깔끔하다(300·0.75 → 0.025² · 400·0.36 → 0.024² · 2500·0.5 → 0.01²). 신뢰도는 발문에 z 값이 주어진 95 %(1.96)·99 %(2.58) 만 사용."
    creative: "(1) 신뢰도만 99 % 로 바꾸기(★2 유지) (2) 구간 대신 구간의 길이·오차의 한계를 묻기(★1~2 · 188-407 골조) (3) 구간을 주고 n 을 역산하게 하기(★2 · 187-e11 골조) (4) 특정 값이 신뢰구간에 들어가는지 판정하게 하면 T-경계가 붙어 ★3."
```

```yaml
- id: GN-PROB-186-400
  page: 186
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    400가구 중 144가구가 시청. 전체 가구의 시청률 p 에 대한 신뢰도 99 % 의 신뢰구간(P(|Z|≤2.58)=0.99).
  category: "표본비율 계산 → 모비율 신뢰구간 공식 대입(99 %)"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모비율에 대한 신뢰구간 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    186-e10 과 같은 골조의 유제. 신뢰도만 99 % 로 바뀌어 z 값이 2.58 이 된다.
    0.36·0.64=0.2304 → /400 → √ → 0.024 → ×2.58 로 소수 산술이 네 단계라 −1 을 적용하지 않았다.
    확인체크지만 개념원리 익히기 통번호가 아니라 필수 예제의 유제여서 출발점을 ★2 로 둠.
  tier: star_2
  mechanism_primary: "p̂=144/400=0.36 → 반폭 2.58·√(0.36·0.64/400)=0.06192 → 0.29808≤p≤0.42192"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0.29808\le p\le 0.42192$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/186-400.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "가구 수와 시청 가구 수를 바꿀 수 있음. 제약: p̂(1−p̂)/n 의 근호가 떨어지도록 n 을 제곱수·100 의 배수로 잡고 p̂ 을 0.36·0.64·0.16 처럼 소수 제곱이 되는 값으로. 답의 자릿수가 길어지므로 반올림 지시 여부를 원문과 맞춘다."
    creative: "(1) 95 % 와 99 % 두 신뢰구간을 모두 구해 길이를 비교하게 하기(★2) (2) 시청률이 40 % 를 넘는다고 할 수 있는지 판정(★3 · I-EQV) (3) 같은 표본비율에서 구간의 길이를 절반으로 줄이려면 표본을 몇 배로 늘려야 하는지(★3 · 189-411 골조)."
```

```yaml
- id: GN-PROB-186-401
  page: 186
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    2500명 중 1250명이 A 브랜드를 선호. 선호 비율 p 에 대한 신뢰도 95 % 의 신뢰구간.
  category: "표본비율 계산 → 모비율 신뢰구간 공식 대입"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모비율에 대한 신뢰구간 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    p̂=0.5 이라 근호 안이 0.25/2500=0.0001 → 0.01 로 한 줄에 끝난다.
    반폭 0.0196 을 0.5 에 더하고 빼는 두 줄짜리 계산으로 통찰도 함정도 없다.
    확인체크 유제 출발 ★2 에서 통찰 0·M_total 4 로 −1 → ★1.
  tier: star_1
  mechanism_primary: "p̂=1250/2500=0.5 → 반폭 1.96·√(0.25/2500)=0.0196 → 0.4804≤p≤0.5196"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0.4804\le p\le 0.5196$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/186-401.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n 은 제곱수(2500·1600·900)로, 선호 인원은 p̂ 이 0.5·0.6·0.8 이 되게. 제약: p̂ 이 0.5 에서 멀어지면 근호가 안 떨어져 계산이 무거워지고 ★2 로 올라간다."
    creative: "(1) 선호도가 절반이라고 볼 수 있는지 판정으로 바꾸기(★2) (2) 표본을 4배로 늘렸을 때 구간의 길이 변화(★2~3) (3) 신뢰구간의 길이만 묻기(★1 유지 · 188-407 골조)."
```

```yaml
- id: GN-PROB-187-e11
  page: 187
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    성인 n(n≥25)명 중 1/5 이 알레르기 반응. 모비율 p 의 신뢰도 95 % 신뢰구간이 0.1216≤p≤0.2784 일 때 n 의 값.
  category: "주어진 신뢰구간의 반폭 → 표본 크기 역산"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "신뢰구간이 주어질 때 표본의 크기 구하기(모비율)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조사 대상의 1/5 → p̂=0.2 를 먼저 읽고, 주어진 구간의 양 끝에서 반폭 0.0784 를 뽑아 공식과 등치시킨다.
    1.96·0.4/√n=0.0784 → √n=10 의 역대입이라 미정계수 표준 절차이고 통찰로 카운트하지 않았다.
    필수 예제 ★2 유지. 구간의 중심이 p̂ 과 일치하는지 확인하는 검산 습관이 이 유형의 핵심.
  tier: star_2
  mechanism_primary: "p̂=1/5=0.2 → 주어진 구간의 반폭 0.0784 = 1.96·√(0.2·0.8/n) → √n=10 → n=100"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$100$"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/187-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "p̂(0.2·0.25·0.8)과 n(100·64·400)을 함께 정해 구간을 거꾸로 만들면 된다. 제약: √(p̂(1−p̂)) 과 √n 이 함께 떨어져야 하고, 구간의 중심이 반드시 p̂ 과 같아야 하며 n 은 발문의 하한(n≥25) 이상이어야 한다."
    creative: "(1) n 대신 표본비율 p̂ 을 묻기(★2 · 중심 읽기) (2) 구간의 한쪽 끝만 주고 나머지를 묻기(★2~3) (3) 신뢰도를 미지로 두고 z 값을 역산(★3 · 표준정규분포표 필요) (4) 구간의 길이만 주면 중심 정보가 사라져 n 만 결정되는 형태(★2 · 187-403 골조)."
```

```yaml
- id: GN-PROB-187-402
  page: 187
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    회원 n(n≥25)명 중 80 % 가 만족. 만족도 p 의 신뢰도 99 % 신뢰구간이 0.671≤p≤0.929 일 때 n 의 값.
  category: "주어진 신뢰구간의 반폭 → 표본 크기 역산(99 %)"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "신뢰구간이 주어질 때 표본의 크기 구하기(모비율)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    187-e11 과 같은 골조의 유제. 퍼센트로 준 표본비율을 0.8 로 옮기는 한 단계가 앞에 붙는다.
    반폭 0.129 = 2.58·0.4/√n → √n=8 로 떨어져 계산 부담은 예제와 같다.
    확인체크 유제 출발 ★2 유지(통찰 0 이나 M_total 6 이라 −1 미적용).
  tier: star_2
  mechanism_primary: "p̂=0.8 → 반폭 0.129 = 2.58·√(0.8·0.2/n) → √n=8 → n=64"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$64$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/187-402.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "만족 비율(80 %·75 %·60 %)과 n(64·100·144)을 짝지어 구간을 역으로 만든다. 제약: 2.58·√(p̂(1−p̂))/√n 이 소수 세 자리에서 끝나야 원문처럼 깔끔한 구간이 된다."
    creative: "(1) 퍼센트 대신 인원 수로 주기(★2 · 계산 한 단계 추가) (2) 같은 표본에서 95 % 구간을 구하게 하기(★2) (3) 만족도가 70 % 이상이라고 할 수 있는지 판정(★3 · I-EQV) (4) n 을 묻는 대신 신뢰도를 묻게 하면 z 값 역산이라 ★3."
```

```yaml
- id: GN-PROB-187-403
  page: 187
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    고등학생 n(n≥20)명 중 70 % 가 수분 섭취량 1 L 이하. 신뢰도 99 %(P(|Z|≤3)=0.99) 신뢰구간의 길이가 0.2 이하가 되는 n 의 최솟값.
  category: "신뢰구간의 길이 부등식 → 표본 크기의 최솟값"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "신뢰구간의 길이 조건으로 표본의 크기 정하기(모비율)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    길이 = 2·3·√(0.7·0.3/n) 을 0.2 이하로 두는 부등식 한 줄. 양변 제곱에서 n ≥ 900·0.21=189.
    등호가 정수 189 에서 정확히 성립해 최솟값이 189 로 떨어진다(T-경계 1개).
    이 구역 확인체크 중 계산·단계가 가장 무겁지만 통찰이 없어 ★2 유지.
  tier: star_2
  mechanism_primary: "길이 2·3·√(0.21/n) ≤ 0.2 → 36·0.21/n ≤ 0.04 → n ≥ 189 → 최솟값 189"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$189$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/187-403.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표본비율(0.7·0.5·0.8)·z 값(2·3)·길이 한계(0.2·0.1·0.05)를 바꿀 수 있음. 제약: 4z²p̂(1−p̂)/L² 이 정수로 떨어지면 최솟값이 그 값, 아니면 올림해야 하므로 어느 쪽을 의도했는지 정하고 낸다."
    creative: "(1) 길이 대신 오차의 한계(반폭) 조건으로 바꾸기(★2 · 상수만 절반) (2) 신뢰도를 95 % 로 낮추고 같은 길이를 요구(★2) (3) 표본 크기를 주고 만족 가능한 최대 신뢰도를 묻기(★3 · I-BW) (4) 모비율을 모를 때 p̂(1−p̂) ≤ 1/4 로 최악을 잡는 형태로 바꾸면 ★4."
```

### 연습문제 STEP 1

```yaml
- id: GN-PROB-188-404
  page: 188
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    400가구의 전력사용량 표본평균 300 kWh·표준편차 50 kWh. 모평균 m 의 신뢰도 95 % 신뢰구간에 속하는 자연수의 개수.
  category: "모평균 신뢰구간 계산 → 구간 안 자연수 세기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모평균의 신뢰구간과 구간에 속하는 정수의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    300 ± 1.96·50/20 → 295.1 ≤ m ≤ 304.9 를 구한 뒤 양 끝이 정수가 아님을 이용해 296~304 를 센다.
    끝점 처리(295.1 이므로 295 는 제외)가 유일한 함정이고 개수는 304−296+1=9.
    STEP 1 출발 ★2 유지. 구간 계산과 개수 세기가 각각 표준 절차라 통찰은 없다.
  tier: star_2
  mechanism_primary: "표준오차 50/√400=2.5 → 295.1≤m≤304.9 → 구간 안 자연수 296~304 → 9개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$9$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/188-404.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표본 크기는 제곱수(400·100·625), 표준편차는 √n 으로 나눠떨어지는 값으로. 제약: 끝점이 정수가 되면 포함 여부가 갈려 답이 2개 달라지므로 소수 끝점이 나오게 잡는다(반폭 4.9)."
    creative: "(1) 자연수 대신 짝수·5의 배수 개수를 묻기(★3 · 세기 한 단계 추가) (2) 구간의 길이를 묻기(★1) (3) 개수를 주고 표본 크기를 역산(★3 · I-BW) (4) 모비율 버전으로 옮기면 소수 구간이라 개수 세기가 성립하지 않으므로 길이·경계 문항으로 바꿔야 한다."
```

```yaml
- id: GN-PROB-188-405
  page: 188
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["수능 기출"]
  category_type: "연습문제 STEP 1"
  summary: |
    N(m, 5²) 에서 크기 49 인 표본의 표본평균이 x̄. 모평균 m 의 95 % 신뢰구간이 a ≤ m ≤ (6/5)a 일 때 x̄ 의 값. 5지선다.
  category: "신뢰구간의 길이·중심 → 끝점 비 조건으로 표본평균 결정"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "끝점이 a 와 (6/5)a 라는 조건을 길이 (6/5)a−a=a/5 = 2·1.96·5/7 로 옮겨 a 를 먼저 확정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "신뢰구간의 양 끝 값이 비로 주어질 때 표본평균 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 끝점을 각각 x̄∓1.4 로 놓고 연립해도 되지만, 길이가 a/5 라는 동치 변환을 쓰면 a=14 가 한 줄에 나온다.
    이후 x̄ = a + 1.4 = 15.4(②). 표현을 옮기는 착안 1개(EQV d1)를 라벨링.
    STEP 1·수능 기출 출발 ★2 유지(통찰 1개 d1 이라 +1 조건 미충족).
  tier: star_2
  mechanism_primary: "반폭 1.96·5/7=1.4 → 길이 a/5=2.8 → a=14 → x̄=a+1.4=15.4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/188-405.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "σ 와 n 을 √n 이 σ 를 나누게 짝지어(5²·49 → 반폭 1.4) 끝점 비(6/5·5/4·4/3)를 바꾼다. 제약: 비 k 에 대해 a=반폭·2/(k−1) 이 유리수여야 하고 x̄ 이 선택지 자릿수(소수 한 자리)로 떨어져야 한다."
    creative: "(1) a 나 구간의 길이를 묻기(★2 유지) (2) 끝점 비 대신 두 끝점의 곱·합을 주기(★3 · 연립 한 단계 추가) (3) σ 를 미지로 두고 n 과 비를 주면 미지수 2개라 ★3 (4) 모비율 신뢰구간으로 옮기면 p̂ 이 중심이므로 같은 골조가 그대로 성립(★2~3)."
```

```yaml
- id: GN-PROB-188-406
  page: 188
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    연비의 모표준편차가 1 km/L. 신뢰도 99 % 추정에서 모평균 m 과 표본평균 x̄ 의 차가 0.43 이하가 되도록 하는 표본 크기의 최솟값.
  category: "오차의 한계 부등식 → 표본 크기의 최솟값"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "오차의 한계 조건으로 표본의 크기 정하기(모평균)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    |m−x̄| 의 최대가 오차의 한계 2.58·σ/√n 임을 알면 2.58/√n ≤ 0.43 → √n ≥ 6 한 줄.
    부등호 방향(√n 이 분모)과 「적어도」의 최솟값 처리가 유일한 함정이다(T-경계 1개).
    STEP 1 출발 ★2 유지. 통찰 없이 공식 한 줄이지만 문자 σ·n 이 남아 M_total 6.
  tier: star_2
  mechanism_primary: "오차의 한계 2.58·1/√n ≤ 0.43 → √n ≥ 6 → n ≥ 36 → 36대"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$36$대"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/188-406.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "σ(1·2·0.5)와 오차 한계(0.43·0.5·0.2)를 z·σ/한계 가 정수가 되게 짝짓는다(2.58/0.43=6). 제약: 비가 정수가 아니면 올림이 필요해 최솟값 판정이 한 단계 늘고 함정이 커진다."
    creative: "(1) 표본 크기를 주고 오차의 한계를 묻기(★1~2 · 역방향) (2) 신뢰도를 95 % 로 바꾸기(★2) (3) 오차를 절반으로 줄이려면 표본이 몇 배 필요한지(★3 · 189-411 골조) (4) 모비율 버전으로 옮기면 p̂(1−p̂) 가 추가돼 ★3(189-410 골조)."
```

```yaml
- id: GN-PROB-188-407
  page: 188
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    시민 600명 중 360명이 찬성. 찬성 비율을 신뢰도 95 % 로 추정한 신뢰구간의 길이.
  category: "표본비율 → 신뢰구간의 길이 공식 대입"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모비율 신뢰구간의 길이 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    p̂=0.6 을 구하고 길이 2·1.96·√(0.24/600) 에 넣으면 근호가 0.0004 → 0.02 로 바로 떨어진다.
    구간의 양 끝을 구할 필요가 없다는 점만 알면 두 줄로 끝나고 함정도 없다.
    STEP 1 출발 ★2 에서 통찰 0·M_total 4 로 −1 → ★1.
  tier: star_1
  mechanism_primary: "p̂=360/600=0.6 → 길이 2·1.96·√(0.6·0.4/600)=2·1.96·0.02=0.0784"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$0.0784$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/188-407.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표본 크기와 찬성 인원을 p̂(1−p̂)/n 이 완전제곱이 되게 잡는다(600·0.6 → 0.02²). 제약: 길이는 반폭의 2배이므로 반폭 문항과 상수 2 를 혼동하지 않게 문구를 명확히 한다."
    creative: "(1) 길이 대신 신뢰구간 자체를 묻기(★2) (2) 같은 표본에서 99 % 로 바꾸면 길이가 몇 배인지(★2 · 비 계산) (3) 길이를 주고 표본 크기를 역산(★2 · 187-403 골조) (4) 길이를 절반으로 만드는 표본 크기(★3)."
```

### 연습문제 STEP 2

```yaml
- id: GN-PROB-188-408
  page: 188
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    모표준편차 σ 인 모집단에서, 크기 4·신뢰도 95 %(P(|Z|≤2)) 의 신뢰구간이 a≤m≤b, 크기 n·신뢰도 99 %(P(|Z|≤3)) 의 신뢰구간이 c≤m≤d. b−a=2(d−c) 인 n 의 값.
  category: "두 신뢰구간의 길이를 σ·n 식으로 표현 → σ 소거 후 n"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "b−a·d−c 라는 끝점 조건을 각각 길이 2z·σ/√n 으로 옮겨, 공통인 σ 가 소거되고 n 만 남는 형태로 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 신뢰구간의 길이 비교로 표본의 크기 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    b−a=2·2·σ/√4=2σ, d−c=2·3·σ/√n=6σ/√n 으로 옮기면 2σ=12σ/√n → √n=6 → n=36.
    끝점 기호를 길이로 바꾸고 σ 가 약분된다는 것을 보는 동치 변환 1개(EQV d1)가 전부이고 계산은 가볍다.
    STEP 2 출발 ★3 유지(통찰 1개라 −1 조건 미충족). [분류 이슈] M_total 5·계산 한 줄이라 체감은 ★2 쪽.
  tier: star_3
  mechanism_primary: "b−a=2·2·σ/2=2σ, d−c=6σ/√n → 2σ=2·(6σ/√n) → √n=6 → n=36"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$36$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/188-408.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫 표본 크기(4·9·16)·두 z 값(2·3 또는 1.96·2.58)·길이 배수(2배·3배·1/2배)를 바꾼다. 제약: √n = (둘째 z/첫째 z)·√(첫 표본 크기)·(길이 배수) 가 정수가 되어야 n 이 자연수로 떨어진다."
    creative: "(1) n 대신 길이의 비를 묻기(★2) (2) 두 신뢰도를 같게 두고 크기만 다르게(★2 · σ·z 모두 소거) (3) σ 를 구하게 한 뒤 구간을 만들게 하기(★3 · 189-409 골조) (4) 모비율 두 표본으로 옮기면 p̂ 이 서로 달라 소거가 안 되므로 조건을 하나 더 줘야 하고 ★4."
```

```yaml
- id: GN-PROB-189-409
  page: 189
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["수능 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    N(m, σ²) 에서 16개 표본으로 구한 95 % 신뢰구간이 746.1≤m≤755.9. n 개 표본의 99 % 신뢰구간 a≤m≤b 에서 b−a ≤ 6 이 되는 자연수 n 의 최솟값. 5지선다.
  category: "주어진 구간의 길이로 σ 역산 → 다른 신뢰도의 길이 부등식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "주어진 신뢰구간을 길이 9.8 = 2·1.96·σ/4 라는 σ 결정식으로 옮겨, 두 문장을 σ 하나로 잇는다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "신뢰구간에서 σ 를 역산해 다른 신뢰구간의 길이 조건 풀기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    1단계에서 길이 755.9−746.1=9.8=0.98σ → σ=10, 2단계에서 2·2.58·10/√n ≤ 6 → √n ≥ 8.6.
    n ≥ 73.96 이라 최솟값은 74(②). 소수 경계를 올림하는 처리가 함정이다(T-경계 1개).
    STEP 2·수능 기출 출발 ★3 유지. 두 문장을 σ 로 잇는 동치 변환 1개를 라벨링.
  tier: star_3
  mechanism_primary: "길이 9.8=2·1.96·σ/4 → σ=10 → 2·2.58·10/√n ≤ 6 → √n ≥ 8.6 → n ≥ 73.96 → 74"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/189-409.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "첫 표본 크기(16·25·36)와 구간 끝점으로 σ 가 정수(10·8·5)가 되게 맞추고, 둘째 길이 한계(6·4·5)를 바꾼다. 제약: √n ≥ 2z σ/한계 의 값이 정수가 아니어야 올림 판정이 살아나고, 선택지는 그 올림값 주변으로 잡는다."
    creative: "(1) σ 자체를 묻기(★2) (2) 둘째 조건을 길이가 아니라 오차의 한계로 주기(★3 유지) (3) 첫 구간의 신뢰도를 미지로 두기(★4 · z 역산) (4) 모평균 대신 모비율로 옮기면 p̂ 이 중심에서 읽히므로 σ 대신 p̂ 을 역산하는 같은 2단 골조(★3)."
```

```yaml
- id: GN-PROB-189-410
  page: 189
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    주민 n(n≥50)명의 찬성률이 90 %. 신뢰도 95 %(P(|Z|≤2)) 추정에서 모비율과 표본비율의 차가 0.5 % 이하가 되도록 하는 n 의 최솟값.
  category: "모비율 오차의 한계 부등식 → 표본 크기의 최솟값"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "오차의 한계 조건으로 표본의 크기 정하기(모비율)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    |p−p̂| 의 한계가 2·√(0.9·0.1/n) 임을 쓰고 0.5 % 를 0.005 로 옮겨 0.6/√n ≤ 0.005 → √n ≥ 120.
    퍼센트를 소수로 바꾸는 단계(T-단위)와 최솟값 경계(T-경계) 두 함정이 겹쳐 Mₜ=2.
    188-406 의 모비율판이지만 p̂(1−p̂) 와 백분율 변환이 붙어 STEP 2 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "2·√(0.9·0.1/n) ≤ 0.005 → 0.6/√n ≤ 0.005 → √n ≥ 120 → n ≥ 14400"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$14400$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/189-410.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "찬성률(0.9·0.8·0.75)·z(2·1.96·2.58)·허용 오차(0.5 %·1 %·2 %)를 바꾼다. 제약: z·√(p̂(1−p̂))/오차 가 정수여야 n 이 제곱수로 떨어진다(0.6/0.005=120 → 14400). 백분율로 준 허용 오차를 소수로 옮기는 문구를 반드시 유지."
    creative: "(1) 허용 오차를 신뢰구간의 길이로 바꾸기(★3 · 상수 2배) (2) n 을 주고 만족하는 최대 신뢰도를 묻기(★4 · z 역산) (3) 표본비율을 모른 채 p̂(1−p̂) ≤ 1/4 로 최악을 잡게 하면 ★4(I-EQV) (4) 찬성률만 바꿔 n 이 어떻게 변하는지 비교하게 하면 ★3."
```

### 연습문제 실력 UP

```yaml
- id: GN-PROB-189-411
  page: 189
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    크기 n 표본·신뢰도 α % 로 추정한 모평균 신뢰구간의 길이 l 에 대한 보기 판정. ㄱ n 고정에서 α 가 커지면 l 증가 · ㄴ α 고정에서 n 이 커지면 l 증가 · ㄷ α 고정에서 n 이 2배면 l 이 1/2 배.
  category: "신뢰구간 길이 공식의 변수 의존성 판정(보기형)"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "신뢰도 α 가 높아진다는 서술을 z 값이 커진다는 식의 조건으로 옮겨야 l=2z·σ/√n 에서 판정이 가능해진다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "신뢰구간의 길이와 표본 크기·신뢰도의 관계(보기 판정)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    l=2z·σ/√n 으로 옮기면 ㄱ 은 z 증가 → 참, ㄴ 은 √n 이 분모라 감소 → 거짓.
    ㄷ 은 n 이 2배면 l 이 1/√2 배라 거짓(√ 를 놓치면 참으로 보이는 T-단위 함정).
    수치가 하나도 없어 Mₐ=3 이지만 계산이 없고 통찰 1개 d1. 실력 UP 출발 ★4 에서 −1 → ★3.
  tier: star_3
  mechanism_primary: "l=2z·σ/√n 으로 환원 → ㄱ(α↑ → z↑ → l↑ 참) · ㄴ(n↑ → l↓ 거짓) · ㄷ(n 2배 → l 은 1/√2 배 거짓)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "ㄱ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/189-411.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 문항이라 숫자 변형의 여지는 배수(2배·4배·9배)와 비(1/2·1/3)뿐이다. 제약: n 을 k² 배로 해야 l 이 1/k 배라는 참인 보기가 만들어진다."
    creative: "(1) 보기를 참인 것 위주로 바꿔 답을 ㄱㄷ 으로(★3 유지) (2) 모비율 신뢰구간 길이로 옮기면 p̂ 의 영향(p̂ 이 0.5 에 가까울수록 길다)이 추가돼 ★4 (3) l 을 절반으로 만드는 n 의 배수를 계산하게 하면 절차형 ★2 (4) 신뢰도와 표본 크기를 동시에 바꿀 때 l 의 증감을 묻기(★4 · I-MI)."
```

```yaml
- id: GN-PROB-189-412
  page: 189
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    모비율 p·크기 n 표본의 표본비율 p̂ 에 대해 P(|p̂−p| ≤ 0.05·√(p̂(1−p̂))) ≥ 0.95 를 만족시키는 n 의 최솟값(n 은 충분히 크고 P(|Z|≤1.96)=0.95).
  category: "표본비율의 확률 부등식을 표준화 → 근호 소거 후 표본 크기"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "확률로 주어진 조건을 표본비율의 정규근사로 표준화해 |p̂−p|/√(p̂(1−p̂)/n) ≤ 1.96 이라는 Z 부등식으로 전환"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "양변에 공통으로 들어 있는 √(p̂(1−p̂)) 가 약분돼 미지의 p̂ 없이 0.05·√n ≥ 1.96 만 남는다는 동치 변환"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "표본비율의 확률 부등식을 표준화해 표본의 크기 구하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    한계가 0.05·√(p̂(1−p̂)) 로 주어져 표준오차 √(p̂(1−p̂)/n) 과 나란히 놓으면 근호가 통째로 약분된다.
    남는 것은 0.05·√n ≥ 1.96 → √n ≥ 39.2 → n ≥ 1536.64 → 최솟값 1537(경계 올림 T-경계).
    p̂ 을 모른 채로 답이 결정된다는 구조를 보는 것이 이 문항의 전부. 표현 전환 + 동치 변환 2개로 실력 UP ★4.
  tier: star_4
  mechanism_primary: "P(|p̂−p| ≤ 0.05√(p̂(1−p̂))) ≥ 0.95 → 표준화해 0.05·√n ≥ 1.96 → n ≥ 39.2² → 1537"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "$1537$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/189-412.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 0.05(0.1·0.02)와 신뢰도 z(1.96·2.58)를 바꾼다. 제약: (z/계수)² 가 정수가 아니어야 올림 판정이 살아 있고(39.2² =1536.64 → 1537), 계수를 키우면 n 이 급격히 작아져 「n 은 충분히 크고」 단서와 어긋나지 않는지 확인."
    creative: "(1) 확률을 0.99 로 올리기(★4 유지) (2) 한계를 0.05·√(p̂(1−p̂)) 대신 상수 0.05 로 주면 p̂ 이 남아 p̂(1−p̂) ≤ 1/4 최악 평가가 필요해져 ★5 후보(I-EQV+I-VF) (3) n 을 주고 만족하는 계수의 최댓값을 묻기(★4 · 역방향) (4) 모평균 버전 P(|x̄−m| ≤ kσ) 로 옮기면 σ 가 약분되는 같은 골조지만 근호가 없어 ★3."
```

## 표본 판정 요약 (15문)

- ★ 분포: ★1 2 · ★2 8 · ★3 4 · ★4 1 · ★5 0
- 통찰형 5(188-405 · 188-408 · 189-409 · 189-411 · 189-412) · 절차형 10 · premium 0
- 통찰 라벨 분포: I-EQV 5(405 · 408 · 409 · 411 · 412) · I-RT 1(412). depth 2 는 189-412 의 두 통찰뿐이고 나머지는 모두 d1.
- type_hint 상위: 「표본 크기 역산(신뢰구간·길이·오차의 한계 조건)」 5(187-e11 · 187-402 · 187-403 · 188-406 · 189-410) · 「모비율의 신뢰구간 직접 계산」 3(186-e10 · 186-400 · 186-401) · 「신뢰구간의 길이」 3(188-407 · 188-408 · 189-411) · 「구간에 속하는 정수의 개수」 1(188-404) · 「끝점 비 조건으로 표본평균」 1(188-405) · 「σ 역산 후 재적용」 1(189-409) · 「확률 부등식 표준화」 1(189-412)
- 대상층: 하위권 2 · 중하위권 7 · 중위권 4 · 중상위권 1 · 상위권 1
- 그림: 0문(이 범위 전 문항 figure none)
- 계열: 모비율 계열 8(186-e10~187-403 · 188-407 · 189-410 · 189-412) · 모평균 계열 7(188-404~188-406 · 188-408 · 189-409 · 189-411)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-PROB-188-408 | 벤더 STEP 2(★3 출발)이나 통찰 1개 d1 · M_total 5 · 계산이 한 줄(2σ=12σ/√n)이라 체감은 ★2. 통찰이 있어 −1 조건을 충족하지 않아 라벨은 ★3 유지 | ★2 / ★3 |
| GN-PROB-189-411 | 벤더 실력 UP(★4 출발)이나 계산 없이 길이 공식의 의존성만 판정하는 보기형이라 ★3 으로 −1. ★4 로 두면 저노출 통찰(SC/VF/SYM/XU/RT/PD/BW) 부재로 v3.8 §2.13 YELLOW 대상이 됨 | ★3 / ★4 |

추가 기록(이슈는 아님): 확인체크 태그 4문(186-400 · 186-401 · 187-402 · 187-403)은 「개념원리 익히기」 통번호가 아니라 필수 예제에 딸린 유제여서 ★1 이 아니라 해당 예제와 같은 ★2 를 출발점으로 삼았다. 186-401 만 계산이 두 줄로 끝나 −1 했다.

## 카탈로그 차원 메모

나중에 확률과 통계 유형 카탈로그를 만들 때 참고.

- **따로 세워야 할 유형**: ① 「모비율의 신뢰구간 직접 계산」(★1~2 · p̂ 을 구해 공식 대입) ② 「신뢰구간·길이·오차의 한계 조건으로 표본 크기 정하기」(★2~3 · 이 범위 5문으로 가장 큰 덩어리. 등호가 정수에서 성립하는지에 따라 최솟값 처리 난이도가 갈리므로 「정확히 떨어짐」과 「올림 필요」를 하위 갈래로) ③ 「두 신뢰구간 비교(σ·p̂ 소거)」(★3 · 188-408 · 189-409) ④ 「표본비율의 확률 부등식 표준화」(★4 · 189-412 · 이 범위에서 유일하게 표현 전환이 필수).
- **통합해도 될 유형**: 모비율판과 모평균판은 중심(p̂ / x̄)과 표준오차(√(p̂(1−p̂)/n) / σ/√n)만 다르고 골조가 같으므로 별개 유형으로 쪼개지 말고 한 유형의 두 변형으로 두는 편이 낫다(187-403 ↔ 188-406 ↔ 189-410, 186-e10 ↔ 189-409 의 1단계). 다만 모비율은 p̂ 이 표본에서 나오고 모평균은 σ 가 모집단 정보라는 차이가 「무엇을 역산할 수 있는가」를 가르므로 유형 설명에 한 줄 명시가 필요하다.
- **신뢰도-z 대응**: 이 범위에서 z 는 1.96 · 2.58 · 2 · 3 네 값만 쓰이고 모두 발문에 명시된다. 카탈로그의 base ★ 산정에서 z 값 자체는 난이도 요인으로 보지 않는 편이 좋다(계산 마찰일 뿐 통찰이 아님 · v3.8 §2.11).
