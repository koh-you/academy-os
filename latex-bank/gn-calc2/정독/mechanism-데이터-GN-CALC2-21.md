---
name: mechanism-데이터-GN-CALC2-21
description: 개념원리 미적분Ⅱ 21 곡선의 볼록과 변곡점(1/1 · 개념원리 익히기 4문 + 필수·발전 예제 5문) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ · 전사본 latex-bank/gn-calc2
  section: 21 곡선의 볼록과 변곡점
  unit_code: GN-CALC2-21
  part: "1/1"
  extract_range: "179~181쪽 · 179-359~181-365"
  total_problems: 9
  unit_total: 9
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (crops.json)
---

# 개념원리 미적분Ⅱ · 21 곡선의 볼록과 변곡점 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅱ 179~181쪽 세 쪽, 단원 21 「곡선의 볼록과 변곡점」 9문항 전수를 다룬다. 구역은 두 개뿐이다 — 「개념원리 익히기」 4문(통번호 359~362 · ★1 출발)과 「필수·발전 예제」 5문(필수 예제 2 + 확인체크 3 · ★2 출발). 이 단원에는 연습문제 STEP 1·STEP 2·실력 UP 구역이 배정돼 있지 않아 벤더 난이도 신호의 상한이 「필수」 태그(★2)에서 끊기고, 그 결과 이 범위의 ★ 분포는 ★1~2 에 몰린다. 난이도를 올리는 요소가 계산량(합성·몫미분, 소문항 4개)뿐이고 v3.8 은 계산 마찰을 ★ 상승 신호로 쓰지 않기 때문이다.

문항의 골조는 두 갈래로 갈린다. (가) **정방향 조사형** — `f''` 를 구하고 `f''=0` 의 해로 구간을 나눈 뒤 부호로 볼록 방향과 변곡점 좌표를 읽는다(359~363, 6문). (나) **역방향 미정계수형** — 변곡점의 좌표·극값·접선의 기울기 같은 결과 조건에서 계수를 역추적한다(181-e16, 181-364, 181-365, 3문). 후자 중 「변곡점의 **좌표**」가 주어진 두 문항(181-e16 · 181-365)에서는 그 한 마디를 `f''(x0)=0` 과 `f(x0)=y0` 두 식으로 분해해야 미지수 개수만큼 식이 갖춰지는데, 두 번째 식을 빠뜨리면 풀이가 끊기므로 I-EQV 통찰 1개를 부여했다. 이 두 문항은 체감 난도가 ★3 쪽이라 rationale 과 파일 끝 표에 [분류 이슈] 로 함께 기록했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변경)를 채웠다. 그림 문항은 없다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CALC2-179-359
  page: 179
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    함수 $f(x)=e^x$ 가 구간 $(-\infty,\,\infty)$ 에서 아래로 볼록임을 보이는 증명형 문항.
  category: "두 번 미분 → f''(x)=e^x>0 → 전 구간 아래로 볼록 결론"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이계도함수의 부호로 곡선의 볼록성 판정(증명형)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    볼록성의 정의를 이계도함수의 부호로 바꿔 쓴 정리를 그대로 적용하는 한 단계 문항이다.
    f''(x)=e^x 이고 지수함수는 모든 실수에서 양수라는 사실 하나로 결론이 난다.
    구간을 나눌 필요도, 변곡점을 찾을 필요도 없다. 통찰 0 · M_total 4 → 개념원리 익히기 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: "f''(x)=e^x → 모든 실수에서 e^x>0 → 구간 전체에서 아래로 볼록"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "풀이 참조"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/179-359.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑을 2^x, a^x (a>0, a≠1), e^{2x}, e^{-x} 로 바꿀 수 있음. 제약: (가) f''=(ln a)^2 a^x 라 밑이 무엇이든 부호가 양수로 고정돼야 「전 구간 아래로 볼록」이라는 결론이 유지됨 (나) e^{-x} 도 f''>0 이라 같은 결론이지만 e^{-x^2} 처럼 지수에 x^2 을 넣으면 부호가 구간마다 바뀌어 증명형이 아니라 조사형이 되므로 발문을 함께 고쳐야 함."
    creative: "(1) 구간을 (0, ∞) 처럼 제한하고 그 구간에서만 보이게 하면 ★1 유지 (2) 볼록성으로 e^x ≥ x+1 을 설명하게 하면 그래프와 접선의 위치 관계로 옮기는 단계가 붙어 I-RT 1개 ★3 (3) e^x 와 ln x 를 한 문항에 묶어 역함수 관계에서 볼록 방향이 뒤집히는 이유를 묻게 하면 I-SYM 1개 ★3."
