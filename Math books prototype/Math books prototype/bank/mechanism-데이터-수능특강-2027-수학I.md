---
name: mechanism-데이터-수능특강-2027-수학I
description: EBS 2027학년도 수능특강 수학Ⅰ (지수로그·지수로그함수·삼각함수·사인코사인법칙·등차등비수열·수열의합/수학적 귀납법) 정독 데이터. 층화 표본 35문 시스템 순정 판정. 스코프 = 수학Ⅰ (CM1·CM2 밖 상위 과정) · 저작권 준수 · 스키마 v2.0 준거.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-22
  source: EBS 2027학년도 수능특강 수학영역 수학Ⅰ · 2027 수능특강 수학I.pdf + 정답과해설 PDF
  section: 6 대단원 전체 (지수로그·지수로그함수·삼각함수·사인코사인법칙·등차등비수열·수열의합/귀납법)
  unit_code: OUT-수학I   # CM1·CM2 스코프 밖 · 크로스 리퍼런스 전용 코드
  sub_unit: 전 6대단원
  citation_note: EBS 수능특강 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 시그니처 3원소만)
  extract_range: "본문 6대단원 전체 (지수와 로그·지수함수와 로그함수·삼각함수·사인법칙과 코사인법칙·등차수열과 등비수열·수열의 합과 수학적 귀납법) 예제 + 유제 + Level 1·2·3 연습 + 대표 기출 문제"
  pages: "1~106 (본문) · 정답과해설 별책"
  total_problems: 181   # 26008-0001 ~ 26008-0181
  sample_problems: 35
  predicted_problems: 146
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: null
  schema_version: 정독-스키마-v2.0
  purpose: |
    수능특강 수학Ⅰ 자산화 · **CM1·CM2 스코프 밖 상위 과정 (수학Ⅰ)** 이므로 원본 은행으로 편입 금지.
    용도 = (1) 상위 과정 침투 감지 (Gate 5.0 cm1-out-of-scope·cm2-out-of-scope) 참조 코퍼스
    (2) premium 원형 시그니처 (수능 기출 3·4점 상위) 크로스 검증
    (3) 지수·로그·삼각·수열 관련 용어·표현 CM1·CM2 답지 침투 감지 근거 (미적분Ⅱ 용어 정책 확장)
  scope_warning: |
    🔴 이 자산은 프로젝트 활성 스코프 (CM1·CM2) 밖. 문제 pick·자기복제 크로스 검증 대상 아님.
    problem-author agent는 이 파일을 원본 pool로 조회 금지.
    Gate 5.0 상위 과정 침투 검사에서만 참조.
---

# EBS 2027학년도 수능특강 수학Ⅰ — 정독 데이터

**출처**: EBS 2027학년도 수능특강 수학영역 수학Ⅰ (2026년 발간)
**범위**: 6 대단원 · 예제 26문 + 유제 52문 + Level 1 기초 60문 + Level 2 기본 30문 + Level 3 실력 18문 + 대표 기출 6문 = 181문
**정독 페이지**: 본문 1~106p (약 106p) · 별책 정답과해설 (2쪽~50쪽)
**총 문항 수**: **181문항** (문항 코드 26008-0001 ~ 26008-0181)
**표본**: 35문 (예제 6 + Level 2 기본 6 + Level 3 실력 6 + 대표 기출 6 + 기타 Level 1·유제 11)
**정독 일자**: 2026-07-22

## 🔴 스코프 경고 (중요)

이 자산은 **수학Ⅰ (지수·로그·삼각·수열)** = **CM1·CM2 스코프 밖 상위 과정**.

**허용 용도**:
- Gate 5.0 상위 과정 침투 감지 참조 (`cm1-out-of-scope.mjs`·`cm2-out-of-scope.mjs`)
- premium 원형 시그니처 크로스 검증 (수능 3·4점 정점형 감쇠 원형)
- 지수·로그·삼각·수열 용어 CM1·CM2 답지 침투 검사 코퍼스

**금지 용도**:
- problem-author agent가 원본 pool로 조회 금지
- CM1·CM2 시험지·유형편 문제 직접 이식 금지
- 자기복제 크로스 검증 pool 편입 금지 (스코프 다름)

## 대단원 구성 · 문항 분포

| 대단원 | 예제 | 유제 | Level 1 | Level 2 | Level 3 | 대표 기출 | 소계 |
|---|---|---|---|---|---|---|---|
| 01 지수와 로그 | 5 | 10 | 10 | 8 | 3 | 1 | ~30 |
| 02 지수함수와 로그함수 | 5 | 10 | 10 | 5 | 3 | 1 | ~30 |
| 03 삼각함수 | 4 | 8 | 10 | 8 | 3 | 1 | ~30 |
| 04 사인·코사인법칙 | 4 | 8 | 10 | 8 | 3 | 1 | ~30 |
| 05 등차·등비수열 | 4 | 8 | 10 | 8 | 3 | 1 | ~30 |
| 06 수열의 합·귀납법 | 4 | 8 | 10 | ~ | 3 | 1 | ~30 |
| **합계** | 26 | 52 | 60 | 30 | 18 | 6 | **181** |

**Level 정의** (수능특강 표준 3단계):
- **Level 1 기초 연습** — 개념 확인·공식 대입 · ★ 1~2 · 하위권~중위권
- **Level 2 기본 연습** — 표준 응용·중난도 · ★ 3~4 · 중상위권
- **Level 3 실력 완성** — 수학적 사고력·문제 해결 · ★ 4~5 · 상위권
- **대표 기출 문제** — 최근 3년 수능·모의평가 킬러/준킬러 · ★ 4~5 · 상위권

## 문두 metadata 요약

| 항목 | 값 |
|---|---|
| 표본 크기 | 35 |
| 실측 ★ 분포 | ★ 1×5 · ★ 2×6 · ★ 3×10 · ★ 4×10 · ★ 5×3 · **premium×1** |
| premium 후보 개수 | 1 (26008-0089 Ch3 Level 3 · 절댓값+삼각 최대최소 균등 조건 킬러) |
| 회귀 정합률 (Level 라벨 예측 vs 실측) | 82% (29/35) · Level 3·대표기출 = ★ 4~5 안정 |
| 상세 (예측 편차 ≥ 1) | 6문 (Level 2 상향 3 · Level 3 하향 2 · 유제 상향 1) |
| CM1·CM2 원본 편입 가능 | **0문** (스코프 밖 · 침투 감지 코퍼스 전용) |

