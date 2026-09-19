---
name: feedback-no-binom-symbol
description: "이항계수 $\\binom{n}{k}$ 표기는 고등수학 비표준. ${}_n\\mathrm{C}_r$ / ${}_n\\mathrm{P}_r$ 표준 표기 의무. 2026-07-01 마스터 명시."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 66fe4d88-06a0-455a-803c-df197aec02f7
---

## 규칙

LaTeX `\binom{n}{k}` / `\dbinom{n}{k}` / `\tbinom{n}{k}` 표기 **RED 금지**. 고등수학 표준 표기는:
- 조합: `${}_n\mathrm{C}_r$`
- 순열: `${}_n\mathrm{P}_r$`

**Why**: 2026-07-01 마스터 직접 적발. 1학기 기말 예상 1회 답지 #16·#23·#24에서 `\binom{8}{3}`·`\binom{5}{2}`·`\binom{10}{2}` 등 8건 사용. 마스터: "(8 3) 이런 기호는 고등수학에 없음. 조합이면 조합 순열이면 순열임".

**How to apply**:
- 답지·본문 풀이 작성 시 `\binom` 일체 사용 금지
- 조합·순열 *명확 구분* 의무 ([[feedback_student_distinguishability]] 연계)
- 자동 차단 도구 `scripts/cm1-curriculum-check.mjs` v1.5 패턴 등재 완료

## 관련

- [[feedback_student_distinguishability]]
- [[feedback_master_feedback_system]]
