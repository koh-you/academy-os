# Academy OS Testing Policy

업데이트: 2026-08-02

이 문서는 로컬 검증과 GitHub Production checks의 실행 기준을 정의한다. 테스트 수 자체보다 사용자 동작, 저장 계약, 외부 부작용 경계를 검증하는 것을 우선한다.

## 검증 층

| 층 | 명령 | 용도 |
| --- | --- | --- |
| 도메인 fast | `npm run test:domain:<domain>` | 작업 중 가장 자주 실행하는 관련 동작 fixture. 목표 10초 이내 |
| 빠른 일반 검증 | `npm run check:fast` | runtime lint, 정적 production scenario, production build를 한 번에 확인 |
| 전체 production | `npm run test:production` | 전체 pure fixture와 정적 scenario를 직렬 안전망으로 확인 |
| 안전 브라우저 | `npm run test:browser-smoke` 또는 뒤에 관련 Playwright grep 인수 추가 | Worktree별 격리 포트와 가상 데이터로 핵심 UI 동선을 확인 |
| branch/main CI | GitHub Production checks | exact-head와 main의 통합 상태를 다시 확인 |

`check:fast`는 도메인 테스트의 별칭이 아니다. 기존 의미인 `lint:runtime + scenario summary + build`를 유지한다.

## 도메인 fast 명령

```powershell
npm run test:domain:lesson
npm run test:domain:supplement
npm run test:domain:student
npm run test:domain:notification
npm run test:domain:settlement
```

`scripts/run-domain-tests.mjs`는 각 도메인의 대표 pure fixture를 npm 중첩 실행 없이 Node child process로 직접 실행한다. 서로 독립적인 fixture만 최대 4개씩 병렬 실행하며 포트, 브라우저, 공유 fixture를 사용하는 검사는 포함하지 않는다. 여러 도메인을 한 번에 확인할 때는 `npm run test:domain:all`을 사용한다.

도메인 묶음은 모든 회귀를 대신하지 않는다. 작업 중 짧은 피드백을 제공하는 대표 계약 집합이며, 변경한 모듈에 더 가까운 전용 테스트가 있으면 함께 실행한다.

## 변경별 기본 검증

### 문서 또는 비실행 설정만 변경

- 관련 문서 링크와 명령 유효성 확인
- 실행 코드가 함께 바뀌지 않았다면 전체 production은 생략 가능

### 일반 소규모 코드 변경

- `npm run lint:runtime`
- 관련 `npm run test:domain:<domain>` 및 변경 모듈 전용 테스트
- `npm run build`
- 핵심 UI를 바꿨다면 관련 안전 브라우저 smoke 추가

### 고위험 경계 변경

다음 중 하나면 로컬 `npm run test:production`과 필요한 안전 브라우저 smoke를 실행한다.

- 서버 저장·재조회·CAS·충돌 복구
- 금액·횟수·출결·시험 결과 계산
- API 요청·응답 계약 또는 인증/session
- 알림 발송·예약·취소 등 외부 side effect 경계
- 여러 도메인에 걸친 상태 소유권 이동
- 원인을 특정하지 못한 회귀

### PR 및 배포

- branch exact-head와 main Production checks는 전체 안전망을 유지한다.
- CI는 domain fast runner의 파일·그룹 계약도 별도 확인한다.
- 단순 변경이 관련 fast·build를 통과했고 branch CI와 main CI가 같은 전체 production을 실행한다면, 로컬 전체 production을 형식적으로 반복하지 않아도 된다.
- CI 실패나 실행 환경 차이가 의심되면 로컬 전체 production으로 다시 좁힌다.

## 테스트 작성 원칙

- 새 파일 위치나 source string 존재보다 사용자 동작과 저장 계약을 검증한다.
- local draft, API/DB 원천, 파생 화면값, 외부 side effect를 구분한다.
- 포트·브라우저·공유 fixture 검사는 병렬화하지 않는다.
- 기본 browser smoke runner는 Worktree 경로별 가용 포트를 고르고 기존 preview를 재사용하지 않는다. `test:browser-smoke:direct`는 runner 자체를 진단할 때만 사용한다.
- 정적 scenario 811개는 당장 삭제하지 않는다. 관련 코드를 만질 때 동작 fixture로 점진 교체한다.
- 운영 데이터 쓰기, 실제 알림, 운영 SQL, 유료 호출은 검증에 사용하지 않는다.
