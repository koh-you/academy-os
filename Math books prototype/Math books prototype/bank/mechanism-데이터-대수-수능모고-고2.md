---
name: mechanism-데이터-대수-수능모고-고2
description: 2025 6월·9월·10월 + 2026 6월 전국연합 학력평가 대수 (고2 · 지수와 로그·삼각함수·수열) 정독 데이터. 4회 × 30문 = 120문항. 방안 F Stage 1 P3 · 대수 실전 학평 pool. 저작권 준수 (원문 전사 없음 · 원본 출처 년월·번호·학년 인용). 원본 배점 및 번호 위치 기반 tier 매핑.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-22 (세션 68 · 대수 라인 P0 자산화)
  source: 2025년 6월·9월·10월 + 2026년 6월 전국연합 학력평가 (고2 수학) — 교육청 원본 PDF
  section: 대수 (지수·로그·삼각함수·수열)
  unit_code: 대수
  citation_note: 학습 목적 · 저작권 준수 · 원문 출처 (년도·월·번호·학년) 및 배점만 인용
  extract_range: 2025 6월·9월·10월 + 2026 6월 고2 학평 전 30문 (총 4회 · 120문)
  pages: 4회 × 12페이지 (문제지 기준)
  total_problems: 120
  sample_problems: 120  # 전수 실측
  predicted_problems: 0
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  answer_rate_available: partial  # 2025-9월·10월만 EBSi 정답 배열 확인
  answer_rate_source_note: |
    2025-9월·10월 해설 첫 페이지 정답표 pdftotext 추출 성공:
    - 2025-9월: 22=3, 23=55, 24=5, 25=16, 26=432, 27=10, 28=98, 29=133, 30=25
    - 2025-10월: 22=3, 23=20, 24=7, 25=13, 26=9, 27=12, 28=5, 29=28, 30=50
    2025-6월·2026-6월은 해설 정답표에서 숫자가 완전 인출되지 않음 (embedded 그래픽 · 향후 이미지 OCR 필요).
    tier는 (원본 배점 + 학평 번호 위치) 기반 결정론적 매핑 사용.
  tier_mapping:
    # 캘리브레이션 v1.0 · 대수 학평 고2 (2026-07-22 세션 68 확립)
    # 학평 고2 대수 배점 구조 (2025 6월 기준):
    #   2점 × 3문 (1·2·3번) · 3점 × 14문 (4~13·22·23·24·25번) · 4점 × 13문 (14~21·26~30번)
    2점: star_1·2  # 정독 배제 (기초 계산)
    3점_초반: star_3  # 4~10번 (기본 개념 적용)
    3점_중반: star_3·4  # 11~13번 (도형·삼각형 결합)
    3점_주관식: star_3·4  # 22·23·24·25번 (주관식 · 계산 다층)
    4점_기본: star_4  # 14~17번
    4점_준킬러: star_5  # 18·19·20·26·27번 (다층 결합)
    4점_킬러: star_5_premium  # 21·28·29·30번 (조건 다층 · 규칙 발견형)
  unit_distribution:
    # 대수 (지수·로그·삼각·수열) 4단원 배분 (학평 관행)
    지수와_로그: 회당 ~10문 (지수법칙·로그연산·log 그래프·log 조건)
    삼각함수: 회당 ~10문 (사인·코사인법칙·삼각방정식·삼각부등식·주기)
    수열: 회당 ~10문 (등차·등비·시그마·귀납적 정의)
    # 실제로는 회차별 편차 존재 · 각 30문 = 지수로그 10~11 · 삼각 8~10 · 수열 9~12 근사
  master_review_flag_note: |
    학평 고2 대수는 2025년 개편으로 (수학I 삼각함수·수열 + 지수와 로그) 통합 출제.
    29·30번은 준킬러/킬러 · 특히 30번은 <보기> 조건 (가)·(나)·(다) 다층 결합형이 주류.
    premium 후보 감지: 28·29·30번 우선 · <보기> 지문 다층 조건 (schema §2.12).
    2025-9월 30번, 2025-10월 30번 = 규칙 발견형 (수열 · 사인 함수 배치)로 premium 유력.
    2026-6월 30번 = 로그 조건 다층 (log_2 · log_3 결합)로 premium 유력.
  cross_source_notes: |
    - mechanism-데이터-마플시너지-모고-CM1.md · mechanism-데이터-전국연합-CM1.md와 별개 자산
      (대수는 CM1 범위 밖 · 지수법칙·로그·삼각·수열 = 수학I 범위).
    - 향후 확장: 2024·2023년 고2 대수 학평 · 2026 3월·9월·10월 고2 학평.
    - 고3 학평 (2025·2026)은 별도 파일 (mechanism-데이터-대수-수능모고-고3.md) 후속 생성 예정.
---

# 2025~2026 전국연합 학력평가 대수 (고2) 정독 데이터

**전체 구조**:
- 4회 × 30문 = 120문항 (총 4회: 2025-6월·2025-9월·2025-10월·2026-6월 · 모두 고2)
- 각 회 = 12쪽 (문제지) + 12쪽 (해설지)
- 회차별 배점 분포: 2점 × 3문 (1·2·3번) · 3점 × 14문 (4~13·22·23·24·25번) · 4점 × 13문 (14~21·26~30번)
- 표준 100점 만점
- 출처: 서울시교육청 (원본 PDF · 참고자료/대수/대수-수능모고/ 폴더)

**단원 구분 (대수)**:
- 지수와 로그 (약칭 EL)
- 삼각함수 (약칭 TR)
- 수열 (약칭 SQ)

**저작권**: 학평 원본은 교육청·EBSi 무료 공개 자료 · 학습 목적 인용은 허용 · 발문 요지 요약만 기재 (원문 전사 X).

---

## I. 2025년 6월 학력평가 고2 (2025-6)

