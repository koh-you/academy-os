---
name: feedback-student-distinguishability
description: "순열/조합 문제에서 *사람·학생*은 *구별* 의무. 자리 선택만으로 끝내면 결함 ([[2026-07-01-학생구별-누락]]). 2026-07-01 마스터 명시."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 66fe4d88-06a0-455a-803c-df197aec02f7
---

## 규칙

CB 단원 (순열·조합) 문제에서 등장 인물 (학생·사람·선수·후보 등)은 **반드시 구별** 의무. 자리 선택 후 *사람 배열*까지 곱해야 정답.

- **잘못된 풀이**: "이웃하지 않는 자리 ${}_8\mathrm{C}_3 = 56$" — 자리만, 사람 미구별
- **올바른 풀이**: "${}_8\mathrm{C}_3 \times 3! = {}_8\mathrm{P}_3 = 336$" — 자리 × 사람 배열

발문이 "*경우의 수*"인 경우 학생 구별이 자연. 발문이 "*자리를 정하는 방법*"이라고 명시되면 자리만 OK.

**Why**: 2026-07-01 마스터 직접 적발. 1학기 기말 예상 1회 #16 "세 명의 학생이 ... 앉는 경우의 수" 풀이가 ${}_8\mathrm{C}_3 = 56$로 사람 구별 누락. 정답 ${}_8\mathrm{P}_3 = 336$.

**How to apply**:
- CB 단원 풀이 작성 시 *사람 구별 여부* 명시적 점검
- 자리 선택 → 사람 배열 → 곱셈 양식 표준 적용
- "$n$명을 $k$자리에 …" 발문은 ${}_n\mathrm{P}_k$ (순열)
- 발문에 "자리를 정하는 경우의 수"라고 *우회 표현*되면 ${}_n\mathrm{C}_k$ (조합) OK

## 관련

- [[feedback_no_binom_symbol]] — $\binom{n}{k}$ 폐기, ${}_n\mathrm{C}_r$ 표준 표기 의무
- [[feedback_master_feedback_system]]
