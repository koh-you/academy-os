# Academy OS AI Deployment Responsibility - 2026-06-21

이 문서는 다음 Codex/AI 세션에 넘길 배포 책임 기준입니다.

핵심 원칙은 다음과 같습니다.

> AI가 할 수 있는 작업은 AI가 끝까지 한다.  
> 사람은 Supabase SQL Editor 실행, GitHub/Vercel/Render/Supabase 비밀값 입력, 대시보드 권한이 필요한 수동 승인만 한다.

## 1. AI가 반드시 해야 하는 일

코드나 문서를 수정한 세션은 로컬 수정에서 멈추면 안 됩니다. 사용자가 명시적으로 “커밋하지 마세요”, “푸시하지 마세요”, “배포하지 마세요”라고 말하지 않았다면, AI는 가능한 범위에서 아래를 직접 수행해야 합니다.

1. 변경 범위 확인
   - `git status --short --branch`
   - 변경 파일과 미추적 파일 확인
   - 사용자 또는 이전 세션의 unrelated 변경은 되돌리지 않는다.

2. 로컬 검증
   - 코드 변경이면 `npm run build`
   - 운영 흐름에 영향이 있으면 `npm run test:production`
   - API 단독 변경이면 필요한 `node --check` 또는 관련 테스트도 실행

3. 작업 기록
   - 의미 있는 변경은 `docs/current-worklog.md`에 기록
   - SQL 필요 여부를 반드시 기록

4. Git 반영
   - 필요한 파일만 stage
   - 의미 있는 commit 생성
   - `git push origin main`

5. 배포 반영 확인
   - GitHub `main` push가 성공했는지 확인
   - 가능한 경우 운영 URL을 직접 확인
     - Frontend: `https://academy-os-blue.vercel.app`
     - Backend health: `https://koh-you-math-academy-os-api.onrender.com/health`
   - 알림톡/API처럼 백엔드 수정이면 운영 API에 수정이 반영됐는지 가능한 범위에서 확인

6. 최종 보고
   - 무엇을 수정했는지
   - 어떤 검증을 통과했는지
   - commit hash
   - push 완료 여부
   - 운영 URL 확인 여부
   - SQL Editor 작업 필요 여부

## 2. AI가 “자동 배포 완료”라고 말할 수 있는 기준

Academy OS는 GitHub `main` push가 Vercel/Render 자동 배포 트리거입니다. 따라서 AI가 직접 할 수 있는 배포 완료 기준은 다음입니다.

- `git push origin main` 성공
- Vercel/Render가 자동 배포를 시작할 수 있는 상태까지 올라감
- 가능한 경우 public 운영 URL 또는 health endpoint 응답 확인

단, AI가 Vercel/Render 대시보드 권한이나 배포 로그 접근 권한을 갖고 있지 않다면, “대시보드 내부 배포 성공까지 확인했다”고 말하면 안 됩니다.

정확한 표현:

- `origin/main push 완료. Vercel/Render 자동 배포 트리거까지 완료했습니다.`
- `운영 URL 응답까지 확인했습니다.`
- `대시보드 내부 로그는 권한이 없어 확인하지 못했습니다.`

부정확한 표현:

- `제가 Vercel/Render 배포를 완전히 완료했습니다.`
- `SQL도 자동 적용됐습니다.`
- `대시보드에서 성공 확인했습니다.` 단, 실제로 확인하지 않은 경우.

## 3. 사람이 해야 하는 일

아래 작업은 AI가 대신 완료했다고 가정하면 안 됩니다.

### Supabase SQL Editor 실행

DB 컬럼, 테이블, 인덱스, RPC, RLS 정책, trigger 변경이 있으면 사람이 Supabase SQL Editor에서 실행해야 합니다.

AI가 해야 할 일:

- SQL 파일 작성
- 적용해야 할 파일명 안내
- 실행 순서 안내
- 왜 SQL이 필요한지 설명
- 실행 후 확인할 화면 또는 쿼리 안내
- `docs/current-worklog.md`에 SQL 필요 사항 기록

사람이 해야 할 일:

- Supabase 대시보드 접속
- SQL Editor에서 SQL 실행
- 실행 결과 확인

### 비밀값과 외부 서비스 권한

다음은 사람이 설정해야 합니다.

- Supabase service role key
- Render/Vercel/GitHub token
- GitHub Secrets
- Render/Vercel 환경변수
- Solapi 실제 발송 관련 비밀값

AI는 비밀값을 출력하거나 commit하면 안 됩니다.

## 4. 배포가 막혔을 때 보고 기준

AI가 push 또는 운영 확인까지 진행하다가 막히면, 멈춘 지점을 정확히 보고해야 합니다.

예시:

- `npm run build` 실패: 실패 로그 요약과 수정 필요 파일 보고
- `npm run test:production` 실패: 실패 시나리오 번호와 원인 후보 보고
- `git push origin main` 실패: 인증/네트워크/충돌 여부 보고
- Vercel/Render 반영 지연: push hash와 운영 URL 확인 결과 보고
- SQL 필요: SQL 파일명과 사용자가 실행해야 할 순서 보고

## 5. 다음 세션에 붙여넣을 짧은 프롬프트

```text
academy-os 작업입니다.

AI가 할 수 있는 일은 AI가 끝까지 해주세요. 코드/문서 수정 후 사용자가 명시적으로 막지 않았다면 로컬 확인에서 멈추지 말고, npm run build, 필요 시 npm run test:production, docs/current-worklog.md 갱신, git commit, git push origin main까지 진행하세요. GitHub main push가 Vercel/Render 자동 배포 트리거입니다.

push 후 가능한 범위에서 운영 URL도 확인하세요.
- Frontend: https://academy-os-blue.vercel.app
- Backend health: https://koh-you-math-academy-os-api.onrender.com/health

단, Supabase SQL Editor 실행, GitHub/Vercel/Render/Supabase 비밀값 입력, 대시보드 권한이 필요한 수동 승인은 사람이 해야 합니다. SQL이 필요하면 AI는 SQL 파일명, 실행 순서, 적용 이유, 확인 방법을 초보자 기준으로 안내하고 docs/current-worklog.md에 남기세요.

최종 보고에는 수정 내용, 검증 결과, commit hash, push 완료 여부, 운영 URL 확인 여부, SQL Editor 작업 필요 여부를 반드시 포함하세요.
```
