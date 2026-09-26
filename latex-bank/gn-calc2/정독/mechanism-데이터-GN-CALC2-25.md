---
name: mechanism-데이터-GN-CALC2-25
description: 개념원리 미적분Ⅱ 25 속도와 가속도(1/1 · 필수·발전 예제 8문 + 연습문제 STEP 1 6문 + STEP 2 4문 + 실력 UP 2문) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅱ · 전사본 latex-bank/gn-calc2
  section: 25 속도와 가속도
  unit_code: GN-CALC2-25
  part: "1/1"
  extract_range: "201~204쪽 · 201-e29~204-422"
  total_problems: 20
  unit_total: 20
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc2/items/<id>.tex
  image_source: latex-bank/gn-calc2/figures/ (crops.json)
---

# 개념원리 미적분Ⅱ · 25 속도와 가속도 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 미적분Ⅱ 201~204쪽, 단원 25 「속도와 가속도」 20문항 전수를 다룬다. 구역은 네 개다 — 「필수·발전 예제」 8문(필수 예제 2 + 확인체크 6 · ★1~2 출발), 「연습문제 STEP 1」 6문(★2 출발), 「연습문제 STEP 2」 4문(★3 출발), 「연습문제 실력 UP」 2문(★4 출발). 개념원리 고등의 벤더 난이도 신호는 구역·태그로만 들어오므로(난이도 문자 등급 없음) 출발점을 구역에서 잡고 M_total·통찰로 ±1 조정했다. 태그 「수능 기출」(204-420) · 「평가원 기출」(204-421)은 통찰이 실제로 붙어 있어 +1 쪽으로 작동했다.

