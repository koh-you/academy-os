# Academy OS 운영 API 인증 감사

조사일 2026-09-03 · 방법: `api/server.js` + `src/shared/server/*RouteRegistry.js` 정적 분석 (운영 호출·설정 변경 없음)
후속 구현 지시: [ops-api-auth-implementation-prompt.md](ops-api-auth-implementation-prompt.md)

---

## 0. 한 줄 결론

배포된 `api/server.js`에는 **전역 인증 계층이 없고**, 라우트 레지스트리 약 35개 중 세션/토큰 검사를 하는 것은 **5개뿐**(portalRead, portalWrite, examPostConfirm, reportSnapshot, resourceMaterial). 나머지는 읽기·쓰기·삭제·**실제 알림톡 발송**·**유료 AI 호출**까지 인증 없이 열려 있다. 즉 이 API는 사실상 공개 API다.

---

## 1. 인증 모델 현황

- 세션 토큰: HMAC-SHA256 서명, 교사 8시간·포털(학생/학부모) 14일 만료 — `src/shared/server/sessionRouteGuard.js`
- 서명 비밀: `APP_SESSION_SECRET || SUPABASE_SERVICE_ROLE_KEY || "academy-os-dev-session-secret"` — `api/server.js:291`. **`APP_SESSION_SECRET` 미설정 시 service-role 키가 서명 비밀로 재사용됨.**
- 가드는 각 레지스트리에 **주입될 때만** 동작. 전역 미들웨어 없음: `api/server.js:4786-4821`의 `http.createServer` 핸들러가 `dispatchSystemRoute`부터 곧장 체이닝하며 사전 인증 훅이 없음.
- `parseVersionedWriteRequest`(`src/shared/contracts/versionedWriteRouteContracts.js:549`)는 Zod `.parse()` 스키마/버전 검증**만**. 인증이 아님(= CAS는 동시성 제어이지 인증이 아님).

---

## 2. 라우트별 인증 감사

범례 — 인증: **없음** / 포털 / 교사 / dispatch(공유 토큰) / 재인증(현재 비밀번호) / 서명(웹훅 HMAC)
부작용 — R=DB읽기, W=DB쓰기, D=DB삭제, ✉=실제 외부 발송, 💸=유료 AI 호출

### 2.1 인증 있음 (정상)

| 경로 | 메서드 | 인증 | 근거 |
|---|---|---|---|
| `/api/auth/login` | POST | (공개 의도) | `authLoginRouteRegistry.js` |
| `/api/auth/teacher-account` | POST | 재인증 | `teacherAccountRouteRegistry.js:44` |
| `/api/portal-data` | GET | 포털 | `portalReadRouteRegistry.js` |
| `/api/portal-state`, `/api/portal-homeworks/complete`, `/api/portal-questions`, `/api/portal-exam-post-submissions` | POST | 포털 | `portalWriteRouteRegistry.js` |
| `/api/exam-post-submissions/confirm` | POST | 교사 | `examPostConfirmRouteRegistry.js` |
| `/api/report-snapshots` | POST | 교사 | `reportSnapshotRouteRegistry.js` |
| `/api/resource-materials` (GET/POST/DELETE), `/api/resource-material-files` (POST/DELETE) | GET/POST/DELETE | 교사 | `resourceMaterialRouteRegistry.js:63,104` |
| `/api/resource-material-files/open` | GET | 교사 or 포털 | `resourceMaterialRouteRegistry.js:133` |
| `/api/exam-post-files`, `/api/exam-post-files/cleanup`, `/api/exam-post-files/open` | POST/GET | 포털 (+본인 확인 403) | `api/server.js:4953-5010` |
| `/api/intake/tally`, `/api/special-lecture-applications/tally` | POST | 서명 (단, `TALLY_WEBHOOK_SIGNING_SECRET` 미설정 시 통과) | `api/server.js:1612` `verifyTallyWebhookSignature` → `if (!secret) return true` |
| `/api/notifications/slack-today-schedule/reserve` | POST | dispatch 토큰 | `notificationProviderRouteRegistry.js:120` |

### 2.2 인증 부분적 / 조건부

