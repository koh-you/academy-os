# 출결 알림톡 실제 발송 설정

academy-os는 출결 저장 시 로컬 API 서버를 통해 Solapi 알림톡을 발송합니다.

## 실행

터미널 1:

```powershell
npm run api
```

터미널 2:

```powershell
npm run dev
```

## 환경변수

`.env.example`을 참고해 `.env`를 만들고 실제 값을 입력합니다.

```env
ACADEMY_API_PORT=8787
SOLAPI_API_KEY=
SOLAPI_API_SECRET=
SOLAPI_FROM=
SOLAPI_PFID=
SOLAPI_ATTENDANCE_TEMPLATE_ID=
SOLAPI_DISABLE_SMS=false
ALIMTALK_TEST_RECIPIENT=01057882748
ALIMTALK_ALLOW_REAL_PARENT_NUMBERS=false
```

## 테스트 발송 안전장치

현재 기본 설정에서는 실제 학부모 번호로 발송하지 않습니다.

- `ALIMTALK_TEST_RECIPIENT=01057882748`
- `ALIMTALK_ALLOW_REAL_PARENT_NUMBERS=false`

이 상태에서는 학생 정보에 어떤 학부모 번호가 들어 있어도 알림톡은 `01057882748`로만 발송됩니다.

실제 학부모 번호로 발송하려면 충분히 검수한 뒤 `.env`에서 아래처럼 바꿉니다.

```env
ALIMTALK_ALLOW_REAL_PARENT_NUMBERS=true
```

## 알림톡 템플릿 변수

Solapi/Kakao 알림톡 템플릿에는 다음 변수를 사용합니다.

- `#{학생명}`
- `#{상태}`
- `#{시간}`
- `#{수업명}`
- `#{지각분}`
- `#{사유}`

예시 템플릿:

```text
[으뜸수학학원 고태영T 출결 안내]
#{학생명} 학생은 #{시간}에 #{상태} 처리되었습니다.
수업: #{수업명}
지각: #{지각분}분
사유: #{사유}
```

## 주의

- 실제 발송에는 Solapi 키, 발신번호, 카카오 채널 PFID, 승인된 템플릿 ID가 필요합니다.
- 브라우저에는 Solapi API 키를 저장하지 않습니다.
- 출결앱 연동 전까지는 웹앱에서 출결을 수정할 때 같은 발송 API를 사용합니다.
