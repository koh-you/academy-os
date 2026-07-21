# Academy OS 시험분석 GPT Image 제작실 전용 세션 프롬프트

이 파일 전체를 새 Codex 시험분석 세션에 그대로 복사해 붙여넣으세요. 아래 내용은 요약본이 아니라 구현 지침, 프롬프트 계약, 웹앱 작업 흐름, 저장 구조, 벤치마크 재접속 주소를 포함한 전체 프롬프트입니다.

---

Academy OS 시험분석 GPT Image 제작실 전용 세션입니다.

## 0. 세션 범위와 Git 충돌 방지

프로젝트 전체 미룬 작업 큐는 `운영 OS 저장 신뢰성 보강 -> 모달 통일 -> 발송 알림톡 템플릿 관리 -> App.jsx 리팩터링 -> Solapi 특강 템플릿 검수 후 연결` 순서입니다. 이번 세션은 사용자가 별도로 승인한 `시험분석 GPT Image 제작실`만 담당합니다. 시작 답변 최상단에 전체 큐와 이번 세션 범위를 함께 보여주세요.

- `E:\academy-os` main worktree는 유지보수 세션 소유입니다.
- 시험분석 작업은 별도 worktree `E:\academy-os-exam-analysis`와 `codex/exam-analysis-gpt-image` 브랜치를 사용하세요.
- 최신 `origin/main`을 fetch한 뒤 시작하고, 기존 worktree/브랜치가 있으면 상태를 먼저 확인하세요.
- 예상하지 못한 diff, staged 파일, 충돌이 있으면 코드를 수정하지 말고 사용자에게 보고하세요.
- 전용 브랜치만 commit/push하고 main에는 직접 merge/push하지 마세요.
- 실제 유료 이미지 호출, 운영 데이터 삭제, Storage 전체 삭제는 사용자 승인 없이 실행하지 마세요.

먼저 반드시 다음 파일을 읽으세요.

1. `AGENTS.md`
2. `docs/current-worklog.md`
3. `docs/next-session/README.md`
4. `docs/exam-analysis-gpt-image-benchmark-2026-07-21.md`
5. `docs/next-session/2026-07-04-ai-collaboration-retrospective.md`
6. `docs/save-persistence-audit-2026-07-20.md`
7. `supabase/20260703_exam_analysis_pipeline.sql`
8. `api/routes/examAnalysisPipeline.js`
9. `src/app/App.jsx`의 `ExamAnalysisPipelineCenter`, `ExamAnalysisOutputDraftPanel`
10. `src/domains/exams/finalPreview.js`
11. `src/domains/exams/ExamAnalysisFinalPreviewPanel.jsx`

## 1. 현재 구현 상태

- 시험분석 v2에는 `PDF 업로드 -> 문항 수 선생님 확정 -> 고정 문항 행 -> AI 분석 -> 선생님 검수 -> 최종 미리보기 -> 글/산출물 초안` 흐름이 구현돼 있습니다.
- main에는 `원본·PDF`, `문항 구조`, `AI 분석`, `선생님 검수`, `최종 미리보기`, `산출물`, `기록` 상단 탭 UI가 구현돼 있습니다.
- 먼저 운영 화면에서 탭 전환과 `reviewDrafts`/`outputDrafts` local draft 유지 사람 gate를 확인하세요. 이 UI를 다시 설계하거나 App.jsx 일반 리팩터링을 섞지 마세요.
- 현재 산출물은 GPT 기획 패킷, 블로그·인스타 초안, Canva 계획 TXT와 ZIP 중심입니다. 실제 GPT Image 생성, 수정 버전, 최종 선택본 저장은 없습니다.
- 과거 웹앱 HTML/CSS 카드 렌더러는 의도적으로 삭제됐습니다. 이를 되살리지 마세요.
- 이 세션의 목표는 Canva/미리캔버스 템플릿 편집기가 아니라 `GPT Image 장별 생성 -> 반복 수정 -> 버전 비교 -> 선생님 최종 선택`을 웹앱 안에서 수행하는 제작실입니다.

## 2. 벤치마크 블로그와 재접속 주소

반드시 아래 블로그를 새 세션에서 다시 직접 열어 최근 게시물과 이미지 구성을 확인하세요.

- 블로그 홈: `https://blog.naver.com/skills_in_math2`
- 공개 RSS: `https://rss.blog.naver.com/skills_in_math2.xml`
- 용화여고: `https://blog.naver.com/skills_in_math2/224342833914`
- 대진고: `https://blog.naver.com/skills_in_math2/224337331315`
- 혜성여고: `https://blog.naver.com/skills_in_math2/224337226514`
- 불암중2: `https://blog.naver.com/skills_in_math2/224336139893`
- 청원여고: `https://blog.naver.com/skills_in_math2/224336057258`
- 불암중3: `https://blog.naver.com/skills_in_math2/224335632563`
- 중계중3: `https://blog.naver.com/skills_in_math2/224335439295`
- 중계중2: `https://blog.naver.com/skills_in_math2/224334587885`
- 선덕고: `https://blog.naver.com/skills_in_math2/224333602669`
- 을지중3: `https://blog.naver.com/skills_in_math2/224333637966`

