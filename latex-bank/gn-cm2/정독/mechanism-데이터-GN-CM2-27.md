---
name: mechanism-데이터-GN-CM2-27
description: 개념원리 공통수학2 27 여러 가지 함수(1/1 · 219-e6~223-523) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: 27 여러 가지 함수
  unit_code: CM2-27
  part: "1/1"
  extract_range: "219~223쪽 · 219-e6~223-523"
  total_problems: 21
  unit_total: 21
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 27 여러 가지 함수 (1/1) 정독 데이터 (v1.0)

이 파일은 27단원 21문 전수(219~223쪽 · 219-e6~223-523)를 다룬다. 구역은 「필수·발전 예제」 7문(필수 3 · 확인체크 4) · 「특강」 2문 · 「연습문제 STEP 1」 6문 · 「STEP 2」 4문 · 「실력 UP」 2문이다. 단원이 **세 개의 축**으로 배열돼 있다. ⑴ **판정 축** — 그래프·함수식을 보고 일대일함수 / 일대일대응 / 상수함수 / 항등함수를 가려낸다(치역과 공역이 같은가가 유일한 변별 지점). ⑵ **조건 축** — 일대일대응·항등함수가 되도록 하는 상수·정의역을 역으로 구한다(끝점 대응 · 기울기 동부호 · 구간별 고정점). ⑶ **개수 축** — 함수·일대일대응·상수함수·전사·증가함수·대칭 조건 함수의 개수를 센다. 그림은 219-e6 · 222-512 두 문항(보기 그래프)뿐이고 선택지 문항은 222-515 한 문항이다.

벤더 난이도 신호와 이 파일의 출발점 규약: 「필수」 예제 ★2 · 「특강」 ★2~3 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4. **tag 「확인체크」 문항은 구역 신호를 우선**해 「필수·발전 예제」 구역 안의 확인체크는 바로 위 예제와 같은 출발점(★2)으로 두었다(예제의 유제 배치이므로 통번호 익히기의 ★1과 구분한다). 출발점에서 M_total·통찰로 ±1 조정했다. 이 단원에서 반복되는 세 규약을 21문 전체에 일관 적용했다. ⒜ **정의를 그대로 대입하는 판정·함숫값 계산**(항등함수 → f(5)=5, 상수함수 → 한 점 값)은 절차로 보아 통찰로 세지 않는다. ⒝ **일대일대응 조건을 「단조 방향 + 끝점(또는 꼭짓점) 대응」으로 옮기는 단계**는 I-EQV 로 센다(구간이 유한이면 d1, 조각함수·이차함수로 한 겹 더 들어가면 d2). ⒞ **개수 세기에서 대소 조건을 무순 선택으로 환원**하는 단계는 I-SYM, **여사건으로 돌리는 갈래 선택**은 I-SC 로 센다(단순 곱의 법칙은 I-RT d1 한 번만).

이 파일의 주 용도는 숫자 변형·창의 변형의 **원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM2-219-e6
  page: 219
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    정의역·공역이 모두 실수 전체인 다섯 개의 그래프(ㄱ 감소 곡선 · ㄴ 수평선 · ㄷ 아래로 볼록 포물선 · ㄹ 치역이 양수 쪽에 갇힌 감소 곡선 · ㅁ 직선 y=x)에서
    ⑴~⑷ 일대일함수 · 일대일대응 · 상수함수 · 항등함수에 해당하는 것을 모두 고르는 문제.
  category: "그래프 → 수평선 판정(일대일) → 치역과 공역 비교(대응) → 모양으로 상수·항등 확정"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프로 일대일함수·일대일대응·상수함수·항등함수 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 정의를 그래프 위에서 차례로 읽는 문항. 수평선과의 교점이 1개 이하면 일대일함수, 거기에 치역이 공역(실수 전체)과 같아야 일대일대응이라는 한 겹이 변별 지점이다(ㄹ 이 ⑴에는 들어가고 ⑵에는 빠지는 이유).
    판정 자체는 정의 대조라 통찰로 세지 않았고, 치역⊊공역을 놓치는 T-범위 함정만 Mₜ 에 반영했다. 필수 예제 출발점 ★2 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "수평선 교점 ≤1 → 일대일함수 → 치역=공역 확인 → 일대일대응 → y=c/y=x 모양으로 상수·항등"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ ㄱ, ㄹ, ㅁ ⑵ ㄱ, ㅁ ⑶ ㄴ ⑷ ㅁ'
  answer_source: "본문 풀이"
  figure: crop:fig-219-e6.png
  latex: latex-bank/gn-cm2/items/219-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그래프 자체가 자료이므로 바꿀 수는 보기 개수(5 → 4~6)와 ㅁ 의 표시 좌표(2,2 → 3,3)뿐. 제약: 그림 라벨 ㄱ~ㅁ 과 각 답의 대응이 고정이므로 그래프를 갈아끼우면 네 소문항 답을 모두 다시 잡아야 한다. 일대일함수와 일대일대응의 답이 달라지도록 '치역이 공역의 진부분집합인 단조 곡선'을 반드시 한 개 남길 것."
    creative: "(1) 공역을 실수 전체가 아닌 구간으로 바꿔 ㄹ 이 일대일대응이 되게 하기(★2 유지 · T-범위 강조) (2) 그래프 대신 함수식 보기로 바꾸면 판정이 쉬워져 ★1 (3) '일대일대응인 것의 개수'만 묻는 5지선다로 줄이면 ★1 (4) 각 그래프에 정의역 제한을 달아 제한 뒤 판정을 묻기(I-EQV d1 추가 · ★3)."
```

```yaml
- id: GN-CM2-219-506
  page: 219
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    실수 전체에서 정의된 네 함수 y=4x, y=3, y=x², y=x 중 ⑴~⑶ 일대일대응 · 상수함수 · 항등함수인 것을 모두 고르는 문제.
  category: "함수식 → 그래프 개형 → 일대일·치역 판정 → 정의 대조"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함수식으로 일대일대응·상수함수·항등함수 판정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    219-e6 의 그래프판을 식으로 바꾼 유제. 일차식 두 개는 실수 전체로 전단사, y=3 은 상수, y=x 는 항등, y=x² 만 일대일이 아니라는 표준 판정이 전부다.
    통찰 0 · M_total 4 로 확인체크 출발점 ★2 에서 −1 하여 ★1.
  tier: star_1
  mechanism_primary: "각 식의 개형 판정 → 일차식은 전단사 / y=3 상수 / y=x 항등 / y=x² 제외"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ ㄱ, ㄹ ⑵ ㄴ ⑶ ㄹ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/219-506.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수(4 → 임의의 0 아닌 수), 상수함수 값(3 → 임의 수), 짝수차 함수(x² → x⁴, |x|)를 바꿀 수 있다. 제약: 항등함수 보기는 반드시 y=x 그대로여야 하고, 일대일대응 보기에는 y=x 가 포함되므로 답이 두 개가 되게 유지."
    creative: "(1) y=x³ 를 넣어 일대일대응이지만 항등함수가 아닌 예를 추가(★1 유지) (2) 정의역을 x≥0 으로 제한해 y=x² 도 일대일이 되게 하기(I-EQV d1 · ★2) (3) 각 함수의 치역을 함께 쓰게 하면 T-범위 부담 증가(★2)."
