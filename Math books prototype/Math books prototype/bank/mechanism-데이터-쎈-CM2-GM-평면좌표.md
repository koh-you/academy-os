---
name: mechanism-데이터-쎈-CM2-GM-평면좌표
description: 쎈 공통수학2 (2022개정) 평면좌표 단원 정독 데이터. 파일럿 v1.0 · 층화 표본 35문 시스템 순정 판정 + 나머지 49문 벤더 라벨 회귀 예측. 저작권 준수.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: 쎈 공통수학2 (2022개정) · [고등1-2] 쎈 공통수학2 (2022개정).pdf
  section: 평면좌표
  unit_code: CM2-GM
  citation_note: 쎈 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약)
  extract_range: "평면좌표 단원 전체 · A단계 기본다잡기 + B단계 유형뽀개기 + C단계 실력굳히기"
  pages: "8~20 (책 페이지 · PDF 페이지와 동일)"
  total_problems: 84
  sample_problems: 35
  predicted_problems: 49
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: pilot-쎈-마플시너지-평면좌표-표본설계
---

# 쎈 공통수학2 (2022개정) — 평면좌표 단원 정독 데이터

**출처**: 쎈 공통수학2 (2022개정) · I. 도형의 방정식 → 01. 평면좌표
**범위**: A단계 기본다잡기(15) + B단계 유형뽀개기 유형01~13(54) + C단계 실력굳히기(15)
**정독 페이지**: p.8~20 (14p, PDF page 동일)
**총 문항 수**: **84문항** (0001~0084)
**표본**: 35문 (A5 + B15 + C15) · 시스템 순정 판정
**예측**: 49문 (A10 + B39 + C0) · 벤더 라벨 회귀 예측
**정독 일자**: 2026-07-21

## 벤더 라벨 체계 (쎈)

| 라벨 | 의미 | 표본 사전 tier |
|---|---|---|
| A단계 기본다잡기 | 개념 즉시 적용 계산 | ★ 1~2 |
| B단계 대표문제 | 유형별 첫 문항 (표준형) | ★ 3 |
| B단계 (● 중 없음) | 기본 유형 계산 | ★ 2~3 |
| B단계 ● 중 | 중간 난이도 | ★ 3 |
| B단계 ● 상 | 상 난이도 | ★ 3~4 |
| C단계 실력굳히기 | 사고력·심화 | ★ 3~5 |
| C단계 사고력의 기술 (아이콘) | 정점 문항 | ★ 4~5 |
| 교육청 기출 (C단계) | 실제 학평 편입 | ★ 3~5 |
| 서술형 (태그) | 서술형 (난이도 독립) | 원 판정 유지 |

---

## Ⅰ. A단계 기본다잡기 표본 (5/15문 정밀 판정)

```yaml
- id: 쎈-0001
  page: 9
  vendor_label: A단계 기본
  summary: "수직선 두 점 A(1),B(6) 사이 거리"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  anchor_match: null (★ 1 앵커는 좌표평면 위주, 수직선 단독 없음)
  rationale: "수직선 |6-1|=5 단순 대입 · M_total ≤ 5 → 절차형 ★ 1"

- id: 쎈-0004
  page: 9
  vendor_label: A단계 기본
  summary: "좌표평면 A(2,-1),B(3,2) 거리"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  anchor_match: null
  rationale: "거리 공식 1회 대입 · ★ 1"

- id: 쎈-0007
  page: 9
  vendor_label: A단계 기본
  summary: "수직선 A(6),B(-2) · 1:2 내분점"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "내분점 공식 대입 · ★ 1"

- id: 쎈-0010
  page: 9
  vendor_label: A단계 기본
  summary: "좌표평면 A(5,2),B(3,-6) · 2:1 내분점"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: "내분점 공식 대입 (좌표평면) · ★ 1"

- id: 쎈-0013
  page: 9
  vendor_label: A단계 기본 (증명 빈칸)
  summary: "삼각형 무게중심 좌표 유도 빈칸 완성"
  M: {s: 3, k: 1, a: 2, t: 0}   # 3단계 유도 · 일반 좌표
  M_total: 6
  insights:
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "중점 M 좌표 정의 → 무게중심 G 좌표 유도"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2   # M_total ≤ 7 · depth 1 통찰 → ★ 2
  star: 2
  premium: false
  rationale: "유도 절차 안내 문제 · 통찰 depth 1 · ★ 2"
```

