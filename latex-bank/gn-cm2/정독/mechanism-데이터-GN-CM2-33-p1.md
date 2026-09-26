---
name: mechanism-데이터-GN-CM2-33-p1
description: 개념원리 공통수학2 33 무리함수(1/3 · 281-653~281-655) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학2 (22개정) · 전사본 latex-bank/gn-cm2
  section: 33 무리함수
  unit_code: CM2-33
  part: "1/3"
  extract_range: "281쪽 · 281-653~281-655"
  total_problems: 3
  unit_total: 45
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm2/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm2/items/<id>.tex
  image_source: latex-bank/gn-cm2/figures/ (crops.json)
---

# 개념원리 공통수학2 · 33 무리함수 (1/3) 정독 데이터 (v1.0)

이 파일은 33단원 45문 중 앞의 3문(281쪽 · 281-653~281-655)을 다룬다. 구역은 「개념원리 익히기」 통번호 하나뿐이고, 단원 도입부에 해당해 **무리함수의 정의 → 정의역 → 기본형 그래프**라는 교과서 진행 순서가 세 문항에 그대로 한 번씩 배치돼 있다. 그림 문항·선택지 문항은 없고, 뒤의 두 문항은 소문항 4개씩을 묶은 확인 문항이다.

벤더 난이도 신호와 이 파일의 출발점 규약: 「개념원리 익히기」 통번호는 개념 확인이므로 ★1 출발이고, 출발점에서 M_total·통찰로 ±1 조정했다. 이 범위에서 반복되는 **근호 안의 식 ≥ 0** 과 **기본형의 대칭·평행이동**은 단원에서 방금 배운 표준 도구이므로 통찰로 세지 않고 Mₜ(T-범위·T-부호·T-경계)에 반영했다. 결과적으로 세 문항 모두 절차형이며, 함정의 수가 M_total 을 5~6 으로 올릴 뿐 ★ 를 끌어올리지는 않는다. 281-655 만 소문항 4개에 대칭·평행이동이 겹쳐 ★2 후보로 볼 여지가 있어 [분류 이슈] 로 기록했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 **원본**이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]`(통찰 유형·depth) · `variation_notes`(바꿔도 되는 수와 제약 / 골조를 유지한 설정 변형과 ★ 변동 지점)를 채웠다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM2-281-653
  page: 281
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    보기 ㄱ~ㅁ 의 다섯 식 중 무리함수인 것만 모두 고르기.
    근호 밖 계수만 무리수인 식(y=-√5x)과 근호 안이 완전제곱인 식(y=√((2-x)²))이 섞여 있음.
  category: '무리함수의 정의 → 근호 안에 x 가 남는 식만 고르기'
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무리함수의 뜻 — 근호 안에 미지수가 있는 함수 판별"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ㄱ·ㄹ·ㅁ 은 근호 안에 x 가 남으므로 무리함수. ㄴ 은 -√5 가 계수일 뿐이라 일차함수이고,
    ㄷ 은 √((2-x)²)=|2-x| 로 근호가 풀려 무리함수가 아니다. 「근호가 보이면 무리함수」라는
    오해 두 갈래가 이 문항의 전부라 통찰로 세지 않고 Mₜ=1(T-표기)로 흡수했다.
    익히기 통번호 → ★1 출발, 통찰 0·M_total 5 로 하향 후보지만 하한이라 ★1 유지.
  tier: star_1
  mechanism_primary: "보기마다 근호 안에 x 가 남는지 확인 → 근호 안이 완전제곱이면 절댓값으로 풀려 제외 → ㄱ, ㄹ, ㅁ"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "ㄱ, ㄹ, ㅁ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/281-653.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안의 계수·상수(3x → 5x · 4x-5 → 2x+7 · 4-x² → 9-x²)와 완전제곱 보기의 괄호(2-x → 3-x), 계수 무리수(√5 → √7)를 바꿀 수 있음. 제약: 「계수만 무리수인 일차함수」와 「근호 안 완전제곱」 두 함정 보기는 남겨야 문항 목적이 유지되고, 정답 보기가 2~3개가 되도록 배치한다."
    creative: "(1) 무리함수가 아닌 것을 고르도록 뒤집기(★1 유지) (2) y=√(x²+2x+1) 처럼 전개·인수분해를 해야 완전제곱임이 보이는 보기를 넣으면 식 변형 한 단계가 늘어 ★2 (3) 「무리함수인 것의 정의역도 모두 구하시오」로 654 와 합치면 ★2 (4) 근호 안에 분모가 있는 식(y=√(1/x))을 넣어 정의역 제약까지 따지게 하면 ★2."
```

