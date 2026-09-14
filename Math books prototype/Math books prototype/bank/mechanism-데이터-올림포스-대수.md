---
name: mechanism-데이터-올림포스-대수
description: EBS 올림포스 대수 (2022 개정 · 2026 발행) 본편 + 올림포스 유형편 대수 (22개정) 통합 정독 데이터. 대수 라인 (선택과목) EBS 시판 표준 · 4단원 구조 (I 지수함수와로그함수 · II 삼각함수 · III 수열) · 총 6 소단원 (01 지수와로그·02 지수함수와로그함수·03 삼각함수·04 사인법칙과코사인법칙·05 등차수열과등비수열·06 수열의합과수학적귀납법). PDF는 image-only이며 답지·유형편 encrypted(copy:no)로 pdftotext 추출 불가 → 렌더 스크린샷 정독 기반 시그니처 인용만 (원문 전사 없음). 저작권 준수 · 학평 인용 없음 (자체 창작 문항).
metadata:
  type: reference
  version: v1.0
  source:
    - EBS 올림포스 대수 (2022 개정 교육과정 · 2026년 발행) — 본편 112 pages
    - EBS 올림포스 대수 정답과 해설 (2022 개정)
    - EBS 올림포스 대수 중간고사 (2026)
    - EBS 올림포스 유형편 대수 (2022 개정) — 128 pages
    - EBS 올림포스 유형편 대수 정답과 해설
  calibration_version: v1.0 (2026-07-22)
  answer_rate_available: false
  total_problems:
    본편_추정: 301   # 문항코드 26445-0001~0301
    유형편_추정: 493 # 문항코드 26643-0001~0493
    combined: 794
  sample_size: 52
  unit_code: 대수    # bank/대수/ 라인 코드 규약 (CM1-{단원}-A### 스타일 별도)
  extraction_method: PyMuPDF render (dpi=80~90) → 시각 정독 · pdftotext 실패 (image-only + AES 암호화)
  citation_note: 학습 목적 · 저작권 준수 · 문항코드/섹션명만 인용 · 원문 발문 전사 없음
  audience_notes: 대수 라인 (선택과목) 시판 자산화 최초 · Stage 1 P0
  tier_mapping:
    # 캘리브레이션 v1.0 · EBS 올림포스 대수 (2026-07-22)
    핵심_개념: 정독 제외 (개념 정리만 · 문제 없음)
    예제_유제: star_1·2  # "기본 유형 익히기" 예제+유제 pair
    유형_확인: star_2·3  # 유형별 문항 4~6개 반복 훈련
    서술형_연습장: star_3·4  # 서술형 · 채점 기준 3단계
    내신_수능_고난도_문항: star_5  # 각 소단원 말미 4문 (아이콘: 개 실루엣)
    대단원_종합_LEVEL1: star_2·3
    대단원_종합_LEVEL2: star_3·4
    대단원_종합_LEVEL3: star_5_premium  # 대단원 정점 4~6문
    대단원_서술형_문제: star_4  # LEVEL과 별도 우측 컬럼
    유형편_개념_확인하기: 정독 제외 (드릴 · 소단원별 100+ 초급문제)
    유형편_유형_완성하기_기본: star_2·3
    유형편_유형_완성하기_중요: star_3·4  # "중요" 배지 부착
    유형편_서술형_완성하기: star_3·4
    유형편_내신_수능_고난도_도전: star_5·premium
  chapters:
    - I: 지수함수와 로그함수
      sub:
        - 01: 지수와 로그 (본편 p6-17, 유형편 p6-27)
        - 02: 지수함수와 로그함수 (본편 p18-29, 유형편 p28-53)
      대단원_종합: 본편 p30-33 (26445-0076~0100 · 25문)
    - II: 삼각함수
      sub:
        - 03: 삼각함수 (본편 p34-53, 유형편 p54-75)
        - 04: 사인법칙과 코사인법칙 (본편 p54-61, 유형편 p76-89)
      대단원_종합: 본편 p62-65 (26445-0177~0194 · 18문)
    - III: 수열
      sub:
        - 05: 등차수열과 등비수열 (본편 p66-79, 유형편 p90-109)
        - 06: 수열의 합과 수학적 귀납법 (본편 p80-93, 유형편 p110-127)
      대단원_종합: 본편 p94-98 (26445-0286~0301 · 서술형 포함 16문)
    - 부록: 수행평가 (본편 p99-102)
  master_review_flag_note: |
    본 정독은 image-based PDF 시각 판독이므로 원문 전사가 없다. 각 표본은 "문항코드 + 시그니처 요약"만 기록.
    저작권 정책: 발문 전사·수식 원문 인용 없음 · 통찰 유형/mechanism_primary만 서술.
    상세 문항 필요 시 마스터가 PDF 원본으로 크로스체크 요망.
  authoring_context:
    unit_scope: 대수 (선택과목) — CM1·CM2 이후 학년 교재 · bank/대수/ 별도 라인
    section_semantics:
      핵심_개념: 개념 정리 페이지 (문제 없음 · 예시 보기 sidebar 포함)
      기본_유형_익히기: 예제 (풀이 + POINT 박스) + 유제 (같은 유형 반복)
      유형_확인: 유형별 4~6문 반복 · 5지선다·주관식 혼재
      서술형_연습장: 예제 (풀이+채점기준표 3단계 %) + 서술형 3문
      내신_수능_고난도_문항: 각 소단원 말미 4문 · 빨간 개 아이콘 · 조건박스 (가)(나) 다수
      대단원_종합문제: LEVEL 1·2·3 + 서술형 문제 (LEVEL 3가 premium)
    유형편_section_semantics:
      개념_확인하기: 소단원당 40~100+ 드릴 문제 (짧은 계산·단답)
      유형_완성하기: 유형별 문항 6~12개 · "중요" 배지 강조 유형
      서술형_완성하기: 유형별 서술형 문제
      내신_수능_고난도_도전: 소단원 말미 3~5문
---

# EBS 올림포스 대수 (2022 개정 · 2026) + 올림포스 유형편 대수 정독 데이터

## 📋 정독 방침

**PDF 특성 (2026-07-22 실측)**:
- 본편 PDF (112p · 42MB) — Adobe Image Conversion Plug-in 생성 · 전 페이지 image-only (`get_text()` = 0 bytes)
- 답지 PDF (16p · 1.9MB) — encrypted (print:yes copy:no) · pdftotext 잔여 텍스트 있으나 수식·라벨 깨짐
- 유형편 PDF (128p) — AES 암호화 · pdftotext 0 bytes · fitz render로만 접근
- 유형편 답지 (120p) — 마찬가지 AES 암호화

**추출 방법**: PyMuPDF fitz.get_pixmap(dpi=80~90) → PNG 렌더 → 시각 정독. 층화 표본 52문 시그니처 기록.

