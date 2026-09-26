---
name: mechanism-데이터-GN-ALG-13
description: 개념원리 대수 13 로그함수의 활용 – 부등식(1/1 · 120~127쪽 120-293~127-319 · 34문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정 · 학생용) · 전사본 latex-bank/gn-alg
  section: "13 로그함수의 활용 – 부등식"
  unit_code: ALG-13
  part: "1/1"
  extract_range: "120~127쪽 · 120-293~127-319"
  total_problems: 34
  unit_total: 34
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/ (crops.json)
---

# 개념원리 대수 · 13 로그함수의 활용 – 부등식 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 대수 13단원 「로그함수의 활용 – 부등식」 전체(120~127쪽 · 120-293~127-319 · 34문항)를 다룬다. 구역은 다섯이다. **개념원리 익히기**(통번호 120-293~120-296 · 개념 직후 확인 드릴) 4문항, **필수·발전 예제**(121-e20~125-e26 의 tag 「필수」·「발전」 상자 발문과 그 뒤에 붙는 tag 「확인체크」 문항) 17문항, **연습문제 STEP 1** 6문항, **연습문제 STEP 2** 5문항, **연습문제 실력 UP** 2문항(127-318 은 tag 「평가원 기출」). 개념원리 고등은 구역이 곧 난이도 층이어서 개념원리 익히기 ★1 · 필수 예제와 확인체크 ★2 · 발전 예제와 STEP 2 ★3 · 실력 UP ★4 를 출발점으로 삼고 거기에 M_total·통찰로 ±1 을 조정했다. 이 범위에 그림 문항은 없다.

단원의 도구는 좁다. ⑴ 진수 조건을 먼저 세우고, ⑵ 양변의 밑을 통일한 뒤, ⑶ 밑이 1보다 크면 방향 유지·1보다 작으면 방향 반전으로 진수끼리 비교한다 — 이 세 줄이 거의 모든 문항의 골조다. 그 위에 네 갈래의 변주가 얹힌다: $\log_a x = t$ 치환형(이차부등식으로 환원), 진수에 로그가 또 들어간 이중 로그형, 양변에 로그를 취해 지수를 끌어내리는 지수형, 그리고 「모든 $x$ 에 대하여 성립」·「서로 다른 두 실근」처럼 로그를 계수로 갖는 이차식의 판별식형이다. 그래서 함정 축 Mₜ 는 거의 모든 블록에서 2(T-범위 = 진수·밑 조건, T-부호 = 밑<1 방향 반전)로 고정되고, 변별은 Mₛ·Mₐ 와 통찰에서 갈린다.

통찰 라벨이 붙은 문항은 34문 중 15문이다. 반복되는 유형은 네 가지다 — 「모든 양수 $x$」를 「모든 실수 $t$」로 옮기는 치환 범위의 동치 변환(I-EQV), 양변에 로그를 취해 지수식을 이차식으로 바꾸는 표현 전환(I-RT), 해의 구간이나 정수해 개수에서 미정계수를 거꾸로 읽는 역방향 사고(I-BW), 그리고 분기·후보 중 조건 위배분을 되돌려 기각하는 사후 검증(I-VF). 나머지 19문은 위 세 줄 골조를 그대로 밟는 절차형이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 가 변하는 지점)를 채웠다. 로그부등식은 숫자를 바꿀 때 **진수 조건이 답 구간을 잘라내는지**가 매번 달라지므로, 변형 메모에는 그 제약을 우선으로 적었다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-ALG-120-293
  page: 120
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 밑이 같은 기본 로그부등식 $\log_2 x<3$, $\log_{1/3} x\ge 2$, $\log_5 x>0$ 의 해를 구한다.
  category: '진수 조건 → 상수를 같은 밑의 로그로 → 밑의 크기로 부등호 방향 결정'
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑이 같은 로그부등식의 기본형(밑>1·밑<1 방향)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    세 소문항 모두 상수를 $\log_a a^k$ 로 고쳐 진수끼리 비교하는 한 줄. ⑵ 에서 밑이 $1/3$ 이라 방향이 뒤집히고 진수 조건 $x>0$ 이 왼쪽 끝을 만든다(T-범위·T-부호 2범주).
    통찰 없음·M_total 5 → 개념원리 익히기 출발 ★1 에서 −1 후보이나 하한이라 ★1 유지.
  tier: star_1
  mechanism_primary: '진수 조건 x>0 → 상수를 같은 밑 로그로 → 밑>1 방향 유지 / 밑<1 방향 반전'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $0<x<8$ ⑵ $0<x\le\dfrac{1}{9}$ ⑶ $x>1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/120-293.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변 상수(3 → 4·−1)와 밑(2·1/3·5 → 3·1/2·10)을 바꿀 수 있다. 제약: 우변이 밑의 정수 거듭제곱이라야 답이 유리수 구간으로 떨어지고, 밑<1 소문항을 반드시 하나는 남겨 방향 반전을 훈련시킨다.'
    creative: '(1) 부등식을 만족하는 자연수 x 의 개수를 묻기(★1 유지) (2) 세 해의 공통범위를 묻는 연립으로 묶기(★2) (3) 밑을 문자 a 로 두고 a 의 크기로 나누게 하면 I-MI 가 붙어 ★3.'
```

```yaml
- id: GN-ALG-120-294
  page: 120
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴⑵ 양변이 모두 로그인 부등식 $\log_2 (x-1)\ge\log_2 (-5x+11)$, $\log_{1/3} (2x-5)<\log_{1/3} (x-3)$ 의 해를 구한다.
  category: '두 진수의 양수 조건 → 진수끼리 비교 → 세 구간의 교집합'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "양변이 로그인 로그부등식(진수 조건 교집합)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    진수 조건이 두 개 생기고 거기에 진수 비교 결과를 겹쳐야 한다. ⑵ 는 비교 결과 $x>2$ 보다 진수 조건 $x>3$ 이 더 강해서 답이 진수 조건 쪽으로 결정되는 대표 사례다.
    교집합을 빠뜨리면 틀리지만 절차가 정해져 있어 통찰 라벨은 없다. 개념원리 익히기 출발 ★1 유지.
  tier: star_1
  mechanism_primary: '두 진수>0 → 밑의 크기로 진수 비교(1/3 은 반전) → 세 조건 교집합'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $2\le x<\dfrac{11}{5}$ ⑵ $x>3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/120-294.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '진수의 일차식 계수(−5x+11 → −2x+7 등)를 바꿀 수 있다. 제약: 진수 조건과 비교 결과가 만드는 세 구간이 공집합이 되지 않게 하고, 한 소문항은 진수 조건이 답을 지배하도록(⑵ 처럼) 남긴다.'
    creative: '(1) 답이 공집합이 되는 계수로 바꿔 "해가 없다"를 답으로 삼기(★2) (2) 정수해 개수를 묻기(★2) (3) 진수에 이차식을 넣으면 진수 조건 자체가 이차부등식이 되어 ★3.'
```

```yaml
- id: GN-ALG-120-295
  page: 120
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴⑵ 한쪽이 상수인 로그부등식 $\log_2 (2x-4)\le 3$, $\log_{1/3} (3-x)\ge 1$ 의 해를 구한다.
  category: '상수를 밑의 거듭제곱 로그로 고치기 → 진수 비교 → 진수 조건과 교집합'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상수를 로그로 고쳐 푸는 로그부등식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $3=\log_2 8$, $1=\log_{1/3}\frac{1}{3}$ 로 고치면 120-294 와 같은 꼴이 된다. ⑵ 는 진수 $3-x>0$ 이 오른쪽 끝을, 방향 반전이 왼쪽 끝을 만들어 양쪽 경계가 서로 다른 조건에서 나온다.
    통찰 없음·절차 고정 → 개념원리 익히기 출발 ★1 유지.
  tier: star_1
  mechanism_primary: '상수 k → log_a a^k → 진수 비교(밑<1 반전) → 진수>0 과 교집합'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $2<x\le 6$ ⑵ $\dfrac{8}{3}\le x<3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/120-295.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변 상수와 진수의 일차식(2x−4 → 3x−6 등)을 바꿀 수 있다. 제약: 우변 상수는 정수로 두어 진수 경계가 유리수가 되게 하고, 감소형(밑<1) 소문항에서 양 끝이 서로 다른 조건에서 나오도록 유지한다.'
    creative: '(1) 부등호를 뒤집어 해가 공집합/전구간이 되는 경우를 섞기(★2) (2) 두 소문항을 연립으로 묶어 공통범위를 묻기(★2) (3) 상수 자리를 log 형 매개변수 k 로 바꾸면 Mₐ 가 올라 ★3.'
```

```yaml
- id: GN-ALG-120-296
  page: 120
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    부등식 $(\log_2 x)^2+\log_2 x-2\le 0$ 의 해를 구하는 과정의 빈칸을 채운다(진수 조건 → $t=\log_2 x$ 치환 → $t$ 범위 → $x$ 범위).
  category: '진수 조건 → log 치환 → 이차부등식 → t 범위를 x 범위로 되돌리기'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '$\log_a x$ 치환형 로그부등식(빈칸 채우기)'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    이 단원의 두 번째 골조인 치환형을 빈칸으로 안내하는 문항이다. 학생은 $t^2+t-2\le 0$ 을 풀고 $-2\le\log_2 x\le 1$ 을 $x$ 범위로 되돌리기만 하면 된다.
    안내가 있어 함정은 진수 조건 하나(T-범위)뿐이고 통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: 't=log_2 x 치환 → t^2+t−2≤0 → −2≤t≤1 → 1/4≤x≤2'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0$, $t^2$, $t$, $-2$, $1$, $-2$, $1$, $\dfrac{1}{4}$, $2$, $\dfrac{1}{4}$, $2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/120-296.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '이차부등식의 계수(1, 1, −2 → 1, −3, −4 등)와 밑(2 → 3·1/2)을 바꿀 수 있다. 제약: t 의 근이 정수라야 x 경계가 깔끔한 거듭제곱이 되고, 밑을 1/2 로 바꾸면 t 범위를 x 로 되돌릴 때 방향이 뒤집히는 것을 빈칸에 반영해야 한다.'
    creative: '(1) 빈칸을 없애고 완결형으로 묻기(★2 · 122-e22 와 동일 골조) (2) 해의 정수해 개수를 묻기(★2) (3) 이차부등식이 항상 성립하도록 하는 계수 범위를 묻는 역방향으로 바꾸면 I-EQV 가 붙어 ★3.'
