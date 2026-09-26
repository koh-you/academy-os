---
name: mechanism-데이터-블랙라벨-CM2-STEP3
description: 블랙라벨 공통수학2 (2022개정) STEP 3 정독. 최고난도 (1등급을 넘어서는 종합 사고력 문제).
metadata:
  type: reference
  version: v1.1
  established: 2026-07-15 (v1.0 전 문항 정독) · 2026-07-21 (v1.1 세션 62 표본 12문 재판정 · 회귀 함수 · premium 원형 매핑)
  source: 블랙라벨 공통수학2 (2022개정) STEP 3
  tier_mapping:
    STEP_3: star_5_premium_max
  unit_code: CM2
  premium_ratio: 1.00  # 93/93 · STEP 3 전 문항 star_5_premium
  vendor_regression: "STEP 3 일반 → ★ 5 premium (편차 0.0) · STEP 3 교육청 → ★ 5 premium 정점 자격"
  chapters:
    - {no: "01", title: 점과 직선, unit: CM2-GM, step3_pages: "18-19", count: 11}
    - {no: "02", title: 원의 방정식, unit: CM2-GM, step3_pages: "31-32", count: 11}
    - {no: "03", title: 도형의 이동, unit: CM2-GM, step3_pages: "40-41", count: 12}
    - {no: "04", title: 집합, unit: CM2-ST, step3_pages: "57-58", count: 12}
    - {no: "05", title: 명제, unit: CM2-ST, step3_pages: "71-72", count: 11}
    - {no: "06", title: 함수, unit: CM2-FN, step3_pages: "87-88", count: 12}
    - {no: "07", title: 유리함수, unit: CM2-RF, step3_pages: "98-99", count: 12}
    - {no: "08", title: 무리함수, unit: CM2-RF, step3_pages: "108-109", count: 12}
  total_count: 93
  citation_note: 학습 목적 · 발문 40~60자 축약 · solution 60~100자 · mechanism 라벨 중심
---

# 블랙라벨 공통수학2 (2022개정) STEP 3 정독 데이터

**tier**: STEP 3 = **star_5_premium 중 최고난도** (1등급을 넘어서는 종합 사고력 · 100점 달성 심화발전)
**전체**: 93문 (8단원)

---

## 세션 62 확장 (2026-07-21) — 표본 층화 재판정 · 회귀 함수 · premium 원형 매핑

### 표본 12문 층화 판정 (STEP 3 대표 문항 · CM2 8소단원 균형)

STEP 3 = 100% premium 후보 · 정점 6항 자격 통과 여부 재검토 대상

| # | source | subunit | 시그니처 (도구·조건·목표) | tier | premium 원형 매핑 | 정점 6항 자격 | 자기복제 신호 |
|---|--------|---------|------------------------|------|------------------|-------------|-------------|
| S3-01 | 블랙라벨-CM2-01-STEP3-#04 | GM-평면좌표 | 15°삼각비·종이접기-반사·유리수 분리 | premium | **O-NEW-26 15°삼각비 종이접기** (신규) | 자격 통과 (I-XU+I-RT+P4) | 저 (마플·쎈 부재) |
| S3-02 | 블랙라벨-CM2-01-STEP3-#10 | GM-평면좌표 | 이차식-두 직선 인수분해·수직조건·정수해 | premium | **O-NEW-27 이차식-두직선 분해** (신규) | 4+ 통과 표시 (I-XU+I-EQV+I-PD) | 저 |
| S3-03 | 블랙라벨-CM2-02-STEP3-#07 | GM-원 | 극선-정점발견-원-접선다발 | premium | **O-NEW-28 극선(Polar) 정점** (신규 · CM2 심화 상위) | 4+ 통과 표시 (I-CON+I-PD+I-XU) | 저 (극선은 마플 부재) |
| S3-04 | 블랙라벨-CM2-02-STEP3-#08 | GM-원 | 현-중점-자취-직각원주각(Thales) | premium | **O-NEW-22 확장 · Thales 궤적** | 4+ 통과 표시 (I-CON+I-BW+I-XU) | 저 |
| S3-05 | 블랙라벨-CM2-03-STEP3-#09 | GM-이동 | 원형수영장-반사법-삼각형 둘레최소 | premium | **O-01 Fagnano 확장 (곡선 위 반사)** | 4+ 통과 표시 (I-BW+I-SYM+I-XU) | **높음** (마플 CM2-GM-이동-0664와 동원리) |
| S3-06 | 블랙라벨-CM2-03-STEP3-#11 | GM-이동 | 수족삼각형 둘레-최소·3중반사 | premium | **O-01 확장 · Fagnano 완성형** | 4+ 통과 표시 (I-BW+I-SYM+I-XU+I-CON) | 중 |
| S3-07 | 블랙라벨-CM2-04-STEP3-#08 | ST-집합 | mod5-잔여-금지쌍-회피·최대집합 | premium | **O-NEW-24 확장 · mod-잔여-회피** | 4+ 통과 표시 (I-XU+I-PD+I-CON) | 저 |
| S3-08 | 블랙라벨-CM2-04-STEP3-#12 | ST-집합 | 두-mod-조건·mod9+mod10·원소합 극값 | premium | **O-NEW-29 이중 mod 조건 원소합** (신규 · 학평 2020) | 4+ 통과 표시 (I-XU+I-PD+I-CON) | 저 |
| S3-09 | 블랙라벨-CM2-05-STEP3-#09 | ST-명제 | 코시-슈바르츠-역수합-최소·5·12·13 | premium | **O-NEW-25 확장 · 코시-슈바르츠 5·12·13 각각** | 4+ 통과 표시 (I-XU+I-CON+I-EQV) | 중 (쎈 코시-슈바르츠 존재) |
| S3-10 | 블랙라벨-CM2-06-STEP3-#01 | FN | 함수방정식·특수 대입·역산·(x+4y²-1)³ | premium | **O-NEW-30 함수방정식 3제곱 대입** (신규 · CM2-FN 정점) | 4+ 통과 표시 (I-BW+I-CON+I-PD) | 저 |
| S3-11 | 블랙라벨-CM2-07-STEP3-#08 | RF-유리 | 역함수 관계식·(3,3) 대칭·접선 판별식 | premium | **O-NEW-31 (a,b) 대칭중심 역함수** (신규 · CM2-RF SYM+XU) | 4+ 통과 표시 (I-SYM+I-BW+I-CON+I-XU) | 저 |
| S3-12 | 블랙라벨-CM2-08-STEP3-#12 | RF-무리 | min(f,f⁻¹)-y=x 대칭·h(n) 교점·역산 | premium | **O-NEW-32 min(f,f⁻¹) 자기역함수 학평 2020** (신규) | 4+ 통과 표시 (I-SYM+I-CON+I-PD+I-BW) | 저 (RF 자기역함수 CM2-RF-02와 정합) |

**정합률**: 12/12 = **100%** (모두 star_5_premium 판정 정합)

**Premium 신규 원형 후보 7종** (STEP 3에서 도출):
- **O-NEW-26** 15°삼각비 종이접기 (특수각 결합)
- **O-NEW-27** 이차식 두 직선 인수분해 (계수비교+수직)
- **O-NEW-28** 극선(Polar) 정점 발견 (CM2 심화 · 상위교과 아님 · 접선 다발)
- **O-NEW-29** 이중 mod 조건 원소합 (mod 9+mod 10)
- **O-NEW-30** 함수방정식 3제곱 대입 (CM2-FN 정점 SC)
- **O-NEW-31** (a,b) 대칭중심 역함수 (a,b 위치 결정)
- **O-NEW-32** min(f,f⁻¹) 자기역함수 학평 형

---

### 블랙라벨 CM2 STEP 3 벤더 라벨 → ★ 회귀 함수 초안 (v1.11 편입 대상)

**원 라벨**: STEP 3 = "1등급 넘어서는 종합 사고력 · 100점 달성 심화발전" (단일 라벨 · 최고급)

**실측 회귀 (표본 12문 + 전체 93문 통계)**:

| 라벨 세부 | 표본 수 | 실측 ★ 분포 | 최빈 ★ | 예측 함수 |
|---|---|---|---|---|
| STEP 3 (일반) | 78 | ★ 5 premium×78 | **★ 5 premium** | `STEP 3 → ★ 5 premium (편차 0.0)` |
| STEP 3 (교육청 기출) | 15 | ★ 5 premium×15 (정점 자격 대다수) | **★ 5 premium+** | `STEP 3 교육청 → ★ 5 premium 정점 (편차 0.0)` |

**회귀 함수 (블랙라벨 CM2 STEP 3)**:
```
블랙라벨_CM2_STEP3_star_predict(label) =
  # STEP 3은 라벨 자체가 최고급 · 세부 구분 없이 premium 일괄
  return "star_5_premium"  # 편차 0.0 · 93/93 = 100% 정합
  # 정점 6항 자격 통과 여부는 문항별 개별 검토 (표본 15문 표시)
```

**premium 판정 확률**: STEP 3 전체 = **100%** (93/93 · 편차 0.0)
**신뢰도 등급**: **A+급** (라벨-★ 정합 완벽 · 벤더 신뢰도 최고)

---

### CM2 소단원별 정점 원형 매트릭스 검증 (세션 61 확립 매트릭스 대비)

세션 61에서 확립된 **CM2 소단원별 정점 원형 원형 매트릭스**와 블랙라벨 STEP 2·3 실측 대조:

| 소단원 | 세션 61 매트릭스 예측 | 블랙라벨 STEP 3 실측 통찰 축 | 정합 여부 |
|--------|--------------------|------------------------|----------|
| CM2-GM-평면좌표 | RT·SYM (반사·대칭 축) | I-RT + I-CON + I-BW (11문 중 우세) | ✓ 정합 |
| CM2-GM-원 | POWER OF POINT · SYM (극선 · 원주각) | I-CON + I-PD + I-XU · 극선(O-NEW-28) | ✓ 정합 (POWER OF POINT 확장) |
| CM2-GM-이동 | 근축·SYM (반사·대칭) | I-SYM + I-BW · 수족삼각형(O-01 확장) | ✓ 정합 |
| CM2-ST-집합 | XU (외부맥락 mod 잔여) | I-XU + I-PD + I-CON · mod 5/9/10 잔여 | ✓ 정합 |
| CM2-ST-명제 | XU · EQV (절대부등식·코시) | I-XU + I-CON + I-EQV · 코시-슈바르츠 | ✓ 정합 |
| CM2-FN | XU · SC (함수방정식) | I-BW + I-CON + I-PD · 함수방정식 대입 | ✓ 정합 (SC 확장) |
| CM2-RF-유리 | SYM+XU (자기역함수·대칭중심) | I-SYM + I-BW + I-CON + I-XU · (a,b) 대칭 | ✓ 정합 |
| CM2-RF-무리 | SYM+XU (자기역함수·y=x) | I-SYM + I-CON + I-PD + I-BW · min(f,f⁻¹) | ✓ 정합 |

**결과**: **8/8 완전 정합** · 세션 61 매트릭스는 블랙라벨 STEP 3 데이터로 강력 검증됨

---

### 자기복제 감지 · 블랙라벨 vs 쎈·마플 (STEP 3 · 세션 62 신호)

**동일 학평 원본 사용 감지** (교육청 표시 문항 대조):

| 블랙라벨 STEP 3 | 학평 년월 | 마플·쎈 대응 원본 | 자기복제 위험 |
|---|---|---|---|
| CM2-01-STEP3-#06 (넓이차·기울기 곱) | 2019 교육청 | 마플 CM2-GM-평-미확인 · 쎈 미확인 | 저 (표본 부족) |
| CM2-02-STEP3-#06 (내분점 3점 원) | 2023 교육청 | 마플 CM2-GM-원-검토 필요 | 중 |
| CM2-02-STEP3-#10 (무게중심·외심) | 2023 교육청 | 마플 CM2-GM-원-검토 필요 | 중 |
| CM2-03-STEP3-#12 (원 위 두 점 변환 기울기) | 2023 교육청 | 마플 CM2-GM-이동-검토 필요 | 중 |
| CM2-03-STEP3-#09 (원형수영장·반사법) | 미표기 (원리 = Fagnano) | **마-CM2-GM-이동-0664** (O-01 Fagnano) | **높음** (동원리 · 표현만 다름 · 회차당 1문 이하 감쇠 필수) |
| CM2-04-STEP3-#09 (약수 조건 집합) | 2019 교육청 | 마플 CM2-ST-집합-검토 필요 | 중 |
| CM2-04-STEP3-#12 (mod9·mod10 원소합) | 2020 교육청 | 마플·쎈 대응 미확인 (신규 원형 O-NEW-29) | 저 |
| CM2-06-STEP3-#12 (두 이차 근합 계단) | 2023 교육청 | 마플 CM2-FN-검토 필요 | 중 |
| CM2-07-STEP3-#12 (부분별 유리 교점 h(t)) | 2021 교육청 | 마플·쎈 대응 미확인 | 저 |
| CM2-08-STEP3-#12 (min(f,f⁻¹) 학평) | 2020 교육청 | **마-CM2-RF-무리 앵커 후보** · 마플·쎈 유사 | **중~높** (RF 자기역함수 세션 57 신호 계승) |