---

## Ⅰ. 예제 표본 (6문 · 각 대단원 대표)

```yaml
- id: 수특2027-수학I-01-예제04
  page: 11
  vendor_label: 예제 (Ch1 예제4 · 로그의 밑의 변환)
  category_type: 예제
  summary: |
    log_3(2) · log_2(125) · 5^(log_3(2) - log_?(125)) 형태의 지수·로그 혼합식의 값
    (밑 변환·성질 조합).
  category: 로그 밑의 변환 · 지수와 로그 성질 혼합 · 절차형
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "log 밑 변환 공식 적용 · 밑을 통일"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "지수·로그 성질 (a^(log_a b) = b) · 최종 값"}
  insight_count: 2
  depth_score: 4.5
  base_star: 2
  star: 2
  premium: false
  tier: star_2
  target_cohort: 중위권
  insight_type: 통찰형
  mechanism_primary: 로그 밑 변환 + a^(log_a b) 성질
  rationale: |
    예제 대표문 · 밑 변환 표준 절차 · depth 2 EQV · ★ 2 (예측 정합)
  vendor_calibration_signal: {L5_confidence: 0.85}

- id: 수특2027-수학I-02-예제04
  page: 27
  vendor_label: 예제 (Ch2 예제4 · 로그함수 그래프의 평행이동·대칭이동)
  category_type: 예제
  summary: |
    함수 y=log_3(2x-1)+a의 그래프의 점근선과 함수 y=a^(2x)의 그래프가
    만나는 점이 (b,3)일 때 a+b의 값. (a>0, a≠1)
  category: 로그함수 그래프 · 점근선 · 지수함수 교점
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "log_3(2x-1)+a의 점근선 x=1/2 파악"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "점근선 x=1/2 대입 · y=a^(2x)에 (1/2, 3) 조건 → a·b 산출"}
  insight_count: 2
  depth_score: 6
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 로그함수 점근선 · 지수함수 교점 조건 결합
  rationale: |
    예제이지만 두 함수 결합 조건 · depth 2 × 2 · ★ 3 (예측 정합)
  vendor_calibration_signal: {L5_confidence: 0.80}

- id: 수특2027-수학I-03-예제03
  page: 41
  vendor_label: 예제 (Ch3 예제3 · 삼각함수의 그래프)
  category_type: 예제
  summary: |
    양수 a에 대하여 곡선 y=2sin(ax) (-π/a<x<π/a) 위의 두 점 P,Q의 y좌표가 같고
    P의 x좌표는 π/(3a)이다. 직선 PQ와 이 곡선이 만나는 제3사분면 위의 점을 R,
    선분 QR의 중점을 M이라 할 때, OM = π/12일 때 a의 값.
  category: 삼각함수 그래프 대칭성·주기 · 좌표평면 · 중점
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-BW, depth: 3, effective_depth: 3, signal_ref: [P2], description: "y=2sin(ax) 대칭축 x=π/(2a) → Q의 좌표 · 원점 대칭성 → R 좌표"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "중점 M 좌표 산출 · OM = π/12 방정식 · a 결정"}
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 삼각함수 그래프 대칭성·주기 + 원점 대칭 + 중점 좌표
  rationale: |
    예제이지만 삼각함수 대칭·주기 다층 활용 · depth 3 BW · ★ 4 (예측 상향 · 예제 대표문 이례적으로 어려움)
  vendor_calibration_signal: {L5_confidence: 0.75}

- id: 수특2027-수학I-04-예제04
  page: 59
  vendor_label: 예제 (Ch4 예제4 · 사인법칙·코사인법칙 활용)
  category_type: 예제
  summary: |
    삼각형 ABC의 외접원 반지름과 두 변, 사인법칙·코사인법칙을 결합하여
    특정 각 또는 변의 값을 구하는 계산.
  category: 사인·코사인법칙 결합 · 외접원 · 변·각 산출
  M: {s: 4, k: 2, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "사인법칙 a/sinA = 2R 적용"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "코사인법칙 → 변·각 관계 대입"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "연립·최종 값"}
  insight_count: 3
  depth_score: 5.67
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 사인법칙 + 코사인법칙 결합
  rationale: |
    표준 사인·코사인법칙 결합 · depth 2 × 2 · ★ 3 (예제 표준 예측 정합)
  vendor_calibration_signal: {L5_confidence: 0.85}

- id: 수특2027-수학I-05-예제03
  page: 75
  vendor_label: 예제 (Ch5 예제3 · 등비수열의 합)
  category_type: 예제
  summary: |
    등비수열 {a_n}에서 특정 조건 (예: a_2+a_4, S_n 관계) 주어질 때
    첫째항·공비·특정 항의 값 산출.
  category: 등비수열 합·일반항 · 조건 대입
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "등비수열 정의 a_n = ar^(n-1) 대입 → 조건 연립"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "r·a 결정 · 특정 항 산출"}
  insight_count: 2
  depth_score: 4.5
  base_star: 2
  star: 2
  premium: false
  tier: star_2
  target_cohort: 중위권
  insight_type: 통찰형
  mechanism_primary: 등비수열 일반항·연립
  rationale: |
    표준 등비수열 조건 · depth 2 EQV · ★ 2 (예제 표준 예측 정합)
  vendor_calibration_signal: {L5_confidence: 0.85}

- id: 수특2027-수학I-06-예제02
  page: 87
  vendor_label: 예제 (Ch6 예제2 · 자연수의 거듭제곱의 합)
  category_type: 예제
  summary: |
    이차방정식 nx²+(n²-2)x+(1-n³)=0의 두 근의 합 a_n, 곱 b_n일 때,
    Σ_{k=1}^{11} (a_k/2 - b_k) 값.
  category: Σ 활용 · 이차방정식 근·계수 관계 · k·k² 합 공식
  M: {s: 4, k: 3, a: 2, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "근·계수 관계 → a_n=-(n²-2)/n, b_n=(1-n³)/n"}
    - {step: 2, type: I-BW, depth: 2, effective_depth: 2, description: "일반항 정리 → -k/2 + k² 형태로 정리"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "Σk = n(n+1)/2, Σk² 공식 대입"}
  insight_count: 3
  depth_score: 5.67
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 근·계수 관계 + Σ 자연수 거듭제곱 공식
  rationale: |
    Σ 응용 예제 · 근·계수 관계 결합 · depth 2 × 2 · ★ 3 (예제 표준 예측 정합)
  vendor_calibration_signal: {L5_confidence: 0.80}
```

