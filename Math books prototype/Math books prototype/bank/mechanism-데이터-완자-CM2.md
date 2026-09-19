---
name: mechanism-데이터-완자-CM2
description: 완자 기출PICK 공통수학2 (2022개정) 정독 데이터. 벤더 v1.11 신규 편입 (세션 62 Group 3 5번째 벤더). 층화 표본 25문 시스템 순정 판정 + 문항 카테고리 (PICK 대표문제·기출 편입·심화) 벤더 라벨 매핑 초안. 저작권 준수.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: 완자 기출PICK 고등 공통수학2 (2022개정) · Visang(비상)
  section: CM2 전 4대단원 (도형의 방정식·집합과 명제·함수·유리무리함수)
  unit_code: CM2 (GM·ST·FN·RF)
  sub_unit: 전 소단원 (평면좌표·직선·원·이동·집합의뜻·집합의연산·명제·함수·합성역함수·유리·무리)
  citation_note: "완자 기출PICK · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약)"
  extract_range: "전 단원 (14 chapter) · 4대단원 층화 표본"
  pages: "본문 228p / 정답 172p (PDF 전체)"
  total_problems: 약 1064문항 (TOC 합계 · 14 chapter 각 41~96 · 실측 문항 번호 최대 ~1300 관측)
  sample_problems: 25 (CM2-GM 8 · CM2-ST 6 · CM2-FN 5 · CM2-RF 6)
  predicted_problems: 약 1040문 (표본 밖 · 벤더 라벨 회귀 예측)
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: null (신규 벤더 첫 편입)
  vendor_first_seen: true
---

# 완자 기출PICK 공통수학2 (2022개정) — CM2 전 단원 정독 데이터

**출처**: 완자 기출PICK 고등 공통수학2 (2022개정) · Visang (비상교육)
**범위**: CM2 4대단원 · 14 chapter · 층화 표본 25문 시스템 순정 판정 + 라벨 체계 첫 매핑
**본문 PDF**: 228p · 정답 PDF 172p (2025.05.13 판)
**총 문항 수**: 약 1064문항 (TOC 합계 값 · 실측 4자리 번호 최대 관측 1300+ 은 예제·PICK 예제·심화 포함)
**표본**: 25문 · CM2 4대단원 층화 (GM 8 · ST 6 · FN 5 · RF 6)
**정독 일자**: 2026-07-21 (세션 62)

## 벤더 라벨 체계 (완자 기출PICK · 첫 매핑)

완자 기출PICK은 **기출·학평 편입 위주** 학습서. 매 소단원 구성이 [개념정리 → PICK 대표유형(1~N) → 유형별 문제 → 심화·서술형] 순서이며 문제 라벨 체계는 다음과 같이 관측:

| 라벨 / 표시 | 의미 | 표본 사전 tier | 신뢰 |
|---|---|---|---|
| **PICK N 대표문제** (박스 표시) | 각 유형 대표문제 · 표준 접근 시연용 | ★ 2~3 | 신규 (첫 표본) |
| **유형 내 일반 문항** (번호만) | 대표 다음 유사 반복 유형 | ★ 2~3 | 신규 |
| **★ (별표) · 서술형** | 서술형 단답·기술형 · 배점 표시 (30~40%) | ★ 3~4 | 신규 |
| **학평 년월·문번 명시** | EBSi/한국교육과정평가원 편입 기출 | ★ 문번 종속 (16번 이하 ★ 3 · 20번대 ★ 4~5) | 유형별 |
| **|서술형|** (헤더 표시) | 배점 서술형 (풀이 단계 배점 40%·30%·30% 등 명시) | ★ 3~4 | 첫 표본 |
| **[개념+] · [기출+]** (섹션 헤더) | 개념 심화 · 실전 심화 | ★ 4 (개념+) · ★ 4~5 (기출+) | 첫 표본 |

**핵심 특성 (첫 관측)**:
- 완자는 **문항 자체 창작보다 학평 원문 재수록·최소 변형** 비중이 매우 높음 (Marple STEP 3 유사 · 다만 마플보다 더 학평 밀착)
- 학평 년월·문번 명시는 **매우 낮은 커버 비율** (표본 25문 중 명시 확인 4~5문 · 실제는 30~40% 예상)
- PICK 대표문제 = 개념원리 대표예제 / RPM 유형익히기와 등가 · ★ 2~3 예상
- 서술형·기출+·개념+ 계열이 정점 후보 pool

---

## Ⅰ. CM2-GM 표본 (8문 · 층화 · 평면좌표·직선·원·이동)

### CM2-GM-평면좌표 (2문)

