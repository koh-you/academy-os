---
name: mechanism-데이터-GN-CALC1-20
description: 개념원리 미적분Ⅰ 20 정적분(1/1 · 178~183쪽 17문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅰ · 전사본 latex-bank/gn-calc1
  section: 20 정적분
  unit_code: CALC1-20
  part: "1/1"
  extract_range: "178~183쪽 · 178-360~183-371"
  total_problems: 17
  unit_total: 17
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 insights[] 의 effective_depth 평균(소수 2자리 · 통찰 0 이면 0.00). insight_type 은 insights 유무로만 갈림(비면 절차형 · 하나라도 있으면 통찰형). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc1/items/<id>.tex
  image_source: latex-bank/gn-calc1/figures/ (crops.json)
---

# 개념원리 미적분Ⅰ · 20 정적분 (1/1) 정독 데이터 (v1.0)

이 파일은 178~183쪽 두 구역(「개념원리 익히기」 2문 · 「필수·발전 예제」 15문 = 필수 예제 5 + 확인체크 10) 17문항 전수를 다룬다. 단원의 도구는 하나다 — **미적분의 기본정리**, 곧 부정적분 F 를 구해 F(b)−F(a) 로 값을 얻는 절차다. 17문항은 이 한 도구를 네 방향으로 돌려 쓴다. (1) 정방향 계산(피적분함수를 다항식으로 정리해 그대로 적분), (2) 정적분의 성질(상수배·합차·구간 분할·위아래끝 교환)로 **여러 적분을 하나로 합친 뒤** 계산, (3) 적분값이 주어지고 미정계수를 되찾는 역방향, (4) 구간별 정의 함수·절댓값 함수처럼 **먼저 적분 구간을 쪼개야** 기본정리를 쓸 수 있는 경우다.

난이도가 갈리는 지점은 계산량이 아니라 **기본정리를 쓰기 전에 무엇을 해야 하는가**다. 계산 자체는 전 문항이 다항함수 적분이라 Mₖ 는 대부분 2에 머문다. 대신 181-367 처럼 두 적분의 구간·변수 문자를 맞춰 하나의 피적분함수로 묶어야 유리식이 다항식으로 환원되는 문항, 182-369·183-371 처럼 미지의 상한 때문에 분할 위치를 먼저 확정한 뒤 적분값 조건에서 상수를 역추적하는 문항에서 ★3 이 나왔다. 반대로 절댓값·구간별 정의의 **단순 구간 분할은 표준 분기**(스키마 §2.2 I-MI 판별에서 명시적으로 제외)이므로 통찰로 세지 않고 Mₜ 의 T-부호·T-범위로만 반영했다. 이 범위에 ★4·★5 는 없다.

벤더 난이도 신호: 통번호 「개념원리 익히기」(178-360·178-361, tag 없음)는 개념 확인이라 ★1 출발, tag 「필수」는 상자 발문만 전사된 필수 예제라 ★2 출발, tag 「확인체크」는 통번호 익히기가 아니라 **바로 위 필수 예제에 붙은 확인 문항**이므로 그 예제와 같은 ★2 를 출발점으로 잡았다(앞 단원 파일들과 같은 해석). level 필드는 전 문항 없음(`-`)이고 vendor_tags 는 익히기 2문만 비어 있다. 그림은 한 문항도 없다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 이 단원의 변형은 적분 구간과 계수를 함께 움직여야 한다 — 상한이 미지수인 역방향 문항은 답이 정수로 떨어지려면 삼차·이차식의 유리근이 살아 있어야 하고(371 의 a³−3a−52=0, 369 의 (a−1)³=8), 성질 통합형은 두 피적분함수의 합·차가 **약분되거나 홀수차만 남아야** 문제가 성립한다(367 ⑴⑵). 그 제약을 `variation_notes.numeric` 에 같이 적었다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CALC1-178-360
  page: 178
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑺ 다항함수의 정적분 값 구하기. 위끝과 아래끝이 같은 경우, 위끝이 아래끝보다 작은 경우,
    적분변수가 t·y 인 경우를 섞어 기본정리를 그대로 적용하는 7문항 드릴.
  category: "부정적분 F 구하기 → F(위끝)−F(아래끝)"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미적분의 기본정리 — 다항함수의 정적분 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    한 문항도 변형 단계가 없다. F 를 구해 두 끝값을 빼는 한 단계뿐이고, 변별 요소는 ⑴의 같은 끝(값 0)과
    ⑹⑺의 뒤집힌 끝(부호 반전), 그리고 적분변수 문자가 x 가 아니어도 결과가 같다는 표기 확인이다.
    익히기 구역 ★1 출발 · 통찰 0 · M_total 5 → ★1 유지(clamp 로 −1 은 적용되지 않음).
  tier: star_1
  mechanism_primary: "피적분함수의 부정적분 F → F(b)−F(a) → 끝이 같으면 0 · 끝이 뒤집히면 부호 반전"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $0$ ⑵ $2$ ⑶ $12$ ⑷ $-54$ ⑸ $-\dfrac{10}{3}$ ⑹ $\dfrac{8}{3}$ ⑺ $-24$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/178-360.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수와 적분 구간을 자유롭게 바꿀 수 있다. 제약: (가) 답이 유리수로 떨어지게 구간을 정수로 두고, (나) 7문항 중 하나는 위끝=아래끝, 하나 이상은 위끝<아래끝을 유지해야 이 드릴의 목적(0 과 부호 반전 확인)이 남는다. (다) 적분변수 문자를 t·y 로 바꾼 문항을 최소 하나 남긴다."
    creative: "(1) 같은 계산을 「F(x)=∫ 로 정의된 함수의 한 점 값」으로 물으면 ★1 유지 (2) 위끝·아래끝 중 하나를 문자로 두고 값을 주면 미정계수 역방향이 되어 ★2 (3) 일곱 개 중 값이 음수인 것의 개수처럼 묶어 물으면 계산량만 늘고 통찰은 그대로라 ★1~2 — 질 저하 방향이므로 권하지 않음."
```

```yaml
- id: GN-CALC1-178-361
  page: 178
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑸ 정적분의 성질을 써서 값 구하기. 상수배, 같은 구간 적분의 합·차,
    이어진 두 구간의 합, 위아래끝이 뒤집힌 적분을 더하는 형태를 한 번씩 다룬다.
  category: "정적분의 성질로 하나의 적분으로 합치기 → 기본정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분의 성질(상수배·합차·구간 분할·끝 교환)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각 성질을 따로따로 한 번씩 쓰게 배치한 개념 확인 드릴이다. ⑶은 같은 구간이므로 피적분함수를 빼면
    x³ 이 소거되고, ⑷는 [1,2]+[2,3]=[1,3], ⑸는 −∫₂¹=∫₁² 로 [0,1]+[1,2]=[0,2] 가 된다.
    성질 자체가 이 구역에서 가르치는 표준 공식이라 통찰로 세지 않는다. 익히기 ★1 출발 · M_total 6 → ★1.
  tier: star_1
  mechanism_primary: "같은 구간이면 피적분함수를 합·차로 묶고, 이어진 구간이면 끝을 이어 붙인 뒤 → 기본정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $60$ ⑵ $4$ ⑶ $9$ ⑷ $6$ ⑸ $12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/178-361.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수와 구간을 바꿀 수 있다. 제약: ⑵⑶처럼 합·차로 묶었을 때 최고차항이 소거되도록 두 피적분함수의 대응 계수를 ±로 맞춰야 하고, ⑷⑸의 구간은 반드시 끝점을 공유해야(또는 뒤집어 공유하게) 합쳐진다."
    creative: "(1) 두 적분의 구간을 일부러 어긋나게 해 합칠 수 없게 만들고 각각 계산시키면 ★1 유지·계산만 증가 (2) ∫₀¹ f + ∫₁² f = 5, ∫₀² f = ? 처럼 f 를 미지 함수로 두면 Mₐ 상승·역방향이 되어 ★2 (3) 구간 분할 성질을 세 조각 이상으로 늘리고 그중 하나만 부호를 뒤집으면 T-부호 함정이 살아나 ★2."
```

### 필수·발전 예제

```yaml
- id: GN-CALC1-179-e1
  page: 179
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 피적분함수를 먼저 정리한 뒤 정적분 값 구하기. 곱을 전개하는 형태,
    분수식을 약분해 일차식으로 만드는 형태, 위아래끝이 같은 적분(값 0)과 끝이 뒤집힌 적분의 차를 섞은 형태.
  category: "피적분함수 전개·약분 → 다항식 → 기본정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미적분의 기본정리 — 피적분함수를 정리한 뒤 계산하는 정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    적분 기호 안의 식이 그대로는 적분 공식에 안 맞으므로 전개하거나 약분해 다항식으로 만드는 전처리가
    골조의 전부다. ⑵의 (t²−1)/(t−1)=t+1 은 인수분해 약분이고, ⑶은 ∫₃³=0 과 −∫₁⁰=∫₀¹ 를 함께 쓴다.
    전처리가 모두 표준 공식이라 통찰 0. 필수 예제 ★2 출발 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "전개 또는 인수분해 약분으로 피적분함수를 다항식화 → 끝이 같으면 0 · 뒤집힌 끝은 부호 반전 → 기본정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{3}{4}$ ⑵ $-\dfrac{7}{2}$ ⑶ $-\dfrac{17}{6}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/179-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑵의 분수식은 분자가 분모로 나누어떨어져야 한다 — (tⁿ−1)/(t−1), (t³+8)/(t+2) 처럼 인수정리가 성립하는 쌍만 쓸 수 있고, 약분으로 사라지는 값(t=1)이 적분 구간 안에 들어가지 않도록 구간을 잡아야 한다. ⑴⑶의 계수·구간은 자유."
    creative: "(1) 분자를 나누어떨어지지 않게 만들면 다항함수 범위를 벗어나 미적분Ⅰ 밖으로 나가므로 금지 (2) ⑶의 ∫ₐᵃ=0 을 문자 끝으로 숨기면(∫ₖᵏ) 같은 골조에 Mₐ 만 올라 ★2 유지 (3) 세 소문항의 결과를 하나의 식에 넣어 최종값을 묻게 묶으면 계산 마찰만 커져 질이 떨어짐(v3.8 YELLOW 방향)."
```

```yaml
- id: GN-CALC1-179-362
  page: 179
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 곱셈 공식·인수분해로 피적분함수를 전개하거나 약분한 뒤 정적분 값 구하기.
    완전제곱식, 합차 공식, 분수식 약분(끝 뒤집힘 포함), 네 인수의 곱을 x⁴−1 로 묶는 형태.
  category: "곱셈 공식·약분으로 다항식화 → 기본정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미적분의 기본정리 — 피적분함수를 정리한 뒤 계산하는 정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e1 과 같은 골조의 확인 문항이다. ⑷에서 (x−1)(x+1)(x²+1)=x⁴−1 로 한 번에 묶는 것이 유일한 요령이고
    이것도 합차 공식 두 번이라 표준. ⑵⑶은 끝이 뒤집혀 있어 부호 반전을 빠뜨리기 쉽다(T-부호).
    확인체크는 바로 위 필수 예제와 같은 층으로 보아 ★2 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "곱셈 공식·인수분해로 피적분함수를 다항식화 → 뒤집힌 끝은 부호 반전 → 기본정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{8}{3}$ ⑵ $-76$ ⑶ $-\dfrac{5}{6}$ ⑷ $\dfrac{22}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/179-362.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑶의 (x³+1)/(x+1) 은 분자가 분모로 나누어떨어지는 쌍(합·차의 세제곱, xⁿ−aⁿ)만 허용. 나머지는 계수·구간 자유지만 ⑷처럼 네 인수를 묶으면 고차항이 생기므로 구간을 작은 정수로 두어 답이 분수로 정리되게 한다."
    creative: "(1) ⑷를 (x−1)(x+1)(x²+1)(x⁴+1) 로 늘리면 계산량만 증가 — ★2 유지, 권하지 않음 (2) 묶었을 때 홀수차만 남고 구간이 원점 대칭이면 값이 0 이 되도록 설계하면 대칭 활용(I-SYM) 착안이 들어가 ★3 (3) 전개 결과를 주고 원래 곱의 형태를 되찾게 하면 역방향 ★3."
```

```yaml
- id: GN-CALC1-179-363
  page: 179
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x)=x²+4x 일 때 ∫₀¹ x²f(x)dx 의 값. 함수 기호로 주어진 f 를 대입해 사차식으로 만든 뒤 적분한다.
  category: "f 대입 → 다항식화 → 기본정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미적분의 기본정리 — 함수식을 대입한 정적분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f 가 구체적인 이차식으로 이미 주어져 있어 x²f(x)=x⁴+4x³ 대입 한 줄이면 끝난다. 함수 기호가 등장할 뿐
    추상도는 올라가지 않는다(Mₐ 1). 확인체크 ★2 출발이지만 통찰 0 · M_total 4(≤5) → −1 하여 ★1.
    이 범위에서 노동량이 가장 가벼운 문항이다.
  tier: star_1
  mechanism_primary: "x²f(x) 에 f(x)=x²+4x 대입 → x⁴+4x³ → 기본정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{6}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/179-363.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 계수와 곱해지는 단항식의 차수(x·x²·x³), 적분 구간을 자유롭게 바꿀 수 있다. 제약: 곱한 뒤 차수가 너무 높아지지 않게 하고(5차 이하) 구간을 [0,1]·[0,2] 같은 정수 구간으로 두어 답이 분수로 정리되게 한다."
    creative: "(1) f 를 구체식 대신 「f(x)=ax+b, ∫₀¹ xf(x)dx=1」 형태의 조건으로 주면 미정계수 역방향 ★2 (2) f 를 미지의 이차함수로 두고 조건 두 개를 주면 연립이 붙어 ★3 (3) ∫₀¹ x²f(x)dx 와 ∫₀¹ f(x)dx 를 동시에 주고 f 를 되찾게 하면 I-CON 이 들어가 ★3."
