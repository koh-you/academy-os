---
name: mechanism-데이터-라이트쎈-유형만렙-대수
description: 라이트쎈 대수 (2025 · 좋은책신사고) + 유형만렙 대수 (2025 · 비상교육) 통합 정독 데이터 v1.0. 대수 라인 flywheel · M priority · 두 유형편 병렬 자산화. 표본 45문 (라이트쎈 20 + 유형만렙 25) 층화 판정 · 10~11 소단원 균형. Star + M·I·X seed_id + premium 감지 · 벤더 라벨 회귀 매핑. 저작권 준수 · 시그니처 3원소 (핵심 조건·핵심 통찰·정답 형식)만 요약 · 원문 전사 없음.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-22
  session: 68+
  sources:
    - name: "라이트쎈 대수"
      publisher: "좋은책신사고"
      year: 2025
      files:
        - "라이트쎈 대수.pdf (176p · A4 · 스캔 이미지 PDF · pdftoppm 120 DPI 시각 판독)"
        - "라이트쎈 대수 정답.pdf (스캔 이미지)"
        - "라이트쎈 대수 빠답.pdf (스캔 이미지)"
      pdf_type: 스캔형
      total_problems_estimated: 1264  # 문항 0001~1264 (11 소단원 · CH01: ~119 · CH02: ~120 · CH03~11 평균 ~113)
    - name: "유형만렙 대수"
      publisher: "비상교육"
      year: 2025
      files:
        - "22개정 유형 만렙 대수 본문(학생용).pdf (200p · A4 · 텍스트 레이어 有 · 수식 garbled but 구조 readable)"
        - "22개정 유형 만렙 대수 기출BOOK(학생용).pdf (64p · 별책)"
        - "유형만렙 대수 답지.pdf (200p · 텍스트 有)"
        - "유형만렙_대수 - 교사용.pdf (참고)"
      pdf_type: 텍스트형 (수식 폰트 garbled)
      total_problems_estimated: 1234  # 본편 대표 문항 번호 ~0001~1234 · 기출BOOK 별책 미포함
  unit_code: 대수
  sub_units:
    - "지수 (라이트쎈 CH01 p.008~021 · 유형만렙 CH01 p.008~021)"
    - "로그 (라이트쎈 CH02 p.022~035 · 유형만렙 CH02 p.022~039)"
    - "지수함수 (라이트쎈 CH03 p.036~051 · 유형만렙 CH03 p.040~059)"
    - "로그함수 (라이트쎈 CH04 p.052~069 · 유형만렙 CH04 p.060~083)"
    - "삼각함수 (라이트쎈 CH05 p.072~087 · 유형만렙 CH05 p.084~099)"
    - "삼각함수의 그래프 (라이트쎈 CH06 p.088~107 · 유형만렙 CH06 p.100~121)"
    - "삼각함수의 활용·사인/코사인법칙 (라이트쎈 CH07 p.108~119 · 유형만렙 CH07 p.122~139)"
    - "등차수열 (라이트쎈 CH08 p.122~135) · 등차·등비수열 통합 (유형만렙 CH08 p.140~163)"
    - "등비수열 (라이트쎈 CH09 p.136~147) · 수열의 합 (유형만렙 CH09 p.164~179)"
    - "수열의 합 (라이트쎈 CH10 p.148~159) · 수학적 귀납법 (유형만렙 CH10 p.180~195)"
    - "수학적 귀납법 (라이트쎈 CH11 p.160~175)"
  citation_note: "라이트쎈 대수 2025 (좋은책신사고) + 유형만렙 대수 2025 (비상교육) · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약 · 시그니처 3원소 유지)"
  extract_range: |
    라이트쎈: 176p 전체 · pdftoppm 120 DPI PNG 시각 판독 (data/대수/추출/라이트쎈/samples/ · TOC + CH01·02·03·04·05·06·07·08·10·11 대표 페이지)
    유형만렙: 200p 본편 · pdftotext 텍스트 레이어 + pdftoppm 시각 판독 (data/대수/추출/유형만렙/samples/ · TOC + CH01·02·03·05·08·09·10 대표 페이지)
  total_problems_combined: ~2500
  sample_problems_combined: 45
  sample_lightssen: 20
  sample_yuhyeongmanleb: 25
  judgment_protocol: schema.md v3.9 3층 모델 (M·I·X) + v5.1 8축 정밀 게이트 + CM1 교과과정 침투 검증 (대수 라인)
  parent_regression: bank/vendor-label-calibration.md v1.12 (라이트쎈 CM1 v1.0 + 유형만렙 CM1 v1.0 계승 · 대수 라인 신규 회귀 파일럿)
  parent_pilots:
    - bank/mechanism-데이터-라이트쎈-CM1.md (라이트쎈 CM1 30문 정독 · A/B/실전 라벨 매핑)
    - bank/mechanism-데이터-유형만렙-CM1.md (유형만렙 CM1 24문 정독 · A/B/AB/C 라벨 매핑)
    - bank/mechanism-데이터-rpm-대수.md v1.0 (RPM 대수 45문 · 시험에꼭나오는 실력Up 회귀)
    - bank/mechanism-데이터-개념원리-대수.md (개념원리 대수 시리즈 자매)
    - bank/mechanism-데이터-올림포스-대수.md (올림포스 대수 시리즈 자매)
  sibling_asset:
    - mechanism-데이터-라이트쎈-CM1.md · mechanism-데이터-라이트쎈-CM2.md (라이트쎈 동일 벤더)
    - mechanism-데이터-유형만렙-CM1.md (유형만렙 CM1 자매)
  label_systems:
    라이트쎈: "A 기본 Master · B 유형 Master (별점 ☆1~3 + 집중공략 배지 + 교육청 기출 배지) · 실전 Training (서술형 · 평가원/수능 기출 배지)"
    유형만렙: "A 개념 확인 (하 100%) · B 유형 완성 (대표문제 + 하 10% · 중 80% · 상 10% · 서술형 태그) · C 실력 향상 (상 100% · 학평 기출 다수)"
---

# 라이트쎈 대수 (2025) + 유형만렙 대수 (2025) 통합 정독 데이터 v1.0

## 배경 · 대수 라인 편입 근거

**대수 라인** (2026-06-18 통합 · book redesign 흡수) — 현행 교육과정 개편 대비 **수학Ⅰ → "대수"** 재편 라인. 마플시너지 기반 CM1 재편집 시 참고 pool로 활용. 본 자산은 **대수 소단원별 유형편 pool 확보 · vendor 라벨 회귀 검증** 목적.

- **라이트쎈 대수 2025** (좋은책신사고 · A4 176p): 쎈 계열 하위 브랜드 · 기본~표준 대응. 스캔 이미지 PDF (텍스트 레이어 무) → pdftoppm 시각 판독. **A 기본 / B 유형 (별점 ☆1~3 + 집중공략) / 실전 Training (서술형·기출 배지)** 3층 구조. 라이트쎈 CM1 (v1.0) 자산 계승.
- **유형만렙 대수 2025** (비상교육 · A4 200p 본편 + 64p 기출BOOK 별책): 유형편 표준. 텍스트 레이어 有 (수식 폰트 garbled 시 pdftoppm 병행). **A 개념 확인 (하 100%) / B 유형 완성 (대표문제 + 하 10%·중 80%·상 10% + 서술형) / C 실력 향상 (상 100% · 학평 기출 밀집)** 4층 구조. 유형만렙 CM1 (v1.0) 자산 계승.

**샘플링 방법론**:
- 표본 45문 = 라이트쎈 20 + 유형만렙 25
- 라이트쎈 20문: 11 소단원 × 1~2문 (A층 3 · B 별점 ☆2~3 층 10 · 실전 Training 7)
- 유형만렙 25문: 10 소단원 × 2~3문 (A층 3 · B층 대표+상 15 · C 실력향상 7)
- 각 소단원 정점 원형 (그래프+주기·복합 조건·수열 점화) 우선 표집
- 표본 사전 tier와 시스템 실측 tier 편차 → v1.12 회귀 신호 반영

