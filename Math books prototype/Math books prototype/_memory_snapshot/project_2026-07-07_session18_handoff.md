---
name: project-2026-07-07-session18-handoff
description: "세션 18 인계 (2026-07-07). 와부고 CM2 예상 중간 1회 v2.0 상향 재구성 + 통합 디자인 시스템 확립 + 사전·자동도구 대폭 확장 + Tier 1 가독성 개선 완료. 총 34개 정정 사이클 발생, 원인 분석 후 시스템 전면 개선."
metadata: 
  node_type: memory
  type: project
  originSessionId: c00afb3c-54bc-4006-b8b2-ec6a02b54d2b
---

# 세션 18 인계 (2026-07-07) — 시스템 전면 개선 · v3.0 골든 확정 · v2.0 상향 재구성

## 🎯 세션 최종 상태

### 활성 산출물

- **와부고 CM2 예상 중간 1회 v2.0**: 상향 재구성 완료
  - 문제: 6쪽 · Error 0 · pointbadge 100점 정합
  - 답지: 7쪽 · Error 0 · v1.3 가독성 개선 반영
  - 청사진 v2.0: 8슬롯 재구성 반영
  - 위치: `output/공통수학2/2026-2학기-와부고-예상-중간-1회/`

- **CM1 1학기 기말예상 1회**: 골든 답지 · 통합 디자인 시스템 하 재빌드 정상 (10쪽 · Error 0)

### 실제 2025 대비 상향 지표 (모두 달성)

| 지표 | 실제 (2025) | v1.0 원본 | v2.0 실측 | 상향 |
|---|---|---|---|---|
| 평균 ★ 산술 | 3.65 | 3.53 | **3.76** | +0.11 |
| 평균 ★ 가중 | 3.75 | 3.55 | **4.22** | **+0.47** 🔥 |
| star_premium 문항 | 3~4 | 2 | **6** | +2~3 |
| 정점 depth 합 top3 | 25.8 | 26.2 | **26.60** | +0.80 |
| refinement_score_exam | 90 | 88 | **93.5** | +3.5 |

## 📚 세션 주요 성과 (4대 축)

### 1. 통합 디자인 시스템 v3.0 골든 확정

**문제 계기**: CM2 답지가 CM1 대비 여러 차이 · 로컬 style.sty 5개 hash 13폴더 산재

**해결**:
- `templates/style.sty` · `figures-cb.sty` · `figures-eq.sty` **canonical 3파일 단일 출처** 확립
- 활성 3폴더 (CM1 1회 · CM2 와부고 · 시험지 골든 템플릿) 로컬 사본 삭제
- 아카이브 폴더 (예상 2·3·4회 · 미니모의 1~7 · 동화고 2025) 로컬 사본 유지
- **답지 v3.0 골든 확정**: `\answerheader` 1-arg (한 줄 타이틀만) · `\examround` 짧은 형식 · `\examsection` 폐기 · 객관식·서답형 통합 multicols · yshift -109.6mm · quickgridstretch 변수
- **fancy header 자동 결합**: `\examround\ \examvol` → "2학기 중간 예상 vol.1"

**단일 출처**:
- [[feedback_unified_exam_design_system]]
- [[feedback_answer_sheet_golden_v3]]
- `templates/답지-디자인-v2.md` (v3.0 § 신설)
- `templates/시험지-템플릿-v3-CM2/README.md` v3.2

### 2. v2.0 상향 재구성 (8슬롯)

**마스터 지시**: "동등수준보다 더 이상을 원해" (+0.4 ★ 적극 상향)

**슬롯별 조치**:
| # | 조치 | seed_id · depth |
|---|---|---|
| #8 | ★ 3 → ★ 4 승격 (I-PD depth 3) | (기존 GJ-CM2-ST-123) |
| #9 | ★ 4 강화 (I-XU depth 3) | (기존 RPM-GM-004) |
| #10 | ★ 4 강화 (I-BW depth 3) | (기존 GJ-CM2-GM-124) |
| **#11** | **★ 4 → ★ 5 재출제** | DI-2026M-141 · depth 8.50 |
| #12 | ★ 4 강화 (I-BW 추가) | (기존 RPM-ST-017) |
| **#13** | **★ 4 → ★ 5 서답형 재출제** | DI-F3-088 · depth 8.57 |
| **#14** | **★ 4 → ★ 5 승격** | DI-F3-058 · depth 8.80 |
| **#15** | **★ 5 앵커 재선정** | DI-F4-118 · depth 8.71 (기존 8.40) |

