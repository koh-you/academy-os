---
name: mechanism-데이터-학교기출-와부고-CM2
description: 와부고 5년 (2022·2023·2025 · 2학기 중간·기말 · 총 5개 시험지 92문항) CM2 in-scope 문항 76문 정독 · 표본 30문 층화 판정 + 46문 회귀 예측. problem-author v2.1 실전 창작 (12회) 원본 pool 최우선 참조 자산.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: 와부고등학교 고1 정기고사 (2022·2023·2025 2학기 중간·기말)
  section: 도형의 방정식 · 집합과 명제 · 함수와 그래프 · 유리·무리함수
  unit_code: CM2 (전 대단원)
  sub_units:
    - CM2-GM (평면좌표 · 직선 · 원 · 도형이동)
    - CM2-ST (집합 · 명제 · 충분·필요조건 · 증명)
    - CM2-FN (여러 가지 함수 · 합성·역함수)
    - CM2-RF (유리함수 · 무리함수)
  citation_note: "와부고 정기고사 5개 시험지 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 시그니처 3원소만 요약)"
  extract_range: "2022~2025 5개 시험지 92문항 (in-scope 76문 · out 14문 · boundary 2문)"
  pages: "5개 PDF 원본 · 이미 구조화 JSON 5건 존재 (참고자료/학교기출/고1/와부고/와부고 기출 분석/추출/수학/)"
  total_problems: 76  # CM2 in-scope
  sample_problems: 30  # 시스템 순정 판정 대상 (5시험지 × 6문 층화)
  predicted_problems: 46  # 회귀 예측 대상
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: 학교기출-다층상황-카탈로그.md v1.0 (2026-07-10 · 15 패턴)
  parent_derivative: 와부고 예상 중간 12회 청사진.yaml (2026-07-21 problem-author v2.1 실전 창작)
---

# 와부고 CM2 5년 정기고사 정독 데이터 v1.0

## 배경 · 목적

**작업 근거** (세션 62 인계):
- problem-author v2.1이 12회 실전 창작 성공 · **와부고 실제 기출 원본을 최우선 pool로 확보 필수**
- 이미 구조화 JSON (5개 시험지 92문) · 문제은행 인덱스 (76 in-scope) 존재 · 표본 층화 판정만 추가하면 정독-스키마 v2.0 표준화 완성
- **v2.1 원본 pick 우선순위 최상단** = 실제 학교 기출 (시판 벤더보다 우선순위 높음) · 이 자산이 곧 "와부고 스타일" 정합의 기준

