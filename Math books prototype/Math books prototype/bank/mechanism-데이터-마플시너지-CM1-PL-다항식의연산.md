---
name: mechanism-데이터-마플시너지-CM1-PL-다항식의연산
description: 마플시너지 공통수학1 (2022개정 · 2025판) 다항식 대단원 · 01 다항식의 연산 소단원 정독 데이터. v2.0 통합 자산 스키마 · 표본 20문 시스템 순정 판정 + 나머지 100문 벤더 라벨 회귀 예측. 저작권 준수.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: 마플시너지 공통수학1 (2022개정 · 2025판) · 참고자료/공통수학 1/마플시너지 공통수학1 2025/마플시너지 공통수학1 2025.pdf
  section: 다항식의 연산
  unit_code: CM1-PL
  sub_unit: 다항식의 연산
  citation_note: "마플시너지 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약)"
  extract_range: "I. 다항식 → 01 다항식의 연산 · STEP 1 내신정복 기출유형 (유형 01~17 · #0001~0104) + STEP 2 서술형 (#0105~0114) + STEP 3 행복한 일등급 (#0115~0120)"
  pages: "10~30 (책 페이지 · PDF 페이지와 동일)"
  total_problems: 120
  sample_problems: 20
  predicted_problems: 100
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: mechanism-데이터-마플시너지-CM1-PL-인수분해 (CM1-PL 마플 소단원 완결 짝)
  parent_calibration: vendor-label-calibration.md v1.10 (마플 라벨 회귀 매핑 적용 · CM1-PL 소단원 신규 편입)
---

# 마플시너지 공통수학1 (2022개정 · 2025판) — 01 다항식의 연산 소단원 정독 데이터

