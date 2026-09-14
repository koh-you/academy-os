---
name: feedback_judging_scale_drifts_between_panels
description: 판정 눈금은 판마다 옮겨 앉는다 — 회차끼리의 차이만 견주고 값 자체를 판 사이에 견주지 마라
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 5a7d1bb1-1146-43c1-8146-c135e4eb2b5f
  modified: 2026-08-05T13:32:02.793Z
---

**판정 눈금은 판마다 옮겨 앉는다. 회차끼리의 차이만 견줘라.** 통합관리 **C42**.

**Why:** 세션 115 에 **한 글자도 안 바뀐** 재현-1회 열일곱이
다섯 판에서 **4.06 → 4.24 → 4.19 → 4.05 → 4.03** 으로 나왔다.
문항은 하나도 안 바뀌었다. 움직인 것은 판정자의 눈금이다.
그래서 v17 의 −0.10 을 v16 의 +0.07 과 견주면 **아무 뜻이 없다.**

**How to apply:** 두 회차를 **같은 판정자가 한꺼번에** 본다.
맹검지를 섞어 34문으로 낸다 — `scripts/회차대조-맹검지-v17.mjs` · `-집계-v17.mjs`.
판정자 셋을 독립으로 돌리고 봉인표는 아무도 안 연다.
🔴 판 사이에 견줄 수 있는 것은 **그 판 안에서 잰 두 회차의 차이** 하나뿐이다.

관련: [[feedback_ladder_is_the_answer_key]] · [[feedback_anchor_is_the_ruler_not_counts]] · [[feedback_measure_by_definition_not_conclusion]]
