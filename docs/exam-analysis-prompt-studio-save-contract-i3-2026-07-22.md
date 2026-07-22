# 시험분석 프롬프트 작업본 저장 계약 I3

## 저장 흐름

`Supabase 저장본 -> local draft -> 명시적 저장 -> API 완료 -> exam_analysis_runs 재조회 -> promptStudio 값 대조 -> 저장 완료`

- 저장 위치: `exam_analysis_runs.audit_summary.promptStudio`
- API: `POST /api/exam-analysis-runs/save-prompt-studio`
- 충돌 방지: 클라이언트의 `expectedRevision`과 서버 최신 revision이 다르면 HTTP 409
- 완료 조건: 저장 직후 `getExamAnalysisRun`으로 Supabase를 다시 읽고 정규화된 전체 작업본, revision, savedAt, savedBy가 일치할 때만 성공 응답
- 실패 복구: local draft는 클라이언트 상태에 남고 `failed` 상태를 표시한다. 서버값으로 자동 덮어쓰지 않는다.

## 저장 상태

`saved -> dirty -> saving -> verifying -> verified` 또는 `failed`를 사용한다. 단순 화면 변경이나 API 200만으로 저장 완료를 표시하지 않는다.

## 저장 데이터

- 학교급과 슬라이드 역할 시퀀스 선택
- 공통/시험분석/주요문항/다음 대비/CTA의 교사 입력
- 문구 라이브러리 선택 ID와 대상 경로
- 문제 crop, 검증 손풀이, 데이터 표 등의 자산 참조 메타데이터
- 원천 snapshot 갱신 시각

이 데이터는 프롬프트 제작 작업본이며 기존 `final_fields`, `teacher_fields`, `outputDrafts`, PDF 원본을 변경하지 않는다. 자산 메타데이터 저장은 실제 파일 업로드 성공을 뜻하지 않는다.

## 구현 경계

- 새 테이블과 SQL 변경 없음
- AI 및 이미지 생성 호출 없음
- Storage 업로드 없음
- 기존 `audit_summary`의 다른 키는 spread 병합으로 보존
- UI 연결은 I4에서 진행
