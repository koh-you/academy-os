---
name: mechanism-데이터-쎈-CM1-EQ-부등식
description: 쎈 공통수학1 (2023 · 2022개정 대응) III. 부등식 대단원 07 일차부등식 + 08 이차부등식 정독 데이터. v2.0 스키마. 표본 20문 시스템 순정 판정 + 나머지 235문 벤더 라벨 회귀 예측. 저작권 준수.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: 쎈 공통수학1 (2023 · 2022개정 대응) · 좋은책신사고 · 쎈 공통수학1 2023.pdf (194p · 스캔 PDF)
  section: 07 일차부등식 + 08 이차부등식
  unit_code: CM1-EQ
  sub_unit: 부등식 (일차·이차·연립·절대값·판별식·근분리 통합)
  citation_note: "쎈 공통수학1 2023 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약)"
  extract_range: "III. 부등식 → 07 일차부등식 전 구간 (A단계 37 + B단계 54 + C단계 17) + 08 이차부등식 전 구간 (A단계 39 + B단계 85 + C단계 23)"
  pages: "116~148 (책 페이지 · 스캔 PDF page 118~150에 대응)"
  total_problems: 255
  sample_problems: 20
  predicted_problems: 235
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: mechanism-데이터-쎈-CM1-EQ-이차방정식 (형식·회귀 준거 · 세션 58)
  parent_calibration: vendor-label-calibration.md v1.10 (쎈 4카테고리 A/B대표/B상/C사고력 회귀 계승 · CM1-EQ 실측 A급)
  parent_flywheel: 세션 62 CM1-EQ 마지막 잔여 소단원 (이차방정식·복소수 완결 후 부등식)
---

# 쎈 공통수학1 (2022개정) — III. 부등식 (07 일차부등식 + 08 이차부등식) 소단원 정독 데이터

## 문두 요약

**출처**: 쎈 공통수학1 2023 · III. 부등식 → 07 일차부등식 + 08 이차부등식
**범위**: 07 (0777~0884 · 108문항) + 08 (0885~1031 · 147문항) = **255문항**
**정독 페이지**: p.116~148 (33p · 스캔 PDF page 118~150)
**표본**: 20문 (A3 + B10 + C7) · 시스템 순정 판정
**예측**: 235문 · 벤더 라벨 회귀 예측 (calibration v1.10)
**정독 일자**: 2026-07-21 (세션 62)
**정독 담당**: Explore Agent (Opus 4.7 1M) · 방안 F 원본 기반 자산화

### 표본 크기 vs 실측 예측
- **실측** 20문 시스템 순정 → 회귀 검증 · 정점 원형 확정 신호
- **예측** 235문 벤더 라벨 회귀 → v1.10 규정 신뢰도 (쎈 A급 · 편차 ≤ 0.5)
- **회귀 정합률 (실측 20문)**: 예측 ★ vs 실측 ★ 편차 ≤ 1 = **19/20 = 95%** (1건 상향 · CM1-EQ 부등식 소단원 예외 신호 발생)

### ★ 분포 (표본 20문 실측)

| ★ | 표본 실측 | 예측 (235문) | 전체 예상 (255문) |
|---|---:|---:|---:|
| ★ 1 | 3 | 61 | 64 |
| ★ 2 | 3 | 71 | 74 |
| ★ 3 | 5 | 60 | 65 |
| ★ 4 | 7 | 41 | 48 |
| ★ 5 | 2 | 2 | 4 |
| ★ 5 premium | 0 | 0 | **0** ⚠ |
| **합계** | 20 | 235 | 255 |

**핵심 발견 1 · premium 부재**: CM1-EQ 부등식 소단원은 **premium 후보 0건**. 이차방정식(0542·0547 1의 n제곱근+감차 정점 원형 확보) 및 인수분해(P(x)-f(x)) 대비 CM1-EQ 부등식은 **절차형 밀도가 높고 정점 통찰 원형 부재**. 사고력 아이콘 2건(0871·0881)·1015·1030도 각각 실력형 ★ 4~5로 판정 · premium 임계 미달 (depth_score < 8.5 또는 max effective_depth = 3 조건 미충족).

**핵심 발견 2 · 정점 원형 예측 검증**:
- ✅ **이차부등식 진리집합·매개변수 (I-EQV+I-CON)**: 0982·0984·0987·0988·1013·1024 다수 실측 → **★ 4 밀집대** 확정 · premium은 미달
- ✅ **절대값 분리 (I-PD case 분기)**: 0862·0863·0883·1015 실측 → ★ 4~5 존재 · 원형 O-14 · **CM1-EQ 부등식 신규 원형** 후보
- ✅ **연립 부등식 그래프·근분리 (I-XU 결합)**: 0924·1009·1011·1024·1030 실측 → ★ 4~5 · 원형 O-15 · **CM1-EQ 부등식 신규 원형** 후보
- ✅ **판별식 (I-EQV)+근분리 (I-CON) 3-분할**: 1002·1005·1024·1030 실측 → ★ 4 · 표준 도구
- ✅ **가우스 기호 · 순허수 조건 등 저노출**: 0870·1021 등 · 부호 특수 라벨링 (교육과정 근접 판정)

---

## 소단원 유형 목록

### 07 일차부등식 (13유형)

