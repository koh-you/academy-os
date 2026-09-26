---
name: mechanism-데이터-GN-GEO-24
description: 개념원리 기하 24 벡터의 내적(1/1 · 199~202쪽 14문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 기하 · 전사본 latex-bank/gn-geo
  section: 24 벡터의 내적
  unit_code: GEO-24
  part: "1/1"
  extract_range: "199~202쪽 · 199-412~202-422"
  total_problems: 14
  unit_total: 14
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·예제 태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-geo/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-geo/items/<id>.tex
  image_source: latex-bank/gn-geo/figures/ (crops.json)
---

# 개념원리 기하 · 24 벡터의 내적 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 기하 199~202쪽, 단원 「24 벡터의 내적」 14문항 전수를 다룬다. 전사본 group 은 두 구역이다. 앞의 `개념원리 익히기` 4문(`199-412`~`199-415`)은 태그가 없는 통번호 개념 확인이라 ★1 을 출발점으로 읽었고, 뒤의 `필수·발전 예제` 10문은 필수 예제 3문(`200-e14` 도형에서의 벡터의 내적 · `201-e15` 성분으로 주어진 벡터의 내적 · `202-e16` 벡터의 내적의 성질)과 각 예제 바로 뒤에 붙는 확인체크 7문이 번갈아 놓여 있다. **이 구역의 확인체크는 독립된 개념원리 익히기 통번호가 아니라 바로 위 필수 예제의 짝 문제**(골조가 예제와 같다)이므로 출발점을 태그 문자 그대로의 ★1 이 아니라 그 예제의 ★2 로 읽었다 — GN-GEO-11 파일과 같은 해석이다. 이 해석 때문에 ★3 으로 올라간 확인체크 2문은 태그 문자 해석과 2단 벌어지므로 파일 끝 「분류 이슈 목록」에 기록했다.

단원 전체가 **내적을 읽는 세 가지 창구**로 갈린다. ① 크기와 사잇각(`|a||b|cosθ`) ② 성분(`x₁x₂+y₁y₂(+z₁z₂)`) ③ 크기 조건의 제곱(`|a±b|² = |a|²±2a·b+|b|²`). 절차형 8문은 세 창구 중 하나를 그대로 대입하는 문항이고, 통찰형 6문은 그 창구로 **옮겨 놓는 단계**가 따로 필요하다 — 도형 배치를 크기·사잇각으로 환산하거나(`200-e14`·`200-416`), 정육면체에 좌표를 잡거나(`200-417`), 크기 조건을 제곱해 내적 식으로 동치 변환하는 것(`202-e16`·`202-421`·`202-422`)이다. 그림이 붙은 3문(`200-e14`·`200-416`·`200-417`)은 발문에 도형의 종류·변의 길이·꼭짓점 이름이 모두 적혀 있어 배치가 발문만으로 확정된다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-GEO-199-412
  page: 199
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    크기가 4, 3 인 두 벡터가 이루는 각이 ⑴ 30° ⑵ 120° ⑶ 180° 일 때 각각의 내적을 구하기.
  category: "내적의 정의 대입 → 사잇각의 코사인 부호 확인"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내적의 정의(크기와 사잇각)로 값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    정의식에 크기 둘과 코사인값을 한 번 대입하면 끝나는 개념 확인. 둔각·평각에서 코사인이 음수가 되는 부호(T-부호)만 함정이다.
    개념원리 익히기 구역·통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "두 크기와 사잇각 → 정의식 (크기)×(크기)×cosθ 대입 → 둔각·평각의 부호 확인"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $6\sqrt{3}$ ⑵ $-6$ ⑶ $-12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/199-412.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 크기(4·3)와 사잇각(30°·120°·180°)을 바꿀 수 있다. 제약: 코사인값이 유리수 또는 근호 한 겹으로 떨어지는 특수각(0°·30°·45°·60°·90°·120°·135°·150°·180°)만 쓰고, 예각·둔각·평각(또는 90°)을 한 문항 안에 섞어 부호 확인이 남게 한다."
    creative: "(1) 내적값을 주고 사잇각을 되묻기(역방향 한 겹 · ★2) (2) 한 소문항을 90°로 바꿔 수직이면 내적이 0 임을 확인하게 하기(★1 유지) (3) 크기를 문자 k 로 주고 내적이 주어진 값이 되는 k 를 구하게 하면 Mₐ 상승 ★2."
```

```yaml
- id: GN-GEO-199-413
  page: 199
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 평면벡터 두 개의 내적을 구하기. ⑴⑵는 성분으로, ⑶은 기본벡터 e₁, e₂ 의 일차결합으로 주어진다.
  category: "성분 내적 공식 대입(기본벡터 표현은 성분으로 환산)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "성분으로 주어진 평면벡터의 내적"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    성분 내적 공식을 그대로 대입하는 개념 확인. ⑶ 만 기본벡터 일차결합을 성분으로 바꾸는 한 줄이 앞에 붙지만 표기 환산이라 통찰로 세지 않는다.
    ⑴ 은 내적이 0 으로 떨어져 수직임을 곁눈질하게 하는 배치. 개념원리 익히기·통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "기본벡터 표현이면 성분으로 환산 → 대응 성분끼리 곱해 더하기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $0$ ⑵ $2$ ⑶ $-10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/199-413.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 성분 전부 자유롭게 바꿀 수 있다(정수 유지). 제약: 소문항 중 하나는 내적이 0(수직)이 되도록 남겨 두어야 다음 단원(수직 조건) 연결이 살고, 기본벡터 소문항은 계수만 바꾸고 e₁·e₂ 정의는 고정한다."
    creative: "(1) 한 성분을 문자로 두고 내적이 0 이 되게 하는 값 묻기(★2 · 수직 조건 선행) (2) 세 벡터를 주고 어느 두 개가 수직인지 고르게 하기(★2) (3) 성분 대신 크기와 사잇각으로 주고 같은 값을 두 창구로 확인하게 하면 I-RT 한 겹 ★2."
```

```yaml
- id: GN-GEO-199-414
  page: 199
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 공간벡터 두 개의 내적을 구하기. ⑶은 기본벡터 e₁, e₂, e₃ 의 일차결합으로 주어진다.
  category: "공간 성분 내적 공식 대입(성분이 하나 늘어난 것뿐)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "성분으로 주어진 공간벡터의 내적"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    앞 문항과 같은 골조에 z 성분이 하나 붙은 확장. 공식이 평면에서 공간으로 그대로 이어진다는 확인이 목적이다.
    ⑵ 가 0 으로 떨어져 공간에서의 수직을 곁눈질하게 한다. 통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "기본벡터 표현이면 성분으로 환산 → x·y·z 세 성분 곱의 합"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $20$ ⑵ $0$ ⑶ $-5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/199-414.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "여섯 성분 전부 바꿀 수 있다(정수 유지). 제약: 소문항 하나는 내적 0(수직)을 유지하고, 부호가 섞인 성분을 남겨 곱의 부호 실수를 유도한다."
    creative: "(1) z 성분을 문자로 두고 수직이 되게 하는 값 묻기(★2) (2) 세 벡터로 이루어진 직각 여부 판정(★2) (3) 성분 내적으로 사잇각의 코사인까지 구하게 하면 크기 계산이 붙어 ★2."
```

```yaml
- id: GN-GEO-199-415
  page: 199
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    두 벡터의 크기가 3, 4 이고 내적이 5 일 때 ⑴ a·(a+2b) ⑵ (3a−b)·(a+b) 의 값을 구하기.
  category: "내적의 분배법칙 전개 → 제곱 항을 크기의 제곱으로 환산 → 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내적의 연산법칙(분배법칙)으로 식의 값 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    다항식 곱셈처럼 전개한 뒤 a·a 를 크기의 제곱으로 바꿔 세 수를 대입하는 두 단계. 전개 자체가 목적이라 착안할 것이 없어 절차형이다.
    다만 a·a = (크기)² 환산이 이 단원에서 처음 쓰이는 도구라 뒤의 202쪽 계열(크기 조건의 제곱)의 예고편이 된다. 익히기 구역·통찰 0·M_total 5 → ★1 유지.
  mechanism_primary: "분배법칙으로 전개 → a·a, b·b 를 크기의 제곱으로 → 주어진 세 수 대입"
  tier: star_1
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $19$ ⑵ $21$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/199-415.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 크기(3·4)와 내적값(5), 그리고 전개할 식의 계수를 바꿀 수 있다. 제약: 내적값은 코시-슈바르츠 범위 |a·b| ≤ (크기)×(크기) = 12 안에 있어야 실제로 존재하는 배치가 되고, 답이 정수로 떨어지게 계수를 정수로 둔다."
    creative: "(1) 값 대신 |a+b| 를 묻게 하면 제곱 후 근호가 붙어 ★2 (2) 내적값을 감추고 |a+b| 를 주면 역방향으로 a·b 를 먼저 구해야 해 I-EQV 한 겹 ★2(202-e16 골조) (3) (a+kb)·(a−kb)=0 이 되는 k 를 묻기(★3)."
```

### 필수·발전 예제

```yaml
- id: GN-GEO-200-e14
  page: 200
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    한 변의 길이가 2 인 정삼각형 AOB 와 변 AB 의 중점 M 에 대하여 ⑴ OA·OB ⑵ OA·OM ⑶ OM·AB ⑷ OA·AB 를 구하기.
  category: "도형 배치 → 각 벡터의 크기와 두 벡터의 사잇각을 다시 읽기 → 정의식 대입"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "시점이 다른 두 벡터를 같은 점으로 평행이동해 사잇각을 다시 읽음 — ⑷ OA·AB 의 사잇각은 삼각형의 내각 60°가 아니라 그 보각 120°"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "도형에서의 벡터의 내적(크기·사잇각 재설정)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정삼각형과 중선이라는 익숙한 배치지만, 내적의 정의를 쓰려면 매번 두 벡터를 한 점으로 모아 사잇각을 새로 읽어야 한다.
    ⑶ 은 중선이 밑변에 수직이라 계산 없이 0, ⑷ 는 시점을 A 로 맞추면 사잇각이 120°가 되는 것이 이 예제의 핵심 함정(T-부호·T-표기 2종).
    필수 예제 출발 ★2, 통찰 1(EQV d1)·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "두 벡터를 한 점으로 모으기 → 각 벡터의 길이와 사잇각 읽기(중선은 수직 → 0) → 정의식 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $2$ ⑵ $3$ ⑶ $0$ ⑷ $-2$'
  answer_source: "본문 풀이"
  figure: crop:fig-200-e14.png
  latex: latex-bank/gn-geo/items/200-e14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정삼각형의 한 변(2)만 바꾸면 네 답이 그 제곱에 비례해 움직인다. 제약: 그림의 점 이름 O·A·B·M 은 고정(크롭 라벨과 일치해야 함), 중점 M 을 삼등분점으로 옮기면 OM 의 길이와 수직성이 깨지므로 길이를 다시 계산해야 한다."
    creative: "(1) 정삼각형을 한 각이 120°인 이등변삼각형으로 바꾸기(사잇각이 특수각으로 남으면 ★2 유지) (2) M 을 AB 의 삼등분점으로 바꾸면 OM 을 OA·OB 의 일차결합으로 분해해야 해 ★3 (3) 중점 M 대신 무게중심을 쓰면 벡터 분해 + 내적 전개가 겹쳐 ★3 (4) 내적값을 주고 한 변의 길이를 되묻는 역방향(★3)."
```

```yaml
- id: GN-GEO-200-416
  page: 200
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    한 변의 길이가 2 인 정육각형 ABCDEF 의 세 대각선의 교점을 O 라 할 때 ⑴ OA·OB ⑵ BA·FE ⑶ AC·AD ⑷ AD·EB 를 구하기.
  category: "정육각형을 중심 기준 정삼각형 6개로 분해 → 각 벡터의 길이·사잇각 확정 → 정의식 대입"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "정육각형 배치를 중심 O 를 꼭짓점으로 하는 정삼각형 6개로 분해해 중심거리·대각선 길이(2, 2√3, 4)와 60°·120°·30° 사잇각을 읽어냄"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "BA 와 FE, AD 와 EB 처럼 시점이 떨어진 두 벡터를 평행이동해 같은 시점에서 사잇각을 다시 읽음(평행·반평행 판정 포함)"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "정다각형에서의 벡터의 내적(배치 분해로 크기·사잇각 읽기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    네 소문항이 모두 「길이와 사잇각을 스스로 만들어 내는」 단계를 요구한다. 중심거리가 한 변과 같다는 정육각형 고유 성질을 쓰지 않으면 ⑴ 부터 막힌다.
    ⑵ 는 두 벡터가 평행이 아니라 120°를 이룬다는 판정, ⑷ 는 시점이 완전히 떨어진 두 대각선을 평행이동해야 한다는 점에서 함정이 두 겹(T-부호·T-표기).
    확인체크지만 짝 예제(200-e14) 출발 ★2 에 통찰 2개 → +1 → ★3. [분류 이슈] 확인체크 태그 문자 그대로의 ★1 출발과는 2단 차이라 기록만 한다.
  tier: star_3
  mechanism_primary: "중심 O 기준 정삼각형 6개 분해 → 필요한 벡터의 길이와 사잇각 확정 → 평행이동으로 시점 맞춘 뒤 정의식 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $2$ ⑵ $-2$ ⑶ $12$ ⑷ $-8$'
  answer_source: "답지"
  figure: crop:fig-200-416.png
  latex: latex-bank/gn-geo/items/200-416.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "한 변의 길이(2)만 바꿀 수 있고 네 답은 그 제곱에 비례한다. 제약: 정육각형의 꼭짓점 이름 A~F 와 중심 O 는 그림 라벨이라 고정, 변의 길이를 무리수로 두면 대각선 2√3 배가 지저분해지므로 정수(2·4·6)를 권한다."
    creative: "(1) 묻는 벡터 쌍만 바꾸기(같은 골조 ★3 유지 · 사잇각이 60°·120° 조합이면 난도 동일) (2) 정육각형을 정팔각형으로 바꾸면 사잇각이 45°·135° 계열이 되어 길이 계산이 한 겹 늘고 ★3~4 (3) 내적이 0 이 되는 꼭짓점 쌍을 모두 찾게 하면 다중 해석(I-MI)이 붙어 ★4 (4) 좌표를 잡아 성분으로 푸는 갈래를 함께 허용하면 전략 분기(I-SC)가 생긴다."
```

```yaml
- id: GN-GEO-200-417
  page: 200
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    한 모서리의 길이가 2 인 정육면체에서 ⑴ AC·AF ⑵ AE·DG ⑶ AB·CG ⑷ AG·EG 를 구하기.
  category: "정육면체에 좌표(또는 세 모서리 기본벡터)를 잡아 성분으로 옮기고 성분 내적"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "공간 도형을 한 꼭짓점 기준 좌표계(또는 서로 수직인 세 모서리 벡터)로 옮겨 면대각선·공간대각선을 성분으로 표현 — 사잇각을 눈으로 재는 갈래를 피함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "정육면체에서의 벡터의 내적(좌표화)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    좌표를 한 번 잡으면 네 소문항이 모두 성분 곱의 합으로 기계적으로 끝난다. 통찰은 「좌표화하기로 결정하는」 한 단계뿐이다.
    좌표 없이 풀려 하면 면대각선 2√2 · 공간대각선 2√3 와 60°·90° 사잇각을 공간에서 눈으로 읽어야 해 오독(T-표기)이 생긴다. ⑶ 은 수직이라 0.
    확인체크·짝 예제 출발 ★2, 통찰 1(RT d1)·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "한 꼭짓점을 원점으로 좌표 잡기 → 네 쌍의 벡터를 성분으로 → 성분 곱의 합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $4$ ⑵ $4$ ⑶ $0$ ⑷ $8$'
  answer_source: "답지"
  figure: crop:fig-200-417.png
  latex: latex-bank/gn-geo/items/200-417.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "한 모서리의 길이(2)만 바꾸면 네 답이 그 제곱에 비례한다. 제약: 꼭짓점 이름 ABCD-EFGH 의 대응(A 아래 · E 위)은 그림 라벨이라 고정하고, 직육면체로 바꾸려면 세 모서리 길이를 모두 명시해야 한다."
    creative: "(1) 정육면체를 가로·세로·높이가 다른 직육면체로 바꾸면 성분이 비대칭이 되어 ★3 (2) 내적이 0 인 모서리·대각선 쌍을 모두 찾게 하면 I-MI 가 붙어 ★3~4 (3) 두 대각선이 이루는 각의 코사인을 묻게 하면 크기 계산이 붙어 ★3 (4) 정사면체로 바꾸면 좌표화가 어려워 크기·사잇각 창구를 강제하게 되어 ★4."
```

```yaml
- id: GN-GEO-201-e15
  page: 201
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 평면벡터 a=(2,−3), b=(−1,2) 에 대하여 a·(a−2b) 의 값. ⑵ 공간벡터 a=(1,k+1,1), b=(−k,k−1,4) 의 내적이 9 일 때 양수 k 의 값.
  category: "성분 내적 공식 대입(⑵ 는 k 에 대한 이차방정식으로 정리 후 양수 근)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "성분으로 주어진 벡터의 내적(미지수 포함 성분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 a−2b 를 먼저 성분으로 계산하고 내적, ⑵ 는 성분 내적을 k 로 정리하면 이차방정식이 되어 두 근 중 양수만 취한다.
    조건을 식으로 옮기는 경로가 하나뿐이고 미정계수 대입은 표준 절차라 통찰로 세지 않았다. 함정은 양수 조건으로 한 근을 버리는 것(T-범위) 하나.
    필수 예제 출발 ★2, 통찰 0·M_total 7(감점 조건 M_total ≤ 5 아님) → ★2 유지.
  tier: star_2
  mechanism_primary: "성분 계산 후 내적(⑴) / 내적을 k 식으로 정리 → 이차방정식 → 양수 근 선택(⑵)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $29$ ⑵ $3$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/201-e15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 네 성분과 계수(−2), ⑵ 의 성분 배치와 내적값(9)을 바꿀 수 있다. 제약: ⑵ 는 k 이차식의 판별식이 완전제곱이 되어 정수 근이 나오고 두 근의 부호가 갈려야(양수 조건이 실제로 하나를 버려야) 출제 의도가 산다."
    creative: "(1) 양수 조건을 빼고 k 의 값의 합을 묻기(근과 계수 관계 한 겹 · ★2) (2) 내적을 0 으로 두어 수직이 되는 k 를 묻기(★2) (3) k 가 일차로만 남게 성분을 설계하면 ★1 로 내려가고, 두 미지수를 두 조건으로 잡게 하면 연립이 되어 ★3."
```

```yaml
- id: GN-GEO-201-418
  page: 201
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    세 공간벡터 a, b, c 가 성분으로 주어질 때 (a−b)·(a−c) 의 값.
  category: "차 벡터를 성분으로 먼저 구하고 성분 내적"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "성분 벡터의 차의 내적"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    성분끼리 빼서 두 벡터를 만든 뒤 곱의 합을 구하는 두 줄. 전개(분배법칙)로 가면 오히려 길어지므로 성분을 먼저 계산하는 쪽이 정석이다.
    확인체크·짝 예제 출발 ★2 이지만 통찰 0·M_total 4(≤5) → −1 → ★1.
  tier: star_1
  mechanism_primary: "a−b, a−c 를 성분으로 계산 → 세 성분 곱의 합"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/201-418.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "아홉 성분 전부 바꿀 수 있다(정수 유지). 제약: 차 벡터의 성분이 한 자리 정수로 떨어지게 잡고, 답이 0 이 되게 설계하면 수직 판정 문항으로 성격이 바뀐다."
    creative: "(1) (a−b)⊥(a−c) 가 되도록 한 성분을 미지수로 두기(★2) (2) 세 점 A·B·C 의 위치벡터로 바꿔 각 A 가 직각인지 묻는 도형 문항으로 옮기기(I-RT 한 겹 ★3) (3) |a−b| 까지 함께 물어 크기·내적을 같이 쓰게 하면 ★2."
```

```yaml
- id: GN-GEO-201-419
  page: 201
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    성분에 x 가 들어 있는 두 평면벡터 a=(3,x−1), b=(−2,x+3) 의 내적이 −1 일 때 양수 x 의 값.
  category: "성분 내적을 x 식으로 정리 → 이차방정식 → 양수 근 선택"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "내적 조건으로 미지수 정하기(이차방정식·부호 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    짝 예제 201-e15 ⑵ 와 같은 골조를 평면에서 반복한다. 내적을 전개하면 x 이차식이 되고 인수분해로 두 근을 얻은 뒤 양수만 남긴다.
    미정계수 대입이라 통찰 없음. 함정은 버려야 할 음수 근(T-범위) 하나. 확인체크·짝 예제 출발 ★2, M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "성분 내적을 전개해 x 이차방정식 → 인수분해 → 양수 근 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/201-419.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x 가 없는 성분(3·−2)과 상수항(−1·+3), 내적값(−1)을 바꿀 수 있다. 제약: 전개한 x 이차식이 정수 계수로 인수분해되고 두 근의 부호가 갈려 양수 조건이 실제로 작동해야 한다."
    creative: "(1) 두 벡터가 수직이 되는 x 를 묻기(내적 0 · ★2) (2) 양수 조건을 없애고 모든 x 의 곱을 묻기(근과 계수 · ★2) (3) x 가 두 성분에 모두 들어가도록 설계해 삼차 이상이 되면 ★3 (4) 내적이 최소가 되는 x 를 묻게 하면 이차함수 최솟값이 붙어 I-XU ★3."
```

```yaml
- id: GN-GEO-201-420
  page: 201
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    a=(x+2,4), b=(1,6−x) 이고 a 의 크기가 5, x>0 일 때 두 벡터의 내적.
  category: "크기 조건으로 x 확정(양수 조건으로 한 근 기각) → 성분 내적"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "벡터의 크기 조건으로 미지수 확정 후 내적"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    크기 조건을 제곱해 (x+2)²=9 를 얻고 제곱근의 두 부호 중 x>0 을 만족하는 쪽만 남긴 뒤, 확정된 성분으로 내적을 구하는 2단 구조다.
    앞 두 문항(미지수를 내적 조건으로 잡기)과 달리 **미지수를 잡는 조건이 크기 쪽**이라는 점만 다르고 경로는 하나뿐이라 통찰로 세지 않았다. 함정은 제곱근의 부호와 x>0 범위 둘(T-부호·T-범위).
    확인체크·짝 예제 출발 ★2, 통찰 0·M_total 8 → ★2 유지(M_total 만 보면 ★3 후보이나 절차가 한 갈래라 올리지 않음).
  tier: star_2
  mechanism_primary: "크기 조건 제곱 → (x+2)²=9 → x>0 로 근 하나 기각 → 확정 성분으로 내적"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$23$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/201-420.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성분의 상수(2·4·1·6)와 크기(5)를 바꿀 수 있다. 제약: 크기 조건이 피타고라스 수(3-4-5, 5-12-13, 8-15-17)로 떨어져야 x 가 정수가 되고, x>0 조건이 두 근 중 하나를 실제로 버리도록 부호를 설계한다."
    creative: "(1) x>0 조건을 빼고 가능한 내적값을 모두 구하게 하면 분기가 답에 모두 기여해 I-MI ★3 (2) 크기 조건을 b 쪽에 걸면 같은 골조 ★2 유지 (3) |a|=|b| 로 바꾸면 식이 일차로 떨어져 ★2 (4) 두 벡터가 수직이라는 조건까지 함께 걸어 연립하면 ★3."
```

```yaml
- id: GN-GEO-202-e16
  page: 202
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    두 벡터의 크기가 2, 1 이고 합의 크기가 √2 일 때 ⑴ 두 벡터의 내적 ⑵ |3a−2b| 를 구하기.
  category: "크기 조건을 제곱해 내적 식으로 동치 변환 → 내적값 확보 → 목표 크기도 제곱해 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "크기 조건 |a+b|=√2 를 그대로는 쓸 수 없으므로 양변을 제곱해 |a|²+2a·b+|b|²=2 라는 내적 등식으로 옮김(크기 창구 → 내적 창구)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "벡터의 크기와 내적(크기 조건을 제곱해 옮기기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    성분도 사잇각도 주어지지 않아 유일한 통로가 「제곱」이다. ⑴ 에서 얻은 내적을 ⑵ 에서 다시 제곱 전개에 넣고 마지막에 근호를 씌우는 왕복이 이 단원의 핵심 도구다.
    같은 도구를 두 번 쓰므로 통찰은 1개로 셌다(한 단계 = 주 통찰 1개). 마지막에 제곱한 값을 그대로 답으로 쓰지 않고 근호를 씌우는 것이 함정(T-단위).
    필수 예제 출발 ★2, 통찰 1(EQV d1)·M_total 7 → ★2 유지.
  tier: star_2
  mechanism_primary: "크기 조건 제곱 → 내적값 확보 → 목표 크기도 제곱 전개해 대입 → 근호 복원"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $-\dfrac{3}{2}$ ⑵ $\sqrt{58}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-geo/items/202-e16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 크기(2·1)와 합의 크기(√2), 그리고 ⑵ 의 계수(3·−2)를 바꿀 수 있다. 제약: 삼각부등식 | |a|−|b| | ≤ |a+b| ≤ |a|+|b| 를 지켜야 실제로 존재하는 배치가 되고, 내적이 −|a||b| ~ |a||b| 안에 들어와야 한다. 답을 정수로 떨어뜨리려면 |a+b|² 를 정수로 잡는다."
    creative: "(1) 합의 크기 대신 차의 크기를 주기(부호만 바뀌는 같은 골조 ★2) (2) 내적 대신 사잇각을 묻게 하면 코사인 환산이 한 겹 붙어 ★3 (3) |a+tb| 의 최솟값을 묻게 하면 이차함수 최솟값이 결합해 I-XU ★4 (4) 크기 두 개를 감추고 |a+b|·|a−b| 를 주면 202-422 골조가 된다."
```

```yaml
- id: GN-GEO-202-421
  page: 202
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    두 벡터가 이루는 각이 60°, |b|=1, |a−3b|=√13 일 때 |a| 를 구하기.
  category: "크기 조건 제곱 → 내적을 |a| 로 표현 → |a| 이차방정식 → 음수 근 기각"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "|a−3b|=√13 을 제곱해 내적 등식으로 옮기고, 미지의 a·b 를 사잇각 60° 를 써서 |a| 하나의 식으로 바꿔 미지수를 |a| 로 통일"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "크기 조건에서 벡터의 크기 되찾기(사잇각 이용)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    짝 예제 202-e16 의 도구를 역방향으로 쓴다 — 거기서는 내적이 미지수였고 여기서는 크기가 미지수다.
    a·b = |a|·1·cos60° 로 두면 제곱 전개가 |a| 이차방정식이 되고, 음수 근은 크기가 될 수 없어 버린다(T-범위·T-부호). 이 기각은 정의역 필터 수준이라 I-VF 로 세지 않았다.
    확인체크·짝 예제 출발 ★2, 통찰 1(EQV d1)·M_total 8 → 가산 조건(통찰 2개 이상 또는 depth 3) 미달로 ★2 유지.
  tier: star_2
  mechanism_primary: "크기 조건 제곱 → a·b 를 |a|cos60° 로 치환 → |a| 이차방정식 → 양수 근"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/202-421.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "사잇각(60°), |b|(1), 계수(−3), 주어진 크기(√13)를 바꿀 수 있다. 제약: 사잇각은 코사인이 유리수인 특수각(60°·120°)이 계산이 깔끔하고, |a| 이차식이 정수 근을 갖도록 √13 자리를 설계해야 하며 두 근 중 하나가 음수가 되어 기각이 살아 있어야 한다."
    creative: "(1) |a| 를 주고 사잇각을 되묻기(코사인 역산 ★3) (2) 사잇각을 미지로 두고 |a|, |b| 를 모두 주면 같은 난도의 짝 문항(★2) (3) 두 근이 모두 양수가 되게 설계하면 분기 둘을 모두 답해야 해 I-MI 가 붙어 ★3 (4) 조건을 |a−tb| 최소로 바꾸면 이차함수 최솟값과 결합해 ★4."
```

```yaml
- id: GN-GEO-202-422
  page: 202
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    |a+b|=5, |a−b|=3 일 때 |2a−b|² + |a−2b|² 의 값을 구하기.
  category: "두 크기 조건의 합·차로 |a|²+|b|² 와 a·b 를 통째로 확보 → 목표 식을 같은 두 덩어리의 일차결합으로 정리"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 크기 조건을 각각 제곱한 뒤 더하고 빼서 |a|²+|b|² 와 a·b 라는 두 덩어리만 확정 — |a|, |b| 각각은 정해지지 않으며 정할 필요도 없다는 인식이 핵심"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "목표 식 |2a−b|²+|a−2b|² 를 전개해 5(|a|²+|b|²) − 8a·b 꼴, 즉 확보한 두 덩어리의 일차결합으로 다시 쓴다"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "크기 조건의 합·차로 |a|²+|b|²·a·b 를 통째로 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    개별 크기를 구하려 들면 미지수 세 개에 식 두 개라 막힌다. 두 조건을 더하면 |a|²+|b|², 빼면 a·b 가 한 번에 나오고 목표 식이 정확히 그 둘의 일차결합이라는 대칭 구조를 보는 것이 이 문항의 전부다.
    「구할 수 없는 값은 구하지 않는다」는 판단이 들어가므로 조건 통합(I-CON d2)으로 셌고, 목표 식을 같은 덩어리로 정리하는 단계를 별도 통찰(EQV d1)로 라벨링했다.
    확인체크·짝 예제 출발 ★2 에 통찰 2개 → +1 → ★3. [분류 이슈] 확인체크 태그 문자 그대로의 ★1 출발과는 2단 차이라 기록만 한다.
  tier: star_3
  mechanism_primary: "두 크기 조건 제곱 → 합으로 |a|²+|b|², 차로 a·b 확보 → 목표 식을 그 둘의 일차결합으로 전개해 대입"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$53$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-geo/items/202-422.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 크기(5·3)와 목표 식의 계수 조합을 바꿀 수 있다. 제약: |a+b|² 와 |a−b|² 의 합이 짝수여야 |a|²+|b|² 가 정수가 되고 차가 4의 배수여야 a·b 가 정수가 된다. 또 |a|²+|b|² ≥ 2|a·b| 를 만족해야 실제로 존재하는 두 벡터가 된다."
    creative: "(1) 목표를 |a|²+|b|² 나 a·b 자체로 낮추면 통찰 한 겹이 빠져 ★2 (2) 목표를 |2a−b| 하나로 바꾸면 근호 복원이 붙지만 난도는 ★3 유지 (3) |a+b| 와 a·b 를 주고 |a−b| 를 묻는 역방향(★3) (4) 세 벡터로 늘려 |a+b+c| 계열 조건을 주면 덩어리가 늘어 ★4 (5) 개별 |a|, |b| 를 실제로 구할 수 있게 조건을 하나 더 주면 오히려 계산량만 늘고 통찰이 죽어 ★2 로 내려간다(질 저하 방향)."
```

## 표본 판정 요약 (14문)

- ★ 분포: ★1 5 · ★2 7 · ★3 2 · ★4 0 · ★5 0
- 통찰형 6 (`200-e14`·`200-416`·`200-417`·`202-e16`·`202-421`·`202-422`) · 절차형 8 · premium 0
- 통찰 유형 빈도: I-EQV 5 · I-RT 2 · I-CON 1 (저노출 유형 SC/VF/SYM/XU 0 → 이 범위에 ★4·★5 자격 문항 없음)
- M_total 분포: 4 가 4문 · 5 가 1문 · 6 이 2문 · 7 이 4문 · 8 이 3문 (평균 6.1)
- type_hint 상위 5: 「성분으로 주어진 벡터의 내적」 계열 4(`199-413`·`199-414`·`201-e15`·`201-418`) · 「내적 조건·크기 조건으로 미지수 정하기」 2(`201-419`·`201-420`) · 「크기 조건을 제곱해 내적으로 옮기기」 3(`202-e16`·`202-421`·`202-422`) · 「도형에서의 벡터의 내적(크기·사잇각 재설정)」 3(`200-e14`·`200-416`·`200-417`) · 「내적의 정의·연산법칙」 2(`199-412`·`199-415`)
- 그림: 3문(`crop:fig-200-e14.png` · `crop:fig-200-416.png` · `crop:fig-200-417.png`) — 세 문항 모두 도형의 종류·변의 길이·꼭짓점 이름이 발문에 적혀 있어 배치가 발문만으로 확정된다
- 대상층: 하위권 5 · 중하위권 3 · 중위권 5 · 중상위권 1

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-GEO-200-416 | 태그는 「확인체크」(문자 그대로면 ★1 출발)지만 짝 예제 200-e14 의 ★2 출발로 읽고 통찰 2개(RT+EQV)로 +1 → ★3. 태그 문자 해석과 2단 차이 | ★1 / ★3 |
| GN-GEO-202-422 | 같은 사유. 확인체크지만 조건 통합(I-CON d2)이 들어가 짝 예제 202-e16(★2)보다 한 단 위 → ★3. 태그 문자 해석과 2단 차이 | ★1 / ★3 |
| GN-GEO-201-420 | M_total 8 로 이 범위 최상위권이나 경로가 한 갈래뿐인 절차형이라 ★2 유지. 노동량만 보면 ★3 후보 | ★2 / ★3 |
| GN-GEO-199-415 | 개념원리 익히기 ★1 출발·M_total 5 로 감점 경계선. a·a = (크기)² 환산이 이 단원에서 처음 나오는 도구라 ★2 로 볼 여지 있음 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형** ① 「성분 내적」과 ② 「크기·사잇각 내적」은 창구가 달라 반드시 분리한다 — 같은 값을 묻더라도 학생이 쓰는 도구와 함정(성분은 부호 곱, 사잇각은 시점 이동·보각)이 겹치지 않는다. ③ 「크기 조건을 제곱해 내적으로 옮기기」(`202-e16`·`202-421`·`202-422`)는 이 단원의 실질적 변별 유형이므로 독립 유형으로 세우고 base ★2~3 을 준다.
- **통합해도 될 유형** 「내적 조건으로 미지수 정하기」(`201-419`)와 「크기 조건으로 미지수 확정 후 내적」(`201-420`)은 조건이 걸리는 자리만 다르고 골조(조건 → 이차방정식 → 부호로 근 기각 → 대입)가 같아 한 유형의 두 변형으로 묶을 수 있다. `199-413`·`199-414` 의 평면·공간 구분도 성분 개수만 다르므로 한 유형 안의 차원 변형으로 둔다.
- **다음 단원과의 경계** 이 범위는 「내적을 구한다」까지이고 수직 조건·사잇각 역산·코시-슈바르츠는 뒤 단원 몫이다. 다만 `199-413` ⑴ · `199-414` ⑵ · `200-417` ⑶ 처럼 내적이 0 으로 떨어지는 소문항이 반복 배치돼 있어, 카탈로그에서 「내적이 0 = 수직」 유형을 세울 때 이 문항들을 선행 앵커로 참조할 수 있다.
