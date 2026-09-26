---
name: mechanism-데이터-GN-CALC2-20
description: 개념원리 미적분Ⅱ 20 함수의 극대와 극소(1/1 · 167~176쪽 167-333~176-358 · 33문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ (22개정 · 학생용) · 전사본 latex-bank/gn-calc2
  section: 20 함수의 극대와 극소
  unit_code: CALC2-20
  part: "1/1"
  extract_range: "167~176쪽 · 167-333~176-358"
  total_problems: 33
  unit_total: 33
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 insights 의 effective_depth 평균(통찰 없으면 0.00). insight_type 은 insights 가 비어 있으면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (crops.json)
---

# 개념원리 미적분Ⅱ · 20 함수의 극대와 극소 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅱ 20단원 「함수의 극대와 극소」 전체(167~176쪽 · 167-333~176-358 · 33문항)를 다룬다. 구역은 다섯이다. **개념원리 익히기** 2문(167-333 · 167-334 · 이계도함수 정의와 극값 판정 두 방법의 빈칸 드릴), **필수·발전 예제** 19문(tag 「필수」 예제 6개와 tag 「발전」 예제 1개, 그리고 각 예제 뒤에 붙는 tag 「확인체크」 유제 12문), **연습문제 STEP 1** 6문, **연습문제 STEP 2** 4문, **연습문제 실력 UP** 2문이다. 개념원리 고등은 구역이 곧 난이도 층이어서 개념원리 익히기 ★1 · 필수 예제 ★2 · 발전 예제 ★3 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 를 출발점으로 삼았다. 「확인체크」는 벤더 신호만 보면 ★1 출발이지만 직전 예제의 유제이므로 **대응 예제와 같은 출발점**을 썼다(gn-calc2 08 에서 쓴 관례를 그대로 따랐고, 분류 이슈 표에 한 줄로 남겼다). 조정 규칙은 「통찰 2개 이상 또는 depth 3 → +1 · 통찰 1개 이상이면서 M_total ≥ 8 → +1 후보 · 통찰 0 이고 M_total ≤ 5 → −1」 로 통일했다. 그림 문항은 없다.

단원의 도구는 여섯이다. ① **이계도함수** — 곱·몫·합성 미분을 두 번 적용해 $f''$ 를 만드는 계산 드릴(167-333 · 168-e8 계열). ② **도함수의 부호로 증가·감소 구간 조사** — $f'(x)=0$ 의 해로 정의역을 쪼개고 부호표를 채운다(169-e9 계열 · 정의역 제외점이 핵심 함정). ③ **전 구간 증가·감소 조건** — 「모든 $x$ 에서 $f'(x)\ge0$」 을 양수 인수로 나눠 **이차부등식이 항상 성립할 조건(판별식)** 또는 **매개변수 분리 후 최댓값** 으로 옮긴다(170-e10 계열 · 이 단원의 첫 통찰축). ④ **극값 구하기** — $f'(x)=0$ 의 해에서 부호 변화를 보거나 $f''$ 의 부호로 판정한다(171-e11 · 172-e12 계열). ⑤ **극값 조건으로 미정계수 역산** — $f'(a)=0$ 과 $f(a)=k$ 두 식을 연립한다(173-e13 계열 · 표준 절차로 보아 통찰로 세지 않았다). ⑥ **극값을 갖거나 갖지 않을 조건** — 「극값을 갖는다」 를 「$f'(x)=0$ 이 부호가 바뀌는 해를 가진다」 로 바꾼 뒤 판별식·정의역 제약으로 매개변수 범위를 정한다(174-e14 계열 · 이 단원의 둘째 통찰축이자 STEP 2 의 주력).

그래서 이 범위의 통찰 라벨은 **I-EQV 에 크게 쏠린다**(③⑥의 「조건을 도함수의 부호 조건으로 옮기기」). 정의역이 제한된 함수에서 판별식만으로 부족해 근의 부호·최솟값 조건까지 묶어야 하는 174-345 에서 I-CON 이 한 번, 극한식을 이계미분계수로 읽어야 하는 176-354 와 접선의 $x$ 절편을 $t$ 의 함수로 옮기는 176-358 에서 I-RT 가, 극댓값이 $x=2n\pi$ 로 주기적으로 나타나는 176-357 에서 I-PD 가 붙는다. 반대로 이계도함수 계산·증가감소 조사·극값 구하기·미정계수 역산은 전부 절차형으로 뒀다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 가 변하는 지점)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CALC2-167-333
  page: 167
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ $y=\sqrt{x}$ · $y=e^{2x}$ · $y=\ln x$ · $y=\sin x$ 네 기본 함수의 이계도함수를 각각 구하는 드릴.
  category: "기본 함수의 도함수 공식 → 같은 공식을 한 번 더 적용"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이계도함수 — 기본 함수 네 가지를 두 번 미분"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $\sqrt{x}=x^{\frac{1}{2}}$ 로 고쳐 지수 미분을 두 번 쓰는 ⑴ 만 한 줄 변형이 들어가고 나머지는 공식 그대로다.
    $e^{2x}$ 에서 합성 상수 $2$ 가 두 번 곱해져 $4e^{2x}$ 가 되는 것(T-표기)이 유일한 실수 지점이다.
    개념원리 익히기 ★1 출발 · 통찰 0 · M_total 4 → ★1 유지. 정의 직후 확인 드릴이다.
  tier: star_1
  mechanism_primary: "도함수 공식으로 한 번 미분 → 결과를 다시 같은 공식으로 미분"
  insight_type: 절차형
  target_cohort: 하위권
  answer: |-
    ⑴ $y''=-\dfrac{1}{4x\sqrt{x}}$ ⑵ $y''=4e^{2x}$ ⑶ $y''=-\dfrac{1}{x^2}$ ⑷ $y''=-\sin x$
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/167-333.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      지수($e^{3x}$ · $e^{-x}$), 거듭제곱근의 차수($\sqrt[3]{x}$ · $x^{\frac{3}{2}}$), 로그의 밑($\log_2 x$), 삼각함수($\cos x$ · $\tan x$)를 자유롭게 바꿀 수 있다. 제약: $\sqrt{x}$·$\ln x$ 계열은 정의역이 $x>0$ 이고, $\tan x$ 는 이계도함수가 $2\sec^2x\tan x$ 로 계산량이 한 단계 늘어난다.
    creative: |-
      (1) 네 함수를 그대로 두고 $f''(1)$ 같은 특정 값만 묻기(★1 유지) (2) $y=x^n\ln x$ 처럼 곱의 미분을 두 번 쓰게 하면 ★2 (3) $y''+ay'+by=0$ 을 만족시키는 상수를 묻는 꼴로 바꾸면 항등식 비교가 붙어 ★2(175-348 과 같은 계단).
```

```yaml
- id: GN-CALC2-167-334
  page: 167
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴⑵ $f(x)=\dfrac{x^2+1}{x}$ 의 극값을 ⑴ 도함수의 부호표 ⑵ 이계도함수의 부호로 구하는 과정의 빈칸 채우기.
  category: |-
    $f'(x)=0$ 의 해 → 부호표 또는 $f''$ 의 부호 → 극대·극소 판정
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극값 판정의 두 방법 — 도함수의 부호표와 이계도함수의 부호"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    몫의 미분으로 $f'(x)=\dfrac{x^2-1}{x^2}$ 를 얻고 $x=\pm1$ 에서 부호가 바뀌는지 본다. 같은 결론을 $f''(\pm1)$ 의 부호로도 확인하는 대조 문항이다.
    함정은 둘이다. 정의역에서 $x=0$ 이 빠지고(T-범위), 부호표의 $x=0$ 칸은 $f'=0$ 의 해가 아니라 정의되지 않는 점이라 극값 후보가 아니다(T-경계).
    빈칸이 절차를 통째로 안내하므로 학생이 새로 결정할 것이 없다. 개념원리 익히기 ★1 출발 · 통찰 0 · M_total 6 → ★1 유지.
  tier: star_1
  mechanism_primary: |-
    몫의 미분 → $f'(x)=0$ 에서 $x=\pm1$ → 부호표(또는 $f''$ 의 부호) → $x=-1$ 극댓값 $-2$ · $x=1$ 극솟값 $2$
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $-1$, $-1$, $-1$, $-2$, $1$, $2$ ⑵ $\dfrac{2}{x^3}$, $-1$, $-2$, $2$, $-1$, $-2$, $1$, $2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/167-334.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      분자의 상수를 바꿔 $f(x)=\dfrac{x^2+k}{x}$ 로 두면 극점이 $x=\pm\sqrt{k}$ 로 옮겨간다. 제약: $k>0$ 이어야 극값이 생기고($k\le0$ 이면 증가만 한다), 극값이 정수로 떨어지려면 $k$ 를 완전제곱수로 잡는다. $f(x)=x+\dfrac{k}{x}$ 로 고쳐 써도 같은 문항이다.
    creative: |-
      (1) 빈칸을 없애고 그냥 극값을 구하게 하면 ★2(171-341 계단) (2) 두 방법 중 하나만 주고 나머지 방법으로 검증하게 하면 ★2 (3) $x=0$ 을 극값 후보로 잘못 넣은 풀이를 주고 틀린 곳을 찾게 하면 정의역 판정이 주 과제가 되어 ★3 · I-EQV 가 붙는다.
```

### 필수·발전 예제

```yaml
- id: GN-CALC2-168-e8
  page: 168
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ $y=(x^2+3x-1)^2$ · $y=e^{3x}\sin 3x$ · $y=\sqrt{x^2+1}$ 의 이계도함수를 구한다.
  category: "합성·곱·무리 함수의 도함수 → 한 번 더 미분해 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이계도함수 — 합성함수·곱함수·무리함수를 두 번 미분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 합성 미분 뒤 다항식이 되어 한 번 더 미분하면 끝난다. ⑵ 는 곱의 미분을 두 번 써야 하고 $\sin$ 항이 서로 상쇄돼 $18e^{3x}\cos 3x$ 만 남는 정리가 필요하다.
    ⑶ 은 $(x^2+1)^{\frac{1}{2}}$ 로 보고 미분한 뒤 몫의 미분을 한 번 더 쓰거나 $\dfrac{x}{\sqrt{x^2+1}}$ 를 곱의 꼴로 바꿔 미분한다.
    세 소문항 모두 공식 적용 순서가 정해져 있어 결정할 것이 없다. 필수 예제 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "합성·곱·지수 법칙으로 1차 미분 → 같은 규칙을 다시 적용 → 공통인수로 묶어 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: |-
    ⑴ $y''=12x^2+36x+14$ ⑵ $y''=18e^{3x}\cos 3x$ ⑶ $y''=\dfrac{1}{(x^2+1)\sqrt{x^2+1}}$
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/168-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      ⑴ 의 내부 이차식 계수와 바깥 지수($3$ 제곱), ⑵ 의 $e$ 지수와 삼각함수 각속도(둘을 다르게 하면 상쇄가 사라진다), ⑶ 의 $\sqrt{x^2+a}$ 의 $a$ 를 바꿀 수 있다. 제약: ⑵ 에서 $e^{kx}\sin kx$ 처럼 두 계수가 같아야 $\sin$ 항이 상쇄돼 답이 한 항으로 떨어진다. ⑶ 은 $a>0$ 이라야 정의역이 실수 전체다.
    creative: |-
      (1) $f''(0)$ 처럼 한 점의 값만 묻기(★2 유지) (2) ⑵ 를 $y''-6y'+18y=0$ 확인으로 바꾸면 항등식 정리가 붙어 ★2~3 (3) $\sqrt{x^2+1}$ 의 이계도함수가 항상 양수임을 보이고 그 뜻(아래로 볼록)을 묻게 하면 다음 단원(곡선의 오목·볼록)과 이어져 ★3 · I-RT.
```

```yaml
- id: GN-CALC2-168-335
  page: 168
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ $y=x^3\ln x$ · $y=x^2e^x$ · $y=\dfrac{1}{x^2+1}$ 의 이계도함수를 구한다.
  category: "곱·몫의 미분 → 한 번 더 미분해 공통인수로 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이계도함수 — 곱함수·분수함수를 두 번 미분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    168-e8 의 유제다. ⑴⑵ 는 곱의 미분 두 번 뒤 $x$ 또는 $e^x$ 로 묶고, ⑶ 은 몫의 미분을 두 번 쓰거나 $(x^2+1)^{-1}$ 로 보고 합성 미분을 두 번 쓴다.
    ⑶ 에서 분모 차수가 $(x^2+1)^3$ 까지 올라가 약분을 빠뜨리기 쉬운 것(T-표기)이 유일한 걸림돌이다.
    대응 예제와 같은 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지. 절차가 고정된 계산 드릴이다.
  tier: star_2
  mechanism_primary: "곱(또는 몫)의 미분으로 1차 → 같은 규칙 한 번 더 → 공통인수로 묶어 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: |-
    ⑴ $y''=x(6\ln x+5)$ ⑵ $y''=(x^2+4x+2)e^x$ ⑶ $y''=\dfrac{2(3x^2-1)}{(x^2+1)^3}$
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-calc2/items/168-335.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      ⑴ 의 $x$ 차수($x^2\ln x$ · $x^4\ln x$), ⑵ 의 다항식 차수와 $e^{kx}$ 의 $k$, ⑶ 의 $\dfrac{1}{x^2+a}$ 의 $a$ 를 바꿀 수 있다. 제약: ⑴ 은 정의역이 $x>0$ 이고, ⑶ 은 $a>0$ 이라야 분모가 $0$ 이 되지 않는다.
    creative: |-
      (1) 세 함수 중 하나를 골라 $f''(1)$ 값만 묻기(★2 유지) (2) ⑵ 를 $f^{(n)}(x)=(x^2+2nx+n(n-1))e^x$ 추정으로 확장하면 I-PD 가 붙어 ★3~4 (3) ⑶ 의 $f''(x)=0$ 이 되는 $x$ 를 묻게 하면 변곡점 준비 문항이 되어 ★3.