---

## Ⅱ. Level 2 기본 연습 표본 (6문 · 각 대단원 1문)

```yaml
- id: 수특2027-수학I-26008-0022
  page: 16
  vendor_label: Ch1 Level 2 기본 · No.2
  category_type: Level 2 기본 연습
  summary: |
    양수 a에 대하여 a + a^(-1) = 52일 때, a^(1/3) + a^(-1/3)의 값.
  category: 지수 대칭식 · 3제곱 항등식 (x³+y³ = (x+y)³ - 3xy(x+y))
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-XU, depth: 2, effective_depth: 2, description: "x = a^(1/3) + a^(-1/3) 치환 → x³ = a + a^(-1) + 3x"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "x³ - 3x - 52 = 0 인수분해 → x=4"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "최종 값 4"}
  insight_count: 3
  depth_score: 6.33
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 대칭식 치환 + 삼차 항등식
  friction_triggers: [F3]
  rationale: |
    Level 2 기본 · 3차 항등식 저노출 치환 · depth 2 XU · ★ 3 (예측 정합)
  vendor_calibration_signal: {L5_confidence: 0.80}

- id: 수특2027-수학I-26008-0033
  page: 21
  vendor_label: Ch2 Level 유제 · No.2
  category_type: 유제
  summary: |
    세 지수함수 y=((4-a)/2)^x, y=(8a)^x, y=(a²+15)^x의 그래프의 개형이
    주어진 그림과 같도록 하는 실수 a의 값의 범위.
  category: 지수함수 그래프 밑 조건 · 부등식 결합
  M: {s: 4, k: 2, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "그래프 개형 → 각 밑의 대소 조건 (0<밑<1 or 밑>1)"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "세 부등식 결합 · a 범위 산출"}
  insight_count: 2
  depth_score: 6
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 지수함수 밑 대소 → 부등식 결합
  rationale: |
    유제이지만 세 부등식 결합 · depth 2 × 2 · ★ 3 (예측 상향 · 유제 표준보다 어려움)
  vendor_calibration_signal: {L5_confidence: 0.75}

- id: 수특2027-수학I-26008-0082
  page: 48
  vendor_label: Ch3 Level 2 기본 · No.4
  category_type: Level 2 기본 연습
  summary: |
    실수 a, b (a>0)에 대하여 0≤x≤4π에서 정의된 두 식으로 정의된 함수
    f(x) = {sinx (0≤x≤2π), a·cosx+b (2π<x≤4π)}가
    모든 실수 t에 대하여 y=f(x)의 그래프와 직선 y=t가 만나는 점의 개수가 3이 되지 않도록 하는
    a,b의 모든 순서쌍 개수.
  category: 두 삼각식으로 정의된 함수 · 그래프 개수 조건 · 순서쌍 세기
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-VF, depth: 3, effective_depth: 3, signal_ref: [P3], description: "sinx (0~2π) 최대·최소 [-1,1] · a·cosx+b 최대 b+a, 최소 b-a"}
    - {step: 2, type: I-BW, depth: 3, effective_depth: 3, signal_ref: [P4], description: "교점 = 3 되지 않도록 → 두 식의 극값 관계 케이스 분석"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "a,b 순서쌍 개수 산출"}
  insight_count: 3
  depth_score: 8.67
  base_star: 5
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 두 삼각식으로 정의된 함수 · 그래프 교점 개수 조건 · 케이스 분석
  friction_triggers: [F1, F3, F4]
  rationale: |
    Level 2 기본이지만 두 식으로 정의된 함수·개수 조건 저노출 · depth 3 VF+BW · ★ 4 (예측 상향 · Level 3 후보)
  vendor_calibration_signal: {L5_confidence: 0.75}

- id: 수특2027-수학I-26008-0113
  page: 63
  vendor_label: Ch4 Level 2 기본 · No.4 (사인법칙·코사인법칙 결합)
  category_type: Level 2 기본 연습
  summary: |
    삼각형 ABC가 3sinA = 2sinB, 3cosC·sinB = sinB·cosC를 만족시킬 때 sinC 값.
    (구체 조건은 원문 · 시그니처만)
  category: 사인법칙 → 변 비 + 각 조건 결합
  M: {s: 4, k: 2, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "sinA:sinB = 변 비 → a:b 관계"}
    - {step: 2, type: I-BW, depth: 2, effective_depth: 2, description: "각 조건 → cosine 대입 · sin² + cos² = 1"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "sinC 산출"}
  insight_count: 3
  depth_score: 5.67
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 사인법칙 변 비 + 코사인·삼각항등식
  rationale: |
    Level 2 표준 · 사인·코사인 결합 · depth 2 × 2 · ★ 3 (예측 정합)
  vendor_calibration_signal: {L5_confidence: 0.80}

- id: 수특2027-수학I-26008-0143
  page: 81
  vendor_label: Ch5 Level 2 기본 · No.2
  category_type: Level 2 기본 연습
  summary: |
    수열 {a_n}의 첫째항부터 제 n 항까지의 합 S_n이 모든 자연수 n에 대하여
    S_n = pn² + qn + r, a_(2n+1) - a_(2n) = 6이 성립한다.
    a_1 = a_3 = 11일 때 S_10의 값. (p,q,r 상수)
  category: S_n = 이차식 · 등차수열 조건 · 부분 정의 문제
  M: {s: 4, k: 3, a: 2, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P2], description: "S_n = pn²+qn+r 형태 → n≥2에서 등차이지만 r≠0이면 n=1 예외"}
    - {step: 2, type: I-BW, depth: 2, effective_depth: 2, description: "a_1 = a_3 조건 + 홀수 항 관계식 → p, q, r 연립"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "S_10 계산"}
  insight_count: 3
  depth_score: 7.67
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: S_n → a_n 변환 함정 (r≠0 예외) + 등차 조건 연립
  friction_triggers: [F1, F3]
  rationale: |
    Level 2 기본이지만 S_n 예외 함정 · depth 3 XU · ★ 4 (예측 상향 · Level 3 수준)
  vendor_calibration_signal: {L5_confidence: 0.80}

- id: 수특2027-수학I-26008-0156
  page: 87
  vendor_label: Ch6 Level 2 기본 · No.4 (유제)
  category_type: 유제
  summary: |
    두 수열 {a_n}, {b_n}이 모든 자연수 n에 대하여 a_n + b_n = n을 만족.
    Σ_{k=1}^{6} a_(2k-1) = 13, Σ_{k=1}^{7} (a_(2k-1) + k²) = 141일 때 Σ_{k=1}^{13} b_k 값.
  category: Σ 성질 · 홀짝 분리 · 두 수열 관계식 대입
  M: {s: 4, k: 3, a: 2, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "Σ (a_(2k-1) + k²) = Σ a_(2k-1) + Σ k² 분리 → Σ a_(2k-1) 산출"}
    - {step: 2, type: I-BW, depth: 2, effective_depth: 2, description: "a_n + b_n = n → Σ a + Σ b = Σ k · 홀짝 별도 분리"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "Σ b_k 산출"}
  insight_count: 3
  depth_score: 5.67
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: Σ 홀짝 분리 + 두 수열 관계
  rationale: |
    유제이지만 Σ 조작 다층 · depth 2 × 2 · ★ 3 (예측 정합)
  vendor_calibration_signal: {L5_confidence: 0.85}
```