**정독 일자**: 2026-07-22 (세션 68+ · flywheel Agent)

**교육과정 침투 검증** (대수 소단원 전 영역):
| 소단원 | 침투 위험 | 검증 결과 | 근거 |
|---|---|---|---|
| 지수 (거듭제곱근·지수법칙) | 없음 | ✅ 정규 | 유리지수·실수지수·지수법칙 (대수 정규) |
| 로그 (정의·성질·상용로그) | 없음 | ✅ 정규 | 밑변환·상용로그표·정수부·소수부 (대수 정규) |
| 지수함수·로그함수 (그래프·방정식·부등식·최대최소) | 없음 | ✅ 정규 | 평행이동·대칭이동·역함수·최대최소 (대수 정규) |
| 삼각함수 (호도법·정의·삼각함수 값의 부호·관계) | 없음 | ✅ 정규 | 호도법·단위원·부호표·삼각함수 사이 관계 (대수 정규) |
| 삼각함수 그래프 (주기·평행이동·최대최소·방정식·부등식) | 없음 | ✅ 정규 | y=asin(bx+c)+d 꼴·주기·주기함수 그래프 (대수 정규) |
| 삼각함수 활용 (사인·코사인 법칙·넓이) | 없음 | ✅ 정규 | 사인법칙·코사인법칙·삼각형 넓이 (대수 정규) |
| 등차수열·등비수열 (일반항·합·조화) | 없음 | ✅ 정규 | Sn/Sn⁻¹ 공식·등차중항·등비중항 (대수 정규) |
| 수열의 합 (∑·계차수열·부분분수) | 없음 | ✅ 정규 | ∑ 기호·자연수 거듭제곱 합·계차·부분분수 (대수 정규) |
| 수학적 귀납법 (귀납적 정의·귀납법 증명) | ⚠ 유의 | ✅ 정규 (증명 형식) | 수학적 귀납법 증명 서술 · **미분·극한 사용 절대 금지** (표본 미발견) |

---

## Ⅰ. 라이트쎈 대수 20문 표본 판정

### 【CH01 지수】 3문 (0002·0080·0119)

```yaml
- id: 라이트쎈-대수-지수-거듭제곱근-실수해-0002
  page: 8
  vendor_label: "A 기본 · 유형 01-1 거듭제곱근 (0001~0005)"
  category_type: "A 기본 Master"
  summary: |
    (a²)³을 간단히 하시오. 지수법칙 (a^m)^n = a^{mn} 직접 적용
  category: "지수법칙 · 정수 지수 계산"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0
  base_star: 1
  star: 1
  premium: false
  rationale: |
    A단계 개념 즉시 적용 · 공식 대입만 · 통찰 부재 · ★ 1 확정
  tier: star_1
  mechanism_primary: "지수법칙 (a^m)^n 대입"
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 A단계", "개념원리 개념 확인"]
    L5_confidence: 0.95

- id: 라이트쎈-대수-지수-복합계산-0080
  page: 14
  vendor_label: "B 유형 Master · 유형 07 거듭제곱근을 주어진 문자로 나타내기 · 별점 ☆ 2"
  category_type: "B 유형 Master"
  summary: |
    a>0, a≠1, ⁴√{a³·⁶√a²}=a^k 만족 자연수 k 구하기. 다중근 유리지수화 후 정리.
  category: "다중근 · 유리지수 변환"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "다중근 → 유리지수 (1/m · 1/n) 곱 지수 변환"
    - step: 2
      type: 절차형
      depth: 2
      effective_depth: 2
      description: "지수법칙으로 정리 후 유리수 k 값 결정"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    다중근 유리지수 변환 · 표준 유형 · depth 2 두 단계 · **★ 3 확정** (별점 ☆ 2 위신 유지).
    시장 노출도 높음 (쎈·마플·개념원리 전 벤더 등재) → premium 아님.
  tier: star_3
  mechanism_primary: "다중근-유리지수-변환"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플 NORMAL"]
    L5_confidence: 0.85

- id: 라이트쎈-대수-지수-분수합-0119
  page: 19
  vendor_label: "실전 Training · 집중공략 배지"
  category_type: "실전 Training · 집중공략"
  summary: |
    양수 x, y에 대해 x/y = 3/4이고 x^a = y^b일 때 y의 값 구하기.
    지수 매개 도입 · 두 조건 결합 · 대칭성 활용.
  category: "지수 매개 도입 · 대칭 조건"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "x^a = y^b 매개 k 도입 (k = x^a = y^b)"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "x/y 비율 조건 결합 · 로그 없이 지수법칙만으로 해결"
  insight_count: 2
  depth_score: 7.0
  base_star: 3
  star: 4
  premium: false
  rationale: |
    지수 매개 도입 정형 + 집중공략 배지 (출제 가능성 高) → **★ 4** (base 3 + 배지 위신 +1).
    RPM 대수 #0100 (실력Up · ★ 4) 유사 통찰. premium 아님 (지수 매개 정형 · 참신도 낮음).
  tier: star_4
  mechanism_primary: "지수-매개도입-비율결합"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ● 상", "마플 TOUGH"]
    L5_confidence: 0.80
```

### 【CH02 로그】 2문 (0244·0245)

```yaml
- id: 라이트쎈-대수-로그-분점-수능기출-0244
  page: 33
  vendor_label: "실전 Training · 수능 기출 배지"
  category_type: "실전 Training · 수능기출"
  summary: |
    수직선 위 두 점 P(log₂3), Q(log₂12)에 대해 선분 PQ를 m:(1-m)으로
    내분하는 점의 좌표가 1일 때, 4^m의 값 구하기 (0<m<1).
  category: "로그 · 내분점 · 지수식 결합"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "내분점 좌표 공식 → log₂ 표현으로 정리 · log₂12 = log₂3 + 2 관찰"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "1 - m log₂3 - m·(2 + log₂3) = 1 정리 후 m 표현 · 4^m = 2^{2m} 지수 계산"
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    수능 기출 배지 · 로그·내분·지수 3영역 결합 · depth 3 두 단계 · **★ 4 확정**.
    수능 기출 노출로 premium 아님 (시장 전면 학습됨).
  tier: star_4
  mechanism_primary: "로그-내분점-지수결합"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 C단계 근접", "마플 EXAM"]
    L5_confidence: 0.85
    수능_노출_이력: "수능·평가원 기출 원본"

- id: 라이트쎈-대수-로그-삼각형판정-0242
  page: 33
  vendor_label: "실전 Training · 별점 ☆ 3"
  category_type: "실전 Training · 별점 ☆ 3"
  summary: |
    삼각형 ABC의 세 변 a, b, c에 대해 log_a(b+c) + log_a(b-c) = 2
    관계식이 성립할 때 삼각형 ABC 형태 판정. (단, a≠1, b>c)
  category: "로그 조건식 · 삼각형 판정"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "log_a(b²-c²) = 2 → b² - c² = a² 변환"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "b² = a² + c² 관찰 → ∠B가 직각인 직각삼각형 판정 (피타고라스 역)"
  insight_count: 2
  depth_score: 7.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    로그 → 대수식 변환 + 삼각형 판정 · 별점 ☆ 3 · **★ 4 확정**.
    피타고라스 역 활용 표준 · 창작 가능성 여전 · premium 후보 아님.
  tier: star_4
  mechanism_primary: "로그-대수변환-피타고라스역"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ●● 상", "마플 TOUGH"]
    L5_confidence: 0.80
```

### 【CH03 지수함수】 2문 (0420·0425)

