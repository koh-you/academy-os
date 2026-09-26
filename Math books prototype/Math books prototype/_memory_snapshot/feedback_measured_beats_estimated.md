---
name: feedback_measured_beats_estimated
description: 두 검사 도구가 같은 대상을 두고 상충하면 실측이 정적 추정을 이긴다 — 하위 도구는 게이트에서 advisory(사전 경고)로 강등한다
metadata: 
  node_type: memory
  type: feedback
  originSessionId: dc84bee1-b395-4d99-9bde-acd051b2548b
  modified: 2026-07-31T00:04:51.812Z
---

**같은 대상을 두 도구가 다르게 판정하면, 더 정확한 방법이 정본이다.**
그리고 하위 도구는 **버리지 않고 `advisory`(사전 경고)로 강등**한다.

> **마스터 확정 (2026-07-31 · 세션 106)**: 픽셀 실측을 정본으로 명문화.

실사례 — 답지 #11 라벨 `O`:

| 도구 | 방법 | 판정 |
|---|---|---|
| `figure-tikz-label-check` | TikZ 좌표로 라벨 bbox **추정** | 🔴 RED 2 (라벨이 축을 통과) |
| `pdf-label-overlap-check v2.4` | **300 DPI 픽셀 실측** | ✅ GREEN 45 · RED 0 |

**Why:** 정적 추정은 폰트 메트릭·`inner sep`·앵커를 근사할 수밖에 없다. 실제 렌더 결과가
사실이다. 추정 도구의 RED 를 차단 사유로 쓰면 **멀쩡한 그림을 고치다 더 나쁘게 만든다.**
반대로 추정 도구를 삭제하면 **빌드 전 사전 경고**라는 고유 가치를 잃는다 — 실측은 빌드 후에만 가능하다.

**How to apply:**
- `scripts/gate.mjs` MANIFEST 에 `advisory: true` + `supersededBy: '<정본 도구>'` 를 단다
- 게이트는 advisory 도구의 RED 를 **🟠 사전경고**로 표시하고 `grandRed` 에 넣지 않는다
- 🔴 **advisory 는 「무시」가 아니다.** 표에 남고, **상위 실측 도구가 GREEN 인지 반드시 함께 본다.**
  상위 도구까지 RED 면 그것은 진짜 결함이다
- 강등은 **도구 쌍이 같은 대상을 잴 때만** 쓴다. 상위 도구가 없는 검사에는 쓰지 마라 —
  그러면 [[feedback_ssot_routing_gap]] 의 「미시행」과 같아진다

**분류기 오탐도 같은 원리로 다룬다.** `figure-effective-check` 는 실선 세선을 「곡선/직선/원」으로
분류해 **라벨 지시선**까지 도형 굵기(0.6pt)를 요구한다. 지시선은 도면에서 가장 얇아야 하므로
이것은 오탐이다 — 코드에 사유를 주석으로 남기고 YELLOW 를 감수한다. **수치를 맞추려고
위계를 무너뜨리지 마라.**

관련: [[feedback_figure_effective_rendering]] · [[feedback_pdf_label_overlap_check]] ·
[[feedback_exam_auto_check_tools]] · [[feedback_wrong_rule_propagation]]
