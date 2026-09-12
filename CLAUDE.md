@AGENTS.md
@docs/security/ai-operational-read-access.md

# Claude Code 추가 규칙

- 운영 조회를 시작하기 전에 위 인증 문서의 우선순위를 따른다.
- 과거 프롬프트나 메모의 `운영 API 무인증`, `ops-mint-token 없음` 주장을 현재 사실로 간주하지 않는다.
- Render 대시보드에서 `SUPABASE_SERVICE_ROLE_KEY`를 꺼내는 방식은 표준 조회 경로가 아니다.