```yaml
- id: GN-CM2-281-654
  page: 281
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 네 무리함수 y=√(-3-x) · y=-√(x+2) · y=1-√(2x-4) · y=√(1-x²) 의
    정의역을 각각 구하기.
  category: '근호 안의 식 ≥ 0 → 일차·이차부등식 풀이 → 정의역 집합 표기'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무리함수의 정의역 — 근호 안의 식이 0 이상인 x 의 범위"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 소문항 모두 「근호 안 ≥ 0」 한 가지 도구만 쓴다. ⑴ 은 -3-x≥0 에서 부호를 뒤집어
    x≤-3(T-부호), ⑷ 는 1-x²≥0 을 (1+x)(1-x)≥0 으로 풀어 양 끝이 포함된 닫힌 구간이 되는 것
    (T-범위·T-경계)이 함정이라 Mₜ=2. ⑵⑶ 은 근호 앞의 부호·상수가 정의역을 바꾸지 않음을
    확인하는 대조군. 통찰 없음·M_total 6 → 익히기 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: "근호 안의 식 ≥ 0 으로 부등식 세우기 → 일차식은 이항·부호 정리, 이차식은 인수분해 → 해를 집합 기호로 표기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\{x \mid x\le -3\}$ ⑵ $\{x \mid x\ge -2\}$ ⑶ $\{x \mid x\ge 2\}$ ⑷ $\{x \mid -1\le x\le 1\}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm2/items/281-654.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 일차식의 계수·상수(-3-x · x+2 · 2x-4)와 ⑷ 의 상수(1-x² → 9-x²)를 바꿀 수 있음. 제약: ⑴ 처럼 x 의 계수가 음수인 소문항을 하나는 남겨 부호 뒤집기를 유지하고, ⑷ 는 근호 안이 아래로 볼록하지 않은 -x²+k 꼴이라야 정의역이 닫힌 구간으로 떨어진다(x²-k 꼴로 바꾸면 정의역이 두 반직선으로 갈라져 난도가 올라감). 근호 밖 상수·부호는 정의역에 영향이 없으므로 자유롭게 바꿔도 답이 변하지 않는다."
    creative: "(1) 정의역을 먼저 주고 근호 안의 식을 되찾게 하는 역방향(I-BW · ★2) (2) y=√(x-a)+√(b-x) 로 두 근호의 공통 정의역을 묻기(I-CON · ★2~3) (3) 근호를 분모에 두어 ≥ 가 아니라 > 가 되는 경계 비교(★2) (4) 정의역이 공집합이 되지 않을 a 의 조건을 묻기(I-BW · ★3)."
```