**감지 요약**:
- **높음 위험 (즉시 감쇠 대상) 2건**: CM2-03-STEP3-#09 Fagnano · CM2-08-STEP3-#12 자기역함수 min · 시험지 회차당 1문 이하
- **중간 위험 8건**: 마플·쎈 정독 데이터 크로스 조회 필요 · 학평 년월 매칭 우선

---

### 특이사항 (교육과정·수학자명 검증)

**교육과정 외 침투 감지 결과**:
- **CM2-05-STEP3-#03 코시-슈바르츠** — CM2 §명제 (절대부등식) 정규 교과 · **허용 (CM2 도구로 자유롭게)**
- **CM2-05-STEP3-#09 코시-슈바르츠 역수합** — 동일 · 허용
- **CM2-06-STEP3-#01 함수방정식** — CM2 §함수 (특수 대입) 허용
- **CM2-07-STEP3-#08 (3,3) 대칭중심** — 유리함수 대칭 · CM2-RF 정점 · 허용
- **CM2-02-STEP3-#07 극선(Polar)** — 상위교과 여부 검토 · CM2 원-접선 두 개 조건에서 유도 가능 · **허용 (CM2 도구로 자연 유도)**

**외국 수학자 이름 회피 감지**:
- **Thales·Fagnano·코시-슈바르츠·Simon** 등 이름 명시 없음 (블랙라벨 원문은 이름 회피 · 원리만 서술) · **정합**
- **주의**: 우리 정독 데이터 카탈로그화 시 원리명 표기 시 "Thales-원주각" → "직각-원주각-지름" 등 자연어 대체 권장 (permanent-policy `foreign-named-formula`)

**vendor label 정정 신호**:
- 없음 (블랙라벨 라벨 신뢰도 최고 · STEP 3 100% 정합)

---

## 01 점과 직선 (CM2-GM · STEP 3, pp.18-19, 11문)

```yaml
- source: 블랙라벨-CM2-01-STEP3-#01
  page: 18
  problem_summary: |
    가로·세로 4·2 직사각형 PQRS에서 대각선 PR이 QQ'을 수직이등분. Q 원점, QR·QP가 각각 x축·y축 양의 방향이 되도록 놓을 때 직선 Q'S 기울기.
  solution_summary: |
    QQ'의 중점을 대각선 PR 위에 두고 QQ' ⊥ PR 이용. Q'좌표를 반사 공식으로 산출 → Q'S 기울기 = 대칭점의 좌표 대입.
  category: 점과 직선
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 반사점-좌표-결정
  mechanism_secondary: [수직-등이분-조건, 직사각형-좌표화, 기울기-계산]
  insight_types_used: [I-RT, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-01-STEP3-#02
  page: 18
  problem_summary: |
    두 직선 l: x+3y-4=0, l': mx-y-4=0에 대해 l과 x축의 교점 A, m에 관계없이 l'이 지나는 점 B, l과 l'의 교점 C. △ABC 이등변삼각형일 때 넓이 최대·최소 m1·m2, m1m2의 값.
  solution_summary: |
    B는 m 무관 정점 → B=(0,-4). A=(4,0). 이등변 조건 3가지 분기(AB=AC / AB=BC / AC=BC)로 m 방정식 산출 → 넓이 함수 → max·min m 곱.
  category: 점과 직선
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 정점-발견 (m 무관 지나는 점)
  mechanism_secondary: [이등변삼각형-3분기, 넓이-함수-극값, m-곱]
  insight_types_used: [I-CON, I-BW]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-01-STEP3-#03
  page: 18
  problem_summary: |
    좌표평면 세 점 A·B·C 꼭짓점 △ABC 무게중심 G, 변 AB·BC·CA 중점 L(2,1)·M(4,-1)·N(a,b). 직선 BN ⊥ LM, 직선 LM과 BN 거리 4√2일 때 ab.
  solution_summary: |
    중점 L·M에서 A·B·C 좌표 선형결합 산출. BN ⊥ LM 기울기 조건 · 두 평행선(BN∥AC=LM) 거리 = 4√2 → N 좌표(a,b) 결정.
  category: 점과 직선
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 중점-역산-좌표
  mechanism_secondary: [수직-조건, 평행선-거리, 무게중심-1사분면]
  insight_types_used: [I-BW, I-CON]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-01-STEP3-#04
  page: 18
  problem_summary: |
    직사각형 종이 AB=4·BC=2. ∠EBC=15° 되도록 CD 위 점 E 정하고 BE 따라 종이 접어 C 점을 C'으로 옮김. C'과 대각선 BD 거리 = a√15 - b√5일 때 100ab.
  solution_summary: |
    ∠EBC=15° → BC를 15° 회전한 위치가 BC'. 삼각비 15°=45°-30° 공식으로 C' 좌표. BD 직선 방정식 → 점-직선 거리 공식. 유리수 분리로 (a,b) 산출.
  category: 점과 직선
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 종이-접기-반사
  mechanism_secondary: [15도-삼각비-공식, 점-직선-거리, 유리수-부분-분리]
  insight_types_used: [I-XU, I-RT]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도 (서술형)

- source: 블랙라벨-CM2-01-STEP3-#05
  page: 18
  problem_summary: |
    네 점 A(-2,1)·B(2,1)·C(2,3)·D(-2,3) 직사각형 ABCD와 세 점 E(0,-2)·F(4,-2)·G(2,0) 삼각형 GEF. 두 도형 넓이를 동시에 이등분하는 직선 l의 기울기 (a+b√17)/2. a+b.
  solution_summary: |
    직사각형은 중심 통과선이 이등분. △GEF는 F(4,-2)→넓이 반절 조건. 두 조건 결합 방정식 → 이차방정식 계수 a·b 유리수 결정.
  category: 점과 직선
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 두-도형-동시-이등분-직선
  mechanism_secondary: [직사각형-중심-경유, 삼각형-이등분-조건, 이차방정식-계수]
  insight_types_used: [I-CON, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-01-STEP3-#06
  page: 19
  problem_summary: |
    O(0,0)·A(4,0)·B(4,5)·C(0,5)에서 BA 양 끝점 아닌 서로 다른 D·E가 BA 위. OD·CE 만나는 F=(a,b). □OAEF 넓이가 □BCFD 넓이보다 4 크고 OD·CE 기울기 곱 -7/9. 22(a+b), 0<a<4. [2019 교육청]
  solution_summary: |
    직사각형 넓이 차 4 + 기울기 곱 조건 → D·E 좌표 매개변수. 직선 OD·CE 교점 F(a,b) 산출 (연립방정식). 22(a+b) 계산.
  category: 점과 직선
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 두-직선-교점-매개변수
  mechanism_secondary: [넓이-차-조건, 기울기-곱, 직사각형-대각선]
  insight_types_used: [I-CON, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도 · 2019 교육청

- source: 블랙라벨-CM2-01-STEP3-#07
  page: 19
  problem_summary: |
    원점 O 꼭짓점 △OAB에서 OA를 1:2로 내분 C, OB를 2:1로 내분 D. 두 선분 AD·BC 교점 E. E=(5,10)일 때 AB를 4:1로 내분 (p,q)의 p+q.
  solution_summary: |
    A=(a₁,a₂)·B=(b₁,b₂) 매개변수 → C·D 좌표. AD·BC 두 직선 교점 조건 → 두 매개변수 방정식. 5=(2a₁+b₁)/? · 10=... 유도 → A·B 좌표 → 4:1 내분점.
  category: 점과 직선
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 내분점-복합-교점-역산
  mechanism_secondary: [매개변수-좌표, 두-내분점-직선-교점, 좌표-역산]
  insight_types_used: [I-BW, I-CON]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-01-STEP3-#08
  page: 19
  problem_summary: |
    y=x와 y=x² 그래프로 둘러싸인 도형. y=x² 위 두 점 A·B, y=x 위 두 점 C·D 잡고 도형 내부에 정사각형 ABCD 그림. 대각선 길이 2√(a+b)일 때 a+b, a·b는 유리수.
  solution_summary: |
    정사각형 조건 → AB ⊥ CD, |AB|=|CD|. 포물선-직선 두 그래프 사이에서 정사각형 가능한 배치를 매개변수화 → 두 좌표 산출 → 대각선 길이 계산.
  category: 점과 직선
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 두-곡선-사이-정사각형
  mechanism_secondary: [수직-조건, 등거리-조건, 포물선-직선-교점]
  insight_types_used: [I-SYM, I-CON]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-01-STEP3-#09
  page: 19
  problem_summary: |
    △ABC 무게중심 G=(1,4/3), 직선 BC: y=2x+1. A에서 BC에 내린 수선의 발 H. AH 길이.
  solution_summary: |
    G=(A+B+C)/3 · B·C ∈ y=2x+1 → A 좌표 결정 방정식. A에서 y=2x+1까지 수선 길이 = |2a₁-a₂+1|/√5.
  category: 점과 직선
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 무게중심-역산-수선길이
  mechanism_secondary: [무게중심-공식, 점-직선-거리]
  insight_types_used: [I-BW]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-01-STEP3-#10
  page: 19
  problem_summary: |
    x·y 방정식 ax²+3xy-2y²+5x+5y+b=0이 각 항 계수 정수인 두 직선을 나타냄. 두 직선 서로 수직. a·b에 대해 a+b, a≠0.
  solution_summary: |
    이차식 인수분해 (px+qy+r)(sx+ty+u)=0 = 두 직선. x²·xy·y² 계수 비교: ps=a, pt+qs=3, qt=-2. 수직 조건 ps+qt=0 (기울기 곱 -1 대체식). 정수 해 탐색.
  category: 점과 직선
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 이차식-두-직선-인수분해
  mechanism_secondary: [수직-조건-계수, 정수해-탐색, 계수-비교]
  insight_types_used: [I-XU, I-EQV, I-PD]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도 · 정점 6항 자격 4+ 통과 예상

- source: 블랙라벨-CM2-01-STEP3-#11
  page: 19
  problem_summary: |
    AB=BC=4 직각이등변 △ABC. AB를 n:m 내분점 P, BC 연장선 위에 CQ를 (m-n):n 내분되도록 Q. 두 직선 PQ·AC 교점 R. △APR 넓이 S₁·△RCQ 넓이 S₂. S₁+2n(n-m)S₂ 최댓값. m+n=1, 0<n<m<1.
  solution_summary: |
    좌표 B=(0,0)·A=(0,4)·C=(4,0) 설정. P·Q 매개변수 좌표. PQ·AC(y=-x+4) 교점 R. 두 넓이 함수 S₁·S₂를 n·m 표현 → S₁+2n(n-m)S₂ 극값.
  category: 점과 직선
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 매개변수-넓이-함수-극값
  mechanism_secondary: [내분/외분-좌표, 직선-교점, 조합-함수-최적화]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도
```

---

## 02 원의 방정식 (CM2-GM · STEP 3, pp.31-32, 11문)

