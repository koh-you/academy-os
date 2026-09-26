---
name: mechanism-데이터-GN-CM2-31-p2
description: 개념원리 공통수학2 31 유리함수(2/3 · 263-e7~269-627) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: 31 유리함수
  unit_code: CM2-31
  part: "2/3"
  extract_range: "263~269쪽 · 263-e7~269-627"
  total_problems: 24
  unit_total: 47
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 31 유리함수 (2/3) 정독 데이터 (v1.0)

이 파일은 31단원 유리함수의 둘째 조각 24문(263~269쪽 · 263-e7~269-627)을 다룬다. 구역은 「필수·발전 예제」 하나뿐이며, 필수 예제 6 · 발전 예제 1 · 그 아래 확인체크 17 로 이루어진 **예제 1 + 확인체크 2~3 반복 구조**다. 일곱 개의 예제가 이 조각의 뼈대이고 각 예제가 도구 하나를 담당한다 — ⑴ 표준형 변형과 그래프·정의역·치역·점근선(263-e7) ⑵ y=k/x 로부터의 평행이동(264-e8) ⑶ 제한된 정의역에서의 치역·최대최소(265-e9) ⑷ 대칭의 중심과 대칭축(266-e10) ⑸ 그래프에서 식 구하기(267-e11) ⑹ 그래프와 직선의 위치 관계(268-e12 · 유일한 「발전」) ⑺ 유리함수의 합성과 주기(269-e13). 그림 문항은 3문(267-e11 · 267-621 · 269-627)이고 선택지 문항은 없으며 보기(ㄱㄴㄷ) 문항이 1문(264-613)이다.

벤더 난이도 신호와 이 파일의 출발점 규약: 「필수」 예제 ★2 · 「발전」 예제 ★3 · tag 「확인체크」는 구역 신호를 우선해 **바로 위 예제와 같은 출발점**으로 두었다(예제의 유제 배치이므로 통번호 익히기의 ★1 과 구분한다). 따라서 268-624·268-625 는 발전 예제 268-e12 의 유제라 ★3 출발이다. 출발점에서 M_total·통찰로 ±1 조정했다. 이 단원에서 반복되는 **표준형 변형**((ax+b)/(cx+d) → k/(x−p)+q)과 **점근선 읽기**(x=−p, y=q)는 263-e7·264-e8 에서 공식으로 제시되는 이 절의 표준 도구이므로 **통찰로 세지 않고** Mₖ·Mₜ(T-범위: 정의역 제외점 · T-부호: k 의 부호로 갈라지는 개형)에 반영했다. 대신 ⑶ 정의역이 점근선을 사이에 두고 갈라질 때의 구간별 처리(I-MI)와 치역→정의역 역추적(I-BW), ⑸ 그림을 식으로 옮기는 전환(I-RT), ⑹ 「만난다/만나지 않는다」의 동치 변환과 일차·이차 분리(I-EQV·I-MI), ⑺ 합성의 주기 발견(I-PD)은 통찰로 셌다. 결과적으로 앞 세 절(평행이동까지)은 절차형 ★2 에 몰려 있고, 265쪽 치역·최대최소부터 269쪽 합성까지가 통찰형 ★3 으로 갈린다.

이 파일의 주 용도는 숫자 변형·창의 변형의 **원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM2-263-e7
  page: 263
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ $y=\dfrac{4}{x+1}+3$ ⑵ $y=\dfrac{2x+1}{x+2}$ 의 그래프를 그리고 정의역·치역·점근선의
    방정식을 구하기.
  category: "표준형 k/(x-p)+q 로 변형 → 평행이동으로 개형 → 정의역·치역·점근선"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리함수의 그래프(표준형 변형 · 정의역 · 치역 · 점근선)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴은 이미 표준형이라 (-1, 3) 평행이동을 읽으면 끝이고, ⑵는 분자를 2(x+2)-3 으로 갈라
    2-3/(x+2) 로 고치는 한 단계가 추가된다. 정의역·치역은 점근선의 값만 빼면 되고 통찰은 없다.
    필수 예제 출발 ★2 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "분자를 분모로 나눠 k/(x-p)+q 표준형 → y=k/x 의 (p, q) 평행이동으로 개형 → 정의역 x≠p · 치역 y≠q · 점근선 x=p, y=q"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 풀이 참조(그래프), 정의역: $\{x \mid x\ne -1$인 실수$\}$, 치역: $\{y \mid y\ne 3$인 실수$\}$, 점근선의 방정식: $x=-1$, $y=3$ ⑵ 풀이 참조(그래프), 정의역: $\{x \mid x\ne -2$인 실수$\}$, 치역: $\{y \mid y\ne 2$인 실수$\}$, 점근선의 방정식: $x=-2$, $y=2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/263-e7.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴의 분자 4 와 평행이동량 (-1, 3), ⑵의 계수 (2, 1, 2) 를 바꿀 수 있음. 제약: ⑵는 ad-bc≠0 이어야 진짜 유리함수이고(ad=bc 면 상수함수로 무너짐), k 의 부호가 바뀌면 개형이 1·3분면에서 2·4분면으로 뒤집히므로 그래프 답도 같이 바뀐다."
    creative: "(1) 점근선만 묻고 그래프는 빼면 ★1 (2) 정의역을 제한해 치역을 묻게 하면 265-e9 골조로 넘어가 I-MI d2 → ★3 (3) 표준형 대신 y=(ax+b)/(cx+d) 에서 c≠1 로 두면 분모 정리가 한 단계 늘어 Mₖ 상승 ★2 유지."
```

```yaml
- id: GN-CM2-263-611
  page: 263
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴ $y=-\dfrac{2}{x+2}+1$ ⑵ $y=\dfrac{-2x+1}{x+3}$ ⑶ $y=\dfrac{6-x}{x-3}$ 의 그래프를 그리고
    정의역·치역·점근선의 방정식을 구하기.
  category: "표준형 변형 → 개형 → 정의역·치역·점근선 (세 문항 반복)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리함수의 그래프(표준형 변형 · 정의역 · 치역 · 점근선)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    263-e7 과 같은 골조를 세 번 반복한다. ⑵는 -2 + 7/(x+3), ⑶은 -1 + 3/(x-3) 으로 고쳐지고
    분자 부호가 음수인 ⑴에서 개형이 뒤집히는 것만 주의하면 된다(T-부호). 확인체크는 바로 위
    예제와 같은 출발점 ★2 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "각 식을 k/(x-p)+q 로 변형 → k 의 부호로 개형 결정 → 정의역 x≠p · 치역 y≠q · 점근선 x=p, y=q"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 풀이 참조(그래프), 정의역: $\{x \mid x\ne -2$인 실수$\}$, 치역: $\{y \mid y\ne 1$인 실수$\}$, 점근선의 방정식: $x=-2$, $y=1$ ⑵ 풀이 참조(그래프), 정의역: $\{x \mid x\ne -3$인 실수$\}$, 치역: $\{y \mid y\ne -2$인 실수$\}$, 점근선의 방정식: $x=-3$, $y=-2$ ⑶ 풀이 참조(그래프), 정의역: $\{x \mid x\ne 3$인 실수$\}$, 치역: $\{y \mid y\ne -1$인 실수$\}$, 점근선의 방정식: $x=3$, $y=-1$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-cm2/items/263-611.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 식의 계수를 모두 교체 가능. 제약: 세 문항이 k>0 · k<0 을 섞어 개형 두 종류를 모두 훈련하도록 유지하고, ⑶처럼 분자의 x 계수가 음수인 배치를 하나는 남긴다(-1 로 묶어 내는 실수 지점)."
    creative: "(1) 세 식 중 그래프가 서로 평행이동으로 겹치는 쌍을 고르게 하면 264-613 골조로 이동(I-EQV d1 ★2) (2) 정의역·치역을 주고 식을 역으로 고르게 하면 267-623 골조 ★2 (3) 그래프가 지나는 사분면을 묻게 하면 개형과 부호를 함께 따져 Mₜ 상승 ★3."
