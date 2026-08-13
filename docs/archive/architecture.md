# Architecture Draft

## 1. Product Definition

Academy OS는 Lesson Hub를 중심으로 학생의 수업, 숙제, 출결, 리포트, 평가, 오답, 상담, AI 초안을 연결하는 학원 운영 OS입니다.

첫 MVP의 성공 기준은 다음 흐름이 하나의 데이터 흐름으로 이어지는 것입니다.

```text
날짜 -> Lesson -> LessonStudentRecord -> Homework -> Report Draft -> Student Portal
```

## 2. Lesson Hub 중심 구조

Lesson Hub는 날짜별 수업과 수업 안의 학생별 기록을 관리하는 원장입니다. 다른 기능은 Lesson Hub에서 생긴 데이터를 읽거나, Lesson Hub의 후속조치로 생성됩니다.

| 중심 데이터 | 역할 | 연결되는 기능 |
| --- | --- | --- |
| Student | 장기 누적 데이터의 주인 | 학생 화면, 학부모 화면, 숙제, 성적, self-check, 상담 |
| Lesson | 날짜별 수업 단위 | 달력, 수업 목록, 출결, 강사 코멘트, 숙제 배정 |
| LessonStudentRecord | 수업 안의 학생별 기록 | 출결, 숙제 상태, 강사 코멘트, 학생 코멘트, 리포트 원천 |
| Homework | 숙제와 보충의 원천 | 오늘 숙제, 밀린 숙제, 학생 체크, 강사 확인 |
| Report | 수업 기록의 전달 스냅샷 | 학부모 리포트, 학생 리포트, 검수 상태 |
| Problem | 교재/문항 원본 | 오답, 변형문항, 시험 분석 |
| Exam | 평가 단위 | OMR, 시험 결과, 재시험, 성적 추이 |
| Counseling | 상담과 self-check 누적 | 시험 후 자기 점검, 학부모 상담, 장기 메모 |
| Notification | 알림과 발송 로그 | 모의 알림, 실패 로그, 발송 전 검수 |
| AI Draft | AI 생성물 | 리포트 초안, 알림 문구, 분석지, 변형문항 초안 |

## 3. 7개 요구사항 도메인 매핑

도메인 매핑은 요구사항을 화면 이름이 아니라 저장될 데이터 묶음에 붙이는 작업입니다. 예를 들어 학생 화면의 `완료 체크` 버튼은 화면상으로는 학생 기능이지만, 데이터상으로는 `HomeworkSubmission`에 저장되고 `StudentId`, `HomeworkId`로 연결됩니다.

| 번호 | 요구사항 | 주 도메인 | 연결 ID |
| --- | --- | --- | --- |
| 1 | 강사 코멘트, 출결, 숙제관리, 데일리 리포트, 학생 페이지 | Lesson, LessonStudentRecord, Homework, Report | StudentId, LessonId, HomeworkId, ReportId |
| 2 | 학생 코멘트, 숙제 보충 일정, 결석 보강 일정 | LessonStudentRecord, MakeupTask | StudentId, LessonId, HomeworkId |
| 3 | OMR 자동채점, 재시험 일정, 오답문항 관리 | Exam, Problem, ProblemStatus, RetestTask | StudentId, ExamId, ProblemId |
| 4 | 내신/모의고사 성적관리 | Exam, ScoreRecord, AcademicTrend | StudentId, ExamId |
| 5 | 시험 후 self-check 누적 | SelfCheck, Counseling | StudentId, ExamId |
| 6 | 시험지 분석, 분석지, 블로그/인스타 카드뉴스 | ExamAnalysis, AI Draft, ContentDraft | ExamId, ProblemId |
| 7 | AI 변형문항 생성 | Problem, GeneratedQuestion, AI Draft, ReviewStatus | ProblemId, ExamId |

## 4. MVP Scope

Day 1 기준 MVP는 다음 세로 조각을 우선합니다.

```text
Student 1명
-> Lesson 1회
-> LessonStudentRecord 1개
-> Homework 1개
-> Report Draft 1개
```

30일 MVP에서 우선 구현할 흐름은 다음입니다.

1. 오늘 날짜와 수업 목록을 본다.
2. 수업을 선택한다.
3. 학생별 출결, 숙제 상태, 강사 코멘트, 학생 코멘트를 입력한다.
4. 입력 데이터로 학부모 리포트 초안을 만든다.
5. 학생 화면에서 오늘 숙제와 밀린 숙제를 확인한다.

첫 파일럿 반은 `월수금 4-7반 (고1 내신)`으로 둡니다. Day 2 이후 샘플 데이터와 화면 흐름은 이 반의 운영 방식을 기준으로 검토합니다.

## 5. Lesson Hub Navigation

강사 화면의 기본 이동 방식은 날짜 -> 수업 -> 반 학생 목록입니다.

1. 강사는 달력에서 특정 일자를 클릭합니다.
2. 해당 일자에 개설된 수업 카드가 표시됩니다. 하루에 수업이 2개면 달력/목록에 수업 2개가 보입니다.
3. 강사가 수업 하나를 클릭하면 그 수업의 반 화면으로 들어갑니다.
4. 반 화면에는 해당 수업에 등록된 학생들이 보입니다.
5. 강사는 학생별 출결, 숙제 상태, 강사 코멘트, 보강/재시험 필요 여부를 입력합니다.

## 6. Student Screen Reference

첨부된 학생 화면을 기준으로 학생 포털의 초기 정보 구조를 잡습니다.