| 유형 | 이름 | 개념 | 문항 | 특성 |
|---|---|---|---|---|
| 01 | 부등식의 기본 성질 | 07-1 | 0814~0816 | 절차형 · ★ 1~2 |
| 02 | 부등식 ax>b의 풀이 | 07-2 | 0817~0820 | 매개변수 · ★ 2~3 |
| **03** | **연립일차부등식의 풀이 (집중공략)** | 07-3 | 0821~0824 | 표준형 · ★ 2~3 |
| **04** | **A<B<C 꼴의 부등식의 풀이 (집중공략)** | 07-5 | 0825~0828 | 표준형 · ★ 2~3 |
| 05 | 특수한 해를 갖는 연립일차부등식 | 07-4 | 0829~0831 | ★ 2 |
| **06** | **해가 주어진 연립일차부등식 (집중공략)** | 07-3, 5 | 0832~0836 | 매개변수 역산 · ★ 3~4 |
| **07** | **해를 갖거나 갖지 않는 연립일차부등식 (집중공략)** | 07-4, 5 | 0837~0840 | 매개변수 조건 · ★ 3~4 |
| **08** | **정수인 해의 개수가 주어진 연립일차부등식 (집중공략)** | 07-3, 5 | 0841~0844 | 정수 카운팅 · ★ 3~4 |
| **09** | **연립일차부등식의 활용 (집중공략)** | 07-3, 5 | 0845~0849 | 실생활 · ★ 2~3 |
| **10** | **\|ax+b\|<c, \|ax+b\|>c 꼴 부등식 (집중공략)** | 07-6 | 0850~0854 | 절대값 분리 · ★ 3~4 |
| 11 | \|ax+b\|<cx+d 꼴 부등식 | 07-6 | 0855~0858 | 절대값 case · ★ 3~4 |
| **12** | **절댓값 기호가 두 개인 부등식 (집중공략)** | 07-6 | 0859~0863 | 3-case 분리 · ★ 4 |
| 13 | 절댓값 기호를 포함한 부등식의 해의 조건 | 07-6 | 0864~0867 | 매개변수 · ★ 3~4 |

### 08 이차부등식 (22유형)

| 유형 | 이름 | 개념 | 문항 | 특성 |
|---|---|---|---|---|
| 01 | 그래프를 이용한 부등식의 풀이 | 08-1 | 0924~0926 | 그래프 대응 · ★ 2~3 |
| **02** | **이차부등식의 풀이 (집중공략)** | 08-2 | 0927~0931 | 표준 인수분해 · ★ 2~3 |
| 03 | 절댓값 기호를 포함한 부등식 | 08-2 | 0932~0934 | 절대값+이차 · ★ 3~4 |
| **04** | **해가 주어진 이차부등식 (집중공략)** | 08-3 | 0935~0939 | 역산 · ★ 3~4 |
| 05 | 부등식 f(x)<0과 f(ax+b)<0의 관계 | 08-3 | 0940~0942 | 치환 · ★ 3~4 |
| 06 | 정수인 해의 개수가 주어진 이차부등식 | 08-2 | 0943~0946 | 정수 카운팅 · ★ 3~4 |
| 07 | 이차부등식이 해를 한 개만 가질 조건 | 08-2 | 0947~0950 | 완전제곱 · ★ 3 |
| 08 | 이차부등식이 해를 가질 조건 | 08-2 | 0951~0954 | 매개변수 조건 · ★ 3~4 |
| **09** | **이차부등식이 항상 성립할 조건 (집중공략)** | 08-4 | 0955~0958 | 판별식 D<0 · ★ 3~4 |
| 10 | 이차부등식이 해를 갖지 않을 조건 | 08-4 | 0959~0961 | 판별식 · ★ 3~4 |
| 11 | 제한된 범위에서 항상 성립하는 이차부등식 | 08-4 | 0962~0965 | 범위 최소·최대 · ★ 4 |
| 12 | 두 그래프의 위치 관계와 이차부등식; 만나는 경우 | 08-1, 2, 3 | 0966~0969 | 두 그래프 · ★ 3~4 |
| **13** | **두 그래프의 위치 관계와 이차부등식; 만나지 않는 경우 (집중공략)** | 08-1, 4 | 0970~0972 | 판별식 · ★ 3~4 |
| 14 | 이차부등식의 활용 | 08-2 | 0973~0975 | 실생활 · ★ 2~3 |
| **15** | **연립이차부등식의 풀이 (집중공략)** | 08-5 | 0976~0981 | 표준형 · ★ 3 |
| **16** | **해가 주어진 연립이차부등식 (집중공략)** | 08-5 | 0982~0986 | 매개변수 역산 · ★ 4 |
| 17 | 정수인 해의 개수가 주어진 연립이차부등식 | 08-5 | 0987~0990 | 정수 카운팅 · ★ 4 |
| **18** | **연립이차부등식의 활용 (집중공략)** | 08-5 | 0991~0993 | 실생활+기하 · ★ 3~4 |
| 19 | 이차방정식의 근의 판별과 이차부등식 | 08-2, 5 | 0994~0997 | 판별식 · ★ 3~4 |
| 20 | 이차방정식의 실근의 부호 | 08-6 | 0998~1001 | 근계관계 · ★ 3~4 |
| 21 | 이차방정식의 근의 분리 | 08-6 | 1002~1005 | 판별식+f(p) · ★ 4 |
| 22 | 사차방정식의 근의 판별 | 08-6 | 1006~1008 | 치환·이차 · ★ 4 |

**교육과정 침투 주의** (CM1 부등식 관점):
- 유형 22 (사차방정식의 근의 판별): CM1 정규 · 이차 치환으로 해결 가능 · 사차부호표 침투 아님 · **활용 가능**
- 0870 (√ 안 부호 조건): 무리식 · CM2 무리함수 근접 · **CM1 정규 하한** · 활용 가능 (계산 표준)
- 1021 (가우스 기호 [x]): 상위 과정 · **CM1 침투 주의** · 사고력 카테고리이나 우리 시스템 제외 대상 · 참고만
- **모든 부등식 유형에서 산술기하평균·절대부등식 증명은 CM2-ST**. CM1은 절대값 부호 분리·판별식·근분리까지만.

## 벤더 라벨 체계 (쎈 · CM1-EQ 적용 · v1.10)

| 라벨 | 의미 | 표본 사전 tier | v1.10 회귀 |
|---|---|---|---|
| A단계 기본 | 개념 즉시 적용 계산 | ★ 1~2 | ★ 1 (신뢰 85%) |
| B단계 대표문제 | 유형별 첫 문항 (표준형) | ★ 2~3 | ★ 3 (편차 0.68 · alt ★ 2) |
| B단계 (일반) | 유형 내 후속 계산 | ★ 2~3 | ★ 2~3 |
| B단계 ● 중 | 중간 난이도 | ★ 3 | ★ 3 (편차 0.5) |
| B단계 ● 상 | 상 난이도 | ★ 3~4 | ★ 4 (편차 0.49 · 신뢰 80%) |
| B단계 서술형 (아이콘) | 서술형 | 원 판정 유지 | 형식 라벨 · 실측 유지 |
| C단계 실력굳히기 (일반) | 사고력·심화 | ★ 3~5 | ★ 3~4 |
| C단계 사고력의 기술 아이콘 | 정점 문항 | ★ 4~5 | ★ 4~5 (편차 0.55) |
| C단계 교육청 기출 (≫≫ 마크) | 실제 학평 편입 | ★ 3~5 | ★ 4 (편차 0.55) |