```

```yaml
- id: GN-CM2-220-e7
  page: 220
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    X={x | -2≤x≤3} 에서 Y={y | 1≤y≤11} 로의 함수 f(x)=ax+b 가 일대일대응이고 a>0 일 때 상수 a, b 를 구하는 문제.
  category: "일대일대응 → 구간에서 단조 → 끝점끼리 대응 → 연립"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "일대일대응(치역=공역) 조건을 '증가하는 일차함수이므로 왼쪽 끝이 왼쪽 끝으로, 오른쪽 끝이 오른쪽 끝으로 간다'는 두 등식으로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "일차함수가 일대일대응이 되는 상수 조건(끝점 대응)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a>0 이 주어져 단조 방향이 고정되므로 f(-2)=1, f(3)=11 두 식을 세워 연립하면 끝이다. 조건을 끝점 대응으로 옮기는 착안 1개(EQV d1)가 이 유형의 전부이고 계산은 한 줄.
    필수 예제 출발점 ★2 · M_total 6 · 통찰 1(d1) → ★2 유지. 이 단원 조건 축의 원형 문항이다.
  tier: star_2
  mechanism_primary: "a>0 → 증가 → f(-2)=1, f(3)=11 → 연립 → a, b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a=2$, $b=5$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/220-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역·공역의 네 끝값을 바꿀 수 있다. 제약: 두 구간의 길이 비가 a 이므로 (공역 길이)/(정의역 길이) 가 원하는 a 가 되도록 잡아야 하고, b 가 정수로 떨어지게 하려면 끝값을 정수로 유지한다. a<0 조건으로 바꾸면 대응이 뒤집히므로 답도 함께 바꿀 것."
    creative: "(1) a>0 조건을 빼고 두 경우를 모두 따지게 하면 I-MI d1 추가 · ★3 (2) 공역을 미지수로 두고 a+b 가 최대가 되게 하기(I-BW d1 · ★3) (3) 정의역·공역을 자연수 집합으로 바꿔 개수 문제로 전환(★3) (4) f 를 x 의 일차식이 아닌 |x| 포함 식으로 바꾸면 222-514 골조."
```

```yaml
- id: GN-CM2-220-e8
  page: 220
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    실수 전체에서 정의된 f 가 항등함수, g(x)=-3 일 때 f(5)+g(-2) 의 값을 구하는 문제.
  category: "항등함수 → f(5)=5 / 상수함수 → 모든 값 -3 → 합"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "항등함수·상수함수의 함숫값 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    두 정의를 그대로 대입하는 한 줄 문항. 항등함수는 f(x)=x, 상수함수는 입력과 무관하게 같은 값이라는 것만 확인하면 5+(-3) 으로 끝난다.
    통찰 0 · M_total 4 로 필수 예제 출발점 ★2 에서 −1 하여 ★1. 벤더 라벨과 1단 차이라 분류 이슈로는 올리지 않았다.
  tier: star_1
  mechanism_primary: "f 항등 → f(5)=5 · g 상수 → g(-2)=-3 → 5-3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/220-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수함수의 값(-3)과 대입하는 두 입력(5, -2)을 자유롭게 바꿀 수 있다. 제약: 항등함수 쪽 입력이 곧 답의 일부이므로 두 수의 합이 지나치게 큰 수가 되지 않게 한다."
    creative: "(1) g 의 값을 직접 주지 않고 g(1)=-3 처럼 한 점만 주기(상수 전파 필요 · 220-509 골조 · ★2) (2) f(a)+g(a)=k 를 만족시키는 a 를 묻는 역방향(I-BW d1 · ★2) (3) f 를 항등함수가 아닌 f(x)=x 인 점이 일부뿐인 함수로 바꾸면 223-519 골조(★3)."
```

```yaml
- id: GN-CM2-220-507
  page: 220
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    X={x | -1≤x≤a} 에서 Y={y | -1≤y≤7} 로의 함수 f(x)=-2x+b 가 일대일대응일 때 상수 a, b 에 대하여 a-b 의 값을 구하는 문제.
  category: "기울기 음수 → 감소 → 끝점이 반대로 대응 → 연립"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "일대일대응 조건을 '감소함수이므로 정의역 왼쪽 끝 → 공역 오른쪽 끝' 이라는 뒤집힌 끝점 대응으로 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "일차함수가 일대일대응이 되는 상수 조건(끝점 대응)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    220-e7 과 같은 골조인데 기울기가 -2 로 음수라 대응 방향이 뒤집히는 것이 유일한 함정이다. f(-1)=7 로 b 를 먼저 잡고 f(a)=-1 로 a 를 구한다.
    끝점 대응 착안 1개(EQV d1) · 부호 함정(T-부호) 1개 · M_total 6 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "기울기 -2 <0 → 감소 → f(-1)=7, f(a)=-1 → b, a → a-b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/220-507.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기울기(-2), 정의역 왼쪽 끝(-1), 공역의 두 끝(-1, 7)을 바꿀 수 있다. 제약: (공역 길이) = |기울기| × (정의역 길이) 를 만족해야 a 가 유리수로 떨어지고, 기울기의 부호가 바뀌면 끝점 대응도 함께 뒤집어야 한다."
    creative: "(1) 기울기를 미지수 m 으로 두고 가능한 m 을 모두 구하게 하면 I-MI d1 추가 · ★3 (2) a-b 대신 ab 의 최댓값을 묻고 공역 끝을 매개변수화(★4 · 223-518 골조) (3) 정의역을 x≥-1 같은 반직선으로 바꿔 공역도 반직선으로(★3)."
