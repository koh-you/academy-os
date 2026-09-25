---
name: mechanism-데이터-GN-CALC2-01
description: 개념원리 미적분Ⅱ 01 수열의 수렴과 발산(1/1 · 12쪽 · 3문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ · 전사본 latex-bank/gn-calc2
  section: 01 수열의 수렴과 발산
  unit_code: CALC2-01
  part: "1/1"
  extract_range: "12~12쪽 · 12-e1~12-2"
  total_problems: 3
  unit_total: 3
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 유무로만 결정(비면 절차형 · 하나라도 있으면 통찰형). anchor_status 는 null. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (crops.json)
---

# 개념원리 미적분Ⅱ · 01 수열의 수렴과 발산 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅱ 01단원(수열의 수렴과 발산)의 12쪽 3문항 전수를 다룬다. 전사본에서 이 단원은 「필수·발전 예제」 구역 하나로만 잡혀 있고, 예제 상자 1문(`12-e1` · tag 「필수」)과 그 아래 확인체크 유제 2문(`12-1` · `12-2` · tag 「확인체크」)으로 구성된다. 개념원리 고등의 난이도 신호는 구역과 태그다 — 「개념원리 익히기」·「확인체크」는 개념 확인(★1 출발), 「필수」 예제는 ★2, 「발전」·「특강」은 ★3, 연습문제는 STEP 1 ★2 / STEP 2 ★3 / 실력 UP ★4 출발이다. 다만 이 범위의 확인체크 두 문항은 「개념원리 익히기」 통번호가 아니라 필수 예제에 직접 딸린 유제여서 예제와 같은 ★2 출발로 잡았고, 그 판단을 각 rationale 에 남겼다.

단원 성격상 세 문항 모두 「수렴·발산 판정」이라는 한 골조를 공유하고, 변별점은 **진동하는 수열의 처리**(진동=발산 / 진폭이 0으로 줄면 수렴)에 몰려 있다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 그림 문항은 없다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC2-12-e1
  page: 12
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    ⑴~⑷ 네 수열 $\left\{\dfrac{1}{n}\right\}$, $\{n+1\}$, $\{-2n+1\}$, $\{\cos n\pi\}$ 의
    수렴·발산을 조사하고 수렴하면 극한값을 구하기.
  category: "수열의 일반항 → n→∞ 거동 분류 → 수렴이면 극한값"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 수렴·발산 판정과 극한값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수렴(0) · 양의 무한대 · 음의 무한대 · 진동, 네 거동을 하나씩 대표하도록 배치한 정의 확인 예제다.
    각 소문항은 1~2단계로 끝나지만 네 개를 모두 분류해야 해 Mₛ=2, 계산은 한 줄이라 Mₖ=1.
    함정은 T-경계(진동을 「수렴 안 함」에서 멈추지 않고 발산으로 분류)와 T-표기(cos nπ 를 항 나열로 옮기기) 둘이라 Mₜ=2, M_total 6.
    통찰 0이지만 M_total 6 이라 −1 조정 대상이 아니고, 「필수」 예제 출발점 ★2 를 그대로 둔다.
  tier: star_2
  mechanism_primary: "각 일반항의 n→∞ 거동 판정 → 수렴/양의 무한대/음의 무한대/진동으로 분류 → 수렴 항만 극한값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 수렴, $0$ ⑵ 발산 ⑶ 발산 ⑷ 발산'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/12-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "1/n 의 분모 차수(1/n², 1/√n), 일차식의 계수·부호(n+1 → 3n−5 · −2n+1 → −n+4), 진동 항의 주기(cos nπ → (−1)^n · sin(nπ/2)). 제약: 네 소문항이 수렴·+∞·−∞·진동을 하나씩 대표해야 하고, 수렴 소문항의 극한값은 유리수로 떨어져야 한다."
    creative: "(1) 같은 네 수열을 「수렴하는 것만 고르시오」 보기형으로 바꾸기(골조·★2 유지) (2) (−1)^n/n 처럼 진동하지만 수렴하는 항을 한 소문항에 섞으면 진동=발산 오개념 판별점이 생겨 ★2~3 (3) 일반항에 문자 계수를 넣고 수렴하도록 하는 값을 묻는 역방향 발문(I-BW · Mₐ 상승 → ★3)."
```

```yaml
- id: GN-CALC2-12-1
  page: 12
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 세 수열 $\{1+(-1)^n\}$, $\left\{\dfrac{n^2}{n+1}\right\}$, $\{\tan 2n\pi\}$ 의
    수렴·발산을 조사하고 수렴하면 극한값을 구하기.
  category: "항 나열·차수 비교·삼각값 계산으로 각 수열의 거동 판정"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수열의 수렴·발산 판정과 극한값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    12-e1 의 유제. ⑴은 0, 2 가 번갈아 나오는 진동, ⑵는 분자 차수가 커 발산, ⑶은 tan 2nπ 가 모든 n 에서 0 인 상수수열이라 수렴이다.
    세 소문항의 판정 도구가 각각 달라 Mₛ=2, 계산은 한 줄이라 Mₖ=1.
    함정은 T-경계(진동도 발산)와 T-표기(tan 2nπ 를 「정의되지 않음」으로 오해하거나 상수 0 임을 못 봄) 둘로 Mₜ=2.
    「확인체크」 태그만 보면 ★1 출발이지만 개념원리 익히기 통번호가 아니라 필수 예제에 딸린 유제이고 M_total 6 이라 예제와 같은 ★2 로 둔다.
  tier: star_2
  mechanism_primary: "일반항 정리(항 나열 · 분자·분모 차수 비교 · tan 2nπ=0) → 수렴/발산 판정 → 수렴 항의 극한값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 발산 ⑵ 발산 ⑶ 수렴, $0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/12-1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴의 상수항과 진폭(1+(−1)^n → 2+3(−1)^n), ⑵의 분자·분모 차수 조합(n²/(n+1) → n/(n²+1) 이면 0 으로 수렴 · (2n²+1)/(n²−n) 이면 2 로 수렴), ⑶의 각(tan 2nπ → sin nπ · cos 2nπ). 제약: tan 은 nπ 의 정수배처럼 항상 정의되는 각에서만 쓰고 (2n+1)π/2 꼴은 피한다."
    creative: "(1) ⑵의 분자·분모 차수를 같게 해 유한 극한이 나오게 바꾸기(골조·★2 유지) (2) 진동 항에 1/n 을 곱해 수렴으로 뒤집으면 판별점이 하나 생겨 ★2~3 (3) 세 수열의 합·곱 수열의 수렴 여부를 묻기(발산+발산이 수렴할 수 있음 · I-CON → ★3)."
```

```yaml
- id: GN-CALC2-12-2
  page: 12
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    보기 ㄱ(상수수열 $7,7,7,\cdots$) · ㄴ(첫항 $-\dfrac{3}{2}$, 공비 $-\dfrac{3}{2}$ 인 등비수열) ·
    ㄷ($\left\{3-\dfrac{(-1)^n}{n}\right\}$) · ㄹ($\{\log(n+2)\}$) 중 수렴하는 수열을 모두 고르기.
  category: "보기별 판정 도구 선택 → 수렴하는 것 모으기"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "ㄷ 을 3 + (진폭이 0 으로 줄어드는 진동항) 으로 분리해 「(−1)^n 이 있으면 진동 발산」이라는 직관을 기각하고 수렴으로 판정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "수렴하는 수열 고르기(보기형 종합 판정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    보기 넷이 각각 다른 판정 도구를 부른다 — ㄱ 상수수열, ㄴ 등비수열의 공비 절댓값(|r|>1 → 진동 발산), ㄷ 진동항의 진폭, ㄹ 로그의 발산.
    핵심 판별점은 ㄷ 로, (−1)^n 이 들어 있어도 1/n 배라 3 에 수렴한다는 동치 변환이 필요해 I-EQV d1 하나를 인정했다.
    Mₛ=2(보기 4개 × 1~2단계) · Mₖ=1 · Mₐ=1 · Mₜ=2(T-부호: (−1)^n 부호 교대 / T-경계: |r|=1 과 진동 수렴의 경계) → M_total 6.
    통찰 1개·depth 1 은 +1 조건(2개 이상 또는 depth 3)에 못 미쳐 확인체크 유제 출발점 ★2 를 유지한다.
    [분류 이슈] ㄷ 의 I-EQV 를 표준 판정 절차로 보면 통찰 0 · 절차형이 되고 target_cohort 가 중위권 → 중하위권으로 바뀐다. ★ 는 어느 쪽이든 2.
  tier: star_2
  mechanism_primary: "보기별 도구 선택(상수수열 · 등비 공비 |r|>1 · 진동항 진폭 0 → 수렴 · log 발산) → 수렴하는 보기 수집"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "ㄱ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/12-2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ㄱ 의 상수값, ㄴ 의 첫항·공비, ㄷ 의 극한값 3 과 진동항 분모 차수((−1)^n/n → (−1)^n/√n), ㄹ 의 로그 밑과 평행이동. 제약: ㄴ 은 |r|>1(진동 발산) · |r|=1(진동 발산 또는 상수) · |r|<1(0 으로 수렴)에서 답이 달라지므로 의도한 구간에 고정하고, ㄷ 의 분모는 n→∞ 에서 발산해야 수렴이 유지된다."
    creative: "(1) ㄴ 의 공비를 −2/3 로 바꿔 수렴 보기를 셋으로 늘리기(골조·★2 유지) (2) 「발산하는 것을 모두 고르시오」 부정 발문으로 뒤집고 보기를 다섯으로 늘리기(검증 부담 ↑ → ★2~3) (3) ㄷ 를 {3−a^n/n} 처럼 매개변수화해 수렴하도록 하는 a 의 범위를 묻기(Mₐ 상승 · I-BW 추가 → ★3)."
```

## 표본 판정 요약 (3문)

- ★ 분포: ★1 0 · ★2 3 · ★3 0 · ★4 0 · ★5 0
- 통찰형 1 (`GN-CALC2-12-2` · I-EQV d1) · 절차형 2 · premium 0
- type_hint 상위: 「수열의 수렴·발산 판정과 극한값」 2 · 「수렴하는 수열 고르기(보기형 종합 판정)」 1
- 그림: 0문

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC2-12-2 | ㄷ 의 「진폭이 0 으로 줄어드는 진동항 분리」를 통찰(I-EQV d1)로 볼지 표준 판정 절차로 볼지. 통찰로 두면 통찰형·중위권, 절차로 두면 절차형·중하위권이며 ★ 는 어느 쪽이든 2 | ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 type_hint 는 「수열의 수렴·발산 판정과 극한값」 하나뿐이다(2문). 12-2 의 보기형은 발문 형식만 다르고 골조가 같아 **별도 유형으로 세우지 말고 같은 유형의 보기형 변형(발문 형식 태그)으로 통합**하는 것이 맞다.
- 대신 따로 세워야 할 축은 **진동 수열의 처리**다 — (a) 진동 = 발산(cos nπ · (−1)^n · |r|>1 등비), (b) 진폭이 0 으로 줄어 수렴((−1)^n/n). 이 단원의 오답은 거의 전부 (b) 를 (a) 로 오판하는 데서 나오므로, 카탈로그에서 「진동 수열의 수렴 판정」을 base ★2 의 독립 유형으로 두면 뒤 단원(등비수열의 극한 · 급수)의 |r| 조건 유형과 연결이 깔끔하다.
- 「확인체크」 태그의 base ★ 를 카탈로그가 정할 때는 **개념원리 익히기 통번호의 확인체크(★1)** 와 **필수·발전 예제에 딸린 확인체크 유제(★2)** 를 구분해야 한다. 이 범위의 12-1·12-2 는 후자다.
