const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const appPath = path.join(root, "src", "app", "App.jsx");
const cssPath = path.join(root, "src", "app", "App.css");
const notificationRoutePath = path.join(root, "api", "routes", "notifications.js");
const coreDataRoutePath = path.join(root, "api", "routes", "coreData.js");
const serverPath = path.join(root, "api", "server.js");
const sampleDataPath = path.join(root, "src", "shared", "data", "sampleData.js");
const schemaPath = path.join(root, "supabase", "schema.sql");
const envExamplePath = path.join(root, ".env.example");

const app = fs.readFileSync(appPath, "utf8");
const css = fs.readFileSync(cssPath, "utf8");
const notificationRoute = fs.readFileSync(notificationRoutePath, "utf8");
const coreDataRoute = fs.readFileSync(coreDataRoutePath, "utf8");
const serverSource = fs.readFileSync(serverPath, "utf8");
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
check("03b teacher account can be changed from settings without app_state password storage", hasAll(app, ["teacherAccountSettings", "defaultTeacherAccountSettings", "onUpdateTeacherAccountSettings", "function saveTeacherAccount(event)", "postJson(\"/api/auth/teacher-account\"", "계정 설정", "계정 저장"]) && !app.includes("currentPassword !== account.password") && !app.includes("password: nextPassword || currentPassword") && hasAll(css, [".accountSettingsGrid", ".accountSettingsActions"]));
check("03b-2 teacher login does not fall back to local password storage", !app.includes("loginWithLocalTeacherAccount") && !app.includes("Server teacher auth failed; falling back to local settings."));
check("03c server teacher auth disables default fallback after bootstrap", hasAll(serverSource, ["function hasAnyTeacherAccount", "const needsBootstrap = !(await hasAnyTeacherAccount())", "needsBootstrap && loginId === defaultTeacherAccount.loginId"]));
check("03d student and parent auth use server students table", hasAll(serverSource, ["function authenticateStudentOrParent", "createParentLoginId", '"students"', 'payload.role !== "teacher"', "student_id,name,login_id,pin,status"]));
check("03e app_state filters teacher account settings", hasAll(coreDataRoute, ["sensitiveAppStateKeys", "teacherAccountSettings", "deleteRows(\"app_state\"", "!sensitiveAppStateKeys.has"]));
check("03f student portal data is scoped by session token", hasAll(serverSource, ["createPortalSessionToken", "verifyPortalSessionToken", 'requestUrl.pathname === "/api/portal-data"', "getPortalData(portalSession)", "record.studentId === session.studentId", "homework.studentId === session.studentId"]));
check("03g student portal state writes are scoped by session token", hasAll(serverSource, ['requestUrl.pathname === "/api/portal-state"', "upsertPortalState(portalSession", "item.studentId === session.studentId"]) && hasAll(app, ["fetchPortalData(session.sessionToken)", "postPortalState(session.sessionToken", "isPortalDataReady"]));
check("03h login submit clears loading state on failure", hasAll(app, ["setIsSubmitting(true)", "try {", "finally {", "setIsSubmitting(false)"]));
check("04 attendance-only route exists", hasAll(app, ["isAttendanceOnlyRoute", 'window.location.pathname === "/attendance"', "AttendanceKiosk"]));
check("05 tablet attendance URL setting exists", hasAll(app, ["attendanceUrl", "lateGraceMinutes"]));
check("06 attendance late grace logic exists", hasAll(app, ["lateGraceMinutes", "calculateLateMinutes"]));
check("07 attendance alimtalk API is connected", hasAll(app, ["/api/notifications/attendance-alimtalk", "handleSendAttendanceAlimtalk"]));
check("08 parent alimtalk API is connected", hasAll(app, ["/api/notifications/comment-alimtalk", "parentPhone"]));
check("08b comment alimtalk body override does not call missing compact helper", notificationRoute.includes("const commentBody = normalizeText(payload.commentBodyOverride)") && !notificationRoute.includes("compact(payload.commentBodyOverride)"));
check("09 student alimtalk branch exists", hasAll(app, ['target: testType === "student"', "studentPhone"]));
check("10 alimtalk dry-run safety exists", hasAll(app, ["forceDryRun", "dryRun", "allowRealRecipients", "allowRealStudentRecipients", "allowRealParentRecipients"]));
check("11 alimtalk preview builder exists", hasAll(app, ["buildNotificationTemplatePreview", "templatePreviewText"]));
check("12 alimtalk test result details exist", hasAll(app, ["templateResultCard", "templateEnvName", "variables"]));
check("13 assignment status maps to parent-safe wording", hasAll(app, ["assignmentStatusParentMessages", "getAssignmentStatusParentMessage"]));
check("14 lesson material field exists", hasAll(app, ["lessonMaterial", "getLessonMaterial", "onChangeRecord"]));
check("15 lesson content field exists", hasAll(app, ["lessonContent", "getLessonContent", "onChangeRecord"]));
check("16 incomplete assignment list is normalized", notificationRoute.includes("normalizeList") && notificationRoute.includes("incomplete"));
check("17 retest and supplement schedule variables exist", hasAll(notificationRoute, ["retestSchedule", "supplementSchedule"]));
check("18 Solapi template env vars exist", hasAll(envExample, ["SOLAPI_ATTENDANCE_TEMPLATE_ID", "SOLAPI_DAILY_REPORT_TEMPLATE_ID", "SOLAPI_STUDENT_COMMENT_TEMPLATE_ID"]));
check("19 Supabase lesson record columns exist", hasAll(schema, ["lesson_material", "lesson_content", "assignment_status", "preparation_memo", "prep_student_notice", "prep_student_visible", "prep_parent_visible"]));
check("20 notification management screen exists", hasAll(app, ["NotificationCenter", "templatePreviewText", "handleDispatchDue", "handleReadinessCheck"]));
check("21 supplement schedule creates calendar lesson", hasAll(app, ["handleScheduleSupplementTask", "createSupplementLessonId", "linkedLessonId", "supplementProgressBadge"]));
check("22 student portal is tablet first", hasAll(app, ["studentPortalTabletFirst", "teacherPreviewPortal"]) && css.includes(".studentPortalTabletFirst .metricGrid"));
check("22b student lesson briefing maps journal content and homework", hasAll(app, ["function StudentLessonHistoryCalendar({ homeworks = [], lessons = [], recordsWithLessons = [], selectedStudent })", "const lessonContent = selectedRecord ? getLessonContent(selectedRecord) : \"\"", "getLessonHomework(homeworks, selectedLesson, selectedStudent, \"previous\", lessons)", "getLessonHomework(homeworks, selectedLesson, selectedStudent, \"next\", lessons)", "previousHomeworkText || \"기록 전\"", "nextHomeworkText || \"기록 전\""]));
check("22c student homework list hides linked previous homework duplicates", hasAll(app, ["function isStudentVisibleHomework(homework)", "homework?.homeworkType !== \"previous\"", ".filter(isStudentVisibleHomework)"]));
check("22d student homework registration and edit controls are removed", !app.includes("function StudentRegisterTab") && !app.includes('["register", "등록"]') && !app.includes("자동 재분배로"));
check("22e student homework completed state respects teacher verification", hasAll(app, ["function isHomeworkCompletedForStudent(homework)", "return isHomeworkResolved(homework)", "const isChecked = isHomeworkCompletedForStudent(homework)"]));
check("22f exam post submission MVP exists", hasAll(app, ["examPostSubmissions", "buildExamPostTargetsForStudent", "StudentExamPostSubmissionPanel", "ExamPostSubmissionManager", 'id: "postSubmit"', "시험 후 제출 관리"]) && hasAll(css, [".studentExamPostPanel", ".examPostManager", ".examPostItem"]));
check("22g student homework cards show teacher assignment check labels", hasAll(app, ["function getHomeworkStatusLabel(homework, records = [])", "mergeHomeworkStatusFromLinkedPrevious", "checkedLessonId", "homeworkStatusBadge", "80프로"]) && hasAll(css, [".homeworkStatusBadge.partial", ".homeworkStatusBadge.pending"]));
check("22h exam post photo upload is wired for student and teacher views", hasAll(app, ["uploadExamPostSubmissionFile", "/api/exam-post-files", "fileAttachments", "examPostUploadBox", "getExamPostFileOpenUrl"]) && hasAll(css, [".examPostUploadBox", ".examPostFile.failed"]) && serverSource.includes("/api/exam-post-files"));
check("22i student homework stats include partial teacher checks", hasAll(app, ["function getHomeworkCompletionCredit(homework)", "partial_80", "return 0.8", "return 0.5", "formatHomeworkDoneCount(stats.done)"]));
check("22j exam post target matching is tolerant and always visible during development", hasAll(app, ["function schoolMatchesStudent", "isOpen: true", "시험 후 제출 필요"]) && !app.includes("daysFromTodayToExam <= 7"));
check("22k exam post form includes all Tally self-check fields", hasAll(app, ["examPostFeelingOptions", "examPostScaleOptions", "examPostRegretReasonOptions", "examPostStudyDifficultyOptions", "examPostAcademyHelpOptions", "examPostAutoInfo", "strongUnit", "regretReasons", "regretMoment", "studyDifficulties", "academyHelp", "academyFeedback", "changeForNextExam", "선생님한테 하고 싶은 말, 건의사항, 뭐든 OK"]) && hasAll(css, [".examPostAutoInfo", ".examPostChoiceGroup"]));
check("22l exam post form is readable on mobile and tablet", hasAll(css, [".studentExamPostForm > label", "border-left: 4px solid #172554", ".studentPortalTabletFirst .studentExamPostForm .fieldGrid.two", ".studentPortalTabletFirst .examPostChoiceGroup > div", "min-height: 44px"]));
check("22m exam post submission requires every field before submit", hasAll(app, ["validationMessage", "getMissingRequiredFields", "아직 작성하지 않은 항목이 있습니다", "!selectedFiles.length && !submittedFiles.length", "required value={draft.score}", "required value={draft.goodPart}", "required value={draft.fileMemo}"]) && css.includes(".examPostValidationMessage"));
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
check("40b student real-recipient Alimtalk can be enabled without parent real-recipient send", hasAll(notificationRoute, ["ALIMTALK_ALLOW_REAL_STUDENT_NUMBERS", "recipientType: \"student\"", "recipientType: \"parent\"", "allowRealStudentRecipients", "allowRealParentRecipients"]) && hasAll(envExample, ["ALIMTALK_ALLOW_REAL_STUDENT_NUMBERS=false", "ALIMTALK_ALLOW_REAL_PARENT_NUMBERS=false"]));
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
check("57 lesson cancel keeps undo bin and expires after retention", hasAll(app, ["deletedLessonBundles", "lessonDeleteRetentionMs", "lessonCancelRequestsRef", "7 * 24 * 60 * 60 * 1000", "filterHomeworksForLessons", "pruneExpiredLessonDeletes", 'status: "canceled"', 'postJson("/api/lessons", { lesson: canceledLesson })']) && hasAll(coreDataRoute + serverSource, ["deleteLesson", "deleteLessonsBefore", "deleteExpiredCanceledLessons", "updated_at=lt."]));
check("58 school calendar date modal supports create and linked math exam edits", hasAll(app, ["openEventForm", "이 날짜에 일정 등록", "canEditDerivedSubject", 'field === "examSubject"', "schoolMonthAddButton"]) && css.includes(".schoolDateModalToolbar") && css.includes(".schoolMonthAddButton"));
check("59 lesson prep memo modal saves directly without duplicate save text", hasAll(app, ["prepMemoSaveBar", "onSaveRecord(recordId, lesson, student", "draftMemo", "preparationMemo"]) && css.includes(".prepMemoSaveBar") && !app.includes('prepMemoSaveBar">\\n            <span className={`saveState'));
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
check("68 duplicate exam prep cleanup API is guarded", hasAll(coreDataRoute, ["deleteDuplicateExamPrepRows", "findDuplicateExamPrepRows", "deleteExamPrepRow"]) && hasAll(serverSource, ['request.method === "DELETE"', 'requestUrl.pathname === "/api/exam-prep-rows"', 'confirm") === "true"']));
check("69 exam prep row delete is wired to guarded API", hasAll(app, ["deleteExamPrepRowRequest", "handleDeleteExamPrepRow", "onDeleteRow={handleDeleteExamPrepRow}", "시험정보 삭제 실패", "dangerSoftButton compact"]) && hasAll(serverSource, ['requestUrl.pathname === "/api/exam-prep-rows"', 'confirm") === "true"']));
check("70 exam prep table is compact but edit grid has room for all cycles", hasAll(css, ["grid-template-columns: 96px 132px 64px 92px 112px 168px 250px 280px 190px 180px 112px", "min-width: 1720px", ".examPrepRow.editing", "grid-template-columns: 140px 240px 90px 136px 156px 236px 540px 320px 270px 220px 132px", "min-width: 2480px", "grid-template-columns: 158px 74px 96px minmax(130px, 1fr) 58px"]));
check("71 exam prep delete reconciles persisted Sunday makeup lessons", hasAll(app, ["reconcilePersistedSundayMakeupLessons", "buildSundayMakeupCandidates(nextExamPrepRows)", "existingSundayLessons", "lessonIdsToDelete", 'postJson("/api/lessons/bulk", { lessons: lessonsToSave })', 'fetch(apiUrl(`/api/lessons?id=${encodeURIComponent(lessonId)}`), { method: "DELETE" })']));
check("72 Sunday makeup block time editors have enough width", hasAll(css, ["grid-template-columns: 280px minmax(0, 1fr) auto", "grid-template-columns: repeat(2, minmax(132px, 1fr))", '.examSundayBlockTimeFields input[type="time"]', "min-height: 58px"]));
check("73 Sunday makeup blocks can be removed inside lesson", hasAll(app, ["function deleteBlock(blockId)", "마지막 블록은 삭제할 수 없습니다", "current.filter((block) => block.blockId !== blockId)", "블록 삭제", "getExamSundayMakeupVisibleSourceLabel"]) && hasAll(css, [".examSundayBlockActions", ".examSundayBlockActions > span"]));
check("74 Sunday makeup source pill shows only blocks that remain on source date", hasAll(app, ["shouldDisplayExamSundayMakeupSourceLesson", "getExamSundayMakeupVisibleSourceLabel", "(block.date || lesson.date) === lesson.date", "!shouldDisplayExamSundayMakeupSourceLesson(lesson, generatedLessonControls)"]));
check("75 Sunday makeup detail shows only blocks for selected date", hasAll(app, ["const displayedBlocks = isFocusedMovedBlock", "? [currentBlock]", "blocks.filter((block) => (block.date || lesson.date) === lesson.date)", "{displayedBlocks.length}개", "displayedBlocks.map((block)"]));
check("76 Sunday makeup block edits show save status and persist through app state", hasAll(app, ["blockSaveState", "변경됨 · 블록 저장 필요", "저장됨 · Supabase 자동 반영", "examSundaySaveBar", "postAppState(sharedAppState)", "generatedLessonControls"]) && hasAll(css, [".examSundaySaveBar", ".examSundaySaveBar.dirty", ".examSundaySaveBar.saved"]));
check("77 lesson modal includes high school senior student group", hasAll(app, ['const lessonStudentGradeOrder = ["고3", "고2", "고1", "중3", "중2", "중1"]', "orderedStudentGrades", 'student.grade || "학년 미입력"']));
check("78 lesson journal does not show keyboard shortcut hint text", !app.includes("↑↓←→") && !app.includes("Ctrl+C/V/Z"));
check("79 lesson prep memo shows previous memo separately", hasAll(app, ["previousRecord={prepMemoModal.previousRecord}", "previousLesson={prepMemoModal.previousRecord", "const previousMemo = previousRecord?.preparationMemo", "prepMemoColumns", "직전 수업메모"]) && hasAll(css, [".prepMemoColumns", ".prepMemoPrevious", ".prepMemoButton.hasPrevious"]));
check("80 lesson prep student visibility persists", hasAll(coreDataRoute, ["prep_student_visible: Boolean(record.prepStudentVisible)", "prepStudentVisible: Boolean(row.prep_student_visible)"]) && hasAll(schema, ["prep_student_visible boolean not null default false"]) && fs.existsSync(path.join(root, "supabase", "20260620_lesson_prep_student_visible.sql")));
check("81 lesson prep previous memo falls back to prior saved student memo", hasAll(app, ["const lessonById = new Map(lessons.map((item) => [item.lessonId, item]))", "const previousMemoRecord = sourceRecords", "item.preparationMemo?.trim()", "getRecordLessonDate(item) < lesson.date", "previousMemoRecord ?? previousLessonRecord ?? null"]));
check("82 lesson prep modal uses exact current lesson record", hasAll(app, ["const recordId = createLessonStudentRecordId(lesson.lessonId, commentModal.student.studentId)", "item.lessonStudentRecordId === recordId", "item.lessonStudentRecordId === createLessonStudentRecordId(lesson.lessonId, prepMemoModal.student.studentId)"]));
check("83 lesson prep previous memo panel has larger reading area", hasAll(css, ["grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr)", "grid-template-rows: auto auto minmax(300px, 1fr)", "min-height: 560px", "min-height: 300px"]));
check("84 lesson comment buttons distinguish draft sent and failed states", hasAll(app, ["getCommentButtonState", "getCommentSendState", "comment-${parentCommentState}", "comment-${studentCommentState}", "발송 실패", "작성됨 · 발송 전", 'field === "teacherComment" ? { teacherCommentSendStatus: "" }', 'field === "studentComment" ? { studentCommentSendStatus: "" }', 'postJson("/api/lesson-records", { record: nextRecord })']) && hasAll(css, [".commentOpenButton.comment-draft", ".commentOpenButton.comment-sent", ".commentOpenButton.comment-failed", ".journalCommentCell small.comment-failed"]));
check("84b pre-send check highlights rows with missing required lesson data", hasAll(app, ["showPreSendCheck", "hasPreSendMissingRequiredData(record, previousHomework, nextHomework)", "attendanceStatus === \"pending\"", "record?.lessonMaterial", "getLessonContent(record)", "previousHomework?.title", "nextHomework?.title", "normalizeAssignmentStatusValue", "preSendMissing", "발송 전 점검"]) && hasAll(css, [".preSendCheckButton", ".journalRow.preSendMissing", "#fffbeb"]));
check("84c lesson journal rows auto-save records after editing", hasAll(app, ["autoSaveTimersRef", "function scheduleRecordAutoSave(record)", "setTimeout(() =>", "handleSaveRecord(recordId, null, null, record)", "scheduleRecordAutoSave(nextRecord)", "const isLatestRecord = !recordOverride || latestRecord?.updatedAt === record.updatedAt"]) && !hasAll(app, ["<span>저장</span>", "onClick={() => onSaveRecord(recordId, lesson, student)}"]));
check("84d lesson notification plan controls default delay and no-send modes", hasAll(app, ["lessonNotificationPlans", "handleUpdateLessonNotificationPlan", "lessonNotificationPlan={lessonNotificationPlans[selectedLesson.lessonId] ?? { mode: \"default\" }}", "기본 예약", "30분 지연", "알림톡 없음", "initialSendTiming", "const sendTiming = \"now\"", "currentPlanLabel", "현재 수업 발송 계획", "즉시 발송", "canSendNowToRealRecipient", "const baseTime = getDayKey(lesson?.date) === \"sat\" ? \"18:30\" : \"22:30\""]) && hasAll(css, [".defaultScheduleHint", ".schedulePlanButton", ".currentSchedulePlan"]));
check("84e shared modal closes with Escape key", hasAll(app, ["function Modal({ backdropClassName = \"\", children, className = \"\", onClose, subtitle, title })", "function handleEscapeKey(event)", "event.key === \"Escape\"", "onClose?.()", "window.addEventListener(\"keydown\", handleEscapeKey)", "window.removeEventListener(\"keydown\", handleEscapeKey)"]));
check("85 lesson prep memo is not duplicated into comment drafts", hasAll(app, ["compactDuplicateMessageBlocks", "textIncludesMessageBlock", "textIncludesEveryLine", "const shouldAddPrepMemo = prepMemo && !textIncludesMessageBlock(commentText, prepMemo)", "const shouldAddSupplement =", "shouldAddPrepMemo ? prepMemo : \"\"", "shouldAddSupplement ? supplementBlock : \"\""]));
check("86 scheduled alimtalk status stays pending even in dry-run", hasAll(app, ['const logStatus = scheduledDate ? "scheduled" : result.result?.dryRun ? "dry_run" : "sent"', 'const completeStatus = scheduledDate', '? `예약 중 · ${scheduledLabel}`', '? "테스트 발송 기록됨"']));
check("87 supplement detail fields are readable", hasAll(app, ["supplementReadableGrid", "supplementReadableField", "supplementSchedulePanel", "supplementDateGrid", "보충일지와 알림톡 문구에 반영되는 핵심 내용입니다.", "보충 일정 안내 초안입니다"]) && hasAll(css, [".supplementReadableGrid", ".supplementReadableField", ".supplementSchedulePanel", ".notificationDraftField textarea", "min-height: 180px"]));
check("88 supplement save combines notification draft and lesson sync", hasAll(app, ["function handleSaveTask(task)", "const taskWithDraft = { ...task, notificationDraft: draft }", "onUpdateTask(task.makeupTaskId, \"notificationDraft\", draft)", "onScheduleTask(taskWithDraft)", "저장하고 일정 반영", "내용만 저장"]));
check("89 supplement progress memo is included in notification draft", hasAll(app, ["const progressMemo = normalizeMessageText(task.supplementProgressMemo)", "const progressMemoBlock = progressMemo ? `\\n\\n보충 메모:\\n${progressMemo}` : \"\"", "${progressMemoBlock}"]));
check("90 special lesson pills keep user-selected calendar color", hasAll(app, ["style={{ background: lesson.color }}", "lesson.lessonType === \"preExam\" ? \"preExamLessonPill\"", "lesson.lessonType === \"makeup\" ? \"makeupLessonPill\"", "lesson.lessonType === \"examSundayMakeup\" ? \"sundayMakeupLessonPill\""]) && !hasAll(css, [".lessonPill.makeupLessonPill", "background: #172554 !important"]) && !hasAll(css, [".lessonPill.preExamLessonPill", "background: #6d28d9 !important"]) && !hasAll(css, [".lessonPill.sundayMakeupLessonPill", "background: #0e7490 !important"]));
check("91 homework makeup schedule uses dark navy calendar color", hasAll(app, ["function getSupplementLessonColor(taskType)", "if (taskType === \"homework_makeup\") return \"#172554\"", "color: getSupplementLessonColor(task.taskType)"]));
check("92 existing homework makeup lessons are normalized to dark navy", hasAll(app, ["function normalizeHomeworkMakeupLessonColors(lessons = [], makeupTasks = [])", "homeworkMakeupLessonIds.has(lesson.lessonId)", "return { ...lesson, color: getSupplementLessonColor(\"homework_makeup\") }", "normalizeHomeworkMakeupLessonColors(lessonsResult.lessons, makeupTasksResult.makeupTasks ?? [])"]));
check("93 lesson edit avoids custom class template foreign key", hasAll(app, ["<option value=\"\">직접 입력 일정</option>", "const classTemplateId = formValues.classTemplateId && template ? template.classTemplateId : \"\"", "classTemplateId,"]) && !app.includes('classTemplateId: template?.classTemplateId ?? "custom"'));

const failed = checks.filter((item) => !item.ok);
console.log(JSON.stringify({ ok: failed.length === 0, total: checks.length, failed, checks }, null, 2));

if (failed.length) {
  process.exitCode = 1;
}
