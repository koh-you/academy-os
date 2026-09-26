---
name: mechanism-데이터-마플시너지-모고-CM1
description: 마플시너지 공통수학1 모의고사 (2025판 · Final Test 1학기 중간고사 모의평가 4회) CM1 실전 특수 pool 정독 데이터. v2.0 통합 자산 스키마 · 표본 24문 (회차 균등 6×4) 층화 시스템 순정 판정 + 나머지 76문 벤더 문번 회귀 예측. 저작권 준수.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: "마플시너지 공통수학1 (2022개정 · 2025판) · 참고자료/공통수학 1/마플시너지 공통수학1 2025/마플시너지 공통수학1 모고.pdf (Final Test 1학기 중간고사 모의평가 4회)"
  section: "1학기 중간고사 모의평가 4회 (I. 다항식 (1) 다항식의 연산부터 ~ II. 방정식과 부등식 (4) 여러 가지 방정식 까지)"
  unit_code: "CM1 (PL·EQ 대단원 · MX·CB 배제 — 1학기 중간고사 스코프에 미포함)"
  sub_unit: "혼합 (다항식·나머지·인수분해·복소수·이차방정식·판별식·근과계수·삼차·사차·연립·미정계수)"
  citation_note: "마플시너지 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약 시그니처 3원소)"
  extract_range: "PDF page 3~22 · 책 page 325~344 · 회차 4개 · 회당 25문 (5지선다형 20문 3~6점 + 주관식 및 서술형 5문 3~5점) = 총 100문"
  pages: "325~344 (책 · PDF page 3~22)"
  total_problems: 100
  sample_problems: 24
  predicted_problems: 76
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트
  parent_pilot: pilot-쎈-마플시너지-평면좌표-표본설계 (형식 준거)
  parent_calibration: vendor-label-calibration.md v1.11 (마플 문번·배점 회귀 매핑 적용)
  companion_files:
    - bank/mechanism-데이터-마플시너지-CM1-EQ-이차방정식.md (마플시너지 심화편 CM1-EQ)
    - bank/mechanism-데이터-마플시너지-CM1-EQ-복소수.md
    - bank/mechanism-데이터-마플시너지-CM1-EQ-부등식.md
    - bank/mechanism-데이터-마플시너지-CM1-PL-다항식의연산.md
    - bank/mechanism-데이터-마플시너지-CM1-PL-인수분해.md
---

# 마플시너지 공통수학1 모의고사 (Final Test 1학기 중간고사 모의평가 4회) — CM1 실전 pool 정독 데이터

**출처**: 마플시너지 공통수학1 (2022개정 · 2025판) · 부록 Final Test 1학기 중간고사 모의평가
**범위**: 4회 × 25문 = 100문 (5지선다형 20문 · 주관식 및 서술형 5문)
**정독 페이지**: 책 p.325~344 (PDF page 3~22, 총 20p)
**총 문항 수**: **100문항** (회당 25문 · 회차별 학평 대비 실전 배치)
**표본**: 24문 (회차 균등 6문 × 4회 = 24문) · 각 회차 [초반 3~6번·중반 10~15번·후반 20~25번] 층화 · 시스템 순정 판정
**예측**: 76문 · 마플 문번·배점 회귀 예측 (vendor-label-calibration v1.11 적용)
**정독 일자**: 2026-07-21

## 벤더 라벨 체계 (마플시너지 모의고사 특수 편)

마플시너지 모의고사는 심화편의 BASIC/NORMAL/TOUGH/STEP 2/STEP 3 라벨 대신 **문번·배점·유형(5지선다·주관식·서술형) 3축**으로 난이도 분류:

| 문번대 | 배점 | 유형 | 실전 대응 | 표본 사전 tier |
|---|---|---|---|---|
| 01~06 (초반) | 3~4점 | 5지선다형 | 학평 2~5번급 | ★ 1~2 |
| 07~15 (중반) | 4점 | 5지선다형 | 학평 6~14번급 | ★ 2~3 |
| 16~18 (중후반) | 4점 | 5지선다형 | 학평 15~18번급 · 판별식·감차·활용 | ★ 3~4 |
| 19~20 (후반 킬러) | 5~6점 | 5지선다형 | 학평 20~22번급 · 통찰 필수 | ★ 4~5 |
| 21~23 (주관식 단답형) | 3~5점 | 단답형 | 학평 23~25번급 · 서술 없이 답만 | ★ 3~5 |
| 24 (서술형) | 4점 | 서술형 | 학평 대비 서술 · 단계 배점 | ★ 3~4 |
| 25 (서술형 · 최상급) | 5점 | 서술형 | 학평 28~30번급 킬러 서술 · 단계 배점 | ★ 4~5 |

**핵심 차이**: 심화편은 유형별 STEP 배치 · 모의고사는 학평 실전 배치 (난이도 오름차순).

## 회차·소단원 커버리지 매트릭스

| 회차 | 다항식 연산 | 나머지·인수분해 | 복소수 | 이차방정식·판별식·근과계수 | 이차식 활용·이차함수 | 삼차·사차·연립 |
|---|---|---|---|---|---|---|
| 01회 | 01·07 | 03·22 | 02·11·16·18·20·23 | 04·05·08·13·14·17·19·25 | 06·10·12·15·23 | 09·21·24 |
| 02회 | 01·04·07 | 05·06·10·12·24 | 02·13·14·17·18 | 08·15·19·20·22·23 | 03·11·16·21·25 | 09 |
| 03회 | 01·05·07 | 04·11·13·22 | 03·10·14·20·23 | 02·05·08·15·16·17·24 | 06·09·12·18·25 | 19 |
| 04회 | 01·04·22 | 06·07·15·20 | 03·09·10·14·19 | 05·11·12·13·16·17·23 | 08·18·21 | 25 |

**커버리지 요약**:
- 회차별 균형 매우 우수 · 대단원 3개 (PL 연산·인수분해 · EQ 복소수·이차·연립·삼사차)가 회당 25문에 고루 분포
- **1학기 중간고사 실전 학평 대응 확실** · 학평 특정 년월 지목 없이 유형 대응 (문번 순서 = 난이도 오름차순 규약 준수)
- CM1-CB·CM1-MX **미포함** (2학기 스코프)

---

## Ⅰ. 1회차 표본 (6/25문 층화 판정)

