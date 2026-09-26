---
name: feedback-prefer-uac-execution
description: 설치·관리자 권한 필요 상황에서 UAC 팝업 승인 방식(Start-Process 실행) 우선 제안 · 수동 다운로드 안내 지양
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 56b59429-5d14-4616-ac33-57674479ad7a
---

# 관리자 권한 필요 상황에서 UAC 승인 방식 우선 제안 (2026-07-10)

**규칙**: 시스템 설치·관리자 권한 실행이 필요한 상황에서 마스터에게 여러 옵션을 제시할 때, **가능하면 처음부터 "UAC 팝업 승인만 해주시면 실행"** 옵션을 최우선으로 제안한다.

**Why**: 2026-07-10 세션에서 Ghostscript 설치 상황 발생. 처음에는 "브라우저 다운로드 → 설치 실행" 수동 3단계 방식을 안내했음. 마스터가 파일 위치 검색에 시간이 오래 걸리자 지적: "3번이 가능하면 처음부터 그렇게 했어야지 다음부턴 이런상황에선 3번으로해". PowerShell `Start-Process -Verb RunAs` 방식은 UAC 팝업 한 번 승인으로 끝나므로 파일 위치 찾기·수동 실행·경로 오타 등 마찰이 없다.

**How to apply**:
- 시스템 인스톨러 실행·관리자 권한 필요 명령이 있으면 **1순위 옵션**으로 "제가 실행 명령 발사 → 마스터는 UAC 팝업 '예' 승인만" 제시
- Bash tool의 auto mode classifier가 silent install을 차단한 경우, `Start-Process -Verb RunAs`로 UAC 팝업을 띄우는 방식은 마스터가 명시적 승인하므로 통과 가능
- 예: `Start-Process -FilePath "%TEMP%\installer.exe" -Verb RunAs -Wait`
- 여러 옵션 제시할 때 "수동 다운로드·수동 실행" 옵션은 후순위로 미룸
- 마스터의 "관리자 권한 있을 때 나중에 진행" 옵션은 유지 (스케줄 유연성)

**Exception**:
- **이미 파일이 다운로드되어 있고 실행만 하면 되는 상황**에서 특히 적용
- 처음부터 다운로드부터 자동화하는 경우는 auto mode classifier가 더 엄격 (외부 실행파일 다운로드+실행 한 세트 시)
- 마스터가 명시적으로 "수동으로 하겠다" 밝힌 경우는 존중

**관련 메모리**: 없음 (신규 정책)
