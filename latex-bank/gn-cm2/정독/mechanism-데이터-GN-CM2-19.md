---
name: mechanism-데이터-GN-CM2-19
description: 개념원리 공통수학2 19 명제와 조건(1/1 · 169-403~171-413) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: 19 명제와 조건
  unit_code: CM2-19
  part: "1/1"
  extract_range: "169~171쪽 · 169-403~171-413"
  total_problems: 13
  unit_total: 13
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 19 명제와 조건 (1/1) 정독 데이터 (v1.0)

이 파일은 19단원 13문 전수(169~171쪽 · 통번호 169-403~171-413)를 다룬다. 구역은 「개념원리 익히기」 5문 · 「필수·발전 예제」 8문(필수 예제 2 · 확인체크 6)뿐이고 연습문제·특강 구역은 이 단원에 없다. 명제 단원의 **도입부**라 내용 축이 셋으로 짧다 — ⑴ 명제와 조건의 구별·참·거짓 판별(반례), ⑵ 명제와 조건의 부정(드 모르간 · 부등호 경계 반전), ⑶ 조건의 진리집합과 논리 연산(또는=합집합 · 그리고=교집합 · 부정=여집합). 그림·서술형 표시는 없고 선택지 문항은 3문(169-403 · 170-410 · 171-413)이다.

벤더 난이도 신호와 이 파일의 출발점 규약: 「개념원리 익히기」 통번호 ★1 · 「필수」 예제 ★2 · **tag 「확인체크」는 구역 신호를 우선**해 「필수·발전 예제」 구역 안의 확인체크를 바로 위 예제와 같은 ★2 출발점으로 두었다(예제의 유제 배치이므로 익히기 통번호의 ★1과 구분한다). 그래서 M_total 이 같아도 익히기(169-407 · M_total 6)와 확인체크(171-412 · M_total 6)의 라벨이 한 단 갈리는데, 이는 벤더 구역 신호를 출발점으로 삼은 결과이며 rationale 에 그대로 적었다. 이 단원의 **표준 도구 적용**(조건을 수직선·원소 나열의 진리집합으로 옮기기 · 부정을 여집합으로 읽기 · 드 모르간)은 교과서가 직접 가르치는 절차라 **통찰로 세지 않았고**, 전체집합 밖의 해를 버리는 단계도 단순 필터로 보아 Mₜ(T-범위)에 반영했다. 통찰로 센 것은 진술의 방향 자체를 바꿔 읽어야 하는 두 곳뿐이다(170-410 「부정이 참」 → 「원 명제가 거짓」 · 171-413 주어진 구간 → P·Q 의 여집합 결합).

이 파일의 주 용도는 숫자 변형·창의 변형의 **원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM2-169-403
  page: 169
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    다섯 문장 중 명제인 것 2개 고르기(주관적 표현 2 · 미지수를 포함한 식 2 · 도형 성질 1). 5지선다.
  category: "명제의 정의 → 참·거짓이 정해지는 문장 고르기"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "명제와 조건의 구별(참·거짓 판별 가능 여부)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    「아름답다」「키가 크다」는 기준이 없어 참·거짓이 정해지지 않고, x≥2 는 x 에 따라 달라지므로 조건이다.
    반면 7-x=2-x 는 미지수가 있어도 양변에서 x 가 소거되어 7=2, 즉 x 에 관계없이 거짓이므로 명제다.
    미지수가 있으면 무조건 조건이라고 보는 착각(T-표기)과 주관적 표현(T-범위) 두 함정뿐이다. 익히기 출발 ★1 · 통찰 없음 → ★1 유지.
  tier: star_1
  mechanism_primary: "각 문장에서 참·거짓이 하나로 정해지는가 → 주관적 표현·x 에 의존하는 식 제외 → x 가 소거되는 식은 명제"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④, ⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/169-403.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '④ 의 두 일차식(7-x · 2-x)의 상수항을 바꿀 수 있다(3-x=5-x 등). 제약: 두 식의 x 계수가 같아야 x 가 소거되어 항등적으로 거짓인 명제가 되고, 계수가 다르면 해가 하나뿐인 조건이 되어 정답 개수가 무너진다. ③ 의 부등호 기준값은 아무 값이나 가능.'
    creative: '(1) 항등적으로 참인 식 2x+2=2(x+1) 을 넣어 「참인 명제」 항목으로 바꾸기(★1 유지) (2) 명제를 고른 뒤 참·거짓까지 판별시키기(170-e1 꼴 ★2) (3) 「모든 실수 x 에 대하여 x≥2」처럼 한정 표현을 붙여 조건이 명제가 되는 항목을 섞기(★2 · I-EQV d1).'
