---
name: mechanism-데이터-대수-수능모고-고3
description: 고3 수능·모의평가 실전 대수(수학Ⅰ) 파트 정독 데이터 v1.0. 6 papers × 대수 파트만 · 실측 66 문 · star/M/I/X + seed_id. 저작권 3원소 요약, 원문 전사 없음. 대수 라인 flywheel 실전 자산 (원본 은행 P0).
metadata:
  type: reference
  version: v1.0
  established: 2026-07-22
  session: 68+
  source: 참고자료/대수/대수-수능모고/ · EBS 수능/모의평가/전국연합 원문 PDF (2025~2026)
  section: 대수 (지수·로그·지수함수·로그함수·삼각함수·삼각함수의 그래프·삼각함수의 활용·등차등비·수열의 합·수학적 귀납법)
  unit_code: 대수
  sub_units:
    - 지수 / 로그 · 지수함수 · 로그함수
    - 삼각함수 값 · 항등식 · 각의 변환
    - 삼각함수 그래프 · 주기 · 최댓값
    - 삼각함수 활용 (사인·코사인법칙 · 외접원 · 넓이)
    - 등차·등비수열 · 수열의 합 (Σ)
    - 수학적 귀납법 (점화식)
  citation_note: "EBSi/평가원/시도교육청 학평 기출 · 학습 목적 · 저작권 준수 (원문 요약 · 발문 시그니처 3원소 · 원문 전사 없음)"
  extract_range: "6 papers × 22 공통 (1~22번) 중 대수 파트만 · 확률과 통계·미적분·기하 선택과목 페이지 (23~30) 제외"
  papers:
    - 2025_3월_고3_학평 (17개시도 주관 전국연합학력평가 · 2025-03 시행)
    - 2026학년도_6월_모의평가 (평가원 · 2025-06-05 시행 · 파일명 2025_6월_고3 및 2026_6월_고3 동일)
    - 2026학년도_9월_모의평가 (평가원 · 2025-09 시행 · 파일명 2025_9월_고3)
    - 2025_10월_고3_학평 (서울시교육청 주관 · 2025-10 시행)
    - 2025학년도_대학수학능력시험 (평가원 · 2024-11 시행 · 파일명 2025_고3_수능)
    - 2026학년도_5월_고3_학평 (경기교육청 주관 · 2025-05 시행)
  unique_papers: 6
  total_daesu_problems: 66  # 실측
  judgment_protocol: schema.md v3.9 3층 모델 (M·I·X) + v5.1 8축 정밀 게이트
  parent_regression: bank/mechanism-데이터-rpm-대수.md v1.0 (대수 CH01~CH10 원형 매핑 · 시험지·킬러 실전 표본으로 회귀 검증)
  parent_precedent: bank/mechanism-데이터-전국연합-CM2-FN.md v1.0 (학평 4점 실전 star_5 회귀 · 대수 킬러 급 원형 확대)
  purpose: |
    대수 라인 실전 원본 은행 확보 · 세션 68 이후 대수 시험지 제작 시 원본 pick pool P0.
    수능·모평 킬러(20·21·22번) · 학평 준킬러(14·15·20~22) premium 원형 매핑.
    RPM 대수 v1.0 (원본 pool 유형·규모) + 본 자산 (실전 정점 · killer) 이중 트랙 완성.
  known_duplicates:
    - {file_a: "2025 6월 고3.pdf", file_b: "2026 6월 고3.pdf", note: "MD5 hash 완전 일치 · 동일 파일 (2026학년도 6월 모평)"}
---

# 대수 수능·모의평가·학평 고3 정독 데이터 v1.0

## 배경

**대수 라인** flywheel 실전 자산 (2026-07-22 · 세션 68 확립). 마스터 지시 P0 신규:
- 대수(수학Ⅰ) 실전 원본 pool 확보 → 시험지 제작 시 star_5·premium 원형 즉시 pick 가능
- RPM 대수 (규모 pool · 유형 원형) + **본 자산 (killer 정점 · 실전 노이즈)** 이중 트랙
- 세션 61 CM2-FN 학평 자산화 방법론 계승 · 학평/수능 4점 문항 요약 · 발문 시그니처 3원소만

**파일 구성** (참고자료/대수/대수-수능모고/ 22 PDF):
- 문제지 11개 · 해설지 11개 (고2·고3 학평 + 6·9월 모평 + 수능 + 5월 학평)
- 본 자산 스코프: **고3 파일 + 수능 + 2026 5월 고3** = 7 파일명, 실제 **6 unique papers** (2025 6월 ↔ 2026 6월 dupe)
- 각 시험 = 공통 22번 (수Ⅰ 대수 + 수Ⅱ 미적분 mix) + 선택 8번 (확통·미적·기하). **본 자산은 대수 파트만 22번 이내에서 filter**.

**대수 문항 판별 기준** (schema.md v3.9 + 2022 개정 교육과정 대수 성취기준):
- ✅ 지수·로그 (수식·방정식·부등식)
- ✅ 지수함수·로그함수 (그래프·평행이동·대칭)
- ✅ 삼각함수 값 (변환·항등식·부호)
- ✅ 삼각함수 그래프 (주기·최댓값·평행이동)
- ✅ 삼각함수 활용 (사인·코사인법칙·외접원·넓이)
- ✅ 등차·등비수열 (일반항·합·공차·공비)
- ✅ 수열의 합 Σ (합·시그마 · 부분분수)
- ✅ 수학적 귀납법 (점화식·귀납법)
- ❌ 극한/미분/적분 (수Ⅱ = 제외)
- ❌ 이차함수·다항함수 극값 (수Ⅱ 및 하위 교육과정 = 제외)

## 6 papers × 대수 파트 실측 표본

| 파일명 | 실제 시험명 | 대수 문항 | 3점 | 4점 | premium 후보 |
|---|---|---:|---:|---:|---:|
| 2025_3월_고3 | 2025-03 고3 학평 (17시도) | 10 | 5 | 5 | 1 (21번) |
| 2025_6월_고3 = 2026_6월_고3 | 2026학년도 6월 모평 | 11 | 4 | 7 | 2 (20·22) |
| 2025_9월_고3 | 2026학년도 9월 모평 | 11 | 4 | 7 | 2 (20·22) |
| 2025_10월_고3 | 2025-10 고3 학평 (서울) | 11 | 4 | 7 | 2 (20·22) |
| 2025_고3_수능 | 2025학년도 대수능 | 11 | 4 | 7 | 2 (20·22) |
| 2026_5월_고3 | 2026학년도 5월 학평 (경기) | 12 | 4 | 8 | 2 (20·22) |
| **합계** | 6 papers · **unique** | **66** | 25 | 41 | **11** |

**★ 예측 분포** (실측 M·I 판정):
- ★ 5×약 45 (10~19번 · 4점 준킬러)
- **★ 5 premium×11** (20·21·22번 킬러 · 학평 20~22 · 수능 20·22)
- ★ 4×약 15 (3점 상단 · 8·10·12번)
- ★ 3×약 5 (기본 3점)

---

## Ⅰ. 2025년 3월 고3 전국연합학력평가 (2025-03 시행)

**출처**: 17개 시도교육청 주관 · EBSi 학습자료 · 저작권 EBSi
**대수 파트**: 10 문 (Q3·Q6·Q8·Q10·Q13·Q15·Q16·Q18·Q20·Q21)

