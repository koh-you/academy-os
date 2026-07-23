# Next Session Handoff

> 2026-07-23 운영 유지보수 최신 인수인계: 바로 붙여넣을 프롬프트는 `docs/next-session/maintenance-session-prompt-2026-07-23.md`다. 현재 유지보수·리팩터링·시험분석을 각각 독립 worktree/branch로 분리하고, 향후 코딩 에이전트도 task owner/worktree/branch/허용 파일/side effect/사람 gate 계약을 가진 뒤 전용 브랜치만 사용한다. main 통합 owner는 항상 하나만 둔다.

> 현재 main 기준은 `0ced3d32 Add safe special lecture cancellation flow`이다. 수업메모 전체 필드 Supabase 재조회 검증은 `5b6b98c2`, 배포 marker는 `05ed38b0`, 기록은 `a8890a02`다. 다음 유지보수 첫 gate는 수업메모·작성창 체크·이전 확인 저장 후 새로고침 유지이며, 통과 후에만 이전 메모 확인 범위/복구 보강을 시작한다. 특강 부분·전체 취소와 시험분석 GPT Image 프롬프트 제작실도 각각 사람 gate 대기다. 새 세션은 시작 시 최신 `origin/main`을 다시 확인한다.

> 2026-07-21 시험분석 방향 정정 및 Gate 1~6 완료: Academy OS 안에 GPT Image 생성 API·버전 DB·Storage 제작실을 먼저 만드는 것이 아니다. 30페이지·893건을 전수 목록화하고 24개 관련 글·221개 첨부/215개 고유 이미지를 역할·레이아웃·자산 방식으로 전수 분류했다. 중·고등 시퀀스, 역할 라이브러리, Academy OS 확정 JSON에서 `마스터 -> 1번 -> 2번 -> ... -> 장별 수정 프롬프트`를 만드는 로컬 생성기와 예제를 완성했다. 다음 구현 Gate는 교사 확정 입력/저장 계약을 Academy OS에 연결하는 것이며, 별도 승인 전 이미지 API·DB·Storage 제작실은 만들지 않는다. 최신 기준은 `docs/academy-os-exam-slide-prompt-rules-gate6-2026-07-21.md`다.

이 폴더 하나만 다음 Codex 세션에 넘기면 됩니다. 리팩터링과 유지보수는 아래처럼 별도 Git worktree/브랜치에서 진행합니다. 두 세션 모두 `AGENTS.md`와 `docs/current-worklog.md` 최상단의 `미룬 작업 큐`를 먼저 사용자에게 요약해야 합니다.

## 상태 보고 시 남은 사람 gate 우선 표시

다음 세션은 `어디까지 진행됐나요`, 중간 진행, 작업 완료 답변에서 완료 항목보다 먼저 `남은 사람 gate`를 표시합니다. 각 gate의 검토 순서, 통과 기준, 중단 조건, 통과 전 금지되는 commit/push/배포/다음 작업을 함께 씁니다. 보류·미실시는 통과로 바꾸지 않으며 gate가 없으면 `남은 사람 gate: 없음`이라고 명시합니다.

11B-1 코드 이동 후 학생 일정·학부모 일정·학생 11시의 OS row/Solapi 그룹 예약·취소 대조는 반 미지정 고태영 테스트 학생과 사용자 통제 번호로 통과했습니다. 학생 포털 실제 쓰기 검수, 교사 bearer/Storage 소유권 보안 gate, Solapi 특강 템플릿 외부 검수는 별도 보류 상태입니다.

App.jsx 보충관리 리팩터링은 최신 `origin/main`에 rebase한 뒤 `12R-10~20` local state/표시 모델, `12R-21~25` 다섯 실제 action의 modal adapter, `12R-26~27` local draft 변경과 완료·일정 확인창 submit adapter를 분리했다. 12R-28에서는 334줄 규모의 `SupplementStudentModal` 본체를 전용 파일로 옮기고 App 전용 helper는 dependency object로 주입했다. 실제 task/lesson/출결 저장·Supabase 재조회·React 전역 갱신·notification/Solapi 작업은 App이 주입하는 callback 경계에 남고 새 모달 파일에는 직접 API/notification/Solapi 호출이 없다. production 409/409, build를 근거로 AI gate를 통과했다. 다음은 `FollowUpCenter`에 남은 보충 목록·선택·실제 callback adapter를 inventory해 12번을 닫을 수 있는지 판정한다.

## 시험분석 GPT Image 전용 세션 참고 자료

과거 완전판 `docs/next-session/exam-analysis-gpt-image-full-session-prompt.md`에는 API·DB·Storage 제작실 방향이 포함돼 있으므로 그대로 구현하지 않는다. 블로그 조사 주소와 카드 역할 참고 자료로만 사용하고, 최신 작업 경계는 Gate 1 문서와 이 README 최상단을 따른다.

```text
Academy OS 시험분석 GPT Image 전용 세션입니다.

프로젝트 전체 미룬 작업 큐는 `운영 OS 저장 신뢰성 보강 -> 모달 통일 -> 발송 알림톡 템플릿 관리 -> App.jsx 리팩터링 -> Solapi 특강 템플릿 검수 후 연결` 순서입니다. 이번 세션은 사용자가 별도로 승인한 시험분석 GPT Image 설계/구현만 담당합니다. 시작 답변 최상단에 전체 큐와 이번 세션 범위를 함께 보여주세요.

Git 충돌 방지:
- `E:\academy-os` main worktree는 유지보수 세션 소유입니다.
- 시험분석 작업은 별도 worktree `E:\academy-os-exam-analysis`와 `codex/exam-analysis-gpt-image` 브랜치를 사용하세요.
- 최신 `origin/main`을 fetch한 뒤 시작하고, 기존 worktree/브랜치가 있으면 상태를 먼저 확인하세요.
- 예상하지 못한 diff나 충돌이 있으면 수정하지 말고 사용자에게 보고하세요.
- 전용 브랜치만 commit/push하고 main에는 직접 merge하지 마세요.

먼저 반드시 읽을 파일:
1. AGENTS.md
2. docs/current-worklog.md
3. docs/next-session/README.md
4. docs/exam-analysis-gpt-image-benchmark-2026-07-21.md
5. docs/next-session/2026-07-04-ai-collaboration-retrospective.md
6. docs/save-persistence-audit-2026-07-20.md
7. supabase/20260703_exam_analysis_pipeline.sql
8. api/routes/examAnalysisPipeline.js
9. src/app/App.jsx의 ExamAnalysisPipelineCenter/ExamAnalysisOutputDraftPanel
10. src/domains/exams/finalPreview.js와 ExamAnalysisFinalPreviewPanel.jsx

현재 상태:
- 시험분석 핵심 v2는 PDF→문항 수 선생님 확정→고정 행→AI 채움→선생님 검수→최종 미리보기까지 구현돼 있습니다.
- main에는 `원본·PDF`, `문항 구조`, `AI 분석`, `선생님 검수`, `최종 미리보기`, `산출물`, `기록` 상단 탭 UI가 구현됐습니다. 먼저 운영 화면에서 탭 전환과 local draft 유지 사람 gate를 확인하세요. 이 UI를 다시 설계하거나 App.jsx 일반 리팩터링을 섞지 마세요.
- 현재 산출물은 GPT 기획 패킷/블로그·인스타 초안/Canva 계획 TXT와 ZIP 중심이며 실제 GPT Image 생성·수정 버전 저장은 없습니다.
- 과거 웹앱 HTML/CSS 카드 렌더러 Gate 3는 의도적으로 삭제됐습니다. 되살리지 마세요.

벤치마크에서 실제 확인된 사실:
- `https://blog.naver.com/skills_in_math2`의 공개 RSS와 개별 PostView에서 시험분석 게시물 10건을 조사했습니다.
- 혜성여고, 불암중2, 중계중3 등은 게시물 이미지 10장 모두 파일명이 `ChatGPT_Image_...png`입니다.
- 혜성여고와 불암중2는 초기 생성 세트 중 특정 장만 수 시간 뒤 이미지로 교체돼 반복 수정한 흔적이 있습니다.
- 학교별로 녹색 2:3, 보라색 4:5, 분홍색 정사각형 등 디자인과 비율을 바꾸지만, 표지→시험 구조→총평→주요문항 원문→손풀이→다음 대비 역할은 반복됩니다.
- 주요문항 카드는 문제 원문/선생님 손풀이를 생성하지 않고 원본 이미지로 넣고, GPT Image가 제목·테두리·요약·아이콘을 조립하는 하이브리드에 가깝습니다.
- 동일 카드 번호 중복 사례도 있어 번호, 한글, 수학식, 학교명, 로고를 사람이 검수해야 합니다.

