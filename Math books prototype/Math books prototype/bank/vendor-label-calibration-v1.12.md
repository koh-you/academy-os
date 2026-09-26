---
name: vendor-label-calibration-v1.12
description: 시판 교재 벤더 난이도 라벨 → 프로젝트 시스템 ★ 회귀 매핑 v1.12. 세션 62 flywheel 완료 · 30+ 신규 벤더 정독 편입 · v1 → v2 재정독 12건 통합 · 총 실측 표본 ~2,068문 (v1.11 605문 대비 +1,463문) · 벤더 회귀 함수 매트릭스 23종 정련 · v1.10 매트릭스 유지 위에 확장 layer.
metadata:
  type: reference
  version: v1.12
  established: 2026-07-21 (v1.0~v1.12)
  scope: 세션 62 flywheel 완료 · **~2,068문 실측** (v1.11 605 + 세션 62 30+ 벤더 신규 표본 총 ~1,463문) · CM1 4대단원 + CM2 4대단원 (8대단원 · 20+ 소단원) 완결
  purpose: (1) star-classify.mjs 벤더 라벨 축 (23종 벤더 회귀) · (2) 미실측 시판 교재 자동 첫 판정 · (3) 벤더별 라벨 신뢰도 정량화 (A+/A/A-/B+/B/C 6단계) · (4) 소단원별 예외 매트릭스 (CM2-RF·CM2-FN·CM1-CB 등) · (5) 시험지 정점 슬롯 pool 우선순위 배정 · (6) 세션 63+ 시험지 창작 시 원본 pick 가이드
  parent_v1_11: bank/vendor-label-calibration.md v1.11 (v1.10 578문 + 블랙라벨 CM2 STEP 2·3 27문 = 605문)
  v2_asset_batch: 
    - mechanism-데이터-쎈-CM2-v2-통합.md (v2.0)
    - mechanism-데이터-마플시너지-CM2-v2-통합.md (v2.0)
    - mechanism-데이터-쎈-CM1-v2-통합.md (v2.0)
    - mechanism-데이터-마플시너지-CM1-v2-통합.md (v2.0)
    - mechanism-데이터-블랙라벨-CM1-v2-통합.md (v2.0)
    - mechanism-데이터-고쟁이-CM1-v2.md (v2.0)
    - mechanism-데이터-고쟁이-CM2-v2.md (v2.0)
    - mechanism-데이터-개념원리-CM1-v2.md (v2.0)
    - mechanism-데이터-개념원리-CM2-v2.md (v2.0)
    - mechanism-데이터-개념원리-CM2-C급-4파일-v2.md (v2.0)
    - mechanism-데이터-rpm-CM1-v2.md (v2.0)
    - mechanism-데이터-rpm-CM2-v2.md (v2.0)
  new_vendor_batch_cm2:
    - mechanism-데이터-일품-CM2.md · mechanism-데이터-절대등급-CM2.md · mechanism-데이터-개념유형-CM2.md
    - mechanism-데이터-완자-CM2.md · mechanism-데이터-풍산자-CM2.md · mechanism-데이터-수학의바이블-CM2.md
    - mechanism-데이터-수학의신-CM2.md · mechanism-데이터-ebs-올림포스-고난도-CM2.md
    - mechanism-데이터-ebs-학평기출-CM2.md · mechanism-데이터-마플교과서-CM2.md
    - mechanism-데이터-라이트쎈-CM2.md
  new_vendor_batch_cm1:
    - mechanism-데이터-1등급마스터-CM1.md · mechanism-데이터-일품-CM1.md · mechanism-데이터-절대등급-CM1.md
    - mechanism-데이터-일등급만들기-CM1.md · mechanism-데이터-일등급수학-CM1.md · mechanism-데이터-플래티넘-CM1.md
    - mechanism-데이터-유형만렙-CM1.md · mechanism-데이터-유형ZIP-CM1.md · mechanism-데이터-수학의바이블-CM1.md
    - mechanism-데이터-바이블-유형온-CM1.md · mechanism-데이터-완자-CM1.md · mechanism-데이터-완쏠-CM1.md
    - mechanism-데이터-짱중요-CM1.md · mechanism-데이터-아샘파이널-CM1.md · mechanism-데이터-라이트쎈-CM1.md
    - mechanism-데이터-올림포스-유형편-CM1.md · mechanism-데이터-올림포스-학평기출-CM1.md
    - mechanism-데이터-마더텅-CM1.md · mechanism-데이터-마더텅-미니모의-CM1.md
    - mechanism-데이터-2026-6월-학평-CM1.md · mechanism-데이터-마플시너지-모고-CM1.md
---

# 벤더 라벨 → 시스템 ★ 회귀 매핑 v1.12 (세션 62 flywheel 완결)

## v1.12 요약

**핵심 갱신**:
- 세션 62 flywheel 완료 · **30+ 신규 벤더 정독 편입** (CM2 11종 + CM1 20종)
- v1 → v2 **재정독 12건 통합** (쎈/마플 CM2·CM1 v2 · 블랙라벨 CM1 v2 · 개념원리·RPM·고쟁이 v2)
- 총 실측 표본 **~2,068문** (v1.11 605문 · **+1,463문**)
- 벤더 회귀 함수 매트릭스 **23종 벤더**로 확장 (v1.11 8종 대비 15종 신규)
- 신뢰도 등급 **6단계 세분화** (A+ / A / A- / B+ / B / C)
- 소단원별 예외 매트릭스 (**CM2-RF 유리 vs 무리 별도 회귀 · CM2-FN 정점 밀도 상향 · CM1-CB 마플 TOUGH 하향 · CM1-EQ 완전제곱 상향**)

**v1.11 매트릭스 유지 확장 원칙**: 기존 v1.11 회귀 함수를 하위 layer로 유지 · 세션 62 재정독 · 신규 벤더는 확장 layer로 추가 · 하위 호환성 보장.

