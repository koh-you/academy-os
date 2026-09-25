---
name: mechanism-데이터-GN-CM1-25
description: 개념원리 공통수학1 25 이차부등식(1/1 · 207~210쪽 11문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1(22개정) · 전사본 latex-bank/gn-cm1
  section: 25 이차부등식
  unit_code: "25"
  part: "1/1"
  extract_range: "207~210쪽 · 207-e12~210-446"
  total_problems: 11
  unit_total: 11
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (crops.json)
---

# 개념원리 공통수학1 · 25 이차부등식 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 공통수학1 207~210쪽의 25단원 이차부등식 전 11문항(필수 예제 4 · 확인체크 7)을 다룬다. 전사본의 group section 이 「필수·발전 예제」 하나뿐이라 절도 하나다. 개념원리 고등의 난이도 신호는 구역과 예제 태그다 — 「확인체크」는 개념 확인이라 ★1 출발, 「필수」 예제는 ★2 출발이다. 다만 **이 단원의 확인체크는 바로 앞 필수 예제의 쌍둥이 문항**이어서(문자 라벨화·소문항 추가로 오히려 더 무겁다) ★1 출발 신호가 실제 체감과 자주 어긋난다. 그래서 ±1 조정 규칙을 이렇게 적용했다 — 통찰 0·M_total ≤ 5 면 −1, depth 2 이상 통찰이 1개면 그 골조가 단원 표준 절차가 아닐 때만 +1, 통찰 2개 이상이면 +1. 조정 결과가 벤더 신호와 2단 벌어진 문항은 라벨을 억지로 맞추지 않고 파일 끝 표에 기록했다.

이 단원의 골조는 네 갈래다 — ① 그래프를 읽어 대소·곱의 부호 구간 쓰기(207쪽) ② 판별식 부호에 따른 해의 네 형태(해 없음·한 점 제외·모든 실수·한 점)로 분류하기(208쪽) ③ 절댓값을 포함한 이차부등식을 $|x|$ 또는 $|x-1|$ 한 문자에 대한 이차부등식으로 동치 변환하기(209쪽) ④ 실생활 상황을 이차부등식으로 모델링하고 범위 제약으로 되걸러내기(210쪽). 함정은 거의 전부 T-부호(음수 계수를 곱해 부등호 반전)와 T-경계(등호 포함·$D=0$ 에서 한 점 제외)에 몰려 있다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth·근거) · `variation_notes`(바꿔도 되는 수와 제약 · 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다. 그림 문항은 4문이다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CM1-207-e12
  page: 207
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    아래로 볼록한 y=f(x)(x절편 0, 2)와 위로 볼록한 y=g(x)(x절편 0, 4)가 x=0, x=3 에서 만나는 그래프를 보고
    ⑴ f(x)<g(x) ⑵ f(x)g(x)>0 의 해를 구하기.
  category: "그래프에서 교점·x절편 읽기 → 대소 비교와 곱의 부호 구간"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(x)g(x)>0 을 두 그래프가 x축 기준 같은 쪽에 있는 구간으로 옮겨 읽음(곱의 부등식 → 각 함수의 부호 구간 조합)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프를 이용한 이차부등식의 풀이(대소 비교·곱의 부호)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 교점 x=0, 3 사이에서 g 가 위에 있다는 것을 그대로 읽으면 끝난다.
    ⑵ 는 식을 세우는 문제가 아니라 f 의 부호 구간(x<0 또는 x>2)과 g 의 부호 구간(0<x<4)을 겹쳐 같은 부호인 곳을 찾는 문제다.
    곱의 부호를 그래프 위치로 옮기는 표현 전환 1개(RT d2)가 있으나 이 단원의 표준 골조라 +1 하지 않았다.
    필수 예제 출발 ★2 · M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "그래프에서 교점 0, 3 과 각 함수의 x절편 읽기 → ⑴ 교점 사이 구간 ⑵ 두 함수의 부호가 같은 구간 교집합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $0<x<3$ ⑵ $2<x<4$'
  answer_source: "본문 풀이"
  figure: "crop:fig-207-e12.png"
  latex: latex-bank/gn-cm1/items/207-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "교점의 x좌표(0, 3)와 두 포물선의 x절편(f: 0, 2 · g: 0, 4)을 바꿀 수 있음. 제약: 두 포물선이 실제로 두 점에서 만나야 하고, 그림의 눈금 라벨과 절편·교점이 전부 일치해야 하며, ⑵ 의 답이 빈 구간이 되지 않도록 f 의 큰 절편 < g 의 큰 절편을 유지."
    creative: "(1) ⑵ 를 f(x)/g(x)<0 으로 바꾸면 분모 제외 조건이 붙어 T-범위 추가 → ★3 (2) f(x)g(x)≤0 처럼 등호를 넣으면 절편 4개 포함 여부를 따져야 해 T-경계 강화(★2 유지) (3) 절편 값을 문자 a~e 로 바꾸면 Mₐ 가 3 으로 올라가 ★3(=207-440 이 그 변형)."
```

```yaml
- id: GN-CM1-207-440
  page: 207
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    아래로 볼록한 y=f(x)(x절편 0, c)와 위로 볼록한 y=g(x)(x절편 a, e)가 x=b, x=d 에서 만나는 그래프를 보고
    ⑴ f(x)≥g(x) ⑵ f(x)g(x)<0 의 해를 a~e 로 나타내기.
  category: "그래프에서 교점·x절편을 문자로 읽기 → 대소 비교와 곱의 부호 구간 서술"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(x)g(x)<0 을 두 그래프가 x축 기준 반대쪽에 있는 구간으로 옮겨, 부호가 엇갈리는 세 구간을 빠짐없이 모으는 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프를 이용한 이차부등식의 풀이(문자 절편·곱의 부호)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 교점 b, d 바깥이라는 것을 등호까지 붙여 읽으면 된다(T-경계).
    ⑵ 가 이 문항의 무게다 — f 의 부호 구간(x<0 또는 x>c)과 g 의 부호 구간(a<x<e)을 엇갈리게 겹치면 답이 세 구간으로 쪼개지고, 한 구간(0<x<c)을 빠뜨리기 쉽다.
    절편·교점이 전부 문자라 Mₐ=3 이고 답을 구간으로 서술해야 한다.
    [분류 이슈] 확인체크(★1 출발)이나 문자 라벨 + 3구간 서술이라 판정은 ★3 — 2단 차이를 기록만 한다.
  tier: star_3
  mechanism_primary: "그래프에서 f 의 절편 0, c · g 의 절편 a, e · 교점 b, d 읽기 → ⑴ 교점 바깥(등호 포함) ⑵ 두 함수의 부호가 엇갈리는 세 구간"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $x\le b$ 또는 $x\ge d$ ⑵ $x<a$ 또는 $0<x<c$ 또는 $x>e$'
  answer_source: "답지"
  figure: "crop:fig-207-440.png"
  latex: latex-bank/gn-cm1/items/207-440.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "문자 라벨의 대소 배치(a<b<0<c<d<e)와 f 의 절편 하나가 원점이라는 설정을 바꿀 수 있음. 제약: 그림의 라벨 순서가 답의 구간 순서를 그대로 결정하므로 배치를 바꾸면 그림과 답을 함께 고쳐야 하고, f 와 g 의 절편이 서로 겹치지 않아야 구간이 무너지지 않음."
    creative: "(1) ⑵ 를 f(x)g(x)≥0 으로 뒤집으면 여집합 + 절편 포함 판정이라 실수 지점이 옮겨감(★3 유지) (2) 절편을 수치로 되돌리면 ★2(=207-e12) (3) f(x)/g(x)≤0 으로 바꾸면 g(x)≠0 제외가 붙어 T-범위 추가 → ★4 후보."
```

```yaml
- id: GN-CM1-207-441
  page: 207
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    이차함수 y=ax^2+bx+c 의 그래프와 직선 y=mx+n 이 x=-2, x=2 에서 만나는 그림을 보고
    이차부등식 ax^2+(b-m)x+c-n≤0 의 해 구하기.
  category: "계수 결합식을 두 그래프의 차로 보기 → 포물선이 직선보다 아래인 구간"
  M: {s: 1, k: 1, a: 2, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ax^2+(b-m)x+c-n 을 (ax^2+bx+c)-(mx+n) 으로 되읽어 부등식을 두 그래프의 상하 비교로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프의 교점을 이용한 이차부등식(포물선과 직선의 상하 비교)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계수가 뒤섞인 식을 보고 두 그래프의 차로 되읽는 것이 전부이고, 그 뒤는 a>0 이므로 교점 -2, 2 사이라는 결론 한 줄이다.
    a 의 부호(아래로 볼록)를 확인하지 않으면 답이 뒤집히고(T-부호), 등호 때문에 교점을 포함해야 한다(T-경계).
    확인체크 출발 ★1 이나 식을 그래프 차로 옮기는 통찰(RT d2)이 이 단원의 표준 절차가 아니라 +1.
  tier: star_2
  mechanism_primary: "ax^2+(b-m)x+c-n ≤ 0 → (포물선)-(직선) ≤ 0 → 교점 -2, 2 사이(등호 포함)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2\le x\le 2$'
  answer_source: "답지"
  figure: "crop:fig-207-441.png"
  latex: latex-bank/gn-cm1/items/207-441.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "교점의 x좌표(-2, 2)를 바꿀 수 있고 대칭일 필요도 없음. 제약: 그림의 눈금 라벨과 교점이 일치해야 하고, 포물선이 아래로 볼록(a>0)인 그림을 유지해야 답이 구간 안쪽으로 나옴."
    creative: "(1) 부등호를 ≥ 로 바꾸면 답이 바깥 두 구간(★2 유지) (2) 포물선을 위로 볼록(a<0)한 그림으로 바꾸면 부호 반전 판단이 핵심이 되어 T-부호 강화 → ★3 (3) 직선을 y=mx+n 대신 다른 포물선으로 바꾸면 차가 이차식인지부터 따져야 해 ★3."
```

```yaml
- id: GN-CM1-208-e13
  page: 208
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 이차부등식 풀기 — ⑴ 2x^2-x-1≥x^2+5 ⑵ -x^2+16x-64<0 ⑶ 5x≥x^2+9.
    각각 인수분해되는 경우 · D=0 인 경우 · D<0 인 경우를 한 세트로 묶은 예제.
  category: "한쪽으로 이항해 정리 → 이차항 계수를 양수로 → 판별식 부호로 해의 형태 결정"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차부등식의 풀이(판별식 부호에 따른 네 가지 해의 형태)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 x^2-x-6≥0 으로 정리해 인수분해하는 표준 절차다.
    ⑵ 는 양변에 -1 을 곱해 (x-8)^2>0 으로 만들면 x=8 만 빠지고(T-경계), ⑶ 은 x^2-5x+9≤0 에서 D<0 이라 해가 없다.
    세 소문항 모두 이 단원의 표준 절차라 통찰로 세지 않았다. 필수 예제 출발 ★2 · 통찰 0 이나 M_total 6 이라 감점 없이 ★2.
  tier: star_2
  mechanism_primary: "이항·정리 → 이차항 계수를 양수로(부등호 반전) → 인수분해 또는 판별식 부호 → 해의 형태 결정"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x\le -2$ 또는 $x\ge 3$ ⑵ $x\ne 8$인 모든 실수 ⑶ 해는 없다.'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/208-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 소문항의 계수를 바꿀 수 있음. 제약: 세 소문항이 각각 D>0(인수분해) · D=0 · D<0 을 담당하는 구성을 유지해야 예제의 목적이 남고, D=0 문항은 이차항 계수가 음수여서 부등호 반전을 거치도록 두는 것이 좋다."
    creative: "(1) D=0 문항의 부등호를 ≤ 로 바꾸면 답이 한 점 x=8 이 되어 짝 개념으로 대비됨(★2 유지) (2) D<0 문항을 ≥ 로 바꾸면 해가 모든 실수(★2 유지) (3) 이차항 계수를 문자로 바꾸면 경우 나누기가 생겨 ★3(=208-443)."
```

```yaml
- id: GN-CM1-208-442
  page: 208
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑹ 이차부등식 풀기 — 이항해 정리하면 각각 인수분해형 · 무리수 근 · D=0(한 점 제외) · D=0(한 점) · D<0(모든 실수) · D<0(해 없음)이 되는 여섯 문항.
  category: "이항·정리 → 이차항 계수 양수화 → 인수분해 또는 근의 공식·판별식 → 해의 형태 결정"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차부등식의 풀이(판별식 부호에 따른 네 가지 해의 형태)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    골조는 208-e13 과 같고, 여섯 소문항이 인수분해·근의 공식·D=0·D<0 네 경우를 전부 한 번씩 훑는 구성이다.
    ⑵ 는 근이 무리수라 근의 공식을 쓰고(Mₖ=2), ⑷ 는 D=0 에 ≤ 라 해가 한 점, ⑸⑹ 은 음수 계수를 양수로 바꾸는 과정에서 부등호가 뒤집힌다(T-부호).
    확인체크 출발 ★1 이나 필수 예제와 동일 골조에 경우가 전부 들어 있어 +1.
  tier: star_2
  mechanism_primary: "각 소문항을 (이차식) 부등호 0 꼴로 정리 → 계수 양수화 → 인수분해·근의 공식·판별식 중 해당하는 것으로 해의 형태 결정"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x<-\dfrac{1}{2}$ 또는 $x>2$ ⑵ $3-2\sqrt{3}\le x\le 3+2\sqrt{3}$ ⑶ $x\ne 3$인 모든 실수 ⑷ $x=\dfrac{3}{2}$ ⑸ 모든 실수 ⑹ 해는 없다.'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/208-442.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "여섯 소문항의 계수를 바꿀 수 있음. 제약: D=0 문항은 완전제곱이 되도록 계수를 짝지어야 하고(판별식 0), 무리수 근 문항은 근호가 정리되는 수(2√3 처럼)로 두어야 답이 깔끔하다. D<0 두 문항은 부등호 방향으로 '모든 실수'와 '해 없음'이 갈리므로 방향을 함께 정한다."
    creative: "(1) 여섯 개 중 해가 '모든 실수'인 것만 고르게 하는 선택형으로 바꾸기(★2 유지) (2) 각 소문항의 해를 수직선에 나타내 공통 범위를 묻는 연립 형태로 묶기 → ★3 (3) 계수 하나를 문자로 두고 해가 '모든 실수'가 되는 조건을 묻기 → 역방향이라 ★3."
```

```yaml
- id: GN-CM1-208-443
  page: 208
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    상수 a 에 대한 부등식 ax^2+2ax-3a>0 을 풀기(a 의 값에 따라 해를 모두 서술).
  category: "공통인수 a 로 묶기 → a 의 부호로 경우 나누기 → 각 경우의 해 서술"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "a 가 상수라는 조건만으로 a>0 · a=0 · a<0 세 경우가 독립된 풀이 시나리오를 만들고, 그중 a=0 은 이차부등식이 아니게 되어 따로 따져야 함"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차항 계수가 문자인 부등식의 풀이(계수의 부호로 경우 나누기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a(x+3)(x-1)>0 으로 묶는 것까지는 한 줄이고, 그다음이 핵심이다 — a>0 이면 바깥, a<0 이면 양변을 a 로 나눌 때 부등호가 뒤집혀 안쪽(T-부호), a=0 이면 0>0 이라 해가 없다(T-경계).
    '이차'부등식이라는 말이 없으므로 a=0 을 빠뜨리면 답이 미완성이 된다.
    [분류 이슈] 확인체크(★1 출발)이나 문자계수 3분기 서술이라 판정은 ★3 — 2단 차이를 기록만 한다.
  tier: star_3
  mechanism_primary: "a 로 묶어 a(x+3)(x-1)>0 → a 의 부호(양·0·음)로 세 경우 → 각 경우의 해"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\begin{cases} a>0\text{일 때, } x<-3 \text{ 또는 } x>1 \\ a=0\text{일 때, 해는 없다.} \\ a<0\text{일 때, } -3<x<1 \end{cases}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/208-443.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "괄호 안 이차식의 두 근(-3, 1)을 바꿀 수 있음. 제약: 모든 항이 a 를 공통인수로 가져야 경우 나누기가 a 의 부호 하나로 끝나고, 두 근이 서로 달라야(D>0) 세 경우가 모두 구간으로 나온다. 두 근을 같게 두면 a=0 외에 D=0 경우까지 겹쳐 난이도가 한 단 더 올라간다."
    creative: "(1) 부등호를 ≥ 로 바꾸면 a=0 일 때 해가 '모든 실수'로 뒤집혀 경계 판단이 반대가 됨(★3 유지) (2) a 대신 서로 다른 문자 계수 두 개를 두면 분기가 곱해져 ★4 (3) a 의 범위를 a<0 으로 미리 주면 분기가 사라져 ★2."
```

```yaml
- id: GN-CM1-209-e14
  page: 209
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 절댓값을 포함한 이차부등식 풀기 — ⑴ x^2-4|x|+3<0 ⑵ x^2+|x|-2≥0 ⑶ x^2-2x-3<3|x-1|.
  category: "x^2=|x|^2 · x^2-2x-3=(x-1)^2-4 로 고쳐 |x| 또는 |x-1| 한 문자에 대한 이차부등식으로 변환"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x^2=|x|^2 임을 이용해 ⑴⑵ 를 |x| 에 대한 이차부등식으로 동치 변환(구간 나누기 없이 한 번에)"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑶ 은 x^2-2x-3 을 (x-1)^2-4 로 완전제곱해 |x-1| 한 문자로 통일 — 양변의 절댓값 문자를 맞추는 변환"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "절댓값 기호를 포함한 이차부등식의 풀이(|x| 치환·완전제곱 통일)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴⑵ 는 x^2 을 |x|^2 으로 보면 |x| 에 대한 이차부등식이 되어 1<|x|<3, |x|≥1 처럼 정리되고, 마지막에 |x| 범위를 x 범위로 되돌린다(T-범위).
    ⑶ 은 좌변을 (x-1)^2-4 로 고쳐 양변을 |x-1| 로 통일하는 것이 골조다 — 이것을 못 보면 x≥1, x<1 로 구간을 나눠 각각 풀고 범위와 교집합을 다시 따져야 한다.
    통찰 2개(EQV d1·d2) → 필수 예제 출발 ★2 에서 +1.
  tier: star_3
  mechanism_primary: "x^2 을 |x|^2 로(또는 좌변을 완전제곱해 |x-1| 로) 고침 → 절댓값 문자에 대한 이차부등식 풀기 → |x| 범위를 x 범위로 복원"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $-3<x<-1$ 또는 $1<x<3$ ⑵ $x\le -1$ 또는 $x\ge 1$ ⑶ $-3<x<5$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm1/items/209-e14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴⑵ 의 계수(-4, 3 / 1, -2)와 ⑶ 의 우변 계수 3 을 바꿀 수 있음. 제약: |x| 에 대한 이차식이 인수분해돼야 하고, |x| 는 음이 될 수 없으므로 |x|<음수 같은 공허한 해가 나오지 않게 상수항 부호를 잡아야 한다. ⑶ 은 좌변이 (x-1)^2 꼴로 완전제곱되도록 일차항 계수를 절댓값 안의 식과 맞춰야 한다."
    creative: "(1) ⑴ 의 부등호를 ≥ 로 바꾸면 답이 바깥 두 구간 + 경계 포함(★3 유지) (2) ⑶ 의 절댓값을 |x+2| 처럼 어긋나게 두면 완전제곱 통일이 막혀 구간 분할이 강제되고 사후 검증이 붙어 I-VF 발생 → ★4 (3) |x| 에 대한 부등식의 해가 한 점이 되도록(D=0) 계수를 잡으면 x=±k 두 값만 남아 T-경계 강화(★3 유지)."
```

```yaml
- id: GN-CM1-209-444
  page: 209
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴⑵ 절댓값을 포함한 이차부등식 풀기 — ⑴ x^2-2|x|-3<0 ⑵ x^2-2x≥2|x-1|+2.
  category: "x^2=|x|^2 · x^2-2x=(x-1)^2-1 로 고쳐 |x| 또는 |x-1| 한 문자에 대한 이차부등식으로 변환"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "⑴ 을 |x|^2-2|x|-3<0 으로 보고 (|x|-3)(|x|+1)<0 → |x|<3 으로 동치 변환"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑵ 는 좌변을 (x-1)^2-1 로 완전제곱해 양변을 |x-1| 로 통일하고 t=|x-1| 에 대한 t^2-2t-3≥0 으로 전환"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "절댓값 기호를 포함한 이차부등식의 풀이(|x| 치환·완전제곱 통일)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 |x| 에 대한 인수분해에서 |x|+1>0 이 항상 참이라 |x|<3 만 남는다(음수 해 기각).
    ⑵ 가 무게 — 좌변 x^2-2x 를 (x-1)^2-1 로 고쳐야 우변의 |x-1| 과 문자가 맞고, 그 뒤 |x-1|≥3 을 x 범위로 되돌린다(T-범위·T-경계).
    [분류 이슈] 확인체크(★1 출발)이나 필수 예제 209-e14 와 동일 골조에 통찰 2개라 판정은 ★3 — 2단 차이를 기록만 한다.
  tier: star_3
  mechanism_primary: "x^2 을 |x|^2 로 · x^2-2x 를 (x-1)^2-1 로 고침 → 절댓값 문자 t 에 대한 이차부등식 → t 범위를 x 범위로 복원"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $-3<x<3$ ⑵ $x\le -2$ 또는 $x\ge 4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/209-444.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 계수(-2, -3)와 ⑵ 의 우변 계수·상수(2, 2)를 바꿀 수 있음. 제약: |x| 에 대한 이차식이 인수분해되고 음수 근은 자동 기각되도록 상수항을 음수로 두는 편이 깔끔하며, ⑵ 는 좌변이 (x-1)^2 로 완전제곱되도록 일차항 계수를 절댓값 안의 식과 맞춰야 한다."
    creative: "(1) ⑵ 의 부등호를 < 로 뒤집으면 |x-1|<3 이 되어 답이 하나의 구간(★3 유지) (2) ⑴ 을 x^2-2|x|-3≥0 으로 바꾸면 |x|≥3 과 |x|≤-1(기각)을 함께 따져야 해 사후 기각이 생김(★3 유지) (3) 절댓값 안을 |x-1| 과 |x+1| 두 개로 섞으면 구간 분할이 강제되어 ★4."
```

```yaml
- id: GN-CM1-210-e15
  page: 210
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    가로 30 m, 세로 20 m 인 직사각형 정원에 폭이 일정한 십자 모양 길을 낼 때,
    길을 뺀 정원의 넓이가 200 m^2 이상이 되도록 하는 길의 최대 폭 구하기.
  category: "길을 가장자리로 몰아 남은 넓이를 하나의 직사각형으로 → 이차부등식 → 폭의 범위 중 최댓값"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "십자 길을 평행이동해 가장자리로 몰면 남은 네 조각이 (30-x)×(20-x) 직사각형 하나로 합쳐진다는 기하적 재배치를 대수식으로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차부등식의 활용(도형 넓이 조건 — 길 폭 구하기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    길 폭을 x 로 놓고 네 조각의 넓이를 따로 더하면 식이 무거워진다 — 길을 가장자리로 몰아 (30-x)(20-x)≥200 하나로 만드는 재배치가 이 문항의 골조다.
    정리하면 x^2-50x+400≥0 → (x-10)(x-40)≥0 이고, 여기서 0<x<20 이라는 현실 범위로 걸러야 x≤10 이 남는다(T-범위).
    '최대 폭'이므로 경계 x=10 을 포함한다(T-경계). 통찰 1개지만 평행이동 착안이 이 단원의 표준 절차가 아니라 필수 출발 ★2 에서 +1.
  tier: star_3
  mechanism_primary: "폭 x → 길을 가장자리로 몰아 남은 넓이 (30-x)(20-x) → (30-x)(20-x)≥200 → 0<x<20 으로 걸러 x≤10 → 최대 10"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10\,\mathrm{m}$'
  answer_source: "본문 풀이"
  figure: "crop:fig-210-e15.png"
  latex: latex-bank/gn-cm1/items/210-e15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정원의 가로·세로(30, 20)와 남은 넓이 기준(200)을 바꿀 수 있음. 제약: 이차부등식의 두 근 중 작은 쪽만 0<x<(세로) 안에 들어와야 답이 하나로 정해지고, 근이 정수로 떨어지도록 (가로+세로)와 (가로×세로-기준넓이)를 인수분해 가능하게 잡는다. 그림의 길 개수(가로 1·세로 1)를 바꾸면 식 자체가 달라지므로 그림 라벨과 함께 고쳐야 한다."
    creative: "(1) 길을 뺀 넓이가 '이하'가 되도록 하는 최소 폭을 묻기(★3 유지) (2) 가로 길 2개·세로 길 1개로 바꾸면 (30-x)(20-2x) 형태가 되어 계수 처리가 무거워짐(★3 유지, Mₖ 상승) (3) 길의 폭을 고정하고 정원의 가로 길이를 미지수로 두면 역방향 설정이라 I-BW 발생 → ★4 후보."
```

```yaml
- id: GN-CM1-210-445
  page: 210
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    게임기 한 대를 20만 원에 팔면 월 90대가 팔리고 가격을 만 원 올릴 때마다 월 판매량이 3대씩 준다.
    월 총판매액이 1872만 원 이상이 되게 할 때 정할 수 있는 최고 가격 구하기(5지선다).
  category: "인상액을 미지수로 → (가격)×(판매량) 총판매액 이차부등식 → 범위의 최댓값"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'만 원 올릴 때마다 3대씩 감소'라는 문장을 인상 횟수 x 에 대한 두 일차식의 곱 (20+x)(90-3x) 으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이차부등식의 활용(판매량·판매액 모델링)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    인상액을 x 만 원으로 놓으면 가격 20+x, 판매량 90-3x 이고 총판매액 (20+x)(90-3x)≥1872 다.
    정리하면 x^2-10x+24≤0 → 4≤x≤6 이고, 묻는 것은 가격의 최고값이므로 x=6 을 가격으로 되돌려 26만 원으로 답한다 — 여기서 x 를 그대로 답하는 실수가 나온다(T-단위·T-경계).
    문장을 곱 모델로 옮기는 전환 1개(RT d1)는 활용 단원의 표준이라 확인체크 출발 ★1 에서 +1 에 그친다.
  tier: star_2
  mechanism_primary: "인상 횟수 x → (20+x)(90-3x)≥1872 → 4≤x≤6 → 최고 가격 20+6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/210-445.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 가격 20·기준 판매량 90·감소량 3·기준 판매액 1872 를 바꿀 수 있음. 제약: 이차부등식이 정수 근으로 인수분해되도록 기준 판매액을 잡아야 하고, 해의 구간이 x≥0 안에 들어와야 하며, 선택지가 가격(20+x)이므로 구간의 양 끝이 선택지 안에 있어야 한다."
    creative: "(1) '최저 가격'을 묻게 바꾸면 구간의 왼쪽 끝을 읽어야 해 경계 방향이 반대(★2 유지) (2) 총판매액 대신 이익(원가 제시)으로 바꾸면 식이 한 겹 늘어 ★3 (3) 가격 인상 단위를 천 원으로 바꾸면 단위 환산이 끼어 T-단위 강화(★2 유지)."
```

```yaml
- id: GN-CM1-210-446
  page: 210
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    이차방정식 3x^2+(a+2)x+a=0 이 허근을 갖도록 하는 정수 a 의 개수 구하기.
  category: "허근 조건 D<0 → a 에 대한 이차부등식 → 무리수 경계 사이의 정수 세기"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "판별식 조건이 이차부등식이 되는 문제(정수 개수 세기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    허근 → D<0 은 표준 공식 적용이라 통찰로 세지 않았다. 판별식을 정리하면 a 에 대한 이차부등식 a^2-8a+4<0 이 되고, 미지수가 x 에서 a 로 바뀌는 지점만 넘으면 나머지는 절차다.
    근이 무리수라 근의 공식으로 구간을 구한 뒤 √3 의 근삿값으로 양 끝을 가늠해 그 사이 정수를 세야 한다(T-범위·경계 판단).
    확인체크 출발 ★1 이나 이차방정식 조건 → 이차부등식 → 개수 세기의 2단 골조에 M_total 7 이라 +1.
  tier: star_2
  mechanism_primary: "허근 → D<0 → a^2-8a+4<0 → 4-2√3<a<4+2√3 → 그 사이 정수 개수"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/210-446.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차방정식의 계수(3, a+2, a)를 바꿀 수 있음. 제약: 판별식이 a 에 대한 이차식이 되도록 a 가 두 계수에 들어가야 하고, D<0 의 해가 실제 구간으로 나오도록(a 판별식의 D>0) 잡아야 하며, 구간의 양 끝이 무리수여야 정수 세기에 경계 판단이 생긴다."
    creative: "(1) '중근'으로 바꾸면 D=0 이라 a 가 두 값으로 특정됨 → ★2 (2) '서로 다른 두 실근'으로 바꾸면 구간의 바깥이라 정수가 무한해져 추가 범위 조건이 필요해짐(문항 설계 주의) (3) 정수 a 대신 자연수 a 의 최댓값을 묻거나 모든 정수 a 의 합을 묻기(★2 유지) (4) 계수에 a 와 b 두 문자를 두고 (a, b) 순서쌍 개수를 묻기 → ★4 후보."
```

## 표본 판정 요약 (11문)

- ★ 분포: ★1 0 · ★2 6 · ★3 5 · ★4 0 · ★5 0
- 통찰형 8 · 절차형 3 · premium 0
- 통찰 유형: I-RT 5(그래프 읽기 3 · 활용 모델링 2) · I-EQV 4(절댓값 변환 2문항 × 2단계) · I-MI 1(문자계수 분기) — SC/VF/SYM/XU 는 0 이라 이 범위에 ★5 자격 문항은 없다
- M_total: 7 이 8문 · 6 이 2문 · 8 이 1문 (Mₖ 는 대부분 1~2 — 변별 지점이 계산량이 아니라 부호·경계 판단에 있다)
- 함정: 전 문항이 T-경계(등호 포함·D=0 의 한 점 제외·최대·최소 경계), 8문이 T-부호(음수 계수를 곱해 부등호 반전), 4문이 T-범위(절댓값 범위 복원·현실 범위·정수 범위)
- type_hint 상위: 「그래프를 이용한 이차부등식」계열 3 · 「이차부등식의 풀이(판별식 네 형태)」 2 · 「절댓값 포함 이차부등식」 2 · 「이차부등식의 활용」 2 · 「문자계수 부등식」 1 · 「판별식 조건의 정수 개수」 1
- 대상층: 중하위권 3 · 중위권 6 · 중상위권 2
- 그림: 4문(`crop:fig-207-e12.png` · `crop:fig-207-440.png` · `crop:fig-207-441.png` · `crop:fig-210-e15.png`)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-207-440 | 벤더 구역은 「확인체크」(★1 출발)인데 절편·교점이 전부 문자(Mₐ=3)이고 곱의 부호 구간이 셋으로 쪼개져 판정은 ★3. 쌍둥이 필수 예제 207-e12(수치판)보다 한 단 위 | ★1 / ★3 |
| GN-CM1-208-443 | 「확인체크」(★1 출발)이나 이차항 계수가 문자라 a>0·a=0·a<0 세 경우를 모두 서술해야 해 판정은 ★3. a=0 에서 이차부등식이 아니게 되는 경계가 핵심 | ★1 / ★3 |
| GN-CM1-209-444 | 「확인체크」(★1 출발)이나 필수 예제 209-e14 와 동일 골조에 완전제곱 통일 통찰까지 필요해 판정은 ★3 | ★1 / ★3 |

참고(이슈까지는 아닌 1단 차이): 207-441 · 208-442 · 210-445 · 210-446 은 확인체크(★1 출발)이나 통찰 1개 또는 M_total 6~7 이라 ★2 로 +1 했고, 210-e15 는 필수(★2 출발)이나 길을 가장자리로 모으는 재배치 착안 때문에 ★3 으로 +1 했다. 이 단원의 확인체크는 사실상 바로 앞 필수 예제의 쌍둥이라 ★1 출발 신호가 구조적으로 낮게 잡힌다.

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위의 type_hint 는 네 갈래다 — ① 그래프 이용(207-e12 · 207-440 · 207-441) ② 판별식 부호에 따른 해의 형태(208-e13 · 208-442) ③ 절댓값 포함(209-e14 · 209-444) ④ 활용·판별식 조건(210-e15 · 210-445 · 210-446), 그리고 ⑤ 문자계수 분기(208-443).
- ①은 안에서 갈라야 한다. 「두 함수의 대소 비교(f<g)」는 교점만 읽으면 끝나지만 「곱의 부호(fg>0)」는 각 함수의 x절편까지 읽어 부호 구간을 조합해야 해 체감이 한 단 다르다. 카탈로그에서는 **따로 세우고**, 절편을 수치로 주느냐 문자로 주느냐는 같은 유형 안의 난이도 손잡이(★2↔★3)로 두면 된다. 207-441(포물선-직선의 차를 계수 결합식으로 위장)은 ①의 변형이지만 '식을 두 그래프의 차로 되읽기'가 고유해 별도 유형 후보다.
- ②는 208-e13 과 208-442 가 완전히 같은 골조라 **통합**한다. 네 가지 해의 형태(D>0 / D=0 에 <,≤ / D<0 에 <,≤)가 이 유형의 슬롯 변수이고, base ★ 는 2 가 적당하다.
- ③은 「x^2=|x|^2 로 보는 것」과 「완전제곱해 절댓값 문자를 맞추는 것」이 다른 사고다. 전자만 필요한 문항은 base ★2, 후자가 들어가면 base ★3 으로 **두 층으로 나누는 것**이 학생 체감과 맞는다. 절댓값 안의 식이 서로 다른(|x-1| 과 |x+1|) 문항은 구간 분할 + 사후 기각(I-VF)이 생기므로 ★4 자리의 별도 유형으로 예약해 둘 만하다.
- ④의 210-446 은 이름만 활용이 아니라 「판별식 조건이 미지수 a 에 대한 이차부등식이 되는 유형」이다. 활용(실생활 모델링)과 **분리**해야 한다. 미지수가 x 에서 a 로 바뀌는 지점이 이 유형의 진입 저항이고, 무리수 경계 사이의 정수 세기가 함정이다.
- 이 단원 전체에서 Mₖ 가 1~2 로 낮으므로, 카탈로그의 base ★ 는 계산량이 아니라 「부호·경계를 몇 번 판단해야 하는가」와 「미지수를 바꿔 타야 하는가」로 잡는 것이 좋다.
