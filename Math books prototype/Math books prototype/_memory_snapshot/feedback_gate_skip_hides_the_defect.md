---
name: feedback_gate_skip_hides_the_defect
description: 게이트에 넣은 skip 이 잡아야 할 결함과 같은 모양이면 그 게이트는 침묵한다 — 직선 프레임 채움 검사가 그랬다
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 97af3177-21cf-4a85-ac6c-d6997e9283cd
  modified: 2026-08-03T16:00:46.799Z
---

# 게이트의 skip 이 결함의 모양과 같으면 아무것도 안 잡는다

**세션 111 (2026-08-04)** — 마스터가 물었다. 「답지 그림들에서 직선이 다 좀 짧지 않아?
조판 지침에 그래프는 평면좌표 스크린을 꽉 채우게 그린다고 했었던 거 같은데 왜 안 지켜졌지?」

**규칙은 있었다** (`scripts/figure-effective-check.mjs:18` · 2026-07-22 세션 73 신설) —
「무한 직선은 축 프레임 좌우를 채운다. 점선 미채움 RED · 실선 YELLOW」.

**그런데 게이트가 침묵했다.** 종전 코드가 이랬다.

```js
} else if (!leftAtOrBeyond && !rightAtOrBeyond) {
  // 양쪽 프레임 안 · 선분 · skip
  continue;
}
```

🔴 **양쪽 끝이 다 프레임 안이면 「선분이다」 하고 넘어갔다. 그런데 짧게 그린 직선이 바로 그 꼴이다.**
한쪽만 짧으면 잡고 **양쪽 다 짧으면 안 잡았다.** 거꾸로였다.

실측 — 답지 여섯 블록 중 검사 판정을 받은 것이 **하나**뿐이었다.
블록 3 의 $l_a$ 는 좌 gap 2.15 · 우 gap 0.54 인데 아무 말이 없었다.

## Why

**skip 은 「이건 대상이 아니다」라는 뜻인데, 대상이 아닌 것과 결함인 것이 같은 모양일 때가 있다.**
여기서는 「선분」과 「짧게 그린 직선」이 소스에서 똑같이 생겼다.
그래서 선분을 걸러 내려던 한 줄이 **결함을 통째로 걸러 냈다.**

같은 날 라벨 도구에서도 같은 종류를 봤다 — 도구가 **재는 것은 맞았고 판정하는 것이 틀렸다**
([[feedback_label_overlap_tool_misclassifies_arcs]]).

## How to apply

- 🔴 **게이트에 `continue`·skip 을 넣을 때 물어라 — 「이 skip 에 걸리는 것과 내가 잡으려는 결함이 같은 모양인가.」**
  같으면 skip 하지 말고 **YELLOW 로 띄우고 사람이 판단**하게 한다. 침묵보다 낫다
- 🔴 **게이트가 조용하면 통과가 아니라 「안 봤다」일 수 있다.** 판정을 몇 건 냈는지 세어 본다.
  블록이 여섯인데 판정이 하나면 그 자체가 신호다
- 🔴 판별식을 세울 때 **결함의 정의를 그대로 옮겨라.** 「프레임에 잘렸나」의 정의는
  「x gap 이 0 인가」가 아니라 **「두 끝점이 각각 네 변 중 하나에 놓였나」**다.
  비스듬한 직선은 **양 끝이 서로 다른 변**에 닿는다 — 이걸 놓쳐 거짓 경보가 났다

## 아직 안 고친 것

🔴 `scripts/figure-check.mjs` 의 「Check B 프레임 채움」은 **`\draw` 로 그린 선·원·다각형을 아예 안 본다.**
라벨이 붙은 점의 bbox 만 잰다 (`figure-check.mjs:562~569`).
직선이 축 끝까지 꽉 차는 블록에 **「여백 87.6% GREEN」**을 냈다. **그 숫자는 뜻이 없다. 쓰지 마라.**
프레임 채움은 `figure-effective-check.mjs` 쪽으로 본다.

관련: [[feedback_label_overlap_tool_misclassifies_arcs]] · [[feedback_measured_beats_estimated]] ·
[[feedback_figure_frame_screen_fill]] · [[feedback_document_only_rule_gap]] · [[feedback_ssot_routing_gap]]
