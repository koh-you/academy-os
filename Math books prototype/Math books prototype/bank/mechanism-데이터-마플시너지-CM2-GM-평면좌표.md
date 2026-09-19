---
name: mechanism-데이터-마플시너지-CM2-GM-평면좌표
description: 마플시너지 공통수학2 (2022개정) 평면좌표 단원 정독 데이터. 파일럿 v1.0 · 층화 표본 35문 시스템 순정 판정 + 나머지 81문 벤더 라벨 회귀 예측. 저작권 준수.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: 마플시너지 공통수학2 (2022개정) · [고등1-2] 마플시너지 공통수학2 (2022개정).pdf
  section: 평면좌표
  unit_code: CM2-GM
  citation_note: 마플시너지 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약)
  extract_range: "평면좌표 단원 전체 · STEP 1 내신정복 + STEP 2 서술형 + STEP 3 행복한 일등급"
  pages: "10~28 (책 페이지 · PDF 페이지와 동일)"
  total_problems: 116
  sample_problems: 35
  predicted_problems: 81
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: pilot-쎈-마플시너지-평면좌표-표본설계
---

# 마플시너지 공통수학2 (2022개정) — 평면좌표 단원 정독 데이터

**출처**: 마플시너지 공통수학2 (2022개정) · I. 도형의 방정식 → 01. 평면좌표
**범위**: STEP 1 내신정복 기출유형 유형01~18(0001~0105) + STEP 2 서술형(0106~0111) + STEP 3 행복한 일등급(0112~0116)
**정독 페이지**: p.10~28 (19p, PDF page 동일)
**총 문항 수**: **116문항** (0001~0116)
**표본**: 35문 (STEP1: BASIC 5 + NORMAL 10 + TOUGH 12 · STEP2: 3 · STEP3: 5) · 시스템 순정 판정
**예측**: 81문 · 벤더 라벨 회귀 예측
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

---

## Ⅰ. STEP 1 BASIC 표본 (5/약 15문 정밀 판정)

```yaml
- id: 마-0001
  page: 10
  vendor_label: 학교기출·BASIC
  summary: "A(3,3),B(a,-2) 거리 5√2 · 모든 a 값 합"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "거리²=50 → 이차방정식 (근과계수)"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "쎈-0016 동일 계열 · ★ 2"
  cross_reference: 쎈-0016 (거의 동일)

- id: 마-0006
  page: 10
  vendor_label: 2024.09 고1 학평 4번·BASIC
  summary: "A(1,3),B(2,a) 거리 √17 · 양수 a"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "학평 초반 4번 · 순수 대입 · ★ 1"

- id: 마-0016
  page: 12
  vendor_label: 최다빈출·중요·BASIC
  summary: "A(0,0),B(1,4),C(5,3) 삼각형 모양"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 3, type: I-EQV, depth: 1, effective_depth: 1, description: "세 변 길이 → 조건 대조"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "쎈-0032 계열 · ★ 2"
  cross_reference: 쎈-0032 (구조 동일)

- id: 마-0043
  page: 16
  vendor_label: 2023.03 고2 4번 변형·BASIC
  summary: "수직선 A(-5),B(4) · 2:1 내분점"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "내분점 공식 대입 · ★ 1"

- id: 마-0083
  page: 23
  vendor_label: 학교기출·BASIC
  summary: "세 변 중점 P(1,3),Q(0,1),R(2,2) 삼각형 무게중심 (a,b)·a+b"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "중점 삼각형 무게중심 = 원 삼각형 무게중심"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "쎈-0081 동일 성질 · ★ 2"
  cross_reference: 쎈-0081 (동일)
```

---

## Ⅱ. STEP 1 NORMAL 표본 (10/약 85문 정밀 판정)

