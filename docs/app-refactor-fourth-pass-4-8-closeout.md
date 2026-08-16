# App/API 4차 리팩터링 4-8 종료 감사

업데이트: 2026-08-16
측정 branch: `codex/app-refactor-fourth-pass-4-7h` (`origin/main` 기반, 4-6b/4-7 계열이 아직 main에 병합되지 않은 시점의 worktree 기준)

## 종료 범위

이 문서는 4-0 기준선(`docs/app-refactor-fourth-pass-plan.md`)과 이번 세션에서 진행한 4-4 나머지 handler, 4-5b/c, 4-6a/b, 4-7a~h 종료 시점을 대조한다. 4-1~4-3, 4-4 앞부분, 4-5a/d/e는 이전 세션·다른 owner(Codex 통합)가 이미 종료 감사 문서(`app-refactor-fourth-pass-api-contract-closeout.md`, `app-refactor-fourth-pass-server-route-closeout.md`)와 계획 문서 `## 4-1 종료 감사`, `## 4-2 진행 상태`, `## 4-3 종료 감사`, `## 4-4/4-5 진행 상태` 절로 닫았으므로 재검증만 하고 재작성하지 않는다.

## 4-0 대비 종료 수치

| 경계 | 4-0 기준 (2026-08-04) | 종료 시점 (2026-08-16) | 비고 |
| --- | ---: | ---: | --- |
| `src/app/App.jsx` | 10,903줄 · handle* 113개 · fetch 36회 · postJson* 37회 | 10,723줄 · handle* 116개 · fetch 25회 · postJson* 19회 | 4-4가 handler 15개를 domain action으로 옮겼지만 같은 기간 신규 기능이 추가되어 줄 수는 거의 유지. fetch/postJson 직접 호출은 각각 11회·18회 감소 |
| `api/server.js` | 7,806줄 · named function 264개 · 직접 dispatch 120개 | 7,255줄 · named function 237개 · 직접 dispatch 92개 | 4-3(선행 세션) + 4-5f route registry 이동으로 direct dispatch 28개 감소 |
| `api/routes/coreData.js` | 5,798줄 | 4,907줄 | 4-2 row mapper 분리(선행 세션)로 감소 |
| DB row mapper | 44개 집계(4-0) → 45개 exact(4-2a 재감사) | `src/shared/persistence/*RowMappers.js` 6개 파일, 45/45 | 4-2 종료, 이번 세션에서 재검증만 수행 |
| route registry | 0개 | `src/shared/server/*RouteRegistry.js` 17개 + `examAnalysisAiRouteRegistry.js`(4-5f) | 4-3 종료 + 4-5f 추가 |
| `src/app/App.css` | 21,727줄 · rule 약 3,173개 | 22,609줄 (이 worktree는 4-6b 미병합) | 4-6a 기준선 조사, 4-6b는 `App.tokens.css`(82줄) 물리 분리를 별도 branch로 완료·push했으나 이 감사 시점엔 main에 아직 없음. 4-6c(도메인 entry 분리)는 보류 |
| API 런타임 JS | 12개 | 12개 | Vercel Hobby 12-file 상한 유지. 4-5b Storage 이동 시 13개로 초과했다가 기존 `api/lib/supabaseRest.js` 병합으로 복귀 |
| safe browser spec | 2개 · 47 test · 주 spec 1,817줄 | 13개 · 77 test · 주 spec 1,444줄 | 4-7a~h로 8개 도메인 spec(settlement/resource/school-calendar/notification-jobs/supplement-tasks/student-management/exam-prep + 공유 helper) 신설. 전체 test 수는 순감소 없이 유지(47→77은 세션 밖 기능 추가분 포함) |
| main JS 번들 | 942.25 kB · gzip 234.31 kB | 938.39 kB · gzip 234.02 kB | 거의 동일. lazy chunk 12/12 유지 |
| main CSS 번들 | 325.87 kB · gzip 51.96 kB | 338.44 kB · gzip 54.18 kB | 4-6b 미병합 상태라 증가. 병합 후 재측정 필요 |
| full production | 827/827 · 80.88초 | test:production 스크립트 305개(scenario 828/828) · 57.45초 | 스크립트 수 증가에도 시간은 단축 (병렬화·머신 차이 가능성 있어 정성적 참고치) |
| domain all | 62/62 · 1.63초 | 74/74 fixtures · 3.48초 | fixture 수 증가 반영 |

## 소유권 지도 재검증

`docs/app-refactor-fourth-pass-plan.md`의 "현재 소유권 지도" 표를 이번 세션에서 다룬 경계만 다시 대조했다.