## A단계 나머지 10문 (0002·0003·0005·0006·0008·0009·0011·0012·0014·0015) 회귀 예측

**공통 패턴**: 표본 5문과 완전 동일 유형 (거리 공식·내분점·중점·무게중심 단순 대입)
**예측**: ★ 1 × 10문 (모두 M_total ≤ 5·절차형)
**스팟체크 대상**: 없음 (동질적)

---

## Ⅱ. B단계 유형뽀개기 표본 (15/54문 정밀 판정)

### 대표문제 10문

```yaml
- id: 쎈-0016
  page: 10
  vendor_label: B단계 대표문제 유형01
  summary: "두 점 A(3,3),B(a+1,-2) 거리 5√2 · 모든 a 값 합"
  M: {s: 2, k: 2, a: 2, t: 0}   # 이차식 전개·근과계수 활용
  M_total: 6
  insights:
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "거리² = 50 → 이차방정식 (a 근)"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "거리 공식+이차식 근과계수 · ★ 2 (표준 절차) · CM2-GM 앵커 ★ 2 A04(내분점 활용) 근사"

- id: 쎈-0021
  page: 10
  vendor_label: B단계 대표문제 유형02
  summary: "A(1,-2),B(5,2) 등거리 P(a,b) · y=x+1 위 · a²+b²"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "AP=BP → 수직이등분선"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "직선 조건 결합 · (a,b) 결정"}
  insight_count: 2
  depth_score: 3.0
  base_star: 3
  star: 3
  premium: false
  rationale: "두 조건 결합 · CON 자산화 감쇠 없음(depth 1) · ★ 3 · 앵커 ★ 3 A03 근사"

- id: 쎈-0026
  page: 11
  vendor_label: B단계 대표문제 유형03
  summary: "√(a²+b²)+√((a-1)²+(b-3)²) 최솟값"
  M: {s: 3, k: 1, a: 3, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-RT, depth: 2, effective_depth: 2, description: "식 → 두 점 거리 합 기하 전환"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "P가 O~(1,3) 선분 위 최소"}
  insight_count: 2
  depth_score: 5.5   # max=2 × 2 + avg(2,1)=1.5 → 5.5
  base_star: 4
  star: 4
  premium: false
  rationale: "RT(2) 표현 전환 · CM2-GM 앵커 ★ 4 A02(거리 구하기 활용) 근사 · ★ 4"

- id: 쎈-0032
  page: 12
  vendor_label: B단계 대표문제 유형05
  summary: "A(1,-1),B(-3,1),C(3,3) 삼각형 모양"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 3, type: I-EQV, depth: 1, effective_depth: 1, description: "세 변 길이 비교 → 모양 결정"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "세 변 계산 후 조건 대조 · ★ 2 (표준 절차, 통찰 부재)"

- id: 쎈-0036
  page: 13
  vendor_label: B단계 대표문제 유형06 (증명 빈칸)
  summary: "중선정리 좌표 유도 빈칸 (AB²+AC²=2(AM²+BM²))"
  M: {s: 3, k: 2, a: 3, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-RT, depth: 2, effective_depth: 2, description: "기하 → 좌표계 설정"}
    - {step: 3, type: I-EQV, depth: 1, effective_depth: 1, description: "일반 좌표 대입"}
  insight_count: 2
  depth_score: 5.5
  base_star: 4
  star: 3   # 유도 빈칸이라 depth 낮춤
  premium: false
  rationale: "빈칸 유도라 학생 부담 낮음 · RT(2) 하지만 절반 노출 · ★ 3 (base 4에서 유도 안내로 -1)"

- id: 쎈-0040
  page: 13
  vendor_label: B단계 대표문제 유형07
  summary: "A(8,2),B(-2,7) 3:2 내분 P · OP 중점"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 2
  star: 2
  premium: false
  rationale: "내분점 공식 + 중점 공식 2회 대입 · 순수 절차형 · ★ 2"

- id: 쎈-0046
  page: 14
  vendor_label: B단계 대표문제 유형08
  summary: "A(-3,5),B(6,-2) a:(1-a) 내분 · 제1사분면 · a 범위"
  M: {s: 3, k: 2, a: 3, t: 1}   # 부호 조건 (제1사분면)
  M_total: 9
  insights:
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "내분점 좌표 매개변수 표현 → 부호 조건"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "x > 0, y > 0 두 조건 결합"}
  insight_count: 2
  depth_score: 5.5
  base_star: 4
  star: 3   # 표준 조건 결합, 절차 학습 상위권
  premium: false
  rationale: "EQV(2) · 부호 결정 T-부호 함정 · ★ 3~4 경계 · ★ 3 판정 (앵커 ★ 3 A03 근사)"

- id: 쎈-0053
  page: 15
  vendor_label: B단계 대표문제 유형10
  summary: "A(3,-2),B(a,-3b),C(2b+3,a+1) 무게중심 (2,-2) · ab"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "무게중심 공식 → 연립"}
  insight_count: 1
  depth_score: 3.0
  base_star: 3
  star: 3
  premium: false
  rationale: "무게중심 역방향 계산 · ★ 3"

- id: 쎈-0058
  page: 16
  vendor_label: B단계 대표문제 유형11
  summary: "A(-1,4),B(5,0),C(8,4) 평행사변형 ABCD · D 좌표"
  M: {s: 3, k: 2, a: 1, t: 1}   # 대각선 중점 함정
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "평행사변형 → 대각선 중점 일치"}
  insight_count: 1
  depth_score: 4.0   # max=2 × 2 = 4
  base_star: 3
  star: 3
  premium: false
  rationale: "평행사변형 성질 활용 · EQV(2) · ★ 3"

- id: 쎈-0063
  page: 17
  vendor_label: B단계 대표문제 유형12
  summary: "A(1,5),B(-4,-7),C(5,2) 각 A 이등분선·BC 교점 D 좌표"
  M: {s: 4, k: 2, a: 1, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "각 이등분선 → AB:AC = BD:DC"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "비율 → 내분점 공식"}
  insight_count: 2
  depth_score: 5.5
  base_star: 4
  star: 3
  premium: false
  rationale: "각 이등분선 성질 EQV(2) · ★ 3 (앵커 ★ 3 A04 근사)"
```