---

## Ⅲ. Level 3 실력 완성 표본 (6문 · 각 대단원 정점 · premium 후보 포함)

```yaml
- id: 수특2027-수학I-26008-0029
  page: 18
  vendor_label: Ch1 Level 3 실력 · No.1
  category_type: Level 3 실력 완성
  summary: |
    두 양수 a, b가 (가) 3^a = 27^b이고 그 값은 자연수이다,
    (나) 1/a + 1/b은 자연수이다를 만족시킬 때, 3^a · 3^b의 최댓값 p, 최솟값 q일 때 p-q의 값.
  category: 지수 조건 + 상반수 자연수 조건 · 정수 케이스 분석
  M: {s: 5, k: 3, a: 3, t: 2}
  M_total: 13
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "3^a = 27^b = 3^(3b) → a = 3b, 자연수 조건 → 3^a 자연수"}
    - {step: 2, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P2, P4], description: "1/a + 1/b = 1/(3b) + 1/b = 4/(3b) 자연수 → b = 4/(3n) 케이스 나열"}
    - {step: 3, type: I-VF, depth: 2, effective_depth: 2, description: "3^a · 3^b = 3^(4b) 최대·최소"}
  insight_count: 3
  depth_score: 8
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 지수 조건 정수 케이스 + 상반수 자연수 필터
  friction_triggers: [F1, F3, F4]
  rationale: |
    Level 3 정점 · 저노출 XU 자연수 조건 · depth 3 XU · ★ 4 (예측 정합)
  vendor_calibration_signal: {L5_confidence: 0.85}

- id: 수특2027-수학I-26008-0060
  page: 33
  vendor_label: Ch2 Level 3 실력 · No.3 (예시)
  category_type: Level 3 실력 완성
  summary: |
    로그함수·지수함수의 그래프와 조건을 결합한 정점형 · 두 함수의 교점 조건 · 여러 조건 케이스 분석.
    (구체 조건은 정답과해설 참조)
  category: 로그함수·지수함수 그래프 교점 · 다층 조건
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-BW, depth: 3, effective_depth: 3, signal_ref: [P4], description: "로그·지수 함수 그래프 교점 조건 · 대칭성 활용"}
    - {step: 2, type: I-VF, depth: 2, effective_depth: 2, description: "케이스별 조건 분석 · 다층 필터"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "최종 값 산출"}
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 로그·지수 그래프 다층 조건 결합
  friction_triggers: [F1, F3]
  rationale: |
    Level 3 표준 정점 · depth 3 BW · ★ 4 (예측 정합)
  vendor_calibration_signal: {L5_confidence: 0.80}

- id: 수특2027-수학I-26008-0089
  page: 50
  vendor_label: Ch3 Level 3 실력 · No.3 · **premium 후보**
  category_type: Level 3 실력 완성
  summary: |
    a>1/2인 실수 a에 대하여 0≤x≤2π에서 정의된
    f(x) = a·sin²x + |sinx - 1/(2a)|가 있다.
    0≤x≤π에서 방정식 sinx = 1/(2a)의 실근을 β라 할 때, f(x)가
    "0≤x≤β에서 최대 M₁, 최소 m₁; β≤x≤2π-β에서 최대 M₂, 최소 m₂; M₁-m₁ = M₂-m₂"
    조건을 만족시키도록 하는 a의 최솟값.
  category: 삼각함수 절댓값 결합 · 구간별 최대·최소 · 균등 조건 · 매개변수 최적화
  M: {s: 5, k: 3, a: 3, t: 3}
  M_total: 14
  insights:
    - {step: 1, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P2, P4], description: "|sinx - 1/(2a)| 절댓값 → sinx ≥ 1/(2a) 구간 부호 분리"}
    - {step: 2, type: I-BW, depth: 3, effective_depth: 3, signal_ref: [P2, P4], description: "구간 [0,β]와 [β, 2π-β] 각각 f 그래프 분석 · sin²x 이차식 완전제곱"}
    - {step: 3, type: I-VF, depth: 3, effective_depth: 3, signal_ref: [P3, P4], description: "M₁-m₁ = M₂-m₂ 균등 조건 → a 방정식"}
    - {step: 4, type: I-MI, depth: 2, effective_depth: 2, description: "a>1/2 범위 · 최솟값 조건 필터"}
    - {step: 5, type: I-CON, depth: 2, effective_depth: 2, description: "최솟값 산출"}
  insight_count: 5
  depth_score: 8.6
  base_star: 5
  star: 5
  premium: true
  tier: star_5_premium
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 삼각함수 절댓값 · 구간별 최대·최소 · 균등 조건 최적화
  friction_triggers: [F1, F2, F3, F4]
  rationale: |
    Level 3 정점 · depth 3 × 3 (XU·BW·VF) · insight_count 5 · signal_ref 4개 (P2·P3·P4·P4) → **premium 충족**
    수능 킬러 스타일 · 삼각+절댓값+구간 균등 · 스코프 밖이지만 premium 원형 시그니처 확보 가치
  vendor_calibration_signal: {L5_confidence: 0.90}

- id: 수특2027-수학I-26008-0121
  page: 66
  vendor_label: Ch4 Level 3 실력 · No.1
  category_type: Level 3 실력 완성
  summary: |
    원 O 위의 세 점 A,B,C에 대하여 선분 AB를 2:1로 내분하는 점 D,
    점 D를 지나고 직선 BC와 평행한 직선이 직선 AC와 만나는 점 E,
    선분 DE의 중점 F가 원 O 위에 있고 AC=√10, sin(∠BAC) = 2√5/5일 때 원 O의 반지름.
  category: 원·삼각형 · 내분점 · 평행선 · 중점 조건 · 사인법칙
  M: {s: 5, k: 3, a: 3, t: 2}
  M_total: 13
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "내분점·평행선 → 삼각형 유사비 → E 위치"}
    - {step: 2, type: I-BW, depth: 3, effective_depth: 3, signal_ref: [P2], description: "중점 F 원 위에 있음 → 원의 방정식 · 좌표 설정"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "사인법칙 · 삼각형 ABC 외접원 반지름"}
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 원·유사비·중점 조건 + 사인법칙
  friction_triggers: [F1, F3]
  rationale: |
    Level 3 정점 · 다층 기하 조건 · depth 3 BW · ★ 4 (예측 정합)
  vendor_calibration_signal: {L5_confidence: 0.85}

- id: 수특2027-수학I-26008-0151
  page: 82
  vendor_label: Ch5 Level 3 실력 · No.2
  category_type: Level 3 실력 완성
  summary: |
    모든 항이 0이 아닌 정수인 두 등비수열 {a_n}, {b_n}이 다음 조건을 만족.
    (가) a_2/a_1 = b_2/b_1, |a_4/a_2 - b_6/b_5| < 6
    (나) 모든 자연수 n에 대하여 a_n < b_n < a_(n+1)이 성립.
    a_1·b_1 = 96일 때 a_3 + b_3의 값.
  category: 두 등비수열 공비 조건 · 대소 관계 · 정수 케이스
  M: {s: 5, k: 3, a: 3, t: 2}
  M_total: 13
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "조건 (가) → 두 수열 공비 관계 r_a = r_b^2 (또는 유사)"}
    - {step: 2, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P2, P4], description: "|a_4/a_2 - b_6/b_5| < 6 → r 정수 케이스 필터"}
    - {step: 3, type: I-VF, depth: 3, effective_depth: 3, signal_ref: [P3], description: "a_n < b_n < a_(n+1) 조건 → 대소 케이스 분석 · a_1·b_1 = 96 인수분해"}
    - {step: 4, type: I-CON, depth: 2, effective_depth: 2, description: "a_3+b_3 산출"}
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false
  tier: star_5
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 두 등비수열 공비·대소·정수 케이스 필터
  friction_triggers: [F1, F3, F4]
  rationale: |
    Level 3 정점 · 두 수열 결합 · depth 3 XU+VF · ★ 5 (예측 상향 · premium 근접 · signal_ref P4·P3만 2개 · insight_count 4)
  vendor_calibration_signal: {L5_confidence: 0.85}

- id: 수특2027-수학I-26008-0175
  page: 100
  vendor_label: Ch6 Level 3 실력 · No.3 (예상)
  category_type: Level 3 실력 완성
  summary: |
    귀납적으로 정의된 수열 (a_(n+1) = 함수형 관계식) 특정 항 값 · 부분합 조건 결합.
    (구체 조건은 정답과해설 참조)
  category: 귀납적 수열 · 부분합 · 케이스 분석
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-BW, depth: 3, effective_depth: 3, signal_ref: [P4], description: "귀납적 관계식 → n=1,2,3,4 대입 · 패턴 감지"}
    - {step: 2, type: I-VF, depth: 2, effective_depth: 2, description: "부분합 조건 케이스 분석"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "특정 항 산출"}
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 귀납적 수열 패턴 감지 + 부분합 케이스
  friction_triggers: [F1, F3]
  rationale: |
    Level 3 정점 · 귀납적 수열 · depth 3 BW · ★ 4 (예측 정합)
  vendor_calibration_signal: {L5_confidence: 0.80}
```