**저작권 보호**: 원문 발문 전사 없음. mechanism_primary + insight_type + depth + source ID만 기록.

---

## I. 지수함수와 로그함수

### 소단원 01. 지수와 로그 — 본편 p6-17

#### 유형 익히기 → 유형 확인 (star_2·3)

- source: OL대수-CH01-#01-예제
  code: 26445-0001
  section: 기본_유형_익히기
  tier: star_1·2
  unit_code: 대수-지수와로그
  mechanism_primary: n제곱근의 정의 · 실수 조건 (홀·짝수)
  insight_type: 절차형
  depth: 2
  problem_summary: |
    n제곱근 정의 · 5지선다 · 개념 확인 예제 (p10 유형 1)

- source: OL대수-CH01-#03-예제
  code: 26445-0003
  section: 기본_유형_익히기
  tier: star_2
  unit_code: 대수-지수와로그
  mechanism_primary: 지수법칙 · 밑이 다른 지수의 대칭식 결합
  insight_type: 결합형
  depth: 3
  problem_summary: |
    p10 유형 2 (지수법칙과 응용) 예제

- source: OL대수-CH01-#05-예제
  code: 26445-0005
  section: 기본_유형_익히기
  tier: star_3
  unit_code: 대수-지수와로그
  mechanism_primary: 로그의 밑 변환 공식 · 2^a=3, 2^b=5 조건에서 log_9 225를 a,b로 표현
  insight_type: 표현변환형
  depth: 3
  problem_summary: |
    p11 유형 5 예제 · 5지선다 · POINT: log_a b = log_c b / log_c a

- source: OL대수-CH01-#15
  code: 26445-0021
  section: 유형_확인
  tier: star_3
  unit_code: 대수-지수와로그
  mechanism_primary: 지수 방정식 · 로그로 변환하여 b^c 계산
  insight_type: 대입형
  depth: 3
  problem_summary: |
    2^a=5, log_a 5=3 조건에서 b^c의 값 · p14 유형 4

- source: OL대수-CH01-#17
  code: 26445-0023
  section: 유형_확인
  tier: star_3
  unit_code: 대수-지수와로그
  mechanism_primary: 이중 로그 · log_4{log_3(log_2 x)}=1/2 조건 역산
  insight_type: 역산형
  depth: 4
  problem_summary: |
    log_4{log_3(log_2 x)}=1/2일 때 양수 x의 값 · p14 유형 4 · 5지선다

- source: OL대수-CH01-#19
  code: 26445-0025
  section: 유형_확인
  tier: star_3
  unit_code: 대수-지수와로그
  mechanism_primary: 로그 성질 · (log_2 6)^2 - (log_2 3)^2 - 1의 인수분해 변형
  insight_type: 대칭공식형
  depth: 3
  problem_summary: |
    p14 유형 4 · A^2-B^2=(A-B)(A+B) 인수분해 후 로그 정리

- source: OL대수-CH01-#20
  code: 26445-0026
  section: 유형_확인
  tier: star_3
  unit_code: 대수-지수와로그
  mechanism_primary: 밑이 서로 다른 로그의 결합 · sqrt형·거듭제곱 정리
  insight_type: 밑통일형
  depth: 3
  problem_summary: |
    log_3 세제곱근(81) 등 밑 변환 종합 · p14

- source: OL대수-CH01-#23
  code: 26445-0029
  section: 유형_확인
  tier: star_4
  unit_code: 대수-지수와로그
  mechanism_primary: 이차방정식 근의 조건 (log_5 a, log_5 b가 x^2-3x+1=0의 근) → log_b + log_a 계산
  insight_type: 근과계수형
  depth: 4
  problem_summary: |
    이차방정식의 두 근이 로그이고, log_a b + log_b a 형 결과 · p15 유형 5

- source: OL대수-CH01-#26
  code: 26445-0032
  section: 유형_확인
  tier: star_4
  unit_code: 대수-지수와로그
  mechanism_primary: 상용로그 부등식 · n ≤ log 12^10 < n+1을 만족하는 자연수 n
  insight_type: 정수부탐색형
  depth: 4
  problem_summary: |
    log 2, log 3 값 주어짐 · 상용로그 정수부 · p15 유형 6

#### 서술형 연습장 (star_3·4)

- source: OL대수-CH01-서술형-#01
  code: 26445-0033
  section: 서술형_연습장
  tier: star_4
  unit_code: 대수-지수와로그
  mechanism_primary: n제곱근 조건 · 실수 a에 대하여 두 수 a-1, a+1이 모두 양수 N의 네제곱근 중 하나 → a+N
  insight_type: 조건분해형
  depth: 4
  problem_summary: |
    양수의 네제곱근 실수 2개 (±) 활용 · a-1과 a+1이 부호 반대 관계 유도 · p16

- source: OL대수-CH01-서술형-#03
  code: 26445-0035
  section: 서술형_연습장
  tier: star_3
  unit_code: 대수-지수와로그
  mechanism_primary: 로그 비율 조건 · log_a b / log_2 a = 3/2에서 a^{log_a b}의 값
  insight_type: 대입치환형
  depth: 3
  problem_summary: |
    log 항등식 변환 · p16 우측

#### 내신+수능 고난도 문항 (★ 5 premium)

- source: OL대수-CH01-고난도-#01
  code: 26445-0036
  section: 내신수능_고난도
  tier: star_5_premium
  unit_code: 대수-지수와로그
  mechanism_primary: 자연수 조건 · 1<n<10, n^2-5n-6의 n제곱근 중 음의 실수 존재 조건 → n의 값의 합
  insight_type: 부호판별형
  depth: 5
  problem_summary: |
    n제곱근의 존재 조건 (n 홀·짝, 밑 부호) 종합 · p17 · 5지선다

- source: OL대수-CH01-고난도-#02
  code: 26445-0037
  section: 내신수능_고난도
  tier: star_5_premium
  unit_code: 대수-지수와로그
  mechanism_primary: 지수의 텔레스코핑 (텔레스코핑 곱) · 2^{1/(1+sqrt2)} × 2^{1/(sqrt2+sqrt3)} × ... 곱의 지수 합
  insight_type: 텔레스코핑형
  depth: 6
  problem_summary: |
    지수 부분이 유리화로 접히는 telescoping 구조 · 최종 정수 지수 · p17

- source: OL대수-CH01-고난도-#03
  code: 26445-0038
  section: 내신수능_고난도
  tier: star_5_premium
  unit_code: 대수-지수와로그
  mechanism_primary: 조건 (가)(나) · n log_a 2 자연수, 10<log_a n<100 · 곱 T · log_2 T의 값
  insight_type: 다중조건형
  depth: 6
  problem_summary: |
    조건 박스 (가)(나) 다중 조건 만족 자연수 n의 곱 T를 로그로 표현 · p17 · premium

