# 시험분석 AI API 설정

시험분석 화면에서는 AI API를 선택할 수 있습니다.

- `모의분석`: API 키 없이 로컬에서 예시 결과를 채웁니다.
- `OpenAI`: 로컬 API 서버가 OpenAI Responses API를 호출합니다.
- `Claude`: 로컬 API 서버가 Anthropic Messages API를 호출합니다.

## 실행 구조

```text
브라우저 화면
→ academy-os 로컬 API 서버
→ 선택한 AI 제공자
→ 분석 필드 자동 채움
```

API 키는 브라우저에 저장하지 않고 `.env`에만 둡니다.

## .env 예시

```env
OPENAI_API_KEY=your_openai_api_key
OPENAI_EXAM_ANALYSIS_MODEL=gpt-5.5
ANTHROPIC_API_KEY=your_anthropic_api_key
ANTHROPIC_EXAM_ANALYSIS_MODEL=claude-sonnet-4-6
```

처음 검수할 때는 `모의분석`으로 화면 흐름을 확인한 뒤, 실제 키를 넣고 OpenAI 또는 Claude를 선택하면 됩니다.

## 수업 코멘트 AI 수정

수업일지에서도 같은 AI API 선택값을 사용합니다.

- `강사코멘트`: 학부모에게 보낼 문장으로 다듬습니다.
- `학생코멘트`: 학생 화면에 보낼 문장으로 다듬습니다.
- `학부모 발송`: 현재는 발송대기 로그를 남깁니다. 실제 알림톡 템플릿이 준비되면 같은 서버 라우트에 연결합니다.
- `학생 발송`: 학생 화면의 `마이 페이지 > 활동 로그`에 표시되도록 기록합니다.
