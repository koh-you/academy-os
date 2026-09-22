# LaTeX 오답은행 (원본 전사 → 숫자 변형 → 자유 변형)

확인일: 2026-09-14

스캔 교재를 문항 단위로 **LaTeX 로 다시 조판**해 선명한 오답지·변형 문항의 원천으로 쓴다. 문제은행(`docs/problem-bank/README.md`)이 만든 문항 크롭·정답·해설을 입력으로, 사람이 확정한 전사본을 출력으로 둔다. `Math books prototype` 의 조판 기준(DeeP Math 통합 기준)을 그대로 따른다.

## 폴더

```
latex-bank/
  sty/                      dm-editorial.sty · dm-answer-classic.sty — 프로토타입 templates/DeeP-Math-v6 사본(수정 금지 · 새 sty 금지)
  <책>/items.json           원천. 문항별 body(LaTeX)·choices·subs·hint·figure·answer·answer_source. variant_level 0 = 원본 전사
  <책>/items/<쪽-번호>.tex   build.mjs 가 items.json 에서 만든 조각(머리 주석에 메타). 손으로 고치지 말고 items.json 을 고친다
  <책>/figures/*.tex|*.jpg  그림. TikZ 로 그린 것은 .tex, 크롭해 쓴 것은 .jpg (어느 쪽인지는 items.json 의 figure 와 아래 표에 기록)
  <책>/build/book.pdf       xelatex 결과(gitignore)
  <책>/review/<id>.png      원본 크롭 ↔ 조판본 나란히(사람 확정용 · gitignore)
  <책>/정독/*.md            정독 자산(프로토타입 스키마 v2.0). 프로토타입 폴더가 저장소에 들어오면 bank/ 로 옮긴다
```

## 여러 단원 한 책 (2026-09-15)

`items.json` 은 `units: [{ code, title, pages, groups }]` 로 단원을 여러 개 둔다(1단원 형식 `unit` + `groups` 도 그대로 읽힌다). `build.mjs` 는 단원마다 새 쪽에서 `\dmchapter` 로 시작하고 정답 쪽도 단원별로 나눈다. 문항 크롭 패키지는 `ingest-scan-badges.mjs --pages 2-54 --unit-pages "2-15,16-32,33-54"` 처럼 한 번에 만들어 두 번째 단원부터 id·크롭이 그대로 이어진다(문항 id 는 결정적이라 1단원 104문 id·상자가 그대로 유지된다).

- 전사 규약: `ssen-basic-cm2/전사-가이드.md` (필드·표기·그림·그룹 id `U<단원>-P/T/R`).
- 배치 검사: `node scripts/latex-bank/check-batch.mjs <batch.json>` — 그룹+문항 일부만 임시 책(`latex-bank/_batch-*/`)으로 조판해 오류·Overfull 을 본다(병합 전 확인용).
- 그림 크롭: `node scripts/latex-bank/crop-figure.mjs --pdf … --page N --item x0,y0,x1,y1 --rel x0,y0,x1,y1 --out figures/fig-<id>.jpg`.
- `--export` 는 `type_label` 을 전사본 그룹 section 으로 덮어쓴다(스캔 OCR 라벨은 회색 유형 쪽에서 어긋난다).

## 텍스트 PDF 교재(RPM 중3-2 · 2026-09-16)

글자 레이어가 있는 교재는 스캔과 다르게 준비한다 — 그림은 벡터라 TikZ 로 다시 그리지 않고 **원문에서 그대로 크롭**하고, 글자 레이어를 전사 힌트로 준다.

```
node scripts/latex-bank/prepare-text-pdf-bank.mjs --pdf "C:/…/rpm 중3-2 수학.pdf" --package <문항 패키지> --bank latex-bank/rpm-m3-2 --book "RPM 중3-2 수학"
  → figures/fig-<id>.png(300dpi · 그룹 그림 fig-g<시작>-<끝>.png · 원문 크기 crops.json) · draft/draft.json(문항별 글자 레이어 힌트 · 숨은 답 글자 분리) · draft/figures-qa/pNNN.png(검출 상자) · items.json 뼈대(id_style number)
node scripts/latex-bank/make-batches.mjs --package <문항 패키지> --out latex-bank/rpm-m3-2/work --draft latex-bank/rpm-m3-2/draft/draft.json --batches "A:9-11:01 삼각비,…"
  → 배치마다 전사 에이전트(지시문 latex-bank/agents/transcriber-prompt-rpm.md · 규약 latex-bank/rpm-m3-2/전사-가이드.md)
node scripts/latex-bank/merge-batches.mjs … → build.mjs --review --package <문항 패키지> → --export
```