```yaml
- source: 블랙라벨-CM2-02-STEP3-#01
  page: 31
  problem_summary: |
    원 x²+(y-1)²=1 위 점 A와 포물선 y=x²-2 위 점 B에 대해 AB 길이의 최솟값.
  solution_summary: |
    원 중심 C=(0,1), 반지름 1. B∈포물선까지 C-B 거리 최소값 계산 → 최솟값 = min|CB|-1. |CB|²=x²+(x²-2-1)²=x²+(x²-3)² 미분 대신 t=x²로 이차식.
  category: 원의 방정식
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 원-포물선-거리-최소
  mechanism_secondary: [중심-경유, 치환-이차, 곡선-거리]
  insight_types_used: [I-RT, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-02-STEP3-#02
  page: 31
  problem_summary: |
    두 점 A(2,-1)·B(6,2)와 원 (x+1)²+(y+2)²=9 위의 점 P. △ABP 넓이 S. S가 홀수 자연수 P의 개수 m, S가 짝수 자연수 P의 개수 n. mn.
  solution_summary: |
    AB=5 고정. △ABP = (1/2)·5·d(P,직선AB). d(P,AB) 범위 = [d(중심,AB)-3, d(중심,AB)+3]. S 값 홀·짝 자연수 되는 P는 각 d 값에 대해 원과 두 평행선 교점 수.
  category: 원의 방정식
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 원-위-점-넓이-정수-개수
  mechanism_secondary: [점-직선-거리-범위, 평행선-원-교점, 홀짝-분리]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-02-STEP3-#03
  page: 31
  problem_summary: |
    두 원 C₁·C₂. C₁ 반지름 √2, 중심 y=-x 움직임. C₂ 반지름 √5, 중심 y=2x 움직임. 두 원 움직이는 영역의 공통부분 넓이.
  solution_summary: |
    C₁ 중심 궤적 y=-x → 반지름 √2 원 통과 영역 = 직선 y=-x 두 평행선 사이 폭 2√2 띠. C₂ 유사 → 폭 2√5 띠. 두 띠 교집합 (평행사변형) 넓이 계산.
  category: 원의 방정식
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 원-움직임-영역-교집합
  mechanism_secondary: [궤적-띠-변환, 두-띠-교집합, 평행사변형-넓이]
  insight_types_used: [I-RT, I-CON]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-02-STEP3-#04
  page: 31
  problem_summary: |
    A(-9,-1)·B(3,5)에 대해 ∠APB=45° 만족 P. 서로 다른 세 점 A·B·P 지나는 원 중심 C. OC 길이 k, 모든 k 값의 합.
  solution_summary: |
    원주각 ∠APB=45° 조건 → AB 지름 대응 중심각 90° 원. AB 중점 M=(-3,2). 반지름 r=|AB|/(2sin45°)=|AB|/√2. C는 M 지나 AB 수직선 위 두 위치. 두 |OC| 합.
  category: 원의 방정식
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 원주각-중심-궤적
  mechanism_secondary: [원주각-사인-공식, 중점-수직선, 두-원-중심]
  insight_types_used: [I-XU, I-CON]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-02-STEP3-#05
  page: 31
  problem_summary: |
    반지름 1인 두 원 C₁·C₂. C₁ 중심 (-10,0)에서 x축 따라 우 매초 1 속력, C₂ 중심 (0,8)에서 y축 아래 매초 1 속력. 내부 공통부분 넓이 최대인 시각 a초, 그때 공통부분 넓이 S. a+2S.
  solution_summary: |
    시각 t: C₁=(-10+t,0)·C₂=(0,8-t). 중심 거리 d(t)=√((10-t)²+(8-t)²). d 최소 = 두 원 최대로 겹침. d 최소 계산 (t=9) → S=두 원 교집합 넓이 (렌즈 공식: 2r²cos⁻¹(d/2r)-... 대신 대칭 렌즈).
  category: 원의 방정식
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 시간-원-겹침-면적-최대
  mechanism_secondary: [중심간-거리-최소, 두-원-교집합-넓이, 렌즈-공식]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-02-STEP3-#06
  page: 31
  problem_summary: |
    A(0,4)·B(4,4)·C(4,0). 세 선분 OA·AB·BC를 m:n(m>0·n>0)로 내분 P·Q·R. 세 점 지나는 원 C. 보기 ㄱ. m=n일 때 P=(0,2). ㄴ. (4m/(m+n), 0)가 원 C 위. ㄷ. C가 x축과 만나는 두 점 거리 3일 때 PQ=5√2/2. [2023 교육청]
  solution_summary: |
    P=(0,4·m/(m+n))·Q=(4,4·m/(m+n))·R=(4·m/(m+n), 0). 세 점 원 방정식 → 중심 M 좌표·반지름 r. ㄱ 직접 대입. ㄴ (4m/(m+n),0)의 원 위 판정 (R과 대칭). ㄷ 조건에서 매개변수 값 → PQ.
  category: 원의 방정식
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 세-점-지나는-원-매개변수
  mechanism_secondary: [내분점-매개, 원-방정식, 대칭점-원-위]
  insight_types_used: [I-CON, I-SYM]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도 · 2023 교육청

- source: 블랙라벨-CM2-02-STEP3-#07
  page: 32
  problem_summary: |
    반지름 1 원 중심에서 2 떨어진 직선 l. l 위 임의 점 P에서 두 접선. 두 접점 A·B 지나는 직선은 P 위치에 관계없이 정점 Q 지남. 원의 중심과 Q 거리.
  solution_summary: |
    극선 성질: P=(p₁,p₂) → 극선 AB: p₁x+p₂y=r². P가 직선 l(중심에서 거리 2) 위 → l: (l의 법선) · X = 2·(중심). 두 조건 결합해 정점 Q는 극선 형성 다발의 축(중심에서 l 향해 반지름²/거리=1/2 위치) → 중심-Q 거리 1/2.
  category: 원의 방정식
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 극선-정점-발견
  mechanism_secondary: [극선-방정식, 정점-발견, 다발-축]
  insight_types_used: [I-CON, I-PD, I-XU]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도 · 정점 6항 자격 4+ 통과 예상

- source: 블랙라벨-CM2-02-STEP3-#08
  page: 32
  problem_summary: |
    직선 y=mx가 원 (x-1)²+(y-1)²=1과 서로 다른 두 점 P·Q에서 만남. m 변할 때 선분 PQ의 중점 M의 자취 길이.
  solution_summary: |
    원 중심 C=(1,1). CM ⊥ PQ (현의 수직이등분) → M은 원점 O(직선 지남)과 C 지름으로 하는 원 위 (직각 원주각). 자취 = 그 원의 일부 호. m 범위(원-직선 교점 두 개 조건)로 호 길이 계산.
  category: 원의 방정식
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 현-중점-자취-원
  mechanism_secondary: [현-수직-이등분, 직각-원주각-원, 호-길이]
  insight_types_used: [I-CON, I-BW, I-XU]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도 · 정점 6항 자격 4+ 통과 예상

- source: 블랙라벨-CM2-02-STEP3-#09
  page: 32
  problem_summary: |
    반지름 2 원 C 중심이 기울기 a 직선 따라 움직임. C가 두 원 x²+y²=1·(x-1)²+(y-6)²=1 사이 어느 원과도 만나지 않으면서 통과 조건. 실수 a 범위.
  solution_summary: |
    C 통과 = C 중심 궤적 직선 y=ax+t가 두 고정 원 각각과 거리 ≥ 2+1=3 유지 가능해야. 두 고정 원 중심 (0,0)·(1,6)에서 직선까지 거리 ≥ 3 조건 두 부등식 → a 범위.
  category: 원의 방정식
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 원-궤적-두-장애물-통과
  mechanism_secondary: [점-직선-거리-부등식, 두-원-외접-조건, 기울기-범위]
  insight_types_used: [I-CON, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-02-STEP3-#10
  page: 32
  problem_summary: |
    A(-5,-1)·B·C 조건: (가) △ABC 무게중심 (-1,1). (나) 세 점 지나는 원 중심 원점. △ABC 넓이 = (q/p)√105일 때 p+q, 서로소. [2023 교육청]
  solution_summary: |
    B+C=3·(-1,1)-(-5,-1)=(-3+5, 3+1)=(2,4). 원 중심 O=(0,0), A B C 모두 원 위 → OA=OB=OC=r=√26. B·C가 반지름 원 위 & B+C=(2,4) 두 조건 → B·C 좌표 → 넓이.
  category: 원의 방정식
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 무게중심-외심-원-결정
  mechanism_secondary: [무게중심-공식, 외심-등거리, 좌표-연립]
  insight_types_used: [I-CON, I-BW]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도 · 2023 교육청

- source: 블랙라벨-CM2-02-STEP3-#11
  page: 32
  problem_summary: |
    두 원 x²+y²=k·(x-4)²+(y-3)²=4 두 교점 지나는 원 중 y축에 접하는 서로 다른 원 2개. 이 2개 원 C₁·C₂. C₁ 중심 (16,12), C₂ 반지름 q/p. p+q, k 양의 상수, p·q 서로소.
  solution_summary: |
    두 원 교점 지나는 원 다발: x²+y²-k+λ((x-4)²+(y-3)²-4)=0. 정리 → 중심·반지름 λ 함수. y축 접함 조건 = |중심 x좌표|=반지름. C₁ 중심 (16,12) → λ 결정 → k 결정. C₂는 다른 λ 해 → 반지름.
  category: 원의 방정식
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 교점-원-다발-접선-조건
  mechanism_secondary: [원-다발-매개, y축-접-조건, 두-해-분리]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도
```

---

## 03 도형의 이동 (CM2-GM · STEP 3, pp.40-41, 12문)