```

```yaml
- id: GN-CM2-264-e8
  page: 264
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $y=\dfrac{-x+5}{x-2}$ 의 그래프가 $y=\dfrac{a}{x}$ 를 $x$축으로 $b$, $y$축으로 $c$ 만큼
    평행이동한 것일 때 상수 $a$, $b$, $c$ 구하기.
  category: "표준형 변형 → y=a/(x-b)+c 와 계수 비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리함수의 그래프의 평행이동(표준형 변형 후 계수 비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자를 -(x-2)+3 으로 갈라 -1 + 3/(x-2) 로 고치면 y=a/x 의 평행이동 꼴 a/(x-b)+c 와
    항끼리 바로 대응한다. 평행이동 방향의 부호(x-b 에서 b 가 오른쪽 이동)가 유일한 함정이다.
    필수 예제 출발 ★2 · 통찰 0 · M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "-x+5 = -(x-2)+3 → y = 3/(x-2) - 1 → a/(x-b)+c 와 계수 비교 → a=3, b=2, c=-1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a=3$, $b=2$, $c=-1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/264-e8.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자·분모의 계수 (-1, 5, 1, -2) 를 바꿀 수 있음. 제약: 나머지 a 가 0 이 아니어야 하고(0 이면 상수함수), a·b·c 가 정수로 떨어지도록 분자를 분모의 배수 + 정수 나머지로 설계한다."
    creative: "(1) 반대로 y=a/x 와 이동량을 주고 (ax+b)/(x+c) 꼴 식을 만들게 하면 264-612 골조 ★2 (2) 평행이동 대신 x축·y축 대칭이동을 섞으면 부호 분기가 늘어 I-MI d1 → ★3 (3) a, b, c 를 각각 묻지 않고 abc 나 a+b+c 로 묶으면 부호 실수가 그대로 답에 드러나 Mₜ 상승 ★2 유지."
```

```yaml
- id: GN-CM2-264-612
  page: 264
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $y=-\dfrac{3}{x}$ 를 $x$축으로 $3$, $y$축으로 $-2$ 만큼 평행이동한 식이
    $y=\dfrac{ax+b}{x-c}$ 일 때 $abc$ 의 값.
  category: "평행이동 적용 → 한 분수로 통분 → 계수 비교 → 곱"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리함수의 그래프의 평행이동(이동 후 식을 (ax+b)/(x-c) 꼴로 정리)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    264-e8 의 역방향이지만 이동량이 명시돼 있어 역추적은 없다. -3/(x-3) - 2 를 통분해
    (-2x+3)/(x-3) 로 만들고 a, b, c 를 읽어 곱하면 끝. 확인체크 출발 ★2 · 통찰 0 ·
    M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "y = -3/(x-3) - 2 → 통분해 (-2x+3)/(x-3) → a=-2, b=3, c=3 → abc"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-18$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/264-612.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 -3 과 이동량 (3, -2) 를 바꿀 수 있음. 제약: 분모가 x-c 꼴(1차 계수 1)로 고정돼 있으므로 이동량의 x 성분이 그대로 c 가 되고, abc 가 정수가 되도록 세 값을 정수로 둔다."
    creative: "(1) abc 대신 a+b+c 를 묻기(★2 유지) (2) 이동량을 미지수로 두고 결과 식을 주면 264-614 골조의 역추적 ★2 (3) 평행이동 뒤 그래프가 지나는 점을 추가 조건으로 주면 조건 통합이 생겨 I-CON d1 → ★3."
```

```yaml
- id: GN-CM2-264-613
  page: 264
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    보기 ㄱ $y=\dfrac{x-1}{x-3}$ ㄴ $y=\dfrac{2x+2}{x+2}$ ㄷ $y=\dfrac{-4x-2}{x+1}$ 중
    평행이동으로 $y=\dfrac{2}{x}$ 의 그래프와 겹쳐지는 것 모두 고르기.
  category: "각 보기를 표준형으로 변형 → 분자 상수 k 를 2 와 비교(부호까지)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평행이동으로 겹쳐지는 유리함수 판별(표준형 k 비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 보기를 각각 1+2/(x-3), 2-2/(x+2), -4+2/(x+1) 로 고쳐 k 를 읽으면 ㄴ만 k=-2 라
    개형이 뒤집혀 겹치지 않는다. 부호까지 봐야 하는 것이 유일한 함정이다(T-부호).
    확인체크 출발 ★2 · 통찰 0 · M_total 6 → ★2 유지.
    [분류 이슈] 「평행이동으로 겹친다」를 「표준형 k 가 같다」로 옮기는 단계를 I-EQV d1 로 셀
    여지가 있음(그러면 통찰형). 264-e8 에서 이미 공식으로 제시된 도구라 절차형에 두었다.
  tier: star_2
  mechanism_primary: "세 보기를 k/(x-p)+q 로 변형 → k 값이 2 인 것만 선택(ㄴ은 k=-2 라 제외)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/264-613.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 함수 2/x 의 분자와 세 보기의 계수를 바꿀 수 있음. 제약: 정답이 아닌 보기는 k 의 절댓값이 같고 부호만 다르게(여기서는 -2) 두어야 부호 함정이 살아 있고, 보기 3개 중 정답이 2개인 구성을 유지하면 난도가 같다."
    creative: "(1) 겹쳐지지 않는 것을 고르게 뒤집기(★2 유지) (2) 보기에 ad=bc 인 상수함수 하나를 섞으면 유리함수가 아닌 경우를 걸러야 해 I-VF d2 → ★3 (3) 기준을 y=2/x 대신 y=(2x+1)/(x+1) 처럼 표준형이 아닌 식으로 주면 기준 쪽도 변형해야 해 Mₛ 상승 ★2~3."
```

```yaml
- id: GN-CM2-264-614
  page: 264
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $y=\dfrac{4x+3}{x+1}$ 을 $x$축으로 $a$, $y$축으로 $b$ 만큼 평행이동하면
    $y=\dfrac{3x-4}{x-1}$ 과 겹쳐질 때 $a+b$ 의 값.
  category: "두 식을 표준형으로 → 점근선의 차이가 이동량"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 유리함수 사이의 평행이동량 구하기(점근선 대응)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    4 - 1/(x+1) 과 3 - 1/(x-1) 로 고치면 k 가 같아 실제로 겹치고, 점근선 x=-1 → x=1 에서
    a, y=4 → y=3 에서 b 를 읽는다. 이동량을 미지수로 둔 만큼 Mₐ 가 2 다. 확인체크 출발 ★2 ·
    통찰 0 · M_total 7 → ★2 유지.
    [분류 이슈] 「겹쳐진다」를 「점근선이 대응한다」로 옮기는 단계를 I-EQV d1 로 셀 여지가
    있음. 264-613 과 같은 판단이라 단원 수준에서 한 방향(절차형)으로 통일했다.
  tier: star_2
  mechanism_primary: "두 식을 k/(x-p)+q 로 변형 → 점근선 (-1, 4) → (1, 3) 의 차가 (a, b) → a+b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/264-614.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 식의 계수를 바꿀 수 있음. 제약: 두 식의 표준형 k 가 같아야 실제로 겹치므로(여기서는 둘 다 -1) 계수를 바꿀 때 나머지가 일치하도록 설계해야 하고, 그렇지 않으면 문제가 성립하지 않는다."
    creative: "(1) a, b 를 따로 묻기(★2 유지) (2) 겹쳐질 수 있는지 먼저 판정하게 하고(k 비교) 가능한 경우만 이동량을 구하게 하면 I-VF d2 → ★3 (3) 한쪽 식에 미지 계수를 남겨 두고 겹칠 조건을 묻게 하면 역추적이 생겨 I-BW d2 → ★3."