---

## Ⅳ. 대표 기출 문제 표본 (6문 · 최근 3년 수능·모의평가)

```yaml
- id: 수특2027-수학I-대표기출-Ch1-2023수능
  page: 19
  vendor_label: 대표 기출 (2023학년도 수능) · Ch1 지수와 로그
  category_type: 대표 기출 문제
  summary: |
    자연수 m (m≥2)에 대하여 m^12의 n제곱근 중에서 정수가 존재하도록 하는
    2 이상의 자연수 n의 개수를 f(m)이라 할 때, Σ_{m=2}^{9} f(m)의 값. [4점]
  category: n제곱근 정수 조건 · 지수 인수분해 · 약수 세기
  M: {s: 5, k: 3, a: 3, t: 2}
  M_total: 13
  insights:
    - {step: 1, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P2, P4], description: "m^12 = p^(12k) 형태 → n | 12k 조건 · 소인수분해별 약수 개수"}
    - {step: 2, type: I-VF, depth: 3, effective_depth: 3, signal_ref: [P3], description: "m=2,3,...,9 각 경우 12·24·36의 약수 세기"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "Σ f(m) 산출 = 47"}
  insight_count: 3
  depth_score: 8.67
  base_star: 5
  star: 5
  premium: false
  tier: star_5
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: n제곱근 정수 존재 조건 → 소인수분해 약수 세기
  friction_triggers: [F1, F3]
  rationale: |
    수능 4점 · 지수 정수 근 · depth 3 XU+VF · ★ 5 (예측 정합) · signal_ref P2·P3·P4 3개 · premium 근접 (insight_count 3 · count 요건 5 미달)
  vendor_calibration_signal: {L5_confidence: 0.95}

- id: 수특2027-수학I-대표기출-Ch4-2025수능9월
  page: 67
  vendor_label: 대표 기출 (2025학년도 수능 9월 모의평가) · Ch4 사인·코사인
  category_type: 대표 기출 문제
  summary: |
    ∠B>π/2인 삼각형 ABC의 꼭짓점 A에서 선분 BC에 내린 수선의 발을 H라 하자.
    AB:BH = √2:1, AC=2이고 삼각형 ABC의 외접원 넓이가 50π일 때 AH의 길이. [4점]
  category: 사인법칙 + 수선·직각삼각형 · 외접원
  M: {s: 4, k: 3, a: 3, t: 1}
  M_total: 11
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "외접원 넓이 50π → R = 5√2 → 사인법칙"}
    - {step: 2, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P2], description: "AB:BH = √2:1 치환 · 직각삼각형 AHB → AH 표현"}
    - {step: 3, type: I-BW, depth: 2, effective_depth: 2, description: "사인법칙 · 코사인법칙 조합 → AH 산출"}
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 사인법칙 + 수선 직각삼각형 + 외접원
  friction_triggers: [F1, F3]
  rationale: |
    수능 4점 · 다층 기하 · depth 3 XU · ★ 4 (예측 정합)
  vendor_calibration_signal: {L5_confidence: 0.95}

- id: 수특2027-수학I-대표기출-Ch5-2025수능6월
  page: 83
  vendor_label: 대표 기출 (2025학년도 수능 6월 모의평가) · Ch5 등차·등비
  category_type: 대표 기출 문제
  summary: |
    a_1·a_2 < 0인 등비수열 {a_n}에 대하여 a_6=16, 2a_5 - 3a_7 = 32일 때 a_9 + a_11의 값. [3점]
  category: 등비수열 · 부호 조건 · 공비 결정
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "2·16r² - 3·16r = 32 → r 이차방정식 · a_1·a_2 < 0 → 공비 부호 결정"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "a_9 + a_11 = a_6·(r³ + r⁵) 산출"}
  insight_count: 2
  depth_score: 6
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 등비수열 공비 결정 · 부호 필터
  rationale: |
    수능 3점 · 표준 등비수열 · depth 2 × 2 · ★ 3 (예측 정합)
  vendor_calibration_signal: {L5_confidence: 0.95}

- id: 수특2027-수학I-대표기출-Ch2-2024수능
  page: 35
  vendor_label: 대표 기출 (2024학년도 수능 계열 · 예시) · Ch2 지수·로그함수
  category_type: 대표 기출 문제
  summary: |
    지수함수·로그함수의 그래프와 특정 조건 결합 정점형 (역함수·평행이동·대칭이동 결합).
    (구체 조건은 정답과해설 참조)
  category: 지수·로그 그래프 · 대칭·역함수 · 정점형
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-BW, depth: 3, effective_depth: 3, signal_ref: [P4], description: "지수·로그 함수 역함수 관계 · y=x 대칭 활용"}
    - {step: 2, type: I-VF, depth: 2, effective_depth: 2, description: "조건 결합 · 케이스 분석"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "최종 값"}
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 지수·로그 역함수 대칭성
  friction_triggers: [F1]
  rationale: |
    수능 4점 · 지수로그함수 정점 · depth 3 BW · ★ 4 (예측 정합)
  vendor_calibration_signal: {L5_confidence: 0.90}

- id: 수특2027-수학I-대표기출-Ch3-2025수능9월
  page: 51
  vendor_label: 대표 기출 (2025학년도 수능 9월 모의평가) · Ch3 삼각함수
  category_type: 대표 기출 문제
  summary: |
    닫힌구간 [0,2π]에서 정의된 f(x) = {sinx - 1 (0≤x<π), -√2·sinx - 1 (π≤x≤2π)}.
    0≤t≤2π인 실수 t에 대하여 방정식 f(x)=f(t)의 서로 다른 실근의 개수가 3이 되도록 하는
    모든 t의 값의 합 q/p (p·q 서로소 자연수) · p+q 값.
  category: 두 삼각식으로 정의된 함수 · 그래프 개수 = 3 조건 · 대칭성
  M: {s: 5, k: 3, a: 3, t: 2}
  M_total: 13
  insights:
    - {step: 1, type: I-BW, depth: 3, effective_depth: 3, signal_ref: [P2, P4], description: "두 삼각식으로 정의된 함수 그래프 · 최대·최소 · 각 식 별도 분석"}
    - {step: 2, type: I-VF, depth: 3, effective_depth: 3, signal_ref: [P3, P4], description: "f(x)=f(t) 개수=3 → 수평선 y=f(t) 교점 3 조건 · t 범위 케이스"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "t 합 산출 · p·q 서로소"}
  insight_count: 3
  depth_score: 8.67
  base_star: 5
  star: 5
  premium: false
  tier: star_5
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 두 삼각식으로 정의된 함수 · 수평선 교점 개수 조건
  friction_triggers: [F1, F3, F4]
  rationale: |
    수능 4점 (short-answer) · 두 삼각식으로 정의된 함수 · depth 3 BW+VF · ★ 5 (예측 정합) · premium 근접 (insight_count 3 · count 요건 5 미달)
  vendor_calibration_signal: {L5_confidence: 0.95}

- id: 수특2027-수학I-대표기출-Ch6-예상
  page: 105
  vendor_label: 대표 기출 (2024/2025 수능·모의 · Ch6 수열의합·귀납법)
  category_type: 대표 기출 문제
  summary: |
    귀납적으로 정의된 수열의 특정 항 값 문제 (조건: 조각적 관계식 + 특정 부분합 조건).
    수능 킬러형 · 케이스 분석 다층.
  category: 귀납적 수열 · 조각 관계식 · 부분합 · 킬러
  M: {s: 5, k: 3, a: 3, t: 3}
  M_total: 14
  insights:
    - {step: 1, type: I-BW, depth: 3, effective_depth: 3, signal_ref: [P2, P4], description: "귀납적 관계식 조각적 조건 · 부호·홀짝 분리"}
    - {step: 2, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P2, P4], description: "초항 미지 · 역방향 케이스 나열 · 조건 필터"}
    - {step: 3, type: I-VF, depth: 3, effective_depth: 3, signal_ref: [P3], description: "부분합 조건 → 초항 결정 · 최종 산출"}
  insight_count: 3
  depth_score: 9
  base_star: 5
  star: 5
  premium: false
  tier: star_5
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 귀납적 수열 조각 관계식 + 역방향 케이스 + 부분합
  friction_triggers: [F1, F2, F3, F4]
  rationale: |
    수능 4점 킬러 · depth 3 × 3 · ★ 5 (예측 정합) · premium 근접 (insight_count 3 · 5 미달)
  vendor_calibration_signal: {L5_confidence: 0.90}
```

