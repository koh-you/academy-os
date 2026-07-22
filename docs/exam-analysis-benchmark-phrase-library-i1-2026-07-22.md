# 시험분석 벤치마크 문구 라이브러리 I1

## 목적

교사가 시험분석 산출물 문구를 매번 빈칸에서 작성하지 않도록 Gate 1~3의 1차 코퍼스 21건·202장을 근거로 역할별 재서술 문구를 제공한다. 이 문구는 드롭다운에서 선택해 편집을 시작하는 초안이며 교사 확정값이 아니다.

21건을 모두 검토했으며 그중 16건에서 재사용 가능한 해석·전략·오답·다음 대비 표현을 선별했다. 나머지 5건(`224263462499`, `224260124266`, `224251937391`, `224164418523`, `224156001862`)은 원본 문제·풀이·내부 데이터 표 중심이어서 다른 시험에 적용할 문구를 억지로 추가하지 않았다. 이 제외 판단도 `EXAM_ANALYSIS_BENCHMARK_CORPUS_CONTRACT`에 기록한다.

## 구현 원본

- 런타임 라이브러리: `src/domains/exams/examAnalysisPhraseLibrary.js`
- 계약 검증: `scripts/test-exam-analysis-phrase-library.mjs`
- 코퍼스 원본: Gate 2의 21건·202장 manifest
- 역할·시각 근거: Gate 3의 202개 primary slide 분류
- 역할 입력 계약: Gate 5 역할 라이브러리

## 포함 필드

| 역할 | 입력 필드 | 용도 |
|---|---|---|
| `overall_review` | `reviewPoints` | 시험 총평 패널 |
| `difficulty_flow` | `difficultyEvidence` | 난이도·변별 흐름 설명 |
| `key_question` | `selectionReason` | 주요문항 선정 이유 |
| `key_question` | `concepts` | 핵심 개념 |
| `key_question` | `strategy` | 풀이 전략 |
| `key_question` | `errorPoint` | 자주 틀리는 지점 |
| `next_preparation` | `actionItems` | 다음 대비 행동 |
| `academy_cta` | `valueStatement` | 학원 가치 문구 |

학교명, 학년, 시험명, 과목, 문항 수, 배점, 범위, 단원 행, 문항 번호, 정답, 원본 자산 ID, 출처, 연락처는 사실 필드다. 벤치마크 드롭다운으로 채우지 않고 Academy OS 확정 원천에서만 읽는다.

## 출처·저작권 계약

모든 항목은 다음 provenance를 갖는다.

```json
{
  "sourceType": "blog_benchmark_paraphrase",
  "corpusRole": "primary",
  "sourceLogNos": ["근거 게시물"],
  "sourceImageIds": ["근거 슬라이드"],
  "evidenceKeywords": ["짧은 관찰 키워드"],
  "isVerbatim": false
}
```

- 파생 3건·19장과 과거 형식 25건·50장은 문구 근거에서 제외한다.
- 블로그 본문이나 문제·풀이의 긴 문장을 저장하지 않는다.
- `draft`는 관찰 키워드를 Academy OS의 재사용 가능한 교육 문장으로 재서술한다.
- 학교명, 문항 번호, 교재 페이지, 점수처럼 다른 시험에 남을 수 있는 사실은 draft에 넣지 않는다.
- UI에는 출처 원문을 노출하지 않고 `label`과 `draft`만 보여 준다. provenance는 감사·검증용이다.

## 선택 동작 계약

`getExamAnalysisPhraseOptions`는 역할, 필드, 중·고등 학교급, 태그로 필터링한다. `createExamAnalysisPhraseDraft`는 선택된 문구 문자열만 반환하며 저장, 확정, AI 호출, 운영 side effect를 수행하지 않는다.

향후 UI에서 선택하면 현재 입력의 `localDraft`만 바꾼다. 이미 저장된 `teacher_fields` 또는 `final_fields`를 자동으로 덮어쓰지 않는다. 교사가 명시적으로 저장하고 서버 재조회가 일치한 뒤에만 확정 원본이 된다.

## AI 검수 범위

- 21개 primary 게시물·202개 primary attachment 계약 일치
- 모든 출처 `logNo`와 `imageId`가 primary 코퍼스 안에 존재
- 역할과 필드 계약 일치
- 중학교·고등학교 전용 항목 필터 누수 없음
- 사실 필드에 문구 제안 없음
- `isVerbatim=false`와 관찰 키워드 대비 재서술 계약
- ID 중복, 빈 문구, 과도하게 긴 문구 없음

I1은 정적 라이브러리와 순수 선택 함수만 추가한다. Supabase, `app_state`, Storage, 운영 API, 이미지 생성, 유료 AI, 알림 발송은 변경하지 않는다.