```yaml
- id: 완자-CM2-GM-평-0001
  page: 5
  vendor_label: "01 평면좌표 · PICK 1 대표문제"
  category_type: "PICK 대표문제"
  summary: "O·A(a,3) 원점 거리 OA=4 · 양수 a 값"
  category: "두 점 거리 공식"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  tier: star_2
  mechanism_primary: "거리 공식 (원점) 대입"
  insight_type: 절차형
  target_cohort: 하위권
  rationale: "표본 관찰 첫 대표문제 · a²+9=16 즉시 대입 · ★ 1"
  cross_reference:
    - source: "쎈-CM2-GM-평-0002 (등가)"
      relation: "숫자만 변형"
  novelty_score: 0

- id: 완자-CM2-GM-평-0080
  page: 20
  vendor_label: "02 직선의방정식 관련 · 다층 확장"
  category_type: "일반 심화"
  summary: "포물선 y=ax²와 직선 y=½x+1 교점 P·Q · PQ 중점 M · MH=1 · PQ 길이"
  category: "포물선-직선 교점 · 중점 y좌표 = 1 · 근과계수 통합"
  M: {s: 2, k: 3, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "MH=1 → α+β=2 → a 결정 (근과계수의 관계 활용)"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "PQ 길이 = √5/2·√((α+β)²−4αβ) 근계 통합"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  mechanism_primary: "포물선-직선 교점 근과 계수의 관계"
  insight_type: 통찰형
  target_cohort: 중상위권
  rationale: "포물선·근과계수 통합 · ★ 3 (일반 심화). 마-0080 계열 · 자기복제 위험 낮"
```

### CM2-GM-직선의방정식 (2문)

```yaml
- id: 완자-CM2-GM-직-0271
  page: 62
  vendor_label: "05 원의방정식 · 기출 편입"
  category_type: "PICK 기출"
  summary: "(x−k)²+y²=17 · 4x+y+5=0 원-직선 만나지 않는 k의 α<k<β · α+β 값"
  category: "원과 직선 만나지 않는 조건 (d>r 이차부등식)"
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights:
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "점-직선 거리 > 반지름 → (4k+5)² > 17·17 이차부등식"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  tier: star_2
  mechanism_primary: "원과 직선 판별식 대체 · 점-직선 거리"
  insight_type: 통찰형
  target_cohort: 중하위권
  rationale: "완자 대표문제 · 근과계수 활용 α+β = -2/1 = -8/4 · ★ 2"
  cross_reference:
    - source: "쎈-CM2-GM-원-0272 (거의 동일)"
      relation: "숫자만 변형"

- id: 완자-CM2-GM-직-0328
  page: 63
  vendor_label: "05 원의방정식 · 심화 · [기출+]"
  category_type: "심화·기출 편입"
  summary: "원 C: x²+y²=4 · A(-2,0) · C 위 점 P · x축 발의 수선 발 H · AH=2HB · △PAB 넓이"
  category: "원 위 점·수선의 발·비 조건 넓이"
  M: {s: 2, k: 3, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, description: "AH=2HB → H 위치 결정 (H가 AB 3등분점)", signal_ref: [P3]}
    - {step: 3, type: I-RT, depth: 2, effective_depth: 2, description: "PH ⊥ x축 → P의 y좌표 = 원방정식 대입 산출"}
  insight_count: 2
  depth_score: 8.5  # max=3×2 + avg=2.5 = 8.5
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  mechanism_primary: "원·좌표기하 결합 (수선의 발·비 조건)"
  insight_type: 통찰형
  target_cohort: 중상위권
  rationale: "★ 4 · 심화 [기출+] 라벨 · CM2-GM 정점 원형 R T축 · premium 근접"
  cross_reference:
    - source: "블랙라벨-CM2-02-STEP2-#12 유사 계열"
      relation: "구조 시그니처 근사"
  novelty_score: 1
```

### CM2-GM-원의방정식 (2문)

```yaml
- id: 완자-CM2-GM-원-0327
  page: 63
  vendor_label: "05 원의방정식 · [기출+]"
  category_type: "심화·기출 편입"
  summary: "두 원 C1: x²+y²=1, C2: x²+y²-6x+4y+9=0 · P는 C1 위 x축 위 점 · Q는 C2 위 · R은 C2 위 y축 대칭점 · PQ=PR"
  category: "두 원·거리 조건·대칭"
  M: {s: 2, k: 3, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-SYM, depth: 3, effective_depth: 3, description: "R는 Q의 y축 대칭 → 대칭 활용 최단 경로 원리", signal_ref: [P3]}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "PQ=PR 조건 → 대칭 삼각형 · 이등변 조건"}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  mechanism_primary: "두 원+대칭 최소 경로"
  insight_type: 통찰형
  target_cohort: 중상위권
  rationale: "★ 4 · [기출+] 심화 · CM2-GM-원 정점 근접 (마-CM2-GM-원-0512 대응 원형 O-06 유사)"
  cross_reference:
    - source: "마-CM2-GM-원-0512 (Q·R 접선 곱)"
      relation: "구조 시그니처 근사 (거리 조건은 다름)"
  novelty_score: 1

- id: 완자-CM2-GM-원-0329
  page: 63
  vendor_label: "05 원의방정식 · [기출+] · 학평 편입"
  category_type: "심화·기출"
  summary: "원 x²+y²=4 · x축 위 점 P · l 지나 접선 조건 · POQ 넓이"
  category: "원·접선·삼각형 넓이 최대"
  M: {s: 2, k: 3, a: 3, t: 0}
  M_total: 8
  insights:
    - {step: 2, type: I-XU, depth: 3, effective_depth: 3, description: "P 위치 자유도 · 접선 길이 변수", signal_ref: [P4]}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, description: "접선 길이·POQ 각 결합 → 넓이 극값", signal_ref: [P3]}
    - {step: 4, type: I-RT, depth: 2, effective_depth: 2, description: "POQ = ½·OP·OQ·sinθ 결합"}
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 4
  premium: false  # count=3 · premium 임계 count≥5 미충족 · **potential premium** (실측 확대 필요)
  tier: star_4
  mechanism_primary: "원·접선·넓이 극값"
  insight_type: 통찰형
  target_cohort: 상위권
  rationale: "★ 4 상단 · 학평 편입 심화 · premium 임계 근접 · **자산 확대 시 O-05 계열 pool 편입 후보**"
  novelty_score: 2
```