블로그 홈 접근이 자동 브라우저에서 차단되면 로그인 우회를 시도하거나 계정 쿠키를 요구하지 마세요. 공개 RSS에서 `logNo`를 찾은 뒤 아래 공개 PostView 경로를 사용하세요.

```text
https://blog.naver.com/PostView.naver?blogId=skills_in_math2&logNo={{logNo}}
```

2026-07-21 조사에서는 로그인 없이 공개 RSS와 PostView로 본문, 원본 이미지 URL, 파일명, 이미지 크기를 확인할 수 있었습니다. 접근이 다시 가능하면 게시물의 카드 순서, 이미지 비율, 학교별 색, 주요문항/손풀이 배치, 본문 후킹과 CTA 흐름을 다시 표로 정리하세요.

이미 확인된 사실:

- 혜성여고, 불암중2, 중계중3 게시물은 이미지 10장 모두 파일명이 `ChatGPT_Image_...png`였습니다.
- 용화여고는 8장 중 6장, 선덕고는 14장 중 12장이 같은 파일명 규칙이었습니다.
- 혜성여고와 불암중2는 초기 세트 중 일부 이미지만 수 시간 뒤 생성본으로 교체되어 장별 반복 수정 흔적이 있습니다.
- 학교마다 녹색 2:3, 보라색 4:5, 분홍색 정사각형 등 비율과 시각 계열이 다릅니다.
- 반복되는 정보 역할은 `표지 -> 시험 구조 -> 총평 -> 주요문항 원문 -> 손풀이 -> 다음 대비 -> 신뢰/CTA`입니다.
- 주요문항과 손풀이 카드는 검수된 원본 이미지를 큰 슬롯에 넣고 GPT Image가 제목, 프레임, 요약, 아이콘을 구성한 하이브리드에 가깝습니다.
- 동일한 카드 번호가 중복된 사례가 있으므로 번호, 학교명, 학년/고사, 한글, 수학식, 로고, 순서를 반드시 사람이 검수해야 합니다.

## 3. 후킹 문구 벤치마킹 원칙

게시물의 후킹 문구와 본문 흐름은 적극적으로 분석하되 특정 블로그 문장을 장문으로 복제하지 마세요. 원문을 그대로 저장하는 것이 아니라 다음 세 층으로 분리합니다.

```text
reference observation: 어떤 방식으로 관심을 끄는가
hook pattern: 재사용 가능한 문장 구조와 심리 장치
academy rewrite: 우리 시험 데이터와 으뜸수학 말투로 새로 쓴 문장
```

웹앱에서 저장할 후킹 참고 구조 예시:

```json
{
  "sourceUrl": "https://blog.naver.com/skills_in_math2/{{logNo}}",
  "sourceSchool": "벤치마크 학교명",
  "placement": "opening | section_heading | key_question | transition | cta",
  "observation": "점수 차이가 난 지점을 먼저 질문으로 제시한다",
  "pattern": "{{시험 체감 질문}} + {{실제 변별 지점 예고}}",
  "toneTags": ["학부모 관점", "궁금증", "전문성"],
  "academyRewrite": "이번 시험, 계산이 어려웠을까요? 실제 점수 차이는 조건을 식으로 옮기는 순간에 벌어졌습니다.",
  "teacherEdited": "",
  "approved": false
}
```

후킹 패턴 라이브러리는 최소한 다음 위치를 지원해야 합니다.

1. 첫 문장: 학교명·시험명과 바로 연결되는 질문 또는 결론
2. 한 줄 총평: 점수를 가른 핵심을 짧게 예고
3. 구조 전환: 전체 시험에서 주요문항으로 시선을 옮기는 문장
4. 주요문항 진입: 왜 이 문항을 봐야 하는지 설명
5. 풀이 진입: 정답보다 풀이 과정의 핵심을 예고
6. 다음 대비: 분석 결과를 행동 과제로 전환
7. CTA: 과장 광고가 아니라 분석 결과와 수업 방향을 연결

후킹 생성 시 반드시 시험분석의 `final_fields > teacher_fields > ai_fields` 원천만 사용합니다. 제공되지 않은 성적 분포, 학생 반응, 등급컷, 적중 결과, 학원 성과를 만들어내지 마세요. AI 초안은 선생님이 편집하고 저장할 수 있어야 하며, 한 번 저장된 선생님 수정본은 자동 재생성으로 덮어쓰지 마세요.