| 영역 | 표시 정보 | 데이터 연결 |
| --- | --- | --- |
| 상단 요약 | 오늘 할 숙제 수, 밀린 숙제 수, 연속 수행일 | Homework, HomeworkSubmission, Student |
| 오늘 탭 | 오늘 해야 할 숙제 목록과 완료 체크 | Homework, HomeworkSubmission |
| 등록/전체 탭 | 등록된 숙제와 전체 숙제 이력 | Homework, HomeworkSubmission |
| 커리큘럼 탭 | 수업/교재 진행 정보 | Lesson, Problem |
| 평가 탭 | 시험 결과와 self-check 진입 | Exam, SelfCheck |
| 마이페이지 | 학생 기본 정보 | Student |

학생이 직접 입력하는 항목은 숙제 완료 체크와 시험 후 self-check 설문으로 제한합니다. 나머지 수업 기록, 출결, 숙제 검수, 보강/재시험 판단은 강사가 입력합니다.

## 7. Parent Screen Reference

첨부된 학부모 화면을 기준으로 학부모 포털의 초기 정보 구조를 잡습니다.

| 탭 | 표시 정보 | 데이터 연결 | Day 2 기준 |
| --- | --- | --- | --- |
| 알림 | 학원 공지, 안내, 필요 시 설문 링크/공지 | Notice, Notification | 실제 발송 없이 화면 표시/모의 로그만 허용 |
| 보고서 | 승인된 수업 리포트, 학습 요약 | Report, LessonStudentRecord | 검수 완료된 리포트만 공개 |
| 숙제 | 등록된 숙제 전체, 밀린 숙제, 날짜별 분배, 완료율 | Homework, HomeworkSubmission | 학부모는 조회만 가능 |
| 출결 | 수업별 출석/지각/결석 요약 | LessonStudentRecord | 상세 내부 코멘트는 제한 |
| 커리큘럼 | 교재/단원 진행 상황 | Lesson, Problem | Day 2에서는 구조만 정의 |

학부모는 모든 탭에서 오직 데이터 열람만 가능합니다. 학부모 화면에는 `재분배`, `수정`, `삭제`, `발송`, `초기화` 같은 데이터 변경 버튼을 표시하지 않습니다.

## 8. Self-check Survey Strategy

self-check 설문은 항상 노출되는 고정 기능이 아니라, 원장이 필요할 때 학생들에게 공지로 띄우는 이벤트성 설문입니다.

후보 방식은 두 가지입니다.

| 방식 | 설명 | 장점 | 단점 |
| --- | --- | --- | --- |
| 웹앱 내부 설문 | Academy OS 안에서 Notice를 만들고 학생이 앱 안에서 SelfCheck를 작성 | StudentId, ExamId와 바로 연결되고 AI 표준화가 쉬움 | Day 2 이후 설문 UI/저장 기능을 만들어야 함 |
| 외부 Tally 링크 | Tally 등 외부 설문 링크를 Notice에 붙이고 학생이 외부에서 작성 | 빠르게 시작 가능하고 설문 제작이 쉬움 | 응답을 StudentId, ExamId와 연결하려면 가져오기/매핑 규칙이 필요 |

Day 2 기본 설계는 두 방식을 모두 허용합니다. `Notice.surveyMode`로 `internal_form` 또는 `external_link`를 구분하고, 외부 링크를 쓰는 경우 `Notice.externalUrl`에 저장합니다.

MVP 추천은 다음과 같습니다.

1. 초기 운영 검증은 Tally 링크로 빠르게 시작합니다.
2. 응답 데이터가 반복적으로 쌓이고 질문 구조가 안정되면 웹앱 내부 설문으로 옮깁니다.
3. 어느 방식이든 최종적으로는 SelfCheck에 학생별 표준화 결과를 저장해 강사 화면에서 보게 합니다.

## 9. Confirmed Terms

운영 용어는 다음 표현을 그대로 사용합니다.

- 수업
- 보강
- 재시험
- 숙제보충

## 10. Out of Scope for Now

다음 기능은 설계 문서에는 방향만 남기고 Day 1에는 구현하지 않습니다.

- 실제 문자, 카카오톡, 이메일 발송
- 실제 데이터 삭제와 초기화
- 외부 서비스 연동
- 검수 없는 AI 자동 발송
- 검수 없는 성적 판단
- 검수 없는 변형문항 배포
- 실제 학생/학부모에게 영향을 주는 자동화
- 학부모 화면의 재분배, 수정, 삭제, 발송, 초기화 버튼과 동작

## 11. Suggested Folder Structure

아직 앱 코드는 만들지 않습니다. Day 4에 실제 프로젝트를 시작할 때 아래 구조를 기준으로 검토합니다.

```text
academy-os/
  docs/
    README.md
    architecture.md
    data-model.md
    permissions.md
    daily-log.md
  academy_os_integrated_design.pdf
  academy_os_mindmap_30day_plan.pdf
  codex_30day_prompt_manual.pdf

  # Day 4 이후 후보
  app/
  src/
    domains/
      students/
      lessons/
      homework/
      reports/
      exams/
      problems/
      counseling/
      notifications/
      ai-drafts/
```

## 12. Design Constraints

- 기능을 만들 때마다 원천 데이터를 먼저 정합니다.
- 화면은 역할별로 나뉘어도 저장 데이터는 공통 도메인을 공유합니다.
- 리포트와 AI 생성물은 스냅샷과 검수 상태를 남깁니다.
- Notification은 원천 데이터가 아니라 파생 레이어입니다.
- 삭제, 초기화, 발송 같은 위험 동작은 별도 권한, 확인 단계, 로그 설계 전에는 만들지 않습니다.
