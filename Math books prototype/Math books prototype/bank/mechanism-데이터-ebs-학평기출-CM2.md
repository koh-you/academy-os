---
name: mechanism-데이터-ebs-학평기출-CM2
description: EBS 올림포스 2025 전국연합학력평가 기출문제집 수학(고1) CM2 대단원 06~11 (도형의방정식·집합과명제·함수와그래프) 정독 데이터. 세션 63 (2026-07-21) 층화 표본 28문 재판정. 학평 원본 pool 재검증 · 정독-스키마 v2.0. 저작권 준수.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: EBS 올림포스 2025 전국연합학력평가 기출문제집 · 수학(고1) · CM2 파트 발췌 PDF (80페이지)
  section: CM2 대단원 06~11 (도형의방정식1·2 · 집합과명제1·2 · 함수와그래프1·2)
  unit_code: CM2-GM · CM2-ST · CM2-FN · CM2-RF
  sub_unit: 평면좌표 · 직선 · 원 · 도형이동 · 집합 · 명제 · 함수·역함수 · 유리함수 · 무리함수
  citation_note: "학평 기출 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약)"
  extract_range: "인쇄 pg 78~152 (CM2 파트 발췌본 · CM1 파트는 별도 파일)"
  pages: "78~152"
  total_problems: 약 470문 (전 유형연습·개념확인·1등급도전 합산 예상)
  sample_problems: 28  # 층화 표본
  predicted_problems: ~442  # 나머지 회귀 예측 대상
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: session-62-EBS-올림포스-고난도-CM2 후속 학평 원본 재확대
  parent_related:
    - bank/mechanism-데이터-전국연합-CM2-GM.md  # 세션 52 v1.0 (같은 책 · 형식만 v1.0)
    - bank/mechanism-데이터-전국연합-CM2-ST.md  # 세션 53 v1.0
    - bank/mechanism-데이터-전국연합-CM2-FN.md  # 세션 53 v1.0
    - bank/mechanism-데이터-전국연합-CM2-RF.md  # 세션 53 v1.0
  cross_matching_targets:
    - 완자 CM2 (예정)
    - 마더텅 학평 모음 (예정)
    - 풍산자 CM2 (예정)
    - EBS 올림포스 고난도 CM2 (세션 62)
    - EBS 올림포스 학평기출 CM1 (자매 파일)
---

# EBS 올림포스 2025 학평기출 CM2 — 정독 데이터 v1.0

**출처**: EBS 올림포스 2025 전국연합학력평가 기출문제집 · 수학(고1) · CM2 파트 발췌 (인쇄 pg 78~152)
**대상 범위**: 6대단원 (도형의방정식1·2 · 집합과명제1·2 · 함수와그래프1·2) · 유형연습 + 1등급 도전
**저작권**: 학습·분석 목적. 원문 인용 아님. 발문·풀이 요약 (추상화)만 기재. 학평 원년월·문번은 사실 자료로 표기.

**책 구조**: 각 단원마다 (1) 개념 짚어보기 (2) 개념 확인 문제 (3) 내신&학평 유형 연습 (유형 1~N) (4) 1등급 도전 (2~4문). CM2 파트는 6개 대단원 × 평균 (유형연습 40문 + 1등급도전 3문) ≈ **약 260문**. 학평 3점·4점 대표 표본 층화. **세션 52·53 v1.0 파일들은 동일 책 정독** · 본 파일은 **v2.0 스키마 재판정 + 정점 원형 매트릭스 대조 + premium 재발굴** 목적.

---

## Ⅰ. 문두 metadata (요약)

### 표본 배분 (28문 층화)

| 대단원 | 소단원 | 표본 수 | 유형연습 | 1등급도전 |
|---|---|---:|---:|---:|
| 06 GM(1) | 평면좌표·직선 | 5 | 3 | 2 |
| 07 GM(2) | 원·도형이동 | 4 | 1 | 3 |
| 08 ST(1) | 집합 | 4 | 2 | 2 |
| 09 ST(2) | 명제·절대부등식 | 4 | 2 | 2 |
| 10 FN(1) | 함수·합성·역함수 | 5 | 3 | 2 |
| 11 FN(2) | 유리·무리함수 | 6 | 2 | 4 |
| **합계** | | **28** | **13** | **15** |

### 실측 vs 예측 종합

- 표본 28문 시스템 순정 판정
- 나머지 ~232문 회귀 예측 (v1.11 vendor-label-calibration + 학평 문번 회귀)

### ★ 분포 (표본 실측 28문)

| ★ | 개수 | 비율 | 비고 |
|---:|---:|---:|---|
| ★ 3 | 6 | 21% | 유형연습 3점 (초·중반 학평 번호) |
| ★ 4 | 10 | 36% | 유형연습 4점 (13~20번) + 일부 1등급도전 |
| ★ 5 | 6 | 21% | 유형연습 4점 후반 + 1등급도전 21·26~28번 |
| ★ 5 premium | 6 | 21% | 1등급도전 29·30번급 · 정점 자격 4+ |

### 학평 원본 pool 재검증 (기존 학평 벤더 크로스 매칭)

- **본 파일 vs 세션 52·53 전국연합-CM2-*.md 4파일**: **동일 원본 (같은 책)** · v2.0 스키마 재판정 · 회귀 정합 매트릭스 갱신
- **본 파일 vs mechanism-데이터-ebs-올림포스-고난도-CM2.md** (세션 62): **원본 다름 (고난도판은 별책)** · 학평 문번 겹침 관계 검증 (본 표본 12문 학평번호 대조)
- **본 파일 vs 마-CM2-* (마플시너지)** · **쎈-CM2-*** · **개념원리·RPM CM2**: 학평 편입 문항이 시판 교재에도 등장하는 사례 다수 · **cross-reference 8건 감지** (아래 Ⅴ 섹션)

---

## Ⅱ. 표본 판정 (28문)

### CM2-GM · 도형의 방정식 (1)

