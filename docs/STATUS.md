# Academy OS Current Status

업데이트: 2026-08-01

## 현재 기준

- canonical repo: `C:\Dev\academy-os`, `main`, `origin/main`
- 최신 commit은 `git log -1 --oneline`을 source of truth로 사용한다.
- UI 통일 UI-0~UI-9와 기존 안전범위 App 리팩터링은 main 통합 완료다.
- 퇴원생 결석보강 `보강만 취소`, 수업일지 끝 공백 입력, 보충 상세 null 오류는 수정·운영 확인 완료다.
- 수업일지 달력은 숨겨진 제어줄과 분리된 이전·다음 달 탐색줄을 다시 표시하며 실제 월 단위로 이동한다.
- 수업일지의 교재·강의 내용은 같은 반 과거 기록을 역순으로 확인해 필드별 최신 비어 있지 않은 값을 월 경계 너머에서도 이어받으며, 특강 기록은 정규반에 섞지 않는다.
- 전역 사람 gate는 0건이다.

## 개발환경 상태

- Node 24 기준, `npm ci` 사용.
- `npm run doctor`가 경로·Git·Node·중복 clone을 점검한다.
- VS Code F5는 운영 데이터에 연결하지 않는 안전한 가상 환경을 연다.
- ESLint runtime 검사, 간결한 scenario 요약, client runtime error reporter, Playwright browser smoke가 있다.
- GitHub Actions는 lint, production test, build, browser smoke를 실행하는 것이 목표다.
- `app_state` 자동저장 12개 key의 요청 역전·CAS/재조회 부재를 재현하는 inventory 검사가 Production checks에 연결됐다.

## 폴더 상태

- `C:\Dev\academy-os-refactor`는 main 통합 확인 후 `C:\Dev\_archive\academy-os-refactor-integrated-b0712525-2026-07-31`로 이동했다.
- `C:\Users\PC\Documents\academy os`는 Codex에 등록된 오전 9시 자동 작업 전용 clone으로 유지한다. 사람은 이 폴더를 열거나 수정하지 않고 `C:\Dev\academy-os`만 사용한다.
- 시험분석 독립 작업은 `C:\Dev\academy-os-exam-analysis`에 남긴다.
- 사진 일기장 프로젝트는 Academy OS와 완전히 별도다.

## 다음 우선순위

1. `app_state` 동일 key 저장을 브라우저 안에서 직렬화하고 진행 중 변경을 다음 요청으로 합친다.
2. key별 `updated_at` CAS와 저장 뒤 대상 key 재조회는 별도 단위로 이어간다.
3. 고위험 App/API 분리는 새 inventory와 자동 회귀 범위를 먼저 만든 뒤 진행한다.

## 자동 작업

- 매일 오전 9시에 독립 task가 열린다.
- 자동 task 제목은 실행 시작 시 서울 기준 `YYYY-MM-DD Academy OS 매일 개발 이어가기`로 바꾼다.
- 로컬 clone 기반 자동화이므로 예약 시각에 컴퓨터가 켜져 있고 Codex 데스크톱 앱이 실행 중이어야 한다. 완전 종료 중 실행과 재부팅 후 누락 실행은 보장하지 않는다.
- 모든 요청은 `docs/delivery-policy.md`의 5가지로 먼저 분류하고 이유·종료 지점을 알린다.
- 일반 버그와 기능·개선은 branch push·GitHub 검사 후 일일 main 통합을 기다린다.
- 사람 Gate가 없는 운영 긴급 버그는 원격 main 불변, 정확한 commit 검사 통과, fast-forward를 확인한 경우에만 main·배포·운영 smoke까지 이어간다.
- 운영 삭제·발송·예약·취소·유료 호출·SQL 적용·로그인/관리자 승인은 사람 Gate 없이 실행하지 않는다.

## 빠른 확인

```powershell
npm run doctor
npm run check:fast
npm run test:browser-smoke
```

운영 동작 변경은 추가로 `npm run test:production`을 실행한다.