```

```yaml
- id: GN-CM2-169-404
  page: 169
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑵ 명제 「2+6>8」과 「공집합은 {a,b,c,d} 의 부분집합이 아니다」의 부정을 말하기.
  category: "부정의 정의 → 부등호·포함 기호 뒤집기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "명제의 부정(부등호·포함 기호)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 은 > 의 부정이 < 가 아니라 ≤ 라는 경계 처리(T-경계) 하나가 전부이고, ⑵ 는 「부분집합이 아니다」의 부정이 원래 진술로 돌아온다는 점만 보면 된다.
    참·거짓을 묻지 않으므로 2+6>8 이 거짓이라는 사실은 답에 영향을 주지 않는다. 익히기 출발 ★1 · 통찰 없음 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "각 명제의 술어를 부정 기호로 뒤집기 → > 의 부정은 ≤ · 부분집합이 아니다의 부정은 부분집합이다"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $2+6\le 8$ ⑵ $\varnothing\subset\{a,\,b,\,c,\,d\}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/169-404.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '좌변의 합과 우변 상수(2+6 · 8), 그리고 집합의 원소 개수를 바꿀 수 있다. 제약: 부등호의 종류(> · ≥ · < · ≤)를 바꾸면 답의 경계 기호가 따라 바뀌므로 네 가지를 고루 섞어 출제한다.'
    creative: '(1) 부정을 말한 뒤 그 부정의 참·거짓까지 묻기(★2 · 170-410 골조로 연결) (2) 「a 는 {a,b} 의 원소이다」처럼 원소 기호로 바꾸기(★1 유지) (3) 「모든」·「어떤」이 붙은 명제의 부정을 한 항목 추가하면 한정사 규칙이 들어와 ★2.'
```

```yaml
- id: GN-CM2-169-405
  page: 169
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑵ 전체집합이 자연수 전체일 때 조건 「x 는 8 의 약수」와 「x²-5x-6=0」의 진리집합.
  category: "조건 → 전체집합 안에서 참이 되는 원소 모으기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조건의 진리집합 구하기(전체집합이 자연수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 은 약수를 나열하면 끝이고, ⑵ 는 (x-6)(x+1)=0 으로 인수분해한 뒤 x=-1 이 전체집합인 자연수에 없어 버려지는 것이 유일한 주의점(T-범위)이다.
    전체집합을 무시하면 원소를 하나 더 적게 되는 전형적인 실수지만, 필터가 한 번뿐이라 통찰(I-VF)로는 세지 않았다. 익히기 출발 ★1 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "조건을 만족시키는 값 구하기 → 전체집합(자연수) 안에 있는 것만 남기기 → 원소 나열"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\{1,\,2,\,4,\,8\}$ ⑵ $\{6\}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/169-405.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 의 8 을 다른 수(12 · 18 · 24)로, ⑵ 의 이차식 계수를 바꿀 수 있다. 제약: ⑵ 는 인수분해되는 정수 계수라야 하고, 두 근 중 하나만 자연수가 되도록(음수 근 또는 유리수 근) 잡아야 전체집합 필터가 살아난다.'
    creative: '(1) 전체집합을 정수·실수로 바꾸면 버려지던 근이 살아나 답이 달라짐(★1 유지 · 전체집합의 역할 강조) (2) 두 진리집합의 교집합·합집합을 추가로 묻기(★2 · 171-411 골조) (3) 진리집합을 먼저 주고 조건을 되묻는 역방향(★2 · I-BW d1).'
