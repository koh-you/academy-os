---
name: feedback_session_closing_gate
description: 세션을 마칠 때는 마무리 게이트 넷을 돈다 — 전 교재용 등재 · 학교 전용 등재 · 실제로 올리기 · 인수인계 갱신
metadata: 
  node_type: memory
  type: feedback
  originSessionId: cb1040eb-d10b-4204-bf2f-56008d5c0679
  modified: 2026-08-03T23:52:53.670Z
---

# 세션 마무리 게이트 — 넷을 순서대로 (🔒 마스터 확정 2026-08-04 세션 112)

> **마스터**: 「이제 통합관리 시스템에 등재할 건 없는지, **와부고 전용으로 등재할 건 없는지** 점검해.
> 그리고 등재할 건 하고 그다음 인수인계 갱신해. **항상 세션 마무리할 때는 이렇게 해.**」

| | 무엇을 | 어디에 |
|:-:|---|---|
| 1 | **전 교재용**으로 올릴 것을 고른다 | `bank/통합관리-시스템-v1.md` §2 — 저작권 A · 조판 B · 난이도·출제 C |
| 2 | **그 학교 전용**으로 올릴 것을 고른다 | `bank/와부고-시험지-제작-워크플로우-v1.md` · `bank/와부고-출제-페르소나-v1.md` |
| 3 | **올린다** — 미루지 않는다 | 위 두 곳 + 필요하면 `CLAUDE.md` · `bank/용어-사전.md` |
| 4 | **인수인계를 갱신한다** | `memory/project_{날짜}_session{N}_handoff.md` + `MEMORY.md` 한 줄 |

**Why:** 착수 게이트는 있는데 마무리 게이트가 없었다. 그래서 세션 111 에
「통합관리에 올릴 생각을 어시스턴트가 **먼저 못 하고 마스터가 물어서야 올린 것**」이
그날 저지른 잘못 다섯 중 하나로 남았다. 그때 만든 B-절차는 **조판 지침 하나**를 막지만,
이 게이트는 **세션 전체**를 막는다. 등재되지 않은 것은 다음 세션에 없는 것과 같다 —
[[feedback_ssot_routing_gap]] 이 말하는 「배선 누락 = 미시행」이 세션 단위로 일어난 것이다.

**How to apply:**
- 1과 2를 나누는 잣대는 통합관리 §0-2 다. **전 교재용은 셋뿐** — 난이도 평가 · 출제 메커니즘 · 조판.
  나머지는 전부 그 학교 전용이다 — [[feedback_scope_split_universal_vs_school]]
- 가장 흔한 꼴은 **「절차는 전 교재용이고 숫자는 학교 전용」**이다.
  보기 — 「지문 문단 간격으로 좌측을 채운다」는 전 교재용(통합관리 B14)이고,
  「16번은 14mm × 4곳」은 와부고 전용이다
- 올린 뒤 `node scripts/system-check.mjs` RED 0 과 `node scripts/용어-검사.mjs` 를 돌린다.
  🔴 등재 글 자체가 쓰지 않기로 한 낱말을 쓰는 일이 잦다 (세션 112 에 「가르는」이 걸렸다)
- 단일 출처 전문: `bank/통합관리-시스템-v1.md` §4-2 · 배선: `CLAUDE.md` 착수 게이트 바로 아래

관련: [[feedback_ask_before_registering_typography]] · [[feedback_master_policy_registry]] ·
[[feedback_document_only_rule_gap]] · [[feedback_pre_task_policy_gate]]
