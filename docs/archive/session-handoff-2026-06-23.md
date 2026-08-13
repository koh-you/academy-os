# Academy OS Session Handoff - 2026-06-23

이 문서는 다음 Codex/AI 세션이 바로 이어서 작업할 수 있도록 오늘 작업 내용과 다음 작업 큐를 정리한 handoff입니다.

## 0. 세션 운영 원칙 - AI 자동 커밋/푸시

- 이 저장소에서는 사용자가 명시적으로 멈추라고 하지 않는 한, Codex/AI가 할 수 있는 작업은 끝까지 진행한다.
- 코드/문서 수정 후에는 가능한 범위에서 검증을 실행하고, `docs/current-worklog.md`를 갱신한 뒤 `git add`, `git commit`, `git push origin main`까지 진행한다.
- GitHub `main` push가 Vercel/Render 자동 배포 트리거이므로, push 후 가능한 범위에서 운영 URL 응답도 확인한다.
- "계획만", "검토만", "커밋하지 마세요"처럼 사용자가 범위를 명확히 제한한 경우에만 커밋/푸시를 멈춘다.
- Supabase SQL Editor 작업은 AI가 자동 적용했다고 가정하지 않는다. SQL이 필요하면 파일명, 실행 순서, 적용 이유, 확인 방법을 문서와 최종 답변에 남긴다.
- 사용자가 반복해서 요청한 내용: 매 대화세션마다 AI가 커밋/푸시 가능한 것은 질문으로 멈추지 말고 알아서 진행한다.

## 1. 오늘 완료한 일

### 화목토 2개 반 학생 운영 반영

- 운영 웹앱에 화목토 반 2개를 확인했다.
  - `template_tt_sat_front`: `화목 4-7 / 토 10-1반`
  - `template_tt_sat_back`: `화목 7-10 / 토 1-4반`
- 위 두 반은 이미 Supabase `class_templates`에 활성 상태로 존재했다.
- 수업일지/lesson은 생성하지 않았다. 사용자가 직접 만들 예정이라고 했다.

### 노션 기준 정리

- 조윤빈은 더 이상 화목토가 아니며, 기존처럼 `월수금 4-7`로 유지한다.
- 한주원은 `화목 7-10 / 토 1-4반`으로 반영한다.
- 퇴원생은 제외한다.
- 박주원/박상원의 동일 학부모 번호는 사용자 확인 후 그대로 반영했다.

### 운영 Supabase 반영 인원

`template_tt_sat_front` 7명:

- 홍지은
- 김해란
- 문윤슬
- 우솔아
- 김민영
- 이혜민
- 박소정

`template_tt_sat_back` 8명:

- 유준영
- 정해연
- 박주원
- 박상원
- 안찬호
- 손호진
- 한재승
- 한주원

### 학생 포털 오늘 MVP 및 마이페이지 통계

- 학생 마이페이지 `통계`에 `숙제통계`/`출결통계` 하위 탭을 추가했다.
- `/attendance` 태블릿 출결 화면을 kiosk-like 화면으로 정리하고, 관리자 번호 기본값을 `2748`로 설정했다.
- 교사용 로그인은 서버 `/api/auth/login`을 먼저 사용하도록 바꾸고, `teacher_accounts` PBKDF2-SHA256 해시 검증 API를 추가했다.
- 학생 화면 `오늘` 탭에 D-day/특이일정 상단 알림, 수업일지 캘린더, 학생 질문 리스트, 보충/재시험 일정 요약을 추가했다.
- 학생 화면 탭 순서를 `오늘`, `전체`, `자료함`, `평가`, `마이 페이지`, `등록`, `커리큘럼`으로 정리했다.
- Tally 시험 후 self-check 흐름은 `docs/exam-post-submission-student-webapp-plan.md`에 자동화 항목과 학생 입력 항목으로 나누어 반영했다.

## 2. 검증 결과

- 운영 `/api/classes`에서 화목토 클래스 2개 활성 상태 확인.
- 운영 `/api/students/bulk`로 신규 재원생 15명 저장 완료.
- 운영 `/api/students` 재조회 기준:
  - 신규 15명 모두 `source:supabase`에서 확인.
  - 앞반 7명, 뒷반 8명 반 배정 정상.
  - 학생 전화번호 누락 0건.
  - 학부모 전화번호 누락 0건.
  - 조윤빈은 기존 `template_mwf_4_7` 유지 확인.
- 운영 API health 확인:
  - `https://koh-you-math-academy-os-api.onrender.com/health` 응답 정상.
- 운영 프론트 응답 확인:
  - `https://academy-os-blue.vercel.app` HTTP 200 확인.
- 학생 포털 MVP 변경 검증:
  - `node --check api/server.js` 통과.
  - `npm run build` 통과.
  - `npm run test:production` 106개 통과.

## 3. 커밋/배포 상태

- 작업 기록을 `docs/current-worklog.md`에 남겼다.
- 오늘 커밋 완료:
  - `fa2b22a Record Tuesday Saturday class import`
  - `87067ec Build student portal briefing MVP`
- `git push origin main` 완료.
- GitHub main push 기준으로 Vercel/Render 자동 배포 트리거까지 완료된 상태다.
- 운영 URL 확인:
  - Frontend `https://academy-os-blue.vercel.app` HTTP 200 확인.
  - Backend health `https://koh-you-math-academy-os-api.onrender.com/health` HTTP 200 확인.
- 이후 문서 변경도 사용자가 명시적으로 막지 않으면 별도 커밋/푸시까지 진행한다.

## 4. SQL Editor 필요 여부

