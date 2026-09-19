---
name: mechanism-데이터-수능특강-2027-수학II
description: EBS 2027학년도 수능특강 수학 II (미적분Ⅰ) 정독 데이터 · 층화 표본 35문 시스템 순정 판정. 7단원 (함수의 극한·연속·미분계수와 도함수·도함수의 활용 1·2·부정적분과 정적분·정적분의 활용) × Level 1·2·3 균형 표본. 저작권 준수 · 스키마 v2.0 준거.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-22
  source: EBS 2027학년도 수능특강 수학영역 수학Ⅱ · 2027 수능특강 수학 II.pdf + EBS_2027_수능특강_수학영역_수학Ⅱ_정답과해설.pdf
  section: 전 7단원 (미적분Ⅰ = 수학Ⅱ 매핑)
  unit_code: 미적분Ⅰ
  sub_unit: 함수의극한·함수의연속·미분계수와도함수·도함수의활용1·도함수의활용2·부정적분과정적분·정적분의활용
  citation_note: EBS 수능특강 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 시그니처 3원소만)
  extract_range: "01 함수의 극한 (p.12~16) · 02 함수의 연속 (p.26~30) · 03 미분계수와 도함수 (p.40~44) · 04 도함수의 활용⑴ (p.54~58) · 05 도함수의 활용⑵ (p.68~72) · 06 부정적분과 정적분 (p.82~86) · 07 정적분의 활용 (p.96~100) · 각 단원 Level 1 기초 연습 + Level 2 기본 연습 + Level 3 실력 완성 전체"
  pages: "4~100 (본편 총 168p 중 문제부만 · 개념정리·대표기출 제외)"
  total_problems: 171   # 26009-0001 ~ 26009-0171
  sample_problems: 35
  predicted_problems: 136
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: null   # 수학II (미적분Ⅰ) 최초 정독 · CM1/CM2 스코프 밖 참조 자산
  schema_version: 정독-스키마-v2.0
  purpose: 세션 68 자료 확장 · 미적분Ⅰ (고2 심화·고3 수능) 원본 은행 확보 · 상위 과정 대비 문두 시그니처 회귀 자산화 · CM1·CM2 침투 방지 grep 대상 (미적분 용어·기법 판별용)
  scope_note: |
    본 자산은 우리 교재 (CM1·CM2) 스코프 밖. 다음 용도로만 활용:
      1. 상위 과정 (미적분Ⅰ) 문제 시그니처 카탈로그 (침투 방지 grep)
      2. 미래 확장 시 (수능특강 유형편) 원본 은행 candidate
      3. 학생 진로 지도용 (수능형 문제 난이도 감각)
    ★ 판정은 미적분Ⅰ 관점 (극한·미분·적분 도구 기본 습득 후)
---

# EBS 2027 수능특강 수학Ⅱ (미적분Ⅰ) — 정독 데이터

**출처**: EBS 2027학년도 수능특강 수학영역 수학Ⅱ (2026 발행)
**범위**: 전 7단원 · 개념정리 + Level 1 기초 연습 + Level 2 기본 연습 + Level 3 실력 완성 + 대표 기출문제 (본편 168p)
**정독 페이지**: p.4~100 (문제부 중심)
**총 문항 수**: **171문항** (26009-0001~26009-0171)
**표본**: 35문 (단원별 5문 = L1×2 + L2×2 + L3×1 균형) · 시스템 순정 판정
**정독 일자**: 2026-07-22 (세션 68)

## 문두 metadata 요약

| 항목 | 값 |
|---|---|
| 표본 크기 | 35 |
| 실측 ★ 분포 | ★ 2×6 · ★ 3×11 · ★ 4×12 · ★ 5×5 · **premium×1** |
| premium 후보 개수 | 1 (0122 · 사차함수 극값 4개 순서·닫힌구간 M+m 부호 조합) |
| 표본 대표 유형 | 극한 좌우극한·미정계수·연속·미분가능성·최대최소·정적분 정의·넓이·역함수 활용 |
| 회귀 정합률 (예측 vs 실측) | 미적용 (최초 정독 · 벤더 회귀 표본 축적 단계) |

**Level → 예상 star 회귀 (표본 기반 초안)**:
- Level 1 기초 연습 → star_2·star_3 혼재 (기초 계산·정의 대입 위주)
- Level 2 기본 연습 → star_3·star_4 혼재 (다단계 미정계수·연속 조합)
- Level 3 실력 완성 → star_4·star_5 (킬러 · 조건 다층 · premium 후보 포함)

---

## Ⅰ. 01 함수의 극한 표본 (5문)

