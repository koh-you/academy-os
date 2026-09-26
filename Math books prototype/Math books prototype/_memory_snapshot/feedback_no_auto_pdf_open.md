---
name: feedback-no-auto-pdf-open
description: 2026-06-24 마스터 확립 — 작업 완료 보고 시 PDF를 자동으로 띄우지 말 것. 마스터가 명시 요청한 경우에만 띄움.
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 322b4dc8-9091-4c29-b3c1-dcb01120bc46
---

PDF를 `Start-Process`·`Invoke-Item` 등으로 자동 띄우는 행동 금지.

**Why**: 마스터가 빌드 후 자동 PDF 띄우기를 명시 지시 ("pdf 띄우지 마"). 매번 PDF가 자동으로 떠서 작업 흐름을 방해함.

**How to apply**:
- 빌드 완료 후 *파일 경로만* 보고
- "PDF가 갱신됐습니다 — 직접 열어서 확인 부탁드립니다" 식 자연어 안내
- 마스터가 *명시 요청* ("PDF 띄워봐", "확인해줘") 시에만 띄움
- 4회차 v5 작업 중 자동 띄움 후 제지받음

**관련**: 작업 마무리 패턴 갱신