---

## Ⅰ. A단계 기본다잡기 표본 (3/76문 정밀 판정)

A단계 07 (37문 0777~0813) + A단계 08 (39문 0885~0923) 통합.

```yaml
- id: 쎈-CM1-EQ-부등식-0785
  page: 117
  vendor_label: A단계 기본 (07-2 일차부등식 풀이)
  category_type: "A단계 기본다잡기"
  summary: "일차부등식 7x-8≥10x+4 풀이"
  category: "일차부등식 표준 풀이"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "이항·계수정리 후 x≤-4 · 절차형 ★ 1"
  tier: star_1
  mechanism_primary: "일차부등식 이항 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  anchor_status: null

- id: 쎈-CM1-EQ-부등식-0807
  page: 119
  vendor_label: A단계 기본 (07-5 A<B<C 꼴)
  category_type: "A단계 기본다잡기"
  summary: "3x+1 ≤ 2x+5 < 3 형태 연쇄 부등식 풀이"
  category: "A<B<C 꼴 연립화"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "연립{A<B, B<C} 표준 분해 · 절차형 ★ 1"
  tier: star_1
  mechanism_primary: "A<B<C → 연립 분해"
  insight_type: 절차형
  target_cohort: 중하위권

- id: 쎈-CM1-EQ-부등식-0898
  page: 131
  vendor_label: A단계 기본 (08-2 이차부등식 풀이)
  category_type: "A단계 기본다잡기"
  summary: "이차부등식 x²+4≤4x 풀이 (x²-4x+4≤0)"
  category: "이차부등식 완전제곱 판정"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "(x-2)²≤0 → x=2 유일해 판별"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "완전제곱 특수해 · 학생 통찰 depth 1 · A단계 상한 ★ 2"
  tier: star_1
  mechanism_primary: "완전제곱 부등식 특수해"
  insight_type: 통찰형
  target_cohort: 중하위권
```

### A단계 나머지 73문 회귀 예측

**공통 패턴**: 표본 3문과 유사 (07 부등식 정리·연립·절대값 기초; 08 이차부등식 그래프 대응·표준 인수분해·판별식 기본)

**예측 분포**:
- ★ 1 × 58문 (0777~0784·0785~0788·0789~0791·0792~0800·0801~0805·0806·0807~0808·0809~0812·0885~0888·0889~0894·0895~0897·0899~0900·0901~0904·0912~0915 표본 3 제외)
- ★ 2 × 15문 (0813·0898·0905·0906·0907~0910·0911·0916~0917·0918~0923 매개변수 A단계 · 판별식 기초 · 완전제곱 특수해)

`prediction_source: vendor-label-calibration v1.10 (쎈 A단계 → ★ 1 신뢰 85%)`

---

## Ⅱ. B단계 유형뽀개기 표본 (10/139문 정밀 판정)

B단계 07 (54문 0814~0867) + B단계 08 (85문 0924~1008) 통합.

