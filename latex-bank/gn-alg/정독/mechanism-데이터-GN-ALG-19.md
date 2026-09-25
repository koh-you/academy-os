---
name: mechanism-데이터-GN-ALG-19
description: 개념원리 대수 19 삼각함수를 포함한 식의 최대·최소(1/1 · 180~182쪽 180-426~182-430 · 7문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 대수 (22개정 · 학생용) · 전사본 latex-bank/gn-alg
  section: 19 삼각함수를 포함한 식의 최대·최소
  unit_code: ALG-19
  part: "1/1"
  extract_range: "180~182쪽 · 180-426~182-430"
  total_problems: 7
  unit_total: 7
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 insights 의 effective_depth 평균(통찰 없으면 0.00). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-alg/items/<id>.tex
  image_source: latex-bank/gn-alg/figures/ (crops.json)
---

# 개념원리 대수 · 19 삼각함수를 포함한 식의 최대·최소 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 대수 19단원 「삼각함수를 포함한 식의 최대·최소」 전체(180~182쪽 · 180-426~182-430 · 7문항)를 다룬다. 구역은 둘이다. **개념원리 익히기** 2문(180-426·180-427 · 빈칸을 채우며 풀이 순서를 그대로 따라가는 유도형 드릴이고 두 문항 모두 치환 뒤 그래프 그림이 붙는다), **필수·발전 예제** 5문(tag 「필수」 예제 둘 181-e13·182-e14 와 그 뒤에 붙는 tag 「확인체크」 유제 셋 181-428·181-429·182-430)이다. 개념원리 고등은 구역이 곧 난이도 층이어서 개념원리 익히기 ★1 · 필수 예제 ★2 를 출발점으로 삼고 M_total·통찰로 ±1 을 조정했다. 예제 구역의 「확인체크」는 벤더 신호만 보면 ★1 출발이지만 실제로는 바로 앞 필수 예제의 유제여서 대응 예제와 같은 출발점을 썼다(GN-ALG-08 과 같은 결정 · 분류 이슈 표에 한 줄로 남겼다).

단원의 도구는 둘뿐이다. ① **한 종류의 삼각함수로 통일** — 삼각함수의 변환 공식으로 각을 옮기고(cos(x-π/2)=sin x, cos(x+π)=-cos x 등) 항등식 sin²x=1-cos²x 로 차수를 맞춘다. ② **sin x=t 또는 cos x=t 치환과 정의역 -1≤t≤1 제한**. 통일된 뒤의 꼴이 일차식(181쪽 예제)이냐 이차식·분수식(182쪽 예제)이냐가 두 필수 예제의 구분이고, 절댓값이 끼면 절댓값 안의 부호를 t 범위로 판정하는 단계가 하나 더 붙는다. 그래서 이 범위에서 진짜 변별이 되는 지점은 셋이다 — 절댓값·이차식의 꼭짓점이 [-1,1] **안**에 있어서 최대·최소가 끝점이 아닌가(181-428 ⑵ · 182-430 ⑶), 분수식을 상수+분리 꼴로 옮길 수 있는가(182-e14 ⑵ · 182-430 ⑵), 최댓값·최솟값이라는 결과 조건에서 미정계수를 역추적할 수 있는가(181-429). 통찰 라벨은 I-EQV 에 집중되고 I-BW 가 한 번 붙으며 나머지는 절차형이다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 가 변하는 지점)를 채웠다. 그림 문항은 180-426 · 180-427 둘이며 모두 치환 뒤 y=f(t) 의 그래프를 -1≤t≤1 에서 보여 주는 보조 그림이라 골조·답에 영향을 주지 않는다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-ALG-180-426
  page: 180
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    y=|sin x-2|+1 의 최댓값·최솟값을 구하는 과정의 빈칸 채우기.
    sin x=t 치환식, t 의 범위, t≥2 와 t<2 에서의 두 식, 최대·최소를 주는 t 와 그 값을 차례로 묻는다.
  category: '삼각함수 치환 → 정의역 제한 → 절댓값 분기 → 제한 구간의 최대·최소'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값을 포함한 삼각함수의 최대·최소(sin x=t 치환)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    빈칸이 풀이 순서를 그대로 제시하는 유도형이라 학생이 고를 것이 없다. -1≤t≤1 은 항상 2 보다
    작으므로 절댓값은 y=-t+3 한 갈래로 확정되고, t≥2 칸은 실제로는 쓰이지 않는 형식 칸이다.
    감소함수이므로 최댓값이 왼쪽 끝, 최솟값이 오른쪽 끝. 익히기 구역 ★1 출발 · 통찰 0 · M_total 5 → ★1 유지.
  tier: star_1
  mechanism_primary: 'sin x=t 치환 → -1≤t≤1 → t<2 이므로 y=-t+3 → t=-1 에서 최댓값 4, t=1 에서 최솟값 2'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$|t-2|+1$, $-1$, $1$, $t-1$, $-t+3$, $-1$, $4$, $1$, $2$'
  answer_source: "답지"
  figure: "crop:fig-180-426.png"
  latex: latex-bank/gn-alg/items/180-426.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "절댓값 안의 상수 2 와 바깥 상수 1 을 바꿀 수 있다. 제약: 안 상수를 1 이상으로 두어야 [-1,1] 전체에서 절댓값이 한 갈래로 풀려 유도형 빈칸 구조가 유지된다. 0<c<1 로 내리면 꼭짓점이 구간 안으로 들어와 최솟값이 끝점이 아니게 되므로 빈칸 배치 자체를 다시 짜야 한다."
    creative: "(1) sin x 를 sin 2x·sin(x+π/3)·cos x 로 바꾸기 — t 범위가 같아 ★1 유지 (2) 빈칸을 없애고 최댓값·최솟값만 묻는 완성형으로 바꾸면 ★2 (3) 절댓값 안 상수를 0<c<1 로 내려 꼭짓점을 구간 안에 넣으면 분기 판정이 살아나 ★2 (4) 최댓값·최솟값을 주고 상수를 역추적하게 하면 I-BW 가 붙어 ★3."