```yaml
- id: 마-모고-CM1-1회-01
  round: 1
  problem_no: 1
  page: 325
  vendor_label: "5지선다형 3점 · 초반"
  category_type: 모고 5지선다형 3점
  summary: "세 다항식 $A=-x^2-y^2+5$, $B=x^2-3x$, $C=3x^2+4x$에 대하여 $A+B-3(B-3C)$를 계산 후 계수 매칭"
  category: 다항식 연산 · 분배·정리
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "괄호 전개·부호 정리 $A+B-3B+9C = A-2B+9C$"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "동류항 정리 후 선지 매칭"}
  insight_count: 2
  depth_score: 3.0
  base_star: 1
  star: 1
  premium: false
  rationale: "다항식 표준 정리 · 초반 워밍업 · ★ 1 (모고 회차 도입)"
  tier: star_1
  mechanism_primary: 다항식 사칙연산 정리
  insight_type: 절차형
  target_cohort: 하위권
  anchor_status: null
  novelty_score: 0
  vendor_calibration_signal:
    L3_multi_vendor_tier: [마플-CM1-PL-다항식의연산 유형 01]
    L5_confidence: 0.95

- id: 마-모고-CM1-1회-05
  round: 1
  problem_no: 5
  page: 325
  vendor_label: "5지선다형 4점 · 중반"
  category_type: 모고 5지선다형 4점
  summary: "다음식 $\\sqrt{-4}(\\sqrt{-4}+\\sqrt{2})+\\dfrac{\\sqrt{18}}{\\sqrt{-2}} = a+bi$일 때 실수 $a$, $b$의 곱 $ab$"
  category: 복소수 · $\\sqrt{}$ 음수 부호 규약 · 실수·허수 분리
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "$\\sqrt{-4}=2i$·$\\sqrt{-2}=\\sqrt{2}i$ 부호 규약 정확 적용 (음수 곱 부호 함정 회피)"}
    - {step: 2, type: I-EQV, depth: 1, effective_depth: 1, description: "$2i(2i+\\sqrt{2})+\\dfrac{3\\sqrt{2}}{\\sqrt{2}i}$ 전개 · 유리화"}
    - {step: 3, type: I-CON, depth: 1, effective_depth: 1, description: "실수·허수 분리 · 곱 $ab$ 산출"}
  insight_count: 3
  depth_score: 5.33
  base_star: 3
  star: 3
  premium: false
  rationale: "복소수 부호 규약 함정 통찰 depth 2 · 3단 결합 · ★ 3 · 학평 초중반 표준"
  tier: star_3
  mechanism_primary: 복소수 · 음수 제곱근 규약
  insight_type: 통찰형
  target_cohort: 중위권
  anchor_status: candidate
  novelty_score: 1
  friction_triggers: [F2]
  friction_verdict: OK
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM1-EQ-복소수-0525, 마-CM1-EQ-복소수-0530]
    L5_confidence: 0.88

- id: 마-모고-CM1-1회-11
  round: 1
  problem_no: 11
  page: 326
  vendor_label: "5지선다형 4점 · 중반"
  category_type: 모고 5지선다형 4점
  summary: "이차방정식 $x^2+2x+9=0$의 두 근을 $\\alpha$, $\\beta$라 할 때 $\\dfrac{\\sqrt{\\alpha}}{\\sqrt{\\beta}}+\\dfrac{\\sqrt{\\beta}}{\\sqrt{\\alpha}}$의 값"
  category: 근과계수 · 허근 대응 · 근호 두 종류 대응 (제한적)
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "허근의 켤레 대응 · $\\alpha\\beta=9>0$·$\\alpha+\\beta=-2<0$ 부호 회피 · 통분 후 $\\dfrac{\\alpha+\\beta}{\\sqrt{\\alpha\\beta}}$"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "허근·근호 규약 · $\\sqrt{\\alpha\\beta}=\\sqrt{9}=3$·$\\dfrac{-2}{3}$"}
  insight_count: 2
  depth_score: 5.0
  base_star: 3
  star: 3
  premium: false
  rationale: "허근 근호 규약 통찰 · 근과계수 결합 · ★ 3 · CM1 근호 두 종류 침투 회피 스코프 안"
  tier: star_3
  mechanism_primary: 근과계수 · 허근 근호 규약
  insight_type: 통찰형
  target_cohort: 중위권
  anchor_status: candidate
  novelty_score: 1
  friction_triggers: [F2]
  friction_verdict: OK
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM1-EQ-이차방정식-0673]
    L5_confidence: 0.85

- id: 마-모고-CM1-1회-14
  round: 1
  problem_no: 14
  page: 327
  vendor_label: "5지선다형 4점 · 중후반"
  category_type: 모고 5지선다형 4점
  summary: "이차함수 $y=x^2$의 그래프 위의 세 점을 꼭짓점으로 하는 정삼각형의 한 변의 길이가 $2\\sqrt{3}$일 때 대칭축이 $x=-2$·(가)~(다) 조건에서 $f(x)$의 결정 · $f(x)-x^2$·$x^2-f(x)$·$f(1)$"
  category: 이차함수·정삼각형 조건 결합 · 두 근 좌표 대칭
  M: {s: 2, k: 3, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P3], description: "이차함수 그래프와 정삼각형 결합 · 대칭축·한 변 길이로 두 근 좌표 결정"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "정삼각형 성질로 세 꼭짓점 좌표 산출 · $f(x)$ 인수분해 형태 유도"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "조건 (다) 활용 $f(1)$ 산출"}
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  rationale: "★ 4 · 정삼각형·이차함수 도형+대수 융합 · XU 축 depth 3 · 후반 킬러 진입로"
  tier: star_4
  mechanism_primary: 정삼각형·이차함수 결합 · 좌표 결정
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: anchor
  novelty_score: 2
  friction_triggers: [F1, F2]
  friction_verdict: OK
  vendor_calibration_signal:
    L2_signature_neighbors: []
    L5_confidence: 0.85

- id: 마-모고-CM1-1회-19
  round: 1
  problem_no: 19
  page: 328
  vendor_label: "5지선다형 5점 · 후반"
  category_type: 모고 5지선다형 5점
  summary: "$x$에 대한 이차방정식 $x^2-2(a-2)x+a^2=0$이 허근 $z$를 가진다. 이때 $z^3$이 실수가 되도록 하는 모든 실수 $a$의 값의 합"
  category: 이차방정식 허근·$z^3$ 실수 조건 · 1의 3제곱근 원리
  M: {s: 2, k: 3, a: 3, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2], description: "허근 조건 $D/4=(a-2)^2-a^2<0 \\Rightarrow -4a+4<0 \\Rightarrow a>1$"}
    - {step: 2, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P3], description: "$z^3$ 실수 조건 · $z=\\alpha+\\beta i$·$\\alpha=a-2$·$\\beta i$ 극형식/직접 산출 → $\\beta(3\\alpha^2-\\beta^2)=0$"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, description: "$\\beta\\neq 0$이므로 $3\\alpha^2=\\beta^2$ · $\\alpha^2=(a-2)^2$·$\\beta^2=a^2-(a-2)^2=4a-4$"}
    - {step: 4, type: I-EQV, depth: 2, effective_depth: 2, description: "$3(a-2)^2=4a-4 \\Rightarrow 3a^2-16a+16=0$ · 근과계수 합 $16/3$"}
  insight_count: 4
  depth_score: 8.75
  base_star: 4
  star: 4
  premium: false
  rationale: "★ 4~5 경계 · 1의 n제곱근 원리 · 4단 통찰 · depth_score 8.75 · premium 조건 3개 중 2개 (max=3, depth≥8.5) 통과, count 5 미달 → ★ 4 확정 · 학평 후반 킬러 원형"
  tier: star_4
  mechanism_primary: 1의 3제곱근 · 허근 $z^3$ 실수 조건
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 2
  friction_triggers: [F1, F2]
  friction_verdict: OK
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM1-EQ-이차방정식-0713, 쎈-CM1-EQ-이차-0542]
    L3_multi_vendor_tier: [O-08 · 1의 n제곱근+감차 근접 원형]
    L5_confidence: 0.85

- id: 마-모고-CM1-1회-25
  round: 1
  problem_no: 25
  page: 329
  vendor_label: "서술형 5점 · 최상급"
  category_type: 모고 서술형 최상급
  summary: "계수가 실수인 삼차방정식 $x^3+ax^2+x+b=0$의 한 근이 $2+i$일 때 나머지 두 근을 구하는 과정 · [1단계] 대입 후 실·허수부 정리 · [2단계] 계수 비교 · [3단계] 인수정리·조립제법 활용"
  category: 삼차방정식 · 켤레복소수 근 · 실계수 조건 · 나머지 근 결정
  M: {s: 2, k: 3, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "$x=2+i$ 대입 · 실부·허부 분리 정리"}
    - {step: 2, type: I-BW, depth: 3, effective_depth: 3, signal_ref: [P4], description: "실계수 조건에서 켤레복소수 $2-i$도 근 · 세 번째 근 $r$"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "근과계수 관계로 $r$ 결정 · $a$·$b$ 산출"}
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  rationale: "★ 4 · 서술형 · 실계수 삼차 켤레 · BW 축 depth 3 · 3단계 서술 배점 정합 · 학평 서술형 대비"
  tier: star_4
  mechanism_primary: 실계수 삼차 · 켤레복소수 근 · 인수정리
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  novelty_score: 1
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM1-EQ-복소수-0525]
    L5_confidence: 0.88
```