```

```yaml
- id: GN-CM2-169-406
  page: 169
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 전체집합이 5 이하의 자연수일 때 조건 p: 4x-8=0, q: x²+1<10 에 대하여 p · ~p · q · ~q 의 진리집합.
  category: "진리집합 → 부정은 전체집합에서의 여집합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조건과 그 부정의 진리집합(여집합)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    p 는 x=2, q 는 x²<9 에서 전체집합 안의 1, 2 이고, ~p·~q 는 각각의 여집합을 U={1,2,3,4,5} 안에서 적으면 된다.
    핵심은 부정의 진리집합을 처음부터 다시 풀지 않고 여집합으로 읽는 것 하나뿐이며, 이는 이 단원이 직접 가르치는 표준 도구라 통찰로 세지 않았다. 익히기 출발 ★1 · 통찰 없음 · M_total 5 → ★1 유지.
  tier: star_1
  mechanism_primary: "p·q 의 진리집합 P, Q 를 U 안에서 나열 → ~p, ~q 는 U 에 대한 여집합"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\{2\}$ ⑵ $\{1,\,3,\,4,\,5\}$ ⑶ $\{1,\,2\}$ ⑷ $\{3,\,4,\,5\}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/169-406.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '전체집합의 상한(5), p 의 일차방정식 계수, q 의 부등식 상수(10)를 바꿀 수 있다. 제약: p 의 해가 전체집합 안의 자연수라야 P 가 공집합이 되지 않고, q 의 경계(x²<9)가 자연수 사이에 떨어져야 경계값 시비가 생기지 않는다.'
    creative: '(1) p 의 해를 전체집합 밖으로 보내 P=∅, ~P=U 를 확인시키기(★2 · 공집합 처리) (2) ⑵⑷ 대신 P∩Q · P∪Q 를 묻기(★2 · 171-411 골조) (3) 전체집합을 실수로 바꿔 구간으로 답하게 하면 수직선 처리가 들어와 ★2(171-e2 골조).'
```

```yaml
- id: GN-CM2-169-407
  page: 169
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 실수 전체의 집합에서 조건 「x≠-7 이고 x≠5」 · 「-4<x<6」 · 「x≤-2 또는 x>3」의 부정.
  category: "조건의 부정 → 그리고↔또는 교환 + 부등호 경계 반전"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조건의 부정(드 모르간·부등식 구간)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 은 「이고」가 「또는」으로 바뀌며 ≠ 가 = 로, ⑵ 는 두 부등식을 동시에 뒤집어 바깥쪽 두 구간으로, ⑶ 은 「또는」이 「그리고」로 바뀌면서 두 구간의 교집합인 -2<x≤3 하나로 합쳐진다.
    함정은 등호의 이동(T-경계)과 접속사 교환(T-표기) 둘이고, 드 모르간은 교과서가 직접 주는 규칙이라 통찰로 세지 않았다.
    익히기 다섯 문항 중 단계가 가장 많지만(M_total 6) 통찰이 없어 +1 조건에 닿지 않아 ★1 로 두고, 같은 골조의 확인체크(171-412 · ★2)와의 한 단 차이는 구역 출발점 차이임을 기록한다.
  tier: star_1
  mechanism_primary: "부정 → 접속사 그리고↔또는 교환 → 각 부등호의 등호를 반대쪽으로 → ⑶ 은 교집합으로 한 구간 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=-7$ 또는 $x=5$ ⑵ $x\le -4$ 또는 $x\ge 6$ ⑶ $-2<x\le 3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/169-407.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '세 항목의 경계값(-7, 5 · -4, 6 · -2, 3)을 자유롭게 바꿀 수 있다. 제약: ⑶ 처럼 부정이 한 구간으로 합쳐지려면 두 구간이 전체 실수를 덮지 않아야 하고(하한<상한), 등호의 위치를 항목마다 다르게 섞어야 경계 반전을 실제로 확인할 수 있다.'
    creative: '(1) 부정을 진리집합(구간)으로 답하게 하면 수직선 표현이 들어와 ★2(171-e2 골조) (2) 세 구간이 겹치도록 잡아 부정이 공집합이 되게 하기(★2 · 경계 감각) (3) 부정한 결과를 다시 P·Q 의 집합 연산으로 나타내게 하면 ★2~3(171-413 골조 · I-EQV d1).'
