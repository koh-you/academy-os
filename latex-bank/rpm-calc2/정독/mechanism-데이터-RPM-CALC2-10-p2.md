---
name: mechanism-데이터-RPM-CALC2-10-p2
description: RPM 미적분Ⅱ 10 정적분의 활용(2/3 · 유형 03~11) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: RPM 미적분Ⅱ (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-calc2
  section: 10 정적분의 활용
  unit_code: CALC2-10
  part: "2/3"
  extract_range: "157~161쪽 · 1106~1138"
  total_problems: 33
  unit_total: 108
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 insights 의 effective_depth 평균. insight_type 은 depth 2 이상이거나 통찰 2개 이상일 때만 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc2/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc2/items/<id>.tex
  image_source: latex-bank/rpm-calc2/figures/ (crops.json)
---

# RPM 미적분Ⅱ · 10 정적분의 활용 (2/3) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅱ 10 정적분의 활용 단원의 둘째 범위(157~161쪽 · 1106~1138 · 33문항)를 다룬다. 33문 전부 「유형」 구역이며 아홉 유형이 이어진다 — 「유형 03 곡선과 x축 사이의 넓이」 4문(1106~1109) · 「유형 04 곡선과 y축 사이의 넓이」 4문(1110~1113) · 「유형 05 곡선과 직선 사이의 넓이」 4문(1114~1117) · 「유형 06 두 곡선 사이의 넓이」 4문(1118~1121) · 「유형 07 곡선과 접선으로 둘러싸인 도형의 넓이」 4문(1122~1125) · 「유형 08 두 도형의 넓이가 같은 경우」 3문(1126~1128) · 「유형 09 도형의 넓이를 이등분하는 경우」 3문(1129~1131) · 「유형 10 입체도형의 부피; 단면이 밑면과 평행한 경우」 4문(1132~1135) · 「유형 11 입체도형의 부피; 단면이 밑면과 수직인 경우」 3문(1136~1138). RPM 은 구역이 곧 난이도 층이므로 출발점은 유형 구역 기본 ★2 이고, 각 유형의 첫 문항(태그 「대표문제」 9문 · level 없음)이 그 유형의 대표다. 난이도 표시는 중하 1문(1107) · 중 17문 · 상중 6문(1109·1113·1124·1125·1135·1138)이고, 「서술형」 태그 3문(1108·1116·1137) · 기출 태그 없음 · 그림 8문(1114·1126·1127·1128·1135·1136·1137·1138)이다.

출발점에서 M_total·통찰로만 ±1 조정했다. 단면 넓이를 제곱해 한 번 적분하면 끝나는 1132 와 절편만 찾아 한 번 적분하는 1107 은 통찰 0·M_total 4 라 −1 을 적용해 ★1 로 두었고, 나머지 유형 기본·중 표시 문항은 부호 분할·역함수 전환·미지 상수 역산이 한 단계씩 붙어 M_total 5~7 이므로 ★2 를 유지했다. 상중 6문은 ★3 이다. 통찰이 잡힌 문항은 12문으로 이 범위의 성격을 잘 보여 준다 — 「넓이가 같다」·「이등분한다」를 부호 있는 넓이의 적분 방정식으로 번역하는 유형 08·09 의 6문(EQV) · 접선·곡선·축 사이 영역을 y 에 대한 적분이나 삼각형 넓이로 옮기는 1119·1122·1123·1131(RT) · 곡선 밖의 점을 지나는 접선의 접점을 역추적하는 1124(BW) · 반구 그릇을 좌표로 옮기는 1135(RT). 계산 마찰만으로 무거운 1138 과 대표문제인데 노동량이 최소인 1132 를 포함해 네 문항은 [분류 이슈] 로 기록만 했다. 답은 전사본 값을 그대로 옮겼다(답지 대조는 전사·검수 단계에서 이미 끝났다).

주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄 · 조건 → 변환 → 답 화살표 사슬) · `insights[]`(유형 코드+depth+근거 · 절차형은 빈 배열) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다. 유형 카탈로그가 없는 과목이므로 `type_id`·`base_star` 는 null 이고 `type_hint` 로 유형명을 제안했다. 이 범위의 골조는 사실상 세 갈래다 — (가) 적분 구간과 위·아래(또는 좌·우)를 정한 뒤 |차|를 적분한다 · (나) 넓이 값을 주고 상수를 역산한다 · (다) 단면 넓이를 한 변·반지름에서 만들어 적분한다. 카탈로그를 세울 때 참고할 메모는 파일 끝에 두었다.

## 문항 데이터

### 유형 03 곡선과 $x$축 사이의 넓이

```yaml
- id: RPM-CALC2-1106
  page: 157
  vendor_label: "유형 03 곡선과 $x$축 사이의 넓이"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    구간 [0, 3π/2] 에서 곡선 y=2sin x 와 x축, 두 직선 x=0, x=3π/2 로 둘러싸인 도형의 넓이.
  category: "부호 변화 지점에서 구간 분할 → |f| 적분 → 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축 사이의 넓이; 부호가 바뀌는 구간"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=π 에서 2sin x 의 부호가 바뀌므로 [0, π] 와 [π, 3π/2] 로 나눠 뒤 구간은 절댓값으로 더한다. 적분 자체는 −2cos x 한 줄이고 통찰은 없다.
    부호 분할이 이 유형의 핵심 단계라 M_total 5 에도 −1 을 적용하지 않고 유형 대표 출발점 ★2 를 유지했다. 함정은 T-부호 하나.
  tier: star_2
  mechanism_primary: "x=π 에서 부호 반전 확인 → ∫₀^π 2sin x dx + |∫_π^{3π/2} 2sin x dx| → 두 넓이의 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1106.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "진폭 2(→3·1/2)와 상한 3π/2(→2π·5π/4·7π/6)를 바꿀 수 있음. 제약: 상한이 π 를 넘어야 부호 분할이 살아 있고, 분할점에서의 cos 값이 정리되는 각이어야 함. 상한을 π 이하로 낮추면 함정이 사라져 ★1."
    creative: "(1) y=2sin x 대신 y=cos x 로 바꿔 분할점을 π/2 로 옮기기(★2 유지) (2) 넓이를 주고 상한을 역산시키면 1108 골조와 합쳐져 ★2~3 (3) 「둘러싸인 도형」 대신 ∫(부호 있는 정적분) 값을 함께 묻고 둘의 차이를 설명하게 하면 EQV d1 이 붙어 ★3."
```

```yaml
- id: RPM-CALC2-1107
  page: 157
  vendor_label: "유형 03 곡선과 $x$축 사이의 넓이"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=√(x+2) 와 x축, y축으로 둘러싸인 도형의 넓이.
  category: "두 절편으로 적분 구간 결정 → 무리함수 한 번 적분"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축·y축으로 둘러싸인 넓이(적분 구간을 절편에서 읽기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x절편 −2 와 y축 x=0 이 곧 적분 구간이고 (2/3)(x+2)^{3/2} 를 대입하면 끝난다. 구간 전체에서 함수가 양이라 부호 함정도 없다.
    통찰 0·M_total 4 이고 벤더 표시도 중하 → 유형 출발 ★2 에서 −1 하여 ★1.
  tier: star_1
  mechanism_primary: "x절편 x=−2 와 y축 x=0 → ∫_{−2}^{0} √(x+2) dx → (2/3)·2^{3/2}"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{4\sqrt{2}}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1107.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평행이동량 2(→3·1/2)와 뿌리 차수(√ → 세제곱근)를 바꿀 수 있음. 제약: 절편이 유리수여야 적분 구간이 깔끔하고, 답이 유리수·유리수×√ 꼴로 정리되어야 함."
    creative: "(1) y=√(2−x) 처럼 좌우를 뒤집어 구간을 [0,2] 로(★1 유지) (2) 곡선을 y=√(x+2)−1 로 내려 x축 아래 부분이 생기게 하면 부호 분할이 붙어 ★2 (3) 같은 도형을 y 에 대한 적분으로 구하게 하면 유형 04 골조(RT d1) ★2."
```