```yaml
- id: 수능특강-2027-수학II-01-0009
  page: 12
  vendor_label: Level 1 기초 연습
  category_type: Level 1 기초 연습
  summary: |
    함수 y=f(x)의 그래프가 주어졌을 때 x → 1- 좌극한 값과 x → 0+에서 f(x-1)의
    우극한 값을 합쳐 구하는 문제.
  category: 좌·우극한 그래프 판독 · 치환 극한
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - {step: 1, type: I-CON, depth: 1, effective_depth: 1, description: "그래프에서 x=1 좌측 y값 판독"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "치환 x-1=t → t → -1+에서 f(t) 판독"}
  insight_count: 2
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  tier: star_2
  target_cohort: 중하위권
  insight_type: 통찰형
  mechanism_primary: 그래프 판독 + 치환 좌·우극한
  rationale: |
    Level 1 기초 · 좌우극한 정의 대입 · depth 1 두 단계 · ★ 2
  vendor_calibration_signal: {L5_confidence: 0.80}

- id: 수능특강-2027-수학II-01-0011
  page: 12
  vendor_label: Level 1 기초 연습
  category_type: Level 1 기초 연습
  summary: |
    lim(x²-1)f(x)=3 (x→1)일 때 lim(x³-1)f(x) (x→1) 값을 구하는 문제.
  category: 극한 성질 인수분해 대체
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "x³-1 = (x-1)(x²+x+1) 인수분해 · x²-1과 공통 (x-1) 매칭"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "극한 곱 성질로 계산"}
  insight_count: 2
  depth_score: 4.5
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중위권
  insight_type: 통찰형
  mechanism_primary: 다항식 인수분해 · 극한 성질
  rationale: |
    다항식 인수분해 + 극한 성질 · depth 2 EQV · ★ 3 (기초 연습 상단)
  vendor_calibration_signal: {L5_confidence: 0.85}

- id: 수능특강-2027-수학II-01-0018
  page: 14
  vendor_label: Level 2 기본 연습
  category_type: Level 2 기본 연습
  summary: |
    상수 a와 분기함수 f(x)에 대해 f(k)+lim(x→k-)f(x)=2a+2를 만족시키는
    모든 실수 k의 합을 구하는 문제 (조건 다중).
  category: 분기함수 좌극한·함숫값 조합 방정식
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "x=a에서 좌극한과 함숫값 분리 · 케이스 x<a·x=a·x>a"}
    - {step: 2, type: I-RT, depth: 2, effective_depth: 2, description: "각 케이스별 방정식 → k 후보 산출"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "k 후보 합산"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 분기함수 좌극한 케이스 · 근 카운트
  rationale: |
    다중 케이스·역방향 근 탐색 · depth 2 두 축 · ★ 4
  vendor_calibration_signal: {L5_confidence: 0.85}

- id: 수능특강-2027-수학II-01-0020
  page: 14
  vendor_label: Level 2 기본 연습
  category_type: Level 2 기본 연습
  summary: |
    최고차항의 계수 1인 이차함수 f(x)에 대해 g(x)를 f(x)/4x 분기 정의.
    직선 y=t와 y=g(x) 교점 개수를 h(t)라 할 때 좌우극한 부등식과
    합 조건 h(-2)+h(1)+h(4)=6을 만족시키는 f(7)의 값.
  category: 이차함수·분기함수 교점 개수 조합
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, description: "g(x) 분기 정의 · f(x)와 4x 대소로 그래프 조각 구성", signal_ref: [P2]}
    - {step: 2, type: I-VF, depth: 2, effective_depth: 2, description: "y=t 수평선 교점 개수 h(t) 함수화"}
    - {step: 3, type: I-BW, depth: 3, effective_depth: 3, description: "h(0-)<h(0+) + h합=6 조건 → f(x) 결정 역추론", signal_ref: [P3]}
    - {step: 4, type: I-CON, depth: 1, effective_depth: 1, description: "f(7) 계산"}
  insight_count: 4
  depth_score: 8.25
  base_star: 5
  star: 5
  premium: false
  tier: star_5
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 분기함수 · 교점 개수 함수·역추론
  rationale: |
    3층 조건 · 역추론 + 개수 함수 · depth 3 두 축 · ★ 5 (premium 임계 조건 4개 미충족)
  vendor_calibration_signal: {L5_confidence: 0.85}

- id: 수능특강-2027-수학II-01-0026
  page: 16
  vendor_label: Level 3 실력 완성
  category_type: Level 3 실력 완성
  summary: |
    실수 p에 대한 분기함수 f(x)와 g(t)=lim(x→t+)f(x)+lim(x→t-)f(x+2)를 정의.
    ㄱ. g(-1)=0 · ㄴ. p>0에서 t 증가 시 g 증가 · ㄷ. g(m)>g(m+1)>g(m+2)를 만족시키는 정수 m 존재하도록 하는 정수 p의 최댓값 -4 진위 판정.
  category: 좌우극한 함수 · 보기 진위·정수 최댓값
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, description: "g(t) 정의를 f(x)의 좌우극한 조합으로 개편"}
    - {step: 2, type: I-VF, depth: 3, effective_depth: 3, description: "ㄴ 단조성 조건 → 분기점 x=1 주변 좌극한·우극한 대소 판정", signal_ref: [P2]}
    - {step: 3, type: I-BW, depth: 3, effective_depth: 3, description: "ㄷ 정수 m 존재 · 정수 p 최댓값 · 3항 감소 케이스 분석", signal_ref: [P3, P5]}
  insight_count: 3
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: false
  tier: star_5
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 좌우극한 함수 · 보기 진위 3중 판정
  rationale: |
    depth 3 세 축 · 정수 최댓값 역추론 · ★ 5 (premium 임계 insight_count≥5 미충족)
  vendor_calibration_signal: {L5_confidence: 0.80}
```

---

## Ⅱ. 02 함수의 연속 표본 (5문)

