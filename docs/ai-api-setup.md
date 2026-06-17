# AI API Setup

academy-os의 AI 기능은 Render 백엔드에서만 API Key를 읽습니다.
프론트 화면에는 Key를 넣지 않습니다.

## 적용되는 기능

- 수업일지 강사코멘트 AI 수정
- 수업일지 학생코멘트 AI 수정
- 시험분석 AI 초안 생성
- 시험대비 시험 후 총평 수정본 생성

## Render 환경변수

둘 중 하나만 있어도 동작합니다.

```text
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
```

선택 환경변수입니다.

```text
AI_DEFAULT_PROVIDER=openai
OPENAI_MODEL=gpt-4.1-mini
ANTHROPIC_MODEL=claude-sonnet-4-5
```

`AI_DEFAULT_PROVIDER`를 비워두면 서버가 자동으로 선택합니다.

1. `OPENAI_API_KEY`가 있으면 OpenAI를 먼저 사용합니다.
2. OpenAI Key가 없고 `ANTHROPIC_API_KEY`가 있으면 Claude를 사용합니다.
3. 둘 다 없으면 테스트 응답을 사용합니다.

## 화면 사용법

수업일지와 시험분석 화면의 AI API 선택값은 기본적으로 `자동 선택`입니다.
이 상태에서는 Render 환경변수에 등록된 Key 기준으로 실제 API가 호출됩니다.

테스트만 하고 싶을 때는 화면에서 `테스트 모드`를 선택합니다.

## 확인 URL

백엔드 상태 확인:

```text
https://koh-you-math-academy-os-api.onrender.com/api/integrations/status
```

응답의 `ai.providers.openai` 또는 `ai.providers.anthropic` 값이 `true`이면 해당 API Key가 서버에 정상 등록된 상태입니다.