```

```yaml
- id: GN-CM2-265-e9
  page: 265
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $y=\dfrac{-2x+4}{x-1}$ 의 정의역이 $\{x \mid -1\le x<1$ 또는 $1<x\le 2\}$ 일 때 치역 구하기.
  category: "표준형 변형 → 점근선으로 갈린 두 구간에서 각각 치역 → 합집합"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "식을 -2 + 2/(x-1) 로 고쳐 그래프 개형으로 옮긴 뒤 제한 구간을 그림 위에서 읽음"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "정의역이 점근선 x=1 을 사이에 두고 갈라져 있어 두 구간을 독립적으로 처리하고 각 구간에서 한쪽이 무한대로 발산함을 따로 따져야 함"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "제한된 정의역에서 유리함수의 치역(점근선이 구간 안에 있는 경우)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    -2 + 2/(x-1) 은 각 가지에서 감소하므로 [-1, 1) 에서는 x=-1 의 -3 이 최대이고 x→1⁻ 에서
    -∞ 로, (1, 2] 에서는 x→1⁺ 에서 +∞ 로 x=2 의 0 이 최소가 된다. 양 끝값만 대입하고 끝내면
    틀리는 구조(T-범위·T-경계)이고, 정의역이 점근선으로 갈라진 두 구간이라는 점이 설계의 핵심이다.
    필수 예제 출발 ★2 · 통찰 2(RT d1 + MI d2) → +1 → ★3.
  tier: star_3
  mechanism_primary: "y = -2 + 2/(x-1) → 각 가지에서 감소 → [-1,1) 은 y≤-3, (1,2] 는 y≥0 → 합집합이 치역"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\{y \mid y\le -3$ 또는 $y\ge 0\}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/265-e9.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "함수의 계수 (-2, 4, -1) 과 정의역의 두 끝 (-1, 2) 를 바꿀 수 있음. 제약: 점근선 x=1 이 정의역 내부에 있어야 두 갈래 구조가 유지되고, 끝값 대입 결과가 정수로 떨어지도록 분자의 나머지를 끝값과 맞춰 둔다. k 의 부호를 바꾸면 각 가지의 증감이 뒤집혀 치역의 부등호 방향도 모두 바뀐다."
    creative: "(1) 정의역을 점근선 한쪽에만 두면 단조구간 최대최소로 내려가 265-616 골조 절차형 ★2 (2) 치역을 주고 정의역을 묻게 하면 265-615 의 역추적 I-BW d2 → ★3 (3) 정의역의 한 끝을 미지수 a 로 두고 치역 조건을 만족하는 a 를 묻게 하면 역추적 + 분기로 ★4 근접."
```

```yaml
- id: GN-CM2-265-615
  page: 265
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $y=\dfrac{2x+3}{x+2}$ 의 치역이 $\left\{y \mid y\le \dfrac{3}{2}$ 또는 $y\ge 3\right\}$ 일 때
    정의역 구하기.
  category: "표준형 변형 → 치역의 두 끝값에 대응하는 x 역산 → 점근선 기준 두 구간"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "결과(치역)가 먼저 주어지고 정의역을 역추적 — 치역의 끝값 3/2, 3 이 어느 가지의 어느 끝에서 나오는지 먼저 판단해야 식을 세울 수 있음"
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "치역이 점근선 y=2 를 사이에 두고 두 조각이라 정의역도 x=-2 좌우 두 구간으로 나뉜다는 대응을 따로 따짐"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "치역이 주어진 유리함수의 정의역 역추적"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    2 - 1/(x+2) 로 고치면 y<2 인 조각이 점근선 왼쪽, y>2 인 조각이 오른쪽에서 나온다.
    y=3/2 ↔ x=0, y=3 ↔ x=-3 을 역산한 뒤 어느 쪽이 닫힌 끝인지 개형으로 확인해야 한다.
    265-e9 의 역방향이라 확인체크 출발 ★2 · 통찰 2(BW d2 + MI d1) → +1 → ★3.
  tier: star_3
  mechanism_primary: "y = 2 - 1/(x+2) → 치역 끝값 3/2, 3 을 x 로 역산(0, -3) → 점근선 x=-2 좌우로 배분 → 정의역"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\{x \mid -3\le x<-2$ 또는 $-2<x\le 0\}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/265-615.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "함수의 계수 (2, 3, 2) 와 치역의 두 끝값을 바꿀 수 있음. 제약: 두 끝값이 수평점근선 y=2 의 양쪽에 하나씩 있어야 정의역이 두 구간으로 나오고, 역산한 x 가 정수·간단한 유리수가 되도록 끝값을 고른다. 두 끝값이 같은 쪽에 있으면 정의역이 한 구간이 되어 문제 구조가 달라진다."
    creative: "(1) 치역을 한 조각만 주면 정의역도 한 구간이 되어 절차형 ★2 (2) 정의역·치역을 모두 주고 함수의 미지 계수를 묻게 하면 267-623 골조와 결합해 I-CON d2 → ★3~4 (3) 치역의 부등호를 < 로 바꿔 열린 끝으로 두면 경계 처리(T-경계)가 강조돼 ★3 유지."
```

```yaml
- id: GN-CM2-265-616
  page: 265
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $0\le x\le 2$ 에서 $y=\dfrac{2x-3}{x+1}$ 의 최댓값과 최솟값.
  category: "표준형 변형 → 구간 안에 점근선 없음 확인 → 단조증가 → 양 끝값"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "닫힌구간에서 유리함수의 최대·최소(단조구간)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2 - 5/(x+1) 로 고치면 k=-5<0 이라 각 가지에서 증가하고, 점근선 x=-1 이 구간 [0, 2] 밖이라
    끝값 두 개만 대입하면 된다. 통찰 0 · M_total 5 로 -1 후보이지만 표준형 변형과 점근선 위치
    확인이 모두 필요하므로 확인체크 출발 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "y = 2 - 5/(x+1) → 점근선 x=-1 이 구간 밖 → [0,2] 에서 증가 → 최소 f(0), 최대 f(2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '최댓값: $\dfrac{1}{3}$, 최솟값: $-3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/265-616.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 (2, -3, 1) 과 구간 [0, 2] 를 바꿀 수 있음. 제약: 점근선 x=-1 이 구간 안에 들어오면 최대·최소가 존재하지 않게 되므로 구간을 점근선 한쪽에 두어야 하고, 끝값이 간단한 분수가 되도록 분모의 값을 작은 정수로 맞춘다."
    creative: "(1) 구간을 점근선을 포함하게 옮기면 최대·최소가 없음을 답하게 되어 I-VF d2 → ★3 (2) 최댓값·최솟값을 주고 구간이나 계수를 역추적하면 265-617 골조 ★3 (3) 최댓값과 최솟값의 합·곱을 묻게 하면 계산 한 줄이 늘 뿐 ★2 유지."