```yaml
- id: 수능특강-2027-수학II-02-0034
  page: 26
  vendor_label: Level 1 기초 연습
  category_type: Level 1 기초 연습
  summary: |
    실수 전체 집합에서 연속인 두 함수 f(x),g(x)가 lim(f+g)=5, lim(2f-g)=7일 때
    f(2)-g(2) 값을 구하는 문제 (x→2).
  category: 극한 성질 · 연립 방정식
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "연속 → lim = 함숫값 · 두 식으로 f(2)·g(2) 연립"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "f(2)-g(2) 계산"}
  insight_count: 2
  depth_score: 4.5
  base_star: 2
  star: 2
  premium: false
  tier: star_2
  target_cohort: 중하위권
  insight_type: 통찰형
  mechanism_primary: 극한 성질 · 연립 계산
  rationale: |
    연속 정의 · 극한 성질 대입 · 계산 · ★ 2
  vendor_calibration_signal: {L5_confidence: 0.85}

- id: 수능특강-2027-수학II-02-0038
  page: 27
  vendor_label: Level 1 기초 연습
  category_type: Level 1 기초 연습
  summary: |
    함수 f(x)가 모든 실수 x에 대해 (x+1)f(x)=x³+3x²+a를 만족.
    상수 b에 대해 f(b)=2+lim(x→b)f(x)일 때 b+f(b)의 값.
  category: 연속·불연속점 인수분해 · 극한 vs 함숫값 차
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "x=-1에서만 나누기 불능 → 우변이 x+1 인수 포함 조건 · a=2"}
    - {step: 2, type: I-BW, depth: 2, effective_depth: 2, description: "f(x)=x²+2x+2 (x≠-1) · b=-1에서 f(b) vs 극한 차 2 조건 → f(-1)=lim+2"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "b+f(b) 계산"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 다항식 나눗셈 · 불연속점 처리
  rationale: |
    분모 0 조건 · 불연속점 함숫값 차 · depth 2 두 축 · ★ 4
  vendor_calibration_signal: {L5_confidence: 0.80}

- id: 수능특강-2027-수학II-02-0043
  page: 28
  vendor_label: Level 2 기본 연습
  category_type: Level 2 기본 연습
  summary: |
    분기함수 f(x)=ax²+4x (x≤2) / 3x+2 (x>2)에 대해 f(x)f(x-1)이 x=b에서만
    불연속일 때 |ab|의 값.
  category: 분기함수 곱 · 유일 불연속점 조건
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "f(x)f(x-1) 불연속 후보 x=2, x=3 (f와 f(x-1)의 이음점)"}
    - {step: 2, type: I-BW, depth: 3, effective_depth: 3, description: "두 후보 중 하나만 불연속 · 다른 하나는 극한 일치 → a 조건 역추론", signal_ref: [P3]}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "b 확정 · |ab| 계산"}
  insight_count: 3
  depth_score: 7.5
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 분기함수 곱 · 유일 불연속 조건 역추론
  rationale: |
    두 후보 이음점 중 유일 조건 · depth 3 BW · ★ 4
  vendor_calibration_signal: {L5_confidence: 0.80}

- id: 수능특강-2027-수학II-02-0047
  page: 29
  vendor_label: Level 2 기본 연습
  category_type: Level 2 기본 연습
  summary: |
    자연수 k, 실수 a, f(x)=(k/60)(x²-4x)에 대해 g(x)=-x (x≤1) / f(ax) (x>1)
    가 실수 전체에서 연속 · 1보다 큰 a의 개수 2 조건을 만족시키는 모든 k의 합.
  category: 분기함수 매개변수 개수 조건
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "x=1 이음점 연속 조건 → f(a)=-1 · a 방정식"}
    - {step: 2, type: I-BW, depth: 3, effective_depth: 3, description: "f(a) = -1 → a에 관한 이차방정식 · 근 2개 (1보다 큰) 조건 → k 범위 역추론", signal_ref: [P3]}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "k 자연수 합"}
  insight_count: 3
  depth_score: 7.5
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 이음점 연속 · 근 개수 조건
  rationale: |
    depth 3 BW · 근 개수 역추론 · ★ 4
  vendor_calibration_signal: {L5_confidence: 0.80}

- id: 수능특강-2027-수학II-02-0050
  page: 30
  vendor_label: Level 3 실력 완성
  category_type: Level 3 실력 완성
  summary: |
    상수 a(≠0)와 분기함수 f(x). 실수 t에 대해 f(x)=f(t)의 서로 다른 실근 개수를
    g(t)라 할 때 (가) g(t) t=0 연속 (나) lim(t→k-)g(t)≠lim(t→k+)g(t)를 만족시키는
    k 값이 3과 상수 b뿐 → 12·|a+b|.
  category: 분기 이차함수 · 근 개수 함수·불연속점 조건
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, description: "y=f(x) 그래프 조각 (좌: 완전제곱 x²+2x+1 · 우: 최고차 a인 이차)", signal_ref: [P2]}
    - {step: 2, type: I-VF, depth: 3, effective_depth: 3, description: "y=f(t) 수평선 교점 → g(t)의 계단 함수 도식화"}
    - {step: 3, type: I-BW, depth: 3, effective_depth: 3, description: "g의 t=0 연속 조건 + 불연속점 정확히 t=3,b 조건 → a·b 역추론", signal_ref: [P3, P5]}
    - {step: 4, type: I-CON, depth: 1, effective_depth: 1, description: "12·|a+b| 계산"}
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  tier: star_5
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 근 개수 함수 g(t) · 계단 불연속 조건
  rationale: |
    depth 3 세 축 · 계단 함수 조건 · ★ 5 (premium 임계 insight_count≥5 미충족)
  vendor_calibration_signal: {L5_confidence: 0.85}
```

---

## Ⅲ. 03 미분계수와 도함수 표본 (5문)

