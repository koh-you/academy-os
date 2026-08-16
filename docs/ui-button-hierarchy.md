# 버튼 위계 규칙

업데이트: 2026-08-16

## 배경

`docs/archive/ui-unification-*` 감사는 버튼 프리미티브(`primaryButton`/`softButton`/`dangerButton`/`ghostButton`/`iconButton`)를 도입했다고 기록했지만, 실제 코드에는 기능적으로 동일한 "확정" 액션에 `sendButton`/`saveDraftButton`/`passButton`/`studentRestoreButton` 같은 화면별 커스텀 클래스가 35개 이상 남아 있었다(2026-08-16 UI 통일 착수 조사, `src/**/*.jsx` grep 기준). 이 문서는 새 화면이 다시 같은 방식으로 흩어지지 않도록 규칙을 명문화한다.

## 표준 클래스 6종

| 클래스 | 용도 | 화면당 개수 |
| --- | --- | --- |
| `primaryButton` | 그 화면/모달의 주요 확정 액션(저장, 등록, 확인 등) | 정확히 1개 |
| `softButton` | 취소·닫기 등 중립 보조 액션 | 제한 없음 |
| `ghostButton` | 3차 액션(텍스트에 가까운 저강도 액션) | 제한 없음 |
| `dangerSoftButton` | 확인 모달 **안**에서 실행되는 파괴적 액션의 확정 버튼(삭제 확정, 취소 확정 등) | 확인 모달당 1개 |
| `dangerButton` | 확인 모달 없이 바로 실행되는 작은 인라인 파괴적 액션(리스트 행의 휴지통 아이콘 등) | 제한 없음, 아래 "위험 액션" 절 참고 |
| `iconButton` | 아이콘만 있는 컴팩트 컨트롤(라벨 없음) | 제한 없음 |

이 6개 밖의 새 버튼 클래스를 만들지 않는다. 기존 UI에 화면별 커스텀 클래스(`sendButton`, `saveDraftButton`, `passButton`, `studentRestoreButton`, `studentPermanentDeleteButton`, `trashButton`, `textButton` 등)가 남아 있으면, 그 화면을 다루는 단위에서 위 6종 중 기능이 가장 가까운 것으로 교체한다(크기·아이콘 결합 등 화면 고유 요구가 있으면 표준 클래스에 보조 modifier 클래스를 추가하는 방식을 쓰고, 새 base 클래스를 만들지 않는다).

## 화면당 primary 규칙

- 화면 또는 모달마다 **`primaryButton`은 정확히 1개**여야 한다. 액션이 여러 개면 그중 사용자가 가장 자주/가장 마지막에 눌러야 하는 확정 액션 하나만 `primaryButton`이고 나머지는 `softButton`/`ghostButton`이다.
- 저장 액션과 별도의 부수 액션(예: "AI 초안 생성", "미리보기")이 같이 있는 경우, 저장/확정만 `primaryButton`이고 나머지는 `softButton`이다.

## 순서 규칙

- 취소/닫기(`softButton`)는 왼쪽, 주요 확정 액션(`primaryButton`)은 오른쪽. 이 규칙은 표본 조사에서 12개 화면 모두 이미 지키고 있던 관행이므로 그대로 표준으로 삼는다.
- 3개 이상의 액션이 있으면: 왼쪽부터 `관리 범위 변경류(제외/복원 등) → ghostButton류 부수 액션 → softButton(취소) → primaryButton(확정)` 순서. 위험 액션(삭제)은 별도로 아래 절을 따른다.

## 위험 액션(삭제 등) 규칙

1. **파괴적 액션은 기본적으로 확인 모달을 거친다.** 확인 모달의 확정 버튼은 `dangerSoftButton`을 쓴다(취소 버튼은 `softButton`, 왼쪽).
2. **확인 모달 없이 바로 실행되는 인라인 삭제**(리스트 행의 작은 휴지통 아이콘처럼, 실행 취소가 쉽거나 영향 범위가 그 행 하나로 제한되는 경우)만 `dangerButton` 또는 `iconButton` + 위험색 modifier를 쓴다.
3. 위 두 경우 중 어디에 해당하는지 애매한 기존 화면(예: 학생 영구 삭제처럼 파급이 큰 액션)은 그 화면을 다루는 단위에서 실제 파급 범위를 다시 판단하고, 파급이 크면 1번(확인 모달 + `dangerSoftButton`)로 정리한다. 이 판단은 화면마다 사람 확인을 권장한다.
4. 하나의 화면에 `dangerButton`과 `dangerSoftButton`을 섞어 쓰지 않는다 — 그 화면 안에서는 위 1/2 규칙에 따라 통일한다.

## 크기 규칙

- 터치 우선 화면(학생 태블릿, 학부모 모바일)의 버튼은 `--academy-touch-target`(44px) 이상의 히트 영역을 유지한다.
- 데스크톱 밀집 툴바(교사용 화면의 인라인 액션 등)는 `compact` modifier로 높이를 줄일 수 있다. 새 compact 변형이 필요하면 기존 `softButton compact`/`ghostButton compact` 패턴을 따르고 새 base 클래스를 만들지 않는다.
- `primaryButton full`(전체 너비)은 액션이 1개뿐인 모바일 하단 고정 바에서만 쓴다.

## 마이그레이션 메모

이 문서 자체는 코드를 바꾸지 않는다. 화면별 커스텀 버튼 클래스를 표준 6종으로 옮기는 작업은 해당 화면을 다루는 개별 단위(UI 통일 착수 계획의 Unit 4 이후)에서 진행하며, 각 단위는 다음을 지킨다:
- 클래스명만 바꾸고 `onClick`/저장·삭제·알림 로직은 건드리지 않는다.
- 크기·색이 실제로 달라지는 경우(예: 커스텀 클래스가 표준 클래스와 padding이 달랐던 경우) 스크린샷으로 전후 대조한다.