```yaml
- id: 라이트쎈-대수-지수함수-평행이동-0420
  page: 40
  vendor_label: "A 기본 · 유형 01 지수함수의 그래프"
  category_type: "A 기본 Master"
  summary: |
    y = 3^x + 2의 그래프의 점근선 방정식 구하기.
  category: "지수함수 · 점근선"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - step: 1
      type: 절차형
      depth: 1
      effective_depth: 1
      description: "y = 3^x 점근선 y=0에서 +2 평행이동 → 점근선 y=2"
  insight_count: 1
  depth_score: 2.0
  base_star: 1
  star: 1
  premium: false
  rationale: |
    A단계 개념 즉시 적용 · 평행이동 규칙만 · ★ 1 확정
  tier: star_1
  mechanism_primary: "지수함수-평행이동-점근선"
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 A단계", "개념원리 개념 확인"]
    L5_confidence: 0.95

- id: 라이트쎈-대수-지수함수-대칭이동-0425
  page: 53
  vendor_label: "A 기본 · 유형 02 로그함수의 그래프의 평행이동과 대칭이동"
  category_type: "A 기본 Master"
  summary: |
    y = log₃(-x + 2) 그래프가 y = log₃x의 그래프를 어떻게 이동한 것인지 구하기.
  category: "로그함수 · 대칭이동+평행이동"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "log₃(-(x-2)) 변형 → y축 대칭 + x축 방향 2 평행이동 판독"
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 2
  premium: false
  rationale: |
    대칭이동 + 평행이동 조합 판독 · depth 2 · **★ 2 확정** (A 기본 · 유형 표준).
  tier: star_2
  mechanism_primary: "로그함수-대칭이동-평행이동"
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 A단계 후반", "개념원리 유형"]
    L5_confidence: 0.90
```

### 【CH04 로그함수】 2문

```yaml
- id: 라이트쎈-대수-로그함수-최대최소-0498
  page: 66
  vendor_label: "B 유형 Master · 별점 ☆ 2"
  category_type: "B 유형 Master"
  summary: |
    2 ≤ x ≤ 8 정의역에서 y = (log₂x)² - log₂(x²) + 3의 최댓값·최솟값 구하기.
  category: "로그함수 최대최소 · t=log 치환"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "t = log₂x 치환 · 정의역 1 ≤ t ≤ 3 · log₂(x²) = 2t"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "y = t² - 2t + 3 이차함수 완전제곱꼴 → 꼭짓점·경계값 비교"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    치환 + 이차함수 최대최소 · 표준 정형 유형 · depth 2 두 단계 · **★ 3 확정**.
    시장 노출 극대 → premium 아님.
  tier: star_3
  mechanism_primary: "로그-치환-이차함수-최대최소"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플 NORMAL"]
    L5_confidence: 0.90

- id: 라이트쎈-대수-로그함수-집중공략-0567
  page: 68
  vendor_label: "실전 Training · 집중공략 서술형"
  category_type: "실전 Training · 집중공략 서술형"
  summary: |
    함수 f(x) = log_a(x-1) + b의 그래프가 두 점 (5, 3), (17, 5)를 지날 때
    a + b의 값 구하기. (a > 0, a ≠ 1)
  category: "로그함수 · 계수 결정"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "두 점 대입 → log_a4 + b = 3, log_a16 + b = 5 · 두 식 차 → log_a4 = 2"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "a² = 4 → a = 2 → b = 3 - 2 = 1 · a + b = 3"
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    집중공략 서술형 · 계수 결정 정형 · depth 3 두 단계 · **★ 4 확정** (집중공략 위신 +1).
    시장 노출 표준 · premium 아님.
  tier: star_4
  mechanism_primary: "로그함수-계수결정-두점대입"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ●● 상", "마플 TOUGH"]
    L5_confidence: 0.85
```

### 【CH05 삼각함수】 2문 (0599·0603)

```yaml
- id: 라이트쎈-대수-삼각함수-사분면-0599
  page: 76
  vendor_label: "B 유형 Master · 유형 02 사분면 각의 위치"
  category_type: "B 유형 Master"
  summary: |
    각 θ의 동경이 어느 사분면에 위치하는지 판정 (θ = 1000° 등 여러 케이스).
  category: "일반각 · 사분면 판정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: 절차형
      depth: 1
      effective_depth: 1
      description: "θ = 360°·n + α (0° ≤ α < 360°) 분해 후 α 위치로 사분면 결정"
  insight_count: 1
  depth_score: 2.0
  base_star: 2
  star: 2
  premium: false
  rationale: |
    사분면 판정 절차 표준 · depth 1 · **★ 2 확정** (A 후반~B 대표 수준).
  tier: star_2
  mechanism_primary: "일반각-사분면-분해"
  insight_type: 절차형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 A단계 후반", "마플 BASIC"]
    L5_confidence: 0.95

- id: 라이트쎈-대수-삼각함수-부호-0603
  page: 76
  vendor_label: "B 유형 Master · 유형 03 삼각함수 값의 부호"
  category_type: "B 유형 Master"
  summary: |
    sinθcosθ < 0이고 tanθcosθ > 0일 때, θ는 몇 사분면 각인지 구하기.
  category: "삼각함수 부호 · 사분면 결정"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "sinθcosθ<0 → 2, 4사분면 · tanθcosθ = sinθ > 0 → 1, 2사분면 · 교집합 2사분면"
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 3
  premium: false
  rationale: |
    두 부호 조건 결합 사분면 판정 · depth 2 · **★ 3 확정** (조건 결합 통찰 +1).
  tier: star_3
  mechanism_primary: "삼각함수-부호결합-사분면"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플 NORMAL"]
    L5_confidence: 0.85
```

### 【CH06 삼각함수의 그래프】 3문 (0721·0722·0724)

```yaml
- id: 라이트쎈-대수-삼각그래프-주기-0722
  page: 93
  vendor_label: "B 유형 Master · 대표 문제 · 유형 04 삼각함수의 그래프의 방정식"
  category_type: "B 유형 Master · 대표"
  summary: |
    함수 y = a sin(bx+c) + d의 그래프가 최댓값 3, 최솟값 -1, 주기 π일 때
    a, b, d 값 구하기 (a>0, b>0).
  category: "삼각함수 계수 결정 · 최대·최소·주기"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "최대·최소 → a + d = 3, -a + d = -1 · 연립 a=2, d=1"
    - step: 2
      type: 절차형
      depth: 2
      effective_depth: 2
      description: "주기 2π/b = π → b = 2"
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    대표 문제 · 계수 결정 정형 · depth 2 두 단계 · **★ 3 확정** (표준 정형).
  tier: star_3
  mechanism_primary: "삼각함수-계수결정-최대최소주기"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플 NORMAL"]
    L5_confidence: 0.90

- id: 라이트쎈-대수-삼각그래프-방정식-0724
  page: 93
  vendor_label: "B 유형 Master · 유형 05 삼각함수의 그래프의 방정식"
  category_type: "B 유형 Master"
  summary: |
    y = a cos(bx+c) + d의 주어진 그래프로부터 a, b, c, d 결정
    (그래프에 두 점 A, B 좌표 표시 · 진폭·주기·최고점 위치 조건).
  category: "삼각함수 그래프 완전 결정"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "그래프 최대·최소 → a, d · 주기 → b · 최고점 x좌표 → c 순차 결정"
    - step: 2
      type: I-XU
      depth: 3
      effective_depth: 3
      description: "cos 함수 위상 반영 · c 결정 시 최고점 위치 = 2π·k/b - c/b 관계 · 시각 판독"
  insight_count: 2
  depth_score: 8.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    그래프 판독 + 4계수 완전 결정 · 시각 정보 통찰 (I-XU 편입) · **★ 4 확정** (B 표준 후반 · 상급).
    시장 노출 유형 (수능 25 유형 · 평가원 다수) → premium 아님.
  tier: star_4
  mechanism_primary: "삼각그래프-4계수-완전결정"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ● 상", "마플 TOUGH"]
    L5_confidence: 0.80

- id: 라이트쎈-대수-삼각그래프-복합-0721
  page: 93
  vendor_label: "B 유형 Master · 별점 ☆ 2 · 유형 04"
  category_type: "B 유형 Master"
  summary: |
    조건 f(x) = a sin(bx) + c에 대한 정보 (최고점 좌표, 진폭, 주기) 주어질 때 f(π/4) 값 계산.
  category: "삼각함수 · 대입 계산"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "조건에서 a, b, c 결정 후 x=π/4 대입"
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    별점 ☆ 2 · 계수 결정 + 대입 · depth 2 · **★ 3 확정** (표준).
  tier: star_3
  mechanism_primary: "삼각함수-계수결정-대입"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계", "마플 NORMAL"]
    L5_confidence: 0.85
```