- 그림 검출(`scripts/latex-bank/pdfVectorFigures.mjs`): 쪽 operator list 의 path bbox 를 CTM 으로 쪽 좌표에 놓고, 문항 영역 안에서 굵기 있는 path 를 뼈대로 8pt 안에 있는 것끼리 묶는다. 분수 가로줄·문항 구분선(얇은 선)은 뼈대에 닿을 때만, 번호 배지·태그 라벨 바탕(낮은 색 채움)·빈칸 상자(작은 네모)는 제외, 외딴 네모 하나(큼직한 빈칸)도 제외. 덩어리에 겹치는 작은 글자(정점 라벨·길이)와 보기 번호 ①~⑤ 를 더해 상자를 넓힌다. 여러 덩어리는 한 상자로 합치되 사이에 본문 줄이 끼면(그림 사이 발문) 큰 것을 대표로, 나머지를 `fig-<id>-2.png`… 로 따로 둔다(`figure_extra`). 숨은 글자(교사용 답 · 렌더에 잉크 없음)는 상자 확장·힌트에서 빼고 `hidden` 으로 따로 준다.
- 자동 검출이 틀린 것은 `latex-bank/<책>/figure-overrides.json` 에 쪽 pt 상자로 지정한다(`{"0545": {"box": [x0,y0,x1,y1], "extra": [[…]]}}` 또는 `{"union": true, "pad": […]}`). RPM: 4건(배지 위로 올라간 그림 · 표 아래 보기 글자 · 축 조각 · 회전 라벨).
- `id_style: "number"`: id 가 책 전체 번호(`0013`)이고 출처 배지는 「책 0013번 · 9쪽」(문항 `page`). 크롭 그림은 crops.json 의 원문 폭으로 넣고 170pt 를 넘으면 본문 아래에 둔다(`figure_layout` 로 강제 가능). 수식만 든 상자는 `\exprbox{…}` 로 전사한다.
- 22개정 RPM 공통수학2(학생용 웹 PDF · 2026-09-17): 배지 두 열 개념 쪽(컬럼 = 배지 x 최대 틈) · 바닥글 줄 단원 · 「04|2」 헤더 · 벡터 「답」 아이콘. 워터마크는 `--whiten-gray`. 1132문 · 그림 208 · 배치 27 · 검수 14(내용 불일치 0). (9-17 에 「한글 글꼴이 빠진 판」이라 적은 것은 pdfjs CMap 미설정이 원인이었다 — `pdfTools.mjs` 가 기본으로 넘긴 뒤 한글 온전.)
- 22개정 RPM 공통수학1(2026-09-17): 같은 경로. 1184문 · 그림 114(사람 지정 11 · 그룹 그림 키 `g<시작>-<끝>` · 문항별 `whiten`) · 배치 26 · 검수 15(내용 불일치 0). 출처 배지는 첫 줄 내용별로 올린다(cases·pmatrix 5.5mm · 분수 3.5mm · `badgeRaiseMm`).
- export 뒤 `annotate-package.mjs`(export 가 자동 실행)가 manifest 에 파일 md5 와 검수 메모(🔴·📝, `--include-yellow` 로 🟡)를 적는다 — 교재관리가 다시 등록할 때 바뀐 파일만 올리고, 「검토 필요」 목록에 문항 이미지와 함께 보인다. 이미 고친 finding 은 `--resolved id,id` 로 뺀다.
- 베이직쎈 공통수학1(스캔 · 2026-09-18): 스캔 경로(TikZ·표·삽화 크롭). 스캔 크롭 1520 → 전사본 1570(놓친 76 추가 · 라벨 상자 26 제외). 스캔 교재는 export 를 `--bank-only --answers-from-bank` 로(전사본 기준 manifest · 답 이미지는 answer 조판) 하고, 답지 ingest 전에 `sync-manifest-to-bank.mjs` 로 manifest 를 전사본에 맞춘다. 검수 20(내용 불일치 0 · 원문 오식 의심 1).
- 책 전체 번호 스캔 판(쎈 중3-2 · 라이트쎈 공통수학1·2 · 2026-09-19): `--numbering book` 크롭 + `id_style: "number"`. **인쇄 쪽은 전사본 `page` 가 원천**이다 — 스캔 manifest 의 `printed_page` 는 pdf 쪽 + 고정 offset 이라 단원 간지가 빠진 스캔(쎈 중3-2 는 33쪽부터 1~10쪽 · 라이트쎈 공통수학2 는 05 집합 단원이 없어 0635번부터 16쪽)에서 어긋난다. `sync-manifest-to-bank.mjs` 와 `build.mjs --export` 가 manifest 의 `printed_page` 를 전사본 page 로 덮어쓰고, 4자리 id 의 합성 항목은 `number_sort = 번호`. 별도 답지 PDF 는 `ingest-scan-answers.mjs --layout lssen --pages 1-<끝>` 처럼 쪽 범위를 꼭 준다(없으면 본책 마지막 문항 쪽 뒤부터로 잡아 0건).
- `build.mjs --review/--export` 의 낱장 조판은 worker 8개(`--jobs N` · 기본 CPU 절반)가 `_single-<k>.tex` 로 동시에 돌린다 — 1414문 순차 1시간 45분 → 수 분. 그룹 그림(공통 표) 뒤에는 4mm 를 둬 첫 문항 배지가 표에 겹치지 않게 한다.
- 검수 에이전트용 id 목록(「id<TAB>qa/pNNN.jpg」)은 manifest 의 `pdf_page`(스캔에 없는 문항은 이웃 것)로 만든다. 고정 offset 으로 만들면 뒤 배치에서 다른 쪽을 가리킨다. 지시문: `latex-bank/agents/reviewer-prompt-scan-book.md`(책·bank·id 목록·출력 파일을 자리표시자로).
- 실측(RPM 중3-2 · 644문항 · 83쪽): 그림 크롭 520장(문항 500 + 그룹 10 + 둘째 크롭), 배치 16개(22~53문항)를 에이전트 16개가 전사 — 거부 0, 배치마다 12~20분 · 12~19만 토큰, 답 644/644 답지 크롭 일치. book.pdf 126쪽 · Overfull 1.