```

```yaml
- id: GN-CALC1-180-e2
  page: 180
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ ∫ₖ⁰(2x+1)dx=1/4 일 때 상수 k 의 값. ⑵ ∫₋₁³(3x²+4kx−1)dx>8 을 만족시키는 정수 k 의 최솟값.
    적분값이 먼저 주어지고 미정계수를 되찾는 형태.
  category: "적분값을 k 의 식으로 계산 → 방정식·부등식 풀기"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미적분의 기본정리를 이용하여 미정계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 소문항 모두 「먼저 적분해 k 의 식으로 만든다 → 조건을 푼다」는 한 골조다. ⑴은 아래끝이 k 라 부호에
    주의해야 하고 결과가 중근(k+1/2)²=0 이라 k 가 하나로 떨어진다. ⑵는 k 의 일차부등식이 되고 등호가
    빠진 경계에서 정수 최솟값을 고른다(T-경계). 적분 후는 표준 방정식 풀이라 통찰로 세지 않음.
    필수 예제 ★2 출발 유지 — 다만 M_total 8 은 이 층의 상단이다.
  tier: star_2
  mechanism_primary: "먼저 적분해 적분값을 k 의 식으로 표현 → 주어진 등식·부등식을 k 에 대해 풀기 → 정수 조건으로 최솟값 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $-\dfrac{1}{2}$ ⑵ $0$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/180-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴은 적분 결과가 k 의 이차식이 되므로 우변 값을 판별식이 0 또는 완전제곱이 되게 잡아야 답이 깔끔하다(우변을 1/4 이 아닌 값으로 바꾸면 무리수 근이 나올 수 있음). ⑵는 k 의 계수가 0 이 되지 않도록 구간을 원점 비대칭으로 두어야 하고(원점 대칭이면 4kx 항이 소거되어 k 가 사라짐) 경계가 정수로 떨어지게 우변을 맞춘다."
    creative: "(1) ⑵의 부등호를 ≥ 로 바꾸면 경계 포함 여부만으로 답이 달라져 T-경계 함정이 강해짐(★2 유지) (2) 적분 구간의 한쪽 끝도 k 로 두면 적분 후 k 의 차수가 올라가 근 기각이 필요해져 ★3(I-VF) (3) 「모든 실수 k 에 대해 성립」으로 바꾸면 부등식의 항등 조건으로 전환되어 ★3."
