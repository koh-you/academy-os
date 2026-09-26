---
name: mechanism-데이터-GN-M31-19-p1
description: 개념원리 중학 3-1 19 이차함수 (3)(1/2 · 177~181쪽 · 20문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · base_star null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-1 (중3-1 · 학생용) · 전사본 latex-bank/gn-m31
  section: 19 이차함수 (3)
  unit_code: GN-M31-19
  part: "1/2"
  extract_range: "177~181쪽 · 177-01~181-04"
  total_problems: 20
  unit_total: 52
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m31/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m31/items/<id>.tex
  image_source: latex-bank/gn-m31/figures/ (그림 10문 · fig-177-01 · fig-177-04 · fig-179-h3 · fig-179-c3 · fig-180-h5 · fig-180-c5 · fig-180-c6 · fig-180-c7 · fig-181-02 · fig-181-04-3)
---

# 개념원리 중학 3-1 · 19 이차함수 (3) (1/2) 정독 데이터 (v1.0)

이 파일은 개념원리 중학 3-1 열아홉 번째 소단원 「19 이차함수 (3)」 52문항 중 앞의 20문항(177~181쪽)을 다룬다. 구역은 「개념원리 확인하기」 4문(177쪽) · 「핵심문제 익히기」 12문(178~180쪽 · 핵심문제 `쪽-hN` 과 확인문제 `쪽-cN` 이 번갈아 배치) · 「이런 문제가 시험에 나온다」 4문(181쪽)이다. 이 범위에 「계산력 강화하기」 구역은 없다. 나머지 32문항은 2/2 파일에서 다룬다.

개념원리 중학은 RPM 과 달리 문항별 난이도 등급(`level`)도 태그도 붙지 않으므로 **구역 자체가 유일한 벤더 난이도 신호**다. 확인하기 ★1 · 핵심문제 익히기 ★2 · 이런 문제가 시험에 나온다 ★2~3 을 출발점으로 삼고 M_total·통찰로 ±1 조정했다. 핵심문제에는 본문 `type`(예제 제목)이 붙어 있어 type_hint 의 1차 후보로 썼다.

이 범위의 내용은 **이차함수 $y=a(x-p)^2+q$ 의 그래프** 하나로, 도구는 네 가지다 — ⑴ $y=ax^2$ 을 $x$ 축 방향 $p$ · $y$ 축 방향 $q$ 만큼 평행이동한 것이라는 대응, ⑵ 꼭짓점 $(p,\,q)$ · 축 $x=p$ 읽기, ⑶ 볼록 방향($a$ 의 부호)과 폭($|a|$), ⑷ 축을 경계로 한 증가·감소와 지나는 사분면. 앞의 세 도구는 식에서 곧바로 읽히는 표준 절차라 통찰로 카운트하지 않았고, **통찰 판정은 「그래프 개형 ↔ 계수」 방향 전환이 필요한 곳**에만 붙였다 — 그림의 볼록 방향과 꼭짓점 위치에서 $a$, $p$, $q$ 의 부호를 결정하기(180-h5 · 180-c5~c7 · 181-02 · 181-04), 그림에서 꼭짓점과 지나는 점을 골라 읽어 식을 세우기(179-c3), 식에서 개형을 그려 지나는 사분면을 판정하기(178-h2 · 181-01), 그래프의 평행이동을 꼭짓점의 이동으로 환원하기(179-h4). 이 전환이 이 소단원의 유일한 인지 부담이며 나머지 10문항은 도구를 곧바로 쓰는 절차형이다. 부담은 Mₐ(상수 $a$, $p$, $q$ 를 문자로 다루기)와 Mₜ(T-부호: $(x+6)^2$ 에서 $p=-6$ · 평행이동량의 음수)에 몰려 있다.

변형 설계 때는 축이 셋이다 — ⒜ 방향(식 → 그래프·꼭짓점 / 그래프 → 식·부호), ⒝ 되묻기 층(꼭짓점 자체 / $p-q+m$ 같은 조합 / $apq$ 같은 곱 / 그 식이 지나는 점), ⒞ 그림 의존도(발문에 좌표를 문자로 주기 / 그림에서만 읽히게 하기). 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. **그림이 붙은 10문항은 숫자를 바꾸면 그림도 반드시 함께 다시 그려야 한다**(꼭짓점 좌표·절편 눈금이 그림 안에 적혀 있다).

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M31-177-01
  page: 177
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴~⑵ $y=(x-2)^2+1$ 에 대해 표를 채워 그래프를 좌표평면에 그리고, 꼭짓점의 좌표와 축의 방정식을 구하기.
  category: "대응표 작성 → 점 찍어 포물선 그리기 → 꼭짓점·축 읽기"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수 $y=a(x-p)^2+q$ 의 그래프 그리기와 꼭짓점·축"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표의 $x$ 값마다 $(x-2)^2+1$ 을 대입해 점을 찍고 매끄럽게 이어 그리는 도입 문항이다.
    ⑵ 는 완성된 그래프 또는 식의 꼴에서 $(2,\,1)$ 과 $x=2$ 를 그대로 읽으면 끝난다.
    확인하기 구역 ★1 출발 · 통찰 없음 · M_total 5 로 조정 없음.
  tier: star_1
  mechanism_primary: "표에 $x$ 값 대입 → 점 찍어 포물선 → 꼭짓점 $(2,\\,1)$ · 축 $x=2$"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 풀이 참조 ⑵ $(2,\,1)$, $x=2$'
  answer_source: "답지"
  figure: crop:fig-177-01.png
  latex: latex-bank/gn-m31/items/177-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$p$, $q$ 와 표의 $x$ 범위를 바꿀 수 있다. 제약: 표의 $x$ 값들이 축 $x=p$ 를 가운데 두고 좌우 대칭이어야 포물선 모양이 드러나고, $y$ 값이 좌표평면 눈금 안에 들어와야 한다. 그림(표+좌표평면)을 함께 다시 그려야 한다."
    creative: "(1) $a$ 를 $-1$ 이나 $\\dfrac{1}{2}$ 로 바꿔 볼록 방향·폭까지 묻기(★1 유지) (2) 표만 주고 식을 역으로 세우게 하면 I-RT 가 붙어 ★2 (3) 같은 평면에 $y=x^2$ 을 함께 그려 평행이동 관계를 설명하게 하면 서술형 ★2."
```

```yaml
- id: GN-M31-177-02
  page: 177
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴~⑵ $y=-2x^2$ 과 $y=\dfrac{1}{4}x^2$ 을 주어진 $p$, $q$ 만큼 평행이동한 그래프의 식·꼭짓점의 좌표·축의 방정식 구하기.
  category: "평행이동 공식 $y=a(x-p)^2+q$ 대입 → 꼭짓점·축 읽기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$y=ax^2$ 의 평행이동과 그래프의 식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $x$ 자리에 $x-p$ 를 넣고 $+q$ 를 붙이는 공식 한 줄 대입이다.
    ⑵ 의 $p=-1$ 에서 $(x+1)^2$ 이 되는 부호 처리(T-부호)가 유일한 함정이다.
    확인하기 ★1 출발 · 통찰 없음 · M_total 4 이므로 하한 ★1 유지.
  tier: star_1
  mechanism_primary: "$y=ax^2$ 의 $x \\to x-p$ · $+q$ → 식 → 꼭짓점 $(p,\\,q)$ · 축 $x=p$"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $y=-2(x-2)^2-5$, $(2,\,-5)$, $x=2$ ⑵ $y=\dfrac{1}{4}(x+1)^2+3$, $(-1,\,3)$, $x=-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/177-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$a$(정수·분수·음수)와 $p$, $q$ 의 부호 조합을 자유롭게 바꿀 수 있다. 제약: 두 소문항 중 적어도 하나는 $p<0$ 으로 두어 $(x+|p|)^2$ 부호 함정을 남기고, $a$ 는 약분이 깔끔한 값으로 둔다."
    creative: "(1) 이동 후 식을 주고 $p$, $q$ 를 역으로 묻기(I-EQV d1 · ★2) (2) 두 번 연속 평행이동으로 합성하기(★2) (3) 이동 후 그래프가 원점을 지나도록 $q$ 를 정하게 하면 역추적이 붙어 ★2~3."
```

```yaml
- id: GN-M31-177-03
  page: 177
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴~⑷ $y=2(x+4)^2-7$ 의 그래프에 대한 네 설명(볼록 방향 · 평행이동량 · 꼭짓점 · 축)의 옳고 그름을 $\bigcirc$, $\times$ 로 판정하기.
  category: "$a$ 의 부호·$p$·$q$ 읽기 → 네 설명 각각 대조"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수 $y=a(x-p)^2+q$ 의 그래프의 성질 판정(O·X)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    $a=2>0$ 이므로 아래로 볼록(⑴ 오답), $(x+4)^2$ 이므로 $p=-4$ 여서 $x$ 축 방향 이동은 $-4$(⑵ 오답),
    꼭짓점 $(-4,\,-7)$ · 축 $x=-4$ 는 그대로 읽힌다. 네 항목 모두 식에서 직접 읽으므로 통찰은 없고
    함정만 둘(T-부호: $+4 \to p=-4$ · T-표기: 볼록 방향) 있다. 확인하기 ★1 유지.
  tier: star_1
  mechanism_primary: "$y=2(x+4)^2-7$ 에서 $a=2$, $p=-4$, $q=-7$ 읽기 → 네 설명 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\times$ ⑵ $\times$ ⑶ $\bigcirc$ ⑷ $\bigcirc$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/177-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$a$ 의 부호와 $p$, $q$ 를 바꿀 수 있다. 제약: $p$ 는 음수로 두어 $(x+|p|)$ 함정을 유지하고, 네 설명 중 참·거짓이 모두 나오도록 조합한다."
    creative: "(1) 설명에 「제$3$사분면을 지난다」를 넣으면 개형 판단이 필요해 I-RT d1 · ★2 (2) 「$x>-4$ 일 때 $y$ 가 증가한다」 증감 항목 추가(★2) (3) 옳은 것의 개수를 묻는 객관식으로 바꾸면 전수 판정이 강제돼 ★2."
```

```yaml
- id: GN-M31-177-04
  page: 177
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    그림의 포물선을 보고 $y=a(x-p)^2+q$ 의 상수 $a$, $p$, $q$ 의 부호를 정하는 과정의 빈칸에 부등호 써넣기.
  category: "볼록 방향 → $a$ 의 부호 · 꼭짓점의 사분면 → $p$, $q$ 의 부호"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "$y=a(x-p)^2+q$ 의 그래프에서 $a$, $p$, $q$ 의 부호"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    위로 볼록 → $a<0$, 꼭짓점 $(p,\,q)$ 가 제$4$사분면 → $p>0$, $q<0$ 이다.
    같은 유형의 180-h5 와 달리 **판단 근거가 발문에 문장으로 이미 제시**되어 있고 학생은 부등호만 채우므로
    「개형 → 계수」 전환을 스스로 하지 않는다. 그래서 통찰 0 · 절차형으로 두고 확인하기 ★1 유지.
  tier: star_1
  mechanism_primary: "위로 볼록 → $a<0$ · 꼭짓점 제$4$사분면 → $p>0$, $q<0$"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$<$, $>$, $<$'
  answer_source: "답지"
  figure: crop:fig-177-04.png
  latex: latex-bank/gn-m31/items/177-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자가 없는 문항이라 바꿀 수는 볼록 방향과 꼭짓점이 놓인 사분면(제$1$~제$4$)뿐이다. 제약: 그림을 함께 다시 그려야 하고, 꼭짓점이 축 위에 놓이면 $p=0$ 또는 $q=0$ 이 되어 부등호가 성립하지 않으므로 사분면 내부에 둔다."
    creative: "(1) 유도 문장을 지우고 부호만 묻기(= 180-h5 골조 · I-RT d1 · ★2) (2) 부호를 주고 가능한 그래프를 고르게 하는 역방향(★2) (3) $a$, $p$, $q$ 의 부호에서 $apq$ 또는 $a+p+q$ 의 부호를 묻기(★2~3)."
```

### 핵심문제 익히기

```yaml
- id: GN-M31-178-h1
  page: 178
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    $y=a(x+6)^2-2$ 의 그래프가 $y=\dfrac{3}{4}x^2$ 을 $x$ 축 방향 $p$ · $y$ 축 방향 $q$ 만큼 평행이동한 것일 때 $apq$ 의 값.
  category: "평행이동 대응으로 $a$, $p$, $q$ 확정 → 곱하기"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수 $y=a(x-p)^2+q$ 의 그래프"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평행이동은 이차항의 계수를 바꾸지 않으므로 $a=\dfrac{3}{4}$ 이고, $(x+6)^2$ 에서 $p=-6$, 상수항에서 $q=-2$ 다.
    「$a$ 는 그대로 · $p$ 는 부호 반대로 읽기」가 이 유형의 전부이고 나머지는 세 수의 곱이다.
    핵심문제 구역 ★2 출발 · 통찰 없음 · M_total 6 이라 조정 없음.
  tier: star_2
  mechanism_primary: "평행이동은 $a$ 불변 → $a=\\dfrac{3}{4}$ · $p=-6$ · $q=-2$ → $apq$"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$9$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/178-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$a$(분수·음수)와 $p$, $q$ 를 바꿀 수 있다. 제약: $a$ 가 분수면 $apq$ 가 정수가 되도록 $pq$ 를 분모의 배수로 맞추고, $p$ 는 음수로 두어 $(x+|p|)$ 함정을 남긴다."
    creative: "(1) $a+p+q$ 나 $\\dfrac{q}{ap}$ 로 되묻기(★2 유지) (2) 원래 그래프를 $y=ax^2$ 로 두고 지나는 점 하나를 주어 $a$ 를 먼저 구하게 하면 한 겹 늘어 ★3 (3) 평행이동 방향을 문장으로 서술하게 하는 서술형(★2~3)."
```

```yaml
- id: GN-M31-178-c1
  page: 178
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    $y=-5x^2$ 을 $x$ 축 방향 $1$ · $y$ 축 방향 $8$ 만큼 평행이동한 그래프의 꼭짓점 $(p,\,q)$ 와 축 $x=m$ 에 대하여 $p-q+m$ 의 값.
  category: "평행이동 → 꼭짓점·축 읽기 → 부호 붙여 조합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 그래프의 꼭짓점·축과 그 값들의 조합"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이동한 그래프는 $y=-5(x-1)^2+8$ 이므로 꼭짓점 $(1,\,8)$ · 축 $x=1$ 이고, $p=1$, $q=8$, $m=1$ 을 대입한다.
    $-q$ 의 부호 처리 외에는 되묻기가 얕아 −1 후보(통찰 0 · M_total 5)이지만,
    꼭짓점·축을 각각 문자에 대응시키는 한 겹이 있어 핵심문제 구역 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "$y=-5(x-1)^2+8$ → 꼭짓점 $(1,\\,8)$ · 축 $x=1$ → $p-q+m$"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/178-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항 계수와 이동량 $(1,\\,8)$ 을 바꿀 수 있다. 제약: $p=m$ 이라는 사실이 감춰지도록 조합식을 $p-q+m$ 같은 비대칭 꼴로 유지하고, 답이 한 자리 정수로 떨어지게 이동량을 고른다."
    creative: "(1) 조합을 $pqm$ 이나 $p^2+q$ 로 바꾸기(★2 유지) (2) $p-q+m$ 의 값을 주고 이동량을 역추적하게 하면 I-BW d1 · ★3 (3) 이동 전 그래프를 $y=ax^2$ 로 두고 $a$ 까지 묻기(★2~3)."
```

```yaml
- id: GN-M31-178-h2
  page: 178
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    $y=-3(x+2)^2+4$ 의 그래프에 대한 설명 중 옳지 않은 것 고르기(꼭짓점 · 축 · 지나는 점 · 사분면 · 증감). 5지선다.
  category: "꼭짓점·축·$y$ 절편 확인 → 개형을 그려 지나는 사분면 판정"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 4
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "식에서 볼록 방향·꼭짓점·$y$ 절편을 뽑아 개형을 그린 뒤 지나는 사분면을 판정(④)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차함수 $y=a(x-p)^2+q$ 의 그래프의 성질"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ①②③⑤ 는 식에서 바로 읽히지만 ④ 「모든 사분면을 지난다」는 대수식만으로는 판정되지 않는다.
    위로 볼록 · 꼭짓점 $(-2,\,4)$ · $y$ 절편 $-8$ 로 개형을 그리면 오른쪽 가지가 $x$ 축을 음의 구간에서 지나
    제$1$사분면에 닿지 않음이 보인다. 대수 → 기하 전환 한 겹(I-RT d1)이라 핵심문제 ★2 유지.
  tier: star_2
  mechanism_primary: "$a<0$ · 꼭짓점 $(-2,\\,4)$ · $y$ 절편 $-8$ → 개형 스케치 → 사분면 판정"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '④'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/178-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$a$, $p$, $q$ 를 바꿀 수 있다. 제약: 꼭짓점이 $y$ 축의 한쪽에 치우쳐 있어야 사분면 선택지가 함정으로 작동하고, $y$ 절편은 정수가 되도록 $ap^2+q$ 를 정수로 맞춘다."
    creative: "(1) 「옳지 않은 것」을 「옳은 것」으로 뒤집기(★2 유지) (2) 사분면 선택지를 두 개로 늘려 전수 판정을 강제하면 ★3 (3) 증감 구간의 경계를 $x<-2$ 대신 $x \\le -2$ 로 바꿔 T-경계 함정을 추가(★2~3)."
```

```yaml
- id: GN-M31-178-c2
  page: 178
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    $y=\dfrac{1}{2}(x-3)^2-1$ 의 그래프에 대한 설명 중 옳은 것 고르기(꼭짓점 · 지나는 점 · 합동 · 사분면 · 증감). 5지선다.
  category: "꼭짓점·$y$ 절편·이차항 계수 비교 → 다섯 설명 각각 대조"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수 $y=a(x-p)^2+q$ 의 그래프의 성질"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정답 ③ 은 「이차항의 계수가 같으면 평행이동으로 포개어진다」는 정의 확인이고,
    나머지 선택지도 꼭짓점 $(3,\,-1)$ · $x=0$ 대입 · 축 $x=3$ 기준 증감으로 식에서 직접 판정된다.
    ④ 의 제$4$사분면 여부조차 꼭짓점 위치만으로 끝나므로 개형 스케치가 필요 없어 절차형.
    선택지 5개 전수 대조의 노동량(M_total 7)만 있어 핵심문제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "꼭짓점 $(3,\\,-1)$ · $y$ 절편 $\\dfrac{7}{2}$ · 계수 $\\dfrac{1}{2}$ → 다섯 설명 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/178-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$a$, $p$, $q$ 와 확인용 점의 $x$ 좌표를 바꿀 수 있다. 제약: 합동 선택지가 성립하려면 비교 대상 $y=ax^2$ 의 계수를 원식과 같게 두어야 하고, 꼭짓점이 사분면 내부에 오도록 $p$, $q$ 를 $0$ 이 아니게 둔다."
    creative: "(1) 합동 선택지의 계수를 다르게 해 오답으로 만들면 $|a|$ 비교가 필요해 ★2~3 (2) 「제$4$사분면을 지나지 않는다」를 정답 후보로 만들려면 꼭짓점을 제$1$사분면으로 올리고 개형 판단을 강제(I-RT d1 · ★3) (3) 옳은 것의 개수를 묻기(★2)."
```

```yaml
- id: GN-M31-179-h3
  page: 179
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    꼭짓점의 좌표가 $(-1,\,2)$ 이고 점 $(0,\,5)$ 를 지나는 포물선을 그래프로 하는 이차함수의 식 구하기.
  category: "꼭짓점으로 $y=a(x+1)^2+2$ 세우기 → 지나는 점 대입해 $a$ 결정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차함수의 식 구하기; $y=a(x-p)^2+q$"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    꼭짓점이 발문에 좌표로 명시되어 있어 $y=a(x+1)^2+2$ 까지는 공식 대입이고,
    남은 미지수 $a$ 는 점 $(0,\,5)$ 대입 한 줄로 결정된다. 그림은 개형 확인용이라 정보가 겹친다.
    표준 2단계라 통찰 없음 · 핵심문제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "꼭짓점 $(-1,\\,2)$ → $y=a(x+1)^2+2$ → $(0,\\,5)$ 대입 → $a=3$"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=3(x+1)^2+2$'
  answer_source: "본문 답"
  figure: crop:fig-179-h3.png
  latex: latex-bank/gn-m31/items/179-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꼭짓점과 지나는 점을 바꿀 수 있다. 제약: 두 점의 $x$ 좌표가 달라야 $a$ 가 정해지고, $a=\\dfrac{y_1-q}{(x_1-p)^2}$ 가 정수나 간단한 분수가 되도록 $(x_1-p)^2$ 을 약수로 맞춘다. 그림도 함께 다시 그려야 한다."
    creative: "(1) 지나는 점을 $y$ 절편 대신 $x$ 절편으로 주기(★2 유지) (2) 꼭짓점 대신 축의 방정식과 두 점을 주면 미지수가 둘로 늘어 ★3 (3) 구한 식으로 다른 점의 좌표를 되묻기(= 179-c3 골조 · ★2)."
```

```yaml
- id: GN-M31-179-c3
  page: 179
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    그림에 주어진 포물선이 점 $(6,\,k)$ 를 지날 때 $k$ 의 값 구하기.
  category: "그림에서 꼭짓점·지나는 점 읽기 → 식 세워 $a$ 결정 → $x=6$ 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "발문에 식이 없고, 그림의 눈금에서 꼭짓점과 지나는 점 두 정보를 골라 읽어 식으로 옮겨야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프가 주어진 포물선의 식 구하기와 지나는 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    짝 핵심문제 179-h3 은 꼭짓점과 점이 발문에 좌표로 적혀 있지만, 이 문항은 그림의 눈금에서
    꼭짓점과 $x$ 절편 쪽 점을 직접 골라 읽어야 식이 세워진다(기하 → 대수 전환 I-RT d1).
    식이 정해진 뒤 $x=6$ 대입은 한 줄. 통찰 1개 d1 이라 +1 조건에 못 미쳐 핵심문제 ★2 유지.
  tier: star_2
  mechanism_primary: "그림 → 꼭짓점·지나는 점 읽기 → $y=a(x-p)^2+q$ 로 $a$ 결정 → $x=6$ 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-5$'
  answer_source: "답지"
  figure: crop:fig-179-c3.png
  latex: latex-bank/gn-m31/items/179-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림 속 꼭짓점 좌표와 읽히는 점, 그리고 되묻는 $x$ 좌표를 바꿀 수 있다. 제약: 그림에 표시할 두 좌표는 눈금 위 정수여야 하고, $a$ 가 간단한 분수가 되도록 $(x_1-p)^2$ 을 고르며, 되묻는 점의 $y$ 값이 정수로 떨어져야 한다. 그림 라벨을 모두 다시 써야 한다."
    creative: "(1) 되묻기를 $k$ 대신 $x$ 절편이나 $y$ 절편으로 바꾸기(★2 유지) (2) 그림에 꼭짓점만 표시하고 지나는 점을 문장으로 주면 I-RT 가 약해져 ★2 하단 (3) 그림의 포물선이 다른 포물선과 만나는 점을 묻기(★3)."
```

```yaml
- id: GN-M31-179-h4
  page: 179
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    $y=-(x+2)^2-1$ 의 그래프를 $x$ 축 방향 $m$ · $y$ 축 방향 $n$ 만큼 평행이동했더니 $y=-(x-5)^2-3$ 과 일치할 때 $m+n$ 의 값.
  category: "두 그래프의 꼭짓점 비교 → 이동량 역산 → 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「그래프 전체가 겹쳐진다」는 조건을 「꼭짓점이 꼭짓점으로 옮겨진다」로 바꿔 읽어 이동량을 확정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차함수 $y=a(x-p)^2+q$ 의 그래프의 평행이동"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이동 결과가 먼저 주어지고 이동량을 되찾는 방향이다. 두 식의 이차항 계수가 같음을 확인한 뒤
    꼭짓점 $(-2,\,-1) \to (5,\,-3)$ 의 차로 $m=7$, $n=-2$ 를 읽는다.
    「그래프의 일치 = 꼭짓점의 일치」로 조건을 바꿔 읽는 한 겹(I-EQV d1)이 이 유형의 핵심이고
    계산은 뺄셈 두 번뿐이다. 핵심문제 ★2 유지.
  tier: star_2
  mechanism_primary: "꼭짓점 $(-2,\\,-1) \\to (5,\\,-3)$ → $m=7$, $n=-2$ → $m+n$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/179-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 식의 꼭짓점 좌표를 바꿀 수 있다. 제약: 두 식의 이차항 계수는 반드시 같아야 하고(다르면 평행이동으로 일치 불가), $m$ 과 $n$ 의 부호가 서로 달라야 합이 함정이 된다."
    creative: "(1) 이동량을 주고 이동 후 식을 묻는 순방향으로 뒤집기(절차형 ★2 · = 179-c4) (2) 이차항 계수를 다르게 준 보기를 섞어 「일치할 수 없다」를 판정하게 하면 ★3 (3) $x$ 축·$y$ 축 대칭이동을 섞으면 부호 함정이 늘어 ★3."
```

```yaml
- id: GN-M31-179-c4
  page: 179
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    $y=2(x-4)^2+3$ 의 그래프를 $x$ 축 방향 $-8$ · $y$ 축 방향 $-5$ 만큼 평행이동한 그래프의 꼭짓점의 좌표와 축의 방정식.
  category: "꼭짓점 $(4,\\,3)$ 에 이동량 더하기 → 축 읽기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 그래프의 꼭짓점과 축"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    꼭짓점 $(4,\,3)$ 에 $(-8,\,-5)$ 를 더해 $(-4,\,-2)$, 축은 $x=-4$ 로 끝난다. 덧셈 두 번짜리 한 단계다.
    통찰 0 · M_total 4 로 v3.8 의 −1 조건에 해당해 핵심문제 구역 ★2 에서 ★1 로 내렸다.
    [분류 이슈] 짝 핵심문제 179-h4(★2)와 같은 유형의 순방향이라 구역 기준으로는 ★2 후보.
  tier: star_1
  mechanism_primary: "꼭짓점 $(4,\\,3)+(-8,\\,-5)=(-4,\\,-2)$ → 축 $x=-4$"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(-4,\,-2)$, $x=-4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/179-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원래 꼭짓점과 이동량을 바꿀 수 있다. 제약: 이동량 중 적어도 하나는 음수로 두어 부호 함정을 남기고, 결과 꼭짓점이 축 위에 오지 않게 한다(사분면 후속 문항으로 확장하기 위함)."
    creative: "(1) 이동 후 그래프가 지나는 점을 되묻기(= 181-03 골조 · ★2) (2) 이동 후 꼭짓점이 놓인 사분면을 묻기(I-RT d1 · ★2) (3) 이동 전후 꼭짓점을 주고 이동량을 역추적(= 179-h4 · ★2)."
```

```yaml
- id: GN-M31-180-h5
  page: 180
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    그림의 포물선이 $y=a(x-p)^2+q$ 의 그래프일 때 상수 $a$, $p$, $q$ 의 부호 고르기. 5지선다.
  category: "볼록 방향 → $a$ · 축의 위치 → $p$ · 꼭짓점의 높이 → $q$"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그림의 볼록 방향과 꼭짓점이 놓인 사분면을 계수 $a$, $p$, $q$ 의 부등호 조건으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차함수 $y=a(x-p)^2+q$ 의 그래프에서 $a$, $p$, $q$ 의 부호"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    아래로 볼록이므로 $a>0$, 축이 $y$ 축 왼쪽이므로 $p<0$, 꼭짓점이 $x$ 축 아래이므로 $q<0$ 이다.
    177-04 와 달리 유도 문장이 없어 학생이 「개형 → 계수 부호」 전환을 스스로 해야 한다(I-RT d1).
    선택지에 $p$, $q$ 의 부호만 다른 오답이 섞여 있어 축·꼭짓점을 분리해 읽는 것이 함정이다.
    통찰 1개 d1 이라 핵심문제 ★2 유지.
  tier: star_2
  mechanism_primary: "아래로 볼록 → $a>0$ · 축 $y$ 축 왼쪽 → $p<0$ · 꼭짓점 $x$ 축 아래 → $q<0$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '③'
  answer_source: "본문 답"
  figure: crop:fig-180-h5.png
  latex: latex-bank/gn-m31/items/180-h5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자가 없으므로 바꿀 수 있는 것은 볼록 방향과 꼭짓점이 놓인 사분면뿐이다. 제약: 그림을 다시 그려야 하고, 다섯 선택지가 $(a,\\,p,\\,q)$ 부호의 서로 다른 조합이 되도록 유지하며 정답과 한 글자만 다른 오답을 최소 둘 남긴다."
    creative: "(1) $y$ 절편의 부호까지 묻기(★3) (2) 부호 조합을 주고 그래프를 고르게 하는 역방향(★2~3) (3) $ap$, $aq$, $pq$ 의 부호를 묻기(곱의 부호 판정이 한 겹 더 · ★3) (4) 계수를 바꿔 끼운 $y=p(x-a)^2+q$ 의 개형을 묻기(= 181-04 · ★4)."
```

```yaml
- id: GN-M31-180-c5
  page: 180
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    그림의 포물선이 $y=ax^2+q$ 의 그래프일 때 상수 $a$, $q$ 의 부호 구하기.
  category: "볼록 방향 → $a$ · $y$ 축 위 꼭짓점의 높이 → $q$"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그림의 볼록 방향과 꼭짓점 높이를 계수 $a$, $q$ 의 부등호로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "$y=ax^2+q$ 의 그래프에서 $a$, $q$ 의 부호"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    꼭짓점이 $y$ 축 위에 있는 특수형이라 읽을 부호가 둘뿐이다. 위로 볼록 → $a<0$,
    꼭짓점이 $x$ 축 위 → $q>0$. 180-h5 와 같은 기하 → 대수 전환(I-RT d1)이지만 축 위치 판단이 빠져
    단계가 한 겹 적다. 통찰 1개가 있어 −1 은 적용하지 않고 확인문제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "위로 볼록 → $a<0$ · 꼭짓점 $(0,\\,q)$ 가 $x$ 축 위 → $q>0$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a<0$, $q>0$'
  answer_source: "답지"
  figure: crop:fig-180-c5.png
  latex: latex-bank/gn-m31/items/180-c5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "볼록 방향과 꼭짓점의 $y$ 축 위 위치(양·음)만 바꿀 수 있다. 제약: 그림을 다시 그려야 하고, 꼭짓점이 원점에 오면 $q=0$ 이 되어 부등호가 성립하지 않는다."
    creative: "(1) $x$ 절편의 개수를 함께 묻기(판별식 개념과 연결 · ★3) (2) $a+q$ 나 $aq$ 의 부호로 되묻기(★2~3) (3) 꼭짓점을 $y$ 축에서 떼어 $y=a(x-p)^2+q$ 로 일반화(= 180-c7 · ★2)."
```

```yaml
- id: GN-M31-180-c6
  page: 180
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    그림의 포물선이 $y=a(x-p)^2$ 의 그래프일 때 상수 $a$, $p$ 의 부호 구하기.
  category: "볼록 방향 → $a$ · $x$ 축 위 꼭짓점의 위치 → $p$"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그림의 볼록 방향과 꼭짓점의 좌우 위치를 계수 $a$, $p$ 의 부등호로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "$y=a(x-p)^2$ 의 그래프에서 $a$, $p$ 의 부호"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    꼭짓점이 $x$ 축 위에 있는 특수형($q=0$)이다. 아래로 볼록 → $a>0$,
    꼭짓점이 원점 오른쪽 → $p>0$. 180-c5 와 짝을 이루어 $q$ 대신 $p$ 만 읽게 한 변형이며
    기하 → 대수 전환 한 겹(I-RT d1)은 같다. 확인문제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "아래로 볼록 → $a>0$ · 꼭짓점 $(p,\\,0)$ 이 원점 오른쪽 → $p>0$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a>0$, $p>0$'
  answer_source: "답지"
  figure: crop:fig-180-c6.png
  latex: latex-bank/gn-m31/items/180-c6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "볼록 방향과 꼭짓점의 좌우 위치만 바꿀 수 있다. 제약: 그림을 다시 그려야 하고, 꼭짓점이 원점에 오면 $p=0$ 이 되어 부등호가 성립하지 않는다."
    creative: "(1) $y$ 절편의 부호를 함께 묻기($ap^2>0$ 판정 한 겹 추가 · ★3) (2) $x$ 축과 한 점에서 만나는 이유를 서술하게 하기(★2~3) (3) $q$ 를 되살려 $y=a(x-p)^2+q$ 로 일반화(= 180-c7 · ★2)."
```

```yaml
- id: GN-M31-180-c7
  page: 180
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    그림의 포물선이 $y=a(x-p)^2+q$ 의 그래프일 때 상수 $a$, $p$, $q$ 의 부호 구하기.
  category: "볼록 방향 → $a$ · 축의 위치 → $p$ · 꼭짓점의 높이 → $q$"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그림의 볼록 방향과 꼭짓점이 놓인 사분면을 계수 $a$, $p$, $q$ 의 부등호 조건으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "$y=a(x-p)^2+q$ 의 그래프에서 $a$, $p$, $q$ 의 부호"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    위로 볼록 → $a<0$, 축이 $y$ 축 왼쪽 → $p<0$, 꼭짓점이 $x$ 축 위 → $q>0$ 으로
    꼭짓점이 제$2$사분면에 있는 경우다. 180-h5 와 완전히 같은 골조이고 객관식이 주관식으로 바뀐 것,
    사분면이 제$3$ 에서 제$2$ 로 바뀐 것만 다르다(I-RT d1). 확인문제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "위로 볼록 → $a<0$ · 축 $y$ 축 왼쪽 → $p<0$ · 꼭짓점 $x$ 축 위 → $q>0$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a<0$, $p<0$, $q>0$'
  answer_source: "답지"
  figure: crop:fig-180-c7.png
  latex: latex-bank/gn-m31/items/180-c7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "볼록 방향과 꼭짓점이 놓인 사분면(제$1$~제$4$)만 바꿀 수 있다. 제약: 그림을 다시 그려야 하고, 꼭짓점이 좌표축 위에 오면 $p=0$ 또는 $q=0$ 이 되어 부호 문항이 성립하지 않는다."
    creative: "(1) $apq$ 의 부호로 되묻기(곱의 부호 판정 한 겹 · ★3) (2) 그래프가 지나지 않는 사분면을 함께 묻기(★3) (3) $y$ 절편 $ap^2+q$ 의 부호를 묻기(그림에서만 판정 가능 · ★3~4)."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M31-181-01
  page: 181
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    $y=-\dfrac{1}{2}(x+1)^2-2$ 의 그래프에 대한 설명 중 옳은 것 모두 고르기(볼록 방향·축 · 꼭짓점 · 평행이동 · 증감 · 사분면). 5지선다 정답 2개.
  category: "꼭짓점·볼록 방향·평행이동량 확인 → 축 기준 증감 → 개형으로 사분면 판정"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 5
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "위로 볼록이고 최댓값이 $-2<0$ 임을 개형으로 옮겨 그래프가 제$3$·제$4$사분면만 지남을 판정(⑤)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차함수 $y=a(x-p)^2+q$ 의 그래프의 성질"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $a<0$ 이라 ① 의 「아래로 볼록」은 틀리고, $(x+1)^2$ 이므로 꼭짓점은 $(-1,\,-2)$ 여서 ② 도 틀리며,
    ④ 는 축 왼쪽에서 증가 구간이므로 뒤집혀 있다. 정답 ③⑤ 중 ⑤ 는 꼭짓점의 $y$ 좌표가 최댓값 $-2$ 임을
    개형으로 옮겨야 판정된다(I-RT d1). 정답이 2개라 다섯 선택지를 전수 판정해야 하고 네 도구를
    한 문항에서 모두 쓰므로 시험 구역 출발 범위의 위쪽 ★3.
    [분류 이슈] 골조 자체는 178-h2(★2)와 같아 ★2 후보 — 복수 정답에 의한 전수 판정 부담을 ★로 볼지 카탈로그 설계 때 결정.
  tier: star_3
  mechanism_primary: "$a=-\\dfrac{1}{2}$ · 꼭짓점 $(-1,\\,-2)$ → 축·증감·평행이동량 대조 → 개형으로 사분면 판정"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '③, ⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/181-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "$a$, $p$, $q$ 를 바꿀 수 있다. 제약: 사분면 선택지가 성립하려면 $a$ 와 $q$ 의 부호로 그래프가 $x$ 축과 만나는지가 결정되므로 $aq<0$ 이 되지 않게 유지해야 「두 사분면만 지난다」가 참이 된다. 정답이 정확히 2개가 되도록 선택지를 다시 맞춘다."
    creative: "(1) $q$ 의 부호를 바꿔 그래프가 $x$ 축과 만나게 하면 지나는 사분면이 셋으로 늘어 판정이 무거워짐(★3~4) (2) 정답 개수를 밝히지 않으면 I-VF 성격이 붙어 ★4 (3) 옳지 않은 것 하나만 고르게 하면 ★2."
```

```yaml
- id: GN-M31-181-02
  page: 181
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    그림의 포물선이 $y=a(x-p)^2+q$ 의 그래프일 때 상수 $a$, $p$, $q$ 에 대하여 $apq$ 의 값 구하기.
  category: "그림에서 꼭짓점·$y$ 절편 읽기 → 대입해 $a$ 결정 → 세 수의 곱"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그림의 꼭짓점과 $y$ 절편 두 눈금을 골라 읽어 식으로 옮긴 뒤 $a$ 를 결정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프에서 읽은 $a$, $p$, $q$ 의 값과 그 조합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    180 쪽의 부호 판정과 달리 **값 자체**를 읽어야 한다. 그림에서 꼭짓점 $(1,\,-1)$ 로 $p$, $q$ 를 정하고
    $y$ 절편 $-4$ 를 대입해 $a$ 를 구한 뒤 곱한다(I-RT d1). 위로 볼록이라 $a$ 가 음수이고
    $q$ 도 음수여서 곱의 부호 처리가 함정이다. 시험 구역 ★2~3 출발에서 M_total 8 로 ★3.
  tier: star_3
  mechanism_primary: "그림 → 꼭짓점 $(1,\\,-1)$ · $y$ 절편 $-4$ → $a$ 결정 → $apq$"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3$'
  answer_source: "답지"
  figure: crop:fig-181-02.png
  latex: latex-bank/gn-m31/items/181-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림의 꼭짓점 좌표와 $y$ 절편을 바꿀 수 있다. 제약: $a=\\dfrac{(\\text{$y$ 절편})-q}{p^2}$ 가 정수가 되도록 $p^2$ 이 차를 나누게 맞추고, $p \\ne 0$ · $q \\ne 0$ 이어야 $apq \\ne 0$ 이다. 그림 눈금 라벨을 모두 다시 써야 한다."
    creative: "(1) 되묻기를 $a+p+q$ 나 $a-p+q$ 로 바꾸기(★3 유지) (2) $y$ 절편 대신 $x$ 절편 하나를 그림에 표시하면 제곱근 처리가 붙어 ★3~4 (3) 값 대신 부호만 묻기(= 180-h5 · ★2) (4) 구한 식을 평행이동해 지나는 점을 되묻기(★4)."
```

```yaml
- id: GN-M31-181-03
  page: 181
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    $y=5(x-2)^2+7$ 의 그래프를 $x$ 축 방향 $-3$ · $y$ 축 방향 $1$ 만큼 평행이동한 그래프가 점 $(-2,\,k)$ 를 지날 때 $k$ 의 값.
  category: "평행이동으로 식 다시 쓰기 → 점의 $x$ 좌표 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동한 그래프가 지나는 점"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    꼭짓점 $(2,\,7)$ 이 $(-1,\,8)$ 로 옮겨지므로 식은 $y=5(x+1)^2+8$ 이고, $x=-2$ 를 대입하면 끝난다.
    「평행이동 → 식 → 대입」 두 도구를 이어 붙인 것뿐이고 각 단계가 표준이라 통찰은 없다.
    시험 구역 ★2~3 출발이지만 통찰 0 · M_total 6 으로 아래쪽 ★2.
  tier: star_2
  mechanism_primary: "꼭짓점 $(2,\\,7) \\to (-1,\\,8)$ → $y=5(x+1)^2+8$ → $x=-2$ 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$13$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/181-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항 계수·원래 꼭짓점·이동량·대입할 $x$ 좌표를 바꿀 수 있다. 제약: 이동량 중 하나는 음수로 두어 부호 함정을 남기고, $a(x_0-p')^2$ 이 커지지 않도록 대입점과 새 축의 거리를 $1$~$2$ 로 유지해 $k$ 가 두 자리 정수에 머물게 한다."
    creative: "(1) $k$ 를 주고 이동량 하나를 역추적하게 하면 I-BW d1 · ★3 (2) 이동 후 그래프가 원점을 지나도록 $y$ 축 이동량을 정하게 하기(★3) (3) 이동 후 꼭짓점이 놓인 사분면까지 묻기(★2~3)."
```

```yaml
- id: GN-M31-181-04
  page: 181
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험대비"
  summary: |
    그림의 포물선이 $y=a(x-p)^2+q$ 의 그래프일 때, 상수를 바꿔 끼운 $y=p(x-a)^2+q$ 의 그래프로 알맞은 것 고르기. 그림 5지선다.
  category: "그림 → $a$, $p$, $q$ 의 부호 → 역할을 바꿔 끼운 식의 부호 재해석 → 개형 선택"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "주어진 그림의 볼록 방향과 꼭짓점 위치를 $a>0$, $p<0$, $q>0$ 으로 옮김"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "새 식 $y=p(x-a)^2+q$ 에서 이차항 계수가 $p$ · 축이 $x=a$ 로 역할이 뒤바뀐 것을 읽고, 앞서 얻은 부호를 그대로 적용해 새 개형(위로 볼록 · 꼭짓점 제$1$사분면)을 확정"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "계수의 역할을 바꿔 끼운 이차함수의 그래프 개형 고르기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    1 단계는 180-h5 와 같은 부호 판정(아래로 볼록 $a>0$ · 축이 $y$ 축 왼쪽 $p<0$ · 꼭짓점이 $x$ 축 위 $q>0$)이다.
    2 단계에서 같은 문자들이 **이차항 계수 ↔ 축의 위치**로 역할을 맞바꾸므로, $p<0$ 이 위로 볼록을,
    $a>0$ 이 축 $x=a>0$ 을 뜻하게 다시 해석해야 한다. 이 역할 교체가 이 범위에서 유일하게
    한 겹을 더 요구하는 지점이다(I-EQV d2). 통찰 2개 · M_total 8 로 +1 조건을 만족해 시험 구역 ★3 에서 ★4.
  tier: star_4
  mechanism_primary: "그림 → $a>0$, $p<0$, $q>0$ → $y=p(x-a)^2+q$ 는 위로 볼록·축 $x=a>0$·꼭짓점 높이 $q>0$ → 제$1$사분면 꼭짓점 개형"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '③'
  answer_source: "답지"
  figure: crop:fig-181-04-3.png
  latex: latex-bank/gn-m31/items/181-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "바꿀 수 있는 것은 원래 그림의 볼록 방향과 꼭짓점이 놓인 사분면이다. 제약: 원래 그림과 바꿔 끼운 식이 서로 다른 개형을 주어야 문항이 성립하므로 $a$ 와 $p$ 의 부호는 서로 달라야 하고, $q$ 의 부호가 꼭짓점의 상하를 그대로 결정한다. 선택지 다섯 개형 그림을 모두 다시 그려야 한다."
    creative: "(1) 바꿔 끼우는 조합을 $y=q(x-p)^2+a$ 로 바꾸기(같은 골조 ★4) (2) 원래 그래프를 식으로 주고 새 개형을 그리게 하는 서술형(★4) (3) 새 그래프가 지나는 사분면만 묻기(★3) (4) 두 그래프의 교점 존재 여부까지 묻기(★5 후보 — 통찰이 셋으로 늘고 I-VF 가 붙음)."
```

## 표본 판정 요약 (20문)

- ★ 분포: ★1 5 · ★2 12 · ★3 2 · ★4 1 · ★5 0
- 통찰형 10 · 절차형 10 · premium 0
- 통찰 유형 분포: I-RT 9(그래프 ↔ 계수 전환) · I-EQV 2(조건의 동치 변환) — 이 범위 통찰의 실체는 사실상 **「기하 개형 ↔ 대수 계수」 한 축**이다. depth 3 은 없고 d2 는 181-04 한 곳뿐이다.
- 구역별: 개념원리 확인하기 4문(전부 ★1 · 절차형) · 핵심문제 익히기 12문(★1 1 · ★2 11 · 통찰형 7) · 이런 문제가 시험에 나온다 4문(★2 1 · ★3 2 · ★4 1 · 통찰형 3)
- type_hint 상위 5: 「$a$, $p$, $q$ 의 부호 판정」 7(177-04 · 180-h5 · 180-c5 · 180-c6 · 180-c7 · 181-02 · 181-04) · 「평행이동한 그래프의 식·꼭짓점·축」 5(177-02 · 178-h1 · 178-c1 · 179-c4 · 181-03) · 「그래프의 성질 판정」 4(177-03 · 178-h2 · 178-c2 · 181-01) · 「그래프로부터 식 구하기」 2(179-h3 · 179-c3) · 「평행이동량 역추적」 1(179-h4)
- 그림: 10문(`crop:fig-177-01.png` · `crop:fig-177-04.png` · `crop:fig-179-h3.png` · `crop:fig-179-c3.png` · `crop:fig-180-h5.png` · `crop:fig-180-c5.png` · `crop:fig-180-c6.png` · `crop:fig-180-c7.png` · `crop:fig-181-02.png` · `crop:fig-181-04-3.png`) — 숫자 변형 시 전부 다시 그려야 한다.
- 답 확인 필요로 표시한 문항: 없음(골조를 잡는 과정에서 전사본 answer 와 어긋나는 조건을 발견하지 못했다).

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M31-179-c4 | 핵심문제 구역(★2 출발)이지만 꼭짓점에 이동량을 더하는 한 단계뿐(통찰 0 · M_total 4)이라 v3.8 −1 조건으로 ★1 로 내렸다. 짝 핵심문제 179-h4(★2)의 순방향이라 구역 기준으로는 ★2 후보 | ★1 / ★2 |
| GN-M31-181-01 | 골조는 178-h2(★2)와 같은 성질 판정이나 정답이 2개라 다섯 선택지 전수 판정이 강제된다. 「복수 정답에 의한 전수 판정 부담」을 ★ 상승으로 볼지 결정 필요 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **부호 판정 계열 7문이 이 범위 최대 군집**이지만 안쪽이 세 층으로 갈린다 — ⒜ 유도 문장이 제시된 빈칸형(177-04 · 절차형 ★1), ⒝ 스스로 개형 → 부호를 옮기는 표준형(180-h5 · 180-c5 · 180-c6 · 180-c7 · 통찰형 ★2), ⒞ 값까지 읽거나 역할을 바꿔 끼우는 확장형(181-02 ★3 · 181-04 ★4). 카탈로그에서는 ⒜⒝ 를 한 유형으로 묶되 「유도 제시 여부」를 난이도 modifier 로 두고, ⒞ 는 **따로 세워야 한다**(특히 181-04 의 계수 역할 교체는 이 단원에서 유일한 d2 통찰이라 독립 유형 자격이 있다).
- 180-c5($y=ax^2+q$)·180-c6($y=a(x-p)^2$)는 180-c7 의 $q=0$ · $p=0$ 특수형이다. 미지수가 둘뿐이라 ★1 후보로 볼 수도 있으나 기하 → 대수 전환 한 겹은 같아 ★2 로 뒀다. 카탈로그에서는 **180-c7 과 같은 유형의 특수 케이스로 통합**하고 별도 유형으로 세우지 않는 편이 낫다.
- 「평행이동」 계열 6문도 방향으로 갈린다 — 순방향(177-02 · 178-h1 · 178-c1 · 179-c4 · 181-03)과 역방향(179-h4, 이동 결과에서 이동량 역산). 역방향은 I-EQV 가 붙으므로 카탈로그에서 **별도 유형으로 세우는 것이 맞다**.
- 「그래프의 성질 판정」 4문(177-03 · 178-h2 · 178-c2 · 181-01)은 선택지 구성에 따라 통찰 유무가 갈린다. 사분면·개형 선택지가 정답을 가를 때만 I-RT 가 붙으므로, 카탈로그에서는 한 유형으로 묶고 **「사분면 판정 선택지 포함」을 ★2 ↔ ★3 분기 조건**으로 적어 두는 것이 좋다.
- 이 범위 전체가 $y=a(x-p)^2+q$ 한 꼴에 묶여 있어 type_hint 가 6개로 좁다. 2/2 파일(182쪽 이후 32문)의 유형이 합쳐진 뒤에 「19 이차함수 (3)」 카탈로그를 설계하는 것이 낫다.