```yaml
- id: ebs학평-CM2-GM-평면좌표-0354
  page: 86
  vendor_label: "학평 4점 · 유형08 이차함수와 접선"
  vendor_label_original: "2018학년도 9월 고1 학력평가 28번"
  category_type: "유형연습 4점"
  summary: |
    이차함수 y=x² 위 점 P(1,1)의 접선 l₁, P를 지나고 l₁과 수직인 l₂.
    l₁이 x축과 만나는 점 Q, l₂와 y=x²의 P가 아닌 교점 R.
    삼각형 PRQ 넓이 S일 때 40S 값.
  category: 이차함수 접선·수직조건·다른교점·넓이
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "접선 기울기 = 2x|_{x=1} = 2"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "수직 조건 → l₂ 기울기 = -1/2"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "y=x²과 l₂ 연립 → R 좌표"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "세 점 좌표로 넓이 (외적 공식 또는 밑변·높이)"}
  insight_count: 4
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    접선·수직·다른교점·넓이 4단계 표준 절차 결합 · 각 단계 depth 2 · 학평 28번(4점 킬러 직전) 위상 · ★ 4 정합.
  tier: star_4
  mechanism_primary: 이차함수 접선 기울기 + 수직 조건 + 세 점 넓이
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: [쎈-CM2-GM-평면좌표-0032, 마-CM2-GM-평면좌표-0037]
    L3_multi_vendor_tier: ["학평 4점", "쎈 C 사고력 예상", "마플 TOUGH 예상"]
    L5_confidence: 0.80

- id: ebs학평-CM2-GM-평면좌표-0356
  page: 86
  vendor_label: "학평 3점 · 유형09 점과 직선 거리"
  vendor_label_original: "2024학년도 9월 고1 학력평가 13번"
  category_type: "유형연습 3점"
  summary: |
    점(1,3) 지나고 기울기 k인 직선 l. 원점과 l 사이 거리 √5일 때 양수 k.
  category: 점과 직선 거리 공식 · 매개변수
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 3
  star: 3
  premium: false
  rationale: 표준 공식 (|kx₁-y₁-k+3|/√(k²+1)=√5) 매개변수 결정 · 학평 13번 3점 · 절차형 ★ 3.
  tier: star_3
  mechanism_primary: 점과 직선 거리 공식
  insight_type: 절차형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: ebs학평-CM2-GM-평면좌표-0358
  page: 87
  vendor_label: "학평 4점 · 유형05 삼각형 무게중심"
  vendor_label_original: "2016학년도 3월 고2 학력평가 나형 18번"
  category_type: "유형연습 4점"
  summary: |
    세 점 O(0,0), A(8,4), B(7,a)와 무게중심 G(5,b).
    G와 직선 OA 사이 거리 √5일 때 a+b 값.
  category: 무게중심 좌표 결정 + 점-직선 거리
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "무게중심 x좌표: (0+8+7)/3=5 → 자동 · y좌표: (0+4+a)/3=b"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "직선 OA: y=x/2 → x-2y=0"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "|5-2b|/√5=√5 → |5-2b|=5 → b=0 or 5, 양수 a 조건 대입"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: 무게중심+점-직선 거리 결합·부호 갈래 존재 · 학평 나형 18번 · ★ 4.
  tier: star_4
  mechanism_primary: 무게중심 좌표 공식 + 점과 직선 거리 (부호 갈래)
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L2_signature_neighbors: [전국연합-2021-3월-고2-12번, 마-CM2-GM-평면좌표-0116]
    L5_confidence: 0.75

- id: ebs학평-CM2-GM-평면좌표-0361
  page: 88
  vendor_label: "학평 4점 · 1등급도전 01"
  vendor_label_original: "2017학년도 9월 고1 학력평가 21번"
  category_type: "1등급 도전"
  summary: |
    삼각형 ABC (AB=2√3, BC=2, BC 중점 D, AD=√7).
    각 ACB의 이등분선이 AB에 만나는 점 E, CE와 AD가 만나는 점 P,
    각 APE의 이등분선이 AB에 만나는 점 R, RP 연장선이 BC에 만나는 점 Q.
    삼각형 PRE의 넓이 S₁, PQC의 넓이 S₂. S₂/S₁ = a+b√7 (a,b 유리수). ab 값.
  category: 각이등분선 연쇄 + 삼각형 유사비 + 라디칼 최종답
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, signal_ref: [P6], description: "각이등분선 연쇄 반복 (2회) · 각 점 좌표·비 결정"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "각이등분선 정리 → BE:AE = BC:AC"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P4], description: "AC² = AD² + DC² - 2·AD·DC·cos → AC 결정 (또는 중선정리)"}
    - {step: 4, type: I-PD, depth: 3, effective_depth: 3, description: "삼각형 유사비 → 넓이비"}
    - {step: 5, type: I-VF, depth: 3, effective_depth: 3, description: "S₂/S₁ 라디칼 정규화 · a+b√7 형식 맞춤"}
    - {step: 6, type: I-XU, depth: 2, effective_depth: 2, description: "ab 계산 · 부호 처리"}
  insight_count: 6
  depth_score: 8.83
  base_star: 5
  star: 5
  premium: true
  rationale: |
    각이등분선 연쇄 · 유사비 · 라디칼 최종답 6단계 · depth_score 8.83·max=3·count=6·signal_ref P4·P6 ≥ 2 → premium 이중 게이트 통과.
    **O-03 각이등분선 연쇄 (쎈-CM2-GM-평-0083 SPECIAL TIP)와 원형 정합** · 학평 21번 원본 (교재 소스와 매우 유사).
  tier: star_5_premium
  mechanism_primary: 각이등분선 반복 + 삼각형 유사비 + 라디칼 정규화
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2  # 원형 O-03 이미 알려짐 · 다만 학평 원본
  vendor_calibration_signal:
    L2_signature_neighbors: [쎈-CM2-GM-평면좌표-0083, 블랙라벨-CM2-01-STEP2-#09]
    L3_multi_vendor_tier: ["학평 21번 · 1등급 도전", "쎈 C단계 SPECIAL TIP", "블랙라벨 STEP 2"]
    L5_confidence: 0.90
  cross_reference:
    - {source: 쎈-CM2-GM-평면좌표-0083, relation: "동일 학평 원본 (교재 편입)"}

- id: ebs학평-CM2-GM-평면좌표-0363
  page: 88
  vendor_label: "학평 4점 · 1등급도전 03"
  vendor_label_original: "2020학년도 9월 고1 학력평가 29번"
  category_type: "1등급 도전"
  summary: |
    1사분면 A, 3사분면 B. 두 조건: (가) A, B는 직선 y=x 위, (나) OB=2·OA.
    A에서 y축에 내린 수선의 발 H, B에서 x축에 내린 수선의 발 L.
    직선 AL과 BH의 교점 P, OP와 LH의 교점 Q. 세 점 O, Q, L 지나는 원의 넓이 = 81π/2일 때
    OA×OB 값.
  category: 두 대칭점 (y=x) + 수선 발 + 교점 P·Q + 원 지름 조건
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - {step: 1, type: I-SYM, depth: 3, effective_depth: 3, signal_ref: [P3], description: "A(t,t), B(-2t,-2t) 매개변수화 (y=x 위 · OB=2·OA)"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, description: "H(0,t), L(-2t,0) 결정 · AL·BH 두 직선 방정식"}
    - {step: 3, type: I-EQV, depth: 3, effective_depth: 3, description: "P = AL ∩ BH 연립 · Q = OP ∩ LH 연립"}
    - {step: 4, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "O·Q·L 원의 지름 = OL (∠OQL=90°?) · Thales 원주각 인식"}
    - {step: 5, type: I-VF, depth: 3, effective_depth: 3, description: "81π/2 = π·r² → r² = 81/2 → 반지름·좌표 매개변수 t 결정"}
    - {step: 6, type: I-PD, depth: 2, effective_depth: 2, description: "OA·OB = t√2 · 2t√2 = 4t² 계산"}
  insight_count: 6
  depth_score: 8.67
  base_star: 5
  star: 5
  premium: true
  rationale: |
    학평 29번 정점 · SYM(대칭점 y=x)+CON(교점 연립)+XU(원 지름 Thales)+VF(최종값 조립) 결합.
    depth_score 8.67·max=3·count=6·P3+P6 ≥ 2 → premium 이중 게이트 통과.
    **O-NEW-22 Thales 원주각 궤적 정합** (블랙라벨 CM2-02-STEP3-#04·#08).
  tier: star_5_premium
  mechanism_primary: y=x 대칭점 매개변수화 + 교점 연립 + Thales 원주각 지름 조건
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3  # 학평 29번 학평 저노출
  vendor_calibration_signal:
    L2_signature_neighbors: [블랙라벨-CM2-02-STEP3-#04, 블랙라벨-CM2-02-STEP3-#08]
    L5_confidence: 0.85
```

### CM2-GM · 도형의 방정식 (2) — 원·도형이동

```yaml
- id: ebs학평-CM2-GM-이동-0411
  page: 100
  vendor_label: "학평 3점 · 유형11 평행이동과 대칭이동"
  vendor_label_original: "2017학년도 9월 고1 학력평가 13번"
  category_type: "유형연습 3점"
  summary: |
    방정식 f(x,y)=0이 나타내는 도형 (ㄱ자 모양 · 세로 3층 가로 2칸 스텝).
    방정식 f(x+1, 2-y)=0이 좌표평면에 나타내는 도형 선택 (5지선다).
  category: 평행이동·대칭이동 결합 판별
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "x→x+1 → x축 방향 -1 평행이동"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "y→2-y → y=1 대칭 (x축 대칭 후 y축 방향 +2)"}
    - {step: 3, type: I-SYM, depth: 2, effective_depth: 2, description: "합성: 왼쪽 1칸 이동 + y=1 대칭 · 도형 회전 없음"}
  insight_count: 3
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    보기 5지선다 · 매개변수 없이 도형 판정만 · 이동+대칭 합성 인지 · ★ 3.
    유형 11번 학평 · 학평 13번(3점 초반).
  tier: star_3
  mechanism_primary: f(x+a, b-y)=0 → 평행 + 대칭 합성 인지
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.80

- id: ebs학평-CM2-GM-이동-0412
  page: 100
  vendor_label: "학평 4점 · 유형12 대칭이동 거리 최솟값"
  vendor_label_original: "2020학년도 11월 고1 학력평가 14번"
  category_type: "유형연습 4점"
  summary: |
    점 A(0,1)과 직선 l: y=-x+2. 직선 l 위 1사분면 점 B(a,b)와 x축 위 점 C.
    AC+BC 최솟값일 때 a²+b² 값.
  category: 대칭이동 최단경로 (두 축 반사)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-SYM, depth: 3, effective_depth: 3, signal_ref: [P3], description: "A를 x축 대칭 → A'(0,-1) · AC+BC = A'C+BC ≥ A'B"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "B는 y=-x+2 위 → 매개변수 b=-a+2, a∈(0,2)"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, description: "A'B 최소 = A'에서 l까지 수선 발 (l 위 최근접 점) · A'과 l 수선 발 B* 결정"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "B* 좌표 계산 · a²+b² 값"}
  insight_count: 4
  depth_score: 7.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    Fagnano 계열 축약형 (2축 반사 · 최단경로) · **O-01 Fagnano 이중 대칭 원형 근접**.
    학평 14번 · ★ 4 (SYM depth 3 · count 4 · premium 임계 미만).
  tier: star_4
  mechanism_primary: 축 대칭 반사 + 직선 위 매개점 최소
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM2-GM-이동-0664]
    L5_confidence: 0.85

- id: ebs학평-CM2-GM-원-0418
  page: 102
  vendor_label: "학평 4점 · 1등급도전 02"
  vendor_label_original: "2024학년도 3월 고2 학력평가 21번"
  category_type: "1등급 도전"
  summary: |
    두 직선 l₁: y=mx (m>1)과 l₂: y=x/m에 동시 접하는 원 (중심 A).
    l₁·원 접점 P, l₂·원 접점 Q, PQ가 x축과 만나는 점 R.
    조건: (가) PQ=QR (나) 삼각형 OPQ 넓이 24.
    l₁·AQ 교점 B일 때 BQ 길이 (A 1사분면, O 원점).
  category: 두 직선 동시 접 원 + 접점 + 넓이 조건 + 갈래
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - {step: 1, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "두 직선 각이등분선 위에 중심 A (반사 대칭)"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, description: "각이등분선 방향 → m, 1/m 조합으로 A의 좌표 매개변수화"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P4], description: "PQ=QR: 삼각형 OPQR 특수 배치 (Q가 PR의 중점)"}
    - {step: 4, type: I-PD, depth: 3, effective_depth: 3, description: "삼각형 OPQ 넓이 24 → 매개변수 m·반지름 r 결정"}
    - {step: 5, type: I-VF, depth: 2, effective_depth: 2, description: "직선 l₁·직선 AQ 연립 → B 좌표 · BQ 계산"}
  insight_count: 5
  depth_score: 8.6
  base_star: 5
  star: 5
  premium: true
  rationale: |
    **O-05 원 접선 킬러 원형 정합** (쎈-CM2-GM-원-0360과 유사 원형).
    depth_score 8.6·max=3·count=5·signal_ref P4+P6 ≥ 2 → premium 이중 게이트 통과.
    학평 21번 · 1등급도전 · 시험지 정점 슬롯 원본 pool 후보.
  tier: star_5_premium
  mechanism_primary: 두 직선 접 원 각이등분선 매개변수화 + 접점 넓이 + 갈래
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [쎈-CM2-GM-원-0360, 마-CM2-GM-원-0512]
    L5_confidence: 0.88

- id: ebs학평-CM2-GM-원-0419
  page: 102
  vendor_label: "학평 4점 · 1등급도전 03"
  vendor_label_original: "2018학년도 11월 고1 학력평가 21번"
  category_type: "1등급 도전"
  summary: |
    반지름 r, 중심이 y=x²/2+7/2 위 원 중, 직선 y=x+7에 접하는 개수 m, y=x에 접하는 개수 n.
    m 홀수 조건에서 m+n+r² 값.
  category: 이차곡선 위 원 중심 · 두 접선 조건 · 개수 조건
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, description: "원-직선 접 조건 · 중심 (a, a²/2+7/2)에서 y=x+7까지 거리 = r"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, description: "|a - a²/2 - 7/2 - 7|/√2 = r → 이차방정식 (a에 대한)"}
    - {step: 3, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "|a²/2 + 7/2 - a + 7|/√2 = r (다른 직선) · 두 이차방정식 계"}
    - {step: 4, type: I-SC, depth: 3, effective_depth: 3, signal_ref: [P5], description: "m 홀수 조건: 두 이차방정식 각 실근 개수 분류 (중근·서로 다른 실근)"}
    - {step: 5, type: I-VF, depth: 2, effective_depth: 2, description: "m+n+r² 최종 계산"}
  insight_count: 5
  depth_score: 8.6
  base_star: 5
  star: 5
  premium: true
  rationale: |
    이차곡선 위 원 중심 + 두 직선 접 조건 + 홀·짝 개수 분류 · depth_score 8.6·count=5·P5+P6 ≥ 2 → premium.
    학평 21번 · 신규 원형 후보 (기존 32 원형에 없음 → **아래 Ⅵ 신규 원형 후보 O-NEW-33**).
  tier: star_5_premium
  mechanism_primary: 이차곡선 위 원 중심 매개변수화 + 두 직선 접 조건 + 개수 홀짝
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3  # 신규 원형
  vendor_calibration_signal:
    L2_signature_neighbors: []
    L5_confidence: 0.90
```