```

```yaml
- id: GN-CALC1-180-364
  page: 180
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ∫₋₁ᵏ(6x+k)dx=15 일 때 양수 k 의 값. 미지수 k 가 위끝과 피적분함수 양쪽에 들어 있다.
  category: "적분 → k 의 이차방정식 → 양수 근 선택"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미적분의 기본정리를 이용하여 미정계수 구하기 — 적분 구간에도 미지수가 있는 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e2 와 같은 역방향 골조인데 k 가 위끝에도 있어 적분 후 k 의 이차식이 된다는 점만 다르다.
    적분변수 x 에 대해 적분할 때 k 는 상수로 취급한다는 것이 이 문항의 핵심 확인 지점(T-표기).
    이차방정식의 두 근 중 양수 조건으로 하나를 버리지만 발문에 「양수 k」가 명시돼 있어
    사후 검증(I-VF)으로 세지 않는다. 확인체크 ★2 출발 유지.
  tier: star_2
  mechanism_primary: "k 를 상수로 보고 x 에 대해 적분 → 위끝 k 대입 → k 의 이차방정식 → 양수 근 채택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/180-364.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수의 계수와 우변 값을 바꿀 수 있다. 제약: 적분 후 생기는 k 의 이차방정식이 유리수 근을 가져야 하고(판별식이 완전제곱), 두 근의 부호가 갈려야 「양수 k」라는 단서가 의미를 갖는다. 아래끝 −1 을 바꾸면 상수항이 함께 움직이므로 우변을 다시 맞춰야 한다."
    creative: "(1) 「양수」 단서를 빼고 「모든 k 의 합」을 물으면 근과 계수의 관계로 환원되어 ★3(I-XU 후보) (2) 위끝을 k, 아래끝을 −k 로 두면 원점 대칭 구간이 되어 홀수차항이 소거되는 대칭 착안이 생겨 ★3 (3) 적분값을 등식이 아니라 최댓값 조건으로 바꾸면 366 과 같은 골조가 되어 ★3."
