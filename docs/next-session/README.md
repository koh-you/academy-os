# Next Session

새 세션은 아래 파일을 순서대로 읽는다.

1. `AGENTS.md`
2. `docs/STATUS.md`
3. `docs/deferred-work-queue.md`
4. `docs/next-session/DAILY_HANDOFF.md`
5. `git status --short`, `git log -1 --oneline`

장문 과거 handoff는 `docs/archive/next-session-handoff-through-2026-07-31.md`에 보관되어 있으며, 현재 작업에 관련된 역사 확인이 필요할 때만 읽는다.

## 현재 인계

- canonical folder는 `C:\Dev\academy-os`다.
- 개발환경 품질 보강 commit과 GitHub Actions 결과를 먼저 확인한다.
- Documents clone은 오전 9시 자동 작업 전용이므로 사람이 수정하지 않는다.
- 다음 기능 작업은 `docs/deferred-work-queue.md`에서 하나만 선택한다.
- 전역 사람 gate는 없다. 실제 운영 삭제·발송·유료 호출·SQL 적용이 필요할 때만 새 gate를 연다.

자동 오전 작업은 `DAILY_HANDOFF.md`를 읽고 안전한 한 단위만 실행한 뒤 같은 파일을 갱신한다.
