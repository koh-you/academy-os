---
name: mechanism-데이터-GN-M32-14-p1
description: 개념원리 중학 3-2 14 산점도와 상관관계 (1/2 · 133~137쪽 17문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-2 · 전사본 latex-bank/gn-m32
  section: 14 산점도와 상관관계
  unit_code: GN-M32-14
  part: "1/2"
  extract_range: "133~137쪽 · 133-01~137-04"
  total_problems: 17
  unit_total: 45
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). insight_type 은 insights 가 비면 절차형, 하나라도 있으면 통찰형. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m32/items.json (원본 전사) · latex-bank/gn-m32/items/<id>.tex
  image_source: latex-bank/gn-m32/figures/ (crop 파일)
---

# 개념원리 중학 3-2 · 14 산점도와 상관관계 (1/2) 정독 데이터 (v1.0)

이 파일은 「14 산점도와 상관관계」 133~137쪽의 17문항(개념원리 확인하기 3 · 핵심문제 익히기 10 · 이런 문제가 시험에 나온다 4)을 다룬다. 개념원리 중학은 문항별 난이도 표기(하~상)가 없고 **구역 자체가 난이도 층**이다. 「개념원리 확인하기」는 개념 직후 확인(★1 출발), 「핵심문제 익히기」는 유형 제목이 붙은 핵심문제(`쪽-hN`)와 그 유제인 확인문제(`쪽-cN`)가 쌍을 이루며(★2 출발), 「이런 문제가 시험에 나온다」는 단원 끝 시험 대비(★2~3 출발)다. 이 범위에는 태그가 붙은 문항이 없다.

이 단원은 계산이 거의 없고 **조건을 산점도 위의 선·영역으로 옮기는 것**이 전부다. 도구는 네 개뿐이다 — ① 수직·수평 기준선(한 변량의 이상·이하) ② 대각선 $y=x$(두 변량이 같다·크다·작다) ③ 기울기 $-1$ 직선 $x+y=k$(합·평균 조건) ④ 대각선의 평행선 $y=x\pm k$(차 조건)과 원점을 지나는 직선의 기울기(「~에 비하여」). 난이도 차이는 도구의 개수가 아니라 **발문의 말을 어느 선으로 옮겨야 하는지 학생이 스스로 정해야 하는가**에서 나온다. 그래서 통찰 라벨은 전부 I-RT(표현 전환 · 대수 조건 ↔ 기하 영역)이고, 수직·수평선만으로 끝나는 세기 문항과 상관관계 판별 문항은 절차형이다. 함정은 거의 T-경계(이상·이하에서 선 위의 점을 넣을지)와, 「많다」(절대 위치)와 「~에 비하여 많다」(기울기)의 혼동 둘이다.

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이므로 모든 블록에 `mechanism_primary`(풀이 골조 한 줄) · `insights[]` · `variation_notes`(바꿔도 되는 수와 제약 · 골조 유지 변형)를 채웠다. 이 단원은 수치가 그림 안의 점 배치에 들어 있어서, 숫자 변형은 대부분 **기준값(점수·횟수·개수)을 바꾸는 것**이고 점 배치를 바꾸면 크롭을 다시 만들어야 한다는 제약이 공통이다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M32-133-01
  page: 133
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    8명의 하루 휴대 전화 사용 시간과 학습 시간을 조사한 표를 보고 산점도를 좌표평면 위에 그리기.
  category: "표의 순서쌍 → 좌표평면 위의 점"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표의 두 변량을 산점도로 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표의 (사용 시간, 학습 시간) 8쌍을 그대로 점으로 옮기는 한 단계.
    어느 변량을 x축에 둘지 정하고 눈금을 맞추면 끝난다.
    확인하기 구역·통찰 없음·M_total 3 → ★1.
  tier: star_1
  mechanism_primary: "표의 순서쌍 8개 → x축 사용 시간·y축 학습 시간 → 점 8개 찍기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "풀이 참조"
  answer_source: "답지"
  figure: "crop:fig-133-01.png"
  latex: latex-bank/gn-m32/items/133-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표의 8쌍 수치와 인원수(8 → 10·12)를 바꿀 수 있다. 제약 — 두 변량이 축 눈금 범위 안에 들어가야 하고, 중복 순서쌍이 많으면 점의 개수가 보이지 않는다. 수치는 그림(표 크롭) 안에 있으므로 바꾸면 크롭을 다시 만들어야 한다."
    creative: "(1) 그린 산점도에서 상관관계까지 이어 묻기(★1 유지) (2) 표 대신 문장 자료를 주고 산점도로 옮기게 하기(★2) (3) 산점도를 주고 빠진 표의 값을 채우게 하는 역방향(★2 · I-BW)."