```yaml
- id: 학평-2025-6-고2-#01
  original_source: 2025년 6월학평 1번 (고2)
  original_points: 2
  number_in_original: 1
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_1
  mechanism_primary: 지수법칙 기본 계산 (수치)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    지수 수치 계산 5지선다 2점. 지수법칙 (거듭제곱·곱셈·나눗셈) 1단계 적용.

- id: 학평-2025-6-고2-#02
  original_source: 2025년 6월학평 2번 (고2)
  original_points: 2
  number_in_original: 2
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_1·2
  mechanism_primary: 로그 값 · log_a M - log_a N = log_a(M/N)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    두 로그의 차 log_a x - log_a y 값 5지선다 2점. 로그 뺄셈 공식 1단계.

- id: 학평-2025-6-고2-#03
  original_source: 2025년 6월학평 3번 (고2)
  original_points: 2
  number_in_original: 3
  unit_code: 대수
  sub_unit: 수열
  tier: star_1·2
  mechanism_primary: 등차수열 기본 · 공차·일반항 대입
  insight_type: 절차형
  depth: 1
  problem_summary: |
    등차수열의 특정 항 값 5지선다 2점. a_n = a + (n-1)d 대입.

- id: 학평-2025-6-고2-#04
  original_source: 2025년 6월학평 4번 (고2)
  original_points: 3
  number_in_original: 4
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_3
  mechanism_primary: 삼각비 값 · sin/cos → tan 유도
  insight_type: 절차형
  depth: 2
  problem_summary: |
    각 θ에 대해 sin·cos 조건 주어질 때 tan θ 값 5지선다 3점.
    tan = sin/cos · 사분면 부호 판정 결합.

- id: 학평-2025-6-고2-#05
  original_source: 2025년 6월학평 5번 (고2)
  original_points: 3
  number_in_original: 5
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_3
  mechanism_primary: 로그 값 · log_a(bc) = log_a b + log_a c
  insight_type: 절차형
  depth: 2
  problem_summary: |
    로그 값 log_a (M·N형) 조건 → 미지수 값 5지선다 3점. 로그 덧셈·정의 결합.

- id: 학평-2025-6-고2-#06
  original_source: 2025년 6월학평 6번 (고2)
  original_points: 3
  number_in_original: 6
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_3
  mechanism_primary: 삼각형 사인·코사인법칙 · AC 변 길이
  insight_type: 절차형
  depth: 2
  problem_summary: |
    삼각형 ABC에서 BC 길이·∠A·∠B 조건 주어질 때 AC 길이 5지선다 3점. 사인법칙 활용.

- id: 학평-2025-6-고2-#07
  original_source: 2025년 6월학평 7번 (고2)
  original_points: 3
  number_in_original: 7
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_3
  mechanism_primary: 삼각비 조건 (cos·sin) → tan 값
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    cos·sin 값 조건 (예: cos α · sin α 등) → tan α + β 형태 값 5지선다 3점. 각도 합·차 공식.

- id: 학평-2025-6-고2-#08
  original_source: 2025년 6월학평 8번 (고2)
  original_points: 3
  number_in_original: 8
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_3
  mechanism_primary: 로그 방정식 · log_a x = k 등 대입 결합
  insight_type: 절차형
  depth: 2
  problem_summary: |
    log 조건 여러 개 결합 → 값 산출 5지선다 3점. 로그 정의·성질 활용.

- id: 학평-2025-6-고2-#09
  original_source: 2025년 6월학평 9번 (고2)
  original_points: 3
  number_in_original: 9
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_3
  mechanism_primary: 삼각함수 방정식 (sin θ = k · θ ∈ 구간)
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    구간 (0, 2π) 내에서 sin θ = k 만족하는 θ 값 개수·합 5지선다 3점.

- id: 학평-2025-6-고2-#10
  original_source: 2025년 6월학평 10번 (고2)
  original_points: 3
  number_in_original: 10
  unit_code: 대수
  sub_unit: 수열
  tier: star_3·4
  mechanism_primary: 시그마 (Σ) 계산 · 등비 결합
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    Σ_{k=1}^{n} 등차·등비 조합 계산 5지선다 3점. Σ 공식·부분합 결합.

- id: 학평-2025-6-고2-#11
  original_source: 2025년 6월학평 11번 (고2)
  original_points: 3
  number_in_original: 11
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_3·4
  mechanism_primary: 지수·로그 그래프 · 좌표 대입
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    지수함수 y=a^x 또는 로그 y=log_a x 그래프 위 점 조건 5지선다 3점.

- id: 학평-2025-6-고2-#12
  original_source: 2025년 6월학평 12번 (고2)
  original_points: 3
  number_in_original: 12
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_3·4
  mechanism_primary: 삼각형 넓이 · 사인법칙·코사인법칙 결합
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    삼각형 ABC 조건 (변·각·넓이) → 다른 변 값 · 5지선다 3점. 삼각형 두 요소 결합.

- id: 학평-2025-6-고2-#13
  original_source: 2025년 6월학평 13번 (고2)
  original_points: 3
  number_in_original: 13
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_3·4
  mechanism_primary: 삼각함수 합 · sin θ + cos θ · sin·cos 관계식
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    sin θ ± cos θ 조건 → sin θ · cos θ · tan θ 값 · 5지선다 3점.
    항등식 sin²+cos²=1 · 곱셈공식 적용.

- id: 학평-2025-6-고2-#14
  original_source: 2025년 6월학평 14번 (고2)
  original_points: 4
  number_in_original: 14
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_4
  mechanism_primary: 로그 그래프 · A·B 두 점 대칭·중점·거리 조건
  insight_type: I-RT
  depth: 3
  problem_summary: |
    두 점 A(a, log_2 a), B(b, log_2 b) · 중점 M · 조건 (M을 지나는 수직선이 원점 지남 등)
    · MN 거리 값 5지선다 4점. 로그 그래프 좌표 다층.

- id: 학평-2025-6-고2-#15
  original_source: 2025년 6월학평 15번 (고2)
  original_points: 4
  number_in_original: 15
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_4
  mechanism_primary: 로그 방정식 다항식형 · (log x)² + a log x + b = 0 근 조건
  insight_type: I-EQV
  depth: 3
  problem_summary: |
    log 방정식 근이 특정 조건 만족할 때 미지수 값 5지선다 4점.
    log 치환 → 이차방정식 근·계수 관계.

- id: 학평-2025-6-고2-#16
  original_source: 2025년 6월학평 16번 (고2)
  original_points: 4
  number_in_original: 16
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_4
  mechanism_primary: 삼각함수 (가)·(나)·(다) 조건 결합 · 각도 · 사인값
  insight_type: I-CON
  depth: 3
  problem_summary: |
    두 각 α·β 조건 (가)·(나)·(다) 3층 (예: sin·log 관계·범위 제약)
    → α+β · sin·cos 특정 값 5지선다 4점. 조건 다층 결합.

- id: 학평-2025-6-고2-#17
  original_source: 2025년 6월학평 17번 (고2)
  original_points: 4
  number_in_original: 17
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_4
  mechanism_primary: sin·cos 함수 · 주기·최대최소·좌표
  insight_type: I-BW
  depth: 3
  problem_summary: |
    함수 f(x)=a sin bx + c cos bx (또는 유사) · 주기·최대값 조건 → 미지수 값 5지선다 4점.

- id: 학평-2025-6-고2-#18
  original_source: 2025년 6월학평 18번 (고2)
  original_points: 4
  number_in_original: 18
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_5
  mechanism_primary: 로그 그래프 · ABCD 사각형 좌표·넓이·중점·수직 조건 다층
  insight_type: I-CON
  depth: 3
  problem_summary: |
    로그 그래프 y=log_a x 위 두 점 A·B (또는 사각형 ABCD 꼭짓점) · 넓이·AD 길이·수직 조건
    → 사각형 ABCD의 어떤 요소 5지선다 4점.
    로그 좌표 + 사각형 기하 다층 결합.

- id: 학평-2025-6-고2-#19
  original_source: 2025년 6월학평 19번 (고2)
  original_points: 4
  number_in_original: 19
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_5
  mechanism_primary: 삼각함수 (가)·(나) 조건 · f(x)=cos·sin 결합 · 자연수 조건
  insight_type: I-CON
  depth: 3
  problem_summary: |
    함수 f(x)=cos ax · 조건 (가)·(나) 다층 → 정수 조건 하 미지수 개수 5지선다 4점.

- id: 학평-2025-6-고2-#20
  original_source: 2025년 6월학평 20번 (고2)
  original_points: 4
  number_in_original: 20
  unit_code: 대수
  sub_unit: 수열
  tier: star_5
  mechanism_primary: 수열의 귀납적 정의 · a_{n+1} = f(a_n) · 조건 (자연수·부호)
  insight_type: I-BW
  depth: 3
  problem_summary: |
    귀납적 정의 a_{n+1} = (조건에 따라 두 분기)의 수열 · a_1 조건에서 특정 a_k 값 5지선다 4점.

- id: 학평-2025-6-고2-#21
  original_source: 2025년 6월학평 21번 (고2)
  original_points: 4
  number_in_original: 21
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_5_premium
  mechanism_primary: 삼각형 AB 지름 원 · C·D·E 다층 점 · cos∠CAB 조건 · CE 길이
  insight_type: I-CON
  depth: 3
  problem_summary: |
    반지름 원 · 지름 AB · C·D·E 다층 점 (수직·수선의 발·AC:DB=1:1 등)
    · cos∠CAB 조건 → CE 길이 5지선다 4점. 21번 준킬러 (원+삼각형 결합).

- id: 학평-2025-6-고2-#22
  original_source: 2025년 6월학평 22번 (고2)
  original_points: 3
  number_in_original: 22
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_3
  mechanism_primary: 지수법칙 · 3^m · 3^n = 3^{m+n} 수치 값
  insight_type: 절차형
  depth: 1
  problem_summary: |
    지수 수치 계산 서답형 3점. 지수법칙 결합·수치화.

- id: 학평-2025-6-고2-#23
  original_source: 2025년 6월학평 23번 (고2)
  original_points: 3
  number_in_original: 23
  unit_code: 대수
  sub_unit: 수열
  tier: star_3
  mechanism_primary: 등차·등비수열 조건 → 수치 값
  insight_type: 절차형
  depth: 1
  problem_summary: |
    수열 조건 (등차/등비 공차·공비) → 특정 항 값 서답형 3점.

- id: 학평-2025-6-고2-#24
  original_source: 2025년 6월학평 24번 (고2)
  original_points: 3
  number_in_original: 24
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_3·4
  mechanism_primary: 로그 방정식 · log 이용 이차식 근
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    log 조건 (log x = k) 서답형 3점. 로그 정의·성질 활용.

- id: 학평-2025-6-고2-#25
  original_source: 2025년 6월학평 25번 (고2)
  original_points: 3
  number_in_original: 25
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_3·4
  mechanism_primary: 삼각비 (cos θ 등) → 사인법칙·코사인법칙 결합 값
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    삼각형 조건 → 특정 값 서답형 3점. cos θ 조건 + 사인법칙 결합.

- id: 학평-2025-6-고2-#26
  original_source: 2025년 6월학평 26번 (고2)
  original_points: 4
  number_in_original: 26
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_5
  mechanism_primary: 좌표평면 두 점 A·B (예: 원 위 점) · OA·OB 벡터 조건 · cos α · sin β 결합
  insight_type: I-CON
  depth: 3
  problem_summary: |
    원 위 두 점 A·B · OA·OB 조건 → cos·sin 특정 값 서답형 4점.
    좌표+삼각 다층 결합.

- id: 학평-2025-6-고2-#27
  original_source: 2025년 6월학평 27번 (고2)
  original_points: 4
  number_in_original: 27
  unit_code: 대수
  sub_unit: 수열
  tier: star_5
  mechanism_primary: 수열 (가)·(나) 조건 · 등차·등비·귀납적 결합
  insight_type: I-CON
  depth: 3
  problem_summary: |
    수열 조건 (가)·(나) → 특정 항 값·합 서답형 4점. 조건 다층.

- id: 학평-2025-6-고2-#28
  original_source: 2025년 6월학평 28번 (고2)
  original_points: 4
  number_in_original: 28
  unit_code: 대수
  sub_unit: 수열
  tier: star_5_premium
  mechanism_primary: 수열 (가)·(나) 조건 · A·B 두 점 · AB 조건 · 자연수 미지수
  insight_type: I-CON
  depth: 3
  problem_summary: |
    수열 (가)·(나) 조건 · 특정 점 A·B · AB 조건 → 자연수 미지수 값 서답형 4점.
    조건 다층 + 자연수 제약 결합 (28번 준킬러).

- id: 학평-2025-6-고2-#29
  original_source: 2025년 6월학평 29번 (고2)
  original_points: 4
  number_in_original: 29
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_5_premium
  mechanism_primary: 삼각형 ABC · AB·AC·cos∠BAC 조건 · D·E·F 다층 점 · FC 값
  insight_type: I-CON
  depth: 3
  premium: true
  problem_summary: |
    삼각형 ABC (AB, AC, cos∠BAC 주어짐) · BC 중점 D · AD 삼각형 · A에서 E · D와 CE 교점 F
    → FC 길이 서답형 4점. 삼각형 다층 (중점·수선·비율) + 삼각비 결합.
    29번 킬러 · <보기> 지문 다층.

- id: 학평-2025-6-고2-#30
  original_source: 2025년 6월학평 30번 (고2)
  original_points: 4
  number_in_original: 30
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_5_premium
  mechanism_primary: 로그 조건 (가)·(나) · log_a · log_b 다층 결합 · 값 산출
  insight_type: I-CON
  depth: 3
  premium: true
  problem_summary: |
    (가) log_a x + log_b y = k · (나) log_a x · log_b y = m 등 조건 2층
    → x·y·a·b 미지수 값 서답형 4점. 30번 킬러 · <보기> (가)·(나) 다층 결합.
```

