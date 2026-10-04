# 숫자변형 작성 — 배치 작업 지시

주문서 하나(`latex-bank/<책>/variants/order-*.json`)를 받아 변형을 만들고, **답을 수치로 검증한 뒤** 응답 파일을 쓴다.

기준의 원천은 `docs/number-variant-guide.md` 다. 여기서는 배치 하나를 처리하는 순서만 적는다.

## 받는 것

```
주문서  latex-bank/<책>/variants/order-<이름>-v1.json
```

안에 `orders[]` 가 있고 각 항목에 `variant_id` · `variant_of` · `unit` · `section` · `figure_kind` · `figure_rule` · `original`(본문·보기·그림·답)이 들어 있다. `contract.rules` 에 규칙이 같이 들어 있다.

## 순서

### 1. 원본을 먼저 푼다

변형을 만들기 전에 **원본의 답을 직접 구한다.** 주문서의 `original.answer` 가 비어 있는 책이 많고(답지가 따로 들어온다), 원본을 잘못 이해하면 변형도 틀린다.

### 2. 바꿀 자리를 고른다

묻는 것과 풀이 방법은 그대로 두고 숫자만 바꾼다. 다음 세 가지를 **동시에** 만족시킨다.

- 답이 깔끔하게 떨어진다(원본이 그랬다면)
- 답의 **값**이 원본과 다르다
- 객관식이면 답의 **번호**도 원본과 다르다

세 번째가 자주 빠진다. 보기 전체를 한 칸 옮기거나, 조건의 부호를 뒤집어 답이 반대쪽 끝에 오게 한다.

### 3. 보기를 다시 만든다

원본 보기를 그대로 두면 계산하지 않고도 답이 보인다. 보기의 **범위 자체**를 옮기는 것도 방법이다.

### 4. 수치로 검증한다 — 건너뛰지 않는다

식을 그대로 계산하는 코드를 짜서 **원본과 변형을 모두** 맞춰 본다.

- 계산형: 식을 그대로 코드로
- 열거형(원소 수·조건을 만족하는 값의 합): 전부 돌려서 센다
- 참·거짓 판별형: 보기마다 참값을 계산해 **참이 정확히 하나**인지 확인

하나라도 안 맞으면 그 문항은 다시 만들거나 skip 한다.

### 5. 응답 파일을 쓴다

`check-batch.mjs` 가 그대로 받는 **배치 모양**이다.

```json
{
  "unit": "01 지수",
  "groups": [{ "id": "U1-A1", "section": "유형 01 거듭제곱근", "items": ["7-01v1", "…"] }],
  "items": {
    "7-01v1": {
      "page": 7,
      "variant_of": "7-01",
      "variant_level": 1,
      "tag": "숫자변형",
      "body": "…",
      "choices": ["…"],
      "answer": "②",
      "answer_source": "계산",
      "solution": "중간값이 들어간 풀이",
      "variation_note": "무엇을 무엇으로 바꿨나 · 답 ③ → ②"
    }
  },
  "skipped": [{ "id": "7-09", "reason": "그림 안 숫자를 바꿔야 풀린다(crop)" }]
}
```

- `page` · `choices_layout` · 꼬리표는 원본을 따른다
- `answer_source` 는 반드시 `"계산"`
- 서답형이면 `choices` 를 넣지 않는다
- 그림은 주문서의 `figure_rule` 을 따른다

### 6. 두 검사를 통과시킨다

```bash
node scripts/latex-bank/check-batch.mjs <응답.json> --bank latex-bank/<책>
node scripts/latex-bank/apply-variants.mjs --bank latex-bank/<책> --response <응답.json> --check
```

조판은 **Overfull 0 · 치명 경고 0**, 계약 검사는 **위반 0** 이어야 한다. 둘 다 통과한 뒤에만 적용한다.

## 보고할 것

- 만든 수 · skip 한 수와 이유
- 수치 검증 결과(원본 포함 몇 개 중 몇 개 일치)
- 조판 결과(문항 수 · 쪽 수 · Overfull · 치명 경고)
- 판단이 갈린 자리(구조가 답을 강제해 항 수를 바꿨다 등)

## 하지 않는 것

- 확신이 없는데 만들어 넣기 — **틀린 변형은 없는 변형보다 나쁘다**
- 단원·유형의 범위를 넘는 개념 끌어오기
- 원본 `items.json` 고치기 — 응답 파일만 쓴다. 삽입은 `apply-variants.mjs` 가 한다
- 검증 없이 「맞을 것 같다」로 넘기기