## 4. 전체 제작 원칙

목표는 매 시험마다 긴 프롬프트를 새로 쓰는 것이 아닙니다. 아래 다섯 층을 조립하는 반복 가능한 구조를 구현하세요.

```text
고정 브랜드 규칙
+ 학교별 style brief
+ 카드 역할별 layout contract
+ 시험별 verified content
+ 원본 문제/손풀이 asset slot
+ 현재 선택 버전에 대한 revision instruction
```

서버에서 사용할 개념적 조립 구조:

```text
MASTER_PROMPT
  ├─ STYLE_BRIEF
  ├─ SLIDE_ROLE_TEMPLATE
  ├─ VERIFIED_CONTENT
  ├─ SOURCE_ASSETS
  └─ REVISION_INSTRUCTION
```

완전히 동일한 이미지 재현을 약속하지 마세요. 반복 가능성은 픽셀 재현이 아니라 `정보 구조`, `브랜드 계약`, `역할별 레이아웃`, `검수된 원천`, `부모 이미지 기반 수정`, `버전 이력`을 고정하여 확보합니다.

## 5. 전체 마스터 이미지 프롬프트

아래 템플릿은 서버의 버전 관리된 마스터 프롬프트로 저장할 기준입니다. `{{...}}` 내부 값만 구조화된 데이터에서 채웁니다.

```text
[MASTER BRAND]
으뜸수학 고태영T 시험분석 카드뉴스의 한 장을 제작한다.
이 이미지는 실제 시험 분석 내용을 학부모와 학생이 빠르게 이해하도록 정리하는 교육용 인포그래픽이다.

[STYLE BRIEF]
학교: {{schoolName}}
학교급: {{schoolLevel}}
학년·시험: {{gradeExam}}
카드 비율: {{aspectRatio}}
주조색: {{primaryColor}}
보조색: {{secondaryColor}}
시각 스타일: {{visualStyle}}
분위기: {{tone}}
정보 밀도: {{visualDensity}}

[SLIDE ROLE]
카드 번호: {{slideNumber}} / {{totalSlides}}
카드 역할: {{slideRole}}
이 카드의 단 하나의 핵심 메시지:
{{coreMessage}}

[LAYOUT CONTRACT]
{{slideRoleLayout}}

[VERIFIED CONTENT]
다음 내용은 선생님이 검수한 사실이다.
의미, 숫자, 문항번호, 학교명, 수학 용어를 변경하거나 추측하지 않는다.

제목:
{{title}}

부제:
{{subtitle}}

본문:
{{body}}

강조 항목:
{{highlightItems}}

하단 한 줄:
{{bottomSummary}}

[IMAGE SLOTS]
{{sourceImageInstructions}}

[BRAND RULES]
- 으뜸수학 고태영T 브랜드 카드로 제작한다.
- 모든 카드에서 동일한 로고 위치와 하단 브랜드 띠를 유지한다.
- 카드 번호는 모든 카드의 같은 위치에 표시한다.
- 큰 제목, 명확한 정보 위계, 충분한 여백을 사용한다.
- 한 장에는 하나의 핵심 메시지만 담는다.
- 학교별 주조색을 사용하되 전체 세트의 브랜드 구조는 유지한다.
- 스마트폰에서 읽을 수 있는 큰 글자를 사용한다.
- 전문적이지만 지나치게 딱딱하지 않은 학원 시험분석 디자인으로 만든다.

[TEXT SAFETY]
- 제공되지 않은 점수, 등급컷, 정답, 문항번호, 단원, 출처를 생성하지 않는다.
- 제공된 사실과 숫자를 임의로 요약하거나 바꾸지 않는다.
- 한글, 숫자, 수학 기호를 정확하게 표시한다.
- 긴 문장을 억지로 넣지 말고 정해진 정보만 읽기 쉽게 배치한다.
- 문제 원문과 손풀이를 새로 그리지 않는다.
- 판독이 불확실한 정보는 이미지에 넣지 않고 검수 필요 상태로 남긴다.

[NEGATIVE RULES]
- 모든 카드가 똑같은 Canva 박스 템플릿처럼 보이지 않게 한다.
- 의미 없는 차트, 가짜 통계, 가짜 수학식, 가짜 문제를 만들지 않는다.
- 로고나 학원명을 임의로 변형하지 않는다.
- 사진처럼 사실적인 학생 인물을 중심 요소로 사용하지 않는다.
- 장식이 본문보다 눈에 띄지 않게 한다.
- 카드 번호를 중복하거나 누락하지 않는다.
- 벤치마크 블로그의 디자인을 그대로 복제하지 않는다.

[OUTPUT]
{{aspectRatio}} 비율의 카드뉴스 이미지 한 장.
지정된 카드 역할과 검증된 내용만 표현한다.
```

