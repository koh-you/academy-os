# MV-2a · notification/Solapi provider call graph

읽기 전용 조사 결과. 제품 코드는 변경하지 않았다. MV-2b~f가 실제 추출을 시작하기 전 참고 지도로 쓴다.

## 핵심 발견 — HTTP route 밖의 진입점

`dispatchDueNotificationJobs`(`api/server.js:5023`)는 `/api/notification-jobs/dispatch-due` HTTP route로만 호출되지 않는다. **서버 프로세스가 `server.listen()`으로 실제 기동할 때(`api/server.js:5755-5760`) 60초 간격 내부 루프가 `forceDryRun: false`로 실제 발송을 수행한다:**

```
api/server.js:5757  if (internalDispatchEnabled) {
api/server.js:5758    runInternalNotificationDispatch("startup");
api/server.js:5759    setInterval(() => runInternalNotificationDispatch("interval"), 60 * 1000).unref?.();
```

`internalDispatchEnabled`는 `NOTIFICATION_INTERNAL_DISPATCH_LOOP !== "false"` 환경변수로만 끌 수 있다(`api/server.js:5122`). 이 루프는 모듈 import 시점이 아니라 `server.listen()` 콜백 안에서만 시작되므로 테스트에서 서버 모듈을 import해도 자동 실행되지 않지만, **운영 Render 배포에서는 항상 돌고 있다.** MV-2d에서 `dispatchDueNotificationJobs`를 분리할 때 이 내부 루프 호출 경로(`runInternalNotificationDispatch` → `dispatchDueNotificationJobs`)도 HTTP route 경로와 동일하게 새 서비스로 연결해야 하며, 둘 중 하나만 옮기면 조용히 동작이 갈라진다.

## 3개 orchestration 함수 소재

| 함수 | 위치 | 호출자 |
| --- | --- | --- |
| `reserveNotificationJobInSolapi` | `api/server.js:2951-3047` | `notificationJobRouteRegistry.js`(`/api/notification-jobs/reserve`), `reserveNotificationJobsInSolapi`(bulk, 같은 파일 3049행) |
| `reconcileSolapiNotificationJobs` | `api/server.js:3219-3355` | `notificationJobRouteRegistry.js`(`/api/notification-jobs/reconcile-solapi`), `reconcileDueSolapiNotificationJobs`(자동 재조정, 3364행) |
| `dispatchDueNotificationJobs` | `api/server.js:5023-5120` | `notificationJobRouteRegistry.js`(`/api/notification-jobs/dispatch-due`), `runInternalNotificationDispatch`(내부 60초 루프, 5125행) |

## registry는 HTTP shell만 소유한다

`src/shared/server/notificationJobRouteRegistry.js`(285줄), `notificationProviderRouteRegistry.js`, `solapiRouteRegistry.js` 세 파일 모두 session guard → `parseVersionedWriteRequest` → **주입된 함수 호출** → `sendJson` 패턴만 있다. DB/Supabase 호출, Solapi HTTP 호출, 재시도, dedup 로직은 0줄이다. 실제 함수는 전부 `api/server.js:488-544`에서 참조로 주입된다:

```
api/server.js:488  createNotificationJobRouteRegistry({ ...reserveNotificationJobInSolapi, reconcileSolapiNotificationJobs, dispatchDueNotificationJobs, checkNotificationReadiness, getDispatchAuthState, cancelSolapiReservationGroup, ... })
api/server.js:508  createNotificationProviderRouteRegistry({ ...reserveTodayTeacherScheduleSlack, sendAttendanceAlimtalkOnce, sendDailyReportAlimtalk, sendLessonCommentAlimtalk, sendSlackDailyScheduleSummary, sendStudentScheduleReminderAlimtalk, sendTodayTeacherScheduleSlack })
api/server.js:537  createSolapiRouteRegistry({ cancelSolapiReservationGroup, getKoreaDayUtcRange, listSolapiGroups, listSolapiMessages })
```

## 각 함수 내부 의존성 (분리 시 함께 옮기거나 주입해야 할 것)

**`reserveNotificationJobInSolapi`**
- `createLessonNotificationDispatchContext`, `refreshLessonCommentJobBeforeSend`(2026-08-17에 발견된 실제 버그의 그 함수 — 클라이언트 draft와 다른 계산을 했던 이력이 있어 특히 조심)
- `getNotificationJob`/`upsertNotificationJob`(Supabase read/write)
- `isSameSolapiReservation`/`isSameSolapiReservationPending`(dedup 판정)
- `cancelSolapiReservationGroup`, `sendScheduledNotificationJobToSolapi`(실제 Solapi 예약 호출)
- teacher-cancel race 처리: 예약 도중 다른 요청이 job을 취소하면(`latest.notificationJob?.status === "canceled"`) 예약된 그룹을 되돌려 취소한다 — 이 순서를 깨면 취소된 job이 실제로는 예약된 채 남을 수 있다.

