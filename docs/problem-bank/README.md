# 문제은행(오답은행) · 1단계

확인일: 2026-09-12

학원에서 다루는 교재를 문항 단위 원천으로 만들고, 학생이 틀린 번호로 개별 오답지를 만든다. 첫 교재는 `RPM 중3-2 수학`(텍스트 PDF · 120쪽)이다.

## 설계 원칙 (Math books prototype 115세션의 교훈에서)

- **AI는 원천을 만들지 않는다.** 문항 본문·정답·해설은 사람이 만든 PDF/HWPX 에서 온다. AI 역할은 경계 제안까지.
- **텍스트 PDF 는 비전 AI 없이 자른다.** 글자 좌표(번호 배지 서체·유형 헤더·공통 지시문)로 경계를 정하고, 잉크 투영으로 하단을 조인다. RPM 중3-2 는 644문항이 17초·토큰 0으로 나왔다.
- **문항 = 영역의 집합.** 「[0025~0029] 오른쪽 그림과 같이 …」 같은 공통 지시문은 `passage` 영역으로 범위 안 문항마다 붙는다(그림이 문항 줄 옆까지 내려와도 안 잘린다).
- **규칙 하나 = 검사 하나.** 번호 연속성·페이지별 개수·너무 짧거나 긴 크롭은 `validation.json` 에 남고, 걸린 문항만 `flagged` 로 교재관리 화면에 뜬다.
- **저장 후 재조회.** 패키지 등록은 문항 수를 서버에서 다시 읽어 맞을 때만 「등록 완료」다. 정오답 기록은 서버 응답 행을 그대로 화면에 반영한다.
- **사람 gate 는 둘.** ① 문항 경계 확정(교재당, `qa/` 이미지) ② 첫 인쇄본 확인.

## 흐름

```
교재 PDF ─(로컬 CLI · 비전 0)─▶ 패키지(manifest.json + items/*.jpg + qa/) ─(교재관리 화면 · 폴더 업로드)─▶
Supabase problem_bank_* + Storage problem-bank ─▶ 오답관리 › 교재별 오답 (번호 그리드 · 학생별 기록) ─▶ 선택 인쇄 (A4 2단 · 워터마크)
```

### 1. 원천화 (로컬)

```powershell
node scripts/problem-bank/ingest-text-pdf.mjs --pdf "C:\Users\PC\Desktop\rpm 중3-2 수학.pdf" `
  --out output\problem-bank\rpm-m3-2 --title "RPM 중3-2 수학" --folder "중3 / RPM" --grade 중3 --subject 수학
