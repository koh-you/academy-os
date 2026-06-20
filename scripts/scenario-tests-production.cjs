const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const appPath = path.join(root, "src", "app", "App.jsx");
const cssPath = path.join(root, "src", "app", "App.css");
const notificationRoutePath = path.join(root, "api", "routes", "notifications.js");
const coreDataRoutePath = path.join(root, "api", "routes", "coreData.js");
const sampleDataPath = path.join(root, "src", "shared", "data", "sampleData.js");
const schemaPath = path.join(root, "supabase", "schema.sql");
const envExamplePath = path.join(root, ".env.example");

const app = fs.readFileSync(appPath, "utf8");
const css = fs.readFileSync(cssPath, "utf8");
const notificationRoute = fs.readFileSync(notificationRoutePath, "utf8");
const coreDataRoute = fs.readFileSync(coreDataRoutePath, "utf8");
const sampleDataSource = fs.readFileSync(sampleDataPath, "utf8");
const schema = fs.existsSync(schemaPath) ? fs.readFileSync(schemaPath, "utf8") : "";
const envExample = fs.readFileSync(envExamplePath, "utf8");

const checks = [];

function check(name, condition, detail = "") {
  checks.push({ name, ok: Boolean(condition), detail });
}

function hasAll(source, patterns) {
  return patterns.every((pattern) => source.includes(pattern));
}

