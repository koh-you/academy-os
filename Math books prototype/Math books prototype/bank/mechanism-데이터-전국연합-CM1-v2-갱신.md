---
name: mechanism-데이터-전국연합-CM1-v2-갱신
description: |
  고1 전국연합학력평가 최신 갱신 (2025 3·6·9·10월 + 2026 3·6월). 회차별 30문 전수 정독 aggregation. v1(마더텅 미니모의 24회 × 8문 = 192문 curated 표본)의 확장 — 각 회차 원본 30문을 그대로 회차 단위로 실측.
  기존 v1 (전국연합-CM1.md · 마더텅 표본) 와 상호보완. 이 v2는 회차 단위 원본. 저작권 준수 (원문 전사 없음 · 시그니처 요약).
metadata:
  type: reference
  version: v2.0-갱신
  established: 2026-07-22 (세션 68 · flywheel asset-ingestion Agent)
  source: |
    참고자료/고1 모의고사 기출 모음/2025/ · 2026/ 하위 PDF.
    실측: 2025년 3·6·9·10월 + 2026년 3·6월 (교육청 주관 학평 원본).
    3월 학평은 프로젝트 규칙에 따라 전년 학년 (고2 3월 = 공수1 = CM1).
  round_ingestion_status:
    "2025-3월-고2":
      status: PENDING_OCR
      reason: |
        PDF 텍스트 추출 결과 한글·수식 심각 corruption (embedded font 특수 인코딩).
        pdftotext -layout 시도 → 한글 문자 대부분 공백으로 소실.
        image-based OCR 또는 원본 HWP 확보 필요.
      pdf: "참고자료/고1 모의고사 기출 모음/2025/2025_3월_고2_문제.pdf"
      해설: "참고자료/고1 모의고사 기출 모음/2025/2025_3월_고2_해설.pdf"
      target_problems: 30
    "2025-6월":
      status: COMPLETE
      source_files: "bank/problems/EX-HG-Y2025M6-*.md (30건)"
      extracted_at: "2026-06-29 (세션 이전)"
      problems: 30
    "2025-9월":
      status: COMPLETE
      source_files: "bank/problems/EX-HG-Y2025M9-*.md (30건)"
      extracted_at: "2026-06-29"
      problems: 30
    "2025-10월":
      status: COMPLETE
      source_files: "bank/problems/EX-HG-Y2025M10-*.md (30건)"
      extracted_at: "2026-06-29"
      problems: 30
    "2026-3월-고2":
      status: PENDING_OCR
      reason: 동일 (pdftotext 한글 corruption)
      pdf: "참고자료/고1 모의고사 기출 모음/2026/2026_3월_고2_문제.pdf"
      해설: "참고자료/고1 모의고사 기출 모음/2026/2026_3월_고2_해설.pdf"
      target_problems: 30
    "2026-6월":
      status: COMPLETE
      source_files: |
        bank/problems/EX-HG-Y2026M6-*.md (30건).
        aggregated 요약: bank/mechanism-데이터-2026-6월-학평-CM1.md (v1.0 · 세션 62).
      extracted_at: "2026-06-30"
      problems: 30
  total_problems: 120  # 완료 4 회차 × 30 (2025-3·2026-3 각 30 PENDING)
  total_rounds_target: 6
  total_rounds_complete: 4
  total_rounds_pending: 2
  unit_code: CM1 (+ CM2-GM 소량 · 2025 10월 8건 · 학년 순수 CM1 스코프이나 CM2 조기 침투 발견)
  citation_note: |
    2025~2026 고1 전국연합학력평가 · 학습 목적 · 저작권 준수.
    원문 전사 없음 · 시그니처·정답·M·I·star 만 aggregation.
    개별 문항 본문은 bank/problems/EX-HG-Y{YYYY}M{M}-*.md 파일 참조.
  judgment_protocol: |
    개별 파일: schema.md v3.8 3층 모델 (M·I·X) + v3.9 저노출 게이트 실측.
    회차별 tier 캘리브레이션: (문번 위치 + 배점) × M·I 실측 hybrid.
  answer_rate_available: false
  answer_rate_source_note: |
    2025 6·9·10월은 EBSi 정답률 확보 시 answer_rate 필드 개별 문항에 추가 가능.
    2026 6월은 시행 직후 · 정답률 미공개.
    현재 tier 판정은 M·I 실측 + 문번 위치 매핑 hybrid.
  curriculum_compliance:
    CM1_교과과정_검증: PASS  # 완료 4 회차 전 문항 CM1 범위 (2025 10월 GM 8건은 CM2 침투 · 원본 학평 편성)
    상위과정_침투: NONE
    ⚠_2025_10월_CM2_침투_주의: |
      2025 10월 학평은 CM1 (PL·EQ·MX·CB) + CM2 (GM 도형의 방정식) 혼재 (10월 시점 진도 반영).
      2026 6월은 CM1 순수 (6월 시점 진도).
      본편 슬롯 편입 시 CM2 문항 (GM) 은 CM2 시리즈 pool 로 분류.
  parent_pilot:
    - session-46 (v1.0 · 마더텅 24회 × 8 = 192)
    - session-62 (2026-6월 별도 파일 · 30문 전수)
    - session-68 (v2.0-갱신 · 회차 aggregation)