```

```yaml
- id: GN-CALC2-179-360
  page: 179
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    함수 $f(x)=\ln x$ 가 구간 $(0,\,\infty)$ 에서 위로 볼록임을 보이는 증명형 문항.
  category: "두 번 미분 → f''(x)=-1/x^2<0 → 정의역 전체에서 위로 볼록 결론"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이계도함수의 부호로 곡선의 볼록성 판정(증명형)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    359 의 부호 반대 짝. f'(x)=1/x 를 한 번 더 미분해 f''(x)=-1/x^2 을 얻고,
    x>0 에서 x^2>0 이므로 f''<0 임을 말하면 끝난다. 정의역이 x>0 으로 제한된다는 점이 유일한 T-범위 함정.
    통찰 0 · M_total 4 → 개념원리 익히기 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: "f'(x)=1/x → f''(x)=-1/x^2 → x>0 에서 f''<0 → 구간 전체에서 위로 볼록"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "풀이 참조"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/179-360.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "log_a x (a>1 또는 0<a<1), ln(x+k), x ln x 로 바꿀 수 있음. 제약: (가) 제시한 정의역 안에서 f'' 의 부호가 일정해야 「구간 전체에서 위로 볼록」 결론이 유지됨 (나) x ln x 는 f''=1/x>0 이라 결론이 아래로 볼록으로 뒤집히므로 발문의 볼록 방향을 같이 고칠 것 (다) ln(x+k) 는 정의역이 x>-k 로 옮겨가므로 발문의 구간도 함께 옮길 것."
    creative: "(1) 밑이 0<a<1 인 로그함수로 바꾸면 f''=-1/(x ln a) 의 부호가 반대가 되어 밑의 범위까지 따져야 하므로 T-부호 함정이 생겨 ★2 (2) ln x 의 위로 볼록성으로 산술평균·기하평균 부등식을 설명하게 하면 I-RT 1개 ★3 (3) 정의역을 (0,1) 과 (1,∞) 로 쪼개 제시하고 두 구간의 부호가 같음을 확인하게 하면 ★1 유지."