```yaml
- id: 학평-2025-03-고3-Q03
  source: 2025-03-고3-학평-3번
  page: 1
  vendor_label: 3점 · 등비수열 기본
  summary: |
    모든 항이 양수인 등비수열 {a_n}이 a_4 = 2a_3 + 3a_2를 만족할 때, 수열 {a_n}의 공비.
  category: 등비수열 · 공비 방정식
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, description: "a_n = a_1 r^(n-1) 표현 · 방정식을 공비 r만의 방정식으로 환원"}
    - {step: 2, type: I-CON, depth: 1, description: "이차방정식 r 결정 · 양수 조건으로 근 선택"}
  insight_count: 2
  depth_score: 4.5
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 등비수열 방정식 → r 이차방정식 → 양수 근 선택
  rationale: |
    학평 3점 표준. 등비수열 정의 즉시 적용 후 이차방정식 소단원 결합. depth 2 EQV. ★ 3.

- id: 학평-2025-03-고3-Q06
  source: 2025-03-고3-학평-6번
  page: 2
  vendor_label: 3점 · 삼각함수 각변환
  summary: |
    sin(3π/2 + θ) = 1/3일 때, sinθ tanθ의 값.
  category: 삼각함수 각변환 · 항등식
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-CON, depth: 1, description: "3π/2+θ = -cosθ 변환"}
    - {step: 2, type: I-EQV, depth: 2, description: "cosθ = -1/3 → sin²θ · tan = sin/cos"}
  insight_count: 2
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 각 변환 → cosθ 확정 → sin²θ 구하고 tanθ 결합
  rationale: |
    표준 3점. 각 변환 (3π/2 + θ) 공식 즉시. sinθ tanθ = sin²θ / cosθ 도구. ★ 3.

- id: 학평-2025-03-고3-Q08
  source: 2025-03-고3-학평-8번
  page: 3
  vendor_label: 3점 · 로그 계산
  summary: |
    두 실수 a = (log 3)² - (log 2)², b = log_6 10에 대하여 10^(ab)의 값.
  category: 로그 인수분해 · 밑 변환
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-BW, depth: 2, description: "a = (log3-log2)(log3+log2) = log(3/2)·log6 인수분해"}
    - {step: 2, type: I-CON, depth: 2, description: "b·a = log(3/2)·log6·log_6 10 = log(3/2)·log10 = log(3/2) → 10^ab = 3/2"}
  insight_count: 2
  depth_score: 5.0
  base_star: 4
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: 로그 인수분해 (합·차) + 밑 변환 · 10^log = 원값 복원
  rationale: |
    표준 3점 상단. 인수분해 통찰 (log³-log²) 요구 · depth 2 BW · 학생 첫 관문. ★ 3.

- id: 학평-2025-03-고3-Q10
  source: 2025-03-고3-학평-10번
  page: 3
  vendor_label: 4점 · 시그마 부분별-수열
  summary: |
    수열 {a_n}이 모든 자연수 n에 대하여 a_n = 10 (n이 3의 배수 아님), -19 (n이 3의 배수)
    일 때, Σ_{k=1}^n a_k = Σ_{k=1}^{3n} a_k를 만족시키는 자연수 n의 값.
  category: 부분별-수열 Σ · 방정식
  M: {s: 4, k: 3, a: 2, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 2, description: "n의 3 나머지 케이스 나눠 부분합 표현식 도출"}
    - {step: 2, type: I-CON, depth: 3, description: "Σ_1^n vs Σ_1^{3n} 방정식 · 좌우 항수 정합"}
    - {step: 3, type: I-VF, depth: 2, description: "케이스별 방정식 해 · 자연수 조건"}
  insight_count: 3
  depth_score: 6.67
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 조건통합형
  mechanism_primary: 부분별-수열 부분합 케이스 분리 → 시그마 등호 방정식
  rationale: |
    학평 4점 준중급. 3의 배수 케이스 분리는 저노출 · CON depth 3 · Σ 정합 요구. ★ 4.

- id: 학평-2025-03-고3-Q13
  source: 2025-03-고3-학평-13번
  page: 5
  vendor_label: 4점 · 삼각함수 두 식으로 정의된 함수 최대·최소
  summary: |
    0이 아닌 실수 a에 대하여 f(x) = a sin x (x<0), 1-cos x (x≥0). 닫힌구간 [-π, π]에서
    f의 최댓값·최솟값 M, m. M - m = 4를 만족시키는 모든 a의 값의 곱.
  category: 삼각함수 두 식으로 정의된 함수 · 최대·최소 케이스
  M: {s: 4, k: 3, a: 2, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 2, description: "각 식에서 최댓/최솟 표현 (a 부호 케이스)"}
    - {step: 2, type: I-CON, depth: 3, description: "a>0 · a<0 케이스 분리 M-m 방정식"}
    - {step: 3, type: I-BW, depth: 2, description: "|a| = 3 · 곱 계산"}
  insight_count: 3
  depth_score: 6.67
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 조건통합형
  mechanism_primary: 두 삼각식으로 정의된 함수 · 부호 케이스 · 최대-최소 차 방정식
  rationale: |
    삼각함수 그래프 활용 · 부분 정의 · 부호 이중 케이스. 학평 4점 중급 · depth 3 CON. ★ 4.

- id: 학평-2025-03-고3-Q15
  source: 2025-03-고3-학평-15번
  page: 6
  vendor_label: 4점 · 지수·로그 두 식으로 정의된 함수 일대일대응
  summary: |
    세 실수 a, p, q (p<q)에 대하여 f(x) = |2^x - 4| (x≤p or x≥q), a + log_2 x (p<x<q).
    f가 실수 전체 집합에서 일대일대응일 때, f((p+q)/2)의 값.
  category: 지수·로그 두 식으로 정의된 함수 · 일대일대응 정합
  M: {s: 5, k: 4, a: 3, t: 1}
  M_total: 13
  insights:
    - {step: 1, type: I-EQV, depth: 3, description: "|2^x - 4| 그래프 (V자 · 꼭짓점 x=2) · log_2 x 그래프 분석"}
    - {step: 2, type: I-CON, depth: 3, description: "일대일대응 조건 (좌·우 매끄러운 연결 · 치역 겹침 없음)"}
    - {step: 3, type: I-VF, depth: 2, description: "p·q 결정 · (p+q)/2 대입 → 값"}
  insight_count: 3
  depth_score: 8.0
  base_star: 5
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 조건통합형
  mechanism_primary: 3-piece 함수 일대일대응 정합 · 절댓값 지수 + 로그 그래프 결합
  friction_triggers: [F1, F3]
  rationale: |
    학평 4점 상급. 지수 절댓값 + 로그 3-piece 함수 일대일대응 정합 · EQV depth 3.
    수능 킬러급 수준. ★ 4 상단 (premium 미달 · depth 8 임계 미도달).

- id: 학평-2025-03-고3-Q16
  source: 2025-03-고3-학평-16번
  page: 6
  vendor_label: 3점 단답형 · 로그방정식
  summary: |
    log_3(x-2) = log_9(x+10)을 만족시키는 실수 x의 값.
  category: 로그방정식 · 밑 통일
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, description: "log_9 = (1/2)log_3 · 양변 밑 통일"}
    - {step: 2, type: I-CON, depth: 1, description: "(x-2)² = (x+10) 이차방정식 · 진수 조건 · 근 선택"}
  insight_count: 2
  depth_score: 3.0
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 절차형
  mechanism_primary: 로그 밑 통일 → 이차방정식 → 진수 조건 필터
  rationale: |
    단답형 3점 표준 로그방정식. 밑 통일 · 진수 조건 · 이차방정식 3-step 절차. ★ 3.

- id: 학평-2025-03-고3-Q18
  source: 2025-03-고3-학평-18번
  page: 7
  vendor_label: 3점 단답형 · 시그마 확장
  summary: |
    수열 {a_n}에 대하여 Σ_{k=1}^8 a_k = 8, Σ_{k=1}^8 a_k² = 20일 때,
    Σ_{k=1}^8 (a_k + 3)(a_k - 1)의 값.
  category: 시그마 성질 · 다항식 전개
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 1, description: "(a+3)(a-1) = a² + 2a - 3 전개"}
    - {step: 2, type: I-CON, depth: 2, description: "Σ 분배 · Σa² + 2Σa - 3·8 계산"}
  insight_count: 2
  depth_score: 4.5
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 절차형
  mechanism_primary: 다항식 전개 → 시그마 분배 성질
  rationale: |
    단답형 3점 · 시그마 성질 · 다항식 전개 도구만. depth 2 CON. ★ 3.

- id: 학평-2025-03-고3-Q20
  source: 2025-03-고3-학평-20번
  page: 7
  vendor_label: 4점 단답형 · 삼각형 외접원
  summary: |
    삼각형 ABC에서 선분 BC를 3:1로 내분하는 점 D, ∠ADB=θ.
    AD=√2, AB:AC=2:1, cosθ = √2/4. 삼각형 ABD의 외접원 넓이 = qπ/p.
    p+q의 값 (p,q 서로소 자연수).
  category: 삼각형 · 내분점 · 사인·코사인법칙 · 외접원 넓이
  M: {s: 5, k: 4, a: 3, t: 2}
  M_total: 14
  insights:
    - {step: 1, type: I-EQV, depth: 3, description: "∠ADB=θ · ∠ADC=π-θ 보각 관계 · sin·cos 부호"}
    - {step: 2, type: I-CON, depth: 3, description: "BD, DC 미지수 도입 · AB, AC 코사인법칙 두 식"}
    - {step: 3, type: I-BW, depth: 3, description: "AB:AC=2:1 비율 조건 → BD 결정"}
    - {step: 4, type: I-VF, depth: 2, description: "삼각형 ABD 사인법칙 → 외접원 반지름 → 넓이"}
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: false
  tier: star_5
  target_cohort: 상위권
  insight_type: 조건통합형
  mechanism_primary: 내분점 보각 관계 + AB:AC 비율 + 코사인법칙 연립 → 외접원 사인법칙
  friction_triggers: [F1, F3]
  rationale: |
    학평 4점 준킬러 · 4단계 통찰 (EQV·CON·BW·VF) · 삼각형 여러 조건 결합.
    depth_score 8.75 · ★ 5 (premium 임계 미도달 · count=4 · max_depth=3 · depth 8.5 통과).

- id: 학평-2025-03-고3-Q21
  source: 2025-03-고3-학평-21번
  page: 8
  vendor_label: 4점 단답형 · 수열 귀납 킬러
  summary: |
    첫째항이 자연수인 수열 {a_n}이 모든 자연수 n에 대하여
    a_{n+1} = a_n/n (a_n ≥ 3), 10 (a_n < 3)
    을 만족시킬 때, a_6 = 2가 되도록 하는 모든 a_1 값의 합.
  category: 수열 점화식 · 조건 분기 · 역추적 킬러
  M: {s: 5, k: 4, a: 3, t: 2}
  M_total: 14
  insights:
    - {step: 1, type: I-EQV, depth: 3, description: "a_6=2 → a_5 케이스 (a_5≥3 · a_5=2n) or (a_5<3 · a_5=? but a_6=10 아님으로 모순)"}
    - {step: 2, type: I-CON, depth: 3, description: "역추적 · a_4 → a_3 → a_2 → a_1 케이스 트리 전개"}
    - {step: 3, type: I-VF, depth: 3, description: "각 케이스 정합 검증 (자연수 조건 · 분기 조건 <3 or ≥3)"}
    - {step: 4, type: I-BW, depth: 3, description: "유효 a_1 값 모두 수집 · 합 산출"}
  insight_count: 4
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: true
  tier: star_5_premium
  target_cohort: 상위권
  insight_type: 킬러
  mechanism_primary: 조건 분기 점화식 · 역추적 · 케이스 트리 폭발 관리
  friction_triggers: [F1, F2, F3]
  rationale: |
    학평 킬러 21번 · 수능 20~22 급. depth 9.0 · count 4 · max_depth 3 · 세 조건 모두 통과 → premium.
    조건 분기 (a_n</a_n≥3) 점화식 역추적 · 케이스 폭발 · 자연수 조건 필터.
    수능 특유 킬러 원형 · 대수 라인 flywheel P0 pool.
```

