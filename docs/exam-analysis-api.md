# AI API 설정

시험분석과 수업일지 코멘트 다듬기는 백엔드 API 서버가 AI 제공자를 호출합니다.
브라우저에는 OpenAI/Claude API Key를 저장하지 않습니다.

## 지원 모드

- `mock`: API Key 없이 로컬 예시 응답을 만듭니다.
- `openai`: OpenAI Responses API를 호출합니다.
- `anthropic`: Anthropic Messages API를 호출합니다.

## Render 환경변수

```env
OPENAI_API_KEY=
OPENAI_EXAM_ANALYSIS_MODEL=gpt-4.1-mini
ANTHROPIC_API_KEY=
ANTHROPIC_EXAM_ANALYSIS_MODEL=claude-sonnet-4-5
```

현재 프론트 선택 목록:

- OpenAI: `gpt-4.1-mini`, `gpt-4.1`, `gpt-4o-mini`
- Claude: `claude-sonnet-4-5`, `claude-3-5-sonnet-latest`, `claude-3-5-haiku-latest`
- Mock: `local-mock`

## 사용하는 화면

시험분석:

- 시험 원본/OCR/메모를 입력합니다.
- AI API를 눌러 정해진 필드의 JSON 결과를 받습니다.
- 강사가 수정한 뒤 블로그/인스타용 문안으로 활용합니다.

수업일지 코멘트:

- 강사코멘트: 학부모에게 보낼 문장으로 다듬습니다.
- 학생코멘트: 학생 화면에 보일 문장으로 다듬습니다.
- AI 결과는 자동 발송하지 않고, 강사가 확인 후 발송 버튼을 누릅니다.

## 상태 확인

```text
GET /api/integrations/status
```

확인할 항목:

- `ai.providers.openai`
- `ai.providers.anthropic`
- `ai.providers.mock`
- `ai.fallbackModels`