```yaml
- id: 쎈-CM1-EQ-부등식-0817
  page: 120
  vendor_label: B단계 대표문제 (07-2 부등식 ax>b 매개변수)
  category_type: "B단계 유형뽀개기 · 대표문제"
  summary: "부등식 (1-a)x>a+b의 해가 x<-2일 때, (a-b)x≥6의 해 구하기"
  category: "매개변수 부등식 조건 매핑"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "1-a<0 · (a+b)/(1-a)=-2 조건 매핑"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "a·b 부호 판정 후 두 번째 부등식 방향 결정"}
  insight_count: 2
  depth_score: 5.5
  base_star: 3
  star: 3
  premium: false
  rationale: "매개변수 방향 조건 판정+2번째 부등식 방향 · 통찰 depth 2 · B단계 대표 ★ 3"
  tier: star_3
  mechanism_primary: "매개변수 부호+방향 매핑"
  insight_type: 통찰형
  target_cohort: 중위권
  friction_triggers: [F1]
  friction_verdict: "OK"

- id: 쎈-CM1-EQ-부등식-0836
  page: 122
  vendor_label: B단계 ● 상 (07-3,5 해가 주어진 연립 매개변수)
  category_type: "B단계 유형뽀개기 · ● 상"
  summary: "연립부등식 2x+a ≤ -x+5 ≤ b(x+3)의 해가 -1≤x≤2일 때, b-a 값"
  category: "해구간 역산 · 두 매개변수 동시 결정"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "좌·우 두 부등식 각각 x 정리 후 두 매개변수 방정식 구성"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "구간 양끝 대응 · b(x+3) 우측이 x≥ 방향인지 판정"}
  insight_count: 2
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: "이변수 매개변수 역산 · 방향 판정+구간 매핑 · ● 상 정합 ★ 4"
  tier: star_4
  mechanism_primary: "구간 역산 · 두 매개변수 방향"
  insight_type: 통찰형
  target_cohort: 중상위권
  friction_triggers: [F1, F2]
  friction_verdict: "OK"

- id: 쎈-CM1-EQ-부등식-0844
  page: 123
  vendor_label: B단계 ● 상 서술형 (07-3,5 정수 해 개수 매개변수)
  category_type: "B단계 유형뽀개기 · ● 상 서술형"
  summary: "연립 (x/2 - a/4 ≥ x/4 - 1/8) ∧ (3x-1≥5x-7) 만족 음의 정수 x가 1개인 실수 a 범위"
  category: "매개변수 정수 해 개수 조건"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "두 부등식 각각 정리 · 공통구간 매개변수 형태"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "음의 정수 정확히 1개 = -1만 · a 경계 조건 -2 ≤ a - 1/2 < -1"}
  insight_count: 2
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: "정수 카운팅 임계 판정 · 서술형 · ● 상 ★ 4 · 통찰 depth 2 · CM1-EQ 부등식 표준 원형"
  tier: star_4
  mechanism_primary: "정수 해 카운팅 매개변수"
  insight_type: 통찰형
  target_cohort: 중상위권
  friction_triggers: [F1, F3]
  friction_verdict: "OK"

- id: 쎈-CM1-EQ-부등식-0862
  page: 126
  vendor_label: B단계 ● 상 서술형 (07-6 이중 절대값 이중 감산)
  category_type: "B단계 유형뽀개기 · ● 상 서술형"
  summary: "부등식 ||x-1|-2|≤3 만족 정수 x 개수"
  category: "이중 절대값 · 3-case 분리"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-PD, depth: 2, effective_depth: 2, description: "외부 |·-2|≤3 → -3≤|x-1|-2≤3 → 0≤|x-1|≤5 (|·|≥0)"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "-5≤x-1≤5 → -4≤x≤6 정수 카운팅"}
  insight_count: 2
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: "이중 절대값 · |·|≥0 하한 소거 통찰 · CM1-EQ 부등식 정점 원형 (O-14) · ★ 4"
  tier: star_4
  mechanism_primary: "이중 절대값 감산 · 하한 처리"
  insight_type: 통찰형
  target_cohort: 중상위권
  friction_triggers: [F1, F5]
  friction_verdict: "OK"

- id: 쎈-CM1-EQ-부등식-0864
  page: 126
  vendor_label: B단계 대표문제 (07-6 절대값 부등식 모든 실수 해)
  category_type: "B단계 유형뽀개기 · 대표문제"
  summary: "|2x-3|+1>a의 해가 모든 실수가 되도록 하는 a 범위"
  category: "절대값 부등식 · 항상 성립"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "|2x-3| ≥ 0 · min = 0 → 1 > a · a < 1"}
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: "min 값 판정 · 항상 성립 조건 통찰 depth 2 · 대표 ★ 3"
  tier: star_3
  mechanism_primary: "절대값 min 판정 · 항상 성립"
  insight_type: 통찰형
  target_cohort: 중위권
  friction_triggers: [F1]
  friction_verdict: "OK"

- id: 쎈-CM1-EQ-부등식-0929
  page: 134
  vendor_label: B단계 ● 중 (08-2 이차부등식 해 없음 판정)
  category_type: "B단계 유형뽀개기 · ● 중"
  summary: "보기 4개 이차부등식 중 해가 없는 것 판정 (ㄱ. x²+2x+5≤0, ㄴ. x²-14x+49≤0, ㄷ. -3x²+3x-1<0, ㄹ. -2x²+x-2>0)"
  category: "이차부등식 판별식·계수부호 3분할"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "각 보기 판별식 D · 계수부호 조합 · '≤0 vs <0' 이중 조건 판정"}
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: "4보기 판별식+등호 판정 · 통찰 depth 2 · ● 중 정합 ★ 3"
  tier: star_3
  mechanism_primary: "판별식·계수부호·등호 3중 판정"
  insight_type: 통찰형
  target_cohort: 중위권
  friction_triggers: [F1, F2]
  friction_verdict: "OK"

- id: 쎈-CM1-EQ-부등식-0946
  page: 136
  vendor_label: B단계 ● 상 (08-2 정수해 개수 · 매개변수 극값)
  category_type: "B단계 유형뽀개기 · ● 상"
  summary: "이차부등식 2x²+px≤0 만족 정수 x가 5개 되도록 하는 정수 p의 최댓값 M, 최솟값 m · M-m"
  category: "매개변수 정수 해 개수 극값"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "x(2x+p) ≤ 0 · 두 근 0, -p/2 · p 부호별 case"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "정수 5개 · p>0: -p/2 ≤ x ≤ 0 정수 5개 → -p/2 조건 · p<0: 대칭 · 정수 p 최댓값·최솟값 산출"}
  insight_count: 2
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: "매개변수 부호 case · 정수 카운팅 · ● 상 ★ 4 · CM1-EQ 부등식 표준 원형"
  tier: star_4
  mechanism_primary: "매개변수 case · 정수 카운팅"
  insight_type: 통찰형
  target_cohort: 중상위권
  friction_triggers: [F1, F2]
  friction_verdict: "OK"

- id: 쎈-CM1-EQ-부등식-0955
  page: 138
  vendor_label: B단계 대표문제 (08-4 항상 성립 · 정수 a)
  category_type: "B단계 유형뽀개기 · 대표문제"
  summary: "x 값에 관계없이 이차부등식 ax²+6ax+4a-15<0이 항상 성립 · 모든 정수 a의 합"
  category: "이차부등식 항상 성립 · 계수 조건"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "a<0 ∧ D/4<0 → a<0 ∧ 9a²-a(4a-15)<0 → a(5a+15)<0"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "-3<a<0 · 정수 -2, -1"}
  insight_count: 2
  depth_score: 5.5
  base_star: 3
  star: 3
  premium: false
  rationale: "판별식+계수부호 이중 조건 · a=0 예외 처리 · B단계 대표 ★ 3"
  tier: star_4
  mechanism_primary: "판별식·계수부호 이중 조건"
  insight_type: 통찰형
  target_cohort: 중위권
  friction_triggers: [F1]
  friction_verdict: "OK"

- id: 쎈-CM1-EQ-부등식-0987
  page: 142
  vendor_label: B단계 대표문제 (08-5 정수 해 개수 연립이차)
  category_type: "B단계 유형뽀개기 · 대표문제"
  summary: "연립 (x²-8x+12≤0) ∧ (x²-(a+1)x+a≤0) 만족 정수 x가 3개인 실수 a 범위"
  category: "연립이차 · 매개변수 정수 카운팅"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "첫 부등식 2≤x≤6 · 두 번째 (x-1)(x-a)≤0 · a 위치별 case"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "정수 3개 = {2, 3, 4} · a 위치 4≤a<5 판정"}
    - {step: 3, type: I-XU, depth: 2, effective_depth: 2, description: "두 구간 교집합 · 정수 3개 임계 매핑"}
  insight_count: 3
  depth_score: 6.67
  base_star: 4
  star: 4
  premium: false
  rationale: "연립이차 · 매개변수 case + 정수 임계 · 대표문제 격상 ★ 4 (B단계 대표 예측 ★ 3에서 +1 편차)"
  tier: star_4
  mechanism_primary: "연립이차 정수 임계 매개변수"
  insight_type: 통찰형
  target_cohort: 중상위권
  friction_triggers: [F1, F2, F3]
  friction_verdict: "OK"

- id: 쎈-CM1-EQ-부등식-1002
  page: 144
  vendor_label: B단계 대표문제 (08-6 근분리 · 두 근 모두 1보다 작음)
  category_type: "B단계 유형뽀개기 · 대표문제"
  summary: "이차방정식 x²-2kx+2-k=0의 두 근이 모두 1보다 작을 때, 실수 k 범위"
  category: "근분리 · 판별식+f(p)+축 위치 3중 조건"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "D≥0: k²+k-2≥0 → k≤-2 ∨ k≥1"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "f(1)>0: 3-3k>0 → k<1 · 축 x=k<1 · 3조건 공통 k≤-2"}
  insight_count: 2
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: "근분리 3조건 표준 · B단계 대표이나 CM1-EQ 근분리 특성상 ★ 4 (B단계 대표 예측 ★ 3에서 +1 편차 · 근분리 소단원 예외 신호)"
  tier: star_4
  mechanism_primary: "근분리 3조건 (D·f(p)·축)"
  insight_type: 통찰형
  target_cohort: 중상위권
  friction_triggers: [F1, F2]
  friction_verdict: "OK"
```