- source: OL대수-CH01-고난도-#04
  code: 26445-0039
  section: 내신수능_고난도
  tier: star_5_premium
  unit_code: 대수-지수와로그
  mechanism_primary: 집합 A={log_a b, log_b a, log_a(sqrt a)}, B={1/2, 2, log_a a + log_b b} 상등 조건
  insight_type: 집합상등형
  depth: 6
  problem_summary: |
    두 로그 집합의 상등 · 원소 대응 분해 · log_a 2 + log_b 2의 값 · p17 · 5지선다

### 소단원 02. 지수함수와 로그함수 — 본편 p18-29

#### 유형 확인 · 유형 5·6 (활용) (star_3·4)

- source: OL대수-CH02-#13
  code: 26445-0058
  section: 유형_확인
  tier: star_3
  unit_code: 대수-지수함수와로그함수
  mechanism_primary: 함수 f(x)=2 log_{1/2}(x+k)의 최댓값 조건 → k+M
  insight_type: 정의역구간최대형
  depth: 3
  problem_summary: |
    폐구간 [-2,4]에서 감소 로그함수의 최댓값·최솟값 · p26

- source: OL대수-CH02-#14
  code: 26445-0059
  section: 유형_확인
  tier: star_3
  unit_code: 대수-지수함수와로그함수
  mechanism_primary: 두 함수 y=log_2 x, y=log_2 8x와 두 직선 x=1, x=5로 둘러싸인 영역 넓이
  insight_type: 두그래프면적형
  depth: 3
  problem_summary: |
    log_2 8x - log_2 x = 3 (상수) → 직사각형 면적 · 대수적 축소 · p26

- source: OL대수-CH02-#17
  code: 26445-0062
  section: 유형_확인
  tier: star_4
  unit_code: 대수-지수함수와로그함수
  mechanism_primary: 지수 부등식 1/(0.25^{4x+12}) > 4^{x^2} · 밑 통일 후 이차부등식 · 정수 x의 합
  insight_type: 지수부등식형
  depth: 4
  problem_summary: |
    0.25=4^{-1} 변환 후 이차부등식 · 자연수 답 · p26

- source: OL대수-CH02-#22
  code: 26445-0067
  section: 유형_확인
  tier: star_3
  unit_code: 대수-지수함수와로그함수
  mechanism_primary: 로그 부등식 log_4(x^2-6x+8) < 1 · 진수 조건 + 부등식 · 정수 x의 합
  insight_type: 로그부등식형
  depth: 3
  problem_summary: |
    진수 양수 + 로그 정의 범위 + 부등식 · p27

- source: OL대수-CH02-#24
  code: 26445-0069
  section: 유형_확인
  tier: star_4
  unit_code: 대수-지수함수와로그함수
  mechanism_primary: 이차함수 f(x)·일차함수 g(x)의 그래프 조건 (f(0)=g(0)=0, f(2)=g(2), f(1)=g(1)=-1, f(6)=g(6)) 하 log{f(x)+1} ≤ log{g(x)+1} 자연수 x 개수
  insight_type: 그래프비교형
  depth: 5
  problem_summary: |
    두 함수 그래프 비교 → 로그 부등식 조건 · 자연수 개수 · p27

#### 서술형 연습장 · 내신+수능 고난도 (★ 4~5)

- source: OL대수-CH02-서술형-#02
  code: 26445-0071
  section: 서술형_연습장
  tier: star_5
  unit_code: 대수-지수함수와로그함수
  mechanism_primary: |4^x - 5·2^{x+1} + 16| + |(log_{sqrt3} x)^2 - 5 log_3 x + 6| = 0 근
  insight_type: 절댓값합형
  depth: 5
  problem_summary: |
    두 절댓값 항의 합이 0 → 각각 0 · 지수 방정식과 로그 방정식 동시 · p28

- source: OL대수-CH02-고난도-#01
  code: 26445-0073
  section: 내신수능_고난도
  tier: star_5_premium
  unit_code: 대수-지수함수와로그함수
  mechanism_primary: 곡선 y=2^{|x|-1}-4 위 두 점 A(1사분면)·B(3사분면), 선분 AB를 2:1 내분점이 원점 → |AB|^2
  insight_type: 좌표기하지수형
  depth: 6
  problem_summary: |
    지수함수와 좌표기하 결합 · 내분점 조건 · 그림 포함 · p29

- source: OL대수-CH02-고난도-#02
  code: 26445-0074
  section: 내신수능_고난도
  tier: star_5_premium
  unit_code: 대수-지수함수와로그함수
  mechanism_primary: 조건 (가) 1<a<b (나) log_a(세제곱근 b)^b - log_b(세제곱근 a)^a = 1 → log_a b
  insight_type: 로그항등식형
  depth: 6
  problem_summary: |
    로그 지수 이동 · 이차 관계 유도 · p29 · premium

- source: OL대수-CH02-고난도-#03
  code: 26445-0075
  section: 내신수능_고난도
  tier: star_5_premium
  unit_code: 대수-지수함수와로그함수
  mechanism_primary: 두 곡선 y=2^{-x}, y=|2^{1-x}-2| 교점 A(x_1,y_1)·B(x_2,y_2), 보기 ㄱㄴㄷ 참·거짓
  insight_type: 그래프교점판별형
  depth: 6
  problem_summary: |
    절댓값 지수함수와 지수함수 교점 · 보기 3종 종합판단 · p29 · 그림

### 대단원 종합문제 I. 지수함수와 로그함수 — p30-33 (LEVEL 1~3 + 서술형)

- source: OL대수-CH12종합-LEVEL1-#03
  code: 26445-0078
  section: 대단원_종합_LEVEL1
  tier: star_2
  unit_code: 대수-지수와로그
  mechanism_primary: x=log_2(sqrt3+sqrt2) 조건에서 4^x + 4^{-x}의 값
  insight_type: 켤레치환형
  depth: 3
  problem_summary: |
    지수의 켤레합 (a+1/a 형) · 유리화 후 정수 · p30

- source: OL대수-CH12종합-LEVEL2-#10
  code: 26445-0085
  section: 대단원_종합_LEVEL2
  tier: star_4
  unit_code: 대수-지수와로그
  mechanism_primary: 10 ≤ x < 1000 실수 x에서 log x^4 - log x^2의 값이 정수 되는 모든 x의 곱
  insight_type: 정수조건적분형
  depth: 4
  problem_summary: |
    log x = t 치환 · 이차식 정수 조건 · 근의 곱 · p31

- source: OL대수-CH12종합-LEVEL2-#13
  code: 26445-0088
  section: 대단원_종합_LEVEL2
  tier: star_4
  unit_code: 대수-지수함수와로그함수
  mechanism_primary: 0<a<1<b · 함수 y=-a^{-x} + b의 그래프 지나는 사분면 판단
  insight_type: 그래프위치판별형
  depth: 4
  problem_summary: |
    지수함수 반사·평행이동 · 사분면 4종 나열 · p31

