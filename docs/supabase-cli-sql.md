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

`SUPABASE_DB_URL`은 비밀값이므로 `.env`, 문서, 커밋에 남기지 않는다.