SQL Editor 작업 1건 필요.

필요 작업:

- `supabase/20260623_teacher_accounts.sql`을 Supabase SQL Editor에서 실행해야 서버 해시 기반 교사용 계정 저장이 완전히 동작한다.
- SQL 실행 전에는 프론트가 기존 `app_state` 계정 설정으로 fallback한다.
- SQL 실행 후 설정 화면에서 현재 비밀번호를 입력하고 계정 저장을 한 번 수행하면 `teacher_accounts`에 해시 계정이 생성된다.
- 학생 포털 오늘 MVP 자체는 기존 `app_state`, `exam_prep_rows`, `school_events`, `makeup_tasks`, `lesson_student_records`를 사용하므로 별도 SQL이 필요 없다.

## 5. 다음 작업 큐

### P0. 학생 포털 오늘 MVP 운영 검수

목표:

- 운영 데이터로 학생 로그인 후 `오늘` 탭, 마이페이지 통계, 출결 키오스크, 교사용 계정 저장을 검수한다.
- 실제 학생별 수업일지 데이터가 있을 때 캘린더 상세가 의도대로 보이는지 확인한다.
- `supabase/20260623_teacher_accounts.sql` 실행 여부를 확인하고, 실행 후 교사용 계정 저장/로그인을 재검수한다.

확인할 화면:

- 학생 `오늘`: 상단 D-day/특이일정 알림, 수업 기록 캘린더, 질문 리스트, 보충/재시험 일정.
- 학생 `마이 페이지 > 통계`: 숙제통계/출결통계.
- `/attendance`: 관리자 번호 `2748` 진입 흐름.
- 설정: 교사용 계정 저장 및 서버 인증 fallback 여부.

주의:

- 학생화면은 수업일지 원본 데이터를 보되, 학생에게 공개할 것만 보여줘야 한다.
- 알림톡 발송 여부와 학생화면 노출 여부는 별도로 봐야 한다.
- 내부 메모가 학생화면에 노출되지 않도록 공개 플래그를 반드시 확인해야 한다.
- SQL Editor 작업이 필요한 경우 최종 답변과 `docs/current-worklog.md`에 반드시 남긴다.

### P1. 시험 후 제출함 구현

목표:

- `docs/exam-post-submission-student-webapp-plan.md` 기준으로 Tally self-check를 학생 웹앱 제출함으로 옮긴다.
- 학생 입력이 필요한 항목과 자동화 가능한 항목을 분리해 저장한다.
- 시험 후 제출 파일/점수/성찰 답변을 강사가 관리할 수 있게 한다.

SQL 가능성:

- 실제 구현 시 `exam_post_submissions`, `exam_submission_files`, Supabase Storage 정책이 필요할 수 있다.

## 6. 다음 세션 시작 프롬프트

```text
academy-os 작업입니다.

반드시 먼저 아래 파일을 읽고 시작하세요.
- AGENTS.md
- docs/current-worklog.md
- docs/session-handoff-2026-06-23.md
- docs/ai-deployment-responsibility-2026-06-21.md

AI가 할 수 있는 일은 AI가 끝까지 해주세요. 사용자가 명시적으로 막지 않았다면 계획만 말하고 멈추지 말고, 구현/검증/문서 기록/커밋/푸시까지 진행하세요.

코드/문서 수정 후 기본 절차:
1. 관련 검증 실행. 코드 변경이면 `npm run build`, 운영 흐름 변경이면 필요 시 `npm run test:production`.
2. `docs/current-worklog.md` 갱신.
3. `git add`, `git commit`, `git push origin main`.
4. push 후 가능한 범위에서 운영 URL 확인.

사용자가 "커밋하지 마세요", "검토만", "계획만"처럼 명확히 제한하지 않는 한 커밋/푸시 가능한 것은 AI가 알아서 진행하세요. 이 원칙은 사용자가 반복해서 요청한 사항입니다.

GitHub main push가 Vercel/Render 자동 배포 트리거입니다. push 후 가능한 범위에서 운영 URL도 확인하세요.
- Frontend: https://academy-os-blue.vercel.app
- Backend health: https://koh-you-math-academy-os-api.onrender.com/health

Supabase SQL migration은 자동 적용된다고 가정하지 마세요. DB 컬럼/테이블/인덱스/RPC/RLS 변경이 필요하면 SQL 파일명, 실행 순서, 적용 이유, 확인 방법을 초보자 기준으로 안내하고 docs/current-worklog.md에도 남기세요. SQL이 필요 없으면 “SQL Editor 작업 필요 없음”이라고 명확히 말하세요.

오늘 상태:
- 화목토 2개 반은 운영에 있음.
- 화목토 재원생 15명은 운영 Supabase students에 반영됨.
- 조윤빈은 월수금 4-7 유지.
- 수업일지/lesson은 생성하지 않았음. 사용자가 직접 만들 예정.
- 학생 포털 오늘 MVP, 마이페이지 숙제/출결 통계, 출결 관리자 번호 `2748`, 서버 인증 1차 전환이 구현되어 `87067ec Build student portal briefing MVP`로 push됨.
- `supabase/20260623_teacher_accounts.sql`은 아직 사용자가 Supabase SQL Editor에서 실행해야 함.

다음 P0:
운영 데이터로 학생 포털 오늘 MVP를 검수하세요. 특히 학생별 수업일지 캘린더, 질문 리스트 저장, 상단 D-day/특이일정 알림, 마이페이지 통계, 출결 키오스크 관리자 번호, 서버 인증 fallback을 확인하세요. 이후 시험 후 제출함 구현으로 넘어가세요.
```
