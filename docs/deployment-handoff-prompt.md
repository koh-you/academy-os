# Academy OS Deployment Handoff Prompt

다른 Codex/AI 세션을 시작할 때 아래 프롬프트를 그대로 붙여넣는다.

```text
이 프로젝트는 academy-os입니다.

반드시 먼저 아래 파일을 읽고 시작하세요.
- AGENTS.md
- docs/current-worklog.md
- docs/home-codex-setup.md
- docs/session-handoff-2026-06-20.md
- docs/deployment-handoff-prompt.md
- docs/ai-deployment-responsibility-2026-06-21.md

중요 원칙:
1. AI가 할 수 있는 일은 AI가 끝까지 합니다. 사용자가 명시적으로 막지 않았다면 로컬 수정/검증에서 멈추지 말고 commit과 push까지 진행하세요.
2. 사람이 해야 하는 일은 Supabase SQL Editor 실행, GitHub/Vercel/Render/Supabase 비밀값 입력, 대시보드 권한이 필요한 수동 승인뿐입니다.
3. 코드를 수정한 뒤에는 로컬 확인에서 끝내지 말고, 가능한 자동 배포 흐름까지 완료하세요.
4. GitHub main push 기준으로 Vercel/Render가 자동 배포되는 구조입니다.
5. 따라서 변경 완료 후 반드시 다음을 수행하세요.
   - npm run build
   - 운영 흐름에 영향이 있으면 npm run test:production
   - git status 확인
   - 변경 파일 stage
   - 의미 있는 commit 생성
   - git push origin main
6. push가 성공해야 GitHub/Vercel/Render 자동 배포 흐름에 올라갑니다.
7. push 후 가능한 범위에서 운영 URL을 확인하세요.
   - Frontend: https://academy-os-blue.vercel.app
   - Backend health: https://koh-you-math-academy-os-api.onrender.com/health
8. Vercel/Render 대시보드 권한이나 로그 접근 권한이 없으면 “대시보드 내부 배포 성공까지 확인했다”고 말하지 마세요. 대신 “origin/main push 완료, 자동 배포 트리거 완료, 운영 URL 응답 확인/미확인”처럼 정확히 보고하세요.
9. 작업 결과 보고에는 다음을 포함하세요.
   - 무엇을 수정했는지
   - 어떤 검증을 통과했는지
   - commit hash
   - push 완료 여부
   - 운영 URL 확인 여부
   - SQL Editor 작업 필요 여부

Supabase SQL Editor 원칙:
1. Supabase는 이 웹앱의 운영 데이터베이스입니다.
2. GitHub main push가 Vercel/Render 배포는 유발하지만, Supabase SQL migration 자동 적용은 보장되지 않습니다.
3. DB 컬럼/테이블/인덱스/RPC/정책 변경이 필요하면, AI가 몰래 처리했다고 가정하지 마세요.
4. SQL이 필요한 경우:
   - 어떤 기능 때문에 SQL이 필요한지 설명하세요.
   - 적용해야 할 SQL 파일명을 정확히 말하세요.
   - 적용 순서를 초보자 기준으로 안내하세요.
   - Supabase SQL Editor에서 실행해야 한다고 명시하세요.
   - docs/current-worklog.md에도 SQL 필요 사항을 남기세요.
5. SQL이 필요 없는 경우에도 “SQL Editor 작업 필요 없음”이라고 명확히 말하세요.
6. 비밀키, .env 값, Supabase service role key, Render/Vercel/GitHub 토큰은 절대 출력하거나 commit하지 마세요.

SQL 자동화 가능 여부:
1. SQL Editor 수동 작업도 기술적으로는 자동화할 수 있습니다.
2. 일반적인 방식은 GitHub Actions에서 Supabase CLI를 설치하고, GitHub Secrets에 저장한 `SUPABASE_ACCESS_TOKEN`, `SUPABASE_PROJECT_REF`, `SUPABASE_DB_PASSWORD` 등을 사용해 migration을 적용하는 구조입니다.
3. 다만 이 repo에는 현재 `.github` workflow나 Supabase CLI 자동 migration 설정이 없으므로, “이미 자동화되어 있다”고 말하면 안 됩니다.
4. 자동화를 만들려면 먼저 다음을 확인해야 합니다.
   - 기존 운영 DB와 `supabase/*.sql` 파일의 적용 이력이 일치하는지
   - 이미 수동 적용한 SQL을 다시 실행해도 안전한지
   - 실패 시 롤백/복구 방법이 있는지
   - GitHub Secrets를 누가 설정할지
5. 자동화 전까지는 SQL이 필요한 변경마다 사람이 Supabase SQL Editor에서 적용하는 방식으로 안내하세요.
6. 사용자가 명시적으로 SQL 자동화를 요청하면, 먼저 구현하지 말고 위험/필요 secrets/권한/롤백 계획을 설명한 뒤 진행하세요.

이 프로젝트에서 특히 주의할 영역:
1. 수업일지 - 보충관리/결석보강
   - 숙제보충은 수업일지의 숙제 완료 여부와 보충관리 목록이 일치해야 합니다.
   - 완료 숙제는 보충관리 대상이 아니어야 합니다.
   - 미완료/50%/80%/미검사 숙제만 보충관리 후보가 되어야 합니다.
   - 보충 통과는 취소/복귀 가능해야 합니다.
   - 보충 메모와 알림톡 초안, 수업일지 상세가 같은 데이터를 봐야 합니다.

2. 시험관리 - 학사일정 - 수업일지
   - 시험기간과 수학시험날짜는 시험관리에서 입력하는 것이 원칙입니다.
   - 방학/개학/모의고사/학교행사 등 단순 캘린더 이벤트는 학사일정에서 입력합니다.
   - 시험관리 데이터는 학사일정에 표시될 수 있지만, 시험 관련 데이터 원천은 시험관리입니다.
   - 자동생성 수업과 수동수정 수업이 중복 저장되지 않게 generatedKey/manualOverrideKeys/suppressedKeys 흐름을 유지하세요.
   - 일요시험보강 학교별 블록은 실제 lessons를 중복 생성하지 않고 app_state의 sundayMakeupBlocks에서 파생 표시합니다.

작업 시작 전 확인:
- git status --short --branch
- 최근 작업/미해결 이슈 확인
- SQL 필요 여부 판단

작업 종료 전 확인:
- npm run build
- 필요 시 npm run test:production
- docs/current-worklog.md 갱신
- git add / commit / push origin main
- 최종 응답에 SQL Editor 필요 여부 명시
```

## 짧은 버전

```text
academy-os 작업입니다. AGENTS.md, docs/current-worklog.md, docs/home-codex-setup.md, docs/session-handoff-2026-06-20.md, docs/ai-deployment-responsibility-2026-06-21.md를 먼저 읽으세요.

AI가 할 수 있는 일은 AI가 끝까지 해주세요. 코드 수정 후에는 반드시 npm run build, 필요 시 npm run test:production을 실행하고, git commit 후 git push origin main까지 완료하세요. GitHub main push가 Vercel/Render 자동 배포 트리거입니다. push 후 가능한 범위에서 운영 URL도 확인하세요.

Supabase SQL migration은 자동 적용된다고 가정하지 마세요. DB 컬럼/테이블 변경이 필요하면 SQL Editor에서 사람이 실행해야 할 파일명과 순서를 초보자 기준으로 안내하고 docs/current-worklog.md에도 남기세요. SQL이 필요 없으면 “SQL Editor 작업 필요 없음”이라고 명확히 말하세요.

비밀키와 .env 값은 절대 출력하거나 commit하지 마세요.
```
