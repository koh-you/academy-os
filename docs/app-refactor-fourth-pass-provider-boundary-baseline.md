# App/API 4차 리팩터링 4-5 provider 외부 side-effect 경계 기준선

업데이트: 2026-08-15

## 목적

4-5는 notification source persistence와 Solapi/Slack execution을 분리하고, Storage/AI execution을 명시적 effect surface로 고정하며, source saved/provider failed/retry scope/audit result를 공통 결과 shape로 고정한다(`docs/app-refactor-fourth-pass-plan.md`의 4-5 절). 이 문서는 착수 시점 조사 결과이며, 4-5b 이후 단위가 대조할 시작점을 고정한다. 4-5a는 제품 runtime을 변경하지 않는다.

## 정량 기준선

| 항목 | 값 |
| --- | --- |
| Solapi 원시 호출 지점 | 4개, 모두 `api/routes/notifications.js`에 격리됨 |
| Solapi를 호출하며 동시에 DB를 쓰는 orchestration 함수 | `api/server.js`에 8개(`reserveNotificationJobInSolapi`, `reserveNotificationJobsInSolapi`, `withSolapiRetry` 사용처 포함 `reconcileSolapiNotificationJobs`, `reconcileDueSolapiNotificationJobs`, `dispatchDueNotificationJobs`, 관련 HTTP handler 3개) |
| Slack 원시 호출 지점 | 4개, 모두 `api/routes/notifications.js`에 격리됨 |
| Slack을 호출하며 동시에 DB를 쓰는 orchestration 함수 | `api/server.js`의 `reserveTodayTeacherScheduleSlack` 1개 |
| AI 원시 호출 지점 — comment polish | `api/routes/commentPolish.js`에 격리(DB import 없음, 이미 4-5 goal 2의 모범 사례) |
| AI 원시 호출 지점 — 시험분석 | 8개(Anthropic/OpenAI 쌍 4종), 전부 `api/server.js`에 inline, 별도 파일 없음 |
| AI를 호출하며 동시에 DB·Storage를 쓰는 orchestration 함수 | `api/server.js`의 4개(`generateExamAnalysisOutputDraft`, `verifyExamAnalysisSourceFileWithAi`, `detectExamAnalysisQuestionBoundaries`, `fillExamAnalysisQuestionRowsWithAi`+refine) |
| Storage 원시 함수 | 7개, 전부 `api/server.js`에 inline(`supabaseStorageRequest`, `ensureStorageBucket`, `uploadStorageObjectWithBucketRetry`, `downloadStorageObjectWithMetadata`, `downloadStorageObject`, `deleteStorageObject`, `createSignedStorageUrl`) — 별도 파일로 분리되지 않음 |
| Storage를 DI로 이미 분리한 도메인 | `src/domains/resources/resourceMaterialStorageOperation.js` 1개(모범 사례) |
| Storage를 inline으로 직접 호출하는 시험분석 경로 | 6개 호출 지점, rollback 없음 |
| 아직 route registry로 옮기지 않은 provider 관련 HTTP dispatch | 시험분석 AI 5개 + notification-jobs/solapi/slack 다수, `api/server.js`에 직접 `if (request.method === ...)` 분기 |

## 핵심 발견: provider마다 결과 shape가 다르다

Solapi는 `source: "solapi"|"supabase"`, Slack은 `dryRun: boolean`, AI는 `{ provider, model }`, Storage는 raw buffer/boolean을 반환한다. 공통으로 쓰이는 필드는 outermost HTTP envelope(`{ ok, ... }`)와 임시방편적인 `error: string` 뿐이며, 4-5 목표 3("공통 결과 shape 고정")은 아직 어느 provider에도 적용되지 않았다.

## 이미 격리된 모듈(재사용할 모범 사례)

- `api/routes/notifications.js` — Solapi/Slack 원시 호출, DB import 없음
- `api/routes/commentPolish.js` — AI comment polish 원시 호출, DB import 없음
- `src/domains/resources/resourceMaterialStorageOperation.js` — Storage를 `operations` DI로 감싸고 업로드/삭제 실패 시 명시적 rollback을 구현한 유일한 사례. 4-5b가 그대로 재사용할 템플릿이다.

## 안전장치 격차

- Solapi(`ALIMTALK_DRY_RUN`, 수신자 강제 치환)와 Slack(`SLACK_DRY_RUN`)은 명시적 env 기반 dry-run 스위치가 있다.
- AI(시험분석)와 Storage는 dry-run 스위치가 없다 — 자동화 테스트에서의 안전성은 `scripts/safe-local-api.mjs`가 이 endpoint들을 아예 구현하지 않아 트래픽이 도달하지 않는 방식으로 확보된다. 이는 명시적 게이트가 아니라 우회이므로, 4-5c/4-5d에서 AI에도 comment polish처럼 `mock` provider 경로를 검토할 필요가 있다.

## 4-5 안전 단위 순서 (제안)

4-4b~4-4h와 같은 방식 — 작고 독립적으로 병합 가능한 단위, 각 단위는 하나의 소유권 경계만 옮긴다.

1. **4-5b — Storage 원시 함수를 `api/lib/supabaseStorage.js`로 이동.** 동작 변경 없는 순수 파일 이동. 기존 resource-material fixture로 검증.
2. **4-5c — 시험분석 Storage 호출을 `resourceMaterialStorageOperation.js`와 같은 `operations` DI로 감싼다.** 4-5b 모듈을 재사용, AI/DB orchestration은 그대로 둔다.
3. **4-5d — 시험분석 AI 8개 원시 함수를 `api/routes/examAnalysisAi.js`로 이동.** `commentPolish.js`와 동일한 무-DB-import 원칙. 동작 변경 없음.
4. **4-5e — 공통 provider 결과 envelope 정의.** `src/shared/providerResultContract.js`에 `{ ok, source, dryRun, providerResult, error }` 형태를 고정하고 Solapi/Slack/AI 4개 orchestrator에 얇게 씌운다. `withSolapiRetry`/`claimNotificationJob`/`isStaleDispatchClaim` 패턴을 이름 있는 재사용 helper로 formalize한다.
5. **4-5f — provider 관련 HTTP dispatch를 route registry로 이동.** 4-3에서 auth/portal/core-data에 적용한 것과 동일한 패턴. 이 단위는 4-5b~e가 만든 함수 경계가 안정된 뒤 마지막에 진행한다.

## 상태·저장·부작용 경계 (변경 없음)

4-5a는 조사만 수행한다. 4-5b부터 실제 파일 이동/DI 도입이 시작되며, 각 단위는 기존과 동일하게 own branch → 검증 → commit → push를 따르고 main 병합은 사용자 승인 후에만 진행한다.

## 2026-08-16 통합 검수 상태

- 4-5b는 Vercel function 수를 늘리지 않기 위해 새 파일 대신 기존 `api/lib/supabaseRest.js`로 Storage primitive 7개를 이동했다.
- 4-5c는 시험분석 PDF download/delete 호출을 operations 경계로 주입했다. 업로드·서명 URL과 다른 도메인의 Storage 호출은 이번 단위 밖이다.
- 4-5d는 vision-check·boundary-detect의 Anthropic/OpenAI PDF fetch만 DB-free provider 모듈로 이동했다. row-fill·output-draft transport는 아직 server에 남아 있다.
- 4-5e는 provider result envelope를 정의했지만 기존 orchestrator에는 적용하지 않았다. 통합 검토에서 Anthropic `content` fallback/trim 호환성 누락을 수정하고 네트워크 없는 transport 동작 fixture를 추가했다.