이번 세션의 목표:
Canva/미리캔버스가 원본인 템플릿 편집기가 아니라 `GPT Image 장별 생성 -> 반복 수정 -> 버전 비교 -> 선생님 최종 선택` 제작실을 설계하고 작은 gate로 구현합니다. Canva/미리캔버스는 필요할 때 최종 선택 이미지를 배치하는 보조 수단일 뿐입니다.

코딩 전 먼저 아래를 표로 답하세요:
1. 이미지 생성에 사용할 final_fields/teacher_fields/outputDrafts 입력
2. 문제 원문과 손풀이 이미지의 업로드·저장 원천
3. 장 구성 초안과 선생님 확정값의 저장 위치
4. 생성 프롬프트와 수정 지시 local draft
5. 이미지 set/version/parent version/final selection 저장 모델
6. 비공개 Storage bucket과 삭제 범위
7. OpenAI 이미지 생성·편집 API 과금과 실패/재시도 경계
8. 분석 원천이 변경됐을 때 기존 이미지 보호 방식
9. 번호·학교명·수학식·로고·CTA 사람 검수 gate
10. 개인정보·시험지 저작권·외부 전송 범위

OpenAI API를 구현할 때는 openai-docs skill로 최신 공식 문서를 먼저 확인하세요. 오래된 모델명이나 요청 형식을 기억으로 고정하지 마세요.

권장 저장 구조:
- `exam_analysis_image_sets`: run 연결, 학교별 style brief, 선생님이 확정한 장 구성, 상태
- `exam_analysis_image_versions`: slide role/order, version, parent version, source snapshot, generation prompt, revision instruction, provider/model, Storage path, status, final 선택 여부
- 비공개 Storage bucket: 생성 원본과 수정본

DB가 필요하면 새 Supabase SQL 파일만 만들고 운영 SQL은 사용자가 직접 적용하게 하세요. base64 이미지나 전체 버전 이력을 `app_state`/localStorage/`audit_summary` 한 row에 넣지 마세요.

권장 UI:
- 기존 시험분석 상단 탭에 `GPT 이미지`를 추가하거나 현재 `산출물` 내부에서 `글 초안`과 `GPT 이미지` 하위 탭으로 분리
- 상단: 세트 상태, 학교 포인트 컬러/비율/style brief, 원천 변경 경고
- 좌측/상단: 선생님이 확정한 8~14장 카드 역할 목록
- 중앙: 선택 장의 현재 이미지와 원본 문제/손풀이 slot
- 우측: 생성 프롬프트와 수정 요청 local draft
- 하단: v1/v2/v3 버전 타임라인, 부모 버전, 최종 선택 표시
- 버튼: 장 구성 저장, 초안 생성, 선택 버전 수정 생성, 최종 선택, 다운로드, 버전 삭제
- 같은 영역 안에 저장 중/생성 중/서버 반영 확인/완료/실패 표시

필수 원칙:
- 유료 이미지 호출은 장별 명시적 버튼으로만 실행하고 자동 10장 일괄 생성 금지
- 기본 카드 역할은 제안하되 선생님이 주요문항 수에 맞춰 8~14장 구성을 확정
- AI는 문항 수, 문항번호, 점수, 등급컷, 유사문항, 정답, 풀이를 새로 추측하지 않음
- 문제 원문과 손풀이는 검수된 업로드 이미지 사용
- 선생님 최종 선택본은 재생성으로 덮어쓰지 않음
- 분석 데이터 변경 시 자동 재생성하지 않고 `원천 변경됨` 경고만 표시
- GPT Image의 직전 선택 버전을 reference로 넘겨 수정 요청만 반영하고 version chain 유지
- 공식 로고는 GPT가 다시 그리게 두지 말고 reference 고정 또는 생성 후 결정론적 합성을 검토
- 벤치마크 디자인을 그대로 복제하지 말고 `으뜸수학 고태영T` 브랜드로 재설계

한 번에 하나의 gate만 진행하세요:
Gate 0 저장/비용/권한/삭제 설계와 사람 승인
Gate 1 SQL·Storage·버전 CRUD, 실제 유료 호출 없음
Gate 2 한 장 초안 생성, 비용 승인 후 통제된 테스트 데이터만 사용
Gate 3 같은 장 반복 수정과 parent/version/final 선택 검증
Gate 4 문제/손풀이 원본 slot을 포함한 주요문항 카드
Gate 5 확정 장 묶음 다운로드와 블로그 글 조립 안내

각 Gate마다 production test/build, AI 자기검토, 사람 검토 절차, 중단 조건을 제시하세요. 운영 데이터 삭제나 유료 호출은 사용자 확인 없이 실행하지 마세요.
```

## 세션 충돌 방지 원칙

- 유지보수 세션만 `E:\academy-os`의 `main` worktree와 `origin/main` 통합을 소유합니다.
- 리팩터링 세션은 `E:\academy-os-refactor` 같은 별도 worktree와 `codex/refactor-supplement-11b` 같은 전용 브랜치를 사용합니다. 같은 `E:\academy-os` 폴더에서 두 세션을 동시에 실행하지 않습니다.
- 리팩터링 세션은 전용 브랜치만 commit/push하고 `main`에 직접 merge/push하지 않습니다. 유지보수 세션 또는 사용자가 지정한 단일 통합 세션만 최신 `origin/main` 위에서 병합합니다.
- 각 세션은 작업 전후 `git status --short`를 확인하고 다른 세션의 파일을 stage/commit/revert하지 않습니다. 예상하지 못한 변경이나 충돌이 있으면 작업을 멈추고 사용자에게 알립니다.

## 리팩터링 세션에 바로 붙여넣을 프롬프트

```text
Academy OS 리팩터링 전용 세션입니다. 기능 유지보수와 운영 버그 수정은 다른 세션에서 진행하므로 이 세션에서는 App.jsx 의미 단위 분리만 수행하세요.

