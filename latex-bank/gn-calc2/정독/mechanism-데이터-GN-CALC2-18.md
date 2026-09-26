---
name: mechanism-데이터-GN-CALC2-18
description: 개념원리 미적분Ⅱ 18 음함수와 역함수의 미분법(1/1 · 147~152쪽 147-285~152-305 · 24문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ (22개정 · 학생용) · 전사본 latex-bank/gn-calc2
  section: 18 음함수와 역함수의 미분법
  unit_code: CALC2-18
  part: "1/1"
  extract_range: "147~152쪽 · 147-285~152-305"
  total_problems: 24
  unit_total: 24
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 insights 의 effective_depth 평균(통찰 없으면 0.00). insight_type 은 insights 가 비어 있으면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (crops.json)
---

# 개념원리 미적분Ⅱ · 18 음함수와 역함수의 미분법 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅱ 18단원 「음함수와 역함수의 미분법」 전체(147~152쪽 · 147-285~152-305 · 24문항)를 다룬다. 구역은 다섯이다. **개념원리 익히기** 3문(147-285~287 · 음함수 표현으로 고치기와 음함수·역함수 미분 과정의 빈칸 채우기), **필수·발전 예제** 10문(148-e10 · 149-e11 · 150-e12 세 개의 tag 「필수」 예제와 그 뒤에 붙는 tag 「확인체크」 유제 일곱 문), **연습문제 STEP 1** 4문, **연습문제 STEP 2** 5문, **연습문제 실력 UP** 2문이다. 연습문제 구역에는 직전 단원(매개변수로 나타낸 함수의 미분법) 문항이 4문(151-295 · 151-296 · 151-299 · 151-300) 섞여 있는데, 개념원리는 연습문제를 17·18 두 단원 묶음으로 배치하므로 이 파일에서도 같은 골조 계열(「$t$ 를 매개로 $\frac{dy}{dx}$ 를 얻는다」)로 함께 판정했다. 그림 문항은 없고 선택형은 2문(152-303 · 152-304)뿐이다.

개념원리 고등은 구역이 곧 난이도 층이어서 개념원리 익히기 ★1 · 필수 예제 ★2 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 를 출발점으로 삼고 M_total·통찰로 ±1 을 조정했다. 「확인체크」는 벤더 신호만 보면 ★1 출발이지만 실제로는 바로 앞 필수 예제의 유제여서 대응 예제와 같은 출발점(★2)을 썼다(gn-calc2 08 에서 쓴 관례를 그대로 따랐고 분류 이슈 표에 한 줄로 남겼다).

단원의 도구는 셋이다. ① **음함수의 미분법** — $F(x,y)=0$ 의 각 항을 $x$ 에 대해 미분하되 $y$ 가 나오는 항에는 연쇄법칙·곱의 미분법을 걸어 $\frac{dy}{dx}$ 에 대한 일차식으로 모으고 풀기($\frac{dy}{dx}$ 의 분모가 $0$ 이 되는 점을 제외한다는 T-범위가 따라붙는다). ② **역함수의 미분법** — $\frac{dy}{dx}=\dfrac{1}{dx/dy}$, 그리고 그 응용인 $(f^{-1})'(b)=\dfrac{1}{f'(a)}\ (f(a)=b)$. 여기서 학생이 실제로 하는 일은 **$f(a)=b$ 를 만족하는 $a$ 를 역으로 찾는 것**이고 미분 자체는 한 줄이다. ③ **매개변수 미분법** $\frac{dy}{dx}=\dfrac{dy/dt}{dx/dt}$. 그래서 이 범위의 통찰 라벨은 I-EQV(조건을 미분계수의 정의 꼴이나 계산 가능한 동치식으로 옮기기)에 가장 많이 몰리고, 그다음이 I-BW(주어진 함숫값·극한값에서 대응점을 역추적)다. ★4 세 문항은 각각 I-BW(152-303) · I-SC(152-304) · 3단 결합(152-305)으로 갈린다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 가 변하는 지점)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CALC2-147-285
  page: 147
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 주어진 관계식을 음함수 표현 $f(x,y)=0$ 꼴로 고치기(⑴ $y=x^2+2$ ⑵ $x^2+4y^2=9$ ⑶ $y=\frac{x}{x-1}$).
  category: '모든 항을 좌변으로 이항 → 분모가 있으면 양변에 곱해 정리 → $f(x,y)=0$'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '음함수 표현 — $f(x,y)=0$ 꼴로 고치기'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    이항 한 번이면 끝나는 정의 확인. ⑶ 만 분모 $x-1$ 을 곱하는 한 단계가 더 있고 $x\ne 1$ 이라는 T-범위가 붙는다.
    개념원리 익히기 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: '우변을 $0$ 으로 이항(⑶ 은 분모를 곱한 뒤 이항) → $f(x,y)=0$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x^2-y+2=0$ ⑵ $x^2+4y^2-9=0$ ⑶ $xy-x-y=0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/147-285.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 의 계수·상수($y=3x^2-5$), ⑵ 의 타원 계수($9x^2+y^2=16$), ⑶ 의 유리식($y=\frac{2x+1}{x-3}$)을 자유롭게 바꿀 수 있다. 제약: ⑶ 은 분모를 곱한 뒤 $xy$ 항이 남아 실제로 음함수가 되도록 분모에 $x$ 가 있어야 하고, 제외되는 $x$ 값을 발문이나 답에 남길지 통일해야 한다.'
    creative: '(1) 거꾸로 $f(x,y)=0$ 을 주고 $y$ 에 대해 풀 수 있는지 묻기(★1 유지) (2) $x^2+y^2=4$ 처럼 $y$ 를 하나의 함수로 풀 수 없는 예를 섞어 음함수 표현이 필요한 이유를 묻기(★2 · I-EQV) (3) 바로 다음 문항과 묶어 고친 $f(x,y)=0$ 에서 $\frac{dy}{dx}$ 까지 구하게 하기(★2).'
```

```yaml
- id: GN-CALC2-147-286
  page: 147
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    $x^2-2xy-4y^2=0$ 에서 $\frac{dy}{dx}$ 를 구하는 과정의 빈칸 다섯 개를 채우기.
  category: '각 항을 $x$ 로 미분(곱의 미분법·연쇄법칙) → $\frac{dy}{dx}$ 에 대한 일차식으로 정리 → 계수로 나누기'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '음함수의 미분법 — 각 항을 $x$ 로 미분해 $\frac{dy}{dx}$ 풀기'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    빈칸이 미분 절차를 그대로 안내한다. 학생이 하는 판단은 $2xy$ 에 곱의 미분법을, $4y^2$ 에 연쇄법칙을 거는 것 둘뿐이고
    마지막 $x+4y\ne 0$ 은 답에 이미 제시된다. 개념원리 익히기·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: '$2x-(2y+2x y'')-8y y''=0$ → $x-y-(x+4y)y''=0$ → $y''=\frac{x-y}{x+4y}$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2x$, $8y$, $x+4y$, $\dfrac{x-y}{x+4y}$, $x+4y$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/147-286.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$x^2-2xy-4y^2$ 의 세 계수를 바꿀 수 있다($x^2+3xy-y^2=0$ 등). 제약: $\frac{dy}{dx}$ 의 분모가 한 항으로 예쁘게 묶이도록 $y$ 항 계수와 $xy$ 항 계수를 정수로 두고, 빈칸이 다섯 개 유지되도록 단계 구조를 그대로 둔다.'
    creative: '(1) 빈칸을 없애고 바로 $\frac{dy}{dx}$ 를 묻기(★2) (2) 같은 식에서 특정 점에서의 접선 기울기까지 잇기(★2) (3) 빈칸 중 하나를 「이 식을 쓸 수 있는 조건」으로 바꿔 $x+4y\ne 0$ 을 학생이 스스로 쓰게 하기(★2 · T-범위 강조).'
```

```yaml
- id: GN-CALC2-147-287
  page: 147
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    역함수의 미분법으로 $y=\sqrt[3]{3x+2}$ 의 $\frac{dy}{dx}$ 를 구하는 과정의 빈칸 다섯 개를 채우기.
  category: '세제곱해 $x=g(y)$ 로 뒤집기 → $\frac{dx}{dy}$ → 역수 → $x$ 의 식으로 되돌리기'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '역함수의 미분법 — $\frac{dy}{dx}=\dfrac{1}{dx/dy}$ 로 거듭제곱근 함수 미분'
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    양변 세제곱 → $x$ 를 $y$ 로 표현 → $\frac{dx}{dy}=y^2$ → 역수. 빈칸이 순서를 다 잡아 준다.
    마지막에 $y=\sqrt[3]{3x+2}$ 를 되돌려 대입하는 것만 챙기면 된다. 개념원리 익히기·통찰 없음·M_total 5 → ★1.
  tier: star_1
  mechanism_primary: '$y^3=3x+2$ → $x=\frac{1}{3}y^3-\frac{2}{3}$ → $\frac{dx}{dy}=y^2$ → $\frac{dy}{dx}=\frac{1}{y^2}=\frac{1}{\sqrt[3]{(3x+2)^2}}$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3x+2$, $\dfrac{1}{3}y^3-\dfrac{2}{3}$, $y^2$, $y^2$, $\dfrac{1}{\sqrt[3]{(3x+2)^2}}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/147-287.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '근호 차수(세제곱근 → 네·다섯제곱근)와 안쪽 일차식 $3x+2$ 의 계수를 바꿀 수 있다. 제약: 제외점($3x+2=0$ 에 해당하는 $x$)을 발문 괄호에 맞춰 고치고, 짝수 차수로 바꾸면 정의역 $3x+2>0$ 이 추가로 필요하다.'
    creative: '(1) $y=\sqrt[3]{3x+2}$ 를 $y=(3x+2)^{1/3}$ 로 보고 지수 미분법으로 푼 결과와 비교하게 하기(★2 · I-SC) (2) $x=y^3$ 대신 $x=y^3+y$ 처럼 $y$ 로 풀 수 없는 형태를 주어 역함수 미분법이 유일한 길이 되게 하기(★3) (3) 특정 $x$ 에서의 미분계수만 묻기(★1 유지).'