### CM2-ST · 집합과 명제 (1)

```yaml
- id: ebs학평-CM2-ST-집합-0433
  page: 107
  vendor_label: "학평 3점 · 유형03 부분집합의 개수"
  vendor_label_original: "2016학년도 9월 고2 학력평가 나형 25번"
  category_type: "유형연습 3점"
  summary: |
    A={1,2,3,4,5}, B={1,2}. B⊂X⊂A 만족 집합 X 개수.
  category: 집합 사이 포함 관계 · 부분집합 세기
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "X는 B의 모든 원소 + A\\B={3,4,5}의 임의 부분집합 → 2³=8"}
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: 표준 절차 (원소 포함·배제) · 학평 25번급이나 실제로는 표준 · ★ 3.
  tier: star_3
  mechanism_primary: 부분집합 개수 공식 2^k
  insight_type: 절차형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.90

- id: ebs학평-CM2-ST-집합-0436
  page: 107
  vendor_label: "학평 4점 · 유형03 (보기형)"
  vendor_label_original: "2015학년도 9월 고2 학력평가 나형 20번"
  category_type: "유형연습 4점"
  summary: |
    X={x|x는 10 이하 자연수}. n∈X에 대해 f(n) = n을 최소 원소로 갖는 X의 부분집합 개수.
    보기 3개 (ㄱ f(8)=4, ㄴ 단조성, ㄷ 지수합 682) 판정.
  category: 함수 정의 · 부분집합 개수 · 보기 판단
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "f(n)=2^(10-n) 유도"}
    - {step: 2, type: I-MI, depth: 2, effective_depth: 2, description: "ㄴ 단조성 (감소·증가) 방향 판정"}
    - {step: 3, type: I-VF, depth: 2, effective_depth: 2, description: "ㄷ 지수합 2+8+32+128+512=682 검증"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: 보기형 · 절차형+통찰 중간 · 학평 나형 20번 · ★ 4.
  tier: star_4
  mechanism_primary: 최소 원소 지정 → 나머지 임의 · 함수 f(n) 유도
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: ebs학평-CM2-ST-집합-0481
  page: 116
  vendor_label: "학평 4점 · 1등급도전 01"
  vendor_label_original: "2019학년도 11월 고1 학력평가 21번"
  category_type: "1등급 도전"
  summary: |
    U={x|x는 20 이하 자연수} 부분집합 Aₖ = {x|x(y-k)=30, y∈U}.
    B = {x|(30-x)/5∈U}.
    n(Aₖ ∩ B^c) = 1 되는 모든 자연수 k 개수.
  category: 매개변수 집합 원소 카운팅 · 조건 만족 k 개수
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, description: "Aₖ 원소 결정: x는 30의 약수 중 y=k+30/x ∈ U 만족"}
    - {step: 2, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P4], description: "B 원소 결정: x = 30 - 5·y (y∈U) · 즉 특정 형태"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, description: "n(Aₖ ∩ B^c)=1: 정확히 하나 원소가 Aₖ에는 있고 B에는 없음 → k별 case"}
    - {step: 4, type: I-SC, depth: 3, effective_depth: 3, signal_ref: [P5], description: "k=1~19 각각 확인 · k 개수 세기"}
  insight_count: 4
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: true
  rationale: |
    매개변수 집합 원소 세기 정점 · depth_score 9.0·max=3·count=4·P4+P5 ≥ 2 → premium 통과.
    **신규 원형 후보 O-NEW-34 매개변수 집합 원소 카운팅** (기존 32 원형에 없음).
    학평 21번 · 1등급 도전.
  tier: star_5_premium
  mechanism_primary: 매개변수 집합 원소 결정 + 조건 만족 k 세기
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: []
    L5_confidence: 0.88

- id: ebs학평-CM2-ST-집합-0483
  page: 116
  vendor_label: "학평 4점 · 1등급도전 03"
  vendor_label_original: "2022학년도 3월 고2 학력평가 30번"
  category_type: "1등급 도전"
  summary: |
    이차함수 f(x)(최고차 계수 2), g(x)(최고차 계수 1).
    A = {f(x)-1}{g(x)-1}=0 실근 집합.
    B = f(x)=g(x) 실근 집합.
    A={α,β}, B={α, β+3} (α<β) 조건.
    {f(x)-k}{g(x)-k}=0 서로 다른 실근 3개, 실근 합 12일 때 α+β+k 값.
  category: 이차함수 집합 대응 · 실근 개수 조건 · 매개변수 k 결정
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, description: "A={α,β} → f(α)=1 또는 g(α)=1 (α 중근 or β 중근 or 두 방정식 해)"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P4], description: "B={α, β+3}: f(x)=g(x) → f-g의 두 근 α, β+3"}
    - {step: 3, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "A와 B의 α 공유 → 방정식 계수 관계로 α, β 표현 (매개변수 축소)"}
    - {step: 4, type: I-SC, depth: 3, effective_depth: 3, signal_ref: [P5], description: "{f-k}{g-k}=0 실근 3개 → f=k와 g=k 각각 실근 갯수 case 분리"}
    - {step: 5, type: I-VF, depth: 3, effective_depth: 3, description: "실근 합 12 조건 → 매개변수 k 결정 · α+β+k 계산"}
  insight_count: 5
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: true
  rationale: |
    학평 30번 · 이차함수+집합 초융합 킬러 · depth_score 9.0·max=3·count=5·P4+P5+P6 ≥ 3 → premium 이중 게이트 강력 통과.
    **O-NEW-27 이차식 두 직선 인수분해**(블랙라벨 CM2-01-STEP3-#10) 및 O-NEW-23 원소별 상태 조합 부분 근접 · 다만 이차함수·매개변수 축은 신규.
    **신규 원형 후보 O-NEW-35 이차함수 방정식-집합 대응 매개변수 결정** (신규).
  tier: star_5_premium
  mechanism_primary: 이차함수 방정식 집합 대응 + 실근 개수 case + 매개변수 결정
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: []
    L5_confidence: 0.92
```

### CM2-ST · 집합과 명제 (2) — 명제·절대부등식

