# OO고 1학년 1학기 기말고사 시험분석 슬라이드 프롬프트

생성 입력: `exam-analysis-prompt-input-example.json`
슬라이드 수: 4
상태: 구조 설명용 예제 — 실제 제작 전 대괄호 값을 교체

## 0. 모든 장 앞에 붙이는 마스터 프롬프트

```text
당신은 교육 콘텐츠 아트디렉터입니다. OO고 1학년 1학기 기말고사 수학 시험분석 카드뉴스를 제작합니다.
각 장은 같은 프로젝트의 연속물이어야 하며, 역할별 정보 구조는 유지하고 아래 스타일 토큰만 일관되게 적용하세요.

[PROJECT STYLE — KEEP CONSISTENT]
{
  "palette": {
    "primary": "#173B6C",
    "secondary": "#E8F0FA",
    "accent": "#F2B84B",
    "background": "#F8FAFD",
    "text": "#18212F"
  },
  "visualMotif": "얇은 좌표 격자와 단정한 노트 프레임",
  "characterOrPhotoPolicy": "none",
  "cornerStyle": "soft",
  "decorationLevel": "low",
  "tone": "정확하고 차분한 고등부 시험분석 보고서"
}

[BRAND — DO NOT INVENT]
{
  "name": "수학의기술",
  "logoInstruction": "제공된 로고 파일만 사용하고 새 로고를 만들지 않는다.",
  "footer": "검수된 Academy OS 데이터 기반"
}

[CANVAS] 1080 × 1350px, 4:5, mobile-first readability, generous safe margins.
[GLOBAL RULES]
1. 입력에 없는 점수, 평균, 문항 수, 배점, 출처, 학교 정보, 성과를 만들지 마세요.
2. 한글·숫자·수식·문항 번호는 제공값을 정확히 유지하세요. 확신이 없으면 빈 자리 표시를 남기세요.
3. 원본 문제, 손풀이, 교재 표지, 표 자산은 다시 그리거나 변형하지 말고 지정 프레임에 그대로 삽입하세요.
4. 같은 색상, 테두리, 제목 위치, 여백 체계, 푸터를 모든 장에서 유지하세요.
5. 과도한 3D, 광택, 네온, 복잡한 배경, 장식용 수학 기호 남발, 가짜 로고, 워터마크를 금지합니다.
6. 최종 한글 텍스트를 후편집할 수 있도록 텍스트 영역과 원본 자산 영역을 명확히 분리하세요.
```

## 1번 슬라이드 프롬프트 — 표지

역할: `cover` / 레이아웃: `hero_cover`

```text
[SLIDE 1/4]
[ROLE] cover
[PURPOSE] 학교·학년·시험을 즉시 식별시키는 첫 장
[LAYOUT] hero_cover
[COMPONENTS] brand_header, hero_title, school_exam_meta, visual_anchor

[CONFIRMED CONTENT — COPY EXACTLY, DO NOT ADD FACTS]
{
  "schoolName": "OO고",
  "grade": "1학년",
  "examName": "1학기 기말고사",
  "subject": "수학",
  "headline": "기출 분석"
}

[SOURCE ASSETS — DO NOT REDRAW]
None.

[ASSET POLICY] 생성 가능. 로고는 제공 자산을 합성하고 모델이 새 로고를 만들지 않는다.
[COMPOSITION]
Use the hero_cover family. Keep one dominant message, clear title hierarchy, and the listed components in reading order.
[TEXT HIERARCHY]
Title first, one short explanatory layer second, evidence/detail third. Do not shrink body text to fit excessive content; leave a clearly labeled editable text area if needed.
[CONTINUITY]
Match the master project style exactly. This is slide 1, not a new standalone design.
[NEGATIVE CONSTRAINTS]
No invented facts, no altered formulas, no fake source image, no new logo, no random English, no illegible small Korean text, no clipped content, no extra CTA unless supplied.
[DELIVERABLE]
One 4:5 slide image with safe margins. Preserve explicit empty regions for source assets or editable text layers.
```

검수 체크:
- [ ] 학교명·학년·시험명 오탈자 없음
- [ ] 제목 위계 명확
- [ ] 본문 분석 수치 없음
- [ ] 마스터 스타일과 색·제목 위치·푸터가 일치한다.
- [ ] 입력 JSON 밖의 사실이 추가되지 않았다.