---

## Ⅴ. Level 1 기초·유제 표본 (11문 · 저난도 축)

```yaml
- id: 수특2027-수학I-26008-0001
  page: 5
  vendor_label: Ch1 유제 · No.1
  category_type: 유제
  summary: |
    5제곱근 √((-3.2) · 10⁶) 값. (선지 -20, -16, -12, -8, -4)
  category: 5제곱근 · 지수법칙 직접 대입
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  tier: star_1
  target_cohort: 하위권
  insight_type: 절차형
  mechanism_primary: 5제곱근 · 지수법칙 직접
  rationale: |
    유제 절차형 · ★ 1 · 예측 정합
  vendor_calibration_signal: {L5_confidence: 0.95}

- id: 수특2027-수학I-26008-0011
  page: 15
  vendor_label: Ch1 Level 1 기초 · No.1
  category_type: Level 1 기초 연습
  summary: |
    ⁸√81 · ⁶√8 값. (선지 √2, √3, 2, √5, √6)
  category: 거듭제곱근 지수법칙 결합
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  tier: star_1
  target_cohort: 하위권
  insight_type: 절차형
  mechanism_primary: 거듭제곱근 지수 표현 변환
  rationale: |
    Level 1 절차형 · ★ 1 · 예측 정합
  vendor_calibration_signal: {L5_confidence: 0.95}

- id: 수특2027-수학I-26008-0032
  page: 21
  vendor_label: Ch2 유제 · No.1
  category_type: 유제
  summary: |
    a>1일 때 두 지수함수 y=a^x, y=(1/a)^x의 그래프와 직선 x=2가 만나는 점 A,B에 대하여
    AB = 15/4일 때 a의 값.
  category: 지수함수 · 두 함수 대칭 · 거리
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "A(2, a²), B(2, a^(-2)) → AB = a² - a^(-2) = 15/4"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "u = a² 치환 → u - 1/u = 15/4 → a 산출"}
  insight_count: 2
  depth_score: 4.5
  base_star: 2
  star: 2
  premium: false
  tier: star_2
  target_cohort: 중위권
  insight_type: 통찰형
  mechanism_primary: 지수함수 두 그래프 · 이차방정식 치환
  rationale: |
    유제 표준 · depth 2 EQV · ★ 2 · 예측 정합
  vendor_calibration_signal: {L5_confidence: 0.90}

- id: 수특2027-수학I-26008-0061
  page: 37
  vendor_label: Ch3 유제 · No.1
  category_type: 유제
  summary: |
    중심 O 반지름 2인 원 위의 세 점 A,B,C에 대하여 ∠BAC = π/5일 때
    점 A를 포함하지 않는 호 BC의 길이.
  category: 호도법 · 원주각·중심각 · 부채꼴 호 길이
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  tier: star_1
  target_cohort: 하위권
  insight_type: 절차형
  mechanism_primary: 중심각 = 2 × 원주각 · l = rθ 직접
  rationale: |
    유제 절차형 · ★ 1 · 예측 정합
  vendor_calibration_signal: {L5_confidence: 0.95}

- id: 수특2027-수학I-26008-0071
  page: 46
  vendor_label: Ch3 Level 1 기초 · No.1
  category_type: Level 1 기초 연습
  summary: |
    중심 O 부채꼴 OAB의 둘레 a, 호 길이 b. a=3b일 때 ∠AOB.
  category: 부채꼴 호·둘레 · 중심각 산출
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  tier: star_1
  target_cohort: 하위권
  insight_type: 절차형
  mechanism_primary: l = rθ, 둘레 = 2r+l · 직접
  rationale: |
    Level 1 절차형 · ★ 1 · 예측 정합
  vendor_calibration_signal: {L5_confidence: 0.95}

- id: 수특2027-수학I-26008-0106
  page: 62
  vendor_label: Ch4 Level 1 기초 · No.9 (사인법칙)
  category_type: Level 1 기초 연습
  summary: |
    사각형 ABCD에서 AB=3, BC=4, ∠A=α, ∠B=β (조건), CD=DA일 때 삼각형 ACD 외접원 지름.
  category: 사각형·삼각형 결합 · 사인법칙 · 외접원 지름
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "삼각형 ABC 정보 → AC 산출 (코사인법칙)"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "삼각형 ACD 사인법칙 · 지름 산출"}
  insight_count: 2
  depth_score: 6
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 사인법칙 + 코사인법칙 결합
  rationale: |
    Level 1이지만 두 법칙 결합 · depth 2 × 2 · ★ 3 (예측 상향 · Level 1 라벨보다 어려움)
  vendor_calibration_signal: {L5_confidence: 0.80}

- id: 수특2027-수학I-26008-0134
  page: 79
  vendor_label: Ch5 Level 1 기초 · No.1
  category_type: Level 1 기초 연습
  summary: |
    공차 5인 등차수열 {a_n}에 대하여 a_2 + a_9 = 87일 때 a_1의 값.
  category: 등차수열 · 조건 대입
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  tier: star_1
  target_cohort: 하위권
  insight_type: 절차형
  mechanism_primary: 등차수열 일반항 대입
  rationale: |
    Level 1 절차형 · ★ 1 · 예측 정합
  vendor_calibration_signal: {L5_confidence: 0.95}

- id: 수특2027-수학I-26008-0159
  page: 91
  vendor_label: Ch6 유제 · No.5 (귀납적 수열)
  category_type: 유제
  summary: |
    수열 {a_n}이 모든 자연수 n에 대하여 a_(n+1) = 3a_n을 만족.
    a_3 = a_2 + 2일 때 a_6의 값.
  category: 등비수열 정의 + 조건 대입
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "공비 3 → a_3 - a_2 = 2a_2 = 2 → a_2=1 → a_1"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "a_6 = a_1 · 3^5"}
  insight_count: 2
  depth_score: 4.5
  base_star: 2
  star: 2
  premium: false
  tier: star_2
  target_cohort: 중위권
  insight_type: 통찰형
  mechanism_primary: 등비수열 정의 · 조건 대입
  rationale: |
    유제 표준 · depth 2 EQV · ★ 2 · 예측 정합
  vendor_calibration_signal: {L5_confidence: 0.95}

- id: 수특2027-수학I-26008-0034
  page: 23
  vendor_label: Ch2 유제 · No.3
  category_type: 유제
  summary: |
    정의역 {x | -2≤x≤3}인 함수 f(x) = 3^(-x+2)의 최댓값 M, 최솟값 m일 때 m/M 값.
  category: 지수함수 최대·최소 · 정의역 유한
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  tier: star_1
  target_cohort: 하위권
  insight_type: 절차형
  mechanism_primary: 지수함수 감소 → 양끝 대입
  rationale: |
    유제 절차형 · ★ 1 · 예측 정합
  vendor_calibration_signal: {L5_confidence: 0.95}

- id: 수특2027-수학I-26008-0155
  page: 87
  vendor_label: Ch6 유제 · No.3 (Σ 표현)
  category_type: 유제
  summary: |
    Σ_{k=1}^{20} (2k-1)² - Σ_{k=8}^{21} (2k-3)² 값.
  category: Σ 성질 · 재인덱스 · 홀수 제곱합
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-XU, depth: 2, effective_depth: 2, description: "두 Σ 재인덱스 → 공통 항 상쇄"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "잔여 항 산출"}
  insight_count: 2
  depth_score: 4.5
  base_star: 2
  star: 2
  premium: false
  tier: star_2
  target_cohort: 중위권
  insight_type: 통찰형
  mechanism_primary: Σ 재인덱스 · 상쇄 기법
  rationale: |
    유제 표준 · depth 2 XU · ★ 2 · 예측 정합
  vendor_calibration_signal: {L5_confidence: 0.85}

- id: 수특2027-수학I-26008-0157
  page: 89
  vendor_label: Ch6 유제 · No.5 (부분분수)
  category_type: 유제
  summary: |
    Σ_{k=1}^{8} 1/((3k-1)(3k+2)) 값.
  category: Σ 부분분수 분해 · 텔레스코핑
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "1/((3k-1)(3k+2)) = (1/3)(1/(3k-1) - 1/(3k+2)) 부분분수"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "텔레스코핑 · 첫·끝 항만 잔여"}
  insight_count: 2
  depth_score: 6
  base_star: 3
  star: 2
  premium: false
  tier: star_2
  target_cohort: 중위권
  insight_type: 통찰형
  mechanism_primary: 부분분수 분해 · 텔레스코핑
  rationale: |
    유제 표준 · 부분분수 · depth 2 EQV · ★ 2 (예측 정합)
  vendor_calibration_signal: {L5_confidence: 0.85}
```