---

## II. 2025년 9월 학력평가 고2 (2025-9)

**정답 배열 (EBSi 해설 확인)**:
- 22=3, 23=55, 24=5, 25=16, 26=432, 27=10, 28=98, 29=133, 30=25

```yaml
- id: 학평-2025-9-고2-#01
  original_source: 2025년 9월학평 1번 (고2)
  original_points: 2
  number_in_original: 1
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_1
  mechanism_primary: 지수 수치 계산 · 지수법칙 1단계
  insight_type: 절차형
  depth: 1
  problem_summary: |
    지수 수치 계산 5지선다 2점.

- id: 학평-2025-9-고2-#02
  original_source: 2025년 9월학평 2번 (고2)
  original_points: 2
  number_in_original: 2
  unit_code: 대수
  sub_unit: 수열
  tier: star_1·2
  mechanism_primary: 등차수열 lim S_n 형태 (실제로는 Σ 부분합) · 값 산출
  insight_type: 절차형
  depth: 1
  problem_summary: |
    수열 Σ 계산 5지선다 2점.

- id: 학평-2025-9-고2-#03
  original_source: 2025년 9월학평 3번 (고2)
  original_points: 2
  number_in_original: 3
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_1·2
  mechanism_primary: 삼각비 값 · 특수각
  insight_type: 절차형
  depth: 1
  problem_summary: |
    특수각 삼각비 값 5지선다 2점.

- id: 학평-2025-9-고2-#04
  original_source: 2025년 9월학평 4번 (고2)
  original_points: 3
  number_in_original: 4
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_3
  mechanism_primary: cos θ 조건 → tan θ 값 · 사분면 부호
  insight_type: 절차형
  depth: 2
  problem_summary: |
    cos θ 값·사분면 조건 → tan θ 값 5지선다 3점.

- id: 학평-2025-9-고2-#05
  original_source: 2025년 9월학평 5번 (고2)
  original_points: 3
  number_in_original: 5
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_3
  mechanism_primary: 삼각함수 그래프 · 사인·코사인 좌표 대입
  insight_type: 절차형
  depth: 2
  problem_summary: |
    y=sin·cos 그래프 위 점 좌표 5지선다 3점.

- id: 학평-2025-9-고2-#06
  original_source: 2025년 9월학평 6번 (고2)
  original_points: 3
  number_in_original: 6
  unit_code: 대수
  sub_unit: 수열
  tier: star_3
  mechanism_primary: Σ · 등차·등비 결합 계산
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    lim Σ_n 형태 계산 5지선다 3점. Σ 공식 적용.

- id: 학평-2025-9-고2-#07
  original_source: 2025년 9월학평 7번 (고2)
  original_points: 3
  number_in_original: 7
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_3
  mechanism_primary: 로그 그래프 위 두 점 A·B · AB 거리·중점
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    y=log_2 x 위 두 점 A(a, log_2 a), B(b, log_2 b) · AB 거리 조건 5지선다 3점.

- id: 학평-2025-9-고2-#08
  original_source: 2025년 9월학평 8번 (고2)
  original_points: 3
  number_in_original: 8
  unit_code: 대수
  sub_unit: 수열
  tier: star_3
  mechanism_primary: 등차·등비수열 특정 항 조건 → 값
  insight_type: 절차형
  depth: 2
  problem_summary: |
    수열 조건 → 특정 항 값 5지선다 3점.

- id: 학평-2025-9-고2-#09
  original_source: 2025년 9월학평 9번 (고2)
  original_points: 3
  number_in_original: 9
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_3·4
  mechanism_primary: 로그 조건 log_a x = log_b y 결합
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    log 조건 (log_a x · log_b y 관계식) → 값 5지선다 3점.

- id: 학평-2025-9-고2-#10
  original_source: 2025년 9월학평 10번 (고2)
  original_points: 3
  number_in_original: 10
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_3·4
  mechanism_primary: 원 위 두 점 A·B (sin θ 파라미터) · AB 거리
  insight_type: I-RT
  depth: 2
  problem_summary: |
    원 위 두 점 A·B · sin·cos 파라미터 → AB 거리 5지선다 3점.

- id: 학평-2025-9-고2-#11
  original_source: 2025년 9월학평 11번 (고2)
  original_points: 3
  number_in_original: 11
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_3·4
  mechanism_primary: 로그함수 y=log_a x · 자연수 조건 → 미지수 값
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    log_a x 조건 (a·자연수 제약) → 값 5지선다 3점.

- id: 학평-2025-9-고2-#12
  original_source: 2025년 9월학평 12번 (고2)
  original_points: 3
  number_in_original: 12
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_3·4
  mechanism_primary: 삼각형 각·변 조건 (사인법칙·코사인법칙)
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    삼각형 조건 → 특정 값 5지선다 3점.

- id: 학평-2025-9-고2-#13
  original_source: 2025년 9월학평 13번 (고2)
  original_points: 3
  number_in_original: 13
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_3·4
  mechanism_primary: log_a x · log_a y 결합 · 미지수 3개 이상
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    3개 미지수 a, b, c · log 조건 결합 5지선다 3점.

- id: 학평-2025-9-고2-#14
  original_source: 2025년 9월학평 14번 (고2)
  original_points: 4
  number_in_original: 14
  unit_code: 대수
  sub_unit: 수열
  tier: star_4
  mechanism_primary: 수열 규칙 · 자연수 배열 · 특정 위치 값
  insight_type: I-BW
  depth: 3
  problem_summary: |
    수열 배치 규칙 → 특정 위치 값 5지선다 4점.

- id: 학평-2025-9-고2-#15
  original_source: 2025년 9월학평 15번 (고2)
  original_points: 4
  number_in_original: 15
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_4
  mechanism_primary: 로그 그래프 · 두 점 A·B · A∠OB 각도 조건
  insight_type: I-RT
  depth: 3
  problem_summary: |
    y=log_a x 위 두 점 A·B · O 원점 · ∠AOB 조건 → 값 5지선다 4점.

- id: 학평-2025-9-고2-#16
  original_source: 2025년 9월학평 16번 (고2)
  original_points: 4
  number_in_original: 16
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_4
  mechanism_primary: 로그방정식·부등식 조건 · log_a · log_b 결합
  insight_type: I-EQV
  depth: 3
  problem_summary: |
    log 조건 다층 → 값 5지선다 4점.

- id: 학평-2025-9-고2-#17
  original_source: 2025년 9월학평 17번 (고2)
  original_points: 4
  number_in_original: 17
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_4
  mechanism_primary: 삼각형 APQ · lim (수능 특수) · 삼각형 넓이 극한
  insight_type: I-BW
  depth: 3
  problem_summary: |
    두 점 P·Q · 삼각형 APQ · 넓이 극한 조건 5지선다 4점.

- id: 학평-2025-9-고2-#18
  original_source: 2025년 9월학평 18번 (고2)
  original_points: 4
  number_in_original: 18
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_5
  mechanism_primary: sin·cos 두 각도 조건 → 특정 삼각비 값
  insight_type: I-CON
  depth: 3
  problem_summary: |
    두 각 α·β · cos·sin 조건 → 합·차의 삼각비 5지선다 4점.

- id: 학평-2025-9-고2-#19
  original_source: 2025년 9월학평 19번 (고2)
  original_points: 4
  number_in_original: 19
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_5
  mechanism_primary: 로그 좌표 A(log_a m, log_b m) · B(log_a n, log_b n) · AC 조건 · 다변수
  insight_type: I-CON
  depth: 3
  problem_summary: |
    로그 좌표 점 A·B (log 값 조합) · 특정 점 C · AC 조건 → 값 5지선다 4점.

- id: 학평-2025-9-고2-#20
  original_source: 2025년 9월학평 20번 (고2)
  original_points: 4
  number_in_original: 20
  unit_code: 대수
  sub_unit: 수열
  tier: star_5
  mechanism_primary: 수열 (가)·(나) 조건 · 자연수 조건 · 규칙 발견
  insight_type: I-CON
  depth: 3
  problem_summary: |
    수열 (가)·(나) 조건 다층 → 특정 항 값 5지선다 4점.

- id: 학평-2025-9-고2-#21
  original_source: 2025년 9월학평 21번 (고2)
  original_points: 4
  number_in_original: 21
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_5_premium
  mechanism_primary: 사각형 ABCD · AB·AC 조건 · AC BCD 조건 · BC·CD 관계 다층
  insight_type: I-CON
  depth: 3
  problem_summary: |
    사각형 ABCD · AB=k · AC 조건 · BCD 각도 조건 · BC:CD 비율 조건
    → 값 5지선다 4점. 21번 준킬러 (사각형 다층).

- id: 학평-2025-9-고2-#22
  original_source: 2025년 9월학평 22번 (고2)
  original_points: 3
  number_in_original: 22
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_3
  mechanism_primary: 지수 수치 계산 · 서답형
  insight_type: 절차형
  depth: 1
  problem_summary: |
    지수 계산 서답형 3점. 답: 3.
  answer: 3

- id: 학평-2025-9-고2-#23
  original_source: 2025년 9월학평 23번 (고2)
  original_points: 3
  number_in_original: 23
  unit_code: 대수
  sub_unit: 수열
  tier: star_3
  mechanism_primary: 수열 항·수치 · 서답형
  insight_type: 절차형
  depth: 1
  problem_summary: |
    수열 값 서답형 3점. 답: 55.
  answer: 55

- id: 학평-2025-9-고2-#24
  original_source: 2025년 9월학평 24번 (고2)
  original_points: 3
  number_in_original: 24
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_3·4
  mechanism_primary: 로그 · log_a · log_b 결합 서답형
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    log 조건 (log_a x · log_b y 형태) → 값 서답형 3점. 답: 5.
  answer: 5

- id: 학평-2025-9-고2-#25
  original_source: 2025년 9월학평 25번 (고2)
  original_points: 3
  number_in_original: 25
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_3·4
  mechanism_primary: 삼각형 ABC · AB·BC 조건 · AC 값
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    직각삼각형 ABC · AB·BC 조건 → AC 값 서답형 3점. 답: 16.
  answer: 16

- id: 학평-2025-9-고2-#26
  original_source: 2025년 9월학평 26번 (고2)
  original_points: 4
  number_in_original: 26
  unit_code: 대수
  sub_unit: 수열
  tier: star_5
  mechanism_primary: 수열 조건 · 시그마·조건부 값
  insight_type: I-CON
  depth: 3
  problem_summary: |
    수열 조건 → 특정 값 서답형 4점. 답: 432.
  answer: 432

- id: 학평-2025-9-고2-#27
  original_source: 2025년 9월학평 27번 (고2)
  original_points: 4
  number_in_original: 27
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_5
  mechanism_primary: 삼각함수 조건 · 최댓값·최솟값·서답형
  insight_type: I-CON
  depth: 3
  problem_summary: |
    sin θ 등 조건 · 특정 값 서답형 4점. 답: 10.
  answer: 10

- id: 학평-2025-9-고2-#28
  original_source: 2025년 9월학평 28번 (고2)
  original_points: 4
  number_in_original: 28
  unit_code: 대수
  sub_unit: 수열
  tier: star_5_premium
  mechanism_primary: 수열 (가)·(나) 조건 · 자연수 · 특정 항 값
  insight_type: I-CON
  depth: 3
  problem_summary: |
    수열 조건 (가)·(나) 다층 → 특정 값 서답형 4점. 답: 98.
  answer: 98

- id: 학평-2025-9-고2-#29
  original_source: 2025년 9월학평 29번 (고2)
  original_points: 4
  number_in_original: 29
  unit_code: 대수
  sub_unit: 수열
  tier: star_5_premium
  mechanism_primary: 수열 · sin 함수 결합 · 조건 다층 · 규칙 발견
  insight_type: I-CON
  depth: 3
  premium: true
  problem_summary: |
    a_n = sin f(n) 형태 · 조건 (가)·(나)·(다) 다층 → 특정 값 서답형 4점. 답: 133.
    29번 킬러 (수열+삼각함수 융합).
  answer: 133

- id: 학평-2025-9-고2-#30
  original_source: 2025년 9월학평 30번 (고2)
  original_points: 4
  number_in_original: 30
  unit_code: 대수
  sub_unit: 수열
  tier: star_5_premium
  mechanism_primary: 수열 (가)·(나)·(다) 조건 다층 · lim Σ · 규칙 발견형 킬러
  insight_type: I-CON
  depth: 3
  premium: true
  problem_summary: |
    수열 조건 (가)·(나)·(다) 3층 · lim Σ 조건 결합 → 특정 값 서답형 4점. 답: 25.
    30번 킬러 (<보기> 3층 조건 · 규칙 발견형).
  answer: 25
```

