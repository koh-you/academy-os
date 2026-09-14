---
name: feedback_figure_not_required_everywhere
description: 굳이 모든 문제에 그림이 있을 필요는 없다 — 「그림 없음」은 그 자체로 결함이 아니다
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 97af3177-21cf-4a85-ac6c-d6997e9283cd
  modified: 2026-08-03T16:05:05.986Z
---

# 모든 문제에 그림이 있을 필요는 없다

> **마스터 (2026-08-04 세션 111)**: 「**굳이 모든 문제에 그림이 있을 필요는 없어.**」

계기 — 내가 검수 잔여 항목에 「5번에 그림 없음」을 결함처럼 적어 둔 것.

## Why

**그림은 필요할 때 넣는 것이지 칸을 채우는 것이 아니다.**
`scripts/figure-need-check.mjs` 는 이름 그대로 **그림이 필요한지 판정하는** 도구다.
그림을 의무로 걸지 않는다 (단일 출처 `bank/그림-필요-기준.md` v1.2).

오히려 **그리면 안 되는 자리**가 있다. 우리 회차에서 실제로 그랬다 —
- 15번: 「일의 자리 표를 그려 주면 (1)이 통째로 사라진다」
- 13번: 「$x$ 축 위의 두 후보 자리가 그림에 드러난다」
- 17번: 「외심 $\mathrm{S}$·원 $K$·점 $\mathrm{T}'$ 을 그리지 않는다 — 소문항 답 노출 방지」

## How to apply

- 🔴 **「그림 없음」을 결함으로 적지 마라.** 결함은 「필요한데 없다」 또는 「있는데 답을 흘린다」다
- 🔴 그림을 넣을지는 `figure-need-check.mjs` 로 **판정**하고, 안 넣기로 했으면 **그 까닭을 주석에 남긴다**
- 🔴 집합·명제처럼 그릴 대상이 없는 문항에 그림을 찾지 마라.
  실제로 그런 문항의 「그림 결함」을 검수 목록에서 두 번 옮겨 적은 적이 있다 —
  [[feedback_review_findings_go_stale]]

관련: [[feedback_figure_need_check]] · [[feedback_figure_answer_leakage_axis]] ·
[[feedback_figure_inclusion_framework_v2]] · [[feedback_review_findings_go_stale]]
