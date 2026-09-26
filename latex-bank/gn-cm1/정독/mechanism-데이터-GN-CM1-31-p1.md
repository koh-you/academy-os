---
name: mechanism-데이터-GN-CM1-31-p1
description: 개념원리 공통수학1 31 조합(1/3 · 260쪽 개념원리 익히기 4문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 공통수학1 (22개정) · 전사본 latex-bank/gn-cm1
  section: 31 조합
  unit_code: "31"
  part: "1/3"
  extract_range: "260~260쪽 · 260-572~260-575"
  total_problems: 4
  unit_total: 45
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-cm1/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-cm1/items/<id>.tex
  image_source: latex-bank/gn-cm1/figures/ (crops.json)
---

# 개념원리 공통수학1 · 31 조합 (1/3) 정독 데이터 (v1.0)

이 파일은 31단원 조합의 첫 조각으로, 260쪽 「개념원리 익히기」 통번호 4문항(260-572~260-575) 전수를 담는다. 단원 전체 45문항 중 1/3 조각의 앞머리이며, 조합 기호 ${}_n\mathrm{C}_r$ 의 정의가 막 제시된 직후의 확인 구역이라 네 문항 모두 개념 확인 성격이 강하다. 개념원리 고등의 난이도 신호는 구역과 태그로 들어오는데, 이 조각에는 「필수·발전 예제」도 「연습문제 STEP」도 없고 level·tag 가 모두 비어 있어 벤더 출발점은 일률적으로 ★1 이다. 출발점에서 M_total 과 통찰로 ±1 만 조정했고, 그 결과 ★1 둘 · ★2 둘로 갈렸다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이다. 그래서 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 통찰 골조를 유지한 창의 변형과 ★ 변동 지점)를 채웠다. 조합 단원의 익히기 구역은 「무엇을 바꾸면 ₙCᵣ 의 성질이 필요해지는가」가 변형 설계의 축이라, 그 지점을 `variation_notes.creative` 에 명시했다. 이 조각에는 그림이 없다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-CM1-260-572
  page: 260
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 조합의 수 ${}_4\mathrm{C}_2$ · ${}_5\mathrm{C}_0$ · ${}_8\mathrm{C}_8$ · ${}_{15}\mathrm{C}_{13}$ 의 값 구하기.
  category: '조합의 수 직접 계산 → 정의와 기본 성질(${}_n\mathrm{C}_0={}_n\mathrm{C}_n=1$ · ${}_n\mathrm{C}_r={}_n\mathrm{C}_{n-r}$) 확인'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조합의 수 계산(정의와 기본 성질)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    정의 ${}_n\mathrm{C}_r=\dfrac{n!}{r!(n-r)!}$ 를 그대로 대입하는 네 소문항. ⑵⑶ 은 $0!=1$ 규약과 ${}_n\mathrm{C}_0={}_n\mathrm{C}_n=1$ 확인, ⑷ 만 ${}_{15}\mathrm{C}_{13}={}_{15}\mathrm{C}_2$ 로 줄이면 한 줄로 끝난다.
    한 단계짜리 계산이고 분기·검증이 없다. 통찰 0 · M_total 4 → 익히기 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: '정의 대입 → ⑵⑶ 은 규약으로 값 1 → ⑷ 는 ${}_{15}\mathrm{C}_{13}={}_{15}\mathrm{C}_2$ 로 줄여 계산'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $6$ ⑵ $1$ ⑶ $1$ ⑷ $105$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/260-572.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '$n$·$r$ 값을 바꿀 수 있음(${}_6\mathrm{C}_2$ · ${}_7\mathrm{C}_3$ · ${}_{20}\mathrm{C}_{18}$). 제약: $0\le r\le n$ 이고 답이 정수로 떨어져야 하며, 네 소문항의 역할 분담(정의 대입 1 · 규약 확인 2 · ${}_n\mathrm{C}_{n-r}$ 축약 1)을 유지하려면 $r$ 이 $n$ 에 가까운 소문항을 한 개는 남긴다.'
    creative: '⑴ 축약 없이는 계산이 폭증하는 값(${}_{50}\mathrm{C}_{48}$)으로 성질의 필요성을 부각(★1 유지) ⑵ ${}_n\mathrm{C}_0+{}_n\mathrm{C}_1+\cdots+{}_n\mathrm{C}_n$ 처럼 합을 묻기(부분집합 대응 필요 · ★2 · I-RT d1) ⑶ 값이 같은 두 기호를 고르게 하면 ${}_n\mathrm{C}_r={}_n\mathrm{C}_{n-r}$ 판단이 생겨 ★2.'
