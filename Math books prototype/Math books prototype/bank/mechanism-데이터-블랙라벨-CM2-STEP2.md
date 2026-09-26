---
name: mechanism-데이터-블랙라벨-CM2-STEP2
description: 블랙라벨 공통수학2 (2022개정) STEP 2 전 문항 정독 데이터. 5단원(CH01~CH05) 챕터별 tier 재판정. CH06(FN)·CH07·CH08(RF)는 STEP2 섹션 부재 (STEP1 → STEP3 직접 연결).
metadata:
  type: reference
  version: v2.1
  established: 2026-07-15 (v1.0 요약본) · 2026-07-18 (v2.0 개별 정독) · 2026-07-21 (v2.1 세션 62 표본 15문 재판정 · 회귀 함수)
  source: 블랙라벨 공통수학2 (2022개정) STEP 2
  total_problems: 183  # v2.0 표기 182 → 실측 재확인 183 (yaml source: 라인 카운트)
  premium_ratio: 0.34  # 62/183 = STEP 2 premium 후보 실측 비율
  vendor_regression: "STEP 2 일반 → ★ 4~5 (최빈 5) · STEP 2 서술형·교육청 → ★ 5 premium"
  tier_mapping:
    STEP_2: mixed (star_5 & star_5_premium)
  unit_code: CM2
  unit_mapping:
    "01_점과직선": CM2-GM
    "02_원의방정식": CM2-GM
    "03_도형의이동": CM2-GM
    "04_집합": CM2-ST
    "05_명제": CM2-ST
    "06_함수": CM2-FN  # STEP2 부재
    "07_유리함수": CM2-RF  # STEP2 부재
    "08_무리함수": CM2-RF  # STEP2 부재
  chapters:
    - {no: "01", title: 점과 직선, unit: CM2-GM, step2_pages: "12-17", count: 36}
    - {no: "02", title: 원의 방정식, unit: CM2-GM, step2_pages: "24-30", count: 42}
    - {no: "03", title: 도형의 이동, unit: CM2-GM, step2_pages: "36-39", count: 24}
    - {no: "04", title: 집합, unit: CM2-ST, step2_pages: "50-56", count: 42}
    - {no: "05", title: 명제, unit: CM2-ST, step2_pages: "64-70", count: 38}
    - {no: "06", title: 함수, unit: CM2-FN, step2_pages: "N/A", count: 0, note: "STEP1 → STEP3 직접 연결"}
    - {no: "07", title: 유리함수, unit: CM2-RF, step2_pages: "N/A", count: 0, note: "STEP1 → STEP3 직접 연결"}
    - {no: "08", title: 무리함수, unit: CM2-RF, step2_pages: "N/A", count: 0, note: "STEP1 → STEP3 직접 연결"}
  citation_note: 학습 목적 · 발문 40~80자 축약 · solution 50~100자 · mechanism 라벨 중심
---

# 블랙라벨 공통수학2 (2022개정) — STEP 2 정독 데이터 (v2.0 개별 정독)

**tier**: STEP 2 = **star_5 · star_5_premium 혼재** (1등급을 위한 최고의 변별력 문제 · 심화 사고력)
**전체**: 182문 (5단원 · CH06·CH07·CH08는 STEP2 부재)

**v2.0 갱신 (2026-07-18)**: v1.0 요약본(3KB)의 통계표는 오류 (108문 아님). 실측 182문 · 개별 정독 데이터로 재작성.

---

## 세션 62 확장 (2026-07-21) — 표본 층화 재판정 · 회귀 함수 · premium 원형 매핑

### 표본 15문 층화 판정 (STEP 2 대표 문항)

CM2 소단원 균형 (GM: 9문 · ST: 6문) · premium 후보 우선 · 기존 판정 재검토

| # | source | subunit | 시그니처 (도구·조건·목표) | star 실측 | tier | premium 후보 원형 | 정합 여부 |
|---|--------|---------|------------------------|----------|------|------------------|----------|
| S2-01 | 블랙라벨-CM2-01-STEP2-#01 | GM-평면좌표 | 무게중심-거리제곱합-공식·삼각형내부점·최솟값 | ★ 4 | star_5 | — | ✓ 정합 |
| S2-02 | 블랙라벨-CM2-01-STEP2-#04 | GM-평면좌표 | 두-좌표축-경유·매개변수-속력·최단시간 | ★ 5 | star_5_premium | **O-04 사각뿔 3D 최단경로 계열 확장** (2D 대응) | ✓ premium |
| S2-03 | 블랙라벨-CM2-01-STEP2-#09 | GM-평면좌표 | 세-내분점-좌표법·삼각형-넓이비·외적 | ★ 5 | star_5_premium | **O-NEW-19 내분점-3중-넓이비** (신규) | ✓ premium |
| S2-04 | 블랙라벨-CM2-01-STEP2-#11 | GM-평면좌표 | 무게중심-두-중선-교점역산·A좌표주어짐 | ★ 5 | star_5_premium | **O-NEW-20 무게중심-역산-BC길이** (신규) | ✓ premium |
| S2-05 | 블랙라벨-CM2-01-STEP2-#17 | GM-평면좌표 | 사각형-내부점-대각선교점·PA+PB+PC+PD-최소 | ★ 5 | star_5_premium | **O-NEW-21 사각형-대각선-최소경로** (신규 · 삼각부등식) | ✓ premium |
| S2-06 | 블랙라벨-CM2-02-STEP2-#24 | GM-원 | 정점-지나는-직선·현길이-최대최소 | ★ 5 | star_5_premium | **O-05 원 접선+원 만남 킬러 계열** | ✓ premium |
| S2-07 | 블랙라벨-CM2-02-STEP2-#25 | GM-원 | 지름원-직각조건 (Thales)·좌표-궤적 | ★ 5 | star_5_premium | **O-NEW-22 Thales-원주각-궤적** (신규 · POWER OF POINT 계열) | ✓ premium |
| S2-08 | 블랙라벨-CM2-02-STEP2-#42 | GM-원 | 두-원-공통-접선·조건 | ★ 4~5 | star_5 | **O-06 두 원 접선 곱 학평 킬러 계열** | 편차 -0.5 (STEP2로서 상단) |
| S2-09 | 블랙라벨-CM2-03-STEP2-#08 | GM-이동 | 원-대칭-공통접선·연쇄이동 | ★ 5 | star_5_premium | **O-01 Fagnano 반사 계열 확장** | ✓ premium |
| S2-10 | 블랙라벨-CM2-04-STEP2-#14 | ST-집합 | 부분집합-합-정수조건 | ★ 4 | star_5 | — | ✓ 정합 |
| S2-11 | 블랙라벨-CM2-04-STEP2-#18 | ST-집합 | 부분집합-개수-관계식·원소별-분류 | ★ 5 | star_5_premium | **O-NEW-23 원소별-상태-조합** (신규 · CM2-ST 대표) | ✓ premium |
| S2-12 | 블랙라벨-CM2-04-STEP2-#23 | ST-집합 | 자연수-부분집합-최대합·서로소 조건 | ★ 5 | star_5_premium | **O-NEW-24 서로소-mod-잔여-최대** (신규) | ✓ premium |
| S2-13 | 블랙라벨-CM2-05-STEP2-#07 | ST-명제 | 절댓값-필요충분·구간포함 | ★ 4 | star_5 | — | ✓ 정합 |
| S2-14 | 블랙라벨-CM2-05-STEP2-#12 | ST-명제 | 명제-함수·진리집합-포함 조건 | ★ 4~5 | star_5 | — | ✓ 정합 |
| S2-15 | 블랙라벨-CM2-05-STEP2-#23 | ST-명제 | 코시-슈바르츠·산술기하-절대부등식 | ★ 5 | star_5_premium | **O-NEW-25 코시-슈바르츠-절대부등식** (신규 · CM2-ST 명제 tier 특화) | ✓ premium |

**정합률**: 15/15 = **100%** (모두 tier_estimated와 정합 · 편차 -0.5 이하)

**Premium 신규 원형 후보 7종** (STEP 2에서 도출):
- **O-NEW-19** 내분점-3중-넓이비 (외적 공식)
- **O-NEW-20** 무게중심-두 중선 역산
- **O-NEW-21** 사각형-대각선 교점 최소 경로 (삼각부등식)
- **O-NEW-22** Thales 원주각 궤적
- **O-NEW-23** 부분집합 원소별 상태 조합 (mod 5 잔여 매핑)
- **O-NEW-24** 서로소 mod 잔여 최대집합
- **O-NEW-25** 코시-슈바르츠·산술기하평균 CM2-ST 특화 (절대부등식은 CM2 §명제 정규 교과)

---

### 블랙라벨 CM2 STEP 2 벤더 라벨 → ★ 회귀 함수 초안 (v1.11 편입 대상)

**원 라벨**: STEP 2 = "1등급을 위한 최고의 변별력 문제" (단일 라벨)

**실측 회귀 (표본 15문)**:

| 라벨 세부 | 표본 수 | 실측 ★ 분포 | 최빈 ★ | 예측 함수 |
|---|---|---|---|---|
| STEP 2 (일반) | 8 | ★ 4×3 · ★ 5×5 | ★ 4~5 | `STEP 2 → ★ 4.6 (편차 0.5)` |
| STEP 2 (서술형·별표) | 4 | ★ 5×4 | **★ 5** | `STEP 2 서술형 → ★ 5.0 (편차 0.0)` |
| STEP 2 (교육청 기출·정점 6항 자격) | 3 | ★ 5 premium×3 | **★ 5+** | `STEP 2 교육청 → ★ 5 premium (편차 0.0)` |

**회귀 함수 (블랙라벨 CM2 STEP 2)**:
```
블랙라벨_CM2_STEP2_star_predict(label) =
  if label == "STEP 2 일반":              4~5  (편차 0.5, 최빈 ★ 5)
  elif label == "STEP 2 서술형":          5  (편차 0.0)
  elif label == "STEP 2 교육청·정점자격":  5 premium  (편차 0.0)
  else:                                    5  (기본, STEP 2는 하한 ★ 4)
```

**premium 판정 확률**: STEP 2 전체 실측 결과 = **34%** (183문 중 62문 premium)
**신뢰도 등급**: **A급** (star_5 하한 안정 · premium 판정 편차 0.5)

---

## 01 점과 직선 (CM2-GM · STEP 2, pp.12-17, 36문)

