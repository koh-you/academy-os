# Notification Center Refactor Inventory — 2026-07-23

## 범위

- 로드맵 13 `notification center`의 App.jsx 의미 단위 분리만 다룬다.
- 문구·기능·수신 대상·발송 시각·운영 데이터는 변경하지 않는다.
- Solapi 특강 템플릿 연결/테스트 발송은 외부 검수 완료 전 금지한다.

## 현재 원천

| 영역 | 읽기 원천 | local state | 저장/외부 side effect |
| --- | --- | --- | --- |
| 공지 수신자 | `students`, `classTemplates` | 반/검색/학생 선택/대상 모드 | 없음 |
| 공지 초안 | `aiSettings`, 코드 템플릿 | 제목/본문/템플릿/예약일시 | AI 수정 `/api/ai/comment-polish` |
| 즉시 발송 | 공지 초안 + 학생/학부모 번호 | 진행 문구 | `/api/notifications/comment-alimtalk`, `/api/notification-jobs` |
| 예약 발송 | 공지 초안 + 예약시각 | 진행 문구, optimistic jobs | `/api/notification-jobs/reserve`, Supabase row, Solapi 예약 |
| 발송 기록 | `notificationJobs` + `localNoticeJobs` | filter/펼침/action 상태 | DELETE row, Solapi 취소 callback, 결과 reconcile callback |
| 특강 안내문 | guides/applications/enrollments/lessons/records | 특강 workspace tab과 별도 panel state | 특강 저장/수업 생성/application 갱신 callbacks |

## 위험 경계

- `sendNoticeNow`, `scheduleNotice`, `cancelNotificationJob`, `deleteNotificationJob`, `reconcileSolapiResultsForNoticeJobs`는 실제 발송·예약·취소·DB mutation 경계다.
- `buildNoticePayload`와 `buildNoticeJob`은 대상·문구·예약시각을 결정하므로 orchestration과 함께 별도 gate가 필요하다.
- `polishNoticeMessage`는 AI 호출 후 local draft를 바꾸므로 저장/발송과 분리해 다룬다.
- `SpecialLectureNoticePanel`은 Solapi 특강 템플릿 외부 검수 gate와 겹치므로 이번 첫 단위에서 이동하거나 연결하지 않는다.

## 13A-1 안전 단위

- 페이지 제목/설명, 기록 로딩·실패·재시도 표시, 공지/특강 탭, 특강 수업/안내문 탭, 개별 발송/기록 탭만 `NotificationCenterNavigation.jsx`로 이동한다.
- 컴포넌트는 표시값과 callback만 받고 state/API/Supabase/Solapi를 직접 소유하지 않는다.
- App은 기존 탭 state와 `onRefresh`, filter 선택을 계속 소유한다.

## 13A-2 안전 단위

- 수신 모드, 반/검색 filter, 대상 건수, 학생 선택 목록을 `NotificationRecipientPanel.jsx`로 이동했다.
- `students`, `classTemplates`, 선택 state, 학생 filter/수신 대상 계산과 selection callback은 App이 계속 소유한다.
- 컴포넌트는 controlled 값과 callback만 사용하며 API/Supabase/Solapi 또는 실제 발송 action을 소유하지 않는다.

## 13A-3 안전 단위

- 템플릿·제목·본문·예약시각·미리보기·action button 표시를 `NotificationComposerPanel.jsx`로 이동했다.
- 초안 state와 `noticeText`/`scheduledAt`, 템플릿 적용, AI 수정, 예약·즉시발송 handler는 App이 계속 소유한다.
- 컴포넌트는 기존 disabled 조건과 callback 연결만 소유하고 API/Supabase/Solapi를 직접 호출하지 않는다.

## 13A-4 안전 단위

- 발송 기록 한 행의 상태·종류·수신자·시각·미리보기와 관리 버튼 표시를 `NotificationHistoryRow.jsx`로 이동했다.
- 상태/종류 helper, 취소·삭제 가능 판정과 실제 취소·삭제 handler는 App이 계속 소유한다.
- 행은 전달받은 job을 표시하고 callback에 되돌려줄 뿐 API/Supabase/Solapi mutation을 직접 수행하지 않는다.

## 13A-5 안전 단위

- 발송 기록 header/status/Solapi 안내/table/collapsed shell을 `NotificationHistoryPanel.jsx`로 이동하고 분리된 row를 조합했다.
- filter/open state, 결과 대조 대상 계산과 실제 reconcile/cancel/delete handler는 App이 계속 소유한다.
- shell은 controlled 값과 callback만 사용하며 API/Supabase/Solapi mutation을 직접 수행하지 않는다.

## 13B-1 순수 모델 단위