```

```yaml
- id: GN-CALC2-168-336
  page: 168
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=\dfrac{x}{\ln x}$ 에 대하여 $f''(e)$ 의 값을 구한다.
  category: "몫의 미분 두 번 → $x=e$ 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이계도함수의 함숫값 — 분수함수를 두 번 미분한 뒤 한 점 대입"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f'(x)=\dfrac{\ln x-1}{(\ln x)^2}$ 를 얻고 몫의 미분을 한 번 더 쓴다. $x=e$ 에서 $\ln e=1$ 이라 $f'(e)=0$ 이 되어 두 번째 미분 결과가 크게 줄어든다.
    끝까지 일반식을 정리하지 않고 $x=e$ 를 먼저 염두에 두면 계산이 짧아지지만, 그것을 몰라도 정면 계산으로 풀린다.
    확인체크(대응 예제 ★2) 출발 · 통찰 0 · M_total 6 → ★2 유지. 분모가 $(\ln x)^3$ 까지 올라가는 계산 부담만 있다.
  tier: star_2
  mechanism_primary: |-
    몫의 미분으로 $f'$ → 다시 몫의 미분으로 $f''$ → $\ln e=1$ 을 대입
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{e}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/168-336.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      대입점을 $x=e^2$ 나 $x=e^{-1}$ 로 바꾸거나 함수를 $\dfrac{x^2}{\ln x}$ · $\dfrac{\ln x}{x}$ 로 바꿀 수 있다. 제약: 정의역이 $x>0$ 이고 $\ln x\ne0$ 이라 $x=1$ 은 대입점이 될 수 없다. 대입점을 $e$ 의 거듭제곱으로 잡아야 답이 $e$ 의 유리식으로 떨어진다.
    creative: |-
      (1) $f'(e)$ 와 $f''(e)$ 를 함께 묻고 $x=e$ 가 극값인지 판정하게 하면 ★3(극값 판정과 결합) (2) $\dfrac{x}{\ln x}$ 의 극솟값을 묻는 꼴로 바꾸면 171-341 계단의 ★2~3 (3) $f''(e)>0$ 의 의미를 그래프 개형으로 설명하게 하면 I-RT 가 붙어 ★3.
```

```yaml
- id: GN-CALC2-168-337
  page: 168
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=(x+a)e^{bx}$ 가 $f'(0)=3$, $f''(0)=-2$ 를 만족시킬 때 상수 $a$, $b$ 에 대하여 $\dfrac{a}{b}$ 의 값을 구한다.
  category: "곱의 미분 두 번 → 두 조건을 연립해 $a$, $b$ 결정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이계도함수 조건으로 미정계수 결정 — $f'(0)$·$f''(0)$ 연립"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f'(x)=e^{bx}\{1+b(x+a)\}$, $f''(x)=e^{bx}\{2b+b^2(x+a)\}$ 를 얻고 $x=0$ 을 넣으면 $1+ab=3$ 과 $b(2+ab)=-2$ 두 식이 나온다.
    앞 식에서 $ab=2$ 를 먼저 확정하면 뒤 식이 $4b=-2$ 로 바로 풀리는 점이 이 문항의 설계 포인트다(치환처럼 $ab$ 를 덩어리로 보는 정리).
    두 매개변수가 들어가 $M_a=2$ 이지만 연립 자체는 표준 미정계수 절차라 통찰로 세지 않았다. 확인체크 ★2 출발 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: |-
    곱의 미분 두 번 → $f'(0)=1+ab=3$ 에서 $ab=2$ → $f''(0)=b(2+ab)=4b=-2$ → $b$, $a$ 순서로 확정
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/168-337.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      두 조건값($3$ 과 $-2$)과 대입점($x=0$)을 바꿀 수 있고 묻는 식도 $ab$ · $a+b$ · $a-b$ 로 바꿀 수 있다. 제약: $1+ab$ 가 조건값과 같아야 하므로 $ab$ 가 먼저 정수로 떨어지게 잡고, 그 뒤 $b(2+ab)$ 가 두 번째 조건값과 맞아떨어지도록 $b$ 를 유리수로 유지한다. 대입점을 $x\ne0$ 로 옮기면 $e^{bx}$ 가 남아 지수 미지수까지 생기므로 피한다.
    creative: |-
      (1) 조건을 $f(0)$·$f'(0)$ 로 바꾸면 계산이 한 단계 줄어 ★1~2 (2) $f''(0)=0$ 을 주고 $a$ 를 $b$ 로 나타내게 하면 매개변수 표현이 되어 ★3 (3) 같은 $f$ 가 극값을 갖도록 하는 $b$ 의 조건을 묻는 꼴로 바꾸면 174-e14 계단의 ★3 이 된다.
```

```yaml
- id: GN-CALC2-169-e9
  page: 169
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴⑵ $f(x)=\ln x-x$ · $f(x)=\dfrac{x}{2}+\dfrac{2}{x}$ 의 증가와 감소를 조사한다.
  category: |-
    정의역 확인 → $f'(x)=0$ 의 해로 구간 분할 → 부호표로 증가·감소 구간 서술
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도함수의 부호로 증가·감소 구간 조사(정의역 제외점 주의)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 정의역 $x>0$ 에서 $f'(x)=\dfrac{1}{x}-1$ 의 부호가 $x=1$ 에서 바뀐다. ⑵ 는 $f'(x)=\dfrac{1}{2}-\dfrac{2}{x^2}=\dfrac{x^2-4}{2x^2}$ 로 $x=\pm2$ 가 경계다.
    이 문항의 실제 채점 포인트는 미분이 아니라 답을 쓰는 방식이다. ⑵ 는 $x=0$ 이 정의역에서 빠지므로 감소 구간을 $[-2,0)$ 와 $(0,2]$ 로 **끊어서** 적어야 하고(T-범위), 경계에서 대괄호·소괄호를 구분해야 한다(T-경계).
    필수 예제 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지. 도구는 하나지만 서술 형식이 따라붙는 표준 유형이다.
  tier: star_2
  mechanism_primary: |-
    정의역 확정 → $f'(x)=0$ 의 해로 구간을 쪼갬 → 각 구간의 부호 → 정의역 제외점에서 구간을 끊어 서술
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 구간 $(0,\,1]$에서 증가, 구간 $[1,\,\infty)$에서 감소 ⑵ 구간 $(-\infty,\,-2]$, $[2,\,\infty)$에서 증가, 구간 $[-2,\,0)$, $(0,\,2]$에서 감소'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/169-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      ⑴ 의 일차항 계수($\ln x-2x$ · $2\ln x-x$), ⑵ 의 두 계수($\dfrac{x}{3}+\dfrac{3}{x}$ 꼴)를 바꿀 수 있다. 제약: ⑵ 에서 $\dfrac{x}{p}+\dfrac{q}{x}$ 는 $pq>0$ 이라야 극점이 $x=\pm\sqrt{pq}$ 로 실수로 나오고, $\sqrt{pq}$ 가 정수가 되게 잡아야 구간 끝점이 깔끔하다. $\ln$ 계열은 정의역 $x>0$ 이 고정이다.
    creative: |-
      (1) 증가·감소 구간 대신 극값을 묻기(★2 유지 · 171-e11 계단) (2) $\dfrac{x}{2}+\dfrac{2}{x}$ 의 그래프 개형을 그리게 하면 점근선 판정이 붙어 ★3 (3) 「구간 $[a,\infty)$ 에서 증가하도록 하는 $a$ 의 최솟값」 으로 역방향을 물으면 175-349 계단의 ★2~3 · I-BW.
```

```yaml
- id: GN-CALC2-169-338
  page: 169
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴⑵ $f(x)=e^x-x$ · $f(x)=x+2\cos x\ (0<x<\pi)$ 의 증가와 감소를 조사한다.
  category: |-
    $f'(x)=0$ 의 해(지수방정식·삼각방정식) → 부호표 → 증가·감소 구간
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도함수의 부호로 증가·감소 구간 조사 — 지수·삼각 도함수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 $f'(x)=e^x-1$ 의 부호가 $x=0$ 에서 바뀌는 한 줄짜리다. ⑵ 는 $f'(x)=1-2\sin x=0$ 에서 $\sin x=\dfrac{1}{2}$ 를 풀어야 하고, 주어진 구간 $0<x<\pi$ 안의 해가 $\dfrac{\pi}{6}$ 와 $\dfrac{5}{6}\pi$ **둘** 이라는 점이 실수 지점이다(T-범위).
    두 해 사이에서 $\sin x>\dfrac{1}{2}$ 이라 가운데 구간만 감소가 되는 부호 배치도 자주 뒤집힌다(T-부호).
    확인체크(대응 예제 ★2) 출발 · 통찰 0 · M_total 6 → ★2 유지. 삼각방정식 해를 빠짐없이 쓰는 것이 유일한 난점이다.
  tier: star_2
  mechanism_primary: |-
    도함수를 $0$ 으로 놓아 구간 안의 해를 모두 찾음 → 부호표 → 증가·감소 구간 서술
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 구간 $(-\infty,\,0]$에서 감소, 구간 $[0,\,\infty)$에서 증가 ⑵ 구간 $\left(0,\,\dfrac{\pi}{6}\right]$, $\left[\dfrac{5}{6}\pi,\,\pi\right)$에서 증가, 구간 $\left[\dfrac{\pi}{6},\,\dfrac{5}{6}\pi\right]$에서 감소'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-calc2/items/169-338.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      ⑴ 은 $e^{2x}-x$ · $e^x-2x$ 로, ⑵ 는 $\cos$ 의 계수($x+\sqrt{2}\cos x$)나 구간($0<x<2\pi$)을 바꿀 수 있다. 제약: ⑵ 는 $\sin x=\dfrac{1}{c}$ 가 특수각이 되도록 계수 $c$ 를 $2$·$\sqrt{2}$·$\dfrac{2}{\sqrt{3}}$ 중에서 고르고, $c\le1$ 이면 도함수가 부호를 바꾸지 않아 증가만 하게 되니 답을 함께 고친다. 구간을 넓히면 해가 늘어나 부호표 칸이 함께 늘어난다.
    creative: |-
      (1) $x+2\cos x$ 의 극값까지 묻기(★2 유지) (2) 계수를 미지수 $k$ 로 두고 「증가만 하도록 하는 $k$」 를 물으면 170-e10 계단의 ★3 · I-EQV (3) $e^x-x>0$ 을 모든 실수에서 보이게 하면 최솟값 논증이 붙어 ★3(부등식 증명 단원과 연결).
```

```yaml
- id: GN-CALC2-170-e10
  page: 170
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $f(x)=(k-x)e^{x^2}$ 이 실수 전체의 집합에서 감소하도록 하는 실수 $k$ 의 값의 범위를 구한다.
  category: |-
    모든 실수에서 $f'(x)\le0$ → $e^{x^2}>0$ 으로 나눔 → 이차부등식이 항상 성립할 조건(판별식)
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: |-
        「실수 전체에서 감소」 를 「모든 $x$ 에 대하여 $f'(x)\le0$」 으로 옮기고, 항상 양수인 $e^{x^2}$ 를 나눠 $2x^2-2kx+1\ge0$ 이라는 이차부등식의 항상 성립 조건(판별식 $\le0$)으로 환원
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "함수가 실수 전체에서 증가(감소)할 조건 — 판별식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    곱의 미분으로 $f'(x)=e^{x^2}(-1+2kx-2x^2)$ 를 얻는 것까지는 절차다. 결정적인 한 걸음은 $e^{x^2}>0$ 이므로 부등호의 방향이 괄호 안 이차식으로 그대로 넘어간다는 인식이고, 그때 문제가 「이차부등식이 모든 실수에서 성립할 조건」 으로 통째로 바뀐다.
    감소 조건이라 부등호가 $\le$ 방향이고(T-부호), 등호를 포함해 판별식도 $\le0$ 으로 잡아야 한다(T-경계). 여기서 부호를 뒤집는 오답이 가장 많다.
    필수 예제 ★2 출발 · I-EQV 1개(d2) · M_total 8 → +1 하여 ★3. 이 단원의 첫 통찰축이자 170-339 · 170-340 · 175-350 이 모두 공유하는 골조다.
  tier: star_3
  mechanism_primary: |-
    곱의 미분 → $e^{x^2}>0$ 으로 나눔 → $2x^2-2kx+1\ge0$ 항상 성립 → 판별식 $\le0$ → $-\sqrt{2}\le k\le\sqrt{2}$
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\sqrt{2}\le k\le\sqrt{2}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/170-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      지수부를 $e^{x^2}$ 대신 $e^{2x^2}$·$e^{x^2+1}$ 로, 앞 인수를 $(k-2x)$·$(2k-x)$ 로 바꿀 수 있다. 제약: 지수부는 미분해도 항상 양수인 인수로 남아야 하고, 괄호 안이 이차식이 되어야 판별식을 쓸 수 있다. 답이 무리수 $\pm\sqrt{2}$ 로 나오므로 정수 답을 원하면 계수를 조정해 판별식이 완전제곱이 되게 잡는다.
    creative: |-
      (1) 「증가하도록」 으로 뒤집으면 이차식의 최고차항 부호 때문에 해가 없어 답이 「그런 $k$ 는 없다」 가 된다(★3 · I-VF 추가 후보) (2) 정의역을 $x>0$ 으로 좁히면 판별식이 아니라 구간 안 최솟값 조건이 되어 ★4 (3) $k$ 의 정수 개수를 묻게 하면 경계 포함 판정이 실제 채점에 걸려 ★3 유지.