```

### 필수·발전 예제

```yaml
- id: GN-CALC2-148-e10
  page: 148
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 음함수의 미분법으로 $\frac{dy}{dx}$ 구하기(⑴ 쌍곡선 $\frac{x^2}{25}-\frac{y^2}{16}=1$ ⑵ $x^2y^3=2$ ⑶ $e^{x+y}+e^{x-y}=2$).
  category: '각 항을 $x$ 로 미분 → $\frac{dy}{dx}$ 항을 한쪽으로 모으기 → 계수로 나누기'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '음함수의 미분법 — $\frac{dy}{dx}$ 구하기(이차곡선·곱·지수)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이 단원의 표준 절차를 세 얼굴로 보여 주는 대표 예제다. ⑴ 은 연쇄법칙만, ⑵ 는 곱의 미분법, ⑶ 은 지수의 연쇄법칙이 붙고
    마지막에 공통인수 $e^x$ 를 약분해 $y$ 만의 식으로 정리한다. 세 소문항 모두 「미분 → $y''$ 로 정리」 한 갈래뿐이라 통찰 0.
    필수 예제 출발점 ★2 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: '양변을 $x$ 로 미분 → $y''$ 이 든 항을 모아 $(\ )y''=(\ )$ → $y''=$ 분수식(분모 $\ne 0$ 조건)'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{dy}{dx}=\dfrac{16x}{25y}$ \cond{$y\ne 0$} ⑵ $\dfrac{dy}{dx}=-\dfrac{2y}{3x}$ ⑶ $\dfrac{dy}{dx}=\dfrac{e^{-y}+e^{y}}{e^{-y}-e^{y}}$ \cond{$y\ne 0$}'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/148-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 의 분모 $25,16$(타원이면 부호를 $+$ 로), ⑵ 의 지수 $x^2y^3$ 의 두 차수와 우변 상수, ⑶ 의 지수 $x\pm y$ 를 $2x\pm y$ 등으로 바꿀 수 있다. 제약: ⑵ 는 차수를 바꿔도 $y''=-\frac{m}{n}\cdot\frac{y}{x}$ 꼴로 떨어지므로 $x\ne 0$ 을, ⑶ 은 약분 뒤 분모가 $0$ 이 되는 $y$ 값을 조건으로 남긴다.'
    creative: '(1) 세 소문항 중 하나를 특정 점에서의 접선 기울기로 바꾸기(★2) (2) ⑵ 를 양변에 로그를 취해 푸는 로그미분법과 비교시키기(★3 · I-SC) (3) ⑶ 에서 $\frac{dy}{dx}$ 가 정의되지 않는 점을 모두 구하게 하기(★3 · I-VF) (4) 곡선 위 점에서의 접선이 축과 평행할 조건($y''=0$ 또는 분모 $=0$)을 묻기(★3 · I-BW).'
```

```yaml
- id: GN-CALC2-148-288
  page: 148
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 음함수의 미분법으로 $\frac{dy}{dx}$ 구하기(⑴ 원 $(x-2)^2+(y+1)^2=4$ ⑵ $\sqrt{y^2+2}=2x^2$ ⑶ $\ln|y|=4x^2$).
  category: '각 항을 $x$ 로 미분(무리식·로그식은 연쇄법칙) → $\frac{dy}{dx}$ 로 정리'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '음함수의 미분법 — 무리식·로그식이 섞인 방정식'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    148-e10 의 유제. ⑵ 는 $\sqrt{\ }$ 의 연쇄법칙에서 나온 분모 $\sqrt{y^2+2}$ 를 다시 곱해 올리는 정리가,
    ⑶ 은 $(\ln|y|)''=\frac{y''}{y}$ 라는 로그 미분의 결과가 그대로 $y''=8xy$ 로 이어지는 것이 각각 한 줄씩 더 있다.
    갈래 없음·통찰 0 · M_total 6 → 대응 예제와 같은 ★2.
  tier: star_2
  mechanism_primary: '양변을 $x$ 로 미분 → $y''$ 의 계수(분수·$\frac{1}{y}$)를 넘겨 정리 → $y''$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{dy}{dx}=-\dfrac{x-2}{y+1}$ \cond{$y\ne -1$} ⑵ $\dfrac{dy}{dx}=\dfrac{4x\sqrt{y^2+2}}{y}$ \cond{$y\ne 0$} ⑶ $\dfrac{dy}{dx}=8xy$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/148-288.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 의 중심·반지름, ⑵ 의 근호 안 상수와 우변 $2x^2$ 의 계수·차수, ⑶ 의 $4x^2$ 계수를 바꿀 수 있다. 제약: ⑵ 는 우변이 양수여야 하므로 $x$ 의 범위 제한이 생기는지 확인하고, ⑶ 은 절댓값 덕분에 $y$ 의 부호와 무관하게 같은 식이 나오는 구조를 유지한다.'
    creative: '(1) ⑴ 에서 접선이 $x$ 축에 평행한 점을 묻기(★2 · I-BW) (2) ⑶ 을 $y=\pm e^{4x^2}$ 로 풀어 직접 미분한 결과와 비교하게 하기(★2 · I-SC) (3) ⑵ 의 양변을 제곱해 음함수로 만든 뒤 미분해도 같은지 확인시키기(★3 · I-EQV · 제곱으로 생기는 근 추가를 점검해야 함).'
```

```yaml
- id: GN-CALC2-148-289
  page: 148
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    곡선 $x\cos y+y\cos x=\frac{\pi}{3}$ 위의 점 $\left(\frac{\pi}{3},0\right)$ 에서의 접선의 기울기.
  category: '곱의 미분법 두 번으로 음함수 미분 → 점의 좌표 대입 → 기울기'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '음함수의 미분법 — 곡선 위 한 점에서의 접선의 기울기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $x\cos y$ 와 $y\cos x$ 에 각각 곱의 미분법과 연쇄법칙을 걸어 $y''$ 의 일차식을 만든 뒤 $\left(\frac{\pi}{3},0\right)$ 을 대입한다.
    $y''$ 을 일반식으로 정리하지 않고 대입 먼저 해도 되는데, 어느 순서든 단계 수가 같아 전략 분기로 보지 않았다.
    삼각함수 미분의 부호(T-부호)만 챙기면 갈래 없음. 확인체크·통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '$\cos y-x\sin y\,y''+y''\cos x-y\sin x=0$ → $\left(\frac{\pi}{3},0\right)$ 대입 → $1+\frac{1}{2}y''=0$ → $y''=-2$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/148-289.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변 상수와 점의 좌표를 짝지어 바꿀 수 있다($x\sin y+y\sin x=0$ 위의 $(0,0)$ 등). 제약: 대입한 점이 실제로 곡선 위에 있어야 하고, 대입 후 $y''$ 의 계수($\cos x-x\sin y$ 에 해당하는 값)가 $0$ 이 되지 않아야 한다 — 특수각을 골라 계수가 유리수로 떨어지게 둔다.'
    creative: '(1) 접선의 방정식이나 법선의 방정식까지 묻기(★2) (2) 점을 주지 않고 접선의 기울기가 $-2$ 인 점을 찾게 하기(★4 · I-BW · 연립초월방정식이 되므로 곡선을 손보아야 함) (3) $\cos$ 을 $e^{xy}$ 로 바꿔 지수 음함수로(★3) (4) 두 곡선의 교점에서의 두 접선이 수직일 조건(★4 · I-CON).'
```

```yaml
- id: GN-CALC2-149-e11
  page: 149
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 역함수의 미분법으로 $\frac{dy}{dx}$ 구하기(⑴ $x=2y^2+3y+4$ ⑵ $x=\sin y$ ⑶ $y=\sqrt[4]{2x-6}$).
  category: '$\frac{dx}{dy}$ 를 구해 역수 취하기(⑶ 은 먼저 $x=g(y)$ 로 뒤집기)'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '역함수의 미분법 — $\frac{dy}{dx}=\dfrac{1}{dx/dy}$'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴⑵ 는 이미 $x=g(y)$ 꼴이라 미분하고 뒤집으면 끝이고, ⑶ 은 네제곱해서 $x$ 를 $y$ 로 표현하는 한 단계가 앞에 붙는다.
    ⑵ 에서 $\frac{1}{\cos y}=\sec y$ 로 쓰는 것과 ⑶ 의 답을 $x$ 의 식으로 되돌리는 것이 채점 포인트.
    정의역 제한($y>-\frac{3}{4}$, $-\frac{\pi}{2}<y<\frac{\pi}{2}$, $x\ne 3$)은 역함수가 존재하도록 준 것이다. 필수 예제 ★2 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '$x=g(y)$ → $\frac{dx}{dy}=g''(y)$ → $\frac{dy}{dx}=\frac{1}{g''(y)}$ (필요하면 $x$ 의 식으로 환원)'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{dy}{dx}=\dfrac{1}{4y+3}$ ⑵ $\dfrac{dy}{dx}=\sec y$ ⑶ $\dfrac{dy}{dx}=\dfrac{1}{2\sqrt[4]{(2x-6)^3}}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/149-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 의 이차식 계수(정의역 경계가 꼭짓점 $y=-\frac{b}{2a}$ 와 맞물린다), ⑵ 를 $x=\tan y$·$x=\cos y$ 로, ⑶ 의 근호 차수와 일차식 계수를 바꿀 수 있다. 제약: ⑴ 은 준 정의역에서 $\frac{dx}{dy}\ne 0$ 이어야 하고(꼭짓점 제외), ⑵ 는 역함수가 존재하는 구간을 함께 고쳐야 한다.'
    creative: '(1) ⑵ 의 답 $\sec y$ 를 $x$ 의 식 $\frac{1}{\sqrt{1-x^2}}$ 으로 바꿔 쓰게 하기(★3 · I-RT · 구간에서 $\cos y>0$ 을 써야 함) (2) ⑶ 을 지수법칙으로 직접 미분한 결과와 대조시키기(★2 · I-SC) (3) 특정 점에서의 미분계수만 묻기(★2 유지) (4) $x=g(y)$ 가 $y$ 에 대해 풀리지 않는 식($x=y+e^y$)으로 바꿔 역함수 미분법이 유일한 길이 되게 하기(★3).'
