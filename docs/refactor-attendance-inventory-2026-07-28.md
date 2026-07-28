# Attendance refactor inventory — 2026-07-28

## 범위

로드맵 16에서 출결 코드를 옮기기 전에 태블릿 출결, 수업일지 수동 출결, 날짜 범위 증분 동기화, Supabase 저장 원천, 출결 이력과 Solapi side effect를 고정한다. 이 inventory와 fixture는 운영 데이터를 수정하거나 실제 알림톡을 발송하지 않는다.

## 원천·완료·side effect

| 흐름 | 직접 원천·요청 | 완료 판정 | 파생·외부 side effect | 리팩터링 판단 |
| --- | --- | --- | --- | --- |
| 출결 전용 화면 초기화 | `GET /api/students`, 날짜 범위 `GET /api/lessons`, `GET /api/lesson-records` | 응답 배열을 현재 날짜 lessons/records로 적용 | 없음 | 실제 request·React state는 App에 유지 |
| 교사 수업 화면·출결 전용 화면 증분 확인 | 7초마다 날짜 범위 `GET /api/lesson-records` | 원격 row를 ID별 병합하고 동기화 상태 표시 | dirty/saving/failed 수업일지 draft의 비출결 필드를 보존하면서 출결 필드만 갱신 | 첫 저위험 후보: 병합 모델만 순수 분리 |
| 태블릿 미리보기 | `POST /api/attendance/preview` | 학생·현재 날짜 수업 후보와 기존 출결로 다음 action 계산 | 쓰기·알림톡 없음. 같은 날 여러 수업이면 선택 요구 | 서버 selection 규칙은 별도 fixture 전 이동 금지 |
| 태블릿 등원·하원 | `POST /api/attendance/check`, `source=kiosk` | `lesson_student_records` upsert 후 재조회 row 반환 | 필요하면 학생을 lesson 명단에 추가, `attendance_events` 기록, 학부모 Solapi 즉시발송을 비동기 queue | 다중 원천·외부 발송이므로 사람 gate 전 이동 금지 |
| 수업일지 수동 출결 저장만 | 같은 check endpoint, `source=manual`, `sendAlimtalk=false` | record upsert·재조회 결과를 React state에 적용 | `attendance_events` 기록, 알림 없음 | request/controller 이동 전 가상 분기 fixture 필요 |
| 수동 등원·지각·하원 저장+발송 | `source=manual`, `sendAlimtalk=true` | record 저장 후 Solapi 즉시발송 결과 포함 | 실제 학부모 발송, attendance event | 발송 gate 전 이동 금지 |
| 수동 결석 저장+예약 | `source=manual`, `attendanceStatus=absent`, `sendAlimtalk=true` | record 저장 후 다음 정각 `notification_jobs`/Solapi 예약 결과 확인 | 예약 성공 또는 failed job 저장. record 저장과 알림 예약은 부분 성공 가능 | 고위험 별도 gate |
| 일반 수업일지 record 저장 | `POST /api/lesson-records` 또는 bulk | Supabase 재조회 필드 대조 | 비출결 저장은 서버가 기존 출결 필드를 병합해 보존 | `mergeExistingAttendanceForNonAttendanceSave` 계약 유지 |
| 출결 audit | Supabase `attendance_events` | best-effort 저장 | 알림 성공/실패 결과 포함. event 실패가 record 저장을 되돌리지는 않음 | 운영 audit 변경 금지 |

직접 저장 원천은 Supabase `lesson_student_records`다. 출결 변경 이력은 `attendance_events`, 수동 결석 예약은 `notification_jobs`, 태블릿 또는 수동 즉시발송은 Solapi가 외부 원천이다. `lessons.student_ids`도 태블릿에서 반 기준으로 찾은 학생이 명단에 없을 때 추가 저장될 수 있다.

## 보존해야 할 순서