```yaml
- id: RPM-CALC2-1108
  page: 157
  vendor_label: "유형 03 곡선과 $x$축 사이의 넓이"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    곡선 y=1/(x−1) 과 x축, 두 직선 x=2, x=a (a>2) 로 둘러싸인 도형의 넓이가 3 일 때 상수 a.
  category: "넓이를 a 의 식으로 → 로그 방정식 → a 역산"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "넓이가 주어진 역산; 상한이 미지수인 로그 적분"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x>2 에서 피적분함수가 양이므로 절댓값 없이 ∫₂^a dx/(x−1)=ln(a−1) 이고 이를 3 과 같게 놓아 a 를 얻는다. 역산이지만 미정계수 한 개를 로그 방정식으로 푸는 표준 절차라 통찰로 세지 않았다.
    상수가 들어가 Mₐ=2, 구간 조건 a>2 로 T-범위 하나. M_total 6 · 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "a>2 에서 피적분함수 양 확인 → ∫₂^a dx/(x−1)=ln(a−1) → ln(a−1)=3 → a=e³+1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$e^3+1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1108.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점근선 x=1(→x=−1·x=0), 하한 2, 넓이 값 3(→1·2·ln 꼴)을 바꿀 수 있음. 제약: 하한이 점근선 오른쪽이어야 적분이 수렴하고, 넓이 값이 정수라야 a 가 e^k+c 로 떨어짐."
    creative: "(1) 미지수를 하한으로 옮겨 ∫_a^4 로 묻기(★2 유지) (2) 구간을 점근선 양쪽에 걸치게 두고 「넓이가 존재하지 않는 이유」를 묻기(EQV d2 ★3) (3) y=1/(x−1) 대신 y=1/(x−1)² 로 바꾸면 역산이 유리식 방정식이 되어 ★2 유지·계산만 증가."
```

```yaml
- id: RPM-CALC2-1109
  page: 157
  vendor_label: "유형 03 곡선과 $x$축 사이의 넓이"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=xe^x 과 x축, 두 직선 x=−1, x=1 로 둘러싸인 도형의 넓이. 5지선다.
  category: "x=0 부호 분할 → 부분적분 (x−1)e^x → 두 조각 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 x축 사이의 넓이; 부호 분할 + 부분적분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    e^x>0 이므로 부호는 x 가 결정한다. x=0 에서 갈라 [−1,0] 은 절댓값, [0,1] 은 그대로 더한다. 원시함수는 부분적분으로 (x−1)e^x 하나면 두 조각에 모두 쓴다.
    도구는 표준(부분적분+부호 분할)이라 통찰 0 이지만 M_total 6 이고 벤더 상중 → ★3 유지.
  tier: star_3
  mechanism_primary: "x=0 에서 부호 반전 → 원시함수 (x−1)e^x → |∫_{−1}^{0}| + ∫₀¹ → 두 조각 합"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1109.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [−1,1](→[−2,1]·[−1,2])과 피적분함수의 계수(xe^{2x}·2xe^x)를 바꿀 수 있음. 제약: 부호 분할점이 구간 내부에 남아야 하고 선택지가 a+b/e 꼴로 정리되어야 함."
    creative: "(1) y=x ln x 로 바꿔 정의역 제한을 함께 묻기(★3 유지) (2) 구간을 [0,1] 로 줄이면 부분적분만 남아 ★2 (3) 넓이를 주고 상한을 역산시키면 초월방정식이 되어 근 존재만 논하는 ★4 급으로 올라감."
```

### 유형 04 곡선과 $y$축 사이의 넓이

```yaml
- id: RPM-CALC2-1110
  page: 157
  vendor_label: "유형 04 곡선과 $y$축 사이의 넓이"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    곡선 y=ln(x+1) 과 y축, 직선 y=1 로 둘러싸인 도형의 넓이. 5지선다.
  category: "역함수 x=e^y−1 → y 에 대한 적분 → 값"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 y축 사이의 넓이(역함수로 y 에 대한 적분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y축과의 교점 y=0, 직선 y=1 이 적분 구간이고 x=e^y−1 로 고쳐 ∫₀¹(e^y−1)dy 한 줄이다. y 에 대한 적분으로 바꾸는 것이 이 유형의 정의라 통찰로 세지 않았다.
    M_total 5 지만 역함수 전환 단계가 유형 핵심이라 −1 없이 유형 대표 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "y=ln(x+1) → x=e^y−1 → ∫₀¹ (e^y−1) dy → e−2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1110.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평행이동 +1(→+2·−1)과 상한 y=1(→y=2·y=ln 3)을 바꿀 수 있음. 제약: 역함수가 초등함수로 풀려야 하고 하한이 y축과의 교점(x=0 일 때의 y)이어야 함."
    creative: "(1) 같은 도형을 x 에 대한 적분(직사각형−∫ln) 으로 구하게 하면 RT d1 이 붙어 ★2~3 (2) 상한을 y=k 로 두고 넓이를 주면 1111 골조 ★2 (3) 곡선을 y=ln(x+1) 과 y=ln x 두 개로 늘리면 유형 06 과 합성되어 ★3."
```

```yaml
- id: RPM-CALC2-1111
  page: 157
  vendor_label: "유형 04 곡선과 $y$축 사이의 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=1/x 과 y축, 두 직선 y=√e, y=k (k>√e) 로 둘러싸인 도형의 넓이가 3 일 때 상수 k. 5지선다.
  category: "x=1/y 로 전환 → ln k 의 방정식 → k 역산"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 y축 사이의 넓이 역산; 상한 y=k 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y=1/x 는 x=1/y 로 대칭적으로 뒤집히므로 ∫_{√e}^{k} dy/y = ln k − 1/2 이고 이를 3 과 같게 놓는다. 역함수 전환(유형 04 의 정의)과 로그 방정식 역산이 한 번씩.
    통찰 0 이지만 미지 상수로 Mₐ=2, M_total 6 · 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "x=1/y → ∫_{√e}^{k} dy/y = ln k − 1/2 → ln k = 7/2 → k=e^{7/2}"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1111.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "하한 √e(→e·1), 넓이 3(→2·5/2)을 바꿀 수 있음. 제약: 하한이 양수라야 하고 ln(하한) 이 유리수여야 선택지가 e 의 유리수 거듭제곱으로 떨어짐."
    creative: "(1) 미지수를 하한으로 옮기기(★2 유지) (2) 곡선을 y=1/x² 로 바꾸면 역함수가 x=1/√y 가 되어 계산만 증가(★2) (3) k 의 범위 조건을 빼고 「가능한 k 를 모두」 로 물으면 MI d2 가 붙어 ★3."
```

```yaml
- id: RPM-CALC2-1112
  page: 157
  vendor_label: "유형 04 곡선과 $y$축 사이의 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=√(x+1)+1 과 y축, 두 직선 y=1, y=3 으로 둘러싸인 도형의 넓이.
  category: "역함수 x=(y−1)²−1 → x 의 부호가 바뀌는 y=2 에서 분할 → |x| 적분"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 y축 사이의 넓이; 곡선이 y축을 가로지르는 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=(y−1)²−1 이 y=2 에서 부호를 바꾼다(1<y<2 이면 x<0). 그냥 ∫₁³ x dy 로 계산하면 y축 왼쪽 조각이 상쇄되어 틀린다.
    분할 후 |x| 를 더하는 것이 핵심이라 T-부호·T-범위 두 함정으로 Mₜ=2. 통찰은 없다(표준 부호 분할).
    [분류 이슈] 벤더 중이지만 상쇄 함정이 있어 체감은 ★3 쪽 — 라벨은 ★2 로 두고 기록만 함.
  tier: star_2
  mechanism_primary: "x=(y−1)²−1 → y=2 에서 x 부호 반전 → |∫₁²| + ∫₂³ → 두 조각 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1112.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평행이동(+1,+1)과 두 상·하한 y=1, y=3 을 바꿀 수 있음. 제약: 구간이 x 의 부호 변화점 y=2 를 품어야 함정이 살고, 품지 않으면 단순 다항 적분 ★1~2 로 내려감."
    creative: "(1) 구간을 [2,3] 으로 줄여 함정을 없애기(★1) (2) 넓이를 주고 상한 y=k 를 역산(★2) (3) 「정적분 ∫₁³ x dy 의 값과 넓이가 다른 이유」를 서술형으로 묻기(EQV d2 ★3)."
```

```yaml
- id: RPM-CALC2-1113
  page: 157
  vendor_label: "유형 04 곡선과 $y$축 사이의 넓이"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=e^x−1 과 y축, 직선 y=1 로 둘러싸인 도형의 넓이.
  category: "역함수 x=ln(y+1) → 로그의 부분적분 → 값"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 y축 사이의 넓이; 로그 부분적분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    곡선이 원점을 지나므로 적분 구간은 y=0~1 이고 x=ln(y+1) 로 바꾼 뒤 ∫ln(y+1)dy 를 부분적분해 (y+1)ln(y+1)−(y+1) 을 쓴다.
    전환과 부분적분 모두 표준 도구라 통찰 0. M_total 6 · 벤더 상중 → ★3.
  tier: star_3
  mechanism_primary: "x=ln(y+1) → ∫₀¹ ln(y+1) dy → 부분적분 (y+1)ln(y+1)−(y+1) → 2ln2−1"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$2\ln 2-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1113.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평행이동 −1(→−2)과 상한 y=1(→y=e−1·y=3)을 바꿀 수 있음. 제약: y+1 이 상한에서 2·e 처럼 로그가 정리되는 값이어야 함."
    creative: "(1) 같은 도형을 직사각형에서 ∫₀^{ln2}(e^x−1)dx 를 빼는 방식으로 구하게 하면 RT d1 ★3 (2) 직선을 y=k 로 두고 넓이를 주면 초월방정식 역산 ★4 (3) y축 대신 x축 쪽 넓이를 함께 묻고 둘의 합이 직사각형임을 쓰게 하면 SYM d2 ★4."
```

