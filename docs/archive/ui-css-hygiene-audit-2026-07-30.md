# UI-9C CSS 중복·미사용 전수조사 — 2026-07-30

## 범위와 안전선

- `src` 아래 CSS 13개 파일의 모든 rule과 at-rule context를 PostCSS로 읽었다.
- 동일 media context 안에서 selector 문자열이 완전히 같은 규칙만 중복으로 판정했다.
- 미사용 후보는 JSX·JS·HTML의 단순 문자열뿐 아니라 동적으로 만들어지는 상태 class가 많으므로 일괄 삭제하지 않는다.
- callback, DOM 구조, 저장·발송·예약·출결·파일·Supabase/app_state·notification_jobs·Solapi는 바꾸지 않는다.

## 조사 결과

| 항목 | 변경 전 | 변경 후 | 처리 |
| --- | ---: | ---: | --- |
| CSS 파일 | 13 | 13 | 유지 |
| 같은 context의 완전 중복 selector | 8 | 0 | 계산 결과가 같도록 병합 |
| 전체 rule | 3,424 | 3,409 | 중복 병합·폐기 UI 제거 |
| 단순 문자열 미사용 후보 | 241 | 일괄 삭제 안 함 | 동적 상태 class 오탐 보호 |
| 확정 폐기 selector | 2 | 0 | 특강 신청자 매칭 UI 제거 이력과 대조 |

## 안전하게 정리한 항목

- `.examPrepEmptyState`: 두 규칙의 최종 cascade를 한 규칙으로 합쳤다.
- `.commentOpenButton`, `.commentOpenButton.filled`: 앞·뒤 규칙의 최종 계산값을 뒤 규칙에 모았다.
- `.linkButton`: 뒤 규칙에 이미 포함된 `text-decoration` 전용 중복 규칙을 제거했다.
- `.trashButton`: 세 규칙의 최종 border/radius/color/padding을 한 규칙으로 합쳤다.
- `.testProgressRow`: 뒤에서 덮어쓰던 `min-width: max-content`를 본 규칙에 합쳤다.
- `.specialLectureMatchGrid`, `.specialLectureMatchCard`와 하위 규칙: 실제 JSX·JS·HTML에서 0건이고 신청자 원천/매칭 카드 UI가 이미 숨김·제거된 계약과 일치해 제거했다.

## 자동 회귀

`scripts/test-ui-css-hygiene.cjs`는 모든 CSS를 다시 parse해 같은 context의 완전 중복 selector가 0인지, 확정 폐기 selector 2종이 CSS와 runtime source 어디에도 돌아오지 않았는지 확인한다. `npm run test:ui-css-hygiene`를 전체 `npm run test:production`에 포함했다.

## 사람 검수

표시 결과를 의도적으로 바꾸지 않은 cascade 동등 정리라 필수 사람 gate는 없다. UI-9A에 누적한 실제 desktop/iPhone 일괄 시각 검수가 이 단위의 비차단 확인도 함께 담당한다.