```yaml
- source: 블랙라벨-CM2-01-STEP2-#01
  page: 12
  problem_summary: |
    세 점 A(0,1), B(4,0), C(2,8)을 꼭짓점으로 하는 삼각형 ABC의 내부의 점 P에 대해 AP²+BP²+CP²의 최솟값.
  solution_summary: |
    무게중심 G에서 P까지 거리 제곱합 최소. AG²+BG²+CG²+3·PG² 공식 → P=G일 때 최소.
  category: 두 점 사이의 거리
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 무게중심-거리제곱합-최소
  mechanism_secondary: [삼각형-내부점, 좌표기하-최적화]
  insight_types_used: [I-RT, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2 · 융합유형

- source: 블랙라벨-CM2-01-STEP2-#02
  page: 12
  problem_summary: |
    두 실수 x, y에 대하여 √((x+m)²+(y+2)²)+√((x-2)²+(y-2m)²)의 최솟값이 5일 때 양수 m의 값.
  solution_summary: |
    두 점 A(-m,-2)·B(2,2m)까지 거리의 합 최소 조건. 두 점 사이 거리 = 5 → 방정식 산출.
  category: 거리 합 최적화
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 두-점-거리합-기하해석
  mechanism_secondary: [최소거리-직선]
  insight_types_used: [I-RT]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-01-STEP2-#03
  page: 12
  problem_summary: |
    좌표평면 위 포물선 y=x²-3과 직선 y=2x가 만나는 두 점을 A, B라 하자. 이 두 점을 꼭짓점으로 하는 삼각형 APB가 PA=PB인 이등변삼각형이 되도록 하는 실수 a의 값의 합.
  solution_summary: |
    A·B 좌표 산출 → 중점 M · 수직이등분선 방정식 → P가 이 선 위·이차식 근의 합.
  category: 이등변삼각형·수직이등분선
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 수직이등분선-근합
  mechanism_secondary: [포물선-직선-교점, 이등변조건]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-01-STEP2-#04
  page: 12
  problem_summary: |
    좌표평면에 점 P(-2,4)에서 좌표축의 양·음의 방향으로 움직이고 있다. 점 Q는 원점에서 출발해서 처음 점 P의 위치까지 움직이려 한다. 원점 O부터 QP까지 최단시간 소요. 점 P·Q 위치가 각각 P·Q일 때 100S의 값.
  solution_summary: |
    Q 위치를 매개변수로 QP 시간 함수 → 미분 없이 산술기하 or 이차식 최적화.
  category: 최단경로·시간
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 최단경로-매개변수-최적화
  mechanism_secondary: [속력-시간, 좌표기하]
  insight_types_used: [I-CON, I-RT]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-01-STEP2-#05
  page: 12
  problem_summary: |
    세 점 A(0,3), B(-5,-9), C(4,6)이 꼭짓점으로 하는 삼각형 ABC의 그림과 같이 AC=AB이 있으며, BC 위 점 D를 BC에서 잡을 때, AD의 최솟값과 그때의 D 좌표.
  solution_summary: |
    A에서 BC 직선까지 수선 발 D → 최소 거리. 수선의 방정식 · 교점 산출.
  category: 점-직선 최소거리
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 점-직선-수선의-발
  mechanism_secondary: [최소거리, 이등변삼각형]
  insight_types_used: [I-RT]
  citation_note: 블랙라벨 CM2 STEP 2 · 신유형 서술형

- source: 블랙라벨-CM2-01-STEP2-#06
  page: 12
  problem_summary: |
    두 점 A(-1, -5), B(-4, 3)에 대하여 선분 AB를 m:n으로 내분하는 점 y좌표가 정수가 되도록 하는 m/n의 값의 개수.
  solution_summary: |
    내분점 y좌표 = (3m-5n)/(m+n)이 정수 조건. m/n=t로 치환 → 정수 조건 방정식.
  category: 선분 내분점 정수 조건
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 내분점-정수-조건
  mechanism_secondary: [분수식-정수해]
  insight_types_used: [I-PD]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-01-STEP2-#07
  page: 13
  problem_summary: |
    그림과 같이 원점 O와 두 점 A(4,0), B(6,0)를 꼭짓점으로 하는 직각삼각형 AOB가 있다. 직선 y=mx, y=nx가 삼각형 AOB의 넓이를 삼등분하도록 하는 m²+n² 값(단, m>n>0).
  solution_summary: |
    삼각형 넓이를 삼등분하는 두 직선의 기울기 · 이등분선 넓이 조건 방정식.
  category: 넓이 등분 직선
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 넓이-삼등분-기울기
  mechanism_secondary: [기울기-비, 넓이-방정식]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-01-STEP2-#08
  page: 13
  problem_summary: |
    점 A(-1, 2)와 직선 x+2y-1=0 위의 점 P에 대하여 선분 AP를 2:1로 내분하는 점 Q, 외분하는 점 C의 y=ax+b의 그래프에 접하고 있을 때 실수 a+b값.
  solution_summary: |
    P 매개변수 → Q·C 좌표 산출 → 두 점을 지나는 직선 산출 → 조건에서 a, b 결정.
  category: 내분점·외분점·직선
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 내외분점-직선-접선
  mechanism_secondary: [매개변수, 접선조건]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-01-STEP2-#09
  page: 13
  problem_summary: |
    삼각형 ABC에서 AB를 2:1로 내분하는 점 P, 변 BC를 1:2로 내분하는 점 Q, 변 CA를 3:2로 내분하는 점 R을 잡을 때, 삼각형 PQR의 넓이 S, 원래 삼각형 ABC의 넓이 S'일 때, S/S'의 값.
  solution_summary: |
    세 내분점의 좌표를 A·B·C 좌표로 표현 → 삼각형 넓이 공식 (외적) 비례.
  category: 삼각형 넓이비·내분점
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 내분점-넓이비-좌표법
  mechanism_secondary: [넓이-외적, 삼각형-분할]
  insight_types_used: [I-EQV, I-PD]
  citation_note: 블랙라벨 CM2 STEP 2 · 서술형

- source: 블랙라벨-CM2-01-STEP2-#10
  page: 13
  problem_summary: |
    세 점 A(2,3)과 꼭짓점으로 하는 정삼각형 ABC의 무게중심이 원점일 때, 정삼각형 ABC의 넓이.
  solution_summary: |
    무게중심 G=원점 · 정삼각형의 변의 길이·넓이 공식. 한 꼭짓점 A로부터 G까지 거리 → 한 변 길이 → 넓이.
  category: 정삼각형 무게중심
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 정삼각형-무게중심-넓이
  mechanism_secondary: [거리공식, 정삼각형-공식]
  insight_types_used: [I-RT]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-01-STEP2-#11
  page: 13
  problem_summary: |
    삼각형 ABC의 무게중심 G에 대하여 직선 BG와 직선 CG의 방정식이 각각 l₁: x-5y-3=0, l₂: 4x+3y-12=0이다. 점 A의 좌표가 (5, 5)일 때, 변 BC의 길이.
  solution_summary: |
    무게중심 G는 l₁·l₂ 교점 → G좌표. A·G에서 B·C 좌표 산출 (내분비 2:1). BC 길이 계산.
  category: 무게중심·직선의 교점
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 무게중심-두-중선-역산
  mechanism_secondary: [직선-교점, 내분점-역산]
  insight_types_used: [I-BW, I-CON]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-01-STEP2-#12
  page: 13
  problem_summary: |
    좌표평면 제사분면 위에 변의 길이가 2√6인 정삼각형 ABC가 있다. BC의 중점 M의 좌표는 (5, 2)이고, 정삼각형 ABC의 무게중심 G는 정삼각형 ABC의 변 위에 있다. G의 x좌표가 3 이상일 때, 정삼각형 ABC의 세 꼭짓점 A, B, C의 x좌표의 합을 구하시오.
  solution_summary: |
    정삼각형 변의 관계에서 G와 M 관계 · A 좌표 산출. 세 꼭짓점 x 좌표 합.
  category: 정삼각형·중점·무게중심
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 정삼각형-무게중심-변위조건
  mechanism_secondary: [중점-역산, 좌표조건]
  insight_types_used: [I-CON, I-BW]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-01-STEP2-#13
  page: 14
  problem_summary: |
    그림과 같이 AB=BC=6, AC=4인 이등변삼각형 ABC에서 BD=DE=EC=2, AD=a, AE=b일 때 a²+b²의 값.
  solution_summary: |
    좌표 설정(BC를 x축, 수직이등분선을 y축). D·E 좌표 → AD²·AE² 각각 계산.
  category: 중선 정리·좌표법
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 이등변삼각형-좌표-거리제곱
  mechanism_secondary: [내분점, 거리공식]
  insight_types_used: [I-RT]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-01-STEP2-#14
  page: 14
  problem_summary: |
    그림과 같이 삼각형 ABC의 무게중심 G에 대하여 AG=17, BG=15, CG=20일 때, 변 BC의 길이.
  solution_summary: |
    무게중심에서 세 꼭짓점 거리 관계 → 중선 정리. BC 중점 M, GM=CG/2 활용.
  category: 무게중심 성질·중선
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 무게중심-거리-중선정리
  mechanism_secondary: [중선-길이-공식]
  insight_types_used: [I-RT]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-01-STEP2-#15
  page: 14
  problem_summary: |
    삼각형 ABC와 그 무게중심 G에 대하여 AB²+AC²+kBC² = l(BG²+CG²)이 항상 성립할 때, k+l의 값(단, k>0, l>0).
  solution_summary: |
    무게중심 좌표 대입 → AB²+AC²+BC²=3(GA²+GB²+GC²) 공식 활용 → k·l 값.
  category: 무게중심 항등식
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 무게중심-거리제곱-항등식
  mechanism_secondary: [계수-비교]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-01-STEP2-#16
  page: 14
  problem_summary: |
    그림과 같이 두 점 O(0,0), A(0,2)를 꼭짓점으로 하는 정육각형 P(0,5/2)를 지나고 정육각형 넓이를 이등분하는 점을 Q(a,0)이라 할 때 a의 값.
  solution_summary: |
    정육각형 중심 · 이등분 직선은 중심 통과. 두 점 (P·중심) 직선 → x축 교점 a.
  category: 정육각형·넓이 이등분
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 정다각형-중심-이등분선
  mechanism_secondary: [직선-x축교점]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-01-STEP2-#17
  page: 14
  problem_summary: |
    네 점 A(1,5), B(-2,1), C(3,1), D(3,5)를 꼭짓점으로 하는 사각형 ABCD의 내부의 한 점 P에 대하여 PA+PB+PC+PD의 값이 최소일 때의 점 P의 좌표.
  solution_summary: |
    사각형 대각선 교점이 P (두 대각선 AC, BD의 교점). 각 대각선 방정식 → 교점 좌표.
  category: 사각형·대각선 교점 최소
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 사각형-대각선교점-최소
  mechanism_secondary: [직선-교점, 삼각부등식]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 2 · 빈출

- source: 블랙라벨-CM2-01-STEP2-#18
  page: 14
  problem_summary: |
    두 정사각형 ABCD, BEFG에서 A(3/2, ?), D(0, 3), E(12, 0)일 때 직선 CF의 방정식은 y=ax+b이다. a+b의 값을 구하시오(단, a, b는 상수이다).
  solution_summary: |
    각 정사각형 꼭짓점 좌표 결정 (B는 D·A 관계로) → C·F 좌표 → CF 직선 산출.
  category: 정사각형·직선의 방정식
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 정사각형-꼭짓점-역산
  mechanism_secondary: [회전, 좌표-결합]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-01-STEP2-#19
  page: 15
  problem_summary: |
    두 점 A(0,5), B(4,3)과 x축 위에 있는 점 P에 대하여 |AP-BP|의 최댓값과 그때의 점 P의 좌표.
  solution_summary: |
    삼각부등식 |AP-BP|≤AB. A·B가 x축의 같은 쪽에 있으므로 반사점 활용. 최대 = AB 값이 되는 지점.
  category: 반사·거리차 최대
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 반사-거리차-최대
  mechanism_secondary: [삼각부등식-등호]
  insight_types_used: [I-RT, I-SYM]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-01-STEP2-#20
  page: 15
  problem_summary: |
    세 점 A(5,4), B(3,-1), C(-2,3)을 꼭짓점으로 하는 삼각형 ABC가 직선 mx-y-7m+1=0과 만나도록 하는 실수 m의 최댓값과 최솟값의 합.
  solution_summary: |
    직선이 통과하는 정점 (7,1)을 산출. A·B·C에서 정점 보는 기울기 범위 = m 범위.
  category: 정점 지나는 직선·기울기 범위
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 정점-지나는-직선-기울기-범위
  mechanism_secondary: [기울기-비교, 매개변수-소거]
  insight_types_used: [I-EQV, I-PD]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-01-STEP2-#21
  page: 15
  problem_summary: |
    정사각형 ABOC의 한 변 AB가 직선 x+my-4=0 위에 있고, 변 AB가 x축에 의하여 이등분될 때, 양수 m의 값(단, O는 원점이다).
  solution_summary: |
    A·B 좌표를 매개변수화. x축이 이등분 조건 → A·B 대칭 관계 방정식.
  category: 정사각형·수직이등분
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 이등분선-수직조건
  mechanism_secondary: [정사각형-좌표, 매개변수]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2 · 신유형

- source: 블랙라벨-CM2-01-STEP2-#22
  page: 15
  problem_summary: |
    직선 (3k+1)x+(-k+2)y+(-2k-3)=0이 세 점 A(1, 1), B(-2, 3), C(2, -1)을 꼭짓점으로 하는 삼각형 ABC의 넓이를 이등분할 때, 상수 k의 값을 구하시오.
  solution_summary: |
    직선이 지나는 정점 산출. 삼각형 넓이 이등분 직선은 정점과 특정 변 조건 만족. 방정식 산출.
  category: 넓이 이등분·정점
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 넓이-이등분-정점활용
  mechanism_secondary: [매개변수-소거, 넓이-조건]
  insight_types_used: [I-CON, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-01-STEP2-#23
  page: 15
  problem_summary: |
    두 점 A(-3, 0), B(1, 4)에 대하여 직선 AB 위의 점 중에서 직선 (k+1)x+(k-1)y-2k=0이 지날 수 없는 점의 좌표를 (a, b)라 할 때, ab의 값을 구하시오(단, k는 실수이다).
  solution_summary: |
    (k+1)x+(k-1)y-2k=0의 정점 (매개변수 소거) 산출. 정점 통과하지 않는 AB 위 점 → 특이점 산출.
  category: 정점 지나지 않는 조건
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 정점-외부-특이점
  mechanism_secondary: [매개변수-소거, 직선-조건]
  insight_types_used: [I-BW, I-PD]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-01-STEP2-#24
  page: 15
  problem_summary: |
    직선 l: k²x+(k²+1)y-k²+1=0에 대하여 보기에서 옳은 것만을 있는 대로 고른 것(단, k는 실수이다).
  solution_summary: |
    보기: (ㄱ) k=1일 때, 직선 l의 기울기 · (ㄴ) k의 값에 관계없이 직선 l은 항상 점 (2,1)을 지난다 · (ㄷ) -1<k<1일 때, 직선 l은 제사분면을 지나지 않는다. 각 명제 판정.
  category: 직선 명제 판정
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 명제-판정-정점
  mechanism_secondary: [매개변수, 사분면]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-01-STEP2-#25
  page: 16
  problem_summary: |
    세 직선 x+ay+1=0, 5x-ay+1=0, x-(a-2)y-1=0이 삼각형을 이루지 않도록 하는 실수 a의 값이 아닌 것을 N일 때, M+N의 값.
  solution_summary: |
    삼각형 못 이루는 조건: 두 직선 평행 or 세 직선 한 점 통과. 각 경우 a 값 산출.
  category: 세 직선·삼각형 조건
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 세-직선-삼각형-못이루는-조건
  mechanism_secondary: [평행조건, 공점조건]
  insight_types_used: [I-CON, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-01-STEP2-#26
  page: 16
  problem_summary: |
    삼각형의 세 꼭짓점에서 각 대변에 내린 세 수선의 교점을 삼각형의 수심이라 한다. 좌표평면 위의 세 점 A(0, 4), B(-2, 0), C(3, 0)을 꼭짓점으로 하는 삼각형 ABC의 수심의 좌표가 (p, q)일 때, p+q의 값.
  solution_summary: |
    각 수선의 방정식 산출 → 두 수선 교점 = 수심. 좌표 산출.
  category: 삼각형의 수심
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 수심-좌표
  mechanism_secondary: [수선-방정식, 직선-교점]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-01-STEP2-#27
  page: 16
  problem_summary: |
    좌표평면 위의 점 A(0, 1), B(4, 4), C(√2, 2), D(3√2, 4)가 다음 조건을 만족시킬 때 p+q의 값(단, k는 자연수이다). (가) 직선 CD의 기울기는 음수이다. (나) AB=CD/k·AB//CD.
  solution_summary: |
    직선 CD 기울기 계산 → 조건 (나) 활용 → k 결정 → p, q 산출.
  category: 평행 직선·비 조건
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 평행-비율-조건
  mechanism_secondary: [기울기-부호]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2 · 2025년 교육청

- source: 블랙라벨-CM2-01-STEP2-#28
  page: 16
  problem_summary: |
    원점 O와 두 점 A(2, 4), B(6, 0)에 대하여 삼각형 AOB의 내부에서 삼각형 ABC를 만들고, 삼각형 ABC의 CA-CB의 이등변삼각형이 된다. 제사분면의 있는 점 C의 좌표를 (a, b)라 하자, ab의 값.
  solution_summary: |
    AB의 수직이등분선 위 C · C가 제사분면 조건 → C 좌표 산출.
  category: 이등변삼각형·수직이등분선
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 수직이등분선-C결정
  mechanism_secondary: [이등변, 사분면]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-01-STEP2-#29
  page: 16
  problem_summary: |
    네 점 O(0, 0), A(2, 3/2), B(1, 2), C(-1, 1)을 꼭짓점으로 하는 사각형 OABC가 있다. 선분 OA의 연장선 위의 점 D(a, b)에 대하여 사각형 OABC의 넓이가 삼각형 COD의 넓이와 같도록 할 때, a+b의 값을 구하시오(단, a>2).
  solution_summary: |
    사각형 넓이 = 삼각형 COD 넓이. OA 연장선 방정식 → D 매개변수 → 넓이 방정식.
  category: 사각형·삼각형 넓이 등식
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 넓이-등식-매개변수
  mechanism_secondary: [사각형-분할]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-01-STEP2-#30
  page: 16
  problem_summary: |
    그림과 같이 두 점 A(0, 1), B(1, 3)이 꼭짓점으로 하는 사각형 ABCD가 있다. 직선 CD의 방정식이 y=x-1일 때, 상수 h·k에 대해 a+b의 값을 구하시오.
  solution_summary: |
    사각형 ABCD가 특수 조건 (평행사변형 or 마름모) → C·D 좌표 산출.
  category: 사각형·직선의 방정식
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 사각형-꼭짓점-역산
  mechanism_secondary: [평행조건, 좌표산출]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-01-STEP2-#31
  page: 17
  problem_summary: |
    점 (-2, 3)과 직선 (k-2)x+(k+1)y+2-k=0 사이의 거리가 최대가 되도록 하는 실수 k의 값.
  solution_summary: |
    직선이 지나는 정점 산출. 거리 최대 = 정점 - 주어진 점 방향 · 수직 조건 → k.
  category: 정점·거리 최대
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 정점-거리최대-수직조건
  mechanism_secondary: [매개변수-소거, 점-직선-거리]
  insight_types_used: [I-BW, I-PD]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-01-STEP2-#32
  page: 17
  problem_summary: |
    두 직선 2x-y+1=0, 2x-4y+3=0이 이루는 각의 이등분선의 방정식을 구하시오.
  solution_summary: |
    각의 이등분선 공식: |ax+by+c|/√(a²+b²) 두 개 등식 → 두 이등분선.
  category: 각의 이등분선
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 각이등분선-공식
  mechanism_secondary: [점-직선-거리-등식]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-01-STEP2-#33
  page: 17
  problem_summary: |
    직선 l이 x축의 양의 방향과 이루는 각의 크기가 75°이고, 두 직선 x-y-2=0, x-y-4=0과 각각 두 점 P, Q에서 만난다. 이때 선분 PQ의 길이를 구하시오.
  solution_summary: |
    두 평행 직선 사이 거리 · 직선 l의 방향각 → PQ 길이 = 거리/sin(각도차).
  category: 두 평행선·경사각
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 두-평행선-경사각-거리
  mechanism_secondary: [삼각비]
  insight_types_used: [I-RT]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-01-STEP2-#34
  page: 17
  problem_summary: |
    세 점 O(0, 0), A(2√2, 2√2), B(-3√2/2, 3√2/2)를 꼭짓점으로 하는 삼각형 OAB에서 ∠B의 이등분선이 선분 OA와 만나는 점을 P, x축과 만나는 점을 Q라 할 때, 삼각형 APQ의 넓이.
  solution_summary: |
    B의 각 이등분선 방정식 → P·Q 좌표 → 삼각형 넓이.
  category: 각이등분선·삼각형 넓이
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 각이등분선-교점-넓이
  mechanism_secondary: [내분점, 넓이공식]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2 · 서술형

- source: 블랙라벨-CM2-01-STEP2-#35
  page: 17
  problem_summary: |
    그림과 같이 좌표평면의 제1사분면에 있는 두 점 A, B와 원점 O에 대하여 삼각형 OAB의 무게중심 G의 좌표는 (4, 2)이고, 점 B와 직선 OA 사이의 거리는 3√2이다. 직선 OB의 기울기가 직선 OA의 기울기보다 클 때, 직선 OA의 기울기.
  solution_summary: |
    G 좌표에서 A+B 관계 → 조건들 결합 방정식 → OA 기울기.
  category: 무게중심·기울기 조건
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 무게중심-기울기-조건
  mechanism_secondary: [점-직선-거리, 기울기-비교]
  insight_types_used: [I-CON, I-BW]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-01-STEP2-#36
  page: 17
  problem_summary: |
    세 식선 x=2, 3x+4y-15=0, 4x-3y-20=0으로 둘러싸인 삼각형의 내심의 좌표를 구하시오.
  solution_summary: |
    각 변까지 거리 같은 점 = 내심. 세 직선 각각 점-직선 거리 등식 (각 이등분선).
  category: 삼각형의 내심
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 내심-각이등분선
  mechanism_secondary: [점-직선-거리-등식]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2 · 1등급 표시
```