```yaml
- id: 수능특강-2027-수학II-03-0057
  page: 40
  vendor_label: Level 1 기초 연습
  category_type: Level 1 기초 연습
  summary: |
    이차함수 f(x)에 대해 x=-1에서 x=2까지 평균변화율 3, 곡선 y=f(x) 위의
    점 (2,4)에서 접선의 기울기 -3일 때 f(1) 값.
  category: 평균변화율 + 미분계수 → 계수결정
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "f(x)=ax²+bx+c 3원 방정식 (평균변화율·f(2)·f'(2))"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "연립 → f(1) 계산"}
  insight_count: 2
  depth_score: 4.5
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중위권
  insight_type: 통찰형
  mechanism_primary: 미분계수 정의 · 3원 연립
  rationale: |
    평균변화율 + 접선 · 3원 연립 · ★ 3 (기초 연습 후반)
  vendor_calibration_signal: {L5_confidence: 0.85}

- id: 수능특강-2027-수학II-03-0060
  page: 40
  vendor_label: Level 1 기초 연습
  category_type: Level 1 기초 연습
  summary: |
    두 그래프가 (-1,2), (1,4)에서만 만나는 일차함수 f와 이차함수 g에 대해
    h(x)=f(x-1) (x≤0) / g(x)-2 (x>0)이 실수 전체에서 미분가능할 때 h'(1) 값.
  category: 미분가능 조건 · 분기함수
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "두 점 교점 · f, g 계수 결정 (2식 각각)"}
    - {step: 2, type: I-BW, depth: 2, effective_depth: 2, description: "x=0에서 좌·우 함숫값·미분값 일치 → 미결정 계수 확정"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "h'(1)=g'(1) 계산"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 미분가능 조건 · 분기 경계
  rationale: |
    두 교점 + 이음점 미분가능 · depth 2 두 축 · ★ 4
  vendor_calibration_signal: {L5_confidence: 0.80}

- id: 수능특강-2027-수학II-03-0064
  page: 42
  vendor_label: Level 2 기본 연습
  category_type: Level 2 기본 연습
  summary: |
    함수 f(x)가 x=1에서 미분계수 존재 · lim(x→1) (f(x²)-f(x))/(x²-1)=12일 때 f'(1) 값.
  category: 극한의 치환 → 미분계수
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, description: "x²-1=(x-1)(x+1) 분리 · f(x²)-f(x)=[f(x²)-f(1)]-[f(x)-f(1)]", signal_ref: [P2]}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "각각 (x²-1)·(x-1) 미분계수 형태로 변환 · x²-1 = (x-1)(x+1)로 공약분"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "f'(1)(2·1)-f'(1)/2 형태 · f'(1)=12·… 계산"}
  insight_count: 3
  depth_score: 7.0
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 미분계수 정의 · 변형·분해
  rationale: |
    미분계수 변형 · depth 3 EQV · ★ 4
  vendor_calibration_signal: {L5_confidence: 0.80}

- id: 수능특강-2027-수학II-03-0071
  page: 43
  vendor_label: Level 2 기본 연습
  category_type: Level 2 기본 연습
  summary: |
    실수 전체에서 미분가능한 f(x)와 g(x)=x²+3x+a (-1<x<1) / f(x) (그 외).
    실수 전체 미분가능 · h(x)=f(x)g(x), h'(-1)+h'(1)=12 조건에서 g(0) 값.
  category: 분기 미분가능 · 곱함수 미분값 조합
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "x=±1 이음 · 좌·우 함숫값·미분값 일치 → f(±1), f'(±1) 관계식"}
    - {step: 2, type: I-BW, depth: 3, effective_depth: 3, description: "h'(x)=f'g+fg' · h'(-1)+h'(1)=12 조건 → 미결정 계수 역추론", signal_ref: [P3]}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "g(0)=a 계산"}
  insight_count: 3
  depth_score: 7.5
  base_star: 5
  star: 5
  premium: false
  tier: star_5
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 분기 미분가능 · 곱함수 미분 역추론
  rationale: |
    depth 3 BW + 계수 역추론 · ★ 5 (premium 임계 미충족)
  vendor_calibration_signal: {L5_confidence: 0.80}

- id: 수능특강-2027-수학II-03-0074
  page: 44
  vendor_label: Level 3 실력 완성
  category_type: Level 3 실력 완성
  summary: |
    분기 f(x)=2 (|x|≤1) / -x² (|x|>1). P(t,f(t))와 단위원 위 점 Q의 PQ² 최대·최소를
    M(t), m(t)라 하고 g(t)=(M-m)². g가 미분불가능한 모든 t의 합을 α라 할 때
    g'(α-1/2)+g'(α+3/2) 값.
  category: 원과 곡선 거리·미분가능성·복합 함수
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - {step: 1, type: I-VF, depth: 3, effective_depth: 3, description: "P와 원까지 거리 최대·최소 시각화 · |x|≤1 케이스와 |x|>1 케이스 분리", signal_ref: [P2]}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, description: "M(t), m(t) 명시적 표현 · 케이스별 함수 도출"}
    - {step: 3, type: I-BW, depth: 3, effective_depth: 3, description: "g(t) 미분불가능 t 판별 · α 합 계산", signal_ref: [P3, P5]}
    - {step: 4, type: I-CON, depth: 2, effective_depth: 2, description: "g'(α±) 케이스별 미분 계산"}
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false
  tier: star_5
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 원과 곡선 거리 · 케이스 함수 미분가능성
  rationale: |
    depth 3 세 축 · 원과의 거리 시각화 정밀 · ★ 5 (premium 임계 count≥5 미충족)
  vendor_calibration_signal: {L5_confidence: 0.80}
```

---

## Ⅳ. 04 도함수의 활용⑴ 표본 (5문)