```

### 필수·발전 예제

```yaml
- id: GN-CM2-170-e1
  page: 170
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 「소수는 홀수이다」 · 「삼각형의 세 내각의 크기의 합은 180°이다」 · 「x²+4x-5≤0」 중 명제인 것을 찾고 참·거짓을 판별하기.
  category: "명제 판별 → 반례로 거짓 증명"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "명제의 판별과 참·거짓(반례)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑶ 은 x 에 따라 참·거짓이 갈리므로 명제가 아니고(조건), ⑵ 는 정의에 의해 참이다.
    ⑴ 은 「소수는 홀수」를 거짓이라고 말하려면 2 라는 반례 하나를 떠올려야 한다 — 단순 정의 확인을 넘는 지점은 여기뿐이다.
    필수 예제 출발 ★2 이고 M_total 5 로 −1 후보이나, 반례 제시가 명제 단원의 핵심 기능이라 ★2 로 유지한다.
  tier: star_2
  mechanism_primary: "참·거짓이 정해지는 문장만 남기기 → 반례 2 로 ⑴ 을 거짓 · 정의로 ⑵ 를 참 → ⑶ 은 조건"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑴ 거짓인 명제 ⑵ 참인 명제 ⑶ 명제가 아니다."
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/170-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑶ 의 이차부등식 계수를 바꿀 수 있고(x²-x-6>0 등), ⑵ 의 도형 상수(180°)를 사각형 360° 로 옮길 수 있다. 제약: ⑶ 은 해집합이 실수 전체도 공집합도 아니어야 「x 에 따라 달라지는 조건」이라는 판정이 성립한다.'
    creative: '(1) 반례가 필요한 항목을 둘로 늘려 거짓 명제 2개를 만들기(★2 유지) (2) 참인 항목에 대해 이유(증명)까지 쓰게 하는 서술형(★3 · Mₛ +1) (3) 「모든 소수는 홀수이다」 · 「어떤 소수는 짝수이다」를 함께 주어 한정사의 부정까지 묻기(★3 · I-EQV d2).'
```

```yaml
- id: GN-CM2-170-408
  page: 170
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑷ 「√4 는 유리수이다」 · 「3x=x-4」 · 「직각삼각형의 한 내각의 크기는 90°보다 작거나 같다」 · 「넓이가 같은 두 삼각형은 합동이다」 중 명제인 것을 찾고 참·거짓을 판별하기.
  category: "명제 판별 → 값 정리·경계 해석·반례"
  M: {s: 1, k: 1, a: 1, t: 2}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "명제의 판별과 참·거짓(반례)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑵ 만 x 에 따라 달라지는 조건이고 나머지 셋이 명제다. ⑴ 은 √4=2 로 먼저 정리해야 유리수임이 보이고(기호에 속지 않기),
    ⑶ 은 직각삼각형의 내각 중 최대가 직각이므로 「90°보다 작거나 같다」가 모든 내각에 대해 참이라는 경계 해석(T-경계)이 관건이며, ⑷ 는 밑변·높이가 다른 두 삼각형이라는 반례로 거짓이다.
    확인체크 출발 ★2 · 통찰 없음 · M_total 5 이나 판별 장치가 셋(정리·경계·반례)이라 −1 하지 않고 ★2 유지.
  tier: star_2
  mechanism_primary: "각 문장의 참·거짓이 정해지는지 판정 → √4 를 2 로 정리 · ⑶ 은 모든 내각에 대해 확인 · ⑷ 는 반례"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑴ 참인 명제, ⑶ 참인 명제, ⑷ 거짓인 명제"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/170-408.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '⑴ 의 근호 안 수(4 → 9 · 2 · 8)와 ⑵ 의 일차방정식 계수를 바꿀 수 있다. 제약: ⑴ 은 근호가 벗겨지는지 여부로 참·거짓이 뒤집히므로 완전제곱수인지 아닌지를 의도적으로 고르고, ⑵ 는 x 계수가 서로 달라 해가 하나여야 조건이 된다.'
    creative: '(1) ⑶ 의 부등호를 「90°보다 작다」로 바꾸면 직각 자신이 반례가 되어 거짓으로 뒤집힘(★2 유지 · 경계 훈련) (2) 거짓인 항목마다 반례를 쓰게 하는 서술형(★3) (3) ⑵ 를 3x=3x-4 로 바꿔 항등적으로 거짓인 명제로 만들기(★2 · 169-403 ④ 와 같은 장치).'
