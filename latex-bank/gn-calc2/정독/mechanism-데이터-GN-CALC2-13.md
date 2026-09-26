---
name: mechanism-데이터-GN-CALC2-13
description: 개념원리 미적분Ⅱ 13 삼각함수의 극한(1/1 · 110~119쪽 · 32문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ · 전사본 latex-bank/gn-calc2
  section: 13 삼각함수의 극한
  unit_code: "13"
  part: "1/1"
  extract_range: "110~119쪽 · 110-220~119-245"
  total_problems: 32
  unit_total: 32
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·예제 태그·STEP 난이도)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 insights 의 effective_depth 평균. insight_type 은 insights 유무로만 판정(비었으면 절차형). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (crops.json)
---

# 개념원리 미적분Ⅱ · 13 삼각함수의 극한 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅱ 13단원 「삼각함수의 극한」 110~119쪽 32문항 전수를 다룬다. 구역은 개념원리 익히기 3문 · 필수·발전 예제(필수 예제 5 · 발전 예제 1 · 확인체크 8) 14문 · 연습문제 STEP 1 7문 · STEP 2 5문 · 실력 UP 3문이다. 단원의 도구는 좁다 — 삼각함수의 연속성(직접 대입), sin x/x·tan x/x 기본극한, 1-cos x 유리화, 극한점을 0 으로 옮기는 치환, 미정계수의 역조건, 도형 길이·넓이를 θ 의 식으로 옮기는 전환 여섯 개가 전부이고 32문항은 이 여섯 골조의 조합이다. 그래서 통찰 라벨도 I-EQV 에 크게 쏠린다.

벤더 난이도 신호: 개념원리 익히기(통번호) → ★1 출발, 필수 예제 → ★2, 발전 예제 → ★3, 연습문제 STEP 1 → ★2 · STEP 2 → ★3 · 실력 UP → ★4 출발. **확인체크는 바로 앞 예제의 유제**라서 지시서의 일괄 ★1 출발 대신 **대응 예제의 출발점(필수 ★2 · 발전 ★3)** 을 썼고, 거기서 M_total·통찰로 ±1 했다(이 관례는 파일 끝 카탈로그 차원 메모에 적어 둔다). 출발점과 2단 이상 벌어진 문항은 rationale 에 `[분류 이슈]` 한 줄을 남기고 끝의 표에 모았다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. answer 는 전사본 값을 그대로 옮겼고 이 단계에서 재검산하지 않았다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CALC2-110-220
  page: 110
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 네 개의 삼각함수 극한값을 구하기(x→π/4 에서 sin 2x, x→2π 에서 tan(x/3), x→0 에서 (3+sin x)/cos x, x→π/6 에서 tan x/cos x). 모두 극한점에서 연속.
  category: "삼각함수의 연속성 → 극한점 직접 대입"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 연속성을 이용한 극한값(직접 대입)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 소문항 모두 분모가 0 이 되지 않아 함숫값 대입 한 줄로 끝난다. 삼각함수의 값 계산(특수각)만 남는다.
    통찰 없음·M_total 4 → 개념원리 익히기 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: "극한점에서 연속 확인 → x=a 대입 → 특수각 삼각비 계산"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $1$ ⑵ $-\sqrt{3}$ ⑶ $3$ ⑷ $\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/110-220.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한점(π/4, π/3, π/6, 2π)과 내부 계수(sin 2x → sin 3x, tan(x/3) → tan(x/2))를 바꿀 수 있다. 제약: 바꾼 극한점에서 tan·sec 가 정의돼야 하고(π/2 의 홀수배 금지) 분모가 0 이 되지 않아야 한다 — 그렇지 않으면 직접 대입 골조가 깨져 다른 유형이 된다."
    creative: "(1) 한 소문항만 분모가 0 이 되게 해 부정형 처리와 섞기(★2) (2) x→a 에서 좌·우극한이 다른 tan 의 발산을 섞어 극한 없음을 판정하게 하기(★2 · T-범위) (3) 합성함수 sin(cos x) 형태로 연속성 합성을 묻기(★2)."