```yaml
- source: 블랙라벨-CM2-03-STEP3-#01
  page: 40
  problem_summary: |
    원 C₁: x²+y²+2x-4y+4=0을 (a,b) 대칭이동한 원 C₂. 두 원 C₁·C₂ 외접. a²+b² 최댓값.
  solution_summary: |
    C₁ 중심 (-1,2)·반지름 1. 점 대칭이동 → C₂ 중심 (2a+1, 2b-4)·반지름 1. 외접: 중심 거리 = 2 → (2a+2)²+(2b-6)²=4 → (a+1)²+(b-3)²=1. a²+b² = OP² 최대값 = (원점-원 중심 거리 + 반지름)² = (√10+1)².
  category: 도형의 이동
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 점-대칭-원-외접-궤적
  mechanism_secondary: [점-대칭-공식, 외접-조건, 궤적-원-최대]
  insight_types_used: [I-CON, I-RT]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-03-STEP3-#02
  page: 40
  problem_summary: |
    자연수 n에 P_n(x_n,y_n) 이동 규칙: P_1=(1,2). x_ny_n>0·x_n>y_n이면 y=x 대칭 P_{n+1}. x_ny_n>0·x_n<y_n이면 x축 대칭 P_{n+1}. x_ny_n<0이면 y축 대칭 P_{n+1}. |P_1P_24|² + |P_2P_23|² + ⋯ + |P_12P_13|² 값.
  solution_summary: |
    규칙 이동을 12·11·⋯·1 단계씩 시뮬레이션. 이동 주기·대칭 관찰 → 각 P_i와 P_{25-i} 관계 (대칭점). 유클리드 거리 제곱 합 산출 (합-차 형태 이용).
  category: 도형의 이동
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 규칙-이동-대칭-수열
  mechanism_secondary: [조건별-대칭-분기, 주기-발견, 거리-제곱-합]
  insight_types_used: [I-PD, I-SYM, I-CON]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-03-STEP3-#03
  page: 40
  problem_summary: |
    중심 (-1/2, 0)·반지름 1 원 O₁. O₁을 y축 대칭 O₂, O₁을 x축 방향 2 평행이동 O₃. 두 원 O₁·O₂ 내부 공통부분 넓이 + O₂·O₃ 내부 공통부분 넓이 합.
  solution_summary: |
    O₂ 중심 (1/2, 0)·반지름 1. O₃ 중심 (3/2, 0)·반지름 1. O₁∩O₂: 중심 거리 1, 대칭 렌즈. O₂∩O₃: 중심 거리 1 동일. 두 렌즈 각각 넓이 = 2(원 부채꼴 - 삼각형) 공식.
  category: 도형의 이동
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 두-원-렌즈-면적-합
  mechanism_secondary: [대칭-이동, 평행-이동, 두-원-공통-넓이]
  insight_types_used: [I-SYM, I-CON]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-03-STEP3-#04
  page: 40
  problem_summary: |
    원 x²+y²=1과 x축·y축 교점 4개. 이 4개를 직선 l에 대해 각각 대칭이동 시 옮기기 전 점과 일치하는 점이 2개 이상 되는 l의 개수.
  solution_summary: |
    교점: (1,0)·(-1,0)·(0,1)·(0,-1). "일치" 조건 = 직선 l이 두 점의 수직이등분선 or 점이 l 위. 4점 중 서로 대칭 관계 만드는 l 나열: (a) 좌표축 2 (b) 대각선 y=x·y=-x 2 (c) 두 대각 점 사이 수직이등분선.
  category: 도형의 이동
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 4점-대칭-불변-직선
  mechanism_secondary: [수직이등분선-경우, 좌표축-대각선, 조건-분류]
  insight_types_used: [I-SYM, I-PD]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-03-STEP3-#05
  page: 40
  problem_summary: |
    AB=2·BC=3 직사각형 색종이 ABCD를 A가 CD 위에 오도록 접을 때 A·B → E·F, 접힌 선 HG. 사다리꼴 EFGH 넓이 최솟값 m, 9m.
  solution_summary: |
    A→E∈CD (AE=A'D=원래 A로부터 이동). 접기는 직선 HG에 대칭 → HG는 A와 E의 수직이등분선. E 위치 매개변수 (AE 각도). 사다리꼴 EFGH 각 변 길이 좌표 계산 → 넓이 함수 → 최소.
  category: 도형의 이동
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 종이-접기-사다리꼴-넓이-최소
  mechanism_secondary: [수직이등분선-접기, 매개변수-각도, 넓이-함수-극값]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-03-STEP3-#06
  page: 40
  problem_summary: |
    방정식 f(x,y)=0 도형 그림 주어짐. 두 방정식 f(-x+1,y-1)=0, f(y-1,x+2)=0 나타내는 도형의 내부 공통부분 넓이 = q/p, p+q, 서로소.
  solution_summary: |
    f(-x+1,y-1)=0 = f(x,y)를 x축 대칭 후 (1,1) 평행이동. f(y-1,x+2)=0 = f(x,y)를 y=x 대칭 후 (-2,1) 평행이동. 두 변환 좌표 → 두 도형 위치 → 공통부분 다각형 넓이.
  category: 도형의 이동
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 두-변환-도형-교집합-넓이
  mechanism_secondary: [대칭-평행-복합, y=x-대칭, 다각형-넓이]
  insight_types_used: [I-RT, I-CON]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-03-STEP3-#07
  page: 41
  problem_summary: |
    중심 (6,1)·반지름 1 원 C₁. C₁을 직선 y=2x+k에 대해 대칭이동한 원 C₂ 위 임의 점 (x,y)가 x≥0·y≥0 만족하는 실수 k 범위.
  solution_summary: |
    직선 y=2x+k 대칭 공식: (6,1) → (X,Y). X·Y가 원 C₂ 중심. C₂ 위 모든 점이 1사분면 → X≥1, Y≥1 (반지름 1 여유). 대칭 공식 부등식 두 개 → k 범위.
  category: 도형의 이동
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 직선-대칭-1사분면-포함-조건
  mechanism_secondary: [직선-대칭-공식, 원-1사분면-포함, k-부등식]
  insight_types_used: [I-CON, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-03-STEP3-#08
  page: 41
  problem_summary: |
    포물선 y=x²-4x+2 위 서로 다른 두 점이 직선 y=x+1에 대해 대칭. 두 점 사이 거리.
  solution_summary: |
    직선 y=x+1의 법선 방향 → 두 점 (a,b)·(a',b')는 중점이 y=x+1 위·기울기 -1. 포물선 위 두 점 x좌표 α·β: 대칭 조건 → α+β 값(중점 x), αβ 관계 → |PQ|=√2·|α-β|.
  category: 도형의 이동
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 포물선-위-대칭점-거리
  mechanism_secondary: [직선-대칭-중점-경유, 근과-계수, 거리-계산]
  insight_types_used: [I-CON, I-BW]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-03-STEP3-#09
  page: 41
  problem_summary: |
    반지름 10m 원형 수영장. 점 O 중심, 두 점 P·Q 원 위 ∠POQ=60°. 갑·을 각각 P·Q에서 동시 출발 중심 O 향해 감. 호 PQ 위 한 점 C에서 선분 OP·OQ 위 두 지점 A·B에 각각 도달 시 AB+BC+CA 최솟값.
  solution_summary: |
    갑 P→A(OP 위), 을 Q→B(OQ 위), 두 사람 만남 목표 C∈호. AB+BC+CA 최소 = C를 OP·OQ에 대칭시켜 대칭점 두 개 잇는 직선 길이(둘레 최소 원리). 대칭점 좌표 → 거리 공식.
  category: 도형의 이동
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 삼각형-둘레-최소-반사법
  mechanism_secondary: [대칭점-반사, 세-경로-합-최소, 각-대칭-공식]
  insight_types_used: [I-BW, I-SYM, I-XU]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도 · 정점 6항 자격 4+ 통과 예상

- source: 블랙라벨-CM2-03-STEP3-#10
  page: 41
  problem_summary: |
    두 점 P(12,0)·Q(0,5). 반직선 y=-x (x≥-5) 위 길이 5√2 선분 RS 움직일 때 사각형 PQRS 둘레의 최솟값.
  solution_summary: |
    RS 길이 고정 → PQ 고정 → PR+QS 최소가 관건. R·S는 y=-x 위 매개변수화 (t·t+5√2 위치). P를 y=-x 대칭 P', Q를 y=-x 대칭 Q'. |PR|=|P'R|·|QS|=|Q'S|. 최소 = |P'Q'|+PQ+RS. 대칭점 계산.
  category: 도형의 이동
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 사각형-둘레-반사-최소
  mechanism_secondary: [반직선-대칭, 두-거리-합-최소, 매개변수-경계]
  insight_types_used: [I-BW, I-SYM]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-03-STEP3-#11
  page: 41
  problem_summary: |
    AB=4√2·BC=5·CA=√17 △ABC 세 변 AB·BC·CA 위 점 D·E·F. △DEF 둘레 최솟값 (q/p)√34, p+q 서로소.
  solution_summary: |
    파그니이니 문제 변형: 세 변 위 점 D·E·F 만드는 삼각형 둘레 최소 = 각 변 반사 3중 대칭 원리 (수족삼각형). D 고정 → E·F를 반사 이동한 D'·D'' 잇는 직선 길이. 수족삼각형의 둘레 공식.
  category: 도형의 이동
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 수족삼각형-둘레-최소
  mechanism_secondary: [3중-반사-대칭, 파그니이니-원리, 삼각비-계산]
  insight_types_used: [I-BW, I-SYM, I-XU, I-CON]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도 · 정점 6항 자격 4+ 통과 예상

- source: 블랙라벨-CM2-03-STEP3-#12
  page: 41
  problem_summary: |
    원 (x-6)²+y²=r² 위 두 점 P·Q. P를 y=x 대칭 (x₁,y₁), Q를 x축 방향 k 평행이동 (x₂,y₂). (y₂-y₁)/(x₂-x₁) 최솟값 0·최댓값 4/3일 때 |r+k|, x₁≠x₂, r 양수. [2023 교육청]
  solution_summary: |
    P=(6+r cosθ, r sinθ) → P'=(r sinθ, 6+r cosθ). Q=(6+r cosφ, r sinφ) → Q'=(6+r cosφ+k, r sinφ). 두 점 기울기 (r sinφ-6-r cosθ)/(6+r cosφ+k-r sinθ) 극값 → r·k 조건 두 개.
  category: 도형의 이동
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 원-위-두-점-변환-기울기-범위
  mechanism_secondary: [y=x-대칭, x축-평행이동, 기울기-극값-범위]
  insight_types_used: [I-CON, I-PD, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도 · 2023 교육청
```

---

## 04 집합 (CM2-ST · STEP 3, pp.57-58, 12문)

```yaml
- source: 블랙라벨-CM2-04-STEP3-#01
  page: 57
  problem_summary: |
    전체집합 U={1,2,3,4,5}의 두 부분집합 A·B: (가) 1∉A∩Bᶜ, 2∉A∩Bᶜ (나) n(Aᶜ∩B)=3. 두 집합 A·B 순서쌍 (A,B) 개수.
  solution_summary: |
    (가) 재해석: 1·2 ∈ Bᶜ이면 A∈ 안 됨 = 1,2가 A에 있으면 B에도 있음. (나) Aᶜ∩B 원소 3개. 원소별 (∈A,∈B) 상태 조합: 1·2 → 3상태 각(A⊂B∪(∉A∪B)). 3·4·5 중 3개가 (∉A,∈B). 조합 계산.
  category: 집합
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 조건부-부분집합-원소별-상태
  mechanism_secondary: [드모르간-변환, 원소별-분류, 조합-계산]
  insight_types_used: [I-CON, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-04-STEP3-#02
  page: 57
  problem_summary: |
    두 집합 A={(x,y)|x²+y²=1, x·y 실수}, B={(2,-1),(-2,2)}. A⊚B={(x₁+x₂, y₁+y₂) | (x₁,y₁)∈A, (x₂,y₂)∈B}. 좌표평면에서 A⊚B 위 점 P와 점 Q(0,-2)에 대해 PQ 최댓값 M·최솟값 m. M²+2m².
  solution_summary: |
    A는 단위원. B의 각 원소는 평행이동 벡터. A⊚B = A를 (2,-1) 평행이동한 원 ∪ A를 (-2,2) 평행이동한 원. Q(0,-2)에서 두 원까지 최대·최소 거리 각각 계산.
  category: 집합
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 집합-연산-원-평행이동
  mechanism_secondary: [민코프스키-합-해석, 원-평행이동, 점-원-거리-극값]
  insight_types_used: [I-RT, I-CON]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-04-STEP3-#03
  page: 57
  problem_summary: |
    U={1,2,3,4} 두 부분집합 A·B. X(A,B)={i^m·(1/i)^k | m∈A, k∈B} (i=√(-1)). 보기 ㄱ. A={1}·B={1,2}이면 X(A,B)={0,-1+i}. ㄴ. n(X(A,B))≤n(A)n(B). ㄷ. n(X(A,B)) 최댓값 12.
  solution_summary: |
    i^m·(1/i)^k = i^(m-k). m-k 값 셀 → mod 4 순환. A={1}·B={1,2}: m-k∈{0,-1}={0,3 mod 4} → i⁰=1·i³=-i. (보기 값 재검토) ㄴ 카디널리티 상한. ㄷ n≤4 (mod 4), A·B 조합 최적화.
  category: 집합
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 복소-거듭제곱-집합
  mechanism_secondary: [i-순환-mod4, 카디널리티-부등식, 조합-최적화]
  insight_types_used: [I-XU, I-PD]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-04-STEP3-#04
  page: 57
  problem_summary: |
    자연수 k에 A_k={x | 4kx-[4kx]=0, 0≤x≤1} 정의. A₁∩A₂∩A₃∩A₄ 부분집합 개수.
  solution_summary: |
    A_k = {x | 4kx 정수, 0≤x≤1} = {0, 1/(4k), 2/(4k), ..., 1} = {m/(4k) | 0≤m≤4k}. 교집합 = 모든 k에서 정수 배수: x·lcm(4·8·12·16)/? = x=n/lcm으로 표현. |A₁∩⋯∩A₄|=? → 부분집합 개수 = 2^n.
  category: 집합
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 가우스-집합-교집합-원소
  mechanism_secondary: [가우스-정수-조건, 유리수-공배수, 부분집합-개수]
  insight_types_used: [I-XU, I-CON]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-04-STEP3-#05
  page: 57
  problem_summary: |
    진학고 1학년 학생 대상 축구·농구·야구 선호 조사. 축구 좋아 학생 전체 64%·농구 52%·야구 38%. 한 종목만 좋아 46%·세 종목 모두 12%. 세 종목 모두 좋아하지 않는 학생 12명. 두 종목만 좋아하는 학생 수.
  solution_summary: |
    n(전체)=N, 원소 개수 공식: n(A∪B∪C)=n(한종목만)+n(두종목만)+n(세종목만). 합=n(A)+n(B)+n(C)−n(교집합2끼리 합)+n(A∩B∩C). 세종목모두=12명 (12%) → N=100. 두종목만 = N-(한종목만)-(세종목만)-(전혀).
  category: 집합
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 세-집합-포함배제-분해
  mechanism_secondary: [포함-배제-원리, 한종목만·두종목만-분해, 백분율-원-사건]
  insight_types_used: [I-CON, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-04-STEP3-#06
  page: 57
  problem_summary: |
    n(U)=7 세 부분집합 A·B·C: n(B-A)=1, n(C-A)=3, n(B∩C)=3. n(A)·n(B)·n(C) 최댓값 M·최솟값 m. M+m.
  solution_summary: |
    U 원소 7개 분포. B∩C ⊂ B·C. n(B∩C)=3. n(B-A)=1 → B 원소 중 A에 없는 것 1개. n(C-A)=3 → C 원소 중 A에 없는 것 3개. 벤 다이어그램 8영역 매개 변수. n(A)·n(B)·n(C)의 극값을 영역 크기 변화로 탐색.
  category: 집합
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 벤-8영역-원소-분포-극값
  mechanism_secondary: [세-집합-차집합, 영역-변수, 곱-극값]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-04-STEP3-#07
  page: 58
  problem_summary: |
    자연수 n에 U={x|x 자연수} 부분집합 A_n: A₁={1,3,5,⋯,13}, A₂={2,4,6,⋯,14}, A₃={3,5,7,⋯,15}, A₄={4,6,8,⋯,16},⋯. A_n 원소 합이 35 배수인 집합 순서대로 B₁·B₂·⋯. B_39 원소 합.
  solution_summary: |
    A_n 원소 = 첫항 n·항차 2·항수 7 (간격에서 유도). 합 S_n = 7n+42 = 7(n+6). 35 배수 조건 = n+6이 5의 배수 → n=4·9·14·⋯. B_39 = n=4+5·38=194. S=7·200=1400.
  category: 집합
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 규칙-집합-합-배수-필터
  mechanism_secondary: [등차수열-합, 배수-필터, 수열-일반항]
  insight_types_used: [I-PD, I-CON]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-04-STEP3-#08
  page: 58
  problem_summary: |
    U={x|x는 50 이하의 자연수} 부분집합 A 조건: x∈A·y∈A인 서로 다른 두 자연수 x·y에 대해 x+y는 5의 배수 아님. n(A) 최댓값.
  solution_summary: |
    자연수 mod 5 잔여 클래스 5개: 0·1·2·3·4. U={1,⋯,50} 각 클래스 10개씩. 두 원소 합이 5의 배수 = 두 잔여 합 ≡ 0 (mod 5) → (0,0)·(1,4)·(2,3) 조합. 이를 피하려면 각 조합에서 한 클래스만 or 잔여0에서 최대 1개. 잔여 1·2·3·4 중 상보 2개 조합에서 큰 쪽 선택 (10+10). 잔여 0에서 1개. 계 21.
  category: 집합
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: mod-잔여-금지-쌍-최대-집합
  mechanism_secondary: [mod5-분류, 금지-쌍-회피, 최적-선택]
  insight_types_used: [I-XU, I-PD, I-CON]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도 · 정점 6항 자격 4+ 통과 예상

- source: 블랙라벨-CM2-04-STEP3-#09
  page: 58
  problem_summary: |
    U={x|20 이하 자연수} 부분집합 A_k={x|x(y-k)=30, y∈U}, B={x|(30-x)/5∈U}. n(A_k∩Bᶜ)=1인 모든 자연수 k 개수. [2019 교육청]
  solution_summary: |
    A_k = 30의 약수 중 x·(y-k)=30 만족 (y=k+30/x∈U). B={30-x가 5의 배수·30-x∈[5,100]} → x=25·20·15·⋯·(30-5)=25 (U∩). 각 k에 A_k 원소 나열 후 Bᶜ 필터 1개 남는 k 세기.
  category: 집합
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 약수-조건-집합-필터-1개
  mechanism_secondary: [30의-약수-열거, y-범위-조건, 필터-정확-1]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도 · 2019 교육청

- source: 블랙라벨-CM2-04-STEP3-#10
  page: 58
  problem_summary: |
    모든 자연수 k에 (3k+2)개 연속 자연수를 원소로 갖는 A_k: (가) A₁={1,2,3,4,5}. (나) n(A_k-A_{k+1})=2. (다) A_k 최소 원소 a_k, a_{k+1}>a_k. A₃₀∩A_m≠∅ 만족 자연수 m 최댓값.
  solution_summary: |
    A_k 원소 개수=3k+2, 최소=a_k, 최대=a_k+3k+1. n(A_k-A_{k+1})=2 → 왼쪽 2개 잘림 → a_{k+1}=a_k+2. 재귀 a_k=1+2(k-1)=2k-1. A_k={2k-1, ⋯, 2k-1+3k+1}={2k-1, ⋯, 5k}. A₃₀={59,⋯,150}. A_m∩A₃₀≠∅ → 2m-1≤150·5m≥59 → m 상한 = 75.
  category: 집합
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 재귀-집합-교집합-존재-범위
  mechanism_secondary: [차집합-원소수-재귀, 등차수열-일반항, 교집합-조건-부등식]
  insight_types_used: [I-PD, I-CON, I-BW]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도 · 정점 6항 자격 4+ 통과 예상

- source: 블랙라벨-CM2-04-STEP3-#11
  page: 58
  problem_summary: |
    S={x|9 이하 자연수} 부분집합 X 조건: (가) X 원소는 2개 이상. (나) X 원소들끼리 모두 서로소. X 개수.
  solution_summary: |
    S={1,⋯,9}. 원소별 소인수: 1(-)·2(2)·3(3)·4(2)·5(5)·6(2·3)·7(7)·8(2)·9(3). 서로소 조건 = 각 소인수가 X 내 최대 1원소에 등장. 소수 그룹화: {2·4·8} 소수2계·{3·9} 소수3계·{6} 2·3계·{5}·{7}·{1}. 조합 열거 후 부분집합 개수 (2개 이상).
  category: 집합
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 서로소-원소-집합-조합
  mechanism_secondary: [소인수-분해-분류, 서로소-쌍-회피, 조건부-조합]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-04-STEP3-#12
  page: 58
  problem_summary: |
    U={x|20 이하 자연수} 두 부분집합 A·B: (가) n(A)=n(B)=8, n(A∩B)=1. (나) A 임의 서로 다른 두 원소 합 9의 배수 아님. (다) B 임의 서로 다른 두 원소 합 10의 배수 아님. S(A)-S(B) 최댓값 (S=원소합). [2020 교육청]
  solution_summary: |
    A: 합 9배 회피 → mod 9 잔여 {0·⋯·8}에서 (r·9-r) 두 클래스 중 하나만 (r 절반 vs 8-r 절반). 20개 자연수 mod 9 분포 계산 후 A 8개 최대 합 선택. B 유사 mod 10. A∩B=1 조건 결합.
  category: 집합
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 두-mod-조건-집합-원소-합-극값
  mechanism_secondary: [mod9·mod10-잔여, 두-집합-교집합-1, 원소-합-최대·최소]
  insight_types_used: [I-XU, I-PD, I-CON]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도 · 2020 교육청 · 정점 6항 자격 4+ 통과 예상
```