```

### 필수·발전 예제

```yaml
- id: GN-ALG-121-e20
  page: 121
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 밑을 같게 고쳐 푸는 로그부등식 $\log_2 x+\log_2 (x-1)\le 1$, $2\log_{1/2} (x-4)>\log_{1/2} (x-2)$, $\log_2 (x-3)\le\log_4 (x-1)$ 의 해를 구한다.
  category: '진수 조건 선점 → 로그의 성질·밑변환으로 한쪽 밑으로 통일 → 진수 비교'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑을 같게 할 수 있는 로그부등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 소문항이 각각 다른 통일 수단을 쓴다 — ⑴ 합을 곱으로, ⑵ 계수 2 를 제곱으로, ⑶ $\log_4$ 를 $\log_2$ 로 밑변환. 모두 교과서가 명시한 성질이라 통찰 라벨은 붙이지 않았다.
    핵심은 $2\log_{1/2}(x-4)=\log_{1/2}(x-4)^2$ 변형이 $x>4$ 에서만 유효하다는 점으로, 진수 조건을 먼저 잡지 않으면 ⑵ 에서 구간이 넓어진다.
    필수 예제 출발 ★2 · M_total 7 · 통찰 0 → ★2 유지.
  mechanism_primary: '진수 조건 먼저 → 로그 성질·밑변환으로 밑 통일 → 진수끼리 비교 후 교집합'
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $1<x\le 2$ ⑵ $4<x<6$ ⑶ $3<x\le 5$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/121-e20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '진수의 평행이동 상수(x−1·x−4·x−3)와 우변 상수, ⑶ 의 밑 쌍(2·4 → 3·9)을 바꿀 수 있다. 제약: 밑 쌍은 한쪽이 다른 쪽의 거듭제곱이라야 밑변환이 정수 계수로 떨어지고, 진수 조건이 답 구간의 한쪽 끝을 실제로 잘라내도록 상수를 고른다.'
    creative: '(1) ⑶ 을 $\log_9$ 와 $\log_3$ 으로 바꾸고 부등호를 뒤집기(★2 유지) (2) 세 소문항을 연립으로 묶기(★3) (3) 밑을 $x-2$ 같은 문자로 두면 밑 분기가 생겨 ★3~4(126-308 참조).'
```

```yaml
- id: GN-ALG-121-297
  page: 121
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑹ 밑을 같게 고쳐 푸는 로그부등식 종합 드릴(이중 부등식, 합·차 정리, 계수 2 처리, 상용로그 곱, $1/3$ 과 $1/9$·$2$ 와 $4$ 의 밑변환).
  category: '진수 조건 → 밑 통일(성질·밑변환) → 진수 비교 → 교집합'
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑을 같게 고쳐 푸는 로그부등식 종합 드릴"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    121-e20 의 확인체크로 여섯 소문항이 붙어 Mₛ 가 3 이다. ⑷ 는 진수의 곱이 이차부등식이 되어 해가 두 구간으로 갈리고, 진수 조건 $0<x<11$ 이 그 두 구간을 모두 자른다.
    ⑸⑹ 은 $\log_{1/9}=\frac{1}{2}\log_{1/3}$, $\log_4=\frac{1}{2}\log_2$ 밑변환이 전부라 통찰 라벨은 없다. 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: '각 소문항: 진수>0 → 밑 통일 → 진수 비교(밑<1 반전) → 교집합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{1}{4}\le x<2$ ⑵ $6<x<7$ ⑶ $x\ge 7$ ⑷ $0<x<1$ 또는 $10<x<11$ ⑸ $1<x<5$ ⑹ $1<x\le 5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/121-297.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑷ 의 상수 11 과 우변 1, ⑴ 의 이중 부등식 양 끝(−1, 2)을 바꿀 수 있다. 제약: ⑷ 는 이차부등식의 두 근이 진수 조건 구간 안에 들어와 답이 두 구간으로 갈리도록 유지하고, ⑴ 은 밑이 1/2 이므로 양 끝 부등호 방향이 동시에 뒤집히는 것을 확인한다.'
    creative: '(1) 여섯 소문항 중 "해가 없는 것"을 고르게 하기(★2) (2) ⑷ 를 정수해 개수 문제로 바꾸기(★2~3) (3) ⑹ 의 세 로그 밑을 모두 다르게 두면 밑변환 두 번이 필요해 ★3.'
```

```yaml
- id: GN-ALG-121-298
  page: 121
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    로그 연립부등식 $\log_5 x>\log_5 8$ 과 $\log_2 x+\log_2 (x-4)\le\log_2 (x+5)+2$ 를 풀어 공통범위를 구한다.
  category: '두 로그부등식을 각각 풀기 → 진수 조건 포함 교집합'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그 연립부등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    둘째 식에서 $2=\log_2 4$ 로 고쳐 $x(x-4)\le 4(x+5)$ 로 옮기면 이차부등식 한 줄이다. 첫째 식 $x>8$ 이 진수 조건 $x>4$ 를 흡수해 왼쪽 끝이 되고, 이차부등식의 오른쪽 근이 오른쪽 끝이 된다.
    절차가 고정돼 통찰 라벨 없음. 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: '각 식의 진수 조건 → 상수를 로그로 → 이차부등식 → 두 해의 교집합'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8<x\le 10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/121-298.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫 식의 8, 둘째 식의 −4·+5·상수 2 를 바꿀 수 있다. 제약: 이차부등식의 두 근이 정수로 떨어지게 하고, 첫 식의 하한이 둘째 식의 진수 조건보다 커서 실제로 교집합을 지배하도록 고른다.'
    creative: '(1) 연립의 해가 공집합이 되는 상수를 찾게 하기(★3 · I-BW) (2) 해가 $\alpha<x\le\beta$ 일 때 $\alpha\beta$ 를 묻기(★2 · 126-309 형) (3) 첫 식의 밑을 문자로 두면 밑 분기로 ★3.'
```

```yaml
- id: GN-ALG-122-e21
  page: 122
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    진수에 로그가 들어간 부등식 $\log_2 (\log_{1/2} x)<1$ 을 푼다.
  category: '안쪽 로그의 양수 조건 → 바깥 로그 풀기 → 안쪽 로그부등식 풀기'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "진수에 로그가 포함된 로그부등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조건이 둘이다 — 진수 조건 $\log_{1/2}x>0$ 과 부등식 $\log_{1/2}x<2$. 앞의 것이 $0<x<1$, 뒤의 것이 $x>1/4$ 를 주고 두 구간의 교집합이 답이다.
    바깥·안쪽 모두 밑이 다르고 하나는 1보다 작아 방향이 한 번씩 결정되지만 순서가 고정된 절차라 통찰 라벨은 없다. 필수 예제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: '안쪽 로그>0 → 바깥 부등식으로 안쪽 로그의 범위 → 밑 1/2 로 x 범위 환원'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{4}<x<1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/122-e21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '바깥 밑 2 와 우변 1, 안쪽 밑 1/2 를 바꿀 수 있다. 제약: 우변이 정수라야 안쪽 로그의 상한이 정수가 되고, 안쪽 밑이 1보다 작으면 최종 구간이 (작은 수, 1) 꼴로 뒤집힌다는 점을 답에 반영한다.'
    creative: '(1) 부등호를 ≥ 로 바꿔 경계 포함을 묻기(★2) (2) 삼중 로그 $\log_2(\log_2(\log_2 x))<1$ 로 한 겹 더 쌓기(★3) (3) 안쪽 로그의 진수를 $x-1$ 같은 일차식으로 두면 조건이 셋이 되어 ★3.'
```

```yaml
- id: GN-ALG-122-e22
  page: 122
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    같은 로그가 반복되는 부등식 $\log_{1/3} x^3+(\log_{1/3} x)^2<-2$ 를 푼다.
  category: 'log 를 t 로 치환 → 이차부등식 → t 범위를 x 범위로 환원'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '$\log_a x$ 의 꼴이 반복되는 로그부등식'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\log_{1/3}x^3=3\log_{1/3}x$ 로 차수를 내리면 $t^2+3t+2<0$ 한 줄이고 $-2<t<-1$ 이 나온다.
    마지막에 $t=\log_{1/3}x$ 를 되돌릴 때 밑이 1보다 작아 대소가 뒤집혀 $3<x<9$ 가 되는 지점이 이 유형의 유일한 함정이다(T-부호).
    치환은 표현 전환으로 인정하지 않으므로 통찰 0 · 필수 예제 출발 ★2 유지.
  tier: star_2
  mechanism_primary: 'log_{1/3}x^3=3t 로 차수 내림 → t^2+3t+2<0 → −2<t<−1 → 밑<1 이므로 3<x<9'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3<x<9$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/122-e22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '진수의 지수 3, 우변 −2, 밑 1/3 을 바꿀 수 있다. 제약: t 의 이차부등식이 정수근을 갖도록 계수를 짝지어야 x 경계가 밑의 정수 거듭제곱이 된다. 밑을 3 으로 바꾸면 최종 구간의 방향이 반대가 된다.'
    creative: '(1) 부등호를 뒤집어 해가 두 구간이 되게 하기(★2) (2) 우변을 매개변수 k 로 두고 해가 존재할 k 조건을 묻기(★3 · I-BW) (3) 진수를 $x$ 와 $9x$ 처럼 둘로 나누면 122-300⑶ 의 곱꼴이 되어 계산량이 오른다.'