```

```yaml
- id: GN-CALC2-110-221
  page: 110
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    x→0 에서 5x/tan 7x 의 값을 구하는 과정의 빈칸 넷을 채우기. 역수 꼴로 바꾼 뒤 tan 7x/7x 기본극한을 만들도록 유도돼 있다.
  category: "기본극한 tan kx/kx 꼴 맞추기 → 빈칸 채우기"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "tan kx 를 포함한 기본극한의 변형 과정(빈칸 채우기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    골조(역수 → 7x 로 맞추기 → 계수 7/5 분리)가 발문에 이미 인쇄돼 있어 학생은 계수만 채운다.
    통찰 없음·M_total 4 → 개념원리 익히기 출발점 ★1 유지. 같은 계산을 빈칸 없이 물으면 ★1~2.
  tier: star_1
  mechanism_primary: "5x/tan 7x = 1/(tan 7x/7x × 7/5) → 1/(1×7/5) = 5/7"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$7x$, $\dfrac{7}{5}$, $\dfrac{7}{5}$, $\dfrac{5}{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/110-221.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 계수 5 와 분모 각 계수 7 을 다른 서로소 쌍(3/4, 2/9)으로. 제약: 두 계수가 약분되면 빈칸의 변별이 사라지고, tan 을 sin 으로 바꿔도 같은 골조다."
    creative: "(1) 빈칸을 없애고 값만 묻기(★1) (2) 분모를 tan 7x + sin 2x 처럼 두 항으로 만들어 계수합을 쓰게 하기(★2) (3) 빈칸 과정에 틀린 줄을 하나 넣고 어디가 틀렸는지 찾게 하기(★2 · I-VF 성격)."
```

```yaml
- id: GN-CALC2-110-222
  page: 110
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴ x→0 에서 sin 2x/5x ⑵ x→0 에서 sin 3x/tan 5x 의 극한값.
  category: "sin kx/kx · tan kx/kx 꼴로 분해 → 계수비"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "sin kx/x, tan kx/x 꼴의 기본극한(계수비)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    분자·분모에 각의 계수를 맞춰 곱하고 나누면 기본극한 두 개만 남고 계수비가 답이다.
    통찰 없음·M_total 4 → ★1 유지. 단원의 가장 기본형이고 뒤 모든 문항의 부품이 된다.
  tier: star_1
  mechanism_primary: "sin 2x/2x · tan 5x/5x 로 분해 → 남은 계수비 2/5, 3/5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\dfrac{2}{5}$ ⑵ $\dfrac{3}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/110-222.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각의 계수 (2,5), (3,5) 를 임의의 양수 쌍으로. 제약: 두 계수가 모두 0 이 아니어야 하고 답이 유리수로 정리되게 하려면 정수로 두는 것이 좋다."
    creative: "(1) sin 을 sin(x²) 처럼 바꿔 분모도 x² 로 맞추게 하기(★2) (2) 분모를 x + tan 3x 로 만들어 최저차항 계수합을 보게 하기(★2) (3) 극한값을 주고 계수를 역으로 묻기(★2 · 미정계수 골조)."
```

### 필수·발전 예제

```yaml
- id: GN-CALC2-111-e9
  page: 111
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 0/0 부정형 삼각함수 극한(x→π/2 에서 cos²x/(1-sin x), x→π 에서 sin 2x/sin x, x→π/4 에서 (sin x-cos x)/(1-cot x)). 기본극한이 아니라 삼각항등식으로 약분해 대입하는 꼴.
  category: "삼각항등식(피타고라스·배각·cot 정의) → 약분 → 직접 대입"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 극한(항등식 변형·약분으로 부정형 해소)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ cos²x=1-sin²x 인수분해, ⑵ sin 2x=2 sin x cos x, ⑶ 1-cot x=(sin x-cos x)/sin x 로 각각 공통인수를 만들어 약분하면 연속인 식이 남아 대입으로 끝난다.
    x→0 이 아니므로 sin x/x 기본극한은 쓰지 않는다 — 이 점이 뒤 예제와의 분기점이다. 도구가 표준 항등식 대입이라 통찰 카드는 세지 않았고, 소문항 3개로 단계가 누적돼 M_total 6 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "0/0 확인 → 삼각항등식으로 공통인수 생성 → 약분 → 극한점 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $2$ ⑵ $-2$ ⑶ $\dfrac{\sqrt{2}}{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/111-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한점을 같은 부정형이 생기는 다른 특수각으로(π/2 ↔ 3π/2, π ↔ 2π), 배각의 계수를 2 ↔ 3(삼배각은 인수분해가 무거워짐)으로. 제약: 약분 뒤 남는 식이 그 점에서 연속이어야 하고 분모가 0 이 되면 안 된다."
    creative: "(1) sin↔cos 를 맞바꿔 같은 골조·다른 답 만들기(★2) (2) 약분 뒤에도 0/0 이 남게 두 번 인수분해하게 하기(★3) (3) 극한점을 0 으로 옮겨 기본극한과 항등식을 함께 쓰게 하기(★3)."
```

```yaml
- id: GN-CALC2-111-223
  page: 111
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 네 개의 삼각함수 극한(sec x/csc x, sin 4x/sin 2x, cos 2x/(cos x-sin x), (1-tan²x)/(sin x-cos x)). 모두 x→π/4 또는 π/2 에서 항등식으로 정리하는 꼴.
  category: "sec·csc·tan 을 sin·cos 로 환원 → 배각·인수분해 약분 → 대입"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 극한(항등식 변형·약분으로 부정형 해소)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 연속이라 대입, ⑵ 는 배각으로 sin 2x 를 만들고 약분, ⑶⑷ 는 cos 2x=(cos x-sin x)(cos x+sin x), 1-tan²x=(cos²x-sin²x)/cos²x 로 분모의 인수를 만들어 약분한다.
    앞 필수 예제 e9 의 유제이고 소문항이 넷이라 단계가 누적돼 M_total 6, 통찰 없음 → ★2.
  tier: star_2
  mechanism_primary: "모든 삼각함수를 sin·cos 로 환원 → 배각·인수분해로 공통인수 약분 → 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $1$ ⑵ $-2$ ⑶ $\sqrt{2}$ ⑷ $-2\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/111-223.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각의 계수(sin 4x/sin 2x → sin 6x/sin 3x)와 극한점(π/4 ↔ 3π/4)을 바꿀 수 있다. 제약: cos x-sin x 를 분모로 쓰면 극한점은 반드시 π/4 계열이어야 0/0 이 되고, sec·csc 는 그 점에서 정의돼야 한다."
    creative: "(1) cos 2x 를 1-2sin²x 로 주어 다른 인수분해 경로를 강제하기(★2) (2) 분모를 (cos x-sin x)² 로 만들어 약분 뒤에도 부정형이 남게 하기(★3) (3) 네 식 중 극한값이 다른 하나를 고르게 하는 5지선다로 바꾸기(★2 · 117-233 골조)."
```

```yaml
- id: GN-CALC2-111-224
  page: 111
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    x→0 에서 x²sin(1/x) 의 값.
  category: "유계 진동 × 0 수렴 → 샌드위치 정리"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "sin(1/x) 가 x→0 에서 진동해 곱의 극한 법칙을 쓸 수 없음을 보고 -x² ≤ x²sin(1/x) ≤ x² 로 조건을 바꿔 조임"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "샌드위치 정리를 이용한 삼각함수의 극한(유계 진동 × 0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    lim sin(1/x) 가 존재하지 않으므로 곱의 극한 법칙을 그대로 쓸 수 없다는 판단이 이 문항의 전부다. |sin(1/x)| ≤ 1 로 조여 양 끝이 모두 0 임을 보인다.
    T-범위(극한이 존재하지 않는 인수) 함정 1개 · 통찰 1개(EQV d1) → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "|sin(1/x)| ≤ 1 → -x² ≤ x²sin(1/x) ≤ x² → 샌드위치로 0"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/111-224.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "앞 인수의 차수 x² 를 x, x³, |x| 로, 진동 인수를 cos(1/x)·sin(3/x) 로. 제약: 앞 인수가 x→0 에서 0 으로 수렴해야 하고(상수나 1/x 이면 골조가 깨짐) 진동 인수는 유계여야 한다."
    creative: "(1) x→∞ 에서 sin x/x 로 같은 골조 묻기(★2) (2) 극한이 존재하지 않는 예(sin(1/x) 단독)와 짝지어 판정하게 하기(★3 · I-MI) (3) 조임 부등식의 양 끝을 학생이 직접 세우고 정당화까지 쓰게 하는 서술형(★3)."
```

```yaml
- id: GN-CALC2-112-e10
  page: 112
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑷ x→0 기본극한 꼴(tan 2x/sin 3x, (sin 3x-sin 2x)/4x, tan(tan x)/x, sin x°/x). ⑶ 은 합성, ⑷ 는 각의 단위가 도(°).
  category: "sin kx/kx · tan kx/kx 기본극한으로 분해 → 계수 정리"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 4
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x° 는 라디안으로 πx/180 임을 먼저 고쳐 써야 기본극한을 적용할 수 있음(각 단위 동치 변환)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "x→0 에서 sin x/x, tan x/x 꼴의 극한(분해·치환·각 단위)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴⑵ 는 각 항을 sin kx/kx 꼴로 쪼개 계수만 남기는 표준 분해, ⑶ 은 tan x=t 치환으로 tan t/t · tan x/x 두 기본극한의 곱, ⑷ 는 도 단위를 라디안으로 고치는 T-단위 함정이 핵심이다.
    통찰은 ⑷ 의 각 단위 변환 1개(EQV d1) · M_total 7 → 필수 예제 출발점 ★2 유지. 이 단원 계산 부품을 한 문항에 모아 둔 자리다.
  tier: star_2
  mechanism_primary: "각 항을 sin(각)/(각) 꼴로 분해 → 남은 계수비 · ⑶ 은 tan x=t 치환 · ⑷ 는 x°=πx/180"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\dfrac{2}{3}$ ⑵ $\dfrac{1}{4}$ ⑶ $1$ ⑷ $\dfrac{\pi}{180}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/112-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 계수 (2,3), (3,2), 분모 4x 의 4 를 바꿀 수 있고 ⑷ 의 도 단위를 그라드나 sin(180x)° 로 비틀 수 있다. 제약: 분자·분모가 모두 x 의 1차로 환원돼야 유한 극한이 되고, ⑵ 에서 두 각 계수가 같으면 분자가 0 이 돼 골조가 무너진다."
    creative: "(1) ⑶ 의 합성을 sin(sin x)/tan(tan 2x) 처럼 이중으로(★3) (2) 분모를 x+x² 로 만들어 최저차항만 살아남음을 보게 하기(★2) (3) 도 단위 문항을 각 단위 혼용 오답과 함께 5지선다로 내 T-단위 함정을 정면으로 묻기(★3)."
```

```yaml
- id: GN-CALC2-112-225
  page: 112
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ x→0 기본극한 꼴(sin(3x³+x²+5x)/(5x³+4x²+2x), tan 2x/(x cos x), sin(tan x)/sin 2x, sin 2x/(x+tan 3x)).
  category: "분자·분모를 x 의 최저차항으로 환원 → 계수비"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "x→0 에서 sin x/x, tan x/x 꼴의 극한(다항·합성·합 분모)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 소문항 모두 sin(A)/A · A/x 로 쪼개 x 의 1차 계수만 남기면 끝난다. ⑴ 은 다항식의 최저차항 5x 와 2x 의 비, ⑷ 는 분모를 x·(1+tan 3x/x) 로 묶어 계수합 1+3 을 본다.
    골조가 e10 과 같고 새 도구가 없어 통찰 0 · M_total 6 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "sin(A)/A 분해 → A 와 분모를 각각 x 의 최저차항으로 환원 → 계수비"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{5}{2}$ ⑵ $2$ ⑶ $\dfrac{1}{2}$ ⑷ $\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/112-225.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다항식의 계수(5x³+4x²+2x 의 2, 분자의 5)와 각 계수를 바꿀 수 있다. 제약: 분자·분모의 최저차가 모두 1차로 같아야 0 이나 발산이 아닌 유한 극한이 된다 — 차수를 어긋나게 하면 답이 0 또는 ∞ 가 된다."
    creative: "(1) 최저차를 2차로 맞춰 sin(x²)/x² 골조로(★2) (2) 분모 최저차를 2차로 만들어 발산을 판정하게 하기(★3 · T-범위) (3) 극한값을 주고 다항식의 계수를 역으로 구하게 하기(★3 · 미정계수)."
```

```yaml
- id: GN-CALC2-112-226
  page: 112
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ x→0 에서 (e^{3x}-1)/sin 2x ⑵ x→0 에서 ln(x+1)/tan 3x 의 극한값.
  category: "지수·로그 기본극한과 삼각 기본극한을 한 식에서 함께 맞추기"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수·로그함수의 기본극한과 결합된 삼각함수의 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (e^{3x}-1)/3x → 1, ln(x+1)/x → 1, sin 2x/2x → 1, tan 3x/3x → 1 을 각각 세운 뒤 남은 계수비를 읽으면 된다.
    [분류 이슈] 앞 단원(지수·로그함수의 극한)과 이 단원의 기본극한이 함께 필요해 I-XU 로 볼 여지가 있으나, 같은 대단원 「여러 가지 함수의 극한」 안의 인접 소단원이어서 보수적으로 통찰 카드를 세지 않았다. 통찰 0·M_total 5 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "(e^{3x}-1)/3x · ln(x+1)/x · sin 2x/2x · tan 3x/3x 로 분해 → 계수비"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{3}{2}$ ⑵ $\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/112-226.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 계수 3, 각 계수 2·3 을 바꾸고 e^{3x}-1 을 a^{kx}-1(→ k ln a)로 바꿀 수 있다. 제약: ln 의 진수는 x→0 에서 1 로 가야 하고(ln(x+1), ln(1+2x)) 밑이 1 이 아닌 양수여야 한다."
    creative: "(1) 분자를 e^{sin x}-1 로 만들어 합성 기본극한을 쓰게 하기(★3) (2) 분자·분모를 각각 두 항의 합으로 만들어 최저차 계수합을 보게 하기(★2) (3) 극한값을 주고 지수의 계수를 역으로 묻기(★3 · 115-229 ⑶⑷ 골조)."
```

```yaml
- id: GN-CALC2-113-e11
  page: 113
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ x→0 에서 (1-cos x)/x² ⑵ x→0 에서 x tan x/(1-cos x) 의 극한값.
  category: "1-cos x 에 1+cos x 를 곱해 sin²x 로 전환 → 기본극한"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "1-cos x 는 그대로는 기본극한이 없으므로 1+cos x 를 곱해 sin²x/(1+cos x) 로 동치 변환해야 sin x/x 를 쓸 수 있음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "1-cos x 를 포함한 극한(유리화 → sin²x 전환)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이 단원의 두 번째 표준 부품을 가르치는 자리다. 유리화 뒤 (sin x/x)²·1/(1+cos x) → 1/2 가 나오고, ⑵ 는 이 결과의 역수 구조에 tan x/x 를 곱한 것이다.
    통찰 1개(EQV d1)·M_total 5 → 필수 예제 출발점 ★2 유지. 1-cos x ≈ x²/2 라는 근사 감각이 뒤 문항(117-232, 118-239, 119-244)의 부품이 된다.
  tier: star_2
  mechanism_primary: "1-cos x → (1-cos²x)/(1+cos x) = sin²x/(1+cos x) → (sin x/x)² × 1/(1+cos x)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\dfrac{1}{2}$ ⑵ $2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/113-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "1-cos kx 의 각 계수 k 와 분모 차수(x², x tan 3x)를 바꿀 수 있다. 제약: 분모는 반드시 2차로 환원돼야 유한 극한이 되고(1차면 0, 3차면 발산) 1-cos kx 의 극한은 k²/2 로 계수가 제곱으로 들어간다."
    creative: "(1) 1-cos x 대신 1-cos²x·cos x-cos 2x 로 바꿔 인수분해를 한 번 더 시키기(★3) (2) 분모를 sin²x 로 두어 1-cos kx/sin²x 꼴로(★2 · 117-232 골조) (3) 극한값을 주고 계수 k 를 역으로 묻기(★3)."
```

```yaml
- id: GN-CALC2-113-227
  page: 113
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 1-cos 꼴 극한 넷((1-cos x)/(x tan 6x), (1-cos 2x)/x², (1-cos x)/(1-cos 2x), (csc x-cot x)/x).
  category: "1-cos 유리화 → sin²/(1+cos) → 기본극한 계수비"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑷ 의 csc x-cot x 를 (1-cos x)/sin x 로 묶어 앞 세 문항과 같은 1-cos 골조로 되돌림"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "1-cos x 를 포함한 극한(유리화 → sin²x 전환)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴~⑶ 은 1-cos kx → k²x²/2 감각으로 계수비를 읽으면 되고, ⑷ 만 csc-cot 를 한 분수로 묶는 정리가 한 단계 더 붙는다.
    통찰 1개(EQV d1)·M_total 6 → 필수 예제 e11 의 유제로서 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "각 1-cos kx 를 sin²kx/(1+cos kx) 로 바꿔 x² 의 계수 k²/2 로 환원 → 비"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\dfrac{1}{12}$ ⑵ $2$ ⑶ $\dfrac{1}{4}$ ⑷ $\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/113-227.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 계수(1-cos 2x → 1-cos 3x, x tan 6x 의 6)를 바꿀 수 있다. 제약: 분자·분모가 모두 x² 차수로 맞아야 하고, ⑶ 처럼 1-cos 끼리의 비로 두면 답은 계수 제곱비가 된다."
    creative: "(1) sec x-1 · 1-sec x cos 2x 처럼 변형된 1-cos 꼴로(★3) (2) 분모를 x sin x+x² 로 두어 계수합까지 보게 하기(★3) (3) 네 극한의 대소를 비교하게 하기(★3 · 118-239 골조)."
```

```yaml
- id: GN-CALC2-114-e12
  page: 114
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ x→∞ 에서 x sin(1/x) ⑵ x→π/2 에서 (x-π/2)/cos x ⑶ x→1 에서 cos(πx/2)/(1-x²). 극한점이 0 이 아니어서 치환이 필요한 꼴.
  category: "극한점을 0 으로 옮기는 치환 → 삼각함수 각변환 → 기본극한"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "1/x=t, x-π/2=t, x-1=t 로 두어 x→∞·π/2·1 을 t→0 으로 옮기고 cos(t+π/2)=-sin t 처럼 각을 변환해 기본극한이 쓰이는 꼴로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "치환을 이용한 삼각함수의 극한(극한점을 0 으로 이동)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이 단원의 세 번째 표준 부품. 치환 자체는 기계적이지만 치환 뒤 삼각함수의 각을 다시 쓰는 단계(cos(t+π/2)=-sin t, cos(π/2+πt/2)=-sin(πt/2))에서 부호를 놓치기 쉬워 T-부호 1개를 세었다.
    통찰 1개(EQV d1)·M_total 7 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "치환으로 t→0 이동 → 각변환(cos(t+π/2)=-sin t) → sin t/t 기본극한"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $1$ ⑵ $-1$ ⑶ $\dfrac{\pi}{4}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/114-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한점(π/2 → 3π/2, 1 → -1)과 내부 계수(cos(πx/2) → cos(πx/3))를 바꿀 수 있다. 제약: 치환 뒤 분자·분모가 모두 t 의 1차로 환원돼야 하고, 각변환에서 나오는 부호가 답의 부호를 결정하므로 극한점을 옮기면 부호도 다시 확인해야 한다."
    creative: "(1) x→∞ 꼴을 x tan(1/(2x+1)) 처럼 비틀어 치환 후 계수 정리를 더하기(★3 · 114-228 ⑶) (2) 분자를 sin(cos(πx/2)) 로 합성하기(★3 · 114-228 ⑷) (3) 치환 없이 그대로 계산하려는 오답 풀이를 제시하고 어디가 틀렸는지 묻기(★3)."
```

```yaml
- id: GN-CALC2-114-228
  page: 114
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 치환이 필요한 극한 넷(x→π 에서 sin x/(π-x), x→π/2 에서 (x-π/2)tan x, x→∞ 에서 x tan(1/(2x+1)), x→1 에서 sin(cos(πx/2))/(x-1)).
  category: "극한점을 0 으로 옮기는 치환 → 각변환 → 기본극한"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "π-x=t, x-π/2=t, 1/(2x+1)=t, x-1=t 로 극한점을 0 으로 옮기고 sin(π-t)=sin t 처럼 각을 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "치환을 이용한 삼각함수의 극한(극한점을 0 으로 이동)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e12 의 유제. ⑶ 은 치환 뒤 x 를 t 로 되돌리는 계수 정리((1/t-1)/2 꼴)가, ⑷ 는 sin(cos(πx/2)) 의 안쪽이 0 으로 가는 것을 보고 이중 기본극한을 쓰는 단계가 더 붙는다.
    통찰 1개(EQV d1)·M_total 7 → 확인체크 출발점 ★2 유지. ⑶⑷ 만 따로 내면 ★3 급이다.
  tier: star_2
  mechanism_primary: "치환으로 t→0 이동 → 각변환 → sin t/t · tan t/t 로 환원 → 계수 정리"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $1$ ⑵ $-1$ ⑶ $\dfrac{1}{2}$ ⑷ $-\dfrac{\pi}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/114-228.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑶ 의 1/(2x+1) 에서 계수 2·1, ⑷ 의 cos(πx/2) 계수를 바꿀 수 있다. 제약: x→∞ 꼴은 치환 뒤 x·t → 상수가 되도록 분모가 x 의 1차여야 하고, ⑷ 는 극한점에서 안쪽 함수가 0 이 되는 점(x=1)을 써야 한다."
    creative: "(1) ⑵ 를 (x-π/2)sec x 로 바꿔 같은 골조 다른 표기로(★2 · 117-233 ④) (2) 분모를 (x-π)² 로 올려 1-cos 골조와 결합하기(★4 · 119-244) (3) 치환 결과를 일반화해 lim f(x)/(x-a) 꼴의 도함수 정의와 연결하기(★3 · I-XU)."
```

```yaml
- id: GN-CALC2-115-e13
  page: 115
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    x→0 에서 sin 2x/(√(ax+b)-2) = 4 를 만족시키는 상수 a, b 구하기.
  category: "극한 존재 → 분모의 극한 0 역조건 → 유리화 → 계수 결정"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "극한값이 유한하고 분자가 0 으로 가므로 분모의 극한도 0 이어야 한다는 동치 조건으로 b 를 먼저 확정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수의 극한에서 미정계수의 결정(분모→0 역조건 + 유리화)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    √b=2 로 b 를 정한 뒤 분모를 유리화하면 sin 2x(√(ax+4)+2)/(ax) 가 되고 2·4/a=4 에서 a 가 나온다.
    이 단원 네 번째 표준 부품(미정계수 역조건)의 도입 자리다. 통찰 1개(EQV d1)·미지수 2개로 Mₐ=2·M_total 8 이지만 골조가 교재에서 바로 주어지므로 필수 예제 출발점 ★2 유지. 같은 골조가 118-237(★3)·119-244(★4)에서 무거워진다.
  tier: star_2
  mechanism_primary: "분모→0 역조건으로 b 확정 → 유리화 → sin 2x/2x 기본극한 → a 결정"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a=2$, $b=4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/115-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한값 4, 분자의 각 계수 2, 분모의 상수 -2 를 바꿀 수 있다. 제약: √(ax+b) 의 극한이 분모의 상수와 상쇄돼 0 이 돼야 하고(b 는 그 상수의 제곱) a≠0 이어야 유한 극한이 나온다. b 를 음수로 두면 정의역이 깨진다."
    creative: "(1) 분모를 ∛ 로 바꿔 세제곱 인수분해로 유리화하기(★3) (2) 분자를 1-cos x 로 바꿔 분모를 2차로 맞추기(★4 · 119-244) (3) a, b 의 합·곱을 묻는 형태로 바꿔 답을 하나로 만들기(★2 · 118-237 골조)."
```

```yaml
- id: GN-CALC2-115-229
  page: 115
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 등식을 만족시키는 정수 a, b 구하기(sin(ax+b)/tan x=3, (a-b cos x)/x²=1, sin ax/ln(x+4-b)=7, x→1 에서 sin(2x-a)/log₃x=ln b).
  category: "극한 존재 역조건으로 한 상수 확정 → 기본극한으로 나머지 상수 결정"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "소문항마다 '유한 극한이 존재하려면 분자(또는 분모)의 극한이 0 이어야 한다'를 서로 다른 자리에 적용해 b 를 먼저 확정(⑴ sin b=0, ⑵ a-b=0, ⑶ 진수 4-b=1, ⑷ 2-a=0)"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑶⑷ 에서 로그의 기본극한(ln(1+t)/t, log₃x=ln x/ln 3)을 삼각 기본극한과 같은 척도로 맞춰 계수를 비교"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "삼각함수의 극한에서 미정계수의 결정(로그·1-cos 결합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    e13 의 유제지만 역조건이 걸리는 자리가 소문항마다 다르고(분자의 sin 안, 상수항, 로그의 진수, 각의 상수), ⑵ 는 1-cos x 골조, ⑶⑷ 는 로그 기본극한과의 결합까지 얹힌다.
    통찰 2개(EQV d2+d1)·M_total 8 → 확인체크 출발점 ★2 에서 +1 → ★3.
    [분류 이슈] 지시서의 확인체크 일괄 ★1 출발 기준으로는 2단 차이다. 여기서는 대응 예제(필수 ★2)를 출발점으로 삼았다.
  tier: star_3
  mechanism_primary: "각 소문항에서 분자·분모의 0 수렴 역조건으로 한 상수 확정 → 기본극한 계수비로 나머지 상수 결정"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $a=3$, $b=0$ ⑵ $a=2$, $b=2$ ⑶ $a=7$, $b=3$ ⑷ $a=2$, $b=9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/115-229.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 등식의 우변(3, 1, 7, ln 9)과 로그의 밑·진수 상수를 바꿀 수 있다. 제약: a, b 가 정수로 떨어지게 우변을 고르고, ⑴ 은 sin b=0 에서 b 가 정수여야 하므로 b=0 만 허용되는 구조이며 ⑶ 의 진수는 x→0 에서 1 이 돼야 한다."
    creative: "(1) b 의 조건을 '정수' 대신 '자연수'로 바꿔 후보 기각을 만들기(★3 · I-VF) (2) ⑵ 를 (a-b cos x)/x⁴ 로 올려 a=b 만으로는 유한하지 않음을 보게 하기(★4) (3) a, b 를 구한 뒤 f(a+b) 처럼 한 번 더 대입시키기(★3 · 118-240 골조)."
```

```yaml
- id: GN-CALC2-116-e14
  page: 116
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    중심 O, 반지름 1, 호 AB 의 길이가 θ 인 부채꼴 OAB 에 내접하는 원의 넓이 S(θ) 에 대하여 θ→0+ 에서 S(θ)/θ² 의 값.
  category: "내접원 조건을 반지름 r 의 식으로 전환 → S(θ)=πr² → 기본극한"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'부채꼴에 내접한다'는 도형 조건을 두 대수식(중심이 이등분선 위에 있어 d sin(θ/2)=r, 호에 접하므로 d+r=1)으로 번역해 r 을 θ 의 식으로 얻음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각함수의 극한의 도형에서의 활용(부채꼴 내접원)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    반지름이 1 이므로 호의 길이 θ 가 곧 중심각이다. 내접원의 중심이 각의 이등분선 위에 있다는 것을 세우는 단계가 이 문항의 전부이고, r=sin(θ/2)/(1+sin(θ/2)) 를 얻으면 S/θ²=πr²/θ² 은 sin(θ/2)/(θ/2) 기본극한으로 끝난다.
    통찰 1개(RT d2)·M_total 8·θ→0+ 의 한쪽 극한 → 발전 예제 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "내접원 중심을 이등분선 위에 두고 d sin(θ/2)=r, d+r=1 → r=sin(θ/2)/(1+sin(θ/2)) → πr²/θ² → π/4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{\pi}{4}$'
  answer_source: "본문 풀이"
  figure: "crop:fig-116-e14.png"
  latex: latex-bank/gn-calc2/items/116-e14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 1 을 일반 상수 a 로(호의 길이와 중심각의 관계가 aθ 로 바뀌는 점 주의), 묻는 비를 S(θ)/θ³ 나 S(θ)/θ 로. 제약: 그림의 라벨 O·A·B 와 '호 AB 의 길이=θ' 는 고정하고, 분모의 차수를 바꾸면 극한이 0 이나 ∞ 가 되므로 넓이의 차수(θ²)와 맞춰야 한다."
    creative: "(1) 내접원 대신 내접 정삼각형·내접 직사각형의 넓이로(★3) (2) 부채꼴 넓이와 내접원 넓이의 차를 묻기(★4) (3) 내접원의 둘레나 중심까지의 거리 d 를 θ 로 두고 극한을 묻기(★3) — 차수가 1 로 내려가 계수만 바뀐다."
```

```yaml
- id: GN-CALC2-116-230
  page: 116
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    점 A(2,0) 과 원 x²+y²=4 위에서 y좌표가 같은 두 점 B, C, ∠AOB=θ 에 대하여 부채꼴 OAB 의 넓이 S(θ) 와 삼각형 OBC 의 넓이 T(θ) 의 비의 θ→0+ 극한.
  category: "부채꼴·삼각형 넓이를 θ 의 식으로 전환 → 비 → 기본극한"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'y좌표가 같은 두 점'을 y축 대칭 B(2cos θ, 2sin θ), C(-2cos θ, 2sin θ) 로 옮겨 밑변 BC=4cos θ, 높이 2sin θ 로 번역"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수의 극한의 도형에서의 활용(부채꼴·삼각형 넓이의 비)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    S(θ)=2θ, T(θ)=4 sin θ cos θ 를 세우면 비가 θ/(2 sin θ cos θ) 로 정리되고 sin θ/θ 기본극한만 남는다.
    계산은 짧지만 B, C 의 대칭 배치를 좌표로 옮기는 단계가 승부처다. 통찰 1개(RT d1)·M_total 7 → 발전 예제 e14 의 유제로서 출발점 ★3 유지.
    [분류 이슈] 지시서의 확인체크 일괄 ★1 출발 기준으로는 2단 차이이고 계산 자체는 ★2 급이다.
  tier: star_3
  mechanism_primary: "B(2cos θ, 2sin θ)·C(-2cos θ, 2sin θ) → S=2θ, T=4 sin θ cos θ → θ/(2 sin θ cos θ) → 1/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: "crop:fig-116-230.png"
  latex: latex-bank/gn-calc2/items/116-230.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원의 반지름 2 를 다른 양수로(S 와 T 가 같은 차수로 함께 스케일되므로 답은 그대로), ∠AOB 를 2θ 로. 제약: 그림의 점 라벨 A·B·C·O 와 '원점 O' 조건은 고정하고, B·C 가 y축 대칭이라는 배치가 유지돼야 T 의 밑변 공식이 성립한다."
    creative: "(1) 삼각형 OBC 대신 삼각형 ABC 의 넓이로 바꾸면 차수가 달라져 θ³ 비교가 된다(★4) (2) 활꼴(부채꼴-삼각형) 넓이의 비를 묻기(★4 · 차수 3) (3) 두 넓이의 차를 θ³ 으로 나누게 하기(★4)."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC2-117-231
  page: 117
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    x→π/2 에서 (sec x-tan x)/cos x 의 값.
  category: "sec·tan 를 한 분수로 묶기 → cos²x=1-sin²x 인수분해 약분 → 대입"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "sec x-tan x=(1-sin x)/cos x 로 묶은 뒤 분모의 cos²x 를 (1-sin x)(1+sin x) 로 보아 1-sin x 를 약분(∞-∞ 꼴을 약분 가능한 분수로 동치 변환)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수의 극한(항등식 변형·약분으로 부정형 해소)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x→π/2 에서 sec x 와 tan x 가 각각 발산하므로 먼저 한 분수로 묶어야 한다. 묶고 나면 (1-sin x)/cos²x 이고 피타고라스 인수분해로 약분돼 1/(1+sin x) → 1/2.
    통찰 1개(EQV d1)·M_total 5 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "sec x-tan x=(1-sin x)/cos x → (1-sin x)/cos²x → 1/(1+sin x) → 1/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/117-231.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한점 π/2 를 3π/2 로(부호가 바뀐다), 분모 cos x 를 cos²x·cos³x 로 올릴 수 있다. 제약: 분모의 차수를 올리면 약분 뒤에도 0 이 남아 발산하므로 분자에도 같은 차수의 인수를 만들어야 한다."
    creative: "(1) csc x-cot x 꼴로 바꿔 113-227 ⑷ 와 같은 부품으로(★2) (2) 분모를 (2x-π)² 로 두어 치환+1-cos 골조와 섞기(★3 · 117-235) (3) 극한값을 주고 분모의 계수를 역으로 묻기(★3)."
```

```yaml
- id: GN-CALC2-117-232
  page: 117
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    x→0 에서 (1-cos kx)/sin²x=4 를 만족시키는 양수 k 의 값.
  category: "1-cos kx → k²x²/2 환원 → k 에 대한 방정식 → 양수 조건으로 선택"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "1-cos kx 에 1+cos kx 를 곱해 sin²kx/(1+cos kx) 로 바꾸면 극한이 k²/2 가 되어 미지수 k 가 계수로 드러남"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "1-cos x 를 포함한 극한에서 미정계수의 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자·분모를 모두 x² 척도로 환원하면 좌변이 k²/2 이고 k²=8 에서 k=2√2. 계수가 제곱으로 들어간다는 것과 양수 조건으로 음의 근을 버리는 T-부호가 함정이다.
    통찰 1개(EQV d1)·M_total 7 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "(1-cos kx)/sin²x → (k²/2) → k²/2=4 → k=2√2 (양수 조건)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/117-232.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 4 를 k 가 깔끔하게 떨어지는 값(1/2 → k=1, 2 → k=2)으로, 분모 sin²x 를 x tan 3x 로. 제약: 우변은 양수여야 하고(좌변이 k²/2) k 의 부호 조건이 없으면 답이 둘이 되므로 '양수' 같은 단서가 반드시 필요하다."
    creative: "(1) 조건을 '정수 k' 로 바꿔 해가 없음을 판정하게 하기(★3 · I-VF) (2) (1-cos kx)/(1-cos 3x)=4 꼴로 두 1-cos 의 비로(★2) (3) k 의 값이 아니라 k 의 범위를 묻는 부등식으로(★3)."
```

```yaml
- id: GN-CALC2-117-233
  page: 117
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    다섯 개의 극한(tan x/sin x, x tan(1/x) at x→∞, x cos x/sin x, (π/2-x)sec x, x cos(1/x)) 중 극한값이 나머지 넷과 다른 하나 고르기. 5지선다.
  category: "각 보기의 극한을 기본극한·치환·샌드위치로 계산 → 다른 값 하나 식별"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 5
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑤ 의 cos(1/x) 는 극한이 없어 곱의 법칙을 쓸 수 없음을 보고 |cos(1/x)| ≤ 1 로 조여 0 임을 판정(나머지 넷은 모두 1)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "여러 극한값의 비교·판별(기본극한 + 샌드위치)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ①③ 은 기본극한 그대로, ②④ 는 1/x=t·π/2-x=t 치환으로 모두 1 이고 ⑤ 만 샌드위치로 0 이다.
    다섯 번 계산해야 해 노동량은 크지만 부품은 모두 앞에서 나온 것이고, 계산 마찰을 ★ 상승 신호로 쓰지 않는다는 v3.8 원칙에 따라 STEP 1 출발점 ★2 유지. 통찰은 ⑤ 의 유계 판정 1개.
  tier: star_2
  mechanism_primary: "보기별로 기본극한·치환 적용 → 넷은 1 → 유계 진동 × 0 인 ⑤ 만 0"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/117-233.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기의 각 계수를 바꿔 공통값을 1 이 아닌 값(모두 2)으로 맞출 수 있다. 제약: 다섯 중 넷의 극한값이 반드시 같아야 하고, 다른 하나는 '다르다'가 분명해야 한다 — 계수를 바꿀 때 네 보기를 동시에 맞추는 것이 설계의 핵심이다."
    creative: "(1) 극한이 존재하지 않는 보기를 하나 넣어 '극한값이 없는 것'을 고르게 하기(★3 · T-범위) (2) 다섯 극한의 대소를 비교하게 하기(★3 · 118-239 골조) (3) 보기를 셋으로 줄이고 ㄱㄴㄷ 참·거짓으로 바꾸기(★3 · I-MI)."
```

```yaml
- id: GN-CALC2-117-234
  page: 117
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    x→∞ 에서 sin(3/x)cot(5/x) 의 값.
  category: "1/x=t 치환 → cot 를 cos/sin 으로 → 기본극한 계수비"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환을 이용한 삼각함수의 극한(극한점을 0 으로 이동)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    1/x=t 로 두면 sin 3t·cos 5t/sin 5t 이고 sin 3t/3t · 5t/sin 5t · cos 5t 로 갈라 3/5.
    통찰 0·M_total 5 라 −1 후보이지만 cot 표기를 sin·cos 로 되돌리는 단계와 치환이 함께 필요해 STEP 1 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "1/x=t → sin 3t cos 5t/sin 5t → (3t/5t) → 3/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/117-234.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 계수 3, 5 를 다른 양수 쌍으로, cot 를 csc·sec 조합으로. 제약: 두 각 모두 x→∞ 에서 0 으로 가야 하고(3/x, 5/x 꼴) cot 의 각이 0 으로 가야 발산 인수와 상쇄된다."
    creative: "(1) sin(3/x)cot(5/x²) 처럼 차수를 어긋나게 해 발산을 판정하게 하기(★3) (2) x sin(3/x)tan(5/x) 로 인수를 하나 더 붙이기(★3) (3) 극한값을 주고 한쪽 계수를 역으로 묻기(★2)."
```

```yaml
- id: GN-CALC2-117-235
  page: 117
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    x→π/2 에서 (2x-π)²/(2(1-sin x)) 의 값.
  category: "x-π/2=t 치환 → 1-sin x=1-cos t → 1-cos 골조"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x-π/2=t 치환으로 1-sin x 를 1-cos t 로 바꿔야 이 단원의 1-cos 기본극한(t²/2)을 쓸 수 있음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "치환 + 1-cos x 골조의 극한"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    치환하면 분자가 (2t)²=4t², 분모가 2(1-cos t)→t² 이 되어 4 가 남는다. 분자가 2차라는 것을 보고 분모도 2차 골조(1-cos)로 맞추는 대응이 핵심이다.
    통찰 1개(EQV d1)·M_total 5 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "x-π/2=t → 4t²/(2(1-cos t)) → 4t²/t² → 4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/117-235.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 계수(2x-π → 3x-π 는 불가, 극한점에서 0 이 돼야 함)와 분모의 상수 2 를 바꿀 수 있다. 제약: 분자는 반드시 (x-π/2) 의 제곱 꼴이어야 하고 차수가 1 이나 3 이면 0 또는 발산이 된다."
    creative: "(1) 분자를 (2x-π)³ 로 올려 0 임을 판정하게 하기(★3 · 차수 감각) (2) 1-sin x 를 1-sin²x 로 바꿔 인수분해 골조로 되돌리기(★2) (3) 극한값을 주고 분자의 차수를 역으로 찾게 하기(★3)."
```

```yaml
- id: GN-CALC2-117-236
  page: 117
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    모든 실수에서 연속인 f 에 대하여 (x-1)f(x)=sin{2(x-1)} 일 때 f(1) 의 값.
  category: "연속성 → f(1)=lim f(x) → x≠1 에서 나눈 식의 극한"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x=1 을 대입하면 0=0 이라 정보가 없으므로, 연속성을 써서 f(1)=lim_{x→1}f(x) 로 바꾼 뒤 x≠1 에서만 가능한 나눗셈을 수행"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "함수의 연속성을 이용한 함숫값 결정(삼각함수의 극한)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x≠1 에서 f(x)=sin{2(x-1)}/(x-1) 이고 x-1=t 치환으로 극한이 2. 연속이므로 그 값이 f(1) 이다.
    '대입 불가 → 연속성으로 극한으로 옮김'이라는 한 번의 전환이 승부처이고 나머지는 기본극한이다. 통찰 1개(EQV d1)·일반 함수 f 로 Mₐ=2·M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "x≠1 에서 f(x)=sin{2(x-1)}/(x-1) → t=x-1 → 2 → 연속성으로 f(1)=2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/117-236.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 계수 2 와 기준점 1 을 바꿀 수 있고 sin 을 tan 으로 바꿔도 같은 골조다. 제약: 좌변의 인수 (x-1) 과 우변 sin 의 각이 같은 점에서 0 이 돼야 하며, 어긋나면 f(1) 이 존재하지 않는다."
    creative: "(1) (x-1)²f(x)=1-cos{2(x-1)} 로 올려 1-cos 골조와 결합(★3) (2) f 가 연속이라는 조건을 빼고 f(1) 을 정할 수 없음을 보이게 하기(★3 · T-범위) (3) f(x)를 구간별로 정의해 x=1 에서 연속이 되는 상수를 묻기(★3 · 118-241 골조)."
```

```yaml
- id: GN-CALC2-118-237
  page: 118
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    x→0 에서 tan 4x/(√(2x+9)+a)=b (b≠0) 를 만족시키는 상수 a, b 에 대하여 a+b 의 값.
  category: "b≠0 → 분모의 극한 0 역조건 → 유리화 → 기본극한"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분자가 0 으로 가는데 극한 b 가 0 이 아니려면 분모도 0 으로 가야 한다는 역조건으로 a=-3 을 먼저 확정(b≠0 단서가 조건의 실체)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수의 극한에서 미정계수의 결정(분모→0 역조건 + 유리화)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    e13 의 역방향 판정을 '분자가 0 인데 극한이 0 이 아니다'로 뒤집어 쓴다. a=-3 뒤 분모를 유리화하면 tan 4x(√(2x+9)+3)/(2x) 가 되어 b 가 나오고 a+b 를 답한다.
    통찰 1개(EQV d1)·미지수 2개·유리화까지 M_total 8 → STEP 1 출발점 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "b≠0 → 분모→0 → a=-3 → 유리화 → tan 4x/4x 기본극한 → b → a+b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/118-237.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안의 2x+9 에서 상수 9(제곱수여야 a 가 정수), 각 계수 4, 묻는 값(a+b → ab)을 바꿀 수 있다. 제약: √ 안의 상수는 양수여야 하고 a 는 그 제곱근의 음수여야 분모가 0 으로 간다. b≠0 단서를 빼면 a 가 결정되지 않는다."
    creative: "(1) b≠0 대신 'b 가 자연수'로 바꿔 후보 기각을 만들기(★4 · I-VF) (2) 분자를 1-cos 2x 로 바꿔 차수를 2 로 올리기(★4 · 119-244) (3) 분모를 ∛(x+8)+a 로 바꿔 세제곱 유리화를 쓰게 하기(★4)."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC2-118-238
  page: 118
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    f(x)=sec x 일 때 x→0 에서 (f(2x)-f(0))/(f(x)-f(0)) 의 값.
  category: "sec-1 을 (1-cos)/cos 로 전환 → 1-cos 기본극한의 비"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "sec kx-1 을 (1-cos kx)/cos kx 로 바꿔야 1-cos 기본극한이 보이고, 분자·분모가 모두 x² 척도가 되어 비가 계수 제곱비로 정리됨"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "1-cos x 를 포함한 극한(sec 정리)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f(0)=1 이므로 분자·분모가 각각 sec 2x-1, sec x-1 이고 이를 1-cos 꼴로 바꾸면 (2²/2)/(1²/2)=4.
    1-cos kx 의 극한이 k² 에 비례한다는 감각이 전부라 계산은 짧다. 통찰 1개(EQV d1)·M_total 5 로 가볍지만 f 표기를 풀어내는 단계가 얹혀 STEP 2 출발점 ★3 을 유지했다.
    [분류 이슈] 부품 기준으로는 ★2 급(113-e11 과 동일 골조)이라 ★2/★3 경계다.
  tier: star_3
  mechanism_primary: "sec kx-1=(1-cos kx)/cos kx → 분자 2x²·분모 x²/2 척도 → 4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/118-238.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f(2x) 의 계수 2 를 다른 값으로(답은 계수의 제곱), f 를 csc·tan 등 다른 함수로. 제약: f(0) 이 정의돼야 하고 f(kx)-f(0) 이 x² 또는 x 의 같은 차수로 환원돼야 비가 유한하다 — tan 이면 차수가 1 이라 답이 계수비로 바뀐다."
    creative: "(1) f 를 일반 함수로 두고 f(x)=1+ax²+… 조건만 주기(★4 · Mₐ 상승) (2) 분모를 x² 로 바꿔 계수 자체를 묻기(★2) (3) 같은 식을 미분계수의 정의와 연결해 f'(0) 과의 관계를 묻기(★4 · I-XU)."
```

```yaml
- id: GN-CALC2-118-239
  page: 118
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    세 수 A(치환이 필요한 csc 극한), B(두 1-cos 극한의 합), C(합성 sin 극한 + 로그 비 극한)의 대소를 비교하기.
  category: "세 묶음의 극한을 각각 계산 → 값 비교"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "A 에서 x-π/2=t 치환으로 csc(x/2-π/4)=1/sin(t/2) 를 만들어 기본극한 꼴로 이동"
    - step: 3
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "C 의 log(sin²x)/log x³ 를 (2 log x + 2 log(sin x/x))/(3 log x) 로 분해해, 삼각함수 극한을 로그의 비로 옮겨 1 에 수렴하는 부분을 분리"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "여러 극한값의 비교·판별(기본극한 + 로그)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    A 는 치환 뒤 2t/(t/2) 꼴, B 는 1-cos 기본극한 두 개의 합, C 는 sin(tan 3x)/x 의 3 과 로그 비의 2/3 의 합이다. 세 값을 모두 얻어야 비교가 되므로 실패 지점이 셋이다.
    특히 C 의 로그 비는 sin x=x·(sin x/x) 로 쪼개 log 의 차로 만드는 표현 전환이 필요해 이 단원에서 가장 낯선 단계다. 통찰 2개(EQV d1 · RT d2)·M_total 7 → STEP 2 출발점 ★3 에서 +1 → ★4.
    [분류 이슈] 개별 부품은 ★2~3 급이고 ★4 는 C 한 항에 의존하므로 ★3/★4 경계다.
  tier: star_4
  mechanism_primary: "A 치환 → 4 · B 1-cos 두 항 → 2+9/2 · C 기본극한 3 + 로그 비 2/3 → 세 값 비교"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$C<A<B$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/118-239.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 항의 계수(2x-π, 1-cos 3θ 의 3, sin(tan 3x) 의 3, log x³ 의 3)를 바꿀 수 있다. 제약: 세 값이 서로 달라야 대소 비교가 성립하고, 로그 항은 진수·밑이 x→0+ 에서 정의돼야 한다(x→0+ 한쪽 극한 유지)."
    creative: "(1) 세 값 중 하나를 극한이 존재하지 않게 만들어 '비교 불가'를 판정하게 하기(★4 · T-범위) (2) A, B, C 를 미지수가 든 식으로 주고 대소 조건을 만족하는 상수 범위를 묻기(★5 후보 · I-BW) (3) 로그 항만 떼어 별도 ★3 문항으로."
```

```yaml
- id: GN-CALC2-118-240
  page: 118
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    계수가 유리수인 일차함수 f 에 대하여 x→0 에서 ln(x+1)/(f(x)+1)=α, x→2 에서 (x-2)/sin f(x)=β (α, β 는 0 이 아닌 상수)일 때 f(αβ) 의 값.
  category: "두 극한의 유한·비영 조건 → f(0), f(2) 역조건 → 일차함수 결정 → 재대입"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "α 가 0 이 아닌 상수이므로 분모 f(x)+1 이 0 으로 가야 하고(f(0)=-1), β 가 존재하므로 sin f(x) 가 0 으로 가야 한다(f(2)=0) — 두 극한의 존재 조건을 f 의 함숫값 조건으로 동치 변환"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "얻은 두 함숫값 조건을 일차함수 f(x)=ax+b 의 계수 하나로 통합해 f 를 확정한 뒤 α, β 를 그 계수로 표현"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "삼각함수의 극한에서 미정계수의 결정(일차함수 결정)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    미정계수 역조건이 두 번, 서로 다른 극한점에서 걸리고 그 둘을 합쳐야 f 가 정해진다. f 가 정해진 뒤에야 α, β 를 각각 기본극한으로 계산하고 마지막에 f(αβ) 로 되돌아가는 3단 구조다.
    일반 일차함수를 다루므로 Mₐ=3·M_total 9, 통찰 2개(EQV d2 · CON d1) → STEP 2 출발점 ★3 에서 +1 → ★4.
  tier: star_4
  mechanism_primary: "f(0)=-1 · f(2)=0 역조건 → f 확정 → α, β 를 기본극한으로 계산 → f(αβ)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/118-240.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 극한점(0, 2)과 분자의 상수(+1)를 바꿀 수 있다. 제약: 두 조건이 서로 다른 점에서 걸려야 일차함수가 유일하게 결정되고, 계수가 유리수라는 단서를 유지해야 한다. 마지막 f(αβ) 의 입력이 정의역 안에 있어야 한다."
    creative: "(1) f 를 이차함수로 올려 조건을 하나 더 주기(★5 후보 · Mₛ·Mₐ 상승) (2) ln 을 e^x-1 로 바꿔 지수 기본극한과 결합(★4) (3) α, β 를 구한 뒤 α+β 가 아니라 f∘f(αβ) 처럼 합성으로 한 번 더 묻기(★4)."
```

```yaml
- id: GN-CALC2-118-241
  page: 118
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    x≠0 에서 (a-cos x)/sin²x, x=0 에서 b 로 정의된 f 가 x=0 에서 연속이 되도록 하는 상수 a, b 에 대하여 a+b 의 값.
  category: "연속 조건 → 극한 존재 역조건으로 a 확정 → 1-cos 골조로 b 계산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x=0 에서 연속 ⇔ 극한이 존재하고 b 와 같다 ⇒ 분모가 0 으로 가므로 분자도 0 이어야 한다(a=1)는 역조건으로 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "함수의 연속성을 이용한 미정계수의 결정(1-cos 골조)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a=1 이 정해지면 남는 식은 (1-cos x)/sin²x 이고 유리화하면 1/(1+cos x) → 1/2 이 b 다.
    '연속 → 극한 존재 → 분자 0' 의 사슬과 1-cos 부품의 결합이라 앞 문항들의 조합이다. 통찰 1개(EQV d1)·M_total 7 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "연속 ⇒ 분자→0 ⇒ a=1 → (1-cos x)/sin²x=1/(1+cos x) → b=1/2 → a+b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/118-241.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모를 x²·x tan 3x 로, 분자를 a-cos kx 로 바꿀 수 있다. 제약: 분자가 0 이 되는 조건이 a 를 유일하게 정해야 하고(a=1) 분모는 2차로 환원돼야 b 가 유한하다."
    creative: "(1) 분자를 a-b cos x 로 두어 미지수 두 개가 한 식에 걸리게 하기(★3 · 115-229 ⑵) (2) 분모를 1-cos x 로 두어 두 1-cos 의 비로 만들기(★3) (3) 구간별 정의에 x>0, x<0 을 달리 주어 좌우극한 일치까지 확인하게 하기(★4 · T-경계)."
```

```yaml
- id: GN-CALC2-119-242
  page: 119
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    ∠A 가 직각이고 BC=2, ∠ABC=θ 인 직각삼각형에서 A 에서 BC 에 내린 수선의 발을 H 라 할 때 θ→0+ 에서 AH/θ 의 값.
  category: "도형의 길이를 θ 의 식으로 전환 → 기본극한"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "빗변이 BC 인 직각삼각형에서 AB=2cos θ 를 먼저 얻고 다시 직각삼각형 ABH 에서 AH=AB sin θ 로, 도형 조건을 θ 의 식 sin 2θ 로 번역"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수의 극한의 도형에서의 활용(직각삼각형의 길이)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    직각이 A 에 있다는 그림 조건이 출발점이다(BC 가 빗변). AH=2 sin θ cos θ=sin 2θ 이므로 AH/θ → 2.
    두 번의 직각삼각형 비를 이어 붙이는 단계만 넘으면 계산은 기본극한 한 줄이다. 통찰 1개(RT d1)·θ→0+ 한쪽 극한·M_total 6 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "AB=2cos θ → AH=AB sin θ=sin 2θ → sin 2θ/θ → 2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: "crop:fig-119-242.png"
  latex: latex-bank/gn-calc2/items/119-242.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "빗변 BC=2 를 다른 양수로(답이 그 값에 비례), 묻는 길이를 BH·CH 로 바꿀 수 있다. 제약: 그림의 직각 위치(∠A)와 라벨 A·B·C·H 는 고정한다 — 직각을 C 로 옮기면 AH=2 tan θ 가 되어 골조가 달라진다."
    creative: "(1) AH 대신 삼각형 ABH 의 넓이를 θ² 로 나누게 하기(★3) (2) 내접원의 반지름을 θ 로 두기(★4 · 116-e14 골조) (3) AH/CH 처럼 두 길이의 비로 물어 차수를 상쇄시키기(★3)."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC2-119-243
  page: 119
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    양의 정수 n 에 대하여 f(n)=lim_{x→0} 2x/(sin x+sin 2x+⋯+sin nx) 일 때 f(n) 의 무한급수의 합.
  category: "분모를 계수합 n(n+1)/2 로 환원 → f(n) → 부분분수 분해 → 급수 합"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분모의 각 항을 sin kx/kx · kx 로 분해하면 x→0 에서 분모가 (1+2+⋯+n)x 로 환원돼 f(n)=4/(n(n+1)) 을 얻음"
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "삼각함수의 극한으로 얻은 f(n) 을 수열·급수 단원의 도구(부분분수 분해와 부분합의 소거)로 넘겨 무한급수의 합을 계산"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "삼각함수의 극한과 무한급수의 결합"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    문항이 두 단원에 걸쳐 있다. 앞쪽은 기본극한의 계수합(1+2+⋯+n) 인식, 뒤쪽은 4/(n(n+1)) 을 1/n-1/(n+1) 로 쪼개 부분합이 소거되는 급수 계산이다. 한쪽 도구만으로는 끝나지 않는다.
    일반항 n 을 다루므로 Mₐ=3·M_total 9, 통찰 2개(EQV d1 · XU d2) → 실력 UP 출발점 ★4 유지. ★5 는 통찰 3개 이상을 요구해 해당하지 않는다.
  tier: star_4
  mechanism_primary: "분모 → (1+2+⋯+n)x → f(n)=4/(n(n+1)) → 부분분수 소거 → 급수 합 4"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/119-243.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 2x 의 계수, 분모 항의 각 계수(sin x+sin 3x+sin 5x+⋯ 처럼 등차로)를 바꿀 수 있다. 제약: 분모의 계수합이 n 에 대해 부분분수로 소거되는 꼴(n(n+1), n(n+2))이어야 급수가 유한하고, 계수합이 0 이 되면 안 된다."
    creative: "(1) 분모를 tan 으로 바꿔 같은 계수합 골조 유지(★4) (2) f(n) 의 극한(n→∞)이나 부분합 S_n 을 묻기(★3) (3) 급수의 합이 주어졌을 때 분자의 계수를 역으로 구하게 하기(★5 후보 · I-BW 추가)."
```

```yaml
- id: GN-CALC2-119-244
  page: 119
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    x→π 에서 (√(a+cos x)-b)/(x-π)²=1/4 을 만족시키는 상수 a, b 에 대하여 a+2b 의 값.
  category: "분자→0 역조건 → 치환 → 유리화 → 1-cos 골조로 두 상수 결정"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "유한한 극한값 1/4 에서 거꾸로, 분모가 0 이므로 분자도 0 이어야 한다(b=√(a-1))는 관계를 먼저 세우고, 계산 끝의 1/(4b)=1/4 로 b 를, 다시 a 를 역추적"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x-π=t 치환으로 cos x=-cos t 로 바꾸고 분자를 유리화해 (1-cos t)/t² 기본극한이 드러나게 정리"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "삼각함수의 극한에서 미정계수의 결정(유리화 + 1-cos)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    이 단원 네 부품(역조건·치환·유리화·1-cos)이 한 줄기로 모두 걸린다. 분모가 2차라는 점이 1-cos 골조를 쓰라는 신호이고, 유리화 뒤 남는 (1-cos t)/t² 의 1/2 과 분모의 2b 가 결합해 1/(4b) 가 된다.
    미지수가 두 개이고 둘 다 역방향으로 결정되며 중간에 미지수가 든 근호를 유리화해야 해 실패 지점이 많다. 통찰 2개(BW d2 · EQV d1)·M_total 8 → 실력 UP 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: "분자→0 ⇒ b=√(a-1) → t=x-π 치환 → 유리화 → (1-cos t)/t² → 1/(4b)=1/4 → b=1, a=2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/119-244.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 1/4 과 묻는 조합(a+2b → ab)을 바꿀 수 있다. 제약: b 는 양수여야 하고(근호의 값) a-1=b² 관계가 유지돼야 하며, 우변을 바꾸면 b=1/(4×우변) 이 되므로 a 가 정수로 떨어지는 값을 고른다. 극한점 π 는 cos 의 부호 전환을 쓰므로 0 이나 π/2 로 옮기면 골조가 달라진다."
    creative: "(1) 근호를 세제곱근으로 바꿔 유리화 방식을 바꾸기(★4~5) (2) 분모를 (x-π)⁴ 로 올려 극한이 유한하지 않음을 판정하게 하기(★4 · T-범위) (3) a, b 가 자연수라는 조건을 주고 후보를 기각시키기(★5 후보 · I-VF 추가)."
```

```yaml
- id: GN-CALC2-119-245
  page: 119
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["교육청 기출"]
  category_type: "연습문제"
  summary: |
    A(0,1) 을 중심으로 하는 반지름 1 인 원 C 에 대하여, 원점을 지나고 x축과 이루는 각이 θ 인 직선이 C 와 만나는 점 P, 호 OP 위에 ∠OPQ=θ/3 인 점 Q 를 잡을 때 삼각형 POQ 의 넓이 f(θ) 에 대하여 θ→0+ 에서 f(θ)/θ³ 의 값. 5지선다.
  category: "원의 현과 원주각 → 두 변과 끼인각 → 넓이 → 기본극한"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "원 C 가 원점을 지나고 지름이 2 라는 점에서 현 OP=2 sin θ, 원주각 ∠OPQ=θ/3 에 대응하는 현 OQ=2 sin(θ/3) 로 도형 조건을 두 변의 길이로 번역하고, 삼각형의 내각 관계로 끼인각 ∠POQ=2θ/3 을 확정"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "넓이를 (1/2)·OP·OQ·sin∠POQ 로 쓰면 세 인수가 모두 θ 의 1차로 환원돼 θ³ 으로 나눈 극한이 계수곱으로 정리됨"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "삼각함수의 극한의 도형에서의 활용(원과 삼각형의 넓이)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    도형을 읽어 세 요소(두 현의 길이와 끼인각)를 θ 로 옮기는 것이 전부이고, 그 다음은 sin/θ 기본극한 세 번이다. 원주각과 현의 관계를 쓰지 않고 좌표로 밀면 계산이 급격히 무거워진다.
    분모가 θ³ 이므로 세 인수가 모두 1차여야 한다는 차수 감각이 검산 역할도 한다. 통찰 2개(RT d2 · EQV d1)·M_total 8 → 실력 UP 출발점 ★4 유지. ★5 는 통찰 3개 이상을 요구해 해당하지 않는다.
  tier: star_4
  mechanism_primary: "OP=2 sin θ · OQ=2 sin(θ/3) · ∠POQ=2θ/3 → f=(1/2)OP·OQ·sin∠POQ → f/θ³ → 4/9"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-119-245.png"
  latex: latex-bank/gn-calc2/items/119-245.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠OPQ 의 분수 계수 θ/3 과 원의 반지름 1 을 바꿀 수 있다(답은 계수의 곱으로 움직인다). 제약: 그림의 라벨 O·A·P·Q 와 '점 Q 는 제1사분면·0<θ<π' 조건은 고정하고, ∠OPQ 의 계수가 1 이상이면 Q 가 호를 벗어나 배치가 깨진다."
    creative: "(1) 삼각형 대신 활꼴(부채꼴-삼각형) 넓이로 바꿔 차수를 올리기(★5 후보) (2) 넓이의 비 f(θ)/g(θ) 로 물어 차수를 상쇄시키기(★4) (3) Q 를 현 OP 의 수직이등분선 위로 옮겨 대칭을 쓰게 하기(★5 후보 · I-SYM 추가)."
```

## 표본 판정 요약 (32문)

- ★ 분포: ★1 3 · ★2 17 · ★3 7 · ★4 5 · ★5 0
- 통찰형 24 · 절차형 8 · premium 0
- 통찰 유형 분포: I-EQV 21 · I-RT 4 · I-CON 1 · I-XU 1 · I-BW 1 (총 28 카드 / 24문). depth 2 는 7 카드, depth 3 은 없음
- type_hint 상위: 「미정계수의 결정」 7(115-e13·115-229·117-232·118-237·118-240·118-241·119-244) · 「sin x/x·tan x/x 기본극한 분해」 5 · 「치환으로 극한점 이동」 4 · 「도형에서의 활용」 4 · 「1-cos x 포함」 4
- 구역별 ★ 평균: 개념원리 익히기 1.0 · 필수 예제 2.0 · 확인체크 2.3 · 발전 예제 3.0 · STEP 1 2.1 · STEP 2 3.4 · 실력 UP 4.0
- 그림: 4문(`crop:fig-116-e14.png` · `crop:fig-116-230.png` · `crop:fig-119-242.png` · `crop:fig-119-245.png`)
- answer_source: 답지 27 · 본문 풀이 5(필수·발전 예제)

## 분류 이슈 목록

판정이 애매하거나 벤더 신호와 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC2-112-226 | 지수·로그 기본극한과 삼각 기본극한이 함께 필요해 I-XU 로 볼 여지가 있으나 같은 대단원의 인접 소단원이라 통찰 카드를 세지 않음. 카탈로그 설계 때 단원 경계 정의가 필요 | ★2 |
| GN-CALC2-115-229 | 확인체크인데 역조건이 소문항마다 다른 자리에 걸리고 로그까지 결합돼 ★3. 지시서의 확인체크 일괄 ★1 출발 기준으로는 2단 차이 | ★2 / ★3 |
| GN-CALC2-116-230 | 확인체크·도형. 계산 자체는 ★2 급이나 발전 예제 e14 의 유제라 ★3 으로 둠. 지시서 기준 2단 차이 | ★2 / ★3 |
| GN-CALC2-118-238 | STEP 2 이지만 부품이 113-e11 과 동일(1-cos 계수 제곱비)이고 M_total 5 로 가벼움 | ★2 / ★3 |
| GN-CALC2-118-239 | 세 극한 묶음. 개별 부품은 ★2~3 급이고 ★4 판정이 C 의 로그 비 한 항에 의존 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **확인체크의 출발점**: 이 파일은 확인체크를 바로 앞 예제의 유제로 보고 대응 예제(필수 ★2 · 발전 ★3)를 출발점으로 썼다. 지시서의 「확인체크 → ★1 출발」을 그대로 쓰면 이 단원 확인체크 8문이 모두 1단씩 내려간다. 미적분Ⅱ 나머지 단원을 정독할 때 관례를 하나로 통일해야 한다.
- **따로 세워야 할 유형**: ① 기본극한 분해(sin kx/x·tan kx/x) ② 1-cos x 유리화 ③ 극한점 이동 치환 ④ 미정계수의 결정(역조건) ⑤ 도형에서의 활용. 이 다섯이 32문항 중 27문을 덮는다. 특히 ④ 는 7문으로 가장 두껍고 「분모→0 역조건」과 「연속성 → 극한 존재」가 실제로는 같은 골조이므로 한 유형 안의 두 변형으로 두는 편이 낫다(115-e13·117-236·118-241 비교).
- **통합해도 될 유형**: 「항등식 변형·약분」(111-e9·111-223·117-231)은 x→0 이 아닌 극한점에서 부정형을 약분으로 없애는 한 유형으로 묶을 수 있다. 「샌드위치」(111-224)와 「극한값 비교·판별」(117-233·118-239)은 문항 수가 적어 독립 유형보다 기본극한 유형의 변형으로 두는 편이 낫다.
- **I-EQV 쏠림**: 통찰 카드 28 개 중 21 개가 I-EQV 다. 이 단원의 통찰이 대부분 「지금 꼴로는 기본극한을 못 쓰니 쓸 수 있는 꼴로 바꾼다」 한 종류이기 때문이다. 카탈로그를 만들 때 EQV 를 세분(유리화 / 치환 / 역조건 / 항등식)하지 않으면 변별이 안 된다.
- **★5 부재**: 이 범위에 ★5 는 없다. v3.8 의 ★5 요건(통찰 3개 이상 + SC·VF·SYM·XU 중 하나)에 가장 가까운 것은 119-243(XU 보유·통찰 2)과 119-245(도형·통찰 2)이며, variation_notes.creative 의 「★5 후보」 항목이 그 확장 방향이다.
