# UI-3E 선택 작업 바 인벤토리 — 2026-07-29

## 적용 화면과 계약

| 화면 | 선택 원천 | 안전 actions | 위험/side-effect actions |
| --- | --- | --- | --- |
| 알림 개별 발송 학생 | `selectedStudentIds` | 보이는 학생 전체, 선택 해제 | 실제 발송은 작성 패널에 분리 유지 |
| 퇴원생 목록 | `selectedWithdrawnStudentIds` | 전체 선택, 선택 해제, 선택 저장, 퇴원 취소, 인수인계서 PDF | 영구 삭제만 danger 영역으로 분리 |
| 시험 후 셀프체크 대상 | row별 `examPostTargetStudentIds` | 전체 선택, 전체 해제 | 대상 저장 callback은 기존 `updateRowTargetStudentIds` 유지 |
| AI 변형문항 | `selectedVariantIds` | HWPX 내보내기 모달 열기, 다시 생성 | 실제 callback이 없던 `별표`·`전체 저장`은 제거 |
| 자료함 공개 학생 | `form.studentIds` | 전체 선택, 전체 해제 | 자료 저장은 기존 모달 저장 영역에 분리 유지 |
| 특강 회차 초안 | `draft.sessionPlans[].status` | 전체 선택, 전체 해제 | Supabase 저장은 하단 2단계 저장 영역에 분리 유지 |

## 공통 규칙

- `SelectionToolbar`는 label, 선택 수/전체 수, 설명, 안전 actions, danger actions를 분리한다.
- 기존 callback과 인자, disabled 조건을 그대로 전달하며 공통 컴포넌트 안에서 저장·삭제·발송·등록·내보내기를 실행하지 않는다.
- danger actions는 안전 actions와 경계선으로 분리하고, 모바일에서는 다음 줄로 내린다.
- 390px에서 action 버튼은 최소 44px 높이를 유지하고 작업 바 안에서 줄바꿈한다.
- 특강 회차의 `1단계 화면 초안` 문구와 저장되지 않는다는 안내를 그대로 보존한다.

## 후속 분류

- 특강 학생 수동 접수의 선택 수와 실제 접수 저장 버튼은 모달 footer 계약이므로 UI-5C에서 다룬다.
- 수업 명단의 학년별 전체 선택/해제는 그룹 내부 행동이므로 UI-4B 목록 카드에서 다룬다.
- 퇴원생 영구 삭제는 UI 배치만 분리했으며 실제 삭제 사람 gate는 실행하지 않았다.

## 사람 검수

필수 중단 gate는 없다. 배포 후 각 화면에서 체크박스만 선택·해제해 선택 수가 즉시 바뀌는지, 퇴원생 영구 삭제가 안전 actions와 시각적으로 분리되는지, 390px에서 버튼이 잘리지 않는지 확인한다. 저장·삭제·발송·접수·HWPX·다시 생성 버튼은 누르지 않는다.