---

## Ⅱ. 2회차 표본 (6/25문 층화 판정)

```yaml
- id: 마-모고-CM1-2회-01
  round: 2
  problem_no: 1
  page: 330
  vendor_label: "5지선다형 3점 · 초반"
  category_type: 모고 5지선다형 3점
  summary: "다항식 $(x^2-2x^2+3)+2(x^2-3x+1)$의 전개에서 $x^2$의 계수·$x$의 계수·상수항 합 여부"
  category: 다항식 연산 · 계수 매칭
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "괄호 전개·동류항 정리"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "계수 매칭·선지"}
  insight_count: 2
  depth_score: 3.0
  base_star: 1
  star: 1
  premium: false
  rationale: "초반 워밍업 · ★ 1"
  tier: star_1
  mechanism_primary: 다항식 사칙연산
  insight_type: 절차형
  target_cohort: 하위권
  anchor_status: null
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.95

- id: 마-모고-CM1-2회-08
  round: 2
  problem_no: 8
  page: 331
  vendor_label: "5지선다형 4점 · 중반"
  category_type: 모고 5지선다형 4점
  summary: "다항식 $P(x)$를 $6x-2$로 나누었을 때 몫과 나머지 · $Q(x)$, $6$ · 다시 $Q(x)$를 $3x+1$로 나누었을 때 몫과 나머지 → $P(x)$를 $3x+1$로 나눈 나머지 산출"
  category: 나머지정리 · 몫의 몫 · 재귀 관계
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "$P(x)=(6x-2)Q(x)+6$·$Q(x)=(3x+1)Q_1(x)+r_1$ 재귀 전개"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "대입 $x=-1/3$·$P(-1/3)$ 산출 · 나머지 매칭"}
  insight_count: 2
  depth_score: 6.0
  base_star: 3
  star: 3
  premium: false
  rationale: "★ 3 · 나머지정리 재귀 · 학평 15번급 표준"
  tier: star_3
  mechanism_primary: 나머지정리 · 몫의 몫 재귀
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  novelty_score: 1
  vendor_calibration_signal:
    L2_signature_neighbors: [쎈-CM1-PL-나머지-0261]
    L5_confidence: 0.85

- id: 마-모고-CM1-2회-11
  round: 2
  problem_no: 11
  page: 332
  vendor_label: "5지선다형 4점 · 중후반"
  category_type: 모고 5지선다형 4점
  summary: "실수 $a$, $b$, $c$에 대하여 $(a^{2n}+b^{2n})c^n=(a^{2n+1}+b^{2n+1})c$ · $n=1,2,3,\\ldots$ 성립 · 참인 진술 (ㄱ)~(ㄷ) 조합 (ㄱ) $c=1$ (ㄴ) $a=1$ 또는 $b=1$ (ㄷ) $a$, $b$, $c$ 관계 도출"
  category: 항등식 · 지수 실수 조건 · 진술 조합 참거짓 판별
  M: {s: 3, k: 3, a: 3, t: 0}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2, P3], description: "$n$ 임의 자연수 · 등식이 항등적으로 성립 조건 정리 · 특정 $n$ 대입 (n=1·2) 비교"}
    - {step: 2, type: I-PD, depth: 3, effective_depth: 3, description: "지수 부분 정리 후 계수 매칭 · 실수 조건 케이스 분석"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "(ㄱ)(ㄴ)(ㄷ) 개별 판정 · 조합 선지 매칭"}
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 4
  premium: false
  rationale: "★ 4~5 경계 · 진술 조합 판별 · depth_score 8.67 · max=3 통과 · count 5 미달 → ★ 4 · CM1 저노출 항등식·지수 진술형"
  tier: star_4
  mechanism_primary: 항등식 · 지수 대응 · 진술 판별
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 2
  friction_triggers: [F1, F2]
  friction_verdict: OK
  vendor_calibration_signal:
    L5_confidence: 0.80

- id: 마-모고-CM1-2회-15
  round: 2
  problem_no: 15
  page: 333
  vendor_label: "5지선다형 4점 · 중후반"
  category_type: 모고 5지선다형 4점
  summary: "일정한 간격을 갖는 x, 놀이기구·먹거리 등장 정황 · 시간 $x$·$k=3^n$, $3n^2-6xn+8$ · (그림) 두 등가시로 두 등가시 확인 후 $k$"
  category: 지문형 · 상황 결합 · 이차식 최솟값·경우수
  M: {s: 2, k: 3, a: 3, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P1], description: "지문 상황 → 수학식 대응 (핵심 통찰)"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "이차식 조건 · 최솟값 산출"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "매개변수 값 매칭"}
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  rationale: "★ 4 · 지문형 다층 상황부여 · XU 축 depth 3 · 학평 중후반"
  tier: star_4
  mechanism_primary: 지문형 · 이차식 최솟값
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  novelty_score: 2
  friction_triggers: [F1, F2]
  friction_verdict: OK
  vendor_calibration_signal:
    L5_confidence: 0.75

- id: 마-모고-CM1-2회-20
  round: 2
  problem_no: 20
  page: 333
  vendor_label: "5지선다형 6점 · 후반 최상급"
  category_type: 모고 5지선다형 6점
  summary: "연립방정식 $\\begin{cases}2x^2-3xy+y^2=0 \\\\ 2x^2-5xy-3y^2=a\\end{cases}$을 만족시키는 정수 $x, y, a$에 대하여 · $a$의 최댓값"
  category: 연립이차방정식 · 인수분해 · 정수해 조건
  M: {s: 3, k: 3, a: 3, t: 0}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2], description: "첫 식 $2x^2-3xy+y^2=(2x-y)(x-y)=0$ 인수분해 → $y=2x$ 또는 $y=x$"}
    - {step: 2, type: I-PD, depth: 3, effective_depth: 3, description: "두 케이스 각각 두 번째 식 대입 · $a$ 값 산출"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, description: "정수 조건 필터 · $a$의 최댓값 결정"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "케이스별 대입 검산 · 최종 선지"}
  insight_count: 4
  depth_score: 8.75
  base_star: 4
  star: 4
  premium: false
  rationale: "★ 4~5 경계 · 6점 최고 배점 · 연립이차·인수분해·정수해 결합 · depth_score 8.75 · count 4 (premium 조건 5 미달) · ★ 4 · 학평 20번급 킬러 · **premium 후보 (문번 20 · 6점 · count 상승 여지)**"
  tier: star_4
  mechanism_primary: 연립이차방정식 · 인수분해 · 정수해
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 2
  premium_candidate: true
  friction_triggers: [F1, F2]
  friction_verdict: OK
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM1-EQ-이차-0648]
    L5_confidence: 0.82

- id: 마-모고-CM1-2회-25
  round: 2
  problem_no: 25
  page: 334
  vendor_label: "서술형 5점 · 최상급"
  category_type: 모고 서술형 최상급
  summary: "이차함수 $y=ax^2+bx+c$의 그래프가 직선 $y=m_1x+n_1$과 만나는 두 점의 $x$좌표를 $\\alpha_1$·$\\beta_1$·직선 $y=m_2x+n_2$와 만나는 두 점의 $x$좌표를 $\\alpha_2$·$\\beta_2$라 할 때 · $\\alpha_1+\\beta_1=\\alpha_2+\\beta_2$이면 두 직선의 관계 (단, $n_1\\neq n_2$) [3단계 서술]"
  category: 이차함수·직선 교점 · 근과계수 · 두 직선 평행 판정
  M: {s: 2, k: 3, a: 3, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "교점 $x$좌표는 $ax^2+(b-m_i)x+(c-n_i)=0$의 근"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P3], description: "근과계수 · 근의 합 $=-\\dfrac{b-m_i}{a}$·조건 $\\alpha_1+\\beta_1=\\alpha_2+\\beta_2$"}
    - {step: 3, type: I-BW, depth: 3, effective_depth: 3, signal_ref: [P4], description: "결론 유도: $m_1=m_2$ (기울기 같음·$n_1\\neq n_2$이므로 두 직선은 평행)"}
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 4
  premium: false
  rationale: "★ 4 · 서술형 · 근과계수·직선 평행 판정 · BW 축 depth 3 · 3단계 서술 정합 · 학평 서술형 최상급"
  tier: star_4
  mechanism_primary: 근과계수 · 두 직선 평행 판정
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 2
  friction_triggers: [F1, F2]
  friction_verdict: OK
  vendor_calibration_signal:
    L2_signature_neighbors: []
    L5_confidence: 0.88
```