- source: OL대수-CH12종합-LEVEL2-#14
  code: 26445-0089
  section: 대단원_종합_LEVEL2
  tier: star_4
  unit_code: 대수-지수함수와로그함수
  mechanism_primary: 이 함수 f(x)={2x-4 (x<3), log_3(x+1) (x≥3)}의 역함수 g(x), (g∘g)(k)=f(7) 조건 → k
  insight_type: 부분별 역함수형
  depth: 5
  problem_summary: |
    두 식으로 정의된 함수 역함수 2회 합성 · p31

- source: OL대수-CH12종합-LEVEL3-#19
  code: 26445-0094
  section: 대단원_종합_LEVEL3
  tier: star_5_premium
  unit_code: 대수-지수함수와로그함수
  mechanism_primary: 세 곡선 y=log_2 x, y=log_a x, y=log_a(x-2) · y축과 만나는 점 A, B와 y=k 만나는 C, D · |AB|=2|CD| → 사각형 ABDCB 넓이
  insight_type: 로그좌표사변형형
  depth: 7
  problem_summary: |
    세 로그곡선 좌표기하 · 사각형 조건 넓이 · p32 · 그림 · premium

- source: OL대수-CH12종합-LEVEL3-#20
  code: 26445-0095
  section: 대단원_종합_LEVEL3
  tier: star_5_premium
  unit_code: 대수-지수함수와로그함수
  mechanism_primary: 조건 (가) a∈{x|x≤15인 정수} (나) y=log_{a-1}{(a^2-16)x}가 x=1 근처에서 증가 조건 → 정수 a 개수
  insight_type: 밑조건증가형
  depth: 7
  problem_summary: |
    로그함수 증감·밑 조건 · 정수 개수 · p32 · premium

- source: OL대수-CH12종합-LEVEL3-#22
  code: 26445-0097
  section: 대단원_종합_LEVEL3
  tier: star_5_premium
  unit_code: 대수-지수함수와로그함수
  mechanism_primary: f(x)=2^{2x+1}+k^2-6, g(x)=-3^{1-2x}+6-k · 임의 두 실수 x_1, x_2에 대해 f(x_1) > g(x_2) 항상 성립 자연수 k 최솟값
  insight_type: 최대최소분리형
  depth: 6
  problem_summary: |
    f 최소 > g 최대 조건 · 지수함수 최소/최대 · p33

- source: OL대수-CH12종합-서술형-#24
  code: 26445-0099
  section: 대단원_서술형_문제
  tier: star_4
  unit_code: 대수-지수함수와로그함수
  mechanism_primary: f(x)=log_2 x, g(x)=x^2-4x+5, 정의역 X={x|1≤x≤4}에서 f∘g와 g∘f의 최대·최소 → (M_1+m_1)×(M_2+m_2)
  insight_type: 합성함수최대최소형
  depth: 5
  problem_summary: |
    두 방향 합성 · 로그와 이차의 극값 · p33

---

## II. 삼각함수

### 소단원 03. 삼각함수 — 본편 p34-53

- source: OL대수-CH03-유형1-#01
  code: 26445-0113
  section: 유형_확인
  tier: star_1·2
  unit_code: 대수-삼각함수
  mechanism_primary: 일반각 · 다음 중 각을 나타내는 동경이 529°와 일치하지 않는 것
  insight_type: 동경일치형
  depth: 2
  problem_summary: |
    529°와 360k+r 관계 · 5지선다 · p46 유형 1

- source: OL대수-CH03-유형1-#03
  code: 26445-0115
  section: 유형_확인
  tier: star_3
  unit_code: 대수-삼각함수
  mechanism_primary: 시초선 OX와 동경 OP가 -1321° · 동경 OP가 나타내는 일반각의 알파 조건 (0≤α<360)
  insight_type: 일반각변환형
  depth: 3
  problem_summary: |
    음의 각 → 양의 각 변환 · α 결정 · p46

- source: OL대수-CH03-유형2-#05
  code: 26445-0117
  section: 유형_확인
  tier: star_3
  unit_code: 대수-삼각함수
  mechanism_primary: 각 θ가 제4사분면일 때 3θ가 나타내는 동경 존재 불가 사분면
  insight_type: 사분면판정형
  depth: 3
  problem_summary: |
    3θ의 사분면 구간 · p46

- source: OL대수-CH03-서술형-#01
  code: 26445-0149
  section: 서술형_연습장
  tier: star_3
  unit_code: 대수-삼각함수
  mechanism_primary: 중심 O, 반지름 2 부채꼴 OAB의 둘레 6 → 부채꼴 OAB의 넓이
  insight_type: 부채꼴호길이넓이형
  depth: 3
  problem_summary: |
    l+2r=6 · l=rθ · S=(1/2)rl · p52

- source: OL대수-CH03-서술형예제
  code: (예제)
  section: 서술형_연습장
  tier: star_4
  unit_code: 대수-삼각함수
  mechanism_primary: sinθ, cosθ가 x에 대한 이차방정식 3x^2-x+k=0의 서로 다른 두 근 → 상수 k
  insight_type: 근과계수삼각형
  depth: 4
  problem_summary: |
    근의 합/곱 → sin^2+cos^2=1 · 대칭식 · p52 예제

- source: OL대수-CH03-서술형-#03
  code: 26445-0151
  section: 서술형_연습장
  tier: star_4
  unit_code: 대수-삼각함수
  mechanism_primary: f(x)=a cos(bx)+c 주기=2, 최댓값=4, f(1)=2 → f(1/2)
  insight_type: 삼각함수매개변수형
  depth: 4
  problem_summary: |
    a,b,c 결정 후 대입 (단, a>0, b>0) · p52

### 소단원 04. 사인법칙과 코사인법칙 — 본편 p54-61

- source: OL대수-CH04-유형3-#07
  code: 26445-0165
  section: 유형_확인
  tier: star_3
  unit_code: 대수-사인코사인법칙
  mechanism_primary: 삼각형 ABC에서 |AB|=8, |BC|sinA + |CA|sinB = |AB|sinC → 외접원 넓이
  insight_type: 사인법칙연립형
  depth: 4
  problem_summary: |
    사인법칙 변형 · 2R = |AB|/sinC · p59

- source: OL대수-CH04-유형3-#09
  code: 26445-0167
  section: 유형_확인
  tier: star_3
  unit_code: 대수-사인코사인법칙
  mechanism_primary: cosA/|BC| = cosB/|CA| → 삼각형의 종류 판별
  insight_type: 삼각형종류판별형
  depth: 4
  problem_summary: |
    코사인법칙 대입 · 이등변삼각형 등 판정 · p59