### 【CH07 삼각함수의 활용】 2문 (사인·코사인법칙)

```yaml
- id: 라이트쎈-대수-사인법칙-외접원-0855
  page: 112
  vendor_label: "A 기본 · 유형 01 사인법칙"
  category_type: "A 기본 Master"
  summary: |
    삼각형 ABC에서 A = 30°, a = 5일 때 외접원 반지름 R 구하기 (사인법칙).
  category: "사인법칙 · 외접원"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - step: 1
      type: 절차형
      depth: 1
      effective_depth: 1
      description: "a/sinA = 2R → R = a/(2sinA) = 5/(2·1/2) = 5"
  insight_count: 1
  depth_score: 2.0
  base_star: 1
  star: 1
  premium: false
  rationale: |
    A단계 개념 즉시 적용 · 공식 대입 · ★ 1 확정
  tier: star_1
  mechanism_primary: "사인법칙-외접원반지름"
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 A단계", "개념원리 개념"]
    L5_confidence: 0.95

- id: 라이트쎈-대수-코사인법칙-집중공략-0895
  page: 118
  vendor_label: "B 유형 Master · 집중공략 · 별점 ☆☆"
  category_type: "B 유형 Master · 집중공략"
  summary: |
    삼각형 ABC에서 a=3, b=5, cosC=1/2일 때 삼각형 넓이 S 구하기 (코사인법칙 + 넓이).
  category: "코사인법칙 · 삼각형 넓이"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "sinC = √(1 - cos²C) = √3/2 (0<C<π)"
    - step: 2
      type: 절차형
      depth: 2
      effective_depth: 2
      description: "S = (1/2)·a·b·sinC = (1/2)·3·5·(√3/2) = 15√3/4"
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    집중공략 · 코사인·sin 관계 + 넓이 공식 · depth 2 두 단계 · **★ 3 확정** (표준 · 집중공략 위신 유지).
  tier: star_3
  mechanism_primary: "코사인법칙-사인변환-넓이"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계", "마플 NORMAL"]
    L5_confidence: 0.90
```

### 【CH08 등차수열】 2문 (0927·0930)

```yaml
- id: 라이트쎈-대수-등차수열-일반항-0927
  page: 124
  vendor_label: "A 기본 · 유형 02 등차수열의 일반항"
  category_type: "A 기본 Master"
  summary: |
    첫째항이 3, 공차가 -2인 등차수열의 일반항 aₙ 구하기.
  category: "등차수열 · 일반항"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - step: 1
      type: 절차형
      depth: 1
      effective_depth: 1
      description: "aₙ = a₁ + (n-1)d = 3 + (n-1)(-2) = -2n + 5"
  insight_count: 1
  depth_score: 2.0
  base_star: 1
  star: 1
  premium: false
  rationale: |
    A단계 개념 즉시 적용 · 공식 대입 · ★ 1 확정
  tier: star_1
  mechanism_primary: "등차수열-일반항-공식"
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 A단계", "개념원리 개념"]
    L5_confidence: 0.95

- id: 라이트쎈-대수-등차수열-Sn조건-0930
  page: 124
  vendor_label: "B 유형 Master · 유형 05 등차수열의 합"
  category_type: "B 유형 Master"
  summary: |
    등차수열 {aₙ}에서 첫째항이 5, 제10항이 32일 때 첫째항부터 제10항까지의 합 S₁₀ 구하기.
  category: "등차수열의 합 · 공식 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: 절차형
      depth: 2
      effective_depth: 2
      description: "Sₙ = n(a₁+aₙ)/2 = 10·(5+32)/2 = 185"
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: |
    합 공식 즉시 적용 · depth 2 · **★ 2 확정** (A 후반~B 대표).
  tier: star_2
  mechanism_primary: "등차수열-합공식-두항이용"
  insight_type: 절차형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 A단계 후반", "개념원리 유형"]
    L5_confidence: 0.95
```

### 【CH10 수열의 합】 1문 (0932)

```yaml
- id: 라이트쎈-대수-수열합-등차합-0932
  page: 124
  vendor_label: "B 유형 Master · 유형 05"
  category_type: "B 유형 Master"
  summary: |
    등차수열 6, 3, 0, ...에서 첫째항부터 제 n항까지의 합이 Sₙ일 때
    Sₙ의 값이 최대가 되는 n 값 구하기 (음이 되기 직전 항까지).
  category: "등차수열 합 최대 · 부호 전환"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "aₙ = 6 - 3(n-1) = 9 - 3n · aₙ ≥ 0 조건 n ≤ 3 · a₃ = 0"
    - step: 2
      type: I-XU
      depth: 3
      effective_depth: 3
      description: "S₃ = S₂ = 최대 (a₃ = 0 특수) · 답 n = 2 또는 3"
  insight_count: 2
  depth_score: 7.0
  base_star: 3
  star: 4
  premium: false
  rationale: |
    등차수열 합 최대 · 부호 전환 + 등호 조건 · depth 3 두 단계 · **★ 4 확정**.
    a₃ = 0 특수 케이스 (I-XU 편입) → 표준 유형이나 등호 처리 함정.
  tier: star_4
  mechanism_primary: "등차수열-합최대-부호전환"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ● 상", "마플 TOUGH"]
    L5_confidence: 0.80
```

### 【CH11 수학적 귀납법】 1문 (1263)

```yaml
- id: 라이트쎈-대수-귀납법-증명-1263
  page: 167
  vendor_label: "B 유형 Master · 유형 03 수학적 귀납법에 의한 증명"
  category_type: "B 유형 Master"
  summary: |
    모든 자연수 n에 대해 1³ + 2³ + ... + n³ = {n(n+1)/2}² 이 성립함을 증명하는
    빈칸 [가]·[나]·[다] 채우기 (n=k → n=k+1 귀납 단계 서술).
  category: "수학적 귀납법 · 증명 서술"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "n=k 가정 · n=k+1 좌변 = {k(k+1)/2}² + (k+1)³ 전개"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "인수분해 (k+1)²[(k/2)² + (k+1)] · 정리 후 {(k+1)(k+2)/2}² 형태 도출"
  insight_count: 2
  depth_score: 7.5
  base_star: 4
  star: 4
  premium: false
  rationale: |
    수학적 귀납법 증명 정형 · depth 3 두 단계 · **★ 4 확정** (증명 서술 부담).
    표본에서 미분·극한 사용 없음 확인 (교육과정 정합).
  tier: star_4
  mechanism_primary: "귀납법-증명-빈칸채우기"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플 STEP 2"]
    L5_confidence: 0.85
```

---

## Ⅱ. 유형만렙 대수 25문 표본 판정

### 【CH01 지수】 3문 (0041·0047·0063)