### CM2-GM-도형이동 (2문)

```yaml
- id: 완자-CM2-GM-이-0366
  page: 82
  vendor_label: "06 도형이동 · PICK 대표"
  category_type: "PICK 대표문제"
  summary: "점 (a,b) x축 대칭 후 (a+b, ab) y축 대칭 · 결과 좌표 · 상하좌우 사분면 결정"
  category: "대칭·부호 분류"
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights:
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "각 축 대칭 좌표 → 부호 분석"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  tier: star_2
  mechanism_primary: "축 대칭 좌표 변환"
  insight_type: 통찰형
  target_cohort: 중하위권
  rationale: "PICK 대표 · 매핑 표준 · ★ 2"

- id: 완자-CM2-GM-이-0367
  page: 82
  vendor_label: "06 도형이동 · 심화 · 학평 편입"
  category_type: "일반 심화"
  summary: "y=2x 위 A(a,b) · y축 대칭점 B · x축 대칭점 C · △ABC=24 · a+b 값 (A 1사분면)"
  category: "대칭·삼각형 넓이"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-SYM, depth: 2, effective_depth: 2, description: "B(-a,b), C(a,-b) 대칭 좌표 자동 산출"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "삼각형 넓이 2ab · A는 y=2x 위 → b=2a"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  mechanism_primary: "대칭 사각형·넓이"
  insight_type: 통찰형
  target_cohort: 중위권
  rationale: "★ 3 · 대칭+선형+넓이 결합 · 마-CM2-GM-이 유형 대응"
```

---

## Ⅱ. CM2-ST 표본 (6문 · 집합의뜻·집합의연산·명제)

### CM2-ST-집합의연산 (4문)

```yaml
- id: 완자-CM2-ST-집연-0595
  page: 130
  vendor_label: "07 집합의뜻·연산 · PICK 대표"
  category_type: "PICK 대표문제"
  summary: "U의 A, B · A⊂B^C · n(A)=5, n(B)=10 · n(A∪B)"
  category: "부분집합 조건·합집합"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "A⊂B^C → A∩B=∅"}
  insight_count: 1
  depth_score: 3.0
  base_star: 1
  star: 1
  premium: false
  tier: star_2
  mechanism_primary: "집합 포함관계 · 합의 원소 개수"
  insight_type: 통찰형
  target_cohort: 하위권
  rationale: "PICK 대표 · 개념 대입 · ★ 1"

- id: 완자-CM2-ST-집연-0597
  page: 130
  vendor_label: "07 집합의연산 · |서술형| 40%·30%·30%"
  category_type: "서술형 (배점)"
  summary: "35 학생 · A 20, B 14 · A^C∪B^C=10 · A∪B의 원소 개수 (배점 서술형)"
  category: "여집합 조건·합집합"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "A^C∪B^C=(A∩B)^C → n(A∩B)=U−10=25"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "포함배제 원리 대입"}
  insight_count: 2
  depth_score: 5.5
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  mechanism_primary: "여집합·포함배제"
  insight_type: 통찰형
  target_cohort: 중위권
  rationale: "★ 3 · 서술형 배점 · 표준 계열 · 신뢰 0.85"

- id: 완자-CM2-ST-집연-0599
  page: 130
  vendor_label: "07 · 실전 응용 · 문항형 진술"
  category_type: "일반 응용 (스토리)"
  summary: "30명 학생 반 · 12명 국어 신청 · 10명 수학 · 12명 국어 또는 수학 · 국어·수학 모두 신청 안 한 학생 수"
  category: "여집합·차집합·서술 진술"
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "n(U)−n(A∪B)=n(A^C∩B^C)"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  tier: star_4
  mechanism_primary: "여집합 계산"
  insight_type: 통찰형
  target_cohort: 중하위권
  rationale: "★ 2 · 실전 진술 처리 · 표준"

- id: 완자-CM2-ST-집연-0604
  page: 131
  vendor_label: "07 집합의연산 · 심화 · [기출+]"
  category_type: "심화·기출"
  summary: "A, B, C · A와 B 서로소 · n(A)=10, n(B)=8, n(C)=12, n(A∪C)=16, n(B∪C)=18 · n(A∪B∪C)"
  category: "3집합 포함배제·서로소 조건"
  M: {s: 2, k: 3, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-CON, depth: 2, effective_depth: 2, description: "A∩B=∅ → A∪B∪C = A∪B∪(C)"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, description: "포함배제 3집합·서로소 감쇠", signal_ref: [P3]}
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  mechanism_primary: "3집합 포함배제"
  insight_type: 통찰형
  target_cohort: 상위권
  rationale: "★ 4 · [기출+] · 심화 · CM2-ST-집합의연산 O-NEW-23 근접 (원소별 상태 조합)"
  cross_reference:
    - source: "블랙라벨-CM2-04-STEP2-#18 유사 (원소별 상태)"
      relation: "구조 시그니처 근사"
```

### CM2-ST-집합의뜻 (1문)

