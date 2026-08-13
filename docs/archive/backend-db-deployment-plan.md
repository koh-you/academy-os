# Backend, DB, Hosting Plan

## 결정한 추천 구조

- Frontend: Vercel
- Backend API: Render Web Service
- Database/Auth/Storage: Supabase
- Notification: Solapi Kakao Alimtalk
- AI: OpenAI 또는 Anthropic 중 선택 가능

이 구조의 목적은 지금 만든 로컬 MVP를 유지하면서, 저장소와 발송 기능만 실제 서비스용으로 점진적으로 교체하는 것입니다.

## 왜 이렇게 나누는가

Vercel은 React/Vite 프론트 배포에 집중합니다. 사용자가 보는 화면은 빠르게 배포하고, 주소도 쉽게 공유할 수 있습니다.

Render는 Node API 서버를 항상 켜두는 역할을 맡습니다. Solapi 알림톡, AI API 호출, Tally/Notion 연동처럼 비밀키가 필요한 작업은 프론트가 아니라 Render API에서 처리합니다.

Supabase는 실제 데이터를 저장합니다. 학생, 반, 수업, 수업일지, 숙제, 오답, 시험대비, 학사일정, 알림톡 로그를 Postgres DB에 저장하고, 나중에 파일 저장소와 로그인까지 확장합니다.

## 전환 순서

1. Supabase 프로젝트를 만들고 `supabase/schema.sql`을 실행합니다.
2. Render에 현재 `api/server.js`를 배포합니다.
3. Vercel에 React 앱을 배포합니다.
4. Vercel 환경변수 `VITE_API_BASE_URL`에 Render API 주소를 넣습니다.
5. Render 환경변수에 Supabase, Solapi, AI 키를 넣습니다.
6. 처음에는 `ALIMTALK_DRY_RUN=true`와 `ALIMTALK_ALLOW_REAL_PARENT_NUMBERS=false`를 유지합니다.
7. 로컬 샘플 데이터를 Supabase seed/import로 옮깁니다.
8. 프론트의 localStorage 저장을 한 화면씩 Supabase API 저장으로 교체합니다.

## 첫 번째 DB 적용 범위

처음부터 모든 기능을 DB화하지 않습니다. 아래 순서로 옮깁니다.

1. 학생/반/수업: `students`, `class_templates`, `lessons`
2. 수업일지: `lesson_student_records`
3. 숙제/보충관리: `homeworks`, `makeup_tasks`
4. 알림톡 기록: `notification_logs`
5. 시험대비/학사일정: `exam_prep_rows`, `school_events`
6. 오답/교재: `problem_books`, `wrong_problem_statuses`
7. 성적: `score_records`

## 안전 원칙

- 실제 학부모 번호 발송은 마지막에 켭니다.
- 테스트 중 학부모 번호는 모두 `01057882748`로 리다이렉트합니다.
- 삭제는 실제 삭제보다 `status` 변경을 우선합니다.
- 학생/학부모 화면은 읽기 권한 중심으로 시작합니다.
- Solapi, Supabase service role, AI API key는 프론트에 넣지 않습니다.

## 현재 코드에 반영된 준비

- 프론트 API 주소를 `VITE_API_BASE_URL` 환경변수로 분리했습니다.
- 로컬 기본값은 `http://127.0.0.1:8787`입니다.
- Render 배포 후에는 Vercel에 `VITE_API_BASE_URL=https://...onrender.com` 형식으로 넣으면 됩니다.
- 알림톡 API는 dry-run과 테스트 번호 리다이렉트 안전장치를 가지고 있습니다.

