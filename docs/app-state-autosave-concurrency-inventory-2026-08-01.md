# app_state 자동저장 경쟁 조건 inventory

조사일: 2026-08-01  
기준: `origin/main` `b6ad77bf`  
운영 쓰기: 0건

## 결론

현재 공통 자동저장은 변경된 `app_state` key만 500ms debounce로 전송한다. 전체 snapshot 덮어쓰기는 제거됐지만, 같은 key의 요청이 역순으로 서버에 도착하면 마지막 도착 요청이 최신 값을 덮을 수 있다. 클라이언트 request ID는 상태 문구만 보호하며 DB write에는 precondition을 전달하지 않는다.

오늘 단위는 구현을 바꾸지 않고 이 경계를 deterministic fixture와 CI로 고정한다. 운영 Supabase, 알림, Storage, SQL에는 접근하지 않는다.

## 현재 계약

| 층 | 현재 동작 | 남은 위험 |
|---|---|---|
| local draft | React/localStorage state가 즉시 바뀜 | 서버 실패 뒤 현재 브라우저 값이 저장본처럼 보일 수 있음 |
| 변경 선택 | 직전 저장 snapshot과 달라진 key만 선택 | 같은 key 내부의 독립 필드는 분리되지 않음 |
| debounce | 전체 변경 key 묶음을 500ms 뒤 POST | 이미 시작된 요청은 취소·직렬화되지 않음 |
| API | `POST /api/app-state`가 key별 upsert | expected version/updatedAt 조건 없음 |
| DB | `state_key` PK, `updated_at` 보유 | 늦게 도착한 오래된 요청도 정상 upsert |
| 응답/UI | 최신 request ID만 `저장 완료/실패` 표시 | 저장 뒤 GET 재조회·값 대조 없음 |
| GET | 값 map은 기본 반환, row metadata는 `includeRows=true`일 때만 반환 | 일반 hydration에서 key별 version을 보관하지 않음 |

## 자동저장 key 11개

`aiSettings`, `attendanceSettings`, `deletedLessonBundles`, `generatedLessonControls`, `lessonNotificationPlans`, `lessonResearchItems`, `notificationLogs`, `examPostTargetStudentIds`, `tallySubmissions`, `tallySummaries`, `wrongProblems`.

`reportSnapshots`는 2026-08-03부터 이 자동저장 묶음에서 제외했다. 보고서 버튼은 전용 인증 API가 최신 `app_state.reportSnapshots`를 읽고 `updated_at` CAS로 한 건을 append한 뒤 Supabase 재조회가 일치할 때만 화면 목록을 교체한다.

자동저장 POST 자체는 Solapi 발송·예약·취소, Storage 업로드, 운영 삭제를 실행하지 않는다. 다만 저장된 설정과 계획은 이후 별도 사용자 동작의 입력이 될 수 있으므로 값 유실을 허용하면 안 된다.

## 다음 구현 단위

1. 같은 브라우저의 동일 key 저장을 직렬화하고, 진행 중 변경은 다음 요청으로 합친다.
2. GET hydration에서 key별 `updatedAt`을 보관한다.
3. POST에 key별 expected `updatedAt`을 전달하고 서버 PATCH 조건으로 CAS한다.
4. CAS 충돌은 409와 최신 row를 반환해 자동 병합하지 않고 사용자에게 새로고침/재검토를 요구한다.
5. 저장 성공 뒤 대상 key만 재조회해 값과 version을 대조한 후 `저장 완료`를 표시한다.

새 SQL은 필요 없다. 기존 `app_state.updated_at`을 사용한다. 자동저장 11개 key와 보고서 전용 명시 저장은 서로의 저장 상태를 섞지 않으며, 명시 저장·재조회 계약을 이미 가진 정산·강사 운영 메모에도 섞지 않는다.

## 자동 검증

`npm run test:app-state-autosave-inventory`는 다음을 확인한다.

- 자동저장 대상 12개와 500ms 변경-key debounce 경계
- GET의 선택적 row metadata와 `updated_at` schema
- POST/upsert에 CAS와 저장 후 재조회가 아직 없다는 현재 경계
- 새 요청이 먼저, 오래된 요청이 나중에 도착하면 오래된 값이 최종값이 되는 재현 fixture
- 관련 검사가 GitHub Actions Production checks에 연결됐는지
