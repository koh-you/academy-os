---
name: feedback-problem-workflow
description: 문제 출제·변경 시 반드시 거쳐야 할 워크플로우 — problem-review + 풀이 검증 에이전트 + 의심사항 반영 + PDF 띄우기까지
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 42dbe456-5173-4824-b93f-cd2cab586997
---

문제를 추가하거나 변경한 뒤에는 **순서대로 다음 5가지를 모두 수행한 다음에만** 마스터께 보고한다. 한 단계라도 누락 금지.

## 필수 순서

1. **빌드 (xelatex 2-pass)** — Overfull 검사
2. **problem-review 에이전트 호출** — 8축↔★ / 앵커 / audience_fit / 교과 용어 / 변형 정책 / 수학적 정확성 / 포맷
3. **풀이 검증 에이전트 호출 (general-purpose)** — 원본 풀이를 보지 말고 독립적으로 풀어서 답 일치 확인 (CLAUDE.md 에이전트 워크플로우 §3)
4. **답지 작성·변경 시 solution-author 에이전트 호출** — 답지 풀이 톤·자세도·디자인 점검
5. **검수 의심사항을 .tex에 반영 + 재빌드** — 검수 보고서를 마스터께만 보내고 PDF에 반영 안 하면 의미 없음
6. **종합 보고** — 검수·풀이검증·답지 점검 결과·반영 내역 한 번에 보고

**PDF 띄우기 금지** (2026-06-19 마스터 결정 — "pdf 띄 우는 건 하지마"). `Invoke-Item` 호출 안 함.

## Why

마스터께서 같은 실수(검수 누락 / 의심사항 미반영 / PDF 미띄움)를 여러 번 지적함 (2026-06-15·06-16 연속 발생). 패턴 반복 = 신뢰 손상. 

- "봤는데 또 검수를 안하셨군요" (2026-06-16) — PDF 봤는데 검수 결과 미반영
- "이거 검수 에이전트 돌린거야?" (2026-06-15) — 호출 누락
- "너 최상위 문제 검수 돌렸어?" (2026-06-15) — 호출 누락

## How to apply

- 문제 1개 출제·변경 후라도 반드시 6단계 모두 수행
- "검수 보고서만 보내기"는 절대 금지 — 의심사항이 .tex/PDF에 반영되어야 함
- 풀이 검증 에이전트(general-purpose)는 problem-review와 별도 — 두 가지 모두 호출
- **답지 풀이를 직접 작성하지 말 것** — solution-author 에이전트가 책 말투·디자인을 일관 유지. 마스터가 답지 작성 지침을 우회한 직접 작성을 지적함 (2026-06-19)
- PDF 띄우기는 명시적으로 제외 (마스터 결정)
- 관련 메모리: [[feedback-cm1-no-set-interval]] · [[feedback-solution-verbosity]] · [[feedback-auto-review-completed-work]]