```

```yaml
- id: GN-ALG-180-427
  page: 180
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    y=-|cos x-3|+2 의 최댓값·최솟값을 구하는 과정의 빈칸 채우기.
    cos x=t 치환식, t 의 범위, t≥3 과 t<3 에서의 두 식, 최대·최소를 주는 t 와 그 값을 차례로 묻는다.
  category: '삼각함수 치환 → 정의역 제한 → 절댓값 분기 → 바깥 음부호로 증감 반전 후 최대·최소'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "절댓값을 포함한 삼각함수의 최대·최소(cos x=t 치환 · 절댓값 앞 음부호)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    426 의 짝으로, 절댓값 앞에 음부호가 붙어 증감이 뒤집히는 것만 다르다. -1≤t≤1 은 항상 3 보다
    작아 |t-3|=-t+3 한 갈래이고 앞의 음부호 때문에 y=t-1 증가함수가 되어 최대·최소 끝점이 426 과 반대다.
    부호 실수(T-부호)가 유일한 함정이고 통찰은 없다. 익히기 구역 ★1 출발 · M_total 5 → ★1 유지.
  tier: star_1
  mechanism_primary: 'cos x=t 치환 → -1≤t≤1 → t<3 이므로 y=t-1 → t=1 에서 최댓값 0, t=-1 에서 최솟값 -2'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-|t-3|+2$, $-1$, $1$, $-t+5$, $t-1$, $1$, $0$, $-1$, $-2$'
  answer_source: "답지"
  figure: "crop:fig-180-427.png"
  latex: latex-bank/gn-alg/items/180-427.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "절댓값 안 상수 3, 바깥 상수 2, 절댓값 앞 계수 -1 을 바꿀 수 있다. 제약: 안 상수를 1 이상으로 두어야 한 갈래로 풀리고, 앞 계수의 부호가 최대·최소 끝점을 결정하므로 의도한 쪽을 정한 뒤 정답 빈칸을 맞춘다."
    creative: "(1) 앞 계수를 -2, -3 처럼 키워 폭만 늘리기(★1 유지) (2) cos 를 cos 2x·sin x 로 교체(★1 유지) (3) 절댓값 안 상수를 구간 안으로 내려 꼭짓점 최댓값이 생기게 하면 ★2 (4) 426 과 427 을 합쳐 두 함수의 최댓값의 합을 묻는 형태로 만들면 부호 판정 두 번 → ★2~3."
