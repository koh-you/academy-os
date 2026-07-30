# UI-7D 모바일 form·접근성 inventory — 2026-07-29

## 범위와 방법

`src/app`, `src/domains`, `src/shared`의 JSX 48개를 AST로 읽어 `input`, `select`, `textarea`를 전수 조사했다. 다음 중 하나가 있으면 접근 가능한 이름이 있는 control로 분류했다.

- control을 감싸는 `<label>`
- `label[htmlFor]`와 정적 `id` 연결
- `aria-label` 또는 `aria-labelledby`
- `type="hidden"`은 사용자 control에서 제외

저장 callback, local draft, validation, API와 Supabase/app_state·`notification_jobs`·Solapi·수업·AI·출결 원천은 읽거나 실행하지 않았다.

## 수량

| 항목 | 수량 |
| --- | ---: |
| 전체 form control | 378 |
| 접근 가능한 이름 감지 | 273 |
| 이름 미지정 | 105 |
| `aria-describedby` 사용 | 0 |
| `aria-invalid` 사용 | 0 |
| `role="alert"` 사용 | 8 |

이름 미지정 105개의 소유 파일은 다음과 같다.

| 파일 | 전체 control | 이름 미지정 |
| --- | ---: | ---: |
| `src/app/App.jsx` | 197 | 53 |
| `src/domains/students/StudentManager.jsx` | 62 | 41 |
| `src/domains/settlements/MonthlySettlementPanel.jsx` | 6 | 5 |
| `src/domains/tests/TestManagerPanels.jsx` | 12 | 3 |
| `src/domains/settlements/SpecialLectureSettlementPanel.jsx` | 4 | 2 |
| `src/domains/portals/StudentQuestionPanel.jsx` | 1 | 1 |

그 밖의 특강관리, 학사일정, 학생 시험 후 제출, 특강 신청, 학생 마이페이지, 시험분석 프롬프트, 공통 검색 control 96개는 현재 기준에서 모두 이름이 감지됐다.

## 모바일 크기 현황

- `body`는 16px이고 form control은 전역 `font: inherit`를 사용한다.
- control을 감싼 label·toolbar가 12~14px인 화면에서는 input/select/textarea도 그 크기를 상속할 수 있어 iOS Safari의 focus 확대 조건이 된다.
- 공통 SearchField·FilterBar는 높이 44px를 갖지만 전체 form control을 보장하는 모바일 규칙은 없다.
- 날짜·시간·숫자·일반 input과 select 중 화면별 작은 control이 남아 있다. checkbox/radio/file은 크기·행동이 달라 일반 text control과 분리해야 한다.

## 연쇄 구현 단위

1. `UI-7D-2`: 640px 이하의 text/date/time/number/tel/password/search input, select, textarea에 최소 16px 글꼴을 적용하고 한 줄 control은 최소 44px로 맞춘다. checkbox/radio/file/hidden은 제외한다.
2. `UI-7D-3`: `App.jsx`의 이름 미지정 53개를 작업 흐름별로 구분해 명시적인 `aria-label` 또는 보이는 label을 제공한다. callback·value·disabled·placeholder는 유지한다.
3. `UI-7D-4`: 학생관리 41개와 정산·테스트·학생 질문 11개를 같은 방식으로 닫는다. 학생별 표 control은 학생 이름과 열 역할을 조합한다.
4. `UI-7D-5`: 실제 오류/도움말이 control 단위로 존재하는 대표 form만 `aria-describedby`·`aria-invalid`로 연결한다. 단순 영역 status를 모든 input에 잘못 연결하지 않는다.

## 진행 갱신

- UI-7D-2: 일반 모바일 control의 16px 글꼴·44px 한 줄 높이를 적용했다.
- UI-7D-3: `App.jsx`의 이름 미지정 53개를 0개로 줄였다. 동적 표·반복 행은 문항 번호, 학생 이름, 업무 항목을 조합한 이름을 사용한다.
- 남은 이름 미지정 control: 학생관리 41개, 월별 정산 5개, 테스트관리 3개, 특강 정산 2개, 학생 질문 1개로 총 52개다.

## 사람 검수 분류

UI-7D는 입력값을 바꾸지 않고도 focus·이름·크기를 확인할 수 있다. 각 구현 뒤 390px과 VoiceOver/접근성 트리 절차를 한 번에 확인하도록 누적하며, 다음 독립 UI 단위를 막지 않는다.