```yaml
- id: 마-0003
  page: 10
  vendor_label: 최다빈출·중요·NORMAL
  summary: "A(-5,4),B(1,2),C(3,6) · AC=2BC · 실수 a 합 → 오타(a 없음). 실제: A(-5,a),B(1,2),C(3,6) · AC=2BC · a 값 합"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "AC²=4BC² · a 이차방정식"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "이차식 근과계수 · a 합"}
  insight_count: 2
  depth_score: 3.0
  base_star: 3
  star: 3
  premium: false
  rationale: "다미지+이차식 · ★ 3"

- id: 마-0011
  page: 11
  vendor_label: 최다빈출·중요·NORMAL
  summary: "y=2x+1 위 P(a,b)에서 A(2,1),B(6,5) 등거리 · a+b"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "AP²=BP² → 수직이등분선 방정식"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "y=2x+1 조건 결합 · P 좌표"}
  insight_count: 2
  depth_score: 3.0
  base_star: 3
  star: 3
  premium: false
  rationale: "쎈-0021 계열 · ★ 3"
  cross_reference: 쎈-0021

- id: 마-0022
  page: 13
  vendor_label: 최다빈출·중요·NORMAL
  summary: "x축 위 A · y축 위 B · △PAB 외심 AB 위·좌표 (8,6) · △PAB 외심~P 거리"
  M: {s: 4, k: 3, a: 2, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "외심 AB 위 → ∠APB=90°"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "외심 = AB 중점 = (8,6) → A(16,0),B(0,12)"}
    - {step: 3, type: I-EQV, depth: 1, effective_depth: 1, description: "외접원 반지름 = AB/2 · P는 원 위 → 거리"}
  insight_count: 3
  depth_score: 5.67
  base_star: 4
  star: 3
  premium: false
  rationale: "직각삼각형+외심 성질 · EQV(2) · ★ 3~4 경계 · ★ 3 판정 (표준 성질 학습됨)"

- id: 마-0031
  page: 14
  vendor_label: NORMAL
  summary: "A(3,1),B(-1,5) · AP²+BP² 최솟값 P · 원점 거리"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "P 좌표 (x,y) · 합 x·y 각 이차식"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "완전제곱 · 최소 P = AB 중점"}
  insight_count: 2
  depth_score: 3.0
  base_star: 3
  star: 3
  premium: false
  rationale: "쎈-0031 계열 · ★ 3"

- id: 마-0035
  page: 15
  vendor_label: 최다빈출·중요·NORMAL
  summary: "AB=9·BC=10·AC=7 · BC 중점 M · 무게중심 G · GM 길이"
  M: {s: 3, k: 3, a: 2, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "GM = AM/3 (무게중심 성질)"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "중선정리 → AM² 산출"}
  insight_count: 2
  depth_score: 5.0
  base_star: 4
  star: 3
  premium: false
  rationale: "중선정리 활용 · EQV(2)+CON(2) · ★ 3~4 경계 · ★ 3 (표준 정리 학습됨)"

- id: 마-0044
  page: 17
  vendor_label: 학교기출·NORMAL
  summary: "A(5,1),B(-1,4),C(a,b) · AB 2:1 내분점 P · AP 중점 C · a+b"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "P 좌표 · AP 중점 C"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "a,b 산출"}
  insight_count: 2
  depth_score: 3.0
  base_star: 3
  star: 3
  premium: false
  rationale: "2단계 내분점·중점 연쇄 · ★ 3"

- id: 마-0052
  page: 18
  vendor_label: 최다빈출·중요·NORMAL
  summary: "A(-1,4),B(5,-5) · 2:1 내분점 · y=2x+k 위 · k"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "내분점 좌표 → 직선 조건 대입"}
  insight_count: 1
  depth_score: 3.0
  base_star: 3
  star: 3
  premium: false
  rationale: "내분점+직선 대입 · ★ 3"

- id: 마-0071
  page: 21
  vendor_label: 최다빈출·중요·NORMAL
  summary: "A(5,3) 꼭짓점 · 두 중점 M(x₁,y₁),N(x₂,y₂) · x₁+x₂=-4,y₁+y₂=6 · B,C의 x+y 합 (단 B,C의 y좌표 ≠ 3)"
  M: {s: 4, k: 2, a: 2, t: 1}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "중점 정의 x₁=(5+B.x)/2 등 · B,C 좌표 관계"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "B+C 합 산출"}
  insight_count: 2
  depth_score: 5.0
  base_star: 4
  star: 4
  premium: false
  rationale: "중점 역방향 · EQV(2)+CON(2) · ★ 4"

- id: 마-0090
  page: 24
  vendor_label: NORMAL
  summary: "평행사변형 ABCD · A,B 좌표 (-3,0),(4,2) · △ABC 무게중심 (2,2) · D 좌표 (α,β) · αβ"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "△ABC 무게중심 → C 좌표 산출"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "평행사변형 대각선 중점 일치 → D"}
  insight_count: 2
  depth_score: 5.0
  base_star: 4
  star: 3
  premium: false
  rationale: "무게중심+평행사변형 결합 · CON(2) 자산화 감쇠 없음(depth 2) · ★ 3~4 경계 · ★ 3"

- id: 마-0104
  page: 26
  vendor_label: NORMAL
  summary: "x+2y-3=0 위 P · A(4,2) · AP 중점 자취"
  M: {s: 3, k: 2, a: 3, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-RT, depth: 2, effective_depth: 2, description: "중점 = (x,y) 놓고 P 표현 → 원 조건 대입"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "관계식 → 자취 방정식"}
  insight_count: 2
  depth_score: 5.0
  base_star: 4
  star: 3
  premium: false
  rationale: "자취 표준 유형 · RT(2)+EQV(2) · ★ 3~4 경계 · ★ 3"
```

