# 출처를 이미지에서 빼기 — 진행 상태

시작: 2026-10-03 · **중단·재개 가능.** 세션이 끊기거나 컴퓨터를 꺼도 이 파일과 git 이 상태를 들고 있다.

## 왜

등록된 34권의 문항 이미지에 출처(`쎈B 대수 10쪽 19번`)가 **조판 시점에 박혀 있다.** 그래서

- 시험지에서 「출처」를 꺼도 **안 지워진다.** 꺼지는 것은 HTML 로 얹은 줄뿐이라 학생이
  이미지 속 출처를 보고 원본 교재를 찾아 답을 볼 수 있다.
- 오답지에서는 출처가 **두 번** 나온다(이미지 배지 + HTML 줄).

출처(교재 제목 · `printed_page` · `number_label`)는 **이미 서버 데이터에 다 있다.** 이미지에까지
둘 이유가 없다. 빼면 오답지·시험지·PPT·자체 교재가 각자 켜고 끈다. PPT 는 이미 출처를 따로
글자로 넣고 있어(`problemBankPptx.js` 의 `decorate`) 잃는 것이 없다.

**교재 자신의 꼬리표(대표 문제·서술형·숫자변형)는 그대로 둔다** — 그건 출처가 아니라 문항의 성질이다.

## 코드 (완료)

`scripts/latex-bank/build.mjs`

- `sourceBadgeText(id, item, bank)` 로 분리. 문항별 `source_badge` 덮어쓰기를 받는다
  (자체 교재가 자기 제목이 아니라 원본 교재를 가리키게 할 때 쓴다).
- 배지에 **기본으로 꼬리표만** 들어간다. 꼬리표도 없으면 배지 자체가 없다.
- `--source-badge` 를 주면 예전처럼 출처가 들어간다(자체 교재에서 「출처 표기」를 켤 때).

확인: 쎈B 대수 유형 05 4문항 재조판 — 출처 사라지고 `숫자변형` 꼬리표만 남음. Overfull 0.

## 재조판 대상 34권

한 권 끝낼 때마다 이 표에 ✅ 와 날짜를 적는다. 명령은 아래 「재개 방법」.

| # | latex-bank | 교재 | 문항 | 상태 |
| --- | --- | --- | --- | --- |
| 1 | `ssenb-alg` | 쎈B 대수 | 739 | ⬜ |
| 2 | `ssenb-calc1` | 쎈B 미적분1 | 654 | ✅ 2026-10-03 · 654/654장 교체 · 9분 |
| 3 | `ssenb-cm1` | 쎈B 공통수학1 | 743 | ✅ 2026-10-03 · 743/743장 교체 · 10분 |
| 4 | `ssenb-cm2` | 쎈B 공통수학2 | 777 | ✅ 2026-10-03 · 777/777장 교체 · 10분 |
| 5 | `ssen-basic-alg` | 베이직쎈 대수 | 1689 | ✅ 2026-10-03 · 1689/1689장 교체 · 22분 |
| 6 | `ssen-basic-calc1` | 베이직쎈 미적분1 | 1061 | ✅ 2026-10-03 · 1061/1061장 교체 · 15분 |
| 7 | `ssen-basic-prob` | 베이직쎈 확률과 통계 | 1012 | ⬜ |
| 8 | `ssen-basic-cm1` | 베이직쎈 공통수학1 | 1570 | ⬜ |
| 9 | `ssen-basic-cm2` | 베이직쎈 공통수학2 | 420 | ✅ 2026-10-03 · 420/420장 교체 · 5분 |
| 10 | `lssen-cm1` | 라이트쎈 공통수학1 | 1414 | ⬜ |
| 11 | `lssen-cm2` | 라이트쎈 공통수학2 | 1230 | ⬜ |
| 12 | `ssen-m32` | 쎈 중3-2 수학 | 753 | ⬜ |
| 13 | `rpm-cm1` | RPM 공통수학1 | 1184 | ⬜ |
| 14 | `rpm-cm2` | RPM 공통수학2 | 1132 | ⬜ |
| 15 | `rpm-alg` | RPM 대수 | 1126 | ⬜ |
| 16 | `rpm-calc1` | RPM 미적분Ⅰ | 885 | ⬜ |
| 17 | `rpm-calc2` | RPM 미적분Ⅱ | 1177 | ⬜ |
| 18 | `rpm-geo` | RPM 기하 | 806 | ⬜ |
| 19 | `rpm-prob` | RPM 확률과 통계 | 596 | ⬜ |
| 20 | `rpm-m31` | RPM 중학 3-1 | 1133 | ⬜ |
| 21 | `rpm-m32` | RPM 중학 3-2 | 673 | ⬜ |
| 22 | `rpm-m3-2` | RPM 중3-2 수학 | 644 | ⬜ |
| 23 | `gn-cm1` | 개념원리 공통수학1 | 810 | ⬜ |
| 24 | `gn-cm2` | 개념원리 공통수학2 | 839 | ⬜ |
| 25 | `gn-alg` | 개념원리 대수 | 885 | ⬜ |
| 26 | `gn-calc1` | 개념원리 미적분Ⅰ | 591 | ⬜ |
| 27 | `gn-calc2` | 개념원리 미적분Ⅱ | 719 | ⬜ |
| 28 | `gn-geo` | 개념원리 기하 | 624 | ⬜ |
| 29 | `gn-prob` | 개념원리 확률과 통계 | 496 | ⬜ |
| 30 | `gn-m31` | 개념원리 중학 3-1 | 788 | ⬜ |
| 31 | `gn-m32` | 개념원리 중학 3-2 | 472 | ⬜ |
| 32 | `bb-m31-fin` | 100발100중 3-1 기말 | 723 | ⬜ |
| 33 | `bb-m32-mid` | 100발100중 3-2 중간 | 660 | ⬜ |
| 34 | `bb-m32-fin` | 100발100중 3-2 기말 | 490 | ⬜ |