---

# 고1 전국연합학력평가 최신 갱신 (v2.0 · 회차 단위 원본)

**전체 구조**:
- 완료: 2025년 6월 · 9월 · 10월 + 2026년 6월 = **4 회차 × 30문 = 120문**
- 미완: 2025년 3월(고2) · 2026년 3월(고2) = 2 회차 × 30문 = 60문 (PDF 한글 인코딩 corruption · OCR 재시도 필요)
- 배점 구조 (전 회차 공통): 2점 (#1~3) · 3점 (#4~14, #22~25) · 4점 (#15~21, #26~30)
- 5지선다 21문 (#1~21) · 단답형 9문 (#22~30)

## I. 회차별 정답표

### 2025년 6월 고1 학평 (총 30문)
| # | id | unit | ★ | prem | 정답 |
|---|---|---|---|---|---|
| 1 | EQ-001 | CM1-EQ | 1 | | ③ $1-3i$ |
| 2 | PL-001 | CM1-PL | 1 | | ⑤ 9 |
| 3 | EQ-002 | CM1-EQ | 1 | | ① 4 |
| 4 | EQ-003 | CM1-EQ | 2 | | ③ 1 |
| 5 | EQ-004 | CM1-EQ | 2 | | ③ 11 |
| 6 | EQ-005 | CM1-EQ | 1 | | ⑤ 14 |
| 7 | PL-002 | CM1-PL | 2 | | ④ 4/3 |
| 8 | EQ-006 | CM1-EQ | 2 | | ③ 10 |
| 9 | EQ-007 | CM1-EQ | 2 | | ② $-1$ |
| 10 | PL-003 | CM1-PL | 4 | | ④ 2027 |
| 11 | EQ-008 | CM1-EQ | 3 | | ② 5 |
| 12 | PL-004 | CM1-PL | 3 | | ① 13 |
| 13 | EQ-009 | CM1-EQ | 3 | | ② 18 |
| 14 | PL-005 | CM1-PL | 4 | | ⑤ 36 |
| 15 | EQ-010 | CM1-EQ | 4 | | ② 12 |
| 16 | EQ-011 | CM1-EQ | 5 | ✗ | ③ 31/2 |
| 17 | PL-006 | CM1-PL | 4 | | ① 48 |
| 18 | EQ-012 | CM1-EQ | 4 | | ② 2 |
| 19 | EQ-013 | CM1-EQ | 5 | **✓** | ④ 72 |
| 20 | EQ-014 | CM1-EQ | 5 | **✓** | (보강 필요) |
| 21 | EQ-015 | CM1-EQ | 5 | ✗ | ① 45 |
| 22 | PL-007 | CM1-PL | 1 | | 17 |
| 23 | EQ-016 | CM1-EQ | 2 | | 3 |
| 24 | PL-008 | CM1-PL | 2 | | 270 |
| 25 | EQ-017 | CM1-EQ | 3 | | 7 |
| 26 | EQ-018 | CM1-EQ | 3 | | 21 |
| 27 | EQ-019 | CM1-EQ | 4 | | 23 |
| 28 | PL-009 | CM1-PL | 5 | ✗ | 8 |
| 29 | EQ-020 | CM1-EQ | 5 | **✓** | 65 |
| 30 | EQ-021 | CM1-EQ | 5 | **✓** | (킬러 · 보강 필요) |

**단원 분포**: CM1-PL 9문 · CM1-EQ 21문 · MX·CB 미출제 (6월 진도)
**premium 감지**: 5건 (19·20·29·30번 EQ + 21번은 ✗ · 회차 킬러 EQ 위주)

### 2025년 9월 고1 학평 (총 30문)
| # | id | unit | ★ | prem | 정답 |
|---|---|---|---|---|---|
| 1 | PL-001 | CM1-PL | 1 | | ③ $3x^2+3xy$ |
| 2 | MX-001 | CM1-MX | 1 | | ⑤ 27 |
| 3 | EQ-001 | CM1-EQ | 1 | | ② $2i$ |
| 4 | PL-002 | CM1-PL | 2 | | ① 10 |
| 5 | EQ-002 | CM1-EQ | 2 | | ⑤ 9 |
| 6 | EQ-003 | CM1-EQ | 3 | | ③ 23 |
| 7 | CB-001 | CM1-CB | 3 | | ④ 7 |
| 8 | MX-002 | CM1-MX | 2 | | ④ 4 |
| 9 | PL-003 | CM1-PL | 3 | | ② $-8$ |
| 10 | EQ-004 | CM1-EQ | 2 | | ② 11 |
| 11 | EQ-005 | CM1-EQ | 4 | | ① 6 |
| 12 | MX-003 | CM1-MX | 4 | | ③ 성분 |
| 13 | MX-004 | CM1-MX | 4 | | ① 9 |
| 14 | EQ-006 | CM1-EQ | 4 | | ③ 11 |
| 15 | PL-004 | CM1-PL | 4 | | ④ $-3$ |
| 16 | EQ-007 | CM1-EQ | 4 | | ② 10 |
| 17 | EQ-008 | CM1-EQ | 4 | | ⑤ 60 |
| 18 | EQ-009 | CM1-EQ | 4 | | ④ 15/4 |
| 19 | EQ-010 | CM1-EQ | 5 | | ① 8 |
| 20 | EQ-011 | CM1-EQ | 5 | **✓** | ③ 17 |
| 21 | CB-002 | CM1-CB | 4 | | ④ 440 |
| 22 | CB-003 | CM1-CB | 1 | | 28 |
| 23 | EQ-012 | CM1-EQ | 1 | | 21 |
| 24 | MX-005 | CM1-MX | 2 | | 3 |
| 25 | PL-005 | CM1-PL | 2 | | 6 |
| 26 | CB-004 | CM1-CB | 4 | | 88 |
| 27 | PL-006 | CM1-PL | 5 | **✓** | 16 |
| 28 | EQ-013 | CM1-EQ | 5 | ✗ | 12 |
| 29 | CB-005 | CM1-CB | 5 | **✓** | 720 |
| 30 | EQ-014 | CM1-EQ | 5 | **✓** | (킬러 · 보강 필요) |

**단원 분포**: CM1-PL 6문 · CM1-EQ 14문 · CM1-MX 5문 · CM1-CB 5문 (9월 진도 · 전 단원 편성)
**premium 감지**: 5건 (20·27·29·30번 + 회차 균형)

### 2025년 10월 고1 학평 (총 30문)
| # | id | unit | ★ | prem | 정답 |
|---|---|---|---|---|---|
| 1 | PL-001 | CM1-PL | 1 | | ④ $x^2-3y$ |
| 2 | GM-001 | **CM2-GM** | 1 | | ② $\sqrt{10}$ |
| 3 | MX-001 | CM1-MX | 1 | | ③ 14 |
| 4 | PL-002 | CM1-PL | 2 | | ① 4 |
| 5 | GM-002 | **CM2-GM** | 2 | | ① 21 |
| 6 | PL-003 | CM1-PL | 2 | | ② $-4$ |
| 7 | MX-002 | CM1-MX | 2 | | ⑤ 16 |
| 8 | EQ-001 | CM1-EQ | 2 | | ③ 5 |
| 9 | PL-004 | CM1-PL | 2 | | ⑤ 2 |
| 10 | CB-001 | CM1-CB | 3 | | ④ 13 |
| 11 | GM-003 | **CM2-GM** | 3 | | ① 8 |
| 12 | EQ-002 | CM1-EQ | 4 | | ④ 5 |
| 13 | EQ-003 | CM1-EQ | 4 | | ③ 8 |
| 14 | GM-004 | **CM2-GM** | 4 | | ④ $4\sqrt{5}$ |
| 15 | MX-003 | CM1-MX | 5 | ✗ | ② 4 |
| 16 | CB-002 | CM1-CB | 5 | **✓** | ⑤ 252 |
| 17 | EQ-004 | CM1-EQ | 4 | | ④ 10 |
| 18 | PL-005 | CM1-PL | 5 | **✓** | ② 6 |
| 19 | PL-006 | CM1-PL | 5 | **✓** | ⑤ 1 |
| 20 | GM-005 | **CM2-GM** | 5 | ✗ | (보강 필요) |
| 21 | GM-006 | **CM2-GM** | 5 | **✓** | (보강 필요) |
| 22 | GM-007 | **CM2-GM** | 1 | | 2 |
| 23 | CB-003 | CM1-CB | 1 | | 13 |
| 24 | MX-004 | CM1-MX | 2 | | 6 |
| 25 | CB-004 | CM1-CB | 3 | | 144 |
| 26 | EQ-005 | CM1-EQ | 4 | | 18 |
| 27 | EQ-006 | CM1-EQ | 4 | | 20 |
| 28 | GM-008 | **CM2-GM** | 5 | **✓** | 40 |
| 29 | PL-007 | CM1-PL | 5 | **✓** | (킬러 · 보강 필요) |
| 30 | EQ-007 | CM1-EQ | 5 | **✓** | (킬러 · 보강 필요) |

**단원 분포**: CM1-PL 7문 · CM1-EQ 7문 · CM1-MX 4문 · CM1-CB 4문 · **CM2-GM 8문** (10월 진도 CM2 조기 침투)
**premium 감지**: 7건 (16·18·19·21·28·29·30) · 회차 최다

### 2026년 6월 고1 학평 (총 30문)
| # | id | unit | ★ | prem | 정답 |
|---|---|---|---|---|---|
| 1 | EQ-001 | CM1-EQ | 1 | | ⑤ $5-i$ |
| 2 | PL-001 | CM1-PL | 1 | | ① 6 |
| 3 | EQ-002 | CM1-EQ | 1 | | ④ 4 |
| 4 | PL-002 | CM1-PL | 2 | | ③ 3 |
| 5 | EQ-003 | CM1-EQ | 2 | | ④ 4 |
| 6 | PL-003 | CM1-PL | 3 | | ③ 11 |
| 7 | EQ-004 | CM1-EQ | 3 | | (해설 참조) |
| 8 | EQ-005 | CM1-EQ | 4 | | (해설 참조) |
| 9 | EQ-006 | CM1-EQ | 3 | | (해설 참조) |
| 10 | EQ-007 | CM1-EQ | 3 | | (해설 참조) |
| 11 | PL-004 | CM1-PL | 4 | | (해설 참조) |
| 12 | PL-005 | CM1-PL | 4 | | (해설 참조) |
| 13 | EQ-008 | CM1-EQ | 4 | | (해설 참조) |
| 14 | PL-006 | CM1-PL | 5 | **✓** | (해설 참조) |
| 15 | EQ-009 | CM1-EQ | 4 | | (해설 참조) |
| 16 | PL-007 | CM1-PL | 4 | | (해설 참조) |
| 17 | PL-008 | CM1-PL | 5 | **✓** | (해설 참조) |
| 18 | PL-009 | CM1-PL | 5 | **✓** | (해설 참조) |
| 19 | EQ-010 | CM1-EQ | 5 | **✓** | (해설 참조) |
| 20 | EQ-011 | CM1-EQ | 5 | **✓** | (해설 참조) |
| 21 | PL-010 | CM1-PL | 5 | **✓** | (해설 참조) |
| 22 | PL-011 | CM1-PL | 2 | | 15 |
| 23 | EQ-012 | CM1-EQ | 2 | | 7 |
| 24 | EQ-013 | CM1-EQ | 3 | | (해설 참조) |
| 25 | EQ-014 | CM1-EQ | 5 | **✓** | (해설 참조) |
| 26 | PL-012 | CM1-PL | 5 | **✓** | (해설 참조) |
| 27 | EQ-015 | CM1-EQ | 5 | **✓** | (해설 참조) |
| 28 | PL-013 | CM1-PL | 5 | **✓** | (해설 참조) |
| 29 | PL-014 | CM1-PL | 5 | **✓** | (해설 참조) |
| 30 | EQ-016 | CM1-EQ | 5 | **✓** | (해설 참조) |

**단원 분포**: CM1-PL 14문 · CM1-EQ 16문 · MX·CB·CM2-GM 미출제 (6월 CM1 순수 · 2022 개정 첫 6월 학평)
**premium 감지**: 13건 (14·17·18·19·20·21·25·26·27·28·29·30번) · **회차 최다 · 2022 개정 학평 신기록**
**참고**: 별도 파일 `bank/mechanism-데이터-2026-6월-학평-CM1.md` v1.0 (세션 62)에서 M·I·문항 시그니처 상세 aggregation 완료.

## II. premium 감지 문항 (24건 · 4 회차)

**킬러 문항 (문번 29·30 기준 + 회차 균형 정점)**:

| 회차 | # | 파일 id | unit | 통찰 (I) | 핵심 시그니처 |
|---|---|---|---|---|---|
| 2025-6월 | 19 | EQ-013 | CM1-EQ | XU·PD·MI·CON·EQV (depth 8.8) | 복소수 √ 실수 조건 · P(1)·P(0) 부호 분기 · 다중 case |
| 2025-6월 | 20 | EQ-014 | CM1-EQ | (killer) | 이차부등식 두 개 · 매개변수 분기 · 명제 ㄱㄴㄷ |
| 2025-6월 | 29 | EQ-020 | CM1-EQ | (depth 8.6) | 삼차방정식 · 켤레 허근 · 근과 계수 |
| 2025-6월 | 30 | EQ-021 | CM1-EQ | XU·PD·MI·CON·EQV (depth 8.8) | 두 이차함수 인수분해 패턴 · 매개변수 k 실근 3 · f-g≥0 |
| 2025-9월 | 20 | EQ-011 | CM1-EQ | (depth 8.6) | (준킬러) |
| 2025-9월 | 27 | PL-006 | CM1-PL | (depth 8.6) | 삼차다항식 자기참조 · 몫=나머지 |
| 2025-9월 | 29 | CB-005 | CM1-CB | XU·CON·PD (depth 8.6) | 순열조합 조건형 killer |
| 2025-9월 | 30 | EQ-014 | CM1-EQ | XU·PD·CON·EQV·MI (depth 8.6) | 이차+일차 함수 곱 인수분해 · 항등식 자연수 n · 사각형 넓이 |
| 2025-10월 | 16 | CB-002 | CM1-CB | (depth 8.6) | 순열조합 조건형 조기 killer |
| 2025-10월 | 18 | PL-005 | CM1-PL | (depth 8.8) | 다항식 인수분해 다층 |
| 2025-10월 | 19 | PL-006 | CM1-PL | (depth 8.8) | 다항식 자기참조 |
| 2025-10월 | 21 | GM-006 | CM2-GM | (depth 8.6) | 원과 직선 · 도형이동 결합 |
| 2025-10월 | 28 | GM-008 | CM2-GM | (depth 8.6) | 원의 방정식 killer |
| 2025-10월 | 29 | PL-007 | CM1-PL | (depth 8.8) | 다항식 killer |
| 2025-10월 | 30 | EQ-007 | CM1-EQ | (depth 8.8) | 이차 killer |
| 2026-6월 | 14 | PL-006 | CM1-PL | (depth 9.0) | 나눗셈 조건 결합 |
| 2026-6월 | 17 | PL-008 | CM1-PL | (depth 9.0) | 항등식 · 근과 계수 · 특정 값 |
| 2026-6월 | 18 | PL-009 | CM1-PL | (depth 10.0) | 매개변수 BF · 두 삼각형 넓이 |
| 2026-6월 | 19 | EQ-010 | CM1-EQ | (depth 9.0) | 정사각형 한 변 = 2t · C·D 분기 |
| 2026-6월 | 20 | EQ-011 | CM1-EQ | (depth 9.0) | m 부호 분기 + 정수 x 1개 |
| 2026-6월 | 21 | PL-010 | CM1-PL | (depth 10.0) | B(x)² 두 값 대입 · (다) 조건 |
| 2026-6월 | 25 | EQ-014 | CM1-EQ | (depth 10.0) | 복소수 z̄/z=i · i^{2n} 주기 |
| 2026-6월 | 26 | PL-012 | CM1-PL | (depth 9.0) | 항등식 계수 비교 + 근과 계수 |
| 2026-6월 | 27 | EQ-015 | CM1-EQ | (depth 10.0) | 두 이차함수 두 근 거리 · √Δ/|a| |
| 2026-6월 | 28 | PL-013 | CM1-PL | (depth 9.0) | B(x)=x+c · (가)(나) 결정 |
| 2026-6월 | 29 | PL-014 | CM1-PL | (depth 10.0) | A=B(B+x)+B-x² · (나) 조건 |
| 2026-6월 | 30 | EQ-016 | CM1-EQ | (depth 10.0) | 영역별 그래프 · 직선 교점 분기 |

**총 premium: 27건** (v1 마더텅 표본 24문 대비 회차 원본에서 순증 27건 감지 · 시스템 완성도 상승)

## III. 회차별 star 분포 요약

| 회차 | ★1 | ★2 | ★3 | ★4 | ★5 (non-prem) | ★5 premium | 총 |
|---|---|---|---|---|---|---|---|
| 2025-6월 | 4 | 7 | 6 | 6 | 3 | 4 | 30 |
| 2025-9월 | 5 | 6 | 3 | 9 | 2 | 5 | 30 |
| 2025-10월 | 5 | 6 | 3 | 5 | 4 | 7 | 30 |
| 2026-6월 | 3 | 4 | 5 | 5 | 0 | 13 | 30 |
| **합계** | **17** | **23** | **17** | **25** | **9** | **29** | **120** |

**주목**:
- **2026-6월은 ★ 5 premium 43% (13/30)**로 역대 최다 · 2022 개정 CM1 첫 6월 학평 · 신유형·정점 문항 다수
- 2025-6월 → 9월 → 10월로 갈수록 CB (경우의 수) · MX (행렬) 편성 증가 (진도 반영)
- 2025-10월 CM2-GM 8문 침투 (10월 시점 학교 진도 이미 CM2 GM 진입)

## IV. 활용 가이드

### 자산화 (신규 추가 파일 로드)

```bash
# INDEX + anchors 자동 갱신
node scripts/refresh-all.mjs
```

### 문제 검색

```bash
# 회차별 문항 조회
node scripts/bank-query.mjs --source-prefix "EX-HG-Y2025M6" --top 30
node scripts/bank-query.mjs --source-prefix "EX-HG-Y2026M6" --star premium

# unit + star 필터
node scripts/source-filter.mjs --unit CM1-EQ --star 5 --top 10
node scripts/source-filter.mjs --unit CM1-PL --star premium --top 15
```

### 슬롯 편입 · 자기복제 회귀 검증

```bash
# 신규 회차 창작 시 이 pool 대비 anchor-neighbors 크로스 검증 (세션 63 정책)
node scripts/anchor-neighbors.mjs --seed <새-슬롯.yaml> --pool "bank/problems/EX-HG-Y202[56]M*.md"
```

## V. 미완 · 개선 예정

### PENDING OCR (2 회차 · 60문)

**2025-3월 고2 · 2026-3월 고2**:
- pdftotext -layout 시 한글·수식 대부분 corruption (embedded font).
- 시도 결과: `참고자료/고1 모의고사 기출 모음/2025/2025_3월_고2_문제.pdf` 및 `참고자료/고1 모의고사 기출 모음/2026/2026_3월_고2_문제.pdf` 모두 텍스트가 공백으로 파싱됨.
- 대응 방안:
  1. Tesseract OCR + Korean 언어팩 + math symbol post-processing
  2. 원본 HWP 파일 확보 (교육청 배포)
  3. 개별 문항 수기 정독 (bank/problems/EX-HG-Y2025M3-*.md · EX-HG-Y2026M3-*.md 신규 생성)

### 향후 확장

1. **EBSi 정답률 수집**: 2025 6·9·10월 · 2026 6월 EBSi 정답률 → 각 문항 `answer_rate` 필드 추가 후 `star-classify.mjs --by answer_rate` 재분류
2. **premium 문항 상세 풀이 보강**: 위 표에서 "(보강 필요)" 8건 정답·풀이 보충
3. **2025 11월 학평 추가**: 참고자료 폴더에는 부재 (2025-10월이 최신) · 확보 시 신규 편입

## 관련 자원

- v1 (마더텅 24회 표본): `bank/mechanism-데이터-전국연합-CM1.md`
- 2026 6월 별도 상세: `bank/mechanism-데이터-2026-6월-학평-CM1.md`
- 개별 문항 파일: `bank/problems/EX-HG-Y{YYYY}M{M}-*.md` (총 120건)
- 캘리브레이션 log: `bank/calibration-log.md`
- 매핑 index: `bank/mechanism-데이터-정독-tier-매핑-v3.2.md`
- 자동 도구: `scripts/source-filter.mjs` · `scripts/star-classify.mjs` v1.8 · `scripts/anchor-neighbors.mjs` v1.1
- 관련 메모리: [[feedback_source_based_authoring_v17]] · [[feedback_school_pool_cross_check]]