---

## 05 명제 (CM2-ST · STEP 3, pp.71-72, 11문)

```yaml
- source: 블랙라벨-CM2-05-STEP3-#01
  page: 71
  problem_summary: |
    U={x|10 이하 홀수 자연수}. 조건 p: x²-8x+12≤0. 두 조건 q·r 진리집합 Q·R. p는 q이기 위한 충분조건이고 r은 ~p이기 위한 필요조건. (Q,R) 순서쌍 개수.
  solution_summary: |
    U={1,3,5,7,9}. p: x²-8x+12≤0 → (x-2)(x-6)≤0 → 2≤x≤6 → P={3,5}. p⇒q: P⊂Q → Q는 P 포함 부분집합. ~p⇒r: Pᶜ⊂R → R은 Pᶜ={1,7,9} 포함. Q 개수 × R 개수.
  category: 명제
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 진리집합-포함-조건-경우
  mechanism_secondary: [충분·필요-포함, 진리집합-경우, 순서쌍-개수]
  insight_types_used: [I-CON, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-05-STEP3-#02
  page: 71
  problem_summary: |
    두 실수 x·y 두 조건 p: x²-2kxy+16y²=0, q: x=y=0. p→q 참 정수 k 개수.
  solution_summary: |
    p: (x-4y)²+? 판별식 이용. x·y 이차형식 → x=(k±√(k²-16))y. k²<16이면 x,y 모두 0만 해 (실근 조건). k²>16이면 x=(k+√)y·(k-√)y 두 해 (y≠0에도 해) → p→q 거짓. -3≤k≤3 정수 7개.
  category: 명제
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 이차형식-실근-조건-명제
  mechanism_secondary: [판별식-부호, 이차형식-인수, 정수-k-개수]
  insight_types_used: [I-XU, I-CON]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-05-STEP3-#03
  page: 71
  problem_summary: |
    x+y=10 만족 두 양수 x·y에 대해 √(21-2x)+√(23-2y) 최댓값.
  solution_summary: |
    y=10-x → √(21-2x)+√(3+2x). 코시-슈바르츠: (1²+1²)(a²+b²)≥(a+b)². a=√(21-2x), b=√(3+2x). a²+b²=24. (a+b)²≤2·24=48 → a+b ≤ 4√3. 등호 a=b → 21-2x=3+2x → x=4.5. 유효 범위 확인 (x∈(0,10.5)).
  category: 명제
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 코시-슈바르츠-두-제곱근-합-최대
  mechanism_secondary: [x+y-제약, 제곱근-합, 등호-조건]
  insight_types_used: [I-CON, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-05-STEP3-#04
  page: 71
  problem_summary: |
    부등식 x²+y²≤2 만족 두 실수 x·y에 대해 a=x+y·b=xy. a 최댓값 M, b 최솟값 m. M²+m².
  solution_summary: |
    a=x+y·b=xy → x,y는 t²-at+b=0 근. 판별식 D=a²-4b≥0. 제약 x²+y²=a²-2b≤2. a 최대: b=? a²=2+2b→ 판별식 조건과 결합. a 최대 = 2. b 최소: a=0, x²+y²≤2 → xy 최소 = -1 (x=1,y=-1). M²+m² = 4+1.
  category: 명제
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 대칭식-a·b-치환-극값
  mechanism_secondary: [x+y·xy-치환, 판별식-경계, 최대·최소-결합]
  insight_types_used: [I-RT, I-CON]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-05-STEP3-#05
  page: 71
  problem_summary: |
    정수 k에 n=2k로 표현 → n을 2의 배수 정의. 두 정수 a·b에 대해 명제 "x²+ax+b=0이 적어도 하나의 정수인 근을 가지면 두 정수 a·b 중 적어도 하나는 2의 배수" 증명.
  solution_summary: |
    대우 증명: a·b 모두 홀수라 가정. 정수 근 α → α²+aα+b=0. α 홀·짝 나누어 각 경우 홀+홀·짝·홀=? mod 2로 α²+aα+b ≡ α²+α+1 (mod 2). α=0: 1≠0. α=1: 1+1+1=1≠0. 모두 모순 → 대우 참.
  category: 명제
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 대우-증명-mod2
  mechanism_secondary: [대우-법, mod2-분석, 정수-홀·짝-분류]
  insight_types_used: [I-BW, I-XU]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-05-STEP3-#06
  page: 71
  problem_summary: |
    학교 대수·미적분Ⅰ·확률과 통계·기하 4 과목 선택. A·B·C·D 학생 4명 각각 하나씩 선택. 4개 문장 (가)~(라) A·B·C·D 관련. (가) A 대수·B 미적분Ⅰ. (나) B 미적분Ⅰ·C 미적분Ⅰ. (다) C 대수·D 확률과 통계. (라) D 확률과 통계·A 미적분Ⅰ. (가)~(라) 각 문장 중 2명이 선택한 과목 중 하나는 참·하나는 거짓. 기하 선택 학생.
  solution_summary: |
    각 문장 (X_p, Y_q) 중 정확히 하나 참. 조합 논리 분기: (가) A대수 참 vs B미적 참, (나) B미적 vs C미적, ⋯. 서로 다른 과목 4명 (전단사) 제약 결합 → 각 학생 과목 유일 해 (기하 D or A ⋯).
  category: 명제
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 하나만-참-조건부-논리-퍼즐
  mechanism_secondary: [4문장-분기, 4학생-전단사, 논리-소거]
  insight_types_used: [I-CON, I-MI, I-PD]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도 · 정점 6항 자격 4+ 통과 예상

- source: 블랙라벨-CM2-05-STEP3-#07
  page: 72
  problem_summary: |
    실수 x 세 조건 p: ax²-bx+c<0, q: c/x²-b/x+c<0, r: (x-1)²≤0. 진리집합 P·Q·R. 보기 옳은 것 ㄱ. R⊂P이면 R⊂Q. ㄴ. P∩Q=∅이면 R⊂P or R⊂Q. ㄷ. P∩Q≠∅이면 R⊂(P∩Q). a·b·c 양수.
  solution_summary: |
    R={1} (r: x=1). 대응: q에 x→1/x 치환 시 x²·q ↔ x²·p 대응 관계 발견 (계수 순환 대칭). ㄱ 1∈P→? 1∈Q ↔ c/1-b/1+c<0 ↔ 2c-b<0. p(1)=a-b+c<0. 두 부등식 관계 (a=?) 검토. ㄴ·ㄷ 유사 대응.
  category: 명제
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 부등식-치환-대응-진리집합
  mechanism_secondary: [x→1/x-치환, 진리집합-포함, 대칭-관계-부등식]
  insight_types_used: [I-RT, I-SYM, I-CON]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-05-STEP3-#08
  page: 72
  problem_summary: |
    두 양수 a·b에 한 변 a+b 정사각형 ABCD 네 변 AB·BC·CD·DA 각각 a:b 내분점 E·F·G·H. FH 중점 M. 정사각형 위 예시. 보기 ㄱ. FM=GM. ㄴ. △EFM>△FGM. ㄷ. FH=6√2일 때 △FGM 넓이 최댓값 9.
  solution_summary: |
    좌표 A(0,0)·B(a+b,0)·C(a+b,a+b)·D(0,a+b). E=(a,0)·F=(a+b,a)·G=(b,a+b)·H=(0,b). M=중점=((a+b)/2, (a+b)/2). ㄱ FM·GM 계산 (좌표). ㄴ 넓이 두 삼각형 비교. ㄷ FH 길이 조건 → a+b 결정 → 넓이 최대 (산평-기평).
  category: 명제
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 정사각형-내분점-거리·넓이-부등식
  mechanism_secondary: [좌표화-내분점, 거리-공식, 산술-기하-평균]
  insight_types_used: [I-CON, I-SYM]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-05-STEP3-#09
  page: 72
  problem_summary: |
    AB=5·BC=12 직각 △ABC 내부 점 P에서 변 AB·BC·CA에 내린 수선 길이 a·b·c. 5/a+12/b+13/c 최솟값.
  solution_summary: |
    △ABC 넓이 = (1/2)·5·12 = 30 = (1/2)(5a+12b+13c) → 5a+12b+13c = 60. 코시-슈바르츠: (5a+12b+13c)(5/a+12/b+13/c) ≥ (5+12+13)² = 900. 60·(식) ≥ 900 → 식 ≥ 15.
  category: 명제
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 코시-슈바르츠-역수-합-최소
  mechanism_secondary: [내부-점-수선-넓이-분할, 코시-슈바르츠, 등호-조건]
  insight_types_used: [I-XU, I-CON, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-05-STEP3-#10
  page: 72
  problem_summary: |
    실수 x 두 조건 p: x≥a는 x≤b-4, q: x>a-b이고 x<b-a. 진리집합 P·Q. 보기 옳은 것 ㄱ. Q=∅이면 a≥b. ㄴ. a=0·b=4이면 Q⊂P. ㄷ. p→q의 역이 거짓인 두 정수 a·b 순서쌍 (a,b) 개수 12.
  solution_summary: |
    P: [b-4,∞)∩(-∞,a]가 아니라 부등식 재해석. P: x≥a ∧ x≤b-4 → [a, b-4] (a≤b-4일 때). Q: (a-b, b-a). ㄱ Q=∅ ↔ a-b≥b-a ↔ a≥b. ㄴ 특정 값. ㄷ 역 q→p 거짓 = Q⊄P → 개수 조건.
  category: 명제
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 진리집합-구간-포함-역-거짓
  mechanism_secondary: [구간-교집합, 포함-조건, 정수-순서쌍-개수]
  insight_types_used: [I-CON, I-BW]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-05-STEP3-#11
  page: 72
  problem_summary: |
    실수 x에 (x²+x+1)/(x⁴+2x³+6x²+5x+13) 최댓값 M. 45M.
  solution_summary: |
    분모 = x⁴+2x³+6x²+5x+13. t=x²+x 치환 확인 or 분모 인수분해 시도 (x²+x+? 형태 이중근). t=x²+x → 분자=t+1. 분모=(t)²+? ⋯ ⋯ = t²+5t+13. f(t)=(t+1)/(t²+5t+13). f'=0 극값 → t=-2. f_max=(-1)/(4-10+13)=-1/7. But 부호 확인. 실제 계산: M=1/9 → 45M=5.
  category: 명제
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 유리식-치환-극값
  mechanism_secondary: [분모-인수-발견, 치환-t=x²+x, 극값-분수]
  insight_types_used: [I-RT, I-CON, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도
```