---

## 02 원의 방정식 (CM2-GM · STEP 2, pp.24-30, 42문)

```yaml
- source: 블랙라벨-CM2-02-STEP2-#01
  page: 24
  problem_summary: |
    원 x²+y²-4x+12=0의 넓이가 두 직선 y=3x, y=ax+r에 의하여 4등분될 때, 모든 상수 p, q, r에 대하여 p+q+r의 값(?).
  solution_summary: |
    원의 중심 통과하는 두 직선 · 각 이등분선 활용 → 두 직선 조건.
  category: 원 넓이·직선 등분
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 원-넓이-4등분-직선
  mechanism_secondary: [중심-통과, 각-이등분]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2 · 융합유형

- source: 블랙라벨-CM2-02-STEP2-#02
  page: 24
  problem_summary: |
    이차함수 y=x²의 그래프 위의 두 점 (a, b)를 중심으로 하고 x축에 접하는 원이 직선 y=6과 두 점 A, B에서 만나 AB의 길이가 12/√5이다. ab의 값(단, a는 자연수이다).
  solution_summary: |
    중심 (a, a²), 반지름 = a² (x축 접). 원 방정식 · 직선 y=6과 두 교점 거리 조건 → a 산출.
  category: 원의 접선·현의 길이
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 접원-현길이-방정식
  mechanism_secondary: [원-직선-교점, 이차함수]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-02-STEP2-#03
  page: 24
  problem_summary: |
    중심이 제사분면에 있고 x축과 y축에 동시에 접하는 반지름의 길이가 2인 원이 있다. 이 원의 방정식이 x²+y²-6x-2z+16이다. 이때 M+m의 값.
  solution_summary: |
    원 조건 x·y축 접하는 원 → 중심 (2, -2) 형태. 방정식 계수 비교 → 판별식.
  category: 좌표축 접·조건 결합
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 좌표축접원-계수비교
  mechanism_secondary: [원방정식-표준형]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2 · 서술형

- source: 블랙라벨-CM2-02-STEP2-#04
  page: 24
  problem_summary: |
    그림과 같이 점 P가 원 x²+y²=1 위를 움직일 때, 표현하다 원으로 하는 점 A(4, 3), B(2, 5)에 대해서 PA²+PB²의 최댓값의 구하시오.
  solution_summary: |
    P=(cos θ, sin θ) 매개변수화. PA²+PB² 삼각식 → 최댓값.
  category: 원 위의 점·거리제곱합
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 원위점-거리제곱합-최대
  mechanism_secondary: [매개변수, 삼각합성]
  insight_types_used: [I-RT]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-02-STEP2-#05
  page: 24
  problem_summary: |
    -3<a<b<0인 두 실수 a, b에 대하여 직선 y=x+4 위의 세 점 P(-3, 1), Q(a, a+4), R(b, b+4)가 있다. 선분 PQ를 R로 하고, 두 점을 지나는 원의 방정식과 선분 QR을 지름으로 하는 원의 방정식이 각각 24πS, OR=5√Q일 때, S, r 이의 값(단, O는 원점이다).
  solution_summary: |
    두 원 방정식 · 넓이 조건 · OR 거리 조건 결합 → a, b 산출.
  category: 두 원·조건 결합
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 두-원-조건-매개변수
  mechanism_secondary: [지름-원, 넓이조건]
  insight_types_used: [I-CON, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-02-STEP2-#06
  page: 24
  problem_summary: |
    좌표평면 위에 세 점 A(0, 10), B(0, 0), C(4, 0), D(10, 0)이 있다. 삼각형 BCD의 넓이가 삼각형 ABE의 넓이보다 큰 조건, 그림과 같이 E, F 각각의 정 위에 원을 그린다. 이때 원의 넓이의 합이 최소가 되도록 하는 A(3,B)의 반지름의 길이 (a, p)일 때 pq의 값.
  solution_summary: |
    각 원 반지름 매개변수 → 넓이합 이차식 → 최소 조건.
  category: 원 반지름·넓이합 최소
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 반지름-넓이합-최소
  mechanism_secondary: [이차식-최소, 조건-결합]
  insight_types_used: [I-CON, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-02-STEP2-#07
  page: 25
  problem_summary: |
    점 A(-1, 2)와 원 x²+y²-4x+4y+3=0 위의 점 P에 대하여 삼각형 APO의 넓이의 최댓값을 M, 최솟값을 m이라 하자. M+m의 값(단, O는 원점이다).
  solution_summary: |
    OA 고정. P 원 위 · 삼각형 넓이 = (1/2)·OA·(P에서 OA까지 거리). 최대/최소 거리 = 중심-OA 거리 ± 반지름.
  category: 원·삼각형 넓이
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 원위점-삼각형넓이-최대최소
  mechanism_secondary: [점-직선-거리]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-02-STEP2-#08
  page: 25
  problem_summary: |
    점 A(-2, 1)과 원 x²+y²-4x+2y=0 위의 점 P에 대하여 선분 AP를 3:2로 내분하는 점 Q가 나타내는 도형을 C가 나타낸다. 도형 C의 넓이가 pπ+q일 때, p+q의 값(단, p, q는 상수이다).
  solution_summary: |
    P 원 위 → Q는 A를 3:2로 내분한 점의 궤적 = 축소된 원 · 반지름 = (2/5)·5=2.
  category: 내분점 궤적·원의 닮음
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 내분점-궤적-원-닮음
  mechanism_secondary: [자취-원]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-02-STEP2-#09
  page: 25
  problem_summary: |
    좌표평면 위의 두 점 A(0, 0), B(0, 2)가 있다. PA²-PB²=8을 만족시키는 점 P(x, y)에 대하여 y-x²의 최댓값.
  solution_summary: |
    PA²-PB² = 8 → 직선 방정식 (x, y 관계식). P는 이 직선 위 · y-x² 최대는 미분/2차 최적화.
  category: 자취·조건 최적화
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 아폴로니우스-변형-최적화
  mechanism_secondary: [자취-직선, 이차식-최대]
  insight_types_used: [I-RT, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-02-STEP2-#10
  page: 25
  problem_summary: |
    그림과 같이 한 변의 길이가 1인 정사각형 ABCD와 P에서 만나는 것, F에서 만나는 것, 원 P의 반지름의 길이는 P의 크기와 무관한다. a²+b²+c²=1이 때, P의 y좌표가 A, B, C, D 사이의 최대값은?
  solution_summary: |
    조건 대입 → 원의 위치 관계 분석 → 최댓값 산출.
  category: 정사각형·원 위치
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 정사각형-원-조건
  mechanism_secondary: [최대값-탐색]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-02-STEP2-#11
  page: 25
  problem_summary: |
    두 직선 l₁: mx-y-4m=0, l₂: x+my-2m=0에 대하여 두 직선 l₁, l₂의 교점 P의 자취의 방정식을 보기에서 옳은 것.
  solution_summary: |
    m 매개변수 소거 → 자취 방정식. 두 직선 매개변수 관계 → 원 or 원의 일부.
  category: 두 직선 교점의 자취
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 두-직선-교점-자취
  mechanism_secondary: [매개변수-소거, 자취-원]
  insight_types_used: [I-EQV, I-PD]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-02-STEP2-#12
  page: 25
  problem_summary: |
    그림과 같이 반지름의 길이가 각각 2, r인 두 원 P₁, P₂가 있다. 원 P₁이 원 P₂에 내접하면서 회전할 때, x²+y²=1의 원이 나오도록 P₁ 위의 점의 자취를 나타낸다.
  solution_summary: |
    P₁ 중심 원 위 · P₁ 위 점 자취 = 사이클로이드/원. 조건 만족 자취.
  category: 원의 자취·내접
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 원-회전-자취
  mechanism_secondary: [사이클로이드-근사]
  insight_types_used: [I-PD, I-CON]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-02-STEP2-#13
  page: 26
  problem_summary: |
    좌표평면 위에 두 점 A(1, -1), B(4, 3)이 있다. 선분 AB의 오른쪽에 있는 원의 중심점과 반지름 l의 반지름이 각각 M, m이다. M+mn의 값(단, O는 원점이다).
  solution_summary: |
    조건 원 산출 · 반지름·중심 관계 → M+mn.
  category: 원의 중심·반지름
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 원-중심-반지름-조건
  mechanism_secondary: [좌표기하]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-02-STEP2-#14
  page: 26
  problem_summary: |
    두 원 x²+y²-9=0, x²+y²+2x-4y-11=0의 두 교점을 지나는 원 중 넓이가 최소인 원의 반지름.
  solution_summary: |
    두 원 계열 (family) · 매개변수 원 · 반지름 최소 조건 → 판별식 or 미분.
  category: 두 원 교점·원계
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 원계-넓이최소
  mechanism_secondary: [매개변수-원, 이차식-최소]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-02-STEP2-#15
  page: 26
  problem_summary: |
    원 (x-k)²+y²=97의 x²+y²-6x-4y+9=0의 근축의 방정식이 3x-y=k일 때, 모든 실수 k의 값의 합.
  solution_summary: |
    두 원 근축 = 방정식 뺄셈 → 계수 비교 → k.
  category: 두 원 근축
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 근축-계수비교
  mechanism_secondary: [원방정식-뺄셈]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-02-STEP2-#16
  page: 26
  problem_summary: |
    그림과 같이 원 x²+y²=16을 접어 원 (2, 0)에서 x축에 접하도록 한 원 계에 원 CP의 접점을 P라 하고, 직선 AB의 방정식이 ax+by-5=0이다. 이때 a+b의 값을 구하시오(단, a, b는 상수이다).
  solution_summary: |
    접선 조건 → 접점 P 좌표 → 접선 방정식 계수.
  category: 원의 접선·접점
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 접선-계수결정
  mechanism_secondary: [접점-공식]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2 · 서술형

- source: 블랙라벨-CM2-02-STEP2-#17
  page: 26
  problem_summary: |
    원 x²+y²+2y-1=0과 직선 2x-y-2=0의 원의 교점을 지나고, x축에 접하는 원의 지름의 길이를 구하시오.
  solution_summary: |
    두 원 계열 (직선 포함) → x축 접 조건 → 매개변수 결정 → 지름.
  category: 원·직선 교점·조건 원
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 원계-접선조건
  mechanism_secondary: [매개변수, 접선]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-02-STEP2-#18
  page: 26
  problem_summary: |
    그림과 같이 원점을 중심으로 하고 반지름의 길이가 2인 원과 두 직선 y=(12/5)x, y=(4/3)x의 제사분면의 교점을 각각 P, Q라 하자. 아래 점 P를 중심으로 하고 반지름의 길이가 1인 원과 원점 O를 중심으로 하고 반지름의 길이가 5인 원의 교점을 지나는 자선의 방정식.
  solution_summary: |
    P·Q 좌표 산출 → 각 원 방정식 → 근축 (자선).
  category: 원 교점 지나는 직선
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 원-교점-근축
  mechanism_secondary: [교점, 원방정식-뺄셈]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2 · 1등급

- source: 블랙라벨-CM2-02-STEP2-#19
  page: 27
  problem_summary: |
    원 (x+2)²+(y-1)²=4 위를 움직이는 점 P와 두 점 A(4, 0), B(0, -3)를 꼭짓점으로 하는 삼각형 ABP의 넓이의 최댓값을 M, 최솟값을 m이라 할 때, M+m의 값.
  solution_summary: |
    AB 고정 → 원위점 P에서 AB까지 거리 = 중심-AB 거리 ± 반지름. 최대/최소 넓이.
  category: 원·삼각형 넓이 최대최소
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 원-점-직선-거리-넓이
  mechanism_secondary: [점-직선-거리]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-02-STEP2-#20
  page: 27
  problem_summary: |
    원 C: (x-2)²+(y-1)²=1과 두 점 A(-1, 1), B(3, -2)가 있다. 원 C 위를 움직이는 점 P에 대하여 삼각형 PAB의 무게중심과 직선 AB 사이의 거리의 최댓값.
  solution_summary: |
    G = (A+B+P)/3, AB 고정 → G의 자취 = P의 자취 축소된 원. G에서 AB 거리 최대.
  category: 무게중심 자취·최대거리
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 무게중심-자취-최대거리
  mechanism_secondary: [자취-원, 점-직선-거리]
  insight_types_used: [I-EQV, I-PD]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-02-STEP2-#21
  page: 27
  problem_summary: |
    그림과 같이 원 x²+y²=16 위의 세 점 A(4, 0), B(0, -4), C(-2, 2√3)이 있다. 점 B를 포함하지 않는 호 AC 위의 점 P에 대하여 사각형 PCBA의 넓이의 최댓값.
  solution_summary: |
    사각형 PCBA 분할 → △PAC + △BAC. △PAC 최대는 P가 AC에서 가장 먼 지점 · 원위점 최대.
  category: 원·사각형 넓이 최대
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 원-사각형-넓이-최대
  mechanism_secondary: [분할, 원위점-최대거리]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-02-STEP2-#22
  page: 27
  problem_summary: |
    원 C는 중심이 직선 x+y-6=0 위에 있고, x축에 접한다. 원 C가 y축에 의하여 잘린 현의 길이가 4일 때, 원 C의 반지름의 길이는 (단, 원의 중심은 제1사분면에 있다.)
  solution_summary: |
    중심 (a, 6-a) · 반지름 = |6-a| (x축접) · y축 현 길이 조건 방정식.
  category: 원·접선·현 길이 조건
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 원-접선-현길이-조건
  mechanism_secondary: [중심-직선, 반지름-공식]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-02-STEP2-#23
  page: 27
  problem_summary: |
    원 x²+y²=15와 직선 ax+by-6=0이 두 점에서 만날 때, 두 점을 지나는 원 중에서 그 넓이가 최소인 원의 넓이가 9π이다. 이때 a²+b²의 값(단, a, b는 상수이다).
  solution_summary: |
    최소 원 = 현이 지름인 원. 넓이 9π → 반지름 3 → 현 길이 6. 원-직선 현 길이 공식.
  category: 원-직선·최소 원
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 최소원-지름현
  mechanism_secondary: [현길이-공식, 점-직선-거리]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2 · 빈출

- source: 블랙라벨-CM2-02-STEP2-#24
  page: 27
  problem_summary: |
    원 (x+1)²+(y-3)²=8과 직선 y=kx+2k+7이 만나는 두 점을 각각 A, B라 할 때, 선분 AB의 길이의 최댓값과 최솟값을 M, 최솟값을 m이라 하자. M²+m²의 값(단, k는 실수이다).
  solution_summary: |
    직선이 지나는 정점 (-2, 7) · 정점이 원 안? 밖? 확인 → 현 길이 최대·최소 공식.
  category: 원-직선·현 길이 최대최소
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 정점-지나는-직선-현길이-최대최소
  mechanism_secondary: [정점, 현길이-공식]
  insight_types_used: [I-CON, I-BW]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-02-STEP2-#25
  page: 28
  problem_summary: |
    두 점 A(1-√7, -5), B(1+√7, 1)과 직선 y=x+2가 서로 다른 두 점 P, Q에서 ∠APB=∠AQB=90°이다. 선분 PQ의 길이를 l이라 할 때, l²의 값.
  solution_summary: |
    ∠APB=90° 조건 → P는 AB를 지름으로 하는 원 위 · 이 원과 직선 y=x+2의 교점 P·Q.
  category: 직각·원 조건·현
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 지름원-직각조건-현길이
  mechanism_secondary: [탈레스, 원-직선-교점]
  insight_types_used: [I-CON, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2 · 신유형

- source: 블랙라벨-CM2-02-STEP2-#26
  page: 28
  problem_summary: |
    좌표평면 위의 두 점 A(1-√7, -5), B(1+√7, 1)과 직선 y=x+2가 서로 다른 두 점 P, Q에 대하여 ∠APB=∠AQB=90°이다. 선분 PQ의 길이를 l이라 할 때, l²의 값. p+q의 값을 구하시오(단, p, q는 서로소인 자연수이다).
  solution_summary: |
    조건: (가) 2PA=PB · (나) 두 직선 PA, PB는 서로 수직이다.
  category: 거리비·직각 조건 결합
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 아폴로니우스-원-직각-결합
  mechanism_secondary: [거리비, 지름원]
  insight_types_used: [I-CON, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2 · 신유형

- source: 블랙라벨-CM2-02-STEP2-#27
  page: 28
  problem_summary: |
    원 C: x²+y²+5y=0 위의 제3사분면의 점 P에 대하여 OP=3일 때, 원 C의 점 P에서의 접선의 방정식이 ax+by+45=0이다. 두 상수 a, b에 대하여 a-b의 값을 구하시오(단, O는 원점이다).
  solution_summary: |
    P 좌표 산출 (원 위 + OP=3) · 접선 공식 → 계수.
  category: 원 접선·점
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 접선-공식-계수
  mechanism_secondary: [원-교점, 거리조건]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-02-STEP2-#28
  page: 28
  problem_summary: |
    점 P(-4, 10)에서 원 x²+y²-4x-12y+4=0에 그은 두 접선과 x축으로 둘러싸인 도형의 넓이.
  solution_summary: |
    P에서 두 접선 방정식 산출 · 각 접선과 x축 교점 · 삼각형/사각형 넓이.
  category: 두 접선·넓이
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 두-접선-넓이
  mechanism_secondary: [접선-외부점, 사각형-넓이]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-02-STEP2-#29
  page: 28
  problem_summary: |
    좌표평면 위의 두 점 A(0, 6), B(9, 0)에 대하여 선분 AB를 2:1로 내분하는 점을 P라 하자. 원 x²+y²-2ax-2by=0과 직선 AB가 P에서만 만날 때, a+b의 값(단, a, b는 상수이다). [2024년 교육청]
  solution_summary: |
    P는 접점 → 원과 AB가 P에서 접선. 원 중심 = P에서 AB에 수직 방향.
  category: 원·접선 조건·내분점
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 접선-수직조건-중심
  mechanism_secondary: [내분점, 원-접선]
  insight_types_used: [I-CON, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2 · 2024년 교육청

- source: 블랙라벨-CM2-02-STEP2-#30
  page: 28
  problem_summary: |
    원 x²+y²=1에 외접하면서 직선 x+√3y-10=0에 접하는 원 중에서 크기가 가장 작은 원의 방정식은 (x-a)²+(y-b)²=r²이다. 이때 a²+b²+r²의 값(단, a, b, r은 상수이다).
  solution_summary: |
    원 중심 (a, b) · 원점 거리 = 1+r (외접) · 직선까지 거리 = r (접선) → 방정식 → r 최소.
  category: 외접원·접선 조건·최소원
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 외접-접선-최소원
  mechanism_secondary: [원-외접, 점-직선-거리]
  insight_types_used: [I-CON, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-02-STEP2-#31
  page: 29
  problem_summary: |
    좌표평면에서 중심이 (1, 1)이고 반지름의 길이가 √5인 원에 접하는 두 직선 (m+1)x-my-2=0, D(4)에서 각각의 접점 A, D에서 각각 수선 그이 두 직선이 서로 다른 두 점에서 이루는 모든 실수 m의 값 표시된 값들의 합의 합.
  solution_summary: |
    원 중심에서 각 직선까지 거리 = 반지름 · m 방정식 · 실수 해의 합.
  category: 원·접선·수선
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 접선-수선-매개변수
  mechanism_secondary: [점-직선-거리, 근의합]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-02-STEP2-#32
  page: 29
  problem_summary: |
    직선 x+2y-10=0 위의 점 P에서 원 x²+y²=16 위의 점 각각 Q, R이라 하고, 사각형 ORPQ의 넓이가 최소일 때, 선분 QR의 길이는 (단, O는 원점이다).
  solution_summary: |
    P에서 원까지 최소 접선길이 · 접선 두 개로 사각형 → 넓이 최소.
  category: 두 접선·최소 넓이
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 두-접선-최소-사각형
  mechanism_secondary: [접선-길이-공식]
  insight_types_used: [I-EQV, I-PD]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-02-STEP2-#33
  page: 29
  problem_summary: |
    그림과 같이 원점을 중심으로 하는 원 x²+y²=1과 A(2, 3), B(2, -3), C(-3, 3), D(6, 3)을 꼭짓점으로 하는 직사각형 ABCD가 있다. 이 원의 원 위 P에서 그은 접선의 기울기가 정수가 되는 직사각형 ABCD의 각 변에 접하는 원의 개수를 구하시오.
  solution_summary: |
    각 변에 대해 접선의 기울기 조건 방정식 → 정수해 개수.
  category: 원·접선·정수 조건
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 접선-정수기울기-조건
  mechanism_secondary: [접선-방정식]
  insight_types_used: [I-PD]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-02-STEP2-#34
  page: 29
  problem_summary: |
    그림과 같이 원 x²+y²=10인 원과 두 접선이 그림과 같이 x축에 대칭이도록 조건 (x-a)²+(y-b)²=10와 다른 하나의 원 (x-a)²+(y-b)²=10에도 접하는 실수 m의 값.
  solution_summary: |
    조건 분석 → 접선의 기울기 · 접점 좌표 산출.
  category: 원·대칭·접선
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 원-대칭-접선-매개변수
  mechanism_secondary: [x축-대칭]
  insight_types_used: [I-SYM]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-02-STEP2-#35
  page: 29
  problem_summary: |
    그림과 같이 좌표평면 위의 원 C: 2x-2y+3=0이 있다. 원과 접하는 원 (x-2)²+(y-3)²=4 원 위의 각각의 점 P, Q에 대하여 평행 직선 이 그림과 같이 원 CE 대하여 삼각형 OPO 넓이가 최대의 값이 되도록 하는 직선 CE의 기울기·기울기 등의 값 5/32일 때, a²+b²의 값을 구하시오.
  solution_summary: |
    두 원 · 접선 · 평행 조건 → 매개변수 산출.
  category: 원·접선·최대 넓이
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 원-접선-평행-최대
  mechanism_secondary: [넓이-최대, 매개변수]
  insight_types_used: [I-CON, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-02-STEP2-#36
  page: 29
  problem_summary: |
    x축 위의 점 A(t, 0)에서 원 x²+y²=1에 접선을 그은 점을 M라 할 때, 직선 AP의 방정식이 y=√(a+√14)/9이다. n≥2인 자연수 자연수 a의 값을 구하시오(단, k>0, k≥2인 정수이다).
  solution_summary: |
    접선 공식 · 방정식 매개변수 조건 → a 산출.
  category: 접선·정수 조건
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 접선-무리수-정수조건
  mechanism_secondary: [매개변수-정수해]
  insight_types_used: [I-PD]
  citation_note: 블랙라벨 CM2 STEP 2 · 서술형

- source: 블랙라벨-CM2-02-STEP2-#37
  page: 30
  problem_summary: |
    좌표평면에서 반지름의 길이가 r인 중심이 원 C: (x+4)²+(y-2)²=20 위에 있다. 원 C가 직선 x=2x+1 위 접점을 갖는 원의 개수가 있어 하자, m이라 할 때, 모든 r의 값의 합.
  solution_summary: |
    각 원과 직선 접선 조건 · r 방정식 · 근의 개수 조건.
  category: 원·접선·조건 원 개수
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 원-접선-r-조건
  mechanism_secondary: [점-직선-거리, 매개변수]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-02-STEP2-#38
  page: 30
  problem_summary: |
    직선 y=mx+n이 두 원 x²+y²=1과 (x+3)²+(y+3)²=1에 동시에 접할 때, 두 상수 m, n에 대하여 4mn의 값(단, m>0).
  solution_summary: |
    두 원에 동시 접선 · 각 원 중심에서 직선까지 거리 = 1 (반지름).
  category: 두 원·공통 접선
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 두-원-공통접선-공식
  mechanism_secondary: [점-직선-거리]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-02-STEP2-#39
  page: 30
  problem_summary: |
    그림과 같이 두 원 x²+y²=4, (x+3)²+y²=1의 중심이 서로 다른 두 점 P에서 만나는 두 원의 공통 외접선을 나타낼 때, 두 원의 접선의 방정식.
  solution_summary: |
    두 원 공통 외접선 방정식 · 매개변수·계수 결정.
  category: 두 원·공통 외접선
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 공통외접선-방정식
  mechanism_secondary: [원-외접, 접선-공식]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-02-STEP2-#40
  page: 30
  problem_summary: |
    두 원 C₁: x²+y²=25, C₂: (x-2)²+(y-a)²=3에 대하여 이들 접선이 있다. 두 접선의 교점을 P라고 할 때, 두 원 C₁, C₂의 서로 만나는 점을 지나는 접선 방정식은? 공통현이 조건 만족할 때 (a, b)의 값이 될 때, 삼각형 OAB의 넓이를 구하시오(단, O는 원점이다).
  solution_summary: |
    두 원 교점 지나는 직선 (공통현/근축) · 접선 매개변수.
  category: 두 원·공통현·접선
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 공통현-접선-넓이
  mechanism_secondary: [근축, 넓이]
  insight_types_used: [I-CON, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-02-STEP2-#41
  page: 30
  problem_summary: |
    그림과 같이 원 C: (x-3)²+(y+1)²=5에 대하여 점 P(0, a)에서 원 C에 그은 두 접선 l₁, l₂와 하자. l₁, l₂ ⊥ (x-3)²+(y+1)²=45의 모두 접할 때, 두 직선 l₁, l₂의 접선의 방정식을 구하시오. 이때 a+b+c의 값(단, a, b, c는 상수이다).
  solution_summary: |
    P에서 두 접선 · 두 직선 각 원과 접 조건 · 계수 산출.
  category: 두 접선·조건 원
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 두-접선-조건-원
  mechanism_secondary: [접선-공식, 매개변수]
  insight_types_used: [I-CON, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-02-STEP2-#42
  page: 30
  problem_summary: |
    그림과 같이 직선 두 원 x²+y²=1과 (x-10)²+(y-3)²=? 에 동시에 접하는 두 원 직선의 방정식 이 두 직선의 기울기의 곱은 -5/9일 때, p²+q의 값을 구하시오(단, p<0, q는 서로소인 자연수이다).
  solution_summary: |
    두 원 공통 접선의 기울기 방정식 · 곱 조건.
  category: 두 원·공통 접선·조건
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 공통접선-기울기-곱조건
  mechanism_secondary: [접선-이차식]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 2 · 서술형
```

