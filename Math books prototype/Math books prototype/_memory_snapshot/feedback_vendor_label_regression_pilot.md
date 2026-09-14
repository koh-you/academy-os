---
name: feedback-vendor-label-regression-pilot
description: 벤더 라벨 → 시스템 ★ 회귀 매핑 파일럿 v1.10 · 6벤더 578문 실측 · CM2-GM 4소단원 + CM1 4대단원 + CM2-ST·FN·RF 확장 완료 · **premium 후보 40건** · **v1 파일 tier 자동 정정 1109건** · star-classify.mjs v1.7 · **dokdu-query.mjs v1.0 + anchor-neighbors.mjs v1.1 신규** · problem-author v2.1 + concept-author v1.1 편입 · **소단원별 정점 통찰 원형 매트릭스 완성 (9 소단원)**: CM2-GM(RT·SYM)·CM2-ST(PD·MI = CM1-CB 근접)·CM2-FN(XU·SC)·CM2-RF 유리(SYM 점근선)·무리(SYM+XU 자기역함수)·CM1-CB(SC·VF)·CM1-EQ(EQV·PD 1의 n제곱근)·CM1-PL(EQV·CON P(x)-f(x))·CM1-MX(EQV·XU AB=BA) · **STEP 3 premium 밀도 매트릭스**: 마플 CM2-ST 집합의뜻 100% > CM2-FN 합성역함수 80% > CM1-EQ 복소수 75% > CM1-PL 인수분해·CM2-GM 도형이동 40% > 무리 20% > CM2-RF 유리 0% · **Phase 3 실전 검증 통과** (mock 5 슬롯 100% 자동 pick)
metadata: 
  node_type: memory
  type: feedback
  established: 2026-07-21
  scope: 시판 교재 정독 첫 판정 자동화 (전 시리즈)
  precedent_session: 58 (파일럿 세션)
  originSessionId: 98d9a8fe-3d3f-4a31-bda6-d804027bbb21
---

# 벤더 라벨 → ★ 회귀 파일럿 결과 (v1.1)

## 실측 회귀 계수 (파일럿 1+2 · 100문)

### 쎈 (신뢰 A급)
- A단계 기본 → **★ 1** (신뢰 85%)
- B단계 대표문제 → **★ 3** (신뢰 60% · alt ★ 2)
- B단계 ● 상 → **★ 4** (신뢰 70% · alt ★ 3)
- C단계 사고력·교육청 → **★ 4** (신뢰 70% · alt ★ 5)

### 마플시너지 (신뢰 A급)
- BASIC → **★ 2** (신뢰 75% · alt ★ 1)
- NORMAL → **★ 3** (신뢰 80% · alt ★ 4)
- TOUGH → **★ 4** (신뢰 80% · alt ★ 3·5)
- STEP 2 서술형 → **★ 4** (신뢰 90%)
- **STEP 3** (소단원 의존 예외):
  - 원·이동 소단원 → ★ 5 (신뢰 75%)
  - 평면좌표 소단원 → ★ 4 (신뢰 60% · alt ★ 5·3)
  - 기타 소단원 → ★ 4~5 (수동 검증)

### 개념원리 (신뢰 낮음 · 표본 확대 시급)
- 파일럿 실측 없이 근사 매핑만 · 74문 dry-run에서 전부 low-confidence (0.55~0.65)
- **Phase 2.2 최우선 과제** — 표본 20문 정밀 재판정으로 회귀 정련

## 실전 활용 (v1.1)

`node scripts/star-classify.mjs --file <파일> --by vendor_label` 실행 시:
- publisher·sub_unit 자동 감지 (frontmatter)
- 각 항목에 predicted_star 배정 + confidence 스코어
- confidence < 0.7 항목은 수동 검증 대상 자동 표시
- 예측 vs 실측 불일치 자동 로깅

## 소단원 무관 안정성

**모든 라벨 편차 ≤ 0.5** (기준 통과):
- 쎈 평면좌표 vs 원: 4개 카테고리 차이 ≤ 0.20 → 소단원 무관
- 마플 평면좌표 vs 원: 3개 카테고리 차이 ≤ 0.40 → 소단원 무관
- 예외: 마플 STEP 3 차이 +0.80 → **소단원별 별도 회귀** 필수

## 규칙

- 새 시판 교재 정독 시 **star-classify v1.1 첫 배정 → 표본 재판정 → 회귀 정련** 순서 유지
- 예측 vs 실측 불일치 5건 이상 시 회귀 계수 정정 필요
- STEP 3 계열은 반드시 소단원 명시 후 예측 (미명시 시 신뢰 0.5)

## 관련 메모리

- [[project_2026-07-21_pilot_asset_unification]]
- [[feedback_asset_unification_v2]]
- [[feedback_no_student_correct_rate]]