### B단계 심화 (● 상, 5문)

```yaml
- id: 쎈-0025
  page: 11
  vendor_label: B단계 ●상
  summary: "세 지점 A·B(A동4km)·C(A동1북1km) 등거리 분수대 위치·거리"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-RT, depth: 2, effective_depth: 2, description: "지도 → 좌표계 설정 (A=원점)"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "AP=BP·AP=CP 연립"}
  insight_count: 2
  depth_score: 5.5
  base_star: 4
  star: 3
  premium: false
  rationale: "지문형 RT(2) · CON(1) · ★ 3 (지도 설정 부담이 있으나 표준 등거리 문제)"

- id: 쎈-0033
  page: 12
  vendor_label: B단계 ●상
  summary: "A(2,5),B(-1,4),C(1,a) 이등변 AC=BC · a 값"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "AC²=BC² · a 이차방정식"}
  insight_count: 1
  depth_score: 3.0
  base_star: 3
  star: 3
  premium: false
  rationale: "이등변 조건 이차식 · ★ 3"

- id: 쎈-0045
  page: 14
  vendor_label: B단계 ●상
  summary: "정삼각형 ABC 변 BC 위 P · AP²+BP² 최솟값 · P가 m:n 내분 · m+n"
  M: {s: 4, k: 3, a: 2, t: 0}
  M_total: 9
  insights:
    - {step: 1, type: I-RT, depth: 2, effective_depth: 2, description: "정삼각형 → 좌표계 A=(0,√3), B=(-1,0), C=(1,0) 설정"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "AP²+BP² = P의 좌표 이차식"}
    - {step: 4, type: I-CON, depth: 1, effective_depth: 1, description: "최솟값 → 완전제곱 · 내분비 산출"}
  insight_count: 3
  depth_score: 6.0   # max=2 × 2 + avg(2,2,1)=1.67 → 5.67 ≈ 6
  base_star: 4
  star: 4
  premium: false
  rationale: "정삼각형 좌표화 + 최소화 · RT(2) · ★ 4 (앵커 ★ 4 A01·A02 근사)"

- id: 쎈-0049
  page: 15
  vendor_label: B단계 ●상
  summary: "A(a,b),B(4,-4),C(-2,2) · AB m:n 내분점 x축·AC m:n 내분점 y축 · 자연수 (a,b) 10 이하 · 삼각형 개수"
  M: {s: 5, k: 3, a: 3, t: 2}   # 다중 미지수·범위 카운트·경계
  M_total: 13
  insights:
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "x축 위 조건 → y좌표=0 방정식"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "y축 위 조건 결합 · a,b,m,n 4미지 관계식"}
    - {step: 4, type: I-MI, depth: 2, effective_depth: 2, description: "자연수 (a,b) 10이하 다중 케이스"}
    - {step: 5, type: I-VF, depth: 2, effective_depth: 2, description: "삼각형 성립 조건 (세 점 일직선 X) 검증"}
  insight_count: 4
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: "다미지 결합+케이스+검증 · CON·EQV·MI 자산화지만 depth 2로 감쇠 필요 없음 · ★ 4"

- id: 쎈-0057
  page: 16
  vendor_label: B단계 ●상 (서술형)
  summary: "무게중심 P · PA²+PB²+PC² 최소 증명"
  M: {s: 4, k: 3, a: 3, t: 0}
  M_total: 10
  insights:
    - {step: 1, type: I-RT, depth: 2, effective_depth: 2, description: "일반 좌표 P=(x,y) 설정"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "PA²+PB²+PC² x·y 이차식 전개"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "x·y 각각 완전제곱 → 최소 x=(x₁+x₂+x₃)/3"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: "무게중심 특성 증명 · RT·EQV·CON 각 depth 2 · ★ 4"
```

