# UI-8I 수업연구·AI 도구·자료함 inventory — 2026-07-30

## 범위와 금지선

- 대상: `수업연구`, `AI 도구`, `자료함`의 작성 영역, 탐색 목록, 파일 선택, 결과·내보내기, 모바일 화면이다.
- 이번 UI 묶음은 표시 shell과 접근성만 다룬다.
- 수업연구 항목 추가·수정·삭제, 자료 등록·삭제·파일 선택, AI 처리, HWPX 다운로드를 실행하지 않는다. Supabase `app_state`, `resource_materials`, Storage, 외부 AI, 알림톡도 변경하거나 호출하지 않는다.

## 원천·callback·side effect

| 화면 | 읽는 원천 | 쓰기·파일 callback | 실제 저장·외부 경계 | UI 작업에서 보존할 경계 |
| --- | --- | --- | --- | --- |
| 수업연구 | `lessonResearchItems`, 과목·유형 catalog | `onAddItem`, `onUpdateItem`, `onDeleteItem` | 변경된 `app_state.lessonResearchItems` key를 500ms debounce 저장한다. 재조회·version 대조가 없는 자동저장 위험 안내를 유지한다. | 항목·유형 선택과 편집 필드는 표시 shell만 바꾸며 자동저장 setter나 삭제 동작을 이동·통합하지 않는다. |
| AI 도구 | 브라우저 local state의 원문·옵션·생성 결과 | 로컬 파일 text 읽기, `handleGenerateVariant`, `handleDownloadHwpx` | 현재 서버 AI·Storage 호출이 없다. 생성 결과는 화면용 local 초안이며 HWPX도 브라우저 Blob 다운로드 초안이다. | 실제 AI가 연결된 것처럼 새 API를 만들지 않고, 파일 선택·AI 처리·다운로드 callback을 실행하거나 합치지 않는다. |
| 자료함 | Supabase `resource_materials`, 학생·반 | `handleAddResourceMaterial`, `handleDeleteResourceMaterial`, 로컬 파일명 선택 | 등록은 `/api/resource-materials` POST, 삭제는 DELETE를 즉시 호출한다. 현재 파일 선택은 파일명만 form에 넣고 Storage upload는 하지 않는다. `notifyByAlimtalk`는 표시용 flag이며 이 화면에서 발송하지 않는다. | 등록·삭제의 낙관적 state와 API callback을 유지한다. UI 정리 중 파일 upload·발송·저장 상태 로직을 새로 붙이지 않는다. |

## 현재 공통 기반

- 세 화면 모두 공통 `PageHeader`를 사용한다.
- 수업연구 과목 필터는 `FilterBar`, 요약은 `MetricCard`, 저장 표시는 `InlineSaveStatus`, 빈 상태는 `EmptyState`를 사용한다.
- AI 도구 탭은 `WorkspaceTabs`, 결과 선택은 `SelectionToolbar`, HWPX 창은 공통 `Modal`·`ModalFooter`를 사용한다.
- 자료함 학생 전체 선택은 `SelectionToolbar`이고 반별 학생은 접힘 그룹으로 구분되어 있다.

## 확인된 표시·모바일 예외

1. 수업연구 유형트리와 교안 목록은 길이가 제한될 수 있지만 업무 이름·keyboard focus·touch scroll 경계가 없다. 모바일에서 두 목록 뒤의 선택 교안 편집기까지 지나치게 멀어질 수 있다.
2. AI 입력의 `aiVariantTopGrid`는 두 열 최소폭을 유지해 390px에서 전체 페이지 가로 넘침을 만들 수 있다.
3. AI 결과의 520px 최소 높이와 빈 결과 460px 최소 높이는 모바일에서 불필요한 빈 세로 공간을 만든다.
4. 자료함 `resourceLibraryLayout`은 `minmax(360px) + 결과 열` 두 열이 1100px 이하 한 열 전환 목록에 포함되지 않아 좁은 화면에서 가로 넘침 위험이 있다.
5. 자료함 반별 학생 목록은 학생 수가 많아질 수 있지만 이름 있는 focus·내부 세로 scroll 경계가 없다. 등록 자료 행의 긴 설명·파일명·URL도 모바일에서 위험 행동과 충돌할 수 있다.
6. 위 예외는 모두 표시 문제다. 자동저장, POST/DELETE, 로컬 파일 읽기·생성·다운로드 callback을 바꾸지 않고 해결할 수 있다.

## 연쇄 구현

1. `UI-8I-1`: 수업연구 유형트리·교안 목록과 자료함 학생 그룹을 이름 있는 focus·touch 세로 scroll 영역으로 만들고 기존 선택·편집·그룹 callback을 보존한다.
2. `UI-8I-2`: AI 입력·결과와 자료함 등록·목록을 한 열 모바일 shell로 정리하고 긴 내용·행동의 줄바꿈을 보강한다.
3. `UI-8I-3`: 수업연구 자동저장, 자료함 POST/DELETE, AI 로컬 파일·생성·HWPX 경계를 통합 회귀하고 독립 사람 시각 절차를 누적한다.

## 사람 검수

inventory 자체에는 사람 gate가 없다. 구현 뒤 desktop과 390px에서 유형트리·교안 목록·AI 입력/결과·자료함 등록/학생 그룹/자료 목록의 focus와 내부 scroll만 확인한다. 연구 항목이나 자료 값을 바꾸거나 추가·삭제하지 않고, 파일 선택·AI 처리·HWPX 다운로드도 실행하지 않는다.

## 진행 갱신

- UI-8I-1: 수업연구 유형트리·교안 목록과 자료함 반별 학생 목록에 업무 이름, keyboard focus와 내부 세로 touch scroll 경계를 추가했다.
- 유형→교안 추가, 교안 선택·편집, 반 접기/펼치기와 학생 선택 callback은 변경하지 않았다.