```yaml
- id: 유만-대수-지수-계산-대표-0041
  page: 12
  vendor_label: "B 유형 완성 · 대표문제 · 유형 04 식의 계산 - 지수가 정수인 경우"
  category_type: "B 유형 완성 · 대표"
  summary: |
    (25⁻²+5⁻⁵)/3 × 5/(3⁷+3⁵)을 간단히 하기 (지수법칙 · 공약수).
  category: "지수 계산 · 인수분해 · 약분"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "분자 25⁻²+5⁻⁵ = 5⁻⁵(5³+1) · 분모 3⁷+3⁵ = 3⁵(3²+1)"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "공약수 정리 후 지수 결합 · 15⁻³ 형태 도출"
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    대표문제 · 인수분해 + 약분 통찰 · depth 2 두 단계 · **★ 3 확정** (표준).
  tier: star_3
  mechanism_primary: "지수-인수분해-약분"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플 NORMAL"]
    L5_confidence: 0.90

- id: 유만-대수-지수-서술형-0047
  page: 12
  vendor_label: "B 유형 완성 · 상 · 서술형 · 유형 05"
  category_type: "B 유형 완성 · 서술형"
  summary: |
    a>0, a≠1일 때 (a^√3)^(3√2) × (a^k)^(6√6) ÷ a^(4√6) = a^√6 만족 실수 k 값 구하기.
  category: "지수법칙 · 무리수 지수 · 등식 해결"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "좌변 지수 정리 3√6 + 6√6·k - 4√6 = √6 · k 계수 √6 · 상수항 √6 정리"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "6k√6 = √6(1 - 3 + 4) = 2√6 → k = 1/3"
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    서술형 · 무리수 지수 계수 결정 · depth 3 두 단계 · **★ 4 확정** (서술 부담 · 상 라벨).
  tier: star_4
  mechanism_primary: "지수-무리수지수-계수결정"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ● 상", "마플 TOUGH"]
    L5_confidence: 0.80

- id: 유만-대수-지수-곱셈공식-0063
  page: 15
  vendor_label: "B 유형 완성 · 상 · 유형 09 지수법칙과 곱셈 공식"
  category_type: "B 유형 완성 · 상"
  summary: |
    (5^(2+√2) + 5^(2-√2))² - (5^(2+√2) - 5^(2-√2))² 을 간단히 하기.
  category: "지수 · (A+B)²-(A-B)²=4AB 공식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "A=5^(2+√2), B=5^(2-√2) 치환 · (A+B)²-(A-B)² = 4AB"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "AB = 5^(2+√2)·5^(2-√2) = 5⁴ · 4AB = 4·5⁴"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    치환 + 공식 · 유형만렙 CM1 #0057 (지수 CM1 유사) 동형 · **★ 3 확정** (시장 표준).
  tier: star_3
  mechanism_primary: "지수-치환-차제곱공식"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플 NORMAL"]
    L5_confidence: 0.90
```

### 【CH02 로그】 3문 (0116·0126·0230)

```yaml
- id: 유만-대수-로그-계산-0116
  page: 23
  vendor_label: "B 유형 완성 · 중 · 유형 03 로그의 성질"
  category_type: "B 유형 완성 · 중"
  summary: |
    log₄√3 + log₄10 + log₄(1/(2√15))의 값 구하기.
  category: "로그 성질 · 곱셈·나눗셈"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "log₄(√3·10·1/(2√15)) = log₄(10/(2√5)) = log₄(√5) = 1/4"
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: |
    로그 곱셈 성질 · 계산 정리 · depth 2 · **★ 2 확정** (중 라벨).
  tier: star_2
  mechanism_primary: "로그-곱셈성질-계산"
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 A단계 후반", "개념원리 유형"]
    L5_confidence: 0.90

- id: 유만-대수-로그-표현-0126
  page: 23
  vendor_label: "B 유형 완성 · 상 · 유형 05 밑변환 공식"
  category_type: "B 유형 완성 · 상"
  summary: |
    log₂3 = a, log₃5 = b일 때, log₆45를 a, b로 나타내기.
  category: "로그 밑변환 · 표현"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "log₆45 = log₂45/log₂6 = (log₂9 + log₂5)/(1 + log₂3) · log₂5 = a·b 표현"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "log₂9 = 2a · log₂5 = log₂3·log₃5 = ab · 정리하면 (2a + ab)/(1 + a) = a(2+b)/(1+a)"
  insight_count: 2
  depth_score: 7.0
  base_star: 3
  star: 4
  premium: false
  rationale: |
    밑변환 + a,b 결합 · depth 3 두 단계 · **★ 4 확정** (상 라벨 + 다단계 결합).
    시장 노출 극대 · premium 아님.
  tier: star_4
  mechanism_primary: "로그-밑변환-변수표현"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ● 상", "마플 TOUGH"]
    L5_confidence: 0.85

- id: 유만-대수-로그-소수부분-C-0230
  page: 39
  vendor_label: "C 실력 향상 · 유형 15"
  category_type: "C 실력 향상"
  summary: |
    log x의 정수 부분이 3이고, log x의 소수 부분과 log(x√x)의 소수 부분의 합이 1일 때,
    모든 실수 x의 값의 곱 구하기.
  category: "로그 정수부·소수부 · 조건 결합"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "log x = 3 + α (0 ≤ α < 1) · log(x√x) = (3/2)(3+α) = 4.5 + 1.5α · 소수부 정수부 분리"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "1.5α 정수부 케이스 분류 (0 ≤ α < 1/3 · 1/3 ≤ α < 2/3 · 2/3 ≤ α < 1) · 소수부 합 = 1 조건 → α 값"
    - step: 3
      type: I-XU
      depth: 3
      effective_depth: 3
      description: "케이스별 α 값 → x 값 3개 · 곱 취하기 (log x 합 = 정수 부분 합 → 10의 거듭제곱)"
  insight_count: 3
  depth_score: 9.5
  base_star: 5
  star: 5
  premium: false
  rationale: |
    C 실력 향상 · 로그 정수부·소수부 · 케이스 3중 분류 + 곱 조건 · depth 3 세 단계 · **★ 5 확정**.
    시장 노출 유형 (수능·평가원 다수 등재) · **premium 후보 아님** (전형적 학평 유형).
  tier: star_5
  mechanism_primary: "로그-정수소수부분-케이스분류"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 2
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 C단계", "마플 EXAM"]
    L5_confidence: 0.80
    수능_노출_이력: "학평 기출 다수 원형"
```

### 【CH03 지수함수】 2문 (0284·0289)

```yaml
- id: 유만-대수-지수함수-이동-대표-0284
  page: 45
  vendor_label: "B 유형 완성 · 대표문제 · 유형 03 지수함수의 그래프의 평행이동과 대칭이동"
  category_type: "B 유형 완성 · 대표"
  summary: |
    y = 3^x의 그래프를 x축 방향으로 1만큼, y축 방향으로 -2만큼 평행이동한 그래프가
    점 (2, a)를 지날 때 a의 값 구하기.
  category: "지수함수 평행이동 · 점 대입"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "y - (-2) = 3^(x-1) → y = 3^(x-1) - 2 · x=2 대입 → a = 3 - 2 = 1"
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: |
    대표문제 · 평행이동 규칙 + 점 대입 · depth 2 · **★ 2 확정** (A 후반~B 대표 표준).
  tier: star_2
  mechanism_primary: "지수함수-평행이동-점대입"
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 A단계 후반", "개념원리 유형"]
    L5_confidence: 0.95

- id: 유만-대수-지수함수-교점없음-0289
  page: 45
  vendor_label: "B 유형 완성 · 상 · 유형 03"
  category_type: "B 유형 완성 · 상"
  summary: |
    함수 y = 3^(x+1) + 1의 그래프와 직선 y = k가 만나지 않도록 하는 실수 k 값의 범위 구하기.
  category: "지수함수 · 점근선 · 교점 조건"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "y = 3^(x+1) + 1 치역 y > 1 (점근선 y=1) · 함수값 > 1"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "만나지 않으려면 k ≤ 1 (점근선 이하 or 등호)"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    지수함수 치역 + 교점 조건 · depth 2 두 단계 · **★ 3 확정** (표준 상 유형).
  tier: star_3
  mechanism_primary: "지수함수-치역-교점조건"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계", "마플 NORMAL"]
    L5_confidence: 0.85
```

### 【CH04 로그함수】 2문 (0225·0227)