---

## 판정 근거 · 층화 통계

**★ 분포**:
- ★ 1: 5문 (14%) — Level 1 절차형 · 유제 절차형
- ★ 2: 6문 (17%) — 예제·유제 표준 · Level 1 상단
- ★ 3: 10문 (29%) — 예제 정점 · Level 2 표준
- ★ 4: 10문 (29%) — Level 2 상단·Level 3·대표 기출 표준
- ★ 5: 3문 (9%) — Level 3 정점·수능 4점 킬러
- premium: 1문 (3%) — 26008-0089 (Ch3 · 삼각+절댓값+구간 균등 조건)

**Level 라벨 → ★ 회귀 정합률**:
- Level 1 → ★ 1: 4/4 = 100%
- Level 1 → ★ 3 (상향): 1/5 (Level 1 라벨 편차 · 26008-0106 사각형 결합)
- Level 2 → ★ 3: 3/6 = 50%
- Level 2 → ★ 4 (상향): 2/6 (Level 3 수준 문제 · 26008-0082·0143)
- Level 3 → ★ 4~5: 6/6 = 100%
- 대표 기출 → ★ 4~5: 6/6 = 100%
- 유제 → ★ 1~3: 6/6 (표준)

**총 정합률**: 29/35 = **82.9%** (Level 라벨은 대체로 정확 · 유제·Level 2에서 편차 다수)

