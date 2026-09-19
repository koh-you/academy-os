---
name: feedback-insight-depth-automation
description: 2026-06-24 마스터 확립 (방안 1) — 통찰 깊이 자동 채점 시스템 도입 v3.4. 마더텅 ★ 5 최상위 19문 표본 분석 기반. problem-review v3.4 + scripts/insight-depth-check.mjs 신규. ★ 5 최상위 임계 = depth_score ≥ 8.5 + max=3 + count ≥ 5.
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 322b4dc8-9091-4c29-b3c1-dcb01120bc46
---

## v3.4 핵심 변경 (2026-06-24 마스터 확립)

마스터 지적: 5회차도 평가원·교육청 변별 문항 퀄리티 미달. Explore 데이터 분석 결과:
- 동화고 ★ 5 깊이 3 통찰 = 0.5문/회 (마더텅 ★ 5 최상위 = 3.0문/회) — **6배 부족**
- 동화고 평균 insight_depth_score = 6.80 (마더텅 = 8.55) — **1.75점 낮음**
- 자기참조·단원 결합 (I-XU)·정수 자유도 패턴 거의 부재

## 신규 자동 시스템

### A) `scripts/insight-depth-check.mjs` v1.0
- 시험지 .tex 본문에서 깊이 신호 패턴 매칭 (정규식)
- 깊이 3: 자기참조·I-XU·격자/분할·반례·3+조건·역추적
- 깊이 2: 케이스 분기·치환·케해·주기·근계+부호
- 깊이 1: 단순 대입·인수분해 표준·순열 공식
- depth_score = max × 2 + avg 추정
- ★ 5 최상위 0건 시 exit 2 WARN
- 휴리스틱 한계: 본문만 분석. 정밀은 problem-review 에이전트

### B) `problem-review` v3.4
- §"v3.4 갱신" 절 신설 (problem-review.md)
- ★ 5 최상위 임계: depth_score ≥ 8.5 + max=3 + count ≥ 5
- ★ 5 진입 자동 검산: depth_score < 7 → 위반 / max < 3 → 위반
- 시리즈 의무: 회차당 ★ 5 최상위 ≥ 1슬롯 (WARN)

### C) `CLAUDE.md` §"난이도 체계" v3.4
- 진정 변별 6대 패턴 (P1~P6) 명시
- 신규 ★ 5 출제 시 1패턴 이상 적용 권장

### D) `bank/workflow.md` §10.5 자동 차단 도구 표 갱신
- 5종 도구: cm1·total-score·cross-round·star-consistency·**insight-depth (신규)**

## How to apply

신규 시험지 회차 작업 시 빌드 전 5종 도구 의무 실행:
```bash
node scripts/cm1-curriculum-check.mjs <new.tex> <new-답지.tex>
node scripts/total-score-check.mjs <new.tex>
node scripts/cross-round-insight-check.mjs <new.tex> <prev1.tex> ...
node scripts/star-consistency-check.mjs <new.tex>
node scripts/insight-depth-check.mjs <new.tex>     # ⭐ v3.4 신규
```

## 진정 변별 6대 패턴 (P1~P6)

마더텅 88문 + 시판 ~120문 표본 분석:
- **P1 다중 다항식 동시 결정** (블랙라벨 STEP 3 빈번)
- **P2 조건 통합 + 정수 자유도 제거** (마더텅 EQ·CB 최다)
- **P3 항등식 제곱 위장 + 완전제곱 강제**
- **P4 다층 나눗셈·인수 결합**
- **P5 자기참조 (매개변수 다층 역할)**
- **P6 단원 결합 (I-XU) + 비표준 통찰**

★ 5 평균 refinement_score 8.40 이상.

## 관련
- [[feedback_mx_familiarity_deprecated]] — Xᵤ 폐기 v3.3
- [[feedback_cm1_curriculum_single_source]] — CM1 단일출처 v1.2
- `bank/4점-패턴-카탈로그/12-S5-insight-depth-메트릭.md` — v1.0 깊이 정의
- `bank/4점-패턴-카탈로그/11-S5-진정변별-후보.md` — 마더텅 ★ 5 19문 인덱스