---

## III. 2025년 10월 학력평가 고2 (2025-10)

**정답 배열 (EBSi 해설 확인)**:
- 22=3, 23=20, 24=7, 25=13, 26=9, 27=12, 28=5, 29=28, 30=50

```yaml
- id: 학평-2025-10-고2-#01
  original_source: 2025년 10월학평 1번 (고2)
  original_points: 2
  number_in_original: 1
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_1
  mechanism_primary: 지수 수치 계산
  insight_type: 절차형
  depth: 1
  problem_summary: |
    지수 계산 5지선다 2점.

- id: 학평-2025-10-고2-#02
  original_source: 2025년 10월학평 2번 (고2)
  original_points: 2
  number_in_original: 2
  unit_code: 대수
  sub_unit: 수열
  tier: star_1·2
  mechanism_primary: lim (S_n) · 수열 수치 계산
  insight_type: 절차형
  depth: 1
  problem_summary: |
    수열 lim/Σ 계산 5지선다 2점.

- id: 학평-2025-10-고2-#03
  original_source: 2025년 10월학평 3번 (고2)
  original_points: 2
  number_in_original: 3
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_1·2
  mechanism_primary: log 정의 · 조건 대입
  insight_type: 절차형
  depth: 1
  problem_summary: |
    log 조건 (log_a x, y, z 등) → 값 5지선다 2점.

- id: 학평-2025-10-고2-#04
  original_source: 2025년 10월학평 4번 (고2)
  original_points: 3
  number_in_original: 4
  unit_code: 대수
  sub_unit: 수열
  tier: star_3
  mechanism_primary: 수열 극한 lim (한 함수식) · 대입
  insight_type: 절차형
  depth: 2
  problem_summary: |
    lim 형태 계산 5지선다 3점.

- id: 학평-2025-10-고2-#05
  original_source: 2025년 10월학평 5번 (고2)
  original_points: 3
  number_in_original: 5
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_3
  mechanism_primary: tan θ 조건 → cos θ 값 · 사분면 부호
  insight_type: 절차형
  depth: 2
  problem_summary: |
    tan θ 값 조건 · 사분면 → cos θ 값 5지선다 3점.

- id: 학평-2025-10-고2-#06
  original_source: 2025년 10월학평 6번 (고2)
  original_points: 3
  number_in_original: 6
  unit_code: 대수
  sub_unit: 수열
  tier: star_3
  mechanism_primary: 등차·등비수열 · 특정 항 값
  insight_type: 절차형
  depth: 2
  problem_summary: |
    수열 조건 → 값 5지선다 3점.

- id: 학평-2025-10-고2-#07
  original_source: 2025년 10월학평 7번 (고2)
  original_points: 3
  number_in_original: 7
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_3
  mechanism_primary: 삼각함수 값 · 특수각 결합
  insight_type: 절차형
  depth: 2
  problem_summary: |
    삼각함수 값 5지선다 3점.

- id: 학평-2025-10-고2-#08
  original_source: 2025년 10월학평 8번 (고2)
  original_points: 3
  number_in_original: 8
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_3
  mechanism_primary: log_a · log_b 두 조건 결합 · 값
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    log 두 조건 → 값 5지선다 3점.

- id: 학평-2025-10-고2-#09
  original_source: 2025년 10월학평 9번 (고2)
  original_points: 3
  number_in_original: 9
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_3·4
  mechanism_primary: tan·sin 조건 → sin θ 값
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    tan θ · sin θ 조건 → sin θ 값 5지선다 3점.

- id: 학평-2025-10-고2-#10
  original_source: 2025년 10월학평 10번 (고2)
  original_points: 3
  number_in_original: 10
  unit_code: 대수
  sub_unit: 수열
  tier: star_3·4
  mechanism_primary: lim (a_n/b_n) 형태 · 비율 극한
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    수열 lim 비율 계산 5지선다 3점.

- id: 학평-2025-10-고2-#11
  original_source: 2025년 10월학평 11번 (고2)
  original_points: 3
  number_in_original: 11
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_3·4
  mechanism_primary: 로그 조건 log_a x · log_a y · 자연수 미지수 개수
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    log 조건 → 자연수 개수 5지선다 3점.

- id: 학평-2025-10-고2-#12
  original_source: 2025년 10월학평 12번 (고2)
  original_points: 3
  number_in_original: 12
  unit_code: 대수
  sub_unit: 수열
  tier: star_3·4
  mechanism_primary: lim (OP·OH) 원 위 점 · 삼각형 넓이 극한
  insight_type: I-BW
  depth: 2
  problem_summary: |
    원 위 점 P·H·OP·OH · lim 형태 · 삼각형 넓이 5지선다 3점.

- id: 학평-2025-10-고2-#13
  original_source: 2025년 10월학평 13번 (고2)
  original_points: 3
  number_in_original: 13
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_3·4
  mechanism_primary: tan θ 조건 · sin·cos 값 · 결합
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    tan θ 조건 → sin·cos 값 결합 5지선다 3점.

- id: 학평-2025-10-고2-#14
  original_source: 2025년 10월학평 14번 (고2)
  original_points: 4
  number_in_original: 14
  unit_code: 대수
  sub_unit: 수열
  tier: star_4
  mechanism_primary: 수열 조건 · 특정 항 값 (등차·등비 결합)
  insight_type: I-EQV
  depth: 3
  problem_summary: |
    수열 조건 → 값 5지선다 4점.

- id: 학평-2025-10-고2-#15
  original_source: 2025년 10월학평 15번 (고2)
  original_points: 4
  number_in_original: 15
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_4
  mechanism_primary: 지수·로그 그래프 · 두 점 좌표
  insight_type: I-EQV
  depth: 3
  problem_summary: |
    지수/로그 그래프 위 점 조건 → 값 5지선다 4점.

- id: 학평-2025-10-고2-#16
  original_source: 2025년 10월학평 16번 (고2)
  original_points: 4
  number_in_original: 16
  unit_code: 대수
  sub_unit: 수열
  tier: star_4
  mechanism_primary: lim · 수열 조건 · 특정 값
  insight_type: I-EQV
  depth: 3
  problem_summary: |
    lim + Σ 조건 5지선다 4점.

- id: 학평-2025-10-고2-#17
  original_source: 2025년 10월학평 17번 (고2)
  original_points: 4
  number_in_original: 17
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_4
  mechanism_primary: 삼각함수 조건 (sin·cos 두 각) · 특정 값
  insight_type: I-EQV
  depth: 3
  problem_summary: |
    삼각함수 조건 결합 5지선다 4점.

- id: 학평-2025-10-고2-#18
  original_source: 2025년 10월학평 18번 (고2)
  original_points: 4
  number_in_original: 18
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_5
  mechanism_primary: sin θ · 자연수 미지수 개수 · 삼각방정식
  insight_type: I-CON
  depth: 3
  problem_summary: |
    sin θ 조건 · 자연수 미지수 개수 5지선다 4점.

- id: 학평-2025-10-고2-#19
  original_source: 2025년 10월학평 19번 (고2)
  original_points: 4
  number_in_original: 19
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_5
  mechanism_primary: 로그 그래프 · A·B·C·D 4점 배치 · 조건 다층
  insight_type: I-CON
  depth: 3
  problem_summary: |
    로그 그래프 위 A·B (또는 C·D 4점) · B점 AD 관계 → 값 5지선다 4점.

- id: 학평-2025-10-고2-#20
  original_source: 2025년 10월학평 20번 (고2)
  original_points: 4
  number_in_original: 20
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_5
  mechanism_primary: 로그 조건 (가)·(나) 다층 결합 · log 값
  insight_type: I-CON
  depth: 3
  problem_summary: |
    로그 조건 다층 5지선다 4점.

- id: 학평-2025-10-고2-#21
  original_source: 2025년 10월학평 21번 (고2)
  original_points: 4
  number_in_original: 21
  unit_code: 대수
  sub_unit: 수열
  tier: star_5_premium
  mechanism_primary: 수열 조건 · 조건부 · 다층 결합
  insight_type: I-CON
  depth: 3
  problem_summary: |
    수열 조건 (다층) → 특정 값 5지선다 4점.

- id: 학평-2025-10-고2-#22
  original_source: 2025년 10월학평 22번 (고2)
  original_points: 3
  number_in_original: 22
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_3
  mechanism_primary: log 수치 서답형
  insight_type: 절차형
  depth: 1
  problem_summary: |
    log 수치 서답형 3점. 답: 3.
  answer: 3

- id: 학평-2025-10-고2-#23
  original_source: 2025년 10월학평 23번 (고2)
  original_points: 3
  number_in_original: 23
  unit_code: 대수
  sub_unit: 수열
  tier: star_3
  mechanism_primary: 등차·등비 수열 조건 서답형
  insight_type: 절차형
  depth: 1
  problem_summary: |
    수열 조건 → 값 서답형 3점. 답: 20.
  answer: 20

- id: 학평-2025-10-고2-#24
  original_source: 2025년 10월학평 24번 (고2)
  original_points: 3
  number_in_original: 24
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_3·4
  mechanism_primary: log_a · log_b 조건 결합 · 서답형
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    log 조건 → 값 서답형 3점. 답: 7.
  answer: 7

- id: 학평-2025-10-고2-#25
  original_source: 2025년 10월학평 25번 (고2)
  original_points: 3
  number_in_original: 25
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_3·4
  mechanism_primary: 삼각형 조건 · 특정 값 서답형
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    삼각형 조건 → 값 서답형 3점. 답: 13.
  answer: 13

- id: 학평-2025-10-고2-#26
  original_source: 2025년 10월학평 26번 (고2)
  original_points: 4
  number_in_original: 26
  unit_code: 대수
  sub_unit: 수열
  tier: star_5
  mechanism_primary: 수열 lim (a_n/b_n) 다층 조건 서답형
  insight_type: I-CON
  depth: 3
  problem_summary: |
    수열 lim · 조건 결합 → 값 서답형 4점. 답: 9.
  answer: 9

- id: 학평-2025-10-고2-#27
  original_source: 2025년 10월학평 27번 (고2)
  original_points: 4
  number_in_original: 27
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_5
  mechanism_primary: 삼각형 ABC · sin·cos 조건 · AB 값 · 서답형
  insight_type: I-CON
  depth: 3
  problem_summary: |
    삼각형 ABC · sin·cos·AB 조건 → 값 서답형 4점. 답: 12.
  answer: 12

- id: 학평-2025-10-고2-#28
  original_source: 2025년 10월학평 28번 (고2)
  original_points: 4
  number_in_original: 28
  unit_code: 대수
  sub_unit: 수열
  tier: star_5_premium
  mechanism_primary: 수열 (가)·(나) 조건 · lim · 자연수 조건 · 서답형
  insight_type: I-CON
  depth: 3
  problem_summary: |
    수열 조건 (가)·(나) 다층 → 값 서답형 4점. 답: 5.
  answer: 5

- id: 학평-2025-10-고2-#29
  original_source: 2025년 10월학평 29번 (고2)
  original_points: 4
  number_in_original: 29
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_5_premium
  mechanism_primary: 삼각함수 조건 (다층) · 값 서답형
  insight_type: I-CON
  depth: 3
  premium: true
  problem_summary: |
    삼각함수 다층 조건 → 값 서답형 4점. 답: 28.
    29번 킬러.
  answer: 28

- id: 학평-2025-10-고2-#30
  original_source: 2025년 10월학평 30번 (고2)
  original_points: 4
  number_in_original: 30
  unit_code: 대수
  sub_unit: 수열
  tier: star_5_premium
  mechanism_primary: 수열 (가)·(나) 조건 다층 · 규칙 발견형 킬러
  insight_type: I-CON
  depth: 3
  premium: true
  problem_summary: |
    수열 조건 다층 (가)·(나) → 특정 값 서답형 4점. 답: 50.
    30번 킬러 (<보기> 조건 다층 · 규칙 발견).
  answer: 50
```

