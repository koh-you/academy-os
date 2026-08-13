# First-Time Production Checklist

처음 회원가입부터 실제 배포 직전까지 사람이 해야 할 일입니다.

## 1. 계정 만들기

### Supabase

1. Supabase 사이트에 가입합니다.
2. 새 프로젝트를 만듭니다.
3. 프로젝트 이름은 `koh-you-math-academy-os`처럼 알아보기 쉽게 둡니다.
4. Database password는 안전한 곳에 저장합니다.
5. Region은 한국 사용자 기준으로 가까운 지역을 선택합니다.
6. Project Settings > API에서 아래 값을 복사해 둡니다.
   - Project URL
   - anon public key
   - service_role key

### Render

1. Render 사이트에 가입합니다.
2. GitHub 계정을 연결합니다.
3. 새 Web Service를 만듭니다.
4. 이 프로젝트 저장소를 연결합니다.
5. Root Directory는 프로젝트 루트로 둡니다.
6. Build Command는 `npm install`로 둡니다.
7. Start Command는 `npm run api`로 둡니다.
8. 배포 후 생성되는 `https://...onrender.com` 주소를 복사해 둡니다.

### Vercel

1. Vercel 사이트에 가입합니다.
2. GitHub 계정을 연결합니다.
3. 새 프로젝트를 만들고 이 저장소를 선택합니다.
4. Framework Preset은 Vite로 인식되면 그대로 둡니다.
5. Build Command는 `npm run build`로 둡니다.
6. Output Directory는 `dist`로 둡니다.

### Solapi

1. Solapi에 로그인합니다.
2. 발신번호를 등록합니다.
3. 카카오 채널을 연결합니다.
4. 알림톡 템플릿을 만듭니다.
5. 템플릿 승인이 끝난 뒤 템플릿 ID를 복사합니다.
6. 실제 발송 전까지는 테스트 번호 `01057882748`만 사용합니다.

### AI API

1. OpenAI 또는 Anthropic 계정을 준비합니다.
2. API key를 발급합니다.
3. 처음에는 한 공급자만 연결해도 됩니다.
4. 월 사용 한도를 반드시 설정합니다.

## 2. Supabase DB 만들기

1. Supabase 프로젝트로 들어갑니다.
2. SQL Editor를 엽니다.
3. `supabase/schema.sql` 전체 내용을 붙여 넣습니다.
4. Run을 누릅니다.
5. Table Editor에서 아래 테이블이 생겼는지 확인합니다.
   - students
   - class_templates
   - lessons
   - lesson_student_records
   - homeworks
   - makeup_tasks
   - problem_books
   - wrong_problem_statuses
   - exam_prep_rows
   - score_records
   - school_events
   - notification_logs

## 3. Render 환경변수 입력

Render Web Service의 Environment에 아래 값을 넣습니다.

```text
ACADEMY_API_PORT=8787
SUPABASE_URL=Supabase Project URL
SUPABASE_ANON_KEY=Supabase anon key
SUPABASE_SERVICE_ROLE_KEY=Supabase service role key
SOLAPI_API_KEY=Solapi API key
SOLAPI_API_SECRET=Solapi API secret
SOLAPI_FROM=등록된 발신번호
SOLAPI_PFID=카카오 채널 PFID
SOLAPI_ATTENDANCE_TEMPLATE_ID=출결 템플릿 ID
SOLAPI_PARENT_COMMENT_TEMPLATE_ID=학부모 코멘트 템플릿 ID
SOLAPI_STUDENT_COMMENT_TEMPLATE_ID=학생 코멘트 템플릿 ID
ALIMTALK_DRY_RUN=true
ALIMTALK_TEST_RECIPIENT=01057882748
ALIMTALK_ALLOW_REAL_PARENT_NUMBERS=false
OPENAI_API_KEY=OpenAI key
ANTHROPIC_API_KEY=Anthropic key
```

중요: `ALIMTALK_DRY_RUN=true`를 유지하면 실제 발송하지 않고 기록만 남깁니다.

## 4. Vercel 환경변수 입력

Vercel 프로젝트의 Environment Variables에 아래 값을 넣습니다.

```text
VITE_API_BASE_URL=https://Render에서 받은 주소
```

예시:

```text
VITE_API_BASE_URL=https://koh-you-math-api.onrender.com
```

## 5. 첫 배포 후 확인

1. Render 주소 뒤에 `/health`를 붙여 접속합니다.
2. `{ "ok": true }` 형태가 보이면 API가 켜진 것입니다.
3. Vercel 주소로 접속합니다.
4. teacher / 1234로 로그인합니다.
5. 수업일지, 학생관리, 숙제현황, 오답관리, 시험대비, 학사일정을 열어봅니다.
6. 강사코멘트 알림톡 버튼을 눌러 dry-run 기록이 되는지 확인합니다.
7. 실제 학부모 번호로 발송되지 않았는지 Solapi와 API 로그를 확인합니다.

## 6. 실제 발송 전 최종 체크

아래 조건이 모두 충족되기 전에는 실제 발송을 켜지 않습니다.

- 학생 전화번호와 학부모 전화번호가 검수됨
- 템플릿 문구가 승인됨
- 테스트 번호 `01057882748`로 발송 성공함
- 발송 로그가 남음
- 실패했을 때 화면에 실패가 보임
- 원장님이 발송 버튼을 직접 누르는 흐름만 열려 있음

실제 발송을 켤 때만 Render 환경변수를 아래처럼 바꿉니다.

```text
ALIMTALK_DRY_RUN=false
ALIMTALK_ALLOW_REAL_PARENT_NUMBERS=true
```

## 7. 오늘 이후 개발 흐름

배포 단계로 넘어가도 지금처럼 웹앱 개발은 계속할 수 있습니다. 다만 변경 방식이 아래처럼 바뀝니다.

- 화면 수정: 지금처럼 React 코드 수정
- 실제 저장: localStorage에서 Supabase API로 점진 전환
- 실제 발송: Render API에서만 처리
- 노션/Tally 연동: Render API 또는 Make Webhook을 통해 Supabase에 저장
- 검수: 로컬에서 먼저 확인한 뒤 Vercel/Render에 배포