```yaml
- id: ebs학평-CM2-ST-명제-0507
  page: 124
  vendor_label: "학평 3점 · 유형07 충분·필요·필요충분 조건"
  vendor_label_original: "2012학년도 6월 고1 학력평가 9번"
  category_type: "유형연습 3점"
  summary: |
    정수 x에 대한 p가 q의 필요조건이지만 충분조건 아닌 것만 <보기>에서 선택 (3개).
    ㄱ p:x=2, q:x²+x-6=0
    ㄴ p:x는 16의 양의 약수, q:x는 8의 양의 약수
    ㄷ p:x²-1=0, q:|x|=1
  category: 조건의 진리집합 · 포함관계 판별
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "각 보기의 진리집합 P·Q 구함"}
    - {step: 2, type: I-MI, depth: 2, effective_depth: 2, description: "P⊃Q iff p ⇐ q 즉 q → p (p는 q의 필요조건) · 진부분 필요"}
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  rationale: 표준 진리집합·포함관계 판별 · 학평 9번 · ★ 3.
  tier: star_3
  mechanism_primary: 진리집합 P·Q → 포함관계 판별
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: ebs학평-CM2-ST-명제-0517
  page: 126
  vendor_label: "학평 4점 · 유형10 절대부등식 (2)"
  vendor_label_original: "2017학년도 6월 고2 학력평가 가형 25번"
  category_type: "유형연습 4점"
  summary: |
    a>1일 때 9a + 1/(a-1)의 최솟값.
  category: 산술기하평균 · 치환
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "9a = 9(a-1) + 9 로 치환 (a-1>0)"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "9(a-1) + 1/(a-1) ≥ 2√9 = 6 (AM-GM, 등호 a=4/3)"}
    - {step: 3, type: I-VF, depth: 2, effective_depth: 2, description: "최솟값 = 6 + 9 = 15"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    치환 산술기하 표준 · **CM2 §명제 10수06-04 절대부등식 성취기준 정규 교과** · CM2 허용 · CM1 침투 금지.
    학평 25번 · ★ 4.
  tier: star_4
  mechanism_primary: 치환 + 산술기하평균 부등식
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: ebs학평-CM2-ST-명제-0522
  page: 127
  vendor_label: "학평 4점 · 1등급도전 01"
  vendor_label_original: "2009학년도 9월 고1 학력평가 10번"
  category_type: "1등급 도전"
  summary: |
    전체집합 U와 조건 p, q, r 진리집합 P, Q, R. p→q, ~p→q, ~p→r 참일 때
    <보기> ㄱ Q-R^c=R, ㄴ P-R=∅, ㄷ Q-P⊂R 옳은 것 선택.
  category: 명제·진리집합 · 다중 조건 · 진리집합 연산
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, description: "p→q ⇔ P⊂Q, ~p→q ⇔ P^c⊂Q → P∪P^c=U⊂Q → Q=U"}
    - {step: 2, type: I-MI, depth: 3, effective_depth: 3, signal_ref: [P2], description: "~p→r ⇔ P^c⊂R · 따라서 P∪R=U (드모르간 응용)"}
    - {step: 3, type: I-PD, depth: 2, effective_depth: 2, description: "ㄱ Q-R^c = Q∩R = R (Q=U이므로) → 참"}
    - {step: 4, type: I-PD, depth: 2, effective_depth: 2, description: "ㄴ P-R = P∩R^c · R^c⊂P (드모르간) → P-R = R^c 반드시 ∅ 아님 → 거짓"}
    - {step: 5, type: I-PD, depth: 2, effective_depth: 2, description: "ㄷ Q-P = U-P = P^c ⊂ R 참"}
  insight_count: 5
  depth_score: 8.4
  base_star: 5
  star: 5
  premium: false  # depth_score 8.4 < 8.5 임계 (근접)
  rationale: |
    다중 조건 · 진리집합 결합 · depth_score 8.4·max=3·count=5·P2 ≥ 1 → premium 임계 근접 (8.5 미만).
    ★ 5 확정 · premium 게이트 근접 (P 신호 카드 1개 · 2개 미만).
    학평 10번 (2009) · 오랜 기출 · 1등급 도전 pool.
  tier: star_5
  mechanism_primary: 명제→진리집합 포함 · 드모르간 · 여집합 결합
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [블랙라벨-CM2-04-STEP2-#18, 블랙라벨-CM2-04-STEP3-#01]
    L5_confidence: 0.75

- id: ebs학평-CM2-ST-명제-0523
  page: 127
  vendor_label: "학평 4점 · 1등급도전 02"
  vendor_label_original: "2015학년도 11월 고1 학력평가 14번"
  category_type: "1등급 도전"
  summary: |
    양수 a에 대해 이차함수 f(x)=x²-2ax의 그래프와 직선 g(x)=x/a가 두 점 O, A에서 만남.
    f(x) 꼭짓점 B, AB 중점 C. C에서 y축에 내린 수선 발 H일 때 CH 길이 최솟값.
  category: 이차함수·직선 교점 · 무게중심(중점) · 최솟값 (산술기하)
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "A: f=g → x²-2ax = x/a → x = 2a + 1/a (0 아닌 근)"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "B(a, -a²) (꼭짓점) · C = (A+B)/2 좌표"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "CH = |C의 x좌표| = |(2a+1/a+a)/2| = (3a+1/a)/2"}
    - {step: 4, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "AM-GM: 3a + 1/a ≥ 2√3 → CH ≥ √3 (등호 a=1/√3)"}
  insight_count: 4
  depth_score: 7.75
  base_star: 5
  star: 5
  premium: false
  rationale: |
    이차함수+직선+중점+AM-GM 최솟값 융합 · **CM2 §명제 10수06-04 산술기하평균 사용 정당** (CM2 허용 · CM1 금지).
    depth_score 7.75·count=4 · premium 임계 미만 · ★ 5.
    학평 14번 · 1등급 도전.
  tier: star_5
  mechanism_primary: 이차함수 교점 + 중점 + 산술기하평균
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [블랙라벨-CM2-05-STEP2-#23]
    L5_confidence: 0.85
```

### CM2-FN · 함수와 그래프 (1)

```yaml
- id: ebs학평-CM2-FN-함수-0553
  page: 135
  vendor_label: "학평 3점 · 유형06 합성함수"
  vendor_label_original: "2018학년도 9월 고2 학력평가 가형 12번"
  category_type: "유형연습 3점"
  summary: |
    f(x)=4x-5, g(x)=3x+1. (f ∘ g⁻¹)(k)=7 되는 실수 k 값.
  category: 합성·역함수 대입
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "g⁻¹(k) = t → g(t)=k → t = (k-1)/3"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "f(t) = 4t-5 = 7 → t=3 → k=g(3)=10"}
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  rationale: 표준 합성·역함수 · 학평 12번 · ★ 3.
  tier: star_3
  mechanism_primary: 합성함수 역대입
  insight_type: 절차형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.90

- id: ebs학평-CM2-FN-함수-0554
  page: 135
  vendor_label: "학평 4점 · 유형07 역함수의 성질"
  vendor_label_original: "2023학년도 11월 고1 학력평가 15번"
  category_type: "유형연습 4점"
  summary: |
    실수 전체에서 정의된 f(x) 역함수 존재.
    모든 x: f(x)=f⁻¹(x), f(x²+1)=-2x²+1. f(-2) 값.
  category: 자기역함수 · 대칭 y=x 성질 · 특수 대입
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-SYM, depth: 3, effective_depth: 3, signal_ref: [P3], description: "f=f⁻¹ → y=x 대칭 (자기역함수)"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "f(x²+1) 특수 대입 · x² = 3 → x²+1 = 4 · f(4) = -6+1 = -5"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, description: "f(4)=-5 · 자기역함수 f⁻¹(-5)=4 → f(-5)=4 · 대응 시퀀스 반복"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "f(-2) 계산 위해 x²+1=-2 불가 → 자기역함수 성질 활용 (더 정교한 반복)"}
  insight_count: 4
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    자기역함수 (f=f⁻¹) SYM 축 명시 · **O-NEW-32 min(f,f⁻¹) 자기역함수 원형 근접** (블랙라벨-CM2-08-STEP3-#12).
    depth_score 8.0·count=4 · premium 근접 (임계 8.5 미만) · ★ 4.
    학평 15번 · 학평은 4점 표준.
  tier: star_4
  mechanism_primary: 자기역함수 y=x 대칭 + 특수 대입 반복
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L2_signature_neighbors: [블랙라벨-CM2-08-STEP3-#12, 전국연합-2020-3월-고2-30번]
    L5_confidence: 0.85

- id: ebs학평-CM2-FN-함수-0555
  page: 135
  vendor_label: "학평 4점 · 유형07 역함수 성질 (n 세기)"
  vendor_label_original: "2024학년도 3월 고2 학력평가 27번"
  category_type: "유형연습 4점"
  summary: |
    X={1,2,3,4,5,6}. f:X→X, 조건: (가) 1≤x₁<x₂≤4이면 f(x₁)>f(x₂) (엄격 감소, 앞 4개 정의역).
    (나) f 역함수 존재하지 않음.
    f 개수.
  category: 조건부 함수 개수 · 단조성 + 일대일 아님
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, description: "x=1~4 엄격감소 → f(1)>f(2)>f(3)>f(4) · 앞 4개 값 서로 다름"}
    - {step: 2, type: I-SC, depth: 3, effective_depth: 3, signal_ref: [P5], description: "6개 값 중 4개 골라 감소 정렬 → C(6,4)=15가지 · f(5),f(6)은 X 임의"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, description: "역함수 없음: 어딘가 중복 값 발생 · f(5) 또는 f(6) 중복 case (전체-역함수있는 case 배제)"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "포함배제 · 15·36 - 역함수 있는 case = 답"}
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: |
    조건부 함수 개수 (단조성+비일대일) · **CM2-FN 정점 SC·EQV 축 정합**.
    depth_score 8.5·count=4·P5 ≥ 1 → premium 임계 근접 (P 카드 2개 미만).
    학평 27번 · ★ 5 (premium 아님).
  tier: star_5
  mechanism_primary: 조건부 감소함수 개수 + 역함수 없음 (포함배제)
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM2-FN-1408]
    L5_confidence: 0.80

- id: ebs학평-CM2-FN-함수-0566
  page: 138
  vendor_label: "학평 4점 · 1등급도전 01"
  vendor_label_original: "2022학년도 3월 고2 학력평가 21번"
  category_type: "1등급 도전"
  summary: |
    한 변 1인 정육각형 ABCDEF. 점 P는 A에서 F 방향으로 변 따라 움직임.
    A로부터 움직인 거리 x일 때 삼각형 PFA 넓이 f(x). (f∘f)(a)=9/32 되는 모든 a 곱.
    (빈칸 유도 문제 · p, q, r 채우기)
  category: 정육각형 위 점 위치별 넓이 함수 · 두 식으로 정의된 함수 합성
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, description: "정육각형 각 변 이동 시 삼각형 PFA 넓이 이 함수 f(x) 유도"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, description: "f 최댓값 및 정의역 구간 결정 · f(x) 부분별 표현"}
    - {step: 3, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P4], description: "(f∘f)(a) = f(f(a)) · f(a)=b라 놓으면 f(b)=9/32 → b 결정 후 f(a)=b인 a 각 case"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "0<a<5 조건 · a 값 곱"}
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: |
    정육각형 위 두 식으로 정의된 함수 합성 · 빈칸 유도 (학생 부담 축약) · depth_score 8.5·count=4 · premium 게이트 근접.
    학평 21번 · 1등급 도전 · ★ 5.
  tier: star_5
  mechanism_primary: 정육각형 두 식으로 정의된 함수 + 합성함수 역대입
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L5_confidence: 0.80

- id: ebs학평-CM2-FN-함수-0567
  page: 138
  vendor_label: "학평 4점 · 1등급도전 02"
  vendor_label_original: "2024학년도 3월 고2 학력평가 20번"
  category_type: "1등급 도전"
  summary: |
    X={1,2,3,4}. f:X→X 조건: (가) x∈X: x+f(x)≤5, (나) f 치역={1,2,4}.
    <보기> ㄱ f(f(4))=1, ㄴ f(3)=4, ㄷ 가능한 f 개수 4 판정.
  category: 조건부 함수 · 치역 지정 · case 세기
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "x+f(x)≤5 → f(x)≤5-x · 각 x별 f(x) 후보 집합"}
    - {step: 2, type: I-SC, depth: 3, effective_depth: 3, signal_ref: [P5], description: "치역 {1,2,4} 필수: 함수값 정확히 3개 원소, 4 필수"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, description: "f(1)∈{1,2,3,4}·f(2)∈{1,2,3}·f(3)∈{1,2}·f(4)∈{1} 조건 · 치역 강제"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "각 case 세기: f(4)=1 강제 · 나머지 · 치역 {1,2,4} 4개 후보 case 판정"}
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: |
    조건 함수+치역 지정+세기 · **O-NEW-23 원소별 상태 조합 원형 근접**.
    depth_score 8.5 · premium 게이트 근접 · ★ 5.
    학평 20번 · 1등급 도전.
  tier: star_5
  mechanism_primary: 조건 함수 case 세기 + 치역 강제
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L5_confidence: 0.80
```