| 경로 | 메서드 | 상태 | 근거 |
|---|---|---|---|
| `/api/notification-jobs/dispatch-due` | POST | `NOTIFICATION_DISPATCH_TOKEN` 미설정이면 검사 skip. 설정돼도 override 필드(`now`/`dispatchToken`/`forceDryRun`) 없이 호출하면 통과하여 실제 due 발송 실행 | `notificationJobRouteRegistry.js:200-232` |

### 2.3 인증 없음 — 읽기 (개인정보 노출)

| 경로 | 메서드 | 노출 내용 | 근거 |
|---|---|---|---|
| `/api/students`, `/api/students/delete-audit` | GET | 전체 학생 명부·연락처·학교·학년 | `studentRouteRegistry.js:38` |
| `/api/lessons`, `/api/lessons/closure-preflight` | GET | 수업 일정·학생 배정 | `lessonRouteRegistry.js:47` |
| `/api/lesson-records` | GET | 학생별 수업기록·성취·재시험 플래그 | `lessonRecordRouteRegistry.js` |
| `/api/homeworks` | GET | 과제 | `homeworkRouteRegistry.js` |
| `/api/makeup-tasks` | GET | 보충 과제 | `makeupTaskRouteRegistry.js` |
| `/api/school-events` | GET | 학사 일정 | `schoolEventRouteRegistry.js` |
| `/api/academy-reminders` | GET | 학원 리마인더 | `academyReminderRouteRegistry.js` |
| `/api/exam-prep-rows` | GET | 시험대비 행 | `examPrepRowRouteRegistry.js` |
| `/api/test-sessions`, `/api/test-attempts` | GET | 시험 응시·점수 (studentId 필터 가능) | `testSessionReadRouteRegistry.js` |
| `/api/classes` | GET | 반 템플릿 | `classTemplateRouteRegistry.js` |
| `/api/special-lecture-applications` | GET | 특강 신청자·연락처 | `specialLectureApplicationRouteRegistry.js` |
| `/api/special-lecture-enrollments` | GET | 특강 수강 | `specialLectureEnrollmentRouteRegistry.js` |
| `/api/student-intake-applicants` | GET | 신규 입학 상담 신청자 원본 (Tally 유입) | `studentIntakeApplicantRouteRegistry.js` |
| `/api/app-state`, `/api/special-lecture-guides` | GET | 앱 상태 전역 | `appCoreReadRouteRegistry.js` |
| `/api/exam-analysis-runs`, `/api/exam-analysis-ssen-types` | GET | 시험분석 실행 결과 | `examAnalysisReadRouteRegistry.js` |
| `/api/notification-jobs` | GET | 알림 예약/발송 이력. `?includeResult=true`면 수신번호·문구 전체 | `notificationJobRouteRegistry.js:63` |
| `/api/solapi/messages`, `/api/solapi/groups` | GET | SOLAPI 발송 로그: 수신 전화번호, 메시지 본문, 상태 | `solapiRouteRegistry.js` |
| `/api/integrations/status`, `/api/core/status`, `/health` | GET | 통합/코어 상태 (`/health`는 공개 적정) | `integrationStatusRouteRegistry.js`, `systemRouteRegistry.js` |

### 2.4 인증 없음 — 쓰기·삭제 (운영 데이터 변조)

