import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  createTeacherViewAdapters,
  TeacherViewOutlet,
  teacherViewContracts,
  teacherViewIds
} from "../src/app/TeacherViewOutlet.js";
import { TeacherViewLoadBoundary } from "../src/app/TeacherViewLoadBoundary.js";
import { lazyTeacherViewComponents } from "../src/app/lazyTeacherViewComponents.js";

const expectedContracts = [
  ["lessons", "TeacherLessonHubV2"],
  ["specialLectureManagement", "NotificationCenter"],
  ["overdue", "OverdueHomework"],
  ["followups", "FollowUpCenter"],
  ["supplements", "SupplementCenter"],
  ["materials", "MaterialManager"],
  ["resources", "ResourceLibraryCenter"],
  ["students", "StudentManager"],
  ["classes", "ClassManager"],
  ["examPrep", "ExamPrepCenter"],
  ["examAnalysisPipeline", "ExamAnalysisPipelineCenter"],
  ["schoolCalendar", "SchoolCalendarCenter"],
  ["lessonResearch", "LessonResearchCenter"],
  ["aiVariants", "AIVariantProblemCenter"],
  ["settlements", "SettlementWorkspace"],
  ["notifications", "NotificationCenter"],
  ["settings", "SettingsCenter"]
];

assert.equal(teacherViewContracts.length, 17);
assert.deepEqual(teacherViewIds, expectedContracts.map(([id]) => id));
assert.deepEqual(
  teacherViewContracts.map(({ id, componentName }) => [id, componentName]),
  expectedContracts
);
assert.equal(new Set(teacherViewIds).size, teacherViewIds.length);
assert.equal(Object.isFrozen(teacherViewContracts), true);
assert.equal(Object.isFrozen(teacherViewIds), true);

const allowedEffectKinds = new Set(["save", "delete", "reserve", "cancel", "send", "reconcile"]);
for (const contract of teacherViewContracts) {
  assert.equal(Object.isFrozen(contract), true);
  assert.equal(Object.isFrozen(contract.effectKinds), true);
  assert.equal(new Set(contract.effectKinds).size, contract.effectKinds.length);
  assert.equal(contract.effectKinds.every((effectKind) => allowedEffectKinds.has(effectKind)), true);
}
assert.deepEqual(
  teacherViewContracts.find(({ id }) => id === "lessons").effectKinds,
  ["save", "delete", "reserve", "cancel", "send", "reconcile"]
);
assert.deepEqual(
  teacherViewContracts.find(({ id }) => id === "supplements").effectKinds,
  ["save", "reserve", "cancel"]
);

const componentNames = new Set(expectedContracts.map(([, componentName]) => componentName));
componentNames.add("Modal");
const components = Object.fromEntries([...componentNames].map((componentName) => [
  componentName,
  function FixtureComponent() { return componentName; }
]));
const runtimeBindings = {
  lessonJournalTransport: Object.freeze({
    loadLessonJournalReservationAudit: () => "lesson-audit"
  }),
  notificationCenter: Object.freeze({ source: "fixture" }),
  SpecialLectureNoticePanel: function FixtureSpecialLectureNoticePanel() { return "specialLecture"; },
  teacherLessonHub: Object.freeze({ source: "lesson-fixture" })
};

const actionStubs = new Map();
const actions = new Proxy({}, {
  get(_target, property) {
    if (!actionStubs.has(property)) actionStubs.set(property, () => property);
    return actionStubs.get(property);
  }
});
const models = new Proxy({
  aiSettings: { notificationTemplates: [] },
  lessonClipboard: null,
  lessonUndoStack: []
}, {
  get(target, property) {
    return property in target ? target[property] : [];
  }
});

const adapters = createTeacherViewAdapters({ actions, components, models, runtimeBindings });
assert.deepEqual(Object.keys(adapters), teacherViewIds);
for (const [id, componentName] of expectedContracts) {
  assert.equal(adapters[id].Component, components[componentName], `${id} must retain its component`);
  assert.equal(typeof adapters[id].props, "object");
}