```yaml
- id: GN-CM2-281-655
  page: 281
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 네 무리함수 y=√(9x) · y=-√(16x) · y=√(-(x-3)) · y=-√(x-2)+1 의 그래프를 그리고
    각각의 정의역과 치역을 구하기.
  category: 'y=√(ax) 기본형 → 부호(대칭)·평행이동으로 작도 → 그래프에서 정의역·치역 읽기'
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "무리함수 y=√(ax) 의 그래프 — 대칭·평행이동과 정의역·치역"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 은 y=3√x, ⑵ 는 y=-4√x 로 정리되는 기본형(⑵ 는 x축 대칭)이고, ⑶ 은 y=√(-x) 를 x축
    방향으로 3 만큼, ⑷ 는 y=-√x 를 x축 2·y축 1 만큼 옮긴 그래프다. 근호 앞 부호가 치역의
    방향을, 근호 안 x 의 부호가 정의역의 방향을 정한다는 점과 시작점이 포함되는 끝점이라는
    점이 함정이라 Mₜ=2. 「그래프를 그리라」는 지시가 발문에 이미 있어 식↔그래프 전환은
    학생이 스스로 찾는 통찰이 아니므로 세지 않았다.
    [분류 이슈] 소문항 4개에 대칭·평행이동이 겹쳐 이 범위에서 가장 무겁다 — 익히기 신호대로 ★1 로 두되 ★2 후보로 기록.
  tier: star_1
  mechanism_primary: "근호 안을 a(x-p) 꼴로 정리 → y=√(ax) 기본형에 부호 대칭·평행이동 적용해 작도 → 시작점과 진행 방향에서 정의역·치역 읽기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 풀이 참조(그래프), 정의역: $\{x \mid x\ge 0\}$, 치역: $\{y \mid y\ge 0\}$ ⑵ 풀이 참조(그래프), 정의역: $\{x \mid x\ge 0\}$, 치역: $\{y \mid y\le 0\}$ ⑶ 풀이 참조(그래프), 정의역: $\{x \mid x\le 3\}$, 치역: $\{y \mid y\ge 0\}$ ⑷ 풀이 참조(그래프), 정의역: $\{x \mid x\ge 2\}$, 치역: $\{y \mid y\le 1\}$'
  answer_source: "답지(쪽 렌더 · 답 크롭은 ⑴⑵만)"
  figure: none
  latex: latex-bank/gn-cm2/items/281-655.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 안 계수(9 · 16 → 4 · 25 등 완전제곱)와 평행이동량(3 · (2,1))을 바꿀 수 있음. 제약: ⑴⑵ 는 √(ax)=√a·√x 가 정수 계수로 떨어지도록 완전제곱을 쓰고, ⑶ 은 x 의 계수가 음수라야 정의역이 왼쪽 반직선이 된다. 이동량을 바꾸면 정의역·치역의 경계값(3 · 2 · 1)이 함께 바뀌므로 답 네 줄을 모두 따라 고쳐야 한다."
    creative: "(1) 그래프를 주고 식을 찾게 하는 역방향(I-BW · ★2) (2) y=√(4x-8)+1 처럼 근호 안을 4(x-2) 로 먼저 묶어야 이동이 보이게 하면 식 변형 한 단계가 늘어 ★2 (3) 정의역을 구간으로 제한해 치역의 최댓값·최솟값을 묻기(★2~3) (4) 무리함수와 직선의 교점 개수 조건으로 이으면 대수↔기하 전환이 생겨 ★3(I-RT)."
```

## 표본 판정 요약 (3문)

- ★ 분포: ★1 3 · ★2 0 · ★3 0 · ★4 0 · ★5 0
- 통찰형 0 · 절차형 3 · premium 0
- M_total: 5 · 6 · 6 (평균 5.7) · Mₜ 가 1~2 로 M_total 을 올리는 유일한 축
- type_hint: 「무리함수의 뜻(판별)」 1 · 「무리함수의 정의역」 1 · 「무리함수의 그래프와 정의역·치역」 1 — 겹치는 유형 없음(단원 도입부 3연속 개념)
- 그림: 0문 · 선택지 문항 0문 · 소문항 묶음 2문(각 4소문항)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM2-281-655 | 익히기 통번호 신호는 ★1 이지만 소문항 4개에 기본형 정리·x축 대칭·y축 대칭·평행이동이 모두 들어가 이 범위에서 가장 무겁다(M_total 6 · Mₜ 2). 통찰이 0 이라 +1 근거가 없어 ★1 로 두고 기록만 함 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고): 이 범위의 type_hint 세 개는 무리함수 단원의 도입 3단계(정의 판별 → 정의역 → 기본형 그래프)에 1:1 대응하며 서로 겹치지 않는다. 카탈로그를 세울 때 **「무리함수의 뜻·판별」**은 근호 안 완전제곱·계수 무리수 함정이 전부인 ★1 전용 유형으로 따로 두고, **「무리함수의 정의역」**은 뒤에 나올 「두 근호의 공통 정의역」·「정의역이 주어진 역추적」과 한 계열(base ★1~3)로 묶는 것이 좋다. **「y=√(ax) 그래프·평행이동」**은 33단원 뒤쪽(2/3·3/3)에 나올 「무리함수와 직선의 교점」·「무리함수의 역함수」의 선행 유형이므로 같은 계열의 base ★1 슬롯으로 두고, 그 위에 교점·역함수 유형을 ★2~3 으로 올려 세운다. 정의역 유형과 그래프 유형은 답이 같은 집합 표기로 나와 혼동되기 쉬우나 **도구가 다르므로(부등식 풀이 vs 작도) 통합하지 않는다.**
