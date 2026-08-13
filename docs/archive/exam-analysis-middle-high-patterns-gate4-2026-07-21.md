# 시험분석 중학교·고등학교 패턴 Gate 4

기준 데이터: Gate 3 1차 코퍼스 21개 글·202장
중학교: 13개 글·111장 / 고등학교: 8개 글·91장

## 공통 결론

중·고등 모두 기본 문법은 `표지 → 시험 구조/총평 → 주요문항과 풀이 → 다음 대비`다. 학교마다 완전히 새 디자인을 만드는 것이 아니라 같은 역할 순서를 유지하면서 색상, 캐릭터/사진, 강조 도형, 분석 데이터, 원본 문제만 바뀐다.

따라서 반복 생산 단위는 “게시물 한 세트”가 아니라 다음 세 층이다.

1. 역할 순서: 어떤 슬라이드를 몇 장 만들 것인가
2. 역할 템플릿: 각 슬라이드가 어떤 입력·레이아웃·컴포넌트를 갖는가
3. 학교 스타일 토큰: 색, 모티프, 폰트 인상, 장식 강도만 교체

## 중학교 패턴

중학교 111장 중 `key_question 40`, `solution 16`, `overall_review 13`, `cover 12`, `exam_structure 9`, `next_preparation 9`다. 중학교는 한 문항을 설명하는 카드 비중이 높고, 문제 이해·개념 연결·자주 틀리는 지점을 친절하게 풀어 주는 방식이 반복된다.

### M1. 표준형 8~10장

`cover → exam_structure → overall_review → key_question (+ solution) × 2~4 → next_preparation → [academy_cta]`

- 기본값으로 권장하는 중학교 시퀀스다.
- 주요문항 3개를 우선 선택하고, 풀이가 시각적으로 필요한 문항만 바로 다음 장에 풀이를 붙인다.
- 풀이가 없는 주요문항 장에도 핵심 개념, 오답 포인트, 추천 복습을 포함한다.

### M2. 압축형 5~7장

`cover → key_question/solution × 2~3`

- 구조 데이터가 부족하거나 빠른 블로그 게시가 목적일 때 사용한다.
- Academy OS 기본값으로 쓰지 않고, 분석 필드가 미확정일 때만 선택한다.
- 총평·다음 대비가 없어 학부모 설명력이 약하므로 가능하면 M1으로 확장한다.

### M3. 근거 비교형 9~11장

`[cover] → overall_review → source_question/key_question × 3 → overall_review → data_reference × 2~3`

- 전년도 원안 비교, 유사문항 비교, 내부 누적표가 있을 때 사용한다.
- 원본 표와 문제는 GPT Image로 다시 쓰지 않고 원본 자산으로 삽입한다.

## 고등학교 패턴

고등학교 91장 중 `key_question 22`, `solution 16`, `exam_structure 8`, `cover 8`, `next_preparation 7`, `source_question 7`, `source_reference 7`이다. 고등학교는 중학교보다 출처 교재·원본 문제·풀이 증거를 길게 보여 주고, 시험 구조와 변별 구간을 더 앞에서 명시한다.

### H1. 표준형 8~10장

`cover → exam_structure → overall_review → key_question/solution × 2~3 → next_preparation`

- 데이터가 충분하지만 별도 출처 증거까지 강조하지 않을 때 사용한다.
- 주요문항은 난도보다 시험 전체를 대표하는 개념 연결과 변별 이유를 기준으로 고른다.

### H2. 근거 강화형 12~14장

`cover → exam_structure → [unit_distribution] → difficulty_flow → key_question_summary → (source_reference → source_question → solution) × 2~3 → next_preparation → [academy_cta]`

- 교재 적중·유사문항 출처와 손풀이를 명확히 보여 줄 때 사용한다.
- `source_reference`, `source_question`, `solution`은 하나의 증거 묶음이며 순서를 유지한다.
- 원본 자산 장은 생성 이미지가 아니라 편집/합성 대상으로 표시한다.

### H3. 문제 집중형 10~14장

`cover → exam_structure → overall_review → key_question × N → [solution] → difficulty_flow → next_preparation`

- 여러 대표 문항을 한꺼번에 보여 주는 형식이다.
- 비슷한 문항 카드를 무한히 늘리지 않도록 `N=3~5`를 기본 상한으로 둔다.

## 공통 선택 규칙

| 데이터 상태 | 삽입 역할 | 처리 |
|---|---|---|
| 문항 수·배점·범위 확정 | `exam_structure` | 필수 |
| 난이도 구간 또는 점수대 근거 있음 | `difficulty_flow` | 구조 다음에 삽입 |
| 단원별 문항 수가 확정됨 | `unit_distribution` | 차트/표로 코드 렌더 우선 |
| 주요문항 2개 이상 | `key_question_summary` | 고등 근거 강화형에서 우선 |
| 원본 시험 문제가 있음 | `key_question` 또는 `source_question` | 원본 crop 사용 |
| 검증된 풀이가 있음 | `solution` | 대응 문항 바로 뒤 |
| 출처 교재 증거가 있음 | `source_reference` | 출처 문제 앞에 배치 |
| 다음 학기/다음 시험 계획 확정 | `next_preparation` | 마지막 분석 카드로 필수 |
| 학원 CTA가 필요한 채널 | `academy_cta` | 블로그 마지막에만 선택 |

## 금지 규칙

- 데이터가 없는데 문항 수, 평균, 난이도 비율, 배점, 출처를 만들어 내지 않는다.
- 원본 문제·풀이·표의 숫자와 수식을 GPT Image가 재타이핑하게 하지 않는다.
- 중학교와 고등학교를 색상만 바꾼 동일한 시퀀스로 고정하지 않는다.
- 파생 비교글과 진도표를 한 학교 시험분석 기본 시퀀스에 섞지 않는다.
- 한 장에 원본 문제, 전체 풀이, 총평, 다음 대비를 모두 넣지 않는다.

## Gate 5 입력 계약

Gate 5는 위 역할들을 독립 모듈로 정의한다. 각 모듈은 `사용 조건`, `필수 데이터`, `레이아웃`, `원본 자산 처리`, `생성 프롬프트 슬롯`, `검수 체크`를 가져야 한다. 학교 스타일은 역할 안에 하드코딩하지 않고 별도 토큰으로 주입한다.