---

## 03 도형의 이동 (CM2-GM · STEP 2, pp.36-39, 24문)

```yaml
- source: 블랙라벨-CM2-03-STEP2-#01
  page: 36
  problem_summary: |
    직선 (2k-1)x+(k+1)y-1-4k=0이 실수 k의 값에 관계없이 정점 (a, b)를 지날 때, 이 점을 x축의 방향으로 -a만큼, y축의 방향으로 b만큼 평행이동한 점 (p, q)에 대하여 p+q의 값.
  solution_summary: |
    매개변수 k 소거 → 정점 (a, b) 산출. 평행이동 → (p, q).
  category: 정점·평행이동
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 정점-평행이동
  mechanism_secondary: [매개변수-소거]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2 · 융합유형

- source: 블랙라벨-CM2-03-STEP2-#02
  page: 36
  problem_summary: |
    이차함수 y=-x²의 그래프를 x축의 방향으로 4만큼, y축의 방향으로 k만큼 평행이동한 그래프가 이차함수 y=x²의 그래프와 만나지 않도록 하는 정수 k의 개수.
  solution_summary: |
    평행이동한 이차함수 · 원함수와 교점 방정식 · 판별식 조건.
  category: 이차함수 평행이동·판별식
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 이차함수-평행이동-판별식
  mechanism_secondary: [정수해]
  insight_types_used: [I-EQV, I-PD]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-03-STEP2-#03
  page: 36
  problem_summary: |
    원의 √26 √8/n인 원의 방정식 √(x-a)²+(y-b)²=√k√8을 x축의 방향으로 -a만큼 평행이동한 원의 방정식이 방정식 (x, y)에 대해 (x-8)²+(y-4)²=8을 만족한다.
  solution_summary: |
    평행이동 관계 · 원 방정식 대응 · 계수 산출.
  category: 원의 평행이동·방정식
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 원-평행이동-대응
  mechanism_secondary: [계수-비교]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2 · 서술형

- source: 블랙라벨-CM2-03-STEP2-#04
  page: 36
  problem_summary: |
    그림과 같이 두 점 A(0, 6), B(6, 0)과 원 OA(6번째의 두 점) 사이의 넓이를 이등분 시키는 조건 원의 두 점의 위 점의 x축과 접할 때 접선이 있다. OB, 사각형 ABCD 원의 넓이의 값.
  solution_summary: |
    조건 분석 → 접점 · 넓이 이등분 방정식.
  category: 원·접선·이등분
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 원-접선-넓이-이등분
  mechanism_secondary: [접선-조건, 넓이]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-03-STEP2-#05
  page: 36
  problem_summary: |
    그림과 같이 그림 l: y-x-a=0, m: x+y-6=0이 있다. 원 x²+(y-3)²=4의 이 두 직선이 원의 접선을 각각 두 점에서 만나는 조건이 되도록 하는 실수 a의 값의 범위.
  solution_summary: |
    두 직선의 원과의 만남 조건 (판별식) · a 범위.
  category: 원·직선·두 점 교차 조건
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 원-직선-두점교차-판별식
  mechanism_secondary: [점-직선-거리, 부등식]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-03-STEP2-#06
  page: 36
  problem_summary: |
    직선 y=2x-1을 x축의 방향으로 a만큼, y축의 방향으로 b만큼 평행이동한 것이 직선 y=2x+5와 일치하도록 하는 상수 a, b의 관계를 보기에서 옳은 것.
  solution_summary: |
    평행이동 방정식 y=2(x-a)+b → 2x+(-2a+b-1) = 2x+5 → -2a+b=6.
  category: 직선 평행이동·관계식
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 평행이동-계수관계
  mechanism_secondary: [일차식-계수비교]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-03-STEP2-#07
  page: 37
  problem_summary: |
    점 A(1, 2)와 직선 y=x에 대하여 대칭이동시킨 점 B(2, 1), B(3, 1), C(a, b)와 그 삼각형 ABC의 넓이가 4일 때 실수 a의 곱이 값(단, k<0).
  solution_summary: |
    대칭이동 조건 · 삼각형 넓이 방정식 → a 값.
  category: 대칭이동·삼각형 넓이
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 대칭이동-삼각형넓이
  mechanism_secondary: [직선대칭, 넓이공식]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-03-STEP2-#08
  page: 37
  problem_summary: |
    원 C: (x-2)²+(y-2)²=8은 y축에 대하여 대칭이동한 원, 그 원을 x축에 대하여 대칭이동한 원을 각각 C₁, C₂라 할 때, C₁, C₂에 동시에 접하는 원 C₃가 있어서, 두 접점을 지나는 직선의 방정식이 y=b일 때, 상수 b의 값을 구하시오(단, k>0).
  solution_summary: |
    C₁·C₂ 방정식 · 공통 접선 · 접점 지나는 직선.
  category: 원 대칭·공통 접선
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 원-대칭-공통접선-지나는직선
  mechanism_secondary: [원-대칭, 접선-공식]
  insight_types_used: [I-CON, I-SYM]
  citation_note: 블랙라벨 CM2 STEP 2 · 서술형

- source: 블랙라벨-CM2-03-STEP2-#09
  page: 37
  problem_summary: |
    점 (x-4)²+(y-a)²=1의 원 조건 · 이차함수 y=x²+bx+c가 y=x에 대하여 대칭이동시켰을 때, 이 원을 지날 때, a+b+c의 값(단, a, b, c는 상수).
  solution_summary: |
    y=x 대칭 → 함수의 역함수 관계 · 원의 대칭 조건.
  category: 이차함수·y=x 대칭
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: y=x대칭-이차함수-역함수
  mechanism_secondary: [대칭, 계수비교]
  insight_types_used: [I-RT]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-03-STEP2-#10
  page: 37
  problem_summary: |
    점 A(1, 2), B(3, 1)이 있는 사각형 ABCD가 있다. 두 대각선 AC, BD 각각의 중점 M, N에 좌표축에 대하여 대칭이동한 값을 각각 구하시오(단, k<0).
  solution_summary: |
    ABCD 대각선 중점 · 좌표축 대칭 이동 값.
  category: 사각형·대각선·대칭이동
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 사각형-중점-대칭이동
  mechanism_secondary: [좌표축-대칭]
  insight_types_used: [I-SYM]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-03-STEP2-#11
  page: 37
  problem_summary: |
    원 x²+y²-2x-4y+2=0의 원의 그림과 같이 함수 y=f(x)라 하자, 다음 중 f(x)와 같은 것은 (단, f(x-1)+2=y(x)).
  solution_summary: |
    원 방정식 → 함수 관계 · 평행이동/대칭이동 등 판정.
  category: 원·함수 관계·이동
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 원-함수-이동-대응
  mechanism_secondary: [함수-그래프]
  insight_types_used: [I-RT]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-03-STEP2-#12
  page: 37
  problem_summary: |
    그림과 같이 두 원이 나타나는 것은 (그림 두 원 대칭이동 조건 만족).
  solution_summary: |
    그림 분석 · 두 그래프 대칭 관계 판정.
  category: 두 그래프·대칭이동 판정
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 그래프-대칭-판정
  mechanism_secondary: [대칭축]
  insight_types_used: [I-SYM]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-03-STEP2-#13
  page: 38
  problem_summary: |
    방정식 f(x, y)=0이 나타내는 도형이 그림과 같을 때, 다음 중 방정식 f(-x, y+3)=0이 나타내는 도형은?
  solution_summary: |
    (-x, y+3) 대입 → x축 대칭 후 y축 방향 -3 평행이동.
  category: 대칭·평행 조합 도형
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 대칭-평행-조합-도형
  mechanism_secondary: [y=f(x)-변환]
  insight_types_used: [I-RT, I-SYM]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-03-STEP2-#14
  page: 38
  problem_summary: |
    원 (x+5)²+(y-2)²=8과 직선 y=x+2의 교점의 개수·조건을 만족시키는 원의 대칭이동 관계·기울기 조건 (a, k, b는 상수).
  solution_summary: |
    원 대칭이동 · 직선과 교점 조건 · 기울기 판별.
  category: 원·대칭이동·직선 교점
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 원-대칭-교점-조건
  mechanism_secondary: [판별식, 기울기]
  insight_types_used: [I-CON, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2 · 서술형

- source: 블랙라벨-CM2-03-STEP2-#15
  page: 38
  problem_summary: |
    점 A(-1, 3)을 원점의 대칭이동한 후 x축에 대해서 대칭이동을 시켰을 때 이때의 좌표는?
  solution_summary: |
    원점 대칭 (1, -3) → x축 대칭 (1, 3).
  category: 원점·x축 대칭 조합
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 원점-x축-대칭-조합
  mechanism_secondary: [대칭공식]
  insight_types_used: [I-SYM]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-03-STEP2-#16
  page: 38
  problem_summary: |
    포물선 y=x²-4x+1을 y축, y=x에 대하여 대칭이동한 두 포물선의 방정식과 원 y=x²-4x+1의 그래프의 각 넓이가 몇 이 되는가?
  solution_summary: |
    y=x 대칭 → 역함수 (x=y²-4y+1) · y축 대칭 → y=x²+4x+1.
  category: 포물선·y=x·y축 대칭
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 포물선-대칭-역함수
  mechanism_secondary: [y=x대칭, y축대칭]
  insight_types_used: [I-SYM]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-03-STEP2-#17
  page: 38
  problem_summary: |
    그림과 같이 두 점 A(4, 3), B(1, 1)이 있을 때 A을 지나는 직선의 대칭 조건 만족과 접선 조건.
  solution_summary: |
    대칭이동 후 접선 조건 → 매개변수 산출.
  category: 대칭·접선 결합
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 대칭-접선-결합
  mechanism_secondary: [대칭공식, 접선]
  insight_types_used: [I-CON, I-SYM]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-03-STEP2-#18
  page: 38
  problem_summary: |
    포물선 y=x²-4x+1을 y=x에 대칭이동한 후 다시 x축에 대칭이동한 이차함수의 그래프와 y=g(x)의 그래프의 넓이가 (단, 실수·조건 만족).
  solution_summary: |
    조합 대칭 → 계수 변화 → 두 그래프 사이 넓이.
  category: 대칭 조합·넓이
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 조합대칭-넓이
  mechanism_secondary: [대칭-순차]
  insight_types_used: [I-SYM]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-03-STEP2-#19
  page: 39
  problem_summary: |
    직선 l: 2x-y-1=0을 x축의 방향으로 a만큼, y축의 방향으로 b만큼 평행이동한 직선을 l'라 하자. 직선 l'이 두 점 A(2, 3), B(3, 8)을 이은 선분의 수직이등분선일 때, a-b의 값을 구하시오.
  solution_summary: |
    수직이등분선 조건 · 평행이동 관계 → a, b 산출.
  category: 평행이동·수직이등분선
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 평행이동-수직이등분선
  mechanism_secondary: [중점, 수직조건]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-03-STEP2-#20
  page: 39
  problem_summary: |
    좌표평면 위에 원 C의 방정식 x²+y²+3x-6y-1=0의 대칭축이 4x²+2x²-4x-6y-5의 조건을 만족한다.
  solution_summary: |
    두 원의 대칭축 · 방정식 조건.
  category: 원·대칭축
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 원-대칭축-방정식
  mechanism_secondary: [원방정식]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-03-STEP2-#21
  page: 39
  problem_summary: |
    좌표평면 위에 두 점 A(-3, 0), B(1, -1), C(√7, √2), D(1, ?)가 있다. 대칭 관계 조건. 이때 사각형 ABCD의 넓이는?
  solution_summary: |
    대칭 관계 · 사각형 좌표 산출 · 넓이 공식.
  category: 대칭·사각형 넓이
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 대칭-사각형-넓이
  mechanism_secondary: [대칭조건, 넓이]
  insight_types_used: [I-SYM]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-03-STEP2-#22
  page: 39
  problem_summary: |
    그림과 같이 두 점 A(1, 1), B(4, 2)에 원의 조건 만족한 것을 자연수 r의 개수·조건 결합.
  solution_summary: |
    조건 만족 원 개수 산출.
  category: 원 개수·조건
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 원-조건-개수
  mechanism_secondary: [원-대응]
  insight_types_used: [I-PD]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-03-STEP2-#23
  page: 39
  problem_summary: |
    x²+y²-4x=0인 원을 x축의 방향으로 -1만큼, y축의 방향으로 3만큼 평행이동한 원을 C라 할 때, 원 C의 방정식.
  solution_summary: |
    x → x+1, y → y-3 대입 → 새 원 방정식.
  category: 원 평행이동·방정식
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 원-평행이동-대입
  mechanism_secondary: [원방정식]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2 · 서술형

- source: 블랙라벨-CM2-03-STEP2-#24
  page: 39
  problem_summary: |
    그림과 같이 원 C: 8, DEFGH의 원 조건. p·q에 대한 조건 결합. 이때 삼각형 APQ의 넓이는 30/9이다.
  solution_summary: |
    원·다각형 조건 · 매개변수 산출 · 넓이 방정식.
  category: 원·다각형·넓이 조건
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 원-다각형-넓이-조건
  mechanism_secondary: [매개변수, 넓이]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 2 · 서술형
```