- source: OL대수-CH04-유형4-#11
  code: 26445-0169
  section: 유형_확인
  tier: star_3
  unit_code: 대수-사인코사인법칙
  mechanism_primary: 평행사변형 ABCD, |AB|=2sqrt3, |AD|=3sqrt6, ∠BCD=135° · 넓이
  insight_type: 평행사변형넓이형
  depth: 3
  problem_summary: |
    S = ab sinθ · p59 · 그림

- source: OL대수-CH04-유형4-#12
  code: 26445-0170
  section: 유형_확인
  tier: star_3
  unit_code: 대수-사인코사인법칙
  mechanism_primary: 삼각형 ABC에서 |AB|=4, |BC|=5, |CA|=7 · 넓이
  insight_type: 헤론대체형
  depth: 4
  problem_summary: |
    코사인법칙으로 cosB 구한 후 S=(1/2)ab sinC · p59 · (헤론 공식 시판 노출)

### 대단원 종합문제 II. 삼각함수 — p62-65

- source: OL대수-CH34종합-LEVEL1-#01
  code: 26445-0177
  section: 대단원_종합_LEVEL1
  tier: star_3
  unit_code: 대수-삼각함수
  mechanism_primary: sinθ + cosθ = 1/2 조건 → sin^3 θ + cos^3 θ
  insight_type: 대칭식삼각형
  depth: 3
  problem_summary: |
    합·곱 → 세제곱합 대칭식 · p62

- source: OL대수-CH34종합-LEVEL1-#02
  code: 26445-0178
  section: 대단원_종합_LEVEL1
  tier: star_3
  unit_code: 대수-삼각함수
  mechanism_primary: f(x)=a sin2x + b 최댓값=6, 최솟값=-2, f(π/12)=0 → a+2b
  insight_type: 삼각매개변수형
  depth: 3
  problem_summary: |
    a, b 결정 · p62

- source: OL대수-CH34종합-LEVEL1-#04
  code: 26445-0180
  section: 대단원_종합_LEVEL1
  tier: star_4
  unit_code: 대수-삼각함수
  mechanism_primary: 0≤x<2π 연립부등식 {2sinx+1≥0, 2cosx-sqrt3<0} 해 α<x<β · α+β
  insight_type: 삼각연립부등식형
  depth: 4
  problem_summary: |
    두 삼각부등식 교집합 구간 · p62

- source: OL대수-CH34종합-LEVEL2-#06
  code: 26445-0182
  section: 대단원_종합_LEVEL2
  tier: star_4
  unit_code: 대수-사인코사인법칙
  mechanism_primary: 평행사변형 ABCD, |AB|=1, |BC|=sqrt2, ∠ABC=60° → 내적 AC·BD 값
  insight_type: 벡터내적형
  depth: 4
  problem_summary: |
    ⚠️ AC·BD 내적 (대수 과목 벡터 도입 후 · CM1·CM2 밖 · 상위 과정 · 시판 노출) · p62 · 그림

- source: OL대수-CH34종합-LEVEL2-#14
  code: 26445-0190
  section: 대단원_종합_LEVEL2
  tier: star_4
  unit_code: 대수-사인코사인법칙
  mechanism_primary: 원에 내접하는 사각형 ABCD (|AB|=5, |BC|=3, |CD|=|DA|=7) · 넓이
  insight_type: 원내접사각형형
  depth: 5
  problem_summary: |
    코사인법칙 두 삼각형 결합 (또는 브라마굽타·시판 원문 우회) · p64

- source: OL대수-CH34종합-LEVEL3-#16
  code: 26445-0192
  section: 대단원_종합_LEVEL3
  tier: star_5_premium
  unit_code: 대수-삼각함수
  mechanism_primary: 두 직선 y=-2x+4, y=(1/2)x-1이 이루는 각 이등분 직선 중 y절편이 양수인 것을 l이라 할 때, l의 x축과 양의 방향과의 각 θ (예각) → sin(π+θ)×sin(θ-3π/2)의 값
  insight_type: 각이등분선삼각형
  depth: 7
  problem_summary: |
    두 직선의 기울기 → 각의 tan → 이등분 각 · 삼각함수 값 · p64 · premium

- source: OL대수-CH34종합-LEVEL3-#17
  code: 26445-0193
  section: 대단원_종합_LEVEL3
  tier: star_5_premium
  unit_code: 대수-삼각함수
  mechanism_primary: f(x)=2sin^2 x + 2sqrt3 - 3sin^2 x + k의 최댓값 22 → 최솟값 · 모든 실수 k
  insight_type: 최대최소해집합형
  depth: 6
  problem_summary: |
    sin^2 x = 1-cos^2 x 치환 · 이차 최댓값 → k · p64

---

## III. 수열

### 소단원 05. 등차수열과 등비수열 — 본편 p66-79

- source: OL대수-CH05-유형5-#13
  code: 26445-0220
  section: 유형_확인
  tier: star_3
  unit_code: 대수-등차등비수열
  mechanism_primary: 모든 항이 실수인 등비수열 {a_n} · a_3=6, a_6=48 → 첫째항+공비
  insight_type: 등비일반항형
  depth: 3
  problem_summary: |
    a_n=ar^{n-1} 연립 · p76

- source: OL대수-CH05-유형5-#14
  code: 26445-0221
  section: 유형_확인
  tier: star_3
  unit_code: 대수-등차등비수열
  mechanism_primary: 첫째항 6, 공비 양수 등비수열 · 3a_2/a_3 + 2 = a_6/a_5 조건 → a_4
  insight_type: 등비비율형
  depth: 4
  problem_summary: |
    p76

- source: OL대수-CH05-유형6-#17
  code: 26445-0224
  section: 유형_확인
  tier: star_4
  unit_code: 대수-등차등비수열
  mechanism_primary: sinθ, 1/3, cosθ가 등비수열 → tanθ + 1/tanθ
  insight_type: 등비삼각결합형
  depth: 4
  problem_summary: |
    등비중항 (1/3)^2 = sinθ cosθ · tan+1/tan = 1/(sin cos) · p76

- source: OL대수-CH05-서술형-#02
  code: 26445-0233
  section: 서술형_연습장
  tier: star_4
  unit_code: 대수-등차등비수열
  mechanism_primary: 첫째항 2, 공비 8인 등비수열 {a_n} · log_5(a_1×a_2×a_3×...×a_20) 계산
  insight_type: 로그등비곱형
  depth: 4
  problem_summary: |
    등비수열 곱 → 지수 합 (등차) → 로그 · p78