```

```yaml
- id: GN-CM1-260-573
  page: 260
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑶ 등식 ${}_n\mathrm{C}_3=35$ · ${}_6\mathrm{C}_r=20$ · ${}_{2n}\mathrm{C}_2=45$ 를 만족시키는 $n$ 또는 $r$ 의 값 구하기.
  category: '조합 기호를 계승으로 전개 → 곱 꼴 방정식 → 자연수 범위 해 선택'
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "등식을 만족시키는 $n$ 또는 $r$ 구하기(조합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 소문항 모두 정의를 전개해 얻은 곱 꼴 방정식을 자연수 범위에서 푸는 표준 절차다. ⑴ 은 $n(n-1)(n-2)=210$ 을 연속한 세 정수의 곱으로 읽고, ⑵ 는 $0\le r\le 6$ 에서 ${}_6\mathrm{C}_r$ 값을 비교하며, ⑶ 은 $2n$ 을 먼저 구한 뒤 묻는 값이 $n$ 임에 주의해야 한다(T-범위·표기).
    통찰로 셀 분기는 없으나 앞 문항의 단순 대입보다 단계·계산이 한 단 무겁고 해의 범위 점검이 붙는다. M_total 6 → 익히기 출발점 ★1 에서 +1 → ★2.
  tier: star_2
  mechanism_primary: '${}_n\mathrm{C}_r$ 를 계승으로 전개 → 연속한 정수의 곱 꼴 방정식 → $0\le r\le n$ 인 자연수 해 선택(⑶ 은 $2n$ 이 아니라 $n$ 을 답)'
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $7$ ⑵ $3$ ⑶ $5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/260-573.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '우변 값과 아래 첨자를 바꿀 수 있음(${}_n\mathrm{C}_2=28$ · ${}_n\mathrm{C}_3=84$ · ${}_{3n}\mathrm{C}_2=15$). 제약: 좌변 전개가 연속한 자연수의 곱으로 떨어져 자연수 해가 하나여야 하고, ${}_6\mathrm{C}_r$ 꼴은 ${}_n\mathrm{C}_r={}_n\mathrm{C}_{n-r}$ 때문에 해가 둘이 되지 않는 값(중앙값)만 쓴다. 합성 첨자(${}_{2n}$)를 쓸 때는 묻는 문자를 발문에 명시.'
    creative: '⑴ 묻는 값과 방정식의 해가 다르게(${}_{2n+1}\mathrm{C}_2$) 만들면 함정만 늘고 골조는 유지(★2) ⑵ ${}_n\mathrm{C}_{r}={}_n\mathrm{C}_{r+2}$ 처럼 성질을 써야 풀리는 등식이면 동치 변환 1개가 생겨 ★3(I-EQV d1) ⑶ ${}_n\mathrm{P}_r$ 와 ${}_n\mathrm{C}_r$ 를 함께 주고 연립하면 단계·추상도 상승으로 ★3.'