const highRiskCallbackMappings = [
  ["lessons", "onDeleteLesson", "handleDeleteLesson"],
  ["examPrep", "onDeleteRow", "handleDeleteExamPrepRow"],
  ["schoolCalendar", "onSaveEvent", "handleSaveSchoolEvent"],
  ["schoolCalendar", "onDeleteEvent", "handleDeleteSchoolEvent"],
  ["settlements", "onSaveMonthlySettlement", "handleSaveMonthlySettlementMonth"]
];
for (const [viewId, propName, actionName] of highRiskCallbackMappings) {
  assert.equal(adapters[viewId].props[propName], actions[actionName], `${viewId}.${propName} must preserve ${actionName}`);
}
for (const viewId of ["specialLectureManagement", "notifications"]) {
  assert.equal(adapters[viewId].props.runtime, runtimeBindings.notificationCenter);
  assert.equal(adapters[viewId].props.SpecialLectureNoticePanel, runtimeBindings.SpecialLectureNoticePanel);
}
assert.equal(
  adapters.specialLectureManagement.props.effects.specialLectureDeletion.onDeleteSpecialLectureApplication,
  actions.handleDeleteSpecialLectureApplication
);
assert.equal(
  adapters.notifications.props.effects.historyProvider.onCancelNotificationJob,
  actions.handleCancelNotificationJob
);
assert.equal(
  adapters.notifications.props.effects.historyProvider.onReconcileSolapiNotificationResults,
  actions.handleReconcileSolapiNotificationResults
);
assert.equal(
  adapters.specialLectureManagement.props.effects.historyTransport.onRefresh,
  actions.handleRefreshActiveNotificationJobs
);
assert.equal(
  adapters.notifications.props.effects.historyTransport.onRefresh,
  actions.handleRefreshNotificationHistory
);
assert.equal(Object.hasOwn(adapters.specialLectureManagement.props, "onDeleteSpecialLectureApplication"), false);
assert.equal(Object.hasOwn(adapters.notifications.props, "onCancelNotificationJob"), false);
assert.equal(Object.hasOwn(adapters.notifications.props, "onReconcileSolapiNotificationResults"), false);
assert.equal(adapters.lessons.props.runtime, runtimeBindings.teacherLessonHub);
assert.equal(
  adapters.lessons.props.lessonJournalEffects.persistence.onSaveLessonJournalDrafts,
  actions.handleSaveLessonJournalDrafts
);
assert.equal(
  adapters.lessons.props.lessonJournalEffects.provider.onCancelNotificationJob,
  actions.handleCancelNotificationJob
);
assert.equal(
  adapters.lessons.props.lessonJournalEffects.provider.loadLessonJournalReservationAudit,
  runtimeBindings.lessonJournalTransport.loadLessonJournalReservationAudit
);
assert.equal(
  adapters.supplements.props.effects.persistence.onSaveTask,
  actions.handleSaveMakeupTask
);
assert.equal(
  adapters.supplements.props.effects.provider.onReserveNotification,
  actions.handleReserveSupplementNotificationControl
);
assert.equal(
  adapters.supplements.props.effects.orchestration.onScheduleTask,
  actions.handleScheduleSupplementTask
);
assert.equal(Object.hasOwn(adapters.supplements.props, "onSaveTask"), false);
assert.equal(adapters.students.props.effects.draft.onUpdateStudent, actions.handleUpdateStudent);
assert.equal(adapters.students.props.effects.persistence.onSaveStudent, actions.handleSaveStudent);
assert.equal(adapters.students.props.effects.deletion.onPermanentlyDeleteWithdrawnStudent, actions.handlePermanentlyDeleteWithdrawnStudent);
assert.equal(adapters.students.props.effects.lifecycle.onDeleteStudent, actions.handleDeleteStudent);
assert.equal(adapters.students.props.effects.audit.onAuditWithdrawnStudentDeletion, actions.handleAuditWithdrawnStudentDeletion);
assert.equal(Object.hasOwn(adapters.students.props, "onSaveStudent"), false);

const lessonBoundaryElement = TeacherViewOutlet({ activeView: "lessons", adapters });
assert.equal(lessonBoundaryElement.type, TeacherViewLoadBoundary);
assert.equal(lessonBoundaryElement.key, "lessons");
const lessonElement = lessonBoundaryElement.props.children.props.children;
assert.equal(lessonElement.type, components.TeacherLessonHubV2);
assert.equal(lessonElement.props.onDeleteLesson, actions.handleDeleteLesson);
assert.equal(lessonElement.props.runtime, runtimeBindings.teacherLessonHub);
assert.equal(TeacherViewOutlet({ activeView: "studentPortal", adapters }), null);
assert.equal(TeacherViewOutlet({ activeView: "reports", adapters }), null);
assert.equal(TeacherViewOutlet({ activeView: "unknown", adapters }), null);

const [appSource, lazyViewSource, outletSource, teacherLessonHubSource, lessonJournalDetailSource, lessonJournalDraftControllerSource, lessonJournalEffectAdapterSource, studentEffectAdapterSource, supplementEffectAdapterSource] = await Promise.all([
  readFile(new URL("../src/app/App.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/app/lazyTeacherViewComponents.js", import.meta.url), "utf8"),
  readFile(new URL("../src/app/TeacherViewOutlet.js", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/lessons/TeacherLessonHubV2.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/lessons/LessonJournalDetail.jsx", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/lessons/useLessonJournalDraftController.js", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/lessons/lessonJournalEffectAdapter.js", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/students/studentEffectAdapter.js", import.meta.url), "utf8"),
  readFile(new URL("../src/domains/supplements/supplementEffectAdapter.js", import.meta.url), "utf8")
]);
assert.equal(appSource.includes('from "./TeacherViewOutlet.js"'), true);
assert.equal(appSource.includes('import { lazyTeacherViewComponents } from "./lazyTeacherViewComponents.js"'), true);
assert.equal(lazyViewSource.includes('import("../domains/lessons/TeacherLessonHubV2.jsx")'), true);
assert.equal(appSource.includes("function TeacherLessonHubV2("), false);
assert.equal(appSource.includes("const teacherViewAdapters = createTeacherViewAdapters({"), true);
assert.equal(appSource.includes("<TeacherViewOutlet activeView={activeView} adapters={teacherViewAdapters} />"), true);
for (const viewId of teacherViewIds) {
  assert.equal(appSource.includes(`{activeView === "${viewId}" ? (`), false, `${viewId} must render through the outlet`);
}
assert.equal(appSource.includes('activeView === "studentPortal"'), true);
assert.equal(appSource.includes('activeView === "reports"'), true);