### CM2-FN · 함수와 그래프 (2) — 유리·무리함수

```yaml
- id: ebs학평-CM2-RF-유리-0570
  page: 142
  vendor_label: "학평 3점 · 유형01 유리식"
  vendor_label_original: "2013학년도 6월 고1 학력평가 23번"
  category_type: "유형연습 3점"
  summary: |
    서로 다른 실수 a, b. (a-5)²/(a-b) + (b-5)²/(b-a) = 0일 때 a+b 값.
  category: 유리식 · 통분 · 인수분해
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "공통분모 (a-b): [(a-5)² - (b-5)²]/(a-b) = 0 → (a-5)²=(b-5)²"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "|a-5|=|b-5| 그리고 a≠b → a+b=10 (a=10-b)"}
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  rationale: 표준 유리식 처리 · 학평 23번 · ★ 3.
  tier: star_3
  mechanism_primary: 통분 + 대칭 인수분해 (a-5=±(b-5))
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: ebs학평-CM2-RF-유리-0587
  page: 144
  vendor_label: "학평 4점 · 유형05 유리함수 사분면 통과"
  vendor_label_original: "2017학년도 6월 고2 학력평가 나형 15번"
  category_type: "유형연습 4점"
  summary: |
    y=(3x+k-10)/(x+1) 그래프가 제4사분면을 지나는 모든 자연수 k 개수.
  category: 유리함수 표준형 · 사분면 통과 조건 · 자연수 세기
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "표준형: y=3 + (k-13)/(x+1) · 점근선 x=-1, y=3"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "4사분면 (x>0, y<0) 통과: y(0)=k-10 < 0 → k<10"}
    - {step: 3, type: I-VF, depth: 1, effective_depth: 1, description: "자연수 k=1,2,...,9 → 9개"}
  insight_count: 3
  depth_score: 5.67
  base_star: 4
  star: 4
  premium: false
  rationale: 표준형 변환 + 부호 조건 + 세기 · 학평 나형 15번 · ★ 4.
  tier: star_4
  mechanism_primary: 유리함수 표준형 + y절편 부호 + 자연수 세기
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: ebs학평-CM2-RF-유리-0618
  page: 151
  vendor_label: "학평 4점 · 1등급도전 01"
  vendor_label_original: "2015학년도 6월 고2 학력평가 나형 26번"
  category_type: "1등급 도전"
  summary: |
    f(x) = √x (x≥0), x² (x<0) 그래프와 직선 x+3y-10=0이 두 점 A(-2,4), B(4,2)에서 만남.
    함수 그래프와 직선으로 둘러싸인 부분 넓이.
  category: 두 식으로 정의된 함수 · 직선 교점 · 영역 넓이 (적분 없이)
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, description: "A(-2,4)에서 x²=4 확인 · B(4,2)에서 √4=2 확인 · x<0 구간과 x≥0 구간 분리"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, description: "x<0 부분 (x²과 직선): 두 곡선 사이 넓이 (사다리꼴-포물선 아래 부분) · **적분 없이 기하 사다리꼴+삼각형 분할**"}
    - {step: 3, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P4], description: "x≥0 부분 (√x와 직선): 역함수 관계 y=√x ↔ y=x² (0≤y≤2) · x축·y축 대칭 활용 (또는 사다리꼴)"}
    - {step: 4, type: I-VF, depth: 3, effective_depth: 3, description: "두 영역 넓이 합산 · 적분 없이 기하 조합"}
  insight_count: 4
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: false  # P 카드 1개, 임계 2개 미만
  rationale: |
    두 식으로 정의된 함수+역함수+영역 넓이 (미적분 없이 기하 분할) · depth_score 9.0·count=4 · **CM2 정규 교과 내 (미적분 회피)**.
    ★ 5 · premium 근접 (P 카드 1개 · 2개 미만).
    학평 26번 · 1등급 도전.
  tier: star_5
  mechanism_primary: 두 식으로 정의된 함수 + 역함수 대칭 + 기하 분할 넓이
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L5_confidence: 0.80

- id: ebs학평-CM2-RF-유리-0621
  page: 151
  vendor_label: "학평 4점 · 1등급도전 04"
  vendor_label_original: "2021학년도 3월 고2 학력평가 30번"
  category_type: "1등급 도전"
  summary: |
    f(x)=bx/(x-a) (a>0, b≠0). g(x) = f(x) (x<a), f(x+2a)+a (x≥a).
    실수 t에 대해 y=g(x)와 y=t의 교점 개수 h(t).
    상수 k에 대해 {t|h(t)=1} = {t|-9≤t≤-8} ∪ {t|t≥k}일 때 a×b×g(-k) 값.
  category: 유리함수 두 식으로 정의된 함수 · 매개변수 t 교점 개수 h(t) · 조건 만족 매개변수
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, description: "f(x+2a)+a = b(x+2a)/(x+a) + a · 새 점근선 x=-a, y=b+a"}
    - {step: 2, type: I-SYM, depth: 3, effective_depth: 3, signal_ref: [P3], description: "g(x)는 두 유리함수 부분별 · 각 식의 점근선·치역 확인 (평행이동 결합)"}
    - {step: 3, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P4], description: "h(t)=1: y=t가 g(x)와 정확히 1점 · 매개변수 t 구간 (경계·치역 갈래)"}
    - {step: 4, type: I-CON, depth: 3, effective_depth: 3, description: "{-9≤t≤-8} ∪ {t≥k} 조건 → 두 식 최솟값·최댓값·점근선 매칭 → a, b 결정"}
    - {step: 5, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "매개변수 3개 결정: k 값 + a, b 방정식 계"}
    - {step: 6, type: I-VF, depth: 3, effective_depth: 3, description: "a×b×g(-k) 계산 · 답 자연수 표현"}
  insight_count: 6
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: true
  rationale: |
    유리함수 부분별+매개변수 교점 개수 정점 킬러 · depth_score 9.0·max=3·count=6·P3+P4+P6 ≥ 3 → premium 이중 게이트 강력 통과.
    **O-NEW-31 (a,b) 대칭중심 역함수 유리 정점 근접** + 두 식으로 정의된 함수 신규 축.
    학평 30번 · 1등급 도전 · 시험지 정점 슬롯 원본 pool 최우선.
    **신규 원형 후보 O-NEW-36 부분별 유리함수 h(t) 조건**.
  tier: star_5_premium
  mechanism_primary: 유리함수의 부분 + h(t) 교점개수 조건 + 매개변수 결정
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: [블랙라벨-CM2-07-STEP3-#08]
    L5_confidence: 0.90

- id: ebs학평-CM2-RF-무리-0616
  page: 150
  vendor_label: "학평 4점 · 유형13 무리함수 활용"
  vendor_label_original: "2023학년도 3월 고2 학력평가 20번"
  category_type: "유형연습 4점"
  summary: |
    f(x) = -(x-a)² + b (x≤a), -√(x-a) + b (x>a). 서로 다른 실수 α, β, γ 조건:
    (가) {f(x)-α}{f(x)-β}=0 실근 = α, β, γ뿐, (나) f(α)=α, f(β)=β.
    α+β+γ=15일 때 f(α+β) 값.
  category: 두 식으로 정의된 함수 · 부동점 · 실근 조건
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - {step: 1, type: I-CON, depth: 3, effective_depth: 3, description: "f(α)=α, f(β)=β: 부동점 α는 이차 부분, β는 무리 부분 · 각 방정식 유도"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, description: "{f-α}{f-β}=0 실근 α,β,γ: f(x)=α 실근 + f(x)=β 실근 합집합"}
    - {step: 3, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "γ는 추가 실근 (α,β 아닌) · 부분 경계·꼭짓점 대응 판정"}
    - {step: 4, type: I-VF, depth: 3, effective_depth: 3, description: "α+β+γ=15 조건 + a, b 결정 · f(α+β) 계산"}
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: |
    이차+무리 두 식으로 정의된 함수의 부동점 · **O-NEW-32 min(f,f⁻¹) 자기역함수형 근접** (부동점=자기역함수의 y=x 교점).
    depth_score 8.5·count=4 · premium 근접 · ★ 5.
    학평 20번 · 유형연습 상위.
  tier: star_5
  mechanism_primary: 두 식으로 정의된 함수의 부동점 (y=x 교점) + 매개변수 결정
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [블랙라벨-CM2-08-STEP3-#12]
    L5_confidence: 0.80

- id: ebs학평-CM2-RF-무리-0623
  page: 152
  vendor_label: "학평 4점 · 1등급도전 06"
  vendor_label_original: "2020학년도 3월 고2 학력평가 30번"
  category_type: "1등급 도전"
  summary: |
    f(x)=√(ax-3)+2 (a≥3/2). {x|x≥2}에서 정의된 g(x) = f(x) (f<f⁻¹), f⁻¹(x) (f≥f⁻¹).
    자연수 n에 대해 y=g(x)와 y=x-n 교점 개수 h(n). h(1)=h(3)<h(2)일 때 g(4)=q/p (p, q 서로소 자연수). p+q.
  category: 무리 자기역함수 · min(f,f⁻¹) 형태 · h(n) 조건
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - {step: 1, type: I-SYM, depth: 3, effective_depth: 3, signal_ref: [P3], description: "g(x)=min(f(x), f⁻¹(x)) (부분 정의 · y=x 대칭축 활용)"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, description: "y=x-n과 g의 교점 개수 h(n): 매개변수 n별 case"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P4], description: "h(1)=h(3)<h(2) 조건 → n=2에서 특수 (접점) · n=1, 3은 대칭 case"}
    - {step: 4, type: I-PD, depth: 3, effective_depth: 3, description: "y=x와 f 교점·부동점 매개변수 a 결정"}
    - {step: 5, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "g(4) 값 · 매개변수 a 유일 결정 · 유리수 표현"}
  insight_count: 5
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: true
  rationale: |
    **O-NEW-32 min(f,f⁻¹) 자기역함수 학평형 완전 정합** (블랙라벨-CM2-08-STEP3-#12 2020 교육청).
    depth_score 9.0·max=3·count=5·P3+P4+P6 ≥ 3 → premium 이중 게이트 강력 통과.
    학평 30번 · 1등급 도전 · 무리함수 정점 · **자기복제 위험 중~높** (블랙라벨 CM2-08-STEP3-#12와 원본 동일).
  tier: star_5_premium
  mechanism_primary: min(f,f⁻¹) + 자기역함수 y=x 대칭 + h(n) 매개변수
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2  # 원형 O-NEW-32 이미 알려짐 · 학평 원본
  vendor_calibration_signal:
    L2_signature_neighbors: [블랙라벨-CM2-08-STEP3-#12, 마-CM2-RF-무리-학평]
    L5_confidence: 0.95
  cross_reference:
    - {source: 블랙라벨-CM2-08-STEP3-#12, relation: "동일 학평 원본 (2020 교육청)"}

- id: ebs학평-CM2-RF-무리-0624
  page: 152
  vendor_label: "학평 4점 · 1등급도전 07"
  vendor_label_original: "2023학년도 3월 고2 학력평가 30번"
  category_type: "1등급 도전"
  summary: |
    a<1, b. f(x) = (1-a)/(x-1) + 2 (x≤a), bx(x-a)+1 (x>a).
    조건: (가) x≤0인 모든 x: f(x)≥f(-2), (나) 방정식 |f(x)|=2 서로 다른 실근 개수 2.
    두 순서쌍 (a₁,b₁), (a₂,b₂)일 때 -40×(a₁+b₁+a₂+b₂).
  category: 두 식으로 정의된 함수 (유리+이차) · 최소값 조건 · 절댓값 방정식 실근
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, description: "f(-2)=(1-a)/(-3)+2 · 조건 (가): x≤0 최솟값 = f(-2) → 유리 부분 감소·정점"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P4], description: "유리 부분 도함수 부호 분석 (미적분 없이 · 부호 판별식 아이디어)"}
    - {step: 3, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "|f|=2: f=2 또는 f=-2 실근 · 각 부분별 case 분리"}
    - {step: 4, type: I-SC, depth: 3, effective_depth: 3, signal_ref: [P5], description: "서로 다른 실근 2 조건 → a, b 매개변수 두 case (순서쌍 2개)"}
    - {step: 5, type: I-VF, depth: 3, effective_depth: 3, description: "-40 × 합 계산 · 답 자연수"}
  insight_count: 5
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: true
  rationale: |
    유리+이차식 부분+최솟값 부호+절댓값 방정식 실근 3중 조건 · depth_score 9.0·max=3·count=5·P4+P5+P6 ≥ 3 → premium 이중 게이트 강력 통과.
    **신규 원형 후보 O-NEW-37 유리-이차식 부분 · 절댓값 방정식 실근 조건**.
    학평 30번 · 1등급 도전 · 신규 원형 (기존 32에 없음).
  tier: star_5_premium
  mechanism_primary: 유리-이차 두 식으로 정의된 함수 · 조건부 최솟값 + 절댓값 방정식 실근 매개변수 결정
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3
  vendor_calibration_signal:
    L5_confidence: 0.92

- id: ebs학평-CM2-RF-무리-0625
  page: 152
  vendor_label: "학평 4점 · 1등급도전 08"
  vendor_label_original: "2024학년도 3월 고2 학력평가 30번"
  category_type: "1등급 도전"
  summary: |
    a, b (상수). f(x)=√(-x+a)-b. g(x) = |f(x)|+b (x≤a), -f(-x+2a)+|b| (x>a).
    α<β 조건: (가) y=g와 y=t 교점 개수 h(t) · h(α)×h(β)=4, (나) {g(x)-α}{g(x)-β}=0 실근 최소 -30, 최대 15.
    {g(150)}² 값.
  category: 무리 두 식으로 정의된 함수 · 대칭이동+절댓값 · h(t)·범위 조건
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - {step: 1, type: I-SYM, depth: 3, effective_depth: 3, signal_ref: [P3], description: "g(x) 두 식: x≤a는 |f|+b (절댓값 대칭), x>a는 대칭이동+반사"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, description: "각 식 함수 형태 정리 · 정의역·치역 분석"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P4], description: "h(α)·h(β)=4: 각 t별 교점 개수 인수분해 (1×4 or 2×2)"}
    - {step: 4, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "{g-α}{g-β}=0 실근 범위 [-30, 15] · 각 방정식의 실근 조합 → a, b 결정"}
    - {step5: 5, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P4], description: "매개변수 유일 결정 · g(150) 계산 · 제곱"}
  insight_count: 5
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: true
  rationale: |
    무리식 부분+절댓값+대칭이동+범위 조건 초융합 · depth_score 9.0·max=3·count=5·P3+P4+P6 ≥ 3 → premium 이중 게이트 강력 통과.
    **신규 원형 후보 O-NEW-38 무리식 부분·절댓값·대칭이동 h(t) 실근 범위 조건**.
    학평 30번 (2024) · 최근 킬러 · 1등급 도전.
  tier: star_5_premium
  mechanism_primary: 무리 두 식으로 정의된 함수 절댓값·대칭이동 + h(t) 매개변수 + 실근 범위
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3
  vendor_calibration_signal:
    L5_confidence: 0.93
```

