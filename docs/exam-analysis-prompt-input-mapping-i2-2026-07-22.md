# 시험분석 프롬프트 입력 매핑 I2

## 목적

기존 시험분석 v2 저장값을 슬라이드 프롬프트 입력으로 연결하되 AI 후보, 교사 저장본, 확정값, 원본 파일 참조, 실제 이미지 자산을 구분한다. 화면에서 값이 보인다는 이유만으로 확정 사실이나 이미지 자산으로 승격하지 않는다.

## 원천 우선순위

1. 문항 사실: `exam_analysis_questions.final_fields` (`row_status=confirmed`)
2. 교사 저장값: `teacher_fields`, `exam_analysis_runs.audit_summary.outputDrafts.inputs`
3. AI 후보: `ai_fields` — 화면 검토 후보이며 프롬프트 자동 사용 불가
4. 구조 필드: run/question row의 저장 열 — 상태 계약에 따라 확정 여부 판정

상태는 `confirmed`, `teacher_saved`, `derived_confirmed`, `ai_candidate`, `source_reference`, `missing`으로 고정한다. 자동 프롬프트 입력은 앞의 세 상태만 허용한다.

## 역할별 매핑

| 역할 | 현재 연결 원천 | 현재 누락 또는 제한 |
|---|---|---|
| 공통 | 학교명, 학년, 시험명, 과목은 run | 학교 스타일 필드 없음 |
| 시험 분석 | 확정 문항 수, 확정 문항의 단원·난이도 분포, 교사 저장 시험범위·총평 | 정규화된 배점/객관식·서술형 구조 없음 |
| 주요문항 | `keyQuestionBlocks`의 번호·선정 이유·풀이·오답 + 확정 문항 유형 | 실제 문제 crop, 검증 손풀이 파일 없음 |
| 다음 대비 | 교사 저장 `blogBlockNextStudy` 또는 `nextStudyPlan` | 3~5개 구조화 행동 배열은 후속 입력 UI 필요 |
| CTA | 교사 저장 학원 문장·CTA | 연락처와 다음 행동의 별도 정규화 필드 없음 |

## 자산 판정

`exam_analysis_sources`의 PDF와 `pageImageManifest`는 원본 문서 및 페이지 크기 참조다. `pageImageManifest`에는 이미지 파일 경로나 crop 범위가 없으므로 문제 crop으로 취급하지 않는다. `imageSlotMemo`도 파일이 아니라 교사 메모다. I2는 주요문항마다 `question_crop`, `verified_solution`을 명시적으로 `missing`으로 반환한다.

## 구현 경계

- 순수 매핑 함수만 추가한다. API, Supabase, Storage, AI, 이미지 생성은 호출하지 않는다.
- `App.jsx`는 병렬 리팩터링과 충돌하지 않도록 수정하지 않는다.
- I3에서 이 snapshot 위에 local draft와 명시 저장/재조회 계약을 추가한다.