```

```yaml
- id: GN-ALG-122-299
  page: 122
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴⑵ 진수에 로그가 들어간 부등식 $\log_4 (\log_2 x-1)\le 1$, $\log_{1/2} (\log_3 x)\ge -1$ 의 해를 구한다.
  category: '안쪽 로그식>0 → 바깥 로그 풀기 → 안쪽 로그부등식 환원'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "진수에 로그가 포함된 로그부등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    122-e21 과 같은 두 줄 골조다. ⑴ 은 $0<\log_2 x-1\le 4$ 로 한 번에 묶이고 ⑵ 는 밑 1/2 이라 $0<\log_3 x\le 2$ 로 방향이 뒤집힌다.
    안쪽 로그식의 양수 조건이 답의 왼쪽 열린 끝을 만드는 것이 두 소문항 공통. 통찰 0 · 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: '안쪽 로그식>0 과 바깥 부등식을 이중 부등식으로 묶기 → 안쪽 밑으로 x 환원'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $2<x\le 32$ ⑵ $1<x\le 9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/122-299.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '바깥 밑(4·1/2)과 우변(1·−1), 안쪽 밑(2·3)을 바꿀 수 있다. 제약: 바깥 부등식의 우변은 정수로 두어 안쪽 로그의 경계가 정수가 되게 하고, 안쪽 로그식이 $\log_2 x-1$ 처럼 평행이동되면 x 경계가 밑의 거듭제곱의 배수로 옮겨지는 것을 확인한다.'
    creative: '(1) 해에 속하는 자연수 x 의 개수를 묻기(★2) (2) 두 소문항을 연립으로 묶기(★3) (3) 바깥 진수를 $\log_2 x-a$ 로 두고 해가 주어졌을 때 a 를 묻는 역방향(★3 · I-BW).'
```

```yaml
- id: GN-ALG-122-300
  page: 122
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 같은 로그가 반복되는 부등식 네 개(직접 이차형 둘, $\log_{1/3}x\times\log_{1/3}9x$ · $\log_2 8x^2\times\log_{1/2}\frac{4}{x}$ 의 곱꼴 둘)를 푼다.
  category: 'log 를 t 로 치환(곱꼴은 각 인수를 t 의 일차식으로 전개) → 이차부등식 → x 환원'
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '$\log_a x$ 치환형 로그부등식(곱꼴 전개 포함)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑶⑷ 가 이 묶음의 본체다. $\log_{1/3}9x=-2+t$, $\log_2 8x^2=3+2t$, $\log_{1/2}\frac{4}{x}=-2+t$ 처럼 각 인수를 $t$ 의 일차식으로 펼쳐야 곱이 이차부등식이 된다.
    ⑵⑷ 는 해가 두 구간으로 갈리고 왼쪽 구간이 진수 조건 $x>0$ 에 걸려 $0<x<\cdots$ 로 닫히는 점이 공통 함정이다.
    [분류 이슈] 전개·인수분해 계산량은 ★3 급이나 통찰 라벨이 없고 「계산만 무거운 문제는 변별력 약함」 원칙이 있어 ★2 로 둔다.
  tier: star_2
  mechanism_primary: '각 로그를 t=log_a x 의 일차식으로 전개 → 곱을 이차부등식으로 → t 범위 → x 환원'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{1}{27}<x<\sqrt{3}$ ⑵ $0<x<\dfrac{1}{16}$ 또는 $x>8$ ⑶ $\dfrac{1}{27}\le x\le 3$ ⑷ $0<x\le\dfrac{\sqrt{2}}{8}$ 또는 $x\ge 8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/122-300.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '각 인수 안의 계수(9x·8x^2·4/x)와 우변 상수(3·9)를 바꿀 수 있다. 제약: 전개한 두 일차식의 곱이 인수분해되는 이차부등식이 되도록 상수를 맞추고, t 의 근이 정수나 반정수라야 x 경계가 $\sqrt{3}$·$\frac{\sqrt{2}}{8}$ 처럼 정리된 꼴로 떨어진다.'
    creative: '(1) 곱꼴을 합꼴($\log x+\log 9x$)로 바꾸면 일차부등식이 되어 ★1~2 로 내려간다 (2) 우변을 매개변수로 두고 해가 한 구간이 될 조건을 묻기(★3 · I-BW) (3) 밑을 문자로 두면 밑 분기가 생겨 ★3~4.'
```

```yaml
- id: GN-ALG-123-e23
  page: 123
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    지수에 로그가 들어간 부등식 $x^{\log_2 x}<8x^2$ 을 푼다.
  category: '양변에 로그 취하기 → 지수를 끌어내려 t 의 이차부등식 → x 환원'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "지수에 로그가 있어 그대로는 비교가 안 되므로 양변에 $\\log_2$ 를 취해 지수식을 $t=\\log_2 x$ 의 이차식으로 옮긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수에 로그가 포함된 부등식(양변 로그)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x>0$ 이라 양변이 모두 양수이고 밑 2 가 1보다 커 방향이 유지된다. 로그를 취하면 $t^2<3+2t$ 로 앞 유형의 치환형에 합류한다.
    「양변에 로그를 취한다」는 착안이 없으면 진행이 막히므로 I-RT d1 을 한 단계 붙였다(예제가 그 착안 자체를 가르치는 자리라 depth 는 1).
    필수 예제 출발 ★2 · 통찰 1개 d1 → ★2 유지.
  tier: star_2
  mechanism_primary: '양변 log_2 → (log_2 x)^2<3+2log_2 x → t^2−2t−3<0 → −1<t<3 → 1/2<x<8'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{2}<x<8$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/123-e23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변의 상수 8 과 x 의 차수 2, 밑 2 를 바꿀 수 있다. 제약: 로그를 취한 뒤 이차부등식이 정수근을 갖도록 상수를 고르고(그래야 x 경계가 밑의 거듭제곱), 우변은 항상 양수라야 양변에 로그를 취할 수 있다.'
    creative: '(1) 밑을 3 으로 바꾸고 우변을 $9x$ 로(★2 · 123-301⑴ 과 동형) (2) 좌변 밑을 $\frac{1}{2}x$ 처럼 묶으면 로그를 취할 때 방향이 뒤집혀 ★3(123-301⑵) (3) 해가 주어졌을 때 우변 상수를 묻는 역방향이면 I-BW 가 붙어 ★3.'
```

```yaml
- id: GN-ALG-123-301
  page: 123
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴⑵ 지수에 로그가 들어간 부등식 $x^{\log_3 x}<9x$, $\left(\frac{1}{2}x\right)^{\log_{1/2} x-2}\ge\frac{1}{16}$ 의 해를 구한다.
  category: '양변에 로그 → 지수 끌어내리기 → t 의 이차부등식 → x 환원'
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "양변에 로그를 취해 지수에 있던 로그를 계수로 내려 이차부등식으로 옮긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수에 로그가 포함된 부등식(양변 로그)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 123-e23 과 같은 꼴이고 ⑵ 가 한 겹 더 어렵다. 밑 $1/2$ 로 로그를 취하면 부등호가 뒤집히고, $\log_{1/2}\frac{x}{2}$ 형태 때문에 지수의 $t-2$ 와 밑의 $1+t$ 가 동시에 t 의 일차식이 되어 곱이 이차식이 된다.
    착안은 e23 과 같은 I-RT d1 한 단계. 확인체크 출발 ★2 · 통찰 1개 d1 → ★2 유지이나 ⑵ 의 방향 반전 함정은 체감 ★3 에 가깝다.
  tier: star_2
  mechanism_primary: '양변에 같은 밑 로그 → (지수)×(밑의 로그)=우변의 로그 → t 이차부등식 → x 환원'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\dfrac{1}{3}<x<9$ ⑵ $\dfrac{1}{8}\le x\le 4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/123-301.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 의 우변 9x, ⑵ 의 지수 상수 −2 와 우변 1/16 을 바꿀 수 있다. 제약: 로그를 취한 뒤 얻는 이차부등식이 정수근을 갖게 하고, ⑵ 처럼 밑이 1보다 작은 로그를 취할 때는 부등호가 한 번만 뒤집히는지 확인한다.'
    creative: '(1) ⑵ 의 부등호를 뒤집어 해가 두 구간이 되게 하기(★3) (2) 밑을 $ax$ 로 두고 해가 주어졌을 때 a 를 묻기(★3~4 · I-BW) (3) 지수에 $\log x$ 와 상수를 함께 두어 삼차가 되면 범위 밖.'
```

```yaml
- id: GN-ALG-123-302
  page: 123
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    부등식 $2^{\log_5 x}\times x^{\log_5 2}\ge 10\times 2^{\log_5 x}-16$ 을 푼다.
  category: '로그 지수 교환 항등식으로 두 항을 같게 → 치환 → 이차부등식 → x 환원'
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$x^{\\log_5 2}=2^{\\log_5 x}$ 임을 알아채 좌변을 $u=2^{\\log_5 x}$ 의 제곱으로 바꾼다 — 이 동치 변환 없이는 치환 자체가 불가능"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "로그 지수 교환 항등식을 이용한 지수부등식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    겉보기에는 서로 다른 두 지수식이지만 양변에 로그를 취해 비교하면 $x^{\log_5 2}$ 와 $2^{\log_5 x}$ 가 같다. 그 순간 $u^2-10u+16\ge 0$ 으로 떨어지고 $u\le 2$ 또는 $u\ge 8$ 이 나온다.
    항등식을 못 보면 손을 못 대는 진입 저항이 있어 I-EQV d2 를 붙였다. 마지막에 $u$ 를 $\log_5 x$ 로 되돌릴 때 $u>0$ 이므로 왼쪽 구간이 $0<x\le 5$ 로 닫힌다.
    확인체크 출발 ★2 + 핵심 통찰 d2 · M_total 8 → ★3.
  tier: star_3
  mechanism_primary: 'x^{log_5 2}=2^{log_5 x} → u=2^{log_5 x}>0 치환 → u^2−10u+16≥0 → u≤2 또는 u≥8 → x 환원'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$0<x\le 5$ 또는 $x\ge 125$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/123-302.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑 쌍(2, 5)과 우변 계수 10·16 을 바꿀 수 있다. 제약: $u$ 의 이차부등식 두 근이 모두 밑 2 의 정수 거듭제곱이라야 x 경계가 5 의 거듭제곱으로 떨어지고, 두 근이 양수라야 $u>0$ 조건이 왼쪽 구간만 잘라낸다.'
    creative: '(1) 부등호를 ≤ 로 바꿔 해가 한 구간이 되게 하기(★3 유지) (2) $u$ 의 두 근 중 하나가 음수가 되게 해 한 분기가 $u>0$ 에 의해 기각되게 하면 I-VF 가 추가돼 ★4 (3) 항등식을 힌트로 주면 통찰이 사라져 ★2.'