## 6. 카드 역할별 레이아웃 모듈

### 6.1 표지 `cover`

```text
카드 역할: cover
- 학교명과 시험명을 가장 크게 표시한다.
- 한 줄 총평을 두 번째 시각 요소로 배치한다.
- 시험을 상징하는 간단한 기하학적 장식이나 학습 아이콘을 사용한다.
- 상세 수치와 긴 설명은 넣지 않는다.
- 첫 장임을 알 수 있는 강한 표지 구성을 사용한다.
```

필드: `title`, `subtitle`, `bottomSummary`, `schoolName`, `gradeExam`.

### 6.2 시험 구조 `exam_structure`

```text
카드 역할: exam_structure
- 상단에 시험 구조 제목을 표시한다.
- 중앙에 문항 수, 객관식/서술형 구성, 시험 범위를 3~4개 정보 블록으로 배치한다.
- 가장 중요한 검증 수치를 가장 크게 표시한다.
- 시험 전체를 한눈에 이해할 수 있는 인포그래픽 형태로 구성한다.
- 제공되지 않은 통계와 그래프는 만들지 않는다.
```

필드: `questionCount`, `objectiveCount`, `constructedCount`, `examScope`, `verifiedStats`.

### 6.3 전체 총평 `overall_review`

```text
카드 역할: overall_review
- 한 줄 총평을 가장 크게 표시한다.
- 쉬운 영역, 변별 영역, 실수 위험을 최대 세 구역으로 나눈다.
- 각 구역에는 검수된 짧은 문장만 사용한다.
- 학부모가 5초 안에 시험 특징을 이해할 수 있게 한다.
```

필드: `overallSummary`, `accessibleArea`, `discriminationArea`, `mistakeRisk`.

### 6.4 단원·유형 분포 `distribution`

```text
카드 역할: distribution
- 검수된 단원별 문항 수와 난이도 분포만 사용한다.
- 복잡한 표를 그대로 옮기지 말고 핵심 분포를 시각적으로 비교한다.
- 합계가 실제 문항 수와 일치해야 한다.
- 시각화 전에 서버에서 합계와 원천 snapshot을 검증한다.
```

필드: `unitBreakdown`, `difficultyDistribution`, `questionCount`, `sourceSnapshotId`.

### 6.5 주요문항 원문 `key_question`

```text
카드 역할: key_question
- 제공된 문제 원문 이미지를 중앙의 가장 큰 영역에 그대로 배치한다.
- 문제 이미지의 글자, 도형, 수학식을 다시 생성하거나 수정하지 않는다.
- 주변에 문항번호, 출제 단원, 핵심 개념, 변별 포인트를 배치한다.
- 문제 이미지 영역과 해설 영역을 명확히 구분한다.
- 원본 문제가 잘리지 않도록 충분한 여백을 둔다.
```

필드: `questionNumber`, `unit`, `coreConcept`, `difficulty`, `discriminationPoint`, `questionImageAssetId`.

### 6.6 손풀이 `solution`

```text
카드 역할: solution
- 제공된 선생님 손풀이 이미지를 중앙의 가장 큰 영역에 그대로 배치한다.
- 손글씨, 수학식, 기호를 다시 작성하거나 변형하지 않는다.
- 풀이 핵심, 주의할 실수, 다음 학습 포인트를 주변에 짧게 배치한다.
- 노트나 풀이 해설지처럼 자연스럽고 신뢰감 있게 구성한다.
```

필드: `questionNumber`, `solutionKeyPoints`, `mistakeWarning`, `nextLearningPoint`, `solutionImageAssetId`.

### 6.7 다음 시험 대비 `next_preparation`

```text
카드 역할: next_preparation
- 다음 시험까지 해야 할 학습 과제를 세 개 이내로 제시한다.
- 각 항목을 실행 가능한 행동 문장으로 표현한다.
- 마지막 카드처럼 정돈된 마무리 느낌을 준다.
- 과도한 광고 문구보다 분석 결과에서 이어지는 학습 방향을 강조한다.
```

필드: `preparationActions`, `priorityUnit`, `practiceDirection`.

### 6.8 신뢰·상담 연결 `cta`

```text
카드 역할: cta
- 앞선 분석에서 도출된 학습 방향과 실제 수업 연결점을 먼저 표시한다.
- 검증되지 않은 성과, 적중률, 성적 향상 수치를 만들지 않는다.
- 상담/문의 정보는 설정에 저장된 공식 값만 사용한다.
- 과장 광고보다 분석의 전문성과 다음 행동을 강조한다.
```

필드: `learningConnection`, `courseConnection`, `officialCta`, `contactInfo`.