```

```yaml
- id: GN-M32-133-02
  page: 133
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑶ 12명의 국어·영어 성적 산점도에서 ⑴ 국어가 90점 이상인 학생 수
    ⑵ 영어가 60점 이상 80점 이하인 학생 수 ⑶ 두 성적이 같은 학생 수.
  category: "기준선(세로·가로·대각선) → 영역·선 위의 점 세기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "산점도에서 조건을 만족하는 학생 수 세기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴은 세로선 오른쪽, ⑵는 두 가로선 사이, ⑶은 대각선 y=x 위의 점을 센다.
    선을 어디에 그을지가 발문에 그대로 적혀 있어 전환 부담이 없다.
    함정은 '이상·이하'라 기준선 위의 점을 포함하는 것 하나(T-경계). 확인하기 구역·통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "조건 → 세로선·가로선·대각선 y=x → 해당 영역·선 위의 점 개수"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑴ 4명 ⑵ 7명 ⑶ 3명"
  answer_source: "답지"
  figure: "crop:fig-133-02.png"
  latex: latex-bank/gn-m32/items/133-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 점수 90·60·80 과 인원 12명을 바꿀 수 있다. 제약 — 그림의 점 배치가 고정이라 기준을 옮기면 답을 다시 세야 하고, 기준선이 점을 지나도록 두어야 '이상·이하' 함정이 산다."
    creative: "(1) '국어가 90점 이상이고 영어가 80점 이상'처럼 두 조건을 겹쳐 사각영역으로(★1~2) (2) '국어보다 영어가 높은 학생 수'로 바꾸면 대각선 비교(★2 · 134-h1 골조) (3) 구한 학생 수를 전체의 비율(%)로 묻기(★2)."
```

```yaml
- id: GN-M32-133-03
  page: 133
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑶ 보기 ㄱ~ㅂ 여섯 산점도에서 ⑴ 양의 상관관계 ⑵ 음의 상관관계
    ⑶ 상관관계가 없는 것을 모두 고르기.
  category: "점 전체가 흐르는 방향 → 양·음·없음 분류"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "산점도의 모양으로 상관관계 판별하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    여섯 그림을 오른쪽 위로 흐르는가·오른쪽 아래로 흐르는가·흩어져 있는가로 나누면 끝.
    점이 얼마나 촘촘한가(상관관계의 강약)는 묻지 않아 판정이 한 겹이다.
    확인하기 구역·통찰 없음·M_total 3 → ★1.
  tier: star_1
  mechanism_primary: "각 산점도의 점 분포 방향 → 오른쪽 위=양 · 오른쪽 아래=음 · 방향 없음=상관관계 없음"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑴ ㄴ, ㅁ ⑵ ㄱ, ㄹ ⑶ ㄷ, ㅂ"
  answer_source: "답지"
  figure: "crop:fig-133-03.png"
  latex: latex-bank/gn-m32/items/133-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "보기 산점도의 개수(6 → 4·8)와 각 그림의 분포 방향 배정을 바꿀 수 있다. 제약 — 세 분류에 최소 하나씩은 있어야 하고, 점이 수평·수직 직선에 가깝게 놓이면 '상관관계 없음'과 헷갈려 답이 흔들린다."
    creative: "(1) '상관관계가 가장 강한 것'을 묻기(점의 촘촘함까지 봐야 해 ★2) (2) 각 산점도에 실생활 변량 쌍을 붙여 짝짓기(★2 · 136-h3 골조) (3) 한 산점도에서 점 하나를 옮기면 상관관계가 어떻게 변하는지 묻기(★3 · I-EQV)."
```

### 핵심문제 익히기

```yaml
- id: GN-M32-134-h1
  page: 134
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    ⑴⑵ 16명의 지난달·이번 달 도서관 방문 횟수 산점도에서 ⑴ 지난달보다 이번 달이 많은 학생 수
    ⑵ 두 달 모두 6회 이상인 학생은 전체의 몇 %인지.
  category: "대각선 위쪽 개수 · 두 기준선이 만드는 사각영역 개수 → 백분율"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "산점도의 이해 (1) — 대각선·영역 기준 학생 수와 비율"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ '이번 달이 더 많다'는 y>x 이므로 대각선 y=x 위쪽(선 위의 점 제외) 점을 센다.
    ⑵ 는 x≥6, y≥6 두 기준선이 자르는 오른쪽 위 사각영역을 세고 16으로 나눠 %로 바꾼다.
    대각선을 쓰긴 하지만 발문의 말과 선이 일대일이라 전환 부담이 없어 절차형. 핵심문제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "y>x → 대각선 위쪽 점 세기 · x≥6 이고 y≥6 → 사각영역 점 세기 → 전체 16으로 나눠 %"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ 6명 ⑵ $25\,\%$'
  answer_source: "본문 답"
  figure: "crop:fig-134-h1.png"
  latex: latex-bank/gn-m32/items/134-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 횟수 6회와 전체 인원 16명을 바꿀 수 있다. 제약 — 백분율을 묻는 ⑵ 는 전체 인원이 16·20·25처럼 나누어떨어지는 수여야 답이 정수 %가 되고, 대각선 위의 점(지난달=이번 달)을 ⑴ 에서 빼는 배치가 유지돼야 한다."
    creative: "(1) '방문 횟수가 줄어든 학생 수'로 뒤집기(대각선 아래쪽 · ★2 유지) (2) '두 달 방문 횟수의 합이 12회 이상'으로 바꾸면 기울기 −1 직선 필요(★2 · 135-h2 골조) (3) 늘어난 학생의 증가량 평균까지 묻기(★3)."