### 유형 05 곡선과 직선 사이의 넓이

```yaml
- id: RPM-CALC2-1114
  page: 158
  vendor_label: "유형 05 곡선과 직선 사이의 넓이"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    곡선 y=x/(x²+2) 와 직선 y=x/3 으로 둘러싸인 도형의 넓이. 5지선다. 그림 있음.
  category: "교점 x=0, ±1 → 원점 대칭인 두 조각 → 2×∫₀¹(곡선−직선)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 직선 사이의 넓이; 원점 대칭인 두 영역"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x/(x²+2)=x/3 에서 x=0, x²=1 로 교점 셋. 두 함수가 모두 기함수라 그림의 두 영역이 합동이므로 한쪽을 구해 2배 한다(대칭은 그림에 그대로 보이므로 통찰로 세지 않음).
    피적분함수는 (1/2)ln(x²+2) 로 떨어지는 f′/f 꼴. M_total 6 · 유형 대표 → ★2.
  tier: star_2
  mechanism_primary: "교점 x=0,±1 → 기함수 대칭으로 2×∫₀¹ {x/(x²+2) − x/3} dx → (1/2)ln(x²+2)−x²/6 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: crop:fig-1114.png
  latex: latex-bank/rpm-calc2/items/1114.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모의 상수 2(→3·4)와 직선의 기울기 1/3(→1/4·1/5)을 함께 바꿔야 함. 제약: 교점이 x²=(1/기울기)−상수 로 유리수 제곱이 되어야 하고, 그림 라벨(교점 ±1)은 고정이므로 숫자 변형 시 그림도 함께 수정."
    creative: "(1) 직선을 y=mx 로 두고 넓이를 주어 m 을 역산(★3) (2) 곡선을 우함수 y=1/(x²+2) 로 바꾸고 직선을 y=c 로 두면 대칭 축이 y축으로 옮겨감(★2) (3) 두 영역 중 한쪽만 색칠해 「그림의 도형」 넓이를 물으면 2배 여부가 함정이 되어 ★3."
```

```yaml
- id: RPM-CALC2-1115
  page: 158
  vendor_label: "유형 05 곡선과 직선 사이의 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 xy=4 와 직선 x+y=5 로 둘러싸인 도형의 넓이. 5지선다.
  category: "교점(이차방정식) → 직선−곡선 적분 → 로그 항 포함 값"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 직선 사이의 넓이; 유리함수와 일차식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 식을 모두 y 로 정리해 4/x=5−x → x²−5x+4=0 으로 교점 x=1, 4 를 얻고, 그 사이에서는 직선이 위에 있으므로 ∫₁⁴(5−x−4/x)dx 한 덩어리다.
    분할도 부호 함정도 없고 도구는 로그 적분 하나. M_total 6 · 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "4/x=5−x → 교점 x=1,4 → ∫₁⁴ (5−x−4/x) dx → 5x−x²/2−4ln x 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1115.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선 xy=4(→xy=6·xy=3)와 직선의 절편 5(→5·7)를 함께 바꿈. 제약: 교점이 정수해가 되도록 (합, 곱) 이 정수쌍이어야 하고, 두 교점이 모두 같은 분지(x>0)에 있어야 함."
    creative: "(1) 직선을 x+y=k 로 두고 넓이를 주어 k 를 역산(★3) (2) 교점이 한 개뿐(접함)이 되는 k 를 묻는 문제로 바꾸면 판별식 조건 ★3 (3) x<0 분지까지 포함시키면 영역이 둘로 갈려 MI d2 ★3~4."
```

```yaml
- id: RPM-CALC2-1116
  page: 158
  vendor_label: "유형 05 곡선과 직선 사이의 넓이"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    곡선 y=1/x (x>0) 과 두 직선 y=x, y=x/2 로 둘러싸인 도형의 넓이.
  category: "경계가 셋 → 교점 x=1, √2 에서 구간 분할 → 두 적분의 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 두 직선으로 둘러싸인 넓이; 교점에서 구간 분할"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 경계의 교점은 원점, x=1(y=x 와 곡선), x=√2(y=x/2 와 곡선) 셋이다. [0,1] 에서는 위가 y=x, [1,√2] 에서는 위가 y=1/x 이고 아래는 줄곧 y=x/2 이므로 두 조각으로 나눠 더한다.
    분할 경계를 교점에서 읽는 표준 절차라 통찰 0. M_total 6 · 벤더 중 → ★2(서술형 태그는 +0).
  tier: star_2
  mechanism_primary: "교점 x=1, √2 → ∫₀¹(x−x/2)dx + ∫₁^{√2}(1/x−x/2)dx → 두 조각 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{2}\ln 2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1116.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 직선의 기울기 1, 1/2(→2, 1/3)와 곡선 y=k/x 의 k 를 바꿀 수 있음. 제약: 두 교점의 x 가 √(k/기울기) 꼴이라 근호가 정리되는 값이어야 하고, 기울기 대소가 뒤집히면 위·아래가 바뀜."
    creative: "(1) 곡선을 y=1/x² 로 바꿔 분할 구조는 그대로 두기(★2) (2) 같은 영역을 y 에 대한 적분으로 구하게 하면 대칭성으로 한 줄이 되어 RT d2 ★3 (3) 직선 하나를 y=a x 로 두고 넓이를 주어 a 를 역산(★3)."
```

```yaml
- id: RPM-CALC2-1117
  page: 158
  vendor_label: "유형 05 곡선과 직선 사이의 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=a√x 와 직선 y=x 로 둘러싸인 도형의 넓이가 8/3 일 때 양수 a.
  category: "교점 x=a² → 넓이를 a 의 식(a⁴/6)으로 → 역산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "곡선과 직선 사이의 넓이 역산; 매개변수 a 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a√x=x 에서 교점 x=0, a² 이고 그 사이에서는 곡선이 위이므로 ∫₀^{a²}(a√x−x)dx 를 a 의 식으로 정리하면 a⁴ 에 비례하는 한 항만 남는다. 이를 8/3 과 같게 놓아 a 를 얻는다.
    매개변수가 적분 구간과 피적분함수 양쪽에 들어가 Mₐ=2·M_total 7 이지만 통찰은 없다. 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "a√x=x → 교점 x=a² → ∫₀^{a²}(a√x−x)dx = a⁴/6 → a⁴=16 → a=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1117.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "넓이 8/3(→ 1/6·27/2)과 직선의 기울기 1(→2)을 바꿀 수 있음. 제약: 넓이 식이 a 의 짝수 거듭제곱이라 a 가 양수 유리수로 떨어지는 값이어야 하고, a>0 조건이 있어야 답이 하나."
    creative: "(1) 곡선을 y=a x^{1/3} 로 바꿔 지수만 조정(★2) (2) a>0 조건을 빼고 음수 a 까지 허용하면 영역이 달라져 MI d2 ★3 (3) 넓이 대신 「두 도형의 넓이가 같도록」 조건을 주면 유형 08 골조와 합쳐져 EQV d2 ★3."
```

### 유형 06 두 곡선 사이의 넓이

```yaml
- id: RPM-CALC2-1118
  page: 158
  vendor_label: "유형 06 두 곡선 사이의 넓이"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    두 곡선 y=1/x, y=√x 와 두 직선 x=1/4, x=4 로 둘러싸인 도형의 넓이.
  category: "교점 x=1 에서 상하 교체 → 두 구간의 |차| 적분 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 곡선 사이의 넓이; 교점에서 상하가 바뀌는 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    1/x=√x 에서 x=1 이고 x<1 이면 1/x 가, x>1 이면 √x 가 위다. 구간을 [1/4,1] 과 [1,4] 로 갈라 각각 위−아래를 적분한다.
    원시함수는 ln x 와 (2/3)x^{3/2} 둘뿐이고 로그 항이 서로 상쇄된다. M_total 6 · 유형 대표 → ★2.
  tier: star_2
  mechanism_primary: "교점 x=1 → [1/4,1] 은 1/x−√x, [1,4] 는 √x−1/x → 두 적분 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{49}{12}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1118.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양 끝 x=1/4, x=4(→1/9, 9)를 바꿀 수 있음. 제약: 끝점이 교점 x=1 의 양쪽에 있어야 상하 교체가 살아 있고, x^{3/2}·ln 값이 정리되는 제곱수라야 답이 유리수."
    creative: "(1) 끝점을 모두 x>1 로 옮겨 분할을 없애기(★1~2) (2) 오른쪽 끝을 x=a 로 두고 넓이를 주어 역산(★3) (3) 두 곡선을 y=1/x, y=x^n 으로 일반화해 n 에 따른 넓이 비교를 묻기(PD d2 ★4)."
```