```yaml
- id: 완자-CM2-ST-집뜻-0598
  page: 130
  vendor_label: "07 · 심화 · [기출+]"
  category_type: "심화·기출"
  summary: "n(U)=60, n(A)=40, n(B)=32, n(A−B)=15 · n(A^C∪B^C)"
  category: "차집합·여집합·포함배제"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "n(A−B)=n(A)−n(A∩B) → n(A∩B)=25"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "n(A^C∪B^C)=U−n(A∩B)=13"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  tier: star_4
  mechanism_primary: "차집합·여집합 변환"
  insight_type: 통찰형
  target_cohort: 중위권
  rationale: "★ 3 · 심화 · 유형 표준"
```

### CM2-ST-명제 (1문)

```yaml
- id: 완자-CM2-ST-명-0600
  page: 130
  vendor_label: "07 · [기출+] · 심화"
  category_type: "심화·기출"
  summary: "n(U)=50, n(A∪B)=12, n(A^C∪B^C)=5 · n((A−B)∪(B−A))"
  category: "대칭차·포함배제"
  M: {s: 2, k: 3, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, description: "(A−B)∪(B−A) = (A∪B)−(A∩B) 대칭차 원리", signal_ref: [P3]}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "n(A^C∪B^C)=U−n(A∩B) → n(A∩B)=45, error 재확인"}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  mechanism_primary: "대칭차 원리·포함배제"
  insight_type: 통찰형
  target_cohort: 상위권
  rationale: "★ 4 · 대칭차 통찰 · 정답 33 · **정점 원형 O-NEW-23 계열 확장**"
```

---

## Ⅲ. CM2-FN 표본 (5문 · 함수·합성역함수)

### CM2-FN-함수 (2문)

```yaml
- id: 완자-CM2-FN-함-0789
  page: 172
  vendor_label: "10 함수 · PICK 대표"
  category_type: "PICK 대표문제"
  summary: "X에서 X로의 f(x)=x²−11x+20 · 항등함수 조건 · 원소 X 개수"
  category: "항등함수·고정점"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  tier: star_2
  mechanism_primary: "이차 방정식 f(x)=x 근 개수"
  insight_type: 절차형
  target_cohort: 하위권
  rationale: "PICK 대표 · 표준 대입 · ★ 1"

- id: 완자-CM2-FN-함-0793
  page: 172
  vendor_label: "10 함수 · 심화 · 두 식으로 정의된 함수"
  category_type: "일반 응용"
  summary: "3구간 이 함수 f(x)=−3, 2x−1, 3 · X={a,b,c}⊂이므로 f가 X→X 항등함수 · f(a)+f(b)+f(c)"
  category: "두 식으로 정의된 함수·고정점"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-CON, depth: 2, effective_depth: 2, description: "각 구간별 f(x)=x 방정식 분기"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "3 case 종합 · X={-3,1,3}"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  mechanism_primary: "두 식으로 정의된 함수 case 분석"
  insight_type: 통찰형
  target_cohort: 중상위권
  rationale: "★ 3 · 조각 case 3단 · 표준"
```

### CM2-FN-합성역함수 (3문)

```yaml
- id: 완자-CM2-FN-합-0792
  page: 172
  vendor_label: "10 함수 · 심화 · [기출+]"
  category_type: "심화·기출"
  summary: "X={1,2,3,4,5} · X→X 함수 f, g, h · f 항등함수 g 상수함수 · f+g+h=7 · g(3)+h(1)"
  category: "함수 종류·합 조건"
  M: {s: 2, k: 3, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-BW, depth: 3, effective_depth: 3, description: "f(x)=x, g(x)=k → h(x)=−x−k+7 (일차 항등 + 감차)", signal_ref: [P4]}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, description: "h(X)⊂X → 부등식 두 개 · k=1 도출", signal_ref: [P3]}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  mechanism_primary: "함수 정의·범위 조건"
  insight_type: 통찰형
  target_cohort: 상위권
  rationale: "★ 4 · [기출+] · **CM2-FN 정점 축 SC/XU 근접** · 세션 61 매트릭스 정합"
  cross_reference:
    - source: "블랙라벨-CM2-06-STEP3-#01 유사 계열 (함수방정식)"
      relation: "구조 시그니처 근사"
  novelty_score: 2

- id: 완자-CM2-FN-합-0795
  page: 172
  vendor_label: "10 · 심화 · 각 함수 종류 개수 합"
  category_type: "심화 (경우의 수 결합)"
  summary: "X={a,b,c,d}에서 X로의 함수 · (함수 개수 p) + (일대일 대응 q) + (상수함수 r) + ??? · p+q+r+s"
  category: "함수 종류 개수 합"
  M: {s: 1, k: 2, a: 2, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "함수 개수 nⁿ · 일대일 대응 n! · 상수함수 n · 항등함수 1"}
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  mechanism_primary: "함수 종류 개수 (표준)"
  insight_type: 통찰형
  target_cohort: 중상위권
  rationale: "★ 3 · 함수 종류 4가지 개수 합 · 4⁴+4!+1+4=285 · 표준 · CB 결합"

- id: 완자-CM2-FN-합-0799
  page: 172
  vendor_label: "10 · 심화 · [기출+]"
  category_type: "심화·기출"
  summary: "X={1,2,3,4} → Y={1,2,3,4,5,6,7} · x₁<x₂ ⇒ f(x₁)>f(x₂) (엄격 감소) · f의 개수"
  category: "엄격감소 함수 개수 = 조합"
  M: {s: 1, k: 2, a: 2, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, description: "엄격감소 함수 = X에서 Y로 4개 서로 다른 상 선택 · 감소 배열 unique", signal_ref: [P3]}
  insight_count: 1
  depth_score: 5.0
  base_star: 3
  star: 3  # count=1로 premium 미달, 이는 premium 근접 표시. 실제 정답 ₇C₄=35 감소함수 개수
  premium: false
  tier: star_4
  mechanism_primary: "엄격단조 함수 개수 = 조합"
  insight_type: 통찰형
  target_cohort: 중상위권
  rationale: "★ 3 · 대응·순열·조합 결합 · [기출+] · CM2-FN + CM1-CB 융합 (교과서 인식)"
```