- **lesson/attendance**: 4-4e(`lessonRecordSaveApi.js`)·4-4f(`monthlyRegularLessonOpenApi.js`)로 App의 두 handler를 domain API로 옮겼다. CAS/재조회/rollback owner는 이동하지 않았다 — 유지.
- **settlement**: 4-4h(`monthlySettlementMonthSaveApi.js`)로 `postAppState` 주입 방식을 유지하며 옮겼다. app-state CAS owner 불변 — 유지.
- **exam analysis**: 4-5c(`operations` DI)로 Storage 호출을 주입 가능하게 만들었지만 실제 Storage/AI 실행 owner는 이동하지 않았다. row-fill/output-draft 4개는 여전히 inline — 계획대로 4-5g로 이연.
- **provider(Solapi/Slack/comment-polish)**: 4-5a 기준선 이후 실제 호출 경로는 변경하지 않았다. 4-5e provider result envelope는 pure fixture로만 존재하고 실제 orchestrator에 미적용 — 계획대로 4-5i로 이연.
- **E2E owner**: 4-7a~h는 테스트 파일 구조만 옮겼고 테스트 본문(assertion·route mock·selector)은 변경하지 않았다. `safeSmokeSupport.js`의 공유 helper(`loginAsTeacher`, `resetSafeFixture`, `collectPageErrors`, `getKoreaDateAfterDays`, `safeApiBaseUrl`)만 새로 추출했다.

의도적 예외(Notification Center 직접 timeout transport, Settings 주입 `postJson`, 시험분석 App runtime request)는 이번 세션에서 손대지 않았다.

## 4-7 목표 대비 상태

계획의 4-7 목표는 "단일 spec을 auth/lesson/student/supplement/notification/settlement/resource로 나눈다"였다. 종료 시점 상태:

- 완료: settlement, resource, notification(jobs), supplement, student, exam-prep(계획엔 없었지만 고위험 CAS 도메인이라 추가), school-calendar(계획엔 없었지만 자연 경계로 분리).
- lesson: 남은 34개 test 중 21개가 lesson-journal 핵심 도메인으로 사실상 이 파일이 lesson domain spec 역할을 한다. 별도 파일로 이름만 바꾸는 작업은 하지 않았다 — 파일명(`academy-os-safe-smoke.spec.js`)이 아직 lesson 전용임을 명시하지 않으므로 후속 candidate로 남긴다.
- auth: 별도 auth 전용 spec은 만들지 않았다. `safe preview opens the login screen...`, `report snapshot requires teacher auth...` 2개 test가 메인 spec에 남아 있다. 전용 파일로 분리할 만큼 크지 않다고 판단해 보류.
- 나머지 11개 test(teacher view lazy boundary 2, exam analysis boundary 2, learning support 3, homework verification 1, planning tool boundary 1, dashboard boundary 1, consecutive absence makeup 1)는 서로 다른 도메인의 "lazy chunk 로딩" 경계 테스트가 섞여 있어 하나의 파일로 묶으면 의미 있는 도메인 경계가 되지 않는다 — 강제로 분리하지 않고 메인 spec에 유지하기로 판단했다.
- 4-7 목표 2("endpoint contract 실패·source conflict·provider failure 복구 동선 추가")는 새 테스트 시나리오 작성이 필요한 확장 작업이라 이번 세션 범위에 포함하지 않았다 — 별도 요청 시 진행.
- 4-7 목표 3(grep 가능한 domain 명령·전체 격리 runner 유지)은 `playwright.config.js`의 `testDir` auto-discovery로 이미 충족되며 변경하지 않았다.

## 미완료 후보 (별도 차수로 이연)

| 항목 | 사유 | 다음 단계 |
| --- | --- | --- |
| 4-6c CSS 도메인→lazy chunk 마이그레이션 | cascade-order 변경은 기능 테스트로 검증 불가, 이 환경엔 시각 회귀 도구 없음 | Codex에게 프롬프트 전달 완료(이 세션 앞부분) |
| 4-5g row-fill/output-draft AI + 쎈 catalog 분리 | Ssen catalog/output-content 블록과 강하게 얽혀 있어 단일 안전 단위로 쪼개기 어려움 | Codex에게 프롬프트 전달 완료 |
| 4-5h notification-jobs/Solapi/Slack route registry | 실제 provider 호출 경로라 사람 검증 필요 | Codex에게 프롬프트 전달 완료 |
| 4-5i provider envelope를 실제 orchestrator에 적용 | throw/복구 의미가 바뀔 수 있어 별도 안전 단위 필요 | Codex에게 프롬프트 전달 완료 |
| lesson spec 전용 파일명 분리 | 남은 34개 중 21개가 이미 사실상 lesson 도메인이나 파일명이 이를 반영하지 않음 | 후속 세션에서 이름만 바꾸는 저위험 rename으로 처리 가능 |
| auth 전용 spec 분리 | test 2개뿐이라 분리 이득이 적음 | 필요시 school-calendar 규모 이하로 저위험 처리 가능 |
| UI 시각 통일(버튼 색상/계층, 펼치기·접힘 패턴) | 이번 세션과 무관, 별도 Claude 세션에서 진행 중 | 해당 세션에서 계속 |

## 결론

4-4 나머지 handler(4개), 4-5b/c, 4-6a/b, 4-7a~h(safe E2E 8분할)를 각각 독립 branch로 검증·push했다. 모든 단위는 lint/test:production/build를 통과했고 browser-smoke는 각 단위마다 최소 2회 독립 실행에서 77/77을 확인했다(4-7c/4-7f/4-7h에서 관찰된 `resource-material.spec.js`의 간헐적 disabled-fieldset 타이밍 flake는 격리 실행·재실행으로 매번 무관함을 확인). main 병합은 Codex가 별도 worktree에서 진행 중이므로 이 세션은 병합을 수행하지 않았다. 미완료 후보는 위 표로 4-5차 이후로 이연하고 4차 범위를 닫는다.