```

```yaml
- id: GN-CALC2-170-339
  page: 170
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=ax+\ln(x^2+4)$ 가 구간 $(-\infty,\,\infty)$ 에서 증가하도록 하는 실수 $a$ 의 값의 범위를 구한다.
  category: |-
    모든 실수에서 $f'(x)\ge0$ → 분모 $x^2+4>0$ 을 곱함 → 이차부등식의 항상 성립 조건
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: |-
        $a+\dfrac{2x}{x^2+4}\ge0$ 을 양수 분모로 정리해 $ax^2+2x+4a\ge0$ 이 모든 실수에서 성립할 조건(최고차항 $a>0$ 과 판별식 $\le0$)으로 환원
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "함수가 실수 전체에서 증가(감소)할 조건 — 판별식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    170-e10 의 유제인데 인수가 곱이 아니라 분수로 나온다. $x^2+4$ 가 항상 양수라 부등호를 유지한 채 통분·이항할 수 있다는 점이 같은 통찰이다.
    다른 갈래로 $a\ge-\dfrac{2x}{x^2+4}$ 의 우변 최댓값을 구해도 되지만, 이차부등식으로 옮기는 쪽이 짧다. 여기서 $a>0$ 이라는 최고차항 조건을 빠뜨리면 $a\le-\dfrac{1}{2}$ 까지 답에 끼는 오답이 나온다(T-부호).
    확인체크(대응 예제 ★2) 출발 · I-EQV 1개(d2) · M_total 8 → +1 하여 ★3.
  tier: star_3
  mechanism_primary: |-
    도함수를 통분 → $x^2+4>0$ 을 곱해 $ax^2+2x+4a\ge0$ → $a>0$ 과 판별식 $\le0$ → $a\ge\dfrac{1}{2}$
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a\ge\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/170-339.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      로그의 진수 상수($x^2+9$ · $x^2+1$)와 일차항 계수($2ax$)를 바꿀 수 있다. 제약: 진수는 모든 실수에서 양수여야 하므로 $x^2+c$ 의 $c>0$ 을 유지하고, 판별식 $4-16a^2c/ \cdots$ 가 깔끔한 유리수 경계를 주도록 $c$ 를 완전제곱수로 잡는다. $c$ 를 키우면 경계가 작아진다.
    creative: |-
      (1) 「감소하도록」 으로 뒤집기(★3 유지 · 부호 조건만 반대) (2) 진수를 $x^2-4$ 로 바꾸면 정의역이 끊겨 「실수 전체」 자체가 불가능해지므로 정의역 검토가 주 과제가 되어 ★4 · I-VF (3) $a$ 의 최솟값을 매개변수 분리로 구하게 지정하면 $\dfrac{2x}{x^2+4}$ 의 최댓값 문제가 되어 ★3 · I-SC 후보.
```

```yaml
- id: GN-CALC2-170-340
  page: 170
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=(x^2+1)e^{kx}$ 이 실수 전체의 집합에서 감소하도록 하는 실수 $k$ 의 최댓값을 구한다.
  category: |-
    모든 실수에서 $f'(x)\le0$ → $e^{kx}>0$ 으로 나눔 → $kx^2+2x+k\le0$ 항상 성립(최고차항 부호 + 판별식)
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: |-
        「감소」 를 $kx^2+2x+k\le0$ 이 모든 실수에서 성립할 조건으로 옮기고, 이차부등식이므로 $k<0$ 과 판별식 $\le0$ 을 **함께** 요구해야 함을 인식
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "함수가 실수 전체에서 증가(감소)할 조건 — 판별식과 최고차항 부호"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    곱의 미분으로 $f'(x)=e^{kx}\{2x+k(x^2+1)\}$ 를 얻고 양수 인수를 나누면 $kx^2+2x+k\le0$ 이 된다. 170-e10 과 달리 **최고차항의 계수 자체가 미지수** 라 $k<0$ 을 먼저 요구해야 하는 것이 이 문항의 추가 단계다.
    판별식 $4-4k^2\le0$ 에서 $k\le-1$ 또는 $k\ge1$ 이 나오는데 $k<0$ 과 결합해 $k\le-1$ 만 남기고, 묻는 것이 최댓값이므로 경계 $-1$ 을 답으로 쓴다(T-경계).
    확인체크(대응 예제 ★2) 출발 · I-EQV 1개(d2) · M_total 8 → +1 하여 ★3. $k$ 가 계수와 지수에 동시에 들어가 체감 난도는 170-e10 보다 한 계단 높다.
  tier: star_3
  mechanism_primary: |-
    곱의 미분 → $e^{kx}>0$ 으로 나눔 → $kx^2+2x+k\le0$ 항상 → $k<0$ 과 판별식 $\le0$ → $k\le-1$ → 최댓값 $-1$
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/170-340.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      앞 인수를 $x^2+4$ · $2x^2+1$ 로 바꾸면 판별식이 $4-4\cdot k\cdot 4k$ 꼴로 바뀌어 경계가 $\pm\dfrac{1}{2}$ 처럼 옮겨간다. 제약: 앞 인수는 항상 양수인 이차식이어야 하고(상수항 $>0$·판별식 $<0$), 최고차항 계수가 $k$ 로 남아야 「$k<0$ 을 함께 요구」 하는 구조가 유지된다.
    creative: |-
      (1) 「증가하도록 하는 $k$ 의 최솟값」 으로 뒤집기(★3 유지) (2) 앞 인수를 $x^2-1$ 로 바꾸면 양수 조건이 깨져 구간별 판정이 필요해지고 ★4 (3) $k=-1$ 일 때 $f$ 가 감소하지만 극값이 없음을 그래프로 설명하게 하면 174-e14 의 「극값을 갖지 않을 조건」 과 연결되어 ★3~4.
```

```yaml
- id: GN-CALC2-171-e11
  page: 171
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴⑵ $f(x)=\dfrac{x}{x^2+1}$ · $f(x)=x\sin x+\cos x\ (0<x<2\pi)$ 의 극값을 구한다.
  category: |-
    $f'(x)=0$ 의 해 → 부호 변화로 극대·극소 판정 → 극값 계산
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도함수의 부호 변화로 극값 구하기 — 분수함수·삼각함수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 몫의 미분으로 $f'(x)=\dfrac{1-x^2}{(x^2+1)^2}$ 를 얻고 분모가 항상 양수이므로 분자의 부호만 본다. ⑵ 는 곱의 미분에서 $\sin x$ 가 상쇄돼 $f'(x)=x\cos x$ 로 간단해지는 것이 설계 포인트다.
    ⑵ 는 구간이 $0<x<2\pi$ 라 $x>0$ 이고, 따라서 $\cos x=0$ 만 보면 되며 해는 $\dfrac{\pi}{2}$ 와 $\dfrac{3}{2}\pi$ 둘이다(T-범위). 두 점에서 부호가 $+\to-$ 인지 $-\to+$ 인지 뒤집어 쓰기 쉽다(T-부호).
    필수 예제 ★2 출발 · 통찰 0 · M_total 7 → ★2 유지. 상쇄가 눈에 띄긴 하나 곱의 미분을 정직하게 하면 저절로 나온다.
  tier: star_2
  mechanism_primary: |-
    미분 후 양수 인수를 떼어내고 $f'(x)=0$ 의 해 → 부호 변화 판정 → 그 점의 함숫값이 극값
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x=1$에서 극댓값 $\dfrac{1}{2}$, $x=-1$에서 극솟값 $-\dfrac{1}{2}$ ⑵ $x=\dfrac{\pi}{2}$에서 극댓값 $\dfrac{\pi}{2}$, $x=\dfrac{3}{2}\pi$에서 극솟값 $-\dfrac{3}{2}\pi$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/171-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      ⑴ 의 분모 상수($x^2+4$ → 극점 $x=\pm2$), 분자 계수($\dfrac{2x}{x^2+1}$)를 바꿀 수 있다. ⑵ 는 구간을 $0<x<\pi$ 로 좁히면 극점이 하나만 남는다. 제약: ⑴ 은 분모가 항상 양수여야 부호 판정이 분자만으로 끝나고, ⑵ 는 $x\sin x+\cos x$ 의 계수 균형이 깨지면 $\sin x$ 상쇄가 사라져 $f'(x)=0$ 이 초월방정식이 되므로 계수를 건드리지 않는다.
    creative: |-
      (1) 극값 대신 최댓값·최솟값을 닫힌 구간에서 묻기(★2~3 · 끝점 비교 추가) (2) ⑴ 의 극댓값이 $\dfrac{1}{2}$ 임을 이용해 $\dfrac{x}{x^2+1}\le\dfrac{1}{2}$ 를 증명하게 하면 ★3 · I-RT (3) ⑵ 를 $x\sin x+\cos x=k$ 의 실근 개수로 바꾸면 그래프 개형 판정이 붙어 ★4.
```

```yaml
- id: GN-CALC2-171-341
  page: 171
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ $f(x)=\dfrac{x^2-3x}{x^2+3}$ · $f(x)=\sqrt{1-x^2}+x\ (0<x<1)$ · $f(x)=x^2e^{-x}$ · $f(x)=\cos^2x\ (0<x<\pi)$ 의 극값을 각각 구한다.
  category: |-
    함수 종류별 미분법 → $f'(x)=0$ 의 해와 정의역 확인 → 부호 변화로 극값 판정
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도함수의 부호 변화로 극값 구하기 — 유리·무리·지수·삼각 네 가지"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 소문항이 각각 몫·무리·곱·합성 미분을 한 번씩 훑는 배치다. ⑴ 은 분자가 이차식으로 정리돼 두 극값이 모두 나오고, ⑶ 은 $f'(x)=x(2-x)e^{-x}$ 로 인수분해된다.
    실제 실수는 정의역이 제한된 ⑵⑷ 에서 나온다. ⑵ 는 $0<x<1$ 이라 $x=\dfrac{1}{\sqrt{2}}$ 하나만 살아남아 **극댓값만** 존재하고, ⑷ 는 $f'(x)=-\sin2x$ 의 해 중 $x=\dfrac{\pi}{2}$ 만 구간 안이라 **극솟값만** 존재한다(T-범위).
    확인체크(대응 예제 ★2) 출발 · 통찰 0 · M_total 7 → ★2 유지. 소문항이 넷이라 분량은 크지만 각각은 표준 절차다.
  tier: star_2
  mechanism_primary: |-
    각 함수의 미분법 적용 → 정의역 안의 $f'(x)=0$ 의 해만 추림 → 부호 변화로 극대·극소 판정
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 극댓값: $\dfrac{3}{2}$, 극솟값: $-\dfrac{1}{2}$ ⑵ 극댓값: $\sqrt{2}$ ⑶ 극댓값: $\dfrac{4}{e^2}$, 극솟값: $0$ ⑷ 극솟값: $0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/171-341.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      ⑴ 의 분자 일차항 계수와 분모 상수, ⑵ 의 반지름($\sqrt{4-x^2}+x$), ⑶ 의 지수 계수($x^2e^{-2x}$), ⑷ 의 구간을 바꿀 수 있다. 제약: ⑵ 는 $\sqrt{r^2-x^2}+x$ 에서 극점이 $x=\dfrac{r}{\sqrt{2}}$ 이므로 구간이 그 점을 포함해야 답이 존재하고, ⑷ 는 구간 길이를 늘리면 극점이 늘어나 답의 개수가 바뀐다.
    creative: |-
      (1) 네 함수 중 「극값이 하나뿐인 것」 을 고르게 하면 정의역 판정이 주 과제가 되어 ★3 · I-VF (2) ⑵ 를 $0<x<1$ 대신 $-1<x<1$ 로 넓히면 끝점 거동까지 봐야 해 ★3 (3) ⑶ 의 극댓값 $\dfrac{4}{e^2}$ 를 이용해 $x^2\le\dfrac{4}{e^2}e^x$ 를 보이게 하면 ★3~4 · I-RT.
