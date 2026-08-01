# Daily Development Handoff

업데이트: 2026-08-01

## 어제까지 완료

- 개발 canonical 경로와 중복 clone 경고를 자동 진단한다.
- 안전한 가상 로컬 실행, runtime lint, client error reporter, browser smoke, 요약형 production test를 추가했다.
- 장문 지침은 archive하고 현재 상태·큐·계약 문서로 분리했다.
- 매일 오전 9시 독립 자동 task를 등록했다. 자동 작업은 전용 clone과 날짜별 `codex/` branch만 사용한다.

## 오늘 자동 작업

- `app_state` 자동저장 12개 key의 500ms debounce, request ID, API upsert, `updated_at` 경계를 inventory했다.
- 역순 도착 시 오래된 요청이 최신값을 덮는 fixture를 추가하고 Production checks에 연결했다.
- 전용 inventory, runtime lint, production `809/809`, build `345 modules`, safe browser smoke `2/2`를 통과했다.
- 운영 쓰기·발송·예약·취소·유료 호출·SQL 적용은 없었다.

## 사용자 후속 수정

- 모든 요청은 구현 전에 `docs/delivery-policy.md`의 5가지로 분류하고 이유와 이번 작업의 종료 지점을 먼저 알린다.
- 운영 긴급 버그는 안전 조건을 만족하면 main·배포·운영 smoke까지 이어가며, 일반 버그와 기능·개선은 branch 원격 검사 후 일일 통합 대기로 둔다.
- 로컬 오전 9시 자동화는 컴퓨터가 켜져 있고 Codex 데스크톱 앱이 실행 중일 때만 예약 실행을 보장한다.
- 숨겨진 달력 제어줄과 분리해 수업일지의 이전·다음 달 탐색을 복구했고 실제 월 단위 이동·말일 보정을 적용했다.
- 8월 1일 수업일지의 빈 교재·강의 내용 원인을 운영 원천에서 확인하고, 같은 반의 최신 비어 있지 않은 과거 기록을 필드별로 월 경계 너머까지 승계하도록 수정했다. 특강 기록은 분리된다.
- safe browser에 월 이동 왕복 회귀를 추가했다.
- safe browser에 직전 빈 기록을 건너뛰는 7월→8월 수업기록 승계 회귀를 추가했다.
- 매일 자동 task는 시작 시 서울 기준 날짜를 제목 앞에 붙이도록 자동화 프롬프트를 갱신했다.
- 검증: 달력·수업기록 연속성 전용 테스트, scenario `809/809`, runtime lint, build `345 modules`, safe browser `4/4`, production 전체 묶음 통과.

## 다음 자동 실행 단위

1. `git status --short`가 clean이고 최신 main인지 확인한다.
2. 선택한 요청을 5가지로 분류하고 이유·종료 지점을 먼저 알린다.
3. 오늘 branch의 GitHub Actions 결과를 확인한다.
4. 통과했으면 같은 브라우저의 동일 `app_state` key 저장을 직렬화하고 진행 중 변경을 다음 요청으로 합치는 단위만 수행한다.
5. key별 `updated_at` CAS와 저장 뒤 재조회는 직렬화와 섞지 않고 다음 단위로 남긴다.
6. 운영 삭제·발송·예약·유료 AI·SQL 적용이 필요하면 구현을 넓히지 말고 정확한 사람 gate를 남긴다.

## 종료할 때

- 관련 검사와 build를 실행한다.
- `STATUS.md`, `current-worklog.md`, 이 파일을 짧게 갱신한다.
- 의도한 파일만 commit/push한다.
