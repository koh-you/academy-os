---
name: mechanism-데이터-GN-M32-14-p2
description: 개념원리 중학 3-2 14 산점도와 상관관계(2/2 · 28문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id·base_star null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-2 · 전사본 latex-bank/gn-m32
  section: 14 산점도와 상관관계
  unit_code: GN-M32-14
  part: "2/2"
  extract_range: "138~143쪽 · 138-01~143-u6"
  total_problems: 28
  unit_total: 45
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 가 비면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m32/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m32/items/<id>.tex
  image_source: latex-bank/gn-m32/figures/ (crops.json)
---

# 개념원리 중학 3-2 · 14 산점도와 상관관계 (2/2) 정독 데이터 (v1.0)

138~143쪽 28문항 전수. 단원 45문항 중 앞 17문(대푯값·산점도 본문 구역)은 `14-p1` 이 다루고, 이 파일은 **단원 뒤쪽 평가 구역 네 개**만 담는다 — 「중단원 마무리하기 STEP 1 기본 문제」(10문 · 138~139쪽) · 「STEP 2 발전 문제」(7문 · 140~141쪽) · 「STEP 3 실력 UP」(3문 · 141쪽) · 「서술형 대비 문제」(8문 · 142~143쪽 · 예제 `e` 와 유제 `u` 가 짝). 개념원리 중학은 문항별 난이도 표기가 없고 **구역 자체가 난이도 층**이므로 STEP 1 ★2 · STEP 2 ★3 · STEP 3 ★4 · 서술형 ★3 을 출발점으로 삼고 M_total·통찰로 ±1 조정했다. `꼭나와` 태그는 빈출 표시이므로 ★ 에 더하지 않았다(4문: 138-05 · 139-06 · 139-10 · 140-12 · 141-17).

이 범위의 도구는 둘뿐이다 — ⑴ **상자그림/사분위수**(정렬 → Q1·Q2·Q3, 각 구간이 자료의 약 25%), ⑵ **산점도**(점을 직선 기준으로 갈라 세기, 상관관계 판정). 그래서 통찰 라벨도 두 갈래에 몰려 있다. 첫째는 **말로 준 조건을 좌표평면의 직선·영역으로 옮기는 단계**(`y=x` 위아래 = 두 값의 대소, `y=x±k` 띠 = 차, `x+y=k` 평행이동 = 합의 상·하위)로 거의 전부 I-RT 이고, 둘째는 **상자그림의 구간 길이·경계를 비율·인원수로 되읽는 단계**(I-EQV, 「하위 20% 이내」→「25명 중 5명」 같은 환산 포함)다. 단순 정렬·사분위수 계산, 점 개수 세기, 상관관계 이름 붙이기는 이 학년의 표준 절차로 보고 통찰로 세지 않았다. 예외는 141-18 한 문항으로, 평균·제1사분위수 두 조건에서 후보 쌍을 나열한 뒤 조건 위배 쌍을 기각해야 해서 I-BW + I-VF 두 단계를 인정했다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 산점도 문항은 **점의 좌표 배치가 답을 고정**하므로 `variation_notes.numeric` 에 「그림 좌표 재배치 필수 · 경계선 위의 점 포함 여부를 답과 함께 다시 정할 것」 같은 제약을 함께 적었다. 답은 전사·검수 단계에서 이미 답지와 대조를 마쳤으므로 그대로 옮겼고, 여기서 재검산하지 않았다.

## 문항 데이터

### 중단원 마무리하기 STEP 1 기본 문제

```yaml
- id: GN-M32-138-01
  page: 138
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 1"
  summary: |
    학생 12명의 자습 시간 자료(12개 변량)의 제1·제2·제3사분위수를 구하기.
  category: "자료 정렬 → 사분위수 위치 확정 → 값 읽기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "자료의 사분위수 구하기(정렬 → Q1·Q2·Q3)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    변량 12개를 작은 값부터 늘어놓고 중앙값(6·7번째의 평균) → 하위 6개의 중앙값 → 상위 6개의 중앙값 순으로 읽으면 끝난다.
    n 이 짝수라 세 값 모두 이웃 두 수의 평균이라는 점만 주의하면 되고 판단 분기가 없다.
    통찰 0 · M_total 5 → STEP 1 출발점 ★2 에서 −1 하여 ★1.
  tier: star_1
  mechanism_primary: "12개 변량 정렬 → Q2 = 6·7번째 평균 → Q1 = 하위 6개 중앙값 → Q3 = 상위 6개 중앙값"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '제1사분위수: 7시간, 제2사분위수: 10시간, 제3사분위수: 12시간'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/138-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "12개 변량 값을 자유롭게 바꿀 수 있음. 제약: 변량 개수를 홀수로 바꾸면 Q1·Q2·Q3 가 모두 '가운데 한 개'로 바뀌어 골조가 달라짐(개수는 4의 배수 근처 짝수 유지 권장). 중복값(10이 네 번)을 줄이면 정렬 난이도가 내려감."
    creative: "(1) 사분위수 범위(Q3−Q1)까지 묻기(★1 유지) (2) 구한 사분위수로 상자그림을 그리게 하기(★2 · 138-04 골조와 결합) (3) 변량 하나를 미지수로 두고 Q1 을 조건으로 주면 역방향이 되어 ★3(141-18 골조)."
```

```yaml
- id: GN-M32-138-02
  page: 138
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 1"
  summary: |
    크기순으로 나열된 7개 변량(중간에 x+9, 3x 포함)의 중앙값이 21일 때 사분위수 범위. 5지선다.
  category: "중앙값 위치 = 4번째 → x 결정 → Q1·Q3 → Q3−Q1"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중앙값 조건으로 미지수를 정한 뒤 사분위수 범위 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이미 크기순이므로 n=7 의 중앙값은 4번째 항 3x, 여기서 x 가 바로 나온다.
    x 를 되돌려 넣어 하위 3개의 가운데 = Q1, 상위 3개의 가운데 = Q3 를 읽고 차를 구하는 한 줄짜리 뒷처리.
    조건→식 옮김이 표준 대입이라 통찰로 세지 않았고, 미지수 포함으로 Mₐ=2 · M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "4번째 항 3x = 21 → x=7 → 자료 확정 → Q1(2번째)·Q3(6번째) → Q3−Q1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/138-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중앙값 값(21)과 미지수 항의 꼴(x+9, 3x)을 바꿀 수 있음. 제약: 구한 x 를 넣었을 때 나열이 실제로 오름차순을 유지해야 하고(x+9 가 13 이상 19 이하), 선택지가 되도록 정수 차가 되게 Q1·Q3 를 정수로 맞출 것."
    creative: "(1) 중앙값 대신 제3사분위수를 조건으로 주기(143-u3 골조 · ★3) (2) 미지수를 두 개로 늘려 연립하게 하기(★3) (3) '사분위수 범위' 대신 상자그림의 상자 길이를 묻기(표현 전환 I-RT 추가 · ★3)."
```

```yaml
- id: GN-M32-138-03
  page: 138
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 1"
  summary: |
    상자그림에 대한 설명 5개 중 옳지 않은 것 고르기(자료 개수 파악 가능 여부·평균 계산 가능 여부 등).
  category: "상자그림의 정의와 한계 → 선택지 진위 판정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상자그림의 뜻과 성질(옳은 설명 고르기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    상자그림은 5수 요약만 담으므로 개별 변량과 평균은 복원할 수 없다는 한 가지 사실로 정답이 갈린다.
    계산이 전혀 없고 개념 진술 대조 한 단계.
    통찰 0 · M_total 4 → STEP 1 ★2 에서 −1 하여 ★1.
  tier: star_1
  mechanism_primary: "상자그림 = 5수 요약만 표시 → 평균은 구할 수 없다는 선택지 적발"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/138-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 개념 문항이라 숫자 변형 대상이 아님. 선택지 개수만 조정 가능."
    creative: "(1) 틀린 진술을 '자료의 개수를 알 수 있다'로 바꿔 오답 포인트 이동(★1 유지) (2) 옳은 것을 모두 고르는 형태로 바꿔 판정 부담 증가(★2) (3) 두 상자그림을 주고 비교 진술의 진위를 묻게 하면 140-12 골조로 이동(★3)."
```

```yaml
- id: GN-M32-138-04
  page: 138
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 1"
  summary: |
    어느 도시 최저 기온 자료에서 구한 값을 정리한 표를 보고 자료를 바르게 나타낸 상자그림 고르기.
  category: "표의 5수 요약 → 상자그림 각 위치와 대조"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "5수 요약 값으로 상자그림 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    최솟값·Q1·중앙값·Q3·최댓값 다섯 값을 그림의 수염 끝·상자 양끝·가운데 선에 하나씩 맞춰 보면 된다.
    한 값만 어긋나도 탈락이므로 대조 한 번으로 끝나는 절차.
    통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "표의 다섯 값 → 수염 끝·상자 양끝·중앙선 대응 → 선택지 그림 대조"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "③"
  answer_source: "답지"
  figure: "crop:fig-138-04.png"
  latex: latex-bank/gn-m32/items/138-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표의 다섯 값을 바꿀 수 있음. 제약: 최솟값 ≤ Q1 ≤ 중앙값 ≤ Q3 ≤ 최댓값 순서를 지켜야 하고, 값을 바꾸면 선택지 그림 5개의 눈금을 모두 다시 그려야 함(그림 의존 문항)."
    creative: "(1) 표 대신 원자료를 주고 상자그림을 고르게 하기(정렬 단계 추가 · ★2) (2) 상자그림을 주고 표의 빈칸을 채우게 하는 역방향(142-e1 골조 · ★2) (3) 두 자료의 상자그림을 겹쳐 그린 것을 고르게 하기(★3)."
```

```yaml
- id: GN-M32-138-05
  page: 138
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP 1"
  summary: |
    턱걸이 기록 상자그림을 보고 옳은 것 2개 고르기(제3사분위수·최솟값·구간별 비율·상위 25% 기준·가장 밀집된 구간).
  category: "상자그림 읽기 → 구간별 25% 해석 → 선택지 판정"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "구간의 '길이'를 그 구간에 든 변량의 '밀집도'로 되읽어, 가장 짧은 구간이 가장 밀집된 구간임을 판단"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "상자그림 해석 — 사분위수·구간별 25% 비율·밀집도"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞쪽 선택지는 상자그림에서 값을 직접 읽으면 되지만, 마지막 선택지는 네 구간이 각각 전체의 약 25% 라는 사실을 전제로 길이를 밀집도로 뒤집어 읽어야 한다(I-RT d2).
    '10회 이상 16회 이하가 약 75%', '상위 25% 기준' 도 경계 포함 여부(T-경계)와 구간 범위(T-범위) 두 함정이 걸려 Mₜ=2.
    통찰 1개 d2 · M_total 6 → STEP 1 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "상자그림의 다섯 값 읽기 → 네 구간 각 25% → 길이↔밀집도 뒤집어 읽기 → 선택지 판정"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①, ⑤"
  answer_source: "답지"
  figure: "crop:fig-138-05.png"
  latex: latex-bank/gn-m32/items/138-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상자그림의 다섯 눈금(최솟값·Q1·Q2·Q3·최댓값)을 바꿀 수 있음. 제약: 눈금을 바꾸면 '가장 짧은 구간'이 어디인지와 '몇 % 구간'인 선택지 진술을 함께 다시 계산해야 하고, 정답이 정확히 2개가 되도록 선택지 진위를 재배치할 것."
    creative: "(1) 밀집 구간을 묻는 선택지를 단독 서술형으로 빼기(I-RT 유지 · ★2) (2) 전체 학생 수를 추가로 주고 각 구간의 인원수를 묻기(★3) (3) 두 반의 상자그림을 겹쳐 비교하게 하면 140-12 골조로 이동(★3)."
```

```yaml
- id: GN-M32-139-06
  page: 139
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP 1"
  summary: |
    자격시험 응시자 14명의 필기·실기 점수 산점도에서 옳은 선택지 고르기(두 점수의 대소 인원·최빈값·조건부 평균·비율).
  category: "대각선 y=x 기준 영역 분할 → 인원 세기 → 조건부 평균·비율"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'필기보다 실기가 높다'는 말의 조건을 좌표평면의 직선 y=x 위쪽 영역으로 옮겨 세기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "산점도에서 대각선 y=x 기준 비교·조건부 평균 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 점수의 대소 비교는 대각선 y=x 를 그어 위·아래 점을 세는 것으로 환원되고(I-RT d1), 나머지 선택지는 세로줄 하나를 골라 평균을 내거나(Mₖ=2) 개수를 전체로 나누는 뒷처리다.
    선택지마다 다른 읽기를 요구해 Mₛ=2.
    통찰 1개 d1 · M_total 6 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "y=x 대각선 긋기 → 위·아래 점 세기 → 특정 실기 점수 세로줄의 필기 평균 → 비율 계산"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-139-06.png"
  latex: latex-bank/gn-m32/items/139-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "응시자 수와 각 점의 좌표를 바꿀 수 있음. 제약: 점을 옮기면 y=x 위·아래 개수, 최빈값, 세로줄 평균, 비율 선택지를 전부 다시 계산해야 하고, 대각선 위(동점)의 점은 어느 쪽에도 세지 않도록 진술을 명확히 할 것."
    creative: "(1) '두 점수가 같은 학생 수'만 묻는 단답형(★1) (2) '실기가 필기보다 10점 이상 높은 학생' 으로 바꾸면 기준선이 y=x+10 으로 평행이동(141-16 골조 · ★3) (3) 두 점수의 합 상위 몇 % 를 묻는 형태로 바꾸면 x+y=k 평행이동이 필요해 ★4(143-u6)."
```

```yaml
- id: GN-M32-139-07
  page: 139
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 1"
  summary: |
    학생 20명의 좌·우 시력 산점도에서 보기 ㄱ~ㄹ(시력이 같은 학생 수·시력의 합이 2.0 이상인 학생 수·경향·상관관계 유무) 중 옳은 것 고르기.
  category: "y=x 위의 점 · x+y=2.0 경계선 → 인원 세기 → 상관관계 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'두 시력의 합이 2.0 이상'을 직선 x+y=2.0 의 위쪽 영역으로 옮겨 점을 세기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "산점도에서 y=x·x+y=k 기준 영역 세기와 상관관계 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ은 대각선 위의 점, ㄴ은 기울기 −1 인 경계선 위쪽 점을 세는 두 가지 다른 긋기가 필요하다(합 조건의 직선 전환이 주 통찰 · I-RT d1).
    ㄷ·ㄹ은 점들이 오른쪽 위로 향하는지 한 번 보면 갈리므로 서로 모순인 진술을 함께 지운다.
    통찰 1개 · M_total 5 → STEP 1 ★2 유지(통찰이 있어 −1 하지 않음).
  tier: star_2
  mechanism_primary: "y=x 위의 점 세기 → x+y=2.0 그어 위쪽 점 세기 → 전체 경향으로 양의 상관관계 판정"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: "crop:fig-139-07.png"
  latex: latex-bank/gn-m32/items/139-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "학생 수와 기준값 2.0 을 바꿀 수 있음. 제약: 시력 눈금이 0.1 단위이므로 경계선이 격자점을 지나야 '이상'의 포함 여부가 흐려지지 않고, 기준을 바꾸면 ㄴ의 인원수를 다시 세야 함."
    creative: "(1) 합 대신 '차가 0.4 이상' 으로 바꾸면 y=x±0.4 두 직선의 바깥 영역(★3 · 141-19 골조) (2) 보기를 옳은 것의 개수로 묻기(★2 유지) (3) 상관관계가 없는 산점도를 함께 주고 비교하게 하면 139-08·139-09 결합(★2)."
```

```yaml
- id: GN-M32-139-08
  page: 139
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 1"
  summary: |
    주어진 산점도 5개 중 가장 강한 음의 상관관계를 나타내는 것 고르기.
  category: "점의 기울기 방향 → 음의 상관관계 → 밀집도로 강약 비교"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "산점도 모양으로 상관관계의 종류·강도 판정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    오른쪽 아래로 향하는 그림만 남긴 뒤 그중 점이 직선에 더 가깝게 모인 것을 고르면 된다.
    계산이 없고 그림 대조 한 단계.
    통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "오른쪽 아래 방향 그림 선별 → 점이 직선에 가장 가까운 것 선택"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-139-08.png"
  latex: latex-bank/gn-m32/items/139-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 그림 판정 문항. 선택지 그림의 점 배치(퍼짐 정도)만 조정 가능하며, 정답 그림은 다른 넷보다 뚜렷하게 더 모여 있어야 함."
    creative: "(1) '상관관계가 없는 것'을 고르게 하기(★1 유지) (2) 다섯 그림을 상관관계가 강한 순으로 배열하게 하기(★2) (3) 실생활 변량 쌍을 각 그림에 대응시키게 하면 139-09 와 결합(★2)."
```

```yaml
- id: GN-M32-139-09
  page: 139
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 1"
  summary: |
    다섯 쌍의 실생활 변량(자동차 수와 석유 소비량, IQ와 발길이 등) 중 상관관계가 없는 것 고르기.
  category: "두 변량의 인과·경향 판단 → 상관관계 유무 분류"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 변량 사이 상관관계의 유무 판단(실생활 예)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    한쪽이 늘 때 다른 쪽이 따라 늘거나 주는 경향이 있는지만 물으므로 선택지를 순서대로 훑으면 끝난다.
    서로 무관한 한 쌍만 남기는 소거 한 단계.
    통찰 0 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "각 변량 쌍의 증감 경향 확인 → 경향이 없는 쌍 선택"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/139-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 개념 문항. 선택지의 변량 쌍만 교체 가능하며, 무관한 쌍은 하나만 두어야 함."
    creative: "(1) '음의 상관관계인 것'을 고르게 하기(★1 유지) (2) 각 쌍을 양·음·없음으로 분류하게 하기(★2) (3) 주어진 산점도 모양과 변량 쌍을 짝짓게 하면 139-08 결합(★2)."
```

```yaml
- id: GN-M32-139-10
  page: 139
  vendor_label: "중단원 마무리하기 STEP 1 기본 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP 1"
  summary: |
    가족 수와 생활비 산점도에서 표시된 다섯 가구 A~E 에 대한 설명 중 옳지 않은 것 고르기.
  category: "점의 좌표 비교 + 추세선 위·아래 위치 → 선택지 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'가족 수에 비하여 생활비가 많다/적다'를 점이 전체 추세선의 위쪽인지 아래쪽인지로 옮겨 판단"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "산점도의 개별 점 위치로 두 변량 관계 해석(추세선 위·아래)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    '많다·적다'를 단순히 y좌표 크기로 읽으면 틀리고, '가족 수에 비하여'는 추세선 기준 상대 위치로 옮겨야 한다(I-RT d1).
    나머지 선택지는 x좌표·y좌표 대소 비교와 전체 경향 판정이라 가볍다.
    통찰 1개 d1 · M_total 5 → STEP 1 ★2 유지.
  tier: star_2
  mechanism_primary: "전체 경향선 상정 → 각 점의 좌표 대소와 선 기준 상대 위치 비교 → 틀린 진술 적발"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: "crop:fig-139-10.png"
  latex: latex-bank/gn-m32/items/139-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다섯 점 A~E 의 좌표를 바꿀 수 있음. 제약: 그림 라벨(A~E)은 고정하고, 추세선 위쪽·아래쪽에 각각 최소 한 점씩 두어 '비하여 많다/적다'가 판별되게 할 것. 좌표를 바꾸면 모든 선택지 진위를 다시 매겨야 함."
    creative: "(1) '가족 수에 비하여 생활비가 가장 많이 드는 가구'만 묻는 단답형(★2 유지) (2) 점 하나를 추가하고 그 가구의 위치를 설명하게 하는 서술형(★3) (3) 잘못 찍힌 점을 고쳐 상관관계를 다시 판정하게 하면 140-14 골조(★3)."
```

### 중단원 마무리하기 STEP 2 발전 문제

```yaml
- id: GN-M32-140-11
  page: 140
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 2"
  summary: |
    같은 반 학생들의 키를 나타낸 히스토그램과 상자그림을 함께 보고 보기 ㄱ~ㄹ(전체 학생 수·최솟값·특정 키 이상 인원·두 구간 인원 비교) 중 옳은 것 모두 고르기.
  category: "히스토그램 도수 ↔ 상자그림 5수 요약 대응 → 보기 판정"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "같은 자료의 두 표현(계급별 도수 ↔ 최솟값·사분위수)을 서로 옮겨 놓고, 한쪽에만 있는 정보로 다른 쪽 진술을 판정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "히스토그램과 상자그림을 함께 읽어 보기 판정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    학생 수와 계급별 인원은 히스토그램에만, 최솟값·사분위수는 상자그림에만 있어 보기마다 어느 그림을 봐야 하는지 고르는 것이 골조다(I-RT d2).
    계급 경계와 '이상·이하'가 겹쳐 T-경계·T-범위 두 함정이 걸리고(Mₜ=2) 도수 누적 계산이 붙어 Mₖ=2.
    통찰 1개 d2 · M_total 7 → STEP 2 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "히스토그램에서 전체·계급별 도수 → 상자그림에서 최솟값·사분위수 → 보기별로 필요한 쪽만 읽어 판정"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "ㄱ, ㄷ"
  answer_source: "답지"
  figure: "crop:fig-140-11.png"
  latex: latex-bank/gn-m32/items/140-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "계급 폭·각 계급의 도수·상자그림 다섯 눈금을 바꿀 수 있음. 제약: 두 그림이 같은 자료에서 나와야 하므로 도수 합 = 전체 학생 수, 상자그림의 사분위수가 히스토그램 누적도수와 모순되지 않게 동시에 조정할 것."
    creative: "(1) 상자그림만 주고 히스토그램을 고르게 하는 역방향(★3 유지) (2) 도수분포표로 바꾸면 읽기가 쉬워져 ★2 (3) 두 반의 히스토그램+상자그림을 주고 비교 서술하게 하면 I-EQV 가 추가되어 ★4."
```

```yaml
- id: GN-M32-140-12
  page: 140
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP 2"
  summary: |
    각 20명인 1반과 2반이 읽은 책의 수를 나타낸 두 상자그림을 보고 옳지 않은 설명 고르기(최댓값·특정 권수 이상 최소 인원·중앙값 비교·분포 비교).
  category: "구간별 25% = 5명 환산 → 인원 하한 추정 → 두 집단 비교"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'제3사분위수가 12권'을 '12권 이상인 학생이 최소 5명'이라는 인원수 조건으로 동치 변환(구간당 25% = 5명)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 집단 상자그림 비교(중앙값·분포·구간별 인원 하한)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    상자그림은 개별 변량을 주지 않으므로 '몇 명'은 정확히 셀 수 없고 각 구간이 20명의 25% = 5명이라는 환산으로 하한만 말할 수 있다(I-EQV d2).
    '최소 몇 명'과 '이하인 학생이 더 많다'가 이 한계를 시험하는 자리라 T-경계·T-범위 두 함정이 걸린다.
    통찰 1개 d2 · M_total 6 → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "두 상자그림의 다섯 값 읽기 → 구간당 5명 환산으로 인원 하한 → 중앙값·분포로 집단 비교"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-140-12.png"
  latex: latex-bank/gn-m32/items/140-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "학생 수(20명)와 두 반의 다섯 눈금을 바꿀 수 있음. 제약: 학생 수는 4의 배수여야 구간당 인원이 정수가 되고, 눈금을 바꾸면 '최소 몇 명'·'어느 반이 많다' 선택지를 모두 다시 판정해야 함."
    creative: "(1) '2반이 1반보다 대체로 많이 읽었다'의 근거를 서술하게 하기(143-u4 골조 · ★3) (2) 세 반으로 늘려 특정 점수 이상 비율을 비교하게 하면 140-13 골조(★3) (3) 한 반의 상자그림을 빈칸으로 두고 조건에서 복원하게 하면 ★4."
```

```yaml
- id: GN-M32-140-13
  page: 140
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 2"
  summary: |
    A·B·C 세 반의 수학 성적 상자그림에서 70점 이상인 학생의 비율이 가장 높은 반 구하기.
  category: "70점이 각 반에서 어느 사분위수 위치인지 → 비율 환산 → 비교"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세로선 70점이 각 상자그림의 어느 경계(Q1·중앙값·Q3)와 만나는지를 '그 반의 상위 몇 %'라는 비율로 옮겨 읽기"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "상자그림에서 특정 값 이상인 자료의 비율 비교"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    반마다 학생 수를 모르므로 인원이 아니라 비율로만 비교할 수 있고, 70점 세로선이 Q1 에 걸리는 반은 75%, 중앙값이면 50%, Q3 면 25% 로 읽힌다(I-RT d2).
    세 반을 한 기준선으로 동시에 자르는 것이 골조이고 나머지 계산은 없다.
    통찰 1개 d2 · M_total 5 → STEP 2 ★3 유지(통찰이 있어 −1 하지 않음).
  tier: star_3
  mechanism_primary: "70점 세로선 긋기 → 각 반에서 선이 걸리는 사분위수 경계 확인 → 25%·50%·75% 환산 → 최대 반 선택"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\pt{B}$ 반'
  answer_source: "답지"
  figure: "crop:fig-140-13.png"
  latex: latex-bank/gn-m32/items/140-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 점수(70점)와 세 반의 다섯 눈금을 바꿀 수 있음. 제약: 기준선이 어느 반에서든 사분위수 경계와 정확히 만나야 비율이 25%·50%·75% 로 확정되고, 경계 사이에 걸리면 '알 수 없음'이 되어 문제가 성립하지 않음."
    creative: "(1) 비율이 가장 낮은 반을 묻기(★3 유지) (2) 각 반 학생 수를 함께 주고 인원수를 묻기(Mₖ 상승 · ★3) (3) 기준선을 경계와 어긋나게 두고 '판단할 수 있는가'를 묻는 서술형으로 바꾸면 I-EQV 추가 · ★4."
```

```yaml
- id: GN-M32-140-14
  page: 140
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 2"
  summary: |
    휴대 전화 사용 시간과 수면 시간 산점도에서 A·B·C 세 명의 사용 시간이 잘못 표시되어 있을 때, 표의 올바른 값으로 고친 뒤 15명의 두 변량 사이 상관관계 말하기.
  category: "표의 수치로 세 점 재배치 → 전체 경향 재판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "표에 적힌 세 명의 사용 시간을 산점도 위의 점 위치로 옮겨 찍고, 고쳐진 전체 배치에서 경향을 다시 읽기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "산점도의 잘못 표시된 점을 고쳐 상관관계 다시 판정"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 점은 수평으로만 옮겨지고 수면 시간(y)은 그대로이므로, 옮긴 뒤 전체가 오른쪽 아래 방향으로 정리되는지 보는 것이 전부다(I-RT d1).
    고치기 전 배치에 현혹되지 않고 고친 배치로만 판단해야 한다는 점이 이 문항의 전부이고 계산은 없다.
    [분류 이슈] 발전 문제 구역(★3 출발)이나 실제 골조는 점 옮기기 한 단계라 체감은 ★2 쪽. 라벨은 ★3 으로 두고 기록만 함.
  tier: star_3
  mechanism_primary: "표의 사용 시간으로 A·B·C 를 수평 이동 → 15개 점의 전체 방향 확인 → 음의 상관관계"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "음의 상관관계"
  answer_source: "답지"
  figure: "crop:fig-140-14.png · crop:fig-140-14-2.png"
  latex: latex-bank/gn-m32/items/140-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "잘못 표시된 학생 수(3명)와 표의 올바른 사용 시간을 바꿀 수 있음. 제약: 고친 뒤의 전체 배치가 한 가지 상관관계로 뚜렷하게 읽혀야 하고(애매하면 답이 갈림), 고치기 전 배치는 다른 답이 나오도록 두어야 문제의 취지가 살아남."
    creative: "(1) 고친 뒤 '수면 시간이 6시간 이상인 학생 수'를 함께 묻기(★3 유지) (2) 잘못 표시된 점을 학생이 찾아내게 하면 I-VF 추가 · ★4 (3) 상관관계 대신 두 변량의 차·합 조건 인원을 묻게 하면 141-19 골조(★4)."
```

```yaml
- id: GN-M32-141-15
  page: 141
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 2"
  summary: |
    농구부 18명의 2점슛·3점슛 개수 산점도에서 두 종류 중 적어도 한 종류를 30개 이상 넣은 학생 수 구하기.
  category: "'적어도 하나' → 두 반평면의 합집합(또는 여사건) → 인원 세기"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-SC
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x≥30 과 y≥30 을 각각 세고 겹치는 학생을 빼는 직접 카운트와, 둘 다 30 미만인 학생을 세어 18에서 빼는 여사건 중 빠른 갈래를 고르는 전략 선택"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "산점도에서 '적어도 하나' 조건 영역 세기(합집합·여사건)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    가로선 y=30 과 세로선 x=30 을 그으면 평면이 네 칸으로 갈리는데, 세 칸을 직접 세는 갈래와 왼쪽 아래 한 칸만 세어 전체에서 빼는 갈래가 갈린다(I-SC d2 · 여사건이 현저히 빠름).
    두 영역이 겹치는 학생을 두 번 세는 것과 경계선 위의 '30개 정확히'를 빠뜨리는 것이 함정이라 Mₜ=2.
    통찰 1개 d2 · M_total 6 → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "x=30·y=30 두 기준선 긋기 → 둘 다 30 미만인 칸의 점 세기 → 18에서 빼기"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "9명"
  answer_source: "답지"
  figure: "crop:fig-141-15.png"
  latex: latex-bank/gn-m32/items/141-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "학생 수·기준값(30개)·점 좌표를 바꿀 수 있음. 제약: 기준선이 격자 눈금 위에 오게 해 '이상'의 포함 여부를 분명히 하고, 왼쪽 아래 칸의 점 수가 적도록 배치해야 여사건 갈래의 이점이 살아남."
    creative: "(1) '두 종류 모두 30개 이상'으로 바꾸면 교집합 한 칸이라 ★2 로 내려감 (2) '적어도 한 종류가 30개 이상이고 합이 60개 이상'으로 조건을 겹치면 ★4 (3) 해당 학생들의 총 득점 평균을 묻게 하면 Mₖ 상승 · ★4."
```

```yaml
- id: GN-M32-141-16
  page: 141
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 2"
  summary: |
    학생 15명의 중간고사·기말고사 평균 산점도에서 ㈎ 중간고사 70점 이하 ㈏ 기말이 중간보다 20점 이상 향상 두 조건을 모두 만족하는 학생 수 구하기.
  category: "두 조건 → 세로선 x=70 과 직선 y=x+20 → 교집합 영역 세기"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'기말이 중간보다 20점 이상 향상'을 대각선을 위로 20 평행이동한 직선 y=x+20 의 위쪽 영역으로 옮겨 세기"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "산점도에서 두 조건(기준선·향상폭)을 동시에 만족하는 점 세기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㈎는 세로선 하나로 끝나지만 ㈏는 대각선을 평행이동해야 나오는 경계라, 두 경계가 잘라 내는 왼쪽 위 영역의 점만 남기는 것이 골조다(I-RT d2).
    '이하'와 '이상'이 섞여 경계 위의 점 포함 여부(T-경계)와 두 조건을 모두 만족해야 한다는 범위(T-범위)가 함정이다.
    통찰 1개 d2 · M_total 6 → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "x=70 세로선 + y=x+20 대각선 긋기 → 두 조건이 겹치는 영역의 점 세기"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "4명"
  answer_source: "답지"
  figure: "crop:fig-141-16.png"
  latex: latex-bank/gn-m32/items/141-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 점수(70점)·향상폭(20점)·학생 수·점 좌표를 바꿀 수 있음. 제약: 향상폭을 바꾸면 평행이동 직선이 지나는 격자점이 달라지므로 경계 위의 점을 세는지 여부를 답과 함께 다시 확정할 것."
    creative: "(1) 조건 ㈎ 를 빼면 직선 하나만 남아 ★2 (2) '가장 많이 향상된 학생의 향상 점수'를 묻기(평행이동 극단 · ★3) (3) 조건을 만족하는 학생의 기말 평균까지 구하게 하면 Mₖ 상승 · ★4(143-u5 결합)."
```

```yaml
- id: GN-M32-141-17
  page: 141
  vendor_label: "중단원 마무리하기 STEP 2 발전 문제"
  vendor_level: "-"
  vendor_tags: ["꼭나와"]
  category_type: "중단원 마무리 STEP 2"
  summary: |
    다이어트 참가자 24명의 9월·10월 감량 체중 산점도에서 보기 ㄱ~ㄷ(두 달 최다 감량자의 10월 감량·두 달 감량 차가 1kg 이하인 인원·두 달 감량이 5kg 이하인 비율) 중 옳은 것 모두 고르기.
  category: "합·차 조건을 직선·띠 영역으로 → 인원 세기 → 비율 환산"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'두 달 합'을 직선 x+y=k 의 평행이동으로(최다 감량자 = 가장 바깥 점), '두 달 차'를 y=x±1 사이의 띠로 옮겨 점을 세기"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "산점도에서 합·차 조건 영역 세기와 비율"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 보기가 각각 다른 선을 요구한다 — ㄱ은 x+y=k 를 밖으로 밀어 마지막에 닿는 점, ㄴ은 대각선 양옆 폭 1 의 띠, ㄷ은 x+y=5 의 아래쪽(합 5 이하)이다(합·차의 직선 전환이 주 통찰 · I-RT d2).
    ㄱ은 '가장 많이 감량한 참가자'를 찾은 뒤 그 점의 y좌표만 답해야 하는 되읽기가 한 번 더 있고, 24명 중 인원을 비율로 바꾸는 계산이 붙어 Mₖ=2.
    통찰 1개 d2 · M_total 7 → STEP 2 ★3 유지.
  tier: star_3
  mechanism_primary: "x+y=k 평행이동으로 합 최대 점 찾기 → y=x±1 띠 안의 점 세기 → x+y≤5 영역 인원을 24로 나눠 비율"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "ㄴ, ㄷ"
  answer_source: "답지"
  figure: "crop:fig-141-17.png"
  latex: latex-bank/gn-m32/items/141-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "참가자 수·기준값(1kg, 5kg)·점 좌표를 바꿀 수 있음. 제약: 비율 보기가 깔끔한 %가 되도록 참가자 수를 4의 배수로 두고, 띠 경계와 x+y=5 위의 점은 '이하'에 포함되므로 개수를 답과 함께 다시 셀 것."
    creative: "(1) ㄱ만 떼어 '최다 감량자의 9월 감량'을 묻는 단답형(★2) (2) 차 조건을 '2kg 이상'으로 뒤집으면 띠 바깥이 되어 ★3 유지(141-19 골조) (3) 합 상위 25% 의 평균 감량을 묻게 하면 ★4(141-20)."
```

### 중단원 마무리하기 STEP 3 실력 UP

```yaml
- id: GN-M32-141-18
  page: 141
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 3"
  summary: |
    11개 변량 중 두 개가 자연수 a, b(a<b)인 자료에서 평균이 7이고 제1사분위수가 5일 때 ab 의 값.
  category: "평균으로 a+b 확정 → 자연수 순서쌍 후보 나열 → 제1사분위수 조건으로 기각"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "제1사분위수가 5가 되려면 정렬했을 때 하위 절반의 가운데 자리에 무엇이 와야 하는지를 먼저 분석해야 a, b 를 좁힐 수 있는 역방향 사고"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "a+b 를 만족하는 자연수 순서쌍 후보를 각각 자료에 넣어 다시 정렬하고, 제1사분위수가 5가 아닌 후보를 기각해야 답이 하나로 남음"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "평균·사분위수 조건으로 자료 속 미지수 정하기(후보 검증형)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    평균 조건은 a+b 를 한 줄로 주지만 그것만으로는 순서쌍이 여럿이고, 제1사분위수 조건이 진짜 거름망이다.
    a, b 가 어디에 끼어들지에 따라 정렬 순서가 달라지므로 후보마다 다시 정렬해 하위 절반의 가운데 값을 확인하고 어긋나는 것을 버려야 한다(I-BW d2 + I-VF d2).
    자연수·a<b 제약(T-범위)과 n=11 일 때 제1사분위수 자리(T-경계)가 함정이라 Mₜ=2, 미지수 둘이라 Mₐ=2 · M_total 8.
    통찰 2개이나 ★5 게이트(통찰 3개 이상 + SC/VF/SYM/XU)는 미충족 → 실력 UP 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: "평균 7 → a+b 확정 → a<b 자연수 순서쌍 나열 → 각 후보를 정렬해 제1사분위수 5 검증 → 남은 쌍의 곱"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "$30$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/141-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평균값·제1사분위수 값·고정 변량 9개를 바꿀 수 있음. 제약: 평균 × 개수가 정수여야 하고, 사분위수 조건을 만족하는 순서쌍이 정확히 하나만 남도록 고정 변량의 분포를 조정할 것(둘 이상 남으면 답이 갈림). 변량 개수를 바꾸면 사분위수 자리가 통째로 바뀜."
    creative: "(1) 제1사분위수 대신 제3사분위수를 조건으로 주기(★4 유지 · 상위 절반 검증) (2) a<b 제약을 빼면 후보가 두 배로 늘어 기각 단계가 무거워짐(★4~5) (3) 조건을 '사분위수 범위가 6'으로 바꾸면 Q1·Q3 를 동시에 다뤄야 해 ★5 후보 (4) a+b 만 묻는 형태로 낮추면 평균 한 줄이라 ★2."
```

```yaml
- id: GN-M32-141-19
  page: 141
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 3"
  summary: |
    학생 20명의 가창·악기 실기 점수 산점도에서 두 점수의 차가 2점 이상이고 두 점수의 평균이 8점 이상인 학생은 전체의 몇 %인지 구하기.
  category: "차 조건 = 띠 바깥 · 평균 조건 = x+y=16 위쪽 → 교집합 세기 → 비율"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'차가 2 이상'을 y=x±2 두 직선의 바깥 영역으로, '평균이 8 이상'을 x+y=16 의 위쪽으로 옮겨 서로 다른 기울기의 두 경계가 겹치는 부분만 남기기"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "산점도에서 차·평균 두 조건을 동시에 만족하는 점의 비율"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    '평균 8점 이상'을 합 16점 이상으로 먼저 바꿔야 직선 하나로 그릴 수 있고, '차 2점 이상'은 대각선 양옆 띠의 바깥이라 기울기가 반대인 두 경계가 동시에 걸린다(I-RT d2).
    두 조건을 따로 세고 겹치는 학생만 남긴 뒤 20으로 나누는 비율 계산이 붙는다.
    [분류 이슈] 실력 UP 구역(★4 출발)이나 통찰 1개·M_total 7 로 141-17(★3)과 골조 부담이 비슷해 ★3 도 가능. 라벨은 구역 신호대로 ★4 로 두고 기록만 함.
  tier: star_4
  mechanism_primary: "평균 8 이상 → x+y≥16 직선 → y=x±2 띠 바깥 → 두 영역 교집합 점 세기 → 20으로 나눠 %"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$15\,\%$'
  answer_source: "답지"
  figure: "crop:fig-141-19.png"
  latex: latex-bank/gn-m32/items/141-19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "학생 수·차 기준(2점)·평균 기준(8점)·점 좌표를 바꿀 수 있음. 제약: 평균 기준 × 2 가 정수여야 합 직선이 격자 위에 놓이고, 두 경계 위의 점은 '이상'이라 포함되므로 개수를 답과 함께 다시 셀 것. 비율이 깔끔하도록 학생 수는 20·25 같은 값 유지."
    creative: "(1) 차 조건을 '2점 이하'로 뒤집으면 띠 안쪽이라 세기가 쉬워져 ★3 (2) 평균 대신 합의 상위 몇 % 로 주면 경계선을 학생이 찾아야 해 ★4 유지(143-u6) (3) 해당 학생들의 가창 점수 평균까지 묻게 하면 Mₖ 상승 · ★4~5."
```

```yaml
- id: GN-M32-141-20
  page: 141
  vendor_label: "중단원 마무리하기 STEP 3 실력 UP"
  vendor_level: "-"
  vendor_tags: []
  category_type: "중단원 마무리 STEP 3"
  summary: |
    학생 25명의 국어·영어 성적 산점도에서 두 과목 성적의 합이 하위 20% 이내인 학생이 재시험 대상일 때, 재시험 대상자들의 영어 성적 평균 구하기.
  category: "하위 20% → 인원 환산 → x+y=k 평행이동으로 경계 확정 → 해당 점들의 y좌표 평균"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'하위 20% 이내'를 '25명 중 합이 작은 쪽 5명'이라는 인원수 조건으로 동치 변환"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "합 x+y 를 기울기 −1 인 직선으로 보고 원점 쪽에서 밀어 올려, 점이 정확히 5개 들어오는 자리에서 경계를 끊기"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "산점도에서 두 값의 합 상·하위 몇 % 영역 확정과 그 평균"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    '하위 20%'는 그림에 선으로 주어지지 않으므로 학생이 먼저 인원(5명)으로 바꾼 뒤, x+y=k 를 평행이동해 다섯 번째 점까지만 걸리는 자리를 스스로 찾아야 한다(I-EQV d1 + I-RT d2).
    경계선 위에 점이 여러 개면 인원이 5를 넘는지 확인해야 하고(T-경계), 답은 합이 아니라 그 점들의 영어 성적(y좌표) 평균이라는 되읽기가 한 번 더 있다(T-범위).
    통찰 2개로 +1 후보이나 ★5 게이트(통찰 3개 이상)는 미충족 → 실력 UP 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: "25×0.2=5명 → x+y=k 를 밀어 올려 5명이 되는 경계 확정 → 그 5점의 y좌표 평균"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "64점"
  answer_source: "답지"
  figure: "crop:fig-141-20.png"
  latex: latex-bank/gn-m32/items/141-20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "학생 수·비율(20%)·점 좌표를 바꿀 수 있음. 제약: 학생 수 × 비율이 정수여야 경계가 확정되고, 경계 근처에서 합이 같은 점이 여러 개면 대상 인원이 애매해지므로 다섯 번째와 여섯 번째 점의 합이 서로 다르게 배치할 것. 평균이 정수로 떨어지도록 y좌표 합을 맞출 것."
    creative: "(1) 상위 20% 로 뒤집고 최소 합을 묻기(143-u6 골조 · ★4 유지) (2) 영어 평균 대신 두 과목 합의 평균을 묻기(되읽기 한 단계 감소 · ★3) (3) 재시험 기준을 '합이 120점 이하'로 직접 주면 경계 찾기가 사라져 ★3 (4) 두 반의 산점도를 주고 재시험 비율을 비교하게 하면 ★5 후보."
```

### 서술형 대비 문제

```yaml
- id: GN-M32-142-e1
  page: 142
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    10개 변량으로 된 자료를 나타낸 상자그림에서 표시되지 않은 두 상수 a, b 의 값 구하기. [6점]
  category: "자료 정렬 → 사분위수 계산 → 상자그림의 빈 눈금과 대응"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "자료로부터 상자그림의 사분위수 값 채우기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    변량 10개를 정렬해 중앙값(5·6번째 평균)과 제3사분위수(상위 5개의 가운데)를 구한 뒤 그림의 빈 자리에 그대로 대응시키면 된다.
    a, b 가 각각 어느 사분위수인지는 상자그림의 위치가 알려 주므로 분기가 없다.
    통찰 0 · M_total 5 → 서술형 출발점 ★3 에서 −1 하여 ★2.
  tier: star_2
  mechanism_primary: "10개 변량 정렬 → 중앙값·제3사분위수 계산 → 상자그림의 가운데 선·상자 오른쪽 끝에 대응"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$a=17$, $b=20$"
  answer_source: "본문 답"
  figure: "crop:fig-142-e1.png"
  latex: latex-bank/gn-m32/items/142-e1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "10개 변량 값을 바꿀 수 있음. 제약: 개수가 짝수라 중앙값·사분위수가 이웃 두 수의 평균이 되므로 정수로 떨어지도록 배치하고, 상자그림의 나머지 눈금(최솟값·Q1·최댓값)도 함께 다시 그릴 것."
    creative: "(1) 미지 값을 최솟값·제1사분위수로 옮기기(★2 유지) (2) 상자그림만 주고 원자료의 일부를 복원하게 하면 불가능함을 설명하는 서술형(I-EQV 추가 · ★3) (3) 사분위수 범위까지 구하게 하기(★2)."
```

```yaml
- id: GN-M32-142-e2
  page: 142
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    영화 동호회 회원들의 상반기·하반기 관람 횟수 산점도에서 두 횟수의 차가 3회인 회원은 전체의 몇 %인지 구하기(중복되는 점 없음). [6점]
  category: "차가 3 → y=x±3 두 직선 위의 점 세기 → 비율"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'차가 3회'를 대각선을 위아래로 3만큼 평행이동한 두 직선 위의 점으로 옮겨 세기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "산점도에서 두 값의 차가 일정한 점 세기와 비율"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    차가 '이상'이 아니라 '정확히 3'이므로 띠가 아니라 두 직선 위의 점만 세야 하고, 상반기가 많은 쪽과 하반기가 많은 쪽 두 줄을 모두 챙겨야 한다(I-RT d1).
    전체 회원 수는 점의 총개수로 직접 세어 비율을 만든다(중복 점 없음이 그 전제).
    통찰 1개 · M_total 5 → 서술형 출발점 ★3 유지(통찰이 있어 −1 하지 않음).
  tier: star_3
  mechanism_primary: "y=x+3·y=x−3 두 직선 긋기 → 선 위의 점 세기 → 전체 점 수로 나눠 %"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$20\,\%$'
  answer_source: "본문 답"
  figure: "crop:fig-142-e2.png"
  latex: latex-bank/gn-m32/items/142-e2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "차 기준(3회)·회원 수·점 좌표를 바꿀 수 있음. 제약: 비율이 깔끔한 %가 되도록 전체 점 수를 20·25 같은 값으로 두고, 두 직선 각각에 점이 놓이도록 배치할 것(한쪽만 있으면 '차'의 양방향을 놓쳐도 맞아 버림)."
    creative: "(1) 차가 '3회 이상'으로 바꾸면 띠 바깥이 되어 세는 양이 늘어 ★3 유지 (2) 합이 일정한 경우로 바꾸면 기울기 −1 직선(142-u2 골조 · ★3) (3) 차가 가장 큰 회원의 두 횟수를 묻기(평행이동 극단 · ★3)."
```

```yaml
- id: GN-M32-142-u1
  page: 142
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    16개 변량으로 된 자료를 나타낸 상자그림에서 표시되지 않은 두 상수 a, b 의 값 구하기. [6점]
  category: "자료 정렬 → 제1·제3사분위수 계산 → 상자그림 양 끝에 대응"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "자료로부터 상자그림의 사분위수 값 채우기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    142-e1 과 같은 골조이지만 변량이 16개라 정렬 자체가 무겁고, 하위 8개·상위 8개의 가운데를 각각 이웃 두 수의 평균으로 구해야 한다(Mₖ=2).
    중복값(40 이 세 번, 48·37·30 이 두 번씩)이 많아 정렬에서 빠뜨리기 쉽다.
    통찰 0 이지만 M_total 6 이라 −1 하지 않고 서술형 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "16개 변량 정렬 → Q1 = 하위 8개의 4·5번째 평균 → Q3 = 상위 8개의 가운데 평균 → 상자 양 끝에 대응"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$a=37$, $b=45$"
  answer_source: "답지"
  figure: "crop:fig-142-u1.png"
  latex: latex-bank/gn-m32/items/142-u1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "16개 변량 값을 바꿀 수 있음. 제약: 개수가 4의 배수라 세 사분위수가 모두 이웃 두 수의 평균이 되므로 정수로 떨어지게 짝을 맞추고, 중복값을 유지해 정렬 부담을 남길 것."
    creative: "(1) 미지 값을 중앙값·최댓값으로 옮기기(★3 유지) (2) 변량 개수를 15개로 바꾸면 사분위수가 낱개 값이 되어 계산이 가벼워져 ★2 (3) 구한 사분위수로 사분위수 범위와 상자 길이의 뜻을 설명하게 하면 I-RT 추가 · ★3."
```

```yaml
- id: GN-M32-142-u2
  page: 142
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    1학기·2학기 서점 방문 횟수 산점도에서 두 횟수의 합이 15회인 학생은 전체의 몇 %인지 구하기(중복되는 점 없음). [6점]
  category: "합이 15 → 직선 x+y=15 위의 점 세기 → 비율"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'두 횟수의 합이 15'를 기울기 −1 인 직선 x+y=15 위의 점으로 옮겨 세기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "산점도에서 두 값의 합이 일정한 점 세기와 비율"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    합 조건은 오른쪽 아래로 내려가는 직선 한 줄이고, 그 위에 놓인 점만 세면 된다(I-RT d1).
    전체 학생 수는 점의 총개수로 세므로 '중복되는 점은 없다'는 단서가 비율 계산의 전제다.
    통찰 1개 · M_total 5 → 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: "x+y=15 직선 긋기 → 선 위의 점 세기 → 전체 점 수로 나눠 %"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$25\,\%$'
  answer_source: "답지"
  figure: "crop:fig-142-u2.png"
  latex: latex-bank/gn-m32/items/142-u2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합 기준(15회)·학생 수·점 좌표를 바꿀 수 있음. 제약: 기준 직선이 격자점을 지나도록 정수로 두고, 비율이 깔끔한 %가 되게 전체 점 수를 20·25 로 유지할 것."
    creative: "(1) 합이 '15회 이상'으로 바꾸면 반평면이 되어 세는 양이 늘어 ★3 유지 (2) 차가 일정한 경우(142-e2 골조)와 합 조건을 함께 걸면 ★4 (3) 합이 가장 큰 학생의 두 횟수를 묻기(평행이동 극단 · ★3)."
```

```yaml
- id: GN-M32-143-u3
  page: 143
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    크기순으로 나열된 14개 변량(중간에 x+5, 2x+3, 3x−1 포함)의 제3사분위수가 26일 때 제1사분위수와 중앙값 구하기. [6점]
  category: "제3사분위수 자리 확정 → x 결정 → Q1·중앙값 읽기"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'제3사분위수가 26'을 'n=14 에서 상위 7개의 가운데, 즉 11번째 항이 26'이라는 자리 조건으로 동치 변환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "사분위수 조건으로 미지수를 정하고 나머지 사분위수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    14개는 상·하위 7개씩으로 갈리므로 제3사분위수는 11번째 낱개 값이고, 그 자리에 놓인 미지수 항에서 x 가 나온다(I-EQV d1).
    x 를 되돌려 나머지 두 미지수 항까지 채운 뒤 제1사분위수는 4번째 낱개 값, 중앙값은 7·8번째의 평균으로 자리가 서로 다르다는 것이 함정이다(T-경계·T-범위).
    통찰 1개 · 미지수 포함 Mₐ=2 · M_total 8 → 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: "11번째 항 3x−1 = 26 → x 확정 → 세 미지수 항 채우기 → Q1 = 4번째 · 중앙값 = 7·8번째 평균"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '제1사분위수: 14, 중앙값: 22'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/143-u3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "제3사분위수 값(26)·미지수 항의 꼴·고정 변량을 바꿀 수 있음. 제약: 구한 x 를 넣었을 때 세 미지수 항이 모두 제자리의 오름차순을 유지해야 하고(x+5 는 14와 19 사이, 2x+3 은 20과 23 사이), 변량 개수를 바꾸면 사분위수 자리가 통째로 바뀜."
    creative: "(1) 조건을 제1사분위수로 주고 제3사분위수를 묻는 대칭형(★3 유지) (2) 사분위수 범위를 조건으로 주면 두 자리를 동시에 다뤄야 해 ★4 (3) 구한 자료로 상자그림을 그리게 하면 142-e1 과 결합(★3) (4) 미지수 항을 하나로 줄이면 138-02 수준(★2)."
```

```yaml
- id: GN-M32-143-u4
  page: 143
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    A·B 두 회사 직원 나이의 상자그림에 대해 ⑴ 두 회사의 중앙값을 각각 구하고 ⑵ 직원들이 대체로 더 젊은 회사를 고른 뒤 그 이유를 설명하기. [8점]
  category: "상자그림의 중앙값 읽기 → '대체로 젊다'를 분포 위치 비교로 환원해 서술"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'대체로 더 젊다'라는 말을 중앙값·사분위수 위치가 전체적으로 더 왼쪽이라는 비교 가능한 조건으로 바꿔 근거를 대기"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 집단 상자그림의 중앙값 비교와 분포 해석 서술"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ⑴은 상자 안의 가운데 선을 읽는 한 단계지만, ⑵는 '대체로'라는 말을 평균이 아니라 중앙값·사분위수의 상대 위치로 바꿔 놓아야 근거가 된다(I-EQV d2).
    상자그림은 개별 나이를 주지 않으므로 '평균이 낮다'는 서술은 쓸 수 없다는 점이 채점 포인트다.
    통찰 1개 d2 · M_total 5 → 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: "각 상자의 가운데 선 → 중앙값 → 두 상자그림의 사분위수 위치 비교 → 더 왼쪽인 회사를 근거와 함께 제시"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\pt{A}$ 회사: 36세, $\pt{B}$ 회사: 32세 ⑵ $\pt{B}$ 회사, 풀이 참조'
  answer_source: "계산(답지 「풀이 참조」)"
  figure: "crop:fig-143-u4.png"
  latex: latex-bank/gn-m32/items/143-u4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 회사의 다섯 눈금을 바꿀 수 있음. 제약: 중앙값이 눈금 위에 오게 하고, 한 회사가 중앙값·Q1·Q3 모두에서 일관되게 낮도록 배치할 것(엇갈리면 ⑵의 답이 갈려 서술형으로 성립하지 않음)."
    creative: "(1) 중앙값은 낮지만 Q3 가 높은 엇갈린 배치로 바꿔 '단정할 수 없음'을 설명하게 하면 I-MI 추가 · ★4 (2) 나이가 40세 이상인 직원 비율을 비교하게 하면 140-13 골조(★3) (3) 직원 수를 함께 주고 인원수를 묻는 소문항을 추가하면 ★3 유지."
```

```yaml
- id: GN-M32-143-u5
  page: 143
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    신생아 20명의 키와 머리둘레 산점도에서 키가 50 cm 이하인 신생아 수를 a, 키가 51 cm 인 신생아의 머리둘레 평균을 b 라 할 때 a+b 의 값. [7점]
  category: "세로선 기준 영역 세기 + 특정 세로줄의 y좌표 평균 → 두 값 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'키가 51 cm 인 신생아의 머리둘레 평균'을 x=51 세로줄 위의 점만 모아 y좌표를 평균 내는 것으로 옮겨 읽기"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "산점도에서 조건별 인원 세기와 특정 세로줄의 평균"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a 는 x≤50 왼쪽 영역의 점 수, b 는 x=51 세로줄 위 점들의 y좌표 평균으로 서로 다른 읽기를 한 문항에서 요구한다(I-RT d1).
    '이하'에 50 이 포함되는지(T-경계)와 두 값의 단위가 달라도 그대로 더한다는 점이 걸림돌이고, 평균 계산이 붙어 Mₖ=2 · 미지수 두 개로 Mₐ=2.
    통찰 1개 · M_total 7 → 서술형 ★3 유지.
  tier: star_3
  mechanism_primary: "x=50 기준 왼쪽 점 세기 → a · x=51 세로줄 점들의 y좌표 평균 → b · a+b"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$47$"
  answer_source: "답지"
  figure: "crop:fig-143-u5.png"
  latex: latex-bank/gn-m32/items/143-u5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 키(50 cm, 51 cm)·신생아 수·점 좌표를 바꿀 수 있음. 제약: 평균이 정수로 떨어지도록 해당 세로줄 점들의 머리둘레 합을 개수의 배수로 맞추고, 그 세로줄에 점이 최소 3개는 있어야 평균 계산이 의미 있음."
    creative: "(1) b 를 '머리둘레가 가장 큰 신생아의 키'로 바꾸면 읽기 한 단계 감소 · ★2 (2) a 를 '키 50 cm 이하이고 머리둘레 33 cm 이상'으로 겹치면 교집합 영역이라 ★4 (3) a+b 대신 ab 나 b−a 를 묻기(★3 유지) (4) 두 변량의 상관관계 서술을 소문항으로 추가하면 ★3."
```

```yaml
- id: GN-M32-143-u6
  page: 143
  vendor_label: "서술형 대비 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형 대비"
  summary: |
    경시대회 참가 학생 20명의 수학·과학 성적 산점도에서 두 성적의 합이 상위 30% 이내인 학생에게 상장을 줄 때, 상장을 받은 학생의 두 성적의 합은 최소 몇 점인지 구하기. [7점]
  category: "상위 30% → 인원 환산 → x+y=k 평행이동으로 경계 확정 → 경계값이 답"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'합이 상위 30% 이내'를 '20명 중 합이 큰 쪽 6명'이라는 인원수 조건으로 동치 변환"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "합 x+y 를 기울기 −1 인 직선으로 보고 바깥에서 안쪽으로 내려오며 점이 6개 들어오는 자리에서 멈춰, 그 직선의 합 값을 답으로 읽기"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "산점도에서 두 값의 합 상위 몇 % 경계 확정(최소 합)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    상장 기준선이 그림에 없으므로 학생이 인원(6명)으로 먼저 바꾸고, x+y=k 를 바깥에서 밀어 내리며 여섯 번째 점이 걸리는 자리를 찾아야 한다(I-EQV d1 + I-RT d2).
    답이 '학생 수'나 '평균'이 아니라 그 경계 직선의 합 값이라는 되읽기가 한 번 더 있고, 경계 위에 점이 여럿이면 인원이 6을 넘는지 확인해야 한다(T-경계·T-범위).
    [분류 이슈] 서술형 구역(★3 출발)이나 통찰 2개로 +1 하여 ★4. 141-20 과 같은 골조라 ★4 로 맞췄으나 세는 범위가 좁아 ★3 도 가능 — 기록만 함.
  tier: star_4
  mechanism_primary: "20×0.3=6명 → x+y=k 를 위에서 내려 6명이 되는 경계 확정 → 그 경계의 합 값"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "160점"
  answer_source: "답지"
  figure: "crop:fig-143-u6.png"
  latex: latex-bank/gn-m32/items/143-u6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "학생 수·비율(30%)·점 좌표를 바꿀 수 있음. 제약: 학생 수 × 비율이 정수여야 하고, 여섯 번째와 일곱 번째 점의 합이 서로 달라야 경계가 하나로 확정됨(같으면 상장 인원이 6을 넘어 답이 흔들림)."
    creative: "(1) 하위 몇 % 와 그 평균을 묻는 형태로 뒤집으면 141-20 골조(★4 유지) (2) 상장 기준을 '합이 160점 이상'으로 직접 주면 경계 찾기가 사라져 ★2 (3) 상장 받은 학생의 수학 성적 평균까지 묻게 하면 Mₖ 상승 · ★5 후보 (4) 두 과목 중 한 과목만 상위 30% 인 학생 수를 묻게 하면 I-SC 추가(141-15 골조 · ★4)."
```

## 표본 판정 요약 (28문)

- ★ 분포: ★1 5 · ★2 6 · ★3 13 · ★4 4 · ★5 0 (premium 0)
- 구역별 ★ 중앙: STEP 1 기본(10문) ★1~2 · STEP 2 발전(7문) 전부 ★3 · STEP 3 실력 UP(3문) 전부 ★4 · 서술형 대비(8문) ★2 1 · ★3 6 · ★4 1
- 통찰형 20 · 절차형 8. 절차형은 사분위수 계산·상자그림 정의·상관관계 이름 붙이기 8문(138-01 · 138-02 · 138-03 · 138-04 · 139-08 · 139-09 · 142-e1 · 142-u1)
- 통찰 라벨 23개의 분포: I-RT 15 · I-EQV 5 · I-SC 1 · I-BW 1 · I-VF 1. depth 2 가 14개, depth 1 이 9개, depth 3 은 없음. 통찰 2개인 문항은 141-18 · 141-20 · 143-u6 셋뿐
- type_hint 상위 5(골조 기준 묶음): ⑴ 산점도에서 직선·영역 조건으로 점 세기 11문(139-06 · 139-07 · 141-15 · 141-16 · 141-17 · 141-19 · 141-20 · 142-e2 · 142-u2 · 143-u5 · 143-u6) ⑵ 상자그림 읽기·해석 7문(138-03 · 138-04 · 138-05 · 140-11 · 140-12 · 140-13 · 143-u4) ⑶ 상관관계 종류 판정 4문(139-08 · 139-09 · 139-10 · 140-14) ⑷ 미지수 포함 자료의 사분위수 조건 3문(138-02 · 141-18 · 143-u3) ⑸ 자료 → 사분위수·상자그림 값 채우기 3문(138-01 · 142-e1 · 142-u1)
- 그림: 22문에 crop 있음(140-14 는 산점도 + 표 두 장). 그림 없는 6문은 138-01 · 138-02 · 138-03 · 139-09 · 141-18 · 143-u3
- 대상층: 하위권 5 · 중하위권 3 · 중위권 16 · 중상위권 4

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M32-140-14 | 발전 문제 구역(★3 출발)이나 골조는 표의 수치로 점 세 개를 옮겨 찍고 전체 방향을 읽는 한 단계라 체감은 ★2 쪽 | ★2 / ★3 |
| GN-M32-141-19 | 실력 UP 구역(★4 출발)이나 통찰 1개·M_total 7 로 STEP 2 의 141-17(★3)과 골조 부담이 거의 같음 | ★3 / ★4 |
| GN-M32-143-u6 | 서술형 구역(★3 출발)이나 통찰 2개로 +1 하여 ★4. 141-20 과 같은 골조라 맞췄으나 세는 범위가 좁아 ★3 도 가능 | ★3 / ★4 |
| GN-M32-142-e1 · GN-M32-142-u1 | 같은 유형(자료 → 상자그림의 빈 사분위수 채우기)인데 변량 개수(10 vs 16)의 계산 부담 차이만으로 ★2/★3 이 갈림. 카탈로그에서 한 유형으로 묶고 변량 개수를 난이도 변수로 둘지 결정 필요 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형** ⑴ 「산점도 · 기준선 하나로 세기」(y=x 위아래, x=a 세로선 — 139-06 · 139-07 · 143-u5)와 ⑵ 「산점도 · 합/차 직선 평행이동」(x+y=k, y=x±k — 141-17 · 141-19 · 142-e2 · 142-u2)은 base ★ 가 한 단 다르다. ⑶ 「합의 상·하위 % 경계를 학생이 찾는 유형」(141-20 · 143-u6)은 ⑵ 에서 한 번 더 갈라 세우는 것이 좋다 — 기준선이 문제에 주어지지 않는다는 점이 ★4 의 실질 근거다.
- **통합해도 될 유형** 「상자그림 읽기」 계열(138-03 · 138-04 · 138-05 · 143-u4)은 묻는 대상만 다르고 도구가 같아 한 유형으로 묶고 소분류(정의 확인 / 그림 대응 / 구간 비율 / 비교 서술)로 두면 된다. 「자료 → 사분위수」(138-01 · 142-e1 · 142-u1)도 한 유형이며 변량 개수의 홀짝·4의 배수 여부가 난이도 변수다.
- **이 범위에서 반복된 type_hint**: '산점도에서 … 점 세기와 비율' 이 8회로 압도적이다. 카탈로그에서는 세는 영역의 모양(반평면 / 띠 / 직선 위 / 교집합)을 유형 축으로 삼는 것이 ★ 와 가장 잘 맞았다.
- **★5 부재**: 이 단원은 도구가 두 개뿐이라 통찰 3개 이상을 요구하는 문항이 없다. 카탈로그에 ★5 슬롯을 만들려면 사분위수 역추적(141-18)과 합 경계 찾기(141-20)를 한 문항에 겹치는 신작이 필요하다.
