---
name: feedback-proof-example-avoidance
description: 증명 (대우 증명·귀류법·명제 증명) 은 예제·문제 연습 대상으로 부적절 · 개념박스 서술 (dmsub·dmexample·dmnote) 로만 다루고 대표예제 (dmex) 는 생략 · 향후 신규 교재 지침
metadata: 
  node_type: memory
  type: feedback
  established: 2026-07-26 세션 91
  source: 마스터 판단 (05 집합명제 c5 재편 논의)
  originSessionId: b4a405d5-6112-4462-a253-804117d24dca
---

# 증명 예제 지양 정책 (향후 신규 교재 지침)

**개념박스 (dmsub·dmexample·dmnote) 로 증명 개념을 서술하되, 대표예제 (dmex) 와 확인 문제 (dmcheck) 로는 증명을 다루지 않는다.**

## Why

세션 91 마스터 판단 (2026-07-26): 05 집합명제 c5 (명제의 증명·절대부등식) 에 대표예제가 산술기하 1문뿐이어서 대우 증명·귀류법이 예제로 미반영. Agent 진단이 Option A (2문 신설) 를 권장했으나 마스터가 기각. 근거:

- **증명 유형은 "값 구하기·조건 결정" 문제 프레임에 자연스럽게 들어가지 않는다.** 학생이 반복 연습으로 익히는 절차형·통찰형 문제와 성격이 다르다.
- **증명은 서술 (개념박스 dmsub·dmexample) 로 이해시키는 것이 학습 효율이 높다.** 대표예제로 만들면 오히려 형식적 모방 학습이 되기 쉽다.
- **DeeP Math 정리편은 상위권 대상 · 값 구하기 중심 훈련이 목표.** 학평·모의고사·내신 실전 대비.

## How to apply

- **개념박스** (dmconcept · dmsub · dmexample · dmnote) 에서 증명 개념·방법을 상세 서술 → OK
- **대표예제** (dmex + dmproblem + dmapproach + dmsolution) 로 증명 문제 출제 → **금지**
- **확인 문제** (dmcheck) 로 증명 문제 출제 → **금지**
- **Level 1·2·3 · 실전** 에서도 증명 문제는 지양 (모두 값 구하기·조건 결정 우선)
- **예외**: 학평·모의고사 원본이 증명형인 경우 (verbatim_kichul) 는 그대로 유지 · 대표예제로는 신설 금지

## 적용 대상 유형

- 명제 증명 (대우·직접)
- 귀류법
- 실수 성질 5종 증명
- 절대부등식 증명 (\|a\|≥a 등 기초)
- 항등식·집합 등호 증명

## 이번 시리즈 (DeeP Math 정리편) 처리

- **05 집합명제 c5**: 현 상태 유지 (E10 산술기하 1문만) · 재편 없음 · 완결
- 04·06·07·08: 원래 증명 예제 없음 · 유지

## 향후 신규 교재 (새 시리즈) 지침

새 시리즈 (예: 유형편·연습편·수능특강 계열) 청사진 작성 시:
1. 개념박스 c_i에 증명 개념이 포함되면 예제 슬롯 수 미달 감지 시 **자동 신설 금지**
2. Agent (concept-author·problem-author) 가 증명 예제를 신설 후보로 올리면 마스터에게 승인 게이트 요청 · 자동 채택 금지
3. 증명 개념은 dmsub·dmexample·dmnote로 밀도 있게 서술 · 페이지 확장 허용

## 관련 메모리

- [[feedback_dmconcept_content_principle]] — 핵심 개념만 · 마스터 시각 확인 필수
- [[feedback_universal_publishing_framework_v1]] — 통합 문제출제 시스템 · 예제 슬롯 원칙
- [[feedback_no_textbook_recap]] — 정의박스 교과 표준 개념 회고 금지
- [[project_2026-07-26_session91_handoff]] — 세션 91 (마스터 판단 계기)