---

## Ⅰ. 통합 회귀 매트릭스 v1.12 (23종 벤더 · 6단계 신뢰도)

### 최상급 A+급 (정합률 ≥ 90% · premium 밀도 정확)

| 벤더 | 표본 (누적) | 신뢰도 | 정합률 | premium 밀도 | 특성 |
|---|---:|---|---:|---:|---|
| **블랙라벨 STEP 3** | 27+ (CM2 12 · CM1 10 + 배경 5) | **A+** | 100% | STEP 3 = 100% premium | 라벨 자체가 최고급 · 소단원 세분 불필요 |
| **1등급MASTER STEP 3·1등급++** | 30 (v2.0 신규 CM1) | **A+** | 100% | 1등급++ = 100% premium | 블랙라벨 STEP 3와 동급 · CM1 최상위 벤더 pool |
| **플래티넘 STEP 3** | 28 (v2.0 신규 CM1) | **A+** | 100% (18문 정합) | STEP 3 = 55% premium | 전국 특목·자사고 실 기출 재수록 · premium 신규 19건 대발견 |
| **EBS 올림포스 고난도 CM2 (band 4)** | 30 (v2.0 신규) | **A+** | 92% | band 4 = 100% premium 정합 | 상위 1% 공략서 · 정합률 92% |
| **2026-6월 학평 CM1** | 30 (전 문항) | **A+** | 97% | 실측 2/30 | 학평 문번 → 시스템 ★ 회귀 검증 · 편차 ≤1 |
| **수학의 신 STEP 3** | 15 (v2.0 신규 CM2) | **A+** | 100% (근접) | STEP 3 = 100% | 블랙라벨 STEP 3와 동급 |
| **일품 (CM1+CM2 통합)** | 48 (CM2 26 + CM1 22) | **A+** | 91.7% | 사고력통합 = ~40% | 소단원 무관 안정성 최상 · CM1·CM2 편차 ≤ 0.1 |

### 상급 A급 (정합률 72~92% · 원본 pool 신뢰)

| 벤더 | 표본 (누적) | 신뢰도 | 정합률 | premium 밀도 | 특성 |
|---|---:|---|---:|---:|---|
| **블랙라벨 STEP 2** | 15+ (CM2 15 · CM1 10) | **A** | 100% | STEP 2 = 34% (CM2) · 50% (CM1) | ★ 5 하한 안정 · CM1 신규 A급 등재 |
| **쎈 CM1 (전 소단원)** | 122+ (v2.0 통합) | **A** | 96.7% | ● 상 편차 0 (CM1-EQ·PL) | v1.11 A급 → v2 96.7% 상향 |
| **쎈 CM2 (전 소단원)** | 195+ (v2.0 통합) | **A** | 72~90% | O-NEW 원형 7종 재현 | 4단계 라벨 + 사고력 아이콘 |
| **마플시너지 CM1** | 215+ (v2.0 통합) | **A** | 90% | STEP 3 = 100% 정합 | CM1이 마플의 강점 영역 |
| **마플시너지 CM2** | 245+ (v2.0 통합) | **A** | 74% | CM2-ST 정점 밀도 최고 | BASIC/NORMAL/TOUGH · STEP 3 소단원 의존 |
| **마플시너지 모고 CM1** | 24 (신규) | **A** | 100% (표본) | 4회-25 = premium 1건 확정 | 마플 심화편 라벨 문번 재배치 · 정합률 100% |
| **일등급수학 CM1** | 30 (신규) | **A** | 80% | STEP 3 = 30% | 고난도 도전 문제 pool 우수 |
| **일등급만들기 CM1** | 28 (신규) | **A** | 100% (STEP 2·3) | STEP 2·3 밀도 = 30~40% | 마플 STEP 3 근소 우세 |
| **EBS 올림포스 학평기출 CM1·CM2** | 58 (CM1 30 + CM2 28) | **A** | 90% | 1등급 도전 = 40% | 학평 원본 · 라벨 없이 배점 회귀 A급 |
| **ebs-학평기출 CM2** | 28 (신규) | **A** | 90% | premium 6문 | O-NEW-33~38 원형 발굴 · CM2 매트릭스 8/8 정합 |

### 준상급 A-급 (정합률 78~85% · 표본 확대 여지)

| 벤더 | 표본 (누적) | 신뢰도 | 정합률 | premium 밀도 | 특성 |
|---|---:|---|---:|---:|---|
| **고쟁이 STEP 1** | 18 (v2.0 유지) | **A-** | 83% | 번호 위치별 세분 | STEP 1 초·중·후 3-tier 세분 유효 |
| **고쟁이 CM1·CM2 (통합)** | 50 (v2.0 신규 25+25) | **A-** | ~85% | STEP 2 → 5·STEP 3 → premium | 통합 배경 자산 895+383 = 1,278문 |
| **절대등급 (CM1+CM2)** | 57 (CM1 30 + CM2 27) | **A-** | 76~78% | A/B/C 3-step 회귀 안정 | 소단원 무관 안정 · CM1·CM2 정합 |
| **풍산자 CM2** | 27 (신규) | **A-** | ~85% | 도전 1등급 = 100% ★ 5 | 교육청 기출 편입 다수 |
| **수학의바이블 CM1·CM2** | 50 (CM1 25 + CM2 25) | **A-** | 80~82% | challenge = ★ 5 정합 | 6계층 (Bible Focus~challenge) 명료 |
| **바이블 유형온 CM1** | 25 (신규) | **A-** | 80% | Part C 이차부등식 ★ 4 안정 | 개념ON 대응 유형편 · 정합률 소폭 하락 |
| **마플교과서 CM2** | 27 (신규) | **A-** | ~74% | 발전·특강 = ★ 4~5 | 마플 계열 기본편 · concept-author A+급 |
| **마더텅 CM1** | 27 (신규) | **A-** | 85% | 최고난도 88문 중 20문 premium | 4-star + 원문 배점 회귀 · 자기복제 위험 최고 |
| **마더텅 미니모의 CM1** | 26 (신규) | **A-** | ~90% | 문 5~8 킬러 pool | 회차 구조 규칙적 · 예측 안정 |

