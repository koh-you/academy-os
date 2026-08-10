# Academy OS Testing Policy

업데이트: 2026-08-10

이 문서는 로컬 검증과 GitHub Production checks의 실행 기준을 정의한다. 테스트 수 자체보다 사용자 동작, 저장 계약, 외부 부작용 경계를 검증하는 것을 우선한다.

## 최상위 정책 · 작은 수정은 가깝고 빠르게 검증

1. 위험도는 제품 영역의 중요도가 아니라 **이번 diff가 변경한 실행 경계**로 판정한다.
2. 기존 API·DB·CAS·권한 계약을 바꾸지 않는 frontend 입력·상태·표시 수정은 중위험이다. 저장 화면이라는 이유만으로 고위험으로 올리지 않는다.
3. 저·중위험은 관련 fixture·전용 테스트·집중 browser/API·필요한 build만 실행한다. 전체 production과 전체 safe browser는 실행하지 않는다.
4. 진짜 고위험은 branch exact-head 원격 전체검사를 한 번 실행한다. 같은 SHA의 로컬·branch·main 전체검사를 중복하지 않는다.
5. main push 뒤에는 exact 배포 commit과 변경 기능 smoke를 확인한다. main 전체 CI는 백그라운드 회귀 monitor이며 저·중위험 완료를 막지 않는다.
6. 전체 회귀는 scheduled 일일 검사 또는 진짜 고위험 변경에서 수행한다. 실패한 경우에만 관련 commit을 좁히고 필요한 로컬 전체검사를 추가한다.

계속 유지하는 안전장치는 Worktree 격리, clean 확인, 시작 `origin/main` 불변, fast-forward only, force push 금지, 운영 side effect 사람 Gate, 저장 후 서버 재조회다.

## 검증 층

| 층 | 명령 | 용도 |
| --- | --- | --- |
| API contract fast | `npm run test:contract:versioned-write` | versioned write의 canonical/legacy payload와 verified response를 1초 안에 확인 |
| 도메인 fast | `npm run test:domain:<domain>` | 작업 중 가장 자주 실행하는 관련 동작 fixture. 목표 10초 이내 |
| 빠른 일반 검증 | `npm run check:fast` | runtime lint, 정적 production scenario, production build를 한 번에 확인 |
| 전체 production | `npm run test:production` | 전체 pure fixture와 정적 scenario를 직렬 안전망으로 확인 |
| 안전 브라우저 | `npm run test:browser-smoke` 또는 뒤에 관련 Playwright grep 인수 추가 | Worktree별 격리 포트와 가상 데이터로 핵심 UI 동선을 확인 |
| branch full CI | GitHub Production checks | 진짜 고위험 exact-head 전체검사를 한 번 실행 |
| main CI | GitHub Production checks | 백그라운드 일괄 회귀 monitor. 동일 SHA의 두 번째 완료 Gate로 사용하지 않음 |

`check:fast`는 도메인 테스트의 별칭이 아니다. 기존 의미인 `lint:runtime + scenario summary + build`를 유지한다.

API payload contract를 바꾸는 동안에는 관련 domain fixture와 함께 `test:contract:versioned-write`를 먼저 실행한다. 이 명령은 server 저장·재조회 동작을 대신하지 않으며 전체 production과 안전 브라우저 gate는 아래 고위험 기준을 그대로 따른다.

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
- 실행 코드가 함께 바뀌지 않았다면 lint·build·전체 production·배포 smoke 생략

### 일반 소규모 코드 변경

- 영향받은 runtime이면 `npm run lint:runtime`
- 관련 `npm run test:domain:<domain>` 및 변경 모듈 전용 테스트
- frontend bundle에 영향이 있으면 `npm run build`
- 핵심 UI를 바꿨다면 관련 안전 브라우저 smoke 추가
- 기존 저장 API를 사용하는 UI라면 focused smoke에서 API 재조회와 새로고침 지속성을 확인하되 전체 production은 생략

### 고위험 경계 변경

다음 중 이번 diff가 실제로 하나를 변경하면 branch exact-head 전체검사와 필요한 집중 browser/API를 실행한다.

- 서버 저장·재조회·CAS·충돌 복구
- 금액·횟수·출결·시험 결과 계산
- API 요청·응답 계약 또는 인증/session
- 알림 발송·예약·취소 등 외부 side effect 경계
- 여러 도메인에 걸친 상태 소유권 이동
- 원인을 특정하지 못한 회귀

고위험에서도 로컬 전체 production을 먼저 반복하지 않는다. 관련 전용 테스트로 빠르게 수정한 뒤 원격 branch 전체검사를 한 번 실행하며, 원격 실패 원인 규명이나 로컬/CI 환경 차이 확인이 필요할 때만 로컬 전체 production을 추가한다.

### PR 및 배포

- 저·중위험은 관련 로컬 검사와 focused smoke를 통과하면 branch full CI 없이 fast-forward main 통합할 수 있다.
- 진짜 고위험만 branch exact-head Production checks를 main 전 Gate로 사용한다.
- 같은 SHA가 fast-forward로 main에 반영되면 main 전체 CI를 두 번째 Gate로 기다리지 않는다. exact 배포 commit과 변경 기능 smoke를 확인한 뒤 완료하고 main CI는 백그라운드에서 감시한다.
- main CI 실패가 확인되면 즉시 원인을 좁혀 후속 수정 또는 최소 revert를 수행한다.

## 테스트 작성 원칙

- 새 파일 위치나 source string 존재보다 사용자 동작과 저장 계약을 검증한다.
- local draft, API/DB 원천, 파생 화면값, 외부 side effect를 구분한다.
- 포트·브라우저·공유 fixture 검사는 병렬화하지 않는다.
- 기본 browser smoke runner는 Worktree 경로별 가용 포트를 고르고 기존 preview를 재사용하지 않는다. `test:browser-smoke:direct`는 runner 자체를 진단할 때만 사용한다.
- 정적 scenario 811개는 당장 삭제하지 않는다. 관련 코드를 만질 때 동작 fixture로 점진 교체한다.
- 운영 데이터 쓰기, 실제 알림, 운영 SQL, 유료 호출은 검증에 사용하지 않는다.