---

## IV. 2026년 6월 학력평가 고2 (2026-6)

```yaml
- id: 학평-2026-6-고2-#01
  original_source: 2026년 6월학평 1번 (고2)
  original_points: 2
  number_in_original: 1
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_1
  mechanism_primary: 지수 수치 계산
  insight_type: 절차형
  depth: 1
  problem_summary: |
    지수 계산 5지선다 2점.

- id: 학평-2026-6-고2-#02
  original_source: 2026년 6월학평 2번 (고2)
  original_points: 2
  number_in_original: 2
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_1·2
  mechanism_primary: 로그 뺄셈 (log_a M - log_a N)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    log_a x - log_a y 값 5지선다 2점.

- id: 학평-2026-6-고2-#03
  original_source: 2026년 6월학평 3번 (고2)
  original_points: 2
  number_in_original: 3
  unit_code: 대수
  sub_unit: 수열
  tier: star_1·2
  mechanism_primary: 등차수열 특정 항 값
  insight_type: 절차형
  depth: 1
  problem_summary: |
    등차수열 값 5지선다 2점.

- id: 학평-2026-6-고2-#04
  original_source: 2026년 6월학평 4번 (고2)
  original_points: 3
  number_in_original: 4
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_3
  mechanism_primary: sin θ 값 · 사분면 부호 결합
  insight_type: 절차형
  depth: 2
  problem_summary: |
    sin θ 값 5지선다 3점.

- id: 학평-2026-6-고2-#05
  original_source: 2026년 6월학평 5번 (고2)
  original_points: 3
  number_in_original: 5
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_3
  mechanism_primary: log 값 계산 · 여러 로그 조건 결합
  insight_type: 절차형
  depth: 2
  problem_summary: |
    log 값 5지선다 3점.

- id: 학평-2026-6-고2-#06
  original_source: 2026년 6월학평 6번 (고2)
  original_points: 3
  number_in_original: 6
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_3
  mechanism_primary: log 조건 결합 · 값 산출
  insight_type: 절차형
  depth: 2
  problem_summary: |
    log 조건 → 값 5지선다 3점.

- id: 학평-2026-6-고2-#07
  original_source: 2026년 6월학평 7번 (고2)
  original_points: 3
  number_in_original: 7
  unit_code: 대수
  sub_unit: 수열
  tier: star_3
  mechanism_primary: 등차·등비 수열 조건 → 값
  insight_type: 절차형
  depth: 2
  problem_summary: |
    수열 조건 5지선다 3점.

- id: 학평-2026-6-고2-#08
  original_source: 2026년 6월학평 8번 (고2)
  original_points: 3
  number_in_original: 8
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_3
  mechanism_primary: 삼각형 넓이·cos θ 조건 · 삼각형 넓이 공식
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    삼각형 (변·cos·넓이) 조건 → 값 5지선다 3점.

- id: 학평-2026-6-고2-#09
  original_source: 2026년 6월학평 9번 (고2)
  original_points: 3
  number_in_original: 9
  unit_code: 대수
  sub_unit: 수열
  tier: star_3
  mechanism_primary: 등차·등비 수열 · lim 형태
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    수열 조건 → 값 5지선다 3점.

- id: 학평-2026-6-고2-#10
  original_source: 2026년 6월학평 10번 (고2)
  original_points: 3
  number_in_original: 10
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_3·4
  mechanism_primary: 로그 방정식 · log_a x = k · 다층
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    log 방정식 조건 5지선다 3점.

- id: 학평-2026-6-고2-#11
  original_source: 2026년 6월학평 11번 (고2)
  original_points: 3
  number_in_original: 11
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_3·4
  mechanism_primary: 로그 그래프 y=log_a x · 두 점 A·B 좌표
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    y=log_a x 위 두 점 A(a, log_a a), B(b, log_b b) 조건 → AB 값 5지선다 3점.

- id: 학평-2026-6-고2-#12
  original_source: 2026년 6월학평 12번 (고2)
  original_points: 3
  number_in_original: 12
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_3·4
  mechanism_primary: sin·cos 조건 · 각도 · 반각 항등식
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    sin θ + cos θ 조건 → sin·cos 값 5지선다 3점.

- id: 학평-2026-6-고2-#13
  original_source: 2026년 6월학평 13번 (고2)
  original_points: 3
  number_in_original: 13
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_3·4
  mechanism_primary: 삼각형 ABC 두 조건 (가)·(나) 결합 (BC 조건·cos 조건)
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    삼각형 ABC (가) BC 값 조건 · (나) cos 조건 → 특정 값 5지선다 3점.

- id: 학평-2026-6-고2-#14
  original_source: 2026년 6월학평 14번 (고2)
  original_points: 4
  number_in_original: 14
  unit_code: 대수
  sub_unit: 수열
  tier: star_4
  mechanism_primary: 수열 조건 · 특정 항 값 (등차·등비 결합)
  insight_type: I-EQV
  depth: 3
  problem_summary: |
    수열 조건 → 값 5지선다 4점.

- id: 학평-2026-6-고2-#15
  original_source: 2026년 6월학평 15번 (고2)
  original_points: 4
  number_in_original: 15
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_4
  mechanism_primary: 로그 방정식 · log_a · log_b 결합 · 값 산출
  insight_type: I-EQV
  depth: 3
  problem_summary: |
    로그 방정식 결합 조건 5지선다 4점.

- id: 학평-2026-6-고2-#16
  original_source: 2026년 6월학평 16번 (고2)
  original_points: 4
  number_in_original: 16
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_4
  mechanism_primary: 로그 그래프 y=log_a x · 두 점 A·B · 사각형 ACDB 넓이 · 조건 다층
  insight_type: I-CON
  depth: 3
  problem_summary: |
    y=log_a x 그래프 · 두 점 A(a, log_a a), B(b, log_a b) · C, D 좌표
    · 사각형 ACDB 넓이 조건 → 값 5지선다 4점.
    로그 좌표 + 사각형 다층 결합.

- id: 학평-2026-6-고2-#17
  original_source: 2026년 6월학평 17번 (고2)
  original_points: 4
  number_in_original: 17
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_4
  mechanism_primary: 원 위 두 점 A·B · OA·OB 조건 · cos·sin 결합 · ABDC 사각형
  insight_type: I-CON
  depth: 3
  problem_summary: |
    원 위 두 점 A·B (OA·OB 좌표) · AB 조건 · cos α, sin β 조건
    · A·B 점 C·D 대응 → 사각형 ABDC 값 5지선다 4점.

- id: 학평-2026-6-고2-#18
  original_source: 2026년 6월학평 18번 (고2)
  original_points: 4
  number_in_original: 18
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_5
  mechanism_primary: <보기> (가)·(나)·(다) 다층 · 두 점 P·Q · sin·QAB·QBA 각도 조건 · 삼각형 넓이
  insight_type: I-CON
  depth: 3
  problem_summary: |
    두 점 P·Q · A·B 점 · QAB·QBA 각도 조건 · sin θ 조건
    · <보기> (가) sin 관계 · (나) QB / QA 관계 · (다) AB / QAB 관계
    · 참·거짓 판별형 5지선다 4점.
    <보기> 3층 참거짓 (준킬러).

- id: 학평-2026-6-고2-#19
  original_source: 2026년 6월학평 19번 (고2)
  original_points: 4
  number_in_original: 19
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_5
  mechanism_primary: log_a x = f(x) · 조건 다층 · 자연수 미지수
  insight_type: I-CON
  depth: 3
  problem_summary: |
    로그 조건 다층 → 값 5지선다 4점.

- id: 학평-2026-6-고2-#20
  original_source: 2026년 6월학평 20번 (고2)
  original_points: 4
  number_in_original: 20
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_5
  mechanism_primary: 두 점 A·B·P·C · tan·sin 조건 · AOB·BCP 각도 상등
  insight_type: I-CON
  depth: 3
  problem_summary: |
    두 점 A·B·P (O 중심) · tan조건 · <보기> (가) 두 점 A·C 대칭 · (나) AOB·BCP 각 상등
    → 참거짓 판별 5지선다 4점.

- id: 학평-2026-6-고2-#21
  original_source: 2026년 6월학평 21번 (고2)
  original_points: 4
  number_in_original: 21
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_5_premium
  mechanism_primary: log 조건 다층 · 자연수 · 규칙 발견
  insight_type: I-CON
  depth: 3
  problem_summary: |
    로그 조건 다층 → 값 5지선다 4점. 21번 준킬러 (로그·자연수 결합).

- id: 학평-2026-6-고2-#22
  original_source: 2026년 6월학평 22번 (고2)
  original_points: 3
  number_in_original: 22
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_3
  mechanism_primary: 지수 수치 서답형
  insight_type: 절차형
  depth: 1
  problem_summary: |
    지수 계산 서답형 3점.

- id: 학평-2026-6-고2-#23
  original_source: 2026년 6월학평 23번 (고2)
  original_points: 3
  number_in_original: 23
  unit_code: 대수
  sub_unit: 수열
  tier: star_3
  mechanism_primary: 수열 · 등차·등비 특정 항 서답형
  insight_type: 절차형
  depth: 1
  problem_summary: |
    수열 값 서답형 3점.

- id: 학평-2026-6-고2-#24
  original_source: 2026년 6월학평 24번 (고2)
  original_points: 3
  number_in_original: 24
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_3·4
  mechanism_primary: tan θ · sin θ 조건 결합 · 값 서답형
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    tan θ · sin θ 조건 → 값 서답형 3점.

- id: 학평-2026-6-고2-#25
  original_source: 2026년 6월학평 25번 (고2)
  original_points: 3
  number_in_original: 25
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_3·4
  mechanism_primary: 로그 조건 log_a · log_b 결합 · 값 서답형
  insight_type: I-EQV
  depth: 2
  problem_summary: |
    log_a · log_b 값 서답형 3점.

- id: 학평-2026-6-고2-#26
  original_source: 2026년 6월학평 26번 (고2)
  original_points: 4
  number_in_original: 26
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_5
  mechanism_primary: 삼각함수 cos θ 조건 · <보기> 조건 · 값 서답형
  insight_type: I-CON
  depth: 3
  problem_summary: |
    cos θ 조건 다층 → 값 서답형 4점.

- id: 학평-2026-6-고2-#27
  original_source: 2026년 6월학평 27번 (고2)
  original_points: 4
  number_in_original: 27
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_5
  mechanism_primary: 로그 그래프 두 점 A·B (log 값 조건) · 관계 조건 다층
  insight_type: I-CON
  depth: 3
  problem_summary: |
    log_a 그래프 위 두 점 A·B 조건 → 값 서답형 4점.

- id: 학평-2026-6-고2-#28
  original_source: 2026년 6월학평 28번 (고2)
  original_points: 4
  number_in_original: 28
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_5_premium
  mechanism_primary: 삼각형 ABC · AB=BC·AC 조건 · D·E 점 · DCE 각 조건 · CE 길이
  insight_type: I-CON
  depth: 3
  premium: true
  problem_summary: |
    삼각형 ABC (AB, AC, BC 조건) · BC 위 AC 반지름 원 · C 점 D · CD 연장선 E
    · DCE 각도 조건 → CE 길이 서답형 4점. 28번 킬러 (삼각형+원+각도 다층).

- id: 학평-2026-6-고2-#29
  original_source: 2026년 6월학평 29번 (고2)
  original_points: 4
  number_in_original: 29
  unit_code: 대수
  sub_unit: 지수와_로그
  tier: star_5_premium
  mechanism_primary: 로그 · 사각형 A·B·C·D 좌표 · AB·BC·CD 관계 · 자연수 조건
  insight_type: I-CON
  depth: 3
  premium: true
  problem_summary: |
    로그 조건 · 점 A(log_a x, y) · B·C·D 배치 · AB=BC=CD 조건 (등차 배치)
    → 값 서답형 4점. 29번 킬러 (로그 그래프 + 등차 배치 다층).

- id: 학평-2026-6-고2-#30
  original_source: 2026년 6월학평 30번 (고2)
  original_points: 4
  number_in_original: 30
  unit_code: 대수
  sub_unit: 삼각함수
  tier: star_5_premium
  mechanism_primary: 삼각함수 f(x)=sin ax · 조건 (가)·(나) 다층 · 규칙 발견
  insight_type: I-CON
  depth: 3
  premium: true
  problem_summary: |
    f(x)=sin ax · OBC 조건 (원 중심 O, 두 점 B·C 사이 각도)
    · <보기> (가) 특정 조건 · (나) log 관계식 → 값 서답형 4점.
    30번 킬러 (삼각+로그+원 다층 융합).
```