### 중상급 B+급 (정합률 72~78% · 정리편·유형편 pool 적합)

| 벤더 | 표본 (누적) | 신뢰도 | 정합률 | premium 밀도 | 특성 |
|---|---:|---|---:|---:|---|
| **블랙라벨 STEP 1** | 15 | B+ | 73% | star_4 (alt star_3·5) | 일괄 star_4 · 편차 존재 |
| **완자 CM1** | 25 (신규) | **B+** | 78~82% | [실전] = star 4~5 | CM2 대비 신뢰 승격 |
| **유형ZIP CM1** | 25 (신규) | **B+** | 76% | 도전1등급 = ★ 5 | 정점 pool 유형만렙 대비 우위 |
| **짱중요 CM1** | 30 (신규) | **B+** | 78% | premium 3% | 학평 재수록 밀도 최고 |
| **라이트쎈 CM1** | 30 (신규) | **B+** | 72% | 도전·평가원 배지 | 표본 확대 시 A- 승격 여지 |
| **라이트쎈 CM2** | 27 (신규) | **B+** | 74% | 평가원·수능·도전 3배지 | CM1·CM2 유사 구조 |
| **일품 STEP 3 (CM2 초기)** | 26 | **B+** | 78% | 사고력통합 = ★ 4~5 | v1.0 CM2 초기 → CM1 확장 후 A+ 상승 |
| **올림포스 유형편 CM1** | 26 (신규) | **B+** | 73% | 1등급 도전 = ~40% | 4-band 라벨 · CM2 고난도 대비 낮음 |

### 중급 B급 (정합률 60~72% · 절차형 pool 위주)

| 벤더 | 표본 (누적) | 신뢰도 | 정합률 | premium 밀도 | 특성 |
|---|---:|---|---:|---:|---|
| **RPM CM1·CM2 (v2.0)** | 50 (신규 25+25) | **B** | 60~65% | 심화 소수 | 시험꼭나오는 라벨 과대 · v2 재확인 |
| **개념원리 CM1·CM2 (v2.0)** | 55 (신규 30+25) | **B** | 45~50% | premium 부재 (대부분 star_3~4) | 실력UP·수능형 관대 · v1.2 편향 계승 확인 |
| **개념원리 CM2 C급 4파일 (v2.0)** | 40 (신규) | **B** | 각 파일 다양 | star_1~4 분산 | v1 star_3 단일 라벨 실체 세분 |
| **개념+유형 CM2** | 30 (신규) | **B** | 65~70% | ★ 5·premium 부재 | 최상위 예측 불가 |
| **완자 CM2** | 25 (신규) | **B** | 70~75% | PICK 대표 = star_2~3 | 첫 표본 · 확장 필요 |
| **완쏠 CM1** | 25 (신규) | **B** | 72% | premium 0건 | 명시적 라벨 부재 · 정리편 ★ 1~2 slot |
| **유형만렙 CM1** | 24 (신규) | **B** | 60~75% | premium 소수 | 유형 도입 첫 문항 통찰 낮음 |
| **아샘파이널 CM1** | 27 (신규) | **B** | 70% | premium 3건 | 최상 라벨 과대 42% · 이산 편차 큼 |

**총 실측 표본 (v1.12)**: **~2,068문** (v1.11 605문 · +1,463문)

---

## Ⅱ. 세션 62 신규 벤더 회귀 함수 상세

### 1. 1등급MASTER CM1 (A+급)

**라벨 체계** (5-STEP + 특급): STEP 1 개념 마스터 · STEP 2 내신 빈출 · STEP 3 고난도 마스터 · 1등급++ 최상위 · 학교시험 예상 · 서술형 특강

```python
1등급MASTER_star_predict(step, label_qualifier) =
  if step == "STEP 1": return {star: 2, confidence: 0.75}  # 개념 마스터
  if step == "STEP 2": return {star: 3~4, confidence: 0.80, alt: [2]}  # 내신 빈출
  if step == "STEP 3": return {star: 5, tier: "premium", confidence: 1.00, premium_flag: 1.00}  # 고난도 마스터
  if step == "1등급++": return {star: 5, tier: "premium", confidence: 1.00, premium_flag: 1.00}  # 최상위
  if step == "학교시험 예상": return {star: 4, confidence: 0.85, alt: [3, 5]}
  if step == "서술형 특강": return {star: 5, confidence: 0.85}
```

### 2. 플래티넘 CM1 (A+급 · v2.0 신규)

**라벨 체계**: STEP 1 빈출유형 · STEP 2 고난도 기출 · STEP 3 최상위 기출 · 서술형 특강 · 부록 모의고사 4회 (중간2·기말2)

```python
플래티넘_star_predict(step, sub_qualifier) =
  if step == "STEP 1": return {star: 3, confidence: 0.75}
  if step == "STEP 2": return {star: 4~5, confidence: 0.85, alt: [3]}  # 실 특목·명문고 기출
  if step == "STEP 3": return {star: 5, tier: "premium", confidence: 1.00, premium_flag: 0.55}  # 55% premium
  if step == "서술형 특강": return {star: 5, confidence: 0.85}
  if step == "부록 모의고사": return {star_by_문번: 배점_회귀_적용}  # 배점·문번 축 활용
```

**핵심 발견**: **premium 신규 후보 19건 대발견** (플래티넘 STEP 3 · 세션 62 최다) · 특목·자사고 실 내신 기출 pool 대체 불가.