합계 29,511문항.

## 등록만 대기 (조판 끝)

토큰이 만료돼 등록만 실패한 책이다. **조판은 이미 끝났으므로 다시 조판하지 않는다** —
토큰을 새로 받은 뒤 아래 명령으로 등록만 돌린다.

```bash
node scripts/latex-bank/retypeset-all.mjs --upload-only --ids \
  ssenb-alg,ssen-basic-prob,ssen-basic-cm1,lssen-cm1,lssen-cm2,ssen-m32,rpm-cm1,rpm-cm2,rpm-alg,rpm-calc1,rpm-calc2,rpm-geo,rpm-prob,rpm-m31,rpm-m32,gn-cm1,gn-cm2,gn-alg,gn-calc1,gn-calc2,gn-geo
```

갱신: 2026-10-03 12:55

## 재개 방법

```bash
# 1) 어디까지 했는지 — 이 파일의 표를 본다
# 2) 한 권 재조판 + 패키지 갱신 (오래 걸린다 · 분리 실행 권장)
cd C:/Users/PC/github/academy-os-wt-variants
node scripts/latex-bank/build.mjs --bank latex-bank/<책> --bank-only \
  --package "C:/Users/PC/github/academy-os-wt-ssenb/output/problem-bank/<책>" \
  --export  "C:/Users/PC/github/academy-os-wt-ssenb/output/problem-bank/<책>-latex"

# 3) 바뀐 이미지만 올린다(md5 대조 — 먼저 --confirm 없이 점검)
cd C:/Users/PC/github/academy-os-wt-ssenb
ACADEMY_TEACHER_TOKEN="$(tr -d '\r\n' < ~/.academy-token.txt)" \
  node scripts/problem-bank/upload-package.mjs --package output/problem-bank/<책>-latex --confirm

# 4) 이 파일의 표에 ✅ 와 날짜를 적고 commit
```

주의

- 조판은 **10분을 넘을 수 있다.** 배경 실행으로 띄우고 기다린다(메모리: `long-builds-detach`).
- 이번 변경은 **모든 문항의 이미지를 바꾼다**(배지가 빠지므로). 업로드량이 교재당 전 문항이다.
- 업로드 토큰이 `401` 이면 **만료**다. PowerShell 에서 `.\scripts\mint-bank-token.ps1` 로 90일짜리를
  다시 받는다(Render → academy-os API → Environment → `OPS_TOKEN_SIGNING_SECRET` 필요).
  2026-10-03 캠페인 중 7권째에서 실제로 만료됐다 — 파일에 있던 것이 90일 토큰이 아니라 **교사 세션 토큰**이었다.
- 토큰이 만료돼도 조판은 계속 성공한다. 다시 조판하지 말고 위 「등록만 대기」의 명령으로 등록만 돌린다.
- 한 권 끝날 때마다 commit 한다. 중간에 끊겨도 다음 세션이 표를 보고 이어간다.

## 남은 일 (이 작업 밖)

- PR #449 병합 뒤 쎈B 대수 숫자변형 4문항 재등록 → 서버에서 `variantOf` 연결 확인
- 자체 교재(편집 교재) 1단계 구현 — `docs/problem-bank-composed-book-plan.md`