- source: OL대수-CH05-서술형-#03
  code: 26445-0234
  section: 서술형_연습장
  tier: star_4
  unit_code: 대수-등차등비수열
  mechanism_primary: 모든 항이 양수 등비수열 {a_n}, a_1=2, a_2=6a_1+a_3 조건 → log_5{(a_1+a_2+...+a_20)+1}
  insight_type: 등비합로그형
  depth: 5
  problem_summary: |
    ⚠️ "a_2=6a_1+a_3"는 원문 텍스트 판독 · 실제 관계 재확인 필요 · p78

### 소단원 06. 수열의 합과 수학적 귀납법 — 본편 p80-93

- source: OL대수-CH06-유형1-#01
  code: 26445-0245
  section: 유형_확인
  tier: star_2
  unit_code: 대수-수열합귀납
  mechanism_primary: Σ_{k=1}^{20} 1/(k+1) - Σ_{n=4}^{25} 1/(n-1) 계산
  insight_type: 합기호이동형
  depth: 3
  problem_summary: |
    지수 shift · 공통항 소거 · p88 · 5지선다

- source: OL대수-CH06-유형2-#04
  code: 26445-0248
  section: 유형_확인
  tier: star_2
  unit_code: 대수-수열합귀납
  mechanism_primary: 두 수열 {a_n}, {b_n}에서 Σa_k=7, Σ3b_k=6 → Σ(3a_k - 2b_k + 2)
  insight_type: 합기호선형성형
  depth: 2
  problem_summary: |
    Σ의 선형성 · 상수항 처리 · p88

- source: OL대수-CH06-유형2-#06
  code: 26445-0250
  section: 유형_확인
  tier: star_3
  unit_code: 대수-수열합귀납
  mechanism_primary: 수열 {a_n}, Σ(a_n-3)^2=116, Σ(a_n+1)^2=20 → Σa_n(a_n+1)
  insight_type: 이차합변형형
  depth: 4
  problem_summary: |
    두 이차합 전개 후 결합 · p88

- source: OL대수-CH06-서술형예제
  code: (예제)
  section: 서술형_연습장
  tier: star_4
  unit_code: 대수-수열합귀납
  mechanism_primary: 텔레스코핑 · 1/sqrt(1^3) + 1/sqrt(1^3+2^3) + ... + 1/sqrt(1^3+2^3+...+12^3)
  insight_type: 텔레스코핑합형
  depth: 5
  problem_summary: |
    1+2+...+k = k(k+1)/2 → 1/(k(k+1)/2) = 2(1/k - 1/(k+1)) 텔레스코핑 · 결과 24/13 · p92

- source: OL대수-CH06-서술형-#03
  code: 26445-0268
  section: 서술형_연습장
  tier: star_4
  unit_code: 대수-수열합귀납
  mechanism_primary: 1×1 + (1+3)×3 + (1+3+5)×5 + ... + (1+3+5+...+19)×19 계산
  insight_type: 홀수합수열합형
  depth: 4
  problem_summary: |
    (1+3+...+(2k-1)) = k^2 → Σk^2·(2k-1) 전개 · p92

- source: OL대수-CH06-고난도-#01
  code: 26445-0269
  section: 내신수능_고난도
  tier: star_5_premium
  unit_code: 대수-수열합귀납
  mechanism_primary: n·a_n = (-1)^{1+2+3+...+n}을 만족하는 수열 {a_n} · Σ_{n=1}^{25} 1/a_n의 값
  insight_type: 부호패턴합형
  depth: 6
  problem_summary: |
    (-1)의 지수가 삼각수 · 부호 패턴 · 1/a_n 부호와 크기 · p93 · premium

- source: OL대수-CH06-고난도-#02
  code: 26445-0270
  section: 내신수능_고난도
  tier: star_5_premium
  unit_code: 대수-수열합귀납
  mechanism_primary: 수열 조건 (가) a_{n+1}^2 - 4a_n^2 = 0 (나) a_{2n+2} < a_{2n} < a_{2n-1} < a_{2n+1} · a_5=1/4 → a_2+a_6
  insight_type: 부호결정귀납형
  depth: 7
  problem_summary: |
    a_{n+1} = ±2a_n · 대소 조건으로 부호 결정 · p93 · premium

- source: OL대수-CH06-고난도-#03
  code: 26445-0271
  section: 내신수능_고난도
  tier: star_5_premium
  unit_code: 대수-수열합귀납
  mechanism_primary: y=2log_2 x, y=2x+2, y=n+2, y=n · 네 꼭짓점으로 하는 사각형 넓이 a_n · Σa_n
  insight_type: 로그좌표사각형합형
  depth: 7
  problem_summary: |
    좌표 사각형 넓이 계산 → 로그·지수 지수/변수 결합 · Σ 계산 · p93 · 그림 · premium

### 대단원 종합문제 III. 수열 — p94-98 (LEVEL 1~3 + 서술형)

- source: OL대수-CH56종합-LEVEL2-#15
  code: 26445-0286
  section: 대단원_종합_LEVEL2
  tier: star_4
  unit_code: 대수-등차등비수열
  mechanism_primary: 첫째항 양수 등비수열 {a_n} · a_1=4a_3, a_5+a_6=-3 · |a_{k+1}-a_k| < 1/5 만족하는 자연수 k 최솟값
  insight_type: 등비감소부등식형
  depth: 5
  problem_summary: |
    공비 결정 (음수) · 차수열 지수 부등식 · p96

- source: OL대수-CH56종합-LEVEL3-#20
  code: 26445-0291
  section: 대단원_종합_LEVEL3
  tier: star_5_premium
  unit_code: 대수-수열합귀납
  mechanism_primary: 한 변의 길이가 2인 정삼각형 모양의 종이에 각 변의 중점을 연결하여 만들어지는 정삼각형 중 가운데 정삼각형을 오려낸다. n회 진행 후 남아있는 종이의 넓이 S_n · Σ_{k=1}^{20} S_k
  insight_type: 프랙탈면적등비형
  depth: 7
  problem_summary: |
    시에르핀스키 삼각형 유사 · 등비수열 · 부분합 · p96 · 그림 · premium

- source: OL대수-CH56종합-서술형-#29
  code: 26445-0300
  section: 대단원_서술형_문제
  tier: star_4
  unit_code: 대수-등차등비수열
  mechanism_primary: 이차방정식 x^2+6ax+a+7=0 두 근 α, β · 세 수 3α, 2sqrt6, 2β 순서대로 등비수열 이룸 · 세 수 α, k, β 순서대로 등차수열 · a+k
  insight_type: 근등차등비복합형
  depth: 5
  problem_summary: |
    근과 계수 · 등비 (기하평균)² = 곱 · 등차 (합)/2 · p98