```

### 필수·발전 예제

```yaml
- id: GN-ALG-181-e13
  page: 181
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 다음 함수의 최댓값과 최솟값을 구하는 문제.
    ⑴ y=2 sin x-cos(x-π/2)+4 ⑵ y=|sin x-1|-2.
  category: '삼각함수 변환으로 한 문자 통일 → t 치환과 정의역 제한 → 일차식·절댓값의 끝점 최대·최소'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수를 포함한 함수의 최대·최소 — 일차식의 꼴"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 cos(x-π/2)=sin x 로 옮기면 y=sin x+4 한 줄이고, ⑵ 는 -1≤t≤1 에서 t≤1 이므로
    |t-1|=1-t 한 갈래가 되어 y=-t-1. 둘 다 표준 변환 공식 대입이라 통찰 라벨은 붙지 않는다.
    통찰 0·M_total 5 라 v3.8 산식으로는 −1 후보이지만, 이 단원의 대표 골조(통일 → 치환 → 범위)를
    처음 제시하는 필수 예제 자리라 구역 출발점 ★2 를 유지했다. [분류 이슈] 산식 후보는 ★1.
  tier: star_2
  mechanism_primary: '변환 공식으로 sin x 하나로 통일 → sin x=t, -1≤t≤1 → 일차식·절댓값 모두 t 의 감소함수라 끝점에서 최대·최소'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 최댓값: $5$, 최솟값: $3$ ⑵ 최댓값: $0$, 최솟값: $-2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/181-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 계수 2·상수 4 와 이동각 π/2, ⑵ 의 절댓값 안 상수 1 과 바깥 상수 -2 를 바꿀 수 있다. 제약: ⑴ 은 변환 뒤 한 문자만 남아야 하므로 두 항의 각이 sin↔cos 로 서로 옮겨지는 조합(x±π/2, π±x, -x)이어야 하고, 두 항의 계수가 상쇄돼 0 이 되지 않게 한다. ⑵ 는 절댓값 안 상수를 1 이상으로 두어야 한 갈래로 풀린다."
    creative: "(1) 두 항을 sin x 와 cos(π-x) 처럼 다른 변환쌍으로 주기(★2 유지) (2) 계수 부호를 뒤집어 최대·최소 끝점이 서로 바뀌게 하기(★2 유지) (3) ⑵ 의 절댓값 안 상수를 0<c<1 로 내려 꼭짓점을 구간 안에 넣으면 최솟값이 끝점이 아니게 되어 ★3 (4) 최댓값·최솟값을 주고 계수를 역추적하게 하면 I-BW 가 붙어 ★3(=181-429 골조)."
