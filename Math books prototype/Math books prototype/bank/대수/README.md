# bank/대수/ — 대수 라인 전용 등록부

본 디렉토리는 **공통수학1 재디자인 라인(이하 "대수 라인")** 전용 문제 등록부이며, 메인 `bank/problems/` 1,801문항과 **분리 운영**된다.

## 분리 운영 근거

마스터 결정(2026-06-18): book redesign 흡수 시 bank/problems는 분리, schema·anchors는 통합.

- **메인 `bank/problems/`** — DI-*(깊이와통찰 추출 1,711) + OUT-*(완성본 추출 90) 자동화 파이프라인 자산
- **`bank/대수/problems/`** — 대수 라인 자체 등록부, 별도 코드 시리즈(A###)로 충돌 회피

양쪽이 공유:
- `bank/schema.md` — 8축 루브릭·★ 매핑·대상층 매트릭스·앵커 규약 (메인 한 곳만)
- `bank/anchors/CM1-{PL,EQ,CB,MX}.md` — 단원별 ★1~5 표준 앵커 (메인 한 곳만; book redesign 사본은 byte-exact 동일하여 폐기됨)

## 코드 규약

```
CM1-{단원}-A###
```
- `CM1` — 공통수학1
- `{단원}` — PL / EQ / CB / MX
- `A###` — 대수 라인 prefix `A` + 3자리 zero-padded
- 예: `CM1-EQ-A001`, `CM1-MX-A042`

메인 등록부의 `DI-###` · `OUT-###` 와 prefix가 달라 자동 충돌 회피.

## 등록 워크플로우

1. 문제 작성 — `output/대수/{단원}/` 아래 .tex에서 출제
2. YAML 프론트매터 작성 — `bank/schema.md` §7 6요소 의무 명시
3. `bank/대수/problems/CM1-XX-ANNN.md` 등록 → `bank/대수/INDEX.md` 카운트 갱신
4. `problem-review` 에이전트 호출로 검수

## 관련 자료

- `bank/schema.md` — 단일 출처 스펙
- `bank/anchors/` — 같은 단원의 ★별 앵커 5문
- `CLAUDE.md` § "대수 라인 (재디자인)" — 라인 전체 워크플로우