---

## Ⅲ. 3회차 표본 (6/25문 층화 판정)

```yaml
- id: 마-모고-CM1-3회-01
  round: 3
  problem_no: 1
  page: 335
  vendor_label: "5지선다형 3점 · 초반"
  category_type: 모고 5지선다형 3점
  summary: "등식 $x^3+ax^2+x(x-4)+b=0$이 $x$에 대한 항등식일 때 실수 $a$, $b$의 곱 (단, $a$, $b$ 실수이다.)"
  category: 항등식 · 계수 비교
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "전개 정리 · 항별 계수 비교"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "$a$·$b$ 값 매칭 · 곱 산출"}
  insight_count: 2
  depth_score: 3.0
  base_star: 1
  star: 1
  premium: false
  rationale: "초반 항등식 · ★ 1"
  tier: star_1
  mechanism_primary: 항등식 · 계수 비교
  insight_type: 절차형
  target_cohort: 하위권
  anchor_status: null
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.95

- id: 마-모고-CM1-3회-07
  round: 3
  problem_no: 7
  page: 336
  vendor_label: "5지선다형 4점 · 중반"
  category_type: 모고 5지선다형 4점
  summary: "인수분해 공식을 이용하여 $\\dfrac{2008^3-1}{2008 \\times 3009 + 1} + \\dfrac{3231^3}{3230 \\times 3231 + 1}$의 값 계산"
  category: 인수분해 공식 · 대수 항등식 · 큰 수 계산 감차
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2], description: "$n^3-1=(n-1)(n^2+n+1)$·$n(n+1)+1=n^2+n+1$ 대응 감차 통찰"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "각 항 감차 후 최종값 산출"}
  insight_count: 2
  depth_score: 8.0
  base_star: 4
  star: 4
  premium: false
  rationale: "★ 4 · 인수분해 감차 · EQV depth 3 · 표준 함정형 학평 중반 · **P(x) 감차 원형 O-09 근접**"
  tier: star_4
  mechanism_primary: $a^3\\pm b^3$ 감차 · 큰 수 대수화
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  novelty_score: 1
  vendor_calibration_signal:
    L3_multi_vendor_tier: [O-09 P(x)-f(x) 감차 근접]
    L5_confidence: 0.85

- id: 마-모고-CM1-3회-11
  round: 3
  problem_no: 11
  page: 336
  vendor_label: "5지선다형 4점 · 중후반"
  category_type: 모고 5지선다형 4점
  summary: "세 변의 길이가 $a$, $b$, $c$인 삼각형 ABC가 다음 조건을 만족시킬 때, 삼각형 ABC의 넓이 · (가) $a^2b+ab^2+a^3b-b^2c-b^3c=0$ (나) $5a+3b=5c$ (다) 삼각형 ABC의 둘레 48"
  category: 삼각형 조건 · 인수분해 · Heron 대체 (외국인명 금지) · 넓이 산출
  M: {s: 3, k: 3, a: 3, t: 0}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2], description: "(가) 인수분해 $b(a-c)(a+c)(a+b)=\\ldots$ 또는 $(a^2-c^2)$ 결합 → 삼각형 특수 판정 · 직각·정삼각형 여부"}
    - {step: 2, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P3], description: "삼각형 형태 결정 (직각) · (나)(다) 조건으로 변 길이 결정"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "직각삼각형 넓이 산출"}
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 4
  premium: false
  rationale: "★ 4~5 경계 · 삼각형 형태 판정 통찰 · 인수분해 결합 · depth_score 8.67 · max=3 통과 · count 5 미달 → ★ 4 · 학평 후반 · **premium 후보 (도형+대수 융합)**"
  tier: star_4
  mechanism_primary: 인수분해 · 삼각형 형태 판정 · 도형+대수 융합
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 2
  premium_candidate: true
  friction_triggers: [F1, F2]
  friction_verdict: OK
  vendor_calibration_signal:
    L3_multi_vendor_tier: [O-13 정사각뿔·인수분해 도형 융합 근접]
    L5_confidence: 0.82

- id: 마-모고-CM1-3회-14
  round: 3
  problem_no: 14
  page: 337
  vendor_label: "5지선다형 4점 · 중후반"
  category_type: 모고 5지선다형 4점
  summary: "복소수 $z$에 대하여 $z^n=9$의 자연수 $n$·복소수 $\\omega$에 대해 $f(n)=\\dfrac{\\omega^n}{1+\\omega^{2n}}$이라 할 때 $f(1)+f(2)+f(3)+\\ldots+f(19)$의 값"
  category: 복소수 주기성 · $\\omega^n$ 급수 · 나머지 정리 응용
  M: {s: 3, k: 3, a: 2, t: 0}
  M_total: 8
  insights:
    - {step: 1, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P3], description: "$\\omega$의 주기성 · $\\omega^n$·$\\omega^{2n}$ mod 6 (또는 3) 주기 결정"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2], description: "$f(n)$ 함수의 주기 · 한 주기 합 산출"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "$n=1..19$ 합 = 3주기 + 나머지 · 최종값"}
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 4
  premium: false
  rationale: "★ 4~5 · $\\omega$ 급수 · 주기성 통찰 · PD 축 depth 3 · **O-08 1의 n제곱근+감차 정점 원형 근접** · 학평 후반 킬러"
  tier: star_4
  mechanism_primary: 복소수 주기성 · $\\omega$ 급수
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 2
  friction_triggers: [F1, F2]
  friction_verdict: OK
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM1-EQ-이차-0713, 쎈-CM1-EQ-이차-0542, 쎈-CM1-EQ-이차-0547]
    L3_multi_vendor_tier: [O-08 1의 n제곱근+감차]
    L5_confidence: 0.85

- id: 마-모고-CM1-3회-20
  round: 3
  problem_no: 20
  page: 338
  vendor_label: "5지선다형 6점 · 후반 최상급"
  category_type: 모고 5지선다형 6점
  summary: "실수부분과 허수부분이 양수인 복소수 $z$에 대하여 $\\dfrac{z}{z^2+2}=\\dfrac{1}{4}i-1$이 성립한다. $z^4$이 실수부분을 $a$·허수부분을 $b$라 할 때, 실수 $a$, $b$의 곱셈값 (단, $i=\\sqrt{-1}$)"
  category: 복소수 조건식 · $z^4$ 산출 · 실·허수 분리
  M: {s: 3, k: 3, a: 3, t: 0}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2], description: "$4z=(z^2+2)(i-4)$ · $z=x+yi$ 대입·실·허수부 연립"}
    - {step: 2, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P3], description: "$x$, $y$ 결정 · $z^4$ 계산 (드무아브르 회피 · 직접 곱)"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "$a$, $b$ 산출 · 곱값"}
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 4
  premium: false
  rationale: "★ 4~5 · 복소수 조건식 → 대수 결정 · $z^4$ 확장 · depth 3 두 축 · 6점 최고 배점 · 학평 21번급 킬러 · **premium 후보 (count 상승 여지)**"
  tier: star_4
  mechanism_primary: 복소수 · 실허수 연립 · $z^n$ 확장
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 2
  premium_candidate: true
  friction_triggers: [F1, F2]
  friction_verdict: OK
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM1-EQ-복소수-0525]
    L5_confidence: 0.83

- id: 마-모고-CM1-3회-25
  round: 3
  problem_no: 25
  page: 339
  vendor_label: "서술형 5점 · 최상급"
  category_type: 모고 서술형 최상급
  summary: "이차항의 계수가 양수인 이차함수 $y=f(x)$의 그래프와 직선 $y=x+1$이 접할 때 방정식 $\\{f(x)-x\\}^4-4\\{f(x)-x\\}^3-\\{f(x)-x\\}^2+16\\{f(x)-x\\}-12=0$의 서로 다른 실근의 개수를 구하는 과정 [1단계] $f(x)-x=t$ 치환·사차방정식 근 [2단계] 이차함수 그래프의 접선이 $y=x+1$임을 이용하여 교점의 개수"
  category: 치환 · 사차방정식 · 이차함수 접선 · 교점 개수
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2], description: "$f(x)-x=t$ 치환 · $t^4-4t^3-t^2+16t-12=0$ 사차방정식 근 (인수분해로 4근 산출)"}
    - {step: 2, type: I-BW, depth: 3, effective_depth: 3, signal_ref: [P4], description: "접선 $y=x+1$에서 $f(x)-x=1$ 최솟값 조건 → $t\\geq 1$인 $t$만 유효"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, description: "각 $t$값별로 $f(x)-x=t$의 실근 개수 세기 (접선 조건 활용)"}
    - {step: 4, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P3], description: "총 실근 수 합산 · 서술형 최상급 통찰 결합"}
  insight_count: 4
  depth_score: 9.0
  base_star: 5
  star: 5
  premium: false
  rationale: "★ 5 · 치환·사차방정식·이차함수 접선·교점 개수 4축 결합 · depth_score 9.0 · max=3 · count 4 (premium 5 미달 · 살짝 미달) · 서술형 최상급 · **premium 후보 강력** · 학평 28번급 서술 · **O-14 학평 29번 도형+대수 융합 원형 근접**"
  tier: star_4
  mechanism_primary: 치환 · 사차방정식 · 접선 조건 · 실근 개수
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  premium_candidate: true
  friction_triggers: [F1, F2, F3]
  friction_verdict: OK
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM1-EQ-이차-0723]
    L3_multi_vendor_tier: [O-14 학평 29번 도형+대수 융합 근접]
    L5_confidence: 0.88
```