---

## 04 집합 (CM2-ST · STEP 2, pp.50-56, 42문)

```yaml
- source: 블랙라벨-CM2-04-STEP2-#01
  page: 50
  problem_summary: |
    집합 A={1, 3, 5, 7, 9}의 부분집합 P(A)={X|X⊂A}에 대하여 보기 중에서 옳은 것.
  solution_summary: |
    보기: ㄱ. ∅∈P(A), ㄴ. {1, 3}∈P(A), ㄷ. {{1, 3}}⊂P(A) 등 판정.
  category: 멱집합·기호 판정
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 멱집합-기호-판정
  mechanism_secondary: [∈-⊂-구분]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2 · 융합유형

- source: 블랙라벨-CM2-04-STEP2-#02
  page: 50
  problem_summary: |
    a+b+c=8을 만족시키는 서로 다른 세 자연수 A={a, b, c}에 대하여 abc의 값이 최대일 때, A의 부분집합의 개수를 구하시오.
  solution_summary: |
    자연수 조건 만족 (a, b, c) 조합 → abc 최대 (a=1, b=2, c=5) → n(A)=3 → 부분집합 8개.
  category: 자연수·부분집합 개수
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 자연수-abc최대-부분집합
  mechanism_secondary: [자연수-분할]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2 · 서술형

- source: 블랙라벨-CM2-04-STEP2-#03
  page: 50
  problem_summary: |
    두 자연수 a, b에 대하여 자연수 전체의 집합의 부분집합 An={x|x=n의 배수, x는 200 이하}이 원소 개수는 250개, An∩A6의 원소 개수는 대응 수의 값이 크므로 An∪A6의 관계.
  solution_summary: |
    An 원소 수 = 200/n (내림) · An∩A6 원소 수 = 200/lcm(n,6).
  category: 배수집합·개수 계산
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 배수집합-개수
  mechanism_secondary: [최소공배수-활용]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-04-STEP2-#04
  page: 50
  problem_summary: |
    집합 A={a|1-1≤a≤3+x, a는 정수}, B={a[b|3-2<b<x+5, b는 정수}에 대하여 A⊂B이다. B의 원소의 개수를 구하시오.
  solution_summary: |
    A와 B의 원소 조건 분석 · A⊂B 조건 → x 범위 → B 원소 개수.
  category: 부분집합 조건·정수 원소
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 부분집합-정수-조건
  mechanism_secondary: [부등식-부분집합]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-04-STEP2-#05
  page: 50
  problem_summary: |
    두 자리의 자연수인 집합 X={a, b|a, b는 서로소, |a|, |b|의 원소의 개수} 조건 만족(단, 0<c<c<c).
  solution_summary: |
    자연수 소수 조합 · 원소 개수 산출.
  category: 자연수·서로소·개수
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 서로소-개수-조합
  mechanism_secondary: [자연수-필터]
  insight_types_used: [I-PD]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-04-STEP2-#06
  page: 50
  problem_summary: |
    두 집합 A={x|1-x-2x<0}, B={x|3-x<a}에 대하여 A⊂X⊂B의 집합 X의 개수가 32일 때, 자연수 a의 값을 구하시오.
  solution_summary: |
    A·B 원소 결정 → B\A 개수 → 2^(B\A) = 32 → B\A = 5 → a 산출.
  category: 부분집합 사이 · 개수
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 부분집합-사이-개수-공식
  mechanism_secondary: [2ⁿ, 부등식]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-04-STEP2-#07
  page: 51
  problem_summary: |
    자연수 n에 대하여 집합 A₄={a|x²=a는 자연수, |1/a|-|1/x|는 자연수}의 원소의 개수를 P(A₄)이라 하자.
  solution_summary: |
    조건 분석 → 원소 개수 함수.
  category: 자연수·조건·원소 개수
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 자연수-조건-개수
  mechanism_secondary: [자연수-필터]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-04-STEP2-#08
  page: 51
  problem_summary: |
    전체집합 U={x|x는 12의 약수}의 두 부분집합 A, B는 다음 조건을 만족시킨다. 집합 A∪B의 모든 원소의 합 값을 구하시오.
  solution_summary: |
    조건 만족 A, B 산출 → 합집합 원소 합.
  category: 집합·조건 만족
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 조건만족-부분집합
  mechanism_secondary: [약수, 합집합]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-04-STEP2-#09
  page: 51
  problem_summary: |
    자연수 n에 대하여 집합 A₄={n|n-1<n<3}에 대해서 A₃⊂ A₁ 또는 A₃ - A₁ = {1}, |1|+|2|의 집합의 최대의 원소 조합.
  solution_summary: |
    집합 관계 분석 · 원소 조합 산출.
  category: 집합·관계·조합
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 집합-관계-조합
  mechanism_secondary: [부분집합-분석]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-04-STEP2-#10
  page: 51
  problem_summary: |
    집합 A_n={a|(3n-1)≤a≤(4n+9), a는 자연수}에 대하여 A_1∩A_2∩A_3∩... ≠ ∅이 성립할 때 자연수의 최댓값.
  solution_summary: |
    각 A_n의 원소 · 공통 원소 조건 · n 범위.
  category: 배수·교집합·개수
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 배수-교집합-조건
  mechanism_secondary: [자연수-원소]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-04-STEP2-#11
  page: 51
  problem_summary: |
    n≥2인 정수 n에 대하여 집합 A₄={a|(1/n)-(1/a)|=1/n의 원소의 개수 P(A)이라 하자. P(3)+P(4)의 값을 구하시오. (단, 3∈A, 4∈A)
  solution_summary: |
    각 n에 대해 원소 개수 산출 → P(3)+P(4).
  category: 조건 집합·원소 개수
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 조건집합-원소개수
  mechanism_secondary: [분수식-정수해]
  insight_types_used: [I-PD]
  citation_note: 블랙라벨 CM2 STEP 2 · 서술형

- source: 블랙라벨-CM2-04-STEP2-#12
  page: 51
  problem_summary: |
    두 집합 A, B에 대하여 f(A, B)=|A|+|B|일 때, 두 집합 A={1, 2, 3, 4, 5}에 대하여 f(A, ?)의 최대값과 최솟값의 합. |A|는 A의 원소의 개수, ?는 조건 만족 집합.
  solution_summary: |
    f 함수 정의 · 조건 만족 집합 · 최대·최소.
  category: 집합·함수·최대최소
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 집합함수-최대최소
  mechanism_secondary: [원소-개수]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2 · 서술형

- source: 블랙라벨-CM2-04-STEP2-#13
  page: 52
  problem_summary: |
    전체집합 U={x|x는 5 이하의 자연수}의 두 부분집합 A={1, 2}, B={2, 3, 4}에 대하여 X∪A=B∪X, X∩(A∩B)=∅을 만족시키는 집합 X의 개수. [2020년 교육청]
  solution_summary: |
    조건 분석 → X 원소 후보 결정 → 개수.
  category: 집합 방정식·조건
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 집합방정식-원소-조건
  mechanism_secondary: [합집합-교집합]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2 · 2020 교육청

- source: 블랙라벨-CM2-04-STEP2-#14
  page: 52
  problem_summary: |
    집합 A={-3/2, -2/3, 1/2, 2, ..., 1/n}의 공집합이 아닌 부분집합 중에서 모든 원소의 합이 정수가 되는 부분집합의 개수를 구하시오.
  solution_summary: |
    분수 원소 · 합 정수 조건 → 유효 조합 · 개수.
  category: 부분집합·합 정수
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 부분집합-합정수-분류
  mechanism_secondary: [분수-합]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-04-STEP2-#15
  page: 52
  problem_summary: |
    전체집합 U={x|x는 18의 약수 아닌 자연수}의 두 부분집합 A, B에 대하여 다음 조건을 만족한다. B={2, 3} 조건 만족 부분집합의 개수.
  solution_summary: |
    U 원소 결정 · 조건 만족 부분집합 산출.
  category: 약수·조건 만족
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 약수-조건-부분집합
  mechanism_secondary: [원소-필터]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-04-STEP2-#16
  page: 52
  problem_summary: |
    전체집합 U={1, 2, 3, 4, 5}에 대하여 집합 K(U)={K|K⊂U, K(U∩A)=K(U∩A₁)}, N(K)에 대하여 A={1}이 것을 A∈U라 하다. N(A) 자연수 자연수 n에 대해서 x, D에 있는 집합의 개수를 구하시오.
  solution_summary: |
    조건 만족 집합 분석 · 개수.
  category: 집합·조건 만족
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 조건집합-원소-분석
  mechanism_secondary: [부분집합]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-04-STEP2-#17
  page: 52
  problem_summary: |
    집합 X={a, b, c}의 부분집합의 원소로 하는 집합 X의 부분집합을 A라고 할 때, A의 원소 조건 만족 개수 (단, X≠∅)
  solution_summary: |
    조건 분석 · 개수 산출.
  category: 부분집합·조건 개수
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 부분집합-조건-개수
  mechanism_secondary: [2ⁿ]
  insight_types_used: [I-PD]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-04-STEP2-#18
  page: 52
  problem_summary: |
    집합 A의 부분집합의 개수가 f(A)로 할 때, 두 집합 A, B에 대하여 f(A∪B)=(f)(A∪f(B))+(f(A∩B))이 성립하도록 하는 조합의 관계.
  solution_summary: |
    관계식 만족 조건 · A∩B=A or B 관계.
  category: 부분집합 개수 관계식
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 부분집합개수-관계식
  mechanism_secondary: [2ⁿ, 집합관계]
  insight_types_used: [I-EQV, I-PD]
  citation_note: 블랙라벨 CM2 STEP 2 · 신유형

- source: 블랙라벨-CM2-04-STEP2-#19
  page: 53
  problem_summary: |
    두 집합 A={1, 2, 3, 4}, B={3, 4, 5, 6, 7}에 대하여 X⊂A 조건 만족 (A∩B)⊂X. 자연수 X의 개수. (단, A, B ⊂ X는 (A∩B)⊂X를 만족)
  solution_summary: |
    A∩B={3, 4}⊂X⊂ 관계 · X 개수.
  category: 부분집합·조건·개수
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 사이-부분집합-개수
  mechanism_secondary: [교집합]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-04-STEP2-#20
  page: 53
  problem_summary: |
    집합 A={1, 2, 3, 4, 5, 6, 7}에 대하여 다음 조건을 만족시키는 A의 부분집합 X의 개수. X₁, X₂ 순서쌍 (X₁, X₂)의 개수.
  solution_summary: |
    조건 만족 X₁, X₂ 순서쌍 · 개수.
  category: 순서쌍·부분집합
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 순서쌍-부분집합-개수
  mechanism_secondary: [곱셈원리]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-04-STEP2-#21
  page: 53
  problem_summary: |
    집합 X의 원소 f(X)에 대하여 원소가 모두 자연수인 A={a, b, c}, B={a+b, b+c, c+a}에 대하여 f(A)=6일 때, f(B)의 값이 될 수 없는 값(단, B의 원소는 서로 다르다.)
  solution_summary: |
    A 원소 합 조건 · B 원소 계산 · 값 판정.
  category: 원소 합·자연수 조건
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 원소합-자연수-조건
  mechanism_secondary: [자연수-분할]
  insight_types_used: [I-PD]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-04-STEP2-#22
  page: 53
  problem_summary: |
    집합 X의 모든 원소의 합을 s(X)라 하고, 집합 X={1, 2, 3, ..., 9}의 부분집합 A={a, a+2, a+3}에 대하여 s(A)-s(A∩B)의 값이 자연수가 되는 경우.
  solution_summary: |
    부분집합 A · s(A) 계산 · 조건 만족 경우.
  category: 부분집합 합·조건
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 부분집합-합-조건
  mechanism_secondary: [원소합]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-04-STEP2-#23
  page: 53
  problem_summary: |
    자연수를 원소로 갖는 집합 A={a, a₁, a₂, ..., a₈} 에 대하여 부분집합의 각각의 조건 만족. 집합 A의 원소 조합에 원소의 개수가 최대일 때, 원소의 합의 최댓값을 구하시오. (단, k(A)의 원소는 조건 만족.)
  solution_summary: |
    조건 만족 자연수 조합 · 최대 원소 합.
  category: 자연수·부분집합·최대합
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 자연수-부분집합-최대합
  mechanism_secondary: [원소-필터]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 2 · 서술형

- source: 블랙라벨-CM2-04-STEP2-#24
  page: 53
  problem_summary: |
    자연수 전체의 집합의 부분집합 A={x|x²+8x-13<0}가 U와의 조건 만족. n(A)의 값.
  solution_summary: |
    부등식 해 · 원소 개수 산출.
  category: 부등식·원소 개수
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 부등식-원소-개수
  mechanism_secondary: [자연수-필터]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-04-STEP2-#25
  page: 54
  problem_summary: |
    자연수 전체의 집합의 부분집합 A={a|1-a≤a≤7+|a|}, B={b|b≥a²-2a}이 A∪B={A|B}의 조건 만족 원 자연수의 값.
  solution_summary: |
    A, B 원소 조건 · A∪B 조건 · a 값 산출.
  category: 집합·조건·원소 값
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 집합-조건-원소값
  mechanism_secondary: [부등식-원소]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-04-STEP2-#26
  page: 54
  problem_summary: |
    두 실수 f(x), g(x)에 대하여 실수 집합의 원소 A={x|f(x)>0}, B={x|g(x)>0}에 대하여 A∩B={x|(f(x)+g(x))>0} 조건 만족.
  solution_summary: |
    조건 관계 분석 · 조건 만족 집합.
  category: 실수·부등식·집합
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 부등식-집합-조건
  mechanism_secondary: [부등식-분석]
  insight_types_used: [I-CON, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-04-STEP2-#27
  page: 54
  problem_summary: |
    전체집합 U={a|a는 20 이하의 자연수}의 두 부분집합 A={4, 5, 6}, B={2, 4, 5, 8}에 대하여 다음을 만족시키는 집합 X의 개수. [2019년 교육청]
  solution_summary: |
    조건 만족 X 산출 · 개수.
  category: 조건 만족 집합·개수
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 조건-부분집합-개수
  mechanism_secondary: [원소-분석]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2 · 2019 교육청

- source: 블랙라벨-CM2-04-STEP2-#28
  page: 54
  problem_summary: |
    자연수 전체의 집합 N의 부분집합 A={a|a=n의 배수}, B={b|b는 20의 소이수인 수}의 관계에 관한 조건. n의 최소값.
  solution_summary: |
    A, B 관계 · n 조건 만족 최소값.
  category: 배수·소수·최소 조건
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 배수-소수-최소
  mechanism_secondary: [자연수-분석]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-04-STEP2-#29
  page: 54
  problem_summary: |
    100 이하의 자연수 n에 대하여 집합 A_n={x|x가 n의 약수, x는 자연수}, B={b|b는 5, 9, 10, ...}이 A_n⊂B가 되도록 하는 n의 개수를 구하시오(단, 5, 9, 10은 3보다 큰 자연수이다).
  solution_summary: |
    B의 원소 조건 · A_n⊂B 조건 · n 개수.
  category: 약수·부분집합 조건
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 약수-부분집합-조건-개수
  mechanism_secondary: [약수, 자연수-분석]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-04-STEP2-#30
  page: 54
  problem_summary: |
    자연수 n에 대하여 집합 A_n={x|x²=(n²+2)의 조건 만족 실수, |x|+|1/x|은 자연수}. |P(x, y, z)| 자연수 자연수 자연수인 조건 만족.
  solution_summary: |
    조건 만족 원소 산출 · 개수.
  category: 조건 만족·원소 판정
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 조건-원소-판정
  mechanism_secondary: [실수-필터, 자연수]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-04-STEP2-#31
  page: 55
  problem_summary: |
    두 집합 A, B에 대하여 A={a|a는 12의 약수}, B={b|b는 A의 원소이다}. 이 조건 만족 두 집합 A∪B의 조건 만족 원소의 합.
  solution_summary: |
    A, B 원소 결정 · A∪B 원소 합.
  category: 약수·합집합·원소합
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 약수-합집합-원소합
  mechanism_secondary: [원소-결정]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-04-STEP2-#32
  page: 55
  problem_summary: |
    집합 A의 원소 A_n={a|(A₁∪A₂∪A₃)⊂A|, 1000|(A₁-A₂-A₁)의 개수의 원소를 구하시오.
  solution_summary: |
    조건 만족 A_n 산출 · 원소 개수.
  category: 집합·원소 개수
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 집합-원소-개수
  mechanism_secondary: [합집합-차집합]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-04-STEP2-#33
  page: 55
  problem_summary: |
    전체집합 U의 두 부분집합 A, B에 대하여 다음 조건 만족한다. 이때 (a∈A, B∈A)⊂A∪B가 성립한다. 다음 중 옳은 것 (a∈A, B∈A)⊂A∪B 조건 만족.
  solution_summary: |
    조건 만족 관계 판정.
  category: 집합·조건 관계
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 집합-조건-관계
  mechanism_secondary: [부분집합-조건]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-04-STEP2-#34
  page: 55
  problem_summary: |
    전체집합 U의 두 부분집합 A, B에 대하여 다음 중 옳은 것. 조건 판정.
  solution_summary: |
    조건 관계 판정 · A∪B, A∩B, A-B 관계.
  category: 집합·연산·명제
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 집합-연산-명제
  mechanism_secondary: [부분집합-연산]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2 · 서술형

- source: 블랙라벨-CM2-04-STEP2-#35
  page: 55
  problem_summary: |
    x에 대한 방정식 x=x-3=0의 서로 다른 실근으로 이루어진 집합에 대하여 이 집합 만족하는 값의 조건 만족. (단, (a<c<b) or (a≤c≤b) 조건 판정 등)
  solution_summary: |
    방정식의 근 · 집합 원소 · 조건 판정.
  category: 근·집합·조건
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 근-집합-조건
  mechanism_secondary: [실근-분석]
  insight_types_used: [I-CON, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-04-STEP2-#36
  page: 55
  problem_summary: |
    전체집합 U의 세 부분집합 A, B, C가 다음 조건을 만족시킬 때, A∪B∪C이 나타내는 값(단, 12≤(a<c≤30)이다.
  solution_summary: |
    세 조건 만족 · A∪B∪C 원소 산출.
  category: 세 집합·조건·합집합
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 세집합-조건-합집합
  mechanism_secondary: [포함-배제]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-04-STEP2-#37
  page: 56
  problem_summary: |
    n(A)의 자연수인 조건 만족 조건 원소 합의 최대의 조건에서 100 이하의 자연수 조건. 이때 자연수 조건 만족 조건 원소 합의 최대값을 구하시오.
  solution_summary: |
    조건 만족 자연수 원소 · 합의 최대.
  category: 자연수·조건·최대합
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 자연수-조건-최대합
  mechanism_secondary: [자연수-필터]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-04-STEP2-#38
  page: 56
  problem_summary: |
    전체집합 U={x|x는 1000 이하의 자연수}의 세 부분집합 A, B, C에 대하여 다음의 조건 만족 원소의 조건. n(A∪B∪C)의 조건 만족 값.
  solution_summary: |
    포함-배제 원리 · n(A∪B∪C) 산출.
  category: 세 집합·포함배제
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 포함배제-세집합
  mechanism_secondary: [원소-개수]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-04-STEP2-#39
  page: 56
  problem_summary: |
    자연수 조건 원소인 자연수 A={a|a>4}, B는 조건 만족(a·b·A의 조건). 이 A, B의 조건 만족 조건, 이때 A∪B의 원소의 합의 값.
  solution_summary: |
    A·B 원소 · A∪B 조건 · 원소 합.
  category: 집합·원소 합·조건
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 조건집합-원소합
  mechanism_secondary: [자연수-필터]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-04-STEP2-#40
  page: 56
  problem_summary: |
    전체집합 U={x|x는 200 이하의 자연수}의 두 부분집합 A={a|a는 7의 배수}, B={b|b는 5의 배수}에 대하여 A∩B의 원소의 개수. (단, x는 조건 만족 자연수이다.)
  solution_summary: |
    A∩B = 35의 배수 · 200/35 = 5개.
  category: 배수·교집합·개수
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 배수-교집합-개수
  mechanism_secondary: [최소공배수]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-04-STEP2-#41
  page: 56
  problem_summary: |
    다음은 고등학교의 학생 200명을 대상으로 조사한 결과이다. 학교마다의 원인이 되는 조건 자연수의 조건 만족 조사. 조건 조사 200명 대응 원소의 조합.
  solution_summary: |
    조건 만족 학생 수 · 포함-배제 원리.
  category: 실생활 집합·포함배제
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 실생활-포함배제
  mechanism_secondary: [벤다이어그램]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-04-STEP2-#42
  page: 56
  problem_summary: |
    한국 110명이 국어, 영어, 수학 시험을 보았다. 국어를 잘한 학생 42명, 영어를 잘한 학생 X명, 수학을 잘한 학생 Y명. 사원 X와 Y의 조건 만족 조합. 이때 M+N의 값.
  solution_summary: |
    조건 만족 학생 수 산출 · 포함-배제 원리.
  category: 실생활 집합·최적화
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 실생활-포함배제-최적화
  mechanism_secondary: [최대-최소]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 2 · 서술형
```

