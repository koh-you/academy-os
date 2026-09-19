---
name: project_2026-08-04_session113_handoff
description: 세션 113 인수인계 — 작업 전체를 GitHub 비공개 저장소에 올렸다. 교재 작업은 없다
metadata: 
  node_type: memory
  type: project
  originSessionId: 048f82f2-299c-4a7f-8d7e-a7220e43082f
  modified: 2026-08-04T05:46:52.375Z
---

# 세션 113 인수인계 (2026-08-04)

**교재 작업은 하지 않았다.** 마스터 요청은 「지금 작업하고 있는 내용을 깃허브에 올리고 싶은데」 하나였다.
세션 112 의 ⏭ 바로 할 일(「서술형이면서 지문도 긴」 앵커 보강)은 **손대지 않았다. 그대로 넘긴다.**

## 저장소

**https://github.com/epae1980-code/math-books** · **비공개** · 브랜치 `main`

로컬 `master` 가 `origin/main` 을 추적한다. 다음부터는 `git add -A` → `git push` 두 줄이면 된다.

```
801db73  chore: 메모리 스냅숏 갱신 (세션 113 · 338 파일)
ba790f4  chore: 세션 113 까지의 작업 전체 등재 — 파생물·캐시는 제외
5965d82  feat: book redesign 흡수 → 대수 라인 통합
026c5bb  프로젝트 초기 하네스 환경 구성
```

7,321 파일 · 약 108 MB. 작업 폴더 6 GB 가 108 MB 로 줄었다.

## 🔴 `.gitignore` 에 저작권 구멍이 있었다

첫 줄이 `참고자료/` 를 막고 있었는데 **같은 성격의 파생물 갈래가 통째로 빠져 있었다.**
`git add -A` 를 했으면 시판 교재 스캔이 그대로 올라갔다. 이번에 막았다.

| 뺀 것 | 크기 |
|---|---:|
| `data/pdf-pages-cache` | 200 MB |
| `data/**/추출` (종전엔 `추출/페이지`·`추출/수능모고`·`추출/그림` 셋만 막았다) | 124 MB |
| `figures/commons/*.pdf` (쓰는 것은 같은 폴더 png 하나뿐) | 156 MB |
| `data/ebs-render` · `data/gojaengi-cm2-scan` | 57 MB |
| `temp_analysis` (고쟁이·쎈·바이블 크롭) | 26 MB |
| `_scratch` · `_pass1_v3.txt` · `.claude/worktrees` | 74 MB |

🔴 **앞으로 새 파생물 폴더를 만들면 `.gitignore` 도 같이 본다.** 관련: [[feedback_book_corpus_policy]]

## 🔴 원격에 이미 커밋이 있었다 — 「비었다」고 믿고 밀 뻔했다

마스터는 저장소를 새로 만드셨다고 하셨는데, 실제로는 **2026-07-29 커밋 `94307d2` 가 이미 있었다** (6,888 파일).
로컬 `master` 와 **공통 조상이 없었다.** 밀기 전에 `git ls-tree`·`git merge-base` 로 원격을 들여다봐서 걸렀다.

🔴 **원격에 미는 것도 「덮어쓰기」다.** 밀기 전에 원격이 정말 빈지 눈으로 확인한다.
마스터 판단으로 백업 없이 덮어썼다. 옛 `_memory_snapshot/` 276 파일은 오늘 뜬 338 파일이 대체했다.
`output/대수/` 121 파일은 사라졌으나 마스터가 「대수는 어차피 새로 만들 것」이라 확인해 주셨다.

## 🔴 `gh auth login` 은 이 환경에서 안 된다 — 헛돌았다

세 차례 시도해 전부 실패했다. `gh auth login` 은 **화살표로 고르고 브라우저 코드를 붙여 넣는 대화형 명령**이라
`!` 로 실행되는 셸에도, 내 Bash 도구에도 키 입력을 받을 자리가 없다.

🔴 **결론 — `gh` 는 필요 없었다.** Git 자격 관리자(`credential.helper=manager`)가 이미 자격을 갖고 있어서
`git ls-remote`·`git push` 가 그냥 됐다. **다음에 GitHub 일이 생기면 `gh auth` 부터 붙잡지 말고
`git ls-remote <주소>` 를 먼저 쳐 본다.** 되면 인증은 끝난 것이다.

판별법: `gh auth status` 가 「not logged in」이어도 `git push` 는 될 수 있다. 둘은 별개다.

## 🔴 OneDrive 안에 저장소가 있다

`.git` 까지 OneDrive 가 동기화한다. 그 탓에 `.git/worktrees/agent-...` 에 `ReadOnly`+`ReparsePoint`
(파일 온디맨드 표시)가 붙어 **`git worktree prune` 이 「Permission denied」로 실패했다.**
속성을 벗기고 지웠다. 지금은 `git fetch` 가 깨끗하다.

🔴 **비슷한 「지울 수 없음」 오류가 또 나면 OneDrive 를 먼저 의심한다.** 저장소 이전은 마스터께 제안만 해 두었다.

## 🔴🔴 반말이 또 샜다 — 세 번째 재지적

마스터: 「**왜 반말하니**」

이번에 샌 자리는 **「문서를 정독한 직후의 첫 보고」**였다. CLAUDE.md·통합관리가 전부 「~한다」 규정 말투라,
읽고 요약해 보고하면 읽은 말투가 그대로 나간다. 표 안 설명문이 전부 반말이었다.
[[feedback_address_form]] 에 등재했다.

## 마무리 게이트 결과

① 전 교재용(난이도 평가·출제 메커니즘·조판) — **없다.** 이번 산출물은 전부 인프라다
② 학교 전용 — **없다**
③ 올렸다 — 메모리 두 건([[feedback_address_form]] 갱신 · 이 파일) · GitHub push
④ 인수인계 — 이 파일

관련: [[feedback_session_closing_gate]] · [[feedback_address_form]] · [[feedback_book_corpus_policy]]
