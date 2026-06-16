# 배포 다음 단계

현재 상태는 로컬 API와 Supabase DB 연결까지 검증된 단계입니다. 다음 목표는 Render에 백엔드를 올리고, Vercel에 프론트를 올려서 노트북을 꺼도 접속 가능한 주소를 만드는 것입니다.

## 1. Render 백엔드 만들기

1. Render에 로그인합니다.
2. `New +` 버튼을 누릅니다.
3. `Web Service`를 선택합니다.
4. GitHub 저장소 `academy-os`를 연결합니다.
5. 서비스 이름은 `koh-you-math-academy-os-api`로 둡니다.
6. Runtime은 `Node`입니다.
7. Build Command는 `npm install`입니다.
8. Start Command는 `npm run api`입니다.
9. Health Check Path는 `/health`입니다.

## 2. Render 환경변수

Render 서비스의 `Environment`에 아래 값을 넣습니다.

```text
SUPABASE_URL=Supabase Project URL
SUPABASE_ANON_KEY=Supabase anon public key
SUPABASE_SERVICE_ROLE_KEY=Supabase service_role key
ALIMTALK_DRY_RUN=true
ALIMTALK_ALLOW_REAL_PARENT_NUMBERS=false
ALIMTALK_TEST_RECIPIENT=01057882748
CORS_ALLOWED_ORIGINS=*
```

Solapi와 AI는 바로 실발송하지 않으므로 처음에는 비워도 됩니다. 알림톡 실제 테스트를 시작할 때 아래 값을 추가합니다.

```text
SOLAPI_API_KEY=Solapi API key
SOLAPI_API_SECRET=Solapi API secret
SOLAPI_FROM=등록된 발신번호
SOLAPI_PFID=카카오 채널 PFID
SOLAPI_ATTENDANCE_TEMPLATE_ID=출결 템플릿 ID
SOLAPI_PARENT_COMMENT_TEMPLATE_ID=학부모 코멘트 템플릿 ID
SOLAPI_STUDENT_COMMENT_TEMPLATE_ID=학생 코멘트 템플릿 ID
OPENAI_API_KEY=OpenAI API key
ANTHROPIC_API_KEY=Anthropic API key
```

중요: 실제 학부모 번호로 발송하면 안 되는 동안에는 반드시 아래 상태를 유지합니다.

```text
ALIMTALK_DRY_RUN=true
ALIMTALK_ALLOW_REAL_PARENT_NUMBERS=false
ALIMTALK_TEST_RECIPIENT=01057882748
```

## 3. Render 배포 확인

배포가 끝나면 Render가 `https://...onrender.com` 주소를 줍니다. 주소 뒤에 `/health`를 붙여 접속합니다.

예시:

```text
https://koh-you-math-academy-os-api.onrender.com/health
```

아래처럼 나오면 백엔드가 정상입니다.

```json
{
  "ok": true,
  "service": "academy-os-api"
}
```

## 4. Vercel 프론트 연결

1. Vercel에 로그인합니다.
2. `Add New...`에서 `Project`를 선택합니다.
3. GitHub 저장소 `academy-os`를 선택합니다.
4. Framework Preset은 `Vite`입니다.
5. Build Command는 `npm run build`입니다.
6. Output Directory는 `dist`입니다.
7. Environment Variables에 아래 값을 넣습니다.

```text
VITE_API_BASE_URL=https://Render에서 받은 주소
```

예시:

```text
VITE_API_BASE_URL=https://koh-you-math-academy-os-api.onrender.com
```

## 5. 배포 후 첫 검수

1. Vercel 주소로 접속합니다.
2. `teacher / 1234`로 로그인합니다.
3. 학생관리에서 학생 8명이 보이는지 확인합니다.
4. 수업일지에서 수업을 열고 학생 8명이 보이는지 확인합니다.
5. 수업일지에서 지난 숙제/다음 숙제를 수정하고 저장 상태가 `저장 완료`로 바뀌는지 확인합니다.
6. Supabase Table Editor에서 `lesson_student_records`, `homeworks` 데이터가 바뀌었는지 확인합니다.
7. 알림톡 버튼은 아직 dry-run 상태로만 검수합니다.

## 현재 완료율

운영 MVP 기준 약 60%입니다. 배포가 완료되면 “혼자 로컬에서 쓰는 MVP”에서 “외부 접속 가능한 MVP”로 넘어가며 약 65% 단계로 볼 수 있습니다.