Git 충돌 방지 규칙:
- `E:\academy-os` main worktree는 유지보수 세션 소유입니다. 여기서 코드를 수정하지 마세요.
- 리팩터링은 별도 worktree `E:\academy-os-refactor`와 `codex/` 전용 브랜치에서만 진행합니다. 권장 브랜치는 `codex/refactor-supplement-11b`입니다.
- worktree/브랜치가 없으면 최신 `origin/main`을 기준으로 별도 worktree를 준비하고, 이미 있으면 재사용하세요. 같은 worktree를 두 세션이 공유하면 안 됩니다.
- 첫 작업과 새 의미 단위마다 `git fetch origin` 후 최신 `origin/main`을 rebase/동기화하세요. 예상하지 못한 파일, 충돌, staged 변경이 보이면 수정하지 말고 사용자에게 보고하세요.
- 전용 브랜치만 commit/push하고 `main`에는 직접 merge/push하지 마세요. 통합은 유지보수 세션 또는 사용자가 지정한 한 세션만 합니다.

작업 전에 반드시 아래를 읽고 상태를 사용자에게 먼저 요약하세요.
1. AGENTS.md
2. docs/current-worklog.md
3. docs/next-session/README.md
4. docs/refactor-supplement-job-builders-inventory-2026-07-21.md
5. git status --short
6. git log -8 --oneline

공유 미룬 작업 큐는 `운영 OS 저장 신뢰성 보강 -> 모달 통일 -> 발송 알림톡 템플릿 설정 관리 -> App.jsx 리팩터링 -> Solapi 특강 템플릿 검수 후 연결` 순서입니다. 다만 이 세션의 권한은 4번 App.jsx 리팩터링뿐입니다. 다른 큐의 기능 수정이 필요해 보이면 구현하지 말고 유지보수 세션에 넘길 진단만 기록하세요.

