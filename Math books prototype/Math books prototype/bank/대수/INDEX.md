# bank/대수/ INDEX

대수 라인 등록부 인덱스. 메인 `bank/INDEX.md`와 분리.

**갱신**: 2026-06-18 — 초기화 (book redesign 흡수 직후, 등록 0건)

## 단원별 카운트

| 단원 코드 | 단원명 | 등록 수 |
|---|---|---|
| CM1-PL | 다항식 | 0 |
| CM1-EQ | 방정식과 부등식 | 0 |
| CM1-CB | 경우의 수 | 0 |
| CM1-MX | 행렬과 그 연산 | 0 |
| **합계** | | **0** |

## ★별 분포

| ★ | 개수 |
|---|---|
| ★1 | 0 |
| ★2 | 0 |
| ★3 | 0 |
| ★4 | 0 |
| ★5 | 0 |

## 코드 규약 요약

`CM1-{PL/EQ/CB/MX}-A###` — `A` prefix는 대수 라인. 메인의 `DI-`·`OUT-`와 충돌 회피.

상세: `bank/대수/README.md`

## 등록 워크플로우

1. `output/대수/{단원}/`에서 출제
2. YAML 프론트매터(`bank/schema.md` §7 6요소) 작성
3. `bank/대수/problems/CM1-XX-A###.md` 생성
4. 이 INDEX의 카운트 갱신
5. `problem-review` 에이전트로 검수

## 참고

- `bank/schema.md` — 8축 루브릭·★ 매핑·대상층 매트릭스 (공유)
- `bank/anchors/CM1-{PL,EQ,CB,MX}.md` — 앵커 5문 (공유)
- 메인 `bank/INDEX.md` — DI/OUT 시리즈 인덱스 (분리)
