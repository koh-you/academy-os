---
name: feedback-illustration-iteration-protocol
description: "삽화·그림 개선 프로토콜 (2026-07-14 세션 36) — 마스터 지적 시 삭제 금지, 개선 iteration 의무"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 5d275468-0c52-47cd-9d92-60574f71646e
---

# 🔴 Illustration Iteration Protocol · 삭제 금지 · 개선 의무

## 배경 (세션 36 사건)

#15 Venn·#16 GPS·#17 팬터그래프 illustration에 마스터 답 노출 지적 발생.

**저의 대응**: 즉시 삭제 (`\includegraphics` 라인 제거).

**마스터 재지적**: **"16번 삽화를 넣으라 했는데 이게 아니다 라고 하면 개선된 삽화를 넣어 왜 삭제하는거지?"**

## RED-LINE 원칙

마스터가 삽화 문제 지적 시:
- ❌ **금지**: 삭제
- ✅ **의무**: 개선 iteration

**Why**: 삽화는 문항 구성의 일부. 지문형·상황부여형에서는 시각적 문맥이 학생 이해에 필수. 삭제는 문항 자체의 완결성 훼손.

## 개선 iteration 4-Step

1. **지적 원인 정확 파악**
   - 답 노출? → 노출 요소만 제거 (좌표 라벨·원소 나열·반지름 값)
   - 관용어 서사? → 좌표평면 대응 도해로 전환
   - 초기·낮은 완성도? → 세션 25 사도기 5-트라이 참조

2. **개선 안 설계**
   - 답 노출 없이 핵심 setup만 표현 (예: GPS → 세 인공위성 위치만, P 미표시)
   - 좌표평면 우선 (관용어 서사 제거)
   - 참조: [[feedback_multilayer_situation_visualization]]

3. **자동 검증**
   ```powershell
   node scripts/figure-answer-leakage-check.mjs <문제.tex> <답지.tex>
   node scripts/figure-check.mjs <문제.tex>
   ```
   GREEN 필수.

4. **마스터 시각 확인 요청**
   - "삭제했음" NO. "개선판 X 완료, PDF 확인 부탁드립니다" YES.

## 예외 (매우 좁게)

**삭제 허용**:
- 마스터가 명시적으로 "삭제해" 지시
- 삽화 자체가 문항 무관 (실수로 추가된 것)
- 개선 iteration 3회 실패 후 마스터 재지시로 fallback

## 세션 36 개선 사례 (진행 중)

**#16 GPS illustration 개선판**:
- 원본: 세 인공위성 A·B·C 위치 + 각 원 (반지름 노출) + P 좌표 마킹 → 답 (3,4) 노출
- 개선: A(0,0)·B(8,0)·C(0,6) 위치만 + 좌표축 + 인공위성 아이콘. 원·P 미표시.
- 검증: `figure-answer-leakage-check` GREEN.

## 관련 자원

- [[feedback_system_first_priority]] v2.0 · 매뉴얼 fix RED-LINE
- [[feedback_figure_authoring_protocol]] v1.1 · 5-step 프로토콜
- [[feedback_multilayer_situation_visualization]] · 좌표평면 대응 우선
- [[feedback_figure_answer_leakage_axis]] · 4축 자동 감지
