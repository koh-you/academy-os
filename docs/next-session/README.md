# Next Session Handoff

이 폴더 하나만 다음 Codex 세션에 넘기면 됩니다. 새 세션은 아래 프롬프트를 붙여넣은 뒤, `AGENTS.md`와 `docs/current-worklog.md` 최상단의 `미룬 작업 큐`를 먼저 사용자에게 요약해야 합니다.

## 바로 붙여넣을 프롬프트

```text
E:\academy-os 작업을 이어가겠습니다.

먼저 아래 파일과 상태를 확인해주세요.
1. AGENTS.md
2. docs/current-worklog.md
3. docs/next-session/README.md
4. git status --short
5. git log -1 --oneline

중요:
코드를 바로 수정하지 말고, `AGENTS.md`와 `docs/current-worklog.md` 최상단의 `미룬 작업 큐`를 먼저 읽은 뒤 다음에 해야 할 작업을 우선순위로 정리해서 세션에 보여주세요.
다음 세션용 프롬프트에 일부 항목이 빠져 있어도, `AGENTS.md`와 `docs/current-worklog.md`의 큐에 있으면 계속 살아 있는 작업으로 취급해주세요.

현재 미룬 작업 우선순위:
1. 모달 통일 작업
   - 수업 생성/수업 상세/수업일지 관련 모달을 공통 구조로 정리합니다.
   - 숙제보충 등원보충 모달 1차 UI 정리, 결석보강 생성/상세 모달 1차 맥락 정리, 결석보강 알림톡 제목/본문 seed 정리, 실제 보강 수업 상세 화면과 생성 모달 문구 통일은 완료됐습니다.
   - 다음은 전체 모달 inventory와 공통 구조 통일 범위를 다시 정합니다.
   - 착수 전에 현재 모달 inventory, 저장 원천, 알림톡/Solapi/notification_jobs side effect, 수업일지/숙제/출결 연결을 먼저 표로 정리합니다.
   - 숙제보충/결석보충/정규수업/시험대비/특강의 맥락이 섞이면 안 됩니다.
   - 알림톡 예약/발송, 출결 저장, 수업일지 기록 원천이 같이 바뀌면 즉시 중단하고 별도 gate로 나눕니다.
2. 발송 알림톡 템플릿 설정 관리
   - 실제 발송/예약되는 모든 알림톡 템플릿과 문구 원천을 `설정 > 알림톡`에서 확인하고 수정할 수 있게 합니다.
   - 보충관리의 결석보강 학생 11시 리마인더, 숙제보충 학생 11시 리마인더, 보충 일정 확정 안내/변경 안내 문구는 `app_state.aiSettings.notificationTemplates` 원천으로 `설정 > 알림톡`에 노출 완료됐습니다.
   - 출결, 수업일지, 숙제보충, 결석보강, 재시험, 공지, 특강, 일정 변경, 학생 11시 리마인더 등 Solapi 경로를 inventory로 정리합니다.
   - 각 템플릿의 현재 원천(하드코딩/app_state/env/Supabase), 변수, 대상(학생/학부모), 즉시발송/예약 여부를 표로 정리합니다.
   - 실제 발송 문구가 설정 화면 미리보기/편집값과 다르거나 코드 상수만 수정해야 하는 구조면 즉시 중단하고 별도 gate로 나눕니다.
3. App.jsx 리팩터링 연속 작업
   - 한 번에 하나의 의미 단위만 진행합니다.
   - 순서는 `원천/동작 보존 -> 파일 분리 -> 검증 명령 -> AI 검수 결과 + 사람이 확인할 것 gate -> 커밋/푸시`입니다.
   - 기능 변경과 리팩터링 범위를 섞지 않습니다.
   - 아래 18개 기준 로드맵을 공통 후보 목록으로 사용합니다. 실제 착수 전에는 최신 `docs/current-worklog.md`와 `git status --short`를 보고 이미 완료된 하위 작업과 남은 하위 작업을 먼저 구분합니다.
   - 다음 리팩터링은 9번 `test manager`부터 이어갑니다. 1~8번은 완료 또는 충분히 진행된 것으로 보고 10번으로 넘어가지 마세요.
   - 코드 수정 전 사용자에게 먼저 최근 리팩터링 결과를 요약하고 `9번 test manager의 남은 학생별 history list 분리부터 이어갈까요?`라고 물어봐 주세요.
   - 사용자가 재개하라고 답하면 9번의 남은 작업부터 진행합니다.

App.jsx 리팩터링 18개 기준 로드맵:
1. `specialLecture helpers/config` - 특강 안내문 계산, URL, 회차 normalize, Tally query helper.
2. `shared UI primitives` - `InlineSaveStatus`, `MetricCard`, `Modal`, `EmptyState`, 단순 카드/상태 표시 컴포넌트.
3. `API client wrappers` - `fetchJson`, `getJsonWithTimeout`, `postJsonWithTimeout`, 공통 API 에러/timeout 처리.
4. `storageKeys/config/constants` - storage key, view id, option list, 상수/설정 묶음.
5. `specialLecture preview/public` - 특강 공개 안내문 미리보기, 공개 URL 렌더링, 복사 문구.
6. `specialLecture management` - 운영 > 특강관리 편집 화면, 신청자 연결, 특강 수업 생성 gate.
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

위험도 기본값:
- 1~4는 낮음
- 5~10은 중간
- 11~18은 높음 또는 매우 높음
- 11~18은 Supabase 원천, `notification_jobs`, Solapi, 출결, 수업일지 저장 side effect를 먼저 inventory로 확인한 뒤 진행합니다.

현재 리팩터링 이어받을 지점:
- 다음 시작점은 9번 `test manager`입니다. 10번으로 넘어가지 않습니다.
- 6번 `specialLecture management` 분리 완료.
- 7번 `school calendar helpers` 분리 완료.
- 8번 `school calendar components` 분리 완료.
- 9번 `test manager` 진행 중: `src/domains/tests/testManagerUtils.js` 분리, `src/domains/tests/TestManagerPanels.jsx`에 탭/header/form grid/meta/table/action/recent session list 분리 완료.
- 남은 9번 우선 후보: 학생별 history list 분리.
- 최신 리팩터링 커밋 기준: `0bf68633 Extract recent test session list`. 새 세션은 `git log -1 --oneline`으로 실제 최신 커밋을 다시 확인하세요.
- 먼저 사용자에게 `9번 test manager의 남은 학생별 history list 분리부터 이어갈까요?`라고 물어보고, 사용자가 재개하라고 답하면 진행하세요.
4. Solapi 특강 템플릿 검수 후 연결
   - 새 세션 시작 초기에 사용자에게 `Solapi 특강 템플릿 검수가 완료됐나요?`를 먼저 확인합니다.
   - 검수 완료 전에는 임시 특강 알림톡 구조를 유지합니다.
   - 검수 완료 확인 후에만 템플릿 ID/변수 연결, 테스트 데이터 발송, 링크/문구 검수를 진행합니다.

오늘 완료/확인된 작업:
1. 기존 일요보강/일요시험보강 runtime을 clean-slate `시험대비` 구조로 전환했습니다.
   - 새 정상 원천은 Supabase `lessons.lesson_type=examPrep`입니다.
   - legacy `examSundayMakeup`을 `examPrep`으로 자동 변환하지 않습니다.
   - 관련 코드 커밋: `43adb9be Clean up legacy Sunday makeup runtime`
2. 미룬 작업 큐를 `AGENTS.md`, `docs/current-worklog.md`, `docs/next-session/README.md` 최상단 흐름으로 고정했습니다.
   - 관련 커밋: `ba348ad8 Record deferred work queue in handoff docs`
3. 운영 Supabase SQL Editor에서 기존 legacy 일요보강 cleanup을 사용자가 실행했습니다.
   - 삭제 전 preview 대상은 2건: `2026-06-21`, `2026-06-28`
   - `lesson_record_count`, `homework_count`, `notification_job_count`, `active_notification_job_count` 모두 0
   - cleanup 후 legacy 조회는 `Success. No rows returned`
4. 새 `examPrep` 수업 조회도 `Success. No rows returned`였습니다.
   - 즉 시험대비 수업은 아직 Supabase `lessons`에 저장되지 않았습니다.
   - 달력에 보였던 `시험대비`는 저장된 수업이 아니라 시험관리 데이터에서 계산된 자동 후보/미리보기였습니다.
   - 사용자가 자동생성 시험대비 후보를 화면에서 수동삭제했습니다. 이는 `app_state.generatedLessonControls.suppressedKeys` 기반 후보 제외로 이해합니다.
5. 보충관리 숙제보충/결석보강 모달 1차 정리를 진행했습니다.
   - 숙제보충 등원보충 상세는 원 숙제 배정일/마감일과 `그날까지 해야 했던 숙제`, `등원해서 확인할 숙제`로 분리했습니다.
   - 결석보강 생성/상세는 `원 결석 수업`, `그날 수업 내용`, `그날 확인할 지난 숙제`, `그날 새로 나간 숙제` 맥락을 표시합니다.
6. 결석보강 알림톡 seed와 실제 보강 수업 상세 문구를 통일했습니다.
   - 결석보강 학생 11시 제목은 `결석보강 · <결석한 수업>`을 우선 사용합니다.
   - 본문/일정 안내는 `결석한 수업`과 `확인할 숙제`를 분리합니다.
   - `설정 > 알림톡`에서 `결석보강 학생 11시 알림톡`, `보충 일정 확정 안내`, `보충 일정 변경 안내` 템플릿을 확인/수정할 수 있습니다.
   - 기존 예약된 `notification_jobs`는 자동 변경되지 않고, 새로 생성/변경 예약되는 job부터 새 seed를 사용합니다.
7. 숙제보충 학생 11시 알림톡 문구도 결석보충과 같은 라벨 구조로 정리했습니다.
   - 새 초안은 `일시: 7/17(금) 오전 04:00`, `밀린 숙제: 7/15(수) 숙제 · <등원해서 확인할 숙제>`처럼 표시합니다.
   - `설정 > 알림톡`에서 `숙제보충 학생 11시 알림톡` 템플릿을 확인/수정할 수 있습니다.
   - 기존 예약된 `notification_jobs`와 사용자 편집 초안은 자동 변경되지 않고, 새로 생성/변경 예약되는 job부터 새 문구를 사용합니다.
   - 관련 기능 커밋: `58728cb0 Clarify supplement homework reminder labels`
8. App.jsx 리팩터링과 18개 기준 로드맵을 최신 문서에 반영했습니다.
   - 6번 `specialLecture management` 분리 완료.
   - 7번 `school calendar helpers` 분리 완료.
   - 8번 `school calendar components` 분리 완료.
   - 9번 `test manager` 진행 중: `src/domains/tests/testManagerUtils.js`와 `src/domains/tests/TestManagerPanels.jsx` 일부 분리 완료.
   - 9번 최신 리팩터링 커밋 기준: `0bf68633 Extract recent test session list`
   - 다음에 "다음 세션에 넘길 프롬프트"를 요청하면 이 README의 붙여넣기 프롬프트가 미룬 작업 큐, 18개 로드맵, 최근 리팩터링 결과, 9번 재개 질문을 함께 넘깁니다.
9. 최신 검증 결과
   - `node --check scripts/scenario-tests-production.cjs` 통과
   - `npm run test:production` 309개 통과
   - `npm run build` 통과, 기존 Vite chunk size 경고만 남음
   - `git diff --check` 통과

다음 세션 주의사항:
- 사용자가 명시적으로 요청하기 전까지 새 시험대비 수업을 생성/반영하지 마세요. 아직 시험대비를 시작하지 않았습니다.
- 나중에 시험대비를 실제로 시작할 때는 `시험관리/학사일정`의 자동 수업 후보에서 필요한 항목만 반영합니다.
- 이미 수동삭제한 시험대비 후보가 필요해지면 `제외 해제` 가능 여부를 먼저 확인합니다.
- 저장 전 자동 후보가 실제 수업처럼 달력에 보여 헷갈리는 문제가 계속되면 `시험대비 자동 후보와 실제 저장 수업 표시 분리`를 별도 UI 개선 작업으로 제안하세요.

계속 커밋하지 말 것:
- `.codex-temp/`
- `.env`
- PDF/HWP/HWPX/ZIP/대용량 자료
- Slack/Supabase/Solapi/Tally/OpenAI 등 비밀값

작업 원칙:
- 운영 Supabase SQL edit 적용은 사용자가 직접 합니다. SQL 자동 적용을 위해 DB URL, DB password, access token을 묻지 않습니다.
- 한 번에 하나의 우선순위 작업만 진행합니다.
- 운영 흐름에 영향이 있으면 `npm run test:production`, `npm run build`, `git diff --check`를 실행합니다.
- 완료 후 `docs/current-worklog.md`와 필요 시 `AGENTS.md`, `docs/next-session/README.md`의 미룬 작업 큐를 갱신합니다.
- 작업 완료 답변에는 `사람 검토 절차`와 `AI 자기검토`를 포함합니다.
```