```

```yaml
- id: GN-M32-134-c1
  page: 134
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    20명의 1차·2차 수행평가 성적 산점도에 대한 다섯 진술(1차 8점 이상 10명 · 2차 6점 이하 7명 ·
    두 성적이 같은 학생 6명 · 2차가 떨어진 학생 6명 · 둘 다 7점 이하 8명) 중 옳지 않은 것 고르기.
  category: "선택지마다 기준선 → 개수 세어 진술과 대조"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "산점도의 이해 (1) — 대각선·영역 기준 학생 수와 비율"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    도구는 하나(기준선 긋고 세기)인데 선택지 다섯 개에 대해 다섯 번 반복한다.
    ①② 는 수직·수평선, ③ 은 대각선 위, ④ 는 대각선 아래, ⑤ 는 사각영역.
    세는 양이 많아 M_s 2 이지만 통찰은 없다. 핵심문제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "선택지별 조건 → 수직·수평선 또는 대각선 y=x → 점 개수 → 진술의 수와 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: "crop:fig-134-c1.png"
  latex: latex-bank/gn-m32/items/134-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 선택지의 기준값(8점·6점·7점)과 진술된 인원수를 바꿀 수 있다. 제약 — 틀린 선택지는 하나만 남기고, 틀린 쪽의 인원수는 참값과 1~2명 차이로 두어 실제로 세어야 판별되게 한다."
    creative: "(1) '옳은 것'으로 뒤집기(★2 유지) (2) 한 선택지를 '두 성적의 합이 14점 이상'으로 바꿔 직선 전환을 섞기(★3) (3) 틀린 진술의 인원수를 바르게 고치라는 서술형(★2~3)."
```

```yaml
- id: GN-M32-134-c2
  page: 134
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    ⑴⑵ 15명의 읽기·듣기 점수 산점도에서 ⑴ 두 점수가 같은 학생은 전체의 몇 %인지
    ⑵ 읽기 점수가 40점 이하인 학생들의 듣기 점수 평균.
  category: "대각선 위 개수 → % · 부분집단의 y좌표 평균"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "산점도의 이해 (1) — 대각선·영역 기준 학생 수와 비율"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 대각선 위의 점 개수를 15로 나눠 %로 바꾼다.
    ⑵ 는 x≤40 인 점만 골라 그 y좌표들의 평균을 내는 것 — 전체 평균이 아니라 부분집단 평균임을 놓치는 것이 함정.
    점을 세는 데 더해 평균 계산이 붙어 M_k 2. 통찰 없음 → 핵심문제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "y=x 위 점 수 ÷ 15 → % · x≤40 인 점들의 y좌표 합 ÷ 그 개수"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $40\,\%$ ⑵ 35점'
  answer_source: "답지"
  figure: "crop:fig-134-c2.png"
  latex: latex-bank/gn-m32/items/134-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 점수 40점과 전체 인원 15명을 바꿀 수 있다. 제약 — ⑴ 은 백분율이 정수가 되도록 인원이 15·20·25 여야 하고, ⑵ 는 고른 점들의 y좌표 합이 개수로 나누어떨어져야 평균이 정수 점수가 된다."
    creative: "(1) '듣기 점수가 읽기 점수보다 높은 학생들의 점수 차의 평균'(★3 · 차 전환 추가) (2) 부분집단을 '읽기 40점 이하이고 듣기 60점 이상'으로 좁혀 사각영역으로(★2) (3) 평균 대신 최빈값·중앙값을 묻기(★2 · 통계 단원과 결합하면 I-XU ★3)."
```

```yaml
- id: GN-M32-135-h2
  page: 135
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    ⑴⑵ 18명의 2점짜리 슛·3점짜리 슛 개수 산점도에서 ⑴ 두 개수의 합이 50개 이상인 학생 수
    ⑵ 두 개수의 차가 5개 이하인 학생 수.
  category: "합·차 조건 → 직선족(x+y=50 · y=x±5) → 영역 안 점 세기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'합이 50 이상'을 기울기 −1 직선 x+y=50 의 위쪽 영역으로, '차가 5 이하'를 두 평행선 y=x±5 사이의 띠로 옮김 — 대수 조건을 산점도 위의 영역으로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "산점도의 이해 (2) — 두 변량의 합·차·평균 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    점마다 좌표를 읽어 합·차를 계산하면 18번 계산이지만, 직선 하나와 띠 하나를 그으면 세기만 남는다.
    발문에 선이 적혀 있지 않고 학생이 '합 → 기울기 −1 직선', '차 → 대각선 평행선'을 스스로 떠올려야 해 I-RT.
    같은 전환을 ⑴⑵ 에서 두 번 쓰므로 주 통찰 1개로 센다. 핵심문제 구역 ★2 · 통찰 1개(d1) → ★2 유지.
  tier: star_2
  mechanism_primary: "합·차 조건 → x+y=50 직선 위쪽 · y=x±5 띠 안 → 해당 영역의 점 개수"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑴ 5명 ⑵ 9명"
  answer_source: "본문 답"
  figure: "crop:fig-135-h2.png"
  latex: latex-bank/gn-m32/items/135-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합 기준 50개와 차 기준 5개를 바꿀 수 있다. 제약 — 기준선이 격자점을 지나면 '이상·이하'라 선 위의 점을 포함해야 하므로 발문 표현을 그림과 맞춰야 하고, 기준을 너무 키우면 해당 점이 0개가 된다."
    creative: "(1) 합의 최댓값·차의 최댓값인 학생을 묻기(★2 · 137-02 골조) (2) 2점슛·3점슛의 총 득점(2x+3y)이 일정 이상인 학생으로 바꾸면 기울기가 −2/3 인 직선이라 전환이 한 겹 깊어짐(★3) (3) 합 조건을 평균 조건으로 바꾸기(★2 · 135-c4 골조)."