### 3. 일등급수학 CM1 (A급)

**라벨 체계**: 실전 유형 훈련 (핵심유형) · 고난도 도전 문제 · 상위 1% 도전

```python
일등급수학_star_predict(section) =
  if section == "실전 유형 훈련 (핵심유형 01~04)": return {star: 3, confidence: 0.80}
  if section == "실전 유형 훈련 (핵심유형 05+)": return {star: 4, confidence: 0.80, alt: [3, 5]}
  if section == "고난도 도전 문제": return {star: 5, confidence: 0.85, alt: [4], premium_flag: 0.30}
  if section == "상위 1% 도전": return {star: 5, tier: "premium", confidence: 0.85, premium_flag: 0.60}
```

### 4. 일등급만들기 CM1 (A급)

**라벨 체계**: STEP 1 필수 유형 익히기 · STEP 2 실력완성 · STEP 3 최고난도

```python
일등급만들기_star_predict(step) =
  if step == "STEP 1": return {star: 3, confidence: 0.80}
  if step == "STEP 2": return {star: 4, confidence: 0.85, premium_flag: 0.15}
  if step == "STEP 3": return {star: 5, confidence: 0.90, alt: [4], premium_flag: 0.30}
```

### 5. 일품 (CM1·CM2 통합 · A+급)

**라벨 체계** (3-tier + 2축): 개념&핵심 · 1등급 고난도 · 사고력통합 · 실전 마무리 + Dot count (1·2·3 dots) + Type badge

```python
일품_star_predict(tier, dot_count) =
  base = {
    "개념&핵심": 2, "1등급 고난도": 4, "사고력통합": 5, "실전 마무리": 4
  }[tier]
  dot_bonus = {1: -1, 2: 0, 3: +1}[dot_count]
  final_star = clip(base + dot_bonus, 1, 5)
  premium_flag = 0.40 if (tier == "사고력통합" and dot_count == 3) else 0
  return {star: final_star, confidence: 0.90, premium_flag: premium_flag}
```

**핵심 발견**: CM1·CM2 편차 ≤ 0.1 · 소단원 무관 안정성 최상 · A+급 등재.

### 6. 절대등급 (CM1·CM2 · A-급)

**라벨 체계**: A step (기본) · B step (심화) · C step (최상위) · 서술형 · 집중연습

```python
절대등급_star_predict(step, qualifier) =
  if step == "A step (일반)": return {star: 2~3, confidence: 0.75}
  elif step == "A step (유형 후반)": return {star: 3, confidence: 0.85}
  elif step == "B step (일반)": return {star: 4, confidence: 0.78}
  elif step == "B step (서술형)": return {star: 4, confidence: 0.90}
  elif step == "B step (집중 연습)": return {star: 4, confidence: 0.75}
  elif step == "C step": return {star: 5, confidence: 0.67, alt: [4], premium_flag: 0.25}  # 편차 큼 · 표본 확대 필요
```

### 7. 수학의바이블 개념ON (CM1·CM2 · A-급)

**라벨 체계** (6계층): Bible Focus · 대표예제 · 한번·표현 · 실력 더하기 · 개념CHECK · 중단원 STEP1·STEP2·challenge

```python
수학의바이블_star_predict(tier, sub_no) =
  if tier == "개념CHECK·대표예제 (01~04)": return {star: 2~3, confidence: 0.90}
  if tier == "대표예제 (05~12)": return {star: 3, confidence: 0.85}
  if tier == "대표예제 (13~16)": return {star: 3~4, confidence: 0.85}
  if tier == "한번·표현·실력더하기": return {star: 3~4, confidence: 0.83}
  if tier == "중단원 STEP 1": return {star: 3, confidence: 0.78}
  if tier == "중단원 STEP 2": return {star: 4, confidence: 0.75, alt: [5]}
  if tier == "중단원 challenge": return {star: 4~5, confidence: 0.80, premium_flag: 0.20}
```

### 8. 수학의 신 CM2 (A급 · STEP 3만 A+급)

**라벨 체계**: STEP 1 핵심 · STEP 2 고난도 · STEP 3 최고난도 · 기출 변형 단원마스터

```python
수학의신_star_predict(step) =
  if step == "STEP 1": return {star: 3, confidence: 0.75}  # B+급
  if step == "STEP 2": return {star: 4, confidence: 0.85}   # A급
  if step == "STEP 3": return {star: 5, tier: "premium", confidence: 1.00, premium_flag: 0.90}  # A+급 · 블랙라벨 STEP 3 동급
  if step == "단원마스터": return {star: 5, confidence: 0.85, alt: [4]}
```

### 9. EBS 올림포스 고난도 CM2 (A+급)

**라벨 체계** (4-band): 내신 빈출 필수 · 내신 고득점 도전 · 변별력 1등급 · 상위 1%

```python
EBS_고난도_star_predict(band) =
  if band == "내신 빈출 필수 (band 1)": return {star: 3, confidence: 0.85}
  if band == "내신 고득점 도전 (band 2)": return {star: 4, confidence: 0.85}
  if band == "변별력 1등급 (band 3)": return {star: 4~5, confidence: 0.90, premium_flag: 0.30}
  if band == "상위 1% (band 4)": return {star: 5, tier: "premium", confidence: 1.00, premium_flag: 1.00}  # 100% 정합
```

### 10. 유형만렙·유형ZIP·완쏠 CM1 (B·B+급 · 유형편 pool)

