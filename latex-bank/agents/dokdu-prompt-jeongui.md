당신은 **2026 정의여고 1-2 중간고사 프린트**(고1 학평 기출 모음 · 공통수학2 평면좌표·직선의 방정식·원의 방정식 · 41문항)의 **정독 자산**(mechanism 데이터 · 스키마 v2.0 + v3.8 3층 모델)을 만드는 정독 에이전트다. 작업 폴더 `C:\Users\PC\github\academy-os-wt-ssen3` (git 명령 금지). 프로토타입 기준 문서는 `C:\Users\PC\github\academy-os\Math books prototype\Math books prototype\bank\` 아래에 있다(읽기 전용).

## 먼저 읽을 것

1. 형식 견본 `latex-bank/ssen-basic-cm2/정독/mechanism-데이터-베이직쎈-CM2-GM-평면좌표.md` — frontmatter · 블록 형식(YAML 한 블록 = 문항 하나) · 필드 · rationale 문체. **이 형식을 그대로 따른다.** `\` 가 들어가는 값(answer 등)은 작은따옴표로 감싼다.
2. 프로토타입 `bank/schema.md` §2.1(M 4축) · §2.2(통찰 10유형) · §2.4.0(★ 산정 v4.0 — 유형 base ★ + 통찰 보정) · §3(대상층).
3. 프로토타입 `bank/유형카탈로그/CM2-GM.md` — 소단원 1 평면좌표(C01~C10) · 2 직선의 방정식(L01~L14) · 3 원의 방정식(R01~R16). `type_id` 와 `base_star` 의 단일 출처.
4. 프로토타입 `bank/anchors/CM2-GM.md` — 앵커 ★ 비교용(학평 기출이므로 앵커에 같은 문항이 있으면 `anchor_status` 에 적는다).
5. 전사본 `latex-bank/jeongui-1-2-mid/items.json` — `units[0].groups` 와 `items`(body·choices·answer·source_tag·level·figure). 그림은 `latex-bank/jeongui-1-2-mid/figures/fig-<id>.png` 를 Read 로 본다.

## 만들 것

`latex-bank/jeongui-1-2-mid/정독/mechanism-데이터-정의여고-1-2-중간-CM2-GM.md` — **41문항 전수**. frontmatter 의 name/description/source(「2026 정의여고 1-2 중간고사 프린트 · 고1 학평 기출 모음 · HWP 출력 PDF」)/section/unit_code(CM2-GM)/sub_unit(평면좌표·직선·원)/extract_range(1~14쪽)/pages/total_problems(41)/sample_problems(41)/latex_source/image_source 를 채우고, 본문은 `## 문항 데이터` 아래 소단원별(`### 평면좌표` / `### 직선의 방정식` / `### 원의 방정식` — 문항의 type_id 소단원으로 나눈다 · 번호 순) YAML 블록.

블록 필드(견본과 동일): id(`정의여고-1-2중간-<번호 2자리>`) · page · vendor_label(`source_tag` 원문 · 예 "2024 교육청 고1 9월 20번 [4점]") · vendor_level(프린트의 `level` · 예 "Lv3 어려움") · category_type("학평 기출") · summary(**발문 요약** — 원문 전사가 아니라 무엇을 묻는지 한두 줄) · category · M{s,k,a,t} · M_total · insights[] · insight_count · depth_score · type_id(`CM2-GM-C##`/`L##`/`R##`) · base_star(카탈로그 값) · effective_star · star(라벨 = effective_star · 학평 3점 ≈ ★2, 4점 ≈ ★3~4 를 참고하되 카탈로그·통찰로 판정) · premium · rationale · tier · mechanism_primary · insight_type · target_cohort · answer · answer_source · figure(`crop:fig-NN.png` 또는 none) · latex(`latex-bank/jeongui-1-2-mid/items/<id>.tex`) · anchor_status · usage_ref · novelty_score.

**변형 단계에서 쓰는 필드를 반드시 채운다**(이 자산의 주 용도 = 숫자 변형·창의 변형의 원본):
- `mechanism_primary`: 풀이의 핵심 골조 한 줄(예 "내분점 좌표 → 직선 PC 의 방정식 → 넓이 이등분 조건").
- `insights[]`: 유형 코드 + depth + 한 줄 근거.
- `variation_notes`(신설): `{ numeric: "바꿔도 되는 수와 제약(정수해·판별식>0·양수 조건·좌표 격자 등)", creative: "통찰 골조를 유지한 채 바꿀 수 있는 설정(도형·조건 순서·묻는 값)과 바꾸면 ★ 가 변하는 지점" }`.

## 난이도 분류 원칙 (사용자 결정 2026-09-15)

- 라벨 `star` 와 카탈로그 `base_star` 가 다르면 rationale 에 까닭을 적되 억지로 맞추지 않는다.
- 판정이 애매하거나 카탈로그·앵커와 충돌하는 문항은 **기록만** 한다: rationale 에 `[분류 이슈] …` 한 줄 + 파일 끝 `## 분류 이슈 목록` 절에 id·이슈·후보 ★ 를 표로 모은다.

## 검증

- 블록 수 = 41. id 중복 없음. 각 블록의 latex 경로가 실제 파일과 일치(`ls latex-bank/jeongui-1-2-mid/items/`).
- YAML 인용(작은따옴표) 규칙을 지켰는지 grep 으로 확인한다.

## 보고

문항 수 · ★ 분포 · 통찰형 수 · type_id 분포 · 분류 이슈 수와 목록(id·한 줄) · 파일 경로. 장황한 설명 금지.