```

```yaml
- id: GN-CALC1-180-365
  page: 180
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    y=f(x) 그래프 위의 점 (x, f(x)) 에서의 접선의 기울기가 −2x+5 이고 ∫₋₂² f(x)dx=0 일 때 f(x) 구하기.
  category: "접선 기울기 → f′ → 부정적분으로 f(적분상수 포함) → 정적분 조건으로 상수 확정"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「그래프 위 임의의 점에서의 접선의 기울기가 −2x+5」를 f′(x)=−2x+5 라는 식 조건으로 옮김"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f 를 적분상수 C 를 품은 채로 세운 뒤, 정적분값이 0 이라는 결과 조건에서 C 를 역추적"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "접선의 기울기 조건과 정적분 조건으로 함수 결정하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    이 범위에서 미분과 적분을 양방향으로 함께 쓰는 유일한 문항이다. 기하적 표현(접선의 기울기)을 f′ 로
    옮기고, 부정적분으로 f 를 C 포함 형태로 세운 다음, 그 f 를 다시 정적분해 얻은 C 의 일차식에서 C 를
    되찾는다. 미지 상수를 품은 함수를 그대로 적분해야 한다는 점에서 단순 미정계수 대입과 다르다.
    통찰 2개(EQV d1 · BW d2) → 확인체크 ★2 출발에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "접선 기울기 = f′(x) → 부정적분해 f(x)=−x²+5x+C → ∫₋₂² f dx=0 에 대입 → C 확정"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$f(x)=-x^2+5x+\dfrac{4}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/180-365.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f′ 의 계수와 적분 구간을 바꿀 수 있다. 제약: 구간이 원점 대칭이면 홀수차항이 소거되어 C 의 계수가 구간 길이로 단순해지므로 답이 깔끔하다 — 비대칭 구간으로 바꾸면 C 가 복잡한 분수가 되니 우변 값을 함께 조정한다. f′ 의 차수를 올리면 f 가 삼차가 되어 적분 계산량만 커진다."
    creative: "(1) 정적분 조건 대신 f(1)=0 같은 점 조건을 주면 EQV 한 개만 남아 ★2 로 내려감 — ★3 을 만드는 것은 「적분상수를 품은 채 다시 적분한다」는 단계다 (2) f′ 를 미지 이차함수로 두고 정적분 조건 두 개를 주면 연립이 붙어 ★4 (3) 「접선의 기울기」를 「곡선 위 점에서의 순간변화율」이나 「속도」로 바꾸면 같은 골조에 표현만 달라져 ★3 유지."
```

```yaml
- id: GN-CALC1-180-366
  page: 180
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ∫₁ᵏ(−4x+2)dx 의 값이 최대가 되게 하는 상수 k 를 a, 그때의 정적분의 값을 b 라 할 때 a+b 의 값.
  category: "정적분값을 k 의 이차함수로 보기 → 최댓값 → a, b"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「정적분의 값」을 상수 k 에 대한 이차함수 g(k) 로 다시 보아야 최대 논의가 가능해짐 — 적분 계산 문제를 이차함수 최댓값 문제로 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "정적분의 값이 최대·최소가 되게 하는 적분 구간의 끝 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    적분 자체는 일차식 한 줄인데, 그 결과를 「k 의 함수」로 보지 못하면 무엇을 최대화하는지조차 잡히지
    않는다. g(k)=−2k²+2k 의 꼭짓점이 답이고, 피적분함수가 양인 구간까지만 적분하면 최대라는 기하적
    갈래로도 같은 답에 닿는다. 정적분을 변수의 함수로 보는 재해석이 이 단원에서 처음 나오는 지점이라
    통찰 1개(RT d2)와 M_total 7 을 근거로 확인체크 ★2 에서 +1 했다.
    [분류 이슈] 통찰 1개·depth 2 는 산식상 +1 근거가 약하다 — ★2 / ★3 후보.
  tier: star_3
  mechanism_primary: "∫₁ᵏ(−4x+2)dx 를 계산해 g(k)=−2k²+2k → 꼭짓점에서 최대 → a=k값, b=최댓값 → a+b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/180-366.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "피적분함수의 기울기·절편과 아래끝을 바꿀 수 있다. 제약: 최댓값이 존재하려면 적분 결과의 k² 계수가 음수여야 하므로 피적분함수의 x 계수가 음수여야 하고, 꼭짓점의 k 값이 유리수로 떨어지게 계수를 잡는다. 기울기 부호를 뒤집으면 최대가 아니라 최소 문제가 된다."
    creative: "(1) 「최대」를 「최소」로 바꾸면 부호만 뒤집혀 ★3 유지 (2) 적분 구간을 [k, k+1] 처럼 길이 고정 이동 구간으로 두면 g(k) 가 한 차수 낮아지면서 위치 해석이 필요해 ★3~4 (3) 피적분함수를 이차식으로 올리면 g(k) 가 삼차가 되어 미분으로 극값을 찾아야 하므로 ★4 — 이때 기본정리(d/dk ∫₁ᵏ f = f(k))를 쓰는 갈래가 생겨 I-SC 가 추가됨."
