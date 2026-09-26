# 개념원리 고등 검수 반영 에이전트

{BOOK} 은행(`latex-bank/{BANK}`)의 검수 결과(`latex-bank/{BANK}/검수/{DATE}/out-*.json`)를 items.json 에 반영하고, 고친 문항만 다시 조판해 확인한 뒤 검수 요약을 쓴다. 작업 폴더 `{WORK_DIR}` · 상대 경로 · git 명령 금지.

## 절차

1. `out-*.json` 을 전부 읽어 findings 를 모은다(`red` 는 내용 불일치, `yellow` 는 조판). red 는 반드시 원본 크롭(`output/problem-bank/{BANK}/items/*.jpg` · `review/<id>.png` 왼쪽)을 다시 보고 사실이면 고친다.
2. yellow 는 **items.json 필드 수정으로 해결되는 것만** 고친다. 규약(다른 은행 `latex-bank/gn-cm1/검수/2026-09-21/00-검수-요약.md` 의 처리와 같게):
   - 「$x$축」「$y$축」「$1$인」「$5$개의」「구하시오.」 처럼 줄 끝에서 갈라지는 낱말 → `\mbox{…}` 로 묶는다.
   - 긴 인라인 수식·집합·연립부등식(cases)·행렬 등식이 첫 줄에 못 들어가 자간이 크게 벌어짐 → 그 수식을 `\par\smallskip\centerline{$…$}\par\smallskip\noindent ` 별도 줄로 옮긴다(원문도 대개 별도 줄).
   - `choices_layout: "ii"` 가 오른쪽 여백을 넘침 → `"v"`.
   - 옆 그림(side) 때문에 본문이 좁은 단에 길게 갇히거나 cases 가 겹침 → `"figure_layout": "below"`.
   - `\bogi` 보기 항목이 `\hfill` 배치에서 중간에 줄바꿈 → 항목마다 `\\` 로 한 줄씩.
   - `\longrightarrow\sim` 붙음 → `\longrightarrow\ \sim`. 보기 상자 분수 행이 맞닿음 → `\\[3pt]`.
   - `\exprbox` 등식이 상자 테두리를 넘침 → 줄을 나누거나 상자 폭(`\framebox[…]`)을 줄인다.
   - 소문항 ⑽ 라벨 폭, 짧은 5지선다의 3+2 배치, 첫 줄 dfrac/cases 때문에 번호가 위로 뜨는 것, 분수 답 빈칸 높이, 여백 「생각해 봅시다!」 미전사, 한 글자 고아 줄(폭 의존)은 **템플릿·sty 공통이므로 고치지 않고 「유지」로 분류**한다.
3. items.json 은 큰 파일이다. node 로 읽어 해당 항목만 바꾸고 `JSON.stringify(b, null, 1)` 로 다시 쓴다(다른 은행과 같은 형식). 수정 전에 백업 `latex-bank/_tmp/{BANK}-items-before-fix.json` 을 남긴다.
4. 고친 문항을 `node scripts/latex-bank/build.mjs --bank latex-bank/{BANK} --review --jobs 2 --only <id,id,…>` 로 다시 조판하고, `review/<id>.png` 를 몇 개 열어 의도대로 됐는지 확인한다(컴파일 오류가 나면 되돌린다).
5. `latex-bank/{BANK}/검수/{DATE}/00-검수-요약.md` 를 gn-cm1 요약과 같은 형식으로 쓴다: 대상(문항 수 · 목록 수), 결과(checked/ok/red/yellow 합계), 내용 불일치 목록(있으면 id·원인·조치), 「yellow — 반영」 표(id · 원인 · 조치), 「yellow — 유지」 표(id · 원인), 그림 재크롭 등 전사 단계 후처리 메모(아래 참고 사항).
6. 보고: red 건수와 처리, 반영한 yellow 건수, 유지 건수, 컴파일 실패 여부.

## 참고 사항(요약에 「전사 단계 후처리」로 적을 내용)

{NOTES}
