# P2-4 modal 저장 상태 감사 — 2026-08-03

## 결론

41개 dialog의 저장·처리 상태를 공통 vocabulary와 대조했다. DB/API 저장 상태는 `idle`, `dirty`, `saving`, `verifying`, `saved`, `failed` 안에서 표현되고 있으며, 공통 상태로 바꾸면 의미가 손상되는 복합 결과 세 종류는 별도 표시를 유지한다. 상태 의미를 억지로 합칠 코드 변경은 필요하지 않았다.

## 공통 상태 적용 표면

| 표면 | 저장 계약 | 상태 계약 |
| --- | --- | --- |
| 월 정규수업 열기 | bulk 저장 뒤 Supabase 재조회 | `saving -> verifying -> saved/failed` |
| 수업 등록·수정 | validation 뒤 저장·검증 | `dirty/saving/saved/failed` |
| 보고서 snapshot | 교사 인증 CAS·재조회 | `idle/saving/saved/failed` |
| 학생 등록·프로필·퇴원·명단 | insert-only 또는 CAS·재조회 | `idle/dirty/saving/saved/failed` |
| 특강 회차 계획·정산 | 명시 저장·재조회 | 공통 상태를 `StickySaveBar`에 전달 |
| 시험정보 편집·검수 저장 | 행별 저장·재조회 | `success` 내부 결과는 표시 직전 `saved`로 매핑 |
| 수업일지 보충 완료·일정 | App-owned callback 완료 뒤 결과 표시 | `idle/saving/saved/failed` |

## 분리 유지하는 복합 결과

1. Solapi 예약·취소 feedback의 `saving/success/failed`는 provider orchestration 결과다. DB 저장 완료와 같은 상태로 합치지 않는다.
2. 보충 일정은 `lesson`, `makeupTask`, 학생·학부모 변경 안내, 학생 11시 reminder를 각각 표시한다. source 저장 성공과 provider 실패를 aggregate `failed` 하나로 축약하지 않는다.
3. 시험분석의 조회·업로드·AI·삭제 `success`는 process 결과다. 실제 저장 badge에 전달할 때만 `saved`로 바꾼다.

## P2 closeout

- 공통 dialog shell: 41/41
- bespoke dialog: 0
- 공통 최종 footer: 15
- 남은 `modalActions`: 2. `SupplementTaskActionBar`와 수업일지 보충 일정 편집의 본문 작업 바로 유지한다.
- 자동 감사: `npm run test:modal-save-state-audit`

다음 제품 단위는 P3 알림톡 템플릿 설정 관리다. 문구 원천 inventory부터 시작하고 실제 발송·예약은 실행하지 않는다.