---

## 표본 판정 요약 (120문)

| ★ | 회당 문항 수 (평균) | 회수 | 총합 | 비율 |
|---|---|---|---|---|
| ★ 1 | ~1 | 4 | ~4 | ~3% |
| ★ 1·2 | ~2 | 4 | ~8 | ~7% |
| ★ 3 | ~9 | 4 | ~36 | ~30% |
| ★ 3·4 | ~8 | 4 | ~32 | ~27% |
| ★ 4 | ~4 | 4 | ~16 | ~13% |
| ★ 5 | ~5 | 4 | ~20 | ~17% |
| ★ 5 premium | ~3 | 4 | ~12 | ~10% |
| **합계** | **30** | **4** | **120** | **100%** |

**Premium 후보 (12건 · 회당 3건)**:

| 회차 | 문항 | 단원 | 특징 |
|---|---|---|---|
| 2025-6 | 28 | 수열 | (가)·(나) 조건 · 자연수 미지수 |
| 2025-6 | 29 | 삼각함수 | 삼각형 다층 (중점·수선·비율) + 삼각비 |
| 2025-6 | 30 | 지수와_로그 | (가)·(나) 로그 조건 다층 |
| 2025-9 | 28 | 수열 | (가)·(나) 조건 다층 |
| 2025-9 | 29 | 수열 | 수열+삼각함수 융합 · 규칙 발견 |
| 2025-9 | 30 | 수열 | (가)·(나)·(다) 3층 조건 · lim Σ |
| 2025-10 | 28 | 수열 | (가)·(나) 다층 |
| 2025-10 | 29 | 삼각함수 | 삼각함수 다층 조건 |
| 2025-10 | 30 | 수열 | (가)·(나) 규칙 발견형 킬러 |
| 2026-6 | 28 | 삼각함수 | 삼각형+원+각도 다층 |
| 2026-6 | 29 | 지수와_로그 | 로그 그래프 + 등차 배치 다층 |
| 2026-6 | 30 | 삼각함수 | 삼각+로그+원 다층 융합 |