---

## Ⅱ. 2026학년도 6월 모의평가 (평가원 · 2025-06 시행)

**출처**: 한국교육과정평가원 · 파일명 2025_6월_고3 및 2026_6월_고3 (MD5 완전 일치 · 동일 파일)
**대수 파트**: 11 문 (Q1·Q3·Q6·Q8·Q10·Q12·Q14·Q16·Q18·Q20·Q22)

```yaml
- id: 모평-2026-06-Q01
  source: 2026학년도-6월-모평-1번
  page: 1
  vendor_label: 2점 · 지수 계산
  summary: 4^(1/4) × 2^(1/2)의 값.
  category: 지수 · 밑 통일 곱셈
  M: {s: 1, k: 1, a: 0, t: 0}
  M_total: 2
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 2
  premium: false
  tier: star_2
  target_cohort: 하위권
  insight_type: 절차형
  mechanism_primary: 지수법칙 즉시 (밑 통일 · 지수 합)
  rationale: 2점 문항 · 지수법칙 즉시 · ★ 2.

- id: 모평-2026-06-Q03
  source: 2026학년도-6월-모평-3번
  page: 1
  vendor_label: 3점 · 시그마 성질
  summary: 수열 {a_n}에 대하여 Σ_{k=1}^7 a_k = 8일 때, Σ_{k=1}^7 (2a_k + 1)의 값.
  category: 시그마 · 선형 분배
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - {step: 1, type: I-CON, depth: 1, description: "Σ(2a_k+1) = 2Σa_k + 7·1"}
  insight_count: 1
  depth_score: 2.0
  base_star: 2
  star: 2
  premium: false
  tier: star_2
  target_cohort: 하위권
  insight_type: 절차형
  mechanism_primary: 시그마 분배 성질
  rationale: 시그마 기본 계산 · ★ 2.

- id: 모평-2026-06-Q06
  source: 2026학년도-6월-모평-6번
  page: 2
  vendor_label: 3점 · 삼각함수 그래프
  summary: 두 양수 a, b에 대하여 f(x) = a cos bx + 1의 최댓값 8, 주기 π일 때, a+b.
  category: 삼각함수 · 최댓값·주기 → a·b 결정
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-CON, depth: 2, description: "a + 1 = 8 · 2π/b = π → a=7, b=2"}
  insight_count: 1
  depth_score: 3.0
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 절차형
  mechanism_primary: 최댓값·주기 두 방정식 즉시
  rationale: 삼각함수 그래프 표준 3점 · ★ 3.

- id: 모평-2026-06-Q08
  source: 2026학년도-6월-모평-8번
  page: 3
  vendor_label: 3점 · 삼각함수 항등식
  summary: sin(π-θ) > 0이고 2cosθ = sinθ일 때, cosθ의 값.
  category: 삼각함수 · sin·cos 관계 · 부호
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 2, description: "sinθ = 2cosθ · sin²+cos²=1 대입 → cos² = 1/5"}
    - {step: 2, type: I-CON, depth: 2, description: "sin(π-θ)=sinθ>0 · sin=2cos → cos>0"}
  insight_count: 2
  depth_score: 4.5
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 통찰형
  mechanism_primary: sin·cos 비 관계 · 항등식 · 부호 조건 필터
  rationale: 항등식 · 부호 함정 3점 · ★ 3.

- id: 모평-2026-06-Q10
  source: 2026학년도-6월-모평-10번
  page: 3
  vendor_label: 4점 · 로그함수 그래프
  summary: |
    실수 a(a>1)에 대하여 곡선 y = log_a(x+3) ∩ y = log_a(-x+3) = A,
    각각 x축 교점 B, C. 삼각형 ABC가 정삼각형일 때 a의 값.
  category: 로그함수 대칭 · 정삼각형 조건
  M: {s: 4, k: 3, a: 2, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 2, description: "두 로그함수 y축 대칭 · A는 x=0에서 (0, log_a 3)"}
    - {step: 2, type: I-CON, depth: 2, description: "B=(-2,0), C=(2,0) → BC=4"}
    - {step: 3, type: I-BW, depth: 3, description: "정삼각형 조건 · 높이 = 2√3 · log_a 3 = 2√3 → a^(2√3) = 3"}
  insight_count: 3
  depth_score: 7.0
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 조건통합형
  mechanism_primary: 로그함수 대칭 · 정삼각형 높이 조건 → 지수 방정식
  rationale: 로그함수 · 대칭 · 정삼각형 결합 · depth 7 · ★ 4 중급.

- id: 모평-2026-06-Q12
  source: 2026학년도-6월-모평-12번
  page: 4
  vendor_label: 4점 · 수열 조건 분기
  summary: |
    (가) a_1 = a_3, (나) (a_{n+1} - a_n + 3)(a_{n+1} - 2a_n) = 0.
    조건 만족 모든 수열에 대한 a_4의 최댓값.
  category: 점화식 분기 · 경로 최적화
  M: {s: 4, k: 3, a: 2, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 2, description: "각 항 a_{n+1} = a_n - 3 OR 2a_n · 두 경로"}
    - {step: 2, type: I-CON, depth: 3, description: "a_1 = a_3 조건 → 두 스텝 경로 조합"}
    - {step: 3, type: I-BW, depth: 3, description: "a_4 최대 목표 · 경로 트리 · a_1 결정"}
  insight_count: 3
  depth_score: 7.33
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 조건통합형
  mechanism_primary: 분기 점화식 (곱=0 → 두 경로) · 순환 조건 필터 · 최댓값 경로 탐색
  friction_triggers: [F1, F3]
  rationale: 분기 점화식 킬러 前신 · depth 7.33 · ★ 4 상단. 21·22번 킬러 대비 원형.

- id: 모평-2026-06-Q14
  source: 2026학년도-6월-모평-14번
  page: 5
  vendor_label: 4점 · 삼각형 코사인법칙
  summary: |
    AB=2√7 인 삼각형 ABC에서 선분 BC의 중점 P, 선분 BC를 5:1 내분점 Q.
    AQ=3√2, sin(∠QAP):sin(∠APQ) = √2:3. 삼각형 ABC의 외접원 넓이.
  category: 삼각형 · 중점·내분점 · 사인법칙 · 외접원
  M: {s: 5, k: 4, a: 3, t: 2}
  M_total: 14
  insights:
    - {step: 1, type: I-EQV, depth: 3, description: "P (중점), Q (5:1 내분) 위치 관계 · PQ 길이 표현"}
    - {step: 2, type: I-CON, depth: 3, description: "sin비 조건 → APQ 삼각형 sin법칙 · AP 길이 결정"}
    - {step: 3, type: I-BW, depth: 3, description: "중선 정리 · AB² + AC² = 2(AP² + BP²) 활용"}
    - {step: 4, type: I-VF, depth: 2, description: "삼각형 ABC 외접원 반지름 · 넓이"}
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: true
  tier: star_5_premium
  target_cohort: 상위권
  insight_type: 조건통합형
  mechanism_primary: 중점·내분점 sin 비 + 중선 정리 + 사인법칙 4단계 통합
  friction_triggers: [F1, F3]
  rationale: |
    모평 4점 준킬러 · 4 통찰 · depth 8.75 · count=4 · max_depth=3 · **premium 임계 도달**.
    삼각함수 활용 정점 원형 · 중점·내분점·중선정리·사인법칙 조합.

- id: 모평-2026-06-Q16
  source: 2026학년도-6월-모평-16번
  page: 6
  vendor_label: 3점 단답형 · 로그방정식
  summary: log_5(x+1) + log_5(x-1) = log_25 9를 만족시키는 실수 x.
  category: 로그방정식 · 곱 성질 · 밑 통일
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - {step: 1, type: I-EQV, depth: 1, description: "log_5(x²-1) = (1/2)log_5 9 → x²-1=3"}
    - {step: 2, type: I-CON, depth: 1, description: "x=2 · 진수 조건 확인"}
  insight_count: 2
  depth_score: 3.0
  base_star: 3
  star: 3
  premium: false
  tier: star_3
  target_cohort: 중상위권
  insight_type: 절차형
  mechanism_primary: 로그 합 → 곱 · 밑 통일 · 진수 조건
  rationale: 표준 3점 로그방정식 · ★ 3.

- id: 모평-2026-06-Q18
  source: 2026학년도-6월-모평-18번
  page: 7
  vendor_label: 3점 단답형 · 시그마
  summary: Σ_{k=1}^6 (k² + 2k)의 값.
  category: 시그마 공식 (자연수 거듭제곱)
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - {step: 1, type: I-CON, depth: 1, description: "Σk² = n(n+1)(2n+1)/6 · Σk = n(n+1)/2 공식"}
  insight_count: 1
  depth_score: 2.0
  base_star: 2
  star: 2
  premium: false
  tier: star_2
  target_cohort: 하위권
  insight_type: 절차형
  mechanism_primary: 시그마 자연수 거듭제곱 공식 즉시
  rationale: 단답형 3점 표준 · ★ 2 상단.

- id: 모평-2026-06-Q20
  source: 2026학년도-6월-모평-20번
  page: 7
  vendor_label: 4점 단답형 · 수열 귀납 (가)(나) 채움
  summary: |
    0≤x<4일 때 f(x) = -x²+4x, 모든 실수 x에 대해 f(x+4)=f(x). 방정식 f(f(x))=f(x)의
    0 이상 실근을 크기순으로 a_n. a_20 + a_21 + a_22의 값 (가)(나)(다) 채움 → p+q+r.
  category: 주기함수 · 합성 방정식 · 수열 채움형
  M: {s: 5, k: 4, a: 3, t: 2}
  M_total: 14
  insights:
    - {step: 1, type: I-EQV, depth: 3, description: "f(x)=x 실근 0, 3 → f(f(x))=f(x) ↔ f(x)·(f(x)-3)=0"}
    - {step: 2, type: I-CON, depth: 3, description: "0≤x<4 케이스 f(x)·(f(x)-3)=0 해 · 주기 반복"}
    - {step: 3, type: I-BW, depth: 3, description: "3-구간 순환 (a_{3n-2}, a_{3n-1}, a_{3n} 등차수열)"}
    - {step: 4, type: I-VF, depth: 2, description: "a_20+a_21+a_22 위치 계산 · 등차수열 대입"}
  insight_count: 4
  depth_score: 8.75
  base_star: 5
  star: 5
  premium: true
  tier: star_5_premium
  target_cohort: 상위권
  insight_type: 킬러
  mechanism_primary: 주기함수 · 합성 방정식 · 3-구간 등차 순환 · 채움형 유도
  friction_triggers: [F1, F2, F3]
  rationale: |
    모평 20번 채움형 킬러 · depth 8.75 · count=4 · max=3 · **premium 임계**.
    주기함수 + f(f(x)) 합성 + 수열 순환 트리플 결합. 대수 라인 killer 원형.

- id: 모평-2026-06-Q22
  source: 2026학년도-6월-모평-22번
  page: 8
  vendor_label: 4점 단답형 · 지수함수·로그 킬러
  summary: |
    k>1인 실수 k에 대하여 두 곡선 y = 2^x + k/2, y = k·(1/2)^x + k - 2 교점 A.
    A 지나고 기울기 -1인 직선이 y = 2^(x-2) - 3과 만나는 점 B.
    삼각형 AOB 넓이 = 16일 때, k + log_2 k = q/p. p+q. (O 원점 · p,q 서로소 자연수)
  category: 지수함수 · 곡선 교점 · 삼각형 넓이 · 지수 방정식
  M: {s: 5, k: 4, a: 3, t: 2}
  M_total: 14
  insights:
    - {step: 1, type: I-EQV, depth: 3, description: "두 곡선 교점 방정식 2^x + k/2 = k·2^(-x) + k - 2 · 치환 t=2^x"}
    - {step: 2, type: I-CON, depth: 3, description: "t² - (k-2)·2 t · ... → t 결정 → A 좌표"}
    - {step: 3, type: I-BW, depth: 3, description: "B 좌표 (기울기 -1 직선 교차) · 삼각형 넓이 = 16 조건"}
    - {step: 4, type: I-VF, depth: 3, description: "k + log_2 k = q/p 정합 · 서로소 자연수"}
  insight_count: 4
  depth_score: 9.5
  base_star: 5
  star: 5
  premium: true
  tier: star_5_premium
  target_cohort: 상위권
  insight_type: 킬러
  mechanism_primary: 지수함수 교점 (치환) · 기울기 -1 직선 · 삼각형 넓이 · 로그 관계 정합
  friction_triggers: [F1, F2, F3]
  rationale: |
    모평 22번 킬러 · 최상위 · depth 9.5 · count=4 · max=3 · **premium 확정**.
    지수함수 · 로그 · 좌표기하 (삼각형 넓이) 완전 통합. 대수 라인 최정점.
```