```

```yaml
- id: GN-CM2-170-409
  page: 170
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    보기 ㄱ~ㄹ(2³<3² · 두 홀수의 곱은 홀수 · 6과 8의 최소공배수는 48 · 정사각형은 평행사변형) 중 참인 명제를 모두 고르기.
  category: "보기별 참·거짓 판별 → 계산·일반 성질·반례 혼합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "여러 명제의 참·거짓 판별(보기형)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ 은 8<9 로 수치 비교, ㄷ 은 최소공배수 24 를 직접 구해 48 과 다름을 보이면 되고, ㄹ 은 정사각형이 평행사변형의 특수한 경우라는 포함 관계다.
    ㄴ 만 개별 검산이 아니라 (2m+1)(2n+1)=2(2mn+m+n)+1 처럼 모든 홀수 쌍에 대해 성립함을 확인해야 하는데, 교과서 수준에서는 몇 개 예로 납득하는 선이라 통찰로 세지 않았다.
    확인체크 출발 ★2 · 통찰 없음 · M_total 5 → ★2 유지(네 항목 판별로 단계 수가 −1 조건을 상쇄).
  tier: star_2
  mechanism_primary: "보기 네 개를 각각 판정 → 거듭제곱 값 비교 · 홀수의 곱 일반형 · 최소공배수 계산 · 사각형 포함 관계"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄴ, ㄹ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/170-409.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'ㄱ 의 두 거듭제곱(2³ · 3²)과 ㄷ 의 두 수(6, 8)·제시 값(48)을 바꿀 수 있다. 제약: ㄷ 은 최대공약수를 곱해 버린 오답(48=6×8)이 함정이므로 두 수가 서로소가 아니어야 하고, ㄱ 은 값이 가까워야 암산으로 지나치지 않는다.'
    creative: '(1) 거짓인 보기의 반례나 올바른 값을 함께 쓰게 하기(★2 유지) (2) 「참인 명제의 개수」를 묻는 형태로 바꾸기(★2) (3) 보기에 「두 홀수의 합은 홀수이다」를 넣어 곱·합의 차이를 가르게 하면 일반화가 한 겹 더 들어와 ★3(I-EQV d1).'
```

```yaml
- id: GN-CM2-170-410
  page: 170
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    다섯 명제(√2+√5≠√7 · 3≤√5 · 13은 소수 · 1+√2 는 실수 · 정삼각형의 세 내각은 모두 같다) 중 그 부정이 참인 것 고르기. 5지선다.
  category: "부정이 참 → 원 명제가 거짓 → 거짓인 명제 찾기"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "다섯 개의 부정을 일일이 만들어 참·거짓을 따지지 않고, 「부정이 참」을 「원 명제가 거짓」으로 바꿔 읽어 거짓인 명제 하나를 찾는 문제로 옮긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "부정이 참인 명제 찾기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    동치 변환 뒤에는 거짓인 명제 찾기가 되어 ② 3≤√5 가 √5<3(√5≈2.2)이므로 거짓임을 보면 끝난다.
    ① 은 양변을 제곱하면 7+2√10 과 7 로 달라 ≠ 가 참이고, ③④⑤ 는 정의로 참이다. 함정은 부정의 참·거짓을 원 명제와 뒤집어 읽는 지점(T-표기)과 등호가 붙은 ≤ 의 경계(T-경계)다.
    확인체크 출발 ★2 · 통찰 1개(EQV d1) · M_total 6 → +1 조건(통찰 2개 이상 또는 depth 3)에 닿지 않아 ★2 유지.
  tier: star_2
  mechanism_primary: "「부정이 참」 → 「원 명제가 거짓」 → 각 선택지 참·거짓 판정 → 무리수 크기 비교로 ② 가 거짓"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/170-410.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '② 의 비교 상수(3)와 근호 안 수(5), ① 의 세 무리수 조합, ③ 의 소수(13)를 바꿀 수 있다. 제약: 거짓인 선택지가 정확히 하나여야 하고, ② 처럼 제곱해서 비교하면 판정이 끝나는 크기 관계라야 한다. ③ 을 15·21 같은 합성수로 바꾸면 정답이 둘이 되므로 함께 조정한다.'
    creative: '(1) 「그 부정이 거짓인 것」으로 물어 정답이 넷이 되는 개수 문제로 바꾸기(★2) (2) 각 선택지의 부정을 실제로 쓰게 하는 서술형(★2 · 169-404 골조 결합) (3) 「모든」·「어떤」이 붙은 명제를 섞으면 한정사 부정 규칙이 더해져 ★3(I-EQV d2).'
