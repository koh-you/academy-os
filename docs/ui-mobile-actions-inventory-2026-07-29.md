# UI-7E 모바일 action·접근성 inventory — 2026-07-29

## 범위

JSX 48개의 `button`, `a`, `role="button"`과 CSS의 focus·touch height를 읽기 전용으로 대조했다. callback, disabled, submit, route 이동, 저장·발송·삭제·출결·AI·Storage side effect는 실행하거나 변경하지 않았다.

## 수량

| 항목 | 수량 |
| --- | ---: |
| `<button>` | 445 |
| `<a>` | 5 |
| `role="button"` | 1 |
| 실제 icon/x/화살표만 있는 button | 17 |
| callback·submit·disabled가 모두 없는 no-op button | 12 |
| CSS의 44px 미만 `min-height` 선언 | 119 |
| `:focus-visible` 규칙 | 25 |

44px 미만 선언은 30px 3개, 32px 13개, 34px 23개, 36px 16개, 38px 28개, 40px 14개, 42px 22개다. input/card도 포함하므로 선언을 개별 삭제하지 않고 모바일 interactive target에만 최종 규칙을 적용해야 한다.

## icon action 분류

### callback이 있는 action — 이름 보강 대상

- 월 이동 이전/다음
- 수업일지 뒤로
- 출결 화면 닫기·키패드 한 글자 지우기
- 보충 완료 feedback 닫기
- 보충 알림 제어 닫기
- 수학 시험 항목 삭제
- 공통 Modal 닫기

파일 보기 button 2개는 정적 구분자 `·` 외에 실제 파일명과 상태를 expression으로 렌더하므로 icon-only가 아니다.

### callback이 없는 no-op icon — 유효 action처럼 이름을 붙이면 안 됨

- 구형 로그인 닫기 2개
- 구형 달력 이전/다음 4개
- 학생 포털 말풍선 1개

### 그 밖의 callback 없는 text button

- `+ 반 추가`
- 오답 교재의 `전부 맞음`, `오답수정`, `기록`
- 학생 마이페이지 `비밀번호 변경`

이 12개는 UI-7E에서 임의 기능을 만들지 않는다. 실제 callback을 연결할 별도 기능 계약이 없다면 UI-7E-4에서 숨기거나 준비 중 비활성으로 명확히 정리한다.

## 연쇄 구현

1. `UI-7E-2`: 실제 callback이 있는 icon action에 업무 이름을 제공한다. callback·disabled는 보존한다.
2. `UI-7E-3`: 640px 이하의 button/link/role button을 44px touch target으로 맞추고 focus-visible을 보존한다.
3. `UI-7E-4`: no-op 12개를 소유 화면별로 재확인하고, 기능을 추측하지 않은 채 숨김 또는 명시적 비활성으로 정리한다.
4. `UI-7E-5`: 대표 action의 callback·disabled·submit·focus/touch 회귀를 닫는다.

## 진행 갱신

- UI-7E-2: callback이 있는 icon action에 이전/다음 달, 수업 목록 복귀, 출결 닫기, 한 자리 지우기, 완료 알림 닫기, 알림 제어 닫기, 수학시험 삭제, 공통 창 닫기 이름을 제공했다.
- callback 없는 no-op icon에는 유효 action처럼 들리는 이름을 붙이지 않았다.
- UI-7E-3: 640px 이하의 `button`, `a[href]`, `[role=button]`에 44px 공통 최소 높이를 적용하고 기존 focus-visible outline을 보존했다.
- 30~42px 개별 규칙은 desktop 밀도를 위해 삭제하지 않았으며, 모바일 최종 규칙만 우선 적용한다.
- UI-7E-4: callback·submit·disabled가 모두 없던 12개 action과 연결되지 않은 비밀번호 입력을 제거했다. 기능을 추측한 callback은 추가하지 않았다.
- 현재 운영 callback이 있는 월 이동·수업 등록·날짜/수업 선택·로그아웃은 유지했다.
- UI-7E-5: JSX 49개·button 433개를 다시 AST 검사했다. callback 425개, disabled guard 175개, submit 7개이며 disconnected button은 0개다.
- action 이름, 대표 callback/busy guard, 전역 focus-visible, 모바일 44px를 하나의 회귀계약으로 닫았다.

## 사람 검수

이름·focus·touch·비활성 표시만 확인하면 되며 실제 side effect를 실행할 필요가 없다. 각 구현 뒤 모바일/키보드 절차를 누적하고 다음 UI 단위를 계속한다.