```

```yaml
- id: GN-CM1-260-574
  page: 260
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴ 서로 다른 모자 $10$ 개에서 $7$ 개를 고르는 방법의 수 ⑵ 축구팀 $9$ 개가 다른 팀과 모두 한 번씩 경기할 때 전체 경기 수.
  category: '상황을 순서 없는 선택으로 옮기기 → 조합의 수 계산'
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "조합의 수 활용(뽑는 방법의 수 · 리그전 경기 수)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    조합의 정의를 처음 상황에 적용하는 두 소문항. ⑴ 은 ${}_{10}\mathrm{C}_7={}_{10}\mathrm{C}_3$ 로 줄이면 한 줄이고, ⑵ 는 한 경기를 두 팀의 무순 쌍으로 보는 리그전 표준 모형이라 ${}_9\mathrm{C}_2$ 로 끝난다.
    순열이 아니라 조합이라는 판단이 유일한 분기지만, 개념 제시 직후의 익히기 구역이고 그 판단이 곧 이 절의 학습 목표라 통찰로 카운트하지 않았다. 통찰 0 · M_total 4 → ★1.
    [분류 이슈] 「순서 무관」 판단 한 단계를 I-RT d1 로 세면 통찰형 ★2 가 된다 — 구역 성격을 따라 절차형 ★1 로 두고 기록만 함.
  tier: star_1
  mechanism_primary: '순서를 따지지 않는 선택임을 확인 → ⑴ ${}_{10}\mathrm{C}_7={}_{10}\mathrm{C}_3$ ⑵ 경기 = 두 팀의 무순 쌍 → ${}_9\mathrm{C}_2$'
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $120$ ⑵ $36$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/260-574.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '고르는 개수와 팀 수를 바꿀 수 있음(모자 $12$ 개 중 $9$ 개 · 팀 $7$ 개 · 팀 $11$ 개). 제약: ⑴ 은 $r$ 이 $n$ 에 가까워 ${}_n\mathrm{C}_{n-r}$ 로 줄이는 이점이 남아야 하고, ⑵ 는 팀 수가 자연수이며 답이 ${}_n\mathrm{C}_2=\dfrac{n(n-1)}{2}$ 로 정수가 되어야 한다.'
    creative: '⑴ 「7 개를 골라 일렬로 진열」이면 조합×순열 두 단계로 ★2 ⑵ 「홈·어웨이로 두 번씩」이면 ${}_9\mathrm{P}_2$ 가 되어 순서 판단이 진짜 분기가 됨(★2 · I-RT d1) ⑶ 경기 수를 주고 팀 수를 묻는 역방향이면 ${}_n\mathrm{C}_2=k$ 방정식 + 자연수 검증이 붙어 ★2~3(I-BW d1) ⑷ 「특정 두 팀은 반드시 포함」 같은 조건을 얹으면 여사건·분할 전략 선택으로 ★3.'
```

```yaml
- id: GN-CM1-260-575
  page: 260
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    $1\le r\le n$ 일 때 등식 $r\times{}_n\mathrm{C}_r=n\times{}_{n-1}\mathrm{C}_{r-1}$ 이 성립함을 보이는 증명 과정에서 빈칸 ㈎ ㈏ ㈐ 에 알맞은 식 채우기.
  category: '조합의 계승 표현 대입 → 계승을 올리고 내리는 동치 변형으로 앞뒤 줄 맞추기'
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: '$n\times(n-1)!=n!$ · $r\times(r-1)!=r!$ 로 계승 표현을 옮겨 각 줄이 다음 줄과 동치가 되도록 맞춤'
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: '조합의 성질 증명 빈칸 채우기($r\,{}_n\mathrm{C}_r=n\,{}_{n-1}\mathrm{C}_{r-1}$)'
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    주어진 증명의 각 줄에서 다음 줄과 같아지도록 빈칸을 역으로 맞추는 문항이다. 수치 계산은 없고, 핵심은 계승을 한 칸 올리고 내리는 동치 변형($n(n-1)!=n!$ · $r(r-1)!=r!$) 하나뿐이다.
    $n$·$r$ 가 일반 자연수라 표현 추상도가 올라가고 $1\le r\le n$ 범위 조건이 붙는다(T-범위). 익히기 출발점 ★1 에서 통찰 1개(EQV d1)·M_total 6·추상도 상승으로 +1 → ★2. 통찰이 1개·depth 1 이라 ★3 으로는 올리지 않았다.
  tier: star_2
  mechanism_primary: '${}_{n-1}\mathrm{C}_{r-1}$ 를 계승으로 전개(㈎) → $n\times(n-1)!=n!$ 로 분자 정리(㈏) → $r\times(r-1)!=r!$ 로 되묶어 ${}_n\mathrm{C}_r$ 복원(㈐)'
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '㈎ $(n-r)!$ ㈏ $n!$ ㈐ $r!$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-cm1/items/260-575.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: '문자식 항등식이라 바꿀 수 있는 수가 사실상 없다. 구체화하려면 $r$ 만 수치로 고정한 형태($3\,{}_n\mathrm{C}_3=n\,{}_{n-1}\mathrm{C}_2$)로 난도를 낮추고, 실질적인 변형 축은 빈칸의 위치(어느 줄의 분모·분자를 가릴지)다. 제약: $1\le r\le n$ 과 $0!=1$ 규약이 깨지는 자리(예: $r-1<0$)에는 빈칸을 두지 않는다.'
    creative: '⑴ 빈칸 없이 등식 전체를 증명하게 하면 서술형 ★3 ⑵ 같은 골조로 파스칼 항등식 ${}_n\mathrm{C}_r={}_{n-1}\mathrm{C}_{r-1}+{}_{n-1}\mathrm{C}_r$ 의 빈칸 증명으로 바꾸면 통분 단계가 더해져 ★3 ⑶ 증명한 등식을 $\sum r\,{}_n\mathrm{C}_r$ 계산에 쓰게 하면 표현 전환이 추가돼 ★4(I-RT d2) ⑷ 빈칸을 한 개만 남기면 ★1 로 내려간다.'