```

```yaml
- id: GN-CM2-265-617
  page: 265
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $0\le x\le a$ 에서 $y=\dfrac{3x+k}{x+2}$ 의 최댓값이 $5$, 최솟값이 $4$ 일 때
    ($k>6$, $a$ 는 양수) $a+k$ 의 값.
  category: "표준형 변형 → k>6 으로 감소 판정 → 최대=f(0), 최소=f(a) 연립"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "조건 k>6 을 「표준형 분자 k-6 이 양수 → 구간에서 감소함수」라는 증감 정보로 옮김"
    - step: 2
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "최댓값·최솟값이 어느 끝에서 나오는지 먼저 결정한 뒤 두 미정계수 a, k 를 역추적"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "닫힌구간 최대·최소가 주어진 유리함수의 미정계수 역추적"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    3 + (k-6)/(x+2) 로 고치면 k>6 조건이 곧 감소함수라는 뜻이 되어 최대는 f(0)=k/2, 최소는
    f(a) 로 자리가 정해진다. 그 뒤 k/2=5 로 k 를 얻고 f(a)=4 로 a 를 얻는 2단 역추적이다.
    증감 방향을 조건에서 읽어내지 못하면 두 끝값 대응을 뒤집어 틀린다(T-부호).
    확인체크 출발 ★2 · 통찰 2 · M_total 9 → +1 → ★3.
  tier: star_3
  mechanism_primary: "y = 3 + (k-6)/(x+2) → k>6 이라 감소 → 최대 f(0)=k/2=5 로 k → 최소 f(a)=4 로 a → a+k"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/265-617.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최댓값 5·최솟값 4 와 분모의 2, 분자의 3 을 바꿀 수 있음. 제약: 최댓값·최솟값이 모두 수평점근선 y=3 보다 커야 k>6 조건과 모순이 없고, f(a)=최솟값 방정식이 양수 a 를 주도록 값을 고른다. k>6 조건을 빼면 증감이 두 갈래가 되어 문제가 달라진다."
    creative: "(1) k<6 조건으로 바꾸면 증감이 뒤집혀 최대·최소 자리가 교환(★3 유지) (2) k 의 부등식 조건을 지우면 k>6 과 k<6 두 경우를 모두 따져야 해 I-MI d2 추가 → ★4 근접 (3) 구간을 [a, 0] 처럼 음수 쪽으로 두면 점근선 x=-2 가 구간에 들어올 가능성을 따져야 해 I-VF d2 → ★4."
```

```yaml
- id: GN-CM2-266-e10
  page: 266
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ $y=\dfrac{ax-2}{x+1}$ 의 그래프가 점 $(b,\,5)$ 에 대하여 대칭일 때 $a$, $b$
    ⑵ $y=\dfrac{2x+1}{x-1}$ 의 그래프가 두 직선 $y=x+a$, $y=-x+b$ 에 대하여 대칭일 때 $a$, $b$.
  category: "점근선 교점 = 대칭의 중심 → 중심 좌표 비교 / 대칭축이 중심을 지남"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리함수 그래프의 대칭성(대칭의 중심 = 점근선의 교점 · 대칭축은 중심을 지남)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴은 점근선 x=-1, y=a 의 교점 (-1, a) 가 대칭의 중심이므로 (b, 5) 와 좌표별로 맞추면 끝이고,
    ⑵는 점근선 교점 (1, 2) 를 두 직선에 각각 대입하면 된다. 대칭의 중심·대칭축 성질은 이 절에서
    공식으로 제시되는 표준 도구라 통찰로 세지 않았다. 필수 예제 출발 ★2 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "점근선 교점이 대칭의 중심 → ⑴ (-1, a)=(b, 5) ⑵ 중심 (1, 2) 를 y=x+a, y=-x+b 에 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $a=5$, $b=-1$ ⑵ $a=1$, $b=3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/266-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴의 분자 -2 와 대칭 중심의 y좌표 5, ⑵의 계수 (2, 1, -1) 을 바꿀 수 있음. 제약: 대칭축의 기울기는 반드시 ±1 이어야 하고(중심을 지나는 두 대각선), 분자의 나머지가 0 이 되지 않도록 ad-bc≠0 을 유지한다."
    creative: "(1) 대칭축 두 직선을 주고 중심을 역산하면 266-620 골조 I-BW d1 → ★2 (2) 대칭의 중심이 원점이 되도록 계수를 정하게 하면 조건 두 개를 동시에 써야 해 I-CON d1 → ★3 (3) 대칭축과 그래프의 교점을 추가로 묻게 하면 연립이 붙어 Mₖ 상승 ★3."
```

```yaml
- id: GN-CM2-266-618
  page: 266
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $y=\dfrac{5x+6}{2x+3}$ 의 그래프가 점 $(a,\,b)$ 에 대하여 대칭일 때 $a+b$ 의 값.
  category: "분모의 1차 계수가 2 인 식의 점근선 → 교점이 대칭의 중심 → 좌표 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리함수 그래프의 대칭의 중심(점근선의 교점)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분모의 x 계수가 1 이 아니라 점근선 x=-3/2, y=5/2 가 모두 분수로 나오는 것이 이 문항의
    유일한 부담이다(Mₖ). 중심이 점근선 교점이라는 성질은 266-e10 과 같다. 확인체크 출발 ★2 ·
    통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "점근선 x=-3/2, y=5/2 → 대칭의 중심 (-3/2, 5/2) = (a, b) → a+b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/266-618.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 (5, 6, 2, 3) 을 바꿀 수 있음. 제약: 수평점근선은 분자·분모의 1차 계수 비, 수직점근선은 분모의 근이므로 두 값이 지나치게 복잡한 분수가 되지 않게 고르고, ad-bc≠0 을 유지한다(5·3-6·2=3≠0)."
    creative: "(1) ab 나 a-b 를 묻기(★2 유지) (2) 분모의 1차 계수를 미지수로 두고 대칭 중심 조건을 주면 역추적이 생겨 I-BW d2 → ★3 (3) 대칭의 중심이 직선 y=x 위에 있을 조건을 묻게 하면 조건 통합 I-CON d2 → ★3."
```

```yaml
- id: GN-CM2-266-619
  page: 266
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $y=\dfrac{3x+4}{x+2}$ 의 그래프가 직선 $y=-x+k$ 에 대하여 대칭일 때 상수 $k$ 의 값.
  category: "점근선 교점 = 대칭의 중심 → 대칭축이 중심을 지남 → 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유리함수 그래프의 대칭축(중심을 지나는 기울기 ±1 인 직선)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    점근선 x=-2, y=3 에서 중심 (-2, 3) 을 읽고 y=-x+k 에 대입하면 k 가 바로 나온다.
    266-e10 ⑵의 한 갈래를 그대로 쓴 한 줄 문항이다. 통찰 0 · M_total 5 로 -1 후보이지만
    점근선 파악과 대칭 성질 두 도구를 쓰므로 확인체크 출발 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "점근선 교점 (-2, 3) 이 대칭의 중심 → 3 = -(-2)+k → k"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/266-619.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 (3, 4, 2) 와 대칭축의 기울기 부호를 바꿀 수 있음. 제약: 기울기가 +1 이면 y=x+k, -1 이면 y=-x+k 로 두 대칭축이 각각 하나씩만 존재하고, 분자의 나머지(여기서는 4-3·2=-2)가 0 이 아니어야 한다."
    creative: "(1) 기울기가 1 인 대칭축으로 바꾸기(★2 유지) (2) 두 대칭축을 모두 묻게 하면 266-e10 ⑵ 골조 ★2 (3) 함수에 미지 계수를 남기고 대칭축을 주면 266-620 의 역추적 I-BW d1 → ★2~3."
