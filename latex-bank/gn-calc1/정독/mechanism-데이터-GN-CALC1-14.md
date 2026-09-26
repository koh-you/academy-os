---
name: mechanism-데이터-GN-CALC1-14
description: 개념원리 미적분Ⅰ 14 함수의 그래프(1/1 · 120~123쪽 11문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 미적분Ⅰ · 전사본 latex-bank/gn-calc1
  section: 14 함수의 그래프
  unit_code: CALC1-14
  part: "1/1"
  extract_range: "120~123쪽 · 120-e17~123-243"
  total_problems: 11
  unit_total: 11
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 insights[] 의 effective_depth 평균(소수 2자리 · 통찰 0 이면 0.00). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-calc1/items/<id>.tex
  image_source: latex-bank/gn-calc1/figures/ (crops.json)
---

# 개념원리 미적분Ⅰ · 14 함수의 그래프 (1/1) 정독 데이터 (v1.0)

이 파일은 120~123쪽 「필수·발전 예제」 구역의 11문항(필수 예제 3 · 발전 예제 1 · 확인체크 7) 전수를 다룬다. 단원의 도구는 하나다 — **도함수의 부호가 바뀌는 곳에서만 극값이 생긴다**. 앞 두 문항은 이 도구를 정방향으로 써서 증감표를 만들고 그래프를 그리고, 나머지 아홉 문항은 같은 도구를 뒤집어 쓴다. 「극값을 갖는다/갖지 않는다/구간 안에서 갖는다/하나만 갖는다」라는 요구를 f'(x)=0 의 실근 개수·위치·중복 조건으로 번역한 뒤 상수의 범위를 되찾는 역방향 문제다.

세 층으로 난이도가 올라간다. (1) 121쪽은 삼차함수에서 판별식 한 번(극값 유무 ⟺ D>0 또는 D≤0), (2) 122쪽은 f'(이차함수)의 두 근이 지정된 구간에 놓일 조건이라 경계 함숫값 부호·축 위치·판별식을 묶어야 하고, (3) 123쪽 발전 예제와 그 확인체크는 사차함수라 f'(삼차)을 인수분해해 **이차 인수의 근이 이미 나온 근과 겹치는 퇴화 경우**(x=0 또는 x=-1)를 따로 따져야 답이 끊기지 않는다. 이 겹침 경우가 이 범위에서 가장 잘 빠지는 지점이고, 그래서 ★4 두 문항이 여기서 나왔다.

벤더 난이도 신호: tag 「필수」는 상자 발문만 전사된 필수 예제(★2 출발), tag 「발전」은 발전 예제(★3 출발)다. tag 「확인체크」는 통번호 「개념원리 익히기」가 아니라 **바로 위 예제에 붙은 확인 문항**이므로 그 예제와 같은 층을 출발점으로 잡았다(120~122쪽 확인체크 ★2 출발 · 123쪽 발전 예제 아래 확인체크 ★3 출발). level 필드는 전 문항 없음(`-`)이고 그림은 한 문항도 없다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 이 단원의 변형은 계수를 아무렇게나 바꾸면 곧바로 무너진다 — 판별식이 완전제곱이 되어야 답이 한 점으로 떨어지거나(239), 인수정리로 유리근이 빠져야 f'(삼차)이 인수분해되거나(243), 경계 함숫값 부등식이 유리수 구간으로 정리돼야 하므로 `variation_notes.numeric` 에 그 제약을 같이 적었다.

## 문항 데이터

### 필수·발전 예제

```yaml
- id: GN-CALC1-120-e17
  page: 120
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑵ 삼차함수 f(x)=x^3+(15/2)x^2+12x+2 와 사차함수 f(x)=-x^4+2x^2+3 의 그래프를 각각 그리기.
  category: "도함수의 부호 → 증감표 → 극값·절편 → 그래프 개형"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼차·사차함수의 증감표와 그래프 그리기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'(x) 를 인수분해해 근을 구하고 증감표에서 부호를 읽어 극대·극소를 얻은 뒤 y절편을 찍고 잇는 정방향 절차.
    ⑴ 은 f'=3(x+1)(x+4) 로 극값이 둘, ⑵ 는 최고차항이 음수라 바깥이 아래로 내려가는 개형이고 극대가 둘·극소가 하나(우극·좌극 대칭)인 점만 주의한다.
    새로 착안할 것이 없는 표준 절차라 통찰 0 · M_total 6 → 필수 예제 출발점 ★2 유지(−1 조건인 M_total ≤ 5 에는 못 미침).
  tier: star_2
  mechanism_primary: "f'(x)=0 의 근 → 증감표로 f' 부호 → 극대·극소와 y절편 표시 → 곡선 연결"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 풀이 참조 ($x=-4$에서 극댓값 $10$, $x=-1$에서 극솟값 $-\dfrac{7}{2}$이고 $f(0)=2$인 그래프) ⑵ 풀이 참조 ($x=-1$, $x=1$에서 극댓값 $4$, $x=0$에서 극솟값 $3$인 그래프)'
  answer_source: "본문 풀이(그래프)"
  figure: none
  latex: latex-bank/gn-calc1/items/120-e17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 계수는 f'=3(x+1)(x+4) 처럼 f'(x) 가 정수근으로 인수분해되도록 역산해서 고른다(15/2 라는 분수 계수도 그 역산의 결과이므로 임의로 바꾸면 근이 무리수가 된다). ⑵ 는 복이차식이어야 극값이 세 개 나오므로 -x^4+ax^2+b 꼴을 유지하고 a>0 을 지킨다. 상수항은 y절편만 움직이므로 자유."
    creative: "(1) 증감표를 주고 식을 역으로 묻기(★3 · I-BW) (2) 그래프에서 극값의 합·차나 f(x)=k 의 실근 개수를 묻기(★3 · I-RT) (3) 계수 하나를 문자로 바꿔 개형이 달라지는 경계를 묻는 순간 이 단원 뒷부분의 극값 조건 문제가 되어 ★3~4 로 올라간다."
```

```yaml
- id: GN-CALC1-120-237
  page: 120
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 네 함수(-x^3+6x^2-12x+4, 2x^3-3x^2+2, x^4-4x^3+4x^2+1, -3x^4-8x^3-6x^2+2)의 그래프를 각각 그리기.
  category: "도함수의 부호 → 증감표(중근에서 부호 불변) → 극값 → 그래프 개형"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "삼차·사차함수의 증감표와 그래프 그리기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 예제와 같은 절차를 네 번 반복하되 ⑴ 은 f'=-3(x-2)^2, ⑷ 는 f'=-12x(x+1)^2 로 f'(x)=0 의 근이 중근이라 그 점에서 부호가 바뀌지 않아 극값이 아니다(T-부호).
    「f'(x)=0 이면 극값」이라는 오해를 깨는 것이 이 확인체크의 목적이고, 증감표를 성실히 채우면 자동으로 드러나므로 별도의 착안으로는 보지 않았다.
    통찰 0 · M_total 6 → 확인체크(예제와 같은 층) 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "f'(x) 인수분해 → 증감표 · 중근에서는 부호가 안 바뀌어 극값 아님 → 극값·지나는 점 표시 → 곡선 연결"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 풀이 참조 (극값이 없고 두 점~$(0,\,4)$, $(2,\,-4)$를 지나며 감소하는 그래프) ⑵ 풀이 참조 ($x=0$에서 극댓값 $2$, $x=1$에서 극솟값 $1$인 그래프) ⑶ 풀이 참조 ($x=0$, $x=2$에서 극솟값 $1$, $x=1$에서 극댓값 $2$인 그래프) ⑷ 풀이 참조 ($x=0$에서 극댓값 $2$이고 점~$(-1,\,1)$을 지나는 그래프)'
  answer_source: "답지(그래프)"
  figure: none
  latex: latex-bank/gn-calc1/items/120-237.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ ⑷ 는 f'(x) 가 완전제곱 인수를 갖도록 계수를 역산해야 「극값 없음 / 극값 하나」라는 출제 의도가 유지된다(-3x^4-8x^3-6x^2 의 -3, -8, -6 은 f'=-12x(x+1)^2 에서 나온 값). ⑶ 은 f'=4x(x-1)(x-2) 처럼 세 정수근이 되도록 잡아야 극소-극대-극소가 정수 자리에 온다. 상수항만 자유."
    creative: "(1) 네 개형 중 하나를 고르는 선다형으로 바꾸기(★2 유지) (2) ⑴ 처럼 극값이 없는 삼차함수를 만드는 조건을 묻기(★2~3 · 121쪽 유형으로 이동) (3) ⑶ 의 이중 우물에 수평선 y=k 를 얹어 교점 개수를 묻기(★3 · I-RT) (4) 네 함수 중 「극값의 개수가 다른 하나」를 고르게 하면 비교 판정이 얹혀 ★3."
```

```yaml
- id: GN-CALC1-121-e18
  page: 121
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ 삼차함수 f(x)=ax^3+6x^2+(15-3a)x+1 이 극값을 갖도록 하는 실수 a 의 범위.
    ⑵ f(x)=x^3+kx^2-3kx+2 가 극값을 갖지 않도록 하는 실수 k 의 범위.
  category: "극값 유무 ⟺ f'(x)=0 의 실근 개수 → 판별식 부등식 → 최고차항 조건과 교집합"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「극값을 갖는다 / 갖지 않는다」를 f'(x)=0 이 서로 다른 두 실근을 갖는다 / 실근을 갖지 않거나 중근이다로 옮기고, ⑴ 에서는 거기에 삼차함수라는 전제(a는 0이 아님)를 겹쳐야 답이 세 구간으로 끊긴다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼차함수가 극값을 가질(갖지 않을) 조건 — 판별식"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 D/4>0 에서 (a-1)(a-4)>0 을 얻은 뒤 a가 0이 아니라는 조건을 겹쳐 세 구간으로 쪼개는 것이 전부이고, 이 겹침을 빠뜨리면 답이 두 구간으로 줄어든다(T-범위).
    ⑵ 는 극값이 없을 조건이라 등호를 포함한 D/4 ≤ 0 이고, 여기서 부등호를 <로 쓰면 경계 -9 와 0 이 빠진다(T-경계).
    매개변수가 이차항 계수와 상수항 양쪽에 들어가 판별식을 두 번 정리해야 하므로 M_total 8 로 이 범위 상단.
    통찰 1개(EQV d2)지만 M_total 상단 + 최고차항 배제 분기가 얹혀 필수 예제 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "극값 유무 → f'(x)=0 의 실근 개수 → 판별식 부호 → (삼차 전제) 최고차항이 0이 아님과 교집합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $a<0$ 또는 $0<a<1$ 또는 $a>4$ ⑵ $-9\le k\le 0$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/121-e18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 에서 6 과 15 는 D/4 = 36-3a(15-3a) 가 (a-1)(a-4) 로 인수분해되게 고른 값이므로 같이 움직여야 한다 — 판별식이 a에 대한 이차식으로 정리된 뒤 정수근으로 인수분해될 때만 답이 깔끔한 구간이 된다. ⑵ 의 -3k 는 D/4 = k^2+9k 가 k(k+9) 로 떨어지게 하는 값. 계수 부호를 바꿀 때 「극값을 갖는다」와 「갖지 않는다」 중 어느 쪽을 묻는지에 따라 등호 포함 여부가 뒤집히는 것을 확인할 것."
    creative: "(1) 「극값을 갖는다」 대신 「극댓값과 극솟값의 차가 4 이상」으로 바꾸면 근과 계수의 관계가 얹혀 ★4 (2) a의 최댓값·최솟값이나 정수 a의 개수를 묻기(★3 유지) (3) 삼차함수라는 말을 빼고 「함수」로만 주면 a=0 인 이차함수도 극값을 가지므로 경우가 하나 늘어 ★4 · I-MI (4) f'(x) 대신 f(x) 의 그래프 개형 조건으로 주면 I-RT 로 유형이 바뀐다."
```

```yaml
- id: GN-CALC1-121-238
  page: 121
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x)=x^3+kx^2+3x+2 가 극값을 갖도록 하는 실수 k 의 범위.
  category: "극값 존재 ⟺ f'(x)=0 이 서로 다른 두 실근 → D>0"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "극값의 존재를 f'(x)=0 의 서로 다른 두 실근 존재로 옮겨 판별식 부등식 하나로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "삼차함수가 극값을 가질(갖지 않을) 조건 — 판별식"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=3x^2+2kx+3 에서 D/4 = k^2-9>0 한 줄. 매개변수가 하나뿐이고 최고차항이 1로 고정이라 앞 예제의 배제 분기도 없다.
    통찰은 예제와 같은 동치 변환 하나뿐이고 그마저 이 절에서 갓 배운 표준형이라 depth 1.
    M_total 5 이지만 통찰이 0 이 아니라 −1 조건에 걸리지 않아 확인체크 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "극값 존재 → f'(x)=0 서로 다른 두 실근 → D/4>0 → k 범위"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$k<-3$ 또는 $k>3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/121-238.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x의 계수 3 은 D/4 = k^2-9 가 완전제곱수 차가 되도록 고른 값이다. 일차항 계수를 c로 두면 D/4 = k^2-3c 이므로 3c 가 완전제곱수일 때만 경계가 정수로 떨어진다(c=3, 12, 27). 상수항 2 는 답에 전혀 관여하지 않으므로 자유."
    creative: "(1) 「극값을 갖지 않도록」으로 뒤집으면 등호가 포함된 -3 ≤ k ≤ 3 이 되어 경계 함정이 생김(★2 유지) (2) 정수 k의 개수를 묻기(★2) (3) 최고차항 계수를 문자로 바꾸면 121-e18 ⑴ 이 되어 ★3 (4) k의 범위 대신 극댓값과 극솟값의 곱의 부호를 묻기(★4 · 근과 계수의 관계 결합)."
```

```yaml
- id: GN-CALC1-121-239
  page: 121
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x)=x^3-(3/2)(a-1)x^2-3ax+2 가 극값을 갖지 않도록 하는 상수 a 의 값.
  category: "극값 없음 ⟺ f'(x)=0 이 중근 이하 → 판별식이 완전제곱이라 등식으로 붕괴"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "극값이 없을 조건 D ≤ 0 을 세운 뒤 D = 9(a+1)^2 이 항상 0 이상임을 보고 부등식이 등식으로 붕괴한다는 것을 읽어야 답이 범위가 아니라 한 점이 된다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "삼차함수가 극값을 갖지 않을 조건 — 판별식이 완전제곱인 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f'=3x^2-3(a-1)x-3a=3(x-a)(x+1) 로 인수분해되므로 두 근이 a 와 -1 이고, 극값이 없으려면 두 근이 같아야 해서 a=-1 하나로 결정된다.
    판별식으로 가도 D=9(a+1)^2 ≤ 0 이라 같은 결론 — 「범위를 묻는 문제인데 답이 한 값」이라는 어긋남을 스스로 받아들이는 것이 이 문항의 핵심(T-경계).
    통찰 1개(EQV d2) · M_total 6 → 확인체크 출발점 ★2 유지. 발문이 「값의 범위」가 아니라 「값」이라 어긋남을 미리 알려 주는 셈이라 +1 은 하지 않았다.
  tier: star_2
  mechanism_primary: "극값 없음 → f'(x)=0 이 중근 → f'=3(x-a)(x+1) 의 두 근 일치 → a=-1"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/121-239.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "3/2 라는 분수 계수는 f'(x) 가 3(x-a)(x+1) 로 정확히 떨어지게 만드는 값이므로 임의로 바꾸면 판별식이 완전제곱을 잃고 답이 한 점에서 구간으로 바뀐다. 유지하려면 f'=3(x-a)(x-m) 을 먼저 정하고 f 를 적분해서 계수를 역산할 것 — 이때 답은 a=m 이 된다."
    creative: "(1) 고정근 -1 을 다른 정수 m 으로 바꾸기(★2 유지 · 답 a=m) (2) 「극값을 갖도록」으로 뒤집으면 a가 -1 이 아닌 모든 실수라 답의 모양이 여집합이 됨(★2~3) (3) 판별식이 완전제곱이 아니게 계수를 흔들면 보통의 범위 문제로 내려감(★2) (4) 두 근 a, -1 사이의 거리나 극댓값-극솟값 차를 조건으로 주면 ★4."
```

```yaml
- id: GN-CALC1-122-e19
  page: 122
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴ f(x)=-x^3+a^2x^2-ax 가 0<x<1 에서 극솟값, x>1 에서 극댓값을 갖도록 하는 실수 a 의 범위.
    ⑵ f(x)=x^3+3kx^2-(3k+1)x-2 가 -1<x<1 에서 극댓값과 극솟값을 모두 갖도록 하는 실수 k 의 범위.
  category: "극값의 위치 조건 → f'(이차함수) 그래프의 경계 함숫값 부호·축·판별식 → 연립"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「극값이 어느 구간에 있다」는 대수 조건을 f'(x) 의 포물선 그래프가 경계점에서 갖는 부호 조건으로 옮긴다 — 근을 실제로 구하지 않고 그래프로 읽는 전환이 없으면 무리식 근을 직접 비교해야 해서 풀이가 끊긴다"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "⑵ 처럼 두 근이 모두 한 구간 안에 들어가야 할 때는 판별식·양 끝 함숫값 부호·축의 위치 세 조건을 동시에 만족시켜야 하고, 하나라도 빠지면 근이 구간 밖으로 새어 나간다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "주어진 구간에서 삼차함수가 극값을 가질 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴ 은 최고차항이 음수라 f' 가 위로 볼록한 포물선이고 작은 근이 극소·큰 근이 극대로 **순서가 뒤집힌다**(T-부호). 0<극소<1<극대 는 f'(0)<0 과 f'(1)>0 두 부등식으로 환원되고 판별식은 자동으로 따라온다.
    ⑵ 는 두 근이 모두 (-1, 1) 안이라 경계 부호 두 개만으로는 부족하고 축의 위치까지 필요하다 — 조건을 모으는 단계가 통찰의 본체.
    통찰 2개(RT d2 + CON d2) · M_total 9 → 필수 예제 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "구간별 극대·극소 위치 → f'(이차)의 경계 함숫값 부호(+축·판별식) → 연립 → 상수 범위"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $a>\dfrac{3}{2}$ ⑵ $-\dfrac{2}{3}<k<\dfrac{2}{9}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/122-e19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 경계(0, 1 과 -1, 1)를 바꾸면 f'(경계) 부등식이 통째로 바뀌므로 경계와 계수를 함께 역산해야 한다. ⑴ 의 a^2 항은 f'(1)>0 이 (2a-3)(a+1)>0 으로 인수분해되도록 고른 것이고, ⑵ 의 3k 와 -(3k+1) 은 f'(-1)=2-9k, f'(1)=2+3k 가 일차식으로 깔끔히 떨어지게 하는 값이다. 계수를 바꿀 때 판별식이 항상 양수인지(⑵ 는 9k^2+9k+3>0 로 항상 성립) 반드시 다시 확인할 것 — 이 조건이 깨지면 답 구간이 달라진다."
    creative: "(1) 구간을 x<0 이나 반직선으로 바꾸기(★3 유지) (2) 「극댓값과 극솟값을 모두 갖는다」를 「극값을 하나만 갖는다」로 바꾸면 퇴화 경우가 생겨 ★4 · I-MI (3) 정수 k의 개수를 묻기(★3 · 122-241 과 같은 마무리) (4) 경계에서 f'(경계)=0 을 허용하면 등호 처리와 사후 기각이 생겨 ★4 · I-VF (5) 구간을 문자로 두면 매개변수가 둘이 되어 ★5 후보."
```

```yaml
- id: GN-CALC1-122-240
  page: 122
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x)=x^3+2ax^2-4a^2x 가 -1<x<1 에서 극댓값을, x>1 에서 극솟값을 갖도록 하는 실수 a 의 범위.
  category: "극대·극소가 놓일 구간 → f'(이차)의 경계 함숫값 부호 → 두 부등식 교집합"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "극대가 (-1,1) 안, 극소가 1 보다 크다는 위치 조건을 f'(-1)>0, f'(1)<0 이라는 포물선의 경계 부호로 옮긴다 — f'=(3x-2a)(x+2a) 의 두 근을 a의 부호에 따라 비교하는 대신 그래프로 읽는 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "주어진 구간에서 삼차함수가 극값을 가질 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f' 는 아래로 볼록한 포물선이라 작은 근이 극대·큰 근이 극소이고, 극대<1<극소 이면 1 이 두 근 사이이므로 f'(1)<0 하나로 잡힌다. 여기에 극대가 -1 보다 크다는 f'(-1)>0 을 더해 두 부등식의 교집합.
    f'=(3x-2a)(x+2a) 의 근이 2a/3 과 -2a 로 **a의 부호에 따라 대소가 뒤집히므로** 근을 직접 비교하려 들면 경우가 갈린다. 부호 조건으로 옮기면 분기가 사라진다.
    통찰 1개(RT d2)지만 M_total 8 로 상단이고 두 부등식을 각각 인수분해해 교집합을 취하는 마무리가 얹혀 확인체크 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "극대·극소가 놓일 구간 → f'(-1)>0 과 f'(1)<0 → 두 부등식 교집합 → a 범위"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-\dfrac{3}{2}<a<-\dfrac{1}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/122-240.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "2a 와 -4a^2 는 f'=3x^2+4ax-4a^2 가 (3x-2a)(x+2a) 로 인수분해되도록 묶인 값이라 따로 움직일 수 없다. 경계 -1, 1 을 바꾸면 f'(-1)=3-4a-4a^2, f'(1)=3+4a-4a^2 가 각각 (2a+3)(2a-1), (2a-3)(2a+1) 로 떨어지는 성질이 깨지므로, 새 경계에서도 이차부등식이 유리근으로 인수분해되는지 먼저 확인할 것."
    creative: "(1) 극대·극소의 구간을 서로 바꾸면 부등호가 모두 뒤집혀 답이 대칭 구간으로 옮겨감(★3 유지) (2) 경계를 문자 t 로 두고 t 의 조건을 묻기(★4) (3) 「극댓값이 양수」 같은 함숫값 조건을 덧붙이면 f 의 값까지 계산해야 해서 Mk 가 올라가고 ★4 (4) 정수 a 의 개수로 마무리하면 122-241 과 같은 층(★3)."
```

```yaml
- id: GN-CALC1-122-241
  page: 122
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x)=x^3+ax^2+(a-1)x 가 -2<x<2 에서 극댓값과 극솟값을 모두 갖도록 하는 정수 a 의 개수.
  category: "두 근이 모두 한 구간 안 → 판별식·양 끝 부호·축 위치 연립 → 정수 개수"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "두 극값이 모두 (-2,2) 안에 있다는 조건을 f'(x) 포물선이 그 구간 안에서만 x축을 두 번 끊는다는 그래프 조건으로 옮긴다"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "D>0, f'(-2)>0, f'(2)>0, 축이 -2와 2 사이 — 네 조건을 모두 세운 뒤 교집합을 취해야 한다. 판별식은 항상 성립하고 축 조건은 나머지에 흡수되지만, 세워 보기 전에는 그것을 알 수 없으므로 통합 단계 자체가 풀이의 본체"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "주어진 구간에서 삼차함수가 극값을 가질 조건 — 두 근이 모두 구간 안"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f'=3x^2+2ax+(a-1) 의 두 근이 모두 (-2,2) 안이어야 하므로 122-e19 ⑵ 와 같은 네 조건 묶음을 쓴다. 판별식 a^2-3a+3 은 항상 양수라 실질 제약은 f'(-2)>0 과 f'(2)>0 두 개.
    마지막에 구간의 양 끝이 분수라 그 안의 정수를 세는 단계가 하나 더 붙는다 — 끝점이 정수가 아닌 덕분에 등호 시비가 없다(T-경계).
    통찰 2개(RT d2 + CON d2) · M_total 9 → 확인체크 출발점 ★2 에서 +1 하여 ★3.
  tier: star_3
  mechanism_primary: "두 근 모두 (-2,2) → D>0 · f'(-2)>0 · f'(2)>0 · 축 범위 → 교집합 → 정수 개수"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/122-241.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "일차항 계수 a-1 은 f'(-2)=11-3a, f'(2)=11+5a 가 a 에 대한 일차식으로 떨어지게 하는 값이다. 구간 폭(여기서는 4)을 넓히면 두 부등식의 교집합이 커져 정수 개수가 늘어나므로 답을 정수 하나로 맞추려면 경계와 계수를 함께 역산해야 한다. 끝점이 정수가 되면 「극값이 경계에 놓이는 경우」를 포함할지 말지를 발문에서 정해 줘야 한다."
    creative: "(1) 정수 개수 대신 a 의 범위를 그대로 묻기(★3 유지) (2) 구간을 -2<x<2 에서 x>0 처럼 한쪽만 제한하면 조건이 줄어 ★2~3 (3) 판별식이 항상 양수가 아니게 계수를 바꾸면 D>0 이 실제 제약이 되어 조건 통합의 무게가 커짐(★4) (4) 「극댓값과 극솟값의 합이 0」 같은 조건을 얹으면 근과 계수의 관계까지 결합되어 ★4~5 · I-XU."
```

```yaml
- id: GN-CALC1-123-e20
  page: 123
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["발전"]
  category_type: "발전 예제"
  summary: |
    f(x)=x^4-4x^3+2ax^2 에 대하여 ⑴ 극댓값을 갖도록 하는 실수 a 의 범위, ⑵ 극값을 하나만 갖도록 하는 실수 a 의 범위.
  category: "사차함수의 극값 개수 → f'(삼차) 인수분해 → 이차 인수의 근과 x=0 의 중복 분기"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「극댓값이 있다 / 극값이 하나뿐이다」라는 결과에서 f'(x)=4x(x^2-3x+a) 가 부호를 몇 번 바꿔야 하는지를 역추적한다 — 최고차항이 양수인 사차함수는 극값이 하나 아니면 셋이므로, 극댓값 존재는 서로 다른 세 실근과 동치"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "이차 인수의 판별식뿐 아니라 그 근이 이미 확보된 근 x=0 과 겹치는 경우(a=0)를 따로 따져야 한다. ⑴ 에서는 이 경우가 배제되고 ⑵ 에서는 답에 포함되어 a=0 과 a≥9/4 라는 서로 떨어진 두 갈래가 나온다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "사차함수가 극값을 가질 조건 — f'의 인수분해와 중복근 분기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    f'=4x(x^2-3x+a) 로 x=0 이 항상 근이므로, 극값의 개수는 이차 인수가 서로 다른 두 실근을 갖는지(D=9-4a>0)와 그 근이 0 과 겹치는지(a=0)로 결정된다.
    ⑴ 은 a<9/4 에서 a=0 을 빼야 하고, ⑵ 는 반대로 a=0 을 답에 넣어야 하는데 판별식만 보고 a≥9/4 로 끝내면 이 갈래를 통째로 잃는다 — 이 범위에서 가장 잘 빠지는 지점(T-범위·T-경계).
    통찰 2개(BW d2 + MI d2) · M_total 9 → 발전 예제 출발점 ★3 에서 +1 하여 ★4. ★5 는 통찰 3개 이상 + SC/VF/SYM/XU 가 필요해 해당하지 않는다.
  tier: star_4
  mechanism_primary: "극값 개수 → f'=4x(x^2-3x+a) 의 부호가 바뀌는 근 수 → 이차 인수의 판별식과 x=0 중복 여부 분기 → a 범위"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑴ $a<0$ 또는 $0<a<\dfrac{9}{4}$ ⑵ $a=0$ 또는 $a\ge\dfrac{9}{4}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-calc1/items/123-e20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "-4x^3 의 -4 는 f'의 이차 인수를 x^2-3x+a 로 만들어 판별식 경계를 9/4 로 떨어뜨리는 값이다. 상수항이 없어야 x 가 f' 의 인수로 빠지므로 f(x) 에 일차항·상수항을 추가하면 이 골조가 무너진다. 최고차항 계수를 음수로 바꾸면 극댓값과 극솟값의 역할이 통째로 뒤바뀌므로(123-242 참조) 발문의 극대·극소도 같이 바꿔야 한다."
    creative: "(1) 「극솟값을 두 개 갖도록」으로 바꾸기(★4 유지 · 같은 분기) (2) 극값을 갖는 x 의 좌표에 대소 조건을 얹으면 구간 조건까지 결합되어 ★5 후보 (3) x^2-3x+a 대신 x^2+bx+a 로 문자를 둘로 늘리면 (a,b) 평면의 영역 문제가 되어 ★5 · I-RT (4) 겹침 경우 a=0 을 아예 발문에서 제외해 주면 판별식 한 줄로 내려가 ★3."
```

```yaml
- id: GN-CALC1-123-242
  page: 123
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x)=-x^4+8x^3+2ax^2 이 극솟값을 갖도록 하는 실수 a 의 범위.
  category: "최고차항이 음수인 사차함수의 극솟값 존재 ⟺ f'이 서로 다른 세 실근"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "최고차항이 음수라 극값이 하나면 그것은 극대이므로, 극솟값이 있으려면 f'(x)=-4x(x^2-6x-a) 가 서로 다른 세 실근을 가져야 한다는 요구를 역추적한다. 여기서 이차 인수의 판별식 조건과 그 근이 x=0 과 겹치지 않을 조건(a는 0이 아님)이 동시에 나온다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "사차함수가 극값을 가질 조건 — f'의 인수분해와 중복근 분기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    골조는 앞 발전 예제와 같지만 최고차항 부호가 음수라 개형이 극대-극소-극대로 뒤집히고, 묻는 것도 극솟값이라 결국 「서로 다른 세 실근」 한 가지 조건으로 모인다.
    D/4 = 9+a>0 에서 a>-9 를 얻은 뒤 a=0 이면 x=0 이 이차 인수의 근과 겹쳐 극값이 하나로 줄어드는 것을 빼야 답이 두 구간으로 끊긴다.
    통찰 1개(BW d2) · M_total 8 → 발전 예제 아래 확인체크 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "극솟값 존재 → f'=-4x(x^2-6x-a) 가 서로 다른 세 실근 → D>0 이고 0 이 이차 인수의 근이 아님 → a 범위"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-9<a<0$ 또는 $a>0$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/123-242.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "8x^3 의 8 은 이차 인수를 x^2-6x-a 로 만들어 D/4 = 9+a 가 되게 하는 값이고, 경계 -9 는 여기서 나온다. 삼차항 계수를 c 로 바꾸면 경계가 (c/4)^2 로 옮겨간다. a 앞의 2 를 바꾸면 판별식 경계가 비례해서 움직이므로 답의 모양은 같고 수만 바뀐다. 상수항·일차항은 넣지 않는다(f' 에서 x 가 빠지지 않는다)."
    creative: "(1) 「극댓값을 두 개 갖도록」으로 바꾸면 같은 조건이라 답이 같다 — 같은 골조를 다른 말로 묻는 변형(★3 유지) (2) 「극값을 하나만 갖도록」으로 뒤집으면 여집합에 a=0 이 들어가는 분기가 생겨 ★4 (3) 극솟값 자체의 부호를 묻는 조건을 얹으면 함숫값 계산이 붙어 ★4 (4) 최고차항을 다시 양수로 돌리면 123-e20 과 겹치므로 카탈로그에서는 한 유형으로 묶는다."
```

```yaml
- id: GN-CALC1-123-243
  page: 123
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    f(x)=x^4+2(a-1)x^2+4ax 가 극댓값을 갖지 않도록 하는 실수 a 의 범위.
  category: "극댓값 없음 ⟺ f'의 부호 변화 1회 → 인수정리로 f' 인수분해 → 중근·겹침 분기"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "최고차항이 양수인 사차함수가 극댓값을 갖지 않는다는 것은 f'(x) 가 부호를 한 번만 바꾼다는 뜻이고, 그러려면 f'=4(x+1)(x^2-x+a) 의 이차 인수가 실근을 갖지 않거나 중근이거나 그 근이 x=-1 과 겹쳐야 한다는 요구를 역추적한다. f'(삼차)에서 x=-1 이 항상 근임을 인수정리로 먼저 찾아내는 것이 출발점"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "판별식만 보면 a≥1/4 로 끝나지만, 이차 인수의 근이 -1 과 겹치는 a=-2 에서는 f'=4(x+1)^2(x-2) 가 되어 역시 부호 변화가 한 번뿐이다. 서로 떨어진 두 갈래를 모두 세어야 답이 완성된다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "사차함수가 극값을 가질 조건 — f'의 인수분해와 중복근 분기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    앞의 두 사차함수 문항과 달리 f'(x)=4x^3+4(a-1)x+4a 에 x 가 공통인수로 빠지지 않아, 인수정리로 x=-1 을 찾아 f'=4(x+1)(x^2-x+a) 로 쪼개는 단계가 먼저 필요하다.
    그다음은 익숙한 분기 — 이차 인수가 실근 없음/중근(a≥1/4)이거나, 근이 -1 과 겹치는 고립점(a=-2). 고립점을 놓치면 답의 절반이 사라진다.
    통찰 2개(BW d2 + MI d2) · M_total 9 · 인수분해 착안까지 얹혀 발전 예제 아래 확인체크 출발점 ★3 에서 +1 하여 ★4. 이 범위에서 가장 어려운 문항.
    [분류 이슈] 벤더 tag 는 확인체크(★2~3 층)이나 판정은 ★4 — 발전 예제 아래 확인체크를 ★3 출발로 본 해석에 의존하므로 기록해 둔다.
  tier: star_4
  mechanism_primary: "극댓값 없음 → f'=4(x+1)(x^2-x+a) 의 부호 변화 1회 → 이차 인수가 실근 없음/중근 또는 근이 -1 과 겹침 → a=-2 또는 a≥1/4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$a=-2$ 또는 $a\ge\dfrac{1}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-calc1/items/123-243.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "2(a-1) 과 4a 는 f'(x)=4(x^3+(a-1)x+a) 가 x=-1 을 근으로 갖도록 짜맞춘 값이라 따로 바꿀 수 없다 — 고정근을 m 으로 옮기려면 f'=4(x-m)(x^2+px+q) 를 먼저 정하고 f 를 적분해 계수를 역산해야 한다. 경계 1/4 은 이차 인수 x^2-x+a 의 판별식 1-4a 에서 나오고, 고립점 -2 는 그 근이 -1 과 겹치는 값이므로 둘은 독립적으로 움직이지 않는다."
    creative: "(1) 「극댓값을 갖도록」으로 뒤집으면 답이 a<1/4 에서 a=-2 를 뺀 모양이 되어 여집합 서술 연습(★4 유지) (2) 고정근을 x=1 이나 x=2 로 옮기기(★4 유지) (3) 「극값을 세 개 갖도록」으로 바꾸면 겹침 배제가 조건이 되어 ★4 (4) 겹침 경우 a=-2 를 발문에서 미리 제외해 주면 판별식 한 줄로 내려가 ★3 (5) a 의 범위 대신 극솟값의 최솟값을 묻는 조건을 얹으면 함숫값 계산이 붙어 ★5 후보."
```

## 표본 판정 요약 (11문)

- ★ 분포: ★1 0 · ★2 4 · ★3 5 · ★4 2 · ★5 0
- 통찰형 9 · 절차형 2 · premium 0
- 통찰 유형 분포(총 13개 라벨): I-EQV 3 · I-RT 3 · I-BW 3 · I-CON 2 · I-MI 2. depth 3 은 없고 depth 2 가 11개 · depth 1 이 1개(121-238)라 감쇠 대상이 없었다.
- M_total 분포: 5 → 1문 · 6 → 3문 · 8 → 3문 · 9 → 4문. Mₐ 는 그래프 그리기 두 문항만 1 이고 나머지 9문은 전부 2(매개변수 포함), Mₜ 는 2가 7문으로 이 범위의 변별이 함정(최고차항 배제·경계 등호·중복근)에 몰려 있음을 보여 준다.
- type_hint 상위: 「사차함수가 극값을 가질 조건 — f'의 인수분해와 중복근 분기」 3 · 「주어진 구간에서 삼차함수가 극값을 가질 조건」 3(그중 1문은 「두 근이 모두 구간 안」 변종) · 「삼차함수가 극값을 가질(갖지 않을) 조건 — 판별식」 2 · 「삼차·사차함수의 증감표와 그래프 그리기」 2 · 「삼차함수가 극값을 갖지 않을 조건 — 판별식이 완전제곱인 경우」 1
- 대상층: 중하위권 2 · 중위권 5 · 중상위권 4
- 그림: 0문(11문 모두 `figure: none`)
- answer_source: 본문 풀이 3 · 본문 풀이(그래프) 1 · 답지 6 · 답지(그래프) 1. 골조를 잡는 동안 전사 답과 어긋나 보인 문항은 없었다.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CALC1-123-243 | tag 는 「확인체크」지만 발전 예제 아래 확인 문항이라 ★3 출발로 보고 통찰 2개로 +1 하여 ★4. 확인체크의 출발점을 통번호 익히기(★1)로 보면 2단 차이가 나므로 은행 전체에서 이 해석을 통일해야 한다 | ★3 / ★4 |
| GN-CALC1-121-e18 | 통찰 1개(EQV d2)라 산식상 +1 근거가 약하지만 M_total 8 과 최고차항 배제 분기를 이유로 필수 ★2 에서 +1 했다. 같은 이유로 122-240 도 ★3 으로 올렸다 — M_total 상단을 +1 근거로 쓰는 관례를 확정할 필요 | ★2 / ★3 |
| GN-CALC1-121-239 | 「값의 범위」가 아니라 「값」을 묻는 발문이라 판별식이 완전제곱이라는 착안의 난이도가 발문에서 미리 새어 나간다. 발문이 「범위」였다면 ★3 후보 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위는 사실상 **한 뿌리에서 갈라진 네 유형**이다. 뿌리는 「f'의 부호가 바뀌는 곳에만 극값이 있다」이고, 갈래는 (가) 정방향 그래프 그리기(120-e17 · 120-237), (나) 삼차 판별식(121-e18 · 121-238 · 121-239), (다) 구간 안의 극값 위치(122-e19 · 122-240 · 122-241), (라) 사차 f'의 인수분해와 중복근(123-e20 · 123-242 · 123-243)이다. 카탈로그에서는 이 네 갈래를 각각 독립 유형으로 세우는 것이 맞다 — 풀이 도구가 판별식 / 포물선의 경계 부호 / 삼차식 인수분해로 서로 다르다.
- 통합해도 될 유형: (라) 안의 세 문항은 최고차항 부호와 묻는 극값 종류만 다를 뿐 「f' 을 인수분해해 고정근을 분리하고, 이차 인수의 판별식과 고정근과의 겹침을 따진다」로 골조가 완전히 같다. 최고차항 부호를 변형 축으로 둔 한 유형이면 충분하다. (나)의 「극값을 갖는다」와 「갖지 않는다」도 등호 포함 여부만 다른 한 유형.
- 따로 세워야 할 유형: 122-241 의 「두 근이 모두 한 구간 안」은 같은 (다) 갈래지만 조건이 네 개(판별식·양 끝 부호·축)로 늘어 조건 통합의 성격이 달라진다. 카탈로그에서는 (다) 아래 하위 유형으로 분리하고 ★ 를 한 단 높게 잡는 편이 슬롯 관리에 유리하다.
- ★1 이 없고 ★4 가 둘인 범위다. 이 단원에서 ★5 를 만들려면 매개변수를 둘로 늘려 (a,b) 평면의 영역을 묻거나, 극값의 위치 조건과 극값 자체의 크기 조건을 동시에 얹어 I-XU(근과 계수의 관계 결합)를 끌어와야 한다. 그 변형 지점은 각 블록 `variation_notes.creative` 에 적어 두었다.