```

```yaml
- id: GN-M32-135-c3
  page: 135
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    ⑴⑵ 15명의 수학·과학 성적 산점도에서 ⑴ 두 성적의 차가 30점인 학생 수
    ⑵ 두 성적의 차가 20점 이상인 학생 수.
  category: "차 조건 → 대각선의 평행선 y=x±k → 선 위·띠 바깥 점 세기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'차가 30'을 직선 y=x+30 과 y=x−30 위의 점으로, '차가 20 이상'을 띠 y=x±20 의 바깥쪽으로 옮김 — 절댓값 조건을 대각선 평행선 두 개로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "산점도의 이해 (2) — 두 변량의 합·차·평균 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    차 조건은 부호를 모르므로 대각선 위쪽·아래쪽 평행선 두 개를 모두 그어야 한다는 것이 핵심.
    ⑴ 은 선 '위'의 점, ⑵ 는 띠 '바깥'의 점이라 안과 밖을 뒤집어 세는 것이 유일한 함정(T-경계).
    135-h2 의 차 전환을 반복하는 유제. 핵심문제 구역 ★2 · 통찰 1개(d1) → ★2.
  tier: star_2
  mechanism_primary: "|x−y|=30 → y=x±30 위의 점 · |x−y|≥20 → y=x±20 띠 바깥의 점 세기"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑴ 3명 ⑵ 7명"
  answer_source: "답지"
  figure: "crop:fig-135-c3.png"
  latex: latex-bank/gn-m32/items/135-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "차 기준 30점·20점과 성적 눈금 간격(10점)을 바꿀 수 있다. 제약 — 기준이 눈금의 배수여야 평행선이 격자점을 지나 '차가 정확히 k' 인 점이 존재하고, ⑵ 의 기준은 ⑴ 보다 작아야 포함 관계가 자연스럽다."
    creative: "(1) '수학 성적이 과학 성적보다 20점 이상 높은 학생'으로 한쪽 평행선만 쓰게 하기(★2) (2) 차가 가장 큰 학생의 성적을 묻기(★2 · 137-02 골조) (3) 차가 20점 이상인 학생들의 수학 성적 평균까지 묻기(★3)."
```

```yaml
- id: GN-M32-135-c4
  page: 135
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    20명이 1학기·2학기에 읽은 책의 수 산점도에서 두 학기 평균이 3권 이하인 학생은 전체의 몇 %인지.
  category: "평균 조건 → 합 조건 → 직선 x+y=6 아래쪽 개수 → 백분율"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'평균이 3권 이하'를 '합이 6권 이하'로 바꾼 뒤 기울기 −1 직선 x+y=6 의 아래쪽 영역으로 옮김 — 평균 → 합 → 직선의 두 겹 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "산점도의 이해 (2) — 두 변량의 합·차·평균 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평균을 그대로 두면 20번 계산이고, 2를 곱해 합으로 바꾸면 직선 하나로 끝난다.
    합 조건 문항(135-h2)보다 '평균 → 합' 한 겹이 더 있어 이 구역에서 가장 무겁다.
    다만 전환은 여전히 한 방향이고 depth 2 는 아니라 +1 조건(통찰 2개 이상 또는 depth 3)에 못 미친다 → ★2.
  tier: star_2
  mechanism_primary: "평균 ≤3 → 합 ≤6 → x+y=6 직선 아래쪽(선 위 포함) 점 세기 → 20으로 나눠 %"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$35\,\%$'
  answer_source: "답지"
  figure: "crop:fig-135-c4.png"
  latex: latex-bank/gn-m32/items/135-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평균 기준 3권(합 6권)과 전체 20명을 바꿀 수 있다. 제약 — 백분율이 정수가 되도록 인원은 20·25 로 두고, 평균 기준은 0.5 단위까지만(합이 정수여야 직선이 격자점을 지남)."
    creative: "(1) '평균이 3권 이상 5권 이하'로 두 직선 사이의 띠(★3) (2) 평균 대신 '두 학기 합이 가장 많은 학생'을 묻기(★2) (3) 3학기째 목표 권수를 주고 평균 4권을 넘기려면 몇 권 더 읽어야 하는지 묻는 역방향(★3 · I-BW)."
