# UI-8D 알림관리·학부모 응대 고밀도 화면 inventory — 2026-07-29

## 범위

현재 `activeView === "notifications"`에 연결된 `NotificationCenter`의 개별 발송, 학부모 응대, 예약·발송 완료·확인 필요·전체 기록 화면을 읽기 전용으로 조사했다. 같은 컴포넌트를 쓰는 특강관리의 안내문 화면은 UI-8E 범위로 남기고, 실제 공지 발송·예약·취소·기록 삭제·Solapi 결과 대조는 실행하거나 변경하지 않았다.

## 현재 화면 흐름

1. `알림관리` PageHeader와 기록 새로고침
2. 작업 탭
   - 개별 발송
   - 학부모 응대
   - 예약
   - 발송 완료
   - 확인 필요
   - 전체 기록
3. 개별 발송
   - 선택·전체·학부모·학생 수신 범위
   - 반·학생 검색, 대상 수와 학부모·학생 수신 건수
   - 학생 선택 목록과 번호 등록 상태
   - 템플릿·제목·본문·예약 시각·미리보기
   - AI 수정, 예약 발송, 즉시 발송
4. 학부모 응대
   - 발송 완료된 데일리 리포트·학부모 강사코멘트 원문 검색
   - 학생·수업일·발송 시각·학부모 번호·발신 본문 확인
   - 별관 채널 검색 정보 복사
5. 발송 기록
   - OS 상태와 Solapi 결과 대조 상태
   - 기록 접기/펼치기와 7열 결과 표
   - 예약 취소 또는 미발송·확인 필요 기록 삭제

## 원천·callback·side effect 보존 계약

| 영역 | 읽는 원천 | 유지할 callback | UI-8D에서 실행 금지 |
| --- | --- | --- | --- |
| 대상 선택 | `students`, `classTemplates`, local 선택·검색·수신 범위 | 범위·반·검색·checkbox 변경 | 없음 |
| 공지 작성 | local 제목·본문·템플릿·예약 시각 | `polishNoticeMessage`, `scheduleNotice`, `sendNoticeNow` | AI 요청, `notification_jobs` 생성, Solapi 발송·예약 |
| 학부모 응대 | 발송 완료 `notificationJobs`, 학생 연락처 | 검색, `copyChannelLookup` | 채널 답장 저장·외부 채팅 변경 |
| 발송 기록 | `notificationJobs`, Solapi 결과 snapshot | 접기/필터, `reconcileSolapiResultsForNoticeJobs`, `cancelNotificationJob`, `deleteNotificationJob` | Solapi 대조·예약 취소, OS 기록 삭제 |

학부모 답장 원문은 Academy OS에 새로 저장하지 않는다. OS는 그날 보낸 발신 원문과 학부모 번호를 찾기 쉽게 보여주고, 실제 답장은 별관 채널 상담방에서 확인하는 현재 계약을 유지한다.

## 확인된 UI 예외

- 상단 작업 탭은 공통 `WorkspaceTabs`와 모바일 내부 가로 scroll을 사용하지만 알림관리 전용 scroll 경계·touch 관성이 없다.
- 선택·전체·학부모·학생 수신 범위는 상호 배타적인 버튼이지만 현재 선택 상태를 `aria-pressed` 등으로 전달하지 않는다.
- 학생 선택 목록은 최대 높이와 내부 scroll이 있으나 영역 이름·keyboard focus·touch overscroll 경계가 없다.
- 발송 작성 행동은 모바일 한 열, 기록 7열은 named `DataTableShell` 내부 가로 scroll로 이미 정리되어 있다.
- 학부모 응대 카드와 행동은 모바일 한 열로 바뀌지만, 긴 발신 원문은 카드 전체 높이를 계속 늘리고 별도 이름·focus·내부 scroll이 없다.

## 연쇄 구현

1. `UI-8D-1`: 작업 탭의 touch scroll 경계를 보강하고 수신 범위 선택 상태, 학생 목록 이름·focus·내부 scroll을 명시한다.
2. `UI-8D-2`: 학부모 발신 원문을 학생 이름이 있는 focus 가능한 모바일 내부 scroll 영역으로 만들고 긴 안내 문구 줄바꿈을 보강한다.
3. `UI-8D-3`: 작성·대상·학부모 채널 찾기·예약/결과 기록과 발송/취소/삭제 callback 분리를 통합 회귀하고 독립 사람 시각 절차를 누적한다.

## 사람 검수

inventory 자체는 중단 gate가 없다. 구현 뒤 desktop과 390px에서 작업 탭, 대상 범위, 학생 목록, 학부모 원문, 기록 표의 scroll·focus·읽기 순서만 확인한다. 검색·선택·접기/펼치기·별관 확인 정보 복사는 사용할 수 있지만 AI 수정·즉시/예약 발송·Solapi 결과 확인·예약 취소·기록 삭제는 누르지 않는다.

## 진행 갱신

- UI-8D-1: 작업 탭에 touch overscroll 경계·scroll padding·iOS momentum scroll을 적용했다.
- 선택·전체·학부모·학생 수신 범위는 named group과 `aria-pressed`로 현재 선택을 전달한다.
- 학생 선택 목록은 named region, keyboard focus, 세로 touch scroll 경계를 갖는다.
- 학생 checkbox, AI 수정, 예약·즉시 발송 callback과 local draft·선택 계산은 변경하지 않았다.
