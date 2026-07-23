# Academy OS 다음 운영 유지보수 세션 프롬프트

아래 코드 블록 전체를 새 Codex 유지보수 세션의 첫 메시지로 붙여넣습니다.

```text
Academy OS 운영 유지보수 전용 세션입니다.

현재 리팩터링, 운영 유지보수, 시험분석이 서로 다른 세션에서 움직이고 있으며 앞으로 코딩 에이전트를 더 확장할 계획입니다. 이 세션은 사용자 요청의 버그 수정, 저장 신뢰성, UI 및 운영 기능과 검수된 브랜치의 main 통합만 담당합니다. App.jsx 의미 단위 분리와 시험분석 전용 기능 개발은 구현하지 마세요.

세션 및 Git 소유권:
- 유지보수 main owner: `E:\academy-os`, branch `main`, `origin/main` 통합과 운영 배포를 소유합니다.
- 리팩터링: `E:\academy-os-refactor`, `codex/refactor-supplement-11b` 또는 사용자 지정 `codex/` 브랜치만 사용합니다.
- 시험분석: `E:\academy-os-exam-analysis`, `codex/exam-analysis-gpt-image` 또는 사용자 지정 전용 브랜치만 사용합니다.
- 같은 worktree/index를 두 세션이나 두 에이전트가 공유하면 안 됩니다.
- 이 새 유지보수 세션이 main owner가 되기 전, 기존 유지보수 세션이 작업을 마쳤고 소유권을 넘겼는지 확인하세요. 다른 유지보수 세션이 아직 main을 쓰고 있으면 코드를 수정하지 말고 read-only 상태 확인만 하세요.
- 리팩터링/시험분석 worktree와 브랜치를 수정·stage·commit·revert하지 마세요.
- main 통합 담당은 항상 한 세션/에이전트만 둡니다. 사람 gate 없는 리팩터링이나 시험분석 변경을 main에 합치지 마세요.

작업 시작 및 커밋 직전:
1. `git status --short`
2. `git log -8 --oneline`
3. `git branch --show-current`
4. 예상하지 못한 diff/staged 파일/새 commit이 있으면 다른 세션 작업인지 먼저 확인
5. 다른 세션 변경을 임의로 덮거나 되돌리지 않기

먼저 반드시 전부 읽으세요:
1. AGENTS.md
2. docs/current-worklog.md
3. docs/next-session/README.md
4. docs/next-session/maintenance-session-prompt-2026-07-23.md
5. docs/save-persistence-audit-2026-07-20.md
6. docs/home-codex-setup.md
7. 관련 화면 코드/API/SQL

읽은 뒤 코드를 수정하기 전에 사용자에게 아래를 짧게 먼저 보여주세요:
- 현재 main 최신 commit과 clean/dirty 상태
- 공유 미룬 작업 큐
- 다른 세션이 소유한 범위
- 이번 새 요청 또는 첫 gate의 우선순위
- 저장 원천, local draft, API/Supabase, 외부 side effect, 사람 gate, AI 자동검증 범위

공유 미룬 작업 큐:
1. 운영 OS 저장 신뢰성 보강
2. 모달 통일
3. 발송 알림톡 템플릿 설정 관리
4. App.jsx 리팩터링 연속 작업 — 이 세션에서는 구현하지 않음
5. Solapi 특강 템플릿 검수 후 연결
6. 시험분석 슬라이드별 상세 프롬프트 시스템 — 시험분석 전용 세션 소유

새 세션 시작 초기에 반드시 사용자에게 질문하세요:
`Solapi 특강 템플릿 검수가 완료됐나요?`
완료 답변 전에는 임시 특강 알림톡 구조를 유지하고 템플릿 ID/변수 연결, 테스트 발송, 링크/문구 검수를 하지 마세요.

현재 main 기준:
- 이 프롬프트 작성 시 최신 main은 `0ced3d32 Add safe special lecture cancellation flow`입니다. 시작할 때 반드시 다시 확인하고 최신 `origin/main`이 다르면 최신 상태를 기준으로 판단하세요.
- 수업메모 저장 검증 기능 commit은 `5b6b98c2`, 배포 marker는 `05ed38b0`, 배포 기록은 `a8890a02`입니다.
- 시험분석 GPT Image 프롬프트 제작실 I1~I7은 `c75b1820`에서 main에 통합됐습니다. 실제 화면/Supabase 사람 gate는 시험분석 전용 세션에서 진행하며 유지보수 세션이 기능을 확장하지 않습니다.
- 특강 부분·전체 취소 흐름은 `0ced3d32`에서 구현됐고 운영 화면 사람 gate 대기입니다.
- `.codex-temp/`는 미추적 상태로 남을 수 있으며 commit하지 않습니다.

첫 번째 유지보수 gate — 수업메모 저장 재조회:
- 수업메모 저장은 `lesson_student_records.preparation_memo`, 학생/학부모 작성창 가져오기 2개, 이전 메모 확인 3개를 저장합니다.
- 학생·학부모 최종 문구는 각각 `student_comment/teacher_comment`이며 작성창의 `최종 문구 저장`을 눌러야 바뀝니다.
- 수업메모/최종 문구 저장만으로 기존 `notification_jobs` 또는 Solapi 그룹은 자동 변경되지 않습니다.
- 사람이 `Solapi 예약 업데이트`를 눌러야 실제 예약이 변경됩니다.
- 서버와 프론트는 수업메모, 가져오기 2개, 이전 확인 3개, 숙제 후속처리 3개를 Supabase 재조회 row와 대조합니다.
- 운영 프론트 배포 확인 asset은 작업 당시 `/assets/main-Dal08OQB.js`, Render marker는 `/health.features.lessonMemoSaveVerification=memo_flags_ack_requery`였습니다. 새 세션에서는 최신 asset/marker를 다시 확인하세요.

수업메모 사람 gate:
1. 삭제 가능한 미래 테스트 수업과 테스트 학생 한 명을 사용합니다.
2. 수업메모와 학생·학부모 가져오기 체크를 변경해 저장합니다.
3. `저장 완료` 확인 후 새로고침합니다.
4. 메모와 두 체크가 정확히 유지돼야 합니다.
5. 확인할 이전 메모가 있는 학생에서 `확인 후 숨기기`를 누릅니다.
6. 저장 완료 후 새로고침해 `!`가 다시 나타나지 않아야 합니다.
7. 학생·학부모 최종 문구와 기존 Solapi 예약이 바뀌지 않았는지 확인합니다.
8. 실제 발송·예약·취소는 이 gate에서 실행하지 않습니다.

수업메모 gate 중단 조건:
- 저장 완료인데 새로고침 후 메모/체크/확인값이 되돌아옴
- 저장 실패 시 draft 또는 모달이 사라짐
- 같은 시각의 `Z/+00:00` 표현 차이만으로 저장 실패
- 수업메모 저장만으로 학생·학부모 최종 문구 변경
- notification job 또는 Solapi 그룹 생성·변경·취소

수업메모 gate가 통과한 경우에만 다음 보강을 한 번에 하나씩 진행하세요:
1. 이전 메모 확인 범위를 수업 연속성 그룹별로 제한할지 결정하고 잘못 확인한 메모 다시 표시 기능 설계
2. X 닫기와 저장/변경 취소 의미 분리
3. 새로고침·탭 종료에 대비한 미저장 draft 복구
4. 다중 탭/기기의 updatedAt 또는 version 충돌 방지
5. `!` 의미와 긴 안내문 compact화

다음 보강 1번을 코딩하기 전에 먼저 표로 정리하세요:
- 현재 acknowledgement 원천 필드
- cutoff가 학생 전체/정규반/특강 track 중 어디에 적용되는지
- 정규반 이동 첫 수업의 직전 한 건 연결을 어떻게 보존할지
- 특강·시험대비·다른 정규반 메모가 섞이거나 숨겨질 위험
- 잘못 확인한 메모 복구 시 어떤 필드를 초기화/변경할지
- 운영 과거 확인 20건을 마이그레이션할지 그대로 호환할지
- local draft/API/Supabase 재조회 범위
- notification_jobs/Solapi side effect가 0인지
- 사람 gate와 중단 조건

필터나 fallback을 여러 겹 덧대지 마세요. 기존 acknowledgement 데이터와 수업 continuity key가 의미적으로 충돌하면 코드 수정 전에 `그룹별 새 필드/마이그레이션/기존 데이터 보존` 중 어떤 구조가 맞는지 사용자에게 설명하고 사람 결정을 받으세요.

특강 취소 사람 gate도 보류 상태입니다:
- `Lesson Hub > 특강관리 > 특강 수업 > 특강 명단 펼치기`
- 활성 카드의 `남은 회차 취소`, `특강 신청 전체 취소` 확인
- 확인창 취소 시 변화 없음
- 삭제 가능한 테스트 enrollment로 실제 취소 후 `취소·오입력 기록` 이동 및 새로고침 유지
- 미래 회차는 별도 `특강 수업일지 반영` 후에만 미래 lesson에서 제외
- 과거/오늘 수업, 출결, 수업기록, notification_jobs, Solapi, Tally 원본은 변경 금지
수업메모 gate와 특강 취소 gate를 같은 작업으로 실행하지 말고 사용자 우선순위에 따라 하나만 진행하세요.

리팩터링 세션 보류:
- `E:\academy-os-refactor`의 11B는 학생 일정·학부모 일정·학생 11시 알림의 OS `notification_jobs` row와 Solapi 그룹 예약·취소 사람 대조 전에는 시작/통합 금지
- 학생 숙제 완료, 질문 CRUD, 시험 후 제출 실제 학생 gate는 보류이며 통과가 아님
- 교사 bearer session과 시험지 Storage 소유권 검증은 별도 고위험 보안 gate
- 유지보수로 App.jsx/API/shared test가 바뀌면 main에 먼저 commit/push하고 리팩터링 세션에 commit hash와 겹친 파일을 알림

시험분석 세션 보류:
- GPT Image 프롬프트 제작실은 main에 통합됐지만 운영 사람 gate가 남아 있습니다.
- 시험분석 전용 세션에서 테스트 run의 저장→Supabase 재조회→새로고침, 복사, TXT/JSON, 화면 밀도와 모바일을 검수합니다.
- 유지보수 세션은 시험분석 기능 확장, 유료 GPT Image 호출, 이미지 DB/Storage 자동 제작실을 구현하지 않습니다.
- 시험분석 브랜치 통합은 최신 main rebase, 전체 production test/build, 사람 gate 후 단일 통합 owner만 수행합니다.

향후 코딩 에이전트 확장 계약:
- 에이전트마다 task ID, owner, worktree, branch, base commit, 허용 파일, 금지 파일, 저장 원천, 외부 side effect, 테스트 명령, 사람 gate를 먼저 문서화합니다.
- 한 파일을 여러 에이전트가 동시에 수정하지 않습니다. `App.jsx`, `App.css`, `package.json`, production scenario test, AGENTS.md, current-worklog, next-session README는 특히 단일 owner 파일로 취급합니다.
- 각 에이전트는 전용 브랜치만 commit/push합니다. main 통합 에이전트는 한 명만 둡니다.
- 에이전트 완료는 `코드 완료`와 `사람 gate 통과`를 분리합니다. 사람 gate 보류 브랜치는 자동 병합하지 않습니다.
- 운영 데이터 삭제, 실제 Solapi 발송/예약/취소, 유료 AI 호출, Storage 소유권 변경은 코드 에이전트가 위임받았다는 이유만으로 실행하지 않습니다. 테스트 데이터와 명시적 사람 승인이 별도로 필요합니다.
- main이 바뀌면 새 작업 단위 시작 전에 `git fetch origin`과 rebase를 수행합니다. 충돌을 임의로 해결하거나 유지보수 변경을 과거 코드로 되돌리지 않습니다.
- 통합 전 최신 origin/main 기준으로 production test/build를 다시 실행하고, 저장 원천 재조회와 배포 asset/health marker를 확인합니다.

유지보수 구현 원칙:
- 한 번에 하나의 요청만 처리합니다.
- 착수 전에 저장 원천, local draft, Supabase/app_state/API, 연결 소비 원천, 외부 side effect, 사람 gate를 정리합니다.
- App.jsx 수정은 기능 수정에 필요한 최소 범위로 제한합니다.
- 이미 분리된 supplementJobBuilders.js, notificationJobSelectors.js, 포털 컴포넌트를 다시 App.jsx로 합치지 않습니다.
- API 성공과 필요한 Supabase 재조회 전에는 저장 완료를 표시하지 않습니다.
- 실패하면 사용자 draft와 모달을 유지합니다.
- 실제 Solapi 발송·예약·취소, 운영 데이터 삭제, 출결·수업일지 원천 변경은 테스트 데이터와 사람 gate 없이 실행하지 않습니다.
- DB 스키마 변경은 `supabase/<file>.sql`로 만들고 운영 SQL Editor 적용은 사용자에게 맡깁니다.
- 운영 URL에서 보이는 결과와 로컬 코드가 다르면 운영 asset, 최신 commit, 배포/캐시 상태를 확인합니다.

구현 후:
1. 범위에 맞는 `node --check`
2. `git diff --check`
3. `npm run test:production`
4. `npm run build`
5. 필요한 Supabase read-after-write와 새로고침 유지
6. 운영 Vercel asset과 Render health/feature marker
7. docs/current-worklog.md 갱신
8. 커밋 직전 git status/log 재확인
9. main commit/push
10. 리팩터링·시험분석 세션에 base commit과 겹친 파일 전달

완료 답변에는 반드시 아래를 포함하세요:
- 실제 해결 결과와 미룬 항목 구분
- 최신 commit과 배포 확인
- 저장 원천/local draft/API 재조회/외부 side effect
- AI 자기검토
- 단계별 사람 검토 절차
- 실패/중단 조건
- 다음 세션/에이전트가 rebase할 commit과 겹친 파일
```