```

```yaml
- id: GN-M32-136-h3
  page: 136
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    오른쪽 산점도와 대체로 같은 모양이 되는 두 변량을 고르기. 5지선다
    (몸무게와 키 / 어머니의 나이와 아들의 키 / 산의 높이와 기온 / 수학 성적과 통학 시간 / 여름철 기온과 아이스크림 판매량).
  category: "그림의 흐름 방향 → 음의 상관관계 → 실생활 변량 쌍 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "산점도와 상관관계 — 변량 쌍과 산점도 모양 맞추기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    그림이 오른쪽 아래로 흐르는 모양(음의 상관)임을 먼저 읽고, 다섯 쌍을 각각 양·음·없음으로 판정한다.
    「어머니의 나이와 아들의 키」·「수학 성적과 통학 시간」처럼 상관관계가 없는 쌍이 섞여 있는 것이 함정.
    [분류 이슈] 통찰 없음·M_total 5 라 −1 후보(★1)이나 선택지 다섯 개를 모두 판정해야 해 핵심문제 구역 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "산점도 방향 → 음의 상관관계 → 다섯 변량 쌍 중 한쪽이 커질 때 다른 쪽이 작아지는 것"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "본문 답"
  figure: "crop:fig-136-h3.png"
  latex: latex-bank/gn-m32/items/136-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 문항이라 숫자 변형 여지는 없다. 바꿀 수 있는 것은 제시 산점도의 방향(양·음·없음)과 선택지 다섯 쌍의 구성뿐이며, 그림 방향을 바꾸면 크롭을 다시 만들어야 한다."
    creative: "(1) 제시 그림을 '상관관계 없음'으로 바꾸고 답을 「어머니의 나이와 아들의 키」류로(★2 유지) (2) 다섯 쌍을 양·음·없음으로 분류하는 서술형(★2) (3) 변량 쌍을 주고 산점도를 직접 그리게 한 뒤 상관관계를 설명하게 하기(★3 · 서술형)."
```

```yaml
- id: GN-M32-136-c5
  page: 136
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    다섯 쌍(통화 시간과 요금 / 예금액과 이자 / 통학 거리와 통학 시간 / 시력과 학력 / 도시의 인구수와 학교 수) 중
    두 변량 사이의 상관관계가 나머지 넷과 다른 하나 고르기.
  category: "각 쌍의 상관관계 판정 → 다수와 어긋나는 하나"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "산점도와 상관관계 — 변량 쌍과 산점도 모양 맞추기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    네 쌍은 모두 한쪽이 커지면 다른 쪽도 커지는 양의 상관관계이고, 「시력과 학력」만 아무 관계가 없다.
    '다른 하나'를 묻기 때문에 다섯 개를 모두 판정해야 하고, 음의 상관이 아니라 '없음'이 답이라는 점이 함정.
    그림 없이 상식으로만 판정하므로 계산·전환은 0. 핵심문제 구역 ★2 유지.
  insight_type: 절차형
  tier: star_2
  mechanism_primary: "다섯 쌍을 각각 양·음·없음으로 판정 → 다수(양)와 다른 하나"
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/136-c5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없어 숫자 변형 여지는 없다. 바꿀 수 있는 것은 다섯 쌍의 구성뿐이다."
    creative: "(1) 답을 음의 상관관계 쌍(산의 높이와 기온 · 겨울철 기온과 난방비)으로 바꾸기(★2 유지) (2) '상관관계가 없는 것을 모두 고르시오'로 개수를 늘리기(★2) (3) 각 쌍의 산점도 모양을 함께 고르는 짝짓기형(★3 · 136-h3 결합)."
```

```yaml
- id: GN-M32-136-h4
  page: 136
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    ⑴⑵ 용돈과 지출액 산점도의 다섯 학생 A~E 중 ⑴ 용돈에 비하여 지출액이 가장 많은 학생
    ⑵ 용돈에 비하여 지출액이 가장 적은 학생.
  category: "'~에 비하여' → 원점을 지나는 직선의 기울기(대각선 기준 위·아래) 비교"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'용돈에 비하여 지출액이 많다'를 점의 절대 위치가 아니라 원점과 이은 직선의 기울기(대각선에서 위쪽으로 가장 멀리 떨어진 점)로 옮겨 다섯 점을 비교"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "산점도의 분석 — 대각선 기준 개별 자료 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    지출액이 가장 큰 점(y좌표 최대)과 '용돈에 비하여' 가장 많이 쓴 점이 다르다는 것이 이 유형의 전부다.
    대각선을 긋고 위쪽으로 가장 먼 점·아래쪽으로 가장 먼 점을 찾으면 끝나며 계산은 없다.
    비율을 기하로 옮기는 전환이 있어 I-RT 1개(d1). 핵심문제 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "각 점의 y/x 비교 → 대각선 위쪽으로 가장 먼 점 = 가장 많이 쓴 학생 · 아래쪽으로 가장 먼 점 = 가장 적게 쓴 학생"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $\pt{E}$ ⑵ $\pt{B}$'
  answer_source: "본문 답"
  figure: "crop:fig-136-h4.png"
  latex: latex-bank/gn-m32/items/136-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다섯 점 A~E 의 좌표 배치를 바꿀 수 있다. 제약 — 지출액 절대 1위와 '비하여' 1위가 서로 다른 점이어야 함정이 살고, 두 점이 같은 기울기(원점을 지나는 한 직선 위)에 놓이면 답이 둘이 된다. 점 라벨 A~E 는 그림 고정."
    creative: "(1) '용돈에서 지출액을 뺀 저축액이 가장 큰 학생'으로 바꾸면 기울기 대신 y=x 평행선 비교(★2 유지) (2) 용돈 대비 지출 비율이 같은 두 학생 찾기(★2) (3) 다섯 학생 중 전체 경향에서 가장 벗어난 학생을 고르고 이유를 쓰게 하는 서술형(★3)."