```

```yaml
- id: GN-CM2-266-620
  page: 266
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $y=\dfrac{bx+3}{x+a}$ 의 그래프가 두 직선 $y=x+6$, $y=-x-2$ 에 대하여 대칭일 때 $ab$ 의 값.
  category: "두 대칭축의 교점 = 대칭의 중심 → 점근선 좌표로 a, b 역추적"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "대칭축 두 개가 먼저 주어지고 그 교점이 대칭의 중심이자 점근선의 교점이라는 역방향 경로로 미정계수를 결정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "대칭축 두 개가 주어진 유리함수의 미정계수 역추적"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x+6 = -x-2 를 풀어 교점 (-4, 2) 를 얻고, 이것이 점근선 (-a, b) 의 교점이므로 a=4, b=2 다.
    266-e10 ⑵가 중심에서 직선으로 갔다면 이 문항은 직선에서 중심으로 되돌아온다.
    확인체크 출발 ★2 · 통찰 1(BW d1) · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "두 대칭축의 교점 (-4, 2) = 대칭의 중심 = 점근선 교점 (-a, b) → a=4, b=2 → ab"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/266-620.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 직선의 절편 6, -2 와 분자의 3 을 바꿀 수 있음. 제약: 두 직선의 기울기는 1 과 -1 로 고정해야 유리함수의 대칭축이 되고, 교점 좌표가 정수로 떨어지도록 두 절편의 차를 짝수로 둔다. 또 b·a-3≠0 이어야 진짜 유리함수다."
    creative: "(1) a+b 나 a-b 를 묻기(★2 유지) (2) 대칭축을 하나만 주고 그래프가 지나는 점을 추가하면 조건 통합 I-CON d2 → ★3 (3) 기울기가 ±1 이 아닌 직선을 섞어 대칭축이 될 수 없음을 판정하게 하면 I-VF d2 → ★3."
```

```yaml
- id: GN-CM2-267-e11
  page: 267
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $y=\dfrac{ax+b}{x+c}$ 의 그래프가 주어진 그림과 같을 때 상수 $a$, $b$, $c$ 의 값.
  category: "그림에서 점근선 읽기 → a, c 결정 → 지나는 점 대입 → b"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프(기하 표현)의 점근선과 지나는 점을 식의 계수(대수 표현)로 옮김 — 그림을 읽지 않으면 식을 세울 단서가 없음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프가 주어진 유리함수의 식 구하기(점근선 + 지나는 점)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y=(ax+b)/(x+c) 의 점근선은 x=-c, y=a 이므로 그림의 수직·수평 점근선에서 c 와 a 가 바로
    정해지고, 남은 b 는 그래프가 지나는 격자점을 대입해 얻는다. 그림→식 전환 한 번이 통찰의
    전부다. 필수 예제 출발 ★2 · 통찰 1(RT d1) · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "그림의 점근선 → a(수평)·c(수직) 결정 → 그래프가 지나는 점을 대입 → b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a=-2$, $b=-1$, $c=1$'
  answer_source: "본문 풀이"
  figure: "crop:fig-267-e11.png"
  latex: latex-bank/gn-cm2/items/267-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림의 점근선 위치와 지나는 점을 바꿀 수 있음. 제약: 그림을 다시 그려야 하므로 점근선은 정수 좌표, 지나는 점은 격자점으로 두고, k = b-ac 의 부호가 그림의 개형(어느 사분면 쪽으로 휘는지)과 일치해야 한다. 그림 라벨은 고정."
    creative: "(1) 식을 주고 그래프를 고르게 하는 역방향(★2 유지) (2) 그림에서 점근선 하나를 지우고 지나는 점 두 개를 주면 연립이 생겨 I-CON d2 → ★3 (3) a+b+c 같은 묶음 값을 묻게 하면 267-621 골조 ★2."
```

```yaml
- id: GN-CM2-267-621
  page: 267
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $y=\dfrac{k}{x+a}+b$ 의 그래프가 주어진 그림과 같을 때 $a+b+k$ 의 값.
  category: "그림의 점근선 → a, b 결정 → 지나는 점 대입 → k → 합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그림의 점근선과 격자점을 표준형 k/(x+a)+b 의 계수로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프가 주어진 유리함수의 식 구하기(표준형 계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    식이 이미 표준형이라 점근선 x=-a, y=b 에서 a, b 가 곧바로 읽히고 지나는 점 하나로 k 가
    결정된다. 267-e11 과 골조가 같고 마지막에 세 값을 더하는 것만 다르다. 확인체크 출발 ★2 ·
    통찰 1(RT d1) · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "그림의 점근선 x=-a, y=b → a, b → 그래프가 지나는 점 대입 → k → a+b+k"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: "crop:fig-267-621.png"
  latex: latex-bank/gn-cm2/items/267-621.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점근선 좌표와 지나는 점을 바꿀 수 있음. 제약: 그림 재작도가 필요하므로 점근선은 정수, k 는 작은 정수로 두고 k≠0 을 유지한다. k 의 부호는 그림에서 곡선이 놓인 두 영역과 반드시 일치해야 한다."
    creative: "(1) a, b, k 를 따로 묻기(★2 유지) (2) 그림에 그래프와 직선을 함께 그려 교점을 묻게 하면 268 절 골조가 결합돼 ★3 (3) 그림에서 정의역·치역을 읽게 하면 263-e7 골조와 합쳐져 절차형 ★2."
```

```yaml
- id: GN-CM2-267-622
  page: 267
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $y=\dfrac{bx+c}{x+a}$ 의 그래프가 점 $(3,\,1)$ 을 지나고 점근선의 방정식이 $x=2$, $y=3$ 일 때
    상수 $a$, $b$, $c$ 의 값.
  category: "점근선 조건으로 a, b 결정 → 지나는 점 대입 → c"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "점근선과 지나는 점이 주어진 유리함수의 식 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    267-e11 과 골조가 같지만 그림 대신 점근선이 글로 주어져 표현 전환이 없다. x=-a=2 에서
    a=-2, y=b=3 을 읽고 (3, 1) 을 대입해 c 를 얻는 세 단계뿐이다. 확인체크 출발 ★2 ·
    통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "점근선 x=-a=2 → a=-2 · y=b=3 → b=3 → (3, 1) 대입 → c"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a=-2$, $b=3$, $c=-8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/267-622.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점근선 (2, 3) 과 지나는 점 (3, 1) 을 바꿀 수 있음. 제약: 지나는 점의 x좌표가 수직점근선과 달라야 하고, y좌표가 수평점근선과 같으면 해가 없으므로 피한다. c 가 정수로 떨어지도록 지나는 점을 점근선에서 1 만큼 떨어진 격자점으로 두면 편하다."
    creative: "(1) 점근선 대신 정의역·치역으로 같은 정보를 주면 267-623 골조 ★2 (2) 지나는 점을 두 개 주고 점근선을 하나만 주면 연립이 생겨 I-CON d2 → ★3 (3) 그림으로 바꾸면 267-e11 의 I-RT d1 이 추가돼 통찰형 ★2."