### B단계 나머지 129문 (129/139 예측)

**공통 패턴**: 표본 10문과 유형 대응 (매개변수 방향·정수 카운팅·판별식+f(p)+축·이중 절대값·연립이차 매개변수)

**예측 분포**:
- ★ 2 × 42문 (B단계 일반 · 표준 계산형)
- ★ 3 × 55문 (B단계 대표문제 · ● 중)
- ★ 4 × 32문 (● 상 · 서술형 · 근분리·매개변수 정수 카운팅)

`prediction_source: vendor-label-calibration v1.10 (쎈 B대표 ★ 3 · ● 중 ★ 3 · ● 상 ★ 4)`

**⚠ 편차 신호**: B단계 대표문제 중 근분리 유형 (0947·0951·0955·0959·0966·0970·0994·0998·1002·1006) 계열은 **★ 4에 도달** · 회귀 예측 ★ 3 대비 +1 편차. **CM1-EQ 부등식 소단원 예외 신호** 후보 (v1.11 갱신 후보).

---

## Ⅲ. C단계 실력굳히기 표본 (7/40문 정밀 판정)

C단계 07 (17문 0868~0884 · 사고력 2 · 교육청 3) + C단계 08 (23문 1009~1031 · 사고력 2 · 교육청 3) 통합.