## B단계 나머지 39문 (0017~0020·0022~0024·0027~0031·0034·0035·0037~0039·0041~0044·0047·0048·0050~0052·0054~0056·0059~0062·0064~0069) 회귀 예측

| 라벨 층 | 문항 수 | 예측 ★ | 근거 |
|---|---|---|---|
| B단계 (라벨 없음·기본) | ~15 | ★ 2 | 표본 대표문제 0032·0040 계열 |
| B단계 ● 중 | ~14 | ★ 3 | 표본 0021·0025·0053 계열 |
| B단계 ● 상 | ~5 | ★ 3~4 | 표본 0033·0045·0057 계열 |
| B단계 서술형 | ~5 | 원 판정 (2~4) | 서술형 태그는 난이도 독립 |

**예측 상세 (49문 요약)**:
- ★ 2: 20문 (기본 반복 계산)
- ★ 3: 22문 (중난이도 조건 결합)
- ★ 4: 7문 (심화 통찰형)

**스팟체크 대상 (예측 불확실 문항)**:
- 쎈-0028 "a,b 실수 · √(a²+b²)+√((a-3)²+(b-4)²)+√((a-6)²+(b+2)²)+√((a-1)²+(b+2)²) 최솟값" — 4점 거리 합, TOUGH 급 후보
- 쎈-0031 "PA²+PB²+PC² 최소 P 좌표" — 무게중심 응용 (0057 계보)
- 쎈-0066 "OAB 각 A 외각 이등분선·OB 연장선 교점" — 외각 이등분선 심화

---

## Ⅲ. C단계 실력굳히기 전수 판정 (15/15문)