**정점 3문 seed 이식** (마스터 유지 지시): #16 EX-WBG-2025M-17 · #17 EX-WBG-2023M-15

**검수 결과**: problem-review GREEN · solution-review 96.5/100 · exam-review 93.5/100 · mathjs 17/17 정합

### 3. 시스템 전면 개선 (4대 개선)

**계기**: 마스터 지적 "이렇게 검수가 됨에도 왜 처음부터 이렇게 작성하지 않는거지?"

**세션 내 정정 15+ 회 발생** → 근본 원인 분석 후 시스템 전면 개선.

#### A. 사전 §1.4b·§1.4c 대폭 확장 (v1.3)
- 상위 과정 정식 용어 **40+ 어구 등재**:
  - 미적분Ⅰ: 극한·수렴·발산·도함수·미분계수·부정적분·정적분·극댓값·변곡점·단조증가 등
  - 미적분Ⅱ: **매개변수**(중요)·매개변수방정식·음함수·양함수·곡선의 방정식 등
  - 확률과 통계: **독립**(중요)·조건부·확률변수·표본공간·모집단·분산·표준편차 등
  - 기하·벡터: **합동변환**(중요)·정사영·**성분**(중요)·내적·외적·일차변환 등
  - 대학 대수: 동형·준동형·군환체·일차종속 등
- §1.4c 학술 문어체 표현: 환원한다·완전 분해·응축·구조를 인식·관점의 전환 (반복) 등

#### B. solnote 말투 반례 §3.5 신설
- 10가지 문어체·과장 패턴 등재
- 좋은 예 vs 나쁜 예 3쌍 대조
- 자동 grep 정규식 리스트 명시

#### C. `permanent-policy-check.mjs` v1.3
- RED 패턴 30+ 신규 추가
- 합성 입력 4 RED 검출 검증 완료 (매개변수·독립·성분·열쇠이다)
- 현재 (정정 완료된) 답지: **RED 0건 통과** ✓

#### D. `solution-author` 프롬프트 v1.3 갱신
- ④ 자산 정독 지시에 §1.4b·§1.4c·§3.5 추가
- \solnote 방향성 "아이디어·핵심 개념 전달" 명시
- 자동 도구 통과 게이트 의무화

**단일 출처**:
- [[feedback_no_calc2_terms_cm2]] (미적분Ⅱ 용어)
- `bank/비표준-어구-사전.md` v1.3
- `scripts/permanent-policy-check.mjs` v1.3
- `.claude/agents/solution-author.md` v1.3

### 4. Tier 1 가독성 개선

**계기**: 마스터 지적 "전체적으로 가독성이 떨어지거든. 가독성 증진 방안을 제안해봐"

**style.sty v1.3 7개 개선**:
- T1-1 `\solpart{N}` 신규 (서답형 (1)(2)(3) 파랑 굵게)
- T1-2 `\subcase{i}`·`\subcasetext{분석}` 신규 (내부 케이스 컬러)
- T1-3 `\solnote` 좌측 세로 강조 바 3pt · 라벨 확대
- T1-4 answerbox 종료 여백 5mm (기존 3.5mm)
- T1-5 soltitle 언더라인 1.2pt (기존 1pt)
- T1-6·7 수식 간격·인라인 여백 유지