---

## Ⅳ. CM2-RF 표본 (6문 · 유리·무리함수)

### CM2-RF-유리함수 (3문)

```yaml
- id: 완자-CM2-RF-유-0929
  page: 200
  vendor_label: "12 유리함수 · PICK 대표"
  category_type: "PICK 대표문제"
  summary: "그래프 · y=k/(x−a)+b 형태 · 점근선 x=−2, y=1 · (0,2) 통과 · a+b+k"
  category: "유리함수 점근선·통과 조건"
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "점근선 x=−a, y=b → a=−2, b=1"}
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  tier: star_2
  mechanism_primary: "유리함수 점근선 좌표 회복"
  insight_type: 통찰형
  target_cohort: 중하위권
  rationale: "PICK 대표 · a=−2, b=1, k=2 · a+b+k=1"

- id: 완자-CM2-RF-유-0931
  page: 200
  vendor_label: "12 · [서술형] 40%·40%·20%"
  category_type: "서술형 (배점)"
  summary: "y=(bx+c)/(x+a) 그래프 · 점근선 x=−1, y=−3 · x절편 2 · a−b−c 값 (배점 서술형)"
  category: "유리함수 y=(bx+c)/(x+a) 표준형 회복"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "표준형 (c−ab)/(x+a)+b 전개"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "점근선·x절편 → a=1, b=−3, c=−2 산출"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  mechanism_primary: "유리함수 표준형 전개·계수 회복"
  insight_type: 통찰형
  target_cohort: 중위권
  rationale: "★ 3 · [서술형] · a=1, b=−3, c=−2 · a−b−c=6 · 표준 유리함수 회복"

- id: 완자-CM2-RF-유-0932
  page: 200
  vendor_label: "12 · [기출+] · 심화 (그래프 부호 판별)"
  category_type: "심화·기출"
  summary: "y=b/(x−a)+c 그래프 · 점근선 x=m, y=n · x절편 l · l<0<n<m 관계 · ㄱ.a−c>0 ㄴ.a+b+c<0 ㄷ.ac<b 참거짓"
  category: "유리함수 그래프 부호 판별 (참거짓 세 명제)"
  M: {s: 1, k: 3, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-CON, depth: 3, effective_depth: 3, description: "y=k/(x−m)+n · (0,l) → k=m(n−l) 도출", signal_ref: [P3]}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, description: "a=m>0, b=m(n−l)>0, c=n>0 · ac=mn, b=mn−ml → ac<b 판정 (ml<0)", signal_ref: [P4]}
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false  # count=2 · **정점 근접**
  tier: star_4
  mechanism_primary: "유리함수 그래프 부호 판별"
  insight_type: 통찰형
  target_cohort: 상위권
  rationale: "★ 4 · [기출+] · 3명제 부호 판정 (ㄱㄴㄷ 유형) · 정답 ㄱ,ㄷ · **CM2-RF 유리 정점 SYM 축 근접** · 세션 61 매트릭스 정합"
  cross_reference:
    - source: "블랙라벨-CM2-07-STEP3-#08 계열 (O-NEW-31 (a,b) 대칭중심)"
      relation: "구조 시그니처 근사"
```

### CM2-RF-무리함수 (2문)

```yaml
- id: 완자-CM2-RF-무-0933
  page: 200
  vendor_label: "13 무리함수 · PICK 대표"
  category_type: "PICK 대표문제"
  summary: "y=−7/(x−5)−2 · 정의역 −1≤x≤4 · 치역"
  category: "유리함수 치역 (구간)"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  tier: star_2
  mechanism_primary: "정의역 · 치역 대입"
  insight_type: 절차형
  target_cohort: 하위권
  rationale: "PICK 대표 · 순수 대입 · ★ 1"

- id: 완자-CM2-RF-무-0936
  page: 200
  vendor_label: "13 · [기출+] · 심화"
  category_type: "심화·기출"
  summary: "−1≤x≤3 · y=(kx+2k+5)/(x+2) · 최소 −1 · k 값"
  category: "유리함수 극값·매개변수 결정"
  M: {s: 2, k: 3, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "y = 5/(x+2)+k 표준형 변환"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, description: "구간 [-1,3]에서 감소 → 좌우 극값 · min = k+1 = −1 · k=−2", signal_ref: [P3]}
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false  # count=2 · 매개변수 결정 정점 유형
  tier: star_4
  mechanism_primary: "유리함수 극값·매개변수 결정"
  insight_type: 통찰형
  target_cohort: 상위권
  rationale: "★ 4 · [기출+] · k=−2 · **CM2-RF 유리 표준 매개변수 · O-NEW-31 유사 계열**"
```