```yaml
- id: 쎈-0070
  page: 18
  vendor_label: 교육청 기출·10쪽 유형01
  summary: "x축 위 정사각형 4개 넓이비 1:4:9·B₃B₄²"
  M: {s: 4, k: 3, a: 2, t: 0}
  M_total: 9
  insights:
    - {step: 1, type: I-PD, depth: 2, effective_depth: 2, description: "정사각형 넓이비 → 변 길이비 1:2:3 발견"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "B₄=(30,18) 조건 · x좌표 합 = OA₄"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "B₃ 좌표 → 거리 계산"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: "PD(2)+CON(2) · 학평 기출 편입 · 앵커 ★ 4 A02 근사 · ★ 4"

- id: 쎈-0071
  page: 18
  vendor_label: C 사고력
  summary: "삼각형 도로 AB=AC=2√2, BC=4, ∠BAC=90° · 두 사람 √2·2km/h 최소거리"
  M: {s: 4, k: 3, a: 2, t: 0}
  M_total: 9
  insights:
    - {step: 1, type: I-RT, depth: 2, effective_depth: 2, description: "도로 → 좌표계 (A=원점, 각도)"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "각 시각 좌표 · 두 점 거리 t 이차식"}
    - {step: 3, type: I-EQV, depth: 1, effective_depth: 1, description: "완전제곱 → 최솟값"}
  insight_count: 3
  depth_score: 5.67
  base_star: 4
  star: 4
  premium: false
  rationale: "지문형 RT(2)+CON(2) · ★ 4"

- id: 쎈-0072
  page: 18
  vendor_label: C 서술형
  summary: "xy-3x+y-8=0 정수 (x,y) 다각형 둘레"
  M: {s: 5, k: 3, a: 3, t: 2}
  M_total: 13
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 2, signal_ref: [], description: "인수분해 (x+1)(y-3)=5 · 정수 해 유한화"}
    - {step: 2, type: I-MI, depth: 2, effective_depth: 2, description: "5=1×5=5×1=(-1)(-5)=(-5)(-1) 4케이스"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "4점 배치 → 다각형 (사각형)"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "다각형 형태 검증 · 둘레 계산"}
  insight_count: 4
  depth_score: 6.0   # effective_depth 감쇠 반영
  base_star: 4
  star: 4
  premium: false
  rationale: "EQV(3)→(2) 자산화 감쇠 · MI·CON·VF · ★ 4 (P2 카드 near-miss)"

- id: 쎈-0073
  page: 18
  vendor_label: 교육청·사고력·12쪽 유형05
  summary: "y=(x-k)²-2·y=2 교점 A,B · 삼각형 AOB 이등변 k 개수 n·최댓값 M·n+M"
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "이차함수(FN 단원) + 평면좌표 결합"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "AB 대칭축 x=k · A,B 좌표 (k±2, 2)"}
    - {step: 3, type: I-MI, depth: 3, effective_depth: 2, description: "이등변 3케이스 OA=OB / OA=AB / OB=AB"}
    - {step: 4, type: I-CON, depth: 3, effective_depth: 2, description: "각 케이스 k 값 · 최댓값"}
    - {step: 5, type: I-VF, depth: 2, effective_depth: 2, description: "서로 다른 두 점 조건 · k=0 배제 검증"}
  insight_count: 5
  depth_score: 8.4   # max=3 × 2 + avg(3,2,2,2,2)=2.2 → 8.2 실측
  base_star: 5
  star: 5
  premium: false
  rationale: "XU(3)+ · 학평 2021.09 고1 21번 · **premium 근접** (depth_score 8.4로 8.5 미달) · 앵커 ★ 5 A01 근사"

- id: 쎈-0074
  page: 18
  vendor_label: C·13쪽 유형07
  summary: "BC 2:1 D · DC 1:3 E · AD 위 AD=AF · △FBD:△ABE=k · k 값"
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-RT, depth: 2, effective_depth: 2, description: "일반 좌표계 · A(a,b), B=(0,0), C=(3,0)"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "D,E,F 좌표 순차 결정"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "삼각형 넓이 = 밑변×높이/2 벡터/좌표 표현"}
    - {step: 4, type: I-MI, depth: 2, effective_depth: 2, description: "F ≠ D 조건 케이스"}
  insight_count: 4
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: "다단계 좌표 처리 · RT·CON·EQV·MI 모두 depth 2 · ★ 4"

- id: 쎈-0075
  page: 19
  vendor_label: 교육청·사고력·10쪽 유형01 + 13쪽 유형07
  summary: "A(0,3),B(-5,-9),C(4,0) · AC=AD (D는 AB 위) · A 지나 DC 평행 · BC 연장 교점 P 좌표"
  M: {s: 5, k: 3, a: 2, t: 0}
  M_total: 10
  insights:
    - {step: 1, type: I-CON, depth: 2, effective_depth: 2, description: "AC=AD 조건 · D=A+AC·(AB 방향)/|AB|"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "평행 직선 방정식"}
    - {step: 3, type: I-RT, depth: 2, effective_depth: 2, description: "직선 교점 좌표"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: "다단계 기하 · 학평 기출 편입 · 앵커 ★ 4 A01 근사 · ★ 4"

- id: 쎈-0076
  page: 19
  vendor_label: C 서술형·10쪽 유형01+13쪽 유형07
  summary: "∠A=90°·BC=√6 · BC 삼등분 P,Q · l = AB²+AP²+AQ²+AC² · 3l"
  M: {s: 5, k: 3, a: 3, t: 0}
  M_total: 11
  insights:
    - {step: 1, type: I-RT, depth: 2, effective_depth: 2, description: "직각삼각형 좌표 (B=(0,0), C=(√6,0), A=(a,b) with a²+b²=6...)"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "P,Q 삼등분 좌표 → l 대수식"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "AP²·AQ² 좌표 대입 · a²+b² 조건 소거"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: "직각삼각형 좌표화 · 자산화 CON·EQV 감쇠 없음(depth 2) · ★ 4"

- id: 쎈-0077
  page: 19
  vendor_label: 교육청·사고력·15쪽 유형09
  summary: "좌표평면 A(2,3),B(7,1),C(4,5) · AB 위 D · △ABC:△ADE=4:1 · D의 y좌표 곱"
  M: {s: 4, k: 3, a: 2, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "AD=1/2·AB or 다른 비율 → 넓이비 근"}
    - {step: 2, type: I-MI, depth: 2, effective_depth: 2, description: "D의 위치 2케이스 (AB의 두 방향)"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "D 좌표 · y좌표 곱"}
  insight_count: 3
  depth_score: 5.67
  base_star: 4
  star: 4
  premium: false
  rationale: "넓이비 이용 · 학평 · ★ 4"

- id: 쎈-0078
  page: 19
  vendor_label: C 서술형·15쪽 유형10
  summary: "y=x 위 A · 정삼각형 ABC 무게중심=원점 · 넓이 36√3 · A의 x·y 곱"
  M: {s: 4, k: 3, a: 2, t: 0}
  M_total: 9
  insights:
    - {step: 1, type: I-SYM, depth: 3, effective_depth: 3, description: "정삼각형+무게중심 원점 → 세 꼭짓점 원 위 대칭"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "넓이 = (√3/4) · side²"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "A는 y=x 위·원 위 → 좌표"}
  insight_count: 3
  depth_score: 8.33   # max=3 × 2 + avg(3,2,2)=2.33 → 8.33
  base_star: 5
  star: 5
  premium: false
  rationale: "SYM(3) 이식 가능 저노출 · v3.9 ★ 5 게이트 통과 · 앵커 ★ 5 A02 근사 · ★ 5"

- id: 쎈-0079
  page: 19
  vendor_label: C·15쪽 유형10
  summary: "원점 O · OA·OB 중점 C·D · AD·BC 교점 (8,10) · △OCD 무게중심"
  M: {s: 4, k: 3, a: 2, t: 0}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "중점 정의 · 교점 조건 → A,B 좌표"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "C,D 좌표 · △OCD 무게중심"}
  insight_count: 2
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: "중점 활용 · ★ 3"

- id: 쎈-0080
  page: 20
  vendor_label: C 서술형·15쪽 유형10
  summary: "y=x/3·y=2x·y=-x+k 세 직선·OAB 내부 C(13,11)·△OAC=△ABC=△BOC · k"
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "C가 무게중심 · A,B 각 직선 교점"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "무게중심 (A+B+O)/3 = C"}
    - {step: 3, type: I-BW, depth: 3, effective_depth: 3, description: "A는 y=x/3 위·B는 y=2x 위 · 연립 후 k 역추적"}
  insight_count: 3
  depth_score: 8.33
  base_star: 5
  star: 5
  premium: false
  rationale: "BW(3) 저노출 · 무게중심 3분할 성질 · v3.9 ★ 4 저노출 게이트 통과 (★ 4·5 경계) · ★ 5 판정"

- id: 쎈-0081
  page: 20
  vendor_label: C·13쪽 유형07+15쪽 유형10
  summary: "세 중점 (1,2),(5,3),(3,7) 삼각형 무게중심 (a,b) · a+b"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "중점 삼각형 무게중심 = 원 삼각형 무게중심"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "중점→무게중심 특수 성질 (원본과 동일) · ★ 2"

- id: 쎈-0082
  page: 20
  vendor_label: C 서술형·13쪽 유형07+15쪽 유형10
  summary: "P(3,7),Q(1,1),R(9,3) 등거리 직선 l · PQ·PR 교점 A,B · QR 삼등분점 중 Q 가까운 C · △ABC 무게중심 (a,b) · 9(a+b)"
  M: {s: 5, k: 3, a: 3, t: 0}
  M_total: 11
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "P,Q,R 등거리 직선 = 삼각형 무게중심 지나는 직선? 아니, 세 점 등거리 = 외심 지나는 직선"}
    - {step: 2, type: I-RT, depth: 2, effective_depth: 2, description: "직선 조건 → 파라미터화"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "A,B,C 좌표 · 무게중심"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  rationale: "다단계 좌표 · ★ 4"

- id: 쎈-0083
  page: 20
  vendor_label: 교육청·사고력·10쪽 유형01+17쪽 유형12
  summary: "AB=2√3,BC=2,ABC · BC 중점 D · AD=√7 · ∠ACB 이등분선·AB 교점 E · CE·AD 교점 P · ∠APE 이등분선·AB 교점 R · PR 연장·BC 교점 Q · △PRE 넓이 S₁·△PQC 넓이 S₂ · S₂/S₁=a+b√7 · ab"
  M: {s: 8, k: 3, a: 3, t: 2}
  M_total: 16   # 최상급
  insights:
    - {step: 1, type: I-RT, depth: 3, effective_depth: 3, signal_ref: [P6], description: "복잡 기하 → 좌표계 (BC를 x축) · 각도·거리로 A 좌표 결정"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 2, description: "각 이등분선 성질 3중 (AC·AD, ∠ACB, ∠APE)"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 2, description: "E·P·R·Q 좌표 순차 산출"}
    - {step: 4, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P6], description: "이등분선 연쇄 패턴 · 삼각형 유사비 발견"}
    - {step: 5, type: I-VF, depth: 3, effective_depth: 3, description: "S₁·S₂ 계산 · 유리화 · a,b 유리수 확인"}
    - {step: 6, type: I-XU, depth: 2, effective_depth: 2, description: "무리수 계산 (CM1-EQ 접근) 결합"}
  insight_count: 6
  depth_score: 8.83   # max=3 × 2 + avg(3,2,2,3,3,2)=2.5 → 8.5+
  base_star: 5
  star: 5
  premium: true    # depth_score ≥ 8.5 + max=3 + count≥5 + signal_ref P6 2개 + SYM(N/A) → v3.9 게이트: PD(3) 이식 가능 저노출 O
  rationale: "RT(3)+PD(3)+VF(3) · signal_ref P6 · **★ 5 premium 확정** · 쎈 SPECIAL TIP 예제 편입 · CM2-GM ★ 5 최상위 앵커 계열 · 앵커 DI-F13-014(대칭이동·거리 8.75) 근사"

- id: 쎈-0084
  page: 20
  vendor_label: C·17쪽 유형13
  summary: "정사각형 ABCD (변 10) 내부 P · AP²-BP²=20 · P의 자취"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-RT, depth: 2, effective_depth: 2, description: "정사각형 좌표계 A(0,10),B(0,0),C(10,0),D(10,10)"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "P=(x,y) · AP²-BP² = -20y+100=20 → y=4"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "내부 조건 x∈(0,10) · 수평 선분"}
  insight_count: 3
  depth_score: 5.67
  base_star: 4
  star: 3
  premium: false
  rationale: "자취 방정식 표준 · CON(1)·EQV(2)·RT(2) · ★ 3 (5지선다 그림 판정)"
```