check("01 login form does not expose default credentials", !app.includes("setLoginId(nextRole)") && app.includes('const [loginId, setLoginId] = useState("");'));
check("02 login form does not include temporary lockout", !hasAll(app, ["loginAttempts", "lockedUntil"]) && !css.includes("loginSecurityNotice"));
check("03 role switching clears credentials", hasAll(app, ["function selectRole(nextRole)", 'setLoginId("");', 'setPassword("");', 'setError("");']));
check("04 attendance-only route exists", hasAll(app, ["isAttendanceOnlyRoute", 'window.location.pathname === "/attendance"', "AttendanceKiosk"]));
check("05 tablet attendance URL setting exists", hasAll(app, ["attendanceUrl", "lateGraceMinutes"]));
check("06 attendance late grace logic exists", hasAll(app, ["lateGraceMinutes", "calculateLateMinutes"]));
check("07 attendance alimtalk API is connected", hasAll(app, ["/api/notifications/attendance-alimtalk", "handleSendAttendanceAlimtalk"]));
check("08 parent alimtalk API is connected", hasAll(app, ["/api/notifications/comment-alimtalk", "parentPhone"]));
check("09 student alimtalk branch exists", hasAll(app, ['target: testType === "student"', "studentPhone"]));
check("10 alimtalk dry-run safety exists", hasAll(app, ["forceDryRun", "dryRun", "allowRealRecipients"]));
check("11 alimtalk preview builder exists", hasAll(app, ["buildNotificationTemplatePreview", "templatePreviewText"]));
check("12 alimtalk test result details exist", hasAll(app, ["templateResultCard", "templateEnvName", "variables"]));
check("13 assignment status maps to parent-safe wording", hasAll(app, ["assignmentStatusParentMessages", "getAssignmentStatusParentMessage"]));
check("14 lesson material field exists", hasAll(app, ["lessonMaterial", "getLessonMaterial", "onChangeRecord"]));
check("15 lesson content field exists", hasAll(app, ["lessonContent", "getLessonContent", "onChangeRecord"]));
check("16 incomplete assignment list is normalized", notificationRoute.includes("normalizeList") && notificationRoute.includes("incomplete"));
check("17 retest and supplement schedule variables exist", hasAll(notificationRoute, ["retestSchedule", "supplementSchedule"]));
check("18 Solapi template env vars exist", hasAll(envExample, ["SOLAPI_ATTENDANCE_TEMPLATE_ID", "SOLAPI_DAILY_REPORT_TEMPLATE_ID", "SOLAPI_STUDENT_COMMENT_TEMPLATE_ID"]));
check("19 Supabase lesson record columns exist", hasAll(schema, ["lesson_material", "lesson_content", "assignment_status", "preparation_memo", "prep_student_notice", "prep_parent_visible"]));
check("20 notification management screen exists", hasAll(app, ["NotificationCenter", "templatePreviewText", "handleDispatchDue", "handleReadinessCheck"]));
check("21 supplement schedule creates calendar lesson", hasAll(app, ["handleScheduleSupplementTask", "createSupplementLessonId", "linkedLessonId", "supplementProgressBadge"]));
check("22 student portal is tablet first", hasAll(app, ["studentPortalTabletFirst", "teacherPreviewPortal"]) && css.includes(".studentPortalTabletFirst .metricGrid"));
check("23 parent portal is mobile first", hasAll(app, ["parentPortalMobileFirst", "parentPortal"]) && css.includes(".parentPortalMobileFirst .metricGrid"));
check("24 responsive layout principles doc exists", fs.existsSync(path.join(root, "docs", "responsive-layout-principles.md")));
check("25 ai tools menu replaces ai variant label", hasAll(app, ['id: "aiVariants"', "AIVariantProblemCenter"]));
check("26 ai variant draft shortcut is removed", !app.includes("variantHeroActions") && app.includes("handleGenerateVariant"));
check("27 ai variant workspace is two column", css.includes(".aiVariantWorkspace") && css.includes(".aiVariantResultPanel"));
check("28 ai variant hwpx export modal exists", hasAll(app, ["handleDownloadHwpx", ".hwpx", "hwpxExportModal"]));
check("29 ai variant selected export flow exists", hasAll(app, ["selectedVariantIds", "selectedVariantCount", "handleToggleVariantSelection"]));
check("30 homework status metric cards are clickable", hasAll(app, ["activeMetric", "handleMetricClick", "metricButton"]));
check("31 supplement task progress is visible", hasAll(app, ["getSupplementTaskProgress", "needsLessonResync", "supplementProgressBadge"]));
check("32 resource upload and grouped student picker exist", hasAll(app, ["resourceDropZone", "resourceStudentGroups", "selectAllResourceStudents", "clearAllResourceStudents"]));
check("33 school calendar date modal and color editor exist", hasAll(app, ["SchoolDateScheduleModal", "calendarColorPicker", "openDateModal", "eventColorOptions"]));
check("34 exam management self-check labels are wired", hasAll(app, ['id: "examPrep"', "Self-check", "tallySubmissionCard"]));
check("35 exam analysis uses clickable pipeline and source drop zone", hasAll(app, ["pipelineStep", 'onClick={() => update("pipelineStage", stage)}', "sourceDropZone", "handleSourceFileDrop"]));
check("36 ai setting badges are hidden from work screens", !hasAll(app, ["aiVariantHeroActions", "aiModelSelectMock"]) && !app.includes("<h3>AI 모델</h3>"));

check("37 exam publisher syncs across same term", hasAll(app, ["examCycleTermKey", "examPublisherLinkKey", "findLinkedPublisher", "syncPublisherAcrossExamTerm"]));

check("38 school calendar derives exam period ranges", hasAll(app, ["parseDateRangeText", "buildExamCalendarEvents", "derived_period_", "isDateWithinEvent"]));
check("39 school calendar avoids legacy exam duplicates", hasAll(app, ["manualEvents", 'startsWith("event_exam_")']));
check("40 live Solapi test send is gated to test recipient", hasAll(app, ["forceTestRecipient", "liveTestSendEnabled"]) && notificationRoute.includes("ALIMTALK_ALLOW_LIVE_TEST_SEND"));
check("41 comment alimtalk preview uses template format", hasAll(app, ["commentTemplatePreview", "#{리포트본문}:", "#{코멘트}:"]) && css.includes(".commentTemplatePreview"));

