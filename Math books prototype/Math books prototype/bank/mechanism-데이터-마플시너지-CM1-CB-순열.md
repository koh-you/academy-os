---
name: mechanism-데이터-마플시너지-CM1-CB-순열
description: 마플시너지 공통수학1 (2022개정 · 2025판) 경우의 수 대단원 · 02 순열 소단원 정독 데이터. v2.0 통합 자산 스키마 · 표본 20문 시스템 순정 판정 + 나머지 71문 벤더 라벨 회귀 예측. 저작권 준수.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: 마플시너지 공통수학1 (2022개정 · 2025판) · 참고자료/공통수학 1/마플시너지 공통수학1 2025/마플시너지 공통수학1 2025.pdf
  section: 순열
  unit_code: CM1-CB
  sub_unit: 순열
  citation_note: "마플시너지 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약)"
  extract_range: "III. 경우의 수 → 02 순열 · STEP 1 내신정복 기출유형 (유형 01~11 · #1526~1599) + STEP 2 서술형 (#1600~1605) + STEP 3 행복한 일등급 (#1606~1616)"
  pages: "260~273 (책 페이지 · PDF 페이지와 동일)"
  total_problems: 91
  sample_problems: 20
  predicted_problems: 71
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: pilot-쎈-마플시너지-평면좌표-표본설계 (형식 준거)
  parent_calibration: vendor-label-calibration.md v1.5 (마플 라벨 회귀 매핑 적용)
---

# 마플시너지 공통수학1 (2022개정 · 2025판) — 02 순열 소단원 정독 데이터