```

```yaml
- id: GN-CM2-220-508
  page: 220
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    실수 전체에서 정의된 조각함수 f(x) = -x+3 (x≥0), (a+1)x+3 (x<0) 이 일대일대응이 되도록 하는 상수 a 의 값의 범위를 구하는 문제.
  category: "조각함수 → 두 조각의 기울기 부호 일치 → 치역이 실수 전체가 되는 조건"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "일대일대응을 '두 조각이 같은 방향으로 단조이고 치역이 이어 붙어 실수 전체' 라는 기울기 부호 조건으로 변환 — x≥0 쪽이 감소이므로 x<0 쪽도 감소여야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "조각함수가 일대일대응이 되는 상수 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x≥0 조각은 기울기 -1 로 감소하며 치역이 y≤3, 두 조각이 x=0 에서 같은 값 3 으로 만난다. 남은 y>3 을 x<0 조각이 빠짐없이 덮으려면 그 기울기도 음수여야 한다.
    경계값 연결(T-경계)과 기울기 부호(T-부호) 두 함정으로 Mₜ 2, M_total 7. 조건 변환 착안 1개(EQV d1)는 있으나 +1 조건(통찰 2개 또는 d3)에는 못 미쳐 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "x≥0 조각 감소·치역 y≤3 → x<0 조각도 감소해야 y>3 을 덮음 → a+1<0"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a<-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/220-508.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "경계점(x=0), 두 조각의 상수항(3), 고정된 쪽 기울기(-1)를 바꿀 수 있다. 제약: 두 조각이 경계에서 같은 값을 가져야 치역이 끊기지 않으므로 상수항을 바꿀 때 경계값 일치를 반드시 다시 맞춘다. 고정 기울기의 부호를 양수로 바꾸면 답도 a+1>0 쪽으로 뒤집힌다."
    creative: "(1) 경계에서 값이 어긋나게 만들어 '일대일대응이 될 수 없음'을 보이게 하기(I-VF d1 · ★3) (2) 미지수를 두 조각 모두에 넣어 순서쌍 (a,b) 범위를 묻기(★3) (3) 공역을 실수 전체가 아닌 구간으로 제한(T-범위 추가 · ★3) (4) 일대일대응 대신 '일대일함수이지만 일대일대응이 아닌' 조건으로 바꾸면 222-512 의 판정 축과 결합(★3)."
```

```yaml
- id: GN-CM2-220-509
  page: 220
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    실수 전체에서 정의된 f 는 항등함수, g 는 상수함수이고 f(5)=g(5) 일 때 f(7)+g(7) 의 값을 구하는 문제.
  category: "항등함수로 f(5) 확정 → 상수함수는 한 점 값이 전체 값 → 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "항등함수·상수함수의 조건에서 함숫값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(5)=5 를 먼저 얻고, g 가 상수함수이므로 g(5)=5 가 곧 모든 x 에서의 값이라는 전파가 핵심이다. 그 뒤 f(7)+g(7)=7+5.
    한 점 값이 전체를 결정한다는 것은 상수함수의 정의 그 자체라 통찰로 세지 않았다. 확인체크 출발점 ★2 · M_total 6(−1 조건 미충족) → ★2 유지.
  tier: star_2
  mechanism_primary: "f(5)=5 → g(5)=5 → g 는 상수 5 → f(7)+g(7)=7+5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/220-509.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "연결점(5)과 묻는 점(7)을 바꿀 수 있다. 제약: 연결점의 값이 그대로 상수함수의 값이 되므로 두 수를 다르게 잡아야 문제가 의미를 갖는다(같으면 2배 계산으로 끝)."
    creative: "(1) f(a)=g(a) 를 만족시키는 a 를 묻는 역방향(I-BW d1 · ★2) (2) g 를 상수함수가 아니라 '치역의 원소가 1개인 함수'로 서술해 정의를 읽게 하기(★2) (3) 세 번째 함수 h 를 일대일대응으로 추가하고 조건을 얽으면 223-520 골조(I-CON d1 · ★3)."
```

### 특강

```yaml
- id: GN-CM2-221-510
  page: 221
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "특강 확인체크"
  summary: |
    X={-1, 0, 1} 에 대하여 X 에서 X 로의 함수의 개수 a, 일대일대응의 개수 b, 상수함수의 개수 c 라 할 때 a+b+c 의 값을 구하는 문제.
  category: "각 원소의 상을 고르는 곱의 법칙 → 함수 3³ · 일대일대응 3! · 상수 3"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'함수를 정한다'는 것을 '정의역의 각 원소마다 상을 하나씩 고른다'는 선택 문제로 옮겨 곱의 법칙·순열로 계산"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "함수·일대일대응·상수함수의 개수 세기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    함수 개수는 3×3×3, 일대일대응은 서로 다른 값을 배정하므로 3×2×1, 상수함수는 값 하나를 고르는 3. 세 공식을 구분해 쓰는 것이 전부다.
    함수 → 선택 문제로 옮기는 표현 전환 1개(RT d1). 특강 구역 출발 폭 ★2~3 중 계산이 짧고 공식 적용에 가까워 하단인 ★2.
  tier: star_2
  mechanism_primary: "a=3³ · b=3! · c=3 → 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$36$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/221-510.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "집합의 크기 n(3 → 2, 4)을 바꾸면 세 값이 nⁿ, n!, n 으로 따라 움직인다. 제약: n=4 면 함수 개수가 256 으로 커져 합이 계산 부담만 늘고 변별은 그대로이므로 n≤4 로 유지한다."
    creative: "(1) 공역을 정의역과 다른 집합으로 바꿔 일대일대응이 존재하지 않게 하기(개수 0 · I-VF d1 · ★3) (2) 일대일함수(단사)의 개수를 추가로 묻기(★3) (3) '치역과 공역이 같은 함수'를 넣으면 222-517 의 여사건 골조 결합(I-SC d1 · ★3) (4) f(0)=0 같은 고정 조건을 걸어 개수를 줄이기(★3)."
