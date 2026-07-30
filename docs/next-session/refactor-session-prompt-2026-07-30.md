# Academy OS App.jsx 리팩터링 재개 프롬프트 — 2026-07-30

아래 코드 블록 전체를 새 Codex 세션에 붙여넣는다.

```text
Academy OS App.jsx 리팩터링 전용 세션입니다.

공유 미룬 작업 큐(source of truth):
1. 운영 OS 저장 신뢰성 보강
2. 전체 UI 규칙 통일 프로그램 — UI-0~UI-9 완료
3. 모달 통일 작업
4. 발송 알림톡 템플릿 설정 관리
5. App.jsx 리팩터링 연속 작업
6. 시험분석 슬라이드별 상세 프롬프트 시스템
7. 월별 정규 수업 정산·특강 전체과정 정산

이 세션의 소유권은 5번 App.jsx 리팩터링뿐입니다. 다른 큐의 기능 수정이나 운영 데이터 보정은 구현하지 말고 유지보수 세션에 넘길 진단만 기록하세요.

현재 사람 gate:
- 전역 자동 요청 gate는 없습니다.
- 학생 포털 실제 쓰기와 Solapi 특강 템플릿 검수는 사용자 지시로 현재 목록에서 제거됐습니다. 자동으로 다시 묻거나 실행하지 마세요.
- 교사 bearer·Storage 소유권 보안은 실제 배포 검증까지 완료됐습니다.
- 리팩터링 브랜치에는 11B 학생 일정·학부모 일정·당일 학생 11시 OS/Supabase row와 Solapi 그룹 예약·취소 대조 통과 기록이 있습니다. 11B-1~13도 완료됐으므로 동일한 실제 예약·취소를 자동으로 반복하지 마세요.
- 단, 최신 main rebase에서 recipient, notificationType, scheduledAt, message, fingerprint, reserve/cancel API 또는 OS/Solapi 상태 계약에 충돌·변경이 발견되면 코드를 옮기지 말고 어떤 최소 운영 gate를 다시 확인해야 하는지 보고하세요.

작업 소유권과 Git 경계:
- 반드시 `E:\academy-os-refactor` worktree만 사용합니다.
- 브랜치는 `codex/refactor-supplement-11b`입니다.
- `E:\academy-os` main worktree는 유지보수 세션 소유입니다. 그 폴더의 파일, index, 사용자 소유 `.codex-temp/`를 수정·stage·commit·revert하지 마세요.
- 전용 브랜치만 commit/push합니다. main merge/push와 Vercel 수동 재배포는 하지 마세요.
- 다른 세션 변경을 덮어쓰거나 과거 구현으로 되돌리지 마세요.

현재 기준 상태:
- 유지보수 main/Production 기준 커밋: `0001e5fe7 docs: close ui unification program`
- UI-0~UI-9 완료, production 정적 시나리오 529/529, build 128 modules, Vercel Production 반영 완료입니다.
- 리팩터링 branch HEAD/upstream: `d106a2968 Preserve notification tests after main rebase`
- 확인 시점 branch는 clean, upstream과 일치, `origin/main` 대비 362 ahead / 134 behind이며 rebase/merge/cherry-pick 진행 표시는 없습니다.
- 브랜치에는 11B-1~13 이후 supplement center, notification center, 시험대비, 수업일지, 출결, Lesson Hub/달력, notification state, generated lesson 관련 다수의 순수 분리가 이미 있습니다. 이미 끝난 코드를 다시 만들지 마세요.
- 실제 일시 중지점은 `17BA-1 generated lesson plan builder inventory` 완료 후입니다.
- 다음 구현은 `17BA-2 generated lesson plan builder extraction`입니다.

가장 먼저 아래를 전부 읽으세요:
1. `E:\academy-os-refactor\AGENTS.md`
2. `E:\academy-os-refactor\docs\current-worklog.md`의 최신 `17BA-1`과 `refactor branch main rebase integration and pause`
3. `E:\academy-os-refactor\docs\next-session\README.md`
4. `E:\academy-os-refactor\docs\refactor-supplement-job-builders-inventory-2026-07-21.md`
5. `E:\academy-os-refactor\scripts\test-generated-lesson-plan-builder-inventory.mjs`
6. `E:\academy-os-refactor\src\app\App.jsx`의 `buildGeneratedLessonPlan` 정의와 소비부
7. `git status --short`
8. `git log -12 --oneline`
9. `git rev-list --left-right --count HEAD...origin/main`

읽은 뒤 사용자에게 먼저 짧게 보고하세요:
- 현재 branch/worktree가 clean인지
- 최신 main 대비 ahead/behind
- 전역 사람 gate 0건과 11B gate 통과 기록
- 이번 단위가 17BA-2이며 저장 원천·외부 side effect를 건드리지 않는다는 점
- 충돌이 없을 때 실행할 AI 검수 명령

Phase 0 — 최신 main 동기화:
1. `git fetch origin`을 실행합니다.
2. clean 상태와 upstream을 다시 확인합니다.
3. 최신 `origin/main` 위로 전용 브랜치를 rebase합니다.
4. 예상하지 못한 변경이나 충돌이 나오면 임의로 ours/theirs 전체 선택, commit drop/skip, merge로 우회하지 말고 즉시 중단해 충돌 파일과 양쪽 의도를 보고하세요.
5. 충돌 없이 rebase가 끝나면 다음 검사를 먼저 통과시킵니다.
   - `node scripts/test-generated-lesson-plan-builder-inventory.mjs`
   - `npm run test:production`
   - `npm run build`
   - `git diff --check`
6. rebase와 검증이 모두 성공한 경우에만 전용 브랜치를 `--force-with-lease`로 갱신합니다. main에는 push하지 마세요.

Phase 1 — 17BA-2 한 단위 구현:
- 목표: 현재 App.jsx의 순수 `buildGeneratedLessonPlan`만 별도 lesson-domain 모듈로 분리합니다.
- 입력 원천: generated lesson plan rows, 현재 lessons, students, generated lesson controls와 현재 함수가 사용하는 명시적 helper 의존성입니다.
- 반환 계약: 기존 candidate 순서와 `create/update/synced/skipped/protected`, suppressed/manual override 우선순위, 기존 lessonId 보존을 그대로 유지합니다.
- App.jsx는 useMemo, React state, helper 주입과 실제 repair/persist/save 소비를 계속 소유합니다.
- 새 모듈에는 fetch/postJson, Supabase/app_state, notification_jobs, Solapi, React setter/effect, lesson bulk save를 넣지 마세요.
- 기능·문구·UI·데이터 shape를 바꾸지 말고 파일 분리만 합니다.
- `17BA-1` fixture의 TARGET/CONTROL을 그대로 통과시키고, 추출 모듈 import/export/call 계약을 추가로 고정합니다.

17BA-2 검수:
- `node scripts/test-generated-lesson-plan-builder-inventory.mjs`
- 관련 새 deterministic fixture
- `npm run test:production`
- `npm run build`
- `git diff --check`
- `git status --short`
- `git diff --stat`과 실제 diff를 읽어 App-owned side effect가 이동하지 않았는지 AI 자기검수

17BA-2 완료 처리:
- `docs/current-worklog.md`에 원천/동작 보존, 이동한 순수 함수, 남긴 App side effect, 검증 결과, 사람 gate 없음, 다음 17BA-3 closeout을 기록합니다.
- 한 의미 단위만 stage해 전용 브랜치에 commit/push합니다.
- unrelated 파일과 다른 세션 변경을 포함하지 마세요.

연쇄 진행 규칙:
- 17BA-2가 AI 검수를 통과하고 새 사람 gate가 없으면 17BA-3 closeout audit을 별도 단위·별도 commit으로 계속할 수 있습니다.
- 각 단위는 `inventory/보존 계약 -> 최소 이동 -> targeted test -> full production/build/diff -> AI audit -> worklog -> 전용 branch commit/push` 순서를 지킵니다.
- 실제 저장·삭제·출결·알림 발송·예약·취소·Supabase/Storage/Solapi 변경이 필요해지는 순간 해당 단위만 멈추고 정확한 사람 gate를 제시합니다. 그 결과를 소비하지 않는 다른 순수 단위를 임의로 넓혀 시작하지 마세요.
- 기능 버그를 발견해도 리팩터링에 섞어 고치지 말고 재현 근거와 유지보수 수정 범위만 기록하세요.

중요한 역사 문서 해석:
- 리팩터링 브랜치의 `docs/refactor-supplement-job-builders-inventory-2026-07-21.md` 앞부분에 남은 학생 포털/보안 보류 문구는 과거 기록입니다. 현재 정책은 학생 포털·특강 템플릿 gate 제거, 교사 bearer·Storage 완료입니다.
- 같은 문서 후반의 11B-1 운영 gate 통과와 11B-1~13 완료 기록이 현재 리팩터링 사실입니다.
- main 문서와 branch 문서가 다르면 완료 코드를 중복 작성하지 말고 branch 실제 코드·테스트·최신 current-worklog를 먼저 대조해 차이를 보고하세요.
```