```yaml
- id: 수능특강-2027-수학II-04-0081
  page: 54
  vendor_label: Level 1 기초 연습
  category_type: Level 1 기초 연습
  summary: |
    곡선 y=x³+ax²+1 위의 점 (-1,3)에서의 접선과 수직인 직선이 두 점 (0,3), (1,b)를
    지날 때 a+b의 값 (a는 상수).
  category: 접선의 기울기 · 수직 직선
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-CON, depth: 1, effective_depth: 1, description: "y(-1)=3 → a 결정"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "f'(-1) 접선 기울기 · 수직선 기울기 = -1/f'(-1)"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "수직선 두 점 조건 → b 계산"}
  insight_count: 3
  depth_score: 5.33
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중위권
  insight_type: 통찰형
  mechanism_primary: 접선 · 수직 조건
  rationale: |
    접선·수직 계산 · depth 2 EQV · ★ 3
  vendor_calibration_signal: {L5_confidence: 0.85}

- id: 수능특강-2027-수학II-04-0085
  page: 55
  vendor_label: Level 1 기초 연습
  category_type: Level 1 기초 연습
  summary: |
    함수 f(x)=x³-|x-a|가 실수 전체 집합에서 증가하도록 하는 실수 a의 최솟값.
  category: 절댓값 미분·단조증가 조건
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "x<a와 x>a 케이스 분리 · f'(x)≥0 조건"}
    - {step: 2, type: I-BW, depth: 2, effective_depth: 2, description: "각 케이스 3x²-1≥0 · 3x²+1≥0 (자동) · x²≥1/3 임계 x 검토 · a의 임계값 산출"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "√ 형태 최솟값"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 절댓값 미분 · 단조 조건
  rationale: |
    케이스 미분 · depth 2 두 축 · ★ 4
  vendor_calibration_signal: {L5_confidence: 0.80}

- id: 수능특강-2027-수학II-04-0090
  page: 56
  vendor_label: Level 2 기본 연습
  category_type: Level 2 기본 연습
  summary: |
    자연수 a,b에 대해 f(x)=x³-ax²+b가 (가) f(0)f(1)f(2)<0 (나) f(0)f(2)f(3)<0
    조건에서 f(1) 값.
  category: 삼차함수 부호변화 · 자연수 조건
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "부호 조건 → 근이 (0,1) 또는 (1,2) 등 특정 구간 분포"}
    - {step: 2, type: I-BW, depth: 3, effective_depth: 3, description: "두 부호 조건 동시 만족 · 자연수 a,b 케이스 열거 → 유일 해", signal_ref: [P3]}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "f(1) 계산"}
  insight_count: 3
  depth_score: 7.5
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 부호 조건 · 자연수 열거
  rationale: |
    조건 두 겹 · 자연수 열거 · depth 3 BW · ★ 4
  vendor_calibration_signal: {L5_confidence: 0.80}

- id: 수능특강-2027-수학II-04-0094
  page: 57
  vendor_label: Level 2 기본 연습
  category_type: Level 2 기본 연습
  summary: |
    최고차항 계수 2인 이차 f, 삼차 g에 대해 (가) f 극솟값 -8 (나) lim(x→-1) f(x)g(x)/|x+1|³ 존재.
    f+g가 극댓값을 가질 때 f(2)+g(2) 값.
  category: 극한 존재 → 인수 조건 · 극값 조합
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, description: "극한 존재 → f(x)g(x) = (x+1)³·(상수) 인수 조건", signal_ref: [P2]}
    - {step: 2, type: I-BW, depth: 3, effective_depth: 3, description: "f 이차·g 삼차·(x+1)³ 인수분 · f 극솟값 조건 조합 → 계수 확정", signal_ref: [P3]}
    - {step: 3, type: I-BW, depth: 2, effective_depth: 2, description: "f+g 극댓값 조건 (부호 판별) · 유일 해"}
    - {step: 4, type: I-CON, depth: 1, effective_depth: 1, description: "f(2)+g(2)"}
  insight_count: 4
  depth_score: 8.25
  base_star: 5
  star: 5
  premium: false
  tier: star_5
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 극한 존재 인수 · 극값 조합
  rationale: |
    depth 3 두 축 · 다중 조건 조합 · ★ 5 (premium 임계 count≥5 미충족)
  vendor_calibration_signal: {L5_confidence: 0.85}

- id: 수능특강-2027-수학II-04-0097
  page: 58
  vendor_label: Level 3 실력 완성
  category_type: Level 3 실력 완성
  summary: |
    삼차 f(x)=x³+2x²+6x와 양수 t에 대해 f(t)-f(0)=tf'(c)를 만족시키는 0<c<t인
    c를 h(t)라 할 때 lim(t→0+) h(t)/t 값.
  category: 평균값 정리·극한 (미적분 도구 정밀)
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, description: "MVT: c 조건 · f'(c) 계산 → c의 명시식", signal_ref: [P2]}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "이차방정식 c² 관련 · t→0 극한 처리"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "h(t)/t 극한 계산"}
  insight_count: 3
  depth_score: 7.0
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 평균값 정리 · 극한 미세
  rationale: |
    MVT 활용 · depth 3 EQV · ★ 4 (Level 3 하단)
  vendor_calibration_signal: {L5_confidence: 0.75}
```

---

## Ⅴ. 05 도함수의 활용⑵ 표본 (5문)