```

## 표본 판정 요약 (4문)

- ★ 분포: ★1 2 · ★2 2 · ★3 0 · ★4 0 · ★5 0
- 통찰형 1(260-575 · I-EQV d1) · 절차형 3 · premium 0
- type_hint: 「조합의 수 계산(정의와 기본 성질)」 1 · 「등식을 만족시키는 $n$ 또는 $r$ 구하기」 1 · 「조합의 수 활용(뽑는 방법의 수 · 리그전 경기 수)」 1 · 「조합의 성질 증명 빈칸 채우기」 1 — 네 문항이 서로 다른 유형이다(익히기 구역이 한 절의 하위 유형을 한 문항씩 훑는 구성).
- M_total: 4 · 6 · 4 · 6 (평균 5.0) · 대상층: 하위권 2 · 중하위권 1 · 중위권 1
- 벤더 신호: level·tag 모두 비어 있어 네 문항 모두 ★1 출발. 두 문항만 M_total·통찰로 +1.
- 그림: 0문

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-CM1-260-574 | 「순서 무관이므로 순열이 아니라 조합」 판단을 I-RT d1 통찰로 세면 통찰형 ★2. 개념 제시 직후 익히기 구역이고 그 판단 자체가 학습 목표라 절차형 ★1 로 둠 | ★1 / ★2 |

벤더 신호와 2단 이상 어긋난 문항은 없다(네 문항 모두 출발점 ★1 에서 ±1 이내).

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 조각에서 반복된 type_hint 는 없다. 다만 「조합의 수 계산(정의와 기본 성질)」과 「등식을 만족시키는 $n$ 또는 $r$ 구하기」는 31단원 뒷부분(2/3·3/3 의 필수 예제·연습문제)에서 반복될 가능성이 높으므로 **카탈로그에 각각 독립 유형으로 세우는 것이 좋다**(전자는 base ★1, 후자는 base ★2 후보).
- 「조합의 수 활용(뽑는 방법의 수)」과 「리그전·악수 경기 수」는 골조가 같아(무순 쌍 → ${}_n\mathrm{C}_2$) **하나의 유형으로 통합**해도 된다. 다만 「특정 원소 포함·제외」 조건이 붙는 순간 별도 유형(base ★2~3)으로 갈라야 한다.
- 「조합의 성질 증명 빈칸 채우기」는 ${}_n\mathrm{C}_r={}_n\mathrm{C}_{n-r}$ · 파스칼 항등식 · $r\,{}_n\mathrm{C}_r=n\,{}_{n-1}\mathrm{C}_{r-1}$ 세 항등식을 묶어 **증명 완성형 유형 하나**(base ★2, 서술형이면 ★3)로 세우는 것이 실용적이다.
- 이 단원은 순열(30단원)과의 경계 판단이 ★ 를 가르는 축이므로, 카탈로그에 「순열/조합 구분이 분기인 유형」을 따로 표시해 두면 변형 설계에서 바로 쓸 수 있다.