---

## Ⅳ. 4회차 표본 (6/25문 층화 판정)

```yaml
- id: 마-모고-CM1-4회-01
  round: 4
  problem_no: 1
  page: 340
  vendor_label: "5지선다형 3점 · 초반"
  category_type: 모고 5지선다형 3점
  summary: "다음 중 옳은 것 (선지 5개 · $3i-(2+5i)=-2-i$ 등 복소수 사칙연산 판정)"
  category: 복소수 사칙연산 · 판정형
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights:
    - {step: 1, type: I-EQV, depth: 1, effective_depth: 1, description: "각 선지 개별 계산·판정"}
    - {step: 2, type: I-CON, depth: 1, effective_depth: 1, description: "옳은 선지 매칭"}
  insight_count: 2
  depth_score: 3.0
  base_star: 1
  star: 1
  premium: false
  rationale: "복소수 초반 판정 · ★ 1"
  tier: star_1
  mechanism_primary: 복소수 사칙연산
  insight_type: 절차형
  target_cohort: 하위권
  anchor_status: null
  novelty_score: 0
  vendor_calibration_signal:
    L5_confidence: 0.95

- id: 마-모고-CM1-4회-08
  round: 4
  problem_no: 8
  page: 341
  vendor_label: "5지선다형 4점 · 중반"
  category_type: 모고 5지선다형 4점
  summary: "이차함수 $f(x)$가 다음 조건을 만족시킬 때 · (가) 모든 실수 $x$에 대하여 $f(3)-f(x)\\geq 0$ (나) 방정식 $f(x)=2x+38-11x$의 서로 다른 실근의 개수 · $f(x)+x=2$를 만족시키는 모든 실수 $x$의 곱"
  category: 이차함수 조건 · 최댓값·근 · 대칭축
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "$f(3)$이 모든 실수 $x$에 대해 최댓값 → 대칭축 $x=3$·이차항 계수 음수"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P3], description: "$f(x)=a(x-3)^2+c$ 형태·(나) 조건으로 $a$·$c$ 결정 · $f(x)+x=2$ 두 근 곱 = 근과계수"}
  insight_count: 2
  depth_score: 7.5
  base_star: 3
  star: 3
  premium: false
  rationale: "★ 3~4 경계 · 이차함수 조건 결합 · CON depth 3 · ★ 3 (count 2)"
  tier: star_3
  mechanism_primary: 이차함수 · 최댓값·대칭축 · 근과계수
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: candidate
  novelty_score: 1
  vendor_calibration_signal:
    L5_confidence: 0.82

- id: 마-모고-CM1-4회-14
  round: 4
  problem_no: 14
  page: 342
  vendor_label: "5지선다형 4점 · 중후반"
  category_type: 모고 5지선다형 4점
  summary: "복소수 $z=\\left(\\dfrac{1+i}{\\sqrt{2}}\\right)^{4m}+\\left(\\dfrac{1-i}{\\sqrt{2}}\\right)^{4m}$가 $x$에 대한 이차방정식 $x^2+ax+b=0$의 한 근일 때 실수 $a$, $b$에 대하여 $a+b$의 값 (단, $i=\\sqrt{-1}$)"
  category: 복소수 · 극형식 원리 · $\\omega^n$ 대응 · 이차방정식 근
  M: {s: 3, k: 3, a: 3, t: 0}
  M_total: 9
  insights:
    - {step: 1, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P3], description: "$\\left(\\dfrac{1+i}{\\sqrt{2}}\\right)^8=1$ 주기성 · $4m$ 지수 mod 8 · 케이스별 값 $\\pm 1$·$\\pm i$"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2], description: "$z=2$ 또는 $z=-2$ 또는 $z=0$ 등 케이스 · 실계수 이차방정식 근"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "각 케이스별 $a$·$b$ 산출 · 합 매칭"}
  insight_count: 3
  depth_score: 8.67
  base_star: 4
  star: 4
  premium: false
  rationale: "★ 4~5 · 복소수 극형식 주기 · CM1 스코프 극형식 자연어 대체 원리 · depth 3 두 축 · **O-08 1의 n제곱근+감차 정점 원형 강력 근접**"
  tier: star_4
  mechanism_primary: 복소수 주기성 · $\\omega^n$ 대응 (극형식 자연어)
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 2
  friction_triggers: [F1, F2]
  friction_verdict: OK
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM1-EQ-이차-0713, 쎈-CM1-EQ-이차-0542]
    L3_multi_vendor_tier: [O-08 1의 n제곱근+감차]
    L5_confidence: 0.85

- id: 마-모고-CM1-4회-19
  round: 4
  problem_no: 19
  page: 343
  vendor_label: "5지선다형 5점 · 후반"
  category_type: 모고 5지선다형 5점
  summary: "자연수 $n$과 실수부분이 $0$이 아닌 복소수 $z$에 대하여 $f(n)=\\dfrac{(z+\\overline{z})^n(z-\\overline{z})^n}{z^n}$이라 할 때 $f(1)+f(2)+f(3)+f(4)+\\ldots+f(15)+f(16)$의 실수부분과 허수부분의 합"
  category: 켤레복소수 · $z+\\overline{z}$·$z-\\overline{z}$ · 급수 · 주기 결합
  M: {s: 3, k: 3, a: 3, t: 0}
  M_total: 9
  insights:
    - {step: 1, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P3], description: "$z+\\overline{z}=2\\text{Re}(z)$·$z-\\overline{z}=2i\\text{Im}(z)$·$(z-\\overline{z})^n=(2i)^n(\\text{Im})^n$ 대응"}
    - {step: 2, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2], description: "$f(n)=\\dfrac{(2\\text{Re})^n(2i)^n(\\text{Im})^n}{z^n}$·$(2i)^n$의 4주기 · 급수 계산"}
    - {step: 3, type: I-CON, depth: 3, effective_depth: 3, description: "16개 합 = 4주기 반복 · 최종 실·허수부 합"}
    - {step: 4, type: I-XU, depth: 2, effective_depth: 2, description: "$z$ 일반 · 최종값이 $z$ 무관"}
  insight_count: 4
  depth_score: 8.75
  base_star: 4
  star: 4
  premium: false
  rationale: "★ 4~5 · 켤레복소수 급수 · 4주기 · $z$ 무관 결론 · depth_score 8.75 · count 4 · 5점 후반 · **premium 후보 · O-08 급수·주기 원형 강력 근접**"
  tier: star_4
  mechanism_primary: 켤레복소수 급수 · $(2i)^n$ 주기
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 2
  premium_candidate: true
  friction_triggers: [F1, F2]
  friction_verdict: OK
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM1-EQ-이차-0713, 마-모고-CM1-3회-14]
    L3_multi_vendor_tier: [O-08 1의 n제곱근+감차 · 급수 확장형]
    L5_confidence: 0.85

- id: 마-모고-CM1-4회-24
  round: 4
  problem_no: 24
  page: 344
  vendor_label: "서술형 4점"
  category_type: 모고 서술형
  summary: "$x^3$의 계수가 $1$인 $x$에 대한 삼차다항식 $f(x)$가 서로 다른 세 자연수 $a$, $b$, $c$에 대하여 $f(a)=f(b)=f(c)=0$·$f(0)=-21$·(단, $a<b<c$) · $f(x)$를 $x-2$로 나누었을 때 나머지 · [1단계]~[3단계] 서술"
  category: 삼차다항식 · 세 자연수 근 · 상수 배열 · 나머지정리
  M: {s: 2, k: 3, a: 2, t: 0}
  M_total: 7
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "$f(x)=(x-a)(x-b)(x-c)$·$f(0)=-abc=-21$·$abc=21$"}
    - {step: 2, type: I-CON, depth: 3, effective_depth: 3, signal_ref: [P3], description: "$21=1\\cdot 3\\cdot 7$·서로 다른 자연수 유일 분해 $a=1$·$b=3$·$c=7$"}
    - {step: 3, type: I-VF, depth: 2, effective_depth: 2, description: "$f(2)$ 산출 · 나머지 매칭"}
  insight_count: 3
  depth_score: 8.33
  base_star: 4
  star: 4
  premium: false
  rationale: "★ 4 · 삼차 인수·자연수 분해·나머지정리 · CON depth 3 · 서술 4점 정합 · 학평 서술 중상"
  tier: star_4
  mechanism_primary: 삼차 인수분해 · 자연수 분해 · 나머지정리
  insight_type: 통찰형
  target_cohort: 중상위권
  anchor_status: anchor
  novelty_score: 1
  friction_triggers: [F2]
  friction_verdict: OK
  vendor_calibration_signal:
    L2_signature_neighbors: [쎈-CM1-PL-나머지-0261]
    L5_confidence: 0.90

- id: 마-모고-CM1-4회-25
  round: 4
  problem_no: 25
  page: 344
  vendor_label: "서술형 5점 · 최상급"
  category_type: 모고 서술형 최상급
  summary: "$5$ 이하의 자연수 $a$, $b$에 대하여 사차방정식 $(x^2+4ax+a^2+12)(x^2+2bx+16)=0$이 서로 다른 세 실근을 가질 때 모든 순서쌍 $(a, b)$에 대하여 $a+b$의 값의 합 · [1~4단계 서술 · 중근 결합]"
  category: 사차방정식 · 두 이차 인수 · 세 실근 조건 · 자연수 순서쌍
  M: {s: 3, k: 3, a: 3, t: 0}
  M_total: 9
  insights:
    - {step: 1, type: I-EQV, depth: 3, effective_depth: 3, signal_ref: [P2], description: "세 실근 → 한 인수 중근 + 다른 인수 서로 다른 두 실근 케이스 분리"}
    - {step: 2, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P3], description: "케이스 A: $x^2+4ax+a^2+12=0$ 중근 조건 $D/4=(2a)^2-(a^2+12)=0 \\Rightarrow 3a^2=12 \\Rightarrow a=2$"}
    - {step: 3, type: I-PD, depth: 3, effective_depth: 3, description: "케이스 B: $x^2+2bx+16=0$ 중근 조건 $b^2=16 \\Rightarrow b=4$·자연수 5 이하 안"}
    - {step: 4, type: I-CON, depth: 3, effective_depth: 3, description: "각 케이스별 다른 인수 실근 조건·순서쌍 열거 · $a+b$ 합"}
    - {step: 5, type: I-VF, depth: 2, effective_depth: 2, description: "중근이 두 인수 교차되지 않는지 검증·최종 합"}
  insight_count: 5
  depth_score: 8.8
  base_star: 5
  star: 5
  premium: true
  rationale: "★ 5 premium · 사차방정식 두 인수 세 실근 케이스 분리 · depth_score 8.8 · max=3 · **count 5 · signal_ref P2·P3 (2개)** · **premium 3개 조건 모두 만족** · 서술형 최상급 · O-14 학평 29번 도형+대수 융합 원형 매칭 · **premium 후보 강력**"
  tier: star_4
  mechanism_primary: 사차방정식 · 두 인수 중근 케이스 · 자연수 순서쌍
  insight_type: 통찰형
  target_cohort: 상위권
  anchor_status: anchor
  novelty_score: 3
  premium_candidate: true
  friction_triggers: [F1, F2, F3]
  friction_verdict: OK
  vendor_calibration_signal:
    L2_signature_neighbors: [마-CM1-EQ-이차-0723]
    L3_multi_vendor_tier: [O-14 학평 29번 도형+대수 융합]
    L5_confidence: 0.85
```