```yaml
- id: 수능특강-2027-수학II-05-0106
  page: 68
  vendor_label: Level 1 기초 연습
  category_type: Level 1 기초 연습
  summary: |
    닫힌구간 [-2,2]에서 f(x)=2x³+9x²-24x-7의 최댓값과 최솟값 합.
  category: 폐구간 최대·최소 · 도함수 표
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - {step: 1, type: I-CON, depth: 1, effective_depth: 1, description: "f'(x)=6x²+18x-24 · 임계점 · 표"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "끝점·임계점 값 비교 → M+m"}
  insight_count: 2
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  tier: star_2
  target_cohort: 중하위권
  insight_type: 절차형
  mechanism_primary: 폐구간 최대·최소 표준 절차
  rationale: |
    표준 절차 · 통찰 없음 · ★ 2
  vendor_calibration_signal: {L5_confidence: 0.85}

- id: 수능특강-2027-수학II-05-0112
  page: 69
  vendor_label: Level 1 기초 연습
  category_type: Level 1 기초 연습
  summary: |
    수직선 운동 · x=t³-3t²+5t+1 · 속도 v=2인 순간 P의 위치.
  category: 위치·속도 · 방정식
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "v(t)=3t²-6t+5 · v=2 → t 방정식"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "t 대입 → 위치 계산"}
  insight_count: 2
  depth_score: 4.5
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중위권
  insight_type: 통찰형
  mechanism_primary: 속도·위치 관계
  rationale: |
    미분·이차방정식 · ★ 3
  vendor_calibration_signal: {L5_confidence: 0.85}

- id: 수능특강-2027-수학II-05-0116
  page: 70
  vendor_label: Level 2 기본 연습
  category_type: Level 2 기본 연습
  summary: |
    최고차 1인 사차 f와 g(t)=x≤t에서 f의 최솟값. g가 실수 전체에서 미분가능
    · {t | g'(t)=0} = {0} ∪ {t | t≥1}일 때 f(2)-f(0).
  category: 사차함수 최솟값 함수 · 미분가능 조건
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - {step: 1, type: I-VF, depth: 3, effective_depth: 3, description: "g(t) 형태: f의 지역 최솟값 vs 극솟값 관계 도식화", signal_ref: [P2]}
    - {step: 2, type: I-BW, depth: 3, effective_depth: 3, description: "g'=0 집합 조건 · f의 극점 구조 역추론", signal_ref: [P3, P5]}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "f(x) 계수 확정"}
    - {step: 4, type: I-CON, depth: 1, effective_depth: 1, description: "f(2)-f(0)"}
  insight_count: 4
  depth_score: 8.25
  base_star: 5
  star: 5
  premium: false
  tier: star_5
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 사차 최솟값 함수 · g' 집합 역추론
  rationale: |
    depth 3 두 축 · 극점 구조 역추론 · ★ 5 (premium 임계 count≥5 미충족)
  vendor_calibration_signal: {L5_confidence: 0.80}

- id: 수능특강-2027-수학II-05-0119
  page: 71
  vendor_label: Level 2 기본 연습
  category_type: Level 2 기본 연습
  summary: |
    자연수 k · P의 위치 x=(1/2)t⁴-kt³+27t. 출발 후 P가 운동방향 바꾸지 않도록 하는
    모든 k의 합.
  category: 사차 위치 · 속도 부호 유지
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "v(t)=2t³-3kt²+27 · 운동방향 유지 → v≥0 (또는 v≤0) t≥0"}
    - {step: 2, type: I-BW, depth: 3, effective_depth: 3, description: "삼차 v(t) ≥ 0 조건 · 극소 v_min ≥ 0 → k 범위", signal_ref: [P3]}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "자연수 k 합"}
  insight_count: 3
  depth_score: 7.5
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 속도 부호 유지 · 삼차 극소
  rationale: |
    depth 3 BW · 부호 유지 · ★ 4
  vendor_calibration_signal: {L5_confidence: 0.80}

- id: 수능특강-2027-수학II-05-0122
  page: 72
  vendor_label: Level 3 실력 완성
  category_type: Level 3 실력 완성
  summary: |
    최고차 1인 사차 f. (가) f'(-2)=f'(0)=f(0)=0 (나) [t,t+2] 폐구간 M(t),m(t)에 대해
    M(1)+m(2)>0. f'(p)=0을 만족시키는 자연수 p 존재 시 f(p) 값.
  category: 사차 · 극점 3개 · 이동 폐구간 M+m 부호
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, description: "f'(-2)=f'(0)=f(0)=0 → f 형태 축약 · 남은 극점 위치 x=r 미지수", signal_ref: [P2]}
    - {step: 2, type: I-VF, depth: 3, effective_depth: 3, description: "폐구간 [1,3], [2,4]의 최댓값·최솟값 도식화 · M+m 부호 검토", signal_ref: [P2]}
    - {step: 3, type: I-BW, depth: 3, effective_depth: 3, description: "M(1)+m(2)>0 조건 → r 범위 역추론 · 자연수 극점 p 존재 조건", signal_ref: [P3, P5]}
    - {step: 4, type: I-BW, depth: 3, effective_depth: 3, description: "r=3 확정 · f(p) 계산", signal_ref: [P3]}
    - {step: 5, type: I-CON, depth: 1, effective_depth: 1, description: "f(p) 값"}
  insight_count: 5
  depth_score: 8.6
  base_star: 5
  star: 5
  premium: true
  tier: star_5_premium
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 사차 · 이동 폐구간 M+m 부호 조합
  rationale: |
    premium 임계 3조건 (depth≥8.5·max=3·count≥5) 모두 충족 · signal_ref P2·P3·P5 다중 · ★ 5 premium
  vendor_calibration_signal: {L5_confidence: 0.85}
```

---

## Ⅵ. 06 부정적분과 정적분 표본 (5문)

```yaml
- id: 수능특강-2027-수학II-06-0132
  page: 82
  vendor_label: Level 1 기초 연습
  category_type: Level 1 기초 연습
  summary: |
    f(x)=4x³+ax²+5의 한 부정적분 F(x). F(1)+F(-1)=6, F(2)-F(-2)=4일 때 F(a) 값.
  category: 부정적분 · 대칭 성질 · 연립
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "F(x) 표준식 · F(1)+F(-1)에서 홀수차 소거·짝수차 남기"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "F(2)-F(-2)에서 홀수차 남기 · 미결정 상수·a 연립"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "F(a) 계산"}
  insight_count: 3
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중위권
  insight_type: 통찰형
  mechanism_primary: 대칭 성질 · 홀·짝수차 분리
  rationale: |
    부정적분 대칭 · depth 2 두 축 · ★ 3
  vendor_calibration_signal: {L5_confidence: 0.85}

- id: 수능특강-2027-수학II-06-0134
  page: 82
  vendor_label: Level 1 기초 연습
  category_type: Level 1 기초 연습
  summary: |
    도함수 f(x)=3x²+kx-2 · F(5)-F(2)=174일 때 상수 k 값.
  category: 정적분 정의 · 미정계수
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "F(5)-F(2) = ∫_{2}^{5} f dx · 정적분 계산 · k에 관한 일차식"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "k 값"}
  insight_count: 2
  depth_score: 4.5
  base_star: 2
  star: 2
  premium: false
  tier: star_2
  target_cohort: 중하위권
  insight_type: 통찰형
  mechanism_primary: 정적분 정의 (fundamental theorem)
  rationale: |
    정적분 정의 대입 · ★ 2
  vendor_calibration_signal: {L5_confidence: 0.85}

- id: 수능특강-2027-수학II-06-0140
  page: 84
  vendor_label: Level 2 기본 연습
  category_type: Level 2 기본 연습
  summary: |
    최고차 양수 f, 그 부정적분 F에 대해 F(x)=(f(x))²-36x⁴+26x³+7x²-5x가 성립.
    F(2) 값.
  category: 항등식 · 부정적분 조건 · 계수결정
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, description: "F'(x)=f(x) · 양변 미분 → f(x)=2f(x)f'(x)-144x³+78x²+14x-5 · 항등식", signal_ref: [P2]}
    - {step: 2, type: I-BW, depth: 3, effective_depth: 3, description: "f의 차수 · 최고차 계수 결정 (양수 조건) · 계수 확정", signal_ref: [P3]}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "F(2)=(f(2))²-36·16+... 계산"}
  insight_count: 3
  depth_score: 8.33
  base_star: 5
  star: 5
  premium: false
  tier: star_5
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 항등식 미분 · 계수 역추론
  rationale: |
    depth 3 두 축 · 미분 항등식 · ★ 5 (premium 임계 count≥5 미충족)
  vendor_calibration_signal: {L5_confidence: 0.80}

- id: 수능특강-2027-수학II-06-0142
  page: 84
  vendor_label: Level 2 기본 연습
  category_type: Level 2 기본 연습
  summary: |
    f(x)=x³-6x²+9x+2 · g(x)=∫_{1}^{x} (f(x)-f(t))(f(t))² dt.
    g가 x=a에서 극값 가질 때 f(a) 값.
  category: 파라미터 정적분·극값 조건
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, description: "g(x) = f(x)·∫(f(t))²dt - ∫f(t)(f(t))²dt · 상수 분리 후 미분", signal_ref: [P2]}
    - {step: 2, type: I-BW, depth: 3, effective_depth: 3, description: "g'(x) = f'(x)·∫(f(t))² dt · g' = 0 → f'(a)=0 or ∫=0 · 극값 조건 · f(a) 결정", signal_ref: [P3]}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 파라미터 정적분 미분 · 극값 조건
  rationale: |
    depth 3 두 축 · 파라미터 정적분 · ★ 4 (Level 2 상단 · count 2로 ★ 5 미달)
  vendor_calibration_signal: {L5_confidence: 0.80}

- id: 수능특강-2027-수학II-06-0148
  page: 86
  vendor_label: Level 3 실력 완성
  category_type: Level 3 실력 완성
  summary: |
    최고차 1인 사차 f. (가) ∫_{3}^{x} f'(t) dt = 0의 서로 다른 실근 개수 1
    (나) f는 x=0, x=m, x=n (m,n≠0)에서 극값 · 극댓값=0
    (다) y=f(x)는 원점을 지나지 않음. f(-1) 값.
  category: 사차 극값 3개·극댓값 0·정적분 근 1개
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, description: "∫_{3}^{x} f' dt = f(x)-f(3) · 실근 x=3만 → f(x)=f(3) 유일해", signal_ref: [P2]}
    - {step: 2, type: I-BW, depth: 3, effective_depth: 3, description: "사차 극점 3개 · 극댓값 0 · f(0)≠0 조건 조합 → f 계수 확정", signal_ref: [P3, P5]}
    - {step: 3, type: I-VF, depth: 3, effective_depth: 3, description: "그래프 시각화로 (가)·(나)·(다) 동시 만족 케이스 유일 판정", signal_ref: [P2]}
    - {step: 4, type: I-CON, depth: 1, effective_depth: 1, description: "f(-1) 계산"}
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  tier: star_5
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 사차 극값·정적분 조건 다중 조합
  rationale: |
    depth 3 세 축 · 3중 조건 통합 · ★ 5 (premium 임계 count≥5 미충족 · 4)
  vendor_calibration_signal: {L5_confidence: 0.85}
```