```yaml
- id: RPM-CALC2-1119
  page: 158
  vendor_label: "유형 06 두 곡선 사이의 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 곡선 y=ln x, y=ln(1/x) 과 직선 y=1 로 둘러싸인 도형의 넓이.
  category: "두 곡선이 x축 대칭 → y 에 대한 적분 ∫₀¹(e^y−e^{−y})dy"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "ln(1/x)=−ln x 로 보고 좌·우 경계를 x=e^{−y}, x=e^{y} 로 바꿔 y 에 대한 적분 한 덩어리로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 곡선과 직선 사이의 넓이; y 에 대한 적분으로 전환"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x 에 대해 적분하면 [1/e,1] 과 [1,e] 두 조각이지만, ln(1/x)=−ln x 라 두 곡선이 x축 대칭이므로 y 를 변수로 잡으면 오른쪽 e^y, 왼쪽 e^{−y} 하나로 묶인다.
    전환이 풀이를 반으로 줄이므로 RT d1 하나. 다만 x 적분으로도 풀리므로 depth 1 에 그치고 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "ln(1/x)=−ln x → y 에 대한 적분으로 전환 → ∫₀¹ (e^y−e^{−y}) dy → e+1/e−2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$e+\dfrac{1}{e}-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1119.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "덮개 직선 y=1(→y=2·y=ln 3)을 바꿀 수 있음. 제약: 상한에서 e^y 가 정리되는 값이어야 하고, 하한은 두 곡선의 교점 y=0 으로 고정."
    creative: "(1) 두 곡선을 y=ln x, y=2ln x 로 바꾸면 대칭이 깨져 x 적분 두 조각(★2, RT 소멸) (2) 직선을 y=k 로 두고 넓이를 주어 k 를 역산(★3) (3) 곡선 y=e^x, y=e^{−x} 와 직선 x=1 로 뒤집으면 같은 골조의 쌍둥이 문항(★2)."
```

```yaml
- id: RPM-CALC2-1120
  page: 158
  vendor_label: "유형 06 두 곡선 사이의 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    0≤x≤2π 에서 두 곡선 y=sin x 와 y=cos x 로 둘러싸인 도형의 넓이.
  category: "교점 x=π/4, 5π/4 → 그 사이에서 sin−cos 적분"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 삼각함수 곡선 사이의 넓이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    sin x=cos x 즉 tan x=1 의 해가 구간 안에 π/4, 5π/4 둘뿐이므로 둘러싸인 영역은 하나다. 그 사이에서는 sin 이 위라 ∫(sin x−cos x)dx 한 덩어리.
    교점 판별과 상하 확인이 전부라 통찰 0. M_total 5 지만 벤더 중이고 삼각 교점 판별 단계가 있어 −1 없이 ★2.
  tier: star_2
  mechanism_primary: "tan x=1 → 교점 π/4, 5π/4 → ∫_{π/4}^{5π/4}(sin x−cos x)dx → [−cos x−sin x] 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1120.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [0,2π](→[0,π]·[0,4π])와 두 곡선의 진폭을 바꿀 수 있음. 제약: 구간이 교점 두 개를 품어야 영역이 하나로 닫히고, 구간을 넓히면 합동인 영역이 여러 개가 되어 개수 조건을 명시해야 함."
    creative: "(1) 구간을 [0,4π] 로 늘려 영역 두 개의 합을 묻기(대칭 인식 SYM d1 ★3) (2) y=sin x 와 y=cos 2x 로 바꾸면 교점이 셋이 되어 분할 ★3 (3) 두 곡선과 x축까지 경계에 넣으면 영역이 갈라져 MI d2 ★3."
```

```yaml
- id: RPM-CALC2-1121
  page: 158
  vendor_label: "유형 06 두 곡선 사이의 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    두 곡선 y=e^x, y=e^{2x} 과 두 직선 x=ln(1/2), x=ln 2 로 둘러싸인 도형의 넓이. 5지선다.
  category: "교점 x=0 에서 상하 교체 → 두 구간의 |차| 적분 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 지수곡선 사이의 넓이; 교점에서 상하 교체"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e^x=e^{2x} 의 해는 x=0 하나이고 x<0 이면 e^x 가, x>0 이면 e^{2x} 가 위다. 구간 양 끝이 −ln2, ln2 로 0 을 사이에 두므로 두 조각으로 나눈다.
    원시함수는 e^x 와 e^{2x}/2 뿐이고 끝점에서 e^{±ln2}=2, 1/2 로 정리된다. 통찰 0·M_total 6 · 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "교점 x=0 → [−ln2,0] 은 e^x−e^{2x}, [0,ln2] 는 e^{2x}−e^x → 두 적분 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1121.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "양 끝 ln(1/2), ln 2(→ln(1/3), ln 3)와 지수 2(→3)를 바꿀 수 있음. 제약: 끝점이 교점 x=0 의 양쪽이어야 분할이 살고, e^{끝점} 이 유리수로 떨어져야 선택지가 분수."
    creative: "(1) 끝점을 모두 양수로 옮겨 분할을 없애기(★2 하향) (2) 오른쪽 끝을 x=ln k 로 두고 넓이를 주어 k 를 역산(★3) (3) 두 곡선을 y=e^x, y=e^{−x} 로 바꾸면 y축 대칭이 생겨 SYM d1 ★2~3."
```

### 유형 07 곡선과 접선으로 둘러싸인 도형의 넓이

```yaml
- id: RPM-CALC2-1122
  page: 159
  vendor_label: "유형 07 곡선과 접선으로 둘러싸인 도형의 넓이"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    곡선 y=ln x 와 점 (e, 1) 에서의 접선 및 x축으로 둘러싸인 도형의 넓이. 5지선다.
  category: "접선 y=x/e → 세 경계를 y 에 대한 적분으로 → ∫₀¹(e^y−ey)dy"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x축·곡선·접선으로 끊긴 영역을 x 적분 두 조각 대신 y 에 대한 적분(또는 삼각형−∫ln x) 한 덩어리로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곡선과 접선 및 x축으로 둘러싸인 넓이(y 에 대한 적분)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y′=1/x 로 접선은 원점을 지나는 y=x/e 다. x 로 적분하면 x=1 에서 아래 경계가 x축에서 곡선으로 바뀌어 두 조각이지만, y 로 적분하면 오른쪽 e^y, 왼쪽 ey 로 한 덩어리다.
    접선을 구하는 것은 표준 절차이고 영역 전환만 RT d1. 유형 대표·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "접선 y=x/e(원점 통과) → y 에 대한 적분으로 전환 → ∫₀¹ (e^y − e y) dy"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1122.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "접점 (e,1)(→(e²,2)·(1,0))을 바꿀 수 있음. 제약: 접점의 x 가 e^k 꼴이라야 접선 기울기와 절편이 정리되고, 접점이 (1,0) 이면 영역이 사라짐."
    creative: "(1) x축 대신 직선 y=1 을 경계로 두면 영역이 위로 바뀜(★2) (2) 곡선 밖의 점에서 그은 접선으로 바꾸면 접점 역추적이 붙어 1124 골조 ★3 (3) 접선과 곡선 사이 넓이를 구간 [1,e] 로 제한해 묻기(★2)."
```

```yaml
- id: RPM-CALC2-1123
  page: 159
  vendor_label: "유형 07 곡선과 접선으로 둘러싸인 도형의 넓이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=3√(x−1) 과 점 (10, 9) 에서의 접선 및 x축으로 둘러싸인 도형의 넓이. 5지선다.
  category: "접선 y=x/2+4 → y 에 대한 적분 ∫₀⁹(곡선의 x − 접선의 x)dy"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "곡선·접선을 각각 x=y²/9+1, x=2y−8 로 뒤집어 y 에 대한 적분 한 덩어리로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곡선과 접선 및 x축으로 둘러싸인 넓이; 무리함수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    y′=3/(2√(x−1)) 로 접선 기울기 1/2, 접선의 x절편은 −8 이고 곡선의 x절편은 1 이라 아래 경계가 x축에서 끊긴다. 두 경계를 x=y²/9+1, x=2y−8 로 뒤집으면 y=0~9 한 번의 적분이다.
    1122 와 완전히 같은 골조(무리함수판). RT d1·M_total 6 · 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "접점에서 기울기 1/2 → 접선 y=x/2+4 → x=y²/9+1, x=2y−8 로 전환 → ∫₀⁹ 차 적분"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1123.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 3 과 접점 (10,9)(→(5,6)·(17,12))을 바꿀 수 있음. 제약: 접점의 x−1 이 제곱수라야 기울기가 유리수이고, 접선의 x절편이 곡선의 x절편보다 왼쪽이어야 영역이 닫힘."
    creative: "(1) x축 대신 y축을 경계로 두기(★2) (2) 접점을 미지수로 두고 넓이를 주어 역산(★3) (3) 접선 대신 두 점을 잇는 할선으로 바꾸면 접점 조건이 사라져 유형 05 골조 ★2."
```

