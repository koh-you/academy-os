# Lesson save orchestration inventory — 2026-07-28

## 범위

로드맵 15F에서 실제 저장 코드를 옮기기 전에 수업 생성·수정 모달의 직접 저장 원천, 재조회 계약, 파생 상태와 서버 side effect를 고정한다. 이 inventory와 fixture는 운영 데이터를 수정하지 않는다.

## 현재 경계

| 구간 | 직접 원천·요청 | 완료 판정 | 파생·외부 side effect | 15F 판단 |
| --- | --- | --- | --- | --- |
| `getLessonModalSaveSnapshot` | 없음 | 저장 대상 필드의 정규화 JSON 비교 | 없음 | 15F-1 `lessonModalSaveSnapshot.js` 분리 완료 |
| `saveLessonModalLessons` | `POST /api/lessons/bulk` | 응답 `source=supabase` 확인 후 `GET /api/lessons?verify=...`, ID 존재와 snapshot 전필드 일치 | 재조회한 전체 활성 lessons로 React state 교체 | 요청·재조회 순서를 먼저 fixture로 유지 |
| `handleAddLesson` | 주 수업 1건, 선택형 휴강 보충 1건을 위 bulk 흐름에 전달 | `saveLessonModalLessons` 반환값 | 선택 날짜·수업 ID 변경 | payload builder만 순수 분리 후보 |
| `handleUpdateLesson` | 일반 수정은 bulk, 휴강 전환은 먼저 `GET /api/lessons/closure-preflight` | 최신 원천 snapshot·차단 알림·bulk 재조회 확인 | 과거 학생 보존, 생성 수업 manual override, 선택 날짜·수업 ID 변경 | 휴강 preflight와 저장 orchestration은 고위험 경계에 유지 |
| 서버 `upsertLessons` | Supabase `lessons`, conflict key `lesson_id` | upsert 반환 row | 제외 학생의 발송 가능 알림 취소, 제외 학생 `lesson_student_records` 삭제 | 단순 lessons 저장이 아닌 다중 원천 side effect이므로 별도 gate 전 이동 금지 |

## 보존해야 할 순서

1. 유효한 `lessonId`·`date`가 있는 draft만 저장 대상으로 확정한다.
2. bulk POST 응답이 Supabase 원천인지 확인한다.
3. UI를 `Supabase 반영 확인 중`으로 바꾼다.
4. 캐시를 우회한 lessons GET으로 재조회한다.
5. 각 예상 ID의 존재와 정규화 snapshot 전체 일치를 확인한다.
6. 검증된 서버 lessons로 현재 React 목록을 교체한 뒤에만 완료를 반환한다.

휴강 전환은 위 순서 앞에 최신 수업·수업기록·알림 예약 preflight가 추가된다. 서버 bulk upsert 뒤 명단에서 빠진 학생의 알림 취소와 수업기록 삭제가 실행되므로, 이 side effect를 숨긴 채 generic client helper로 이동하지 않는다.

## 다음 안전 단위

- `15F-1` 완료: `getLessonModalSaveSnapshot`을 순수 도메인 helper로 이동하고 시간·명단·일정 key 순서의 동일성과 저장 필드 불일치를 fixture로 고정했다.
- `15F-2` 완료: 신규 수업·선택형 휴강 보충 payload를 `lessonModalPayloadBuilders.js`로 이동했다. App은 ID·학생·요일·색상 의존성을 계산해 주입한다.
- `15F-3` 후보: 기존 수업 수정 payload의 보존 필드, 비활성 과거 학생, 휴강 전환 결과를 먼저 fixture로 고정한다.
- 실제 POST/GET orchestration, closure preflight, React state 교체, 제외 학생 알림·기록 정리는 별도 fixture와 사람 gate가 정해질 때까지 App/API 경계에 둔다.

## Gate

- AI gate: 정적 fixture가 POST → Supabase source 확인 → GET → snapshot 대조 → state 교체 순서와 서버 side effect를 검사한다.
- 사람 gate: 없음. 이번 단위는 코드 이동이나 운영 쓰기가 없는 inventory다.