현재 리팩터링 상태:
- 10번 `student-parent portals` 표시 구조 audit까지 완료했습니다.
- 11A 순수 builder/selector 분리는 완료했습니다. 사용자가 기존 결석보충 예약·취소 흐름이 정상이라고 확인해 11B 착수 gate도 통과했습니다.
- 11B-1에서 `/api/notification-jobs/reserve|cancel`, 예약 실패 row 저장, 반환 job React 상태 반영을 `notificationJobApi.js`로 분리하고 deterministic fixture를 `npm run test:production`에 연결했습니다. Supabase/Solapi 서버 orchestration과 보충 문구·대상·시각 결정은 변경하지 않았습니다.
- 실제 OS row/Solapi 그룹 예약·취소 사람 gate는 통과했습니다. 최신 `origin/main` `41a31943` 기준 production 364/364와 build도 통과했습니다. 11B-1 전용 브랜치 commit/push 후 다음 11B 단위는 새 범위 확정부터 시작하세요. 첫 진단 1건과 최종 검증 3건의 취소 감사 row 총 4건은 `notification_jobs`에 남아 있습니다.
- 11B-2에서 취소 가능 상태, task별 활성 일정 안내, 현재 일정 학생·학부모 pair, 개별 재예약 취소 대상을 `notificationJobSelectors.js`로 분리했습니다. 순수 배열/Set selector라 실제 예약·취소와 운영 데이터 변경은 없으며 deterministic fixture가 이전 날짜 활성 예약 정리와 대상 교차 방지를 고정합니다. 최신 `origin/main` `db420137` 기준 production 364/364와 build를 통과했습니다.
- 11B-3에서 연락처 누락과 예약 예외의 실패 감사 row 생성·상태 반영·API 저장을 `persistFailedNotificationJobRequest`로 통합했습니다. 정상 예약·취소·Solapi 호출은 변경하지 않았습니다.
- 11B-4에서 여러 활성 예약의 병렬 취소와 반환 job 수집을 `cancelNotificationJobsRequest`로 분리했습니다. 대상 selector, 취소 사유, 실제 API/Solapi 계약은 그대로입니다.
- 11B-5에서 학생·학부모 단일 일정 안내의 연락처 검사, reserve 호출, 확정/변경 결과 조립을 `supplementNotificationOrchestration.js`로 분리하고 네트워크 없는 fixture를 production test에 연결했습니다.
- 11B-6에서 학생 11시 예약의 대상·빈 최종 문구·학생·배정일·과거시각 검증과 job 생성·예약 결과 조립을 같은 orchestration 모듈로 분리했습니다.
- 11B-7에서 학생·학부모 pair 예약의 기존 활성 안내 취소, 공통 예약시각, 대상별 job 생성과 병렬 예약을 같은 모듈로 분리했습니다.
- 11B-8에서 개별 알림 control의 취소 가능성 검증, 기존 취소 wrapper 호출, 결과 조립을 같은 모듈로 분리했습니다.
- 11B-9에서 개별 예약 control의 입력 검증, 기존 예약 재사용, 같은 대상 활성 예약 정리, 학생·학부모 일정/학생 11시 예약 위임을 같은 모듈로 분리했습니다. 승인된 미배정 고태영 데이터로 세 종류를 실제 예약·대조·취소했고 OS/Solapi 일치와 임시 task 삭제까지 확인했습니다.
- 11B-10에서 보충 완료 시 학생 11시 deterministic job 선택, 비활성 이력 재사용, 기존 취소 wrapper 호출과 오류 복구를 같은 모듈로 분리했습니다. 11B-9 운영 검증에서 동일 실제 취소 경로를 통과했으므로 추가 유료 호출은 하지 않았습니다.
- 11B-11에서 같은 task의 활성 학생·학부모 일정 안내 선택과 기존 배치 취소 함수 호출을 같은 모듈로 분리했습니다. 다른 task와 발송 완료 이력은 제외하는 기존 계약을 fixture로 고정했습니다.
- 11B-12에서 보충 일정 저장 후 학생 11시, 학생·학부모 일정 안내를 순서대로 적용하고 화면 반환 상태를 조립하는 경계를 같은 모듈로 분리했습니다. 저장 원천과 실제 예약 wrapper는 App에 유지합니다.
- 11B-13에서 skip/suppress 플래그, 기존 일정·변경 여부, 현재 pair 재사용, 11시·pair 예약 필요 여부를 순수 plan으로 분리했습니다.
- 12번 inventory는 `docs/refactor-supplement-center-inventory-2026-07-21.md`에 기록했습니다. 12A에서 학생·필수값·중복 검증과 저장할 lesson/task 객체 생성을 순수 persistence plan으로 분리했고 실제 저장·상태·알림은 App에 유지했습니다.
- 12B에서 callback-only `SupplementPassConfirmModal`을 별도 파일로 분리했습니다. 두 호출부가 유형 라벨과 기존 callback을 주입하며 API·알림 side effect는 없습니다.
- 12C에서 `SupplementScheduleChangeConfirmModal`과 항목 fallback·초기 local draft·confirm patch helper를 분리했습니다. 두 저장 버튼은 같은 현재 local patch를 기존 App callback에 넘깁니다.
- 12D에서 `SupplementHistoryModal`과 날짜/status/query filter view model을 분리했습니다. 전달 순서와 완료 항목 복귀 callback만 유지하며 API·알림 side effect는 없습니다.
- 12E에서 저장 pill, 개별 예약 control, 학생 11시, 즉시 안내 상태 계산을 `supplementStatus.js`로 분리하고 모든 상태 분기를 fixture로 고정했습니다.
- 12F에서 `SupplementNotificationDraftWorkspace`를 callback-only 표시 컴포넌트로 분리했습니다. local draft, 현재 job 표시 계산, 저장·예약·취소는 App이 계속 소유합니다.
- 12G에서 `SupplementNotificationControlModal`을 callback-only 표시 컴포넌트로 분리했습니다. 현재 job/preview/가능 여부 계산과 실제 action은 App이 계속 소유합니다.
- 12H에서 `SupplementTaskSourceContext`로 원 숙제/원 결석 수업 맥락과 확인용 숙제 읽기 카드를 분리했습니다. 저장·입력·알림 side effect는 없습니다.
- 12I에서 `SupplementTaskScheduleEditor`로 방법·배정일·시간 controlled input을 분리했습니다. local draft와 dirty/save/notification state는 App이 계속 소유합니다.
- 12J에서 `SupplementTaskSaveSummary`와 일정 gate 안내를 분리해 diff/status→문구 편집→gate 안내 순서를 고정했습니다. 실제 action은 없습니다.
- 12K에서 `SupplementTaskCardHeader`로 유형·메타·결석 사유·연결 수업일지 등의 읽기 전용 표시를 분리했습니다.
- 12L에서 `SupplementTaskActionBar`를 callback-only로 분리했고 실제 결석 취소·저장·일정·완료 action은 App에 유지했습니다.
- 12M에서 `SupplementTaskCard`가 분리된 일곱 조각을 기존 순서로 조립하도록 묶었습니다. App은 계산값과 callback을 계속 소유합니다.
- 12N에서 알림 draft config, 선생님 최종본 판정, task→local draft, dirty/diff, source version/fingerprint, persistable 변환을 `supplementTaskDraft.js` 순수 모델로 분리했습니다. 메시지 생성 함수는 App에서 주입하며 state/API/Solapi는 이동하지 않았습니다.
- 12O에서 task 카드 원천 props, editor 값, 메타, diff 기반 저장 상태와 일정 gate 안내를 `supplementTaskCardModel.js` 순수 view-model로 분리했습니다. App은 local state/job 선택/action을 계속 소유합니다.
- 12P에서 알림 control config, 예약 차단, 과거 preview 차단, 대상 번호와 예약/취소 가능 여부를 `supplementNotificationControlModel.js` 순수 view-model로 분리했습니다. 실제 action과 job state는 App에 남았습니다.
- 12Q에서 학생 모달 바깥 구조·feedback·빈 상태·task stack·overlay slot을 `SupplementStudentModalShell.jsx` presentational shell로 분리했습니다. task map과 모든 state/action은 App에 남았습니다.
- 12R-1에서 local draft 필드 변경·자동 문구 재생성·dirty/edited field·저장 payload·lesson resync 계산을 `supplementTaskDraft.js` 순수 전환으로 분리했습니다. React state와 실제 action은 App에 남았습니다.
- 12R-2에서 task 목록과 draft collection의 dirty 보존·원천 reseed·동일 entry 재사용·삭제 정리를 순수 sync 함수로 분리했습니다. App effect는 state updater 호출만 소유합니다.
- 12R-3에서 draft 전용 state/effect와 get/update/mark/build를 `useSupplementTaskDraftController.js`로 옮겼습니다. 실제 저장·예약 action은 App에 남았습니다.
- 12R-4에서 보충 내용 저장 action을 `supplementTaskActions.js`로 옮기고 fixture/production/build 및 고태영 화면 gate를 통과했습니다. 사용자 저장·새로고침 뒤 AI가 고정 marker, 선생님 수정 필드, 예약 0건을 재조회했고 임시 task·수업·숙제를 모두 삭제해 0건으로 정리했습니다.
- 앞으로 AI가 저장 원천을 재대조할 수 있는 사람 gate는 격리 테스트 데이터와 고정 marker를 AI가 먼저 준비하고, 사용자에게 최소 화면 조작·금지 버튼을 안내한 뒤 AI가 저장·중복·외부 side effect와 정리를 직접 확인합니다.
- 12R-5에서 보충 완료 처리 UI action을 `supplementTaskActions.js`로 옮기고 production 385/385, build, 고태영 격리 재시험 화면 gate를 통과했습니다. AI가 task done, 원 record 불변, 알림 job 0건을 재대조했고 task·수업·record를 모두 0건으로 정리했습니다.
- 12R-6에서 결석 원천 취소 UI action을 `supplementTaskActions.js`로 옮기고 production 386/386, build, 고태영 격리 결석 화면 gate를 통과했습니다. AI가 record pending과 사유·시간 초기화, task/job 0건을 재대조했고 임시 수업·record를 모두 0건으로 정리했습니다.
- 12R-7에서 보충 일정 생성의 UI status/feedback/draft saved/confirm reset 순서를 `supplementTaskActions.js`로 옮기고 production 387/387, build, diff 검사를 통과했습니다. 실제 lesson/task/notification/Solapi callback은 App에 유지합니다.
- 12R-7은 사용자가 일정 생성·새로고침과 18시 학생·학부모 알림톡 2건 수신을 통과했습니다. 사용자가 남은 Solapi 예약을 처리한 뒤 AI가 OS row 3건 `canceled`를 확인했고, task·연결/원천 lesson·homework를 정리해 모두 0건으로 재조회했습니다. canceled 감사 row 3건은 보존합니다. 자동검증 후 12R-7을 commit/push하고 다음 의미 단위는 다시 최신 `origin/main` fetch/rebase로 시작합니다. 기존 사람 gate 3개는 통과로 바꾸지 않습니다.
- 12R-8에서 개별 알림 control의 예약/취소 중·성공·실패 feedback과 task status field 반영 순서를 `supplementTaskActions.js`로 옮겼습니다. 실제 notification API/Supabase/Solapi/React job state는 App이 주입하는 기존 callback에 남았습니다. deterministic 예약·취소·실패 fixture, production 388/388, build를 통과했고, 11B-9/12R-7의 동일 callback 실검수를 유지해 추가 유료 사람 gate는 생성하지 않습니다.
- 12R-9에서 보충 일정 요청의 일시 누락, 기존 일정 변경 확인, 신규 일정 생성 분기를 `requestSupplementScheduleAction`으로 옮겼습니다. App의 busy guard, draft payload, 실제 저장/예약 callback은 유지했고 production 389/389와 build를 통과했습니다. 12R-7 신규 일정 gate가 이미 통과해 추가 사람 gate는 없습니다.