```yaml
- id: RPM-CALC2-1124
  page: 159
  vendor_label: "유형 07 곡선과 접선으로 둘러싸인 도형의 넓이"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=e^x 과 점 (1, 0) 에서 이 곡선에 그은 접선 및 y축으로 둘러싸인 도형의 넓이.
  category: "접점을 (t, e^t) 로 두고 통과 조건 → t 결정 → ∫(곡선−접선)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "접점이 주어지지 않아 (t, e^t) 로 두고 「(1,0) 을 지난다」 는 결과 조건에서 t 를 역추적"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "곡선 밖의 점에서 그은 접선과 둘러싸인 넓이"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞의 두 문항과 달리 접점이 발문에 없다. 접점 (t, e^t) 에서의 접선이 (1,0) 을 지난다는 조건이 t 를 결정하고(−e^t=e^t(1−t)), 그 뒤에야 적분 구간과 위·아래가 정해진다.
    접점 역추적은 BW d2. 매개변수가 들어가 Mₐ=2·M_total 7, 벤더 상중 → ★3.
  tier: star_3
  mechanism_primary: "접점 (t,e^t) → 접선이 (1,0) 통과 조건으로 t=2 → 접선 y=e²(x−1) → ∫₀²(e^x−접선)dx"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$e^2-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1124.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "외부 점 (1,0)(→(−1,0)·(0,0))과 곡선 y=e^x(→y=e^{2x})을 바꿀 수 있음. 제약: 접점 조건 식이 t 의 일차식으로 떨어져야 하고(지수함수라면 항상), 접선이 y축과 만나는 지점이 곡선 아래여야 영역이 닫힘."
    creative: "(1) 외부 점을 x축 위 (a,0) 으로 두고 넓이를 a 의 식으로 묻기(★4) (2) 곡선을 y=ln x 로 바꾸면 접점 조건이 로그식이 되어 ★3 유지 (3) 접선을 두 개 그을 수 있는 곡선(y=x³)으로 바꾸면 MI d2 가 더해져 ★4."
```

```yaml
- id: RPM-CALC2-1125
  page: 159
  vendor_label: "유형 07 곡선과 접선으로 둘러싸인 도형의 넓이"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=x sin 2x (0≤x≤π/2) 와 점 (π/4, π/4) 에서의 접선으로 둘러싸인 도형의 넓이.
  category: "접선 y=x → 교점 x=0 과 접점 → ∫₀^{π/4}(x − x sin 2x)dx (부분적분)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x sin 2x = x 를 x(sin 2x−1)=0 으로 바꿔 접점이 곧 중근이고 나머지 교점이 x=0 뿐임을 확인해 적분 구간을 확정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "곡선과 접선으로 둘러싸인 넓이; 접점이 중근"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    곱의 미분으로 접선 기울기 1, 접선은 y=x 다. 경계가 둘뿐이라 적분 구간을 교점에서 직접 정해야 하는데 x(sin 2x−1)=0 에서 x=0 과 접점 π/4(중근)뿐임이 구간을 닫는다.
    이후는 ∫x sin 2x dx 부분적분 한 번. EQV d1·M_total 6 · 벤더 상중 → ★3.
  tier: star_3
  mechanism_primary: "접선 y=x → x(sin2x−1)=0 으로 구간 [0, π/4] 확정 → ∫(x − x sin 2x)dx (부분적분)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{\pi^2}{32}-\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1125.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 배수 2(→4)와 접점 π/4(→π/8)를 바꿀 수 있음. 제약: 접점에서 cos 2x=0 이라야 기울기가 1 로 깔끔하고, 접선이 곡선 위쪽에 머무는 구간이 남아야 영역이 닫힘."
    creative: "(1) 곡선을 y=x cos 2x 로 바꿔 접점을 옮기기(★3 유지) (2) 접선 대신 원점을 지나는 직선 y=mx 로 두고 넓이를 주어 m 을 역산(★4) (3) 구간을 [0,π] 로 늘리면 영역이 둘로 갈려 부호 분할이 더해져 ★4."
```

### 유형 08 두 도형의 넓이가 같은 경우

```yaml
- id: RPM-CALC2-1126
  page: 159
  vendor_label: "유형 08 두 도형의 넓이가 같은 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    곡선 y=x√x 와 y축, 두 직선 x=1, y=a (0<a<1) 로 나뉜 두 도형의 넓이가 같을 때 상수 a. 5지선다.
  category: "넓이가 같다 → ∫₀¹(x^{3/2}−a)dx=0 → 직사각형 넓이 = 곡선 아래 넓이"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「두 도형의 넓이가 같다」 를 각각 적분해 등식을 세우는 대신 부호 있는 차의 적분이 0, 즉 a·1=∫₀¹x^{3/2}dx 로 번역"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 도형의 넓이가 같은 경우; 곡선과 가로선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 조각을 따로 적분해 같다고 놓아도 되지만, 차를 한 번에 적분하면 교점을 구할 필요 없이 ∫₀¹(x^{3/2}−a)dx=0 즉 「직사각형 넓이 = 곡선 아래 넓이」 한 줄이 된다. 이 번역이 이 유형의 전부다.
    EQV d2 하나·M_total 6, 유형 대표 출발 ★2 이고 통찰 1개라 +1 조건(2개 이상 또는 depth 3)에는 못 미쳐 ★2.
  tier: star_2
  mechanism_primary: "넓이 같음 → ∫₀¹(x^{3/2}−a)dx=0 → a·1 = (2/5) → a=2/5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: crop:fig-1126.png
  latex: latex-bank/rpm-calc2/items/1126.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "곡선의 지수 3/2(→1/2·2)와 오른쪽 경계 x=1(→x=4)을 바꿀 수 있음. 제약: 0<a<1 처럼 y=a 가 곡선의 치역 안이어야 두 도형이 생기고, 그림의 교점 위치·라벨(x=1)도 함께 수정해야 함."
    creative: "(1) 가로선 대신 세로선 x=a 로 나누기(★2, 같은 골조) (2) 곡선을 y=sin x 로 바꾸면 1128 (3) 「두 도형의 넓이의 차가 최소가 되는 a」 로 물으면 미분까지 붙어 XU d2 ★4."
```

```yaml
- id: RPM-CALC2-1127
  page: 159
  vendor_label: "유형 08 두 도형의 넓이가 같은 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=√x+k 와 x축, y축 및 직선 x=2 로 나뉜 두 도형의 넓이가 같을 때 상수 k (−√2<k<0).
  category: "x축 위·아래 넓이가 같다 → ∫₀²(√x+k)dx=0 → k 역산"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x축 아래 조각과 위 조각의 넓이가 같다는 조건을 부호 있는 정적분이 0 이라는 식으로 번역(교점을 구하지 않아도 됨)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 도형의 넓이가 같은 경우; 부호 있는 넓이의 합이 0"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    곡선이 x축을 한 번 가로지르므로 아래 조각(음의 적분)과 위 조각(양의 적분)의 절댓값이 같다는 것은 ∫₀²(√x+k)dx=0 과 같다. 교점 x=k² 을 구하지 않아도 k 가 바로 나온다.
    이 번역이 EQV d2. 매개변수로 Mₐ=2·M_total 6, 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "x축 위·아래 넓이 같음 → ∫₀²(√x+k)dx=0 → (2/3)·2√2+2k=0 → k=−2√2/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{2\sqrt{2}}{3}$'
  answer_source: "답지"
  figure: crop:fig-1127.png
  latex: latex-bank/rpm-calc2/items/1127.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "오른쪽 경계 x=2(→x=4·x=9)와 곡선 y=√x(→y=x^{1/3})을 바꿀 수 있음. 제약: k 의 범위가 곡선이 구간 안에서 x축을 정확히 한 번 가로지르도록 잡혀야 하고, 그림의 두 색칠 영역도 함께 수정."
    creative: "(1) 곡선을 y=ln x+k 로 바꾸기(★2~3, 부분적분 추가) (2) k 대신 오른쪽 경계 x=b 를 미지수로 두기(★3) (3) 「아래 조각이 위 조각의 2배」 로 바꾸면 부호 있는 적분 한 줄이 깨져 MI d2 ★3."
```

