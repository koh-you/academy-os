---
name: feedback_choices_leak_the_gate
description: 발문이 안 하는 말을 선지가 하면 발문이 흘린 것과 같다 — 「발문에 방법 지시 금지」를 선지까지 넓힌다
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 5a7d1bb1-1146-43c1-8146-c135e4eb2b5f
  modified: 2026-08-05T13:31:16.027Z
---

**발문이 안 하는 말을 선지가 하면 발문이 흘린 것과 같다.** 통합관리 **C38**.

「발문에 방법 지시 금지」(`templates/SIMULATOR-와부-디자인-v1.md:231`)는 **발문 문장만 보고 선지는 안 본다.**
그 구멍으로 관문이 공짜로 넘어간다.

**Why:** 재현-2회 옛 5번의 선지 ①②③ 이 모두 「$-3\le a$」 로 시작했다.
그 울타리를 학생이 스스로 꺼내는 것이 **그 문항의 관문**인데 선지가 세 번 말해 줬다.
발문은 한 번도 안 했다. 옛 8번도 같았다.

**How to apply:** 선지 다섯의 앞부분을 견준다. 셋 이상이 같은 말로 시작하면 그 부분이 공짜다.
🔴 **고치는 법은 오답 값 재설계뿐이다** — 수학·정답값·정답 자리를 안 건드리므로 급 판정이 안 낡는다.
`node scripts/껍데기-겹침-검사.mjs <문제.tex>` 가 센다.
🔴 LaTeX 명령만 같은 것은 안 센다 (선지 넷이 `\dfrac` 으로 시작하는 것은 「분수다」라는 형식일 뿐이다).

관련: [[feedback_unused_phrasing_not_novel]] · [[feedback_shell_not_tool_detects_overlap]] · [[feedback_no_star_in_student_materials]]
