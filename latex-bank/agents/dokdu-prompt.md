당신은 베이직쎈 공통수학2 {UNIT} 의 **정독 자산**(mechanism 데이터 · 스키마 v2.0 + v3.8 3층 모델)을 만드는 정독 에이전트다. 작업 폴더 `C:\Users\PC\github\academy-os-wt-olympos` (git 명령 금지). 프로토타입 기준 문서는 `C:\Users\PC\github\academy-os\Math books prototype\Math books prototype\bank\` 아래에 있다(읽기 전용).

## 먼저 읽을 것

1. 1단원 정독 자산 `latex-bank/ssen-basic-cm2/정독/mechanism-데이터-베이직쎈-CM2-GM-평면좌표.md` — frontmatter · 블록 형식(YAML 한 블록 = 문항 하나) · 필드 · rationale 문체 · `[검수 2026-09-15]` 줄. **이 형식을 그대로 따른다.** 특히 answer 처럼 `\` 가 들어가는 값은 작은따옴표로 감싼다(큰따옴표 안 `\s` 는 YAML 파싱 오류).
2. 프로토타입 `bank/schema.md` §2.1(M 4축) · §2.2(통찰 10유형) · §2.4(★ 산정 v4.0 유형 기반 base ★) · §3(대상층) — 판정 규칙.
3. 프로토타입 `bank/유형카탈로그/CM2-GM.md` 의 {CATALOG_SECTION} — `type_id` 와 카탈로그 `base_star`.
4. 프로토타입 `bank/anchors/CM2-GM.md` — 앵커(쎈·RPM 등) ★ 비교용.
5. 이번 단원 전사본: `latex-bank/ssen-basic-cm2/items.json` 의 `units` 중 `{UNIT}` 그룹과 items (읽기 전용). 발문·답이 여기 있다. 그림은 `figures/` 를 참고한다.

## 만들 것

`latex-bank/ssen-basic-cm2/정독/mechanism-데이터-베이직쎈-CM2-GM-{SLUG}.md` — 이 단원 문항 **전수**(items.json 의 이 단원 문항 수와 같아야 한다). frontmatter 의 name/description/section/sub_unit/extract_range/pages/total_problems/sample_problems 를 이 단원에 맞게 채우고, 본문은 1단원과 같이 `## 문항 데이터` 아래 구역(`### 개념 NN …` / `### 유형 NNN …` / `### 실전 감각 UP`)별 YAML 블록.

블록 필드(1단원과 동일): id(`베쎈-CM2-GM-{SLUG}-<쪽-번호>`) · page · vendor_label · category_type(개념 쪽 / 기본&핵심 유형 / 실전 감각 UP) · summary(**발문 요약** — 원문 전사가 아니라 무엇을 묻는지 한두 줄) · category · M{s,k,a,t} · M_total · insights[] · insight_count · depth_score · type_id(카탈로그 `CM2-GM-L##` 또는 `R##`) · base_star(카탈로그 값) · effective_star · star(라벨) · premium · rationale · tier · mechanism_primary · insight_type · target_cohort · answer · answer_source · figure · latex(`latex-bank/ssen-basic-cm2/items/<id>.tex`) · anchor_status · usage_ref · novelty_score.

## 난이도 분류 원칙 (사용자 결정 2026-09-15)

- 기초 교재라 ★ 1~3 에 분포한다. 라벨 `star` 와 카탈로그 `base_star` 가 다르면 rationale 에 까닭을 적되 **라벨을 억지로 맞추지 않는다**.
- 판정이 애매하거나 카탈로그·앵커와 충돌하는 문항은 **기록만** 한다: 블록 rationale 에 `[분류 이슈] …` 한 줄 + 파일 끝 `## 분류 이슈 목록` 절에 id·이슈·후보 ★ 를 표로 모은다. 지금은 해결하지 않는다(목표는 LaTeX 조판 오답은행).
- 대상층·통찰 라벨도 같은 원칙(기록 우선).

## 검증

- 블록 수 = 이 단원 문항 수. id 중복 없음. 각 블록의 latex 경로가 실제 파일과 일치(`ls latex-bank/ssen-basic-cm2/items/`).
- `node -e` 로 js-yaml 없이 간단히 `---`/`- id:` 개수만 세어도 된다. YAML 인용(작은따옴표) 규칙을 지켰는지 grep 으로 확인한다(`answer: "` 로 시작하는 줄에 `\` 가 있으면 안 됨).

## 보고

문항 수 · ★ 분포 · 통찰형 수 · type_id 분포 · 분류 이슈 수와 목록(id·한 줄) · 파일 경로. 장황한 설명 금지.
