---
name: mechanism-데이터-GN-M31-14
description: 개념원리 중학 3-1 14 이차방정식의 근의 공식(1/1 · 137~141쪽 22문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-1 · 전사본 latex-bank/gn-m31
  section: 14 이차방정식의 근의 공식
  unit_code: "14"
  part: "1/1"
  extract_range: "137~141쪽 · 137-01~141-05"
  total_problems: 22
  unit_total: 22
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m31/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m31/items/<id>.tex
  image_source: latex-bank/gn-m31/figures/ (이 범위는 그림 문항 없음)
---

# 개념원리 중학 3-1 · 14 이차방정식의 근의 공식 (1/1) 정독 데이터 (v1.0)

이 파일은 137~141쪽 22문항 전수를 다룬다. 구역은 「개념원리 확인하기」 3문 · 「핵심문제 익히기」 8문(핵심문제 `쪽-hN` 4문 + 확인문제 `쪽-cN` 4문) · 「계산력 강화하기」 6문 · 「이런 문제가 시험에 나온다」 5문이다. 개념원리 중학은 별도 난이도(level) 표기가 없고 **구역 자체가 난이도 층**이며, 태그는 `139-h4` 의 「UP」 하나뿐이다. 그림 문항은 없다.

단원 성격상 골조가 좁다. 거의 모든 문항이 `계수 정리 → 근의 공식(또는 짝수 공식) → 근호 간단히` 한 줄이고, 앞에 붙는 정리 단계(괄호 전개 · 소수/분수 계수 정수화 · 공통부분 치환)가 무엇이냐로만 갈린다. 그래서 통찰(I) 라벨이 붙는 문항이 극히 적고(1문), ★ 차이는 대부분 **정리 단계가 몇 겹이고 그 뒤에 파생량(두 근의 차·합·다른 방정식)을 한 번 더 묻느냐**에서 나온다. 「계산력 강화하기」 는 계산 마찰만 두꺼운 구역이라 v3.8 §2.11(friction 은 ★ 상승 신호가 아님)에 따라 M_total 이 6이어도 ★1 을 유지했고, 같은 골조인 「핵심문제 익히기」 문항과 ★ 가 1단 갈리는 지점은 분류 이슈로 기록했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 특히 이 단원의 숫자 변형은 **판별식이 완전제곱수인지(유리근/무리근이 갈림)** 와 **분모 약분 가능 여부** 두 제약이 거의 전부이므로 `variation_notes.numeric` 에 그 제약을 명시했다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M31-137-01
  page: 137
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴⑵ 근의 공식으로 이차방정식을 푸는 과정의 빈칸 채우기. ⑴ 은 일반형 공식(분모 2a), ⑵ 는 b 가 짝수일 때의 공식(분모 a) 틀이 미리 주어져 있다.
  category: "a·b·c 식별 → 근의 공식 틀에 대입 → 근호 안 정리"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근의 공식 대입 과정 완성(일반형·짝수 공식)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    빈칸이 대입 자리마다 찍혀 있어 학생이 할 일은 계수 읽기와 한 번의 근호 정리뿐이다.
    ⑵ 에서 b'=-3, c=-2 라는 음수를 괄호째 넣어야 하는 T-부호 함정만 있다.
    개념원리 확인하기 구역 ★1 출발 · 통찰 0 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "a·b·c 식별 → 근의 공식(또는 짝수 공식) 대입 → 판별식 계산 → 근"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $7$, $2$, $4$, $\dfrac{-7\pm\sqrt{17}}{4}$ ⑵ $-3$, $-3$, $5$, $-2$, $\dfrac{3\pm\sqrt{19}}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/137-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "2x²+7x+4, 5x²-6x-2 의 계수 전부. 제약: ⑵ 는 b 가 짝수여야 분모 a 짝수 공식 틀이 유지된다. 두 문항 모두 판별식이 양수이되 완전제곱수가 아니어야 빈칸 마지막 답이 근의 공식 꼴로 남는다."
    creative: "(1) 빈칸을 판별식 값 하나만 묻는 형태로 줄이기(★1 유지) (2) 계수 하나를 상수 k 로 두고 근이 주어진 상태에서 k 를 되묻기(역방향 → ★2 · I-BW) (3) 같은 식을 일반형·짝수 공식 두 틀로 나란히 풀게 해 결과가 같음을 확인시키기(★2 · 풀이 선택 감각)."
```

```yaml
- id: GN-M31-137-02
  page: 137
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴~⑷ 정리가 끝난 네 이차방정식을 근의 공식으로 풀기.
  category: "근의 공식 대입 → 근호 간단히·약분"
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근의 공식을 이용한 이차방정식의 풀이"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    이미 ax²+bx+c=0 꼴로 주어져 정리 단계가 없다. ⑶ 은 근호 안 12 를 2√3 으로 줄인 뒤 분모 2 와 약분해야 하고
    ⑷ 는 근호 안 24 를 2√6 으로 줄여도 분모가 남는다 — 약분이 되는 경우와 안 되는 경우를 한 세트에 넣은 구성이다.
    통찰 0 · M_total 4 · 개념원리 확인하기 구역 → ★1.
  tier: star_1
  mechanism_primary: "a,b,c 대입 → 판별식 계산 → 근호 간단히 → 분모와 약분 가능 여부 확인"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=\dfrac{-3\pm\sqrt{37}}{2}$ ⑵ $x=\dfrac{1\pm\sqrt{13}}{6}$ ⑶ $x=-2\pm\sqrt{3}$ ⑷ $x=\dfrac{4\pm\sqrt{6}}{2}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-m31/items/137-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 식의 계수 전부. 제약: 판별식 ≥ 0 이고 완전제곱수가 아니어야 근의 공식 연습이 되며, 한 세트 안에 약분되는 것(⑶ 처럼 b 짝수 + 판별식이 4의 배수)과 안 되는 것을 섞어야 문항 의도가 유지된다."
    creative: "(1) 판별식이 완전제곱수인 식을 하나 끼워 '인수분해가 더 빠른 경우'를 자각시키기(★2 · 풀이 선택) (2) 계수가 큰 식을 넣어 짝수 공식을 쓰게 유도(★1~2) (3) 네 식의 근 중 유리수인 것 고르기로 바꾸면 판별식 판정이 주 골조가 됨(★2)."
```

```yaml
- id: GN-M31-137-03
  page: 137
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념확인"
  summary: |
    ⑴~⑷ 바로 풀 수 없는 이차방정식을 정리해 푸는 과정의 빈칸 채우기. ⑴ 괄호 전개, ⑵ 소수 계수, ⑶ 분수 계수, ⑷ 공통부분 치환으로 네 가지 정리 기법을 한 문항에 모았다.
  category: "정리 기법 선택(전개·정수화·치환) → ax²+bx+c=0 → 인수분해 또는 근의 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "복잡한 이차방정식의 정리 과정 완성(괄호·소수·분수·공통부분)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 기법을 모아 M_total 은 6까지 올라가지만, 빈칸이 '양변에 □을 곱하면', 'x-3=A로 놓으면' 처럼 단계를 전부 지정해 준다.
    학생이 결정할 것은 곱할 수(10, 12)와 인수분해 인수뿐이라 판단 부담이 없다. ⑷ 는 A 를 구하고 x 로 되돌리는 T-표기 함정이 있다.
    개념원리 확인하기 구역 ★1 출발 · 통찰 0 · 안내된 빈칸 → ★1 유지.
  tier: star_1
  mechanism_primary: "괄호 전개·양변에 10 또는 12 곱하기·공통부분 A 치환 → 정수 계수 이차방정식 → 인수분해 또는 근의 공식 → (치환이면) x 로 되돌리기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $2$, $4$, $1\pm\sqrt{5}$ ⑵ $10$, $8$, $20$, $10$, $10$ ⑶ $12$, $9$, $8$, $\dfrac{-9\pm\sqrt{17}}{4}$ ⑷ $1$, $1$, $1$, $4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/137-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 두 일차식과 우변 상수, ⑵ 의 소수 자릿수(0.1 → 0.01 이면 곱할 수가 100), ⑶ 의 분모 조합(최소공배수가 곱할 수), ⑷ 의 공통부분과 A 이차식. 제약: ⑵⑷ 는 인수분해로 유리근이 나와야 빈칸 구조가 유지되고, ⑴⑶ 은 판별식이 완전제곱수가 아니어야 근의 공식 빈칸이 살아난다."
    creative: "(1) 빈칸을 없애고 '적절한 방법으로 푸시오'로 바꾸면 기법 선택이 학생 몫이 되어 ★2 (2) 같은 식을 두 기법(전개 후 근의 공식 vs 치환)으로 풀게 해 비교시키기(★2~3 · I-SC) (3) ⑵ 에서 소수 자릿수를 섞어(0.1 과 0.05) 곱할 수를 잘못 고르면 정수가 안 되게 만들기(★2 · T-단위 강화)."
```

### 핵심문제 익히기

```yaml
- id: GN-M31-138-h1
  page: 138
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴~⑷ 네 이차방정식을 근의 공식으로 풀기. 이 단원의 대표 핵심문제.
  category: "근의 공식 대입 → 근호 간단히 → 약분"
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식의 근의 공식"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 은 근호 안 45 를 3√5 로 줄이고, ⑶ 은 b 가 짝수라 짝수 공식이 빠르다 — 두 가지 정리 감각을 묻지만 단계 자체는 대입 한 번이다.
    핵심문제 익히기 구역 ★2 출발이나 통찰 0 · M_total 4 → −1 → ★1. 137-02 · 140-01 과 골조가 완전히 같다.
  tier: star_1
  mechanism_primary: "a,b,c 대입 → 판별식 계산 → 근호 간단히 → 약분(b 가 짝수면 짝수 공식으로 단축)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=\dfrac{-1\pm3\sqrt{5}}{2}$ ⑵ $x=\dfrac{7\pm\sqrt{33}}{8}$ ⑶ $x=-3\pm\sqrt{5}$ ⑷ $x=\dfrac{2\pm\sqrt{19}}{3}$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/138-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 식의 계수 전부. 제약: 판별식 > 0 이고 완전제곱수가 아닐 것, 한 세트에 근호 간단히(⑴)·짝수 공식(⑶)·약분 불가(⑵⑷)가 각각 한 번씩 들어갈 것."
    creative: "(1) 네 식 중 근이 정수인 것 찾기로 바꾸기(★2 · 판별식 판정) (2) 한 식의 상수항을 미지수로 두고 근이 하나뿐이 되게 하는 값 묻기(★3 · I-BW · 중복근은 다음 단원 선행) (3) 근의 공식 유도 과정(완전제곱 꼴 만들기)의 빈칸으로 바꾸기(★2)."
```

```yaml
- id: GN-M31-138-c1
  page: 138
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    이차방정식 $2x^2-3x+k=0$ 의 근이 $x=\dfrac{3\pm\sqrt{17}}{4}$ 일 때 상수 $k$ 구하기.
  category: "근의 공식으로 근을 k 로 표현 → 주어진 근과 꼴 비교 → 근호 안 등식 → k"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "근이 먼저 주어진 상태에서 근의 공식의 어느 자리가 17 이어야 하는지를 역추적해 9-8k=17 을 세움"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "근이 주어진 이차방정식에서 미정 계수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    k 를 그대로 둔 채 근의 공식을 써서 x=(3±√(9-8k))/4 를 만들고, 분모·분자 앞부분이 이미 맞으므로 근호 안만 비교하면 된다.
    근을 대입해 푸는 정공법보다 꼴 비교가 훨씬 빠르다는 것을 학생이 알아채야 해서 I-BW d1 을 인정했다.
    핵심문제 확인문제 ★2 출발 · 통찰 1 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "k 를 남긴 채 근의 공식 적용 → x=(3±√(9-8k))/4 → 근호 안 9-8k=17 → k"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/138-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "2x²-3x+k 의 a,b 와 주어진 근의 근호 안 값. 제약: 주어진 근의 분모가 2a 와 같아야 하고 분자 앞 항이 -b 와 같아야 꼴 비교가 성립한다. 근호 안 값은 b²-4ac 에 대입했을 때 k 가 정수로 떨어지는 값으로 고른다."
    creative: "(1) 미지수를 상수항이 아니라 일차항 계수에 두면 근호 안이 k 의 이차식이 되어 k 가 둘 나오고 검증이 필요해짐(★3 · I-VF) (2) 근을 x=(A±√B)/C 꼴로 주고 A,B,C 를 모두 되묻기(★2) (3) 두 근 중 하나만 주고 나머지 근과 k 를 함께 묻기(★3 · I-BW d2)."
```

```yaml
- id: GN-M31-138-h2
  page: 138
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴⑵ 괄호가 있는 이차방정식 풀기. ⑵ 는 양변에 모두 이차항이 있어 이항 후에야 이차방정식이 된다.
  category: "괄호 전개 → 이항해 ax²+bx+c=0 → 인수분해 가능하면 인수분해, 아니면 근의 공식"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "괄호가 있는 이차방정식의 풀이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 전개 후 4x²+6x+1=0 이 되어 인수분해가 안 되므로 짝수 공식으로 가고, ⑵ 는 이항하면 x²-10x+16=0 으로 인수분해가 된다.
    정리한 뒤 '인수분해인가 근의 공식인가'를 판별식으로 가르는 판단이 한 겹 붙는다 — 다만 이 단원의 표준 절차라 통찰로는 세지 않았다.
    핵심문제 구역 ★2 출발 · M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "괄호 전개 → 한쪽으로 이항해 정리 → 인수분해 시도 → 안 되면 근의 공식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x=\dfrac{-3\pm\sqrt{5}}{4}$ ⑵ $x=2$ 또는 $x=8$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/138-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 (2x+1)² 안 계수와 덧붙는 일차항, ⑵ 양변의 두 이차식. 제약: ⑵ 처럼 양변 이차항이 남으려면 두 이차항 계수가 달라야 하고, 세트 의도상 ⑴ 은 판별식이 완전제곱수가 아니고 ⑵ 는 완전제곱수여야 한다."
    creative: "(1) 양변 이차항 계수를 같게 만들어 일차방정식이 되게 하기(★2 · T-범위 함정, 이차방정식이 아님을 알아채야 함) (2) 괄호 안에 공통부분이 보이도록 만들어 전개 대신 치환이 빠르게 하기(★3 · I-SC) (3) 전개 결과의 상수항을 미지수로 두고 해가 정수가 되게 하는 값 묻기(★3 · I-BW)."
```

```yaml
- id: GN-M31-138-c2
  page: 138
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ⑴⑵ 괄호가 있는 이차방정식 풀기. 둘 다 양변에 이차항이 있고 ⑵ 는 이항하면 x² 계수가 음수가 된다.
  category: "괄호 전개 → 이항·부호 정리 → 공약수로 나누기 → 인수분해 또는 근의 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "괄호가 있는 이차방정식의 풀이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 4x²+12x-12=0 에서 4로 나눠 x²+3x-3=0 으로 줄이는 단계가, ⑵ 는 이항 후 x² 계수가 음수라 양변에 -1 을 곱해 부호를 뒤집는 단계가 각각 함정이다(T-부호).
    나눠 주지 않으면 근의 공식 계산이 불필요하게 무거워진다. 확인문제 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "양변 전개 → 이항 정리 → 공약수로 나누고 x² 계수를 양수로 → 인수분해 또는 근의 공식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x=\dfrac{-3\pm\sqrt{21}}{2}$ ⑵ $x=-1$ 또는 $x=\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/138-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 7x²=3(x-2)² 두 계수, ⑵ 의 두 이차식. 제약: ⑴ 은 정리 후 계수에 공약수가 남도록(4로 나눠지도록) 잡아야 함정이 살고, ⑵ 는 이항 후 x² 계수가 음수가 되도록 우변 이차항 계수를 좌변보다 크게 둔다."
    creative: "(1) ⑴ 의 좌변 계수를 완전제곱수로 바꾸면 7x²=3(x-2)² 가 √ 를 씌워 일차식 두 개로 갈라짐(★3 · I-RT) (2) 양변을 (x-2)² 로 보고 비 (x/(x-2))² 로 치환(★3 · I-SC) (3) ⑵ 에서 우변 계수를 미지수로 두고 한 근이 -1 이 되게 하는 값 묻기(★3 · I-BW)."
```

```yaml
- id: GN-M31-139-h3
  page: 139
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴ 소수 계수, ⑵ 분수 계수 이차방정식 풀기.
  category: "양변에 10의 거듭제곱 또는 분모의 최소공배수 곱하기 → 정수 계수 → 근의 공식 또는 인수분해"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "계수가 소수 또는 분수인 이차방정식의 풀이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    골조는 '정수화 한 번 + 표준 풀이'이고 결정할 것은 곱할 수 하나다(⑴ 10, ⑵ 6).
    함정은 일부 항에만 곱하거나(T-단위) ⑴ 처럼 x² 계수가 이미 1이라 곱하면 10이 된다는 점을 놓치는 것.
    ⑴ 은 정수화 후 인수분해가 안 되어 근의 공식, ⑵ 는 인수분해로 갈리는 대비 구성이다. 핵심문제 ★2 출발 → ★2 유지.
  tier: star_2
  mechanism_primary: "양변에 10(또는 분모 최소공배수) 곱해 정수 계수화 → 인수분해 시도 → 안 되면 근의 공식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x=\dfrac{5\pm\sqrt{65}}{20}$ ⑵ $x=-4$ 또는 $x=\dfrac{2}{3}$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/139-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 소수 계수(자릿수를 늘리면 곱할 수가 100), ⑵ 의 분모 조합. 제약: 곱할 수는 모든 계수를 정수로 만드는 최소값이어야 하고, 세트 의도상 한 쪽은 판별식이 완전제곱수(인수분해), 다른 쪽은 아니게(근의 공식) 둔다."
    creative: "(1) 소수와 분수를 한 식에 섞어 곱할 수 판단을 어렵게(★2 · 140-06 유형) (2) 정수화한 식이 짝수 공식 대상이 되게 b 를 짝수로 잡기(★2) (3) 계수 하나를 소수로 둔 채 두 근의 곱이 주어지게 해 역으로 계수를 묻기(★3 · I-BW)."
```

```yaml
- id: GN-M31-139-c3
  page: 139
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ⑴~⑷ 소수·분수 계수 이차방정식 풀기. ⑷ 는 분수식이 양변에 걸쳐 있어 먼저 통분·정리해야 한다.
  category: "양변에 적절한 수 곱해 정수화 → 전개·이항 정리 → 인수분해 또는 근의 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "계수가 소수 또는 분수인 이차방정식의 풀이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴⑵ 는 ×10, ⑶ 은 ×20, ⑷ 는 ×6 으로 곱할 수가 매번 달라 최소공배수를 그때그때 따져야 한다.
    특히 ⑶ 은 분모가 5, 10, 4 라 20 을 놓치기 쉽고, ⑷ 는 우변 -1/3 까지 곱해야 하는 T-단위 함정이 있다.
    정리 뒤 골조는 모두 동일. 확인문제 ★2 출발 · 통찰 0 → ★2 유지.
  tier: star_2
  mechanism_primary: "분모·소수 자릿수 확인 → 양변에 최소공배수 곱해 정수화 → 이항 정리 → 인수분해 또는 근의 공식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x=-3$ 또는 $x=-\dfrac{1}{2}$ ⑵ $x=\dfrac{5\pm\sqrt{10}}{3}$ ⑶ $x=\dfrac{-1\pm\sqrt{21}}{4}$ ⑷ $x=-4$ 또는 $x=\dfrac{5}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/139-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 식의 소수 자릿수·분모 조합. 제약: 곱할 수가 문항마다 달라야(10·10·20·6 처럼) 세트 의도가 살고, 정수화 후 계수에 공약수가 남으면 한 번 더 나누는 단계가 추가된다."
    creative: "(1) 우변에 상수를 남겨 두어 양변 모두에 곱해야 함을 강조(★2) (2) 분모에 x 가 들어간 식으로 바꾸면 분모 ≠ 0 검증이 필요해짐(★3 · I-VF · 중3 범위 경계) (3) 정수화 결과가 같아지는 두 식을 제시하고 해가 같은 이유를 묻기(★3 · I-EQV)."
```

```yaml
- id: GN-M31-139-h4
  page: 139
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: ["UP"]
  category_type: "핵심문제"
  summary: |
    공통부분이 있는 이차방정식 $2(x+2)^2-5(x+2)-3=0$ 풀기.
  category: "공통부분 A 치환 → A 의 이차방정식 인수분해 → A 값을 x 로 되돌리기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공통부분이 있는 이차방정식의 풀이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x+2=A 로 놓으면 2A²-5A-3=0 → (2A+1)(A-3)=0 으로 인수분해되고, A=-1/2, 3 을 x 로 되돌려 끝난다.
    함정은 A 값을 그대로 답으로 쓰는 것(T-표기) 하나. 전개해도 풀리지만 치환이 명백히 빠르다.
    [분류 이슈] 벤더 「UP」 태그는 +1 신호이나 공통부분 치환이 이 단원에서 명시적으로 가르치는 표준 절차이고 통찰 0 · M_total 5 라 ★2 로 두고 기록만 한다(★2/★3).
  tier: star_2
  mechanism_primary: "x+2=A 치환 → 2A²-5A-3=0 인수분해 → A=-1/2, 3 → x=A-2 로 되돌리기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$x=-\dfrac{5}{2}$ 또는 $x=1$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/139-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통부분 (x+2) 안의 상수와 A 이차식 계수 2, -5, -3. 제약: A 이차식이 인수분해되면 유리근, 아니면 근의 공식으로 넘어가 ★가 한 단 올라간다(139-c4 ⑴ 이 그 경우). 되돌린 x 가 정수·간단한 분수가 되도록 공통부분 상수를 고른다."
    creative: "(1) 공통부분을 (2x-1) 처럼 일차항 계수가 1이 아닌 식으로 바꾸면 되돌리는 단계에서 나눗셈이 추가됨(★3) (2) 공통부분을 x²-x 처럼 이차식으로 두면 되돌릴 때 이차방정식이 두 개 나와 근이 넷이 됨(★4 · I-MI) (3) 전개했을 때와 치환했을 때의 계산량을 비교시키기(★3 · I-SC)."
```

```yaml
- id: GN-M31-139-c4
  page: 139
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ⑴⑵ 공통부분이 있는 이차방정식 풀기. ⑴ 은 치환한 이차식이 인수분해되지 않아 근의 공식으로 간다.
  category: "공통부분 A 치환 → A 의 이차방정식 풀이(인수분해 또는 근의 공식) → x 로 되돌리기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공통부분이 있는 이차방정식의 풀이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 A²+4A-3=0 이 인수분해되지 않아 A=-2±√7 을 얻은 뒤 x=A+1 로 되돌려야 하고, 무리수를 되돌리는 과정에서 실수가 잦다(T-표기).
    ⑵ 는 3A²-16A+5=0 이 (3A-1)(A-5)=0 으로 갈려 유리근. 139-h4 와 같은 골조에 '치환 후 근의 공식' 경우를 추가한 구성.
    확인문제 ★2 출발 · 통찰 0 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "공통부분 A 치환 → A 이차방정식 풀이 → A 값에 공통부분 식을 되돌려 x"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $x=-1\pm\sqrt{7}$ ⑵ $x=-\dfrac{8}{3}$ 또는 $x=2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/139-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통부분 안 상수((x-1), (x+3))와 A 이차식 계수. 제약: ⑴ 은 판별식이 완전제곱수가 아니어야 '치환 + 근의 공식' 의도가 유지되고, 되돌린 뒤 무리수 근의 상수부가 간단해지도록 공통부분 상수를 1, 2 같은 작은 수로 둔다."
    creative: "(1) 두 소문항의 공통부분을 같게 두고 A 이차식만 바꿔 인수분해/근의 공식 갈림을 대비시키기(★2) (2) 공통부분을 스스로 찾게 전개된 꼴로 제시하기(★3 · I-EQV) (3) 되돌린 두 근의 합·차를 추가로 묻기(★3 · 141-05 유형)."
```

### 계산력 강화하기

```yaml
- id: GN-M31-140-01
  page: 140
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력"
  summary: |
    ⑴~⑸ 다섯 이차방정식을 근의 공식으로 풀기. ⑸ 는 우변에 항이 남아 있어 먼저 이항한다.
  category: "이항 정리 → 근의 공식 대입 → 근호 간단히"
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근의 공식을 이용한 이차방정식의 풀이"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    다섯 식 모두 판별식이 완전제곱수가 아니어서 근의 공식 한 번으로 끝난다. ⑸ 만 2x²+5x-2=0 으로 옮기는 이항이 앞에 붙는다.
    계산력 강화하기 구역 ★1 · 통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "우변 항을 이항해 ax²+bx+c=0 → 근의 공식 대입 → 근호 간단히"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=\dfrac{-1\pm\sqrt{5}}{2}$ ⑵ $x=\dfrac{9\pm\sqrt{13}}{2}$ ⑶ $x=\dfrac{3\pm\sqrt{57}}{6}$ ⑷ $x=\dfrac{-7\pm\sqrt{29}}{10}$ ⑸ $x=\dfrac{-5\pm\sqrt{41}}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/140-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다섯 식의 계수 전부. 제약: 판별식 > 0 이고 완전제곱수가 아니어야 하며, 근호 안이 4·9 의 배수가 아니어야 '간단히 하기 없는 순수 대입' 이라는 세트 성격이 유지된다."
    creative: "(1) 근호 안이 4의 배수인 식을 섞어 간단히 하기·약분을 요구(★1) (2) b 가 짝수인 식만 모아 짝수 공식 세트로(140-02 유형) (3) 다섯 식 중 근이 무리수인 것의 개수를 묻기(★2 · 판별식 판정)."
```

```yaml
- id: GN-M31-140-02
  page: 140
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력"
  summary: |
    ⑴~⑸ 일차항 계수가 모두 짝수인 다섯 이차방정식 풀기(짝수 공식 연습).
  category: "b=2b' 확인 → 짝수 공식 대입 → 근호 간단히·약분"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "짝수 공식(b=2b')을 이용한 이차방정식의 풀이"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    다섯 식 모두 b 가 짝수라 분모가 a 인 공식이 빠르다. 함정은 b 대신 b'=b/2 를 넣어야 한다는 점과 a 로만 나눈다는 점(T-표기).
    ⑵⑷ 처럼 근호 안이 4·6 의 배수면 간단히 한 뒤 약분까지 가야 최종형이 된다.
    계산력 강화하기 구역 ★1 · 통찰 0 → ★1.
  tier: star_1
  mechanism_primary: "b'=b/2 로 두고 x=(-b'±√(b'²-ac))/a 대입 → 근호 간단히 → 약분"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=1\pm\sqrt{3}$ ⑵ $x=-5\pm2\sqrt{5}$ ⑶ $x=\dfrac{4\pm\sqrt{10}}{2}$ ⑷ $x=\dfrac{-2\pm\sqrt{6}}{3}$ ⑸ $x=\dfrac{3\pm\sqrt{3}}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/140-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다섯 식의 계수. 제약: b 가 반드시 짝수여야 세트 의도가 유지되고, b'²-ac > 0 이며 완전제곱수가 아니어야 한다. 약분이 되는 경우(⑴⑵)와 안 되는 경우(⑶⑸)를 섞는다."
    creative: "(1) b 가 홀수인 식을 하나 끼워 짝수 공식을 쓸 수 없음을 판단하게(★2 · T-표기) (2) 같은 식을 두 공식으로 풀어 결과가 같음을 확인시키기(★2) (3) 짝수 공식 유도(양변을 a 로 나눈 뒤 완전제곱)를 빈칸으로(★2)."
```

```yaml
- id: GN-M31-140-03
  page: 140
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력"
  summary: |
    ⑴~⑶ 괄호가 있는 이차방정식 풀기. ⑵ 는 양변이 모두 완전제곱 꼴, ⑶ 은 양변에 이차식이 있다.
  category: "괄호 전개 → 이항·공약수 정리 → 인수분해 또는 근의 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "괄호가 있는 이차방정식의 풀이"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑵ 는 (x+4)²=(2x-1)² 이므로 전개 후 3x²-12x-15=0 → x²-4x-5=0 으로 3을 나누는 단계가, ⑶ 은 양변 이차항을 상쇄한 뒤 x²-4x-8=0 을 얻는 단계가 부담이다.
    판단 요소는 없고 전개·이항의 계산량만 두껍다.
    [분류 이슈] 같은 골조의 138-h2·138-c2 는 핵심문제 구역이라 ★2 인데 이쪽은 계산력 강화 구역 ★1 출발이다. v3.8 §2.11 에 따라 계산 마찰은 ★ 상승 신호가 아니므로 ★1 로 두고 기록만 한다(★1/★2).
  tier: star_1
  mechanism_primary: "괄호 전개 → 이항해 정리 → 공약수로 나누기 → 인수분해 또는 근의 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=-2\pm\sqrt{2}$ ⑵ $x=-1$ 또는 $x=5$ ⑶ $x=2\pm2\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/140-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 문항의 괄호 안 일차식과 우변. 제약: ⑵ 는 양변 제곱 꼴을 유지하려면 두 일차식의 x 계수가 달라야 하고, ⑶ 은 양변 이차항 계수 차가 1 이 되게 두면 정리 후 x² 계수가 1 로 떨어져 계산이 감당 가능해진다."
    creative: "(1) ⑵ 를 A²=B² → A=±B 로 푸는 길과 전개하는 길을 비교시키기(★3 · I-SC) (2) 우변 상수를 미지수로 두고 한 근이 0 이 되게 하는 값 묻기(★3 · I-BW) (3) 세 식의 근 중 공통인 것을 찾게 하기(★3)."
```

```yaml
- id: GN-M31-140-04
  page: 140
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력"
  summary: |
    ⑴~⑷ 계수가 소수인 이차방정식 풀기. ⑷ 는 소수 자릿수가 달라 100 을 곱해야 한다.
  category: "소수 자릿수 확인 → 양변에 10의 거듭제곱 곱하기 → 인수분해 또는 근의 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "계수가 소수 또는 분수인 이차방정식의 풀이"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴~⑶ 은 ×10 이면 정수가 되지만 ⑷ 는 0.09·0.01 때문에 ×100 이 필요하다 — 자릿수가 가장 깊은 항을 기준으로 삼는다는 T-단위 함정.
    정수화 뒤 ⑴⑶ 은 인수분해, ⑵⑷ 는 근의 공식으로 갈린다.
    [분류 이슈] 같은 골조의 139-h3·139-c3 는 ★2 이나 여기는 계산력 강화 구역이고 마찰만 두꺼워 ★1 유지(★1/★2).
  tier: star_1
  mechanism_primary: "가장 깊은 소수 자릿수에 맞춰 양변에 10 또는 100 곱하기 → 정수 계수 → 인수분해 또는 근의 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=3$ 또는 $x=5$ ⑵ $x=\dfrac{-5\pm\sqrt{29}}{4}$ ⑶ $x=-1$ 또는 $x=\dfrac{10}{3}$ ⑷ $x=\dfrac{-9\pm\sqrt{41}}{20}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/140-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 식의 소수 계수. 제약: 한 문항은 자릿수를 섞어 ×100 이 필요하게 두고 나머지는 ×10 로 두어야 세트 의도가 산다. 정수화 후 판별식이 완전제곱수인 것과 아닌 것을 섞는다."
    creative: "(1) 소수와 분수를 한 식에 섞기(140-06 유형 ★1~2) (2) 정수화한 식의 계수에 공약수를 남겨 한 번 더 나누게 하기(★2) (3) 곱할 수를 틀리게 적용한 오답 풀이를 주고 어디가 틀렸는지 찾게 하기(★3 · I-VF)."
```

```yaml
- id: GN-M31-140-05
  page: 140
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력"
  summary: |
    ⑴~⑷ 계수가 분수인 이차방정식 풀기. ⑶⑷ 는 분수식이 양변에 걸쳐 있다.
  category: "분모의 최소공배수 곱하기 → 전개·이항 정리 → 인수분해 또는 근의 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "계수가 소수 또는 분수인 이차방정식의 풀이"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ ×6, ⑵ ×12, ⑶ ×10, ⑷ ×15 로 곱할 수가 매번 달라 분모 최소공배수를 그때그때 따져야 한다.
    ⑶⑷ 는 우변 분수까지 곱해야 하고 ⑷ 는 좌변 분자 (x²+x) 를 괄호째 곱하는 데서 실수가 난다(T-단위).
    [분류 이슈] 139-c3 와 골조 동일하나 구역이 계산력 강화라 ★1 유지(★1/★2).
  tier: star_1
  mechanism_primary: "분모의 최소공배수를 양변에 곱해 정수 계수화 → 전개·이항 → 인수분해 또는 근의 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=-\dfrac{1}{2}$ 또는 $x=\dfrac{5}{4}$ ⑵ $x=\dfrac{-1\pm\sqrt{5}}{3}$ ⑶ $x=-\dfrac{5}{2}$ 또는 $x=2$ ⑷ $x=\dfrac{1\pm\sqrt{61}}{10}$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/gn-m31/items/140-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 식의 분모 조합과 분자. 제약: 곱할 수가 문항마다 달라야 최소공배수 연습이 되고, 분자에 다항식이 오는 문항(⑶⑷)은 괄호로 묶여 있어야 한다. 정수화 결과의 판별식이 완전제곱수인 것과 아닌 것을 섞는다."
    creative: "(1) 분모를 크게 잡아(24·36) 최소공배수 계산 자체를 한 단계로 만들기(★1) (2) 양변에 곱하는 대신 통분해서 분자=0 으로 푸는 길과 비교시키기(★2 · I-SC) (3) 분모에 미지수를 넣어 분모 ≠ 0 검증을 강제(★3 · I-VF · 중3 범위 경계)."
```

```yaml
- id: GN-M31-140-06
  page: 140
  vendor_label: "계산력 강화하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "계산력"
  summary: |
    ⑴~⑷ 한 식 안에 소수와 분수가 섞인 이차방정식 풀기. ⑶⑷ 는 우변·다른 항까지 정리해야 한다.
  category: "소수를 분수로(또는 반대로) 통일 → 최소공배수 곱해 정수화 → 인수분해 또는 근의 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "계수가 소수 또는 분수인 이차방정식의 풀이"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    소수와 분수가 한 식에 있어 먼저 한 종류로 통일해야 곱할 수가 보인다(⑴ 0.2=1/5 → ×10, ⑵ 1.5=3/2 → ×6, ⑶ 0.5=1/2 → ×6, ⑷ 0.5=1/2 → ×8).
    통일을 건너뛰면 곱할 수를 잘못 고르는 T-단위 함정에 그대로 걸린다. 그 뒤 골조는 표준.
    [분류 이슈] 139-h3·139-c3 와 골조가 같고 통일 단계가 하나 더 붙지만 계산력 강화 구역이라 ★1 유지(★1/★2).
  tier: star_1
  mechanism_primary: "소수·분수를 한 종류로 통일 → 양변에 최소공배수 곱해 정수화 → 전개·이항 → 인수분해 또는 근의 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $x=\dfrac{1\pm\sqrt{41}}{10}$ ⑵ $x=\dfrac{-9\pm3\sqrt{13}}{2}$ ⑶ $x=\dfrac{4}{3}$ 또는 $x=2$ ⑷ $x=\dfrac{-2\pm\sqrt{6}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/140-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 식의 소수·분수 계수와 분모. 제약: 반드시 한 식 안에 소수와 분수가 함께 있어야 하고, 소수는 분수로 바꿨을 때 분모가 2·4·5 처럼 작아야 최소공배수가 감당된다. ⑵ 처럼 근호 안이 9의 배수면 3√13 으로 간단히 하는 단계가 추가된다."
    creative: "(1) 우변에도 소수·분수를 두어 양변 모두 정리하게(★1~2) (2) 정수화 결과가 같아지는 두 식(소수형·분수형)을 주고 해가 같은 이유를 묻기(★3 · I-EQV) (3) 곱할 수를 학생이 적어 넣는 빈칸형으로(137-03 유형 ★1)."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M31-141-01
  page: 141
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험출제"
  summary: |
    $2x^2-5x-1=0$ 의 근이 $x=\dfrac{A\pm\sqrt{B}}{4}$ 일 때 유리수 $A$, $B$ 에 대한 $A+B$ 의 값. 5지선다.
  category: "근의 공식으로 근 구하기 → 주어진 꼴과 항 대응 → A+B"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근의 공식 결과를 주어진 꼴과 비교해 미정 상수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    근의 공식을 그대로 쓰면 분모가 이미 4라 A, B 가 바로 읽힌다. 함정은 근호 안을 습관적으로 간단히 하려다 대응이 깨지는 것과 A 의 부호(T-표기·T-부호).
    A, B 라는 미정 상수 표현 때문에 Mₐ=2. 이런 문제가 시험에 나온다 구역 ★2~3 출발 · 통찰 0 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "근의 공식 → x=(5±√33)/4 → A=5, B=33 대응 → A+B"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/141-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "2x²-5x-1 의 계수와 주어진 꼴의 분모. 제약: 주어진 분모가 2a 와 같아야 하고 근호 안이 완전제곱수가 아니어야 B 가 유일하게 정해진다. 선택지 간격은 A+B 후보들이 서로 가깝게."
    creative: "(1) 분모를 2a 가 아닌 약분된 값으로 주어 먼저 약분하게 만들기(★3 · T-표기) (2) A, B 를 각각 묻는 대신 AB 나 B-A 를 묻기(★2) (3) A, B 를 주고 원래 방정식의 계수를 되묻기(★3 · I-BW)."
```

```yaml
- id: GN-M31-141-02
  page: 141
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험출제"
  summary: |
    $(x+2)(x-5)=3(x-3)$ 의 두 근의 차 구하기.
  category: "전개·이항 정리 → 근의 공식 → 두 근의 차"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 근의 차 구하기(괄호 정리 + 근의 공식)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    양변을 전개·이항하면 x²-6x-1=0 이고 짝수 공식으로 3±√10 이 나온다. 차는 근호 항의 2배라 큰 쪽에서 작은 쪽을 빼면 끝.
    두 근을 모두 구한 뒤 파생량을 한 번 더 묻는 2단 구성이라 137~140 구역의 단순 풀이보다 한 겹 위다.
    시험 구역 ★2~3 출발 · 통찰 0 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "전개·이항 → x²-6x-1=0 → 근의 공식으로 3±√10 → 두 근의 차 2√10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\sqrt{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/141-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "좌변 두 일차식과 우변 일차식의 계수. 제약: 정리 후 판별식이 완전제곱수가 아니어야 차가 무리수로 남아 문항 맛이 살고, b 가 짝수면 짝수 공식으로 계산이 가벼워진다."
    creative: "(1) 두 근의 합을 묻기(★2 · 정리 후 -b/a 를 눈치채면 즉답 · I-SC) (2) 두 근의 곱이나 제곱의 합을 묻기(★3) (3) 두 근의 차가 주어진 값이 되게 하는 상수를 되묻기(★3~4 · I-BW · 판별식 조건)."
```

```yaml
- id: GN-M31-141-03
  page: 141
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험출제"
  summary: |
    계수가 소수인 $0.1x^2+0.4x+0.05=0$ 의 해 고르기. 5지선다.
  category: "소수 자릿수 확인 → 양변에 20(또는 100) 곱해 정수화 → 짝수 공식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "계수가 소수 또는 분수인 이차방정식의 풀이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0.05 때문에 ×10 으로는 정수가 되지 않는다 — ×100 후 5로 나누거나 ×20 으로 한 번에 2x²+8x+1=0 을 만들어야 한다(T-단위).
    선택지가 √7 과 √14, 분모 2 와 4, 부호 ± 로 갈려 있어 정수화를 틀리면 그대로 오답 선택지에 착지하도록 설계돼 있다.
    시험 구역 ★2~3 출발 · 통찰 0 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "양변 ×20 → 2x²+8x+1=0 → 짝수 공식(b'=4) → x=(-4±√14)/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/141-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 소수 계수. 제약: 자릿수가 서로 달라야(0.1 과 0.05) 곱할 수 판단이 함정이 되고, 정수화 후 b 가 짝수여야 답 꼴이 선택지처럼 간결해진다. 판별식은 완전제곱수가 아니어야 한다."
    creative: "(1) 오답 선택지를 '×10 만 한 경우의 결과' 로 채워 함정을 명시적으로(★2) (2) 소수를 분수로 바꾼 같은 식을 나란히 주고 해가 같은지 묻기(★3 · I-EQV) (3) 상수항을 미지수 소수로 두고 근이 유리수가 되게 하는 값 묻기(★3~4 · I-BW)."
```

```yaml
- id: GN-M31-141-04
  page: 141
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험출제"
  summary: |
    분수 계수 이차방정식의 두 근을 $a$, $b$($a<b$)라 할 때 일차방정식 $ax=b$ 의 해 구하기.
  category: "분모 최소공배수 곱해 정수화 → 인수분해로 두 근 → a<b 로 배정 → 일차방정식 풀기"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이차방정식의 두 근을 대소 조건으로 배정해 다른 방정식에 대입하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    양변에 24 를 곱해 8x²-10x-3=0 을 만들고 인수분해로 두 근을 얻은 뒤, a<b 조건으로 어느 쪽이 a 인지 확정해 ax=b 를 푼다 — 정리·풀이·배정·재풀이의 4단.
    배정을 뒤집으면 해가 완전히 달라지므로 a<b 가 핵심 함정(T-부호·T-표기). 단계 수가 많아 Mₛ=3, a·b 라는 문자 표현으로 Mₐ=2.
    각 단계는 모두 표준 절차라 통찰로는 세지 않았다. 시험 구역 ★2~3 출발 · M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "양변 ×24 → 8x²-10x-3=0 → 인수분해로 두 근 → a<b 로 배정 → ax=b 풀기"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$x=-6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/141-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분수 계수와 우변 분수식. 제약: 두 근이 유리수여야(정수화 후 판별식이 완전제곱수) 일차방정식 계수로 쓸 수 있고, b/a 가 정수로 떨어져야 답이 깔끔하다. 두 근의 부호를 다르게 두면 a<b 배정이 실질적 함정이 된다."
    creative: "(1) 조건을 a>b 로 뒤집거나 |a|<|b| 로 바꿔 배정 판단을 한 겹 더(★3) (2) 이어지는 식을 일차방정식 대신 이차방정식 x²+ax+b=0 으로 두어 근의 공식을 한 번 더 쓰게(★4) (3) 두 근이 무리수가 되게 하면 배정은 쉬워지지만 계산이 무거워짐 — 질 저하이므로 피함(★ 변동 없음)."
```

```yaml
- id: GN-M31-141-05
  page: 141
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험출제"
  summary: |
    공통부분이 있는 $3\left(x+\dfrac{1}{2}\right)^2-2\left(x+\dfrac{1}{2}\right)-1=0$ 의 두 근의 합. 5지선다.
  category: "공통부분 A 치환 → A 이차방정식 인수분해 → x 로 되돌리기 → 두 근의 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "공통부분이 있는 이차방정식의 두 근의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x+1/2=A 로 놓으면 3A²-2A-1=0 → (3A+1)(A-1)=0 으로 A 가 유리수로 갈리고, 각 A 에서 1/2 을 빼 x 를 얻은 뒤 더한다.
    함정이 두 겹이다 — A 의 합(2/3)을 그대로 답하는 것, 그리고 되돌릴 때 1/2 을 한 근에만 빼는 것(T-표기).
    치환 + 되돌리기 + 파생량까지 3단이라 같은 치환 유형인 139-h4(★2)보다 한 단 위. 시험 구역 ★2~3 출발 → ★3.
  tier: star_3
  mechanism_primary: "x+1/2=A 치환 → 3A²-2A-1=0 → A=-1/3, 1 → x=A-1/2 로 되돌리기 → 두 근의 합"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/141-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공통부분 안 상수 1/2 과 A 이차식 계수 3, -2, -1. 제약: A 이차식이 인수분해되어야 합이 유리수로 떨어지고, 공통부분 상수가 분수여야 'A 의 합 ≠ x 의 합' 함정이 살아난다(정수면 오차가 눈에 덜 띈다)."
    creative: "(1) 두 근의 합 대신 곱이나 차를 묻기(★3) (2) A 이차식이 인수분해되지 않게 바꾸면 무리수 두 근을 되돌려 더해야 함(★3 · 계산 마찰만 증가라 ★ 변동 없음) (3) 공통부분을 x²+x 같은 이차식으로 두면 되돌릴 때 이차방정식 두 개가 나와 근이 넷이 되고 합 계산에 분기가 생김(★4 · I-MI)."
```

## 표본 판정 요약 (22문)

- ★ 분포: ★1 10 · ★2 10 · ★3 2 · ★4 0 · ★5 0
- 통찰형 1(`138-c1` I-BW d1) · 절차형 21 · premium 0
- 구역별 ★: 개념원리 확인하기 3문 전부 ★1 · 핵심문제 익히기 8문은 ★1 1 + ★2 7 · 계산력 강화하기 6문 전부 ★1 · 이런 문제가 시험에 나온다 5문은 ★2 3 + ★3 2
- type_hint 상위: 「계수가 소수 또는 분수인 이차방정식의 풀이」 6 · 「괄호가 있는 이차방정식의 풀이」 3 · 「근의 공식을 이용한 이차방정식의 풀이」 2(+「이차방정식의 근의 공식」 1) · 「공통부분이 있는 이차방정식의 풀이」 2 · 나머지는 각 1
- M_total 분포: 4 → 4문 · 5 → 6문 · 6 → 11문 · 8 → 1문. Mₐ=2 는 미정 상수·문자 근을 쓴 3문(`138-c1` · `141-01` · `141-04`)뿐이다.
- 그림 문항 없음(전 22문 `figure: none`) · 전사본 answer 와 골조가 어긋나는 문항 없음

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 갈려 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M31-137-03 | 정리 기법 4종을 한 문항에 모아 M_total 6 이지만 빈칸이 모든 단계를 지정해 판단 부담이 없다. 개념원리 확인하기 구역대로 ★1 | ★1 / ★2 |
| GN-M31-138-h1 | 벤더 핵심문제(★2 출발)이나 골조가 `137-02`(★1) · `140-01`(★1) 과 완전히 같다. 통찰 0 · M_total 4 로 −1 적용 | ★1 / ★2 |
| GN-M31-139-h4 | 벤더 「UP」 태그(+1 신호)이나 공통부분 치환은 이 단원이 명시적으로 가르치는 표준 절차이고 통찰 0 · M_total 5 | ★2 / ★3 |
| GN-M31-140-03 ~ 140-06 (4문) | 골조가 핵심문제 익히기의 `138-h2` · `138-c2` · `139-h3` · `139-c3`(모두 ★2)와 같고 M_total 도 6으로 같은데 구역만 다르다. v3.8 §2.11(계산 마찰은 ★ 상승 신호가 아니라 질 저하 경고)에 따라 계산 드릴 구역은 ★1 로 유지 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **반복된 type_hint**: 「계수가 소수 또는 분수인 이차방정식의 풀이」 6문이 압도적으로 많고, 다음이 「괄호가 있는 이차방정식의 풀이」 3문, 「공통부분이 있는 이차방정식의 풀이」 2문이다. 이 셋은 각각 독립 유형으로 세울 만하다.
- **통합해도 될 것**: 「근의 공식을 이용한 이차방정식의 풀이」(`137-02` · `140-01`) · 「이차방정식의 근의 공식」(`138-h1`, 교재 예제 제목 그대로) · 「근의 공식 대입 과정 완성」(`137-01`)은 같은 골조의 안내 정도 차이일 뿐이므로 **한 유형(근의 공식 직접 적용)** 으로 묶고 base ★1 로 두는 편이 낫다. 「짝수 공식」(`140-02`)은 공식 자체가 달라 이 유형의 하위 변형으로 두면 된다.
- **따로 세워야 할 것**: `138-c1`(근이 주어진 이차방정식의 미정 계수 · 이 범위 유일한 통찰형 I-BW)과 `141-04`(두 근을 대소 조건으로 배정해 다른 방정식에 대입)는 나머지와 골조가 다르다. 전자는 base ★2, 후자는 base ★3 후보.
- **파생량 묶음**: `141-02`(두 근의 차) · `141-05`(두 근의 합)는 '두 근을 구한 뒤 파생량을 묻는' 공통 골조를 가진다. 중3-1 에는 근과 계수의 관계가 없어 반드시 두 근을 실제로 구해야 하므로, 고1 의 같은 이름 유형과는 base ★ 를 분리해 두어야 한다.
- **소수·분수 유형의 분해**: 6문 중 `140-06` · `141-03` 은 '자릿수·분모가 섞여 곱할 수 판단이 함정' 이고 나머지는 '곱할 수가 자명' 이다. 카탈로그에서 base ★1 / ★2 두 층으로 나누면 이 범위의 ★1 / ★2 갈림(분류 이슈 4번)이 자연스럽게 해소된다.