```

```yaml
- id: GN-M32-136-c6
  page: 136
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제 익히기"
  summary: |
    학습 시간과 기말고사 성적 산점도에서 보기 ㄱ(B는 A보다 성적이 좋다) ㄴ(A~D 중 학습 시간에 비하여
    성적이 가장 좋은 학생은 A) ㄷ(학습 시간이 길수록 성적도 좋은 편이다) 중 옳은 것 모두 고르기.
  category: "y좌표 비교 · 대각선 기준 기울기 비교 · 전체 상관관계 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "같은 그림을 세 층위로 읽어야 함 — ㄱ은 y좌표만(절대 위치), ㄴ은 '학습 시간에 비하여'라 원점을 지나는 직선의 기울기(상대 위치), ㄷ은 점 하나가 아니라 점 전체의 흐름(양의 상관관계)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "산점도의 분석 — 대각선 기준 개별 자료 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ 은 y좌표만 비교하면 되고, ㄴ 은 136-h4 의 기울기 비교, ㄷ 은 개별 점을 버리고 전체 경향으로 판정한다.
    '절대 위치 → 상대 위치 → 전체 경향'으로 읽는 층위를 세 번 바꾸는 것이 부담의 전부이고 계산은 없다.
    [분류 이슈] 층위 전환이 세 번이라 ★3 후보이나 각 판정이 한 줄이고 h4 의 유제 위치라 ★2 로 둔다.
  tier: star_2
  mechanism_primary: "보기별로 읽는 층위 결정 → y좌표 비교 · 대각선 기준 기울기 비교 · 점 전체의 흐름 → 참·거짓"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "ㄴ, ㄷ"
  answer_source: "답지"
  figure: "crop:fig-136-c6.png"
  latex: latex-bank/gn-m32/items/136-c6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 점 A~D 의 배치를 바꿀 수 있다. 제약 — ㄱ(절대 비교)과 ㄴ(상대 비교)의 답이 서로 다른 학생을 가리켜야 층위 전환이 의미를 갖고, 전체 점 분포는 양의 상관을 유지해야 ㄷ 이 참이 된다."
    creative: "(1) 보기에 '학습 시간에 비하여 성적이 가장 나쁜 학생'을 추가(★2 유지) (2) ㄷ 을 '학습 시간과 성적은 음의 상관관계'로 바꿔 거짓 보기로(★2) (3) 네 학생의 학습 시간당 성적을 순서대로 나열하게 하는 서술형(★3)."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M32-137-01
  page: 137
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    ⑴⑵ 20명의 달리기·멀리뛰기 실기 점수 산점도에서 ⑴ 멀리뛰기가 달리기보다 높은 학생은 전체의 몇 %인지
    ⑵ 두 점수가 모두 8점 이상인 학생들의 멀리뛰기 점수 평균.
  category: "대각선 위쪽 개수 → % · 사각영역 점들의 y좌표 평균"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "산점도의 이해 (1) — 대각선·영역 기준 학생 수와 비율"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 y>x 이므로 대각선 위쪽 점을 세어 20으로 나누고, ⑵ 는 x≥8 이고 y≥8 인 사각영역의 점들만 골라 y좌표 평균을 낸다.
    134-h1 과 134-c2 를 한 문항에 합친 형태로 도구는 그대로이고 단계만 이어 붙었다.
    통찰 없음·M_total 6 → 시험 구역 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "y>x → 대각선 위쪽 점 수 ÷ 20 → % · x≥8 이고 y≥8 인 점들의 y좌표 합 ÷ 개수"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $45\,\%$ ⑵ 9점'
  answer_source: "답지"
  figure: "crop:fig-137-01.png"
  latex: latex-bank/gn-m32/items/137-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 점수 8점과 전체 20명을 바꿀 수 있다. 제약 — ⑴ 은 백분율이 정수가 되게 인원이 20·25 여야 하고, ⑵ 는 사각영역 안 점들의 y좌표 합이 개수로 나누어떨어져야 평균이 정수다."
    creative: "(1) ⑵ 를 '두 점수의 합이 16점 이상인 학생들의 평균'으로 바꾸면 직선 전환이 추가(★3) (2) 두 점수가 같은 학생 수를 함께 묻기(★2) (3) 달리기 점수별 멀리뛰기 평균을 표로 정리하게 하는 서술형(★3)."