## 배치 전사 절차 (2·3단원에서 확립 · 2026-09-15)

```
node scripts/latex-bank/make-batches.mjs --package output/problem-bank/<책> --out <작업폴더> --batches "A:16-19:02 직선의 방정식,…" --page-offset 6
  → 배치마다 latex-transcriber 에이전트(.claude/agents/latex-transcriber.md · 지시문 latex-bank/agents/transcriber-prompt.md)에 batch-<이름>.md 를 넘김
  → 에이전트가 out-<이름>.json 을 쓰고 node scripts/latex-bank/check-batch.mjs out-<이름>.json 으로 컴파일 확인
node scripts/latex-bank/merge-batches.mjs --work <작업폴더> --bank latex-bank/<책> --map "A:02:직선의 방정식:22~38,…"
node scripts/latex-bank/build.mjs --bank latex-bank/<책> --review
  → 검수 에이전트(latex-bank/agents/reviewer-prompt.md + reviewer-methods.txt · 수학/전사/정책 축) → 정독 에이전트(dokdu-prompt.md) → --export
```

- 배치는 40문항 안팎(쪽 4~7장)이 적당했다. 에이전트마다 판단이 달라 일부 배치가 거부될 수 있다 — 그때는 이미 전사한 에이전트에게 SendMessage 로 이어 맡기거나 직접 전사한다(2026-09-15: 8배치 중 5 완료 · 3 거부 → 2 직접 · 1 이어 맡김).
- 이번 실측: 2단원 143문 · 3단원 173문(합 316) · 그림 TikZ 23 · 1~3단원 420문 book.pdf 50쪽 · Overfull 0.

## 흐름

```
문제은행 패키지(items/*.jpg · answers/ · solutions/)
  → AI 가 크롭을 읽고 items.json 전사(세션 안 비전 · 별도 API 비용 없음)
  → node scripts/latex-bank/build.mjs --bank latex-bank/<책> --review   (xelatex 2회 · review/*.png)
  → 사람이 review/ 를 보고 items.json 을 고쳐 확정 (variant_level 0 확정본)
  → node scripts/latex-bank/build.mjs --bank latex-bank/<책> --export   (output/problem-bank/<책>-latex = 등록용 패키지)
  → 교재관리 › 패키지 등록에 그 폴더를 올리면 오답지·오답은행에 조판본 문항이 나온다(정답·해설은 원본 패키지 것을 그대로 이어받음)
  → 숫자 변형(level 1) · 자유 변형(level 2)은 확정본을 원본으로 별도 항목으로 추가(id 에 -v1·-v2)
```

