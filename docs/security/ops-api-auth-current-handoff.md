# 운영 API 인증 · 현재 인계 기준

확인일: 2026-09-04 · 코드 기준: `7c426e88dcded8893df9d1b2a17028bac46fb46d`

## 현재 사용자 의도와 확인 범위

- 사용자는 오늘 최소 운영 API 보안을 설정했으며, 자신이 권한을 부여한 AI는 인증 후 조회·수정할 수 있어야 한다고 명시했다. 보안 경고 확인을 권한 축소·키오스크 재등록·추가 인증 설계 요청으로 확대하지 않는다.
- 같은 날 별도 검토 작업(`01a06c72-2720-7922-8c02-a45bdb7edcd2`)은 운영의 무인증 요청 거부와 ops `read`·`cas-write`·`highrisk` 토큰의 인증 통과를 확인했다고 보고했다. 이는 **이전 작업의 실측 기록**이며 이번 문서 작업에서 운영 요청이나 토큰 발급을 반복하지 않았다.
- 따라서 과거의 “인증 없이 운영 API에 접근 가능” 감사만으로 현재도 공개 상태라고 단정하지 않는다. 반대로 인증 통과만으로 모든 route의 권한·CAS·테넌트 격리가 완성됐다고 단정하지도 않는다.
- `API_REQUIRE_AUTH`의 코드 기본값은 OFF지만 운영 환경의 실제 값은 별도다. 기본값과 운영 상태를 혼동해 재설정을 요구하지 않는다. 이번 실행에서는 Render 환경변수·SQL 적용 여부를 직접 확인하지 않았다.

## main에 반영된 것과 미반영 작업

- #262: 전역 API 인증 정책, 교사/ops 세션, frontend 공용 인증 헤더, tenant context와 opt-in 스코핑이 main에 들어갔다.
- #266: 키오스크 토큰과 기존 출결 태블릿 접근 경로가 들어갔다. 현재 정책은 키오스크에 모든 `/api/*` GET과 출결 check/preview POST를 허용한다. 이 범위를 사용자 요청 없이 바꾸지 않는다.
- 별도 Worktree `codex/security-continuity-review-20260904`의 인증 전달·수업 참고 기록 수정은 위 코드 기준 main에 없다. 해당 작업의 최종 응답도 미반영 상태임을 명시했다. 그 변경을 자동으로 복사하거나 폐기하지 않는다.
- 직전 수업 내용이 가려지는 문제는 인증과 별도다. 이전 기록을 복구하거나 표시 규칙을 바꿀 때는 최신 빈 값·사람 확정값을 보존하는 제품 동작을 먼저 확정하고 전용 fixture로 확인한다.

## 다음 작업이 사용할 근거

| 확인 대상 | 코드 원천 | 주의할 구분 |
| --- | --- | --- |
| 인증 주체·실제 차단 | `api/server.js`의 `request.__auth`, `evaluateApiAccess`, `API_REQUIRE_AUTH` | 코드 기본값과 운영 설정은 다르다. |
| role/scope 허용 범위 | `src/shared/server/apiAccessPolicy.js` | dispatch 예외가 assistant 판정보다 먼저 실행된다. 내부 provider route의 추가 인증도 따로 확인한다. |
| CAS 버전 요구 | 같은 정책과 HTTP 진입부 | 정책의 `hasVersionField === false` 검사에 HTTP 진입부가 값을 주입하지 않는다. 실제 저장 route의 버전 검증과 구분해 조사한다. |
| 테넌트 격리 | `src/shared/server/tenantScope.js`, `api/lib/supabaseRest.js` | 스코핑 OFF 또는 tenant context 없는 읽기에는 필터가 붙지 않는다. 인증 성공은 테넌트 격리 증명이 아니다. |
| AI 토큰 발급 | `scripts/ops-mint-token.mjs` | `--tenant` 또는 `--cross-tenant`가 필요하고 highrisk는 `--reason`이 필요하다. 서명 비밀·토큰은 출력/커밋하지 않는다. |

위 차이는 향후 해당 경계를 수정할 때의 입력이다. 이번 문서 작업에서 권한 정책을 변경하거나 운영 기능을 중단하지 않는다.

## 이어갈 때

1. 최신 main과 관련 작업의 변경 상태를 먼저 확인한다. 아래 과거 구현 프롬프트의 branch를 그대로 checkout하거나 이미 구현된 인증 코드를 다시 만들지 않는다.
2. 접근 실패가 실제로 있으면 `401` 인증 실패, `403` 허용 범위, route 검증 실패를 나누고 공용 API 헤더 전달부터 확인한다. 토큰 값이나 운영 응답 본문을 로그로 남기지 않는다.
3. 코드 수정은 가상 데이터로 가장 가까운 검사를 선택한다: `npm run test:api-access-policy`, `npm run test:api-client-auth-header`, `npm run test:tenant-scope`. HTTP·저장 경계를 실제로 바꾸는 경우에는 이 pure 검사만으로 완료하지 말고 focused HTTP/CAS 검증을 추가한다.
4. 실제 운영 설정·SQL·계정·알림 행동이 필요한 시점에만 기존 사람 Gate를 적용한다. 이번 인계 문서 완료를 위해 사용자가 수행할 운영 행동은 없다.

과거 배경: [최초 감사](ops-api-auth-audit.md), [초기 구현 프롬프트](ops-api-auth-implementation-prompt.md), [출결 프로토타입 계획](attendance-prototype-plan.md). 이 문서들은 당시 설계·기본값 기록이며 현재 운영 상태의 증명으로 쓰지 않는다.