```

```yaml
- id: GN-CM2-221-511
  page: 221
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "특강 확인체크"
  summary: |
    X={3, 5}, Y={-2, -1, 0, 1, 2} 에 대하여 ⑴ x₁≠x₂ 이면 f(x₁)≠f(x₂) ⑵ x₁<x₂ 이면 f(x₁)>f(x₂) 를 만족시키는 함수 f 의 개수를 각각 구하는 문제.
  category: "⑴ 서로 다른 값 배정(순열) → ⑵ 감소 조건이면 배치가 유일(조합)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑵ 의 감소 조건에서 두 값을 고르면 어느 값이 어느 x 로 가는지가 자동으로 정해짐을 보고, 순서쌍 세기를 무순 선택(조합)으로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "조건을 만족시키는 함수의 개수(일대일·대소 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 조건을 일대일함수로 읽어 5×4 로 끝난다. 변별은 ⑵ 로, 같은 5×4 에서 대소가 맞는 절반만 남는다는 것 또는 두 값을 고르면 배치가 유일하다는 것을 알아야 한다.
    순서쌍 → 무순 선택 환원 1개(SYM d1) · M_total 6. 특강 출발 폭 ★2~3 의 상단인 ★3(510 보다 한 단 위). [분류 이슈] 특강 확인체크의 출발점 폭이 넓어 ★2 로도 읽힌다.
  tier: star_3
  mechanism_primary: "⑴ 5×4 순열 → ⑵ 두 값 선택 후 배치 유일 → 5개에서 2개 고르기"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $20$ ⑵ $10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/221-511.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역 크기(2 → 3)와 공역 크기(5 → 4, 6)를 바꿀 수 있다. 제약: 정의역 크기 k 가 공역 크기 n 이하라야 ⑴ 이 0 이 아니고, ⑵ 의 답은 항상 n 에서 k 개를 고르는 조합이므로 k 를 3 으로 올리면 계산이 한 단계 늘어난다."
    creative: "(1) 감소 조건을 증가 조건으로 바꾸면 답은 같고 착안만 같은 자리(★3 유지) (2) f(3)=0 처럼 한 값을 고정하면 223-521 의 분할 골조(★4) (3) '⑴ 의 개수에서 ⑵ 의 개수를 뺀 값'을 묻는 형태로 두 소문항을 묶기(★3) (4) 정의역을 3원소로 늘리고 f 가 일대일이 아닐 수도 있게 하면 여사건 계산이 필요(I-SC d1 · ★4)."
```

### 연습문제 STEP 1

```yaml
- id: GN-CM2-222-512
  page: 222
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    정의역·공역이 모두 실수 전체인 세 그래프(ㄱ 증가 곡선 · ㄴ 치역이 위로 막힌 증가 곡선 · ㄷ 오르내리는 물결 곡선) 중 일대일함수이지만 일대일대응은 아닌 것을 모두 고르는 문제.
  category: "수평선 판정으로 일대일 확인 → 치역이 공역의 진부분집합인 것만 남기기"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프로 일대일함수와 일대일대응 구별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 조건을 동시에 통과해야 하는 문항. 물결 곡선은 수평선과 여러 번 만나 일대일에서 탈락하고, 증가 곡선 중 치역이 실수 전체인 것은 일대일대응이라 탈락한다. 남는 것은 단조이면서 치역이 막힌 하나.
    통찰 0 · M_total 5 로 −1 후보이지만, 치역⊊공역을 스스로 확인해야 답이 갈리는 것이 이 문항의 변별 지점이라 −1 을 적용하지 않고 STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "수평선 교점 ≤1 → 일대일 → 그중 치역 ≠ 실수 전체인 것만"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: 'ㄴ'
  answer_source: "답지"
  figure: crop:fig-222-512.png
  latex: latex-bank/gn-cm2/items/222-512.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그래프가 자료이므로 바꿀 수는 보기 개수(3 → 4~5)뿐. 제약: 정답이 되려면 '단조인데 치역이 공역의 진부분집합' 인 곡선이 정확히 필요한 개수만큼 있어야 하고, 그림 라벨 ㄱ~ㄷ 과 답의 대응이 고정이다."
    creative: "(1) 묻는 조건을 '일대일대응인 것' 으로 바꾸면 답이 ㄱ 으로 옮겨가고 난도는 ★1 (2) 공역을 양의 실수 전체로 바꿔 어떤 것이 일대일대응이 되는지 다시 묻기(T-범위 강조 · ★3) (3) 그래프 대신 조각함수 식으로 주면 220-508 골조(★2~3) (4) 각 그래프에 대해 네 정의 중 해당하는 것을 모두 고르게 하면 219-e6 형태(★2)."
```

```yaml
- id: GN-CM2-222-513
  page: 222
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    X={x | x≥2} 에서 Y={y | y≥3} 으로의 함수 f(x)=x²+2x+a 가 일대일대응일 때 상수 a 의 값을 구하는 문제.
  category: "꼭짓점 위치 확인 → 정의역에서 증가 → 최솟값 f(2)가 공역의 하한"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "일대일대응을 '축 x=-1 이 정의역 왼쪽 밖이라 x≥2 에서 증가' 와 '치역의 시작값 f(2)가 공역의 시작값 3 과 일치' 두 조건으로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차함수가 제한된 정의역에서 일대일대응이 되는 상수 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이차함수라 먼저 축(x=-1)을 확인해 x≥2 에서 단조임을 확정해야 하고, 그 뒤 반직선 대 반직선이므로 끝점 하나만 맞추면 된다. f(2)=3 에서 a 가 나온다.
    끝점 대응 착안 1개(EQV d1) · 축 위치(T-범위)와 경계 포함(T-경계) 두 함정. STEP 1 출발점 ★2 · M_total 7 · +1 조건 미충족 → ★2.
  tier: star_2
  mechanism_primary: "축 x=-1 < 2 → x≥2 에서 증가 → f(2)=3 → a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/222-513.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수(2 → 다른 짝수), 정의역 하한(2), 공역 하한(3)을 바꿀 수 있다. 제약: 축이 정의역 안에 들어오면 일대일이 깨지므로 (축) ≤ (정의역 하한) 을 반드시 유지하고, a 가 정수로 떨어지도록 계수를 잡는다."
    creative: "(1) 정의역 하한을 미지수 a 로, 공역 하한을 b 로 두어 a-b 의 최댓값을 묻기(★4 · 223-518 골조) (2) 축이 정의역 안쪽에 오도록 만들어 '일대일대응이 되도록 하는 정의역의 범위'를 묻기(I-BW d1 · ★3) (3) 아래로 볼록을 위로 볼록으로 바꿔 대응 방향을 뒤집기(T-부호 · ★3) (4) 공역을 유한 구간으로 바꾸면 끝점 두 개를 다 맞춰야 해 조건이 하나 늘어난다(★3)."
```

```yaml
- id: GN-CM2-222-514
  page: 222
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    실수 전체에서 정의된 함수 f(x)=|2x-5|+kx-3 이 일대일대응일 때 실수 k 의 값의 범위를 구하는 문제.
  category: "절댓값 분해 → 두 조각의 기울기 (k+2), (k-2) → 같은 부호 조건"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "일대일대응을 '두 조각의 기울기가 모두 양수이거나 모두 음수' 라는 하나의 부호 조건으로 변환(어느 한쪽이 0 이거나 부호가 엇갈리면 치역이 실수 전체가 아니거나 일대일이 깨짐)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "절댓값을 포함한 함수가 일대일대응이 되는 상수 범위"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x≥5/2 에서 기울기 k+2, x<5/2 에서 기울기 k-2 인 꺾인 직선이다. 두 조각이 같은 방향으로 단조여야 전체가 일대일대응이므로 (k+2)(k-2)>0.
    절댓값 구간 분할 자체는 표준 분기라 통찰로 세지 않고 Mₜ(T-부호·T-경계)로만 반영했다. 부호 통합 착안 1개(EQV d1) · M_total 7 로 STEP 1 안에서는 상단이지만 +1 조건(통찰 2개 또는 d3) 미충족 → ★2. [분류 이슈] 체감은 STEP 2 급.
  tier: star_2
  mechanism_primary: "절댓값 분해 → 기울기 k+2 와 k-2 → 두 기울기 동부호 → k<-2 또는 k>2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$k<-2$ 또는 $k>2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/222-514.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "절댓값 안의 계수·상수(2x-5)와 바깥 상수항(-3)을 바꿀 수 있다. 제약: 답의 경계는 절댓값 안 x 의 계수의 절댓값(여기서는 2)으로 정해지므로 그 값을 바꾸면 답의 두 경계도 같이 바뀐다. 바깥 상수항은 답에 영향이 없어 변형 여지가 크다."
    creative: "(1) |2x-5| 를 |x-1|+|x-3| 처럼 두 개로 늘리면 조각이 세 개가 되어 조건이 늘어남(★3) (2) 일대일대응 대신 '치역이 y≥c' 가 되게 하는 k 를 묻기(I-BW d1 · ★3) (3) k 를 정수로 제한하고 개수를 묻기(★2 유지) (4) 정의역을 구간으로 제한하면 끝점 대응까지 결합(★4)."
```

```yaml
- id: GN-CM2-222-515
  page: 222
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    A={-1, 0, 1} 에 대하여 A 에서 A 로의 함수 f 의 다섯 가지 식 중 항등함수가 아닌 것을 고르는 5지선다.
  category: "세 원소를 각 식에 대입 → f(x)=x 가 깨지는 것 찾기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정의역의 각 원소에서 항등함수 여부 확인"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    정의역이 -1, 0, 1 뿐이라 홀수 거듭제곱과 x|x| 는 모두 자기 자신으로 돌아가고, 절댓값만 -1 을 1 로 보내 항등이 깨진다. 세 값 대입이 전부.
    통찰 0 · M_total 4 로 STEP 1 출발점 ★2 에서 −1 하여 ★1.
  tier: star_1
  mechanism_primary: "x=-1 대입 → 절댓값 식만 f(-1)=1≠-1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/222-515.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "거듭제곱의 차수(3, 5 → 7, 9)와 집합 A 의 원소를 바꿀 수 있다. 제약: A 가 -1, 0, 1 일 때만 홀수 거듭제곱이 항등이 되므로 원소를 바꾸면 선택지 전체를 다시 설계해야 한다."
    creative: "(1) '상수함수인 것' 이나 '일대일대응이 아닌 것' 으로 묻는 대상을 바꾸기(★1~2) (2) A 를 -2, -1, 0, 1, 2 로 넓혀 x|x| 가 항등이 아니게 만들기(★2) (3) 항등함수가 되도록 하는 A 를 거꾸로 찾게 하면 223-519 골조(I-EQV d2 · ★3)."
```

```yaml
- id: GN-CM2-222-516
  page: 222
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    X={1, 2, 3} 에서 Y={4, 5, 6, 7, 8} 로의 함수 f 가 상수함수일 때 f(1)+f(2)+f(3) 의 최댓값과 최솟값의 합을 구하는 문제.
  category: "상수함수 → 세 값이 모두 같음 → 3c 꼴 → c 의 최대·최소"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상수함수의 함숫값 합의 최대·최소"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    상수함수이므로 세 함숫값이 모두 같은 c 이고 합은 3c. c 는 공역의 원소이므로 최대 8, 최소 4 를 넣어 24 와 12 를 더하면 끝난다.
    통찰 0 · M_total 4 로 STEP 1 출발점 ★2 에서 −1 하여 ★1. 상수함수의 정의를 합 계산으로 한 번 쓰는 수준.
  tier: star_1
  mechanism_primary: "합 = 3c · c ∈ Y → 3·8 + 3·4"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$36$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/222-516.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역 크기(3)와 공역의 원소 범위(4~8)를 바꿀 수 있다. 제약: 답은 (정의역 크기)×(공역 최댓값+최솟값) 이므로 두 값을 정하면 답이 바로 정해진다. 공역에 음수를 섞으면 부호 확인이 한 단계 붙는다."
    creative: "(1) 상수함수 대신 일대일함수로 바꾸면 합의 최대·최소가 서로 다른 세 값 선택으로 바뀜(★2) (2) 합이 특정 값이 되는 상수함수의 개수를 묻기(★2) (3) 공역을 문자 집합으로 바꾸고 치역과 공역이 같을 조건을 걸면 222-517 골조(I-SC d1 · ★2)."
```

```yaml
- id: GN-CM2-222-517
  page: 222
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    X={a, b, c}, Y={d, e} 에 대하여 X 에서 Y 로의 함수 중 치역과 공역이 같은 것의 개수를 구하는 문제.
  category: "전체 함수의 개수 → 치역이 한 원소뿐인 경우(상수함수) 제외"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'치역=공역' 을 직접 세는 갈래 대신 전체에서 d 만 쓰는 함수와 e 만 쓰는 함수를 빼는 여사건 갈래를 선택"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "치역과 공역이 같은 함수(전사)의 개수 — 여사건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 원소가 각각 d 또는 e 로 가므로 전체는 2³. 이 중 d 만 쓰거나 e 만 쓰는 두 가지가 치역이 공역보다 작으므로 빼면 된다.
    여사건으로 돌리는 갈래 선택 1개(SC d1) — 직접 세기도 가능하지만 공역이 커지면 여사건 쪽만 남는다. STEP 1 출발점 ★2 · M_total 5 · 통찰 1 → ★2 유지.
  tier: star_2
  mechanism_primary: "전체 2³ → 치역이 한 원소인 2가지 제외"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/222-517.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역 크기(3 → 4)와 공역 크기(2 → 3)를 바꿀 수 있다. 제약: 공역이 3원소가 되면 빼야 할 경우가 '원소 하나만 빠지는 경우' 와 '둘이 빠지는 경우' 로 갈려 포함배제가 필요하므로 난도가 한 단 올라간다(★3~4). 정의역 크기가 공역 크기보다 작으면 답이 0."
    creative: "(1) 공역을 3원소로 늘려 포함배제를 쓰게 하기(★4) (2) '치역의 원소가 정확히 1개' 인 함수의 개수로 뒤집기(★1) (3) 일대일함수의 개수와 함께 묻고 차를 구하게 하기(★3) (4) 문자 집합 대신 수 집합으로 바꾸고 함숫값 합 조건을 더하면 개수 축과 조건 축 결합(★4)."
```

### 연습문제 STEP 2

```yaml
- id: GN-CM2-223-518
  page: 223
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    X={x | x≥a} 에서 Y={y | y≥b} 로의 함수 f(x)=x²-4x+3 이 일대일대응이 되도록 하는 두 실수 a, b 에 대하여 a-b 의 최댓값이 q/p 일 때 p+q 의 값을 구하는 문제(p, q 는 서로소인 자연수).
  category: "꼭짓점 오른쪽 조건 a≥2 → b=f(a) → a-b 를 a 의 이차식으로 → 범위 안에서 최댓값"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "일대일대응 조건을 '정의역이 축 x=2 의 오른쪽에 있어 증가(a≥2)' 와 '치역의 시작값이 공역의 시작값과 같다(b=f(a))' 두 식으로 동치 변환 — 정의역·공역이 모두 미지인 상태에서 둘을 하나의 매개변수 a 로 묶는 것이 핵심"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이차함수의 일대일대응 조건과 매개변수 정의역·공역의 최댓값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    222-513 과 같은 조건 변환이지만 정의역 끝 a 와 공역 끝 b 가 모두 미지라 b 를 a 로 표현한 뒤 a-b 를 a 의 이차식으로 바꿔 최댓값을 찾는다. 꼭짓점이 a≥2 안에 들어오는지 확인하는 단계가 마지막에 붙는다.
    조건 변환 1개(EQV d2) · M_total 8. STEP 2 출발점 ★3 · 기출 태그 +0(통찰은 1개) → ★3. [분류 이슈] 최댓값 탐색까지 이어져 ★4 로도 읽힌다.
  tier: star_3
  mechanism_primary: "a≥2 → b=f(a) → a-b = -a²+5a-3 → a=5/2 에서 최댓값 → 기약분수의 분모+분자"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$17$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/223-518.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차함수의 계수(x²-4x+3 의 -4, 3)를 바꿀 수 있다. 제약: 최댓값을 주는 a 가 반드시 꼭짓점의 x좌표 이상이어야 답이 유효하므로(여기서는 5/2 ≥ 2) 계수를 바꾼 뒤 이 조건을 다시 확인해야 한다. 기약분수로 떨어지게 하려면 일차항 계수를 짝수로 유지한다."
    creative: "(1) a-b 대신 a+b 나 ab 의 최솟값을 묻기(같은 골조 · ★3) (2) 정의역을 x≤a 로 뒤집어 축 왼쪽 조건으로 만들기(T-부호 · ★3) (3) 위로 볼록한 이차함수로 바꿔 대응 방향을 뒤집기(★4) (4) 정수 a, b 로 제한하고 순서쌍의 개수를 묻기(I-VF d1 · ★4)."
```

```yaml
- id: GN-CM2-223-519
  page: 223
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    집합 X 를 정의역으로 하는 함수 f(x)=x³+x²-x 가 항등함수가 되도록 하는 공집합이 아닌 집합 X 의 개수를 구하는 문제.
  category: "항등함수 → 모든 원소가 f(x)=x 의 해 → 해집합의 공집합 아닌 부분집합 개수"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'항등함수가 되도록 하는 정의역' 이라는 역방향 조건을 'X 는 방정식 f(x)=x 의 해집합의 부분집합' 으로 동치 변환 — 함수식은 고정이고 정의역이 미지라는 뒤집힌 구조를 알아채는 것이 관문"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "항등함수가 되도록 하는 정의역 집합의 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f(x)=x 를 세우면 삼차방정식이 x(x+2)(x-1)=0 으로 인수분해되어 해가 세 개다. X 는 이 세 원소 집합의 부분집합이면 무엇이든 되고, 공집합만 제외하므로 2³-1.
    조건 뒤집기 1개(EQV d2) 뒤로는 부분집합 개수라는 표준 계산. STEP 2 출발점 ★3 · M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "f(x)=x → 삼차식 인수분해 → 해 3개 → 2³-1"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/223-519.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식의 계수를 바꿀 수 있다. 제약: f(x)-x 가 정수 근으로 인수분해되어야 하고 서로 다른 해의 개수 n 이 답 2ⁿ-1 을 결정하므로, 해가 중복되면 n 이 줄어 답도 바뀐다. 사차식으로 올리면 n=4 까지 가능."
    creative: "(1) 항등함수 대신 상수함수가 되도록 하는 X 의 개수를 묻기(해의 성격이 달라 ★3) (2) X 의 원소 개수를 2 로 제한하고 개수를 묻기(★3) (3) f(x)=-x 를 만족시키는 X 로 바꾸기(같은 골조 ★3) (4) 정의역과 공역을 함께 미지로 두고 일대일대응 조건을 걸면 조건 축과 결합(★4)."
```

```yaml
- id: GN-CM2-223-520
  page: 223
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    X={-1, 0, 1} 에서 X 로의 세 함수 f, g, h 가 각각 일대일대응 · 항등함수 · 상수함수이고 ㈎ f(0)=g(-1)=h(1), ㈏ h(0)+g(1)=f(1) 일 때 f(-1)-g(1)+h(0) 의 값을 구하는 문제.
  category: "항등함수로 g 확정 → ㈎ 사슬로 f(0)·h 확정 → ㈏ 로 f(1) → 일대일대응 소거로 f(-1)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세 함수의 정의(항등·상수·일대일대응)와 두 조건을 하나의 값 사슬로 결합 — 항등함수에서 얻은 값이 ㈎ 를 타고 상수함수 전체를 결정하고, 남은 f(-1) 은 일대일대응의 소거로 확정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "항등·상수·일대일대응 함수의 조건 연립"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    시작점은 항등함수뿐이다. g(-1)=-1 에서 ㈎ 를 타고 f(0) 과 h 의 값이 한꺼번에 정해지고(상수함수라 한 점이 전체), ㈏ 로 f(1) 이 나오면 남은 값은 일대일대응이므로 자동으로 결정된다.
    세 정의와 두 조건을 한 사슬로 묶는 통합 1개(CON d1) · M_total 6. STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "g 항등 → ㈎ 로 f(0)·h 확정 → ㈏ 로 f(1) → 일대일대응 소거로 f(-1) → 식에 대입"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/223-520.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "집합 X 의 원소(-1, 0, 1)와 두 조건에 쓰인 입력값을 바꿀 수 있다. 제약: 항등함수에서 출발한 값이 상수함수의 값으로 전달되고 그 뒤 일대일대응의 남은 자리가 하나로 좁혀져야 답이 유일하므로, 조건을 바꾸면 f 의 세 값이 서로 다르게 정해지는지 반드시 확인한다."
    creative: "(1) 세 함수의 역할(어느 것이 항등·상수·일대일대응인지)을 감추고 조건만으로 판별하게 하기(I-VF d1 · ★4) (2) X 를 4원소로 늘려 일대일대응 소거가 두 단계 필요하게 만들기(★4) (3) 조건을 하나 줄여 답이 여러 개 나오게 하고 개수를 묻기(I-MI d1 · ★4) (4) 구하는 식을 f(f(-1)) 처럼 합성으로 바꾸기(★3)."
```

```yaml
- id: GN-CM2-223-521
  page: 223
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    X={1, 2, 3, 4, 5} 에서 Y={1, 2, ..., 8} 로의 함수 f 가 x₁<x₂ 이면 f(x₁)<f(x₂) 이고 f(4)=6 을 만족시킬 때 함수 f 의 개수를 구하는 문제.
  category: "f(4)=6 으로 앞뒤 분할 → 앞 세 값은 1~5 에서 선택 → 뒤 한 값은 7, 8 중 선택 → 곱"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(4)=6 이라는 고정값을 기준선으로 삼아 '앞 세 값은 6 보다 작은 쪽에서, 뒤 한 값은 6 보다 큰 쪽에서' 라는 서로 독립인 두 문제로 분할"
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "증가 조건이 있으면 값을 고르는 순간 배치가 하나로 정해지므로, 순서 있는 배정을 무순 선택(조합)으로 환원"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "증가함수의 개수(고정값으로 분할 후 조합 환원)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    f(4)=6 이 벽 역할을 해 f(1)<f(2)<f(3)<6 과 f(5)>6 이 서로 간섭하지 않는다. 앞은 1~5 에서 세 개를 고르면 배치가 유일하고, 뒤는 7 과 8 중 하나다.
    분할 착안과 조합 환원 착안 2개(EQV d1 · SYM d1) → STEP 2 출발점 ★3 에서 +1 하여 ★4. 착안 없이 나열하면 시간이 급격히 늘어나는 전형적인 진입 저항형.
  tier: star_4
  mechanism_primary: "f(4)=6 기준 분할 → 앞: 5개에서 3개 선택 → 뒤: 2가지 → 곱"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$20$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/223-521.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역 크기(5), 공역 크기(8), 고정 조건 f(4)=6 의 위치와 값을 바꿀 수 있다. 제약: 고정값 아래에 남는 공역 원소 수가 앞쪽 개수 이상, 위에 남는 수가 뒤쪽 개수 이상이어야 답이 0 이 아니다. 고정 조건을 빼면 답은 공역에서 5개를 고르는 조합 하나로 단순해진다(★3)."
    creative: "(1) 조건을 f(x₁)≤f(x₂) 로 완화해 중복 선택이 되게 하기(★5 급 · 중복조합 필요) (2) 고정 조건을 f(2)=3, f(4)=6 두 개로 늘려 세 구간 분할(★4 유지) (3) 증가 대신 감소 조건으로 바꾸기(답 동일 · ★4) (4) f(4)=6 대신 'f(4) 가 짝수' 로 바꾸면 경우마다 개수를 더해야 함(I-MI d1 · ★4~5)."
```

### 연습문제 실력 UP

```yaml
- id: GN-CM2-223-522
  page: 223
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    X={a, b, c} 에서 X 로의 함수 f(x) = -4 (x<-2), 2x+1 (-2≤x≤1), 3 (x>1) 이 항등함수일 때 a+b+c 의 값을 구하는 문제(a, b, c 는 서로 다른 상수).
  category: "항등함수 → 각 구간에서 f(x)=x 인 점을 찾고 그 점이 실제로 그 구간에 속하는지 확인"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "함수식은 고정이고 정의역 X 가 미지라는 역구조를 알아채고, 항등 조건에서 세 구간 각각의 고정점(f(x)=x 인 x)을 역으로 찾아 X 를 구성 — 찾은 점이 그 구간의 조건을 만족하는지까지가 한 단계"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "조각함수가 항등함수가 되는 정의역 원소 구하기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    세 원소가 서로 다르고 정의역이 곧 치역이므로 각 구간에서 f(x)=x 를 만족하는 점을 하나씩 찾는다. 상수 조각에서는 그 상수 자신이 후보가 되고(그 상수가 해당 구간 조건을 만족해야 한다), 일차 조각에서는 2x+1=x 를 푼다.
    계산량은 가볍지만 '정의역을 거꾸로 만든다' 는 역구조 착안 1개(BW d2)가 관문이다. 실력 UP 출발점 ★4 유지. [분류 이슈] 계산 체감만 보면 ★3.
  tier: star_4
  mechanism_primary: "각 구간에서 f(x)=x 인 고정점 찾기 → 구간 조건 확인 → 세 원소의 합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/223-522.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 상수 조각의 값(-4, 3), 가운데 일차식(2x+1), 경계값(-2, 1)을 바꿀 수 있다. 제약: 상수 조각의 값은 그 조각의 구간 조건을 스스로 만족해야 하고(-4<-2, 3>1), 일차 조각의 고정점도 그 구간 안에 있어야 한다. 이 셋 중 하나만 어긋나도 답이 없는 문제가 된다."
    creative: "(1) 상수 조각의 값을 일부러 구간 밖으로 두어 '항등함수가 될 수 없음' 을 보이게 하기(I-VF d1 · ★4) (2) 일차 조각에 미지수 k 를 넣고 항등이 되게 하는 k 를 묻기(★4) (3) 항등함수 대신 일대일대응 조건으로 바꾸면 220-508 골조(★3) (4) 원소 개수를 넷으로 늘리려고 조각을 하나 추가하기(★4)."
```

```yaml
- id: GN-CM2-223-523
  page: 223
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    X={-3, -1, 0, 1, 3} 에 대하여 X 에서 X 로의 함수 중 f(x)=f(-x) 를 만족시키는 함수 f 의 개수를 구하는 문제.
  category: "대칭 조건 → 부호쌍끼리 값이 묶임 → 자유롭게 정할 자리 수만 세기"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(x)=f(-x) 를 '정의역이 부호쌍 {-3,3}, {-1,1} 과 자기 자신과 짝인 0 으로 갈라지고, 각 덩어리마다 값 하나만 자유' 로 환원 — 다섯 자리 중 독립인 자리가 셋뿐임을 보는 것이 전부"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "대칭 조건 f(x)=f(-x) 를 만족시키는 함수의 개수"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    조건은 f(3)=f(-3), f(1)=f(-1) 두 개뿐이고 f(0) 은 제약이 없다. 그러므로 독립적으로 정할 값이 세 개이고 각각 공역의 다섯 원소 중 하나를 고른다.
    대칭 환원 착안 1개(SYM d2). 착안하면 한 줄, 못 하면 나열로 막히는 구조라 M_total 5 임에도 실력 UP 출발점 ★4 를 유지했다(−1 조건은 통찰 0 일 때만).
  tier: star_4
  mechanism_primary: "부호쌍 2개 + 고정점 0 → 독립 자리 3개 → 5³"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$125$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/223-523.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "집합 X 의 원소를 바꿀 수 있다. 제약: 답은 (공역 크기)^(부호쌍 수 + 0 의 포함 여부) 이므로 원소를 바꿀 때 0 을 넣는지, 부호쌍이 몇 쌍인지가 답을 결정한다. 0 을 빼면 독립 자리가 둘로 줄어 답은 4²."
    creative: "(1) 조건을 f(-x)=-f(x) 로 바꾸면 f(0)=0 이 강제되고 쌍마다 값이 서로 반대여야 해 후보 기각이 생김(I-VF d1 · ★5 후보) (2) 대칭 조건에 일대일함수 조건을 더하면 쌍끼리 같은 값이라 모순임을 보이게 하기(★4) (3) f(f(x))=f(x) 같은 다른 자기참조 조건으로 바꾸기(★5) (4) 정의역만 대칭이고 공역은 다른 집합으로 두어 자리 수와 선택지 수를 분리하기(★4)."
```

## 표본 판정 요약 (21문)

- ★ 분포: ★1 4 · ★2 10 · ★3 4 · ★4 3 · ★5 0
- 통찰형 14 · 절차형 7 · premium 0
- 통찰 유형 분포: I-EQV 8 · I-SYM 3 · I-BW 1 · I-CON 1 · I-RT 1 · I-SC 1 (총 15개 라벨 / 14문)
- M_total 분포: 4 가 4문 · 5 가 4문 · 6 가 7문 · 7 가 5문 · 8 이 1문 (평균 5.9)
- type_hint 상위: 「일대일대응이 되는 상수 조건」 계열 6(끝점 대응 2 · 조각함수 1 · 이차함수 2 · 절댓값 1) · 「함수의 개수 세기」 계열 5 · 「항등·상수함수 판정과 함숫값」 계열 4 · 「그래프 판정」 3 · 「항등함수가 되는 정의역」 2
- 그림: 2문(`crop:fig-219-e6.png` · `crop:fig-222-512.png`) · 선택지 문항 1문(222-515)
- 대상층: 하위권 4 · 중하위권 3 · 중위권 6 · 중상위권 8 · 상위권 0

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-221-511 | 「특강」 확인체크의 출발점 폭이 ★2~3 으로 넓다. 510 과 한 단 차이를 두려고 ⑵ 의 조합 환원을 근거로 ★3 으로 두었으나 ★2 로도 읽힌다 | ★2 / ★3 |
| GN-CM2-222-514 | M_total 7 · 절댓값 조각 결합으로 체감은 STEP 2 급이지만 +1 규칙(통찰 2개 또는 depth 3)을 못 채워 ★2 라벨 유지 | ★2 / ★3 |
| GN-CM2-223-518 | 조건 변환 뒤 이차식 최댓값 탐색과 범위 검증까지 이어지고 M_total 8 로 이 범위 최고값. 기출 태그도 있어 ★4 후보이나 통찰 1개라 ★3 유지 | ★3 / ★4 |
| GN-CM2-223-522 | 계산량만 보면 ★3(세 구간에서 고정점 찾기). 정의역을 역으로 구성하는 구조를 근거로 실력 UP 출발점 ★4 를 유지 | ★3 / ★4 |

참고: 220-e8 · 222-515 · 222-516 · 219-506 은 벤더 구역 출발점(★2)에서 −1 하여 ★1 로 내렸다. 1단 차이라 이슈로 올리지 않았지만, 네 문항 모두 정의 대입 한 줄로 끝나는 확인용이라 카탈로그 작성 시 「개념 확인」 층으로 따로 묶는 편이 낫다.

## 카탈로그 차원 메모

이 범위에서 반복된 type_hint 와, 나중에 공통수학2 유형 카탈로그를 만들 때의 제안이다.

- **따로 세워야 할 유형** ⑴ 「일차함수의 일대일대응 — 끝점 대응」(220-e7 · 220-507): 유한 구간 대 유한 구간, 기울기 부호로 대응 방향이 뒤집히는 것이 전부인 base ★2 유형. ⑵ 「이차함수의 일대일대응 — 축 위치 + 끝점」(222-513 · 223-518): 축이 정의역 밖이라는 조건이 한 겹 더 붙고 매개변수화되면 최댓값까지 가므로 base ★3. ⑶ 「조각함수·절댓값 함수의 일대일대응 — 기울기 동부호」(220-508 · 222-514): 조각 사이 연결과 부호가 핵심이라 위 둘과 착안이 다르다. base ★2~3. ⑷ 「대칭·순서 조건이 붙은 함수의 개수」(221-511 · 223-521 · 223-523): 순서·대칭 조건을 무순 선택이나 독립 자리 수로 환원하는 I-SYM 축. base ★3~4 이며 이 단원에서 ★4 를 만드는 유일한 통로다. ⑸ 「정의역을 역으로 구성하는 항등함수」(223-519 · 223-522): 함수식이 고정이고 정의역이 미지인 역구조. base ★3~4.
- **통합해도 될 유형** ⒜ 219-e6 · 219-506 · 222-512 · 222-515 는 모두 「정의 대조 판정」 하나로 묶을 수 있다(자료가 그래프냐 식이냐, 묻는 정의가 무엇이냐만 다르다). ⒝ 220-e8 · 220-509 · 222-516 은 「항등·상수함수의 함숫값 계산」 하나. ⒞ 221-510 · 222-517 은 「함수의 개수 — 곱의 법칙과 여사건」 하나로 묶되, 공역이 3원소 이상으로 커지면 포함배제가 필요하므로 그때 분리한다.
- 이 단원의 ★ 상한은 ★4 이고 ★5 는 없다. ★5 를 만들려면 223-521 의 완화 조건(중복 선택)이나 223-523 의 홀함수 조건처럼 **후보 기각(I-VF)** 이 붙어야 하며, 그 경우 27단원 단독이 아니라 집합·경우의 수 단원과의 결합(I-XU)이 된다.
