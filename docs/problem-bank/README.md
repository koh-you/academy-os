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
- 「인쇄 · PPT」 → A4 세로 1단/2단(2단은 실제 2열 grid 라 화면·인쇄 모두 양쪽에 문항이 놓인다), 문항마다 출처 줄(교재 · 단원 · 번호) + 원문 이미지 + 풀이 공간. 워터마크는 시험지 워터마크와 같은 로고·불투명도 0.1·폭 50%이며 이미지 위에 multiply 로 얹는다. 빠른정답·해설은 등록된 것이 있을 때만 켤 수 있다: 빠른정답은 새 쪽에 「번호 · 답 줄 이미지(원본 크기) · 교재 번호」 격자, 해설은 새 쪽에 문항과 같은 번호로 해설 이미지. 공통 지시문 그룹도 구성 문항마다 자기 답·해설이 나온다. 미리보기 패널에서도 정답과 해설(펼치기)을 볼 수 있다.
- 「PPT 저장」: 표지 + 문항마다 16:9 슬라이드(출처 줄 · 번호 · 문항 이미지 · 공통 지시문은 강조 상자 · 학원 로고 워터마크), 「해설」을 켜 두면 문항 뒤에 해설 슬라이드(답 줄 이미지 포함). 반에서 많이 틀린 문항만 뽑아 설명할 때 쓴다. pptxgenjs 는 버튼을 누를 때만 내려받는 별도 청크다.
- 공통 지시문 문항(「[0001~0006] 오른쪽 그림의 직각삼각형 ABC에서 …」)은 지시문·그림·형제 문항이 든 블록을 한 번 싣고, 고른 번호 자리에 검정 강조 상자를 얹는다. 같은 블록의 문항을 여러 개 고르면 한 항목으로 묶인다. 비전 토큰은 들지 않는다(좌표만 쓴다).

## 코드 위치

| 역할 | 파일 |
|---|---|
| 경계 규칙(순수) | `src/domains/problems/textPdfSegmenter.js` |
| 원천화 CLI | `scripts/problem-bank/ingest-text-pdf.mjs`(문항) · `ingest-answers.mjs`(정답·해설) · `pdfTools.mjs`(공용 렌더·잉크 헬퍼) |
| DB 표 | `supabase/20260912_problem_bank.sql` · `20260913_problem_bank_answers.sql` · `src/shared/server/tenantScope.js` |
| 서버 저장소·라우트 | `src/shared/server/problemBankStore.js` · `src/shared/server/problemBankRouteRegistry.js` (api/server.js 에서 주입) |
| 화면 | `src/domains/problems/BookWrongAnswerBoard.jsx`(교재별·학생별 보드) · `ProblemBankCenter.jsx`(교재관리) · `WrongAnswerPrintSheet.jsx`(오답지) · `problemBankPptx.js`(PPT) · `problemBankModel.js` · `problemBankApi.js` · `problemBank.css` · 학생 앱 `src/domains/portals/StudentWrongAnswersTab.jsx` |
| 가상 데이터 | `scripts/safe-fixtures/problemBankFixture.mjs` (`npm run dev:safe`) |
| 검사 | `npm run test:problem-bank-segmenter` · `test:problem-bank-route-registry` · `test:problem-bank-store` · `tests/browser/problem-bank.spec.js` · `problem-bank-package.spec.js`(폴더 하나 등록) |

## 남은 일

1. 운영 Supabase 에 SQL 적용 → RPM 패키지 등록 → 첫 인쇄본 확인 (사람 gate).
2. 정답·해설은 됐다(RPM 644/644). 다른 교재는 해설 PDF 의 「답」 글리프·배너 문구가 다를 수 있어 `ANSWER_ICON`·`SOLUTION_BANNER_PATTERN` 을 교재별 프로파일로 뺄 것.
3. 스캔 PDF 경로: EBS 올림포스(공통수학1·2 / 유형편 / 고난도, 6권)는 쪽마다 이미지 1장·글자 레이어 없음·/Rotate 90/180/270 과 살짝 기울어진 스캔이다. 렌더 → 기울기 보정(투영 프로파일 각도 탐색) → 잉크 기반 컬럼·번호 후보 → 번호 인식(로컬 OCR 또는 비전 1회) 순으로 붙인다. 쎈도 같은 경로.
4. HWPX(EBS) 경로: 한글 → PDF(글자 레이어 유지)로 변환해 같은 CLI 로 처리.
5. 경계 검수 화면에서 bbox 를 직접 고치는 편집기(지금은 CLI 재실행).
6. 자료함 화면은 사이드바에서 빠졌고(`resources` 뷰 계약·포털 자료 공유 저장 계약은 유지) 필요하면 코드째 제거한다.
7. 교재관리의 교재 수정(제목·폴더·학년·과목)·삭제는 있다. 문항 경계를 화면에서 직접 고치는 편집기는 아직 없다.