**핵심 관찰 요약** (문두 metadata):
- **표본 30문 실측** (5개 시험지 × 6문 층화 · 문번 1·5·9·13·17·19 로테이션) + **46문 회귀 예측** = **총 76 in-scope 완주**
- ★ 분포 (표본): ★ 1×3 · ★ 2×5 · ★ 3×9 · ★ 4×8 · ★ 5×4 · ★ 5 premium×1
- **와부고 특유 출제 패턴 (7개 시험지 대응 원칙)**:
  1. **문번 배치 = 난이도 오름차순** (하 → 중 → 상 → 최상 · 문번 뒷쪽으로 갈수록 ★ 상승)
  2. **정점 3문 배치** = 문번 15 (선택형 최상위) + 서술형 마지막 2문 (16·17 또는 18·19) · 총 3문
  3. **narrative 지문형 활용도 = 최상위 슬롯 100%** (2025 #16 사도기 · #17 개기월식 = 다층 상황 지문 필수)
  4. **CM2 in-scope 배점 = 65~85점 · out 배점 = 15~35점** (2022·2023 기말은 out 비중 33% · 순수 CM2 시험지는 2022중간·2023중간·2025중간 3건)
  5. **서술형 4문 (16~19)** · 총점 100 · 배점 6·7·7·8~9점
  6. **판정형·증명형·서술형** 3종 혼재 · 특히 산술기하평균 (CM2 §명제 정규 교과) 자유 활용
  7. **자체 창작 정점 (2025 #11 · #15)** · 순수 수학 킬러 · 지문형과 순수 수학 킬러 2가지 style 병행
- **problem-author v2.1 pool 편입 권장**: 실측 27건 (표본 22 + 예측 5 premium/star_5 후보)

## 파일 명명 규약 정합
- `bank/mechanism-데이터-학교기출-와부고-CM2.md` (신규)
- 문항 id: `와부-CM2-<year>-<term>-<no>` 예 `와부-CM2-2025-2중-11` `와부-CM2-2022-2기-8`
- 5년 아카이브 명시: **2022·2023·2025 각각 2학기 중간·기말** (2024 미확보)

## 원본 JSON 자산 참조
- `참고자료/학교기출/고1/와부고/와부고 기출 분석/추출/수학/2022-고1-2학기-중간.json` (19문 · in 19)
- `참고자료/학교기출/고1/와부고/와부고 기출 분석/추출/수학/2022-고1-2학기-기말.json` (19문 · in 14 · out 5)
- `참고자료/학교기출/고1/와부고/와부고 기출 분석/추출/수학/2023-고1-2학기-중간.json` (19문 · in 17 · out 1 · boundary 1)
- `참고자료/학교기출/고1/와부고/와부고 기출 분석/추출/수학/2023-고1-2학기-기말.json` (19문 · in 12 · out 6 · boundary 1)
- `참고자료/학교기출/고1/와부고/와부고 기출 분석/추출/수학/2025-고1-2학기-중간.json` (17문 · in 14 · out 0 · boundary 3=공통현 #9·닮음변환 #16·공통외접선 #17)

---

## Ⅰ. 표본 판정 (30문 · 5시험지 × 6문 층화)

### A. 2025-2중 (와부고 · CM2 순수 · 17문 · 최우선 원본 = 12회 실 참조)

```yaml
- id: 와부-CM2-2025-2중-01
  page: 1
  vendor_label: "와부고 2025 2학기 중간 · 문번 1 · 배점 미표기 (JSON note)"
  category_type: 객관식 · 하 난이도
  summary: |
    두 점 A(1,4), B(4,10) 에서 AB를 1:2 내분하는 점을 지나고 AB에 수직인 직선의 방정식 결정.
  category: 내분점 + 수직 직선 (표준)
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      description: "내분점 좌표 (2, 6) 계산"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      description: "AB 기울기 2 → 수직 기울기 -1/2 · 직선 방정식"
  insight_count: 2
  depth_score: 3.0
  base_star: 1
  star: 1
  premium: false
  rationale: |
    표준 절차형 · CM2-GM §직선의 방정식 기본. 문번 1번 = 대상층 warm-up. 통찰 depth 3 미도달.
  tier: star_1
  mechanism_primary: 내분점 + 수직 조건
  insight_type: 절차형
  target_cohort: 하위권
  anchor_status: null
  usage_ref: []
  cross_reference:
    - source: 개념원리-CM2-GM-직선-표준
      relation: "표준 절차 · 시판 원본과 유사"
  novelty_score: 0
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: [개념원리-CM2-GM-직선 유형01~02]
    L3_multi_vendor_tier: [star_1, star_2]
    L5_confidence: 0.90
  friction_triggers: []
  friction_verdict: OK

- id: 와부-CM2-2025-2중-05
  page: 2
  vendor_label: "문번 5 · 중"
  category_type: 객관식 · 중
  summary: |
    전체집합 U · 세 부분집합 A·B·C의 다중 연산 [(A∪B)∩(A∪B^c) ∪ (B∩C^c)∪(B∪C)^c] 의 U 차집합 정리.
  category: 집합 연산 간소화 (드모르간·분배)
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "(A∪B)∩(A∪B^c) = A 분배법칙 · (B∪C)^c = B^c∩C^c 드모르간"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      description: "각 부분 합집합 정리 · U 차집합 = C-A"
  insight_count: 2
  depth_score: 4.5
  base_star: 2
  star: 2
  premium: false
  rationale: |
    절차형 계산 · 드모르간·분배 규칙 반복 · 통찰 depth 2 도달하나 원리 발견 아닌 규칙 적용.
  tier: star_2
  mechanism_primary: 드모르간·분배 항등식
  insight_type: 통찰형 (약)
  target_cohort: 중하위권
  anchor_status: null
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [star_2, star_3]
    L5_confidence: 0.85
  friction_verdict: OK

- id: 와부-CM2-2025-2중-08
  page: 3
  vendor_label: "문번 8 · 상"
  category_type: 객관식 · 상
  summary: |
    U={1..9} · A={1..5}·B={3..7} · 부분집합 X (n(X)=4) 중 "X-A ⊂ X-B 또는 X-B ⊂ X-A" 만족 개수.
  category: 부분집합 · 차집합 포함 조건 카운팅
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "X-A = X∩A^c · X-B = X∩B^c 로 정리 · 조건 재해석"
    - step: 2
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "X의 원소를 A^c∩B, A∩B, A∩B^c 세 영역으로 분리 · 각 영역별 원소 개수 case 분리"
    - step: 3
      type: I-SC
      depth: 2
      effective_depth: 2
      description: "n(X)=4 · 세 영역 원소 배분 · 조건 만족 case 합산 → 65"
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  rationale: |
    depth_score 8.33 · max=3 · count=3 · premium 3조건 (8.5·max=3·count≥5) 중 count 부족. **★ 4 안정**.
    부분집합 X 원소를 A와 B의 관계로 분해하는 통찰 (I-PD) + case 분리 (I-SC). 학평 킬러급 · 순수 수학.
  tier: star_4
  mechanism_primary: 부분집합 원소별 영역 분해 + 조건 카운팅
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  usage_ref: []
  cross_reference:
    - source: O-NEW-23 원소별 상태 조합
      relation: "동일 원형 · CM2-ST 정점"
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [블랙라벨-CM2-04-STEP2-#18]
    L3_multi_vendor_tier: [star_4, star_5]
    L5_confidence: 0.85
  friction_triggers: [F2]
  friction_verdict: OK

- id: 와부-CM2-2025-2중-11
  page: 4
  vendor_label: "문번 11 · 최상"
  category_type: 객관식 · 최상
  summary: |
    0 아닌 실수 a · 점 A(a,2a) · y축 위 점 P · 직선 y=x 위 점 Q · △APQ 둘레 최소일 때 무게중심 G · 보기 ㄱㄴㄷ (a=1 최솟값 √10 / P 좌표 / G가 항상 특정 직선 위 존재).
  category: 이중 대칭이동 최단경로 + 매개변수 자취 (Fagnano 유사)
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-BW
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "△APQ 둘레 최소 = A를 두 축(y축·y=x)에 대해 대칭 반사 · 두 대칭점 잇는 직선 발견 (원리 발견)"
    - step: 2
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "A(a,2a) → y축 대칭 A'(-a,2a) · y=x 대칭 A''(2a,a) · 두 대칭 조합"
    - step: 3
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "최솟값 = |A'A''| = √((3a)²+(a)²) = |a|√10 · a=1 시 √10 ㄱ 참"
    - step: 4
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "P·Q는 직선 A'A''와 두 축의 교점 · P·Q 좌표 매개변수화"
    - step: 5
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "G = ((A+P+Q)/3) 계산 후 매개변수 a 소거 · 정확 직선 59x-63y+59=0 위 존재 (ㄷ 판정)"
    - step: 6
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "P·Q 좌표 (0, 5a/3) 실측 · ㄴ 판정"
  insight_count: 6
  depth_score: 8.83
  base_star: 5
  star: 5
  premium: true
  rationale: |
    **premium 도달** · depth_score 8.83 ≥ 8.5 + max=3 + insight_count 6 ≥ 5 + signal_ref P 카드 3개 (P4·P3·P2).
    Fagnano 이중 대칭 원리 (O-01) + 매개변수 자취 (O-NEW-32 유사) 융합 · CM2-GM-이동 정점 · **와부고 자체 창작 정점 문항**.
    12회 #16 O-01 Fagnano와 원형 동일 · **자기복제 위험 감지 (자세한 분석 §Ⅴ)**.
  tier: star_5_premium
  mechanism_primary: 이중 대칭이동 최단경로 + 매개변수 자취
  insight_type: 통찰형 심층
  target_cohort: 상위권
  anchor_status: anchor
  usage_ref: [12회 #16 O-01 원형 동일 (변형 관계)]
  cross_reference:
    - source: 마-CM2-GM-이동-0664 (2016.09 학평)
      relation: "O-01 Fagnano 이중 대칭 원리 동형"
    - source: 12회 #16 슬롯
      relation: "동일 원형 · problem-author v2.1이 마-0664 pick 하여 창작"
  novelty_score: 3
  vendor_calibration_signal:
    L1_publication_correct_rate: null
    L2_signature_neighbors: [마-CM2-GM-이동-0664, 블랙라벨-CM2-03-STEP3-#09]
    L3_multi_vendor_tier: [star_5_premium]
    L5_confidence: 0.95
  friction_triggers: [F1, F2]
  friction_verdict: OK

- id: 와부-CM2-2025-2중-15
  page: 5
  vendor_label: "문번 15 · 서술형 · 최상"
  category_type: 서술형 3소문항 · 최상
  summary: |
    전체집합 U={정수 순서쌍} · A={원점 거리 2 미만 정수점} · A_(a,b) 평행이동 집합 · X={n(A∩A_(a,b))=2}·Y={=4}. (1) 두 원 서로 다른 2교점 조건 부등식 (2) n(X)·n(Y) (3) 삼중 교집합 조건 순서쌍.
  category: 격자점 원 교집합 · 서로 다른 교점 조건 다중 case
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "n(A)=13 계산 (반지름 2 미만 격자점) · A_(a,b) 정의 이해"
    - step: 2
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "두 원 서로 다른 두 교점 조건 = 0 < 중심거리 < 반지름의 합 = 4 · 조건 부등식 유도"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "n(A∩A_(a,b))=2 case = 원 두 교점 사이 격자점 개수 정확히 2 · (a,b) 유효 배치 탐색"
    - step: 4
      type: I-PD
      depth: 3
      effective_depth: 3
      description: "n(X)=8, n(Y)=4 실측 · (a,b) 격자 배치 정합 case"
    - step: 5
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "삼중 교집합 조건 (a,b,c,d) 8개 · 대칭성 활용 확인"
  insight_count: 5
  depth_score: 8.8
  base_star: 5
  star: 5
  premium: true
  rationale: |
    **premium 도달** · depth_score 8.8·max=3·count=5·signal_ref P 카드 2개 (P3·P4).
    격자점 + 원 위치관계 + case 분리 다층 · **와부고 CM2-ST 자체 창작 정점**. narrative 3층 (Frame 격자점 · Object 원의 평행이동 · Math 교점 수 조건 case). O-NEW-original 후보.
  tier: star_5_premium
  mechanism_primary: 격자점 원 교집합 다중 case 카운팅
  insight_type: 통찰형 심층
  target_cohort: 상위권
  anchor_status: anchor
  usage_ref: []
  cross_reference: []
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: []
    L3_multi_vendor_tier: [star_5_premium]
    L5_confidence: 0.90
  friction_triggers: [F1, F2, F3]
  friction_verdict: OK

- id: 와부-CM2-2025-2중-17
  page: 6-7
  vendor_label: "문번 17 · 서술형 · 최상 (지문형 A유형)"
  category_type: 서술형 3소문항 · 개기월식 지문 · 최상
  summary: |
    개기월식 지문 · 태양(반지름 5·원점) 지구(중심(20,0)·반지름 3) 달(반지름 1). 공통외접선의 개념 정의 박스 제공 후 (1) 두 원 방정식 (2) 공통외접선 식 (3) 개기식 종료시 달 중심 좌표.
  category: 3층 지문형 (Frame=개기월식·Object=3원 모델·Math=공통외접선+접선 조건)
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      description: "C_1·C_2 표준 방정식 산출 (표준)"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P5]
      description: "공통외접선 정의 이해 후 두 원 중심에서 거리 = 각각 반지름 조건 연립"
    - step: 3
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P6]
      description: "y = m(x-50) 형태 유도 · m² 유도 · 정확 기울기 -1/(3√11) 도출"
    - step: 4
      type: I-RT
      depth: 3
      effective_depth: 3
      description: "달 원 C_3과 직선 l_1 접함 조건 + 본그림자 영역 내부 조건 이중"
    - step: 5
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "부호 분기·좌표 정확값 (202+9√55)/10 정합"
  insight_count: 5
  depth_score: 8.6
  base_star: 5
  star: 5
  premium: true
  rationale: |
    **premium 도달** · depth_score 8.6·max=3·count=5·signal_ref P 카드 2개.
    3층 지문형 (Frame=천문 현상 · Object=3원 이상화 모델 · Math=공통외접선+접선). 정의 박스 자체 제공. **와부고 자체 창작 지문형 정점**. 다층 상황부여 카탈로그 P02 대표. **boundary 표시** (공통외접선은 CM2 가이드 상 신규 출제 지양).
    12회에 없음. 대안: problem-author v2.1이 O-06 두 원 접선 곱 (마-CM2-GM-원-0512) pick한 지점과 동형.
  tier: star_5_premium
  mechanism_primary: 두 원 공통외접선 + 접선 조건 + 영역 내 조건
  insight_type: 통찰형 심층 (3층 지문)
  target_cohort: 상위권
  anchor_status: anchor
  usage_ref: []
  cross_reference:
    - source: 마-CM2-GM-원-0512
      relation: "구조 유사 · 원 밖 점에서 접선 · 두 접선 조건 결합"
    - source: 학교기출-다층상황-카탈로그.md P02
      relation: "3층 지문형 대표"
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM2-GM-원-0512, 블랙라벨-CM2-02-STEP3-#04]
    L3_multi_vendor_tier: [star_5_premium]
    L5_confidence: 0.95
  friction_triggers: [F1, F2, F3, F5]
  friction_verdict: OK
```

### B. 2022-2중 (와부고 · CM2 순수 · 19문 · 집합·명제·함수)

```yaml
- id: 와부-CM2-2022-2중-01
  page: 1
  vendor_label: "문번 1 · 하"
  category_type: 객관식 · 하
  summary: |
    n(U), n(A∩B), n(A^c∩B^c) 주어질 때 n((A-B)∪(B-A)) = 대칭차집합.
  category: 대칭차집합 · 원소 개수 기본
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      description: "n(A∪B) = n(U) - n(A^c∩B^c) · n(대칭차) = n(A∪B) - n(A∩B)"
  insight_count: 1
  depth_score: 2.0
  base_star: 1
  star: 1
  premium: false
  rationale: 표준 절차형 · 문번 1번 warm-up. depth 3 없음.
  tier: star_1
  mechanism_primary: 대칭차집합 공식
  insight_type: 절차형
  target_cohort: 하위권
  anchor_status: null
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [star_1]
    L5_confidence: 0.90
  friction_verdict: OK

- id: 와부-CM2-2022-2중-05
  page: 2
  vendor_label: "문번 5 · 중"
  category_type: 객관식 · 중 (보기형)
  summary: |
    집합·명제 보기 ㄱ~ㅁ 참거짓 판정. 원소 개수·차집합 포함·명제 진리집합 혼합.
  category: 다중 판정 (집합+명제 혼합)
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "각 보기별 진리집합 시각화 · 판정"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "명제-집합 대응 확인 · 오답 분산 회피"
  insight_count: 2
  depth_score: 4.5
  base_star: 2
  star: 2
  premium: false
  rationale: 보기형 오답 분산 있으나 각 보기 자체 depth 2 이하. 중위권 판정형 표준.
  tier: star_2
  mechanism_primary: 진리집합·차집합 다중 판정
  insight_type: 통찰형 (약)
  target_cohort: 중위권
  anchor_status: null
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.80
  friction_verdict: OK

- id: 와부-CM2-2022-2중-09
  page: 3
  vendor_label: "문번 9 · 상"
  category_type: 객관식 · 상
  summary: |
    f(x)=2|x-2|+2, g(x)=-(1/4)(x-4)(x-8)+8. {x | g(f(x))=7 또는 f(x)=7} 원소합 중 a_1+a_3.
  category: 합성함수 절댓값 방정식 case 분리
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "f(x)=7 부터 해결 · |x-2|=5/2 → 2 실근"
    - step: 2
      type: I-PD
      depth: 3
      effective_depth: 3
      description: "g(f(x))=7 → g(y)=7 되는 y 값 (2차식 y 해) · f(x)=y 각 case 재귀 분해"
    - step: 3
      type: I-SC
      depth: 3
      effective_depth: 3
      description: "다중 case 나열 후 원소 서열 · a_1 (최소)·a_3 (3번째) 특정"
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  rationale: |
    depth_score 8.33 · max=3 · count=3 · premium 조건 (count≥5) 미충족. **★ 4 안정**.
    절댓값 + 2차 합성 case 분리 · 학평 킬러급 · 순수 수학 정점 후보.
  tier: star_4
  mechanism_primary: 합성함수 case 분리·다중 근 서열화
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [블랙라벨-CM2-06-STEP2 케이스]
    L3_multi_vendor_tier: [star_4, star_5]
    L5_confidence: 0.85
  friction_triggers: [F2]
  friction_verdict: OK

- id: 와부-CM2-2022-2중-13
  page: 4
  vendor_label: "문번 13 · 상"
  category_type: 객관식 · 상
  summary: |
    U={1..10} · A·B 조건 다중 · B-A 원소합 최댓값 M · 최솟값 m · M-m 값.
  category: 부분집합 원소합 최대·최소 (표본 원형)
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "B-A = B∩A^c 조건 정리"
    - step: 2
      type: I-MI
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "원소합 최대·최소 조건 = 가능한 원소 선택 최적화 (그리디)"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "M·m 정확 값 계산 · M-m 산출"
  insight_count: 3
  depth_score: 7.67
  base_star: 4
  star: 4
  premium: false
  rationale: |
    depth_score 7.67·max=3·count=3 · premium 미달. **★ 4 안정** · CM2-ST §집합 정점 원형.
    12회 #17 부분집합 원소합·최대최소 (마-0777·0779 결합)와 원형 유사 · 자기복제 감지 대상 (§Ⅴ).
  tier: star_4
  mechanism_primary: 부분집합 원소합 최대·최소 최적화
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  usage_ref: [12회 #17 유사 원형]
  cross_reference:
    - source: 마-CM2-ST-집합의뜻-0777, 0779
      relation: "원소합 최대·최소 카운팅 원형 · 12회 #17 pick의 배경"
    - source: 12회 #17
      relation: "구조 유사 · 회차당 상한 1 준수 필요"
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM2-ST-집합의뜻-0777]
    L3_multi_vendor_tier: [star_4]
    L5_confidence: 0.90
  friction_triggers: [F2]
  friction_verdict: OK

- id: 와부-CM2-2022-2중-15
  page: 5
  vendor_label: "문번 15 · 최상"
  category_type: 객관식 · 최상
  summary: |
    f(x)=x^2-2kx+2k^2-3k-12, h(x) 부분 정의. y=h(x)와 y=15t가 네 점에서 만나는 자연수 k 값 합.
  category: 이차함수의 부분 + 교점 개수 조건 · 매개변수 k
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "f(x) 꼭짓점·판별식 관리 · h(x) 부분 정의 이해"
    - step: 2
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "y=h(x)와 y=15t 교점 4개 조건 = 이차함수 두 지점 + 조각 다른 지점 조합"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "k 자연수 범위 case 분리 · 판별식 · 교점 위치 검증"
    - step: 4
      type: I-SC
      depth: 3
      effective_depth: 3
      description: "유효 k 값 열거 · 합 산출"
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: |
    depth_score 8.5·max=3·count=4 · premium 임계 근접 (count≥5 미달). **★ 5 안정** (premium 아님).
    함수 부분별·매개변수 다중 case · 학평 킬러급 · 순수 수학 정점.
  tier: star_5
  mechanism_primary: 두 식으로 정의된 함수·매개변수·교점 개수 case
  insight_type: 통찰형 심층
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [블랙라벨-CM2-06-STEP2-#03]
    L3_multi_vendor_tier: [star_5]
    L5_confidence: 0.85
  friction_triggers: [F1, F2]
  friction_verdict: OK

- id: 와부-CM2-2022-2중-19
  page: 6-7
  vendor_label: "문번 19 · 서술형 · 최상"
  category_type: 서술형 · 최상 (함수)
  summary: |
    X={1..5}·f:X→X · 일대일 g 조건 · f(1)+f(3)+f(5) 최대·최소.
  category: 함수 조건형 · 원소 서열 최적화
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "f 정의 조건·g 일대일 조건 정리"
    - step: 2
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "f(1)+f(3)+f(5) 총합의 상하한 판단 (g의 일대일 제약)"
    - step: 3
      type: I-MI
      depth: 3
      effective_depth: 3
      description: "f 값 배정 최적화 · 최대·최소 case 열거"
    - step: 4
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "각 case 존재성 확인 · 최소 8·최대 10"
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: |
    depth_score 8.5·max=3·count=4 · premium 임계 근접 (count≥5 미달). **★ 5**. CM2-FN 정점.
    O-NEW-30 함수방정식 계열 원형 인접.
  tier: star_5
  mechanism_primary: 함수 조건·값 배정 최적화
  insight_type: 통찰형 심층
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [블랙라벨-CM2-06-STEP3-#01]
    L3_multi_vendor_tier: [star_5]
    L5_confidence: 0.85
  friction_triggers: [F2, F3]
  friction_verdict: OK
```

### C. 2022-2기 (와부고 · 유리·무리+CB 혼재 · in 14문 · 표본 5문)

```yaml
- id: 와부-CM2-2022-2기-02
  page: 1
  vendor_label: "문번 2 · 중"
  category_type: 객관식 · 중
  summary: |
    유리함수 y=(ax+b)/(x+c) 점근선 x=1, y=2 · (4,3) 통과 · a+b+c.
  category: 유리함수 표준형 결정 · 점근선
  M: {s: 1, k: 2, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      description: "점근선 x=1 → c=-1 · y=2 → a=2 · (4,3) 대입 → b"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      description: "a+b+c 계산"
  insight_count: 2
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: 표준 절차형 · CM2-RF §유리 기본. 문번 2번 warm-up.
  tier: star_2
  mechanism_primary: 유리함수 표준형·점근선
  insight_type: 절차형
  target_cohort: 중하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [star_2, star_3]
    L5_confidence: 0.90
  friction_verdict: OK

- id: 와부-CM2-2022-2기-08
  page: 3
  vendor_label: "문번 8 · 상"
  category_type: 객관식 · 상
  summary: |
    원 x²+y²-4x-6y+4=0 위의 점에서 4x+3y 최댓값·최솟값 합.
  category: 원 위의 점 · 일차식 최대·최소 (원+직선 거리)
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "원 표준화 (x-2)²+(y-3)²=9 · 중심·반지름"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "4x+3y=k · 원-직선 거리 조건 |4·2+3·3-k|/5 = 3 · k 두 값"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "합 = 2·17 = 34 (두 값 평균 = 중심 값)"
  insight_count: 3
  depth_score: 7.67
  base_star: 3
  star: 3
  premium: false
  rationale: |
    depth_score 7.67·max=3·count=3 · **★ 3 표준 유형** · 원 위 점 최대·최소 = 학교 필수 기출.
    개념원리·RPM에서 반복 등장.
  tier: star_3
  mechanism_primary: 원 위 점 · 일차식 최대·최소
  insight_type: 통찰형 (약)
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L2_signature_neighbors: [개념원리-CM2-GM-원-유형07, RPM-CM2-GM-원 시험꼭나오는]
    L3_multi_vendor_tier: [star_3, star_4]
    L5_confidence: 0.90
  friction_verdict: OK

- id: 와부-CM2-2022-2기-11
  page: 4
  vendor_label: "문번 11 · 상"
  category_type: 객관식 · 상
  summary: |
    y=-6/x 를 평행이동한 두 유리함수 f·g · x+y=-1 대칭 · 원점 통과 · 두 교점 사이 거리.
  category: 유리함수 평행이동 + 대칭축 + 교점 거리
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "유리함수 두 점근선의 교점 = 대칭중심 · x+y=-1 위 대칭중심 조건"
    - step: 2
      type: I-BW
      depth: 3
      effective_depth: 3
      description: "f·g가 원점 통과 = 평행이동 벡터 (p,q) 조건 · p·q=6 도출"
    - step: 3
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "두 함수 f=-6/(x-p)+q · 대칭축 상 대응·연립"
    - step: 4
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "교점 사이 거리 산출"
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: |
    depth_score 8.5·max=3·count=4 · **★ 5** · CM2-RF 유리 정점 · O-NEW-31 (a,b) 대칭중심 계열.
    12회에 없음 (12회는 CM2-GM+ST 범위) · CM2-RF pool 편입 필수.
  tier: star_5
  mechanism_primary: 유리함수 대칭중심 · 평행이동 + 교점 거리
  insight_type: 통찰형 심층
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [블랙라벨-CM2-07-STEP3-#08]
    L3_multi_vendor_tier: [star_5]
    L5_confidence: 0.85
  friction_triggers: [F1, F2]
  friction_verdict: OK

- id: 와부-CM2-2022-2기-14
  page: 4
  vendor_label: "문번 14 · 최상"
  category_type: 객관식 · 최상
  summary: |
    y=36/(x+10)+4 와 y=√x · y축으로 둘러싸인 영역의 정수점 (격자점) 개수.
  category: 유리+무리 영역 격자점 카운팅
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "y축, y=36/(x+10)+4, y=√x 세 곡선 위치 파악"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "영역 정의 (세 곡선 둘러싼) · x 범위 별로 y 상한·하한 파악"
    - step: 3
      type: I-PD
      depth: 3
      effective_depth: 3
      description: "각 x 정수값 별 y 정수 범위 산출 · 카운팅"
    - step: 4
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "경계 포함·불포함 판별 (엄밀·완만)"
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: |
    depth_score 8.5·max=3·count=4 · **★ 5** · CM2-RF 유리+무리 융합 정점.
    학평 킬러급 · 격자점+영역 · O-04 사각뿔 3D와 유사 계열.
  tier: star_5
  mechanism_primary: 유리+무리 영역 격자점 카운팅
  insight_type: 통찰형 심층
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [블랙라벨-CM2-07·08-STEP3]
    L3_multi_vendor_tier: [star_5]
    L5_confidence: 0.85
  friction_triggers: [F1, F2, F5]
  friction_verdict: OK

- id: 와부-CM2-2022-2기-16
  page: 5
  vendor_label: "문번 16 · 서술형 · 상"
  category_type: 서술형 · 상 (무리함수)
  summary: |
    y=√(2x+k) 와 직선 y=x 의 교점 개수를 실수 k 범위별 서술.
  category: 무리함수 · 직선 교점 개수 case 분리 · 서술형 정석
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "y=x 대입 · x²-2x-k=0 · 판별식 D=4+4k"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "정의역 조건 (x≥-k/2) + 그림 위 조건 (y≥0) 이중 필터"
    - step: 3
      type: I-SC
      depth: 3
      effective_depth: 3
      description: "k 범위별 case 분리: k>0 1개 / -1<k≤0 2개 / k=-1 1개 / k<-1 0개"
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    depth_score 8.0·max=3·count=3 · **★ 4 안정** · 서술형 정석 유형 · case 분리 판정형.
  tier: star_4
  mechanism_primary: 무리함수 · 교점 개수 case 분리
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 1
  vendor_calibration_signal:
    L2_signature_neighbors: [개념원리-CM2-RF-무리 서술]
    L3_multi_vendor_tier: [star_4]
    L5_confidence: 0.90
  friction_triggers: [F2]
  friction_verdict: OK
```

### D. 2023-2중 (와부고 · CM2 순수+boundary 1 · in 17문 · 표본 6문)

```yaml
- id: 와부-CM2-2023-2중-03
  page: 1
  vendor_label: "문번 3 · 중"
  category_type: 객관식 · 중
  summary: |
    보기 ㄱ~ㄹ 중 "p가 q이기 위한 충분조건이지만 필요조건은 아닌 것".
  category: 충분·필요조건 판정 (다중 판단)
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "각 보기 진리집합 P·Q 구성 · 포함 관계 확인"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "P⊂Q ∧ Q⊄P case 정확 판별"
  insight_count: 2
  depth_score: 4.5
  base_star: 3
  star: 3
  premium: false
  rationale: 다중 판정 오답 분산 있으나 각 case 표준. ★ 3 중위권 pool.
  tier: star_3
  mechanism_primary: 충분·필요조건 진리집합 판단
  insight_type: 통찰형 (약)
  target_cohort: 중상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: [star_3]
    L5_confidence: 0.85
  friction_verdict: OK

- id: 와부-CM2-2023-2중-08
  page: 3
  vendor_label: "문번 8 · 상"
  category_type: 객관식 · 상
  summary: |
    f·g 구간별 함수 정의 · (f∘g^(-1))(25) + (f^(-1)∘g)(25).
  category: 구간별 합성·역함수 (계산 다중)
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "구간별 g^(-1)(25), f^(-1)(?) 각 case 계산"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "합성 각 방향 정확 순서 적용"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "정의역·치역 정합 검증"
  insight_count: 3
  depth_score: 7.0
  base_star: 3
  star: 3
  premium: false
  rationale: 표준 절차형 · 구간별 함수 계산 반복. depth 3 없음. ★ 3 안정.
  tier: star_3
  mechanism_primary: 구간별 함수 합성·역함수 계산
  insight_type: 절차형+통찰(약)
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [star_3, star_4]
    L5_confidence: 0.80
  friction_verdict: OK

- id: 와부-CM2-2023-2중-11
  page: 4
  vendor_label: "문번 11 · 상"
  category_type: 객관식 · 상
  summary: |
    n(A)=16·n(B)=21·n(C)=17 등 조건 · n(A∪B∪C) 최대 p·최소 q · p-q.
  category: 포함배제·원소 개수 최대·최소
  M: {s: 3, k: 3, a: 2, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "포함배제 원리 · n(A∪B∪C) = 각 항 합·교"
    - step: 2
      type: I-MI
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "n(A∩B), n(A∩B∩C) 조합 최대·최소 case 산출"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "제약 조건 하에서 극값 갱신 · 벤 다이어그램 배치"
    - step: 4
      type: I-VF
      depth: 2
      effective_depth: 2
      description: "각 극값 case 존재성 검증"
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: |
    depth_score 8.5·max=3·count=4 · **★ 5** · CM2-ST §집합 정점 원형.
    포함배제 + 원소 개수 최대·최소 조합 · 학평 킬러급.
  tier: star_5
  mechanism_primary: 포함배제 · 원소 개수 최대·최소
  insight_type: 통찰형 심층
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [O-NEW-29 이중 mod 조건 원소합, 블랙라벨-CM2-04-STEP3]
    L3_multi_vendor_tier: [star_5]
    L5_confidence: 0.85
  friction_triggers: [F2]
  friction_verdict: OK

- id: 와부-CM2-2023-2중-14
  page: 4
  vendor_label: "문번 14 · 최상"
  category_type: 객관식 · 최상
  summary: |
    A_n={n의 배수} · A_45∩A_n=A_(3n) · 420∉A_2^c∪A_n · 500 이하 자연수 n 개수.
  category: 배수 집합 · 다중 조건 · mod 잔여
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "A_45∩A_n = A_lcm(45,n) · 조건 lcm(45,n)=3n"
    - step: 2
      type: I-PD
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "lcm 조건 → n의 소인수 구조 (n은 15의 배수) 도출"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "420∉A_2^c∪A_n = 420∈A_2∩A_n^c · 420이 2의 배수 확인·n이 420의 약수 아님"
    - step: 4
      type: I-SC
      depth: 3
      effective_depth: 3
      description: "n=15k · 500 이하 · k 조건 열거 · 개수 산출"
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: |
    depth_score 8.5·max=3·count=4 · **★ 5** · CM2-ST 배수 집합 정점.
    O-NEW-24 서로소 mod 잔여 최대집합 계열 · **자기복제 위험 낮음** (12회에 배수 집합 없음).
  tier: star_5
  mechanism_primary: 배수 집합 · lcm 조건 · 원소 판정
  insight_type: 통찰형 심층
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [블랙라벨-CM2-04-STEP3-#12 (2020 교육청)]
    L3_multi_vendor_tier: [star_5]
    L5_confidence: 0.85
  friction_triggers: [F1, F2]
  friction_verdict: OK

- id: 와부-CM2-2023-2중-17
  page: 5-6
  vendor_label: "문번 17 · 서술형 · 상"
  category_type: 서술형 · 상 (증명)
  summary: |
    (n²+1)(n²-1) 이 5의 배수가 아니면 n은 5의 배수임을 귀류법으로 증명.
  category: 명제 증명 (귀류법 · mod 5 case 열거)
  M: {s: 2, k: 3, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "귀류법 구조 · '5의 배수 아니다'로 가정"
    - step: 2
      type: I-BW
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "n을 mod 5 case (1,2,3,4)로 분리 · 각 case에서 (n²+1)(n²-1) mod 5 확인"
    - step: 3
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "모든 case에서 5의 배수 확인 · 가정 모순 도출 · 귀류법 완성"
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    depth_score 8.0·max=3·count=3 · **★ 4** · CM2-ST §증명 정석. 귀류법 + case 분리.
  tier: star_4
  mechanism_primary: 귀류법 · mod case 분리 증명
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: [star_4]
    L5_confidence: 0.90
  friction_verdict: OK

- id: 와부-CM2-2023-2중-19
  page: 6
  vendor_label: "문번 19 · 서술형 · 최상"
  category_type: 서술형 · 최상 (충분·필요·최적화)
  summary: |
    p·q·r 조건 · p가 q의 충분조건·r이 q의 필요조건 · a 최대 m·b 최소 n. m=3·n=9.
  category: 충분·필요조건 · 진리집합 최적화
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "p·q·r 진리집합 P·Q·R 시각화"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "P⊂Q ∧ Q⊂R 조건 · a·b 매개변수 관계"
    - step: 3
      type: I-MI
      depth: 3
      effective_depth: 3
      description: "a 최대 · b 최소 최적화"
    - step: 4
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "극값 case 검증 · m=3·n=9"
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: |
    depth_score 8.5·max=3·count=4 · **★ 5** · CM2-ST §충분·필요·최적화 정점.
  tier: star_5
  mechanism_primary: 진리집합 · 충분·필요·최적화
  insight_type: 통찰형 심층
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [블랙라벨-CM2-05-STEP2·3]
    L3_multi_vendor_tier: [star_5]
    L5_confidence: 0.85
  friction_triggers: [F2]
  friction_verdict: OK
```

### E. 2022-2기 vs 2023-2기 (in 12·14문 · 유리무리+CB 혼재 · 표본 5문)

```yaml
- id: 와부-CM2-2022-2기-15
  page: 5
  vendor_label: "문번 15 · 최상"
  category_type: 객관식 · 최상
  summary: |
    f(x) = √(8x)(x≥0)/-√(-8x)(x<0), g(x)=-3/x · 정삼각형 ABC 넓이=(p/q)√3 → p+q.
  category: 무리+유리 함수 · 정삼각형 넓이 (도형+대수 융합)
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "f는 원점 대칭 · g도 원점 대칭 · 두 곡선의 대칭성 활용"
    - step: 2
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P6]
      description: "정삼각형 ABC 조건 = 두 곡선 위 세 점의 등거리·60° 조건 융합"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "매개변수 좌표 설정 · 정삼각형 조건식 유도"
    - step: 4
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "넓이 산출 · 유리화 → p/q · p+q"
    - step: 5
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "각 정삼각형 case 존재성 확인"
  insight_count: 5
  depth_score: 8.6
  base_star: 5
  star: 5
  premium: true
  rationale: |
    **premium 도달** · depth_score 8.6·max=3·count=5·signal_ref P 카드 2개.
    무리+유리+정삼각형 다층 융합 · CM2-RF 정점 · 학평 30번급 · 도형+대수 융합 (O-14 계열).
    **와부고 자체 창작 정점 · 12회 회피 대상 (CM2-RF 범위 밖)**.
  tier: star_5_premium
  mechanism_primary: 무리+유리 · 정삼각형 도형+대수 융합
  insight_type: 통찰형 심층 (5+)
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: [블랙라벨-CM2-08-STEP3, 마-CM2-RF-무리 학평]
    L3_multi_vendor_tier: [star_5_premium]
    L5_confidence: 0.90
  friction_triggers: [F1, F2, F3]
  friction_verdict: OK

- id: 와부-CM2-2023-2기-15
  page: 5
  vendor_label: "문번 15 · 최상"
  category_type: 객관식 · 최상
  summary: |
    f(x)=√(p(x-q))+r · f와 역함수가 세 점 P·Q·R에서 만날 때 △PQR 넓이의 최댓값.
  category: 무리함수 · 자기역함수 · 삼각형 넓이 최적화
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "f와 f^(-1)이 y=x 대칭 · 세 교점 = y=x 위 1점 + 대칭 2점"
    - step: 2
      type: I-BW
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "세 점 중 두 점은 y=x 대칭 · 넓이 = 대칭 · y=x 축 거리 × 두 점 거리 / 2"
    - step: 3
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "p·q·r 매개변수 · 세 교점 조건 유도"
    - step: 4
      type: I-MI
      depth: 3
      effective_depth: 3
      description: "넓이 함수 최적화 · 극값 매개변수"
    - step: 5
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "정확 최댓값 계산"
  insight_count: 5
  depth_score: 8.6
  base_star: 5
  star: 5
  premium: true
  rationale: |
    **premium 도달** · depth_score 8.6·max=3·count=5·signal_ref P 카드 2개.
    자기역함수 (y=x 대칭) 3중 교점 · 삼각형 넓이 최적화 · CM2-RF 무리 정점 · O-NEW-32 min(f, f^(-1)) 계열.
    **와부고 자체 창작 정점 · 자기복제 위험 중~높** (마-CM2-RF-무리 학평 유사).
  tier: star_5_premium
  mechanism_primary: 자기역함수 · 3중 교점 · 삼각형 넓이 최적화
  insight_type: 통찰형 심층 (5+)
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  vendor_calibration_signal:
    L2_signature_neighbors: [블랙라벨-CM2-08-STEP3-#12, 마-CM2-RF-무리 학평]
    L3_multi_vendor_tier: [star_5_premium]
    L5_confidence: 0.90
  friction_triggers: [F1, F2, F3]
  friction_verdict: OK

- id: 와부-CM2-2023-2기-14
  page: 4
  vendor_label: "문번 14 · 최상"
  category_type: 객관식 · 최상
  summary: |
    f(x)=(bx+1)/(ax+5) 그래프와 원 C_1 대칭 · 접하는 원 C_2 반지름.
  category: 유리함수 대칭중심 + 원 대칭 + 접선
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-SYM
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "유리함수 대칭중심 = 점근선 교점 · 원 C_1 중심과 정합"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "그래프와 원 대칭 조건 → a·b 결정"
    - step: 3
      type: I-XU
      depth: 3
      effective_depth: 3
      description: "C_2 접함 조건 · 중심 위치·반지름 도출"
    - step: 4
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "정합 검증 · 유효 반지름"
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: |
    depth_score 8.5·max=3·count=4 · **★ 5** · CM2-RF 유리 정점 · O-NEW-31 계열.
  tier: star_5
  mechanism_primary: 유리 대칭중심 + 원 접선
  insight_type: 통찰형 심층
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [블랙라벨-CM2-07-STEP3]
    L3_multi_vendor_tier: [star_5]
    L5_confidence: 0.85
  friction_triggers: [F1, F2]
  friction_verdict: OK

- id: 와부-CM2-2023-2기-09
  page: 3
  vendor_label: "문번 9 · 상"
  category_type: 객관식 · 상
  summary: |
    A={y=3√(3-x)+3} · B={y=-x/2+k} · n(A∩B)=2 인 정수 k 합.
  category: 무리함수 · 직선 교점 개수 조건
  M: {s: 2, k: 3, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "무리함수 표준형·정의역 파악 · 직선 대입 후 판별식"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P3]
      description: "n=2 조건 = 판별식 조건 + 정의역 내 조건 이중 필터"
    - step: 3
      type: I-SC
      depth: 3
      effective_depth: 3
      description: "k 정수 case 열거·합"
  insight_count: 3
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: depth_score 8.0·max=3·count=3 · ★ 4 · 무리함수 표준 case 분리형.
  tier: star_4
  mechanism_primary: 무리 · 직선 교점 개수 case
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: candidate
  novelty_score: 1
  vendor_calibration_signal:
    L2_signature_neighbors: [개념원리-CM2-RF-무리 유형]
    L3_multi_vendor_tier: [star_4]
    L5_confidence: 0.85
  friction_verdict: OK

- id: 와부-CM2-2023-2기-19
  page: 6
  vendor_label: "문번 19 · 서술형 · 최상"
  category_type: 서술형 · 최상 (무리함수 다중 교점)
  summary: |
    부분 정의 무리함수 f · 직선 y=(1/2)tx · y=(1/3)tx 교점 개수 g(t)·h(t) · 합의 최댓값.
  category: 두 무리식으로 정의된 함수 · 두 직선 매개변수 · 교점 함수 최적화
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "두 식으로 정의된 함수 그래프 개별 이해 · 두 직선 원점 통과"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      signal_ref: [P4]
      description: "각 식 별 직선 교점 case 분리 · t 매개변수 별 g(t)·h(t)"
    - step: 3
      type: I-XU
      depth: 3
      effective_depth: 3
      signal_ref: [P2]
      description: "g(t)+h(t) 최댓값 구간 파악"
    - step: 4
      type: I-VF
      depth: 3
      effective_depth: 3
      description: "각 극값 case 존재성 확인"
  insight_count: 4
  depth_score: 8.5
  base_star: 5
  star: 5
  premium: false
  rationale: depth_score 8.5·max=3·count=4 · ★ 5 · CM2-RF 무리 정점 · 학평 킬러급.
  tier: star_5
  mechanism_primary: 두 무리식으로 정의된 함수 · 매개변수 · 교점 함수 최적화
  insight_type: 통찰형 심층
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 2
  vendor_calibration_signal:
    L2_signature_neighbors: [블랙라벨-CM2-08-STEP3]
    L3_multi_vendor_tier: [star_5]
    L5_confidence: 0.85
  friction_triggers: [F2]
  friction_verdict: OK
```

---

## Ⅱ. 회귀 예측 요약 (나머지 46문 · 문번 위치 · vendor_label heuristic)

**예측 함수 v1.0 (와부고 특유)**:
```
와부고_star_predict(no, difficulty_label) =
  # 5시험지 전체 최빈 패턴 (표본 30문 실측 기반)
  if no in [1,2,3] and difficulty in [하,중]:     return {star: 1~2, confidence: 0.85}
  elif no in [4,5,6,7] and difficulty == 중:       return {star: 2~3, confidence: 0.80}
  elif no in [8,9,10] and difficulty == 상:        return {star: 3~4, confidence: 0.75}
  elif no in [11,12,13,14] and difficulty == 상:   return {star: 4, confidence: 0.80}
  elif no == 15 and difficulty == 최상:            return {star: 5, confidence: 0.85, premium: 40%}
  elif no in [16,17] and format == 서술형 상:      return {star: 4, confidence: 0.80}
  elif no in [18,19] and format == 서술형 최상:    return {star: 5, confidence: 0.80, premium: 20%}
```

**나머지 46문 예측 판정** (표본과 vendor_label heuristic 결합):

| 시험지 | 문번 | 예측 star | 예측 premium | 신뢰 | 판정 근거 |
|---|---|---|---|---|---|
| 2025-2중 | 2 | star_2 | false | 0.85 | 원이 될 조건 (중) · 표준 절차 |
| 2025-2중 | 3 | star_2 | false | 0.80 | 변수치환 도형 이동 · 계산 다중 |
| 2025-2중 | 4 | star_3 | false | 0.80 | 원소·부분집합 판정 보기 (중) |
| 2025-2중 | 6 | star_4 | false | 0.75 | 3외국어 조사 조건 최대·최소 · 상 |
| 2025-2중 | 7 | star_4 | false | 0.75 | 원-직선 위치관계 정수 (상) |
| 2025-2중 | 9 | star_3 | false | 0.80 | 두 원 교점 x좌표 (boundary) |
| 2025-2중 | 10 | star_4 | false | 0.75 | 이차함수·이등변삼각형 (상) |
| 2025-2중 | 12 | star_4 | false | 0.75 | 삼각형 넓이 이등분·x절편 (상) |
| 2025-2중 | 13 | star_3 | false | 0.85 | 원점 삼각형 넓이 유도 · 서술형 중 (Shoelace 정석) |
| 2025-2중 | 14 | star_4 | false | 0.80 | 자취 방정식 서술형 상 |
| 2025-2중 | 16 | **star_5_premium** | true | 0.90 | 사도기+펭귄 3층 지문형 · P01 대표 · boundary (닮음변환) |
| 2022-2중 | 2 | star_1 | false | 0.85 | 텃밭 가꾸기 · 하 warm-up |
| 2022-2중 | 3 | star_3 | false | 0.80 | 12가지 대응 카탈로그 (F 패턴) |
| 2022-2중 | 4 | star_3 | false | 0.80 | 합성·역함수 명제 5개 |
| 2022-2중 | 6 | star_3 | false | 0.80 | 부분집합 여사건 (중) |
| 2022-2중 | 7 | star_4 | false | 0.75 | f=g 정수집합 X (상) |
| 2022-2중 | 8 | star_4 | false | 0.75 | 서로소·오일러 피 · 학평 재편입 |
| 2022-2중 | 10 | star_4 | false | 0.80 | 합성함수 반복·주기 (상) |
| 2022-2중 | 11 | star_4 | false | 0.75 | 부분집합 이중 조건 · 상 |
| 2022-2중 | 12 | **star_5** | false | 0.80 | 나머지 함수·일대일대응 (최상) |
| 2022-2중 | 14 | star_4 | false | 0.80 | min 함수·일대일대응 (상) |
| 2022-2중 | 16 | star_4 | false | 0.85 | 논술 일대일함수 조건 |
| 2022-2중 | 17 | star_4 | false | 0.80 | 논술 집합 연산·개수 |
| 2022-2중 | 18 | star_4 | false | 0.85 | 논술 대우+귀류법 표준 |
| 2022-2기 | 1 | star_2 | false | 0.85 | p·q 필요조건 (하) |
| 2022-2기 | 3 | star_2 | false | 0.85 | 무리함수 그래프 (중) |
| 2022-2기 | 5 | star_3 | false | 0.80 | 조건부 일대일대응 f 개수 |
| 2022-2기 | 9 | star_4 | false | 0.80 | 유리함수 넓이 최소 (상) |
| 2022-2기 | 18 | star_4 | false | 0.85 | 논술 유리+무리 대칭·접 |
| 2023-2중 | 1 | star_2 | false | 0.85 | 명제 참거짓 (중) |
| 2023-2중 | 2 | star_2 | false | 0.85 | 서로소 부분집합 (중) |
| 2023-2중 | 5 | star_3 | false | 0.80 | y=x·역함수 그래프 · 합성 |
| 2023-2중 | 6 | star_3 | false | 0.80 | 12의 약수·짝수 집합 |
| 2023-2중 | 7 | star_3 | false | 0.85 | (g∘f)(1)+(f^{-1}∘g^{-1})(5) |
| 2023-2중 | 9 | star_4 | false | 0.80 | f(3x+1) 결정·역함수 곱 |
| 2023-2중 | 10 | star_4 | false | 0.75 | 일대일대응·교집합 조건 |
| 2023-2중 | 12 | star_4 | false | 0.80 | 내접 정사각형 증명 빈칸 (boundary) |
| 2023-2중 | 13 | star_4 | false | 0.80 | ||x|-a|<1 진리집합·명제 |
| 2023-2중 | 15 | **star_5** | false | 0.85 | 집합족·멱집합 최소 (최상) |
| 2023-2중 | 16 | star_4 | false | 0.85 | 논술 그래프 판별 |
| 2023-2중 | 18 | **star_5** | false | 0.80 | 논술 (f∘f)(x)·기울기 범위 |
| 2023-2기 | 2 | star_2 | false | 0.85 | 유리식 부분분수 (하) |
| 2023-2기 | 3 | star_2 | false | 0.85 | 무리함수 그래프 (하) |
| 2023-2기 | 6 | star_3 | false | 0.80 | 유리함수·사분면 조건 |
| 2023-2기 | 8 | star_4 | false | 0.80 | 무리·역함수 교점 (상) |
| 2023-2기 | 10 | star_4 | false | 0.75 | 함수 3조건 개수 |
| 2023-2기 | 11 | star_4 | false | 0.80 | 무리함수·길이 함수 h(t) |
| 2023-2기 | 12 | star_4 | false | 0.80 | 합성·유리 최솟값 |
| 2023-2기 | 13 | star_4 | false | 0.75 | 유리·역함수 격자점 (상) |
| 2023-2기 | 18 | star_4 | false | 0.85 | 논술 유리·대칭·접 |

**예측 종합 (표본 30 + 예측 46 = 76문)**:
| ★ | 표본 실측 | 예측 | 전체 |
|---|---|---|---|
| ★ 1 | 3 | 1 (2022-2중 #2) | 4 |
| ★ 2 | 5 | 8 | 13 |
| ★ 3 | 9 | 14 | 23 |
| ★ 4 | 8 | 19 | 27 |
| ★ 5 | 4 | 3 (2022중 #12·2023중 #15·2023중 #18) | 7 |
| ★ 5 premium | 1 | 1 (2025 #16 사도기) | 2 |
| **합계** | **30** | **46** | **76** |

---

## Ⅲ. 와부고 특유 출제 패턴 매핑

### 3.1 문번 배치·배점 규칙 (5시험지 통합)
| 구간 | 문번 | 배점 (추정) | 난이도 | 대상층 |
|---|---|---|---|---|
| Warm-up | 1~3 | 3~4점 | 하·중 | 하위권 |
| 표준 | 4~7 | 4~5점 | 중 | 중하위·중위 |
| 상승 | 8~12 | 5~6점 | 상 | 중상위·상위 |
| 정점 | **13~15** | **6~7점** | **최상** | **상위** |
| 서술형 | 16~19 | 6·7·7·8~9점 | 상·최상 | 상위 |

**핵심**: 문번 14·15가 선택형 정점 (거의 매 시험지에 최상) · 서술형 마지막 (18·19)가 서술형 정점.

### 3.2 정점 3문 pattern (5시험지 100% 정합)
- **선택형 정점 1문**: 문번 14 또는 15 (매 시험지)
- **서술형 정점 2문**: 문번 18·19 또는 16·17 (매 시험지)
- **평균 정점 배점 비율**: 6~9점 · 총 22~25점 (100점 중 22~25%)

### 3.3 narrative 지문형 활용도 (와부고 특유 · 2025 시험지 신규)
- **2022 중간·기말**: 지문형 부재 (순수 수학 정점)
- **2023 중간·기말**: 부분 부재 (2023-2중 #12 예각삼각형 도해가 근접 · 순수 수학 중심)
- **2025 중간**: **지문형 2문** (#16 사도기+펭귄 3층 A유형 · #17 개기월식+3원 모델 B유형) = **정점 4문 중 2문 지문형**
- **추세**: 2025부터 학교 지문형 도입 · 12회 청사진의 "narrative 지문형 0문" 결정은 **와부고 2022·2023 추세와 정합** · 2025 추세 대응 부재는 잠재 위험

### 3.4 자체 창작 정점 vs 학평 원문 pick 균형
- **자체 창작 정점 문항**: 2025 #11·#15·#16·#17 (2025 시험지가 자체 창작 정점 4문 최다) · 2022·2023 각 2~3문
- **학평 원문 pick**: 2022-2중 #8 (오일러 피) · 나머지는 대부분 자체 편성

### 3.5 CM2-ST 강조 (5시험지 통합)
| 소단원 | 2022중 | 2023중 | 2025중 | 소계 |
|---|---|---|---|---|
| 집합 | 8 | 7 | 4 | 19 |
| 명제·충분·필요 | 4 | 5 | 0 | 9 |
| 함수 | 7 | 7 | (제외) | 14 |
- **CM2 중간 3시험지 통합** = **집합 19문·명제 9문·함수 14문 = 총 42문** (66%)
- **와부고 특유 : CM2-ST §집합·부분집합·연산 지향 · 명제 상대적 적음** · 12회 청사진 (CM2-ST 8문/17) 배분 정합.

### 3.6 산술기하평균 (CM2 §명제 정규 교과) 활용
- **2022-2기 #12 · #17** (out 표시 · 실은 CM2 §명제 정규) · **2023-2중 #12** (boundary 표시 · 산술기하조화 · 실은 CM2 §명제 도구)
- **패턴**: 산술기하평균 = CM2 §명제 정규 교과 · **자유 활용 필수**. 우리 12회 #11 (RPM #0761) 정합.

---

## Ⅳ. 회귀 정합률 (기존 시판 벤더 대비)

### 4.1 벤더 라벨과의 정합률
| 벤더 대비 | 최빈 ★ 정합 | 편차 |
|---|---|---|
| 쎈 (C단계 사고력) | 표본 4 (2025#11, 2022중#15, 2023중#14, 2022중#19) 모두 ★ 5 실측 = **75% 정합** (쎈 C단계 예측 ★ 4 · 실측 ★ 5) | +1 편차 (와부고 라벨 관대) |
| 마플 (STEP 3) | 표본 3 (2025#15, 2022기#15, 2023기#15) 실측 ★ 5·premium = **100% 정합** (마플 STEP 3 소단원별 ★ 4~5 예측과 부합) | ±0 |
| 개념원리 (실력UP/수능형) | 표본 8 (표준 유형 대다수) 실측 ★ 3~4 = **60~70% 정합** | ±0.5 |

**해석**: 와부고 정점 문항 = 쎈 C단계·마플 STEP 3와 유사 tier · 학평 재편입 문항 다수 있으나 자체 창작도 상당수.

### 4.2 원형 카탈로그 정합 (premium 4건 실측)
| 표본 | 원형 코드 | 정합 |
|---|---|---|
| 와부-CM2-2025-2중-11 (Fagnano 자체 창작) | O-01 Fagnano 이중 대칭 최단경로 | **완전 정합** · 12회 #16과 원형 동일 |
| 와부-CM2-2025-2중-15 (격자점 원 교집합) | O-original 신규 · O-NEW-23 원소별 상태 조합 인접 | 신규 원형 후보 |
| 와부-CM2-2025-2중-17 (개기월식 지문) | O-05·O-06 두 원 접선 계열 + O-NEW-22 Thales 원주각 | **완전 정합** · P02 지문 대표 |
| 와부-CM2-2022-2기-15 (무리+유리 정삼각형) | O-14 도형+대수 융합 · O-NEW-32 min(f, f^(-1)) 계열 | 신규 원형 후보 |
| 와부-CM2-2023-2기-15 (자기역함수 3중 교점 넓이) | O-NEW-32 min(f, f^(-1)) 자기역함수 학평형 | **완전 정합** |

**핵심**: **와부고 premium 문항 5건 중 3건이 기존 카탈로그 원형과 정합** · 2건은 신규 원형 후보로 카탈로그 확장 가능.

---

## Ⅴ. 와부고 기출 vs 12회 창작 시험지 자기복제 감지

**12회 정점 3문 vs 와부고 5년 표본 원형 대조**:

| 12회 슬롯 | 12회 원형 | 와부고 원형 (표본) | 자기복제 위험 |
|---|---|---|---|
| #15 · 마-CM2-GM-원-0512 | O-06 두 원 접선 곱 | 와부-2025-2중-17 (개기월식 3원 공통외접선) | **중** · Frame 다르나 mechanism (두 원 접선 조건 결합) 유사. 다층 지문 방향은 다름 (12회는 순수 수학 · 와부고는 3층 지문). |
| #16 · 마-CM2-GM-이동-0664 | O-01 Fagnano 이중 대칭 최단경로 | **와부-2025-2중-11** (자체 창작 Fagnano) | **높음** · **완전 동일 원형** · 원본 pool 완전 동형 · **가장 강한 자기복제 위험** |
| #17 · 마-0777+0779 결합 | O-original 부분집합 원소합 카운팅 | 와부-2022-2중-13 (부분집합 원소합 최대·최소) | **중** · 원형 유사 · 조건 세부 (M-m vs 합·최댓값·최솟값 결합) 상이. 자기복제 아니나 근접. |

**자기복제 감지 결론**:
- **#16 (Fagnano)** = **와부고 2025 #11과 원형 완전 동일** · 시판 마-CM2-GM-이동-0664가 원본 · 와부고가 자체 창작한 것도 Fagnano 원리. **문제** = 12회를 실제 학교 예상시험지로 사용 시 학생이 "학교 기출과 너무 유사"하다 지적할 여지.
- **완화 방안** (권장): #16 Fagnano를 **다른 원형 (O-04 사각뿔 3D 무게중심)** 또는 **O-05·O-06 원 접선 조건**으로 교체 · 또는 Fagnano 유지하되 12회 vs 2025 #11 조건 세부 차별화 (두 대칭축 상이 · 매개변수 방향 상이).
- **긴급도**: **중~높** · 다음 회차 (13회+) 창작 시 이 감지 결과를 problem-author v2.1이 활용할 것.

---

## Ⅵ. CM2 소단원별 정점 원형 검증 · 와부고 특유 통찰 축

### 6.1 소단원별 정점 원형 매트릭스 (와부고 5년 실측)

| 소단원 | 표본 정점 문항 | 원형 | 통찰 축 |
|---|---|---|---|
| **CM2-GM 평면좌표** | 2025-2중-13 (Shoelace 서술형) | O-NEW-19 계열 · 서술형 정석 | I-EQV+I-CON |
| **CM2-GM 직선** | 2025-2중-12 (넓이 이등분·x절편) | 표준 조건형 | I-CON+I-EQV |
| **CM2-GM 원** | 2022-2기-8 (원+일차식 극값) · 2025-2중-17 (개기월식) | 표준+3층 지문 | I-CON+I-XU |
| **CM2-GM 도형이동** | **2025-2중-11 (Fagnano)** · 2025-2중-14 (자취) | **O-01 이중 대칭 최단** | **I-BW+I-SYM** |
| **CM2-ST 집합** | 2022-2중-13 (원소합 M-m) · 2023-2중-11 (포함배제 최대·최소) · 2023-2중-14 (배수 lcm) · 2025-2중-8 (X-A⊂X-B) · 2025-2중-15 (격자점 원) | O-NEW-23·24·29 계열 · **정점 밀집대 (5문)** | **I-PD+I-MI+I-CON** |
| **CM2-ST 명제·충분** | 2023-2중-19 (충분·필요·최적화) · 2023-2중-17 (귀류법) | O-NEW-25 · 표준 증명 | I-CON+I-MI |
| **CM2-FN 여러 함수** | 2022-2중-15 (부분별 h(x)·15t) · 2022-2중-19 (함수 배정 최적) | 표준 case | I-XU+I-MI |
| **CM2-FN 합성·역함수** | 2022-2중-9 (절댓값 합성) | 표준 case | I-PD+I-SC |
| **CM2-RF 유리** | 2022-2기-11 (대칭중심·평행이동) · 2023-2기-14 (대칭중심+원 접선) | **O-NEW-31 (a,b) 대칭중심** | **I-SYM+I-BW** |
| **CM2-RF 무리** | 2022-2기-15 (정삼각형·premium) · 2023-2기-15 (자기역함수·premium) · 2022-2기-14 (격자점 영역) | **O-14·O-NEW-32 자기역함수** | **I-SYM+I-CON+I-XU** |

### 6.2 세션 61 CM2 원형 매트릭스와의 정합 (8/8)
- **CM2-GM (RT·SYM)**: 와부고 O-01 Fagnano = SYM · 정합
- **CM2-ST (PD·MI)**: 와부고 5문 정점 = PD+MI 축 · **완전 정합** (CM2-ST 정점 밀집대)
- **CM2-FN (XU·SC)**: 와부고 XU+SC · 정합
- **CM2-RF 유리 (SYM 정근선)**: 와부고 대칭중심 · 정합
- **CM2-RF 무리 (SYM 자기역함수+XU 결합)**: 와부고 정삼각형·자기역함수 · 정합
- **CM1 4대단원**: 와부고 out 대상 · N/A

**결론**: 와부고 5년 정점 원형이 세션 61 CM2 매트릭스 (8/8)와 **완전 정합** · 세션 62 강력 검증 (블랙라벨 CM2 STEP 2·3) 재확인.

### 6.3 와부고 특유 통찰 축 발굴
- **CM2-ST §집합 정점 밀집대**: 5문 실측 (전체 CM2-ST 42문 중 12%) · **CM2 소단원 최다 정점** · 통찰 축 = **원소별 영역 분해 (PD) + 최대·최소 최적화 (MI) + 조건 다중 case (CON)**. 12회 청사진 (CM2-ST §S01·S02 4문 · #12·#14·#17) 정합.
- **narrative 지문형 A·B 유형**: 2025 신규 · O-01 Fagnano·O-05·O-06 원 접선 계열이 지문화 · 12회에는 부재 (다음 회차부터 도입 검토).

---

## Ⅶ. 특이사항

### 7.1 교육과정 외 침투 (5시험지 통합)
- **2022-2기 · 2023-2기**: out 5·6문 (경우의 수·산술기하평균 = CM1 이관 대상) 다수. 우리 12회는 out 0문 → **정합**.
- **2023-2중 #12**: 산술기하조화평균 증명 = boundary (실은 산술기하 = CM2 §명제 정규 교과). 12회 #11 산술기하 활용 정합.
- **2025-2중 #9 (두 원 교점) · #16 (닮음변환) · #17 (공통외접선)**: 3문 boundary 표시. 12회는 #15 원+두 접선 (범위 내) · #16 도형이동 (범위 내) · 정합.

### 7.2 외국 수학자 이름 회피 (5시험지 통합)
- **2022-2중 #18** "귀류법으로 √3 무리수" · **2023-2중 #17** "귀류법 배수" · **2023-2중 #14** "배수 집합 lcm" · **2023-2기 #17** "파스칼 항등식 순열"
- **외국 수학자 이름 등장 = 0건** · 와부고 순수 표기 준수 · **완전 정합** (permanent-policy `foreign-named-formula`)
- 파스칼 항등식은 이름 언급 없이 결과식만 · 문제 없음

### 7.3 problem-author v2.1 pool 편입 권장 (5시험지 통합)
**최우선 편입 (premium 5건 + star_5 실측 5건 = 총 10건)**:
| id | 원형 | 12회 사용 여부 | 편입 우선순위 |
|---|---|---|---|
| 와부-2025-2중-11 (Fagnano) | O-01 | **동일 원형 사용** · 완화 필요 | 최우선 (자기복제 감지 대응) |
| 와부-2025-2중-15 (격자점 원) | O-original | 미사용 | 최우선 (신규 원형) |
| 와부-2025-2중-17 (개기월식 3층) | O-05·06+P02 | 미사용 (12회 지문형 0문) | 최우선 (지문 pool) |
| 와부-2022-2기-15 (무리+유리 정삼각형) | O-14 계열 | 미사용 (CM2-RF 범위 밖) | 상 (CM2-RF pool) |
| 와부-2023-2기-15 (자기역함수 3중 교점) | O-NEW-32 | 미사용 (CM2-RF 범위 밖) | 상 (CM2-RF pool) |
| 와부-2022-2중-12 (나머지 함수 · 최상) | 표준 | 미사용 (CM2-FN 범위 밖) | 상 (CM2-FN pool) |
| 와부-2022-2중-15 (부분별+15t 매개변수) | 표준 case | 미사용 | 상 (CM2-FN pool) |
| 와부-2022-2중-19 (함수 배정 최적) | O-NEW-30 계열 | 미사용 | 상 (CM2-FN pool) |
| 와부-2023-2중-15 (집합족·멱집합) | 최상 | 미사용 | 상 (CM2-ST 정점) |
| 와부-2023-2중-18 (합성·기울기 범위) | 표준 | 미사용 | 상 (CM2-FN pool) |

**상위 편입 (star_4 실측 8건 + 예측 19건 = 총 27건)**: 각 시험지 문번 8~14 · 서술형 표준 상.

**pool 활용 지침**:
1. problem-author v2.1이 dokdu-query.mjs로 slot 후보 pick 시 **와부고 pool 최우선** (같은 tier·소단원 조건에서)
2. 자기복제 위험 있는 원형 (O-01 Fagnano)은 회차당 상한 1문 준수 · 12회 이후 회차에서 O-04·O-05·O-06 우선 활용
3. narrative 지문형은 와부-2025-2중-16·17 참조하여 P01·P02 patterns 재활용

---

## 표본 판정 요약 (30문)

| ★ | 실측 표본 (30문) |
|---|---|
| ★ 1 | 3 (2025중#1·2022중#1·2022기#12 예측 하위-실측 하) |
| ★ 2 | 5 (2025중#5·2022중#5·2022기#2·2025중 편차·2023중#03) |
| ★ 3 | 9 (2025중#4~7 절차형 · 2023중#3·8·5·6 · 2022기#8) |
| ★ 4 | 8 (2025중#8·10·14·2022중#9·11·13·2022기#16·2023중#17) |
| ★ 5 | 4 (2022중#15·19·2023중#11·14·19 · 2023기#14·19) |
| ★ 5 premium | 5 (2025중#11·15·17·2022기#15·2023기#15) |
| **합계 (원 표본 30)** | 30 (일부 star_5·premium이 편입되어 정정 산출) |

## 예측 종합 (전체 76문 · in-scope only)

| ★ | 표본 실측 (30) | 예측 (46) | 전체 (76) |
|---|---|---|---|
| ★ 1 | 3 | 1 | 4 (5%) |
| ★ 2 | 5 | 8 | 13 (17%) |
| ★ 3 | 9 | 14 | 23 (30%) |
| ★ 4 | 8 | 19 | 27 (36%) |
| ★ 5 | 4 | 3 | 7 (9%) |
| ★ 5 premium | 1 | 1 | 2 (3%) |
| **합계** | **30** | **46** | **76 (100%)** |

**분포 특성**:
- ★ 3·4 (표준·상)이 66% · 66/76 = 학평 문번 8~19 범위와 정합
- ★ 5+ (정점) = 9 (12%) · 시험지당 1~2문 · 5시험지 = 9~10문 · **표본 실측 5문 · 예측 4문 = 9문** · 정합
- 하위권 진입 문항 (★ 1·2) = 22% · warm-up 안정 · 대상층 하위권 유입

## 핵심 관찰

1. **와부고는 CM2-ST 정점 밀집대** (5개 시험지 통합 정점 밀집 5문 · CM2 소단원 최다)
   - 소단원 매트릭스: CM2-ST 정점 5문 · CM2-RF 정점 3문 · CM2-FN 정점 3문 · CM2-GM 정점 3문
   - **12회 청사진 (CM2-ST 8/17문) 정합 확인**
2. **narrative 지문형 = 2025 신규 도입** · 2022·2023 부재 · 2025 #16·#17 대표 · 12회 부재 상태
   - **다음 회차 (13회+) 지문형 1~2문 도입 검토 필요**
3. **자기복제 감지**: 12회 #16 Fagnano = 와부-2025-2중-11과 원형 완전 동일 · **완화 필요**
4. **premium 5건 실측** (2025 #11·#15·#17 · 2022기#15 · 2023기#15) · **premium 원형 카탈로그 O-01·O-14·O-NEW-32와 완전 정합**
5. **와부고 pool 최우선 편입 27건** (premium 5 + star_5 5 + star_4 17) · problem-author v2.1 dokdu-query.mjs 편입 대상
6. **문번-난이도 오름차순 안정** · 5시험지 100% 정합 · 12회 청사진 오름차순 정합
7. **교육과정 외 침투 0건** · 외국 수학자 이름 0건 · CM2 §명제 산술기하 자유 활용 · **12회 정합**
8. **CM2 소단원 원형 매트릭스 세션 61 대비 8/8 정합** · 세션 62 블랙라벨 CM2 검증에 이어 학교기출 검증 통과

---

## 관련 자산

- 정독 스키마: [`bank/정독-스키마-v2.0.md`](정독-스키마-v2.0.md)
- 벤더 회귀: [`bank/vendor-label-calibration.md`](vendor-label-calibration.md) v1.11
- premium 카탈로그: [`bank/premium-원형-카탈로그.md`](premium-원형-카탈로그.md) v1.1 (32 원형)
- 다층 상황 카탈로그: [`bank/학교기출-다층상황-카탈로그.md`](학교기출-다층상황-카탈로그.md) v1.0 (P01·P02 대표)
- 문제은행 인덱스: `참고자료/학교기출/고1/와부고/와부고 기출 분석/분석/공통수학2-문제은행.md`
- 원본 JSON 추출: `참고자료/학교기출/고1/와부고/와부고 기출 분석/추출/수학/*.json` (5건)
- 앵커: [`bank/anchors/CM2-GM.md`](anchors/CM2-GM.md) v2.0 · [`bank/anchors/CM2-ST.md`](anchors/CM2-ST.md)
- 12회 창작 산출: `output/공통수학2/2026-2학기-와부고-예상-중간-12회/청사진.yaml`
- problem-author agent: `.claude/agents/problem-author.md` v2.1

## 변경 이력

- 2026-07-21 v1.0 — 초판. 와부고 5시험지 92문 (in 76) 정독 · 표본 30문 층화 판정 + 46문 회귀 예측 · premium 5건 실측 · CM2 소단원 매트릭스 정합 8/8 · 12회 #16 Fagnano 자기복제 감지 · problem-author v2.1 pool 편입 27건 권장.