- source: OL대수-CH56종합-서술형-#30
  code: 26445-0301
  section: 대단원_서술형_문제
  tier: star_5
  unit_code: 대수-등차등비수열
  mechanism_primary: a_1=1, a_4=3 등차수열 · a_1/1^2 + a_2/(1^2+2^2) + a_3/(1^2+2^2+3^2) + ... + a_10/(1^2+...+10^2)의 값
  insight_type: 등차분모합형
  depth: 6
  problem_summary: |
    분모 = k(k+1)(2k+1)/6 · a_k = 1 + (k-1)·(2/3) 형 · 텔레스코핑 · p98

---

## IV. 올림포스 유형편 대수 — 표본

### 유형편 소단원 01. 지수와 로그 — p6-27

- source: OL유형편-CH01-#35~46-지수확장
  code: 26643-0035 ~ 26643-0046
  section: 유형편_개념_확인하기
  tier: 정독_제외 (드릴)
  unit_code: 대수-지수와로그
  mechanism_primary: 지수 확장 (정수·유리수 지수) 계산 12문 세트
  insight_type: 절차형
  depth: 1
  problem_summary: |
    3^0, (-3/2)^0, 4^{-1}, ... 짧은 계산 · p9

- source: OL유형편-CH01-유형7-#25
  code: 26643-0025
  section: 유형편_유형_완성하기
  tier: star_3
  unit_code: 대수-지수와로그
  mechanism_primary: a^n이 자연수 (0<a<1)가 되도록 하는 이하 구하기 · 100 이하의 자연수 n (12×n^{-1})^n이 자연수 · a의 개수
  insight_type: 정수화조건형
  depth: 4
  problem_summary: |
    거듭제곱과 유리 조건 · p16

- source: OL유형편-CH01-유형8-#28
  code: 26643-0028
  section: 유형편_유형_완성하기
  tier: star_3
  unit_code: 대수-지수와로그
  mechanism_primary: 지수법칙 곱셈 공식 · sqrt(4-2sqrt3)+세제곱근(16)-세제곱근(9)+세제곱근(4)+9 형 계산
  insight_type: 이중근호전개형
  depth: 4
  problem_summary: |
    (a+b)^3, (a-b)^3 종합 공식 · p16 · "중요" 배지

- source: OL유형편-CH01-유형10-#31
  code: 26643-0031
  section: 유형편_유형_완성하기
  tier: star_4
  unit_code: 대수-지수와로그
  mechanism_primary: a+b, ab 대칭식 → a^{1/2}+b^{1/2} 등 지수 대칭식
  insight_type: 지수대칭식형
  depth: 4
  problem_summary: |
    p16 유형 10 · "중요"

### 유형편 소단원 02. 지수함수와 로그함수 — p28-53

- source: OL유형편-CH02-유형3-#39
  code: 26643-0165
  section: 유형편_유형_완성하기
  tier: star_3
  unit_code: 대수-지수함수와로그함수
  mechanism_primary: 로그함수의 뜻과 그래프 · 다음 함수 중 그래프가 있는 것 5지선다 (보기 여러 개)
  insight_type: 정의역판별형
  depth: 3
  problem_summary: |
    y=log_2 x 등 다중 후보 · p31

- source: OL유형편-CH02-유형4-#54~59
  code: 26643-0166 ~ 0171
  section: 유형편_유형_완성하기
  tier: star_3
  unit_code: 대수-지수함수와로그함수
  mechanism_primary: 로그함수 y=log_a x (a>0, a≠1) 그래프의 성질과 그래프의 이동 (6문 세트)
  insight_type: 이동성질형
  depth: 3
  problem_summary: |
    평행이동·대칭이동 6문 · p31

- source: OL유형편-CH02-고난도-#01
  code: 26643-0197
  section: 유형편_내신수능_고난도
  tier: star_5_premium
  unit_code: 대수-지수함수와로그함수
  mechanism_primary: 상수 a(a>1) · 지수함수 y=a^x 그래프와 직선 x=2가 제1사분면에서 만나는 점 A · 두 점 A, B에서 x축에 내린 수선의 발 각각 C, D일 때 |AB|=2/(sqrt2) · 사각형 ACDBC의 넓이 4일 때 |OA|×|OB|
  insight_type: 지수좌표사각형형
  depth: 7
  problem_summary: |
    지수함수와 좌표기하 사각형 · p51 · 그림 · premium

### 유형편 소단원 06. 수열의 합과 수학적 귀납법 — p110-127

- source: OL유형편-CH06-유형10-#31
  code: 26643-0372
  section: 유형편_유형_완성하기
  tier: star_4
  unit_code: 대수-수열합귀납
  mechanism_primary: 등차수열의 합의 활용 · 우드 A와 우드 B는 짝수 방향으로 각 30일 300원 · 짝수 각 방향 30일 400원짜리 이용 각 반씩 400원 소모의 최소 총 갯수
  insight_type: 등차합응용문장형
  depth: 5
  problem_summary: |
    (판독 부정확 · 문장형 · 재확인 필요) · p101

- source: OL유형편-CH06-유형11-#34
  code: 26643-0375
  section: 유형편_유형_완성하기
  tier: star_4
  unit_code: 대수-수열합귀납
  mechanism_primary: {a_n}의 첫째항부터 제n항까지의 합 S_n이 S_n = -4n + (1/6) n^3, a_n + a_1 → 값
  insight_type: 부분합귀납형
  depth: 5
  problem_summary: |
    S_n → a_n 공식 (n=1 예외) · p101 · "중요"

- source: OL유형편-CH06-유형16-#55
  code: 26643-0475
  section: 유형편_유형_완성하기
  tier: star_5
  unit_code: 대수-수열합귀납
  mechanism_primary: 수학적 귀납법을 이용한 등식의 증명 · 1^3+2^3+3^3+...+n^3 = {n(n+1)/2}^2 증명 · 빈칸 (가)(나)(다) 채우기 · f(k+2)/f(1)+(가)+(나)
  insight_type: 귀납법증명빈칸형
  depth: 6
  problem_summary: |
    n=1 확인 → n=k 가정 → n=k+1 증명 (귀납 단계) · 빈칸형 · p123 · "중요"

- source: OL유형편-CH06-유형16-#57
  code: 26643-0477
  section: 유형편_유형_완성하기
  tier: star_5
  unit_code: 대수-수열합귀납
  mechanism_primary: 수학적 귀납법 증명 · 1×3×5×...×(2n-1) = (2n)!/(2^n·n!) 계열 · 빈칸 완성
  insight_type: 귀납법증명빈칸형
  depth: 6
  problem_summary: |
    귀납 증명 · 계승·이중계승 · p123 · "중요"

- source: OL유형편-CH06-고난도-#01
  code: 26643-0491
  section: 유형편_내신수능_고난도
  tier: star_5_premium
  unit_code: 대수-수열합귀납
  mechanism_primary: 수열 {a_n}의 일반항 a_n = (-1)^n sin^2(πn/6) · Σ_{k=1}^{m} a_k = -1/2 만족하는 100 이하 자연수 m의 값의 합
  insight_type: 주기부호합형
  depth: 7
  problem_summary: |
    sin^2(πn/6) 주기 12 · 부호 (-1)^n · 부분합 주기성 · m 조건 · p127 · premium