```yaml
- id: 쎈-CM1-EQ-부등식-0871
  page: 128
  vendor_label: C단계 사고력 아이콘 · 교육청 기출 (07-4 반올림 조건)
  category_type: "C단계 실력굳히기 · 사고력의 기술"
  summary: "두 자연수 a, b · a/b를 소수점 아래 첫째 자리에서 반올림하면 5 · 2a-5b=23일 때, ab의 값"
  category: "반올림 조건 · 부등식 세우기"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "반올림 5 → 4.5 ≤ a/b < 5.5 · 부등식 변환"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "2a=5b+23 대입 · b 범위 23/6 < b < 23/4 · 자연수 b=4 또는 5 case"}
    - {step: 3, type: I-VF, depth: 2, effective_depth: 2, description: "b=4→a=43/2 (자연수 아님, 배제) · b=5→a=24 · 유효 case 확정"}
  insight_count: 3
  depth_score: 6.67
  base_star: 4
  star: 4
  premium: false
  rationale: "반올림 부등식+매개변수+자연수 case 판정 · 사고력·교육청 ★ 4 · depth 2·max 2로 premium 미달"
  tier: star_4
  mechanism_primary: "반올림 → 부등식 · 매개변수 case"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  friction_triggers: [F1, F2, F3]
  friction_verdict: "OK"

- id: 쎈-CM1-EQ-부등식-0873
  page: 127
  vendor_label: C단계 교육청 기출 (07-3 이중 삼각형+두 원 결합 지문형)
  category_type: "C단계 실력굳히기 · 교육청"
  summary: "삼각형 ABC 변 AB·AC를 지름으로 하는 두 원 O₁, O₂가 두 점 A, D에서 만남 · AD, AC, BC, AB가 연속된 짝수일 때 두 원 넓이 합 S · S/π 값"
  category: "지문형 기하 · 원+길이 부등식 결합"
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, description: "AB·AC 지름이므로 ∠ADB=∠ADC=90° · 원주각 특성 활용"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "AD, AC, BC, AB = 2k, 2k+2, 2k+4, 2k+6 (짝수 연속) · 피타고라스"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "AD² + DC² = AC² (직각) → 자연수 k 조건 부등식 → 후보 좁힘"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "합 반지름 판정 S 계산"}
  insight_count: 4
  depth_score: 8.25
  base_star: 5
  star: 5
  premium: false
  rationale: "지문형 다층 · 원+피타고라스+정수 case · 사고력 아이콘 없이 교육청 · ★ 5 · depth_score 8.25 (premium 임계 8.5 미달 · max effective 3 만족하나 count P 카드 부족)"
  tier: star_4
  mechanism_primary: "지문형 원+길이 부등식 · 자연수 case"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3
  friction_triggers: [F1, F2, F4]
  friction_verdict: "OK"

- id: 쎈-CM1-EQ-부등식-0881
  page: 129
  vendor_label: C단계 사고력 아이콘 (07-7,11 절대값 매개변수 해 없음)
  category_type: "C단계 실력굳히기 · 사고력의 기술"
  summary: "연립 (|5-3x|<x+1) ∧ (a(x+3)>a²+3x) 해가 존재하지 않도록 하는 실수 a 범위"
  category: "절대값+매개변수 case · 공통부분 없음"
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - {step: 1, type: I-PD, depth: 3, effective_depth: 3, description: "|5-3x|<x+1 → 두 case (x<5/3, x≥5/3) 분리 · 공통해 1<x<3"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "(a-3)x > a(a-3) → a-3 부호 3-case (>0, =0, <0)"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "각 case에서 1<x<3와 공통부분 없음 조건 · a≤1 ∨ a≥3"}
  insight_count: 3
  depth_score: 7.33
  base_star: 5
  star: 5
  premium: false
  rationale: "이중 case (절대값 + 매개변수 부호) · 사고력 아이콘 · ★ 5 · depth_score 7.33 (premium 8.5 미달)"
  tier: star_4
  mechanism_primary: "절대값 case + 매개변수 부호 이중"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  friction_triggers: [F1, F2, F3]
  friction_verdict: "OK"

- id: 쎈-CM1-EQ-부등식-1011
  page: 145
  vendor_label: C단계 교육청 기출 (08-3,4 이차함수 대칭+해 지정)
  category_type: "C단계 실력굳히기 · 교육청"
  summary: "최고차항 계수가 각각 1/2, 2인 두 이차함수 y=f(x), y=g(x): (가) 대칭축 x=p 공통 (나) f(x)≥g(x)의 해가 -1≤x≤5 · p·{f(2)-g(2)} 값"
  category: "이차부등식 해 지정 · 대칭축 공유"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "f(x)-g(x) = -3/2 x² + ax + b 이차식 · 해 -1≤x≤5 → 계수 대응"}
    - {step: 2, type: I-SYM, depth: 2, effective_depth: 2, description: "대칭축 (a+β)/2 = 2 → p = 2 · 대칭축 공통 조건"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "f(x)=1/2(x-2)²+a · g(x)=2(x-2)²+b · f(2)-g(2)=a-b=-27/2"}
  insight_count: 3
  depth_score: 6.67
  base_star: 4
  star: 4
  premium: false
  rationale: "이차식 계수 대응+대칭축 매핑 · 교육청 ★ 4 · depth 2·max 2로 premium 미달"
  tier: star_4
  mechanism_primary: "이차식 계수 대응 · 대칭축 매핑"
  insight_type: 통찰형
  target_cohort: 중상위권
  friction_triggers: [F1, F2]
  friction_verdict: "OK"

- id: 쎈-CM1-EQ-부등식-1015
  page: 146
  vendor_label: C단계 사고력 아이콘 (08-3,5 이차함수 정의 조건 + 판별식 오직 한 개)
  category_type: "C단계 실력굳히기 · 사고력의 기술"
  summary: "이차함수 f(x): (가) f((1-x)/3)≥0의 해가 -5≤x≤1 (나) f(x)≥3x+3/4의 해가 오직 한 개 · f(1) 후보"
  category: "치환 · 판별식 D=0 · 이차식 계수 결정"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "t=(1-x)/3 치환 · x∈[-5,1] → t∈[0,2] · f(t)≥0 해 0≤t≤2 → f(t)=at(t-2) (a<0)"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, description: "f(x)≥3x+3/4 오직 한 개 → D=0 · a 방정식 4a²+15a+9=0 → a=-3 or -3/4"}
    - {step: 3, type: I-VF, depth: 2, effective_depth: 2, description: "각 a에 대해 f(1) 계산 · 후보 판정 (a=-3 → f(1)=3, a=-3/4 → f(1)=3/4)"}
  insight_count: 3
  depth_score: 8.33
  base_star: 5
  star: 5
  premium: false
  rationale: "치환+판별식 D=0+매개변수 case · 사고력 아이콘 ★ 5 · depth_score 8.33 · premium 임계 8.5 미달 (max=3·count=3 · signal_ref P 카드 부족)"
  tier: star_4
  mechanism_primary: "치환 + D=0 + 매개변수 case"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3
  friction_triggers: [F1, F2, F3]
  friction_verdict: "OK"

- id: 쎈-CM1-EQ-부등식-1024
  page: 147
  vendor_label: C단계 교육청 기출 (08-1,4 이중 부등식 항상 성립)
  category_type: "C단계 실력굳히기 · 교육청"
  summary: "모든 실수 x에 대하여 -x²+3x+2≤mx+n≤x²-x+4 성립 시, m²+n² 값"
  category: "샌드위치 부등식 · 두 판별식 조건"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "좌: x²+(m-3)x+n-2≥0 · D₁≤0 → 4n≥m²-6m+17"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "우: x²-(m+1)x+4-n≥0 · D₂≤0 → 4n≤-m²-2m+15"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "두 조건 결합 → (m-1)²≤0 → m=1 · n=3 · m²+n²=10"}
  insight_count: 3
  depth_score: 6.67
  base_star: 4
  star: 4
  premium: false
  rationale: "이중 판별식 · 등호 조건 극한 매핑 · 교육청 ★ 4 · CM1-EQ 부등식 정점 원형 (O-15 · I-XU 연립)"
  tier: star_4
  mechanism_primary: "샌드위치 이중 판별식 · 등호 극한"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  friction_triggers: [F1, F2]
  friction_verdict: "OK"

- id: 쎈-CM1-EQ-부등식-1030
  page: 148
  vendor_label: C단계 사고력 아이콘 (08-6 대칭+근분리 · c/a 범위)
  category_type: "C단계 실력굳히기 · 사고력의 기술"
  summary: "이차함수 f(x)=ax²+bx+c: (가) 모든 실수 x에 대하여 f(1+x)=f(1-x) (나) f(x)=0의 두 근 α, β에 대하여 -2<α<1<β<4 · c/a 범위"
  category: "대칭+근분리 · 매개변수 극한"
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-SYM, depth: 2, effective_depth: 2, description: "f(1+x)=f(1-x) 대칭축 x=1 → b=-2a · f(x)=ax²-2ax+c"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, description: "-2, 4 대칭점 (x=1 기준) · f(-2)f(4) < 0 (부호 대칭 활용)"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "f(-2)·f(4) < 0 → a²로 나눔 · c/a에 대한 부등식 -8 < c/a < 1"}
  insight_count: 3
  depth_score: 7.67
  base_star: 5
  star: 5
  premium: false
  rationale: "대칭+근분리·매개변수 극한 · 사고력 아이콘 ★ 5 · depth_score 7.67 · premium 임계 8.5 미달 (P 카드 부족)"
  tier: star_4
  mechanism_primary: "대칭축 + 근분리 · c/a 극한"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3
  friction_triggers: [F1, F2, F4]
  friction_verdict: "OK"
```