## 7. 학교별 Style Brief 예시와 편집 UI

중학교 예시:

```json
{
  "schoolName": "불암중학교",
  "schoolLevel": "middle",
  "aspectRatio": "1:1",
  "primaryColor": "#E97A9A",
  "secondaryColor": "#FFF3F6",
  "visualStyle": "깔끔한 수학 노트, 연한 격자, 작은 손그림 장식",
  "tone": "친근하고 명확한 중학생 시험 해설",
  "visualDensity": "medium"
}
```

고등학교 예시:

```json
{
  "schoolName": "혜성여자고등학교",
  "schoolLevel": "high",
  "aspectRatio": "4:5",
  "primaryColor": "#6651A6",
  "secondaryColor": "#F3F0FA",
  "visualStyle": "정돈된 학술 보고서, 수치형 정보 블록, 절제된 기하학 장식",
  "tone": "전문적이고 신뢰감 있는 입시 분석",
  "visualDensity": "medium-high"
}
```

웹앱에서 Style Brief는 JSON을 직접 편집하게 하지 말고 다음 필드로 보여주세요.

- 학교/학교급/학년/시험
- 이미지 비율
- 주조색/보조색
- 시각 스타일 preset과 선생님 추가 메모
- 말투와 정보 밀도
- 공식 로고 asset
- 세트 전체에서 잠글 요소
- 선생님 저장본과 마지막 서버 확인 시각

학교별 style은 기본 제안할 수 있지만 선생님이 수정하고 저장한 뒤에는 그 값이 원본입니다. AI 재추천으로 덮어쓰지 마세요.

## 8. 반복 수정 전용 프롬프트

수정할 때 마스터 프롬프트만 다시 보내 처음부터 생성하지 마세요. 사용자가 선택한 현재 이미지 버전을 reference로 넣고 수정 차이만 전달합니다.

```text
[REVISION MODE]

첨부한 이미지는 이 카드의 현재 선택 버전 {{currentVersion}}이다.
새로운 디자인으로 다시 시작하지 말고 현재 구도, 색상, 크기, 장식,
브랜드 위치를 최대한 유지한다.

수정할 내용:
{{revisionInstruction}}

반드시 유지할 내용:
{{protectedElements}}

정확히 교체할 문구:
기존: {{oldText}}
수정: {{newText}}

변경 금지:
- 카드 번호
- 학교명과 시험명
- 원본 문제/손풀이 이미지
- 로고 위치
- 이미지 비율
- 지정하지 않은 본문
- 현재 색상 체계

이번 수정 요청에 포함되지 않은 요소는 변경하지 않는다.
수정된 전체 이미지 한 장을 출력한다.
```

웹앱은 수정 전에 `현재 선택 버전`, `수정 요청`, `보호 요소`, `정확한 문구 교체`를 각각 입력하게 해야 합니다. 수정 결과는 기존 파일을 덮어쓰지 않고 새 version row와 새 Storage object로 저장합니다.

## 9. 웹앱 작업 흐름

기존 시험분석 상단 탭에 `GPT 이미지` 탭을 추가하거나 `산출물` 안에 `글 초안 | GPT 이미지` 하위 탭을 둡니다. 어느 위치가 현재 구조와 충돌이 적은지 코드 inventory 후 선택하세요.

### 단계 A. 분석 원천 확인

- 현재 run, 학교, 학년, 시험, 확정 문항 수를 표시합니다.
- 이미지에 사용할 값이 `final_fields > teacher_fields > ai_fields` 중 어디서 왔는지 표시합니다.
- 미확정 문항, 저장하지 않은 선생님 검수값, 원천 불일치가 있으면 카드 구성을 잠급니다.
- 원천 snapshot ID/hash를 생성해 이후 이미지 버전과 연결합니다.

### 단계 B. 이미지 세트 만들기

- `새 GPT 이미지 세트` 버튼은 DB row만 만들며 유료 호출을 하지 않습니다.
- Style Brief 초안을 제안하고 선생님이 편집·저장합니다.
- 기본 카드 역할을 제안하되 주요문항 수에 따라 선생님이 8~14장 구성을 확정합니다.
- 카드 추가, 삭제, 순서 변경, 역할 변경은 아직 이미지 비용을 발생시키지 않습니다.
- `장 구성 저장` 후 Supabase 재조회 대조가 끝나야 저장 완료로 표시합니다.

### 단계 C. 카드별 검증 내용 편집

- 카드 목록에서 한 장을 선택합니다.
- 해당 역할에 필요한 verified content만 폼으로 보여줍니다.
- AI 초안과 선생님 수정본을 구분합니다.
- 문제/손풀이 카드는 검수된 crop asset을 업로드·선택하게 합니다.
- 프롬프트 미리보기는 구조화 필드에서 조립하되 선생님이 수정할 수 있는 local draft를 별도로 둡니다.
- 선생님 저장본은 AI 자동 조립으로 덮어쓰지 않습니다.

