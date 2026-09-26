---
name: master-feedback-system
description: 마스터 부정 지적 자동 누적·차단 시스템 (bank/마스터-지적/). 지적 발생 시 즉시 4종 동시 등록 의무
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 892d3f16-b87f-4f48-9769-d54f8b763a38
---

마스터의 모든 *부정 지적*(금지 표현·패턴·행동)은 발생 즉시 **4종 동시 등록** 의무.

**Why**: 마스터 명시 2026-06-25 ("지적 사항이 나오면 반복이 안 되는 게 필요할 거 같아. 구조적인 점검이 필요할 거 같아."). 이전 결함 3중 누적: (1) 지적이 메모리에 자동 등록 안 됨 → 잊힘. (2) 워딩사전·카탈로그 등 단일 출처에 마스터 의향 미반영 → 시스템이 반대 권장. (3) 검수 에이전트가 과거 지적 디렉토리 매번 안 읽음 → 검수도 못 잡음. 동화고 7회차 v2에서 "정확히 N개" 표현 #15·#18·#20 세 슬롯 반복으로 본 결함 노출.

**How to apply** (마스터 부정 지적 발생 시 — *즉시·동시*):

1. **`bank/마스터-지적/YYYY-MM-DD-{슬러그}.md`** 신규 작성 (양식: `bank/마스터-지적/README.md` §3 참조)
   - frontmatter: date·master_quote·context·severity·forbidden_keywords·alternatives·related_*
2. **`bank/마스터-지적/INDEX.md`** 한 줄 추가
3. **`memory/feedback_{슬러그}.md`** 신규 + **`MEMORY.md`** 한 줄 추가
4. **충돌 단일 출처** 정정 (워딩사전·카탈로그 등 충돌하는 시스템 문서 *동시* 갱신)
5. **자동 차단 도구** `scripts/master-feedback-check.mjs`가 자동으로 본 디렉토리를 읽으므로 별도 등록 불요 (단, regex 키워드 정확히 명시 필요)

**검수 에이전트 의무** (매 호출 시):
- problem-review·exam-review·solution-review·solution-author 모두 `bank/마스터-지적/INDEX.md` *의무 읽기*
- 각 지적의 `forbidden_keywords`로 본문/답지 grep — RED 발견 시 즉시 보고

**자동 차단 (v2.0 게이트 G4')**: 본문·답지·청사진 .tex/.yaml 작성 직후 의무 실행. RED → 빌드 차단.

**관련 시스템**: `bank/마스터-지적/README.md` (단일 출처) · `scripts/master-feedback-check.mjs` · `bank/출제메커니즘-v2.0.md` §1 G4'
