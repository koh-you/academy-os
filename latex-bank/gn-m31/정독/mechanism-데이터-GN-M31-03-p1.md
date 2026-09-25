---
name: mechanism-데이터-GN-M31-03-p1
description: 개념원리 중학 3-1 03 무리수와 실수(1/2 · 개념원리 확인하기~이런 문제가 시험에 나온다) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-1 · 전사본 latex-bank/gn-m31
  section: 03 무리수와 실수
  unit_code: GN-M31-03
  part: "1/2"
  extract_range: "24~29쪽 · 24-01~29-05"
  total_problems: 25
  unit_total: 61
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m31/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m31/items/<id>.tex
  image_source: latex-bank/gn-m31/figures/ (crops.json)
---

# 개념원리 중학 3-1 · 03 무리수와 실수 (1/2) 정독 데이터 (v1.0)

이 파일은 24~29쪽 25문항(개념원리 확인하기 8 · 핵심문제 익히기 12 · 이런 문제가 시험에 나온다 5)을 다룬다. 개념원리 중학은 RPM 과 달리 문항별 난이도 표시(하·중·상)나 태그가 없고 **구역(section) 자체가 난이도 층**이므로, ★ 출발점은 구역에서 잡고 M_total·통찰로 ±1 조정했다(확인하기 ★1 · 핵심문제 익히기 ★2 · 이런 문제가 시험에 나온다 ★2~3). 핵심문제 익히기 안의 `쪽-hN` 은 핵심문제, `쪽-cN` 은 그 짝인 확인문제다.

단원 자체가 정의·참거짓 판정 중심이라 노동량이 얇은 문항이 많고, 통찰이 붙는 곳은 세 갈래뿐이다 — 기하(모눈 직각삼각형·정사각형 대각선) → 수직선 좌표 전환, 공통항이 없는 두 실수의 대소를 제곱 비교로 옮기는 동치 변환, 제곱근표의 값→수 역조회. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M31-24-01
  page: 24
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑹ √4, -√7, -√0.49, 0.313131…, π, √10-1 이 유리수(유)인지 무리수(무)인지 판정해 넣기.
  category: "근호 안 정리 → 제곱수 여부 판정 → 유리수·무리수 분류"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리수와 무리수의 구별"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각 수를 근호 밖으로 꺼낼 수 있는지만 보면 끝나는 한 단계 판정.
    √4=2, -√0.49=-0.7 처럼 근호가 있어도 유리수인 표기 함정 하나(T-표기)만 깔려 있고 0.313131…은 순환소수라 유리수.
    확인하기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "근호 안이 제곱수·제곱인 소수인지 확인 → 유리수로 환원 → 남는 것을 무리수로"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 유 ⑵ 무 ⑶ 유 ⑷ 유 ⑸ 무 ⑹ 무'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/24-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 수를 다른 제곱수·제곱인 소수(√16, √1.44, √(9/25))와 비제곱수(√11, √0.5)로 교체. 제약: 유·무 개수가 한쪽으로 몰리지 않게 섞고, 소수 표기는 순환소수(유리수)와 비순환 무한소수를 모두 넣어 대비를 유지."
    creative: "(1) 유리수인 것의 개수만 묻기(★1 유지) (2) 음수 제곱근·분수 제곱근을 섞어 근호 정리 단계를 추가(★1~2) (3) √a 가 유리수가 되는 자연수 a 를 찾게 하면 역방향이라 ★2로 상승."
```

```yaml
- id: GN-M31-24-02
  page: 24
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑷ 유한소수·무한소수·무리수의 정의에 대한 네 진술의 참거짓(○/×) 판정.
  category: "유리수·무리수의 정의 → 각 진술의 반례 확인 → ○/×"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무리수와 실수의 이해(정의 참거짓)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    계산이 전혀 없고 정의 한 줄씩 대조하는 문항. 「무한소수는 모두 무리수」의 반례가 순환소수라는 것 하나가 핵심.
    확인하기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "각 진술을 정의와 대조 → 순환소수라는 반례로 무한소수 진술을 기각 → ○/×"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ ○ ⑵ × ⑶ ○ ⑷ ×'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/24-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없어 숫자 변형 여지가 거의 없음. 진술 수를 4개에서 5~6개로 늘리거나 참거짓 비율만 바꾼다. 제약: 참·거짓이 한쪽으로 쏠리지 않게 유지."
    creative: "(1) 틀린 진술에 반례를 함께 쓰게 하면 서술형이 되며 ★2 (2) 「유리수이면서 무리수인 수」·「실수가 아닌 수」 같은 경계 진술을 넣어 함정 축을 늘리기(★2) (3) 보기 ㄱㄴㄷ 형태로 바꿔 모두 고르게 하면 ★2."
```

```yaml
- id: GN-M31-24-03
  page: 24
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑷ 다섯 수(π/2, -√9, √3-√2, 0.1̇5̇, -1/3) 중 정수·유리수·무리수·실수에 해당하는 것을 모두 고르기.
  category: "각 수를 정리 → 수 체계 포함 관계 → 네 집합에 배정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수의 분류(정수·유리수·무리수·실수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    -√9=-3 으로 정리하는 한 단계와 「실수는 유리수+무리수 전부」라는 포함 관계만 알면 네 칸이 동시에 채워진다.
    함정은 근호가 붙은 -√9 가 정수라는 것과 순환소수 0.1̇5̇ 가 유리수라는 표기 함정 하나.
    확인하기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "각 수를 기약 형태로 정리 → 정수 ⊂ 유리수, 유리수+무리수=실수 포함 관계 적용 → 네 답 배정"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $-\sqrt{9}$ ⑵ $-\sqrt{9}$, $0.\dot{1}\dot{5}$, $-\dfrac{1}{3}$ ⑶ $\dfrac{\pi}{2}$, $\sqrt{3}-\sqrt{2}$ ⑷ $\dfrac{\pi}{2}$, $-\sqrt{9}$, $\sqrt{3}-\sqrt{2}$, $0.\dot{1}\dot{5}$, $-\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/24-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "제시 수를 √16, 2π, √5+√5, 0.2̇, -7/4 처럼 교체. 제약: 정수 칸에 들어갈 수가 최소 하나 있어야 하고, 근호가 붙었지만 유리수인 수를 반드시 한 개 포함해 표기 함정을 유지."
    creative: "(1) 자연수·양의 유리수 칸을 추가해 분류 축을 늘리기(★1~2) (2) 각 칸의 개수만 세게 하면 계산형이 되며 ★2 (3) 벤 다이어그램 영역에 배치하게 하면 표현 전환이 생겨 ★2."