```

```yaml
- id: GN-CALC2-172-e12
  page: 172
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴⑵ 이계도함수를 이용하여 $f(x)=x-2\sin x\ (0<x<2\pi)$ · $f(x)=x^2\ln x$ 의 극값을 구한다.
  category: |-
    $f'(x)=0$ 의 해 → $f''$ 의 부호로 극대·극소 판정 → 극값 계산
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이계도함수의 부호로 극값 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    부호표 대신 $f''$ 의 부호로 판정하라고 방법까지 지정된 문항이라 학생이 고를 것이 없다. ⑴ 은 $f'(x)=1-2\cos x=0$ 에서 $\cos x=\dfrac{1}{2}$ 의 구간 내 해 $\dfrac{\pi}{3}$, $\dfrac{5}{3}\pi$ 를 모두 찾는 것이 핵심이고(T-범위), $f''(x)=2\sin x$ 의 부호가 두 점에서 반대라 극소·극대가 갈린다.
    ⑵ 는 정의역 $x>0$ 에서 $f'(x)=x(2\ln x+1)=0$ 이 $x=e^{-\frac{1}{2}}$ 하나만 주므로 극솟값만 나온다.
    필수 예제 ★2 출발 · 통찰 0 · M_total 7 → ★2 유지. 판정 도구가 발문에 명시돼 있어 전략 선택 여지가 없다.
  tier: star_2
  mechanism_primary: |-
    미분해 $f'(x)=0$ 의 구간 내 해 → 각 해에서 $f''$ 의 부호($<0$ 이면 극대, $>0$ 이면 극소) → 함숫값 계산
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 극댓값: $\dfrac{5}{3}\pi+\sqrt{3}$, 극솟값: $\dfrac{\pi}{3}-\sqrt{3}$ ⑵ 극솟값: $-\dfrac{1}{2e}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/172-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      ⑴ 의 $\sin$ 계수($x-\sqrt{2}\sin x$ → $\cos x=\dfrac{1}{\sqrt{2}}$)와 구간, ⑵ 의 차수($x^3\ln x$ · $x\ln x$)를 바꿀 수 있다. 제약: ⑴ 은 $\cos x=\dfrac{1}{c}$ 가 특수각이어야 하고 $c\le1$ 이면 극값이 사라진다. ⑵ 는 $x>0$ 이 고정이며 극점이 $e$ 의 거듭제곱으로 떨어지게 차수를 정수로 유지한다.
    creative: |-
      (1) 같은 두 함수를 부호표로 풀게 해 두 방법을 대조시키면 ★2 유지 (2) $f''$ 가 $0$ 이 되는 점에서는 판정이 되지 않는 예($y=x^4$)를 함께 주어 방법의 한계를 묻게 하면 ★3 · I-VF (3) ⑴ 의 극댓값과 극솟값의 합을 묻게 하면 $\sqrt{3}$ 이 상쇄돼 $2\pi$ 가 나오는 대칭이 드러나 ★3 · I-SYM.
```

```yaml
- id: GN-CALC2-172-342
  page: 172
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 이계도함수를 이용하여 $f(x)=xe^x$ · $f(x)=\sqrt{3}\sin x+\cos x\ (0<x<2\pi)$ · $f(x)=x(\ln x)^2$ · $f(x)=e^x(\sin x+\cos x)\ (0<x<2\pi)$ 의 극값을 구한다.
  category: |-
    $f'(x)=0$ 의 구간 내 해 → $f''$ 의 부호로 판정 → 극값 계산
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이계도함수의 부호로 극값 판정 — 지수·삼각·로그 네 가지"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑶ 이 유일하게 걸리는 소문항이다. $f'(x)=\ln x(\ln x+2)$ 로 인수분해해 $x=1$ 과 $x=e^{-2}$ 두 해를 얻어야 하는데 $(\ln x)^2$ 의 미분에서 연쇄법칙을 빠뜨리기 쉽다(T-표기).
    ⑵ 는 $\sqrt{3}\sin x+\cos x=2\sin\left(x+\dfrac{\pi}{6}\right)$ 로 합성하면 극값이 $\pm2$ 임이 즉시 보이지만, 합성하지 않고 미분해도 같은 답이 나오므로 전략 분기로 세지 않았다. ⑷ 는 $f'(x)=2e^x\cos x$ 로 깔끔하게 정리된다.
    확인체크(대응 예제 ★2) 출발 · 통찰 0 · M_total 7 → ★2 유지. 네 소문항 모두 판정 도구가 발문에 지정돼 있다.
  tier: star_2
  mechanism_primary: |-
    미분해 인수분해 → 구간 내 $f'(x)=0$ 의 해 → 각 해에서 $f''$ 의 부호로 극대·극소 → 함숫값
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 극솟값: $-\dfrac{1}{e}$ ⑵ 극댓값: $2$, 극솟값: $-2$ ⑶ 극댓값: $\dfrac{4}{e^2}$, 극솟값: $0$ ⑷ 극댓값: $e^{\frac{\pi}{2}}$, 극솟값: $-e^{\frac{3}{2}\pi}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/172-342.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      ⑴ 은 $x^2e^x$·$xe^{2x}$, ⑵ 는 진폭 조합($\sin x+\sqrt{3}\cos x$), ⑷ 는 지수 계수($e^{2x}(\sin x+\cos x)$)로 바꿀 수 있다. 제약: ⑵ 는 계수 쌍이 $(a,b)$ 일 때 극값이 $\pm\sqrt{a^2+b^2}$ 이므로 근호가 정수로 떨어지는 쌍($1,\sqrt{3}$ · $3,4$)을 고른다. ⑷ 는 $e^{kx}$ 의 $k$ 를 바꾸면 $f'$ 의 상쇄가 깨져 $\tan x=$ 상수 꼴이 되고 극값이 무리식으로 지저분해진다.
    creative: |-
      (1) ⑵ 를 삼각함수의 합성으로만 풀게 지정하면 I-RT 가 명시적으로 붙어 ★3 (2) ⑶ 의 두 극값 사이 간격이나 $x(\ln x)^2=k$ 의 실근 개수를 물으면 그래프 개형이 필요해 ★4 (3) ⑷ 의 극댓값들이 등비수열을 이룸을 묻게 하면 176-357 계단의 ★4 · I-PD.
```

```yaml
- id: GN-CALC2-173-e13
  page: 173
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $f(x)=\dfrac{x^2+ax+b}{x-1}$ 가 $x=3$ 에서 극솟값 $-1$ 을 가질 때 ⑴ 상수 $a$, $b$ ⑵ 극댓값을 구한다.
  category: |-
    $f'(3)=0$ 과 $f(3)=-1$ 을 연립해 미정계수 결정 → 확정된 $f$ 의 다른 극값 계산
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극값 조건으로 미정계수 결정 후 다른 극값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    몫의 미분으로 $f'(x)=\dfrac{x^2-2x-a-b}{(x-1)^2}$ 를 얻고, 극값 조건 두 개를 $a+b=3$ 과 $3a+b=-11$ 로 옮겨 $a=-7$, $b=10$ 을 얻는다.
    ⑵ 에서 확정된 $f'(x)=\dfrac{(x-3)(x+1)}{(x-1)^2}$ 의 다른 해 $x=-1$ 이 극대점이고 $f(-1)=-9$ 다. $x=1$ 은 정의역에서 빠지므로 극값 후보가 아니라는 점(T-범위)만 주의하면 된다.
    「$f'(a)=0$ 이고 $f(a)=k$」 를 연립하는 것은 표준 미정계수 절차라 통찰로 세지 않았다. 필수 예제 ★2 출발 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: |-
    몫의 미분 → $f'(3)=0$·$f(3)=-1$ 연립 → $a=-7$, $b=10$ → 남은 해 $x=-1$ 에서 극댓값
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $a=-7$, $b=10$ ⑵ $-9$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/173-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      극점($x=3$)과 극솟값($-1$), 분모($x-2$)를 바꿀 수 있다. 제약: 분모가 $x-p$ 일 때 $f'$ 의 분자는 $(x-p)^2-(\text{상수})$ 꼴이라 두 극점이 $p$ 에 대해 대칭으로 나온다. 극점 하나를 정하면 나머지 하나가 자동으로 정해지므로 둘 다 정수가 되도록 값을 고른다.
    creative: |-
      (1) ⑵ 만 묻고 $a$, $b$ 는 주어주면 ★2 아래로 내려간다 (2) 「극댓값과 극솟값의 차」 를 물으면 두 극점의 대칭성이 드러나 ★3 · I-SYM (3) 「극값을 갖도록 하는 $b$ 의 범위」 로 바꾸면 174-e14 계단의 ★3 · I-EQV 가 된다.
```

```yaml
- id: GN-CALC2-173-343
  page: 173
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=ax^2-bx+\ln x$ 가 $x=1$ 에서 극솟값 $-2$ 를 가질 때 상수 $a$, $b$ 의 값을 구한다.
  category: |-
    $f'(1)=0$ 과 $f(1)=-2$ 를 연립해 두 미정계수 결정
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극값 조건으로 미정계수 결정 — 일차 연립"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f'(x)=2ax-b+\dfrac{1}{x}$ 에 $x=1$ 을 넣어 $2a-b+1=0$, $f(1)=a-b=-2$ 를 얻는다. $\ln1=0$ 이라 두 식이 모두 일차가 되어 연립이 한 줄로 끝난다.
    정의역이 $x>0$ 이라는 점과 구한 $a$, $b$ 에서 실제로 극소인지 확인하는 마무리만 남는다(T-범위).
    확인체크(대응 예제 ★2) 출발 · 통찰 0 · M_total 6 → ★2 유지. 173-e13 보다 계산이 가볍다.
  tier: star_2
  mechanism_primary: |-
    미분 → $f'(1)=0$ 과 $f(1)=-2$ 두 일차식 연립 → $a=1$, $b=3$
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a=1$, $b=3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/173-343.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      극점($x=1$ → $x=e$)과 극솟값($-2$)을 바꿀 수 있다. 제약: 극점을 $x=1$ 이외로 옮기면 $\ln$ 값이 남아 연립식에 $\ln$ 이 들어가므로 $e$ 의 거듭제곱으로 잡아야 정수 답이 유지된다. $a$ 의 부호가 음수가 되면 극소가 아니라 극대가 되므로 답과 발문을 함께 고친다.
    creative: |-
      (1) $\ln x$ 를 $e^x$ 로 바꾸면 조건식에 $e$ 가 남아 계산이 한 단계 늘어 ★2 유지 (2) 「$x=1$ 에서 극값을 가질 때 $a$, $b$ 사이 관계」 만 묻고 극값 조건을 빼면 ★1~2 (3) 「$f$ 가 극댓값과 극솟값을 모두 갖도록 하는 $a$ 의 범위」 로 바꾸면 174-345 계단의 ★3 · I-EQV+I-CON.
```

```yaml
- id: GN-CALC2-173-344
  page: 173
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $0<x<2\pi$ 에서 정의된 $f(x)=e^{kx}\sin x$ 가 $x=\dfrac{\pi}{4}$ 에서 극값을 가질 때($k$ 는 상수) $f(x)$ 의 극값을 구한다.
  category: |-
    $f'\left(\dfrac{\pi}{4}\right)=0$ 으로 $k$ 결정 → 확정된 $f$ 의 극값을 구간 안에서 모두 계산
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극값 조건으로 상수 결정 후 극값 전부 구하기 — 지수·삼각 곱"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f'(x)=e^{kx}(k\sin x+\cos x)$ 에 $x=\dfrac{\pi}{4}$ 를 넣으면 $\sin$ 과 $\cos$ 값이 같아 $k+1=0$, 곧 $k=-1$ 이 바로 나온다.
    그 다음이 실제 부담이다. $f'(x)=e^{-x}(\cos x-\sin x)=0$ 에서 $\tan x=1$ 의 해가 $0<x<2\pi$ 안에 $\dfrac{\pi}{4}$ 와 $\dfrac{5}{4}\pi$ **둘** 이고, 둘째 해를 빠뜨리면 극솟값이 통째로 사라진다(T-범위).
    상수 역산은 표준 절차라 통찰로 세지 않았다. 확인체크(대응 예제 ★2) 출발 · 통찰 0 · M_total 8 → ★2 유지(M_total 만으로 +1 하지 않는 이 파일 규칙).
  tier: star_2
  mechanism_primary: |-
    곱의 미분 → $f'\left(\dfrac{\pi}{4}\right)=0$ 에서 $k=-1$ → $\tan x=1$ 의 구간 내 두 해 → 각각의 함숫값이 극댓값·극솟값
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '극댓값: $\dfrac{\sqrt{2}}{2}e^{-\frac{\pi}{4}}$, 극솟값: $-\dfrac{\sqrt{2}}{2}e^{-\frac{5}{4}\pi}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/173-344.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      극점을 $x=\dfrac{3}{4}\pi$ 로 옮기면 $k=1$ 이 되고, 구간을 $0<x<4\pi$ 로 넓히면 극값이 각각 둘씩 생긴다. 제약: 극점은 $\tan x$ 가 유리수(특수각)인 곳이라야 $k$ 가 간단히 떨어지고, 구간 폭이 $\pi$ 의 정수배가 아니면 극값의 개수가 비대칭해진다.
    creative: |-
      (1) $k$ 값만 묻기(★2 아래) (2) 극댓값과 극솟값의 비 $\dfrac{|{\text{극대}}|}{|{\text{극소}}|}$ 를 묻게 하면 $e^{\pi}$ 만 남아 176-357 의 등비 구조가 예고되어 ★3 · I-PD (3) 구간을 $x>0$ 전체로 열고 극댓값 수열의 일반항을 묻게 하면 ★4 · I-PD.
