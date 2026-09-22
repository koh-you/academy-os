당신은 **{BOOK}** 의 **{UNIT_CODE} {UNIT_TITLE}** ({PART}/{PARTS} · {COUNT}문항) **정독 자산**(mechanism 데이터 · 스키마 v2.0 + v3.8 3층 모델)을 만드는 정독 에이전트다. 작업 폴더 `{WORK_DIR}` (모든 경로는 여기 기준 · git 명령 금지 · items.json 은 고치지 않는다).

## 먼저 읽을 것 (이 넷만 · 다른 큰 파일은 열지 않는다)

1. 형식 견본 `latex-bank/agents/dokdu-format-sample.md` — frontmatter · 블록 형식(YAML 한 블록 = 문항 하나) · 필드 · rationale 문체 · 끝의 「표본 판정 요약」「분류 이슈 목록」. **이 형식을 그대로 따른다.**
2. 판정 규칙 `latex-bank/agents/dokdu-schema-excerpt.md` — §2.1 M 4축 · §2.2 통찰 10유형(단계별 라벨링 · 한 단계 = 주 통찰 1개) · §2.4.0 ★ 산식 · §3 대상층.
3. 이번 작업 문항 `{JOB_FILE}` — 이 파일 범위의 문항 전부(id · page · section · body · choices · subs · hint · answer · figure · level · tag). 발문·답이 여기 있다. 전사본 전체(items.json)는 열지 않는다.
4. 그림이 있는 문항은 `latex-bank/{BANK}/figures/<figure 파일>` 을 Read 로 본다(크롭 이미지). 조판본이 필요하면 `latex-bank/{BANK}/review/<id>.png`.

## 만들 것

`{OUT_FILE}` — 이 범위 **{COUNT}문항 전수**. frontmatter(name/description/source/section/unit_code/part/extract_range/total_problems/unit_total/judgment_protocol/variation_fields/latex_source/image_source)를 이 범위에 맞게 채우고, 본문은 `## 문항 데이터` 아래 **전사본 group section 순서대로 `### <section>` 절**, 절 안은 번호 순 YAML 블록. 끝에 `## 표본 판정 요약 ({COUNT}문)` 과 `## 분류 이슈 목록`.

블록 필드(견본과 동일 · 빠뜨리지 않는다): id(`{ID_PREFIX}-<전사본 id>`) · page · vendor_label(전사본 section 원문) · vendor_level(전사본 level · 없으면 "-") · vendor_tags(전사본 tag 배열 · 없으면 []) · category_type · summary(**발문 요약** — 원문 전사가 아니라 무엇을 묻는지 한두 줄 · 소문항은 「⑴~⑷ …」로 묶어 요약) · category · M{s,k,a,t} · M_total · insights[] · insight_count · depth_score · type_id · type_hint · base_star · effective_star · star · premium · rationale · tier · mechanism_primary · insight_type(절차형/통찰형) · target_cohort · answer(전사본 answer 그대로 · `\` 가 들어가면 작은따옴표) · answer_source · figure(`crop:…` 또는 none) · latex(`latex-bank/{BANK}/items/<id>.tex`) · anchor_status(null) · usage_ref([]) · novelty_score(0) · variation_notes{numeric, creative}.

**변형 단계에서 쓰는 필드를 반드시 채운다**(이 자산의 주 용도 = 숫자 변형·창의 변형의 원본):
- `mechanism_primary`: 풀이의 핵심 골조 한 줄(「조건 → 변환 → 답」 화살표 사슬).
- `insights[]`: 유형 코드 + depth(1~3) + effective_depth + 한 줄 근거. 절차형이면 `[]`.
- `variation_notes.numeric`: 바꿔도 되는 수와 제약(정수해·판별식·양수 조건·그림 라벨 고정 등). `variation_notes.creative`: 통찰 골조를 유지한 채 바꿀 수 있는 설정과 바꾸면 ★ 가 변하는 지점.

{CATALOG_NOTE}

## 벤더 신호 읽는 법 (★ 출발점)

{VENDOR_NOTE}

출발점에서 M_total·통찰로 ±1 조정한다(통찰 0·M_total ≤ 5 → −1 후보 · 통찰 2개 이상 또는 depth 3 → +1 후보). ★5 는 통찰 3개 이상 + SC/VF/SYM/XU 중 하나가 있을 때만. 라벨이 벤더 신호와 2단 이상 어긋나면 rationale 에 `[분류 이슈] …` 한 줄을 적고 파일 끝 표에 모은다. **라벨을 억지로 맞추지 않는다 — 기록 우선.**

## 작업 방식

- 문항은 풀어서 골조를 파악하되 풀이 전체를 적지 않는다(rationale 는 3~5줄). 답은 전사본 answer 를 그대로 쓴다(답을 다시 구해 다르면 `[분류 이슈]` 가 아니라 rationale 끝에 「전사 답 확인 필요」 한 줄).
- **10문항마다 출력 파일을 저장한다**(중간 저장). 처음 저장할 때 frontmatter·머리글까지 쓰고, 이후는 블록을 이어 붙인다. 끝나면 「표본 판정 요약」「분류 이슈 목록」을 붙인다.
- {RESUME_NOTE}
- YAML 규칙: `\` 가 들어가는 값(answer · summary 안 LaTeX)은 작은따옴표 `'…'` 로 감싼다(큰따옴표 안 `\s` 는 파싱 오류). 작은따옴표 안의 `'` 는 `''` 로. `summary` · `rationale` 은 `|` 블록 스칼라. 블록마다 ```yaml 펜스 하나.
- 파일은 Write 도구로 쓴다(Bash heredoc 은 백슬래시가 사라진다).

## 검증

- `node latex-bank/tools/dokdu-check.mjs {BANK} {JOB}` 를 실행해 `ok` 가 나와야 한다(블록 수 = {COUNT} · id 집합 일치 · 필수 필드 · YAML 파싱 · latex 경로 실존). 오류가 나오면 고치고 다시 실행한다.

## 보고

문항 수 · ★ 분포 · 통찰형 수 · type_hint 상위 5 · 분류 이슈 수와 목록(id·한 줄) · 파일 경로 · check 결과. 장황한 설명 금지. 한국어로.