```

```yaml
- id: GN-CM2-267-623
  page: 267
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $y=\dfrac{bx-7}{x+a}$ 의 정의역이 $\{x \mid x\ne -2$인 실수$\}$, 치역이
    $\{y \mid y\ne 4$인 실수$\}$ 일 때 $ab$ 의 값.
  category: "정의역·치역의 제외값 = 점근선 → a, b → 곱"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정의역·치역이 주어진 유리함수의 미정계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정의역에서 빠진 값이 수직점근선, 치역에서 빠진 값이 수평점근선이라는 대응은 263-e7 에서
    이미 공식으로 나온 표준 도구라 통찰로 세지 않았다. -a=-2 에서 a=2, b=4 를 읽고 곱하면 끝.
    확인체크 출발 ★2 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "정의역 제외값 -2 = 수직점근선 → a=2 · 치역 제외값 4 = 수평점근선 → b=4 → ab"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/267-623.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "제외값 -2, 4 와 분자의 -7 을 바꿀 수 있음. 제약: b·a-(-7)=ab+7 이 0 이 아니어야 진짜 유리함수이므로(상수함수로 무너지지 않도록) 분자의 상수를 고를 때 확인한다."
    creative: "(1) a+b 를 묻기(★2 유지) (2) 정의역·치역 중 하나만 주고 지나는 점을 더하면 267-622 골조 ★2 (3) 치역을 제한된 구간으로 주면 265-615 의 역추적이 결합돼 I-BW d2 → ★3."
```

```yaml
- id: GN-CM2-268-e12
  page: 268
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    $y=\dfrac{2x-1}{x-1}$ 의 그래프와 직선 $y=kx+2$ 가 만나지 않도록 하는 실수 $k$ 의 값의 범위.
  category: "연립 → 이차방정식화 → k=0 분리 → 판별식 D<0 → 합집합"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「그래프와 직선이 만나지 않는다」를 「연립해 얻은 방정식이 실근을 갖지 않는다」로 옮기고, 분모를 없앨 때 x≠1 조건을 함께 관리"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "k=0 이면 이차방정식이 아니라 판별식을 쓸 수 없으므로 k=0 과 k≠0 을 독립적으로 따져야 하고, k=0 도 답에 포함되어 경계가 ≤ 로 닫힘"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "유리함수의 그래프와 직선이 만나지 않을 조건(판별식 + 이차항 계수 0 분리)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    2 + 1/(x-1) = kx+2 에서 1/(x-1)=kx, 즉 kx²-kx-1=0 으로 정리된다. k≠0 이면 D=k²+4k<0
    에서 -4<k<0 이고, k=0 이면 -1=0 이라 해가 없어 역시 만나지 않는다. 이 k=0 갈래를 빠뜨리면
    오른쪽 경계가 열린 채 끝난다(T-부호·T-경계). 발전 예제 출발 ★3 · 통찰 2 · M_total 9 →
    +1 후보이나 저노출 통찰(SC/VF/SYM/XU/RT/PD/BW)이 없어 ★3 유지.
  tier: star_3
  mechanism_primary: "1/(x-1)=kx → kx²-kx-1=0 → k≠0 은 D=k²+4k<0 → -4<k<0 · k=0 은 해 없음 → -4<k≤0"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-4<k\le 0$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/268-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "함수의 계수 (2, -1, -1) 과 직선의 y절편 2 를 바꿀 수 있음. 제약: 직선의 y절편을 수평점근선 y=2 와 같게 둔 것이 k=0 갈래를 만드는 설계 핵심이므로, 절편을 옮기면 k=0 이 답에서 빠져 경계가 열린다. 판별식의 근이 정수가 되도록 계수를 맞춘다."
    creative: "(1) 「만나도록」으로 뒤집으면 여집합이라 부등호와 경계가 모두 바뀜(★3 유지) (2) 직선을 y=kx 처럼 원점 고정으로 바꾸면 k=0 갈래가 사라져 I-MI 소멸 → ★2 (3) 「서로 다른 두 점에서 만난다」로 바꾸면 D>0 과 x≠1 대입 검증이 함께 필요해 I-VF d2 → ★4."
```

```yaml
- id: GN-CM2-268-624
  page: 268
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $y=-\dfrac{3}{x}+3$ 의 그래프와 직선 $y=3x+a$ 가 한 점에서 만나도록 하는 모든 실수 $a$ 의 합.
  category: "연립 → 이차방정식화 → 접할 조건 D=0 → 두 a 의 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "기울기가 3 으로 고정된 직선이므로 「한 점에서 만난다」가 곧 「접한다」이고, 이를 판별식 D=0 으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "유리함수의 그래프와 직선이 접할 조건(판별식 D=0)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    양변에 x 를 곱해 3x²+(a-3)x+3=0 으로 정리한 뒤 D=0 에서 (a-3)²=36, 즉 a=9 또는 a=-3 을
    얻고 합을 구한다. 두 근의 합을 묻는 구성이라 a 를 하나만 찾고 끝내는 실수를 막는다.
    발전 예제 268-e12 의 유제라 확인체크 출발 ★3 · 통찰 1 · M_total 7 → ★3 유지.
  tier: star_3
  mechanism_primary: "-3/x+3 = 3x+a → 3x²+(a-3)x+3=0 → D=0 → a=9, -3 → 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/268-624.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 -3, 평행이동 3, 직선의 기울기 3 을 바꿀 수 있음. 제약: 직선의 기울기가 고정돼야 「한 점에서 만난다 = 접한다」가 성립하고(기울기가 미지수면 268-625 구조), 판별식이 완전제곱이 되도록 계수를 맞춰야 a 가 정수로 나온다. 기울기의 부호가 곡선의 개형과 같은 방향이면 접점이 없을 수 있다."
    creative: "(1) 두 a 의 곱이나 큰 값을 묻기(★3 유지) (2) 기울기를 미지수로 옮기고 절편을 고정하면 268-625 의 m=0 분기가 생겨 I-MI d2 추가 → ★3~4 (3) 접점의 좌표까지 묻게 하면 근의 공식 대입이 붙어 Mₖ 상승 ★3."
```

```yaml
- id: GN-CM2-268-625
  page: 268
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $y=\dfrac{2}{x-1}+2$ 의 그래프와 직선 $mx-y-2m=0$ 이 만나도록 하는 실수 $m$ 의 값의 범위.
  category: "직선을 고정점 꼴로 → 연립 → 이차방정식화 → m=0 분리 → D≥0"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "직선을 y=m(x-2) 로 고쳐 점 (2, 0) 을 지나는 기울기 m 의 직선임을 밝히고, 「만난다」를 연립방정식이 실근을 가질 조건으로 옮김"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "m=0 이면 이차방정식이 아니므로 판별식을 쓸 수 없어 따로 확인해야 하고, 그 결과가 최종 범위에 포함되는지 다시 맞춰야 함"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "유리함수의 그래프와 고정점을 지나는 직선이 만날 조건(판별식 D≥0)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    y=m(x-2) 로 고쳐 연립하면 mx²-(3m+2)x+2m=0 이고 D=m²+12m+4≥0 에서 m≤-6-4√2 또는
    m≥-6+4√2 가 나온다. m=0 갈래는 직선 y=0 이 곡선과 x=0 에서 만나므로 범위에 포함된다.
    근이 무리수라 계산 부담이 이 조각에서 가장 크다(Mₖ 3). 확인체크 출발 ★3 · 통찰 2 ·
    M_total 10 → +1 후보이나 계산 마찰이 커 질 저하 신호이고 저노출 통찰이 없어 ★3 유지.
    [분류 이슈] M_total 10 · 통찰 2 로 산식상 ★4 후보이나 상승분이 대부분 무리수 계산에서 온다.
  tier: star_3
  mechanism_primary: "직선을 y=m(x-2) 로 → 연립해 mx²-(3m+2)x+2m=0 → m≠0 은 D=m²+12m+4≥0 · m=0 은 만남 → 합집합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$m\le -6-4\sqrt{2}$ 또는 $m\ge -6+4\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/268-625.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분자 2, 평행이동 (1, 2), 직선의 고정점 (2, 0) 을 바꿀 수 있음. 제약: 판별식의 근이 정수로 떨어지게 하려면 고정점을 곡선의 대칭 중심 (1, 2) 에 대해 적당히 배치해야 하고, 고정점이 곡선 위에 놓이면 모든 m 에서 만나 문제가 무너진다. 고정점이 대칭 중심과 일치하면 답이 「모든 실수 m」이 된다."
    creative: "(1) 「만나지 않도록」으로 뒤집으면 여집합 구간(★3 유지) (2) 고정점을 대칭 중심 (1, 2) 로 옮기면 모든 직선이 곡선과 만나 답이 자명해지므로 그 사실을 묻는 판정 문항으로 바꾸면 I-SYM d2 → ★4 (3) 「서로 다른 두 점에서 만난다」로 바꾸면 D>0 과 x≠1 검증이 함께 필요해 I-VF d2 → ★4."
