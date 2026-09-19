---
name: feedback-signature-detection-v35
description: 발문 시그니처 검출 시스템 v3.5. T-code·메타·통찰 카드 단위로 분리해도 *발문 어구 패턴·결과식 형식*이 같으면 학생 체감 동일 유형 → RED. 9회차에서 4슬롯 행렬+성분합 동일 시그니처 검출.
metadata: 
  node_type: memory
  type: feedback
  originSessionId: a470684d-eec5-49a7-a6bf-345591d9793a
---

T-code·메타·통찰 카드 단위로 분리했더라도 **발문 어구 패턴·결과식 형식·자유도 형식이 같으면 학생 체감 같은 유형**. 한 시험지에 같은 시그니처 슬롯 ≥ 2개 → RED 차단.

**Why**: 마스터 명시 (2026-06-25, 9회차 검수 5종 통과 후): "11 12 동일유형 13도 유사 유형 5번 16번 유사유형 20번 9번 유사유형 21번 그림 칸이 안나누어짐. 전반적인 시스템 작동 실패." 검수 5종이 메타·T-code 단위로 분리됐다고 통과시켰으나 학생 입장에서 *"행렬 + 다항식 → 성분합"* 동일 발문이 4슬롯 동시 출제됨.

**How to apply**:
- **발문 시그니처 = `(입력 형식, 결과식 형식, 자유도 형식)` 3원조**
- 예: `(2x2-행렬, 식의-성분합, 다항식-계수)` / `(정n각형-꼭짓점, 도형-카운트, 분류)` / `(유리수계수-N차방정식, 계수-결합, 켤레쌍)`
- **시험지 1장에 같은 시그니처 슬롯 ≤ 1개 의무 (RED)** — 인접 시그니처 ≤ 2개
- 메타 충돌 검출과 *별도*로 시그니처 검출 통과해야 함

**자동 차단** (2026-06-25 옵션 A 인프라 5종 완료):
- `scripts/signature-check.mjs` v1.0 — 본문 .tex 정규식 매칭 + 충돌 검출 ✅
- `scripts/blueprint-validate.mjs` G8 (signature_id 충돌) + G9 (figure_macro 충돌) ✅ — 9회차+ RED 활성
- 시그니처 카탈로그: [[bank/v3.5-발문시그니처-카탈로그.md]] v1.0 (EQ 10·CB 10·MX 8) ✅
- TikZ 매크로: `templates/figures/figures-cb.sty` v2.0 (`\colorRegionsCycle` 정정 + `SquareGrid`·`Cross`·`MapStar` 신규) ✅
- 검수 정의서: `.claude/agents/problem-review.md` v4.4 + `.claude/agents/exam-review.md` v0.2 ✅
- 단일 출처: [[bank/v3.5-시스템개선-작업큐.md]] + [[bank/v3.5-발문시그니처-카탈로그.md]]

**시범 적용 결과** (signature-check → 9회차 v4.1):
마스터 지적 5건 모두 RED 자동 검출 + 추가 검출 2건 (#7·#19 CB-S02·MX 단조 YELLOW)

**9회차 사건 학습 데이터**:
- #8·#11·#12·#13: 모두 `(2x2-행렬, 다항식-식, 성분합)` 동일 시그니처. 메타 (MX-power-regularity·MX-identity·MX-power-regularity·MX-power-regularity) 분산됐으나 학생 체감 동일
- #5·#16: 모두 `(유리수계수-N차방정식, 켤레쌍, 인수분해)`. T-code 둘 다 E07 — 메타 충돌 도구 통과(같은 T-code 2개 한도)
- #9·#20: 모두 `(정n각형-꼭짓점, 그림+카운트)`. 메타 CB-geometry 2개 한도 도달

**검수 에이전트 의무 (v3.5+)**:
- 매 회차 시그니처 검수 의무
- 같은 시그니처 ≥ 2개 RED 보고
- 그림 매크로 카운트 RED 보고

**관련**: [[feedback_meta_type_separation]] (메타 단위) · [[feedback_no_self_replication]] (자기복제) · [[project_v3.5_system_failure_diagnosis]] (새 세션 시작점)
