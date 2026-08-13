# 시험분석 슬라이드 역할 라이브러리 Gate 5

정형 원본: `docs/exam-analysis-slide-role-library-gate5-2026-07-21.json`

## 목적

Gate 5는 블로그 이미지를 복제하는 템플릿이 아니라, 반복되는 역할을 독립 모듈로 만든다. 학교가 바뀌어도 역할의 정보 구조는 유지되고 `schoolStyle`과 검수된 데이터만 교체된다.

각 역할은 다음 계약을 가진다.

- `purpose`: 그 장이 답해야 하는 질문
- `requiredData`: Academy OS가 확정해야 할 입력
- `layout`: Gate 3에서 관찰한 반복 레이아웃
- `components`: 생성 또는 합성할 시각 부품
- `assetPolicy`: GPT Image, 원본 삽입, 코드 렌더 중 무엇을 사용할지
- `qualityChecks`: 생성 후 사람이 통과시켜야 할 조건

## 제작 방식별 그룹

### GPT Image 중심

`cover`, `overall_review`, `next_preparation`, `academy_cta`

배경, 장식, 캐릭터/비주얼 앵커, 패널 스타일을 생성할 수 있다. 단, 최종 한글 텍스트는 가능하면 후편집 가능한 텍스트 레이어로 올린다.

### 혼합 합성

`key_question`, `solution`, `exam_structure`, `difficulty_flow`, `key_question_summary`

GPT Image는 프레임과 시각 체계를 만들고, 원본 문제·손풀이·정확한 수치는 Academy OS가 별도 레이어로 합성한다.

### 원본/코드 렌더 전용

`source_question`, `source_reference`, `data_reference`, `unit_distribution`

원본 수식·표·교재·데이터를 생성 모델이 다시 그리지 않는다. HTML/SVG/Canvas 또는 제공 이미지 crop을 사용한다.

## 공통 스타일 토큰

역할 모듈에 학교색을 직접 넣지 않고 프로젝트별로 다음 토큰을 주입한다.

```json
{
  "palette": {
    "primary": "#학교 주색",
    "secondary": "#보조색",
    "accent": "#강조색",
    "background": "#배경색",
    "text": "#본문색"
  },
  "visualMotif": "격자, 노트, 기하 도형 등 하나",
  "characterOrPhotoPolicy": "none | illustration | supplied_photo",
  "cornerStyle": "square | soft | round",
  "decorationLevel": "low | medium",
  "tone": "정확하고 친절한 학원 분석 보고서"
}
```

학교 스타일 토큰은 가독성을 해치거나 사실 데이터를 바꿀 수 없다. 색상은 장별로 임의 변경하지 않고 한 프로젝트 안에서 고정한다.

## 역할 선택의 사람 gate

Academy OS가 먼저 역할 시퀀스 초안을 제안하되, 교사가 문항 수와 슬라이드 목록을 확정한 뒤에만 상세 프롬프트를 생성한다. 역할을 재생성할 때 이미 수정·확정한 슬라이드 데이터와 원본 자산 연결을 덮어쓰지 않는다.

Gate 6은 이 라이브러리를 읽어 전역 마스터 프롬프트와 `1번 슬라이드`, `2번 슬라이드` 형식의 개별 프롬프트를 출력한다.