- 컴파일: MiKTeX xelatex(`%LOCALAPPDATA%\Programs\MiKTeX\miktex\bin\x64`). 첫 실행 때 kotex·tcolorbox 등이 자동 설치된다. 한글 본문 Noto Serif KR · 제목 Malgun Gothic(둘 다 Windows 기본 설치).
- 번호: 책의 「인쇄 쪽-번호」(`12-13`)가 id. 조판본에는 `\dmkichul{베이직쎈 공통수학2 12쪽 13번}` 출처 배지가 붙고, 문항 번호는 dm-editorial 의 자동 카운터(01.~)다.
- 공통 지시문(개념 쪽 말풍선 줄)은 `groups[].passage` 로 한 번만 두고 그 묶음 위에 굵게 찍는다. 힌트 빈칸형(◎ 줄)은 `hint` 로 문항 아래 연한 상자에 넣는다. 빈칸은 `\blank`.
- 선택지는 dm-editorial 의 `choices32`(3-2) · `choicesii`(2-2-1) · `choicesv`(세로) 를 쓴다(`choices_layout`). 분수 좌표처럼 키 큰 보기는 `ii`. `choices_layout` 이 없고 보기 5개가 모두 짧으면(시각 길이 ≤ 10) build 가 한 줄 5칸 후보로 두고 TeX 이 실제 폭(칸 사이 최소 1.5em · 낱장 본문 폭 89mm)을 재서 들어가면 한 줄, 아니면 3-2 로 찍는다. `"i"` 는 한 줄 강제.
- 본문 끝의 `\cond{…}` 는 build 가 「같은 줄에 들어가면 그 줄 오른쪽 끝, 아니면 다음 줄 오른쪽 끝(앞 줄은 벌어지지 않게)」 으로 놓는다(`\dmcondfill`). 뒤따르는 `[4점]`·`(정답 2개)` 도 함께 옮긴다. 보기 상자 안이나 문장 중간의 `\cond` 는 그대로다.
- 줄바꿈 규약(프로토타입 `mathbook-problems.sty`·`style.sty` 와 같음 · build.mjs 머리말에 정의): 수식 안에서는 줄을 안 바꾼다(`\binoppenalty=\relpenalty=10000`), 「(단, …)」은 `\cond{…}`, 「점 P」처럼 명사와 기호 사이는 `점~$\pt{P}$`(`~` = 안 끊는 공백), 그 밖의 덩어리는 `\nob{…}`. 그림이 있는 문항은 원문처럼 본문 오른쪽에 그림을 둔다(`figure` 가 있으면 본문 0.58 · 그림 0.4 폭).
- 문항 번호는 책에 찍힌 번호 그대로다(id 의 뒤 두 자리 · 쪽마다 다시 시작 · 예 19-17 → 「17.」). book.pdf·review·export 모두 같다.

## 그림 규칙 (사용자 결정 2026-09-14)

- 원문 그림의 스캔 화질이 좋으면 크롭(`figures/<id>.jpg`)을 그대로, 나쁘면 TikZ 로 다시 그린다. **어느 쪽인지 반드시 기록한다**(items.json `figure: "tikz:파일"` 또는 `"crop:파일"`, 아래 표).
- TikZ 는 프로토타입 규약을 따른다: 정점 2.2pt · 파생점 2pt, 축 0.7pt · 곡선 0.5pt(실효 두께), 라벨은 선과 안 겹치게 최소 이동, 축 라벨은 화살표 끝이 아니라 옆, 눈금 표시 없음, 답이 그림에서 읽히지 않게.
- 원문에 없는 그림은 넣지 않는다(`feedback_figure_source_original_only`).

### 베이직쎈 공통수학2 · 01 평면좌표 그림 기록

