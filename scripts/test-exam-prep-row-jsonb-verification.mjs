// 2026-09-05 회귀 방지.
// 증상: math_exam_dates 에 항목이 있는 시험정보 행만 저장이 계속 실패했다.
//   (정의여고 고1, 창일중 중2 — 운영에서 이 둘만 실패)
// 원인: Postgres jsonb 는 객체 키 순서를 보존하지 않는다. 클라이언트는
//   {id,date,grade,subject,label,sourceSchoolEventId} 순으로 보내는데 재조회하면
//   {id,date,grade,label,subject,sourceSchoolEventId} 순으로 돌아온다.
//   저장 검증이 JSON.stringify 문자열 비교라서 값이 같아도 불일치로 판정했다.
//   쓰기는 이미 성공한 뒤라 updated_at 만 계속 올라가고 UI 는 매번 실패로 표시했다.
import assert from "node:assert/strict";

const { areExamPrepRowsPersistedEqual } = await import(
  "../src/shared/persistence/learningCalendarRowMappers.js"
);

const baseRow = {
  examPrepId: "exam_prep_2026-2-mid_정의여고_고1_공통수학1",
  schoolName: "정의여고",
  grade: "고1",
  subject: "공통수학1",
  publisher: "미래엔",
  examCycle: "2026-2-mid",
  examPeriod: "2026-09-28 ~ 2026-10-02",
  mathExamDate: "2026-09-28",
  scope: "도형의 이동 - (집합과 명제 X )"
};

// 클라이언트가 만드는 키 순서 (examPrepCalendarCluster.js)
const requestedRow = {
  ...baseRow,
  mathExamDates: [
    {
      id: "math_exam_prep_2026-2-mid_정의여고_고1_공통수학1_0",
      date: "2026-09-28",
      grade: "고1",
      subject: "수학",
      label: "",
      sourceSchoolEventId: "derived_math_exam_prep_2026-2-mid_정의여고_고1_공통수학1_0"
    }
  ]
};

// jsonb 가 재정렬해서 돌려주는 키 순서 (길이 → 바이트순: label < subject)
const verifiedRow = {
  ...baseRow,
  mathExamDates: [
    {
      id: "math_exam_prep_2026-2-mid_정의여고_고1_공통수학1_0",
      date: "2026-09-28",
      grade: "고1",
      label: "",
      subject: "수학",
      sourceSchoolEventId: "derived_math_exam_prep_2026-2-mid_정의여고_고1_공통수학1_0"
    }
  ]
};

assert.notEqual(
  JSON.stringify(requestedRow.mathExamDates),
  JSON.stringify(verifiedRow.mathExamDates),
  "픽스처 전제: 두 항목은 키 순서만 다르고 값은 같아야 한다"
);

assert.ok(
  areExamPrepRowsPersistedEqual(requestedRow, verifiedRow),
  "키 순서만 다른 math_exam_dates 는 같은 값으로 판정되어야 한다"
);

// 값이 실제로 다르면 여전히 불일치로 잡아야 한다(검증을 무력화하지 않았는지).
const changedRow = {
  ...baseRow,
  mathExamDates: [{ ...verifiedRow.mathExamDates[0], date: "2026-10-05" }]
};
assert.ok(
  !areExamPrepRowsPersistedEqual(requestedRow, changedRow),
  "값이 다르면 여전히 불일치로 판정되어야 한다"
);

// 빈 배열(대다수 행)은 원래도 통과했고 계속 통과해야 한다.
assert.ok(
  areExamPrepRowsPersistedEqual(
    { ...baseRow, mathExamDates: [] },
    { ...baseRow, mathExamDates: [] }
  ),
  "빈 math_exam_dates 는 동일 판정"
);

console.log("exam prep row jsonb verification: 키 순서 무관 비교 통과");