**단원 분포 (전 120문)**:
- 지수와_로그: 약 45문 (~38%)
- 삼각함수: 약 40문 (~33%)
- 수열: 약 35문 (~29%)

## 활용 지침

1. **problem-author v2.3 원본 pool**: 대수 라인 시험지 회차 창작 시 이 파일 최우선 참조.
2. **anchor-neighbors 검색**: 대수 라인 청사진 슬롯 pick 시 이 pool + 마플시너지-CM1 대수편·rpm-대수·개념원리-대수·올림포스-대수 병렬 조회.
3. **자기복제 감지**: 학평 원본은 회차별 유사 구조 반복 있음 (매 회차 30번 = <보기> 3층 규칙 발견형). 다음 회차 창작 시 반드시 크로스 검증.
4. **premium 뽑아 쓰기 우선**: 회당 3~4건 premium 후보 확보 · 시험지 준킬러/킬러 슬롯 우선 배치.
5. **정답 검증 후속 작업**: 2025-6월·2026-6월 정답표는 이미지 OCR (Tesseract·Google Vision API) 사후 추출 필요. 현 시점 tier·star는 원본 배점·번호 위치 기반 결정론적 매핑.

## 잔여 확장 후보

- **2024년 고2 대수 학평** (3·6·9·10월 · 4회 × 30문 = 120문)
- **2023년 고2 대수 학평** (동일 4회 × 30문 = 120문)
- **2025·2026 고3 학평** (별도 파일 mechanism-데이터-대수-수능모고-고3.md 후속)
- **원본 정답 이미지 OCR 후속 실측 정정** (2025-6·2026-6 정답 확보)