---

## Ⅲ. 2026학년도 9월 모의평가 (평가원 · 2025-09 시행)

**출처**: 한국교육과정평가원 · 파일명 2025_9월_고3
**대수 파트**: 11 문 (Q1·Q3·Q6·Q8·Q10·Q12·Q14·Q16·Q18·Q20·Q22)

```yaml
- id: 모평-2026-09-Q01
  source: 2026학년도-9월-모평-1번
  page: 1
  summary: 5^(√2 + 1) × (1/5)^(√2)의 값.
  category: 지수법칙 · 무리수 지수
  M_total: 2
  base_star: 1
  star: 2
  premium: false
  tier: star_2
  insight_type: 절차형
  mechanism_primary: 지수법칙 즉시 (밑 통일 · 지수 차)
  rationale: 지수법칙 즉시. 5^1 = 5. ★ 2.

- id: 모평-2026-09-Q03
  source: 2026학년도-9월-모평-3번
  page: 1
  summary: 수열 {a_n}에 대하여 Σ_{k=1}^6 (2a_k - 1) = 30일 때, Σ_{k=1}^6 a_k.
  category: 시그마 · 선형 역산
  M_total: 3
  base_star: 2
  star: 2
  tier: star_2
  insight_type: 절차형
  mechanism_primary: Σ 분배 · 방정식 역산
  rationale: 시그마 기본 · ★ 2.

- id: 모평-2026-09-Q06
  source: 2026학년도-9월-모평-6번
  page: 2
  summary: cos(θ-π) = 3/5, tanθ < 0일 때, sinθ.
  category: 삼각함수 각변환 · 부호
  M_total: 5
  base_star: 3
  star: 3
  tier: star_3
  insight_type: 통찰형
  mechanism_primary: 각변환 cos(θ-π) = -cosθ · 부호 조건
  rationale: 3점 · 부호 함정 · ★ 3.

- id: 모평-2026-09-Q08
  source: 2026학년도-9월-모평-8번
  page: 3
  summary: 두 양수 a, b가 log_(√2) a + log_2 b = 2, log_2 a + log_2 b² = 7. a×b.
  category: 로그 · 밑 변환 · 연립
  M_total: 5
  base_star: 3
  star: 3
  tier: star_3
  insight_type: 통찰형
  mechanism_primary: 로그 밑 변환 (√2 → 2) · 연립 → a·b
  rationale: 로그 계산 3점 · depth 2 EQV · ★ 3.

- id: 모평-2026-09-Q10
  source: 2026학년도-9월-모평-10번
  page: 3
  summary: |
    모든 항 양수 등비수열 {a_n} · S_n = 부분합. a_2 = 1, Σ_{k=1}^6 (-1)^k S_k = 21.
    S_2 + S_7 값.
  category: 등비수열 · 교대합 · 부분합
  M_total: 10
  base_star: 4
  star: 4
  tier: star_4
  insight_type: 조건통합형
  mechanism_primary: 등비 S_n 공식 · 교대합 급수 · 공비 방정식
  rationale: 등비수열 4점 · 교대합 유도 저노출 · ★ 4.

- id: 모평-2026-09-Q12
  source: 2026학년도-9월-모평-12번
  page: 4
  summary: |
    상수 a(a>1)와 양수 t에 대하여 곡선 y=a^x와 두 직선 x=t, x=2t 만나는 점 A, B.
    B에서 x축 수선의 발 C. AB = AC이고 삼각형 ACB의 넓이 = 8일 때, a×t.
  category: 지수함수 곡선 · 삼각형 조건
  M_total: 10
  base_star: 4
  star: 4
  tier: star_4
  insight_type: 조건통합형
  mechanism_primary: 지수함수 · 좌표 계산 · 삼각형 넓이 · 지수 방정식
  rationale: 지수함수 곡선 준킬러 4점 · depth 7 · ★ 4.

- id: 모평-2026-09-Q14
  source: 2026학년도-9월-모평-14번
  page: 5
  summary: |
    양수 k에 대하여 집합 {x | 0≤x<3kπ/2, x ≠ kπ/2}에서 f(x) = tan(x/k).
    P(0,p)(p>0) 지나 x축 평행 직선이 f 그래프와 만나는 두 점 A, B (PA<PB).
    y=-p가 f 그래프와 만나는 점 C. AB = 3PA, 삼각형 OCB 넓이 = 5π/3. k+p.
  category: tan 함수 그래프 · 삼각형 넓이
  M_total: 12
  base_star: 5
  star: 4
  tier: star_4
  insight_type: 조건통합형
  mechanism_primary: tan 주기 · 그래프 교점 여러 개 · 좌표 조건 결합
  friction_triggers: [F1, F3]
  rationale: 4점 준킬러 · tan 그래프 · 다중 조건 결합 · depth 8 · ★ 4 상단.

- id: 모평-2026-09-Q16
  source: 2026학년도-9월-모평-16번
  page: 6
  summary: 수열 {a_n}은 a_1 = 1, a_{n+1} = n·a_n + 2. a_3의 값.
  category: 점화식 · 직접 계산
  M_total: 3
  base_star: 2
  star: 2
  tier: star_2
  insight_type: 절차형
  mechanism_primary: 점화식 직접 대입
  rationale: 3점 단답형 표준 · ★ 2 상단.

- id: 모평-2026-09-Q18
  source: 2026학년도-9월-모평-18번
  page: 7
  summary: 등차수열 {a_n}에 대하여 a_2 = 6, 2a_4 - a_3 = 15. a_11.
  category: 등차수열 · 일반항 방정식
  M_total: 5
  base_star: 3
  star: 3
  tier: star_3
  insight_type: 절차형
  mechanism_primary: 등차 일반항 두 식 연립 → 초항·공차
  rationale: 등차수열 기본 3점 · ★ 3.

- id: 모평-2026-09-Q20
  source: 2026학년도-9월-모평-20번
  page: 7
  summary: |
    사각형 ABCD 원 내접, AB:CD=1:3, BC:AD=7:5, √14, AD=4√13.
    두 대각선 교점 P. 삼각형 BPC의 외접원 반지름 R을 구하는 과정 (가)(나)(다) 채움. p+q+r.
  category: 원 내접 사각형 · 사인법칙 · 채움형
  M_total: 14
  base_star: 5
  star: 5
  premium: true
  tier: star_5_premium
  insight_type: 킬러
  mechanism_primary: 원 내접 사각형 성질 · 프톨레마이오스급 · 사인법칙 여러 삼각형
  friction_triggers: [F1, F3]
  rationale: |
    모평 20번 채움형 준킬러 · **premium 임계** · depth 8.75 · 원 내접 사각형·사인법칙 조합.
    삼각함수 활용 정점 원형.

- id: 모평-2026-09-Q22
  source: 2026학년도-9월-모평-22번
  page: 8
  summary: |
    곡선 y = log_2 x 위에 서로 다른 두 점 A, B. A에서 y=x에 내린 수선의 발 P,
    B를 y=x 대칭이동한 점 Q. 네 점 A, B, P, Q가 만족:
    (가) (AP의 y절편) - (BQ의 y절편) = 13/2 (나) 직선 AB의 기울기 = 6/7.
    사각형 APQB 넓이 = q/p. p+q. (p,q 서로소 자연수)
  category: 로그함수 · 대칭 · 사각형 넓이 킬러
  M_total: 14
  base_star: 5
  star: 5
  premium: true
  tier: star_5_premium
  insight_type: 킬러
  mechanism_primary: 로그함수 · y=x 대칭 · 좌표 · 사각형 넓이 · 조건 연립
  friction_triggers: [F1, F2, F3]
  rationale: |
    모평 22번 킬러 · **premium 확정** · depth 9.5. 로그함수 · 좌표기하 · 대칭 조합.
    대수 라인 최정점 원형.
```