```yaml
- id: RPM-CALC2-1128
  page: 159
  vendor_label: "유형 08 두 도형의 넓이가 같은 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=sin x 와 y축, 두 직선 x=π/2, y=k (0<k<1) 로 나뉜 두 도형의 넓이가 같을 때 상수 k.
  category: "넓이가 같다 → ∫₀^{π/2}(sin x−k)dx=0 → 직사각형 = 곡선 아래 넓이"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 도형의 넓이가 같다를 차의 적분이 0 으로 번역해 교점 x=arcsin k 를 피함"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 도형의 넓이가 같은 경우; 삼각함수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조각을 따로 적분하면 교점 x=arcsin k 가 나와 손을 못 대지만, 차를 한 번에 적분하면 ∫₀^{π/2}sin x dx = k·(π/2) 로 교점이 사라진다. 이 유형이 왜 「차의 적분 0」 을 쓰는지 가장 선명하게 보여 주는 문항이다.
    EQV d2·M_total 6 · 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "넓이 같음 → ∫₀^{π/2}(sin x−k)dx=0 → 1 = k·π/2 → k=2/π"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{2}{\pi}$'
  answer_source: "답지"
  figure: crop:fig-1128.png
  latex: latex-bank/rpm-calc2/items/1128.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "오른쪽 경계 x=π/2(→x=π)와 곡선 y=sin x(→y=cos x·y=tan x)를 바꿀 수 있음. 제약: 구간에서 곡선이 단조라야 y=k 가 두 도형만 만들고, 0<k<(최댓값) 조건을 명시해야 함. 그림 라벨(π/2, k)도 함께 수정."
    creative: "(1) 구간을 [0,π] 로 늘리면 곡선이 단조가 아니어서 영역이 셋으로 갈림(MI d2 ★3) (2) 가로선 대신 직선 y=mx 로 나누기(★3, 1131 골조) (3) 「같은 넓이」 대신 「위 도형이 아래의 3배」 로 바꾸면 계수만 달라짐(★2)."
```

### 유형 09 도형의 넓이를 이등분하는 경우

```yaml
- id: RPM-CALC2-1129
  page: 160
  vendor_label: "유형 09 도형의 넓이를 이등분하는 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    곡선 y=e^x 과 x축, 두 직선 x=0, x=ln 3 으로 둘러싸인 도형의 넓이가 곡선 y=ae^{2x} 에 의해 이등분될 때 상수 a (0<a<1/3).
  category: "이등분 → 아래 조각 넓이 = 전체의 1/2 → a 의 일차방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「이등분한다」 를 ∫(e^x−ae^{2x})dx = (전체 넓이)/2 라는 한 개의 적분 등식으로 번역(두 조각을 따로 구하지 않음)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "도형의 넓이를 이등분하는 곡선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    전체 넓이는 ∫₀^{ln3}e^x dx 로 먼저 확정되고, 조건 0<a<1/3 이 y=ae^{2x} 를 구간 안에서 y=e^x 아래에 묶어 준다. 그러면 위 조각만 적분해 전체의 절반과 같다고 놓으면 a 에 대한 일차식이다.
    번역이 EQV d2. 매개변수로 Mₐ=2·M_total 7 이지만 통찰 1개라 +1 은 없고 유형 대표 → ★2.
  tier: star_2
  mechanism_primary: "전체 넓이 = 2 → 이등분 조건 ∫₀^{ln3}(e^x−ae^{2x})dx = 1 → 2−4a=1 → a=1/4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1129.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한 ln 3(→ln 2·ln 5)과 나누는 곡선 y=ae^{2x}(→y=ae^{3x}·y=ax)를 바꿀 수 있음. 제약: a 의 범위가 나누는 곡선을 구간 전체에서 y=e^x 아래에 두어야 하고(교점이 생기면 골조가 깨짐), e^{상한} 이 정수라야 a 가 유리수."
    creative: "(1) 나누는 곡선을 직선 y=ax 로 바꾸기(★2~3) (2) 「이등분」 을 「1:2 로 나눈다」 로 바꾸기(계수만 변경 ★2) (3) a 의 범위 조건을 빼면 교점 발생 여부를 따져야 해 VF d2 가 붙어 ★4."
```

```yaml
- id: RPM-CALC2-1130
  page: 160
  vendor_label: "유형 09 도형의 넓이를 이등분하는 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=1/x 과 x축, 두 직선 x=1, x=9 로 둘러싸인 도형의 넓이가 직선 x=a 에 의해 이등분될 때 상수 a (1<a<9). 5지선다.
  category: "이등분 → ∫₁^a dx/x = (1/2)∫₁⁹ dx/x → 로그 방정식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "이등분 조건을 왼쪽 조각의 적분 = 전체의 절반이라는 등식으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "도형의 넓이를 이등분하는 세로선"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세로선으로 나누므로 번역이 가장 단순하다 — ln a = (1/2)ln 9 = ln 3. 로그 법칙만 알면 적분도 한 줄이다.
    번역이 있지만 세로선이라 깊이는 d1. M_total 6 · 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "전체 = ln 9 → ∫₁^a dx/x = ln a = (1/2)ln 9 → a=3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1130.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [1,9](→[1,16]·[2,8])와 곡선 y=1/x(→y=1/x²)을 바꿀 수 있음. 제약: 1/x 이면 상한이 제곱수라야 a 가 정수로 떨어지고, 다른 곡선이면 이등분점이 무리수가 될 수 있음."
    creative: "(1) 나누는 선을 가로선 y=a 로 바꾸면 y 적분이 필요해 RT d1 ★3 (2) 「이등분」 을 「넓이 비 1:3」 으로(★2) (3) 곡선을 y=1/x 로 두고 구간을 [1,b] 로 일반화해 a 를 b 의 식(√b)으로 답하게 하면 PD d2 ★3."
```

```yaml
- id: RPM-CALC2-1131
  page: 160
  vendor_label: "유형 09 도형의 넓이를 이등분하는 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=tan x 와 x축, 직선 x=π/3 으로 둘러싸인 도형의 넓이가 직선 y=ax 에 의해 이등분될 때 상수 a (0<a<1).
  category: "전체 넓이 ln 2 → 직선 아래 조각은 삼각형 → 삼각형 넓이 = (1/2)ln 2"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "이등분 조건을 「직선 아래 조각의 넓이 = 전체의 절반」 한 식으로 번역"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "y=ax 아래 조각이 직각삼각형임을 보고 적분 대신 (1/2)·(π/3)·(aπ/3) 로 계산"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "도형의 넓이를 이등분하는 원점을 지나는 직선"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    전체 넓이는 ∫₀^{π/3}tan x dx = [−ln|cos x|] = ln 2 로 f′/f 꼴 적분 한 번. 나누는 직선이 원점을 지나므로 아래 조각은 밑변 π/3, 높이 aπ/3 인 삼각형이라 적분이 아니라 도형 넓이로 처리된다.
    번역(EQV d2)과 기하 환산(RT d1) 둘이 겹쳐 통찰 2개 → 벤더 중(★2)에서 +1 하여 ★3.
    [분류 이슈] 벤더 난이도 표시는 중인데 통찰 2개로 +1 했다 — 1단 차. 라벨은 ★3 으로 두고 기록.
  tier: star_3
  mechanism_primary: "전체 = ∫₀^{π/3}tan x dx = ln 2 → 직선 아래는 삼각형 (1/2)(π/3)(aπ/3) → = (1/2)ln 2 → a=9ln2/π²"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{9\ln 2}{\pi^2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1131.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "오른쪽 경계 x=π/3(→π/4·π/6)을 바꿀 수 있음. 제약: cos(경계) 가 1/2·√2/2 처럼 로그가 정리되는 값이어야 하고, 0<a<tan(경계)/경계 라야 직선이 곡선 아래에 머묾."
    creative: "(1) 나누는 직선을 세로선 x=a 로 바꾸면 초월방정식이 되어 근의 존재만 논하는 ★4 (2) 곡선을 y=tan x 대신 y=sec²x 로 바꾸면 전체 넓이가 √3 이 되어 삼각형 환산은 그대로(★3) (3) 「이등분하는 직선의 기울기의 범위」 로 물으면 MI+VF ★4."
```

### 유형 10 입체도형의 부피; 단면이 밑면과 평행한 경우

