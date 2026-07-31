# 작업 지침·Markdown 병목 감사

## 결론

병목의 핵심은 Markdown 파일 수 자체가 아니라, 장문 과거 이력과 완료 gate를 `매 세션 필독·항상 표시`로 지정한 구조였다. 보안·저장 계약은 유지하고, 현재 판단에 필요 없는 내용은 선택 조회 archive로 옮겼다.

| 병목 지침/문서 | 문제 | 조치 | 현재 상태 |
| --- | --- | --- | --- |
| 1만 줄 `docs/current-worklog.md` 필독 | 완료 작업 수천 단계를 매번 읽어야 함 | 전체 이력을 archive하고 최근 기록만 유지 | 적용 |
| 장문 `docs/next-session/README.md` | 완료된 UI gate·붙여넣기 prompt가 반복됨 | 과거 handoff archive, 현재 인계 1페이지로 교체 | 적용 |
| `AGENTS.md`의 완료 사람 gate 상세 | 재요청 방지보다 과거 데이터가 더 큰 비중을 차지 | 현재 gate 유무만 STATUS에 유지 | 적용 |
| 완료된 UI-0~UI-9·리팩터링 18단계 상세 | 이미 끝난 작업이 새 우선순위처럼 보임 | 완료 한 줄만 큐에 남기고 상세는 archive | 적용 |
| `Always Show First` 전체 큐 | 긴 큐가 사용자의 긴급 요청보다 먼저 출력됨 | 충돌하는 우선순위만 짧게 알리도록 변경 | 적용 |
| 모든 작업의 고정 7단계 사람 검수 | 문서·정적 작업에도 불필요한 사람 클릭을 요구 | AI 자동검증 불가 항목에만 최소 gate | 적용 |
| AI self-check 7문항을 매번 답변에 출력 | 내부 품질 확인이 상투적 보고로 변함 | 핵심 원칙은 유지하고 출력 강제는 제거 | 적용 |
| 옛 `E:\` worktree·완료 branch 지침 | 현재 `C:\Dev` 구조와 충돌 | canonical 경로와 일반 worktree 규칙으로 교체 | 적용 |
| 시험분석·Canva·카드뉴스 세부 규칙의 전역 로딩 | 일반 유지보수와 무관한 도메인 내용이 컨텍스트 점유 | 관련 도메인 문서/과거 archive에서만 선택 조회 | 적용 |
| 개별 학생 복구 ID·정확한 과거 건수 | 사고 이력에는 필요하지만 일상 개발 판단에는 불필요 | archive에서 보존, 글로벌 지침에서 제거 | 적용 |
| `home-codex-setup`의 Desktop·Node 20·`npm install` | 현재 표준과 다르고 중복 clone을 유발 | `C:\Dev`, Node 24, `npm ci`, doctor로 교체 | 적용 |
| production test 약 5천 줄 출력 | 성공 로그가 실패 신호와 AI 컨텍스트를 압도 | 검사는 그대로 실행하고 기본 출력만 총계·실패 주변으로 요약 | 적용 |
| 다수의 6월 handoff·완료 inventory 문서 | 검색 결과 노이즈는 있으나 자동 필독은 아님 | 지금은 보존; 월별 archive/삭제는 별도 저위험 정리 | 보류 |
| 시험분석 대형 JSON manifest | 크지만 자동 필독이 아니고 독립 branch 근거 자료 | 삭제하지 않음; 시험분석 작업에서만 읽기 | 유지 |

## 반드시 유지한 지침

- 비밀값·API key 비출력/비커밋.
- Supabase/API 저장 후 재조회와 새로고침 유지.
- 실제 발송·삭제·유료 호출·SQL 적용의 사람 gate.
- 사용자 편집본을 AI/파생값이 덮어쓰지 않는 계약.
- 동시 세션의 worktree/index 분리와 단일 main 통합 owner.
- 자동검사 후 의도적 commit/push와 CI 확인.

## 추가 삭제 후보

아래는 현재 개발을 막지는 않으므로 자동 삭제하지 않았다. Git에서 복구 가능하지만, 독립 시험분석 작업과 과거 의사결정 근거를 참조할 가능성이 있어 사용자 선택 뒤 정리하는 편이 안전하다.

- `docs/session-handoff-2026-06-*.md` 과거 인계 문서.
- 완료된 `docs/ui-*-inventory*.md`, `docs/refactor-*-inventory*.md` 중 테스트가 직접 참조하지 않는 문서.
- 오래된 `docs/next-session/*prompt*.md` 중 최신 큐와 충돌하는 붙여넣기 prompt.
- `docs/daily-log.md`처럼 현재 worklog와 역할이 겹치는 옛 로그.

권장 순서는 먼저 이 구조로 며칠 사용하고, 참조가 끊기지 않았는지 확인한 뒤 위 후보를 `docs/archive/legacy/`로 이동하는 것이다. 즉시 영구 삭제할 실익은 작다.
