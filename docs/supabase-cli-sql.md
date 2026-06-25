# Supabase CLI SQL Apply

이 저장소는 Supabase CLI를 로컬 dev dependency로 사용한다. 전역 설치 없이 아래 명령으로 실행한다.

```powershell
npm run supabase -- --version
```

## 1. 최초 1회 프로젝트 연결

Supabase access token으로 로그인한 뒤 프로젝트를 연결한다.

```powershell
npm run supabase -- login
npm run supabase -- link --project-ref <supabase-project-ref>
```

CLI가 만드는 `supabase/.temp/`는 로컬 연결 상태라 Git에 올리지 않는다.

## 2. SQL 파일 적용

`supabase/` 폴더 안의 SQL 파일만 실행한다.

```powershell
npm run db:apply -- supabase/20260625_lesson_notification_muting.sql
```

자주 쓰는 최신 학생별 알림 제외 migration은 단축 명령도 있다.

```powershell
npm run db:apply:notification-muting
```

## 3. 링크 없이 DB URL로 적용

연결 문자열을 환경변수로 넘기면 linked project 대신 직접 DB URL로 실행한다.

```powershell
$env:SUPABASE_DB_URL="postgresql://..."
npm run db:apply -- supabase/20260625_lesson_notification_muting.sql
```

`SUPABASE_DB_URL`은 비밀값이므로 Git에 올라가는 문서나 커밋에 남기지 않는다. 자동 SQL 적용이 필요하면 Git에 포함되지 않는 로컬 `.env`에만 저장한다.

## 4. Codex SQL 자동 적용에 필요한 정보

Codex가 매번 SQL edit을 자동으로 적용하려면 아래 둘 중 하나가 로컬 환경에 준비되어 있어야 한다. 값은 채팅이나 문서에 원문으로 남기지 말고, Git에 올라가지 않는 로컬 `.env` 또는 현재 PowerShell 환경변수에만 둔다.

### 권장: DB URL 1개

가장 안정적인 방식은 운영 DB 연결 문자열을 `.env`에 저장하는 것이다.

```powershell
SUPABASE_DB_URL=postgresql://...
```

이 값이 있으면 `scripts/apply-supabase-sql.cjs`가 linked project 없이 바로 아래 명령을 실행할 수 있다.

```powershell
npm run db:apply -- supabase/<file>.sql
```

### 대안: Project ref + DB password + CLI 로그인

DB URL 대신 아래 값들을 쓸 수도 있다.

```powershell
SUPABASE_PROJECT_REF=<project-ref>
SUPABASE_DB_PASSWORD=<database-password>
```

`SUPABASE_PROJECT_REF`는 아래처럼 `SUPABASE_URL`에서 자동 추출할 수도 있다.

```powershell
SUPABASE_URL=https://<project-ref>.supabase.co
SUPABASE_DB_PASSWORD=<database-password>
```

이 방식은 Supabase CLI가 이미 로그인되어 있어야 한다. 새 PC/새 세션에서 로그인이 풀려 있으면 아래 중 하나가 필요하다.

```powershell
npm run supabase -- login
```

또는 현재 PowerShell에 access token을 넣는다.

```powershell
$env:SUPABASE_ACCESS_TOKEN="<supabase-access-token>"
```

필요한 정보 요약:

- 1순위: `SUPABASE_DB_URL`
- 2순위: `SUPABASE_PROJECT_REF` 또는 `SUPABASE_URL`
- 2순위 추가 필수: `SUPABASE_DB_PASSWORD`
- 2순위 로그인 필수: Supabase CLI 로그인 또는 `SUPABASE_ACCESS_TOKEN`

주의:

- `.env`는 Git에 올리지 않는다.
- DB password/access token/DB URL은 작업 문서에 원문을 쓰지 않는다.
- DB password가 채팅이나 이미지로 노출되면 Supabase에서 password reset 후 새 값을 로컬 `.env`에만 저장한다.

## 5. 현재 로컬 자격 상태

2026-06-25 기준, 이전 대화세션에서 받은 direct DB URL과 DB password는 이 PC의 로컬 `.env`에 저장되어 있다. 다음 세션에서 같은 DB URL 또는 DB password를 다시 묻지 않는다.

현재 확인된 제약:

- `SUPABASE_DB_URL` direct host는 `db.<project-ref>.supabase.co` 형식이다.
- 이 host가 현재 DNS에서 IPv6 주소만 반환해, 로컬 Supabase CLI 연결이 `hostname resolving error`로 실패할 수 있다.
- `SUPABASE_PROJECT_REF`와 `SUPABASE_DB_PASSWORD`도 `.env`에 저장되어 있지만, linked project 방식은 Supabase CLI 로그인 또는 `SUPABASE_ACCESS_TOKEN`이 추가로 필요하다.

따라서 SQL 적용이 또 실패하면 같은 DB URL을 다시 묻지 말고 아래 둘 중 하나만 요청한다.

- Supabase Dashboard의 Session pooler connection string
- `SUPABASE_ACCESS_TOKEN`