| 경로 | 메서드 | 부작용 | 비고 | 근거 |
|---|---|---|---|---|
| `/api/students`, `/api/students/bulk` | POST | W | 학생 생성/수정/일괄. `expectedUpdatedAt`는 선택적 CAS | `studentRouteRegistry.js:82` |
| `/api/students` | DELETE | D | 퇴원생 삭제. 가드는 `confirmationName` 문자열 일치 + `forceDeleteWithReferences` 플래그뿐 | `studentRouteRegistry.js:60` |
| `/api/lessons`, `/api/lessons/bulk` | POST | W | 수업 upsert/일괄 | `lessonRouteRegistry.js` |
| `/api/lessons` | DELETE | D | `?id=` 단건, `?before=<date>` **기간 일괄 삭제**, `?mode=exam-prep-reconcile` | `lessonRouteRegistry.js:106` |
| `/api/lessons/special-lecture-student-schedule` | POST | W | 특강 학생 일정 동기화 | `lessonRouteRegistry.js` |
| `/api/lesson-records`, `/api/lesson-records/bulk` | POST | W | 수업기록 upsert/일괄 | `lessonRecordRouteRegistry.js` |
| `/api/lesson-records/notification-status`, `/retest-status`, `/prune-stale` | POST | W/D | 알림상태·재시험 플래그 변경, 오래된 레코드 정리 | `lessonRecordRouteRegistry.js` |
| `/api/homeworks`, `/api/homeworks/bulk` | POST | W | 과제 upsert | `homeworkRouteRegistry.js` |
| `/api/makeup-tasks`, `/bulk` | POST | W | 보충 과제 upsert | `makeupTaskRouteRegistry.js` |
| `/api/makeup-tasks` | DELETE | D | 단건/전체 삭제 (`deleteAllMakeupTasks` 경로 존재) | `makeupTaskRouteRegistry.js` |
| `/api/school-events`, `/bulk` | POST | W | 학사 일정 upsert | `schoolEventRouteRegistry.js` |
| `/api/school-events` | DELETE | D | 학사 일정 삭제 | `schoolEventRouteRegistry.js` |
| `/api/academy-reminders` | POST/DELETE | W/D | 리마인더 | `academyReminderRouteRegistry.js` |
| `/api/exam-prep-rows`, `/bulk` | POST | W | 시험대비 행 upsert | `examPrepRowRouteRegistry.js` |
| `/api/exam-prep-rows` | DELETE | D | 행/중복 삭제 | `examPrepRowRouteRegistry.js` |
| `/api/test-sessions` | POST/DELETE | W/D | 시험 세션+응시 upsert / 삭제 | `testSessionWriteRouteRegistry.js` |
| `/api/special-lecture-applications` | POST/DELETE | W/D | 특강 신청 | `specialLectureApplicationRouteRegistry.js` |
| `/api/special-lecture-enrollments`, `/bulk` | POST | W | 특강 수강 | `specialLectureEnrollmentRouteRegistry.js` |
| `/api/student-intake-applicants` | POST | W | 입학 상담 신청자 upsert | `studentIntakeApplicantRouteRegistry.js` |
| `/api/app-state` | POST | W | 앱 전역 상태 덮어쓰기 (CAS만) | `appStateWriteRouteRegistry.js` |
| `/api/exam-analysis-runs` | POST | W | 시험분석 실행 upsert | `examAnalysisRunWriteRouteRegistry.js` |
| `/api/exam-analysis-runs/*` (save-question-reviews, save-prompt-studio, save-output-drafts 등), `DELETE /api/exam-analysis-runs`, `/api/exam-analysis-source-files` POST/DELETE, `/extract`, `/open` | POST/DELETE/GET | W/D | 시험분석 저장·삭제·스토리지 객체 삭제·서명 URL 발급 | `api/server.js:4823-4952` |
| `/api/exam-analysis-runs/question-count/confirm` | POST | W | 문항수 확정 | `examAnalysisQuestionCountRouteRegistry.js` |
| `/api/notification-jobs` | POST | W | 알림 job upsert (CAS만) | `notificationJobRouteRegistry.js:158` |
| `/api/notification-jobs` | DELETE | D | 알림 이력 삭제 | `notificationJobRouteRegistry.js:178` |
| `/api/notification-jobs/readiness-check` | POST | W/✉ | 준비상태 점검, `notifySlack` 시 Slack 발송 | `notificationJobRouteRegistry.js:234` |
| `/api/lesson-journal/rows/save`, `/api/class-rosters/save`, `/api/school-calendar/derived-save`, `/api/exam-prep-schedule/save`, `/api/supplement-schedules/save`, `/api/lesson-journal/history-action`, `/api/lesson-journal/makeup-tasks/save` | POST | W | 핵심 versioned/CAS 저장 경로. 스키마+버전만 통과, 인증 없음 | `api/server.js:5059-5230` |

### 2.5 인증 없음 — 고위험 (실제 발송 / 유료 / 파괴적)