```python
유형만렙_star_predict(part) =
  if part == "A 개념 확인": return {star: 1, confidence: 0.75}
  if part == "B 유형 완성 (하)": return {star: 2, confidence: 0.80}
  if part == "B 유형 완성 (중)": return {star: 3, confidence: 0.65}
  if part == "B 유형 완성 (상)": return {star: 4, confidence: 0.60, alt: [3, 5]}
  if part == "C 실력 향상": return {star: 4, confidence: 0.65, alt: [5]}

유형ZIP_star_predict(section) =
  if section == "개념 완성하기": return {star: 1, confidence: 0.80}
  if section == "대표 문제 (하/중/상)": return {star: 2~4, confidence: 0.75}
  if section == "학교 시험 대비": return {star: 3~4, confidence: 0.75}
  if section == "서술형 ZIP": return {star: 4, confidence: 0.80}
  if section == "1등급 핵심 기출": return {star: 4~5, confidence: 0.75, premium_flag: 0.15}
  if section == "도전 1 등급": return {star: 5, confidence: 0.80, alt: [4], premium_flag: 0.30}

완쏠_star_predict = {star: 1~3, confidence: 0.72}  # 명시적 라벨 부재 · 위치별 배정
```

### 11. 완자 기출PICK (CM1 B+ · CM2 B급)

**라벨 체계**: PICK 대표문제 · 필수기출 · 학평기출 · 서술형 · 심화 · [실전] (CM1만)

```python
완자_star_predict(label) =
  if label == "PICK 대표문제": return {star: 2~3, confidence: 0.85}
  if label == "필수기출": return {star: 3, confidence: 0.80}
  if label == "학평기출": return {star_by_문번: 배점_회귀_적용}
  if label == "서술형": return {star: 4, confidence: 0.85}
  if label == "심화": return {star: 4, confidence: 0.80, alt: [5]}
  if label == "[실전] (CM1 전용)": return {star: 4~5, confidence: 0.85, premium_flag: 0.10}
```

### 12. 풍산자 CM2 (A-급)

**라벨 체계**: 실 (기본) · 중 · 상 · 섹션 (서술형 · 도약 · 도전 1등급)

```python
풍산자_star_predict(label, section) =
  if label == "실 배지": return {star: 1~2, confidence: 1.00}  # 표본 2/2 정합
  if label == "중 배지": return {star: 3, confidence: 0.85}
  if label == "상 배지": return {star: 4, confidence: 0.75, alt: [3])
  if section == "서술형": return {star: 4, confidence: 0.85}
  if section == "도약": return {star: 4~5, confidence: 0.80}
  if section == "도전 1등급": return {star: 5, confidence: 1.00, alt: [4], premium_flag: 0.30}  # 100% ★ 5
```

### 13. 짱중요 CM1 (B+급 · 신규)

**라벨 체계** (5단계): 다지기 · 엿보기 · 점검하기 · 예상문제 · 대비평가

```python
짱중요_star_predict(section) =
  if section == "다지기 (기본)": return {star: 2, confidence: 0.80}
  if section == "엿보기 (기출)": return {star: 3, confidence: 0.80, alt: [2, 4]}
  if section == "점검하기 (예상)": return {star: 3~4, confidence: 0.78}
  if section == "예상문제 (실전)": return {star: 4, confidence: 0.75, alt: [3])
  if section == "대비평가 (최종)": return {star: 4~5, confidence: 0.75, premium_flag: 0.05}
```

### 14. 마더텅 CM1 (A-급 · 학평 재수록)

**라벨 체계** (4-star + 원문 배점): ★☆☆·★★☆·★★★·★★★★ + 2/3/4점

```python
마더텅_star_predict(star_label, orig_score, orig_no) =
  # 벤더 4-star 축
  if star_label == "★☆☆": return {star: 2, confidence: 0.85}
  if star_label == "★★☆": return {star: 3, confidence: 0.85}
  if star_label == "★★★": return {star: 4, confidence: 0.85, alt: [3, 5])
  if star_label == "★★★★":
    if orig_score == 4 and orig_no >= 27: return {star: 5, tier: "premium", confidence: 0.85, premium_flag: 0.30}
    else: return {star: 5, confidence: 0.85, alt: [4])
  # 자기복제 위험 최고 (EBS 100% · 전국연합 60~70% pool 공유)
```

### 15. 라이트쎈 CM1·CM2 (B+급)

**라벨 체계** (3단계 + 부가): A/B/실전 3단계 + 집중공략·별점 3개·서술형·평가원·수능·도전 배지 (CM2만)

```python
라이트쎈_star_predict(step, badge) =
  if step == "A step (기본)": return {star: 1~2, confidence: 0.80}
  if step == "B step (유형)": return {star: 3, confidence: 0.75}
  if step == "B step (별점 3개·집중공략)": return {star: 4, confidence: 0.72, alt: [3])
  if step == "실전 서술형": return {star: 3~4, confidence: 0.75}
  if badge == "도전·평가원·수능 (CM2)": return {star: 4~5, confidence: 0.75}
```

### 16. EBS 올림포스 유형편·학평기출 (CM1 A급·B+급 각각)

```python
올림포스_유형편_CM1_star_predict(band) =
  if band == "유형 완성하기 (하)": return {star: 2, confidence: 0.75}
  if band == "유형 완성하기 (중)": return {star: 3, confidence: 0.75}
  if band == "유형 완성하기 (상·중요 표시)": return {star: 4, confidence: 0.75}
  if band == "서술형 완성하기": return {star: 4, confidence: 0.80}
  if band == "1등급 도전": return {star: 4~5, confidence: 0.75, premium_flag: 0.40}

올림포스_학평기출_CM1_star_predict = 배점_회귀_A급 (표본 30·정합률 90%)
```

### 17. 학평 원본 pool (2026-6월·마플시너지 모고·마더텅 미니모의)

**핵심 발견**: 학평 원본은 자체 라벨이 없이 **배점·문번 축만으로 A/A+급 회귀 달성**.

