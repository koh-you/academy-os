---
name: mechanism-데이터-GN-CALC2-22
description: 개념원리 미적분Ⅱ 22 함수의 그래프(1/1 · 18문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ · 전사본 latex-bank/gn-calc2
  section: 22 함수의 그래프
  unit_code: GN-CALC2-22
  part: "1/1"
  extract_range: "183~187쪽 · 183-e17~187-380"
  total_problems: 18
  unit_total: 18
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (crops.json)
---

# 개념원리 미적분Ⅱ · 22 함수의 그래프 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅱ 183~187쪽, 단원 22 「함수의 그래프」 18문항 전수를 다룬다. 구역은 「필수·발전 예제」 7문(필수 예제 3 + 확인체크 4) · 「연습문제 STEP 1」 5문 · 「연습문제 STEP 2」 5문 · 「연습문제 실력 UP」 1문이고, 벤더 난이도 신호는 구역(필수·발전 예제 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 출발)과 태그(「필수」·「확인체크」)로 주어진다.

단원의 골조는 두 갈래다. 앞쪽 예제·확인체크 7문은 **개형 그리기 절차**(정의역 → 대칭성·절편 → 점근선(극한) → $f'$ 로 증감·극값 → $f''$ 로 오목·변곡점 → 표 → 그래프)를 유리·무리·지수·로그·삼각함수에 반복 적용하는 계열이고, 뒤쪽 연습문제 11문은 그 절차 중 **변곡점 한 항목만 떼어 역방향으로 묻는** 계열(변곡점 좌표·거리·접선, 도함수 그래프 판독, 변곡점 조건으로 미정계수 결정, 변곡점 존재 조건)이다. 그래서 통찰 라벨도 뒤쪽에 몰려 있다 — 특히 $f''=0$ 의 해가 곧 변곡점은 아니라는 **부호 변화 검증**(I-VF)과, 도함수 그래프를 $f$ 의 극값·오목성으로 옮기는 **표현 전환**(I-RT)이 이 단원의 변별 축이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변경)를 채웠다. 그림 문항은 2문(186-373 · 187-376)이며 둘 다 $y=f'(x)$ 의 그래프다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC2-183-e17
  page: 183
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    유리함수 $f(x)=\dfrac{2x}{x^2+1}$ 의 그래프를 그리는 기본 예제.
    대칭성·점근선·극값·변곡점을 모두 조사해 개형을 완성하는 것을 묻는다.
  category: "개형 절차 → 기함수 대칭·x축 점근선 → f' 로 극값 → f'' 로 변곡점 3개"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리·무리함수의 그래프 개형 — 대칭성·점근선·극값·변곡점 조사"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    개형 절차의 표준 시범 문항이다. 정의역은 실수 전체, $f(-x)=-f(x)$ 로 원점 대칭, $x\to\pm\infty$ 에서 $0$ 이라 $x$축이 점근선.
    $f'=\dfrac{2(1-x^2)}{(x^2+1)^2}$ 로 $x=\pm1$ 에서 극값, $f''=\dfrac{4x(x^2-3)}{(x^2+1)^3}$ 로 변곡점 세 개가 나온다.
    절차가 길어 Mₛ 3 이지만 각 단계는 교과서 순서 그대로이고 새 착안이 없다. 통찰 0 · M_total 7 → 필수 예제 구역 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "정의역·기함수 대칭·점근선 조사 → f' 로 극값 ±1 → f'' 로 변곡점 3개 → 증감·오목표 → 개형"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '풀이 참조 (원점에 대하여 대칭이고 $x=-1$에서 극솟값 $-1$, $x=1$에서 극댓값 $1$, 변곡점 $\left(-\sqrt{3},\,-\dfrac{\sqrt{3}}{2}\right)$, $(0,\,0)$, $\left(\sqrt{3},\,\dfrac{\sqrt{3}}{2}\right)$, 점근선 $x$축인 그래프)'
  answer_source: "본문 풀이(그래프)"
  figure: none
  latex: latex-bank/gn-calc2/items/183-e17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 계수(2x → 4x, 3x)와 분모 상수(x^2+1 → x^2+4)를 바꿀 수 있음. 제약: (가) 분자 홀차수·분모 짝차수를 유지해야 원점 대칭이 살아 대칭 조사 단계가 남음 (나) f''=0 이 유리수·간단한 무근호 해를 갖도록 분모 상수를 고를 것(x^2+a 꼴이면 변곡점이 0, ±√(3a) 로 떨어짐) (다) 분모가 항상 양수여야 정의역 제한이 생기지 않음."
    creative: "(1) 분모를 x^2-1 로 바꾸면 수직 점근선 두 개와 정의역 분리가 생겨 ★3 (2) 최댓값·최솟값만 묻게 좁히면 f'' 단계가 빠져 ★1~2 (3) 그래프와 직선 y=k 의 교점 개수를 묻게 하면 개형이 도구가 되고 I-RT 1개가 붙어 ★3 (4) 변곡점 세 점이 한 직선 위에 있는지 확인하게 하면 대칭 활용(I-SYM) ★3."
```

```yaml
- id: GN-CALC2-183-366
  page: 183
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    네 함수의 그래프를 각각 그리는 확인 문항.
    ⑴ $f(x)=\dfrac{3}{x^2+3}$ ⑵ $f(x)=\dfrac{x^2+x+2}{x-1}$ ⑶ $f(x)=x-\sqrt{x-1}$ ⑷ $f(x)=x\sqrt{x+2}$.
  category: "개형 절차 4회 반복 → 우함수 대칭 / 사선 점근선 / 무리함수 정의역 끝점"
  M: {s: 3, k: 3, a: 1, t: 2}
  M_total: 9
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑵ 에서 분자를 분모로 나눠 $x+2+\\dfrac{4}{x-1}$ 로 고쳐 쓰고, 그 대수 형태를 사선 점근선 $y=x+2$ 라는 기하 정보로 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "유리·무리함수의 그래프 개형 — 대칭성·점근선·극값·변곡점 조사"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    같은 개형 절차를 성격이 다른 네 함수에 반복한다. ⑴ 은 우함수 대칭·x축 점근선으로 앞 예제와 같은 틀,
    ⑵ 는 다항 나눗셈으로 사선 점근선을 찾아야 하고(수직 점근선 $x=1$ 까지 두 종류), ⑶⑷ 는 정의역 $x\ge1$·$x\ge-2$ 와
    끝점에서 그래프가 시작한다는 처리(T-범위·T-경계)가 더해진다. 무리함수 미분 정리로 Mₖ 3.
    [분류 이슈] 벤더 태그는 앞 예제와 같은 「확인체크」(★2 출발)지만 소문항 4개에 점근선 세 종류·정의역 끝점이 모두 들어가 체감은 ★3 — 라벨을 ★3 으로 두고 기록한다.
  tier: star_3
  mechanism_primary: "함수별 정의역·대칭 확인 → (다항 나눗셈으로) 점근선 → f' 극값 → f'' 변곡점 → 표 → 개형 4개"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ 풀이 참조 ($x=0$에서 극댓값 $1$, 변곡점 $\left(-1,\,\dfrac{3}{4}\right)$, $\left(1,\,\dfrac{3}{4}\right)$, 점근선 $x$축인 그래프) ⑵ 풀이 참조 ($x=-1$에서 극댓값 $-1$, $x=3$에서 극솟값 $7$, 점근선 $x=1$, $y=x+2$인 그래프) ⑶ 풀이 참조 (점~$(1,\,1)$에서 시작하여 $x=\dfrac{5}{4}$에서 극솟값 $\dfrac{3}{4}$을 갖는 그래프) ⑷ 풀이 참조 (점~$(-2,\,0)$에서 시작하여 $x=-\dfrac{4}{3}$에서 극솟값 $-\dfrac{4\sqrt{6}}{9}$를 갖고 원점을 지나는 그래프)'
  answer_source: "답지(그래프)"
  figure: none
  latex: latex-bank/gn-calc2/items/183-366.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 분모 상수, ⑵ 분자 계수(나눗셈 나머지가 정수로 떨어질 것), ⑶⑷ 근호 안 평행이동량을 바꿀 수 있음. 제약: (가) ⑵ 는 분자 차수 = 분모 차수+1 이어야 사선 점근선이 생기고, 나머지가 0 이면 그냥 일차함수가 되므로 나머지 ≠ 0 (나) ⑶⑷ 는 극값의 x 좌표가 정의역 내부에 오도록 계수를 고를 것(끝점 극값이면 판정 단계가 사라짐) (다) 무리함수 쪽은 f'=0 이 유리수 해를 갖게 할 것."
    creative: "(1) 네 소문항 중 하나만 남기고 「점근선의 개수」만 묻게 하면 ★2 (2) ⑵ 의 사선 점근선과 곡선의 위치 관계(위·아래)를 묻게 하면 나머지 4/(x-1) 의 부호 판단이 붙어 ★3 (3) ⑶ 을 x-√(x-1)=k 의 실근 개수로 바꾸면 개형이 도구가 되고 I-RT·I-MI 로 ★4 (4) 네 그래프 중 변곡점을 갖는 것을 고르게 하면 f'' 부호 변화 검증(I-VF)이 주가 되어 ★3."
```

```yaml
- id: GN-CALC2-184-e18
  page: 184
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    지수·로그함수의 그래프를 그리는 기본 예제.
    ⑴ $f(x)=xe^{-x}$ ⑵ $f(x)=\dfrac{\ln x}{x}$.
  category: "개형 절차 → 정의역·극한으로 점근선 → 곱·몫미분으로 극값 → f'' 로 변곡점"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수·로그함수의 그래프 개형 — 점근선 극한 조사"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 곱미분으로 $f'=(1-x)e^{-x}$, $f''=(x-2)e^{-x}$ 가 바로 나오고 $x\to\infty$ 에서 $0$ 이라 $x$축이 점근선.
    ⑵ 는 정의역 $x>0$ 을 먼저 잡고 $x\to0^+$ 에서 $-\infty$(y축), $x\to\infty$ 에서 $0$(x축) 두 점근선을 조사해야 해 T-범위 함정이 하나 더 있다.
    다만 두 극한 모두 교과서가 앞 단원에서 제시한 표준 결과를 인용하는 단계라 새 착안은 없다. 통찰 0 · M_total 8 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "정의역 확인 → 양끝 극한으로 점근선 → 곱·몫미분으로 f'·f'' → 증감·오목표 → 개형"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 풀이 참조 ($x=1$에서 극댓값 $\dfrac{1}{e}$, 변곡점 $\left(2,\,\dfrac{2}{e^2}\right)$, 점근선 $x$축인 그래프) ⑵ 풀이 참조 (정의역 $\{x\,|\,x>0\}$, $x=e$에서 극댓값 $\dfrac{1}{e}$, 변곡점 $\left(e\sqrt{e},\,\dfrac{3}{2e\sqrt{e}}\right)$, 점근선 $x$축, $y$축인 그래프)'
  answer_source: "본문 풀이(그래프)"
  figure: none
  latex: latex-bank/gn-calc2/items/184-e18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 지수 계수(xe^{-x} → xe^{-2x}, x^2e^{-x})와 ⑵ 의 분모 차수(ln x / x^2)를 바꿀 수 있음. 제약: (가) f'=0·f''=0 이 e 의 정수·반정수 거듭제곱으로 떨어지도록 계수를 고를 것 (나) x→∞ 극한이 0 이 되는 조합을 유지해야 x축 점근선 단계가 남음 (다) 로그 쪽은 진수 조건이 정의역 전체를 바꾸므로 ln x 를 ln(x+1) 로 옮기면 점근선 위치도 함께 옮겨 적을 것."
    creative: "(1) 극댓값만 묻게 좁히면 f'' 단계가 빠져 ★1~2 (2) xe^{-x}=k 의 실근 개수를 묻게 하면 개형이 도구가 되고 I-RT 1개로 ★3 (3) ⑵ 를 이용해 e^π 와 π^e 의 대소를 비교하게 하면 (ln x)/x 의 단조성 활용이라는 I-RT·I-EQV 가 붙어 ★4 (4) 변곡점에서의 접선을 함께 묻게 하면 계산 한 단계 추가로 ★3."
```

```yaml
- id: GN-CALC2-184-367
  page: 184
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    지수·로그함수의 그래프를 그리는 확인 문항.
    ⑴ $f(x)=e^{-x^2}$ ⑵ $f(x)=\ln(x^2+1)^2$.
  category: "합성함수 미분 → 우함수 대칭·점근선 → 극값·변곡점 두 개씩"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수·로그함수의 그래프 개형 — 점근선 극한 조사"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    둘 다 우함수여서 $y$축 대칭을 먼저 잡고 $x\ge0$ 만 조사하면 되는 구조다.
    ⑴ 은 $f'=-2xe^{-x^2}$, $f''=(4x^2-2)e^{-x^2}$ 로 변곡점 $x=\pm\dfrac{1}{\sqrt2}$, $x\to\pm\infty$ 에서 $0$ 이라 x축 점근선.
    ⑵ 는 $\ln(x^2+1)^2=2\ln(x^2+1)$ 로 먼저 정리하면 미분이 짧아지지만, 정리하지 않아도 합성 미분으로 같은 결과가 나와 통찰로 세지 않았다.
    통찰 0 · M_total 7 → 확인체크도 필수 예제와 같은 구역이므로 ★2 유지.
  tier: star_2
  mechanism_primary: "우함수 대칭 확인 → 합성함수 미분으로 f'·f'' → 극값 1개·변곡점 2개 → 극한으로 점근선 → 개형"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 풀이 참조 ($x=0$에서 극댓값 $1$, 변곡점 $\left(-\dfrac{1}{\sqrt{2}},\,\dfrac{1}{\sqrt{e}}\right)$, $\left(\dfrac{1}{\sqrt{2}},\,\dfrac{1}{\sqrt{e}}\right)$, 점근선 $x$축인 그래프) ⑵ 풀이 참조 ($x=0$에서 극솟값 $0$, 변곡점 $(-1,\,\ln 4)$, $(1,\,\ln 4)$인 그래프)'
  answer_source: "답지(그래프)"
  figure: none
  latex: latex-bank/gn-calc2/items/184-367.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 지수 계수(e^{-x^2} → e^{-2x^2}, e^{-x^2/2})와 ⑵ 의 거듭제곱·진수(ln(x^2+1)^2 → ln(x^2+4)^3)를 바꿀 수 있음. 제약: (가) 지수부가 -kx^2 (k>0) 이어야 x축 점근선과 종 모양이 유지됨 (나) 변곡점 x=±1/√(2k) 가 간단한 수로 떨어지도록 k 를 고를 것 (다) 로그 쪽 진수는 항상 양수여야 정의역이 실수 전체로 유지됨."
    creative: "(1) e^{-x^2} 의 변곡점에서의 두 접선의 교점을 묻게 하면 계산 한 단계 추가로 ★3 (2) ⑵ 에서 로그 성질로 먼저 정리하지 않으면 안 되게 진수를 (x^2+1)^2(x^2+4) 로 키우면 I-EQV 1개 ★3 (3) 종 모양 곡선과 직선 y=k 의 교점 개수를 묻게 하면 I-RT 로 ★3 (4) 우함수 대칭을 쓰지 못하도록 e^{-(x-1)^2} 로 평행이동하면 대칭축 판정이 한 단계 늘어 ★3."
```

```yaml
- id: GN-CALC2-185-e19
  page: 185
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    삼각함수를 포함한 $f(x)=x+2\sin x$ 의 그래프를 $0\le x\le 2\pi$ 에서 그리는 기본 예제.
  category: "제한된 구간에서 f'=0·f''=0 의 삼각방정식 해 → 증감·오목표 → 끝점 값 → 개형"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 그래프 개형 — 구간 제한과 삼각방정식 해"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f'=1+2\cos x=0$ 에서 $\cos x=-\dfrac12$, $f''=-2\sin x=0$ 에서 $\sin x=0$ 을 각각 주어진 구간 안에서 모두 찾는 것이 요점이다.
    구간이 $0\le x\le2\pi$ 로 닫혀 있어 끝점 $(0,0)$·$(2\pi,2\pi)$ 값을 따로 적어야 하고, 구간 밖의 해를 버리는 T-범위·T-경계 함정이 둘 있다.
    해를 구하는 과정 자체는 표준 삼각방정식이라 새 착안 없음. 통찰 0 · M_total 8 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "f'=1+2cos x=0 → 극값 두 개 → f''=-2sin x=0 → 변곡점 x=π → 구간 끝점 값 → 개형"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '풀이 참조 ($x=\dfrac{2}{3}\pi$에서 극댓값 $\dfrac{2}{3}\pi+\sqrt{3}$, $x=\dfrac{4}{3}\pi$에서 극솟값 $\dfrac{4}{3}\pi-\sqrt{3}$, 변곡점 $(\pi,\,\pi)$이고 두 점~$(0,\,0)$, $(2\pi,\,2\pi)$를 지나는 그래프)'
  answer_source: "본문 풀이(그래프)"
  figure: none
  latex: latex-bank/gn-calc2/items/185-e19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sin 의 계수(2 → 3, 1/2)와 구간(0~2π → -π~π)을 바꿀 수 있음. 제약: (가) |계수|>1 이어야 f'=1+a cos x 가 부호를 바꿔 극값이 생김 — 계수 1 이면 극값 없이 증가만 하는 다른 문항이 됨 (나) cos x=-1/a 가 특수각이 되도록 계수는 2 나 √2, 2/√3 중에서 (다) 구간 끝점이 특수각이어야 끝점 값을 적을 수 있음."
    creative: "(1) 계수를 1 로 두고 「극값이 없음을 보이시오」로 바꾸면 f'≥0 판정만 남아 ★2 (2) 계수 a 를 미지수로 두고 극값을 가질 조건을 묻게 하면 I-BW·I-VF 로 ★3~4 (3) x+2sin x=k 의 실근 개수를 묻게 하면 개형이 도구가 되고 I-RT 로 ★3 (4) f(x)=x+2sin x 가 일대일대응이 되도록 하는 구간을 묻게 하면 ★3."
```

```yaml
- id: GN-CALC2-185-368
  page: 185
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=\cos x-\sin x$ 의 그래프를 $0\le x\le\pi$ 에서 그리는 확인 문항.
  category: "f'=-sin x-cos x=0 → tan x=-1 → 극솟값 / f''=0 → 변곡점 / 끝점 값"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수의 그래프 개형 — 구간 제한과 삼각방정식 해"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f'=-\sin x-\cos x=0$ 에서 $\tan x=-1$, $f''=-\cos x+\sin x=0$ 에서 $\tan x=1$ 로 각각 해가 하나씩만 나오는 가장 짧은 개형 문항이다.
    식 변형 단계가 4~6 이고 계산은 한 줄이라 M_total 5 — 산식상 「통찰 0·M_total ≤5 → −1」 후보지만,
    $\tan x=\pm1$ 의 해를 주어진 구간 안에서 고르는 판정과 변곡점까지 요구하므로 ★1 로 내리지 않고 구역 출발점 ★2 를 유지한다.
  tier: star_2
  mechanism_primary: "f'=0 → tan x=-1 → x=3π/4 극소 → f''=0 → tan x=1 → 변곡점 π/4 → 끝점 값 → 개형"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '풀이 참조 ($x=\dfrac{3}{4}\pi$에서 극솟값 $-\sqrt{2}$, 변곡점 $\left(\dfrac{\pi}{4},\,0\right)$이고 두 점~$(0,\,1)$, $(\pi,\,-1)$을 지나는 그래프)'
  answer_source: "답지(그래프)"
  figure: none
  latex: latex-bank/gn-calc2/items/185-368.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "sin·cos 의 계수(cos x - sin x → cos x - √3 sin x)와 구간(0~π → 0~2π)을 바꿀 수 있음. 제약: (가) 계수를 바꾸면 f'=0 이 tan x = -a/b 이므로 특수각이 되는 조합(1, √3, 1/√3)만 쓸 것 (나) 구간을 넓히면 극값·변곡점이 두 개씩 생겨 표가 길어짐(★3 쪽) (다) 끝점 값이 특수각 값으로 떨어질 것."
    creative: "(1) 합성 √2 cos(x+π/4) 로 고쳐 쓰고 평행이동으로 개형을 설명하게 하면 I-RT 1개 ★3 (2) 최댓값·최솟값만 묻게 좁히면 ★1 (3) cos x - sin x = k 의 해의 개수를 묻게 하면 ★3 (4) 구간을 0~2π 로 넓혀 변곡점 두 개를 모두 찾게 하면 ★2~3."
```

```yaml
- id: GN-CALC2-185-369
  page: 185
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=(2-\sin x)\sin x$ 의 그래프를 $0\le x\le 2\pi$ 에서 그리는 확인 문항.
  category: "곱미분 → f'=2cos x(1-sin x) / f''=2(2sin x+1)(sin x-1) → 인수별 부호 변화 판정"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$f''=0$ 의 해 중 $\\sin x=1$ 에서 오는 $x=\\dfrac{\\pi}{2}$ 는 인수 $(\\sin x-1)$ 이 항상 $\\le0$ 이라 부호가 바뀌지 않으므로 변곡점에서 기각하고, $\\sin x=-\\dfrac12$ 에서 오는 두 해만 남김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각함수의 그래프 개형 — 구간 제한과 삼각방정식 해"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $f'=2\cos x(1-\sin x)$ 에서 $1-\sin x\ge0$ 이므로 증감은 $\cos x$ 의 부호만으로 갈리고,
    $f''=2(2\sin x+1)(\sin x-1)$ 에서 $\sin x=1$ 은 해이지만 부호가 바뀌지 않아 변곡점이 아니다 — 이 기각 단계가 이 문항의 전부다.
    답에 변곡점이 $\dfrac{7}{6}\pi$·$\dfrac{11}{6}\pi$ 두 개만 있는 이유가 그것이다.
    확인체크 ★2 출발이지만 사후 검증(I-VF d2) 1개 + M_total 8 로 한 단 올려 ★3.
  tier: star_3
  mechanism_primary: "곱미분 → f'=2cos x(1-sin x) 로 극값 → f''=2(2sin x+1)(sin x-1)=0 의 해 중 부호 변화 있는 것만 변곡점 → 개형"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '풀이 참조 ($x=\dfrac{\pi}{2}$에서 극댓값 $1$, $x=\dfrac{3}{2}\pi$에서 극솟값 $-3$, 변곡점 $\left(\dfrac{7}{6}\pi,\,-\dfrac{5}{4}\right)$, $\left(\dfrac{11}{6}\pi,\,-\dfrac{5}{4}\right)$이고 세 점~$(0,\,0)$, $(\pi,\,0)$, $(2\pi,\,0)$을 지나는 그래프)'
  answer_source: "답지(그래프)"
  figure: none
  latex: latex-bank/gn-calc2/items/185-369.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수 2 를 바꿀 수 있음((a-sin x)sin x). 제약: (가) a>1 이어야 f' 의 인수 (a/2 - sin x) 가 부호를 바꾸지 않아 '중근이지만 변곡점이 아닌' 구조가 유지됨 — a<1 이면 극값 개수 자체가 달라짐 (나) f''=0 이 sin x = -(a-…)/… 형태에서 특수각(-1/2, -√3/2)으로 떨어지도록 a 를 고를 것 (다) 구간은 한 주기(0~2π)를 유지해야 변곡점 두 개가 모두 보임."
    creative: "(1) sin x=t 로 치환해 t 의 이차함수 (2-t)t 로 보고 최대·최소만 묻게 하면 I-RT 1개 ★2~3 (2) 변곡점의 개수만 묻게 하면 부호 변화 검증이 주가 되어 ★3 유지 (3) (2-sin x)cos x 로 바꾸면 f'·f'' 의 인수 구조가 달라져 기각 단계가 사라지고 ★2 (4) 극값과 변곡점 좌표로 넓이·거리를 묻는 뒷단을 붙이면 ★4."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC2-186-370
  page: 186
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    곡선 $y=e^x(x^2+4x+2)$ 가 위로 볼록한 구간이 $(a,\,b)$ 일 때 $b-a$ 의 최댓값.
  category: "위로 볼록 ⟺ y''<0 → 곱미분 두 번 → 이차부등식 해 구간의 길이"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "볼록 구간과 변곡점 좌표 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    곱미분을 두 번 해 $y''=e^x(x^2+8x+12)=e^x(x+2)(x+6)$ 을 얻고, $e^x>0$ 이므로 부호는 이차식만으로 결정된다.
    위로 볼록 구간은 $-6<x<-2$ 이고 $b-a$ 의 최댓값은 그 구간 전체의 길이 4.
    「최댓값」이라는 발문은 $(a,b)$ 가 볼록 구간의 부분구간일 수 있다는 뜻이지만, 답은 결국 전체 구간 길이라 추가 분기가 생기지 않는다.
    통찰 0 · M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "y'' = e^x(x+2)(x+6) → e^x>0 이므로 이차식 부호만 판정 → 볼록 구간 (-6,-2) → 길이 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/186-370.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식 계수(x^2+4x+2)를 바꿀 수 있음. 제약: (가) y''=e^x(x^2+(b+2)x+(b+c)) 꼴이 되므로 최종 이차식이 서로 다른 두 실근(정수)을 갖도록 역산해서 계수를 정할 것 (나) 판별식>0 이 아니면 볼록 구간 자체가 없어져 문항이 성립하지 않음 (다) 답이 두 근의 차이므로 근이 정수면 답도 정수."
    creative: "(1) 변곡점의 x 좌표의 합·곱을 묻게 하면 근과 계수의 관계가 붙어 ★2 (2) 계수를 미지수로 두고 볼록 구간의 길이가 주어진 값이 되도록 하는 상수를 묻게 하면 I-BW 1개 ★3 (3) e^x 대신 e^{-x} 나 e^{2x} 를 곱하면 y'' 의 이차식이 달라져 같은 골조로 수치만 바뀜 (4) 아래로 볼록한 구간을 묻게 하면 부등식 방향만 뒤집혀 ★2 유지."
```

```yaml
- id: GN-CALC2-186-371
  page: 186
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    곡선 $y=\dfrac{1}{x^2+1}$ 의 두 변곡점 사이의 거리.
  category: "몫미분 두 번 → f''=0 의 두 해 → 두 점의 좌표 → 거리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "볼록 구간과 변곡점 좌표 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $y'=\dfrac{-2x}{(x^2+1)^2}$, $y''=\dfrac{2(3x^2-1)}{(x^2+1)^3}$ 에서 변곡점의 $x$ 좌표는 $\pm\dfrac{1}{\sqrt3}$ 이고 두 점의 $y$ 좌표는 우함수라 같다.
    따라서 거리는 $x$ 좌표의 차 $\dfrac{2}{\sqrt3}$ 로 끝난다 — 거리 공식을 세워도 같은 값이므로 대칭 활용을 통찰로 세지 않았다.
    몫미분 두 번의 계산이 부담의 전부. 통찰 0 · M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "몫미분 2회 → y''=2(3x^2-1)/(x^2+1)^3=0 → x=±1/√3 (y 같음) → 거리 = 2/√3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{2\sqrt{3}}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/186-371.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 상수(x^2+1 → x^2+3, x^2+4)와 분자 상수를 바꿀 수 있음. 제약: (가) 분모가 x^2+a (a>0) 꼴이어야 우함수 대칭과 변곡점 두 개가 유지됨 (나) 변곡점 x=±√(a/3) 이 간단히 떨어지도록 a 를 3 의 배수로 두면 답이 깔끔함 (다) 분자를 x 의 홀수차로 바꾸면 기함수가 되어 변곡점이 세 개로 늘어남(다른 문항)."
    creative: "(1) 두 변곡점과 극대점이 이루는 삼각형의 넓이를 묻게 하면 좌표 계산이 늘어 ★3 (2) 두 변곡점에서의 접선의 교점을 묻게 하면 접선 두 개 계산으로 ★3 (3) 분모를 x^2+a 로 두고 변곡점 사이의 거리가 주어진 값이 되는 a 를 묻게 하면 I-BW 1개 ★3 (4) 변곡점의 y 좌표가 같음을 대칭으로 설명하게 하면 I-SYM 1개 ★3."
```

```yaml
- id: GN-CALC2-186-372
  page: 186
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    곡선 $y=e^x-e^{-x}+1$ 의 변곡점에서의 접선의 방정식.
  category: "y''=0 → 변곡점 좌표 → y' 로 기울기 → 접선의 방정식"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "변곡점에서의 접선의 방정식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $y''=e^x-e^{-x}=0$ 에서 $e^{2x}=1$, 즉 $x=0$ 이고 변곡점은 $(0,1)$.
    $y'=e^x+e^{-x}$ 이므로 기울기 $y'(0)=2$, 접선은 $y=2x+1$ — 세 줄이면 끝난다.
    통찰 0 · M_total 5 이므로 v3.8 산식의 −1 조건에 정확히 해당해 STEP 1 출발점 ★2 에서 한 단 내렸다.
  tier: star_1
  mechanism_primary: "y''=e^x-e^{-x}=0 → x=0 → 변곡점 (0,1) → y'(0)=2 → y=2x+1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=2x+1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/186-372.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항(+1)과 지수의 계수(e^x - e^{-x} → e^{2x} - e^{-2x}, 2e^x - e^{-x})를 바꿀 수 있음. 제약: (가) y''=0 이 지수방정식으로 풀려 x 가 간단한 수(0, ±ln2)로 떨어지도록 계수를 고를 것 (나) 두 지수항의 부호가 반대여야 y''=0 에 해가 생김 — 같은 부호면 변곡점이 없어짐 (다) 상수항은 변곡점의 y 좌표만 평행이동시키므로 자유롭게 바꿔도 골조가 유지됨."
    creative: "(1) 접선이 x 축·y 축과 만나는 점으로 삼각형의 넓이를 묻게 하면 한 단계 늘어 ★2 (2) 계수를 미지수로 두고 변곡점에서의 접선이 주어진 직선과 평행하도록 하는 상수를 묻게 하면 I-BW 1개 ★3 (3) 2e^x - e^{-x} 처럼 계수를 비대칭으로 두면 변곡점의 x 가 ln 값이 되어 계산이 늘고 ★2 (4) 변곡점에서의 접선이 곡선과 다시 만나지 않음을 보이게 하면 ★4."
```

```yaml
- id: GN-CALC2-186-373
  page: 186
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    사차함수 $y=f(x)$ 의 도함수 $y=f'(x)$ 의 그래프(삼차곡선 · $x=a$ 에서 $x$축을 지나고 $x=b$ 에서 $x$축에 접하며 위로 볼록해짐)가 주어졌을 때,
    곡선 $y=f(x)$ 의 변곡점의 $x$ 좌표를 모두 구하는 문항.
  category: "변곡점 ⟺ f'' 부호 변화 ⟺ f' 의 극점 → 주어진 f' 그래프에서 극소·극대의 x 좌표 읽기"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "식이 없는 그래프 정보를 「f'' 의 부호 변화 = f' 의 증가·감소가 바뀌는 곳 = f' 그래프의 극점」으로 옮겨, 기하 그림에서 대수 조건을 읽어 냄"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "도함수 y=f'(x) 의 그래프에서 f 의 극값·변곡점 읽기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $f$ 의 변곡점은 $f''$ 의 부호가 바뀌는 곳이고, $f''$ 는 $f'$ 의 도함수이므로 그림에서 $y=f'(x)$ 가 극값을 갖는 $x$ 를 찾으면 된다.
    그림의 삼차곡선은 $x=0$ 에서 극소, $x=b$ 에서 극대이므로 변곡점의 $x$ 좌표는 $0$ 과 $b$.
    함정은 $x$축과 만나는 $x=a$·$x=b$ 를 변곡점으로 착각하는 것(그곳은 $f$ 의 극값 후보다)과, $f'$ 가 $x$축에 접하는 $b$ 가 극값이면서 동시에 $f'=0$ 인 점이라는 이중 성격이다.
    식이 전혀 없는 일반 함수 추상(Mₐ 3) + 표현 전환 통찰(I-RT d2) → STEP 1 출발점 ★2 에서 한 단 올려 ★3.
  tier: star_3
  mechanism_primary: "변곡점 = f'' 부호 변화 = f' 그래프의 극점 → 그림에서 극소 x=0·극대 x=b 읽기"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$0$, $b$'
  answer_source: "답지"
  figure: "crop:fig-186-373.png"
  latex: latex-bank/gn-calc2/items/186-373.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 거의 없는 그림 문항이라 바꿀 수 있는 것은 그림의 라벨 위치(a·b 의 좌우 관계와 극점이 y축 위에 오는지)뿐이다. 제약: (가) 라벨 a·b 와 원점 O 의 위치 관계를 바꾸면 답 표기도 함께 바꿔야 함 (나) f 가 사차함수라는 조건과 f' 가 삼차곡선이라는 그림이 일치해야 함 (다) f' 가 x축에 접하는 점을 없애면 함정 한 겹이 사라짐."
    creative: "(1) 같은 그림으로 f 의 극값의 개수를 묻게 하면 부호 변화 판정(접하는 b 는 극값 아님)이 주가 되어 I-VF 가 붙고 ★3 (2) f 의 개형을 그리게 하면 증감·오목을 모두 종합해 ★4 (3) f' 대신 f'' 의 그래프를 주고 변곡점을 묻게 하면 한 층 내려와 ★2 (4) 그림에 f(0) 같은 수치를 얹어 f 의 식을 결정하게 하면 I-BW 가 붙어 ★4."
```

```yaml
- id: GN-CALC2-186-374
  page: 186
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $f(x)=a\sin x+b\cos x-x$ 가 $x=-\dfrac{\pi}{2}$ 에서 극대이고 $\left(\dfrac{\pi}{3},\,f\left(\dfrac{\pi}{3}\right)\right)$ 가 변곡점일 때 $f'\left(\dfrac{\pi}{6}\right)$ 의 값.
  category: "극대 → f'=0 / 변곡점 → f''=0 두 조건으로 상수 a·b 결정 → f' 에 대입"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "변곡점·극값 조건으로 미정계수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f'=a\cos x-b\sin x-1$, $f''=-a\sin x-b\cos x$ 를 만들고 두 조건을 각각 대입하면 $b$ 는 $f'(-\frac\pi2)=0$ 에서, $a$ 는 $f''(\frac\pi3)=0$ 에서 한 번에 떨어진다(연립할 필요도 없다).
    구한 $a$, $b$ 를 $f'$ 에 넣고 특수각 값을 대입하는 것이 마지막 단계.
    극대·변곡점을 $f'=0$·$f''=0$ 으로 옮기는 것은 표준 미정계수 절차라 통찰로 세지 않았다(스키마 §2.2 I-BW 판별의 제외 항목).
    함정은 $f'=0$ 이 극대의 필요조건일 뿐이라는 점(T-범위)과 음의 각의 삼각비 부호(T-부호) 둘. 통찰 0 · M_total 8 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "f'(-π/2)=0 → b=1 → f''(π/3)=0 → a 결정 → f'(π/6) 에 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/186-374.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건을 주는 각(-π/2, π/3)과 묻는 각(π/6), -x 항의 계수를 바꿀 수 있음. 제약: (가) 두 조건의 각은 sin·cos 중 하나가 0 이 되는 각(0, ±π/2, π)을 하나 포함해야 a·b 가 연립 없이 분리됨 (나) 나머지 각은 특수각이어야 a 가 √3 계수로 깔끔히 떨어짐 (다) 묻는 각도 특수각일 것 (라) -x 의 계수를 바꾸면 f'(-π/2)=0 에서 나오는 b 값이 그만큼 달라짐."
    creative: "(1) 극대라는 조건을 「극값을 갖는다」로 약화하면 극대·극소 판정을 따로 해야 해 I-VF 1개 ★3 (2) a·b 를 구한 뒤 f 의 개형이나 극댓값을 묻게 하면 뒷단이 붙어 ★3 (3) 두 조건을 모두 변곡점 조건으로 주면 f''=0 두 개가 연립이 되어 계산만 늘고 ★2 유지 (4) a·b 가 정수라는 조건만 주고 가능한 (a,b) 를 모두 찾게 하면 I-MI·I-VF 로 ★4."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC2-186-375
  page: 186
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    정의역이 $\{x\,|\,0<x<2\pi\}$ 인 $f(x)=\ln(a\cos x+2)$ 의 그래프가 $x$축에 접할 때 변곡점의 $y$ 좌표.
  category: "x축에 접함 ⟺ 진수의 최솟값이 1 → 상수 a 결정 → f''=0 → 변곡점의 y 좌표"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「곡선이 $x$축에 접한다」를 $f=0$ 과 $f'=0$ 이 동시에 성립, 즉 진수 $a\\cos x+2$ 의 극값이 $1$ 이라는 조건으로 옮김(정의역 안에서 극값을 갖는 $a$ 의 부호까지 따져야 함)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곡선이 x축에 접할 조건 → 변곡점 좌표"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접한다는 조건을 「$\ln(\cdot)=0$ 이 되는 점에서 기울기도 0」, 곧 진수의 극값이 정확히 1 이라는 조건으로 옮기는 것이 관문이다.
    열린구간 $0<x<2\pi$ 안에서 $\cos x$ 가 극값을 갖는 곳은 $x=\pi$ 뿐이므로 $-a+2=1$ 에서 $a=1$ 이 정해진다($a<0$ 인 경우의 후보 $x=0,2\pi$ 는 정의역 밖이라 버려진다).
    그 뒤 $f''$ 의 분자가 $-(1+2\cos x)$ 로 정리돼 $\cos x=-\dfrac12$, 변곡점의 $y$ 좌표는 $\ln\dfrac32$.
    조건의 동치 변환(I-EQV d2) 1개 · M_total 9 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "x축에 접함 → 진수 acos x+2 의 극값=1 → 정의역 안 극점 x=π 에서 a=1 → f''=0 → cos x=-1/2 → y=ln(3/2)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\ln\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/186-375.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수의 상수항(+2)과 정의역 구간을 바꿀 수 있음. 제약: (가) 상수항 c 에 대해 접할 조건은 c-|a|=1 이므로 |a|=c-1 이 양수가 되도록 c>1 (나) 진수가 정의역 전체에서 양수여야 함(|a|<c) (다) f''=0 이 특수각으로 떨어지도록 c 를 고를 것 — c=2 에서 cos x=-1/2 로 떨어짐 (라) 정의역을 닫힌구간으로 바꾸면 끝점 극값 때문에 a<0 후보가 살아나 답이 갈림."
    creative: "(1) 접하는 점의 좌표를 묻게 하면 뒷단이 짧아져 ★2 (2) x 축에 접할 조건 대신 「최솟값이 ln(1/2)」처럼 값을 직접 주면 동치 변환이 사라져 ★2 (3) 정의역을 실수 전체로 넓혀 a 의 부호 두 경우를 모두 살리면 I-MI·I-VF 가 붙어 ★4 (4) 변곡점 두 개 사이의 거리를 묻게 하면 좌표 계산이 늘어 ★3~4."
```

```yaml
- id: GN-CALC2-187-376
  page: 187
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    미분가능한 $y=f(x)$ 의 도함수 $y=f'(x)$ 의 그래프(구간 $(a,\,h)$ 에서 $x$축을 세 번 지르고 $x=e$ 에서 접하며 $b$·$d$·$e$·$f$ 에서 극값)가 주어졌을 때,
    보기 ㄱ(극값 4개) ㄴ(구간 $(b,\,d)$ 에서 아래로 볼록) ㄷ(변곡점 4개) 중 옳은 것을 고르는 문항.
  category: "f' 그래프 판독 → 극값은 f' 의 부호 변화 / 볼록은 f' 의 증가 / 변곡점은 f' 의 극점"
  M: {s: 3, k: 1, a: 3, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "한 장의 $f'$ 그래프를 세 가지 대수 조건(부호 변화 · 증가 구간 · 극점)으로 각각 옮겨 읽어야 보기 세 개를 모두 판정할 수 있음"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$x=e$ 에서 $f'=0$ 이지만 부호가 바뀌지 않아 극값 후보에서 기각(ㄱ 이 거짓) — 반대로 변곡점 판정에서는 극점이므로 살아남아 ㄷ 이 참이 됨"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "도함수 y=f'(x) 의 그래프에서 f 의 극값·변곡점 읽기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    같은 그림에서 세 가지를 다르게 읽어야 한다. ㄱ 은 $f'$ 의 부호 변화 횟수 — $x=e$ 는 $x$축에 접하기만 해 부호가 안 바뀌므로 극값은 3개, 거짓.
    ㄴ 은 $(b,d)$ 에서 $f'$ 이 증가하므로 $f''>0$, 아래로 볼록 — 참.
    ㄷ 은 $f'$ 의 극점이 $b,\,d,\,e,\,f$ 넷이므로 변곡점 4개 — 참.
    「$f'=0$ 이지만 극값이 아닌 점이 변곡점에서는 살아난다」는 대비가 이 문항의 핵심이고, 이를 놓치면 ㄱ·ㄷ 을 반대로 고른다.
    식 없는 추상(Mₐ 3) · 표현 전환 + 사후 검증 통찰 2개 · M_total 9 → STEP 2 출발점 ★3 에서 한 단 올려 ★4(저노출 유형 RT·VF 보유).
  tier: star_4
  mechanism_primary: "f' 그래프 → 부호 변화 3회(극값 3개, ㄱ 거짓) / (b,d) 에서 f' 증가(ㄴ 참) / f' 의 극점 4개(ㄷ 참)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "ㄴ, ㄷ"
  answer_source: "답지"
  figure: "crop:fig-187-376.png"
  latex: latex-bank/gn-calc2/items/187-376.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림 문항이라 바꿀 수 있는 것은 보기에 쓰는 개수(4개 → 3개)와 구간 라벨 조합뿐이다. 제약: (가) 그림에서 f' 이 x축에 접하는 점이 반드시 하나 있어야 극값 개수와 변곡점 개수가 어긋나는 구조가 유지됨 (나) 보기 ㄴ 의 구간은 f' 이 단조증가하는 구간 전체 안에 들어가야 함 (다) 개수를 바꾸면 그림의 극점 수도 함께 고쳐야 하므로 그림과 보기를 한 쌍으로 관리할 것."
    creative: "(1) 보기를 f 의 개형 선택형으로 바꾸면 종합 판단이 되어 ★4 유지 (2) f'' 의 그래프를 주고 f 의 변곡점·오목을 묻게 하면 한 층 단순해져 ★3 (3) f'(x) 그래프에 넓이 정보를 얹어 f 의 대소(f(c) vs f(g))를 묻게 하면 정적분 해석이 붙어 I-XU 로 ★5 후보 (4) 접하는 점을 없앤 그림으로 바꾸면 검증 단계가 사라져 ★3."
```

```yaml
- id: GN-CALC2-187-377
  page: 187
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    곡선 $y=\left(\ln\dfrac{1}{2ax}\right)^2$ 의 변곡점이 직선 $y=4x$ 위에 있을 때 양수 $a$ 의 값.
  category: "로그 성질로 정리 → 합성·곱미분 두 번 → 변곡점 좌표를 a 로 표현 → 직선 위 조건"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "$\\ln\\dfrac{1}{2ax}=-\\ln(2a)-\\ln x$ 로 먼저 풀어써서 제곱·몫의 합성 미분을 $t=\\ln x$ 에 대한 이차식 미분으로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "변곡점·극값 조건으로 미정계수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $u=\ln\dfrac{1}{2ax}$ 로 두면 $y=u^2$, $u'=-\dfrac1x$ 이므로 $y'=-\dfrac{2u}{x}$, $y''=\dfrac{2(1+u)}{x^2}$ 가 되어 변곡점은 $u=-1$ 인 곳이다.
    거기서 $y=u^2=1$ 이고 $\dfrac{1}{2ax}=e^{-1}$ 에서 $x=\dfrac{e}{2a}$ — 변곡점 좌표가 $a$ 의 식으로 나온다.
    이 점을 $y=4x$ 에 넣으면 $a$ 가 결정된다. 로그를 먼저 풀어쓰지 않으면 미분이 지저분해져 I-EQV d1 로 한 개 세었다.
    진수 조건 $x>0$ 과 양수 $a$ 단서가 T-범위 함정. 통찰 1 · M_total 10 → STEP 2 출발점 ★3 유지(계산 부담만으로 ★4 로 올리지 않음).
  tier: star_3
  mechanism_primary: "u=ln(1/2ax) → y=u^2 → y''=2(1+u)/x^2=0 → u=-1 → 변곡점 (e/2a, 1) → y=4x 에 대입 → a"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2e$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/187-377.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진수의 계수(1/(2ax) → 1/(ax), 1/(3ax))와 직선의 기울기(4)를 바꿀 수 있음. 제약: (가) 변곡점의 y 좌표는 계수와 무관하게 1 로 고정되므로 직선은 반드시 원점을 지나는 y=mx 꼴이어야 a 가 유일하게 결정됨 (나) 직선 기울기 m 을 바꾸면 a=me/2 로 답이 e 의 유리수배로 유지됨 (다) a>0 조건을 빼면 진수 조건과 충돌하므로 유지할 것."
    creative: "(1) 변곡점이 직선 y=x+k 위에 있게 하면 x 좌표까지 연립해야 해 계산이 늘고 ★3~4 (2) 변곡점에서의 접선의 방정식을 묻게 하면 y'(e/2a) 계산이 붙어 ★3 (3) y=(ln x)^2 로 단순화해 변곡점만 묻게 하면 ★2 (4) 곡선과 직선이 변곡점에서 접하도록 조건을 강화하면 기울기까지 맞춰야 해 I-CON 이 붙고 ★4."
```

```yaml
- id: GN-CALC2-187-378
  page: 187
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    「삼차함수의 그래프는 변곡점에 대하여 대칭」이라는 사실이 주어진 상태에서,
    $f(x)=x^3+ax^2+b$ 의 그래프가 점 $(1,\,0)$ 에 대하여 대칭일 때 극댓값과 극솟값의 곱.
  category: "대칭점 = 변곡점 → f''(1)=0 과 f(1)=0 으로 a·b 결정 → 극값 두 개의 곱"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「점 $(1,0)$ 에 대하여 대칭」을 「변곡점이 $(1,0)$ 이다」, 곧 $f''(1)=0$ 과 $f(1)=0$ 두 식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "변곡점·극값 조건으로 미정계수 결정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    발문이 「삼차함수는 변곡점에 대하여 대칭」이라는 사실을 직접 알려 주므로 학생이 할 일은 그 사실을 $f''(1)=0$·$f(1)=0$ 으로 번역하는 것뿐이다.
    $f''=6x+2a$ 에서 $a=-3$, $f(1)=0$ 에서 $b=2$ 가 나오고, $f'=3x^2-6x=0$ 의 $x=0,\,2$ 에서 극값을 구해 곱하면 된다.
    [분류 이슈] 동치 변환의 결정적 힌트가 발문에 이미 있어 체감은 ★2 쪽이지만, 벤더 구역은 STEP 2(★3) — 라벨은 ★3 으로 두고 기록한다.
  tier: star_3
  mechanism_primary: "대칭점=변곡점 → f''(1)=0 → a=-3 → f(1)=0 → b=2 → f'=0 의 x=0,2 에서 극값 2·(-2) → -4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/187-378.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대칭점의 좌표((1,0) → (2,1), (-1,3))와 삼차항의 계수를 바꿀 수 있음. 제약: (가) 대칭점의 x 좌표 p 에 대해 a=-3p 이므로 a 가 정수가 되도록 p 를 정수로 둘 것 (나) 대칭점의 y 좌표는 극댓값·극솟값의 평균이므로, 곱을 묻는다면 (대칭점 y)^2 - (반폭)^2 형태로 답이 나오게 수를 고를 것 (다) x^2 항을 남겨야 변곡점이 원점에서 벗어남."
    creative: "(1) 대칭 사실을 발문에서 빼면 학생이 스스로 「대칭점=변곡점」을 떠올려야 해 I-EQV d2 로 올라가 ★4 (2) 극댓값과 극솟값의 합을 묻게 하면 대칭성만으로 2×(대칭점 y) 로 즉답이라 I-SYM 이 부각되고 ★3 유지 (3) 극값의 차를 묻게 하면 실제 계산이 필요해 ★3 (4) 사차함수로 바꾸면 변곡점 대칭 사실이 성립하지 않아 문항이 무너짐 — 삼차 고정."
```

```yaml
- id: GN-CALC2-187-379
  page: 187
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    곡선 $y=ax^2+\cos 2x$ 가 변곡점을 갖도록 하는 실수 $a$ 의 값의 범위.
  category: "y''=2a-4cos 2x 의 부호가 바뀔 조건 → cos 2x=a/2 가 -1<a/2<1 일 때만"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「변곡점을 갖는다」를 「$y''=0$ 이 해를 갖는다」가 아니라 「$\\cos 2x=\\dfrac{a}{2}$ 를 만족시키는 $x$ 의 좌우에서 $y''$ 의 부호가 바뀐다」로 옮김"
    - step: 2
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$a=\\pm2$ 는 $y''=0$ 의 해가 있음에도 $\\cos 2x$ 의 최대·최소에서 접하기만 해 부호가 바뀌지 않으므로 기각 — 등호를 빼야 답이 맞음"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "변곡점을 가질 조건 — 계수의 범위"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $y''=2a-4\cos2x$ 이므로 $y''=0$ 은 $\cos2x=\dfrac{a}{2}$ 이고, 해가 존재할 조건은 $-1\le\dfrac{a}{2}\le1$ 이다.
    그러나 등호에서는 $\cos2x$ 가 그 값을 최대·최소로 한 번 닿기만 해 $y''$ 의 부호가 바뀌지 않으므로 변곡점이 아니다 — 답이 $-2<a<2$ 인 이유가 그 기각이다.
    [분류 이슈] 통찰 2개(I-EQV·I-VF d2)로 산식상 +1(★4) 후보지만, 풀이가 세 줄이고 M_total 7 이라 STEP 2 출발점 ★3 을 유지했다. 후보 ★3/★4.
  tier: star_3
  mechanism_primary: "y''=2a-4cos2x=0 → cos2x=a/2 → 해 존재 + 부호 변화까지 요구 → 등호 제외 → -2<a<2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-2<a<2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/187-379.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항 계수 위치와 삼각항의 진동수·진폭(cos 2x → 3cos x, 2cos 3x)을 바꿀 수 있음. 제약: (가) y'' 에서 상수항과 삼각항이 각각 2a 와 진폭 k 로 갈리므로 답은 |a|<k/2 꼴 — 진폭을 바꾸면 경계값도 함께 바뀜 (나) 삼각항의 진동수는 답 범위에 영향을 주지 않지만 미분 계수에는 영향을 주므로 계산을 맞출 것 (다) a 를 양수로 제한하면 절댓값 없이 0<a<2 가 되어 함정이 절반 사라짐."
    creative: "(1) 「변곡점을 갖지 않도록」으로 뒤집으면 여집합 판정이 되어 경계 포함 여부가 반대가 되고 ★3 유지 (2) 변곡점의 개수가 주어진 구간에서 정확히 두 개가 되도록 하는 a 를 묻게 하면 구간 제한이 겹쳐 ★4 (3) ax^2 를 ax^3 으로 바꾸면 y'' 이 일차식+삼각항이 되어 해 존재 판정이 그래프 비교로 바뀌고 I-RT 가 추가돼 ★4 (4) 등호 경우를 따로 설명하게 하는 서술형으로 만들면 검증 통찰이 전면에 나와 ★4."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC2-187-380
  page: 187
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    $f(x)=e^{-2x^2}$ 에 대하여 보기 ㄱ($x=0$ 에서 극솟값 1) ㄴ($x$축과 만나지 않음)
    ㄷ($\left(-\dfrac12,\,\dfrac12\right)$ 에서 위로 볼록) ㄹ(두 변곡점에서의 접선의 기울기의 곱이 $-4$) 중 옳은 것을 고르는 종합 문항.
  category: "개형 전 항목(극값·치역·오목 구간·변곡점 접선 기울기)을 보기별로 계산해 참·거짓 판정"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 4
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ㄹ 은 변곡점 $x=\\pm\\dfrac12$ 에서의 기울기 $\\mp2e^{-1/2}$ 의 곱이 $-4e^{-1}$ 이라 $-4$ 가 아님을 끝까지 계산해야 기각됨 — 계수만 보고 참으로 넘기면 틀림"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "함수의 그래프 성질 종합 판정(보기형)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $f'=-4xe^{-2x^2}$, $f''=4(4x^2-1)e^{-2x^2}$ 에서 $x=0$ 은 극대(ㄱ 거짓 — 극소로 오독하기 쉬움),
    지수함수는 항상 양수라 $x$축과 만나지 않고(ㄴ 참), $f''<0$ 인 구간이 정확히 $-\dfrac12<x<\dfrac12$(ㄷ 참),
    변곡점에서의 기울기 곱은 $-4e^{-1}$ 이라 $-4$ 가 아니다(ㄹ 거짓).
    보기 넷이 개형 절차의 서로 다른 항목을 하나씩 찔러 오고, 마지막 보기는 $e$ 인자를 빠뜨리면 그대로 오답이 되는 검증형이다.
    실력 UP 구역(★4 출발) · 통찰 I-VF d2 1개 · M_total 8 → ★4 유지(저노출 유형 VF 보유).
  tier: star_4
  mechanism_primary: "f'=-4xe^{-2x^2}·f''=4(4x^2-1)e^{-2x^2} → 극대(ㄱ 거짓)·치역 양수(ㄴ)·볼록 구간(ㄷ)·변곡점 접선 기울기 곱 -4/e(ㄹ 거짓)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "ㄴ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/187-380.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수의 계수(-2x^2 → -x^2, -4x^2)와 보기 ㄷ 의 구간·보기 ㄹ 의 값을 바꿀 수 있음. 제약: (가) f(x)=e^{-kx^2} 이면 변곡점은 x=±1/√(2k), 기울기 곱은 -2k/e 이므로 세 수치를 한꺼번에 고쳐야 함 (나) ㄷ 의 구간은 변곡점 사이 구간과 정확히 일치시켜야 참이 됨 (다) ㄹ 의 값을 e 인자를 포함한 올바른 값으로 주면 참이 되어 답 조합이 바뀜."
    creative: "(1) 보기 ㄹ 을 참으로 바꾸고 답 조합을 ㄴ,ㄷ,ㄹ 로 만들면 검증 통찰은 유지되면서 함정 방향만 바뀜(★4 유지) (2) 개형을 직접 그리게 하는 서술형으로 바꾸면 절차형 ★3 (3) 곡선 y=f(x) 와 두 변곡점에서의 접선으로 둘러싸인 부분을 묻게 하면 적분이 붙어 I-XU ★5 후보 (4) f(x)=e^{-2x^2} 와 직선 y=k 의 교점 개수를 보기로 넣으면 I-RT 가 추가돼 ★4~5."
```

## 표본 판정 요약 (18문)

- ★ 분포: ★1 1 · ★2 8 · ★3 7 · ★4 2 · ★5 0
- 통찰형 9 · 절차형 9 · premium 0
- type_hint 상위 5: 「삼각함수의 그래프 개형 — 구간 제한과 삼각방정식 해」 3 · 「변곡점·극값 조건으로 미정계수 결정」 3 · 「유리·무리함수의 그래프 개형 — 대칭성·점근선·극값·변곡점 조사」 2 · 「지수·로그함수의 그래프 개형 — 점근선 극한 조사」 2 · 「도함수 y=f'(x) 의 그래프에서 f 의 극값·변곡점 읽기」 2 (그 밖에 「볼록 구간과 변곡점 좌표 구하기」 2 · 단일 4종 각 1)
- 통찰 유형 분포: I-VF 5 · I-EQV 4 · I-RT 3 (I-XU·I-SC·I-SYM·I-MI·I-BW·I-PD 0)
- 그림: 2문(`crop:fig-186-373.png` · `crop:fig-187-376.png`) — 둘 다 $y=f'(x)$ 의 그래프를 주고 $f$ 의 극값·변곡점을 읽게 하는 같은 계열
- 앞쪽 예제·확인체크 7문은 개형 절차의 반복이라 ★2 에 몰려 있고, 통찰 라벨은 $f''=0$ 의 해 중 부호가 바뀌지 않는 것을 기각해야 하는 문항(185-369 · 187-376 · 187-379 · 187-380)에 집중된다. 변형으로 ★4 이상을 만들려면 개형을 「도구」로 쓰게 하는 설정(실근 개수·대소 비교·넓이)이 필요하며 각 블록 `variation_notes.creative` 에 적어 두었다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC2-183-366 | 벤더 태그는 앞 예제와 같은 「확인체크」(★2 출발)지만 소문항 4개에 수직·수평·사선 점근선과 무리함수 정의역 끝점이 모두 들어감 | ★2 / ★3 |
| GN-CALC2-187-378 | 「삼차함수는 변곡점에 대하여 대칭」이라는 결정적 힌트가 발문에 이미 있어 체감은 ★2 — 벤더 구역은 STEP 2(★3) | ★2 / ★3 |
| GN-CALC2-187-379 | 통찰 2개(I-EQV·I-VF d2)로 산식상 +1(★4) 후보이나 풀이 세 줄·M_total 7 이라 ★3 유지 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 가장 많이 반복된 골조는 **「개형 절차 전수 적용」**(183-e17 · 183-366 · 184-e18 · 184-367 · 185-e19 · 185-368 · 185-369)이다. 함수 종류(유리·무리 / 지수·로그 / 삼각)로 type_hint 를 셋으로 나눠 두었지만, 절차가 완전히 같고 갈리는 것은 「정의역·점근선을 어디서 얻는가」뿐이므로 **카탈로그에서는 「함수의 그래프 개형」 한 유형으로 통합**하고 함수 종류는 유형 안의 난이도 눈금(다항·유리 ★2 → 지수·로그 ★2 → 삼각·곱꼴 ★3)으로 두는 것이 맞다.
- 따로 세워야 할 유형은 **「도함수 그래프에서 f 의 극값·변곡점 읽기」**(186-373 · 187-376)다. 식이 없는 추상(Mₐ 3)과 표현 전환(I-RT)이 고정 축이고, 단원 20~21(극대·극소, 최대·최소)의 같은 계열 문항과 묶여 ★3~4 슬롯의 base ★ 근거가 된다.
- **「$f''=0$ 이지만 변곡점이 아닌 점」**(185-369 · 187-376 · 187-379)은 유형이라기보다 이 단원 전체를 관통하는 *함정 축*이다. 카탈로그에서는 별도 유형 대신 각 유형의 난이도 눈금 +1 조건(I-VF 보유)으로 기술하는 편이 재사용에 낫다.
- 「변곡점 조건으로 미정계수 결정」(186-374 · 187-377 · 187-378)은 조건이 극값이냐 변곡점이냐 대칭이냐만 다르고 골조가 같으므로 한 유형으로 묶되, 미정계수가 2개 이상이거나 조건을 학생이 스스로 번역해야 하는 경우를 ★4 슬롯으로 분리할 것.