수정 프롬프트 템플릿:

```text
이전 1번 슬라이드를 부모 버전으로 유지하고 다음 항목만 수정하세요: [수정할 항목].
변경 금지: 캔버스 비율, 전체 색상 토큰, 제목 위치, 로고/푸터 위치, 제공된 원본 자산, 수정 요청에 포함되지 않은 텍스트와 숫자.
수정 후 변경된 항목과 그대로 보존한 항목을 각각 짧게 확인하세요.
```

## 2번 슬라이드 프롬프트 — 시험 구조

역할: `exam_structure` / 레이아웃: `metric_dashboard`

```text
[SLIDE 2/4]
[ROLE] exam_structure
[PURPOSE] 문항 수·배점·범위·서술형 구조를 한눈에 요약
[LAYOUT] metric_dashboard
[COMPONENTS] section_title, metric_cards, structure_summary, brand_footer

[CONFIRMED CONTENT — COPY EXACTLY, DO NOT ADD FACTS]
{
  "questionCount": "[Academy OS 확정값]",
  "scoreStructure": "[Academy OS 확정값]",
  "scope": "[Academy OS 확정값]",
  "summary": "[교사 검수 요약]"
}

[SOURCE ASSETS — DO NOT REDRAW]
None.

[ASSET POLICY] 정확한 숫자는 코드 텍스트 레이어 또는 후편집 우선.
[COMPOSITION]
Use the metric_dashboard family. Keep one dominant message, clear title hierarchy, and the listed components in reading order.
[TEXT HIERARCHY]
Title first, one short explanatory layer second, evidence/detail third. Do not shrink body text to fit excessive content; leave a clearly labeled editable text area if needed.
[CONTINUITY]
Match the master project style exactly. This is slide 2, not a new standalone design.
[NEGATIVE CONSTRAINTS]
No invented facts, no altered formulas, no fake source image, no new logo, no random English, no illegible small Korean text, no clipped content, no extra CTA unless supplied.
[DELIVERABLE]
One 4:5 slide image with safe margins. Preserve explicit empty regions for source assets or editable text layers.
```

검수 체크:
- [ ] 입력 숫자와 1:1 일치
- [ ] 확정되지 않은 평균·등급컷 금지
- [ ] 카드 3~5개 이내
- [ ] 마스터 스타일과 색·제목 위치·푸터가 일치한다.
- [ ] 입력 JSON 밖의 사실이 추가되지 않았다.

수정 프롬프트 템플릿:

```text
이전 2번 슬라이드를 부모 버전으로 유지하고 다음 항목만 수정하세요: [수정할 항목].
변경 금지: 캔버스 비율, 전체 색상 토큰, 제목 위치, 로고/푸터 위치, 제공된 원본 자산, 수정 요청에 포함되지 않은 텍스트와 숫자.
수정 후 변경된 항목과 그대로 보존한 항목을 각각 짧게 확인하세요.
```

## 3번 슬라이드 프롬프트 — 주요문항 1

역할: `key_question` / 레이아웃: `source_and_analysis_split`

```text
[SLIDE 3/4]
[ROLE] key_question
[PURPOSE] 원본 문제와 핵심 개념·풀이 전략·오답 지점을 함께 설명
[LAYOUT] source_and_analysis_split
[COMPONENTS] question_label, source_asset_frame, analysis_panel, concept_tags, error_point

[CONFIRMED CONTENT — COPY EXACTLY, DO NOT ADD FACTS]
{
  "questionNumber": "[확정 문항 번호]",
  "sourceAssetId": "exam-q-source-01",
  "concepts": [
    "[핵심 개념 1]",
    "[핵심 개념 2]"
  ],
  "strategy": "[검수된 풀이 전략]",
  "errorPoint": "[자주 틀리는 지점]"
}

[SOURCE ASSETS — DO NOT REDRAW]
[
  {
    "id": "exam-q-source-01",
    "fileName": "question-01.png",
    "usage": "원본 문제 프레임에 그대로 삽입",
    "crop": "문항 번호와 보기 전체를 포함"
  }
]

[ASSET POLICY] 원본 문제 crop을 그대로 삽입. 수식·보기·도형을 이미지 모델이 다시 쓰지 않는다.
[COMPOSITION]
Use the source_and_analysis_split family. Keep one dominant message, clear title hierarchy, and the listed components in reading order.
[TEXT HIERARCHY]
Title first, one short explanatory layer second, evidence/detail third. Do not shrink body text to fit excessive content; leave a clearly labeled editable text area if needed.
[CONTINUITY]
Match the master project style exactly. This is slide 3, not a new standalone design.
[NEGATIVE CONSTRAINTS]
No invented facts, no altered formulas, no fake source image, no new logo, no random English, no illegible small Korean text, no clipped content, no extra CTA unless supplied.
[DELIVERABLE]
One 4:5 slide image with safe margins. Preserve explicit empty regions for source assets or editable text layers.
```

