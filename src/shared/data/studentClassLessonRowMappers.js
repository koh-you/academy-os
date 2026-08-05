export function compact(value) {
  return value === undefined || value === "" ? null : value;
}

export function normalizeClockTime(value) {
  const text = String(value ?? "").trim();
  const match = text.match(/(\d{1,2}):(\d{2})/);
  if (!match) return "";
  const hour = Math.max(0, Math.min(23, Number(match[1]) || 0));
  const minute = Math.max(0, Math.min(59, Number(match[2]) || 0));
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

export function normalizeSpecialLectureStudentSchedules(value) {
  const source = Array.isArray(value) ? value : [];
  return source
    .map((schedule) => ({
      studentId: compact(schedule?.studentId ?? schedule?.student_id),
      startTime: compact(normalizeClockTime(schedule?.startTime ?? schedule?.start_time)),
      endTime: compact(normalizeClockTime(schedule?.endTime ?? schedule?.end_time)),
      scheduleType: schedule?.scheduleType === "adjusted" || schedule?.schedule_type === "adjusted" ? "adjusted" : "official",
      overrideReason: compact(schedule?.overrideReason ?? schedule?.override_reason)
    }))
    .filter((schedule) => schedule.studentId && schedule.startTime && schedule.endTime);
}

export function toStudentRow(student, { includeWithdrawalDetails = true, includeWithdrawnAt = true } = {}) {
  const row = {
    student_id: student.studentId,
    name: student.name,
    login_id: student.loginId,
    pin: student.pin ?? "1234",
    status: student.status ?? "active",
    school_name: compact(student.schoolName),
    grade: compact(student.grade),
    birth_year: student.birthYear ? Number(student.birthYear) : null,
    student_phone: compact(student.studentPhone),
    parent_phone: compact(student.parentPhone),
    default_class_template_id: compact(student.defaultClassTemplateId),
    textbook: compact(student.textbook),
    special_note: compact(student.specialNote),
    schedule_override: compact(student.scheduleOverride),
    updated_at: new Date().toISOString()
  };

  if (includeWithdrawnAt) {
    row.withdrawn_at = compact(student.withdrawnAt);
  }

  if (includeWithdrawalDetails) {
    row.withdrawal_reason = compact(student.withdrawalReason);
    row.withdrawal_comment = compact(student.withdrawalComment);
  }

  return row;
}

export function fromStudentRow(row) {
  return {
    studentId: row.student_id,
    name: row.name,
    loginId: row.login_id,
    pin: row.pin,
    status: row.status,
    schoolName: row.school_name ?? "",
    grade: row.grade ?? "",
    birthYear: row.birth_year ?? "",
    studentPhone: row.student_phone ?? "",
    parentPhone: row.parent_phone ?? "",
    defaultClassTemplateId: row.default_class_template_id ?? "",
    textbook: row.textbook ?? "",
    specialNote: row.special_note ?? "",
    scheduleOverride: row.schedule_override ?? "",
    withdrawalComment: row.withdrawal_comment ?? "",
    withdrawalReason: row.withdrawal_reason ?? "",
    withdrawnAt: row.withdrawn_at ?? "",
    updatedAt: row.updated_at ?? ""
  };
}

export function toClassTemplateRow(classTemplate) {
  return {
    class_template_id: classTemplate.classTemplateId,
    name: classTemplate.name,
    days: classTemplate.days ?? [],
    start_time: compact(normalizeClockTime(classTemplate.startTime)),
    end_time: compact(normalizeClockTime(classTemplate.endTime)),
    color: classTemplate.color ?? "#17213a",
    status: classTemplate.status ?? "active",
    updated_at: new Date().toISOString()
  };
}

export function fromClassTemplateRow(row) {
  return {
    classTemplateId: row.class_template_id,
    name: row.name,
    days: row.days ?? [],
    startTime: normalizeClockTime(row.start_time),
    endTime: normalizeClockTime(row.end_time),
    color: row.color,
    status: row.status
  };
}

export function toLessonRow(lesson, { includeScheduleMetadata = true } = {}) {
  const row = {
    lesson_id: lesson.lessonId,
    class_template_id: compact(lesson.classTemplateId),
    class_name: lesson.className,
    lesson_date: lesson.date,
    start_time: compact(normalizeClockTime(lesson.startTime)),
    end_time: compact(normalizeClockTime(lesson.endTime)),
    color: lesson.color ?? "#17213a",
    student_ids: lesson.studentIds ?? [],
    status: lesson.status ?? "scheduled",
    updated_at: new Date().toISOString()
  };
  if (includeScheduleMetadata) {
    row.lesson_type = compact(lesson.lessonType);
    row.lesson_topic = compact(lesson.lessonTopic);
    row.source_makeup_task_id = compact(lesson.sourceMakeupTaskId);
    row.source_school_event_id = compact(lesson.sourceSchoolEventId);
    row.source_label = compact(lesson.sourceLabel);
    row.lesson_track_id = compact(lesson.lessonTrackId);
    row.lesson_track_type = compact(lesson.lessonTrackType);
    row.special_lecture_guide_id = compact(lesson.specialLectureGuideId);
    row.special_lecture_session_id = compact(lesson.specialLectureSessionId);
    row.special_lecture_session_index = lesson.specialLectureSessionIndex === undefined || lesson.specialLectureSessionIndex === null || lesson.specialLectureSessionIndex === ""
      ? null
      : Number(lesson.specialLectureSessionIndex);
    row.special_lecture_student_schedules = normalizeSpecialLectureStudentSchedules(
      lesson.specialLectureStudentSchedules
    );
  }
  return row;
}

export function fromLessonRow(row) {
  return {
    lessonId: row.lesson_id,
    classTemplateId: row.class_template_id ?? "",
    className: row.class_name,
    date: row.lesson_date,
    startTime: normalizeClockTime(row.start_time),
    endTime: normalizeClockTime(row.end_time),
    color: row.color,
    studentIds: row.student_ids ?? [],
    lessonType: row.lesson_type ?? "",
    lessonTopic: row.lesson_topic ?? "",
    sourceMakeupTaskId: row.source_makeup_task_id ?? "",
    sourceSchoolEventId: row.source_school_event_id ?? "",
    sourceLabel: row.source_label ?? "",
    lessonTrackId: row.lesson_track_id ?? "",
    lessonTrackType: row.lesson_track_type ?? "",
    specialLectureGuideId: row.special_lecture_guide_id ?? "",
    specialLectureSessionId: row.special_lecture_session_id ?? "",
    specialLectureSessionIndex: row.special_lecture_session_index ?? null,
    ...(row.special_lecture_student_schedules !== undefined
      ? { specialLectureStudentSchedules: normalizeSpecialLectureStudentSchedules(row.special_lecture_student_schedules) }
      : {}),
    status: row.status,
    updatedAt: row.updated_at ?? ""
  };
}
