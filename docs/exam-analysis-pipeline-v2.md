# Exam Analysis Pipeline V2

기존 시험분석 탭은 삭제했고, 이 문서는 새로 만드는 시험분석 파이프라인의 기준입니다.

## 핵심 원칙

- 옛 `app_state.examAnalyses` / `app_state.examAnalysisFolders` 구조를 다시 쓰지 않는다.
- 옛 `exam-analysis-sources` Storage bucket을 다시 쓰지 않는다.
- AI는 문항 수와 행 개수를 결정하지 않는다.
- 선생님이 확정한 `confirmed_question_count`가 1~N 행 생성의 유일한 기준이다.
- 선생님이 행을 한 번이라도 수정하면 그 수정본이 새 원본이다.
- AI 재요청, 자동 매핑, 정규화는 `teacher_override` 또는 `teacher_fields`를 덮어쓰면 안 된다.

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
- 완료: 새 `시험분석` 탭의 목록, 기본정보 저장, PDF 업로드, 진행 단계, 저장 이벤트 UI
- 미구현: PDF 텍스트/페이지 추출
- 미구현: 문항 수 판독, 선생님 확인, 1~N 행 생성
- 미구현: AI 행 채움, 누락 검수, 재요청

## 다음 구현 순서

1. PDF 텍스트/페이지 추출 단계 추가
2. 문항 수 판독 API 추가
3. 문항 수 판독 근거 표시 UI 추가
4. 선생님 확인 UI 추가
5. 1~N 행 생성 API/UI 추가
6. AI 행 채움 API 추가
7. 누락 검수/재요청 추가

## 현재 API

아직 AI 호출은 붙이지 않는다. 현재 API와 UI는 원본 PDF 저장과 상태 확인까지만 담당한다.

- `GET /api/exam-analysis-runs`: 분석 run 목록
- `GET /api/exam-analysis-runs?id={analysisRunId}`: run 상세, source, question, AI job, event 조회
- `POST /api/exam-analysis-runs`: 분석 run 생성/수정
- `POST /api/exam-analysis-source-files`: PDF 업로드 후 source row와 event 저장
- `GET /api/exam-analysis-source-files/open?bucket={bucketId}&path={storagePath}`: 저장 PDF signed URL 열기

`POST /api/exam-analysis-source-files`는 PDF만 받으며, 업로드 성공 시 `workflow_status`를 `source_uploaded`로 둔다. 다음 단계는 이 상태를 입력으로 받아 텍스트/페이지 추출을 수행한다.
