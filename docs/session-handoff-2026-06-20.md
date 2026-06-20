# Academy OS Handoff - 2026-06-20 Final

다음 Codex 세션에서 오늘 작업을 이어받기 위한 최종 인계 문서입니다.

## 1. 최종 상태

- 브랜치: `main`
- 원격 반영: GitHub `origin/main`까지 push 완료
- 마지막 확인:
  - `npm run build` 통과
  - `npm run test:production` 79개 통과
- 마지막 커밋:
  - `4c3c45a Add Sunday makeup block deletion`
- 직전 주요 커밋:
  - `53acd7e Derive Sunday blocks only when date changes`
  - `285bb9e Widen Sunday makeup block time editors`
  - `26c4e7b Reconcile Sunday makeup after exam prep deletion`
  - `2e22756 Add exam prep row delete controls`
  - `82de4c6 Remove early exam lesson exception`
  - `f7c0b2b Stop deleting early generated exam lessons`
  - `95542d6 Filter generated lessons to current exam cycle`
  - `cd94497 Show all generated lessons and include exam Sundays`
  - `183d1c6 Fix generated special lesson persistence`
  - `45b5d16 Set canceled lesson retention to seven days`

## 2. 배포 및 SQL Editor 유의점

- GitHub `main` push는 Vercel/Render 자동 배포 트리거다.
- Supabase SQL migration은 자동 적용된다고 가정하면 안 된다.
- DB 컬럼/테이블/정책/RPC 변경이 있으면 Supabase SQL Editor에서 사람이 직접 실행해야 한다.
- SQL이 필요한 작업은 반드시 다음을 사용자에게 안내한다.
  - 왜 SQL이 필요한지
  - 실행할 SQL 파일명
  - 적용 순서
  - Supabase SQL Editor에서 실행해야 한다는 점
  - `docs/current-worklog.md` 기록
- 비밀키, `.env`, Supabase service role key, Render/Vercel/GitHub token은 절대 출력하거나 commit하지 않는다.

현재 repo의 SQL 파일:

- `supabase/20260617_lesson_prep_resources_notifications.sql`
- `supabase/20260620_lesson_schedule_metadata.sql`
- `supabase/20260620_exam_calendar_supabase_state.sql`
- `supabase/20260620_app_state_store.sql`
- `supabase/schema.sql`

오늘 후반 일요보강/시험관리 UI 수정은 새 SQL이 필요 없었다. 기존 `lessons`, `exam_prep_rows`, `school_events`, `app_state` 저장 흐름을 사용했다.

## 3. 오늘 오류가 많이 났던 지점과 현재 결론

### 시험관리 데이터 중복

문제:

- 1학기 기말고사 화면에 1학기 중간고사 데이터가 섞여 보였다.
- 같은 학교/학년/과목/시험기간 데이터가 2개씩 보였다.
- 학사일정에도 시험 데이터가 중복으로 보였다.

현재 결론:

- 시험관리 데이터의 원천은 `exam_prep_rows`다.
- 화면 표시에서는 `dedupeExamPrepRowsForDisplay`로 논리 중복을 묶어 보여준다.
- 중복 cleanup API는 guarded endpoint로 유지한다.
- 새 데이터 생성 시 `examCycle` 기본값은 날짜와 선택 고사에 따라 정해진다.

주의:

- 표시 중복 제거와 DB 실제 삭제는 다르다.
- 실제 DB 삭제를 할 때는 사용자가 삭제 의도를 명확히 말한 항목만 지운다.
- `DELETE /api/exam-prep-rows?...confirm=true` 계열은 신중히 다룬다.

### 시험관리 CSS

문제:

- 수정 행에서 과목/출판사가 붙거나 칸이 부족했다.
- 기말고사만 고쳐지고 중간/2학기에는 적용되지 않은 것처럼 보였다.

현재 결론:

- CSS는 특정 고사별이 아니라 공통 수정 grid에 적용되어야 한다.
- 현재 회귀 테스트 `70 exam prep edit grid has room for all cycles`가 이 전제를 확인한다.

다음 확인:

- 1학기 중간, 1학기 기말, 2학기 중간, 2학기 기말 각각에서 수정 행을 열어 과목/출판사/시험범위/부교재/총평 칸이 겹치지 않는지 실제 화면으로 확인한다.

### 학사일정과 시험관리 연동

문제:

- 학사일정 수동 이벤트와 시험관리 파생 이벤트가 동시에 보여 중복처럼 보였다.
- 학교별 시험기간/수학시험 날짜가 구분되지 않았다.

현재 운영 원칙:

- 시험기간과 수학시험날짜는 시험관리에서 입력한다.
- 방학, 개학, 모의고사, 학교 행사, 단순 일정은 학사일정에서 입력한다.
- 학사일정은 시험관리 데이터를 보여줄 수 있지만, 시험 관련 데이터의 원천은 시험관리다.

현재 구조:

- `buildExamCalendarEvents(rows)`가 시험관리 데이터를 학사일정 표시용 이벤트로 파생한다.
- 학교별 detail 화면은 `schoolDateGroup` 계열 CSS와 grouped detail로 묶어 보여준다.
- 수학시험 날짜는 과목/학교 단위로 표시된다.

### 자동 생성 수업 후보와 저장

문제:

- 직전수업은 저장되는데 일요보강은 저장되지 않거나 껐다 켜면 일부만 남았다.
- `generatedLessonPlan.slice(0, 8)` 때문에 후보가 일부만 보였다.
- 시험기간이 주말을 끼면 일요보강 후보가 부족했다.

현재 결론:

- 후보 목록 제한은 제거됐다.
- 일요보강 후보는 시험기간 전 일요일들과 시험기간 안에 포함된 일요일도 포함한다.
- 자동 생성 수업은 `lessons`에 실제 저장된다.
- 저장 실패는 alert로 보이게 했다.
- `preExam`, `examSundayMakeup`은 실제 class template FK가 아니므로 `classTemplateId`를 가짜 값으로 넣지 않는다.

다음 확인:

- 시험기간이 6/29~7/6처럼 일요일을 포함하면 6/7, 6/14, 6/21, 6/28, 7/5 후보가 생기는지 확인한다.
- 후보 반영 후 새로고침해도 `lessons`에 남는지 확인한다.

### 6월 19일 이전 시험수업 처리

문제:

- 6월 19일 이전 시험수업을 표시/숨김 처리하는 코드가 불필요하다는 피드백이 있었다.

현재 결론:

- 6월 19일 이전 시험수업 예외 표시 코드는 제거했다.
- 과거 일정을 임의로 숨기는 방식보다, 현재 고사 cycle 기준 후보/데이터를 정확히 다루는 방향으로 정리했다.

### 일요시험보강 학교별 블록

문제:

- 한 날짜의 일요보강 안에서 학교별 시간표를 수정하고 싶었다.
- 특정 학교만 토요일 등 다른 날짜로 옮기고 싶었다.
- 같은 날짜 블록까지 달력에 별도 pill로 많이 생겨 화면이 복잡했다.
- 특정 날짜에는 한 학교만 남기고 나머지 블록을 삭제하고 싶었다.

현재 구조:

- 원본 일요보강은 실제 `lessons` row 하나다.
- 학교별 세부 블록은 실제 `lessons`를 여러 개 만들지 않는다.
- 블록 수정값은 `app_state.generatedLessonControls.sundayMakeupBlocks`에 저장한다.
- 날짜가 원본과 다른 블록만 달력에 별도 가상 lesson으로 파생한다.
- 같은 날짜에 남은 블록은 원본 일요보강 pill 하나 안에서 표현한다.
- 원본 pill 라벨도 override 기준으로 같은 날짜에 남은 학교만 표시한다.
- 원본 날짜에 남은 블록이 0개이면 빈 원본 일요보강 pill은 숨긴다.
- 모달 내부에서 `블록 삭제`가 가능하다. 마지막 1개 블록은 삭제하지 않고 전체 일정 삭제 버튼을 사용해야 한다.

예시 운영:

- 7월 5일 일요보강에서 정의여고만 남기려면, 일요보강 상세에서 다른 학교 블록의 `블록 삭제`를 누르고 `블록 저장`을 누른다.
- 창동고만 토요일로 옮기려면, 창동고 블록의 날짜를 토요일로 바꾸고 `블록 저장`을 누른다. 그러면 토요일에 창동고 가상 pill이 생기고, 원래 일요보강 pill에는 같은 날짜에 남은 학교만 표시된다.
- 예: 6월 20일 토요일 시험보강에는 창동고만 표시되고, 6월 21일 일요일 원래 일요보강에는 창동고를 제외한 나머지 학교만 표시되어야 한다.

남은 주의점:

- 이동된 가상 블록을 선택했을 때 `Del`, `Ctrl+C` 같은 키보드 단축키 의미가 아직 애매하다. 다음 개선 후보로 남긴다.

### 수업 취소와 undo

문제:

- DB에서 즉시 삭제하면 되돌릴 수 없고, 숨김만 하면 데이터가 너무 오래 남을 수 있었다.

현재 결론:

- 취소 수업은 `status: "canceled"`로 보존한다.
- undo bin은 7일 보존한다.
- 만료된 canceled lesson은 API 시작 시 `deleteExpiredCanceledLessons` 흐름으로 정리한다.

주의:

- “취소”와 “삭제”를 혼동하지 않는다.
- 사용자가 실제 삭제를 원하면 어떤 범위인지 확인한다.

## 4. 불필요해 보이는 부분 / 유지해야 하는 부분

불필요하거나 줄일 수 있는 후보:

- 6월 19일 이전 시험수업 표시/숨김 예외 로직은 제거되어야 하고, 다시 만들 필요가 없다.
- 같은 날짜의 일요보강 학교별 블록을 모두 가상 lesson pill로 표시하는 방식은 화면을 복잡하게 하므로 피한다.
- 시험관리 데이터를 학사일정 수동 이벤트로 중복 저장하는 흐름은 피한다.