---

## 표본 판정 요약 (35문)

| ★ | A단계 | B단계 대표 | B단계 상 | C단계 | 합계 |
|---|---|---|---|---|---|
| ★ 1 | 4 | 0 | 0 | 0 | **4** |
| ★ 2 | 1 | 4 | 0 | 1 | **6** |
| ★ 3 | 0 | 4 | 2 | 2 | **8** |
| ★ 4 | 0 | 2 | 3 | 8 | **13** |
| ★ 5 | 0 | 0 | 0 | 3 | **3** |
| ★ 5 premium | 0 | 0 | 0 | 1 | **1** |
| **합계** | **5** | **10** | **5** | **15** | **35** |

## 예측 종합 (전체 84문)

**표본 35 + 예측 49 = 총 84문 최종 예측 분포**:

| ★ | 표본 실측 | 예측 (A10 + B39) | 전체 |
|---|---|---|---|
| ★ 1 | 4 | 10 | **14 (17%)** |
| ★ 2 | 6 | 20 | **26 (31%)** |
| ★ 3 | 8 | 22 | **30 (36%)** |
| ★ 4 | 13 | 7 | **20 (24%)** |
| ★ 5 | 3 | 0 | **3 (3.6%)** |
| ★ 5 premium | 1 | 0 | **1 (1.2%)** |

**★ 4 이상**: 24문 (29%) — 이전 눈대중 판정 27문(32%)에서 소폭 하향
**★ 5 이상**: 4문 (4.8%) — 이전 판정 7문(8.3%)에서 상당 하향 (사고력 아이콘만으로는 ★ 5 부족)
**★ 5 premium**: 1문 (0083) — 판정 유지 (SPECIAL TIP 예제 · signal_ref P6 2개)