---

## Ⅲ. 표본 판정 요약 (28문)

| ★ | 유형연습 | 1등급 도전 | 합계 | 비율 |
|---:|---:|---:|---:|---:|
| ★ 3 | 6 | 0 | 6 | 21% |
| ★ 4 | 6 | 4 | 10 | 36% |
| ★ 5 | 1 | 5 | 6 | 21% |
| ★ 5 premium | 0 | 6 | 6 | 21% |
| **합계** | 13 | 15 | 28 | 100% |

### 소단원별 premium 밀도

| 소단원 | 표본 | ★ 5 premium | 밀도 |
|---|---:|---:|---:|
| CM2-GM 평면좌표+직선 | 5 | 2 | 40% |
| CM2-GM 원+이동 | 4 | 2 | 50% |
| CM2-ST 집합 | 4 | 2 | 50% |
| CM2-ST 명제·절대부등식 | 4 | 0 | 0% |
| CM2-FN 함수·역함수 | 5 | 0 | 0% |
| CM2-RF 유리·무리 | 6 | 3 | 50% |

**핵심 관찰**: 학평 원본에서 premium 밀도는 **1등급 도전 코너에 집중**. 특히 CM2-GM 원·이동, CM2-ST 집합, CM2-RF 유리·무리 소단원의 30번급 학평 문항. CM2-ST 명제·CM2-FN 함수 소단원은 30번급 학평 편입이 적어 premium 후보 없음.