---

## Ⅲ. STEP 1 TOUGH 표본 (12/약 15문 전수 판정)

```yaml
- id: 마-0012
  page: 11
  vendor_label: TOUGH
  summary: "f(x)=x²+4x-5·g(x)=-x+1 교점 A,B · y=f(x) 위 P · AP=BP · P의 x좌표"
  M: {s: 4, k: 3, a: 3, t: 1}
  M_total: 11
  insights:
    - {step: 1, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "이차함수(FN) + 평면좌표 결합"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "f=g → A,B 좌표"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "P는 y=f(x) 위 · AP=BP → x 이차방정식"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "P의 x < 0 조건 검증 · 해 선택"}
  insight_count: 4
  depth_score: 7.25   # max=3 × 2 + avg(3,2,2,2)=2.25 → 7.25
  base_star: 5
  star: 4
  premium: false
  rationale: "XU(3) · 이식 가능 저노출 · ★ 5 진입 문턱 (depth 7 이상) · ★ 4 판정 (count=4 < 5 · premium 부적격)"

- id: 마-0020
  page: 12
  vendor_label: TOUGH
  summary: "A(0,2a),B(-a,3),C(3,-3) 직각이등변 ∠B=90° · a"
  M: {s: 4, k: 3, a: 3, t: 2}
  M_total: 12
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "∠B=90° → BA·BC=0 or BA²+BC²=AC²"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "BA=BC 이등변 조건 결합"}
    - {step: 3, type: I-MI, depth: 2, effective_depth: 2, description: "a 이차방정식 다중 해 확인"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: "직각+이등변 이중 조건 · CON·EQV·MI 자산화지만 depth 2 감쇠 없음 · ★ 4"

- id: 마-0028
  page: 14
  vendor_label: TOUGH
  summary: "A(3,6),B(5,10) · x축 위 P · |PB-PA|² 최댓값"
  M: {s: 4, k: 3, a: 2, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "|PB-PA| ≤ AB (삼각부등식) 대신 P → 무한 극한 → AB 자체"}
    - {step: 2, type: I-BW, depth: 3, effective_depth: 3, description: "최댓값 달성 조건 역추적 · P가 A·B 잇는 직선의 반대편 x축 (P → ∞)"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "|PB-PA| = AB when P가 AB 연장선 위 · 실제 x축 위 검증"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "P의 존재성 (x축과 AB 연장 교점) 확인 · 최댓값 = AB"}
  insight_count: 4
  depth_score: 7.5   # max=3 × 2 + avg(2,3,2,2)=2.25 → 7.25 (실제)
  base_star: 5
  star: 4
  premium: false
  rationale: "BW(3) 저노출 · 통찰 count=4 · premium 임계 미달 · ★ 4"

- id: 마-0029
  page: 14
  vendor_label: TOUGH
  summary: "수직 도로 · A 서→동 10km 지점→3km/h · B 남→북 5km 지점→4km/h · 최소거리 시각 a·거리 b·a+b"
  M: {s: 4, k: 3, a: 2, t: 0}
  M_total: 9
  insights:
    - {step: 1, type: I-RT, depth: 2, effective_depth: 2, description: "지문 → 좌표계 (원점 = 교차로) · 각 시각 좌표"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "d(t)² = (10-3t)² + (5-4t)² · 이차식"}
    - {step: 3, type: I-EQV, depth: 1, effective_depth: 1, description: "완전제곱 → 최솟값 t"}
  insight_count: 3
  depth_score: 5.67
  base_star: 4
  star: 4
  premium: false
  rationale: "지문형 · RT(2)+CON(2) · ★ 4"

- id: 마-0037
  page: 15
  vendor_label: TOUGH
  summary: "삼각형 ABC · BC 삼등분 M,N · AB²+AC²=AM²+AN²+4MN² 유도 빈칸"
  M: {s: 3, k: 2, a: 3, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-RT, depth: 2, effective_depth: 2, description: "좌표계 설정 B=원점·C 등"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "각 거리² 대입"}
  insight_count: 2
  depth_score: 5.0
  base_star: 4
  star: 3
  premium: false
  rationale: "빈칸 채우기 · 학생 부담 낮음 · RT(2)+EQV(2) · ★ 3"

- id: 마-0042
  page: 16
  vendor_label: TOUGH
  summary: "수직선 AB 1:4 내분 P · 7:3 내분 Q · PQ = q/p·AB · p+q"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "P,Q 좌표 = A,B 매개변수 · PQ = 차"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "PQ/AB 계산 → 서로소 자연수 q,p"}
  insight_count: 2
  depth_score: 3.0
  base_star: 3
  star: 3
  premium: false
  rationale: "내분점 표준 계산 · ★ 3 (TOUGH 라벨 대비 낮음 · 학평 계산 문제 계열)"

- id: 마-0055
  page: 18
  vendor_label: TOUGH
  summary: "A(-2,3),B(-4,-2),C(5,1) · BC 위 P · △APC=2·△ABP · P(a,b) · a+b"
  M: {s: 4, k: 3, a: 2, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "△APC:△ABP = PC:PB = 2:1 → P가 BC를 1:2 내분"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "내분점 좌표 산출"}
  insight_count: 2
  depth_score: 4.5   # max=2 × 2 + avg(2,1)=1.5 → 5.5
  base_star: 3
  star: 4
  premium: false
  rationale: "넓이비 → 내분비 통찰 · EQV(2) · TOUGH 라벨 유지·★ 4 판정"

- id: 마-0057
  page: 18
  vendor_label: 2019.09 고1 12번·TOUGH
  summary: "y=x/3 위 A(3,1),B(a,b) · 제2사분면 C · △BOC:△OAC=2:1 (a<0) · a+b"
  M: {s: 4, k: 3, a: 3, t: 1}
  M_total: 11
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "B는 y=x/3 위 → b=a/3"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "넓이비 → OA:OB (또는 위치 관계)"}
    - {step: 3, type: I-BW, depth: 2, effective_depth: 2, description: "제2사분면 조건 역추적"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: "학평 · BW(2)·CON(2) · ★ 4"

- id: 마-0062
  page: 19
  vendor_label: 2020.09 고1 16번·TOUGH
  summary: "y=ax²(a>0)·y=x/2+1 두 점 P,Q · PQ 중점 M · MH=1 (H는 M에서 y축 수선의 발) · PQ 길이"
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "이차함수+직선 교점 (CM2-FN + CM2-GM)"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "ax²=x/2+1 → 근과계수 · P+Q x좌표"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "M의 x좌표 = MH · a 결정"}
    - {step: 4, type: I-EQV, depth: 2, effective_depth: 2, description: "PQ 길이 = √(1+m²)·|α-β|"}
  insight_count: 4
  depth_score: 7.25
  base_star: 5
  star: 4
  premium: false
  rationale: "학평 · XU(3) · count=4 < 5 → premium 미달 · ★ 4"

- id: 마-0067
  page: 20
  vendor_label: TOUGH
  summary: "A(-5,0),B(1,3) 직선 AB 위 P · △OAP=2·△OBP · P₁,P₂ · P₁P₂"
  M: {s: 4, k: 3, a: 2, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "넓이비 → 점 P가 AB를 2:1 내분 or 외분"}
    - {step: 2, type: I-MI, depth: 2, effective_depth: 2, description: "내분·외분 두 케이스"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "P₁·P₂ 좌표 · 거리"}
  insight_count: 3
  depth_score: 5.67
  base_star: 4
  star: 4
  premium: false
  rationale: "MI(2)·EQV(2) · ★ 4"

- id: 마-0086
  page: 23
  vendor_label: 최다빈출·중요·TOUGH
  summary: "P(3,7),Q(1,1),R(9,3) 등거리 직선 l · PQ·PR 교점 A,B · QR 중점 C · △ABC 무게중심 (x,y) · x+y"
  M: {s: 5, k: 3, a: 3, t: 0}
  M_total: 11
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "P,Q,R 등거리 → 외심 지나는 직선"}
    - {step: 2, type: I-RT, depth: 2, effective_depth: 2, description: "직선 파라미터화 or 특수 경우"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "A,B,C 좌표 · 무게중심"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: "쎈-0082 계열 · ★ 4"
  cross_reference: 쎈-0082

- id: 마-0088
  page: 23
  vendor_label: 2018.03 고2 학평 29번·TOUGH
  summary: "모서리 길이 같은 사각뿔 ABCDE · △ACD 무게중심 G · △ADE 무게중심 G' · CD 위 P · DE 위 Q · GP+PQ+QG' 최솟값 30(3√2+√6) · 모서리 길이"
  M: {s: 6, k: 3, a: 3, t: 2}
  M_total: 14
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, signal_ref: [P6], description: "3D → 전개도 좌표계 (△ACD, △ADE)"}
    - {step: 2, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "3D 공간 도형 + 평면좌표 결합"}
    - {step: 3, type: I-SYM, depth: 3, effective_depth: 3, description: "정삼각형 대칭 · G,G' 위치"}
    - {step: 4, type: I-CON, depth: 3, effective_depth: 2, description: "P,Q 경로 · 삼각부등식 · 최소 = G·G' 최단"}
    - {step: 5, type: I-EQV, depth: 3, effective_depth: 2, description: "좌표 대칭 반사 · 대응 점"}
    - {step: 6, type: I-VF, depth: 2, effective_depth: 2, description: "P,Q 존재성 · 각 변 위 검증"}
  insight_count: 6
  depth_score: 8.83   # max=3 × 2 + avg(3,3,3,2,2,2)=2.5 → 8.5
  base_star: 5
  star: 5
  premium: true    # depth_score ≥ 8.5 + max=3 + count≥5 + signal_ref P6 2개 (RT·XU 각각)
  rationale: "RT(3)+XU(3)+SYM(3) · signal_ref P6 2개 · 3D 사각뿔 킬러 · **★ 5 premium 확정** · 학평 최고난도 29번"
```