이 범위의 연습문제 구역은 앞 단원(방정식·부등식에의 활용)과 합본이다. 203-411~203-414 와 204-417·204-418 여섯 문항은 속도·가속도가 아니라 **방정식의 실근의 개수·부등식이 성립할 조건** 유형이라 type_hint 가 단원 제목과 어긋난다. 라벨을 억지로 맞추지 않고 실제 골조대로 type_hint 를 적은 뒤 파일 끝 표에 [분류 이슈] 로 모았다. 나머지 14문항의 골조는 네 갈래다. (가) **정방향 계산형** — 위치를 1·2계 미분해 속도·속력·가속도를 대입으로 읽는다(201-e29, 201-405, 202-e30, 202-408). (나) **미정상수 역산형** — 특정 시각의 속도·속력 값에서 상수를 먼저 구하고 다시 미분한다(201-406, 202-409, 203-415, 204-419). (다) **속력의 최대·최소형** — 속력의 제곱을 삼각항등식이나 산술·기하평균으로 정리해 근호 미분을 피한다(202-410, 204-419, 204-420). (라) **사건 시각 특정형** — 「운동 방향을 바꾼다」·「원점을 지난다」 같은 말을 v=0 또는 좌표 연립으로 옮긴 뒤 그 시각의 값을 구한다(201-407, 203-416). 마지막 204-422 만 도형을 매개변수로 옮기는 관련 변화율형이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 설정 변경)를 채웠다. 그림 문항은 204-422 한 문항이다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC2-201-e29
  page: 201
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    수직선 위를 움직이는 점 P 의 위치가 $x=e^t+t^2$ 일 때 $t=2$ 에서의 속도와 가속도.
  category: '위치를 한 번 미분해 속도, 두 번 미분해 가속도 → $t=2$ 대입'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선 운동에서의 속도와 가속도(위치의 1·2계 도함수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    속도·가속도의 정의를 그대로 적용하는 단원의 첫 예제다. 지수함수와 이차식의 미분 둘 다 한 줄이고 대입도 한 번뿐이다.
    통찰 0 · M_total 4 로 v3.8 의 −1 조건(통찰 0 · M_total ≤ 5)에 해당해 필수 예제 출발점 ★2 에서 한 단 내린 ★1.
    체감상으로도 정의 확인 수준이라 라벨을 올리지 않았다(벤더 신호와 1단 차이라 분류 이슈로는 올리지 않음).
  tier: star_1
  mechanism_primary: "x(t) 미분 → v=e^t+2t → 다시 미분 → a=e^t+2 → t=2 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '속도: $e^2+4$, 가속도: $e^2+2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/201-e29.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "위치식의 항(e^t → e^{2t}, 2^t · t^2 → t^3)과 대입 시각(t=2 → t=1, t=0, t=ln 2)을 바꿀 수 있음. 제약: (가) 답에 지수값이 남으므로 대입 시각을 작은 정수나 ln(정수)로 둘 것 (나) e^{kt} 로 바꾸면 가속도에 k^2 이 붙어 학생이 연쇄법칙을 두 번 쓰게 됨(난도 유지하려면 k=1) (다) 음수 시각은 물리적 의미가 없으므로 t≥0."
    creative: "(1) 속도와 가속도 대신 「속도가 5 가 되는 시각」을 묻게 하면 방정식 e^t+2t=5 가 초월방정식이 되므로 계수를 조정해야 함(★2) (2) 가속도가 최소가 되는 시각을 묻기(★2) (3) 위치를 두 항의 합이 아니라 곱 t^2 e^t 로 두면 곱미분 두 번 → M_k 상승 ★2 (4) 같은 위치식으로 「t=0 부터 t=2 까지 움직인 거리」를 물으면 적분 단원과 결합 I-XU ★3."
```

```yaml
- id: GN-CALC2-201-405
  page: 201
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    수직선 위를 움직이는 점 P 의 위치가 $x=\sin t-\cos t$ 일 때 $t=\pi$ 에서의 속도와 가속도.
  category: '삼각함수 위치식의 1·2계 미분 → $t=\pi$ 대입'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "직선 운동에서의 속도와 가속도(삼각함수 위치식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    e29 와 같은 골조에 함수만 삼각함수로 바꾼 확인체크다. sin·cos 의 도함수와 t=π 에서의 값만 알면 끝난다.
    가속도가 위치의 부호 반전(x''=-x)이라는 성질을 쓰면 더 빠르지만 쓰지 않아도 풀리므로 통찰로 세지 않았다.
    통찰 0 · M_total 4 → 확인체크 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: "미분 → v=cos t+sin t → 다시 미분 → a=-sin t+cos t → t=π 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '속도: $-1$, 가속도: $-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/201-405.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "위치식의 조합(sin t-cos t → 2sin t+cos t, sin 2t-cos 2t)과 대입 시각(π → π/2, π/3, 2π)을 바꿀 수 있음. 제약: (가) 대입 시각은 특수각으로 둘 것 (나) 각을 2t 로 바꾸면 속도에 2, 가속도에 4 가 곱해지므로 답의 크기가 커짐 (다) 계수를 붙여도 a=-x 관계는 유지됨(sin·cos 만 쓸 때)."
    creative: "(1) 「속도가 0 이 되는 시각」을 구간 안에서 모두 찾게 하면 삼각방정식 + 구간 제한 ★2 (2) 위치를 sin t-cos t=√2 sin(t-π/4) 로 합성해 진폭·주기를 함께 묻기(I-RT ★2) (3) 속력의 최댓값을 묻기(★2) (4) 가속도와 위치가 항상 반대 부호임을 보이라고 하면 증명형 ★3."
```

```yaml
- id: GN-CALC2-201-406
  page: 201
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    위치가 $x=\sin t+kt^2$ 인 점 P 의 $t=\dfrac{\pi}{2}$ 에서의 속도가 $2\pi$ 일 때 $t=\pi$ 에서의 가속도($k$ 는 상수).
  category: '미분해 $v$ → 주어진 시각의 속도 조건으로 $k$ 결정 → 다시 미분해 $a$ → 대입'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "속도 조건으로 미정상수를 결정한 뒤 가속도 구하기(직선 운동)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    상수 k 가 들어가 한 단계가 늘었다. v=cos t+2kt 에 t=π/2 를 넣어 kπ=2π 로 k=2 를 먼저 얻고, a=-sin t+2k 에 t=π 를 넣는다.
    「미정계수를 조건식 하나로 결정」은 스키마상 표준 절차라 I-BW 로 인정하지 않았다(통찰 0).
    매개변수가 있어 M_a=2, M_total 6 → 확인체크 출발점 ★1 에서 한 단 올린 ★2.
  tier: star_2
  mechanism_primary: "v=cos t+2kt → v(π/2)=2π 로 k=2 → a=-sin t+2k → t=π 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/201-406.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건 시각(π/2)·조건 속도값(2π)·묻는 시각(π)을 바꿀 수 있음. 제약: (가) 조건 시각에서 cos t 가 0 이나 ±1 이 되게 두면 k 가 유리수로 떨어짐 (나) 조건 속도값에 π 가 들어가야 2kt 항과 약분돼 k 가 깔끔해짐 (다) 묻는 시각에서 sin t 가 0 이면 답이 상수항만 남아 정수."
    creative: "(1) 속도 조건 대신 가속도 조건을 주고 속도를 묻기(골조 대칭 ★2) (2) 「k 의 값에 관계없이 가속도가 일정한 시각」을 묻기 → 조건 통합 I-CON ★3 (3) 위치에 e^t 를 더해 세 항으로 만들면 계산량만 늘어 ★2 유지 (4) 속도가 최소가 되도록 하는 k 를 묻기 → 이차·삼각 혼합 최솟값 ★3."
```

```yaml
- id: GN-CALC2-201-407
  page: 201
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $t>0$ 에서 위치가 $x=\ln t^4-t^2$ 인 점 P 가 운동 방향을 바꿀 때의 위치.
  category: '$\ln t^4=4\ln t$ 로 정리 → 미분 → 운동 방향 전환을 $v=0$ 으로 옮겨 시각 찾기 → 그 시각의 위치'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「운동 방향을 바꾼다」를 「v(t)=0 이고 그 앞뒤에서 v 의 부호가 바뀐다」로 옮기는 조건 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "운동 방향이 바뀌는 시각과 그때의 위치(v=0)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    묻는 것이 시각이 아니라 위치라서 v=0 으로 t=√2 를 구한 뒤 다시 x 에 대입하는 두 겹 구조다.
    「운동 방향을 바꾼다」는 말은 그대로 계산에 쓸 수 없고 v=0 + 부호 변화로 번역해야 하므로 I-EQV 1개(d1).
    로그의 성질로 ln t^4=4 ln t 를 먼저 정리하지 않으면 미분이 번거롭고, t>0 과 부호 변화 확인이 함정이라 M_t=2.
    통찰 1 · M_total 6 → 확인체크 출발점 ★1 에서 한 단 올린 ★2.
  tier: star_2
  mechanism_primary: "x=4 ln t-t^2 → v=4/t-2t → v=0 에서 t=√2 → x(√2)=2 ln 2-2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2\ln 2-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/201-407.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "로그의 계수(ln t^4 → ln t^2, 3 ln t)와 t^2 의 계수를 바꿀 수 있음. 제약: (가) v=a/t-2bt=0 의 해가 t=√(a/2b) 이므로 a/2b 를 완전제곱수로 두면 시각이 유리수 (나) t>0 이 반드시 붙어야 음의 해가 배제됨 (다) 위치값에 ln 이 남으므로 해가 2 의 거듭제곱일 때 답이 가장 깔끔함."
    creative: "(1) 위치 대신 「운동 방향을 바꾸는 시각」만 묻기(한 겹 줄어 ★2 하단) (2) 로그를 지수로 바꿔 x=e^t-4t 로 두면 v=0 이 t=ln 4 라 같은 골조 ★2 (3) 「t>0 에서 운동 방향을 두 번 바꾸도록 하는 상수 k 의 범위」로 바꾸면 I-BW+I-MI ★4 (4) 속도의 부호로 움직인 거리를 묻게 하면 적분 결합 I-XU ★4."
```

```yaml
- id: GN-CALC2-202-e30
  page: 202
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 평면 위의 점 P 의 위치가 $x=t-\cos 2t$, $y=t-\sin 2t$ 일 때 $t=\dfrac{\pi}{2}$ 에서의 ⑴ 속도와 속력 ⑵ 가속도와 가속도의 크기.
  category: '$x$, $y$ 를 각각 $t$ 로 두 번 미분 → 속도·가속도 벡터 성분 → 크기는 성분의 제곱합의 제곱근'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면 운동에서의 속도·속력과 가속도·가속도의 크기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평면 운동의 정의를 처음 적용하는 예제로, 성분별 미분 네 번과 크기 계산 두 번이 전부다.
    2t 의 연쇄법칙에서 부호와 계수 2 가 두 번 곱해지는 것이 유일한 마찰이고 전략 선택은 없다.
    통찰 0 이지만 M_total 6 이라 −1 조건(M_total ≤ 5)에 걸리지 않아 필수 예제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "x'=1+2sin 2t, y'=1-2cos 2t → t=π/2 대입 → 속도 (1,3) · 속력 √10 → 한 번 더 미분해 가속도와 그 크기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 속도: $(1,\,3)$, 속력: $\sqrt{10}$ ⑵ 가속도: $(-4,\,0)$, 가속도의 크기: $4$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc2/items/202-e30.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각의 계수(2t → 3t)·대입 시각(π/2 → π/4, π)·일차항의 계수를 바꿀 수 있음. 제약: (가) 대입 시각에서 2t 가 특수각이 되어야 성분이 정수로 떨어짐 (나) 속력이 무리수로 나오는 것은 정상이지만 제곱합이 완전제곱이 되게 하려면 성분을 3·4 꼴로 맞출 것 (다) 각의 계수를 올리면 가속도 성분이 제곱배로 커짐."
    creative: "(1) 속도 벡터가 x 축과 이루는 각을 묻기(I-RT ★3) (2) 속력이 최대·최소가 되는 시각을 묻기(202-410 골조 ★3) (3) 두 점 P, Q 의 위치를 주고 속도가 같아지는 시각을 묻기 → 조건 통합 ★3 (4) 소문항을 ⑴ 만 남기면 ★1 하단."
```

```yaml
- id: GN-CALC2-202-408
  page: 202
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    평면 위의 점 P 의 위치가 $x=e^t\cos t$, $y=e^t\sin t$ 일 때 $t=2\pi$ 에서의 속도와 가속도.
  category: '곱의 미분법으로 성분별 1·2계 도함수 → $t=2\pi$ 대입'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "평면 운동에서의 속도와 가속도(곱의 미분법)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    성분마다 곱미분을 두 번씩 써야 해 계산 단계가 e30 보다 한 겹 많다. 2계 도함수에서 지수·삼각의 항이 서로 상쇄돼 -2e^t sin t, 2e^t cos t 로 단순해지는 것이 유일한 포인트다.
    상쇄를 못 봐도 그대로 전개해 대입하면 풀리므로 통찰로 세지 않았다(통찰 0).
    M_total 6 → 확인체크 출발점 ★1 에서 계산 겹수를 반영해 ★2.
  tier: star_2
  mechanism_primary: "곱미분 → v=(e^t(cos t-sin t), e^t(sin t+cos t)) → 한 번 더 → a=(-2e^t sin t, 2e^t cos t) → t=2π 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '속도: $(e^{2\pi},\,e^{2\pi})$, 가속도: $(0,\,2e^{2\pi})$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/202-408.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수의 계수(e^t → e^{2t}, e^{-t})와 대입 시각(2π → π, π/2)을 바꿀 수 있음. 제약: (가) 대입 시각을 2π 의 정수배나 특수각으로 두어야 성분이 e 의 거듭제곱만 남음 (나) e^{kt} 로 바꾸면 2계 도함수에 k^2-1, 2k 가 붙어 상쇄가 사라짐 (다) 나선의 반지름이 e^t 이므로 t 가 커지면 답의 크기가 급증."
    creative: "(1) 속력 |v|=√2 e^t 임을 보이고 속력이 e^t 의 몇 배인지 묻기(I-EQV ★3) (2) 속도 벡터와 위치 벡터가 이루는 각이 항상 π/4 임을 묻기 → I-SYM ★4 (3) 가속도의 크기가 속력의 몇 배인지 묻기(★3) (4) 시각을 미지수로 두고 속력이 2e^2 이 되는 시각을 묻기 ★2."
```

```yaml
- id: GN-CALC2-202-409
  page: 202
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    평면 위의 점 P 의 위치가 $x=t^2+kt$, $y=2kt^2+4t$ 이고 $t=1$ 에서의 속력이 $4\sqrt{10}$ 일 때 양수 $k$ 의 값.
  category: '성분별 미분 → $t=1$ 대입 → 속력의 제곱을 $k$ 의 이차방정식으로 → 양수 근 선택'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "속력 조건으로 미정상수를 결정하기(평면 운동)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x'=2t+k, y'=4kt+4 에 t=1 을 넣어 (2+k)^2+(4k+4)^2=160 을 세우고 k 에 대한 이차방정식을 푼 뒤 양수 조건으로 근을 하나 고른다.
    근을 고르는 단계는 「양수 k」라는 명시 조건의 직접 적용이라 I-VF 가 아니라 T-부호 함정으로 처리했다(통찰 0).
    매개변수 k 와 이차방정식 정리로 M_total 7 → 확인체크 출발점 ★1 에서 ★2. 계산 마찰은 v3.8 에서 ★ 상승 신호가 아니므로 더 올리지 않았다.
  tier: star_2
  mechanism_primary: "x'=2t+k, y'=4kt+4 → 속력^2=(2+k)^2+(4k+4)^2=160 → k 의 이차방정식 → 양수 근 k=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/202-409.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건 시각(t=1)·속력값(4√10)·y 의 계수를 바꿀 수 있음. 제약: (가) 속력값은 제곱했을 때 정수가 되게 √ 안이 정수여야 함 (나) k 의 이차방정식이 정수해를 갖도록 판별식을 완전제곱으로 맞출 것 (다) 「양수 k」를 빼면 답이 둘이 되므로 부호 조건은 유지해야 함."
    creative: "(1) 속력 대신 가속도의 크기 조건으로 바꾸면 k 의 일차식이 되어 ★2 하단 (2) 「속력이 최소가 되게 하는 k」로 바꾸면 이차함수의 최솟값 + 역산 ★3 (3) 속도 벡터가 x 축에 평행할 조건으로 바꾸면 y'=0 한 줄 ★2 (4) k 의 값에 관계없이 지나는 점을 묻기 → 항등식 I-CON ★4."
```

```yaml
- id: GN-CALC2-202-410
  page: 202
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    $0\le t\le 2\pi$ 에서 위치가 $x=t-\sin t$, $y=1-\cos t$ 인 점 P 의 속력이 최대일 때의 위치와 가속도.
  category: '성분별 미분 → 속력의 제곱을 삼각항등식으로 $2-2\cos t$ 로 정리 → 최대가 되는 $t$ → 그 시각의 위치와 가속도'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "속력의 최대를 근호 미분이 아니라 속력의 제곱 (1-cos t)^2+sin^2 t = 2-2cos t 의 최대, 즉 cos t 의 최소로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "평면 운동에서 속력이 최대·최소인 시각과 그때의 위치·가속도"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    사이클로이드 위의 운동이다. 속력을 그대로 미분하면 근호가 남지만 제곱을 피타고라스 항등식으로 정리하면 2-2cos t 한 줄이 되고 cos t=-1, 즉 t=π 가 바로 나온다.
    이 정리 착안을 I-EQV 1개(d1)로 세었다. 구간이 [0,2π] 로 닫혀 있어 끝점 검토가 필요하지만 최대가 내부에서 잡힌다.
    통찰 1 · M_total 6 → 확인체크 출발점 ★1 에서 한 단 올린 ★2.
  tier: star_2
  mechanism_primary: "x'=1-cos t, y'=sin t → 속력^2=2-2cos t → cos t=-1 에서 t=π → 위치 (π,2) · 가속도 (0,-1)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '위치: $(\pi,\,2)$, 가속도: $(0,\,-1)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/202-410.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "사이클로이드의 반지름 계수(t-sin t → 2t-2sin t)와 구간(0≤t≤2π → 0≤t≤4π)을 바꿀 수 있음. 제약: (가) x=a(t-sin t), y=a(1-cos t) 꼴을 유지해야 속력^2=2a^2(1-cos t) 로 정리됨 (나) 구간을 넓히면 최대가 여러 시각에서 나와 답이 복수가 되므로 「가장 작은 t」 같은 단서를 붙일 것 (다) 속력의 최솟값은 0 이라 최소를 물으면 가속도가 (0,1) 로 바뀜."
    creative: "(1) 속력이 최소일 때를 묻기(끝점·첨점 처리 때문에 I-VF 가 붙어 ★3) (2) 속력이 1 이 되는 시각을 모두 구하게 하면 삼각방정식 다중해 I-MI ★3 (3) 반지름 a 를 미지수로 두고 최대 속력이 4 가 되게 하는 a 를 묻기 → 역산 ★3 (4) 「속력의 최댓값」만 묻고 위치·가속도를 빼면 ★2 하단."
```

### 연습문제 STEP 1

```yaml
- id: GN-CALC2-203-411
  page: 203
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    방정식 $e^x+e^{-x}=3$ 의 서로 다른 실근의 개수.
  category: '$f(x)=e^x+e^{-x}$ 의 증감·최솟값 조사 → 직선 $y=3$ 과의 교점 개수(또는 $t=e^x>0$ 치환 후 이차방정식)'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "지수방정식의 서로 다른 실근의 개수(최솟값·치환)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x)=e^x-e^{-x} 로 x=0 에서 최솟값 2 를 얻고 양끝에서 발산하므로 y=3 과 두 번 만난다. t=e^x 치환으로 t^2-3t+1=0 의 두 근이 모두 양수임을 확인해도 된다.
    두 경로 모두 교과서 표준 절차라 전략 분기(I-SC)로 보지 않았고 통찰 0.
    통찰 0 · M_total 5 라 −1 후보이지만, 치환 경로에서 t>0 검토가 빠지면 답이 달라질 수 있어 STEP 1 출발점 ★2 를 유지했다.
    [분류 이슈] 단원 제목(속도와 가속도)과 달리 앞 단원의 방정식 활용 유형 — 연습문제 구역이 합본이다.
  tier: star_2
  mechanism_primary: "f=e^x+e^{-x} 의 최솟값 2 → y=3 이 최솟값보다 크므로 교점 2개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/203-411.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변의 상수(3 → 2, 1, 5)를 바꿀 수 있음. 제약: (가) 우변이 최솟값 2 와 같으면 실근 1개, 작으면 0개가 되므로 답을 바꾸려면 여기를 움직일 것 (나) e^x-e^{-x}=3 으로 바꾸면 단조증가라 항상 1개 (다) 계수를 붙여 2e^x+e^{-x}=k 로 두면 최솟값이 2√2 로 바뀜."
    creative: "(1) 우변을 k 로 두고 실근의 개수가 2 가 되게 하는 k 의 범위를 묻기(I-BW ★3) (2) 실근의 개수를 k 에 대한 함수 g(k) 로 정의해 불연속점을 묻기(204-417 골조 ★4) (3) e^x+e^{-x}=3 의 두 근의 합을 묻기 → 근과 계수의 관계 I-XU ★3 (4) 부등식 e^x+e^{-x}≥2 의 증명으로 바꾸면 ★2."
```

```yaml
- id: GN-CALC2-203-412
  page: 203
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    방정식 $\dfrac{\ln x}{x}=kx$ 가 서로 다른 두 실근을 갖도록 하는 실수 $k$ 의 값의 범위.
  category: '$x>0$ 에서 상수 $k$ 를 분리 → $f(x)=\dfrac{\ln x}{x^2}$ 의 극댓값·점근 거동 → 직선 $y=k$ 와 두 번 만날 조건'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "양변을 x^2 으로 나눠 k=ln x / x^2 으로 상수를 분리, 「실근의 개수」를 「곡선과 수평선의 교점 개수」로 바꿈"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "극댓값 1/(2e) 뿐 아니라 x→0+ 에서 -∞, x→∞ 에서 0 으로 위에서 접근하는 점근 거동까지 읽어야 두 번 만날 범위의 아래끝 0 이 나옴"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "상수 분리로 실근의 개수 조건 구하기(로그함수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f(x)=ln x/x^2 의 도함수는 (1-2ln x)/x^3 이고 x=√e 에서 극대 1/(2e) 다. 여기까지는 표준이지만, 범위의 아래끝이 0 인 이유는 x→∞ 에서 f 가 0 으로 위에서 수렴해 y=k(k≤0)가 교점을 한 개만 남기기 때문이다.
    이 점근 거동 판단이 빠지면 k<1/(2e) 로 답이 어긋나므로 I-RT d2 를 부여했다(상수 분리 I-EQV d1 포함 통찰 2).
    통찰 2 · M_total 8 → STEP 1 출발점 ★2 에서 한 단 올린 ★3.
    [분류 이슈] 단원 제목과 달리 앞 단원의 방정식 활용 유형이다.
  mechanism_primary: "k=ln x/x^2 로 분리 → f'=(1-2 ln x)/x^3 → 극댓값 1/(2e) · x→∞ 에서 0+ → 두 교점 조건 0<k<1/(2e)"
  tier: star_3
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$0<k<\dfrac{1}{2e}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/203-412.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분리 후 함수의 차수(ln x/x^2 → ln x/x, ln x/x^3)와 요구하는 실근의 개수(2 → 1, 0)를 바꿀 수 있음. 제약: (가) 극점의 x 좌표가 e^{1/n} 꼴이라 극댓값이 1/(ne) 로 떨어지게 차수를 정수로 둘 것 (나) x>0 은 로그의 진수 조건이라 없앨 수 없음 (다) 실근 1개 조건으로 바꾸면 k≤0 또는 k=1/(2e) 로 답이 두 갈래가 됨."
    creative: "(1) 실근의 개수를 1 로 바꾸면 접하는 경우와 한쪽만 만나는 경우를 모두 따져야 해 I-MI 가 붙어 ★4 (2) k 를 고정하고 두 근의 곱을 묻기 → I-SYM ★4 (3) ln x/x=kx 를 ln x=kx^2 으로 보고 곡선과 포물선의 접점 조건으로 풀게 유도하면 같은 답·다른 골조(I-SC ★4) (4) 부등식 ln x ≤ kx^2 이 항상 성립할 조건으로 바꾸면 ★3."
```

```yaml
- id: GN-CALC2-203-413
  page: 203
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $x>0$ 일 때 부등식 $e^{-x}>1-x$ 가 성립함을 보이기(증명).
  category: '$f(x)=e^{-x}-1+x$ 로 이항 → $f''$ 의 부호로 증가 확인 → 경계값 $f(0)=0$ 과 비교'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "도함수를 이용한 부등식의 증명(모든 항을 한쪽으로 이항)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「이항 → 도함수의 부호 → 경계에서의 값」이라는 부등식 증명의 표준 3단 골조를 그대로 따르는 문항이다. f'(x)=1-e^{-x} 가 x>0 에서 양수임은 한 줄이다.
    x=0 이 구간에 포함되지 않는데 f(0)=0 을 근거로 쓰는 경계 처리(연속성)가 유일한 함정이라 M_t=2.
    통찰 0 · M_total 6 → STEP 1 출발점 ★2 유지.
    [분류 이슈] 단원 제목과 달리 앞 단원의 부등식 활용 유형이다.
  tier: star_2
  mechanism_primary: "f=e^{-x}-1+x 로 놓기 → f'=1-e^{-x}>0 (x>0) → f 는 증가 → f(x)>f(0)=0"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '풀이 참조 ($f(x)=e^{-x}-1+x$로 놓으면 $x>0$에서 $f''(x)=1-e^{-x}>0$이고 $f(0)=0$이므로 $f(x)>0$)'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/203-413.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "부등식의 꼴(e^{-x}>1-x → e^x>1+x, ln(1+x)<x)과 구간(x>0 → x>-1)을 바꿀 수 있음. 제약: (가) 경계점에서 양변이 같아지는 점(여기서는 x=0)이 구간의 끝이어야 f(경계)=0 논법이 성립 (나) 도함수의 부호가 구간 전체에서 일정해야 한 번의 증감 판단으로 끝남 (다) 2차 근사(e^x>1+x+x^2/2)로 올리면 f' 가 다시 부등식이라 증명이 두 겹이 됨."
    creative: "(1) e^x>1+x+x^2/2 로 올리면 도함수에 같은 논법을 한 번 더 써야 해 재귀 구조 ★3 (2) 「x>0 에서 e^{-x}>1-kx 가 성립할 k 의 범위」로 바꾸면 미정상수 역산 I-BW ★3 (3) 두 그래프의 위치 관계로 바꿔 교점의 개수를 묻기(I-RT ★3) (4) 접선 y=1-x 가 곡선 y=e^{-x} 의 x=0 에서의 접선임을 이용해 볼록성으로 증명하게 하면 I-SC ★3."
```

```yaml
- id: GN-CALC2-203-414
  page: 203
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $x>0$ 일 때 부등식 $x\ln x\ge x+a$ 가 성립하도록 하는 실수 $a$ 의 값의 범위.
  category: '$a\le x\ln x-x$ 로 상수 분리 → 우변의 최솟값 → $a$ 는 그 최솟값 이하'
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「모든 x>0 에서 성립하도록 하는 a」를 「g(x)=x ln x-x 의 최솟값 ≥ a」로 역추적하는 조건 해석"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "모든 x에서 부등식이 성립할 조건(상수 분리·최솟값)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a 를 분리하면 g(x)=x ln x-x 의 최솟값 문제가 된다. g'=ln x 이므로 x=1 에서 최솟값 -1 이고 등호가 실제로 잡히므로 a≤-1 이다.
    「항상 성립」을 최솟값 조건으로 옮기는 해석을 I-BW 1개(d1)로 세었다(스키마의 「~이 성립할 조건이 핵심」 판별에 해당).
    등호 포함 여부와 x>0 의 진수 조건이 함정이라 M_t=2. 통찰 1 · M_total 7 → STEP 1 출발점 ★2 유지(+1 은 통찰 2개 이상 또는 depth 3 에서만).
    [분류 이슈] 단원 제목과 달리 앞 단원의 부등식 활용 유형이다.
  tier: star_2
  mechanism_primary: "a≤x ln x-x 로 분리 → g'=ln x=0 에서 x=1 → 최솟값 -1 → a≤-1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$a\le -1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/203-414.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌변·우변의 계수(x ln x ≥ x+a → x ln x ≥ 2x+a, 2x ln x ≥ x+a)를 바꿀 수 있음. 제약: (가) g'=ln x+1-k=0 의 해가 e^{k-1} 이므로 최솟값이 -e^{k-1} 로 지수값이 남음 — 답을 정수로 두려면 k=1 유지 (나) 부등호를 강부등식으로 바꾸면 등호가 빠져 a<-1 이 됨 (다) x>0 은 진수 조건이라 고정."
    creative: "(1) 「어떤 x>0 에서 성립」으로 바꾸면 최댓값 조건이 되고 g 가 위로 유계가 아니라 모든 a 가 답이 되는 역설을 다루게 됨(I-MI ★3) (2) x ln x≥x+a 를 만족하는 a 의 최댓값을 묻기(같은 골조 ★2) (3) 좌변을 x^2 ln x 로 올리면 극점이 e^{-1/2} 라 최솟값에 e 가 남아 ★3 (4) 두 곡선 y=x ln x, y=x+a 의 접선 조건으로 바꾸면 접점 연립 I-RT ★3."
```

```yaml
- id: GN-CALC2-203-415
  page: 203
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    $t>0$ 에서 위치가 $x=\ln t^2+e^t-kt^2$ 인 점 P 의 $t=1$ 에서의 속도가 $e$ 일 때 $t=2$ 에서의 가속도($k$ 는 상수).
  category: '$\ln t^2=2\ln t$ 로 정리 → 미분해 $v$ → $v(1)=e$ 로 $k$ 결정 → 다시 미분해 $a(2)$'
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "속도 조건으로 미정상수를 결정한 뒤 가속도 구하기(직선 운동)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    201-406 과 같은 「조건으로 k 를 먼저 결정하고 다시 미분」 골조인데 항이 로그·지수·이차식 셋으로 늘었다.
    v=2/t+e^t-2kt 에 t=1 을 넣으면 2+e-2k=e 에서 k=1 이고, a=-2/t^2+e^t-2k 에 t=2 를 넣으면 된다.
    미정계수 결정은 표준 절차라 통찰 0. M_total 7 → STEP 1 출발점 ★2 유지(계산 겹수는 v3.8 에서 ★ 상승 신호가 아님).
  tier: star_2
  mechanism_primary: "x=2 ln t+e^t-kt^2 → v=2/t+e^t-2kt → v(1)=e 로 k=1 → a=-2/t^2+e^t-2k → t=2 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$e^2-\dfrac{5}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/203-415.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "로그항의 지수(ln t^2 → ln t^3)·조건 시각·조건 속도값·묻는 시각을 바꿀 수 있음. 제약: (가) 조건 시각을 1 로 두면 e^t 항이 e 로 남아 조건 속도값에 e 를 넣어 상쇄시킬 수 있음 — 다른 시각으로 옮기면 k 에 e 가 섞임 (나) 묻는 시각에서 -2/t^2 이 유리수로 떨어지게 정수로 둘 것 (다) t>0 은 진수 조건."
    creative: "(1) 속도가 최소가 되는 시각을 묻기(v'=0 이 초월방정식이 되지 않게 계수 조정 필요 ★3) (2) 「운동 방향을 바꾸는 시각이 존재할 k 의 범위」로 바꾸면 I-BW+I-MI ★4 (3) 가속도가 0 이 되는 시각을 묻기 ★3 (4) k 를 없애고 소문항 두 개(속도·가속도)로 나누면 ★1 하단."
```

```yaml
- id: GN-CALC2-203-416
  page: 203
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제 STEP 1"
  summary: |
    평면 위의 점 P 의 위치가 $x=\cos 3t$, $y=1-\sin 3t$ 일 때 P 가 두 번째로 원점을 지나는 순간의 가속도.
  category: '원점 통과를 $x=0$ 이고 $y=0$ 의 연립으로 → 주기로 해를 나열해 두 번째 시각 → 그 시각의 2계 도함수'
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「원점을 지난다」를 cos 3t=0 과 sin 3t=1 을 동시에 만족하는 t 로 옮김(두 식 중 하나만 쓰면 해가 과다해짐)"
    - step: 2
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "해가 t=π/6 부터 주기 2π/3 으로 반복됨을 보고 「두 번째」 시각 5π/6 을 특정"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "평면 운동에서 특정 위치를 지나는 시각과 그때의 가속도"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    자취는 중심 (0,1), 반지름 1 인 원이라 원점을 주기적으로 지난다. x=0 만 풀면 3t=π/2+nπ 로 해가 두 배가 되고 y=0 까지 걸어야 3t=π/2+2nπ 로 좁혀진다.
    거기서 「두 번째」를 고르려면 해의 주기가 2π/3 임을 보아야 하므로 I-EQV d1 + I-PD d1 통찰 2개.
    통찰 2 · M_total 7 → STEP 1 출발점 ★2 에서 한 단 올린 ★3. 가속도 계산 자체는 -9cos 3t, 9sin 3t 대입 한 줄이다.
  tier: star_3
  mechanism_primary: "cos 3t=0 이고 sin 3t=1 → t=π/6+2nπ/3 → 두 번째는 t=5π/6 → a=(-9cos 3t, 9sin 3t) 대입"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$(0,\,9)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/203-416.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각의 계수(3t → 2t, 4t)와 몇 번째 통과인지(두 번째 → 세 번째)를 바꿀 수 있음. 제약: (가) 각의 계수 k 에 따라 주기가 2π/k 로 바뀌고 가속도의 크기가 k^2 배가 됨 (나) y=1-sin kt 의 상수항 1 은 원의 중심을 올려 원점이 원 위에 놓이게 하는 값이라 바꾸면 원점을 아예 지나지 않음 (다) 통과 횟수를 올려도 가속도 값은 같으므로 답을 바꾸려면 다른 점을 지나는 시각을 물을 것."
    creative: "(1) 「원점을 지나는 시각」만 묻고 가속도를 빼면 ★2 (2) 자취가 원임을 이용해 속력이 일정(=3)함을 보이게 하면 I-RT ★3 (3) 점 (1,1) 을 지나는 시각으로 바꾸면 cos·sin 값이 특수각으로 갈려 I-MI 가 붙어 ★3 (4) 「0≤t≤2π 에서 원점을 지나는 횟수」를 묻기 ★3."
```

### 연습문제 STEP 2

```yaml
- id: GN-CALC2-204-417
  page: 204
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    방정식 $x^2-5x+2\ln x=t$ 의 서로 다른 실근의 개수를 $f(t)$ 라 할 때 $f(t)=3$ 을 만족시키는 실수 $t$ 의 값의 범위.
  category: '$g(x)=x^2-5x+2\ln x$ 의 증감 조사 → 극댓값·극솟값 → 수평선 $y=t$ 와 세 번 만날 $t$ 의 범위'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "실근의 개수 f(t) 를 곡선 y=g(x) 와 수평선 y=t 의 교점 개수로 옮기고, x→0+ 에서 -∞ · x→∞ 에서 ∞ 인 개형까지 확정"
    - step: 3
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "교점이 정확히 3 개가 되는 것은 t 가 극솟값과 극댓값 사이일 때뿐임을 역추적(등호에서는 2 개로 줄어 끝점 제외)"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "실근의 개수 함수 f(t)와 t의 범위(극값 사이)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    g'(x)=(2x-1)(x-2)/x 로 x=1/2 에서 극대, x=2 에서 극소다(x>0). 극댓값 -9/4-2ln 2 가 극솟값 -6+2ln 2 보다 크다는 대소 확인까지 해야 범위의 방향이 정해진다.
    실근의 개수를 함수로 정의한 추상화(I-RT d2)와 개수 3 에서 t 범위를 역추적하는 단계(I-BW d2)로 통찰 2 · depth 2.
    극값에서 교점이 2 개로 줄어 끝점이 빠지는 T-경계와 진수 조건 x>0 의 T-범위로 M_t=2, M_total 9 → STEP 2 출발점 ★3 에서 한 단 올린 ★4.
    [분류 이슈] 단원 제목과 달리 앞 단원의 방정식 활용 유형이다.
  tier: star_4
  mechanism_primary: "g'=(2x-1)(x-2)/x → x=1/2 극대 · x=2 극소 → y=t 와 3 교점 ⇔ 극솟값<t<극댓값"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-6+2\ln 2<t<-\dfrac{9}{4}-2\ln 2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/204-417.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차항·일차항의 계수와 로그항의 계수(2ln x → 4ln x)를 바꿀 수 있음. 제약: (가) g'=(2x^2-5x+2)/x 의 분자가 인수분해되도록 계수를 맞출 것(판별식이 완전제곱) (나) 두 극점이 모두 x>0 에 있어야 교점이 3 개까지 가능 (다) 극값에 ln 2 같은 값이 남으므로 극점의 x 좌표를 2 의 거듭제곱으로 두면 답이 깔끔함 (라) f(t)=2 나 f(t)=1 로 바꾸면 답이 경계값과 반직선으로 갈림."
    creative: "(1) f(t)=2 를 묻게 하면 끝점 두 개가 답이 되어 I-VF 가 강해짐(★4) (2) f 의 불연속점의 개수를 묻기(★4) (3) 로그항을 없애면 삼차·이차 개형이라 ★3 으로 내려감 (4) t 의 범위 대신 「모든 t 에 대해 f(t)≤2 가 되게 하는 로그항의 계수」를 묻기 → 이중 역산 ★5 후보."
```

```yaml
- id: GN-CALC2-204-418
  page: 204
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    $f(x)=x^2-x+2$, $g(x)=ke^{-x}$ 에 대하여 $x>0$ 에서 $f(x)>g(x)$ 가 성립하도록 하는 실수 $k$ 의 최댓값.
  category: '$k<(x^2-x+2)e^x$ 로 상수 분리 → 우변의 증가성 확인 → $x\to 0^+$ 의 하한 $2$ 와 비교'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "e^{-x}>0 임을 이용해 부등식을 k<(x^2-x+2)e^x 로 나누어 상수를 분리(부등호 방향이 유지됨을 확인)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "부등식이 성립할 조건에서 상수의 최댓값(상수 분리)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    h(x)=(x^2-x+2)e^x 의 도함수는 (x^2+x+1)e^x 로 항상 양수라 h 는 증가함수이고, x>0 에서의 하한은 x→0+ 의 h(0)=2 다.
    하한이 열린 끝점이라 최솟값이 없는데도 k=2 가 답이 되는 경계 처리(k=2 일 때 x>0 에서 부등호가 여전히 강부등식)가 이 문항의 핵심 함정이라 M_t=2 로 잡았다.
    통찰 1(I-EQV d1) · M_total 8 → STEP 2 출발점 ★3 유지. 경계 처리를 I-VF 로 올릴 수도 있으나 기각되는 분기가 없어 함정으로 처리했다.
    [분류 이슈] 단원 제목과 달리 앞 단원의 부등식 활용 유형이다.
  tier: star_3
  mechanism_primary: "k<(x^2-x+2)e^x 로 분리 → h'=(x^2+x+1)e^x>0 → h 는 증가 → 하한 h(0)=2 → k 의 최댓값 2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/204-418.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 계수(x^2-x+2)와 구간(x>0 → x>1, x≥0)을 바꿀 수 있음. 제약: (가) h'=(x^2+x+1)e^x 처럼 도함수의 이차식이 판별식 음수여야 증가함수가 되어 하한이 끝점에서 잡힘 (나) 구간을 닫힌 x≥0 으로 바꾸면 최솟값이 실제로 잡혀 k<2 로 답이 바뀜 — 등호 여부가 답을 가름 (다) f 의 상수항이 하한 값을 그대로 결정."
    creative: "(1) 구간을 x>1 로 옮기면 하한이 h(1)=2e 로 바뀌어 같은 골조 ★3 (2) f 를 아래로 볼록하지만 x>0 에서 감소 구간을 갖게 바꾸면 h' 의 부호가 갈려 극솟값을 찾아야 하므로 ★4 (3) k 의 최댓값 대신 「부등식이 성립하지 않는 k 의 최솟값」을 묻기(★3) (4) g 를 k sin x 로 바꾸면 204-421 계열의 감쇠 진동 비교가 되어 ★5 후보."
```

```yaml
- id: GN-CALC2-204-419
  page: 204
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제 STEP 2"
  summary: |
    평면 위의 점 P 의 위치가 $x=\cos t+at$, $y=\sin t-2$ 이고 속력의 최솟값이 $5$ 일 때 양수 $a$ 의 값.
  category: '성분별 미분 → 속력의 제곱을 삼각항등식으로 $a^2+1-2a\sin t$ 로 정리 → $\sin t=1$ 에서 최소 → $|a-1|=5$'
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "속력의 제곱 (a-sin t)^2+cos^2 t 를 피타고라스 항등식으로 a^2+1-2a sin t 로 정리해 sin t 의 일차식 최솟값 문제로 바꿈(근호 미분 회피)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "평면 운동에서 속력의 최솟값 조건으로 상수 결정하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x'=a-sin t, y'=cos t 이므로 속력의 제곱이 a^2+1-2a sin t 로 정리되고, a>0 이라 sin t=1 일 때 최소 (a-1)^2 이다.
    항등식 정리 착안을 I-EQV 1개(d1)로 세었다. 그 뒤 |a-1|=5 에서 a=6 과 a=-4 중 양수를 고르는 단계는 명시 조건의 적용이라 T-부호 함정으로 처리.
    a 가 미지수라 M_a=2, 부호·최솟값 위치(sin t 의 계수 부호가 a 에 달림) 함정으로 M_t=2, M_total 8 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "속력^2=a^2+1-2a sin t → a>0 이므로 sin t=1 에서 최소 (a-1)^2 → |a-1|=5 → a=6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/204-419.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "속력의 최솟값(5)과 y 의 상수항, 삼각항의 계수(cos t+at → 2cos t+at)를 바꿀 수 있음. 제약: (가) y=sin t-2 의 상수항은 미분하면 사라지므로 답에 영향이 없는 장식값 (나) 최솟값이 |a-1| 이므로 조건값을 정수로 두면 a 가 정수 (다) 삼각항의 계수를 c 로 바꾸면 속력^2=a^2+c^2-2ac sin t 가 되어 최솟값이 |a-c| (라) a>0 조건을 빼면 답이 두 개."
    creative: "(1) 속력의 최댓값 조건으로 바꾸면 sin t=-1 쪽이라 a+1=5 → a=4 로 골조 유지 ★3 (2) 「속력이 최소가 되는 시각의 가속도」를 함께 묻기 ★3 (3) a 를 고정하고 속력이 최솟값이 되는 모든 시각을 구간에서 찾게 하면 I-MI ★3 (4) x 성분의 at 를 at^2 으로 바꾸면 속력의 제곱이 t 의 함수가 되어 미분이 필요해져 ★4."
```

```yaml
- id: GN-CALC2-204-420
  page: 204
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: ["수능 기출"]
  category_type: "연습문제 STEP 2"
  summary: |
    $0<t<\dfrac{\pi}{2}$ 에서 위치가 $x=t+\sin t\cos t$, $y=\tan t$ 인 점 P 의 속력의 최솟값. 5지선다.
  category: '성분별 미분 → $x''=2\cos^2 t$, $y''=\sec^2 t$ → 속력의 제곱을 $\cos^4 t$ 의 식으로 보고 산술·기하평균'
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "sin t cos t 의 도함수 cos 2t 를 1+cos 2t=2cos^2 t 로 합쳐 x' 를 cos^2 t 한 덩어리로 만들고 y'=1/cos^2 t 와 역수 관계임을 드러냄"
    - step: 2
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "속력 함수를 그대로 미분하는 갈래 대신 u=cos^4 t 로 보고 4u+1/u 에 산술·기하평균을 쓰는 갈래를 선택(등호 성립 u=1/2 이 구간 안에 있음도 확인)"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "평면 운동에서 속력의 최솟값(역수 꼴 · 산술·기하평균)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    x'=1+cos 2t=2cos^2 t, y'=sec^2 t 이므로 속력의 제곱은 4cos^4 t+1/cos^4 t 가 되어 u 와 1/u 의 합 꼴이 된다. 여기서 산술·기하평균으로 최솟값 4 를 얻으면 속력의 최솟값은 2 다.
    속력 함수를 직접 미분해도 풀리지만 식이 훨씬 무거워지므로 갈래 선택을 I-SC d2 로 세었다(수능 기출 태그도 통찰 존재 쪽 신호).
    등호 성립 시각이 구간 0<t<π/2 안에 있는지 확인해야 하는 T-범위·T-경계로 M_t=2.
    통찰 2 · depth 2 포함 · M_total 8 → STEP 2 출발점 ★3 에서 한 단 올린 ★4(★4 슬롯 저노출 유형 I-SC 충족).
  tier: star_4
  mechanism_primary: "x'=2cos^2 t, y'=1/cos^2 t → 속력^2=4u+1/u (u=cos^4 t) → 산술·기하평균으로 최소 4 → 속력의 최솟값 2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/204-420.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 성분의 계수(t+sin t cos t → 2t+sin t cos t)와 y 성분(tan t → 2tan t)을 바꿀 수 있음. 제약: (가) 두 성분의 도함수가 u 와 1/u 의 꼴로 맞아떨어져야 산술·기하평균이 작동 — 계수를 바꾸면 최솟값이 2√(계수곱) 로 무리수가 될 수 있음 (나) 등호 성립값 u=1/2 이 cos^4 t 의 치역 (0,1) 안에 있어야 함 (다) 구간을 0<t<π/4 로 좁히면 등호가 빠져 최솟값이 끝점 극한이 됨(문항이 성립하지 않음)."
    creative: "(1) 선택지를 지우고 최솟값이 되는 t 를 묻게 하면 cos^4 t=1/2 에서 t=π/4 를 역산해야 해 ★4 (2) 산술·기하평균 대신 미분으로 풀도록 계수를 어긋나게 두면 I-SC 가 사라지고 계산만 무거워져 질 저하(★3, v3.8 YELLOW) (3) 속력이 최소인 순간의 가속도를 함께 묻기 ★4 (4) y=tan t 를 y=ln(1/cos t) 로 바꾸면 y'=tan t 라 속력^2 이 다른 꼴이 되어 ★4."
```

### 연습문제 실력 UP

```yaml
- id: GN-CALC2-204-421
  page: 204
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["평가원 기출"]
  category_type: "연습문제 실력 UP"
  summary: |
    $f(x)=e^x$, $g(x)=k\sin x$ 에 대하여 방정식 $f(x)=g(x)$ 의 서로 다른 양의 실근의 개수가 $3$ 일 때 양수 $k$ 의 값. 5지선다.
  category: '$e^{-x}\sin x=\dfrac{1}{k}$ 로 상수 분리 → 감쇠 진동의 극댓값 수열 → 봉우리별 교점 수를 합이 $3$ 이 되게 맞추기(두 번째 봉우리에 접함)'
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "e^x=k sin x 를 e^{-x} sin x=1/k 로 옮겨 「곡선과 수평선의 교점 개수」 문제로 전환(k 가 곱해진 채로는 개수 판정이 불가능)"
    - step: 2
      type: I-PD
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "h(x)=e^{-x} sin x 의 극댓값이 x=π/4+2nπ 에서 나오고 e^{-2π} 배씩 줄어드는 감쇠 패턴을 읽음"
    - step: 3
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "양의 봉우리마다 교점이 2·1·0 개로 갈리므로 합이 3 이 되는 배치는 「첫 봉우리 2 + 두 번째 봉우리 접함 1」뿐임을 따짐"
  insight_count: 3
  depth_score: 1.67
  type_id: null
  type_hint: "지수함수와 삼각함수의 방정식에서 실근의 개수 조건(감쇠 진동)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    h'(x)=e^{-x}(cos x-sin x)=0 에서 tan x=1 이므로 극점은 x=π/4+nπ 이고 양의 극댓값은 x=π/4, 9π/4, 17π/4, … 에서 e^{-2π} 배씩 감소한다.
    k>0 이면 수평선 1/k 는 양수라 음의 봉우리와는 만나지 않고, 첫 봉우리에서 2 개를 얻은 뒤 두 번째 봉우리에 접할 때 정확히 3 개가 된다 → 1/k=h(9π/4).
    통찰 3(I-RT d2 · I-PD d1 · I-MI d2) · M_total 9 → 실력 UP 출발점 ★4 유지. ★5 는 저노출 유형(SC·VF·SYM·XU)과 참신도 조건을 함께 요구하므로 올리지 않았다.
  tier: star_4
  mechanism_primary: "e^{-x} sin x=1/k 로 분리 → 극댓값 h(π/4+2nπ) 감쇠 수열 → 근 3 개 ⇔ 두 번째 극댓값에 접함 → k=√2 e^{9π/4}"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc2/items/204-421.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "요구하는 근의 개수(3 → 5, 2)와 감쇠 계수(e^x → e^{2x})를 바꿀 수 있음. 제약: (가) 근의 개수가 홀수일 때만 「접함」 배치가 되고 짝수이면 범위형 답이 됨 (나) 극댓값이 x=π/4+2nπ 에 놓이는 것은 e^{-x} sin x 의 형태 때문이므로 계수를 바꾸면 tan x=1/c 로 극점이 옮겨져 선택지의 √2 가 깨짐 (다) 「양의 실근」 제한을 빼면 음수 쪽 봉우리가 폭발적으로 커져 개수가 달라짐."
    creative: "(1) 근의 개수가 4 이상이 되도록 하는 k 의 범위를 묻기(I-MI 강화 ★5 후보) (2) g 를 k cos x 로 바꾸면 첫 봉우리가 x=0 근처라 개수 세기가 달라져 ★4 (3) 두 곡선이 접할 조건을 연립(f=g, f'=g')으로 구하게 유도하면 I-SC 가 추가되어 ★5 후보 (4) k 를 고정하고 가장 작은 양의 근이 속하는 구간을 묻기 ★3."
```

```yaml
- id: GN-CALC2-204-422
  page: 204
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제 실력 UP"
  summary: |
    반지름 $1$ 인 사분원의 호 위를 점 $\pt{A}(1,\,0)$ 에서 매초 $1$ 의 속력으로 움직이는 점 P 와, 선분 OP 가 선분 AB 와 만나는 점 Q 에 대하여 P 의 $x$ 좌표가 $\dfrac{3}{5}$ 인 순간 Q 의 속도 $(a,\,b)$ 의 $b-a$.
  category: '호 위 등속 조건을 $\dfrac{d\theta}{dt}=1$ 로 → 직선 $x+y=1$ 과 반직선 OP 의 교점 Q 를 $\theta$ 의 식으로 → 성분별 미분 후 대입'
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「호를 따라 매초 1 의 일정한 속력」을 반지름이 1 이므로 호의 길이가 중심각과 같다는 사실로 dθ/dt=1 로 옮김"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그림의 기하 조건(선분 OP 와 선분 AB 의 교점)을 좌표로 옮겨 Q=(cos θ, sin θ)/(cos θ+sin θ) 라는 매개변수 표현을 세움"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "도형의 매개변수화와 교점의 속도(관련 변화율)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    P=(cos θ, sin θ), 직선 AB 는 x+y=1 이므로 Q 는 OP 를 1/(cos θ+sin θ) 배 한 점이다. 성분을 θ 로 미분하면 분자가 피타고라스 항등식으로 상쇄돼 각각 -1/(cos θ+sin θ)^2, 1/(cos θ+sin θ)^2 로 떨어진다.
    P 의 x 좌표 3/5 에서 (3,4,5) 직각삼각형을 읽어 cos θ+sin θ=7/5 를 얻는 것이 마지막 마찰이고, 속도의 두 성분이 부호만 다르므로 b-a 는 그 제곱의 역수의 2 배다.
    기하 → 매개변수 좌표화(I-RT d2)와 등속 조건 번역(I-EQV d1)으로 통찰 2 · M_k=3(몫의 미분 + 항등식 정리) · M_total 10 → 실력 UP 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: "P=(cos θ, sin θ) · dθ/dt=1 → Q=(cos θ, sin θ)/(cos θ+sin θ) → 미분해 (-1, 1)/(cos θ+sin θ)^2 → cos θ+sin θ=7/5 대입"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{50}{49}$'
  answer_source: "답지"
  figure: "crop:fig-204-422.png"
  latex: latex-bank/gn-calc2/items/204-422.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "P 의 x 좌표(3/5 → 4/5, 5/13)와 P 의 속력(매초 1 → 매초 2)을 바꿀 수 있음. 제약: (가) x 좌표는 피타고라스 수의 비로 두어야 cos θ+sin θ 가 유리수 (나) 반지름을 r 로 바꾸면 dθ/dt=v/r 이 되어 속도가 그만큼 배가 됨 (다) 속력을 c 로 올리면 Q 의 속도 성분이 그대로 c 배 (라) 점 B 를 지나면 분모가 1 이 되어 답이 2."
    creative: "(1) Q 의 속도 대신 선분 AQ 의 길이의 변화율을 묻기(같은 매개변수화 ★4) (2) Q 의 속력을 묻게 하면 √2/(cos θ+sin θ)^2 로 한 줄 늘어 ★4 (3) 선분 AB 대신 직선 x=1(점 A 에서의 접선)과의 교점으로 바꾸면 Q=(1, tan θ) 가 되어 골조가 단순해져 ★3 (4) P 가 등속이 아니라 x 좌표가 등속으로 변하는 설정으로 바꾸면 dθ/dt 를 먼저 구해야 해 관련 변화율이 두 겹이 되어 ★5 후보."
```

## 표본 판정 요약 (20문)

- ★ 분포: ★1 2 · ★2 10 · ★3 4 · ★4 4 · ★5 0
- 통찰형 11 · 절차형 9 · premium 0
- 통찰 유형 분포(총 18개 라벨): I-EQV 7 · I-RT 4 · I-PD 2 · I-BW 2 · I-MI 1 · I-SC 1 · I-VF 0 · I-XU 0 · I-SYM 0 · I-CON 0
- type_hint 상위: 「방정식의 실근의 개수(상수 분리·그래프)」 4(203-411 · 203-412 · 204-417 · 204-421) · 「직선·평면 운동에서의 속도와 가속도」 4(201-e29 · 201-405 · 202-e30 · 202-408) · 「속도·속력 조건으로 미정상수 결정」 3(201-406 · 202-409 · 203-415) · 「속력의 최대·최소」 3(202-410 · 204-419 · 204-420) · 「부등식이 성립할 조건」 3(203-413 · 203-414 · 204-418)
- 구역별 ★ 중앙값: 필수·발전 예제 ★2 · 연습문제 STEP 1 ★2 · STEP 2 ★3.5 · 실력 UP ★4 — 벤더 구역 순서와 판정이 단조롭게 일치한다.
- 그림: 1문(`crop:fig-204-422.png`)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨·단원 제목과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC2-203-411 · 203-412 · 203-413 · 203-414 | 단원 제목은 「속도와 가속도」인데 골조는 앞 단원의 방정식의 실근의 개수·부등식 증명·부등식 성립 조건이다(연습문제 구역이 24·25단원 합본). type_hint 를 실제 골조대로 적었으므로 카탈로그를 만들 때 이 네 문항은 「방정식과 부등식에의 활용」 쪽으로 붙여야 한다 | ★2~★3 |
| GN-CALC2-204-417 · 204-418 | 위와 같은 사유. STEP 2 구역이지만 속도·가속도 유형이 아니다 | ★3~★4 |
| GN-CALC2-201-e29 | 「필수 예제」(★2 출발)이나 통찰 0 · M_total 4 로 v3.8 의 −1 조건에 걸려 ★1 로 내렸다. 단원의 정의를 처음 보여주는 자리라 벤더가 ★2 로 둔 것은 자연스럽다(1단 차이라 드리프트 경고는 아님) | ★1 / ★2 |
| GN-CALC2-204-418 | 하한이 열린 끝점(x→0+)이라 최솟값이 없는데 k=2 가 답이 되는 경계 처리를 I-VF 로 볼지 T-경계 함정으로 볼지 갈린다. 기각되는 분기가 없어 함정으로 처리했고 통찰은 I-EQV 1개만 세었다 | ★3 / ★4 |
| GN-CALC2-204-420 | 산술·기하평균 갈래를 I-SC(전략 분기)로 볼지 I-XU(미적분 + 절대부등식의 단원 결합)로 볼지 갈린다. 「직접 미분해도 풀리지만 현저히 느리다」는 판별에 더 잘 맞아 I-SC 로 두었다 | ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 실제로 반복된 축은 셋이다 — (가) **정방향 속도·가속도 계산**(직선 4문 · 평면 4문), (나) **미정상수 역산**(속도 조건 2문 · 속력 조건 2문), (다) **속력의 최대·최소**(3문). (가)는 직선/평면을 한 유형으로 묶어도 되지만 평면 쪽은 「속력·가속도의 크기」 계산이 추가되므로 하위 유형으로 나누는 편이 변형 생성에 유리하다.
- (나)의 네 문항(201-406 · 202-409 · 203-415 · 204-419)은 조건이 속도냐 속력이냐만 다르고 골조가 같다. 카탈로그에서는 한 유형 + 「조건 종류」 변형축으로 통합하는 것을 권한다.
- (다)의 세 문항은 속력의 제곱을 정리하는 도구가 각각 피타고라스 항등식(202-410 · 204-419)과 산술·기하평균(204-420)으로 갈린다. 같은 유형 안에 두되 도구를 변형축으로 두면 ★2~★4 를 한 유형으로 덮을 수 있다.
- 「운동 방향 전환(v=0)」(201-407)과 「특정 위치 통과」(203-416)는 이 범위에 한 문항씩뿐이지만 v=0 · 좌표 연립이라는 서로 다른 조건 번역이라 따로 세워야 한다.
- 204-422 의 「도형의 매개변수화 + 관련 변화율」은 이 단원에서 유일한 기하 결합형이다. 속도와 가속도 단원이 아니라 관련 변화율 쪽 유형으로 세우고 이 단원에서는 참조만 하는 편이 낫다.
