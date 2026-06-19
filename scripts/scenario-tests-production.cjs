const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const appPath = path.join(root, "src", "app", "App.jsx");
const cssPath = path.join(root, "src", "app", "App.css");
const notificationRoutePath = path.join(root, "api", "routes", "notifications.js");
const schemaPath = path.join(root, "supabase", "schema.sql");
const envExamplePath = path.join(root, ".env.example");

const app = fs.readFileSync(appPath, "utf8");
const css = fs.readFileSync(cssPath, "utf8");
const notificationRoute = fs.readFileSync(notificationRoutePath, "utf8");
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
check("19 Supabase lesson record columns exist", hasAll(schema, ["lesson_material", "lesson_content", "assignment_status"]));
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
check("46 school calendar syncs manual exam inputs to exam prep", hasAll(app, ["syncSchoolCalendarEventToExamPrepRows", "getSchoolCalendarTargetRows", "upsertMathExamEntryFromSchoolEvent", "grade: rows[0]?.grade"]));
check("47 school calendar supports bundled math exam inputs", hasAll(app, ["mathExamItems", "addMathExamItem", "removeMathExamItem", "시험일정 묶음 등록"]) && css.includes(".mathExamItemRow"));
check("48 school calendar creates pre-exam lessons", hasAll(app, ["createPreExamLessonFromSchoolEvent", "onSyncPreExamLesson", "sourceSchoolEventId", "preExam"]));
check("49 lesson journal filters by lesson type", hasAll(app, ["lessonTypeFilterBar", "lessonTypeFilterOptions", "visibleLessons", "preExamLessonPill"]) && css.includes(".lessonTypeFilterBar"));

const failed = checks.filter((item) => !item.ok);
console.log(JSON.stringify({ ok: failed.length === 0, total: checks.length, failed, checks }, null, 2));

if (failed.length) {
  process.exitCode = 1;
}