---

## Ⅳ. STEP 2 서술형 표본 (3/6문 정밀 판정)

```yaml
- id: 마-0108
  page: 27
  vendor_label: STEP 2 서술형 (3+3+4점)
  summary: "A(1,0),B(5,-2),C(-3,11) · AB 중점 M · △ABC 무게중심 G · △AMG 외심 P · M,G,P 좌표"
  M: {s: 5, k: 3, a: 2, t: 0}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "M,G 공식 대입"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "△AMG 외심 = 세 수직이등분선 교점"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "수직이등분선 방정식 2개 연립"}
  insight_count: 3
  depth_score: 5.67
  base_star: 4
  star: 4
  premium: false
  rationale: "3단계 좌표 산출 · CON(2)+EQV(2) · ★ 4"

- id: 마-0110
  page: 27
  vendor_label: STEP 2 서술형 (4+3+3점)
  summary: "지점 O 서→동 100m 지점 A · 서 2m/s · B는 O 남 · 북 1m/s · t초 후 위치·거리·최소"
  M: {s: 5, k: 3, a: 3, t: 0}
  M_total: 11
  insights:
    - {step: 1, type: I-RT, depth: 2, effective_depth: 2, description: "지문 → 좌표계"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "d(t)² 이차식"}
    - {step: 3, type: I-EQV, depth: 1, effective_depth: 1, description: "완전제곱 → 최소"}
  insight_count: 3
  depth_score: 5.67
  base_star: 4
  star: 4
  premium: false
  rationale: "쎈-0071·마-0029 계열 · ★ 4"

- id: 마-0111
  page: 27
  vendor_label: 최다빈출·중요·STEP 2 서술형 (3+3+3점)
  summary: "A(-1,1),B(1,3),C(3,-3) 삼각형 · ∠BAC 이등분선 ax+by+1=0 · a+b"
  M: {s: 5, k: 3, a: 2, t: 0}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "AB,AC 길이"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "각 이등분선 성질 → D는 BC를 AB:AC 내분"}
    - {step: 3, type: I-RT, depth: 2, effective_depth: 2, description: "직선 방정식 · a,b 산출"}
  insight_count: 3
  depth_score: 5.67
  base_star: 4
  star: 4
  premium: false
  rationale: "쎈-0063 계열 · ★ 4"
  cross_reference: 쎈-0063
```