---

## Ⅳ. 2025년 10월 고3 학평 (서울시교육청 · 2025-10 시행)

**출처**: 서울시교육청 주관 · 파일명 2025_10월_고3
**대수 파트**: 11 문 (Q1·Q3·Q6·Q8·Q10·Q12·Q14·Q16·Q18·Q20·Q22)

```yaml
- id: 학평-2025-10-고3-Q01
  source: 2025-10-고3-학평-1번
  page: 1
  summary: ∛3 × 9^(1/3).
  category: 지수 · 근호 · 밑 통일
  M_total: 2
  base_star: 1
  star: 2
  tier: star_2
  insight_type: 절차형
  mechanism_primary: 지수법칙 · 3^(1/3) × 3^(2/3) = 3
  rationale: 지수법칙 즉시. ★ 2.

- id: 학평-2025-10-고3-Q03
  source: 2025-10-고3-학평-3번
  page: 1
  summary: 첫째항 8, 공비 ≠0 등비수열 · a_1 a_3 = 2 a_2 a_4. a_5.
  category: 등비수열 · 공비 결정
  M_total: 5
  base_star: 3
  star: 3
  tier: star_3
  insight_type: 통찰형
  mechanism_primary: 등비수열 곱 조건 → 공비 이차방정식
  rationale: 3점 표준 · ★ 3.

- id: 학평-2025-10-고3-Q06
  source: 2025-10-고3-학평-6번
  page: 2
  summary: π<θ<3π/2, tan(π-θ) = -2. cosθ - sinθ.
  category: 삼각함수 각변환 · 부호
  M_total: 5
  base_star: 3
  star: 3
  tier: star_3
  insight_type: 통찰형
  mechanism_primary: tan(π-θ) = -tanθ · 부호 케이스 · sin·cos 결정
  rationale: 3점 · 부호 함정 · ★ 3.

- id: 학평-2025-10-고3-Q08
  source: 2025-10-고3-학평-8번
  page: 3
  summary: 두 실수 a, b가 3a + b = log_3 45, a + b = log_9 5. a - b.
  category: 로그 · 연립 · 밑 변환
  M_total: 5
  base_star: 3
  star: 3
  tier: star_3
  insight_type: 통찰형
  mechanism_primary: 로그 밑 통일 · 연립 → a-b
  rationale: 3점 표준 로그 · ★ 3.

- id: 학평-2025-10-고3-Q10
  source: 2025-10-고3-학평-10번
  page: 3
  summary: |
    두 양수 a, b · 닫힌구간 [0, 2a]에서 정의된 f(x) = 3 sin(πx/a) + b 그래프가
    x축과 오직 한 점 (2, 0)에서 만날 때, a+b.
  category: 삼각함수 그래프 · 접선 조건
  M_total: 10
  base_star: 4
  star: 4
  tier: star_4
  insight_type: 조건통합형
  mechanism_primary: 삼각함수 최솟값 0 · 접선 조건 · 주기·이동 관계
  rationale: 삼각함수 그래프 4점 · depth 7 · ★ 4.

- id: 학평-2025-10-고3-Q12
  source: 2025-10-고3-학평-12번
  page: 4
  summary: |
    모든 항 정수인 수열 {a_n} · 3a_n² + 2n a_n - 8n² = 0.
    Σ_{n=1}^30 a_n 최댓값 M, 최솟값 m. M - m.
  category: 수열 · 인수분해 방정식 · 시그마 최대·최소
  M_total: 10
  base_star: 4
  star: 4
  tier: star_4
  insight_type: 조건통합형
  mechanism_primary: 이차방정식 인수분해 · 두 근 정수 · 케이스별 시그마 최댓·최솟
  rationale: 4점 준킬러 · depth 7 · ★ 4.

- id: 학평-2025-10-고3-Q14
  source: 2025-10-고3-학평-14번
  page: 5
  summary: |
    BC=6 삼각형 ABC · AC의 4:3 내분점 D. BD 위 점 E · ∠DAE=∠DBC,
    sin(∠DAE):sin(∠EDA)=1:3. AE=√5. 삼각형 BCD의 외접원 넓이.
  category: 삼각형 · 각도 조건 · 외접원 킬러
  M_total: 12
  base_star: 5
  star: 4
  tier: star_4
  insight_type: 조건통합형
  mechanism_primary: 삼각형 각도 조건 · 사인법칙 여러 삼각형 · 외접원
  friction_triggers: [F1, F3]
  rationale: 4점 준킬러 · 각도·비율 다중 조건 · depth 8 · ★ 4 상단.

- id: 학평-2025-10-고3-Q16
  source: 2025-10-고3-학평-16번
  page: 6
  summary: log_4(x+2) + log_4 2 = log_2(x-2). 실수 x.
  category: 로그방정식 · 밑 통일
  M_total: 5
  base_star: 3
  star: 3
  tier: star_3
  insight_type: 절차형
  mechanism_primary: 로그 밑 통일 · 곱 성질 · 진수 조건
  rationale: 로그방정식 3점 · ★ 3.

- id: 학평-2025-10-고3-Q18
  source: 2025-10-고3-학평-18번
  page: 7
  summary: |
    두 수열 {a_n}, {b_n} · Σ_{n=1}^7 (a_n - 2)(b_n - 2) = 60, Σ_{n=1}^7 (a_n + b_n) = 44.
    Σ_{n=1}^7 a_n b_n.
  category: 시그마 · 전개 · 항등식
  M_total: 6
  base_star: 3
  star: 3
  tier: star_3
  insight_type: 절차형
  mechanism_primary: 곱 전개 · 시그마 분배 · 방정식 역산
  rationale: 3점 단답형 시그마 · ★ 3.

- id: 학평-2025-10-고3-Q20
  source: 2025-10-고3-학평-20번
  page: 7
  summary: |
    상수 a · 실수 전체 최솟값 갖는 f(x) = 2^(x+2)+7 (x<-2), -(1/2)^(x-a) + 10 (x≥-2).
    실수 t에 대하여 f와 직선 x + 2^a y - t = 0 만나는 점의 개수 g(t).
    g(t)=2를 만족시키는 t 최솟값이 f의 최솟값과 같도록 하는 모든 2^a 값의 곱.
  category: 지수함수의 부분 · 조건 조합 킬러
  M_total: 14
  base_star: 5
  star: 5
  premium: true
  tier: star_5_premium
  insight_type: 킬러
  mechanism_primary: 부분별 지수함수 · 최솟값 조건 · 직선 접선 개수 함수 g(t)
  friction_triggers: [F1, F2, F3]
  rationale: |
    학평 20번 킬러 · **premium 임계** · depth 8.75. 부분별 지수 · 직선 개수 · 최솟값 정합.

- id: 학평-2025-10-고3-Q22
  source: 2025-10-고3-학평-22번
  page: 8
  summary: |
    실수 k에 대하여 다음 조건 만족 수열 {a_n}: a_1=3, a_{n+1} = |a_n + n| (a_n<0),
    a_n - 10 + k (a_n ≥ 0). a_4 × a_5 = 0이 되도록 하는 k 최댓값 M, 최솟값 m.
    M + m = q/p. p+q.
  category: 수열 귀납 · 조건 분기 · 킬러
  M_total: 14
  base_star: 5
  star: 5
  premium: true
  tier: star_5_premium
  insight_type: 킬러
  mechanism_primary: 분기 점화식 · 절댓값 · 곱 0 조건 · k 최대·최소 케이스
  friction_triggers: [F1, F2, F3]
  rationale: |
    학평 22번 킬러 · **premium 확정** · depth 9.0 · 대수 라인 killer 원형. 수능 22번 급.
```