```

```yaml
- id: GN-CALC1-181-e3
  page: 181
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 정적분의 성질로 여러 적분을 하나로 합친 뒤 값 구하기. 같은 구간의 상수배·차,
    적분변수 문자만 다른 두 적분의 합(끝 뒤집힘 포함), 이어 붙는 세 구간의 합.
  category: "구간·변수를 맞춰 한 적분으로 통합 → 기본정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분의 계산 — 성질로 여러 적분을 하나로 합치기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴은 같은 구간이라 피적분함수끼리 빼면 x² 가 소거돼 일차식만 남고, ⑵는 적분변수 문자(x·y)가 값에
    무관하다는 것과 ∫₂⁰=−∫₀² 를 함께 써야 하나로 묶이며, ⑶은 [−1,0]+[0,1]+[1,2]=[−1,2] 다.
    모두 이 구역에서 가르치는 성질의 직접 적용이라 통찰 0. 필수 예제 ★2 출발 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "끝을 뒤집고 변수 문자를 통일해 같은 구간으로 맞춤 → 피적분함수를 합·차로 묶음 → 기본정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $22$ ⑵ $\dfrac{14}{3}$ ⑶ $\dfrac{15}{4}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/181-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴은 상수배를 곱해 뺐을 때 최고차항이 소거되도록 두 피적분함수의 이차 계수를 배수 관계로 맞춰야 한다(2x²와 2·x²). ⑵는 변수 문자만 다르고 구간은 뒤집힌 같은 구간이어야 합쳐진다. ⑶의 세 구간은 끝점을 공유해야 하며 개수를 넷 이상으로 늘려도 골조는 같다."
    creative: "(1) 합친 결과가 홀함수이고 구간이 원점 대칭이 되게 설계하면 값이 0 으로 떨어져 대칭 착안 ★3 (2) 세 적분 중 하나만 구간이 어긋나게 해 「합칠 수 있는 것만 합치고 나머지는 따로」 판단하게 하면 ★3 (3) 피적분함수를 미지 함수 f 로 두고 구간별 적분값을 주면 Mₐ 3·역방향이 되어 ★3~4."
```

```yaml
- id: GN-CALC1-181-367
  page: 181
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 성질로 합쳐야 풀리는 정적분. 세제곱 합·차 인수 꼴 두 적분의 차, 분모가 같은 두 분수식 적분의 합,
    세 구간이 겹치고 빠지는 적분들의 합차.
  category: "구간·변수를 맞춰 한 피적분함수로 통합 → 약분·소거 → 기본정리"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "끝을 뒤집고 적분변수 문자를 통일해 두 적분을 같은 구간의 한 적분으로 바꾸는 동치 변환 — 각각 계산하려 들면 ⑵는 다항함수가 아니라 손도 못 댄다"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "통합된 분수식 (8−y³)/(y−2) 를 인수분해로 다항식 −(y²+2y+4) 로 환원 — 분수 표현을 다항 표현으로 옮겨야 기본정리가 적용됨"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "정적분의 계산 — 합쳐야만 풀리는 정적분(약분·소거)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    e3 가 「합치면 편하다」면 이 문항은 「합치지 않으면 못 푼다」로 성격이 바뀐다. ⑴은 합쳤을 때 상수항이
    소거되고 홀수차만 남으며, ⑵는 각각으로는 다항함수가 아니어서 합쳐 분자를 인수분해해야 비로소 적분
    가능해진다. ⑶은 구간이 [2,4]−[3,4]+[1,2]=[1,3] 으로 겹침·빠짐을 정리해야 한다.
    통찰 2개(EQV d2 · RT d2) → 확인체크 ★2 출발에서 +1 → ★3. 이 범위에서 통합 착안이 가장 강한 문항.
  tier: star_3
  mechanism_primary: "끝 뒤집기·변수 통일로 같은 구간의 한 적분으로 통합 → 분자 인수분해로 약분(또는 항 소거) → 기본정리"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $-\dfrac{15}{2}$ ⑵ $-\dfrac{16}{3}$ ⑶ $-\dfrac{22}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/181-367.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑵의 두 분자는 합쳤을 때 분모로 나누어떨어져야 한다 — (aⁿ−yⁿ)/(y−a) 꼴을 유지해야 하고 약분으로 사라지는 y=2 가 적분 구간 밖에 있어야 한다(구간 [0,1] 유지). ⑴은 합쳤을 때 짝수차가 소거되도록 두 곱셈 공식을 켤레 쌍으로 두어야 하고, ⑶의 구간들은 합차 결과가 하나의 구간으로 정리되게 끝점을 공유시켜야 한다."
    creative: "(1) ⑵에서 분모를 (y−2) 대신 (y²+1) 처럼 나누어떨어지지 않는 식으로 두면 문제가 성립하지 않음 — 이 유형의 생사가 걸린 제약 (2) 통합 결과가 원점 대칭 구간의 홀함수가 되게 설계하면 값 0 이 즉시 나와 I-SYM 이 추가되고 ★4 (3) 구간 합차를 네 개 이상으로 늘리고 그중 하나를 뒤집으면 T-부호 부담만 커져 질이 떨어짐(v3.8 YELLOW)."
```

```yaml
- id: GN-CALC1-182-e4
  page: 182
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    x≤0 에서 x²+1, x≥0 에서 1−5x 로 정의된 함수 f 의 ∫₋₁² f(x)dx 의 값.
  category: "정의가 바뀌는 점에서 구간 분할 → 조각별 적분 → 합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간에 따라 다르게 정의된 함수의 정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분할점 x=0 이 적분 구간 [−1,2] 안에 있으므로 ∫₋₁⁰(x²+1)dx + ∫₀²(1−5x)dx 로 쪼개는 것이 전부다.
    스키마 §2.2 I-MI 판별에서 단순 구간 분할은 표준 분기로 제외하므로 통찰 0 으로 두고, 분할점 누락과
    x≤0·x≥0 의 중복 경계를 Mₜ 2(T-범위·T-경계)로 반영했다. 필수 예제 ★2 출발 유지.
  tier: star_2
  mechanism_primary: "분할점이 적분 구간 안인지 확인 → 구간을 쪼개 각 조각에 해당 식 적용 → 기본정리 후 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\dfrac{20}{3}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/182-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 조각의 식과 적분 구간을 바꿀 수 있다. 제약: 분할점이 적분 구간의 내부에 있어야 이 유형이 성립하고(밖이면 한 조각짜리 문제로 붕괴), 분할점에서 두 식의 값이 일치해야 함수가 연속이 되어 교재 의도에 맞는다(이 문항은 x=0 에서 둘 다 1)."
    creative: "(1) 분할점을 0 이 아닌 값으로 옮기면 계산만 늘고 골조는 동일(★2) (2) 적분 구간의 한쪽 끝을 미지수로 두면 369 처럼 역방향이 되어 ★3 (3) 분할점을 두 개로 늘려 세 조각으로 만들면 Mₛ 만 오르고 ★2 유지 (4) 조각 중 하나를 |x| 로 바꾸면 절댓값 유형과 결합해 ★3."