```python
학평_배점_문번_star_predict(orig_score, orig_no) =
  if orig_score == 2: return {star: 1~2, confidence: 0.85}
  if orig_score == 3 and orig_no <= 15: return {star: 3, confidence: 0.90}
  if orig_score == 3 and orig_no >= 16: return {star: 3~4, confidence: 0.85}
  if orig_score == 4 and orig_no <= 16: return {star: 4, confidence: 0.85}
  if orig_score == 4 and orig_no in [17, 19]: return {star: 4~5, confidence: 0.85}
  if orig_score == 4 and orig_no in [20, 21, 22]: return {star: 5, confidence: 0.90, alt: [4], premium_flag: 0.20}
  if orig_score == 4 and orig_no in [27, 28, 29, 30]: return {star: 5, tier: "premium", confidence: 0.90, premium_flag: 0.60}
```

### 18. 마플교과서 CM2 (A-급)

**라벨 체계**: 개념익힘 · 확인 · 변형 · 발전 · 특강

```python
마플교과서_star_predict(section) =
  if section == "개념익힘": return {star: 1, confidence: 0.85}
  if section == "확인": return {star: 2, confidence: 0.80}
  if section == "변형": return {star: 3, confidence: 0.75}
  if section == "발전": return {star: 4, confidence: 0.75, alt: [3])
  if section == "특강": return {star: 4~5, confidence: 0.80}
```

### 19. 개념+유형 CM2 (B급)

**라벨 체계**: 개념편 (대표예제·유제·연습) + 유형편 (유형·마무리)

```python
개념+유형_star_predict(section) =
  if section == "개념편 대표예제": return {star: 2~3, confidence: 0.65}
  if section == "개념편 유제·연습": return {star: 3, confidence: 0.70}
  if section == "유형편 유형": return {star: 3, confidence: 0.65}
  if section == "유형편 마무리": return {star: 3~4, confidence: 0.70, alt: [2, 4])
  # ★ 5·premium 부재 · 정리편·유형편 pool 위주
```

### 20. 아샘파이널 CM1 (B급)

**라벨 체계**: 중간고사·기말고사·부록 (고차·연립·행렬곱셈 각 4회)

```python
아샘파이널_star_predict(section, orig_no) =
  if section == "중간·기말고사":
    # 배점·문번 축 활용
    if orig_no <= 5: return {star: 1~2, confidence: 0.80}
    if orig_no <= 12: return {star: 2~3, confidence: 0.75}
    if orig_no <= 20: return {star: 3~4, confidence: 0.70}
    if orig_no >= 21: return {star: 4~5, confidence: 0.68, alt: [3, 5], premium_flag: 0.05)
  if section == "부록 (킬러)": return {star: 5, confidence: 0.70, alt: [4], premium_flag: 0.15}
```

### 21. 바이블 유형ON CM1 (A-급 · 개념ON 대응 유형편)

**라벨 체계**: 유형N + 대표문제 + 중요·서술형·교육청기출·평가원기출·수능기출 + 3단계 난이도 (하·중·상)

```python
바이블_유형온_star_predict(part, difficulty) =
  if part == "Part A 유형별 대표문제":
    if difficulty == "하": return {star: 2, confidence: 0.80}
    if difficulty == "중": return {star: 3, confidence: 0.80}
    if difficulty == "상": return {star: 4, confidence: 0.80}
  if part == "Part B 내신 종합": return {star: 3~4, confidence: 0.75}
  if part == "Part C 수능 변별력": return {star: 4, confidence: 0.85, alt: [3, 5], premium_flag: 0.15}
```

---

## Ⅲ. 소단원별 예외 매트릭스 (v1.10 계승 + v1.12 확장)

### v1.10 매트릭스 (유지)

| 벤더 · 라벨 | 기본 예측 | **소단원 예외** | 예외 근거 |
|---|---|---|---|
| 쎈 사고력·교육청 | ★ 4 | **CM2-ST +0.5 (예측 ★ 4.5)** · **CM2-RF +1 (예측 ★ 5)** | v1.9·v1.10 실측 |
| 쎈 B단계 대표 | ★ 3 | **CM2-ST -0.4 (예측 ★ 2.6)** | v1.9 실측 |
| 마플 TOUGH | ★ 4 | **CM1-CB → ★ 3** | v1.6 실측 (3/5 하향) |
| 마플 STEP 3 | ★ 5 (변동) | **CM2-FN 합성역함수 premium_hint 0.80** · **CM2-ST 집합의뜻 premium_hint 1.00** · **CM2-RF 유리 0% · 무리 0.20** · **도형이동 0.40** · **CM1-EQ 여러방정식 premium_hint 0.60** | v1.9·v1.10 실측 |

### v1.12 신규 예외 (세션 62)

| 벤더 · 라벨 | 기본 예측 | **v1.12 신규 예외** | 예외 근거 |
|---|---|---|---|
| 마플 TOUGH | ★ 4 | **CM2-FN·CM2-ST premium 도달 케이스** | 마플 CM2 v2.0 (1408·0724·1152) |
| 마플 STEP 3 | ★ 5 | **CM1-EQ 여러방정식 premium_hint 0.60** (1121·1128) | 마플 CM1 v2.0 |
| 마플 STEP 3 | ★ 5 | **CM1-CB 조합 premium_hint 0.30** (1729·1730·1733) | 마플 CM1 v2.0 (O-NEW-33 신설) |
| 쎈 SPECIAL TIP | ★ 5 premium | **CM1-PL 인수분해 premium 밀도 60%** (0270·0277) | 쎈 CM1 v2.0 |
| 쎈 사고력의 기술 | ★ 4~5 | **CM1-EQ 부등식 star_5 안정** (0881·1030 · O-NEW-47·48) | 쎈 CM1 v2.0 |
| 마플 STEP 2 서술형 | ★ 4 | **CM1-EQ 이차부등식 Part C ★ 4 안정** | 유형온 CM1 |
| 개념원리 실력UP·수능형 | star_4 (v1.11) | **CM2 4파일 (원·이동·ST·FN)에서 star_1~4 분산** | 개념원리 CM2 C급 v2.0 |
| 개념원리 대표예제 | star_3 | **CM1·CM2 v2 재판정 확인 · 편향 유지 (관대 45%)** | v2.0 |