```

- 출력: `manifest.json`(교재·단원·문항·영역 bbox·검수 상태) · `validation.json` · `items/*.jpg`(220 DPI) · `pages/`(미리보기) · `qa/`(경계 상자를 그린 페이지 — 사람 확인용).
- 경계 규칙은 `src/domains/problems/textPdfSegmenter.js`(순수 함수 · `npm run test:problem-bank-segmenter` 가 RPM 실제 좌표 픽스처로 검증).
- 스캔 PDF(글자 레이어 없음)는 이 도구가 거부한다. 2단계에서 「로컬 후보 + 비전 검증 1회」로 붙인다(docs 2부 §3 토큰 구조).
- RPM 의 「중단원 마무리」처럼 2자리 번호 체계는 아직 안 잡는다(별도 번호 계열).

### 1-1. 스캔 PDF 원천화 (로컬 · EBS 올림포스)

```powershell
node scripts/problem-bank/ingest-scan-pdf.mjs --pdf "C:\Users\PC\Downloads\2025년 EBS 올림포스 공통수학1 (46591)Marked.pdf" `
  --out output\problem-bank\olympos-cm1 --title "올림포스 공통수학1" --folder "고1 / 올림포스" --grade 고1 --subject 수학
```

- 글자 레이어가 없는 스캔(쪽마다 이미지 1장 · `/Rotate` 90/180/270 · 살짝 기울어짐)을 위한 CLI. 출력 형식은 텍스트 PDF 와 같아 「패키지 등록」이 그대로 받는다. 비전 AI 호출 0, 로컬 tesseract(무료)만 쓴다.
- **번호 배지 대신 EBS 문항 코드**(`▶ 25445-0017`)를 쓴다. 코드는 책 전체에서 연속·유일해 `number_label`(4자리)이 되고, 풀이가 딸린 예제·예시는 코드가 없어 자동으로 빠진다. 구역 이름(기본 유형 익히기·유형 확인·서술형 연습장·내신·수능 고난도·대단원 종합문제·수행평가)과 구역 안 순번은 `type_label`(「서술형 연습장 02」)로 들어간다.
- 쪽 처리: 원본 렌더(220dpi)에서 tesseract 두 모드(흩어진 글자 11 · 블록 6)를 합쳐 코드 토큰을 찾고 → 기울기 보정(투영 분산) → 코드 줄의 색 배지(01·유제 3) 왼쪽 ~ 코드 오른쪽이 문항 폭, 같은 컬럼 다음 코드·22pt 빈 줄이 아래. 2단·전폭이 섞인 쪽도 문항마다 폭이 정해져 쪽 단위 규칙이 없다. 전폭 문항은 `layout: "wide"` 로 표시된다(인쇄 2단에서 두 열 차지).
- 검사: 접두 오독(26445)은 같은 책으로 받고, 책 순서 밖 번호(0805)는 `validation.dropped_codes` 로 버리며, 번호 연속성·flagged(`left_fallback`·`low_ocr_conf`·`too_short`)를 남긴다. 단원은 단원 시작 쪽 큰 제목 + 홀수 쪽 바닥글(번호가 이어질 때만 새 단원) 투표로 정하고, 대단원 종합문제는 `R01~03` 같은 묶음 단원으로 따로 둔다.
- 필요: `winget install UB-Mannheim.TesseractOCR`(+ `%LOCALAPPDATA%\tessdata\kor.traineddata` — tessdata_fast. 없으면 구역·단원 이름 없이 코드만으로 진행). 공통수학1 178쪽 ≈ 8분.
- 실측(공통수학1): 313문항 · 8소단원 + 종합문제 4 · 번호 연속 · 버린 코드 0 · flagged 1. 경계 규칙은 `src/domains/problems/scanPdfSegmenter.js`(`npm run test:problem-bank-scan-segmenter` 가 실제 OCR 토큰 픽스처로 검증).
- 아직 안 되는 것: 유형편·고난도 판 레이아웃 확인.

#### 스캔 교재의 정답·해설 (책 뒤 「정답과 풀이」)

```powershell
node scripts/problem-bank/ingest-scan-answers.mjs --pdf "C:\Users\PC\Downloads\2025년 EBS 올림포스 공통수학1 (46591)Marked.pdf" --out output\problem-bank\olympos-cm1
```

- `--out` 은 위 문항 패키지 폴더(manifest.json 필요). 해설 쪽은 문항 뒤 쪽(`pdf_page` 최댓값 + 1)부터 자동으로 잡고, 문항 코드가 있는 쪽·빠른정답표(한 줄에 번호 셋 이상)·MEMO 는 건너뛴다. 출력은 RPM 과 같은 `manifest-answers.json` + `answers/` + `solutions/` + `qa/solution-pNNN.jpg`.
- 해설에는 문항 코드가 없고 구역마다 번호가 01 부터 다시 시작한다. 그래서 풀이 시작 배지(컬럼 왼쪽 여백의 굵은 9.5pt 이상 숫자)를 읽는 순서대로 모은 뒤 **문항 순서와 편집 거리 정렬**(`alignSegmentsToItems`: 번호 일치 0 · 못 읽음 0.3 · 오독 2 · 조각/문항 건너뜀 1.5)로 대응시킨다. 머리글의 외딴 숫자 같은 조각은 버려지고(`unmatched_segments`), 배지를 못 읽은 문항은 `missing` 에 남는다. 수행평가는 해설이 없어 대상에서 뺀다.
- 풀이 상자는 배지 위 −3pt 부터 같은 컬럼 다음 배지·다음 색 띠(구역 상자·단원 머리)·컬럼 바닥 가운데 먼저 오는 것까지, 잉크로 조인다. 컬럼·쪽 맨 위에 배지 없이 이어지는 글은 직전 풀이에 이어 붙인다. 빠른정답은 각 풀이의 「답」 아이콘(5~10pt 검정 틀 안 흰 글자 · 네 귀퉁이 검정 — 채점 기준표의 ❶❷❸ 은 귀퉁이가 희어 제외)이 있는 줄을 오린다.
- 실측(공통수학1): 아래 STATUS 참고. 못 읽은 배지는 `qa/solution-pNNN.jpg` 에서 상자가 없는 풀이로 보인다 — 그 문항은 해설 없이 등록되고, 다음 실행에서 OCR 규칙을 고친다.
- 실행이 끝나면 패키지 폴더에 `검수-필요.md` 가 생긴다: 문항 수 = 해설 대상 수 = 빠른정답 수가 맞는지와, 해설을 못 찾은 문항(쪽·번호)·번호가 안 맞는 해설·답 줄이 없는 풀이·버린 조각을 사람이 먼저 볼 순서로 정리한다. 원칙적으로 세 개수는 같아야 하며, 차이는 전부 이 목록에 이유와 함께 남는다.

#### 번호 배지형 스캔 교재 (베이직쎈)

```powershell
node scripts/problem-bank/ingest-scan-badges.mjs --pdf "C:\…\베이직쎈-공통수학2.pdf" --out output\problem-bank\ssen-basic-cm2 `
  --title "베이직쎈 공통수학2" --folder "고1 / 쎈" --grade 고1 --subject 수학 --pages 2-15 `
  --units "01 평면좌표,02 직선의 방정식,…" --concepts "01 두 점 사이의 거리,02 수직선 위의 선분의 내분점,…"
node scripts/problem-bank/ingest-scan-answers.mjs --pdf "C:\…\베이직쎈 공통수학2답지.pdf" --out output\problem-bank\ssen-basic-cm2 --layout ssen --pages 2-10
```

- 문항 코드가 없고 번호가 구역(개념 쪽·기본&핵심 유형·실전 감각 UP)마다 다시 시작하는 책. `number_label` 은 「인쇄 쪽-번호」(`12-13`)라 학생이 책에서 찾는 방식 그대로이고 유일하다. 앵커는 컬럼 왼쪽의 굵은 두 자리 배지(개념 쪽 주황·유형 쪽 진초록·실전 쪽 검정) — 후보 x 를 4pt 칸으로 묶어 가장 많은 칸을 배지 x 로 잡는다(두 OCR 모드가 같은 배지를 다른 x 로 읽어도 흔들리지 않게). 배지 번호는 쪽 안에서 1씩 늘어야 하므로 중복·0·앞자리 오독(±10)은 순서로 고치고(`number_corrected`), 한두 개 차이는 읽은 값을 믿고 `number_gap` 으로만 표시한다.
- 구역은 머리글 한글 OCR 로: 개념 쪽은 오른쪽 위 「유형 | 001~004」 목록 + 왼쪽 위 큰 색 번호 상자, 유형 쪽은 「개념 | 01」·「기본&핵심 유형」, 실전 쪽은 「실전 감각 UP」. 「유형 004 제목」 라벨(연한 초록 3자리 · 흑백 쪽에서는 3자리라는 것으로)은 배지가 아니라 `type_label`(「유형 004 선분의 길이의 제곱의 합의 최솟값」)이 되고, 개념 쪽 `type_label` 은 `--concepts` 로 준 차례 제목(「개념 03 좌표평면 위의 선분의 내분점」 — 장식 서체라 OCR 이 못 읽는다). 개념 쪽의 말풍선 아이콘 줄(공통 지시문)은 `passage` 영역으로 뒤따르는 문항에 붙는다.
- 답지(별책)는 `--layout ssen`: 양쪽 컬럼(가운데 「베이직쎈 BOX」 띠 제외)·회색 「답」 상자(세로 테두리 두 줄로 찾음)·문항 순번은 `number_label` 뒤 두 자리. 대응은 올림포스와 같은 편집 거리 정렬.
- 실측(1단원 = 중단원 01 평면좌표, 본책 2~15쪽): 문항 104 · flagged 1 · 해설 95/104 · 답 줄 81 · 번호 불일치 3 · 해설 못 찾은 문항 9(패키지의 `검수-필요.md` 에 쪽·번호 정리). 전권(194쪽)은 문항 1,582개가 잘리지만 **중단원 경계(개념 쪽 → 실전 쪽 전환 규칙)가 흔들려 단원이 42개로 쪼개진다** — 전권 등록 전에 `--unit-pages` 같은 쪽 범위 지정을 붙여야 한다.

### 1-2. 정답·해설 원천화 (로컬)

```powershell
node scripts/problem-bank/ingest-answers.mjs `
  --solutions "C:\Users\PC\Desktop\교재 pdf\중등RPM3-2[2020]_정답.pdf" --out output\problem-bank\rpm-m3-2
```

- `--out` 을 **문항 패키지 폴더(ingest-text-pdf 의 출력)** 로 주면 `manifest.json` 옆에 `manifest-answers.json`·`answers/`·`solutions/` 가 들어가고, 교재관리 「패키지 등록」에서 폴더 하나로 문항·정답·해설이 한 번에 올라간다. `--book-id` 는 그 `manifest.json` 에서 읽는다(다른 폴더로 낼 때만 지정).
- 「정답과 풀이」 PDF 를 같은 세그먼터로 자른다: 번호 배지(12pt) · 2컬럼 · 「본문 p.9, 11」 배너 줄에서 끊기 · 잉크 하단. 컬럼·쪽 맨 위에 배지 없이 이어지는 풀이는 앞 문항에 이어 붙여 한 장으로 만든다(RPM 44건, 채점 기준표 포함).
- 빠른정답은 별도 PDF 를 쓰지 않고 해설 안의 「답」 아이콘(U+E34C) 줄을 오려 낸다 — 분수·근호가 글자로 안 풀리므로 이미지로 두고, 답이 그래프·표면 그 상자 끝까지 넓힌다. RPM 3-2: 해설 644/644 · 답 줄 644/644, 번호 연속, 21초.
- **판(edition) 주의**: 「RPM 중학 수학 3-2 빠른 정답.pdf」는 673문항판(0001 답 12/13)이고 교재·「중등RPM3-2[2020]_정답.pdf」는 644문항판(0001 답 15/17)이라 빠른정답 PDF 는 쓰지 않았다. 다른 교재도 `qa/` 첫 쪽에서 번호·답이 교재와 맞는지 먼저 본다.
- 출력: `manifest-answers.json` · `answers/*.jpg` · `solutions/*.jpg` · `qa/solution-pNNN.jpg`(초록 = 해설 상자, 주황 = 이어 붙인 조각, 자홍 = 답 줄).

### 2. 등록 (교재관리 화면)

`교재관리 › 패키지 등록 › 패키지 폴더 선택 › 등록`. manifest 를 먼저 `POST /api/problem-bank/import` 로 넣고 이미지를 20장씩 `POST /api/problem-bank/images` 로 올린다. 끝나면 `GET /api/problem-bank/books` 로 문항 수를 재조회해 대조한다.

Supabase SQL: `supabase/20260912_problem_bank.sql` (SQL Editor 에서 1회 적용). Storage 버킷 `problem-bank` 는 첫 업로드 때 서버가 private 로 만든다.

등록 전에 `/health` 로 API 를 깨우고(Render 재배포·절전 중이면 「Failed to fetch」가 난다) 네트워크 오류는 자동으로 몇 번 다시 시도한다. 교재 상세의 「이미지 누락 검사」(`GET /api/problem-bank/book-audit`)는 영역 표의 storage_path 와 Storage 파일 목록을 대조해 빠진 파일을 보여 준다 — 등록이 중간에 끊겼거나 패키지가 바뀐 뒤 이미지가 안 보일 때 쓴다.

폴더에 `manifest-answers.json` 이 함께 있으면 「패키지 등록」이 문항 → 이미지 → 정답·해설 → 이미지 순으로 올리고 문항 수·해설 수를 재조회해 대조한다. 정답·해설만 따로 올릴 때는 `교재관리 › 교재 상세 › 정답·해설 패키지 등록`에서 그 폴더를 선택한다. `POST /api/problem-bank/import-answers` 가 번호(number_label)로 문항을 찾아 `answer`·`solution` 영역을 교체하고 `has_solution` 을 다시 정한 뒤, 이미지를 `answers/`·`solutions/` 아래로 올린다. 문항 패키지를 다시 등록해도 정답·해설 영역과 `has_solution` 은 남는다. SQL: `supabase/20260913_problem_bank_answers.sql`(`answer` 영역 종류 허용 · 1회 적용).

### 3. 오답 기록·인쇄 (오답관리)

두 탭이 같은 보드(`BookWrongAnswerBoard`)를 다른 mode 로 쓴다.

- **학생별 오답** (`mode="student"`): 위 FilterBar 에서 학생을 고르면 그 학생 기준 색 — 기록 없음 회색 · 오답 빨강 · 정답 초록 · **재풀이 정답은 흰 바탕 + 초록 점선 테두리 + 「재」**(정답과 한눈에 구분). 회차를 고르고 번호를 누르면 기록 없음 → 오답 → 정답 → 기록 없음 순으로 돈다(`POST /api/problem-bank/attempts`, 같은 학생·문항·회차는 한 행). 「오답 전체 선택」은 그 학생의 최신 회차 오답. 아래 「교재 외 오답 메모」 표는 등록되지 않은 교재용으로 남겨 뒀다.
- **교재별 오답** (`mode="class"`): 학생 선택이 없다. 학생별 오답에서 쌓인 기록을 반 전체(학년 필터)로 집계해 오답률 띠로 보여 주고, 번호를 누르면 인쇄·PPT 대상으로 고른다. 「오답률 N% 이상 선택」(30/50/70)으로 많이 틀린 문항을 한 번에 고른다. 선생님이 재량으로 문항을 뽑아 반 전체에 나눠 줄 때 쓴다.
- **학생 앱** › 오답 탭: `GET /api/portal-problem-bank`(학생 세션)로 자기 기록이 있는 교재·문항(틀림 / 재풀이 정답)을 보고, 번호를 누르면 `POST /api/portal-problem-bank/item-images` 로 자기 문항 이미지만 받는다. 읽기 전용.
- 미리보기 패널은 넓어졌고 이미지를 누르면 확대 레이어로 본다. 이미지 파일이 Storage 에 없으면 그 자리에 안내가 뜬다(교재관리 › 이미지 누락 검사).
- 「인쇄 · PPT」 → A4 세로 1단/2단(2단은 실제 2열 grid 라 화면·인쇄 모두 양쪽에 문항이 놓인다. 쪽 폭의 62% 를 넘는 전폭 문항은 두 열을 차지하고 그 다음 문항은 왼쪽 열에서 다시 시작한다 — `assignPrintColumns`), 문항마다 출처 줄(교재 · 단원 · 번호) + 원문 이미지 + 풀이 공간. 워터마크는 시험지 워터마크와 같은 로고·불투명도 0.1·폭 50%이며 이미지 위에 multiply 로 얹는다. 빠른정답·해설은 등록된 것이 있을 때만 켤 수 있다: 빠른정답은 새 쪽에 「번호 · 답 줄 이미지(원본 크기) · 교재 번호」 격자, 해설은 새 쪽에 문항과 같은 번호로 해설 이미지. 공통 지시문 그룹도 구성 문항마다 자기 답·해설이 나온다. 미리보기 패널에서도 정답과 해설(펼치기)을 볼 수 있다.
- 「PPT 저장」: 표지 + 문항마다 16:9 슬라이드(출처 줄 · 번호 · 문항 이미지 · 공통 지시문은 강조 상자 · 학원 로고 워터마크), 「해설」을 켜 두면 문항 뒤에 해설 슬라이드(답 줄 이미지 포함). 반에서 많이 틀린 문항만 뽑아 설명할 때 쓴다. pptxgenjs 는 버튼을 누를 때만 내려받는 별도 청크다.
- 공통 지시문 문항(「[0001~0006] 오른쪽 그림의 직각삼각형 ABC에서 …」)은 지시문·그림·형제 문항이 든 블록을 한 번 싣고, 고른 번호 자리에 검정 강조 상자를 얹는다. 같은 블록의 문항을 여러 개 고르면 한 항목으로 묶인다. 비전 토큰은 들지 않는다(좌표만 쓴다).

## 코드 위치

| 역할 | 파일 |
|---|---|
| 경계 규칙(순수) | `src/domains/problems/textPdfSegmenter.js`(텍스트) · `scanPdfSegmenter.js`(스캔·OCR 토큰) |
| 원천화 CLI | `scripts/problem-bank/ingest-text-pdf.mjs`(문항) · `ingest-scan-pdf.mjs`(코드형 스캔 · 올림포스) · `ingest-scan-badges.mjs`(배지형 스캔 · 쎈) · `ingest-answers.mjs`(텍스트 정답·해설) · `ingest-scan-answers.mjs`(스캔 정답·해설 · `--layout olympos|ssen`) · `scanTools.mjs`(tesseract·기울기·색/잉크 공용) · `pdfTools.mjs`(공용 렌더·잉크·크롭·qa 헬퍼) |
| DB 표 | `supabase/20260912_problem_bank.sql` · `20260913_problem_bank_answers.sql` · `src/shared/server/tenantScope.js` |
| 서버 저장소·라우트 | `src/shared/server/problemBankStore.js` · `src/shared/server/problemBankRouteRegistry.js` (api/server.js 에서 주입) |
| 화면 | `src/domains/problems/BookWrongAnswerBoard.jsx`(교재별·학생별 보드) · `ProblemBankCenter.jsx`(교재관리) · `WrongAnswerPrintSheet.jsx`(오답지) · `problemBankPptx.js`(PPT) · `problemBankModel.js` · `problemBankApi.js` · `problemBank.css` · 학생 앱 `src/domains/portals/StudentWrongAnswersTab.jsx` |
| 가상 데이터 | `scripts/safe-fixtures/problemBankFixture.mjs` (`npm run dev:safe`) |
| 검사 | `npm run test:problem-bank-segmenter` · `test:problem-bank-route-registry` · `test:problem-bank-store` · `tests/browser/problem-bank.spec.js` · `problem-bank-package.spec.js`(폴더 하나 등록) |

## LaTeX 조판 오답은행

스캔 화질이 낮아 크롭을 그대로 쓰기 어려운 책은 문항을 LaTeX 로 다시 조판한다(`latex-bank/README.md`, `scripts/latex-bank/build.mjs`). 베이직쎈 공통수학2 1단원 104문항이 시범(원본 전사 · TikZ 그림 4 · xelatex 빌드 · 정독 자산).

## 남은 일

1. 운영 Supabase 에 SQL 적용 → RPM 패키지 등록 → 첫 인쇄본 확인 (사람 gate).
2. 정답·해설은 됐다(RPM 644/644). 다른 교재는 해설 PDF 의 「답」 글리프·배너 문구가 다를 수 있어 `ANSWER_ICON`·`SOLUTION_BANNER_PATTERN` 을 교재별 프로파일로 뺄 것.
3. 스캔 PDF 경로: 올림포스 공통수학1 문항·정답·해설은 됐다(1-1). 남은 것 — ① 공통수학2·유형편·고난도 6권을 같은 CLI 로 돌려 qa 확인 ② 해설 배지 OCR 누락(missing) 줄이기 ③ 쎈(다른 코드 체계)은 별도 프로파일.
4. HWPX(EBS) 경로: 한글 → PDF(글자 레이어 유지)로 변환해 같은 CLI 로 처리.
5. 경계 검수 화면에서 bbox 를 직접 고치는 편집기(지금은 CLI 재실행).
6. 자료함 화면은 사이드바에서 빠졌고(`resources` 뷰 계약·포털 자료 공유 저장 계약은 유지) 필요하면 코드째 제거한다.
7. 교재관리의 교재 수정(제목·폴더·학년·과목)·삭제는 있다. 문항 경계를 화면에서 직접 고치는 편집기는 아직 없다.