---

## Ⅴ. 2025학년도 대학수학능력시험 (평가원 · 2024-11 시행)

**출처**: 한국교육과정평가원 · 파일명 2025_고3_수능
**대수 파트**: 11 문 (Q1·Q3·Q6·Q8·Q10·Q12·Q14·Q16·Q18·Q20·Q22)

```yaml
- id: 수능-2025-Q01
  source: 2025학년도-수능-1번
  page: 1
  summary: ∛5 × 25^(1/3).
  category: 지수 · 밑 통일
  M_total: 2
  base_star: 1
  star: 2
  tier: star_2
  insight_type: 절차형
  mechanism_primary: 지수법칙 · 5^1 = 5
  rationale: 수능 1번 · ★ 2.

- id: 수능-2025-Q03
  source: 2025학년도-수능-3번
  page: 1
  summary: 첫째항·공비 모두 양수 등비수열 · a_4/a_2 + a_2/a_1 = 30. k(공비).
  category: 등비수열 · 공비 방정식
  M_total: 5
  base_star: 3
  star: 3
  tier: star_3
  insight_type: 통찰형
  mechanism_primary: 등비 정의 · k² + k = 30 이차방정식
  rationale: 수능 3점 · ★ 3.

- id: 수능-2025-Q06
  source: 2025학년도-수능-6번
  page: 2
  summary: cos(π/2 + θ) = -1/5. sinθ / (1 - cos²θ) 값.
  category: 삼각함수 · 항등식 · 각변환
  M_total: 5
  base_star: 3
  star: 3
  tier: star_3
  insight_type: 통찰형
  mechanism_primary: cos(π/2+θ) = -sinθ · sin²θ 활용 · sin/sin² = 1/sinθ
  rationale: 수능 3점 · ★ 3.

- id: 수능-2025-Q08
  source: 2025학년도-수능-8번
  page: 3
  summary: 두 실수 a = 2log(1/√10) + log_2 20, b = log 2. a×b.
  category: 로그 계산 · 밑 변환
  M_total: 5
  base_star: 3
  star: 3
  tier: star_3
  insight_type: 통찰형
  mechanism_primary: 상용로그·log_2 변환 · a 단순화
  rationale: 수능 3점 로그 · ★ 3.

- id: 수능-2025-Q10
  source: 2025학년도-수능-10번
  page: 3
  summary: |
    닫힌구간 [0, 2π]에서 f(x) = a cos bx + 3, x = π/3에서 최댓값 13.
    두 자연수 (a, b)에 대하여 a + b의 최솟값.
  category: 삼각함수 그래프 · 자연수 조건
  M_total: 10
  base_star: 4
  star: 4
  tier: star_4
  insight_type: 조건통합형
  mechanism_primary: 최댓값 조건 · x=π/3 위치 · 자연수 (a,b) 정합
  rationale: 수능 4점 · 자연수 순서쌍 최적화 · depth 7 · ★ 4.

- id: 수능-2025-Q12
  source: 2025학년도-수능-12번
  page: 4
  summary: |
    a_1 = 2 인 수열 {a_n}과 b_1 = 2 인 등차수열 {b_n}이 모든 n에 대해
    Σ_{k=1}^n a_k / b_{k+1} = n²/2. Σ_{k=1}^5 a_k.
  category: 수열 · Σ 방정식 · 등차수열 결합
  M_total: 12
  base_star: 4
  star: 5
  tier: star_5
  insight_type: 조건통합형
  mechanism_primary: 부분합 방정식 → a_n/b_{n+1} 일반항 · 등차수열 정합 · Σ 계산
  friction_triggers: [F1]
  rationale: 수능 4점 준킬러 · depth 8 · ★ 5.

- id: 수능-2025-Q14
  source: 2025학년도-수능-14번
  page: 5
  summary: |
    삼각형 ABC · AB 위 AD:DB=3:2 점 D · 원 O를 지름 AB · D를 중심, 지나는 원 O · AC.
    sinA:sinC=8:5, 삼각형 ADE 넓이:삼각형 ABC 넓이 = 9:35, DE=7. 원 O와 P (BC 위) 만날 때 삼각형 PBC 넓이 최댓값 (AB<AC).
  category: 삼각형 · 원 · 사인법칙 · 킬러
  M_total: 14
  base_star: 5
  star: 5
  premium: true
  tier: star_5_premium
  insight_type: 킬러
  mechanism_primary: 원 위의 점 · 삼각형 넓이 최적화 · 사인법칙 다중
  friction_triggers: [F1, F3]
  rationale: |
    수능 14번 준킬러 · **premium 임계** · depth 8.75. 원·삼각형·사인법칙 완전 통합.

- id: 수능-2025-Q16
  source: 2025학년도-수능-16번
  page: 6
  summary: log_2(x-3) = log_4(3x-5)를 만족시키는 실수 x.
  category: 로그방정식 · 밑 통일
  M_total: 5
  base_star: 3
  star: 3
  tier: star_3
  insight_type: 절차형
  mechanism_primary: 로그 밑 통일 · 이차방정식 · 진수 조건
  rationale: 수능 3점 단답형 · ★ 3.

- id: 수능-2025-Q18
  source: 2025학년도-수능-18번
  page: 7
  summary: 수열 {a_n}이 모든 자연수 n에 대해 a_n + a_{n+4} = 12. Σ_{n=1}^16 a_n 값.
  category: 수열 · 주기적 합
  M_total: 5
  base_star: 3
  star: 3
  tier: star_3
  insight_type: 절차형
  mechanism_primary: 4항 그룹 합 · 4·12 = 48
  rationale: 수능 3점 · 주기 관찰 · ★ 3.

- id: 수능-2025-Q20
  source: 2025학년도-수능-20번
  page: 7
  summary: |
    곡선 y = (1/5)^(x-3) · 직선 y = x 교점 x좌표 k. 실수 전체 집합에서 정의된 f 조건:
    x > k인 모든 x에 대해 f(x) = (1/5)^(x-3)이고 f(f(x)) = 3x.
    f(1 / (k³ × 5^(3k)))의 값.
  category: 지수함수 · 합성함수 · 킬러
  M_total: 14
  base_star: 5
  star: 5
  premium: true
  tier: star_5_premium
  insight_type: 킬러
  mechanism_primary: 지수함수 자기 합성 f(f(x))=3x · 대칭 · 좌표 정합
  friction_triggers: [F1, F2, F3]
  rationale: |
    수능 20번 킬러 · **premium 확정** · depth 9.5. 지수함수 · 자기 합성 · 좌표 통합.

- id: 수능-2025-Q22
  source: 2025학년도-수능-22번
  page: 8
  summary: |
    모든 항 정수 수열 {a_n}: (가) 모든 자연수 n에 대해
    a_{n+1} = a_n - 3 (|a_n|이 홀수), (1/2)a_n (a_n=0 or |a_n|이 짝수).
    (나) |a_m| = |a_{m+2}|인 자연수 m의 최솟값 3. |a_1| 값의 합.
  category: 수열 · 조건 분기 · 킬러 최정점
  M_total: 14
  base_star: 5
  star: 5
  premium: true
  tier: star_5_premium
  insight_type: 킬러
  mechanism_primary: 조건 분기 점화식 · 홀·짝 조건 · 케이스 트리 · 절댓값 순환
  friction_triggers: [F1, F2, F3]
  rationale: |
    수능 22번 킬러 최정점 · **premium 확정** · depth 9.5. 대수 라인 최정점 killer 원형.
    수년째 반복되는 조건 분기 점화식 패턴 · P0 pool 핵심.
```

