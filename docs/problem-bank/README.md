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
- RPM 의 「중단원 마무리」처럼 2자리 번호 체계는 아직 안 잡는다(별도 번호 계열). 정답·해설은 별책이라 이번 패키지에 없다.

### 2. 등록 (교재관리 화면)

`교재관리 › 패키지 등록 › 패키지 폴더 선택 › 등록`. manifest 를 먼저 `POST /api/problem-bank/import` 로 넣고 이미지를 20장씩 `POST /api/problem-bank/images` 로 올린다. 끝나면 `GET /api/problem-bank/books` 로 문항 수를 재조회해 대조한다.

Supabase SQL: `supabase/20260912_problem_bank.sql` (SQL Editor 에서 1회 적용). Storage 버킷 `problem-bank` 는 첫 업로드 때 서버가 private 로 만든다.

### 3. 오답 기록·인쇄 (오답관리 › 교재별 오답)

- 왼쪽 폴더 트리 → 교재 → 단원별 번호 그리드. 색은 반 전체 오답률 띠(미풀이 / 전원 정답 / 1~20 / … / 81%~).
- 학생·회차를 고르고 번호를 누르면 오답 → 정답 → 지움 순으로 돈다(`POST /api/problem-bank/attempts`, 같은 학생·문항·회차는 한 행).
- 번호 색: 학생을 고르면 그 학생 기준(기록 없음 회색 · 오답 빨강 · 정답 초록 · 재풀이 정답 파랑)이고 클릭 순서는 기록 없음 → 오답 → 정답 → 기록 없음이다. 학생을 고르지 않으면 반 전체 오답률 띠다. 퇴원생은 목록에 없다.
- 「인쇄 선택」 모드나 Ctrl+클릭으로 문항을 고르고, 「오답 전체 선택」은 그 학생의 최신 회차 오답을 고른다.
- 「선택 인쇄」 → A4 세로 1단/2단, 문항마다 출처 줄(교재 · 단원 · 번호) + 원문 이미지 + 풀이 공간. 워터마크는 시험지 워터마크와 같은 로고·불투명도 0.1·폭 50%이며 이미지 위에 multiply 로 얹는다. 빠른정답·해설은 등록된 것이 있을 때만 켤 수 있다.
- 공통 지시문 문항(「[0001~0006] 오른쪽 그림의 직각삼각형 ABC에서 …」)은 지시문·그림·형제 문항이 든 블록을 한 번 싣고, 고른 번호 자리에 검정 강조 상자를 얹는다. 같은 블록의 문항을 여러 개 고르면 한 항목으로 묶인다. 비전 토큰은 들지 않는다(좌표만 쓴다).

## 코드 위치

| 역할 | 파일 |
|---|---|
| 경계 규칙(순수) | `src/domains/problems/textPdfSegmenter.js` |
| 원천화 CLI | `scripts/problem-bank/ingest-text-pdf.mjs` |
| DB 표 | `supabase/20260912_problem_bank.sql` · `src/shared/server/tenantScope.js` |
| 서버 저장소·라우트 | `src/shared/server/problemBankStore.js` · `src/shared/server/problemBankRouteRegistry.js` (api/server.js 에서 주입) |
| 화면 | `src/domains/problems/BookWrongAnswerBoard.jsx`(교재별 오답) · `ProblemBankCenter.jsx`(교재관리) · `WrongAnswerPrintSheet.jsx`(오답지) · `problemBankModel.js` · `problemBankApi.js` · `problemBank.css` |
| 가상 데이터 | `scripts/safe-fixtures/problemBankFixture.mjs` (`npm run dev:safe`) |
| 검사 | `npm run test:problem-bank-segmenter` · `npm run test:problem-bank-route-registry` · `tests/browser/problem-bank.spec.js` |

## 남은 일

1. 운영 Supabase 에 SQL 적용 → RPM 패키지 등록 → 첫 인쇄본 확인 (사람 gate).
2. 정답·해설 원천: RPM 정답 별책 PDF 를 같은 방식으로 자르고 번호로 연결(`solution` 영역).
3. 스캔 PDF 경로(쎈): 로컬 후보 + 비전 검증, 교재별 레이아웃 프로파일 재사용.
4. HWPX(EBS) 경로: 한글 → PDF(글자 레이어 유지)로 변환해 같은 CLI 로 처리.
5. 경계 검수 화면에서 bbox 를 직접 고치는 편집기(지금은 CLI 재실행).
6. 자료함 화면은 사이드바에서 빠졌고(`resources` 뷰 계약·포털 자료 공유 저장 계약은 유지) 필요하면 코드째 제거한다.
7. 교재관리의 교재 수정(제목·폴더·학년·과목)·삭제는 있다. 문항 경계를 화면에서 직접 고치는 편집기는 아직 없다.
