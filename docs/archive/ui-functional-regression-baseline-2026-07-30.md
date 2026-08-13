# UI-9B 기능 회귀 기준선 — 2026-07-30

## 목표

UI-0~UI-9A가 표시 shell만 바꾸고 저장·발송·예약·출결·파일·외부 원천 동작을 유지했는지 전체 production fixture로 닫는다.

## 기존 실패 `90a` 판정

- 실패명: `90a lesson modal creates verified closure and optional linked makeup journals`
- 실제 구현: `saveLessonModalLessons`가 `/api/lessons/bulk`로 원 휴강과 선택한 연결 보충 수업일지를 함께 저장하고, 응답 원천이 Supabase인지 확인한 뒤 `/api/lessons` 재조회 snapshot까지 대조한다.
- 원인: 검사가 `postJsonWithTimeout`과 다음 줄의 정확한 공백을 LF 문자열 하나로 찾고 있었다. 작업 트리의 CRLF 줄바꿈에서는 같은 코드가 있어도 문자열이 일치하지 않았다.
- 조치: 줄바꿈·들여쓰기에 의존한 한 패턴을 `saveResult`, bulk endpoint, `expectedLessons` payload, Supabase source 확인의 의미 단위 패턴으로 나눴다.
- 영향: fixture만 보강했으며 runtime 기능 변경 없음. 수업 callback, 저장 payload, Supabase 재조회, 연결 보충 생성, 알림·출결·Solapi 동작은 바꾸지 않았다.

## AI 검수 기준

| 검사 | 기대 결과 |
| --- | --- |
| `npm run test:production` | 전체 통과 |
| `npm run build` | production build 통과 |
| `git diff --check` | whitespace 오류 없음 |
| runtime diff | 없음 |

실행 결과는 production 시나리오 `526/526` 전체 통과, Vite build `128 modules` 통과, `git diff --check` 오류 없음이다.

## 사람 검수

이 단위는 낡은 정적 계약만 바로잡으므로 필수 사람 gate가 없다. 휴강·연결 보충의 실제 저장은 UI 회귀 검수에 포함하지 않으며, 운영 데이터로 다시 검증할 필요가 생길 때 별도 저장 작업으로 시작한다.