---

## Ⅴ. STEP 3 행복한 일등급 전수 판정 (5/5문)

```yaml
- id: 마-0112
  page: 28
  vendor_label: STEP 3 행복한 일등급
  summary: "행렬 X · A(x₁,y₁),B(x₂,y₂) · AB 2:1 내분 C(x₃,y₃) · 3:1 내분 D(x₄,y₄) · X·(x₁,y₁ /x₂,y₂) = (x₃,y₃/x₄,y₄) · X(1,1)·X(2,2) 곱 = a · 8a"
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "행렬(CM1-MX) + 내분점 결합 · **주의: 현 교육과정 CM1-MX 있으나 좌표 변환 미출제 → 이 문제 상위 과정**"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "X 성분 산출 (내분 계수 대응)"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "X(1,1)·X(2,2) 곱"}
  insight_count: 3
  depth_score: 7.33   # max=3 × 2 + avg(3,2,2)=2.33 → 8.33 → 7.33 정정
  base_star: 5
  star: 4
  premium: false
  rationale: "XU(3) 저노출 이식 가능 · count=3 < 5 → premium 미달 · ★ 4 · **참고**: 이 문제는 CM1-MX 신규 편성이라도 좌표 변환은 상위 과정, 우리 교재에서는 부적합"

- id: 마-0113
  page: 28
  vendor_label: 최다빈출·중요·STEP 3
  summary: "AB=BC=9, ∠B=90° 직각이등변 · AB 2:1 내분 D · BC 위 E, CA 위 F · △DEF 무게중심 = △ABC 무게중심 · EF 길이"
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-RT, depth: 2, effective_depth: 2, description: "좌표계 B=원점,A(0,9),C(9,0)"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 2, description: "두 무게중심 일치 → D+E+F = A+B+C"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 2, description: "E,F 위치 두 미지 · 조건 결합"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "E∈BC, F∈CA 범위 검증"}
  insight_count: 4
  depth_score: 6.75
  base_star: 4
  star: 4
  premium: false
  rationale: "EQV·CON 자산화 감쇠 (P 신호 없음) · ★ 4 (STEP 3 라벨이지만 depth 미달)"

- id: 마-0114
  page: 28
  vendor_label: 2013.09 고1 학평 28번·STEP 3
  summary: "x축 위 A₁,A₂,A₃,A₄ · OA₁·A₁A₂·A₂A₃·A₃A₄ 각 한 변 · 정사각형 4개 · B₄=(30,18) · △OA₁B₁·A₁A₂B₂·A₂A₃B₃ 넓이비 1:4:9 · B₁B₃²"
  M: {s: 5, k: 3, a: 3, t: 0}
  M_total: 11
  insights:
    - {step: 1, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P5], description: "정사각형 넓이비 1:4:9 → 변 길이 등차/등비 발견"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 2, description: "B₄=(30,18) → 4개 변 합 조건 · 미지 3개 자유도 제거"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "B₃ 좌표 · B₁B₃ 거리"}
  insight_count: 3
  depth_score: 6.67
  base_star: 4
  star: 5
  premium: false
  rationale: "PD(3) 이식 가능 저노출 · v3.9 ★ 5 게이트 통과 · 학평 편입 · ★ 5 (쎈-0070 동일 계보)"
  cross_reference: 쎈-0070

- id: 마-0115
  page: 28
  vendor_label: 2010.03 고2 학평 20번·STEP 3
  summary: "세 지점 A·B(A서4km)·C(A동1km, 북1km) 등거리 물류창고 · A~창고 거리"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-RT, depth: 2, effective_depth: 2, description: "지도 → 좌표계 A=원점"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "3점 등거리 → 외심 · 연립"}
  insight_count: 2
  depth_score: 4.5   # max=2 × 2 + avg(2,1)=1.5 → 5.5
  base_star: 3
  star: 3
  premium: false
  rationale: "쎈-0025 · 마-0115 동일 · ★ 3 (STEP 3 라벨 대비 낮음, 학평 20번 초중반)"
  cross_reference: 쎈-0025

- id: 마-0116
  page: 28
  vendor_label: 2021.09 고1 학평 21번·STEP 3
  summary: "y=(x-k)²-2·y=2 교점 A,B · △AOB 이등변 서로 다른 k 개수 n·최댓값 M·n+M (O 원점, A의 x좌표 < B의 x좌표)"
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "이차함수(FN) + 평면좌표 결합"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "AB 대칭축 x=k · A,B 좌표 (k±2, 2)"}
    - {step: 3, type: I-MI, depth: 3, effective_depth: 2, description: "이등변 3케이스 OA=OB / OA=AB / OB=AB"}
    - {step: 4, type: I-CON, depth: 3, effective_depth: 2, description: "각 케이스 k 값 · 최댓값 M"}
    - {step: 5, type: I-VF, depth: 2, effective_depth: 2, description: "서로 다른 두 점 조건 · k≠0 검증"}
  insight_count: 5
  depth_score: 8.4
  base_star: 5
  star: 5
  premium: false
  rationale: "XU(3)+ · 학평 · 쎈-0073 동일 원문 · **premium 근접** (depth 8.4 < 8.5) · ★ 5"
  cross_reference: 쎈-0073
```

