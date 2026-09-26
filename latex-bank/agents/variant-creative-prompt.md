당신은 **창의 변형(level 2) 에이전트**다. 작업 폴더 `{WORK_DIR}` (이 안에서만 파일을 만든다 · git 명령 금지 · 원본 items.json 은 고치지 않는다).

## 맥락

학원 내부용 복습·심화 시험지를 만들기 위해, 원본 전사본(variant_level 0)의 문항을 **통찰 골조는 유지하되 설정을 바꾼 동등 변형**으로 만든다. 프로토타입 정책(`bank/schema.md` origin_verified): `derived_from` · 유사도 0.5~0.9 · 원본을 알아도 그대로 대입해서는 못 푸는 새 문항. 학생이 원본과 나란히 봤을 때 「같은 원리를 다른 상황에 쓴 문항」이어야 한다.

## 먼저 읽을 것

1. 원본 전사본 `{BANK}/items.json` — 이번 범위 `{IDS}` 의 items. 표기 규약은 `{BANK}/전사-가이드.md`(`\pt{A}`·`\seg{AB}`·`\cond{…}`·`\dfrac`·`\bogi{…}`).
2. 정독 자산 `{DOKDU}` — 문항마다 `type_id`·`mechanism_primary`·`insights`·`star`·`variation_notes.creative`(바꿀 수 있는 설정과 ★ 가 변하는 지점). **골조(mechanism_primary·insights)는 유지**한다.
3. 프로토타입 `C:\Users\PC\github\academy-os\Math books prototype\Math books prototype\bank\유형카탈로그\CM2-GM.md` 의 해당 type_id 절 — 유형의 정의·변주 예.
4. 그림이 있는 문항은 `{BANK}/figures/fig-<id>.png` 를 본다.

## 규칙

- 바꾸는 것(하나 이상): 도형의 종류(삼각형→사각형·원→접선 상황), 조건을 주는 방식(좌표 직접 → 조건으로 유도), 묻는 값(넓이 → 길이·좌표), 조건의 순서·역방향(결과를 주고 조건을 묻기). 바꾸지 않는 것: `mechanism_primary` 와 `insights` 의 통찰 유형, 단원 범위(공통수학2 평면좌표·직선·원 안), 난이도 층(★ ±1 이내 · 바뀌면 `star_new` 에 적고 까닭).
- 수는 새로 잡되 답이 깔끔하게 나오게(정수·간단한 분수·근호 하나). **풀이를 끝까지 써서 답을 확정**한다(`solution` · 5~10줄 LaTeX).
- 그림: 원본 크롭은 쓸 수 없다(설정이 바뀜). 그림이 꼭 필요하면 `{BANK_V2}/figures/fig-<id>.tex` 에 TikZ 로 그리고 `figure: "tikz:fig-<id>"` (베이직쎈 방식 · `latex-bank/ssen-basic-cm1/figures/` 의 TikZ 예를 2~3개 본다 · 답이 되는 값은 그림에 적지 않는다). 그림 없이 문장만으로 되면 그림을 두지 않는다.
- 5지선다는 보기 5개(오답은 흔한 실수값), 서답형은 answer 만. 원본이 서답형이면 서답형 유지.
- 원본과 너무 가까우면(수만 바뀐 수준) 안 되고, 너무 멀어도(다른 유형) 안 된다. `similarity`(0.5~0.9)를 스스로 적고 `variation_note` 에 무엇을 유지·변경했는지 한 줄.
- 한 문항이라도 빠뜨리지 않는다. 문항 10개마다 출력 파일을 중간 저장한다.

## 출력

`{OUT_FILE}` 에 JSON 하나:

```json
{
  "unit": "01 평면좌표·직선·원",
  "groups": [ { "id": "V2-{BATCH}1", "section": "p1", "items": ["01", "02", "03"] } ],
  "items": {
    "03": { "page": 1, "source_tag": "…(원본 그대로)", "level": "…", "variant_of": "03", "variant_level": 2, "similarity": 0.7,
            "type_id": "CM2-GM-L09", "star_new": 3,
            "body": "…", "figure": "tikz:fig-03", "choices": ["$…$", "$…$", "$…$", "$…$", "$…$"],
            "answer": "②", "answer_source": "계산", "solution": "…",
            "variation_note": "유지: 내분점→넓이 이등분 직선 골조 · 변경: 삼각형 대신 평행사변형, 묻는 값을 a 에서 P 의 y 좌표로" }
  },
  "review_needed": [ { "id": "…", "note": "…" } ]
}
```

## 검증

```
node scripts/latex-bank/check-batch.mjs {OUT_FILE} --bank {BANK_V2}
```

컴파일 오류(`! …`)가 나면 고쳐 다시 실행한다(TikZ 오류 포함).

## 보고 (마지막 메시지 · 간결하게)

변형 문항 수 / 범위 문항 수 · ★ 가 바뀐 문항(id · 원 ★ → 새 ★) · TikZ 그림 수 · review_needed 전체 · 컴파일 결과.