---

## 06 함수 (CM2-FN · STEP 3, pp.87-88, 12문)

```yaml
- source: 블랙라벨-CM2-06-STEP3-#01
  page: 87
  problem_summary: |
    R에서 R로 두 함수 f·g가 모든 실수 x·y에 f(x-g(y))=(x+4y²-1)³-3 만족. f(0)=5일 때 f(2)-g(2).
  solution_summary: |
    x=g(y) 대입: f(0)=(g(y)+4y²-1)³-3=5 → (g(y)+4y²-1)³=8 → g(y)+4y²-1=2 → g(y)=3-4y². f 공식: 임의 x·y=0 → f(x-g(0))=(x-1)³-3, g(0)=3 → f(x-3)=(x-1)³-3 → f(u)=(u+2)³-3. f(2)=61, g(2)=-13. 차 74.
  category: 함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 함수-방정식-특수-대입-역산
  mechanism_secondary: [x=g(y)-대입, f-일반형-결정, 함숫값-계산]
  insight_types_used: [I-BW, I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도 · 정점 6항 자격 4+ 통과 예상

- source: 블랙라벨-CM2-06-STEP3-#02
  page: 87
  problem_summary: |
    실수 전체에서 정의된 f(x)=3|x-1|+ax+4+b|x+2|가 일대일대응이 되도록 (a,b) 순서쌍 개수. a·b 한 자리 자연수.
  solution_summary: |
    구간별 정의 후 각 구간 기울기 3부호+a+b부호. 일대일대응 = 전 구간에서 기울기 같은 부호(순증 or 순감). 구간 (x<-2·-2<x<1·x>1) 각각 기울기 -3+a-b·-3+a+b·3+a+b. 세 값 모두 양수 or 모두 음수 → (a,b) 조건.
  category: 함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 절댓값-일대일대응-기울기-조건
  mechanism_secondary: [구간별-기울기, 부호-일치, 정수-순서쌍]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-06-STEP3-#03
  page: 87
  problem_summary: |
    두 함수 f(x)=ax+2, (g∘f)(x)=x²-x-2. 부등식 g(x)≤0의 정수 해 7개 이상 존재 자연수 a의 최솟값.
  solution_summary: |
    (g∘f)(x)=g(ax+2)=x²-x-2. u=ax+2 → x=(u-2)/a → g(u)=((u-2)/a)² - (u-2)/a - 2. g(u)≤0 → ((u-2)/a-2)((u-2)/a+1)≤0 → -1≤(u-2)/a≤2 → 2-a≤u≤2+2a. 정수 해 7개 이상 → 2+2a-(2-a)+1=3a+1≥7 → a≥2. 최솟값 2.
  category: 함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 합성함수-역치환-부등식-정수해
  mechanism_secondary: [치환-u=ax+2, 이차부등식-해-구간, 정수-해-개수]
  insight_types_used: [I-BW, I-CON]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-06-STEP3-#04
  page: 87
  problem_summary: |
    R에서 R로 f(x)가 역함수 f⁻¹(x) 존재, 임의의 두 실수 a·b에 f(a+b)=f⁻¹(a)+f⁻¹(b) 만족. 보기 ㄱ. f(1)=1이면 f(4)=3. ㄴ. f⁻¹(a+b)=f(a)+f(b). ㄷ. f(a)=b·f(b)=a이면 y=f(x) 그래프는 직선 y=x와 적어도 한 점에서 만남.
  solution_summary: |
    a=b=0: f(0)=2f⁻¹(0). f(0)=k → f⁻¹(0)=k/2. a=0: f(b)=f⁻¹(0)+f⁻¹(b) → f(b)-f⁻¹(b)=k/2. 반복 대입 → f 선형 관계 확인. ㄱ 대입. ㄴ 등식 대칭. ㄷ 두 값 교차 → y=x 대칭성 활용.
  category: 함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 함수-방정식-역함수-대칭
  mechanism_secondary: [특수-값-대입, 역함수-y=x-대칭, 명제-검증]
  insight_types_used: [I-CON, I-SYM, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-06-STEP3-#05
  page: 87
  problem_summary: |
    두 일차함수 f₁·f₂에 네 함수 f₁∘f₁·f₁∘f₂·f₂∘f₁·f₂∘f₂가 각각 f₁ or f₂와 일치. f₁(1)=f₂(1)=1 만족 (f₁,f₂) 순서쌍 개수.
  solution_summary: |
    f_i(x)=a_ix+b_i·f_i(1)=1 → a_i+b_i=1 → b_i=1-a_i. f_i∘f_j = a_i(a_jx+b_j)+b_i = a_ia_jx + a_ib_j+b_i. 이것이 f₁ or f₂와 일치 → (a_ia_j, a_ib_j+b_i) ∈ {(a₁,b₁),(a₂,b₂)}. 조합 논리로 (a₁,a₂) 해 탐색.
  category: 함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 일차함수-합성-체계-분류
  mechanism_secondary: [4합성-집합-폐쇄, 일차-계수-방정식, 고정점-1]
  insight_types_used: [I-CON, I-PD, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-06-STEP3-#06
  page: 87
  problem_summary: |
    X={1,2,3,4} f:X→X. (f∘f∘f) 치역 {1,2,4}. f(3)=2, f(4)=4. f(1)+f(2).
  solution_summary: |
    (f∘f∘f)(X)={1,2,4} → 3은 (f∘f∘f)의 상 아님. f(4)=4·f(3)=2. (f∘f∘f)(4)=f(f(4))=f(4)=4∈{1,2,4}✓. (f∘f∘f)(3)=f(f(2))∈{1,2,4}. 조합으로 f(1)·f(2) 값 산출.
  category: 함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 3중-합성-치역-역산
  mechanism_secondary: [치역-원소-역추적, 부분-값-조건, 조합-경우]
  insight_types_used: [I-BW, I-CON]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-06-STEP3-#07
  page: 88
  problem_summary: |
    0≤x≤1에서 y=f(x) 그래프 주어짐 (삼각 모양·꼭짓점 (1/3, 1)). 두 집합 A={x|f(f(x))-x=0, 0≤x≤1}, B={x|f(f(x))-x≠0, 0≤x≤1}. n(A∩B) 값.
  solution_summary: |
    A와 B는 서로소이므로 A∩B=∅ → n(A∩B)=0. (혹은 A∪B=[0,1]·A∩B는 정의상 공집합).
  category: 함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 조건-집합-정의-공집합
  mechanism_secondary: [정의-대립, 서로소-집합, 함수-그래프-해석]
  insight_types_used: [I-CON]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도 (함정형)

- source: 블랙라벨-CM2-06-STEP3-#08
  page: 88
  problem_summary: |
    R에서 정의된 f(x)={-(x-c)²+4 (x<2), (1/(2a+2)+1/(2b+4))x (x≥2)}. 역함수 존재. 세 양수 a·b·c에 a-b+c.
  solution_summary: |
    역함수 존재 = 일대일대응. x<2 부분 이차 (꼭짓점 c) → c≥2여야 좌측 감소. x≥2 부분 일차 (기울기 = 1/(2a+2)+1/(2b+4)) → 양의 기울기. 두 그래프 x=2에서 연속·일치·미분 규제. 조건들로 a·b·c 결정.
  category: 함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 두 식으로 정의된 함수-역함수-존재-조건
  mechanism_secondary: [일대일-분기, x=2-연속, 세-변수-방정식]
  insight_types_used: [I-CON, I-EQV]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-06-STEP3-#09
  page: 88
  problem_summary: |
    A={1,3,5,7}, B={3,5,7,9}에 두 함수 f:A→B, g:B→A. (가) f(5)=9·g(3)=5. (나) 어떤 x∈B에 g(x)=x이다. (다) 모든 x∈A에 (f∘g∘f)(x)=x+2. f(3)+g(5).
  solution_summary: |
    (다) f∘g∘f는 A→A로 x → x+2 (모듈러 재해석 or {1→3·3→5·5→7·7→1 or 9?}). 마지막 원소 규정 확인. (가)에서 f(5)=9·g(3)=5. (나) 어떤 x g(x)=x. 여러 조건 결합 후 f·g 완전 결정.
  category: 함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 유한집합-합성-x+2-역산
  mechanism_secondary: [f∘g∘f-분해, 고정점-조건, 값-역산]
  insight_types_used: [I-BW, I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-06-STEP3-#10
  page: 88
  problem_summary: |
    방정식 |x-[x]-1/2|=(1/4)x²의 실근 개수.
  solution_summary: |
    x=n+t (n=[x]·0≤t<1) → |t-1/2|=(1/4)(n+t)². 좌 삼각파 (0~1/2 감소·1/2~1 증가·최댓값 1/2·최솟값 0). 우 매 구간 [n,n+1]에서 이차. n 값별 교점 개수 시각화 or 대입.
  category: 함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 가우스-삼각파-이차-교점-개수
  mechanism_secondary: [가우스-분해, 삼각파-이차-교점, 구간별-정수-n]
  insight_types_used: [I-RT, I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-06-STEP3-#11
  page: 88
  problem_summary: |
    R에서 정의된 f(x)={ax+b (x<1), cx²+3x (x≥1)} 역함수 존재. y=f(x)와 y=f⁻¹(x) 교점 개수 3, 교점 x좌표 -2·1·2. 3a+6b-8c.
  solution_summary: |
    교점 x좌표 -2·1·2. y=x 대칭 특성: 교점은 y=x 위 (일반적으로). x=-2: f(-2)=-2 → -2a+b=-2. x=1: f(1)=1 → 경계 c+3=1 → c=-2 (x≥1 정의). x=2: f(2)=2 → 4c+6=2 → c=-1 (모순 확인). 조건 재정합 후 a·b·c 결정 → 3a+6b-8c 계산.
  category: 함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 부분별-역함수-y=x-교점-3
  mechanism_secondary: [y=x-대칭-교점, 두 식으로 정의된 함수-연속, 계수-방정식-3개]
  insight_types_used: [I-SYM, I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-06-STEP3-#12
  page: 88
  problem_summary: |
    양수 m에 두 함수 f(x)=x²+2x, g(x)=(x-m)²+m. 실수 t(t>-1)에 집합 {x|f(x)=t or g(x)=t, x는 실수} 모든 원소 합 h(t). 함수 h(t)의 치역 모든 원소 합 19일 때 m. [2023 교육청]
  solution_summary: |
    f(x)=t → x²+2x-t=0 → 근합 -2. g(x)=t → (x-m)²=t-m → x=m±√(t-m). 두 근 합 = 2m. h(t) = (f의 근) ∪ (g의 근) 합 = -2 + 2m (근이 서로 다른 경우) or 부분 (근이 겹칠 때). t가 두 그래프 교점 지날 때 h(t) 변화 → 계단형 함수. 치역 원소 합 19 → m 결정.
  category: 함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 두-이차-근-합-계단-함수
  mechanism_secondary: [근합-정리, 그래프-교점-분기, 계단-치역-원소]
  insight_types_used: [I-PD, I-CON, I-XU]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도 · 2023 교육청 · 정점 6항 자격 4+ 통과 예상
```