```

```yaml
- id: GN-M31-24-04
  page: 24
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    한 눈금 1인 모눈 위 직각삼각형 OAB 와 중심 O·반지름 OB 인 원이 수직선과 만나는 두 점 P, Q. ⑴ OB 의 길이 ⑵ P, Q 에 대응하는 수.
  category: "피타고라스로 빗변 길이 → 원점에서 좌우로 같은 길이 → 대응하는 수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무리수를 수직선 위에 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    원의 중심이 원점이라 빗변 길이를 구하면 대응하는 수가 ±(그 길이)로 바로 나온다 — 기준점 이동이 없어 교과서가 가르친 절차 그대로다.
    같은 골조의 27-h3(중심이 원점이 아님)과 비교하면 한 단계가 빠져 있어 통찰 카운트를 주지 않았다.
    확인하기 구역·통찰 없음·M_total 5 → ★1.
    [분류 이슈] 27-h3·27-c3 와 골조가 같은데 구역 차이로 ★1/★2 가 갈림 — 카탈로그를 세울 때 한 유형으로 묶을지 결정 필요.
  tier: star_1
  mechanism_primary: "직각변 1과 3 → OB=√10 → 원점 기준 좌우 → P=-√10, Q=√10"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\sqrt{10}$ ⑵ P: $-\sqrt{10}$, Q: $\sqrt{10}$'
  answer_source: "답지"
  figure: crop:fig-24-04.png
  latex: latex-bank/gn-m31/items/24-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직각변 길이를 (1,2)·(2,3)·(1,4) 로 바꿔 √5·√13·√17 을 만든다. 제약: 모눈 눈금이 1이므로 두 변은 자연수여야 하고, 그림 라벨 O·A·B·P·Q 와 원의 중심(원점) 표시는 그대로 두어야 답이 ±√n 형태를 유지한다."
    creative: "(1) 원의 중심을 원점이 아닌 격자점으로 옮기면 a±√n 이 되어 ★2 (2) P, Q 사이 거리(2√n)를 묻기(★2) (3) 수를 먼저 주고 해당하는 점을 찾게 하면 역방향이라 ★2."
```

```yaml
- id: GN-M31-25-05
  page: 25
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑷ 두 수 사이 무리수·유리수의 존재, 1+√2 의 수직선 표시 가능 여부, 수직선이 실수로 메워지는지에 대한 참거짓 판정.
  category: "실수의 조밀성·수직선 완비성 → 각 진술 대조 → ○/×"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "실수와 수직선(참거짓)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    조밀성과 완비성 두 문장을 알고 있으면 네 진술이 한 번에 처리된다. 계산 없음.
    「√3과 √5 사이에 유리수가 없다」와 「1+√2 는 수직선에 나타낼 수 없다」가 전형적 오개념 함정.
    확인하기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "조밀성(두 실수 사이 무수히 많은 유리수·무리수) + 완비성(수직선=실수) 두 문장으로 네 진술 판정"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ ○ ⑵ × ⑶ × ⑷ ○'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/25-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간을 1과 2 대신 0과 0.1, √2와 √3 등 좁은 구간으로 바꿔도 결론은 같다. 제약: 구간이 아무리 좁아도 참이라는 점이 요지이므로 좁은 구간을 쓰는 편이 함정으로 더 강하다."
    creative: "(1) 「두 유리수 사이 정수」처럼 거짓이 되는 진술을 섞기(★2) (2) 반례를 직접 쓰게 하는 서술형(★2) (3) 「수직선을 유리수만으로 메울 수 있는가」로 바꿔 완비성만 묻기(★1 유지)."
```

```yaml
- id: GN-M31-25-06
  page: 25
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    수직선 위 세 점 A, B, C 가 -√6, 1+√3, 3-√2 중 하나에 대응할 때 ⑴ 각 점에 대응하는 수 ⑵ 세 수의 대소 비교.
  category: "각 무리수의 근삿값 → 수직선 위치와 대응 → 대소 관계"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "수직선 위의 무리수 대응과 대소 비교"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    √6, √3, √2 의 어림값을 넣어 세 수의 위치를 잡으면 ⑴ 이 정해지고, ⑵ 는 그 순서를 그대로 옮겨 적는 것이라 ⑴ 이 끝나면 추가 작업이 없다.
    어림값 계산은 한 줄이고 그림이 순서를 이미 고정해 준다.
    확인하기 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "√6≈2.4, √3≈1.7, √2≈1.4 대입 → 세 수의 근삿값 → 수직선 왼쪽부터 A, B, C 배정 → 대소 그대로"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ A: $-\sqrt{6}$, B: $3-\sqrt{2}$, C: $1+\sqrt{3}$ ⑵ $-\sqrt{6}<3-\sqrt{2}<1+\sqrt{3}$'
  answer_source: "답지"
  figure: crop:fig-25-06.png
  latex: latex-bank/gn-m31/items/25-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 수를 -√3, 2+√2, 4-√5 처럼 바꾼다. 제약: 근삿값이 서로 0.3 이상 떨어져 그림의 눈금으로 구분되어야 하고, 점 라벨 A·B·C 의 좌우 순서는 그림에 고정되어 있으므로 값 순서만 바꿔야 한다."
    creative: "(1) 점 하나를 비워 두고 어떤 수가 오는지 고르게 하기(★2) (2) 네 수·네 점으로 늘려 근삿값 정밀도를 요구(★2) (3) 근삿값 없이 제곱 비교만으로 순서를 정하게 하면 동치 변환이 들어가 ★2."
