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
- 선택지는 dm-editorial 의 `choices32`(3-2) · `choicesii`(2-2-1) · `choicesv`(세로) 를 쓴다(`choices_layout`). 분수 좌표처럼 키 큰 보기는 `ii`.
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
- 아직 안 한 것: 풀이(해설) 전사, 숫자 변형(level 1), 자유 변형(level 2), 2단원 이후.