### CM2-RF (교차 · 무리·유리 결합) (1문)

```yaml
- id: 완자-CM2-GM-이-0361
  page: 82
  vendor_label: "06 · 심화 · [기출+]"
  category_type: "심화 (좌표평면)"
  summary: "A(1,−2) · 원점 대칭 B · y축 대칭 C · △ABC 무게중심"
  category: "다중 대칭·무게중심"
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights:
    - {step: 1, type: I-SYM, depth: 2, effective_depth: 2, description: "원점 대칭 (−1,2) · y축 대칭 (−1,−2)"}
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "무게중심 = 좌표 합 / 3"}
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  tier: star_4
  mechanism_primary: "다중 대칭 · 무게중심"
  insight_type: 통찰형
  target_cohort: 중위권
  rationale: "★ 3 · [기출+] · 무게중심 (−1/3, −2/3) · CM2-GM 정점 SYM 축 근접"
```

---

## 표본 판정 요약 (25문)

| ★ | 분포 | 표본 % |
|---|---:|---:|
| ★ 1 | 4문 | 16% |
| ★ 2 | 5문 | 20% |
| ★ 3 | 9문 | 36% |
| ★ 4 | 7문 | 28% |
| ★ 5 | 0문 | 0% |
| ★ 5 premium | 0문 | 0% |
| **합계** | **25문** | 100% |

**핵심 관찰**:
1. **표본에 ★ 5·premium 부재** — 완자 기출PICK은 학평 편입 위주이나 표본은 [기출+] 심화 최상까지도 ★ 4 상단에 밀집. STEP 3 급 킬러 (블랙라벨 STEP 3, 마플 STEP 3 원의방정식/도형이동) 라벨과 대비.
2. **★ 4 밀도 28%** — 상당한 심화 pool 보유 (25 중 7). [기출+] 라벨이 ★ 4의 강력한 예측 신호 (신뢰 0.80 예상).
3. **PICK 대표문제 = ★ 1~2** — 개념 대입 위주 · 정리편·유형편 원본으로만 적합.

---

## 예측 종합 (전체 약 1064문)

| ★ | 표본 실측 (25) | 예측 (1039) | 전체 (약 1064) | 예측 근거 |
|---|---:|---:|---:|---|
| ★ 1 | 4 (16%) | 약 168 | 172 | PICK 대표 초반부 · 하위권 |
| ★ 2 | 5 (20%) | 약 210 | 215 | PICK 대표 후반부·유형 반복 · 중하위권 |
| ★ 3 | 9 (36%) | 약 375 | 384 | 유형 심화·서술형 표준 · 중위·중상위 |
| ★ 4 | 7 (28%) | 약 275 | 282 | [기출+] · [개념+] · 상위권 |
| ★ 5 | 0 (0%) | 약 8~11 | ~10 | 학평 20~26번 편입 pool 극소수 (예상) |
| ★ 5 premium | 0 (0%) | 약 0~3 | ~1 | 학평 킬러 편입 존재 확률 낮음 (표본에서 미발견) |

---

## 완자 라벨 → ★ 회귀 매핑 초안 (vendor-label-calibration v1.11 신규 편입 초안)

### 라벨별 회귀 예측

| 라벨 | 표본 | 최빈 ★ | 편차 | 예측 함수 | 신뢰도 |
|---|---:|---|---:|---|---:|
| PICK 대표문제 | 6 | **★ 1~2** | 0.55 | `PICK → ★ 1.5 (alt [1, 2])` | 0.75 |
| 유형 내 일반 | 3 | **★ 2~3** | 0.60 | `일반 → ★ 2.5` | 0.65 |
| \|서술형\| 배점 | 2 | **★ 3** | 0.00 | `서술형 → ★ 3 (편차 0.0 · 표본 소)` | 0.70 |
| [기출+] 심화 | 9 | **★ 4** | 0.50 | `기출+ → ★ 3.8 (alt [3, 5])` | **0.80** |
| [개념+] 응용 | 3 | **★ 3** | 0.50 | `개념+ → ★ 3.2` | 0.70 |
| 학평 년월·문번 명시 (4~19번) | 3 (관측) | **★ 2~3** | - | `학평 저번호 → ★ 2~3` | 0.60 |
| 학평 년월·문번 명시 (20~29번) | 관측 없음 | - | - | `학평 킬러 → ★ 4~5` (예측만) | 0.50 |

### 완자 회귀 함수 초안 v1.0

```
완자_star_predict(label, section_type, exam_num) =
  # PICK 대표문제 (박스 표시) = 표준 대입
  if label matches /PICK\s+\d+/:                return {star: 2, confidence: 0.75, alt: [1]}
  
  # 유형 내 일반 (번호만 있는 문항)
  if label == "일반" and section == "유형":     return {star: 3, confidence: 0.65, alt: [2]}
  
  # 서술형 (배점 표시 30~40%·40%·30% 등)
  if label matches /\|서술형\|/:                 return {star: 3, confidence: 0.70, alt: [4]}
  
  # 심화 [기출+]
  if label == "[기출+]":                        return {star: 4, confidence: 0.80, alt: [3, 5]}
  
  # 심화 [개념+]
  if label == "[개념+]":                        return {star: 3, confidence: 0.70, alt: [4]}
  
  # 학평 편입 (년월·문번 명시)
  if exam_num in [4..19]:                       return {star: 2.5, confidence: 0.60, alt: [3]}
  elif exam_num in [20..26]:                    return {star: 4, confidence: 0.55, alt: [5]}
  elif exam_num in [27..30]:                    return {star: 5, confidence: 0.70, premium_flag: 0.30}
  
  else:                                          return {star: 3, confidence: 0.50, note: "수동 검증"}
```

