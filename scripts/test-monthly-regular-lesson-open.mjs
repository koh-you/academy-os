import assert from "node:assert/strict";
import { buildMonthlyRegularLessonOpenPlan } from "../src/domains/lessons/monthlyRegularLessonOpen.js";

const templates = [
  { classTemplateId: "mwf", name: "월수금반", days: ["mon", "wed", "fri"], startTime: "19:00", endTime: "22:00" },
  { classTemplateId: "tts", name: "화목토반", days: ["tue", "thu", "sat"], startTime: "16:00", endTime: "19:00", saturdayStartTime: "10:00", saturdayEndTime: "13:00" }
];
const students = [{ studentId: "active", status: "active" }, { studentId: "withdrawn", status: "paused", withdrawnAt: "2026-07-27" }];
const lessons = [
  { lessonId: "jul-mwf", lessonType: "class", classTemplateId: "mwf", className: "월수금반", date: "2026-07-31", dayOfWeek: "fri", startTime: "19:00", endTime: "22:00", studentIds: ["active", "withdrawn"] },
  { lessonId: "jul-tt", lessonType: "class", classTemplateId: "tts", className: "화목토반", date: "2026-07-30", dayOfWeek: "thu", startTime: "16:00", endTime: "19:00", studentIds: ["active"] },
  { lessonId: "jul-sat", lessonType: "class", classTemplateId: "tts", className: "화목토반", date: "2026-07-25", dayOfWeek: "sat", startTime: "10:00", endTime: "13:00", studentIds: ["active"] },
  { lessonId: "aug-existing", lessonType: "class", classTemplateId: "mwf", className: "월수금반", date: "2026-08-03", dayOfWeek: "mon", startTime: "19:00", endTime: "22:00", studentIds: ["active"] }
];

const previousTimeZone = process.env.TZ;
process.env.TZ = "UTC";
const plan = buildMonthlyRegularLessonOpenPlan({ lessons, monthKey: "2026-08", students, templates });
if (previousTimeZone === undefined) delete process.env.TZ;
else process.env.TZ = previousTimeZone;
assert.deepEqual(plan.errors, []);
assert.equal(plan.rows.length, 2);
assert.equal(plan.rows.find((row) => row.classTemplateId === "mwf").existingCount, 1);
assert.ok(!plan.lessonsToCreate.some((lesson) => lesson.date === "2026-08-03" && lesson.classTemplateId === "mwf"));
assert.ok(plan.lessonsToCreate.every((lesson) => lesson.studentIds.length === 1 && lesson.studentIds[0] === "active"));
const saturday = plan.lessonsToCreate.find((lesson) => lesson.classTemplateId === "tts" && lesson.dayOfWeek === "sat");
assert.equal(saturday.startTime, "10:00");
assert.equal(saturday.endTime, "13:00");
assert.ok(plan.lessonsToCreate.every((lesson) => lesson.lessonType === "class" && !Object.hasOwn(lesson, "lessonProgress") && !Object.hasOwn(lesson, "notificationJobs")));
console.log(`monthly regular lesson open fixture passed: ${plan.lessonsToCreate.length} new lessons`);