```

```yaml
- id: GN-CM2-269-e13
  page: 269
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    $f(x)=\dfrac{x+1}{x-1}$ 에 대하여 $f^1=f$, $f^{n+1}=f\circ f^n$ 일 때 $f^{101}(10)$ 의 값.
  category: "f² 계산 → 항등함수 발견(주기 2) → 101 의 나머지로 환원 → f(10)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f² 를 직접 계산해 f²(x)=x 임을 스스로 발견하고, 거기서 합성의 주기가 2 라는 규칙을 세움 — 문제에 주기가 명시돼 있지 않음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "유리함수의 합성과 주기(f의 거듭 합성이 항등함수가 되는 경우)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f²(x) 를 통분해 계산하면 2x/2 = x 로 항등함수가 되고, 따라서 f^101 = f^(2·50+1) = f 이므로
    f(10)=11/9 다. 주기를 발견하지 못하면 101 번 합성을 직접 할 수밖에 없어 진입 자체가 막히는
    구조다. 필수 예제 출발 ★2 · I-PD d2 → +1 → ★3.
    [분류 이슈] 통찰 1개·depth 2 라 v3.8 산식의 +1 요건(통찰 2개 이상 또는 depth 3)에는 못
    미치나, 주기 발견이 유일한 진입로라 ★3 으로 두었다.
  tier: star_3
  mechanism_primary: "f²(x)=x 계산 → 주기 2 → 101 은 홀수라 f^101=f → f(10)=11/9"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{11}{9}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/269-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합성 횟수 101 과 대입값 10 을 바꿀 수 있음. 제약: 주기가 2 이므로 횟수의 홀짝만 답을 가르고, 대입값은 x≠1 이어야 하며 f 의 값도 정의역 안에 있어야 한다. 함수 자체를 바꾸면 주기가 달라지므로 f²·f³ 를 다시 확인해야 한다(예: (x+1)/(x-1) 대신 1-1/x 는 주기 3)."
    creative: "(1) f^100(10) 처럼 짝수 횟수로 바꾸면 답이 대입값 그대로가 되어 주기의 의미가 더 드러남(★3 유지) (2) f^n(x) 자체를 함수식으로 묻게 하면 269-626 골조로 Mₐ 상승 ★3 (3) f^n(a)=a 가 되는 최소 n 을 묻거나 주기가 다른 두 함수의 합성을 섞으면 규칙 탐색이 길어져 ★4."
```

```yaml
- id: GN-CM2-269-626
  page: 269
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $f(x)=1-\dfrac{1}{x}$ ($x\ne 1$) 에 대하여 $f^{n+1}=f\circ f^n$ 으로 정의할 때
    $f^{200}(x)$ 를 구하기.
  category: "f², f³ 계산 → 주기 3 발견 → 200 을 3 으로 나눈 나머지 2 → f²"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f², f³ 를 차례로 계산해 f³(x)=x 라는 주기 3 규칙을 스스로 발견하고 200 을 나머지로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "유리함수의 합성과 주기(주기 3 · 함수식으로 답하기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f²(x) = -1/(x-1), f³(x) = x 로 주기가 3 이고 200 = 3·66+2 이므로 f^200 = f² 다.
    269-e13 과 골조는 같지만 주기가 3 이라 f³ 까지 계산해야 하고 답이 수가 아니라 함수식이라
    추상도가 한 단계 높다(Mₐ 3). 확인체크 출발 ★2 · I-PD d2 · M_total 9 → +1 → ★3.
  tier: star_3
  mechanism_primary: "f²(x)=-1/(x-1), f³(x)=x → 주기 3 → 200≡2 (mod 3) → f^200=f²"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$f^{200}(x)=-\dfrac{1}{x-1}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/269-626.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합성 횟수 200 을 바꿀 수 있음. 제약: 답은 나머지 0·1·2 에 따라 x, f(x), f²(x) 셋 중 하나로만 나오므로 횟수를 고를 때 어느 나머지를 겨냥할지 정한다. 함수를 바꾸면 주기가 3 이 아닐 수 있어 f², f³ 를 다시 확인해야 한다."
    creative: "(1) f^200(2) 처럼 값을 묻게 하면 269-e13 골조로 Mₐ 하락 ★3 (2) 세 함수 x, 1-1/x, -1/(x-1) 이 합성에 대해 닫혀 있음을 보이게 하면 구조 관찰이 들어가 I-SYM d2 → ★4 (3) f^n(x)=x 가 되는 자연수 n 을 모두 구하게 하면 주기의 배수 조건이 필요해 ★4."
```

```yaml
- id: GN-CM2-269-627
  page: 269
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    유리함수 $y=f(x)$ 의 그래프가 주어진 그림과 같고 $f^{n+1}=f\circ f^n$ 으로 정의할 때
    $f^{500}(1)$ 의 값.
  category: "그림에서 함숫값 읽기 → 반복 대입으로 2주기 순환 발견 → 500 의 홀짝"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "식이 주어지지 않아 그래프에서 f(1)=0, f(0)=1 을 직접 읽어야 함 — 기하 표현에서 함숫값이라는 대수 정보를 꺼냄"
    - step: 2
      type: I-PD
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "1 → 0 → 1 로 되돌아오는 2주기 순환을 스스로 발견해 500 번 합성을 홀짝 판정으로 환원"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "그래프로 주어진 유리함수의 합성값(순환 발견)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    그림의 점근선(x=-1, y=-1)과 두 절편에서 f(1)=0, f(0)=1 을 읽으면 1 → 0 → 1 이 반복되므로
    짝수 번 합성한 f^500(1) 은 1 이다. 식을 세워 f^n 을 구할 필요가 없고 값의 순환만 보면
    되지만, 그림 읽기가 선행 조건이다. 확인체크 출발 ★2 · 통찰 2(RT d1 + PD d2) → +1 → ★3.
  tier: star_3
  mechanism_primary: "그림에서 f(1)=0, f(0)=1 → 1 → 0 → 1 의 2주기 순환 → 500 은 짝수 → f^500(1)=1"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$1$'
  answer_source: "답지"
  figure: "crop:fig-269-627.png"
  latex: latex-bank/gn-cm2/items/269-627.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합성 횟수 500 과 출발값 1 을 바꿀 수 있음. 제약: 그림이 고정이므로 출발값은 그래프에서 함숫값을 정확히 읽을 수 있는 격자점이어야 하고, 순환에 들어가는 값(여기서는 0 과 1)이어야 홀짝 판정만으로 답이 나온다. 그림 라벨과 점근선은 고정."
    creative: "(1) 홀수 번 합성으로 바꾸면 답이 0 이 되어 순환의 의미가 드러남(★3 유지) (2) 출발값을 순환 밖의 점으로 두면 주기에 들어갈 때까지의 전이를 따져야 해 ★4 (3) 그림에서 식을 먼저 구하게 한 뒤 f^n 을 묻게 하면 267-e11 골조가 결합돼 Mₛ 상승 ★4."