---

## Ⅳ. 시험지 정점 슬롯 pick pool 최종 우선순위 (v1.12)

### CM1 시험지 정점 슬롯 pool 우선순위

| 순위 | 벤더 | 신뢰도 | pool 특성 |
|---|---|---|---|
| **🥇 1** | **블랙라벨 CM1 STEP 3** | A+ | 100% premium · 소단원 무관 안정 · CM1 최우선 |
| **🥇 1** | **1등급MASTER CM1 STEP 3·1등급++** | A+ | 100% premium · 블랙라벨 동급 |
| **🥇 1** | **플래티넘 CM1 STEP 3** | A+ | 55% premium · 실 특목·자사고 기출 재수록 (**신규 pool 최다** · 19건) |
| 🥈 2 | 2026-6월 학평 CM1 | A+ | 97% 정합 · 최신 학평 원본 |
| 🥈 2 | 마플시너지 CM1 STEP 3 | A | 100% 정합 · 소단원별 premium_hint 활용 |
| 🥈 2 | 쎈 CM1 C단계 사고력·교육청 | A | O-NEW-43~50 8종 신규 원형 발굴 |
| 🥉 3 | 일등급수학 CM1 상위 1% 도전 | A | 60% premium 예상 |
| 🥉 3 | 일등급만들기 CM1 STEP 3 | A | 30% premium |
| 🥉 3 | EBS 올림포스 학평기출 CM1 1등급 도전 | A | 40% premium · 학평 배점 회귀 |
| ✅ 확장 | 마더텅 CM1 최고난도 (★★★★ · 4점 27+번) | A- | premium 후보 6문 |
| ✅ 확장 | 마플시너지 모고 CM1 (25번급) | A | 100% 정합 표본 24 |
| ⚠ 감쇠 | 아샘파이널 CM1 부록 킬러 | B | 자기복제 위험 (마더텅·EBS pool 재수록) |

### CM2 시험지 정점 슬롯 pool 우선순위

| 순위 | 벤더 | 신뢰도 | pool 특성 |
|---|---|---|---|
| **🥇 1** | **블랙라벨 CM2 STEP 3** | A+ | 100% premium · CM2 최우선 · 정점 자격 15문 표시 |
| **🥇 1** | **EBS 올림포스 고난도 CM2 band 4** | A+ | 100% premium 정합 · 상위 1% 공략 |
| **🥇 1** | **수학의 신 CM2 STEP 3** | A+ | 15문 정합률 100% · 블랙라벨 동급 |
| 🥈 2 | 마플시너지 CM2 STEP 3 | A | 소단원별 premium 밀도 매트릭스: 집합의뜻 100%·명제 85%·집합의연산 60%·합성역함수 80%·도형이동 40%·원 25%·평면좌표·직선 20~25%·무리 20%·유리 0% |
| 🥈 2 | 블랙라벨 CM2 STEP 2 | A | 34% premium · ★ 5 하한 안정 |
| 🥈 2 | 쎈 CM2 v2 통합 | A | O-NEW 원형 7종 재현 |
| 🥉 3 | EBS 올림포스 학평기출 CM2 | A | premium 6문 · 학평 배점 회귀 |
| 🥉 3 | 풍산자 CM2 도전 1등급 | A- | 100% ★ 5 · 교육청 기출 편입 |
| 🥉 3 | 일품 CM2 사고력통합 (3-dot) | A+ | 40% premium |
| ✅ 확장 | 절대등급 CM2 C step | A- | 편차 큼 (표본 확대 필요) |
| ✅ 확장 | 수학의바이블 CM2 challenge | A- | 20% premium |
| ✅ 확장 | 마플교과서 CM2 특강 | A- | 40~50% ★ 4~5 |

### CM1·CM2 정리편·유형편 pool 우선순위 (concept-author v1.1)

| 순위 | 벤더 | 신뢰도 | pool 특성 |
|---|---|---|---|
| 🥇 1 | 개념원리 대표예제·유제 | B | star_3 정합 · 관대 편향 감안 |
| 🥇 1 | RPM 유형익히기 | B | star_3 안정 |
| 🥇 1 | 수학의바이블 대표예제·한번·표현 | A- | 6계층 명료 |
| 🥇 1 | 마플교과서 개념익힘·확인·변형 | A- | concept-author A+급 활용 |
| 🥈 2 | 유형만렙·유형ZIP B 유형 완성 | B | 정리편·유형편 확대 pool |
| 🥈 2 | 완쏠·완자 CM1 PICK 대표·필수기출 | B | ★ 1~2 slot 확대 자산 |
| 🥈 2 | 짱중요·라이트쎈 A step | B+ | 학평 재수록 자원 |
| 🥉 3 | 개념+유형 개념편·유형편 | B | ★ 5·premium 부재 |

---

## Ⅴ. 통합 자동화 활용 예시 (v1.12)

```bash
# 세션 62 신규 벤더 자동 예측
node scripts/star-classify.mjs --file bank/mechanism-데이터-1등급마스터-CM1.md --by vendor_label --dry
node scripts/star-classify.mjs --file bank/mechanism-데이터-플래티넘-CM1.md --by vendor_label --dry
node scripts/star-classify.mjs --file bank/mechanism-데이터-일등급수학-CM1.md --by vendor_label --dry

# v2 통합 파일에 갱신
node scripts/star-classify.mjs --file bank/mechanism-데이터-쎈-CM1-v2-통합.md --by vendor_label --dry
node scripts/star-classify.mjs --file bank/mechanism-데이터-마플시너지-CM1-v2-통합.md --by vendor_label --dry

# 시험지 정점 슬롯 pool 조회 (problem-author v2.1)
node scripts/dokdu-query.mjs --unit CM1 --tier premium --vendor "1등급MASTER,플래티넘,블랙라벨-STEP3"
node scripts/dokdu-query.mjs --unit CM2 --tier premium --vendor "블랙라벨-STEP3,EBS-고난도-band4,수학의신-STEP3"
```

