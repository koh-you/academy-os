// Pure DB row/domain projections. Keep persistence, Storage, and provider effects outside this module.
function compact(value) {
  return value === undefined || value === "" ? null : value;
}

export function toAppStateRow(key, value) {
  return {
    state_key: key,
    state_value: value ?? null,
    updated_at: new Date().toISOString()
  };
}

export function fromAppStateRow(row) {
  return {
    key: row.state_key,
    value: row.state_value,
    updatedAt: row.updated_at
  };
}

function normalizeMaterialVisibility(value) {
  return value === "both" ? "student_parent" : value || "teacher";
}

function fromMaterialVisibility(value) {
  return value === "student_parent" ? "both" : value || "teacher";
}

export function toResourceMaterialRow(material) {
  return {
    resource_material_id: material.resourceMaterialId ?? material.materialId,
    title: material.title,
    material_type: material.materialType ?? "link",
    subject: compact(material.subject),
    description: compact(material.description),
    url: compact(material.fileUrl ?? material.url),
    content: compact(material.content ?? material.fileName),
    student_ids: material.studentIds ?? [],
    class_template_ids: material.classTemplateIds ?? (material.classTemplateId ? [material.classTemplateId] : []),
    visibility: normalizeMaterialVisibility(material.visibility),
    notify_by_alimtalk: Boolean(material.notifyByAlimtalk),
    created_by: compact(material.createdBy),
    created_at: material.createdAt,
    updated_at: new Date().toISOString()
  };
}

export function fromResourceMaterialRow(row) {
  return {
    materialId: row.resource_material_id,
    resourceMaterialId: row.resource_material_id,
    title: row.title,
    materialType: row.material_type ?? "link",
    subject: row.subject ?? "",
    description: row.description ?? "",
    fileUrl: row.url ?? "",
    url: row.url ?? "",
    fileName: row.content ?? "",
    content: row.content ?? "",
    studentIds: row.student_ids ?? [],
    classTemplateIds: row.class_template_ids ?? [],
    classTemplateId: row.class_template_ids?.[0] ?? "",
    visibility: fromMaterialVisibility(row.visibility),
    notifyByAlimtalk: Boolean(row.notify_by_alimtalk),
    createdBy: row.created_by ?? "",
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
}

export function toNotificationJobRow(job) {
  return {
    notification_job_id: job.notificationJobId ?? job.notificationLogId,
    notification_type: job.notificationType ?? (job.target === "student" ? "student_comment" : "parent_comment"),
    student_id: compact(job.studentId),
    lesson_id: compact(job.lessonId),
    lesson_student_record_id: compact(job.lessonStudentRecordId),
    target: job.target ?? "parent",
    recipient: compact(job.recipient),
    scheduled_at: compact(job.scheduledAt ?? job.scheduledDate),
    payload: job.payload ?? {},
    preview_body: compact(job.previewBody ?? job.message),
    status: job.status ?? "draft",
    provider: compact(job.provider),
    provider_message_id: compact(job.providerMessageId),
    result: job.result ?? null,
    error: compact(job.error),
    updated_at: new Date().toISOString()
  };
}

export function fromNotificationJobRow(row) {
  return {
    notificationJobId: row.notification_job_id,
    notificationType: row.notification_type,
    studentId: row.student_id ?? "",
    lessonId: row.lesson_id ?? "",
    lessonStudentRecordId: row.lesson_student_record_id ?? "",
    target: row.target,
    recipient: row.recipient ?? "",
    scheduledAt: row.scheduled_at ?? "",
    payload: row.payload ?? {},
    previewBody: row.preview_body ?? "",
    status: row.status,
    provider: row.provider ?? "",
    providerMessageId: row.provider_message_id ?? "",
    result: row.result,
    error: row.error ?? "",
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
}