```

```yaml
- id: GN-CALC2-174-e14
  page: 174
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    ⑴ $f(x)=\dfrac{x^2-x+a}{e^x}$ 가 극값을 갖도록 하는 $a$ 의 범위 ⑵ $f(x)=kx-2\cos x$ 가 극값을 갖지 않도록 하는 $k$ 의 범위를 구한다.
  category: |-
    「극값을 갖는다(갖지 않는다)」 를 도함수가 부호를 바꾸는 해를 가질(갖지 않을) 조건으로 옮김 → 판별식 또는 값의 범위
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: |-
        「극값을 갖는다」 를 「$e^{-x}>0$ 을 뗀 이차식 $-x^2+3x-1-a=0$ 이 서로 다른 두 실근을 가진다」 로, 「극값을 갖지 않는다」 를 「$k+2\sin x$ 가 부호를 바꾸지 않는다」 로 각각 동치 변환
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "함수가 극값을 갖거나 갖지 않을 조건 — 도함수의 실근과 부호 변화"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 몫(또는 곱)의 미분 뒤 항상 양수인 $e^{-x}$ 를 떼면 이차방정식의 실근 조건만 남아 $D>0$ 에서 $a<\dfrac{5}{4}$ 가 나온다. 핵심은 「극값 존재 = 도함수의 **부호가 바뀌는** 해 존재」 이고, 중근이면 부호가 바뀌지 않아 등호가 빠진다는 점이다(T-경계).
    ⑵ 는 $f'(x)=k+2\sin x$ 의 값의 범위가 $[k-2,\,k+2]$ 임을 이용해 이 구간이 $0$ 을 부호 변화와 함께 품지 않을 조건 $|k|\ge2$ 를 얻는다. 판별식이 아니라 **치역 판정** 으로 푸는 다른 얼굴이다.
    발전 예제 ★3 출발 · I-EQV 1개(d2) · M_total 8 → ★3 유지(★4 로 올리면 저노출 통찰 유형 부재로 게이트 경고가 걸린다).
  tier: star_3
  mechanism_primary: |-
    미분 → 항상 양수인 인수 제거 → ⑴ 이차방정식의 서로 다른 두 실근 조건($D>0$) ⑵ 도함수 치역이 부호를 바꾸지 않을 조건($|k|\ge2$)
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $a<\dfrac{5}{4}$ ⑵ $k\le -2$ 또는 $k\ge 2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/174-e14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      ⑴ 의 분자 계수($x^2-3x+a$ → 판별식이 바뀌어 경계가 옮겨간다)와 ⑵ 의 $\cos$ 계수($kx-3\cos x$ → $|k|\ge3$)를 바꿀 수 있다. 제약: ⑴ 은 분모가 항상 양수인 지수 꼴이어야 부호 판정이 분자만으로 끝나고, ⑵ 는 삼각함수의 진폭이 곧 경계값이므로 진폭을 정하면 답이 자동으로 정해진다.
    creative: |-
      (1) ⑴ 을 「극댓값과 극솟값을 모두 갖도록」 으로 바꾸면 같은 답이지만 서술이 정교해져 ★3 유지 (2) ⑵ 를 「극값을 갖도록」 으로 뒤집으면 $-2<k<2$ 가 되고 경계 제외 근거를 따로 써야 해 ★3 (3) ⑴ 의 분모를 $e^x$ 대신 $x-1$ 로 바꾸면 정의역 제외점이 생겨 근의 위치 조건까지 붙고 ★4 · I-CON.
```

```yaml
- id: GN-CALC2-174-345
  page: 174
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=\ln x+\dfrac{a}{4x}-4x$ 가 극댓값과 극솟값을 모두 갖도록 하는 실수 $a$ 의 값의 범위를 구한다.
  category: |-
    극대·극소 동시 존재 → 도함수의 분자 이차식이 $x>0$ 에서 서로 다른 두 실근 → 판별식 + 근의 합·곱 조건
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: |-
        「극댓값과 극솟값을 모두 갖는다」 를 「$16x^2-4x+a=0$ 이 서로 다른 두 실근을 가진다」 로 옮김(분모 $4x^2>0$ 을 떼어냄)
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: |-
        정의역이 $x>0$ 이므로 판별식만으로는 부족하고 「두 근이 모두 양수」 까지 필요함을 인식해 $D>0$·근의 합 $>0$·근의 곱 $>0$ 세 조건을 하나의 범위로 결합
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "함수가 극댓값과 극솟값을 모두 가질 조건 — 판별식과 근의 부호"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $f'(x)=\dfrac{-16x^2+4x-a}{4x^2}$ 까지는 절차다. 여기서 판별식 $D>0$ 만 쓰면 $a<\dfrac{1}{4}$ 가 나오는데, 정의역이 $x>0$ 이라 **음수 근은 극점이 될 수 없으므로** 근의 곱 $\dfrac{a}{16}>0$ 이 추가로 필요하고 그래야 $0<a<\dfrac{1}{4}$ 가 된다.
    이 「정의역 제약을 근의 부호 조건으로 번역해 판별식과 묶는」 단계가 이 문항의 실제 변별점이고, 빠뜨리면 $a\le0$ 이 통째로 오답에 섞인다(T-범위).
    [분류 이슈] 확인체크(대응 예제가 발전이라 ★3) 출발 · 통찰 2개 → 규칙상 +1 로 ★4 후보지만, I-EQV·I-CON 은 §2.13 저노출 목록에 없어 ★4 게이트가 경고를 낸다. ★3 으로 두고 기록만 한다.
  tier: star_3
  mechanism_primary: |-
    미분해 분자 이차식 추출 → $D>0$ → 정의역 $x>0$ 이므로 근의 합·곱 부호 조건 추가 → $0<a<\dfrac{1}{4}$
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$0<a<\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/174-345.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      $\dfrac{a}{4x}$ 의 분모 계수와 $-4x$ 의 계수를 바꾸면 이차식의 계수가 함께 바뀌어 경계가 옮겨간다. 제약: 로그 때문에 정의역이 $x>0$ 으로 고정돼야 「근의 부호 조건」 구조가 살아 있고, 근의 합이 양수로 자동 만족되도록 일차항 계수의 부호를 유지해야 조건이 세 개 중 둘만 실제로 작동한다. 판별식 경계가 유리수로 떨어지게 계수를 완전제곱 조합으로 잡는다.
    creative: |-
      (1) 「극값을 하나만 갖도록」 으로 바꾸면 중근·한 근만 양수 두 경우로 갈라져 ★4 · I-MI (2) $\ln x$ 를 빼고 정의역을 실수 전체로 열면 근의 부호 조건이 사라져 ★3 아래로 내려간다 (3) $a$ 의 정수 개수를 묻게 하면 경계 제외 판정이 채점에 걸려 ★3 유지.
```

```yaml
- id: GN-CALC2-174-346
  page: 174
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=e^x(x^2+2x+k)$ 가 극값을 갖지 않도록 하는 실수 $k$ 의 값의 범위를 구한다.
  category: |-
    극값 없음 → 도함수의 이차식이 부호를 바꾸지 않을 조건 → 판별식 $\le0$
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: |-
        「극값을 갖지 않는다」 를 「$x^2+4x+k+2\ge0$ 이 모든 실수에서 성립한다」 로 옮김(항상 양수인 $e^x$ 를 떼고, 중근은 부호를 바꾸지 않으므로 등호 포함)
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "함수가 극값을 갖지 않을 조건 — 판별식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    곱의 미분으로 $f'(x)=e^x(x^2+4x+k+2)$ 를 얻는다. $e^x>0$ 이므로 극값의 유무는 괄호 안 이차식이 부호를 바꾸는지로 완전히 결정된다.
    등호 처리가 이 문항의 채점 포인트다. $D=0$ 이면 중근에서 $f'$ 가 $0$ 이 되지만 부호는 바뀌지 않아 극값이 아니므로 $D\le0$ 을 써야 하고, 그래서 답이 $k\ge2$ 로 경계를 포함한다(T-경계).
    확인체크(대응 예제가 발전이라 ★3) 출발 · I-EQV 1개(d2) · M_total 8 → ★3 유지. 174-e14 ⑵ 의 이차식 버전이다.
  tier: star_3
  mechanism_primary: |-
    곱의 미분 → $e^x>0$ 제거 → $x^2+4x+k+2\ge0$ 항상 성립 → $D\le0$ → $k\ge2$
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$k\ge 2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/174-346.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      괄호 안 다항식의 일차항 계수($x^2+6x+k$ → $k\ge6$)나 지수 계수($e^{2x}$)를 바꿀 수 있다. 제약: 지수 계수를 $e^{cx}$ 로 바꾸면 도함수의 이차식이 $cx^2+(2+2c)x+2+ck$ 로 바뀌므로 판별식 경계를 다시 계산해야 하고, $c$ 가 음수면 최고차항 부호가 뒤집혀 「항상 $\ge0$」 이 불가능해진다.
    creative: |-
      (1) 「극값을 갖도록」 으로 뒤집으면 $k<2$ 가 되고 등호가 빠지는 이유를 물을 수 있어 ★3 유지 (2) 「극댓값과 극솟값의 차가 최소가 되는 $k$」 로 바꾸면 매개변수 함수의 최솟값 문제가 되어 ★4 (3) $e^x$ 를 $\dfrac{1}{x}$ 로 바꾸면 정의역 제외점이 생겨 174-345 처럼 근의 부호 조건이 붙고 ★3~4 · I-CON.
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC2-175-347
  page: 175
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $f(x)=\ln(x^2+2)$ 에 대하여 $\displaystyle\lim_{h\to0}\dfrac{f'(2+h)-f'(2)}{h}$ 의 값을 구한다.
  category: |-
    극한식을 미분계수의 정의로 읽어 $f''(2)$ 로 바꾼 뒤 두 번 미분해 대입
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: |-
        주어진 극한을 「$f'$ 의 $x=2$ 에서의 미분계수」, 곧 $f''(2)$ 로 읽어내는 동치 변환(이 인식이 없으면 극한 자체를 계산할 길이 없다)
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "미분계수 정의 꼴 극한을 이계도함수의 값으로 읽기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    극한식이 정확히 $f''(2)$ 의 정의이므로 한 줄로 번역되고, 그 뒤는 $f'(x)=\dfrac{2x}{x^2+2}$ 를 몫의 미분으로 한 번 더 미분해 $x=2$ 를 넣는 절차다.
    번역 착안 자체는 정형이라 depth 1 로 뒀다. 계산에서는 분모가 $(x^2+2)^2$ 로 커져 약분을 빠뜨리는 실수가 나온다(T-표기).
    STEP 1 ★2 출발 · I-EQV 1개(d1) · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: |-
    극한 $=f''(2)$ 로 번역 → $f'(x)=\dfrac{2x}{x^2+2}$ → 몫의 미분으로 $f''$ → $x=2$ 대입
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{1}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/175-347.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      진수 상수($x^2+3$)와 대입점($x=1$·$x=3$)을 바꿀 수 있고, 함수를 $e^{x^2}$·$\sin2x$ 로 바꿔도 같은 골조다. 제약: 진수는 항상 양수여야 하고, $f''$ 의 분자가 $2(c-x^2)$ 꼴이므로 대입점이 $\sqrt{c}$ 보다 큰지 작은지에 따라 답의 부호가 바뀐다. 답이 간단한 분수로 떨어지려면 $x^2+c$ 가 대입점에서 정수가 되게 잡는다.
    creative: |-
      (1) 극한식을 $\dfrac{f(2+h)-f(2)}{h}$ 로 낮추면 일계도함수 문제로 ★1~2 (2) 극한식을 $\dfrac{f'(2+2h)-f'(2)}{h}$ 로 바꿔 계수 $2$ 를 숨기면 정의 읽기가 한 단계 정교해져 ★3 (3) 답이 음수임을 근거로 $x=2$ 부근에서 $f'$ 가 감소함을 설명하게 하면 ★3 · I-RT.
