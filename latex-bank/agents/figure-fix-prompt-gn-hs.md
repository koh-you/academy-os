# 개념원리 고등 그림 크롭 수정 에이전트

전사 에이전트가 「그림 크롭 잘림 · 본문 글자 섞임 · 크롭 없음」으로 보고한 문항의 그림을 원본 PDF 에서 다시 잘라 `latex-bank/{BANK}/figures/` 에 넣는다. 전사 본문(body)은 고치지 않는다 — figure 필드가 비어 있는 문항에 크롭을 새로 만든 경우에만 items.json 의 `figure` 를 채운다.

작업 폴더: `{WORK_DIR}` (모든 명령은 여기서 실행). 은행: `latex-bank/{BANK}` · 원본 PDF: `{PDF}` · 문항 패키지: `output/problem-bank/{BANK}` (쪽 이미지 `pages/pNNN.jpg` 약 100dpi · 문항 크롭 `items/*.jpg`).

## 도구

- 쪽의 일부를 pt 좌표로 잘라 보기(저해상 · 위치 찾기용): `node latex-bank/tools/crop-page.mjs {BANK} <pdf쪽> x0 y0 x1 y1 <out.png> [zoom]` → out.png 를 Read 로 본다. 쪽 크기는 약 533 × 737pt(왼쪽 위 0,0). 문항 영역 pt 는 `output/problem-bank/{BANK}/manifest.json` 의 `regions[0].bbox_normalized` × (532.9, 737.0) 로 구한다.
- 고해상 크롭 확정: `node latex-bank/tools/crop-fix.mjs {BANK} "{PDF}" <fig-name.png> <pdf쪽> x0 y0 x1 y1` — 300dpi 로 잘라 figures/ 에 쓰고 crops.json 을 갱신한다. 잘린 결과를 Read 로 열어 확인한다(라벨·화살표·축 끝이 다 들어가고 본문 글자는 안 들어가야 함).
- 현재 크롭의 상자: `latex-bank/{BANK}/figures/crops.json` 의 `bbox_pt`. 잘림은 그 상자를 해당 방향으로 6~14pt 넓히면 대개 해결된다. 본문 글자가 섞인 것은 그림 쪽만 남게 좁힌다.
- pdf 쪽 = 인쇄 쪽(이 책들은 offset 0). 문항 id 「128-250」 = 128쪽 250번.

## 규칙

1. 아래 목록의 문항을 하나씩 처리한다. 먼저 현재 크롭 파일(있으면)과 쪽 이미지 해당 영역을 보고 새 상자를 정한다.
2. 파일 이름은 기존 이름을 그대로 쓴다(`fig-<id>.png`). `figure` 가 비어 있는 문항에 새 크롭을 만들면 items.json 에 `"figure": "crop:fig-<id>.png"` 를 넣는다(그림이 본문 오른쪽에 있으면 `figure_layout` 생략 · 본문 아래 전폭이면 `"figure_layout": "below"`). items.json 은 큰 파일이라 node 로 읽어 해당 항목만 바꾸고 `JSON.stringify(b, null, 1)` 로 다시 쓴다.
3. 보기 ①~⑤ 그래프처럼 여러 조각(`fig-<id>-2.png` …)이 있으면 각 조각을 같은 이름으로 다시 자른다. 번호 배지(①)는 크롭에서 뺀다.
4. 원문에 그림이 없거나 「보기 상자·조건 상자·QR·수식 조각」뿐인 항목은 건너뛴다(전사본이 이미 \bogi·\exprbox 로 옮겼다).
5. 다 끝나면 처리한 문항 · 상자 · 남긴 문제를 짧게 보고한다. git 명령은 쓰지 않는다.

## 처리 목록

{LIST}
