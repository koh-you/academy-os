# 통합 문제은행 마스터 인덱스

> 본 인덱스는 `bank/problems/*.md`의 모든 등록 문제를 한눈에 검색하기 위한 **자동 갱신** 테이블이다. 등록 절차·점수 체계·대상층 정의는 [`schema.md`](schema.md) 참조.

> **자동 갱신** (v2.5 — `scripts/build-index.mjs`): 마지막 갱신 2026-07-24

---

## 코드 체계 요약 (v3.1, 5종 prefix)

- 문제: `{과목}-{단원}-{일련번호}` (예: `CM2-FN-001`)
- **DI-***: 깊이와통찰 학원 표본 (status: meta_only) — 1:1 문항
- **OUT-***: 우리 책 출제 (status: approved) — 1:1 문항 + 본문 등록
- **MS-***: 마플시너지 유형 카탈로그 (status: type_meta_only) — n:1 유형
- **SRC-***: 시판 책 정점 표본 (status: meta_only) — 1:1 문항
- **EX-***: 학평·평가원·EBS·수능 본기출 (status: meta_only) — 1:1 문항
- 앵커: `bank/anchors/{과목}-{단원}.md` (단원당 ★ 1~5 × 5문 = 25문)
- 과목: `CM1`(공통수학1) · `CM2`(공통수학2)

### 단원 약자

| 과목 | 단원 | 약자 | 앵커 파일 |
|---|---|---|---|
| 공통수학1 | 다항식 | PL | `anchors/CM1-PL.md` |
| 공통수학1 | 방정식과 부등식 | EQ | `anchors/CM1-EQ.md` |
| 공통수학1 | 경우의 수 | CB | `anchors/CM1-CB.md` |
| 공통수학1 | 행렬과 그 연산 | MX | `anchors/CM1-MX.md` |
| 공통수학2 | 도형의 방정식 | GM | `anchors/CM2-GM.md` |
| 공통수학2 | 집합과 명제 | ST | `anchors/CM2-ST.md` |
| 공통수학2 | 함수 | FN | `anchors/CM2-FN.md` |
| 공통수학2 | 유리·무리함수 | RF | `anchors/CM2-RF.md` |

---

## 등록 문항 통계 (총 4545)

- DI-* (깊이와통찰, meta_only): 1711
- OUT-* (우리 책, approved): 81
- MS-* (마플시너지 유형, type_meta_only): 272
- SRC-* (시판 책, meta_only): 1445
- EX-* (학평·평가원·EBS, meta_only): 975
- 기타 (legacy): 9

### 단원별 분포

| 단원 | DI | OUT | MS | SRC | EX | 합계 | ★ 1 | ★ 2 | ★ 3 | ★ 4 | ★ 5 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| CM1-PL | 377 | 0 | 56 | 193 | 208 | **834** | 116 | 121 | 103 | 103 | 222 |
| CM1-EQ | 708 | 32 | 154 | 566 | 419 | **1879** | 107 | 233 | 333 | 265 | 563 |
| CM1-CB | 17 | 1 | 37 | 293 | 85 | **442** | 1 | 7 | 55 | 74 | 214 |
| CM1-MX | 9 | 0 | 25 | 196 | 55 | **285** | 2 | 9 | 60 | 54 | 112 |
| CM2-GM | 298 | 0 | 0 | 24 | 150 | **472** | 32 | 83 | 49 | 73 | 97 |
| CM2-ST | 186 | 0 | 0 | 70 | 37 | **293** | 23 | 80 | 47 | 55 | 58 |
| CM2-FN | 40 | 0 | 0 | 42 | 15 | **97** | 7 | 9 | 6 | 23 | 37 |
| CM2-RF | 76 | 48 | 0 | 61 | 5 | **190** | 10 | 29 | 31 | 62 | 57 |

---

## 앵커 보유 현황 (v2.5 build-anchors.mjs 자동 생성)

| 단원 | ★ 1 | ★ 2 | ★ 3 | ★ 4 | ★ 5 | 합계 |
|---|---:|---:|---:|---:|---:|---:|
| CM1-PL | 5 | 5 | 5 | 5 | 5 | **25/25** ✅ |
| CM1-EQ | 5 | 5 | 5 | 5 | 5 | **25/25** ✅ |
| CM1-CB | 1 | 5 | 5 | 5 | 5 | **21/25** |
| CM1-MX | 2 | 5 | 5 | 5 | 5 | **22/25** |
| CM2-GM | 5 | 5 | 5 | 5 | 5 | **25/25** ✅ |
| CM2-ST | 5 | 5 | 5 | 5 | 5 | **25/25** ✅ |
| CM2-FN | 5 | 5 | 5 | 5 | 5 | **25/25** ✅ |
| CM2-RF | 5 | 5 | 5 | 5 | 5 | **25/25** ✅ |
| **합계** | | | | | | **193/200 (97%)** |

**목표**: 단원당 ★ 1~5 × 5문 = 25문. 상위권만 다룰 단원은 ★ 3~5만 우선 채워도 됨.

---

## 자동화 도구 (v2.5 시점)

| 도구 | 용도 |
|---|---|
| `scripts/build-index.mjs` | 본 INDEX.md 자동 갱신 |
| `scripts/build-anchors.mjs` | bank/anchors/* 자동 생성 |
| `scripts/anchor-compare.mjs` | 신규 문제 → 앵커 비교 (scores·★ fallback) |
| `scripts/bank-query.mjs` | 다중 조건 검색 + CSV export |
| `scripts/recommend-slots-by-book.mjs` | book.yaml → 맞춤 슬롯 추천 |
| `scripts/calibration-report.mjs` | calibration v0.3 (v2.0 정합) |
| `scripts/source-usage-stats.mjs` | 시판 책 사용 빈도 통계 |
| `scripts/extract-tex-to-bank.mjs` | output/*.tex → OUT-*.md 일괄 |
| `scripts/extract-deepinsight.mjs` | 깊이와통찰 PDF → DI-*.md |
| `scripts/normalize-deepinsight-cohort.mjs` | cohort z-score 정규화 |
| `scripts/map-deepinsight-types.mjs` | T-code 매핑 |
| `scripts/register-deepinsight-bank.mjs` | DI-*.md 일괄 등록 |
| `scripts/bank-frequency.mjs` | frequency 필드 자동 갱신 |

자세한 사용법은 `CLAUDE.md`의 「자동화 파이프라인」 절 참조.

---

## 관련 문서

- [`schema.md`](schema.md) — 7축 루브릭(v2.0)·임계값·대상층·앵커 규약 정의서
- [`anchors/`](anchors/) — 단원별 표준 앵커 풀 (자동 생성)
- [`problems/`](problems/) — 등록된 문제 (각 1파일)
- [`깊이와통찰-수능모의-매핑.md`](깊이와통찰-수능모의-매핑.md) — 깊이와통찰 매핑 인덱스
- [`calibration-log.md`](calibration-log.md) — calibration 보고서 v0.3
- [`슬롯-추천.md`](슬롯-추천.md) — 단원별 필수 패턴 추천
- [`완성본-대상층별-비교.md`](완성본-대상층별-비교.md) — 마스터 책 대상층별 비교
- [`시판책-사용빈도.md`](시판책-사용빈도.md) — 시판 책 출처 빈도
- `output/book-yaml-guide.md` — book.yaml 표준 양식
