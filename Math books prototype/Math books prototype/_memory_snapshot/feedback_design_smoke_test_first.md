---
name: design-smoke-test-first
description: 신규 디자인 요소는 smoke-test 파일에만 먼저 적용해 시연 · 마스터 시각 확인·승인 후 전파일 전파. smoke-test 승인 없이 8단원 본편·시험지·답지에 직접 적용 금지
metadata: 
  node_type: memory
  type: feedback
  originSessionId: d09db4fd-c672-4277-94a9-86d5026551ba
---

**규칙**: 스타일 파일(`.sty`)에 신규 시각 요소를 개발할 때, 먼저 smoke-test 전용 파일(예: `smoke-test.tex`)에만 적용해 시연 → 마스터가 PDF 시각 확인·명시 승인 → 그때 8단원 본편·시험지·답지 전 파일에 일괄 적용한다.

**Why**: 세션 58에서 후보 A(좌측 stripe+dot)를 8단원 본편까지 한 번에 적용했다가 마스터에게 기각당해 전면 롤백 필요했음. 시각 요소는 마스터가 실제 렌더링을 봐야 판단 가능하므로 smoke-test로 사전 확인이 필수.

**How to apply**:
- 신규 매크로 개발 시 스타일 파일에 정의는 하되, **8단원 본편·시험지·답지 tex 파일에는 사용하지 않는다**
- smoke-test.tex에서만 신규 매크로 호출하여 시연
- smoke-test.pdf 경로만 마스터께 안내 (자동 열기 금지 · [[feedback_no_auto_pdf_open]])
- 마스터 승인 후 8단원 tex 파일 일괄 편집 (`scripts/dmoptionbox-scan.mjs` 같은 도구 활용 idempotent)
- 조건 박스(dmoptionbox)처럼 이미 승인·전파된 요소는 신규 아님 · 이 규칙 적용 대상 아님

관련: [[feedback_no_auto_pdf_open]] · [[feedback_illustration_iteration_protocol]] · [[feedback_master_feedback_system]]
