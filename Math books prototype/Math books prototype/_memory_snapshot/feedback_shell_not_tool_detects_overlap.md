---
name: feedback_shell_not_tool_detects_overlap
description: 도구 이름으로는 문항 겹침을 못 잡는다 — 껍데기(형식·발문 끝말·답의 생김새·쓰는 도형)를 표로 센다
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 5a7d1bb1-1146-43c1-8146-c135e4eb2b5f
  modified: 2026-08-05T13:31:28.811Z
---

**도구 이름으로는 겹침을 못 잡는다. 껍데기를 표로 센다.** 통합관리 **C39**.

대조표에 「도구」 칸만 있으면 **도구 이름만 다르면 통과**한다.
껍데기 넷을 칸으로 둔다 — **형식**(선다·보기형·서술) · **발문 끝말** · **답의 생김새** · **쓰는 도형**.

**Why:** 재현-2회 옛 7번과 옛 11번이 **층·정답·선지까지 같은 문항**이 됐다.
제안자 셋이 다 「도구가 다르다」고 **옳게** 보고했다 — 하나는 세 직선, 하나는 대칭이동이었다.
맞는 말인데 **학생이 보는 것은 같았다.** 선지 다섯 중 넷이 글자까지 같았다.

**How to apply:** `node scripts/껍데기-겹침-검사.mjs <문제.tex>` · `<답지.tex>`.
🔴 **재료 쏠림은 기계가 못 센다** — 낱말로 안 드러난다. 지문형은 「원」이라는 낱말을 일부러 안 쓴다.
그 칸은 **사람이 채우고 사람이 센다.** 도구는 칸이 있는지만 본다.

관련: [[feedback_choices_leak_the_gate]] · [[feedback_no_parallel_source_pick]] · [[feedback_structure_signature_check]] · [[feedback_no_self_replication]]