const componentsBlock = appSource.slice(appSource.indexOf("    components: {"), appSource.indexOf("    models: {"));
const modelsBlock = appSource.slice(appSource.indexOf("    models: {"), appSource.indexOf("    actions: {"));
const actionsBlock = appSource.slice(appSource.indexOf("    actions: {"), appSource.indexOf("\n    }\n  });", appSource.indexOf("    actions: {")));
const injectedNames = (block) => new Set(block.split(/\r?\n/).map((line) => line.trim().replace(/,$/, "")));
const injectedComponents = injectedNames(componentsBlock);
const injectedModels = injectedNames(modelsBlock);
const injectedActions = injectedNames(actionsBlock);
const lazyComponentNames = new Set(Object.keys(lazyTeacherViewComponents));
for (const componentName of new Set([...componentNames])) {
  if (lazyComponentNames.has(componentName)) {
    assert.equal(injectedComponents.has("...lazyTeacherViewComponents"), true, `App must inject lazy ${componentName}`);
  } else {
    assert.equal(injectedComponents.has(componentName), true, `App must inject ${componentName}`);
  }
}
for (const [, actionName] of `${outletSource}\n${lessonJournalEffectAdapterSource}\n${studentEffectAdapterSource}\n${supplementEffectAdapterSource}`.matchAll(/actions\.([A-Za-z0-9_]+)/g)) {
  assert.equal(injectedActions.has(actionName), true, `App must inject ${actionName}`);
}
for (const [, modelName] of outletSource.matchAll(/models\.([A-Za-z0-9_]+)/g)) {
  assert.equal(injectedModels.has(modelName), true, `App must inject ${modelName}`);
}
for (const forbiddenToken of ["fetch(", "postJson(", "getJsonWithTimeout(", "localStorage", '"/api/']) {
  assert.equal(outletSource.includes(forbiddenToken), false, `outlet must not own ${forbiddenToken}`);
  assert.equal(teacherLessonHubSource.includes(forbiddenToken), false, `lesson hub screen must not own ${forbiddenToken}`);
  assert.equal(lessonJournalDetailSource.includes(forbiddenToken), false, `lesson journal screen must not own ${forbiddenToken}`);
  assert.equal(lessonJournalDraftControllerSource.includes(forbiddenToken), false, `lesson journal draft controller must not own ${forbiddenToken}`);
  assert.equal(lessonJournalEffectAdapterSource.includes(forbiddenToken), false, `lesson journal effect adapter must not own ${forbiddenToken}`);
  assert.equal(studentEffectAdapterSource.includes(forbiddenToken), false, `student effect adapter must not own ${forbiddenToken}`);
  assert.equal(supplementEffectAdapterSource.includes(forbiddenToken), false, `supplement effect adapter must not own ${forbiddenToken}`);
}
assert.equal(teacherLessonHubSource.includes("export function TeacherLessonHubV2("), true);
assert.equal(teacherLessonHubSource.includes("effects={lessonJournalEffects}"), true);
assert.equal(teacherLessonHubSource.includes("onSaveLessonJournalDrafts={onSaveLessonJournalDrafts}"), false);
assert.equal(teacherLessonHubSource.includes("onScheduleLessonNotificationsAt={onScheduleLessonNotificationsAt}"), false);
assert.equal(lessonJournalDetailSource.includes("export function LessonJournalDetail("), true);
assert.equal(lessonJournalDetailSource.includes("loadLessonJournalReservationAudit({"), true);
assert.equal(lessonJournalDetailSource.includes("persistence: {"), true);
assert.equal(lessonJournalDetailSource.includes("provider: {"), true);
assert.equal(lessonJournalDetailSource.includes("onSaveLessonJournalDrafts,"), true);
assert.equal(lessonJournalDetailSource.includes("useLessonJournalDraftController({"), true);
assert.equal(lessonJournalDraftControllerSource.includes("onSaveLessonJournalDrafts?.("), true);
assert.equal(appSource.includes("function loadLessonJournalReservationAudit({ date, lessonId })"), true);
assert.equal(appSource.includes("const lessonJournalTransport = Object.freeze({"), true);
assert.equal(appSource.includes("lessonJournalTransport,"), true);
assert.equal(appSource.includes("return getJsonWithTimeout(path, 12000,"), true);

console.log("teacher view contracts, callback adapters, and App ownership boundary fixtures passed");