```

```yaml
- id: GN-CALC1-182-368
  page: 182
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    x≤1 에서 x², x≥1 에서 −2x+3 으로 정의된 함수 f 에 대하여 ∫₀² x f(x)dx 의 값.
  category: "x 를 곱한 뒤 분할점에서 쪼개기 → 조각별 적분 → 합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간에 따라 다르게 정의된 함수의 정적분 — 다른 함수를 곱한 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e4 에 「피적분함수가 f 가 아니라 xf(x)」라는 한 겹이 더 붙었을 뿐이다. 분할점 x=1 은 그대로이고
    각 조각에서 x·x², x·(−2x+3) 을 적분한다. 곱하기가 분할 위치를 바꾸지 않는다는 점만 확인하면 끝나
    통찰로 세지 않았다. 확인체크 ★2 출발 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "분할점 x=1 은 f 에서 결정 → 각 조각에서 x·f(x) 를 다항식으로 만들어 적분 → 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{12}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/182-368.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곱해지는 단항식의 차수(x·x²)와 두 조각의 계수·분할점·적분 구간을 바꿀 수 있다. 제약: 분할점이 적분 구간 내부에 있어야 하고, 두 조각의 값이 분할점에서 일치해야 연속이며, 곱한 뒤 차수가 4 를 넘지 않게 두어야 계산 마찰이 과해지지 않는다."
    creative: "(1) 곱하는 것을 x 대신 f(x) 로 바꿔 ∫ f(x)² dx 를 물으면 조각마다 제곱이 생겨 ★3 (2) ∫₀² f(x)dx 와 ∫₀² xf(x)dx 를 동시에 주고 미지 계수 두 개를 되찾게 하면 I-CON 이 붙어 ★4 (3) 곱하는 함수의 부호가 구간 안에서 바뀌게 하면(x−1) 분할점이 하나 더 필요한지 판단해야 해서 ★3."
```

```yaml
- id: GN-CALC1-182-369
  page: 182
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    x≤0 에서 x+1, x≥0 에서 x²−2x+1 로 정의된 함수 f 에 대하여 ∫₋₁ᵃ f(x)dx=7/2 를 만족시키는 양수 a 의 값.
  category: "분할점 포함 확정 → a 를 품은 채 적분 → 적분값 조건으로 a 역추적"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「a 는 양수」라는 단서를 「분할점 0 이 적분 구간 [−1, a] 의 내부에 반드시 들어간다」로 옮겨 조각 구성을 고정"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "위끝 a 를 미지수로 둔 채 적분해 얻은 a 의 삼차식에서 적분값 조건으로 a 를 역추적((a−1)³=8)"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "구간에 따라 다르게 정의된 함수의 정적분에서 적분 구간의 끝 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    e4·368 의 분할 절차에 「상한이 미지수」라는 역방향이 얹혔다. 먼저 a>0 덕분에 분할이 [−1,0]과 [0,a]
    두 조각으로 고정된다는 것을 확정해야 하고(이 확정 없이는 경우 나누기부터 해야 한다), 그다음 a 를
    품은 적분 결과를 조건에 맞춰 푼다. x²−2x+1=(x−1)² 이라 적분 결과가 (a−1)³ 꼴로 묶이는 것이 계산을
    살린다. 통찰 2개(EQV d1 · BW d2) → 확인체크 ★2 출발에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "a>0 → 분할점 0 포함 확정 → ∫₋₁⁰(x+1)dx + ∫₀ᵃ(x−1)²dx = 7/2 → (a−1)³=8 → a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/182-369.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 값과 두 조각의 식을 바꿀 수 있다. 제약: 오른쪽 조각이 완전제곱 (x−p)² 이어야 적분 결과가 세제곱 하나로 묶여 a 가 정수로 떨어진다(일반 이차식으로 바꾸면 삼차방정식의 유리근을 따로 맞춰야 함). 우변은 왼쪽 조각의 고정 적분값(1/2)을 더한 값이므로 함께 조정한다."
    creative: "(1) 「양수 a」 단서를 빼면 a<0 인 경우까지 따져야 해서 I-MI 가 추가되고 ★4 (2) 미지수를 아래끝에 두면 부호가 한 번 더 뒤집혀 T-부호 함정이 강해짐(★3 유지) (3) 적분값 조건을 부등식으로 바꾸면 a 의 범위를 묻는 문제가 되어 단조성 논의가 필요해 ★4."
```

```yaml
- id: GN-CALC1-183-e5
  page: 183
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ ∫₀³|x−1|dx ⑵ ∫₋₁³|x(x−2)|dx. 절댓값 안 식의 부호가 바뀌는 점에서 구간을 나누어 계산한다.
  category: "절댓값 안 식의 부호 변화점에서 분할 → 음인 구간은 부호 반전 → 기본정리"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값 기호를 포함한 함수의 정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴은 x=1 에서 한 번, ⑵는 x=0, x=2 에서 두 번 부호가 바뀌어 세 조각이 된다. 음인 구간에서는
    피적분함수 앞에 −를 붙인다는 것이 전부다. 스키마 §2.2 I-MI 판별에서 단순 절댓값 구간 분할은
    표준 분기로 명시 제외되므로 통찰 0 으로 두고 Mₜ 2(T-부호·T-범위)로만 반영했다.
    필수 예제 ★2 출발 유지.
  tier: star_2
  mechanism_primary: "절댓값 안 식=0 의 근 중 적분 구간 안의 것으로 분할 → 음인 조각은 부호 반전 → 조각별 기본정리 후 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{5}{2}$ ⑵ $4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/183-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "절댓값 안의 식과 적분 구간을 바꿀 수 있다. 제약: 부호 변화점(근)이 적분 구간 내부에 적어도 하나 있어야 유형이 성립하고, 근이 정수·간단한 유리수여야 조각 적분이 깔끔하다. 근이 구간 밖이면 절댓값이 벗겨진 한 조각 문제로 붕괴한다."
    creative: "(1) 이차식의 근 하나만 구간 안에 들어가게 잡으면 조각이 둘로 줄어 ★2 유지 (2) 적분 구간의 끝을 미지수로 두면 371 과 같은 역방향이 되어 ★3 (3) 절댓값을 두 개 겹치면(|x−1|+|x−3|) 분할점이 늘고 구간별 식 정리가 필요해 ★2~3 (4) 절댓값 안에 매개변수를 넣어 |x²−k| 로 두면 k 의 부호·크기에 따라 분할 개수가 달라져 I-MI 가 생기고 ★4."