| 문항 | 원문 | 처리 | 파일 | 까닭 |
|---|---|---|---|---|
| 13-01~13-04 (공통 지시문) | 수직선 −4~4 · A P B Q C | TikZ | `figures/fig-numberline-13.tex` | 스캔 화질 낮음 · 단순 수직선 |
| 17-01 | 등간격 8점 A~H 수직선 | TikZ | `figures/fig-numberline-17-01.tex` | 위와 같음 |
| 19-17 | 좌표평면 삼각형 ABC · 이등분선 발 D · 좌표 안내 파선 | TikZ | `figures/fig-19-17.tex` | 좌표가 모두 주어져 정밀 재현 가능 |
| 21-10 | 지도 삽화(도로·윤희·지민·50 m) | **크롭**(600 dpi · 731×629px · 아래 띠 포함) | `figures/fig-21-10.jpg` | 실생활 삽화라 원문 그림을 그대로 쓰기로 함(사용자 결정 2026-09-15). TikZ 도식 `fig-21-10.tex` 는 대체본으로 남김 · 크롭 스크립트 `검수/2026-09-15/scripts/crop-2110.mjs` |

## 검수 (검수 에이전트)

- `<책>/검수/<날짜>/00-검수-요약.md` + 상세 4편. 프로토타입 `problem-review` v2.0 을 원본 전사 단계에 맞게 4축으로 나눠 돌린다: ① 발문↔정답 강검증(답 안 보고 직접 풀이·되대입) ②③ 원본 크롭↔조판본 눈 비교(review/*.png) ④ 정독 자산 스키마·v3.8 ★ 재산정(유형카탈로그 base★)·앵커 비교 + 조판 정책 자동 도구(permanent-policy·connector·align·figure-tikz-label·pdf-label-overlap)·용어·그림 규칙.
- 원칙: 발견 사항은 자동 수정하지 않고 보고만 한다(사용자 결정). 2026-09-15 베이직쎈 1단원: 수학·전사 104/104 통과, RED 는 fig-19-17 라벨 겹침 1 + 정독 자산 기록 형식(YAML escape·type_id/base_star) 2. 사용자 승인 뒤 반영한 것은 `검수/2026-09-15/scripts/` 에 스크립트로 남겼다(fig-19-17 라벨·이등분 호, 21-10 크롭, 정독 형식·M_a·통찰 라벨·★ 5문, 줄바꿈 규약).

## 정독 자산

- `latex-bank/ssen-basic-cm2/정독/mechanism-데이터-베이직쎈-CM2-GM-평면좌표.md`: 104문 전수. 스키마 v2.0 필드(M·insights·depth_score·star·tier·mechanism_primary·target_cohort·rationale) + 이 프로젝트 추가 필드(answer·answer_source·figure·latex). 판정표는 `scripts/latex-bank/`가 아니라 생성 스크립트 안에 두었으므로, 판정을 고칠 때는 md 를 직접 고친다(자산이 원천).
- 분포(2026-09-15 검수 반영): ★ 1 = 46 · ★ 2 = 41 · ★ 3 = 17 · ★ 4 이상 없음(기초 교재). 통찰형 21문. 블록마다 `type_id`(유형카탈로그 CM2-GM C01~C07)·카탈로그 `base_star`·`effective_star` 를 두고, 라벨 `star` 와 다르면 `rationale` 에 까닭을 적는다(기초 교재의 최소형이라 카탈로그 base 보다 낮은 것이 정상).

## 실측 (2026-09-14 · 베이직쎈 공통수학2 1단원)

- 104문항 전사 · xelatex 컴파일 통과(Overfull 0) · book.pdf 13쪽(본문 12 + 정답) · review 104장.
- 답: 답지 크롭 89 + 계산값 15(`answer_source` 에 「계산」 표기 — 답지 크롭이 한 칸 밀리거나 누락된 것·풀이 앞부분만 잡힌 것). 계산값은 사람이 답지와 대조한다.
- 정답·해설(2026-09-16): 답지 OCR 이 놓친 48문항과 잘못 이어 붙은 풀이를 `ssen-basic-cm2/answer-overrides.json`(사람 지정 상자 122개)으로 채워 해설 420/420 · 답 줄 334. `ingest-scan-answers.mjs --overrides` 로 다시 만들면 재현되고, export 패키지에는 그대로 복사된다.
- 아직 안 한 것: 풀이(해설) 전사, 숫자 변형(level 1), 자유 변형(level 2), 2단원 이후.
