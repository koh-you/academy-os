import assert from "node:assert/strict";
import {
  deriveClassTemplateScheduleSummary,
  formatClassTemplateScheduleLabel,
  getClassTemplateScheduleRules,
  getClassTemplateTimesForDate,
  getDayKeyForDate,
  normalizeClassTemplateScheduleRules,
  validateClassTemplateScheduleRules
} from "../src/shared/utils/classTemplateSchedule.js";

// 2026-09-17: 반의 요일별 시간을 DB 규칙으로. 원장 화목토 반만 코드 예외로 살던 구조 대체.

assert.equal(getDayKeyForDate("2026-09-17"), "thu");
assert.equal(getDayKeyForDate("2026-09-19"), "sat");
assert.equal(getDayKeyForDate("bad"), "");

// 정규화: 요일 정렬·중복 제거·잘못된 항목 제거
assert.deepEqual(
  normalizeClassTemplateScheduleRules([
    { days: ["thu", "tue", "tue"], startTime: "4:00 PM", endTime: "19:00" },
    { days: [], startTime: "10:00", endTime: "11:00" },
    { days: ["sat"], startTime: "14:00", endTime: "11:00" }
  ]),
  [{ days: ["tue", "thu"], startTime: "04:00", endTime: "19:00" }]
);

// 검증 문장
assert.equal(validateClassTemplateScheduleRules([]), "수업 요일을 하나 이상 선택해 주세요.");
assert.equal(validateClassTemplateScheduleRules([{ days: ["tue"], startTime: "10:00", endTime: "11:00" }]), "");
assert.equal(
  validateClassTemplateScheduleRules([{ days: ["tue"], startTime: "10:00", endTime: "11:00" }, { days: ["sat", "tue"], startTime: "12:00", endTime: "13:00" }]),
  "화요일이 두 시간표에 겹칩니다. 한 요일은 한 시간표에만 넣어 주세요."
);

// 옛 단일 시간 반은 규칙 하나로 본다 — 기존 반은 마이그레이션 없이 그대로.
const legacy = { days: ["mon", "wed", "fri"], startTime: "19:00", endTime: "22:00" };
assert.deepEqual(getClassTemplateScheduleRules(legacy), [{ days: ["mon", "wed", "fri"], startTime: "19:00", endTime: "22:00" }]);
assert.equal(formatClassTemplateScheduleLabel(legacy), "19:00-22:00", "규칙 하나는 예전 표시 그대로");
assert.deepEqual(getClassTemplateTimesForDate(legacy, "2026-09-16"), { startTime: "19:00", endTime: "22:00" });

// 요일별 시간이 다른 반(원장 화목토 앞반과 같은 모양, 이제 DB 에서 온다)
const ttSat = {
  days: ["tue", "thu", "sat"], startTime: "16:00", endTime: "19:00",
  scheduleRules: [{ days: ["tue", "thu"], startTime: "16:00", endTime: "19:00" }, { days: ["sat"], startTime: "10:00", endTime: "13:00" }]
};
assert.deepEqual(getClassTemplateTimesForDate(ttSat, "2026-09-19"), { startTime: "10:00", endTime: "13:00" }, "토요일");
assert.deepEqual(getClassTemplateTimesForDate(ttSat, "2026-09-17"), { startTime: "16:00", endTime: "19:00" }, "목요일");
assert.deepEqual(getClassTemplateTimesForDate(ttSat, "sat"), { startTime: "10:00", endTime: "13:00" }, "요일 키도 받는다");
assert.deepEqual(getClassTemplateTimesForDate(ttSat, "2026-09-20"), { startTime: "16:00", endTime: "19:00" }, "규칙에 없는 요일(일)은 첫 규칙 시간 — 보강 기본값");
assert.equal(formatClassTemplateScheduleLabel(ttSat), "화목 16:00-19:00 / 토 10:00-13:00", "정산 파서가 읽는 문법과 같다");
assert.deepEqual(deriveClassTemplateScheduleSummary(ttSat.scheduleRules), { days: ["tue", "thu", "sat"], startTime: "16:00", endTime: "19:00" });

// 협력 교사 사례: "화목4-7,토11-14"
const assistantClass = { scheduleRules: [{ days: ["sat"], startTime: "11:00", endTime: "14:00" }, { days: ["tue", "thu"], startTime: "16:00", endTime: "19:00" }] };
assert.deepEqual(getClassTemplateTimesForDate(assistantClass, "2026-09-19"), { startTime: "11:00", endTime: "14:00" });
assert.equal(formatClassTemplateScheduleLabel(assistantClass), "토 11:00-14:00 / 화목 16:00-19:00");
assert.deepEqual(deriveClassTemplateScheduleSummary(assistantClass.scheduleRules).days, ["tue", "thu", "sat"]);
assert.equal(deriveClassTemplateScheduleSummary(assistantClass.scheduleRules).startTime, "16:00", "요약 시간은 가장 이른 요일 규칙");

// 요일이 비어 있는 옛 반(안전 미리보기 fixture 등)도 시간 문구는 남는다.
assert.equal(formatClassTemplateScheduleLabel({ startTime: "10:00", endTime: "13:00" }), "10:00-13:00");
assert.deepEqual(getClassTemplateTimesForDate({ startTime: "10:00", endTime: "13:00" }, "2026-09-16"), { startTime: "10:00", endTime: "13:00" });

console.log("class template schedule: per-day rules, legacy fallback, validation, label passed");
