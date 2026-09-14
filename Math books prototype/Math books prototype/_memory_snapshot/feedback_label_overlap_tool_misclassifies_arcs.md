---
name: feedback_label_overlap_tool_misclassifies_arcs
description: pdf-label-overlap-check 의 「축·곡선 분류」와 권고 방향을 그대로 믿지 마라 — 원의 호를 축으로 잘못 세는 것을 봤다
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 97af3177-21cf-4a85-ac6c-d6997e9283cd
  modified: 2026-08-03T15:41:57.509Z
---

# 라벨 겹침 도구의 「축」 분류를 그대로 믿지 마라

**세션 111 (2026-08-04) 실측** — `scripts/pdf-label-overlap-check.mjs` v2.4 가
`재현-1회-답지.tex` 의 라벨 넷을 전부 **「축 겹침 · 곡선 0px」**으로 냈다.
좌표로 되짚어 보니 **넷 다 원의 호**였다. 축과는 스무 픽셀 넘게 떨어져 있었다.

보기 하나 — `$l_{a}$` 라벨은 `(1.42,1.42)` 에 있었고 원 $C_2$ 는 중심 `(0.92,0.92)` · 반지름 `0.92` 다.
라벨 자리에서 중심까지가 `0.707` 이라 **라벨이 원 안에 있었다.** 축은 근처에도 없다.

## Why

분류가 틀리면 **도구가 권하는 방향도 같이 틀린다.**
도구는 `$l_{a}$` 에 「SW 로 옮겨라 · 여유 120px」이라 했는데,
SW 는 원 $C_2$ 의 **더 안쪽**이다. 그대로 따랐으면 겹침이 커졌다.

실제로 먹힌 방향은 **호의 반지름 방향 바깥**이었다. 도구가 권한 자리와 다르다.

🔴 도구가 **재는 것**(겹침 몇 px)은 맞았다. **해석하는 것**(무엇에 걸렸나 · 어디로 옮겨라)이 틀렸다.
[[feedback_measured_beats_estimated]] 는 여전히 옳다 — 다만 「실측」에 해당하는 것은
**겹침 픽셀 수**이지 도구가 붙인 이름표가 아니다.

## How to apply

- 🔴 **겹침 px 는 믿고, 「축·곡선」 이름표와 `target=` 권고는 믿지 마라**
- 🔴 라벨 자리와 그 블록의 **도형 좌표를 직접 견줘** 무엇에 걸렸는지 스스로 확인한다.
  원이면 「중심까지 거리 대 반지름」한 줄이면 된다
- 🔴 **한 판에 하나씩 고치고 다시 잰다.** 넷을 한꺼번에 고치면 어느 것이 먹혔는지 모른다
- 라벨을 옮긴 뒤 **GREEN 수가 줄지 않았는지** 본다. 줄었으면 다른 라벨을 새로 깨뜨린 것이다

관련: [[feedback_measured_beats_estimated]] · [[feedback_pdf_label_overlap_check]] ·
[[feedback_figure_label_minimal_movement]] · [[feedback_illustration_iteration_protocol]]