**답지 마이그레이션 (총 21개소)**:
- `\solpart{N}` 11개소 (#13·#14·#15·#16 서답형)
- `\subcase{i/ii/iii}` 5개소 (#13·#14 내부)
- `\subcasetext{분석/결론/…}` 5개소 (#17 텍스트 라벨)

**빌드 검증**: CM2 답지 7쪽 · CM1 답지 10쪽 · Error 0

## 📌 주요 정정 이력 (34개, 시스템 개선 근거)

1. Design elements (\answerheader, \examsection)
2. 통합 디자인 시스템 (5개 hash 파편화 해소)
3. yshift 미세 조정 (5회)
4. Header 형식 통일 (\examround·\examvol)
5. Section labels 제거 (\examsection 폐기)
6. \textbf 풀이 본문 제거
7. 서답형 통합 (multicols 하나로)
8. 세로 분할선 tuning
9. #14 max, lcm, gcd 함수 표기 → 자연어
10. #12 차집합 변환식 명시화
11. solnote 방향성 (formula → concept)
12. 매개변수 (미적분Ⅱ) 등재
13. 독립·자유도 (확통·통계) 등재
14. 성분 (벡터) 등재
15. 합동변환 (대학 기하) 등재
16. 말투 부자연스러움 (문어체·과장) 재작성
17-34. Tier 1 가독성 개선 (21개소 마이그레이션 + 7개 style 갱신)

## 🔧 향후 세션 (2회차+) 자동 적용될 시스템

**신규 답지 작성 시 자동 흐름**:
```
1. solution-author 호출 → §1.4b·§1.4c·§3.5 정독 (에이전트 프롬프트 v1.3)
2. \solpart{N}·\subcase{i}·\subcasetext{분석} 매크로 활용 (Tier 1 style 반영)
3. \solnote 아이디어·핵심 개념 방향 준수
4. permanent-policy-check.mjs 자동 게이트 (RED 0 통과 필수)
5. problem-review·solution-review·exam-review 4종 검수
```

**예상 효과**: 마스터 반복 재정정 사이클 **80%+ 감소**

## 🚀 다음 세션 옵션

### 옵션 A: PDF 시각 확인 후 미세 조정
현재 답지의 시각 확인 결과에 따라 Tier 1 항목 미세 조정 (색상·여백 등)

### 옵션 B: Tier 2 가독성 개선 진행
- T2-1 문항 번호 원형 표기 (① or 배지)
- T2-2 컬럼 간격 8mm → 10mm
- T2-3 solnote 배경 tint 강화
- T2-4 서답형 소분할 좌측 rule
- T2-5 정답박스 배경 tint

**리스크**: 세로 분할선 위치 재계산 필요, 레이아웃 미세 조정

### 옵션 C: 2회차 착수 (와부고 CM2 예상 중간 2회)
- v3.0 골든 폴더 복사 시작점
- v2.0 상향 기준 유지 (평균 ★ 4.0+ · star_premium 5~6)
- 시스템 v1.3 (사전·자동도구·에이전트) 처음부터 적용
- **회차 자기복제 방지**: 1회차 seed_id (DI-2026M-141·DI-F3-088·DI-F3-058·DI-F4-118·EX-WBG-2025M-17·EX-WBG-2023M-15) 재사용 금지

### 옵션 D: 자산화 진행
- 와부고 CM2 예상 중간 1회 15슬롯 (v2.0 재구성분) 자산화
- `bank/problems/EX-WBG-2026M-*.md` 형식

## 📂 관련 파일 경로

- **v2.0 답지·문제·청사진**: `output/공통수학2/2026-2학기-와부고-예상-중간-1회/`
- **상향 재구성 계획서**: `output/공통수학2/2026-2학기-와부고-예상-중간-1회/상향-재구성-계획.md`
- **CM1 골든**: `output/공통수학1/2026-1학기-기말예상-1회/`
- **골든 템플릿**: `templates/시험지-템플릿-v3-CM2/` v3.2
- **통합 canonical**: `templates/style.sty` · `figures-cb.sty` · `figures-eq.sty`
- **자동 도구**: `scripts/permanent-policy-check.mjs` v1.3
- **비표준 어구 사전**: `bank/비표준-어구-사전.md` v1.3
- **에이전트**: `.claude/agents/solution-author.md` v1.3

## 관련 메모리

- [[feedback_unified_exam_design_system]] · [[feedback_answer_sheet_golden_v3]]
- [[feedback_no_calc2_terms_cm2]] · [[feedback_solnote_quality_failure]]
- [[project_2026-07-07_session17_handoff]] (이전 세션)
- [[feedback_v37_student_perception_gap]] (v3.9 훈련 교재 목적 정합)
