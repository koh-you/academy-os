# 시험분석 블로그 슬라이드 전수 분석 Gate 3

기준일: 2026-07-21
대상: 네이버 블로그 `skills_in_math2` Gate 2 확정 코퍼스

## 결론

Gate 2의 24개 글·221개 첨부를 전부 장별로 분류했다. SHA-256 중복을 제거한 실제 시각물 단위는 215개다. 1차 시험분석 코퍼스는 21개 글·202장, 파생 글은 3개·19장이며 파생 글은 빈도 계산에서 별도로 유지했다.

이번 Gate에서 새 유료 Vision 호출은 0회다. 과거에 저장한 Vision 결과 12개 글·116장을 재사용했고, 나머지 12개 글·105장은 원본 접촉시트를 사람이 직접 확인해 분류했다. 원문 문제·풀이 본문은 복제하지 않고 역할, 짧은 제목 키워드, 레이아웃, 컴포넌트만 저장했다.

정형 데이터 원본은 `docs/exam-analysis-blog-slide-analysis-gate3-2026-07-21.json`이다. 221개 `slides` 행과 215개 `visualUnits` 행을 모두 포함한다.

## 전수 분류 결과

1차 코퍼스 202장의 역할 분포:

| 역할 | 장수 | 의미 |
|---|---:|---|
| `key_question` | 62 | 시험 원안·유사문항·핵심 개념·오답 포인트를 함께 설명하는 주요문항 카드 |
| `solution` | 32 | 손풀이 또는 단계별 풀이 카드 |
| `cover` | 20 | 학교·학년·시험명 중심 표지 |
| `overall_review` | 18 | 총평, 출제 흐름, 체감 난이도 요약 |
| `exam_structure` | 17 | 문항 수, 배점, 서술형, 시험 범위 등 구조 요약 |
| `next_preparation` | 16 | 다음 시험 대비 행동 계획 |
| `source_question` | 10 | 원본 문제 또는 출처 문제 이미지 |
| `source_reference` | 7 | 교재 표지·출처 근거 |
| `difficulty_flow` | 5 | 난이도/후반 변별 구간/점수대 흐름 |
| `data_reference` | 5 | 내부 분석표 원본 |
| `academy_cta` | 5 | 학원 가치 제안·마무리 CTA |
| `key_question_summary` | 4 | 여러 주요문항을 먼저 묶어 소개하는 인덱스 |
| `unit_distribution` | 1 | 단원별 출제 비중 |

파생 19장은 `학교별 공통점 요약 6`, `학교별 비교표 1`, `진도표 3`, `교육과정 원본 2`, 표지 3, 다음 대비 2, CTA 2다. 이 자료는 시험 한 건의 슬라이드 순서를 설명하는 1차 코퍼스가 아니므로 Gate 4 기본 시퀀스 빈도에는 넣지 않는다.

## 레이아웃과 원본 사용 방식

221개 첨부 기준 레이아웃은 `source_and_analysis_split` 62장, `source_and_solution_split` 32장, `stacked_summary_panels` 28장, `hero_cover` 23장, `checklist` 18장, `metric_dashboard` 17장 순이다. 핵심은 완전히 다른 디자인을 매번 만드는 것이 아니라 역할별 골격을 반복하고 학교별 색, 캐릭터, 강조 모양, 데이터만 교체하는 방식이다.

원본 사용 방식은 다음 네 층으로 나뉜다.

- `generated_card` 100장: 표지·구조·총평·다음 대비처럼 텍스트와 도형을 새로 구성한다.
- `hybrid_source_card` 94장: 원본 문제/풀이를 프레임 안에 배치하고 분석 패널을 덧붙인다.
- `source_only` 19장: 시험 원안, 교재 표지, 교육과정 표 등 원본을 그대로 보여준다.
- `data_reference` 8장: 분석표·진도표처럼 정확한 데이터 표가 중심이다.

따라서 Academy OS는 모든 장을 GPT Image 한 번에 그리게 하면 안 된다. 정확성이 필요한 문제, 풀이, 표는 원본 자산 또는 코드 렌더링을 유지하고 GPT Image는 표지·배경·장식·설명 패널에 사용해야 한다.

## 반복되는 컴포넌트

전수 분류에서 반복되는 최소 컴포넌트는 다음과 같다.

- 공통: `brand_header`, `section_title`, `brand_footer`, 학교·시험 메타, 슬라이드 번호
- 구조/총평: `metric_cards`, `summary_panels`, `difficulty_visual`, `highlight_callout`
- 주요문항: `source_asset_frame`, `analysis_panel`, `concept_tags`, `error_point`, `question_label`
- 풀이: `solution_panel`, `step_markers`, `answer_check`
- 다음 대비: `action_checklist`, `priority_highlight`
- 원본/표: `source_caption`, `table_frame`, `row_labels`, `data_cells`
- 마무리: `photo_or_character`, `value_statement`, `cta_panel`

이 컴포넌트 목록이 Gate 5 역할 라이브러리와 Gate 6 프롬프트 슬롯의 근거다.

## 품질·경계

- 기존 Vision 결과에서 `224337226514-08` 한 장은 `needsHumanReview=true`다. 역할은 풀이 카드로 확실하지만 세부 수식·텍스트 정확성은 원본을 다시 확인해야 한다.
- `224156001862`는 현재 본문이 표지 없이 총평부터 시작한다. 삭제된 과거 썸네일을 추정해 표지를 복원하지 않았다.
- 같은 SHA-256이 여러 글에서 재사용된 6개 중복 첨부는 각각 출처 행을 보존하되 `visualUnits`에서는 한 번만 센다.
- 역할 분류는 관찰 사실이고, “왜 이 디자인을 선택했는가” 같은 제작 의도는 추정하지 않았다.

## 재현 및 검증

```powershell
npm run analyze:exam-blog-slides
npm run verify:exam-blog-slides
```

첫 명령은 기존 raw Vision JSON 경로를 선택 인자로 받을 수 있다. 이미지 바이너리, API 키, 원문 전체는 저장소에 기록하지 않는다.

## Gate 4 입력 계약

Gate 4는 `corpusRole=primary`인 202장만 기본 시험분석 시퀀스 계산에 사용한다. 중학교·고등학교를 분리하고, `canonicalRole`, `layoutFamily`, `assetMode`, 실제 장 순서를 기반으로 필수·조건부·선택 슬라이드를 정한다. 파생 19장은 학교 간 비교나 운영 현황 같은 별도 산출물 모듈로만 사용한다.