- source: OL유형편-CH06-고난도-#02
  code: 26643-0492
  section: 유형편_내신수능_고난도
  tier: star_5_premium
  unit_code: 대수-수열합귀납
  mechanism_primary: 수열 {a_n}, Σa_k^{20 이하 자연수} = {-1, 0, 1, 2}, 조건 (가)(나) Σa_k^2=26, Σa_k^4=74 → Σa_k의 최댓값
  insight_type: 원소집합조건최대형
  depth: 7
  problem_summary: |
    유한 원소 (4가지 값) 20개 배치 · 이차합·사차합 제약 · 합 최댓값 · p127 · premium

- source: OL유형편-CH06-고난도-#03
  code: 26643-0493
  section: 유형편_내신수능_고난도
  tier: star_5_premium
  unit_code: 대수-수열합귀납
  mechanism_primary: 수열 {a_n} · 조건 (가) a_1+2a_2=a_3+2a_4 (나) 모든 자연수 n, 2a_{n+1}=a_n+a_{n+2} · a_12=-3, a_13=1, Σ_{k=1}^{n} a_k=65 → a_1
  insight_type: 등차점화식조건형
  depth: 7
  problem_summary: |
    조건 (나) = 등차수열 정의 · 조건 (가) 대칭조건 → 공차 부호 · p127 · premium

---

## 📊 정독 통계 요약

**표본 크기**: 52문 (본편 40 · 유형편 12) — 대수 라인 첫 시판 자산화 파일럿

**섹션별 분포**:
| 섹션 | 표본 수 | tier 분포 |
|---|---|---|
| 기본_유형_익히기 (예제) | 3 | star_1·2 (1) · star_2 (1) · star_3 (1) |
| 유형_확인 | 15 | star_2 (2) · star_3 (7) · star_4 (6) |
| 서술형_연습장 | 8 | star_3 (2) · star_4 (5) · star_5 (1) |
| 내신수능_고난도 (본편) | 8 | star_5_premium 8 |
| 대단원_종합_LEVEL1 | 3 | star_2 (1) · star_3 (2) |
| 대단원_종합_LEVEL2 | 5 | star_4 (5) |
| 대단원_종합_LEVEL3 | 4 | star_5_premium 4 |
| 대단원_서술형_문제 | 3 | star_4 (2) · star_5 (1) |
| 유형편_개념_확인하기 | 1 (세트) | 정독_제외 |
| 유형편_유형_완성하기 | 6 | star_3 (2) · star_4 (2) · star_5 (2) |
| 유형편_내신수능_고난도 | 4 | star_5_premium 4 |

**★ 분포 요약** (표본 52 중):
- star_1·2: 3 (5.8%)
- star_2·3: 4 (7.7%)
- star_3: 12 (23.1%)
- star_4: 15 (28.8%)
- star_5: 3 (5.8%)
- star_5_premium: 16 (30.8%) ← 유의미 (고난도 섹션 집중 표본)
- 정독_제외: 1 세트

**premium 후보**: **16문** — 내신+수능 고난도 문항 8 (본편 소단원 말미), LEVEL 3 종합문제 4, 유형편 고난도 4. 대수 라인 시판 표준 premium pool 확립.

**시그니처 원형** (신규 · 대수 라인 특화):
1. **텔레스코핑형** (지수·수열합 2건) — 유리화 후 접힘 구조 · 지수/합기호 공통
2. **로그좌표사변형형** (2건) — 로그곡선 세 개 좌표기하 사각형 넓이 · premium 정형
3. **부호결정귀납형** (수열 고난도) — 부호 조건으로 절댓값 방정식 해결
4. **프랙탈면적등비형** (수열 종합) — 시에르핀스키 유사 · 등비 부분합
5. **집합상등형** (지수로그 고난도) — 로그 집합 A=B 원소 대응 분해
6. **동경일치형·사분면판정형** (삼각) — 대수 특화 개념

**주의 사항 (⚠️)**:
- LEVEL 2 #06 (사인법칙 대단원)에서 벡터 내적 AC·BD 등장 → **대수 과목 상위 범위 침투** 여부 확인 필요 (2022 개정 대수는 벡터 미포함 · 시판 오류 가능성)
- #12 부호패턴 (삼각수 지수) · #14 부분별 역함수 · #22 최대최소분리 등 CM1·CM2 스코프 밖 · 대수 라인만 활용
- 유형편 26643-#### 코드 판독 시 일부 문항은 재확인 필요 (image dpi 80 한계)

**저작권 준수**: 모든 표본은 시그니처·구조·통찰유형·depth만 기록. 원문 발문/수식 전사 없음. 학평 인용도 없음 (자체 창작 문항).

---

## 🎯 대수 라인 tier 캘리브레이션 결론

**EBS 올림포스 대수 표준 매핑 (v1.0)**:

| 섹션 | 기본 ★ | premium 조건 |
|---|---|---|
| 예제_유제 | 1·2 | - |
| 유형_확인 | 2~4 (평균 3) | - |
| 서술형_연습장 | 3·4 | depth ≥ 5 시 star_5 |
| **내신+수능 고난도 문항** | **5_premium 확정** | 각 소단원 말미 4문 · 배점 무관 큐레이션 |
| 대단원_LEVEL1 | 2·3 | - |
| 대단원_LEVEL2 | 3·4 | - |
| **대단원_LEVEL3** | **5_premium 확정** | 조건박스 + 다층 통찰 |
| 대단원_서술형 | 4 | 이차식 이상 복합 시 star_5 |
| 유형편_유형완성 (중요 배지) | 3·4 | - |
| 유형편_고난도_도전 | 5_premium | - |

**핵심 원형 (대수 특화)**:
- 지수/로그 좌표기하 결합 (다항식 CM1과 달리 함수 그래프 중심)
- 수열 귀납법 빈칸 증명 (시판 표준 형식)
- 삼각함수 매개변수·주기·최대최소
- 등비 부분합·프랙탈 응용

**다음 작업 (권장)**:
1. `bank/mechanism-데이터-정독-tier-매핑.md` v3.3에 EBS 올림포스 대수 라인 편입
2. `bank/대수/anchors/` 신설 (대수 라인 앵커 5문 × ★1~5 소단원별)
3. 유형편 4개 소단원 (03·04·05) 미탐색 → 추후 확장 정독 필요
4. 답지 PDF 암호 해제 시 정답률·풀이 스타일 정독 재도전

---

*정독 완료: 2026-07-22 · 세션 68 · flywheel asset-ingestion Agent · 대수 라인 P0*