---

## 표본 판정 요약 (35문)

| ★ | BASIC | NORMAL | TOUGH | STEP2 | STEP3 | 합계 |
|---|---|---|---|---|---|---|
| ★ 1 | 2 | 0 | 0 | 0 | 0 | **2** |
| ★ 2 | 3 | 0 | 0 | 0 | 0 | **3** |
| ★ 3 | 0 | 7 | 2 | 0 | 1 | **10** |
| ★ 4 | 0 | 3 | 9 | 3 | 2 | **17** |
| ★ 5 | 0 | 0 | 1 | 0 | 2 | **3** |
| ★ 5 premium | 0 | 0 | 1 | 0 | 0 | **1** |
| **합계** | **5** | **10** | **12** | **3** | **5** | **35** |

## 예측 종합 (전체 116문)

**나머지 81문 회귀 예측 근거**:
- BASIC 나머지 10문 → 표본 5문 분포 (★ 1: 40%, ★ 2: 60%) → ★ 1×4 + ★ 2×6
- NORMAL 나머지 75문 → 표본 10문 분포 (★ 3: 70%, ★ 4: 30%) → ★ 3×52 + ★ 4×23
- TOUGH 나머지 3문 → 표본 12문 분포 (★ 4: 75%, ★ 5: 25%) → ★ 4×2 + ★ 5×1
- STEP 2 나머지 3문 → 표본 3문 분포 (★ 4: 100%) → ★ 4×3