```yaml
- id: 유만-대수-로그함수-상용로그-0225
  page: 38
  vendor_label: "B 유형 완성 · 유형 11+13 상용로그표"
  category_type: "B 유형 완성 · 중~상"
  summary: |
    상용로그표를 이용하여 √404의 값 구하기 (log 4.04 활용).
  category: "상용로그표 · 계산"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "log √404 = (1/2)log 404 = (1/2)(2 + log 4.04) 상용로그표 대입"
    - step: 2
      type: 절차형
      depth: 2
      effective_depth: 2
      description: "log 4.04 ≈ .6064 → 결과 = 10^(1 + .3032) ≈ 20.10"
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    상용로그표 활용 정형 · depth 2 두 단계 · **★ 3 확정** (교과 표준 유형).
  tier: star_3
  mechanism_primary: "상용로그표-제곱근-계산"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계", "마플 NORMAL"]
    L5_confidence: 0.90

- id: 유만-대수-로그함수-실생활-0227
  page: 38
  vendor_label: "B 유형 완성 · 유형 16 상용로그의 실생활 활용"
  category_type: "B 유형 완성 · 지문형"
  summary: |
    어느 상품의 수요량 D와 판매 가격 P 사이 log_a D = k - (1/3) log_a P 관계식.
    판매 가격이 현재의 8배일 때 수요량은 현재의 몇 배가 되는지 구하기.
  category: "상용로그 · 실생활 지문형"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "현재 조건 → log_a D₀ = k - (1/3)log_a P₀ · 8배 조건 대입 → log_a D₁ = k - (1/3)log_a(8P₀)"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "log_a(D₁/D₀) = -(1/3)log_a 8 = log_a(8^(-1/3)) = log_a(1/2) · D₁/D₀ = 1/2"
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    지문형 + 상용로그 관계식 · depth 3 두 단계 · **★ 4 확정** (지문 부담).
    시장 노출 표준 실생활 유형 · premium 아님.
  tier: star_4
  mechanism_primary: "상용로그-지문-비율변화"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ● 상", "마플 TOUGH"]
    L5_confidence: 0.80
```

### 【CH05 삼각함수】 2문

```yaml
- id: 유만-대수-삼각함수-부호결정-대표
  page: 86
  vendor_label: "B 유형 완성 · 대표문제 · 유형 09 삼각함수 값의 부호"
  category_type: "B 유형 완성 · 대표"
  summary: |
    sin θ > 0이고 tan θ < 0일 때, θ는 몇 사분면 각인지 결정.
  category: "삼각함수 부호 조합 · 사분면 판정"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      description: "sin θ > 0 → 1, 2사분면 · tan θ < 0 → 2, 4사분면 · 교집합 2사분면"
  insight_count: 1
  depth_score: 4.0
  base_star: 2
  star: 3
  premium: false
  rationale: |
    대표문제 · 부호 조합 사분면 결정 · depth 2 · **★ 3 확정** (라이트쎈 CH05 #0603 동형).
  tier: star_3
  mechanism_primary: "삼각함수-부호조합-사분면"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플 NORMAL"]
    L5_confidence: 0.90

- id: 유만-대수-삼각함수-관계식-상
  page: 87
  vendor_label: "B 유형 완성 · 상 · 유형 10~13 삼각함수 사이의 관계"
  category_type: "B 유형 완성 · 상"
  summary: |
    sin θ + cos θ = 1/2일 때, sin³θ + cos³θ 값 구하기.
  category: "삼각함수 · 항등식 결합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "(sin θ + cos θ)² = 1 + 2 sin θ cos θ = 1/4 → sin θ cos θ = -3/8"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "sin³θ + cos³θ = (sin θ + cos θ)(1 - sin θ cos θ) = (1/2)(1 - (-3/8)) = 11/16"
  insight_count: 2
  depth_score: 7.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    항등식 (a+b)² · a³+b³ 공식 결합 · depth 3 두 단계 · **★ 4 확정** (상 라벨).
    시장 표준 · premium 아님.
  tier: star_4
  mechanism_primary: "삼각함수-합조건-3제곱합"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ● 상", "마플 TOUGH"]
    L5_confidence: 0.85
```

### 【CH06 삼각함수의 그래프】 3문 (대표·상·서술형)

```yaml
- id: 유만-대수-삼각그래프-계수결정-대표
  page: 105
  vendor_label: "B 유형 완성 · 대표문제 · 유형 04 sin·cos 그래프의 방정식"
  category_type: "B 유형 완성 · 대표"
  summary: |
    함수 y = a sin(bx+c) + d 그래프의 최댓값 5, 최솟값 -1, 주기 π일 때
    양수 a, b와 d의 값 구하기.
  category: "삼각함수 계수 결정 · 대표 유형"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "최대·최소 → a = 3, d = 2 · 주기 2π/b = π → b = 2"
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    대표문제 · 계수 결정 정형 · **★ 3 확정** (라이트쎈 CH06 #0722 동형).
  tier: star_3
  mechanism_primary: "삼각함수-계수결정-최대최소주기"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플 NORMAL"]
    L5_confidence: 0.90

- id: 유만-대수-삼각그래프-실근개수-상
  page: 118
  vendor_label: "B 유형 완성 · 상 · 유형 삼각방정식 · 실근 개수"
  category_type: "B 유형 완성 · 상"
  summary: |
    0 ≤ x ≤ 2π에서 방정식 2 sin²x - 3 cos x - 3 = 0의 서로 다른 실근의 개수 구하기.
  category: "삼각방정식 · 실근 개수 · 치환"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "sin²x = 1 - cos²x 대입 · t = cos x (-1 ≤ t ≤ 1) 치환 → 2 - 2t² - 3t - 3 = 0"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "-2t² - 3t - 1 = 0 → 2t² + 3t + 1 = 0 → (2t+1)(t+1) = 0 · t = -1/2, -1"
    - step: 3
      type: I-XU
      depth: 3
      effective_depth: 3
      description: "cos x = -1/2 (2π에서 2개) · cos x = -1 (1개) · 총 3개"
  insight_count: 3
  depth_score: 9.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    치환 + 인수분해 + cos 해 개수 · depth 3 세 단계 · **★ 4 확정** (상 라벨 표준).
    시장 노출 극대 · premium 아님.
  tier: star_4
  mechanism_primary: "삼각방정식-치환-실근개수"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ● 상", "마플 TOUGH"]
    L5_confidence: 0.85

- id: 유만-대수-삼각그래프-C-정점
  page: 121
  vendor_label: "C 실력 향상 · 최댓값·최솟값 조건"
  category_type: "C 실력 향상"
  summary: |
    함수 f(x) = |2 sin x - 1| + a 의 최댓값이 5일 때 최솟값 구하기.
    (a는 실수 · 0 ≤ x ≤ 2π 정의역)
  category: "삼각함수 · 절댓값 · 최대·최소"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "sin x 범위 [-1, 1] · 2 sin x - 1 범위 [-3, 1] · |...| 범위 [0, 3]"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "최댓값 3 + a = 5 → a = 2 · 최솟값 0 + a = 2"
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    C 실력 향상 · 절댓값·최대·최소 결합 · depth 3 두 단계 · **★ 4 확정**.
    표준 정점 유형 · 학평 노출 · premium 아님.
  tier: star_4
  mechanism_primary: "삼각함수-절댓값-최대최소"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ●● 상", "마플 TOUGH"]
    L5_confidence: 0.80
```

### 【CH07 삼각함수의 활용 (사인·코사인 법칙)】 2문

