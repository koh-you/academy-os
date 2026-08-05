import assert from "node:assert/strict";
import {
  fromAppStateRow,
  fromNotificationJobRow,
  fromResourceMaterialRow,
  toAppStateRow,
  toNotificationJobRow,
  toResourceMaterialRow
} from "../src/shared/persistence/platformSourceRowMappers.js";

const isoPattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

const appStateValue = { nested: { enabled: true }, rows: [1, 2] };
const appStateRow = toAppStateRow("shared-key", appStateValue);
assert.equal(appStateRow.state_key, "shared-key");
assert.equal(appStateRow.state_value, appStateValue);
assert.match(appStateRow.updated_at, isoPattern);
assert.equal(toAppStateRow("null-key", undefined).state_value, null);
const mappedAppState = fromAppStateRow({ ...appStateRow, unknown_db_column: "drop-me" });
assert.equal(mappedAppState.key, "shared-key");
assert.equal(mappedAppState.value, appStateValue);
assert.equal(mappedAppState.unknown_db_column, undefined);

const materialRow = toResourceMaterialRow({
  resourceMaterialId: "material-1",
  title: "수업 자료",
  materialType: "file",
  subject: "수학",
  description: "설명",
  fileUrl: "https://example.test/file",
  fileName: "자료.pdf",
  studentIds: ["student-1"],
  classTemplateIds: ["class-1", "class-2"],
  visibility: "both",
  notifyByAlimtalk: true,
  createdBy: "teacher-1",
  createdAt: "2026-08-05T00:00:00.000Z"
});
assert.equal(materialRow.resource_material_id, "material-1");
assert.equal(materialRow.url, "https://example.test/file");
assert.equal(materialRow.content, "자료.pdf");
assert.deepEqual(materialRow.class_template_ids, ["class-1", "class-2"]);
assert.equal(materialRow.visibility, "student_parent");
assert.equal(materialRow.notify_by_alimtalk, true);
assert.match(materialRow.updated_at, isoPattern);

const aliasMaterialRow = toResourceMaterialRow({
  materialId: "material-2",
  title: "링크",
  url: "https://example.test/link",
  content: "본문",
  classTemplateId: "class-3"
});
assert.equal(aliasMaterialRow.resource_material_id, "material-2");
assert.deepEqual(aliasMaterialRow.class_template_ids, ["class-3"]);
assert.equal(aliasMaterialRow.visibility, "teacher");

const mappedMaterial = fromResourceMaterialRow({
  ...materialRow,
  unknown_db_column: "drop-me"
});
assert.equal(mappedMaterial.materialId, "material-1");
assert.equal(mappedMaterial.resourceMaterialId, "material-1");
assert.equal(mappedMaterial.fileUrl, "https://example.test/file");
assert.equal(mappedMaterial.classTemplateId, "class-1");
assert.equal(mappedMaterial.visibility, "both");
assert.equal(mappedMaterial.unknown_db_column, undefined);
assert.equal(fromResourceMaterialRow({ resource_material_id: "m", title: "자료" }).visibility, "teacher");

const notificationRow = toNotificationJobRow({
  notificationJobId: "job-1",
  notificationType: "schedule_reminder",
  studentId: "student-1",
  lessonId: "lesson-1",
  lessonStudentRecordId: "record-1",
  target: "student",
  recipient: "01000000000",
  scheduledAt: "2026-08-05T09:00:00.000Z",
  payload: { message: "안내" },
  previewBody: "미리보기",
  status: "scheduled",
  provider: "solapi",
  providerMessageId: "provider-1",
  result: { accepted: true },
  error: ""
});
assert.equal(notificationRow.notification_job_id, "job-1");
assert.equal(notificationRow.notification_type, "schedule_reminder");
assert.equal(notificationRow.target, "student");
assert.equal(notificationRow.error, null);
assert.deepEqual(notificationRow.result, { accepted: true });
assert.match(notificationRow.updated_at, isoPattern);

const studentDefaultJob = toNotificationJobRow({
  notificationLogId: "job-2",
  target: "student",
  scheduledDate: "2026-08-06T09:00:00.000Z",
  message: "학생 안내"
});
assert.equal(studentDefaultJob.notification_job_id, "job-2");
assert.equal(studentDefaultJob.notification_type, "student_comment");
assert.equal(studentDefaultJob.scheduled_at, "2026-08-06T09:00:00.000Z");
assert.equal(studentDefaultJob.preview_body, "학생 안내");
assert.equal(studentDefaultJob.status, "draft");
const parentDefaultJob = toNotificationJobRow({ notificationJobId: "job-3" });
assert.equal(parentDefaultJob.notification_type, "parent_comment");
assert.equal(parentDefaultJob.target, "parent");

const mappedNotification = fromNotificationJobRow({
  ...notificationRow,
  created_at: "2026-08-05T00:00:00.000Z",
  unknown_db_column: "drop-me"
});
assert.equal(mappedNotification.notificationJobId, "job-1");
assert.equal(mappedNotification.providerMessageId, "provider-1");
assert.deepEqual(mappedNotification.payload, { message: "안내" });
assert.equal(mappedNotification.unknown_db_column, undefined);

console.log("platform source row mappers passed · app state/resource material/notification job 6 mappers");