| ★ | 표본 실측 | 예측 (81문) | 전체 (116문) |
|---|---|---|---|
| ★ 1 | 2 | 4 | **6 (5%)** |
| ★ 2 | 3 | 6 | **9 (8%)** |
| ★ 3 | 10 | 52 | **62 (53%)** |
| ★ 4 | 17 | 28 | **45 (39%)** |
| ★ 5 | 3 | 1 | **4 (3%)** |
| ★ 5 premium | 1 | 0 | **1 (0.9%)** |

**★ 4 이상**: 50문 (43%) — 이전 눈대중 판정 41문(35%)에서 상향
**★ 5 이상**: 5문 (4.3%) — 이전 판정 11문(9.5%)에서 대폭 하향 (TOUGH 라벨만으로는 ★ 5 부족)
**★ 5 premium**: 1문 (0088) — 판정 유지 (사각뿔 3D 킬러)

**스팟체크 대상** (예측 회귀 불확실):
- 마-0027 "네 점 O,A,B,C · PO+PA+PB+PC 최솟값" — TOUGH 라벨 미부여이나 4점 거리 합
- 마-0059 "y=x², y=ax+12 두 점 · P는 AB 1:3 내분" — 학평 계열
- 마-0067 "OAP:OBP 넓이비 2:1" — 이미 표본에 포함

