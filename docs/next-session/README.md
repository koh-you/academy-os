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
코드를 바로 수정하지 말고, `AGENTS.md`와 `docs/current-worklog.md` 최상단의 `미룬 작업 큐`를 먼저 읽은 뒤 현재 미룬 작업과 새 요청의 우선순위를 짧게 정리해서 세션에 보여주세요.
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
   - 다음 후속으로 수업 알림톡/데일리 리포트의 `⭐ 보충/확인 안내` 블록 문구를 수정해야 합니다.
   - 착수 전에 현재 문구 후보, 프론트 미리보기 경로, 서버 발송 직전 refresh 경로, 설정 화면 노출 여부를 먼저 표로 정리합니다.
   - 출결, 수업일지, 숙제보충, 결석보강, 재시험, 공지, 특강, 일정 변경, 학생 11시 리마인더 등 Solapi 경로를 inventory로 정리합니다.
   - 실제 발송 문구가 설정 화면 미리보기/편집값과 다르거나 코드 상수만 수정해야 하는 구조면 즉시 중단하고 별도 gate로 나눕니다.
3. App.jsx 리팩터링 연속 작업
   - 한 번에 하나의 의미 단위만 진행합니다.
   - 순서는 `원천/동작 보존 -> 파일 분리 -> 검증 명령 -> AI 검수 결과 + 사람이 확인할 것 gate -> 커밋/푸시`입니다.
   - 기능 변경과 리팩터링 범위를 섞지 않습니다.
   - 아래 18개 기준 로드맵을 공통 후보 목록으로 사용합니다.
   - 다음 리팩터링은 9번 `test manager`부터 이어갑니다. 1~8번은 완료 또는 충분히 진행된 것으로 보고 10번으로 넘어가지 마세요.
   - 코드 수정 전 사용자에게 먼저 최근 리팩터링 결과를 요약하고 `9번 test manager의 남은 학생별 history list 분리부터 이어갈까요?`라고 물어봐 주세요.
   - 사용자가 재개하라고 답하면 9번의 남은 작업부터 진행합니다.
4. Solapi 특강 템플릿 검수 후 연결
   - 새 세션 시작 초기에 사용자에게 `Solapi 특강 템플릿 검수가 완료됐나요?`를 먼저 확인합니다.
   - 검수 완료 전에는 임시 특강 알림톡 구조를 유지합니다.
   - 검수 완료 확인 후에만 템플릿 ID/변수 연결, 테스트 데이터 발송, 링크/문구 검수를 진행합니다.

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

현재 리팩터링 이어받을 지점:
- 다음 시작점은 9번 `test manager`입니다. 10번으로 넘어가지 않습니다.
- 6번 `specialLecture management` 분리 완료.
- 7번 `school calendar helpers` 분리 완료.
- 8번 `school calendar components` 분리 완료.
- 9번 `test manager` 진행 중: `src/domains/tests/testManagerUtils.js` 분리, `src/domains/tests/TestManagerPanels.jsx`에 탭/header/form grid/meta/table/action/recent session list 분리 완료.
- 남은 9번 우선 후보: 학생별 history list 분리.
- 최신 리팩터링 커밋 기준은 `0bf68633 Extract recent test session list`이지만, 실제 최신 커밋은 새 세션에서 반드시 `git log -1 --oneline`으로 다시 확인하세요.

오늘/최근 완료된 작업:
1. 운영 프론트 API base fallback 복구
   - 증상: 운영 화면 버튼들이 `Failed to fetch`로 실패.
   - 원인: 운영 프론트 번들이 `http://127.0.0.1:8787`을 API base로 들고 있었다.
   - 결과: 운영/배포 도메인은 `VITE_API_BASE_URL`이 비어 있거나 로컬 주소여도 Render API `https://koh-you-math-academy-os-api.onrender.com`을 쓰도록 수정.
   - 커밋: `ae49ea74 Fix production API base fallback`
