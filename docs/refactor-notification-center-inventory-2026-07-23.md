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

## 다음 후보

1. 13A 표시 컴포넌트 분리 audit으로 App에 남은 표시 JSX와 handler 경계를 재확인한다.
2. payload builder와 실제 API orchestration은 별도 inventory/fixture와 사람 gate 필요성을 다시 판정한다.
