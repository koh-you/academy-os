# Academy OS Engineering Contracts

이 문서는 관련 기능을 건드릴 때만 읽는 상세 계약이다.

## 저장 계약

- 서버에 남아야 하는 값은 localStorage만 사용하지 않는다.
- 저장 전 직접 원천, 파생 소비 원천, 외부 side effect, 재조회 범위를 정한다.
- 완료 상태는 API 성공과 필요한 Supabase 재조회·snapshot 대조 뒤에만 표시한다.
- 일부 단계만 성공하면 전체 성공으로 숨기지 않고 단계별 결과와 재시도 방법을 보여준다.
- 전역 `app_state` snapshot보다 변경 key별 dirty 저장, debounce, version/updatedAt 충돌 방지를 우선한다.

## 편집·AI 계약

- `AI/template seed -> local draft -> human save -> persisted human/final value` 순서다.
- 사용자가 입력을 시작한 뒤 렌더 계산, normalize, AI 재생성이 값을 덮어쓰지 않는다.
- 입력값에 `trim()`한 파생값을 직접 연결해 공백·줄바꿈·커서를 깨뜨리지 않는다.
- AI 재생성은 빈 값이나 명시적 재생성/초기화와 사용자 동의가 있을 때만 허용한다.

## 위험 행동 계약

- 저장, 삭제, 업로드, AI 실행, export, 알림 발송/예약은 현재 영역에 진행·성공·실패 상태를 둔다.
- 알림 저장과 실제 발송/예약/취소는 분리한다.
- 대량 삭제·운영 데이터 변경·유료 호출은 대상과 영향 범위를 재조회한 뒤 사람 gate를 연다.
- 운영 화면 증상은 로컬 코드만 믿지 않고 배포 commit·bundle·cache 상태를 함께 확인한다.

## 시험분석 계약

- v2 흐름은 `PDF 업로드 -> 문항 수 후보 -> 사람 확정 -> 1~N 행 고정 -> AI 행 채움 -> 누락 검수 -> 사람 최종 확정`이다.
- 원본 row, 추출값, AI 후보, local draft, 사람 저장본, 최종 산출물을 구분한다.
- AI가 문항 수·행 개수·문항 사실을 확정하거나 사람 저장본을 덮어쓰지 않는다.
- 과금 호출과 테스트 데이터 삭제는 별도 사람 gate다.

## 리팩터링 계약

- `동작 보존 inventory -> 한 의미 단위 분리 -> 전용 검사 -> 전체 회귀` 순서다.
- 순수 helper/component를 먼저 분리하고 인증, persistence, 출결 polling, notification reconcile, Solapi는 별도 고위험 단위로 다룬다.
- 문자열이 특정 파일에 존재하는지만 검사하는 테스트는 모듈 분리를 막지 않도록 사용자 동작·export 계약 중심으로 바꾼다.