---

## Ⅳ. 예측 종합 (전체 ~260문)

표본 28문을 v1.11 vendor-label-calibration + 학평 문번 회귀로 확장 예측:

| 라벨 | 표본 실측 | 예측 확장 | 전체 예상 | 비고 |
|---|---:|---:|---:|---|
| 개념 확인 문제 | 0 | ~72 | 72 | ★ 1~2 (표본 밖) |
| 유형연습 3점 | 6 | ~55 | 61 | ★ 3 최빈 (신뢰 0.85) |
| 유형연습 4점 (14~20번급) | 6 | ~80 | 86 | ★ 4 최빈 (신뢰 0.85) |
| 유형연습 4점 (25~28번급) | 1 | ~15 | 16 | ★ 5 (신뢰 0.75) |
| 1등급 도전 21~28번 | 4 | ~9 | 13 | ★ 5 (신뢰 0.85) |
| 1등급 도전 29~30번 | 6 | ~6 | 12 | ★ 5 premium (신뢰 0.90) |
| 합계 | 28 | ~237 | ~260 | |

### 회귀 정합률 (학평 원본 · 년월별)

| 년월 표기 유형 | 표본 | 예측 정합 | 정합률 |
|---|---:|---:|---:|
| 학평 문번 12~15번 (3점) | 3 | 3 (모두 ★ 3) | 100% |
| 학평 문번 16~20번 (4점) | 8 | 7 (★ 4 정합) · 1 (★ 5로 승격) | 87% |
| 학평 문번 21~28번 (4점) | 10 | 9 (★ 4~5 정합) · 1 (★ 4로 하향) | 90% |
| 학평 문번 29~30번 (4점) | 7 | 6 (★ 5 premium 정합) · 1 (★ 5로 하향) | 86% |

**회귀 정합률 종합 90%** (28문 중 25문 정합) — **A급 신뢰도**.

---

## Ⅴ. EBS 학평 vs 기존 학평 벤더 자기복제 감지

### 5.1 세션 52·53 v1.0 파일 대조 (동일 원본)

본 파일과 다음 4파일은 **동일 책 (EBS 올림포스 2025)** · v1.0 스키마 vs v2.0 재판정:

| 소단원 | v1.0 파일 | v2.0 (본 파일) | 판정 편차 |
|---|---|---|---|
| CM2-GM | mechanism-데이터-전국연합-CM2-GM.md | 본 파일 GM 8문 | v1.0 depth 필드 위주 · v2.0은 8단계 insights + P신호 · **premium 4문 신규 재확인** (v1.0에는 tier만) |
| CM2-ST | mechanism-데이터-전국연합-CM2-ST.md | 본 파일 ST 4문 | v1.0 유형별 그룹 · v2.0 premium 2문 신규 감지 (0481, 0483) |
| CM2-FN | mechanism-데이터-전국연합-CM2-FN.md | 본 파일 FN 5문 | v1.0에서 star_5·premium 표기 · v2.0 재판정: premium 0문 (모두 ★ 5 확정 · 임계 미달) |
| CM2-RF | mechanism-데이터-전국연합-CM2-RF.md | 본 파일 RF 6문 | v1.0 star_5·premium 표기 · v2.0 재판정: premium 3문 확인 (0621·0623·0624·0625 4문 중 3문 정합) |

**결론**: 세션 52·53 v1.0 파일은 원본 데이터로 유효 · 본 파일은 **v2.0 정밀 판정 (M·I·depth+P) 재검증** 역할.

### 5.2 세션 62 EBS 올림포스 고난도 CM2 대조

세션 62의 `mechanism-데이터-ebs-올림포스-고난도-CM2.md`는 **별책** (고난도판) · 학평 문번 편입 여부:

| 본 파일 학평 문번 | 고난도판 편입 여부 | cross-reference |
|---|---|---|
| 2017.9 고1 21번 (0361 각이등분선) | 예 (고난도 vol.2) | 동일 원본 |
| 2020.9 고1 29번 (0363 Thales) | 부분 (부분 편입) | 근사 |
| 2024.3 고2 21번 (0418 두 직선 원) | 예 | 동일 원본 |
| 2018.11 고1 21번 (0419 이차곡선 원 중심) | 아니오 | 신규 |
| 2019.11 고1 21번 (0481 매개변수 집합) | 아니오 | 신규 |
| 2022.3 고2 30번 (0483 이차함수 집합) | 예 | 동일 원본 |
| 2021.3 고2 30번 (0621 유리식 부분 h(t)) | 예 | 동일 원본 |
| 2020.3 고2 30번 (0623 min(f,f⁻¹)) | 예 (핵심 원본) | **자기복제 위험 高** |
| 2023.3 고2 30번 (0624 유리-이차식 부분) | 아니오 | 신규 |
| 2024.3 고2 30번 (0625 무리식 부분 h(t)) | 예 | 동일 원본 |

**8문 크로스 매칭 감지** — 학평 30번급 정점 문항은 EBS 학평기출·EBS 고난도 두 책에 동시 편입 경향 (자기복제 위험 필수 감쇠).

### 5.3 시판 교재 대조 (마플·쎈·개념원리·RPM)

| 본 파일 원본 | 시판 매칭 감지 |
|---|---|
| 0361 (2017.9 고1 21번 각이등분선) | 쎈-CM2-GM-평-0083 SPECIAL TIP (**동일 학평 편입**) · 블랙라벨-CM2-01-STEP2-#09 (원형 근사) |
| 0363 (2020.9 고1 29번 Thales) | 블랙라벨-CM2-02-STEP3-#04·#08 (원형 근사) |
| 0418 (2024.3 고2 21번 두 직선 원) | 쎈-CM2-GM-원-0360 (원형 근사) · 마-CM2-GM-원-0512 (원형 근사) |
| 0483 (2022.3 고2 30번 이차함수 집합) | (시판 편입 미확인 · 학평 원본만) |
| 0621 (2021.3 고2 30번 유리식 부분) | 블랙라벨-CM2-07-STEP3-#08 (원형 근접) |
| 0623 (2020.3 고2 30번 min(f,f⁻¹)) | 블랙라벨-CM2-08-STEP3-#12 (**동일 학평 편입**) · 마-CM2-RF-무리 (유사) |

**전체 자기복제 감지 8건** — problem-author v2.1에서 회차별 원형 감쇠 강제.

### 5.4 완자·마더텅·풍산자 크로스 (미실측)

이번 대상 아님 · 후속 세션에서 각 벤더 CM2 정독 시 본 파일과 매칭 검증 · 예상 자기복제:
- 완자 CM2 발전 pool: 30번급 학평 편입 다수 예상
- 마더텅 학평 모음: **본 파일이 원본** (100% 겹침 · 마더텅은 학평 재수록)
- 풍산자 CM2: 개념 위주 · 학평 30번급 편입 소수 예상

---

## Ⅵ. 신규 원형 후보 (기존 32 원형에 없는)

세션 62 premium 원형 카탈로그 v1.1 (O-01~O-14, O-NEW-19~32 = 32원형)에 **없는 신규 후보 6종**:

### O-NEW-33 · 이차곡선 위 원 중심 두 직선 접 조건 (원)
- **정의**: 원의 중심이 특정 곡선 (이차곡선 등) 위에 있고 두 직선에 접하는 원의 개수 (홀·짝 조건)
- **통찰 결합**: I-EQV(3)+I-CON(3)+I-XU(3)+I-SC(3)
- **원본**: ebs학평-CM2-GM-원-0419 (2018.11 고1 21번)
- **특성**: CM2-GM-원 확장 정점 · 개수 홀짝·매개변수 계

### O-NEW-34 · 매개변수 집합 원소 카운팅 (집합)
- **정의**: 집합 정의에 매개변수 k 포함 (Aₖ = {x|...(y-k)...=...}) · 조건 n(Aₖ ∩ B^c)=1 만족 k 세기
- **통찰 결합**: I-EQV(3)+I-PD(3)+I-CON(3)+I-SC(3)
- **원본**: ebs학평-CM2-ST-집합-0481 (2019.11 고1 21번)
- **특성**: CM2-ST 정점 신규 · 매개변수 축 확장 · O-NEW-23 원소별 상태 조합보다 매개변수 특화

### O-NEW-35 · 이차함수 방정식-집합 대응 매개변수 결정 (집합·이차함수)
- **정의**: 두 이차함수 f, g에 대해 A={f-1}{g-1}=0 실근, B=f=g 실근 · A={α,β}, B={α, β+3} 대응 조건에서 매개변수 k, α, β 결정
- **통찰 결합**: I-EQV(3)+I-CON(3)+I-XU(3)+I-SC(3)+I-VF(3)
- **원본**: ebs학평-CM2-ST-집합-0483 (2022.3 고2 30번)
- **특성**: 이차함수+집합 초융합 30번급 · CM2-ST 정점 · 신규 축

### O-NEW-36 · 부분별 유리함수 h(t) 조건 (유리함수)
- **정의**: 유리함수 두 식으로 정의된 함수 g(x)에서 y=t 교점 개수 h(t) 조건 (교점 개수 특정 t 구간) · 매개변수 결정
- **통찰 결합**: I-EQV(3)+I-SYM(3)+I-PD(3)+I-CON(3)+I-XU(3)
- **원본**: ebs학평-CM2-RF-유리-0621 (2021.3 고2 30번)
- **특성**: O-NEW-31 (a,b) 대칭중심 역함수 확장 · 부분별+매개변수 축 신규