```

```yaml
- id: GN-CM2-171-e2
  page: 171
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수 예제"
  summary: |
    ⑴~⑶ 실수 전체의 집합에서 p: 1<x≤4, q: x<3 또는 x>5 일 때 ~p · (~p 또는 q) · (p 그리고 ~q) 의 진리집합.
  category: "조건 → 수직선 구간 → 여집합·합집합·교집합"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "부등식 조건의 진리집합과 논리 연산(합집합·교집합·여집합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    부정=여집합, 또는=합집합, 그리고=교집합으로 바꾼 뒤 수직선 위에서 구간을 겹쳐 읽는 표준 절차다.
    실수 전체가 전체집합이라 여집합의 등호가 반대로 붙고(1<x≤4 의 여집합은 x≤1 또는 x>4), ⑶ 에서 ~q=3≤x≤5 와 p 가 겹치는 구간의 양끝 등호가 서로 다른 조건에서 오는 점이 유일한 함정이다(T-경계).
    이 단원이 직접 가르치는 도구뿐이라 통찰 없음. 필수 예제 출발 ★2 · M_total 6 → ★2 유지.
  mechanism_primary: "p, q 를 수직선 구간 P, Q 로 → ~는 여집합 · 또는은 합집합 · 그리고는 교집합 → 경계 등호를 붙여 구간으로 정리"
  tier: star_2
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\{x \mid x\le 1$ 또는 $x>4\}$ ⑵ $\{x \mid x<3$ 또는 $x>4\}$ ⑶ $\{x \mid 3\le x\le 4\}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-cm2/items/171-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'p 의 두 경계(1, 4)와 q 의 두 경계(3, 5), 그리고 각 등호의 유무를 바꿀 수 있다. 제약: ⑵ 가 한 구간으로 합쳐지거나 실수 전체가 되지 않도록 p 의 상한과 q 의 아래쪽 구간이 겹치게 잡고, ⑶ 의 교집합이 공집합이 되지 않도록 p 가 ~q=[3,5] 와 겹치게 둔다.'
    creative: '(1) 세 답을 수직선 그림으로 표시하게 하기(★2 유지) (2) ⑶ 의 교집합이 공집합이 되도록 경계를 옮겨 공집합 처리를 묻기(★2) (3) 구간을 먼저 주고 p, q 의 연산식을 되묻는 역방향으로 바꾸면 ★3(171-413 골조 · I-EQV d1) (4) p 의 상한을 문자 a 로 두고 ⑶ 이 공집합이 되는 a 의 범위를 묻기(★3 · Mₐ +1).'
```

```yaml
- id: GN-CM2-171-411
  page: 171
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 전체집합 U={1,2,3,4,5,6} 에서 p: x 는 짝수, q: x²-5x+6=0 일 때 ~q · (p 또는 q) · (~p 그리고 q) 의 진리집합.
  category: "유한 전체집합의 진리집합 → 여집합·합집합·교집합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "유한 전체집합에서 조건의 진리집합과 논리 연산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P={2,4,6}, Q 는 (x-2)(x-3)=0 에서 {2,3} 이고 두 근 모두 U 안에 있다. 뒤는 여집합·합집합·교집합을 원소 나열로 처리하면 끝난다.
    ⑶ 에서 2 는 P 에 있으므로 ~p 에서 빠지고 3 만 남는 것이 유일한 확인 지점이다.
    확인체크 출발 ★2 · 통찰 없음 · M_total 5 지만 세 연산을 모두 다루므로 −1 하지 않고 ★2 유지. 169-406 의 여집합 골조에 합·교집합을 더한 자리다.
  tier: star_2
  mechanism_primary: "p, q 의 진리집합 P, Q 를 U 안에서 나열 → ~는 여집합 · 또는은 합집합 · 그리고는 교집합 → 원소 나열"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\{1,\,4,\,5,\,6\}$ ⑵ $\{2,\,3,\,4,\,6\}$ ⑶ $\{3\}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/171-411.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '전체집합의 크기(1~6), p 의 조건(짝수 → 3의 배수 · 소수), q 의 이차식 계수를 바꿀 수 있다. 제약: q 의 두 근이 정수라야 하고, 한 근은 P 안에 다른 근은 P 밖에 오도록 잡아야 ⑵⑶ 의 답이 서로 달라 연산을 구분해 볼 수 있다.'
    creative: '(1) 각 진리집합의 원소의 개수나 합을 묻기(★2 유지 · 171-412 골조) (2) q 의 한 근을 U 밖으로 보내 전체집합 필터를 살리기(★2 · 169-405 장치) (3) 세 답을 벤 다이어그램으로 표시하게 하기(★2) (4) 「~p 그리고 ~q」와 「~(p 또는 q)」가 같음을 확인시키면 드 모르간이 들어와 ★3(I-EQV d1).'
