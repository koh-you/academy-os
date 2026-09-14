---
name: feedback-layout-gather-pagepair-threshold
description: gather*·align* 등 다줄 display 확장이 시험지 pagepair 크기 초과 시 probpair 자동 분리 → 페이지 수 증가. 시험지 문항 다줄 display 최대 2줄 원칙.
metadata: 
  node_type: memory
  type: feedback
  established: 2026-07-16 (세션 46 · DeeP-Red-2
  originSessionId: d0d5437a-f183-473c-bc6c-68328dd463be
---

**Rule**: 시험지 문항 발문에 `gather*`·`align*`·`aligned` 등 다줄 display 수식을 넣을 때 **최대 2줄 원칙 준수**. 3줄 이상이면 probpair 크기 초과로 자동 분리되어 페이지 수가 예상 밖 증가.

**Why (세션 46 DeeP-Red-2 #4 사건)**:
- 원본 #4 발문: `$$A=\{...\}, B=\{...\}, C=\{...\}$$` 세 집합 인라인 display → **Overfull 104.5pt** (0.46\linewidth 좁은 컬럼 초과)
- 정정 시도 1: `gather*` 3줄 (A·B·C 각 줄) → **Overfull 해소 GREEN** but **6쪽 → 7쪽으로 증가**
- 원인: `probpair` 자동 크기 측정 시 gather* 3줄 = probpair 세로 크기 증가 → pagepair(2 probpair) 페이지 한계 초과 → 두 번째 probpair(#3·#4) → 다음 페이지로 밀림
- 정정 시도 2: `gather*` 2줄 (A 인라인 + B·C만 display) → **6쪽 복귀** GREEN

**How to apply**:

### 시험지 발문 다줄 display 원칙
| 다줄 display 줄 수 | probpair 여파 | 판정 |
|---|---|---|
| **1줄** | 무영향 | ✅ 안전 |
| **2줄** | 경미 (문항 세로 +5mm 정도) | ✅ 안전 |
| **3줄 이상** | probpair 크기 초과 · pagepair 자동 분리 | 🔴 페이지 증가 위험 |

### 3줄 이상 필요 시 대안 (우선순위)
1. **인라인 흡수** — 첫 정의를 발문 텍스트로 흡수 (예: "집합 $A = \{a, b, c, d\}$에 대하여 두 집합 ..." 형식)
2. **conditions 환경** — `\begin{conditions}` 사용 (환경 자체 세로 크기 최적화)
3. **문항 이관** — 서답형 페이지로 이관 (넓은 컬럼 확보)
4. **layout_hint 변경** — 청사진에서 probpair → grid/full 단일 컬럼 배치

### 자동 감지 (Phase 3 신설 예정)
- `scripts/blueprint-content-analyzer.mjs`에 `display_line_count` 축 추가 검토
- gather*/align 감지 시 줄 수 count → 3줄 이상 시 WARN

### 답지 다줄 display
- 답지는 `\raggedcolumns` + 단일 multicols로 자연 흐름 → 다줄 display 3~4줄 허용
- probpair 제약 없음. 이 규칙은 **시험지 발문에만 적용**

### 관련 시스템
- `feedback_probpair_system` (probpair 자동 균등 분배 v3.1)
- `feedback_probpair_balance_algorithm` (X 균등분배 공식)
- `feedback_golden_layout_registry` (골든 관행 등재)
- `feedback_policy_slot_size_uniform` (σ ≤ 10mm)

**관련**: [[feedback_answer_sheet_single_multicols]] · [[feedback_overfull_prewarning]] · CLAUDE.md §"수식 줄바꿈·디스플레이 배치 규약"