```yaml
- id: RPM-CALC2-1132
  page: 160
  vendor_label: "유형 10 입체도형의 부피; 단면이 밑면과 평행한 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    높이 8 cm 인 그릇에서 물의 깊이가 x cm 일 때 수면이 한 변 e^{−x/2} cm 인 정사각형일 때, 가득 채운 물의 부피.
  category: "단면 넓이 = (한 변)² → ∫₀⁸ e^{−x} dx"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "입체도형의 부피; 단면이 정사각형(밑면과 평행)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    한 변을 제곱하면 지수의 −1/2 가 −1 이 되어 ∫₀⁸e^{−x}dx 한 줄로 끝난다. 구간도 0~8 로 주어져 있고 부호·경계 함정이 없다.
    통찰 0·M_total 4 → 유형 대표 출발 ★2 에서 −1 하여 ★1. 함정은 단위(cm³)와 제곱할 때 지수 처리뿐.
    [분류 이슈] 벤더 대표문제인데 노동량이 이 범위 최소라 ★1 로 내렸다(1단 차) — 기록만 함.
  tier: star_1
  mechanism_primary: "S(x)=(e^{−x/2})²=e^{−x} → V=∫₀⁸ e^{−x} dx → 1−e^{−8}"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\left(1-\dfrac{1}{e^8}\right)\mathrm{cm}^3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1132.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "높이 8(→4·10)과 한 변 e^{−x/2}(→e^{−x}·√(x+1))을 바꿀 수 있음. 제약: 제곱한 뒤 초등적으로 적분되는 꼴이어야 하고 한 변이 구간 전체에서 양수여야 함."
    creative: "(1) 단면을 정삼각형·원으로 바꾸기(계수만 변함 ★1~2) (2) 부피를 주고 높이를 역산하면 1134 골조 ★2 (3) 「깊이가 4 cm 일 때의 부피가 전체의 몇 배인가」 로 물으면 비교 단계가 붙어 ★2."
```

```yaml
- id: RPM-CALC2-1133
  page: 160
  vendor_label: "유형 10 입체도형의 부피; 단면이 밑면과 평행한 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    높이 4 인 입체도형을 높이 x 에서 밑면과 평행하게 자른 단면이 반지름 √(16−x²) 인 원일 때, 부피가 kπ/3 이 되는 상수 k.
  category: "단면 넓이 π(16−x²) → ∫₀⁴ 적분 → kπ/3 과 계수 비교"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "입체도형의 부피; 단면이 원"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    S(x)=π(16−x²) 를 0 부터 4 까지 적분하면 다항 적분 한 줄이고, 결과를 kπ/3 꼴과 비교해 k 를 읽는다.
    통찰 0·M_total 5 지만 계수 비교 단계가 하나 더 있고 벤더 중이라 −1 없이 ★2.
  tier: star_2
  mechanism_primary: "S(x)=π(16−x²) → V=∫₀⁴ S dx = 128π/3 → k=128"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$128$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1133.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "높이 4 와 반지름 √(16−x²) 의 16(→25·9)을 함께 바꿀 수 있음. 제약: 높이가 √(상수) 이하라야 반지름이 실수로 남고, 답이 정수 k 로 떨어지도록 상수를 제곱수로."
    creative: "(1) 이 입체가 반지름 4 인 반구임을 알아채게 하고 구의 부피 공식과 비교시키면 RT d2 ★3 (2) 단면을 정사각형으로 바꾸면 π 가 사라짐(★2) (3) 높이를 a 로 두고 부피를 주어 역산하면 1134 골조 ★2."
```

```yaml
- id: RPM-CALC2-1134
  page: 160
  vendor_label: "유형 10 입체도형의 부피; 단면이 밑면과 평행한 경우"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    높이 a 인 입체도형의 높이 x 에서의 단면 넓이가 ln(x+1) 이고 부피가 6ln 6−5 일 때, 유리수 a.
  category: "∫₀^a ln(x+1)dx 를 부분적분 → 주어진 값과 꼴 비교 → a 역산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "입체도형의 부피 역산; 높이 a 결정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    부분적분으로 ∫₀^a ln(x+1)dx = (a+1)ln(a+1)−a 이고, 주어진 6ln 6−5 와 꼴을 맞추면 a+1=6 이 바로 읽힌다. 초월방정식을 풀 필요 없이 계수 비교로 끝나는 것이 이 문항의 요령이다.
    도구는 부분적분 하나뿐이라 통찰 0. 매개변수로 Mₐ=2·M_total 7, 벤더 중 → ★2.
  tier: star_2
  mechanism_primary: "V=∫₀^a ln(x+1)dx = (a+1)ln(a+1)−a → 6ln6−5 와 비교 → a+1=6 → a=5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc2/items/1134.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "단면 넓이 ln(x+1)(→ln(2x+1)·e^x)과 주어진 부피 값을 함께 바꿀 수 있음. 제약: 부피 값이 (a+1)ln(a+1)−a 꼴로 읽히도록 ln 의 인수가 정수여야 하고, a 가 유리수로 떨어져야 함."
    creative: "(1) 단면을 한 변이 √(ln(x+1)) 인 정사각형으로 서술해 제곱 단계를 추가(★2) (2) 부피를 a 의 함수로 두고 증가율을 묻기(미분까지 XU d2 ★3) (3) 높이를 주고 단면 넓이의 계수를 역산(★2)."
```

```yaml
- id: RPM-CALC2-1135
  page: 160
  vendor_label: "유형 10 입체도형의 부피; 단면이 밑면과 평행한 경우"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    반지름 6 인 반구 모양 그릇에 담긴 물의 깊이가 4 일 때의 물의 부피. 그림 있음.
  category: "구의 중심을 원점으로 좌표 설정 → 단면 원 넓이 π(36−y²) → 물이 찬 구간만 적분"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "입체 그림을 좌표평면으로 옮겨 깊이 4 를 적분 구간(구 중심에서 −6 부터 −2 까지)으로 번역"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "반구 그릇에 담긴 물의 부피(좌표 설정)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    앞 세 문항과 달리 단면 넓이가 발문에 없고 학생이 좌표를 잡아 만들어야 한다. 중심을 원점에 두면 깊이 y 에서 단면 반지름의 제곱이 36−y² 이고, 물은 그릇 바닥부터 깊이 4 까지이므로 구간이 [−6,−2] 로 정해진다.
    좌표 설정·구간 번역이 RT d2. 구간을 깊이 그대로 [0,4] 로 잡는 실수가 흔해 T-범위·T-경계 둘(Mₜ=2)·M_total 7, 벤더 상중 → ★3.
  tier: star_3
  mechanism_primary: "중심 원점 좌표 → 단면 넓이 π(36−y²) → 물 구간 y∈[−6,−2] → V=π∫(36−y²)dy"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{224}{3}\pi$'
  answer_source: "답지"
  figure: crop:fig-1135.png
  latex: latex-bank/rpm-calc2/items/1135.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 6(→3·9)과 물의 깊이 4(→2·6)를 바꿀 수 있음. 제약: 깊이가 반지름 이하여야 하고, 깊이 = 반지름이면 반구 전체라 적분이 필요 없어짐. 그림의 라벨(6, 수면)도 함께 수정."
    creative: "(1) 물을 부은 부피를 주고 깊이를 역산하면 삼차방정식이 되어 ★4 (2) 그릇을 원뿔로 바꾸면 단면 반지름이 일차식이라 ★2 (3) 「수면의 높이가 일정한 속도로 올라갈 때 부피의 변화율」 로 바꾸면 XU d2(미분) ★4."
```

### 유형 11 입체도형의 부피; 단면이 밑면과 수직인 경우

```yaml
- id: RPM-CALC2-1136
  page: 161
  vendor_label: "유형 11 입체도형의 부피; 단면이 밑면과 수직인 경우"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    곡선 y=√(4−x²) (0≤x≤2) 와 x축, y축으로 둘러싸인 도형을 밑면으로 하고 x축에 수직인 단면이 모두 직각이등변삼각형인 입체의 부피. 그림 있음.
  category: "단면 넓이 = y²/2 → ∫₀²(4−x²)/2 dx"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑면과 수직인 단면이 직각이등변삼각형인 입체의 부피"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    밑면 위의 선분 길이가 y=√(4−x²) 이고 그림에서 이 선분이 직각을 낀 변이므로 단면 넓이는 y²/2 다. 제곱하면 근호가 사라져 다항 적분 한 줄.
    핵심은 「선분 길이 → 단면 넓이」 변환이고 도구는 하나뿐이라 통찰 0. M_total 5 이지만 변환 단계가 유형의 정의라 −1 없이 유형 대표 ★2.
  tier: star_2
  mechanism_primary: "선분 길이 y=√(4−x²) → S(x)=y²/2=(4−x²)/2 → V=∫₀² S dx"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{8}{3}$'
  answer_source: "답지"
  figure: crop:fig-1136.png
  latex: latex-bank/rpm-calc2/items/1136.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름 2(→3·4)와 구간(사분원 전체 → 일부)을 바꿀 수 있음. 제약: 제곱하면 근호가 사라지는 밑면 곡선이어야 하고, 그림의 직각 표시 위치(선분이 빗변인지 직각변인지)에 따라 넓이가 y²/2 와 y²/4 로 달라지므로 그림과 문구를 함께 고쳐야 함."
    creative: "(1) 밑면 선분을 빗변으로 바꾸기(계수만 1/2→1/4 ★2) (2) 단면을 반원으로 바꾸기(π 등장 ★2) (3) 밑면을 원 전체로 두어 선분 길이가 2y 가 되게 하면 계수 처리가 함정이 되어 ★3."
```