```

```yaml
- id: GN-CM2-171-412
  page: 171
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    전체집합 U={10 이하의 정수} 에서 p: -3≤x<3, q: x>0 일 때 조건 「p 그리고 ~q」 의 진리집합의 원소의 개수.
  category: "진리집합 교집합 → 정수 원소 개수 세기"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "「p 그리고 ~q」 진리집합의 원소 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ~q 는 x>0 의 부정이므로 x≤0 이고(0 포함), p 와 겹치면 -3≤x≤0 이다. 전체집합이 정수이므로 -3, -2, -1, 0 의 네 개.
    함정이 셋 겹친다 — 전체집합이 「10 이하의 정수」라 음수가 살아 있다는 점(자연수로 읽으면 공집합), x>0 의 부정에 0 이 들어간다는 경계(T-경계), 개수를 셀 때 0 을 빠뜨리는 점(T-범위).
    확인체크 출발 ★2 · 통찰 없음 · M_total 6 → ★2 유지. 익히기의 169-407 과 부정 골조는 같지만 구역 출발점이 달라 한 단 위에 둔다.
  tier: star_2
  mechanism_primary: "~q: x≤0 → p 와 교집합 -3≤x≤0 → 전체집합이 정수이므로 -3, -2, -1, 0 의 4 개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/171-412.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'p 의 두 경계(-3, 3)와 q 의 기준값(0), 전체집합의 상한(10)을 바꿀 수 있다. 제약: p 가 양쪽에서 막혀 있어야 전체집합이 무한해도 답이 유한하고, q 의 기준값이 p 의 구간 안에 있어야 교집합이 비지 않는다. 등호의 위치를 바꾸면 개수가 하나씩 달라지므로 답을 다시 계산해 제시한다.'
    creative: '(1) 원소의 개수 대신 원소의 합을 묻기(★2 유지) (2) 전체집합을 자연수로 바꿔 공집합이 되는 경우를 다루기(★2 · 전체집합 감각) (3) 전체집합을 실수로 바꿔 구간으로 답하게 하기(★2 · 171-e2 골조) (4) p 의 한쪽 경계를 문자 a 로 두고 원소가 4 개가 되는 a 의 범위를 묻는 역방향(★3 · I-BW d1).'
```

```yaml
- id: GN-CM2-171-413
  page: 171
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    실수 전체의 집합에서 p: x≥3, q: x<-2 의 진리집합을 각각 P, Q 라 할 때 조건 「-2≤x<3」 의 진리집합을 P, Q 의 집합 연산으로 나타낸 것 고르기. 5지선다.
  category: "주어진 구간 → P·Q 어느 쪽에도 없는 부분 → 드 모르간으로 선택지 꼴 맞추기"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구간 -2≤x<3 을 직접 만들려 하지 않고, 그것이 p 도 q 도 성립하지 않는 부분임을 보고 ~p 그리고 ~q, 즉 (P∪Q) 의 여집합으로 옮겨 읽는다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "주어진 구간을 진리집합의 집합 연산으로 나타내기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P∪Q 는 x<-2 또는 x≥3 이므로 그 여집합이 정확히 -2≤x<3 이다. 경계가 한쪽만 등호인 것도 P, Q 의 등호를 뒤집은 결과라 자동으로 맞는다.
    조건을 집합 연산으로 되짚는 역방향이라 선택지 없이 풀면 체감이 올라가지만, 선택지 다섯 개가 후보를 좁혀 주고 도구는 여집합·드 모르간뿐이다.
    확인체크 출발 ★2 · 통찰 1개(EQV d1) · M_total 7 로 이 범위에서 가장 무겁다. +1 조건(통찰 2개 이상 또는 depth 3)에 닿지 않아 ★2 로 두되 ★3 후보로 기록한다.
    [분류 이슈] 역방향 + 드 모르간 구조상 ★3 후보이나 선택지 보정과 통찰 1개 기준으로 ★2 라벨 유지.
  tier: star_2
  mechanism_primary: "-2≤x<3 은 p 도 q 도 아닌 부분 → ~p 그리고 ~q → 드 모르간으로 (P∪Q) 의 여집합"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/171-413.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: 'p, q 의 경계값(3, -2)과 등호의 위치를 바꿀 수 있다. 제약: 두 진리집합이 서로 겹치지 않아야(q 의 상한 ≤ p 의 하한) 여집합이 하나의 구간으로 나오고, 등호는 목표 구간의 경계와 반대로 붙는다는 점을 맞춰 두어야 오답 선택지가 제구실을 한다.'
    creative: '(1) 목표 구간을 x<-2 또는 x≥3 으로 바꿔 답이 P∪Q 가 되게 하기(★1~2 · 한 겹 제거) (2) 두 조건이 겹치도록 경계를 옮겨 답이 P∩Q 의 여집합이 되게 하기(★3 · 드 모르간 두 방향 비교) (3) 선택지를 없애고 직접 쓰게 하는 서술형(★3 · I-EQV d2) (4) 세 번째 조건 r 을 추가해 P∪Q∪R 의 여집합을 묻기(★3 · Mₛ +1).'