```

```yaml
- id: GN-ALG-181-428
  page: 181
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(유제)"
  summary: |
    ⑴~⑵ 다음 함수의 최댓값과 최솟값을 구하는 문제.
    ⑴ y=3 cos(x+π)-sin(x-π/2)-3 ⑵ y=|2-3 cos x|+1.
  category: '삼각함수 변환으로 한 문자 통일 → 치환·정의역 제한 → 절댓값 꼭짓점이 구간 안인지 판정'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼각함수를 포함한 함수의 최대·최소 — 일차식·절댓값의 꼴"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 cos(x+π)=-cos x, sin(x-π/2)=-cos x 로 두 항이 같은 문자가 되어 y=-2 cos x-3 한 줄.
    ⑵ 가 이 범위에서 426·427 과 갈리는 유일한 지점이다 — 2-3t 의 값 범위가 [-1,5] 라 절댓값
    꼭짓점 t=2/3 이 구간 안에 들어오고 최솟값이 끝점이 아니라 꼭짓점에서 나온다(T-범위·T-경계).
    착안이 아니라 범위 확인 절차라 통찰 라벨 대신 Mₜ 를 2 로 올렸다. 대응 예제 e13 과 같은 ★2.
  tier: star_2
  mechanism_primary: '변환 공식으로 cos x 하나로 통일 → cos x=t, -1≤t≤1 → ⑴ 일차식은 끝점 / ⑵ 절댓값 꼭짓점 t=2/3 이 구간 안이므로 최솟값은 꼭짓점, 최댓값은 t=-1'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 최댓값: $-1$, 최솟값: $-5$ ⑵ 최댓값: $6$, 최솟값: $1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/181-428.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 계수 3·상수 -3, ⑵ 의 2 와 3 을 바꿀 수 있다. 제약: ⑵ 는 절댓값 안 2-3t 의 영점 t=2/3 이 [-1,1] 안에 있어야 이 문항의 핵심(최솟값이 끝점이 아님)이 유지되므로 |상수/계수|<1 을 지킨다. |상수/계수|>1 로 만들면 426·427 과 같은 한 갈래 문제로 내려간다. ⑴ 은 두 항의 계수가 상쇄되지 않게 둔다."
    creative: "(1) 절댓값 안 계수를 줄여 꼭짓점을 구간 밖으로 보내면 ★1~2 로 하강 (2) 절댓값 바깥에 음수 계수를 붙여 최대·최소를 뒤집으면 부호 함정이 더해져 ★3 (3) cos 를 cos 2x 로 바꿔도 t 범위가 같아 ★2 유지 (4) 최댓값·최솟값을 주고 계수를 역추적하면 ★3(=181-429 골조) (5) 절댓값 두 개를 더한 꼴로 만들면 구간 분할이 늘어 I-MI 가 붙고 ★4."