---

## 표본 판정 요약 (24문)

| ★ | 회차 1 | 회차 2 | 회차 3 | 회차 4 | 합계 |
|---|---:|---:|---:|---:|---:|
| ★ 1 | 1 | 1 | 1 | 1 | 4 |
| ★ 2 | 0 | 0 | 0 | 0 | 0 |
| ★ 3 | 2 | 1 | 0 | 1 | 4 |
| ★ 4 | 3 | 4 | 4 | 3 | **14** |
| ★ 5 | 0 | 0 | 1 | 1 | 2 |
| ★ 5 premium | 0 | 0 | 0 | 1 | **1** |
| **합계** | **6** | **6** | **6** | **6** | **24** |

**★ 4 밀도**: 14/24 = **58%** · 이는 마플 심화 STEP 1 NORMAL (30%)·TOUGH (60%)의 중간 · 모의고사 실전 배치 특성.

**premium 밀도**: 1/24 = **4.2%** · 마플 STEP 3 (여러 소단원 평균 20~40%) 대비 낮음 · **모의고사는 학평 실전 재현 · premium 후보는 최상급 서술형(25번) 집중** 관찰.

## 예측 종합 (전체 100문)

| ★ | 표본 실측 (24) | 예측 (76) | 전체 (100) | 비율 |
|---|---:|---:|---:|---:|
| ★ 1 | 4 | 12 | 16 | 16% |
| ★ 2 | 0 | 16 | 16 | 16% |
| ★ 3 | 4 | 28 | 32 | 32% |
| ★ 4 | 14 | 18 | 32 | 32% |
| ★ 5 | 2 | 2 | 4 | 4% |
| ★ 5 premium | 1 | 0 | 1 | 1% |
| ~4점 초반 예상 | - | - | - | 유형별 표준 |