- 로컬/서버 job 병합, Solapi 결과 대조 대상, 지난 예약과 상태별 목록, 현재 filter 목록/label을 `notificationCenterModel.js`로 이동했다.
- persisted ID 우선, 과거 예약의 확인필요 편입, 전체 40건 제한을 deterministic fixture로 고정했다.
- 기존 취소 가능/과거시각/provider reference 판정 함수를 주입하며 React/API/Supabase/Solapi mutation은 소유하지 않는다.

## 13B-2 순수 모델 단위

- 활성/퇴원 학생, 반 ID·반 이름 매칭, 검색 표시 목록, 현재 반 선택 학생, 대상 모드, 유효 전화번호 수신자와 대상별 건수를 `createNotificationRecipientViewModel`로 이동했다.
- 전체 반의 퇴원 제외, 퇴원학생반의 별도 노출, 검색과 선택 범위의 차이, 반 밖 선택 제거, 번호 없는 대상 제외를 deterministic fixture로 고정했다.
- selection 정리 effect와 local React state는 App에 남고 model은 학생·반·filter·selection 원천을 읽기만 한다. API/Supabase/notification job/Solapi mutation은 없다.

## 13C-1 순수 builder 단위

- 공지 payload와 notification job 조립을 `notificationNoticeBuilders.js`로 이동했다.
- 학생/학부모 type·target, 즉시/예약 상태·시각, 빈 제목 fallback, 특강 변수 조건부 포함을 deterministic fixture로 고정했다.
- App adapter가 현재시각·난수·생성시각을 기존 순서로 만들고 builder에 주입한다. builder에는 clock/random/API/Supabase/Solapi mutation이 없다.

## 13C-2 request adapter 단위

- 공지 job 기록 저장과 예약 request의 endpoint, body, 15초/45초 timeout, 안내 문구를 `notificationNoticeApi.js`로 이동했다.
- 예약 응답 job 우선, 원본 fallback, 예외 전파를 네트워크 없는 injected request fixture로 고정했다.
- 실제 즉시발송·예약 loop, 실패 job 조립, local state/feedback/requery는 App에 유지한다.

## 13C-3 즉시발송 action 단위

- 즉시발송 guard, 순차 대상 처리, 성공/dry-run/timeout/실패 기록, 집계와 UI 완료 순서를 `sendNoticeNowAction`으로 이동했다.
- App이 builder, 실제 45초 request, persist, timeout 판정, state setter와 refresh를 모두 주입한다.
- 4개 결과 분기와 기록 실패, filter 우선순위, guard/finally를 mock fixture로 고정했고 실제 발송·운영 row 변경은 없다.

## 13C-4 예약 action 단위

- 예약 guard와 과거시각 차단, 순차 예약, 성공 job local 반영, 실패 job 생성·기록 fallback, 집계와 UI 완료 순서를 `scheduleNoticeAction`으로 이동했다.
- App이 builder, 과거시각/표시시각 함수, 실제 reserve/persist wrapper, clock, state setter와 refresh를 모두 주입한다.
- 과거시각, 예약 성공·실패, 실패 row 기록 실패, `failed`/`scheduled` filter, guard/finally를 mock fixture로 고정했고 실제 예약·운영 row 변경은 없다. 재시험 운영 데이터도 필요하지 않다.

## 13C-5 결과 대조 action 단위

- 결과 대조 callback/대상/loading guard, 조회 중·saved/partial/failed 상태, 결과 집계, pending filter, history/refresh 순서를 `reconcileNoticeResultsAction`으로 이동했다.
- App이 실제 reconcile callback, 대상 ID/count, clock과 state setter를 모두 주입한다.
- partial·실패·guard를 mock fixture로 고정했고 실제 Solapi 조회나 운영 row 변경은 없다. 재시험/고태영 운영 데이터도 필요하지 않다.

## 13C-6 공지 AI 수정 request adapter 단위

- `/api/ai/comment-polish` URL 해석, POST JSON, 응답 파싱, HTTP/body 성공 판정과 오류 fallback을 `polishNoticeMessageRequest`로 이동했다.
- App이 fetch/API URL/payload를 주입하고 adapter는 전체 result를 반환한다. local draft/busy/feedback은 App에 남는다.
- 성공·서버 오류·기본 오류를 mock response fixture로 고정했고 실제 네트워크·유료 AI 호출은 없다.

## 13C-7 공지 AI 수정 action 단위

- 빈 본문/중복 guard, payload 조립, busy/feedback, 성공 draft와 원문 fallback, 실패/finally를 `polishNoticeMessageAction`으로 이동했다.
- App이 AI 설정·초안·setter와 13C-6 request adapter callback을 주입한다.
- 성공·fallback·실패·guard를 mock fixture로 고정했고 실제 네트워크·유료 AI 호출은 없다.

## 다음 후보

1. 알림 이력 삭제의 URL/DELETE/응답·삭제 ID 검증을 실제 삭제 없는 request adapter로 먼저 분리한다.
2. 삭제 action과 실제 Solapi 취소 action은 서로 다른 destructive side effect이므로 각각 별도 단위로 판정한다.