```

```yaml
- id: GN-CALC2-149-290
  page: 149
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 역함수의 미분법으로 $\frac{dy}{dx}$ 구하기(⑴ $x=y\sqrt{y+1}$ ⑵ $x=y^2-e^{-y}$ ⑶ $y=\sqrt[5]{\frac{x}{2}}$).
  category: '$\frac{dx}{dy}$ 를 구해(곱·무리식·지수 미분) 역수 취하기'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '역함수의 미분법 — 무리식·지수식이 섞인 $x=g(y)$'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    149-e11 의 유제. ⑴ 의 $\frac{dx}{dy}=\sqrt{y+1}+\frac{y}{2\sqrt{y+1}}$ 를 통분해 $\frac{3y+2}{2\sqrt{y+1}}$ 로 한 덩어리로 만드는 정리가 계산 부담의 대부분이고,
    그 분모의 $3y+2$ 가 준 정의역 $y>-\frac{2}{3}$ 의 이유다. ⑶ 은 다섯제곱해 $x=2y^5$ 로 뒤집으면 끝.
    갈래 없음·통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '$\frac{dx}{dy}$ 를 한 분수로 통분 → 역수 → (⑶ 은 $y$ 를 $x$ 로 되돌려 대입)'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{dy}{dx}=\dfrac{2\sqrt{y+1}}{3y+2}$ ⑵ $\dfrac{dy}{dx}=\dfrac{1}{2y+e^{-y}}$ ⑶ $\dfrac{dy}{dx}=\dfrac{1}{10}\sqrt[5]{\dfrac{16}{x^4}}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/149-290.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 을 $x=y\sqrt{2y+3}$ 류로, ⑵ 의 $y^2$ 계수와 지수 $e^{-y}$ 를 $e^{2y}$ 등으로, ⑶ 의 근호 차수와 $\frac{x}{2}$ 의 계수를 바꿀 수 있다. 제약: ⑴ 은 통분 결과 분자가 일차식으로 떨어지도록 $y\cdot\sqrt{ay+b}$ 형태를 유지하고, 준 정의역은 그 분자가 $0$ 이 되는 값보다 크게 다시 잡아야 한다.'
    creative: '(1) ⑵ 에서 $\frac{dy}{dx}$ 가 정의되지 않는 $y$ 가 있는지 묻기(★3 · I-VF · $2y+e^{-y}=0$ 의 해 존재 논의) (2) ⑴ 을 양변 제곱해 음함수로 바꿔 음함수 미분법과 결과를 대조시키기(★3 · I-SC) (3) ⑶ 의 답을 $y$ 로 쓰는 형태와 $x$ 로 쓰는 형태 둘 다 요구하기(★2 유지).'
```

```yaml
- id: GN-CALC2-149-291
  page: 149
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $x=\frac{2y}{y^2-4}\ (-2<y<2)$ 에 대하여 $\lim\limits_{y\to 0}\frac{dy}{dx}$ 의 값.
  category: '몫의 미분법으로 $\frac{dx}{dy}$ → 역수 → $y\to 0$ 대입(연속이므로 극한 = 함숫값)'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '역함수의 미분법 — 유리함수 $x=g(y)$ 에서 $\frac{dy}{dx}$ 의 극한값'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「극한」이라 쓰여 있지만 $y=0$ 에서 $\frac{dx}{dy}$ 가 연속이고 $0$ 이 아니므로 부정형이 아니다 — 대입 한 번이면 끝난다.
    실제 부담은 몫의 미분법 전개와 분자 $-2y^2-8$ 의 부호(T-부호)다. 확인체크·통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '$\frac{dx}{dy}=\frac{-2(y^2+4)}{(y^2-4)^2}$ → $y=0$ 에서 $-\frac{1}{2}$ → $\frac{dy}{dx}=-2$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/149-291.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '분자의 $2y$ 계수와 분모의 $y^2-4$ 의 상수를 바꿀 수 있고, 극한을 보내는 점도 구간 안의 다른 값($y\to 1$)으로 옮길 수 있다. 제약: 그 점에서 $\frac{dx}{dy}\ne 0$ 이어야 역수가 존재하고, 정의역 $-2<y<2$ 는 분모가 $0$ 이 되는 점을 피하도록 함께 고친다.'
    creative: '(1) 극한을 실제로 부정형으로 만들기 — $\frac{dx}{dy}=0$ 이 되는 점으로 보내 $\frac{dy}{dx}\to\pm\infty$ 를 판정하게 하기(★3 · I-MI · 좌우극한 갈림) (2) $\frac{dy}{dx}$ 의 최댓값을 묻기(★3) (3) 같은 식에서 역함수의 그래프의 접선이 수평이 되는 점을 묻기(★3 · I-BW).'
