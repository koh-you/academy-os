# 시험분석 Canva 중심 공개 산출물 워크플로우

작성일: 2026-07-06

## 목적

시험분석 공개 산출물 MVP는 Canva를 최종 카드뉴스 디자인 편집기로 둔다. 웹앱은 Canva를 대체하지 않고, 시험분석 원본, AI 초안, 선생님 저장본, Canva 삽입 재료, 블로그/인스타 문구를 관리한다.

핵심 원칙은 `AI 초안 -> 선생님 검수/수정 -> 선생님 저장본 원본화`이다. Canva에서 문구를 더 예쁘게 고친 경우에도 최종 문구는 웹앱 선생님 저장본에 다시 반영해야 한다. 그렇지 않으면 다음 시험 자동화 때 Canva 최종본과 웹앱 원본이 갈라진다.

## 역할 분담

### Canva

- 최종 카드뉴스 디자인 편집기
- 10장 카드의 최종 배치, 색감, 이미지 조정, 업로드용 이미지 export
- 예외적인 줄바꿈, 폰트 크기, 이미지 위치를 사람이 직접 보정하는 마지막 편집 공간

### 웹앱

- 시험분석 v2 원본과 선생님 검수 저장본 보관
- 블로그/인스타/Canva용 AI 초안 생성
- 선생님 수정본 저장과 새로고침 유지
- Canva 붙여넣기용 카드별 문구, 차트 PNG, crop 파일명 가이드, 블로그 초안, 인스타 캡션 export
- Canva에서 수정한 최종 문구를 다시 선생님 저장본으로 반영하는 원본 관리 화면

### JS/CSS 렌더러

- 최종 카드뉴스 제작기가 아니라 `Canva 재료 미리보기/구조 검수` 도구
- 10장 흐름, 카드별 문구 길이, 주요문항 반복 수, 차트/이미지 재료 위치 확인
- 장기적으로 Puppeteer PNG 자동화 후보로 유지

### AI

- 선생님 메모를 학부모가 읽기 쉬운 문장으로 다듬기
- 블로그 초안에서 이모티콘, 형광펜 태그, 모바일 줄나눔 제안
- 인스타 카드 문구를 짧게 압축
- 금지: 문항 수, 시험범위, 문항번호, 정답, 풀이 사실 추측
- 금지: 선생님 저장본 또는 Canva 최종 수정본 자동 덮어쓰기

## 저장 원천

### 구조적 사실

- 원천: `exam_analysis_runs`, `exam_analysis_questions`, `exam_analysis_sources`
- 화면 모델: `finalPreviewModel`
- 내용: 학교, 학년, 고사, 과목, 문항 수, 단원/난이도 분포, 선생님이 검수 저장한 문항별 필드
- 원칙: AI가 새로 만들지 않는다. 카드/블로그는 이 값을 근거로만 읽는다.

### 선생님 산출물 메모

- 원천: `exam_analysis_runs.audit_summary.outputDrafts.inputs`
- 현재 필드: `oneLineReview`, `flowReview`, `scoreGapPoint`, `nextStudyPlan`, `imageSlotNotes`, `schoolVariationNotes`, `blogBlock*`, `keyQuestionBlocks`
- 역할: Canva 카드 문구, 블로그 문단, 인스타 캡션의 사람이 확정한 입력 원천

### AI 초안과 선생님 저장본

- 원천: `exam_analysis_runs.audit_summary.outputDrafts.blog`, `outputDrafts.instagram`
- 읽기 우선순위: `teacherDraft > aiDraft > empty`
- AI 재생성은 `teacherDraft`가 없는 경우 또는 선생님이 명시적으로 재생성을 동의한 경우에만 편집 시작점으로 쓴다.

### Crop 이미지

- MVP에서는 웹앱이 자동 crop하지 않는다.
- 선생님이 직접 문제 이미지와 손풀이 이미지를 crop한다.
- 웹앱은 파일명/삽입 위치 가이드를 export한다.
- 추후 업로드 UI를 만들 경우 Storage 경로를 별도 gate에서 설계한다.

## 화면 재설계 기준

산출물 패널은 아래 순서로 정리한다.

1. `원본/저장 상태`
   - 분석 run, 최종 검수 저장 여부, 산출물 저장 상태
   - 새로고침 유지 여부와 `teacherDraft > aiDraft` 우선순위 표시

2. `선생님 원천 메모`
   - 한줄 총평, 시험 흐름, 점수 갈림, 다음 대비, 학교별 변주
   - 이 영역은 카드/블로그/인스타가 공유하는 source of truth