통과한 11B-1 사람 gate 기록:
1. 삭제 가능한 미래 보충 task와 통제된 학생/학부모 전화번호를 준비합니다.
2. 학생 일정, 학부모 일정, 당일 학생 11시 알림톡을 각각 열어 대상, 예약시각, 저장된 선생님 최종 문구를 확인합니다.
3. 하나씩 예약하고 OS/Supabase `notification_jobs` row와 Solapi 예약 그룹의 type, recipient, scheduledAt, message를 대조합니다.
4. 하나씩 취소하고 OS와 Solapi 모두 취소됐는지 확인합니다.
5. 새로고침 후 상태 유지, 중복 row/group 없음, 학생/학부모 대상 교차 없음까지 확인합니다.
6. 하나라도 다르면 11B를 중단하고 원인과 유지보수 세션에 넘길 수정 범위를 정리합니다. 이번 11B-1에서는 모두 일치해 통과했습니다.

앞서 보류한 사람 gate도 통과로 간주하지 마세요:
- 학생 숙제 완료 저장/새로고침/재로그인/강사 미리보기 쓰기 차단
- 질문 추가/상태 변경/삭제/새로고침/재로그인/다른 학생 데이터 비노출
- 시험 후 기록 입력, 테스트 파일 제출, 부분 실패 정리, 새로고침/재로그인, 교사 확인 저장
- 교사 서버 서명 bearer session과 시험지 Storage 소유권 검증은 별도 보안 gate

사람이 11B gate 통과를 확인하면 한 번에 하나의 의미 단위만 진행하세요. `원천/동작 보존 -> 파일 분리 -> production test/build -> AI 검수 + 사람 gate -> 전용 브랜치 commit/push` 순서를 지킵니다. 기능 변경, 문구 변경, 운영 데이터 수정, 실제 발송/예약은 리팩터링에 섞지 마세요. 유지보수 main이 새로 바뀌면 다음 단위 전에 rebase하고, 충돌을 임의로 덮어쓰지 마세요.

새 세션 시작 초기에 사용자에게 `Solapi 특강 템플릿 검수가 완료됐나요?`도 확인하되, 이 리팩터링 세션에서는 완료 여부와 관계없이 템플릿 연결/테스트 발송을 하지 마세요.
```

## 유지보수 세션에 바로 붙여넣을 프롬프트

```text
Academy OS 운영 유지보수 전용 세션입니다. App.jsx 연속 리팩터링은 다른 별도 worktree/브랜치 세션에서 진행하므로 이 세션에서는 사용자 요청의 버그 수정, 저장 신뢰성, UI/운영 기능만 처리하세요.

Git 충돌 방지 규칙:
- 이 세션은 `E:\academy-os`의 `main` worktree와 `origin/main` 통합을 소유합니다.
- 리팩터링 세션은 별도 `E:\academy-os-refactor` 및 `codex/` 브랜치를 사용합니다. 리팩터링 브랜치 파일이나 worktree를 stage/commit/revert하지 마세요.
- 작업 시작/커밋 전 `git status --short`와 `git log -1 --oneline`을 확인하세요. 예상하지 못한 변경이 있으면 그것이 다른 세션 작업인지 먼저 구분하고, 임의로 덮거나 되돌리지 마세요.
- 유지보수 변경을 검증해 main에 commit/push한 뒤 리팩터링 세션이 최신 `origin/main`을 rebase하도록 커밋 해시와 겹친 파일을 알려주세요.
- 리팩터링 브랜치 통합은 사람 gate 통과와 최신 main 기준 전체 검증 후 이 세션 또는 사용자가 지정한 한 세션에서만 수행합니다.

작업 전에 반드시 아래를 읽고 현재 큐와 새 요청의 우선순위를 사용자에게 먼저 요약하세요.
1. AGENTS.md
2. docs/current-worklog.md
3. docs/next-session/README.md
4. docs/save-persistence-audit-2026-07-20.md
5. git status --short
6. git log -8 --oneline

공유 미룬 작업 큐:
1. 운영 OS 저장 신뢰성 보강
2. 모달 통일 작업
3. 발송 알림톡 템플릿 설정 관리
4. App.jsx 리팩터링 연속 작업 - 이 세션에서는 구현하지 않고 별도 세션에 넘김
5. Solapi 특강 템플릿 검수 후 연결

유지보수 원칙:
- 한 번에 하나의 요청만 처리하고 저장 원천, local draft, Supabase/app_state/API, 외부 side effect, 사람 gate를 먼저 정리하세요.
- App.jsx를 수정할 수는 있지만 기능 수정에 필요한 최소 범위로 제한하고, 이미 분리된 `supplementJobBuilders.js`, `notificationJobSelectors.js`, 포털 shell/component를 다시 App.jsx에 합치거나 구조 이동하지 마세요.
- API 성공과 필요한 Supabase 재조회 전에는 저장 완료를 표시하지 말고, 실패 시 사용자 draft와 모달을 유지하세요.
- 실제 Solapi 발송/예약/취소, 운영 데이터 삭제, 출결/수업일지 원천 변경은 삭제 가능한 테스트 데이터와 명시적 사람 gate 없이 실행하지 마세요.
- 유지보수 수정이 리팩터링 대상 코드와 겹치면 유지보수 변경을 main에 먼저 확정하고, 리팩터링 세션이 rebase할 수 있도록 변경 파일과 계약을 worklog에 남기세요.

현재 보류된 사람 검토를 통과로 바꾸지 마세요:
- 학생 숙제 완료, 질문 CRUD, 시험 후 제출의 실제 학생 저장/새로고침/재로그인/강사 미리보기 차단 및 교사 확인
- 보충 알림 11B의 학생 일정/학부모 일정/당일 학생 11시 OS `notification_jobs` row와 Solapi 그룹 예약·취소 대조
- 교사 bearer session과 시험지 Storage 소유권 검증 보안 gate

현재 UI 유지보수 사람 gate:
- 보충관리: 붉은 자동저장 경고가 사라졌고 상세의 세 저장/처리 버튼 및 상태 표시가 유지되는지 확인. 실제 예약/완료는 누르지 않음.
- 알림관리 개별 발송: 데스크톱에서 왼쪽 학생 목록과 오른쪽 작성 패널 하단 정렬, 작은 화면 내부 스크롤, compact 필터/집계/학생 카드 확인. 실제 발송/예약은 누르지 않음.
- 특강관리: 상단 상태 알림과 학생 연결/회차 설정 진입 확인. 오류 Tally 신청 삭제는 복구 불필요한 미연결 테스트 원본에서만 취소 확인 -> 실제 삭제 -> 새로고침 유지 순으로 검수. 연결된 신청/명단/lesson/출결/알림 예약이 바뀌면 즉시 중단.

새 세션 시작 초기에 사용자에게 `Solapi 특강 템플릿 검수가 완료됐나요?`를 확인하세요. 완료 전에는 임시 구조를 유지하고 템플릿 ID/변수 연결 또는 테스트 발송을 하지 마세요.

