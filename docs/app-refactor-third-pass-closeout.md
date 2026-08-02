# App 3차 리팩터링 종료 감사

업데이트: 2026-08-02

## 결론

App 3차 리팩터링 3-0~3-8은 기능을 다시 구현하지 않고 화면·local state·저장·외부 side effect의 소유권을 분리하고, 초기 번들과 일반 변경 반경을 줄이는 목표를 달성해 종료한다. 이 문서는 종료 시점의 소유권과 의도적 예외를 고정하는 기준이며, 후속 기능 작업은 필요한 도메인 파일과 adapter부터 찾는다.

3차 범위를 끝낸 뒤 남은 구조 개선은 자동으로 다음 리팩터링 차수로 이어가지 않는다. 제품 우선순위와 별도 기준선이 생길 때 새 작업으로 판단한다.

## 기준선 대비 결과

| 지표 | 3-0 기준선 | 3-8 종료 | 변화 |
| --- | ---: | ---: | ---: |
| `src/app/App.jsx` | 22,912줄 / 1,011,179 bytes | 11,000줄 / 476,602 bytes | 줄 52.0%, bytes 52.9% 감소 |
| production main JS | 1,642.41 kB | 934.69 kB | 43.1% 감소 |
| production main gzip | 422.81 kB | 231.48 kB | 45.3% 감소 |
| safe browser smoke | 8개 | 18개 | lazy 지연·실패 복구와 고위험 저장 경로 확대 |
| production scenario | 811개 | 821개 | 기존 검사 약화 없이 경계 계약 추가 |
| 5개 도메인 fast 경로 | 통합 중복 제거 27개 | 개별 합계 40개 / 통합 중복 제거 39개 | lesson 10, supplement 7, student 9, notification 7, settlement 7 |
| lazy 화면 경로 | 0개 | 논리 21개 / 물리 chunk 12개 | 저빈도 화면과 중첩 화면 지연 로딩 |

`App.jsx > 500 KB` Babel 경고는 제거됐다. main JS가 500 kB를 넘는다는 Vite의 일반 chunk 경고는 남지만, 3-0 대비 43.1% 감소와 12개 물리 chunk로 동일한 체감 효과를 입증했다. 학생 로그인·핵심 modal을 추가 지연화해 900 kB를 강제하는 것보다 현재 경계를 유지하는 편이 안전하다.

## 종료 소유권 지도

| 영역 | 화면·local/draft owner | 저장 원천·외부 side effect owner | 오류·복구 계약 |
| --- | --- | --- | --- |
| session | `useAppSession`이 초기 session 판독과 login/logout state를 소유 | 인증 request는 주입받고 teacher session은 같은 hook이 local/session storage와 cookie에 보존 | 손상된 저장값은 무시하고 한 저장 채널 실패가 다른 채널과 logout을 막지 않음 |
| lesson | `TeacherLessonHubV2`, `LessonJournalDetail`, `LessonModal`, `useLessonJournalDraftController` | App의 수업·수업일지 저장, Supabase 재조회, 알림 예약·취소·발송·reconcile handler | 저장 중 후속 draft는 revision으로 보존하고 부분 실패·다른 lesson 응답은 현재 입력을 덮지 않음 |
| supplement | `SupplementCenter`와 도메인 controller | App의 저장·재조회와 Solapi 예약·취소; adapter는 persistence/provider/orchestration identity만 조립 | 저장·알림 결과를 별도 상태로 유지하고 취소·통합 동작은 App callback 순서를 보존 |
| student | `StudentManager`, profile/list/overlay 화면과 local selection/draft | App의 학생 저장·Supabase 재조회·퇴원·복구·영구 삭제·audit | request-id와 재조회 대조, 실패 시 profile/memo draft 보존, 삭제 전 reference 재확인 |
| notification | `NotificationCenter`와 `useNotificationNoticeController`의 recipient/composer/history state | App은 job 취소·reconcile 및 특강 저장 owner; 공지 controller는 도메인 전용 API 요청 조립을 소유 | stale refresh·single-flight·confirm/error 상태와 local draft를 유지하고 provider 결과는 재조회 |
| settlement | `useMonthlySettlementController`의 선택 월·계산·local recovery draft, 순수 Calendar/Table view | 명시적 `onSaveMonth`와 App의 app_state/Supabase 저장·재조회가 authoritative source | month/revision guard로 active/inactive 월의 후속 입력을 새 `updatedAt` 기준 recovery에 rebase |
| exam analysis | `ExamAnalysisPipelineCenter`가 목록·run·파일 화면과 도메인 전용 request 조립을 소유 | 12개 API request·format 구현과 저장 owner는 App runtime에 유지 | timeout/mismatch/error 표시와 사람 확정값 보존은 이동 전 계약과 동일 |
| settings | `SettingsCenter`가 form draft와 표시 상태를 소유 | App이 주입한 `postJson` transport를 명시적 버튼에서만 사용 | 자동 호출 없이 기존 성공·실패 표시와 사람이 누르는 저장/테스트 경계를 유지 |

