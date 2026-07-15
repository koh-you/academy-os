# Next Session Handoff

이 폴더 하나만 다음 Codex 세션에 넘기면 됩니다. 새 세션은 아래 프롬프트를 붙여넣은 뒤, `AGENTS.md`와 `docs/current-worklog.md` 최상단의 `미룬 작업 큐`를 먼저 사용자에게 요약해야 합니다.

## 바로 붙여넣을 프롬프트

```text
E:\academy-os 작업을 이어가겠습니다.

먼저 아래 파일과 상태를 확인해주세요.
1. AGENTS.md
2. docs/current-worklog.md
3. docs/next-session/README.md
4. git status --short
5. git log -1 --oneline

중요:
코드를 바로 수정하지 말고, `AGENTS.md`와 `docs/current-worklog.md` 최상단의 `미룬 작업 큐`를 먼저 읽은 뒤 다음에 해야 할 작업을 우선순위로 정리해서 세션에 보여주세요.
다음 세션용 프롬프트에 일부 항목이 빠져 있어도, `AGENTS.md`와 `docs/current-worklog.md`의 큐에 있으면 계속 살아 있는 작업으로 취급해주세요.

현재 미룬 작업 우선순위:
1. 모달 통일 작업
   - 수업 생성/수업 상세/수업일지 관련 모달을 공통 구조로 정리합니다.
   - 착수 전에 현재 모달 inventory, 저장 원천, 알림톡/Solapi/notification_jobs side effect, 수업일지/숙제/출결 연결을 먼저 표로 정리합니다.
   - 숙제보충/결석보충/정규수업/시험대비/특강의 맥락이 섞이면 안 됩니다.
   - 알림톡 예약/발송, 출결 저장, 수업일지 기록 원천이 같이 바뀌면 즉시 중단하고 별도 gate로 나눕니다.
2. 발송 알림톡 템플릿 설정 관리
   - 실제 발송/예약되는 모든 알림톡 템플릿과 문구 원천을 `설정 > 알림톡`에서 확인하고 수정할 수 있게 합니다.
   - 출결, 수업일지, 숙제보충, 결석보강, 재시험, 공지, 특강, 일정 변경, 학생 11시 리마인더 등 Solapi 경로를 inventory로 정리합니다.
   - 각 템플릿의 현재 원천(하드코딩/app_state/env/Supabase), 변수, 대상(학생/학부모), 즉시발송/예약 여부를 표로 정리합니다.
   - 실제 발송 문구가 설정 화면 미리보기/편집값과 다르거나 코드 상수만 수정해야 하는 구조면 즉시 중단하고 별도 gate로 나눕니다.
3. App.jsx 리팩터링 연속 작업
   - 한 번에 하나의 의미 단위만 진행합니다.
   - 순서는 `원천/동작 보존 -> 파일 분리 -> 검증 명령 -> AI 검수 결과 + 사람이 확인할 것 gate -> 커밋/푸시`입니다.
   - 기능 변경과 리팩터링 범위를 섞지 않습니다.
4. Solapi 특강 템플릿 검수 후 연결
   - 새 세션 시작 초기에 사용자에게 `Solapi 특강 템플릿 검수가 완료됐나요?`를 먼저 확인합니다.
   - 검수 완료 전에는 임시 특강 알림톡 구조를 유지합니다.
   - 검수 완료 확인 후에만 템플릿 ID/변수 연결, 테스트 데이터 발송, 링크/문구 검수를 진행합니다.

오늘 완료/확인된 작업:
1. 기존 일요보강/일요시험보강 runtime을 clean-slate `시험대비` 구조로 전환했습니다.
   - 새 정상 원천은 Supabase `lessons.lesson_type=examPrep`입니다.
   - legacy `examSundayMakeup`을 `examPrep`으로 자동 변환하지 않습니다.
   - 관련 코드 커밋: `43adb9be Clean up legacy Sunday makeup runtime`
2. 미룬 작업 큐를 `AGENTS.md`, `docs/current-worklog.md`, `docs/next-session/README.md` 최상단 흐름으로 고정했습니다.
   - 관련 커밋: `ba348ad8 Record deferred work queue in handoff docs`
3. 운영 Supabase SQL Editor에서 기존 legacy 일요보강 cleanup을 사용자가 실행했습니다.
   - 삭제 전 preview 대상은 2건: `2026-06-21`, `2026-06-28`
   - `lesson_record_count`, `homework_count`, `notification_job_count`, `active_notification_job_count` 모두 0
   - cleanup 후 legacy 조회는 `Success. No rows returned`
4. 새 `examPrep` 수업 조회도 `Success. No rows returned`였습니다.
   - 즉 시험대비 수업은 아직 Supabase `lessons`에 저장되지 않았습니다.
   - 달력에 보였던 `시험대비`는 저장된 수업이 아니라 시험관리 데이터에서 계산된 자동 후보/미리보기였습니다.
   - 사용자가 자동생성 시험대비 후보를 화면에서 수동삭제했습니다. 이는 `app_state.generatedLessonControls.suppressedKeys` 기반 후보 제외로 이해합니다.

다음 세션 주의사항:
- 사용자가 명시적으로 요청하기 전까지 새 시험대비 수업을 생성/반영하지 마세요. 아직 시험대비를 시작하지 않았습니다.
- 나중에 시험대비를 실제로 시작할 때는 `시험관리/학사일정`의 자동 수업 후보에서 필요한 항목만 반영합니다.
- 이미 수동삭제한 시험대비 후보가 필요해지면 `제외 해제` 가능 여부를 먼저 확인합니다.
- 저장 전 자동 후보가 실제 수업처럼 달력에 보여 헷갈리는 문제가 계속되면 `시험대비 자동 후보와 실제 저장 수업 표시 분리`를 별도 UI 개선 작업으로 제안하세요.

계속 커밋하지 말 것:
- `.codex-temp/`
- `.env`
- PDF/HWP/HWPX/ZIP/대용량 자료
- Slack/Supabase/Solapi/Tally/OpenAI 등 비밀값

작업 원칙:
- 운영 Supabase SQL edit 적용은 사용자가 직접 합니다. SQL 자동 적용을 위해 DB URL, DB password, access token을 묻지 않습니다.
- 한 번에 하나의 우선순위 작업만 진행합니다.
- 운영 흐름에 영향이 있으면 `npm run test:production`, `npm run build`, `git diff --check`를 실행합니다.
- 완료 후 `docs/current-worklog.md`와 필요 시 `AGENTS.md`, `docs/next-session/README.md`의 미룬 작업 큐를 갱신합니다.
- 작업 완료 답변에는 `사람 검토 절차`와 `AI 자기검토`를 포함합니다.
```

## Handoff Notes

- 미룬 작업 큐의 source of truth는 `AGENTS.md` 최상단과 `docs/current-worklog.md` 최상단입니다.
- 이 README는 붙여넣기 편의를 위한 사본입니다. 세션 종료 시 새로 미룬 작업이 생기면 세 곳을 함께 갱신하세요.
- 최신 커밋은 이 파일이 커밋된 뒤 달라질 수 있으므로 새 세션에서 반드시 `git log -1 --oneline`으로 확인하세요.
- 현재 로컬에 남을 수 있는 미추적 항목: `.codex-temp/`. 커밋하지 않습니다.