check("42 exam date range uses date inputs", hasAll(app, ["examDateRangeInputs", "updateDateRangeField", "getDateRangeField"]));
check("43 school calendar can edit derived exam dates", hasAll(app, ["onUpdateExamPrepRow", "updateAcademicEvent", "mathExamDates"]));
check("44 exam period is rendered as compact calendar bar", hasAll(app, ["periodBar", "isPeriodBar"]) && css.includes(".schoolEventPill.periodBar"));
check("45 math exam calendar supports index tabs", hasAll(app, ["normalizeMathExamEntries", "mathExamTab", "mathExamEntryChip", "mathExamEntryEditor"]) && css.includes(".schoolEventPill.mathExamTab"));
check("46 school calendar syncs manual exam inputs to exam prep", hasAll(app, ["syncSchoolCalendarEventToExamPrepRows", "getSchoolCalendarTargetRows", "upsertMathExamEntryFromSchoolEvent", "schoolCalendarGradeOptions"]));
check("47 school calendar supports bundled math exam inputs", hasAll(app, ["mathExamItems", "addMathExamItem", "removeMathExamItem", "시험일정 묶음 등록"]) && css.includes(".mathExamItemRow"));
check("48 school calendar creates pre-exam lessons", hasAll(app, ["createPreExamLessonFromSchoolEvent", "onSyncPreExamLesson", "sourceSchoolEventId", "preExam"]));
check("49 lesson journal filters by lesson type", hasAll(app, ["lessonTypeFilterBar", "lessonTypeFilterOptions", "visibleLessons", "preExamLessonPill"]) && css.includes(".lessonTypeFilterBar"));
check("50 school calendar uses fixed grade and subject options", hasAll(app, ["schoolCalendarGradeOptions", "중3", "고3", "schoolCalendarMathSubjectOptions", "확률과통계", "기하"]));
check("51 supplement center includes teacher-marked incomplete homework", hasAll(app, ["isHomeworkMakeupCandidate", '["missing", "partial"].includes(homework.teacherStatus)', "미완료 숙제"]));
check("52 school calendar registration uses modal-first type input", hasAll(app, ["schoolEventFormModal", "inputTypeField", "입력 유형", "setIsFormModalOpen"]) && css.includes(".modalCard.schoolEventFormModal"));
check("53 lesson journal assignment status syncs homework makeup source", hasAll(app, ["syncPreviousHomeworkStatusFromAssignment", "getHomeworkStatusFromAssignmentStatus", 'teacherStatus: "missing"', 'teacherStatus: "partial"', 'dueDate: existing.dueDate || lesson.date']));

check("54 comment composer uses final draft editor with source toggle", hasAll(app, ["buildCommentSourceText", "isSourceOpen", "최종 알림톡 문구", "원본 메모 보기", "commentSourcePreview"]) && css.includes(".commentSourceToggle") && !css.includes(".editableCommentPreview"));
check("55 supplement center filters homework makeup by checked assignment result", hasAll(app, ["makeupHomeworks", "isHomeworkMakeupCandidate(homework, records, lessons)", "isAssignmentStatusHomeworkMakeupCandidate", "getHomeworkMakeupReason", "getHomeworkLesson", 'homework.homeworkType !== "previous"']) && !app.includes("const overdueHomeworks = homeworks.filter"));
check("56 supplement methods match task type", hasAll(app, ['supplementMethod: "stay_after"', 'supplementMethod: "onsite_makeup"', 'label: "남아서 하고 가기"', 'label: "등원보충"', 'label: "다음시간까지"', 'label: "현장보강"', 'label: "녹강보강"']));
check("57 lesson cancel keeps undo bin and expires after retention", hasAll(app, ["deletedLessonBundles", "lessonDeleteRetentionMs", "lessonCancelRequestsRef", "7 * 24 * 60 * 60 * 1000", "filterHomeworksForLessons", "pruneExpiredLessonDeletes", 'status: "canceled"', 'postJson("/api/lessons", { lesson: canceledLesson })']) && hasAll(coreDataRoute + fs.readFileSync(path.join(root, "api", "server.js"), "utf8"), ["deleteLesson", "deleteLessonsBefore", "deleteExpiredCanceledLessons", "updated_at=lt."]));
check("58 school calendar date modal supports create and linked math exam edits", hasAll(app, ["openEventForm", "이 날짜에 일정 등록", "canEditDerivedSubject", 'field === "examSubject"', "schoolMonthAddButton"]) && css.includes(".schoolDateModalToolbar") && css.includes(".schoolMonthAddButton"));
check("59 lesson prep memo modal saves directly", hasAll(app, ["prepMemoSaveBar", "onSaveRecord(recordId, lesson, student", "draftMemo", "preparationMemo"]) && css.includes(".prepMemoSaveBar"));
check("60 lesson progress and prep memo persist through core data", hasAll(coreDataRoute, ["progress_note: compact(record.lessonProgress ?? record.progress)", "preparation_memo: compact(record.preparationMemo)", "lessonProgress: row.progress_note", "Supabase lesson_student_records 확장 컬럼 migration"]));