### 단계 D. 한 장 생성

- `이 카드 초안 생성` 버튼을 누르기 전 예상 과금, 카드 역할, 비율, 입력 asset, 원천 snapshot을 확인시킵니다.
- 명시적 확인 후에만 한 장을 호출합니다. 자동 10장 일괄 생성은 금지합니다.
- 같은 영역에 `생성 요청 중 -> 이미지 생성 중 -> Storage 저장 중 -> DB 저장 확인 중 -> 생성 완료/실패`를 표시합니다.
- API 응답만 성공하고 Storage/DB 재조회가 일치하지 않으면 완료로 표시하지 않습니다.
- 실패 시 프롬프트 draft와 기존 버전을 유지합니다.

### 단계 E. 검수와 반복 수정

- 현재 이미지 옆에 번호, 학교명, 학년/시험, 문항번호, 숫자, 한글, 수학식, 로고, CTA 체크리스트를 표시합니다.
- 사용자가 기준 버전을 선택하고 수정 지시를 입력합니다.
- 수정 생성은 선택한 parent version 이미지와 revision prompt를 사용합니다.
- v1/v2/v3 타임라인에서 이미지, 생성 프롬프트, 수정 지시, 모델, 생성 시각, 원천 snapshot을 비교합니다.
- 최종 선택은 version row의 상태를 바꾸되 다른 버전을 삭제하지 않습니다.

### 단계 F. 원천 변경 감지

- 분석 run의 final/teacher 원천이 이미지 생성 당시 snapshot과 달라지면 `원천 변경됨`을 표시합니다.
- 기존 이미지와 최종 선택을 자동 삭제하거나 자동 재생성하지 않습니다.
- 어떤 필드가 바뀌었는지 diff를 보여주고 선생님이 유지/새 버전 생성/세트 복제를 선택합니다.

### 단계 G. 후킹 글과 본문 조립

- 이미지와 별도로 `블로그 글` 작업영역을 둡니다.
- 벤치마크 후킹 패턴 라이브러리에서 첫 문장, 전환, 주요문항 진입, 다음 대비, CTA 패턴을 선택합니다.
- 실제 문장은 현재 시험의 검수 데이터로 새로 생성합니다.
- `AI 초안 -> 선생님 편집 -> 저장 -> 최종본 선택` 순서를 사용합니다.
- 블로그 본문 흐름은 `인사/후킹 -> 한 줄 총평 -> 시험 구조 -> 변별 포인트 -> 주요문항/손풀이 반복 -> 다음 대비 -> 수업 연결 -> 공식 CTA`를 기본 제안하되 선생님이 순서를 편집할 수 있게 합니다.
- 벤치마크 원문을 장문으로 저장하거나 그대로 복사하지 말고 source URL, 관찰, 패턴, 우리 문장만 저장합니다.

### 단계 H. 내보내기

- 최종 선택된 카드만 번호순으로 ZIP 다운로드합니다.
- 파일명에는 학교, 학년, 시험, 카드번호, 역할, final version을 포함합니다.
- 블로그 최종본 TXT/Markdown과 카드 이미지 목록 manifest를 함께 내보냅니다.
- Canva/미리캔버스는 필요할 때 최종 선택 이미지를 배치하는 선택적 후처리 수단일 뿐 원본이 아닙니다.

## 10. 권장 저장 모델

코딩 전에 현재 v2 스키마와 API를 확인하고 아래 구조를 표로 검토하세요. 실제 SQL은 새 `supabase/<date>_exam_analysis_gpt_images.sql` 파일로만 만들고 운영 적용은 사용자가 직접 합니다.

### `exam_analysis_image_sets`

- `id`
- `run_id`
- `source_snapshot_id` 또는 hash
- `style_brief`
- `slide_plan`
- `status`: draft/confirmed/generating/review/final
- `created_by`, `created_at`, `updated_at`, `version`

### `exam_analysis_image_versions`

- `id`
- `image_set_id`
- `slide_id` 또는 안정된 slide key
- `slide_order`, `slide_role`
- `version_number`
- `parent_version_id`
- `source_snapshot`
- `verified_content`
- `generation_prompt`
- `revision_instruction`
- `protected_elements`
- `provider`, `model`, `request_id`, `usage/cost metadata`
- `storage_path`, `mime_type`, `width`, `height`
- `status`: requested/generating/stored/failed/final
- `is_final`
- `error_code`, `error_message`
- `created_at`, `created_by`

### `exam_analysis_image_assets`