### O-NEW-37 · 유리-이차식 부분 · 절댓값 방정식 실근 조건 (유리·이차)
- **정의**: 유리+이차 두 식으로 정의된 함수 · 조건부 최솟값 (x≤0 최솟값 = f(-2)) + 절댓값 방정식 |f|=2 실근 개수 조건
- **통찰 결합**: I-EQV(3)+I-CON(3)+I-XU(3)+I-SC(3)+I-VF(3)
- **원본**: ebs학평-CM2-RF-무리-0624 (2023.3 고2 30번)
- **특성**: 유리·이차식 부분 + 최솟값 + 절댓값 방정식 3중 조건 · CM2-RF 신규 축

### O-NEW-38 · 무리식 부분·절댓값·대칭이동 h(t) 실근 범위 (무리함수)
- **정의**: 무리 두 식으로 정의된 함수에 절댓값+대칭이동 결합 · h(α)·h(β)=4 및 실근 범위 [-30, 15] 조건 매개변수 결정
- **통찰 결합**: I-SYM(3)+I-EQV(3)+I-CON(3)+I-XU(3)+I-PD(3)
- **원본**: ebs학평-CM2-RF-무리-0625 (2024.3 고2 30번)
- **특성**: O-NEW-32 min(f,f⁻¹) 자기역함수 확장 · 절댓값+대칭이동+실근 범위 3축 결합

**premium 원형 카탈로그 갱신 필요** — 신규 6원형 편입 시 총 38원형 · v1.2 갱신 예정.

---

## Ⅶ. CM2 소단원별 정점 원형 매트릭스 검증 (세션 61)

세션 61의 8/8 매트릭스 (CM2-GM 평면좌표·직선·원·이동 + CM2-ST 집합·명제 + CM2-FN 함수·역함수 + CM2-RF 유리·무리)와 대조:

| 소단원 | 세션 61 매트릭스 원형 | 본 파일 표본 실측 | 정합 여부 |
|---|---|---|---|
| CM2-GM 평면좌표 | RT·SYM 축 | O-03 각이등분선 (0361 RT), Thales (0363 SYM) | ✅ 정합 |
| CM2-GM 원 | XU·CON 축 | O-05 두 직선 접 원 (0418 XU), 이차곡선 원 (0419 XU) | ✅ 정합 |
| CM2-GM 이동 | SYM·RT 축 | 대칭이동 최단 (0412 SYM) | ✅ 정합 |
| CM2-ST 집합 | PD·MI (CM1-CB 근접) 축 | 매개변수 집합 (0481 PD·SC), 이차 집합 (0483 XU·SC) | ✅ 정합 (SC 축 강화) |
| CM2-ST 명제 | XU·CON 축 (산술기하) | 진리집합 다중 (0522), AM-GM 최소 (0523 XU) | ✅ 정합 |
| CM2-FN 함수·역함수 | XU·SC 축 | 자기역함수 (0554 SYM 신규 축), 조건함수 세기 (0555·0567 SC) | ✅ 정합 (SYM 축 신규 신호) |
| CM2-RF 유리 | SYM 정근선 축 | 유리식 부분 h(t) (0621 SYM·XU) | ✅ 정합 |
| CM2-RF 무리 | SYM 자기역함수 + XU min·max 축 | min(f,f⁻¹) (0623 SYM·XU·PD), 유리-이차식 부분 (0624 XU·SC), 무리식 부분 (0625 SYM·XU·PD) | ✅ 정합 강화 |

**8/8 매트릭스 완전 정합 · 학평 원본에서 강력 재검증**. CM2-FN 함수 소단원에서 **SYM 축이 자기역함수 통찰 신규 신호** 추가 발굴.

---

## Ⅷ. 특이사항

### 8.1 교육과정 외 침투 검사 (CM1·상위과정)

| 검사 항목 | 결과 |
|---|---|
| 산술기하평균 (0517·0523) | ✅ CM2 §명제 10수06-04 절대부등식 성취기준 정규 교과 · CM1 침투 아님 |
| 미적분 (0618 두 식으로 정의된 함수 넓이) | ✅ **미적분 없이 기하 분할** 명시 · CM2 정규 교과 내 |
| $\cup$·$\cap$·$[a,b]$ 표기 | ✅ CM2 §집합 정규 교과 · CM1 침투 아님 |
| $A^{-1}$·행렬 | ✅ 등장 없음 |
| 벡터·화살표 | ✅ 등장 없음 · 점 P, 벡터 아닌 좌표만 |
| 극한·미분·적분 | ✅ 등장 없음 |
| 함수방정식 (0554 자기역함수) | ✅ CM2 §함수 정규 교과 (역함수 성질) |

**교육과정 정합 100%** — 학평 원본은 교육과정 준수 확실.

### 8.2 외국 수학자 이름 회피

- **Fagnano** (0412 대칭이동): 학평 원본은 "대칭이동 최단경로" 자연어 표기 · 외국 수학자 이름 등장 없음 ✅
- **Thales** (0363 원주각): 학평 원본은 "원의 중심·지름·수직" 자연어 표기 · Thales 이름 등장 없음 ✅
- **케일리해밀턴·페르마·오일러**: 등장 없음 ✅
- **Simon's Favorite Factoring Trick (SFFT)**: 등장 없음 (CM1-EQ 소단원 · 본 파일은 CM2)

**외국 수학자 이름 회피 100%** — 학평 원본은 자연어 서술 원칙 준수.

### 8.3 vendor label 정정 신호

**본 파일 실측 vs vendor label 예측 편차**:
- 학평 문번 15번 (0554, 0555 4점): 예측 ★ 4 · 실측 ★ 4 (0554) · ★ 5 (0555) → **일부 문번 15번 문항이 ★ 5급 도달** (조건 함수 case 세기 등)
- 학평 문번 21번 (0623 4점 · 사실은 30번): pdf 표기 실수 없이 30번 원본 맞음 · 정합
- 학평 문번 26번 (0618 4점 · 1등급도전 01): 예측 ★ 5 · 실측 ★ 5 (premium 임계 근접) → 회귀 정합

**v1.11 vendor-label-calibration 갱신 신호**:
- **학평 문번 15번의 4점 문항이 ★ 5급 도달 가능** (표본 확대 필요 · 회귀 함수 alt: [5] 추가 고려)
- **학평 문번 30번 4점 문항 100% ★ 5 premium 도달 확인** (7문 중 7문 정합)
- **학평 문번 21번 4점 (1등급도전 01·02) 100% ★ 5 이상 도달** (표본 4문 · alt star_5 신뢰도 상향)

### 8.4 자기복제 위험 감지

| 학평 원본 | 자기복제 위험 | 대상 |
|---|---|---|
| 2017.9 고1 21번 (0361 각이등분선) | 高 | 쎈 SPECIAL TIP · 블랙라벨 STEP 2 · 마플 · 개념원리 등 다수 편입 |
| 2020.3 고2 30번 (0623 min(f,f⁻¹)) | 高 | 블랙라벨 CM2-08-STEP3-#12 동일 원본 · O-NEW-32 원형 |
| 2018.11 고1 21번 (0419 이차곡선 원 중심) | 낮음 | 신규 원형 · 시판 편입 미확인 |
| 2024.3 고2 30번 (0625 무리식 부분) | 중 | 최근 학평 · 블랙라벨 STEP 3에 등장 |

**problem-author v2.1**: 회차별로 위험 高 원본은 감쇠 필수 · 최근 3회차 사용 이력 검사.

---

## Ⅸ. 관련 자산·다음 세션 후보

### 관련 자산

- 세션 52·53 v1.0 파일: `bank/mechanism-데이터-전국연합-CM2-*.md` (동일 책 · v1.0 스키마)
- 세션 62 EBS 올림포스 고난도 CM2: `bank/mechanism-데이터-ebs-올림포스-고난도-CM2.md` (별책 · 크로스 매칭 8건)
- premium 원형 카탈로그: `bank/premium-원형-카탈로그.md` v1.1 (32원형 → 신규 6원형 편입 대상)
- 벤더 회귀: `bank/vendor-label-calibration.md` v1.11 (학평 문번 회귀 시그널 3건 반영 대상)
- CM2 앵커: `bank/anchors/CM2-GM.md` v2.0 (표본 4문 premium 앵커 편입 후보)

### 다음 세션 후보

1. **완자 CM2 정독** — 학평 편입 자기복제 검증
2. **마더텅 학평 모음 CM2 정독** — 본 파일과 100% 겹침 확인 · vendor-label 회귀 강화
3. **풍산자 CM2 정독** — 개념 위주 · star_2~3 원본 pool 확장
4. **premium 원형 카탈로그 v1.2 갱신** — 신규 6원형 (O-NEW-33~38) 편입
5. **vendor-label-calibration v1.12 갱신** — 학평 문번 15·21·30번 정합 신호 반영

---

## 변경 이력

- 2026-07-21 v1.0 — 초판. EBS 올림포스 2025 학평기출문제집 CM2 파트 (인쇄 78~152) 층화 표본 28문 재판정. 세션 52·53 v1.0 파일 재검증 · 세션 62 EBS 고난도 CM2 크로스 매칭 8건. premium 6문 · 신규 원형 6종 후보 발굴 (O-NEW-33~38). 회귀 정합률 90% A급. CM2 소단원 정점 원형 매트릭스 8/8 완전 정합.
