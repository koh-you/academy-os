# Academy OS Session Handoff - 2026-06-23

이 문서는 다음 Codex/AI 세션이 바로 이어서 작업할 수 있도록 오늘 작업 내용과 다음 작업 큐를 정리한 handoff입니다.

## 1. 오늘 완료한 일

### 화목토 2개 반 학생 운영 반영

- 운영 웹앱에 화목토 반 2개를 확인했다.
  - `template_tt_sat_front`: `화목 4-7 / 토 10-1반`
  - `template_tt_sat_back`: `화목 7-10 / 토 1-4반`
- 위 두 반은 이미 Supabase `class_templates`에 활성 상태로 존재했다.
- 수업일지/lesson은 생성하지 않았다. 사용자가 직접 만들 예정이라고 했다.

### 노션 기준 정리

- 조윤빈은 더 이상 화목토가 아니며, 기존처럼 `월수금 4-7`로 유지한다.
- 한주원은 `화목 7-10 / 토 1-4반`으로 반영한다.
- 퇴원생은 제외한다.
- 박주원/박상원의 동일 학부모 번호는 사용자 확인 후 그대로 반영했다.

### 운영 Supabase 반영 인원

`template_tt_sat_front` 7명:

- 홍지은
- 김해란
- 문윤슬
- 우솔아
- 김민영
- 이혜민
- 박소정

`template_tt_sat_back` 8명:

- 유준영
- 정해연
- 박주원
- 박상원
- 안찬호
- 손호진
- 한재승
- 한주원

## 2. 검증 결과

- 운영 `/api/classes`에서 화목토 클래스 2개 활성 상태 확인.
- 운영 `/api/students/bulk`로 신규 재원생 15명 저장 완료.
- 운영 `/api/students` 재조회 기준:
  - 신규 15명 모두 `source:supabase`에서 확인.
  - 앞반 7명, 뒷반 8명 반 배정 정상.
  - 학생 전화번호 누락 0건.
  - 학부모 전화번호 누락 0건.
  - 조윤빈은 기존 `template_mwf_4_7` 유지 확인.
- 운영 API health 확인:
  - `https://koh-you-math-academy-os-api.onrender.com/health` 응답 정상.
- 운영 프론트 응답 확인:
  - `https://academy-os-blue.vercel.app` HTTP 200 확인.

## 3. 커밋/배포 상태

- 작업 기록을 `docs/current-worklog.md`에 남겼다.
- 커밋 완료:
  - `fa2b22a Record Tuesday Saturday class import`
- `git push origin main` 완료.
- GitHub main push 기준으로 Vercel/Render 자동 배포 트리거까지 완료된 상태다.
- 이번 작업은 운영 데이터 반영과 문서 기록 중심이며, 코드 변경은 없었다.
- `npm run build`는 실행하지 않았다. 코드 변경이 없고, 운영 API 데이터 저장 및 문서 기록만 수행했기 때문이다.

## 4. SQL Editor 필요 여부

SQL Editor 작업 필요 없음.

이유:

- 기존 `students` 테이블 사용.
- 기존 `class_templates` 테이블 사용.
- 기존 운영 API `/api/students/bulk` 사용.
- DB 컬럼/테이블/인덱스/RPC/RLS 변경 없음.

## 5. 다음 작업 큐

### P0. 학생화면 수업일지 반영 구조 정리

목표:

- 학생이 로그인했을 때 수업일지에 입력한 내용이 학생화면에서 정확하고 보기 좋게 나타나게 한다.
- 먼저 "최근 수업 카드"를 중심으로 만들고, 이후 숙제/보충/알림 이력으로 확장한다.

우선 표시해야 할 수업일지 필드:

- 출결
- 강의 교재
- 강의 내용
- 지난 숙제
- 다음 숙제
- 과제 상태
- 학생 알림톡 문구 또는 학생용 코멘트
- 보충 일정/숙제보충 여부
- 수업 전 메모 중 학생 공개 항목

권장 첫 구현:

1. 학생화면 첫 화면에 "최근 수업 카드" 추가 또는 정리.
2. 최근 수업 카드에 수업일지 원본 필드 표시.
3. 학생에게 공개할 항목과 비공개 항목을 분리.
4. 수업일지 데이터는 학생화면에서 읽기 전용으로 유지.
5. 학생이 수정 가능한 항목은 숙제 완료 체크, 질문/메모 정도로 제한.

주의:

- 학생화면은 수업일지 원본 데이터를 보되, 학생에게 공개할 것만 보여줘야 한다.
- 알림톡 발송 여부와 학생화면 노출 여부는 별도로 봐야 한다.
- 내부 메모가 학생화면에 노출되지 않도록 공개 플래그를 반드시 확인해야 한다.

### P1. 태블릿 출결화면 정리

이전 논의:

- 태블릿으로 출결화면을 켰을 때 화면을 위로 스크롤하면 내부 화면이 보이는 문제가 있다.
- 출결 전용 화면에서는 뒤로가기/관리자 화면 진입을 막되, 관리자 번호 입력 시 관리자모드로 빠져나갈 수 있게 하는 방향이 좋다.

권장 방향:

- 출결모드는 kiosk-like 화면으로 고정.
- 일반 학생은 출결 입력만 가능.
- 관리자 번호 입력 시 관리자모드/기존 앱 화면으로 복귀.
- 이 작업은 서버 인증 방식 정리와 함께 진행하는 것이 좋다.

### P2. 서버 인증 방식 정리

현재 상태:

- 설정 화면에서 교사용 계정 변경 기능은 구현되어 있으나, 근본적으로는 `app_state` 기반이다.
- 운영 보안을 위해 서버 인증 방식과 비밀번호 저장 방식을 별도로 정리해야 한다.

예상 필요 작업:

- 비밀번호 해시 저장 구조 검토.
- Supabase 테이블 또는 기존 `app_state` 유지 여부 결정.
- 로그인 검증을 프론트 단독이 아니라 서버 API 기준으로 옮길지 결정.
- 이 작업은 SQL 필요 가능성이 있다.

## 6. 다음 세션 시작 프롬프트

```text
academy-os 작업입니다.

반드시 먼저 아래 파일을 읽고 시작하세요.
- AGENTS.md
- docs/current-worklog.md
- docs/session-handoff-2026-06-23.md
- docs/ai-deployment-responsibility-2026-06-21.md

AI가 할 수 있는 일은 AI가 끝까지 해주세요. 코드/문서 수정 후 사용자가 명시적으로 막지 않았다면 npm run build, 필요 시 npm run test:production, docs/current-worklog.md 갱신, git commit, git push origin main까지 진행하세요.

GitHub main push가 Vercel/Render 자동 배포 트리거입니다. push 후 가능한 범위에서 운영 URL도 확인하세요.
- Frontend: https://academy-os-blue.vercel.app
- Backend health: https://koh-you-math-academy-os-api.onrender.com/health

Supabase SQL migration은 자동 적용된다고 가정하지 마세요. DB 컬럼/테이블/인덱스/RPC/RLS 변경이 필요하면 SQL 파일명, 실행 순서, 적용 이유, 확인 방법을 초보자 기준으로 안내하고 docs/current-worklog.md에도 남기세요. SQL이 필요 없으면 “SQL Editor 작업 필요 없음”이라고 명확히 말하세요.

오늘 상태:
- 화목토 2개 반은 운영에 있음.
- 화목토 재원생 15명은 운영 Supabase students에 반영됨.
- 조윤빈은 월수금 4-7 유지.
- 수업일지/lesson은 생성하지 않았음. 사용자가 직접 만들 예정.

다음 P0:
학생화면에서 수업일지에 입력한 내용이 잘 보이도록 “최근 수업 카드”와 데이터 표시 규칙을 먼저 정리하세요. 수업일지 원본 필드는 읽기 전용으로 보여주고, 학생 공개/비공개 기준을 명확히 적용하세요.
```