3. `GPT Image 기획 패킷 / Canva 재료 보드`
   - 인앱 HTML/CSS/JS 카드 렌더러였던 `블로그형 카드 디자인 Gate 3`는 삭제됐다.
   - 웹앱은 카드 이미지를 직접 렌더링하지 않고, GPT Image 프로젝트 대화세션에 넘길 체크리스트/기획 패킷과 Canva 삽입 재료를 정리한다.
   - 카드별로 고정 영역, 교체 영역, 붙여넣을 문구, 필요한 이미지/차트 파일, 선생님 확인 항목을 보인다.

4. `주요문항 crop 파일명 가이드`
   - 주요문항 번호별 문제 crop/손풀이 crop 파일명을 제안한다.
   - 파일 자체는 선생님이 Canva에 직접 업로드한다.

5. `블로그 초안`
   - AI가 블로그 문체, 이모티콘, 형광펜, 줄나눔을 제안한다.
   - 선생님이 수정/저장한 값이 최종 원본이다.

6. `인스타 캡션/카드 문구`
   - 카드뉴스 업로드 후 붙일 캡션과 블로그 유입 문구를 관리한다.
   - 카드 디자인용 이모티콘/형광펜 자동 규칙은 적용하지 않는다.

7. `Canva 최종 수정본 반영`
   - Canva에서 고친 최종 문구를 웹앱 선생님 저장본으로 다시 붙여넣는 흐름을 둔다.
   - MVP에서는 별도 동기화가 아니라 수동 붙여넣기/저장 gate로 본다.

8. `Export`
   - `Canva 붙여넣기용 텍스트 묶음`
   - `차트 PNG`
   - `문제/손풀이 crop 파일명 가이드`
   - `블로그 초안`
   - `인스타 캡션`

## Canva 10장 카드 기준

| 카드 | 역할 | 고정 영역 | 시험별 교체 영역 | 웹앱 export 재료 | 이미지/차트 파일 |
| --- | --- | --- | --- | --- | --- |
| 1 | 표지 | 브랜드, 템플릿 제목 위치, 학교/고사 배지 | 학교명, 학년, 고사명, 과목, 한줄 훅 | `oneLineReview`, 학교/학년/고사/과목 | 없음 |
| 2 | 시험 구조 | 객관식/서술형/만점/범위 레이아웃, 차트 슬롯 | 문항 수, 만점, 시험 범위, 단원별 비중, 난이도 요약 | `blogBlockStructure`, `finalPreviewModel.meta`, 분포 요약 | `charts/part-distribution.png`, `charts/difficulty-distribution.png` |
| 3 | 총평 정리 | 총평 3~4박스, 변별 포인트 박스 | 체감 난도, 점수 갈림, 자주 틀린 흐름, 고득점 전략 | `oneLineReview`, `flowReview`, `scoreGapPoint`, `blogBlockOverallReview` | 필요 시 `charts/question-flow.png` |
| 4 | 주요문항 1 살펴보기 | 문제 이미지 슬롯, 문항번호 배지, 핵심 포인트 위치 | 문항번호, 카드 제목, 문제 crop, 왜 중요한지, 자주 틀리는 지점 | `keyQuestionBlocks[0].questionNumber/title/questionMemo/mistakePoint` | `crops/keyq-01-question-qNN.png` |
| 5 | 주요문항 1 손풀이 | 손풀이 이미지 슬롯, 풀이 흐름/주의 박스 | 손풀이 crop, 풀이 순서, 조건 정리, 실수 방지 | `keyQuestionBlocks[0].solutionMemo/mistakePoint/imageSlotMemo` | `crops/keyq-01-solution-qNN.png` |
| 6 | 주요문항 2 살펴보기 | 카드 4와 동일 구조 | 주요문항 2 데이터 | `keyQuestionBlocks[1].questionNumber/title/questionMemo/mistakePoint` | `crops/keyq-02-question-qNN.png` |
| 7 | 주요문항 2 손풀이 | 카드 5와 동일 구조 | 주요문항 2 손풀이 데이터 | `keyQuestionBlocks[1].solutionMemo/mistakePoint/imageSlotMemo` | `crops/keyq-02-solution-qNN.png` |
| 8 | 주요문항 3 살펴보기 | 카드 4와 동일 구조 | 주요문항 3 데이터 | `keyQuestionBlocks[2].questionNumber/title/questionMemo/mistakePoint` | `crops/keyq-03-question-qNN.png` |
| 9 | 주요문항 3 손풀이 | 카드 5와 동일 구조 | 주요문항 3 손풀이 데이터 | `keyQuestionBlocks[2].solutionMemo/mistakePoint/imageSlotMemo` | `crops/keyq-03-solution-qNN.png` |
| 10 | 다음 시험 대비 / 블로그 유입 CTA | 다음 대비 체크, 블로그 유입, 상담 CTA, 브랜드/연락처 위치 | 다음 대비 문구, 학원 분석 방식, 블로그 유입 문장, 위치/전화 자리표시자 | `nextStudyPlan`, `blogBlockNextStudy`, `blogBlockAcademyTrust`, `blogBlockCta` | 없음 |