```

```yaml
- id: GN-M32-137-02
  page: 137
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    ⑴⑵ 야구 선수 15명의 작년·올해 홈런 개수 산점도에서 ⑴ 두 개수의 차가 가장 큰 선수의 올해 홈런 개수
    ⑵ 두 개수의 차가 1개 이하인 선수는 전체의 몇 %인지.
  category: "차 조건 → 대각선에서 가장 먼 점 · 좁은 띠 y=x±1 안 개수 → %"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'차가 가장 크다'를 대각선 y=x 에서 가장 멀리 떨어진 점으로, '차가 1개 이하'를 y=x±1 사이의 좁은 띠(대각선과 바로 옆 두 줄)로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "산점도의 이해 (2) — 두 변량의 합·차·평균 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    차를 15번 계산하는 대신 대각선을 긋고 가장 멀리 떨어진 점 하나를 집으면 ⑴ 이 끝난다.
    ⑴ 은 차의 최댓값이 아니라 그 선수의 '올해' 개수(y좌표)를 답해야 하는 되묻기가 함정이고,
    ⑵ 는 띠가 매우 좁아 대각선 위·바로 옆 두 줄을 빠짐없이 세야 한다. 시험 구역 ★2~3 출발 + 통찰 1 + 되묻기 → ★3.
  tier: star_3
  mechanism_primary: "대각선 y=x 에서 가장 먼 점 → 그 점의 y좌표 · |x−y|≤1 → y=x±1 띠 안 점 수 ÷ 15 → %"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ 9개 ⑵ $20\,\%$'
  answer_source: "답지"
  figure: "crop:fig-137-02.png"
  latex: latex-bank/gn-m32/items/137-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "차 기준 1개와 전체 15명을 바꿀 수 있다. 제약 — ⑴ 은 차가 최대인 점이 하나뿐이어야 답이 유일하고, ⑵ 는 백분율이 정수가 되게 인원이 15·20·25 여야 한다."
    creative: "(1) ⑴ 을 '작년보다 올해 가장 많이 늘어난 선수'로 바꿔 한쪽 방향만 보게 하기(★2) (2) '두 해 합이 가장 많은 선수'로 바꾸면 기울기 −1 직선(★2) (3) 차가 1개 이하인 선수들의 올해 홈런 평균까지 묻기(★3~4)."
```

```yaml
- id: GN-M32-137-03
  page: 137
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    교통량을 x대, 대기 중 이산화질소의 농도를 y ppb 라 할 때 x 와 y 사이의 상관관계를 나타낸
    산점도로 알맞은 것 고르기. 5지선다(산점도 다섯 개).
  category: "두 변량의 실제 관계(양의 상관) → 그 모양의 산점도 선택"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "산점도와 상관관계 — 변량 쌍과 산점도 모양 맞추기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    교통량이 많을수록 배출되는 이산화질소 농도가 높다 → 양의 상관관계 → 오른쪽 위로 흐르는 산점도.
    133-03 과 도구가 같고 방향이 반대(변량 → 그림)일 뿐이다.
    [분류 이슈] 통찰 없음·M_total 4 라 −1 후보(★1)이나 선택지 다섯 산점도를 비교해야 해 시험 구역 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "교통량↑ → 농도↑ 판단 → 양의 상관관계 → 오른쪽 위로 흐르는 산점도 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: "crop:fig-137-03.png"
  latex: latex-bank/gn-m32/items/137-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없어 숫자 변형 여지는 없다. 바꿀 수 있는 것은 변량 쌍과 선택지 산점도 다섯 개의 방향 배정이며, 바꾸면 크롭을 다시 만들어야 한다."
    creative: "(1) 변량을 '자동차 속도와 연비'처럼 음의 상관으로 바꾸기(★2 유지) (2) 선택지에 강한 양·약한 양의 상관을 함께 넣어 상관의 강약까지 묻기(★3) (3) 산점도를 주고 알맞은 변량 쌍을 고르게 뒤집기(★2 · 136-h3 골조)."
```

```yaml
- id: GN-M32-137-04
  page: 137
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    키와 몸무게 산점도에 대한 다섯 진술(① 양의 상관관계 ② A는 키에 비해 몸무게가 적다 ③ B는 키도 작고
    몸무게도 적다 ④ C는 키도 크고 몸무게도 많다 ⑤ D는 몸무게에 비해 키가 크다) 중 옳은 것 2개 고르기.
  category: "전체 상관관계 판정 + 개별 점의 대각선 기준 상대·절대 위치 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'키에 비하여 몸무게가 적다'류를 경향선(대각선) 기준 아래쪽·위쪽으로 옮겨 네 점을 각각 판정하고, ①은 개별 점이 아니라 점 전체의 흐름으로 판정 — 상대 위치와 절대 위치를 번갈아 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "산점도의 분석 — 대각선 기준 개별 자료 비교"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    다섯 선택지가 전체 경향(①)·상대 비교(②⑤)·절대 위치(③④)를 섞어 놓아 같은 그림을 두 층위로 번갈아 읽어야 한다.
    '비하여'(경향선 기준)와 '작다·크다'(좌표 자체)를 바꿔 읽는 것이 이 문항의 유일하고 결정적인 함정.
    정답이 2개라 다섯 개를 모두 판정해야 한다. 시험 구역 ★2~3 출발 + 통찰 1 + 판정 5회 → ★3.
  tier: star_3
  mechanism_primary: "점 전체 흐름 → 양의 상관 판정 · 각 점이 경향선 위/아래인지(비하여) 와 좌표 자체가 큰지(절대) 를 선택지별로 구분"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①, ⑤"
  answer_source: "답지"
  figure: "crop:fig-137-04.png"
  latex: latex-bank/gn-m32/items/137-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "네 점 A~D 의 배치를 바꿀 수 있다. 제약 — 경향선 위쪽 점과 오른쪽 위 점이 서로 달라야 상대·절대 혼동 함정이 살고, 전체 분포는 양의 상관을 유지해야 ① 이 참이다. 점 라벨 A~D 는 그림 고정."
    creative: "(1) '옳지 않은 것'으로 뒤집고 정답 1개로 줄이기(★2~3) (2) 선택지에 '몸무게가 가장 많이 나가는 학생은 C이다'를 넣어 절대 비교를 하나 더(★3 유지) (3) 네 학생 중 표준체중에서 가장 벗어난 학생을 고르고 이유를 쓰게 하는 서술형(★4 · 근거 서술 부담)."