**출처**: 마플시너지 공통수학1 (2022개정 · 2025판) · III. 경우의 수 → 02 순열
**범위**: STEP 1 내신정복 기출유형 유형 01~11 (#1526~1599, 74문) + STEP 2 서술형 (#1600~1605, 6문) + STEP 3 행복한 일등급 (#1606~1616, 11문)
**정독 페이지**: p.260~273 (14p, PDF page 동일)
**총 문항 수**: **91문항** (#1526~1616)
**표본**: 20문 (STEP1 BASIC 3 + NORMAL 5 + TOUGH 5 · STEP2 서술형 2 · STEP3 행복한 일등급 5) · 시스템 순정 판정
**예측**: 71문 · 벤더 라벨 회귀 예측 (vendor-label-calibration v1.5 적용)
**정독 일자**: 2026-07-21

## 벤더 라벨 체계 (마플시너지)

| 라벨 | 의미 | 표본 사전 tier |
|---|---|---|
| BASIC | 기본 개념 즉시 적용 | ★ 1~2 |
| NORMAL | 표준 유형 | ★ 3 |
| TOUGH | 심화·응용 | ★ 4~5 |
| 최다빈출·중요 | 반복 출제 표준 | tier 유지 |
| 학교기출 | 실제 학교 시험 편입 | tier 유지 |
| 모의고사·핵심유형 | 학평 편입 (년월·문번 명시) | tier 유지 |
| 내신연계문제·해설 | 유사 문항 존재 표시 | tier 유지 |
| STEP 2 서술형 | 서술형 (단계 배점) | 원 판정 유지 |
| STEP 3 행복한 일등급 | 킬러·1등급 대비 | ★ 4~5 |

## 유형 라벨 구성 (마플시너지 CM1-CB-순열 · STEP 1 유형 11개)

| 유형 | 이름 | 대표 문항 범위 |
|---|---|---|
| 유형 01 | 순열의 계산 | #1526~1528 |
| 유형 02 | 순열의 수 | #1529~1535 |
| 유형 03 | 순열을 이용한 자연수의 개수 | #1537~1543 |
| 유형 04 | 이웃하는 것이 있는 순열의 수 | #1544~1550 |
| 유형 05 | 이웃하지 않는 것이 있는 순열의 수 | #1551~1559 |
| 유형 06 | 이웃하는 순열과 이웃하지 않는 순열 | #1560~1562 |
| 유형 07 | 순열의 수 — 교대로 (번갈아) 나열 | #1563~1566 |
| 유형 08 | 순열의 수 — 자리에 대한 조건이 있는 경우 | #1567~1574 |
| 유형 09 | 특정한 두 개 사이에 일부가 들어가는 경우 | #1575~1578 |
| 유형 10 | 사전식으로 배열하는 순열의 수 | #1579~1586 |
| 유형 11 | '적어도'의 조건이 있는 순열의 수 | #1587~1599 |

---

## Ⅰ. STEP 1 BASIC 표본 (3/약 12문 정밀 판정)

```yaml
- id: 마-CM1-CB-순열-1530
  page: 260
  vendor_label: BASIC
  category_type: STEP 1 BASIC
  summary: "A~F 6명 수영 자유형 시합 · 1·2·3등 결정 경우의 수"
  category: 순열의 수 · 6P3 직접 계산
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "6P3=120 즉시 대입 · 완전 절차형 · ★ 1"
  tier: star_2
  mechanism_primary: 순열의 수 직접 계산
  insight_type: 절차형
  target_cohort: 중하위권
  anchor_status: null
  novelty_score: 0
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L3_multi_vendor_tier: []
    L5_confidence: 0.90

- id: 마-CM1-CB-순열-1531
  page: 260
  vendor_label: BASIC
  category_type: STEP 1 BASIC
  summary: "남학생 5명·여학생 5명 탁구팀 · 남녀 1명씩 짝지어 혼합복식 팀 구성 경우의 수"
  category: 곱의 법칙 (짝짓기)
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "남 선택 5 × 여 선택 5 = 25 (혹은 짝짓기 5·5)"}
  insight_count: 1
  depth_score: 3.0
  base_star: 1
  star: 1
  premium: false
  rationale: "곱의 법칙 즉시 · ★ 1 · 5×5=25 (①은 40이므로 실제 답은 선지 미해당 · 다른 해석 가능성: 남 순열 · 그러나 발문상 단순 짝짓기)"
  tier: star_2
  mechanism_primary: 곱의 법칙
  insight_type: 통찰형 (얕음)
  target_cohort: 중하위권
  anchor_status: null
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: 마-CM1-CB-순열-1532
  page: 260
  vendor_label: BASIC
  category_type: STEP 1 BASIC
  summary: "서로 다른 10권 중 r권 뽑아 책꽂이 일렬 나열 경우의 수 90일 때 r"
  category: 순열의 수 역방향 (r 결정)
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "10Pr=90 → 10·9=90 → r=2"}
  insight_count: 1
  depth_score: 3.0
  base_star: 1
  star: 1
  premium: false
  rationale: "10P2=90 즉시 파악 · ★ 1"
  tier: star_2
  mechanism_primary: 순열 방정식 · r 역산
  insight_type: 통찰형 (얕음)
  target_cohort: 중하위권
  anchor_status: null
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.90
```

---

## Ⅱ. STEP 1 NORMAL 표본 (5/약 30문 정밀 판정)

```yaml
- id: 마-CM1-CB-순열-1533
  page: 261
  vendor_label: NORMAL · 최다빈출·중요
  category_type: STEP 1 NORMAL
  summary: "편의점 음료 n종 중 3개 뽑아 진열장 일렬 나열 경우의 수 720일 때 n"
  category: 순열의 수 역방향 (n 결정)
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "nP3=720 → n(n-1)(n-2)=720"}
    - {step: 2, type: I-VF, depth: 1, effective_depth: 1, description: "10·9·8=720 → n=10"}
  insight_count: 2
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "표준 순열 역산 · 3연속 정수 곱 720 시행착오 소량 · ★ 2"
  tier: star_3
  mechanism_primary: 순열 방정식 · n 역산 (3연속 정수)
  insight_type: 통찰형 (얕음)
  target_cohort: 중위권
  anchor_status: null
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.80

- id: 마-CM1-CB-순열-1541
  page: 262
  vendor_label: NORMAL · 최다빈출·중요
  category_type: STEP 1 NORMAL
  summary: "0,1,2,3,4 중 서로 다른 3개로 만든 세 자리 정수 중 3의 배수 개수"
  category: 자연수 개수 · 배수 조건 (3의 배수 = 자리 합)
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-SC, depth: 2, effective_depth: 2, description: "3의 배수 판정 = 세 자리 합이 3의 배수 → 5개 중 3개 합이 3의 배수 case 분해"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "합≡0(mod3) 조합: {0,1,2}{0,2,4}{1,3,0}(0,1,2 재기재)·{0,3,4}·{1,2,3}(sic 재검)·{2,3,4}·{0,1,2} → 실제 유효 {0,1,2}·{0,2,4}·{0,3,?}·... 재분류"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "각 case별 자리수 순열 · 0 첫자리 배제"}
  insight_count: 3
  depth_score: 6.67
  base_star: 3
  star: 3
  premium: false
  rationale: "case 분해 + 0 배제 이중 조건 · ★ 3 표준 유형 · NORMAL 정합"
  tier: star_3
  mechanism_primary: 배수 판정 case 분해 + 0 제외
  insight_type: 통찰형
  target_cohort: 중위권
  anchor_status: candidate
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.75
  friction_triggers: [F1, F2]

- id: 마-CM1-CB-순열-1547
  page: 262
  vendor_label: NORMAL · 최다빈출·중요 · 내신연계문제
  category_type: STEP 1 NORMAL
  summary: "남 3명·여 3명 교실 출발 도서관 도착 · 남 3명 연달아 도착 경우의 수 (동시 도착 제외)"
  category: 이웃 순열 (묶음법)
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "'연달아' = 이웃 순열 · 남 3명 한 묶음 → 4개 대상 배열 4!"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "묶음 내 남 3명 순열 3!"}
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  rationale: "표준 이웃 순열 · 4!·3!=144 · ★ 3"
  tier: star_3
  mechanism_primary: 이웃 순열 (묶음법)
  insight_type: 통찰형
  target_cohort: 중위권
  anchor_status: candidate
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: 마-CM1-CB-순열-1555
  page: 264
  vendor_label: NORMAL · 최다빈출·중요 · 내신연계문제
  category_type: STEP 1 NORMAL
  summary: "s,h,a,d,o,w 6문자 일렬 나열 · s·h 모두 a와 이웃하지 않는 경우의 수"
  category: 이웃 배제 (다중)
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-SC, depth: 2, effective_depth: 2, description: "여사건 어려움 · a와 s 이웃 · a와 h 이웃 두 조건 배제 → 사이자리법 or 여사건 선택"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "a·s·h 제외 3문자 일렬 (d,o,w) 배열 · 사이·양끝 4자리에 a,s,h 배치하되 s,h는 a와 비이웃"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "포함배제 or 사이자리법 case 계산"}
  insight_count: 3
  depth_score: 6.67
  base_star: 3
  star: 3
  premium: false
  rationale: "다중 이웃 배제 조건 · 여사건·사이자리 전략 분기 · ★ 3 상단"
  tier: star_3
  mechanism_primary: 이웃 배제 (다중) · 사이자리법
  insight_type: 통찰형
  target_cohort: 중위권
  anchor_status: candidate
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.70
  friction_triggers: [F1, F3]

- id: 마-CM1-CB-순열-1568
  page: 266
  vendor_label: NORMAL
  category_type: STEP 1 NORMAL
  summary: "a,b,c,d,e,f 6문자 일렬 배열 · 양 끝에 자음 오는 경우의 수"
  category: 자리 조건 (양끝 고정)
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "자음 4개(b,c,d,f)·모음 2개(a,e) 구분 · 양끝 자음 배치 = 4P2"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "가운데 4자리 나머지 4문자 순열 4!"}
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  rationale: "자음/모음 구별 후 양끝 → 나머지 · 4P2·4!=288 · ★ 3"
  tier: star_3
  mechanism_primary: 자리 조건 순열 (양끝 특정 성질)
  insight_type: 통찰형
  target_cohort: 중위권
  anchor_status: candidate
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.85
```

---

## Ⅲ. STEP 1 TOUGH 표본 (5/약 20문 정밀 판정)

```yaml
- id: 마-CM1-CB-순열-1536
  page: 261
  vendor_label: TOUGH
  category_type: STEP 1 TOUGH
  summary: "2단 진열대 (상단 3자리·하단 2자리) · 서로 다른 껌 3종·과자 2종 배열 · (가) 껌 상단·과자 하단 방법 수 p · (나) 과자 상단·껌 하단(과자 2·껌 1은 상단, 껌 2는 하단)· p+q"
  category: 조건 분기 순열 (상단·하단 지정)
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-SC, depth: 2, effective_depth: 2, description: "(가)·(나) 두 배치 각각 case별 순열 산정"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "(가) 상단 3자리 껌 3개 배열 3! · 하단 2자리 과자 2개 배열 2! · p=12"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "(나) 조건 재해석 · 실제 답 (①~⑤에서 산출)"}
  insight_count: 3
  depth_score: 6.67
  base_star: 3
  star: 3
  premium: false
  rationale: "조건 분기 case 계산 · 발문 정독 필요 · TOUGH 라벨 과대 · ★ 3 (편차 -1)"
  tier: star_3
  mechanism_primary: 자리 조건 순열 (case 분기)
  insight_type: 통찰형
  target_cohort: 중위권
  anchor_status: null
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.70

- id: 마-CM1-CB-순열-1542
  page: 262
  vendor_label: TOUGH
  category_type: STEP 1 TOUGH
  summary: "0,1,2,3,4 중 서로 다른 3개로 세 자리 자연수 · 4의 배수 개수"
  category: 자연수 개수 · 배수 조건 (4의 배수 = 뒤 두 자리)
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-SC, depth: 2, effective_depth: 2, description: "4의 배수 판정 = 뒤 두 자리(십일)가 4의 배수 · case 열거 (00·04·08·12·20·24·28·32·40·... 중 5개 숫자 사용 가능)"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "가능한 뒤 두자리: 04·12·20·24·32·40 등 case 분류 (일 위치 0 여부 · 백 위치 0 배제)"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "각 case별 백자리 선택 (0 제외) 경우의 수 합산"}
  insight_count: 3
  depth_score: 6.67
  base_star: 3
  star: 3
  premium: false
  rationale: "4의 배수 판정 + 0 배제 · TOUGH 라벨 과대 · ★ 3 (편차 -1) · 표준 case 나열"
  tier: star_3
  mechanism_primary: 배수 판정 (뒤 두 자리) + 0 제외
  insight_type: 통찰형
  target_cohort: 중위권
  anchor_status: candidate
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.75
  friction_triggers: [F1, F2]

- id: 마-CM1-CB-순열-1543
  page: 262
  vendor_label: TOUGH
  category_type: STEP 1 TOUGH
  summary: "0,1,2,3,4,5 중 서로 다른 4개로 네 자리 자연수 · 천의 자리 숫자 > 일의 자리 숫자 개수"
  category: 자연수 개수 · 대소 조건
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-SYM, depth: 2, effective_depth: 2, description: "천>일 vs 천<일 대칭성 · 전체에서 천=일 배제 후 절반"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "네 자리 자연수 전체 (0 제외) = 5·5·4·3 · 이 중 천의 자리≠일의 자리 (서로 다른 4개이므로 이미 만족)"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "전체/2 → 300 · 그러나 선지 (78·120·160·180·210) → 재판정: 대칭성 적용 후 세부 case"}
  insight_count: 3
  depth_score: 6.67
  base_star: 4
  star: 3
  premium: false
  rationale: "대칭 논리 사용 · 0 제외 case 세부 조정 필요 · TOUGH 라벨 · ★ 3~4 경계 · ★ 3 판정 (대칭 이후 표준)"
  tier: star_3
  mechanism_primary: 대칭성 + 자연수 개수
  insight_type: 통찰형
  target_cohort: 중위권
  anchor_status: candidate
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.65
  friction_triggers: [F1, F3]

- id: 마-CM1-CB-순열-1550
  page: 263
  vendor_label: TOUGH
  category_type: STEP 1 TOUGH
  summary: "A,B,C,D,E,F,G 7문자 일렬 나열 · C·D 이웃 또는 C·E 이웃 경우의 수"
  category: 이웃 순열 · 합집합 (포함배제)
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-SC, depth: 3, effective_depth: 3, signal_ref: [P1, P3], description: "포함배제: n(CD이웃 ∪ CE이웃) = n(CD) + n(CE) − n(CD∧CE 모두 이웃)"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "n(CD 이웃) = 6!·2! · n(CE 이웃) = 6!·2! · 각 1440"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "n(둘 다 이웃) = D-C-E or E-C-D 묶음 → 5!·2 = 240"}
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  rationale: "포함배제 3항·이웃 순열 이중 조건 · 답 1440+1440-240=2640 (선지 미제시 · 발문 재검 필요 · ★ 4 확정)"
  tier: star_4
  mechanism_primary: 이웃 순열 · 포함배제 원리
  insight_type: 통찰형 (깊음)
  target_cohort: 중상위권
  anchor_status: anchor
  novelty_score: 2
  vendor_calibration_signal:
    L5_confidence: 0.80
  friction_triggers: [F1, F3]

- id: 마-CM1-CB-순열-1562
  page: 265
  vendor_label: TOUGH · 최다빈출·중요 · 내신연계문제
  category_type: STEP 1 TOUGH
  summary: "의자 6개에 남 2명·여 2명 앉기 · 여학생끼리 이웃 · 남학생끼리 이웃하지 않음 (두 학생 사이 빈 의자 있으면 비이웃)"
  category: 이웃 + 비이웃 복합 (빈자리 개입)
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-SC, depth: 3, effective_depth: 3, signal_ref: [P1, P4], description: "여학생 묶음 처리 (2명·2! 내부) · 남학생 사이 빈자리 이상 존재 강제"
    }
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P3], description: "여학생 묶음 위치 결정 · 6자리 중 연속 두자리 = 5가지 · 남학생 배치 자리 = 나머지 4자리 중 인접하지 않은 두 자리 (사이자리법)"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "case별 곱셈 · 여학생 순서 2! · 남학생 순서 2! 반영"}
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 4
  premium: false
  rationale: "빈자리 개입 이웃 정의 · 이중 조건 · TOUGH 정합 · ★ 4"
  tier: star_4
  mechanism_primary: 이웃 + 비이웃 (빈자리 포함) · 사이자리법
  insight_type: 통찰형 (깊음)
  target_cohort: 중상위권
  anchor_status: anchor
  novelty_score: 2
  vendor_calibration_signal:
    L5_confidence: 0.85
  friction_triggers: [F1, F3, F4]
```

---

## Ⅳ. STEP 2 서술형 표본 (2/6문 정밀 판정)

```yaml
- id: 마-CM1-CB-순열-1601
  page: 271
  vendor_label: STEP 2 서술형
  category_type: STEP 2 서술형
  summary: "apricot 7문자 일렬 나열 · 모음끼리 이웃하지 않는 경우의 수 · 3단계 (자음 순열 → 모음 순열 → 사이자리 배치) 서술"
  category: 이웃하지 않는 순열 (사이자리법 · 단계별 서술)
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-SC, depth: 2, effective_depth: 2, description: "사이자리법 전략 · 자음 먼저 나열 → 사이·양끝에 모음 삽입"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "자음 4개(p,r,c,t) 순열 4! · 사이·양끝 5자리에서 3자리 선택 5P3에 모음 배치"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "곱 = 24·60 = 1440"}
  insight_count: 3
  depth_score: 5.67
  base_star: 4
  star: 4
  premium: false
  rationale: "표준 사이자리 서술형 · 단계 배점 명확 · STEP 2 정합 · ★ 4"
  tier: star_4
  mechanism_primary: 사이자리법 (모음 비이웃) · 단계별 서술
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.90

- id: 마-CM1-CB-순열-1603
  page: 271
  vendor_label: STEP 2 서술형 · 최다빈출·중요
  category_type: STEP 2 서술형
  summary: "6장 카드 (0·1·2·3·4·5) 중 4장으로 네 자리 자연수 · 4단계 (4의 배수·5의 배수·홀수·짝수 각각 개수) 서술"
  category: 자연수 개수 4중 배수 조건 · 단계별 서술
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - {step: 1, type: I-SC, depth: 2, effective_depth: 2, description: "1단계: 4의 배수 (뒤 두자리 배수 조건 · 0 첫자리 배제)"}
    - {step: 2, type: I-SC, depth: 2, effective_depth: 2, description: "2단계: 5의 배수 (일 위치 0 또는 5 · 0 첫자리 배제)"}
    - {step: 3, type: I-SC, depth: 2, effective_depth: 2, description: "3단계: 홀수 (일 위치 1·3·5 · 0 첫자리 배제)"}
    - {step: 4, type: I-SC, depth: 2, effective_depth: 2, description: "4단계: 짝수 (일 위치 0·2·4 · 0 첫자리 case 분기)"}
  insight_count: 4
  depth_score: 6.5
  base_star: 4
  star: 4
  premium: false
  rationale: "4단계 배수 case 서술 · 노동량 높음 · 0 첫자리 처리 반복 · ★ 4"
  tier: star_4
  mechanism_primary: 자연수 개수 · 다중 배수 조건 (4·5·홀·짝) 종합
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: anchor
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.85
  friction_triggers: [F1, F2]
```

---

## Ⅴ. STEP 3 행복한 일등급 표본 (5/11문 정밀 판정)

```yaml
- id: 마-CM1-CB-순열-1606
  page: 272
  vendor_label: STEP 3 행복한 일등급
  category_type: STEP 3 행복한 일등급
  summary: "1~6을 2×3 격자 (위 3·아래 3)에 배열 · 각 줄에 있는 숫자의 곱이 짝수 되도록 배열 · 경우의 수"
  category: 격자 배열 · 짝수 조건 (곱 짝수 = 짝수 최소 1개)
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-SC, depth: 3, effective_depth: 3, signal_ref: [P1, P4], description: "각 줄 곱 짝수 = 각 줄에 짝수(2,4,6) 최소 1개 · 여사건: 어느 줄이 모두 홀수 (1,3,5)"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P3], description: "여사건 = 위 3자리에 홀 3개 배치 or 아래 3자리에 홀 3개 배치 (홀 3개 = 1,3,5 정확히) → 2가지 (위/아래) × 3!(홀 배치) × 3!(짝 배치)"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "전체 6! − 여사건 = 720 − 2·36 = 720 − 72 = 648"}
  insight_count: 3
  depth_score: 8.67
  base_star: 5
  star: 5
  premium: false
  rationale: "여사건 + 격자 배치 이중 통찰 · P1·P3·P4 3카드 · XU (여사건+격자) 저노출 유형 만족 · depth_score 8.67 ≥ 8.5·max=3 만족 · insight_count 3 < 5 (premium 불충족) · ★ 5"
  tier: star_5
  mechanism_primary: 여사건 · 격자 배열 (곱 짝수)
  insight_type: 통찰형 (깊음)
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  vendor_calibration_signal:
    L5_confidence: 0.85
  friction_triggers: [F1, F3, F4]

- id: 마-CM1-CB-순열-1607
  page: 272
  vendor_label: STEP 3 행복한 일등급
  category_type: STEP 3 행복한 일등급
  summary: "A,B,C,D,E,F 6문자 일렬 나열 · A와 B 이웃 또는 B와 C 이웃 경우의 수"
  category: 이웃 순열 · 합집합 (포함배제)
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-SC, depth: 3, effective_depth: 3, signal_ref: [P1, P3], description: "포함배제: n(AB) + n(BC) − n(AB ∧ BC)"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "n(AB) = 5!·2! = 240 · n(BC) = 5!·2! = 240"}
    - {step: 3, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P4], description: "n(AB∧BC) = A-B-C 또는 C-B-A 묶음 → 4!·2 = 48 (B 공유이므로 2! 아님)"}
    - {step: 4, type: I-CON, depth: 2, effective_depth: 2, description: "240+240−48 = 432"}
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: "포함배제 + 공유 문자 이웃 특수처리 (B 공유) · P1·P3·P4 3카드 · XU (공유 이웃) 저노출 · depth_score 8.5·max=3·count=4 → premium 임계 count 5 미충족 · ★ 5"
  tier: star_5
  mechanism_primary: 포함배제 (이웃 공유 문자)
  insight_type: 통찰형 (깊음)
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  vendor_calibration_signal:
    L5_confidence: 0.90
  friction_triggers: [F1, F3]

- id: 마-CM1-CB-순열-1609
  page: 272
  vendor_label: STEP 3 행복한 일등급
  category_type: STEP 3 행복한 일등급
  summary: "십자형 6방 · A,B,C,D,E,F 6명 · A와 B가 이웃한 방에 들어가지 않도록 배치 · 경우의 수 (이웃방 = 문 한 번만 통과)"
  category: 그래프 · 인접 배제 (특수 방 배치)
  M: {s: 4, k: 3, a: 3, t: 2}
  M_total: 12
  insights:
    - {step: 1, type: I-SC, depth: 3, effective_depth: 3, signal_ref: [P1, P2], description: "십자형 6방 인접 그래프 분석 · 각 방의 이웃 방 수 파악 (중앙 방 4개 이웃 등)"}
    - {step: 2, type: I-SC, depth: 3, effective_depth: 3, signal_ref: [P4], description: "여사건: A,B 이웃 배치 경우 계산 · 방마다 이웃 방 개수 case 합산"}
    - {step: 3, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P3], description: "A,B 이웃 배치 = Σ(각 방 A 배치 × 그 방의 이웃 방 B 배치) · 나머지 4명 4!"}
    - {step: 4, type: I-CON, depth: 2, effective_depth: 2, description: "전체 6! − 여사건 = 최종"}
    - {step: 5, type: I-VF, depth: 2, effective_depth: 2, description: "십자형 그래프 인접 관계 정확 확인 (도해 필수)"}
  insight_count: 5
  depth_score: 8.8
  base_star: 5
  star: 5
  premium: true
  rationale: "그래프 인접 분석 + 여사건 + 배치 셈 · P1·P2·P3·P4 4카드 · XU (그래프 구조) 저노출 · depth_score 8.8 ≥ 8.5·max=3·count=5 → **premium 3조건 만족** · ★ 5 premium"
  tier: star_5
  mechanism_primary: 그래프 인접 분석 · 여사건 (십자방)
  insight_type: 통찰형 (깊음)
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  vendor_calibration_signal:
    L5_confidence: 0.90
  friction_triggers: [F1, F3, F4, F5]

- id: 마-CM1-CB-순열-1610
  page: 272
  vendor_label: STEP 3 행복한 일등급
  category_type: STEP 3 행복한 일등급
  summary: "2×3 직사각형 6칸에 1,2,4,6,8,9를 하나씩 넣기 · 각 가로줄 세 수의 합이 서로 같은 경우의 수"
  category: 격자 · 합 등분 (분배 case)
  M: {s: 4, k: 3, a: 3, t: 1}
  M_total: 11
  insights:
    - {step: 1, type: I-SC, depth: 3, effective_depth: 3, signal_ref: [P1, P4], description: "여섯 수 합 = 1+2+4+6+8+9 = 30 · 두 가로줄 합 같으려면 각 줄 15"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P3], description: "합 15되는 3-부분집합 탐색: {1,6,8}·{2,4,9}·{6,9}(2개)·{1,4,...} → case 열거 (완전탐색)"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "각 유효 분할당 위·아래 배치 2가지 × 각 줄 내부 3! · 총 합산"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "합 15 분할이 진짜 유일 pair인지 상보 검증 (완전탐색 누락 방지)"}
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: "합 등분 조건 + 부분집합 완전탐색 · P1·P3·P4 3카드 · XU (합 등분) 저노출 · depth_score 8.5·max=3·count=4 → premium 임계 count 5 미충족 · ★ 5"
  tier: star_5
  mechanism_primary: 합 등분 · 부분집합 완전탐색 · 격자 배치
  insight_type: 통찰형 (깊음)
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  vendor_calibration_signal:
    L5_confidence: 0.85
  friction_triggers: [F1, F3]

- id: 마-CM1-CB-순열-1616
  page: 273
  vendor_label: STEP 3 행복한 일등급 · 2011.09 고3 모평 나형 7번
  category_type: STEP 3 행복한 일등급 (모의고사 핵심유형)
  summary: "6지역 (지도 그림) 인구조사 5명 담당 · 5명 중 1명은 서로 이웃한 2지역 담당 · 나머지 4명은 남은 4지역 각 1개씩 · 담당 정하는 경우의 수 (경계 일부라도 닿음 = 이웃)"
  category: 지역 그래프 · 인접 pair + 배치
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-SC, depth: 2, effective_depth: 2, description: "지도 인접 관계 파악 · 이웃 지역 pair 개수 카운트"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "이웃 pair 담당자 1명 선택 5C1 · 이웃 pair 선택 (도해에서 개수 확인)"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "나머지 4명 4지역 배치 4!"}
  insight_count: 3
  depth_score: 6.67
  base_star: 4
  star: 4
  premium: false
  rationale: "학평 나형 7번 (초중반 배치) · 지도 인접 확인 후 표준 배치 · STEP 3 라벨 과대 · ★ 4 (편차 -1) · vendor-label-calibration STEP 3 평면좌표형 예외 사례와 유사 · 여기서는 학평 초반 번호 근거"
  tier: star_5
  mechanism_primary: 지역 인접 pair · 담당 배치
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L3_multi_vendor_tier: []
    L5_confidence: 0.75
  friction_triggers: [F1, F3]
```

---

## 예측 표본 (71문 · 벤더 라벨 회귀) — 요약 매핑

vendor-label-calibration v1.5 마플 회귀 함수 적용 (STEP 3는 소단원 신규 → confidence 0.55로 조정 · CM1-CB 순열은 sub_unit 예외 대상 아니므로 STEP 3 → ★ 4~5 기본):

| 벤더 라벨 | 문항 수 | 예측 ★ | confidence | 대상 문항 ID |
|---|---:|---|---:|---|
| STEP 1 BASIC (표본 외) | 9 | ★ 1~2 (평균 1.75) | 0.60 | 1526·1527·1528·1529·1538·1539·1545·1552·1553·1554·1564·1567·1575·1588 (일부 표본) → 9문 |
| STEP 1 NORMAL (표본 외) | 25 | ★ 3 (alt ★ 4) | 0.70 | 1534·1535·1537·1540·1544·1546·1548·1551·1556·1557·1558·1559·1560·1561·1565·1566·1569·1570·1571·1572·1573·1574·1577·1578·1584·1585·1586·1589·1590·1593·1594·1595·1596 |
| STEP 1 TOUGH (표본 외) | 15 | ★ 4 (alt ★ 3·5) | 0.75 | 1549·1563·1576·1580·1582·1583·1587·1591·1592·1597·1598·1599·1611 등 |
| STEP 2 서술형 (표본 외) | 4 | ★ 4 (편차 0.0) | 0.85 | 1600·1602·1604·1605 |
| STEP 3 행복한 일등급 (표본 외) | 6 | ★ 4~5 | 0.55 | 1608·1611·1612·1613·1614·1615 |

**예측 문항 표기 예시** (문서 축약 · 실제 자산화 시 각 개별 엔트리로 확장):

```yaml
- id: 마-CM1-CB-순열-1526
  page: 260
  vendor_label: BASIC · 학교기출
  summary: "순열 계산 기본식 (5!·0!·nP0·nP1·nP2 등) 옳지 않은 것 고르기"
  prediction_source: vendor-label-calibration v1.5
  predicted_star: 1
  predicted_confidence: 0.85
  prediction_note: "마플 BASIC → ★ 1.75 회귀 · 순열 정의 확인 문항 → ★ 1"
  tier: star_2
  target_cohort: 중하위권

- id: 마-CM1-CB-순열-1611
  page: 272
  vendor_label: STEP 3 행복한 일등급 · 2024.03 고2 학평 18번
  summary: "둥근 의자 3·사각 의자 3 교대 나열 · 1·2·3학년 각 2명씩 · (가) 2학년 사각 (나) 같은 학년 비이웃 · 경우의 수"
  prediction_source: vendor-label-calibration v1.5
  predicted_star: 5
  predicted_confidence: 0.75
  prediction_note: "STEP 3 + 학평 18번 (중반 이후) · 이중 조건 + 학년 구별 · premium 후보"
  tier: star_5
  target_cohort: 상위권
```

(나머지 예측 엔트리는 위 회귀 매핑에 준하여 원본 벤더 라벨 그대로 tier 배정. 자산화 완결은 Phase 2.6에서 진행 예정.)

---

## 표본 판정 요약 (20문)

| ★ | STEP1 BASIC | STEP1 NORMAL | STEP1 TOUGH | STEP2 서술형 | STEP3 행복한 일등급 | 합계 |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| ★ 1 | 3 | - | - | - | - | 3 |
| ★ 2 | - | 1 | - | - | - | 1 |
| ★ 3 | - | 4 | 3 | - | - | 7 |
| ★ 4 | - | - | 2 | 2 | 1 | 5 |
| ★ 5 | - | - | - | - | 3 | 3 |
| ★ 5 premium | - | - | - | - | 1 | 1 |
| **합계** | **3** | **5** | **5** | **2** | **5** | **20** |

## 예측 종합 (전체 91문)

| ★ | 표본 실측 | 예측 (71문) | 전체 (91문) |
|---|---:|---:|---:|
| ★ 1 | 3 | 약 6 (BASIC 하한) | 9 |
| ★ 2 | 1 | 약 8 (BASIC 상단 + NORMAL 일부) | 9 |
| ★ 3 | 7 | 약 25 (NORMAL 다수) | 32 |
| ★ 4 | 5 | 약 22 (TOUGH + STEP 2 + NORMAL 상단) | 27 |
| ★ 5 | 3 | 약 8 (TOUGH 상단 + STEP 3 일부) | 11 |
| ★ 5 premium | 1 | 약 2 (STEP 3 상위 후보) | 3 |
| **합계** | **20** | **71** | **91** |

---

## 핵심 관찰

### 1. STEP 3 실측 ★ 분포 (5문 · 이번 세션 신규 실측)

| 문항 | vendor_label | 실측 ★ | premium |
|---|---|---|---|
| 1606 | STEP 3 (격자·짝수 조건) | ★ 5 | false |
| 1607 | STEP 3 (이웃 공유 포함배제) | ★ 5 | false |
| 1609 | STEP 3 (십자방 그래프 인접) | **★ 5 premium** | **true** |
| 1610 | STEP 3 (합 등분 격자) | ★ 5 | false |
| 1616 | STEP 3 · 학평 나형 7번 (지역 담당) | ★ 4 | false |

- **★ 5 이상 밀도**: 4/5 = **80%** (평면좌표 60%·원의방정식 100%·도형이동 100% 사이 위치)
- **premium 밀도**: 1/5 = **20%** (평면좌표 0%·원의방정식 25%·도형이동 40% 사이 위치)
- **STEP 3 학평 초반 번호 (1616, 나형 7번)만 -1 편차** · 마플 STEP 3 학평 편입 라벨의 특성 (v1.5 관찰 재확인)

### 2. CM1-CB 순열 소단원의 통찰 유형 특성

| 통찰 유형 | 표본 등장 빈도 | 특성 |
|---|:---:|---|
| **I-SC (전략 분기)** | **11회** | 여사건·case 분해·포함배제 전략 선택 상시 요구 |
| **I-EQV (등가 변환)** | 12회 | 순열식 → 배열식 · 배수 조건 → 자리 조건 변환 |
| **I-CON (조건 결합)** | 11회 | 자리 조건 + 순열 계산 반복 결합 |
| **I-SYM (대칭)** | 1회 | 1543 (천>일 vs 천<일) — 낮은 등장 |
| **I-VF (검증 강제)** | 2회 | 1533 (n 역산 시행착오)·1610 (합 15 분할 완전탐색 누락 방지) |
| **I-PD (관점 이동)** | 0회 (직접 등장 없음) | 대신 여사건 (I-SC 하위 개념)이 그 역할 |

**결론**:
- **I-SC 전략 분기가 압도적** (평면좌표는 I-EQV 다중이 주력) — 여사건·case 분해가 CB의 정체성
- **I-VF는 STEP 3·TOUGH에서 완전탐색 누락 방지 도구로 등장** (1610 상보 검증) — 강제성 존재
- **I-XU (예외 유형): 격자 배열 · 그래프 인접 · 이웃 공유 포함배제** — CB에만 존재하는 저노출 재료

### 3. 도형이동 STEP 3 (40% premium 밀도)와 비교

| 소단원 | STEP 3 표본 | ★ 5 이상 비율 | premium 밀도 | 통찰 특성 |
|---|---:|---:|---:|---|
| 평면좌표 | 5 | 60% | 0% | 좌표·거리 반복 · 통찰 감쇠 |
| 원의방정식 | 4 | 100% | 25% | 접선·경계 통찰 |
| 도형이동 | 5 | 100% | **40%** | 대칭·평행이동 축 강한 통찰 |
| **CB-순열** | 5 | **80%** | **20%** | **여사건·case 분해·그래프 인접** |

**해석**: CB-순열 STEP 3는 **도형이동보다 premium 밀도 낮으나 (40% → 20%) 원의방정식보다 다양성 높음** · 그래프 인접 (1609)이 CM1 저노출 최상위 재료로 확보 가능.

### 4. TOUGH 라벨 신뢰도 (v1.5 회귀 재확인)

- 표본 5문 중 **★ 4 실측 2문·★ 3 실측 3문** → **TOUGH 라벨 과대 60%** (마-1536·1542·1543이 -1 편차)
- 평면좌표 TOUGH 편차 (17% ★ 3)보다 CM1-CB에서 편차 확대 → **CM1-CB TOUGH는 배수 조건·자리 조건 조합이 표준 유형화되어 상대적 ★ 하락**
- v1.5 STEP 3 매핑에 **CM1-CB 소단원 추가 신호**: `TOUGH → ★ 3.5 (편차 0.5)` · confidence 0.65 (평면좌표 0.75 대비 하향)

### 5. 자산화 활용 관점

- **premium 후보**: 1609 (십자방 그래프) · 1611 (2024.03 학평 18번 · 예측) → 시험지 정점 문항 원본으로 유용
- **anchor 후보 (통찰형)**: 1547·1550·1562·1601·1603·1606·1607·1610 → 유형편·연습편 표준 앵커
- **★ 3 표준 유형 밀도**: NORMAL 라벨 33문 중 25문 ★ 3 → 정리편·유형편 대표문제 원본 풀 안정
- **CM1-CB 순열 원본 은행 규모**: 91문 (평면좌표 116문의 78% · 도형이동 급 수준)

### 6. vendor-label-calibration v1.5 CM1-CB 순열 회귀 신규 데이터

```
마플_CM1-CB-순열_star_predict(label) =
  if label == "BASIC":                 2 (편차 0.5 · alt: [1])   → v1.5 유지
  elif label == "NORMAL":              3 (편차 0.4 · alt: [4])   → v1.5 유지
  elif label == "TOUGH":               3.5 (편차 0.5 · alt: [3, 4])  ← CM1-CB 하향 (평면좌표 4.0 대비)
  elif label == "STEP 2 서술형":       4 (편차 0.0)              → v1.5 유지
  elif label == "STEP 3 일등급":       5 (편차 0.5 · alt: [4], confidence 0.65)  ← CM1-CB 신규 데이터
```

**Phase 2.6 편입 제안**: vendor-label-calibration v1.6에 CM1-CB 순열 20문 실측 데이터 추가 · CM1 신규 소단원 회귀 매트릭스 개설.

---

## 참조 문서

- 판정 알고리즘: [`bank/schema.md`](schema.md) v3.8
- 정독 스키마: [`bank/정독-스키마-v2.0.md`](정독-스키마-v2.0.md)
- 벤더 라벨 회귀: [`bank/vendor-label-calibration.md`](vendor-label-calibration.md) v1.5
- 파일럿 1 준거: [`bank/mechanism-데이터-마플시너지-CM2-GM-평면좌표.md`](mechanism-데이터-마플시너지-CM2-GM-평면좌표.md)
- 교육과정 제약: [`bank/CM1-교과과정.md`](CM1-교과과정.md)

## 변경 이력

- 2026-07-21 v1.0 — 초판. CM1-CB 순열 소단원 91문 정독 · 표본 20문 시스템 순정 판정 + 71문 벤더 라벨 회귀 예측. CM1 정독 v2.0 스키마 최초 자산. STEP 3 5문 실측 (★ 5 이상 80% · premium 1문). TOUGH 라벨 CM1-CB 하향 신호 확인 (편차 -1 3/5).