```

```yaml
- id: GN-CALC2-179-361
  page: 179
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    $f(x)=\sin x$ 의 구간 $(0,\,2\pi)$ 에서의 볼록성을 조사하는 과정의 빈칸을 채우는 유도형 문항.
    빈칸은 $f'(x)$ · $f''(x)$ · $f''(x)=0$ 의 해 · 두 구간에서의 $f''$ 의 부호 · 위로/아래로 볼록한 구간이다.
  category: "f'·f'' 계산 → f''=0 의 해로 구간 분할 → 각 구간의 부호 → 볼록 방향 결론"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이계도함수의 부호로 볼록 구간 나누기(삼각함수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    359·360 과 달리 부호가 구간마다 바뀌는 첫 문항이라 구간 분할 단계가 추가되지만,
    발문 상자가 f'→f''→해→부호→결론 순서를 빈칸으로 다 열어 두어 학생이 세울 것이 없다.
    0<x<2π 라는 범위 때문에 f''=0 의 해가 x=π 하나로 좁혀지는 것이 유일한 T-범위 함정.
    통찰 0 · M_total 5 → 개념원리 익히기 출발점 ★1 유지(−1 후보이나 하한).
  tier: star_1
  mechanism_primary: "f''(x)=-sin x → f''=0 인 x=π 로 (0,2π) 를 분할 → 앞 구간 f''<0, 뒤 구간 f''>0 → (0,π) 위로 볼록·(π,2π) 아래로 볼록"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\cos x$, $-\sin x$, $\pi$, $<$, $\pi$, $>$, $(0,\,\pi)$, $(\pi,\,2\pi)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/179-361.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "함수를 cos x, sin 2x 로, 구간을 (0, π) · (-π, π) · (0, 4π) 로 바꿀 수 있음. 제약: (가) 구간 안에서 f''=0 의 해가 유한하고 그 점에서 부호가 실제로 바뀌어야 빈칸 구조가 유지됨 (나) 빈칸 개수와 답 순서가 발문 상자에 고정돼 있으므로 f''=0 의 해가 정확히 하나일 때만 지금의 상자를 그대로 쓸 수 있음 — 해가 둘 이상이면 상자의 구간 줄을 늘려야 함 (다) sin 2x 로 바꾸면 f''=-4 sin 2x 라 계수만 붙고 해가 (0,2π) 에서 셋이 되어 상자 확장이 필요."
    creative: "(1) 빈칸을 없애고 「볼록 구간을 조사하시오」로 바꾸면 유도가 사라져 ★2 (2) 같은 구간에서 변곡점의 좌표까지 묻게 하면 y 값 계산이 붙어 ★2 (3) 0<x<π 에서 sin x 와 x 의 대소를 위로 볼록성으로 설명하게 하면 I-RT 1개 ★3."
```

```yaml
- id: GN-CALC2-179-362
  page: 179
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    $f(x)=e^{-x^2}$ 에 대하여 ⑴ $f''(x)$ 를 구하고 ⑵ $f''(x)=0$ 의 해를 구한 뒤 ⑶ 곡선 $y=f(x)$ 의 변곡점의 좌표를 구하는 문항.
  category: "합성·곱미분으로 f'' → f''=0 의 해 → 그 x 에서의 f 값으로 변곡점 좌표"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이계도함수와 변곡점의 좌표 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    소문항 ⑴⑵⑶ 이 계산 순서를 그대로 열어 주어 학생이 세울 골조가 없는 절차형이다.
    다만 f'=-2xe^{-x^2} 에 곱미분과 합성함수 미분을 겹쳐 f''=2e^{-x^2}(2x^2-1) 로 정리하는 계산층이
    359~361 보다 한 단 위라 Mₖ=2 · M_total 6 이고, 구역 출발점 ★1 에서 +1 해 ★2 로 둔다(벤더 신호와 1단 차이).
    e^{-x^2}>0 이므로 부호는 2x^2-1 만 보면 된다는 점이 ⑶ 의 열쇠.
  tier: star_2
  mechanism_primary: "f'(x)=-2xe^{-x^2} → 곱미분으로 f''(x)=2e^{-x^2}(2x^2-1) → e^{-x^2}>0 이므로 2x^2-1=0 → x=±√2/2 에서 부호 변화 → 변곡점 두 개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $f''''(x)=2e^{-x^2}(2x^2-1)$ ⑵ $x=-\dfrac{\sqrt{2}}{2}$ 또는 $x=\dfrac{\sqrt{2}}{2}$ ⑶ $\left(-\dfrac{\sqrt{2}}{2},\,e^{-\frac{1}{2}}\right)$, $\left(\dfrac{\sqrt{2}}{2},\,e^{-\frac{1}{2}}\right)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/179-362.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수의 계수를 바꿔 e^{-2x^2}, e^{-x^2/2} 로. 제약: (가) 지수가 -kx^2 (k>0) 이어야 f''=0 의 해가 x=±1/√(2k) 로 두 개 나오고 변곡점이 둘 (나) e^{+x^2} 로 뒤집으면 f''=2e^{x^2}(2x^2+1)>0 이 되어 변곡점이 사라지므로 ⑵⑶ 이 성립하지 않음 (다) 변곡점의 y 좌표가 e^{-1/2} 처럼 깔끔하려면 k 를 1 이나 1/2 로 둘 것."
    creative: "(1) 소문항 유도를 없애고 변곡점만 묻게 하면 라벨은 ★2 유지이나 체감이 한 단 올라감 (2) 변곡점에서의 접선의 방정식을 묻게 하면 한 단계 추가로 ★3 (3) f(x)=e^{-x^2} 의 그래프 개형(극대·변곡점·점근선)을 전부 조사하게 하면 항목이 늘어 ★3 (4) 정규분포 곡선의 변곡점이라는 맥락을 붙여 표준편차와 연결하면 I-RT 1개 ★3."
```

### 필수·발전 예제

```yaml
- id: GN-CALC2-180-e15
  page: 180
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    주어진 곡선이 아래로 볼록한지 위로 볼록한지 조사하고 변곡점의 좌표를 구하는 대표 예제.
    ⑴ 삼차함수 $y=x^3-3x^2+5$ ⑵ $y=xe^x$.
  category: "f'' 계산 → f''=0 의 해로 구간 분할 → 부호표 → 볼록 구간과 변곡점 좌표"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선의 볼록과 변곡점 — 볼록 구간 조사와 변곡점 좌표"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이 단원의 대표 골조를 두 함수 종류로 보여 주는 필수 예제다. ⑴ 은 f''=6x-6 이 일차식이라 변곡점이 항상 하나,
    ⑵ 는 곱미분을 두 번 써 f''=(x+2)e^x 를 얻고 e^x>0 이므로 부호가 x+2 만으로 정해진다.
    두 소문항 모두 f''=0 의 해 앞뒤에서 부호가 바뀌는지 확인하고 그 x 에서의 함숫값까지 구해야 답이 완성된다.
    통찰 0 · M_total 6 → 필수 예제 출발점 ★2 유지(−1 조건인 M_total ≤ 5 에 해당하지 않음).
  tier: star_2
  mechanism_primary: "f'' 계산 → f''=0 의 해로 구간 분할 → 부호표로 볼록 방향 → 그 해에서의 f 값으로 변곡점 좌표"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 구간 $(-\infty,\,1)$에서 위로 볼록, 구간 $(1,\,\infty)$에서 아래로 볼록, 변곡점의 좌표: $(1,\,3)$ ⑵ 구간 $(-\infty,\,-2)$에서 위로 볼록, 구간 $(-2,\,\infty)$에서 아래로 볼록, 변곡점의 좌표: $\left(-2,\,-\dfrac{2}{e^2}\right)$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/180-e15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 계수(x^3-3x^2+5 → x^3-6x^2+1, 2x^3+3x^2-1)와 ⑵ 의 꼴(xe^x → xe^{-x}, (x+1)e^x). 제약: (가) 삼차함수는 f''=6ax+2b 가 일차식이라 계수를 어떻게 바꿔도 변곡점이 정확히 하나로 유지됨 (나) 변곡점의 x 좌표는 -b/(3a) 이므로 정수로 떨어지게 b 를 3a 의 배수로 둘 것 (다) x^2 e^x 로 올리면 f''=(x^2+4x+2)e^x 의 해가 무리수라 변곡점 좌표가 지저분해짐 (라) ⑵ 의 y 좌표는 지수값이 남으므로 변곡점의 x 좌표를 작은 정수로 둘 것."
    creative: "(1) ⑴ 의 변곡점이 삼차함수 그래프의 대칭의 중심임을 함께 묻게 하면 I-SYM 1개 ★3 (2) ⑴ 을 사차함수로 바꾸면 f''=0 의 해 중 중근에서 부호가 안 바뀌어 「f''=0 이어도 변곡점이 아니다」를 걸러내는 단계가 생겨 I-VF 1개 ★3 (3) 볼록 구간만 묻고 변곡점을 빼면 ★1 (4) 두 곡선을 겹쳐 그려 볼록 방향이 같은 구간을 묻게 하면 조건 통합이 붙어 ★3."
```

```yaml
- id: GN-CALC2-180-363
  page: 180
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 네 곡선이 아래로 볼록한지 위로 볼록한지 조사하고 변곡점의 좌표를 구하는 확인 문항.
    ⑴ 사차함수 $y=x^4+4x^3+20$ ⑵ $y=x+2\cos x\ (0<x<2\pi)$ ⑶ $y=\dfrac{1}{x^2+3}$ ⑷ $y=\ln(x^2+1)$.
  category: "함수 종류별 f'' 계산 → f''=0 의 해로 구간 분할 → 부호 확인 → 볼록 구간과 변곡점 좌표"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선의 볼록과 변곡점 — 볼록 구간 조사와 변곡점 좌표"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    180-e15 와 골조가 같고 함수 종류만 다항·삼각·분수·로그 네 갈래로 늘어난 확인 문항이다.
    ⑴ 은 f''=12x(x+2) 로 변곡점 둘, ⑵ 는 f''=-2cos x 라 0<x<2π 에서 해가 π/2 와 3π/2 둘,
    ⑶⑷ 는 f'' 의 분모가 제곱이라 부호가 분자만으로 정해진다는 것이 정리의 열쇠.
    함정은 T-범위(⑵ 의 구간 제한)와 T-부호(⑶⑷ 의 분자 부호) 두 갈래라 Mₜ=2, 단계 수가 많아 Mₛ=3 이지만
    v3.8 은 계산 마찰을 ★ 상승 신호로 쓰지 않으므로 통찰 0 그대로 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "소문항마다 f'' 계산 → f''=0 의 해 구하기 → 해 앞뒤 부호 변화 확인 → 볼록 구간 서술 + 변곡점 좌표"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 구간 $(-\infty,\,-2)$, $(0,\,\infty)$에서 아래로 볼록, 구간 $(-2,\,0)$에서 위로 볼록, 변곡점의 좌표: $(-2,\,4)$, $(0,\,20)$ ⑵ 구간 $\left(0,\,\dfrac{\pi}{2}\right)$, $\left(\dfrac{3}{2}\pi,\,2\pi\right)$에서 위로 볼록, 구간 $\left(\dfrac{\pi}{2},\,\dfrac{3}{2}\pi\right)$에서 아래로 볼록, 변곡점의 좌표: $\left(\dfrac{\pi}{2},\,\dfrac{\pi}{2}\right)$, $\left(\dfrac{3}{2}\pi,\,\dfrac{3}{2}\pi\right)$ ⑶ 구간 $(-\infty,\,-1)$, $(1,\,\infty)$에서 아래로 볼록, 구간 $(-1,\,1)$에서 위로 볼록, 변곡점의 좌표: $\left(-1,\,\dfrac{1}{4}\right)$, $\left(1,\,\dfrac{1}{4}\right)$ ⑷ 구간 $(-\infty,\,-1)$, $(1,\,\infty)$에서 위로 볼록, 구간 $(-1,\,1)$에서 아래로 볼록, 변곡점의 좌표: $(-1,\,\ln 2)$, $(1,\,\ln 2)$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-calc2/items/180-363.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 삼차항 계수, ⑵ 의 진폭(2cos x → 3cos x)과 구간, ⑶ 의 분모 상수(x^2+3 → x^2+a), ⑷ 의 ln(x^2+k). 제약: (가) ⑴ 은 f''=12x^2+24x 의 두 근이 모두 단근이어야 변곡점이 둘 — 삼차항을 없애면 x=0 이 중근이 되어 변곡점이 사라짐 (나) ⑵ 는 진폭을 바꿔도 f''=-A cos x 라 변곡점의 x 좌표가 π/2, 3π/2 로 고정되고 y 좌표만 움직임 (다) ⑶ 의 변곡점은 x=±√(a/3) 이므로 a 를 3 의 배수로 둬야 무리수가 안 나옴 (라) ⑷ 의 변곡점은 x=±√k 이므로 k 를 완전제곱수로 둘 것."
    creative: "(1) 네 소문항 중 하나만 남기고 그래프 개형까지 그리게 하면 ★3 (2) ⑴ 을 x^4 로 바꾸면 f''=12x^2 이 x=0 에서 부호가 안 바뀌어 변곡점이 없다는 반례가 되고 「f''=0 은 필요조건일 뿐」을 확인시키는 I-VF 1개 ★3 (3) ⑶⑷ 처럼 분모가 항상 양인 구조를 깨서 정의역 제한이 생기는 ln(x^2-1) 로 바꾸면 T-범위 함정이 강해져 ★3 (4) 네 곡선 중 변곡점이 두 개인 것을 고르게 하는 보기형으로 바꾸면 계산량은 같고 판단만 남아 ★2 유지."
```

```yaml
- id: GN-CALC2-181-e16
  page: 181
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    함수 $f(x)=\dfrac{ax+b}{e^x}$ 의 곡선 $y=f(x)$ 의 변곡점의 좌표가 $(-1,\,2e)$ 일 때
    상수 $a$, $b$ 의 값을 구하는 역방향 예제.
  category: "변곡점 좌표 조건 → f''(-1)=0 과 f(-1)=2e 두 식 → 연립으로 a, b 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「변곡점의 좌표가 (-1, 2e)」라는 한 마디를 f''(-1)=0 과 f(-1)=2e 두 조건으로 분해 — 점이 곡선 위에 있다는 둘째 식을 빠뜨리면 미지수 2개에 식이 1개뿐이라 풀이가 끊김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "변곡점을 이용한 미정계수의 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분수꼴을 (ax+b)e^{-x} 로 보고 곱미분을 두 번 하면 f''(x)=(ax+b-2a)e^{-x} 이고 e^{-x}>0 이라 부호는 일차식만으로 정해진다.
    골조의 갈림길은 계산이 아니라 조건 해석이다 — 「변곡점의 좌표」는 f''=0 하나가 아니라 곡선 위의 점이라는 조건까지 품고 있어
    두 식을 모두 세워야 미지수 2개가 결정된다(I-EQV d1). 통찰 1개 · M_total 7 → 필수 예제 출발점 ★2 유지.
    [분류 이슈] 역방향 미정계수라 학생 체감은 ★3 쪽이지만 +1 조건(통찰 2개 이상 또는 depth 3)에 못 미쳐 ★2 로 두고 기록만 함.
  tier: star_2
  mechanism_primary: "f(x)=(ax+b)e^{-x} → f''(x)=(ax+b-2a)e^{-x} → 변곡점 조건을 f''(-1)=0 과 f(-1)=2e 로 분해 → 연립 → a, b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a=1$, $b=3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/181-e16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "변곡점의 좌표 (-1, 2e) 를 다른 점으로. 제약: (가) f''(x)=(ax+b-2a)e^{-x} 이므로 변곡점의 x 좌표는 x0=2-b/a — x0 을 먼저 정하고 b=a(2-x0) 으로 역산해야 a, b 가 정수로 떨어짐 (나) y 좌표는 f(x0)=(a·x0+b)e^{-x0} 이라 x0 을 음의 정수로 두면 e 의 양의 거듭제곱이 나와 답이 깔끔함 (다) a=0 이면 f''=be^{-x} 의 부호가 바뀌지 않아 변곡점이 사라지므로 a≠0 을 보장할 것."
    creative: "(1) 분자를 이차식 (ax^2+b)/e^x 으로 올리면 f''=0 이 이차방정식이 되어 변곡점이 둘이고 근과 계수의 관계까지 붙어 ★3~4 (2) 조건을 「변곡점의 x 좌표가 -1 이고 극댓값이 …」로 바꾸면 f' 와 f'' 를 함께 써야 해 I-CON 1개 ★3 (3) 변곡점의 x 좌표만 주면 식이 하나뿐이라 a, b 가 결정되지 않으므로 묻는 대상을 b/a 같은 비로 바꿔야 문항이 성립(★2 유지) (4) 변곡점에서의 접선이 원점을 지난다는 조건으로 바꾸면 조건 해석이 한 겹 늘어 I-EQV 2개 ★3."
```

```yaml
- id: GN-CALC2-181-364
  page: 181
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    함수 $f(x)=ax^2+bx-4\ln x$ 가 $x=2$ 에서 극대이고 곡선 $y=f(x)$ 의 변곡점의 $x$ 좌표가 $\sqrt{2}$ 일 때
    상수 $a$, $b$ 에 대하여 $a+b$ 의 값을 구하는 문항.
  category: "극대 조건 f'(2)=0 · 변곡점 조건 f''(√2)=0 → 연립으로 a, b → a+b"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극값·변곡점 조건을 이용한 미정계수의 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 조건이 각각 하나의 방정식으로 일대일 대응한다 — 「x=2 에서 극대」는 f'(2)=0, 「변곡점의 x 좌표가 √2」는 f''(√2)=0.
    f''(x)=2a+4/x^2 은 변곡점 조건에서 a 를 먼저 결정하고, 그 a 를 f'(2)=0 에 넣으면 b 가 나오는 순서라 연립도 가볍다.
    조건 해석에 갈림길이 없어 절차형. 함정은 ln x 때문에 정의역이 x>0 이라 f''=0 의 음의 해를 버려야 한다는 T-범위 하나.
    통찰 0 · M_total 6 → 확인체크 출발점 ★2 유지.
    [분류 이슈] 미정계수 2개를 역방향으로 결정하는 계열이라 체감은 ★3 쪽이나 통찰 라벨이 붙지 않아 ★2 로 두고 기록만 함.
  tier: star_2
  mechanism_primary: "f'(x)=2ax+b-4/x, f''(x)=2a+4/x^2 → f''(√2)=0 으로 a 결정 → f'(2)=0 으로 b 결정 → a+b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/181-364.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극대가 되는 x 값(2), 변곡점의 x 좌표(√2), ln 항의 계수(-4). 제약: (가) f''(x)=2a+4/x^2 이므로 변곡점의 x 좌표 x1 과 a 는 2a=-4/x1^2 로 묶여 있음 — x1 을 √2, 1, √(2/3) 처럼 두어야 a 가 정수 (나) ln 의 계수를 -k 로 바꾸면 f''=2a+k/x^2 이라 같은 제약이 k 로 옮겨감 (다) 정의역이 x>0 이라 변곡점의 x 좌표는 양수만 취하므로 발문에서 x>0 조건이 유지돼야 함 (라) 변곡점이 존재하려면 a<0 이어야 하고, 그래야 x=2 에서 극대라는 조건과도 어긋나지 않음."
    creative: "(1) 「극대」를 「극솟값이 …이다」로 바꾸면 함숫값 조건이 하나 더 붙어 미지수 3개까지 확장 ★3 (2) a+b 대신 극댓값이나 변곡점의 y 좌표를 묻게 하면 ln 2 가 들어간 값 계산이 추가돼 ★3 (3) 조건을 「x=2 에서 극대가 되도록 하는 a 의 값의 범위」로 바꾸면 I-BW 1개 ★3 (4) f'(2)=0 이 극대의 필요조건일 뿐임을 확인해 부적합한 a 를 기각하게 하면 I-VF 1개 ★3."
```

```yaml
- id: GN-CALC2-181-365
  page: 181
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    함수 $f(x)=ax^3+bx^2+cx$ 에서 곡선 위의 $x=2$ 인 점에서의 접선의 기울기가 $4$ 이고
    변곡점의 좌표가 $(1,\,2)$ 일 때 상수 $a$, $b$, $c$ 의 값을 구하는 문항.
  category: "접선 기울기 f'(2)=4 · 변곡점 좌표 → f''(1)=0 과 f(1)=2 → 세 식 연립"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「변곡점의 좌표가 (1, 2)」를 f''(1)=0 과 f(1)=2 두 식으로 분해해야 미지수 3개에 대한 식이 3개로 갖춰짐 — 접선 조건만으로는 식이 2개뿐이라 결정되지 않음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "변곡점을 이용한 미정계수의 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    미지수 3개에 조건이 겉보기에 둘뿐이라, 변곡점의 「좌표」를 f''(1)=0 과 f(1)=2 로 쪼개 식 세 개를 만드는 것이 골조의 열쇠다(I-EQV d1).
    f''(x)=6ax+2b 에서 b=-3a 가 먼저 나오고, 나머지 두 식에 대입하면 c 와 a 가 차례로 풀리는 구조라 연립 자체는 가볍다.
    상수항이 없어 f(0)=0 이 이미 고정돼 있다는 점도 식의 개수를 맞추는 데 쓰인다.
    통찰 1개 · M_total 7 → 확인체크 출발점 ★2 유지.
    [분류 이슈] 조건 분해가 안 되면 아예 손을 못 대는 문항이라 체감은 ★3 쪽이지만 +1 조건에 못 미쳐 ★2 로 두고 기록만 함.
  tier: star_2
  mechanism_primary: "f'(x)=3ax^2+2bx+c, f''(x)=6ax+2b → f''(1)=0 으로 b=-3a → f(1)=2 와 f'(2)=4 에 대입 → a, b, c"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a=1$, $b=-3$, $c=4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/181-365.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점의 x 값(2)과 기울기(4), 변곡점의 좌표 (1,2). 제약: (가) f''(x0)=0 에서 b=-3a·x0 이 되므로 변곡점의 x 좌표를 정수로 두면 b 가 a 의 정수배로 자동 결정 (나) 상수항이 없어 f(0)=0 이 고정이므로 변곡점의 y 좌표는 a+b+c 로 c 를 정함 — y 좌표를 정수로 두면 c 도 정수 (다) 기울기를 주는 x 값은 변곡점의 x 좌표와 달라야 세 식이 독립 (라) a≠0 이어야 삼차함수이고 변곡점이 존재."
    creative: "(1) 삼차함수의 변곡점이 그래프의 대칭의 중심임을 이용해 f(0)+f(2)=2f(1) 로 한 번에 c 를 잡게 하면 I-SYM 1개 ★3 (2) 상수항 d 를 살려 미지수 4개로 늘리고 조건을 하나 더 주면 연립 부담이 커져 ★3 (3) 「변곡점에서의 접선의 방정식」을 묻는 것으로 바꾸면 한 단계 추가 ★3 (4) 기울기 조건을 「x=2 인 점에서의 접선이 원점을 지난다」로 바꾸면 조건 해석이 한 겹 늘어 I-EQV 2개 ★3."
```

## 표본 판정 요약 (9문)

- ★ 분포: ★1 3 · ★2 6 · ★3 0 · ★4 0 · ★5 0
- 통찰형 2 · 절차형 7 · premium 0
- type_hint 상위: 「곡선의 볼록과 변곡점 — 볼록 구간 조사와 변곡점 좌표」 2 · 「이계도함수의 부호로 곡선의 볼록성 판정(증명형)」 2 · 「변곡점을 이용한 미정계수의 결정」 2 · 「이계도함수의 부호로 볼록 구간 나누기(삼각함수)」 1 · 「이계도함수와 변곡점의 좌표 구하기」 1 · 「극값·변곡점 조건을 이용한 미정계수의 결정」 1
- 그림: 0문
- 통찰 라벨은 I-EQV 두 개(181-e16 · 181-365)뿐이고 둘 다 depth 1 이다. 두 문항 모두 「변곡점의 **좌표**」라는 한 마디를 `f''(x0)=0` 과 `f(x0)=y0` 두 식으로 분해해야 미지수 개수만큼 식이 갖춰진다는 같은 지점에서 통찰이 생긴다. 변곡점의 **x 좌표**만 주어진 181-364 는 조건과 식이 일대일이라 절차형으로 갈렸다 — 이 한 글자 차이가 이 단원에서 ★ 를 가르는 유일한 구조적 갈림길이다.
- 이 단원에는 연습문제 STEP·실력 UP 구역이 없어 벤더 신호의 상한이 ★2(필수)에서 끊기고, 난이도를 올리는 요소가 계산량(합성·몫미분, 소문항 4개)뿐이다. v3.8 은 계산 마찰을 ★ 상승 신호로 쓰지 않으므로 ★3 이상이 하나도 나오지 않았다. 변형으로 ★3 이상을 만들려면 (가) 변곡점의 존재 여부를 검증해 기각하게 하거나(I-VF) (나) 삼차함수 변곡점의 대칭성을 활용하게 하거나(I-SYM) (다) 조건을 범위·부등식으로 주어 역추적하게 하는(I-BW) 설정 변경이 필요하며, 각 블록 `variation_notes.creative` 에 적어 두었다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC2-181-e16 | 역방향 미정계수 결정이라 체감은 ★3 쪽. 통찰 1개(I-EQV d1)·M_total 7 로 +1 조건(통찰 2개 이상 또는 depth 3) 미달이라 ★2 라벨 유지 | ★2 / ★3 |
| GN-CALC2-181-364 | 극대·변곡점 두 조건에서 계수 역결정. 조건과 식이 일대일이라 통찰 라벨이 붙지 않아 ★2 이나 체감은 ★3 쪽 | ★2 / ★3 |
| GN-CALC2-181-365 | 미지수 3개를 변곡점 좌표 분해로 채우는 구조. 조건 분해를 못 하면 착수 자체가 안 되지만 통찰 1개라 ★2 라벨 유지 | ★2 / ★3 |
| GN-CALC2-179-362 | 구역 신호는 ★1(개념원리 익히기)이나 합성·곱미분을 겹친 이계도함수 계산으로 ★2 로 +1(1단 차이 · 참고 기록) | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 type_hint 는 세 쌍이다. ① 「이계도함수의 부호로 곡선의 볼록성 판정(증명형)」(179-359 · 179-360) ② 「곡선의 볼록과 변곡점 — 볼록 구간 조사와 변곡점 좌표」(180-e15 · 180-363) ③ 「변곡점을 이용한 미정계수의 결정」(181-e16 · 181-365).
- ①②③ 중 **①과 ② 는 카탈로그에서 한 유형으로 통합**하는 것이 맞다. 「전 구간에서 부호가 일정함을 보이는 증명형」과 「부호가 바뀌는 점을 찾아 구간을 나누는 조사형」은 같은 도구(f'' 의 부호)를 쓰고, 갈리는 것은 `f''=0` 의 해가 있느냐뿐이다. 함수 종류(지수·로그·삼각·다항·분수)는 유형 안의 난이도 눈금(다항 ★1 → 지수·로그 ★1~2 → 합성·분수 ★2)으로 두면 된다.
- ③ 은 **따로 세워야 한다.** 방향이 역방향이고, 변곡점의 「좌표」가 주어질 때 `f(x0)=y0` 를 함께 세우는 단계가 이 유형의 고유한 오답 지점이기 때문이다. 179-362 처럼 변곡점을 정방향으로 구하는 문항과 같은 유형으로 묶으면 그 오답 지점이 카탈로그에서 사라진다. 181-364(극값 조건이 섞인 경우)는 ③ 의 하위 갈래로 두거나, 단원 19~20(함수의 증가·감소와 극대·극소)의 미정계수 유형과 묶어 「도함수·이계도함수 조건을 이용한 미정계수의 결정」 한 유형으로 세우는 것도 후보.
- 이 단원 9문항만으로는 ★3 이상 슬롯의 base ★ 근거가 없다(전부 ★1~2). 카탈로그 설계 시 단원 22(곡선의 개형)·23(최대·최소) 이후에서 변곡점이 그래프 개형·부등식 증명의 재료로 재등장하는 문항을 함께 모아 base ★ 를 정할 것. 특히 「f''=0 이지만 변곡점이 아닌 경우」(사차함수 중근)를 다루는 문항이 이 범위에는 하나도 없으므로, 카탈로그에 그 반례 유형을 별도 슬롯으로 예약해 둘 필요가 있다.
