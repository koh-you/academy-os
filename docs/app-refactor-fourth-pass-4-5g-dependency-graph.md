# App/API 4차 리팩터링 4-5g 의존성 그래프

업데이트: 2026-08-16

## 이동 전 클러스터

1. `api/data/ssenTypeIndex.json` → subject 이름/typeCode index → 과목 문자열·문항 typeCode 추론 → scope/unit 매칭 → catalog 응답 및 row-fill prompt 후보 포맷.
2. 시험분석 output 입력·blog block·card model 약 430줄 → `buildExamAnalysisOutputPrompt` → output-draft provider 함수 → 저장/event orchestration.
3. 확정 문항 경계 + 쎈 후보 → `buildPdfQuestionRowFillPrompt` → PDF row-fill provider 함수 → loose JSON parse/normalize → 저장/event orchestration.

큰 output 콘텐츠 모델과 두 prompt builder를 함께 이동하면 변경 반경이 커진다. 따라서 provider transport와 catalog만 분리하고 prompt·parse·normalize·DB orchestration은 server에 남기는 4-5d 패턴을 선택했다.

## 이동 후 소유권

- `src/shared/server/examAnalysisSsenCatalog.js`: JSON 로드, 과목 정규화/추론, typeCode fallback, scope/unit 매칭, catalog와 prompt 후보 포맷.
- `api/routes/commentPolish.js`: Anthropic/OpenAI text/PDF transport와 row-fill/output-draft의 얇은 provider wrapper. DB·Supabase import 없음.
- `api/server.js`: provider/model 선택, row-fill/output prompt 생성, loose JSON parse, 결과 normalize, source 저장과 event 기록.
- `src/shared/server/examAnalysisReadRouteRegistry.js`: catalog 함수를 dependency로 받아 기존 GET 응답을 유지.

## 보존 계약

- Anthropic blog 6500 / Instagram 4800 tokens, OpenAI 동일 output token 한도.
- PDF row-fill 양 provider 6000 tokens, 기존 파일명/base64 payload와 오류 문구.
- 쎈 과목 문자열, typeCode 기반 fallback, scope range/unit 매칭, 최대 240개 prompt 후보.
- 유료 AI 선택 우선순위와 throw 의미, JSON parse/normalize shape, DB/event 순서.
- Vercel Hobby API JS inventory 12/12. 새 모듈은 `api/` 아래에 추가하지 않는다.