---

## Ⅶ. 07 정적분의 활용 표본 (5문)

```yaml
- id: 수능특강-2027-수학II-07-0156
  page: 96
  vendor_label: Level 1 기초 연습
  category_type: Level 1 기초 연습
  summary: |
    두 곡선 y=x³+2x²-x, y=x²+x로 둘러싸인 부분의 넓이.
  category: 두 곡선 사이 넓이 · 정적분
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "교점 x = -1, 0, 2 · 부호 확인"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "구간별 |차이| 정적분 · 합"}
  insight_count: 2
  depth_score: 4.5
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중위권
  insight_type: 통찰형
  mechanism_primary: 두 곡선 넓이 표준
  rationale: |
    교점 3개 · 부호 케이스 · ★ 3
  vendor_calibration_signal: {L5_confidence: 0.85}

- id: 수능특강-2027-수학II-07-0159
  page: 97
  vendor_label: Level 1 기초 연습
  category_type: Level 1 기초 연습
  summary: |
    f(x)=(1/8)x⁴ (x≥0)의 역함수 g. 두 곡선 y=f(x), y=g(x)로 둘러싸인 부분의 넓이.
  category: 역함수 대칭 · 넓이
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "역함수 대칭 y=x · f와 y=x 사이 넓이 두 배"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "교점 x=0, x=2 · ∫_{0}^{2} (x - x⁴/8) dx · ×2"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "계산"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 역함수 대칭 · 넓이 두 배
  rationale: |
    역함수 대칭 활용 · depth 2 두 축 · ★ 4
  vendor_calibration_signal: {L5_confidence: 0.85}

- id: 수능특강-2027-수학II-07-0163
  page: 98
  vendor_label: Level 2 기본 연습
  category_type: Level 2 기본 연습
  summary: |
    f(x)=(1/9)x³-(5/3)x²+6x · g(x)는 f(x) (x<a) / -x+a+f(a) (x≥a) 분기 미분가능.
    y=g(x) 그래프와 x축으로 둘러싸인 부분 넓이.
  category: 분기 미분가능 · 넓이 조합
  M: {s: 3, k: 3, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "x=a 이음점 · 함숫값 일치 + 미분값 일치 → a 결정 (f'(a)=-1)"}
    - {step: 2, type: I-VF, depth: 2, effective_depth: 2, description: "g의 x축 교점 확인 · 부호 구간 분리"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "각 구간 넓이 정적분·삼각형 넓이 합"}
    - {step: 4, type: I-CON, depth: 1, effective_depth: 1, description: "총 합"}
  insight_count: 4
  depth_score: 6.5
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 분기 미분가능 · 다구간 넓이
  rationale: |
    조건 다중 · 넓이 분할 · depth 2 · ★ 4
  vendor_calibration_signal: {L5_confidence: 0.80}

- id: 수능특강-2027-수학II-07-0165
  page: 99
  vendor_label: Level 2 기본 연습
  category_type: Level 2 기본 연습
  summary: |
    (가) 2≤x≤5에서 f(x)=-x²+8x-10 (나) f(x+3)=f(x)+3.
    y=f(x)와 y=x, x=0, x=60으로 둘러싸인 부분 넓이.
  category: 주기 이동 함수 · 반복 넓이
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, description: "f(x+3)=f(x)+3 · '경사 주기' · 한 주기 구간 [2,5]에서 f와 y=x 사이 넓이 표준화", signal_ref: [P2]}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "구간 [0,60] · 주기 3당 넓이 상수 · 반복 횟수 계산"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "총 합"}
  insight_count: 3
  depth_score: 7.0
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 경사 주기 함수 · 반복 넓이
  rationale: |
    depth 3 EQV · 경사 주기 · ★ 4
  vendor_calibration_signal: {L5_confidence: 0.85}

- id: 수능특강-2027-수학II-07-0169
  page: 100
  vendor_label: Level 3 실력 완성
  category_type: Level 3 실력 완성
  summary: |
    f(x)=|x|³-6x²+9|x|. f(x)=f(t)의 서로 다른 실근 개수 g(t).
    lim(t→a+)g(t)>g(a)인 a의 최솟값 p, lim(t→a-)g(t)>g(a)인 a의 최댓값 q에 대해
    y=f(x)와 x축, x=p, x=q로 둘러싸인 넓이.
  category: 우함수 · 근 개수 계단 함수·불연속점 · 넓이
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - {step: 1, type: I-VF, depth: 3, effective_depth: 3, description: "f(x)=|x|³-6x²+9|x| 우함수 그래프 · 극값 위치", signal_ref: [P2]}
    - {step: 2, type: I-BW, depth: 3, effective_depth: 3, description: "y=t 교점 개수 g(t) 계단 함수 · 불연속점 = f의 극값 · p, q 판정", signal_ref: [P3, P5]}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "구간 [p,q]에서 f와 x축 넓이 정적분"}
    - {step: 4, type: I-CON, depth: 1, effective_depth: 1, description: "총 넓이"}
  insight_count: 4
  depth_score: 8.25
  base_star: 5
  star: 5
  premium: false
  tier: star_5
  target_cohort: 상위권
  insight_type: 통찰형
  mechanism_primary: 근 개수 g(t) 계단 함수 · 넓이 종합
  rationale: |
    depth 3 두 축 · 근 개수 계단 · ★ 5 (premium 임계 count≥5 미충족)
  vendor_calibration_signal: {L5_confidence: 0.85}
```