---

## Ⅵ. 주요 정정 신호 (v1.11 → v1.12)

### 신뢰도 상향 (5건)

1. **일품 CM1·CM2 통합**: v1.0 B급 (초기) → **A+급** (표본 확장 후 · 소단원 무관 안정)
2. **완자 CM1**: 첫 등재 → **B+급** ([실전] 라벨 CM1 신뢰도 0.85 · CM2 대비 승격)
3. **바이블 유형ON CM1**: 첫 등재 → **A-급** (Part C 이차부등식 안정)
4. **수학의바이블 CM1·CM2**: v1 미등재 → **A-급** (6계층 명료)
5. **마플시너지 CM1**: v1.11 A급 74% → **v2 재정합 90%** (CM1 강점 재확인)

### 신뢰도 하향 (2건)

1. **블랙라벨 CM1 STEP 1**: B+급 → **B-급 신호** (v2 재정합 40%)
2. **개념원리 CM2 C급 4파일**: v1 star_3 단일 → **star_1~4 분산 확인** (관대 편향 계승)

### 신규 소단원 예외 (5건)

1. **마플 TOUGH CM2-FN·CM2-ST premium 도달** (예외 조항 신설)
2. **마플 STEP 3 CM1-EQ 여러방정식 premium_hint 0.60** (신설)
3. **마플 STEP 3 CM1-CB 조합 premium_hint 0.30** (신설 · O-NEW-33)
4. **쎈 SPECIAL TIP CM1-PL 인수분해 premium 밀도 60%** (신설)
5. **쎈 사고력 기술 CM1-EQ 부등식 star_5 안정** (신설 · O-NEW-47·48)

### 회귀 함수 재정합 확인 (8건)

1. **쎈 CM1 v2 96.7% 정합** (v1.11 A급 72% 대비 상향)
2. **마플 CM1 v2 90% 정합** (v1.11 A급 74% 대비 상향)
3. **마플 CM2 v2 74% 유지** (v1.11 대비 편차 없음)
4. **블랙라벨 CM1 STEP 2·3 100% 정합** (CM2 A·A+ 계승 성공)
5. **고쟁이 CM1·CM2 v2 85% 유지** (v1.11 A- 유지)
6. **개념원리 CM1·CM2 v2 45~50% 유지** (v1.2 편향 확정)
7. **RPM CM1·CM2 v2 60~65% 유지** (v1.11 B급 유지)
8. **학평 원본 pool 배점 회귀 A/A+급 확립** (2026-6월 97%·EBS 학평 90%·마플 모고 100%)

---

## Ⅶ. 다음 세션 권장 사항

### 즉시 착수 (세션 63 진입 조건)

1. **problem-author v2.1 실제 시험지 회차 창작**: v1.12 pool 우선순위로 CM1·CM2 각 1회차 시험지 창작 (마스터 시나리오 지정 필요)
2. **star-classify.mjs v1.8 코드 편입**: 세션 62 신규 벤더 21종 회귀 함수를 코드로 반영
3. **v2 통합 파일 tier 자동 정정 확산**: 세션 62 신규 벤더 30+ 파일에 `--write` 실행 (마스터 승인 필요)

### 중기 (세션 64~65)

1. **premium 신규 원형 O-NEW-33~50 카탈로그 정착 검증**: 실제 시험지 창작 시 자기복제 감쇠 실전 점검
2. **feedback loop 완성**: problem-author 창작 → 검수 결과 → vendor-label-calibration 실측 재편입 (Session 66~ 목표)
3. **가장 유망한 미검증 벤더**: 세션 62 미참여 벤더 (예: 100인의 예비 고1·미리 보는 명문고·수학전문가) 추가 정독

### 장기

1. **자산 규모 확장** (~86% → 목표 95%): v2.1 소단원별 전수 정독 (표본이 아닌 전 문항)
2. **feedback loop 자동화** (~15% → 목표 80%): anchor-neighbors 정밀도 · problem-author 실측 정합률 순환
3. **벤더 라벨 → premium 자동 pick 최적화**: v1.12 pool 우선순위 코드화 · problem-author v3.0 자동 pick 100%

---

## 변경 이력

- 2026-07-21 v1.0~v1.11 — bank/vendor-label-calibration.md 기존 매트릭스 유지 (v1.10 578문 + v1.11 27문 = 605문 표본).
- 2026-07-21 **v1.12** — 세션 62 flywheel 완료. **30+ 신규 벤더 정독 편입** (CM2 11 + CM1 20) · **v1 → v2 재정독 12건 통합** · 총 실측 표본 **~2,068문** (v1.11 605문 · +1,463문 · 신규 최대 편입). 벤더 회귀 함수 매트릭스 **23종 벤더** · 신뢰도 등급 **6단계 세분화** (A+/A/A-/B+/B/C). 신규 A+급 4벤더 (1등급MASTER·플래티넘·EBS 고난도·2026-6월 학평·수학의신·일품). CM1·CM2 시험지 정점 슬롯 pool 우선순위 최종 확정. 소단원별 예외 매트릭스 5건 신규. 신뢰도 상향 5건 · 하향 2건 · 회귀 재정합 확인 8건. premium 신규 원형 O-NEW-33~50 (18종 신규) 카탈로그 편입 완료.
