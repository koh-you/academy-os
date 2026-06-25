# 2026-06-25 Final Session Handoff

## Start Prompt For Next Codex Session

```text
작업 폴더는 E:\academy-os 입니다.

먼저 아래 파일을 읽어주세요.
1. AGENTS.md
2. docs/current-worklog.md
3. docs/session-handoff-2026-06-25-final.md

오늘 주요 완료 사항:
- 시험관리 탈리 탭 제거
- 시험 후 제출은 학생 1명당 1건으로 정리
- 시험 후 제출 대상 학생 체크 기능 추가
- 알림관리는 개별 발송 화면 하나로 단순화
- 교재/보강/공지 문자 템플릿과 AI 수정 추가
- 수업일지 학생별 학부모/학생 알림톡 제외 기능 추가
- 운영 DB에 notification_muted_* 컬럼 SQL 적용 완료

최신 커밋은 27df4a3 Apply notification mute SQL and harden SQL runner 입니다.
작업 전 git status, npm run test:production, npm run build 기준으로 상태를 확인해주세요.
DB 스키마 변경이 있으면 SQL 파일을 작성하고, 운영 Supabase SQL edit 적용은 사용자가 직접 진행합니다.
작업 완료 후 문서 갱신, 커밋, 푸시까지 자동 진행해주세요.
```

## Final Review

- 상태: 완료
- 중대한 미완료/차단 이슈 없음
- `main` 푸시 완료
- 운영 DB SQL 적용 완료
- 작업트리 clean 확인

주의:
- 오늘 DB password가 채팅/이미지로 노출되었으므로, 장기적으로는 Supabase에서 DB password를 reset하는 편이 안전하다.

## Completed Work

### 1. 시험관리

- `탈리` 탭 제거
- `시험 후 제출` 중심으로 운영 흐름 정리
- 창동고3처럼 미적분/확통 2과목을 봐도 학생 1명당 셀프체크 1건만 생성
- 시험 후 제출 대상 학생 체크 기능 추가
- 체크된 학생 웹앱에만 시험 후 제출 카드 노출
- 저장:
  - 대상 선택: `app_state.examPostTargetStudentIds`
  - 제출 기록: 기존 `examPostSubmissions`

### 2. 알림관리

- 알림관리 화면을 `개별 발송` 하나로 단순화
- 수신 범위:
  - `선택`
  - `전체`
  - `학부모`
  - `학생`
- 템플릿 추가:
  - `교재문자`
  - `보강문자`
  - `공지문자`
- `AI 수정` 버튼 추가
- AI 프롬프트는 설정 화면의 `알림관리 공지 AI`로 이동

### 3. 수업일지 학생별 알림톡 제외

- 학생별로 `학부모 알림톡`, `학생 알림톡` 각각 `알림 제외` 가능
- 제외 시 기존 예약 작업은 `canceled`
- 기본예약/30분지연/수동예약을 다시 눌러도 제외 학생은 재생성 안 됨
- 수동 발송 모달에서도 제외 상태면 발송 버튼 차단

적용된 SQL 컬럼:

```sql
notification_muted_parent boolean not null default false
notification_muted_student boolean not null default false
notification_muted_reason text
```

적용 파일:

```text
supabase/20260625_lesson_notification_muting.sql
```

운영 DB에서 컬럼 존재 확인 완료:

- `notification_muted_parent`
- `notification_muted_student`
- `notification_muted_reason`

## Verification

최근 검증 기준:

```powershell
npm run test:production
npm run build
```

결과:

- `npm run test:production` 178개 통과
- `npm run build` 통과
- 기존 Vite chunk size 경고만 있음
- `git status --short` clean

## Recent Commits

```text
27df4a3 Apply notification mute SQL and harden SQL runner
bcc362a Include SQL apply in workflow
3b2cd82 Automate Supabase SQL apply
bb9ec0a Add per-student lesson notification mute
ee39afc Simplify notification center composer
44d6ebf Refine exam post submission targets
```

## Recommended Next Check

다음 세션 첫 운영 검수로 아래를 확인하면 좋다.

1. 운영 사이트에서 수업일지 열기
2. 특정 학생의 `학부모 알림톡` 또는 `학생 알림톡` 아래 `알림 제외` 클릭
3. `예약 확인` 모달에서 해당 학생이 `알림 제외`로 보이는지 확인
4. 기본예약/30분지연을 다시 눌러도 제외 학생의 해당 알림톡이 재생성되지 않는지 확인
5. 제외 해제 후 현재 수업 발송 계획에 맞춰 예약이 다시 생기는지 확인
