# Exam Analysis Pipeline V2

기존 시험분석 탭은 삭제했고, 이 문서는 새로 만드는 시험분석 파이프라인의 기준입니다.

## 핵심 원칙

- 옛 `app_state.examAnalyses` / `app_state.examAnalysisFolders` 구조를 다시 쓰지 않는다.
- 옛 `exam-analysis-sources` Storage bucket을 다시 쓰지 않는다.
- AI는 문항 수와 행 개수를 결정하지 않는다.
- 선생님이 확정한 `confirmed_question_count`가 1~N 행 생성의 유일한 기준이다.
- 선생님이 행을 한 번이라도 수정하면 그 수정본이 새 원본이다.
- AI 재요청, 자동 매핑, 정규화는 `teacher_override` 또는 `teacher_fields`를 덮어쓰면 안 된다.
- 앱 안 최종 미리보기는 시험지 원문을 다시 그리는 화면이 아니라, 선생님 검수 저장본을 시각화하는 화면이다.
- 공개 산출물(블로그/인스타)은 원문 이미지가 시각적 힘을 만들 수 있으므로 이미지 슬롯을 전제로 설계한다. 다만 1차 앱 미리보기에서는 수식/그래프 원문을 재렌더링하지 않는다.

## 워크플로우

1. PDF 업로드
2. PDF 텍스트/페이지 정보 추출
3. 문항 수 후보 판독
4. 선생님 문항 수 확인/수정
5. 확정된 1~N 빈 행 생성
6. AI가 기존 행만 채움
7. 누락/불일치 자동 검수
8. 누락 번호만 재요청
9. 선생님 최종 검토/수정
10. 확정 산출물 생성

## 저장 구조

`supabase/20260703_exam_analysis_pipeline.sql`이 1단계 기준입니다.

- `exam_analysis_runs`: 분석 작업 단위와 문항 수 판독/확정 상태
- `exam_analysis_sources`: PDF, 텍스트 추출, 페이지 이미지 manifest
- `exam_analysis_questions`: 선생님이 확정한 1~N 고정 행
- `exam_analysis_ai_jobs`: 문항 수 판독, 행 채움, 누락 검수, 재요청 이력
- `exam_analysis_events`: 사람이 볼 수 있는 단계별 이벤트 로그
- `ensure_exam_analysis_question_rows(run_id, count)`: 확정 N 기준으로 빈 행을 생성하는 DB 함수
- Storage bucket: `exam-analysis-pipeline-sources`

## 단계별 검증

### 1. 저장 구조

- SQL 적용 후 5개 테이블이 생성되어야 한다.
- `exam_analysis_questions`는 `(analysis_run_id, question_number)` unique 제약을 가져야 한다.
- `ensure_exam_analysis_question_rows`는 기존 행을 덮어쓰지 않고 없는 행만 만든다.
- `teacher_fields`, `final_fields`, `teacher_override`, `manual_edit_count`가 있어야 한다.

### 2. PDF 업로드

- 업로드 성공 시 `exam_analysis_runs`와 `exam_analysis_sources`가 생성되어야 한다.
- 파일은 `exam-analysis-pipeline-sources` bucket에 저장되어야 한다.
- 아직 AI 호출은 없어야 한다.

### 3. 문항 수 판독

- 판독 결과는 `detected_question_count`, `detected_question_evidence`에 저장한다.
- 판독 근거가 화면에 보여야 한다.
- 이 단계만으로 `exam_analysis_questions` 행을 만들면 안 된다.

### 4. 선생님 확인

- 선생님이 확정한 값만 `confirmed_question_count`에 들어간다.
- 확정 전에는 AI 행 채움을 실행할 수 없어야 한다.

### 5. 1~N 행 생성

- `ensure_exam_analysis_question_rows` 또는 같은 규칙의 API만 사용한다.
- 생성 직후에도 행 개수는 N개여야 한다.
- AI가 행을 추가, 삭제, 재번호 매기기 할 수 없어야 한다.

### 6. AI 행 채움

- AI 응답은 기존 `question_number` 행에만 merge한다.
- 응답에 없는 번호는 `missing`으로 남긴다.
- 선생님 수정 행은 덮어쓰지 않는다.

### 7. 누락 검수와 재요청

- `missing_question_numbers`와 `exam_analysis_ai_jobs.target_question_numbers`로 대상 번호를 남긴다.
- 재요청은 전체 분석이 아니라 누락 번호만 대상으로 한다.

## 현재 구현 상태

- 완료: `supabase/20260703_exam_analysis_pipeline.sql` 저장 구조
- 완료: `GET/POST /api/exam-analysis-runs`
- 완료: `POST /api/exam-analysis-source-files`
- 완료: `GET /api/exam-analysis-source-files/open`
- 완료: `DELETE /api/exam-analysis-runs`
- 완료: `POST /api/exam-analysis-source-files/extract`
- 완료: `POST /api/exam-analysis-source-files/vision-check`
- 완료: `POST /api/exam-analysis-runs/confirm-question-count`
- 완료: `POST /api/exam-analysis-runs/detect-question-boundaries`
- 완료: `POST /api/exam-analysis-runs/fill-question-rows`
- 완료: `POST /api/exam-analysis-runs/refine-question-rows`
- 완료: `POST /api/exam-analysis-runs/save-question-reviews`
- 완료: 새 `시험분석` 탭의 학교/학년/고사/분석 보드, 기본정보 저장, PDF 업로드, 텍스트 검증, AI 원본 검증, 문항 수 확인, 1~N 행 생성, 문항 경계, AI 행 채움, 엑셀식 AI 결과 검수, AI 2차 수정, 저장 이벤트 UI
- 완료: 저장된 검수본 기준 앱 안 최종 미리보기 1차. 단원별 출제 비중, 난이도 분포, 주요 유형, 문항 흐름, 주요문항 후보, 상세 표를 렌더링한다.
- 확인: 실제 화면에서 AI 2차 검수 후 새로고침해도 저장값이 유지되는 것을 확인했다. 테스트 단계에서는 3문항만 AI 2차 검수 상태로 두고 다음 단계로 넘어간다.
- 테스트 데이터 주의: 나머지 문항의 쎈 유형 반영은 아직 전체 품질 통과로 보지 않는다. 현재 분석은 테스트 데이터이므로 보존/보정 대상이 아니라, 필요하면 삭제 후 PDF 업로드부터 다시 실행한다.
- 미구현: AI 주요문항 추천/선생님 선택 저장, 최종 산출물 생성, 이미지 슬롯 연결

