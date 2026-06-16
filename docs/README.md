# koh_you_math Lesson OS Docs

이 폴더는 `koh_you_math` 학원 운영 OS의 기준 문서와 배포 전환 문서를 보관합니다.

## 핵심 원칙

- 중심 화면은 Lesson Hub, 즉 수업일지입니다.
- 모든 데이터는 `StudentId`, `LessonId`, `HomeworkId`, `ProblemId`, `ExamId`, `ReportId` 같은 공통 ID로 연결합니다.
- 학생/학부모 화면은 열람 중심으로 두고, 데이터 변경은 강사 화면에서 처리합니다.
- 실제 알림톡 발송은 dry-run과 테스트 번호 검수를 통과한 뒤에만 켭니다.
- 브랜드명은 앞으로도 `koh_you_math`로 통일합니다.

## 주요 문서

| 문서 | 목적 |
| --- | --- |
| `backend-db-deployment-plan.md` | Supabase, Render, Vercel로 넘어가는 전체 구조 |
| `first-time-production-checklist.md` | 처음 회원가입하는 사람 기준 실제 작업 순서 |
| `attendance-alimtalk.md` | 출결/알림톡 연동 기준 |
| `exam-analysis-api.md` | 시험분석 AI API 기준 |
| `day-26-30-mvp-closeout.md` | Day 30까지 MVP 정리 |
| `data-model.md` | 기존 데이터 모델 초안 |
| `permissions.md` | 권한/공개 범위 기준 |

## 운영 전환 파일

| 파일 | 목적 |
| --- | --- |
| `../supabase/schema.sql` | Supabase SQL Editor에 실행할 MVP DB 스키마 |
| `../.env.example` | 로컬/배포 환경변수 예시 |
| `../api/server.js` | Render에 올릴 Node API 서버 |
| `../src/app/App.jsx` | Vercel에 올릴 React 앱 |

## 다음 개발 순서

1. Supabase 프로젝트 생성
2. `supabase/schema.sql` 실행
3. Render API 배포
4. Vercel 프론트 배포
5. `VITE_API_BASE_URL`을 Render 주소로 연결
6. 학생/반/수업 데이터를 Supabase로 이관
7. 수업일지, 숙제, 알림톡 로그를 차례로 DB 저장으로 전환