```

```yaml
- id: GN-ALG-124-e24
  page: 124
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    모든 양수 $x$ 에 대하여 $(\log_{1/3} x)^2-6\log_{1/3} x+3\log_{1/3} k>0$ 이 성립하도록 하는 실수 $k$ 의 범위를 구한다.
  category: '치환 범위 확인(x>0 ⟺ t 는 모든 실수) → t 이차부등식 항상 성립 → 판별식 → k 로그부등식'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「모든 양수 x」를 「$t=\\log_{1/3}x$ 가 모든 실수」로 옮겨야 판별식을 쓸 수 있다 — 치환 범위를 확인하지 않으면 조건이 성립하지 않는다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "로그부등식이 항상 성립할 조건(치환 범위 + 판별식)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    치환하면 $t^2-6t+3\log_{1/3}k>0$ 이고, $t$ 가 실수 전체를 훑으므로 판별식 $<0$ 이 필요충분이다. 여기서 $\log_{1/3}k>3$ 이 나오고 밑이 1보다 작아 $k<\left(\frac{1}{3}\right)^3$ 으로 뒤집힌다.
    치환 범위가 전체 실수임을 짚는 단계가 이 유형의 핵심이라 I-EQV d2 를 붙였다. 마지막에 진수 조건 $k>0$ 을 다시 붙여야 답이 구간으로 닫힌다.
    필수 예제 출발 ★2 + 매개변수(Mₐ 2)·핵심 통찰 d2 → ★3.
  tier: star_3
  mechanism_primary: 't=log_{1/3}x 는 모든 실수 → t^2−6t+3log_{1/3}k>0 항상 → D/4<0 → log_{1/3}k>3 → 0<k<1/27'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$0<k<\dfrac{1}{27}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/124-e24.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '일차항 계수 −6 과 $\log_{1/3}k$ 의 계수 3, 밑 1/3 을 바꿀 수 있다. 제약: 판별식에서 나오는 $\log k$ 의 경계가 정수라야 k 가 밑의 정수 거듭제곱으로 떨어지고, 밑이 1보다 작으면 마지막 환원에서 부등호가 뒤집힌다.'
    creative: '(1) 부등호를 ≥ 로 바꿔 판별식 ≤0 으로(경계 포함 · ★3 유지) (2) 「모든 양수 x」를 「$x\ge 1$ 인 모든 x」로 좁히면 t 범위가 반직선이 되어 꼭짓점 위치 분기가 생겨 ★4 (3) k 의 최댓값·최솟값을 묻는 꼴(124-303 형 · ★3).'
```

```yaml
- id: GN-ALG-124-e25
  page: 124
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    이차방정식 $x^2-2(1+\log a)x+1-(\log a)^2=0$ 이 서로 다른 두 실근을 갖도록 하는 양수 $a$ 의 범위를 구한다.
  category: '판별식>0 → log a 의 이차부등식 → 인수분해 → a 범위 환원'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그를 계수로 갖는 이차방정식의 실근 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $L=\log a$ 로 두면 $D/4=(1+L)^2-\left(1-L^2\right)=2L(L+1)>0$ 으로 정리되어 $L<-1$ 또는 $L>0$ 이다. 되돌릴 때 밑 10 이 1보다 커 방향이 유지되고 진수 조건 $a>0$ 이 왼쪽 구간을 닫는다.
    판별식 → 로그부등식은 교과서가 명시한 결합 절차라 통찰 라벨은 붙이지 않았다.
    [분류 이슈] 통찰 0 이나 M_total 8 로 노동량이 필수 예제 평균보다 커 ★2/★3 이 갈린다. 규칙대로 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: 'L=log a 치환 → D/4=2L(L+1)>0 → L<−1 또는 L>0 → a<1/10 또는 a>1 (a>0)'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0<a<\dfrac{1}{10}$ 또는 $a>1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/124-e25.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '일차항의 $1+\log a$ 와 상수항의 $1-(\log a)^2$ 안의 상수를 바꿀 수 있다. 제약: 판별식이 $L$ 에 대해 인수분해되는 이차식이 되도록 짝을 맞추고, 근이 정수라야 a 경계가 10 의 정수 거듭제곱이 된다.'
    creative: '(1) 「중근」·「실근이 없다」로 바꾸기(★2 · 124-304 형) (2) 이차항 계수에도 $\log a$ 를 넣으면 최고차항 ≠0 검증이 생겨 I-VF 로 ★3(127-316 형) (3) 두 근의 부호 조건을 추가하면 조건이 셋이 되어 ★3~4.'
```

```yaml
- id: GN-ALG-124-303
  page: 124
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    모든 양수 $x$ 에 대하여 $(\log_2 x)^2\ge\log_2\frac{x^4}{a}$ 이 성립하도록 하는 양수 $a$ 의 최솟값을 구한다.
  category: '우변을 로그 성질로 전개 → t 이차부등식 항상 성립 → 판별식 ≤0 → a 범위의 끝값'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「모든 양수 x」를 「$t=\\log_2 x$ 가 모든 실수」로 옮겨 판별식 조건으로 바꾼다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "로그부등식이 항상 성립할 조건(최솟값 구하기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $\log_2\frac{x^4}{a}=4t-\log_2 a$ 로 펴면 $t^2-4t+\log_2 a\ge 0$ 이 모든 실수 t 에서 성립할 조건, 즉 $D/4\le 0$ 이다.
    부등호에 등호가 있어 판별식도 등호를 포함하고, 그 경계값이 그대로 최솟값이 되는 구조다(T-경계).
    124-e24 와 같은 치환 범위 통찰(I-EQV d2) 한 단계. 확인체크 출발 ★2 + d2 통찰·매개변수 → ★3.
  tier: star_3
  mechanism_primary: 't=log_2 x 는 모든 실수 → t^2−4t+log_2 a≥0 항상 → D/4=4−log_2 a≤0 → a≥16 → 최솟값 16'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/124-303.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변 진수의 지수 4 와 밑 2 를 바꿀 수 있다. 제약: 판별식에서 나오는 $\log_2 a$ 의 경계가 정수라야 a 가 밑의 정수 거듭제곱으로 떨어진다. 지수를 홀수로 하면 경계가 반정수가 되어 a 에 근호가 남는다.'
    creative: '(1) 최댓값을 묻도록 부등호를 뒤집기(★3 유지) (2) $x\ge 2$ 범위로 좁히면 t 가 반직선이 되어 꼭짓점 분기로 ★4 (3) a 를 정수로 제한하고 가능한 a 의 개수를 묻기(★3).'
```

```yaml
- id: GN-ALG-124-304
  page: 124
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    이차방정식 $x^2-2(1-\log_2 a)x-3(\log_2 a-1)=0$ 의 실근이 존재하지 않도록 하는 양수 $a$ 의 범위를 구한다.
  category: '판별식<0 → log_2 a 의 이차부등식 → 공통인수로 인수분해 → a 범위'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그를 계수로 갖는 이차방정식의 실근 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $L=\log_2 a$ 로 두면 $D/4=(1-L)^2+3(L-1)=(L-1)(L+2)<0$ 으로, $L-1$ 이 두 항에 공통으로 들어 있어 전개 없이 묶인다.
    $-2<L<1$ 을 $a$ 로 되돌리면 밑 2 가 1보다 커 방향 유지. 124-e25 와 같은 절차형 골조라 통찰 0 · 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: 'L=log_2 a → D/4=(L−1)(L+2)<0 → −2<L<1 → 1/4<a<2'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{4}<a<2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/124-304.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '상수항의 계수 −3 과 일차항의 $1-\log_2 a$ 를 바꿀 수 있다. 제약: 판별식이 $L$ 의 인수분해 가능한 이차식이 되도록 짝을 맞추고, 근이 정수라야 a 경계가 2 의 정수 거듭제곱이 된다.'
    creative: '(1) 「서로 다른 두 실근」·「중근」으로 바꾸기(★2) (2) 두 근이 모두 양수일 조건을 추가하면 조건 세 개 연립으로 ★3 (3) 이차항 계수에 로그를 넣으면 이차 여부 검증이 붙어 ★3(127-316 형).'
```

```yaml
- id: GN-ALG-125-e26
  page: 125
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    총인구는 매년 $0.3\,\%$, $65$ 세 이상 인구는 매년 $4\,\%$ 씩 늘 때 $65$ 세 이상 비율이 처음으로 $20\,\%$ 이상이 되는 시기를 고른다(2000년 총인구 1000만·고령 50만 · 5지선다).
  category: '두 지수모형의 비 → 비율 조건을 지수부등식으로 → 상용로그 → 최소 자연수 n → 연도 구간'
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「비율이 20% 이상」이라는 문장 조건을 두 지수식의 비 $\\left(\\frac{1.04}{1.003}\\right)^n\\ge 4$ 라는 한 개의 지수부등식으로 옮긴다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "로그부등식의 실생활 활용(두 증가율의 비)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 인구를 각각 지수식으로 세운 뒤 비를 취해 미지수를 하나로 줄이는 것이 골조다. 상용로그를 취하면 $n(\log 1.04-\log 1.003)\ge 2\log 2$ 로 주어진 근삿값만으로 계산된다.
    문장 → 부등식 모델링이 진입 장벽이라 I-RT d2 한 단계. 마지막에 $n$ 을 최소 자연수로 올림하고 2000년에 더해 선택지 구간으로 옮기는 경계 처리가 함정이다(T-경계).
    발전 예제 출발 ★3 유지.
  tier: star_3
  mechanism_primary: '두 지수모형의 비 → (1.04/1.003)^n≥4 → 상용로그 → n 의 최소 자연수 → 2000+n 의 연도 구간'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/125-e26.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 증가율(0.3 %·4 %), 초기 비율(5 %), 기준 비율(20 %), 기준 연도를 바꿀 수 있다. 제약: 주어진 상용로그 근삿값으로만 계산되도록 밑을 제한하고(log 1.003·log 1.04·log 2), 기준/초기 비율의 비가 2 의 거듭제곱이라야 $\log 2$ 만으로 우변이 정리된다. 답 연도가 선택지 구간의 가운데에 오게 한다.'
    creative: '(1) 「몇 년 후부터인가」로 바꿔 자연수 답으로(★3 유지) (2) 두 증가율의 대소를 뒤집어 비율이 감소하는 설정으로 만들면 해가 없음을 보여야 해 I-VF 가 붙고 ★4 (3) 증가율을 매개변수 r 로 두고 조건을 만족할 r 범위를 묻기(★4 · I-BW).'
