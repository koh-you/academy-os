# UI Save State Inventory — 2026-07-29

## 범위와 원칙

- 화면 상태 표현만 inventory한다. 저장 callback, API 호출, Supabase/app_state/Storage, notification_jobs/Solapi, 출결은 변경하거나 실행하지 않는다.
- `저장 완료`는 local state 변경이나 HTTP 응답만으로 신뢰하지 않는다. 각 기능의 기존 재조회 계약을 따로 확인한 뒤 표시해야 한다.
- 공통 component는 caller가 전달한 상태를 표현할 뿐, 서버 재조회 여부를 추론하지 않는다.

## 공통 component 현황

- `InlineSaveStatus` 렌더 위치: 33곳.
- UI-6A-2 이후 canonical state: `idle`, `dirty`, `saving`, `verifying`, `saved`, `failed`.
- 현재 문구: `저장 전`, `변경됨`, `저장 중`, `서버 반영 확인 중`, `저장 완료`, `저장 실패`.
- 접근성: 공통 component가 `role=status`, `aria-live=polite`, `aria-atomic=true`를 제공한다.
- aggregate 우선순위: `saving > verifying > failed > dirty > saved`. 진행 중인 요청을 먼저 알리고, 진행 요청이 없을 때 실패가 미저장 상태에 가려지지 않는다.

## 상태 모델 가족

| 가족 | 대표 화면 | 현재 표현 | 판정 |
| --- | --- | --- | --- |
| 공통 문자열 state | 설정·수업연구·오답, 학생 프로필, 정산, 시험정보 | `InlineSaveStatus` | 공통 vocabulary 대상 |
| state+message 객체 | 학생 숙제/질문/시험 제출, 특강 회차, 보충, 영구삭제 | badge+상세 message | 공통 badge와 상세 문구를 분리 유지 |
| 단계형 custom state | 정규수업 열기, 시험분석 프롬프트, 수업/수업일지 bulk | `verifying`, `verified`, 단계 message | UI-6A-2 이후 target별 연결 |
| 외부 provider state | notification_jobs/Solapi | 예약/발송/결과 확인 | OS 저장 상태와 합치지 않음 |
| 단순 view/load state | loading/syncing/success | 조회·동기화 상태 | 저장 vocabulary에 억지로 매핑하지 않음 |

## 저장 완료 신뢰도 경계

1. 재조회 대조가 코드에 명시된 흐름
   - 월별·특강 정산, 학생 기본정보·강사 메모, 학생 포털 숙제/질문/시험 제출, 수업일지 기록·숙제·보충, 시험정보 삭제, 특강 회차/수업 명단 등.
   - 이 흐름은 마지막 재조회 뒤 `saved`를 표시하는 기존 계약을 보존한다.
2. 자동저장 또는 응답 완료 중심 흐름
   - 설정·수업연구·오답관리의 app_state key별 자동저장, 일부 app_state 배열 저장.
   - 요청 역전·다중 탭 version·저장 후 재조회가 남아 있으므로 공통 UI만 바꿔 신뢰 완료로 승격하지 않는다.
3. 외부 provider 흐름
   - notification_jobs OS 저장과 Solapi 예약/발송 결과는 별도 상태다. 한쪽 성공을 전체 완료로 표시하지 않는다.

## 다음 순서

1. `UI-6A-2` 완료: `verifying`, live status, 실패 우선 aggregate 계약을 공통화했다.
2. `UI-6A-3`: 이미 verifying state를 가진 정규수업 열기·시험분석 프롬프트 등 단계형 화면을 공통 badge와 연결한다.
3. `UI-6B`: 자동저장 위험 알림은 저장 신뢰성 audit과 함께 유지·정리한다. 재조회/version 미완료 경고를 숨기지 않는다.
4. target별 저장 callback 변경이 필요하면 UI 작업을 중단하고 저장 신뢰성 독립 단위로 넘긴다.
