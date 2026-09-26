# CFES Phase A-2 세션 99 실측 판정 리포트

## §0. 요약

**세션 99 실측 판정 완결**: 5 pair 파일럿 · A1 자동 + A2 problem-review + A3 LLM Pairwise (Opus+Sonnet · forward+reverse) 모든 축 판정 완료 · 마스터 blind 판정만 대기.

**핵심 발견**:
1. **BT-002 설계 결함 감지**: creation-02가 well-defined 실패 (대칭중심 case 2개 · a+b 값 두 개). Opus·A2 이 감지, Sonnet forward만 놓쳤으나 **reverse-check가 교정**.
2. **BT-003 답 청결도 결함**: creation-03의 답 4√34 (무리수) vs anchor-03의 답 56 (정수). r 대신 r²로 물어야 했던 설계 실수. 3축 모두 강하게 anchor 우세 판정.
3. **BT-004·005는 creation 우수 판정**: 3-4-5 Pythagorean triple 활용으로 계산 청결.

## §1. 통합 판정 매트릭스

| pair | A1 자동 | A2 problem-review | A3 forward | A3 reverse | Reverse 일관 |
|---|:---:|:---:|:---:|:---:|:---:|
| BT-001 | PASS (동등) | Q 우세 (0.62) | Q 우세 (0.55·0.55) | Q 우세 (0.55·0.65) | ✓ |
| BT-002 | PASS (동등) | **Q 우세 (0.90)** | **불일치** (Opus:Q · Sonnet:P) | Q 우세 (0.85·0.85) | Sonnet 오판정 교정 |
| BT-003 | PASS (동등) | Q 우세 (0.85) | Q 명백 우세 (0.70·0.85) | Q 명백 우세 (0.70·0.88) | ✓ |
| BT-004 | PASS (동등) | Q 우세 (0.62) | P 우세 (0.45·0.72) | P 우세 (0.45·0.70) | ✓ |
| BT-005 | PASS (동등) | P 우세 (0.72) | P 우세 (0.50·0.82) | P 우세 (0.50·0.80) | ✓ |

## §2. 판정 최종 결론 (자동 판정만)

**A2 + A3 종합 판정 (마스터 blind 판정 제외)**:

- **BT-001**: Q (anchor) 소폭 우세 · 3축 합의 (자연스러움)
- **BT-002**: Q (anchor) 명백 우세 · A2·Opus 강한 합의 · Sonnet forward 오판정 → reverse가 정정
- **BT-003**: Q (anchor) 명백 우세 · 3축 강한 합의 (답 청결도)
- **BT-004**: **불일치** · A2는 Q · A3는 P · 마스터 판정 필요
- **BT-005**: P (creation) 소폭~중간 우세 · A2·A3 합의

**요약**: 5 pair 중 3건은 자동 판정으로 확정 가능 · 1건(BT-004)은 축간 불일치 · 1건(BT-002)은 Sonnet 오판정을 reverse가 성공적으로 교정.

## §3. Reverse-Check의 실질 검증 결과

**BT-002 사례가 reverse-check의 유용성 실증**:
- Sonnet forward: a_over_b=0.65 (creation 우세로 판정 · 대칭 통찰 강조하나 case 다양성 미검토)
- Sonnet reverse: a_over_b=0.85 (anchor 우세로 재판정 · 설계 결함 재발견)
- Opus forward: b_over_a=0.85 (설계 결함 지적)
- Opus reverse: a_over_b=0.85 (일관)
- A2 problem-review: Q 우세 (0.90) · well-defined 결함 명시 감지

**결론**: reverse-check가 forward에서 놓친 오류를 잡아내는 실제 사례 확보. 시스템 설계 이점 실증.

## §4. 편향 분석 (예비)

| pair | length_bias | style_bias | familiarity_bias |
|---|:---:|:---:|:---:|
| BT-001 | 없음 (동일 구조 · 동일 길이) | 낮음 | 낮음 |
| BT-002 | 없음 | 낮음 | 낮음 (형식만 다름) |
| BT-003 | 없음 | 낮음 | 낮음 |
| BT-004 | 없음 | 낮음 | 낮음 |
| BT-005 | 없음 (같은 문장 형식) | 낮음 | 낮음 |

**초기 판정**: 명백한 편향 신호 없음. 판정 근거는 답 청결도·well-defined 성 등 객관적 기준 위주.

## §5. 다음 스텝

### §5.1 마스터 blind 판정 (5 pair)

**중요**: 이 대조 리포트 노출 금지 (anchor·creation 라벨 알면 blind 아님)

절차:
1. `bank/creation-archive/phase-a2/anchors/anchor-XX.tex` 와 `creations/creation-XX.tex`를 P·Q 라벨만 유지하여 나란히 비교
2. master_verdict 5-scale 판정 + master_reasoning 서술
3. `bank/blind-twin-master-anchor.md` §3에 YAML append

### §5.2 대조 정확도 산출 (마스터 판정 완료 후)

각 pair에 대해:
- A2 winner vs master_verdict 일치 여부
- A3 앙상블 winner vs master_verdict 일치 여부
- **3축 합의 winner vs master_verdict 일치 여부**

**주의**: 5 pair는 통계 유의성 부족 · 지표는 경향 참조. 100+ pair 축적 후 90% 임계값 판정.

### §5.3 Phase A-2 확장 결정 (마스터)

- 옵션 A : 파일럿 완료 후 검토 · 다음 세션에서 규모 결정
- 옵션 B : 세션 100에서 +10 pair 추가 준비
- 옵션 C : 파일럿 결과 이슈 있으면 재설계 iteration

## §6. 관련 자원

- **A3 프롬프트** (판정 완료): `_scratch/llm-prompts/2026-07-28T07-17-5*.md` (10 파일)
- **A2 YAML** (판정 완료): `bank/creation-archive/phase-a2/reports/A2-BT-00X.yaml` (5 파일)
- **자동 판정** (dry-run): `bank/creation-archive/phase-a2/reports/BT-00X.md` (5 파일)
- **파일럿 리포트**: `bank/creation-archive/phase-a2/PILOT-REPORT.md`
- **기획안**: `bank/창작-자유도-확장-시스템-기획안-v1.1.md`
- **마스터 anchor 데이터셋**: `bank/blind-twin-master-anchor.md`

## §7. 변경 이력

- **v1.0** (2026-07-28 · 세션 99 · CFES Phase A-2 실측) : 5 pair A2·A3 판정 완결 · 마스터 blind 판정 대기 · BT-002 설계결함 감지 사례 · reverse-check 유용성 실증.
