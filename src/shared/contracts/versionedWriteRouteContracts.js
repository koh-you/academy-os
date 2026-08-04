import {
  defineApiPayloadContract,
  defineApiRouteContract
} from "./apiPayloadContract.js";

const verifiedWriteResponseContract = defineApiPayloadContract({
  allowUnknownFields: true,
  fields: {
    auditId: { defaultValue: "", type: "string" },
    source: { allowEmpty: false, required: true, type: "string" },
    verified: { required: true, type: "boolean" }
  },
  name: "verified versioned write response"
});

function defineVersionedWriteRoute({
  domain,
  fields,
  key,
  path,
  sources
}) {
  return defineApiRouteContract({
    domain,
    key,
    method: "POST",
    path,
    request: defineApiPayloadContract({ fields, name: `${key} request` }),
    response: verifiedWriteResponseContract,
    sources
  });
}

export const versionedWriteRouteContracts = Object.freeze([
  defineVersionedWriteRoute({
    domain: "lesson",
    fields: {
      auditId: { defaultValue: "", trim: true, type: "string" },
      makeupTasks: { aliases: ["tasks"], defaultValue: [], type: "array" }
    },
    key: "lessonJournalMakeupTasksSave",
    path: "/api/lesson-journal/makeup-tasks/save",
    sources: ["makeup_tasks"]
  }),
  defineVersionedWriteRoute({
    domain: "supplement",
    fields: {
      auditId: { allowEmpty: false, required: true, trim: true, type: "string" },
      lessonChange: { required: true, type: "object" },
      taskChange: { required: true, type: "object" }
    },
    key: "supplementScheduleSave",
    path: "/api/supplement-schedules/save",
    sources: ["lessons", "makeup_tasks"]
  }),
  defineVersionedWriteRoute({
    domain: "student",
    fields: {
      auditId: { allowEmpty: false, required: true, trim: true, type: "string" },
      lessonChanges: { defaultValue: [], type: "array" },
      studentChanges: { defaultValue: [], type: "array" }
    },
    key: "classRosterSave",
    path: "/api/class-rosters/save",
    sources: ["students", "lessons"]
  }),
  defineVersionedWriteRoute({
    domain: "schoolCalendar",
    fields: {
      auditId: { allowEmpty: false, required: true, trim: true, type: "string" },
      examPrepChanges: { defaultValue: [], type: "array" },
      lessonChanges: { defaultValue: [], type: "array" }
    },
    key: "derivedSchoolCalendarSave",
    path: "/api/school-calendar/derived-save",
    sources: ["exam_prep_rows", "lessons"]
  }),
  defineVersionedWriteRoute({
    domain: "lesson",
    fields: {
      action: { allowEmpty: false, required: true, trim: true, type: "string" },
      auditId: { allowEmpty: false, required: true, trim: true, type: "string" },
      homeworkChanges: { defaultValue: [], type: "array" },
      lessonChange: { defaultValue: {}, type: "object" }
    },
    key: "lessonJournalHistoryAction",
    path: "/api/lesson-journal/history-action",
    sources: ["lessons", "homeworks"]
  }),
  defineVersionedWriteRoute({
    domain: "lesson",
    fields: {
      auditId: { allowEmpty: false, required: true, trim: true, type: "string" },
      homeworkChanges: { defaultValue: [], type: "array" },
      recordChanges: { defaultValue: [], type: "array" }
    },
    key: "lessonJournalRowsSave",
    path: "/api/lesson-journal/rows/save",
    sources: ["lesson_student_records", "homeworks"]
  })
]);

const routeBySignature = new Map(
  versionedWriteRouteContracts.map((contract) => [`${contract.method} ${contract.path}`, contract])
);

export function getVersionedWriteRouteContract(method, path) {
  return routeBySignature.get(`${String(method ?? "").toUpperCase()} ${String(path ?? "")}`) ?? null;
}

export function parseVersionedWriteRequest(method, path, payload) {
  const contract = getVersionedWriteRouteContract(method, path);
  if (!contract) throw new Error(`등록되지 않은 versioned write route입니다: ${method} ${path}`);
  return contract.request.parse(payload);
}

export function parseVersionedWriteResponse(method, path, payload) {
  const contract = getVersionedWriteRouteContract(method, path);
  if (!contract) throw new Error(`등록되지 않은 versioned write route입니다: ${method} ${path}`);
  return contract.response.parse(payload);
}