**`reconcileSolapiNotificationJobs`**
- `getKoreaDayUtcRange`, `listNotificationJobsByIds`/`listNotificationJobs`(대상 선정)
- `getNotificationJobSolapiGroupId`, `withSolapiRetry`, `listSolapiGroups`/`listSolapiMessages`(캐시 `solapiLookupCache`로 그룹당 1회만 조회)
- `getReconciledSolapiJobState`(상태 판정 — sent/canceled/failed/send_unconfirmed 분기)
- 성공 시 `patchLessonStudentRecordNotificationStatus`로 수업기록에 발송 상태 반영(레슨 도메인과의 cross-write — 별도 owner 경계 주의)
- `reconcileDueSolapiNotificationJobs`(3364행)는 `automaticSolapiReconcileRunning` 플래그로 동시 실행을 막는 자체 single-flight를 갖고 있다.

**`dispatchDueNotificationJobs`**
- `listNotificationDispatchCandidates`, `isOsScheduledNotificationJob`, `isStaleDispatchClaim`(claim 만료 판정)
- `claimNotificationJob`(동시 dispatcher 경쟁 방지용 claim), `refreshLessonCommentJobBeforeSend`, `sendNotificationJob`(실제 발송)
- 실패 시 job을 `failed` 상태로 저장하지만 루프 자체는 중단하지 않고 다음 job으로 진행(부분 실패를 개별 job 단위로 격리)
- 끝에서 `reconcileDueSolapiNotificationJobs`를 같이 호출해 자동 재조정까지 한 응답에 묶는다(`automaticSolapiReconcile` 필드) — 실패해도 dispatch 자체는 성공으로 반환하고 에러만 실어보낸다.

## MV-2b~d 순서 제안 (근거 있는 재조정)

원래 계획은 b→c→d를 독립적으로 순서대로 분리하는 것이었지만, 실제 코드를 보면 `dispatchDueNotificationJobs`가 내부적으로 `reconcileDueSolapiNotificationJobs`를 호출하고, `reconcileDueSolapiNotificationJobs`는 `reconcileSolapiNotificationJobs`를 감싼다 — 즉 c가 d의 의존성이다. **c(reconcile)를 먼저 분리하고, d(dispatch)는 c가 이미 새 위치에 있다는 전제로 진행하는 게 재작업을 줄인다.** b(reserve)는 이 둘과 독립적이라 순서에 영향 없음.

## MV-2f 관련 참고

`providerResultContract.js`(`src/shared/contracts/`, 79줄)는 5개 provider(anthropic/openai/slack/solapi/storage) 공용 `{ ok, source, dryRun, providerResult, error }` shape를 정의한다. 위 세 함수는 각자 다른 반환 shape(`reserved`/`reused`/`canceledAfterReserve`, `checked`/`checkedCount`/`updatedCount`, `processed`/`processedCount`/`automaticSolapiReconcile`)를 쓰고 있어 억지로 공통 envelope에 맞추면 호출자(registry, App)의 필드 접근이 전부 깨진다. MV-2b~d를 마친 뒤에도 이 shape들을 유지하는 게 맞다면 MV-2f는 "채택 안 함, 파일 삭제 또는 provider별 개별 타입으로 교정"이 유력하다 — 최종 판단은 실제 분리가 끝난 뒤 내린다.

## 위험 요약

- 실제 알림 발송 코드 경로. 실제 Solapi 호출은 사람 Gate 없이 자동 실행하지 않는다.
- HTTP route 경로와 내부 60초 루프 경로 둘 다 동일하게 새 위치를 가리키도록 해야 한다.
- teacher-cancel race, claim 만료, single-flight 플래그 등 동시성 처리가 여러 곳에 있다 — 각각을 옮길 때 동시성 보장이 깨지지 않는지 fixture로 고정해야 한다.
- `refreshLessonCommentJobBeforeSend`는 2026-08-17 감사에서 실제 문구 불일치 버그의 근원이었던 함수다(현재는 수정됨, PR #142). 이 함수를 다시 건드릴 때는 특히 주의한다.