| 경로 | 메서드 | 부작용 | 설명 | 근거 |
|---|---|---|---|---|
| `/api/notifications/attendance-alimtalk` | POST | ✉ | 등·하원 알림톡 실발송 | `notificationProviderRouteRegistry.js:46` |
| `/api/notifications/comment-alimtalk` | POST | ✉ | 수업 코멘트 알림톡 실발송/예약 | `notificationProviderRouteRegistry.js:60` |
| `/api/notifications/daily-report-alimtalk` | POST | ✉ | 일일 리포트 알림톡 실발송 | `notificationProviderRouteRegistry.js:78` |
| `/api/notifications/student-schedule-reminder` | POST | ✉ | 학생 일정 리마인더 알림톡 실발송 | `notificationProviderRouteRegistry.js:90` |
| `/api/notifications/slack-daily-schedule`, `/slack-today-schedule` | POST | ✉ | 교사 스케줄 Slack 실발송 | `notificationProviderRouteRegistry.js:102,114` |
| `/api/notification-jobs/reserve`, `/reserve-bulk` | POST | ✉ | 알림 job을 SOLAPI에 실예약 (`forceDryRun` 미지정 시) | `notificationJobRouteRegistry.js:130,256` |
| `/api/notification-jobs/cancel` | POST | ✉ | 알림 job 취소 + SOLAPI 예약그룹 취소 | `notificationJobRouteRegistry.js:80` |
| `/api/notification-jobs/reconcile-solapi` | POST | W | SOLAPI 상태 대조·정정 | `notificationJobRouteRegistry.js:137` |
| `/api/solapi/groups/cancel` | POST | ✉ | SOLAPI 예약 그룹 직접 취소 | `solapiRouteRegistry.js:60` |
| `/api/attendance/check` | POST | W/✉ | 출결 기록 + 조건부 등·하원 알림톡 큐잉/발송 | `attendanceRouteRegistry.js:27` |
| `/api/ai/comment-polish` | POST | 💸 | OpenAI/Anthropic 유료 호출 | `adminAiRouteRegistry.js:36` |
| `/api/exam-analysis-source-files/vision-check`, `/detect-question-boundaries`, `/fill-question-rows`, `/refine-question-rows`, `/generate-output-draft` | POST | 💸 | 시험분석 AI 유료 호출 5종 | `examAnalysisAiRouteRegistry.js` |
| `/api/admin/seed-core-data` | POST | W(대량) | 코어 데이터 시드 | `adminAiRouteRegistry.js:20` |
| `/api/exam-analysis-source-files` | POST | W | 최대 68MB 파일 업로드 | `api/server.js:4909` |

> 운영 환경 증폭 요인 — `render.yaml`: `ALIMTALK_DRY_RUN=false`, `ALIMTALK_ALLOW_REAL_STUDENT_NUMBERS=true`, `ALIMTALK_ALLOW_REAL_PARENT_NUMBERS=true`, `CORS_ALLOWED_ORIGINS=*`. 위 ✉ 경로는 실제 학부모/학생 번호로 카카오 알림톡을 보낸다.

---

## 3. 심각도 요약

**P0 · 즉시 (실발송/유료/파괴)** — 알림톡 실발송 6종, Slack 발송 3종, 예약 취소 2종, 유료 AI 6종, `/api/admin/seed-core-data`, `DELETE /api/lessons?before=`, `DELETE /api/students`, `DELETE /api/makeup-tasks`, `DELETE /api/exam-analysis-runs`, `GET /api/solapi/messages`(수신번호+본문)

**P1 · 높음 (쓰기)** — 모든 도메인 `POST .../bulk`, `POST /api/*/save`(versioned), `POST /api/app-state`, 개별 upsert

**P2 · 중간 (개인정보 읽기)** — §2.3 전체

**조건부** — `/api/notification-jobs/dispatch-due`(토큰 미설정/무해 호출 시 통과), Tally 웹훅(`TALLY_WEBHOOK_SIGNING_SECRET` 미설정 시 서명 우회)

---

## 4. 핵심 근거 파일

- 전역 인증 부재: `api/server.js:4786-4821`
- 세션 토큰 모델: `src/shared/server/sessionRouteGuard.js`
- 세션 서명 비밀이 service-role로 폴백: `api/server.js:291`
- CAS ≠ 인증: `src/shared/contracts/versionedWriteRouteContracts.js:549`
- dispatch 토큰: `api/server.js:1343-1362`
- Tally 서명 우회 조건: `api/server.js:1612`
- 운영 발송 플래그: `render.yaml`
- 인증 있는 5개 레지스트리: portalRead, portalWrite, examPostConfirm, reportSnapshot, resourceMaterial