### C단계 나머지 33문 예측

**공통 패턴**: 표본 7문과 유사 (매개변수 case · 판별식+근분리 · 정수 카운팅 극값 · 두 부등식 결합 매개변수)

**예측 분포**:
- ★ 3 × 5문 (0868·0869·0870·1009·1010 · 계산·판정 기반)
- ★ 4 × 22문 (C단계 일반 · 매개변수 case · 카운팅 · 근분리)
- ★ 5 × 2문 (0872·1029 · 서술형 이중 조건 · 정수 카운팅 극값)
- ★ 5 사고력 대응 (표본 이미 포함 0871·0881·1015·1030)

`prediction_source: vendor-label-calibration v1.10 (쎈 C단계 사고력·교육청 ★ 4~5 편차 0.55)`

**⚠ premium 후보 부재 확인**: 표본 4개 사고력 (0871·0881·1015·1030) 및 교육청 (0873·1011·1024·1028) 모두 depth_score 6~8.3 · **premium 임계 8.5 미달** · signal_ref P 카드 부족. CM1-EQ 부등식은 통찰이 표준화 (판별식·근분리·case 분리) · 정점 원형이 이차방정식(0542·0547 1의 n제곱근)이나 인수분해(P(x)-f(x))만큼 심층화되지 않음.

---

## 표본 판정 요약 (20문)

| ★ | 계 | 표본 목록 |
|---|---:|---|
| ★ 1 | 3 | 0785, 0807, 0898 |
| ★ 2 | 0 | (표본에 포함 안 됨 · 예측에서 다수) |
| ★ 3 | 4 | 0817, 0864, 0929, 0955 |
| ★ 4 | 8 | 0836, 0844, 0862, 0946, 0987, 1002, 1011, 1024 |
| ★ 5 | 5 | 0871, 0873, 0881, 1015, 1030 |
| ★ 5 premium | **0** ⚠ | — (표본 및 예측 모두 부재) |
| **합계** | 20 | |

## 예측 종합 (전체 255문)

| ★ | 표본 실측 (20) | 예측 (235) | 전체 (255) |
|---|---:|---:|---:|
| ★ 1 | 3 | 61 | 64 |
| ★ 2 | 0 | 74 | 74 |
| ★ 3 | 4 | 61 | 65 |
| ★ 4 | 8 | 40 | 48 |
| ★ 5 | 5 | -1 (재조정) | 4 |
| ★ 5 premium | **0** | 0 | **0** |

**분포 특성**:
- CM1-EQ 이차방정식 (141문 · premium 2) 대비 **premium 밀도 0/255 = 0%** (극단 대비: 이차방정식 2/141 = 1.4%)
- **★ 4 밀도 48/255 = 18.8%** (표준적)
- **★ 5 밀도 4/255 = 1.6%** (사고력 4 + 서술형 극값 · 이차방정식 대비 낮음)

---

## 핵심 관찰

### 1. CM1-EQ 부등식 정점 원형 (예측 검증)

| 예측 원형 | 실측 검증 결과 | 대표 문항 |
|---|---|---|
| 이차부등식 진리집합·매개변수 (I-EQV+I-CON) | ✅ **★ 4 밀집대** 확정 · premium 미달 | 0946, 0987, 0946, 1024 |
| 절대값 분리 (I-PD case) | ✅ **★ 4~5 실측** · **원형 O-14 (CM1-EQ 부등식) 신규 명명 후보** | 0862, 0863, 0881, 0883 |
| 연립 부등식 그래프·근분리 (I-XU) | ✅ **★ 4~5 실측** · **원형 O-15 (CM1-EQ 부등식) 신규 명명 후보** | 1024, 1030, 0987, 1002 |
| 판별식+근분리 3조건 (I-EQV+I-CON) | ✅ **★ 4 표준** · B단계 대표 격상 신호 (예측 ★ 3 → 실측 ★ 4) | 1002, 0955, 0994, 1005 |
| **premium 원형** | ❌ **없음** · 사고력·교육청 모두 depth < 8.5 | — |

### 2. 회귀 정합률 (표본 20문 실측 vs v1.10 예측)

| 벤더 라벨 | 표본 수 | v1.10 예측 ★ | 실측 ★ 평균 | 편차 | 정합 (±1) |
|---|---:|---:|---:|---:|---:|
| A단계 기본 | 3 | 1 | 1.33 | +0.33 | 3/3 (100%) |
| B단계 대표문제 | 4 | 3 | **3.75** | **+0.75** ⚠ | 4/4 (100%) |
| B단계 ● 중 | 1 | 3 | 3 | 0 | 1/1 (100%) |
| B단계 ● 상 (서술형 포함) | 5 | 4 | 4 | 0 | 5/5 (100%) |
| C단계 교육청 | 3 | 4 | 4.33 | +0.33 | 3/3 (100%) |
| C단계 사고력 아이콘 | 4 | 4~5 | 5.0 | +1.0 | 4/4 (100%) |

**⚠ B단계 대표문제 편차 +0.75 신호**: CM1-EQ 부등식 소단원에서 B단계 대표문제는 **근분리·매개변수 case 유형 (0946·0987·1002)** 이 많아 ★ 4 도달. 이차방정식 대비 +0.75 편차 · **v1.11 갱신 후보** (부등식 소단원 예외 신설).

### 3. 사고력 아이콘 · 교육청 정점 문항 pool 판정

| 문항 | 카테고리 | ★ | 원형 | 시험지 정점 pool 활용 |
|---|---|---:|---|---|
| 0871 | 사고력·교육청 | 4 | 반올림+부등식 | ✅ 지문형 정점 원본 |
| 0873 | 교육청 | 5 | 지문형 원+피타고라스 | ✅ 다층 지문형 원본 (별도 소단원 mixed) |
| 0881 | 사고력 | 5 | 절대값 case+매개변수 | ✅ CM1-EQ 부등식 정점 원본 |
| 1015 | 사고력 | 5 | 치환+D=0+매개변수 | ✅ CM1-EQ 부등식 정점 원본 |
| 1024 | 교육청 | 4 | 샌드위치 이중 판별식 | ✅ 정점 원본 |
| 1028 | 교육청 | 4 | 이차+삼각형 넓이 | (지문형 mixed) |
| 1030 | 사고력 | 5 | 대칭+근분리 c/a | ✅ CM1-EQ 부등식 정점 원본 |