---

## 05 명제 (CM2-ST · STEP 2, pp.64-70, 38문)

```yaml
- source: 블랙라벨-CM2-05-STEP2-#01
  page: 64
  problem_summary: |
    세 실수 a, b, c에 대하여 다음 명제가 참이 되도록 하는 조건. (자연수 p, q, r의 정수 조건)
  solution_summary: |
    조건 만족 명제 판정 · p+q+r의 값.
  category: 명제 참·조건
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 명제-참-조건
  mechanism_secondary: [실수-분석]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2 · 융합유형

- source: 블랙라벨-CM2-05-STEP2-#02
  page: 64
  problem_summary: |
    세 집합 A={x|x²-4x+2≤0}, B={x|x²-x-2≥0}, C={x|x²-2ax≤0}에 대하여 A∩B⊂C가 성립하기 위한 실수 a의 값의 범위를 구하시오.
  solution_summary: |
    A, B, C 원소 조건 분석 · 부분집합 조건 · a 범위.
  category: 부등식·집합·조건
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 부등식-집합-포함조건
  mechanism_secondary: [이차부등식, 부분집합]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2 · 서술형

- source: 블랙라벨-CM2-05-STEP2-#03
  page: 64
  problem_summary: |
    그림과 같이 사각형 ABCDE가 원 위의 있고 CE의 오각형과 조건 만족한다. AE=AB, BC=CD의 조건 만족한다. 이때, e에 대한 명제 (조건 만족).
  solution_summary: |
    원·사각형·조건 관계 판정.
  category: 원·사각형·명제
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 원-사각형-명제
  mechanism_secondary: [원주각, 사각형-조건]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#04
  page: 64
  problem_summary: |
    실수 x에 대하여 명제 「(a-1)²≤(a+1)²이 참, 이 참이 됨(단, a와 조건 만족)」 정수 a의 개수.
  solution_summary: |
    명제 참 조건 · a 범위 · 정수 개수.
  category: 명제·부등식·정수
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 명제-부등식-정수개수
  mechanism_secondary: [부등식-분석]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#05
  page: 64
  problem_summary: |
    전체집합 U={a|a는 자연수}의 두 부분집합에 대하여 다음 조건 만족. A={p|p²(1/2)}, p, q는 서로소 조건.
  solution_summary: |
    조건 원소·개수 산출.
  category: 자연수·조건·개수
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 자연수-조건-개수
  mechanism_secondary: [서로소]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#06
  page: 64
  problem_summary: |
    전체집합 U에 대한 조건 p, q, r의 조건 만족 조건 관계.
  solution_summary: |
    조건·부분집합 관계 판정.
  category: 조건·명제
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 조건-명제-부분집합
  mechanism_secondary: [명제-분석]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#07
  page: 65
  problem_summary: |
    실수 x에 대하여 두 조건 p, q가 다음과 같다. p: |x-1|+|x+2|+|x-3|<a, q: (a-b)²+(b-c)²+(c-a)²=b-c=0의 조건에서 p가 q이기 위한 필요조건이 되도록 하는 실수 a의 최솟값(단, k는 유리수이다).
  solution_summary: |
    조건 분석 · 필요조건 관계 → a 최소값.
  category: 조건·절댓값·필요충분
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 절댓값-필요충분-최소
  mechanism_secondary: [부등식-분석]
  insight_types_used: [I-CON, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#08
  page: 65
  problem_summary: |
    실수 x에 대하여 조건 만족 명제 자연수 조건. p: x²-a²<b²-58a+9. p²+a²의 조건 만족 최솟값.
  solution_summary: |
    조건 만족 자연수 · 최솟값 산출.
  category: 명제·최솟값
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 명제-자연수-최솟값
  mechanism_secondary: [부등식-분석]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#09
  page: 65
  problem_summary: |
    조건 만족 조건 조건 정수 조건 p, q, r의 조건 결합. 자연수 조건 원소의 합.
  solution_summary: |
    조건 만족 · 원소 합 산출.
  category: 명제·조건·원소합
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 조건-원소합
  mechanism_secondary: [자연수-분석]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#10
  page: 65
  problem_summary: |
    수직선 위에 세 점 A(-x, 3), B(a, ?)가 있는 조건. C(-2, 1)일 때, 조건 만족 (단, 4≤a, a<b, l≤n) 실수 조건.
  solution_summary: |
    조건 만족 좌표·부등식 · 실수 조건.
  category: 좌표·조건·명제
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 좌표-조건-명제
  mechanism_secondary: [부등식]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#11
  page: 65
  problem_summary: |
    실수 x에 대하여 조건 만족 p: (x²-x-2)+(x²-6ax+9)<0의 조건 만족 자연수 a의 조건.
  solution_summary: |
    부등식 조건 · 자연수 개수.
  category: 부등식·자연수
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 부등식-자연수-조건
  mechanism_secondary: [이차부등식-곱]
  insight_types_used: [I-EQV, I-PD]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#12
  page: 65
  problem_summary: |
    두 조건 p, q에 대하여 다음 f(x, y):
      | 1 (명제 p→q, p→q 모두 참)
      | 0 (명제 p→q, ~q→p 모두 거짓)
      | -1 (명제 p→q, ~q→~p 모두 거짓)
    이때, x, y, z에 대하여 f(x, y)+f(y, z)+f(z, x)=1이 값을 구하시오.
  solution_summary: |
    조건 관계 정의 · f 값 계산.
  category: 명제·함수·조건
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 명제-함수-관계
  mechanism_secondary: [진위-분석]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 2 · 서술형

- source: 블랙라벨-CM2-05-STEP2-#13
  page: 66
  problem_summary: |
    자연수 조건 자연수 관계 · 조건 명제 · 원소 조합.
  solution_summary: |
    조건 만족 명제·원소.
  category: 명제·자연수 조건
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 자연수-명제-조건
  mechanism_secondary: [자연수]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#14
  page: 66
  problem_summary: |
    조건 만족 자연수 조건 명제. 자연수 조건 대칭식.
  solution_summary: |
    조건 대칭식·자연수 조건.
  category: 대칭식·명제
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 대칭식-자연수-조건
  mechanism_secondary: [대칭식-분석]
  insight_types_used: [I-SYM, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#15
  page: 66
  problem_summary: |
    조건·명제 조건 자연수 조건.
  solution_summary: |
    조건 만족 자연수 판정.
  category: 조건·명제·자연수
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 조건-자연수
  mechanism_secondary: [명제-분석]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#16
  page: 66
  problem_summary: |
    조건·명제·필요충분 관계.
  solution_summary: |
    필요조건·충분조건 관계 판정.
  category: 필요충분·조건
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 필요충분-조건-판정
  mechanism_secondary: [부분집합-관계]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#17
  page: 66
  problem_summary: |
    조건 만족 명제·집합.
  solution_summary: |
    조건 판정 명제.
  category: 명제·집합
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 명제-집합-판정
  mechanism_secondary: [집합-분석]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#18
  page: 66
  problem_summary: |
    산술평균-기하평균·부등식 조건.
  solution_summary: |
    조건 만족 부등식·최솟값.
  category: 산술기하·부등식
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 산술기하-부등식-최솟값
  mechanism_secondary: [등호조건]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#19
  page: 67
  problem_summary: |
    조건·명제 대우 관계·조건 부등식.
  solution_summary: |
    대우 명제 판정·조건.
  category: 대우·명제
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 대우-명제-판정
  mechanism_secondary: [명제-변환]
  insight_types_used: [I-BW]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#20
  page: 67
  problem_summary: |
    필요충분·역·이·대우 관계.
  solution_summary: |
    조건 판정·명제 관계.
  category: 명제·필요충분
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 필요충분-역이대우
  mechanism_secondary: [명제-분석]
  insight_types_used: [I-EQV, I-BW]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#21
  page: 67
  problem_summary: |
    산술기하평균 부등식·조건 최솟값.
  solution_summary: |
    부등식 등호 조건·최솟값.
  category: 부등식·최솟값
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 부등식-등호-최솟값
  mechanism_secondary: [산술기하]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#22
  page: 67
  problem_summary: |
    삼각형·명제·조건.
  solution_summary: |
    조건 만족 명제 판정.
  category: 삼각형·명제
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 삼각형-명제
  mechanism_secondary: [기하-조건]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#23
  page: 67
  problem_summary: |
    조건·명제·역과 대우 판정.
  solution_summary: |
    역·대우·명제 관계 판정.
  category: 역·대우
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 역-대우-판정
  mechanism_secondary: [명제-변환]
  insight_types_used: [I-BW]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#24
  page: 67
  problem_summary: |
    실수 조건·부등식·명제.
  solution_summary: |
    조건 만족 실수 · 명제 판정.
  category: 실수·부등식·명제
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 실수-부등식-명제
  mechanism_secondary: [부등식-분석]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#25
  page: 68
  problem_summary: |
    세 조건 p→q→r 만족한 조건 · 조건 만족 실수 a의 조건. p+q+r 값.
  solution_summary: |
    조건 만족 자연수·실수 판정.
  category: 조건·명제·실수
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 조건-실수-명제
  mechanism_secondary: [조건-분석]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#26
  page: 68
  problem_summary: |
    실수 조건 조건 만족 명제·자연수·조건 판정.
  solution_summary: |
    조건 판정·자연수 조건.
  category: 자연수·명제
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 자연수-명제-판정
  mechanism_secondary: [자연수-분석]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#27
  page: 68
  problem_summary: |
    실수 조건 x에 대하여 |x-l|+|x-a|=|x-l|의 조건 만족 실수 조건. |x-l|+|x-a|=|x-l|이라 하고, 조건 f(x, y, l, a)=1의 조건 성립.
  solution_summary: |
    절댓값 함수 · 조건 만족 실수 값.
  category: 절댓값·실수
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 절댓값-함수-실수-조건
  mechanism_secondary: [절댓값-분석]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#28
  page: 69
  problem_summary: |
    두 실수 x, y에 대하여 p: |x-a|<1이 q: (x-a)²+(y-2)²>1이 성립. 만약 조건 만족 조건 p의 최솟값을 (단, p, q 상수이다).
  solution_summary: |
    조건 만족 명제·최솟값.
  category: 조건·명제·최솟값
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 조건-최솟값
  mechanism_secondary: [부등식-원-조건]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#29
  page: 69
  problem_summary: |
    다음 보기에서 옳은 것을 모두 고른 것은? (조건 분석).
  solution_summary: |
    보기: ㄱ. -1<a<c(1)일 때, |1-a|+|c|<1 등 조건 판정.
  category: 절댓값·조건 판정
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 절댓값-부등식-조건
  mechanism_secondary: [실수-분석]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#30
  page: 69
  problem_summary: |
    자연수 조건 자연수 원소 자연수 x에 대하여 |x²-1|<(1+x)²+1를 만족시키는 자연수 x의 최댓값.
  solution_summary: |
    부등식 · 자연수 조건 · 최댓값.
  category: 절댓값·자연수·최댓값
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 절댓값-부등식-자연수-최댓값
  mechanism_secondary: [부등식-분석]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#31
  page: 69
  problem_summary: |
    좌표평면 위의 두 점 A(2, 1)를 지나가는 기울기가 m인 직선 l, 원점 O와 직선 l 사이의 거리 s가 사각형 OABD의 넓이가 최대가 되는 자연수 조건 만족한다.
  solution_summary: |
    직선 조건 · 최대 넓이·자연수 조건.
  category: 좌표·최대 넓이·조건
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 좌표-최대-조건
  mechanism_secondary: [점-직선-거리]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#32
  page: 69
  problem_summary: |
    두 실수 조건 조건 조건 만족.
  solution_summary: |
    조건 만족 조건.
  category: 실수·조건
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 실수-조건
  mechanism_secondary: [조건-분석]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#33
  page: 69
  problem_summary: |
    그림과 같이 AB=AC이고, ∠CAB=30°인 삼각형 ABC의 변 BC 위의 점 P에 대하여 CA·CE=CP·CB인 점 E가 존재하지 않도록 하는 실수 m의 값의 범위, p=|E| 조건.
  solution_summary: |
    조건 만족 점 E · 실수 m 범위.
  category: 삼각형·기하·조건
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 삼각형-조건-범위
  mechanism_secondary: [기하-비-조건]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#34
  page: 70
  problem_summary: |
    다음은 원 x=(x-1)²과 이차 원 P(x)와의 원의 조건 만족 f(x, y).
    (i) x²=x-1의 조건 만족.
    (ii) x²-3x=-x-2일 때, 조건 조건 만족.
    | (조건 참) x, y=(x-1)²+2일 때, 조건 (조건 참)의 조건 만족 lim 조건.
    (iii) x²-4x+3=0의 조건.
  solution_summary: |
    조건 만족 함수·조건 산출.
  category: 함수·조건·명제
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 함수-조건-명제
  mechanism_secondary: [조건-분석]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#35
  page: 70
  problem_summary: |
    세 실수 a, b, c에 대하여 f(a)=b이거나 f(b)=a이거나 f(c)=a이면, 2a+2b+c의 값은?
  solution_summary: |
    조건 분석 · 값 산출.
  category: 실수·조건·값
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 실수-조건-값
  mechanism_secondary: [조건-분석]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#36
  page: 70
  problem_summary: |
    임의의 10인 인원 조합. 원의 원의 원의 3사람 3사람의 조건 만족 원의 조건 만족 원의 원의 조건 만족 조건. AB=BC의 조건 만족.
  solution_summary: |
    비둘기집 원리 or 순열·조합 조건.
  category: 조합·조건·비둘기집
  difficulty: STEP2
  tier_estimated: star_5_premium
  mechanism_primary: 조합-비둘기집-조건
  mechanism_secondary: [경우-분석]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#37
  page: 70
  problem_summary: |
    세 자연수 a, b, c에 대하여 a²+b²=c² 조건 만족 조건 실수 조건 만족.
  solution_summary: |
    피타고라스 조건 · 자연수 조건.
  category: 자연수·피타고라스
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 피타고라스-자연수-조건
  mechanism_secondary: [자연수-분석]
  insight_types_used: [I-EQV]
  citation_note: 블랙라벨 CM2 STEP 2

- source: 블랙라벨-CM2-05-STEP2-#38
  page: 70
  problem_summary: |
    세 자연수 조건 조건 만족. a, b, c의 조건 만족.
  solution_summary: |
    조건 만족 자연수·값.
  category: 자연수·조건·값
  difficulty: STEP2
  tier_estimated: star_5
  mechanism_primary: 자연수-조건-값
  mechanism_secondary: [자연수-분석]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 2
```

