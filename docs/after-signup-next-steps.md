# 가입 완료 후 다음 작업

Supabase, Render, Vercel, GitHub 가입이 끝난 상태에서 진행하는 순서입니다.

## 1. GitHub 저장소 준비

사람이 할 일:

1. GitHub에서 새 repository를 만듭니다.
2. 이름은 `academy-os` 또는 `koh-you-math-academy-os`로 둡니다.
3. Private으로 만들어도 됩니다.
4. 저장소 주소를 복사해 둡니다.

Codex가 할 일:

- 현재 로컬 프로젝트를 GitHub 저장소에 연결합니다.
- 필요한 경우 첫 commit/push를 진행합니다.

## 2. Supabase 프로젝트 값 확인

사람이 할 일:

1. Supabase 프로젝트로 들어갑니다.
2. Project Settings > API로 이동합니다.
3. 아래 값을 확인합니다.
   - Project URL
   - anon public key
   - service_role key

주의:

- 이 값들은 채팅에 그대로 오래 남기지 않는 것이 좋습니다.
- Codex가 `.env` 파일 위치를 안내하면, 선생님이 직접 붙여 넣는 방식이 가장 안전합니다.

Codex가 할 일:

- `.env`에 들어갈 형식을 준비합니다.
- Supabase 연결 상태를 `/api/core/status`로 확인합니다.

## 3. Supabase DB 생성

사람이 할 일:

1. Supabase > SQL Editor로 들어갑니다.
2. `supabase/schema.sql` 내용을 복사합니다.
3. SQL Editor에 붙여 넣고 Run을 누릅니다.
4. Table Editor에서 테이블들이 생성됐는지 확인합니다.

Codex가 할 일:

- SQL 실행 후 API로 샘플 데이터를 Supabase에 넣는 작업을 진행합니다.
- 사용할 엔드포인트는 `POST /api/admin/seed-core-data`입니다.

## 4. 로컬에서 Supabase 연결 확인

사람이 할 일:

1. `.env` 파일에 Supabase 값을 입력합니다.
2. API 서버를 다시 실행합니다.

Codex가 할 일:

- `/api/core/status` 확인
- `/api/students` 확인
- `/api/classes` 확인
- `/api/lessons` 확인
- `/api/admin/seed-core-data` 실행
- 다시 `/api/students`를 확인해서 source가 `supabase`인지 검수

## 5. Render 백엔드 배포

사람이 할 일:

1. Render에서 New Web Service를 누릅니다.
2. GitHub 저장소를 연결합니다.
3. Start Command를 `npm run api`로 둡니다.
4. Environment Variables에 `.env.example` 기준 값을 입력합니다.

Codex가 할 일:

- Render 배포 로그를 기준으로 오류를 수정합니다.
- Render API 주소의 `/health`를 확인합니다.

## 6. Vercel 프론트 배포

사람이 할 일:

1. Vercel에서 New Project를 누릅니다.
2. GitHub 저장소를 연결합니다.
3. Environment Variable에 아래 값을 넣습니다.

```text
VITE_API_BASE_URL=Render API 주소
```

Codex가 할 일:

- Vercel 배포 오류를 수정합니다.
- 프론트가 Render API를 호출하는지 확인합니다.

## 7. 알림톡 실제 발송 전 안전 설정

초기값은 반드시 아래처럼 둡니다.

```text
ALIMTALK_DRY_RUN=true
ALIMTALK_TEST_RECIPIENT=01057882748
ALIMTALK_ALLOW_REAL_PARENT_NUMBERS=false
```

이 상태에서는 실제 학부모 번호로 발송하지 않습니다.

실제 발송 전 사람 확인:

- Solapi 템플릿 승인 완료
- 테스트 번호로 발송 성공
- 발송 로그 확인
- 문구 확인
- 학생/학부모 번호 검수

## 8. 현재 코드에 준비된 API

| API | 역할 | Supabase 키 없을 때 |
| --- | --- | --- |
| `GET /api/core/status` | Supabase 연결 상태 확인 | 환경변수 누락 표시 |
| `GET /api/students` | 학생 목록 조회 | 로컬 샘플 응답 |
| `GET /api/classes` | 반 목록 조회 | 로컬 샘플 응답 |
| `GET /api/lessons` | 수업 목록 조회 | 로컬 샘플 응답 |
| `GET /api/lessons?date=YYYY-MM-DD` | 날짜별 수업 조회 | 로컬 샘플 응답 |
| `POST /api/admin/seed-core-data` | 샘플 데이터를 Supabase로 업로드 | Supabase 키 없으면 실패 |

## 9. 다음 Codex 작업

다음 작업은 아래 순서로 진행합니다.

1. `.env` 생성 안내
2. Supabase 연결 확인
3. 샘플 데이터 seed 실행
4. 프론트 학생/반/수업 조회를 API 기반으로 전환
5. 수업일지 저장을 Supabase API로 전환