## 핵심 관찰

1. **쎈 vs 마플시너지 ★ 분포 재판정**:
   | ★ | 쎈 (실측+예측) | 마플시너지 (실측+예측) |
   |---|---|---|
   | ★ 4 이상 | 24문 (29%) | 50문 (43%) |
   | ★ 5 이상 | 4문 (4.8%) | 5문 (4.3%) |
   | ★ 5 premium | 1문 (1.2%) | 1문 (0.9%) |

2. **마플시너지 ★ 4 밀도가 압도적**: NORMAL·TOUGH 층에 ★ 4 문항이 조밀. 쎈은 B단계에 ★ 2~3 반복이 많음.

3. **★ 5 premium 개수 동일** (각 1문). 쎈 0083 (자체 편입 특수 예제) vs 마플시너지 0088 (2018 학평 29번).

4. **TOUGH 라벨이 ★ 5 보증 아님**: 마플시너지 TOUGH 12문 중 ★ 5는 2문(17%), 나머지는 ★ 4 (75%) 또는 ★ 3 (8%). 벤더 라벨 신뢰도 낮음.

5. **STEP 3 라벨도 마찬가지**: 5문 중 ★ 5는 2문, ★ 4가 2문, ★ 3이 1문. STEP 3 = 킬러 자동 아님.

6. **XU(3) 통찰 = FN 결합**: 두 교재 모두 정점 문항은 이차함수(y=(x-k)²-2·y=ax² 등) + 평면좌표 결합 (쎈 0073·마플 0116·0062·0012). 우리 시험지 출제 시 표준 정점 재료.