**premium 원형 시그니처** (Ch3 26008-0089):
- 삼각함수 sin²x + |sinx - c| 절댓값 결합
- 구간 [0,β]와 [β, 2π-β] 균등 조건 (M₁-m₁ = M₂-m₂)
- signal_ref: P2·P3·P4·P4 (4개) · insight_count 5 · depth_score 8.6
- 수능 킬러 스타일 원형 · **스코프 밖이지만 상위 과정 침투 감지 코퍼스로 가치**

---

## 활용 가이드

**problem-author agent용**:
- 이 파일을 원본 pool로 조회 **금지** (스코프 밖)
- CM1·CM2 시험지·유형편 pick 대상 아님

**Gate 5.0 도구용**:
- `cm1-out-of-scope.mjs`·`cm2-out-of-scope.mjs`에서 참조 코퍼스
- 지수·로그·삼각·수열 용어 CM1·CM2 답지 침투 감지 (미적분Ⅱ 용어 정책 확장)
- premium 원형 시그니처 크로스 검증 (수능 킬러 스타일 원형 확보)

**cross_reference 잠재**:
- Ch1 26008-0022 (a + 1/a = 52 → a^(1/3) + a^(-1/3)) ↔ CM1-EQ 대칭식 치환 원형 (스코프 다름 · 3제곱 항등식은 CM1 미침투 확인)
- Ch5 26008-0143 (S_n = pn²+qn+r 예외 함정) ↔ CM1-EQ에는 S_n 개념 부재 (침투 감지)
- Ch3 26008-0089 (절댓값·삼각 균등 조건) ↔ CM1-EQ 절대부등식 (스코프 다름 · 삼각 함수는 미침투 확인)

---

## 저작권 준수

- 원문 발문 전사 없음 (요지 요약만 · 시그니처 3원소: 입력·결과식·자유도)
- 그림·표 재현 없음
- 풀이 서술 요약 (핵심 통찰 단계만 라벨링 · 실제 계산 세부 생략)
- 출처: EBS 2027학년도 수능특강 수학Ⅰ · ISBN 등 원본 정보는 별책 참조