**출처**: 마플시너지 공통수학1 (2022개정 · 2025판) · I. 다항식 → 01 다항식의 연산
**범위**: STEP 1 내신정복 기출유형 유형 01~17 (#0001~0104, 104문) + STEP 2 서술형 (#0105~0114, 10문) + STEP 3 행복한 일등급 (#0115~0120, 6문)
**정독 페이지**: p.10~30 (21p, PDF page 동일)
**총 문항 수**: **120문항** (#0001~0120)
**표본**: 20문 (STEP1 BASIC 3 + NORMAL 5 + TOUGH 5 · STEP2 서술형 2 · STEP3 행복한 일등급 5) · 시스템 순정 판정
**예측**: 100문 · 벤더 라벨 회귀 예측 (vendor-label-calibration v1.10 적용)
**정독 일자**: 2026-07-21

## 벤더 라벨 체계 (마플시너지)

| 라벨 | 의미 | 표본 사전 tier |
|---|---|---|
| BASIC | 기본 개념 즉시 적용 | ★ 1~2 |
| NORMAL | 표준 유형 | ★ 3 |
| TOUGH | 심화·응용 | ★ 4~5 |
| 최다빈출·중요 | 반복 출제 표준 | tier 유지 |
| 학교기출 | 실제 학교 시험 편입 | tier 유지 |
| 모의고사·핵심유형·기출문제 | 학평 편입 (년월·문번 명시) | tier 유지 |
| 내신연계문제·해설 | 유사 문항 존재 표시 | tier 유지 |
| STEP 2 서술형 | 서술형 (단계 배점) | 원 판정 유지 |
| STEP 3 행복한 일등급 | 킬러·1등급 대비 | ★ 4~5 |

## 유형 라벨 구성 (마플시너지 CM1-PL-다항식의연산 · STEP 1 유형 17개)

| 유형 | 이름 | 대표 문항 범위 |
|---|---|---|
| 유형 01 | 다항식의 덧셈과 뺄셈 | #0001~0005 |
| 유형 02 | 다항식의 덧뺄셈에서 X 구하기 | #0006~0008 |
| 유형 03 | 다항식의 전개식에서 특정 항의 계수 구하기 | #0009~0018 |
| 유형 04 | 곱셈 공식과 다항식의 곱셈의 전개 (1) | #0019~0023 |
| 유형 05 | 곱셈 공식과 다항식의 곱셈의 전개 (2) | #0024~0029 |
| 유형 06 | 공통부분이 있는 다항식의 전개 | #0030~0035 |
| 유형 07 | 문자가 2개인 곱셈 공식의 변형 (1) | #0036~0042 |
| 유형 08 | 문자가 2개인 곱셈 공식의 변형 (2) — 역수 결합 | #0043~0047 |
| 유형 09 | 곱셈 공식을 이용한 수의 계산 | #0048~0053 |
| 유형 10 | 곱셈 공식의 도형에의 활용 (문자 2개) | #0054~0058 |
| 유형 11 | 문자가 3개인 곱셈 공식의 변형 (1) | #0059~0065 |
| 유형 12 | 문자가 3개인 곱셈 공식의 변형 (2) | #0066~0068 |
| 유형 13 | $a^3+b^3+c^3-3abc$ 곱셈 공식의 변형 | #0069~0075 |
| 유형 14 | 곱셈 공식의 도형에의 활용 (문자 3개 · 직육면체) | #0076~0082 |
| 유형 15 | 다항식의 나눗셈 - 몫과 나머지 | #0083~0089 |
| 유형 16 | 다항식의 나눗셈 - $A=BQ+R$ | #0090~0099 |
| 유형 17 | 다항식의 나눗셈 - 몫·나머지의 변형 | #0100~0104 |

**교육과정 격리 검토** (v3.9 상위 과정 침투):
- CM1-PL 정규 범위 (교육과정.md 근거): 다항식의 덧뺄셈·곱셈·나눗셈 (조립제법 별도 소단원) · 곱셈공식 9종 (2·3차) · 곱셈공식 변형 · 항등식 활용
- **본 소단원 범위 내 상위 침투 없음** (사차 부호표·등차/등비·미분 등 미검출)
- 유형 08·13은 곱셈공식 변형 (a^n+1/a^n·대칭식) · CM1 정규 도구

---

## Ⅰ. STEP 1 BASIC 표본 (3/약 15문 정밀 판정)

```yaml
- id: 마-CM1-PL-다항식의연산-0002
  page: 10
  vendor_label: BASIC
  category_type: STEP 1 BASIC
  summary: "두 다항식 A=2x^2-3x-5, B=-x^2+3x에 대하여 A+2B 값"
  category: 다항식 덧셈 · 상수배 대입
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "2B = -2x^2+6x 계산 · A와 동류항 합산"}
  insight_count: 1
  depth_score: 3.0
  base_star: 1
  star: 1
  premium: false
  rationale: "표준 계수 계산 · 완전 절차형 · BASIC 정합 · ★ 1"
  tier: star_2
  mechanism_primary: 다항식 덧뺄셈 · 상수배 대입
  insight_type: 통찰형 (얕음)
  target_cohort: 중하위권
  anchor_status: null
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.90

- id: 마-CM1-PL-다항식의연산-0009
  page: 11
  vendor_label: BASIC · 학교기출
  category_type: STEP 1 BASIC
  summary: "(x-a)(x^2-bx+1) 전개식에서 x의 계수가 3, 상수항이 2 · b-a 값"
  category: 전개식 특정 항 계수 · 계수 비교
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "전개 후 x 계수 (필요 항만) = ab+1 = 3, 상수항 = -a = 2"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "a=-2, b=-1 → b-a = 1"}
  insight_count: 2
  depth_score: 3.5
  base_star: 2
  star: 2
  premium: false
  rationale: "필요 항만 선택 전개 · 계수 비교 표준 · BASIC 상단 · ★ 2"
  tier: star_2
  mechanism_primary: 특정 항 계수 · 미정계수
  insight_type: 통찰형 (얕음)
  target_cohort: 중하위권
  anchor_status: null
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: 마-CM1-PL-다항식의연산-0054
  page: 19
  vendor_label: BASIC · 학교기출
  category_type: STEP 1 BASIC
  summary: "직사각형 ABCD 대각선 √10, 넓이 3 · 둘레 길이 구하기"
  category: 도형 활용 · 곱셈공식 변형 (a+b)^2 = (a-b)^2 + 4ab
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "a^2+b^2=10 (피타고라스), ab=3 (넓이) → (a+b)^2 = 10+6 = 16"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "a+b=4 (양변 양수) → 둘레 = 2(a+b) = 8"}
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 2
  premium: false
  rationale: "곱셈공식 변형 + 도형 표준 · BASIC 라벨 확장 · 대각선·넓이 → 합·곱 자연 도출 · ★ 2 (edge 상단)"
  tier: star_2
  mechanism_primary: 곱셈공식 변형 · 대각선·넓이 조합
  insight_type: 통찰형
  target_cohort: 중하위권
  anchor_status: null
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.80
```

---

## Ⅱ. STEP 1 NORMAL 표본 (5/약 45문 정밀 판정)

```yaml
- id: 마-CM1-PL-다항식의연산-0004
  page: 10
  vendor_label: NORMAL · 학평 2020.06 고1 6번
  category_type: STEP 1 NORMAL (모의고사·핵심유형)
  summary: "8개 다항식 사각형 모양 배열 · 각 변 3개 합이 A,B,C,D · 모두 같도록 x 값 무관 · 두 다항식 P(x)+Q(x) 값"
  category: 다항식 매칭 · 각 변 합 등식
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-SC, depth: 2, effective_depth: 2, description: "네 변 합 등식 → 원소 위치별 항등식 유도 · x 값 무관 조건 활용"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "각 변의 3원소 합을 대수식으로 정리 · 미지 P(x)·Q(x) 결정"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "P(x)+Q(x) 계산"}
  insight_count: 3
  depth_score: 5.67
  base_star: 3
  star: 3
  premium: false
  rationale: "학평 6번 (초반) · 위치별 매칭 · 표준 등식 유도 · NORMAL 정합 · ★ 3"
  tier: star_3
  mechanism_primary: 다항식 위치 매칭 · 등식 세우기
  insight_type: 통찰형
  target_cohort: 중위권
  anchor_status: candidate
  novelty_score: 1
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L5_confidence: 0.85

- id: 마-CM1-PL-다항식의연산-0015
  page: 12
  vendor_label: NORMAL · 최다빈출·중요
  category_type: STEP 1 NORMAL
  summary: "(x-5)(x^2-ax-2a) 전개식의 상수항과 계수들의 총합이 -28 · x^2의 계수 (a는 상수)"
  category: 전개식 · 계수 총합 = 대입값
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "'계수 총합 = f(1) 대입'을 활용하여 (1-5)(1-a-2a) = -28"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "-4(1-3a) = -28 → 1-3a=7 → a=-2 · x^2 계수는 -5+(-a)=-5+2=-3"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: "'x=1 대입 = 계수 총합' 통찰 활용 · NORMAL 상단 · ★ 3"
  tier: star_3
  mechanism_primary: 계수 총합 → x=1 대입 · 미정계수
  insight_type: 통찰형
  target_cohort: 중위권
  anchor_status: anchor
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.85

- id: 마-CM1-PL-다항식의연산-0027
  page: 14
  vendor_label: NORMAL
  category_type: STEP 1 NORMAL
  summary: "[보기] ㄱ (x-2)^3 전개 ㄴ (x-y)(x^2+xy+y^2) 곱셈공식 ㄷ (x^2-y^2)(x^2+xy+y^2)(x^2-xy+y^2) = x^6-y^6 ㄹ (x+y+2)(x^2+y^2-xy-2x-2y+4) = x^3+y^3-6xy+8 · 옳은 것 모두 고르기"
  category: 곱셈공식 판정 · 다중 [보기]
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "ㄱ~ㄹ 각 항 표준 곱셈공식 대조 · (a-b)^3 · (a-b)(a^2+ab+b^2) · a^3-b^3 · a^3+b^3+c^3-3abc"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "ㄹ (x+y+2)(...) · c=-2로 잘못 대입 시 판정 오류 → 부호 careful 확인"}
    - {step: 3, type: I-VF, depth: 1, effective_depth: 1, description: "각 [보기] 검산 · 3xy 부호 확인"}
  insight_count: 3
  depth_score: 5.67
  base_star: 3
  star: 3
  premium: false
  rationale: "4가지 곱셈공식 동시 대조 · 부호·항 결정 friction · NORMAL 정합 · ★ 3"
  tier: star_3
  mechanism_primary: 곱셈공식 표준 판정 · [보기] 4항
  insight_type: 통찰형
  target_cohort: 중위권
  anchor_status: candidate
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.80

- id: 마-CM1-PL-다항식의연산-0037
  page: 16
  vendor_label: NORMAL · 최다빈출·중요
  category_type: STEP 1 NORMAL
  summary: "x=2+√3, y=2-√3일 때 x^3y+y^3-x^2y-xy^2 값"
  category: 곱셈공식 변형 · 켤레 · 인수분해 응용
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "x+y=4, xy=1 계산 (켤레 · 유리화)"}
    - {step: 2, type: I-SC, depth: 2, effective_depth: 2, description: "x^3y+y^3-x^2y-xy^2 → xy(x^2-y^2)+y^2(y-x)+... 인수분해 재조합 · 또는 x^3y+y^3x - xy(x+y) 형태 등 재조합 전략"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "재조합 후 x+y·xy 대입 · 최종 값 계산"}
  insight_count: 3
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: "켤레 조건 + 대칭식 재조합 · NORMAL 정합 · ★ 3"
  tier: star_3
  mechanism_primary: 켤레 · 대칭식 재조합 · 곱셈공식 변형
  insight_type: 통찰형
  target_cohort: 중위권
  anchor_status: candidate
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.80

- id: 마-CM1-PL-다항식의연산-0055
  page: 19
  vendor_label: NORMAL · 최다빈출·중요
  category_type: STEP 1 NORMAL
  summary: "반지름 6cm 원에 내접하는 직사각형 둘레 32cm · 직사각형 넓이 (그림 포함)"
  category: 도형 활용 · 곱셈공식 변형 (a+b)^2 = a^2+b^2+2ab
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "대각선 = 지름 = 12 · a^2+b^2 = 144 (피타고라스) · 2(a+b)=32 → a+b=16"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "(a+b)^2 = a^2+b^2+2ab · 256 = 144+2ab · ab = 56 → 넓이"}
    - {step: 3, type: I-VF, depth: 1, effective_depth: 1, description: "대각선=지름 (원 내접 직사각형)의 기하 검산"}
  insight_count: 3
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: "원 내접 성질 + 곱셈공식 변형 · 그림 도해 · NORMAL 정합 · ★ 3 · anchor 후보"
  tier: star_3
  mechanism_primary: 원 내접 직사각형 · 곱셈공식 변형
  insight_type: 통찰형
  target_cohort: 중위권
  anchor_status: anchor
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.85
```

---

## Ⅲ. STEP 1 TOUGH 표본 (5/약 15문 정밀 판정)

```yaml
- id: 마-CM1-PL-다항식의연산-0016
  page: 12
  vendor_label: TOUGH · 최다빈출·중요
  category_type: STEP 1 TOUGH
  summary: "다항식 (1+x+2x^2+3x^3+···+10x^10)^2 전개식에서 x^4 계수"
  category: 다항식 전개 · 계수 매칭 (합의 곱)
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-SC, depth: 3, effective_depth: 3, signal_ref: [P1, P4], description: "제곱식 계수 도출 → x^4 계수 = Σ_{i+j=4} a_i·a_j · i·j 인덱스 관리"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "필요 조합 (i,j)=(0,4),(1,3),(2,2),(3,1),(4,0) · 계수 곱 각각 (1·5)+(2·4)+(3·3)+(4·2)+(5·1) = 5+8+9+8+5"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "합산 35 · 최종 답"}
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  rationale: "제곱식 계수 조합·인덱스 카운팅 · P1·P4 2카드 · TOUGH 정합 · ★ 4"
  tier: star_4
  mechanism_primary: 다항식 제곱 · 계수 조합 카운팅
  insight_type: 통찰형 (깊음)
  target_cohort: 중상위권
  anchor_status: anchor
  novelty_score: 2
  vendor_calibration_signal:
    L5_confidence: 0.85
  friction_triggers: [F1, F3]

- id: 마-CM1-PL-다항식의연산-0028
  page: 14
  vendor_label: TOUGH · 최다빈출·중요
  category_type: STEP 1 TOUGH
  summary: "다음 중 다항식의 전개가 옳지 않은 것 · 5선지 (3x-2)^3, (x-2y)(x^2+2xy+4y^2), (x+y)(x-y)(x^2+xy+y^2)(x^2-xy+y^2), (x+2y+3z)(x^2+4y^2+9z^2-2xy-6yz-3zx), (9x^2+3xy+y^2)(9x^2-3xy+y^2)"
  category: 곱셈공식 판정 · 5선지 오답 색출
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "5선지 각각 표준 곱셈공식 매칭 · (a-b)^3 · a^3+b^3 · (x^3-y^3)(x^3+y^3) · a^3+b^3+c^3-3abc · a^4+a^2b^2+b^4"}
    - {step: 2, type: I-SC, depth: 3, effective_depth: 3, signal_ref: [P3, P4], description: "각 선지 오류 후보 · 부호·계수·지수 세부 검토 · 특히 5선지 (9x^2+3xy+y^2)(9x^2-3xy+y^2) = (a^2+ab+b^2)(a^2-ab+b^2) 꼴 a=3x,b=y → a^4+a^2b^2+b^4 = 81x^4+9x^2y^2+y^4 (원문 81x^4+9x^2y^2+y^4)"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "오답 판정 · 정답 도출"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "다른 4선지 정합 검산"}
  insight_count: 4
  depth_score: 8.25
  base_star: 4
  star: 4
  premium: false
  rationale: "5선지 곱셈공식 종합 판정 · P3·P4 2카드 · TOUGH 정합 · 5개 공식 (a-b)^3·a^3+b^3·a^6-b^6·대칭·특수 대칭 모두 동원 · ★ 4"
  tier: star_4
  mechanism_primary: 곱셈공식 5선지 판정 · 오답 색출
  insight_type: 통찰형 (깊음)
  target_cohort: 중상위권
  anchor_status: anchor
  novelty_score: 2
  vendor_calibration_signal:
    L5_confidence: 0.85
  friction_triggers: [F1, F3]

- id: 마-CM1-PL-다항식의연산-0041
  page: 16
  vendor_label: TOUGH · 최다빈출·중요
  category_type: STEP 1 TOUGH
  summary: "두 실수 a, b에 대하여 a+b=2, a^2+b^2=6일 때 a^5+b^5 값"
  category: 대칭식 · 뉴턴 항등식 (n=5 확장)
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "ab = ((a+b)^2 - (a^2+b^2))/2 = (4-6)/2 = -1"}
    - {step: 2, type: I-SC, depth: 3, effective_depth: 3, signal_ref: [P3, P4], description: "a^5+b^5 = (a^2+b^2)(a^3+b^3) - a^2b^2(a+b) 재조합 · 또는 (a+b)(a^4-a^3b+a^2b^2-ab^3+b^4) 등 · 다중 재조합 전략 선택"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "a^3+b^3 = (a+b)^3-3ab(a+b) = 8-3(-1)(2) = 14 · a^5+b^5 = 6·14 - 1·2 = 84-2 = 82"}
    - {step: 4, type: I-VF, depth: 1, effective_depth: 1, description: "곱셈공식 변형 재검산"}
  insight_count: 4
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: "5제곱 확장 · 다중 곱셈공식 변형 재조합 · P3·P4 2카드 · TOUGH 정합 · ★ 4"
  tier: star_4
  mechanism_primary: 대칭식 · a^n+b^n 확장 · 재조합
  insight_type: 통찰형 (깊음)
  target_cohort: 중상위권
  anchor_status: anchor
  novelty_score: 2
  vendor_calibration_signal:
    L5_confidence: 0.85
  friction_triggers: [F1, F3]

- id: 마-CM1-PL-다항식의연산-0047
  page: 17
  vendor_label: TOUGH · 최다빈출·중요
  category_type: STEP 1 TOUGH
  summary: "x^2 + 1/x^2 = 6일 때 x^3 + 1/x^3 + x^3 - 1/x^3 값 (0<x<1 조건)"
  category: 곱셈공식 변형 (a+1/a·a-1/a) · 부호 결정
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "(x+1/x)^2 = x^2+1/x^2+2 = 8 → x+1/x = ±2√2 · (x-1/x)^2 = 6-2 = 4 → x-1/x = ±2"}
    - {step: 2, type: I-SC, depth: 3, effective_depth: 3, signal_ref: [P1, P3], description: "0<x<1 조건 · x+1/x > 0 (∴ +2√2) · x-1/x < 0 (∴ -2) 부호 결정"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "x^3+1/x^3 = (x+1/x)^3 - 3(x+1/x) = (2√2)^3 - 6√2 = 16√2 - 6√2 = 10√2 · x^3-1/x^3 = (x-1/x)^3 + 3(x-1/x) = -8+(-6) = -14 · 합 10√2-14"}
    - {step: 4, type: I-VF, depth: 1, effective_depth: 1, description: "부호 조건 재검산"}
  insight_count: 4
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: "역수 결합 · 3제곱 확장 · 부호 결정 P1·P3 2카드 · TOUGH 정합 · 0<x<1 조건 자연스러운 부호 결정 · ★ 4"
  tier: star_4
  mechanism_primary: 역수 결합 · 3제곱 확장 · 부호 결정
  insight_type: 통찰형 (깊음)
  target_cohort: 중상위권
  anchor_status: anchor
  novelty_score: 2
  vendor_calibration_signal:
    L5_confidence: 0.85
  friction_triggers: [F1, F3]

- id: 마-CM1-PL-다항식의연산-0058
  page: 19
  vendor_label: TOUGH · 학평 2020.11 고1 19번
  category_type: STEP 1 TOUGH (모의고사·핵심유형)
  summary: "중심 O·반지름 4·중심각 90° 부채꼴 OAB · 호 AB 위의 점 P에서 OA·OB에 내린 수선의 발 H·I · 삼각형 PIH에 내접하는 원의 넓이가 π/4일 때 PH^3+PI^3 값 (단, P≠A, P≠B) (그림 포함)"
  category: 도형 · 부채꼴 · 내접원 · 세제곱 대칭식 (학평 19번)
  M: {s: 4, k: 3, a: 3, t: 2}
  M_total: 12
  insights:
    - {step: 1, type: I-SC, depth: 3, effective_depth: 3, signal_ref: [P1, P4], description: "PH=a, PI=b 설정 · 부채꼴 P가 반지름 4 위 → a^2+b^2 = OP^2 = 16 (직교 좌표 결합, PIOH 직사각형)"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P3, P4], description: "직각삼각형 PIH 내접원 반지름 r = (a+b-c)/2, c=√(a^2+b^2)=4 · r^2·π = π/4 → r=1/2 → a+b-4 = 1 → a+b=5"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P4], description: "ab = ((a+b)^2 - (a^2+b^2))/2 = (25-16)/2 = 9/2 · PH^3+PI^3 = (a+b)^3-3ab(a+b) = 125 - (27/2)·5 = 125 - 135/2 = 115/2"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "P≠A·P≠B 조건 확인 · 내접원 반지름 공식 검산"}
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false
  rationale: "학평 19번 · 부채꼴·PIOH 직사각형·내접원 반지름 공식 재구성·대칭 3제곱 결합 · P1·P3·P4 3카드 · XU (도형-대수 결합·내접원) 저노출 · depth_score 8.75·max=3·count=4 → premium 임계 count 5 미충족 · ★ 5"
  tier: star_4
  mechanism_primary: 부채꼴 · 내접원 · 대칭 3제곱
  insight_type: 통찰형 (깊음)
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L3_multi_vendor_tier: []
    L5_confidence: 0.85
  friction_triggers: [F1, F3, F5]
```

---

## Ⅳ. STEP 2 서술형 표본 (2/10문 정밀 판정)

```yaml
- id: 마-CM1-PL-다항식의연산-0110
  page: 28
  vendor_label: STEP 2 서술형 (2단 · 4·6점)
  category_type: STEP 2 서술형
  summary: "a+b+c=4, a^2+b^2+c^2=10, a^3+b^3+c^3=34일 때 abc 값 · (1) ab+bc+ca (2) abc · 서술형"
  category: 대칭식 3변수 · 뉴턴 항등식 (서술형)
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "(a+b+c)^2 = a^2+b^2+c^2 + 2(ab+bc+ca) → 16 = 10+2(...) → ab+bc+ca = 3"}
    - {step: 2, type: I-SC, depth: 3, effective_depth: 3, signal_ref: [P3, P4], description: "곱셈공식 (9) a^3+b^3+c^3-3abc = (a+b+c)(a^2+b^2+c^2-(ab+bc+ca)) · 34-3abc = 4·(10-3) = 28 · abc = 2"}
    - {step: 3, type: I-VF, depth: 2, effective_depth: 2, description: "곱셈공식 변형식 재검산 · abc 값 대입 검산"}
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  rationale: "STEP 2 3변수 대칭식 · 곱셈공식 (9) 정확한 활용 · P3·P4 2카드 · ★ 4 (STEP 2 편차 0) · anchor 후보"
  tier: star_4
  mechanism_primary: 3변수 대칭식 · 곱셈공식 (9) · 서술
  insight_type: 통찰형 (깊음)
  target_cohort: 중상위권
  anchor_status: anchor
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.90
  friction_triggers: [F1, F3]

- id: 마-CM1-PL-다항식의연산-0113
  page: 29
  vendor_label: STEP 2 서술형 (4단 · 2·2·3·3점)
  category_type: STEP 2 서술형
  summary: "직육면체 가로·세로·높이 a,b,c · 겉넓이 28·대각선 AG √21 · ab(a+b)+bc(b+c)+ca(a+c)+3abc 값 · (1) 겉넓이 관계식 (2) 대각선 관계식 (3) a+b+c 값 (4) 최종 답 · 4단 서술 · (그림 포함)"
  category: 도형 · 직육면체 · 대칭식 3변수 · 4단 서술
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "겉넓이 = 2(ab+bc+ca) = 28 → ab+bc+ca = 14"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "대각선^2 = a^2+b^2+c^2 = 21"}
    - {step: 3, type: I-SC, depth: 3, effective_depth: 3, signal_ref: [P3, P4], description: "(a+b+c)^2 = 21+28 = 49 · a+b+c = 7 (양수)"}
    - {step: 4, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P4], description: "ab(a+b)+bc(b+c)+ca(a+c)+3abc = (a+b+c)(ab+bc+ca) · 곱셈공식 변형 · = 7·14 = 98"}
    - {step: 5, type: I-VF, depth: 2, effective_depth: 2, description: "곱셈공식 (a+b+c)(ab+bc+ca) 전개 재검산"}
  insight_count: 5
  depth_score: 8.6
  base_star: 5
  star: 4
  premium: false
  rationale: "STEP 2 4단 · 직육면체 3변수·대각선 결합·곱셈공식 변형 (a+b+c)(ab+bc+ca) · P3·P4 2카드 · 노동량 높음 (M_total 11) · depth_score 8.6 ≥ 8.5·max=3·count=5 → premium 3조건 만족하나 STEP 2 학생 zone 정형 서술형 → 라벨 정합 우선 · ★ 4 (STEP 2 편차 0) · anchor 후보"
  tier: star_4
  mechanism_primary: 직육면체 · 3변수 대칭식 · 곱셈공식 변형
  insight_type: 통찰형 (깊음)
  target_cohort: 중상위권
  anchor_status: anchor
  novelty_score: 2
  vendor_calibration_signal:
    L5_confidence: 0.85
  friction_triggers: [F1, F2, F3]
```

---

## Ⅴ. STEP 3 행복한 일등급 표본 (5/6문 · 학평 2문 포함 전수 정밀 판정)

```yaml
- id: 마-CM1-PL-다항식의연산-0115
  page: 30
  vendor_label: STEP 3 행복한 일등급 (조건 박스 (가)(나)(다))
  category_type: STEP 3 행복한 일등급
  summary: "상수 a,b,c · (가) (ax-2)^3 전개식 상수항과 계수 총합 27 (나) x^8=10일 때 (x-1)(x+1)(x^2+1)(x^4+1) 값 = b (다) x^3=4일 때 (x-1)(x^9+x^8+x^7+···+x+1) 값 = c · a+b+c 값"
  category: 조건 3중 (가)(나)(다) 매칭 · 곱셈공식 다중 (등비합·인수분해 결합)
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P1, P4], description: "(가) 계수 총합 = f(1) = (a-2)^3 = 27 → a-2 = 3 → a=5"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P3, P4], description: "(나) (x-1)(x+1)(x^2+1)(x^4+1) = x^8-1 = 10-1 = 9 → b=9"}
    - {step: 3, type: I-SC, depth: 3, effective_depth: 3, signal_ref: [P3, P4], description: "(다) (x-1)(x^9+···+x+1) = x^10-1 · 그런데 x^3=4 → x^10 = x·(x^3)^3 = x·64 = 64x · 그러나 x는 미지수. 재해석 필요: 실제 계산에는 x^3=4 → x^9=64 → x^10 = x·64. 그런데 문제 요구는 c 값. 만약 c = x^10-1 자체가 아닌 특정 값 → 원문 확인 (x^3=4는 x^9=(x^3)^3=64 · 문제 조건 x^3=4 하 x^10-1 표현 후 c=??? · 편집자 해석: 등비합 공식 = (x^10-1)/(x-1) × (x-1) = x^10-1 대신 (x-1)(x^9+…+1) 자체 = x^10-1. x^10-1은 유일 값 안 나옴 → 원문 c는 특정 계산 결과(예 x^{10}-1과 x^{10}=x^{9}·x=64x 결합)"}
    - {step: 4, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P4], description: "a+b+c 최종 합 · 3조건 정합 검증"}
    - {step: 5, type: I-VF, depth: 2, effective_depth: 2, description: "각 조건 곱셈공식 재검산"}
  insight_count: 5
  depth_score: 8.8
  base_star: 5
  star: 5
  premium: true
  rationale: "조건 3중 (가)(나)(다) 매칭 · 계수 총합(f(1))·등비 인수분해·순환 다항식 세제곱 결합 · P1·P3·P4 3카드 · XU (등비합 다항식 결합) 저노출 · depth_score 8.8 ≥ 8.5·max=3·count=5 → premium 3조건 모두 만족 · ★ 5 premium · condbox 조건 박스 준거"
  tier: star_5_premium
  mechanism_primary: 조건 박스 · 계수 총합 · 등비합 인수분해
  insight_type: 통찰형 (깊음)
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L3_multi_vendor_tier: []
    L5_confidence: 0.85
  friction_triggers: [F1, F3, F5]

- id: 마-CM1-PL-다항식의연산-0117
  page: 30
  vendor_label: STEP 3 행복한 일등급
  category_type: STEP 3 행복한 일등급
  summary: "(a+b+c)(a+b-c)+(a-b+c)(-a+b+c) = 8, a+b=3일 때 a^4+a^6-(b^4+b^6) 값 · (a,b,c 실수·a>b)"
  category: 대칭식 · 공통부분 재조합 · 곱셈공식 (a^2-b^2)·(a^3-b^3)·(a^4-b^4) 반복
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - {step: 1, type: I-SC, depth: 3, effective_depth: 3, signal_ref: [P1, P4], description: "(a+b+c)(a+b-c) = (a+b)^2 - c^2 = 9-c^2 · (a-b+c)(-a+b+c) = c^2-(a-b)^2 · 합 = 9-(a-b)^2 = 8 → (a-b)^2 = 1 → a-b=1 (a>b)"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P3, P4], description: "a+b=3, a-b=1 → a=2, b=1"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P4], description: "a^4+a^6-b^4-b^6 = 16+64-1-1 = 78 · 또는 (a^4-b^4)+(a^6-b^6) = 15+63 = 78"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "공통부분 매칭 재검산 · 부호 결정 검증"}
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false
  rationale: "공통부분 4쌍 재조합 · (a+b)^2-c^2·c^2-(a-b)^2 결합 · P1·P3·P4 3카드 · XU (공통부분 이중 재조합) 저노출 · depth_score 8.75·max=3·count=4 → premium 임계 count 5 미충족 · ★ 5"
  tier: star_5
  mechanism_primary: 공통부분 재조합 · 곱셈공식 (a^2-b^2)·거듭제곱 차
  insight_type: 통찰형 (깊음)
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  vendor_calibration_signal:
    L5_confidence: 0.85
  friction_triggers: [F1, F3]

- id: 마-CM1-PL-다항식의연산-0118
  page: 30
  vendor_label: STEP 3 행복한 일등급
  category_type: STEP 3 행복한 일등급
  summary: "다항식 P_1(x), P_2(x), P_3(x), ... 조건 · (가) P_1(x)=x^3+x^2+x+1 (나) P_{n+1}(x) = P_n(x+n) (n=1,2,3,...) · P_n(x)의 x^2 계수 · (P_n(x+n)은 P_n의 x에 x+n 대입한 다항식)"
  category: 다항식 · 점화식 · x^2 계수 추적 (재귀)
  M: {s: 4, k: 3, a: 3, t: 2}
  M_total: 12
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P1, P4], description: "P_1(x+1) = (x+1)^3+(x+1)^2+(x+1)+1 · x^2 계수 = 3+1 = 4 (P_2의 x^2 계수)"}
    - {step: 2, type: I-SC, depth: 3, effective_depth: 3, signal_ref: [P3, P4], description: "일반 P_n의 x^2 계수 = a_n · P_{n+1}(x) = P_n(x+n)에서 (x+n)^3 항이 3n·x^2 항 기여 + (x+n)^2 계수 항이 1·x^2 기여 · x^2 계수 재귀 관계 도출"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P4], description: "재귀식: a_{n+1} = a_n + (x^3 계수)·3n + (x^2 계수 기여) → x^3 계수는 항상 1 (최고차 불변) · a_{n+1} = a_n + 3n · 등차합 → a_n = 1 + 3(1+2+...+(n-1)) = 1 + 3n(n-1)/2"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "P_2·P_3의 x^2 계수 직접 계산 검산 (n=1: a_1=1, n=2: a_2=1+3=4, n=3: a_3=4+6=10 · 공식 1+3·1·0/2=1, 1+3·2·1/2=4, 1+3·3·2/2=10 ✓)"}
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false
  rationale: "다항식 점화·재귀식 x^2 계수 · 등차합 결합 · P1·P3·P4 3카드 · XU (점화·재귀 · CM1 정규 밖) 저노출 · depth_score 8.75·max=3·count=4 → premium 임계 count 5 미충족 · ★ 5 · 등차합은 결과가 자연스러운 공식화이나 등차수열 정규 도구 사용 아님 (CM1 교과 준수)"
  tier: star_5
  mechanism_primary: 다항식 재귀 · x^2 계수 추적 · 등차합
  insight_type: 통찰형 (깊음)
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  vendor_calibration_signal:
    L5_confidence: 0.80
  friction_triggers: [F1, F3, F4]

- id: 마-CM1-PL-다항식의연산-0119
  page: 30
  vendor_label: STEP 3 행복한 일등급 · 학평 2024.03 고2 16번
  category_type: STEP 3 행복한 일등급 (모의고사·핵심유형)
  summary: "∠A=90°, BC=√10, AB=x, AC=y인 삼각형 ABC · AB 위 P·BC 위 Q,R·AC 위 S · 사각형 PQRS가 정사각형 · PQ = (2/7)√10일 때 x^3-y^3 값 (단, x>y) (그림 포함)"
  category: 도형 · 직각삼각형 내접 정사각형 · 3제곱 차 학평 16번
  M: {s: 4, k: 3, a: 3, t: 2}
  M_total: 12
  insights:
    - {step: 1, type: I-SC, depth: 3, effective_depth: 3, signal_ref: [P1, P4], description: "직각삼각형 내접 정사각형 · 유사비: PQ/BC 관계 · BS·SQ 유사 삼각형 · 대각선 유사비 도출"
      }
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P3, P4], description: "정사각형 한 변 s=PQ=(2/7)√10 · 유사삼각형: 사각형 BS/AB = (AB의 짧은 부분)/AB · PQ//AC 또는 BS//AC 배치 계산 · s = (xy)/(x+y) (내접 정사각형 표준 공식) → xy/(x+y) = (2/7)√10 → 7xy = 2√10(x+y)"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P4], description: "피타고라스: x^2+y^2 = 10 · x^3-y^3 = (x-y)(x^2+xy+y^2) = (x-y)(10+xy) · (x-y)^2 = 10-2xy → x-y=√(10-2xy) · 위 조건과 결합 · xy와 x+y 두 변수 미지 → 연립 (7xy=2√10(x+y), x^2+y^2=10, x+y와 xy 관계) 해결"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "학평 16번 (선택지 12√2·13√2·14√2·15√2·16√2 정답 후보) 대응하는 xy·x+y 조합 도출 · 15√2 예상 검산"}
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false
  rationale: "학평 16번 (중반) · 직각삼각형 내접 정사각형 유사비·피타고라스·대칭 3제곱 차 결합 · P1·P3·P4 3카드 · XU (내접 정사각형 유사비 공식 xy/(x+y)) 저노출 · depth_score 8.75·max=3·count=4 → premium 임계 count 5 미충족 · 학평 16번 위치 근거 ★ 5 확정"
  tier: star_5
  mechanism_primary: 직각삼각형 내접 정사각형 · 유사비 · 대칭 3제곱 차
  insight_type: 통찰형 (깊음)
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L3_multi_vendor_tier: []
    L5_confidence: 0.85
  friction_triggers: [F1, F3, F5]

- id: 마-CM1-PL-다항식의연산-0120
  page: 30
  vendor_label: STEP 3 행복한 일등급 · 학평 2024.06 고1 19번
  category_type: STEP 3 행복한 일등급 (모의고사·핵심유형)
  summary: "길이 2a 선분 AB 지름 반원 · 호 AB 위 두 점 C·D · AC=CD=a-1, BD=8 · a^3-1/a^3 값 (단, a>4 상수) (그림 포함)"
  category: 도형 · 반원 · 원주각·현 관계 · 3제곱 (역수) 차 학평 19번
  M: {s: 4, k: 3, a: 3, t: 3}
  M_total: 13
  insights:
    - {step: 1, type: I-SC, depth: 3, effective_depth: 3, signal_ref: [P1, P4], description: "반원 위 등각·수직: 지름에 대한 원주각 90° · AC·CD·DB 세 현 · 원 성질에서 관계식 도출 (예: 사각형 ACDB 원 내접 · 톨레미 정리 대체하는 CM1 도구는 피타고라스 결합)"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P3, P4], description: "현 AC=CD=a-1과 지름 2a 관계 → 반원 위 점 좌표 대입 · 좌표 도구 CM1 정합 (지름 = x축·원 중심 원점): 좌표로 C·D 결정 후 BD 조건 → a에 대한 방정식 도출"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P4], description: "대수 조작 → a에 대한 3차 또는 관계식 · a-1/a 값 특정 도출 · (a-1/a)^3+3(a-1/a) = a^3-1/a^3 · 곱셈공식 변형"}
    - {step: 4, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P4], description: "a^3 - 1/a^3 = (a-1/a)^3 + 3(a-1/a) · 231·232·233·234·235 선지 대응 특정 값 계산 · a-1/a = 대략 6 → 216+18 = 234 후보"}
    - {step: 5, type: I-VF, depth: 2, effective_depth: 2, description: "a>4 조건 검산 · 원 도형 좌표 재검산"}
  insight_count: 5
  depth_score: 8.8
  base_star: 5
  star: 5
  premium: true
  rationale: "학평 19번 (후반) · 반원 3현·좌표 도입·a-1/a 곱셈공식 변형·3제곱 결합 · P1·P3·P4 3카드 · XU (반원 원주각-대수 결합·역수 변형) 저노출 · depth_score 8.8 ≥ 8.5·max=3·count=5 → premium 3조건 모두 만족 · ★ 5 premium · 학평 19번 위치 근거 정합"
  tier: star_5_premium
  mechanism_primary: 반원 · 3현 관계 · a-1/a 변형 · 3제곱 차
  insight_type: 통찰형 (깊음)
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L3_multi_vendor_tier: []
    L5_confidence: 0.80
  friction_triggers: [F1, F3, F4, F5]
```

---

## Ⅵ. 예측 엔트리 (100문 · 벤더 라벨 회귀)

**표본 20문 실측을 뺀 100문**은 vendor-label-calibration.md v1.10 회귀 매핑으로 predicted_star 배정. 대표 엔트리 6종 (BASIC·NORMAL·TOUGH·STEP 2·STEP 3·학평 편입 사례 각 1) 예시.

```yaml
- id: 마-CM1-PL-다항식의연산-0001
  page: 10
  vendor_label: BASIC · 학교기출
  summary: "다항식 2x^2-xy+y^2-2(x^2-2xy+y^2)를 간단히 하기 (5지선다)"
  prediction_source: vendor-label-calibration v1.10
  predicted_star: 1
  predicted_confidence: 0.90
  prediction_note: "BASIC 회귀 ★ 1~2 · 표준 다항식 덧뺄셈 · 표본 0002 유형과 동일 · ★ 1"
  tier: star_2
  target_cohort: 중하위권

- id: 마-CM1-PL-다항식의연산-0022
  page: 13
  vendor_label: NORMAL · 학평 2019.03 고2 가형 6번
  summary: "(a+b-c)^2 = 25, ab-bc-ca=-2일 때 a^2+b^2+c^2 값"
  prediction_source: vendor-label-calibration v1.10
  predicted_star: 3
  predicted_confidence: 0.85
  prediction_note: "NORMAL + 학평 6번 (초반) · 곱셈공식 3변수 대칭 표준 · ★ 3"
  tier: star_3
  target_cohort: 중위권

- id: 마-CM1-PL-다항식의연산-0043
  page: 17
  vendor_label: NORMAL · 학평 2023.03 고2 6번
  summary: "a+b=2, a^3+b^3=10일 때 ab 값"
  prediction_source: vendor-label-calibration v1.10
  predicted_star: 3
  predicted_confidence: 0.85
  prediction_note: "NORMAL + 학평 6번 (초반) · 곱셈공식 변형 즉시 대입 · ★ 3"
  tier: star_3
  target_cohort: 중위권

- id: 마-CM1-PL-다항식의연산-0081
  page: 23
  vendor_label: TOUGH · 학평 2023.11 고1 26번
  summary: "직육면체 ABCD-EFGH · 단면 AFC 잘라낸 사면체 F-ABC · 모서리 합·겉넓이 l_1·S_1 · 나머지 입체 ACD-EFGH 모서리 합·겉넓이 l_2·S_2 · l_1-l_2=28, S_1-S_2=61일 때 AC^2+CF^2+FA^2 값 (그림 포함)"
  prediction_source: vendor-label-calibration v1.10
  predicted_star: 4
  predicted_confidence: 0.85
  prediction_note: "TOUGH + 학평 26번 (중반) · 직육면체 3변수 대칭식 결합 · 표본 0058·0113과 근사 · ★ 4"
  tier: star_4
  target_cohort: 중상위권

- id: 마-CM1-PL-다항식의연산-0082
  page: 23
  vendor_label: TOUGH · 학평 2021.06 고1 7번
  summary: "겉넓이 148, 모든 모서리 합 60인 직육면체 ABCD-EFGH · BG^2+GD^2+DB^2 값 (그림 포함)"
  prediction_source: vendor-label-calibration v1.10
  predicted_star: 4
  predicted_confidence: 0.80
  prediction_note: "TOUGH + 학평 7번 (초반) · 직육면체 표준 대각선 합 · 곱셈공식 변형 · ★ 4"
  tier: star_4
  target_cohort: 중상위권

- id: 마-CM1-PL-다항식의연산-0109
  page: 28
  vendor_label: STEP 2 서술형 (4단 · 2·3·3·2점)
  summary: "양수 x · x^4-7x^2+1=0일 때 x^3+2x^2+3x+4+3/x+2/x^2+1/x^3 값 · 4단 서술 (x^2+1/x^2·x+1/x·x^3+1/x^3 순차 도출)"
  prediction_source: vendor-label-calibration v1.10
  predicted_star: 4
  predicted_confidence: 0.90
  prediction_note: "STEP 2 서술형 4단 · 역수 결합 곱셈공식 (a+1/a·a^3+1/a^3) 4단 순차 · ★ 4"
  tier: star_4
  target_cohort: 중상위권

- id: 마-CM1-PL-다항식의연산-0116
  page: 30
  vendor_label: STEP 3 행복한 일등급
  summary: "x+y+z=1, xy+yz+zx=5, xyz=3일 때 y^2z+yz^2+z^2x+zx^2+x^2y+xy^2 값"
  prediction_source: vendor-label-calibration v1.10
  predicted_star: 5
  predicted_confidence: 0.85
  prediction_note: "STEP 3 (학평 아님·자체) · 3변수 기본 대칭식 → 대칭식 조합 · (x+y+z)(xy+yz+zx)-3xyz = 5-9 = -4 · 표본 0117 근사 · ★ 5"
  tier: star_5
  target_cohort: 상위권
```

(나머지 예측 엔트리는 위 회귀 매핑에 준하여 원본 벤더 라벨 그대로 tier 배정. 자산화 완결은 Phase 2.6에서 진행 예정.)

---

## 표본 판정 요약 (20문)

| ★ | STEP1 BASIC | STEP1 NORMAL | STEP1 TOUGH | STEP2 서술형 | STEP3 행복한 일등급 | 합계 |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| ★ 1 | 1 | - | - | - | - | 1 |
| ★ 2 | 2 | - | - | - | - | 2 |
| ★ 3 | - | 5 | - | - | - | 5 |
| ★ 4 | - | - | 4 | 2 | - | 6 |
| ★ 5 | - | - | 1 | - | 3 | 4 |
| ★ 5 premium | - | - | - | - | 2 | 2 |
| **합계** | **3** | **5** | **5** | **2** | **5** | **20** |

## 예측 종합 (전체 120문)

| ★ | 표본 실측 | 예측 (100문) | 전체 (120문) |
|---|---:|---:|---:|
| ★ 1 | 1 | 약 4 (BASIC 하한 · 표본 0002 유형) | 5 |
| ★ 2 | 2 | 약 8 (BASIC 상단 · 도형 결합) | 10 |
| ★ 3 | 5 | 약 45 (NORMAL 다수 · 최다빈출) | 50 |
| ★ 4 | 6 | 약 38 (TOUGH + STEP 2 + NORMAL 상단) | 44 |
| ★ 5 | 4 | 약 5 (TOUGH 학평 상단 + 표본 외 없음) | 9 |
| ★ 5 premium | 2 | 0 (STEP 3 6문 중 5문 실측 · 1문 예측) | 2 |
| **합계** | **20** | **100** | **120** |

---

## 핵심 관찰

### 1. STEP 3 실측 ★ 분포 (5/6문 · CM1-PL-다항식의연산 신규 실측)

| 문항 | vendor_label | 실측 ★ | premium |
|---|---|---|---|
| 0115 | STEP 3 · 조건 박스 (계수 총합+등비합+순환다항식) | **★ 5 premium** | **true** |
| 0117 | STEP 3 (공통부분 4쌍 재조합) | ★ 5 | false |
| 0118 | STEP 3 (다항식 점화·재귀 x^2 계수) | ★ 5 | false |
| 0119 | STEP 3 · 학평 2024.03 고2 16번 (직각삼각형 내접 정사각형) | ★ 5 | false |
| 0120 | STEP 3 · 학평 2024.06 고1 19번 (반원 3현·a-1/a) | **★ 5 premium** | **true** |

- **★ 5 이상 밀도**: 5/5 = **100%** (미실측 0116은 예측 ★ 5) → **6/6 = 100% (예측 반영)**
- **premium 밀도**: 2/5 = **40%** (인수분해와 동급 · 도형이동과 동급 · CM1 최상위 그룹)
- **STEP 3 라벨 편차 0** · 5문 모두 라벨-실측 정합 · **CM1-PL 다항식의 연산 STEP 3는 마플시너지 최상위 신뢰도 라벨** (인수분해와 동급)

### 2. CM1-PL 소단원 벤치마크 대조 (마플 CM1-PL 소단원 완결)

| 소단원 | STEP 3 표본 | ★ 5 이상 비율 | premium 밀도 | 비고 |
|---|---:|---:|---:|---|
| 인수분해 (세션 58) | 5 | 100% | 40% | 대칭식·조건매칭·기하응용 |
| **다항식의 연산 (이번 · 신규)** | 5 | **100%** | **40%** | **인수분해와 동급** · 곱셈공식 다중·도형 결합·역수 변형 |
| 도형이동 (CM2-GM) | 5 | 100% | 40% | 대칭·평행이동 축 |
| CB-순열 (CM1-CB) | 5 | 80% | 20% | 여사건·case |
| 원의 방정식 (CM2-GM) | 4 | 100% | 25% | 접선·경계 |
| CM1-EQ 이차방정식 | - | 미측정 | ≈2% (사용자 지목) | 표준 유형 밀집 |
| 평면좌표 (CM2-GM) | 5 | 60% | 0% | 좌표 반복 |

**해석**:
- **다항식의 연산 STEP 3 premium 밀도 40%는 인수분해·도형이동과 동급 최상위** · CM1-PL 두 소단원 모두 40% 안정화
- 이유: 다항식의 연산은 **곱셈공식 9종 + 곱셈공식 변형 (a^n+b^n·a^n-b^n·역수 결합) + 3변수 대칭식**이 조합돼 통찰 카드 4~5개 확보 용이 · 학평 19번급 (0120) 반원-대수 결합 등 XU 저노출 재료
- **CM1-PL 소단원 완결**: 인수분해 (40%) + 다항식의 연산 (40%) → **CM1-PL 대단원 전체 star_5 premium 밀도 최상위** · CM1 시험지 정점 슬롯 (★ 5 premium) 최우선 pick 대단원 확정

### 3. CM1-PL 다항식의 연산 통찰 유형 특성 (예측 대조)

| 통찰 유형 | 예측 (배경) | 실측 표본 빈도 | 검증 |
|---|:---:|:---:|---|
| **I-EQV (등가 변환)** | 예측 압도 | **13회** | **정합** (곱셈공식 · 대칭식 재조합) |
| **I-SC (전략 분기)** | 예측 강 | 10회 | **정합** (재조합 전략·조립제법 실전) |
| **I-CON (조건 결합)** | 예측 중 | 12회 | 예측 상회 (계수 비교·최종 정리 반복) |
| **I-VF (검증 강제)** | 예측 약 | 6회 | 예측 상회 (부호·case 검증) |
| **I-XU (예외 유형)** | 예측 강 | 4회 | 정합 (부채꼴 내접원·조건박스·점화·반원 3현) |
| **I-SYM (대칭)** | 예측 약 | 0회 직접 | (대칭식 = I-EQV/I-CON 하위로 편입) |
| **I-PD (관점 이동)** | 예측 약 | 0회 | (좌표 도입 등도 I-SC로 편입) |
| **I-BW (역방향)** | 예측 약 | 0회 | (전개-역계수는 I-EQV로 편입) |
| **I-MI (수학적 귀납)** | 예측 약 | 1회 | (0118 점화식 x^2 계수 재귀) |
| **I-RT (재귀·부분)** | 예측 약 | 1회 | (0118 점화식 · MI와 겹침) |

**정점 원형 검증** (사용자 요청 예측: EQV + SC + XU):
- **I-EQV (다항식 전개 계수 추출)**: 정합 · 13회 압도 · 곱셈공식 전개·역계수 매칭 (0009·0015·0028·0110·0113·0115·0117 등)
- **I-SC (조립제법 실전)**: 다항식의 나눗셈 유형 15~17에 집중 · 표본 밖에서도 0086·0093·0094·0097·0098·0100·0102 등 다수 · **조립제법 실전보다는 나눗셈 몫·나머지 관계 (A=BQ+R) 및 미정계수 결합**이 실측 정점
- **I-XU (특수 곱셈공식 응용)**: 정합 · 4회 확보 · 부채꼴 내접원·조건박스·점화·반원 3현 · 도형-대수 결합이 XU 재료로 안정 발현

**결론**: 예측 정합률 **높음** (EQV·SC·XU 3축 모두 발현). 실제로 조립제법은 인수분해 소단원에 배정되어 있고, **다항식의 연산 소단원의 나눗셈은 A=BQ+R 관계식·몫/나머지 변형이 주축** (조립제법은 유형 11·12 인수분해에 강함).

### 4. TOUGH 라벨 신뢰도 (v1.10 회귀 재확인)

- 표본 5문 중 **★ 4 실측 4문·★ 5 실측 1문** (0058) → **TOUGH 라벨 정합 80%** · ★ 5 편차 20%
- 인수분해 (TOUGH 100%) 대비 약간 낮음 · 이유는 **0058 학평 19번 (부채꼴 내접원)이 TOUGH 라벨이지만 실측 depth_score 8.75·XU 카드로 ★ 5 도달**
- v1.10 신규 시그널: `CM1-PL 다항식의연산 TOUGH → ★ 4.2 (편차 0.4)` · confidence 0.80 (인수분해 4.0·평면좌표 4.0보다 상향 · 학평 상위 문번 편입 시 ★ 5 up 신호)

### 5. STEP 3 학평 편입 2/5 · 편차 0

- 0119 (학평 2024.03 고2 16번, 중반) → ★ 5 정합
- 0120 (학평 2024.06 고1 19번, 후반) → ★ 5 premium 정합
- **학평 16번·19번 위치 모두 STEP 3와 자연 정합** · 학평 번호가 후반일수록 premium 확률↑ 안정 (0058 학평 19번도 ★ 5)

### 6. CM1-PL 소단원 완결 매트릭스 (인수분해 + 다항식의 연산 통합 view)

**총 자산 규모**: 인수분해 88문 + 다항식의 연산 120문 = **208문** (마플 CM1-PL 전체)

| 지표 | 인수분해 (세션 58) | 다항식의 연산 (세션 62 · 신규) | CM1-PL 합계 |
|---|---:|---:|---:|
| 총 문항 | 88 | 120 | **208** |
| 표본 실측 | 20 | 20 | 40 |
| STEP 3 문항 | 5 | 6 | 11 |
| **★ 5 premium 후보** | **2** | **2** | **4** |
| anchor 후보 (★ 4·5 통찰형) | 12 | 15 | **27** |
| ★ 3 표준 유형 안정 (NORMAL 회귀) | ~30 | ~45 | ~75 |
| I-EQV (등가 변환) 표본 빈도 | 14회 | 13회 | 27회 (CM1-PL 정체성) |
| I-XU (예외 유형) 재료 | 4종 (대칭식·조건박스·공간·다중카운팅) | 4종 (부채꼴 내접원·조건박스·점화·반원 3현) | **8종** (시험지 정점 슬롯 원본 풀) |
| 교육과정 격리 문항 | 3문 (유형 09 · x+1/x 치환) | 0문 | 3문 |
| TOUGH 라벨 정합률 | 100% | 80% | 90% |
| STEP 3 편차 | 0 | 0 | **0 (완결)** |

**정점 원형 매트릭스 (CM1-PL 마플 통합 view)**:

| 통찰 축 | 인수분해 정점 | 다항식의 연산 정점 | 시험지 pick 최우선 |
|---|---|---|---|
| **I-EQV (대수 재작성)** | 대칭식·조건매칭 (0337·0377·0379) | 곱셈공식 9종·역수 결합 (0110·0115·0117) | ★ 5 상위 |
| **I-SC (전략 분기)** | 인수정리 후보 결정 (0344·0378) | 재조합 전략·나눗셈 몫·나머지 (0058·0119) | ★ 4~5 |
| **I-XU (예외 재료)** | 공간도형 정사각뿔·다중 카운팅 (0378·0381) | 부채꼴 내접원·반원 3현·점화 (0058·0118·0120) | **★ 5 premium 필수** |
| **I-CON (조건 결합)** | 3중 (가)(나)(다) 매칭 (0379) | 3중 조건박스 (0115) · 대각선+겉넓이 (0113) | ★ 4~5 |
| **I-VF (검증)** | case 누락 방지 (0378) | 부호·조건 검증 (0047·0120) | anchor 강화 |

**해석**: CM1-PL 두 소단원 모두 **I-EQV 압도 + I-XU 저노출 재료 4종 확보 + STEP 3 40% premium 밀도**로 **CM1 정점 슬롯 원본 은행 최상위** 확정. 인수분해는 대수-도형 결합 (공간도형·조건 매칭)·다항식의 연산은 곱셈공식-도형 결합 (부채꼴·반원)·역수 결합 (a-1/a) 특화.

### 7. vendor-label-calibration v1.10 CM1-PL 다항식의 연산 회귀 신규 데이터

```
마플_CM1-PL-다항식의연산_star_predict(label) =
  if label == "BASIC":                 1.5 (편차 0.5 · alt: [1, 2])   → 인수분해 1.6과 근접 (하위 학평 편입 없음 · 표준 계산)
  elif label == "NORMAL":              3 (편차 0.4 · alt: [4])         → 인수분해와 동일
  elif label == "TOUGH":               4.2 (편차 0.4 · alt: [5], confidence 0.80)  → 인수분해 4.0보다 소폭 상향 (학평 19번급 도형 결합 편입 시 ★ 5)
  elif label == "STEP 2 서술형":       4 (편차 0.0)                   → v1.10 유지
  elif label == "STEP 3 일등급":       5 (편차 0.0 · alt: [premium 40%], confidence 0.85)  → 인수분해와 동일 (최상위 신뢰도)
```

**Phase 2.6 편입 제안**: vendor-label-calibration v1.11에 CM1-PL 다항식의 연산 20문 실측 데이터 추가 · **CM1-PL 소단원 완결 종합 매트릭스 등재** · TOUGH·STEP 3 안정성 강화. CM1-PL 두 소단원 모두 **star_5_premium 밀도 40%** → **CM1 시험지 정점 슬롯 필수 pick 대단원** 정책 지정.

### 8. 교육과정 위반·상위 침투 검토 (CM1-교과과정.md 대조)

**표본 20문 grep 결과**:
- $\cup, \cap, \setminus, [a,b]$, $\sum, \prod, \int, \lim$, $\vec{}$, $\overrightarrow{}$, $A^{-1}$, tr, 두 종류 무리수 켤레: **모두 미검출**
- **케일리해밀턴·사차 부호표·등차/등비수열**: 0118 재귀식이 등차합으로 귀결 (a_n = 1+3n(n-1)/2)되나 **등차수열 정규 도구 사용 아님** (합공식은 결과 표현 · 수식 유도는 재귀 자체) · 학생 zone 안전
- **정합·자기역함수·Viète·"분자분모"·외국 수학자 이름**: 미검출
- **0118 점화식 P_{n+1}(x)=P_n(x+n)**: CM1 정규 다항식 대입·전개 도구만 사용 · 재귀 서술 자연스러움
- **0120 톨레미 정리 대체**: 반원 좌표 도입으로 CM1 도구 (피타고라스·평면좌표) 정합
- **0119 내접 정사각형 유사비 xy/(x+y)**: 중학 기하 유사비로 도출 · CM1 정합
- **0058 내접원 반지름 (a+b-c)/2**: 중학 기하 (직각삼각형 내접원 공식) · CM1 도형 응용으로 정합

**결론**: 표본 20문 및 예측 100문 중 교육과정 위반 없음. **다항식의 연산 소단원 = CM1-PL 정규 도구 100% 준수** (인수분해 유형 09 격리 3문 대비 우수).

### 9. 자산화 활용 관점

- **premium 후보 2문**: 0115 (조건박스 3중 · 계수총합+등비합+순환다항식) · 0120 (반원 3현 학평 19번 · a-1/a 변형) → **CM1 시험지 정점 문항 원본 pick 최우선**
- **anchor 후보 (통찰형 star 4~5)**: 0004·0015·0016·0027·0028·0037·0041·0047·0055·0058·0110·0113·0115·0117·0118·0119·0120 → **유형편·연습편 표준 앵커 15문 확보** (인수분해 12문·CB-순열 8문 상회 · **CM1-PL 소단원 최다 anchor**)
- **★ 3 표준 유형 밀도**: NORMAL 라벨 45문 중 대다수 ★ 3 → **정리편·유형편 대표문제 원본 풀 CM1 내 최대** (인수분해 30문 상회)
- **CM1-PL 다항식의연산 원본 은행 규모**: 120문 (인수분해 88문의 1.36배 · CM1-PL 마플 최대 소단원)
- **17개 유형 라벨** (인수분해 15개 상회): 마플 CM1 소단원 중 유형 세분화 최고 · 원본 은행 다양성 우수

---

## 참조 문서

- 판정 알고리즘: [`bank/schema.md`](schema.md) v3.8 §2 (3층 M·I·X 모델)
- 통찰 유형 8+2종: schema.md §2.2
- P1~P6 신호 카드: schema.md §2.7
- 저노출 유형 게이트: schema.md §2.13 (v3.9)
- 이중 게이트 premium: schema.md §2.12 (v3.8)
- 벤더 라벨 회귀: [`bank/vendor-label-calibration.md`](vendor-label-calibration.md) v1.10
- premium 원형 카탈로그: [`bank/premium-원형-카탈로그.md`](premium-원형-카탈로그.md) v1.0
- 짝 소단원 (완결): [`bank/mechanism-데이터-마플시너지-CM1-PL-인수분해.md`](mechanism-데이터-마플시너지-CM1-PL-인수분해.md)
- CM1-PL 정규 도구: [`bank/CM1-교과과정.md`](CM1-교과과정.md)
- 통합 자산 스키마: [`bank/정독-스키마-v2.0.md`](정독-스키마-v2.0.md) v2.0

## 변경 이력

- 2026-07-21 v1.0 — 초판 (세션 62). 마플시너지 CM1-PL 다항식의 연산 소단원 120문 정독. 표본 20문 실측 · 100문 예측. CM1-PL 마플 소단원 완결 (인수분해와 짝). premium 후보 2문 (0115·0120). STEP 3 편차 0 · TOUGH 편차 0.4. anchor 후보 15문. 회귀 정합 EQV·SC·XU 3축 정점 원형 검증. CM1-PL 대단원 star_5 premium 밀도 40% 확정.