---

## 07 유리함수 (CM2-RF · STEP 3, pp.98-99, 12문)

```yaml
- source: 블랙라벨-CM2-07-STEP3-#01
  page: 98
  problem_summary: |
    새로 개업 카페 디저트 메뉴 케이크·쿠키. 1일차 케이크:쿠키 판매량 비 1:3, 2일차 5:7. 이틀 동안 케이크·쿠키 판매량의 비가 1일차 디저트 총 판매량:2일차 총 판매량과 동일. 이틀 동안 총 판매량 100 초과·150 미만. 2일차 총 판매량.
  solution_summary: |
    1일차 총 = 4k, 2일차 총 = 12m (5:7 → 12m). 이틀 케이크 합 = k+5m, 쿠키 합 = 3k+7m. 조건: (k+5m):(3k+7m) = 4k:12m = k:3m → 3m(k+5m)=k(3k+7m) → 3km+15m²=3k²+7km → 3k²+4km-15m²=0 → (3k-5m)(k+3m)=0 → k=5m/3. 총=4k+12m=20m/3+12m=56m/3. 100<56m/3<150 → m=6→112 or m=7→130. 자연수 판매량 조건으로 확정.
  category: 유리함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 비-조건-이차-방정식-자연수-범위
  mechanism_secondary: [비-치환, 이차-인수분해, 자연수-범위-필터]
  insight_types_used: [I-CON, I-EQV, I-PD]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-07-STEP3-#02
  page: 98
  problem_summary: |
    y=4/(x-3)+2 (x>3) 그래프 위 한 점 P와 두 점 A(4,0)·B(0,2)에 대해 PA²+PB² 최솟값.
  solution_summary: |
    P=(x, 4/(x-3)+2) with x>3. PA²=(x-4)²+(4/(x-3)+2)². PB²=x²+(4/(x-3))². 합 미분 or AM-GM. 대칭 관측: A·B 중점 M=(2,1). PA²+PB²=2PM²+(1/2)AB²(중점 공식). PM 최소 = P를 M(2,1) 근접시킴. AB²=4+4=8.
  category: 유리함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 중점공식-PA²+PB²-최소
  mechanism_secondary: [중점-공식, 유리함수-거리, 최소값]
  insight_types_used: [I-BW, I-CON]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-07-STEP3-#03
  page: 98
  problem_summary: |
    세 함수 f(x)=1-1/x, g(x)=|x|, h(x)=ax+b. 방정식 (g∘f)(x)=h(x)가 서로 다른 세 양의 실근·세 근 비 1:2:3. 세 근 합.
  solution_summary: |
    g∘f(x)=|1-1/x|=|1/x||x-1|. 케이스 분리 x>1: (x-1)/x = ax+b·0<x<1: (1-x)/x = ax+b. 각 이차방정식 근. 세 근이 t·2t·3t 비율 → 근과 계수 관계로 t 결정.
  category: 유리함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 합성-절댓값-이차방정식-근-비
  mechanism_secondary: [케이스-분리-절댓값, 근-비-1:2:3, 근과-계수]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-07-STEP3-#04
  page: 98
  problem_summary: |
    유리함수 f(x)=(3x-1)/(x+1), g(x)=|f(x)+q|. 조건 만족 두 실수 x₁·x₂ 존재하는 자연수 q 최솟값: (가) -1<x₁<x₂<0. (나) g(x₁)<3·g(x₂)>3.
  solution_summary: |
    f(x)=(3x-1)/(x+1) = 3-4/(x+1). x∈(-1,0) → x+1∈(0,1) → 4/(x+1)>4 → f(x)<-1. g=|f+q|. (가) x₁<x₂인 두 점에서 g가 3 미만·3 초과 존재 → g 그래프가 3을 교차. |f(x)+q|=3의 해 존재 → f+q=±3 → f=-q±3. f 범위 검토 후 q 최소.
  category: 유리함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 유리-절댓값-교차-조건-최소-q
  mechanism_secondary: [함수-범위-분석, 절댓값-분기, q-부등식]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-07-STEP3-#05
  page: 98
  problem_summary: |
    f(x)=(1-x)/|x|·실수 a에 g(a)를 방정식 f(x)=a의 서로 다른 실근 개수. 두 집합 A={(a,y)|y=g(a)}·B={(a,y)|a²+(y-1)²=r², r>0}. n(A∩B)=1 되는 모든 양의 실수 r 값의 합.
  solution_summary: |
    f(x): x>0 (1-x)/x=1/x-1 (x→0⁺ ∞, x→∞ -1). x<0 (1-x)/(-x)=(x-1)/x=1-1/x (x→0⁻ ∞, x→-∞ 1). 그래프 시각 → g(a) = f=a 근 개수 (0·1·2). g(a) 계단함수. B는 (0,1) 중심 반지름 r 원. 접점 조건 n=1.
  category: 유리함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 근-개수-계단-원-접점
  mechanism_secondary: [절댓값-분기-그래프, 계단함수-g(a), 원-접점-조건]
  insight_types_used: [I-RT, I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-07-STEP3-#06
  page: 98
  problem_summary: |
    8보다 작은 음 아닌 세 정수 a·b·c에 양의 실수 정의역 함수 f(x)=(ax+b)/(2x+c). f 일대일함수 (a,b,c) 개수 m·상수함수 (a,b,c) 개수 n. m-n.
  solution_summary: |
    f(x) 일대일 ↔ ac-2b ≠ 0. f 상수 ↔ ac-2b=0. a·b·c ∈ {0·1·2·⋯·7} 각 8개, 총 512. 상수 조건 (a,b,c) 개수 나열 → n. 일대일 = 512-n → m=512-n-(무효 경우). m-n 계산.
  category: 유리함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 유리-일대일-상수-경우-차
  mechanism_secondary: [ad-bc-조건, 경우-열거, 정수-조합]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-07-STEP3-#07
  page: 99
  problem_summary: |
    자연수 n에 대해 원 x²+y²=n²과 곡선 y=k/x (k>0)가 서로 다른 네 점에서 만남. 네 점을 꼭짓점 하는 직사각형에서 긴 변 길이가 짧은 변 2배 되는 실수 k 값을 f(n)이라 할 때 f(1)+f(2)+f(3).
  solution_summary: |
    xy=k → x·(k/x)=k. 원 위 점 (x, k/x): x²+k²/x²=n² → x⁴-n²x²+k²=0. 두 양수 해 α²·β² (근과 계수: α²+β²=n²·α²β²=k²). 직사각형 두 변 |2α|·|2·k/α|. 긴변:짧은변 = 2:1 → α/(k/α)=2 → α²=2k → k=α²/2. 근과 계수와 결합.
  category: 유리함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 원-쌍곡선-직사각형-변-비율
  mechanism_secondary: [원-쌍곡선-교점, 근과-계수, 변-비-조건]
  insight_types_used: [I-CON, I-XU]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-07-STEP3-#08
  page: 99
  problem_summary: |
    f(x)=(4x+b)/(x-2a)가 4가 아닌 모든 x에 f⁻¹(x)=f(x-6)-6 만족. y=(f∘f)(x) 그래프가 y=x+1과 오직 한 점에서 만날 때 두 상수 a·b에 12(b-a).
  solution_summary: |
    f⁻¹(x)=f(x-6)-6 → 그래프 자체가 (3,3) 대칭? y=x+c 형태 궤적 대칭. f의 두 점근선 x=2a, y=4. 대칭 중심 = 두 점근선 교점 (2a,4). 조건: 대칭 관계 정합 후 a·b 결정. (f∘f)(x)와 y=x+1 한 점 만남 → 판별식=0 접선 조건.
  category: 유리함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 역함수-관계식-대칭-접선-1점
  mechanism_secondary: [역함수-그래프-대칭, 점근선-교점, 접선-판별식]
  insight_types_used: [I-SYM, I-BW, I-CON, I-XU]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도 · 정점 6항 자격 4+ 통과 예상

- source: 블랙라벨-CM2-07-STEP3-#09
  page: 99
  problem_summary: |
    f(x)=36/(x-11)+9 (x<11)에 y=|f(x)| 그래프와 y축·직선 y=9로 둘러싸인 도형 내부·둘레에 포함되고 x·y좌표 모두 정수인 점의 개수.
  solution_summary: |
    x<11에서 f: 감소·x→11⁻ f→-∞·x→-∞ f→9. |f|: f<0 부분 뒤집힘. |f(x)|=9 될 x·y=9 만남 조건. 영역 격자점 열거 (x=0·1·⋯).
  category: 유리함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 유리함수-절댓값-영역-격자점-개수
  mechanism_secondary: [절댓값-그래프, 영역-경계, 격자점-열거]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-07-STEP3-#10
  page: 99
  problem_summary: |
    상수함수가 아닌 f(x)=(x+m-n)/(x-m) 그래프가 제3사분면 지나지 않도록 하는 정수 m의 개수가 10일 때 모든 자연수 n 값의 합.
  solution_summary: |
    f(x)=(x+m-n)/(x-m) = 1 + (2m-n)/(x-m). 점근선 x=m, y=1. 제3사분면 (x<0·y<0) 미방문 조건: 점근선 위치와 (2m-n) 부호 결합 조건. 정수 m 10개 되는 n 값 열거.
  category: 유리함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 유리함수-사분면-회피-정수m-개수
  mechanism_secondary: [점근선-사분면-분석, 정수-매개-개수, n-역산]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-07-STEP3-#11
  page: 99
  problem_summary: |
    f(x)=(x+2n)/(2x-p) (n 자연수). f(1)<f(3)<f(2) 만족 자연수 p 값을 m. p=m일 때 f(x)·g(x)=(4x+n)/(x+q). g(f(3))<g(f(2))<g(f(1)) 자연수 q 개수 Q(n). Q(80).
  solution_summary: |
    f: 유리함수. f(1)<f(3)<f(2) 부등식 두 개 → p 범위 → m=p 최솟값 (자연수). g 유사 부등식. 두 조건 결합해 Q(n) 계산. n=80.
  category: 유리함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 두-유리함수-값-순서-매개-개수
  mechanism_secondary: [유리함수-순서-부등식, p·q-범위, 자연수-개수]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-07-STEP3-#12
  page: 99
  problem_summary: |
    f(x)=bx/(x-a) (a>0·b≠0)에 g(x)={f(x) (x<a), f(x+2a)+a (x≥a)}. 실수 t에 y=g(x)와 y=t 교점 개수 h(t). {t|h(t)=1}={t|-9≤t≤-8}∪{t|t≥k}. a·b·g(-k) 값. [2021 교육청]
  solution_summary: |
    f(x)=bx/(x-a) = b + ab/(x-a). 점근선 x=a·y=b. g는 x<a에서 f, x≥a에서 f를 (-2a, +a) 평행이동 → 새 점근선 x=-a·y=b+a. 두 그래프 결합 → y=t 교점 개수 그래프. h(t)=1인 구간이 정확히 [-9,-8]∪[k,∞) → a·b 결정.
  category: 유리함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 조각-유리함수-교점-개수-구간
  mechanism_secondary: [평행이동-점근선, 교점-개수-h(t), 구간-역산]
  insight_types_used: [I-CON, I-PD, I-BW]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도 · 2021 교육청 · 정점 6항 자격 4+ 통과 예상
```

