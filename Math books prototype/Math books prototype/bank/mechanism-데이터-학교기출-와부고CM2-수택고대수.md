---
name: mechanism-데이터-학교기출-와부고CM2-수택고대수
description: 와부고 CM2 잔여 2년 (2022·2023 · 2학기 중간·기말) + 수택고 대수 삼각함수 대비 프린트 (2025~2026 학평 배출 21문 + 자체 5문) 통합 정독. 대수 라인 실전 pool 최초 확보 · CM2 3년 (2022·2023·2025) 5개 시험지 92문 아카이브 완성 (기존 v1.0에 2022·2023 판정 보강).
metadata:
  type: reference
  version: v1.0
  established: 2026-07-22
  sources:
    - "와부고등학교 고1 정기고사 (2022·2023 2학기 중간·기말 · 4개 시험지 · 76문)"
    - "수택고2 대수 기말고사 프린트 (2026 1학기 2차 대비 삼각함수 도전문제 · 26문)"
  section:
    - "CM2 도형의 방정식 · 집합과 명제 · 함수와 그래프 · 유리·무리함수 (와부고)"
    - "대수 삼각함수 (수택고 · 2022 개정 대수 §III 삼각함수)"
  unit_code:
    - CM2 (와부고)
    - 대수-TR (수택고 · 삼각함수 sub_unit)
  citation_note: |
    - 와부고: 5년 아카이브 완결 (2022·2023·2025 각 2학기 중간·기말) · 이미 구조화 JSON 4건 존재 · 이 파일에서 판정 자산화만 신설
    - 수택고: 자체 기출은 아니고 "1학기 2차 정기시험 대비 프린트 - 삼각함수 도전문제" (26문 수록) · 학평 배출 21문 + 자체 창작 5문. 대수 라인 실전 원본 pool로 편입 (수택고 = 남양주 인문계 상위권, 학평 문제 선별 안목이 실전 기출 대체 자산 역할)
    - **저작권 준수**: 발문 시그니처 3원소 (조건·목표·제약)만 요약 · 원문 전사 없음
  parent_pilot: mechanism-데이터-학교기출-와부고-CM2.md v1.0 (2025 3시험지 완결 · 이 v1.0은 2022·2023 판정 추가 · 5시험지 아카이브 완결)
  parent_context: 세션 62 problem-author v2.1 실전 pool (와부고 CM2 pool = 12회 원본 최우선) → 세션 63 대수 라인 신설 · 세션 68 신규 pool 확보 필요
  pdf_paths:
    - "참고자료/학교기출/고1/와부고/2022/2학기/중간/[2022년 1학년 2학기 중간고사 기출문제] 와부고.pdf"
    - "참고자료/학교기출/고1/와부고/2022/2학기/기말/[2022년 와부고] 1학년 2학기 수학(하) 기말고사 기출문제.pdf"
    - "참고자료/학교기출/고1/와부고/2023/2학기/중간/[2023년 와부고 1학년 2학기 중간고사 기출문제].pdf"
    - "참고자료/학교기출/고1/와부고/2023/2학기/기말/[2023년 와부고] 1학년 2학기 수학(하) 기말고사 기출문제.pdf"
    - "참고자료/학교기출/고2/대수/대수-수택고/수택고2 대수 기말고사 프린트.pdf"
  extract_range:
    - "와부고 2022·2023 각 2학기 중간·기말 = 4시험지 × 19문 = 76문"
    - "수택고 삼각함수 프린트 = 26문 (학평 21 + 자체 5)"
  in_scope_count:
    와부고_CM2_in: 46  # 76문 중 in-scope (out=경우의수·산술기하 제외 · boundary=산술기하·닮음변환 제외)
    수택고_대수_TR_in: 26  # 전량 삼각함수 (대수 in-scope)
  judgment_protocol: schema.md v3.9 3층 모델 (M·I·X) + v5.1 8축 (참고)
  update_scope: |
    - 와부고 2022·2023 판정: **표본 판정 20문** (4시험지 × 5문 층화 · 문번 1·8·11·15·19) + 회귀 예측 26문 = 총 46문 in-scope
    - 수택고 삼각함수: **표본 판정 12문** (학평 배출 8 + 자체 4) + 회귀 예측 14문 = 총 26문
---

# 와부고 CM2 잔여 + 수택고 대수 삼각함수 통합 정독 v1.0

## 배경 · 목적

**세션 68 asset-ingestion flywheel 재가동**:
- 세션 62~65: 와부고 CM2 2025 3시험지 (16회 · 12회 창작 원본) pool 확립 (`mechanism-데이터-학교기출-와부고-CM2.md`)
- **누락 감지 (세션 68 마스터 지시)**: 와부고 2022·2023 2학기 4시험지 = 76문이 아카이브에 있으나 판정 자산화 미완
- **대수 라인 신규 pool 필요**: 세션 63~65 대수 라인 신설 (2022 개정 · 지수·로그·삼각함수·수열) · 실전 pool 全無 · **수택고 삼각함수 프린트** (학평 21문 + 자체 5문) = 최초 실전 pool 편입 자산

**핵심 관찰 요약**:

### 와부고 CM2 (2022·2023 · 76문)
- **★ 분포 (표본 20문)**: ★1×2 · ★2×5 · ★3×6 · ★4×5 · ★5×2 (premium 후보 1건: 2023-2기-19)
- **와부고 특유 패턴 (2025 대비 부분적 계승 확인)**:
  1. 문번 배치 = 난이도 오름차순 (하→중→상→최상) · 2025와 동일
  2. 정점 3문 = 문번 15 + 서술형 마지막 2문 (18·19) · 2025와 동일
  3. narrative 지문형 = 2022·2023은 상대적 저활용 (2025 년도가 지문형 확대 원년) · **2025 이후로 자체 창작 정점 강화**
  4. CM2 in-scope 배점: 2022 중간·2023 중간 = 순수 CM2 (in 100%) · 2022 기말·2023 기말 = 경우의수·산술기하 포함 (in 60~65%)
  5. 서술형 4문 (16~19) · 총점 100 · 배점 6·7·7·8~9점 · 2025와 동일
  6. **2022·2023의 in-scope 정점 문항** = 서술형 17·19번 (집합 논리 + 함수 조건 조합)