```

```yaml
- id: GN-ALG-125-305
  page: 125
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $t$ 년 후 남은 양이 $A\left(\frac{1}{3}\right)^{t/50}\,\mathrm{kg}$ 일 때 $500\,\mathrm{kg}$ 이 $5\,\mathrm{kg}$ 이하가 되는 최소 자연수 $m$ 을 구한다($\log 3$ 주어짐).
  category: '모형에 값 대입 → 지수부등식 → 상용로그(밑<1 이라 방향 반전) → 최소 자연수'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수 감소 모형의 로그부등식(최소 연수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    모형이 발문에 그대로 주어져 모델링 단계가 없다. $\left(\frac{1}{3}\right)^{t/50}\le\frac{1}{100}$ 에 상용로그를 취하면 $\frac{t}{50}\log 3\ge 2$ 로 방향이 뒤집히는 것이 유일한 함정이다(T-부호).
    $t\ge 209.6\cdots$ 에서 최소 자연수로 올리는 경계 처리까지 절차가 고정돼 통찰 0 · 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: '(1/3)^{t/50}≤1/100 → 상용로그(밑<1 이라 반전) → t≥100/log3 → 최소 자연수 m'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$210$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/125-305.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '반감 밑(1/3), 주기 50, 초기량 500, 목표량 5 를 바꿀 수 있다. 제약: 초기량/목표량이 10 의 거듭제곱이라야 우변이 $\log$ 없이 정수로 떨어지고, 주어진 근삿값($\log 3$) 하나만으로 계산이 끝나야 한다.'
    creative: '(1) 목표를 「처음의 몇 % 이하」로 바꾸기(★2 유지) (2) 두 물질의 잔류량을 비교해 어느 쪽이 먼저 기준에 닿는지 묻기(★3 · I-SC) (3) 주기를 매개변수로 두고 조건을 만족할 주기 범위를 묻기(★3 · I-BW).'
```

```yaml
- id: GN-ALG-125-306
  page: 125
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    한 번 통과할 때마다 오염 물질이 $10\,\%$ 제거될 때 처음의 $2\,\%$ 이하로 줄이려면 최소 몇 번 통과시켜야 하는지 고른다(5지선다 · $\log 2$, $\log 3$ 주어짐).
  category: '반복 시행 → 0.9^n 부등식 → 상용로그(log 0.9<0 이라 방향 반전) → 최소 자연수'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "반복 시행 감소 모형의 로그부등식(최소 횟수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $0.9^n\le 0.02$ 에 상용로그를 취하면 $\log 0.9=2\log 3-1<0$ 이므로 양변을 나눌 때 부등호가 뒤집힌다 — 이 단원 실생활 문항의 고정 함정이다(T-부호).
    $\log 0.02=\log 2-2$ 로 고치는 것도 주어진 근삿값 안에서 끝난다. 절차 고정 · 통찰 0 · 확인체크 출발 ★2 유지.
  tier: star_2
  mechanism_primary: '0.9^n≤0.02 → 상용로그 → n≥(2−log2)/(1−2log3) → 최소 자연수'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/125-306.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '제거율(10 %)과 목표 비율(2 %)을 바꿀 수 있다. 제약: 남는 비율이 $\log 2$·$\log 3$ 조합으로 표현되는 수(0.9·0.8·0.75)라야 주어진 근삿값만으로 풀리고, 답이 선택지 다섯 개의 가운데쯤 오도록 목표 비율을 맞춘다.'
    creative: '(1) 「최대 몇 번까지 통과시켜도 기준을 못 맞추는가」로 경계를 뒤집기(★2) (2) 제거율이 매회 달라지는 두 기계를 비교하기(★3 · I-SC) (3) 목표 비율을 매개변수로 두고 n=10 이 되게 하는 범위를 묻기(★3 · I-BW).'
```

### 연습문제 STEP 1

```yaml
- id: GN-ALG-126-307
  page: 126
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    부등식 $\log_2 (x+2)\le\log_2\left(\dfrac{1}{3}x+k\right)$ 를 만족시키는 정수 $x$ 의 개수가 3일 때 자연수 $k$ 의 값.
  category: "진수 조건 → 일차부등식 → 정수해 개수로 경계 역추적"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "정수해가 3개라는 결과에서 해의 오른쪽 끝이 놓여야 할 구간을 역추적해 k 의 범위를 만든다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정수해의 개수 조건으로 상수를 정하는 로그부등식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    밑 2>1 이라 진수 비교가 그대로 부등호를 보존한다. 진수 조건은 $x+2>0$ 하나면 충분하다 — 부등식이 성립하면 다른 진수는 자동으로 양수다(T-범위를 두 번 따지지 않아도 되는 자리).
    해가 $-2<x\le\dfrac{3k-6}{2}$ 꼴이므로 정수 3개는 $-1,0,1$ 로 확정되고, 오른쪽 끝이 $1$ 이상 $2$ 미만이어야 한다는 경계 부등식이 나온다(I-BW d2).
    STEP 1 출발 ★2 · 통찰 1개 depth 2 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: '진수조건 x>−2 → x+2 ≤ x/3+k → −2<x≤(3k−6)/2 → 정수 3개(−1,0,1) 경계 → k'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/126-307.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '진수의 일차식 계수 $\dfrac{1}{3}$ 와 상수항 $2$, 정수 개수 3을 바꿀 수 있다. 제약: 왼쪽 끝이 진수 조건에서 오는 무리 없는 정수 경계라야 정수 개수가 깔끔하게 세어지고, 오른쪽 끝을 결정하는 부등식의 해에 자연수 $k$ 가 하나만 들어가야 답이 유일하다.'
    creative: '(1) 정수 개수를 묻는 대신 「해가 $-2<x\le 4$ 가 되는 $k$」로 바꾸기(역추적이 한 단계 줄어 ★2 아래) (2) 밑을 $\dfrac{1}{2}$ 로 바꿔 부등호가 뒤집히게 하면 왼쪽·오른쪽 끝이 바뀌어 T-부호가 추가된다(★3) (3) 두 진수를 모두 일차식으로 두어 진수 조건 교집합이 실제로 해를 자르게 하면 I-VF 가 붙어 ★3.'
```

```yaml
- id: GN-ALG-126-308
  page: 126
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    밑에 미지수가 있는 부등식 $\log_{x-2}(2x^2-11x+14)<2$ 를 푸는 문제.
  category: "밑·진수 조건 → 밑의 크기로 두 갈래 → 이차부등식 → 한 갈래 기각"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "밑 $x-2$ 가 1보다 큰지 작은지로 부등호 방향이 갈려 두 시나리오를 모두 따져야 한다"
    - step: 4
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$0<x-2<1$ 갈래는 진수 조건 $x>\\dfrac{7}{2}$ 와 겹치지 않아 통째로 기각된다 — 검증을 빼면 틀린 구간이 답에 섞인다"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "밑에 미지수가 있는 로그부등식(밑 범위 분기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    밑 조건 $x>2,\ x\ne 3$ 과 진수 $(2x-7)(x-2)>0$ 에서 먼저 $x>\dfrac{7}{2}$ 가 나온다. 진수가 인수분해되어 밑 $x-2$ 를 품고 있다는 점이 계산을 짧게 만든다.
    밑>1 갈래에서 $2x^2-11x+14<(x-2)^2$ → $2<x<5$ 이고, 밑<1 갈래는 $2<x<3$ 이라 진수 조건과 교집합이 비어 전부 기각된다(I-MI d2 + I-VF d2).
    STEP 1 출발 ★2 · 통찰 2개 → +1 → ★3.
  tier: star_3
  mechanism_primary: '밑·진수 조건 → 밑>1 / 0<밑<1 두 갈래 → 각 갈래 이차부등식 → 조건 위배 갈래 기각 → 교집합'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{7}{2}<x<5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/126-308.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '진수 이차식의 계수와 우변 상수 2를 바꿀 수 있다. 제약: 진수가 밑 $x-2$ 를 인수로 갖도록 설계해야 이차부등식이 일차로 떨어지고, 두 갈래 중 하나가 조건으로 완전히 기각되도록 진수 조건의 하한을 밑<1 구간 밖에 둔다.'
    creative: '(1) 밑을 $x-2$ 대신 $|x-2|$ 나 $x^2-4$ 로 두어 밑 조건 자체가 두 구간이 되게 하기(★4 · I-MI 강화) (2) 두 갈래가 모두 살아남아 합집합이 답이 되게 하면 I-VF 가 빠지고 ★3 유지 (3) 우변 2를 $\log_{x-2}k$ 꼴로 바꿔 매개변수 역추적을 붙이면 ★4.'
```

```yaml
- id: GN-ALG-126-309
  page: 126
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    연립부등식 $2\log_{\frac{1}{2}}(x-5)>\log_{\frac{1}{2}}(x+7)$, $\left(\log_2\dfrac{x}{2}\right)^2-\log_2 x^2+2<0$ 의 해가 $\alpha<x<\beta$ 일 때 $\alpha\beta$.
  category: "밑<1 부호 반전 → 이차부등식 / 치환 이차부등식 → 두 해의 교집합"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "로그 연립부등식(밑<1 반전 + 치환형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 부등식 모두 이 단원의 표준 절차다. 첫 식은 밑 $\dfrac{1}{2}$ 이므로 진수 비교에서 부등호가 뒤집혀 $(x-5)^2<x+7$ 이 되고 진수 조건 $x>5$ 와 합쳐 $5<x<9$.
    둘째 식은 $\log_2 x=t$ 치환으로 $t^2-4t+3<0$ → $2<x<8$. 교집합 $5<x<8$ 에서 곱을 읽으면 끝이다.
    분기·역추적 없이 절차만 길어 통찰 0. STEP 1 출발 ★2 · M_total 8 이라 감점 없이 ★2 유지.
  tier: star_2
  mechanism_primary: '밑<1 반전 → (x−5)²<x+7 ∧ x>5 / log₂x=t → t²−4t+3<0 → 두 구간 교집합 → αβ'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$40$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/126-309.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '첫 식의 $x-5$·$x+7$ 상수와 둘째 식의 $\dfrac{x}{2}$·$x^2$ 안 계수를 바꿀 수 있다. 제약: 두 해 구간이 실제로 겹쳐 한 구간으로 나오고 교집합의 양 끝이 모두 $2$ 의 거듭제곱 또는 정수라야 $\alpha\beta$ 가 깔끔하다.'
    creative: '(1) 교집합이 비게 만들어 「해가 없음」을 답으로 하기(★3 · I-VF) (2) 둘째 식을 부등호 반대로 바꿔 해가 두 구간이 되게 하면 교집합이 분리돼 I-MI 가 붙는다(★3) (3) $\alpha\beta$ 대신 「정수 해의 개수」를 물으면 경계 처리 비중이 커진다(★2 유지).'
```

```yaml
- id: GN-ALG-126-310
  page: 126
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    부등식 $\log_{\frac{1}{2}}8x\times\log_2\dfrac{x}{2}>-5$ 의 해가 $\alpha<x<\beta$ 일 때 $\dfrac{\beta}{\alpha}$.
  category: "밑 통일 → 곱꼴을 t 이차부등식으로 → 해 구간의 비"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '$\log_a x$ 치환형 로그부등식(곱꼴 전개 포함)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    밑이 $\dfrac{1}{2}$ 와 $2$ 로 다르므로 $\log_{\frac{1}{2}}8x=-(3+t)$ 로 먼저 통일하는 것이 유일한 요령이고, 이는 122-300 계열에서 이미 반복된 표준 절차다.
    $t=\log_2 x$ 로 두면 $t^2+2t-8<0$ → $-4<t<2$ → $\dfrac{1}{16}<x<4$. 두 끝의 비는 지수의 차로 바로 읽힌다.
    통찰 0 · M_total 6 이라 STEP 1 출발 ★2 에서 감점 조건(M_total ≤ 5)에는 걸리지 않아 ★2.
  tier: star_2
  mechanism_primary: 'log_{1/2}8x=−(3+t), log₂(x/2)=t−1 → −(3+t)(t−1)>−5 → t²+2t−8<0 → −4<t<2 → β/α'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$64$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/126-310.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '진수의 계수 $8$·$\dfrac{1}{2}$ 와 우변 $-5$ 를 바꿀 수 있다. 제약: 전개한 $t$ 이차부등식의 판별식이 완전제곱이라 두 근이 정수로 떨어져야 하고, 그래야 $\dfrac{\beta}{\alpha}$ 가 2의 거듭제곱으로 나온다.'
    creative: '(1) 두 로그의 밑을 $3$ 과 $\dfrac{1}{3}$ 으로 바꾸기(골조 동일 ★2) (2) 부등호를 뒤집어 해가 두 구간이 되게 하면 $\alpha\beta$ 를 묻는 형태로 바뀐다(★2~3) (3) 우변을 $k$ 로 두고 「해가 존재할 $k$ 의 범위」를 물으면 판별식 역추적이 붙어 ★3 · I-BW.'
```

```yaml
- id: GN-ALG-126-311
  page: 126
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    부등식 $(1+\log_3 x)(a-\log_3 x)>0$ 의 해가 $\dfrac{1}{3}<x<9$ 일 때 상수 $a$.
  category: "치환 → 해 구간을 t 구간으로 번역 → 인수 곱 부등식의 끝값 비교"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "주어진 해 구간을 $t=\\log_3 x$ 구간 $-1<t<2$ 로 옮겨 인수 곱 부등식의 두 끝과 맞춰 $a$ 를 읽는다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "해가 주어진 로그부등식에서 상수 역추적(치환형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $t=\log_3 x$ 로 두면 $(1+t)(a-t)>0$ 이고, $a>-1$ 일 때 해는 $-1<t<a$ 다. 주어진 해 $\dfrac{1}{3}<x<9$ 를 $-1<t<2$ 로 번역하면 $a=2$ 가 바로 읽힌다.
    $x$ 구간을 $t$ 구간으로 옮기는 한 번의 역추적이 전부이고 계산은 없다(I-BW d1).
    STEP 1 출발 ★2 · 통찰 1개 depth 1 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: 't=log₃x → (1+t)(a−t)>0 → −1<t<a → 주어진 해 ↔ −1<t<2 → a=2'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/126-311.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑 $3$, 인수의 상수 $1$, 주어진 해의 양 끝을 바꿀 수 있다. 제약: 해의 왼쪽 끝이 고정 인수 $1+\log_3 x$ 가 주는 값과 반드시 일치해야 하고(아니면 해가 없거나 모순), 오른쪽 끝은 밑의 거듭제곱이라야 $a$ 가 정수로 떨어진다.'
    creative: '(1) $a<-1$ 인 경우도 가능하게 해 두 갈래를 따지게 하면 I-MI 가 붙어 ★3 (2) 해를 $0<x<\dfrac{1}{3}$ 또는 $x>9$ 처럼 두 구간으로 주면 부등호 방향이 반대인 경우를 골라야 한다(★3) (3) 인수를 $(b+\log_3 x)(a-\log_3 x)$ 로 두어 미지 상수 두 개를 동시에 역추적(★3 · I-CON).'
```

```yaml
- id: GN-ALG-126-312
  page: 126
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    모든 실수 $x$ 에 대하여 $\log_3 (x^2-2kx+36)\ge 3$ 이 성립하게 하는 실수 $k$ 의 최댓값 $M$, 최솟값 $m$ 에 대한 $Mm$ (단, $-6<k<6$).
  category: "로그부등식 → 이차식 하한 조건 → 판별식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「모든 $x$ 에서 성립」을 $x^2-2kx+9\\ge 0$ 즉 판별식 $\\le 0$ 으로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "로그부등식이 항상 성립할 조건(판별식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    밑 3>1 이므로 $\log_3(\cdot)\ge 3$ 은 진수 $\ge 27$ 과 동치이고, 이때 진수가 양수라는 조건은 자동으로 따라온다 — 진수 조건을 따로 세우려다 시간을 쓰는 자리다.
    $x^2-2kx+9\ge 0$ 이 항상 성립할 조건은 $D/4=k^2-9\le 0$ → $-3\le k\le 3$. 주어진 $-6<k<6$ 은 이 구간을 자르지 않는다(I-EQV d1).
    124-e24·124-303 과 같은 골조의 축소판. STEP 1 출발 ★2 유지.
  tier: star_2
  mechanism_primary: '밑>1 → 진수 ≥ 3³ → x²−2kx+9 ≥ 0 (모든 x) → D/4=k²−9 ≤ 0 → −3≤k≤3 → Mm'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/126-312.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑 3과 우변 3, 상수항 36을 바꿀 수 있다. 제약: 진수에서 $3^3$ 을 뺀 뒤 남는 상수항이 완전제곱이라야 $k$ 의 경계가 정수로 떨어지고, 덧붙인 범위 조건($-6<k<6$)은 해 구간을 자르지 않도록 넉넉히 둔다.'
    creative: '(1) 밑을 $\dfrac{1}{3}$ 으로 바꿔 부등호가 뒤집히면 진수 상한 조건이 되어 「모든 $x$ 에서 성립」이 불가능해진다 — 참·거짓 판단 문제로 전환(★3 · I-VF) (2) 범위 조건을 $k>0$ 처럼 해를 실제로 자르게 주면 교집합 검증이 살아난다(★3) (3) 「성립하지 않는 $k$」를 물어 여집합을 취하게 하기(★2~3).'
```

### 연습문제 STEP 2

```yaml
- id: GN-ALG-126-313
  page: 126
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    부등식 $\left(\dfrac{2}{3}\right)^{-2+\log_2 (x^2-4x)}\ge\left(\dfrac{2}{3}\right)^{\log_2 (x-3)}$ 을 푸는 문제.
  category: "밑<1 지수부등식 → 지수 비교 반전 → 로그부등식 → 진수 조건 교집합"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "밑 $\\dfrac{2}{3}<1$ 인 지수부등식을 지수끼리의 부등식으로 옮기면서 부등호를 뒤집는다 — 겉은 지수, 속은 로그부등식"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지수부등식으로 위장한 로그부등식(밑<1 반전)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    양변의 밑이 같은 $\dfrac{2}{3}$ 이므로 지수 비교로 내려오되 밑이 1보다 작아 부등호가 뒤집힌다 — 이 문항의 유일한 갈림길이다(I-EQV d2).
    $-2$ 를 $\log_2\dfrac{1}{4}$ 로 흡수하면 $\log_2\dfrac{x^2-4x}{4}\le\log_2 (x-3)$ 이 되어 $x^2-8x+12\le 0$ → $2\le x\le 6$.
    진수 조건 $x^2-4x>0$ 과 $x-3>0$ 의 교집합 $x>4$ 가 왼쪽 끝을 실제로 잘라낸다(T-범위).
    STEP 2 출발 ★3 · 통찰 1개 depth 2 → ★3 유지.
  tier: star_3
  mechanism_primary: '밑 2/3<1 → 지수 비교 부등호 반전 → log₂((x²−4x)/4) ≤ log₂(x−3) → x²−8x+12≤0 → 진수조건 x>4 와 교집합'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4<x\le 6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/126-313.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '밑 $\dfrac{2}{3}$, 지수 안의 상수 $-2$, 진수 $x^2-4x$·$x-3$ 을 바꿀 수 있다. 제약: 지수를 정리한 이차부등식의 해가 진수 조건에 의해 한쪽만 잘리도록 설계해야 답의 형태가 반열린 구간으로 유지된다.'
    creative: '(1) 밑을 $\dfrac{3}{2}$ 로 바꿔 반전이 없어지게 하면 함정이 사라져 ★2 (2) 밑을 $a$ 로 두고 $a$ 의 범위에 따라 답이 달라지게 하면 I-MI 추가 ★4 (3) 지수 안의 로그 밑을 서로 다르게($\log_2$ 와 $\log_4$) 두어 밑 통일 단계를 하나 더 얹기(★3 유지 · M 상승).'
```

```yaml
- id: GN-ALG-127-314
  page: 127
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    부등식 $\log_a (x+3)-\log_a (1-x)>1$ 의 해가 $-\dfrac{1}{3}<x<1$ 일 때 양수 $a$ 의 값.
  category: "밑 범위 분기 → 분수 부등식 정리 → 해의 끝값으로 밑 역추적"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "밑 $a$ 가 1보다 큰지 작은지에 따라 해가 오른쪽 구간인지 왼쪽 구간인지 갈린다 — 주어진 해의 모양이 밑>1 갈래임을 먼저 판정해야 한다"
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "해의 왼쪽 끝 $-\\dfrac{1}{3}$ 을 $\\dfrac{a-3}{a+1}$ 과 맞춰 $a$ 를 역추적"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "해가 주어진 로그부등식에서 밑 역추적(밑 범위 분기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    진수 조건이 $-3<x<1$ 이고 주어진 해의 오른쪽 끝이 그 경계 $1$ 과 같다는 점이 밑>1 갈래라는 신호다(밑<1 이면 해는 왼쪽 끝이 $-3$ 쪽에 붙는다).
    $\log_a\dfrac{x+3}{1-x}>1$ 에서 $1-x>0$ 이므로 분모를 곱해도 방향이 유지되고 $x>\dfrac{a-3}{a+1}$. 이 끝값을 $-\dfrac{1}{3}$ 과 맞추면 $a=2$ 이고 $a>1$ 과도 일치한다(I-MI d2 + I-BW d2).
    STEP 2 출발 ★3 · 통찰 2개라 +1 후보지만 역추적이 끝값 하나를 맞추는 일차식이라 ★3 유지.
  tier: star_3
  mechanism_primary: '진수조건 −3<x<1 → 밑>1 갈래 판정 → log_a((x+3)/(1−x))>1 → x>(a−3)/(a+1) → 끝값 −1/3 과 일치 → a=2'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/127-314.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '진수의 $x+3$·$1-x$ 상수와 우변 1, 주어진 해의 왼쪽 끝을 바꿀 수 있다. 제약: 해의 한쪽 끝이 진수 조건의 경계와 반드시 일치해야 하고, $\dfrac{a-3}{a+1}$ 꼴 방정식의 해가 양수이면서 가정한 밑 범위 안에 들어가야 한다.'
    creative: '(1) 주어진 해를 $-3<x<c$ 꼴로 주어 밑<1 갈래가 답이 되게 하기(같은 골조 ★3) (2) 우변을 $\log_a k$ 로 두고 $a,k$ 를 동시에 역추적(★4 · I-CON) (3) 「해가 존재하지 않을 $a$ 의 범위」로 바꾸면 기각 검증이 주가 되어 ★4 · I-VF.'
```

```yaml
- id: GN-ALG-127-315
  page: 127
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    부등식 $(\log_2 4x)^2-4\log_{\sqrt{2}} x-1<0$ 과 $x^2+mx+n<0$ 의 해가 같을 때 상수 $m$, $n$ 에 대한 $m+n$.
  category: "밑 통일·치환 → 로그부등식의 해 구간 → 같은 해를 갖는 이차부등식 복원"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 3
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "해 구간 $2<x<8$ 에서 $(x-2)(x-8)<0$ 을 거꾸로 세워 계수 $m,n$ 을 복원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "해가 일치하는 두 부등식에서 계수 역추적"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $\log_{\sqrt{2}}x=2\log_2 x$ 로 밑을 맞추는 것이 첫 관문이고, $t=\log_2 x$ 로 두면 $(2+t)^2-8t-1<0$ → $t^2-4t+3<0$ → $1<t<3$ → $2<x<8$.
    로그부등식의 해가 그대로 이차부등식의 해가 되어야 하므로 두 근이 $2,8$ 인 이차식을 복원하면 $m=-10$, $n=16$(I-BW d1).
    STEP 2 출발 ★3 · 통찰 1개 · M_total 7 → ★3 유지. 역추적 자체는 가벼우나 밑 통일·치환이 연달아 붙어 있다.
  tier: star_3
  mechanism_primary: 'log_√2 x=2log₂x → t=log₂x → t²−4t+3<0 → 2<x<8 → (x−2)(x−8)<0 → m=−10, n=16'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/127-315.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '진수의 계수 4, $\log_{\sqrt{2}}$ 의 밑, 상수항 $-1$ 을 바꿀 수 있다. 제약: $t$ 이차부등식이 정수 근으로 인수분해돼야 해 구간의 양 끝이 $2$ 의 거듭제곱으로 떨어지고, 그래야 $m,n$ 이 정수가 된다.'
    creative: '(1) 해가 두 구간이 되게 부등호를 뒤집어 「$x^2+mx+n>0$ 과 해가 같다」로 바꾸기(★3 유지) (2) 이차부등식 쪽을 $ax^2+bx+c<0$ 로 두어 $a$ 까지 미지수로 만들면 비례 관계 해석이 필요해 ★4 (3) 두 부등식의 해가 「한쪽이 다른 쪽에 포함」되게 하면 포함 조건 부등식으로 바뀌어 ★4 · I-CON.'
```

```yaml
- id: GN-ALG-127-316
  page: 127
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    이차방정식 $(3+\log_2 a)x^2+2(1+\log_2 a)x+1=0$ 이 서로 다른 두 실근을 갖게 하는 상수 $a$ 로 가능한 것. 5지선다.
  category: "치환 → 이차항 계수 ≠ 0 과 판별식 > 0 결합 → 선택지 대입 검증"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「이차방정식이 서로 다른 두 실근」을 최고차항 계수 $\\ne 0$ 과 $D>0$ 두 조건으로 동치 변환"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$a=\\dfrac{1}{8}$ 은 $\\log_2 a=-3$ 이라 이차항이 사라져 선택지에서 기각된다 — 판별식만 보면 걸러지지 않는 후보"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "로그를 계수로 갖는 이차방정식의 실근 조건(이차항 계수 조건 포함)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $t=\log_2 a$ 로 두면 $D/4=(1+t)^2-(3+t)=t^2+t-2>0$ → $t<-2$ 또는 $t>1$, 즉 $a<\dfrac{1}{4}$ 또는 $a>2$.
    여기에 $3+t\ne 0$, 곧 $a\ne\dfrac{1}{8}$ 이 붙는다. 선택지 ①이 정확히 이 값이라 판별식만 확인한 학생은 ①을 고른다(I-VF d2).
    STEP 2 출발 ★3 · 통찰 2개(+1 후보)지만 판별식 계산 자체가 표준이라 ★3 유지.
    [분류 이슈] 저노출 유형 I-VF 가 답을 가르는 핵심이라 ★4 후보이기도 하다 — 카탈로그 확정 때 재판정.
  tier: star_3
  mechanism_primary: 't=log₂a → 이차 조건 3+t≠0 ∧ D/4=(1+t)²−(3+t)>0 → t<−2 또는 t>1 → 선택지 중 a=4'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/127-316.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '계수의 상수 3, 1과 상수항 1을 바꿀 수 있다. 제약: 판별식이 $t$ 에 대해 인수분해되어 경계가 정수로 떨어져야 하고, 이차항이 0이 되는 $t$ 값이 판별식 조건은 통과하도록 두어야 함정이 살아난다.'
    creative: '(1) 서술형으로 「$a$ 의 값의 범위」를 묻게 바꾸면 $a\ne\dfrac{1}{8}$ 을 답에 명시해야 한다(★4 · I-VF 강화) (2) 「실근을 갖지 않을 조건」으로 뒤집으면 이차항이 0인 경우 일차방정식이 되어 근이 생기므로 기각 검증이 더 무거워진다(★4) (3) 조건을 「두 근이 모두 음수」로 바꾸면 근과 계수의 관계가 얹혀 ★4 · I-CON.'
```

```yaml
- id: GN-ALG-127-317
  page: 127
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    클릭할 때마다 크기가 2배가 되는 $1000\,\mathrm{Byte}$ 바이러스가 빈 공간 $5\,\mathrm{GB}$ 를 넘게 되는 클릭 횟수. ($\log 2=0.3$)
  category: "실생활 모델링 → 지수부등식 → 상용로그 → 최소 자연수"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「2배로 증가시킬 수 없으면 다운」이라는 서술을 $1000\\times 2^n>5\\times 10^9$ 이라는 부등식으로 옮긴다 — 몇 번째 클릭에서 넘치는지가 경계"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지수 증가 모형의 로그부등식(최소 횟수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    계산 자체는 $2^n>5\times 10^6$ 에 상용로그를 취해 $0.3n>6.7$ 로 끝나지만, 문항의 무게는 서술을 부등식으로 옮기는 데 있다(I-EQV d2).
    $\mathrm{GB}\to\mathrm{Byte}$ 단위 환산(T-단위)과 「$n$ 번째 클릭에서 다운」의 경계 해석(T-경계)이 이 문항의 두 함정이다.
    STEP 2 출발 ★3 · 통찰 1개 depth 2 → ★3 유지. 다만 M_total 6 으로 같은 ★3 중에서는 가벼운 편이다.
  tier: star_3
  mechanism_primary: '다운 조건 → 1000×2ⁿ > 5×10⁹ → 2ⁿ > 5×10⁶ → 상용로그 → 0.3n > 6.7 → 최소 자연수 n'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$23$번'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/127-317.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '초기 크기 $1000\,\mathrm{Byte}$, 배율 2, 빈 공간 $5\,\mathrm{GB}$, $\log 2$ 근삿값을 바꿀 수 있다. 제약: 빈 공간을 초기 크기로 나눈 값이 $2$·$5$·$10$ 의 거듭제곱 조합이라야 주어진 근삿값만으로 계산이 닫히고, $n$ 의 경계가 정수에 아슬아슬하게 걸치지 않게 둔다.'
    creative: '(1) 배율을 $3$ 배로 바꿔 $\log 3$ 을 쓰게 하기(★3 유지) (2) 클릭마다 일정량이 함께 지워지는 설정을 더하면 등비-등차 혼합이 되어 ★4 (3) 「빈 공간이 얼마 이상이어야 30번까지 버티는가」로 뒤집으면 역추적이 붙는다(★4 · I-BW).'
```

### 연습문제 실력 UP

```yaml
- id: GN-ALG-127-318
  page: 127
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제"
  summary: |
    $n\ge 2$ 인 자연수 $n$ 에 대하여 두 곡선 $y=\log_n x$, $y=-\log_n (x+3)+1$ 의 교점의 $x$ 좌표가 $1$ 보다 크고 $2$ 보다 작게 하는 모든 $n$ 의 합. 5지선다.
  category: "곡선 교점 → 로그 합 → 이차방정식 근의 위치 조건"
  M: {s: 3, k: 1, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 곡선의 교점이라는 기하 조건을 $\\log_n x=-\\log_n (x+3)+1$ 이라는 방정식으로 옮긴다"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "로그의 합을 진수의 곱으로 묶어 $x(x+3)=n$, 곧 이차방정식 $x^2+3x-n=0$ 으로 동치 변환 — 밑 $n$ 이 상수항으로 내려온다"
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "근이 $1$ 과 $2$ 사이라는 조건을 $f(1)<0<f(2)$ 부호 조건으로 역추적해 $n$ 의 범위를 만든다"
  insight_count: 3
  depth_score: 5.00
  type_id: null
  type_hint: "두 로그곡선의 교점 위치 조건(이차방정식 근의 분리)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    밑이 같은 두 로그를 한쪽으로 모으면 $\log_n x(x+3)=1$ 이 되고, 로그의 정의로 $x(x+3)=n$ 까지 내려온다. 밑이었던 $n$ 이 이차방정식의 상수항으로 바뀌는 전환이 이 문항의 핵심이다(I-RT d1 + I-EQV d2).
    $f(x)=x^2+3x-n$ 은 $x>0$ 에서 증가하므로 $1<x<2$ 에 근이 있을 조건은 $f(1)<0<f(2)$, 곧 $4<n<10$ 이고 $n\ge 2$ 인 자연수 $5,\dots,9$ 를 더한다(I-BW d2).
    실력 UP · 평가원 기출 출발 ★4 · 통찰 3개 · M_total 8 → ★4. ★5 는 SC/VF/SYM/XU 가 없어 해당하지 않는다.
  tier: star_4
  mechanism_primary: '교점 → log_n x + log_n(x+3) = 1 → x(x+3)=n → f(x)=x²+3x−n 의 근이 1<x<2 → f(1)<0<f(2) → 4<n<10 → 합'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/127-318.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '두 번째 곡선의 평행이동 $+3$ 과 상수 $1$, 근의 구간 $(1,2)$ 를 바꿀 수 있다. 제약: 진수의 곱이 $n$ 과 직접 같아지도록 상수항을 $1$ 로 유지해야 골조가 살고, $f(1)$·$f(2)$ 가 $n$ 에 대한 일차식이라야 범위가 정수 구간으로 떨어진다.'
    creative: '(1) 교점의 $y$ 좌표에 조건을 걸면 두 식을 연립해야 해 단계가 하나 늘어난다(★4 유지) (2) 두 곡선이 만나지 않을 $n$ 을 물으면 판별식·정의역 검증이 앞으로 나와 I-VF 가 붙는다(★4~5) (3) 밑을 $n$ 이 아니라 $\dfrac{1}{n}$ 으로 두면 부호가 뒤집혀 조건이 반대가 된다(★4 · T-부호 추가).'
```

```yaml
- id: GN-ALG-127-319
  page: 127
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    모든 실수 $x$ 에 대하여 이차식 $(1+2\log\alpha)x^2+2(2+\log\alpha)x+\log\alpha$ 의 값이 항상 음수가 되게 하는 실수 $\alpha$ 의 값의 범위.
  category: "치환 → 최고차항 부호 + 판별식 두 조건 → 교집합 → 로그 되돌리기"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「항상 음수」를 최고차항 $1+2t<0$ 과 $D/4<0$ 두 조건의 동시 성립으로 옮긴다 — 판별식만 쓰면 위로 볼록한 경우를 놓친다"
    - step: 3
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 조건의 $t$ 구간을 교집합한 뒤 $t=\\log\\alpha$ 를 되돌려 $\\alpha$ 의 범위로 환원"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "로그를 계수로 갖는 이차식이 항상 음수일 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $t=\log\alpha$ 로 두면 $D/4=(2+t)^2-(1+2t)t=-t^2+3t+4<0$ → $t<-1$ 또는 $t>4$ 이고, 최고차항 조건 $1+2t<0$ 은 $t<-\dfrac{1}{2}$ 이다.
    교집합이 $t<-1$ 로 한쪽만 살아남는 것이 요점이다. $t>4$ 갈래는 최고차항 조건에 걸려 사라진다(I-EQV d2 + I-BW d1).
    [분류 이슈] 실력 UP 출발 ★4 이나 골조는 필수예제 124-e25·확인체크 124-304 와 같은 판별식 역추적이고 최고차항 부호 조건 하나가 더해진 정도라 ★3 으로 판정했다.
  tier: star_3
  mechanism_primary: 't=logα → 1+2t<0 ∧ D/4=−t²+3t+4<0 → t<−1 → 0<α<1/10'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$0<\alpha<\dfrac{1}{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/127-319.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 계수의 상수 $1$, $2$, $2$ 를 바꿀 수 있다. 제약: 판별식이 $t$ 에 대해 인수분해돼 경계가 정수로 떨어져야 하고, 최고차항 조건이 판별식의 두 구간 중 하나만 잘라내도록 부호를 맞춰야 「한쪽 기각」 구조가 유지된다.'
    creative: '(1) 「항상 양수」로 뒤집으면 최고차항 조건이 반대가 되어 남는 구간이 달라진다(★3 유지) (2) 이차식이라는 단서를 빼면 $1+2t=0$ 인 일차식 경우를 따로 따져야 해 I-VF 가 붙는다(★4) (3) 「모든 $x$」를 「$x>0$ 인 모든 $x$」로 좁히면 축의 위치·경계값 검토가 들어가 ★4 · I-MI.'
```

## 표본 판정 요약 (34문)

- ★ 분포: ★1 4 · ★2 18 · ★3 11 · ★4 1 · ★5 0
- 통찰형 17 · 절차형 17 · premium 0
- M_total 중앙대 6~8 · 그림 0문(이 범위 전 문항 `figure: none`)
- 통찰 유형 분포(라벨 23개): I-EQV 9 · I-BW 6 · I-RT 4 · I-MI 2 · I-VF 2 (SC·SYM·XU·PD·CON 0)
- 같은 문구로 2회 이상 반복된 type_hint: 「진수에 로그가 포함된 로그부등식」 2 · 「$\log_a x$ 치환형 로그부등식(곱꼴 전개 포함)」 2 · 「지수에 로그가 포함된 부등식(양변 로그)」 2 · 「로그를 계수로 갖는 이차방정식의 실근 조건」 2 · 나머지 26개는 각 1회(골조 기준으로 묶으면 아래 「카탈로그 차원 메모」의 네 갈래)
- 구역별 출발점과 최종 ★: 개념원리 익히기 4문 전부 ★1 · 필수·발전 예제 17문 ★2~3 · STEP 1 6문 ★2~3 · STEP 2 5문 ★3 · 실력 UP 2문 ★3~4

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-ALG-127-316 | 판별식 계산은 표준이나 이차항 계수 $\ne 0$(선택지 ① 기각)이 답을 가르는 I-VF 핵심이라 ★4 후보 | ★3 / ★4 |
| GN-ALG-127-319 | 벤더 「실력 UP」(★4 출발)이나 골조가 필수예제 124-e25·확인체크 124-304 와 같고 최고차항 부호 조건만 추가 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 골조는 넷이다. ① **밑을 같게 고쳐 푸는 기본 로그부등식**(120-293~120-295 · 121-e20 · 121-297) ② **$\log_a x$ 치환형**(120-296 · 122-e22 · 122-300 · 126-310 · 127-315) ③ **지수에 로그가 포함된 부등식**(123-e23 · 123-301 · 123-302 · 126-313) ④ **로그를 계수로 갖는 이차방정식·이차식의 조건**(124-e24 · 124-e25 · 124-303 · 124-304 · 126-312 · 127-316 · 127-319).
- 따로 세워야 할 유형: **밑에 미지수가 있는 로그부등식**(126-308) — 밑 범위 분기와 갈래 기각이 다른 유형과 공유되지 않는다. **실생활 지수·로그 모형**(125-e26 · 125-305 · 125-306 · 127-317) — 부등식 골조는 단순하지만 서술→부등식 번역과 단위·경계 함정이 고유하다. **두 로그곡선의 교점 위치 조건**(127-318) — 로그가 이차방정식의 상수항으로 내려가는 전환이 이 단원 안에서 유일하다.
- 통합해도 될 유형: 「로그부등식이 항상 성립할 조건」과 「로그를 계수로 갖는 이차방정식의 실근 조건」은 모두 *치환 후 판별식 부호 역추적*이라 하나의 유형에 두 하위 갈래(항상 성립 / 실근 조건)로 묶는 편이 낫다. 「해가 주어진 로그부등식에서 상수·밑 역추적」(126-311 · 127-314 · 127-315)도 역추적 대상만 다를 뿐 골조가 같아 한 유형으로 묶을 수 있다.