```

```yaml
- id: GN-CALC1-183-370
  page: 183
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 절댓값을 포함한 정적분. 일차식의 절댓값, 이차식의 절댓값,
    (|x|+x+1)² 처럼 절댓값이 식 안에 섞인 형태, 절댓값 두 개의 합.
  category: "절댓값 벗기기(조각별 식 정리) → 분할 적분 → 합"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑶에서 |x|+x 가 x≤0 이면 0, x≥0 이면 2x 임을 먼저 알아채 피적분함수를 조각마다 전혀 다른 식(상수 1 과 (2x+1)²)으로 바꿔 놓는 동치 변환 — 절댓값을 그대로 제곱해 전개하면 길이 막힌다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "절댓값 기호를 포함한 함수의 정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴⑵⑷는 e5 와 같은 표준 분할 드릴이고 ⑷만 분할점이 둘(x=2, x=3)이라 조각이 셋이다. 성격이 다른 것은
    ⑶ 하나로, 절댓값이 다른 항과 섞여 있어 조각별로 식을 먼저 정리해야 적분 대상이 드러난다.
    통찰 1개(EQV d2)가 소문항 하나에만 걸려 있어 문항 전체의 층을 올리지는 못한다고 보아
    확인체크 ★2 출발을 유지했다. ⑶만 따로 떼면 ★3 후보다.
  tier: star_2
  mechanism_primary: "각 조각에서 절댓값을 벗겨 실제 피적분함수를 확정 → 조각별 기본정리 → 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\dfrac{5}{2}$ ⑵ $3$ ⑶ $\dfrac{19}{3}$ ⑷ $9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/183-370.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 소문항의 계수·구간을 바꿀 수 있다. 제약: ⑶의 |x|+x 구조는 그대로 두어야 한 조각이 상수가 되는 착안이 살아남고(|x|−x 로 바꾸면 좌우가 뒤바뀔 뿐 골조 동일), ⑷의 두 분할점은 적분 구간 안에 모두 들어가야 세 조각이 생긴다. ⑵는 인수분해되는 이차식이어야 근이 정수로 나온다."
    creative: "(1) ⑶을 (|x|+x+1)³ 으로 올리면 계산 마찰만 커져 질 저하(v3.8 YELLOW) (2) ⑷의 절댓값 개수를 셋으로 늘리고 최솟값이 되는 위치를 함께 물으면 ★3~4 (3) ⑵의 적분 구간을 미지수로 두고 값을 주면 371 골조가 되어 ★3 (4) |x|+x 구조를 이용해 「x≤0 에서 값이 0 임」을 근거로 적분 구간을 반으로 줄이게 하면 같은 통찰이 주역이 되어 ★3."
```

```yaml
- id: GN-CALC1-183-371
  page: 183
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    a>1 일 때 ∫₀ᵃ|x²−1|dx=56/3 을 만족시키는 상수 a 의 값.
  category: "부호 변화점 포함 확정 → a 를 품은 채 분할 적분 → 적분값 조건으로 a 역추적"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「a>1」 단서를 「부호 변화점 x=1 이 적분 구간 [0, a] 의 내부에 들어가고 [0,1]에서는 음, [1,a]에서는 양」으로 옮겨 조각 구성과 부호를 고정"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "위끝 a 를 미지수로 둔 채 적분해 얻은 a 의 삼차방정식에서 적분값 조건으로 a 를 역추적"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "절댓값을 포함한 정적분에서 적분 구간의 끝 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    e5 의 절댓값 분할과 369 의 상한 역추적이 합쳐진 문항이다. a>1 이라는 단서가 분할 구조를 한 가지로
    고정해 주고, 그 뒤 [0,1] 조각의 값은 상수로 떨어지고 [1,a] 조각만 a 의 삼차식으로 남는다.
    마지막에 삼차방정식을 유리근으로 풀어야 한다. 통찰 2개(EQV d1 · BW d2) → 확인체크 ★2 출발에서
    +1 → ★3. 이 범위에서 M_total 이 가장 높은 두 문항(369·371) 중 하나다.
  tier: star_3
  mechanism_primary: "a>1 → [0,1]은 1−x², [1,a]는 x²−1 → 두 조각 적분의 합을 a 의 삼차식으로 → 56/3 과 같다고 두고 a 확정"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/183-371.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "절댓값 안의 식(x²−k²)과 우변 값을 바꿀 수 있다. 제약: 적분 결과인 a 의 삼차방정식이 유리근(가급적 정수)을 가져야 하므로 우변을 먼저 정수 a 에 맞춰 역산해 정해야 한다. 아래끝 0 을 옮기면 상수 조각의 값이 바뀌므로 우변도 함께 조정한다. 부호 변화점이 적분 구간 안에 있도록 a 의 단서(a>1)를 유지한다."
    creative: "(1) 단서를 「0<a<1」로 바꾸면 조각이 하나뿐이라 ★2 로 내려감 — 단서가 난이도를 직접 결정한다 (2) 단서를 아예 빼면 a 의 위치에 따라 경우를 나눠야 해서 I-MI 가 추가되고 ★4 (3) 절댓값 안을 |x²−k| 로 두고 a 를 고정해 k 를 묻게 뒤집으면 분할점 자체가 미지수가 되어 ★4 (4) 등식을 부등식으로 바꾸면 적분값의 단조증가성을 논해야 해서 ★4."