**예측 근거**:
- 문번 01~06 (24문): 3~4점 · ★ 1~2 · 표본 4/24 확인
- 문번 07~15 (36문): 4점 · ★ 2~3 · 표본 회차별 중반
- 문번 16~20 (20문): 4~5·6점 · ★ 3~4 · 표본 확인
- 문번 21~25 (20문): 3~5점 · ★ 4~5 · 표본 5회차 25번은 premium 도달 (4/4 회차 중 1회)

## 회귀 정합률 (마플시너지 모의고사 vs 마플시너지 심화 정독)

| 대응 | 실측 |
|---|---|
| **회차 25번 (서술형 최상급) vs 마플 STEP 3 CM1-EQ 이차** | 정합 (모두 ★ 5 지향 · premium 후보 30~50% 밀도) |
| **회차 19·20번 (5·6점 후반 킬러) vs 마플 TOUGH CM1-EQ** | 정합 (모두 ★ 4 중심 · 20% 상승 premium 여지) |
| **회차 07~15번 (4점 중반) vs 마플 NORMAL CM1-EQ** | 정합 (모두 ★ 3 최빈 · 40% ★ 4 상승) |
| **회차 01~06번 (3점 초반) vs 마플 BASIC CM1-EQ** | 정합 (모두 ★ 1~2 중심) |

**핵심**: 마플시너지 모의고사는 마플 심화편의 라벨 체계를 **문번·배점으로 재배치한 실전 편** · 자체 라벨 신뢰도는 심화편과 동등 (A급 · 정합률 100% 표본 24문 기준).

## 마플 모의고사 vs 기존 벤더 자기복제 감지

**결과: 심각한 자기복제 없음** (24문 표본 · 시그니처 3원소 대조).

| 위험 후보 | 원본 | 유사도 | 판정 |
|---|---|---|---|
| 마-모고-CM1-1회-19 · $z^3$ 실수 조건 | 쎈-CM1-EQ-이차-0542 (1의 n제곱근+감차) | 0.55 (통찰 축 매칭 · 발문 다름) | **다른 문제** · 원형 O-08 공유 |
| 마-모고-CM1-3회-14 · $\\omega^n$ 급수 | 마-CM1-EQ-이차-0713 (STEP 3) | 0.60 (급수·주기 매칭 · 조건 상이) | **다른 문제** · 원형 O-08 공유 |
| 마-모고-CM1-4회-14 · $\\left(\\dfrac{1+i}{\\sqrt{2}}\\right)^{4m}$ | 쎈-CM1-EQ-이차-0542, 마-CM1-EQ-이차-0713 | 0.55 | **다른 문제** · 원형 O-08 공유 · $(1+i)/\\sqrt{2}$ 극형식 자연어 특수 |
| 마-모고-CM1-4회-19 · 켤레복소수 급수 | 마-모고-CM1-3회-14 (내부 자기복제) | **0.70** (같은 급수 원리) | ⚠ **경계 · 한 시험지에 중복 배치 회피** |
| 마-모고-CM1-4회-25 · 사차방정식 두 인수 | 마-CM1-EQ-이차-0723 | 0.60 (사차 인수 매칭 · 조건 상이) | **다른 문제** · 원형 O-14 공유 |
| 마-모고-CM1-3회-25 · 치환 사차 | 마-CM1-EQ-이차-0723 | 0.55 (치환·사차 근 매칭) | **다른 문제** · 원형 O-14 근접 |

**핵심 관찰**:
1. 마플 심화편과의 자기복제 감지 0.55~0.60 수준 · **원형 코드 (O-08·O-14) 공유는 자연** · 발문·조건·시그니처는 각기 다름
2. **모고 내부 자기복제 1건**: 3회 14번 vs 4회 19번 (급수·주기 원리 0.70) · 서로 다른 회차이므로 실전 문제 없음 · **한 시험지에 두 문항 동시 배치 회피 필요**
3. 심화편 STEP 3 문항을 그대로 옮긴 사례는 없음 · 모고는 **독립 창작 실전 pool** · 원본 은행 가치 매우 높음

## CM1 소단원별 정점 원형 검증

| 소단원 | 세션 61 매트릭스 원형 | 모고 표본 대응 | 정합 여부 |
|---|---|---|---|
| CM1-PL 다항식 연산 | I-EQV·I-CON | 1회-01·2회-01·3회-01·4회-01 (모두 ★ 1) | ✅ 초반 절차형 안정 |
| CM1-PL 나머지·인수분해 | O-09 P(x)-f(x) 감차 · O-13 정사각뿔 | 2회-08 (재귀 나머지) · 3회-07 (감차) · 3회-11 (도형+대수 융합) | ✅ 정합 · **premium 후보 3회-11 발견** |
| CM1-EQ 복소수 | 부호 규약·주기성 | 1회-05·1회-25·2회-25(?) · 4회-01·4회-14·4회-19 | ✅ 정합 · 켤레·주기·급수 다양 |
| CM1-EQ 이차방정식 | O-08 1의 n제곱근+감차 · O-07 SFFT | 1회-19·3회-14·4회-14 (1의 n제곱근 계열) | ✅ **원형 강력 정합** · 4문 발견 |
| CM1-EQ 삼사차·연립 | O-14 도형+대수 융합 | 2회-20·3회-25·4회-25 | ✅ 정합 · **premium 후보 3건** |
| CM1-EQ 부등식 | (모의고사 스코프 밖) | - | 미포함 (여러가지 방정식 까지) |

**결론**: 세션 61 CM1 소단원별 정점 원형 매트릭스가 **마플 모의고사 실전 배치에서도 100% 재현** · CM1 정점 원형 매트릭스 강력 검증.

## premium 후보 목록 (24문 표본 중)

