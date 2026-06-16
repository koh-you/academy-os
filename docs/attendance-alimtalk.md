# 출결/코멘트 알림톡 설정

academy-os는 백엔드 API 서버에서 Solapi 알림톡을 발송합니다.
브라우저에는 Solapi API Key를 절대 저장하지 않습니다.

## 현재 안전장치

기본값은 실제 학부모 번호로 보내지 않는 테스트 모드입니다.

```env
ALIMTALK_DRY_RUN=true
ALIMTALK_TEST_RECIPIENT=01057882748
ALIMTALK_ALLOW_REAL_PARENT_NUMBERS=false
```

- `ALIMTALK_DRY_RUN=true`: 실제 발송하지 않고 서버 응답만 확인합니다.
- `ALIMTALK_ALLOW_REAL_PARENT_NUMBERS=false`: 실제 발송 모드에서도 모든 수신자를 테스트 번호로 우회합니다.
- 실제 학부모 번호 발송은 충분히 검수한 뒤 두 값을 모두 바꿉니다.

```env
ALIMTALK_DRY_RUN=false
ALIMTALK_ALLOW_REAL_PARENT_NUMBERS=true
```

## Render 환경변수

Render 백엔드 서비스의 Environment Variables에 아래 값을 넣습니다.

```env
SOLAPI_API_KEY=
SOLAPI_API_SECRET=
SOLAPI_FROM=
SOLAPI_PFID=
SOLAPI_ATTENDANCE_TEMPLATE_ID=
SOLAPI_PARENT_COMMENT_TEMPLATE_ID=
SOLAPI_STUDENT_COMMENT_TEMPLATE_ID=
SOLAPI_DISABLE_SMS=true
ALIMTALK_DRY_RUN=true
ALIMTALK_TEST_RECIPIENT=01057882748
ALIMTALK_ALLOW_REAL_PARENT_NUMBERS=false
```

## 템플릿 변수

출결 템플릿:

```text
#{학생명}
#{상태}
#{시간}
#{수업명}
#{지각분}
#{사유}
```

코멘트 템플릿:

```text
#{학원명}
#{학생명}
#{수업명}
#{수업일}
#{코멘트}
```

## 상태 확인

배포 후 아래 주소에서 설정 여부만 확인할 수 있습니다. 실제 키 값은 노출되지 않습니다.

```text
GET /api/integrations/status
```

확인할 항목:

- `notifications.dryRun`
- `notifications.solapiConfigured`
- `notifications.templatesConfigured`
- `notifications.missing`