10장 기준은 유지한다. 현재 Canva 템플릿 페이지 수가 10장이 아니면 자동화 기준을 8장으로 낮추지 않고, Canva 레이아웃 보강 gate로 남긴다.

## 파일명 가이드

ZIP 또는 화면 가이드는 아래 이름을 기준으로 제안한다.

- `texts/canva-card-01-cover.txt`
- `texts/canva-card-02-structure.txt`
- `texts/canva-card-03-overall-review.txt`
- `texts/canva-card-04-keyq-01.txt`
- `texts/canva-card-05-solution-01.txt`
- `texts/canva-card-06-keyq-02.txt`
- `texts/canva-card-07-solution-02.txt`
- `texts/canva-card-08-keyq-03.txt`
- `texts/canva-card-09-solution-03.txt`
- `texts/canva-card-10-cta.txt`
- `charts/part-distribution.png`
- `charts/difficulty-distribution.png`
- `charts/question-flow.png`
- `crops/keyq-01-question-qNN.png`
- `crops/keyq-01-solution-qNN.png`
- `crops/keyq-02-question-qNN.png`
- `crops/keyq-02-solution-qNN.png`
- `crops/keyq-03-question-qNN.png`
- `crops/keyq-03-solution-qNN.png`

`qNN`은 실제 문항번호로 바꾼다. 예를 들어 18번이면 `crops/keyq-01-question-q18.png`처럼 둔다.

## 블로그 초안 흐름

블로그는 18개 고정 섹션이 아니라 블록 조립 방식으로 둔다.

1. SEO 제목 후보 3개
2. 시작글/인사: 학교, 학년, 고사, 한줄 체감, 인사말 끝 `😊`
3. `[card-01.png 삽입]`
4. 시험 구조 설명: 객관식/서술형/범위/출제 흐름
5. `[card-02.png 삽입]`
6. 총평/변별 포인트: 핵심 문장에는 `[형광펜: 하늘색]...[/형광펜]`
7. `[card-03.png 삽입]`
8. 주요문항 섹션: 시작은 `📌`, 핵심 포인트와 자주 틀리는 지점은 `✅`
9. 문제 카드와 설명글 반복: `[card-04.png 삽입]`, `[card-06.png 삽입]`, `[card-08.png 삽입]`
10. 손풀이 카드와 설명글 반복: `[card-05.png 삽입]`, `[card-07.png 삽입]`, `[card-09.png 삽입]`
11. 다음 시험 대비: 훈련 방향과 학원 관리 방식
12. `[card-10.png 삽입]`
13. CTA: `⬇️⬇️`, 위치 `📍`, 전화번호 `☎`

블로그 규칙은 카드뉴스 디자인용이 아니라 블로그 글 작성용이다. Canva 카드 내부 문구에 이모티콘과 형광펜 태그를 자동으로 밀어 넣지 않는다.

## 인스타 캡션 흐름

인스타 캡션은 카드뉴스 업로드 후 함께 붙일 짧은 설명이다.

1. 학교/학년/고사 한줄 소개
2. 이번 시험 한줄 총평
3. 점수 갈림 포인트 1~2줄
4. 주요문항은 카드뉴스에서 확인하라는 안내
5. 자세한 해설은 블로그에서 확인하라는 유입 문구
6. 상담/문의 문구
7. 해시태그 후보

인스타 캡션에는 블로그 형광펜 태그를 넣지 않는다. 이모티콘은 CTA나 가독성 보조 수준으로 제한한다.

## Export 패키지 구성

현재 구현된 ZIP을 다음 방향으로 재정리한다.

- `README.txt`: Canva 작업 순서와 웹앱 원본 반영 주의사항
- `manifest.json`: 분석 run, 카드별 source key, 차트 파일, draft 상태
- `texts/canva-10-card-plan.txt`: 10장 구조와 고정/교체 영역 요약
- `texts/canva-card-*.txt`: 카드별 붙여넣기 문구
- `texts/crop-file-guide.txt`: 주요문항 문제/손풀이 crop 파일명과 Canva 삽입 위치
- `texts/blog-draft.txt`: `teacherDraft > aiDraft` 기준 블로그 초안
- `texts/instagram-caption.txt`: 인스타 캡션
- `charts/*.png`: Canva/블로그에 넣을 차트 PNG
- `charts-svg/*.svg`: 필요 시 선명한 원본

