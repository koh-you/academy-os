---
name: no-exactly-n
description: "발문에 '정확히 N개' 형태 표현 사용 금지. 단순 수 명시 또는 '단/오직' 대체"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 892d3f16-b87f-4f48-9769-d54f8b763a38
---

발문에서 "정확히 N개", "개수가 정확히 N이 되도록", "정확히 한 개" 같은 *수 + 강조* 결합 표현 사용 금지.

**Why**: 마스터 명시 2026-06-25 (동화고 7회차 v2 검수 직후). 7회차 #15·#18·#20 세 슬롯이 모두 "개수가 정확히 N이 되도록" 동일 발문 구조 사용 → 발문 다양성 부족 + 마스터 의향과 충돌. 워딩사전 §2.5가 "정확히 N개"를 표준 어구로 권장했으나 마스터 지적으로 *금지 변형*으로 격하. 한국 교과서 표준에서 "정확히"는 과잉 강조. "개수가 5인" 형태가 더 자연스럽고 명확.

**How to apply**:
- 발문 작성 시 "정확히\s*\$?\d+\$?\s*개", "개수가\s*정확히" 패턴 자동 회피
- 대안: "개수가 5인" (정확히 빼기) / "오직 한 개" / "단 한 개" / 그냥 "$N$개"
- 본문·답지·청사진 모두 적용
- 검수 에이전트(problem-review·exam-review·solution-review)는 매 호출 시 본 패턴 grep 의무

**자동 차단**: `scripts/master-feedback-check.mjs` (v2.0 게이트 G4')
**단일 출처**: [[master-feedback-system]] · `bank/마스터-지적/2026-06-25-정확히-N-금지.md`
**관련**: [[feedback_natural_korean_wording]] · `bank/4점-패턴-카탈로그/04-워딩사전.md` §2.5 (격하 정정 완료)