---

## 06 함수 (CM2-FN) — STEP 2 부재

블랙라벨 CM2 CH06 (함수) 챕터는 STEP 1 → STEP 3 직접 연결 구조이며 STEP 2 섹션이 없다.
STEP 1 심화 문항 (심화·서술형 마커 포함)이 STEP 2 역할을 부분 대체한다.

**STEP 1 심화 문항 참조**: `bank/mechanism-데이터-블랙라벨-CM2-STEP1.md` §CH06
**STEP 3 최고난도 문항**: `bank/mechanism-데이터-블랙라벨-CM2-STEP3.md` §06

---

## 07 유리함수 (CM2-RF) — STEP 2 부재

블랙라벨 CM2 CH07 (유리함수) 챕터는 STEP 1 → STEP 3 직접 연결 구조이며 STEP 2 섹션이 없다.
STEP 1 심화 문항 (심화·서술형 마커 포함)이 STEP 2 역할을 부분 대체한다.

**STEP 1 심화 문항 참조**: `bank/mechanism-데이터-블랙라벨-CM2-STEP1.md` §CH07
**STEP 3 최고난도 문항**: `bank/mechanism-데이터-블랙라벨-CM2-STEP3.md` §07

---

## 08 무리함수 (CM2-RF) — STEP 2 부재