2. 보충 생성 모달에서 결석 처리 취소 추가
   - 미래 결석 저장을 보충관리 결석보강 생성 모달에서 `결석 처리 취소`로 되돌릴 수 있게 함.
   - `lesson_student_records`만 되돌리고 `makeup_tasks`, `lessons`, `notification_jobs`, Solapi 예약/발송은 건드리지 않음.
   - 커밋: `db047b39 Add absence cancellation from supplement draft`
3. 운영 알림에 반 알림 대상 추가
   - `운영 알림 원본`의 첫 드롭다운에 `반 알림`을 추가.
   - `반 알림` 선택 시 오른쪽 대상 드롭다운이 현재 반 템플릿 4개 목록으로 전환.
   - 저장 원천은 기존 Supabase `academy_reminders`; 반 대상은 새 SQL 없이 `source_payload.classTemplateId`와 `source_payload.className`에 저장.
   - 수업일지 상단 `수업 관련 운영 알림`은 기존 `lessonId`/학생 ID 매칭에 더해 `lesson.classTemplateId === reminder.sourcePayload.classTemplateId`도 매칭.
   - `notification_jobs`, Solapi 예약/발송, 출결, 수업일지 저장 로직은 변경하지 않음.
   - 커밋: `888d5c41 Add class-scoped academy reminders`
4. 알림관리 Solapi 발송결과 직접 대조/반영
   - 알림관리에서 예약/확인 필요 알림톡을 Solapi 결과와 직접 매칭해 `notification_jobs` 상태를 갱신할 수 있게 함.
   - 날짜/시간으로 조회 대상을 좁히지 않고, 화면에 잡힌 예약/확인 필요 목록 전체를 대상으로 함.
   - 외부 side effect는 Solapi 조회만 수행. 새 예약/발송은 만들지 않음.
5. 공지 발송 화면 정리
   - `테스트 발송` 제거.
   - 상단 요약 카드는 `예약`, `발송 완료`, `확인 필요` 3개만 노출. 실패/취소/초안 기록은 이력 로직에는 남김.
6. 보충 최초 일정 안내가 일정 변경 문구로 나가는 문제 수정
   - 최초 일정 만들기는 `확정 안내`, 기존 연결 일정 변경은 `변경 안내`로 분리.
   - `notification_jobs.payload.noticeKind`/`result.noticeKind`에 확정/변경 구분을 남김.
7. `⭐ 보충/확인 안내` 문구 수정 후속 등록
   - 다음 착수 전 프론트 미리보기, 서버 발송 직전 refresh, Solapi route body 원천과 중복 제거 조건을 표로 정리해야 함.
   - 이번 세션에서는 실제 발송 문구/템플릿/Solapi API를 바꾸지 않음.

최신 검증 결과:
- `node --check api/server.js`, `node --check api/routes/coreData.js`, `node --check api/routes/notifications.js`, `node --check scripts/scenario-tests-production.cjs` 통과
- `node scripts/scenario-tests-production.cjs` 통과, 312개
- `npm run test:production` 통과, 312개
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
- 작업 완료 답변에는 `사람 검토 절차`와 `AI 자기검토`를 포함합니다.
```

## Handoff Notes

- 미룬 작업 큐의 source of truth는 `AGENTS.md` 최상단과 `docs/current-worklog.md` 최상단입니다.
- App.jsx 리팩터링 18개 기준 로드맵은 `AGENTS.md`, `docs/current-worklog.md`, 이 README에 함께 기록되어 있습니다.
- 다음 리팩터링 시작점은 9번 `test manager`입니다. 다음 세션은 코드 수정 전에 리팩터링 결과를 요약하고 `9번 test manager의 남은 학생별 history list 분리부터 이어갈까요?`라고 사용자에게 먼저 물어봐야 합니다.
- 최신 기능 커밋은 `888d5c41 Add class-scoped academy reminders`입니다. handoff 문서 갱신 커밋이 뒤에 올 수 있으므로 새 세션에서 반드시 `git log -1 --oneline`으로 실제 최신 커밋을 다시 확인하세요.
- 현재 로컬에 남을 수 있는 미추적 항목: `.codex-temp/`. 커밋하지 않습니다.