```

## 표본 판정 요약 (17문)

- ★ 분포: ★1 3 · ★2 12 · ★3 2 · ★4 0 · ★5 0
- 통찰형 7 · 절차형 10 · premium 0
- 통찰 유형: I-RT 7(전부) — 합·차·평균·「~에 비하여」를 산점도 위의 직선·띠·기울기로 옮기는 전환 하나에 몰려 있다. depth 는 모두 1(두 겹 전환인 135-c4 도 방향이 한 갈래라 d1).
- 구역별 ★: 개념원리 확인하기 3문 모두 ★1 · 핵심문제 익히기 10문 모두 ★2 · 이런 문제가 시험에 나온다 ★2 2 · ★3 2
- type_hint 분포: 「산점도의 이해 (1) — 대각선·영역 기준 학생 수와 비율」 4 · 「산점도의 이해 (2) — 두 변량의 합·차·평균 조건」 4 · 「산점도와 상관관계 — 변량 쌍과 산점도 모양 맞추기」 3 · 「산점도의 분석 — 대각선 기준 개별 자료 비교」 3 · 「표의 두 변량을 산점도로 나타내기」 1 · 「산점도에서 조건을 만족하는 학생 수 세기」 1 · 「산점도의 모양으로 상관관계 판별하기」 1
- M_total 분포: 3 → 2문 · 4 → 2문 · 5 → 8문 · 6 → 5문 (계산 부담이 거의 없어 상한이 6)
- 함정: T-경계(이상·이하에서 기준선 위의 점 포함 여부) 13문 · 「많다」와 「~에 비하여 많다」 혼동 3문(136-h4 · 136-c6 · 137-04)
- 그림: 16문(136-c5 만 `figure: none`)

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M32-136-h3 | 통찰 0·M_total 5 → 규칙상 −1 후보(★1)이나 선택지 다섯 변량 쌍을 모두 판정해야 해 핵심문제 구역 출발점 ★2 유지 | ★1 / ★2 |
| GN-M32-137-03 | 통찰 0·M_total 4 → 규칙상 −1 후보(★1)이고 133-03 과 도구가 같으나, 시험 구역 + 산점도 다섯 개 비교로 ★2 유지 | ★1 / ★2 |
| GN-M32-136-c6 | 한 그림을 절대 위치·기울기·전체 경향 세 층위로 읽어야 해 ★3 후보이나, 각 보기 판정이 한 줄이고 136-h4 의 유제 위치라 ★2 | ★2 / ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 반복된 축은 네 개다 — ① 기준선·영역으로 개수 세기(+비율) ② 합·차·평균 조건을 직선·띠로 전환 ③ 변량 쌍과 산점도 모양 맞추기(상관관계 판별) ④ 개별 점을 대각선 기준으로 비교(「~에 비하여」). 교재의 핵심문제 제목(산점도의 이해 (1)·(2) · 산점도와 상관관계 · 산점도의 분석)과 정확히 일대일이라 **카탈로그의 유형 경계는 교재 제목을 그대로 써도 된다.**
- 따로 세워야 할 유형: 「합 조건(기울기 −1 직선)」과 「차 조건(대각선 평행선)」은 교재가 「산점도의 이해 (2)」 하나로 묶었지만 긋는 선의 방향이 달라 학생 체감이 갈린다(135-h2 는 두 선을 다 써야 함). 카탈로그에서는 합·평균 / 차 두 유형으로 나누는 편이 변형 생성에 유리하다.
- 통합해도 될 유형: 「산점도 그리기」(133-01)와 「개수 세기」(133-02)는 확인하기 전용 도입 문항이라 독립 유형으로 세울 가치가 낮고, 「산점도의 이해 (1)」의 base ★1 슬롯으로 흡수해도 된다.
- base ★ 제안: 산점도의 이해 (1) → 2 · 산점도의 이해 (2) → 2(차 유형 2, 합·평균 유형 2이되 두 선을 함께 쓰면 3) · 산점도와 상관관계 → 1~2 · 산점도의 분석 → 2. 이 단원은 계산 부담이 구조적으로 낮아 M 만으로는 ★4 이상이 나오지 않으며, ★4 를 만들려면 부분집단의 평균·다른 통계 단원(대푯값·도수분포)과 결합해 I-XU 를 붙여야 한다.
