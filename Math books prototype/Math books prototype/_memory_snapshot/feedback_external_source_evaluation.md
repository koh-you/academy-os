---
name: feedback-external-source-evaluation
description: "외부 자료 평가 시 단일 출처 6종 의무 grep, 외부 지식 단정 금지, 보고서 인용 의무 (영구 정책, 마스터 직접 지적 2026-06-29)"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 0ed37de1-6537-4367-a033-f3fae4bc2765
---

# 외부 자료 평가 절차 (영구 정책, 2026-06-29 신설)

시판 책·PDF·기출·다른 출판사 자료를 평가·분석할 때 적용되는 강제 절차.

**Why**: 2026-06-29 아샘 짱 내신 FINAL 분석에서 분석자(클로드)가 본 시스템 단일 출처(`bank/CM1-교과과정.md:27` MX 단원·`bank/anchors/CM1-MX.md` MX-T04 행렬 곱셈 ★ 1~5 등재)를 *직접 grep하지 않고* 외부 지식만으로 "행렬 곱셈 = CM1 범위 외 → 부록 2·3·4회 RED" 단정. 본 시스템 자산이 정상 등재된 단원을 외부 지식으로 부정한 사건. 마스터 신뢰도 의구심 정당.

**How to apply** (보고서 송신 *전* 의무 자가 점검):

1. **단일 출처 6종 의무 grep** (단계 2): 평가 시작 전 다음 6종 직접 grep
   - `bank/CM1-교과과정.md` 해당 단원 §1 표
   - `bank/schema.md` 3층 모델·★ 산정
   - `bank/anchors/{과목}-{단원}.md` 앵커 T-code 분포
   - `bank/마스터-지적/INDEX.md`
   - `bank/4점-패턴-카탈로그/03-패턴-카탈로그.md`
   - `bank/CM1-교과과정.md` §3.0 상위 과정 침투 금지

2. **외부 지식 단정 금지** (단계 3): 다음 표현은 단일 출처 줄 번호 인용 없이 사용 금지
   - "교과 범위 외" / "CM1 범위 외" / "CM2 범위 외"
   - "RED" 단정
   - "2022 개정에서 X는 제외"
   - "교과서 표준 아님"

3. **충돌 시 단일 출처 우선**: 외부 지식과 본 시스템 단일 출처가 충돌하면 *반드시* 단일 출처를 따른다. 단일 출처가 *틀렸다*고 판단하면 분석 보고서 보류 후 마스터에게 단일 출처 검토 요청.

4. **보고서 인용 의무** (단계 5):
   - "교과 범위" 판정 → `bank/CM1-교과과정.md:NN` 줄 번호 인용
   - "RED" 단정 → 단일 출처 + 자동 도구 결과 인용
   - "★ 5 strict" 식별 → `bank/schema.md` v3.4 §"★ 5 최상위 기준" 인용
   - 본 시스템 비교 → `bank/anchors/{단원}.md` 또는 `bank/INDEX.md` 통계 인용

5. **자가 점검 체크리스트** (송신 직전):
   - [ ] "교과 범위 외" / "RED" 단정에 `bank/CM1-교과과정.md:NN` 줄 인용?
   - [ ] 외부 지식 vs 단일 출처 충돌 없는가?
   - [ ] 본 시스템 자산 통계가 보고서와 모순되지 않는가?
   - [ ] ★ 5 strict 식별이 v3.4 임계와 일치?
   - [ ] 보고서가 본 시스템 데이터를 무시하고 외부 지식만으로 결론?

자가 점검 통과 못하면 송신 보류.

**적용 외**: 본 시스템 자체 출제·검수에는 `bank/workflow.md` 7단계 + `bank/검수-절차.md` 3축 5단계 적용.

**단일 출처**: [`bank/외부자료-평가-절차.md`](../../../OneDrive/Cluade Projects/Math books/bank/외부자료-평가-절차.md) v1.0.

**관련**: [[feedback_full_corpus_analysis_required]] (자료 전수 분석 + 자산화 의무), [[feedback_cm1_curriculum_single_source]] (CM1 교과과정 단일 출처), [[feedback_master_feedback_system]] (마스터 지적 자동 누적).