1. 현재 날짜·학생·수업 후보를 확정한다.
2. 미리보기면 record/lesson/알림 원천을 쓰지 않는다.
3. 실제 처리면 등원·하원·상태 action과 시각, 유예시간, 사유를 계산한다.
4. 필요 시 lesson 명단을 먼저 보강한다.
5. `lesson_student_records`를 저장하고 Supabase 재조회 row를 받는다.
6. 요청 옵션에 따라 즉시발송 또는 수동 결석 다음 정각 예약을 수행한다.
7. record 전후값과 알림 결과를 `attendance_events`에 남긴다.
8. 클라이언트는 반환된 lesson/record/job만 현재 상태에 반영한다.

## AI 자동검증 범위

- 정적 fixture: 날짜 범위 로드·7초 polling, dirty draft 병합, preview write 차단, record 저장, kiosk queue, 수동 결석 예약, event audit, bulk 비출결 저장의 출결 필드 보존 경계를 검사한다.
- 가상 데이터 fixture: 다음 16B-1에서 같은 record ID의 원격 출결과 로컬 dirty 수업일지 draft를 만들어, 출결 필드만 최신값으로 바뀌고 수업내용·숙제·코멘트 draft는 보존되는지 검사한다.
- 운영 Supabase·Solapi 호출: 0건.

## 별도 유지보수·보안 진단

아래 항목은 기능 수정이며 App.jsx 의미 단위 분리에 섞지 않는다.

1. 출결 전용 화면은 현재 `/api/students` 전체 목록을 읽고 `/api/attendance/*`, lessons, records 경로에 전용 kiosk credential/범위 제한이 보이지 않는다. 교사 bearer·Storage 소유권 보안 gate와 함께 API 공개 범위를 점검해야 한다.
2. 출결 전용 화면 초기화는 Supabase `app_state.attendanceSettings`를 읽지 않고 기기 localStorage/default 값으로 유예시간을 사용한다. 다른 기기에서 교사 설정과 달라질 수 있으므로 저장 신뢰성 세션에서 원천을 통일해야 한다.
3. 수동 등원·지각·하원의 즉시 알림톡이 실패해도 클라이언트는 결석 예약 실패와 달리 오류를 던지지 않아 modal이 닫힐 수 있다. 부분 성공 상태와 알림관리 연결을 별도 유지보수 단위로 보강해야 한다.
4. kiosk 알림톡은 API 응답 뒤 비동기로 실행되므로 발송 실패는 `attendance_events`에는 남지만 kiosk 사용자에게 즉시 보이지 않는다. 운영 기대와 재처리 경로를 별도 확인해야 한다.

## 다음 단위

- `16B-1` 완료: `attendanceSyncFields`와 `mergeRemoteAttendanceRecord`를 `attendanceSync.js` 순수 모델로 분리했다. 가상 remote/local record로 dirty/saving/failed 비출결 draft 보존과 saved/idle 전체 원격 반영을 검사한다.
- `16B-2` 완료: 수동 출결 modal의 태블릿 기록 판정, 초기 status, ISO/시각 정규화 기반 변경 감지를 `attendanceModalModel.js`로 분리했다.
- `16B-3` 완료: 모달의 수업 시작·등원 시각·유예시간 기반 지각분 계산 helper를 같은 순수 모델로 이동하고 정상·지각·invalid 시각을 fixture로 고정했다.
- `16B-4` 완료: local state와 2단계 확인 UI, 주입 `onSave`만 소유하는 `AttendanceModal.jsx`를 분리했다.
- `16C-1` 완료: kiosk 결과·preview action label, 다중 수업 선택 후보와 상세 문구를 `attendanceKioskModel.js`로 분리하고 가상 응답으로 검증했다.
- `16C-2` 완료: local pin/preview/result/submitting state와 주입 preview/check callback만 소유하는 `AttendanceKiosk.jsx`를 분리했다.
- `16D-1` 완료: check/preview endpoint·30초 timeout·오류 문구 계약을 `attendanceApi.js`에 분리하고 App에서 공통 request client를 주입한다.
- `16D-2` 완료: 날짜 변경 차단·PIN 검증·preview payload·오류 변환을 `attendanceKioskPreviewController.js`로 분리했다.
- 다음 `16D-3`: kiosk check payload와 반환 lesson/record/event의 주입형 적용 순서를 controller로 분리하고 TARGET/CONTROL 가상 state로 검증한다.
- 실제 polling effect, React state, 출결 저장·알림톡은 App에 남긴다.