---

## Ⅵ. 2026학년도 5월 고3 학평 (경기교육청 · 2025-05 시행)

**출처**: 경기교육청 주관 · 파일명 2026_5월_고3
**대수 파트**: 12 문 (Q1·Q5·Q6·Q8·Q10·Q11·Q14·Q16·Q17·Q18·Q20·Q22)

```yaml
- id: 학평-2026-05-고3-Q01
  source: 2026-05-고3-학평-1번
  page: 1
  summary: 2^(1/3) × ∛32.
  category: 지수 · 밑 통일
  M_total: 2
  base_star: 1
  star: 2
  tier: star_2
  insight_type: 절차형
  mechanism_primary: 지수법칙 즉시 · 2^(1/3) × 2^(5/3) = 2^2 = 4
  rationale: 지수법칙 즉시 · ★ 2.

- id: 학평-2026-05-고3-Q05
  source: 2026-05-고3-학평-5번
  page: 2
  summary: 원점을 지나는 곡선 y = 2^(x-a) + b · 점근선 y = -4. a + b.
  category: 지수함수 · 점근선 · 평행이동
  M_total: 5
  base_star: 3
  star: 3
  tier: star_3
  insight_type: 통찰형
  mechanism_primary: 점근선 → b, 원점 통과 → a 결정
  rationale: 3점 · 지수함수 그래프 이동 표준 · ★ 3.

- id: 학평-2026-05-고3-Q06
  source: 2026-05-고3-학평-6번
  page: 2
  summary: 두 양수 a, b · f(x) = a sin bx + 1 주기 3π, 최댓·최솟 차 6. a + b.
  category: 삼각함수 · 주기·진폭
  M_total: 5
  base_star: 3
  star: 3
  tier: star_3
  insight_type: 절차형
  mechanism_primary: 최대-최소 차 = 2a=6 · 주기 2π/b=3π → 두 식
  rationale: 3점 · ★ 3.

- id: 학평-2026-05-고3-Q08
  source: 2026-05-고3-학평-8번
  page: 3
  summary: 첫째항 음수 등비수열 · a_1 × a_5 = 36, a_3 + 2a_4 = 2. a_2.
  category: 등비수열 · 연립
  M_total: 5
  base_star: 3
  star: 3
  tier: star_3
  insight_type: 통찰형
  mechanism_primary: a_3² = a_1 a_5 = 36 · a_3 = -6 · 공비 방정식
  rationale: 등비수열 3점 · 부호 함정 · ★ 3.

- id: 학평-2026-05-고3-Q10
  source: 2026-05-고3-학평-10번
  page: 3
  summary: 각 A 예각 삼각형 ABC · AB=4, AC=15, 삼각형 넓이 24. 외접원 반지름.
  category: 삼각형 · 넓이 · 사인·코사인법칙 · 외접원
  M_total: 8
  base_star: 4
  star: 4
  tier: star_4
  insight_type: 통찰형
  mechanism_primary: 넓이 = (1/2)AB·AC·sinA → sinA · cos·BC 코사인법칙 · 사인법칙
  rationale: 삼각형 4점 표준 · ★ 4.

- id: 학평-2026-05-고3-Q11
  source: 2026-05-고3-학평-11번
  page: 4
  summary: |
    조건 만족 모든 수열 {a_n}에 대한 a_1 값의 합: (가) a_{n+1} = -2a_n (a_n<0),
    a_n - 3 (a_n≥0). (나) a_3 = a_1 + 4.
  category: 점화식 분기 · 조건 만족 초항 합
  M_total: 10
  base_star: 4
  star: 4
  tier: star_4
  insight_type: 조건통합형
  mechanism_primary: 부호 분기 점화식 · 케이스 트리 · a_3=a_1+4 조건 필터
  rationale: 4점 · 케이스 분기 · depth 7 · ★ 4.

- id: 학평-2026-05-고3-Q14
  source: 2026-05-고3-학평-14번
  page: 5
  summary: |
    곡선 y = sin x (0≤x≤2π) · 직선 y=k 두 점 A, B, 직선 y = -√(1-k²) 두 점 C, D.
    CD - AB = (2/9)π일 때 선분 AB 길이. (0<k<1)
  category: 삼각함수 그래프 · 교점 거리
  M_total: 12
  base_star: 5
  star: 4
  tier: star_4
  insight_type: 조건통합형
  mechanism_primary: sin 그래프 · 두 수평선 교점 · 대칭성 · x좌표 차 방정식
  friction_triggers: [F1, F3]
  rationale: 4점 준킬러 · 삼각함수 그래프 다중 · depth 8 · ★ 4 상단.

- id: 학평-2026-05-고3-Q16
  source: 2026-05-고3-학평-16번
  page: 6
  summary: 반지름 8, 중심각 3π/4인 부채꼴 넓이 = aπ. a.
  category: 부채꼴 · 호도법 넓이
  M_total: 3
  base_star: 2
  star: 2
  tier: star_2
  insight_type: 절차형
  mechanism_primary: S = (1/2)r²θ · 3점 즉시
  rationale: 부채꼴 넓이 공식 즉시 · ★ 2.

- id: 학평-2026-05-고3-Q17
  source: 2026-05-고3-학평-17번
  page: 6
  summary: 수열 {a_n}에 대하여 Σ_{k=1}^7 a_{2k} = Σ_{k=1}^7 (k² - a_{2k-1}). Σ_{k=1}^14 a_k.
  category: 시그마 · 홀수·짝수 항 분리
  M_total: 6
  base_star: 3
  star: 3
  tier: star_3
  insight_type: 통찰형
  mechanism_primary: 홀·짝 항 합 결합 · Σ_{k=1}^14 = Σ 짝 + Σ 홀 · 방정식 활용
  rationale: 3점 단답형 · 시그마 분리 통찰 · ★ 3.

- id: 학평-2026-05-고3-Q18
  source: 2026-05-고3-학평-18번
  page: 7
  summary: log_2(x-4) = log_(1/2)(x-6) + 3. 실수 x.
  category: 로그방정식 · 밑 통일 · 상수항 처리
  M_total: 5
  base_star: 3
  star: 3
  tier: star_3
  insight_type: 절차형
  mechanism_primary: log_(1/2) = -log_2 · 3 = log_2 8 · 방정식 · 이차식 · 진수 조건
  rationale: 3점 단답형 로그방정식 · ★ 3.

- id: 학평-2026-05-고3-Q20
  source: 2026-05-고3-학평-20번
  page: 7
  summary: |
    첫째항 8 등차수열 {a_n}과 수열 {b_n}: (가) b_n = -2a_n (a_n≤0), a_n (a_n>0).
    (나) b_3 + b_5 = 2b_4 + 6, b_4 + b_6 = 2b_5. Σ_{k=1}^10 b_k.
  category: 등차수열 · 조건 분기 · 시그마
  M_total: 14
  base_star: 5
  star: 5
  premium: true
  tier: star_5_premium
  insight_type: 킬러
  mechanism_primary: 등차수열 공차 결정 · 부호 분기 b_n · 다중 방정식 · Σ 계산
  friction_triggers: [F1, F3]
  rationale: |
    학평 20번 킬러 · **premium 임계** · depth 8.75. 등차·부호 분기·다중 방정식.

- id: 학평-2026-05-고3-Q22
  source: 2026-05-고3-학평-22번
  page: 8
  summary: |
    조건 만족 곡선 y = 2^(x+1) + k 위 서로 다른 두 점 A, B와 곡선 y = log_2(x-k) + 1 위
    점 C 존재하도록 하는 모든 실수 k 값의 합 S: (가) AB 기울기 1. (나) 삼각형 ABC 정삼각형 · 한 변 2√2.
    2^(-S + 2/3) 값.
  category: 지수·로그함수 · 정삼각형 · 킬러
  M_total: 14
  base_star: 5
  star: 5
  premium: true
  tier: star_5_premium
  insight_type: 킬러
  mechanism_primary: 지수·로그 대칭 · 정삼각형 · 기울기 · k 케이스 · 합 S
  friction_triggers: [F1, F2, F3]
  rationale: |
    학평 22번 킬러 · **premium 확정** · depth 9.5. 지수·로그 대칭 · 정삼각형 · 다중 케이스.
```