- 문제 원문 crop, 손풀이, 공식 로고 등 입력 asset
- `run_id`, `asset_type`, `question_id`, `storage_path`
- 원본 파일명, mime, 크기, checksum
- 선생님 검수 상태
- 개인정보/저작권 확인 상태

### `exam_analysis_hook_patterns`

- `source_url`
- `placement`
- `observation`
- `pattern`
- `tone_tags`
- `academy_rewrite`
- `teacher_draft`, `final_text`
- `approved`, `updated_at`

이미지 base64, 전체 버전 배열, 대용량 프롬프트 이력을 `app_state`, localStorage, `audit_summary` 한 row에 넣지 마세요. localStorage는 저장 원본이 아니라 입력 복구용 local draft가 필요한 경우에만 제한적으로 검토합니다.

Storage는 비공개 bucket을 사용하고 교사 권한, run 소유권, signed URL, 삭제 권한을 확인하세요. 경로를 안다는 이유만으로 파일이 열리면 안 됩니다.

## 11. API와 상태 계약

코딩 전 실제 라우팅 스타일을 조사한 뒤 최소 API를 설계하세요.

- 세트 생성/조회/수정
- 장 구성 저장 후 재조회 확인
- 입력 asset 업로드/조회/삭제
- 한 장 생성 요청
- 생성 상태 조회
- 선택 version 기반 수정 생성
- final version 선택
- version/세트 삭제: 참조 관계와 Storage 삭제 범위를 분리
- source snapshot diff 조회
- 후킹 패턴/선생님 수정본 저장
- 최종 ZIP/manifest 생성

생성 요청은 브라우저에서 OpenAI로 직접 보내지 말고 서버에서 수행합니다. OpenAI API를 구현할 때는 `openai-docs` skill과 최신 공식 문서만 사용하세요. 모델명, 이미지 편집 요청 방식, 지원 비율, reference 입력 제한, 응답 형식, 비용을 기억으로 정하지 마세요.

중복 클릭과 재시도에 대비해 idempotency key 또는 안정된 request key를 설계하세요. 유료 호출이 성공했지만 응답 저장이 실패한 경우 동일 요청을 무조건 다시 과금하지 않도록 provider request ID와 작업 상태를 남기세요.

## 12. UI 구성 권장안

상단:

- 세트 선택/상태
- source snapshot 상태
- Style Brief 요약
- 저장 상태
- 원천 변경 경고

좌측 또는 상단 가로 목록:

- 8~14장 카드
- 카드 번호, 역할, 생성 여부, 검수 여부, final 여부
- 순서 변경과 카드 추가/삭제

중앙:

- 선택 카드 현재 이미지
- 문제/손풀이/로고 입력 asset
- 버전 비교
- 확대 검수

우측:

- verified content 폼
- 조립된 생성 프롬프트
- 프롬프트 local draft
- 수정 요청과 보호 요소
- 생성/수정 생성 버튼과 예상 과금

하단:

- v1/v2/v3 타임라인
- parent version 연결
- 생성 프롬프트/수정 지시/원천 snapshot
- final 선택과 다운로드

상태 문구는 현재 작업 영역 안에서 다음 모델을 통일합니다.

```text
편집 중(미저장)
저장 중
서버 반영 확인 중
저장 완료
저장 실패

생성 요청 준비
생성 요청 중
이미지 생성 중
Storage 저장 중
DB 반영 확인 중
생성 완료
생성 실패
```

## 13. 필수 보호 원칙

- 유료 이미지 호출은 장별 명시적 버튼으로만 실행합니다.
- 자동 10장 일괄 생성은 금지합니다.
- 기본 카드 역할은 제안할 수 있지만 8~14장 구성은 선생님이 확정합니다.
- AI는 문항 수, 문항번호, 점수, 등급컷, 유사문항, 정답, 풀이를 새로 추측하지 않습니다.
- 문제 원문과 손풀이는 검수된 업로드 이미지를 사용합니다.
- 선생님 최종 선택본은 재생성으로 덮어쓰지 않습니다.
- 분석 데이터 변경 시 자동 재생성하지 않고 `원천 변경됨` 경고만 표시합니다.
- 수정 생성은 사용자가 선택한 직전 version을 reference로 사용하고 parent chain을 유지합니다.
- 공식 로고는 GPT가 다시 그리게 두지 말고 reference 고정 또는 생성 후 결정론적 합성을 우선 검토합니다.
- 한글과 수학식은 프롬프트만으로 정확성을 보장한다고 가정하지 않습니다.
- 벤치마크의 정보 전략은 배우되 디자인과 문장을 그대로 복제하지 않고 `으뜸수학 고태영T` 브랜드로 재설계합니다.
- 선생님이 저장한 style, hook, prompt, verified content, final selection은 AI 재추천으로 덮어쓰지 않습니다.