## Handoff Notes

- 미룬 작업 큐의 source of truth는 `AGENTS.md` 최상단과 `docs/current-worklog.md` 최상단입니다.
- App.jsx 리팩터링 18개 기준 로드맵은 `AGENTS.md`, `docs/current-worklog.md`, 이 README에 함께 기록되어 있습니다. 다른 세션이 목록을 못 찾으면 먼저 이 세 파일의 최상단 큐와 `App.jsx Refactoring Roadmap - 18 Units`를 확인하게 하세요.
- 다음 리팩터링 시작점은 9번 `test manager`입니다. 다음 세션은 코드 수정 전에 리팩터링 결과를 요약하고 `9번 test manager의 남은 학생별 history list 분리부터 이어갈까요?`라고 사용자에게 먼저 물어봐야 합니다.
- 최근 리팩터링 흐름은 6번 특강관리 분리, 7번 학사일정 helper 분리, 8번 학사일정 컴포넌트 분리 완료 후 9번 `test manager` 진행 중입니다. 최신 리팩터링 커밋 기준은 `0bf68633 Extract recent test session list`이며, 실제 최신 커밋은 새 세션에서 반드시 `git log -1 --oneline`으로 다시 확인하세요.
- 이 README는 붙여넣기 편의를 위한 사본입니다. 세션 종료 시 새로 미룬 작업이 생기면 세 곳을 함께 갱신하세요.
- 보충 알림톡 라벨 정리 기능 커밋은 `58728cb0 Clarify supplement homework reminder labels`입니다. handoff 문서 갱신 커밋이 뒤에 올 수 있으므로 새 세션에서 반드시 `git log -1 --oneline`으로 최신 커밋을 다시 확인하세요.
- 현재 로컬에 남을 수 있는 미추적 항목: `.codex-temp/`. 커밋하지 않습니다.