---

## 08 무리함수 (CM2-RF · STEP 3, pp.108-109, 12문)

```yaml
- source: 블랙라벨-CM2-08-STEP3-#01
  page: 108
  problem_summary: |
    세 실수 x·y·z에 대해 x+y+z+1=2(√(x-1)+√(y-2)+√(z+1)) 성립. x^11-41y+72z^12의 값.
  solution_summary: |
    각 항 완전제곱 정리: (√(x-1)-1)²+(√(y-2)-1)²+(√(z+1)-1)²=0. 각 제곱 0 → x=2·y=3·z=0. 2^11-41·3+72·0^12=2048-123+0=1925.
  category: 무리함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 제곱합-0-분해
  mechanism_secondary: [완전제곱-분해, 무리식-정수해, 대입]
  insight_types_used: [I-EQV, I-CON]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-08-STEP3-#02
  page: 108
  problem_summary: |
    f(x)=√(x-1), g(x)=1/(x+1) (x>-1) 그래프와 그 역함수 y=f⁻¹(x)·y=g⁻¹(x) 함께 그림. 두 곡선 y=f(x)·y=g(x) 교점 P(x₁,y₁)·두 곡선 y=g(x)·y=g⁻¹(x) 교점 Q(x₂,y₂)·두 곡선 y=f⁻¹(x)·y=g⁻¹(x) 교점 R(x₃,y₃). 보기 ㄱ. 1/2<y₃<1. ㄴ. x₁y₁=x₃y₃. ㄷ. 두 직선 PQ·QR 기울기 곱 1.
  solution_summary: |
    P: √(x-1)=1/(x+1). Q: g와 g⁻¹ 교점 → y=x 위. R: f⁻¹와 g⁻¹ 교점 → 원 f·g 교점 P의 y=x 대칭 = (y₁,x₁). ㄱ y₃ 계산. ㄴ x₁y₁ = x₃y₃ (좌표 교환 = 곱 불변). ㄷ 기울기 조합.
  category: 무리함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 함수-역함수-교점-y=x-대칭
  mechanism_secondary: [y=x-교점-대칭, 무리·유리-교점, 기울기-곱]
  insight_types_used: [I-SYM, I-CON, I-XU]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도 · 정점 6항 자격 4+ 통과 예상

- source: 블랙라벨-CM2-08-STEP3-#03
  page: 108
  problem_summary: |
    0≤x<4에서 두 함수 y=ax-1, y=[x]-√(x-[x]) 그래프의 교점 1개일 때 실수 a 값의 범위.
  solution_summary: |
    y=[x]-√(x-[x])는 각 구간 [n, n+1) (n=0·1·2·3)에서 y=n-√(x-n). 구간별 무리함수 4 부분별 계단·감소. y=ax-1 지나면서 교점 정확 1개 조건 = 각 식과의 교점 수 세어 합=1 되는 a 범위.
  category: 무리함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 계단-무리조각-직선-교점-1개
  mechanism_secondary: [가우스-분해-조각, 무리함수-감소, 직선-매개-a-범위]
  insight_types_used: [I-CON, I-PD, I-XU]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-08-STEP3-#04
  page: 108
  problem_summary: |
    두 함수 f(x)=-6x+5/(x+1), g(x)=√(x+4) 그래프와 y축·직선 x=12로 둘러싸인 도형의 내부·둘레에 포함되고 x좌표·y좌표 모두 정수인 점의 개수.
  solution_summary: |
    f(x): 유리함수 감소. g(x)=√(x+4) 증가. 두 그래프 사이 영역 [0,12]에서. 각 정수 x=0·1·⋯·12에 대해 f(x)≤y≤g(x) (또는 반대) 범위 정수 y 개수 계산.
  category: 무리함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 유리·무리-영역-격자점-개수
  mechanism_secondary: [함수-범위-비교, 정수-y-개수, 합산]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-08-STEP3-#05
  page: 108
  problem_summary: |
    f(x)=√(x+2)·역함수 y=f⁻¹(x) 그래프의 교점 P. f 위 점 A와 A의 y=x 대칭 B. |AB| 최대일 때 △ABP 넓이. A의 x좌표는 P의 x좌표보다 작음.
  solution_summary: |
    P: y=x 위 f(P)=P → √(P+2)=P → P²-P-2=0 → P=2 → (2,2). A=(a, √(a+2))·B=(√(a+2), a). |AB|=|a-√(a+2)|·√2. AP·BP를 이용해 △ABP=삼각형 (P·A·B, P 위 y=x 상, AB ⊥ y=x). AB 최대 → t=√(a+2)-a 극값. 넓이 = (1/2)|AB|·(P에서 AB까지 수선).
  category: 무리함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 무리-y=x-대칭-교점-넓이-최대
  mechanism_secondary: [y=x-대칭점, 거리-극값, 삼각형-넓이]
  insight_types_used: [I-SYM, I-BW, I-CON]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-08-STEP3-#06
  page: 108
  problem_summary: |
    f(x)=-√|x|-3+5에 곡선 y=f(f(x))와 직선 y=k가 만나는 서로 다른 점의 개수 g(k). g(6)+g(5)+g(1).
  solution_summary: |
    f(x)=-√(|x|-3)+5 (|x|≥3). f 그래프 대칭 (y축 대칭·최댓값 5·x=±3에서). f(f(x)) = f 위 y값 → 다시 f. 그래프 그리기 → y=k와 교점 개수 k별 시각. k=6·5·1 각 g(k) 합.
  category: 무리함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 무리-합성-y축-대칭-교점-개수
  mechanism_secondary: [절댓값-대칭, 합성-치역-분석, 교점-개수-그래프]
  insight_types_used: [I-SYM, I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-08-STEP3-#07
  page: 109
  problem_summary: |
    f(x)={√(-x) (x<0), x² (x≥0)} 그래프와 원 x²+(y-1)²=1로 둘러싸인 도형 3개 존재. 각 도형 넓이 작은 순서대로 S₁·S₂·S₃. S₃-(S₁+S₂).
  solution_summary: |
    x<0: y=√(-x) (2사분면). x≥0: y=x² (1사분면). 원 중심 (0,1)·반지름 1. 원과 두 그래프 교점 분석 → 3개 폐영역 나열 후 각 넓이 계산 (부채꼴·삼각형 조합).
  category: 무리함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 조각-무리·이차-원-영역-3
  mechanism_secondary: [조각-그래프-원-교점, 폐영역-분리, 부채꼴-조합]
  insight_types_used: [I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-08-STEP3-#08
  page: 109
  problem_summary: |
    정의역 실수 전체·치역 양의 실수 전체 f(x)={√(-3x+6)+5 (x≤2), (ax+b)/(x+2) (x>2)}. f 역함수 존재하도록 (a,b) 순서쌍 개수 k, 역함수 g(x)에 모든 g(4) 합 S. k+S.
  solution_summary: |
    역함수 = 일대일. x≤2: √(-3x+6)+5 감소 (5→∞ 아닌 5→감소? 재검토). x>2: 유리 (ax+b)/(x+2). x=2 연속·일대일 조건. 치역 양의 실수 → 두 식의 치역 유니온 = (0,∞). (a,b) 정수 조건 열거 후 k. g(4)=f 역 (y=4 원상) 합 S.
  category: 무리함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 부분별-역함수-존재-원상-합
  mechanism_secondary: [조각-일대일-조건, 치역-결합, 원상-합]
  insight_types_used: [I-CON, I-BW, I-PD]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-08-STEP3-#09
  page: 109
  problem_summary: |
    f(x)=-1-2√(x-2) (2≤x≤38) 그래프 위 두 점 P(a,b)·Q(c,d)에 (b+d)/(a+c) 최댓값 M·최솟값 m. M-m.
  solution_summary: |
    (b+d)/(a+c) = P·Q 두 점의 중점의 원점 기울기. P·Q 매개 t·s → 기울기 함수 극값. 편미분 or 대칭성 활용 → 극값.
  category: 무리함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 두점-중점-원점-기울기-극값
  mechanism_secondary: [중점-공식, 기울기-원점, 두-매개-극값]
  insight_types_used: [I-BW, I-CON, I-PD]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-08-STEP3-#10
  page: 109
  problem_summary: |
    두 실수 a·b와 양수 k에 R에서 정의된 f(x)={√(-2x+2a)+4 (x<k), -√(2x-8)+b (x≥k)}. (가) f(0)=8. (나) y=f(x) 그래프는 점 (k, f(k))에 대해 대칭. k·f(2k).
  solution_summary: |
    f(0)=√(2a)+4=8 → a=8. 대칭 조건: 두 식 그래프가 (k, f(k))에 관해 대칭 → 두 무리함수 대칭 중심. 각 무리함수 정점(x=a, y=4)과 (x=4, y=b)를 (k,f(k))에 관해 대칭 → k·b·f(k) 관계식.
  category: 무리함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 조각-무리-점-대칭-매개-결정
  mechanism_secondary: [점-대칭-중심, 조각-연속·대칭, 매개-방정식]
  insight_types_used: [I-SYM, I-CON, I-BW]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-08-STEP3-#11
  page: 109
  problem_summary: |
    f(x)=√(ax)+b (a≠0)·실수 t에 y=|f(x)|·직선 l: x-4y+t=0 교점 개수 h(t)라 하자. {t|h(t)=1}={t|t<-1/6}일 때 두 상수 a·b에 6a+3b.
  solution_summary: |
    l: y=(x+t)/4. |f(x)|와 교점 개수 h(t). h(t)=1 되는 t 범위가 {t<-1/6} → 접선·경계 조건. a·b가 f 그래프 형태 결정 → h(t) 그래프 도출 후 조건 매칭.
  category: 무리함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: 절댓값-무리-직선-교점-개수-t범위
  mechanism_secondary: [절댓값-그래프, h(t)-계단, t-범위-역산]
  insight_types_used: [I-CON, I-PD, I-BW]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도

- source: 블랙라벨-CM2-08-STEP3-#12
  page: 109
  problem_summary: |
    f(x)=√(ax-3)+2 (a≥3/2). {x|x≥2} 정의역 g(x)={f(x) (f(x)<f⁻¹(x)), f⁻¹(x) (f(x)≥f⁻¹(x))}. 자연수 n에 y=g(x)와 y=x-n 교점 개수 h(n). h(1)=h(3)<h(2). g(4)=q/p. p+q, a 상수·p·q 서로소. [2020 교육청]
  solution_summary: |
    f와 f⁻¹의 y=x 대칭. g = min(f, f⁻¹) 형태. y=x-n과 교점 = f, f⁻¹ 각각과의 교점 (min 아래쪽) 조합. h(n) 함수 도출 후 h(1)=h(3)<h(2) 조건에서 a 결정 → g(4).
  category: 무리함수
  difficulty: STEP3
  tier_estimated: star_5_premium
  mechanism_primary: min-함수-역함수-교점-개수-조건
  mechanism_secondary: [y=x-대칭-min, h(n)-교점, a-역산]
  insight_types_used: [I-SYM, I-CON, I-PD, I-BW]
  citation_note: 블랙라벨 CM2 STEP 3 · 최고난도 · 2020 교육청 · 정점 6항 자격 4+ 통과 예상
```

---

## Summary

- **총 문항**: 93문 (8 챕터)
- **tier 통일**: `star_5_premium_max` (STEP 3 = 최고난도)
- **주요 mechanism 카테고리 (CM2 전체)**:
  - GM (34문): 반사·대칭·궤적·좌표변환·수족삼각형·극선·정점발견·평행선-거리
  - ST (23문): mod-잔여·서로소·포함배제·조건부 진리집합·논리퍼즐·코시-슈바르츠
  - FN (12문): 함수방정식·두 식으로 정의된 함수·역함수-y=x 대칭·합성-치역·계단함수
  - RF (24문): 유리·무리 그래프 교점·계단 h(t)·min 함수·역함수 대칭
- **정점 자격 4+ 통과 예상 (premium 최상위)**: 15문 표시 (`정점 6항 자격 4+ 통과 예상`)
- **저작권**: 발문 40~60자 축약 · solution 60~100자 · mechanism 라벨 중심 · 학습 목적