```

```yaml
- id: GN-M31-25-07
  page: 25
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑷ √7-1 과 √5-1, 3+√6 과 6, 4-√2 와 2, √3+√15 와 √3+4 사이에 알맞은 부등호 넣기.
  category: "공통항 소거 → 근호끼리 또는 근호와 정수의 제곱 비교 → 부등호"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "실수의 대소 관계(부등호 넣기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 문항 모두 양변에서 같은 항을 덜어 내면 근호 하나끼리 또는 근호와 정수의 비교로 줄고, 제곱해서 비교하면 끝난다.
    ⑶ 은 -√2 와 -2 의 비교라 부등호가 뒤집히는 T-부호 함정이 있다.
    확인하기 구역·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: "양변 공통항 소거 → 남은 두 수를 제곱해 비교 → 음수 계수면 부등호 방향 뒤집기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $>$ ⑵ $<$ ⑶ $>$ ⑷ $<$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/25-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 수와 더하는 상수를 바꾼다(√11-2 와 √13-2, 5-√3 과 3 등). 제약: 근호 안 수가 제곱수면 비교가 유리수 계산이 되어 유형이 달라지므로 비제곱수로 두고, 비교 대상 정수는 근호값과 0.5 이내로 붙여 어림만으로는 판정이 어렵게."
    creative: "(1) 부등호 대신 대소 순서로 나열하게 하기(★2) (2) 빈칸에 들어갈 부등호가 같은 것끼리 묶게 하면 29-04 형태로 ★3 (3) √a-b 와 c 의 비교에서 a 를 미지수로 두고 범위를 구하게 하면 역방향이라 ★3."
```

```yaml
- id: GN-M31-25-08
  page: 25
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑶ 제곱근표를 이용해 √5.51, √5.73, √5.82 의 값 구하기.
  category: "제곱근표의 행(정수+소수 첫째 자리) → 열(소수 둘째 자리) → 교차값 읽기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근표를 이용하여 제곱근의 값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표에서 행과 열을 찾아 교차점을 읽는 한 단계. 계산이 없다.
    행을 5.5·5.7·5.8 로 읽고 열을 소수 둘째 자리로 읽는 표기 규칙만 지키면 된다.
    확인하기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "근호 안 수의 소수 첫째 자리까지로 행 선택 → 소수 둘째 자리로 열 선택 → 교차값이 답"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $2.347$ ⑵ $2.394$ ⑶ $2.412$'
  answer_source: "답지"
  figure: crop:fig-25-08.png
  latex: latex-bank/gn-m31/items/25-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표 안에 실제로 실린 다른 수(5.50~5.90 구간의 임의 두 자리 소수)로 교체. 제약: 크롭된 표의 행·열 범위 밖 값을 쓰면 답이 없으므로 그림에 보이는 범위 안에서만 바꾼다."
    creative: "(1) 값을 주고 근호 안 수를 찾게 하는 역조회(★2 · 28-h6 골조) (2) 표의 두 값을 더하거나 빼는 계산을 얹기(★2) (3) 표에 없는 √55.1 을 √5.51 과 연결해 묻게 하면 자릿수 이동 통찰이 생겨 ★3."
```

### 핵심문제 익히기

```yaml
- id: GN-M31-26-h1
  page: 26
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    다섯 선택지(-√0.25, 1.27̇, √49-√16, √3-1, -√((-3/4)²)) 중 무리수인 것을 고르는 5지선다.
  category: "각 선택지의 근호 정리 → 유리수 제거 → 남는 무리수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리수와 무리수의 구별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    24-01 과 같은 판정이지만 선택지 다섯 개를 모두 정리해야 하고, √49-√16=3 처럼 계산 뒤에야 유리수임이 드러나는 것과 제곱의 제곱근 -√((-3/4)²)=-3/4 처럼 부호·표기 함정이 겹친 것이 섞여 있다.
    핵심문제 구역 ★2 출발, 통찰 없음이나 선택지 전수 정리 부담으로 −1 하지 않고 ★2 유지.
  tier: star_2
  mechanism_primary: "선택지마다 근호를 벗겨 유리수 여부 확인 → 제곱수·순환소수를 걸러냄 → 남는 √3-1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '④'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/26-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "선택지의 근호 안 수를 다른 제곱수·제곱 소수(0.16, 1.44, 25/36)와 비제곱수로 교체하고 √a-√b 형태의 두 수를 제곱수로 맞춘다. 제약: 정답이 하나만 남도록 나머지 넷은 반드시 유리수로 정리되어야 한다."
    creative: "(1) 무리수인 것의 개수를 묻기(★2 · 26-c1 골조) (2) 유리수인 것을 고르게 뒤집기(★2 유지) (3) √a 가 무리수가 되는 한 자리 자연수 a 를 모두 찾게 하면 역방향이라 ★3."