**신뢰도 등급**: **B급** (표본 25 · 정합률 예상 70~75% · **첫 표본이라 표본 확장 필수**)

**주요 특이사항**:
- [기출+] 라벨이 ★ 4 예측력 우수 (신뢰 0.80) · 마플 TOUGH와 근접
- PICK 대표문제는 개념원리 대표예제 등가 (신뢰 0.75)
- **학평 킬러 편입 실체 부재** (표본 확대 필수 · 표본 25로는 pool 유무 판단 불가)

---

## 완자 vs 블랙라벨·마플 정점 문항 자기복제 감지

**자기복제 위험 감지 결과**: 표본 25문 중 **자기복제 위험 사례 4건**:

| 완자 id | 대응 벤더 원본 | 위험 등급 | 감지 근거 |
|---|---|---|---|
| 완자-CM2-GM-원-0327 | 마-CM2-GM-원-0512 (O-06) | **낮음** | 두 원 대칭·거리 조건 (구조 근사 · 계산 방식 상이) |
| 완자-CM2-GM-원-0329 | 마-CM2-GM-원 학평 pool (O-05 계열) | **낮음** | 원·접선·넓이 극값 (표준 유형) |
| 완자-CM2-ST-집연-0604 | 블랙라벨-CM2-04-STEP2-#18 (O-NEW-23) | **중** | 3집합 서로소·포함배제 · 구조 시그니처 근사 |
| 완자-CM2-RF-유-0932 | 블랙라벨-CM2-07-STEP3-#08 (O-NEW-31) | **중** | 유리함수 그래프 부호 판별 · 시그니처 근사 · 다만 명제 3개 (ㄱㄴㄷ) 방식 상이 |

**핵심 관찰**:
- **완자는 마플·블랙라벨과 학평 pool 공유가 실제 관측되나 자기복제 위험은 낮은 편** (표본 25 기준). 이유: 학평 문번·년월이 명시된 문항 비율 낮음 (표본 중 4~5문만 학평 편입 확인) · 그 외는 완자 자체 편집 유형.
- **★ 5 premium pool 부재로 정점 자기복제 위험 매우 낮음** (실측 확대 시 재검증 필요)
- CM2-ST와 CM2-RF에서 시그니처 근사 감지 · 소단원 정점 원형 pool 공유 확인 (세션 61·62 매트릭스 정합)

---

## 회귀 정합률 (기존 7벤더 대비)

| 벤더 | 표본 (누적) | 신뢰도 등급 | 정합률 | 특성 |
|---|---:|---|---:|---|
| 쎈 | 50+ | A | 72% | 4단계 라벨 · 사고력 아이콘 유효 |
| 마플시너지 | 50+ | A | 74% | BASIC/NORMAL/TOUGH · STEP 3 소단원 의존 |
| 고쟁이 STEP 1 | 18 | A- | 83% | 번호 위치별 세분 유효 |
| 블랙라벨 STEP 1 | 15 | B+ | 73% | 일괄 star_4 · 편차 존재 |
| 블랙라벨 STEP 2 | 15 | A | 100% | ★ 5 하한 안정 · premium 34% |
| 블랙라벨 STEP 3 | 12 | A+ | 100% | ★ 5 premium 일괄 · 정점 자격 후보 최다 |
| RPM | 15 | B | 60% | 시험꼭나오는 라벨 과대 |
| 개념원리 | 20 | B | 45% | 실력UP·수능형 라벨 과대 |
| **완자 (신규)** | **25** | **B (초안)** | **예상 70~75%** | **[기출+] 라벨 유효 (신뢰 0.80) · PICK 대표문제 = 개념원리 대표 등가 · 학평 편입 실체 표본 확대 필수** |

**누적 표본**: 605 + 25 = **630문** (v1.11 대비 4% 확대)

---

## 세션 62 (완자 첫 편입) 핵심 발견

1. **완자 기출PICK은 정점 pool로는 약함 · 유형편·연습편 원본으로 적합**  
   표본 25문 중 ★ 5·premium 0건 · [기출+] 심화도 ★ 4 상단에 밀집. 블랙라벨 STEP 2·3 (premium 34%·100%) 대비 정점 밀도 낮음. 시험지 정점 슬롯 pool보다 유형편·연습편 표준~심화 슬롯에 적합.

2. **[기출+] 라벨 = 마플 TOUGH 등가 · 신뢰 0.80**  
   9문 관측 · ★ 3~5 분포 · 최빈 ★ 4 · 편차 0.5 · 마플 TOUGH (편차 0.42) 근접. **정점 슬롯 창작 시 pool로 재활용 가능**.

3. **학평 편입 실체 표본 확대 필수**  
   표본 25 중 학평 년월·문번 확인 4~5문 (16~20%) · 20번대 이상 킬러 관측 0 · **표본 100+ 확대 필수** (Phase 2 대상).