```

```yaml
- id: GN-CALC2-150-e12
  page: 150
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $f(x)=x^3+x^2+x$ 의 역함수를 $f^{-1}(x)$ 라 할 때 $(f^{-1})'(3)$ 의 값.
  category: '$f(a)=3$ 인 $a$ 찾기 → $f''(a)$ → $(f^{-1})''(3)=\frac{1}{f''(a)}$'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '역함수의 미분법의 응용 — $(f^{-1})''(b)=\dfrac{1}{f''(a)}$ (다항함수)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    공식 $(f^{-1})'(b)=\frac{1}{f'(a)}\ (f(a)=b)$ 를 처음 쓰는 대표 예제다. $f(1)=3$ 은 보기만 해도 찾히고 $f'(1)=6$ 도 한 줄.
    통찰 0 · M_total 5 여서 산식상 $-1$ 후보지만, 「$a$ 를 먼저 찾는다」는 이 단원의 새 절차를 세우는 필수 예제라 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: '$f(a)=3$ → $a=1$ → $f''(x)=3x^2+2x+1$ → $\frac{1}{f''(1)}=\frac{1}{6}$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{6}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/150-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$f$ 의 계수와 묻는 값 $b$ 를 함께 바꾼다. 제약: $f$ 가 실수 전체에서 증가(또는 감소)해 역함수가 존재해야 하고($f''>0$), $f(a)=b$ 의 해 $a$ 가 정수로 눈에 보이도록 $b$ 를 $f(\text{정수})$ 값으로 고른다.'
    creative: '(1) $f$ 를 $x^3-3x^2+3x+2$ 처럼 완전세제곱으로 묶이는 식으로 바꿔 $a$ 찾기에 착안을 요구하기(★2 · I-EQV · 150-292 가 그 형태) (2) $f$ 에 미정계수를 넣고 $(f^{-1})''(b)$ 값을 조건으로 주어 계수를 역산하게 하기(★3 · I-BW) (3) $f$ 와 $f^{-1}$ 의 교점을 끼워 넣기(★3 · I-SYM · 151-298 이 그 형태).'
```

```yaml
- id: GN-CALC2-150-292
  page: 150
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=x^3-3x^2+3x+2$ 의 역함수를 $f^{-1}(x)$ 라 할 때 $(f^{-1})'(-5)$ 의 값.
  category: '$f(x)=(x-1)^3+3$ 으로 묶기 → $f(a)=-5$ 에서 $a=-1$ → $\frac{1}{f''(-1)}$'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$x^3-3x^2+3x+2=(x-1)^3+3$ 으로 묶어 $f(a)=-5$ 를 삼차방정식 풀이가 아니라 세제곱근 한 번으로 해결'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '역함수의 미분법의 응용 — 완전세제곱으로 묶어 $f(a)=b$ 의 해 찾기'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    묶지 않으면 $x^3-3x^2+3x+7=0$ 의 근을 인수정리로 찾아야 한다. $(x-1)^3+3$ 을 알아보면 $(a-1)^3=-8$ 에서 $a=-1$ 이 즉시 나오고
    $f''(x)=3(x-1)^2$ 도 함께 얻어져 $f''(-1)=12$ 가 한 줄이다. 동치 변환 통찰 1개(EQV d1)이지만 인수정리로도 풀리므로 깊이는 1.
    확인체크 ★2 출발 · 통찰 1개 d1 → ★2 유지.
  tier: star_2
  mechanism_primary: '$f(x)=(x-1)^3+3$ → $(a-1)^3=-8$ → $a=-1$ → $f''(-1)=3\cdot 4=12$ → $\frac{1}{12}$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{12}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/150-292.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$(x-p)^3+q$ 의 $p,q$ 와 묻는 값 $b$ 를 바꾼다. 제약: $b-q$ 가 완전세제곱수여야 $a$ 가 정수로 떨어지고, $a\ne p$ 여야 $f''(a)\ne 0$ 이라 역함수의 미분계수가 존재한다($a=p$ 로 두면 답이 없어진다 — 가장 흔한 사고).'
    creative: '(1) 묶이지 않는 삼차식으로 바꿔 인수정리로만 $a$ 를 찾게 하기(★2 · 통찰 0) (2) $f''(a)=0$ 이 되도록 $b$ 를 잡아 「$(f^{-1})''(b)$ 가 존재하지 않는 $b$」를 묻기(★4 · I-VF) (3) $(f^{-1})''(b)$ 값을 주고 $b$ 를 역산하게 하기(★3 · I-BW) (4) $f$ 를 감소함수로 바꿔 답의 부호를 뒤집기(★2 · T-부호).'
```

```yaml
- id: GN-CALC2-150-293
  page: 150
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=\cos x\ (0<x<\pi)$ 의 역함수를 $f^{-1}(x)$ 라 할 때 $(f^{-1})'\left(\frac{\sqrt{3}}{2}\right)$ 의 값.
  category: '$\cos a=\frac{\sqrt{3}}{2}$ 인 $a$ 를 구간 안에서 찾기 → $f''(a)=-\sin a$ → 역수'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '역함수의 미분법의 응용 — 삼각함수의 역함수 미분계수'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $a=\frac{\pi}{6}$ 는 특수각이라 바로 나오고 계산은 $-\sin\frac{\pi}{6}=-\frac{1}{2}$ 한 줄이다.
    함정이 둘이다 — 구간 $0<x<\pi$ 에서만 역함수가 존재한다는 T-범위(구간 밖의 $-\frac{\pi}{6}$ 를 답으로 쓰면 틀림)와
    $f''=-\sin x$ 의 음부호(T-부호). 통찰 0 · M_total 6 → 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '$\cos a=\frac{\sqrt3}{2},\ 0<a<\pi$ → $a=\frac{\pi}{6}$ → $f''\left(\frac{\pi}{6}\right)=-\frac{1}{2}$ → $-2$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/150-293.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '묻는 값을 다른 특수각의 코사인값($\frac{1}{2}$, $-\frac{\sqrt2}{2}$)으로, 함수를 $\sin x\ \left(-\frac{\pi}{2}<x<\frac{\pi}{2}\right)$·$\tan x$ 로 바꿀 수 있다. 제약: 준 구간에서 일대일이어야 하고 그 구간 안에 해가 정확히 하나 있어야 하며, $f''(a)\ne 0$ 이어야 한다($\cos$ 이면 $a\ne 0,\pi$).'
    creative: '(1) 구간을 $\left(-\pi,0\right)$ 으로 바꿔 답의 부호가 뒤집히는지 확인하게 하기(★2 · T-부호) (2) 답을 $\frac{-1}{\sqrt{1-x^2}}$ 처럼 $x$ 의 식으로 일반화시키기(★3 · I-RT) (3) 구간을 주지 않고 「역함수가 존재하도록 하는 구간」까지 학생이 잡게 하기(★3 · I-MI).'
```

```yaml
- id: GN-CALC2-150-294
  page: 150
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=1-\ln x$ 의 역함수를 $g(x)$ 라 할 때 $g'(-1)$ 의 값.
  category: '$f(a)=-1$ 에서 $\ln a=2$ → $a=e^2$ → $f''(a)=-\frac{1}{a}$ → 역수'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '역함수의 미분법의 응용 — 로그함수의 역함수 미분계수'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    150-e12 의 로그판. $1-\ln a=-1$ 을 지수로 옮겨 $a=e^2$ 를 얻는 것이 전부고 $f''(x)=-\frac{1}{x}$ 도 한 줄.
    함정은 진수 $x>0$(T-범위)과 $f''$ 의 음부호(T-부호)이며, $g'(-1)$ 의 $-1$ 이 정의역이 아니라 **치역** 쪽 값이라는 점을 혼동하면 시작부터 막힌다.
    통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: '$1-\ln a=-1$ → $a=e^2$ → $f''(e^2)=-e^{-2}$ → $g''(-1)=-e^2$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-e^2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/150-294.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$f(x)=k-\ln x$ 의 $k$ 와 묻는 값 $b$ 를 바꾼다($f(x)=2+\ln 3x$ 류도 가능). 제약: $k-b$ 가 정수여야 $a=e^{k-b}$ 가 깔끔하고, 답은 항상 $-e^{k-b}$ 꼴이 되므로 부호를 답지와 맞춰 둔다.'
    creative: '(1) $f(x)=e^{1-x}$ 처럼 지수함수로 바꿔 같은 골조를 지수 쪽에서 반복하기(★2) (2) $f(x)=x+\ln x$ 처럼 $f(a)=b$ 가 초월방정식이 되도록 해 $a$ 를 관찰로 찾게 하기(★3 · I-BW) (3) $g''(b)$ 를 $b$ 의 식으로 일반화해 $g(x)=e^{1-x}$ 를 직접 미분한 결과와 대조시키기(★3 · I-SC).'
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC2-151-295
  page: 151
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    매개변수 $t$ 로 나타낸 함수 $x=\cos t+t\sin t$, $y=\sin t-t\cos t$ 에 대하여 $t=\frac{\pi}{3}$ 에서의 $\frac{dy}{dx}$ 의 값.
  category: '$\frac{dx}{dt}$, $\frac{dy}{dt}$ 를 각각 곱의 미분법으로 → 나누기 → $t$ 대입'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '매개변수로 나타낸 함수의 미분법 — $\frac{dy}{dx}=\dfrac{dy/dt}{dx/dt}$'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    곱의 미분법을 두 번 쓰면 $-\sin t$ 와 $\sin t$, $\cos t$ 와 $-\cos t$ 가 각각 상쇄돼 $\frac{dx}{dt}=t\cos t$, $\frac{dy}{dt}=t\sin t$ 로 짧아지고
    나누면 $\tan t$ 만 남는다. 상쇄는 계산을 하면 저절로 보이는 것이라 통찰로 세지 않았다.
    갈래 없음·통찰 0 · M_total 7 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: '$\frac{dx}{dt}=t\cos t$ · $\frac{dy}{dt}=t\sin t$ → $\frac{dy}{dx}=\tan t$ → $t=\frac{\pi}{3}$ 에서 $\sqrt{3}$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/151-295.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '대입하는 각 $t=\frac{\pi}{3}$ 를 다른 특수각으로 바꾸거나 $x,y$ 의 부호 배치를 뒤집을 수 있다. 제약: $\tan t$ 가 정의되는 각이어야 하고($t\ne\frac{\pi}{2}$), $t=0$ 은 $\frac{dx}{dt}=0$ 이라 피해야 한다 — 상쇄 구조($x=\cos t+t\sin t$ 짝)를 깨면 답이 지저분해진다.'
    creative: '(1) $t\to 0$ 극한으로 바꿔 $\frac{dy}{dx}$ 가 $0$ 으로 가는지 보게 하기(★3) (2) 접선이 $x$ 축과 이루는 각이 $60^\circ$ 가 되는 $t$ 를 묻기(★3 · I-BW) (3) 같은 곡선에서 접선의 방정식을 구해 원점과의 거리를 묻기(★4 · I-CON) (4) $x,y$ 를 소거해 음함수로 만들 수 없음을 보이고 매개변수 미분법이 유일한 길임을 부각하기(★3).'
```

```yaml
- id: GN-CALC2-151-296
  page: 151
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $x=t^2$, $y=\frac{t}{1+t}\ (t>0)$ 로 주어진 $y=f(x)$ 에 대하여 $\lim\limits_{h\to 0}\frac{f(1+h)-f(1-h)}{h}$ 의 값.
  category: '대칭차분 극한 $=2f''(1)$ 로 읽기 → $x=1$ 인 $t$ 찾기 → 매개변수 미분'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$\frac{f(1+h)-f(1-h)}{h}$ 를 $\frac{f(1+h)-f(1)}{h}+\frac{f(1)-f(1-h)}{h}$ 로 갈라 미분계수의 정의 꼴로 옮기고 값이 $2f''(1)$ 임을 확인'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '매개변수 미분법 — 대칭차분 극한을 $2f''(1)$ 로 읽고 $\frac{dy}{dx}$ 계산'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞의 동치 변환이 전부다. $2$ 배를 놓치면 답이 정확히 절반($\frac{1}{8}$)이 되는데, 그 값이 $\frac{dy}{dx}$ 자체라 검산으로는 잡히지 않는다(T-표기).
    뒷부분은 $x=1$ 에 대응하는 $t=1$ 을 $t>0$ 에서 고르고($t=-1$ 은 정의역 밖 · T-범위) $\frac{dy/dt}{dx/dt}=\frac{1}{2t(1+t)^2}$ 에 대입하는 표준 절차.
    STEP 1 출발점 ★2 · 통찰 1개 d2 → ★2 유지. [분류 이슈] 대칭차분 인식 실패가 곧 오답이라 교사 체감은 ★3 에 가깝다.
  tier: star_2
  mechanism_primary: '극한 $=2f''(1)$ → $x=1$ 에서 $t=1$ → $\frac{dy}{dx}=\frac{1}{2t(1+t)^2}=\frac{1}{8}$ → $\frac{1}{4}$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/151-296.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$x=t^2$ 의 차수와 $y=\frac{t}{1+t}$ 의 계수, 극한을 보내는 점 $x=1$ 을 바꿀 수 있다. 제약: 그 점에 대응하는 $t$ 가 준 정의역 $t>0$ 안에 하나만 있어야 하고(짝수 차수면 $t$ 가 둘 나온다), $\frac{dx}{dt}\ne 0$ 이어야 한다.'
    creative: '(1) 분자를 $f(1+2h)-f(1-h)$ 로 바꿔 계수가 $3$ 이 되게 하기(★2 유지 · 같은 통찰) (2) 분모를 $h^2$ 로 두어 극한이 존재하지 않음을 판정하게 하기(★3 · I-VF) (3) 주어진 극한값을 먼저 주고 매개변수식의 상수를 역산하게 하기(★3 · I-BW) (4) $x=t^2\ (t\in\mathbb{R})$ 로 정의역을 풀어 $t=\pm 1$ 두 갈래를 따지게 하기(★3 · I-MI).'
```

```yaml
- id: GN-CALC2-151-297
  page: 151
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    곡선 $x^3+y^3+axy+b=0$ 위의 점 $(0,1)$ 에서의 접선의 기울기가 $\frac{2}{3}$ 일 때 상수 $a$, $b$ 에 대하여 $a+b$ 의 값.
  category: '점을 곡선식에 대입해 $b$ → 음함수 미분 후 점 대입 → 기울기 조건에서 $a$'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: '음함수의 미분법 — 접선의 기울기 조건으로 미정계수 결정'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 조건이 서로 얽히지 않는다 — 점을 대입하면 $b$ 가 바로 나오고($1+b=0$), 미분한 식에 점을 넣으면 $3y''+a=0$ 이라 $a$ 가 바로 나온다.
    조건이 둘이라 I-CON 을 셀지 고민되지만 결합 없이 순차 대입이면 끝나므로 표준 미정계수 절차로 보아 통찰 0 으로 뒀다.
    STEP 1 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: '$(0,1)$ 대입 → $b=-1$ · $3x^2+3y^2y''+a(y+xy'')=0$ 에 $(0,1)$ → $3y''+a=0$ · $y''=\frac{2}{3}$ → $a=-2$ → $a+b=-3$'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/151-297.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '점의 좌표, 주어진 기울기, 곡선의 항 구성($x^3+y^3$ 을 $x^2+y^3$ 등으로)을 바꿀 수 있다. 제약: 점이 $x$ 축이나 $y$ 축 위에 있어야 $a$ 가 든 항이 한 개만 남아 순차 대입이 되고, 대입 후 $y''$ 의 계수($3y^2+ax$ 에 해당)가 $0$ 이 되지 않아야 한다.'
    creative: '(1) 점을 축 위가 아닌 곳에 두어 $a$, $b$ 가 연립으로 얽히게 하기(★3 · I-CON) (2) 기울기 대신 「접선이 원점을 지난다」로 바꾸기(★3 · I-RT) (3) 접선의 기울기가 존재하지 않는 점을 함께 묻기(★4 · I-VF) (4) $a$ 만 주고 기울기가 $\frac{2}{3}$ 인 점을 모두 찾게 하기(★4 · I-BW·I-MI).'
```

```yaml
- id: GN-CALC2-151-298
  page: 151
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    양수 $a$ 에 대하여 $f(x)=x^3+ax-4$ 의 역함수를 $g(x)$ 라 할 때, 두 곡선 $y=f(x)$, $y=g(x)$ 의 교점의 $x$ 좌표가 $1$ 이면 $\frac{f''(0)}{g''(12)}$ 의 값.
  category: '증가함수의 역함수 교점은 $y=x$ 위 → $f(1)=1$ 로 $a$ → $f''(0)$ · $f(2)=12$ 로 $g''(12)$'
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$a>0$ 이라 $f''(x)=3x^2+a>0$ 즉 $f$ 가 증가함수이므로 $y=f(x)$ 와 $y=g(x)$ 의 교점이 직선 $y=x$ 위에 있음을 써서 $f(1)=1$ 로 바꿈'
    - step: 3
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$g''(12)$ 를 얻기 위해 $f(x)=12$ 를 만족하는 $x=2$ 를 삼차식에서 역으로 찾음'
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: '역함수의 미분법 — $y=f(x)$ 와 $y=f^{-1}(x)$ 의 교점 조건 + $(f^{-1})''$ 값'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    교점이 $y=x$ 위에 있다는 것을 모르면 $f(1)=g(1)$ 에서 출발해 연립이 막힌다 — 여기가 진입 저항의 전부다.
    $f(1)=1$ 로 $a=4$ 를 얻고 나면 $f''(0)=4$ 는 한 줄, $g''(12)$ 는 $f(2)=12$ 를 관찰해 $\frac{1}{f''(2)}=\frac{1}{16}$.
    STEP 1 출발점 ★2 에 통찰 2개(SYM d2 · BW d1) → +1 하여 ★3.
    [분류 이슈] 두 번째 단계를 역함수 미분법의 표준 절차로 보면 통찰 1개가 되어 ★2 가 된다 — 1단 폭의 경계 문항이다.
  tier: star_3
  mechanism_primary: '$f$ 증가 → 교점이 $y=x$ 위 → $f(1)=1$ → $a=4$ → $f''(0)=4$ · $f(2)=12$ → $g''(12)=\frac{1}{16}$ → $64$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$64$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/151-298.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$f(x)=x^3+ax+c$ 의 상수항과 교점의 $x$ 좌표, 묻는 $g''$ 의 인수를 바꿀 수 있다. 제약: $a>0$ 이어야 증가함수 논리가 서고, $f(x)=(\text{묻는 값})$ 의 해가 정수로 보여야 하며, 교점 조건에서 나온 $a$ 가 양수로 떨어지도록 상수항을 맞춘다.'
    creative: '(1) $f$ 를 감소함수로 만들어 「교점이 $y=x$ 위」가 깨지는 반례를 다루게 하기(★4 · I-VF) (2) 교점의 좌표를 묻지 않고 두 곡선이 만나는 점의 개수를 묻기(★4 · I-MI) (3) $f$ 와 $g$ 의 그래프가 $y=x$ 에 대칭임을 써서 두 곡선으로 둘러싸인 넓이로 확장하기(★4 · I-SYM·적분 결합) (4) 교점의 $x$ 좌표를 미지수로 두고 $a$ 의 범위를 묻기(★4 · I-BW).'
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC2-151-299
  page: 151
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    매개변수 $t$ 로 나타낸 함수 $x=t-\frac{1}{2}\sin 2t$, $y=t^3-1$ 에 대하여 $\lim\limits_{t\to 0}\frac{dy}{dx}$ 의 값.
  category: '$\frac{dx}{dt}=1-\cos 2t$ 를 $2\sin^2 t$ 로 바꿔 $\frac{0}{0}$ 을 $\left(\frac{t}{\sin t}\right)^2$ 꼴로 옮기기'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$t=0$ 에서 $\frac{dx}{dt}=0$ 이라 대입이 막히므로 $1-\cos 2t=2\sin^2 t$ 로 바꿔 $\frac{3t^2}{2\sin^2 t}$ 즉 $\lim\frac{\sin t}{t}=1$ 을 쓸 수 있는 형태로 동치 변환'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '매개변수로 나타낸 함수 — $\frac{dy}{dx}$ 의 극한(부정형 정리)'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $\frac{dy}{dx}=\frac{3t^2}{1-\cos 2t}$ 까지는 누구나 가지만 $t=0$ 을 넣으면 $\frac{0}{0}$ 이다.
    반각 변환을 떠올리지 못하면 분모를 유리화하거나 급수를 쓰는 먼 길로 새기 쉽다(T-표기).
    $t=0$ 이 정의역에서 빠지는 점이라는 것(T-범위)까지 챙기면 뒤는 $\frac{3}{2}\left(\frac{t}{\sin t}\right)^2\to\frac{3}{2}$ 한 줄.
    STEP 2 출발점 ★3 · 통찰 1개 d2 → ★3 유지.
  tier: star_3
  mechanism_primary: '$\frac{dx}{dt}=1-\cos 2t=2\sin^2 t$ · $\frac{dy}{dt}=3t^2$ → $\frac{3}{2}\left(\frac{t}{\sin t}\right)^2$ → $\frac{3}{2}$'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/151-299.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$y=t^3-1$ 의 차수와 $\sin 2t$ 의 계수를 바꿀 수 있다. 제약: 분자의 차수와 분모의 소거 차수(여기서는 둘 다 $t^2$)가 맞아야 극한이 $0$ 도 $\infty$ 도 아닌 유한값이 된다 — $y=t^2$ 로 바꾸면 극한이 $0$, $y=t^4$ 로 바꾸면 발산한다.'
    creative: '(1) 분자 차수를 일부러 어긋나게 해 극한이 $0$ 또는 발산임을 판정하게 하기(★3 · I-MI) (2) 극한값이 주어진 값이 되도록 $y$ 의 차수를 역산하게 하기(★4 · I-BW) (3) $x=t-\sin t$ 로 바꿔 $1-\cos t=2\sin^2\frac{t}{2}$ 를 쓰게 하기(★3 유지 · 같은 통찰 · 계수만 달라짐) (4) $t\to 0$ 대신 $t\to\frac{\pi}{2}$ 로 보내 부정형이 아님을 확인시키기(★2).'
```

```yaml
- id: GN-CALC2-151-300
  page: 151
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    매개변수 $\theta$ 로 나타낸 곡선 $x=4+2\cos\theta$, $y=2+3\sin\theta\ (0<\theta<2\pi)$ 위의 점 $(a,b)$ 에서의 접선의 기울기가 $-\frac{\sqrt{3}}{2}$ 일 때, 양수 $a$, $b$ 에 대하여 $ab$ 의 값.
  category: '$\frac{dy}{dx}$ 식에서 $\tan\theta$ 방정식 → 두 해 → $a,b$ 계산 → $b>0$ 로 한 해 기각'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 4
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$\tan\theta=\sqrt{3}$ 의 해가 $0<\theta<2\pi$ 에서 $\frac{\pi}{3}$ 와 $\frac{4\pi}{3}$ 둘인데, $\frac{4\pi}{3}$ 은 $b=2-\frac{3\sqrt{3}}{2}<0$ 이라 「양수 $b$」 조건에 걸려 기각되어야 함'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '매개변수(타원)로 나타낸 곡선 — 접선의 기울기 조건으로 매개변수 결정 후 유효성 검증'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $\frac{dy}{dx}=-\frac{3\cos\theta}{2\sin\theta}$ 를 세우고 기울기 조건을 넣으면 $\tan\theta=\sqrt{3}$ 로 깔끔히 떨어진다.
    문제의 무게는 그다음 — 주기 안 두 해를 모두 구한 뒤 「양수 $a$, $b$」라는 사후 필터로 하나를 기각하는 데 있다.
    $\frac{4\pi}{3}$ 을 그냥 버리거나 반대로 그것만 쓰면 바로 오답이다(T-부호·T-범위).
    STEP 2 출발점 ★3 · 통찰 1개(VF d2) → ★3 유지.
  tier: star_3
  mechanism_primary: '$\frac{dy}{dx}=-\frac{3\cos\theta}{2\sin\theta}=-\frac{\sqrt{3}}{2}$ → $\tan\theta=\sqrt{3}$ → $\theta=\frac{\pi}{3}$ (다른 해는 $b<0$ 로 기각) → $ab=5\left(2+\frac{3\sqrt{3}}{2}\right)$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$10+\dfrac{15\sqrt{3}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/151-300.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '타원의 중심 $(4,2)$ 와 두 반지름 $2,3$, 주어진 기울기를 바꿀 수 있다. 제약: 기울기에서 나온 $\tan\theta$ 값이 특수각이어야 하고, 중심과 반지름은 두 해 중 정확히 하나만 「양수 $a,b$」를 만족하도록 잡아야 한다 — 중심을 원점에 두면 기각 구조가 사라져 문제의 핵심이 없어진다.'
    creative: '(1) 조건을 「$a$, $b$ 가 모두 양수」에서 「점이 제$4$사분면」으로 바꿔 기각되는 해를 반대쪽으로 옮기기(★3 유지) (2) 조건을 빼고 가능한 $ab$ 값을 모두 구하게 하기(★3 · I-MI) (3) 접선이 $x$ 축·$y$ 축과 만나는 점으로 넓이를 묻기(★4 · I-CON) (4) 타원을 음함수 $\frac{(x-4)^2}{4}+\frac{(y-2)^2}{9}=1$ 로 주고 음함수 미분법과 비교하게 하기(★3 · I-SC).'
```

```yaml
- id: GN-CALC2-152-301
  page: 152
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    곡선 $\frac{x^2}{4}-\frac{y^2}{12}=1$ 위의 점 $(a,b)\ (ab\ne 0)$ 에서의 접선의 기울기가 $2\sqrt{3}$ 일 때 $3a^2+b^2$ 의 값.
  category: '음함수 미분으로 $\frac{dy}{dx}=\frac{3x}{y}$ → 기울기 조건과 곡선식을 연립 → 묻는 결합값'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '기울기 조건에서 나온 $b=\frac{\sqrt{3}}{2}a$ 를 곡선 방정식에 넣어 $a^2$ 만 먼저 확정하고, $a,b$ 를 각각 구하지 않은 채 묻는 결합값 $3a^2+b^2$ 로 직행'
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: '음함수의 미분법 — 이차곡선 위 점의 접선 기울기 조건과 곡선 방정식 연립'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    쌍곡선을 음함수로 미분하면 $\frac{dy}{dx}=\frac{3x}{y}$ 라 기울기 조건이 $a,b$ 의 비례식 하나로 바뀐다.
    여기서 두 식을 연립해야 값이 정해진다는 조건 통합이 핵심이고, 묻는 것이 $a,b$ 가 아니라 $3a^2+b^2$ 이라
    $a^2=\frac{16}{3}$, $b^2=4$ 만 얻으면 부호를 따질 필요가 없다($ab\ne 0$ 조건이 그 편의를 보장한다).
    STEP 2 출발점 ★3 · 통찰 1개 d2 → ★3 유지.
  tier: star_3
  mechanism_primary: '$\frac{x}{2}=\frac{y y''}{6}$ → $y''=\frac{3x}{y}$ → $\frac{3a}{b}=2\sqrt{3}$ → $b=\frac{\sqrt{3}}{2}a$ → 곡선식 연립 → $a^2=\frac{16}{3},\ b^2=4$ → $20$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$20$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/152-301.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '쌍곡선의 두 분모 $4,12$ 와 주어진 기울기, 묻는 결합식($3a^2+b^2$ → $a^2-b^2$ 등)을 바꿀 수 있다. 제약: 기울기 조건에서 나온 비례식을 곡선식에 넣었을 때 $a^2$ 의 계수가 $0$ 이 되지 않아야 한다 — 기울기가 점근선 기울기 $\sqrt{3}$ 와 같아지면 해가 사라진다(가장 좋은 오답 유도 지점).'
    creative: '(1) 기울기를 점근선 기울기로 두고 「그런 점이 없음」을 보이게 하기(★4 · I-VF) (2) 타원으로 바꿔 점이 네 개 나오게 하고 모두 구하게 하기(★3 · I-MI) (3) $a,b$ 를 각각 묻도록 바꿔 부호 분기를 강제하기(★3 · T-부호) (4) 접선의 $y$ 절편을 묻기(★4 · I-CON).'
```

```yaml
- id: GN-CALC2-152-302
  page: 152
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=\ln(e^x+1)$ 의 역함수를 $g(x)$ 라 할 때, 양수 $a$ 에 대하여 $\frac{1}{f''(a)}+\frac{1}{g''(a)}$ 의 값.
  category: '$\frac{1}{g''(a)}=f''(g(a))$ 로 뒤집기 → $e^{g(a)}=e^a-1$ 만으로 $f''(g(a))$ 를 $a$ 로 표현 → 두 항 상쇄'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '역함수 미분법을 거꾸로 써서 $g''(a)=\frac{1}{f''(g(a))}$ 즉 $\frac{1}{g''(a)}=f''(g(a))$ 로 바꿔, 묻는 두 항을 모두 $f''$ 만으로 표현'
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$g(a)$ 를 명시적으로 구하지 않고 $f(g(a))=a$ 에서 $e^{g(a)}=e^a-1$ 만 뽑아 $f''(g(a))=\frac{e^{g(a)}}{e^{g(a)}+1}=1-e^{-a}$ 로 정리'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: '역함수의 미분법 — $\frac{1}{f''(a)}+\frac{1}{g''(a)}$ 가 상수가 되는 구조'
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $\frac{1}{f''(a)}=1+e^{-a}$ 는 바로 나오지만 $\frac{1}{g''(a)}$ 는 $g$ 를 직접 구해야 한다고 착각하기 쉽다.
    역함수 미분 공식을 역방향으로 읽어 $f''(g(a))$ 로 바꾸고, $g(a)$ 자체가 아니라 $e^{g(a)}=e^a-1$ 만 있으면 된다는 것이 두 번째 고비다.
    결과는 $e^{-a}$ 가 상쇄돼 $a$ 와 무관한 $2$.
    [분류 이슈] 통찰 2개라 $+1$ 하면 ★4 지만 두 통찰이 같은 EQV 축이고 계산이 짧아 체감은 ★3, v3.8 §2.13 게이트도 ★4 에 저노출 유형이 없으면 YELLOW 라 ★3 으로 뒀다.
  tier: star_3
  mechanism_primary: '$\frac{1}{f''(a)}=1+e^{-a}$ · $\frac{1}{g''(a)}=f''(g(a))$ 이고 $e^{g(a)}=e^a-1$ → $1-e^{-a}$ → 합 $2$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/152-302.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$f(x)=\ln(e^x+k)$ 의 $k$ 나 $f(x)=\ln(e^{2x}+1)$ 처럼 지수의 계수를 바꿀 수 있다. 제약: $a>0$ 에서 $e^a-k>0$ 이어야 $g(a)$ 가 정의되고, 합이 상수로 떨어지려면 $\frac{1}{f''}$ 와 $f''\circ g$ 의 $e^{-a}$ 항 계수가 같은 크기·반대 부호여야 한다 — $k\ne 1$ 로 바꾸면 합이 상수가 아니게 된다.'
    creative: '(1) 합이 아니라 곱 $\frac{1}{f''(a)g''(a)}$ 을 묻기(★3 유지 · 상쇄가 사라져 $a$ 의 식이 됨) (2) 「모든 양수 $a$ 에 대해 합이 일정함을 보이시오」로 서술형화(★4 · I-EQV d3) (3) $f$ 를 $\ln(e^x-1)$ 로 바꿔 정의역 제한을 먼저 따지게 하기(★4 · I-VF) (4) 합이 $2$ 가 되는 이유를 $y=f(x)$ 와 $y=g(x)$ 의 $y=x$ 대칭으로 설명하게 하기(★4 · I-SYM).'
```

```yaml
- id: GN-CALC2-152-303
  page: 152
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제"
  summary: |
    $\left(-\frac{\pi}{2},\frac{\pi}{2}\right)$ 에서 $f(x)=\ln\left(\frac{\sec x+\tan x}{a}\right)\ (a>0)$ 의 역함수를 $g(x)$ 라 할 때, $\lim\limits_{x\to -2}\frac{g(x)}{x+2}=b$ 이면 $ab$ 의 값. 5지선다.
  category: '극한 존재 → $g(-2)=0$ → $f(0)=-2$ 로 $a$ 결정 → 같은 극한이 $g''(-2)=\frac{1}{f''(0)}$ 임을 이용해 $b$'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '분모 $x+2\to 0$ 인데 극한이 유한하므로 분자도 $0$ 이어야 한다 — $g(-2)=0$ 을 거쳐 $f(0)=-2$ 로 역추적해 $a=e^2$ 를 결정'
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$g(-2)=0$ 을 알고 나면 $\frac{g(x)-g(-2)}{x-(-2)}$ 이므로 주어진 극한이 곧 미분계수 $g''(-2)$ 이고, 역함수 미분법으로 $\frac{1}{f''(0)}$ 로 옮김'
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: '역함수의 미분법 — 극한 존재 조건으로 상수 결정 + $g''$ 값 구하기'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 고비가 차례로 온다. 먼저 「극한이 존재하니 분자가 $0$」이라는 역추적으로 $a$ 를 얻고($f(0)=\ln\frac{1}{a}=-2$),
    그다음 같은 극한을 미분계수의 정의로 다시 읽어야 $b$ 가 나온다. 어느 한쪽만 보면 $a$ 나 $b$ 중 하나에서 멈춘다.
    마지막에 $(\sec x+\tan x)''=\sec x(\sec x+\tan x)$ 라 $f''(x)=\sec x$ 로 약분되는 정리가 붙는다(T-표기).
    STEP 2 출발점 ★3 · 통찰 2개(BW·EQV, 저노출 BW 포함) · 평가원 기출 → +1 하여 ★4.
  tier: star_4
  mechanism_primary: '극한 유한 → $g(-2)=0$ → $f(0)=-2$ → $a=e^2$ · 극한 $=g''(-2)=\frac{1}{f''(0)}$ 이고 $f''(x)=\sec x$ → $b=1$ → $ab=e^2$'
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/152-303.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '극한을 보내는 점 $-2$ 와 그에 따른 $a$ 를 함께 바꿀 수 있다($x\to -3$ 이면 $a=e^3$). 제약: 그 점이 $g$ 의 정의역(= $f$ 의 치역) 안이어야 하고, $f(0)$ 이 그 값이 되도록 $a$ 를 맞춰야 하며, $f''(0)=\sec 0=1$ 이라 $b=1$ 로 고정되므로 $b$ 를 바꾸려면 $g$ 값이 $0$ 이 되는 점을 $x=0$ 이 아닌 곳으로 옮겨야 한다.'
    creative: '(1) $a$ 를 주고 $b$ 만 묻기(★3 · 첫 통찰 제거) (2) 극한값 $b$ 를 주고 $a$ 를 역산하게 하기(★4 유지 · I-BW 강화) (3) $f$ 를 $\ln\frac{1+\sin x}{a\cos x}$ 로 위장해 $\sec x+\tan x$ 임을 먼저 알아보게 하기(★4 · I-EQV 추가) (4) 극한이 존재하지 않는 $a$ 의 값을 묻기(★5 후보 · I-VF).'
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC2-152-304
  page: 152
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["수능 기출"]
  category_type: "연습문제"
  summary: |
    실수 $t$ 에 대하여 원점을 지나고 곡선 $y=\frac{1}{e^x}+e^t$ 에 접하는 직선의 기울기를 $f(t)$ 라 할 때, $f(a)=-e\sqrt{e}$ 인 상수 $a$ 에 대한 $f''(a)$ 의 값. 5지선다.
  category: '접점을 $s$ 로 두고 원점 통과 조건으로 $t$ 와 $s$ 의 관계식 → $f=-e^{-s}$ 를 $s$ 를 매개로 음함수 미분'
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '「원점을 지나는 접선」이라는 기하 조건을 접점 $(s,\ e^{-s}+e^t)$ 에서 $\frac{e^{-s}+e^t}{s}=-e^{-s}$ 즉 $e^t=-(s+1)e^{-s}$ 라는 대수 관계식으로 옮김'
    - step: 3
      type: I-SC
      depth: 3
      effective_depth: 3
      signal_ref: []
      description: '$f(t)=-e^{-s}$ 를 $t$ 의 명시적 식으로 풀 수 없으므로(관계식이 $s$ 에 대해 초월방정식) $s$ 를 매개변수로 두고 관계식을 $t$ 로 음함수 미분해 $\frac{ds}{dt}$ 를 거쳐 $f''$ 를 얻는 갈래를 선택 — 직접 대입 갈래는 막힌다'
  insight_count: 2
  depth_score: 2.50
  type_id: null
  type_hint: '접선의 기울기를 매개변수로 나타낸 함수로 보고 음함수 미분법으로 $f''$ 구하기'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    곡선이 $t$ 에 따라 위아래로 평행이동하므로 접점 $s$ 도 $t$ 에 따라 움직인다 — $s$ 와 $t$ 가 관계식 하나로 묶인 음함수라는 것을 보는 게 출발이다.
    $f(a)=-e\sqrt{e}$ 에서 $e^{-s}=e^{\frac{3}{2}}$ 즉 $s=-\frac{3}{2}$ 를 먼저 얻고, 관계식을 $t$ 로 미분하면 $\frac{ds}{dt}=\frac{e^{t+s}}{s}$,
    이어서 $f''(t)=e^{-s}\frac{ds}{dt}=\frac{e^t}{s}$ 로 간단해진다. 부호($s+1<0$ 이어야 $e^t>0$)와 $s\ne 0$ 을 챙겨야 한다.
    실력 UP 출발점 ★4 · 통찰 2개(RT d2 · SC d3) → ★4. ★5 는 통찰 3개 이상이 필요해 미달.
  tier: star_4
  mechanism_primary: '접점 $s$ → $e^t=-(s+1)e^{-s}$ · $f(t)=-e^{-s}$ → $f(a)=-e\sqrt{e}$ 에서 $s=-\frac{3}{2}$ → 관계식을 $t$ 로 미분 → $f''(t)=\frac{e^t}{s}=-\frac{1}{3}e\sqrt{e}$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/152-304.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '주어진 기울기 $-e\sqrt{e}=-e^{\frac{3}{2}}$ 의 지수를 바꾸면 $s$ 가 그대로 $-\frac{3}{2}$ 대신 다른 값이 된다. 제약: $e^{-s}=(\text{주어진 기울기의 절댓값})$ 에서 나온 $s$ 가 $s<-1$ 이어야 $e^t=-(s+1)e^{-s}>0$ 이 성립하고, $s\ne 0$ 이어야 $f''$ 가 정의된다 — 답 $\frac{e^t}{s}$ 가 유리수배로 떨어지도록 지수를 반정수로 고르는 것이 좋다.'
    creative: '(1) 곡선을 $y=\ln x+t$ 처럼 로그로 바꿔 같은 「접점이 매개변수에 딸려 움직인다」 골조를 재사용하기(★4 유지) (2) $f(t)$ 의 최댓값이나 증가·감소를 묻기(★5 후보 · I-SC+I-VF) (3) 접선의 $y$ 절편을 $g(t)$ 로 두고 $g''$ 를 묻기(★4) (4) 원점 대신 점 $(0,k)$ 를 지나게 해 관계식에 상수를 하나 더 넣기(★5 후보 · I-CON).'
```

```yaml
- id: GN-CALC2-152-305
  page: 152
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    미분가능하고 역함수가 존재하는 $f$ 에 대하여 $\lim\limits_{x\to 2}\frac{f(x)-3}{x-2}=6$, $\lim\limits_{x\to 3}\frac{f(x)-1}{x-3}=\frac{1}{3}$ 일 때, $g=f^{-1}$ 에 대한 $\lim\limits_{x\to 1}\frac{g(g(x))-2}{x-1}$ 의 값.
  category: '두 극한에서 $f$ 의 함숫값·미분계수 읽기 → $g$ 의 대응값 역추적 → 합성함수 미분 + 역함수 미분'
  M: {s: 3, k: 1, a: 3, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '분모가 $0$ 으로 가는데 극한이 유한하므로 분자도 $0$ — 두 극한을 각각 $f(2)=3,\ f''(2)=6$ 과 $f(3)=1,\ f''(3)=\frac{1}{3}$ 이라는 네 개의 값으로 동치 변환'
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '$f$ 의 대응에서 $g$ 의 대응을 역으로 읽어 $g(1)=3$, $g(3)=2$ 를 얻고, 그 결과 $g(g(1))=2$ 라서 묻는 극한의 분자가 $g(g(x))-g(g(1))$ 임을 확인'
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: '묻는 극한을 $(g\circ g)''(1)=g''(g(1))\,g''(1)=g''(3)g''(1)$ 로 분해한 뒤 각 항을 $\frac{1}{f''(2)}$, $\frac{1}{f''(3)}$ 으로 바꿔 네 값을 하나의 곱으로 결합'
  insight_count: 3
  depth_score: 2.00
  type_id: null
  type_hint: '역함수와 합성함수의 미분법 — $(g\circ g)''$ 의 값'
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    계산은 거의 없고 대응 관계를 놓치지 않는 것이 전부다. $f(2)=3,\ f(3)=1$ 에서 $g(3)=2,\ g(1)=3$ 이 나오는데
    이 「숫자 $1,2,3$ 이 돌아가는」 구조에서 어느 것이 $g''(1)$ 이고 어느 것이 $g''(3)$ 인지 뒤바뀌기 쉽다(T-표기).
    $g''(3)=\frac{1}{f''(g(3))}=\frac{1}{f''(2)}=\frac{1}{6}$, $g''(1)=\frac{1}{f''(3)}=3$ 이라 답은 $\frac{1}{2}$.
    $f$ 가 일반 함수로만 주어져 추상도가 높다($M_a=3$). 실력 UP 출발점 ★4 · 통찰 3개 → ★4 유지.
    [분류 이슈] 통찰 3개지만 SC/VF/SYM/XU 가 없어 §2.13 상 ★5 슬롯 자격은 없다.
  tier: star_4
  mechanism_primary: '두 극한 → $f(2)=3,f''(2)=6$ · $f(3)=1,f''(3)=\frac{1}{3}$ → $g(1)=3,g(3)=2$ → $(g\circ g)''(1)=g''(3)g''(1)=\frac{1}{f''(2)}\cdot\frac{1}{f''(3)}=\frac{1}{2}$'
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/152-305.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '네 값 $f(2)=3$, $f''(2)=6$, $f(3)=1$, $f''(3)=\frac{1}{3}$ 의 숫자를 바꿀 수 있다. 제약: $g\circ g$ 가 닫히도록 함숫값들이 서로의 입력이 되는 고리($2\to3\to1$)를 유지해야 하고, 역함수가 존재하도록 $f''$ 의 부호가 모두 같아야 하며, 미분계수가 $0$ 이면 안 된다.'
    creative: '(1) $g(g(x))$ 대신 $f(g(x))$ 나 $g(f(x))$ 를 넣어 항등함수가 되는지 판별하게 하기(★3) (2) 고리를 세 겹으로 늘려 $g(g(g(x)))$ 로 확장(★5 후보 · I-PD) (3) 조건 하나를 빼고 답이 결정되지 않음을 보이게 하기(★5 후보 · I-VF) (4) $f$ 가 증가인지 감소인지까지 판정해야 역함수의 존재를 쓸 수 있게 조건을 약화하기(★5 후보 · I-VF).'
```

## 표본 판정 요약 (24문)

- ★ 분포: ★1 3 · ★2 13 · ★3 5 · ★4 3 · ★5 0. 구역이 개념원리 익히기 → 예제·확인체크 → STEP 1 → STEP 2 → 실력 UP 으로 고르게 이어져 ★2 가 두터운 전형적인 개념 단원 분포다. ★5 는 없다(통찰 3개 이상 + SC/VF/SYM/XU 를 동시에 만족하는 문항이 없음).
- 통찰형 10(150-292 · 151-296 · 151-298 · 151-299 · 151-300 · 152-301 · 152-302 · 152-303 · 152-304 · 152-305) · 절차형 14 · premium 0.
- 통찰 유형 분포(단계 기준 총 16개): I-EQV 7 · I-BW 3 · I-CON 2 · I-SYM 1 · I-VF 1 · I-RT 1 · I-SC 1. depth 3 은 152-304 의 I-SC 하나뿐이고 나머지는 d1 2개(150-292 · 151-298) · d2 13개다. 이 단원의 통찰축은 「주어진 조건을 미분계수의 정의나 계산 가능한 동치식으로 옮기기(EQV)」와 「함숫값·극한값에서 대응점을 역추적하기(BW)」 둘이다.
- type_hint 계열별 분포: 「역함수의 미분법 — $\frac{dy}{dx}=\frac{1}{dx/dy}$ 계산」 4(147-287 · 149-e11 · 149-290 · 149-291) · 「역함수의 미분법의 응용 — $(f^{-1})'(b)=\frac{1}{f'(a)}$」 4(150-e12 · 150-292 · 150-293 · 150-294) · 「매개변수로 나타낸 함수의 미분법」 4(151-295 · 151-296 · 151-299 · 151-300) · 「음함수의 미분법 — $\frac{dy}{dx}$ 계산」 3(147-286 · 148-e10 · 148-288) · 「음함수의 미분법 — 접선의 기울기·미정계수」 3(148-289 · 151-297 · 152-301). 나머지 6 은 음함수 표현 고치기 1(147-285) · 역함수 심화 4(151-298 · 152-302 · 152-303 · 152-305) · 접선의 매개변수화 1(152-304).
- M_total 분포: 4(1문) · 5(3문) · 6(9문) · 7(4문) · 8(3문) · 9(3문) · 11(1문 · 152-304). 함정은 T-범위(음함수 미분에서 분모 $\ne 0$ · 역함수가 존재하는 구간 · 진수 조건)가 가장 많고, 그다음이 T-부호($f'=-\sin x$ · $-\frac{1}{x}$ · 매개변수 두 해 중 부호 기각)와 T-표기(대칭차분의 $2$ 배 · $\sec$ 정리 · $g(g(x))$ 의 대응 혼동)다.
- 그림: 0문(figure 필드 전부 none). 선택형 2문(152-303 · 152-304)이고 나머지 22문은 단답·서술 지시형이며, 소문항 묶음이 5문(147-285 · 148-e10 · 148-288 · 149-e11 · 149-290)이다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC2-148-288 외 「확인체크」 6문 | tag 「확인체크」의 벤더 신호만 보면 ★1 출발이지만 예제 구역의 확인체크는 직전 필수 예제의 유제라 대응 예제와 같은 ★2 를 출발점으로 썼다(148-288 · 148-289 · 149-290 · 149-291 · 150-292 · 150-293 · 150-294). gn-calc2 08 의 관례를 그대로 따랐다 | ★1 / ★2 |
| GN-CALC2-150-e12 | 통찰 0 · M_total 5 라 v3.8 산식상 $-1$(★1) 후보. 「$f(a)=b$ 인 $a$ 를 먼저 찾는다」는 이 단원의 새 절차를 세우는 필수 예제라 출발점 ★2 를 유지했다 | ★1 / ★2 |
| GN-CALC2-151-296 | 대칭차분 극한을 $2f'(1)$ 로 못 읽으면 답이 정확히 절반이 되고 검산으로도 잡히지 않는다. 통찰 1개 d2 라 산식상 ★2 지만 교사 체감은 ★3 | ★2 / ★3 |
| GN-CALC2-151-298 | 「$f$ 와 $f^{-1}$ 의 교점이 $y=x$ 위」를 I-SYM d2 로, $f(x)=12$ 인 $x$ 역추적을 I-BW d1 로 세어 통찰 2개 → ★3 으로 올렸다. 후자를 역함수 미분법의 표준 절차로 보면 통찰 1개가 되어 STEP 1 출발점 ★2 그대로다 | ★2 / ★3 |
| GN-CALC2-152-302 | 통찰 2개라 $+1$ 하면 ★4 지만 두 통찰이 같은 EQV 축이고 계산이 짧다. v3.8 §2.13 게이트도 ★4 슬롯에 저노출 유형(SC/VF/SYM/XU/RT/PD/BW)이 없으면 YELLOW 라 ★3 으로 뒀다 | ★3 / ★4 |
| GN-CALC2-152-305 | 통찰 3개(EQV·BW·CON)이지만 SC/VF/SYM/XU 가 없어 §2.13 상 ★5 슬롯 자격이 없다. 합성함수 미분법(이전 단원)과 역함수 미분법의 결합을 I-XU 로 세면 ★5 후보가 된다 | ★4 / ★5 |
| GN-CALC2-151-295 · 151-296 · 151-299 · 151-300 | 단원명은 「음함수와 역함수의 미분법」인데 연습문제 구역에 17단원(매개변수로 나타낸 함수의 미분법) 문항 4문이 섞여 있다. 개념원리가 연습문제를 17·18 묶음으로 배치한 결과이므로 구역 출발점은 그대로 쓰고 type_hint 만 매개변수 계열로 따로 적었다 | 해당 없음(유형 귀속 이슈) |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **반복된 type_hint 는 세 축**이다. ① 음함수의 미분법(표현 고치기 → $\frac{dy}{dx}$ 계산 → 접선의 기울기·미정계수), ② 역함수의 미분법($\frac{dy}{dx}=\frac{1}{dx/dy}$ 계산 → $(f^{-1})'(b)=\frac{1}{f'(a)}$ 응용), ③ 매개변수 미분법(연습문제에 섞여 들어온 17단원 계열). 24문항이 전부 이 셋 안에 들어온다.
- **통합해도 될 것**: 147-286 · 148-e10 · 148-288 은 「각 항을 $x$ 로 미분해 $\frac{dy}{dx}$ 를 푼다」 한 유형의 난이도 계단(빈칸 → 이차곡선·곱 → 무리식·로그식)으로 충분하다. 147-287 · 149-e11 · 149-290 도 마찬가지로 「$x=g(y)$ 로 뒤집어 미분하고 역수」 한 유형이다. 150-292 · 150-293 · 150-294 는 $f$ 의 종류(다항·삼각·로그)만 다를 뿐 골조가 같으므로 한 유형의 세 변형으로 두는 편이 낫다 — 다만 「$f(a)=b$ 인 $a$ 찾기가 얼마나 어려운가」가 실제 난이도를 결정하므로 그것을 하위 계단 기준으로 삼아야 한다.
- **따로 세워야 할 것**: ① **역함수와 원함수의 관계 문항**(151-298 · 152-302 · 152-305) — 교점이 $y=x$ 위라는 대칭, $\frac{1}{f'}+\frac{1}{g'}$ 의 상쇄, $(g\circ g)'$ 의 분해가 모두 「$g$ 를 직접 구하지 않고 $f$ 로 옮긴다」는 공통 골조를 갖는다. base ★ 3~4 의 독립 유형으로 세울 값어치가 있다. ② **접선의 기울기를 매개변수 함수로 보는 문항**(152-304) — 접점이 매개변수에 딸려 움직이고 음함수 미분으로 $\frac{ds}{dt}$ 를 거쳐야 하는 구조라 이 단원의 다른 어떤 유형과도 도구가 다르다. base ★ 4~5 단독 유형. ③ **극한 존재 조건으로 상수를 역산하는 문항**(152-303) — 「분모 $\to 0$, 극한 유한 ⇒ 분자 $\to 0$」은 미적분Ⅱ 전 단원에 반복되는 상위 골조이므로 단원별로 흩뿌리지 말고 과목 공통 유형으로 한 번 세우고 각 단원에서 참조하는 편이 낫다.
- **base ★ 제안**: 음함수 미분 계산 2 · 음함수 접선 기울기 2 · 역함수 미분 계산 2 · $(f^{-1})'(b)$ 응용 2 · 매개변수 미분 계산 2 · 매개변수 극한·유효성 검증 3 · 역함수와 원함수의 관계 3~4 · 접선의 매개변수화 4 · 극한 존재 조건 역산 4.