현재는 유지하는 것이 좋은 부분:

- `generatedLessonControls.sundayMakeupBlocks`: 실제 lesson 중복 없이 학교별 블록 수정/삭제/이동을 저장하기 위해 필요하다.
- `manualOverrideKeys`, `suppressedKeys`: 자동 생성 후보가 수동 수정/제외 항목을 다시 덮어쓰지 않게 하기 위해 필요하다.
- `dedupeExamPrepRowsForDisplay`: 과거 중복 데이터가 DB에 남아 있어도 화면 혼란을 줄이기 위해 필요하다.
- guarded duplicate cleanup API: 실제 DB 중복을 정리할 때 필요하지만, 사용자 지시 없이 실행하지 않는다.
- 자동 수업 후보 패널: 화면은 복잡하지만, 자동 생성 수업을 무조건 저장하지 않기 위한 안전장치다.

## 5. 추가하면 좋은 작업

우선순위 높음:

1. 실제 배포 화면에서 일요보강 블록 삭제/이동 저장 후 새로고침 검증
   - 예: 7월 5일 일요보강에서 정의여고만 남기고 저장
   - 새로고침 후 원본 pill과 모달이 같은 내용을 보여야 한다.

2. 이동된 가상 일요보강 블록의 키보드 단축키 정책 정리
   - `Del`: 가상 블록 삭제인지, 원본 일정 삭제인지 모호하다.
   - 추천: 가상 블록 선택 상태에서는 원본 일정 삭제/복사 단축키를 막고 모달 안내만 띄운다.

3. 시험관리 수정 행 실화면 검증
   - 1학기 중간, 1학기 기말, 2학기 중간, 2학기 기말 모두 열어 칸 겹침이 없는지 확인한다.

우선순위 중간:

4. 일요보강 블록 편집 중 저장 전 변경사항 표시
   - 현재는 `블록 저장`을 눌러야 반영된다.
   - 저장 전 dirty 표시가 있으면 운영 실수를 줄일 수 있다.

5. 자동 수업 후보 패널 접힘 기본값 검토
   - 기능은 필요하지만 화면이 복잡하다.
   - 운영 안정 후 기본 접힘 또는 고급 영역 이동을 검토한다.

6. DB 중복 cleanup 실행 전 preview 화면
   - 어떤 row가 삭제될지 사용자에게 보여주고 확인 후 실행하면 안전하다.

## 6. 다음 세션 시작 순서

1. `AGENTS.md` 읽기
2. `docs/current-worklog.md` 읽기
3. `docs/home-codex-setup.md` 읽기
4. `docs/deployment-handoff-prompt.md` 읽기
5. 이 파일 `docs/session-handoff-2026-06-20.md` 읽기
6. `git status --short --branch`
7. 필요한 경우 `npm run test:production`

## 7. 다음 세션 종료 전 필수 체크

코드 수정이 있었다면:

1. `npm run build`
2. 운영 흐름 영향이 있으면 `npm run test:production`
3. `docs/current-worklog.md` 갱신
4. `git status --short --branch`
5. 변경 파일 stage
6. 의미 있는 commit
7. `git push origin main`
8. 최종 응답에 다음 포함
   - 수정 내용
   - 검증 결과
   - commit hash
   - push 완료 여부
   - SQL Editor 작업 필요 여부

문서만 수정한 경우:

- build/test는 생략 가능하지만, 최종 응답에 문서만 수정했음을 명확히 말한다.
- 그래도 main push가 필요한 인계 문서라면 commit/push까지 완료한다.

## 8. 짧은 다음 세션 프롬프트

```text
academy-os 작업입니다. 먼저 AGENTS.md, docs/current-worklog.md, docs/home-codex-setup.md, docs/deployment-handoff-prompt.md, docs/session-handoff-2026-06-20.md를 읽고 시작하세요.

오늘 핵심 주의점:
- 시험관리 데이터 원천은 exam_prep_rows입니다.
- 학사일정은 시험관리 데이터를 파생 표시할 수 있지만, 시험 관련 원본 입력은 시험관리입니다.
- 일요시험보강 원본은 lessons row 하나이고, 학교별 블록 수정/삭제/이동은 app_state.generatedLessonControls.sundayMakeupBlocks에 저장합니다.
- 날짜가 다른 블록만 가상 lesson으로 달력에 따로 표시합니다.
- 같은 날짜에 남은 블록은 원본 일요보강 pill 하나 안에 표시합니다.
- SQL migration은 자동 적용된다고 가정하지 마세요. 새 DB 변경이 필요하면 SQL Editor 적용 파일과 순서를 사용자에게 안내하세요.

작업 후에는 npm run build, 필요 시 npm run test:production, docs/current-worklog.md 갱신, commit, git push origin main까지 완료하세요.
```