구현 후 범위에 맞는 production test/build, Supabase 재조회, 새로고침 유지까지 검증하고 `docs/current-worklog.md`를 갱신한 뒤 main에 commit/push하세요. 완료 답변에는 사람 검토 절차와 AI 자기검토를 포함하세요.
```

## 기존 전체맥락 통합 프롬프트

```text
E:\academy-os 작업을 이어가겠습니다.

먼저 아래 파일과 상태를 확인해주세요.
1. AGENTS.md
2. docs/current-worklog.md
3. docs/next-session/README.md
4. git status --short
5. git log -1 --oneline

중요:
코드를 바로 수정하지 말고, `AGENTS.md`와 `docs/current-worklog.md` 최상단의 `미룬 작업 큐`를 먼저 읽은 뒤 현재 미룬 작업과 새 요청의 우선순위를 짧게 정리해서 세션에 보여주세요.
다음 세션용 프롬프트에 일부 항목이 빠져 있어도, `AGENTS.md`와 `docs/current-worklog.md`의 큐에 있으면 계속 살아 있는 작업으로 취급해주세요.

현재 미룬 작업 우선순위:
1. 운영 OS 저장 신뢰성 보강
   - `docs/save-persistence-audit-2026-07-20.md` 전수조사 결과를 먼저 읽습니다.
   - 저장 로직과 UI를 함께 통일합니다. 공통 흐름은 `편집 중(미저장) -> 저장 중 -> 서버 반영 확인 중 -> 저장 완료/저장 실패`입니다.
   - API 성공과 필요한 Supabase 재조회 대조 전에는 `저장 완료`를 표시하지 않습니다. 실패 시 draft와 모달을 유지하고, 저장 버튼·상태 문구·중복 클릭 방지를 같은 형태로 적용합니다.
   - 새로고침·재로그인·다른 브라우저·Supabase 원본까지 일치해야 한 단위를 완료로 봅니다. 로직만 또는 UI만 바꾼 작업은 완료로 처리하지 않습니다.
   - 직접 저장 원천뿐 아니라 수업일지·달력·명단·포털 등 사용자가 버튼 문구로 기대하는 연결 결과까지 `저장·반영 계약`에 포함합니다. 연결 결과가 옛 값이면 원천 저장만 성공해도 완료가 아닙니다.
   - 첫 단위는 특강 회차 계획 저장과 안전한 미래 수업일지 명단 반영 통합입니다. enrollment와 lesson을 각각 저장·재조회하고 `원천 저장 중 -> 연결 반영 중 -> 반영 검증 중 -> 완료/부분 실패`를 같은 모달에 표시합니다.
   - 다음 단위는 수업 생성/수정/복사/취소 저장 gate입니다. API 완료 전에 모달/화면을 확정하지 않고 실패 시 draft를 유지합니다.
   - 이후 학생/반/Tally, app_state key별/version, examPrep/Tally 입력 경쟁, 숙제/포털/자료함/보고서, 보충/알림 reconcile, 비연결 버튼 순서입니다.
   - 실제 알림 발송, 운영 삭제, 출결/수업일지 원천 변경이 섞이면 중단하고 별도 사람 gate로 나눕니다.
2. 모달 통일 작업
   - 수업 생성/수업 상세/수업일지 관련 모달을 공통 구조로 정리합니다.
   - 숙제보충 등원보충 모달 1차 UI 정리, 결석보강 생성/상세 모달 1차 맥락 정리, 결석보강 알림톡 제목/본문 seed 정리, 실제 보강 수업 상세 화면과 생성 모달 문구 통일은 완료됐습니다.
   - 다음은 전체 모달 inventory와 공통 구조 통일 범위를 다시 정합니다.
   - 착수 전에 현재 모달 inventory, 저장 원천, 알림톡/Solapi/notification_jobs side effect, 수업일지/숙제/출결 연결을 먼저 표로 정리합니다.
   - 숙제보충/결석보충/정규수업/시험대비/특강의 맥락이 섞이면 안 됩니다.
   - 알림톡 예약/발송, 출결 저장, 수업일지 기록 원천이 같이 바뀌면 즉시 중단하고 별도 gate로 나눕니다.
3. 발송 알림톡 템플릿 설정 관리
   - 실제 발송/예약되는 모든 알림톡 템플릿과 문구 원천을 `설정 > 알림톡`에서 확인하고 수정할 수 있게 합니다.
   - 보충관리의 결석보강 학생 11시 리마인더, 숙제보충 학생 11시 리마인더, 보충 일정 확정 안내/변경 안내 문구는 `app_state.aiSettings.notificationTemplates` 원천으로 `설정 > 알림톡`에 노출 완료됐습니다.
   - 다음 후속으로 수업 알림톡/데일리 리포트의 `⭐ 보충/확인 안내` 블록 문구를 수정해야 합니다.
   - 착수 전에 현재 문구 후보, 프론트 미리보기 경로, 서버 발송 직전 refresh 경로, 설정 화면 노출 여부를 먼저 표로 정리합니다.
   - 출결, 수업일지, 숙제보충, 결석보강, 재시험, 공지, 특강, 일정 변경, 학생 11시 리마인더 등 Solapi 경로를 inventory로 정리합니다.
   - 실제 발송 문구가 설정 화면 미리보기/편집값과 다르거나 코드 상수만 수정해야 하는 구조면 즉시 중단하고 별도 gate로 나눕니다.
4. App.jsx 리팩터링 연속 작업
   - 한 번에 하나의 의미 단위만 진행합니다.
   - 순서는 `원천/동작 보존 -> 파일 분리 -> 검증 명령 -> AI 검수 결과 + 사람이 확인할 것 gate -> 커밋/푸시`입니다.
   - 기능 변경과 리팩터링 범위를 섞지 않습니다.
   - 아래 18개 기준 로드맵을 공통 후보 목록으로 사용합니다.
   - 9번 `test manager`, 10번 `student-parent portals` 읽기 전용 표시와 학생 쓰기 단위 세 개를 완료했습니다. 숙제 완료·질문 CRUD·시험 후 제출은 학생 bearer session 소유권, 전용 API, Supabase 재조회, local draft 보호와 패널 내부 상태를 사용합니다.
   - 실제 학생 사람 gate는 2026-07-21 사용자 지시로 결과 보류했습니다. 숙제 완료와 질문 추가/상태/삭제의 저장·새로고침 유지·강사 미리보기 차단은 미통과가 아니라 미실시 상태로 계속 기록합니다.
   - 10번 `student-parent portals` 표시 구조 리팩터링은 완료 audit까지 끝냈습니다. 학생 쓰기 사람 gate와 교사 bearer/Storage 권한 보안 gate는 별도 보류입니다.
- 11번 `supplement job builders` inventory는 `docs/refactor-supplement-job-builders-inventory-2026-07-21.md`에 있습니다. 11A에서 예약시각·ID·job payload builder와 현재 job selector를 각각 `supplementJobBuilders.js`, `notificationJobSelectors.js`로 분리했고, 11B-1에서 예약·취소 API 어댑터를 `notificationJobApi.js`로 분리했습니다. OS row와 Solapi 그룹 사람 gate도 통과했으며 다음 11B 단위는 별도 범위·gate 확정 후 진행합니다.
5. Solapi 특강 템플릿 검수 후 연결
   - 새 세션 시작 초기에 사용자에게 `Solapi 특강 템플릿 검수가 완료됐나요?`를 먼저 확인합니다.
   - 검수 완료 전에는 임시 특강 알림톡 구조를 유지합니다.
   - 검수 완료 확인 후에만 템플릿 ID/변수 연결, 테스트 데이터 발송, 링크/문구 검수를 진행합니다.

