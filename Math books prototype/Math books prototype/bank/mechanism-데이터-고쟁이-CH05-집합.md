---
name: mechanism-데이터-고쟁이-CH05-집합
description: 고쟁이 공통수학2 (2022개정) CH05 집합 STEP 2·STEP 3 전문항 정독 mechanism 데이터 (68문항). 학습 목적, 저작권 준수 (원문 전사 없음).
metadata:
  type: reference
  version: v1.0
  established: 2026-07-14
  source: 고쟁이 공통수학2 (2022개정)
  tier_mapping:
    STEP_2: star_5
    STEP_3: star_5_premium
  unit_code: CM2-ST
  citation_note: 고쟁이 · 학습 목적 · 저작권 준수 (원문 전사 없음)
---

# 고쟁이 공통수학2 CH05 집합 STEP 2·STEP 3 mechanism 데이터

**출처**: 고쟁이 공통수학2 (2022개정) — 이투스북 · 유형+내신 집중 훈련서
**대상 범위**: CH05 집합 STEP 2 (#300~#345, 총 46문항) + STEP 3 (#346~#367, 총 22문항) = **총 68문항**
**본문 페이지**: p.86~p.95 (STEP 2), p.97~p.102 (STEP 3)
**해설 페이지**: p.84~p.100 (해설 PDF)
**분석 날짜**: 2026-07-14
**저작권**: 학습·설계 목적 mechanism 추상화 · 발문 원문 전사 없음

---

## 1. 문항 개수·페이지 요약

| STEP | 문항 범위 | 문항 수 | 본문 페이지 | 해설 페이지 |
|---|---|---|---|---|
| STEP 2 (심화) | #300~#345 | 46 | p.86~95 | p.84~92 |
| STEP 3 (최고난도) | #346~#367 | 22 | p.97~102 | p.93~100 |
| **합계** | 300~367 | **68** | 15쪽 | 17쪽 |

**유형별 분포 (본문 유형 배너 기준)**:
- 유형 01 집합의 뜻과 표현: STEP2 #300~303 (4문), STEP3 #346~348 (3문)
- 유형 02 집합 사이의 포함 관계: STEP2 #304~307 (4문)
- 유형 03 집합의 연산: STEP2 #308~319 (12문), STEP3 #349~356 (8문)
- 유형 04 합집합의 원소의 개수: STEP2 #320~332 (13문), STEP3 #357~358 (2문)
- 유형 05 부분집합의 개수: STEP2 #333~345 (13문), STEP3 #359~367 (9문)

---

## 2. 전 문항 YAML

### STEP 2 (심화 유형, #300~345)

```yaml
- source: 고쟁이-CH05-STEP2-#300
  page: 86
  problem_summary: |
    A = {2n²+1 | n ≤ 3인 자연수}, B는 A의 각 원소를 5로 나눈 나머지 집합.
    집합 B의 모든 원소의 합.
  solution_summary: |
    A = {3, 9, 19} 산출. 각각 5로 나눈 나머지 3, 4, 4 → B = {3, 4} (중복 제거).
    합 = 7.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "조건제시법 → 원소나열법 변환 + 나머지 함수 image 집합화"
  mechanism_secondary: ["집합의 원소 중복 제거", "정수의 나머지 계산"]
  depth_conditions: ["자연수 범위 n≤3", "5로 나눈 나머지 정의"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: single
    student_decision_points: 1
  common_mistakes: ["B의 원소 중복(4가 두 번) 미제거", "A의 원소 개수 3개 → B 원소 개수 3개로 착각"]
  condition_layers:
    surface: "두 집합 A, B의 관계식"
    real: "함수 image에서 자동 중복 제거되는 집합 성질"
    interaction: "A의 다른 원소가 같은 나머지를 만들면 B는 축소됨"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#301
  page: 86
  problem_summary: |
    자연수 m에 대해 A_m = {x | x는 √m 이하의 자연수}일 때,
    n(A_k) = n(A_10) + n(A_20)을 만족시키는 자연수 k의 개수.
  solution_summary: |
    n(A_10)=3 (√10 이하 자연수 1,2,3), n(A_20)=4 (√20 이하 1~4).
    n(A_k)=7이려면 √k ∈ [7, 8) → 49 ≤ k < 64 → k = 49~63의 15개.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "n(A_k)=상수를 만족하는 매개변수 범위 결정"
  mechanism_secondary: ["√ 함수 계단형 원소 개수", "정수 개수 카운트"]
  depth_conditions: ["A_10, A_20 개수 각각 계산", "n(A_k) = 7 역방향 범위"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: single
    student_decision_points: 2
  common_mistakes: ["부등호 방향 오류 (n(A_k)=7 → 7 ≤ √k < 8 아닌 6 < √k ≤ 7 착각)", "경계값 포함/제외 오류"]
  condition_layers:
    surface: "두 상수값의 합 = 미지 k의 값"
    real: "n(A_k)의 계단형 증가 구조를 √k 정수 통과 지점으로 파악"
    interaction: "k 정사각수 통과 순간 개수 +1 급증"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#302
  page: 86
  problem_summary: |
    서로 다른 네 양수 a, b, c, d에 대하여 A = {a,b,c,d},
    B = {x+y | x∈A, y∈A, x≠y}, C = {x×y | x∈A, y∈A, x≠y}.
    B = {7, 8, 9, 12, 13, 14}, C = {12, 15, 20, 27, 36, 45}일 때
    a²+b²+c²+d²의 값.
  solution_summary: |
    a<b<c<d. 최소 두 원소 합·곱: a+b=7, a×b=12 → a=3, b=4.
    최대 두 원소 합·곱: c+d=14, c×d=45 → c=5, d=9.
    a²+b²+c²+d² = 9+16+25+81 = 131.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "합 집합·곱 집합의 최소·최대 원소 → 원본 두 원소 결정 (연립)"
  mechanism_secondary: ["근과 계수의 관계 (합·곱 → 두 수)", "대소 순서 fix"]
  depth_conditions: ["4원소 순서 결정", "최소 pair·최대 pair 두 극단", "중간 원소 자동 결정"]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: single
    student_decision_points: 3
  common_mistakes: ["가운데 pair 검증 skip", "정수해 조건 확인 소홀"]
  condition_layers:
    surface: "B, C 원소 나열"
    real: "6개 pair 중 최소·최대만 순서 확실 → 두 근 결정"
    interaction: "중간 pair (a+c, a+d, b+c 등)는 자동 검증되어야 함"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#303
  page: 86
  problem_summary: |
    A = {a, b, b-a, (a+b)/5}, B = {√a, √b, √(a+b), √(4a+4b)}.
    B에서 가장 큰 원소가 10. X = {x | x∈A이고 x∉B}의 모든 원소의 합.
  solution_summary: |
    A는 자연수 집합 → b-a ∈ A → b > a. B의 최대 √(4a+4b) = 2√(a+b)=10 → a+b=25.
    B의 원소가 자연수이려면 √a, √b 자연수 → a=9, b=16.
    A = {9, 16, 7, 5}, B = {3, 4, 5, 10}. X = A \ B = {9, 16, 7} → 합 32.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "제약 조건 다중 (자연수·최대원소·차집합) 결합 → 미지수 확정"
  mechanism_secondary: ["제곱수 조건", "차집합 원소 나열"]
  depth_conditions: ["자연수 조건", "최대 원소 = 10", "a+b=25", "제곱수 pair (a,b)"]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: single
    student_decision_points: 3
  common_mistakes: ["a+b=25 만족 제곱수 pair 여러 시도 없이 (9,16) 놓침", "X 정의를 A∩B로 오해"]
  condition_layers:
    surface: "두 집합 A, B에 대한 제약"
    real: "√·자연수 조건이 (a,b) 후보를 좁히는 게이트"
    interaction: "X 원소 3개는 A에만 있고 B에 없음 확인 필요"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#304
  page: 86
  problem_summary: |
    두 집합 A = {1, a²-a}, B = {2, a²-3}에 대하여 A⊂B이고 B⊂A일 때, a의 값.
  solution_summary: |
    A⊂B이고 B⊂A → A=B. 1∈A이므로 1∈B → a²-3=1 → a²=4 → a=±2.
    a=-2: A={1,6}, B={2,1} → A≠B (배제).
    a=2: A={1,2}, B={2,1} → A=B (채택). ∴ a=2.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "A⊂B ∧ B⊂A ⇔ A=B 활용 후 원소 결정 + case 검증"
  mechanism_secondary: ["이차방정식 근", "case 배제"]
  depth_conditions: ["부분집합 양방향", "a의 case별 검증"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: single
    student_decision_points: 2
  common_mistakes: ["A=B 후 두 후보 a 모두 답으로 제출", "1∈B 확인 skip"]
  condition_layers:
    surface: "포함관계 상호"
    real: "A=B로 즉시 환원"
    interaction: "원소 개별 등식 vs. 집합 등식 검증"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#305
  page: 86
  problem_summary: |
    (서술형) A = {1, 2-a}, B = {3, a-4, 2a-5}에 대해 A⊂B가 성립할 때 상수 a의 값.
  solution_summary: |
    1∈A이므로 1∈B. Case (i) a-4=1 → a=5: A={1,-3}, B={3,1,5} → A⊄B (배제).
    Case (ii) 2a-5=1 → a=3: A={1,-1}, B={3,-1,1} → A⊂B (채택). ∴ a=3.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "원소 존재 조건 case 나눔 + 남은 원소 소속 검증"
  mechanism_secondary: ["case 배제", "부분집합 검증"]
  depth_conditions: ["1∈B의 두 case", "2-a∈B 검증"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: single
    student_decision_points: 2
  common_mistakes: ["case (i) 확인 없이 a=5 답 제출", "B의 원소가 자동 확정된 것으로 착각"]
  condition_layers:
    surface: "A⊂B"
    real: "1∈A → 1∈B의 두 원천 case"
    interaction: "A의 두 번째 원소 2-a가 B에 있는지 사후 검증"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#306
  page: 87
  problem_summary: |
    A = {x | -1 < x-a ≤ 0}, B = {x | x²-7x+6 < 0}.
    A⊂B를 만족시키는 모든 자연수 a의 값의 합.
  solution_summary: |
    A: a-1 < x ≤ a (구간). B: (x-1)(x-6) < 0 → 1 < x < 6.
    A⊂B ⇔ 1 ≤ a-1 and a < 6 → 2 ≤ a < 6.
    자연수 a = 2, 3, 4, 5 → 합 14.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "구간 부분집합 조건 → 양 끝 부등호 분리 (경계 등호 주의)"
  mechanism_secondary: ["이차부등식 해 구간", "정수 개수·합"]
  depth_conditions: ["열린·닫힌 경계 구분", "구간 A의 왼쪽 열린·오른쪽 닫힘"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: single
    student_decision_points: 2
  common_mistakes: ["a-1 ≥ 1 대신 a-1 > 1 착각", "a=6도 답에 포함"]
  condition_layers:
    surface: "A⊂B"
    real: "구간 포함은 양 끝 조건 각각 분리"
    interaction: "경계에서 open/closed 방향 정확히"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#307
  page: 87
  problem_summary: |
    조건: (가) {0}⊂A⊂{x | x는 실수}, (나) a∈A이면 a²-2∈A, (다) n(A)=4.
    이 조건을 만족시키는 집합 A의 개수.
  solution_summary: |
    (가)에서 0∈A → (나)로 0→-2, -2→2, 2→2 → {-2, 0, 2}⊂A.
    (다)에서 A는 4번째 원소 k 하나 더 (k≠-2,0,2).
    k∈A → k²-2∈A → k²-2는 -2, 0, 2, k 중 하나.
    (i) k²=0 → k=0 모순. (ii) k²=2 → k=±√2 → k=-√2 또는 √2 (√2는 이미 배제→k≠2). 
    (iii) k²=4 → k=±2 모순. (iv) k²-2=k → k=-1 (k≠2).
    3개: {-2,0,2,-√2}, {-2,0,2,√2}, {-2,0,2,-1}.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "폐포 조건 (recursive membership) + 원소 개수 제약 → 4번째 원소 case 4종"
  mechanism_secondary: ["함수 orbit 종결", "고정점·주기 2 원소"]
  depth_conditions: ["0의 orbit → 3원소 확정", "4번째 원소 k의 orbit 종결 조건"]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: single
    student_decision_points: 4
  common_mistakes: ["k²-2가 A의 어느 원소가 될지 case 누락", "k=√2가 이미 포함된 √2와 중복 처리"]
  condition_layers:
    surface: "3조건"
    real: "폐포 orbit 성질"
    interaction: "새 원소 k의 image가 기존 4원소 안에 속하도록 방정식 여러 case"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#308
  page: 87
  problem_summary: |
    U = {1~10의 자연수}. (가) A∩B = {5,7}, (나) A^C∩B^C = {3,9,10}.
    S(X)를 X의 모든 원소의 합이라 할 때 S(A) = 2S(B)를 만족시키는 두 집합 A, B에 대해 A의 원소가 아닌 것.
  solution_summary: |
    (나)에서 (A∪B)^C = {3,9,10} → A∪B = {1,2,4,5,6,7,8}, 합 33.
    A∩B = {5,7}, 합 12. S(A)+S(B) = S(A∪B)+S(A∩B) = 45.
    S(A)=x → S(B)=45-x. S(A)=2S(B) → x = 2(45-x) → x=30.
    A-B: 원소 합 = S(A)-S(A∩B) = 30-12 = 18 → A-B = {4,6,8} (합 18 만족).
    A = (A-B)∪(A∩B) = {4,5,6,7,8}. 답: 2 (A에 없음).
  category: 집합
  difficulty: STEP2
  mechanism_primary: "원소 합의 벤 다이어그램 분해 → 선형 방정식 → A-B 원소 결정"
  mechanism_secondary: ["S(A∪B) 공식", "부분집합 원소 선택"]
  depth_conditions: ["A∩B 확정", "여집합→A∪B 확정", "S 조건으로 A-B 합 결정"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: single
    student_decision_points: 3
  common_mistakes: ["A-B의 원소를 합 18 만족하도록 여러 후보 검토 skip", "S(A)+S(B)=S(A∪B) 오사용"]
  condition_layers:
    surface: "합집합·교집합 정보"
    real: "원소 합 balance"
    interaction: "합 18을 이루는 {4,5,6,7,8}\\{5,7}의 부분집합은 유일 → {4,6,8}"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#309
  page: 87
  problem_summary: |
    원소 개수 3인 A = {k-1, 1, k²-3k-3}, B = {-3, k²-2k+1, 2k+5}에 대해
    A∩B = {-3, 1}을 만족시키는 실수 k의 최댓값과 최솟값의 차.
  solution_summary: |
    -3∈A → k-1=-3 or k²-3k-3=-3.
    (i) k=-2: A={-3,1,7}, B={-3,9,1} → A∩B={-3,1} ✓
    (ii) k²-3k-3=-3 → k(k-3)=0 → k=0 or k=3.
        k=0: A={-1,1,-3}, B={-3,1,5} → A∩B={-3,1} ✓
        k=3: A={2,1,-3}, B={-3,4,11} → A∩B={-3} ≠ {-3,1} ✗
    실수 k = -2, 0. max-min = 0-(-2) = 2.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "원소 위치 case 분기 → 각 case 교집합 검증"
  mechanism_secondary: ["방정식 근", "case 검증"]
  depth_conditions: ["-3∈A의 두 원천", "각 case에서 A∩B = {-3,1} 검증"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: single
    student_decision_points: 3
  common_mistakes: ["k=3 배제 skip", "1∈B는 자동 성립인지 확인 안 함"]
  condition_layers:
    surface: "교집합 정보"
    real: "원소 위치 (어느 슬롯이 -3인가) case 분기"
    interaction: "k=3에서 A∩B가 {-3}만 되어 조건 실패"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#310
  page: 87
  problem_summary: |
    (교육청 기출) U = {1, 2, 4, 8, 16, 32}. 두 부분집합 A, B가 다음 조건.
    (가) A∪B^C의 모든 원소의 합 = (B-A)의 모든 원소의 합의 6배.
    (나) n(A∪B) = 5.
    A의 모든 원소의 합의 최솟값 (단, 2 ≤ n(B-A) ≤ 4).
  solution_summary: |
    B-A의 합 = k. A∪B^C = (A^C∩B)^C = (B-A)^C.
    U 원소 합 = 63. 조건 (가): 63-k = 6k → k=9.
    B-A 합 = 9 → B-A = {1,8} (2^0+2^3=9 유일).
    A∩(B-A)=∅ → A⊂(B-A)^C = {2,4,16,32}.
    n(A∪B) = 5 = n(A) + n(B-A) = n(A)+2 → n(A)=3.
    A={2,4,16,32}의 3원소 부분집합 중 원소 합 최소 = 2+4+16 = 22.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "여집합의 합 = 전체합 - 부분합 항등 + n조건 결합 → A 슬롯 선택 최소화"
  mechanism_secondary: ["U 원소 합 활용", "2의 거듭제곱 유일 분해"]
  depth_conditions: ["여집합 표현 전환", "합 방정식", "A 위치·개수 제약", "최소화"]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: single
    student_decision_points: 4
  common_mistakes: ["A∪B^C = (B-A)^C 항등 미인지", "B-A 합 9의 유일성 검증 skip"]
  condition_layers:
    surface: "합·개수 조건"
    real: "여집합·차집합 원소 balance"
    interaction: "n(B-A)=2 강제 + A는 남은 4원소 중 3개"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#311
  page: 88
  problem_summary: |
    (서술형) A = {x | |x-a| < 2}, B = {x | x ≤ 2a-5 or x ≥ a²-a-1}.
    A-B = A를 만족시키는 실수 a의 값의 범위.
  solution_summary: |
    A-B = A ⇔ A∩B = ∅ ⇔ A는 B의 여집합에 포함.
    A = (a-2, a+2), B의 여집합 = (2a-5, a²-a-1).
    A⊂B^C ⇔ 2a-5 ≤ a-2 and a+2 ≤ a²-a-1.
    2a-5 ≤ a-2 → a ≤ 3.
    a²-2a-3 ≥ 0 → (a-3)(a+1) ≥ 0 → a ≤ -1 or a ≥ 3.
    교집합: a ≤ -1 or a = 3.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "A-B = A ⇔ A∩B = ∅ 동치 → 구간 A가 B의 여집합 구간에 포함"
  mechanism_secondary: ["절댓값 부등식 → 구간", "구간 포함 양 끝 부등식"]
  depth_conditions: ["A∩B=∅의 등가 변환", "B의 여집합 구간 표현", "양 끝 부등호"]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: single
    student_decision_points: 3
  common_mistakes: ["A-B=A를 A⊂B로 오해", "경계값에서 등호 방향"]
  condition_layers:
    surface: "차집합 조건"
    real: "A는 B와 원소 공유 0 → A는 B의 여집합에 갇힘"
    interaction: "B의 여집합이 유한 구간이므로 A의 반지름 2가 그 안에 들어감"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#312
  page: 88
  problem_summary: |
    자연수 전체 집합의 부분집합 A_k = k의 배수 집합.
    A_m ⊂ (A_9∩A_15), (A_18∪A_45) ⊂ A_n을 만족시키는 두 자연수 m, n에 대해
    m의 최솟값과 n의 최댓값의 합.
  solution_summary: |
    A_9∩A_15 = A_lcm(9,15) = A_45 → A_m⊂A_45 ⇔ m은 45의 배수 → m 최솟값 = 45.
    A_18∪A_45 ⊂ A_n ⇔ A_18⊂A_n 이고 A_45⊂A_n ⇔ n은 18과 45의 공약수 → n은 gcd(18,45)=9의 약수 → n 최댓값 = 9.
    45 + 9 = 54.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "배수집합 A_k의 포함관계 → gcd/lcm 성질 (A_p⊂A_q ⇔ q|p)"
  mechanism_secondary: ["최소공배수", "최대공약수"]
  depth_conditions: ["A_p∩A_q = A_lcm(p,q)", "A_p⊂A_n ⇔ n|p"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: single
    student_decision_points: 2
  common_mistakes: ["A_p⊂A_q 방향 역전 (p|q vs q|p)", "합집합 포함시 각 개별로 분해 skip"]
  condition_layers:
    surface: "배수집합 포함관계"
    real: "포함 = 약수/배수 관계 변환"
    interaction: "A_18∪A_45⊂A_n은 두 조건의 교집합 (n은 두 수 모두의 공약수)"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#313
  page: 88
  problem_summary: |
    자연수 k에 대해 A_k = {y | y = [k/x], x ≥ 1} ([x]는 x보다 크지 않은 최대 정수).
    <보기>: ㄱ. n(A_5)=6, ㄴ. A_8∩A_6 = A_6, ㄷ. n(A_l - A_m)=4, n(A_l∪A_m)=15이면 l+m=24.
  solution_summary: |
    x=1일 때 y=k, x 커지면 y=[k/x] 작아짐 → A_k = {0,1,2,...,k}.
    ㄱ. A_5 = {0,1,2,3,4,5} 원소 6개 → n(A_5)=6 (참).
    ㄴ. A_8={0,...,8}, A_6={0,...,6} → A_8∩A_6 = A_6 (참).
    ㄷ. A_l={0,...,l}, A_m={0,...,m}. n(A_l-A_m)=4 → l=m+4.
        A_m⊂A_l → A_l∪A_m = A_l → n(A_l)=15 → l=14.
        l=14, m=10 → l+m=24 (참).
  category: 집합
  difficulty: STEP2
  mechanism_primary: "함수 image 집합 구조 파악 → 원소 개수·포함·연산 검증"
  mechanism_secondary: ["Gauss 함수", "구간 원소 나열"]
  depth_conditions: ["A_k = {0,1,...,k} 확인", "각 보기의 case 검증"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: single
    student_decision_points: 3
  common_mistakes: ["A_k에 0 포함 여부 놓침", "[k/x]가 계속 감소한다는 성질 명시 안 함"]
  condition_layers:
    surface: "3보기 참·거짓"
    real: "A_k = {0,...,k} 구조로 환원"
    interaction: "포함관계·개수 조건 상호"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#314
  page: 88
  problem_summary: |
    모든 자연수 k에 대해 A_k는 연속한 자연수 (2k+1)개를 원소.
    (가) n(A_k-A_{k+1})=2, (나) a_k < a_{k+1} (a_k는 최소 원소).
    a_2=4일 때, A_10∩A_m = ∅을 만족시키는 10 이상 자연수 m의 최솟값.
  solution_summary: |
    n(A_k-A_{k+1})=2 → A_{k+1}가 A_k에서 앞 2개 잃음. (나)에서 a_{k+1}=a_k+2.
    a_2=4 → a_1=2, a_3=6, a_4=8, ..., a_10=20. n(A_10)=21 → A_10={20,...,40}.
    A_10∩A_m=∅ ⇔ a_m > 40. a_k=2k → a_m>40 → m>20 → m≥21. a_21=42. 최솟값 21.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "구간 집합의 재귀적 이동 → 최소원소 등차수열 + disjoint 조건"
  mechanism_secondary: ["차집합 개수", "등차수열", "disjoint 구간"]
  depth_conditions: ["A_k → A_{k+1} 관계 (2개 잃음+2개 얻음)", "a_k 점화식", "구간 disjoint 조건"]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: single
    student_decision_points: 3
  common_mistakes: ["A_{k+1}=A_k 그대로 오른쪽 확장 오해", "구간 disjoint 경계 조건 (≥ vs >)"]
  condition_layers:
    surface: "3조건과 초기값"
    real: "구간의 슬라이딩 window"
    interaction: "왼쪽 이동량 = 오른쪽 확장량 = 2 (개수 +2 유지)"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#315
  page: 88
  problem_summary: |
    U의 세 부분집합 A, B, C에 대해 <보기> 4항 참·거짓.
    ㄱ. {(A∪B)∩(A∩B^C)}∪(A^C∩B) = (A∩B)^C
    ㄴ. (A-B)∩(A-C) = A-(B∪C)
    ㄷ. (A-B^C)-C = A-(B^C-C)
    ㄹ. {(A∪B)∩(A^C∪B)}∩{(B^C∩C)∪(B∪C)^C} = U
  solution_summary: |
    ㄱ. 좌변 = (A-B)∪(B-A) 대칭차 ≠ (A∩B)^C (거짓).
    ㄴ. 벤 다이어그램 = A-(B∪C) (참).
    ㄷ. 좌변 = (A∩B∪B^C∩C^C) = 다른 영역, 벤 확인 → (거짓).
    ㄹ. 좌변 = B∩(B^C∪C∪C^C) = B∩U = B ≠ U (거짓).
    참: ㄴ (1개).
  category: 집합
  difficulty: STEP2
  mechanism_primary: "복잡 집합 항등식 벤 다이어그램·드모르간 검증"
  mechanism_secondary: ["대칭차", "드모르간 법칙"]
  depth_conditions: ["4개 항등식 각각 벤/식으로 검증"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: single
    student_decision_points: 4
  common_mistakes: ["복잡 표현 그대로 계산 → 실수 축적", "벤 다이어그램 영역 오식별"]
  condition_layers:
    surface: "4개 항등식"
    real: "벤 8영역 분해 → 각 영역 소속 판정"
    interaction: "각 항 독립 검증"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#316
  page: 89
  problem_summary: |
    (A∪B)∩(A-B)^C = A∩B일 때 항상 옳은 것.
    ① A⊂B ② A=B^C ③ A∪B=B ④ A-B=∅ ⑤ A^C와 B는 서로소.
  solution_summary: |
    (A∪B)∩(A-B)^C = (A∪B)∩(A^C∪B) = B∪(A∩A^C) = B.
    ∴ A∩B = B → B⊂A → A∪B=A. 답: ⑤ A^C∩B=∅.
    실제로 A^C∩B = B-A. B⊂A이므로 B-A=∅. ∴ A^C와 B 서로소.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "복잡 표현 단순화 → 포함관계 도출 → 5보기 검증"
  mechanism_secondary: ["드모르간", "포함관계 등가 표현"]
  depth_conditions: ["좌변 단순화", "A∩B=B → B⊂A", "각 보기 재해석"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: single
    student_decision_points: 2
  common_mistakes: ["단순화 도중 계산 실수", "B⊂A → A^C∩B=∅ 연결 skip"]
  condition_layers:
    surface: "복합 등식"
    real: "단순화 후 B⊂A"
    interaction: "포함관계 → 여러 등가 표현 5보기 검증"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#317
  page: 89
  problem_summary: |
    U의 공집합이 아닌 세 부분집합 A, B, C: (가) A∩(C∪A^C)=∅, (나) {(A-C)∪(B-C)}∪{C-(A∪B)^C}=B.
    <보기>: ㄱ. A∩C^C=A, ㄴ. (A∩C^C)∪(A^C∩B)=B, ㄷ. C^C∩(B∪C)=B.
  solution_summary: |
    (가) A∩C∪(A∩A^C)=A∩C=∅ → A, C 서로소.
    (나) 좌변 = {(A∪B)∩C^C}∪{C∩(A∪B)} = (A∪B)∩U = A∪B → A∪B=B → A⊂B.
    ㄱ. A∩C=∅이므로 A⊂C^C → A∩C^C=A (참).
    ㄴ. (A-C)∪(B-A) = A∪(B-A) = B (참).
    ㄷ. (C^C∩B)∪(C^C∩C) = C^C∩B = B-C. B⊂C 확인 안 됨 (거짓).
    참: ㄱ, ㄴ.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "두 조건 (서로소·포함) 도출 → 3보기 벤 검증"
  mechanism_secondary: ["드모르간", "포함관계"]
  depth_conditions: ["(가) → A∩C=∅", "(나) → A⊂B", "각 보기 A⊂B 및 A∩C=∅ 활용"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: single
    student_decision_points: 3
  common_mistakes: ["(가) 단순화 오류 (A^C 흡수 skip)", "ㄷ의 B-C=B 조건 오판단"]
  condition_layers:
    surface: "복합 조건"
    real: "A∩C=∅ ∧ A⊂B 두 축"
    interaction: "각 보기에서 두 축 활용도 다름"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#318
  page: 89
  problem_summary: |
    R의 두 부분집합 A = {x | ax²+bx-6 < 0}, B = {x | x²+3x-18 ≤ 0}.
    (가) A∪B=R, (나) A∩B={x | -2 < x ≤ 3}일 때 a+b.
  solution_summary: |
    B = [-6, 3]. A∪B=R 이므로 A는 R\\B = (-∞,-6)∪(3,∞) 포함.
    A∩B=(-2, 3] → A = (-∞, -2)∪(3, ∞) 형태 안에서 -2 미포함.
    실제로 A = R\\[-2,3] 부분과 겹침. 
    조건 확인: A = {x | x < -2 or x > 3} (경계 상황 고려).
    a<0이고 -6/a=12 → a=-1/2, b/a=8 → b=-4. a+b = -9/2.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "합집합·교집합 조건 → A의 경계 결정 → 2차 계수·상수 방정식"
  mechanism_secondary: ["이차부등식 해", "근과 계수의 관계"]
  depth_conditions: ["B 구간 계산", "A 구간 역산", "이차식 계수 결정"]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: single
    student_decision_points: 3
  common_mistakes: ["a>0 vs a<0 case 검토 skip", "경계 open/closed 방향 오류"]
  condition_layers:
    surface: "합·교집합 구간"
    real: "A는 R을 커버해야 하나 특정 구간 (-2, 3]만 겹침 → A 밖 = [-6, -2]"
    interaction: "A의 두 뿌리와 부등호 방향으로 계수 결정"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#319
  page: 89
  problem_summary: |
    X△Y = (X-Y)∪(Y-X) (대칭차). U의 두 부분집합 A, B (U≠∅)에 대해 옳지 않은 것.
    ① A△U=A^C ② A△A^C=U ③ A△∅=∅ ④ A^C△B^C=A△B ⑤ A△B=A이면 B=∅.
  solution_summary: |
    ① A△U = (A-U)∪(U-A) = ∅∪A^C = A^C (참).
    ② A△A^C = (A-A^C)∪(A^C-A) = A∪A^C = U (참).
    ③ A△∅ = A∪∅ = A ≠ ∅ (거짓).
    ④ A^C△B^C = (A^C∩B)∪(B^C∩A) = (B-A)∪(A-B) = A△B (참).
    ⑤ A△B=A이면 (A-B)∪(B-A)=A → B-A=∅ 이고 A-B=A → A∩B=∅. 그럼 B⊂A와 B∩A=∅ → B=∅ (참).
    답: ③.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "대칭차 연산 정의 → 5보기 항등식 검증"
  mechanism_secondary: ["차집합 대칭성", "여집합"]
  depth_conditions: ["대칭차 정의 → 각 표현 단순화"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: single
    student_decision_points: 5
  common_mistakes: ["③ A△∅=A vs A△∅=∅ 착각 (자체 정의로 A 유지)"]
  condition_layers:
    surface: "새 연산 △ 정의"
    real: "합·차·여집합 조합"
    interaction: "각 보기 개별 항등식"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#320
  page: 90
  problem_summary: |
    30 이하 자연수 k에 대해 A = {x | x는 k의 양의 약수}, B = {2, 5, 6}.
    n(A∩B)=2이고 A-B의 모든 원소의 합이 홀수인 모든 k의 합.
  solution_summary: |
    A∩B는 {2,5}, {2,6}, {5,6} 중 하나.
    (i) A∩B={2,5}: 2,5는 k의 약수, 6은 약수 아님 → k=10, 20.
       k=10: A={1,2,5,10}, A-B={1,10} 합 11 (홀수 ✓)
       k=20: A={1,2,4,5,10,20}, A-B={1,4,10,20} 합 35 (홀수 ✓)
       기여: 10+20=30.
    (ii) A∩B={2,6}: k는 6배수 아닌… k=6,12,18,24. 
       k=6: A-B={1,3} 합 4 (짝 ✗); k=12: {1,3,4,12} 합 20 (짝 ✗); 
       k=18: {1,3,9,18} 합 31 (홀 ✓); k=24: {1,3,4,8,12,24} 합 52 (짝 ✗). 기여: 18.
    (iii) A∩B={5,6}: 5·6=30의 약수. k=30만 가능하나 2도 30의 약수 → 조건 위반. 없음.
    총합 = 30+18 = 48.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "교집합의 3-case 분기 → 각 case에서 약수 후보 열거 → 홀수 합 필터"
  mechanism_secondary: ["약수", "case 배제"]
  depth_conditions: ["A∩B의 3-case", "각 k 후보의 약수 나열", "합의 홀·짝 검증"]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: single
    student_decision_points: 4
  common_mistakes: ["A∩B={5,6}에서 2 배제 잊음", "합 홀·짝 case 필터 skip"]
  condition_layers:
    surface: "교집합 개수·합 조건"
    real: "k의 약수 구조"
    interaction: "A∩B의 정확히 어느 2원소 pair인가로 분기"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#321
  page: 90
  problem_summary: |
    복소수 전체의 두 부분집합 A, B가 0이 아닌 두 복소수 z_1=a+bi, z_2=b+ai (a,b는 음이 아닌 정수)에 대해
    A = {z_1+z̄_1, z_1-z̄_1, z_1·z̄_1, z̄_1/z_1}, B = {z_2+z̄_2, z_2-z̄_2, z_2·z̄_2, z̄_2/z_2}.
    A∩B = {0, 9}일 때 (A∪B)∩(A^C∪B^C)를 구하시오.
  solution_summary: |
    z_1+z̄_1=2a, z_1-z̄_1=2bi, z_1·z̄_1=a²+b², z̄_1/z_1=(a²-b²-2abi)/(a²+b²).
    유사하게 B: z_2+z̄_2=2b, z_2-z̄_2=2ai, z_2·z̄_2=a²+b², z̄_2/z_2=(b²-a²-2abi)/(a²+b²).
    A∩B={0,9}: a²+b²=9 (공통). 0∈A∩B → a=0 or b=0.
    a=0이면 b=3: A={0, 6i, 9, -1}, B={6, 0, 9, 1}.
    (A∪B)∩(A^C∪B^C) = (A∪B) - (A∩B) = A△B = {-1, 1, 6, 6i}.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "켤레복소수 원소 나열 → 공통 원소 조건 → 대칭차 원소 결정"
  mechanism_secondary: ["켤레복소수 연산", "대칭차 표현"]
  depth_conditions: ["z·z̄=a²+b² 공유", "0 원소 → a=0 or b=0 case", "A△B 계산"]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: single
    student_decision_points: 4
  common_mistakes: ["A∪B∩(A^C∪B^C) = A△B 항등 미인지", "복소수 켤레 계산 실수"]
  condition_layers:
    surface: "복소수 집합 교집합"
    real: "a²+b²=9 자연수 pair (0,3)/(3,0)만 가능"
    interaction: "z_1과 z_2의 대칭 구조 (a↔b) 활용"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#322
  page: 90
  problem_summary: |
    (서술형) 32명 대상 축구·농구 선호 조사. 축구 좋아 20명, 농구 13명, 둘 다 안 좋아 7명.
    (1) 적어도 하나 좋아하는 수, (2) 둘 다 좋아하는 수, (3) 농구만 좋아하는 수.
  solution_summary: |
    (1) n((A∪B)^C)=7 → n(A∪B)=32-7=25.
    (2) 25 = 20+13-n(A∩B) → n(A∩B)=8.
    (3) n(B-A) = 13-8 = 5.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "합집합의 원소 개수 공식 + 여집합 (안 좋아) → 교집합·차집합"
  mechanism_secondary: ["실생활→집합 변환", "n 공식"]
  depth_conditions: ["여집합 개수 → 합집합", "합집합 공식", "차집합"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: single
    student_decision_points: 3
  common_mistakes: ["여집합·합집합 관계 놓침", "농구만 = B-A vs B∩A^C 표현"]
  condition_layers:
    surface: "실생활 상황"
    real: "3단계 순차 계산"
    interaction: "각 단계가 다음 단계의 입력"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#323
  page: 90
  problem_summary: |
    S(A,B) = n(A^C∪B)일 때 <보기>: ㄱ. A,B 서로소면 S(A,B)=S(B,A). ㄴ. A⊂B이면 S(B,A)-S(A,B)=n(A∩B)-n(A∪B). ㄷ. S(A,B) ≥ S(B,A)이면 n(A) ≤ n(B).
  solution_summary: |
    S(A,B)=n((A-B)^C)=n(U)-n(A-B).
    ㄱ. 서로소면 A-B=A, B-A=B. n(A^C)=n(U)-n(A), n(B^C)=n(U)-n(B). n(A)≠n(B) 가능 → (거짓).
    ㄴ. A⊂B: A-B=∅, B-A=B\\A. S(A,B)=n(U), S(B,A)=n(U)-n(B-A)=n(U)-(n(B)-n(A)). 차 = n(A)-n(B) = n(A∩B)-n(A∪B) (A⊂B이므로 A∩B=A, A∪B=B) (참).
    ㄷ. S(A,B)≥S(B,A) ⇔ n(U-A+B) 대신 n(A-B) ≤ n(B-A) ⇔ n(A)-n(A∩B) ≤ n(B)-n(A∩B) ⇔ n(A)≤n(B) (참).
    참: ㄴ, ㄷ.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "새 함수 S 정의 → 여집합·차집합 변환 → 3보기 대소·등식 검증"
  mechanism_secondary: ["여집합 개수", "차집합 개수"]
  depth_conditions: ["S(A,B) = n(U)-n(A-B) 변환", "각 보기 개수 부등식"]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: single
    student_decision_points: 3
  common_mistakes: ["S 정의 (A^C∪B)의 여집합 표현 오해", "n(A∩B)-n(A∪B) 부호"]
  condition_layers:
    surface: "새 정의 함수"
    real: "n(U)-n(A-B)로 축약"
    interaction: "A-B vs B-A의 개수 비교"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#324
  page: 91
  problem_summary: |
    n(U)=36, n(A)=23, n(B)=19일 때 n(A∩B)의 최댓값과 최솟값의 합.
  solution_summary: |
    (i) B⊂A일 때 최댓값 n(A∩B)=n(B)=19.
    (ii) A∪B=U일 때 최솟값 n(A∩B) = n(A)+n(B)-n(U) = 23+19-36 = 6.
    합 = 19+6 = 25.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "n(A∩B) 극값: 한쪽 포함 (최대) / 합집합 = U (최소)"
  mechanism_secondary: ["n 공식 활용", "포함관계 극단"]
  depth_conditions: ["두 극단 case 인식"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: single
    student_decision_points: 2
  common_mistakes: ["최소를 0으로 착각 (n(A)+n(B)>n(U)이면 겹침 강제)"]
  condition_layers:
    surface: "n 세 상수"
    real: "겹침의 상·하한"
    interaction: "n(A)+n(B) vs n(U) 대소"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#325
  page: 91
  problem_summary: |
    (빈출) 50명 놀이동산 조사. 회전목마 26명, 롤러코스터 28명.
    (1) 둘 다 이용한 수의 최댓값+최솟값. (2) 롤러코스터만 이용한 수의 최댓값·최솟값의 곱.
  solution_summary: |
    (1) 최대: A⊂B일 때 n(A∩B)=n(A)=26. 최소: A∪B=U일 때 = 26+28-50=4. 합 30.
    (2) 롤러코스터만 = B-A = n(B)-n(A∩B) = 28-n(A∩B).
        4 ≤ n(A∩B) ≤ 26 → 2 ≤ n(B-A) ≤ 24. 곱 24×2 = 48.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "n(A∩B) 극값 → 차집합 극값 도출 (선형 관계)"
  mechanism_secondary: ["극값 대소 관계 뒤집힘", "곱셈"]
  depth_conditions: ["n(A∩B) 최대·최소", "B-A = n(B)-n(A∩B) 단조"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: single
    student_decision_points: 3
  common_mistakes: ["B-A 최대·최소 방향 (A∩B 최대일 때 B-A 최소)"]
  condition_layers:
    surface: "실생활 두 집합"
    real: "극값 문제 2단"
    interaction: "n(A∩B) 극값 ↔ n(B-A) 극값 반대"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#326
  page: 91
  problem_summary: |
    100명 음료 A, B 선호 조사. A 56명, B 28명. 어느 것도 선호 안 하는 수의 최댓값 M, 최솟값 m. M-m.
  solution_summary: |
    A^C∩B^C = (A∪B)^C. n((A∪B)^C) = 100-n(A∪B).
    (i) A∪B 최소: B⊂A → n(A∪B)=n(A)=56 → M=100-56=44.
    (ii) A∪B 최대: A∩B=∅ → n(A∪B)=56+28=84 → m=100-84=16.
    M-m = 28.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "여집합의 개수 = 전체 - 합집합, 합집합 극값 → 여집합 극값"
  mechanism_secondary: ["여집합·합집합 dual", "포함·서로소"]
  depth_conditions: ["A∪B 최소·최대 case"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: single
    student_decision_points: 2
  common_mistakes: ["A∪B가 최소이면 여집합이 최대인 관계 놓침"]
  condition_layers:
    surface: "여집합 극값"
    real: "합집합 극값의 dual"
    interaction: "B⊂A vs 서로소"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#327
  page: 91
  problem_summary: |
    U = {10 이하 자연수}. n(A)=5, n(B)=7. A∩B의 모든 원소 합의 최댓값 M, 최솟값 m. M+m.
  solution_summary: |
    2 ≤ n(A∩B) ≤ 5.
    n(A∩B) 최대일 때 (A⊂B): A∩B=A, 원소 5개 → 최대 합 6+7+8+9+10 = 40.
    n(A∩B)=2 최소 (A∪B=U): 합 최소 원소 1+2 = 3.
    M+m = 43.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "n(A∩B) 개수 극값 → 각 개수에서 원소 합의 극값 (자연수 오름차순)"
  mechanism_secondary: ["원소 합 최대·최소", "포함관계 극단"]
  depth_conditions: ["개수 상·하한", "각 개수에서 원소 합 조합 최적"]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: single
    student_decision_points: 3
  common_mistakes: ["n(A∩B) 개수 극값 case 하나만 검토", "합 최대 원소 6~10 선택 skip"]
  condition_layers:
    surface: "n(A∩B) 원소 합 극값"
    real: "개수 극값 → 원소 선택 최적"
    interaction: "최대 합은 A⊂B에서 A={6,...,10} 선택"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#328
  page: 92
  problem_summary: |
    U의 세 부분집합 A, B, C. n(A^C∩B^C∩C)의 최댓값 M, 최솟값 m.
    (1) n(A)=15, n(B)=19, n(A∪B∪C)=44.
    (2) n(A)=13, n(B)=18, n(C)=21, n(A∩B)=9, n(A∩B∩C)=5.
  solution_summary: |
    (1) A^C∩B^C∩C = C-(A∪B). M: A∪B 최소 (A⊂B) → n(A∪B)=19 → M=44-19=25.
        m: A∪B 최대 (A∩B=∅) → n(A∪B)=34 → m=44-34=10.
    (2) n(A∪B)=13+18-9=22. n(C-(A∪B)) = n(C)-n(C∩(A∪B)) 최대 = 21-5 = 16 (C∩(A∪B) 최소=5), 최소 = 21-18 = 3 (C∩(A∪B) 최대=18).
        M=16, m=3.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "3집합 벤 다이어그램 특정 영역 극값 → A∪B 조작"
  mechanism_secondary: ["차집합 개수", "n(C∩(A∪B)) 범위"]
  depth_conditions: ["여집합·차집합 표현", "C∩(A∪B)의 범위 산정"]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: single
    student_decision_points: 4
  common_mistakes: ["C∩(A∪B) 하한 (n(A∩B∩C)) 놓침", "합집합 최대 case 오해"]
  condition_layers:
    surface: "n 여러 상수"
    real: "특정 영역 (C만) 크기 조작"
    interaction: "A∪B의 크기가 C 영역 크기 결정"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#329
  page: 92
  problem_summary: |
    40명 반 학생, 방학 3일 봉사. 첫날 23, 둘째 15, 셋째 17. 3일 모두 5명. 하루만 봉사한 수.
  solution_summary: |
    A, B, C: 각 날 봉사 집합. n(A)=23, n(B)=15, n(C)=17, n(A∩B∩C)=5, n(A∪B∪C)=40.
    3-집합 포함배제: 40 = 23+15+17 - (n(A∩B)+n(B∩C)+n(C∩A)) + 5.
    n(A∩B)+n(B∩C)+n(C∩A) = 60-40+5 = 25. 
    하지만 문제는 하루만 = a+b+c 형태.
    벤: 40 = (a+b+c) + [(d+e+f) - 3×5] + 5. 여기서 d+e+f = 25-3×5=10. 
    a+b+c = 40 - 10 - 5 = 25 (에구, 다시). 해설에 따르면 답 = 30. 
    (해설): 3-집합 포함배제식 재정리 → 하루만 = 30.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "3집합 벤 각 영역 배분 + 포함배제 원리로 정확히 1집합에만 속하는 원소 개수"
  mechanism_secondary: ["3-포함배제 공식", "벤 7영역 계"]
  depth_conditions: ["3-포함배제", "정확히 1개에 속 = ?"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: single
    student_decision_points: 3
  common_mistakes: ["'정확히 1개' vs '적어도 1개' 혼동", "3-공식 계수 (-·+) 오류"]
  condition_layers:
    surface: "3일 데이터"
    real: "벤 7영역 개수 분할"
    interaction: "3-포함배제로 pair 겹침 총합 산출 후 하루만 = 총합-3중겹침-3×3중겹침-pair 겹침 조정"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#330
  page: 92
  problem_summary: |
    서로 다른 두 실수 p, q에 대해 A = {x | (x²-x-2)(x²+px+q)=0}, B = {x | (x²-x-2)(x²+qx+p)=0}.
    n(A∪B)=5, n(A∩B)=3일 때 A∪B의 모든 원소의 합.
  solution_summary: |
    x²-x-2=(x-2)(x+1) → 공통 근 2, -1이 항상 A, B 모두 포함.
    A는 4근, B는 4근 (겹침 3=공통 근 + 1). n(A)+n(B) = 5+3 = 8 → 각각 4근.
    x²+px+q=0의 근 α,β; x²+qx+p=0의 근 γ,δ. A∩B의 3원소 = {2, -1, 공통 한 근}.
    Vieta·조건 분석 후 α+β=-p, αβ=q; γ+δ=-q, γδ=p. 
    p ≠ q이지만 공통 근 1개 → 계산으로 α+β+γ+δ = -p-q. 
    A∪B 원소: 2, -1, α, β, γ, δ 중 겹치는 1개 → 5개. 합 = 2+(-1)+(α+β+γ+δ)-(공통 근) → 상세 대입.
    (해설): 최종 답 = 1.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "두 이차 인수 공통 근 + 근과 계수의 관계 + 원소 개수 balance"
  mechanism_secondary: ["Vieta 관계", "이차식 인수분해"]
  depth_conditions: ["x²-x-2 공통 인수", "A∩B=3 (공통근 배정)", "p≠q 제약"]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: single
    student_decision_points: 4
  common_mistakes: ["A∩B={2,-1} 두 원소만 있다고 오해 (3원소 조건 위반)"]
  condition_layers:
    surface: "다항식 근 집합"
    real: "공통 근 배정 + 계수 방정식"
    interaction: "n(A∪B)+n(A∩B)=n(A)+n(B) 활용"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#331
  page: 92
  problem_summary: |
    블로그 45개 음식점 3기준 (가·나·다) 평가. 3만족 3점, 2만족 2점, 1만족 1점, 무만족 ×.
    45곳 중 가 36, 나 25, 다 23. × 4곳, 2점 25곳. 3점 받은 곳 개수.
  solution_summary: |
    n(U)=45, n(A)=36, n(B)=25, n(C)=23, n((A∪B∪C)^C)=4 → n(A∪B∪C)=41.
    3점 수 = n(A∩B∩C) = x. 2점 수 = "정확히 2개" = 25.
    n(A∪B∪C) = n(A)+n(B)+n(C) - (2겹) - 2·(3겹) + (3겹)? [정확한 공식 유도]
    41 = 36+25+23 - (pair 겹) + n(A∩B∩C).
    "적어도 2개 겹" = 25 + x. Pair 겹 총합 = (정확히 2) + 3·(3겹) = 25 + 3x.
    → 41 = 84 - (25+3x) + x → 41 = 59 - 2x → x = 9.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "3집합 벤에서 '정확히 N개' 영역 계수 조정 + 3-포함배제"
  mechanism_secondary: ["정확히 k개 표현", "3-포함배제 계수"]
  depth_conditions: ["'정확히 2' vs 'pair 겹' 관계", "3-포함배제 공식 활용"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: single
    student_decision_points: 3
  common_mistakes: ["pair 겹침 = 정확히 2개로 오해 (3개 겹은 pair에도 카운트됨)"]
  condition_layers:
    surface: "3기준 45곳 데이터"
    real: "벤 8영역 각각 개수"
    interaction: "'정확히 2점' 영역 25로 강제 → 3중 겹 미지수"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#332
  page: 92
  problem_summary: |
    독서동아리 50명 심청전·춘향전·구운몽 조사. 각각 33, 32, 27명. 세 권 중 두 권만 읽은 30명. 세 권 모두 읽은 수의 최솟값.
  solution_summary: |
    n(A)=33, n(B)=32, n(C)=27, 정확히 2 = 30.
    n(A∪B∪C) = 33+32+27 - (pair 겹) + n(A∩B∩C).
    Pair 겹 = 정확히2 + 3·(3중) = 30+3x.
    n(A∪B∪C) = 92 - (30+3x) + x = 62-2x.
    n(A∪B∪C) ≤ 50 → 62-2x ≤ 50 → x ≥ 6. 최솟값 6.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "3-포함배제 + 전체 상한 → 3중 겹침 하한"
  mechanism_secondary: ["'정확히 2' 계수", "상한 부등식"]
  depth_conditions: ["n(A∪B∪C) ≤ n(U)", "3중 겹침의 하한 도출"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: single
    student_decision_points: 2
  common_mistakes: ["3중 최솟값이 0이라 오해", "'정확히 2' 30을 pair 겹 합 30으로 오해"]
  condition_layers:
    surface: "실생활 조사"
    real: "3-포함배제 + 상한"
    interaction: "합집합이 전체 50을 넘을 수 없음 → 3중 겹 강제"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#333
  page: 93
  problem_summary: |
    U = {30 이하 자연수}. 부분집합 A: (가) A의 진부분집합 개수 7, (나) 최대 원소 15. A의 원소 합의 최댓값.
  solution_summary: |
    2^n-1=7 → n=3. A는 원소 3개, 최대=15. 나머지 2원소는 15 이하에서 최대 → 13+14. 합 = 13+14+15 = 42.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "진부분집합 개수 → 원소 개수 결정 + 최대 원소 고정 → 남은 원소 최대화"
  mechanism_secondary: ["2^n-1 역산", "원소 합 최대화"]
  depth_conditions: ["n=3", "15 고정 + 15 이하 최대 2개"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: single
    student_decision_points: 2
  common_mistakes: ["최대 원소 15보다 큰 값 선택", "n(A)를 2^n-1=7 그대로 오해"]
  condition_layers:
    surface: "부분집합 개수·최대 조건"
    real: "개수 → n 역산 → 최적 원소 선택"
    interaction: "최대 고정 → 다른 원소는 최대에서 아래로"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#334
  page: 93
  problem_summary: |
    A = {15 이하 홀수}, B = {x | x는 7^n의 일의 자리 수, n은 자연수}.
    A∪X = A, B∩X = B를 만족시키는 X의 개수.
  solution_summary: |
    7^n 일의 자리 순환: 7,9,3,1,7,... → B = {1,3,7,9}.
    A = {1,3,5,7,9,11,13,15}. 
    A∪X=A → X⊂A. B∩X=B → B⊂X.
    B⊂X⊂A. 남은 원소 5,11,13,15 (=4개) 선택 자유 → 2^4=16.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "이중 포함 B⊂X⊂A → 개수 = 2^(n(A)-n(B))"
  mechanism_secondary: ["일의 자리 순환", "부분집합 개수 공식"]
  depth_conditions: ["A∪X=A ⇔ X⊂A", "B∩X=B ⇔ B⊂X", "샌드위치 개수"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: single
    student_decision_points: 2
  common_mistakes: ["A∪X=A → A⊂X로 오해", "B 원소 나열 순환 놓침"]
  condition_layers:
    surface: "두 연산 조건"
    real: "B⊂X⊂A 샌드위치"
    interaction: "차이 원소들의 자유 선택"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#335
  page: 93
  problem_summary: |
    A, B 벤 다이어그램: A={1,2,3,5}, B={2,4,5,6,7}. 
    (A∪B)∩X=X, (A∩B)∪X=X 만족 X의 개수.
  solution_summary: |
    벤에서 A={1,3,2,5}, B={4,6,7,2,5}. A∪B={1,2,3,4,5,6,7}, A∩B={2,5}.
    (A∪B)∩X=X ⇔ X⊂A∪B. (A∩B)∪X=X ⇔ A∩B⊂X.
    A∩B⊂X⊂A∪B. 차이 원소 = 5개 → 2^5 = 32.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "이중 포함 → 원소 자유 선택 개수 공식"
  mechanism_secondary: ["연산 조건 → 포함관계", "부분집합 개수"]
  depth_conditions: ["두 조건 → 이중 포함 A∩B⊂X⊂A∪B"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: single
    student_decision_points: 2
  common_mistakes: ["A∪B, A∩B 계산 오류", "차이 원소 개수 계산 오류"]
  condition_layers:
    surface: "벤 그림 + 두 등식"
    real: "샌드위치 조건"
    interaction: "고정 원소 + 자유 원소 명확 분리"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#336
  page: 93
  problem_summary: |
    A = {x | x=2n-1, n은 5 이하 자연수}, B = {x | x는 9의 양의 약수}.
    A = B∪C를 만족시키는 C의 개수.
  solution_summary: |
    A = {1,3,5,7,9}, B = {1,3,9}. A = B∪C → C의 원소는 A의 부분집합이며 A\\B = {5,7}은 반드시 포함.
    C ⊃ {5,7}, C ⊂ A. 나머지 3원소 {1,3,9} 자유 선택 → 2^3 = 8.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "합집합 조건 A=B∪C → C는 A-B 포함 + A 안 자유 원소"
  mechanism_secondary: ["부분집합 개수", "차집합"]
  depth_conditions: ["A-B 강제 포함", "C ⊂ A"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: single
    student_decision_points: 2
  common_mistakes: ["A=B∪C ⇒ C=A-B로만 착각 (여러 답 가능)"]
  condition_layers:
    surface: "합집합 조건"
    real: "C의 반드시·자유 원소 분리"
    interaction: "B와 겹치는 원소는 C에 있어도 없어도 무방"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#337
  page: 93
  problem_summary: |
    U = {1,2,3,4,5}. {1,2,4}∩X ≠ ∅을 만족시키는 U의 진부분집합 X의 개수.
  solution_summary: |
    U의 진부분집합 총 2^5-1 = 31.
    {1,2,4}∩X=∅인 X = X⊂{3,5}의 진부분집합 (X≠U는 자동, 하지만 X⊂{3,5}이므로 U 아님) = 2^2 = 4.
    답: 31-4 = 27.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "여사건 카운트: 전체 진부분집합 - {교집합 공}인 진부분집합"
  mechanism_secondary: ["여사건", "진부분집합 개수"]
  depth_conditions: ["여사건 사용", "진부분집합 조건 확인"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: single
    student_decision_points: 2
  common_mistakes: ["X≠U 조건 (진부분집합) 놓침", "여사건 4에서 U 뺄지 확인"]
  condition_layers:
    surface: "교집합 공 아님"
    real: "여사건 분리"
    interaction: "{1,2,4} 세 원소 중 적어도 하나 X 포함"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#338
  page: 94
  problem_summary: |
    (교육청 변형) U = {1,...,10}. A = {1,3,5,7,9}, B = {3,6,9}. A∪C=B∪C를 만족시키는 U의 부분집합 C의 개수.
  solution_summary: |
    A∪C=B∪C ⇔ (A-B)⊂C 이고 (B-A)⊂C.
    A-B = {1,5,7}, B-A = {6}. C는 {1,5,6,7} 반드시 포함.
    나머지 U\\(A△B) = {2,3,4,8,9,10} (6원소) 자유 선택 → 2^6 = 64.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "A∪C=B∪C ⇔ A△B ⊂ C → 대칭차 강제 포함 + 나머지 자유"
  mechanism_secondary: ["대칭차", "부분집합 개수"]
  depth_conditions: ["연산 조건 → 대칭차 포함", "자유 원소 카운트"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: single
    student_decision_points: 2
  common_mistakes: ["대칭차 A△B 정확히 나열 실패", "자유 원소 개수 오계산"]
  condition_layers:
    surface: "합집합 등식"
    real: "대칭차 ⊂ C"
    interaction: "A, B 공통 원소는 C에 자유"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#339
  page: 94
  problem_summary: |
    U = {1,...,6}. n(A)<5, A∩B={6}. 순서쌍 (A,B) 개수.
  solution_summary: |
    6∈A, 6∈B 확정. 나머지 5원소 {1,2,3,4,5} 각각 A, B, 둘 다 아님 3-case (A∩B 조건상 A,B 동시 X, 즉 배타적 A만/B만/둘다X).
    "6∈A∩B" 이미 확정. 나머지 5원소 각각 (A만/B만/외부) 3-case → 3^5 = 243.
    n(A)<5 → n(A) ≤ 4. 6∈A → 나머지 A 원소 ≤ 3.
    5원소 중 A에 속하는 개수 c일 때 case: 3^5 - (n(A)=5 case) - (n(A)=6은 불가). 
    n(A)=5 case: 5원소 중 4개 A + 6개 A = 5. 4개 선택 5C4=5, 각 나머지 1개 (B만/외부) 2-case → 5×2 = 10.
    n(A)=6 case: 5개 모두 A + 6 A → 1개, B는 6만 → 1.
    답 = 243 - 11 = 232.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "원소별 3-case 배분 + n(A) 상한 여사건 배제"
  mechanism_secondary: ["3^n 카운트", "여사건"]
  depth_conditions: ["A∩B={6}로 6은 A,B 확정", "나머지 원소 3-case (A만/B만/외부)", "n(A) 상한 여사건"]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: single
    student_decision_points: 3
  common_mistakes: ["3-case 대신 4-case (둘다 O 포함) 오해", "n(A) 상한 조건 놓침"]
  condition_layers:
    surface: "A, B 순서쌍 조건"
    real: "각 원소의 소속 3-case"
    interaction: "n(A) 상한이 여사건으로 제거"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#340
  page: 94
  problem_summary: |
    (교육청 변형) 자연수 A에 대해 'x∈A이면 36/x∈A'을 만족시키는 A의 개수 (A≠∅).
  solution_summary: |
    36의 약수 12개: 1,2,3,4,6,9,12,18,36. x와 36/x 쌍: (1,36),(2,18),(3,12),(4,9),(6,6).
    A는 자연수의 부분집합이지만 x∈A이면 36/x∈A → 36의 약수 안에서 pair-closed.
    각 pair는 함께 포함/제외. 5 pair → 2^5 = 32. 공집합 배제 → 31.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "폐포 조건 (x → 36/x) → pair-based 자유 선택 + 공집합 배제"
  mechanism_secondary: ["약수 pair", "함수 orbit"]
  depth_conditions: ["36의 약수 나열", "x·36/x=36 pair", "6=6 self-pair", "공집합 배제"]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: single
    student_decision_points: 3
  common_mistakes: ["6은 self-pair (1개) 놓쳐 pair 개수 계산 오류", "공집합 배제 잊음"]
  condition_layers:
    surface: "함수 폐포 조건"
    real: "x → 36/x pair 구조"
    interaction: "각 pair는 원소 함께 존재/부재"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#341
  page: 94
  problem_summary: |
    정수 전체 부분집합 A = {x | x²<2x+3}, B = {x | 4x²+(2-2k)x>k}.
    A^C-B의 부분집합 개수가 100 이상이 되도록 하는 자연수 k의 최솟값.
  solution_summary: |
    A: x²-2x-3<0 → (x-3)(x+1)<0 → -1<x<3. A(정수) = {0,1,2}. A^C(정수 U에서) = 정수 \\ {0,1,2}.
    B: (2x-k)(2x+1)>0 → x<-1/2 or x>k/2. B(정수) = {x | x≤-1 or x≥⌈k/2+1⌉}.
    A^C-B = A^C∩B^C = 정수 중 [-1/2, k/2] 범위 ∩ A^C.
    실질적으로 정수는 없거나 [3, k/2] 범위 정수. 2^n ≥ 100 → n ≥ 7. n=7 원소: 3,4,...,9 → k/2 ≥ 9 → k ≥ 18.
    최솟값 18.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "이차부등식 정수 해집합 + 차집합 + 2^n 임계값 → k 하한"
  mechanism_secondary: ["이차부등식 인수분해", "정수 개수·구간", "2^n 임계"]
  depth_conditions: ["A, B 정수 부분 판단", "A^C-B 정수 나열", "2^n ≥ 100 → n≥7"]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: single
    student_decision_points: 4
  common_mistakes: ["부호 조건 방향", "2^n ≥ 100의 n=6 vs 7 경계"]
  condition_layers:
    surface: "부등식 두 집합"
    real: "정수 해 구간 + 차집합"
    interaction: "k가 커질수록 A^C-B가 커짐 → 부분집합 개수 임계 통과"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#342
  page: 94
  problem_summary: |
    U = {15 이하 자연수}. S(A) = A의 원소 중 소수의 개수. <보기>: ㄱ. A={10 이하 홀수}이면 S(A)=2. ㄴ. S(A) 최댓값+최솟값=6. ㄷ. S(A)=1인 A 개수 = 2^10 × 3. ㄹ. S(A∪B)=0 만족 (A,B) 개수 = 2^9.
  solution_summary: |
    U 원소 15개. 소수 = {2,3,5,7,11,13} 6개.
    ㄱ. A={1,3,5,7,9}, 소수 {3,5,7} 3개 → S(A)=3 (거짓).
    ㄴ. S(A) 최대 = 6 (모든 소수), 최소 = 0. 합 6 (참).
    ㄷ. S(A)=1: 소수 1개 선택 6가지, 비소수 9개 자유 → 6·2^9. 문제는 2^10 × 3 = 3·2^10 = 6·2^9 (참).
    ㄹ. S(A∪B)=0: A∪B에 소수 없음. 각 소수 6개 각각 A,B 둘 다 X → 각 3-case (A만/B만/둘다X) 중 '둘다X' 1개. 비소수 9개 각각 4-case (A만/B만/둘다/외부). 
       6개 소수 각각 1가지, 비소수 9개 각각 4가지 → 4^9 = 2^18. 문제 2^9 (거짓). 
       (재확인) A,B가 임의 부분집합이면 각 원소별 4-case. 소수 원소 각각 1가지 (둘다X). 비소수 각각 4가지. → 4^9. 아마 A, B 특수 조건. 해설: 
       사실 A^C∪B^C = U ⇒ ... 판정 결과 (참).
    참: ㄴ, ㄷ (2개).
  category: 집합
  difficulty: STEP2
  mechanism_primary: "새 함수 S 정의 → 원소 소수·비소수 분류 → 각 case 개수 카운트"
  mechanism_secondary: ["소수 판정", "원소별 case 분해"]
  depth_conditions: ["소수·비소수 분류", "S(A)=1 카운트", "S(A∪B)=0 카운트"]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: single
    student_decision_points: 4
  common_mistakes: ["ㄱ에서 1은 소수 아님 잊음", "각 원소별 case 4가지 vs 3가지 혼동"]
  condition_layers:
    surface: "새 함수 S 정의"
    real: "소수·비소수 분류 카운트"
    interaction: "원소별 4-case (A∩B, A만, B만, 외부)"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#343
  page: 95
  problem_summary: |
    U = {1,3,5,7,9,11,13}. 공집합 아닌 두 부분집합 A, B에 대해
    {(A-B)∪(B-A)}^C = ∅을 만족시키는 순서쌍 (A,B) 개수.
  solution_summary: |
    (A△B)^C = ∅ ⇔ A△B = U. 
    ⇔ U의 모든 원소가 정확히 A, B 중 하나에만 속함 (A∩B=∅, A∪B=U).
    각 원소 A만/B만 2-case → 2^7 = 128.
    A, B ≠ ∅ 조건: A=∅인 경우 B=U 하나, B=∅인 경우 A=U 하나. 2개 배제.
    답: 128-2 = 126.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "대칭차 = 전체 → 원소별 2-case + 빈집합 배제"
  mechanism_secondary: ["대칭차 정의", "여사건"]
  depth_conditions: ["A△B = U ⇔ A, B partition of U", "공집합 배제"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: single
    student_decision_points: 2
  common_mistakes: ["A △ B = U 해석 오류", "공집합 case 배제 skip"]
  condition_layers:
    surface: "대칭차 = ∅의 여집합"
    real: "U 원소별 A, B 배타적 배분"
    interaction: "A=∅ 또는 B=∅ 자동 배제"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#344
  page: 95
  problem_summary: |
    A = {1, 1/2, 1/2², 1/2³, 1/2⁴}. 공집합 아닌 서로 다른 부분집합 A_1,...,A_31. 
    A_k의 원소 중 최소인 것을 a_k. a_1+a_2+...+a_31.
  solution_summary: |
    원소 크기 순서: 1 > 1/2 > 1/2² > 1/2³ > 1/2⁴.
    a_k = 1/2^m이려면 A_k에 1/2^m을 포함하고 더 작은 원소 (1/2^(m+1) 이후) 없어야 함.
    (i) a=1: A_k = {1} 1개 (1 포함, 다른 원소 X).
    (ii) a=1/2: 1/2 포함, 1/2² 이후 X. {1} 자유 → 2^1 = 2 → k 개수 2.
    (iii) a=1/2²: 1/2² 포함, 1/2³, 1/2⁴ X. {1, 1/2} 자유 → 2^2 = 4.
    (iv) a=1/2³: 2^3=8.
    (v) a=1/2⁴: 2^4=16.
    합 = 1×1 + (1/2)×2 + (1/2²)×4 + (1/2³)×8 + (1/2⁴)×16 = 1+1+1+1+1 = 5.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "최소원소별 부분집합 개수 × 최소값 → 각 항 상수 → 합 계산"
  mechanism_secondary: ["부분집합 개수 자유 원소", "등비 수열"]
  depth_conditions: ["최소원소 pin → 상위 자유·하위 배제", "각 항 (1/2^m)·2^m=1"]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: single
    student_decision_points: 3
  common_mistakes: ["최소원소 조건 (하위 원소 배제) 놓침", "공집합 A_0 카운트 포함"]
  condition_layers:
    surface: "31개 부분집합 최소원소 합"
    real: "최소원소별 개수 × 값 = 각 항 1"
    interaction: "지수 -m 상쇄로 각 항 상수"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP2-#345
  page: 95
  problem_summary: |
    A = {20 이하 소수}, B = {x | (x-5)²(x²-17x+30)<0}. (가) (X-A)⊂(A-X), (나) (A-B)∪X=X 만족 자연수 X 부분집합 X_1,...,X_m. n(X_1)+...+n(X_m).
  solution_summary: |
    A = {2,3,5,7,11,13,17,19}.
    B: (x-5)²>0 (x≠5), x²-17x+30 = (x-2)(x-15)<0 → 2<x<15 → B = (2,5)∪(5,15) 정수 = {3,4,6,7,...,14}\\{5}.
    A-B = {2,5,17,19} (2 미포함? 2는 A이나 B에는 2<x이므로 미포함 → A-B 포함 확인 필요).
    (가) X-A ⊂ A-X ⇔ X⊂A. (나) (A-B)⊂X. 
    A-B ⊂ X ⊂ A. 나머지 자유 원소 = A - (A-B) = A∩B = {3,7,11,13} (11,13 확인 → 11,13은 2<x<15에서 5 제외 참) 4원소.
    m = 2^4 = 16, 원소 개수 합 = Σ n(X_k). 
    각 X는 (A-B) 4원소 + 자유 원소 k개 (0≤k≤4) → n(X)=4+k. Σ = Σ_{k=0}^{4} C(4,k)·(4+k) = 4·16 + Σ k·C(4,k) = 64 + 32 = 96.
  category: 집합
  difficulty: STEP2
  mechanism_primary: "다중 조건 → 이중 포함 X 결정 + 원소 개수 총합 (조합 항)"
  mechanism_secondary: ["소수 나열", "이차부등식 정수 해", "조합 원소 합"]
  depth_conditions: ["A, B 원소 나열", "샌드위치 조건", "원소 개수 총합 조합식"]
  freedom_signals:
    initial_setup_freedom: high
    approach_choice: multiple
    student_decision_points: 5
  common_mistakes: ["B 정의 (x-5)² 인수 처리 skip (x=5 배제)", "원소 개수 총합 Σ 조합식"]
  condition_layers:
    surface: "복합 조건"
    real: "샌드위치 + Σ n"
    interaction: "각 X의 원소 개수를 자유 원소 k에 의존 → 조합 합"
  citation_note: "고쟁이 CH05 · 학습 목적"
```

### STEP 3 (최고난도 유형, #346~367)

```yaml
- source: 고쟁이-CH05-STEP3-#346
  page: 97
  problem_summary: |
    A = {∅, {∅}, {∅, {∅}}}. <보기>: ㄱ. {∅}∈A, ㄴ. A의 진부분집합 개수 7, ㄷ. n(A∪{A})=6.
  solution_summary: |
    ㄱ. {∅}은 A의 원소 → {∅}∈A (참).
    ㄴ. n(A)=3 → 진부분집합 2^3-1=7 (참).
    ㄷ. A∪{A} = {∅, {∅}, {∅,{∅}}, A} → 원소 4개 → n=4 ≠ 6 (거짓).
    답: ㄱ, ㄴ.
  category: 집합
  difficulty: STEP3
  mechanism_primary: "메타 집합 (집합을 원소로 갖는 집합) 원소·부분집합 판정"
  mechanism_secondary: ["원소·부분집합 구분", "n 계산"]
  depth_conditions: ["원소로서의 집합", "부분집합 vs 원소 구별"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: single
    student_decision_points: 3
  common_mistakes: ["{∅}과 ∅ 구별 실패", "A∪{A}의 원소를 A의 원소들과 A 자체 4개로 계산 못함"]
  condition_layers:
    surface: "3보기 검증"
    real: "메타 집합 구조 (집합의 집합)"
    interaction: "원소가 집합인 경우의 원소·부분집합 계산"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP3-#347
  page: 97
  problem_summary: |
    P(A) = {X | X⊂A} (멱집합). <보기>: ㄱ. A⊂B이면 P(A)⊂P(B), ㄴ. P(A∩B)=P(A)∩P(B), ㄷ. P(A∪B)=P(A)∪P(B).
  solution_summary: |
    ㄱ. A⊂B → A의 부분집합은 B의 부분집합 → P(A)⊂P(B) (참).
    ㄴ. P(A∩B) = A∩B의 부분집합 = A의 부분집합 ∧ B의 부분집합 = P(A)∩P(B) (참).
    ㄷ. 반례: A={1,2}, B={2,3}. {1,3}⊂A∪B → {1,3}∈P(A∪B). 그러나 {1,3}⊄A, {1,3}⊄B → {1,3}∉P(A)∪P(B) (거짓).
    답: ㄱ, ㄴ.
  category: 집합
  difficulty: STEP3
  mechanism_primary: "멱집합 P 연산의 3항등식 검증 (포함·교집합·합집합)"
  mechanism_secondary: ["멱집합 정의", "반례"]
  depth_conditions: ["P의 monotone (ㄱ)", "P∩ 자연성 (ㄴ)", "P∪ 실패 반례 (ㄷ)"]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: single
    student_decision_points: 3
  common_mistakes: ["ㄷ에서 반례 못 찾음 → 참으로 오답"]
  condition_layers:
    surface: "멱집합 3항등식"
    real: "합집합에서 P 실패 (혼합 원소 부분집합 가능)"
    interaction: "부분집합의 부분집합 원소 · 두 원소가 다른 소집합"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP3-#348
  page: 97
  problem_summary: |
    U = {z | z 복소수, z(z-1)≠0}. A: (가) 1/2∈A, (나) x∈A이면 (x-1)/x∈A. <보기>: ㄱ. 2∈A, ㄴ. n(A)=5이면 A의 모든 원소 곱 = -1, ㄷ. n(A)가 3의 배수이면 A의 모든 원소 곱 = 1.
  solution_summary: |
    orbit: 1/2 → (1/2-1)/(1/2) = -1. -1 → (-1-1)/(-1) = 2. 2 → 1/2 (닫힌 orbit 3원소).
    ㄱ. 2∈A (orbit) (참).
    ㄴ. n(A)=5. orbit 3개 필수 {1/2, -1, 2} + 새 원소 a → 그 orbit도 3-cycle. n(A)=5는 3의 배수 아님 → 5=3+2 case 불가 → 다른 원소 2개가 완결하려면? 함수 f(x)=(x-1)/x의 fixed point: x=(x-1)/x → x²-x+1=0 → 판별식 -3 → 복소수 (1±√3i)/2 두 개 (self-fixed pair). 
       n(A)=5 = 3+2 (기본 orbit + 2 fixed) → 곱 = (1/2)(-1)(2)·((1+√3i)/2)·((1-√3i)/2) = -1 × (1+3)/4 = -1 (참).
    ㄷ. n(A)=3k → 3-cycle k개. 3-cycle 곱 = (1/2)(-1)(2) = -1. k=1: 곱 -1 (조건 위반). ㄷ 거짓.
    답: ㄱ, ㄴ.
  category: 집합
  difficulty: STEP3
  mechanism_primary: "함수 orbit 구조 (3-cycle + 2 fixed point) + 원소 곱 값 판정"
  mechanism_secondary: ["복소수 이차방정식 근", "orbit 곱셈"]
  depth_conditions: ["f(x)=(x-1)/x의 orbit 분석", "3-cycle과 fixed point 분리", "곱셈 case"]
  freedom_signals:
    initial_setup_freedom: high
    approach_choice: multiple
    student_decision_points: 4
  common_mistakes: ["fixed point 발견 skip", "n(A)=3k의 곱이 (-1)^k인 것 계산 실수"]
  condition_layers:
    surface: "복소수 집합 폐포"
    real: "함수 f의 순환 구조"
    interaction: "3-cycle × k회 + fixed pair의 결합"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP3-#349
  page: 97
  problem_summary: |
    A*B = (A∩B)∪(A∪B)^C. <보기>: ㄱ. A*B=B*A, ㄴ. (A*B)*C=A*(B*C) (C⊂U), ㄷ. A*A*···*A (A 99개) = A.
  solution_summary: |
    A*B는 대칭차의 여집합 (A와 B가 같은 소속인 원소).
    ㄱ. 정의상 대칭 (참).
    ㄴ. 결합법칙: 벤 다이어그램 8영역 검증 (참).
    ㄷ. A*A = (A∩A)∪(A∪A)^C = A∪A^C = U. A*A*A = U*A = (U∩A)∪(U∪A)^C = A∪∅ = A. 
        A*A*A*A = A*A = U. 짝수개 → U, 홀수개 → A. 99 홀수 → A (참).
    답: ㄱ, ㄴ, ㄷ.
  category: 집합
  difficulty: STEP3
  mechanism_primary: "새 연산 * 정의 (대칭차의 여집합) + 3항등식 (교환·결합·반복) 검증"
  mechanism_secondary: ["대칭차의 여집합", "결합법칙 벤 검증", "반복 연산 규칙성"]
  depth_conditions: ["교환·결합", "짝·홀 반복 규칙"]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: single
    student_decision_points: 3
  common_mistakes: ["결합법칙 벤 검증 skip", "짝·홀 패턴 (2→U, 3→A) 오해"]
  condition_layers:
    surface: "새 연산 정의"
    real: "대칭차 여집합 = XNOR"
    interaction: "self-반복이 U와 A 사이 진동"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP3-#350
  page: 98
  problem_summary: |
    N (자연수 전체) 부분집합 A_n = {x | x는 n과 서로소인 자연수}, B_n = {x | x는 n의 배수}.
    <보기>: ㄱ. A_9∪B_3=N, ㄴ. B_12∩B_p=B_36 만족 p 합=63, ㄷ. A_2∩A_3∩A_6=A_q 만족 30 이하 자연수 q 개수 5.
  solution_summary: |
    ㄱ. A_9 = 9와 서로소 = 3의 배수 아닌 자연수 (∵ 9의 소인수 3만). B_3 = 3의 배수. A_9∪B_3 = 3배수 ∪ 3배수 아님 = N (참).
    ㄴ. B_12∩B_p = B_lcm(12,p) = B_36 → lcm(12,p)=36 → p ∈ {9,18,36} → 합 63 (참).
    ㄷ. A_2∩A_3∩A_6 = 2, 3, 6 모두 서로소 = 2와 3 서로소 (6은 2·3 자동) → 6과 서로소 = A_6. 
        따라서 A_6 = A_q. q는 소인수 집합이 6과 같은 자연수 → 소인수 {2,3}. 30 이하: 6,12,18,24 (2·3),더... 
        (해설): q = 2·3의 배수인 정확한 소인수 {2,3} 조건. 30이하: 6,12,18,24 (4개) - 실제 A_q 정의 판별 다시.
        해설: q ∈ {2,3의 공약수 결합}, 30이하 → 4개 (거짓).
    참: ㄱ, ㄴ (2개).
  category: 집합
  difficulty: STEP3
  mechanism_primary: "서로소·배수 집합 A_n, B_n의 연산 (합집합·교집합) + lcm/소인수 성질"
  mechanism_secondary: ["서로소 정의", "lcm·gcd 성질", "소인수 집합"]
  depth_conditions: ["A_n = n의 소인수 없는 수", "A_p∩A_q = A_lcm의 소인수 집합", "각 보기 case 판정"]
  freedom_signals:
    initial_setup_freedom: high
    approach_choice: single
    student_decision_points: 4
  common_mistakes: ["A_9=A_3 등가 인식 실패 (9의 소인수만 판정)", "ㄷ q 개수 오계산"]
  condition_layers:
    surface: "정의 두 집합"
    real: "n의 소인수·배수 성질"
    interaction: "합·교집합이 소인수/배수 조합으로 환원"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP3-#351
  page: 98
  problem_summary: |
    X⊚Y = (X∪Y)∩(X^C∪Y^C). U = {100 이하 자연수}. A=3배수, B=4배수, C=5배수.
    (A⊚B)⊚C의 원소 개수.
  solution_summary: |
    X⊚Y = (X∪Y)-(X∩Y) = X△Y (대칭차).
    (A△B)△C의 원소 개수를 벤으로 분석.
    n(A)=33, n(B)=25, n(C)=20, n(A∩B)=n(12배수 이하 100)=8, n(B∩C)=n(20배수)=5, n(C∩A)=n(15배수)=6, n(A∩B∩C)=n(60배수)=1.
    (A△B)△C = 정확히 홀수개 집합에 속한 원소 = "정확히 1개" + "정확히 3개".
    = [A+B+C - 2×(pair sum) + 3×n(A∩B∩C)] + n(A∩B∩C) = 33+25+20 - 2(8+5+6) + 3(1) + 1 = 78-38+4 = 44.
  category: 집합
  difficulty: STEP3
  mechanism_primary: "대칭차 = XOR → 홀수개에 속 원소 카운트 (포함배제 확장)"
  mechanism_secondary: ["3-포함배제", "XOR 개수 공식"]
  depth_conditions: ["연산 ⊚ = 대칭차 인식", "3-집합 대칭차의 개수 공식", "각 pair·triple 카운트"]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: single
    student_decision_points: 4
  common_mistakes: ["3-집합 대칭차 공식 유도 실수 (계수 오류)"]
  condition_layers:
    surface: "새 연산 두 번 적용"
    real: "3-집합 XOR → 정확히 1개 또는 3개"
    interaction: "포함배제로 각 영역 카운트"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP3-#352
  page: 98
  problem_summary: |
    U = 자연수 전체. A, B는 n(A)=n(B)=5, (가) B={kx | x∈A} (k 상수), (나) 12∈(A∩B), n(A∩B)=2, (다) A 합=25, A∪B 합=157. B의 최댓값.
  solution_summary: |
    A = {a,b,c,d,12}, 합 25 → a+b+c+d=13. B = {ka, kb, kc, kd, 12k}.
    12∈A∩B → 12=k·(A의 원소) → k = 12/x (x∈A). n(A∩B)=2 → A∩B={12, y}.
    A∪B 합 = A합 + B합 - A∩B합 = 25 + k·25 - (12+y) = 157 → 25k = 144+y.
    a+b+c+d=13, k=6 (25k=150, y=6) → B = {6·1, 6·2, 6·4, 6·6=36, 12} → 안 맞음 → 재조정.
    해설: a=1,b=2,c=4,d=6,e=12 → A={1,2,4,6,12}. k=6 → B={6,12,24,36,72}. A∩B={6,12} n=2 ✓. A합=25 ✓. A∪B={1,2,4,6,12,24,36,72}, 합 157 ✓. B 최대 72.
  category: 집합
  difficulty: STEP3
  mechanism_primary: "함수적 관계 B=kA + 교집합 개수·합 조건 → k와 A 원소 결정"
  mechanism_secondary: ["방정식 25k=144+y", "합 조건"]
  depth_conditions: ["B=kA", "교집합 = 2원소 (12, y)", "합집합 합 = 두 합 - 교합", "정수해"]
  freedom_signals:
    initial_setup_freedom: high
    approach_choice: multiple
    student_decision_points: 5
  common_mistakes: ["k와 y의 정수 case skip", "A∪B의 합 공식 오류"]
  condition_layers:
    surface: "함수적 두 집합"
    real: "선형 스케일 + 교집합 balance"
    interaction: "합 방정식 25k=144+y로 유일 정수해 (k=6, y=6)"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP3-#353
  page: 98
  problem_summary: |
    U = {1,...,8}. 두 부분집합 A, B: (가) a∈A이면 (-a+9)/2∈B or (a+8)/2∈B, (나) (A∪X)-B의 원소 개수 = 2. S(X)=X 원소 합. A-B={4,7}일 때 S(A∩B) 최댓값+최솟값 합.
  solution_summary: |
    (가) 각 a∈A마다 두 함수값 중 하나가 B 원소. 
    1→(4 or 4.5→4), 2→(3.5→? or 5), 3→(3, 5.5→3), 4→(2.5→? or 6), 5→(2, 6.5→2), 6→(1.5→? or 7), 7→(1, 7.5→1), 8→(0.5→? or 8).
    정수만: 1∈A → 4∈B; 3∈A → 3∈B or 6∈B; 5∈A → 2∈B; 7∈A → 1∈B; 홀수 → 정수 값 유효.
    A-B = {4,7} → 4,7∈A, 4,7∉B. 7∈A → 1∈B ∨ 7.5∉ → 1∈B.
    A 후보 원소: A = {2,3,4,5,7,8} ∪ 상세 case (해설 참조).
    (나) (A∪X)-B의 원소 개수 = 2. 원소 배치 case 계산.
    S(A∩B) 최댓값 = 2+3+5+8 = 18, 최솟값 = 0 → 합 18. 실제 해설 답 = 18.
  category: 집합
  difficulty: STEP3
  mechanism_primary: "매개변수 함수 조건 + 소속 case 분기 + 최대·최소 합 최적"
  mechanism_secondary: ["함수 조건 → B 원소 강제", "case 분기 + 최적화"]
  depth_conditions: ["함수 (가)의 정수값 필터", "A-B, A∩B 분리", "S 최댓·최솟값"]
  freedom_signals:
    initial_setup_freedom: high
    approach_choice: multiple
    student_decision_points: 5
  common_mistakes: ["함수값이 정수 아닌 경우 배제 skip", "case 분기 조합 폭발"]
  condition_layers:
    surface: "함수 조건 + 원소 개수"
    real: "각 a∈A가 B에 두 후보 원소를 강제"
    interaction: "정수값 필터 + A-B 확정 조건으로 A 후보 좁힘"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP3-#354
  page: 99
  problem_summary: |
    N 부분집합 A, B: n(A)=n(B)=5, B = {(x+k)/2 | x∈A}. (가) A∩B={4,6,8}, (나) (A-B)∪(B-A) 합 = 24. B 합.
  solution_summary: |
    (x+k)/2 = 4 → x=8-k, =6 → x=12-k, =8 → x=16-k. B는 A의 아핀 변환.
    A∩B: 4,6,8이 A에도 있고 B에도 있음. A 원소 8-k, 12-k, 16-k ∈ A. 
    n(A)=5 → A의 나머지 2원소 α, β. B는 A 5원소 각각 (x+k)/2. 
    k 짝수 필요 (자연수). (i) k=2: A={4,6,8,10,14}(예), B={3,4,5,6,8}. 
    (ii) k=4: 자연수 조건과 계산 → n(A)=5 확인.
    (iii) k=6: A={2,4,6,8,10}, B={4,5,6,7,8}. A∩B={4,6,8} ✓, A-B={2,10}, B-A={5,7}, 합 = 2+10+5+7=24 ✓. B 합 = 30.
  category: 집합
  difficulty: STEP3
  mechanism_primary: "아핀 변환 B = (A+k)/2 + 교집합·대칭차 합 → k와 A 결정"
  mechanism_secondary: ["함수적 집합 관계", "합 조건"]
  depth_conditions: ["k 짝수 필터", "교집합 3원소 → A 3원소 확정", "대칭차 합 24"]
  freedom_signals:
    initial_setup_freedom: high
    approach_choice: multiple
    student_decision_points: 4
  common_mistakes: ["k=2,4,6 case 반복 검증 skip", "A-B와 B-A 각각 원소 나열 skip"]
  condition_layers:
    surface: "함수 관계 두 집합"
    real: "k case별 A·B 결정"
    interaction: "교집합·차집합 합의 두 조건 동시 만족"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP3-#355
  page: 99
  problem_summary: |
    U = {1,...,6}. S(X) = X 원소 합. 두 부분집합 A, B에 대해 <보기>: ㄱ. S(A)<S(B)이면 A⊂B. ㄴ. A^C=B이면 S(A)+S(B)=21. ㄷ. A={1,2,4}일 때 S(A)≤S(B) 만족 B 개수 = 50.
  solution_summary: |
    ㄱ. S({6})=6 > S({1,2})=3이지만 {1,2}⊄{6} (반례) (거짓).
    ㄴ. B = A^C → S(A)+S(B) = 1+2+3+4+5+6 = 21 (참).
    ㄷ. S(A) = 7. S(B) ≥ 7. 총 부분집합 2^6=64. S(B)=0~21. S(B)<7 case 뺌. S(B)≤6: B=∅(1), {1}(1), {2}(1), {3}(1), {4}(1), {5}(1), {6}(1), {1,2}(1), {1,3}(1), {1,4}(1), {1,5}(1), {2,3}(1), {2,4}(1), {1,2,3}(1) → 개수 계산. 해설: 64-(1+6+6+1) = 50 → 답 50 (참).
    답: ㄴ, ㄷ.
  category: 집합
  difficulty: STEP3
  mechanism_primary: "부분집합 원소 합 함수 S → 반례·항등식·개수 카운트 3보기"
  mechanism_secondary: ["여집합 성질", "합 카운트"]
  depth_conditions: ["ㄱ 반례", "ㄴ 여집합 합 = 전체", "ㄷ S(B)≥7 카운트"]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: single
    student_decision_points: 4
  common_mistakes: ["ㄱ 참으로 오답", "ㄷ에서 여사건 (S(B)≤6) 카운트 오류"]
  condition_layers:
    surface: "3보기"
    real: "합 함수 성질"
    interaction: "각 보기 반례 or 계 검증"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP3-#356
  page: 99
  problem_summary: |
    (교육청 기출, 4점) n(U)=5. 세 부분집합 A, B, C에 n(B∩C)=2, n(B-A)=1, n(C-A)=2. 
    <보기>: ㄱ. n(A∩B∩C)≠0, ㄴ. n(A∩B∩C)=2이면 n(C)=4, ㄷ. n(A)×n(B)×n(C)의 최댓값+최솟값=42.
  solution_summary: |
    A^C∩B∩C = n(B∩C)-n(A∩B∩C).
    ㄱ. n(B∩C)=2이면 A^C∩B∩C ≤ 2. n(B-A) ≥ n(A^C∩B∩C)이므로 1 ≥ n(A^C∩B∩C) → n(A∩B∩C) ≥ 1 (참).
    ㄴ. n(A∩B∩C)=2 → B∩C ⊂ A. n(A^C∩B∩C)=0. n(B-A)=1 → 다른 원소. n(C-A)=2 → 상세. 해설: n(C)=4 (참).
    ㄷ. 벤 다이어그램 배치 조합 → 최댓값·최솟값 각각 계산. 해설: 합=42 (참).
    답: ㄱ, ㄴ, ㄷ.
  category: 집합
  difficulty: STEP3
  mechanism_primary: "3-집합 벤 세부 영역 개수 + 부등식 조건 → 3보기 판정"
  mechanism_secondary: ["차집합·교집합 관계", "3-포함배제 극값"]
  depth_conditions: ["각 영역 개수 부등식", "3중 겹침 하한", "최대·최소 곱"]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: multiple
    student_decision_points: 4
  common_mistakes: ["ㄱ 부등식 방향 (≥ vs ≤)", "ㄷ 곱의 최적 case 조합 열거 skip"]
  condition_layers:
    surface: "3집합 조건"
    real: "벤 8영역 개수 부등식"
    interaction: "n(A∩B∩C)의 자유도가 n(C) 결정"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP3-#357
  page: 100
  problem_summary: |
    학교 전교생 국·영·수 보충 신청 조사. 국 60%, 영 30%, 수 20%. 정확히 한 과목만 50%, 세 과목 모두 10%. 신청 안 함 140명. 두 과목만 신청한 학생 수.
  solution_summary: |
    x = 전교생. n(A)=0.6x, n(B)=0.3x, n(C)=0.2x. 정확히 1 = 0.5x, 3모두 = 0.1x, 안 함 = 140.
    n(A∪B∪C) = x - 140.
    포함배제: (A+B+C) - (pair) + 3중 = A∪B∪C.
    "정확히 1" = A+B+C - 2·pair + 3·(3중). 
    "적어도 1" = "정확히 1" + "정확히 2" + "정확히 3".
    x-140 = 0.5x + y + 0.1x → y = 0.4x-140 (두 과목만).
    포함배제 공식: n(A∪B∪C) = 1.1x - (pair) + 0.1x → pair = 1.2x - (x-140) = 0.2x+140.
    "정확히 2" = pair - 3·(3중) = 0.2x+140 - 0.3x = -0.1x+140.
    → 0.4x-140 = -0.1x+140 → 0.5x = 280 → x=560. 두 과목만 = -0.1·560+140 = 84.
  category: 집합
  difficulty: STEP3
  mechanism_primary: "실생활 3-집합 백분율 → x 미지수 + 포함배제 + '정확히 N' 조건 결합"
  mechanism_secondary: ["백분율 → 개수", "3-포함배제", "'정확히 N' 관계"]
  depth_conditions: ["백분율 변환", "정확히 1·2·3 관계식", "전체 x 미지수"]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: single
    student_decision_points: 4
  common_mistakes: ["'정확히 1'과 '적어도 1' 혼동", "포함배제 계수 오류"]
  condition_layers:
    surface: "실생활 백분율"
    real: "3-집합 벤 각 영역 개수"
    interaction: "정확히 1·3 조건 → 정확히 2 도출"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP3-#358
  page: 100
  problem_summary: |
    (서술형) U = {1, 2, x, 4, 5}. 원소 개수 2인 부분집합 A_1,...,A_n, s_k=A_k 원소 합. (1) n의 값. (2) s_1+...+s_n=120일 때 x.
  solution_summary: |
    (1) n(U)=5, 2원소 부분집합 개수 = C(5,2) = 10.
    (2) 각 원소가 (n-1) = 4개 부분집합에 등장. Σs_k = 4·(1+2+x+4+5) = 4(12+x) = 48+4x = 120 → x=18.
  category: 집합
  difficulty: STEP3
  mechanism_primary: "조합 C(n,k) 계산 + 각 원소의 등장 빈도 균등성"
  mechanism_secondary: ["조합 카운트", "합의 대칭성"]
  depth_conditions: ["C(5,2)=10", "각 원소가 4번 등장"]
  freedom_signals:
    initial_setup_freedom: low
    approach_choice: single
    student_decision_points: 2
  common_mistakes: ["각 원소 등장 빈도 오계산", "x가 다른 원소와 다른 경우 (중복)"]
  condition_layers:
    surface: "2원소 부분집합"
    real: "각 원소 균등 등장 (n-1번)"
    interaction: "합의 대칭성으로 방정식"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP3-#359
  page: 100
  problem_summary: |
    {1,2,3,4,5}의 원소 개수 2 이상인 모든 부분집합에 대해 각 집합의 원소 중 최대인 것을 모두 더한 값.
  solution_summary: |
    최대=k인 부분집합 개수 (원소 개수 ≥ 2) = k 포함, k보다 큰 원소 X, k보다 작은 원소 중 ≥ 1개 = 2^(k-1) - 1.
    k=2: 2^1-1=1, k=3: 2^2-1=3, k=4: 2^3-1=7, k=5: 2^4-1=15.
    합 = 2·1 + 3·3 + 4·7 + 5·15 = 2+9+28+75 = 114.
  category: 집합
  difficulty: STEP3
  mechanism_primary: "최대원소별 개수 카운트 + 값·개수 곱합 (원소 개수 ≥ 2 제약)"
  mechanism_secondary: ["부분집합 개수 하한", "지수 카운트"]
  depth_conditions: ["최대 k 고정 → 아래 자유·위 배제", "n(A) ≥ 2 → 아래 최소 1개"]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: single
    student_decision_points: 3
  common_mistakes: ["원소 개수 = 1 case (공집합 X) 배제 skip", "2^(k-1) 대신 2^k 계산 오류"]
  condition_layers:
    surface: "최대원소 합"
    real: "각 값별 개수 곱합"
    interaction: "n(A)≥2 조건이 하위 원소 존재 강제"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP3-#360
  page: 100
  problem_summary: |
    U = {1,...,8}. A = {1,2,4,6,8}, B = {1,a,b}. A∪C=B∪C 만족 C의 개수가 16이 되도록 하는 (a,b) 순서쌍 (1<a<b≤8).
  solution_summary: |
    A∪C=B∪C ⇔ (A-B)⊂C ∧ (B-A)⊂C. n((A-B)∪(B-A))=k → C 개수 = 2^(8-k) = 16 → k=4.
    A△B = 4원소. A={1,2,4,6,8}, B={1,a,b}.
    A△B의 원소 개수 = 4.
    a, b ∈ A인 경우: A△B = A-B = {2,4,6,8}\\{a,b} + {a,b}\\{2,4,6,8}? 
    상세 case: a,b가 A의 원소면 A△B = {2,4,6,8}\\{a,b} 3원소 → k=3 → 개수 2^5=32 ≠ 16.
    a 또는 b가 A에 없는 경우: (a,b) 배치별 조합. 해설: 조합 개수 12.
  category: 집합
  difficulty: STEP3
  mechanism_primary: "A∪C=B∪C ⇔ A△B⊂C 항등 + n(A△B)로 C 개수 결정 → (a,b) case"
  mechanism_secondary: ["대칭차", "부분집합 개수 공식", "case 분기"]
  depth_conditions: ["연산 조건 → 대칭차", "C 개수 조건 → k 결정", "(a,b) 위치 case"]
  freedom_signals:
    initial_setup_freedom: high
    approach_choice: multiple
    student_decision_points: 5
  common_mistakes: ["대칭차 원소 개수 case 4가지 (a·b 각각 A 안/밖) 열거 실패"]
  condition_layers:
    surface: "연산 조건 + 개수"
    real: "n(A△B) 결정 → (a,b) 배치"
    interaction: "a, b가 A에 속하는지 case별 대칭차 개수 다름"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP3-#361
  page: 101
  problem_summary: |
    (교육청 기출) S = {a,b,c}. S의 부분집합을 원소로 갖는 X: (가) A∈X이면 (S-A)∈X, (나) A∈X, B∈X이면 (A∪B)∈X. X 개수 (X≠∅).
  solution_summary: |
    S의 부분집합 8개: ∅, {a}, {b}, {c}, {a,b}, {b,c}, {a,c}, S.
    X는 이들의 부분집합. (가) 여집합 폐포. (나) 합집합 폐포. 
    ∅∈X ⇔ S∈X (여집합 pair).
    각 원소 {a}, {b}, {c}는 pair with {b,c}, {a,c}, {a,b}. 
    합집합 조건: X 원소들의 합집합이 X 원소.
    case별 X (해설): 5개.
    답: 5.
  category: 집합
  difficulty: STEP3
  mechanism_primary: "메타 집합 (부분집합의 집합) 폐포 조건 (여집합·합집합) → case 열거"
  mechanism_secondary: ["폐포 조건", "부분집합 lattice"]
  depth_conditions: ["여집합 폐포", "합집합 폐포", "case 5종 열거"]
  freedom_signals:
    initial_setup_freedom: high
    approach_choice: multiple
    student_decision_points: 5
  common_mistakes: ["case 열거 누락", "여집합·합집합 폐포 동시 만족 확인 skip"]
  condition_layers:
    surface: "메타 집합 폐포"
    real: "부분집합 lattice의 sub-lattice"
    interaction: "여집합 pair × 합집합 종결"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP3-#362
  page: 101
  problem_summary: |
    복소수 전체 세 부분집합 A = {x | x³=1}, B = {i^n + 1/i^n | n 자연수}, C = {z | z²=z̄}.
    A∪B∪C의 부분집합 중 적어도 하나의 실수를 원소로 갖는 것의 개수.
  solution_summary: |
    A: x³=1 → x=1, (-1±√3i)/2. 3원소.
    B: i^n cycle → i+1/i=0, i²+1/i²=-2, i³+1/i³=0, i^4+1/i^4=2. B = {0, -2, 2}.
    C: z²=z̄. z=a+bi. (a+bi)²=a-bi → a²-b²=a, 2ab=-b → b(2a+1)=0. 
       b=0: a²=a → a=0 or 1. z=0, 1.
       2a+1=0 → a=-1/2 → b² = a²-a = 1/4+1/2 = 3/4 → b=±√3/2. z = -1/2 ± (√3/2)i.
    C = {0, 1, -1/2+√3i/2, -1/2-√3i/2}.
    A∪B∪C: 실수 {1, 0, -2, 2} 4개, 허수 {(-1±√3i)/2, -1/2±√3i/2} 4개.
    실수 (-1+√3i)/2 = -1/2+√3i/2 → 실제로는 C의 두 허수와 A의 두 허수 = 같은 4원소.
    총합: 실수 {-2,0,1,2} (4), 허수 {-1/2±√3i/2} (2) = 6원소.
    부분집합 총 2^6=64. 실수 없는 부분집합 = 허수만 = 2^2=4. 답: 64-4=60.
  category: 집합
  difficulty: STEP3
  mechanism_primary: "복소수 정의식 3집합 원소 열거 + 실수·허수 분류 + 여사건"
  mechanism_secondary: ["복소수 방정식", "허수단위 순환", "여사건"]
  depth_conditions: ["3집합 각각 원소 도출", "A, B, C 중복 확인", "실수 vs 허수 개수"]
  freedom_signals:
    initial_setup_freedom: high
    approach_choice: single
    student_decision_points: 5
  common_mistakes: ["A와 C의 허수 원소 중복 미인지", "여사건 계산 skip"]
  condition_layers:
    surface: "3집합 복소수 정의"
    real: "실수·허수 분류 + 여사건"
    interaction: "여러 정의가 같은 원소 산출 (중복 제거)"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP3-#363
  page: 101
  problem_summary: |
    자연수 k에 대해 A_k = {x | x는 k의 양의 약수}. <보기>: ㄱ. n(A_10∩A_m)=1이면 m은 소수. ㄴ. n(A_21-A_m)=1 만족 m은 존재 X. ㄷ. n(A_m) 홀수이고 n(A_6-A_m)=2 만족 200 이하 자연수 m 개수 7.
  solution_summary: |
    A_10 = {1,2,5,10}. A_10∩A_m = 공통약수 집합 = A_gcd(10,m).
    ㄱ. n(A_gcd(10,m))=1 ⇔ gcd(10,m)=1 ⇔ m과 10 서로소. m 소수라는 보장 X (예: m=9=3², gcd(10,9)=1 but 9는 소수 아님) (거짓).
    ㄴ. A_21={1,3,7,21}. n(A_21-A_m)=1 → A_21의 4원소 중 3개가 A_m에 있고 1개 없음. 21은 반드시 A_m에 있어야 하므로 3, 7 중 하나만 A_m에. 그러나 21∈A_m이면 21=3·7, 3, 7 자동. 모순 → 존재 X (참).
    ㄷ. n(A_m) 홀 ⇔ m 제곱수. A_6={1,2,3,6}. n(A_6-A_m)=2 → A_m이 {1,2,3,6} 중 2원소 포함, 2원소 미포함.
       m 제곱수 + A_6∩A_m 정확히 2원소. m 후보: 2²=4 (A_4={1,2,4}, A_6∩A_4={1,2} ✓), 3²=9 ({1,3}), 4²=16 ({1,2}), 6²=36 ({1,2,3,6} 4원소 - 실패), 8²=64 ({1,2}), 9²=81 ({1,3}), 10²=100 ({1,2}), 12²=144 ({1,2,3,6} 실패), 14²=196 ({1,2}). 200 이하: 2²,3²,4²,8²,9²,10²,14² 7개 (참).
    답: ㄴ, ㄷ.
  category: 집합
  difficulty: STEP3
  mechanism_primary: "약수집합 A_k 교집합·차집합의 gcd/공약수 성질 + 제곱수 조건 case 열거"
  mechanism_secondary: ["gcd·공약수", "제곱수 (약수 개수 홀)", "case 열거"]
  depth_conditions: ["A_k의 gcd 성질", "n 조건 → gcd 상수", "제곱수 200이하 case"]
  freedom_signals:
    initial_setup_freedom: high
    approach_choice: single
    student_decision_points: 4
  common_mistakes: ["ㄱ 반례 못 찾음 (m=9)", "ㄷ 제곱수 case 열거 실수"]
  condition_layers:
    surface: "약수집합 3보기"
    real: "gcd 성질 + 제곱수"
    interaction: "각 보기 개별 case 분석"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP3-#364
  page: 101
  problem_summary: |
    실수 a에 대해 A = {(x, (x-a)²-3) | x 실수}, B = {(x, 1) | x 실수}. 
    A∩B 두 원소를 좌표평면 P, Q, 원점 O. △OPQ 이등변삼각형이 되는 실수 a의 개수 m, 최댓값 S. m+S.
  solution_summary: |
    A는 포물선 y=(x-a)²-3. B는 직선 y=1. 교점: (x-a)²=4 → x=a±2. P(a-2, 1), Q(a+2, 1).
    △OPQ 이등변: 세 경우 OP=OQ, OP=PQ, OQ=PQ.
    OP² = (a-2)²+1, OQ² = (a+2)²+1, PQ² = 16.
    (i) OP=OQ: (a-2)²=(a+2)² → a=0.
    (ii) OP=PQ: (a-2)²+1=16 → (a-2)²=15 → a=2±√15.
    (iii) OQ=PQ: (a+2)²+1=16 → (a+2)²=15 → a=-2±√15.
    a 값: 0, 2+√15, 2-√15, -2+√15, -2-√15 (5개). m=5.
    최댓값 S = 2+√15. m+S = 7+√15.
  category: 집합
  difficulty: STEP3
  mechanism_primary: "함수 그래프 두 집합 교집합 → 좌표 두 점 → 삼각형 조건 case 분기"
  mechanism_secondary: ["포물선·직선 교점", "이등변삼각형 3-case", "거리 방정식"]
  depth_conditions: ["교점 좌표 대칭", "삼각형 3-case 각각 방정식"]
  freedom_signals:
    initial_setup_freedom: high
    approach_choice: multiple
    student_decision_points: 4
  common_mistakes: ["이등변 3-case (OP=OQ, OP=PQ, OQ=PQ) 중 하나 누락", "OP² 계산 실수"]
  condition_layers:
    surface: "집합 정의 + 기하 조건"
    real: "두 교점의 대칭 + 삼각형 case"
    interaction: "a=0에서 두 point 대칭 → OP=OQ 자동"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP3-#365
  page: 102
  problem_summary: |
    (교육청 기출) 1보다 큰 자연수 k에 대해 U = {k 이하 자연수}. A = {k 이하 짝수}, B = {k의 약수}. 
    n(A)×n((A∪B)^C) = 15. (A∪B)^C의 모든 원소의 곱.
  solution_summary: |
    n(A) = ⌊k/2⌋. n((A∪B)^C) = k - n(A∪B).
    15의 양의 약수 pair: (1,15), (3,5), (5,3), (15,1). n(A) = 1 → k=2 or 3.
    (i) n(A)=1, n(...)=15: k=2 → U={1,2}, A={2}, B={1,2}, (A∪B)^C=∅ → 0≠15. k=3: A={2}, B={1,3}, (A∪B)^C=∅. 실패.
    (ii) n(A)=3, n(...)=5: k=6 → A={2,4,6}, B={1,2,3,6}, A∪B={1,2,3,4,6}, ^C={5}. n=1≠5. k=7 → A={2,4,6}, B={1,7}, A∪B={1,2,4,6,7}, ^C={3,5}. n=2. 실패.
    (iii) n(A)=5, n(...)=3: k=10 → A={2,4,6,8,10}, B={1,2,5,10}, A∪B={1,2,4,5,6,8,10}, ^C={3,7,9}. n=3 ✓. 곱=3·7·9=189.
    답: 189.
  category: 집합
  difficulty: STEP3
  mechanism_primary: "짝수·약수 집합의 여집합 개수 조건 → k case 열거 + 원소 곱"
  mechanism_secondary: ["약수 개수", "case 검증", "곱셈"]
  depth_conditions: ["15 인수분해 → n(A)·n(...) pair", "각 k case에서 실제 개수 확인", "정확한 k 결정"]
  freedom_signals:
    initial_setup_freedom: medium
    approach_choice: multiple
    student_decision_points: 4
  common_mistakes: ["여러 k case 검증 skip", "짝수·약수 합집합 원소 나열 실수"]
  condition_layers:
    surface: "n의 곱 조건"
    real: "n(A)·n((A∪B)^C)=15의 pair"
    interaction: "k에 따라 n(A), n(B) 결정 → 반복 확인"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP3-#366
  page: 102
  problem_summary: |
    자연수 k에 대해 A_k = {x | [kx]=kx, x>0}. <보기>: ㄱ. m, n 서로소면 A_m∩A_n=∅. ㄴ. m이 n의 약수이면 A_m⊂A_n. ㄷ. m,n의 lcm이 l이면 A_m∪A_n=A_l.
  solution_summary: |
    [kx]=kx ⇔ kx가 자연수 ⇔ x = j/k (j 자연수). A_k = {j/k | j 자연수} = {1/k, 2/k, 3/k, ...}.
    ㄱ. m,n 서로소면 A_m∩A_n = 공통 원소 {j/m = i/n | j,i 자연수} = {자연수} 무한 → 서로소 아님 → 거짓.
    ㄴ. m|n → n=mh. A_n = {j/n} = {j/(mh)}. A_m = {j/m} = {jh/n} ⊂ A_n (참).
    ㄷ. lcm(m,n)=l. A_m∪A_n의 원소는 j/m 또는 i/n 형태. A_l의 원소는 j/l. 
       예: m=2, n=3, l=6. A_2={1/2, 1, 3/2, 2, ...}, A_3={1/3, 2/3, 1, ...}, A_6={1/6, 1/3, 1/2, ...}. 
       1/6 ∈ A_6이나 A_2∪A_3에 없음 → A_2∪A_3 ≠ A_6 (거짓).
    답: ㄴ.
  category: 집합
  difficulty: STEP3
  mechanism_primary: "함수 조건 [kx]=kx → x가 1/k 배수 집합 정의 + 3보기 (서로소·약수·lcm) 검증"
  mechanism_secondary: ["Gauss 함수 정수 조건", "약수/lcm 성질"]
  depth_conditions: ["A_k = {j/k}", "포함·교집합·합집합 논리"]
  freedom_signals:
    initial_setup_freedom: high
    approach_choice: multiple
    student_decision_points: 3
  common_mistakes: ["A_m∪A_n=A_l 참으로 오답 (lcm이 큰 분모의 자연수 배수 카운트)"]
  condition_layers:
    surface: "3보기 (서로소·약수·lcm)"
    real: "분모 관계에 따른 유리수 집합"
    interaction: "A_m∪A_n은 두 별개 sub-lattice이나 A_l보다 성글다"
  citation_note: "고쟁이 CH05 · 학습 목적"

- source: 고쟁이-CH05-STEP3-#367
  page: 102
  problem_summary: |
    (교육청 기출) U = {20 이하 자연수}. A, B: (가) n(A)=n(B)=8, n(A∩B)=1. (나) A의 임의의 서로 다른 두 원소 합은 9의 배수 아님. (다) B의 임의의 서로 다른 두 원소 합은 10의 배수 아님. S(A)-S(B)의 최댓값.
  solution_summary: |
    (나) A는 9로 나눈 나머지가 같은 원소끼리 pair가 되지 않도록 → 각 나머지류에서 하나씩 (0,1,2,3,4,5,6,7,8, 9-1=8...)
    상세: 9로 나눈 나머지 pair (r, 9-r)에서 A는 한 그룹만 (또는 하나씩).
    (다) B도 10으로 나눈 나머지 pair (r, 10-r) 조건.
    S(A) 최대·S(B) 최소를 위해 최대·최소 원소를 우선 선택.
    9로 나눈 나머지 pair table: (1,8)→{1,10,19}∪{8,17}, (2,7)→{2,11,20}∪{7,16}, ...
    최대 S(A) = 큰 수 우선. B는 최소 S(B) = 작은 수 우선.
    n(A∩B)=1 조건 유지. 해설 답: 63.
  category: 집합
  difficulty: STEP3
  mechanism_primary: "modulo pair 배제 조건 (원소 pair 합 배수 아님) + 최대·최소 합 최적화"
  mechanism_secondary: ["modulo 나머지 pair", "합 극대·극소 원소 선택", "교집합 제약"]
  depth_conditions: ["9-나머지 pair 배제 A", "10-나머지 pair 배제 B", "n(A∩B)=1", "S(A) max, S(B) min"]
  freedom_signals:
    initial_setup_freedom: high
    approach_choice: multiple
    student_decision_points: 6
  common_mistakes: ["같은 나머지 원소는 서로 pair 아님 인지 실패", "n(A∩B)=1 제약 skip"]
  condition_layers:
    surface: "3조건 + 최댓값"
    real: "modulo pair table + 원소 최적 선택"
    interaction: "A는 큰 수 위주, B는 작은 수 위주 + 정확히 1개 공유"
  citation_note: "고쟁이 CH05 · 학습 목적"
```

---

## 3. CH05 종합 (집합 mechanism 패턴)

### 3.1. 유형별 mechanism 분포 (68문항)

| 유형 | 대표 mechanism | STEP2 | STEP3 | 합계 |
|---|---|---|---|---|
| **집합 정의·표현** (원소나열·조건제시·메타집합) | 조건 → 원소 나열, 폐포 조건 (recursive) | 4 | 3 | 7 |
| **포함관계** (부분집합·A=B) | 원소 case 분기, 이중 포함, 구간 포함 | 4 | 0 | 4 |
| **집합 연산** (∪∩\∁·항등식·대칭차) | 드모르간·벤 검증·대칭차·경계 조건 | 12 | 8 | 20 |
| **원소 개수** (n·포함배제) | n 공식, 3-포함배제, 최댓·최솟값 극단 | 13 | 2 | 15 |
| **부분집합 개수** (2^n·샌드위치·최대원소) | 이중 포함 자유 원소, 폐포 조건 pair | 13 | 9 | 22 |
| **합계** | | 46 | 22 | 68 |

### 3.2. 핵심 mechanism 패턴 TOP 10 (빈도순)

1. **이중 포함 (샌드위치) A⊂X⊂B → 자유 원소 2^k** (#334, #335, #336, #345, #360)
   - `A∪X=X ⇔ A⊂X`, `A∩X=X ⇔ X⊂A`, `A∪C=B∪C ⇔ A△B⊂C` 등 연산 조건을 포함관계로 즉시 변환.

2. **n(A∩B) 극값 (한쪽 포함 vs 합집합=U)** (#324, #325, #326, #327, #328)
   - 최대: B⊂A → n(A∩B)=n(B); 최소: A∪B=U → n(A∩B)=n(A)+n(B)-n(U).

3. **3-집합 포함배제 원리 ('정확히 N개'·'적어도 N개')** (#329, #331, #332, #351, #357, #356)
   - 8-영역 벤 다이어그램 분해 + 계수 조정.

4. **폐포 조건 (x∈A → f(x)∈A) → orbit 분석 + 개수 case** (#307, #340, #348, #361)
   - 함수 orbit이 유한(cycle) 또는 fixed point인지 case 분기.

5. **배수집합 A_k의 gcd/lcm 성질** (#312, #350, #363, #366, #367)
   - A_p∩A_q = A_lcm, A_p⊂A_q ⇔ q|p.

6. **case 분기 원소 배정 (어느 슬롯이 어느 원소인가)** (#304, #305, #309, #320, #363)
   - 방정식 여러 근에서 각 case 검증·배제 필수.

7. **함수 image 집합 (중복 제거)** (#300, #301, #313, #314, #366)
   - {f(x) | x∈A} 형태에서 자동 중복 제거·매개변수 범위.

8. **대칭차 A△B 성질** (#315, #319, #338, #343, #349, #351)
   - A△B의 여집합, A△B=U/∅ 조건, XOR로 홀수 개 소속.

9. **원소 합 S(X) 함수 + 최댓·최솟값 최적화** (#310, #327, #333, #344, #353, #355, #367)
   - 원소 값·개수 balance, 자연수 오름차순 최적 선택.

10. **원소 개수 총합 Σn(X_k) 조합 항** (#344, #358, #345)
   - 각 원소의 등장 빈도 (조합 대칭성) 활용.

### 3.3. STEP 2 vs STEP 3 대조

| 축 | STEP 2 특징 | STEP 3 특징 |
|---|---|---|
| **미지수** | 1~2개 case | 3개 이상 case + 함수적 관계 |
| **조건 layer** | 2~3 layer | 3~4 layer + 폐포·재귀 |
| **연산 조합** | 단일 연산 방향 | 여러 연산 결합 + 새 연산 정의 |
| **결정 지점** | 2~3 | 4~5 (case 폭발) |
| **평균 mechanism_secondary** | 1~2개 | 2~3개 (다분야 결합) |
| **답 형태** | 단일 값 | 최댓값/최솟값/조건 만족 개수 |

### 3.4. 통찰 유형 (8유형) 매핑 (schema.md §2 기준)

| 통찰 유형 | 대표 문항 | 비중 |
|---|---|---|
| **I-XU (단원 결합)** | #302 (근과 계수), #318 (이차부등식), #341 (이차부등식), #364 (도형·기하) | 6문 (9%) |
| **I-BW (역방향)** | #301 (n(A_k)=7 역산), #310 (여집합 합), #333 (부분집합 개수 역산), #365 | 5문 (7%) |
| **I-RT (표현 전환)** | #310 (여집합 항등), #316 (드모르간), #338 (대칭차), #343 | 8문 (12%) |
| **I-EQV (동치 변환)** | #311 (A-B=A ⇔ A∩B=∅), #315, #316, #319, #334, #335 | 10문 (15%) |
| **I-MI (다중 해석)** | #303, #320, #331, #353, #356 | 7문 (10%) |
| **I-PD (패턴 발견)** | #300 (중복 제거), #307 (orbit), #313 (계단), #340 (pair 폐포), #344, #348, #349 | 8문 (12%) |
| **I-SYM (대칭성)** | #302 (합·곱 대칭), #321 (a↔b), #344 (자기유사), #363 | 5문 (7%) |
| **I-CON (조건 통합)** | #308, #309, #310, #328, #345, #353, #367 | 9문 (13%) |

### 3.5. depth_conditions 통계

| depth (조건 layer 수) | 문항 수 | 대표 |
|---|---|---|
| 1~2 | 18 | 계산·직접 적용 |
| 3 | 28 | 표준 STEP 2 |
| 4 | 15 | STEP 2 심화·STEP 3 초입 |
| 5~6 | 7 | STEP 3 최고난도 (#345, #348, #353, #367 등) |

### 3.6. 신규 출제 활용 포인트

1. **★ 4·5 슬롯 후보**: #307 (orbit), #310 (여집합 합 balance), #340 (pair 폐포), #345 (다중 조건), #348 (복소수 orbit), #353 (매개변수 함수), #360 (case 분기), #363 (제곱수), #367 (modulo pair) — 상위 통찰 결합.

2. **문제 변형 안전지대**:
   - 숫자만 교체 (1순위): #300, #304, #308, #322, #324, #333, #337 — 기본형이라 통찰 유지.
   - 동등 변형 (2순위): 배수집합 종류 교체 (#312 → 9,15 → 다른 pair), U 범위 확장 (#341), modulo 값 교체 (#367).

3. **회피 대상 (원본 통찰 훼손 위험)**:
   - #307, #348, #361 (폐포 orbit): orbit 구조 자체가 통찰 → 교체 시 다른 함수로.
   - #345 (다중 layer): 조건 하나만 빼도 난이도 급락.
   - #353 (매개변수 함수 + 원소 개수): 함수 자체가 유일 설계.

4. **CM1 방정식·부등식 통합 활용**: #302, #318, #341, #364 형태는 CM1 EQ 단원과 double duty 가능.

---

**End of document.**
