# 알림톡 설정

academy-os의 알림톡은 백엔드 API 서버에서 Solapi를 통해 발송한다.
브라우저에는 Solapi API Key를 저장하지 않는다.

## 알림톡 종류

현재 MVP에서 필요한 알림톡은 3종이다.

1. 출결 알림톡
   - 학생 등원, 하원, 지각, 결석 상태를 학부모에게 보낸다.
   - 기존 클래스업 출결 알림을 대체한다.

2. 데일리리포트 알림톡
   - 수업일지의 강사코멘트, 지난 숙제, 다음 숙제, 미완료 숙제 등을 학부모에게 보낸다.
   - 기존 노션-메이크-솔라피 흐름을 웹앱 안으로 옮기는 대상이다.
   - 코드에서는 학부모 대상 `comment-alimtalk`도 이 템플릿을 사용한다.

3. 학생별 코멘트 알림톡
   - 강사가 학생에게 직접 보낼 내용을 AI로 다듬은 뒤 학생 전화번호로 보낸다.

## Render 환경변수

```env
SOLAPI_API_KEY=
SOLAPI_API_SECRET=
SOLAPI_FROM=
SOLAPI_PFID=
SOLAPI_ATTENDANCE_TEMPLATE_ID=
SOLAPI_DAILY_REPORT_TEMPLATE_ID=
SOLAPI_STUDENT_COMMENT_TEMPLATE_ID=
SOLAPI_DISABLE_SMS=true
ALIMTALK_DRY_RUN=true
ALIMTALK_TEST_RECIPIENT=01057882748
ALIMTALK_ALLOW_REAL_PARENT_NUMBERS=false
```

## 안전 장치

```env
ALIMTALK_DRY_RUN=true
ALIMTALK_ALLOW_REAL_PARENT_NUMBERS=false
ALIMTALK_TEST_RECIPIENT=01057882748
```

- `ALIMTALK_DRY_RUN=true`: 실제 발송하지 않고 서버 응답으로 payload만 확인한다.
- `ALIMTALK_ALLOW_REAL_PARENT_NUMBERS=false`: 실제 발송 모드에서도 모든 수신자를 테스트 번호로 돌린다.
- 실제 학부모 번호 발송은 충분히 검수한 뒤 `ALIMTALK_DRY_RUN=false`, `ALIMTALK_ALLOW_REAL_PARENT_NUMBERS=true`로 변경한다.

## 템플릿 변수

출결 템플릿:

```text
#{학원명}
#{학생명}
#{상태}
#{시간}
#{수업명}
#{지각분}
#{사유}
```

데일리리포트 템플릿:

```text
#{학원명}
#{학생명}
#{수업일}
#{리포트본문}
```

`#{리포트본문}`은 코드에서 조건부로 만든다.

항상 포함할 수 있는 줄:

```text
출결: 출석
지난 숙제: GRIP ~987
다음 숙제: 쎈 643~647
코멘트: 경우의 수 조건 해석을 보완하면 좋겠습니다.
```

필요할 때만 포함하는 줄:

```text
미완료: RPM 629~668
재시험 일정: 6월 19일 금요일 공수1 누적테스트
보충 일정: 6월 20일 토요일 13:00
```

재시험 일정이나 보충 일정이 없으면 해당 줄은 아예 생성하지 않는다.

학생별 코멘트 템플릿:

```text
#{학원명}
#{학생명}
#{수업명}
#{수업일}
#{코멘트}
```

## 상태 확인

배포 후 아래 주소에서 설정 상태를 확인한다.

```text
GET /api/integrations/status
```

확인할 항목:

- `notifications.dryRun`
- `notifications.solapiConfigured`
- `notifications.templatesConfigured`
- `notifications.missing`