```yaml
- id: 유만-대수-사인법칙-활용-대표
  page: 124
  vendor_label: "B 유형 완성 · 대표문제 · 유형 01 사인법칙"
  category_type: "B 유형 완성 · 대표"
  summary: |
    삼각형 ABC에서 A = 60°, B = 45°, a = 6일 때 b의 값 구하기 (사인법칙).
  category: "사인법칙 · 변 결정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: 절차형
      depth: 2
      effective_depth: 2
      description: "a/sinA = b/sinB → b = a·sinB/sinA = 6·(√2/2)/(√3/2) = 6√2/√3 = 2√6"
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: |
    대표문제 · 사인법칙 공식 대입 · **★ 2 확정** (A 후반~B 대표 표준).
  tier: star_2
  mechanism_primary: "사인법칙-변결정"
  insight_type: 절차형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 A단계 후반", "마플 BASIC"]
    L5_confidence: 0.95

- id: 유만-대수-코사인법칙-원-C
  page: 139
  vendor_label: "C 실력 향상 · 유형 사각형 넓이·원 반지름"
  category_type: "C 실력 향상"
  summary: |
    원에 내접하는 사각형 ABCD에서 AB=3, BC=5, CD=6, DA=8이고 ∠A + ∠C = π일 때,
    사각형의 넓이 구하기 (Bretschneider 공식 유도 유형).
  category: "코사인법칙 · 내접사각형 · 넓이"
  M: {s: 3, k: 3, a: 3, t: 3}
  M_total: 12
  insights:
    - step: 1
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "∠A + ∠C = π → cos C = -cos A · 두 삼각형 대각선 BD 코사인법칙 두 식 결합"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "9 + 64 - 48 cos A = 25 + 36 + 60 cos A → cos A · BD² 결정"
    - step: 3
      type: I-XU
      depth: 3
      effective_depth: 3
      description: "넓이 = (1/2)·AB·AD·sin A + (1/2)·BC·CD·sin C · 결합"
  insight_count: 3
  depth_score: 9.5
  base_star: 5
  star: 5
  premium: true
  rationale: |
    C 실력 향상 · 내접사각형 · 코사인법칙 대칭 결합 · depth 3 세 단계 · M=12 · **★ 5 premium 후보**.
    Bretschneider 유형은 시장 노출 있으나 위 4변 값 조합 자기창작 여지 · **premium 잠정 인정** (외국 수학자 이름 미사용 · 유도만).
  tier: star_5
  premium: true
  mechanism_primary: "내접사각형-코사인법칙대칭-넓이"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 3
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 C단계", "마플 EXAM"]
    L5_confidence: 0.75
```

### 【CH08 등차·등비수열】 3문

```yaml
- id: 유만-대수-등차수열-공차-대표
  page: 141
  vendor_label: "B 유형 완성 · 대표문제 · 유형 등차수열의 정의"
  category_type: "B 유형 완성 · 대표"
  summary: |
    등차수열 -3, 1, 5, □, 13, ...에서 □의 값 구하기.
  category: "등차수열 · 정의"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - step: 1
      type: 절차형
      depth: 1
      effective_depth: 1
      description: "공차 d = 4 · □ = 5 + 4 = 9"
  insight_count: 1
  depth_score: 2.0
  base_star: 1
  star: 1
  premium: false
  rationale: |
    A단계 개념 즉시 적용 · **★ 1 확정**.
  tier: star_1
  mechanism_primary: "등차수열-정의-공차"
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 A단계", "개념원리 개념"]
    L5_confidence: 0.95

- id: 유만-대수-등차수열-Sn조건-상
  page: 141
  vendor_label: "B 유형 완성 · 상 · 유형 등차수열의 합"
  category_type: "B 유형 완성 · 상"
  summary: |
    등차수열 {aₙ}에서 S₄ = 56, S₈ = 80일 때, Sₙ의 최댓값과 그때의 n 구하기.
  category: "등차수열 합 · 최대 조건"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "S₈ - S₄ = a₅ + a₆ + a₇ + a₈ = 24 · 두 식 → a₁, d 연립 → a₁ = 20, d = -4"
    - step: 2
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "aₙ = 20 - 4(n-1) = 24 - 4n · aₙ ≥ 0 조건 → n ≤ 6 · S₆ = 6·(20+0)/2 = 60"
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    합 조건 두 식 + 최대 판단 · depth 3 두 단계 · **★ 4 확정** (상 라벨 · 표준 정점).
  tier: star_4
  mechanism_primary: "등차수열-합조건-최대"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ● 상", "마플 TOUGH"]
    L5_confidence: 0.85

- id: 유만-대수-등비수열-공비-중
  page: 141
  vendor_label: "B 유형 완성 · 중 · 유형 등비수열"
  category_type: "B 유형 완성 · 중"
  summary: |
    등비수열 3, x, 12, y, ...의 x + y 값 구하기 (공비 양수).
  category: "등비수열 · 등비중항"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "등비중항 x² = 3·12 = 36 → x = 6 · 공비 r = 2 · y = 12·2 = 24"
  insight_count: 1
  depth_score: 3.0
  base_star: 2
  star: 2
  premium: false
  rationale: |
    등비중항 활용 · depth 2 · **★ 2 확정** (B 중 라벨).
  tier: star_2
  mechanism_primary: "등비수열-등비중항"
  insight_type: 통찰형
  target_cohort: 중위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 A단계 후반", "마플 BASIC"]
    L5_confidence: 0.90
```

### 【CH09 수열의 합】 3문 (1089·1091·1095)

```yaml
- id: 유만-대수-수열합-Sigma공식-대표
  page: 166
  vendor_label: "B 유형 완성 · 대표문제 · 유형 01 합의 기호 ∑"
  category_type: "B 유형 완성 · 대표"
  summary: |
    수열 {aₙ}에 대해 ∑_{k=1}^{n} (a_{2k-1} + a_{2k}) = n² + 3n일 때 ∑_{k=1}^{20} a_k의 값 구하기.
  category: "∑ 조작 · 부분합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "n = 10 대입 → ∑_{k=1}^{10} (a_{2k-1} + a_{2k}) = 100 + 30 = 130 · 이는 ∑_{k=1}^{20} a_k와 동일"
  insight_count: 1
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    대표문제 · ∑ 인덱스 변환 관찰 · depth 3 · **★ 3 확정** (표준).
  tier: star_3
  mechanism_primary: "합기호-인덱스변환-부분합"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플 NORMAL"]
    L5_confidence: 0.90

- id: 유만-대수-수열합-f(x)조건-중
  page: 166
  vendor_label: "B 유형 완성 · 중 · 유형 01"
  category_type: "B 유형 완성 · 중"
  summary: |
    함수 f(x)에 대해 f(1) = 4, f(15) = 70일 때 ∑_{k=1}^{13} f(k+1) - ∑_{k=1}^{13} f(k-2) 의 값 구하기.
  category: "합기호 · 인덱스 시프트"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "∑_{k=1}^{13} f(k+1) = ∑_{j=2}^{14} f(j) · ∑_{k=1}^{13} f(k-2) = ∑_{j=-1}^{11} f(j) · 차이 = f(12)+f(13)+f(14) - f(-1)-f(0)-f(1)"
  insight_count: 1
  depth_score: 4.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    합기호 인덱스 시프트 · depth 3 · **★ 3 확정** (표본 편차 · 데이터 완결성 조건 부족 시 값 미상 · 통찰만 판정).
  tier: star_3
  mechanism_primary: "합기호-인덱스시프트-차"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계", "마플 NORMAL"]
    L5_confidence: 0.75

- id: 유만-대수-수열합-절댓값-상
  page: 166
  vendor_label: "B 유형 완성 · 상 · 유형 01"
  category_type: "B 유형 완성 · 상"
  summary: |
    수열 a₁, a₂, ..., a₁₀의 각 항이 -1, 0, 2 중 하나이며 ∑ a_k = 50,
    ∑ a_k² = 130일 때 ∑ |a_k| 값 구하기.
  category: "이산 수열 · 조건 조합"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "각 항 값 -1, 0, 2 개수 p, q, r로 두면 p+q+r=100, -p+2r=50, p+4r=130"
    - step: 2
      type: I-EQV
      depth: 3
      effective_depth: 3
      description: "p, q, r 연립 → r = ?, p = ? · ∑|a_k| = p + 2r 계산"
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: |
    이산 조건 3연립 · depth 3 두 단계 · **★ 4 확정** (상 라벨 · 시장 표준 조건 조합).
    학평 노출 · premium 아님.
  tier: star_4
  mechanism_primary: "이산수열-조건조합-3연립"
  insight_type: 통찰형
  target_cohort: 상위권
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 ●● 상", "마플 TOUGH"]
    L5_confidence: 0.80
```