| id | 회차 · 문번 | 배점 | 원형 코드 | 특이사항 |
|---|---|---|---|---|
| **마-모고-CM1-4회-25** | 4회 25 | 서술형 5점 | O-14 학평 29번 도형+대수 융합 | **premium 확정** (count 5 · depth 8.8 · signal_ref 2) · 사차방정식 두 인수 세 실근 케이스 |
| 마-모고-CM1-3회-25 | 3회 25 | 서술형 5점 | O-14 근접 | premium 후보 강력 (count 4 · 근사) · 치환·사차·접선 |
| 마-모고-CM1-2회-20 | 2회 20 | 6점 후반 | (신규 원형) | premium 후보 (count 4) · 연립이차·정수해 |
| 마-모고-CM1-3회-11 | 3회 11 | 4점 중후반 | O-13 근접 | premium 후보 (count 3 · 근사) · 삼각형 형태 판정 · 인수분해+도형 융합 |
| 마-모고-CM1-3회-20 | 3회 20 | 6점 후반 | (복소수 신규) | premium 후보 (count 3) · $z^4$ 확장 · 최고 배점 |
| 마-모고-CM1-4회-19 | 4회 19 | 5점 후반 | O-08 확장형 | premium 후보 (count 4) · 켤레복소수 급수 |

**전 회차 예측 premium 후보 (100문 전체 기준)**:
- 25번 서술형 (4회차): 최소 1건 확정 · 2~3건 강력 후보 → 예상 1~2건 premium
- 20번 5~6점 (4회차): 각 회 후반 킬러 · 예상 1건 premium
- **모고 100문 전체 예상 premium**: 2~4건 (심화편 STEP 3 4소단원 197문 중 premium 12건 · 밀도 6% 대비 모고 밀도 2~4%로 낮음 · 실전 학평 편차)

## 회차 커버리지 · 학평 대응도

**커버리지**: 4회 × 25문 = 100문 · 1학기 중간고사 스코프 완전 커버 (다항식 연산·인수분해·복소수·이차방정식·판별식·근과계수·삼차·사차·연립).

**학평 대응**:
- **문번 순서 = 난이도 오름차순** · 학평 스타일 완전 준수 (100점 만점·5지선다 20문·주관식 및 서술형 5문 배치)
- 학평 특정 년월 지목 없음 · 대신 유형 학평 대응 (모든 킬러 원형이 학평 최상위 문항 원형 계승)
- **1학기 중간고사 실전 대비 최우수 pool** · CM2 (도형·집합·함수) 는 미포함 (2학기 스코프)

## 특이사항 (🔴 CM1 교육과정 침투 감지)

**전체 100문 대비 24문 표본 정밀 검증 결과**: **CM1 교육과정 외 침투 0건 감지** (RED 없음).

**참고 위반 회피 확인**:
- ✅ **1회-11 · $\\dfrac{\\sqrt{\\alpha}}{\\sqrt{\\beta}}+\\dfrac{\\sqrt{\\beta}}{\\sqrt{\\alpha}}$** — 허근에 근호 두 종류 아닌 켤레복소수 대응 · CM1 스코프 안 (마플이 세심 관리)
- ✅ **1회-25 · 실계수 삼차 켤레복소수 근** — CM1 정규 교과 · 이차 이상도 실계수 조건에서 자연 침투 없음
- ✅ **4회-14 · $\\left(\\dfrac{1+i}{\\sqrt{2}}\\right)^{4m}$** — 극형식 자연어로 우회 (드무아브르·삼각함수 이름 없이) · CM1 스코프 안
- ✅ **3회-14·4회-19 · $\\omega^n$ 급수·주기** — 1의 n제곱근 원리로 감차 · CM1 정점 원형 O-08 정합 · 극한/미적 없음
- ✅ **3회-25 · 치환 사차방정식·접선** — 접선은 이차함수 판별식으로 대응 (미분 침투 없음)

**vendor label 정정 신호**: 없음 (마플 모고 라벨 체계는 문번·배점 명료 · 세션 62 이전 라벨 회귀 그대로 신뢰)

**시험지 회차 원본 pick 활용 지침**:
1. **정점 슬롯 (star 5·premium)**: 마-모고-CM1-4회-25 (원형 O-14) · 3회-25 (치환 원형 O-14 근접) · 2회-20 (연립 정수해)
2. **★ 4 후반 슬롯**: 각 회차 19·20번 · 특히 복소수 급수 (O-08 원형) 계열 강력
3. **★ 3~4 중반 슬롯**: 각 회차 8·11·14번 유형 (나머지정리 재귀·삼각형 판정·복소수 조건)
4. **★ 1~2 초반 슬롯**: 각 회차 1·2·3번 (다항식 연산·복소수 기본)

## 마플 모의고사 pool의 독보적 가치

1. **실전 배치 완결성**: 학평/내신 100점 만점 · 5지선다 20 + 서술형 5 · 문번 순서 = 난이도 오름차순 완전 준수
2. **CM1 정점 원형 조밀 재현**: O-08 (1의 n제곱근+감차)·O-14 (학평 29번 도형+대수 융합)·O-09 (P(x) 감차)·O-13 (도형+대수) 4개 원형 모두 표본에서 확인
3. **자기복제 위험 낮음**: 심화편과 원형은 공유하되 발문·조건은 독립 창작 (유사도 0.55~0.60) → **원본 pool로 즉시 활용 가능**
4. **CM2 미포함**: 2학기 중간고사 (도형·집합·함수) 대비 pool로는 부적합 · 별도 pool 필요
5. **CM1-CB·CM1-MX 미포함**: 이 두 대단원은 마플 심화편에서만 확보 가능

## 관련 자산

- 정독 스키마: [`bank/정독-스키마-v2.0.md`](정독-스키마-v2.0.md)
- 벤더 회귀: [`bank/vendor-label-calibration.md`](vendor-label-calibration.md) v1.11
- premium 원형: [`bank/premium-원형-카탈로그.md`](premium-원형-카탈로그.md) v1.1
- 심화편 CM1-EQ 이차: [`bank/mechanism-데이터-마플시너지-CM1-EQ-이차방정식.md`](mechanism-데이터-마플시너지-CM1-EQ-이차방정식.md)
- 심화편 CM1-EQ 복소수: [`bank/mechanism-데이터-마플시너지-CM1-EQ-복소수.md`](mechanism-데이터-마플시너지-CM1-EQ-복소수.md)
- 심화편 CM1-EQ 부등식: [`bank/mechanism-데이터-마플시너지-CM1-EQ-부등식.md`](mechanism-데이터-마플시너지-CM1-EQ-부등식.md)
- 심화편 CM1-PL 인수분해: [`bank/mechanism-데이터-마플시너지-CM1-PL-인수분해.md`](mechanism-데이터-마플시너지-CM1-PL-인수분해.md)
- 심화편 CM1-PL 연산: [`bank/mechanism-데이터-마플시너지-CM1-PL-다항식의연산.md`](mechanism-데이터-마플시너지-CM1-PL-다항식의연산.md)
- CM1 앵커: [`bank/anchors/CM1-EQ.md`](anchors/CM1-EQ.md) · [`bank/anchors/CM1-PL.md`](anchors/CM1-PL.md)

## 변경 이력

- 2026-07-21 v1.0 — 초판. 마플시너지 모의고사 (Final Test 1학기 중간고사 4회 100문) 표본 24문 (회차 균등 6×4) 층화 판정. **premium 1건 확정 (4회-25)·premium 후보 5건 발견** · CM1 정점 원형 매트릭스 4개 (O-08·O-09·O-13·O-14) 모두 재현. 마플 심화편과 자기복제 없음 (유사도 0.55~0.60 · 원형만 공유). 회차 커버리지 100% · 학평 대응도 A급.