## 14. Gate별 구현 순서

한 번에 하나의 gate만 진행하고, 각 gate마다 저장 원천, 외부 side effect, 사람 검토, 중단 조건을 먼저 제시하세요.

### Gate 0. 설계와 사람 승인

- 기존 데이터 원천 inventory
- OpenAI 이미지 API 최신 공식 문서 확인
- 저장 테이블, Storage, 권한, 삭제 범위
- 예상 비용과 재시도 계약
- 후킹 패턴 저장/저작권 원칙
- 실제 코드/SQL/유료 호출 없음

### Gate 1. 저장·UI 골격

- 새 SQL 파일과 비공개 Storage 설계
- 세트/카드 구성/style/후킹 패턴 CRUD
- GPT 이미지 작업 탭 UI
- 상태 표시와 재조회 확인
- 실제 유료 이미지 호출 없음

### Gate 2. 한 장 초안 생성

- 사용자 비용 승인 후 통제된 테스트 run만 사용
- 표지 또는 전체 총평 한 장 생성
- provider 응답, Storage, version row 저장 검증
- 새로고침·재로그인 유지 확인

### Gate 3. 반복 수정과 버전 선택

- 선택 parent 이미지 기반 수정 생성
- revision instruction/protected elements 저장
- v1/v2/v3 비교
- final 선택과 기존 버전 보존

### Gate 4. 주요문항/손풀이 하이브리드

- 검수된 문제 crop과 손풀이 asset
- 원문 변형/잘림 방지 검수
- 주요문항/풀이 카드 생성
- 번호·수식·한글 사람 gate

### Gate 5. 후킹 글과 묶음 내보내기

- 블로그 재분석과 hook pattern 라이브러리
- 현재 시험 데이터 기반 academy rewrite
- 선생님 편집/저장/final
- 최종 이미지 ZIP, manifest, 블로그 TXT/Markdown

## 15. 사람 검토 절차

각 gate 종료 답변에는 다음을 실제 변경 범위에 맞춰 구체적으로 작성하세요.

1. 최신 커밋과 전용 브랜치/로컬 URL
2. 사용할 테스트 run과 건드리면 안 되는 운영 데이터
3. 화면에서 누를 버튼과 기대 상태 문구
4. Supabase table, Storage, local draft 중 각 값의 저장 위치
5. 새로고침·재로그인 후 유지 확인
6. 실패/재시도/부분 저장/중복 과금 중단 조건
7. 가까운 기존 시험분석 기능 회귀 확인
8. 다음 gate로 넘어갈 정확한 통과 기준

시험분석 탭을 건드렸으므로 `학교 -> 학년 -> 고사 -> 분석` 선택, PDF 원천, 문항 수 확정, 문항 행, 선생님 검수본, 최종 미리보기, GPT 이미지 탭의 source snapshot 연결을 함께 확인하세요.

## 16. AI 자기검토

완료 전 다음 질문에 답하세요.

1. 이 작업은 시험분석에서 어떤 최종 산출물을 만드는 단계인가?
2. AI 초안, local draft, 선생님 저장본, final 선택본은 각각 어디에 저장되는가?
3. 이미지와 후킹 글이 어떤 검수된 시험 원천을 사용하는가?
4. 선생님 수정본과 final 이미지가 자동 재생성으로 보호되는가?
5. 유료 호출과 Storage/DB 저장 실패를 어떻게 분리하는가?
6. source snapshot이 바뀌면 기존 이미지와 글은 어떻게 보호되는가?
7. 블로그에서 배운 후킹 패턴을 원문 복제 없이 어떻게 우리 문장으로 바꾸는가?
8. 번호, 학교명, 한글, 수학식, 로고, CTA 오류를 사람이 어디서 검수하는가?

답할 수 없는 항목이 있으면 코딩하지 말고 더 조사하거나 사용자에게 확인하세요.

## 17. 이 세션의 첫 응답 요구사항

파일을 모두 읽고 블로그에 다시 접속한 뒤, 코드를 수정하기 전에 다음을 사용자에게 먼저 보여주세요.

1. 전체 미룬 작업 큐와 이번 시험분석 세션 범위
2. 현재 v2 원천과 GPT Image 제작실이 연결될 지점
3. 블로그 10건 재접속 결과와 카드/후킹 패턴 표
4. `AI 초안 -> 선생님 편집 -> 저장본 원본화 -> GPT Image 버전 -> final` 데이터 흐름
5. 제안 테이블/API/Storage/권한/비용/삭제 계약
6. Gate 0에서 사람이 결정해야 할 최소 선택지

이 첫 응답과 사람 승인이 끝나기 전에는 SQL, API, UI, OpenAI 호출을 구현하지 마세요.