### 【CH10 수학적 귀납법】 2문 (1179·1189)

```yaml
- id: 유만-대수-귀납법-점화식-A
  page: 181
  vendor_label: "A 개념 확인 · 유형 10-1 수열의 귀납적 정의"
  category_type: "A 개념 확인"
  summary: |
    a₁ = 1, a_{n+1} = a_n/(n+2) (n=1, 2, 3, ...)일 때 제 5항 구하기.
  category: "점화식 · 반복 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: 절차형
      depth: 1
      effective_depth: 1
      description: "a₂ = 1/3, a₃ = 1/(3·4) = 1/12, a₄ = 1/(12·5) = 1/60, a₅ = 1/(60·6) = 1/360"
  insight_count: 1
  depth_score: 2.0
  base_star: 1
  star: 1
  premium: false
  rationale: |
    A 개념 확인 · 반복 대입 · **★ 1 확정**.
  tier: star_1
  mechanism_primary: "점화식-반복대입"
  insight_type: 절차형
  target_cohort: 하위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 A단계", "개념원리 개념"]
    L5_confidence: 0.95

- id: 유만-대수-귀납법-일반항-중
  page: 181
  vendor_label: "A 개념 확인 · 유형 10-3 일반항 구하기"
  category_type: "A 개념 확인"
  summary: |
    a₁ = 2, a_{n+1} = (n+1)/(n+2) · a_n 일 때 일반항 aₙ 구하기.
  category: "점화식 · 계차형·비율형 일반항"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-CON
      depth: 3
      effective_depth: 3
      description: "a_{n+1}/a_n = (n+1)/(n+2) · 곱셈 연쇄 aₙ/a₁ = ∏_{k=1}^{n-1} (k+1)/(k+2) = 2/(n+1)"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      description: "aₙ = 2·(2/(n+1)) = 4/(n+1)"
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: |
    비율형 점화식 연쇄곱 · depth 3+2 두 단계 · **★ 3 확정** (표준 유형).
  tier: star_3
  mechanism_primary: "점화식-비율형-연쇄곱"
  insight_type: 통찰형
  target_cohort: 중상위권
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: ["쎈 B단계 대표", "마플 NORMAL"]
    L5_confidence: 0.85
```

---

## Ⅲ. 통합 통계 · 종합 판단

### 표본 ★ 분포 (45문 실측)

| ★ | 라이트쎈 (20문) | 유형만렙 (25문) | 통합 (45문) | 비율 |
|---|---:|---:|---:|---:|
| ★ 1 | 3 | 3 | 6 | 13% |
| ★ 2 | 3 | 4 | 7 | 16% |
| ★ 3 | 7 | 10 | 17 | 38% |
| ★ 4 | 6 | 7 | 13 | 29% |
| ★ 5 | 1 | 1 | 2 | 4% |
| ★ 5 premium | 0 | 1 | 1 | 2% |

**premium 감지**: 1건 (유만-대수-코사인법칙-원-C · 내접사각형 4변 조합 · 창작 여지)

### 벤더 라벨 회귀 신호 (v1.12 편입 초안)

**라이트쎈 대수 (좋은책신사고)**:
| 라이트쎈 라벨 | 표본 우세 tier | 신뢰 | 라이트쎈 CM1 대비 |
|---|---|---|---|
| A 기본 Master | ★ 1~2 | 0.95 | 동일 (CM1 v1.0 계승) |
| B 유형 Master · 별점 ☆ 1~2 | ★ 3 | 0.85 | 동일 |
| B 유형 Master · 별점 ☆ 3 · 집중공략 | ★ 4 | 0.80 | 동일 |
| 실전 Training · 수능/평가원 기출 | ★ 4 | 0.85 | 동일 |
| 실전 Training · 집중공략 서술형 | ★ 4~5 | 0.75 | 동일 |

**유형만렙 대수 (비상교육)**:
| 유형만렙 라벨 | 표본 우세 tier | 신뢰 | 유형만렙 CM1 대비 |
|---|---|---|---|
| A 개념 확인 | ★ 1 | 0.95 | 동일 |
| B 유형 완성 · 대표문제 | ★ 3 | 0.90 | 동일 |
| B 유형 완성 · 중 | ★ 2~3 | 0.85 | 동일 |
| B 유형 완성 · 상 | ★ 4 | 0.85 | 동일 |
| B 유형 완성 · 서술형 | ★ 4 | 0.80 | 동일 |
| C 실력 향상 (상 100%) | ★ 4~5 | 0.80 | 동일 |

**핵심 관찰**:
- **두 유형편 라벨 체계 대수 라인에도 CM1 v1.0 회귀 신뢰도 동일 유지** (소단원 편차 없음 · 대수 라인 편입 검증)
- **정점 pool 밀도**: 라이트쎈 대수 별점 3개·집중공략 조합 (★ 4 확정 · ~5~8% 예상) · 유형만렙 대수 C 실력 향상 (★ 4~5 · ~10% 예상)
- **premium 후보 소수**: 통합 45문 중 1건 (2%) · 두 유형편은 정리편·유형편·연습편 pool 확대 위주 · premium 조달은 고쟁이·블랙라벨 병행 필수
- **대수 라인 커버리지 확장**: RPM 대수 45 + 개념원리 대수 + 올림포스 대수 + 본 자산 45 = 통합 dataset ~180+ 문 (지수·로그·삼각·수열 전 커버)

### 파일 경로 (원본 PDF)

```
참고자료/대수/시중교재/라이트쎈 대수 2025/
├── 라이트쎈 대수.pdf                          # 스캔형 · 176p
├── 라이트쎈 대수 정답.pdf                      # 스캔형
└── 라이트쎈 대수 빠답.pdf                      # 스캔형

참고자료/대수/시중교재/유형만렙/
├── 22개정 유형 만렙 대수 본문(학생용).pdf      # 텍스트형 · 200p
├── 22개정 유형 만렙 대수 기출BOOK(학생용).pdf  # 텍스트형 · 64p (별책)
├── 유형만렙 대수 답지.pdf                      # 텍스트형 · 200p
└── 유형만렙_대수 - 교사용.pdf                  # 참고
```

### 시각 판독 샘플 (재현용)

```
data/대수/추출/라이트쎈/samples/     # pdftoppm 120 DPI PNG (TOC + 각 CH 대표)
data/대수/추출/유형만렙/samples/      # pdftoppm 120 DPI PNG (TOC + 각 CH 대표)
```

---

## Ⅳ. 후속 작업 시사점

1. **정리편·유형편·연습편 pool 확대**: 두 자산 star_1~4 (통합 43문 = 96%) 표준 유형 pool로 즉시 편입 가능 · concept-author v1.0 원본 은행에 tier 매핑 추가
2. **premium 조달 격차**: 두 유형편만으로 시험지 premium ≥ 12문 목표 불충분 · **고쟁이 대수 · 블랙라벨 대수 · 마플 대수 병렬 정독** 후 통합 premium 카탈로그로 이관
3. **자기복제 방지**: 라이트쎈 CH07 사인법칙 대표·유형만렙 CH07 대표 유사 · anchor-neighbors 크로스 검증 필수 (라이트쎈 CH05 #0603 vs 유형만렙 CH05 대표 부호 결정 등 5~7건 동형 감지)
4. **대수 라인 vendor-label-calibration v1.12 편입**: 라이트쎈/유형만렙 라벨 회귀 상수 대수 라인에도 안정 (CM1 v1.0 결과 재확인)
5. **교육과정 침투 없음 확인**: 대수 10 소단원 모두 정규 · 수학적 귀납법 증명형에서 미분·극한 미사용 확인 (표본 기준)