App.jsx 리팩터링 18개 기준 로드맵:
1. `specialLecture helpers/config` - 특강 안내문 계산, URL, 회차 normalize, Tally query helper.
2. `shared UI primitives` - `InlineSaveStatus`, `MetricCard`, `Modal`, `EmptyState`, 단순 카드/상태 표시 컴포넌트.
3. `API client wrappers` - `fetchJson`, `getJsonWithTimeout`, `postJsonWithTimeout`, 공통 API 에러/timeout 처리.
4. `storageKeys/config/constants` - storage key, view id, option list, 상수/설정 묶음.
5. `specialLecture preview/public` - 특강 공개 안내문 미리보기, 공개 URL 렌더링, 복사 문구.
6. `specialLecture management` - Lesson Hub > 특강관리 편집 화면, 확정 명단, 특강 수업 생성 gate.
7. `school calendar helpers` - 학사일정/시험기간 날짜 계산, 표시 색상, 월간 요약 helper.
8. `school calendar components` - 학사일정 카드/달력/모달 UI.
9. `test manager` - 시험지관리, 테스트 회차, 학생별 테스트 결과 입력/조회.
10. `student-parent portals` - 학생/학부모 포털, 공개 링크, 모바일 표시 컴포넌트.
11. `supplement job builders` - 숙제보충/결석보강 11시 예약, 일정 변경 알림, `notification_jobs` payload 생성.
12. `supplement center/modals` - 보충관리 화면, 숙제보충/결석보강 상세, 완료 처리.
13. `notification center` - 일반공지, 알림톡 관리, Solapi 발송/예약/결과 확인 UI.
14. `exam prep center` - 시험관리, 직전수업/시험대비 후보, 실제 수업 반영 gate.
15. `lesson hub/calendar` - 수업 달력, 수업 생성/수정/상세 모달, 자동 후보 표시.
16. `attendance` - 출결 입력, 태블릿/수업일지 출결 패널, 등하원 알림톡 연결.
17. `LessonJournalDetail` - 수업일지 상세, 학생별 기록, 숙제/코멘트/알림톡 미리보기.
18. `App shell/hooks/context` - App 초기화, activeView 라우팅, 전역 상태/context/hooks 분리.

현재 리팩터링 이어받을 지점:
- 9번 `test manager`는 완료됐습니다. 10번 `student-parent portals` 저위험 표시 영역, 학생/학부모 숙제 탭, 학생 마이페이지 분리까지 완료했습니다.
- 6번 `specialLecture management` 분리 완료.
- 7번 `school calendar helpers` 분리 완료.
- 8번 `school calendar components` 분리 완료.
- 9번 `test manager` 완료: `src/domains/tests/testManagerUtils.js`와 `TestManagerPanels.jsx`에 탭/header/form grid/meta/table/action/recent session list/student history panel 분리 완료.
- 확인된 후속 이슈: 학생 포털 `비밀번호 변경`은 callback/API 없는 기존 미연결 UI입니다. 이번 리팩터링에서는 보존했고 오작동 버튼 정리에서 별도 결정합니다.
- 실제 최신 커밋은 새 세션에서 반드시 `git log -1 --oneline`으로 다시 확인하세요.

오늘/최근 완료된 작업:
1. 특강 선개설·Tally/수동 명단·학생별 회차/진행 모달
   - 특강관리 페이지 제목 바로 아래의 상위 탭을 `특강 수업`과 `특강 안내문`으로 분리했고, `특강 수업`을 첫 탭이자 기본 진입 화면으로 둬 안내문 편집기와 운영 명단이 한 페이지에 길게 이어지지 않음.
   - 공통수학2 카드를 선택할 때만 발생하던 `getSpecialLectureGuideSlug is not defined` 빈 화면 오류는 누락 import를 연결해 수정함. 첫 특강의 확정 명단 조건이 단축 평가되어 자동 테스트에서 숨었던 경로이므로 두 번째 카드 운영 클릭을 별도 gate로 유지함.
   - Tally 자동 매칭 실패는 더 이상 곧바로 오류로 보지 않음. 전체 반 학생 검색에서 직접 연결할 수 있고, Academy OS 학생 원천에 없는 외부/다른 반 신청자는 명시적 버튼으로 미배정 `특강 전용 학생` 등록 후 연결함. 확정 연결 원천은 `special_lecture_enrollments.application_id + student_id`이며 정규반 수업에는 자동 추가하지 않음.
   - 특강 공식 회차 lesson을 학생 없이 먼저 개설하고, 이후 Tally 또는 수동 체크 접수 학생을 미래 회차 명단에 반영할 수 있음.
   - Tally 확정과 수동 접수는 같은 학생별 회차 설정 모달을 사용하며, 미확정 학생은 lesson 명단에 들어가지 않음.
   - 학생별 `진행 보기` 모달은 특강관리 안에서 회차별 출결/진도/과제를 기존 `lesson_student_records`로 조회하고 실제 수정은 해당 특강 수업일지로 연결함.
   - 학생별 회차 설정 모달은 하단에서 `변경됨 -> 저장 중 -> 저장 완료/실패`를 직접 표시함. POST 응답만으로 완료하지 않고 Supabase 명단을 `no-store` 재조회해 회차/시간/상태/메모가 수정본과 일치할 때만 `새로고침 후에도 유지됩니다`로 완료 처리함.
   - 오늘/과거·완료·기록 존재·대기 알림 예약 존재 회차는 자동 명단 변경을 잠그고, `남은 회차 제외`는 과거 이력을 보존함.
   - 새 SQL 없음. 최신 특강 선택/상위 탭 회귀 검증은 `npm run test:production` 320개, `npm run build`, 두 번째 특강 카드 클릭 직접 검증, `git diff --check`를 통과.
2. 특강 학생별 회차/시간 확정과 회차별 단일 수업일지
   - 공식 날짜는 옮기지 않고 학생마다 수강 회차와 실제 시간을 수정·저장할 수 있음.
   - 같은 공식 회차는 수업일지 하나를 사용하며, 그 회차 수강 학생만 명단에 표시하고 시간 조정 학생은 개별 시간을 표시함.
   - 다른 정규반 학생도 전체 학생 원천에서 매칭 가능함. 반 소속으로 제한하지 않음.
   - 사용자가 `supabase/20260718_special_lecture_enrollment_session_plans.sql`, `supabase/20260718_special_lecture_tally_session_requests.sql`을 운영 SQL Editor에 적용 완료함.
   - 최종 수업일지 반영은 특강별 인원, 학생별 수업 시수/시간, 최종 반 구성이 모두 확정된 뒤 한 번에 진행함. 그전에는 신규 특강 수업을 생성하지 않음.
   - 커밋: `e643b7cf`, `6e06629a`, `1d15240b`