```yaml
- id: RPM-CALC2-1137
  page: 161
  vendor_label: "유형 11 입체도형의 부피; 단면이 밑면과 수직인 경우"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    곡선 y=2√(sin x) (0≤x≤π) 와 x축으로 둘러싸인 도형을 밑면으로 하고 x축에 수직인 단면이 모두 정삼각형인 입체의 부피. 그림 있음.
  category: "단면 넓이 = (√3/4)y² = √3 sin x → ∫₀^π 적분"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑면과 수직인 단면이 정삼각형인 입체의 부피"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    한 변이 y 인 정삼각형의 넓이 (√3/4)y² 에 y²=4sin x 를 넣으면 √3 sin x 가 되어 적분이 한 줄이다. 제곱이 근호를 지우도록 밑면 곡선이 설계돼 있다.
    공식 대입 두 단계·통찰 0·M_total 5, 벤더 중 → ★2(서술형 태그 +0).
  tier: star_2
  mechanism_primary: "S(x)=(√3/4)y²=(√3/4)(4sin x)=√3 sin x → V=√3∫₀^π sin x dx"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\sqrt{3}$'
  answer_source: "답지"
  figure: crop:fig-1137.png
  latex: latex-bank/rpm-calc2/items/1137.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 2(→1·3)와 구간 [0,π](→[0,π/2])를 바꿀 수 있음. 제약: y 를 제곱했을 때 초등적으로 적분되는 꼴(sin x·e^x 등)이어야 하고, 구간에서 sin x≥0 이라야 √ 가 정의됨."
    creative: "(1) 단면을 정사각형·반원으로 바꾸기(계수만 변함 ★2) (2) 곡선을 y=2√(cos x) 로 바꿔 구간을 [−π/2,π/2] 로(대칭 SYM d1 ★2~3) (3) 부피를 주고 계수를 역산(★2)."
```

```yaml
- id: RPM-CALC2-1138
  page: 161
  vendor_label: "유형 11 입체도형의 부피; 단면이 밑면과 수직인 경우"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    곡선 y=e^{√(x+1)} 과 x축, 두 직선 x=0, x=3 으로 둘러싸인 도형을 밑면으로 하고 x축에 수직인 단면이 모두 정사각형인 입체의 부피. 그림 있음.
  category: "단면 넓이 y²=e^{2√(x+1)} → t=√(x+1) 치환 → 부분적분"
  M: {s: 2, k: 3, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "밑면과 수직인 단면이 정사각형인 입체의 부피; 치환·부분적분"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    단면 넓이는 y²=e^{2√(x+1)} 로 바로 나오지만 적분이 무겁다. t=√(x+1) 로 치환하면 dx=2t dt 라 ∫ 2t e^{2t} dt 가 되고 부분적분이 한 번 더 필요하다.
    골조 자체는 1136·1137 과 같고 통찰은 없다 — 올라간 것은 계산 마찰뿐이다. M_total 7 · 벤더 상중 → ★3.
    [분류 이슈] 통찰 0 인데 계산 마찰만으로 ★3 — v3.8 §2.11 의 질 저하 YELLOW 신호에 해당하므로 기록.
  tier: star_3
  mechanism_primary: "S(x)=y²=e^{2√(x+1)} → t=√(x+1) 치환(dx=2t dt) → ∫₁² 2t e^{2t} dt → 부분적분"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{3}{2}e^4-\dfrac{1}{2}e^2$'
  answer_source: "답지"
  figure: crop:fig-1138.png
  latex: latex-bank/rpm-calc2/items/1138.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 [0,3](→[0,8])과 지수 안의 √(x+1)(→√x·√(2x+1))을 바꿀 수 있음. 제약: 치환 후 상·하한이 정수라야 e 의 정수 거듭제곱으로 정리되고, x+1≥0 이 구간 전체에서 성립해야 함."
    creative: "(1) 단면을 정삼각형으로 바꾸면 계수 √3/4 만 붙음(★3 유지) (2) 곡선을 y=e^{x/2} 로 바꾸면 치환이 사라져 ★2 로 내려감(계산 마찰이 ★ 를 지탱하고 있다는 증거) (3) 부피를 주고 상한을 역산하면 초월방정식 ★4."
```

## 표본 판정 요약 (33문)

- ★ 분포: ★1 2 (1107·1132) · ★2 24 · ★3 7 (1109·1113·1124·1125·1131·1135·1138) · ★4 0 · ★5 0
- 통찰형 7 (1124·1126·1127·1128·1129·1131·1135) · 절차형 26 · premium 0
- 통찰이 잡힌 문항 12 · 통찰 유형 분포: I-EQV 6 (1125·1126·1127·1128·1129·1130·1131 중 EQV 항목) · I-RT 5 (1119·1122·1123·1131·1135) · I-BW 1 (1124) · SC/VF/SYM/XU/PD/MI 0
- 벤더 신호: 유형 구역 33문(대표문제 9 · 중하 1 · 중 17 · 상중 6 · 서술형 태그 3 · 기출 0)
- type_hint 상위: 「입체도형의 부피(단면 넓이 → 적분)」 7 · 「넓이가 같다·이등분한다 조건의 적분 번역」 6 · 「곡선과 접선으로 둘러싸인 넓이」 4 · 「곡선과 y축 사이의 넓이(역함수 전환)」 4 · 「두 곡선 사이의 넓이(상하 교체)」 4
- 그림: 8문(`crop:fig-1114.png` · `crop:fig-1126.png` · `crop:fig-1127.png` · `crop:fig-1128.png` · `crop:fig-1135.png` · `crop:fig-1136.png` · `crop:fig-1137.png` · `crop:fig-1138.png`)
- 함정 분포: T-부호(부호·상하 교체) 9문 · T-범위(적분 구간 결정) 대부분 · Mₜ=2 는 1112·1135 둘

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC2-1112 | 벤더 「중」이지만 y축 왼쪽 조각이 상쇄되는 부호 함정이 있어 체감은 ★3 쪽. 도구는 표준이라 라벨 ★2 유지 | ★2 / ★3 |
| RPM-CALC2-1131 | 벤더 「중」인데 통찰 2개(EQV d2 + RT d1)로 +1 하여 ★3 — 1단 차 | ★2 / ★3 |
| RPM-CALC2-1132 | 유형 대표문제인데 한 줄 적분·M_total 4 로 이 범위 최소 노동량 → ★1 로 −1 (대표 신호와 1단 차) | ★1 / ★2 |
| RPM-CALC2-1138 | 통찰 0 인데 치환+부분적분 계산 마찰만으로 ★3 — v3.8 §2.11 질 저하 YELLOW 신호 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세울 유형**: (1) 「넓이 조건의 적분 번역」 — 유형 08·09 의 6문(1126~1131)은 곡선 종류와 무관하게 「두 넓이가 같다·이등분한다 → 부호 있는 차의 적분 = 0 또는 절반」 한 골조다. 이 범위에서 통찰형 7문 중 6문이 여기 몰려 있으므로 base ★ 를 따로 매길 가치가 있다. (2) 「곡선 밖의 점에서 그은 접선」 — 1124 만 접점 역추적(BW)이 들어가 1122·1123 과 구조가 다르다. 접점이 주어진 유형과 분리해야 한다. (3) 「단면 넓이를 만들어 적분하는 부피」 — 유형 10·11 의 7문(1132~1138)은 단면이 평행인지 수직인지와 무관하게 「선분 길이 또는 좌표 → S(x) → ∫S dx」 하나다.
- **통합해도 될 유형**: 유형 03~06(1106~1121, 16문)은 모두 「적분 구간과 위·아래(좌·우)를 정한 뒤 |차| 를 적분」 한 골조이고, x 적분이냐 y 적분이냐·경계가 축이냐 곡선이냐만 다르다. 카탈로그에서는 하나의 유형에 「부호 분할 있음/없음」·「y 에 대한 적분」 변수로 두는 편이 실제 변별과 맞는다. 유형 10 과 11 도 단면 방향만 다르므로 통합 후보다.
- **★ 4~5 슬롯 부재**: 이 범위에는 SC/VF/SYM/XU 통찰이 하나도 없어 ★4 이상이 나오지 않았다. 변형 단계에서 ★4 를 만들려면 variation_notes.creative 에 적어 둔 「범위 조건 제거 후 케이스 기각(VF)」·「부피·넓이를 주고 초월방정식 역산」·「넓이의 최댓값(미분 결합 XU)」 세 갈래를 쓰는 것이 이 단원에서 자연스럽다.