MVP에서는 crop 이미지 파일을 ZIP에 자동 포함하지 않는다. 선생님이 직접 만든 crop 파일을 같은 파일명으로 보관하고 Canva에 업로드한다.

## Gate

### Gate 0. 원본 검수

- 입력: 시험분석 run, PDF, 문항 행, 선생님 검수 저장본
- 저장 위치: `exam_analysis_runs`, `exam_analysis_questions`, Storage
- 확인: 새로고침 후 같은 run과 검수 결과 유지
- 중단: 문항 수, 과목, 시험범위, 주요문항 번호가 원본과 다르면 산출물 작업을 시작하지 않는다.

### Gate 1. 선생님 산출물 메모 저장

- 입력: 기본 메모, 블로그 블록, 주요문항 반복 블록
- 저장 위치: `exam_analysis_runs.audit_summary.outputDrafts.inputs`
- 확인: `산출물 저장` 후 새로고침해도 입력값 유지
- 중단: 입력 중 커서가 튀거나 AI/템플릿 값이 입력값을 덮어쓰면 멈춘다.

### Gate 2. Canva 재료 미리보기

- 입력: `outputDrafts.inputs`, `finalPreviewModel`
- 저장 위치: 저장하지 않는 파생 화면
- 확인: 10장 구조, 카드별 문구 길이, 차트/이미지 슬롯, crop 파일명이 맞는지 확인
- 중단: 최종 카드 제작기처럼 보이거나, 카드가 사실을 추측하거나, 10장 기준이 무너지면 멈춘다.

### Gate 3. Export

- 입력: 선생님 저장본과 최종 검수 모델
- 저장 위치: 로컬 다운로드 ZIP
- 확인: 텍스트, 차트, 파일명 가이드가 카드별로 분리되어 있는지 확인
- 중단: export가 AI 초안을 선생님 저장본보다 우선하면 멈춘다.

### Gate 4. Canva 편집

- 입력: ZIP 재료, 선생님 crop 파일
- 저장 위치: Canva 디자인
- 확인: 10장 페이지, 모바일 가독성, 문제/손풀이 이미지 비율, CTA 확인
- 중단: Canva 페이지 수가 부족하거나 주요문항 카드 쌍이 깨지면 자동화 기준을 바꾸지 말고 Canva 템플릿을 보강한다.

### Gate 5. Canva 최종 문구 역반영

- 입력: Canva에서 최종 수정한 문구
- 저장 위치: 웹앱 `teacherDraft` 또는 카드별 선생님 저장본
- 확인: 새로고침 후 Canva 최종 문구가 웹앱 원본으로 남는지 확인
- 중단: Canva 최종본과 웹앱 선생님 저장본이 다르면 다음 시험 자동화로 넘어가지 않는다.

## 다음 구현 후보

1. 카드별 Canva 재료 보드 추가
   - 각 카드에 고정 영역/교체 영역/source key/export 파일명을 표시
   - 카드 디자인 미리보기보다 GPT Image 기획 패킷, 체크리스트, 붙여넣기 텍스트를 우선

2. ZIP export 세분화
   - `texts/canva-card-*.txt`
   - `texts/crop-file-guide.txt`
   - `texts/instagram-caption.txt`

3. Canva 최종본 반영 UI
   - `Canva에서 수정한 최종 문구 붙여넣기`
   - 저장 후 `teacherDraft` 갱신
   - AI 재생성으로 덮어쓰지 않는 상태 표시

## AI 자기검토 기준

- 전체 맥락: 시험분석 공개 산출물을 반복 가능한 Canva 중심 MVP로 만드는 단계다.
- 사용자 의도: 디자인 완성도는 Canva에서 확보하고, 웹앱은 원본과 재료 관리를 맡겨 다음 시험에서도 자동화가 이어지게 하려는 것이다.
- 저장 원천: 구조적 사실은 시험분석 v2 테이블, 산출물 메모와 최종 문구는 `outputDrafts`, Canva 최종 수정본은 다시 웹앱 선생님 저장본에 반영해야 한다.
- 사용자 편집본 보호: AI 초안과 JS 렌더러는 선생님 입력을 덮어쓰면 안 된다.
- 검토 가능성: 카드별 재료, crop 파일명, 블로그/인스타 문구, Canva 역반영 여부를 gate별로 확인한다.
- 중단 조건: 10장 기준이 깨짐, 원본 사실 추측, Canva 최종본과 웹앱 저장본 불일치, 입력값 덮어쓰기, 보정 로직 누적.