---

## 표본 판정 요약 (35문)

| ★ | Level 1 | Level 2 | Level 3 | 합계 |
|---|---:|---:|---:|---:|
| ★ 2 | 5 | 0 | 0 | 5 |
| ★ 3 | 6 | 0 | 0 | 6 |
| ★ 4 | 3 | 7 | 2 | 12 |
| ★ 5 | 0 | 7 | 4 | 11 |
| **★ 5 premium** | 0 | 0 | 1 | **1** |
| 합계 | 14 | 14 | 7 | 35 |

## 예측 종합 (전체 171문)

**표본 회귀 초안** (문항별 재판정 미착수):

| ★ | 표본 실측 | 예측 (136문) | 전체 (171문) |
|---|---:|---:|---:|
| ★ 2 | 5 | ~18 | ~23 |
| ★ 3 | 6 | ~34 | ~40 |
| ★ 4 | 12 | ~52 | ~64 |
| ★ 5 | 11 | ~28 | ~39 |
| ★ 5 premium | 1 | ~4 | ~5 |

**Level별 tier 회귀 초안** (표본 기반):
- Level 1 기초 연습 → star_2·star_3 혼재 (예: 0009=★2, 0011=★3, 0057=★3)
- Level 2 기본 연습 → star_4·star_5 혼재 (예: 0018=★4, 0020=★5, 0116=★5)
- Level 3 실력 완성 → star_5 위주 (예: 0026=★5, 0050=★5, 0122=★5 premium)

## 핵심 관찰

1. **미적분Ⅰ 통찰 축의 특수성**: 극한 존재 → 인수 조건 (0094·0140), 파라미터 정적분 미분 (0142), 사차 극점 3개 조건 (0122·0148) 등은 CM1·CM2 스코프에 부재. 이러한 시그니처는 CM1·CM2 침투 방지 grep 대상.

2. **Level 1 → 2 → 3 계층 뚜렷**: Level 1은 정의·표준 공식 대입 (★ 2~3), Level 2는 조건 다중 조합 (★ 4~5), Level 3는 3중 조건 + 역추론 다층 (★ 5 · premium 임계 도전).

3. **premium 후보 1건 (0122)**: 사차 극점 3개 · 이동 폐구간 M+m 부호 조건 · signal_ref P2·P3·P5 다중 · insight_count 5 · depth 8.6 → premium 임계 3조건 (depth≥8.5·max=3·count≥5) 모두 충족. CM2-FN의 최댓값·최솟값 이동 폐구간 유형 원형으로 참조 가능 (도구 축약 시).

4. **평균값 정리 (0097)**: CM1·CM2 밖 · 미적분Ⅰ 정규 도구. 답지 사용 금지 대상 (feedback_no_calc2_terms_cm2 준거).

5. **주기·경사 주기 (0165)**: f(x+3)=f(x)+3 형태 경사 주기는 CM2-FN에도 사용 가능 (주기함수 확장 개념) · 학습 참조 candidate.

6. **역함수 대칭 넓이 (0159)**: CM2-RF 무리함수·유리함수 역함수 대칭 정책과 일관 · 미적분Ⅰ에서도 동일 도구 · 자연스러운 학습 사다리.

7. **회귀 정합률 미적용**: 최초 정독 · 벤더 라벨 회귀 표본 축적 단계 · Phase 2에서 문항별 재판정 후 회귀 함수 정정 예정.

## 참조 문서

- 스키마: `bank/정독-스키마-v2.0.md`
- tier 매핑: `bank/mechanism-데이터-정독-tier-매핑.md` v3.1
- CM1·CM2 교과과정 침투 방지: `bank/CM1-교과과정.md`, feedback_no_calc2_terms_cm2
- 자매 자산 (수학Ⅰ): `참고자료/수능특강/2027/2027 수능특강 수학I.pdf` (미정독)
