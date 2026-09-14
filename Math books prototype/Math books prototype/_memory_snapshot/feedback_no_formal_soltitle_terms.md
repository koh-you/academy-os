---
name: feedback-no-formal-soltitle-terms
description: 학생 자료 (출제의도·통찰·풀이)에서 한자어 압축 formal 어구 금지. 정점·역산·항등성·판정·해석 5어구 자동 RED. 2026-07-08 와부고 CM2 답지 사건.
metadata: 
  node_type: memory
  type: feedback
  originSessionId: ae667b63-f0fd-4427-88dc-8dab9e5fce26
---

# 학생 자료 formal 어구 순화 (RED)

`\soltitle`의 [출제의도] 라벨, `\solnote` 통찰 노트, 서술형 풀이 등 학생 노출 zone에서 한자어 압축 formal 어구 금지. 자연 한국어 서술로 대체.

## RED 어구 5종 (2026-07-08 확립)

| 🔴 어구 | 권장 대체 | 사례 |
|---|---|---|
| **정점** (fixed point 뜻) | "항상 지나는 점" · "고정점" 금지 | "정점 결정과 삼각형 넓이" → "항상 지나는 점 찾기와 삼각형 넓이" |
| **역산** | "역으로 구하기" · "조건에서 결정" · "좌표 결정" | "삼각형 넓이 역산" → "삼각형 넓이 조건으로 좌표 결정" |
| **항등성** | "합이 일정" · "값이 위치에 관계없이 같음" | "거리 제곱의 항등성" → "거리 제곱의 합이 일정" |
| **판정** (판정식 제외) | "확인" · "결정" · "판별" (판별식만) | "외접 조건 판정" → "외접 조건 확인" |
| **해석** (해석기하·해석학 제외) | "성질" · "이해" · "다루기" · "활용" | "최소공배수 해석" → "최소공배수 성질" |

**Why**: 학생 답지의 짧은 라벨(soltitle 2nd arg)에서 formal 한자어 압축 표현이 반복 등장. 학생 인식 낮고 명료성 저해. 특히 "정점"은 "★ 5 star_premium" 내부 메타 용어와 오인 가능. 자연 한국어 서술로 학생 학습 지원.

**How to apply**: 답지·시험지·유형편 작성 시 이 5어구 자체 grep 검수 → 검출 시 자연어 대체. 자동 도구 `scripts/permanent-policy-check.mjs` v1.4 (§1.4d)에 RED 패턴 등록되어 있음. `bank/비표준-어구-사전.md` v1.4 §1.4d 단일 출처.

## 배경 (2026-07-08 와부고 CM2 답지 사건)

와부고 CM2 예상 중간 1회 답지 (17문·8쪽) 최초 완성 후, 마스터가 "출제의도에도 언어 검수가 된건가? 정점이라는 말이 보이는데."로 지적. permanent-policy-check가 soltitle 라벨을 grep 대상에 포함하지 않아 formal 어구가 누출된 상태 확인. 이후 마스터가 정점 → 역산 → 항등성 → 판정 → 해석 순차 지적하며 7건 정정 후 재발방지 요청.

## 적용 zone

- `\soltitle{N}{{ 출제의도 }}{ 배점 }` 2nd arg
- `\solnote{...}` 본문
- 서술형 풀이의 자연어 부분
- `\solpart` `\subcasetext` 라벨 부분
- 정답 박스 본문
- 학생 노출되는 모든 텍스트

## 적용 외 (예외)

- 문제 발문 자체 (원본 인용, 학교 시험 원문)
- `bank/` 내부 카탈로그·분석 문서 (학생 미노출)
- 검수 로그·주석 (학생 미노출)
- 판정식 (판별식 관련) · 해석기하·해석학 (수학 학문명)

## 관련 자원

- [[feedback_no_compressed_terms]] — 압축 신조어 (비이웃 등) 금지
- [[feedback_natural_korean_wording]] — 자연 한국어 어법
- [[feedback_solnote_quality_failure]] — solnote 품질 반례
- [[feedback_no_calc2_terms_cm2]] — 미적분Ⅱ 용어 금지 (매개변수 등)
- `bank/비표준-어구-사전.md` v1.4 §1.4d — 단일 출처
- `scripts/permanent-policy-check.mjs` v1.4 §1.4d — 자동 grep 도구