## 다음 구현 순서

1. 앱 안 최종 미리보기 실제 화면 검수
2. AI 주요문항 추천과 선생님 선택 저장 구조
3. 블로그/인스타/PPT/Canva 이미지 슬롯 설계
4. 필요 시 테스트 분석 삭제 후 PDF 업로드부터 재실행
5. 학생 유형 노드맵/보충관리와 연결할 저장 구조 설계

## 최종 미리보기와 산출물 방향

- 앱 안 최종 미리보기: 저장된 `exam_analysis_questions`의 `teacher_fields`/`final_fields`를 원천으로 계산한다. AI가 숫자를 다시 만들지 않는다.
- 차트: 1차는 별도 차트 라이브러리 없이 CSS/SVG로 도넛, 막대, 문항맵을 렌더링한다. 색상과 범례는 테스트 후 고정 색상코드로 확정한다. 차트 라이브러리는 출력 품질/상호작용 요구가 커질 때 도입한다.
- 주요 유형: 쎈 기준표를 참고하되 화면 문구는 `주요 유형`으로 쓴다. `주요 쎈 유형 수`, `주유형 TOP`처럼 운영자가 원치 않는 지표명은 쓰지 않는다.
- 주요문항: 변별력, 특이성, 복합성, 검수 메모, 난이도 등을 기준으로 후보를 보여준다. 다음 단계에서는 AI가 주요문항을 추천하고 선생님이 최종 선택한다.
- 수식/그래프/원문: 앱 미리보기 1차에서는 PDF/HWP 원문 수식과 그래프를 재렌더링하지 않는다. 원문 이미지는 공개 산출물 단계에서 별도 이미지 슬롯으로 다룬다.
- HWP/HWPX: HWP 원문을 웹앱에 복사/붙여넣어 수식과 그래프를 안정적으로 보존하는 것은 어렵다. HWPX 파싱, HWP/PDF 내보내기, 사용자가 직접 만든 이미지 슬롯, Canva/PPT 삽입 중 어느 경로가 좋은지 별도 검증한다.
- 블로그: 사용자가 제시한 네이버 블로그 예시(`skills_in_math4/224333485311`)는 인사말, 한 줄 총평, 변별 문항별 출제 의도/변별 포인트/교재 유사 유형, 다수 이미지(대표 이미지, 시험지 페이지, 문항 캡처) 중심 구조다. v2 산출물은 이 구조를 통일된 템플릿으로 더 잘 만드는 방향이다.
- 인스타/Canva: 1080x1350 카드뉴스형 템플릿을 Canva 등과 연결해 테스트하고, 색상코드/범례/이미지 슬롯/문구 구조를 고정한 뒤 내용만 바꿔 반복 제작하는 방향이다.
- PPT: 내부 편집/이미지 배치/인쇄용에는 좋은 중간 매체가 될 수 있다. 최종 공개용은 Canva 카드뉴스와 네이버 블로그 업로드 흐름을 우선 검증한다.
- 내부 누적데이터: 시험분석 run과 문항번호가 고정되면, 이후 학생 시험지/오답 제출은 `학생 + 분석 run + 문항번호`로 연결해 학생별 단원/주요 유형/난이도/오답 원인을 누적할 수 있다. 이 설계는 산출물과 분리해 후속 개발한다.

## 현재 API

현재 API와 UI는 PDF 저장부터 선생님 검수 저장까지 담당한다.

- `GET /api/exam-analysis-runs`: 분석 run 목록
- `GET /api/exam-analysis-runs?id={analysisRunId}`: run 상세, source, question, AI job, event 조회
- `POST /api/exam-analysis-runs`: 분석 run 생성/수정
- `DELETE /api/exam-analysis-runs`: 테스트 분석과 연결 source/Storage 정리
- `POST /api/exam-analysis-source-files`: PDF 업로드 후 source row와 event 저장
- `GET /api/exam-analysis-source-files/open?bucket={bucketId}&path={storagePath}`: 저장 PDF signed URL 열기
- `POST /api/exam-analysis-source-files/extract`: 텍스트/페이지 정보 추출
- `POST /api/exam-analysis-source-files/vision-check`: Claude/OpenAI PDF 원본 검증
- `POST /api/exam-analysis-runs/confirm-question-count`: 선생님 확정 문항 수 저장과 1~N 행 생성
- `POST /api/exam-analysis-runs/detect-question-boundaries`: 문항별 시작/끝 페이지와 위치 탐지
- `POST /api/exam-analysis-runs/fill-question-rows`: 쎈 기준표 후보 기반 AI 행 채움
- `POST /api/exam-analysis-runs/refine-question-rows`: 미확정/재확인 문항 AI 2차 수정
- `POST /api/exam-analysis-runs/save-question-reviews`: 선생님 검수본 저장