---

## VII. Summary · 회귀 · 활용 방침

### 실측 표본 종합

| 지표 | 값 |
|---|---:|
| unique papers | 6 |
| 실측 대수 문항 | **66** |
| ★ 5 premium 확정 | **11** (2025 수능 Q20·Q22 · 2026 6월 Q14·Q20·Q22 · 2026 9월 Q20·Q22 · 2025 10월 Q20·Q22 · 2026 5월 Q20·Q22 · 2025 3월 Q21) |
| ★ 5 임계 도달 | 상기 11 모두 포함 (일부 premium 임계 미도달 시 별도) |
| ★ 4 (준킬러) | ~15 (Q10·Q12·Q14·Q15·Q18 계열) |
| ★ 3 (표준) | ~25 (Q5~Q10 3점 계열) |
| ★ 2 (기본) | ~15 (Q1·Q3 2점~3점 계열) |

### premium 원형 특성 (11 문 공통)

- **소단원 분포**: 수학적 귀납법 4문 (2025수능-22·2025학평3월-21·2025학평10월-22·2026학평5월-20) · 지수·로그함수 4문 (2025수능-20·2026모평6-22·2025학평10월-20·2026학평5월-22) · 삼각함수 활용 3문 (2026모평6-14·2026모평9-20·2025수능-14)
- **통찰 4단계 요구** (count=4 · max_depth=3): 조건 통합 · 케이스 폭발 · 역추적 · 정합 검증
- **friction_triggers**: F1 (계산 폭발) · F2 (구조 저노출) · F3 (다중 조건) 3중 모두 트리거
- **재활용 원형**: 조건 분기 점화식 · 자기 합성 지수함수 · 원·삼각형 다각 조건 · 주기함수 합성

### 대수 라인 flywheel 편입 방침

1. **원본 pool 등록**: 본 자산 66 문 = 원본 은행 P0 · RPM 대수 v1.0 (규모 pool)과 병행 pool
2. **시험지 제작 시 pick 순서**:
   - killer 슬롯 (20~22 상당): 본 자산 premium 11 원형 우선
   - 준킬러 슬롯 (14~19 상당): 본 자산 ★ 4 (2025수능-12·2026모평6-12·2026학평5월-11 등)
   - 표준 4점 (10~13): 본 자산 ★ 3~4 + RPM 유형익히기
   - 3점 (5~9): RPM 대수 유형익히기 우선 + 본 자산 3점
3. **자기복제 회피**: 11 premium 원형 모두 발문 시그니처 3원소 등록 완료 · 다음 시험지 회차마다 crosss-check

### 벤더 라벨 회귀 (평가원·학평)

- 수능·모평 (평가원): 20·22번 = star_5_premium 100% 정합 · 12·14번 = star_5 정합
- 학평 (시도교육청): 20·22번 = star_5_premium (평가원 대비 하향 5% 관찰) · 21번 = star_5 준킬러 관찰
- 3점 문항 (Q1·Q3·Q6·Q8): 모두 star_2 ~ star_3 · 평가원·학평 동일

### 학습·저작권 준수

- 발문 요약 시그니처 3원소만 (핵심 조건 · 핵심 통찰 · 정답 형식) · 원문 전사 없음
- 그림 미포함 (원문 참조: EBSi 학습자료)
- 시험지 제작 시 "원본 pick_source: 수능-2025-Q20" 등 명시 · 원본 발문 그대로 재사용 금지 (변형 필수)

---

**정독 일자**: 2026-07-22
**정독자**: Flywheel asset-ingestion Agent (세션 68+)
**검증**: schema.md v3.9 · 8축 v5.1 · CLAUDE.md CM1·CM2 교과 용어 제약 (대수는 별개 라인)
