# Next Session Handoff

이 폴더 하나만 다음 Codex 세션에 넘기면 됩니다. 새 세션은 `AGENTS.md`와 이 파일을 먼저 읽고 이어가면 됩니다.

## 시작 프롬프트

```text
E:\academy-os 작업을 이어가겠습니다. 먼저 AGENTS.md와 docs/next-session/README.md를 읽고, git status와 최신 worklog를 확인한 뒤 이어가주세요. 운영 Supabase에는 supabase/20260701_student_withdrawal_reason.sql 적용이 필요한 상태입니다. 그다음 구조분리/리팩터링을 계속하되, App.jsx에 남은 StudentManager, 수업일지 주변 도메인 로직, 시험분석 최종문서 편집 영역을 우선순위로 봐주세요.
```

## 현재 기준

- 브랜치: `main`
- 최신 기능 커밋: `f28f42e Add withdrawn student reason tracking`
- 이 문서 갱신 커밋 후 HEAD는 달라질 수 있으니 새 세션 시작 시 `git log -1 --oneline`으로 확인한다.
- 마지막 확인 시 작업트리: clean
- 주요 검증: `npm run build`, `npm run test:production` 통과
- 운영 시나리오: total 238, failed 0
- Vite build: 통과, 기존 chunk size warning만 있음
- 새 Supabase SQL 적용 필요: `supabase/20260701_student_withdrawal_reason.sql`

## 이번 세션 완료 요약

### 수업일지/알림톡 안정화

- `알림톡 없음` 계획이 즉시 `app_state.lessonNotificationPlans`에 저장되도록 보강.
- 수업일지 상단 회색 영역에 자동저장 상태 표시:
  `저장 대기...`, `저장 중...`, `저장 완료`, `저장 실패`.
- `알림톡 없음`과 학생별 `알림 제외` 상태를 버튼 색으로 명확히 표시.
- 알림 계획 변경 시 관련 `lesson_student_records` 저장 상태도 `saving/saved/failed` 흐름을 타게 함.

### 자동 수업 저장 오류 처리

- 간헐적 `자동 수업 저장 실패: Failed to fetch` 브라우저 alert 제거.
- 시험관리 자동 수업 패널 안에 저장 상태 배너 표시:
  `저장 중`, `저장 완료`, `저장 실패`.
- 실패한 자동 수업 묶음을 보관하고 `다시 저장` 버튼으로 재시도 가능.

### 학생 목록/퇴원생 관리

- 학생 목록 탭을 `전체 학생 목록`, `반별 학생 목록`, `퇴원생 목록` 3개로 확장.
- 퇴원 처리 모달에 퇴원 사유와 코멘트 입력 추가.
- 퇴원 사유 옵션: `졸업`, `반이동`, `기타`.
- 퇴원생 목록에서 퇴원일, 사유, 코멘트, 저장 버튼으로 수정 가능.
- 서버 매핑에 `students.withdrawal_reason`, `students.withdrawal_comment` 추가.

### 시험분석 UI/산출물 안정화

- 문항별 분류표 MVP에서 누락 문항 재요청, PDF 이미지 기반 분류, 쎈 유형 표시/정렬, 접힘 UI 안정화 작업 완료.
- 최종편집본 블록의 출처/역할 안내 추가:
  `AI 초안`, `문항분류표`, `자동 계산`, `AI+강사`, `강사 인사이트`, `수동 편집`, `기본정보`.
- 산출물 미리보기 렌더링 보강:
  블로그는 구조화 문서 미리보기, 인스타는 카드뉴스형 미리보기.
- 최종편집본 펼치기/접기 안정화 및 위/아래 버튼 제거.

## 검수 결과

- 저장 경로 검수:
  - 수업일지 주요 운영 데이터는 `lesson_student_records`, `notification_jobs`, `app_state.lessonNotificationPlans`에 저장된다.
  - 퇴원생 사유/코멘트는 새 Supabase 컬럼 적용 후 `students`에 저장된다.
- UI 상태 검수:
  - 자동저장 상태가 상단에 보여 사용자가 저장 여부를 알 수 있다.
  - 알림톡 미발송 상태가 버튼 색상으로 드러난다.
  - 자동 수업 저장 실패는 alert로 작업을 막지 않고 패널 배너와 재시도 버튼으로 처리된다.
- 남은 운영 리스크:
  - `supabase/20260701_student_withdrawal_reason.sql`을 운영 Supabase SQL Editor에서 실행하기 전에는 퇴원 사유/코멘트 저장 시 migration 필요 오류가 날 수 있다.
  - `src/app/App.jsx`가 여전히 매우 크다. 새 기능 추가보다 구조분리를 우선 유지하는 편이 좋다.
  - Vite chunk size warning은 기존 경고이며 아직 해결되지 않았다.

## 다음 우선순위

1. 새 세션 시작 후 `git status --short`와 `git log -1 --oneline` 확인.
2. 운영 Supabase에 `supabase/20260701_student_withdrawal_reason.sql` 적용 여부 확인.
3. 구조분리 계속:
   - `StudentManager`를 별도 도메인/컴포넌트로 분리.
   - 수업일지 저장 상태, 알림톡 계획, 알림 제외 helper를 `src/domains/lessons` 쪽으로 분리.
   - 시험분석 최종문서 편집/인쇄 컴포넌트의 남은 App.jsx 의존성 줄이기.
4. 한 번에 하나의 우선순위 작업만 구현.
5. 운영 흐름 변경 시 `npm run test:production`, `npm run build` 실행.
6. 완료 후 `docs/current-worklog.md` 갱신, 커밋, 푸시.

## 자주 쓰는 명령

```powershell
git status --short
git log --oneline -8
npm run test:production
npm run build
```

## 참조 파일

- `AGENTS.md`
- `docs/current-worklog.md`
- `docs/next-session/README.md`
- `src/app/App.jsx`
- `src/app/App.css`
- `api/routes/coreData.js`
- `scripts/scenario-tests-production.cjs`
- `supabase/20260701_student_withdrawal_reason.sql`
