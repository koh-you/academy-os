---
name: mechanism-데이터-RPM-CALC1-02-p3
description: RPM 미적분Ⅰ 02 함수의 연속(3/3 · 유형 08 최대·최소 정리 ~ 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 미적분Ⅰ (22개정) · 전사본 latex-bank/rpm-calc1
  section: 02 함수의 연속
  unit_code: CALC1-02
  part: "3/3"
  extract_range: "30~35쪽 · 0173~0204"
  total_problems: 32
  unit_total: 92
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-calc1/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-calc1/items/<id>.tex
  image_source: latex-bank/rpm-calc1/figures/ (crops.json)
---

# RPM 미적분Ⅰ · 02 함수의 연속 (3/3) 정독 데이터 (v1.0)

이 파일은 RPM 미적분Ⅰ 02 함수의 연속 단원(92문) 가운데 30~35쪽의 32문항(0173~0204)을 다룬다. 구역은 유형 08 최대·최소 정리(3문) · 유형 09 사잇값 정리의 방정식에의 활용 (1)(4문) · 유형 10 사잇값 정리의 실생활에의 활용(2문) · 유형 UP 11 합성함수의 연속과 불연속(3문) · 유형 UP 12 사잇값 정리의 방정식에의 활용 (2)(2문) · 시험에 꼭 나오는 문제(12문) · 서술형 주관식(3문) · 실력 Up(3문) 순이다. 벤더 난이도 신호는 유형 구역의 「대표문제」 태그(★2 출발)와 하·중하·중·상중 표시(★1·★1~2·★2·★3 출발), 유형 UP(★3)·서술형(★3)·실력 Up(★4) 구역 신호, 「중요」·「서술형」·「교육청 기출」 태그다. 시험에 꼭 나오는 문제 12문은 난이도 표시가 없어 ★2~3 사이에서 M·I 로 정했다. 그림 문항은 7문(0173·0180·0183·0184·0189·0198·0204)이며 모두 크롭 이미지로 확인했다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(유형 코드 · depth · effective_depth · 근거) · `variation_notes`(numeric/creative)를 채웠다. `depth_score` 는 insights 의 effective_depth 평균(없으면 0.00)이고, `insight_type` 은 통찰이 없거나 d1 한 개뿐이면 절차형, d2 이상 또는 2개 이상이면 통찰형으로 적었다. Mₜ 는 함정 0~1개면 1, 2~3개면 2 로 매겨 M_total 은 4 이상이다. 사잇값 정리·합성함수 연속의 「유형 자체의 표준 환원」 은 d1, 극한값 부호 → 근방 부호 · 대칭 복제 · 뜀 인수를 0 인수로 죽이기 · 넓이 함수 구성처럼 교과서 진술 밖의 착안은 d2 로 두었다.

## 문항 데이터

### 유형 08 최대·최소 정리

```yaml
- id: RPM-CALC1-0173
  page: 30
  vendor_label: "유형 08 최대·최소 정리"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    구간 $(-2,\,3)$ 에서 정의된 그래프(x=0 에서 좌극한 1·우극한 0·f(0)=1, x=1 에서 좌 3·우 1·f(1)=3, 이후 y=1 수평)를 보고 불연속점 개수 · 극한값 · 극한 존재 · 구간 $[-1,\,2]$ 의 최솟값 존재 · 구간 $[-3/2,\,0]$ 의 최댓값 존재 중 옳지 않은 것 고르기. 5지선다.
  category: "그래프에서 좌·우극한·함숫값 읽기 → 불연속점 세기 → 부분구간에서 최대·최소 존재 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프에서 최대·최소 정리 적용 여부 판정(보기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    불연속점은 x=0(좌 1·우 0)·x=1(좌 3·우 1) 둘(① 참). x→-1 극한 1(② 참), x=1 극한 없음(③ 참). 구간 [-1,2] 에서는 x→0+ 일 때 값이 0 에 가까워지지만 f(0)=1 이라 하한 0 을 취하지 못해 최솟값 없음(④ 거짓). [-3/2,0] 에서는 f(0)=1 이 좌극한과 같아 닫힌구간에서 연속 → 최댓값 1(⑤ 참). 채운 점·빈 점을 읽는 절차이며 ④ 의 「하한은 있으나 취하지 못함」 이 변별점. 유형 대표·통찰 0·M_total 5 → ★2 유지.
  tier: star_2
  mechanism_primary: "x=0,1 에서 좌·우극한·함숫값 읽기 → 불연속점 2개 → [-1,2] 는 x=0 불연속으로 최솟값 미달성 → ④"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-0173.png"
  latex: latex-bank/rpm-calc1/items/0173.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그림 라벨(불연속 x, 좌·우극한 높이, 채운 점 위치, 구간 끝점)을 바꾸면 새 그림 필요. 제약: 「극한은 있으나 함숫값과 다른 점」 과 「좌·우 불일치 점」 을 각각 하나 이상 두고, 최솟값이 없는 부분구간(빈 점 쪽으로 값이 접근)과 최댓값이 있는 부분구간(양 끝 포함 연속)을 하나씩 유지."
    creative: "(1) 「최댓값과 최솟값을 모두 갖는 구간」 을 고르게 하기(★2) (2) 열린구간 (0,1) 처럼 연속이지만 끝점을 빼서 최대·최소가 없는 경우를 보기에 추가(★2 · T-경계) (3) f(f(x)) 의 최댓값 존재를 묻기 → 합성함수 극한 읽기 결합(★3 · I-EQV d1)."
```

```yaml
- id: RPM-CALC1-0174
  page: 30
  vendor_label: "유형 08 최대·최소 정리"
  vendor_level: "하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    구간 $[2,\,4]$ 에서 $f(x)=\dfrac{2x+1}{x-1}$ 의 최댓값과 최솟값의 곱.
  category: "유리함수를 2+3/(x-1) 로 변형 → 감소 → 양 끝값 계산 → 곱"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "닫힌구간에서 유리함수의 최댓값·최솟값"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    f(x)=2+3/(x-1) 은 x>1 에서 감소하므로 최댓값 f(2)=5·최솟값 f(4)=3, 곱 15. 점근선을 피한 닫힌구간이라 양 끝에서 결정되는 한 단계. 벤더 「하」·통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "f=2+3/(x-1) (x>1 감소) → 최대 f(2)=5·최소 f(4)=3 → 곱 15"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$15$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0174.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "구간 끝점·분자 계수를 바꿀 수 있음. 제약: 구간이 점근선 x=1 을 포함하지 않는 닫힌구간이어야 하고 양 끝 함숫값이 정수(또는 간단한 유리수)가 되게 끝점 선택."
    creative: "(1) 최댓값+최솟값·차를 묻기(★1) (2) 구간을 (1,3] 처럼 반열린으로 바꿔 최댓값이 없음을 판단(★2 · T-경계) (3) 분모를 x²+1 로 바꿔 단조가 아니게 하면 범위 판단이 필요(★2~3)."
```

```yaml
- id: RPM-CALC1-0175
  page: 30
  vendor_label: "유형 08 최대·최소 정리"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    닫힌구간 $[a,\,b]$ 에서 연속인 두 함수 $f$, $g$ 에 대해 ㄱ $f(x)g(x)$ · ㄴ $f(x)/g(x)$ · ㄷ $f(g(x))$ 중 이 구간에서 반드시 최댓값·최솟값을 갖는 것만 고르기. 5지선다.
  category: "최대·최소 정리의 전제(닫힌구간·연속) 확인 → 연산별 연속 보장 여부 → 반례"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「반드시 최대·최소」 를 「[a,b] 에서 연속이 보장되는가」 로 옮기고, 몫은 g=0 · 합성은 g 의 치역이 [a,b] 를 벗어날 수 있음을 반례로 확인"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "연속함수의 연산과 최대·최소 정리의 성립 여부(보기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    곱은 연속함수의 성질로 [a,b] 에서 연속 → 최대·최소 보장(ㄱ). 몫은 g(x)=0 인 점에서 정의되지 않을 수 있고(ㄴ 부정), 합성 f(g(x)) 는 g(x) 가 [a,b] 밖의 값을 가지면 f 의 연속성을 쓸 수 없음(ㄷ 부정). 정리의 전제를 연산별로 대조하는 문제라 추상도(Mₐ 3)는 높지만 절차는 짧다. 벤더 「중」·d1 하나·M_total 7 → ★2.
  tier: star_2
  mechanism_primary: "최대·최소 정리 전제(닫힌구간 연속) → 곱 연속 보장 · 몫은 g=0 반례 · 합성은 치역 이탈 반례 → ㄱ"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0175.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기 함수(합·차·|f|·f²·√f 등)를 바꿀 수 있음. 제약: 보기마다 「반드시 보장」 과 「반례 존재」 가 분명해야 하고, √f 는 f≥0 조건이 있을 때만 보장."
    creative: "(1) 보기를 「반드시 최댓값을 갖는다」 만으로 좁히고 |f(x)| 추가(★2) (2) 구간을 열린구간 (a,b) 로 바꾸면 ㄱ 도 보장 안 됨 → 전제 자체를 묻는 변형(★2 · T-경계) (3) 「f(g(x)) 가 보장되려면 g 에 어떤 조건이 더 필요한가」 를 서술(★3 · I-EQV d2)."
```

### 유형 09 사잇값 정리의 방정식에의 활용 (1)

```yaml
- id: RPM-CALC1-0176
  page: 31
  vendor_label: "유형 09 사잇값 정리의 방정식에의 활용 (1)"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    삼차방정식 $2x^3-x^2-x-1=0$ 이 실근을 하나만 가질 때 그 실근이 들어 있는 구간을 정수 간격의 열린구간 5개 중 고르기.
  category: "정수점 함숫값 계산 → 부호 바뀌는 구간 → 사잇값 정리"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사잇값 정리로 실근이 존재하는 구간 찾기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(1)=-1<0·f(2)=9>0 이고 다른 정수점 f(-1)=-3·f(0)=-1·f(3)=41·f(4)=107 은 부호가 바뀌지 않아 (1,2)(③). 실근이 유일하므로 해당 구간은 하나. 정수점 대입 절차뿐이라 통찰 0. 유형 대표·M_total 5 → −1 후보이나 유형 09 의 표준 골조라 ★2 유지.
  tier: star_2
  mechanism_primary: "f(1)<0<f(2) → 사잇값 정리 → (1,2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0176.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식 계수를 바꿀 수 있음. 제약: 실근이 하나뿐이어야 하며(극값이 같은 부호이거나 극값 없음) 부호가 바뀌는 정수구간이 보기 중 하나뿐이어야 함."
    creative: "(1) 구간을 반정수 구간으로 좁혀 계산 부담(★2 · 0196 골조) (2) 「실근이 하나뿐」 조건을 빼고 「실근이 존재하는 구간을 모두」 고르게(★2 · I-MI d1) (3) 실근이 세 개인 식으로 바꿔 세 구간을 찾게(★2~3)."
```

```yaml
- id: RPM-CALC1-0177
  page: 31
  vendor_label: "유형 09 사잇값 정리의 방정식에의 활용 (1)"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    연속함수 $f$ 의 $x=-2,\dots,3$ 에서의 값(부호가 바뀌고 $f(1)=0$ 인 표)이 주어질 때 $f(x)=0$ 이 구간 $(-2,\,3)$ 에서 적어도 몇 개의 실근을 갖는지.
  category: "이웃한 함숫값 부호 대조 → 부호 바뀌는 구간 수 + 함숫값 0 인 점 → 최소 실근 수"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함숫값 표에서 사잇값 정리로 실근 개수의 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (-2,-1) 에서 −→+, (2,3) 에서 +→− 로 부호가 바뀌어 근 하나씩, f(1)=0 은 그 자체가 (-2,3) 안의 근. (0,1)·(1,2) 는 한쪽 끝이 0 이라 추가 근을 보장하지 못하고 (-1,0) 은 같은 부호. 합 3개. f(1)=0 을 근으로 세는 T-경계가 변별점. 벤더 「중하」·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "부호 변화 구간 (-2,-1)·(2,3) → 근 2개 + f(1)=0 → 3개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$개'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0177.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표의 값과 개수를 바꿀 수 있음. 제약: 부호 변화 횟수와 0 인 함숫값의 개수가 답이므로 0 값이 구간 안쪽인지 끝인지 명시하고, 열린구간 끝점의 0 은 세지 않도록 설계."
    creative: "(1) f(x)=x 의 근(고정점)을 묻게 바꿔 g=f-x 변환 추가(★2 · I-EQV d1) (2) 「적어도 n개」 대신 「실근이 반드시 존재하는 정수구간을 모두」 고르기(★2) (3) f(x)f(x+1)<0 꼴 조건으로 바꾸기(★3 · I-EQV d2)."
```

```yaml
- id: RPM-CALC1-0178
  page: 31
  vendor_label: "유형 09 사잇값 정리의 방정식에의 활용 (1)"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    세 삼차방정식(ㄱ $x^3+x-5=0$ · ㄴ $x^3-2x=3$ · ㄷ $-x^3+2x+2=0$) 중 구간 $(1,\,2)$ 에서 실근을 갖는 것만 고르기.
  category: "각 식을 f(x)=0 꼴로 → f(1)·f(2) 부호 → 사잇값 정리"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사잇값 정리로 실근이 존재하는 구간 찾기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ f(1)=-3·f(2)=5, ㄴ x³-2x-3 에서 f(1)=-4·f(2)=1, ㄷ f(1)=3·f(2)=-2 → 세 식 모두 부호 변화 → ㄱ,ㄴ,ㄷ. ㄴ 은 우변 3 을 이항해야 하는 작은 T-표기. 대입 절차 3회, 통찰 0. 벤더 「중」·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "각 식 f(1)f(2)<0 확인 → 셋 모두 → ㄱ,ㄴ,ㄷ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄱ, ㄴ, ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0178.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 식의 상수항·구간을 바꿀 수 있음. 제약: 답이 「전부」 가 아니게 하려면 한 식은 f(1)f(2)>0 이 되게 두되, 그 식에 실제로 근이 있어도 「보장 못 함」 이 정답임을 해설에 명시."
    creative: "(1) 부호가 같지만 실근이 있는 식(예: (2x-3)² 꼴)을 넣어 「사잇값 정리는 충분조건」 을 묻기(★3 · I-EQV d2) (2) 구간을 (a,a+1) 매개변수로 두고 a 의 값 찾기(★2~3) (3) 지수·삼각함수가 포함된 식(미적분 후반)으로 확장(★3)."
```

```yaml
- id: RPM-CALC1-0179
  page: 31
  vendor_label: "유형 09 사잇값 정리의 방정식에의 활용 (1)"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형"
  summary: |
    연속함수 $f$ 에 대해 $f(1)=k$, $f(3)=k-5$ 일 때 방정식 $f(x)=1$ 이 구간 $(1,\,3)$ 에서 (중근이 아닌) 한 실근을 갖도록 하는 정수 $k$ 의 값의 합. 서술형.
  category: "g(x)=f(x)-1 → g(1)g(3)<0 → (k-1)(k-6)<0 → 정수 k 합"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(x)=1 의 실근 존재를 g=f-1 의 양 끝 부호 곱 (k-1)(k-6)<0 으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "사잇값 정리로 실근을 보장하는 매개변수 범위"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    g(x)=f(x)-1 로 두면 g(1)=k-1·g(3)=k-6. 사잇값 정리로 근을 보장하려면 (k-1)(k-6)<0 → 1<k<6 → 정수 2,3,4,5 의 합 14. 등호를 넣으면 「중근이 아닌 한 실근」 을 보장하지 못하므로 제외(T-경계). 표준 변환 d1 하나·M_total 6 → 벤더 「중」 그대로 ★2.
  tier: star_2
  mechanism_primary: "g=f-1 → g(1)g(3)=(k-1)(k-6)<0 → 1<k<6 → 2+3+4+5=14"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$14$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0179.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 상수 1, f(1)·f(3) 의 k 식(차 5)을 바꿀 수 있음. 제약: (k-p)(k-q)<0 의 정수해가 유한하고 합이 정수가 되게 p<q 설정, 끝점 등호 제외."
    creative: "(1) f(x)=x 의 근(고정점) 조건으로 바꿔 g=f-x(★2) (2) f(1)=k²-1, f(3)=k-3 처럼 이차식으로 두어 부등식 풀이 추가(★3) (3) 「(1,3) 에서 실근을 갖지 않는 k 가 존재하는가」 로 뒤집어 사잇값 정리의 역이 성립하지 않음을 묻기(★3 · I-EQV d2)."
```

### 유형 10 사잇값 정리의 실생활에의 활용

```yaml
- id: RPM-CALC1-0180
  page: 31
  vendor_label: "유형 10 사잇값 정리의 실생활에의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    10시~12시 30분 사이 30분 간격 속력 표(75·87·90·83·98·55 km/h)를 보고 속력이 95 km/h 인 순간이 적어도 몇 번인지(k 의 최솟값). 5지선다.
  category: "속력을 시간의 연속함수로 → 이웃 값 사이에 95 가 끼는 구간 세기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "실생활 표를 연속함수의 사잇값 정리 상황으로 번역(속력은 시간에 대해 연속)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "실생활 연속량의 사잇값 정리(적어도 n번)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    83→98 과 98→55 사이에 95 가 끼므로 각 구간에서 적어도 한 번 → 최소 2번(②). 표를 연속함수로 읽는 번역이 유일한 착안이고 계산은 없음. 유형 대표·d1 하나·M_total 4 → ★2 유지(계산량은 ★1 수준이나 모델링 번역이 유형 핵심).
  tier: star_2
  mechanism_primary: "속력 v(t) 연속 → 95 가 이웃 값 사이인 구간 (83,98)·(98,55) → 2번"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: "crop:fig-0180.png"
  latex: latex-bank/rpm-calc1/items/0180.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표의 값·간격·기준 속력을 바꿀 수 있음. 제약: 기준값이 표의 값과 같지 않게 하고(같으면 그 순간을 세는 T-경계 발생) 답이 보기 범위 안에 있게 교차 횟수 설계."
    creative: "(1) 기준값을 표의 값과 같게 두어 「그 순간」 을 세는지 묻기(★2 · T-경계) (2) 두 기준값(80·95)의 순간 수 합(★2) (3) 두 자동차의 속력이 같아지는 순간(차 함수 부호 변화)으로 바꾸기(★3 · I-EQV d2)."
```

```yaml
- id: RPM-CALC1-0181
  page: 31
  vendor_label: "유형 10 사잇값 정리의 실생활에의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    2년 전 65 kg → 1년 전 73 kg → 현재 68 kg 인 몸무게에 대해 「a kg 인 때가 적어도 n 번 있었다」 꼴 보기 중 옳지 않은 것. 5지선다.
  category: "몸무게를 시간의 연속함수로 → 각 값이 두 구간 (65,73)·(68,73) 중 몇 곳에 끼는지"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세 시점 값을 연속함수의 두 구간 사잇값 정리 상황으로 번역"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "실생활 연속량의 사잇값 정리(적어도 n번)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    65→73 에서 66·67·69·71·72 를 모두 지나고, 73→68 에서는 69·71·72 만 지남(67 은 68 보다 작아 보장 없음). 따라서 67 은 「적어도 두 번」 이 아니라 한 번(② 거짓). 68 과 67 의 크기 비교가 T-경계. 벤더 「중」·d1·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "w(t) 연속 → 값별로 (65,73)·(68,73) 포함 여부 → 67 은 한 구간만 → ②"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0181.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 시점의 몸무게와 보기의 값을 바꿀 수 있음. 제약: 두 구간의 교집합 (68,73) 안의 값은 「두 번」, 한 구간에만 속한 값은 「한 번」 이 되도록 보기 배치·정답 유일성 확인."
    creative: "(1) 시점을 4개로 늘려 「적어도 세 번」 보기 추가(★2) (2) 「몸무게가 정확히 두 번만 70 kg 이었을 수 있는가」 처럼 최소·가능 구분(★3 · I-MI d1) (3) 키·몸무게 두 연속량의 차가 0 인 순간(★3 · I-EQV d2)."
```

### 유형 UP 11 합성함수의 연속과 불연속

```yaml
- id: RPM-CALC1-0182
  page: 32
  vendor_label: "유형 UP 11 합성함수의 연속과 불연속"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    조각함수 $f(x)=3-x\ (x\ge1)$, $x+2\ (x<1)$ 와 $g(x)=x^2+ax$ 에 대해 $g(f(x))$ 가 실수 전체에서 연속이 되게 하는 상수 $a$. 5지선다.
  category: "f 의 불연속점 x=1 의 좌·우극한·함숫값 → g 가 그 값들에서 같은 값 → a"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "g∘f 의 연속을 「f 의 뜀 값 3·2 에서 g 의 값이 같다」 로 환원(g 는 다항함수라 연속)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "합성함수 g(f(x)) 의 연속 조건(미정계수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f 는 x=1 에서만 불연속(좌극한 3·우극한 2=f(1)). g 가 연속이므로 g(f(x)) 의 x=1 좌극한 g(3)·우극한 g(2)·함숫값 g(2) 가 같아야 하고 g(3)=g(2) → 9+3a=4+2a → a=-5(①). 합성함수 연속의 표준 환원 d1 하나·M_total 6 → 유형 UP 대표 ★3 유지.
  tier: star_3
  mechanism_primary: "f 불연속점 x=1: 좌 3·우 2=f(1) → g(3)=g(2) → 9+3a=4+2a → a=-5"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0182.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 두 조각(뜀 값 p·q)과 g 의 계수를 바꿀 수 있음. 제약: g(p)=g(q) 가 a 에 대한 일차식이 되게 g 는 이차식에 미정계수 하나만 두고, 뜀 값 p≠q."
    creative: "(1) g 를 |x-a| 로 바꿔 절댓값의 대칭축으로 풀기(★3 · I-SYM d1) (2) f 가 두 점에서 불연속이면 조건 두 개 연립(★3~4) (3) g(f(x)) 대신 f(g(x)) 연속을 묻기 → g 의 치역이 1 을 지나는지 판단(★4 · I-EQV d2)."
```

```yaml
- id: RPM-CALC1-0183
  page: 32
  vendor_label: "유형 UP 11 합성함수의 연속과 불연속"
  vendor_level: "중"
  vendor_tags: ["서술형"]
  category_type: "유형 UP"
  summary: |
    그래프($x<2$ 에서 $y=x/2$, $x\ge2$ 에서 $y=x/2+2$, 채운 점 $(2,\,3)$·빈 점 $(2,\,1)$)로 주어진 $f$ 에 대해 $(f\circ f)(x)$ 의 $x=2$ 에서의 연속성 조사. 서술형.
  category: "x=2 에서 f 의 좌·우극한·함숫값 → 그 값에서 f 를 다시 읽기 → 좌·우 비교"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "합성함수의 좌·우극한을 안쪽 함수의 극한값에서 바깥 함수를 읽는 것으로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "그래프로 주어진 함수의 합성함수 연속성 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x→2- 에서 f(x)→1- 이고 f 는 1 근방에서 연속이라 (f∘f)→f(1)=1/2. x→2+ 에서 f(x)→3+ 이므로 →f(3)=7/2, (f∘f)(2)=f(3)=7/2. 좌극한 1/2≠우극한 7/2 → 불연속. 그래프 값 읽기 두 번의 절차. [분류 이슈] 유형 UP 구역(★3 출발)이나 벤더 「중」·d1 하나·M_total 5 → ★2 로 둠.
  tier: star_2
  mechanism_primary: "f(2-)=1→f(1)=1/2 · f(2+)=3→f(3)=7/2 · f(f(2))=7/2 → 좌≠우 → 불연속"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "불연속"
  answer_source: "답지"
  figure: "crop:fig-0183.png"
  latex: latex-bank/rpm-calc1/items/0183.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그래프의 두 직선(기울기·절편)·뜀 위치 x=2 를 바꿀 수 있음. 제약: f 의 좌·우극한값이 f 의 연속점에 떨어지게 하고, 답을 「연속」 으로 바꾸려면 f(1)=f(3) 이 되도록 조각을 설계."
    creative: "(1) 같은 그림으로 x=4 (연속점) 에서의 (f∘f) 연속성을 물어 대비(★2) (2) f 의 좌·우극한값이 f 의 불연속점 위에 떨어지게 설계해 두 단계 읽기(★3 · I-EQV d2) (3) (f∘f)(x) 의 불연속점을 모두 찾기(★3 · I-MI d1)."
```

```yaml
- id: RPM-CALC1-0184
  page: 32
  vendor_label: "유형 UP 11 합성함수의 연속과 불연속"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    $-3\le x\le3$ 에서 그래프로 주어진 $f$(x=0 에서 극한 0·함숫값 1)와 $g$(연속, $[-1,\,1]$ 에서 0)에 대해 ㄱ $f(x)g(x)$ · ㄴ $f(g(x))$ · ㄷ $g(f(x))$ 중 $x=0$ 에서 연속인 것 고르기.
  category: "각 함수의 x=0 좌·우극한과 함숫값 → 곱·합성별 비교"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "곱·합성의 연속을 안쪽 값(f 의 극한 0·함숫값 1, g 의 근방 상수 0)에서 바깥 함수 값의 일치로 환원 — g 가 0 근방에서 상수 0 이라 f(g(x))=f(0)=1 로 일정, g(f(x)) 는 g(0)=g(1)=0 으로 뜀이 흡수됨"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "그래프로 주어진 함수의 합성함수 연속성 판정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㄱ 곱의 극한 0·0=0, 함숫값 1·0=0 → 연속. ㄴ g(x)=0 (−1≤x≤1) 이므로 f(g(x))=f(0)=1 상수 → 연속. ㄷ f(x)→0·f(0)=1 인데 g(0)=g(1)=0 → 연속. 셋 다 연속(ㄱ,ㄴ,ㄷ). f 의 불연속이 g 의 0 구간·0 값에 흡수되는 구조를 읽는 d2 통찰 하나(같은 환원을 ㄴ·ㄷ 에 반복). 벤더 「상중」·M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "f(0±)=0·f(0)=1, g≡0 on [-1,1] → 곱 0=0 · f(g)=f(0) 상수 · g(f): g(0)=g(1)=0 → 모두 연속"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "ㄱ, ㄴ, ㄷ"
  answer_source: "답지"
  figure: "crop:fig-0184.png"
  latex: latex-bank/rpm-calc1/items/0184.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "g 의 평평한 구간 폭·f 의 고립점 높이·경사 부호를 바꿀 수 있음. 제약: 「전부 연속」 이 아닌 답을 원하면 g(0)≠g(f(0)) 이 되게 g 의 평평한 값을 0 이 아닌 상수로 바꾸거나 f(0) 을 g 의 경사 구간에 떨어뜨림."
    creative: "(1) g(1)≠0 이 되게 g 를 수정해 ㄷ 만 불연속(★3) (2) 보기에 f(x)+g(x)·f(x)/g(x) 를 넣어 몫의 정의 문제(g(0)=0) 추가(★3 · T-범위) (3) x=0 대신 x=1 (g 의 꺾임점·f 의 상수 구간 시작) 에서 묻기(★3~4 · I-MI d1)."
```

### 유형 UP 12 사잇값 정리의 방정식에의 활용 (2)

```yaml
- id: RPM-CALC1-0185
  page: 32
  vendor_label: "유형 UP 12 사잇값 정리의 방정식에의 활용 (2)"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    다항함수 $f$ 가 $\lim_{x\to-1}\dfrac{f(x)}{x+1}=a$, $\lim_{x\to2}\dfrac{f(x)}{x-2}=b$, $ab>0$ 을 만족할 때 $f(x)=0$ 이 $[-1,\,2]$ 에서 적어도 몇 개의 실근을 갖는지. 5지선다.
  category: "극한 존재 → f(-1)=f(2)=0 → 극한값 부호로 근방 부호 결정 → 사잇값 정리로 안쪽 근 추가"
  M: {s: 2, k: 1, a: 3, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분모→0 인 극한이 존재 → 분자 f(-1)=f(2)=0"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "극한값의 부호를 근방 함숫값 부호로 번역: x=-1 바로 오른쪽에서 f 는 a 와 같은 부호, x=2 바로 왼쪽(x-2<0)에서 −b 부호 → ab>0 이면 부호 반대"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "극한·대칭 조건이 주어진 연속함수의 실근 개수 최솟값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 극한이 존재하므로 f(-1)=f(2)=0 (근 2개). f(x)/(x+1)→a 이므로 -1 의 오른쪽 근방에서 f 의 부호는 a, f(x)/(x-2)→b 이므로 2 의 왼쪽 근방(x-2<0)에서 f 의 부호는 −b. ab>0 이면 두 부호가 반대라 (-1,2) 안에 근 하나 더 → 적어도 3개(③). 극한값 부호 → 근방 부호 번역이 핵심 d2. 통찰 2개(d1+d2)·M_total 8 로 +1 후보이나 d1 은 표준이라 보류. [분류 이슈] ★3/★4 — 유형 UP 대표 ★3 으로 둠.
  tier: star_3
  mechanism_primary: "극한 존재 → f(-1)=f(2)=0 → 근방 부호 sgn a·sgn(−b) 반대(ab>0) → (-1,2) 에 근 1개 추가 → 3개"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0185.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 극한점(-1·2)·부호 조건(ab>0 또는 ab<0)을 바꿀 수 있음. 제약: ab<0 이면 안쪽 근이 보장되지 않아 답 2개 — 답이 바뀌는 조건을 의도적으로 고르고, 닫힌구간이어야 끝점 근이 셈에 들어감."
    creative: "(1) ab<0 으로 바꿔 「적어도 2개」 와 「3개일 수 있는가」 를 함께 묻기(★3 · I-MI d1) (2) 세 극한 조건과 부호 조합으로 근 최소 개수(★4) (3) f 가 삼차함수라는 조건을 더해 실근이 「정확히」 3개임을 보이기(★4 · I-CON d2)."
```

```yaml
- id: RPM-CALC1-0186
  page: 32
  vendor_label: "유형 UP 12 사잇값 정리의 방정식에의 활용 (2)"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    모든 실수에서 연속인 $f$ 가 $f(4+x)=f(4-x)$ · $f(0)f(3)<0$ · $f(4)f(5)<0$ 을 만족할 때 $f(x)=0$ 이 적어도 몇 개의 실근을 갖는지(k).
  category: "부호 조건 → 구간 (0,3)·(4,5) 에 근 → x=4 대칭으로 (5,8)·(3,4) 복제 → 4개"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(4+x)=f(4-x) 를 그래프의 x=4 대칭으로 읽어 (0,3)·(4,5) 의 근을 (5,8)·(3,4) 로 복제"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "극한·대칭 조건이 주어진 연속함수의 실근 개수 최솟값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f(0)f(3)<0·f(4)f(5)<0 이므로 (0,3)·(4,5) 에 근이 하나씩. 대칭 조건으로 (0,3)↔(5,8), (4,5)↔(3,4) 이므로 근이 두 개 더 생기고 네 구간은 서로소라 중복 없음, f(4)≠0 → 4. 대칭을 근 복제에 쓰는 d2 통찰 하나·M_total 7 → 벤더 「상중」 ★3.
  tier: star_3
  mechanism_primary: "(0,3)·(4,5) 부호 변화 → 근 2 → x=4 대칭으로 (3,4)·(5,8) → 4개"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4$'
  answer_source: "해설"
  figure: none
  latex: latex-bank/rpm-calc1/items/0186.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "대칭축(4)·부호 조건 구간을 바꿀 수 있음. 제약: 대칭 복제된 구간이 원래 구간과 겹치지 않게(축을 사이에 두고 떨어진 구간) 두고, 축 위에서 f(4)≠0 이 되도록 부호 조건에 f(4) 를 포함."
    creative: "(1) 부호 조건 하나를 축을 가로지르는 구간 (3,5) 로 주면 대칭 복제가 겹쳐 개수 판단이 미묘(★4 · I-MI d2) (2) 주기 조건 f(x+4)=f(x) 로 바꿔 「구간 [0,12] 에서 적어도 몇 개」(★4 · I-PD d1) (3) 홀함수 조건 f(-x)=-f(x) 로 바꾸면 f(0)=0 이 자동으로 근(★3 · I-SYM d2)."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-CALC1-0187
  page: 33
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    5개 함수(근호 · 유리함수 2개 · 절댓값 조각함수 2개) 중 모든 실수에서 연속인 것 고르기.
  category: "정의역 확인 → 조각함수는 경계에서 좌·우극한과 함숫값 비교"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모든 실수에서 연속인 함수 고르기(정의역·절댓값 조각)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ①은 x≥-1, ②·③은 분모 0 인 점에서 정의되지 않음. ④ x³/|x| 는 x>0 에서 x², x<0 에서 −x² 으로 0 에서 극한 0=f(0) → 연속. ⑤ (x²-x)/|x-1| 은 1 의 좌·우에서 −x·x 로 극한 −1≠1 → 불연속. 정의역과 절댓값 부호 분리의 절차. 시험 종합·통찰 0·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "정의역(①②③ 탈락) → ④ 극한 0=f(0) 연속 · ⑤ 좌 −1·우 1 불연속 → ④"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-calc1/items/0187.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "절댓값 조각의 분자 차수·경계값, 유리함수의 분모를 바꿀 수 있음. 제약: 연속인 보기는 절댓값과 같은 차수 인수가 분자에 있어야(x|x| 꼴) 하고, 정답이 하나만 되게 함숫값을 조정."
    creative: "(1) ⑤의 f(1) 값을 어떻게 바꿔도 연속이 될 수 없음을 묻기(★2 · T-경계) (2) 「불연속점의 개수가 가장 많은 함수」 로 뒤집기(★2) (3) [x]·|x| 결합 함수 추가(★3)."
```

```yaml
- id: RPM-CALC1-0188
  page: 33
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    구간 $\left(-\dfrac{4}{3},\,1\right)$ 에서 $f(x)=[3x]$ 가 불연속이 되는 $x$ 의 개수. 5지선다.
  category: "t=3x 치환 → t 의 범위 (-4,3) → 정수점 세기(열린구간 끝 제외)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "가우스 기호 함수 [ax] 의 불연속점 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    3x 의 범위는 (-4,3) 이고 [t] 는 정수 t 에서만 불연속이므로 t=-3,-2,-1,0,1,2 의 6개(④). 끝점 t=-4·3 은 열린구간이라 제외(T-경계). 치환과 정수 세기 절차, 통찰 0. 시험 종합·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "3x∈(-4,3) → 정수 -3~2 → 6개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0188.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계수 3·구간 끝점을 바꿀 수 있음. 제약: 끝점이 정수/3 에 걸리게 두어 열린·닫힌 구분이 답에 영향을 주도록 설계(닫힌 끝점의 정수는 한쪽 극한만 있어 불연속으로 셀지 규약 명시)."
    creative: "(1) [3x]+[−3x] 처럼 합으로 바꿔 불연속이 상쇄되는지 확인(★2~3) (2) [x²] 의 불연속점 개수(★3 · I-RT d1: x²=정수) (3) 구간 길이 L 에 대해 불연속점 개수의 최댓값·최솟값(★3 · I-MI d1)."
```

```yaml
- id: RPM-CALC1-0189
  page: 33
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    그래프로 주어진 두 함수 $f$, $g$(둘 다 $x=\pm1$ 에서 뜀)에 대해 ㄱ $f+g$ 의 $x=-1$ · ㄴ $f-g$ 의 $x=1$ · ㄷ $fg$ 의 $x=-1$ · ㄹ $f/g$ 의 $x=1$ 에서의 연속 여부 판정.
  category: "각 점에서 f·g 의 좌·우극한과 함숫값 읽기 → 연산 결과의 좌·우·값 비교"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "그래프로 주어진 두 함수의 사칙연산 함수의 연속성"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=-1: f 좌 1·우 −1·값 1, g 좌 1·우 −1·값 1. 합은 좌 2·우 −2 불연속(ㄱ ×), 곱은 좌 1·우 1·값 1 연속(ㄷ ○). x=1: f 좌 1·우 −1·값 −1, g 좌 −1·우 1·값 1. 차는 좌 2·우 −2(ㄴ ×), 몫은 좌 −1·우 −1·값 −1 연속(ㄹ ○). 두 불연속 함수의 곱·몫이 연속이 되는 사례를 좌·우극한 곱셈으로 직접 확인하는 절차. 시험 종합·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "각 점 좌·우극한·함숫값 표 → 합·차 뜀 남음, 곱·몫 뜀 상쇄 → ㄷ,ㄹ"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "ㄷ, ㄹ"
  answer_source: "답지"
  figure: "crop:fig-0189.png"
  latex: latex-bank/rpm-calc1/items/0189.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 그래프의 뜀 높이·채운 점 위치를 바꿀 수 있음. 제약: 곱·몫이 연속이 되려면 좌·우극한의 곱(몫)과 함숫값의 곱(몫)이 모두 같아야 하며 g 의 함숫값이 0 이 아니어야 몫이 정의됨."
    creative: "(1) f²·|f| 의 연속성 추가(★2) (2) g 의 채운 점을 옮겨 곱은 연속·몫은 불연속이 되게(★2~3) (3) f(g(x)) 의 x=1 연속성 추가 → 합성 읽기(★3 · I-EQV d1)."
```

```yaml
- id: RPM-CALC1-0190
  page: 33
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    $f(x)=4x\ (x\ge a)$, $x^2-5\ (x<a)$ 가 실수 전체에서 연속이 되게 하는 모든 실수 $a$ 의 값의 합.
  category: "경계 x=a 에서 두 식의 값 일치 → 이차방정식 → 근의 합"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조각함수가 연속일 조건(미정계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=a 에서 4a=a²-5 → a²-4a-5=0 → a=5 또는 −1, 합 4. 경계 하나의 표준 조건이고 「모든 a 의 합」 이라 근과 계수의 관계로 끝. 통찰 0·M_total 5 → −1 후보이나 경계값 자체가 미지수라 두 값을 모두 찾는 유형 표준 골조로 시험 종합 ★2.
  tier: star_2
  mechanism_primary: "4a=a²-5 → a²-4a-5=0 → 근의 합 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0190.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 조각의 식을 바꿀 수 있음. 제약: 경계 방정식이 실근 두 개를 갖는 이차식이 되게 하고(판별식>0) 「합」 이 정수가 되도록 계수 선택."
    creative: "(1) 「a 의 값의 곱」 또는 「최댓값」 으로 바꾸기(★2) (2) 경계가 x=a·x=2a 두 곳인 세 조각 함수로 확장(★3) (3) x≥a 조각을 |x|+c 로 바꿔 절댓값 분기 추가(★3 · I-MI d1)."
```

```yaml
- id: RPM-CALC1-0191
  page: 33
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    $f(x)=\dfrac{x^2+ax+b}{x+1}\ (x\ne-1)$, $f(-1)=2$ 가 $x=-1$ 에서 연속일 때 상수 $a$, $b$ 에 대한 $a+b$.
  category: "극한 존재 → 분자에 (x+1) 인수 → 약분한 극한 = 2 → a, b"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "분수꼴 조각함수의 연속 조건(0/0 극한 미정계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    극한이 존재해야 하므로 분자에 x=-1 을 대입해 1-a+b=0. 그러면 분자=(x+1)(x+a-1) 이고 약분한 극한 a-2 가 f(-1)=2 와 같아야 하므로 a=4, b=3, a+b=7. 0/0 극한 미정계수의 표준 절차·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "1-a+b=0 → 약분 극한 a-2=f(-1)=2 → a=4,b=3 → 7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0191.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분모 (x-p)·함숫값 f(p) 를 바꿀 수 있음. 제약: 분자가 (x-p)(x+q) 로 인수분해되고 q 가 정수가 되게 f(p) 를 선택."
    creative: "(1) 분자를 삼차식으로 바꿔 인수 두 개(★2~3) (2) 분모에 √(x+2)-1 같은 근호를 두어 유리화 결합(★3) (3) 분모를 (x+1)(x-2) 로 두고 두 점에서 연속이 되게 하면 조건 두 개 연립(★3 · I-CON d1)."
```

```yaml
- id: RPM-CALC1-0192
  page: 33
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    다항함수 $f$ 가 $\lim_{x\to\infty}\dfrac{f(x)}{x^2-3x-5}=2$ 를 만족하고 $g(x)=\dfrac{1}{x-3}\ (x\ne3)$, $g(3)=1$ 일 때 $f(x)g(x)$ 가 실수 전체에서 연속이 되는 $f$ 에 대해 $f(1)$. 5지선다 · 교육청 기출.
  category: "차수·최고차항 결정 → x=3 에서 f·g 연속 조건 → f(3)=0 과 극한값 0 → (x-3)² 인수"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f·g 의 x=3 연속 ⇔ lim f(x)/(x-3) = f(3)·g(3): 극한 존재로 f(3)=0 이면 우변도 0 이므로 극한값 자체가 0 이어야 하고 → (x-3)² 인수"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "불연속 함수 g 와의 곱 f(x)g(x) 가 연속일 조건(다항함수 결정)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    극한 조건에서 f 는 최고차항 2x² 인 이차함수. x=3 에서 f(x)g(x)=f(x)/(x-3) 의 극한이 존재하려면 f(3)=0, 그 극한값이 함숫값 f(3)g(3)=0 과 같아야 하므로 극한도 0 → f(x)=2(x-3)². f(1)=8(①). f(3)=0 에서 멈추면 f(x)=2(x-3)(x-c) 로 c 가 남는 함정을 넘는 d2 통찰 하나·M_total 6 → 시험 종합·기출 ★3.
  tier: star_3
  mechanism_primary: "f=2x²+… → x=3: f(3)=0 이고 lim f/(x-3)=f(3)g(3)=0 → f=2(x-3)² → f(1)=8"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0192.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "극한 조건의 분모 차수·값(최고차항), g 의 불연속점·함숫값 g(3) 을 바꿀 수 있음. 제약: g(3)=c≠0 이면 여전히 f(3)=0 이 필요하므로 이중근 조건이 유지됨, g(3)=0 이면 조건이 f(3)=0 만으로 약해져 답이 유일하지 않게 됨(피할 것)."
    creative: "(1) g 의 불연속점을 두 곳으로 두고 f 를 삼차로(★4 · I-CON d1) (2) g(3) 값을 0 으로 바꿔 「f(1) 의 최솟값」 처럼 자유도 1 을 남기기(★4 · I-MI d2) (3) f(x)g(x) 대신 g(f(x)) 연속으로 바꿔 치역 문제로 전환(★4 · I-EQV d2)."
```

```yaml
- id: RPM-CALC1-0193
  page: 34
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    구간 $(-1,\,1)$ 에서 연속인 $f$ 가 $(\sqrt{1+x}-\sqrt{1-x})f(x)=x^2-x$ 를 만족할 때 $f(0)$. 5지선다.
  category: "x≠0 에서 f 풀기 → 유리화·약분 → 연속성으로 f(0)=극한"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(x-a)f(x)=g(x) 꼴 연속함수의 함숫값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x≠0 이면 f(x)=(x²-x)/(√(1+x)-√(1-x)) 이고 유리화하면 분모가 2x 가 되어 f(x)=(x-1)(√(1+x)+√(1-x))/2. x=0 에서 계수가 0 이라 f(0) 은 식으로 정해지지 않고 연속성으로 극한값 (-1)·2/2=-1(②). (x-a)f(x)=g(x) 꼴의 표준 절차(유리화 계산 Mₖ 2)·통찰 0·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "f=(x²-x)/(√(1+x)-√(1-x)) (x≠0) → 유리화·x 약분 → f(0)=lim=-1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0193.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 다항식(x 인수 필수)·근호 안 식을 바꿀 수 있음. 제약: 좌변 계수가 0 이 되는 x 가 우변의 근이어야 극한이 존재하고, 유리화 후 약분되는 인수의 차수가 일치해야 함."
    creative: "(1) 우변을 x²+x 로 바꿔 극한만 재계산(★2) (2) 계수를 (√(1+x)-1) 로 바꿔 유리화 상수 조정(★2) (3) f(0) 대신 「f 가 (-1,1) 에서 연속이 되도록 하는 우변 상수항」 을 묻기 → 역방향(★3 · I-BW d1)."
```

```yaml
- id: RPM-CALC1-0194
  page: 34
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    두 함수 $f$, $g$ 에 대해 ㄱ f, f+g 연속 → g 연속 · ㄴ g(f(x)) 가 x=1 에서 연속 → f 도 x=1 에서 연속 · ㄷ f, g 가 x=1 에서 연속 → f(g(x)) 도 x=1 에서 연속, 의 참·거짓. 5지선다.
  category: "ㄱ 차의 연속성으로 증명 → ㄴ·ㄷ 반례 구성(상수함수·평행이동)"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "합성함수의 연속 조건이 「g(1) 에서의 f 의 연속」 이지 「x=1 에서의 f 의 연속」 이 아님을 구별하고, ㄴ 에는 g 상수·ㄷ 에는 f 가 g(1) 에서 불연속인 반례를 구성"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "연속함수의 합·합성에 관한 명제의 참·거짓(반례)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㄱ 은 g=(f+g)-f 로 연속함수의 차 → 참. ㄴ 은 g 가 상수함수이면 f 가 어떻든 g(f(x)) 연속이므로 거짓. ㄷ 은 g(x)=x+1 처럼 g(1)=2 에서 f 가 불연속이면 f(g(x)) 는 x=1 에서 불연속이므로 거짓. 답 ㄱ(①). 명제 판별에서 반례를 스스로 만드는 d2 통찰 하나·Mₐ 3·M_total 7 → 시험 종합 ★3.
  tier: star_3
  mechanism_primary: "ㄱ g=(f+g)-f 참 → ㄴ g 상수 반례 → ㄷ f 가 g(1) 에서 불연속인 반례 → ㄱ"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0194.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기의 연산(곱·몫·|f|·f²)·점 x=1 을 바꿀 수 있음. 제약: 참인 명제는 연속함수의 성질로 증명 가능해야 하고, 거짓 명제는 간단한 반례(상수함수·부호함수)가 있어야 함."
    creative: "(1) 「f² 연속 → f 연속」 (거짓, f=부호함수) 추가(★3 · I-EQV d2) (2) 「f 가 x=1 에서 불연속이고 g 가 연속이면 g(f(x)) 는 x=1 에서 불연속」 (거짓, g 상수) 로 방향 뒤집기(★3) (3) 반례를 직접 서술하게(★3~4)."
```

```yaml
- id: RPM-CALC1-0195
  page: 34
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    $f(x)=\dfrac{5}{x+2}$ 에 대해 5개 구간 중 최솟값이 존재하지 않는 구간 고르기.
  category: "점근선 x=-2 위치·구간 열림 여부 → 단조성 → 최솟값 존재 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "구간별 최댓값·최솟값 존재 여부(유리함수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f 는 x>-2·x<-2 각각에서 감소. [-5,-2) 는 x→-2- 에서 f→-∞ 라 최솟값 없음(①). [-4,-3]·[1,4]·[2,5] 는 닫힌구간 연속 → 최솟값 있음, (-2,3] 은 열린 끝이 있어도 감소라 x=3 에서 최솟값 1. 점근선과 끝점 처리(T-경계) 절차·통찰 0·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "각 구간에서 점근선·끝점 확인 → [-5,-2) 는 −∞ 로 발산 → ①"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0195.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "유리함수 상수·구간 끝점을 바꿀 수 있음. 제약: 정답 구간은 점근선을 열린 끝으로 갖고 그 쪽에서 −∞ 로 발산해야 함(+∞ 이면 최댓값이 없는 쪽), 나머지는 닫힌구간 또는 단조로 최솟값 존재."
    creative: "(1) 「최댓값이 존재하지 않는 구간」 으로 바꾸기(★2) (2) (-2,3] 처럼 열린 끝이 있어도 존재하는 경우와 없는 경우를 함께 보기로(★2 · T-경계) (3) f(x)=5/(x²-4) 로 바꿔 점근선 두 개(★3)."
```

```yaml
- id: RPM-CALC1-0196
  page: 34
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    삼차방정식 $x^3+x^2-1=0$ 이 실근을 하나만 가질 때 그 실근이 있는 구간을 반정수 간격의 5개 구간 중 고르기.
  category: "구간 끝점 함숫값(분수) 계산 → 부호 변화 구간 → 사잇값 정리"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사잇값 정리로 실근이 존재하는 구간 찾기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(1/2)=-5/8<0·f(1)=1>0 이고 f(-1)=-1·f(-1/2)=-7/8·f(0)=-1·f(2)=11 이라 (1/2,1)(④)에서만 부호가 바뀜. 분수 대입이 Mₖ 2 이나 착안은 없음. 시험 종합·「중요」·통찰 0·M_total 5 → ★2(0176 과 같은 골조).
  tier: star_2
  mechanism_primary: "f(1/2)<0<f(1) → 사잇값 정리 → (1/2,1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0196.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "삼차식 계수·구간 간격(1/2·1/3)을 바꿀 수 있음. 제약: 실근이 하나뿐이고 부호가 바뀌는 보기 구간이 하나만 되게, 분수 대입 값이 너무 복잡하지 않게 계수 선택."
    creative: "(1) 「실근을 소수 첫째 자리까지」 처럼 구간을 반복 이분(★2~3 · I-PD d1) (2) 실근 두 개인 식으로 바꿔 두 구간 고르기(★2) (3) 극값 부호로 실근이 하나뿐임을 먼저 보이게 하면 미분 단원 결합(★3 · I-XU d1)."
```

```yaml
- id: RPM-CALC1-0197
  page: 34
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    버스가 A→B→C 로 가며 각 정류장에서 정차하고 구간별 최고 속력이 58·68 km/h 일 때 속력이 30 km/h 인 순간이 적어도 몇 번인지(n). 5지선다.
  category: "정차 → 각 구간 속력 0 에서 출발·0 으로 도착 → 최고 속력을 지나 올라갔다 내려옴 → 구간당 2번"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "실생활 서술(정차·최고 속력)을 연속함수 v(t) 의 0→최고→0 모양으로 번역"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "실생활 연속량의 사잇값 정리(적어도 n번)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정차하므로 A·B·C 에서 속력 0. A→B 에서 0→58→0 이니 30 을 올라갈 때·내려올 때 각 한 번, B→C 도 마찬가지 → 적어도 4번(④). 「정차」 를 속력 0 으로 읽어 각 구간을 두 번 세는 것이 변별점(d1). 시험 종합·M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "v(t) 연속, 정류장에서 v=0 → 각 구간 0→최고→0 이 30 을 2번 지남 → 2×2=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0197.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정류장 수·최고 속력·기준 속력을 바꿀 수 있음. 제약: 기준 속력이 각 구간 최고 속력보다 작아야 하고(크면 그 구간 기여 0), 정차 조건을 빼면 중간 정류장에서 속력 0 이 보장되지 않아 답이 달라짐."
    creative: "(1) 한 구간의 최고 속력을 기준값보다 작게 두어 기여 0(★2 · I-MI d1) (2) 「정차한다」 조건을 빼고 최솟값을 묻기 → 2번(★2 · T-범위) (3) 두 버스가 반대 방향으로 출발해 속력이 같아지는 순간(★3 · I-EQV d2)."
```

```yaml
- id: RPM-CALC1-0198
  page: 34
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 꼭 나오는 문제"
  summary: |
    그래프($x=-1$ 에서 좌극한 0·우극한 2·$f(-1)=1$)로 주어진 $f$ 와 $g(x)=x^3+ax^2+bx+1$ 에 대해 $g(f(x))$ 가 모든 실수에서 연속일 때 $g(-1)$.
  category: "f 의 뜀 값 0·2·함숫값 1 → g(0)=g(2)=g(1) → 연립 → g(-1)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "g∘f 연속을 f 의 좌극한·우극한·함숫값 세 값에서 g 가 같은 값을 갖는 조건으로 환원(g 는 다항함수)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "합성함수 g(f(x)) 의 연속 조건(미정계수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f 는 x=-1 에서만 불연속(좌 0·우 2·값 1). g 연속이므로 g(0)=g(2)=g(1) → 4a+2b=-8, a+b=-1 → a=-3, b=2. g(-1)=-1+a-b+1=a-b=-5. 0182 와 같은 환원이나 세 값·두 미지수 연립으로 노동량이 큼. 시험 종합(무표시)·d1·M_total 7 → ★3.
  tier: star_3
  mechanism_primary: "f(-1-)=0·f(-1+)=2·f(-1)=1 → g(0)=g(2)=g(1) → a=-3,b=2 → g(-1)=-5"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$-5$'
  answer_source: "답지"
  figure: "crop:fig-0198.png"
  latex: latex-bank/rpm-calc1/items/0198.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "그래프의 세 값(좌·우극한·함숫값)과 g 의 차수·상수항을 바꿀 수 있음. 제약: 세 값이 서로 달라야 조건이 두 개 나오고, 미지수 개수와 맞게 g 의 자유도 설정(삼차 두 미지수 → 두 조건)."
    creative: "(1) 세 값 중 둘을 같게 해 조건 하나 → 「g(-1) 의 최솟값」 (★3~4 · I-MI d1) (2) g(x)=|x-p|+q 로 바꿔 대칭 판단(★3 · I-SYM d1) (3) f(g(x)) 연속으로 바꿔 g 의 치역이 -1 을 지나는지(★4 · I-EQV d2)."
```

### 서술형 주관식

```yaml
- id: RPM-CALC1-0199
  page: 35
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    세 조각 함수 $f(x)=-2x+a\ (x<-1)$, $x^2-b\ (-1\le x<1)$, $3x+c\ (x\ge1)$ 가 모든 실수에서 연속이고 $f(0)=-1$ 일 때 $abc$.
  category: "f(0)=-1 → b → 경계 x=-1, 1 에서 값 일치 → a, c"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조각함수가 연속일 조건(미정계수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(0)=-b=-1 → b=1. x=-1: 2+a=1-b=0 → a=-2. x=1: 1-b=0=3+c → c=-3. abc=6. 경계 두 곳의 표준 조건이며 통찰 0. [분류 이슈] 서술형 구역(★3 출발)이나 통찰 0·M_total 6 의 표준 절차라 ★2 로 둠.
  tier: star_2
  mechanism_primary: "f(0)=-1 → b=1 → x=-1: 2+a=0 → a=-2 · x=1: 0=3+c → c=-3 → abc=6"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0199.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 조각의 계수·경계점·f(0) 값을 바꿀 수 있음. 제약: 미지수 3개에 조건 3개(경계 2 + 함숫값 1)가 독립이어야 하고 abc 가 정수."
    creative: "(1) f(0)=-1 대신 f(2)=k 등 다른 조각의 값으로 주기(★2) (2) 조각 중 하나를 (x²+px+q)/(x-1) 꼴로 두어 0/0 극한 결합(★3) (3) 「연속이 되게 하는 (a,b,c) 가 존재하지 않는 경우」 를 묻기 → 역방향(★3 · I-BW d1)."
```

```yaml
- id: RPM-CALC1-0200
  page: 35
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    모든 실수에서 연속인 $f$ 가 $(x-2)f(x)=ax^2+bx$, $f(2)=4$ 를 만족할 때 상수 $a$, $b$ 에 대한 $a+b$.
  category: "x=2 대입 → 우변 0 → b=-2a → 약분 → f(2)=극한 → a"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "(x-a)f(x)=g(x) 꼴 연속함수의 함숫값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x=2 를 대입하면 0=4a+2b → b=-2a. 그러면 우변=ax(x-2) 이고 x≠2 에서 f(x)=ax, 연속이므로 f(2)=2a=4 → a=2, b=-4, a+b=-2. (x-a)f(x)=g(x) 꼴의 표준 절차·통찰 0. [분류 이슈] 서술형 ★3 출발이나 M_total 6·통찰 0 → ★2.
  tier: star_2
  mechanism_primary: "x=2 대입 → 4a+2b=0 → f(x)=ax (x≠2) → f(2)=2a=4 → a=2,b=-4 → -2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0200.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "인수 (x-p)·우변 이차식·f(p) 를 바꿀 수 있음. 제약: 우변이 (x-p) 를 인수로 갖도록 계수 하나가 결정되고, 나머지 하나는 f(p) 로 결정되게 미지수 2개 유지."
    creative: "(1) 우변을 삼차식으로 두고 f(p)·f(0) 두 조건(★2~3) (2) 좌변을 (x-1)(x-2)f(x) 로 두어 두 점에서 조건(★3 · I-CON d1) (3) f 가 x=2 에서만 불연속이어도 되는 조건으로 바꿔 「f(2) 의 가능한 값」 을 묻기(★3 · I-MI d1)."
```

```yaml
- id: RPM-CALC1-0201
  page: 35
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 주관식"
  summary: |
    연속함수 $f$ 의 $f(1)=-5$, $f(2)=-2$, $f(3)=3$, $f(4)=-14$ 가 주어질 때 방정식 $f(x)+3x=0$ 이 구간 $(1,\,4)$ 에서 적어도 몇 개의 실근을 갖는지.
  category: "g(x)=f(x)+3x 정의 → g(1)~g(4) 부호 → 부호 변화 구간 세기"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(x)+3x=0 의 실근을 연속함수 g=f+3x 의 부호 변화로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "함숫값 표에서 사잇값 정리로 실근 개수의 최솟값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    g(1)=-2·g(2)=4·g(3)=12·g(4)=-2 이므로 (1,2)·(3,4) 에서 부호가 바뀌어 적어도 2개. (2,3) 은 같은 부호. g 를 만드는 d1 한 단계 뒤는 0177 과 같은 절차. [분류 이슈] 서술형 ★3 출발이나 d1 하나·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "g=f+3x → g(1)<0<g(2), g(3)>0>g(4) → 2개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2$개'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0201.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "함숫값 4개와 더하는 일차식 3x 를 바꿀 수 있음. 제약: g 의 부호 변화 횟수가 답이므로 값 설계 시 g(k)=0 인 경우(경계 근)를 의도적으로 넣거나 피함."
    creative: "(1) f(x)=x² 의 근 → g=f-x²(★2) (2) 조건을 f(k)·f(k+1) 의 곱 부호로 주기(★2 · I-EQV d1) (3) 「정확히 2개일 수 있는가」 를 물어 사잇값 정리의 한계 서술(★3 · I-EQV d2)."
```

### 실력 Up

```yaml
- id: RPM-CALC1-0202
  page: 35
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    직선 $y=x+k$ 와 곡선 $y=\sqrt{x-2}$ 의 교점 개수 $f(k)$ 가 불연속인 모든 실수 $k$ 의 곱.
  category: "교점 ↔ t=√(x-2)≥0 의 이차방정식 실근 → 접점·끝점 k 로 케이스 → f(k) 계단 → 뜀 위치의 곱"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "교점 개수를 t=√(x-2)≥0 치환 이차방정식 t²-t+(2+k)=0 의 음이 아닌 실근 개수로 전환(기하↔대수, 범위 조건 동반)"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "k 에 따라 판별식 0(접점 k=-7/4)·끝점 통과(k=-2)·그 사이를 나눠 f(k) 를 0·1·2 의 계단으로 구성"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "교점 개수 함수 f(k) 의 불연속점"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    t²-t+(2+k)=0 (t≥0) 의 실근 개수: k<-2 이면 근의 곱<0 으로 1개, -2≤k<-7/4 이면 두 양근(k=-2 는 t=0,1) 2개, k=-7/4 접점 1개, k>-7/4 0개. f(k) 는 k=-2·-7/4 에서 뜀. 곱 7/2. 그래프 교점을 범위 조건 붙은 방정식으로 번역(RT d2)하고 k 로 케이스를 나눠 계단함수를 세운 뒤(MI d2) 불연속점을 읽는 세 단계. 통찰 2개·M_total 9 → 실력 Up ★4 유지.
  tier: star_4
  mechanism_primary: "t=√(x-2)≥0 → t²-t+(2+k)=0 실근 수 → k=-2(끝점)·-7/4(접점)에서 개수 변화 → 곱 7/2"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$\dfrac{7}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0202.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "직선 기울기·곡선 평행이동(√(x-p))·절편 k 를 바꿀 수 있음. 제약: 접점 k 와 끝점 k 가 서로 다르고 곱이 간단한 유리수가 되게 p 선택, 기울기가 음수면 교점이 최대 1개라 계단이 달라짐."
    creative: "(1) 곡선을 y=√(4-x²) 반원으로 → 접선·끝점 두 개(★4 · I-MI d2) (2) f(k) 의 불연속점 개수만 묻기(★3) (3) 직선 대신 y=k 수평선 → 개수 함수가 단순해져 ★3, 반대로 기울기도 매개변수로 두면 ★5 후보(I-SC)."
```

```yaml
- id: RPM-CALC1-0203
  page: 35
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    $f(x)=x+1\ (x<0)$, $x^2-2x\ (x\ge0)$ 에 대해 $f(x)f(x-k)$ 가 $x=k$ 에서 연속이 되게 하는 모든 실수 $k\ (k\ne0)$ 의 곱.
  category: "f(x-k) 의 뜀은 x=k → 곱이 연속 ⇔ f(k)·(좌·우극한 차)=0 → f(k)=0 → k"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "평행이동 f(x-k) 의 불연속점이 x=k 로 옮겨감을 읽고, k≠0 이라 x=k 에서 f(x) 는 연속"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "곱의 x=k 연속 ⇔ 뜀이 있는 인수의 좌극한 1·우극한 0 차이를 다른 인수 f(k) 가 0 으로 없애야 함 → f(k)=0"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "f(x)f(x-k) 꼴 곱함수의 연속 조건"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    f 는 x=0 에서만 불연속(좌 1·우 0=f(0)). x=k 에서 f(x) 는 연속(값 f(k)), f(x-k) 는 좌극한 1·우극한 0·값 0. 곱의 좌극한 f(k)·1, 우극한·값 0 → f(k)=0. k<0: k+1=0 → k=-1, k>0: k²-2k=0 → k=2(k≠0). 곱 −2. 뜀 인수와 0 인수의 곱 구조를 읽는 d2 + 평행이동 d1, M_total 7 → 실력 Up ★4 유지.
  tier: star_4
  mechanism_primary: "f(x-k) 뜀 at x=k (좌 1·우 0) · f(x) 연속 → 곱 연속 ⇔ f(k)=0 → k=-1, 2 → -2"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-calc1/items/0203.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "f 의 두 조각·뜀 크기·k≠0 조건을 바꿀 수 있음. 제약: f(k)=0 의 해가 각 조각에서 하나씩 나오고 k=0 이 해에 포함되면 제외 조건이 필요(T-범위), 곱이 정수."
    creative: "(1) f(x)f(x+k) 로 부호를 바꿔 뜀이 x=-k 로(★4) (2) x=0 에서의 연속 조건도 함께 요구 → f(-k)=0 도 필요, 두 조건 연립(★4~5 · I-CON d2) (3) 곱 대신 합 f(x)+f(x-k) 로 바꾸면 뜀이 상쇄될 수 없음을 보이기(★3 · I-EQV d1)."
```

```yaml
- id: RPM-CALC1-0204
  page: 35
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    네 점 O(0,0), A(1,6), B(9,0), C(8,6) 을 꼭짓점으로 하는 사다리꼴 AOBC 의 넓이를 이등분하고 $x$ 축에 평행한 직선이 적어도 하나 존재함을 사잇값 정리로 보이기(증명).
  category: "직선 y=t 아래 넓이 함수 S(t) 구성 → 연속·S(0)=0·S(6)=48 → g=S-24 부호 변화 → 존재"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "기하 존재 명제를 직선 높이 t 의 연속함수 S(t)(아래쪽 넓이)로 번역하고 S(t)=24 의 해 존재를 사잇값 정리로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "사잇값 정리로 존재 명제 증명(넓이 함수 구성)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    전체 넓이 (7+9)·6/2=48. 0≤t≤6 에 대해 직선 y=t 아래 부분의 넓이 S(t) 는 t 에 대해 연속(실제로 S(t)=9t-t²/6)이고 S(0)=0, S(6)=48. g(t)=S(t)-24 는 g(0)=-24<0, g(6)=24>0 이므로 (0,6) 에서 g(t)=0 인 t 가 존재. 넓이 함수를 스스로 세우는 d2 통찰 하나·M_total 6. 실력 Up ★4 출발을 유지하되 노동량이 작아 [분류 이슈] ★3 후보.
  tier: star_4
  mechanism_primary: "S(t)=직선 y=t 아래 넓이(연속) → S(0)=0<24<48=S(6) → 사잇값 정리 → 이등분선 존재"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "풀이 참조"
  answer_source: "답지"
  figure: "crop:fig-0204.png"
  latex: latex-bank/rpm-calc1/items/0204.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "꼭짓점 좌표(사다리꼴 높이·밑변)를 바꿀 수 있음. 제약: 도형이 각 높이에서 단일 폭을 갖는 볼록 도형이어야 S(t) 가 연속·단조, 넓이의 절반이 계산 가능."
    creative: "(1) y 축에 평행한 직선으로 바꾸면 폭 함수가 꺾여 S 가 조각 이차식(★4) (2) 「넓이를 1:2 로 나누는 직선」 존재(★4) (3) 원과 삼각형이 겹친 도형처럼 폭이 단조가 아니어도 연속만으로 충분함을 묻기(★4~5 · I-EQV d2) (4) 실제 t 값을 구하게 하면 이차방정식 풀이로 절차형 ★3."
```

## 표본 판정 요약 (32문)

- ★ 분포: ★1 1 · ★2 21 · ★3 7 · ★4 3 · ★5 0
- 통찰형 8(0184·0185·0186·0192·0194·0202·0203·0204) · 절차형 24 · premium 0 · d1 통찰만 있는 절차형 9(0175·0179·0180·0181·0182·0183·0197·0198·0201)
- type_hint 상위: 「사잇값 정리로 실근이 존재하는 구간 찾기」 3(0176·0178·0196) · 「실생활 연속량의 사잇값 정리(적어도 n번)」 3(0180·0181·0197) · 「함숫값 표에서 사잇값 정리로 실근 개수의 최솟값」 2(0177·0201) · 「합성함수 g(f(x)) 의 연속 조건(미정계수)」 2(0182·0198) · 「그래프로 주어진 함수의 합성함수 연속성 판정」 2(0183·0184) · 「극한·대칭 조건이 주어진 연속함수의 실근 개수 최솟값」 2(0185·0186) · 「조각함수가 연속일 조건(미정계수)」 2(0190·0199) · 「(x-a)f(x)=g(x) 꼴 연속함수의 함숫값」 2(0193·0200)
- 그림: 7문(`crop:fig-0173.png` · `crop:fig-0180.png` · `crop:fig-0183.png` · `crop:fig-0184.png` · `crop:fig-0189.png` · `crop:fig-0198.png` · `crop:fig-0204.png`)
- 답 출처: 답지 30 · 해설 1(0186) · 답지(쪽 렌더) 1(0187). 전사 답과 재풀이가 어긋난 문항 없음.

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 2단 이상 어긋난 문항은 없다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-CALC1-0183 | 유형 UP 구역(★3 출발)이나 벤더 「중」 표시·d1 하나·M_total 5 의 그래프 읽기 → ★2 로 둠. 구역 신호와 난이도 표시가 충돌 | ★2 / ★3 |
| RPM-CALC1-0185 | 통찰 2개(d1+d2)·M_total 8 로 +1 후보. 두 번째 통찰(극한 존재 → f(-1)=f(2)=0)이 표준이라 유형 UP 대표 ★3 유지 | ★3 / ★4 |
| RPM-CALC1-0199 | 서술형 구역(★3 출발)이나 통찰 0·M_total 6 의 경계 조건 연립 → ★2 | ★2 / ★3 |
| RPM-CALC1-0200 | 서술형 구역(★3 출발)이나 통찰 0·M_total 6 의 (x-a)f(x)=g(x) 표준 절차 → ★2 | ★2 / ★3 |
| RPM-CALC1-0201 | 서술형 구역(★3 출발)이나 d1 하나·M_total 6 → ★2 (0177 과 같은 골조) | ★2 / ★3 |
| RPM-CALC1-0204 | 실력 Up ★4 유지했으나 통찰 1개(RT d2)·M_total 6 으로 노동량이 작음. 증명 서술 부담을 어떻게 볼지에 따라 ★3 | ★4 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 사잇값 정리 계열은 (a) 실근 구간 찾기(0176·0178·0196) (b) 함숫값 표 → 최소 실근 수(0177·0201) (c) 실근 보장 매개변수 범위(0179) (d) 실생활 연속량(0180·0181·0197) (e) 극한·대칭 조건 → 최소 실근 수(0185·0186) (f) 존재 명제 증명(0204) 으로 나뉜다. (a)(b)(c) 는 「사잇값 정리 기본 적용」 한 유형(base ★2)으로 통합 가능, (d) 는 같은 골조지만 모델링 번역이 있어 별도 유형(base ★2), (e) 는 별도 유형(base ★3), (f) 는 별도(base ★3~4).
- 합성함수 연속 계열: 미정계수(0182·0198) · 그래프 판정(0183·0184) · 명제 판별(0194). 미정계수·그래프 판정은 「합성함수 연속 ⇔ 안쪽 뜀 값에서 바깥 값 일치」 한 유형(base ★3)으로 통합 가능, 명제·반례형은 별도(base ★3).
- 최대·최소 정리 계열(0173·0174·0175·0195): 값 계산(★1)과 존재 판정(★2)을 분리. 존재 판정은 「열린 끝·점근선·불연속점」 세 함정이 변형 축.
- 곱함수 연속 조건(0192·0203)은 「불연속 인수 × 0 인수」 골조가 같아 한 유형(base ★3~4)으로 세우되, 0189 같은 그래프 사칙연산 판정(★2)과는 구분.
- 교점 개수 함수의 불연속점(0202)은 이 범위에서 유일하며 별도 유형(base ★4)이 필요.
- 서술형 3문이 모두 표준 절차(★2)라 이 단원에서는 서술형 구역 출발점 ★3 을 그대로 쓰기보다 유형 구역 기준(★2)에 「서술 부담」 만 메모로 얹는 편이 정확할 수 있다.
