---
name: figure-system-required
description: 그림 필수 유형 (CB-T05·T06·T21·T22)에 TikZ 그림 첨부 의무. 발문 길이 폭증 방지
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 892d3f16-b87f-4f48-9769-d54f8b763a38
---

다음 T-code는 시판 책 표준에 따라 *그림이 필수*. 그림 없이 발문만으로 처리하면 길이 폭증·학생 이해도 저하.

**Why**: 마스터 명시 2026-06-25 (7회차 v3 #8 색칠 발문 142자 사건). 시판 책은 같은 문제를 그림 1장 + 발문 50자로 처리. 우리도 *TikZ 그림 시스템*을 구축해 시판 완성도 회복.

**How to apply**:
- 그림 필수 유형:
  - CB-T05 도로망·최단거리 (🔴 필수)
  - CB-T06 색칠 (🔴 필수)
  - CB-T08 수형도 — 학생 풀이용 (🟡 권장)
  - CB-T21 직선/대각선 정다각형 (🔴 필수)
  - CB-T22 다각형 삼각형/사각형 (🔴 필수)
  - MX-T10 실생활 표 (🟡 권장)
- `templates/figures/figures-cb.sty` 표준 매크로 신규 (`\colorRegionsLinear` 등)
- `bank/유형카탈로그/그림가이드.md` 단일 출처
- 청사진 G3에 `figure: true` 필드 + 본문 .tex 검증

**그림 부재 검출**:
- 청사진의 type_id가 그림 필수 T-code인데 본문에 TikZ 명령어 없음 → YELLOW
- problem-review·solution-author가 점검

**단일 출처**: [[master-feedback-system]] · `bank/마스터-지적/2026-06-25-그림시스템-부재.md`
**관련**: `bank/유형카탈로그/그림가이드.md` · `templates/figures/`