```

```yaml
- id: GN-M31-26-c1
  page: 26
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    일곱 수(√2+1, √(1/2), √1.21, √48, π, (-√0.5)², √(0.4̇)) 중 소수로 나타내면 순환소수가 아닌 무한소수가 되는 것의 개수.
  category: "순환소수가 아닌 무한소수=무리수로 환언 → 각 수 정리 → 개수 세기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "근호 안 순환소수 0.4̇ 를 분수 4/9 로 옮겨야 근호가 벗겨져 유리수임이 드러남"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "유리수와 무리수의 구별(무리수의 개수 세기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    먼저 「순환소수가 아닌 무한소수 = 무리수」로 문제를 바꿔 읽어야 하고, 일곱 수를 모두 정리해야 하므로 이 범위에서 노동량이 가장 큰 축.
    √1.21, (-√0.5)² 는 계산 뒤 유리수가 되고 √(0.4̇) 는 순환소수를 분수로 옮겨야 2/3 로 정리되는 동치 변환 한 단계가 있다(I-EQV d1).
    핵심문제 구역 ★2 출발, 통찰 1개 depth 1 이라 +1 조건(통찰 2개 또는 depth 3) 미달 → ★2.
  tier: star_2
  mechanism_primary: "무리수 판정으로 환언 → 각 수의 근호를 정리(순환소수는 분수로) → 유리수로 정리되지 않는 것의 개수"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/26-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "제시 수를 √(1/3), √2.25, √75, (-√0.2)², √(0.1̇) 등으로 교체. 제약: 근호 안 순환소수는 분수로 고쳤을 때 분모·분자가 모두 제곱수여야 유리수 함정으로 작동하고(0.4̇=4/9), 제곱수가 아니면 함정이 아니라 그냥 무리수가 된다."
    creative: "(1) 개수 대신 무리수인 것을 모두 고르게 하기(★2) (2) 유리수 개수와 무리수 개수의 차를 묻기(★2) (3) 근호 안을 미지수로 두고 무리수가 되는 조건을 쓰게 하면 ★3."
```

```yaml
- id: GN-M31-26-h2
  page: 26
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    순환소수·근호·실수의 정의에 대한 다섯 진술 중 옳은 것 2개 고르기.
  category: "실수 체계의 정의 → 반례로 각 진술 기각 → 옳은 둘"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무리수와 실수의 이해(정의 참거짓)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계산이 없고 정의 대조만 하는 문항으로 24-02 와 노동량이 같다. 「근호를 사용한 수는 모두 무리수」의 반례(√4)가 핵심.
    산식상 통찰 0·M_total 4 는 −1 후보지만 핵심문제 구역 신호(★2)를 존중해 라벨은 ★2 로 둔다.
    [분류 이슈] 확인하기의 같은 성격 문항(24-02)과 M·I 가 동일한데 구역 때문에 ★1/★2 로 갈림 — 라벨은 ★2, 후보는 ★1.
  tier: star_2
  mechanism_primary: "각 진술에 반례를 대 봄(순환소수·√4·순환하지 않는 무한소수) → 남는 둘이 정답"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '③, ⑤'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/26-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없어 숫자 변형 여지가 없다. 진술 수와 정답 개수(2개→1개)만 조정 가능. 제약: 정답 2개 문항은 오답 세 개가 모두 명확한 반례를 가져야 한다."
    creative: "(1) 옳지 않은 것을 모두 고르게 뒤집기(★2 유지) (2) 각 진술의 반례를 쓰게 하는 서술형(★3) (3) 「유리수이면서 무리수인 수는 없다」를 벤 다이어그램으로 설명하게 하면 표현 전환이 생겨 ★3."
```

```yaml
- id: GN-M31-26-c2
  page: 26
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    √6 에 대한 다섯 설명(무리수·제곱하면 유리수·비순환 무한소수·6의 양의 제곱근·기약분수 표현) 중 옳지 않은 것 고르기.
  category: "무리수의 정의와 성질 → 한 수에 대해 다섯 진술 대조 → 거짓 하나"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무리수와 실수의 이해(한 무리수의 성질 판정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    √6 하나에 대한 정의 대조라 26-h2 보다도 얇다. 「기약분수로 나타낼 수 있다」가 무리수의 정의와 정면으로 어긋나는 거짓 진술.
    「제곱하면 유리수」처럼 참이지만 헷갈리는 선택지가 함정 역할.
    핵심문제 구역 ★2 출발·통찰 없음, 라벨 ★2 유지.
  tier: star_2
  mechanism_primary: "무리수 정의(분수 꼴로 나타낼 수 없음)를 √6 에 적용 → 분수 표현 진술을 거짓으로 기각"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/26-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대상 수를 √10, √15, -√7 등 다른 비제곱수 제곱근으로 교체. 제약: 제곱수(√9)로 바꾸면 거의 모든 진술의 참거짓이 뒤집히므로 근호 안은 비제곱수여야 하고, 음수로 바꾸면 「양의 제곱근」 진술을 함께 고쳐야 한다."
    creative: "(1) 옳은 것을 모두 고르게 뒤집기(★2) (2) 대상을 √9 로 바꿔 진술이 모두 뒤집히는 대비 문항 만들기(★2) (3) √6 과 π 를 비교해 공통 성질을 고르게 하면 ★3."
```

```yaml
- id: GN-M31-27-h3
  page: 27
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    한 눈금 1인 모눈 위 직각삼각형 ABC 와 중심 A·반지름 AC 인 원이 수직선과 만나는 두 점 P, Q 에 대응하는 수 구하기.
  category: "피타고라스로 반지름 → 중심 A 의 좌표를 기준으로 좌우 이동 → 대응하는 수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "기하량(빗변 길이)을 수직선 좌표로 옮길 때 원점이 아니라 중심 A 의 좌표를 기준으로 ±해야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "무리수를 수직선 위에 나타내기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    반지름 길이 자체는 직각변 2, 3 에서 한 줄로 나오지만, 답은 중심 A 가 놓인 좌표 1 을 기준으로 좌우로 √13 만큼 간 수라서 길이를 좌표로 번역하는 단계가 핵심이다(I-RT d1).
    이 번역을 빠뜨리면 ±√13 이라는 전형적 오답이 나온다.
    핵심문제 구역 ★2 출발·통찰 1개 d1 → ★2 유지.
  tier: star_2
  mechanism_primary: "직각변 2와 3 → AC=√13 → 중심 A의 좌표 1 기준 좌우 → P=1-√13, Q=1+√13"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: 'P: $1-\sqrt{13}$, Q: $1+\sqrt{13}$'
  answer_source: "본문 답"
  figure: crop:fig-27-h3.png
  latex: latex-bank/gn-m31/items/27-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직각변을 (1,2)·(2,2)·(1,3) 으로, 중심의 좌표를 -1·0·2 로 바꾼다. 제약: 모눈 위 삼각형이라 두 직각변은 자연수여야 하고 중심 좌표는 정수 격자점이어야 한다. 중심을 0 으로 두면 24-04 와 같은 ★1 문항이 된다."
    creative: "(1) P 만 묻고 Q 는 대칭으로 추론하게 하기(★2) (2) P 와 Q 사이 거리나 두 수의 합을 묻기(합=2×중심좌표라 대칭 활용 ★3) (3) 대응하는 수를 주고 삼각형의 직각변 길이를 찾게 하면 역방향이라 ★3."
```

```yaml
- id: GN-M31-27-c3
  page: 27
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    모눈 위 두 직각삼각형 ABC, ADE 를 그리고 AC=AP, AE=AQ 일 때 수직선 위 두 점 P, Q 에 대응하는 수 구하기.
  category: "두 빗변 길이 → 공통 기준점 A 의 좌표에서 좌우로 이동 → 대응하는 수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "AC=AP, AE=AQ 라는 길이 조건을 기준점 A 의 좌표에서 좌우로 옮긴 수로 번역"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "무리수를 수직선 위에 나타내기(기준점 이동)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    27-h3 와 골조가 같고 원 대신 「길이가 같다」는 조건으로 옮기는 형태다. 두 삼각형의 빗변이 모두 √5 라서 A 의 좌표 2 를 기준으로 좌우 대칭인 수가 나온다.
    길이를 좌표로 번역하는 단계가 그대로 핵심(I-RT d1)이고, P 가 A 의 왼쪽이라는 방향 판단이 함정.
    핵심문제 구역 ★2 출발·통찰 1개 d1 → ★2 유지.
  tier: star_2
  mechanism_primary: "직각변에서 AC=AE=√5 → 기준점 A의 좌표 2 에서 좌우 → P=2-√5, Q=2+√5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: 'P: $2-\sqrt{5}$, Q: $2+\sqrt{5}$'
  answer_source: "답지"
  figure: crop:fig-27-c3.png
  latex: latex-bank/gn-m31/items/27-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 삼각형의 직각변을 (1,2)와 (2,1) 대신 (1,3)·(2,3) 으로, 기준점 좌표를 0·1·3 으로 바꾼다. 제약: 그림의 점 라벨 A·B·C·D·E·P·Q 와 두 삼각형이 A 를 공유한다는 배치는 고정이며, 두 빗변을 다르게 하면 P·Q 가 대칭이 아니게 되므로 의도한 경우에만 바꾼다."
    creative: "(1) 두 빗변을 √5 와 √10 으로 달리해 비대칭으로 만들기(★2) (2) P, Q 의 중점에 대응하는 수를 묻기(대칭 활용 ★3) (3) 주어진 수 2-√5 에 해당하는 점을 그림에서 고르게 하면 29-02 골조(★2)."
```

```yaml
- id: GN-M31-27-h4
  page: 27
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    무리수의 수직선 대응, 두 수 사이의 무리수·실수·정수 개수, 수직선을 유리수로 메울 수 있는지에 대한 다섯 진술 중 옳지 않은 것 2개 고르기.
  category: "조밀성·완비성 → 각 진술 대조 → 거짓 둘"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "실수와 수직선(참거짓)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    25-05 와 같은 개념을 선택지 형태로 물은 문항. 「두 유리수 사이에 무수히 많은 정수」는 정수가 조밀하지 않다는 점에서, 「수직선을 유리수로 메울 수 있다」는 완비성에서 각각 거짓이다.
    계산 없음·정의 대조 한 단계.
    산식상 통찰 0·M_total 4 는 −1 후보지만 핵심문제 구역 신호를 존중해 ★2 유지.
    [분류 이슈] 확인하기 25-05 와 M·I 가 같은데 구역 차이로 ★1/★2 가 갈림 — 라벨은 ★2, 후보는 ★1.
  tier: star_2
  mechanism_primary: "유리수·무리수는 조밀하지만 정수는 아니다 + 수직선=실수 전체 → 두 거짓 진술 기각"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '④, ⑤'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/27-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간을 √2와 √3 대신 0.1과 0.2, -√5와 -√3 등으로 좁히거나 음수로 옮겨도 참거짓은 유지된다. 제약: 정수 진술은 구간 폭이 1보다 작아야 직관적으로도 거짓임이 드러난다."
    creative: "(1) 옳은 것을 모두 고르게 뒤집기(★2) (2) 거짓 진술에 반례를 함께 쓰게 하는 서술형(★3) (3) 「두 무리수 사이에 유리수가 있는가」를 실제 예시로 제시하게 하면 ★3."
```

```yaml
- id: GN-M31-27-c4
  page: 27
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    보기 ㄱ~ㄹ(1/3과 1/2 사이의 무리수, 유리수의 수직선 대응, 두 무리수 사이의 수, 수직선의 완비성) 중 옳은 것 모두 고르기.
  category: "조밀성·완비성 → 보기별 반례 확인 → 옳은 것 선택"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "실수와 수직선(보기 참거짓)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    27-h4 와 같은 개념을 보기 형태로 물은 문항. ㄷ 은 두 무리수 사이에 유리수가 있다는 반례 하나로 기각되고 ㄱ 은 좁은 구간에도 무리수가 있다는 조밀성으로 기각된다.
    반례를 떠올리는 부담은 있으나 교과서가 이미 제시한 사실 대조 수준이라 통찰로 카운트하지 않았다.
    핵심문제 구역 ★2 출발·통찰 없음 → ★2 유지.
  tier: star_2
  mechanism_primary: "조밀성으로 ㄱ·ㄷ 을 반례로 기각 → 유리수 대응과 완비성으로 ㄴ·ㄹ 채택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: 'ㄴ, ㄹ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/27-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 1/3~1/2 을 0.01~0.02, √2~1.5 등으로 바꿔도 결론은 같다. 제약: 구간이 좁을수록 조밀성 함정이 강해지므로 폭 0.1 이하를 유지하는 편이 좋다."
    creative: "(1) 보기를 다섯 개로 늘리고 옳지 않은 것을 고르게 하기(★2) (2) ㄷ 의 반례를 직접 제시하게 하는 서술형(★3) (3) 「수직선 위의 점과 실수가 일대일 대응」을 그림으로 설명하게 하면 ★3."
```

```yaml
- id: GN-M31-28-h5
  page: 28
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    다섯 개의 부등식(√10+1<4, 12>√5+10, -√8+1<-2, 2+√5>√3+√5, 4-√7<-√7+√13) 중 대소 관계가 옳은 것 고르기.
  category: "선택지마다 공통항 소거 → 제곱 비교 → 참인 부등식 하나"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "실수의 대소 관계"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    같은 절차(공통항을 덜어 내고 근호와 정수를 제곱해 비교)를 다섯 번 반복하는 구조라 통찰은 없고 노동량만 25-07 보다 크다.
    -√8+1 과 -2 처럼 음수끼리 비교하는 선택지에서 부등호가 뒤집히는 T-부호 함정이 오답을 만든다.
    핵심문제 구역 ★2 출발·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "선택지마다 양변 공통항 소거 → 남은 근호와 정수를 제곱해 비교 → 참인 것 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '④'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/28-h5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 수와 더해지는 정수를 바꾼다(√17+2 와 6, -√12+3 과 -1 등). 제약: 정답이 하나만 참이 되도록 나머지 넷은 확실히 거짓이어야 하고, 비교하는 정수는 근호값과 0.5 이내로 붙여 어림 대신 제곱 비교가 필요하게 만든다."
    creative: "(1) 옳지 않은 것을 고르게 뒤집기(★2) (2) 부등호 방향이 나머지와 다른 하나를 고르게 하면 29-04 형태로 ★3 (3) 선택지에 미지수를 넣어 성립 조건을 찾게 하면 ★4."
```

```yaml
- id: GN-M31-28-c5
  page: 28
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    a=1-√8, b=1-√6, c=-2 의 대소 관계를 부등호로 나타내기.
  category: "공통항 있는 두 수는 근호 비교 → 공통항 없는 쌍은 이항 후 제곱 비교 → 세 수 정렬"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "공통항이 없는 1-√8 과 -2 의 비교를 이항해 3 과 √8 의 비교로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "실수의 대소 관계(세 수 비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a 와 b 는 공통항 1 을 덜어 내 -√8 과 -√6 을 비교하면 되지만, c=-2 와의 비교는 공통항이 없어 이항해 정수와 근호의 제곱 비교로 옮겨야 한다(I-EQV d1).
    두 번의 비교 방식이 달라 전부 근삿값으로 처리하려 하면 8과 9 의 차가 작아 실수하기 쉽고, 음수 비교에서 부등호가 뒤집히는 T-부호 함정이 겹친다.
    핵심문제 구역 ★2 출발·통찰 1개 d1 → ★2 유지.
  tier: star_2
  mechanism_primary: "1-√8 과 1-√6 은 근호 크기로 비교 → 1-√8 과 -2 는 3 과 √8 의 비교로 이항 → c<a<b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$c<a<b$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/28-c5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "1-√8, 1-√6 을 2-√10, 2-√7 처럼 같은 상수로 묶고 c 를 그 사이에 오도록 정한다. 제약: c 가 a·b 와 확연히 떨어지면 제곱 비교 단계가 사라져 ★1 로 떨어지므로, c 와 가까운 쪽의 차가 0.5 이내가 되도록 잡는다."
    creative: "(1) 세 수를 수직선 위에 표시하게 하면 표현 전환이 붙어 ★3 (2) 가장 큰 수와 가장 작은 수의 차를 묻기(★3) (3) c 를 미지수로 두고 c<a<b 가 되는 정수 범위를 구하게 하면 역방향이라 ★3~4."
```

```yaml
- id: GN-M31-28-h6
  page: 28
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    제곱근표에서 √4.71 의 값이 a, √b 의 값이 2.200 일 때 1000a-100b 의 값.
  category: "표 정조회로 a → 표 역조회로 b → 식에 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "표 안쪽 값 2.200 에서 행·열을 거꾸로 읽어 근호 안 수 b 를 복원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "제곱근표를 이용하여 제곱근의 값 구하기(정조회+역조회)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a 는 25-08 과 같은 정조회지만 b 는 표 안쪽 값에서 행(정수+소수 첫째 자리)과 열(소수 둘째 자리)을 거꾸로 읽어 복원해야 한다(I-BW d1).
    1000a 와 100b 의 자릿수를 맞춰 빼는 계산이 한 단계 더 붙어 있고, 역조회에서 b 를 2.200 그대로 쓰는 것이 전형적 오답.
    핵심문제 구역 ★2 출발·통찰 1개 d1 → ★2 유지.
  tier: star_2
  mechanism_primary: "표에서 √4.71 값 읽어 a → 값 2.200 의 위치에서 b 복원 → 1000a-100b 계산"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1686$'
  answer_source: "본문 답"
  figure: crop:fig-28-h6.png
  latex: latex-bank/gn-m31/items/28-h6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정조회 대상과 역조회 값을 크롭된 표 안의 다른 칸으로 바꾸고 계수 1000·100 을 100·10 등으로 조정한다. 제약: 두 수 모두 그림에 실제로 보이는 행·열이어야 하며, 계수는 a·b 의 소수점을 없애 답이 정수가 되도록 맞춘다."
    creative: "(1) a+b 나 b-a 처럼 식만 바꾸기(★2 유지) (2) 역조회를 두 번으로 늘리기(29-05 골조 ★2) (3) 표에 없는 √47.1 을 함께 물어 자릿수 이동을 요구하면 ★3."
```

```yaml
- id: GN-M31-28-c6
  page: 28
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    제곱근표에서 √20.5=x, √y=4.733 일 때 1000x+10y 의 값.
  category: "표 정조회로 x → 표 역조회로 y → 식에 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "표 안쪽 값 4.733 에서 행·열을 거꾸로 읽어 근호 안 수 y 를 복원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "제곱근표 역조회"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    28-h6 와 같은 골조이며 근호 안이 두 자리 수 구간이라 행을 20.5 처럼 읽어야 하는 자릿수 함정이 하나 더 있다.
    역조회 단계가 핵심(I-BW d1)이고, 두 항의 계수가 달라 자릿수를 맞추는 계산이 한 줄 더 붙는다.
    핵심문제 구역 ★2 출발·통찰 1개 d1 → ★2 유지.
  tier: star_2
  mechanism_primary: "표에서 √20.5 값 읽어 x → 값 4.733 의 위치에서 y 복원 → 1000x+10y 계산"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4752$'
  answer_source: "답지"
  figure: crop:fig-28-c6.png
  latex: latex-bank/gn-m31/items/28-c6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정조회·역조회 대상을 크롭된 표 안의 다른 칸으로 바꾸고 계수를 조정한다. 제약: 그림에 보이는 행·열 범위를 벗어나면 답이 없고, 계수는 소수점이 사라져 답이 정수가 되도록 잡는다(x 는 소수 셋째 자리, y 는 소수 첫째 자리)."
    creative: "(1) x 와 y 의 곱이나 차를 묻기(★2) (2) 역조회 값을 표에 없는 값으로 주고 가장 가까운 칸을 찾게 하면 근사 판단이 붙어 ★3 (3) √2050 처럼 자릿수를 옮긴 값을 함께 묻기(★3)."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M31-29-01
  page: 29
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    다섯 선택지(0.12̇, -√0.04, -√32, √25/3, √10-3) 중 무리수인 것 2개 고르기.
  category: "각 선택지의 근호 정리 → 유리수 제거 → 무리수 둘"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리수와 무리수의 구별"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    26-h1 과 같은 판정이며 -√0.04=-0.2, √25/3=5/3 처럼 근호 안이 제곱수여서 유리수가 되는 함정 두 개가 핵심.
    √32 는 4√2 로 정리되지만 정리하지 않아도 무리수임이 바로 보인다.
    시험에 나온다 구역 ★2~3 출발, 통찰 없음·M_total 4 로 노동량이 가벼워 아래쪽인 ★2.
  tier: star_2
  mechanism_primary: "선택지마다 근호를 벗겨 유리수 여부 확인 → 제곱수·순환소수 제거 → 남는 둘"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '③, ⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/29-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 수를 0.09·1.69·√36/5 같은 제곱 형태와 √18·√5-2 같은 비제곱 형태로 교체. 제약: 정답이 정확히 둘이 되도록 유리수 선택지를 셋 유지하고, 소수 선택지는 순환소수로 써서 무한소수 함정을 남긴다."
    creative: "(1) 무리수의 개수를 묻기(★2) (2) 유리수인 것만 고르게 뒤집기(★2) (3) 선택지 각각을 유리수·무리수로 분류하고 이유를 쓰게 하는 서술형(★3)."
```

```yaml
- id: GN-M31-29-02
  page: 29
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    한 변의 길이가 1인 정사각형 3개를 수직선 위에 그린 그림에서 네 점 A~D 중 2-√2 에 대응하는 점 찾기.
  category: "정사각형 대각선 √2 → 기준점에서 왼쪽으로 이동 → 해당 점 식별"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "2-√2 를 「2에서 정사각형 대각선 길이만큼 왼쪽」이라는 그림 위 위치로 번역"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "무리수를 수직선 위에 나타내기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 수를 먼저 「기준점 2 에서 왼쪽으로 대각선 √2」로 읽어야 그림의 어느 점인지 정해진다 — 수에서 그림으로 가는 방향이라 27-h3 의 역방향(I-RT d1).
    대각선 길이가 √2 라는 것과 빼기가 왼쪽 이동이라는 두 가지를 동시에 써야 하고, 부호를 놓치면 2+√2 쪽 점을 고르게 된다.
    시험에 나온다 구역 ★2~3 출발·통찰 1개 d1·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "한 변 1인 정사각형의 대각선=√2 → 2 에서 왼쪽으로 √2 → 해당 점 A"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '점~$\pt{A}$'
  answer_source: "답지"
  figure: crop:fig-29-02.png
  latex: latex-bank/gn-m31/items/29-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "묻는 수를 1+√2, -1-√2, 3-√2 처럼 기준점과 방향만 바꿔 제시한다. 제약: 정사각형 한 변이 1 이라 이동 거리는 √2 의 정수배로 고정되고, 그림의 점 A~D 위치와 정사각형 개수는 그대로 두어야 선택지가 유지된다."
    creative: "(1) 점을 주고 대응하는 수를 쓰게 하면 정방향이 되어 ★2 (2) 한 변을 2 로 바꿔 대각선 2√2 를 쓰게 하기(★3) (3) 네 점에 대응하는 수를 모두 구해 대소 순으로 쓰게 하면 ★3."
```

```yaml
- id: GN-M31-29-03
  page: 29
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    비순환 무한소수·유리수가 아닌 실수·두 실수 사이의 유리수·1에 가장 가까운 무리수·실수의 수직선 대응에 대한 다섯 진술 중 옳지 않은 것 고르기.
  category: "실수 체계와 조밀성 → 각 진술 대조 → 거짓 하나"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무리수와 실수의 이해(참거짓)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 진술은 정의·조밀성·완비성 그대로이고, 「1에 가장 가장 가까운 무리수가 있다」는 조밀성 때문에 성립할 수 없다는 한 가지가 답이다.
    개념 한 줄로 끝나 노동량은 가볍지만 「가장 가까운 수」라는 표현이 학생에게는 가장 걸리는 지점.
    시험에 나온다 구역 ★2~3 출발·통찰 없음·M_total 4 → ★2.
  tier: star_2
  mechanism_primary: "조밀성(두 실수 사이에 무수히 많은 수)으로 「가장 가까운 무리수」 진술을 기각"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/29-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "「1에 가장 가까운 무리수는 √2」를 「0에 가장 가까운 양의 무리수」·「2에 가장 가까운 유리수」 등으로 바꿔도 거짓은 유지된다. 제약: 기준 수와 후보 수를 바꿔도 조밀성 때문에 항상 거짓이라는 구조를 깨지 않는다."
    creative: "(1) 옳은 것을 모두 고르게 뒤집기(★2) (2) 왜 「가장 가까운 무리수」가 없는지 설명하게 하는 서술형(★3) (3) √2 보다 1 에 더 가까운 무리수를 하나 제시하게 하면 구성 부담이 생겨 ★3."
```

```yaml
- id: GN-M31-29-04
  page: 29
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    다섯 개의 빈칸 비교(√3+1과 3, √2-5와 √3-5, -4+√15와 -1, √7+4와 √7+√17, √20-√10과 5-√10) 중 들어갈 부등호의 방향이 나머지 넷과 다른 하나 고르기.
  category: "선택지마다 공통항 소거 → 제곱 비교로 방향 결정 → 다섯 방향 중 다른 하나"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "실수의 대소 관계(부등호 방향 비교)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    다섯 개를 하나도 건너뛸 수 없이 모두 판정해야 답이 정해지는 구조라 이 범위에서 노동량이 가장 크다(28-h5 는 참인 것 하나를 찾으면 멈출 수 있다).
    음수 상수가 붙은 비교에서 부등호가 뒤집히는 T-부호 함정이 두 군데 있고, √20 과 5 처럼 제곱 비교를 해야 방향이 갈리는 쌍이 섞여 있다.
    시험에 나온다 구역 ★2~3 출발, 통찰은 없으나 전수 판정 부담으로 위쪽인 ★3.
    [분류 이슈] 통찰 0 인데 ★3 — 노동량만으로 올린 라벨이라 ★2 로 볼 여지가 있음.
  tier: star_3
  mechanism_primary: "선택지마다 양변 공통항 소거 → 제곱 비교로 부등호 방향 확정 → 다섯 방향을 모아 다른 하나 선택"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/29-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 쌍의 근호 안 수와 상수를 바꾼다(√5+2와 4, -3+√11과 0 등). 제약: 정확히 하나만 방향이 달라야 하고, 비교값은 근호값과 0.5 이내로 붙여 어림 대신 제곱 비교가 필요하게 만든다. 공통항이 있는 쌍과 없는 쌍을 섞어야 두 절차가 모두 쓰인다."
    creative: "(1) 방향이 같은 것끼리 묶게 하기(★3 유지) (2) 부등호를 직접 채워 넣는 서술형(★2) (3) 한 쌍에 미지수를 넣어 방향이 바뀌는 범위를 구하게 하면 ★4."
```

```yaml
- id: GN-M31-29-05
  page: 29
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    제곱근표에서 √a=8.803, √b=8.764 일 때 10(a-b) 의 값.
  category: "표 역조회 두 번 → 근호 안 수의 차 → 10배"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "표 안쪽 값 8.803·8.764 에서 행·열을 거꾸로 읽어 근호 안 두 수를 복원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "제곱근표 역조회"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    28-h6·28-c6 와 같은 역조회 골조인데 정조회 없이 역조회만 두 번이라 표 읽는 방향이 일관된다(I-BW d1).
    두 수 모두 같은 표에서 찾아 차를 구하고 10 을 곱하는 계산 한 줄이 붙는다. 답이 정수가 되도록 소수 첫째 자리 차만 남는 구조.
    시험에 나온다 구역 ★2~3 출발·통찰 1개 d1, 골조가 핵심문제와 같아 ★2.
  tier: star_2
  mechanism_primary: "표에서 8.803·8.764 의 위치로 a, b 복원 → a-b → 10배"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$7$'
  answer_source: "답지"
  figure: crop:fig-29-05.png
  latex: latex-bank/gn-m31/items/29-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "역조회할 두 값을 크롭된 표 안의 다른 두 칸으로 바꾸고 계수 10 을 100 등으로 조정한다. 제약: 두 값 모두 그림에 보이는 범위여야 하고, a-b 가 소수 자리에서 딱 떨어져 답이 정수가 되도록 같은 행 또는 가까운 행에서 고른다."
    creative: "(1) a+b 나 √(a-b) 를 묻기(★2~3) (2) 한쪽을 정조회로 바꿔 28-h6 형태로(★2) (3) 표에서 값이 두 칸 사이에 있는 수를 주고 근호 안 수의 범위를 구하게 하면 ★4."
```

## 표본 판정 요약 (25문)

- ★ 분포: ★1 8 · ★2 16 · ★3 1 · ★4 0 · ★5 0
- 통찰형 8 · 절차형 17 · premium 0
- 통찰 유형 분포: I-RT 4(수직선 대응) · I-BW 3(제곱근표 역조회) · I-EQV 2(순환소수 분수화 1 · 이항 후 제곱 비교 1) — 모두 depth 1, depth 2 이상 없음
- 구역별: 개념원리 확인하기 8(전부 ★1) · 핵심문제 익히기 12(★2 12) · 이런 문제가 시험에 나온다 5(★2 4 · ★3 1)
- type_hint 상위: 「무리수와 실수의 이해(참거짓)」 7 · 「무리수를 수직선 위에 나타내기」 4 · 「유리수와 무리수의 구별」 4 · 「실수의 대소 관계」 4 · 「제곱근표 조회·역조회」 4
- 그림: 9문(`crop:fig-24-04.png` · `fig-25-06.png` · `fig-25-08.png` · `fig-27-h3.png` · `fig-27-c3.png` · `fig-28-h6.png` · `fig-28-c6.png` · `fig-29-02.png` · `fig-29-05.png`)
- 단원 성격상 ★4~5 가 나올 골조(SC·VF·SYM·XU)가 이 범위에 없다. 변별은 전부 노동량(선택지 전수 판정)과 depth 1 통찰에서 나온다.

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M31-24-04 | 27-h3·27-c3 와 골조가 같은데 원의 중심이 원점이라 기준점 이동 단계가 없음. 구역 차이로 ★1/★2 가 갈림 | ★1 / ★2 |
| GN-M31-26-h2 | 정의 참거짓 5개 · 통찰 0 · M_total 4 로 확인하기 24-02(★1)와 동일한 부담이나 핵심문제 구역이라 ★2 유지 | ★1 / ★2 |
| GN-M31-27-h4 | 25-05(★1)와 같은 조밀성·완비성 판정인데 구역 때문에 ★2. 산식상 −1 후보 | ★1 / ★2 |
| GN-M31-29-04 | 통찰 0 인데 다섯 쌍 전수 판정 부담만으로 ★3 으로 올림 — 노동량 기반 라벨 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 「무리수를 수직선 위에 나타내기」 — 기준점이 원점인 경우(24-04)와 아닌 경우(27-h3·27-c3)는 학생 체감이 다르므로 base ★ 1/2 로 분리하는 편이 낫다. ② 「제곱근표 조회」 — 정조회(25-08)와 역조회(28-h6·28-c6·29-05)는 방향이 반대라 별도 유형. ③ 「실수의 대소 관계」 — 공통항 소거만으로 끝나는 것(25-07)과 이항 후 제곱 비교가 필요한 것(28-c5·29-04)을 나눌 것.
- **통합해도 될 유형**: 「유리수와 무리수의 구별」(24-01·26-h1·26-c1·29-01)은 묻는 형식만 다르고 골조가 같아 한 유형으로 묶고 개수 세기·선택형을 변형으로 둔다. 「무리수와 실수의 이해(참거짓)」과 「실수와 수직선(참거짓)」(24-02·25-05·26-h2·26-c2·27-h4·27-c4·29-03)도 반례 대조라는 골조가 같아 한 유형에 조밀성·완비성 하위 태그를 다는 편이 낫다 — 이 범위 25문 중 7문이 여기 몰려 있어 카탈로그에서 가장 큰 덩어리가 된다.