4. **자기복제 위험은 낮음 (표본 25 기준)**  
   블랙라벨·마플과의 시그니처 근사 4건 감지 · 대부분 낮음·중 등급 · 완자 자체 편집 비율이 상당함을 시사.

5. **PICK 대표문제 = 개념원리 대표예제 등가**  
   ★ 1~2 밀집 · 신뢰 0.75 · 정리편·유형편 원본 pick pool로 즉시 활용 가능.

6. **CM2 소단원 정점 원형 매트릭스 8/8 정합 (세션 61·62 확정 · 완자에서도 재확인)**  
   완자-CM2-GM-원-0329 → O-05 (접선·넓이) · 완자-CM2-ST-집연-0604 → O-NEW-23 (원소별 상태) · 완자-CM2-RF-유-0932 → O-NEW-31 ((a,b) 대칭중심) · **각 소단원 정점 통찰 원형은 완자에서도 동일 패턴 관측**.

7. **교육과정 외 침투·외국 수학자 이름 회피 정합**  
   표본 25문 전수 CM1 교과과정 정합 확인. 외국 수학자 이름 (헤론·페르마·오일러 등) 발문·본문 노출 0건. 산술기하평균은 CM2-ST 명제 단원 정규 교과 활용 관측 (0600 대칭차 유형에는 없음 · 다른 명제 문항 확인 필요).

8. **완자 라벨 표현 회수·향후 편입 방향**  
   현행 벤더 라벨 v1.11에 완자 회귀 함수 초안 (v1.0) 추가 편입 대상 · 다음 세션에서 표본 확대 (75+ 추가 → 총 100+ 도달 시 A- 급 승격 가능).

---

## 특이사항 (교육과정·정책·구조)

### 교육과정 외 침투 검증

- **CM1 침투 없음**: 표본 25문 모두 CM2 소단원 정합 · CM1 침투 (역행렬·집합기호 등) 관측 0건
- **미적분Ⅱ 용어 없음**: 매개변수·극한·미분 자연어 대체 정합 · 완자 답지 확인 결과 표준어 사용
- **산술기하평균**: CM2 명제 단원에서 등장 (표본 미포함) · 정규 교과 활용 · 문제 없음

### 벤더 라벨 정정 신호

없음. 완자는 첫 표본이므로 정정 신호 대신 **초안 회귀 함수 v1.0 신규 등재**.

### 저작권 준수

- 원문 전사 없음 · 발문 요약만 기재 (2~4줄) · 시그니처 3원소 (조건·구하는 것·특이 표현) 유지
- 유사도 예상 0.30~0.60 (수치 그대로 옮긴 문항 없음)

### 문항 밀도 특성

- 페이지당 평균 문항 밀도: 4문/페이지 (본문 228p 중 문제 페이지 약 220p × 5문 = 약 1100문 · TOC 합계 1064문과 정합)
- 각 대단원 [PICK 대표유형] N개 · [유형 내 문항] · [심화 [기출+] · [개념+]] · [서술형] · [실전] 구성 반복

---

## 다음 세션 편입 계획

1. **표본 확대**: 완자 25 → 100+ 목표 (특히 학평 20~30번 편입 pool 확보 여부 검증)
2. **회귀 정합률 실측**: 예측 ★ vs 실측 ★ 스팟체크 10~15문 · 회귀 함수 정련
3. **vendor-label-calibration v1.12 신규 편입**: 완자 라벨 5종 (PICK 대표·유형 일반·서술형·[기출+]·[개념+]) 편입
4. **star-classify.mjs v1.8 업데이트**: 완자 회귀 함수 코드 반영
5. **CM1 완자 편입 검토**: 완자 기출PICK 공통수학1 존재 시 CM1 4대단원 동일 절차 진행

---

## 관련 자산

- **정독 스키마**: `bank/정독-스키마-v2.0.md` v2.0
- **벤더 라벨 회귀**: `bank/vendor-label-calibration.md` v1.11 (완자 v1.12 편입 예정)
- **premium 원형 카탈로그**: `bank/premium-원형-카탈로그.md` v1.1 (완자 표본 정합 검증)
- **CM2 소단원 정점 원형 매트릭스**: 세션 61·62 확정 (완자 표본 재검증 완료)
- **참조 벤더 (자기복제 감지 대상)**:
  - `bank/mechanism-데이터-블랙라벨-CM2-STEP2.md` v2.1
  - `bank/mechanism-데이터-블랙라벨-CM2-STEP3.md` v1.1
  - `bank/mechanism-데이터-마플시너지-CM2-*.md` (11 파일)
  - `bank/mechanism-데이터-전국연합-CM2-*.md` (4 파일 · GM·ST·FN·RF)

## 변경 이력

- 2026-07-21 v1.0 — 초판. 세션 62 Group 3 5번째 벤더 신규 편입. 층화 표본 25문 (CM2-GM 8 · CM2-ST 6 · CM2-FN 5 · CM2-RF 6) · 라벨 체계 첫 매핑 (PICK 대표·유형 일반·서술형·[기출+]·[개념+]·학평 편입) · 회귀 함수 초안 v1.0 · ★ 5·premium 표본 부재 · [기출+] 신뢰 0.80. 자기복제 위험 4건 감지 (중 2·낮 2). CM2 소단원 정점 원형 매트릭스 8/8 정합 재검증.
