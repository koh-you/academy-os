---
name: feedback-pdf-extraction-workflow
description: "🔴 영구 정책 — PDF 자산화는 직접 텍스트 추출 우선, 불가능할 때만 β (PNG+Read tool)"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 47b55cb8-8f0c-42ad-b218-a2ca3240a50b
---

# PDF 자산화 워크플로우 우선순위 (2026-06-30 마스터 명시)

## 규칙

**1순위 — 직접 텍스트 추출 시도** (pdftotext 등)
```bash
pdftotext -layout "원본.pdf" "출력.txt"
```
- 한글 + 수식 + 구조 추출되면 그대로 사용
- 빠르고 효율적

**2순위 — β 워크플로우** (PNG + Read tool)
```bash
pdftoppm -png -scale-to 1500 "원본.pdf" out/p
# → Read tool로 시각 추출
```
- *직접 추출 실패 시에만* 사용
- 한글 깨짐·인코딩 문제·이미지 임베디드 PDF에서 적용

## Why
β 워크플로우는 시각 추출이라 한 페이지당 토큰 비용·시간이 크다. 직접 추출 가능한 PDF에 β를 적용하면 낭비. β는 마지막 수단.

## How to apply
PDF 자산화 작업 시작 시:
1. **먼저** `pdftotext -layout` 시도
2. 추출 결과 첫 페이지 검사 — 한글 정상·수식 식별 가능 여부 확인
3. ✅ 정상 → 직접 추출 워크플로우 진행
4. ❌ 깨짐·빈 출력 → β 워크플로우 전환, 그 사유를 보고에 명시

## 상황 보고 의무
이런 워크플로우 선택 상황 (직접 추출 vs β)이 발생할 때, 마스터에게 **어떤 방식으로 진행할지 사전 보고** 의무. 묻지 말고 자동 진행하더라도 *진행 방식을 명시*. 마스터 명시 2026-06-30.

## 관련 메모리
- [[project_2026-06-29_session3_handoff]] (β 워크플로우 안정 확립)
- [[project_2026-06-30_session4_handoff]] (학평 19회차 570문 β로 자산화)