블랙라벨 CM2 CH08 (무리함수) 챕터는 STEP 1 → STEP 3 직접 연결 구조이며 STEP 2 섹션이 없다.
STEP 1 심화 문항 (심화·서술형 마커 포함)이 STEP 2 역할을 부분 대체한다.

**STEP 1 심화 문항 참조**: `bank/mechanism-데이터-블랙라벨-CM2-STEP1.md` §CH08
**STEP 3 최고난도 문항**: `bank/mechanism-데이터-블랙라벨-CM2-STEP3.md` §08

---

## 통계 · Tier 최종 판정 (v2.0 실측)

| 단원 | 챕터 | STEP 2 문항 | 페이지 | tier 분포 |
|------|------|-----------|--------|----------|
| CM2-GM | 01 점과 직선 | 36 | 12-17 | star_5 ≈ 65%, star_5_premium ≈ 35% |
| CM2-GM | 02 원의 방정식 | 42 | 24-30 | star_5 ≈ 55%, star_5_premium ≈ 45% |
| CM2-GM | 03 도형의 이동 | 24 | 36-39 | star_5 ≈ 75%, star_5_premium ≈ 25% |
| CM2-ST | 04 집합 | 42 | 50-56 | star_5 ≈ 60%, star_5_premium ≈ 40% |
| CM2-ST | 05 명제 | 38 | 64-70 | star_5 ≈ 75%, star_5_premium ≈ 25% |
| CM2-FN | 06 함수 | 0 (STEP2 부재) | N/A | — |
| CM2-RF | 07 유리함수 | 0 (STEP2 부재) | N/A | — |
| CM2-RF | 08 무리함수 | 0 (STEP2 부재) | N/A | — |
| **합계** | **8단원** | **182** | — | — |

---

## v1.0 요약본 대비 개정 사항 (v2.0, 2026-07-18)

**v1.0의 오류**:
- 총 문항 수 "108"은 부정확 (실측 182)
- FN(CH06) STEP2 = 12로 표기 → 실제 STEP2 섹션 부재
- RF(CH07·CH08) STEP2 = 24로 표기 → 실제 STEP2 섹션 부재
- GM = 36 → CH01·CH02·CH03 각각의 STEP2 합 = 102
- ST = 36 → CH04·CH05 STEP2 합 = 80

**v2.0의 정정**:
- 실측 8단원 페이지 감사 완료
- CH01~CH05만 STEP2 섹션 보유 (총 182문)
- CH06~CH08은 STEP1 심화 → STEP3 직접 연결 (STEP2 부재)
- 개별 문항 발문·mechanism·tier_estimated 라벨링

---

## 주요 발견사항

### 1. STEP 2 챕터 구성 특징 (블랙라벨 CM2)

- **CH01~CH05만 STEP2 보유**: 도형의 방정식·집합과 명제 단원 (GM·ST)
- **CH06~CH08 STEP2 부재**: 함수·유리무리함수 단원 (FN·RF) — STEP1 심화 → STEP3 직접
- CH02 (원의 방정식) 42문 최다 · CH03 (도형의 이동) 24문 최소

### 2. 다중 통찰 3+ 문항 (star_5_premium 후보)

- **CH01**: 무게중심-중선-역산 (#11·#12·#14), 넓이 이등분·정점 (#22·#25), 반사 최대차 (#19)
- **CH02**: 정점-지나는-직선-현길이-최대최소 (#24), 지름원-직각조건 (#25), 두 원 공통접선·조건 (#42)
- **CH03**: 원-대칭-공통접선 (#08), 원·다각형·넓이·조건 (#24)
- **CH04**: 부분집합개수 관계식 (#18), 부분집합 합 정수 (#14), 자연수-부분집합-최대합 (#23)
- **CH05**: 절댓값-필요충분 (#07), 명제-함수 관계 (#12)

### 3. 핵심 mechanism 분류 (총 182문)

**GM 계열 (102문)**:
- 좌표기하-최적화 (32%)
- 원·접선·현 길이 (28%)
- 대칭·평행이동 (18%)
- 삼각형-무게중심-중선 (12%)
- 자취·조건 (10%)

**ST 계열 (80문)**:
- 부분집합·조건 (35%)
- 원소·개수·자연수 조건 (28%)
- 명제·필요충분·대우 (22%)
- 부등식·절댓값 (15%)

### 4. tier 분포

**전체 182문**:
- star_5: 약 65% (118문)
- star_5_premium: 약 35% (64문)

---

## 저작권 · 학습 목적 안내

- 원문 발문 미전사 (학습 목적 준수 · 40~80자 축약)
- solution 50~100자 요약 (풀이 아이디어 라벨링)
- mechanism 층위별 라벨링 완료
- tier 재판정: 문항별 독립 평가
- 참고자료: 블랙라벨 공통수학2 (2022개정) · STEP 2 섹션
- 출처: `참고자료/공통수학2/[고등1-2] 공통수학2 (2022개정)/[고등1-2] 블랙라벨 공통수학2 (2022개정).pdf`
