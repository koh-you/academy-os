---
name: Phase3-실전편입-검증-보고서
description: 세션 60 · Phase 3 실전 편입 · problem-author v2.1 + concept-author v1.1 스펙 확립 · anchor-neighbors.mjs v1.0 신설 · 3 시나리오 실전 검증 결과
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  session: 60
  phase: 3
  status: 완료
---

# Phase 3 실전 편입 · 완료 보고 (세션 60)

## 목적

세션 58·59에서 축적한 자산 (438문 실측 · 5155 문항 규모 · 23 premium · 11원형 카탈로그 · 6벤더 회귀 v1.8)을 problem-author·concept-author agent의 실제 문제 창작 워크플로우에 편입.

## 산출 4종

### 1. problem-author v2.1 확장 (agent spec)
- **파일**: `.claude/agents/problem-author.md` v2.1
- **원본 pool**: v2.0 ~1800문 → **v2.1 5155문 (2.9배)**
- **신규 필드**: `origin_pattern` (11원형) · `source_auto_pick` · `anchor_neighbors_check`
- **자동 pick 워크플로우**: `dokdu-query.mjs`로 슬롯 조건 검색 → 원형 다양성 검증 → pick

### 2. concept-author v1.1 확장 (agent spec)
- **파일**: `.claude/agents/concept-author.md` v1.1
- **원본 pool 확대**: 개념원리·RPM·고쟁이 STEP 1 → + **쎈 A·B단계 · 마플 BASIC·NORMAL·TOUGH**
- **star_5 예외 승격**: 유형편 최상급 슬롯에 정점 문항 원본 사용 가능 (허용)

### 3. anchor-neighbors.mjs v1.0 신설
- **위치**: `scripts/anchor-neighbors.mjs`
- **기능**: 신규 문항 시그니처 (insights + depth + signal) 대상 정독 자산 5155문 이웃 검색
- **자기복제 감지**: 시그니처 유사도 ≥ 0.8 이웃 자동 경고
- **`--source` 옵션**: 기존 원본 id의 시그니처 자동 로드하여 이웃 검색

### 4. Phase 3 실전 검증 3 시나리오

**시나리오 A · CM1-PL 나머지정리 ★ 5 premium 슬롯 원본 pick**:
```bash
node scripts/dokdu-query.mjs --star premium --unit CM1-PL --limit 10
```
- 결과: **7 후보** (마플 인수분해 2 + 쎈 나머지정리 5)
- 원형 코드: O-09 P(x)-f(x) 감차 (쎈 5문 · 회차당 상한 1문 감쇠) · O-12 다중 카운팅 (마-0378) · O-13 정사각뿔 학평 (마-0381)
- 다양성 확보 pick: **마-0381** (원형 O-13 · 신규 원형)

**시나리오 B · 마플 STEP 3 도형이동 ★ 5 원본 pick** (premium 후보 제외):
```bash
node scripts/dokdu-query.mjs --publisher 마플시너지 --sub 도형이동 --star 5 --limit 10
```
- 결과: **5 후보** (0635·0648·0649·0657·0661)
- 원형 O-01 Fagnano 계열 · 대칭·이동 축 결합
- 시험지 정점 슬롯 원본으로 pick 준비 완료

**시나리오 C · ★ 4 정리편·유형편 원본 pick (통합)**:
```bash
node scripts/dokdu-query.mjs --star 4 --unit CM2-GM --sub 평면좌표 \
    --publisher 개념원리,쎈,마플시너지 --limit 10
```
- 결과: **7 후보** (개념원리 연습 24·25·52·57·58·59·60)
- concept-author v1.1이 정리편·유형편 슬롯에 즉시 pick 가능

## Phase 3 성과 정량화

| 지표 | 세션 58·59 완료 시점 | **세션 60 Phase 3 후** | 개선 |
|---|---:|---:|---:|
| 원본 pool 규모 | 5155 문항 (수동 검색) | **5155 문항 (자동 검색 편입)** | 활용성 대폭 향상 |
| 슬롯당 pick 후보 수 | 1~3 (마스터 수동) | **5~10 (자동 검색)** | 3~5배 |
| premium 슬롯 원형 다양성 | 원형 미분류 | **11원형 · 코드 대조** | 자기복제 자동 감지 |
| 소단원별 앵커 밀도 | 25문 (전 CM2-GM) | **60문 (소단원별)** + 정독 자산 통합 | 2.4배 |
| 자기복제 감지 | 수동 | **anchor-neighbors 자동 · sim ≥ 0.8 경고** | 자동화 |
| problem-author 정합률 예측 | 60~70% | **75~85% (v2.1)** | +15%p |

## Phase 3 시스템 완성도 재평가

| 축 | 세션 59 종료 | **세션 60 Phase 3 후** |
|---|---|---|
| 측정 프로토콜·회귀 함수 | 80~85% | 85% |
| 자산 확보 프로토콜 | 85% | 85% |
| 자산 규모 (커버리지) | 50% | 50% |
| **실전 편입 (Phase 3)** | **20%** | **60%** ⬆ |
| Feedback loop | 10% | 15% (anchor-neighbors 자기복제 감지 자동화 진입) |
| **종합** | ~72% | **~78%** |

## 미완성 잔여 (다음 세션 후보)

1. **자산 규모 확장** (~50% → 목표 80%):
   - CM2-ST·FN·RF 쎈·마플 정독 미착수
   - CM1-EQ 복소수·CM1-PL 다항식연산·항등식 (쎈 미착수)
   - 신규 벤더 (일품·절대등급·블랙라벨 STEP 2·3)
2. **feedback loop 자동화** (~15% → 목표 60%):
   - anchor-neighbors 시그니처 파싱 정밀도 개선 (v1.1 · 통찰 파싱 개선)
   - 실측 창작 → 학생 반응 (or 대체 신호) → 회귀 재정련 순환
3. **problem-author v2.1 실전 사용 검증**:
   - 실제 시험지 1회차 창작 · 정합률 실측 (지금은 예측만)

## 활용 방법 (즉시 사용 가능)

### 1. 시험지 창작 시 (problem-author)

```bash
# ★ 5 premium 슬롯 원본 후보 검색
node scripts/dokdu-query.mjs --star premium --unit CM1-PL --exclude-recent 3

# 특정 원본의 이웃 대조 (자기복제 감지)
node scripts/anchor-neighbors.mjs --source 쎈-CM1-PL-0277 --limit 5
```

### 2. 유형편·연습편 창작 시 (concept-author)

```bash
# ★ 3~4 원본 후보 검색 (여러 벤더 통합)
node scripts/dokdu-query.mjs --star 3 --unit CM2-GM --sub 원 \
    --publisher 개념원리,쎈,마플시너지,RPM
```

### 3. premium 원형 참조

`bank/premium-원형-카탈로그.md` v1.0 · 11원형 (O-01~14 중 유효 11개) · 회차당 상한 정책

## 관련 자산 링크

- Agent 스펙: `.claude/agents/problem-author.md` v2.1 · `.claude/agents/concept-author.md` v1.1
- 도구: `scripts/dokdu-query.mjs` v1.0 · `scripts/anchor-neighbors.mjs` v1.0 · `scripts/star-classify.mjs` v1.6
- 자산: `bank/mechanism-데이터-*.md` (77 파일 · 5175 문항) · `bank/vendor-label-calibration.md` v1.8
- 카탈로그: `bank/premium-원형-카탈로그.md` v1.0 · `bank/anchors/CM2-GM.md` v2.0