검수 체크:
- [ ] 원본 crop 변형 없음
- [ ] 문항 번호 일치
- [ ] 개념·전략·오답이 서로 다른 정보
- [ ] 마스터 스타일과 색·제목 위치·푸터가 일치한다.
- [ ] 입력 JSON 밖의 사실이 추가되지 않았다.

수정 프롬프트 템플릿:

```text
이전 3번 슬라이드를 부모 버전으로 유지하고 다음 항목만 수정하세요: [수정할 항목].
변경 금지: 캔버스 비율, 전체 색상 토큰, 제목 위치, 로고/푸터 위치, 제공된 원본 자산, 수정 요청에 포함되지 않은 텍스트와 숫자.
수정 후 변경된 항목과 그대로 보존한 항목을 각각 짧게 확인하세요.
```

## 4번 슬라이드 프롬프트 — 다음 시험 대비

역할: `next_preparation` / 레이아웃: `checklist`

```text
[SLIDE 4/4]
[ROLE] next_preparation
[PURPOSE] 다음 시험까지 실행할 우선순위 학습 행동을 제시
[LAYOUT] checklist
[COMPONENTS] section_title, action_checklist, priority_highlight, brand_footer

[CONFIRMED CONTENT — COPY EXACTLY, DO NOT ADD FACTS]
{
  "actionItems": [
    "[실행 항목 1]",
    "[실행 항목 2]",
    "[실행 항목 3]"
  ]
}

[SOURCE ASSETS — DO NOT REDRAW]
None.

[ASSET POLICY] 생성 가능. 확정된 교육 계획만 사용.
[COMPOSITION]
Use the checklist family. Keep one dominant message, clear title hierarchy, and the listed components in reading order.
[TEXT HIERARCHY]
Title first, one short explanatory layer second, evidence/detail third. Do not shrink body text to fit excessive content; leave a clearly labeled editable text area if needed.
[CONTINUITY]
Match the master project style exactly. This is slide 4, not a new standalone design.
[NEGATIVE CONSTRAINTS]
No invented facts, no altered formulas, no fake source image, no new logo, no random English, no illegible small Korean text, no clipped content, no extra CTA unless supplied.
[DELIVERABLE]
One 4:5 slide image with safe margins. Preserve explicit empty regions for source assets or editable text layers.
```

검수 체크:
- [ ] 행동 문장으로 작성
- [ ] 3~5개 이내
- [ ] 시험 분석과 직접 연결
- [ ] 마스터 스타일과 색·제목 위치·푸터가 일치한다.
- [ ] 입력 JSON 밖의 사실이 추가되지 않았다.

수정 프롬프트 템플릿:

```text
이전 4번 슬라이드를 부모 버전으로 유지하고 다음 항목만 수정하세요: [수정할 항목].
변경 금지: 캔버스 비율, 전체 색상 토큰, 제목 위치, 로고/푸터 위치, 제공된 원본 자산, 수정 요청에 포함되지 않은 텍스트와 숫자.
수정 후 변경된 항목과 그대로 보존한 항목을 각각 짧게 확인하세요.
```

## 최종 세트 검수

- [ ] 슬라이드 번호와 역할 순서가 확정 목록과 일치한다.
- [ ] 학교명·학년·시험명·과목 표기가 모든 장에서 동일하다.
- [ ] 문제/풀이/표 원본이 재생성되지 않았고 자산 ID 연결이 유지된다.
- [ ] 한 장을 수정해도 다른 장의 확정 데이터가 바뀌지 않는다.
- [ ] 교사 검수 후 저장한 값이 AI 초안보다 우선한다.
