---
name: feedback-blueprint-score-validator
description: "scripts/blueprint-score-validator.mjs v2.1 (2026-07-13 세션 38 후반부 slot-size-uniform 편입 · v2.0 정책 강제 · v1.1 필드 확장 · v1.0 방안 B). master-policy-registry 로드 · policy-star-5-only + policy-slot-size-uniform 자동 강제 (exit 3) · 슬롯 편차 σ ≤ 10mm 검사 · CLAUDE.md 단계 3.3 · Gate 4.5 v3.10~v3.12 편입."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 5d275468-0c52-47cd-9d92-60574f71646e
---

# blueprint-score-validator — 청사진 스코어 자동 검증 (방안 B)

**규칙**: 청사진 YAML 완성 직후 `node scripts/blueprint-score-validator.mjs <청사진.yaml>` 실행. **RED 0 도달까지 청사진 확정 금지**.

**Why**: 세션 38 3회 자동 시범에서 마스터 지적 "시험지 전체 난이도 의심스러움". 저자(claude)가 청사진 작성 시 v5.1 8축 스코어를 즉흥 감으로 배정 → 실제 문항이 청사진 예상보다 훨씬 단순:
- #14 접선 길이 청사진 30 vs 실제 자동 산출 6 (gap +24)
- #16 외심 청사진 38 vs 실제 자동 산출 7 (gap +31)
- #17 대칭 자취 청사진 39 vs 실제 자동 산출 13 (gap +26)
schema.md v5.1 §7 "앵커 비교 규정" 실행 강제 없음. v5.1 8축 자동 산출 도구 부재.

**How to apply**:
- 청사진 저장 직후 실행
- 각 슬롯 answer_note·type·narrative_length_chars 파싱 → 8축 자동 산출
- 청사진 명시 composite vs 자동 산출 대조
- |gap| ≤ 3 GREEN · 4~7 YELLOW · > 7 RED
- RED 슬롯은 청사진 스코어 재조정 (하향 or 문항 재설계)

## v5.1 8축 자동 산출 알고리즘

| 축 | 산출 근거 |
|---|---|
| N (지문) | narrative_length_chars → 0~3 |
| L (논리 결합) | answer_note의 "→"·"⟹"·"따라서"·"이므로" 카운트 → 0~3 |
| T (변환) | "대칭"·"평행"·"회전"·"이동"·"대우"·"치환" 어구 카운트 → 0~3 |
| H (힌트) | 지문 "이용하여"·"~를 이용해" → 0/1 |
| R (구조) | "접선"·"자취"·"수직이등분"·"외심" 등 → 0~3 |
| F (정확성) | 정의 명확성·지문 길이 → 0~3 |
| E (조건) | constraint_count · "조건"·"만족" 어구 → 0~3 |
| P (예측 저항) | "역"·"모든"·"임의"·"어떤" 어구 → 0~3 |

composite = N + L + T − H + R + F + E + P

## 정점 슬롯 특별 검증 (composite ≥ 24)
- 8축 개별 값 상세 리포트 (청사진 vs 자동)
- gap 큰 축 특정 → 어떤 조건 강화로 스코어 도달 가능한지 힌트

## 앵커 비교 자동화 (예정)
- `bank/anchors/{CM1|CM2}-{unit}.md` 로드
- 같은 star·같은 통찰 유형 앵커 2개 자동 검색
- 슬롯 vs 앵커 대조 리포트

## Gate 4.5 v3.10 편입
- 이전 10 도구 + blueprint-score-validator = 11 도구
- CLAUDE.md 단계 3.3 신설: 청사진 완성 직후 실행 강제

## 세션 38 3회 시범 재현
```
✅ GREEN: 0건 · 🟡 YELLOW: 1건 · 🔴 RED: 16건
정점 3문 gap: +24 (#14) · +31 (#16) · +26 (#17)
```
청사진 저자 감이 정확한 문항 난이도 예측 실패 · 검증 도구가 정확 감지.

## 관련
- `scripts/blueprint-score-validator.mjs` (v1.0, 2026-07-13 세션 38)
- `schema.md` v5.1 §2.16 (8축 정의)
- `bank/first-draft-완성도-기준.md` (2축 · 정합)
- [[feedback_first_draft_completeness_5axis]]
- [[feedback_system_first_priority]]
- 원인 분석: `bank/세션38-시범-실패-분석.md`