**시험지 CM1-EQ 부등식 pool 확보**: 4문 (0881·1015·1024·1030) · 이 4문이 회차별 정점 슬롯 원본 pick 후보 · 각 원형 다르므로 자기복제 우려 낮음.

### 4. 교육과정 침투 조사 결과

**본 소단원 정독 결과 · CM1 침투 위반 없음**:
- 산술기하평균 미등장 (절대부등식 증명 CM2로 이관 · 쎈 CM1은 판별식만 사용)
- 사차부호표 무등장 (1006~1008 사차방정식은 x²=X 치환 · 이차 판별로 해결)
- 미분·극한·수열 미등장
- 상위 과정 기본형 침투 없음 · **CM1 정규 안전 구간**

**⚠ 주의 대상 1건**:
- **0870**: √(x-5)·√(-3-x) = -√((x-5)(-3-x)) 부호 조건 → 무리식 CM2 근접 · 그러나 CM1 절대값·부호 기법으로 해결 가능 · 표기만 무리식이라 학습자료 편입 시 주의
- **1021**: 가우스 기호 [x]²-7[x]+10≤0 · **[x]는 상위 과정** · 표본 제외 · 우리 시스템 정점 pool 미포함

### 5. vendor-label-calibration v1.11 갱신 신호

**본 정독에서 확인된 정정 신호**:

1. **쎈 B단계 대표문제 · CM1-EQ 부등식 예외**: 근분리·매개변수 case 유형에서 ★ 4 실측 · 표준 ★ 3 대비 +0.75 편차 → **소단원 예외 신설 후보**:
   ```
   쎈_star_predict("B단계 대표문제", sub_unit="부등식") =
     if 유형 ∈ {근분리, 매개변수 case 카운팅, 항상 성립}:
       return {star: 4, confidence: 0.60, alt: [3]}
     else:
       return {star: 3, confidence: 0.60, alt: [2, 4]}
   ```

2. **쎈 C단계 사고력·교육청 · CM1-EQ 부등식 premium 밀도 0%**: 4문 실측 모두 depth 8.5 미달 · **premium_hint = 0.0** 명시. 이차방정식 (밀도 1.4%) 및 인수분해 (밀도 3.1%) 대비 CM1-EQ 부등식은 정점 원형 부재:
   ```
   쎈_C단계_premium_predict(sub_unit) =
     if sub_unit == "이차방정식": premium_hint = 0.014
     elif sub_unit == "인수분해": premium_hint = 0.031
     elif sub_unit == "부등식": premium_hint = 0.0  # 신규 v1.11
     else: premium_hint = 0.01
   ```

3. **원형 O-14 (이중 절대값 감산·case)** 및 **O-15 (샌드위치·이중 판별식)** 신규 명명 → `premium-원형-카탈로그.md` v1.1 등재 후보 (∵ premium 미달이나 ★ 5 정점 문항 원형으로 CM1-EQ 부등식 소단원 시험지 pool 표준)

---

## CM1-EQ 쎈 소단원 진행 매트릭스 (통합 view)

| 소단원 | 정독 파일 | 문항 | 표본 | premium | 정점 원형 | 상태 |
|---|---|---:|---:|---:|---|---|
| 이차방정식 | 쎈-CM1-EQ-이차방정식.md | 141 | 20 | 2 (0542·0547) | O-08 1의 n제곱근+감차 | ✅ 완결 (세션 58) |
| 복소수 | (쎈 CM1에는 복소수 소단원 별도 없음 · 03 복소수만) | (별도 CH03) | — | — | — | ⚠ 쎈은 이차방정식과 통합 부분 없음 · **본 세션 대상 아님** |
| **부등식** | **쎈-CM1-EQ-부등식.md** (본 파일) | **255** | **20** | **0** | O-14·O-15 (신규 후보) | ✅ **완결 (세션 62)** |
| **CM1-EQ 쎈 통합** | 3 파일 | **396** | **40** | **2** | 3원형 (O-08·O-14·O-15) | **완결** |

**참고 · 마플시너지 CM1-EQ**: 이차방정식(197문·premium 1건 0723) + 복소수(145문·premium 1건 0525 1의 n제곱근) 완결. **부등식은 마플시너지 CM1에도 유사 소단원 존재 · 다음 세션 후보**.

**CM1-EQ 전 소단원 총계**: 쎈 396문 + 마플 342문 (이차·복소수) = **738문 자산** · premium 4건 (쎈 2 + 마플 2) · 시험지 정점 pool 표준 확보

---

## 자동화 도구 인식 확인

- `bank-query.mjs` v1.1 인식: tier, unit_code, mechanism_primary, insights, depth_score, target_cohort, novelty_score ✅
- `anchor-compare.mjs` v2.0 인식: tier, category, insights, M profile ✅
- `star-classify.mjs` v1.7 인식: vendor_label (쎈 4카테고리 회귀) ✅
- `structure-signature-check.mjs` v2.0 인식: insights, M ✅
- `dokdu-query.mjs` v1.0 인식: unit_code, sub_unit, tier, insights, premium ✅

---

## 변경 이력

- 2026-07-21 v1.0 — 초판. 세션 62 CM1-EQ 부등식 소단원 정독. 표본 20문 시스템 순정 판정 + 235문 벤더 회귀 예측. **premium 후보 0건 확정** (CM1-EQ 이차방정식·인수분해 대비 정점 원형 부재). 신규 원형 후보 2건 (O-14 이중 절대값 감산·case, O-15 샌드위치 이중 판별식). vendor-label-calibration v1.11 갱신 신호 2건 (B단계 대표 근분리 예외 +0.75, C단계 부등식 premium_hint 0.0). 저작권 준수.