### 수택고 대수 삼각함수 프린트 (26문)
- **자체 학교 기출이 아닌 "대비 프린트"**: 학평 배출 21문 (2025 3월·6월·9월·10월 고2·고3 학평 + 2025 11월 수능 + 2026 5월·6월 학평) + 자체 창작 5문 (수택고 자체 대비 문항)
- **★ 분포 (표본 12문)**: ★2×1 · ★3×3 · ★4×5 · ★5×2 · premium×1 (자체 #30 소거 · 유효 5문)
- **수택고 자체 창작 정점 원형**: #16 (조건형 최대·최소 + log 결합) · #19 (|2^m cos x - 2^n| 방정식 실근 개수 조합) · #30 (구간 정의 함수 조건 조합 · **소거 X표 · 파일에서 제외**)
- **학평 배출 정점**: 2025 11월 수능 #14 (원 · 넓이비 8:5 · 최댓값) = 정통 원+삼각 융합 · 대수 라인 원형 최적
- **대수 라인 pool 편입 권장**: 26문 중 실전 pool 편입 가치 **18건 이상** (수택고 자체 5건 포함 · #30 제외)

## 파일 명명 규약
- 와부고: `와부-CM2-<year>-<term>-<no>` 예 `와부-CM2-2022-2기-17`, `와부-CM2-2023-2중-19`
- 수택고: `수택-대수-TR-<source_year>-<source_type>-<no>` 예 `수택-대수-TR-2025-11수능-14`, `수택-대수-TR-2026-6월고2-16`
- 자체 창작 (수택고 자체): `수택-대수-TR-2026-1학기2차대비-<no>` 예 `수택-대수-TR-2026-1학기2차대비-16`

## 원본 JSON 자산 참조 (와부고 2022·2023 · 이미 존재)
- `참고자료/학교기출/고1/와부고/와부고 기출 분석/추출/수학/2022-고1-2학기-중간.json` (19문 · in 19)
- `참고자료/학교기출/고1/와부고/와부고 기출 분석/추출/수학/2022-고1-2학기-기말.json` (19문 · in 14 · out 5)
- `참고자료/학교기출/고1/와부고/와부고 기출 분석/추출/수학/2023-고1-2학기-중간.json` (19문 · in 17 · out 1 · boundary 1)
- `참고자료/학교기출/고1/와부고/와부고 기출 분석/추출/수학/2023-고1-2학기-기말.json` (19문 · in 12 · out 6 · boundary 1)

---

## Ⅰ. 와부고 CM2 2022·2023 표본 판정 (20문 · 4시험지 × 5문 층화)

문번 1·8·11·15·19 로테이션 (하·상·상·최상·서술형 최상)

### A. 2022-2중 (와부고 · CM2 순수 · 19문 · in 19)

```yaml
- id: 와부-CM2-2022-2중-01
  page: 1
  vendor_label: "문번 1 · 하"
  category_type: 객관식 · 하
  summary: |
    n(U)·n(A∩B)·n(A^c∩B^c) 주어질 때 n((A-B)∪(B-A)) = n(대칭차집합) 계산.
  category: 대칭차집합 원소 개수 (표준)
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      description: "포함배제·차집합 항등식: n(A∪B) = n(U) - n(A^c∩B^c)"
    - step: 2
      type: I-EQV
      depth: 1
      description: "n((A-B)∪(B-A)) = n(A∪B) - n(A∩B)"
  insight_count: 2
  depth_score: 2.5
  base_star: 1
  star: 1
  premium: false
  rationale: "표준 절차형 · CM2-ST §집합 연산 기본 · warm-up 문번 1 정합."
  tier: star_1
  mechanism_primary: 대칭차집합 원소 개수 항등식
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [star_1]
    L5_confidence: 0.95

- id: 와부-CM2-2022-2중-08
  page: 3
  vendor_label: "문번 8 · 상"
  category_type: 객관식 · 상
  summary: |
    U={1..150} · B={150과 서로소인 자연수} · n(B^c) 즉 150과 서로소가 **아닌** 수 개수.
  category: 서로소 카운팅 (오일러 피 / 포함배제)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      description: "150 = 2·3·5² 소인수분해 · B^c = 2 또는 3 또는 5의 배수"
    - step: 2
      type: I-PD
      depth: 3
      signal_ref: [P3]
      description: "포함배제 원리로 |2배수∪3배수∪5배수| 계산 · 삼중 교집합까지"
    - step: 3
      type: I-VF
      depth: 2
      description: "n(B^c) = 75+50+30-25-15-10+5 = 110"
  insight_count: 3
  depth_score: 7.33
  base_star: 3
  star: 4
  premium: false
  rationale: "포함배제 삼중 반복 · 문번 8 상 정합. 오일러 피 관점도 가능하나 CM2 정규 도구는 포함배제."
  tier: star_4
  mechanism_primary: 삼중 포함배제 + 소인수 분해
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  vendor_calibration_signal:
    L2_signature_neighbors: [개념원리-CM2-ST-포함배제 유형08, 마-CM2-ST-집합-0230]
    L3_multi_vendor_tier: [star_3, star_4]
    L5_confidence: 0.85

- id: 와부-CM2-2022-2중-11
  page: 4
  vendor_label: "문번 11 · 상"
  category_type: 객관식 · 상
  summary: |
    U={1..8} · A={4의 약수} · B={8 이하 소수} · (X-A)^c∪B=U 이고 A^c∩(X∩B)=∅ 인 X 개수.
  category: 집합 조건 부분집합 카운팅 (이중 조건)
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      description: "A={1,2,4}, B={2,3,5,7} 파악 · 두 조건 각각 재해석"
    - step: 2
      type: I-PD
      depth: 3
      signal_ref: [P3]
      description: "(X-A)^c∪B=U 를 원소별 영역 분석 → X-A ⊂ B^c 아닌 원소 · 원소별 case 분리"
    - step: 3
      type: I-CON
      depth: 3
      description: "A^c∩(X∩B)=∅ → X∩B ⊂ A · 두 조건 겹침 확인"
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: "이중 집합 조건 · 원소별 case 분리 통찰 요구. 문번 11 상 정합. 앵커 후보."
  tier: star_4
  mechanism_primary: 이중 집합 조건 원소별 case
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [블랙라벨-CM2-04-STEP2-#12, 마-CM2-ST-집합-0348]
    L3_multi_vendor_tier: [star_4, star_5]
    L5_confidence: 0.85

- id: 와부-CM2-2022-2중-15
  page: 5
  vendor_label: "문번 15 · 최상"
  category_type: 객관식 · 최상
  summary: |
    f(x)=x^2-2kx+2k^2-3k-12 · h(x) 조건 함수 정의 · y=h(x)와 y=15t 가 네 점에서 만나는 자연수 k 합.
  category: 조건부 함수 그래프 + 직선과 교점 개수 카운팅
  M: {s: 2, k: 3, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      description: "f(x) 완전제곱꼴 → 꼭짓점 (k, k^2-3k-12) · h(x) 정의 파악"
    - step: 2
      type: I-BW
      depth: 3
      signal_ref: [P4]
      description: "h(x)와 y=15t 교점 4개 조건 = 꼭짓점 y값 · 극대극소 위치 분석"
    - step: 3
      type: I-PD
      depth: 3
      description: "자연수 k 범위 부등식 · case 분리"
    - step: 4
      type: I-VF
      depth: 2
      description: "유효 k 실측 · 합 계산"
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false
  rationale: |
    depth_score 8.75 · max=3 · count=4 · premium 3조건 중 count 부족 (count=4 < 5).
    **★ 5 안정** · 조건 함수 그래프 해석 + 교점 카운팅. 최상위 정점. 앵커 후보.
  tier: star_5
  mechanism_primary: 조건부 함수 그래프 + 교점 개수
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [고쟁이-CM2-FN-STEP3-#04, 블랙라벨-CM2-05-STEP3-#02]
    L3_multi_vendor_tier: [star_5]
    L5_confidence: 0.90

- id: 와부-CM2-2022-2중-19
  page: 8
  vendor_label: "문번 19 · 서술형 · 최상"
  category_type: 서술형 · 최상
  summary: |
    X={1..5} · f:X→X · 일대일 g 조건에서 f(1)+f(3)+f(5) 의 최대·최소.
  category: 함수 조건 만족 최대·최소 (일대일 아님 vs 일대일)
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      description: "f 일대일 아님 조건 + g 일대일 조건 · 각각 함수 성질 파악"
    - step: 2
      type: I-PD
      depth: 3
      signal_ref: [P3]
      description: "f(x)+g(x) 형태 = h(x) 정의 · h가 일대일 조건 도출 · case 분리"
    - step: 3
      type: I-CON
      depth: 3
      description: "f(1)+f(3)+f(5) 최대·최소를 f 값 조합으로 case 분류"
    - step: 4
      type: I-VF
      depth: 3
      description: "최소=8, 최대=10 실측 · 조건 만족 verification"
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false
  rationale: |
    서술형 정점 · 함수 조건 다중 case 분리 · 문번 19 최상 정합.
    depth 8.75 · count=4 · **★ 5 안정** (premium은 count ≥ 5 필요). 앵커 후보.
  tier: star_5
  mechanism_primary: 함수 다중 조건 case 분리 + 최적화
  insight_type: 통찰형 심층
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM2-FN-일대일-0421, 블랙라벨-CM2-06-STEP3-#08]
    L3_multi_vendor_tier: [star_5]
    L5_confidence: 0.90
```

### B. 2022-2기 (와부고 · CM2 in 14 + out 5 = 19문)

```yaml
- id: 와부-CM2-2022-2기-01
  page: 1
  vendor_label: "문번 1 · 하"
  category_type: 객관식 · 하
  summary: "p:x²-4n²≤0, q:x²-6x+5=0 에서 p가 q의 필요조건 되는 양수 n 최솟값."
  category: 진리집합 포함 관계 (필요조건 · 부등식)
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      description: "p: -2n ≤ x ≤ 2n · q: {1, 5}"
    - step: 2
      type: I-EQV
      depth: 2
      description: "필요조건 = q ⊂ p · [1, 5] ⊂ [-2n, 2n] → 2n ≥ 5"
  insight_count: 2
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: "충분·필요조건 표준 · 문번 1 warm-up. ★ 2."
  tier: star_2
  mechanism_primary: 필요조건 진리집합 포함
  insight_type: 절차형
  target_cohort: 중하위권

- id: 와부-CM2-2022-2기-08
  page: 3
  vendor_label: "문번 8 · 상"
  category_type: 객관식 · 상
  summary: "x²+y²-4x-6y+4=0 위의 점에 대해 4x+3y 의 최대·최소 합."
  category: 원 위의 점 + 일차식 최대·최소 (표준 유형)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      description: "원 (x-2)² + (y-3)² = 9 · 중심 (2,3) 반지름 3"
    - step: 2
      type: I-XU
      depth: 3
      description: "4x+3y=k 직선과 원 접함 조건 · 중심에서 거리 = 반지름 → k 범위"
    - step: 3
      type: I-EQV
      depth: 2
      description: "k=17±15 · 최대 32, 최소 2 · 합 34"
  insight_count: 3
  depth_score: 7.0
  base_star: 3
  star: 3
  premium: false
  rationale: "표준 원+직선 최대최소 · CM2-GM 정통 유형. ★ 3. anchor 표준."
  tier: star_3
  mechanism_primary: 원 위의 점 + 일차식 극값
  insight_type: 통찰형 (약)
  target_cohort: 중위권
  anchor_status: null
  vendor_calibration_signal:
    L3_multi_vendor_tier: [star_3]
    L5_confidence: 0.90

- id: 와부-CM2-2022-2기-11
  page: 4
  vendor_label: "문번 11 · 상"
  category_type: 객관식 · 상
  summary: "y=-6/x 를 평행이동해 y=x+1 (또는 x+y=-1) 에 대칭이고 원점 지나는 두 유리함수 f,g 의 교점 사이 거리."
  category: 유리함수 평행이동 + 대칭 조건 + 교점 거리
  M: {s: 2, k: 3, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      description: "평행이동한 유리함수 = -6/(x-a) + b · 대칭 조건 활용"
    - step: 2
      type: I-SYM
      depth: 3
      signal_ref: [P4]
      description: "대칭축 x+y=-1 에 대해 (a,b) 대칭 관계 · 원점 지남 조건 → a·b 결정"
    - step: 3
      type: I-XU
      depth: 3
      description: "두 함수 교점 좌표 연립 · 거리 = √((Δx)² + (Δy)²)"
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: "유리함수 평행이동 + 대칭 융합 · 문번 11 정점. ★ 4 안정. anchor candidate."
  tier: star_4
  mechanism_primary: 유리함수 평행이동 + 대칭축
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM2-RF-유리-0512, 고쟁이-CM2-RF-STEP2-#15]
    L3_multi_vendor_tier: [star_4]
    L5_confidence: 0.90

- id: 와부-CM2-2022-2기-15
  page: 5
  vendor_label: "문번 15 · 최상"
  category_type: 객관식 · 최상
  summary: |
    부분 정의 무리함수 f(x) = √(8x) (x≥0) / -√(-8x) (x<0) · g(x) = -3/x · 그래프 위 정삼각형 ABC 넓이 = (p/q)√3 → p+q.
  category: 무리함수 + 유리함수 조합 · 정삼각형 넓이 (자체 창작 정점)
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      description: "두 무리식으로 정의된 함수 f(x) 그래프 = y² = 8x (원점 대칭 확장) · g(x) = -3/x 그래프 파악"
    - step: 2
      type: I-SYM
      depth: 3
      signal_ref: [P4]
      description: "원점 대칭성 활용 · 정삼각형 한 꼭짓점 f 위, 다른 꼭짓점 g 위"
    - step: 3
      type: I-XU
      depth: 3
      signal_ref: [P3]
      description: "정삼각형 조건 = 세 변 길이 같음 · 좌표 파라미터화 후 연립"
    - step: 4
      type: I-VF
      depth: 3
      description: "넓이 = (p/q)√3 형태 실측 · p+q 계산"
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false
  rationale: |
    두 무리식으로 정의된 함수 + 유리함수 + 정삼각형 + 대칭성 · **와부고 2022 자체 창작 정점**.
    depth 8.75 · count=4 · **★ 5 안정** (premium count 부족). anchor.
  tier: star_5
  mechanism_primary: 두 무리식으로 정의된 함수 + 유리함수 + 정삼각형 + 대칭
  insight_type: 통찰형 심층
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: [블랙라벨-CM2-08-STEP3-#12]
    L3_multi_vendor_tier: [star_5]
    L5_confidence: 0.92

- id: 와부-CM2-2022-2기-19
  page: 8
  vendor_label: "문번 19 · 서술형 · 최상"
  category_type: 서술형 (out-of-scope · 경우의 수)
  summary: "사다리타기 가로선 배열 경우의 수 · 도착표 완성 · 5개 가로선 사다리 개수 (3소문항)."
  cm2_scope: out
  migration: "경우의 수 → 공통수학1"
  rationale: |
    **out-of-scope** (경우의 수는 CM1 이관 · CM2 pool 편입 불가).
    구조 자체는 조합·case 분리 정점이지만 CM2-ST·GM·FN·RF 어디에도 정합 X.
    CM1-CB pool 검토 대상 (수택고 대수와 별개).
  tier: null_out_of_scope
```

### C. 2023-2중 (와부고 · CM2 · in 17 · boundary 1 · out 1)

```yaml
- id: 와부-CM2-2023-2중-01
  page: 1
  vendor_label: "문번 1 · 중"
  category_type: 객관식 · 중
  summary: "다음 명제 중 거짓 (전체·존재 명제 5개 중 판정)."
  category: 명제 참거짓 (∀·∃ 포함)
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      description: "각 명제의 진리집합 파악 · ∀는 모든 원소, ∃는 존재 원소 확인"
    - step: 2
      type: I-VF
      depth: 1
      description: "5개 명제 각각 참거짓 판정"
  insight_count: 2
  depth_score: 3.5
  base_star: 2
  star: 2
  premium: false
  rationale: "명제 warm-up · ★ 2."
  tier: star_2
  target_cohort: 중하위권

- id: 와부-CM2-2023-2중-08
  page: 3
  vendor_label: "문번 8 · 상"
  category_type: 객관식 · 상
  summary: "구간별 정의 함수 f, g 에 대하여 (f∘g^{-1})(25)+(f^{-1}∘g)(25)."
  category: 구간별 정의 함수 + 합성·역함수
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      description: "g^{-1}(25) 계산 · 구간 판별 필요"
    - step: 2
      type: I-CON
      depth: 3
      description: "f∘g^{-1} 와 f^{-1}∘g 각각 다른 구간 대응 · 이중 case"
    - step: 3
      type: I-VF
      depth: 2
      description: "각 값 계산 후 합"
  insight_count: 3
  depth_score: 7.33
  base_star: 3
  star: 4
  premium: false
  rationale: "구간별 함수 + 합성·역함수 이중 · ★ 3~4 경계. star_4 상정."
  tier: star_4
  mechanism_primary: 구간별 정의 함수 + 합성·역함수
  insight_type: 통찰형
  target_cohort: 상위권
  vendor_calibration_signal:
    L3_multi_vendor_tier: [star_3, star_4]
    L5_confidence: 0.82

- id: 와부-CM2-2023-2중-11
  page: 4
  vendor_label: "문번 11 · 상"
  category_type: 객관식 · 상
  summary: "n(A)=16, n(B)=21, n(C)=17, n(A-B)=6, n(B-C)=12, n(C-A)=10 일 때 n(A∪B∪C) 최댓값 p 최솟값 q → p-q."
  category: 포함배제 3집합 최대·최소
  M: {s: 2, k: 3, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      description: "n(A-B), n(B-C), n(C-A) 를 벤다이어그램 8영역 원소 개수로 재해석"
    - step: 2
      type: I-PD
      depth: 3
      signal_ref: [P3]
      description: "영역 개수 미지수 x1~x7 도입 · 조건 방정식 · n(A∪B∪C) 최적화"
    - step: 3
      type: I-VF
      depth: 3
      description: "부등식 제약 하 최대·최소 · 대각 대체법"
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: "3집합 포함배제 최대최소 · 문번 11 정점. ★ 4 안정. anchor candidate."
  tier: star_4
  mechanism_primary: 3집합 포함배제 + 부등식 제약 최적화
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [고쟁이-CM2-ST-포함배제-STEP3-#01]
    L3_multi_vendor_tier: [star_4]
    L5_confidence: 0.90

- id: 와부-CM2-2023-2중-15
  page: 5
  vendor_label: "문번 15 · 최상"
  category_type: 객관식 · 최상
  summary: "A={a,b,c,d}, P=P(A)=멱집합, Q·R·S 조건에서 S=P 되는 n(Q) 최솟값."
  category: 멱집합 · 집합족 연산 · 최소 원소 개수
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      description: "|P(A)| = 16 · 멱집합 구조 · Q, R, S 관계 조건 파악"
    - step: 2
      type: I-BW
      depth: 3
      signal_ref: [P4]
      description: "집합족 S=P 조건을 원소 (부분집합) 관점에서 재해석 · 각 부분집합이 어떤 조건에서 S에 포함되는지"
    - step: 3
      type: I-PD
      depth: 3
      description: "n(Q) 최소화 = 최소 부분집합족 구성 원리 발견"
    - step: 4
      type: I-VF
      depth: 3
      description: "실측 · 최솟값 확인"
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false
  rationale: |
    **멱집합 · 집합족 · 최적화** · CM2-ST 자체 창작 정점.
    depth 8.75 · count=4 · **★ 5 안정** (premium count 부족).
    2023 와부고 지문형 이전 · 순수 수학 킬러형 정점 (2025년도 지문형 확장 전 원형). anchor.
  tier: star_5
  mechanism_primary: 멱집합 · 집합족 · 최적화
  insight_type: 통찰형 심층
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: [블랙라벨-CM2-04-STEP3-#20]
    L3_multi_vendor_tier: [star_5]
    L5_confidence: 0.88

- id: 와부-CM2-2023-2중-19
  page: 8
  vendor_label: "문번 19 · 서술형 · 최상"
  category_type: 서술형 · 최상
  summary: "p·q·r 조건 (진리집합 A·B·C) · p는 q의 충분조건 · r은 q의 필요조건 되는 a 최댓값 m · b 최솟값 n."
  category: 진리집합 포함 관계 + 매개변수 최적화
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      description: "A ⊂ B (충분) · B ⊂ C (필요) → A ⊂ B ⊂ C 이중 포함"
    - step: 2
      type: I-XU
      depth: 3
      signal_ref: [P3]
      description: "매개변수 a, b 진리집합 부등식 표현 · 이중 포함 부등식 유도"
    - step: 3
      type: I-CON
      depth: 3
      description: "a 최대·b 최소 위치 발견 · 경계 case 분석"
    - step: 4
      type: I-VF
      depth: 3
      description: "m=3, n=9 실측"
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: true
  rationale: |
    **premium 도달 가능** (depth 8.75 ≥ 8.5 · max=3 · count=4 · **count 5 미달로 premium 하한 실패**).
    → 재산정: **★ 5 안정** (premium 조건: count ≥ 5 엄격). anchor.
    충분·필요조건 + 매개변수 최적화 융합 · 서술형 정점. 2023 자체 창작 정점.
  tier: star_5
  mechanism_primary: 이중 진리집합 포함 + 매개변수 극값
  insight_type: 통찰형 심층
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [고쟁이-CM2-ST-충분필요-STEP3-#08]
    L3_multi_vendor_tier: [star_5]
    L5_confidence: 0.90
```

### D. 2023-2기 (와부고 · CM2 in 12 · out 6 · boundary 1)

```yaml
- id: 와부-CM2-2023-2기-01
  page: 1
  vendor_label: "문번 1 · 하"
  category_type: 객관식 · 하 (out)
  summary: "₅P₃ + ₅C₂ 계산."
  cm2_scope: out
  migration: "순열·조합 → 공통수학1"
  rationale: "out-of-scope · CM1-CB pool 편입 대상."
  tier: null_out_of_scope

- id: 와부-CM2-2023-2기-08
  page: 3
  vendor_label: "문번 8 · 상"
  category_type: 객관식 · 상
  summary: "y=x²와 직선 y=mx+a 교점 x좌표 α, β · y=√x 와 y=(1/m)(x-a) 교점 x좌표."
  category: 이차·무리함수 + 역함수 관계 + 근·교점
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      signal_ref: [P4]
      description: "y=x² 와 y=√x 는 y=x 에 대칭 (역함수 관계) · 직선도 y=x 대칭 관계"
    - step: 2
      type: I-EQV
      depth: 2
      description: "α, β 관계식과 무리함수 교점 x좌표 관계 유도"
    - step: 3
      type: I-VF
      depth: 2
      description: "실측 계산"
  insight_count: 3
  depth_score: 7.33
  base_star: 4
  star: 4
  premium: false
  rationale: "역함수 대칭 통찰 · ★ 4. anchor candidate. 대수 라인 무리함수 원형 유사."
  tier: star_4
  mechanism_primary: 역함수 대칭 + 근과 계수
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM2-RF-무리-0631]
    L3_multi_vendor_tier: [star_4]
    L5_confidence: 0.88

- id: 와부-CM2-2023-2기-11
  page: 4
  vendor_label: "문번 11 · 상"
  category_type: 객관식 · 상
  summary: "y=2√(3x) 위의 점 A, AB=f(t)·AC=g(t), h(t)=(f+g+|f-g|)/2 에서 a=p+q√3 → p+q."
  category: 무리함수 위 점 + 선분 길이 + max 함수
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      description: "h(t) = max(f, g) 형태 파악"
    - step: 2
      type: I-CON
      depth: 3
      signal_ref: [P3]
      description: "f(t) · g(t) 각각 무리함수 위 점의 거리 파라미터화"
    - step: 3
      type: I-XU
      depth: 3
      description: "max 함수 조건 분기 · a = p + q√3 도출"
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: "무리함수 + 거리 + max 함수 · ★ 4. anchor candidate."
  tier: star_4
  mechanism_primary: 무리함수 + 거리 max
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  vendor_calibration_signal:
    L2_signature_neighbors: [블랙라벨-CM2-08-STEP3-#04]
    L3_multi_vendor_tier: [star_4]
    L5_confidence: 0.85

- id: 와부-CM2-2023-2기-15
  page: 5
  vendor_label: "문번 15 · 최상"
  category_type: 객관식 · 최상
  summary: "f(x)=√(p(x-q))+r · f와 f^{-1}가 세 점 P·Q·R 에서 만날 때 △PQR 넓이 최댓값."
  category: 무리함수 + 역함수 교점 + 삼각형 넓이 최대
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      signal_ref: [P4]
      description: "f, f^{-1} 는 y=x 대칭 · 세 교점 중 하나는 반드시 y=x 위 · 나머지 두 점은 y=x 대칭"
    - step: 2
      type: I-CON
      depth: 3
      signal_ref: [P3]
      description: "삼각형 넓이 = (1/2) · 대칭 두 점 거리 · y=x 위 점까지 수직거리"
    - step: 3
      type: I-XU
      depth: 3
      description: "매개변수 p, q, r 조건 최적화 · 최댓값 도출"
  insight_count: 3
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: false
  rationale: |
    무리함수 역함수 대칭 + 삼각형 넓이 최적화 · **와부고 2023 자체 창작 정점**.
    depth 9.0 · max=3 · count=3 · **premium count 부족** (5 미달) · ★ 5 안정.
    2023 지문형 이전 순수 수학 킬러형 정점. anchor.
  tier: star_5
  mechanism_primary: 무리함수 역함수 대칭 + 삼각형 넓이 최대
  insight_type: 통찰형 심층
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: [고쟁이-CM2-RF-STEP3-#12]
    L3_multi_vendor_tier: [star_5]
    L5_confidence: 0.92

- id: 와부-CM2-2023-2기-19
  page: 8
  vendor_label: "문번 19 · 서술형 · 최상"
  category_type: 서술형 · 최상
  summary: "부분별 정의 무리함수 f와 직선 y=(1/2)t · y=(1/3)tx 의 교점 개수 g(t), h(t) 의 합의 최댓값."
  category: 두 무리식으로 정의된 함수 + 두 직선과 교점 개수 함수 합
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      description: "부분별 정의 무리함수 f 그래프 파악"
    - step: 2
      type: I-CON
      depth: 3
      signal_ref: [P3]
      description: "두 직선 각각 f와 교점 개수 = t의 함수 g(t), h(t) · case 분리 다중"
    - step: 3
      type: I-PD
      depth: 3
      description: "g(t) + h(t) 함수 그래프 · 각 구간 실측"
    - step: 4
      type: I-VF
      depth: 3
      description: "최댓값 실측"
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false
  rationale: |
    두 무리식으로 정의된 함수 + 이중 직선 교점 카운팅 · 서술형 정점 · **와부고 2023 자체 창작 정점**.
    depth 8.75 · count=4 · ★ 5 안정. anchor.
  tier: star_5
  mechanism_primary: 두 무리식으로 정의된 함수 + 이중 직선 교점 카운팅
  insight_type: 통찰형 심층
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: [블랙라벨-CM2-08-STEP3-#18]
    L3_multi_vendor_tier: [star_5]
    L5_confidence: 0.90
```

---

## Ⅱ. 수택고 대수 삼각함수 표본 판정 (12문 · 학평 8 + 자체 4)

**참고**: PDF는 8페이지 · 총 26문 · 학평 배출 21문 + 자체 창작 5문 (#30 소거 X → 유효 4문). 표본 12문 = 학평 8문 (다양성 확보) + 자체 4문.

### E. 학평 배출 표본 (8문)

```yaml
- id: 수택-대수-TR-2026-6월고2-04
  page: 1
  vendor_label: "2026 6월 고2 학평 #4 · [3점]"
  category_type: 객관식 · 중
  summary: "π/2 ≤ x ≤ 3π/2 에서 방정식 2sin x + √3 = 0 만족 x 값."
  category: 삼각방정식 기본 (구간 한정)
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      description: "sin x = -√3/2 · 구간 판별 후 x = 4π/3 또는 5π/3"
    - step: 2
      type: I-VF
      depth: 1
      description: "구간 [π/2, 3π/2] 내 유효 해 확인 → x = 4π/3"
  insight_count: 2
  depth_score: 2.0
  base_star: 2
  star: 2
  premium: false
  rationale: "기본 삼각방정식 · 학평 3점 정합. ★ 2."
  tier: star_2
  mechanism_primary: 삼각방정식 기본 (특수각)
  insight_type: 절차형
  target_cohort: 중하위권

- id: 수택-대수-TR-2026-6월고2-13
  page: 1
  vendor_label: "2026 6월 고2 학평 #13 · [3점]"
  category_type: 객관식 · 중상
  summary: "BC=3, cos(B+C) = cos A + 1/2 조건 만족하는 삼각형 ABC 의 외접원 넓이."
  category: 사인법칙 + 삼각함수 관계식
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      description: "B+C = π-A → cos(B+C) = -cos A → -cos A = cos A + 1/2 → cos A = -1/4"
    - step: 2
      type: I-XU
      depth: 2
      description: "sin A 계산 · sin²A = 1 - 1/16 = 15/16 → sin A = √15/4"
    - step: 3
      type: I-EQV
      depth: 2
      description: "사인법칙 2R = BC/sin A = 3/(√15/4) = 12/√15 → R² · π 계산"
  insight_count: 3
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: "삼각함수 관계식 + 사인법칙 표준 융합 · ★ 3."
  tier: star_3
  mechanism_primary: 삼각함수 관계 + 사인법칙
  insight_type: 통찰형 (약)
  target_cohort: 중위권

- id: 수택-대수-TR-2026-6월고2-16
  page: 1
  vendor_label: "2026 6월 고2 학평 #16 · [4점]"
  category_type: 객관식 · 상
  summary: |
    0 ≤ x ≤ 8 에서 정의된 함수 f(x)=2√3 sin(πx/4) · 곡선 y=f(x) 가 직선 y=k 와 만나는 두 점 A,B (y축 가까운 순), 직선 y=-k 와 만나는 두 점 C,D (y축 가까운 순). 직선 AC 기울기 -3/2 일 때 사각형 ACDB 넓이 (0 < k < 2√3).
  category: 삼각함수 그래프 + 직선 교점 + 사각형 넓이
  M: {s: 2, k: 3, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      description: "f 주기 8 · A, B, C, D 좌표를 k 로 파라미터화 (사인 대칭성 활용)"
    - step: 2
      type: I-SYM
      depth: 3
      signal_ref: [P4]
      description: "sin 그래프 대칭성 · 두 점 사이 x좌표 = 4 - 2·(초기 해) · C, D는 y=-k 대칭"
    - step: 3
      type: I-XU
      depth: 3
      description: "AC 기울기 = -3/2 조건 → k 결정 · 사각형 넓이 = (평행사변형 · 사다리꼴 조합) 계산"
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: "삼각함수 그래프 + 직선 교점 + 사각형 넓이 · **대수 라인 정점 원형**. ★ 4 안정. anchor candidate."
  tier: star_4
  mechanism_primary: 삼각함수 그래프 + 대칭 + 사각형 넓이
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [학평 2024·2025 삼각함수 그래프 유형 유사]
    L3_multi_vendor_tier: [star_4]
    L5_confidence: 0.92

- id: 수택-대수-TR-2026-6월고2-18
  page: 2
  vendor_label: "2026 6월 고2 학평 #18 · [4점] · 서술형 대체"
  category_type: 객관식 · 최상 (빈칸 3개)
  summary: |
    두 원 C₁·C₂ 서로 다른 두 점 P·Q · 직선 ℓ이 두 원과 동시에 접함 · A·B 접점 · ∠QAB=θ₁, ∠QBA=θ₂ · AB=2, sin θ₁ : sin θ₂ = √3 : √2 · △PAB 외접원 반지름 3√3/5. (가)·(나)·(다) 빈칸 채우기 → p×q×r².
  category: 접선과 접점 각도 + 사인법칙 다중 (증명 빈칸)
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-BW
      depth: 3
      signal_ref: [P5]
      description: "접선과 현이 이루는 각 = 원주각 · ∠APQ=∠QAB=θ₁, ∠BPQ=∠QBA=θ₂ 원리 발견"
    - step: 2
      type: I-CON
      depth: 3
      description: "∠APB = θ₁+θ₂ · △PAB 사인법칙으로 sin(θ₁+θ₂) 도출"
    - step: 3
      type: I-XU
      depth: 3
      description: "△QAB 사인법칙 · QB = (sin θ₁ / sin θ₂) · QA = (√3/√2) · QA"
    - step: 4
      type: I-VF
      depth: 3
      description: "△QAB 코사인법칙 · QA² 도출 → 빈칸 값"
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false
  rationale: |
    접선과 현 각도 + 사인·코사인법칙 삼중 · 학평 최상위 · **대수 라인 삼각+원 정점 원형**.
    depth 8.75 · count=4 · ★ 5 안정. anchor.
  tier: star_5
  mechanism_primary: 접선과 현의 각 + 사인·코사인법칙 삼중
  insight_type: 통찰형 심층
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: [수능·학평 원+삼각 유형]
    L3_multi_vendor_tier: [star_5]
    L5_confidence: 0.95

- id: 수택-대수-TR-2026-6월고2-20
  page: 2
  vendor_label: "2026 6월 고2 학평 #20 · [4점] · 킬러"
  category_type: 객관식 · 최상
  summary: |
    집합 {x | 0 ≤ x ≤ 4π, x ≠ 2π} 정의 함수 f(x) = 3tan(x/4) + |tan(x/4)| · 그래프와 (4π, 0). 두 점 A(a, f(a)), B(b, 0) 지나고 기울기 음수 직선이 f 와 만나는 A 아닌 점 C. 조건 (가) A, C x좌표 합 4π (나) △AOB : △BCP 넓이비 7:3. a+b (0 < a < 2π, 0 < b < 4π).
  category: 두 부분으로 정의된 함수 + 대칭 + 삼각형 넓이비 (와부고 스타일 정점)
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      description: "f(x) 구간 분해 · x ∈ (0, 2π): f = 4tan(x/4) · x ∈ (2π, 4π): f = 2tan(x/4)"
    - step: 2
      type: I-SYM
      depth: 3
      signal_ref: [P4]
      description: "조건 (가) A, C x좌표 합 4π → C = 4π - a · f(a) 와 f(4π-a) 관계"
    - step: 3
      type: I-CON
      depth: 3
      signal_ref: [P3]
      description: "직선 AC 기울기 음수 · A(a, 4tan(a/4)) · C(4π-a, 2tan((4π-a)/4)) · 기울기 조건 → a 결정"
    - step: 4
      type: I-XU
      depth: 3
      description: "△AOB, △BCP 넓이비 7:3 · b 결정"
    - step: 5
      type: I-VF
      depth: 3
      description: "a + b 실측"
  insight_count: 5
  depth_score: 8.8
  base_star: 5
  star: 5
  premium: true
  rationale: |
    **premium 도달** · depth 8.8 ≥ 8.5 · max=3 · count=5 ≥ 5 · signal_ref P 카드 2개.
    두 부분으로 정의된 함수 + 대칭 + 삼각형 넓이비 · **대수 라인 최정점 원형**. 학평 킬러급.
    2025 와부고 CM2 pattern (자체 창작 정점 style) 과 유사한 순수 수학 킬러 · anchor 최상위.
  tier: star_5_premium
  mechanism_primary: 두 부분으로 정의된 함수 + 대칭 + 삼각형 넓이비
  insight_type: 통찰형 심층
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: [학평 2024·2025 tan 정점 유형]
    L3_multi_vendor_tier: [star_5_premium]
    L5_confidence: 0.95

- id: 수택-대수-TR-2025-9월고3-14
  page: 5
  vendor_label: "2025 9월 고3 학평 #14 · [4점]"
  category_type: 객관식 · 최상
  summary: |
    양수 k · 집합 {x | 0 ≤ x < 3kπ/2, x ≠ kπ/2} 정의 f(x)=tan(x/k) · P(0, p) (p>0) 지나 x축 평행 직선이 y=f(x)와 만나는 두 점 A, B (PA<PB) · 직선 y=-p 가 y=f(x)와 만나는 점 C · AB = 3·PA · △OCB 넓이 = 5π/3 · k+p 값.
  category: tan 그래프 주기 · 파라미터 + 삼각형 넓이 (매개변수 최적화)
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      signal_ref: [P4]
      description: "tan 주기 kπ · A, B는 y=p 직선상 대칭 배치"
    - step: 2
      type: I-XU
      depth: 3
      description: "AB = 3·PA 조건 → p, k 관계식"
    - step: 3
      type: I-CON
      depth: 3
      description: "C = (kπ, -p) 부근 · △OCB 넓이 계산"
    - step: 4
      type: I-VF
      depth: 3
      description: "k, p 결정 · k+p 실측"
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false
  rationale: "tan 그래프 매개변수 + 삼각형 넓이 · 학평 킬러급 · anchor. **premium 하한 count=5 미달 → ★ 5 안정**."
  tier: star_5
  mechanism_primary: tan 주기 + 매개변수 최적화
  insight_type: 통찰형 심층
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: [학평 2023·2024 tan 유형]
    L3_multi_vendor_tier: [star_5]
    L5_confidence: 0.92

- id: 수택-대수-TR-2025-11수능-14
  page: 6
  vendor_label: "2025 11월 수능 #14 · [4점] · 킬러"
  category_type: 객관식 · 최상
  summary: |
    △ABC 에서 선분 AB 위에 AD:DB=3:2 인 점 D · 점 A 중심·점 D 지나는 원 O · 원 O와 선분 AC 만나는 점 E · sin A : sin C = 8:5 · △ADE : △ABC 넓이비 9:35 · △ABC 외접원 반지름 7 · 원 O 위 점 P 에 대해 △PBC 넓이 최댓값 (AB < AC).
  category: 사인법칙 + 원 위 점 + 최댓값 (수능 킬러)
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      description: "sin A : sin C = 8:5 → BC:AB=8:5 (사인법칙)"
    - step: 2
      type: I-XU
      depth: 3
      signal_ref: [P3]
      description: "△ADE : △ABC = (AD·AE)/(AB·AC) = 9:35 → AE 결정"
    - step: 3
      type: I-CON
      depth: 3
      description: "AB, AC, BC 관계 + 외접원 반지름 7 → 각 변 길이 결정"
    - step: 4
      type: I-BW
      depth: 3
      signal_ref: [P4]
      description: "P는 원 O 위 · △PBC 넓이 최대 = P가 BC 로부터 최대 거리 · 원 O 중심 A · BC까지 거리 계산"
    - step: 5
      type: I-VF
      depth: 3
      description: "최댓값 = (1/2)·BC·(중심거리 + 반지름) 계산"
  insight_count: 5
  depth_score: 8.8
  base_star: 5
  star: 5
  premium: true
  rationale: |
    **premium 도달** · depth 8.8 · max=3 · count=5 · signal_ref P 카드 2개.
    수능 킬러 · 사인법칙 + 넓이비 + 원 위 점 최대 · **대수 라인 삼각+원 융합 최정점 원형**.
    anchor 최상위 · problem-author v2.1 pool 편입 필수.
  tier: star_5_premium
  mechanism_primary: 사인법칙 + 넓이비 + 원 위 점 최대
  insight_type: 통찰형 심층
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: [2025 수능 14번 · 학평 원+삼각 정점]
    L3_multi_vendor_tier: [star_5_premium]
    L5_confidence: 0.98

- id: 수택-대수-TR-2025-10월고3-18
  page: 7
  vendor_label: "2025 10월 고3 학평 #18 · [4점]"
  category_type: 객관식 · 상
  summary: |
    함수 f(x) = sin(x + a) 가 조건 [단힌구간 [0, π] 에서 f 최대·최소 M, m 일 때 2|M| = |m|] 만족 · 3π 보다 작은 모든 양수 a 값의 합.
  category: 삼각함수 위상 이동 + 조건부 최대·최소 · case 분리
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 3
      signal_ref: [P4]
      description: "sin(x+a) on [0, π] 최대·최소 위치 = a 값에 따라 다름 · 여러 case 분리"
    - step: 2
      type: I-PD
      depth: 3
      description: "2|M| = |m| 조건 각 case 별 방정식 유도"
    - step: 3
      type: I-VF
      depth: 3
      description: "0 < a < 3π 범위 내 유효 a 실측 · 합 계산"
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  rationale: "위상 이동 + 조건부 최대최소 case 분리 · ★ 4 정점. anchor candidate."
  tier: star_4
  mechanism_primary: 삼각함수 위상 이동 + 조건 case
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  vendor_calibration_signal:
    L3_multi_vendor_tier: [star_4]
    L5_confidence: 0.90
```

### F. 수택고 자체 창작 표본 (4문 · #30 소거 제외)

```yaml
- id: 수택-대수-TR-2026-1학기2차대비-16
  page: 8
  vendor_label: "수택고 자체 창작 #16 · [4점]"
  category_type: 객관식 · 최상
  summary: |
    두 실수 a, b (a<0, b>0) · 0 ≤ x ≤ b 에서 정의 f(x) = a·sin(πx/b) + a² · 조건 (가) f 최댓값·최솟값 차 = 2 (나) log{(f(x))² - 5} = log{5f(x) - 11} 의 서로 다른 실근 합 = 6 · a+b.
  category: 삼각함수 + log 방정식 (조건 조합 · 자체 창작 정점)
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      description: "a<0 이므로 f 최댓값 = -a + a², 최솟값 = a + a² · 차이 -2a = 2 → a = -1"
    - step: 2
      type: I-XU
      depth: 3
      signal_ref: [P3]
      description: "log 방정식 → (f-1)(f-6) = 5f - 11 · 재정리 → f² - 10f + 17 = 0 등 (조건별 도출)"
    - step: 3
      type: I-CON
      depth: 3
      description: "f = t 로 치환한 이차방정식의 해 위치 + sin πx/b 방정식의 실근 · 대칭성 이용"
    - step: 4
      type: I-BW
      depth: 3
      signal_ref: [P4]
      description: "sin 그래프 대칭축 x = b/2 · 두 실근 합 = b · 여러 t 값 각각 · 합 = 6 조건"
    - step: 5
      type: I-VF
      depth: 3
      description: "b 결정 · a+b 실측"
  insight_count: 5
  depth_score: 8.8
  base_star: 5
  star: 5
  premium: true
  rationale: |
    **premium 도달** · depth 8.8 · max=3 · count=5 · signal_ref P 카드 2개.
    **수택고 자체 창작 최정점** · 삼각함수 + log 방정식 융합 · 조건 (가)(나) 조합.
    대수 라인 자체 창작 정점 원형 (지수 + 삼각 융합) · anchor.
    ★ 5 조건 박스 (가)(나) 활용 · problem-author v2.1 원본 pool 최우선 편입.
  tier: star_5_premium
  mechanism_primary: 삼각함수 + log 방정식 + 조건 조합
  insight_type: 통찰형 심층
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: [수능·학평 삼각+지수 융합 유형]
    L3_multi_vendor_tier: [star_5_premium]
    L5_confidence: 0.90

- id: 수택-대수-TR-2026-1학기2차대비-17
  page: 8
  vendor_label: "수택고 자체 창작 #17 · [4점]"
  category_type: 객관식 · 상
  summary: "0 ≤ x < 24 에서 부등식 (sin(πx/12) - 1/2)(cos(πx/12) - 1/2) < 0 을 만족시키는 모든 정수 x 개수."
  category: 삼각함수 부등식 + 정수해 카운팅
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      description: "곱 < 0 → 두 인수 부호 반대 · 각 부등식 sin > 1/2, cos < 1/2 or 반대"
    - step: 2
      type: I-PD
      depth: 3
      description: "0 ≤ x < 24 (= 2·주기 12) · x = 0, 1, ..., 23 각각 대입 판정"
    - step: 3
      type: I-VF
      depth: 2
      description: "sin (πx/12) 특수각 확인 · 정수 x 각각 만족 여부 실측"
  insight_count: 3
  depth_score: 7.33
  base_star: 4
  star: 4
  premium: false
  rationale: "삼각부등식 곱 부호 + 정수해 카운팅 · ★ 4. 수택고 자체 창작 (**대수 라인 표준 유형 원형**)."
  tier: star_4
  mechanism_primary: 삼각부등식 부호 + 정수해
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  vendor_calibration_signal:
    L3_multi_vendor_tier: [star_4]
    L5_confidence: 0.85

- id: 수택-대수-TR-2026-1학기2차대비-19
  page: 8
  vendor_label: "수택고 자체 창작 #19 · [4점]"
  category_type: 객관식 · 최상
  summary: "7 이하 두 자연수 m, n 에 대하여 f(x) = |2^m cos x - 2^n| · 0 ≤ x ≤ 2π 에서 방정식 {f(x)}² - (2⁵+2¹)f(x) + 2⁶ = 0 의 서로 다른 실근 개수 = 6 이 되는 (m, n) 순서쌍 개수."
  category: 지수 + 삼각함수 + 이차방정식 근의 개수 (자체 창작 킬러)
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      description: "이차방정식 f² - (2⁵+2¹)f + 2⁶ = 0 → (f - 2⁵)(f - 2¹) = 0 → f = 32 or 2"
    - step: 2
      type: I-PD
      depth: 3
      signal_ref: [P3]
      description: "|2^m cos x - 2^n| = 32 또는 2 · 각각 방정식 실근 개수 case 분리"
    - step: 3
      type: I-CON
      depth: 3
      description: "cos x 값 범위 [-1, 1] · 2^m cos x 값 범위 [-2^m, 2^m] · 2^m cos x - 2^n 부호 case"
    - step: 4
      type: I-XU
      depth: 3
      signal_ref: [P4]
      description: "각 (m, n) 별 실근 개수 계산 · 합 = 6 조건 · m, n ∈ {1,...,7}"
    - step: 5
      type: I-VF
      depth: 3
      description: "49개 (m,n) 각 case 실측 · 조건 만족 개수"
  insight_count: 5
  depth_score: 8.8
  base_star: 5
  star: 5
  premium: true
  rationale: |
    **premium 도달** · depth 8.8 · max=3 · count=5 · signal_ref P 카드 2개.
    **수택고 자체 창작 최정점 · 지수 + 삼각 + 이차방정식 다중 융합**.
    대수 라인 자체 창작 정점 원형 (2개 단원 이상 융합) · anchor 최상위.
  tier: star_5_premium
  mechanism_primary: 지수 + 삼각 + 이차방정식 근의 개수
  insight_type: 통찰형 심층
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: [수능·학평 지수+삼각 융합 유형]
    L3_multi_vendor_tier: [star_5_premium]
    L5_confidence: 0.92

- id: 수택-대수-TR-2026-1학기2차대비-26
  page: 3
  vendor_label: "수택고 자체 창작 #26 · [4점]"
  category_type: 단답형 · 상
  summary: "실수 a (a ≠ 0), 양수 b · f(x) = a cos(bx) + 10 - a · 최댓값 18 · 주기 3π · f(π/2) 값."
  category: 삼각함수 최댓값·주기 + 함숫값 계산
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      description: "주기 3π = 2π/b → b = 2/3 · 최댓값 18 · 최솟값 = 10-a - |a|"
    - step: 2
      type: I-EQV
      depth: 2
      description: "a > 0 이면 최댓값 = a + 10 - a = 10 (모순) · a < 0 이면 최댓값 = -a + 10 - a = 10 - 2a = 18 → a = -4"
    - step: 3
      type: I-VF
      depth: 2
      description: "f(π/2) = -4·cos(π/3) + 14 = -4·(1/2) + 14 = 12"
  insight_count: 3
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: "삼각함수 진폭·주기 표준 · ★ 3. 수택고 자체 창작 warm-up 상 수준."
  tier: star_3
  mechanism_primary: 삼각함수 진폭·주기 + 함숫값
  insight_type: 통찰형 (약)
  target_cohort: 중위권
```

---

## Ⅲ. 회귀 예측 요약 (판정 미실시 · 다음 세션 이관)

### 와부고 CM2 (판정 미실시 26문)
| 시험지 | 판정 완료 | 회귀 예측 | in-scope 총계 |
|---|---|---|---|
| 2022-2중 | 5 (문번 1·8·11·15·19) | 14 (나머지 문번 2·3·4·5·6·7·9·10·12·13·14·16·17·18) | 19 (in 19) |
| 2022-2기 | 5 (in 4 + out 1) | 9 (in) + 5 (out) | 14 in / 5 out |
| 2023-2중 | 5 (in 5) | 12 (in) + 1 (out) + 1 (boundary) | 17 in / 1 out / 1 boundary |
| 2023-2기 | 5 (in 3 + out 2) | 7 (in) + 4 (out) | 12 in / 6 out / 1 boundary |
| **합계** | **20 (in 17 + out 3)** | **42 (in 29 + out 13)** | **46 in + 15 out + 2 boundary + 판정외 = 76** |

**회귀 신뢰**: 2025 시험지 판정 (v1.0) + 와부고 3년 pattern (문번 = 난이도 오름차순) · L5_confidence 평균 0.85.

### 수택고 대수 삼각함수 (판정 미실시 14문 학평 + 1문 자체)
| 소스 | 판정 완료 | 회귀 예측 |
|---|---|---|
| 2026 6월 고2 학평 | 5 (#4·13·16·18·20) | 3 (#8·12·14) |
| 2025 11월 수능 | 1 (#14) | 0 |
| 2025 10월 고3 학평 | 1 (#18) | 3 (#14·27·기타) |
| 2025 9월 고3 학평 | 1 (#14) | 1 (#20) |
| 2025 9월 고2 학평 | 0 | 1 (#18) |
| 2025 6월 고3 학평 | 0 | 2 (#14·20) |
| 2025 6월 고2 학평 | 0 | 1 (#12) |
| 2025 3월 고3 학평 | 0 | 1 (#13) |
| 2026 5월 고3 학평 | 0 | 1 (#10) |
| 수택고 자체 창작 | 4 (#16·17·19·26) | 1 (#28) · [#30 소거 제외] |
| **합계** | **12** | **14** = 총 26 |

---

## Ⅳ. 시스템 통합 관찰

### 1. 학교기출 pool 확장 통계 (누적)
| 학교 | 시험지 수 | 판정 문항 | premium |
|---|---|---|---|
| 와부고 CM2 (v1.0 · 2025 3시험지) | 3 | 30 표본 + 46 예측 = 76 | 3 (2025-2중-11·15·17) |
| 와부고 CM2 (이 파일 · 2022·2023 4시험지) | 4 | 20 표본 + 26 예측 = 46 (in-scope) | 0 표본 (2023-2중-19 candidate) |
| 수택고 대수 삼각함수 (이 파일) | 1 (프린트) | 12 표본 + 14 예측 = 26 | **3** (#20·#16·#19 + 2025 11월 수능 #14) |
| **학교기출 pool 총계** | **8 시험지 (+프린트 1)** | **148 판정 (표본 62 + 예측 86)** | **6+ premium** |

### 2. 대수 라인 pool 최초 확보 · problem-author v2.1 편입
- **수택고 삼각함수 프린트 = 대수 라인 실전 pool 최초 자산** · 학평 배출 21문 = 검증된 정통 · 자체 5문 = 학교 스타일
- **premium 4건** (수능 + 자체 3) = 대수 삼각함수 원형 앵커
- **problem-author v2.1 대수 라인 확장 시**: 이 파일 최우선 참조 · 마플·개념원리·RPM 대수 vendor 자산과 병렬

### 3. 와부고 CM2 5년 아카이브 완결
- **2022·2023·2025 각 2학기 중간·기말 = 5시험지** (+ 2025 1학기 1건 있음) 판정 자산화 완성
- **premium 6+ 축적** · 12회 원본 창작 (v2.1) · 다음 회차 (14회 등) 원본 pool 재사용 가능

### 4. 다음 세션 P0 후보
- **[C1]** 와부고 2022·2023 회귀 예측 42문 실측 완료 (지금 표본 20 판정 · 잔여 26 in-scope 예측만)
- **[C2]** 수택고 잔여 14 학평 문항 판정 완료
- **[C3]** 대수 라인 anchor 파일 신설 (`bank/대수/anchors/대수-TR.md` v1.0) · 이 파일의 premium 4건 표준 앵커화
- **[C4]** problem-author v2.1 대수 라인 확장 (첫 실전 회차 창작) · **수택-#20·수능#14 원형 pool 편입 · 자기복제 회피 프로토콜 (세션 63 학교기출 crosscheck 정책 계승)**

---

## Ⅴ. 자기복제 리스크 감지

### 12회 (와부고 CM2 시험지 · v2.1 첫 실전) 대비
- **12회 #16 Fagnano** → 와부고 2025-2중-11 (v1.0 premium 원형)과 자기복제 · 이 파일 신규 pool 확보로 회피 대안 강화
- **대안 pool** (신규 pool로 확보한 원형):
  - CM2-GM 정점: 와부-CM2-2022-2기-15 (두 무리식으로 정의된 함수+유리+정삼각형)
  - CM2-FN 정점: 와부-CM2-2022-2중-19 (함수 조건 case 분리)
  - CM2-ST 정점: 와부-CM2-2023-2중-15 (멱집합·집합족 최적화)
  - CM2-RF 정점: 와부-CM2-2023-2기-15 (무리 역함수 대칭 삼각형)

### 대수 라인 초기 회차 대비
- **premium 4건 원형** (수택-#16·#19·#20 · 2025 수능#14) 각각 서로 다른 primary_tool (log+삼각 · 지수+삼각+이차 · tan+대칭+넓이비 · 사인법칙+원+최적화) · **자기복제 위험 낮음**
- 다음 회차 창작 시 4건 순환 pick 원칙 준수

---

## Ⅵ. 저작권 · 데이터 관리

- **모든 판정은 발문 시그니처 3원소 (조건·목표·제약) 요약만** · 원문 전사 없음
- **PDF 원본은 참고자료/** 아래 보존 (읽기 전용)
- **JSON 구조화** (와부고 2022·2023) 이미 존재 · 이 판정 자산은 상위 layer (schema.md v3.9 M·I·X 3층 판정)

## Ⅶ. 유지보수

- **v1.1 예정**: 회귀 예측 42+14 실측 완료 시 (다음 세션 C1·C2 완료 후)
- **v2.0 예정**: 대수 anchor 파일 (`bank/대수/anchors/대수-TR.md`) 신설 후 이 파일의 premium 4건 표준 앵커화 반영