```

## 표본 판정 요약 (13문)

- ★ 분포: ★1 5 · ★2 8 · ★3 0 · ★4 0 · ★5 0 (단원 도입부라 ★3 이상이 없다)
- 통찰형 2(170-410 · 171-413 · 둘 다 I-EQV depth 1) · 절차형 11 · premium 0
- M_total 분포: 4 → 2문 · 5 → 6문 · 6 → 4문 · 7 → 1문(171-413)
- 내용 축별 문항 수: 명제 판별·참·거짓 4(169-403 · 170-e1 · 170-408 · 170-409) · 부정 3(169-404 · 169-407 · 170-410) · 진리집합과 논리 연산 6(169-405 · 169-406 · 171-e2 · 171-411 · 171-412 · 171-413)
- type_hint 상위: 「명제의 판별과 참·거짓(반례)」 2 · 나머지 11 종은 각 1(「명제와 조건의 구별」 · 「명제의 부정」 · 「조건의 부정(드 모르간)」 · 「조건의 진리집합」 · 「조건과 그 부정의 진리집합(여집합)」 · 「여러 명제의 참·거짓 판별(보기형)」 · 「부정이 참인 명제 찾기」 · 「부등식 조건의 진리집합과 논리 연산」 · 「유한 전체집합에서 조건의 진리집합과 논리 연산」 · 「p 그리고 ~q 진리집합의 원소 개수」 · 「주어진 구간을 진리집합의 집합 연산으로」)
- 그림 0문 · 선택지 문항 3(169-403 · 170-410 · 171-413) · 소문항 묶음 7문 · 대상층은 하위권 5 · 중하위권 6 · 중위권 2

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 갈려 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-171-413 | 역방향(주어진 구간 → P·Q 연산) + 드 모르간으로 M_total 7 · 통찰 1 → ★3 후보. 선택지 보정과 +1 기준(통찰 2개 이상) 미달로 ★2 라벨 유지 | ★2 / ★3 |
| GN-CM2-169-407 · GN-CM2-171-412 | 부정·드 모르간이라는 같은 골조인데 구역 출발점만 달라 ★1 / ★2 로 갈렸다(익히기 vs 확인체크 · M_total 은 둘 다 6). 카탈로그가 생기면 같은 유형으로 묶고 base ★ 를 하나로 정해야 함 | ★1 / ★2 |
| GN-CM2-169-403 | ④ 7-x=2-x 를 「미지수가 있어도 항등적으로 거짓이라 명제」로 판정하는 단계는 익히기 통번호치고 판별력이 높다(170-408 ⑵ 와 대비쌍). 라벨은 익히기 출발점대로 ★1 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 **따로 세워야 할 유형**은 셋뿐이다 — ⑴ 「명제·조건의 구별과 참·거짓 판별(반례)」(169-403 · 170-e1 · 170-408 · 170-409 를 한 유형으로 통합 가능) ⑵ 「명제와 조건의 부정(드 모르간·부등호 경계)」(169-404 · 169-407 · 170-410) ⑶ 「조건의 진리집합과 논리 연산」(169-405 · 169-406 · 171-e2 · 171-411 · 171-412).
- **통합해도 될 것**: 「유한 전체집합의 원소 나열」(169-405 · 169-406 · 171-411)과 「실수 구간 수직선」(171-e2 · 171-412)은 전체집합의 종류만 다른 같은 골조라 한 유형의 두 변형으로 두면 된다. 원소의 개수·합을 묻는 171-412 도 별도 유형이 아니라 발문 변형이다.
- **따로 남겨야 할 것**: 171-413 의 「주어진 구간을 P·Q 의 집합 연산으로 되짚기」는 방향이 반대라 위 ⑶ 에 넣지 말고 별도 유형(base ★ 2~3)으로 두는 것이 낫다. 170-410 의 「부정이 참 → 원 명제가 거짓」도 부정 유형 안의 상위 변형으로 표시해 둘 것.
- 이 단원은 ★3 이상이 없으므로, 뒤 단원(명제의 참·거짓, 충분조건·필요조건, 절대부등식)의 유형과 묶어 base ★ 를 정하는 편이 안전하다.
