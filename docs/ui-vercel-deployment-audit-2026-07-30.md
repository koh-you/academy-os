# UI-9E Vercel Production 배포 대조 — 2026-07-30

## 판정

2026-07-30 16:58 KST 기준 UI-9D까지의 최신 `origin/main` `655a6d1ebd65927dcc604231b2cec60df7ddacc3`은 GitHub commit status에서 `Vercel: success / Deployment has completed`로 확인됐다.

- Vercel deployment: `https://vercel.com/koh-yous-projects/academy-os/8Lzfxq9kqcnUVgwrukqNcURRDHem`
- Production: `https://academy-os-blue.vercel.app/`
- Production HTML: `main-B7P3xfdq.css`, `main-ClcmyMj6.js`
- 같은 source의 local build: `main-B7P3xfdq.css`, `main-CGP2RQS2.js`

## bundle 대조

- CSS hash `main-B7P3xfdq.css`가 local과 Production에서 정확히 일치한다.
- JS hash는 Vercel build 환경변수와 local 환경이 달라 이름이 다르다. 이름 일치만으로 실패 판정하지 않고 Production JS 본문을 대조했다.
- Production JS에 최신 UI 계약 문자열 `교사 미리보기 계정 행동`, `학부모 응대`, `studentExamPostSubmitButton`이 모두 있다.
- Production CSS에 모바일 포털 selector가 있고, UI-9C에서 폐기한 `specialLectureMatchGrid`, `specialLectureMatchCard`는 모두 없다.
- Production HTML과 두 asset 요청은 HTTP 200이며 cache-busting 요청은 Vercel `MISS`로 최신 응답을 받았다.

## 배포 방식과 안전선

`main` push가 Vercel Production 자동 배포를 정상 유발했다. 별도 빈 commit, 수동 재배포, Vercel CLI/API 호출은 만들지 않았다. Supabase·Storage·notification_jobs·Solapi와 운영 데이터는 읽거나 변경하지 않았다.

이후 최종 감사 문서 commit도 docs/test 계약만 바꾸지만, 마지막 push 뒤 GitHub의 최신 commit Vercel status와 공개 Production 응답을 한 번 더 확인한다.
