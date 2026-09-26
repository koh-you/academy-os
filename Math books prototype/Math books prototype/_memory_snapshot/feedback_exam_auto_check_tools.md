---
name: feedback-exam-auto-check-tools
description: 2026-06-24 v1.0 마스터 확립 — 시험지 신규 회차 출제 시 의무 실행 자동 차단 도구 4종. CM1 교과과정·100점 정합·회차 간 통찰 중복·★ 분포를 빌드 전에 검사하여 결함 차단. 동화고 3·4회차 결함 사례 후 작성.
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 322b4dc8-9091-4c29-b3c1-dcb01120bc46
---

신규 시험지 회차 작업 시 **빌드 직전** 다음 4종 도구를 의무 실행. 한 건이라도 🔴 검출 시 출제 단계로 복귀.

```bash
# 1) CM1 교과과정 자동 차단 (역행렬·트레이스·케해·다중무리수·집합기호 등)
node scripts/cm1-curriculum-check.mjs <new.tex> <new-답지.tex>

# 2) 100점 정합 검산 ([[feedback_100_point_policy]])
node scripts/total-score-check.mjs <new.tex>

# 3) 회차 간 통찰 중복 검출 (이전 모든 회차와 비교)
node scripts/cross-round-insight-check.mjs <new.tex> <prev1.tex> <prev2.tex> ...

# 4) ★ 분포 휴리스틱 (단답형 ★1·논술형 ★3 이하·같은 점수 5문 이상)
node scripts/star-consistency-check.mjs <new.tex>
```

**1·2·3은 🔴 검출 시 exit 1** (CI/hook 차단 가능). **4는 휴리스틱이라 exit 2 (의심) 또는 0**.

**Why**: 동화고 3회차 작업에서 검수 에이전트 4종이 CM1 위반 9건을 모두 통과시킴 → 도구 부재가 원인. 4회차 v1은 §10.5 문서만 있고 도구 없어 회차 간 중복 5건 (v1 65.6점) → 도구 작성 후 v2는 강한 중복 0건 회복 (v2 96.4점).

**How to apply**:
- 4종 도구는 모두 `scripts/` 폴더에 작성됨 (2026-06-24)
- 단일 출처: `bank/workflow.md` §10.5
- 검수 에이전트 (problem-review·exam-review·solution-review·solution-author)도 §"비교과 용어" 절에서 본 도구 참조
- 향후 5회차 이후 작업 시 위 4종 명령을 *빌드 직전 의무 실행*

**도구별 검출 항목**:
| 도구 | 검출 | 비고 |
|---|---|---|
| cm1-curriculum-check | 역행렬 $A^{-1}$·트레이스 $\text{tr}$·행렬식 $\det$·케해 직접 인용·다중무리수 $\sqrt 2+\sqrt 5$·집합 기호 $\cup\cap$·집합 카드 $\|X\|$·사건 표기 $n(A_i)$·$\sum\int\lim$·벡터·$\mathbb{N}$·"단조증가"·"합동류"·외국 수학자 | RULES 표에 15+ 패턴 |
| total-score-check | \pointbadge 합산·구간별 합계·100점 정합 | 기대값 인자 (기본 100) |
| cross-round-insight-check | 회차 간 통찰 패턴 매칭 (강한 ≥2·약한 1) | 30+ 통찰 시그니처 라이브러리 |
| star-consistency-check | 단답형 ★1·논술형 ★3 이하·동일 점수 5문 이상·★ 1·2 합·★ 5 분포 | 휴리스틱 (진정 ★는 problem-review) |

**검증 사례**: 4회차 v2 → 4종 모두 통과 → exam-review refinement_score_exam 96.4 (시리즈 최고점).

**관련**:
- [[feedback_cm1_curriculum_single_source]] — CLAUDE.md §"CM1 교과과정 단일출처 표" v1.0
- [[feedback_100_point_policy]] — 시험지 100점 만점 정책
- [[feedback_exam_paper_workflow]] — 시험지 제작 워크플로우
- [[feedback_auto_review_completed_work]] — 완성본 자동 검수 의무
- [[project_donghwa_status]] — 동화고 시리즈 작업 (3·4회차 사례)
- `bank/workflow.md` §10.5 — 시리즈 시험지 다음 회차 출제 절차
