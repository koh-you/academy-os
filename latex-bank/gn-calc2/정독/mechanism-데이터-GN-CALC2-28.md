---
name: mechanism-데이터-GN-CALC2-28
description: 개념원리 미적분Ⅱ 28 치환적분법(1/1 · 227~238쪽 227-457~238-482 · 34문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ (22개정 · 학생용) · 전사본 latex-bank/gn-calc2
  section: 28 치환적분법
  unit_code: CALC2-28
  part: "1/1"
  extract_range: "227~238쪽 · 227-457~238-482"
  total_problems: 34
  unit_total: 34
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 insights 의 effective_depth 평균(통찰 없으면 0.00). insight_type 은 insights 가 비어 있으면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 가 변하는 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (crops.json)
---

# 개념원리 미적분Ⅱ · 28 치환적분법 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅱ 28단원 「치환적분법」 전체(227~238쪽 · 227-457~238-482 · 34문항)를 다룬다. 구역은 여섯이다. **개념원리 익히기** 2문(치환 과정의 빈칸 채우기), **필수·발전 예제** 19문(228-e1~234-e7 일곱 개의 tag 「필수」 예제와 그 뒤에 붙는 tag 「확인체크」 유제 열두 문), **특강** 2문(삼각치환법), **연습문제 STEP 1** 4문, **연습문제 STEP 2** 5문, **연습문제 실력 UP** 2문이다. 그림 문항은 2문(238-478 의 꺾인 그래프 · 238-482 의 원과 점 배치)이고 선택형은 3문(237-475 · 238-479 · 238-482)이다.

개념원리 고등은 구역이 곧 난이도 층이어서 개념원리 익히기 ★1 · 필수 예제 ★2 · 특강 ★3 · STEP 1 ★2 · STEP 2 ★3 · 실력 UP ★4 를 출발점으로 삼고 M_total·통찰로 ±1 을 조정했다. 「확인체크」는 벤더 태그만 보면 ★1 출발이지만 실제로는 바로 앞 필수 예제의 유제여서 대응 예제와 같은 출발점(★2 · 특강은 ★3)을 썼다(gn-calc2 08·18 에서 쓴 관례를 그대로 따랐고 분류 이슈 표에 한 줄로 남겼다).

단원의 도구는 하나다. $g(x)=t$ 로 놓고 $g'(x)\,dx=dt$ 로 바꿔 $t$ 만의 적분으로 옮긴 뒤 되돌리는 것. 그래서 이 범위 문항의 난이도는 「치환을 할 줄 아는가」가 아니라 **「치환이 보이는 꼴로 피적분함수를 먼저 고칠 수 있는가」**에서 갈린다. 필수 예제 일곱은 피적분함수의 종류(다항·무리·지수로그·삼각·$\frac{f'(x)}{f(x)}$·분수·정적분)로 나뉘어 있지만 골조는 같고, 차이는 ① 남은 인수를 상수배로 맞추는 보정, ② 남은 $x$ 를 $t$ 로 되돌려 쓰는 재표현($\int\frac{x-1}{\sqrt{x+1}}dx$, $\int_0^3 x\sqrt{4-x}\,dx$), ③ 항등식·분해로 치환 가능한 꼴 만들기($\sin^3x=(1-\cos^2x)\sin x$, 부분분수, $\tan x+\tan^3x=\tan x\sec^2x$) 세 가지다. 그래서 이 범위의 통찰 라벨은 **I-EQV** 에 가장 많이 몰리고, 특강의 삼각치환과 그래프·도형이 얽힌 문항에서 **I-RT** 가 나온다. ★4 세 문항은 각각 I-XU(238-479 역함수 미분법 결합) · I-BW(238-481 최솟값에서 적분상수 역산) · I-CON(238-482 원주각·수선의 발 조건 통합)으로 갈린다. 정적분 치환의 고정 함정은 **적분구간 변경**(T-경계)과 **로그 절댓값**(T-표기), 그리고 $dt$ 의 부호(T-부호)다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 가 변하는 지점)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CALC2-227-457
  page: 227
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑵ 치환적분 과정의 빈칸 채우기. ⑴ $\int(1-\cos x)^2\sin x\,dx$ 를 $1-\cos x=t$ 로, ⑵ $\int(4x+1)^3dx$ 를 $4x+1=t$ 로 놓았을 때 $\frac{dt}{dx}$·바뀐 피적분식·$x$ 로 되돌린 꼴의 자리를 채운다.
  category: "치환식 미분 → dt 로 바꾸기 → t 로 적분 → x 로 되돌리기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "치환적분법의 기본 과정(빈칸 채우기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    치환 골조가 이미 제시돼 있고 학생은 각 자리의 식만 채운다. ⑴은 dt 가 그대로 남은 인수, ⑵는 $\frac{1}{4}$ 보정이 붙는 두 경우를 보여 주는 도입 문항이다.
    통찰 없음·M_total 4 → 개념원리 익히기 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: "t=g(x) 로 놓고 dt=g'(x)dx 로 바꾼 뒤 t 로 적분하고 다시 x 로 되돌린다"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\sin x$, $t^2$, $t^3$, $1-\cos x$ ⑵ $4$, $\dfrac{1}{4}$, $\dfrac{1}{4}t^4$, $4x+1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/227-457.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴의 바깥 지수 2, ⑵의 일차식 계수 4와 지수 3을 바꿀 수 있다. 제약: 치환식의 도함수가 피적분함수의 나머지 인수와 상수배로 맞아야 빈칸 골조가 유지된다."
    creative: "(1) 빈칸 수를 줄이고 ⑵만 직접 계산시키면 ★1 유지 (2) 치환식 자체를 빈칸으로 두면 치환 대상 선택이 필요해 ★2 (3) 정적분으로 바꿔 적분구간 변경 칸을 넣으면 227-458 과 같은 골조가 된다."
```

```yaml
- id: GN-CALC2-227-458
  page: 227
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    정적분 $\int_0^2 3x^2e^{x^3}\,dx$ 를 $x^3=t$ 로 치환해 구하는 과정의 빈칸(치환식의 도함수·바뀐 적분구간·피적분식·최종값)을 채운다.
  category: "정적분 치환 → 적분구간을 t 값으로 변경 → 계산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정적분의 치환 — 적분구간 변경"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    정적분 치환에서 학생이 실제로 놓치는 지점은 적분구간을 $t$ 값으로 바꾸는 한 곳인데, 그 칸까지 순서대로 지시돼 있다(T-경계 함정의 예방 학습).
    통찰 없음·M_total 4 → 개념원리 익히기 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: "x^3=t, dt=3x^2dx → 구간 0~2 를 0~8 로 바꿔 ∫e^t dt 를 계산"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3x^2$, $0$, $8$, $8$, $0$, $e^t$, $e^t$, $8$, $0$, $e^8-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/227-458.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "위끝 2와 지수 3, 계수 3을 바꿀 수 있다. 제약: 계수가 치환식 도함수의 상수배여야 하고, 바뀐 구간의 끝값이 깔끔한 수가 되도록 위끝을 고른다."
    creative: "(1) 구간 변경 칸을 빈칸에서 빼고 학생이 스스로 적게 하면 ★2 (2) 아래끝·위끝이 뒤집히는 치환(t=-x^3 류)을 쓰면 T-부호 함정이 추가돼 ★2 (3) 구간을 바꾸지 않고 원변수로 되돌려 계산하는 다른 풀이를 비교시키면 I-SC 가 생겨 ★3."
```

### 필수·발전 예제

```yaml
- id: GN-CALC2-228-e1
  page: 228
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 다항함수의 부정적분. ⑴ $\int(x^2+3x+1)^3(2x+3)\,dx$ ⑵ $\int x(3x^2+1)^3\,dx$ ⑶ $\int(3x+2)^4\,dx$.
  category: "안쪽 식을 t 로 → 남은 인수를 dt 의 상수배로 보정 → t^n 적분"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항함수의 치환적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴은 $2x+3$ 이 안쪽 식의 도함수 그대로, ⑵는 $x$ 앞에 $\frac{1}{6}$, ⑶은 일차식 치환이라 $\frac{1}{3}$ 보정. 세 소문항이 보정 계수의 세 경우를 덮는 유형 대표 상자다.
    재표현 없이 같은 절차를 세 번 적용하고 M_total 5 → 필수 예제 출발점 ★2 유지(−1 후보이지만 유형 대표 상자라 내리지 않음).
  tier: star_2
  mechanism_primary: "안쪽 함수를 t 로 놓고 남은 인수를 dt 의 상수배로 맞춘 뒤 t^n 을 적분해 되돌린다"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{1}{4}(x^2+3x+1)^4+C$ ⑵ $\dfrac{1}{24}(3x^2+1)^4+C$ ⑶ $\dfrac{1}{15}(3x+2)^5+C$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/228-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "안쪽 이차식의 계수와 바깥 지수 n 을 바꿀 수 있다. 제약: 남는 인수가 안쪽 식 도함수의 상수배여야 하고, 아니면 골조가 전개나 부분적분으로 바뀐다. ⑶은 일차식 계수 a 와 지수 n 이 자유롭다."
    creative: "(1) ⑶을 (ax+b)^n 일반형으로 두면 Ma 가 올라 ★3 (2) 남은 인수를 도함수의 상수배가 아니게 만들면(예: x^2(3x^2+1)^3) 치환이 막혀 유형 자체가 달라진다 (3) 정적분으로 바꾸면 구간 변경 단계가 붙어 ★2 유지."
```

```yaml
- id: GN-CALC2-228-459
  page: 228
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 다항함수의 부정적분. ⑴ $\int 10x(5x^2+1)^6dx$ ⑵ $\int(x^2-1)(x^3-3x+4)dx$ ⑶ $\int 6x^2(x^3+1)^2dx$ ⑷ $\int\left(\frac{1}{4}x-1\right)^3dx$.
  category: "안쪽 식을 t 로 → 남은 인수를 dt 의 상수배로 보정 → t^n 적분"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다항함수의 치환적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑵만 $x^2-1$ 이 $x^3-3x+4$ 도함수의 $\frac{1}{3}$ 배임을 보는 한 걸음이 있고 나머지 셋은 계수 보정과 일차식 치환. 통찰로 카운트할 만큼의 재표현은 없다.
    대응 필수 예제(228-e1)의 유제라 같은 출발점 ★2.
  tier: star_2
  mechanism_primary: "각 식에서 안쪽 함수의 도함수를 찾아 상수배로 맞춘 뒤 t^n 을 적분한다"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{1}{7}(5x^2+1)^7+C$ ⑵ $\dfrac{1}{6}(x^3-3x+4)^2+C$ ⑶ $\dfrac{2}{3}(x^3+1)^3+C$ ⑷ $\left(\dfrac{1}{4}x-1\right)^4+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/228-459.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴의 앞 계수 10과 지수 6, ⑵의 삼차식 상수항, ⑷의 분수 계수 1/4 을 바꿀 수 있다. 제약: 계수를 바꾸면 보정 상수만 달라지고 골조는 그대로다."
    creative: "(1) ⑵처럼 도함수의 상수배를 알아봐야 하는 문항만 모으면 ★2 유지·오답률 상승 (2) 한 문항의 안쪽 식을 삼차로 올려 도함수가 이차가 되게 하면 계산만 늘고 ★ 는 그대로(질 저하 주의) (3) 답을 전개한 형태로 제시하고 어느 것이 옳은지 고르게 하면 I-VF 가 생겨 ★3."
```

```yaml
- id: GN-CALC2-229-e2
  page: 229
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 무리함수의 부정적분. ⑴ $\int\sqrt{1-x}\,dx$ ⑵ $\int\frac{2x}{\sqrt{x^2+1}}dx$ ⑶ $\int\frac{x-1}{\sqrt{x+1}}dx$.
  category: "근호 안을 t 로 → 남은 x 를 t 로 재표현 → t^{1/2} 꼴 적분"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: |
        ⑶에서 분자 $x-1$ 을 $(x+1)-2$ 로 고쳐 치환식 $t$ 의 식으로 만들어야 유리화되고 항별 적분이 된다
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "무리함수의 치환적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴⑵는 근호 안을 t 로 놓으면 바로 끝나지만 ⑶은 분자에 남은 $x$ 를 치환식으로 되돌려 써야 한다. 이 「남은 x 를 t 로 다시 쓴다」가 이 단원 재표현 통찰의 원형이고 뒤의 234-e7⑶ 과 같은 골조다.
    통찰 1개(EQV d1)·M_total 5 → 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "근호 안을 t 로 놓고 남은 x 식을 t 로 바꿔 t^{1/2} 꼴로 적분한 뒤 되돌린다"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $-\dfrac{2}{3}(1-x)\sqrt{1-x}+C$ ⑵ $2\sqrt{x^2+1}+C$ ⑶ $\dfrac{2}{3}(x-5)\sqrt{x+1}+C$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/229-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 일차식의 계수·상수(1-x, x+1)와 ⑶ 분자의 상수를 바꿀 수 있다. 제약: 분자를 (근호 안)+상수 로 정확히 쪼갤 수 있어야 하고, 정적분으로 바꾸려면 근호 안이 구간에서 0 이상이어야 한다."
    creative: "(1) ⑶의 분자를 이차식으로 올리면 t 의 이차식이 나와 항이 하나 늘 뿐 골조 유지(★2~3) (2) 근호를 분모에서 분자로 옮기면 지수만 바뀌고 ★2 유지 (3) 정적분 + 구간 끝에서 근호 안이 0 이 되게 하면 T-범위 점검이 생겨 ★3."
```

```yaml
- id: GN-CALC2-229-460
  page: 229
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 무리함수의 부정적분. ⑴ $\int(2x+3)\sqrt{x^2+3x}\,dx$ ⑵ $\int\frac{x^3}{\sqrt{1-x^2}}dx$ ⑶ $\int\frac{3x^2-x}{\sqrt{2x^3-x^2}}dx$.
  category: "근호 안을 t 로 → 남은 x 를 t 로 재표현 → t^{±1/2} 적분"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: |
        ⑵에서 $x^3$ 을 $x^2\cdot x$ 로 쪼개고 $x^2=1-t$ 로 바꿔야 치환이 닫힌다(남은 짝수 차수를 치환식으로 되돌리기)
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "무리함수의 치환적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴⑶은 분자가 근호 안 도함수의 상수배라 바로 치환되고, ⑵만 $x^3$ 을 $x^2\cdot x$ 로 갈라 $x\,dx$ 를 $dt$ 쪽으로 보내고 남은 $x^2$ 를 $1-t$ 로 되돌린다.
    통찰 1개(EQV d1)·M_total 5 → 대응 예제(229-e2)와 같은 ★2.
  tier: star_2
  mechanism_primary: "근호 안을 t 로 놓고 분자를 dt 부분과 t 의 식으로 갈라 t^{±1/2} 를 적분한다"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\dfrac{2}{3}(x^2+3x)\sqrt{x^2+3x}+C$ ⑵ $-\dfrac{1}{3}(x^2+2)\sqrt{1-x^2}+C$ ⑶ $\sqrt{2x^3-x^2}+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/229-460.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 이차·삼차식의 계수와 ⑵ 분자의 홀수 차수를 바꿀 수 있다. 제약: 분자의 차수가 홀수여야 x dx 를 dt 로 흡수하고 나머지를 t 로 되돌릴 수 있다."
    creative: "(1) ⑵의 분자를 x^5 로 올리면 t 의 이차식이 나와 계산만 늘고 ★2 유지 (2) 분자를 짝수 차수로 두면 치환이 막히고 삼각치환(특강)으로 넘어가 ★3 (3) 정적분으로 바꿔 1-x^2 의 부호 구간을 묻게 하면 T-범위 추가 ★3."
```

```yaml
- id: GN-CALC2-229-461
  page: 229
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=\int x\sqrt{x^2+1}\,dx$ 에 대하여 $f(0)=3$ 일 때 $f(-2)$ 의 값.
  category: "치환으로 부정적분 → 초기조건으로 적분상수 결정 → 함숫값 대입"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "초기조건이 주어진 부정적분의 함숫값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $t=x^2+1$ 치환은 도함수 $2x$ 가 분자에 그대로 있어 한 줄이고, 나머지는 $f(0)=3$ 으로 $C$ 를 정한 뒤 대입하는 표준 절차다.
    통찰 없음·M_total 5 → 확인체크(대응 예제 ★2 출발) 유지 ★2.
  tier: star_2
  mechanism_primary: "t=x^2+1 로 (1/3)(x^2+1)√(x^2+1)+C 를 얻고 f(0)=3 으로 C 를 정한 뒤 x=-2 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{3}(5\sqrt{5}+8)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/229-461.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 상수 1, 초기조건 f(0)=3, 대입점 -2 를 바꿀 수 있다. 제약: 대입점에서 근호 안이 양수여야 하고 x^2+1 이 우함수라 ±2 의 값이 같다."
    creative: "(1) f(0)=3 대신 f(2)=k 로 주어도 골조 유지 ★2 (2) 정적분 ∫_0^{-2} 로 바꾸면 적분상수 단계가 빠져 ★1~2 (3) f(-2)=f(2) 인 이유를 함께 묻게 하면 I-SYM 이 생겨 ★3."
```

```yaml
- id: GN-CALC2-230-e3
  page: 230
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑷ 지수·로그함수의 부정적분. ⑴ $\int 2xe^{x^2-1}dx$ ⑵ $\int e^{2x}(e^{2x}+1)^3dx$ ⑶ $\int\frac{(\ln x)^2}{x}dx$ ⑷ $\int\frac{x}{1+x^2}\ln(1+x^2)dx$.
  category: "지수의 지수부나 로그 전체를 t 로 → dt 상수배 확인 → 적분"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수, 로그함수의 치환적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴~⑶은 치환 대상이 눈에 보이고, ⑷만 $\ln(1+x^2)$ 를 통째로 $t$ 로 잡아야 $\frac{x}{1+x^2}$ 가 $\frac{dt}{2}$ 로 맞아떨어진다(안쪽 함수가 2중).
    그래도 「안쪽 함수의 도함수가 인수로 있다」는 같은 절차의 반복이라 통찰로 세지 않았다. M_total 5 → 필수 예제 ★2.
  tier: star_2
  mechanism_primary: "지수부 또는 로그 전체를 t 로 놓고 남은 인수가 dt 의 상수배인지 확인해 t 로 적분한다"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $e^{x^2-1}+C$ ⑵ $\dfrac{1}{8}(e^{2x}+1)^4+C$ ⑶ $\dfrac{1}{3}(\ln x)^3+C$ ⑷ $\dfrac{1}{4}\{\ln(1+x^2)\}^2+C$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/230-e3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수부의 계수·상수(x^2-1, 2x), 로그 거듭제곱의 지수 2, ⑷의 안쪽 1+x^2 를 바꿀 수 있다. 제약: ⑶⑷는 정의역 x>0 또는 안쪽이 항상 양수여야 절댓값 없이 쓸 수 있다."
    creative: "(1) ⑷처럼 치환 대상이 2중인 문항을 늘리면 ★2 유지·체감 상승 (2) 밑이 e 가 아닌 a^x 를 넣으면 1/ln a 보정이 추가돼 ★2 (3) ⑵를 e^{2x}+1=t 대신 e^x=u 로 두는 다른 풀이와 비교시키면 I-SC 가 생겨 ★3."
```

```yaml
- id: GN-CALC2-230-462
  page: 230
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 지수·로그함수의 부정적분. ⑴ $\int 10^{2x+3}dx$ ⑵ $\int\frac{e^x}{\sqrt{e^x-1}}dx$ ⑶ $\int\frac{\ln(x+1)}{x+1}dx$ ⑷ $\int\frac{2}{x(\ln x)^2}dx$.
  category: "지수부·로그를 t 로 → 밑이 10 인 지수는 1/ln10 보정 → 적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수함수, 로그함수의 치환적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 문항 모두 치환 대상이 드러나 있다. 함정은 두 곳으로 ⑴의 밑 10 에서 나오는 $\frac{1}{\ln 10}$ 계수(T-표기)와 ⑷의 $t^{-2}$ 적분 부호다.
    통찰 없음·M_total 6 → 대응 예제(230-e3)와 같은 ★2.
  tier: star_2
  mechanism_primary: "일차식·근호 안·로그를 t 로 놓고 밑과 계수 보정을 붙여 t 의 표준 적분으로 옮긴다"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{1}{2\ln 10}10^{2x+3}+C$ ⑵ $2\sqrt{e^x-1}+C$ ⑶ $\dfrac{1}{2}\{\ln(x+1)\}^2+C$ ⑷ $-\dfrac{2}{\ln x}+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/230-462.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴의 밑 10 과 일차식 2x+3, ⑷의 분자 2와 로그 지수 -2 를 바꿀 수 있다. 제약: ⑷의 지수가 -1 이 되면 답이 ln|ln x| 로 유형이 232 절로 옮겨간다."
    creative: "(1) ⑷의 지수를 -1 로 바꾸면 f'/f 유형이 되어 별개 유형 (2) ⑵를 정적분으로 바꿔 e^x-1>0 구간을 묻게 하면 T-범위 ★3 (3) 밑이 다른 지수 둘을 곱해 두면 보정 계수가 겹쳐 ★2 유지·계산만 증가."
```

```yaml
- id: GN-CALC2-230-463
  page: 230
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=\int e^x(2-e^x)^3dx$ 에 대하여 $f(0)=2$ 일 때 $f(\ln 2)$ 의 값.
  category: "치환(부호 주의)으로 부정적분 → 초기조건으로 C 결정 → 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "초기조건이 주어진 부정적분의 함숫값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $t=2-e^x$ 로 놓으면 $dt=-e^xdx$ 라 부호가 한 번 뒤집힌다(T-부호). 나머지는 $C$ 결정과 $x=\ln 2$ 대입이라 229-461 과 같은 골조다.
    통찰 없음·M_total 6 → 확인체크 ★2.
  tier: star_2
  mechanism_primary: "t=2-e^x, dt=-e^x dx 로 -(1/4)(2-e^x)^4+C 를 얻고 f(0)=2 로 C 를 정한 뒤 x=ln2 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{9}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/230-463.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안 상수 2, 지수 3, 초기조건 f(0)=2, 대입점 ln2 를 바꿀 수 있다. 제약: 대입점의 e^x 값이 유리수가 되도록 ln(정수) 를 쓴다."
    creative: "(1) 지수를 짝수로 바꾸면 부호 함정이 약해져 ★2 유지 (2) (2-e^x) 를 (e^x-2) 로 바꾸면 부호 처리 위치만 이동 (3) f(0)=f(k) 형태로 조건을 바꾸면 232-467 처럼 기각 단계가 생겨 ★3."
```

```yaml
- id: GN-CALC2-231-e4
  page: 231
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 삼각함수의 부정적분. ⑴ $\int\sin 3x\,dx$ ⑵ $\int(1+\sin x)^2\cos x\,dx$ ⑶ $\int\sin^3x\,dx$.
  category: "각의 일차식 치환 / 삼각식 치환 / 항등식으로 홀수 차수 분리 후 치환"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: |
        ⑶에서 $\sin^3x$ 를 $(1-\cos^2x)\sin x$ 로 고쳐야 $t=\cos x$ 치환이 가능해진다(홀수 차수 하나를 dt 로 떼어내기)
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수의 치환적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴은 $3x=t$, ⑵는 $1+\sin x=t$ 로 바로 치환된다. ⑶만 피적분함수를 먼저 고쳐야 하고, 이때 $dt=-\sin x\,dx$ 의 부호(T-부호)가 함정이다.
    통찰 1개(EQV d1)·M_total 6 → 필수 예제 ★2.
  tier: star_2
  mechanism_primary: "sin^3x=(1-cos^2x)sin x 로 고쳐 t=cos x 로 치환하고 다항식으로 적분한다"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $-\dfrac{1}{3}\cos 3x+C$ ⑵ $\dfrac{1}{3}(1+\sin x)^3+C$ ⑶ $\dfrac{1}{3}\cos^3 x-\cos x+C$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/231-e4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴의 각 계수 3, ⑵의 괄호 안 상수와 지수, ⑶의 홀수 차수 3을 바꿀 수 있다. 제약: ⑶은 차수가 홀수여야 sin x 하나를 dt 로 떼어낼 수 있고, 짝수면 배각공식 유형으로 넘어간다."
    creative: "(1) sin^5x 로 올리면 t 의 사차식이 나올 뿐 골조·★2 유지 (2) sin^2x 로 바꾸면 반각공식이 필요해 다른 유형 (3) sin^3x cos^2x 처럼 섞으면 어느 쪽을 t 로 둘지 갈려 I-SC ★3."
```

```yaml
- id: GN-CALC2-231-464
  page: 231
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 삼각함수의 부정적분. ⑴ $\int\cos(4x-3)dx$ ⑵ $\int\cot x\csc^2x\,dx$ ⑶ $\int\frac{\cos^3x}{1+\sin x}dx$.
  category: "각의 일차식 치환 / 도함수 짝 치환 / 항등식 약분 후 치환"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: |
        ⑶에서 $\cos^2x=1-\sin^2x$ 로 바꿔 분모 $1+\sin x$ 를 약분하면 $(1-\sin x)\cos x$ 가 되어 $t=\sin x$ 로 치환된다
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수의 치환적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴은 각의 일차식, ⑵는 $t=\cot x$ 와 $dt=-\csc^2x\,dx$ 가 짝으로 주어져 있다(T-부호). ⑶만 항등식으로 분모를 없애는 재표현이 관문이다.
    통찰 1개(EQV d1)·M_total 6 → 대응 예제(231-e4)와 같은 ★2.
  tier: star_2
  mechanism_primary: "cos^2x=1-sin^2x 로 분모를 약분해 (1-sin x)cos x 로 만든 뒤 t=sin x 로 적분한다"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\dfrac{1}{4}\sin(4x-3)+C$ ⑵ $-\dfrac{1}{2}\cot^2 x+C$ ⑶ $-\dfrac{1}{2}(1-\sin x)^2+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/231-464.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴의 각 계수·상수, ⑶의 분모 부호(1±sin x)를 바꿀 수 있다. 제약: ⑶은 분모가 1±sin x 여야 cos^2x 와 약분되고, 1+cos x 로 바꾸려면 분자를 sin^3x 로 맞춰야 한다."
    creative: "(1) 분모를 1+cos x, 분자를 sin^3x 로 바꾸면 234-470⑸ 와 같은 골조 ★2 (2) 약분하지 않고 t=sin x 로 바로 치환하는 길과 비교시키면 I-SC ★3 (3) 정적분으로 바꾸면 구간 변경이 붙어 ★2~3."
```

```yaml
- id: GN-CALC2-231-465
  page: 231
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f'(x)=\frac{\sec^2x}{1+\tan x}$ 이고 $f(0)=0$ 일 때 $f\left(\frac{\pi}{4}\right)$ 의 값.
  category: "분모를 t 로 치환(분자가 곧 dt) → 로그 적분 → 초기조건으로 C 결정"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "초기조건이 주어진 부정적분의 함숫값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $t=1+\tan x$ 로 놓으면 $dt=\sec^2x\,dx$ 가 분자 그대로라 한 줄에 $\ln|1+\tan x|$ 가 나온다. $f(0)=0$ 에서 $C=0$ 이고 $x=\frac{\pi}{4}$ 대입.
    다음 절(232)의 f'/f 유형을 미리 쓰는 셈이지만 치환 짝이 보이므로 통찰 없음·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "t=1+tan x, dt=sec^2x dx → ln|1+tan x|+C → f(0)=0 으로 C=0 → x=pi/4 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\ln 2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/231-465.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 상수 1, 초기조건 f(0)=0, 대입점 pi/4 를 바꿀 수 있다. 제약: 대입점에서 tan x 가 정의되고 1+tan x>0 이어야 절댓값을 풀 수 있다."
    creative: "(1) 분모를 2+tan x 로 바꾸면 값만 달라지고 ★2 유지 (2) 대입점을 pi/3 로 옮기면 무리수 로그가 나와 계산만 증가 (3) 분자를 sec^2x 대신 sec x tan x 로 바꾸면 치환식이 달라져 학생이 짝을 스스로 찾아야 해 ★3."
```

```yaml
- id: GN-CALC2-232-e5
  page: 232
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑷ 부정적분. ⑴ $\int\frac{x^2+1}{x^3+3x+2}dx$ ⑵ $\int\frac{e^x}{2e^x+1}dx$ ⑶ $\int\frac{1}{x\ln x}dx$ ⑷ $\int\tan x\,dx$.
  category: "분모를 t 로 → 분자가 dt 의 상수배인지 확인 → ln|f(x)| 꼴로 적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "f'(x)/f(x) 꼴의 치환적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모를 $t$ 로 놓고 분자가 $dt$ 의 몇 배인지 세는 한 절차가 네 번 반복된다(⑴은 $\frac{1}{3}$, ⑵는 $\frac{1}{2}$). ⑷는 $\tan x=\frac{\sin x}{\cos x}$ 로 고쳐야 하지만 이 유형의 표준 예시라 통찰로 세지 않았다.
    로그의 절댓값(T-표기) 하나 → M_total 6, 필수 예제 ★2.
  tier: star_2
  mechanism_primary: "분모를 t 로 놓고 분자를 dt 의 상수배로 맞춰 (상수)ln|분모|+C 로 적분한다"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{1}{3}\ln|x^3+3x+2|+C$ ⑵ $\dfrac{1}{2}\ln(2e^x+1)+C$ ⑶ $\ln|\ln x|+C$ ⑷ $-\ln|\cos x|+C$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/232-e5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴의 삼차식 계수(분자가 그 도함수의 상수배가 되도록 짝지어야 함), ⑵의 계수 2를 바꿀 수 있다. 제약: 분모가 항상 양수면 절댓값을 벗길 수 있고 아니면 절댓값을 남겨야 한다."
    creative: "(1) cot x, sec x 같은 다른 삼각함수로 바꾸면 같은 골조 ★2 (2) 분자를 도함수의 상수배가 아니게 두면 부분분수(233 절)로 넘어간다 (3) 분모를 f(x)^2 로 올리면 로그가 아니라 -1/f 가 나와 오답 유도 ★3."
```

```yaml
- id: GN-CALC2-232-466
  page: 232
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 부정적분. ⑴ $\int\frac{e^x-e^{-x}}{e^x+e^{-x}}dx$ ⑵ $\int\frac{\cos x}{1-\sin x}dx$ ⑶ $\int\frac{4^x\ln 2-x}{4^x-x^2}dx$.
  category: "분모를 t 로 → 분자와 dt 의 배수·부호 확인 → ln 적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "f'(x)/f(x) 꼴의 치환적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑵는 분자가 분모 도함수의 $-1$ 배(T-부호), ⑶은 분모의 도함수 $4^x\ln 4-2x$ 가 분자의 $2$ 배임을 세는 것이 핵심인데 둘 다 이 유형이 요구하는 표준 확인 절차다.
    통찰 없음·M_total 6 → 대응 예제(232-e5)와 같은 ★2.
  tier: star_2
  mechanism_primary: "분모를 미분해 분자와 몇 배·어느 부호로 맞는지 확인하고 (상수)ln|분모| 로 적분한다"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\ln(e^x+e^{-x})+C$ ⑵ $-\ln(1-\sin x)+C$ ⑶ $\dfrac{1}{2}\ln|4^x-x^2|+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/232-466.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑶의 밑 4와 뺄셈 항 x^2 을 바꿀 수 있다. 제약: 분자가 분모 도함수의 상수배로 정확히 떨어지도록 밑과 차수를 맞춰야 한다(4^x 의 도함수 계수 ln4=2ln2 가 분자의 ln2 와 맞물린다)."
    creative: "(1) 밑을 9, 분자를 3^x ln3 류로 바꾸면 배수가 1 이 되어 ★2 하향 체감 (2) ⑵의 분모를 1+sin x 로 바꾸면 부호 함정이 사라진다 (3) 분모가 0 이 되는 x 를 구간에 포함한 정적분으로 만들면 T-범위 판단이 필요해 ★4."
```

```yaml
- id: GN-CALC2-232-467
  page: 232
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=\int\frac{e^{2x}}{3e^{2x}-2}dx$ 에 대하여 $f(0)=f(k)$ 를 만족시키는 $0$ 이 아닌 상수 $k$ 의 값.
  category: "f'/f 로 적분 → 두 함숫값이 같다는 조건을 로그 진수 등식으로 → 해 중 k=0 기각"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: |
        $f(0)=f(k)$ 를 로그의 진수가 같다는 등식 $|3e^{2k}-2|=1$ 로 옮긴다(적분상수 C 는 소거된다)
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: |
        절댓값을 벗긴 두 해 중 $e^{2k}=1$ 은 $k=0$ 이라 조건 위배로 기각해야 하고, 남은 $3e^{2k}=1$ 만 답이 된다
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "부정적분의 함숫값이 같아지는 상수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    적분 자체는 $\frac{1}{6}\ln|3e^{2x}-2|$ 한 줄이지만, 그 뒤가 이 문항의 몸통이다. 두 함숫값이 같다 → 진수의 절댓값이 같다 → 두 해 → $k\ne 0$ 으로 한쪽 기각.
    사후 기각이 풀이의 마지막 관문(I-VF)이고 통찰 2개·M_total 7 → 확인체크 출발점 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "(1/6)ln|3e^{2x}-2| 로 적분 → f(0)=f(k) 를 진수 등식으로 → 두 해 중 k=0 기각"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{2}\ln\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/232-467.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 계수 3과 상수 2를 바꿀 수 있다. 제약: x=0 에서 진수가 0 이 아니어야 하고, 절댓값을 벗긴 두 식 중 하나가 k=0 을 주도록 상수를 잡아야 기각 구조가 유지된다."
    creative: "(1) 조건을 f(1)=f(k) 로 옮겨도 골조 유지 ★3 (2) 분모를 항상 양수인 3e^{2x}+2 로 바꾸면 절댓값·기각이 사라져 ★2 로 내려간다 (3) k 의 개수를 묻게 하면 I-MI 가 더해져 ★4."
```

```yaml
- id: GN-CALC2-233-e6
  page: 233
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 분수함수의 부정적분. ⑴ $\int\frac{x^2+3}{x+1}dx$ ⑵ $\int\frac{2}{x^2+2x}dx$ ⑶ $\int\frac{x}{x^2+3x+2}dx$.
  category: "가분수는 나눗셈, 진분수는 부분분수로 분해 → 각 항을 다항·로그 적분"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분수함수의 치환적분(나눗셈·부분분수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자 차수가 분모 이상이면 나눗셈으로 다항식+진분수로 고치고(⑴), 진분수는 분모를 인수분해해 부분분수로 쪼갠다(⑵⑶). 두 절차가 이 상자의 전부다.
    통찰 없음·절댓값(T-표기) 하나로 M_total 6 → 필수 예제 ★2.
  tier: star_2
  mechanism_primary: "나눗셈 또는 부분분수로 1/(x-a) 항들로 쪼갠 뒤 항별로 ln|x-a| 적분"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{1}{2}x^2-x+4\ln|x+1|+C$ ⑵ $\ln\left|\dfrac{x}{x+2}\right|+C$ ⑶ $\ln\dfrac{(x+2)^2}{|x+1|}+C$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/233-e6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 상수항과 분모 이차식의 두 근을 바꿀 수 있다. 제약: 분모가 서로 다른 일차식의 곱으로 인수분해돼야 하고(중근이면 -1/(x-a) 항이 생겨 유형이 달라짐), 부분분수 계수가 유리수로 떨어지게 근을 고른다."
    creative: "(1) 분모를 중근 (x-1)^2 으로 바꾸면 로그가 아닌 유리식 답이 나와 ★3 (2) 분자 차수를 3차로 올리면 나눗셈 몫이 이차식이 될 뿐 ★2 유지 (3) 정적분으로 바꾸고 구간에 분모의 근을 걸치게 하면 정의 여부 판단이 필요해 ★4."
```

```yaml
- id: GN-CALC2-233-468
  page: 233
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 분수함수의 부정적분. ⑴ $\int\frac{2x^3+x-1}{x-1}dx$ ⑵ $\int\frac{1}{x^2-3x+2}dx$ ⑶ $\int\frac{7x+4}{(x-3)(x+2)}dx$.
  category: "나눗셈 / 부분분수 분해 → 항별 적분"
  M: {s: 2, k: 3, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분수함수의 치환적분(나눗셈·부분분수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴은 삼차식 나눗셈이라 계산량만 크고(Mk 3), ⑵⑶은 부분분수 계수를 잡는 표준 절차다. ⑶은 분자가 일차식이라 두 계수를 연립하거나 대입법으로 구한다.
    통찰 없음·M_total 7 이지만 절차의 반복이라 대응 예제(233-e6)와 같은 ★2.
  tier: star_2
  mechanism_primary: "가분수는 나눗셈으로, 진분수는 부분분수로 쪼갠 뒤 다항식 적분과 ln|x-a| 항을 더한다"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\dfrac{2}{3}x^3+x^2+3x+2\ln|x-1|+C$ ⑵ $\ln\left|\dfrac{x-2}{x-1}\right|+C$ ⑶ $5\ln|x-3|+2\ln|x+2|+C$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/233-468.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑶의 분자 계수 7·4와 분모의 두 근 3·-2 를 바꿀 수 있다. 제약: 부분분수 계수가 정수가 되도록 분자 계수를 근에 맞춰 역산한다."
    creative: "(1) 분자를 상수로 바꾸면 계수가 분수가 되어 계산만 늘어난다 (2) 세 인수의 곱을 분모로 두면 계수가 셋으로 늘 뿐 ★2 유지 (3) 부분분수 계수를 미지수로 주고 조건에서 역산시키면 I-BW 가 생겨 ★3."
```

```yaml
- id: GN-CALC2-233-469
  page: 233
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=\int\frac{x+1}{x^2-4x+3}dx$ 에 대하여 $f(2)=0$ 일 때 $f(4)$ 의 값.
  category: "부분분수 분해 → 로그 적분 → 초기조건으로 C 결정 → 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "초기조건이 주어진 부정적분의 함숫값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모를 $(x-1)(x-3)$ 으로 인수분해해 부분분수로 쪼개면 로그 두 항이 나오고, $f(2)=0$ 에서 $C=0$, $x=4$ 대입으로 끝난다.
    절댓값 처리(T-표기)가 유일한 함정이고 통찰 없음·M_total 6 → 확인체크 ★2.
  tier: star_2
  mechanism_primary: "부분분수로 -1/(x-1)+2/(x-3) 분해 → -ln|x-1|+2ln|x-3|+C → f(2)=0 으로 C 결정 → x=4 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\ln 3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/233-469.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자의 상수항, 분모의 두 근 1·3, 초기조건 점 2와 대입점 4를 바꿀 수 있다. 제약: 초기조건 점과 대입점에서 로그 진수가 0 이 아니어야 하고, 두 점이 분모의 근을 사이에 두면 부정적분 구간이 달라 절댓값 처리에 주의한다."
    creative: "(1) f(0)=0 처럼 근의 바깥 점을 쓰면 절댓값 벗기기가 쉬워져 ★2 유지 (2) 대입점을 근에 가깝게 두면 발산을 묻는 극한 문항으로 바꿀 수 있다 (3) f(2)=0 대신 f(4)-f(2) 만 묻게 하면 C 가 소거돼 ★2 하향."
```

```yaml
- id: GN-CALC2-234-e7
  page: 234
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 정적분의 값. ⑴ $\int_1^e\frac{1}{x(1+\ln x)^2}dx$ ⑵ $\int_0^{\frac{\pi}{2}}\sin^3x\cos x\,dx$ ⑶ $\int_0^3 x\sqrt{4-x}\,dx$.
  category: "치환과 동시에 적분구간을 t 값으로 변경 → 남은 x 는 t 로 재표현 → 계산"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: |
        ⑶에서 $t=4-x$ 로 놓은 뒤 남은 $x$ 를 $4-t$ 로 되돌려 써야 피적분함수가 $t$ 만의 식이 된다
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "치환적분법을 이용한 정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴⑵는 치환 대상과 $dt$ 가 짝으로 보이고 새로 할 일은 적분구간을 $t$ 값으로 바꾸는 것(T-경계) 하나다. ⑶만 남은 $x$ 를 $t$ 로 되돌리는 재표현이 필요하다(229-e2⑶ 과 같은 골조).
    통찰 1개(EQV d1)·M_total 6 → 필수 예제 ★2.
  tier: star_2
  mechanism_primary: "t 로 치환하면서 적분구간도 t 값으로 바꾸고, 남은 x 는 t 의 식으로 되돌려 계산한다"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\dfrac{1}{2}$ ⑵ $\dfrac{1}{4}$ ⑶ $\dfrac{94}{15}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/234-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑶의 근호 안 상수 4와 위끝 3, ⑵의 구간 끝 pi/2, ⑴의 위끝 e 를 바꿀 수 있다. 제약: 구간 안에서 근호 안이 0 이상이어야 하고(위끝 ≤ 4), 바뀐 구간의 끝값이 깔끔하도록 e·pi/2 처럼 치환식이 정수·유리수가 되는 점을 고른다."
    creative: "(1) ⑶의 위끝을 4 로 올리면 t 구간이 0 부터라 경계 판단이 추가돼 ★3 (2) 구간을 바꾸지 않고 원변수로 되돌려 계산하는 풀이와 비교시키면 I-SC ★3 (3) 피적분함수에 매개변수를 넣어 값이 주어진 수가 되게 하면 I-BW ★3~4(238-480 골조)."
```

```yaml
- id: GN-CALC2-234-470
  page: 234
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑹ 정적분의 값. 삼각($(1-\sin^2x)\cos x$, $\frac{\sin^3x}{1+\cos x}$)·분수($\frac{x+1}{x^2+2x+5}$)·무리($\frac{x}{\sqrt{x+2}}$)·로그($\ln x^{\frac{1}{x}}$)·지수($\frac{1}{e^x-e^{-x}}$) 여섯 꼴.
  category: "피적분함수를 치환 가능한 꼴로 먼저 정리 → t 치환·구간 변경 → 계산"
  M: {s: 2, k: 3, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: |
        ⑷ $\ln x^{\frac{1}{x}}$ 를 $\frac{\ln x}{x}$ 로, ⑸ $\frac{\sin^3x}{1+\cos x}$ 를 $(1-\cos x)\sin x$ 로 먼저 정리해야 치환 대상이 보인다
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: |
        ⑹ $\frac{1}{e^x-e^{-x}}$ 는 분자·분모에 $e^x$ 를 곱해 $\frac{e^x}{e^{2x}-1}$ 로 만든 뒤 $t=e^x$ 치환과 부분분수를 이어 써야 적분된다
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "치환적분법을 이용한 정적분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    여섯 소문항이 이 단원의 도구를 한 바퀴 돌린다. ⑴⑵⑶은 치환·구간 변경의 표준 적용이지만 ⑷⑸는 피적분함수를 먼저 고쳐야 하고, ⑹은 $e^x$ 를 곱하는 변형에 부분분수까지 이어진다.
    재표현 통찰 2개(EQV d1·d2)·M_total 7 → 확인체크 출발점 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "각 피적분함수를 항등식·로그 성질·e^x 곱하기로 치환 가능한 꼴로 고친 뒤 구간을 바꿔 적분한다"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $\dfrac{11}{24}$ ⑵ $\dfrac{1}{2}\ln 2$ ⑶ $\dfrac{26}{3}$ ⑷ $\dfrac{1}{2}$ ⑸ $\dfrac{1}{2}$ ⑹ $\dfrac{1}{2}\ln\dfrac{3(e-1)}{e+1}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/234-470.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 소문항의 구간 끝(pi/6, ±1, 2~7, 1~e, ln2~1)과 분모 상수(x^2+2x+5 의 5, x+2 의 2)를 바꿀 수 있다. 제약: ⑹은 아래끝이 ln2 이상이어야 e^x-e^{-x}>0 이고, ⑵는 분모가 항상 양수여야 절댓값이 없어진다."
    creative: "(1) ⑹만 떼어 내 부분분수까지 요구하면 단독 ★3 (2) ⑸의 분모를 1-cos x 로 바꾸면 구간 끝에서 발산해 T-범위 판단이 필요 ★4 (3) 여섯 중 값이 같은 둘을 고르게 하면 I-SC·비교 관점이 생겨 ★3."
```

### 특강

```yaml
- id: GN-CALC2-236-e1
  page: 236
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["특강"]
  category_type: "특강 예제"
  summary: |
    ⑴~⑵ 정적분의 값. ⑴ $\int_0^2\sqrt{4-x^2}\,dx$ ⑵ $\int_0^2\frac{1}{x^2+4}dx$.
  category: "a^2-x^2 는 x=a sin t, a^2+x^2 는 x=a tan t 로 치환 → 각도 구간으로 계산"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: |
        근호·분모의 $a^2\pm x^2$ 를 $x=2\sin t$, $x=2\tan t$ 로 옮겨 대수식 적분을 삼각함수 적분으로 바꾼다(대수 → 삼각 표현 전환)
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각치환법"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞의 27~28단원 치환과 달리 「피적분함수 안에 도함수가 보이지 않는데도 치환한다」가 새 아이디어다. 치환 뒤 $\sqrt{4-4\sin^2t}=2\cos t$ 로 근호가 사라지고 구간은 각도로 바뀐다(T-범위: $t$ 의 범위 제한).
    교육과정 심화(특강)·표현 전환 통찰(RT d2) → ★3.
  tier: star_3
  mechanism_primary: "x=2sin t 또는 x=2tan t 로 치환해 근호·분모를 정리하고 구간을 각도로 바꿔 적분한다"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $\pi$ ⑵ $\dfrac{\pi}{8}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/236-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a 의 값 2 와 적분구간을 바꿀 수 있다. 제약: 구간 끝이 a 또는 a/2 처럼 치환각이 특수각(pi/6, pi/4, pi/3, pi/2)이 되는 값이어야 답이 깔끔하다. ⑴은 구간이 [0,a] 여야 사분원이 된다."
    creative: "(1) ⑴은 반지름 2 인 사분원의 넓이로도 읽혀 삼각치환과 넓이 해석 중 고르게 하면 I-SC ★3 (2) 구간을 [-a,a] 로 넓히면 대칭성(I-SYM)으로 두 배가 되어 ★3 (3) a 를 미지수로 두고 적분값을 주면 238-480 처럼 I-BW ★3."
```

```yaml
- id: GN-CALC2-236-471
  page: 236
  vendor_label: "특강"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "특강 확인체크"
  summary: |
    ⑴~⑶ 정적분의 값. ⑴ $\int_0^{\frac{1}{2}}\frac{1}{\sqrt{1-x^2}}dx$ ⑵ $\int_0^3\sqrt{9-x^2}\,dx$ ⑶ $\int_{-\sqrt3}^{\sqrt3}\frac{1}{x^2+9}dx$.
  category: "삼각치환(sin 꼴 / tan 꼴) → 각도 구간으로 계산"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: |
        $a^2-x^2$ 꼴은 $x=a\sin t$, $a^2+x^2$ 꼴은 $x=a\tan t$ 로 표현을 옮겨 근호·분모를 없앤다
    - step: 2
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: |
        ⑵는 반지름 3 인 사분원의 넓이로도 바로 읽혀, 삼각치환 계산과 넓이 해석 두 갈래 중 빠른 쪽을 고를 수 있다
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "삼각치환법"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴은 치환 뒤 피적분함수가 1 이 되어 각의 차가 곧 답이고, ⑶은 tan 치환에 구간이 원점 대칭이다. ⑵는 삼각치환으로도 사분원 넓이로도 풀려 갈래 선택이 실제로 시간 차를 만든다.
    특강 확인체크(대응 예제 ★3 출발)·통찰 2개 → ★3.
  tier: star_3
  mechanism_primary: "sin·tan 치환으로 각도 적분으로 바꾸거나(⑵는 사분원 넓이로) 계산한다"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $\dfrac{\pi}{6}$ ⑵ $\dfrac{9}{4}\pi$ ⑶ $\dfrac{\pi}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/236-471.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 문항의 a(1, 3, 3)와 구간 끝(1/2, 3, ±√3)을 바꿀 수 있다. 제약: 구간 끝이 a·a/2·a/√3 처럼 특수각을 주는 값이어야 하고, sin 꼴은 |x|<a 를 벗어나면 정의되지 않는다."
    creative: "(1) ⑵의 구간을 [0,3] 에서 [-3,3] 으로 바꾸면 반원 넓이·대칭성(I-SYM) ★3 (2) ⑶의 구간을 비대칭으로 바꾸면 대칭 활용이 막혀 계산만 는다 (3) ⑴의 위끝을 1 로 두면 경계에서의 정의(이상적분)를 묻게 되어 교육과정 밖."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC2-237-472
  page: 237
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=\int\frac{1}{x\sqrt{\ln x+7}}dx$ 에 대하여 $f(e^2)=4$ 일 때 $f\left(\frac{1}{e^3}\right)$ 의 값.
  category: "로그를 t 로 치환 → t^{-1/2} 적분 → 초기조건으로 C 결정 → 대입"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "초기조건이 주어진 부정적분의 함숫값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $t=\ln x+7$ 로 놓으면 $\frac{dx}{x}=dt$ 가 그대로라 $2\sqrt{\ln x+7}+C$ 가 한 줄에 나온다. 나머지는 $f(e^2)=4$ 로 $C$ 를 정하고 $\ln\frac{1}{e^3}=-3$ 을 대입하는 것.
    통찰 없음·M_total 5 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "t=ln x+7 로 2√(ln x+7)+C → f(e^2)=4 로 C 결정 → x=e^{-3} 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/237-472.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 상수 7, 초기조건 f(e^2)=4, 대입점 e^{-3} 을 바꿀 수 있다. 제약: 두 점 모두에서 ln x+7>0 이어야 하고, ln x+7 이 완전제곱수가 되도록 지수와 상수를 짝지어야 답이 정수가 된다."
    creative: "(1) 근호를 세제곱근으로 바꾸면 지수만 달라지고 ★2 유지 (2) 대입점을 미지수로 두고 f 값을 주면 I-BW 가 생겨 ★3 (3) 정적분 ∫_{e^{-3}}^{e^2} 로 바꾸면 C 단계가 빠져 ★1~2."
```

```yaml
- id: GN-CALC2-237-473
  page: 237
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f(x)=\int\frac{e^{2x}}{e^{2x}-1}dx-\int\frac{e^x}{e^{2x}-1}dx$ 에 대하여 $f(\ln 9)=\ln 5$ 일 때 $f(\ln 3)$ 의 값.
  category: "두 부정적분을 하나로 합쳐 인수분해·약분 → f'/f 적분 → C 결정 → 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: |
        두 적분을 하나로 합쳐 분자를 $e^x(e^x-1)$ 로 인수분해하고 분모의 $e^x-1$ 과 약분해야 $\frac{e^x}{e^x+1}$ 이라는 적분 가능한 꼴이 나온다
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 부정적분의 결합 후 f'(x)/f(x) 치환"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    각 적분을 따로 계산하려 하면 $\frac{e^{2x}}{e^{2x}-1}$ 에서 막힌다. 두 식을 합쳐야 분자가 $e^{2x}-e^x=e^x(e^x-1)$ 로 묶이고 약분 뒤 $\ln(e^x+1)$ 한 줄이 된다.
    이 결합·약분이 유일한 관문(EQV d2)이고 없으면 풀이가 진행되지 않는다 → STEP 1 출발점 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "두 적분을 합쳐 e^x/(e^x+1) 로 약분 → ln(e^x+1)+C → f(ln9)=ln5 로 C 결정 → f(ln3)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\ln 2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/237-473.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건점 ln9 과 f 값 ln5, 대입점 ln3 을 바꿀 수 있다. 제약: 대입점의 e^x 가 정수가 되도록 ln(정수) 를 쓰고, 약분이 되려면 두 분자가 e^{2x} 와 e^x 로 짝을 이뤄야 한다."
    creative: "(1) 두 적분의 부호를 바꿔 합으로 두면 분자가 e^x(e^x+1) 이 되어 분모 e^x-1 과 약분되지 않아 유형이 달라진다 (2) 분모를 e^{2x}+1 로 바꾸면 약분이 막혀 ★4 (3) 두 적분을 각각 계산한 뒤 빼는 다른 풀이와 비교시키면 I-SC ★3."
```

```yaml
- id: GN-CALC2-237-474
  page: 237
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $f'(x)=\frac{3}{x^2+x-2}$ 일 때 $f(-1)-f(2)$ 의 값.
  category: "부분분수 분해 → ln 적분 → 두 함숫값의 차(적분상수 소거)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부분분수 분해 후 도함수의 부정적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\frac{3}{(x+2)(x-1)}$ 을 부분분수로 쪼개면 $\ln\left|\frac{x-1}{x+2}\right|$ 이고, 차를 구하므로 적분상수는 소거된다. 두 점에서 절댓값을 제대로 벗기는 것(T-표기)이 유일한 함정.
    통찰 없음·M_total 6 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "3/((x+2)(x-1)) 을 부분분수로 쪼개 ln|(x-1)/(x+2)| 를 얻고 두 점의 값을 빼면 C 가 소거된다"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\ln 8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/237-474.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 3과 분모의 두 근 -2·1, 대입점 -1·2 를 바꿀 수 있다. 제약: 대입점에서 분모가 0 이 아니어야 하고, 두 로그 진수의 비가 정수 거듭제곱이 되도록 점을 고르면 답이 ln(정수)로 떨어진다."
    creative: "(1) f(-1)-f(2) 대신 f(2)=0 을 주고 f(-1) 을 묻게 하면 C 결정 단계가 살아나 ★2 유지 (2) 두 점이 분모의 근을 사이에 두게 하면 부정적분의 정의 구간을 따져야 해 ★4 (3) 분자를 일차식으로 바꾸면 부분분수 계수 연립이 추가돼 ★2~3."
```

```yaml
- id: GN-CALC2-237-475
  page: 237
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $a>1$ 에서 $f(a)=\int_1^a\frac{\sqrt{\ln x}}{x}dx$ 라 할 때 $f(a^4)$ 의 값과 같은 것을 고르는 5지선다($4f(a)$~$20f(a)$).
  category: "정적분을 a 의 닫힌 식으로 → a 를 a^4 로 바꿔 배수 비교"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: |
        $f(a)=\frac{2}{3}(\ln a)^{\frac{3}{2}}$ 라는 닫힌 식으로 옮긴 뒤 $\ln a^4=4\ln a$ 를 넣어 $4^{\frac{3}{2}}=8$ 배임을 읽는다
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정적분으로 정의된 함수의 배수 관계"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $t=\ln x$ 치환 자체는 쉽지만, 답을 고르려면 정적분을 $a$ 의 식으로 일반화한 뒤 $a\to a^4$ 를 대입해 비를 봐야 한다(매개변수라 Ma 2).
    통찰 1개(EQV d1)·M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "t=ln x 로 f(a)=(2/3)(ln a)^{3/2} → ln a^4=4 ln a 를 넣어 8f(a)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/237-475.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 4와 근호(1/2 제곱)를 바꿀 수 있다. 제약: 배수가 k^{(n+1)/n} 꼴이라 선택지가 정수가 되려면 지수 k 와 거듭제곱이 맞물려야 한다(4^{3/2}=8, 9^{3/2}=27)."
    creative: "(1) 근호를 (ln x)^2 으로 바꾸면 배수가 4^3=64 로 커질 뿐 골조 유지 ★2 (2) f(a^4)=kf(a) 의 k 를 미지수로 두고 지수를 묻게 하면 I-BW ★3 (3) 아래끝 1 을 다른 수로 바꾸면 닫힌 식에 상수항이 생겨 단순 배수 관계가 깨진다."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC2-237-476
  page: 237
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $-\frac{\pi}{2}<x<\frac{\pi}{2}$ 에서 미분가능한 $f(x)$ 에 대하여 $f'(x)=\tan x+\tan^3x$ 이고 $f(0)=1$ 일 때 $f\left(\frac{\pi}{3}\right)$ 의 값.
  category: "삼각항등식으로 인수분해 → tan x 치환 → 초기조건으로 C 결정"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: |
        $\tan x+\tan^3x=\tan x(1+\tan^2x)=\tan x\sec^2x$ 로 묶어야 $t=\tan x$ 와 $dt=\sec^2x\,dx$ 의 짝이 드러난다
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼각함수 항등식 변형 후 치환적분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 항을 따로 적분하려 하면 $\tan^3x$ 에서 막힌다. 공통인수로 묶고 $1+\tan^2x=\sec^2x$ 를 쓰는 한 번의 변형이 풀이 전체를 여는 관문이다.
    그 뒤는 $\frac{t^2}{2}$ 적분과 $C$ 결정뿐. 통찰 1개(EQV d2)·M_total 6 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "tan x(1+tan^2x)=tan x sec^2x 로 인수분해 → t=tan x → t^2/2 → f(0)=1 로 C=1 → x=pi/3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{5}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/237-476.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "초기조건 f(0)=1 과 대입점 pi/3 을 바꿀 수 있다. 제약: 대입점이 (-pi/2, pi/2) 안이어야 하고 tan 값이 특수각이어야 답이 유리수·무리수로 깔끔하다."
    creative: "(1) f'(x)=cot x+cot^3x 로 바꾸면 부호만 달라지고 골조 유지 ★3 (2) tan x+tan^2x 처럼 묶이지 않게 두면 유형이 깨진다 (3) f(x) 의 최솟값이나 그래프 개형을 묻는 소문항을 덧붙이면 ★4."
```

```yaml
- id: GN-CALC2-237-477
  page: 237
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    원점을 지나는 곡선 $y=f(x)$ 위의 점 $(x,f(x))$ 에서의 접선의 기울기가 $\frac{1}{2+e^x}$ 일 때 $f(\ln 2)$ 의 값.
  category: "접선의 기울기를 f'(x) 로 → 분수를 f'/f 꼴로 분해해 적분 → 원점 통과로 C 결정"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: |
        $\frac{1}{2+e^x}$ 는 그대로는 치환되지 않으므로 $\frac{1}{2}-\frac{e^x}{2(2+e^x)}$ 로 쪼개거나 분자·분모에 $e^{-x}$ 를 곱해 $\frac{f'}{f}$ 꼴을 만들어야 한다
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "접선의 기울기로 주어진 도함수의 적분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    「기울기 = $f'(x)$」는 표준 번역이고, 실제 관문은 분모에만 지수가 있는 분수를 적분 가능한 꼴로 고치는 변형이다. 분자에 $e^x$ 를 만들어 내는 두 가지 길(항 분해·$e^{-x}$ 곱하기) 중 어느 쪽이든 한 번은 손을 대야 한다.
    통찰 1개(EQV d2)·M_total 6 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "f'(x)=1/(2+e^x) 를 1/2 - e^x/(2(2+e^x)) 로 분해해 적분 → 원점 통과로 C 결정 → x=ln2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{2}\ln\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/237-477.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 상수 2와 대입점 ln2 를 바꿀 수 있다. 제약: 대입점의 e^x 가 정수여야 로그값이 정리되고, 분모의 상수는 0 이 아니어야 분해가 유지된다."
    creative: "(1) 기울기를 e^x/(2+e^x) 로 주면 바로 f'/f 라 ★2 로 내려간다 (2) 원점 대신 (ln2, k) 를 지나게 하면 C 결정만 달라진다 (3) 곡선 위 두 점의 y 좌표 차를 묻게 하면 C 가 소거돼 ★2~3."
```

```yaml
- id: GN-CALC2-238-478
  page: 238
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    구간 $[0,2]$ 에서 그래프가 주어진 함수 $y=f(x)$(그림: $[0,1]$ 에서 $y=1$, $[1,2]$ 에서 두 점 $(1,1)$ 과 $(2,2)$ 를 잇는 선분)에 대하여 $\int_0^{\ln 2}e^{2x}f(e^x)dx$ 의 값.
  category: "t=e^x 치환으로 구간을 1~2 로 → 그 구간의 그래프 식을 읽어 대입 → 계산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: |
        $t=e^x$ 로 놓으면 $e^{2x}dx=t\,dt$ 로 묶여 $\int_1^2 t\,f(t)\,dt$ 가 된다($e^{2x}$ 를 $e^x\cdot e^x$ 로 갈라 하나를 $dt$ 로 보내기)
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: |
        바뀐 구간 $1\le t\le 2$ 에서만 그래프를 읽어 $f(t)=t$ 라는 식을 세운다(그래프 → 식 전환). $[0,1]$ 의 $y=1$ 부분은 쓰이지 않는다
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "그래프로 주어진 함수의 치환적분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    식이 아니라 그림으로 주어진 $f$ 라 Ma 가 올라간다. 치환으로 적분구간이 $[1,2]$ 로 옮겨간 뒤에야 그래프의 어느 부분을 쓸지 정해지고, 거기서 $f(t)=t$ 를 읽어야 한다(꺾인 점 $x=1$ 이 새 구간의 끝이라 T-범위 판단이 필요).
    통찰 2개(EQV d1·RT d2)·M_total 7 → STEP 2 출발점 ★3 유지(구간 확정 뒤로는 $\int_1^2t^2dt$ 한 줄이라 +1 은 하지 않음).
  tier: star_3
  mechanism_primary: "t=e^x 로 구간을 1~2 로 바꿔 ∫_1^2 t f(t)dt → 그 구간의 그래프 f(t)=t 를 넣어 ∫_1^2 t^2 dt"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{7}{3}$'
  answer_source: "답지"
  figure: "crop:fig-238-478.png"
  latex: latex-bank/gn-calc2/items/238-478.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "위끝 ln2 와 그래프의 꺾인 점·기울기를 바꿀 수 있다. 제약: 바뀐 구간 [1, e^{위끝}] 이 그래프의 정의역 [0,2] 안에 들어가야 하고, 그림 라벨(1, 2)과 꺾인 점의 좌표는 답과 직결되므로 함께 고쳐야 한다."
    creative: "(1) 위끝을 ln2 보다 작게 잡아 새 구간이 꺾인 점을 걸치게 하면 구간을 둘로 나눠야 해 ★4 (2) e^{2x} 를 e^x 로 낮추면 t f(t) 가 f(t) 가 되어 넓이 해석만 남고 ★2~3 (3) 그래프를 절댓값 꼴로 바꾸면 구간 분할 판단이 추가돼 ★4."
```

```yaml
- id: GN-CALC2-238-479
  page: 238
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["수능 기출"]
  category_type: "연습문제"
  summary: |
    양의 실수에서 미분가능하고 서로 역함수인 $f$, $g$ 에 대하여 모든 양수 $a$ 에서 $\int_1^a\frac{1}{g'(f(x))f(x)}dx=2\ln a+\ln(a+1)-\ln 2$ 이고 $f(1)=8$ 일 때 $f(2)$ 를 고르는 5지선다.
  category: "역함수 미분법으로 피적분함수를 f'/f 로 → 정적분을 로그 등식으로 → f(a) 역추적"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: |
        역함수 미분법 $g'(f(x))=\frac{1}{f'(x)}$ 를 써서 피적분함수를 $\frac{f'(x)}{f(x)}$ 로 바꾼다(역함수의 미분법 단원과 결합하지 않으면 적분이 시작되지 않는다)
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: |
        좌변이 $\ln f(a)-\ln f(1)$ 임을 보고 우변도 하나의 로그 $\ln\frac{a^2(a+1)}{2}$ 로 묶는다
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: |
        $\frac{f(a)}{8}$ 의 등식에서 $f(a)=4a^2(a+1)$ 이라는 함수 자체를 역으로 확정한 뒤 $a=2$ 를 대입한다
  insight_count: 3
  depth_score: 1.67
  type_id: null
  type_hint: "역함수 미분법과 f'(x)/f(x) 정적분"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    피적분함수에 $g'$ 가 들어 있어 그대로는 적분 대상이 아니다. 역함수 미분법으로 $\frac{f'}{f}$ 를 만들고, 정적분 값이 모든 $a$ 에 대한 항등식임을 이용해 $f$ 를 통째로 역추적하는 3단 결합이다. $f(1)=8$ 은 검산 겸 상수 확인.
    [분류 이슈] 통찰 3개에 I-XU 가 있어 v3.8 의 ★5 자격 조건은 만족하지만 벤더 신호는 STEP 2(★3)라 2단 차가 난다. 라벨은 한 단만 올려 ★4 로 두고 이슈로 기록한다(novelty_score 0 이라 ★5 게이트도 통과하지 못한다).
  tier: star_4
  mechanism_primary: "g'(f(x))=1/f'(x) → ∫_1^a f'/f = ln(f(a)/8) → 우변을 로그로 묶어 f(a)=4a^2(a+1) → f(2)"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/238-479.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변의 로그 조합(2ln a + ln(a+1) - ln2)과 f(1)=8, 묻는 점 2 를 바꿀 수 있다. 제약: 우변을 지수로 되돌린 식이 a=1 에서 f(1) 과 일치해야 하고(상수항 -ln2 가 그 조정), 모든 양수 a 에서 진수가 양수여야 한다."
    creative: "(1) f(1) 을 주지 않고 상수항을 미지수로 두면 조건 하나가 더 필요해 ★5 후보 (2) 묻는 값을 g(48) 처럼 역함수 쪽으로 옮기면 XU 통찰이 한 번 더 쓰인다 (3) 우변을 로그가 아닌 다항식으로 주면 f'/f 구조가 깨져 유형이 달라진다."
```

```yaml
- id: GN-CALC2-238-480
  page: 238
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    $\int_0^a\frac{1}{a^2+x^2}dx=\frac{\pi}{16}$ 일 때 양수 $a$ 의 값.
  category: "tan 삼각치환으로 적분을 1/a 배 각도로 → 주어진 값과 비교해 a 역산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: |
        $x=a\tan t$ 로 표현을 옮기면 $\frac{1}{a^2+x^2}dx$ 가 $\frac{1}{a}dt$ 가 되어 적분이 각의 차로 바뀐다
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: |
        적분값이 $\frac{\pi}{16}$ 이 되도록 $\frac{\pi}{4a}=\frac{\pi}{16}$ 에서 $a$ 를 역추적한다
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "삼각치환으로 미지수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    같은 문자 $a$ 가 피적분함수와 적분구간에 동시에 들어 있어(Ma 2) 치환각의 위끝이 항상 $\frac{\pi}{4}$ 로 고정된다는 것이 포인트다. 특강의 tan 치환 결과를 알면 $\frac{\pi}{4a}=\frac{\pi}{16}$ 한 줄.
    통찰 2개지만 두 번째는 단순 역산(d1)이고 계산이 짧다 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "x=a tan t 로 ∫_0^a dx/(a^2+x^2)=pi/(4a) → pi/(4a)=pi/16 → a=4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/238-480.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변의 pi/16 과 위끝(여기서는 a)을 바꿀 수 있다. 제약: 위끝이 a 의 상수배여야 치환각이 a 와 무관한 특수각이 되고, 우변은 pi/(4a) 꼴과 맞물려 a 가 양수 유리수로 떨어져야 한다."
    creative: "(1) 위끝을 a√3 으로 바꾸면 각이 pi/3 이 되어 계수만 달라진다 (2) 분모를 √(a^2-x^2) 로 바꾸면 sin 치환이 되고 적분값이 a 와 무관해져 해가 없거나 모든 a 가 되는 함정 문항이 된다 (3) a 의 개수를 묻게 하면 I-VF 가 붙어 ★4."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC2-238-481
  page: 238
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    구간 $[0,3]$ 에서 $f(x)=\ln 4\times\int(x-1)2^{x^2-2x+3}dx$ 의 최솟값이 $3$ 일 때 이 구간에서 $f(x)$ 의 최댓값.
  category: "치환으로 f(x)=2^{지수}+C → 구간에서 지수의 최소·최대 → 최솟값 조건으로 C 역산 → 최댓값"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: |
        $u=x^2-2x+3$ 으로 놓으면 $(x-1)dx=\frac{du}{2}$ 이고 $\int 2^u du=\frac{2^u}{\ln 2}$ 이므로 앞에 곱해진 $\ln 4=2\ln 2$ 가 계수를 정확히 상쇄해 $f(x)=2^{x^2-2x+3}+C$ 가 된다
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: |
        지수를 $(x-1)^2+2$ 로 보면 $[0,3]$ 에서 최소는 꼭짓점 $x=1$, 최대는 $x=3$ 이므로 최솟값 조건 $4+C=3$ 에서 $C$ 를 역산한 뒤 최댓값 $64+C$ 를 구한다
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "치환적분한 함수의 최대·최소"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    앞의 $\ln 4$ 가 장식이 아니라 치환에서 나오는 $\frac{1}{2\ln 2}$ 를 정확히 지워 답을 깔끔한 지수함수로 만드는 장치다. 그다음은 적분 문제가 아니라 이차식 지수의 최대·최소 문제로 바뀐다.
    꼭짓점 $x=1$ 이 구간 안에 있다는 T-범위 확인이 필수이고, 최솟값 조건에서 적분상수를 역산하는 방향 전환(I-BW)이 몸통이다. 통찰 2개(둘 다 d2)·M_total 8 → 실력 UP 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: "치환으로 f(x)=2^{(x-1)^2+2}+C → [0,3] 에서 지수 최소 2·최대 6 → 최솟값 4+C=3 으로 C=-1 → 최댓값 64-1"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$63$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/238-481.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 2와 앞 계수 ln4, 지수의 이차식, 구간 [0,3], 최솟값 3 을 바꿀 수 있다. 제약: 앞 계수가 (밑의 로그)×2 여야 상쇄가 일어나고, 꼭짓점이 구간 안에 있어야 최솟값이 지수의 최소에서 나온다. 구간 끝 x=3 이 꼭짓점에서 더 먼 쪽이어야 최댓값 위치가 유지된다."
    creative: "(1) 구간을 [0,1.5] 처럼 꼭짓점 한쪽으로 좁히면 최대·최소가 모두 끝점이 되어 ★3 (2) 최댓값을 주고 최솟값을 묻는 역방향으로 바꿔도 골조 유지 ★4 (3) 밑을 e 로 바꾸고 앞 계수를 없애면 상쇄 착안이 사라져 ★3."
```

```yaml
- id: GN-CALC2-238-482
  page: 238
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제"
  summary: |
    반지름 $2$ 인 원 $C$(중심 원점)와 $A(2,0)$, $B(0,-2)$, 원 위의 $x$ 좌표가 음수인 점 $P$ 에 대하여 $\angle PAB=\theta$ 라 하자. $Q(0,2\cos\theta)$ 에서 직선 $BP$ 에 내린 수선의 발을 $R$ 라 할 때 $f(\theta)=\overline{PR}$ 의 $\int_{\frac{\pi}{6}}^{\frac{\pi}{3}}f(\theta)d\theta$ 를 고르는 5지선다.
  category: "원주각·직각삼각형으로 f(θ) 를 삼각함수 식으로 유도 → 항별 정적분"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: |
        현 $AB$ 의 중심각이 직각이므로 원주각 $\angle APB=45^\circ$ 이고, 원주각 $\theta$ 에 대한 현의 길이 공식으로 $\overline{PB}=4\sin\theta$ 라는 식을 얻는다(도형 → 대수 전환)
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: |
        $\angle ABQ=45^\circ$ 와 $\angle ABP=135^\circ-\theta$ 를 합쳐 $\angle QBP=90^\circ-\theta$ 를 얻고, 직각삼각형에서 $\overline{BR}=\overline{BQ}\cos(90^\circ-\theta)=(2\cos\theta+2)\sin\theta$ 를 써 $\overline{PR}=\overline{PB}-\overline{BR}$ 로 조건들을 하나의 식으로 묶는다
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: |
        $f(\theta)=2\sin\theta(1-\cos\theta)$ 를 $2\sin\theta-\sin 2\theta$ 로 펴야 항별로 적분된다
  insight_count: 3
  depth_score: 1.67
  type_id: null
  type_hint: "도형에서 유도한 함수의 정적분"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    적분 자체는 $2\sin\theta-\sin2\theta$ 의 항별 적분으로 가장 쉬운 부분이고, 난이도는 전부 $f(\theta)$ 를 세우는 도형 단계에 있다. 원주각으로 $\overline{PB}$ 를, $Q$ 의 $y$ 좌표 $2\cos\theta$ 와 $45^\circ$ 를 합쳐 $\overline{BR}$ 를 만든 뒤 빼는 3단 결합이다.
    통찰 3개지만 SC·VF·SYM·XU 가 없어 v3.8 의 ★5 자격은 아니다 → 실력 UP·평가원 기출 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: "원주각으로 PB=4sinθ → ∠QBP=90°-θ 로 BR=(2cosθ+2)sinθ → f(θ)=PB-BR=2sinθ-sin2θ → 항별 적분"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "①"
  answer_source: "답지"
  figure: "crop:fig-238-482.png"
  latex: latex-bank/gn-calc2/items/238-482.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 2와 적분구간 [pi/6, pi/3] 을 바꿀 수 있다. 제약: A·B 가 지름의 양 끝이 아니라 중심각 90도를 이루는 위치여야 원주각 45도가 유지되고, Q 의 y 좌표 2cosθ 는 반지름과 맞물려 있어 함께 바꿔야 한다. θ 의 범위는 P 의 x 좌표가 음수인 범위 안이어야 한다."
    creative: "(1) 수선의 발을 직선 BP 가 아니라 AP 에 내리면 각 관계가 바뀌어 같은 난이도의 다른 식이 된다 (2) f(θ) 대신 삼각형 PQR 의 넓이를 적분하게 하면 곱이 늘어 ★5 후보 (3) A·B 의 중심각을 120도로 바꾸면 원주각이 60도가 되어 계수만 달라지고 골조는 유지된다."
```

## 표본 판정 요약 (34문)

- ★ 분포: ★1 2 · ★2 20 · ★3 9 · ★4 3 · ★5 0
- 통찰형 18 · 절차형 16 · premium 0
- 통찰 유형 분포(라벨 수 기준): I-EQV 16 · I-RT 5 · I-BW 3 · I-VF 1 · I-SC 1 · I-CON 1 · I-XU 1 — 이 단원은 「치환 가능한 꼴로 먼저 고치기」(EQV)가 통찰의 대부분이고, 특강 삼각치환과 그래프·도형 문항에서만 RT 가 나온다.
- type_hint 상위: 「초기조건이 주어진 부정적분의 함숫값」 5(229-461 · 230-463 · 231-465 · 233-469 · 237-472) · 「다항/무리/지수로그/삼각/f'(x)f(x)/분수함수의 치환적분」 각 2(예제+확인체크 짝) · 「치환적분법을 이용한 정적분」 2 · 「삼각치환법」 2 · 나머지 10종은 각 1
- 그림: 2문(`crop:fig-238-478.png` · `crop:fig-238-482.png`)
- 선택형: 3문(237-475 · 238-479 · 238-482)
- 답 대조: 전사본 answer 를 그대로 옮겼고, 골조를 잡는 동안 answer 와 모순되는 조건은 발견되지 않았다(「전사 답 확인 필요」 0건).

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC2-238-479 | 통찰 3개 + I-XU(역함수 미분법 결합)로 v3.8 의 ★5 자격 조건(통찰 3 이상 + SC/VF/SYM/XU)은 만족하지만 벤더 신호는 STEP 2(★3)여서 2단 차. 라벨은 한 단만 올려 ★4 로 두고 기록 | ★4 / ★5 |
| GN-CALC2-228-459 외 확인체크 13문 | 「확인체크」는 벤더 태그만 보면 ★1 출발이지만 실제로는 바로 앞 필수 예제의 유제라 대응 예제와 같은 출발점(★2 · 특강은 ★3)을 적용했다. gn-calc2 08·18 의 관례를 그대로 따름 | ★1 / ★2 |
| GN-CALC2-232-467 · GN-CALC2-234-470 | 확인체크(★2 출발)인데 각각 I-VF 기각 단계와 재표현 통찰 2개로 +1 해 ★3 으로 올렸다. 1단 차라 드리프트는 아니지만 확인체크 안에서 난이도 편차가 큰 자리라 기록 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ① 「초기조건이 주어진 부정적분의 함숫값」 — 이 범위에만 5문이고 피적분함수 종류(무리·지수·삼각·분수·로그)와 무관하게 골조가 같다. 피적분함수별 유형과 교차하는 **축**으로 두는 편이 낫다. ② 「삼각치환법」 — 특강 2문 + STEP 2 1문(238-480). 교육과정 심화라 별도 유형으로 두되 ★3 부터 시작. ③ 「그래프·도형에서 유도한 함수의 정적분」 — 238-478·238-482 는 치환 자체보다 식을 세우는 단계가 난이도를 정하므로 치환적분 유형과 분리해야 한다.
- **통합해도 될 유형**: 개념원리가 피적분함수 종류로 나눈 여섯 예제(다항·무리·지수로그·삼각·f'(x)/f(x)·분수)는 골조가 「안쪽 식을 t 로 → 남은 인수를 dt 의 상수배로 → 되돌리기」 하나다. 카탈로그에서는 **한 유형 + 함수종 태그**로 묶고, 대신 ① 계수 보정만 하면 되는 것, ② 남은 $x$ 를 $t$ 로 재표현해야 하는 것(229-e2⑶ · 229-460⑵ · 234-e7⑶), ③ 항등식·분해로 꼴을 먼저 만들어야 하는 것(231-e4⑶ · 231-464⑶ · 234-470⑸⑹ · 237-476 · 237-477)의 **세 난이도 층**으로 나누는 편이 변형 생성에 유용하다. 분수함수의 나눗셈·부분분수는 사실 치환이 아니라 사전 분해라 「유리함수의 적분」으로 따로 묶는 것도 방법이다.