```

## 표본 판정 요약 (24문)

- ★ 분포: ★1 0 · ★2 15 · ★3 9 · ★4 0 · ★5 0
- 통찰형 12 · 절차형 12 · premium 0
- 통찰 내역: I-RT 4 · I-PD 3 · I-MI 4 · I-EQV 4 · I-BW 3 (총 18개 · 통찰형 1문당 평균 1.5개 · depth 3 없음)
- M_total 분포: 5 → 2문 · 6 → 11문 · 7 → 6문 · 9 → 4문 · 10 → 1문
- 구역별: 「필수·발전 예제」 24문뿐 — 필수 예제 6(★2 4 · ★3 2) · 발전 예제 1(★3) · 확인체크 17(★2 11 · ★3 6). 개념원리 익히기 통번호·연습문제·특강 구역은 이 조각에 없음
- 쪽별 난이도 층: 263~264쪽(그래프·평행이동) 6문 전부 ★2 절차형 → 265쪽(정의역·치역·최대최소) 4문 중 3문 ★3 → 266~267쪽(대칭성·식 구하기) 8문 중 7문 ★2 → 268~269쪽(직선과의 위치 관계·합성) 6문 전부 ★3
- type_hint 상위: 「유리함수의 그래프(표준형·정의역·치역·점근선)」 2 · 「평행이동」 3 · 「그래프가 주어진 식 구하기」 2 · 「대칭의 중심·대칭축」 4 · 「그래프와 직선의 위치 관계」 3 · 「합성과 주기」 3
- 그림 3문(`crop:fig-267-e11.png` · `crop:fig-267-621.png` · `crop:fig-269-627.png`) · 보기(ㄱㄴㄷ) 1문(264-613) · 선택지 문항 0 · 소문항 문항 3(263-e7 ⑴⑵ · 263-611 ⑴~⑶ · 266-e10 ⑴⑵)
- 대상층: 중하위권 12 · 중위권 5 · 중상위권 7 (상위권 0 — 이 조각에 ★4 이상이 없음)
- 도구 대 통찰: 표준형 변형·점근선 읽기·대칭의 중심은 이 절에서 공식으로 제시되는 표준 도구라 절차형에 두었고, 통찰은 ⑴ 점근선이 정의역·치역 구간을 가르는 경우(I-MI) ⑵ 결과에서 미정계수로 되돌아가는 경우(I-BW) ⑶ 그림을 식·함숫값으로 옮기는 경우(I-RT) ⑷ 「만난다/만나지 않는다」의 동치 전환과 이차항 계수 0 분리(I-EQV·I-MI) ⑸ 합성의 주기 발견(I-PD) 다섯 갈래에서만 나왔다

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-264-613 | 「평행이동으로 겹친다」를 「표준형 k 가 같다」로 옮기는 단계를 I-EQV d1 로 셀 여지가 있음(그러면 통찰형). 264-e8 에서 이미 공식으로 제시된 도구라 절차형에 두었다 | ★2 (절차형/통찰형 경계) |
| GN-CM2-264-614 | 「겹쳐진다 → 점근선이 대응한다」도 같은 성격의 경계 판단. 이 계열을 통찰로 세기 시작하면 264쪽 확인체크 3문이 모두 통찰형이 되므로 단원 수준에서 한 방향으로 정해 두어야 함 | ★2 (절차형/통찰형 경계) |
| GN-CM2-268-625 | M_total 10 · 통찰 2 로 산식상 ★4 후보이나 상승분이 대부분 무리수 판별식 계산(Mₖ 3)에서 오고 저노출 통찰(SC/VF/SYM/XU/RT/PD/BW)이 없음. v3.8 §2.11 의 계산 마찰 YELLOW 신호에 해당해 ★3 유지 | ★3 / ★4 |
| GN-CM2-269-e13 | 통찰 1개·depth 2 라 v3.8 의 +1 요건(통찰 2개 이상 또는 depth 3)에 못 미치지만 주기 발견 없이는 진입 자체가 불가능해 ★3 으로 올림. 「진입 저항」을 depth 3 으로 볼지 단원 수준 합의 필요 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: ⑴ 「표준형 변형 + 그래프·정의역·치역·점근선」(base ★2 · 263쪽)과 ⑵ 「평행이동 비교」(base ★2 · 264쪽)는 도구는 같지만 묻는 방향이 달라(개형 서술 vs 계수 대응) 별개로 두는 편이 낫다. ⑶ 「제한된 정의역에서의 치역·최대최소」(base ★3)는 점근선이 구간 안에 있는지가 실점 지점이므로 반드시 독립 유형이고, 그 안에서 「점근선이 구간 밖 = 단조 최대최소」(base ★2 · 265-616)와 「점근선이 구간 안 = 두 갈래 치역」(base ★3 · 265-e9)을 하위로 갈라야 한다. ⑷ 「그래프와 직선의 위치 관계」(base ★3)는 *이차항 계수가 0 이 되는 갈래*의 유무로 base ★ 가 ★2↔★3 으로 갈리므로 그 조건을 유형 파라미터로 노출해야 한다. ⑸ 「합성과 주기」(base ★3)는 주기 2 와 주기 3 이 난도가 다르고(f³ 까지 계산), 답을 값으로 묻는지 함수식으로 묻는지로 Mₐ 가 한 단계 달라진다.
- **통합해도 될 유형**: 266-e10·266-618·266-619·266-620 은 모두 「대칭의 중심 = 점근선의 교점」 한 성질에서 나오므로 **base ★2 단일 유형 + (중심→축 / 축→중심) 방향 파라미터**로 통합할 수 있다. 267-e11·267-621·267-622·267-623 도 「점근선 + 한 점으로 식 결정」 한 유형이고, 단서가 그림인지 글(점근선·정의역·치역)인지만 다르므로 *단서 형태*를 파라미터로 두면 된다(그림일 때만 I-RT d1 이 붙는다).
- **교차 참조**: 268 절의 판별식·접할 조건은 「이차방정식과 이차함수」 단원에서 오고, 269 절의 합성 표기 f^n 과 항등함수는 바로 앞 「합성함수·역함수」 단원에서 온다. 265 절의 구간별 최대최소는 「이차함수의 최대·최소(제한된 범위)」와 골조가 같으므로 카탈로그에서 그 유형의 *유리함수 변형*으로 걸어 두면 재사용이 쉽다.
- **이 조각의 base ★ 상한**: 24문에서 ★4 이상이 없고, 상승 여지가 있는 268-625 도 계산 마찰로 올라간 것이라 ★4 슬롯 재료로 쓰기에 적절하지 않다. ★4~5 슬롯은 이 조각의 유형만으로 채울 수 없고, 265-617 계열(부등식 조건을 지워 증감 두 갈래를 모두 따지게 하기 · I-MI 추가), 268-e12 계열(「서로 다른 두 점에서 만난다」로 바꿔 x≠1 사후 검증 강제 · I-VF), 269-626 계열(합성에 대해 닫힌 세 함수의 구조 관찰 · I-SYM)을 창의 변형해 만들어야 한다. 이 조각에서 저노출 통찰(SC·VF·SYM·XU)이 0 개라는 점이 ★4~5 부재의 직접 원인이다.