```

```yaml
- id: GN-CALC2-175-348
  page: 175
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $y=e^{-x}\cos x$ 에 대하여 $y''+2y'=ky$ 가 항상 성립할 때 상수 $k$ 의 값을 구한다.
  category: |-
    두 번 미분해 $y''+2y'$ 를 정리 → 원래 $y$ 의 상수배 꼴로 묶어 계수 비교
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이계도함수 항등식에서 상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    곱의 미분을 두 번 하면 $y'=-e^{-x}(\cos x+\sin x)$, $y''=2e^{-x}\sin x$ 가 나오고, 더하면 $\sin$ 항이 상쇄돼 $-2e^{-x}\cos x$ 만 남는다. 이것이 곧 $-2y$ 이므로 $k=-2$ 다.
    부호 실수가 잦은 지점이 둘이다. $e^{-x}$ 의 미분에서 나오는 $-1$ 과 $\cos$ 의 미분에서 나오는 $-1$ 을 모두 챙겨야 한다(T-부호).
    계산 결과를 $y$ 로 되묶는 것은 항등식 문제의 표준 마무리라 통찰로 세지 않았다. STEP 1 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: |-
    곱의 미분 두 번 → $y''+2y'$ 정리 → $\sin$ 항 상쇄 후 $-2e^{-x}\cos x=-2y$ → $k=-2$
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/175-348.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      지수와 삼각의 계수($e^{-2x}\cos3x$)나 항등식의 계수($y''+ay'=ky$)를 바꿀 수 있다. 제약: $y=e^{px}\cos qx$ 일 때 $y''-2py'+(p^2+q^2)y=0$ 이 항상 성립하므로, 항등식의 일차항 계수는 $-2p$ 로 고정해야 $\sin$ 항이 상쇄되고 $k$ 가 존재한다. 계수를 임의로 바꾸면 해가 없어진다.
    creative: |-
      (1) $k$ 대신 $a$ 를 미지수로 두고 「$\sin$ 항이 사라지게 하는 $a$」 를 물으면 계수 비교가 명시적으로 드러나 ★2~3 (2) $y=e^{-x}\sin x$ 로 바꿔 같은 항등식이 성립함을 보이게 하면 ★2 (3) $y''+ay'+by=0$ 의 $a$, $b$ 를 모두 묻게 하면 연립이 붙어 ★3 · I-CON.
```

```yaml
- id: GN-CALC2-175-349
  page: 175
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $f(x)=\dfrac{\ln(1+x)}{1+x}$ 가 구간 $(-1,\,a]$ 에서 증가하고 $[a,\,\infty)$ 에서 감소할 때 상수 $a$ 의 값을 구한다.
  category: |-
    증가·감소가 갈리는 경계점 = 극대점 → $f'(x)=0$ 을 풀어 $a$ 결정
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "증가·감소의 경계점으로 상수 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    발문이 이미 「증가 → 감소」 라는 부호 변화를 알려 주므로 학생이 할 일은 $f'(x)=0$ 을 푸는 것뿐이다. 몫의 미분으로 $f'(x)=\dfrac{1-\ln(1+x)}{(1+x)^2}$ 를 얻고 분모가 양수이므로 분자만 $0$ 으로 놓는다.
    $\ln(1+x)=1$ 에서 $1+x=e$, 곧 $x=e-1$ 이고 이 값이 정의역 $x>-1$ 안에 있는지 확인하면 끝난다(T-범위).
    STEP 1 ★2 출발 · 통찰 0 · M_total 7 → ★2 유지. 169-e9 의 역방향이지만 경계가 하나로 지정돼 있어 판정 부담이 없다.
  tier: star_2
  mechanism_primary: |-
    몫의 미분 → 분모 $(1+x)^2>0$ 제거 → $\ln(1+x)=1$ → $a=e-1$
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$e-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/175-349.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      함수를 $\dfrac{\ln x}{x}$(경계 $x=e$)나 $\dfrac{\ln(2+x)}{2+x}$(경계 $x=e-2$)로 평행이동할 수 있다. 제약: $\dfrac{\ln u}{u}$ 꼴을 유지해야 경계가 $u=e$ 하나로 깔끔하게 나오고, 정의역이 $u>0$ 이므로 평행이동량만큼 구간의 왼쪽 끝도 함께 옮겨야 한다.
    creative: |-
      (1) 극댓값까지 묻게 하면 $\dfrac{1}{e}$ 이 나와 ★2 유지 (2) 「$\dfrac{\ln x}{x}=k$ 의 실근 개수」 로 바꾸면 그래프 개형과 점근 거동이 필요해 ★4 (3) $\ln(1+x)\le\dfrac{(1+x)}{e}$ 형태의 부등식 증명으로 바꾸면 ★3~4 · I-RT.
```

```yaml
- id: GN-CALC2-175-350
  page: 175
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $f(x)=2x-\ln(x^2+k)$ 가 실수 전체의 집합에서 증가하도록 하는 양수 $k$ 의 값의 범위를 구한다.
  category: |-
    모든 실수에서 $f'(x)\ge0$ → 양수 분모를 곱해 이차부등식 → 판별식 $\le0$
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: |-
        「실수 전체에서 증가」 를 $2-\dfrac{2x}{x^2+k}\ge0$ 으로 쓴 뒤 $k>0$ 이라 분모가 항상 양수임을 이용해 $2x^2-2x+2k\ge0$ 이 항상 성립할 조건(판별식 $\le0$)으로 환원
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "함수가 실수 전체에서 증가(감소)할 조건 — 판별식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    170-e10 · 170-339 과 완전히 같은 골조인데, 「양수 $k$」 라는 단서가 정의역 걱정(진수 $>0$)과 분모 부호를 동시에 보장해 준다는 점이 다르다. 그 단서를 읽지 않으면 분모 부호를 따로 따져야 한다(T-범위).
    이항 후 $x^2-x+k\ge0$ 의 판별식 $1-4k\le0$ 에서 $k\ge\dfrac{1}{4}$ 가 나오고, 등호를 포함하는 이유(중근에서도 증가는 유지)를 설명할 수 있어야 한다(T-경계).
    STEP 1 ★2 출발 · I-EQV 1개(d2) · M_total 8 → +1 하여 ★3. 이 범위에서 STEP 1 중 유일하게 ★3 인 문항이다.
  tier: star_3
  mechanism_primary: |-
    미분해 통분 → $x^2+k>0$ 을 곱함 → $x^2-x+k\ge0$ 항상 성립 → 판별식 $\le0$ → $k\ge\dfrac{1}{4}$
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$k\ge\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/175-350.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      일차항 계수($3x-\ln(x^2+k)$ → $k\ge\dfrac{1}{9}$ 꼴)를 바꾸면 경계가 $\dfrac{1}{4c^2}$ 로 옮겨간다. 제약: 계수가 양수여야 「증가」 조건이 성립 가능하고, $k>0$ 단서를 빼면 진수의 정의역까지 검토해야 해 문항 성격이 달라진다. 경계가 유리수로 떨어지도록 계수를 정수로 유지한다.
    creative: |-
      (1) 「감소하도록」 으로 뒤집으면 최고차항 부호 때문에 해가 없어 「그런 $k$ 는 없다」 가 답이 되고 ★3~4 · I-VF (2) $k$ 의 최솟값을 매개변수 분리로 구하게 하면 $\dfrac{2x}{x^2+k}$ 의 최댓값 문제로 바뀌어 ★3 · I-SC (3) 「구간 $(0,\infty)$ 에서만 증가」 로 좁히면 판별식이 아니라 구간 최솟값 조건이 되어 ★4.
```

```yaml
- id: GN-CALC2-175-351
  page: 175
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: ["수능 기출"]
  category_type: "연습문제 STEP 1"
  summary: |
    $f(x)=(x^2-2x-7)e^x$ 의 극댓값과 극솟값을 각각 $a$, $b$ 라 할 때 $a\times b$ 의 값을 구하는 5지선다.
  category: |-
    곱의 미분 → $f'(x)=0$ 의 두 해에서 극대·극소 판정 → 두 극값의 곱
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극댓값과 극솟값의 곱 — 지수·다항 곱함수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    곱의 미분에서 일차항이 상쇄돼 $f'(x)=(x^2-9)e^x=(x-3)(x+3)e^x$ 로 깔끔하게 인수분해되는 것이 이 문항의 전부다. $x=-3$ 이 극대, $x=3$ 이 극소다(T-부호).
    두 극값이 $8e^{-3}$ 과 $-4e^3$ 이라 곱할 때 $e$ 가 상쇄돼 정수 $-32$ 가 나오는 것이 선택지 설계의 의도이고, 계산 마지막에만 나타난다.
    수능 기출이지만 통찰 없이 절차만으로 끝나므로 태그 보정 $+0$. STEP 1 ★2 출발 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: |-
    곱의 미분 → $f'(x)=(x^2-9)e^x$ → $x=-3$ 극댓값·$x=3$ 극솟값 → 곱에서 $e^{-3}\cdot e^{3}=1$ 상쇄
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/175-351.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      이차식의 상수항을 바꾸면 극점이 $x=\pm\sqrt{c}$ 로 옮겨간다($x^2-2x-3$ → $x=\pm\sqrt{5}$). 제약: $(x^2+bx+c)e^x$ 의 도함수 이차식은 $x^2+(b+2)x+b+c$ 이므로, 극점이 부호 대칭($\pm m$)으로 나오려면 $b=-2$ 를 유지해야 하고 그래야 곱에서 $e$ 가 상쇄돼 정수 답이 나온다. $m$ 을 정수로 잡는다.
    creative: |-
      (1) 「극댓값과 극솟값의 합」 으로 바꾸면 $e$ 가 상쇄되지 않아 답이 지저분해지므로 부적합 — 대신 「$a\times b$ 가 정수임을 보여라」 로 바꾸면 ★3 · I-SYM (2) 이차식 계수를 미지수로 두고 「$a\times b=-32$ 가 되도록 하는 상수」 를 묻는 역방향이면 ★4 · I-BW (3) 극값의 존재 조건으로 바꾸면 174-e14 계단의 ★3.
```

```yaml
- id: GN-CALC2-175-352
  page: 175
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $f(x)=xe^{ax+b}$ 이 $x=-2$ 에서 극솟값 $-\dfrac{2}{e}$ 를 가질 때($a$, $b$ 는 상수) $f(4)$ 의 값을 구한다.
  category: |-
    $f'(-2)=0$ 으로 $a$ 결정 → $f(-2)=-\dfrac{2}{e}$ 로 $b$ 결정 → $f(4)$ 계산
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "극값 조건으로 상수 결정 후 함숫값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $f'(x)=e^{ax+b}(1+ax)$ 에서 지수는 항상 양수이므로 $1+ax=0$ 만 보면 되고, $x=-2$ 에서 $a=\dfrac{1}{2}$ 가 바로 나온다. 두 미지수를 **순서대로** 분리해 구하는 것이 요령이다.
    다음 조건 $f(-2)=-2e^{-1+b}=-\dfrac{2}{e}$ 에서 지수끼리 비교해 $b=0$ 을 얻는다. 밑이 같은 지수의 비교라 로그를 쓸 필요가 없다(T-표기).
    STEP 1 ★2 출발 · 통찰 0 · M_total 7 → ★2 유지. 173-e13 계열의 지수함수 버전이다.
  tier: star_2
  mechanism_primary: |-
    곱의 미분 → $1+ax=0$ 에서 $a=\dfrac{1}{2}$ → $f(-2)$ 조건에서 $b=0$ → $f(x)=xe^{\frac{x}{2}}$ 에 $x=4$ 대입
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4e^2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/175-352.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      극점($x=-2$ → $x=-3$ 이면 $a=\dfrac{1}{3}$), 극솟값의 $e$ 지수, 마지막 대입점($f(4)$ → $f(6)$)을 바꿀 수 있다. 제약: 극점이 $x=-\dfrac{1}{a}$ 이므로 $a$ 가 간단한 분수가 되게 극점을 정수로 잡고, 극솟값은 반드시 $(\text{극점})\cdot e^{-1+b}$ 꼴이라 $e$ 의 정수 거듭제곱으로 주어야 $b$ 가 정수로 떨어진다.
    creative: |-
      (1) $f(4)$ 대신 극댓값의 존재 여부를 묻게 하면 「$a>0$ 이면 극소만 존재」 를 설명해야 해 ★3 · I-EQV (2) $b$ 를 주고 $a$ 만 미지수로 두면 ★1~2 (3) 「$f$ 가 극값을 갖지 않도록 하는 $a$」 로 바꾸면 $a=0$ 뿐이라는 경계 논의가 생겨 ★3.
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC2-176-353
  page: 176
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $f(x)=e^{3x}\sin x$ 에 대하여 $x=\alpha$ 가 $f''(x)=0$ 의 해일 때 $\cot\alpha$ 의 값을 구한다.
  category: |-
    곱의 미분 두 번 → $f''=0$ 을 $a\sin\alpha+b\cos\alpha=0$ 으로 정리 → $\cot\alpha$ 로 읽기
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이계도함수가 0 이 되는 점의 삼각비"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    곱의 미분을 두 번 하면 $f''(x)=e^{3x}(8\sin x+6\cos x)$ 로 정리된다. $e^{3x}>0$ 이므로 $8\sin\alpha+6\cos\alpha=0$ 이고, 양변을 $\sin\alpha$ 로 나누면 $\cot\alpha=-\dfrac{4}{3}$ 이 바로 나온다.
    $\tan$ 이 아니라 $\cot$ 을 물었다는 점만 확인하면 되고, 나누는 순서를 뒤집어 $\tan\alpha=-\dfrac{4}{3}$ 으로 답하는 실수가 전형적이다(T-표기).
    [분류 이슈] STEP 2 ★3 출발이나 통찰 0 · M_total 6 이라 체감은 ★2 에 가깝다. −1 규칙(통찰 0 이고 M_total ≤ 5)에 걸리지 않아 라벨은 ★3 으로 두고 기록만 한다.
  tier: star_3
  mechanism_primary: |-
    곱의 미분 두 번 → $f''(x)=e^{3x}(8\sin x+6\cos x)$ → 양수 인수 제거 → $\cot\alpha=-\dfrac{4}{3}$
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-\dfrac{4}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/176-353.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      지수 계수($e^{2x}\sin x$ → $f''=e^{2x}(3\sin x+4\cos x)$)를 바꾸면 답이 $-\dfrac{4}{3}$ 에서 다른 유리수로 옮겨간다. 제약: $y=e^{px}\sin x$ 의 이계도함수는 $e^{px}\{(p^2-1)\sin x+2p\cos x\}$ 이므로, 답이 간단한 유리수가 되려면 $p^2-1$ 과 $2p$ 가 모두 정수인 정수 $p$ 를 고른다($p=2,3,4$).
    creative: |-
      (1) $\tan\alpha$ 를 묻는 버전으로 바꾸면 난도는 같지만 오답 유인이 사라져 ★2 (2) $f'(x)=0$ 과 $f''(x)=0$ 을 함께 주고 두 해의 관계를 묻게 하면 ★4 (3) $f''(x)=0$ 인 점이 변곡점임을 이용해 그래프 개형을 묻게 하면 다음 단원과 이어져 ★4 · I-RT.
```

```yaml
- id: GN-CALC2-176-354
  page: 176
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $f(x)=e^x\sin x$ 에 대하여 $\displaystyle\lim_{x\to\pi}\dfrac{f'(x)-a}{x-\pi}=b$ 일 때 상수 $a$, $b$ 에 대하여 $a+b$ 의 값을 구한다.
  category: |-
    분모 $\to0$ 이므로 분자 $\to0$ → $a=f'(\pi)$ → 남은 극한은 $f''(\pi)=b$
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: |-
        극한값이 존재하고 분모가 $0$ 으로 가므로 분자도 $0$ 으로 가야 한다는 필요조건을 끌어내 $a=f'(\pi)$ 를 먼저 확정
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: |-
        $a$ 를 대입하고 남은 극한 $\lim_{x\to\pi}\dfrac{f'(x)-f'(\pi)}{x-\pi}$ 를 미분계수의 정의로 다시 읽어 $b=f''(\pi)$ 로 표현 전환
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "극한 조건에서 도함수·이계도함수 값 읽기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    극한을 직접 계산하려 들면 길이 막히고, 「분모가 $0$ 으로 가는데 극한이 존재한다」 는 단서에서 $a$ 를 역산하는 것이 첫 걸음이다. $f'(x)=e^x(\sin x+\cos x)$ 이므로 $a=f'(\pi)=-e^{\pi}$ 다.
    두 번째 걸음은 남은 극한이 정확히 $f'$ 의 미분계수 정의라는 인식이고, $f''(x)=2e^x\cos x$ 에서 $b=-2e^{\pi}$ 를 얻는다. 두 착안이 모두 없으면 손을 못 댄다.
    [분류 이슈] STEP 2 ★3 출발 · 통찰 2개 → 규칙상 ★4 후보지만 두 착안 모두 기출에서 반복 노출된 정형이라 ★3 으로 뒀다. I-RT 가 있어 ★4 게이트 자체는 통과한다.
  tier: star_3
  mechanism_primary: |-
    분자 $\to0$ 조건으로 $a=f'(\pi)=-e^{\pi}$ → 남은 극한 $=f''(\pi)$ → $f''(x)=2e^x\cos x$ 에서 $b=-2e^{\pi}$ → $a+b$
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-3e^{\pi}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/176-354.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      극한점($x\to\pi$ → $x\to\dfrac{\pi}{2}$ 나 $x\to0$)과 함수($e^x\cos x$ · $e^{2x}\sin x$)를 바꿀 수 있다. 제약: 극한점에서 $\sin$·$\cos$ 값이 $0$ 이나 $\pm1$ 이 되는 특수각이라야 $a$, $b$ 가 $e$ 의 거듭제곱 배로 떨어진다. 극한점을 특수각이 아닌 곳으로 옮기면 답이 삼각비 섞인 식이 되어 선택지로 쓰기 어렵다.
    creative: |-
      (1) $a$ 만 묻는 버전이면 첫 착안 하나로 끝나 ★2~3 (2) 분모를 $(x-\pi)^2$ 로 바꾸면 분자에서 일계·이계 조건이 동시에 필요해 ★4 (3) $b$ 의 부호로 $x=\pi$ 부근에서 $f'$ 가 감소함을 말하게 하면 그래프 해석이 붙어 ★4 · I-RT.
```

```yaml
- id: GN-CALC2-176-355
  page: 176
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $0\le x\le2\pi$ 에서 $f(x)=a\sin x+b\cos x+x$ 가 $x=\dfrac{\pi}{3}$ 와 $x=\pi$ 에서 극값을 가질 때($a$, $b$ 는 상수) $f(x)$ 의 극솟값을 구한다.
  category: |-
    두 극점에서 $f'=0$ 을 연립해 $a$, $b$ 결정 → 부호 변화로 어느 쪽이 극소인지 판정 → 함숫값
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 점에서 극값을 가질 조건으로 상수 결정 후 극솟값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $f'(x)=a\cos x-b\sin x+1$ 에 두 극점을 넣으면 $x=\pi$ 쪽이 $1-a=0$ 으로 먼저 풀리고, 이어 $x=\dfrac{\pi}{3}$ 쪽에서 $b=\sqrt{3}$ 이 나온다. 조건 하나가 미지수 하나를 바로 주도록 설계돼 있다.
    남은 일은 두 극점 중 어느 쪽이 극소인지 가리는 것이다. $f'(x)=2\cos\left(x+\dfrac{\pi}{3}\right)+1$ 의 부호가 $x=\pi$ 에서 $-\to+$ 로 바뀌므로 $x=\pi$ 가 극소이고 극솟값은 $\pi-\sqrt{3}$ 이다(T-부호).
    미정계수 연립과 부호 판정 모두 표준 절차라 통찰로 세지 않았다. STEP 2 ★3 출발 · M_total 8 → ★3 유지.
  tier: star_3
  mechanism_primary: |-
    $f'(\pi)=0$ 에서 $a=1$ → $f'\left(\dfrac{\pi}{3}\right)=0$ 에서 $b=\sqrt{3}$ → 부호 변화로 $x=\pi$ 가 극소 → $f(\pi)=\pi-\sqrt{3}$
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\pi-\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/176-355.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      두 극점($\dfrac{\pi}{3}$·$\pi$ → $\dfrac{2}{3}\pi$·$0$ 등)과 일차항 계수($f(x)=a\sin x+b\cos x+2x$)를 바꿀 수 있다. 제약: 두 극점은 $f'(x)=0$ 의 해이므로 합성한 $2\cos(x+\theta)+c$ 가 그 두 점에서 동시에 $0$ 이 되도록 특수각 쌍으로 잡아야 하고, 그러려면 두 극점이 $-\theta$ 에 대해 대칭이어야 한다. 아무 두 각이나 넣으면 연립이 모순이 된다.
    creative: |-
      (1) 극댓값을 묻는 버전으로 바꾸면 부호 판정의 반대쪽이 답이 되어 ★3 유지 (2) 「극댓값과 극솟값의 차」 를 물으면 합성의 대칭이 드러나 ★4 · I-SYM (3) 극점 하나만 주고 나머지 극점을 찾게 하면 $2\cos(x+\theta)=-1$ 의 해 전부를 구해야 해 ★4 · I-MI.
```

```yaml
- id: GN-CALC2-176-356
  page: 176
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $f(x)=2\ln x-\dfrac{a}{x}-x$ 가 극값을 갖지 않도록 하는 정수 $a$ 의 최댓값을 구한다.
  category: |-
    극값 없음 → 도함수의 분자가 $x>0$ 에서 부호를 바꾸지 않을 조건 → 구간 최솟값 조건 → 정수 최댓값
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: |-
        「극값을 갖지 않는다」 를 「정의역 $x>0$ 전체에서 $-x^2+2x+a\le0$」 으로 옮김. $x\to\infty$ 에서 분자가 음수이므로 부호가 바뀌지 않으려면 **항상 $\le0$** 쪽 한 갈래만 가능하다는 판정까지 포함
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "함수가 극값을 갖지 않을 조건 — 제한된 정의역에서의 최솟값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $f'(x)=\dfrac{-x^2+2x+a}{x^2}$ 이고 분모는 양수이므로 분자의 부호만 본다. 174-346 과 다른 점은 정의역이 $x>0$ 으로 잘려 있어 「모든 실수」 가 아니라 「양의 실수 전체」 에서의 조건이라는 것이다(T-범위).
    $g(x)=x^2-2x-a$ 의 꼭짓점 $x=1$ 이 마침 정의역 안이라 최솟값 조건 $g(1)=-1-a\ge0$, 곧 $a\le-1$ 이 나온다. 꼭짓점이 정의역 밖이었다면 판별식이 아니라 끝점 비교가 되었을 것이므로, 이 확인을 건너뛰면 우연히 맞는 풀이가 된다.
    마지막에 정수 최댓값을 고르는 단계가 붙는다(T-경계). STEP 2 ★3 출발 · I-EQV 1개(d2) · M_total 8 → ★3 유지.
  tier: star_3
  mechanism_primary: |-
    미분해 분자 추출 → $x>0$ 에서 $x^2-2x-a\ge0$ → 꼭짓점 $x=1$ 이 정의역 안 → $-1-a\ge0$ → $a\le-1$ → 최댓값 $-1$
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/176-356.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      $\ln$ 의 계수와 일차항 계수($3\ln x-\dfrac{a}{x}-x$ → 꼭짓점이 $x=\dfrac{3}{2}$ 로 이동)를 바꿀 수 있다. 제약: 꼭짓점이 정의역 $x>0$ 안에 남아야 최솟값 조건이 그대로 쓰이고, 밖으로 나가면 끝점 극한 비교로 구조가 바뀐다. $a$ 가 정수로 떨어지도록 계수를 정수로 유지한다.
    creative: |-
      (1) 「극값을 갖도록 하는 정수 $a$ 의 최솟값」 으로 뒤집으면 $a\ge0$ 이 되고 $x>0$ 에서 근이 하나뿐임을 따져야 해 ★4 · I-VF (2) $\dfrac{a}{x}$ 를 $\dfrac{a}{x^2}$ 로 바꾸면 분자가 삼차식이 되어 ★4 (3) 극값을 갖지 않는 $a$ 중 $f$ 가 감소함을 함께 보이게 하면 ★3 유지.
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC2-176-357
  page: 176
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    $x>0$ 에서 $f(x)=e^{-x}(\sin x+\cos x)$ 의 극댓값을 큰 것부터 $a_1$, $a_2$, $a_3$, $\cdots$ 이라 할 때 $\ln a_{99}-\ln a_{100}$ 의 값을 구한다.
  category: |-
    도함수의 주기적 부호 변화 → 극대점이 $x=2n\pi$ → 극댓값 수열의 일반항 $e^{-2n\pi}$ → 로그의 차
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: |-
        $f'(x)=-2e^{-x}\sin x$ 의 부호가 $\pi$ 마다 뒤집히는 것을 보고 극대점이 $x=2\pi,\,4\pi,\,\cdots$ 즉 $x=2n\pi$ 로만 나타난다는 주기 규칙을 발견(극소점 $x=(2n-1)\pi$ 와 갈라내야 한다)
    - step: 3
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: |-
        99번째·100번째 극댓값을 직접 계산하지 않고 일반항 $a_n=e^{-2n\pi}$ 로 옮긴 뒤 로그를 취해 등차 꼴 $\ln a_n=-2n\pi$ 로 바꿔 차를 즉시 읽음
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "극댓값이 이루는 수열의 일반항"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    곱의 미분에서 $\cos$ 항이 상쇄돼 $f'(x)=-2e^{-x}\sin x$ 가 되고, $e^{-x}>0$ 이므로 부호는 $-\sin x$ 가 전부다. 여기서 극대·극소가 $\pi$ 간격으로 **번갈아** 나타나고 극대만 $x=2n\pi$ 라는 것을 가려내야 하며, 극소점을 섞어 세면 답이 $\pi$ 로 반토막 난다(T-부호).
    $f(2n\pi)=e^{-2n\pi}$ 이므로 극댓값 수열은 공비 $e^{-2\pi}$ 의 등비수열이고, 로그를 취하면 공차 $-2\pi$ 의 등차가 되어 99·100 이라는 큰 첨자가 무의미해진다.
    실력 UP ★4 출발 · 통찰 2개(I-PD 포함) → ★4 유지. §2.13 저노출 유형(I-PD·I-RT)이 있어 ★4 게이트를 통과한다. ★5 는 통찰 3개 이상 + SC/VF/SYM/XU 가 필요해 해당하지 않는다.
  tier: star_4
  mechanism_primary: |-
    곱의 미분 → $f'(x)=-2e^{-x}\sin x$ → 극대점 $x=2n\pi$ → $a_n=e^{-2n\pi}$ → $\ln a_{99}-\ln a_{100}=2\pi$
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$2\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/176-357.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      지수 계수($e^{-2x}$ → 공차가 $-4\pi$), 첨자 쌍($a_{10}$·$a_{11}$), 묻는 식($\dfrac{a_{99}}{a_{100}}$)을 바꿀 수 있다. 제약: $e^{px}(\sin x+\cos x)$ 꼴에서 $\cos$ 항 상쇄가 유지되려면 $\sin$ 과 $\cos$ 의 계수가 같아야 하고, 그래야 $f'$ 가 $\sin x$ 한 항으로 떨어져 극대점이 $2n\pi$ 로 깔끔하게 나온다. 첨자는 연속한 두 개라야 답이 공차 하나로 끝난다.
    creative: |-
      (1) 극솟값 수열로 바꾸면 $x=(2n-1)\pi$ 가 되어 같은 골조 ★4 유지 (2) $\sum \ln a_n$ 이나 $\sum a_n$(등비급수)으로 확장하면 수열 단원과 결합해 ★5 후보 · I-XU (3) 「극댓값이 모두 양수임을 보여라」 로 바꾸면 부호 논증만 남아 ★3.
```

```yaml
- id: GN-CALC2-176-358
  page: 176
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    양의 실수 $t$ 에 대하여 곡선 $y=-\ln x$ 위의 두 점 P$(t,\,-\ln t)$, Q$(2t,\,-\ln2t)$ 에서의 접선의 $x$ 절편을 각각 $f(t)$, $g(t)$ 라 할 때 $h(t)=f(t)-g(t)$ 의 극값을 구한다.
  category: |-
    접선의 방정식 → $x$ 절편을 $t$ 의 식으로 → 로그 성질로 $h(t)$ 정리 → 미분해 극값
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: |-
        「접선의 $x$ 절편」 이라는 기하 정보를 접선의 방정식에 $y=0$ 을 넣어 $f(t)=t(1-\ln t)$ 라는 대수식으로 옮김(이 전환 없이는 미분할 대상 자체가 없다)
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: |-
        $\ln2t=\ln2+\ln t$ 로 쪼개 $h(t)=t\ln t+(2\ln2-1)t$ 라는 단일 함수로 합쳐, 두 접선의 차라는 복합 구조를 한 번 미분 가능한 꼴로 동치 변환
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "접선의 $x$ 절편으로 정의된 함수의 극값"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    $y'=-\dfrac{1}{x}$ 로 두 접선을 세우고 $y=0$ 을 넣어 $f(t)=t(1-\ln t)$, $g(t)=2t(1-\ln2t)$ 를 얻는 것이 첫 고비다. 문자 $t$ 가 접점의 좌표이자 최종 변수라서 미분 대상을 혼동하기 쉽다(T-표기).
    둘째 고비는 $h(t)$ 정리다. $\ln2t$ 를 분리하지 않으면 식이 정리되지 않는데, 분리하면 $h'(t)=\ln t+\ln4=\ln4t$ 라는 아주 간단한 도함수가 나와 $t=\dfrac{1}{4}$ 에서 극소임이 바로 보인다.
    정의역이 $t>0$ 이라 극댓값은 없고 극솟값 하나만 존재한다는 서술도 필요하다(T-범위). 실력 UP ★4 출발 · 통찰 2개(I-RT 포함) → ★4 유지. §2.13 게이트 통과.
  tier: star_4
  mechanism_primary: |-
    두 접선의 방정식 → $y=0$ 으로 $x$ 절편 $f(t)$, $g(t)$ → $\ln2t$ 분리로 $h(t)=t\ln t+(2\ln2-1)t$ → $h'(t)=\ln4t=0$ → $t=\dfrac{1}{4}$ 에서 극솟값 $-\dfrac{1}{4}$
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '극솟값: $-\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/176-358.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: |-
      둘째 점의 가로좌표 배수($3t$ · $kt$)나 곡선($y=\ln x$ · $y=\ln 2x$)을 바꿀 수 있다. 제약: 배수를 $k$ 로 두면 $h'(t)=\ln t+\ln k^{\frac{k}{k-1}}\cdots$ 꼴로 상수만 바뀌므로 극점은 항상 $\ln$ 의 상수항으로 결정된다. 극점과 극값이 동시에 간단한 분수로 떨어지려면 배수를 $2$ 로 두는 현재 설정이 가장 깔끔하고, 배수를 바꾸면 답을 다시 계산해야 한다.
    creative: |-
      (1) $x$ 절편 대신 $y$ 절편으로 바꾸면 $f(t)=-\ln t+1$ 꼴이 되어 계산이 가벼워져 ★3 (2) 두 접선의 교점이나 두 절편 사이 거리의 최솟값을 물으면 같은 골조에서 ★4 유지 (3) 두 접선이 이루는 삼각형의 넓이의 극값으로 바꾸면 곱의 미분이 더해져 ★5 후보 · I-XU(기하와 미분의 결합).
```

## 표본 판정 요약 (33문)

- ★ 분포: ★1 2 · ★2 18 · ★3 11 · ★4 2 · ★5 0. 개념원리 익히기 2문이 ★1, 실력 UP 2문이 ★4 로 양 끝을 이루고, 나머지는 「계산·판정 절차형 ★2」 와 「조건형(증가·감소 조건 · 극값 존재 조건) ★3」 두 덩어리로 갈린다. ★5 는 없다(통찰 3개 이상 + SC/VF/SYM/XU 조합이 이 범위에 없다).
- 통찰형 12(170-e10 · 170-339 · 170-340 · 174-e14 · 174-345 · 174-346 · 175-347 · 175-350 · 176-354 · 176-356 · 176-357 · 176-358) · 절차형 21 · premium 0.
- 통찰 유형 분포(단계 기준 총 16개): I-EQV 11 · I-RT 3 · I-CON 1 · I-PD 1. depth 는 175-347 의 I-EQV 하나만 d1 이고 나머지 15개가 d2 이며, 감쇠(§2.9) 대상은 없어 effective_depth 는 모두 depth 와 같다. 「조건을 도함수의 부호 조건으로 옮기기」 라는 I-EQV 하나가 이 단원 통찰축의 3분의 2를 차지한다.
- type_hint 상위 5: 「극값 조건으로 미정계수·상수 결정」 6(168-337 · 173-e13 · 173-343 · 173-344 · 175-352 · 176-355) · 「함수가 실수 전체에서 증가(감소)할 조건 — 판별식」 4(170-e10 · 170-339 · 170-340 · 175-350) · 「함수가 극값을 갖거나 갖지 않을 조건」 4(174-e14 · 174-345 · 174-346 · 176-356) · 「이계도함수 구하기」 4(167-333 · 168-e8 · 168-335 · 168-336) · 「도함수 또는 이계도함수의 부호로 극값 구하기」 4(171-e11 · 171-341 · 172-e12 · 172-342). 그 밖에 「증가·감소 구간 조사」 3(169-e9 · 169-338 · 175-349)과 단발 유형 8(167-334 · 175-347 · 175-348 · 175-351 · 176-353 · 176-354 · 176-357 · 176-358)이 있다.
- M_total 분포: 4(1문) · 6(10문) · 7(9문) · 8(12문) · 9(1문 · 176-358). 함정은 T-범위(정의역 $x>0$·$x\ne0$, 구간 안의 삼각방정식 해를 빠짐없이 세기)와 T-부호(증가·감소의 부등호 방향, 극대·극소 뒤바뀜), T-경계(중근에서 부호가 바뀌지 않아 등호가 들어가거나 빠지는 판정)가 거의 모든 ★3 문항에서 실제 채점에 관여한다.
- 그림: 0문. 선택형 1문(175-351 · 5지선다)이고 나머지는 단답·서술 지시형이며, 소문항 묶음이 10문(167-333 · 167-334 · 168-e8 · 168-335 · 169-e9 · 169-338 · 171-e11 · 171-341 · 172-e12 · 172-342 · 173-e13 · 174-e14 중 ⑴⑵ 이상 구성), 단문항이 나머지다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC2-168-335 외 「확인체크」 11문 | tag 「확인체크」의 벤더 신호만 보면 ★1 출발이지만 예제 구역의 확인체크는 직전 예제의 유제라 **대응 예제와 같은 출발점**(필수 ★2 · 발전 ★3)을 썼다(168-335 · 168-336 · 168-337 · 169-338 · 170-339 · 170-340 · 171-341 · 172-342 · 173-343 · 173-344 · 174-345 · 174-346). gn-calc2 08 의 관례를 그대로 따랐다 | ★1 / 대응 예제 ★ |
| GN-CALC2-173-344 | 상수 $k$ 역산 뒤 구간 안의 극값을 **모두** 찾아야 해 M_total 8 로 이 범위 상위권이지만, 통찰 0 이라 확인체크 출발점 ★2 를 유지했다. M_total 만으로 +1 하는 규칙을 쓰면 ★3 이 된다 | ★2 / ★3 |
| GN-CALC2-174-345 | 통찰 2개(I-EQV + I-CON)라 조정 규칙상 ★4 후보지만, 두 유형 모두 §2.13 저노출 목록(SC/VF/SYM/XU/RT/PD/BW)에 없어 ★4 로 올리면 게이트 경고가 걸린다. ★3 으로 두고 기록만 했다 | ★3 / ★4 |
| GN-CALC2-176-353 | STEP 2 구역이라 ★3 출발이나 실제로는 이계도함수 한 번 정리하고 $\cot$ 으로 읽으면 끝나 통찰 0 · M_total 6 이다. −1 규칙(통찰 0 이고 M_total ≤ 5)에 걸리지 않아 라벨은 ★3 으로 두었지만 체감은 ★2 | ★2 / ★3 |
| GN-CALC2-176-354 | 통찰 2개(I-EQV + I-RT)로 규칙상 ★4 후보이고 I-RT 가 있어 게이트도 통과하지만, 「분자 $\to0$」 과 「미분계수 정의 읽기」 둘 다 기출에서 반복 노출된 정형이라 ★3 으로 두었다 | ★3 / ★4 |
| GN-CALC2-173-e13 · GN-CALC2-175-352 · GN-CALC2-176-355 | 「극값 조건으로 미정계수를 역산한다」 를 I-BW 로 셀지 표준 미정계수 절차로 볼지 경계. 이 파일은 §2.2 의 「단순 미정계수 대입은 인정 안 함」 을 따라 전부 절차형으로 통일했다. 반대로 세면 이 계열 6문이 모두 통찰형이 되고 ★ 가 한 단계씩 올라간다 | ★2~★3 (통찰형/절차형 경계) |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **반복된 type_hint 는 네 축**이다. ① 이계도함수 계산(167-333 · 168-e8 · 168-335 · 168-336) ② 증가·감소 조사와 극값 구하기(169-e9 · 169-338 · 171-e11 · 171-341 · 172-e12 · 172-342 · 175-349) ③ 극값 조건으로 미정계수 역산(168-337 · 173-e13 · 173-343 · 173-344 · 175-352 · 176-355) ④ 매개변수 범위 조건(170-e10 · 170-339 · 170-340 · 174-e14 · 174-345 · 174-346 · 175-350 · 176-356). 33문 중 29문이 이 넷 안에 들어오고 나머지 4문(175-347 · 175-348 · 176-353 · 176-354)은 「도함수·이계도함수를 극한·항등식으로 위장해 묻기」 라는 작은 다섯째 축이다.
- **통합해도 될 것**: ②의 「부호표로 극값」(171-e11 · 171-341)과 「$f''$ 의 부호로 극값」(172-e12 · 172-342)은 판정 도구만 다르고 학생이 하는 일이 같으므로 한 유형의 두 변형으로 묶는 편이 낫다. 예제·유제 쌍(168-e8/168-335, 169-e9/169-338, 170-e10/170-339·340, 171-e11/171-341, 172-e12/172-342, 173-e13/173-343·344, 174-e14/174-345·346)도 각각 한 유형의 난이도 계단으로 충분하다.
- **따로 세워야 할 것**: ④ 안에서 **「전 구간 증가·감소 조건」**(170 계열 · 175-350)과 **「극값 존재·비존재 조건」**(174 계열 · 176-356)은 도구가 같아 보이지만 학생이 세우는 부등식의 방향과 등호 처리가 정반대라 반드시 분리해야 한다. 「극값을 갖는다」 는 $D>0$(등호 제외), 「극값을 갖지 않는다」 와 「전 구간 증가」 는 $D\le0$(등호 포함)이고 여기서 오답이 가장 많이 나온다. base ★ 는 둘 다 3 이 적당하다.
- **정의역이 잘린 버전을 별도 계단으로**: 174-345 · 176-356 처럼 정의역이 $x>0$ 으로 제한되면 판별식만으로 부족하고 근의 부호 또는 구간 최솟값 조건이 추가된다. 같은 유형의 base ★ 3 안에서 「정의역 제한 있음」 을 하위 계단(체감 ★4)으로 표시해 두면 출제 선택이 쉬워진다.
- ③ **미정계수 역산**은 함수 종류(분수·로그·지수·삼각)만 다를 뿐 골조가 「$f'(a)=0$ 과 $f(a)=k$ 연립」 로 동일하므로 한 유형에 네 변형으로 묶고 base ★ 2 로 둔다. 다만 176-355 처럼 **두 극점이 동시에 주어져 합성까지 필요한 버전** 은 base ★ 3 으로 분리한다.
- 이 단원은 다음 단원(곡선의 오목·볼록과 변곡점)의 **직전 계단**이다. 176-353(＄f''=0＄ 의 해)과 168-e8 ⑶(이계도함수가 항상 양수)은 이미 변곡점·볼록성 언어로 번역될 수 있으므로, 카탈로그를 만들 때 20단원과 다음 단원을 한 묶음으로 두고 이계도함수 계산 축을 공유시키는 편이 실제 출제 선택에 유리하다.