```

## 표본 판정 요약 (17문)

- ★ 분포: ★1 3 · ★2 9 · ★3 5 · ★4 0 · ★5 0
- 통찰형 6 · 절차형 11 · premium 0
- 통찰 유형 분포(총 10개 라벨): I-EQV 5 · I-BW 3 · I-RT 2. depth 3 은 없고 depth 2 가 7개 · depth 1 이 3개라 §2.9 감쇠 대상이 없었다(effective_depth = depth).
- M_total 분포: 4 → 1문 · 5 → 1문 · 6 → 4문 · 7 → 4문 · 8 → 5문 · 9 → 2문. Mₖ 는 전 문항 2 이하다(다항함수 적분뿐). 변별은 Mₛ(통합·분할 단계 수)와 Mₜ(끝 뒤집기 부호·분할점 누락·경계 등호)에 몰려 있다.
- type_hint 상위: 「미적분의 기본정리 — 피적분함수를 정리한 뒤 계산하는 정적분」 2 · 「미적분의 기본정리를 이용하여 미정계수 구하기」 2(그중 1문은 「적분 구간에도 미지수가 있는 경우」 변종) · 「절댓값 기호를 포함한 함수의 정적분」 2 · 「구간에 따라 다르게 정의된 함수의 정적분」 2(그중 1문은 「다른 함수를 곱한 경우」 변종) · 「정적분의 계산 — 성질로 여러 적분을 하나로 합치기」 2(그중 1문은 「합쳐야만 풀리는」 변종)
- 대상층: 하위권 3 · 중하위권 8 · 중위권 4 · 중상위권 2
- 그림: 0문(17문 모두 `figure: none`)
- answer_source: 본문 풀이 5(필수 예제 e1~e5) · 답지 12. 골조를 잡는 동안 전사 답과 어긋나 보인 문항은 없었다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC1-180-366 | 통찰 1개(RT d2)는 산식상 +1 근거가 약한데도 「정적분값을 변수의 함수로 본다」는 재해석과 M_total 7 을 이유로 확인체크 ★2 에서 ★3 으로 올렸다. 통찰 1개·depth 2 를 +1 근거로 쓰는 관례를 은행 전체에서 확정할 필요 | ★2 / ★3 |
| GN-CALC1-183-370 | 소문항 4개 중 ⑶ 하나에만 통찰(EQV d2)이 있다. 문항 단위로는 ★2 로 두었지만 통찰형으로 분류되어 「★2 통찰형」이라는 드문 조합이 나왔다. 소문항 묶음 문항의 층을 최고 소문항으로 잡을지 평균으로 잡을지 규칙이 필요 | ★2 / ★3 |
| GN-CALC1-179-363 | 확인체크(★2 출발)지만 M_total 4·통찰 0 으로 −1 하여 ★1 이 되었다. 같은 확인체크 tag 안에서 ★1 과 ★3 이 함께 나오므로 tag 를 층 신호로 쓰는 강도를 조정할 필요 | ★1 / ★2 |
| GN-CALC1-180-e2 · GN-CALC1-180-364 | 둘 다 M_total 8 로 ★2 층의 상단인데 통찰이 없어 ★2 에 머물렀다. 364 의 「양수 근 채택」을 I-VF 로 인정하면 ★3 이 된다 — 발문에 조건이 명시된 근 기각을 통찰로 셀지 여부의 경계 사례 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위는 **한 도구(미적분의 기본정리)에서 갈라진 네 유형**이다. (가) 정방향 계산 — 피적분함수 전처리(360·361·e1·362·363), (나) 정적분의 성질로 통합(e3·367), (다) 적분값 조건에서 미정계수 역추적(e2·364·365·366), (라) 적분 전 구간 분할 — 구간별 정의 함수와 절댓값(e4·368·369·e5·370·371). 카탈로그에서는 이 넷을 독립 유형으로 세우는 것이 맞다. 풀이의 첫 행동이 각각 「전개·약분」 「구간·변수 맞추기」 「미지수를 품은 채 적분」 「분할점 찾기」로 서로 다르다.
- 통합해도 될 유형: (라) 안의 「구간별 정의 함수」와 「절댓값 함수」는 골조가 완전히 같다 — 절댓값은 부호 변화점에서 자동으로 정의가 갈리는 구간별 함수일 뿐이다. 한 유형 아래 두 표현으로 두고 변형 축으로 삼으면 충분하다. (가)의 전개형과 약분형도 「적분 가능한 다항식으로 만든다」는 한 유형.
- 따로 세워야 할 유형: **「적분 구간의 끝이 미지수인 역방향」**(369·371)은 (다)와 (라) 어디에도 온전히 안 들어간다. 분할 구조를 먼저 고정한 뒤 역추적한다는 두 단계가 겹쳐 있고 이 범위의 ★3 중 둘이 여기서 나왔다. (다)의 하위 유형이 아니라 독립 유형으로 세우고 ★ 를 한 단 높게 잡는 편이 슬롯 관리에 유리하다. 367 의 「합쳐야만 풀리는 정적분」도 e3 의 성질 적용과는 체감이 달라 별도 유형 후보다.
- ★4·★5 가 없는 범위다. 이 단원에서 ★4 이상을 만들려면 (1) 미지수의 위치 단서를 빼서 경우 나누기(I-MI)를 강제하거나, (2) 적분 구간을 이동 구간 [k, k+1] 로 두어 위치 해석을 얹거나, (3) 피적분함수를 미지 함수 f 로 올려 여러 구간의 적분값을 결합(I-CON)하게 해야 한다. ★5 라면 여기에 기본정리의 미분 형태(d/dk ∫ₐᵏ f = f(k))를 쓰는 갈래를 만들어 I-SC 를 끌어와야 한다. 각 블록 `variation_notes.creative` 에 그 지점을 문항별로 적어 두었다.