```

```yaml
- id: GN-ALG-181-429
  page: 181
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(유제)"
  summary: |
    y=a|sin 2x+2|+b 의 최댓값이 4, 최솟값이 2 일 때(a>0) 상수 a, b 에 대하여 ab 의 값을 구하는 문제.
  category: '절댓값 안의 부호 확정 → 치환·범위 → 최대·최소 조건을 a, b 의 연립방정식으로 역추적'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: 'sin 2x+2 의 값 범위가 [1,3] 이라 항상 양수임을 확인해 절댓값을 그대로 벗기고 t 에 대한 일차식으로 동치 변환'
    - step: 3
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '최댓값·최솟값이라는 결과 조건에서 a>0 로 대응 끝점을 먼저 정한 뒤 3a+b=4, a+b=2 로 a, b 를 역추적'
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수의 최대·최소로 미정계수 구하기(절댓값 · a>0 부호 조건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    절댓값 안이 [1,3] 로 항상 양수라 절댓값이 사실상 허수아비이고, 이를 알아채면 y=a(sin 2x+2)+b
    라는 일차식이 된다. 남는 일은 a>0 이므로 최댓값이 sin 2x=1, 최솟값이 sin 2x=-1 쪽임을 먼저
    정하고 두 식을 연립하는 역추적이다(부호를 정하지 않고 연립하면 답이 갈린다).
    통찰 2개(EQV·BW 각 d1)로 확인체크 출발점 ★2 에서 +1 → ★3.
    [분류 이슈] 벤더 태그는 앞 유제 428 과 같은 「확인체크」인데 역방향 구조라 한 단 위로 판정했다.
  tier: star_3
  mechanism_primary: 'sin 2x+2>0 이므로 y=a(sin 2x+2)+b → -1≤sin 2x≤1 과 a>0 → 최댓값 3a+b=4, 최솟값 a+b=2 → a=1, b=1 → ab=1'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/181-429.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최댓값 4·최솟값 2, 절댓값 안 상수 2, 각의 계수 2(sin 2x)를 바꿀 수 있다. 제약: 절댓값 안 상수를 1 이상으로 두어야 절댓값이 통째로 벗겨져 이 골조가 유지되고, 최댓값-최솟값 차가 2a 이므로 차를 짝수로 두어야 a 가 정수로 떨어진다. a>0 조건은 유지하거나 a<0 으로 뒤집되 반드시 명시한다."
    creative: "(1) a<0 으로 바꿔 대응 끝점이 뒤집히게 하면 ★3 유지 (2) a 의 부호를 주지 않고 두 경우를 모두 따지게 하면 I-MI 가 더해져 ★4 후보 (3) 절댓값 안 상수를 0<c<1 로 내려 꼭짓점을 구간 안에 넣으면 최솟값이 b 로 고정되어 연립 구조 자체가 바뀌고 ★4 (4) ab 대신 a+b·a-b 를 묻는 것은 골조 변화 없음(★3 유지) (5) 절댓값 대신 sin²x 꼴(182-e14 ⑴ 골조)에 미정계수를 얹으면 이차함수 꼭짓점 위치 판정까지 붙어 ★4."
```

```yaml
- id: GN-ALG-182-e14
  page: 182
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 다음 함수의 최댓값과 최솟값을 구하는 문제.
    ⑴ y=2 sin²x+4 cos x+1 ⑵ y=(-2 sin x+5)/(sin x+2).
  category: '항등식으로 한 문자 통일·분수식 분리 → 치환과 정의역 제한 → 제한 구간의 이차함수·단조 유리함수 최대·최소'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '분수식을 y=-2+9/(t+2) 로 분리해 t+2 의 범위 [1,3] 만으로 단조성에서 최대·최소를 읽도록 동치 변환'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수를 포함한 함수의 최대·최소 — 이차식·분수식의 꼴"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 sin²x=1-cos²x 로 통일해 t=cos x 의 이차함수 -2(t-1)²+5 를 [-1,1] 에서 보는 표준 절차이고
    꼭짓점이 마침 오른쪽 끝점과 겹친다. 변별은 ⑵ 로, 분수식을 상수+분리 꼴로 옮겨야 단조성만으로
    범위를 읽을 수 있다(그대로 두면 y 에 대해 t 를 풀어 범위를 대입하는 우회가 필요).
    통찰 1(EQV d1)·M_total 6 이고 일차식 예제(e13 ★2)보다 도구가 하나 더 들어가 필수 예제
    출발점 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: '⑴ sin²x=1-cos²x 로 통일 → t=cos x, -1≤t≤1 의 이차함수 최대·최소 / ⑵ y=-2+9/(t+2) 로 분리 → 1≤t+2≤3 에서 단조 감소이므로 양 끝점이 최대·최소'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ 최댓값: $5$, 최솟값: $-3$ ⑵ 최댓값: $7$, 최솟값: $1$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-alg/items/182-e14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 계수 2·4·1, ⑵ 의 -2·5·2 를 바꿀 수 있다. 제약: ⑴ 은 통일 뒤 이차함수의 꼭짓점 t 좌표가 [-1,1] 안인지 밖인지에 따라 최대·최소 위치가 달라지므로 의도한 쪽을 정해 계수를 잡는다. ⑵ 는 분모 sin x+c 의 c 를 1 보다 크게 두어야 [-1,1] 에서 분모가 0 이 되지 않고(c=1 이면 t=-1 에서 정의되지 않음), 분자·분모가 비례하면 상수함수가 되니 피한다."
    creative: "(1) ⑴ 의 일차항 계수를 줄여 꼭짓점을 구간 안으로 넣으면 최댓값이 끝점이 아니게 되어 함정이 추가됨(★3 유지) (2) cos²x 를 남기고 sin x 로 통일해 방향을 뒤집기(★3 유지) (3) ⑵ 의 분자·분모를 서로 다른 삼각함수로 주면 통일 단계가 먼저 필요해 ★4 (4) 최댓값·최솟값을 주고 계수를 역추적하면 I-BW 가 더해져 ★4 (5) 정의역을 0≤x≤π 처럼 제한하면 t 범위가 좁아져 꼭짓점 포함 여부 판정이 필수가 되고 ★4."
```

```yaml
- id: GN-ALG-182-430
  page: 182
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크(유제)"
  summary: |
    ⑴~⑶ 다음 함수의 최댓값과 최솟값을 구하는 문제.
    ⑴ y=-cos²x+2 sin x+1 ⑵ y=2 sin x/(sin x+2) ⑶ y=sin(x+π/2)-cos²(x+π).
  category: '각 변환·항등식으로 한 문자 통일 → 치환과 정의역 제한 → 이차함수(꼭짓점 안/밖)·분수식 분리의 최대·최소'
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '⑵ 의 분수식을 y=2-4/(t+2) 로 분리해 t+2 의 범위 [1,3] 만으로 단조성에서 최대·최소를 읽도록 동치 변환'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼각함수를 포함한 함수의 최대·최소 — 이차식·분수식의 꼴"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    소문항 셋이 e14 의 두 도구에 각 변환을 하나 더 얹은 유제다. ⑴ 은 cos²x=1-sin²x 로 통일해
    (t+1)²-1 이고 꼭짓점 t=-1 이 왼쪽 끝점과 겹친다. ⑶ 은 sin(x+π/2)=cos x, cos(x+π)=-cos x 로
    통일해 -t²+t 가 되는데 여기서는 꼭짓점 t=1/2 이 구간 안이라 최댓값이 끝점이 아니다(T-범위·T-경계).
    ⑵ 는 e14 ⑵ 와 같은 분리 변환. 통찰 1(EQV d1)·M_total 8·소문항 3개 → 대응 예제와 같은 ★3.
    [분류 이슈] 소문항을 쪼개면 ⑴⑵ 는 ★2, ⑶ 은 ★3 으로 갈린다.
  tier: star_3
  mechanism_primary: '각 변환·항등식으로 한 문자 통일 → t 치환, -1≤t≤1 → ⑴⑶ 은 이차함수(꼭짓점이 구간 안인지 확인) · ⑵ 는 y=2-4/(t+2) 분리 후 끝점'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ 최댓값: $3$, 최솟값: $-1$ ⑵ 최댓값: $\dfrac{2}{3}$, 최솟값: $-2$ ⑶ 최댓값: $\dfrac{1}{4}$, 최솟값: $-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-alg/items/182-430.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 계수 2·상수 1, ⑵ 의 2·2, ⑶ 의 이동각 π/2·π 를 바꿀 수 있다. 제약: ⑶ 은 -t²+t 의 꼭짓점 t=1/2 이 [-1,1] 안에 들어오는 것이 이 소문항의 핵심이므로 일차항 계수의 절댓값을 2 미만으로 유지한다. ⑵ 의 분모 상수는 1 보다 커야 분모가 0 이 되지 않는다. ⑴ 은 꼭짓점이 왼쪽 끝점과 겹치는 배치라 계수를 바꾸면 최솟값 위치가 달라진다."
    creative: "(1) ⑶ 의 각 이동을 x-π/2 · π-x 등 다른 변환쌍으로 교체(★3 유지) (2) ⑴ 의 꼭짓점을 구간 안으로 옮겨 ⑶ 과 같은 구조로 통일하면 난이도가 평탄해짐(★3 유지) (3) ⑵ 의 분자·분모를 서로 다른 삼각함수로 주면 통일 단계가 추가돼 ★4 (4) 소문항 하나만 남기고 최댓값·최솟값을 주어 계수를 역추적하게 하면 I-BW 가 붙어 ★3~4 (5) 정의역을 한 주기 미만으로 제한해 t 가 [-1,1] 전체를 훑지 못하게 하면 범위 재산정이 필수가 되어 ★4."
```

## 표본 판정 요약 (7문)

- ★ 분포: ★1 2 · ★2 2 · ★3 3 · ★4 0 · ★5 0
- 통찰형 3(181-429 · 182-e14 · 182-430) · 절차형 4 · premium 0
- 통찰 라벨 분포: I-EQV 3 · I-BW 1 (총 4 라벨 · depth 는 모두 1 · depth_score 최대 1.00). SC/VF/SYM/XU 는 한 번도 나오지 않아 ★4·★5 자격 문항이 없다.
- M_total 분포: 5 세 문 · 6 세 문 · 8 한 문 (평균 5.9). Mₜ 가 2 인 두 문(181-428 · 182-430)은 모두 「꼭짓점이 구간 안」 함정이다.
- type_hint 분포: 「이차식·분수식의 꼴」 2 · 「절댓값을 포함한 삼각함수의 최대·최소(sin x=t 치환)」 1 · 「절댓값 … (cos x=t 치환 · 절댓값 앞 음부호)」 1 · 「일차식의 꼴」 1 · 「일차식·절댓값의 꼴」 1 · 「최대·최소로 미정계수 구하기」 1
- 대상층: 하위권 2 · 중하위권 2 · 중위권 3
- 그림: 2문(`crop:fig-180-426.png` · `crop:fig-180-427.png`) — 둘 다 치환 뒤 y=f(t) 의 그래프를 -1≤t≤1 에서 보여 주는 보조 그림이라 골조·답에 영향이 없다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-ALG-181-428 · 181-429 · 182-430 | 벤더 태그 「확인체크」는 신호만 보면 ★1 출발이지만 실제로는 바로 앞 필수 예제의 유제여서 대응 예제와 같은 출발점(★2 · ★3)을 썼다(GN-ALG-08 과 같은 결정) | 각 ★2 / ★3 |
| GN-ALG-181-e13 | 통찰 0·M_total 5 라 v3.8 산식의 −1 후보(★1)이지만, 단원의 대표 골조를 처음 제시하는 필수 예제 자리라 구역 출발점 ★2 를 유지 | ★1 / ★2 |
| GN-ALG-181-429 | 앞 유제 428 과 같은 「확인체크」인데 최대·최소 → 미정계수 역추적 구조라 통찰 2개(EQV·BW)로 +1 해 ★3. 벤더 신호만 보면 ★2 | ★2 / ★3 |
| GN-ALG-182-430 | 소문항 3개를 한 블록으로 묶어 Mₛ=3 으로 매김. 쪼개면 ⑴⑵ 는 ★2, 꼭짓점이 구간 안인 ⑶ 만 ★3 | ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위의 type_hint 는 결국 한 줄기(「삼각함수를 포함한 함수의 최대·최소」)이고, 개념원리 자신의 예제 제목이 이미 ① **일차식의 꼴** ② **이차식·분수식의 꼴** 로 나눠 두었다. 이 둘은 따로 세운다.
- **절댓값이 붙는 꼴은 일차식 유형의 하위 변종이 아니라 별도 유형으로 세우는 편이 낫다.** 실제 변별을 만드는 것은 절댓값 꼭짓점이 [-1,1] **안**인지 **밖**인지 하나뿐이고(180-426·427 은 밖 → ★1, 181-428 ⑵ 는 안 → ★2), 이 판정이 일차식 유형에는 존재하지 않는다.
- **분수식은 이차식과 통합해도 골조상 무리가 없지만**(도구가 「상수+분리 꼴로 옮기기」 하나뿐) 통합하면 base ★ 가 이차식 쪽 평이한 인스턴스에 끌려 내려간다. 182-e14 ⑵ · 182-430 ⑵ 처럼 분리 변환을 못 하면 우회가 길어지는 사례가 이미 둘이므로 분리 유지를 권한다.
- **181-429 의 「최대·최소를 주고 미정계수를 역추적」은 이 단원 고유 변종이 아니라 지수·로그·이차함수에도 그대로 나타나는 가로지르는 유형**이다. 단원별로 중복 정의하지 말고 상위 유형 하나를 세운 뒤 단원별 인스턴스를 매다는 편이 낫다.
- 180-426·427 같은 **빈칸 유도형은 유형이 아니라 제시 형식**이므로 카탈로그 유형을 따로 만들지 말고 해당 유형의 ★1 난이도 슬롯으로 처리한다.
- 이 단원만으로는 ★4·★5 슬롯을 만들 재료가 없다(저노출 통찰 SC/VF/SYM/XU 부재). ★4 이상이 필요하면 「정의역 제한 + 미정계수 역추적」이나 「두 삼각함수가 섞여 통일이 선행되는 분수식」처럼 이 범위의 variation_notes.creative 에 적어 둔 확장 경로를 써야 한다.