check("61 moved Sunday makeup blocks derive calendar lessons", hasAll(app, ["createExamSundayMakeupBlockLessons", "generatedLessonControls", "sundayMakeupBlocks", "calendarLessons"]));
check("61b Sunday makeup blocks derive only when date changes", hasAll(app, ["const blockDate = block.date || lesson.date", "return blockDate !== lesson.date"]) && !app.includes("blockStartTime !== (lesson.startTime"));
check("62 moved Sunday makeup blocks keep original lesson linkage", hasAll(app, ["isVirtualSundayMakeupBlock: true", "sourceLessonId: lesson.lessonId", "virtualBlockId: block.blockId", "virtualBlockLabel: block.label"]));
check("63 moved Sunday makeup blocks open focused source modal", hasAll(app, ["selectedSourceLesson", "displayLesson={selectedLesson}", "focusBlockId={selectedLesson?.virtualBlockId}", "getGeneratedLessonKey(selectedSourceLesson)"]));
check("64 moved Sunday makeup blocks are visually distinct", hasAll(app, ["blockMoved", "lesson.isVirtualSundayMakeupBlock", "lesson.virtualBlockMemo"]) && hasAll(css, [".lessonPill.sundayMakeupLessonPill.blockMoved", ".examSundayBlockItem.focused"]));
check("64b generated special lessons avoid class template FK ids", !hasAll(app, ['classTemplateId: "pre_exam"', 'classTemplateId: "exam_sunday_makeup"']) && hasAll(app, ['lessonType: "preExam"', 'lessonType: "examSundayMakeup"']));
check("64c generated lesson preview lists all candidates in scroll area", !app.includes("generatedLessonPlan.slice(0, 8)") && hasAll(css, [".generatedLessonList", "max-height: 420px", "overflow: auto"]));
check("64d Sunday makeup includes Sundays inside exam period", hasAll(app, ["inPeriodSundays", "cursor <= end", "cursor.getDay() === 0", "[...new Set([...prepSundays, ...inPeriodSundays])].sort()"]));
check("64e generated lessons use current exam cycle rows only", hasAll(app, ["generatedLessonPlanRows", "(row.examCycle || currentExamCycle) === currentExamCycle", "buildGeneratedLessonPlan({ rows: generatedLessonPlanRows"]));
check("64f generated lesson save failures are visible", hasAll(app, ["자동 수업 저장 실패", "window.alert", 'postJson("/api/lessons/bulk", { lessons: lessonsToSave })']));
check("65 final exam prep does not inherit midterm seed data", hasAll(app, ["normalizeExamPrepRows", "inferExamCycleFromPrepId", "getDefaultExamCycleForDate"]) && hasAll(coreDataRoute, ["inferExamCycleFromPrepId", "getDefaultExamCycleForDate", "exam_cycle: examCycle"]) && hasAll(sampleDataSource, ['examPrepId: "exam_prep_sanggye_2026_mid_1"', 'examCycle: "2026-1-mid"']));
check("66 exam cycle defaults follow seasonal exam windows", hasAll(app, ['if (month <= 5) return `${year}-1-mid`', 'if (month <= 7) return `${year}-1-final`', 'if (month <= 10) return `${year}-2-mid`', 'return `${year}-2-final`']) && hasAll(coreDataRoute, ['if (month <= 5) return `${year}-1-mid`', 'if (month <= 7) return `${year}-1-final`', 'if (month <= 10) return `${year}-2-mid`', 'return `${year}-2-final`']));
check("67 exam prep dedupes display and groups calendar detail", hasAll(app, ["dedupeExamPrepRowsForDisplay", "getExamPrepLogicalKey", "chooseRepresentativeExamPrepRow", "formatCalendarSummaryLabel", "schoolDateGroup"]) && hasAll(css, [".schoolDateGroup", ".schoolDateGroupHeader"]));
check("68 duplicate exam prep cleanup API is guarded", hasAll(coreDataRoute, ["deleteDuplicateExamPrepRows", "findDuplicateExamPrepRows", "deleteExamPrepRow"]) && hasAll(fs.readFileSync(path.join(root, "api", "server.js"), "utf8"), ['request.method === "DELETE"', 'requestUrl.pathname === "/api/exam-prep-rows"', 'confirm") === "true"']));
check("69 exam prep row delete is wired to guarded API", hasAll(app, ["deleteExamPrepRowRequest", "handleDeleteExamPrepRow", "onDeleteRow={handleDeleteExamPrepRow}", "시험정보 삭제 실패", "dangerSoftButton compact"]) && hasAll(fs.readFileSync(path.join(root, "api", "server.js"), "utf8"), ['requestUrl.pathname === "/api/exam-prep-rows"', 'confirm") === "true"']));
check("70 exam prep table is compact but edit grid has room for all cycles", hasAll(css, ["grid-template-columns: 96px 132px 64px 92px 112px 168px 250px 280px 190px 180px 112px", "min-width: 1720px", ".examPrepRow.editing", "grid-template-columns: 140px 240px 90px 136px 156px 236px 540px 320px 270px 220px 132px", "min-width: 2480px", "grid-template-columns: 158px 74px 96px minmax(130px, 1fr) 58px"]));
check("71 exam prep delete reconciles persisted Sunday makeup lessons", hasAll(app, ["reconcilePersistedSundayMakeupLessons", "buildSundayMakeupCandidates(nextExamPrepRows)", "existingSundayLessons", "lessonIdsToDelete", 'postJson("/api/lessons/bulk", { lessons: lessonsToSave })', 'fetch(apiUrl(`/api/lessons?id=${encodeURIComponent(lessonId)}`), { method: "DELETE" })']));
check("72 Sunday makeup block time editors have enough width", hasAll(css, ["grid-template-columns: 280px minmax(0, 1fr) auto", "grid-template-columns: repeat(2, minmax(132px, 1fr))", '.examSundayBlockTimeFields input[type="time"]', "min-height: 58px"]));
check("73 Sunday makeup blocks can be removed inside lesson", hasAll(app, ["function deleteBlock(blockId)", "마지막 블록은 삭제할 수 없습니다", "current.filter((block) => block.blockId !== blockId)", "블록 삭제", "getExamSundayMakeupVisibleSourceLabel"]) && hasAll(css, [".examSundayBlockActions", ".examSundayBlockActions > span"]));
check("74 Sunday makeup source pill shows only blocks that remain on source date", hasAll(app, ["shouldDisplayExamSundayMakeupSourceLesson", "getExamSundayMakeupVisibleSourceLabel", "(block.date || lesson.date) === lesson.date", "!shouldDisplayExamSundayMakeupSourceLesson(lesson, generatedLessonControls)"]));

const failed = checks.filter((item) => !item.ok);
console.log(JSON.stringify({ ok: failed.length === 0, total: checks.length, failed, checks }, null, 2));

if (failed.length) {
  process.exitCode = 1;
}