3. Tally 신청 원천과 교사 확정 gate
   - 고정 폼은 `https://tally.so/forms/eql9aJ/edit` / 공개 폼 `https://tally.so/r/eql9aJ`.
   - Tally 회차/시간은 신청 초안이며, 특강관리에서 교사가 최종 수정·저장한 `special_lecture_enrollments.session_plans`가 수업 생성 원천임.
   - 신청 카드에서 잘못 연결된 특강을 `연결 특강 -> 연결 수정 저장`으로 고칠 수 있음. 이미 확정 명단이 있으면 자동 이동을 차단함.
   - `status=canceled` 신청은 화면/건수/미매칭/확정 gate에서 숨기되 Supabase row는 이력으로 보존함.
   - 커밋: `8cb22d7c`, `0f59364b`
4. 학부모 수업 알림톡의 보충 안내를 발생 수업 당일로 제한
   - 원인: `linkedLessonId`가 존재하는 보충 task가 학생의 이후 모든 수업 알림톡에 반복 포함됨.
   - 수정: 프론트 미리보기와 서버 발송 직전 refresh 모두 `task.sourceLessonId === lesson.lessonId`일 때만 `⭐ 보충/확인 안내`를 포함함.
   - 예: 7월 16일 발생한 7월 17일 등원보충 안내는 7월 16일 수업 알림톡에만 나타나고 17일 보충수업/18일 이후 정규수업에는 나타나지 않음.
   - 7월 18일 김한영 운영 예약은 확인 시 `payload.supplementSchedule=""`, 기존 문구가 `previewBody`에 없음. 다만 OS status는 과거 시각인데도 `scheduled`로 남아 있어 필요하면 알림관리 `Solapi 결과 확인`으로 실제 결과를 대조함.
   - 문구 템플릿, `notification_jobs` 예약 자체, Solapi 예약/발송, 출결 저장은 변경하지 않음.
   - 기능 커밋: `e114a9ea`; 기록 커밋: `4692f7d6`
5. 계속 유효한 최근 운영 수정
   - 운영 프론트 API base fallback 복구: `ae49ea74`
   - 보충 생성 모달 결석 처리 취소: `db047b39`
   - 운영 알림 반 대상 추가: `888d5c41`
   - 알림관리 Solapi 발송결과 직접 대조, 공지 테스트 발송 제거, 보충 최초 확정/변경 안내 분리는 `docs/current-worklog.md` 상세 기록을 따름.
6. `⭐ 보충/확인 안내` 문구 수정 후속은 여전히 미완료
   - 이번에 고친 것은 포함되는 수업 범위이며 실제 문구/템플릿은 바꾸지 않았음.
   - 다음 착수 전 프론트 미리보기, 서버 발송 직전 refresh, Solapi route body 원천과 설정 화면 노출 여부를 표로 정리해야 함.

최신 검증 결과:
- `node --check api/server.js`, `node --check api/routes/coreData.js`, `node --check api/routes/notifications.js`, `node --check scripts/scenario-tests-production.cjs` 통과
- 보충 안내 source lesson fixture 직접 assertion 통과
- `node scripts/scenario-tests-production.cjs` 통과, 317개
- `npm run test:production` 통과, 317개
- `npm run build` 통과, 기존 Vite chunk size 경고만 남음
- `git diff --check` 통과
- 참고: `node --check src/app/App.jsx`는 Node가 `.jsx` 확장자를 직접 검사하지 못해 도구 한계로 실패할 수 있음. JSX 검사는 Vite build로 확인.

다음 세션 주의사항:
- 사용자가 명시적으로 요청하기 전까지 새 시험대비 수업을 생성/반영하지 마세요. 아직 시험대비를 시작하지 않았습니다.
- 나중에 시험대비를 실제로 시작할 때는 `시험관리/학사일정`의 자동 수업 후보에서 필요한 항목만 반영합니다.
- 이미 수동삭제한 시험대비 후보가 필요해지면 `제외 해제` 가능 여부를 먼저 확인합니다.
- 저장 전 자동 후보가 실제 수업처럼 달력에 보여 헷갈리는 문제가 계속되면 `시험대비 자동 후보와 실제 저장 수업 표시 분리`를 별도 UI 개선 작업으로 제안하세요.
- `.codex-temp/`, `.env`, PDF/HWP/HWPX/ZIP/대용량 자료, Slack/Supabase/Solapi/Tally/OpenAI 등 비밀값은 커밋하지 마세요.
- 운영 Supabase SQL edit 적용은 사용자가 직접 합니다. SQL 자동 적용을 위해 DB URL, DB password, access token을 묻지 않습니다.
- 특강 SQL 2개는 이미 적용 완료됐으므로 재적용을 요청하지 마세요.
- 최종 특강 수업일지 생성은 인원/회차/시간/최종 반이 모두 확정됐다는 사용자 확인 전에는 실행하지 마세요.
- 작업 완료 답변에는 `사람 검토 절차`와 `AI 자기검토`를 포함합니다.
```

## Handoff Notes

- 미룬 작업 큐의 source of truth는 `AGENTS.md` 최상단과 `docs/current-worklog.md` 최상단입니다.
- App.jsx 리팩터링 18개 기준 로드맵은 `AGENTS.md`, `docs/current-worklog.md`, 이 README에 함께 기록되어 있습니다.
- 10번 포털의 세 학생 쓰기 단위는 저장 신뢰성 보강을 완료했습니다. 숙제 완료, 질문 CRUD, 시험 후 제출이 각각 학생 bearer session 소유권, 전용 API, Supabase 재조회, 패널 내부 상태, 실패 시 draft 보호를 사용합니다. 시험 후 제출은 Storage 전부 성공 후에만 `app_state.examPostSubmissions`를 만들며 부분 실패 시 성공 업로드분을 정리합니다.
- 사람 검수는 사용자 지시로 보류 상태입니다. 숙제 완료·질문 CRUD·시험 후 제출의 실제 학생 저장/새로고침/재로그인/강사 미리보기 차단과 교사 확인 저장을 나중에 검수해야 하며, 보류는 통과가 아닙니다.
- 10번 `student-parent portals` 표시 구조 리팩터링은 완료 audit까지 끝났습니다. shell은 화면 조합만 담당하고 `StudentPortalV2` controller가 파생 데이터·상태·쓰기 권한/callback을 계속 소유합니다. 교사 확인 API와 시험지 Storage 열기 권한은 별도 고위험 gate입니다.
- 다음 리팩터링 시작점은 `docs/refactor-supplement-job-builders-inventory-2026-07-21.md`의 11B-1 통과 기록 다음입니다. 예약·취소 API 어댑터까지 분리했으므로, 다음 11B 의미 단위의 원천·외부 side effect·추가 사람 gate 필요 여부를 먼저 정하고 한 단위만 진행하세요.
- 최신 기능 커밋은 작업 시작 시 반드시 `git log -1 --oneline`으로 다시 확인하세요. 이 README의 해시는 작업 중 변경될 수 있습니다.
- 현재 로컬에 남을 수 있는 미추적 항목: `.codex-temp/`. 커밋하지 않습니다.