## 의도적 예외

- `useMonthlySettlementController`의 `localStorage`는 서버 저장이 아니라 복구 초안이다. 저장 완료는 `onSaveMonth`의 API 성공과 App의 Supabase 재조회 값이 기준이다.
- `useNotificationNoticeController`는 공지 도메인의 `postJsonWithTimeout`·fetch request 조립을 직접 소유한다. App은 Solapi job 취소·reconcile과 특강 저장 경계를 계속 소유한다. 이 예외를 숨기지 않고 controller fixture와 adapter 계약으로 검증한다.
- `ExamAnalysisPipelineCenter`는 시험분석 목록·run·파일 API를 도메인 화면에서 직접 조립한다. 유료 AI 실행과 확정값 저장은 명시적 사용자 행동이며, App runtime에 남은 12개 request 구현의 owner는 이동하지 않았다.
- `SettingsCenter`는 App에서 전달한 transport를 소비한다. 화면 진입만으로 실제 알림 테스트나 계정 저장을 실행하지 않는다.
- effect adapter 네 개는 state·Storage·API를 소유하지 않는 frozen function identity map이다. 분류 이름은 실제 저장/provider/orchestration 의미와 맞아야 한다.

## 종료 기준 판정

- 큰 교사 화면과 local controller는 도메인 파일에 있어 일반 표시·입력 변경은 대체로 `App.jsx` 없이 가능하다. 새 서버 저장·삭제·provider side effect를 추가할 때만 App action/runtime 계약을 함께 수정한다.
- 3차 후반의 일반 화면 단위 source 변경 반경은 화면, lazy registry/runtime, 경계 fixture 등 3~5개 source 파일이었다. 검증·상태 문서는 이 숫자에서 제외한다.
- 종료 측정에서 lesson 10/10 0.22초, supplement 7/7 0.16초, student 9/9 0.21초, notification 7/7 0.17초, settlement 7/7 0.17초로 모두 10초 목표보다 충분히 짧았다.
- App 전용 Babel 500 KB 경고 제거, main/gzip 43.1%/45.3% 감소, 21개 logical lazy 화면과 12개 physical chunk로 초기 진입 개선을 수치화했다.
- 저장 원천·외부 side effect·오류 복구 owner를 위 표와 `test:third-pass-closeout` 구조 계약으로 고정하고, production/build/safe browser/exact-head/main CI로 회귀 여부를 확인한다.

## 3차 범위 밖 후속 큐

- CSS domain entry 분리와 사용하지 않는 스타일 제거
- `api/server.js` route registration, auth, core data, notification/provider service 분리
- API payload·DB row 타입 계약과 runtime validation
- 운영 쓰기 없이 실행 가능한 도메인별 safe E2E 확대
- `StudentPortalV2`, 학생 로그인·핵심 modal, 보고서 화면의 추가 분리는 실제 변경 속도나 번들 병목 근거가 생길 때만 별도 계획으로 검토

위 항목은 남은 결함이 아니라 별도 투자 후보다. 3차 리팩터링 완료 뒤 자동으로 4차를 시작하지 않는다.
